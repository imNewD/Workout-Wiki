/* ┌─ @file: src/customizer.js ─────────────────────────────────────────
   PERSONALISATION — unlockable "make it yours" preferences.

     • Custom Loading Page  (unlocks at Lvl 25) — your image behind the
       GRND logo on startup. Loader paint itself happens inline in
       index.html (reads grnd_custom_loader synchronously); this file
       owns picking / resetting / gating.
     • Custom Background    (unlocks at Lvl 50) — any picture as the app
       backdrop. The active THEME still styles every box & font; only the
       scene/background is replaced. Reset returns to the theme default.
     • Custom Alarm         (unlocks after 2 completed premade programs) —
       your own sound for program reminders. Audio blob lives in
       IndexedDB (can be large); services.js' chime asks us for the URL.

   Also: the first-run "go here to learn the app" hint — a pulsing glow +
   arrow on the home INFO & FAQ card until the user opens it once.

   Storage:
     grnd_custom_loader        data URL (downscaled image) | absent
     grnd_custom_bg            data URL (downscaled image) | absent
     grnd_custom_alarm_name    label of the chosen audio   | absent
     grnd_info_hint_seen       '1' once the INFO card hint is dismissed
     IndexedDB grnd_custom / kv / 'alarm'  → audio Blob

   Depends (lazily): window.getPlayerLevelSummary, window.GRNDAlarm,
                     window.getCompletedPremadeProgramCount.
   Load: deferred, after settings.js / ranking.js.
└─ */
(function () {
  'use strict';

  var LS_LOADER = 'grnd_custom_loader';
  var LS_BG     = 'grnd_custom_bg';
  var LS_ALARM  = 'grnd_custom_alarm_name';
  var LS_QUOTE  = 'grnd_custom_quote';
  var LS_HINT   = 'grnd_info_hint_seen';

  var LEVEL_LOADER   = 25;
  var LEVEL_BG       = 50;
  var PROGRAMS_ALARM = 2;
  var DAYS_QUOTE     = 14;
  var INTAKE_LOG_PFX = 'grnd_intake_log_';

  /* ─── tiny IndexedDB kv (for the audio blob) ─────────────────── */
  var _db = null;
  function _openDb() {
    return new Promise(function (res, rej) {
      if (_db) return res(_db);
      try {
        var r = indexedDB.open('grnd_custom', 1);
        r.onupgradeneeded = function () { r.result.createObjectStore('kv'); };
        r.onsuccess = function () { _db = r.result; res(_db); };
        r.onerror   = function () { rej(r.error); };
      } catch (e) { rej(e); }
    });
  }
  function _idbSet(key, val) {
    return _openDb().then(function (db) {
      return new Promise(function (res, rej) {
        var tx = db.transaction('kv', 'readwrite');
        tx.objectStore('kv').put(val, key);
        tx.oncomplete = res; tx.onerror = function () { rej(tx.error); };
      });
    });
  }
  function _idbGet(key) {
    return _openDb().then(function (db) {
      return new Promise(function (res, rej) {
        var tx = db.transaction('kv', 'readonly');
        var rq = tx.objectStore('kv').get(key);
        rq.onsuccess = function () { res(rq.result || null); };
        rq.onerror   = function () { rej(rq.error); };
      });
    });
  }
  function _idbDel(key) {
    return _openDb().then(function (db) {
      return new Promise(function (res) {
        var tx = db.transaction('kv', 'readwrite');
        tx.objectStore('kv').delete(key);
        tx.oncomplete = res; tx.onerror = res;
      });
    });
  }

  /* ─── helpers ────────────────────────────────────────────────── */
  function _level() {
    try {
      var s = window.getPlayerLevelSummary && window.getPlayerLevelSummary();
      return s ? (Number(s.level) || 1) : 1;
    } catch (e) { return 1; }
  }
  function _completedPrograms() {
    try { return window.getCompletedPremadeProgramCount ? (window.getCompletedPremadeProgramCount() || 0) : 0; }
    catch (e) { return 0; }
  }
  function _isAdmin() {
    try { return localStorage.getItem('grnd_admin_theme_preview') === '1'; } catch (e) { return false; }
  }
  function _trackedFoodDays() {
    // Count distinct calendar days that have at least one intake log entry.
    var count = 0;
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(INTAKE_LOG_PFX) === 0) {
          try {
            var entries = JSON.parse(localStorage.getItem(k));
            if (Array.isArray(entries) && entries.length > 0) count++;
          } catch (e) {}
        }
      }
    } catch (e) {}
    return count;
  }
  function _toast(msg) {
    // Reuse the alarm banner styling if available; else a quick fallback.
    try {
      if (window.GRNDAlarm && typeof window.GRNDAlarm.notify === 'function') {
        // notify() also chimes — too loud for a UI toast; do a light banner instead.
      }
    } catch (e) {}
    var b = document.getElementById('custToast');
    if (!b) {
      b = document.createElement('div');
      b.id = 'custToast';
      b.className = 'cust-toast';
      document.body.appendChild(b);
    }
    b.textContent = msg;
    void b.offsetWidth;
    b.classList.add('show');
    clearTimeout(b._t);
    b._t = setTimeout(function () { b.classList.remove('show'); }, 2600);
  }

  // Read an image file, downscale to maxW and return a JPEG data URL.
  function _readImageDownscaled(file, maxW) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onload = function () {
        var img = new Image();
        img.onload = function () {
          var w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
          var scale = Math.min(1, maxW / (w || maxW));
          var cw = Math.max(1, Math.round(w * scale)), ch = Math.max(1, Math.round(h * scale));
          var c = document.createElement('canvas');
          c.width = cw; c.height = ch;
          c.getContext('2d').drawImage(img, 0, 0, cw, ch);
          try { res(c.toDataURL('image/jpeg', 0.85)); }
          catch (e) { res(fr.result); } // tainted? fall back to raw
        };
        img.onerror = function () { rej(new Error('bad image')); };
        img.src = fr.result;
      };
      fr.onerror = function () { rej(fr.error); };
      fr.readAsDataURL(file);
    });
  }

  function _pickFile(accept) {
    return new Promise(function (res) {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = accept;
      input.style.position = 'fixed';
      input.style.left = '-9999px';
      document.body.appendChild(input);
      input.onchange = function () {
        var f = input.files && input.files[0];
        document.body.removeChild(input);
        res(f || null);
      };
      input.click();
    });
  }

  /* ─── Custom background apply / clear ────────────────────────── */
  function _bgLayer() {
    var el = document.getElementById('grnd-custom-bg');
    if (!el) {
      el = document.createElement('div');
      el.id = 'grnd-custom-bg';
      el.setAttribute('aria-hidden', 'true');
      document.body.appendChild(el);
    }
    return el;
  }
  function _applyBg() {
    var data = null;
    try { data = localStorage.getItem(LS_BG); } catch (e) {}
    var el = _bgLayer();
    if (data) {
      el.style.backgroundImage = "url('" + data + "')";
      document.documentElement.classList.add('grnd-has-custombg');
    } else {
      el.style.backgroundImage = '';
      document.documentElement.classList.remove('grnd-has-custombg');
    }
  }

  /* ─── Custom alarm URL (consumed by services.js chime) ───────── */
  var _alarmUrl = null;
  function _refreshAlarmUrl() {
    return _idbGet('alarm').then(function (blob) {
      if (_alarmUrl) { try { URL.revokeObjectURL(_alarmUrl); } catch (e) {} _alarmUrl = null; }
      if (blob) { try { _alarmUrl = URL.createObjectURL(blob); } catch (e) { _alarmUrl = null; } }
      return _alarmUrl;
    }).catch(function () { return null; });
  }
  window.getCustomAlarmURL = function () { return _alarmUrl; };

  /* ─── Public actions (wired to the preference buttons) ───────── */
  var GRNDCustom = {
    pickLoader: function () {
      if (_level() < LEVEL_LOADER) { _toast('Reach Lvl ' + LEVEL_LOADER + ' to unlock this.'); return; }
      _pickFile('image/*').then(function (f) {
        if (!f) return;
        _readImageDownscaled(f, 1280).then(function (url) {
          try { localStorage.setItem(LS_LOADER, url); }
          catch (e) { _toast('Image too large to save — try a smaller one.'); return; }
          _toast('Loading page set — you’ll see it next launch.');
          GRNDCustom.refresh();
        }).catch(function () { _toast('Couldn’t read that image.'); });
      });
    },
    resetLoader: function () {
      try { localStorage.removeItem(LS_LOADER); } catch (e) {}
      _toast('Loading page reset to default.');
      GRNDCustom.refresh();
    },

    pickBg: function () {
      if (_level() < LEVEL_BG) { _toast('Reach Lvl ' + LEVEL_BG + ' to unlock this.'); return; }
      _pickFile('image/*').then(function (f) {
        if (!f) return;
        _readImageDownscaled(f, 1920).then(function (url) {
          try { localStorage.setItem(LS_BG, url); }
          catch (e) { _toast('Image too large to save — try a smaller one.'); return; }
          _applyBg();
          _toast('Background applied. Your theme still styles everything else.');
          GRNDCustom.refresh();
        }).catch(function () { _toast('Couldn’t read that image.'); });
      });
    },
    resetBg: function () {
      try { localStorage.removeItem(LS_BG); } catch (e) {}
      _applyBg();
      _toast('Background reset to your theme default.');
      GRNDCustom.refresh();
    },

    pickAlarm: function () {
      if (_completedPrograms() < PROGRAMS_ALARM) { _toast('Complete ' + PROGRAMS_ALARM + ' premade programs to unlock this.'); return; }
      _pickFile('audio/*').then(function (f) {
        if (!f) return;
        _idbSet('alarm', f).then(function () {
          try { localStorage.setItem(LS_ALARM, f.name || 'Custom sound'); } catch (e) {}
          return _refreshAlarmUrl();
        }).then(function () {
          _toast('Alarm sound saved.');
          GRNDCustom.refresh();
        }).catch(function () { _toast('Couldn’t save that audio.'); });
      });
    },
    testAlarm: function () {
      var url = _alarmUrl;
      if (!url) { _toast('No custom sound saved.'); return; }
      try { var a = new Audio(url); a.volume = 0.8; a.play().catch(function () {}); }
      catch (e) {}
    },
    resetAlarm: function () {
      try { localStorage.removeItem(LS_ALARM); } catch (e) {}
      _idbDel('alarm').then(function () {
        if (_alarmUrl) { try { URL.revokeObjectURL(_alarmUrl); } catch (e) {} _alarmUrl = null; }
        _toast('Alarm reset to the default chime.');
        GRNDCustom.refresh();
      });
    },

    // Opens the styled in-app quote modal (mirrors the custom-program save
    // overlay) instead of the native window.prompt.
    editQuote: function () {
      var days = _trackedFoodDays();
      if (!_isAdmin() && days < DAYS_QUOTE) {
        _toast('Track food for 14 days to unlock this (' + days + '/14 done).');
        return;
      }
      var overlay = document.getElementById('custQuoteOverlay');
      var input   = document.getElementById('custQuoteInput');
      var err     = document.getElementById('custQuoteError');
      if (!overlay || !input) return;
      if (err) err.textContent = '';
      input.value = _ls(LS_QUOTE) || '';
      _updateQuoteCount();
      input.oninput = _updateQuoteCount;
      input.onkeydown = function (ev) {
        if (ev.key === 'Enter' && (ev.metaKey || ev.ctrlKey)) { ev.preventDefault(); GRNDCustom.saveQuote(); }
        else if (ev.key === 'Escape') { ev.preventDefault(); GRNDCustom.closeQuote(); }
      };
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(function () { try { input.focus(); input.select(); } catch (e) {} }, 60);
    },
    saveQuote: function () {
      var input = document.getElementById('custQuoteInput');
      var err   = document.getElementById('custQuoteError');
      if (!input) return;
      var val = (input.value || '').trim();
      if (!val) { GRNDCustom.closeQuote(); GRNDCustom.resetQuote(); return; }
      if (val.length > 200) {
        if (err) err.textContent = 'Quote too long — keep it under 200 characters.';
        return;
      }
      try { localStorage.setItem(LS_QUOTE, val); }
      catch (e) { if (err) err.textContent = 'Couldn’t save — storage full.'; return; }
      GRNDCustom.closeQuote();
      _toast('Quote saved — you’ll see it on the next loading screen.');
      GRNDCustom.refresh();
    },
    closeQuote: function () {
      var overlay = document.getElementById('custQuoteOverlay');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    },
    // Close when the dimmed backdrop (not the panel) is clicked.
    quoteOverlayClick: function (e) {
      if (e && e.target !== e.currentTarget) return;
      GRNDCustom.closeQuote();
    },
    resetQuote: function () {
      try { localStorage.removeItem(LS_QUOTE); } catch (e) {}
      _toast('Quote reset to a random built-in quote.');
      GRNDCustom.refresh();
    },

    /* Refresh lock state + button visibility for the four rows. */
    refresh: function () {
      var lvl   = _level();
      var progs = _completedPrograms();
      var days  = _trackedFoodDays();
      var quoteUnlocked = _isAdmin() || days >= DAYS_QUOTE;
      _row('custLoader', lvl >= LEVEL_LOADER, !!_ls(LS_LOADER), false);
      _row('custBg',     lvl >= LEVEL_BG,     !!_ls(LS_BG),     false);
      _row('custAlarm',  progs >= PROGRAMS_ALARM, !!_ls(LS_ALARM), true);
      _rowQuote(quoteUnlocked, !!_ls(LS_QUOTE));
    }
  };
  window.GRNDCustom = GRNDCustom;

  function _ls(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function _updateQuoteCount() {
    var input = document.getElementById('custQuoteInput');
    var c = document.getElementById('custQuoteCount');
    if (input && c) c.textContent = String((input.value || '').length);
  }
  function _rowQuote(unlocked, active) {
    var ctrls = document.getElementById('custQuoteCtrls');
    var lock  = document.getElementById('custQuoteLock');
    var reset = document.getElementById('custQuoteReset');
    var pick  = document.getElementById('custQuotePick');
    if (ctrls) ctrls.style.display = unlocked ? '' : 'none';
    if (lock)  lock.style.display  = unlocked ? 'none' : '';
    if (reset) reset.style.display = (unlocked && active) ? '' : 'none';
    if (pick)  pick.textContent    = active ? 'CHANGE' : 'SET QUOTE';
  }
  function _row(id, unlocked, active, isAlarm) {
    var ctrls = document.getElementById(id + 'Ctrls');
    var lock  = document.getElementById(id + 'Lock');
    var reset = document.getElementById(id + 'Reset');
    var test  = document.getElementById(id + 'Test');
    var pick  = document.getElementById(id + 'Pick');
    if (ctrls) ctrls.style.display = unlocked ? '' : 'none';
    if (lock)  lock.style.display  = unlocked ? 'none' : '';
    if (reset) reset.style.display = (unlocked && active) ? '' : 'none';
    if (test)  test.style.display  = (unlocked && active) ? '' : 'none';
    if (pick)  pick.textContent    = active ? 'CHANGE' : 'CHOOSE';
  }

  /* ─── INFO & FAQ first-run hint ──────────────────────────────── */
  function _initInfoHint() {
    var seen = false;
    try { seen = localStorage.getItem(LS_HINT) === '1'; } catch (e) {}
    if (seen) return;
    var item = document.querySelector('[data-drag-id="home-info-faq"]');
    if (!item) return;
    item.classList.add('grnd-hint-pulse');
    if (!item.querySelector('.grnd-hint-arrow')) {
      var arrow = document.createElement('span');
      arrow.className = 'grnd-hint-arrow';
      arrow.textContent = '👆 start here';
      item.appendChild(arrow);
    }
    var dismiss = function () {
      try { localStorage.setItem(LS_HINT, '1'); } catch (e) {}
      item.classList.remove('grnd-hint-pulse');
      var a = item.querySelector('.grnd-hint-arrow');
      if (a) a.remove();
    };
    item.addEventListener('click', dismiss, { once: true });
  }

  /* ─── boot ───────────────────────────────────────────────────── */
  function _init() {
    _applyBg();
    _refreshAlarmUrl();
    _initInfoHint();
    // Keep the preference rows accurate whenever Preferences opens.
    if (typeof window.openPreferences === 'function') {
      var prev = window.openPreferences;
      window.openPreferences = function () {
        prev.apply(this, arguments);
        GRNDCustom.refresh();
      };
    }
    GRNDCustom.refresh();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _init);
  else _init();
})();
/* └─ @end: src/customizer.js ─────────────────────────────────────────── */
