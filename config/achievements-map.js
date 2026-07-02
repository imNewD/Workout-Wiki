/* ══════════════════════════════════════════════════════════════════
   achievements-map.js — GRND // Workout Wiki
   ──────────────────────────────────────────────────────────────────
   Phase 3 of the achievement hex-map project: the visual "skill web"
   (Plague Inc-style) that lives on the Achievements page. Reads the
   SAME unlock predicates that already drive the Preferences → Themes
   dropdown (isPushupModeUnlocked, isSeasonModeUnlocked, etc.) — this
   file only renders, it introduces zero new unlock logic, so the map
   and the dropdown can never disagree with each other.

   Layout: hand-placed pointy-top hexagons on an (col,row) offset grid,
   grouped into clusters that branch out from a "starter" hub. Purely
   decorative connecting lines are drawn between consecutive nodes in
   each cluster's list, and from each cluster's first node back to the
   hub — no gating logic is attached to a connection, they're just
   visual grouping.

   Load order: after config/achievements.js (needs isChemistModeUnlocked
   etc.) and after config/system.js (needs THEME_META, toggle*Mode fns,
   getSidequestsModeStats, getWarmupModeStats). Placed near the end of
   the script list so every dependency is guaranteed loaded already.
══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Node data ──────────────────────────────────────────────────
     coord: [col, row] on a pointy-top offset hex grid.
     unlocked(): reuses the exact same predicate as Preferences.
     activate(): reuses the exact same toggle fn as Preferences.
     progress(): optional — returns a short "3/10" style string, or
     null if the node has no meaningful fractional progress. ────── */
  const HUB = { key: '__hub', coord: [0, 0] };

  const CLUSTERS = [
    {
      name: 'STARTER',
      color: '#8fbc6a',
      nodes: [
        { key: 'warmup', label: 'WARMUP', icon: '🌿', coord: [-1, -1],
          desc: 'Available from day one.',
          unlocked: () => true, activate: () => window.toggleWarmupMode(), progress: () => null },
        { key: 'stretch', label: 'STRETCH', icon: '🌸', coord: [1, -1],
          desc: 'Available from day one.',
          unlocked: () => true, activate: () => window.toggleStretchMode(), progress: () => null },
      ],
    },
    {
      name: 'MOVEMENT MASTERY',
      color: '#ff6b6b',
      nodes: [
        { key: 'pushup', label: 'PUSHUP', icon: '💪', coord: [-2, 1],
          desc: 'Complete every push-up progression.',
          unlocked: () => window.isPushupModeUnlocked(), activate: () => window.togglePushupMode(),
          progress: () => _libProgress('pushup') },
        { key: 'pull', label: 'PULL', icon: '🧗', coord: [-3, 1],
          desc: 'Complete every pull-up progression.',
          unlocked: () => window.isPullModeUnlocked(), activate: () => window.togglePullMode(),
          progress: () => _libProgress('pullup') },
        { key: 'dip', label: 'DIP', icon: '🤸', coord: [-2, 2],
          desc: 'Complete every dip progression.',
          unlocked: () => window.isDipModeUnlocked(), activate: () => window.toggleDipMode(),
          progress: () => _libProgress('dip') },
        { key: 'squat', label: 'SQUAT', icon: '🦵', coord: [-3, 2],
          desc: 'Complete every squat progression.',
          unlocked: () => window.isSquatModeUnlocked(), activate: () => window.toggleSquatMode(),
          progress: () => _libProgress('squat') },
        { key: 'core', label: 'CORE', icon: '🔥', coord: [-2, 3],
          desc: 'Complete every core progression.',
          unlocked: () => window.isCoreModeUnlocked(), activate: () => window.toggleCoreMode(),
          progress: () => _libProgress('core') },
        { key: 'handstand', label: 'HANDSTAND', icon: '🤾', coord: [-3, 3],
          desc: 'Complete every handstand progression.',
          unlocked: () => window.isHandstandModeUnlocked(), activate: () => window.toggleHandstandMode(),
          progress: () => _libProgress('handstand') },
        { key: 'isometric', label: 'HOLDS', icon: '🗿', coord: [-2, 4],
          desc: 'Complete every isometric hold.',
          unlocked: () => window.isIsometricModeUnlocked(), activate: () => window.toggleIsometricMode(),
          progress: () => _libProgress('isometric') },
        { key: 'combo', label: 'COMBO', icon: '⚡', coord: [-3, 4],
          desc: 'Complete every combo movement.',
          unlocked: () => window.isComboModeUnlocked(), activate: () => window.toggleComboMode(),
          progress: () => _libProgress('combo') },
      ],
    },
    {
      name: 'UTILITY',
      color: '#7aaec8',
      nodes: [
        { key: 'gym', label: 'GYM', icon: '🏋️', coord: [2, 1],
          desc: 'Complete your first gym exercise.',
          unlocked: () => window.isGymModeUnlocked(), activate: () => window.toggleGymMode(), progress: () => null },
        { key: 'cardio', label: 'CARDIO', icon: '🏃', coord: [3, 1],
          desc: 'Complete your first cardio exercise.',
          unlocked: () => window.isCardioModeUnlocked(), activate: () => window.toggleCardioMode(), progress: () => null },
      ],
    },
    {
      name: 'THE LAB',
      color: '#1f8fce',
      nodes: [
        { key: 'chemist', label: 'CHEMIST', icon: '🧪', coord: [2, 2],
          desc: 'Spend 5 minutes total in Nutrition or Recovery.',
          unlocked: () => window.isChemistModeUnlocked(), activate: () => window.toggleChemistMode(),
          progress: () => _secProgress((window.getEngagementTime?.().chemLab) || 0, 300) },
        { key: 'biologist', label: 'BIOLOGIST', icon: '🧬', coord: [3, 2],
          desc: 'Spend 5 minutes total in Anatomy.',
          unlocked: () => window.isBiologistModeUnlocked(), activate: () => window.toggleBiologistMode(),
          progress: () => _secProgress((window.getEngagementTime?.().anatomy) || 0, 300) },
      ],
    },
    {
      name: 'PERSONALIZATION',
      color: '#c9a0dc',
      nodes: [
        /* Six interface skins, each its own hex, gated by player level
           (10/25/50/75/100 — clay & spatial share the top tier, since
           there are 6 skins but only 5 requested tiers). Every skin
           already exists and works (setUITheme) — only the gate + map
           entry are new. "Default" (no skin) isn't included here since
           it isn't something you earn, it's just the absence of one. */
        { key: 'glass', label: 'LIQUID GLASS', icon: '🧊', coord: [5, 3], kind: 'action',
          desc: 'Frosted surfaces with a liquid shimmer. Reach Player Level 10.',
          unlocked: () => window.isUIStyleUnlocked('glass'),
          btnLabel: () => (document.documentElement.dataset.uiTheme === 'glass' ? 'ACTIVE' : 'ACTIVATE'),
          activate: () => window.setUITheme?.('glass'),
          hasValue: () => document.documentElement.dataset.uiTheme === 'glass',
          progress: () => _capProgress(Math.min((typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary().level : 0), 10), 10) },
        { key: 'glassmorph', label: 'GLASSMORPHISM', icon: '🌈', coord: [6, 3], kind: 'action',
          desc: 'Vivid frosted panels, drifting light. Reach Player Level 25.',
          unlocked: () => window.isUIStyleUnlocked('glassmorph'),
          btnLabel: () => (document.documentElement.dataset.uiTheme === 'glassmorph' ? 'ACTIVE' : 'ACTIVATE'),
          activate: () => window.setUITheme?.('glassmorph'),
          hasValue: () => document.documentElement.dataset.uiTheme === 'glassmorph',
          progress: () => _capProgress(Math.min((typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary().level : 0), 25), 25) },
        { key: 'neo', label: 'NEOMORPHISM', icon: '🌑', coord: [5, 4], kind: 'action',
          desc: 'Soft extruded monochrome — pillowy & calm. Reach Player Level 50.',
          unlocked: () => window.isUIStyleUnlocked('neo'),
          btnLabel: () => (document.documentElement.dataset.uiTheme === 'neo' ? 'ACTIVE' : 'ACTIVATE'),
          activate: () => window.setUITheme?.('neo'),
          hasValue: () => document.documentElement.dataset.uiTheme === 'neo',
          progress: () => _capProgress(Math.min((typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary().level : 0), 50), 50) },
        { key: 'skeu', label: 'SKEUOMORPHISM', icon: '💿', coord: [6, 4], kind: 'action',
          desc: 'Glossy, bevelled, real-world materials. Reach Player Level 75.',
          unlocked: () => window.isUIStyleUnlocked('skeu'),
          btnLabel: () => (document.documentElement.dataset.uiTheme === 'skeu' ? 'ACTIVE' : 'ACTIVATE'),
          activate: () => window.setUITheme?.('skeu'),
          hasValue: () => document.documentElement.dataset.uiTheme === 'skeu',
          progress: () => _capProgress(Math.min((typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary().level : 0), 75), 75) },
        { key: 'clay', label: 'CLAYMORPHISM', icon: '🧸', coord: [5, 5], kind: 'action',
          desc: 'Puffy 3D pastel clay, friendly & round. Reach Player Level 100.',
          unlocked: () => window.isUIStyleUnlocked('clay'),
          btnLabel: () => (document.documentElement.dataset.uiTheme === 'clay' ? 'ACTIVE' : 'ACTIVATE'),
          activate: () => window.setUITheme?.('clay'),
          hasValue: () => document.documentElement.dataset.uiTheme === 'clay',
          progress: () => _capProgress(Math.min((typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary().level : 0), 100), 100) },
        { key: 'spatial', label: 'SPATIAL', icon: '🌌', coord: [6, 5], kind: 'action',
          desc: 'Deep space, floating depth & glow. Reach Player Level 100.',
          unlocked: () => window.isUIStyleUnlocked('spatial'),
          btnLabel: () => (document.documentElement.dataset.uiTheme === 'spatial' ? 'ACTIVE' : 'ACTIVATE'),
          activate: () => window.setUITheme?.('spatial'),
          hasValue: () => document.documentElement.dataset.uiTheme === 'spatial',
          progress: () => _capProgress(Math.min((typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary().level : 0), 100), 100) },
        { key: 'uiperf', label: 'HIGH PERFORMANCE', icon: '⚡', coord: [3, 3], kind: 'action',
          desc: 'Full blur, motion & glow effects (best on strong devices). Unlock condition coming soon.',
          unlocked: () => false,
          btnLabel: () => (document.documentElement.dataset.uiPower === 'high' ? 'SWITCH TO LITE' : 'SWITCH TO FULL FX'),
          activate: () => window.toggleUIPower?.(), progress: () => null },
        { key: 'loader', label: 'CUSTOM LOADER', icon: '🖼️', coord: [2, 4], kind: 'action',
          desc: 'Reach Player Level 25.',
          unlocked: () => window.isLoaderUnlocked(), btnLabel: () => 'CHOOSE IMAGE',
          activate: () => window.GRNDCustom?.pickLoader(),
          hasValue: () => { try { return !!localStorage.getItem('grnd_custom_loader'); } catch (e) { return false; } },
          resetFn: () => window.GRNDCustom?.resetLoader(),
          progress: () => _capProgress(Math.min((typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary().level : 0), 25), 25) },
        { key: 'audio', label: 'CUSTOM ALARM', icon: '🔊', coord: [3, 4], kind: 'action',
          desc: 'Complete 1 full program.',
          unlocked: () => window.isAudioUnlocked(), btnLabel: () => 'CHOOSE SOUND',
          activate: () => window.GRNDCustom?.pickAlarm(),
          hasValue: () => typeof getCustomAlarmURL === 'function' && !!getCustomAlarmURL(),
          resetFn: () => window.GRNDCustom?.resetAlarm(),
          progress: () => _capProgress(typeof getCompletedPremadeProgramCount === 'function' ? getCompletedPremadeProgramCount() : 0, 1) },
        { key: 'quote', label: 'CUSTOM QUOTE', icon: '💬', coord: [4, 3], kind: 'action',
          desc: 'Log food on 14 different days.',
          unlocked: () => window.isQuoteUnlocked(), btnLabel: () => 'EDIT QUOTE',
          activate: () => window.GRNDCustom?.editQuote(),
          hasValue: () => { try { return !!localStorage.getItem('grnd_custom_quote'); } catch (e) { return false; } },
          resetFn: () => window.GRNDCustom?.resetQuote(),
          progress: () => _capProgress(typeof getFoodTrackingDayCount === 'function' ? getFoodTrackingDayCount() : 0, 14) },
        { key: 'background', label: 'CUSTOM BACKDROP', icon: '🏞️', coord: [4, 4], kind: 'action',
          desc: 'Reach Player Level 50.',
          unlocked: () => window.isBgUnlocked(), btnLabel: () => 'CHOOSE IMAGE',
          activate: () => window.GRNDCustom?.pickBg(),
          hasValue: () => { try { return !!localStorage.getItem('grnd_custom_bg'); } catch (e) { return false; } },
          resetFn: () => window.GRNDCustom?.resetBg(),
          progress: () => _capProgress(Math.min((typeof getPlayerLevelSummary === 'function' ? getPlayerLevelSummary().level : 0), 50), 50) },
      ],
    },
    /* Legendary tier — Hall of Fame, Pantheon and Sidequests are much
       harder to earn than anything else on the map, so each stands
       completely alone: its own isolated branch straight off the hub
       (never chained to each other), rendered bigger with a breathing
       glow once unlocked (see .achv-hex-legendary in main.css). */
    {
      name: 'SIDEQUESTS',
      color: '#6ed68a',
      nodes: [
        { key: 'sidequests', label: 'SIDEQUESTS', icon: '🍃', coord: [-1, 6], legendary: true,
          desc: 'Complete every sidequest branch.',
          unlocked: () => window.isSidequestsModeUnlocked(), activate: () => window.toggleSidequestsMode(),
          progress: () => _statProgress(typeof getSidequestsModeStats === 'function' ? getSidequestsModeStats() : null) },
      ],
    },
    {
      name: 'HALL OF FAME',
      color: '#e8a428',
      nodes: [
        { key: 'hof', label: 'HALL OF FAME', icon: '★', coord: [-4, 6], legendary: true,
          desc: 'Complete a Hall of Fame feat.',
          unlocked: () => window.isHofModeUnlocked(), activate: () => window.toggleHofMode(), progress: () => null },
      ],
    },
    {
      name: 'PANTHEON',
      color: '#be95ff',
      nodes: [
        { key: 'pantheon', label: 'PANTHEON', icon: '⬡', coord: [-2, 8], legendary: true,
          desc: 'Unlock any Pantheon exercise.',
          unlocked: () => window.isPantheonModeUnlocked(), activate: () => window.togglePantheonMode(), progress: () => null },
      ],
    },
    {
      name: 'SEASONAL',
      color: '#c2863c',
      nodes: [
        { key: 'summer', label: "SUMMER", icon: '🌊', coord: [0, -2],
          desc: 'Unlock 10 bodyweight exercises at difficulty 5 or higher.',
          unlocked: () => window.isSeasonModeUnlocked('summer'), activate: () => window.toggleSeasonMode('summer'),
          progress: () => _capProgress(_seasonBodyweightCount(), 10) },
        { key: 'winter', label: 'WINTER ARC', icon: '❄', coord: [1, -2],
          desc: 'Break 3 personal records in Metrics.',
          unlocked: () => window.isSeasonModeUnlocked('winter'), activate: () => window.toggleSeasonMode('winter'),
          progress: () => _capProgress(window.getPRBreakCount?.() || 0, 3) },
        { key: 'spring', label: 'SPRING CUT', icon: '🌱', coord: [0, -3],
          desc: 'Hit a 10-day cut streak in Nutrition.',
          unlocked: () => window.isSeasonModeUnlocked('spring'), activate: () => window.toggleSeasonMode('spring'),
          progress: () => _streakProgress('cut') },
        { key: 'autumn', label: 'AUTUMN BULK', icon: '🍂', coord: [1, -3],
          desc: 'Hit a 10-day bulk streak in Nutrition.',
          unlocked: () => window.isSeasonModeUnlocked('autumn'), activate: () => window.toggleSeasonMode('autumn'),
          progress: () => _streakProgress('bulk') },
      ],
    },
    {
      name: 'SECRET',
      color: '#ff5e9a',
      nodes: [
        { key: 'beber', label: 'BEBER', icon: '💗', coord: [4, 0], secret: true,
          desc: 'A hidden love-letter theme. Find it.',
          unlocked: () => typeof isBeberModeUnlocked === 'function' && isBeberModeUnlocked(),
          activate: () => window.toggleBeberMode(), progress: () => null },
      ],
    },
  ];

  /* ── Progress helpers — reuse existing stat functions where they
     exist; keep it purely presentational (never changes unlock state) */
  function _libProgress(libKey) {
    if (typeof LIB_STATE === 'undefined' || typeof getLibEntries !== 'function' || typeof loadProgress !== 'function') return null;
    try {
      const entries = getLibEntries(libKey) || [];
      const prog = loadProgress();
      const total = entries.length;
      if (!total) return null;
      const done = entries.filter(e => prog[libKey + '-' + e.id] === 'unlocked').length;
      return done + '/' + total;
    } catch (e) { return null; }
  }
  function _secProgress(sec, goalSec) {
    const s = Math.min(sec, goalSec);
    return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0') + ' / ' + Math.floor(goalSec / 60) + ':00';
  }
  function _capProgress(n, goal) { return Math.min(n, goal) + '/' + goal; }
  function _statProgress(stats) { return stats && stats.total ? Math.min(stats.done, stats.total) + '/' + stats.total : null; }
  function _streakProgress(goalType) {
    const st = typeof getDietStreak === 'function' ? getDietStreak() : null;
    if (!st || st.goal !== goalType) return '0/10';
    return Math.min(st.days || 0, 10) + '/10';
  }
  function _seasonBodyweightCount() {
    if (typeof TREE_LIBRARY_SOURCES === 'undefined' || typeof loadProgress !== 'function') return 0;
    const prog = loadProgress();
    let count = 0;
    TREE_LIBRARY_SOURCES.forEach(src => (src.data || []).forEach(e => {
      if (e.diff >= 5 && prog[src.libKey + '-' + e.id] === 'unlocked') count++;
    }));
    return count;
  }

  /* ── Hex grid geometry (pointy-top, odd-row offset) ─────────────── */
  const HEX_SIZE = 42;                              // center-to-corner radius
  const HEX_W = Math.sqrt(3) * HEX_SIZE;             // ~72.7
  const HEX_H = HEX_SIZE * 2;                        // 84
  const ROW_SPACING = HEX_SIZE * 1.5;                // 63
  const PAD = HEX_W * 1.3;                           // breathing room (legendary hexes render larger than PAD*1)

  function _hexToPixel([col, row]) {
    const x = col * HEX_W + (Math.abs(row % 2) === 1 ? HEX_W / 2 : 0);
    const y = row * ROW_SPACING;
    return { x, y };
  }

  function _allNodes() {
    const list = [];
    CLUSTERS.forEach(c => c.nodes.forEach(n => list.push(Object.assign({ cluster: c.name, color: c.color }, n))));
    return list;
  }

  /* ── Render ──────────────────────────────────────────────────────── */
  function renderAchievementsMap() {
    const host = document.getElementById('achv-map-wrap');
    if (!host) return;

    const nodes = _allNodes();
    const points = nodes.map(n => Object.assign({ px: _hexToPixel(n.coord) }, n));
    const hubPx = _hexToPixel(HUB.coord);

    const xs = points.map(p => p.px.x).concat([hubPx.x]);
    const ys = points.map(p => p.px.y).concat([hubPx.y]);
    const minX = Math.min(...xs) - PAD, maxX = Math.max(...xs) + PAD;
    const minY = Math.min(...ys) - PAD, maxY = Math.max(...ys) + PAD;
    const width = maxX - minX + HEX_W, height = maxY - minY + HEX_H;

    const shift = (p) => ({ x: p.x - minX + HEX_W / 2, y: p.y - minY + HEX_H / 2 });

    /* Connections: each cluster's nodes chain in list order, and the
       first node of every non-starter cluster links back to the hub
       (or, for STARTER itself, its two nodes link to the hub directly). */
    const lines = [];
    const hubShifted = shift(hubPx);
    CLUSTERS.forEach(c => {
      c.nodes.forEach((n, i) => {
        const a = shift(_hexToPixel(n.coord));
        if (i === 0) lines.push([hubShifted, a]);
        else lines.push([shift(_hexToPixel(c.nodes[i - 1].coord)), a]);
      });
    });

    const svgLines = lines.map(([a, b]) =>
      `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" />`
    ).join('');

    const hexHtml = points.map(p => {
      const pos = shift(p.px);
      const unlocked = !!p.unlocked();
      const isActive = p.kind === 'action' ? (unlocked && !!p.hasValue && !!p.hasValue()) : document.documentElement.dataset.theme === p.key;
      const isSecretLocked = p.secret && !unlocked;
      const cls = ['achv-hex', unlocked ? 'is-unlocked' : 'is-locked', isActive ? 'is-active' : '', p.legendary ? 'achv-hex-legendary' : ''].join(' ');
      const icon = isSecretLocked ? '❓' : p.icon;
      const label = isSecretLocked ? '???' : p.label;
      return `
        <button type="button" class="${cls}" style="left:${pos.x}px;top:${pos.y}px;--hex-color:${p.color}"
          data-achv-key="${p.key}" aria-label="${label}">
          <span class="achv-hex-icon">${icon}</span>
          <span class="achv-hex-label">${label}</span>
        </button>`;
    }).join('');

    const hubHtml = `<div class="achv-hex achv-hex-hub" style="left:${hubShifted.x}px;top:${hubShifted.y}px">
      <span class="achv-hex-icon">🏠</span>
    </div>`;

    host.style.width = width + 'px';
    host.style.height = height + 'px';
    host.innerHTML =
      `<svg class="achv-connections" width="${width}" height="${height}">${svgLines}</svg>` +
      hubHtml + hexHtml;

    host.querySelectorAll('.achv-hex[data-achv-key]').forEach(el => {
      el.addEventListener('click', () => openAchvInfo(el.dataset.achvKey));
    });

    // Center the scroll on the hub the first time the view is opened.
    const wrap = document.getElementById('achv-map-scroll');
    if (wrap && !wrap.dataset.centered) {
      wrap.scrollLeft = Math.max(0, hubShifted.x - wrap.clientWidth / 2);
      wrap.scrollTop = Math.max(0, hubShifted.y - wrap.clientHeight / 2);
      wrap.dataset.centered = '1';
    }
  }

  /* ── Info panel ──────────────────────────────────────────────────── */
  window.openAchvInfo = function (key) {
    const node = _allNodes().find(n => n.key === key);
    if (!node) return;
    const panel = document.getElementById('achv-info-panel');
    if (!panel) return;
    const unlocked = !!node.unlocked();
    const isAction = node.kind === 'action';
    const isSecretLocked = node.secret && !unlocked;
    const progress = !isSecretLocked && !unlocked ? node.progress() : null;
    const isActive = isAction ? (unlocked && !!node.hasValue && !!node.hasValue()) : document.documentElement.dataset.theme === node.key;

    panel.querySelector('.achv-info-icon').textContent = isSecretLocked ? '❓' : node.icon;
    panel.querySelector('.achv-info-title').textContent = isSecretLocked ? '???' : node.label;
    panel.querySelector('.achv-info-cluster').textContent = node.cluster;
    panel.querySelector('.achv-info-desc').textContent = isSecretLocked
      ? 'A secret theme. Somewhere in this app, a word will reveal it.'
      : node.desc;
    const progEl = panel.querySelector('.achv-info-progress');
    progEl.style.display = progress ? '' : 'none';
    progEl.textContent = progress ? ('Progress: ' + progress) : '';

    const btn = panel.querySelector('.achv-info-btn');
    const resetBtn = panel.querySelector('.achv-info-reset');
    if (unlocked) {
      btn.style.display = '';
      if (isAction) {
        btn.textContent = node.btnLabel();
        btn.disabled = false;
        btn.onclick = function () { node.activate(); closeAchvInfo(); };
      } else {
        btn.textContent = isActive ? 'ACTIVE' : 'ACTIVATE';
        btn.disabled = isActive;
        btn.onclick = function () { node.activate(); closeAchvInfo(); renderAchievementsMap(); };
      }
    } else {
      btn.style.display = 'none';
    }
    if (isAction && node.resetFn && isActive) {
      resetBtn.style.display = '';
      resetBtn.onclick = function () { node.resetFn(); openAchvInfo(key); };
    } else {
      resetBtn.style.display = 'none';
    }

    panel.classList.add('open');
    const backdrop = document.getElementById('achv-info-backdrop');
    if (backdrop) backdrop.classList.add('open');
  };

  window.closeAchvInfo = function () {
    const panel = document.getElementById('achv-info-panel');
    if (panel) panel.classList.remove('open');
    const backdrop = document.getElementById('achv-info-backdrop');
    if (backdrop) backdrop.classList.remove('open');
  };

  /* Re-render whenever the Achievements view is opened, so it always
     reflects the latest unlock state without needing a live subscriber. */
  const _prevVC = window.onViewChanged;
  window.onViewChanged = function (toView, fromView) {
    if (typeof _prevVC === 'function') _prevVC(toView, fromView);
    if (toView === 'achievements') renderAchievementsMap();
  };

  /* ══ Achievement unlock toast (Minecraft-style advancement popup) ══
     Wraps updateAllModeBtns — every unlock-affecting action in this
     codebase already calls it afterward (toggle*Mode, onProgressSaved
     handlers, achievements.js's own _refreshBtns), so hooking it once
     here gives near-universal "just unlocked" detection without
     threading a callback through a dozen call sites. Fires regardless
     of which page the user is currently on. */
  const SEEN_KEY = 'grnd_achv_seen';
  const SEEDED_KEY = 'grnd_achv_seen_seeded';

  function _seenSet() {
    try { return new Set(JSON.parse(localStorage.getItem(SEEN_KEY) || '[]')); } catch (e) { return new Set(); }
  }
  function _saveSeenSet(s) {
    try { localStorage.setItem(SEEN_KEY, JSON.stringify([...s])); } catch (e) {}
  }

  function _showAchvToast(node) {
    let box = document.getElementById('achv-unlock-toast');
    if (!box) {
      box = document.createElement('div');
      box.id = 'achv-unlock-toast';
      box.className = 'achv-unlock-toast';
      box.addEventListener('click', function () { goTo('achievements'); box.classList.remove('show'); });
      document.body.appendChild(box);
    }
    box.innerHTML =
      '<span class="achv-unlock-toast-icon">' + node.icon + '</span>' +
      '<span class="achv-unlock-toast-text">' +
        '<span class="achv-unlock-toast-head">ACHIEVEMENT UNLOCKED</span>' +
        '<span class="achv-unlock-toast-name">' + node.label + '</span>' +
        '<span class="achv-unlock-toast-sub">Check your reward in Achievements</span>' +
      '</span>';
    box.classList.remove('show');
    void box.offsetWidth; // force reflow so re-triggering the animation works back-to-back
    box.classList.add('show');
    clearTimeout(box._t);
    box._t = setTimeout(function () { box.classList.remove('show'); }, 4200);
  }

  let _toastQueue = [];
  let _toastTimer = null;
  function _drainToastQueue() {
    const n = _toastQueue.shift();
    if (!n) { _toastTimer = null; return; }
    _showAchvToast(n);
    _toastTimer = setTimeout(_drainToastQueue, 4400);
  }

  function _scanForNewUnlocks() {
    const seen = _seenSet();
    let changed = false;
    _allNodes().forEach(function (n) {
      if (seen.has(n.key)) return;
      let ok = false;
      try { ok = !!n.unlocked(); } catch (e) {}
      if (ok) { seen.add(n.key); changed = true; _toastQueue.push(n); }
    });
    if (changed) _saveSeenSet(seen);
    if (_toastQueue.length && !_toastTimer) _drainToastQueue();
  }

  // Seed "already seen" once, so pre-existing unlocks (earned before this
  // toast feature shipped, or from an older save) don't all fire at once
  // the very first time this code runs.
  (function () {
    try {
      if (localStorage.getItem(SEEDED_KEY)) return;
      const seen = _seenSet();
      _allNodes().forEach(function (n) { try { if (n.unlocked()) seen.add(n.key); } catch (e) {} });
      _saveSeenSet(seen);
      localStorage.setItem(SEEDED_KEY, '1');
    } catch (e) {}
  })();

  const _prevUAMB = window.updateAllModeBtns;
  window.updateAllModeBtns = function () {
    if (typeof _prevUAMB === 'function') _prevUAMB();
    _scanForNewUnlocks();
  };

  window.renderAchievementsMap = renderAchievementsMap;
})();
