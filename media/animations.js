/* ════════════════════════════════════════════════════════════════
   animations.js  —  GRND // Workout Wiki
   ─────────────────────────────────────────────────────────────
   All progress-unlock animations extracted from index.html.
   Drop this file next to index.html and replace the inline
   animation blocks with:

     <script src="animations.js"></script>

   ── 5 ANIMATION SCENARIOS ─────────────────────────────────────

   1. NORMAL GLASS BREAK  (createGlassBreakEffect — isHoF:false)
      Triggered by: any regular exercise unlock
      Sound : sharp impact transient + crack noise + tinkle + 3 pings
      Visual: white crack SVG draws over card → 10 triangle shards fly out

   2. HOF GLASS BREAK  (createGlassBreakEffect — isHoF:true)
      Triggered by: Hall of Fame exercise unlock (not gating Pantheon first time)
      Sound : heavier — low thud + sub-bass rumble + 7 golden-chord pings
      Visual: golden crack SVG → golden screen flash → golden shards

   3. HOF FIRST PANTHEON UNLOCK  (triggerPantheonCinematic)
      Triggered by: very first HoF exercise unlock that opens the Pantheon
      Sound : full Pantheon sound (isPantheon:true)
      Visual: dark vignette → card flies to centre → energy vortex particles
              → crack SVG on centred card → purple shatter + ⬡ sigil
              → welcome modal fades in

   4. HOF SUBSEQUENT PANTHEON GATE  (playHofCardRevealAnimation)
      Triggered by: later HoF unlocks that gate Pantheon content (not first)
      Sound : none
      Visual: dark vignette → card flies to centre + intensifying gold glow
              → card fades (no crack, no shards)

   5. PANTHEON COMPLETION CINEMATIC  (triggerPantheonCompletionCinematic)
      Triggered by: a Pantheon workout is marked done/unlocked
      Sound : full Pantheon sound (isPantheon:true)
      Visual: full black overlay → exercise name rises → ⬡ sigil blooms
              → rotating conic light rays → "CONQUERED" badge
              → 5-second hold → everything fades out

   ── DEPENDENCIES FROM index.html (must remain on window) ──────
     window.getProgressBtnKey(btn)       → exercise key from button
     window.PANTHEON_AWAKENING_KEY       → localStorage key constant
     window.showPantheonAwakeningModal() → opens the Pantheon modal
     window.checkPantheonUnlock()        → refreshes Pantheon state

   ── CSS ───────────────────────────────────────────────────────
   Animation-only CSS is self-injected by this module at load.
   Remove these rules from index.html's <style> block:
     .glass-shard { … }
     .glass-crack-svg { … }
     @keyframes hofTreePulse { … }
     @keyframes pantheonCompletionSigilPulse { … }
     @keyframes pantheonCompletionTitleReveal { … }
     @keyframes pantheonCompletionConquered { … }
     @keyframes pantheonCompletionRayRotate { … }
     @media(prefers-reduced-motion){ .glass-shard … }
════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Self-inject animation CSS ─────────────────────────────── */
  const _css = `
    /* Crack SVG and shard divs are created fully in JS; only the
       golden-flash and the HoF tree-item pulse need CSS rules here. */
    .glass-shard {
      position: fixed;
      pointer-events: none;
      will-change: transform, opacity;
    }
    .glass-crack-svg {
      position: fixed;
      pointer-events: none;
      overflow: visible;
      will-change: opacity;
    }
    /* HoF unlocked item in the progression tree — bright yellow pulsating */
    .prog-item-hof[data-status="unlocked"] {
      background: linear-gradient(135deg, rgba(255,215,0,0.22), rgba(255,224,100,0.14)) !important;
      border-color: #ffd700 !important;
      box-shadow: inset 2px 0 0 #ffd700, 0 0 14px rgba(255,215,0,0.35) !important;
      animation: hofTreePulse 1.8s ease-in-out infinite !important;
    }
    .prog-item-hof[data-status="unlocked"] .prog-item-name { color: #ffe566 !important; }
    .prog-item-hof[data-status="unlocked"] .prog-status-dot {
      background: #ffd700 !important;
      box-shadow: 0 0 8px #ffd700 !important;
    }
    @keyframes hofTreePulse {
      0%,100% { box-shadow: inset 2px 0 0 #ffd700, 0 0 10px rgba(255,215,0,0.3); }
      50%      { box-shadow: inset 2px 0 0 #ffe566, 0 0 26px rgba(255,224,80,0.7), 0 0 6px rgba(255,255,100,0.4); }
    }
    @keyframes pantheonCompletionSigilPulse {
      0%,100% { text-shadow: 0 0 40px rgba(244,114,247,0.55), 0 0 90px rgba(96,165,250,0.28), 0 0 160px rgba(167,139,250,0.18); }
      50%     { text-shadow: 0 0 70px rgba(244,114,247,0.88), 0 0 140px rgba(96,165,250,0.5),  0 0 240px rgba(167,139,250,0.36), 0 0 340px rgba(244,114,247,0.2); }
    }
    @keyframes pantheonCompletionTitleReveal {
      from { opacity: 0; letter-spacing: 0.6em;  transform: translateX(-50%) translateY(18px); }
      to   { opacity: 1; letter-spacing: 0.22em; transform: translateX(-50%) translateY(0);    }
    }
    @keyframes pantheonCompletionConquered {
      0%   { opacity: 0; transform: translateX(-50%) scaleX(0.6);  }
      60%  {             transform: translateX(-50%) scaleX(1.04); }
      100% { opacity: 1; transform: translateX(-50%) scaleX(1);    }
    }
    @keyframes pantheonCompletionRayRotate {
      from { transform: translate(-50%,-50%) rotate(0deg);   }
      to   { transform: translate(-50%,-50%) rotate(360deg); }
    }
    @media (prefers-reduced-motion: reduce) {
      .glass-shard { transition-duration: 0.3s !important; }
      .prog-item-hof[data-status="unlocked"] { animation: none !important; }
    }
  `;
  const _styleEl = document.createElement('style');
  _styleEl.id = 'grnd-animations-css';
  _styleEl.textContent = _css;
  document.head.appendChild(_styleEl);


  /* ════════════════════════════════════════════════════════════
     ANIMATION 1 + 2 — SOUND
     playGlassBreakSound(isHoF, isPantheon)
     ──────────────────────────────────────────────────────────
     Web Audio synthesis, no files needed.
     Normal  : sharp impact transient + filtered crack noise
               + high tinkle cascade + 3 resonant pings
     HoF     : all of the above + heavier low thud
               + sub-bass rumble + 7 longer resonant pings
     Pantheon: everything maxed out, ascension chord layer
  ═══════════════════════════════════════════════════════════ */
  function playGlassBreakSound(isHoF, isPantheon = false) {
    let ctx;
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }

    const t = ctx.currentTime;

    // Master gain — tune overall volume here
    const master = ctx.createGain();
    master.gain.value = isPantheon ? 1.05 : 0.72;
    master.connect(ctx.destination);

    // Helper: band-passed noise burst
    function noiseBurst(start, dur, hpHz, lpHz, peak, decay) {
      const len = Math.ceil(ctx.sampleRate * dur);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d   = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = hpHz;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';  lp.frequency.value = lpHz;
      const g  = ctx.createGain();
      g.gain.setValueAtTime(peak, start);
      g.gain.exponentialRampToValueAtTime(0.001, start + decay);
      src.connect(hp); hp.connect(lp); lp.connect(g); g.connect(master);
      src.start(start); src.stop(start + dur);
    }

    // Helper: decaying sine ping (glass resonance)
    function ping(freq, start, dur, peak, pitchDrop) {
      const osc = ctx.createOscillator();
      const g   = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      if (pitchDrop) osc.frequency.linearRampToValueAtTime(freq * pitchDrop, start + dur);
      g.gain.setValueAtTime(0, start);
      g.gain.linearRampToValueAtTime(peak, start + 0.006);
      g.gain.exponentialRampToValueAtTime(0.001, start + Math.max(dur, 0.05));
      osc.connect(g); g.connect(master);
      osc.start(start); osc.stop(start + dur + 0.05);
    }

    // ── Impact transient (wideband crack) ──
    noiseBurst(t,        0.06,  200,  9000, 1.6,  0.045);
    // ── Mid-frequency crack propagation ──
    noiseBurst(t + 0.02, 0.45,  900,  6500, 0.65, 0.32);
    // ── High tinkle cascade (shards) ──
    noiseBurst(t + 0.05, isHoF || isPantheon ? 2.4 : 1.0, 2200, 15000, 0.42, isHoF || isPantheon ? 1.8 : 0.75);

    if (isHoF || isPantheon) {
      // Heavy low thud — thick glass slamming
      noiseBurst(t,        0.18,  40,   260,  isPantheon ? 1.35 : 1.0,  0.14);
      // Pantheon shimmer layer
      noiseBurst(t + 0.08, isPantheon ? 2.6 : 0.7, 1300, 19000, isPantheon ? 0.56 : 0.22, isPantheon ? 1.55 : 0.45);
      // Sub-bass rumble sweep
      const rumble = ctx.createOscillator();
      const rg  = ctx.createGain();
      const rlp = ctx.createBiquadFilter(); rlp.type = 'lowpass'; rlp.frequency.value = isPantheon ? 240 : 180;
      rumble.type = isPantheon ? 'triangle' : 'sawtooth';
      rumble.frequency.setValueAtTime(isPantheon ? 132 : 90, t);
      rumble.frequency.exponentialRampToValueAtTime(isPantheon ? 18 : 28, t + (isPantheon ? 1.15 : 0.55));
      rg.gain.setValueAtTime(isPantheon ? 0.62 : 0.38, t);
      rg.gain.exponentialRampToValueAtTime(0.001, t + (isPantheon ? 1.15 : 0.55));
      rumble.connect(rlp); rlp.connect(rg); rg.connect(master);
      rumble.start(t); rumble.stop(t + (isPantheon ? 1.25 : 0.6));
      if (!isPantheon) {
        noiseBurst(t + 0.04, 0.6, 500, 4000, 0.5, 0.45);
      }
    }

    // ── Resonant pings ──
    const pingFreqs = isPantheon
      ? [660, 880, 1108, 1320, 1760, 2217, 2640, 3322]  // richer pantheon shimmer
      : isHoF
        ? [523, 784, 1047, 1568, 2093, 2637, 3136]       // C5 G5 C6 G6 C7 E7 G7 — golden chord
        : [1047, 2093, 3520];                             // C6 C7 A7 — sharp & bright

    pingFreqs.forEach((freq, i) => {
      const delay = t + 0.04 + i * (isPantheon ? 0.06 : isHoF ? 0.072 : 0.048);
      const dur   = isPantheon
        ? Math.max(0.18, 1.0 - i * 0.08)
        : isHoF
          ? Math.max(0.12, 0.95 - i * 0.06)
          : Math.max(0.08, 0.42 - i * 0.05);
      const vol   = isPantheon ? (0.26 - i * 0.03) : isHoF ? (0.28 - i * 0.02) : (0.16 - i * 0.02);
      ping(freq, delay, dur, Math.max(vol, 0.06), isHoF ? 0.93 : null);
    });

    // Pantheon: low ascending chord that swells up
    if (isPantheon) {
      const ascension = [220, 277, 330, 440];
      ascension.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const g   = ctx.createGain();
        osc.type = i % 2 === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(freq, t + 0.12 + i * 0.04);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.85, t + 0.95 + i * 0.03);
        g.gain.setValueAtTime(0.001, t + 0.12 + i * 0.04);
        g.gain.exponentialRampToValueAtTime(0.1 - i * 0.015, t + 0.22 + i * 0.04);
        g.gain.exponentialRampToValueAtTime(0.001, t + 1.18 + i * 0.04);
        osc.connect(g); g.connect(master);
        osc.start(t + 0.12 + i * 0.04);
        osc.stop(t + 1.22 + i * 0.04);
      });
    }

    // Close AudioContext once all sounds finish
    const totalDur = isPantheon ? 6400 : isHoF ? 4200 : 2200;
    setTimeout(() => { try { ctx.close(); } catch (e) {} }, totalDur);
  }


  /* ════════════════════════════════════════════════════════════
     ANIMATION 1 + 2 — VISUAL
     createGlassBreakEffect(button, isHoF, isPantheon)
     ──────────────────────────────────────────────────────────
     Timeline (normal):  0ms crack SVG  →  650ms shards fly  →  ~1800ms done
     Timeline (HoF):     0ms crack SVG  →  900ms golden flash + shards  →  ~2900ms done
     The workout card is NEVER hidden; shards overlay on top of it.
     Storage key grnd_glass_effects tracks shown state per exercise.
     Cleared when user clicks "CLEAR STATUS" so effect re-plays on next unlock.
  ═══════════════════════════════════════════════════════════ */
  function createGlassBreakEffect(button, isHoF, isPantheon = false, slow = false) {
    const exKey = window.getProgressBtnKey(button);
    if (!exKey) return;

    const slowFactor = slow && !isHoF && !isPantheon ? 1.35 : 1;

    // Fire sound immediately on unlock
    playGlassBreakSound(isHoF, isPantheon);

    let restoreNormalUnlockVisual = null;
    if (!isHoF && !isPantheon) {
      const prevTransition = button.style.transition;
      const prevBackground = button.style.background;
      const prevBorderColor = button.style.borderColor;
      const prevBoxShadow = button.style.boxShadow;
      const prevOverflow = button.style.overflow;
      const nameEl = button.querySelector('.prog-item-name');
      const dotEl = button.querySelector('.prog-status-dot');
      const prevNameColor = nameEl ? nameEl.style.color : '';
      const prevDotBg = dotEl ? dotEl.style.background : '';
      const prevDotShadow = dotEl ? dotEl.style.boxShadow : '';

      button.style.transition = 'background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease';
      button.style.overflow = 'visible';
      button.style.background = 'linear-gradient(135deg, rgba(42,157,92,0.22), rgba(42,157,92,0.08))';
      button.style.borderColor = '#2a9d5c';
      button.style.boxShadow = 'inset 2px 0 0 #2a9d5c, 0 0 18px rgba(42,157,92,0.28)';
      if (nameEl) nameEl.style.color = '#2a9d5c';
      if (dotEl) {
        dotEl.style.background = '#2a9d5c';
        dotEl.style.boxShadow = '0 0 8px #2a9d5c';
      }

      restoreNormalUnlockVisual = () => {
        button.style.transition = prevTransition;
        button.style.background = prevBackground;
        button.style.borderColor = prevBorderColor;
        button.style.boxShadow = prevBoxShadow;
        button.style.overflow = prevOverflow;
        if (nameEl) nameEl.style.color = prevNameColor;
        if (dotEl) {
          dotEl.style.background = prevDotBg;
          dotEl.style.boxShadow = prevDotShadow;
        }
      };
    }

    const rect  = button.getBoundingClientRect();
    const W = rect.width, H = rect.height;
    const svgNS = 'http://www.w3.org/2000/svg';

    // Impact point — slightly random near card centre
    const ix = W * (0.42 + Math.random() * 0.16);
    const iy = H * (0.38 + Math.random() * 0.24);

    // ── PHASE 1 : crack SVG ──────────────────────────────────
    const crackColor = isPantheon ? '#f5d0fe' : isHoF ? '#ffe08a' : 'rgba(255,255,255,0.88)';
    const crackW     = isPantheon ? 3.2 : isHoF ? 2.5 : 1.8;

    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.style.cssText = [
      'position:absolute',
      'left:0',
      'top:0',
      'width:100%',
      'height:100%',
      'pointer-events:none',
      'z-index:99999',
      'overflow:hidden',
      isPantheon ? 'filter:drop-shadow(0 0 28px rgba(212,122,255,0.44))' : '',
    ].join(';');

    // Glow filter + clip rect so cracks stay inside the card boundary
    const filterId = 'glf_' + Date.now();
    const clipId   = 'clp_' + Date.now();
    const defs = document.createElementNS(svgNS, 'defs');
    defs.innerHTML = `
      <filter id="${filterId}" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="${isHoF ? 3 : 1.5}" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <clipPath id="${clipId}">
        <rect x="0" y="0" width="${W}" height="${H}"/>
      </clipPath>`;
    svg.appendChild(defs);

    // 10 main crack endpoints around the card boundary
    function jit(n) { return (Math.random() - 0.5) * n; }
    const endpoints = [
      [jit(W * 0.1),          0              ],  // top-left area
      [W * 0.28 + jit(10),    0              ],  // top
      [W * 0.62 + jit(10),    0              ],  // top
      [W,                     jit(H * 0.1)   ],  // top-right area
      [W,                     H * 0.42 + jit(8)], // right
      [W,                     H              ],  // bottom-right area
      [W * 0.65 + jit(10),    H              ],  // bottom
      [W * 0.28 + jit(10),    H              ],  // bottom
      [0,                     H              ],  // bottom-left area
      [0,                     H * 0.48 + jit(8)], // left
    ];

    const crackG = document.createElementNS(svgNS, 'g');
    crackG.setAttribute('filter', `url(#${filterId})`);
    crackG.setAttribute('clip-path', `url(#${clipId})`);

    endpoints.forEach((ep, i) => {
      const [ex, ey] = ep;
      const mx  = (ix + ex) / 2 + jit(9);
      const my  = (iy + ey) / 2 + jit(9);
      const len = Math.hypot(ex - ix, ey - iy) * 1.25;
      const delay = i * 0.038 * slowFactor;

      // Main crack
      const p = document.createElementNS(svgNS, 'path');
      p.setAttribute('d', `M${ix} ${iy} Q${mx} ${my} ${ex} ${ey}`);
      p.setAttribute('stroke', crackColor);
      p.setAttribute('stroke-width', String(crackW));
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke-linecap', 'round');
      p.setAttribute('stroke-dasharray', `${len}`);
      p.setAttribute('stroke-dashoffset', `${len}`);
      p.style.transition = `stroke-dashoffset ${((0.14 + i * 0.025) * slowFactor).toFixed(3)}s ease-out ${delay.toFixed(3)}s`;
      crackG.appendChild(p);

      // Sub-crack branch
      const bt  = 0.32 + Math.random() * 0.38;
      const bx0 = ix + (ex - ix) * bt + jit(6);
      const by0 = iy + (ey - iy) * bt + jit(6);
      const ang = Math.atan2(ey - iy, ex - ix) + (Math.random() - 0.5) * 1.3;
      const bl  = 8 + Math.random() * 22;
      const bx1 = bx0 + Math.cos(ang) * bl;
      const by1 = by0 + Math.sin(ang) * bl;
      const br  = document.createElementNS(svgNS, 'line');
      br.setAttribute('x1', bx0); br.setAttribute('y1', by0);
      br.setAttribute('x2', bx1); br.setAttribute('y2', by1);
      br.setAttribute('stroke', crackColor);
      br.setAttribute('stroke-width', '1');
      br.setAttribute('stroke-linecap', 'round');
      br.setAttribute('opacity', '0.65');
      br.setAttribute('stroke-dasharray', `${bl}`);
      br.setAttribute('stroke-dashoffset', `${bl}`);
      br.style.transition = `stroke-dashoffset ${ (0.11 * slowFactor).toFixed(3) }s ease-out ${ (delay + 0.06 * slowFactor).toFixed(3) }s`;
      crackG.appendChild(br);
    });

    svg.appendChild(crackG);
    button.appendChild(svg);

    // Trigger crack draw
    requestAnimationFrame(() => requestAnimationFrame(() => {
      crackG.querySelectorAll('path,line').forEach(el => {
        el.style.strokeDashoffset = '0';
      });
    }));

    // HoF: golden pulse on cracks
    let hofPulseTimer = null;
    if (isHoF) {
      hofPulseTimer = setTimeout(() => {
        let ph = 0;
        const iv = setInterval(() => {
          ph++;
          crackG.querySelectorAll('path').forEach(el => {
            el.setAttribute('stroke-width', ph % 2 === 0 ? '4' : '2');
          });
          if (ph >= 8) clearInterval(iv);
        }, 110);
      }, 520);
    }

    // ── PHASE 2 : shatter ────────────────────────────────────
    const PHASE1     = (isPantheon ? 1240 : (isHoF ? 920 : 660)) * slowFactor;
    const SHARD_DUR  = (isPantheon ? 2400 : (isHoF ? 1700 : 1150)) * slowFactor;

    setTimeout(() => {
      clearTimeout(hofPulseTimer);
      svg.remove();

      // HoF / Pantheon: full-screen colour flash
      if (isHoF || isPantheon) {
        const flash = document.createElement('div');
        const pantheonBg =
          'radial-gradient(circle at 28% 28%, rgba(245,208,254,0.64), transparent 40%),' +
          'radial-gradient(circle at 72% 36%, rgba(96,165,250,0.22), transparent 30%),' +
          'radial-gradient(circle at 50% 50%, rgba(195,90,255,0.18), transparent 54%),' +
          'linear-gradient(135deg, rgba(124,58,237,0.24), rgba(168,85,247,0.12))';
        flash.style.cssText = [
          'position:fixed', 'inset:0',
          'background:' + (isPantheon
            ? pantheonBg
            : 'linear-gradient(135deg,rgba(255,224,138,0.88),rgba(244,162,97,0.78),rgba(200,125,0,0.72))'),
          'pointer-events:none', 'z-index:99997',
          'opacity:0', 'transition:opacity 0.22s ease',
        ].join(';');
        document.body.appendChild(flash);
        requestAnimationFrame(() => requestAnimationFrame(() => { flash.style.opacity = '1'; }));

        // Pantheon: ⬡ sigil blooms over the flash
        if (isPantheon) {
          const sigil = document.createElement('div');
          sigil.textContent = '⬡';
          sigil.style.cssText = [
            'position:fixed', 'left:50%', 'top:50%',
            'transform:translate(-50%,-50%) scale(0.65)',
            "font-family:'Bebas Neue',sans-serif",
            'font-size:min(38vw,18rem)', 'line-height:1',
            'color:rgba(245,208,254,0.9)',
            'text-shadow:0 0 32px rgba(244,114,247,0.55),0 0 80px rgba(96,165,250,0.25)',
            'pointer-events:none', 'z-index:99998', 'opacity:0',
            'transition:transform 1.05s cubic-bezier(.16,.84,.32,1), opacity 0.24s ease',
          ].join(';');
          document.body.appendChild(sigil);
          requestAnimationFrame(() => requestAnimationFrame(() => {
            sigil.style.opacity = '1';
            sigil.style.transform = 'translate(-50%,-50%) scale(1.18)';
          }));
          setTimeout(() => {
            sigil.style.transition = 'transform 0.9s ease, opacity 0.9s ease';
            sigil.style.opacity = '0';
            sigil.style.transform = 'translate(-50%,-50%) scale(1.46)';
            setTimeout(() => sigil.remove(), 950);
          }, 520);
        }

        setTimeout(() => {
          flash.style.transition = 'opacity 0.8s ease';
          flash.style.opacity = '0';
          setTimeout(() => flash.remove(), 900);
        }, isPantheon ? 700 : 900);
      }

      // Shard colour matches card material
      const bgC = isPantheon
        ? 'linear-gradient(135deg, rgba(84,21,128,0.95), rgba(29,8,61,0.85), rgba(79,20,142,0.92))'
        : isHoF
          ? 'linear-gradient(135deg,#140e00,#1e1500,#2a1e00)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(245,250,255,0.88), rgba(225,235,245,0.78))';

      // Each shard = triangle from impact point (ix,iy) to two adjacent boundary points
      const shardOverlay = document.createElement('div');
      shardOverlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:99998';
      button.appendChild(shardOverlay);

      endpoints.forEach(([ex, ey], i) => {
        const [nx, ny] = endpoints[(i + 1) % endpoints.length];
        const p0 = [ix, iy], p1 = [ex, ey], p2 = [nx, ny];

        // Centroid → direction from impact point
        const gcx = (p0[0] + p1[0] + p2[0]) / 3;
        const gcy = (p0[1] + p1[1] + p2[1]) / 3;
        const ddx = gcx - ix, ddy = gcy - iy;
        const dist = Math.hypot(ddx, ddy) || 1;
        const spd  = 130 + Math.random() * 110;
        const tx   = (ddx / dist) * spd;
        const ty   = (ddy / dist) * spd;
        const rot  = (Math.random() - 0.5) * 150;

        const shardDelay = i * 22 * slowFactor;
        const fadeDel    = shardDelay + SHARD_DUR * 0.38;

        const shard = document.createElement('div');
        shard.style.cssText = [
          'position:absolute',
          'left:0',
          'top:0',
          'width:100%', 'height:100%',
          `clip-path:polygon(${p0[0]}px ${p0[1]}px,${p1[0]}px ${p1[1]}px,${p2[0]}px ${p2[1]}px)`,
          `background:${bgC}`,
          isPantheon
            ? 'box-shadow:inset 0 0 28px rgba(185,105,255,0.34)'
            : isHoF ? 'box-shadow:inset 0 0 24px rgba(244,162,97,0.28)'
            : 'box-shadow:inset 0 0 18px rgba(255,255,255,0.65), 0 0 12px rgba(210,230,255,0.32)',
          'pointer-events:none', 'opacity:1',
          'transform:translate(0,0) rotate(0deg)',
          `transition:transform ${SHARD_DUR}ms cubic-bezier(0.22,0.44,0.44,0.96) ${shardDelay}ms,`
            + `opacity ${Math.round(SHARD_DUR * 0.62)}ms ease ${fadeDel}ms`,
        ].join(';');
        shardOverlay.appendChild(shard);

        requestAnimationFrame(() => requestAnimationFrame(() => {
          shard.style.transform = `translate(${tx}px,${ty}px) rotate(${rot}deg)`;
          shard.style.opacity   = '0';
        }));
      });

      setTimeout(() => shardOverlay.remove(), SHARD_DUR + endpoints.length * 22 * slowFactor + 300);
      if (restoreNormalUnlockVisual) {
        setTimeout(restoreNormalUnlockVisual, SHARD_DUR + endpoints.length * 22 * slowFactor + 220);
      }

    }, PHASE1);
  }


  /* ════════════════════════════════════════════════════════════
     ANIMATION 3 — HOF FIRST PANTHEON UNLOCK
     triggerPantheonCinematic(btn)
     ──────────────────────────────────────────────────────────
     Sequence:
       0ms    — dark vignette fades in; card clone lifts and flies to center
       700ms  — card is centered; energy vortex (canvas particles) converges
       1300ms — crack SVG appears on the centered card
       1950ms — shatter: shards explode outward; purple flash + ⬡ sigil
       2750ms — welcome modal fades in
  ═══════════════════════════════════════════════════════════ */
  function triggerPantheonCinematic(btn) {
    // Mark awakening and glass-effect as consumed
    const AWAKENING_KEY = window.PANTHEON_AWAKENING_KEY;
    try { localStorage.setItem(AWAKENING_KEY, '1'); } catch (e) {}
    const GLASS_KEY = 'grnd_glass_effects';
    const exKey = window.getProgressBtnKey(btn);
    try {
      const s = JSON.parse(localStorage.getItem(GLASS_KEY) || '{}');
      s[exKey] = true;
      localStorage.setItem(GLASS_KEY, JSON.stringify(s));
    } catch (e) {}

    playGlassBreakSound(true, true);

    const vw = window.innerWidth, vh = window.innerHeight;
    const btnRect = btn.getBoundingClientRect();

    // ── Dark vignette overlay ──────────────────────────────
    const vignette = document.createElement('div');
    vignette.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99980',
      'pointer-events:none',
      'background:rgba(3,0,10,0)',
      'transition:background 0.55s ease',
    ].join(';');
    document.body.appendChild(vignette);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      vignette.style.background = 'rgba(3,0,10,0.9)';
    }));

    // ── Card clone — starts at button position ──────────────
    const nameText = (btn.querySelector('.prog-item-name') || btn).textContent.trim().replace('★', '').trim();
    const CLONE_W_FINAL = Math.min(340, vw * 0.74);
    const CLONE_H_FINAL = 62;
    const CLONE_TX = (vw - CLONE_W_FINAL) / 2;
    const CLONE_TY = (vh - CLONE_H_FINAL) / 2;

    const clone = document.createElement('div');
    clone.style.cssText = [
      'position:fixed',
      `left:${btnRect.left}px`, `top:${btnRect.top}px`,
      `width:${btnRect.width}px`, `height:${btnRect.height}px`,
      'z-index:99985', 'border-radius:6px',
      'border:1px solid #c87d00', 'border-left-width:3px',
      'background:linear-gradient(135deg,#140e00,#1e1500,#2a1e00)',
      'display:flex', 'align-items:center', 'justify-content:space-between',
      'padding:0 12px', 'gap:8px', 'overflow:hidden', 'pointer-events:none',
      'transition:left 0.62s cubic-bezier(0.16,0.84,0.28,1), top 0.62s cubic-bezier(0.16,0.84,0.28,1), width 0.62s cubic-bezier(0.16,0.84,0.28,1), height 0.62s cubic-bezier(0.16,0.84,0.28,1), box-shadow 0.62s ease',
    ].join(';');
    const cloneLabel = document.createElement('span');
    cloneLabel.textContent = nameText;
    cloneLabel.style.cssText = "font-family:'IBM Plex Sans',sans-serif;font-size:0.82rem;color:#f4a261;font-weight:500;letter-spacing:0.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
    const cloneStar = document.createElement('span');
    cloneStar.textContent = '★';
    cloneStar.style.cssText = 'font-size:0.65rem;color:#c87d00;flex-shrink:0';
    clone.appendChild(cloneLabel);
    clone.appendChild(cloneStar);
    document.body.appendChild(clone);

    // Fly card to center
    requestAnimationFrame(() => requestAnimationFrame(() => {
      clone.style.left      = CLONE_TX + 'px';
      clone.style.top       = CLONE_TY + 'px';
      clone.style.width     = CLONE_W_FINAL + 'px';
      clone.style.height    = CLONE_H_FINAL + 'px';
      clone.style.boxShadow = '0 0 48px rgba(200,125,0,0.38), 0 0 100px rgba(200,125,0,0.18)';
    }));

    // ── PHASE 1 (700ms): Energy vortex canvas ───────────────
    setTimeout(() => {
      const canvas = document.createElement('canvas');
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = vw * dpr;
      canvas.height = vh * dpr;
      canvas.style.cssText = [
        'position:fixed', 'inset:0', 'z-index:99983',
        `width:${vw}px`, `height:${vh}px`, 'pointer-events:none',
      ].join(';');
      document.body.appendChild(canvas);
      const ctx2d = canvas.getContext('2d');
      ctx2d.scale(dpr, dpr);

      const cx = CLONE_TX + CLONE_W_FINAL / 2;
      const cy = CLONE_TY + CLONE_H_FINAL / 2;

      const particles = Array.from({ length: 68 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const dist  = 140 + Math.random() * 230;
        return {
          x:     cx + Math.cos(angle) * dist,
          y:     cy + Math.sin(angle) * dist,
          size:  1.2 + Math.random() * 2.8,
          delay: Math.random() * 0.36,
          dur:   0.48 + Math.random() * 0.32,
          gold:  Math.random() < 0.55,
        };
      });

      const VORTEX_DUR = 600;
      let vortexStart = null;
      let vortexRunning = true;

      function drawVortex(ts) {
        if (!vortexRunning) return;
        if (!vortexStart) vortexStart = ts;
        const elapsed = (ts - vortexStart) / 1000;
        ctx2d.clearRect(0, 0, vw, vh);

        particles.forEach(p => {
          const tN = Math.max(0, (elapsed - p.delay) / p.dur);
          if (tN <= 0) return;
          const progress = Math.min(1, tN);
          const eased    = 1 - Math.pow(1 - progress, 2.6);
          const x = p.x + (cx - p.x) * eased;
          const y = p.y + (cy - p.y) * eased;
          const alpha = (1 - Math.pow(progress, 1.8)) * 0.92;
          const r     = p.size * (1 - progress * 0.55);
          const color = p.gold ? '#f4c862' : '#e8a040';

          ctx2d.beginPath();
          ctx2d.arc(x, y, r, 0, Math.PI * 2);
          ctx2d.fillStyle = color;
          ctx2d.globalAlpha = alpha;
          ctx2d.fill();

          if (progress < 0.88) {
            const trailProg = Math.max(0, eased - 0.14);
            const trailX = p.x + (cx - p.x) * trailProg;
            const trailY = p.y + (cy - p.y) * trailProg;
            ctx2d.beginPath();
            ctx2d.moveTo(x, y);
            ctx2d.lineTo(trailX, trailY);
            ctx2d.strokeStyle = color;
            ctx2d.globalAlpha = alpha * 0.35;
            ctx2d.lineWidth   = r * 0.7;
            ctx2d.stroke();
          }
          ctx2d.globalAlpha = 1;
        });

        // Card glow pulse
        const glowAlpha = Math.min(1, elapsed / 0.4) * 0.28;
        const grd = ctx2d.createRadialGradient(cx, cy, 0, cx, cy, 140);
        grd.addColorStop(0, `rgba(244,200,80,${glowAlpha})`);
        grd.addColorStop(1, 'rgba(244,200,80,0)');
        ctx2d.fillStyle = grd;
        ctx2d.globalAlpha = 1;
        ctx2d.fillRect(0, 0, vw, vh);

        requestAnimationFrame(drawVortex);
      }
      requestAnimationFrame(drawVortex);

      clone.style.transition += ', box-shadow 0.4s ease';
      clone.style.boxShadow = '0 0 80px rgba(244,180,60,0.68), 0 0 160px rgba(200,125,0,0.36), 0 0 260px rgba(180,100,0,0.2)';

      setTimeout(() => { vortexRunning = false; canvas.remove(); }, VORTEX_DUR + 200);

      // ── PHASE 2 (1300ms total): Crack SVG on centered card ─
      setTimeout(() => {
        const cRect = clone.getBoundingClientRect();
        const W = cRect.width, H = cRect.height;
        const svgNS = 'http://www.w3.org/2000/svg';
        const ix2 = W * (0.40 + Math.random() * 0.20);
        const iy2 = H * (0.35 + Math.random() * 0.30);

        const crackSvg = document.createElementNS(svgNS, 'svg');
        crackSvg.setAttribute('viewBox', `0 0 ${W} ${H}`);
        crackSvg.style.cssText = [
          'position:fixed',
          `left:${cRect.left}px`, `top:${cRect.top}px`,
          `width:${W}px`, `height:${H}px`,
          'pointer-events:none', 'z-index:99999', 'overflow:hidden',
          'filter:drop-shadow(0 0 10px rgba(255,220,100,0.8)) drop-shadow(0 0 28px rgba(255,180,60,0.5))',
        ].join(';');

        const fid = 'glf_p' + Date.now(), cid = 'clp_p' + Date.now();
        const defs2 = document.createElementNS(svgNS, 'defs');
        defs2.innerHTML = `
          <filter id="${fid}" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="${cid}"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath>`;
        crackSvg.appendChild(defs2);

        function jit2(n) { return (Math.random() - 0.5) * n; }
        const eps = [
          [jit2(W * 0.1), 0], [W * 0.28 + jit2(12), 0], [W * 0.62 + jit2(12), 0],
          [W, jit2(H * 0.1)], [W, H * 0.45 + jit2(8)], [W, H],
          [W * 0.65 + jit2(12), H], [W * 0.28 + jit2(12), H], [0, H], [0, H * 0.45 + jit2(8)],
        ];

        const crackG2 = document.createElementNS(svgNS, 'g');
        crackG2.setAttribute('filter', `url(#${fid})`);
        crackG2.setAttribute('clip-path', `url(#${cid})`);

        eps.forEach((ep, i) => {
          const [ex, ey] = ep;
          const mx2  = (ix2 + ex) / 2 + jit2(10);
          const my2  = (iy2 + ey) / 2 + jit2(10);
          const len2 = Math.hypot(ex - ix2, ey - iy2) * 1.3;
          const d2   = i * 0.042;

          const p2 = document.createElementNS(svgNS, 'path');
          p2.setAttribute('d', `M${ix2} ${iy2} Q${mx2} ${my2} ${ex} ${ey}`);
          p2.setAttribute('stroke', '#ffe08a');
          p2.setAttribute('stroke-width', '2.8');
          p2.setAttribute('fill', 'none');
          p2.setAttribute('stroke-linecap', 'round');
          p2.setAttribute('stroke-dasharray', `${len2}`);
          p2.setAttribute('stroke-dashoffset', `${len2}`);
          p2.style.transition = `stroke-dashoffset ${0.13 + i * 0.024}s ease-out ${d2}s`;
          crackG2.appendChild(p2);

          // Sub-crack
          const bt2  = 0.30 + Math.random() * 0.40;
          const bx0  = ix2 + (ex - ix2) * bt2 + jit2(6);
          const by0  = iy2 + (ey - iy2) * bt2 + jit2(6);
          const ang2 = Math.atan2(ey - iy2, ex - ix2) + (Math.random() - 0.5) * 1.4;
          const bl2  = 10 + Math.random() * 24;
          const br2  = document.createElementNS(svgNS, 'line');
          br2.setAttribute('x1', bx0); br2.setAttribute('y1', by0);
          br2.setAttribute('x2', bx0 + Math.cos(ang2) * bl2); br2.setAttribute('y2', by0 + Math.sin(ang2) * bl2);
          br2.setAttribute('stroke', '#ffe08a'); br2.setAttribute('stroke-width', '1.2');
          br2.setAttribute('stroke-linecap', 'round'); br2.setAttribute('opacity', '0.6');
          br2.setAttribute('stroke-dasharray', `${bl2}`); br2.setAttribute('stroke-dashoffset', `${bl2}`);
          br2.style.transition = `stroke-dashoffset 0.10s ease-out ${d2 + 0.065}s`;
          crackG2.appendChild(br2);
        });

        crackSvg.appendChild(crackG2);
        document.body.appendChild(crackSvg);

        requestAnimationFrame(() => requestAnimationFrame(() => {
          crackG2.querySelectorAll('path,line').forEach(el => { el.style.strokeDashoffset = '0'; });
        }));
        // Flicker gold
        setTimeout(() => {
          let ph = 0;
          const iv = setInterval(() => {
            ph++;
            crackG2.querySelectorAll('path').forEach(el => {
              el.setAttribute('stroke-width', ph % 2 === 0 ? '4' : '2.2');
            });
            if (ph >= 6) clearInterval(iv);
          }, 100);
        }, 300);

        // ── PHASE 3 (1950ms total): Shatter ─────────────────
        setTimeout(() => {
          crackSvg.remove();

          // Purple flash
          const flash = document.createElement('div');
          flash.style.cssText = [
            'position:fixed', 'inset:0', 'z-index:99990', 'pointer-events:none',
            'opacity:0', 'transition:opacity 0.18s ease',
            `background:radial-gradient(circle at 30% 30%,rgba(245,208,254,0.78),transparent 44%),` +
            `radial-gradient(circle at 70% 38%,rgba(96,165,250,0.26),transparent 32%),` +
            `radial-gradient(circle at 50% 50%,rgba(220,80,255,0.22),transparent 58%),` +
            `linear-gradient(135deg,rgba(124,58,237,0.3),rgba(195,95,255,0.18))`,
          ].join(';');
          document.body.appendChild(flash);
          requestAnimationFrame(() => requestAnimationFrame(() => { flash.style.opacity = '1'; }));

          // ⬡ Sigil
          const sigil2 = document.createElement('div');
          sigil2.textContent = '⬡';
          sigil2.style.cssText = [
            'position:fixed', 'left:50%', 'top:50%',
            'transform:translate(-50%,-50%) scale(0.55)',
            "font-family:'Bebas Neue',sans-serif",
            'font-size:min(42vw,20rem)', 'line-height:1',
            'color:rgba(245,208,254,0.92)',
            'text-shadow:0 0 36px rgba(244,114,247,0.6),0 0 90px rgba(96,165,250,0.28)',
            'pointer-events:none', 'z-index:99992', 'opacity:0',
            'transition:transform 1.1s cubic-bezier(.12,.86,.28,1), opacity 0.22s ease',
          ].join(';');
          document.body.appendChild(sigil2);
          requestAnimationFrame(() => requestAnimationFrame(() => {
            sigil2.style.opacity = '1';
            sigil2.style.transform = 'translate(-50%,-50%) scale(1.22)';
          }));

          // Shards from final clone rect
          const finalRect = clone.getBoundingClientRect();
          const FW = finalRect.width, FH = finalRect.height;
          const SHARD_DUR2 = 2100;
          const shardOverlay2 = document.createElement('div');
          shardOverlay2.style.cssText = 'position:absolute;top:0;left:0;width:0;height:0;overflow:visible;pointer-events:none;z-index:99991';
          document.body.appendChild(shardOverlay2);

          eps.forEach(([ex, ey], i) => {
            const [nx, ny] = eps[(i + 1) % eps.length];
            const p0s = [ix2, iy2], p1s = [ex, ey], p2s = [nx, ny];
            const gcx2 = (p0s[0] + p1s[0] + p2s[0]) / 3;
            const gcy2 = (p0s[1] + p1s[1] + p2s[1]) / 3;
            const ddx2 = gcx2 - ix2, ddy2 = gcy2 - iy2;
            const dist2 = Math.hypot(ddx2, ddy2) || 1;
            const spd2  = 170 + Math.random() * 140;
            const tdx2  = (ddx2 / dist2) * spd2;
            const tdy2  = (ddy2 / dist2) * spd2;
            const rot2  = (Math.random() - 0.5) * 200;
            const shardDelay2 = i * 24;
            const fadeDel2 = shardDelay2 + SHARD_DUR2 * 0.34;

            const shard2 = document.createElement('div');
            shard2.style.cssText = [
              'position:fixed',
              `left:${finalRect.left}px`, `top:${finalRect.top}px`,
              `width:${FW}px`, `height:${FH}px`,
              `clip-path:polygon(${p0s[0]}px ${p0s[1]}px,${p1s[0]}px ${p1s[1]}px,${p2s[0]}px ${p2s[1]}px)`,
              'background:linear-gradient(135deg,#140e00,#1e1500,#2a1e00)',
              'box-shadow:inset 0 0 28px rgba(244,162,97,0.32)',
              'pointer-events:none', 'opacity:1',
              'transform:translate(0,0) rotate(0deg)',
              `transition:transform ${SHARD_DUR2}ms cubic-bezier(0.22,0.44,0.44,0.96) ${shardDelay2}ms,` +
              `opacity ${Math.round(SHARD_DUR2 * 0.58)}ms ease ${fadeDel2}ms`,
            ].join(';');
            shardOverlay2.appendChild(shard2);
            requestAnimationFrame(() => requestAnimationFrame(() => {
              shard2.style.transform = `translate(${tdx2}px,${tdy2}px) rotate(${rot2}deg)`;
              shard2.style.opacity   = '0';
            }));
          });

          clone.style.transition = 'opacity 0.15s ease';
          clone.style.opacity = '0';
          setTimeout(() => clone.remove(), 200);
          setTimeout(() => shardOverlay2.remove(), SHARD_DUR2 + 400);

          // Sigil fade out
          setTimeout(() => {
            sigil2.style.transition = 'transform 0.95s ease, opacity 0.95s ease';
            sigil2.style.opacity = '0';
            sigil2.style.transform = 'translate(-50%,-50%) scale(1.52)';
            setTimeout(() => sigil2.remove(), 1000);
          }, 560);

          // Flash fade out
          setTimeout(() => {
            flash.style.transition = 'opacity 1.1s ease';
            flash.style.opacity = '0';
            setTimeout(() => flash.remove(), 1200);
          }, 650);
          // Vignette fade out (after modal appears — see Bug-3 fix comment)
          setTimeout(() => {
            vignette.style.transition = 'background 1.3s ease';
            vignette.style.background = 'rgba(3,0,10,0)';
            setTimeout(() => vignette.remove(), 1400);
          }, 950);

          // ── PHASE 4 (2750ms total): Welcome modal ──────────
          setTimeout(() => {
            if (typeof window.checkPantheonUnlock === 'function') window.checkPantheonUnlock();
            if (typeof window.showPantheonAwakeningModal === 'function') window.showPantheonAwakeningModal();
          }, 800);

        }, 650); // crack phase duration
      }, 600);   // vortex phase duration

    }, 700);     // card flight duration
  }


  /* ════════════════════════════════════════════════════════════
     ANIMATION 4 — HOF SUBSEQUENT PANTHEON GATE
     playHofCardRevealAnimation(btn)
     ──────────────────────────────────────────────────────────
     Only the "card flies to centre + light burst" phase —
     no crack, no shatter, no modal.
     Used for HoF unlocks after the first Pantheon awakening.
  ═══════════════════════════════════════════════════════════ */
  function playHofCardRevealAnimation(btn) {
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    const vw = window.innerWidth, vh = window.innerHeight;
    const btnRect = btn.getBoundingClientRect();

    // ── Dark vignette ────────────────────────────────────────
    const vignette = document.createElement('div');
    vignette.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99980', 'pointer-events:none',
      'background:rgba(3,0,10,0)', 'transition:background 0.45s ease',
    ].join(';');
    document.body.appendChild(vignette);
    vignette.getBoundingClientRect();
    vignette.style.background = 'rgba(3,0,10,0.88)';

    // ── Card clone ──────────────────────────────────────────
    const nameText = (btn.querySelector('.prog-item-name') || btn).textContent.trim().replace('★', '').trim();
    const CLONE_W_FINAL = Math.min(340, vw * 0.74);
    const CLONE_H_FINAL = 62;
    const CLONE_TX = (vw - CLONE_W_FINAL) / 2;
    const CLONE_TY = (vh - CLONE_H_FINAL) / 2;

    const clone = document.createElement('div');
    clone.style.cssText = [
      'position:fixed',
      `left:${btnRect.left}px`, `top:${btnRect.top}px`,
      `width:${btnRect.width}px`, `height:${btnRect.height}px`,
      'z-index:99985', 'border-radius:6px',
      'border:1px solid #c87d00', 'border-left-width:3px',
      'background:linear-gradient(135deg,#140e00,#1e1500,#2a1e00)',
      'display:flex', 'align-items:center', 'justify-content:space-between',
      'padding:0 12px', 'gap:8px', 'overflow:hidden', 'pointer-events:none',
      'transition:left 0.62s cubic-bezier(0.16,0.84,0.28,1), top 0.62s cubic-bezier(0.16,0.84,0.28,1), width 0.62s cubic-bezier(0.16,0.84,0.28,1), height 0.62s cubic-bezier(0.16,0.84,0.28,1), box-shadow 0.62s ease',
    ].join(';');
    const cloneLabel = document.createElement('span');
    cloneLabel.textContent = nameText;
    cloneLabel.style.cssText = "font-family:'IBM Plex Sans',sans-serif;font-size:0.82rem;color:#f4a261;font-weight:500;letter-spacing:0.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
    const cloneStar = document.createElement('span');
    cloneStar.textContent = '★';
    cloneStar.style.cssText = 'font-size:0.65rem;color:#c87d00;flex-shrink:0';
    clone.appendChild(cloneLabel);
    clone.appendChild(cloneStar);
    document.body.appendChild(clone);

    // Force layout commit so transition has a real "before" state
    clone.getBoundingClientRect();

    // Fly to centre
    clone.style.left      = CLONE_TX + 'px';
    clone.style.top       = CLONE_TY + 'px';
    clone.style.width     = CLONE_W_FINAL + 'px';
    clone.style.height    = CLONE_H_FINAL + 'px';
    clone.style.boxShadow = '0 0 48px rgba(200,125,0,0.38), 0 0 100px rgba(200,125,0,0.18)';

    // Intensify glow once card has landed
    setTimeout(() => {
      clone.style.transition = 'box-shadow 0.4s ease';
      clone.style.boxShadow  = '0 0 80px rgba(244,180,60,0.72), 0 0 160px rgba(200,125,0,0.42), 0 0 260px rgba(180,100,0,0.22)';
    }, 680);

    // Fade out everything — no crack, no shatter
    setTimeout(() => {
      clone.style.transition    = 'opacity 0.45s ease';
      clone.style.opacity       = '0';
      vignette.style.transition = 'background 0.5s ease';
      vignette.style.background = 'rgba(3,0,10,0)';
    }, 1050);

    // Cleanup
    setTimeout(() => { clone.remove(); vignette.remove(); }, 1650);
  }


  /* ════════════════════════════════════════════════════════════
     ANIMATION 5 — PANTHEON COMPLETION CINEMATIC
     triggerPantheonCompletionCinematic(btn)
     ──────────────────────────────────────────────────────────
     Triggers when a Pantheon workout is marked done.
     Timeline (5 seconds):
       0ms    — full black overlay fades in; exercise name rises to centre
       400ms  — ⬡ sigil blooms behind; rotating light ray cone begins
       900ms  — "CONQUERED" badge snaps into place below the name
       1200ms — name settles slightly above center with intensified glow
       4200ms — everything starts fading
       5000ms — cleanup; progress applied normally
  ═══════════════════════════════════════════════════════════ */
  function triggerPantheonCompletionCinematic(btn) {
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;

    const vw = window.innerWidth, vh = window.innerHeight;
    const nameText = (() => {
      const card = btn.closest('.pantheon-card');
      if (card) {
        const nameEl = card.querySelector('.hof-card-name');
        if (nameEl) return nameEl.textContent.trim();
      }
      const nameEl = btn.querySelector('.hof-card-name') || btn.querySelector('.prog-item-name');
      if (nameEl) return nameEl.textContent.trim().replace('★', '').trim();
      return 'PANTHEON';
    })();

    // Play a dramatic version of the glass break sound
    playGlassBreakSound(true, true);

    // ── Full black overlay ──────────────────────────────────
    const overlay = document.createElement('div');
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99980', 'pointer-events:none',
      'background:rgba(0,0,0,0)', 'transition:background 0.35s ease',
    ].join(';');
    document.body.appendChild(overlay);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      overlay.style.background = 'rgba(0,0,0,1)';
    }));

    // ── Rotating light ray cone ─────────────────────────────
    const rays = document.createElement('div');
    rays.style.cssText = [
      'position:fixed', 'left:50%', 'top:50%',
      'width:max(200vw,200vh)', 'height:max(200vw,200vh)',
      'z-index:99981', 'pointer-events:none', 'opacity:0',
      'transform:translate(-50%,-50%) rotate(0deg)',
      'transition:opacity 0.6s ease',
      `background:conic-gradient(from 0deg,
        transparent 0deg,rgba(168,85,247,0.13) 8deg,transparent 16deg,
        transparent 52deg,rgba(96,165,250,0.10) 60deg,transparent 68deg,
        transparent 106deg,rgba(244,114,247,0.11) 114deg,transparent 122deg,
        transparent 158deg,rgba(167,139,250,0.09) 166deg,transparent 174deg,
        transparent 210deg,rgba(96,165,250,0.13) 218deg,transparent 226deg,
        transparent 274deg,rgba(244,114,247,0.10) 282deg,transparent 290deg,
        transparent 330deg,rgba(168,85,247,0.09) 338deg,transparent 346deg
      )`,
      'animation:pantheonCompletionRayRotate 6s linear infinite',
      'animation-play-state:paused',
    ].join(';');
    document.body.appendChild(rays);

    // ── Radial core glow ─────────────────────────────────────
    const coreGlow = document.createElement('div');
    coreGlow.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99982', 'pointer-events:none', 'opacity:0',
      'background:radial-gradient(circle at 50% 50%,rgba(212,70,239,0.28) 0%,rgba(96,165,250,0.14) 20%,rgba(167,139,250,0.06) 40%,transparent 65%)',
      'transition:opacity 0.7s ease',
    ].join(';');
    document.body.appendChild(coreGlow);

    // ── ⬡ Sigil ──────────────────────────────────────────────
    const sigil = document.createElement('div');
    sigil.textContent = '⬡';
    sigil.style.cssText = [
      'position:fixed', 'left:50%', 'top:50%',
      'transform:translate(-50%,-50%) scale(0.4)',
      "font-family:'Bebas Neue',sans-serif",
      'font-size:min(55vw,28rem)', 'line-height:1',
      'color:rgba(245,208,254,0.14)',
      'text-shadow:0 0 40px rgba(244,114,247,0.0)',
      'pointer-events:none', 'z-index:99983', 'opacity:0',
      'transition:transform 1.4s cubic-bezier(.12,.86,.24,1), opacity 0.55s ease, color 0.8s ease, text-shadow 0.8s ease',
    ].join(';');
    document.body.appendChild(sigil);

    // ── Exercise name ────────────────────────────────────────
    const nameEl = document.createElement('div');
    nameEl.textContent = nameText;
    nameEl.style.cssText = [
      'position:fixed', 'left:50%', 'top:50%',
      'transform:translateX(-50%) translateY(24px)',
      'z-index:99985', 'pointer-events:none', 'opacity:0',
      "font-family:'Bebas Neue',sans-serif",
      'font-size:clamp(1.6rem,6vw,3rem)',
      'color:#f5d0fe', 'letter-spacing:0.22em', 'white-space:nowrap',
      'text-align:center', 'max-width:90vw', 'overflow:hidden', 'text-overflow:ellipsis',
      'text-shadow:0 0 22px rgba(244,114,247,0.55),0 0 50px rgba(96,165,250,0.22)',
      'transition:opacity 0.5s ease, transform 0.55s cubic-bezier(0.16,0.84,0.28,1)',
    ].join(';');
    document.body.appendChild(nameEl);

    // ── "CONQUERED" badge ────────────────────────────────────
    const badge = document.createElement('div');
    badge.textContent = '— CONQUERED —';
    badge.style.cssText = [
      'position:fixed', 'left:50%',
      `top:calc(50% + ${Math.min(34 + vh * 0.06, 74)}px)`,
      'transform:translateX(-50%) scaleX(0.6)',
      'z-index:99985', 'pointer-events:none', 'opacity:0',
      "font-family:'IBM Plex Mono',monospace",
      'font-size:clamp(0.55rem,2vw,0.8rem)',
      'color:rgba(192,132,252,0.85)', 'letter-spacing:0.32em', 'white-space:nowrap',
      'transition:opacity 0.38s ease, transform 0.38s cubic-bezier(0.22,1,0.36,1)',
    ].join(';');
    document.body.appendChild(badge);

    // ── Phase 0→400ms: overlay black + name rises ─────────
    setTimeout(() => {
      nameEl.style.opacity   = '1';
      nameEl.style.transform = 'translateX(-50%) translateY(0)';
    }, 280);

    // ── Phase 400ms: sigil blooms + rays start ─────────────
    setTimeout(() => {
      sigil.style.opacity      = '1';
      sigil.style.transform    = 'translate(-50%,-50%) scale(1.05)';
      sigil.style.color        = 'rgba(245,208,254,0.22)';
      sigil.style.textShadow   = '0 0 40px rgba(244,114,247,0.55),0 0 90px rgba(96,165,250,0.28),0 0 160px rgba(167,139,250,0.18)';
      sigil.style.animation    = 'pantheonCompletionSigilPulse 1.8s ease-in-out infinite';
      rays.style.opacity            = '1';
      rays.style.animationPlayState = 'running';
      coreGlow.style.opacity        = '1';
    }, 400);

    // ── Phase 900ms: "CONQUERED" badge ─────────────────────
    setTimeout(() => {
      badge.style.opacity   = '1';
      badge.style.transform = 'translateX(-50%) scaleX(1)';
    }, 900);

    // ── Phase 1200ms: name settles slightly above center ────
    setTimeout(() => {
      const offset = Math.min(32 + vh * 0.04, 64);
      nameEl.style.transition  = 'transform 0.8s cubic-bezier(0.22,1,0.36,1), text-shadow 0.8s ease';
      nameEl.style.transform   = `translateX(-50%) translateY(-${offset}px)`;
      nameEl.style.textShadow  = '0 0 32px rgba(244,114,247,0.8),0 0 70px rgba(96,165,250,0.38),0 0 120px rgba(167,139,250,0.24)';
    }, 1200);

    // ── Phase 4200ms: fade everything out ──────────────────
    setTimeout(() => {
      [sigil, nameEl, badge, rays, coreGlow].forEach(el => {
        el.style.transition = 'opacity 0.75s ease';
        el.style.opacity    = '0';
      });
      overlay.style.transition = 'background 0.85s ease';
      overlay.style.background = 'rgba(0,0,0,0)';
    }, 4200);

    // ── Cleanup at 5100ms ───────────────────────────────────
    setTimeout(() => {
      [overlay, rays, coreGlow, sigil, nameEl, badge].forEach(el => el.remove());
    }, 5100);
  }


  /* ── Export all functions to window so index.html can call them ── */
  window.playGlassBreakSound             = playGlassBreakSound;
  window.createGlassBreakEffect          = createGlassBreakEffect;
  window.triggerPantheonCinematic        = triggerPantheonCinematic;
  window.playHofCardRevealAnimation      = playHofCardRevealAnimation;
  window.triggerPantheonCompletionCinematic = triggerPantheonCompletionCinematic;

})();
