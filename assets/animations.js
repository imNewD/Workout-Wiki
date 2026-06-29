/* ════════ animations.js ════════
   Merged motion/FX: PANTHEON-AWAKENING + SIDEQUESTS-POLLEN + ANIMATIONS.
   pantheon-awakening is first so PANTHEON_AWAKENING_KEY is defined before use.
════════════════════════════════ */

/* ===== PANTHEON-AWAKENING: awakening modal + initLib/initAllLibs ===== */
/* ──────────────────────────────────────────────────────────────
   src/pantheon-awakening.js — extracted from index.html (token-efficiency split)
   Pantheon awakening modal + chime, preview flags, and library init (initLib/initAllLibs).
   Loaded as a plain (non-defer) <script src> in index.html at the
   same position it previously occupied inline — load order matters.
────────────────────────────────────────────────────────────── */

const PANTHEON_AWAKENING_KEY = 'grnd_pantheon_awakening_seen';
const PANTHEON_PREVIEW_KEY = 'grnd_pantheon_preview';
const ADMIN_PREVIEW_KEY = 'grnd_admin_theme_preview';
window.PANTHEON_AWAKENING_KEY = PANTHEON_AWAKENING_KEY; // exposed for media/animations.js

function isPantheonPreviewEnabled() {
  try { return localStorage.getItem(PANTHEON_PREVIEW_KEY) === '1'; } catch(e) { return false; }
}

function isAdminPreviewEnabled() {
  try { return localStorage.getItem(ADMIN_PREVIEW_KEY) === '1'; } catch(e) { return false; }
}

function playPantheonAwakeningChime() {
  let ctx;
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) { return; }
  const t = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.value = 0.18;
  master.connect(ctx.destination);
  const notes = [220, 277, 330, 440, 660];
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = i % 2 === 0 ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, t + i * 0.08);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.48, t + 1.8 + i * 0.06);
    gain.gain.setValueAtTime(0.001, t + i * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.11 - i * 0.012, t + 0.18 + i * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 2.2 + i * 0.08);
    osc.connect(gain);
    gain.connect(master);
    osc.start(t + i * 0.08);
    osc.stop(t + 2.35 + i * 0.08);
  });
  setTimeout(() => { try { ctx.close(); } catch(e) {} }, 2800);
}

function closePantheonAwakeningModal() {
  const overlay = document.getElementById('pantheonAwakeningOverlay');
  if(!overlay) return;
  overlay.classList.remove('open', 'visible');
  document.body.style.overflow = '';
}

function showPantheonAwakeningModal() {
  const overlay = document.getElementById('pantheonAwakeningOverlay');
  if(!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Bug-2 fix: offsetHeight reflow must run AFTER display:flex has been
  // applied by the browser. Placing it inside the first rAF guarantees the
  // style recalculation for .open has already occurred before we force a
  // second reflow, ensuring the opacity transition always fires correctly.
  requestAnimationFrame(() => {
    void overlay.offsetHeight;
    requestAnimationFrame(() => { overlay.classList.add('visible'); });
  });
  playPantheonAwakeningChime();
}

function maybeShowPantheonAwakening(prevPantheonUnlocked, status) {
  if(status !== 'unlocked' || prevPantheonUnlocked) return;
  const nowPantheonUnlocked = hasPantheonAccess();
  if(!nowPantheonUnlocked) return;
  let seen = false;
  try { seen = localStorage.getItem(PANTHEON_AWAKENING_KEY) === '1'; } catch(e) {}
  if(seen) return;
  try { localStorage.setItem(PANTHEON_AWAKENING_KEY, '1'); } catch(e) {}
  setTimeout(showPantheonAwakeningModal, 380);
}

document.addEventListener('keydown',e=>{
  if(e.key!=='Escape') return;
  closeModal();
  closePantheonAwakeningModal();
});
/* ══ INIT ALL LIBRARY LISTENERS ══════════════════════════════ */
function initLib(libKey) {
  const st  = LIB_STATE[libKey];
  const ids = LIB_IDS[libKey];

  // Sort — scoped to this library's sticky header only
  const stickyEl = document.getElementById(ids.sticky);
  if(stickyEl) {
    stickyEl.querySelectorAll('th.sortable').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.dataset.col;
        if(st.sortCol === col) st.sortDir *= -1; else { st.sortCol = col; st.sortDir = 1; }
        stickyEl.querySelectorAll('th.sortable').forEach(t => { t.classList.remove('sorted'); t.querySelector('.si').textContent = '↕'; });
        th.classList.add('sorted');
        th.querySelector('.si').textContent = st.sortDir === 1 ? '↑' : '↓';
        renderLibTable(libKey);
      });
    });
  }

  // Filter chips
  const filterEl = document.getElementById(ids.filterRow);
  if(filterEl) {
    filterEl.addEventListener('click', e => {
      const c = e.target.closest('.filter-chip');
      if(!c) return;
      filterEl.querySelectorAll('.filter-chip').forEach(x => x.classList.remove('on'));
      c.classList.add('on');
      st.activeFilter = c.dataset.filter;
      renderLibTable(libKey);
    });
  }

  // Search
  const searchEl = document.getElementById(ids.search);
  if(searchEl) {
    searchEl.addEventListener('input', e => {
      st.searchTerm = e.target.value.trim();
      renderLibTable(libKey);
    });
  }

  // Scroll sync
  const scrollEl = document.getElementById(ids.scroll);
  if(stickyEl && scrollEl) {
    scrollEl.addEventListener('scroll', () => { stickyEl.scrollLeft = scrollEl.scrollLeft; });
    stickyEl.addEventListener('scroll', () => { scrollEl.scrollLeft = stickyEl.scrollLeft; });
  }
}

// initLib must run after DOMContentLoaded so inject() has already
// populated the sticky <thead> with th.sortable elements.
function initAllLibs() {
  Object.keys(LIB_DATA).forEach(k => { if(k !== 'inline') initLib(k); });
  renderLibTable('pushup');
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllLibs);
} else {
  initAllLibs();
}


/* ===== SIDEQUESTS-POLLEN: drifting-pollen ambient FX ===== */
/* ──────────────────────────────────────────────────────────────
   src/sidequests-pollen.js — extracted from index.html (token-efficiency split)
   Sidequests theme: slow drifting-pollen ambient particle system.
   Loaded as a plain (non-defer) <script src> in index.html at the
   same position it previously occupied inline — load order matters.
────────────────────────────────────────────────────────────── */


/* ══ SIDEQUESTS DRIFTING POLLEN ═════════════════════════════
   Calm, slow-floating motes of pollen/seed fluff catching the
   afternoon light — they rise gently and sway, fading in and out.
   The mood is stillness: you're done, just watching the field.
══════════════════════════════════════════════════════════════ */
(function(){
  var overlayId = 'sidequests-grass-overlay';
  var overlay = null;
  var running = false;
  var timer = null;
  var grassTimer = null;
  var sunTimer = null;
  var startTimer = null;

  function ensureOverlay(){
    if(overlay) return overlay;
    overlay = document.getElementById(overlayId);
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = overlayId;
      overlay.setAttribute('aria-hidden','true');
      overlay.style.cssText = 'position:fixed; inset:0; overflow:hidden; pointer-events:none; z-index:9999;';
      document.body.appendChild(overlay);
    }
    return overlay;
  }

  function randomBetween(min,max){ return min + Math.random()*(max-min); }

  function clearOverlay(){
    if(overlay){ overlay.innerHTML=''; }
  }

  function spawnBatch(){
    if(document.documentElement.dataset.theme !== 'sidequests') return;
    ensureOverlay();

    var count = 6 + Math.floor(Math.random()*6);

    for(var i=0;i<count;i++){
      var mote = document.createElement('span');
      mote.className = 'sidequests-mote';

      var size = randomBetween(3, 7);
      // Drift mostly through the lower-sky / field band where light catches it.
      var startX = randomBetween(window.innerWidth*0.04, window.innerWidth*0.96);
      var startY = randomBetween(window.innerHeight*0.52, window.innerHeight*0.96);
      var sway = randomBetween(18, 46) * (Math.random() < 0.5 ? -1 : 1);
      var rise = randomBetween(70, 150);          // gentle upward float
      var peakOpacity = randomBetween(0.35, 0.7);
      var duration = randomBetween(11000, 20000); // slow and calm

      mote.style.cssText = 'position:absolute; left:0; top:0; width:'+size+'px; height:'+size+'px; '+
        'border-radius:50%; '+
        'background:radial-gradient(circle at 38% 34%, rgba(255,242,212,0.95) 0%, rgba(255,206,138,0.72) 45%, rgba(244,182,120,0) 78%); '+
        'box-shadow:0 0 '+(size*1.8)+'px rgba(255,198,132,0.6); '+
        'filter:blur(0.4px); '+
        'transform:translate('+startX+'px,'+startY+'px);';
      overlay.appendChild(mote);

      mote.animate([
        { transform: 'translate('+startX+'px,'+startY+'px)', opacity: 0 },
        { transform: 'translate('+(startX + sway*0.4)+'px,'+(startY - rise*0.3)+'px)', opacity: peakOpacity, offset: 0.2 },
        { transform: 'translate('+(startX - sway*0.5)+'px,'+(startY - rise*0.7)+'px)', opacity: peakOpacity, offset: 0.7 },
        { transform: 'translate('+(startX + sway*0.3)+'px,'+(startY - rise)+'px)', opacity: 0, offset: 1 }
      ], {
        duration: duration,
        easing: 'ease-in-out',
        fill: 'forwards'
      });

      setTimeout(function(el){
        if(el && el.parentNode) el.parentNode.removeChild(el);
      }, duration + 200, mote);
    }

    scheduleNext();
  }

  function scheduleNext(){
    if(!running || document.documentElement.dataset.theme !== 'sidequests') return;
    clearTimeout(timer);
    timer = setTimeout(function(){
      if(document.documentElement.dataset.theme === 'sidequests') spawnBatch();
    }, randomBetween(1500, 3000));
  }

  /* ── WIND-BLOWN GRASS GUST ─────────────────────────────────
     Every ~10s a small group of slender grass blades / seed
     slivers is carried across the field band by a gentle gust,
     swaying as they flow and fading at both ends. */
  function spawnGrassGust(){
    if(!running || document.documentElement.dataset.theme !== 'sidequests'){ scheduleGrass(); return; }
    ensureOverlay();

    var dir = Math.random() < 0.5 ? 1 : -1;             // wind direction for this gust
    var count = 4 + Math.floor(Math.random()*4);        // 4–7 blades flowing together
    var bandY = randomBetween(window.innerHeight*0.60, window.innerHeight*0.92);
    var travel = randomBetween(window.innerWidth*0.55, window.innerWidth*0.95);
    var baseDur = randomBetween(5200, 7800);            // slow, breezy crossing

    for(var i=0;i<count;i++){
      var blade = document.createElement('span');
      blade.className = 'sidequests-grass';

      var w = randomBetween(3, 5);                      // wider so the blade shape reads
      var len = randomBetween(18, 34);                  // longer, slender blades
      var startX = dir > 0 ? randomBetween(-50,-12) : window.innerWidth + randomBetween(12,50);
      var startY = bandY + randomBetween(-34, 34);
      var bob = randomBetween(12, 30);                  // vertical sway amplitude
      var rot0 = randomBetween(-34, 34);
      var spin = randomBetween(-50, 50);                // tumble as it travels
      var op = randomBetween(0.40, 0.72);
      var dur = baseDur * randomBetween(0.85, 1.18);
      var delay = i * randomBetween(90, 240);           // stagger so the gust ripples through
      var endX = startX + dir*travel;
      var curve = randomBetween(-22, 22);               // sideways lean of the tip

      // True blade silhouette: pointed tip, swelling to a base — carved with
      // clip-path so it reads as a single grass blade rather than a sliver.
      blade.style.cssText = 'position:absolute; left:0; top:0; width:'+w+'px; height:'+len+'px; '+
        'clip-path:polygon('+(50+curve*0.4)+'% 0%, 66% 30%, 60% 72%, 50% 100%, 40% 72%, 34% 30%); '+
        'background:linear-gradient(to top, rgba(74,104,44,0) 0%, rgba(92,128,52,0.92) 26%, rgba(120,152,66,0.96) 58%, rgba(176,190,96,0.96) 82%, rgba(232,212,138,0.98) 100%); '+
        'filter:blur(0.25px); '+
        'transform:translate('+startX+'px,'+startY+'px) rotate('+rot0+'deg);';
      overlay.appendChild(blade);

      blade.animate([
        { transform:'translate('+startX+'px,'+startY+'px) rotate('+rot0+'deg)', opacity:0 },
        { transform:'translate('+(startX+dir*travel*0.25)+'px,'+(startY - bob*0.6)+'px) rotate('+(rot0+spin*0.3)+'deg)', opacity:op, offset:0.22 },
        { transform:'translate('+(startX+dir*travel*0.55)+'px,'+(startY + bob*0.4)+'px) rotate('+(rot0+spin*0.6)+'deg)', opacity:op, offset:0.55 },
        { transform:'translate('+(startX+dir*travel*0.82)+'px,'+(startY - bob*0.35)+'px) rotate('+(rot0+spin*0.85)+'deg)', opacity:op*0.8, offset:0.82 },
        { transform:'translate('+endX+'px,'+(startY - bob)+'px) rotate('+(rot0+spin)+'deg)', opacity:0, offset:1 }
      ], { duration:dur, delay:delay, easing:'ease-in-out', fill:'forwards' });

      setTimeout(function(el){ if(el && el.parentNode) el.parentNode.removeChild(el); }, dur+delay+250, blade);
    }

    scheduleGrass();
  }

  function scheduleGrass(){
    if(!running || document.documentElement.dataset.theme !== 'sidequests') return;
    clearTimeout(grassTimer);
    grassTimer = setTimeout(spawnGrassGust, randomBetween(8500, 12500));
  }

  /* ── SUN GLINT ─────────────────────────────────────────────
     Time to time the low sun (painted at 72% / 50% of the
     viewport by the theme) breathes a soft warm bloom with a
     brief lens-flare streak — a quiet shine across the field. */
  function spawnSunshine(){
    if(!running || document.documentElement.dataset.theme !== 'sidequests'){ scheduleSun(); return; }
    ensureOverlay();

    var sunX = window.innerWidth*0.72, sunY = window.innerHeight*0.50;

    // Soft radial bloom that swells brighter then settles back.
    var glow = document.createElement('span');
    glow.className = 'sidequests-sunshine';
    var R = randomBetween(130, 210);
    glow.style.cssText = 'position:absolute; left:0; top:0; width:'+(R*2)+'px; height:'+(R*2)+'px; '+
      'margin-left:'+(-R)+'px; margin-top:'+(-R)+'px; border-radius:50%; '+
      'background:radial-gradient(circle, rgba(255,251,232,0.5) 0%, rgba(255,228,160,0.30) 28%, rgba(255,202,120,0.11) 52%, rgba(255,190,110,0) 72%); '+
      'transform:translate('+sunX+'px,'+sunY+'px) scale(0.55);';
    overlay.appendChild(glow);
    var glowDur = randomBetween(3000, 4400);
    glow.animate([
      { opacity:0, transform:'translate('+sunX+'px,'+sunY+'px) scale(0.55)' },
      { opacity:1, transform:'translate('+sunX+'px,'+sunY+'px) scale(1)', offset:0.42 },
      { opacity:0, transform:'translate('+sunX+'px,'+sunY+'px) scale(1.18)', offset:1 }
    ], { duration:glowDur, easing:'ease-in-out', fill:'forwards' });
    setTimeout(function(el){ if(el && el.parentNode) el.parentNode.removeChild(el); }, glowDur+200, glow);

    // A brief horizontal lens-flare streak across the sun for the glint.
    var streak = document.createElement('span');
    streak.className = 'sidequests-sunshine';
    var sw = randomBetween(window.innerWidth*0.36, window.innerWidth*0.64);
    var sAng = randomBetween(-12, 12);
    streak.style.cssText = 'position:absolute; left:0; top:0; width:'+sw+'px; height:2px; '+
      'margin-left:'+(-sw/2)+'px; margin-top:-1px; border-radius:2px; '+
      'background:linear-gradient(to right, rgba(255,240,200,0) 0%, rgba(255,247,216,0.85) 50%, rgba(255,240,200,0) 100%); '+
      'filter:blur(0.6px); '+
      'transform:translate('+sunX+'px,'+sunY+'px) rotate('+sAng+'deg) scaleX(0.3);';
    overlay.appendChild(streak);
    var streakDur = glowDur*0.7 + 2000;
    streak.animate([
      { opacity:0, transform:'translate('+sunX+'px,'+sunY+'px) rotate('+sAng+'deg) scaleX(0.3)' },
      { opacity:1, transform:'translate('+sunX+'px,'+sunY+'px) rotate('+sAng+'deg) scaleX(1)', offset:0.45 },
      { opacity:0, transform:'translate('+sunX+'px,'+sunY+'px) rotate('+sAng+'deg) scaleX(1.12)', offset:1 }
    ], { duration:streakDur, easing:'ease-out', fill:'forwards' });
    setTimeout(function(el){ if(el && el.parentNode) el.parentNode.removeChild(el); }, streakDur+200, streak);

    scheduleSun();
  }

  function scheduleSun(){
    if(!running || document.documentElement.dataset.theme !== 'sidequests') return;
    clearTimeout(sunTimer);
    sunTimer = setTimeout(spawnSunshine, randomBetween(14000, 24000));
  }

  function start(){
    if(running) return;
    if(document.documentElement.dataset.theme !== 'sidequests') return;
    // Don't paint ambient FX over the loading screen — but don't give up
    // permanently the way an early return would. On a fresh load the saved
    // theme is already 'sidequests' (applied pre-paint), so the MutationObserver
    // never fires and this is our only entry point; retry until the loader is
    // gone instead of leaving the field empty forever.
    if(document.getElementById('grnd-loader')){
      clearTimeout(startTimer);
      startTimer = setTimeout(start, 350);
      return;
    }
    running = true;
    ensureOverlay();
    clearOverlay();
    spawnBatch();
    // Stagger the ambient extras so they don't all fire at once on load.
    grassTimer = setTimeout(spawnGrassGust, randomBetween(4000, 7000));
    sunTimer = setTimeout(spawnSunshine, randomBetween(8000, 12000));
  }

  function stop(){
    running = false;
    clearTimeout(timer);
    clearTimeout(grassTimer);
    clearTimeout(sunTimer);
    clearTimeout(startTimer);
    clearOverlay();
  }

  function sync(){
    if(document.documentElement.dataset.theme === 'sidequests') start();
    else stop();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', sync);
  } else {
    sync();
  }

  var observer = new MutationObserver(function(){ sync(); });
  observer.observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
})();

/* ══ HOF SHIMMER BG INJECTOR
 ═══════════════════════════════
   Creates #hof-shimmer-bg if animations.js hasn't already.
   Sits at z-index:0 behind all content; only visible when
   data-theme="hof" (CSS handles the display conditions).
══════════════════════════════════════════════════════════ */
(function(){
  function _ensureHofBg(){
    if(!document.getElementById('hof-shimmer-bg')){
      var el=document.createElement('div');
      el.id='hof-shimmer-bg';
      document.body.prepend(el);
    }
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',_ensureHofBg);
  } else {
    _ensureHofBg();
  }
})();

/* ══ PANTHEON SHOOTING-STAR BG INJECTOR ═════════════════════
   Creates #pantheon-bg-canvas and runs a shooting-star
   animation. Only visible when data-theme="pantheon".
   Canvas position:fixed is handled by the CSS rule above.
══════════════════════════════════════════════════════════ */
(function(){
  function _ensurePantheonBg(){
    if(document.getElementById('pantheon-bg-canvas')) return;
    var cv=document.createElement('canvas');
    cv.id='pantheon-bg-canvas';
    document.body.prepend(cv);

    var W=0,H=0,ctx=cv.getContext('2d'),shots=[],stars=[],raf=0;
    var SHOT_INTERVAL=720,lastShot=0;
    var _pantheonDarkness=0;

    function resolvePantheonTime(){
      var h = new Date().getHours();
      if(h >= 20 || h < 5) _pantheonDarkness = 0.4;
      else if(h >= 18 || h < 7) _pantheonDarkness = 0.26;
      else if(h >= 16 || h < 9) _pantheonDarkness = 0.14;
      else _pantheonDarkness = 0;
      document.documentElement.dataset.pantheonMode = _pantheonDarkness >= 0.26 ? 'night' : 'day';
    }

    // Starfield lives in the upper "space" band; density biased to the very top.
    function buildStars(){
      stars=[];
      var count=Math.round((W*H)/9000);
      count=Math.max(70, Math.min(220, count));
      for(var i=0;i<count;i++){
        var yf=Math.pow(Math.random(),1.7)*0.62;   // bias toward top, gone by ~0.62H
        var roll=Math.random();
        var tint = roll<0.7 ? '255,255,255'
                 : roll<0.9 ? '202,216,255'         // pale blue
                            : '255,236,184';        // faint gold
        stars.push({
          x:Math.random()*W,
          y:yf*H,
          r:Math.random()<0.86 ? (0.5+Math.random()*0.9) : (1.4+Math.random()*1.1),
          base:0.35+Math.random()*0.6,
          tint:tint,
          ph:Math.random()*Math.PI*2,
          tw:0.6+Math.random()*1.6                  // twinkle speed
        });
      }
    }

    function resize(){
      W=cv.width=window.innerWidth;
      H=cv.height=window.innerHeight;
      buildStars();
    }

    function mkShot(){
      // spawns high in the space band, streaks steeply down toward the sunset
      var sx=Math.random()*W*0.9, sy=Math.random()*H*0.30;
      var angle=Math.PI*0.34+( Math.random()-0.5)*0.28;   // steeper "falling" diagonal
      var variantRoll=Math.random();
      var size='medium';
      if(variantRoll < 0.40) size='small';
      else if(variantRoll > 0.78) size='large';
      var len, spd, maxLife, width, head;
      if(size==='small'){
        len = W*0.05 + Math.random()*W*0.04;
        spd = W*0.0032 + Math.random()*W*0.0018;
        maxLife = 34 + Math.random()*16;
        width = 1.0;
        head = 1.1;
      } else if(size==='large'){
        len = W*0.15 + Math.random()*W*0.07;
        spd = W*0.0018 + Math.random()*W*0.0010;
        maxLife = 92 + Math.random()*30;
        width = 2.6;
        head = 3.2;
      } else {
        len = W*0.10 + Math.random()*W*0.05;
        spd = W*0.0025 + Math.random()*W*0.0013;
        maxLife = 62 + Math.random()*26;
        width = 1.6;
        head = 1.9;
      }
      return {x:sx,y:sy,dx:Math.cos(angle)*spd,dy:Math.sin(angle)*spd,
              len:len,life:0,maxLife:maxLife,width:width,head:head};
    }

    function drawFrame(ts){
      if(document.documentElement.dataset.theme!=='pantheon'){
        raf=requestAnimationFrame(drawFrame); return;
      }
      ctx.clearRect(0,0,W,H);
      var darkness = _pantheonDarkness;   // 0 (day) … 0.4 (deep night)

      // ── Vertical world: deep space (top) → violet sunset → ivory-gold floor
      var grd=ctx.createLinearGradient(0,0,0,H);
      grd.addColorStop(0.00,'#05030e');   // void of space
      grd.addColorStop(0.13,'#0a0820');
      grd.addColorStop(0.28,'#15113a');
      grd.addColorStop(0.42,'#241a55');   // deep indigo
      grd.addColorStop(0.54,'#3d2660');   // violet
      grd.addColorStop(0.63,'#5e3669');   // soft purple
      grd.addColorStop(0.71,'#8a4f72');   // mauve dusk
      grd.addColorStop(0.78,'#b87370');   // rose sunset
      grd.addColorStop(0.84,'#dc9b6f');   // warm amber-rose
      grd.addColorStop(0.89,'#ecc184');   // gold
      grd.addColorStop(0.94,'#f4dba2');   // pale gold
      grd.addColorStop(0.975,'#f9edca');  // ivory-gold
      grd.addColorStop(1.00,'#fff8e9');   // luminous ivory — floor of the gods
      ctx.fillStyle=grd; ctx.fillRect(0,0,W,H);

      // Soft purple sunset bloom hanging above the horizon
      var sb=ctx.createRadialGradient(W*0.5,H*0.70,0,W*0.5,H*0.70,Math.max(W,H)*0.55);
      sb.addColorStop(0,'rgba(225,150,170,'+Math.max(0.26-darkness*0.10,0.12).toFixed(3)+')');
      sb.addColorStop(0.45,'rgba(150,90,150,0.10)');
      sb.addColorStop(1,'transparent');
      ctx.fillStyle=sb; ctx.fillRect(0,0,W,H);

      // Luminous horizon line where the divine floor meets the sky
      var hl=ctx.createLinearGradient(0,H*0.80,0,H*0.90);
      hl.addColorStop(0,'rgba(255,228,176,0)');
      hl.addColorStop(0.5,'rgba(255,240,200,'+Math.max(0.30-darkness*0.10,0.16).toFixed(3)+')');
      hl.addColorStop(1,'rgba(255,228,176,0)');
      ctx.fillStyle=hl; ctx.fillRect(0,H*0.78,W,H*0.14);

      // Marble-floor sheen rising from the very bottom of the frame
      var fl=ctx.createRadialGradient(W*0.5,H*1.06,0,W*0.5,H*1.06,W*0.7);
      fl.addColorStop(0,'rgba(255,250,228,'+Math.max(0.34-darkness*0.10,0.18).toFixed(3)+')');
      fl.addColorStop(0.5,'rgba(255,244,210,0.12)');
      fl.addColorStop(1,'transparent');
      ctx.fillStyle=fl; ctx.fillRect(0,H*0.85,W,H*0.15);

      // Night veil — deepens the space band after dark
      if(darkness>0){
        var nv=ctx.createLinearGradient(0,0,0,H*0.55);
        nv.addColorStop(0,'rgba(2,1,9,'+(darkness*0.85).toFixed(3)+')');
        nv.addColorStop(1,'rgba(2,1,9,0)');
        ctx.fillStyle=nv; ctx.fillRect(0,0,W,H*0.55);
      }

      // ── Stars (twinkling), fading out toward the lit horizon
      var fadeStart=0.45*H, fadeEnd=0.62*H;
      for(var i=0;i<stars.length;i++){
        var st=stars[i];
        var vis=1;
        if(st.y>fadeStart) vis=Math.max(0,1-(st.y-fadeStart)/(fadeEnd-fadeStart));
        if(vis<=0) continue;
        var tw=0.55+0.45*Math.sin(st.ph+ts*0.001*st.tw);
        var a=st.base*tw*vis*(1+darkness*0.4);
        if(a<=0.02) continue;
        a=Math.min(1,a);
        ctx.beginPath();
        ctx.arc(st.x,st.y,st.r,0,Math.PI*2);
        ctx.fillStyle='rgba('+st.tint+','+a.toFixed(3)+')';
        ctx.fill();
        if(st.r>1.3){   // brightest stars get a soft halo
          ctx.beginPath();
          ctx.arc(st.x,st.y,st.r*2.6,0,Math.PI*2);
          ctx.fillStyle='rgba('+st.tint+','+(a*0.12).toFixed(3)+')';
          ctx.fill();
        }
      }

      // ── Meteors falling through the upper sky
      if(ts-lastShot>SHOT_INTERVAL){
        shots.push(mkShot());
        if(Math.random() < 0.24) shots.push(mkShot());
        lastShot=ts;
      }
      for(var j=shots.length-1;j>=0;j--){
        var sh=shots[j];
        sh.x+=sh.dx; sh.y+=sh.dy; sh.life++;
        var t=sh.life/sh.maxLife;
        var alpha=(t<0.25?t/0.25:t>0.75?(1-t)/0.25:1)*0.72;
        var ang=Math.atan2(sh.dy,sh.dx);
        var tx=sh.x-Math.cos(ang)*sh.len;
        var ty=sh.y-Math.sin(ang)*sh.len;
        var sg=ctx.createLinearGradient(tx,ty,sh.x,sh.y);
        sg.addColorStop(0,'rgba(200,210,255,0)');
        sg.addColorStop(0.6,'rgba(214,222,255,'+(alpha*0.5).toFixed(3)+')');
        sg.addColorStop(1,'rgba(255,255,255,'+alpha.toFixed(3)+')');
        ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(sh.x,sh.y);
        ctx.strokeStyle=sg; ctx.lineWidth=sh.width; ctx.stroke();
        // head sparkle
        ctx.beginPath(); ctx.arc(sh.x,sh.y,sh.head,0,Math.PI*2);
        ctx.fillStyle='rgba(255,252,238,'+alpha.toFixed(3)+')'; ctx.fill();
        if(sh.life>=sh.maxLife || sh.y>H*0.66) shots.splice(j,1);
      }

      raf=requestAnimationFrame(drawFrame);
    }

    window.addEventListener('resize',resize);
    resolvePantheonTime();
    setInterval(resolvePantheonTime, 6 * 60 * 1000);
    resize();
    raf=requestAnimationFrame(drawFrame);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',_ensurePantheonBg);
  } else {
    _ensurePantheonBg();
  }
})();

/* ══ PWA INSTALL PROMPT ════════════════════════════════════
   Shows "INSTALL APP" in the menu when the browser fires
   beforeinstallprompt. Hidden automatically when already
   running as a standalone / TWA app.
════════════════════════════════════════════════════════════ */
(function() {
  // Already installed — nothing to show
  if (window.matchMedia('(display-mode: standalone)').matches ||
      window.matchMedia('(display-mode: fullscreen)').matches ||
      window.navigator.standalone === true) return;

  let _prompt = null;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    _prompt = e;
    const btn = document.getElementById('pwaInstallBtn');
    if (btn) btn.style.display = '';
  });

  window.addEventListener('appinstalled', () => {
    _prompt = null;
    const btn = document.getElementById('pwaInstallBtn');
    if (btn) btn.style.display = 'none';
  });

  window.triggerPwaInstall = function() {
    if (!_prompt) return;
    _prompt.prompt();
    _prompt.userChoice.then(() => {
      _prompt = null;
      const btn = document.getElementById('pwaInstallBtn');
      if (btn) btn.style.display = 'none';
    });
  };
})();





/* ===== ANIMATIONS ===== */
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
   Animation-only CSS is self-injected by this module at load (see the
   _css block below). These rules live here and NOT in index.html — keep
   them out of index.html's <style> to avoid duplicate definitions:
     .glass-shard / .glass-crack-svg
     @keyframes hofTreePulse
     @keyframes pantheonCompletionSigilPulse / TitleReveal / Conquered / RayRotate
     @media(prefers-reduced-motion) overrides
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
      /* filter: drop-shadow is GPU-composited; text-shadow was causing full repaint every frame */
      0%,100% { filter: drop-shadow(0 0 18px rgba(244,114,247,0.55)) drop-shadow(0 0 40px rgba(96,165,250,0.28)) drop-shadow(0 0 72px rgba(167,139,250,0.18)); }
      50%     { filter: drop-shadow(0 0 32px rgba(244,114,247,0.88)) drop-shadow(0 0 64px rgba(96,165,250,0.5)) drop-shadow(0 0 108px rgba(167,139,250,0.36)) drop-shadow(0 0 160px rgba(244,114,247,0.2)); }
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
      const nameEl = button.querySelector('.prog-item-name, .sq-item-name');
      const dotEl = button.querySelector('.prog-status-dot, .sq-item-dot');
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

    // HoF: extra glow on the crack is already handled by the SVG filter (stdDeviation 3)
    // The old setInterval stroke-width flicker caused visible jank — removed.
    let hofPulseTimer = null;

    // ── PHASE 2 : shatter ────────────────────────────────────
    // HoF: 920→700ms phase1, 1700→1200ms shard dur — feels snappy instead of sluggish
    const PHASE1     = (isPantheon ? 1240 : (isHoF ? 700 : 660)) * slowFactor;
    const SHARD_DUR  = (isPantheon ? 2400 : (isHoF ? 1200 : 1150)) * slowFactor;
    // Explosive easing for HoF/Pantheon: fast launch → gradual deceleration
    const shardEase  = (isHoF || isPantheon)
      ? 'cubic-bezier(0.05,0.1,0.35,1)'
      : 'cubic-bezier(0.22,0.44,0.44,0.96)';

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
          'will-change:transform,opacity',
          `transition:transform ${SHARD_DUR}ms ${shardEase} ${shardDelay}ms,`
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

    // Position clone at final size/coords; use transform to start it at the button.
    // Animating transform is GPU-composited — no layout recalc per frame unlike left/top/width/height.
    const scaleX0 = btnRect.width  / CLONE_W_FINAL;
    const scaleY0 = btnRect.height / CLONE_H_FINAL;
    const btnCX   = btnRect.left + btnRect.width  / 2;
    const btnCY   = btnRect.top  + btnRect.height / 2;
    const cloneCX = CLONE_TX + CLONE_W_FINAL / 2;
    const cloneCY = CLONE_TY + CLONE_H_FINAL / 2;
    const initTX  = btnCX - cloneCX;
    const initTY  = btnCY - cloneCY;

    const clone = document.createElement('div');
    clone.style.cssText = [
      'position:fixed',
      `left:${CLONE_TX}px`, `top:${CLONE_TY}px`,
      `width:${CLONE_W_FINAL}px`, `height:${CLONE_H_FINAL}px`,
      'z-index:99985', 'border-radius:6px',
      'border:1px solid #c87d00', 'border-left-width:3px',
      'background:linear-gradient(135deg,#140e00,#1e1500,#2a1e00)',
      'display:flex', 'align-items:center', 'justify-content:space-between',
      'padding:0 12px', 'gap:8px', 'overflow:hidden', 'pointer-events:none',
      `transform:translate(${initTX}px,${initTY}px) scale(${scaleX0},${scaleY0})`,
      'transform-origin:center center',
      'will-change:transform,box-shadow',
      'transition:transform 0.62s cubic-bezier(0.16,0.84,0.28,1), box-shadow 0.62s ease',
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

    // Fly card to center — GPU-composited transform only
    clone.getBoundingClientRect(); // force layout commit so transition sees the starting transform
    clone.style.transform = 'translate(0,0) scale(1,1)';
    clone.style.boxShadow = '0 0 48px rgba(200,125,0,0.38), 0 0 100px rgba(200,125,0,0.18)';

    // ── PHASE 1 (700ms): Energy vortex canvas ───────────────
    setTimeout(() => {
      const canvas = document.createElement('canvas');
      // Render vortex particles at 1× regardless of DPR — halves/quarters fill cost on retina
      canvas.width  = vw;
      canvas.height = vh;
      canvas.style.cssText = [
        'position:fixed', 'inset:0', 'z-index:99983',
        `width:${vw}px`, `height:${vh}px`, 'pointer-events:none',
      ].join(';');
      document.body.appendChild(canvas);
      const ctx2d = canvas.getContext('2d');
      // No DPR scaling needed — canvas is at 1× intentionally

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

      clone.style.transition = 'box-shadow 0.4s ease'; // transform flight done; switch to glow only
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
        // Old stroke-width setInterval flicker removed — was causing layout jank mid-animation

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
              'will-change:transform,opacity',
              `transition:transform ${SHARD_DUR2}ms cubic-bezier(0.05,0.1,0.35,1) ${shardDelay2}ms,` +
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

    // Position clone at final size/coords; use transform to start it at the button.
    // Animating transform is GPU-composited — no layout recalc per frame unlike left/top/width/height.
    const scaleX0hof = btnRect.width  / CLONE_W_FINAL;
    const scaleY0hof = btnRect.height / CLONE_H_FINAL;
    const btnCXhof   = btnRect.left + btnRect.width  / 2;
    const btnCYhof   = btnRect.top  + btnRect.height / 2;
    const cloneCXhof = CLONE_TX + CLONE_W_FINAL / 2;
    const cloneCYhof = CLONE_TY + CLONE_H_FINAL / 2;
    const initTXhof  = btnCXhof - cloneCXhof;
    const initTYhof  = btnCYhof - cloneCYhof;

    const clone = document.createElement('div');
    clone.style.cssText = [
      'position:fixed',
      `left:${CLONE_TX}px`, `top:${CLONE_TY}px`,
      `width:${CLONE_W_FINAL}px`, `height:${CLONE_H_FINAL}px`,
      'z-index:99985', 'border-radius:6px',
      'border:1px solid #c87d00', 'border-left-width:3px',
      'background:linear-gradient(135deg,#140e00,#1e1500,#2a1e00)',
      'display:flex', 'align-items:center', 'justify-content:space-between',
      'padding:0 12px', 'gap:8px', 'overflow:hidden', 'pointer-events:none',
      `transform:translate(${initTXhof}px,${initTYhof}px) scale(${scaleX0hof},${scaleY0hof})`,
      'transform-origin:center center',
      'will-change:transform,box-shadow',
      'transition:transform 0.62s cubic-bezier(0.16,0.84,0.28,1), box-shadow 0.62s ease',
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

    // Force layout commit so transition sees the starting transform, then fly to centre
    clone.getBoundingClientRect();
    clone.style.transform = 'translate(0,0) scale(1,1)';
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
      'will-change:transform,opacity',
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
      'will-change:opacity',
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
      'pointer-events:none', 'z-index:99983', 'opacity:0',
      'will-change:transform,opacity,filter',
      'transition:transform 1.4s cubic-bezier(.12,.86,.24,1), opacity 0.55s ease',
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
      'will-change:transform,opacity',
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
      'will-change:transform,opacity',
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
      // text-shadow removed — pantheonCompletionSigilPulse now uses filter:drop-shadow (GPU-composited)
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

/* ══ BEBER — FALLING HEARTS AMBIENT FX  💗 ══════════════════
   Secret love-letter theme. While data-theme="beber" is active,
   little hearts & petals drift gently down the screen, swaying as
   they fall and fading near the bottom. Modeled on the sidequests
   pollen drift, but falling instead of rising, with the odd rising
   sparkle for extra magic. Starts/stops with the theme.
══════════════════════════════════════════════════════════ */
(function(){
  var overlayId = 'beber-hearts-overlay';
  var wordsId   = 'beber-words-overlay';
  var overlay = null, wordsOverlay = null, running = false;
  var timer = null, sparkTimer = null, wordTimer = null, startTimer = null;

  var HEARTS  = ['💗','💕','💖','💞','🌸','🌷','💝'];

  /* Sweet nothings that whisper across the sky, fade in then out.
     Edit this list to add her name or your own private little lines. */
  var SWEET_WORDS = [
    'I love you',
    'My everything',
    'Forever & always',
    'My sunshine ☀',
    'You make me smile',
    'My heart is yours',
    'Te amo',
    'Always you',
    'My favourite person',
    'Beber 💗',
    'You & me',
    'Happy forever',
    'My whole world',
    'Endlessly yours'
  ];

  function ensureOverlay(){
    overlay = document.getElementById(overlayId);
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = overlayId;
      overlay.setAttribute('aria-hidden','true');
      overlay.style.cssText = 'position:fixed; inset:0; overflow:hidden; pointer-events:none; z-index:3;';
      document.body.appendChild(overlay);
    }
    return overlay;
  }
  /* The sweet words live in their own layer BEHIND the content (z-index:1),
     so they read as part of the sky and glow softly through the see-through
     cards rather than floating over the whole UI. */
  function ensureWordsOverlay(){
    wordsOverlay = document.getElementById(wordsId);
    if(!wordsOverlay){
      wordsOverlay = document.createElement('div');
      wordsOverlay.id = wordsId;
      wordsOverlay.setAttribute('aria-hidden','true');
      wordsOverlay.style.cssText = 'position:fixed; inset:0; overflow:hidden; pointer-events:none; z-index:1;';
      document.body.appendChild(wordsOverlay);
    }
    return wordsOverlay;
  }
  function rand(min,max){ return min + Math.random()*(max-min); }
  function clearOverlay(){
    if(overlay){ overlay.innerHTML=''; }
    if(wordsOverlay){ wordsOverlay.innerHTML=''; }
  }

  /* A drifting batch of hearts falling from just above the top edge. */
  function spawnBatch(){
    if(document.documentElement.dataset.theme !== 'beber') return;
    ensureOverlay();

    var count = 3 + Math.floor(Math.random()*4);   // 3–6 at a time
    for(var i=0;i<count;i++){
      var heart = document.createElement('span');
      heart.className = 'beber-heart';
      heart.textContent = HEARTS[Math.floor(Math.random()*HEARTS.length)];

      var size    = rand(13, 30);
      var startX  = rand(window.innerWidth*0.02, window.innerWidth*0.98);
      var startY  = rand(-60, -20);
      var fall     = window.innerHeight + rand(60, 140);
      var sway     = rand(26, 80) * (Math.random() < 0.5 ? -1 : 1);
      var spin     = rand(-28, 28);
      var peakOp   = rand(0.55, 0.92);
      var duration = rand(7000, 13000);            // slow, dreamy descent

      heart.style.cssText = 'position:absolute; left:0; top:0; '+
        'font-size:'+size+'px; line-height:1; '+
        'filter:drop-shadow(0 2px 4px rgba(220,70,130,0.35)); '+
        'transform:translate('+startX+'px,'+startY+'px);';
      overlay.appendChild(heart);

      heart.animate([
        { transform:'translate('+startX+'px,'+startY+'px) rotate(0deg)', opacity:0 },
        { transform:'translate('+(startX+sway*0.4)+'px,'+(startY+fall*0.25)+'px) rotate('+(spin*0.4)+'deg)', opacity:peakOp, offset:0.18 },
        { transform:'translate('+(startX-sway*0.5)+'px,'+(startY+fall*0.62)+'px) rotate('+(spin*0.8)+'deg)', opacity:peakOp, offset:0.7 },
        { transform:'translate('+(startX+sway*0.3)+'px,'+(startY+fall)+'px) rotate('+spin+'deg)', opacity:0, offset:1 }
      ], { duration:duration, easing:'ease-in-out', fill:'forwards' });

      setTimeout(function(el){ if(el && el.parentNode) el.parentNode.removeChild(el); }, duration+200, heart);
    }
    scheduleNext();
  }

  function scheduleNext(){
    if(!running || document.documentElement.dataset.theme !== 'beber') return;
    clearTimeout(timer);
    timer = setTimeout(function(){
      if(document.documentElement.dataset.theme === 'beber') spawnBatch();
    }, rand(900, 1900));
  }

  /* Occasional tiny sparkle that rises and twinkles out near the sun. */
  function spawnSparkle(){
    if(!running || document.documentElement.dataset.theme !== 'beber'){ scheduleSpark(); return; }
    ensureOverlay();
    var spark = document.createElement('span');
    spark.className = 'beber-heart';
    spark.textContent = '✨';
    var sx = rand(window.innerWidth*0.18, window.innerWidth*0.82);
    var sy = rand(window.innerHeight*0.30, window.innerHeight*0.66);
    var sz = rand(12, 22);
    spark.style.cssText = 'position:absolute; left:0; top:0; font-size:'+sz+'px; line-height:1; '+
      'mix-blend-mode:screen; transform:translate('+sx+'px,'+sy+'px) scale(0.4);';
    overlay.appendChild(spark);
    var dur = rand(2200, 3400);
    spark.animate([
      { transform:'translate('+sx+'px,'+sy+'px) scale(0.4)', opacity:0 },
      { transform:'translate('+sx+'px,'+(sy-22)+'px) scale(1)', opacity:0.9, offset:0.45 },
      { transform:'translate('+sx+'px,'+(sy-48)+'px) scale(0.6)', opacity:0, offset:1 }
    ], { duration:dur, easing:'ease-out', fill:'forwards' });
    setTimeout(function(el){ if(el && el.parentNode) el.parentNode.removeChild(el); }, dur+200, spark);
    scheduleSpark();
  }
  function scheduleSpark(){
    if(!running || document.documentElement.dataset.theme !== 'beber') return;
    clearTimeout(sparkTimer);
    sparkTimer = setTimeout(spawnSparkle, rand(2600, 5200));
  }

  /* A sweet handwritten line that drifts into the sky, glows softly,
     then fades away. One every ~5s, each visible for ~3s. */
  var _lastWord = -1;
  function spawnWord(){
    if(!running || document.documentElement.dataset.theme !== 'beber'){ scheduleWord(); return; }
    ensureWordsOverlay();

    // Pick a phrase that isn't the one we just showed.
    var idx = Math.floor(Math.random()*SWEET_WORDS.length);
    if(SWEET_WORDS.length > 1 && idx === _lastWord) idx = (idx+1) % SWEET_WORDS.length;
    _lastWord = idx;

    var word = document.createElement('div');
    word.className = 'beber-heart beber-word';
    word.textContent = SWEET_WORDS[idx];

    var tilt = rand(-6, 6);
    // Drift in at a random spot across the whole scene, kept off the edges
    // so long phrases don't clip.
    var leftPct = rand(24, 76);
    var topPct  = rand(14, 80);
    word.style.cssText = 'position:absolute; left:'+leftPct+'%; top:'+topPct+'%; '+
      'transform:translate(-50%,-50%) scale(0.94) rotate('+tilt+'deg); '+
      'font-family:"Segoe Script","Snell Roundhand","Brush Script MT",cursive; '+
      'font-size:clamp(24px, 5vw, 50px); font-weight:400; white-space:nowrap; '+
      'color:rgba(255,236,246,0.82); letter-spacing:0.5px; text-align:center; '+
      'text-shadow:0 2px 10px rgba(255,90,150,0.38), 0 0 22px rgba(255,120,175,0.24); '+
      'opacity:0;';
    wordsOverlay.appendChild(word);

    var peak = 0.5;   // dim, dreamy — sits softly in the background
    var dur = 3000;   // fade in → hold → fade out, all within 3s
    word.animate([
      { opacity:0,    transform:'translate(-50%,-50%) scale(0.94) rotate('+tilt+'deg)' },
      { opacity:peak, transform:'translate(-50%,-50%) scale(1.0) rotate('+tilt+'deg)', offset:0.28 },
      { opacity:peak, transform:'translate(-50%,-50%) scale(1.02) rotate('+tilt+'deg)', offset:0.62 },
      { opacity:0,    transform:'translate(-50%,-50%) scale(1.07) rotate('+tilt+'deg)', offset:1 }
    ], { duration:dur, easing:'ease-in-out', fill:'forwards' });

    setTimeout(function(el){ if(el && el.parentNode) el.parentNode.removeChild(el); }, dur+200, word);
    scheduleWord();
  }
  function scheduleWord(){
    if(!running || document.documentElement.dataset.theme !== 'beber') return;
    clearTimeout(wordTimer);
    wordTimer = setTimeout(spawnWord, 5000);   // a new whisper every 5s
  }

  function start(){
    if(running) return;
    if(document.documentElement.dataset.theme !== 'beber') return;
    // Hold off until the loading screen is gone (mirrors sidequests).
    if(document.getElementById('grnd-loader')){
      clearTimeout(startTimer);
      startTimer = setTimeout(start, 350);
      return;
    }
    running = true;
    ensureOverlay();
    clearOverlay();
    spawnBatch();
    sparkTimer = setTimeout(spawnSparkle, rand(1800, 3200));
    wordTimer  = setTimeout(spawnWord, 2200);   // first sweet word soon after activation
  }
  function stop(){
    running = false;
    clearTimeout(timer);
    clearTimeout(sparkTimer);
    clearTimeout(wordTimer);
    clearTimeout(startTimer);
    clearOverlay();
  }
  function sync(){
    if(document.documentElement.dataset.theme === 'beber') start();
    else stop();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', sync);
  } else {
    sync();
  }
  var observer = new MutationObserver(function(){ sync(); });
  observer.observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
})();

