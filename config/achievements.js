/* ══════════════════════════════════════════════════════════════════
   achievements.js — GRND // Workout Wiki
   ──────────────────────────────────────────────────────────────────
   Phase 1+2 of the achievement hex-map project (Phase 3 = the visual
   map itself, built separately on top of this data).

   This file:
     (1) TRACKS the raw data three achievement conditions need that
         nothing else in the app tracks yet — time spent in
         Anatomy/Nutrition/Recovery, personal-record breaks, and
         cut/bulk calorie-target streaks.
     (2) OVERRIDES the unlock predicates for Chemist, Biologist, and
         the four seasonal themes so they're earned through real
         activity instead of "always on" (chemist/biologist) or
         "whatever month it is" (summer/winter/spring/autumn).

   Kept as its own file (not merged into system.js/services.js) so
   this specific change is easy to isolate, review, or revert without
   touching the existing theme machinery it builds on top of.

   Load order: after config/system.js (redeclares isSeasonModeUnlocked
   / updateChemistModeBtn / updateBiologistModeBtn — later top-level
   function declarations simply overwrite earlier ones in the global
   scope) and after data/intake-tracker.js + src/services.js (reads
   CALC_STATE, intake logs, and hooks the PR-log flow).

   Once earned, a theme stays earned forever (grnd_theme_earned) even
   if the underlying streak/season later lapses — same "trophy" logic
   as Hall of Fame / Pantheon.
══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function _ld(key, def) {
    try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : def; } catch (e) { return def; }
  }
  function _sv(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

  /* ── Permanent "earned" flags — the trophy layer all four checks below
     write into. Once true for a key, it never goes back to false. ──── */
  const EARNED_KEY = 'grnd_theme_earned';
  function _earnedMap() { return _ld(EARNED_KEY, {}); }
  function _markEarned(key) {
    const e = _earnedMap();
    if (e[key]) return false;
    e[key] = true;
    _sv(EARNED_KEY, e);
    return true;
  }
  function _lazyUnlocked(key, conditionFn) {
    if (_earnedMap()[key]) return true;
    if (conditionFn()) { _markEarned(key); return true; }
    return false;
  }
  function _refreshBtns() {
    if (typeof updateAllModeBtns === 'function') updateAllModeBtns();
  }
  function _adminPreview() {
    return typeof isAdminPreviewEnabled === 'function' && isAdminPreviewEnabled();
  }

  /* ══ 1. ENGAGEMENT TIME ═══════════════════════════════════════════
     Biologist: 5 cumulative minutes in Anatomy.
     Chemist:   5 cumulative minutes in Nutrition OR Recovery (either
                counts toward the same total — it's one lab, two wings).
  ═══════════════════════════════════════════════════════════════════ */
  const ENGAGEMENT_KEY     = 'grnd_engagement_time';   // { anatomy: sec, chemLab: sec }
  const ENGAGEMENT_GOAL_SEC = 5 * 60;
  const MAX_FLUSH_MS       = 30 * 60 * 1000; // guard against sleep/idle inflating a single flush

  const CHEM_LAB_VIEWS = new Set([
    'nutrition', 'foods-library', 'vitamins-library', 'hydration-library',
    'meal-timing-library', 'meal-prep-library', 'intake-tracker',
    'recover', 'recover-basics', 'recover-tissue', 'recover-supplements',
    'recover-methods', 'recover-timelines',
  ]);
  const ANATOMY_VIEWS = new Set(['anatomy']);

  function _engagementBucketFor(view) {
    if (ANATOMY_VIEWS.has(view)) return 'anatomy';
    if (CHEM_LAB_VIEWS.has(view)) return 'chemLab';
    return null;
  }

  let _engBucket = null;
  let _engEnteredAt = null;

  function _flushEngagement() {
    if (!_engBucket || !_engEnteredAt) return;
    const elapsedMs = Math.min(Date.now() - _engEnteredAt, MAX_FLUSH_MS);
    _engEnteredAt = null;
    if (elapsedMs <= 0) return;
    const t = _ld(ENGAGEMENT_KEY, { anatomy: 0, chemLab: 0 });
    t[_engBucket] = (t[_engBucket] || 0) + elapsedMs / 1000;
    _sv(ENGAGEMENT_KEY, t);
    let changed = false;
    if ((t.anatomy  || 0) >= ENGAGEMENT_GOAL_SEC && _markEarned('biologist')) changed = true;
    if ((t.chemLab  || 0) >= ENGAGEMENT_GOAL_SEC && _markEarned('chemist'))   changed = true;
    if (changed) _refreshBtns();
  }

  window.getEngagementTime = function () { return _ld(ENGAGEMENT_KEY, { anatomy: 0, chemLab: 0 }); };

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) _flushEngagement();
    else if (_engBucket) _engEnteredAt = Date.now(); // resume timing fresh; backgrounded time isn't counted
  });
  window.addEventListener('beforeunload', _flushEngagement);

  /* ══ 2. PR BREAKS ═════════════════════════════════════════════════
     Winter Arc: break at least 3 personal records (a logged value that
     beats every prior entry for that PR — see the surgical addition in
     services.js's metricsSubmitLogPR, which calls window.recordPRBreak()
     when that happens).
  ═══════════════════════════════════════════════════════════════════ */
  const PR_BREAKS_KEY  = 'grnd_metrics_pr_breaks';
  const PR_BREAKS_GOAL = 3;

  window.recordPRBreak = function () {
    const n = _ld(PR_BREAKS_KEY, 0) + 1;
    _sv(PR_BREAKS_KEY, n);
    if (n >= PR_BREAKS_GOAL && _markEarned('winter')) _refreshBtns();
    return n;
  };
  window.getPRBreakCount = function () { return _ld(PR_BREAKS_KEY, 0); };

  /* ══ 3. CUT / BULK STREAK ═════════════════════════════════════════
     Spring Cut:   10 consecutive days logged intake within the cut
                   calorie target.
     Autumn Bulk:  same, for the bulk target.
     Evaluated once per real calendar day (never re-judges a day twice),
     always looking at YESTERDAY's log so a day in progress can't be
     judged before it's over. Switching goal mid-streak restarts the
     count under the new goal rather than breaking it to zero, since
     "on target yesterday" is still true either way.
  ═══════════════════════════════════════════════════════════════════ */
  const STREAK_KEY       = 'grnd_diet_streak'; // { goal, days, lastCheckedDate }
  const STREAK_GOAL_DAYS = 10;
  const KCAL_TOLERANCE   = 150;

  function _dateKey(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  function _streakState() { return _ld(STREAK_KEY, { goal: null, days: 0, lastCheckedDate: null }); }
  window.getDietStreak = _streakState;

  function _checkDietStreak() {
    if (typeof CALC_STATE === 'undefined' || !CALC_STATE.lastResult) return;
    const goal = CALC_STATE.goal;
    if (goal !== 'cut' && goal !== 'bulk') return; // maintain doesn't feed either seasonal theme

    const todayKey = _dateKey(new Date());
    const st = _streakState();
    if (st.lastCheckedDate === todayKey) return; // already judged today

    if (st.lastCheckedDate) { // skip judging on the very first check ever (no prior baseline)
      const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
      const yKey = _dateKey(yesterday);
      const entries = typeof _intakeLoadEntriesForDate === 'function' ? _intakeLoadEntriesForDate(yKey) : [];
      const totals  = typeof _intakeSumTotals === 'function' ? _intakeSumTotals(entries) : null;
      const target  = typeof _intakeGetActiveTarget === 'function' ? _intakeGetActiveTarget() : null;
      const onTarget = entries.length > 0 && totals && target && Math.abs(totals.kcal - target.kcal) <= KCAL_TOLERANCE;

      if (onTarget && st.goal === goal) st.days = (st.days || 0) + 1;
      else if (onTarget) st.days = 1; // goal changed since last check — restart under the new goal
      else st.days = 0; // missed day or off-target — streak breaks
    }

    st.goal = goal;
    st.lastCheckedDate = todayKey;
    _sv(STREAK_KEY, st);

    let changed = false;
    if (goal === 'cut'  && st.days >= STREAK_GOAL_DAYS && _markEarned('spring')) changed = true;
    if (goal === 'bulk' && st.days >= STREAK_GOAL_DAYS && _markEarned('autumn')) changed = true;
    if (changed) _refreshBtns();
  }

  /* ── One combined onViewChanged chain drives both engagement-time
     tracking and the daily streak tick (checked whenever the user
     visits nutrition, since that's the natural "yesterday's log is
     final" moment). ──────────────────────────────────────────────── */
  const _prevOnViewChanged = window.onViewChanged;
  window.onViewChanged = function (toView, fromView) {
    if (typeof _prevOnViewChanged === 'function') _prevOnViewChanged(toView, fromView);
    _flushEngagement();
    const bucket = _engagementBucketFor(toView);
    if (bucket) { _engBucket = bucket; _engEnteredAt = Date.now(); }
    if (toView === 'nutrition' || toView === 'intake-tracker') _checkDietStreak();
  };
  document.addEventListener('DOMContentLoaded', _checkDietStreak);

  /* ══ 4. UNLOCK PREDICATES ═════════════════════════════════════════
     Overrides the calendar-based isSeasonModeUnlocked() from
     config/system.js, and adds real gates for Chemist/Biologist
     (previously "always available, no unlock gate").
  ═══════════════════════════════════════════════════════════════════ */
  function _unlockedHighDiffBodyweightCount() {
    if (typeof TREE_LIBRARY_SOURCES === 'undefined' || typeof loadProgress !== 'function') return 0;
    const prog = loadProgress();
    let count = 0;
    TREE_LIBRARY_SOURCES.forEach(function (src) {
      (src.data || []).forEach(function (e) {
        if (e.diff >= 5 && prog[src.libKey + '-' + e.id] === 'unlocked') count++;
      });
    });
    return count;
  }

  window.isSeasonModeUnlocked = function (season) {
    if (_adminPreview()) return true;
    switch (season) {
      case 'summer': return _lazyUnlocked('summer', function () { return _unlockedHighDiffBodyweightCount() >= 10; });
      case 'winter': return _lazyUnlocked('winter', function () { return window.getPRBreakCount() >= PR_BREAKS_GOAL; });
      case 'spring': return _lazyUnlocked('spring', function () { const s = _streakState(); return s.goal === 'cut'  && s.days >= STREAK_GOAL_DAYS; });
      case 'autumn': return _lazyUnlocked('autumn', function () { const s = _streakState(); return s.goal === 'bulk' && s.days >= STREAK_GOAL_DAYS; });
      default: return false;
    }
  };

  /* ══ GYM / CARDIO ═════════════════════════════════════════════════
     Gym:    logged any PR Metric (src/services.js) tagged unit "kg"
             reaching >= 100. Overrides system.js's "any single gym
             exercise unlocked" (practically free next to every other
             theme's gate).
     Cardio: completed the "Long Run" exercise (cardioRunning-16),
             whose own data already carries the 10km tier as its
             Novice goalpost — reuses that instead of adding new
             distance/duration logging the app doesn't have yet.
  ═══════════════════════════════════════════════════════════════════ */
  const GYM_KG_GOAL = 100;
  const CARDIO_LONG_RUN_KEY = 'cardioRunning-16';

  window.isGymModeUnlocked = function () {
    if (_adminPreview()) return true;
    return _lazyUnlocked('gym', function () {
      const prData = _ld('grnd_metrics_pr', {});
      return Object.keys(prData).some(function (key) {
        const pr = prData[key];
        return pr && pr.unit === 'kg' && Array.isArray(pr.entries) &&
          pr.entries.some(function (e) { return e && e.v >= GYM_KG_GOAL; });
      });
    });
  };
  window.isCardioModeUnlocked = function () {
    if (_adminPreview()) return true;
    return _lazyUnlocked('cardio', function () {
      const prog = typeof loadProgress === 'function' ? loadProgress() : {};
      return prog[CARDIO_LONG_RUN_KEY] === 'unlocked';
    });
  };

  /* Gated button-updaters, same shape as system.js's originals but with
     copy reflecting the real conditions above. */
  window.updateGymModeBtn = function () {
    const row  = document.getElementById('gymModeRow');
    const btn  = document.getElementById('gymModeBtn');
    const desc = document.getElementById('gym-mode-desc');
    if (!row || !btn) return;
    const unlocked = window.isGymModeUnlocked();
    row.style.display = unlocked ? '' : 'none';
    if (!unlocked) return;
    const isActive = document.documentElement.dataset.theme === 'gym';
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🏋 ACTIVE';
      if (desc) desc.textContent = 'Iron & steel mode active';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'Logged 100kg+ on a lift — iron mode unlocked!';
    }
  };
  window.updateCardioModeBtn = function () {
    const row  = document.getElementById('cardioModeRow');
    const btn  = document.getElementById('cardioModeBtn');
    const desc = document.getElementById('cardio-mode-desc');
    if (!row || !btn) return;
    const unlocked = window.isCardioModeUnlocked();
    row.style.display = unlocked ? '' : 'none';
    if (!unlocked) return;
    const isActive = document.documentElement.dataset.theme === 'cardio';
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🏃 ACTIVE';
      if (desc) desc.textContent = 'Dawn horizon mode active';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'Long Run (10km) complete — dawn mode unlocked!';
    }
  };

  window.isChemistModeUnlocked = function () {
    if (_adminPreview()) return true;
    return _lazyUnlocked('chemist', function () { return (window.getEngagementTime().chemLab || 0) >= ENGAGEMENT_GOAL_SEC; });
  };
  window.isBiologistModeUnlocked = function () {
    if (_adminPreview()) return true;
    return _lazyUnlocked('biologist', function () { return (window.getEngagementTime().anatomy || 0) >= ENGAGEMENT_GOAL_SEC; });
  };

  /* Gated versions of the two button-updaters (system.js's originals
     showed these rows unconditionally). Same shape as every other
     gated mode (e.g. updateSidequestsModeBtn). */
  window.updateChemistModeBtn = function () {
    const row  = document.getElementById('chemistModeRow');
    const btn  = document.getElementById('chemistModeBtn');
    const desc = document.getElementById('chemist-mode-desc');
    if (!row || !btn) return;
    const unlocked = window.isChemistModeUnlocked();
    row.style.display = unlocked ? '' : 'none';
    if (!unlocked) return;
    const isActive = document.documentElement.dataset.theme === 'chemist';
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🧪 ACTIVE';
      if (desc) desc.textContent = 'Chemist theme active';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'Unlocked — 5 minutes spent in Nutrition or Recovery';
    }
  };
  window.updateBiologistModeBtn = function () {
    const row  = document.getElementById('biologistModeRow');
    const btn  = document.getElementById('biologistModeBtn');
    const desc = document.getElementById('biologist-mode-desc');
    if (!row || !btn) return;
    const unlocked = window.isBiologistModeUnlocked();
    row.style.display = unlocked ? '' : 'none';
    if (!unlocked) return;
    const isActive = document.documentElement.dataset.theme === 'biologist';
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🧬 ACTIVE';
      if (desc) desc.textContent = 'Biologist theme active';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'Unlocked — 5 minutes spent in Anatomy';
    }
  };

  /* ══ 5. PERSONALIZATION UNLOCKS ═══════════════════════════════════
     Loader image / background image / custom alarm sound / custom
     quote were already scaffolded in config/system.js (rows in
     Preferences, some with stubbed picker functions) but Quote's
     "unlock" was never actually checked anywhere — it just always
     worked. These give all four a real, checkable condition that the
     hex map (and the existing Preferences rows) both read.
  ═══════════════════════════════════════════════════════════════════ */
  function getFoodTrackingDayCount() {
    let count = 0;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k || k.indexOf('grnd_intake_log_') !== 0) continue;
        const entries = JSON.parse(localStorage.getItem(k) || '[]');
        if (Array.isArray(entries) && entries.length) count++;
      }
    } catch (e) {}
    return count;
  }
  window.getFoodTrackingDayCount = getFoodTrackingDayCount;

  window.isQuoteUnlocked = function () {
    if (_adminPreview()) return true;
    return _lazyUnlocked('quote', function () { return getFoodTrackingDayCount() >= 14; });
  };
  window.isLoaderUnlocked = function () {
    if (_adminPreview()) return true;
    return _lazyUnlocked('loader', function () {
      const s = typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary() : null;
      return !!s && s.level >= 25;
    });
  };
  window.isBgUnlocked = function () {
    if (_adminPreview()) return true;
    return _lazyUnlocked('background', function () {
      const s = typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary() : null;
      return !!s && s.level >= 50;
    });
  };
  /* Interface skins (glass/glassmorph/neo/skeu/clay/spatial/brutal/arcade)
     — each its own hex, gated by player level. Several share the top tier
     since there are 8 skins but only 5 requested tiers (10/25/50/75/100). */
  const UI_STYLE_LEVELS = { glass: 10, glassmorph: 25, neo: 50, skeu: 75, clay: 100, spatial: 100, brutal: 100, arcade: 100 };
  window.isUIStyleUnlocked = function (styleKey) {
    if (_adminPreview()) return true;
    const need = UI_STYLE_LEVELS[styleKey];
    if (need == null) return false;
    return _lazyUnlocked('uistyle_' + styleKey, function () {
      const s = typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary() : null;
      return !!s && s.level >= need;
    });
  };
  window.UI_STYLE_LEVELS = UI_STYLE_LEVELS;

  window.isAudioUnlocked = function () {
    if (_adminPreview()) return true;
    return _lazyUnlocked('audio', function () {
      return typeof getCompletedPremadeProgramCount === 'function' && getCompletedPremadeProgramCount() >= 1;
    });
  };

  window.isTreeStyleUnlocked = function (style) {
    return style === 'tree';
  };

  /* Keep the existing buried Preferences rows (which predate the hex
     map) in sync with the same predicates, since GRNDCustom's own
     lock-checking only ever covered the alarm row. */
  function _refreshPersonalizationRows() {
    const rows = [
      ['custLoaderRow', 'custLoaderLock', 'custLoaderCtrls', window.isLoaderUnlocked],
      ['custBgRow',     'custBgLock',     'custBgCtrls',     window.isBgUnlocked],
      ['custQuoteRow',  'custQuoteLock',  'custQuoteCtrls',  window.isQuoteUnlocked],
    ];
    rows.forEach(function ([rowId, lockId, ctrlsId, fn]) {
      const lockEl = document.getElementById(lockId);
      const ctrlsEl = document.getElementById(ctrlsId);
      if (!lockEl || !ctrlsEl) return;
      const unlocked = fn();
      lockEl.style.display = unlocked ? 'none' : '';
      ctrlsEl.style.display = unlocked ? '' : 'none';
    });
  }
  _refreshPersonalizationRows();
  document.addEventListener('DOMContentLoaded', _refreshPersonalizationRows);
  if (typeof window.onProgressSaved === 'function') window.onProgressSaved(_refreshPersonalizationRows);

  /* system.js's own boot sequence calls updateAllModeBtns() before this
     file has loaded (script tags run in order; that call happens at
     parse-time of system.js, this file loads after) — so its very first
     pass still shows the old always-on/calendar behaviour. Re-run it now
     that the real predicates exist, so nothing has to wait for the next
     unrelated UI event to correct itself. */
  _refreshBtns();
})();
