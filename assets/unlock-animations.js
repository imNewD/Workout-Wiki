/* ════════ unlock-animations.js ════════
   Selectable unlock-celebration animations — layered on top of the
   existing effects in assets/animations.js (createGlassBreakEffect,
   triggerPantheonCompletionCinematic). Kept as its own file so this
   feature is easy to isolate, review, or revert.

   Three independent category choices, each persisted separately:
     grnd_unlock_anim_basic     → regular exercise unlocks
     grnd_unlock_anim_hof       → Hall of Fame exercise unlocks
     grnd_unlock_anim_pantheon  → Pantheon exercise unlocks (NOT the
                                  one-time-ever Awakening cinematic,
                                  which stays untouched)
   All three default to 'glass-break', which maps to the pre-existing
   effect for that category (createGlassBreakEffect for basic/HoF,
   triggerPantheonCompletionCinematic for Pantheon) — so nothing changes
   for anyone until they actively pick something else.

   The style picker lives in the Achievements hex map (config/achievements-map.js,
   "CELEBRATIONS" cluster) — each of the 5 styles is its own hex, whose
   info panel shows 3 toggles (BASIC / HOF / PANTHEON) via
   getUnlockAnimForCategory / setUnlockAnimForCategory below.

   Public API: playUnlockCelebration(button, isHoF, isPantheon)
               playSlashUnlock / playLandedUnlock / playMeltUnlock / playUnbrokenUnlock
               getUnlockAnimForCategory(cat) / setUnlockAnimForCategory(cat, styleId)
════════════════════════════════ */
(function () {
  'use strict';

  const CATEGORY_KEYS = { basic: 'grnd_unlock_anim_basic', hof: 'grnd_unlock_anim_hof', pantheon: 'grnd_unlock_anim_pantheon' };
  const STYLES = ['glass-break', 'slash', 'landed', 'melt', 'unbroken'];

  function _get(key) {
    try {
      const v = localStorage.getItem(key);
      return STYLES.indexOf(v) !== -1 ? v : 'glass-break';
    } catch (e) { return 'glass-break'; }
  }

  window.getUnlockAnimForCategory = function (cat) {
    const key = CATEGORY_KEYS[cat];
    return key ? _get(key) : 'glass-break';
  };
  window.setUnlockAnimForCategory = function (cat, styleId) {
    const key = CATEGORY_KEYS[cat];
    if (!key || STYLES.indexOf(styleId) === -1) return;
    try { localStorage.setItem(key, styleId); } catch (e) {}
  };

  /* ══ DISPATCHER ══════════════════════════════════════════════════
     Replaces the celebration call sites in src/app.js. Falls back to
     the classic effect whenever the chosen style is 'glass-break' (the
     default) or unrecognized. */
  function playUnlockCelebration(button, isHoF, isPantheon) {
    if (!button) return;
    const cat = isPantheon ? 'pantheon' : (isHoF ? 'hof' : 'basic');
    const style = window.getUnlockAnimForCategory(cat);
    const tint = isPantheon ? 'purple' : (isHoF ? 'gold' : null);
    switch (style) {
      case 'slash':     return playSlashUnlock(button, tint);
      case 'landed':    return playLandedUnlock(button, tint);
      case 'melt':      return playMeltUnlock(button);
      case 'unbroken':  return playUnbrokenUnlock(button);
      default:
        if (isPantheon) return triggerPantheonCompletionCinematic(button);
        return createGlassBreakEffect(button, isHoF, isPantheon);
    }
  }
  window.playUnlockCelebration = playUnlockCelebration;

  /* ══ SHARED HELPERS ══════════════════════════════════════════════ */

  /* Blocks scroll/tap for ~ms while a card-takeover animation plays.
     Returns a cleanup fn; also auto-cleans as a safety net. */
  function _blockInputDuring(ms) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:100000;pointer-events:auto;background:transparent;';
    document.body.appendChild(overlay);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const blockTouch = function (e) { e.preventDefault(); };
    window.addEventListener('touchmove', blockTouch, { passive: false });
    let done = false;
    function cleanup() {
      if (done) return;
      done = true;
      overlay.remove();
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('touchmove', blockTouch);
    }
    setTimeout(cleanup, ms + 250);
    return cleanup;
  }

  const TINTS = {
    gold:   { border: '#c87d00', bg: 'linear-gradient(135deg,#140e00,#1e1500,#2a1e00)', text: '#f4a261', glow: 'rgba(255,200,120,0.7)' },
    purple: { border: '#a855f7', bg: 'linear-gradient(135deg,#2a0e45,#1d0838,#3a1266)', text: '#e9d5ff', glow: 'rgba(196,120,255,0.7)' },
  };

  /* Clones `button` into a fixed-position div that starts exactly over
     the button (initial transform computed from getBoundingClientRect)
     and can be transitioned to a different rect by the caller —
     GPU-composited, no layout thrash. `tint` is null|'gold'|'purple'. */
  function _cloneCard(button, finalW, finalH, finalX, finalY, tint) {
    const rect = button.getBoundingClientRect();
    const nameEl = button.querySelector('.prog-item-name, .sq-item-name');
    const text = (nameEl || button).textContent.trim();
    const t = TINTS[tint];

    const scaleX0 = rect.width  / finalW;
    const scaleY0 = rect.height / finalH;
    const initTX  = (rect.left + rect.width  / 2) - (finalX + finalW / 2);
    const initTY  = (rect.top  + rect.height / 2) - (finalY + finalH / 2);

    const clone = document.createElement('div');
    clone.style.cssText = [
      'position:fixed',
      'left:' + finalX + 'px', 'top:' + finalY + 'px',
      'width:' + finalW + 'px', 'height:' + finalH + 'px',
      'z-index:100010', 'border-radius:6px',
      t ? ('border:1px solid ' + t.border + ';border-left-width:3px;background:' + t.bg)
        : 'border:1px solid var(--border2);background:var(--bg3)',
      'display:flex', 'align-items:center', 'justify-content:center',
      'padding:0 12px', 'overflow:hidden', 'pointer-events:none',
      'transform:translate(' + initTX + 'px,' + initTY + 'px) scale(' + scaleX0 + ',' + scaleY0 + ')',
      'transform-origin:center center',
      'will-change:transform,opacity',
    ].join(';');
    const label = document.createElement('span');
    label.textContent = text;
    label.style.cssText = "font-family:'IBM Plex Sans',sans-serif;font-size:0.82rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:" + (t ? t.text : 'var(--text)');
    clone.appendChild(label);
    document.body.appendChild(clone);

    const prevVisibility = button.style.visibility;
    button.style.visibility = 'hidden';

    function restore() {
      clone.remove();
      button.style.visibility = prevVisibility;
    }
    return { clone: clone, restore: restore };
  }

  /* ══ AUDIO SYNTHESIS ═════════════════════════════════════════════
     All unlock sound effects are synthesized in-browser via Web Audio
     API — no external audio assets to load or ship. One shared
     AudioContext is reused across calls. */
  let _actx = null;
  function _getAudioCtx() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!_actx) _actx = new AC();
      if (_actx.state === 'suspended') _actx.resume();
      return _actx;
    } catch (e) { return null; }
  }
  function _noiseBuffer(ctx, duration) {
    const size = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < size; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }

  /* Sharp blade whoosh + metallic bite — call this at the exact frame
     the cut happens for precise sync. */
  /* Quick "shhk" — one pass of a blade through the air. Called once per
     slash trail as it fires, so the flurry of slashes sounds like actual
     rapid cutting motion instead of silence before a single end beep. */
  function playSlashSwooshSound(pitchMul) {
    const ctx = _getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const noise = ctx.createBufferSource();
    noise.buffer = _noiseBuffer(ctx, 0.14);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(3200 * pitchMul, now);
    bp.frequency.exponentialRampToValueAtTime(900 * pitchMul, now + 0.11);
    bp.Q.value = 1.5;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.2, now + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);
    noise.connect(bp); bp.connect(g); g.connect(ctx.destination);
    noise.start(now); noise.stop(now + 0.14);
  }

  /* Low rushing whoosh for the card's flight to center — fills the
     otherwise-silent windup so the sequence doesn't feel delayed. */
  function playFlightWhooshSound() {
    const ctx = _getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const noise = ctx.createBufferSource();
    noise.buffer = _noiseBuffer(ctx, 0.45);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(450, now);
    bp.frequency.exponentialRampToValueAtTime(2000, now + 0.4);
    bp.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.11, now + 0.15);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    noise.connect(bp); bp.connect(g); g.connect(ctx.destination);
    noise.start(now); noise.stop(now + 0.45);
  }

  /* The cut itself — noise bite + a short metallic ring (detuned high
     partials, like a blade's "shing") + a low thunk for weight. Layered
     instead of a single tone so it reads as an actual cutting impact. */
  function playCutSound() {
    const ctx = _getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    const noise = ctx.createBufferSource();
    noise.buffer = _noiseBuffer(ctx, 0.18);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(6500, now);
    bp.frequency.exponentialRampToValueAtTime(1000, now + 0.14);
    bp.Q.value = 1.2;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.55, now + 0.005);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
    noise.connect(bp); bp.connect(noiseGain); noiseGain.connect(ctx.destination);
    noise.start(now); noise.stop(now + 0.18);

    // Metallic ring: a few detuned high partials with staggered decay.
    const partials = [1800, 2650, 3400, 4700];
    partials.forEach(function (freq, i) {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq * (0.98 + Math.random() * 0.04), now);
      const g = ctx.createGain();
      const peak = 0.15 / (i + 1);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(peak, now + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.22 + i * 0.05);
      osc.connect(g); g.connect(ctx.destination);
      osc.start(now); osc.stop(now + 0.3 + i * 0.05);
    });

    // Low thunk behind the cut, for weight.
    const thunk = ctx.createOscillator();
    thunk.type = 'sine';
    thunk.frequency.setValueAtTime(120, now);
    thunk.frequency.exponentialRampToValueAtTime(50, now + 0.12);
    const thunkGain = ctx.createGain();
    thunkGain.gain.setValueAtTime(0.0001, now);
    thunkGain.gain.exponentialRampToValueAtTime(0.35, now + 0.008);
    thunkGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
    thunk.connect(thunkGain); thunkGain.connect(ctx.destination);
    thunk.start(now); thunk.stop(now + 0.16);
  }

  /* Bubbling/hissing melt bed with intermittent pops — fades naturally
     over `duration` seconds so it dies exactly as the card disappears. */
  function playMeltSound(duration) {
    const ctx = _getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.22, now + 0.07);
    master.connect(ctx.destination);

    const hiss = ctx.createBufferSource();
    hiss.buffer = _noiseBuffer(ctx, duration + 0.3);
    hiss.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(900, now);
    lp.frequency.linearRampToValueAtTime(350, now + duration);
    hiss.connect(lp); lp.connect(master);
    hiss.start(now);

    const popCount = Math.floor(duration / 0.14);
    for (let i = 0; i < popCount; i++) {
      const t = now + 0.04 + i * 0.14 + Math.random() * 0.06;
      const pop = ctx.createOscillator();
      pop.type = 'sine';
      const freq = 180 + Math.random() * 220;
      pop.frequency.setValueAtTime(freq, t);
      pop.frequency.exponentialRampToValueAtTime(freq * 0.5, t + 0.05);
      const pg = ctx.createGain();
      pg.gain.setValueAtTime(0.0001, t);
      pg.gain.exponentialRampToValueAtTime(0.16, t + 0.008);
      pg.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
      pop.connect(pg); pg.connect(master);
      pop.start(t); pop.stop(t + 0.08);
    }

    master.gain.setValueAtTime(0.22, now + Math.max(0, duration - 0.35));
    master.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    setTimeout(function () { try { hiss.stop(); } catch (e) {} }, (duration + 0.05) * 1000);
  }

  /* Descending whistle + wind bed for the meteor's fall — starts the
     instant the drop begins so there's no silent gap before impact. */
  function playFallWhistleSound(duration) {
    const ctx = _getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1700, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + duration);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.1, now + 0.08);
    g.gain.setValueAtTime(0.1, now + Math.max(0.09, duration - 0.12));
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(g); g.connect(ctx.destination);
    osc.start(now); osc.stop(now + duration + 0.02);

    const noise = ctx.createBufferSource();
    noise.buffer = _noiseBuffer(ctx, duration + 0.05);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(1300, now);
    bp.frequency.exponentialRampToValueAtTime(380, now + duration);
    bp.Q.value = 0.6;
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0.0001, now);
    ng.gain.exponentialRampToValueAtTime(0.06, now + 0.1);
    ng.gain.setValueAtTime(0.06, now + Math.max(0.11, duration - 0.12));
    ng.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    noise.connect(bp); bp.connect(ng); ng.connect(ctx.destination);
    noise.start(now); noise.stop(now + duration + 0.05);
  }

  /* Heavy asteroid-style impact thud, crunch, and a brief low rumble tail. */
  function playImpactSound() {
    const ctx = _getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    const thud = ctx.createOscillator();
    thud.type = 'sine';
    thud.frequency.setValueAtTime(150, now);
    thud.frequency.exponentialRampToValueAtTime(35, now + 0.32);
    const thudGain = ctx.createGain();
    thudGain.gain.setValueAtTime(0.0001, now);
    thudGain.gain.exponentialRampToValueAtTime(0.75, now + 0.015);
    thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
    thud.connect(thudGain); thudGain.connect(ctx.destination);
    thud.start(now); thud.stop(now + 0.42);

    const crunch = ctx.createBufferSource();
    crunch.buffer = _noiseBuffer(ctx, 0.18);
    const crunchFilter = ctx.createBiquadFilter();
    crunchFilter.type = 'lowpass';
    crunchFilter.frequency.setValueAtTime(2200, now);
    crunchFilter.frequency.exponentialRampToValueAtTime(300, now + 0.16);
    const crunchGain = ctx.createGain();
    crunchGain.gain.setValueAtTime(0.0001, now);
    crunchGain.gain.exponentialRampToValueAtTime(0.5, now + 0.008);
    crunchGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    crunch.connect(crunchFilter); crunchFilter.connect(crunchGain); crunchGain.connect(ctx.destination);
    crunch.start(now); crunch.stop(now + 0.18);

    const rumble = ctx.createBufferSource();
    rumble.buffer = _noiseBuffer(ctx, 0.6);
    const rumbleFilter = ctx.createBiquadFilter();
    rumbleFilter.type = 'lowpass';
    rumbleFilter.frequency.value = 220;
    const rumbleGain = ctx.createGain();
    rumbleGain.gain.setValueAtTime(0.0001, now + 0.08);
    rumbleGain.gain.exponentialRampToValueAtTime(0.22, now + 0.12);
    rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
    rumble.connect(rumbleFilter); rumbleFilter.connect(rumbleGain); rumbleGain.connect(ctx.destination);
    rumble.start(now + 0.08); rumble.stop(now + 0.7);
  }

  /* ══ PERFORMANCE HELPERS ═════════════════════════════════════════
     Cheap device-capability heuristic used to scale particle counts,
     plus a small reusable pool of absolutely-positioned dot elements
     shared across all three animations so repeated unlocks don't keep
     allocating/GC-ing DOM nodes. */
  const _PERF_TIER = (function () {
    const cores = navigator.hardwareConcurrency || 4;
    const mem = navigator.deviceMemory || 4;
    return (cores <= 4 || mem <= 4) ? 'low' : 'high';
  })();
  function _particleCount(base) {
    return _PERF_TIER === 'low' ? Math.max(1, Math.round(base * 0.5)) : base;
  }
  const _particlePool = [];
  function _acquireParticle(parent) {
    let el = _particlePool.pop();
    if (!el) {
      el = document.createElement('div');
      el.style.willChange = 'transform,opacity';
    }
    el.style.cssText = 'position:absolute;pointer-events:none;opacity:1;transform:none;transition:none;will-change:transform,opacity;';
    parent.appendChild(el);
    return el;
  }
  function _releaseParticle(el) {
    if (el.parentNode) el.parentNode.removeChild(el);
    if (_particlePool.length < 60) _particlePool.push(el);
  }

  /* ══ 1. WORLD CUTTING SLASH ═══════════════════════════════════════
     Card flies to centre; a flurry of blade-flash sweeps cross the
     screen; the card splits into diagonal wedge slices (parallelogram
     bands at a fixed slash angle, not vertical strips) that fly apart. */
  function playSlashUnlock(button, tint) {
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) { createGlassBreakEffect(button, tint === 'gold', tint === 'purple'); return; }
    const cleanupBlock = _blockInputDuring(2000);
    playFlightWhooshSound(); // fills the windup so the sequence starts sounding immediately

    const vw = window.innerWidth, vh = window.innerHeight;

    // Everything for this animation lives in one fixed wrapper so the
    // impact shake can transform it without ever touching document.body/
    // html (which would break every other position:fixed element in the app).
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;inset:0;z-index:100000;pointer-events:none;overflow:hidden;';
    document.body.appendChild(wrap);

    // Darken to near-black with a soft vignette while the slash plays.
    const dark = document.createElement('div');
    dark.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0);transition:background 0.28s ease;z-index:1;';
    wrap.appendChild(dark);
    const vignette = document.createElement('div');
    vignette.style.cssText = 'position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,transparent 32%,rgba(0,0,0,0.78) 100%);opacity:0;transition:opacity 0.3s ease;z-index:1;';
    wrap.appendChild(vignette);
    dark.getBoundingClientRect();
    dark.style.background = 'rgba(0,0,0,0.88)';
    vignette.style.opacity = '1';

    const FW = Math.min(340, vw * 0.74), FH = 62;
    const FX = (vw - FW) / 2, FY = (vh - FH) / 2;
    const cloneInfo = _cloneCard(button, FW, FH, FX, FY, tint);
    const clone = cloneInfo.clone;
    wrap.appendChild(clone); // reparent so it shakes with the scene, above dark/vignette
    clone.style.zIndex = '5';
    clone.style.transition = 'transform 0.5s cubic-bezier(0.16,0.84,0.28,1)';
    clone.getBoundingClientRect();
    clone.style.transform = 'translate(0,0) scale(1,1)';

    setTimeout(function () {
      const N_SLASHES = 6;
      for (let i = 0; i < N_SLASHES; i++) {
        const slash = document.createElement('div');
        const angle = -20 + i * 8 + (Math.random() * 6 - 3);
        const topPos = 6 + Math.random() * 78;
        slash.style.cssText = [
          'position:absolute', 'top:' + topPos + '%', 'left:-20%',
          'width:140%', 'height:' + (2 + Math.random() * 2) + 'px',
          'transform:rotate(' + angle + 'deg) translateX(-100%)',
          'background:linear-gradient(90deg,transparent,rgba(255,255,255,0.95),transparent)',
          'box-shadow:0 0 14px 2px rgba(255,255,255,0.7)',
          'z-index:6', 'opacity:1',
          'transition:transform 0.16s cubic-bezier(0.6,0,0.2,1)',
        ].join(';');
        wrap.appendChild(slash);
        (function (slash, angle, delay, pitchMul) {
          setTimeout(function () {
            slash.getBoundingClientRect();
            slash.style.transform = 'rotate(' + angle + 'deg) translateX(0%)';
            playSlashSwooshSound(pitchMul);
          }, delay);
          setTimeout(function () { slash.style.transition = 'opacity 0.25s ease'; slash.style.opacity = '0'; }, delay + 180);
          setTimeout(function () { slash.remove(); }, delay + 500);
        })(slash, angle, i * 70, 0.8 + Math.random() * 0.5);
      }

      // ── The cut lands here: sound, flash, shake, and sparks all fire
      //    on the exact same frame for a precise, impactful sync. ──
      const cutDelay = N_SLASHES * 70 + 160;
      setTimeout(function () {
        playCutSound();

        // Flash at the exact moment of the cut.
        const flash = document.createElement('div');
        flash.style.cssText = 'position:absolute;inset:0;background:rgba(255,255,255,0.9);opacity:0;transition:opacity 0.05s linear;z-index:7;';
        wrap.appendChild(flash);
        flash.getBoundingClientRect();
        flash.style.opacity = '1';
        setTimeout(function () { flash.style.transition = 'opacity 0.22s ease'; flash.style.opacity = '0'; }, 45);
        setTimeout(function () { flash.remove(); }, 300);

        // Subtle screen shake on impact — this scene wrapper only.
        let shakes = 0;
        const shakeInterval = setInterval(function () {
          shakes++;
          const mag = Math.max(0, 6 - shakes * 1.5);
          wrap.style.transform = 'translate(' + ((Math.random() - 0.5) * mag) + 'px,' + ((Math.random() - 0.5) * mag) + 'px)';
          if (shakes >= 4) { clearInterval(shakeInterval); wrap.style.transform = ''; }
        }, 35);

        // Glowing fragments/sparks radiating from the cut, pooled for perf.
        const rect = clone.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        const cx = rect.left - wrapRect.left + rect.width / 2;
        const cy = rect.top - wrapRect.top + rect.height / 2;
        const sparkCount = _particleCount(14);
        for (let i = 0; i < sparkCount; i++) {
          const spark = _acquireParticle(wrap);
          const size = 2 + Math.random() * 3;
          const ang = Math.random() * Math.PI * 2;
          const dist = 40 + Math.random() * 90;
          spark.style.cssText += [
            'left:' + (cx - size / 2) + 'px', 'top:' + (cy - size / 2) + 'px',
            'width:' + size + 'px', 'height:' + size + 'px', 'border-radius:50%',
            'background:radial-gradient(circle,#fff,rgba(255,220,150,0.7) 60%,transparent 100%)',
            'z-index:6',
          ].join(';');
          spark.getBoundingClientRect();
          spark.style.transition = 'transform 0.5s cubic-bezier(0.16,0.7,0.3,1), opacity 0.5s ease';
          spark.style.transform = 'translate(' + (Math.cos(ang) * dist) + 'px,' + (Math.sin(ang) * dist) + 'px)';
          spark.style.opacity = '0';
          (function (spark) { setTimeout(function () { _releaseParticle(spark); }, 520); })(spark);
        }
      }, cutDelay);

      // Split the clone into diagonal wedge slices once the cut lands.
      setTimeout(function () {
        const rect = clone.getBoundingClientRect();
        const W = rect.width, H = rect.height;
        const N_SLICES = 5;
        const SLASH_ANGLE_DEG = 24; // fixed cut angle, matches the flash sweeps' general direction
        const slant = H * Math.tan(SLASH_ANGLE_DEG * Math.PI / 180);
        const span = W + Math.abs(slant);
        const bandW = span / N_SLICES;
        const startX = slant < 0 ? slant : 0;

        clone.style.opacity = '0';
        for (let i = 0; i < N_SLICES; i++) {
          const x0 = startX + i * bandW, x1 = x0 + bandW;
          const slice = clone.cloneNode(true);
          slice.style.opacity = '1';
          slice.style.clipPath = 'polygon(' + x0 + 'px 0, ' + x1 + 'px 0, ' + (x1 + slant) + 'px ' + H + 'px, ' + (x0 + slant) + 'px ' + H + 'px)';
          slice.style.transition = 'transform 0.6s cubic-bezier(0.22,0.44,0.44,0.96), opacity 0.5s ease 0.15s';
          wrap.appendChild(slice);
          // Fly apart roughly perpendicular to the cut direction.
          const perpX = Math.cos((SLASH_ANGLE_DEG + 90) * Math.PI / 180);
          const perpY = Math.sin((SLASH_ANGLE_DEG + 90) * Math.PI / 180);
          const dir = (i - (N_SLICES - 1) / 2); // slices further from centre travel further
          const dist = 60 + Math.abs(dir) * 55 + Math.random() * 30;
          const dx = perpX * dist * Math.sign(dir || 1) + (Math.random() - 0.5) * 20;
          const dy = 70 + Math.abs(perpY) * dist * 0.4 + Math.random() * 60;
          const rot = dir * 14 + (Math.random() - 0.5) * 12;
          slice.getBoundingClientRect(); // force reflow so the transition below actually animates
          slice.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + rot + 'deg)';
          slice.style.opacity = '0';
          setTimeout(function () { slice.remove(); }, 700);
        }
      }, cutDelay + 60);

      setTimeout(function () {
        cloneInfo.restore();
        dark.style.background = 'rgba(0,0,0,0)';
        vignette.style.opacity = '0';
        setTimeout(function () { wrap.remove(); cleanupBlock(); }, 300);
      }, N_SLASHES * 70 + 950);
    }, 520);
  }
  window.playSlashUnlock = playSlashUnlock;

  /* ══ 2. LANDED ═══════════════════════════════════════════════════
     Screen fades to near-black; a "ground" plane appears; the card
     falls like a shining meteor (glossy sweep + trailing tail) and
     buries itself partway into the ground on impact, radiating light.
     Shake is applied to this animation's own wrapper only — never to
     document.body/html, since a transform there would break every
     position:fixed element in the app (header/nav) and "glitch the
     screen", which is exactly the bug this replaces. */
  function playLandedUnlock(button, tint) {
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) { createGlassBreakEffect(button, tint === 'gold', tint === 'purple'); return; }
    const cleanupBlock = _blockInputDuring(2300);
    const t = TINTS[tint] || { border: 'var(--border2)', bg: 'var(--bg3)', text: 'var(--text)', glow: 'rgba(255,255,255,0.55)' };

    const vw = window.innerWidth, vh = window.innerHeight;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;inset:0;z-index:100005;pointer-events:none;overflow:hidden;';
    document.body.appendChild(wrap);

    // Dark background fade-in.
    const bg = document.createElement('div');
    bg.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0);transition:background 0.4s ease;';
    wrap.appendChild(bg);
    bg.getBoundingClientRect();
    bg.style.background = 'rgba(0,0,0,0.93)';

    // Ground plane — sits above the meteor in z-index so it can visually bury it.
    const groundY = vh * 0.74;
    const ground = document.createElement('div');
    ground.style.cssText = [
      'position:absolute', 'left:0', 'top:' + groundY + 'px', 'width:100%', 'height:' + (vh - groundY) + 'px',
      'background:linear-gradient(180deg,#2a2018,#150f0a 40%,#0a0705)',
      'border-top:2px solid rgba(255,255,255,0.14)',
      'box-shadow:0 -20px 60px rgba(0,0,0,0.6) inset',
      'z-index:3', 'opacity:0', 'transition:opacity 0.4s ease',
    ].join(';');
    wrap.appendChild(ground);
    ground.getBoundingClientRect();
    ground.style.opacity = '1';

    // Falling meteor (card clone) — final rest position overlaps the ground
    // edge so part of it renders underneath (buried look).
    const FW = Math.min(300, vw * 0.6), FH = 56;
    const FX = (vw - FW) / 2;
    const restY = groundY - FH * 0.62; // ~38% of height ends up below the ground's top edge
    const meteor = document.createElement('div');
    const nameEl = button.querySelector('.prog-item-name, .sq-item-name');
    meteor.textContent = (nameEl || button).textContent.trim();
    meteor.style.cssText = [
      'position:absolute', 'left:' + FX + 'px', 'top:' + (-FH - 60) + 'px',
      'width:' + FW + 'px', 'height:' + FH + 'px', 'border-radius:6px',
      'display:flex', 'align-items:center', 'justify-content:center', 'padding:0 12px',
      'font-family:\'IBM Plex Sans\',sans-serif', 'font-size:0.82rem', 'font-weight:500',
      'color:' + t.text, 'background:' + t.bg,
      'border:1px solid ' + t.border,
      'box-shadow:0 0 0 rgba(0,0,0,0)',
      'z-index:2', 'overflow:hidden',
      'transition:top 0.62s cubic-bezier(0.6,0,1,0.42), box-shadow 0.3s ease',
    ].join(';');
    wrap.appendChild(meteor);

    // Shiny diagonal sweep riding down the meteor as it falls.
    const shine = document.createElement('div');
    shine.style.cssText = 'position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,0.55) 48%,transparent 62%);transform:translateX(-120%);';
    meteor.appendChild(shine);
    shine.animate(
      [{ transform: 'translateX(-120%)' }, { transform: 'translateX(120%)' }],
      { duration: 620, iterations: 2, easing: 'ease-in' }
    );

    // Trailing tail — a blurred streak above the meteor that follows it down.
    const tail = document.createElement('div');
    tail.style.cssText = [
      'position:absolute', 'left:' + (FX + FW / 2 - 3) + 'px', 'top:' + (-FH - 60) + 'px',
      'width:6px', 'height:70px', 'border-radius:3px',
      'background:linear-gradient(180deg,transparent,' + t.glow + ')',
      'filter:blur(3px)', 'z-index:1', 'opacity:0.85',
      'transition:top 0.62s cubic-bezier(0.6,0,1,0.42)',
    ].join(';');
    wrap.appendChild(tail);

    meteor.getBoundingClientRect();
    meteor.style.top = restY + 'px';
    tail.style.top = (restY - 20) + 'px';
    playFallWhistleSound(0.66); // starts with the drop, ends right as impact lands

    setTimeout(function () {
      // ── Impact: dedicated sound, crater, shockwave, heat, shake, debris ──
      playImpactSound();

      const impactCX = FX + FW / 2;
      const impactY = restY + FH * 0.5;

      // Crater: a dark dug-in ellipse with a heat-lit rim.
      const crater = document.createElement('div');
      const craterW = FW * 1.5, craterH = 18;
      crater.style.cssText = [
        'position:absolute', 'left:' + (impactCX - craterW / 2) + 'px', 'top:' + (groundY - craterH / 2) + 'px',
        'width:' + craterW + 'px', 'height:' + craterH + 'px', 'border-radius:50%',
        'background:radial-gradient(ellipse,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.35) 55%,transparent 78%)',
        'box-shadow:0 -2px 10px 1px rgba(255,140,60,0.5) inset',
        'z-index:2', 'opacity:0', 'transition:opacity 0.3s ease, transform 0.4s ease',
        'transform:scaleX(0.3)',
      ].join(';');
      wrap.appendChild(crater);
      crater.getBoundingClientRect();
      crater.style.opacity = '1';
      crater.style.transform = 'scaleX(1)';

      // Shockwave ripple expanding out across the ground.
      const ripple = document.createElement('div');
      const rippleSize = 20;
      ripple.style.cssText = [
        'position:absolute', 'left:' + (impactCX - rippleSize / 2) + 'px', 'top:' + (impactY - rippleSize / 2) + 'px',
        'width:' + rippleSize + 'px', 'height:' + rippleSize + 'px', 'border-radius:50%',
        'border:2px solid rgba(255,160,80,0.75)', 'z-index:3', 'opacity:1',
        'transition:transform 0.6s cubic-bezier(0.2,0.6,0.4,1), opacity 0.6s ease',
      ].join(';');
      wrap.appendChild(ripple);
      ripple.getBoundingClientRect();
      ripple.style.transform = 'scale(' + ((vw * 0.9) / rippleSize) + ',' + (10 / rippleSize) + ')';
      ripple.style.opacity = '0';
      setTimeout(function () { ripple.remove(); }, 650);

      // Ground briefly glows red/orange from heat, then fades.
      const heatGlow = document.createElement('div');
      heatGlow.style.cssText = [
        'position:absolute', 'left:' + (impactCX - FW) + 'px', 'top:' + (groundY - 6) + 'px',
        'width:' + (FW * 2) + 'px', 'height:60px', 'border-radius:50%',
        'background:radial-gradient(ellipse,rgba(255,120,40,0.55),transparent 72%)',
        'z-index:2', 'opacity:0', 'transition:opacity 0.25s ease', 'filter:blur(2px)',
      ].join(';');
      wrap.appendChild(heatGlow);
      heatGlow.getBoundingClientRect();
      heatGlow.style.opacity = '1';
      setTimeout(function () { heatGlow.style.transition = 'opacity 0.9s ease'; heatGlow.style.opacity = '0'; }, 350);
      setTimeout(function () { heatGlow.remove(); }, 1300);

      // Brief heat-distortion shimmer over the impact zone.
      const distortion = document.createElement('div');
      distortion.style.cssText = [
        'position:absolute', 'left:' + (impactCX - FW * 0.7) + 'px', 'top:' + (groundY - 50) + 'px',
        'width:' + (FW * 1.4) + 'px', 'height:50px',
        'background:linear-gradient(0deg,rgba(255,140,70,0.14),transparent)',
        'filter:blur(3px)', 'z-index:2', 'opacity:0', 'transition:opacity 0.2s ease', 'mix-blend-mode:screen',
      ].join(';');
      wrap.appendChild(distortion);
      distortion.getBoundingClientRect();
      distortion.style.opacity = '1';
      distortion.animate(
        [{ transform: 'scaleY(1) skewX(0deg)' }, { transform: 'scaleY(1.2) skewX(-2deg)' }, { transform: 'scaleY(0.9) skewX(2deg)' }, { transform: 'scaleY(1) skewX(0deg)' }],
        { duration: 500, iterations: 1, easing: 'ease-in-out' }
      );
      setTimeout(function () { distortion.style.opacity = '0'; }, 480);
      setTimeout(function () { distortion.remove(); }, 700);

      // Screen shake — this wrapper only, never document.body/html.
      let shakes = 0;
      const shakeInterval = setInterval(function () {
        shakes++;
        const mag = Math.max(0, 7 - shakes * 1.6);
        wrap.style.transform = 'translate(' + ((Math.random() - 0.5) * mag) + 'px,' + ((Math.random() - 0.5) * mag) + 'px)';
        if (shakes >= 5) { clearInterval(shakeInterval); wrap.style.transform = ''; }
      }, 40);

      // Dust and debris, pooled and scaled to device performance.
      const dustCount = _particleCount(7);
      for (let i = 0; i < dustCount; i++) {
        const dust = _acquireParticle(wrap);
        const size = 18 + Math.random() * 22;
        const ang = Math.PI + (Math.random() - 0.5) * Math.PI * 0.9; // mostly upward/outward
        const dist = 30 + Math.random() * 70;
        dust.style.cssText += [
          'left:' + (impactCX - size / 2) + 'px', 'top:' + (impactY - size / 2) + 'px',
          'width:' + size + 'px', 'height:' + size + 'px', 'border-radius:50%',
          'background:radial-gradient(circle,rgba(180,160,140,0.5),transparent 72%)',
          'z-index:4', 'filter:blur(1px)',
        ].join(';');
        dust.getBoundingClientRect();
        dust.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
        dust.style.transform = 'translate(' + (Math.cos(ang) * dist) + 'px,' + (Math.sin(ang) * dist * 0.5) + 'px) scale(2.2)';
        dust.style.opacity = '0';
        (function (dust) { setTimeout(function () { _releaseParticle(dust); }, 650); })(dust);
      }
      const debrisCount = _particleCount(6);
      for (let i = 0; i < debrisCount; i++) {
        const chip = _acquireParticle(wrap);
        const size = 3 + Math.random() * 4;
        const ang = -Math.PI * 0.15 - Math.random() * Math.PI * 0.7;
        const dist = 50 + Math.random() * 90;
        chip.style.cssText += [
          'left:' + (impactCX - size / 2) + 'px', 'top:' + (impactY - size / 2) + 'px',
          'width:' + size + 'px', 'height:' + size + 'px', 'border-radius:2px',
          'background:#8a6a4a', 'z-index:4',
        ].join(';');
        chip.getBoundingClientRect();
        chip.style.transition = 'transform 0.55s cubic-bezier(0.3,0.6,0.5,1), opacity 0.5s ease 0.2s';
        chip.style.transform = 'translate(' + (Math.cos(ang) * dist) + 'px,' + (Math.sin(ang) * dist - 20) + 'px) rotate(' + (Math.random() * 360) + 'deg)';
        chip.style.opacity = '0';
        (function (chip) { setTimeout(function () { _releaseParticle(chip); }, 700); })(chip);
      }

      meteor.style.boxShadow = '0 0 46px 10px ' + t.glow + ', 0 0 100px 20px ' + t.glow;

      // Radiate + hold, then fade the whole scene.
      setTimeout(function () {
        bg.style.transition = 'background 0.6s ease';
        ground.style.transition = 'opacity 0.6s ease';
        meteor.style.transition = 'opacity 0.5s ease, box-shadow 0.5s ease';
        tail.style.transition = 'opacity 0.4s ease';
        crater.style.transition = 'opacity 0.6s ease';
        bg.style.background = 'rgba(0,0,0,0)';
        ground.style.opacity = '0';
        meteor.style.opacity = '0';
        meteor.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
        tail.style.opacity = '0';
        crater.style.opacity = '0';
      }, 750);

      setTimeout(function () {
        wrap.remove();
        cleanupBlock();
      }, 1350);
    }, 680);
  }
  window.playLandedUnlock = playLandedUnlock;

  /* ══ 3. SUMMER MELT ════════════════════════════════════════════════
     The card itself turns to liquid in place — a wobbling, glossy blob
     that squashes into a puddle — then reforms to reveal the unlock.
     No separate drip elements: the deformation IS the card. */
  function playMeltUnlock(button) {
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) { createGlassBreakEffect(button, false, false); return; }
    const cleanupBlock = _blockInputDuring(1900);
    playMeltSound(1.7); // fades naturally in sync with the visual timeline below

    const prevTransition   = button.style.transition;
    const prevTransform    = button.style.transform;
    const prevBorderRadius = button.style.borderRadius;
    const prevOverflow     = button.style.overflow;
    const prevOrigin       = button.style.transformOrigin;
    const prevPosition     = button.style.position;
    const prevBoxShadow    = button.style.boxShadow;
    const prevOpacity      = button.style.opacity;
    const computedPos      = getComputedStyle(button).position;
    if (computedPos === 'static') button.style.position = 'relative';
    button.style.overflow = 'visible';
    button.style.transformOrigin = 'bottom center';

    const rect = button.getBoundingClientRect();

    // Heat-shimmer riding just above the card while it melts.
    const shimmer = document.createElement('div');
    shimmer.style.cssText = [
      'position:absolute', 'left:0', 'right:0', 'bottom:100%', 'height:' + Math.max(24, rect.height * 0.6) + 'px',
      'background:linear-gradient(0deg,rgba(255,140,60,0.18),transparent)',
      'filter:blur(2px)', 'opacity:0', 'transition:opacity 0.3s ease',
      'pointer-events:none', 'z-index:3', 'mix-blend-mode:screen',
    ].join(';');
    button.appendChild(shimmer);
    shimmer.getBoundingClientRect();
    shimmer.style.opacity = '1';
    shimmer.animate(
      [{ transform: 'scaleY(1) skewX(0deg)' }, { transform: 'scaleY(1.15) skewX(-1.5deg)' }, { transform: 'scaleY(0.95) skewX(1.5deg)' }, { transform: 'scaleY(1.1) skewX(0deg)' }],
      { duration: 900, iterations: 2, easing: 'ease-in-out' }
    );

    // Glossy highlight sweep riding across the liquifying surface.
    const shine = document.createElement('div');
    shine.style.cssText = 'position:absolute;inset:0;border-radius:inherit;background:linear-gradient(100deg,transparent 25%,rgba(255,255,255,0.5) 45%,transparent 65%);opacity:0;pointer-events:none;z-index:2;';
    button.appendChild(shine);

    // Puddle glow that grows underneath as the card collapses.
    const glow = document.createElement('div');
    glow.style.cssText = [
      'position:absolute', 'left:10%', 'right:10%', 'bottom:-4px', 'height:6px', 'border-radius:50%',
      'background:radial-gradient(ellipse,rgba(255,120,40,0.55),transparent 75%)',
      'opacity:0', 'transition:opacity 0.3s ease, height 1.1s ease',
      'pointer-events:none', 'z-index:1', 'filter:blur(1px)',
    ].join(';');
    button.appendChild(glow);

    button.style.transition = 'transform 0.24s ease-in, border-radius 0.24s ease-in, box-shadow 0.24s ease-in';
    shine.style.transition = 'opacity 0.3s ease';
    shine.getBoundingClientRect();
    shine.style.opacity = '1';
    glow.style.opacity = '1';

    // Edges liquify first — drip blobs peel off the bottom edge before the
    // whole card collapses.
    setTimeout(function () {
      const dripCount = _particleCount(3);
      for (let i = 0; i < dripCount; i++) {
        const drip = _acquireParticle(button);
        const w = 8 + Math.random() * 8;
        const startX = rect.width * (0.15 + Math.random() * 0.7);
        drip.style.cssText += [
          'left:' + startX + 'px', 'bottom:-2px', 'width:' + w + 'px', 'height:6px',
          'border-radius:0 0 50% 50%',
          'background:linear-gradient(180deg,rgba(255,150,60,0.9),rgba(220,80,20,0.6))',
          'box-shadow:0 0 6px 1px rgba(255,120,40,0.6)', 'z-index:1',
        ].join(';');
        drip.getBoundingClientRect();
        drip.style.transition = 'height 0.5s ease-in, opacity 0.3s ease 0.35s';
        drip.style.height = (14 + Math.random() * 14) + 'px';
        (function (drip) {
          setTimeout(function () { drip.style.opacity = '0'; }, 400);
          setTimeout(function () { _releaseParticle(drip); }, 750);
        })(drip);
      }
    }, 150);

    // Progressive melt — body deforms and sinks, edges going wavy/liquid,
    // lava-glow warming at the boundary as it flattens toward a puddle.
    const stages = [
      { t: 260, radius: '52% 48% 60% 40% / 46% 50% 50% 54%', transform: 'scaleY(0.86) scaleX(1.04)', shadow: '0 2px 8px 0 rgba(255,120,40,0.25)' },
      { t: 560, radius: '60% 40% 72% 28% / 68% 72% 28% 32%', transform: 'scaleY(0.5) scaleX(1.12) skewX(-2deg)', shadow: '0 1px 14px 2px rgba(255,110,30,0.4)' },
      { t: 900, radius: '46% 54% 38% 62% / 88% 84% 16% 14%', transform: 'scaleY(0.16) scaleX(1.2) skewX(1deg)', shadow: '0 0 18px 4px rgba(255,100,20,0.5)' },
    ];
    stages.forEach(function (s) {
      setTimeout(function () {
        button.style.borderRadius = s.radius;
        button.style.transform = s.transform;
        button.style.boxShadow = s.shadow;
      }, s.t - 260);
    });

    // Puddle hold — flat and glowing — nearly vanishes, then smoke rises.
    setTimeout(function () {
      shine.style.opacity = '0';
      glow.style.height = '3px';
      button.style.transition += ', opacity 0.4s ease';
      button.style.opacity = '0.12';
    }, 900);

    setTimeout(function () {
      const smokeCount = _particleCount(4);
      for (let i = 0; i < smokeCount; i++) {
        const smoke = _acquireParticle(button);
        const size = 10 + Math.random() * 10;
        const startX = rect.width * (0.2 + Math.random() * 0.6) - size / 2;
        smoke.style.cssText += [
          'left:' + startX + 'px', 'bottom:0', 'width:' + size + 'px', 'height:' + size + 'px',
          'border-radius:50%', 'background:radial-gradient(circle,rgba(200,200,200,0.35),transparent 70%)',
          'z-index:4', 'filter:blur(1px)',
        ].join(';');
        smoke.getBoundingClientRect();
        smoke.style.transition = 'transform 1.1s ease-out, opacity 1.1s ease-out';
        smoke.style.transform = 'translate(' + ((Math.random() - 0.5) * 24) + 'px,-' + (30 + Math.random() * 20) + 'px) scale(1.8)';
        smoke.style.opacity = '0';
        (function (smoke) { setTimeout(function () { _releaseParticle(smoke); }, 1150); })(smoke);
      }
    }, 980);

    // Re-solidify with a gentle settle (no elastic bounce), reading as
    // cooling back into shape and reappearing rather than a rubbery bounce.
    setTimeout(function () {
      button.style.transition = 'transform 0.5s cubic-bezier(0.22,0.61,0.36,1), border-radius 0.5s ease, box-shadow 0.5s ease, opacity 0.5s ease';
      button.style.transform = prevTransform || 'none';
      button.style.borderRadius = prevBorderRadius || '';
      button.style.boxShadow = prevBoxShadow || '';
      button.style.opacity = prevOpacity || '1';
      glow.style.opacity = '0';
    }, 1250);

    setTimeout(function () {
      shimmer.remove();
      shine.remove();
      glow.remove();
      button.style.transition = prevTransition;
      button.style.overflow = prevOverflow;
      button.style.transformOrigin = prevOrigin;
      button.style.position = prevPosition;
      button.style.boxShadow = prevBoxShadow;
      button.style.opacity = prevOpacity;
      cleanupBlock();
    }, 1800);
  }
  window.playMeltUnlock = playMeltUnlock;

  /* ══ 4. UNBROKEN ═══════════════════════════════════════════════════
     The card is crushed down gradually through several visible stages,
     holds, then pops back open with a sudden bright flash — a "loud
     pop" — before settling to reveal the unlock. */
  function playUnbrokenUnlock(button) {
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) { createGlassBreakEffect(button, false, false); return; }
    playGlassBreakSound(false, false);
    const cleanupBlock = _blockInputDuring(1550);

    const prevTransition = button.style.transition;
    const prevTransform  = button.style.transform;
    const prevOrigin     = button.style.transformOrigin;
    button.style.transformOrigin = 'center center';

    // Gradual, visibly-staged crush (not one continuous easing).
    const crushStages = [
      { t: 0,   scale: 0.72, rot: -2,  dur: 160 },
      { t: 160, scale: 0.46, rot: 3,   dur: 170 },
      { t: 330, scale: 0.26, rot: -4,  dur: 180 },
      { t: 510, scale: 0.14, rot: 2,   dur: 160 },
    ];
    crushStages.forEach(function (s) {
      setTimeout(function () {
        button.style.transition = 'transform ' + s.dur + 'ms cubic-bezier(0.6,0,0.85,0.2)';
        button.style.transform = 'scale(' + s.scale + ') rotate(' + s.rot + 'deg)';
      }, s.t);
    });

    // Hold at the crushed size briefly, then the "loud pop".
    setTimeout(function () {
      const rect = button.getBoundingClientRect();
      const flash = document.createElement('div');
      const size = Math.max(rect.width, rect.height) * 3;
      flash.style.cssText = [
        'position:fixed',
        'left:' + (rect.left + rect.width / 2 - size / 2) + 'px',
        'top:' + (rect.top + rect.height / 2 - size / 2) + 'px',
        'width:' + size + 'px', 'height:' + size + 'px', 'border-radius:50%',
        'background:radial-gradient(circle,rgba(255,255,255,0.95),transparent 70%)',
        'z-index:100015', 'pointer-events:none', 'opacity:0',
        'transition:transform 0.35s ease-out,opacity 0.35s ease-out', 'transform:scale(0.3)',
      ].join(';');
      document.body.appendChild(flash);
      flash.getBoundingClientRect();
      flash.style.opacity = '1';
      flash.style.transform = 'scale(1)';
      setTimeout(function () { flash.style.opacity = '0'; }, 160);
      setTimeout(function () { flash.remove(); }, 520);

      button.style.transition = 'transform 0.32s cubic-bezier(0.34,1.86,0.64,1)'; // sharp elastic overshoot
      button.style.transform = 'scale(1.16) rotate(0deg)';
      setTimeout(function () {
        button.style.transition = 'transform 0.22s ease-out';
        button.style.transform = prevTransform || 'scale(1) rotate(0deg)';
      }, 180);
    }, 700);

    setTimeout(function () {
      button.style.transition = prevTransition;
      button.style.transformOrigin = prevOrigin;
      cleanupBlock();
    }, 1500);
  }
  window.playUnbrokenUnlock = playUnbrokenUnlock;
})();
