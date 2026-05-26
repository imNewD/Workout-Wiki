// GRND Anatomy Viewer — SPA module
// Auto-injected into index.html via <script src="anatomy.js"></script>
(function () {
  'use strict';

  /* ── Inject CSS ─────────────────────────────────────────── */
  (function () {
    const s = document.createElement('style');
    s.id = 'grnd-anatomy-css';
    s.textContent = `:root {
  --muscle-default:rgba(185,42,55,0.26);
  --muscle-stroke:rgba(220,60,72,0.54);
  --muscle-hover:rgba(205,52,65,0.58);
  --muscle-stroke-h:rgba(235,70,82,0.98);
  --muscle-active:rgba(205,52,65,0.76);
  --body-fill:rgba(26,26,26,0.88); --body-stroke:#303030;
  --grid-dot:rgba(255,255,255,0.05);
  --bone-stroke:rgba(210,195,165,0.30); --bone-fill:rgba(210,195,165,0.05);
  --bone-stroke-major:rgba(210,195,165,0.40); --bone-rib:rgba(210,195,165,0.22);
}
[data-theme="light"] {
  --body-fill:rgba(204,200,190,0.88); --body-stroke:#aaa69c;
  --bone-stroke:rgba(100,80,50,0.28); --bone-fill:rgba(100,80,50,0.06);
  --bone-stroke-major:rgba(100,80,50,0.38); --bone-rib:rgba(100,80,50,0.18);
  --muscle-default:rgba(185,42,55,0.22); --muscle-stroke:rgba(200,52,65,0.48);
  --muscle-hover:rgba(195,50,62,0.52); --muscle-stroke-h:rgba(220,65,78,0.92);
  --muscle-active:rgba(195,50,62,0.68); --grid-dot:rgba(0,0,0,0.06);
}
[data-theme="handstand"]{--muscle-default:rgba(47,98,165,0.14);--muscle-stroke:rgba(47,98,165,0.40);--muscle-hover:rgba(47,98,165,0.36);--muscle-stroke-h:rgba(47,98,165,0.90);--muscle-active:rgba(47,98,165,0.55);}
[data-theme="isometric"]{--muscle-default:rgba(61,85,115,0.12);--muscle-stroke:rgba(61,85,115,0.36);--muscle-hover:rgba(61,85,115,0.34);--muscle-stroke-h:rgba(61,85,115,0.90);--muscle-active:rgba(61,85,115,0.52);}
[data-theme="warmup"]{--muscle-default:rgba(168,81,47,0.12);--muscle-stroke:rgba(168,81,47,0.40);--muscle-hover:rgba(168,81,47,0.30);--muscle-stroke-h:rgba(168,81,47,0.90);--muscle-active:rgba(168,81,47,0.50);}

/* ── Anatomy view: full-screen overlay within SPA ── */
#view-anatomy {
  position: fixed !important;
  top: var(--header-h); left: 0; right: 0; bottom: 56px;
  display: none; flex-direction: row;
  overflow: hidden; background: var(--bg);
  z-index: 99; max-width: none !important;
  margin: 0 !important; padding: 0 !important;
  animation: none !important;
}
#view-anatomy.active { display: flex; }
@media(max-width:767px){#view-anatomy{flex-direction:column}}
@media(min-width:700px){#view-anatomy{bottom:0}}

/* ── VIEWER PANEL ── */
.viewer-panel{width:420px;flex-shrink:0;display:flex;flex-direction:column;border-right:1px solid var(--border);background:var(--bg);position:relative;overflow:hidden}
@media(max-width:767px){.viewer-panel{width:100%;height:62vh}}

/* Dot grid background */
.viewer-panel::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,var(--grid-dot) 1px,transparent 1px);background-size:18px 18px;pointer-events:none;z-index:0}

/* Controls */
.view-controls{padding:10px 12px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:8px;flex-shrink:0;position:relative;z-index:2;background:var(--bg)}
.view-toggle{display:flex;background:var(--bg3);border-radius:7px;border:1px solid var(--border2);overflow:hidden}
.vtbtn{font-family:var(--mono);font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;padding:7px 16px;color:var(--text3);transition:all var(--trans);background:transparent}
.vtbtn.active{background:var(--accent);color:#fff}
.layers{display:flex;gap:5px;flex-wrap:wrap}
.layer-chip{font-family:var(--mono);font-size:0.5rem;letter-spacing:0.08em;text-transform:uppercase;padding:4px 9px;border-radius:5px;border:1px solid var(--border2);color:var(--text3);transition:all var(--trans)}
.layer-chip.on{border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.08)}
.layer-chip.locked{opacity:0.35;cursor:not-allowed;pointer-events:none}
.layer-chip.locked::after{content:" ◌";font-size:0.44rem}

/* SVG area */
.svg-wrap{flex:1;display:flex;align-items:center;justify-content:center;padding:0;position:relative;z-index:1;overflow:hidden}
#bodySvg{width:100%;height:100%;max-width:100%;max-height:100%;display:block}

/* Scan-lines overlay */
.scanlines{position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(to bottom,transparent,transparent 3px,rgba(0,0,0,0.022) 3px,rgba(0,0,0,0.022) 4px);z-index:3}

/* Zoom-out button */
.zoom-out-btn{position:absolute;bottom:14px;right:12px;z-index:10;font-family:var(--mono);font-size:0.56rem;letter-spacing:0.08em;text-transform:uppercase;padding:6px 12px;border:1px solid var(--accent);color:var(--accent);border-radius:6px;background:rgba(230,57,70,0.08);transition:all var(--trans);opacity:0;pointer-events:none}
.zoom-out-btn.show{opacity:1;pointer-events:all}
.zoom-out-btn:hover{background:rgba(230,57,70,0.20)}

/* ── SVG ELEMENT STYLES ── */
.body-base{fill:var(--body-fill);stroke:var(--body-stroke);stroke-width:0.7;transition:fill var(--trans)}
.muscle-path{
  fill:var(--muscle-default);
  stroke:var(--muscle-stroke);
  stroke-width:0.95;
  cursor:pointer;
  transition:fill .18s,stroke .18s,filter .18s,opacity .25s;
  filter:drop-shadow(0 1px 4px rgba(0,0,0,0.65));
}
.muscle-path:hover,.muscle-path.hovered{fill:var(--muscle-hover);stroke:var(--muscle-stroke-h);filter:drop-shadow(0 2px 8px rgba(220,55,70,0.45)) drop-shadow(0 1px 4px rgba(0,0,0,0.60))}
.muscle-path.selected{fill:var(--muscle-active);stroke:rgba(235,65,80,0.98);stroke-width:1.15;animation:musclePulse 2.4s ease-in-out infinite}
.muscle-path.parent-dimmed{opacity:0.10!important;pointer-events:none!important;filter:none!important;animation:none!important}

.muscle-overlay{pointer-events:none;transition:opacity .25s}
.muscle-overlay.parent-dimmed{opacity:0!important}

.muscle-label{fill:var(--text3);font-family:var(--mono);font-size:5.5px;letter-spacing:0.03em;pointer-events:none;transition:fill .18s,opacity .25s;dominant-baseline:middle;text-anchor:middle}
.label-active{fill:var(--accent) !important}
.muscle-label.dimmed-lbl{opacity:0!important}

@keyframes musclePulse{
  0%,100%{filter:drop-shadow(0 0 6px rgba(230,57,70,.6)) drop-shadow(0 1px 4px rgba(0,0,0,0.5))}
  50%{filter:drop-shadow(0 0 14px rgba(230,57,70,.95)) drop-shadow(0 0 6px rgba(255,160,170,.35)) drop-shadow(0 1px 4px rgba(0,0,0,0.5))}
}

/* ── SUB-MUSCLE STYLES ── */
.sub-muscle{
  cursor:pointer;
  transition:filter .2s, opacity .12s;
  filter:drop-shadow(0 1px 4px rgba(0,0,0,0.6));
}
.sub-muscle:hover{filter:drop-shadow(0 0 8px var(--sc,#e63946)) drop-shadow(0 1px 4px rgba(0,0,0,0.6));opacity:0.95!important}
.sub-muscle-label{
  font-family:var(--mono);
  font-size:4.2px;
  letter-spacing:0.04em;
  pointer-events:none;
  dominant-baseline:middle;
  text-anchor:middle;
  text-transform:uppercase;
  fill:rgba(255,255,255,0.82);
  transition:opacity .3s ease;
}
.sub-muscle-dot{
  pointer-events:none;
  transition:opacity .3s ease;
}
.sub-muscle.sub-selected{
  animation:subPulse 2s ease-in-out infinite;
  opacity:1!important;
}
@keyframes subPulse{
  0%,100%{filter:drop-shadow(0 0 8px var(--sc,#e63946)) drop-shadow(0 1px 4px rgba(0,0,0,0.6))}
  50%{filter:drop-shadow(0 0 16px var(--sc,#e63946)) drop-shadow(0 0 6px var(--sc,#e63946)) drop-shadow(0 1px 4px rgba(0,0,0,0.6))}
}

/* ── STICKY MUSCLE HEADER ── */
.sticky-muscle-hdr{
  display:none;
  position:sticky;
  top:0;
  z-index:20;
  background:var(--bg);
  border-bottom:1px solid var(--border2);
  padding:8px 16px;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  flex-shrink:0;
  backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
  box-shadow:0 2px 12px rgba(0,0,0,0.25);
}
.sticky-muscle-hdr.show{display:flex}
.sticky-muscle-names{display:flex;flex-direction:column;gap:1px;overflow:hidden}
.sticky-muscle-name{font-family:var(--mono);font-size:0.64rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sticky-sub-name{font-family:var(--mono);font-size:0.48rem;letter-spacing:0.07em;text-transform:uppercase;color:var(--text3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:opacity .2s}
.sticky-sub-name:empty{display:none}
.sticky-muscle-close{font-family:var(--mono);font-size:0.48rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);padding:5px 9px;border:1px solid var(--border);border-radius:5px;background:transparent;flex-shrink:0;transition:all var(--trans);cursor:pointer}
.sticky-muscle-close:hover{color:var(--accent);border-color:rgba(230,57,70,0.5)}

/* Sub-muscle info banner */
.sub-info-banner{
  border-bottom:1px solid var(--border2);
  padding:24px 26px;
  min-height:320px !important;
  height:320px !important;
  flex:0 0 320px !important;
  max-height:none !important;
  background:var(--bg3);
  display:none;
  animation:slideUp .22s ease;
}
.sub-info-banner.visible{display:block !important}
.sub-info-legend{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-bottom:12px;
}
.sub-legend-chip{
  display:flex;
  align-items:center;
  gap:6px;
  font-family:var(--mono);
  font-size:0.52rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:var(--text3);
  padding:5px 9px 5px 6px;
  border-radius:5px;
  border:1px solid var(--border2);
}
.sub-legend-dot{
  width:10px;height:10px;border-radius:50%;flex-shrink:0;
}
.sub-hover-name{
  font-family:var(--mono);
  font-size:0.72rem;
  letter-spacing:0.07em;
  font-weight:500;
  margin-bottom:4px;
}
.sub-hover-desc{
  font-family:var(--sans);
  font-size:0.82rem;
  color:var(--text2);
  line-height:1.65;
  -webkit-user-select:text;
  user-select:text;
}
.sub-hover-area{min-height:52px}

/* ── INFO PANEL ── */  font-family:var(--mono);
  font-size:0.64rem;
  letter-spacing:0.06em;
  font-weight:500;
  margin-bottom:2px;
}
.sub-hover-desc{
  font-family:var(--sans);
  font-size:0.72rem;
  color:var(--text2);
  line-height:1.55;
  -webkit-user-select:text;
  user-select:text;
}
.sub-hover-area{min-height:36px}

/* ── INFO PANEL ── */
.info-panel{flex:1;overflow-y:auto;overflow-x:hidden;background:var(--bg2);display:flex;flex-direction:column;position:relative;min-width:0;min-height:360px}
@media(max-width:767px){.info-panel{border-top:1px solid var(--border);min-height:340px}}

.info-idle{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:40px 24px;text-align:center;color:var(--text3);font-family:var(--mono);font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;line-height:2}
.info-idle-icon{font-size:2.4rem;margin-bottom:16px;opacity:0.3;color:var(--accent)}
.info-idle-sub{font-size:0.56rem;opacity:0.45;margin-top:4px}
.info-idle-keys{margin-top:16px;font-size:0.5rem;opacity:0.35;line-height:2.2}
.info-idle-keys kbd{font-family:var(--mono);background:var(--bg3);border:1px solid var(--border2);border-radius:3px;padding:1px 5px;font-size:0.5rem}

.info-content{display:none;padding:20px 18px 48px;animation:slideUp .25s ease}
.info-content.show{display:block}
@keyframes slideUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

.info-close{position:sticky;top:0;float:right;font-family:var(--mono);font-size:0.54rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text3);padding:5px 9px;border:1px solid var(--border);border-radius:5px;transition:all var(--trans);background:var(--bg2);z-index:10}
.info-close:hover{color:var(--accent);border-color:rgba(230,57,70,0.5)}

.info-badge-row{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:8px;clear:both}
.badge-region{font-family:var(--mono);font-size:0.52rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);padding:3px 8px;border:1px solid rgba(230,57,70,0.4);border-radius:4px;background:rgba(230,57,70,0.07)}
.badge-type{font-family:var(--mono);font-size:0.52rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);padding:3px 8px;border:1px solid var(--border2);border-radius:4px}
.info-name{font-family:var(--display);font-size:clamp(2rem,5vw,2.8rem);letter-spacing:0.06em;line-height:1;color:var(--text);margin-bottom:3px}
.info-sci{font-family:var(--mono);font-size:0.58rem;color:var(--text3);letter-spacing:0.05em;margin-bottom:18px;line-height:1.5}

.section-lbl{font-family:var(--mono);font-size:0.55rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text3);margin-bottom:7px;margin-top:16px}
.info-text{font-family:var(--sans);font-size:0.81rem;color:var(--text2);line-height:1.78;-webkit-user-select:text;user-select:text}

.origin-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
.origin-card{background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:11px 12px}
.origin-card strong{display:block;font-family:var(--mono);font-size:0.52rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--text3);margin-bottom:5px}
.origin-card span{font-family:var(--sans);font-size:0.73rem;color:var(--text2);line-height:1.6;-webkit-user-select:text;user-select:text}

.divider{height:1px;background:var(--border);margin:16px 0}

.tags-wrap{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.tag{font-family:var(--mono);font-size:0.52rem;letter-spacing:0.07em;padding:4px 9px;border-radius:5px;background:var(--bg3);border:1px solid var(--border2);color:var(--text3)}

/* Future layers */
.future-section{margin-top:18px;padding:12px;border:1px dashed var(--border2);border-radius:8px}
.future-lbl{font-family:var(--mono);font-size:0.5rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--text3);margin-bottom:8px;opacity:0.7}
.future-chips{display:flex;flex-wrap:wrap;gap:5px}
.future-chip{font-family:var(--mono);font-size:0.5rem;letter-spacing:0.08em;text-transform:uppercase;padding:3px 8px;border-radius:4px;border:1px dashed var(--border);color:var(--text3);opacity:0.45}

/* Wiki link */
.wiki-link{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:0.58rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);border:1px solid var(--border);border-radius:6px;padding:9px 14px;transition:all var(--trans);margin-top:18px;width:100%;justify-content:center}
.wiki-link:hover{color:var(--green);border-color:rgba(42,157,92,0.5);background:rgba(42,157,92,0.05)}
.info-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}
.info-action-btn{flex:1 1 48%;display:inline-flex;justify-content:center;align-items:center;padding:10px 12px;font-family:var(--mono);font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text);border:1px solid var(--border2);border-radius:8px;background:var(--bg3);transition:all var(--trans)}
.info-action-btn:hover{border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.08)}

/* ── TOOLTIP ── */
#tooltip{position:fixed;pointer-events:none;z-index:500;background:var(--bg2);border:1px solid var(--border2);border-radius:6px;padding:6px 11px;font-family:var(--mono);font-size:0.56rem;letter-spacing:0.06em;color:var(--text);white-space:nowrap;box-shadow:0 4px 18px rgba(0,0,0,.5);opacity:0;transition:opacity .12s ease;transform:translateY(-50%)}
#tooltip.show{opacity:1}
#tooltip strong{color:var(--accent)}

/* ── SKELETON BONES ── */
.bone-outline{fill:var(--bone-fill);stroke:var(--bone-stroke-major);stroke-width:0.55;stroke-linecap:round;stroke-linejoin:round;pointer-events:none;transition:opacity var(--trans)}
.bone-line{fill:none;stroke:var(--bone-stroke-major);stroke-width:0.6;stroke-linecap:round;pointer-events:none;transition:opacity var(--trans)}
.bone-rib{fill:none;stroke:var(--bone-rib);stroke-width:0.5;stroke-linecap:round;pointer-events:none;transition:opacity var(--trans)}
.bone-spine{fill:var(--bone-fill);stroke:var(--bone-stroke);stroke-width:0.5;stroke-linecap:round;pointer-events:none;transition:opacity var(--trans)}
.bone-scapula{fill:var(--bone-fill);stroke:var(--bone-stroke);stroke-width:0.55;stroke-linecap:round;pointer-events:none;transition:opacity var(--trans)}

/* ── RESET BUTTON ── */
.reset-btn{font-family:var(--mono);font-size:0.5rem;letter-spacing:0.1em;text-transform:uppercase;padding:5px 10px;border:1px solid var(--border2);border-radius:5px;color:var(--text3);background:var(--bg3);transition:all var(--trans);flex-shrink:0}
.reset-btn:hover{border-color:rgba(230,57,70,0.5);color:var(--accent);background:rgba(230,57,70,0.07)}

/* ── SIDE PICKER ── */
#sidePicker{display:none;align-items:center;gap:3px;padding:0 4px;border-left:1px solid var(--border2);margin-left:4px}
.side-btn{font-family:var(--mono);font-size:0.48rem;letter-spacing:0.09em;text-transform:uppercase;padding:4px 8px;border-radius:5px;border:1px solid var(--border2);color:var(--text3);background:transparent;transition:all var(--trans);cursor:pointer}
.side-btn.active{border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.09);box-shadow:0 0 6px rgba(230,57,70,0.15)}
.side-btn:not(.active):hover{border-color:var(--border2);color:var(--text);background:var(--bg3)}

/* ── RESPONSIVE ── */
@media(max-width:540px){.header-title{display:none}.layers{display:none}}
`;
    document.head.appendChild(s);
  })();

  /* ── Inject HTML ────────────────────────────────────────── */
  // Runs after DOM is ready so we can append to <main>
  function _injectHTML() {
    // Anatomy view (a .view div that goTo('anatomy') activates)
    if (!document.getElementById('view-anatomy')) {
      const _main = document.querySelector('main');
      if (_main) {
        const _v = document.createElement('div');
        _v.className = 'view';
        _v.id = 'view-anatomy';
        _v.innerHTML = `<!-- ── VIEWER PANEL ── -->
  <div class="viewer-panel">

    <div class="view-controls">
      <div class="view-toggle">
        <button class="vtbtn active" id="btnFront" onclick="setView('front')">◉ FRONT</button>
        <button class="vtbtn" id="btnBack" onclick="setView('back')">◉ BACK</button>
      </div>
      <div class="layers">
        <button class="layer-chip on" id="layerMuscles" onclick="toggleLayer('muscles')">MUSCLES</button>
        <button class="layer-chip" id="layerBones" onclick="toggleLayer('bones')">BONES</button>
        <button class="layer-chip locked" title="V2">TENDONS</button>
        <button class="layer-chip locked" title="V2">NERVES</button>
      </div>
      <div id="sidePicker">
        <button class="side-btn active" id="sideAll" onclick="setSide('both')" title="Highlight center">C</button>
        <button class="side-btn" id="sideL" onclick="setSide('L')" title="Isolate left side">L</button>
        <button class="side-btn" id="sideR" onclick="setSide('R')" title="Isolate right side">R</button>
      </div>
    </div>

    <div class="svg-wrap" id="svgWrap">
      <svg id="bodySvg" viewBox="0 0 200 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <!-- Soft inner vignette for sub-muscle ellipses -->
          <filter id="subGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <g id="bodyLayer"></g>
        <g id="skeletonLayer"></g>
        <g id="muscleLayer"></g>
        <g id="overlayLayer"></g>
        <g id="detailLayer"></g>
        <g id="labelLayer"></g>
        <g id="detailLabelLayer"></g>
        <g id="rippleLayer"></g>
      </svg>
      <div class="scanlines"></div>
      <button class="zoom-out-btn" id="zoomOutBtn" onclick="clearSelection()">⟵ ZOOM OUT</button>
    </div>

  </div>

  <!-- ── INFO PANEL ── -->
  <div class="info-panel" id="infoPanel">

    <div class="sticky-muscle-hdr" id="stickyHdr">
      <div class="sticky-muscle-names">
        <div class="sticky-muscle-name" id="stickyName"></div>
        <div class="sticky-sub-name"    id="stickySubName"></div>
      </div>
      <button class="sticky-muscle-close" onclick="clearSelection()">ESC ✕</button>
    </div>

    <div class="info-idle" id="infoIdle">
      <div class="info-idle-icon">⊕</div>
      SELECT A MUSCLE
      <div class="info-idle-sub">CLICK ANY REGION ON THE BODY</div>
      <div class="info-idle-keys">
        <kbd>F</kbd> FRONT &nbsp; <kbd>B</kbd> BACK &nbsp; <kbd>ESC</kbd> CLEAR
      </div>
    </div>

    <!-- Sub-muscle detail banner (shown when zoomed into a group) -->
    <div class="sub-info-banner" id="subInfoBanner">
      <div class="sub-info-legend" id="subLegend"></div>
      <div class="sub-hover-area">
        <div class="sub-hover-name" id="subHoverName" style="color:var(--accent)"></div>
        <div class="sub-hover-desc" id="subHoverDesc"></div>
      </div>
    </div>

    <div class="info-content" id="infoContent">
      <div class="info-badge-row">
        <span class="badge-region" id="iRegion"></span>
        <span class="badge-type" id="iType"></span>
      </div>
      <div class="info-name" id="iName"></div>
      <div class="info-sci" id="iSci"></div>

      <div class="section-lbl">DESCRIPTION</div>
      <div class="info-text" id="iDesc"></div>

      <div class="section-lbl">FUNCTION</div>
      <div class="info-text" id="iFunc"></div>

      <div class="origin-grid">
        <div class="origin-card"><strong>Origin</strong><span id="iOrigin"></span></div>
        <div class="origin-card"><strong>Insertion</strong><span id="iInsert"></span></div>
      </div>

      <div class="divider"></div>

      <div class="section-lbl">TRAINING TAGS</div>
      <div class="tags-wrap" id="iTags"></div>

      <div class="future-section">
        <div class="future-lbl">COMING IN V2 — ADDITIONAL LAYERS</div>
        <div class="future-chips">
          <span class="future-chip">Tendons</span>
          <span class="future-chip">Ligaments</span>
          <span class="future-chip">Nerves</span>
          <span class="future-chip">Organs</span>
        </div>
      </div>

      <a href="index.html" class="wiki-link">↗ BACK TO EXERCISE WIKI</a>
    </div>

  </div>`;
        _main.appendChild(_v);
      }
    }
    // Tooltip (not in index.html)
    if (!document.getElementById('tooltip')) {
      const _tt = document.createRange().createContextualFragment(`<div id="tooltip"><strong id="ttName"></strong></div>`);
      document.body.appendChild(_tt);
    }
  }

  /* ── Anatomy logic (runs after HTML is injected) ────────── */
  function _initViewer() {

/* ══════════════════════════════════════════════════════
   SUB-MUSCLE COLOR PALETTE
   ══════════════════════════════════════════════════════ */
const SUB_PALETTE = [
  {base:'#e63946', light:'rgba(255,125,135,0.80)', name:'red'},
  {base:'#f4a261', light:'rgba(255,195,130,0.80)', name:'orange'},
  {base:'#ffd166', light:'rgba(255,232,115,0.80)', name:'gold'},
  {base:'#22d3ee', light:'rgba(100,235,250,0.80)', name:'cyan'},
  {base:'#a78bfa', light:'rgba(185,155,255,0.80)', name:'violet'},
  {base:'#34d399', light:'rgba(80,230,165,0.80)', name:'green'},
];

/* ══════════════════════════════════════════════════════
   SUB-MUSCLE DATA
   Each entry: id, view('front'|'back'), name, desc,
               colorIdx(0-5), cx, cy, rx, ry, angle(deg)
   ══════════════════════════════════════════════════════ */
const SUBMUSCLES = {
  deltoids: [
    {id:'adelt-L', view:'front', name:'Anterior Head',    colorIdx:0, desc:'Shoulder flexion & horizontal adduction. Heavy in all pressing movements and front raises.',
     cx:38, cy:114, rx:12, ry:18, angle:-10,
     d:'M48,86 Q32,94 26,110 Q26,126 38,136 Q50,142 60,134 Q66,124 64,108 Q60,94 50,88 Z'},
    {id:'mdelt-L', view:'front', name:'Medial Head',      colorIdx:1, desc:'Primary shoulder abductor. The "capper" that builds shoulder width. Trained by lateral raises.',
     cx:56, cy:101, rx:11, ry:15, angle:20,
     d:'M50,86 Q60,82 68,90 Q76,102 72,118 Q68,130 60,132 Q52,128 50,118 Q48,106 48,96 Z'},
    {id:'adelt-R', view:'front', name:'Anterior Head',    colorIdx:0, desc:'Shoulder flexion & horizontal adduction. Heavy in all pressing movements and front raises.',
     cx:162, cy:114, rx:12, ry:18, angle:10,
     d:'M152,86 Q168,94 174,110 Q174,126 162,136 Q150,142 140,134 Q134,124 136,108 Q140,94 150,88 Z'},
    {id:'mdelt-R', view:'front', name:'Medial Head',      colorIdx:1, desc:'Primary shoulder abductor. The "capper" that builds shoulder width. Trained by lateral raises.',
     cx:144, cy:101, rx:11, ry:15, angle:-20,
     d:'M150,86 Q140,82 132,90 Q124,102 128,118 Q132,130 140,132 Q148,128 150,118 Q152,106 152,96 Z'},
  ],
  reardelts: [
    {id:'pdelt-L', view:'back',  name:'Posterior Head',   colorIdx:0, desc:'Shoulder horizontal abduction & extension. Chronically undertrained — critical for shoulder health.',
     cx:48, cy:110, rx:13, ry:19, angle:6,
     d:'M44,90 Q28,100 24,118 Q26,136 46,144 Q58,140 68,126 Q70,110 62,94 Q52,88 44,90 Z'},
    {id:'tmin-L',  view:'back',  name:'Teres Minor',      colorIdx:3, desc:'External rotation of the shoulder. Rotator cuff muscle — key for shoulder joint stability.',
     cx:56, cy:127, rx:7,  ry:10, angle:-15},
    {id:'pdelt-R', view:'back',  name:'Posterior Head',   colorIdx:0, desc:'Shoulder horizontal abduction & extension. Chronically undertrained — critical for shoulder health.',
     cx:152, cy:110, rx:13, ry:19, angle:-6,
     d:'M156,90 Q172,100 176,118 Q174,136 154,144 Q142,140 132,126 Q130,110 138,94 Q148,88 156,90 Z'},
    {id:'tmin-R',  view:'back',  name:'Teres Minor',      colorIdx:3, desc:'External rotation of the shoulder. Rotator cuff muscle — key for shoulder joint stability.',
     cx:144, cy:127, rx:7,  ry:10, angle:15},
  ],
  pectorals: [
    {id:'pecup-L',  view:'front', name:'Clavicular Head', colorIdx:2, desc:'Shoulder flexion and upward pressing. Targeted by incline angles. Often underdeveloped.',
     cx:78, cy:96, rx:15, ry:11, angle:-10,
     d:'M67,84 Q56,90 57,104 Q64,114 82,116 Q96,114 100,106 Q100,92 94,86 Q84,82 72,82 Z'},
    {id:'peclo-L',  view:'front', name:'Sternal Head',    colorIdx:0, desc:'Primary horizontal adductor. The bulk of chest mass. Flat and decline pressing, flyes.',
     cx:80, cy:118, rx:15, ry:13, angle:5,
     d:'M57,104 Q56,118 60,128 Q70,138 88,138 Q100,134 100,120 Q100,114 96,110 Q82,114 66,110 Z'},
    {id:'pecab-L',  view:'front', name:'Abdominal Portion', colorIdx:1, desc:'The lowest fibers of pec major, originating from the aponeurosis of the external oblique. These near-horizontal fibers form the lower pectoral shelf. Most active in decline pressing, dips with a forward lean, and low cable crossovers pulling upward toward the midline.',
     cx:78, cy:135, rx:13, ry:6, angle:5},
    {id:'pecmin-L', view:'front', name:'Pectoralis Minor', colorIdx:5, desc:'The hidden chest muscle — deep to the pec major. Three finger-like slips from ribs 3–5 converge on the coracoid process. Its job is not arm movement but scapular control: protraction and downward rotation. Chronically shortened in desk workers, it rounds the shoulder forward and can compress the brachial plexus underneath it, causing arm and hand numbness.',
     cx:79, cy:107, rx:9, ry:14, angle:14,
     d:'M68,88 Q65,97 70,109 Q74,119 83,122 Q91,118 88,106 Q84,96 76,88 Z'},
    {id:'pecup-R',  view:'front', name:'Clavicular Head', colorIdx:2, desc:'Shoulder flexion and upward pressing. Targeted by incline angles. Often underdeveloped.',
     cx:122, cy:96, rx:15, ry:11, angle:10,
     d:'M133,84 Q144,90 143,104 Q136,114 118,116 Q104,114 100,106 Q100,92 106,86 Q116,82 128,82 Z'},
    {id:'peclo-R',  view:'front', name:'Sternal Head',    colorIdx:0, desc:'Primary horizontal adductor. The bulk of chest mass. Flat and decline pressing, flyes.',
     cx:120, cy:118, rx:15, ry:13, angle:-5,
     d:'M143,104 Q144,118 140,128 Q130,138 112,138 Q100,134 100,120 Q100,114 104,110 Q118,114 134,110 Z'},
    {id:'pecab-R',  view:'front', name:'Abdominal Portion', colorIdx:1, desc:'The lowest fibers of pec major, originating from the aponeurosis of the external oblique. These near-horizontal fibers form the lower pectoral shelf. Most active in decline pressing, dips with a forward lean, and low cable crossovers pulling upward toward the midline.',
     cx:122, cy:135, rx:13, ry:6, angle:-5},
    {id:'pecmin-R', view:'front', name:'Pectoralis Minor', colorIdx:5, desc:'The hidden chest muscle — deep to the pec major. Three finger-like slips from ribs 3–5 converge on the coracoid process. Its job is not arm movement but scapular control: protraction and downward rotation. Chronically shortened in desk workers, it rounds the shoulder forward and can compress the brachial plexus underneath it, causing arm and hand numbness.',
     cx:121, cy:107, rx:9, ry:14, angle:-14,
     d:'M132,88 Q135,97 130,109 Q126,119 117,122 Q109,118 112,106 Q116,96 124,88 Z'},
  ],
  biceps: [
    {id:'biclong-L',  view:'front', name:'Long Head',    colorIdx:0, desc:'Outer "peak" of the bicep. More active with supination and shoulder in slight extension.',            cx:53,  cy:158, rx:10, ry:25, angle:3},
    {id:'bicshort-L', view:'front', name:'Short Head',   colorIdx:1, desc:'Inner bicep belly. Active in close-grip curls. Contributes to elbow flexion force.',                  cx:36,  cy:160, rx:10, ry:24, angle:-4},
    {id:'brach-L',    view:'front', name:'Brachialis',   colorIdx:3, desc:'Deepest elbow flexor — the real workhorse. Most active with neutral or pronated grip.',                cx:46,  cy:178, rx:7,  ry:11, angle:0},
    {id:'biclong-R',  view:'front', name:'Long Head',    colorIdx:0, desc:'Outer "peak" of the bicep. More active with supination and shoulder in slight extension.',            cx:147, cy:158, rx:10, ry:25, angle:-3},
    {id:'bicshort-R', view:'front', name:'Short Head',   colorIdx:1, desc:'Inner bicep belly. Active in close-grip curls. Contributes to elbow flexion force.',                  cx:164, cy:160, rx:10, ry:24, angle:4},
    {id:'brach-R',    view:'front', name:'Brachialis',   colorIdx:3, desc:'Deepest elbow flexor — the real workhorse. Most active with neutral or pronated grip.',                cx:154, cy:178, rx:7,  ry:11, angle:0},
  ],
  forearms: [
    {id:'flex-L',  view:'front', name:'Flexor Group',      colorIdx:0, desc:'Wrist flexion and grip force. The primary bottleneck in pulling endurance and heavy carries.',     cx:30,  cy:238, rx:10, ry:40, angle:-4},
    {id:'ext-L',   view:'front', name:'Extensor Group',    colorIdx:1, desc:'Wrist extension. Balances the flexors. Underloaded in most programs — train wrist curls both ways.', cx:47, cy:234, rx:8,  ry:36, angle:5},
    {id:'brad-L',  view:'front', name:'Brachioradialis',   colorIdx:2, desc:'Elbow flexor with neutral grip. Large superficial forearm muscle visible laterally.',                cx:42,  cy:205, rx:7,  ry:14, angle:7},
    {id:'flex-R',  view:'front', name:'Flexor Group',      colorIdx:0, desc:'Wrist flexion and grip force. The primary bottleneck in pulling endurance and heavy carries.',     cx:170, cy:238, rx:10, ry:40, angle:4},
    {id:'ext-R',   view:'front', name:'Extensor Group',    colorIdx:1, desc:'Wrist extension. Balances the flexors. Underloaded in most programs — train wrist curls both ways.', cx:153, cy:234, rx:8,  ry:36, angle:-5},
    {id:'brad-R',  view:'front', name:'Brachioradialis',   colorIdx:2, desc:'Elbow flexor with neutral grip. Large superficial forearm muscle visible laterally.',                cx:158, cy:205, rx:7,  ry:14, angle:-7},
  ],
  abs: [
    {id:'abs-ul', view:'front', name:'Upper Abs', colorIdx:0, desc:'First segments activated in crunches. Usually the "most visible" abs — but also easiest to develop.', cx:92,  cy:136, rx:8, ry:11, angle:0},
    {id:'abs-ur', view:'front', name:'Upper Abs', colorIdx:0, desc:'First segments activated in crunches. Usually the "most visible" abs — but also easiest to develop.', cx:108, cy:136, rx:8, ry:11, angle:0},
    {id:'abs-ml', view:'front', name:'Mid Abs',   colorIdx:1, desc:'Activated through mid-range trunk flexion. Key for hollow body and l-sit positions.',                  cx:92,  cy:158, rx:8, ry:11, angle:0},
    {id:'abs-mr', view:'front', name:'Mid Abs',   colorIdx:1, desc:'Activated through mid-range trunk flexion. Key for hollow body and l-sit positions.',                  cx:108, cy:158, rx:8, ry:11, angle:0},
    {id:'abs-ll', view:'front', name:'Lower Abs', colorIdx:2, desc:'Hardest to isolate. Best loaded with leg raises and reverse crunches with posterior pelvic tilt.',    cx:92,  cy:180, rx:8, ry:11, angle:0},
    {id:'abs-lr', view:'front', name:'Lower Abs', colorIdx:2, desc:'Hardest to isolate. Best loaded with leg raises and reverse crunches with posterior pelvic tilt.',    cx:108, cy:180, rx:8, ry:11, angle:0},
  ],
  obliques: [
    {id:'extobl-L', view:'front', name:'External Oblique', colorIdx:0, desc:'Primary trunk rotator. Diagonal fibers run downward and inward — the "hands in pocket" direction.', cx:63,  cy:168, rx:11, ry:42, angle:-12},
    {id:'intobl-L', view:'front', name:'Internal Oblique', colorIdx:4, desc:'Perpendicular to external oblique. Anti-rotation stabilizer. Generates intra-abdominal pressure.',  cx:72,  cy:170, rx:8,  ry:36, angle:-7},
    {id:'extobl-R', view:'front', name:'External Oblique', colorIdx:0, desc:'Primary trunk rotator. Diagonal fibers run downward and inward — the "hands in pocket" direction.', cx:137, cy:168, rx:11, ry:42, angle:12},
    {id:'intobl-R', view:'front', name:'Internal Oblique', colorIdx:4, desc:'Perpendicular to external oblique. Anti-rotation stabilizer. Generates intra-abdominal pressure.',  cx:128, cy:170, rx:8,  ry:36, angle:7},
  ],
  quadriceps: [
    {id:'rf-L', view:'front', name:'Rectus Femoris',    colorIdx:0, desc:'The only quad head that crosses the hip. Hip angle is critical — changes how it loads in squats.',  cx:77,  cy:324, rx:11, ry:54, angle:0},
    {id:'vl-L', view:'front', name:'Vastus Lateralis',  colorIdx:1, desc:'Outer sweep of the quad. Builds the lateral thigh shelf. Loaded by all knee extension movements.',  cx:91,  cy:316, rx:10, ry:50, angle:4},
    {id:'vm-L', view:'front', name:'Vastus Medialis',   colorIdx:2, desc:'The VMO "teardrop" near the knee. Critical for patellar tracking and knee stability.',              cx:66,  cy:358, rx:10, ry:22, angle:-14},
    {id:'vi-L', view:'front', name:'Vastus Intermedius',colorIdx:3, desc:'Deep quad layer — not visible under other heads. Pure knee extensor force production.',              cx:80,  cy:308, rx:7,  ry:44, angle:2},
    {id:'rf-R', view:'front', name:'Rectus Femoris',    colorIdx:0, desc:'The only quad head that crosses the hip. Hip angle is critical — changes how it loads in squats.',  cx:123, cy:324, rx:11, ry:54, angle:0},
    {id:'vl-R', view:'front', name:'Vastus Lateralis',  colorIdx:1, desc:'Outer sweep of the quad. Builds the lateral thigh shelf. Loaded by all knee extension movements.',  cx:109, cy:316, rx:10, ry:50, angle:-4},
    {id:'vm-R', view:'front', name:'Vastus Medialis',   colorIdx:2, desc:'The VMO "teardrop" near the knee. Critical for patellar tracking and knee stability.',              cx:134, cy:358, rx:10, ry:22, angle:14},
    {id:'vi-R', view:'front', name:'Vastus Intermedius',colorIdx:3, desc:'Deep quad layer — not visible under other heads. Pure knee extensor force production.',              cx:120, cy:308, rx:7,  ry:44, angle:-2},
  ],
  tibialis: [
    {id:'ta-L',  view:'front', name:'Tibialis Anterior',   colorIdx:0, desc:'Primary ankle dorsiflexor. Lifts the foot in gait. Shin splints are an overuse condition here.', cx:74,  cy:430, rx:10, ry:38, angle:0},
    {id:'edl-L', view:'front', name:'Extensor Digitorum',  colorIdx:1, desc:'Extends the toes and assists dorsiflexion. Runs lateral to the tibialis along the shin.',         cx:87,  cy:428, rx:7,  ry:33, angle:5},
    {id:'ta-R',  view:'front', name:'Tibialis Anterior',   colorIdx:0, desc:'Primary ankle dorsiflexor. Lifts the foot in gait. Shin splints are an overuse condition here.', cx:126, cy:430, rx:10, ry:38, angle:0},
    {id:'edl-R', view:'front', name:'Extensor Digitorum',  colorIdx:1, desc:'Extends the toes and assists dorsiflexion. Runs lateral to the tibialis along the shin.',         cx:113, cy:428, rx:7,  ry:33, angle:-5},
  ],
  trapezius: [
    {id:'utrap-L', view:'back', name:'Upper Trapezius',  colorIdx:0, desc:'Elevates scapula and rotates it upward. Often overactive and tense from desk work and stress.',
     cx:64, cy:93, rx:18, ry:22, angle:-14,
     d:'M100,74 Q88,74 72,82 Q56,90 48,106 Q52,116 66,120 Q78,124 88,116 Q98,110 100,102 Z'},
    {id:'utrap-R', view:'back', name:'Upper Trapezius',  colorIdx:0, desc:'Elevates scapula and rotates it upward. Often overactive and tense from desk work and stress.',
     cx:136, cy:93, rx:18, ry:22, angle:14,
     d:'M100,74 Q112,74 128,82 Q144,90 152,106 Q148,116 134,120 Q122,124 112,116 Q102,110 100,102 Z'},
    {id:'mtrap-L', view:'back', name:'Middle Trapezius', colorIdx:1, desc:'Retracts the scapula. Critical for posture and shoulder stability in all rowing movements.',
     cx:84, cy:118, rx:16, ry:11, angle:-8,
     d:'M66,118 Q70,128 78,136 Q88,140 100,140 L100,120 Q88,116 76,118 Z'},
    {id:'mtrap-R', view:'back', name:'Middle Trapezius', colorIdx:1, desc:'Retracts the scapula. Critical for posture and shoulder stability in all rowing movements.',
     cx:116, cy:118, rx:16, ry:11, angle:8,
     d:'M134,118 Q130,128 122,136 Q112,140 100,140 L100,120 Q112,116 124,118 Z'},
    {id:'ltrap-L', view:'back', name:'Lower Trapezius',  colorIdx:2, desc:'Depresses the scapula and upwardly rotates it. Chronically weak — prioritize face pulls and Y-raises.',
     cx:90, cy:131, rx:10, ry:8, angle:-20,
     d:'M78,134 Q82,140 90,142 Q96,142 100,140 L100,136 Q90,136 84,136 Z'},
    {id:'ltrap-R', view:'back', name:'Lower Trapezius',  colorIdx:2, desc:'Depresses the scapula and upwardly rotates it. Chronically weak — prioritize face pulls and Y-raises.',
     cx:110, cy:131, rx:10, ry:8, angle:20,
     d:'M122,134 Q118,140 110,142 Q104,142 100,140 L100,136 Q110,136 116,136 Z'},
  ],
  triceps: [
    {id:'trilong-L', view:'back', name:'Long Head',    colorIdx:0, desc:'Largest head. Biarticular — crosses the shoulder. Fully stretched in overhead movements, most active in dips with forward lean.', cx:34,  cy:164, rx:10, ry:28, angle:-4},
    {id:'trilat-L',  view:'back', name:'Lateral Head', colorIdx:1, desc:'The "horseshoe" outer head. Most visible from behind. Best activated with elbow flared in skull crushers.', cx:51,  cy:153, rx:10, ry:24, angle:10},
    {id:'trimed-L',  view:'back', name:'Medial Head',  colorIdx:2, desc:'The workhorse deep head. Always active regardless of shoulder position. Key for lockout strength.', cx:43,  cy:182, rx:8,  ry:14, angle:0},
    {id:'trilong-R', view:'back', name:'Long Head',    colorIdx:0, desc:'Largest head. Biarticular — crosses the shoulder. Fully stretched in overhead movements, most active in dips with forward lean.', cx:166, cy:164, rx:10, ry:28, angle:4},
    {id:'trilat-R',  view:'back', name:'Lateral Head', colorIdx:1, desc:'The "horseshoe" outer head. Most visible from behind. Best activated with elbow flared in skull crushers.', cx:149, cy:153, rx:10, ry:24, angle:-10},
    {id:'trimed-R',  view:'back', name:'Medial Head',  colorIdx:2, desc:'The workhorse deep head. Always active regardless of shoulder position. Key for lockout strength.', cx:157, cy:182, rx:8,  ry:14, angle:0},
  ],
  lats: [
    {id:'uplat-L', view:'back', name:'Upper Lats',  colorIdx:0, desc:'Origin near T6 and scapula. Drives the pulling arc at the top of pull-ups. Builds the upper "wing" width.', cx:62,  cy:130, rx:11, ry:22, angle:-10},
    {id:'lolat-L', view:'back', name:'Lower Lats',  colorIdx:1, desc:'Broader origin from iliac crest and thoracolumbar fascia. The lower sweep and taper. Peaks at full stretch in the hang position.', cx:57,  cy:182, rx:11, ry:30, angle:-15},
    {id:'uplat-R', view:'back', name:'Upper Lats',  colorIdx:0, desc:'Origin near T6 and scapula. Drives the pulling arc at the top of pull-ups. Builds the upper "wing" width.', cx:138, cy:130, rx:11, ry:22, angle:10},
    {id:'lolat-R', view:'back', name:'Lower Lats',  colorIdx:1, desc:'Broader origin from iliac crest and thoracolumbar fascia. The lower sweep and taper. Peaks at full stretch in the hang position.', cx:143, cy:182, rx:11, ry:30, angle:15},
  ],
  lowerback: [
    {id:'erec-L', view:'back', name:'Left Erector',   colorIdx:0, desc:'Iliocostalis and longissimus columns. Extends the spine and maintains posture under axial load.', cx:88,  cy:184, rx:8, ry:44, angle:-2},
    {id:'erec-R', view:'back', name:'Right Erector',  colorIdx:0, desc:'Iliocostalis and longissimus columns. Extends the spine and maintains posture under axial load.', cx:112, cy:184, rx:8, ry:44, angle:2},
    {id:'multi',  view:'back', name:'Multifidus',     colorIdx:3, desc:'Deep segmental stabilizer of the spine. Atrophies rapidly with inactivity. Key rehab muscle for back pain.', cx:100, cy:185, rx:5, ry:40, angle:0},
  ],
  glutes: [
    {id:'glmax-L', view:'back', name:'Gluteus Maximus', colorIdx:0, desc:'Most powerful hip extensor. One of the largest muscles in the body. Critical for sprinting, jumping, and squatting.', cx:74,  cy:305, rx:20, ry:36, angle:-4},
    {id:'glmed-L', view:'back', name:'Gluteus Medius',  colorIdx:1, desc:'Hip abductor and pelvic stabilizer. Atrophy causes trendelenburg gait. Key for single-leg stability.', cx:62,  cy:270, rx:13, ry:16, angle:-14},
    {id:'glmax-R', view:'back', name:'Gluteus Maximus', colorIdx:0, desc:'Most powerful hip extensor. One of the largest muscles in the body. Critical for sprinting, jumping, and squatting.', cx:126, cy:305, rx:20, ry:36, angle:4},
    {id:'glmed-R', view:'back', name:'Gluteus Medius',  colorIdx:1, desc:'Hip abductor and pelvic stabilizer. Atrophy causes trendelenburg gait. Key for single-leg stability.', cx:138, cy:270, rx:13, ry:16, angle:14},
  ],
  hamstrings: [
    {id:'bf-L',  view:'back', name:'Biceps Femoris',     colorIdx:0, desc:'Lateral hamstring. Two heads — long (biarticular) and short. Most commonly strained hamstring in sprinting.', cx:85,  cy:384, rx:11, ry:36, angle:3},
    {id:'st-L',  view:'back', name:'Semitendinosus',     colorIdx:1, desc:'Long medial hamstring with a cordlike tendon. Active in knee flexion and tibial internal rotation.', cx:72,  cy:380, rx:10, ry:37, angle:-3},
    {id:'sm-L',  view:'back', name:'Semimembranosus',    colorIdx:2, desc:'Deepest medial hamstring. Broad flat tendon at origin. Assists in posterior knee capsule stability.', cx:66,  cy:374, rx:8,  ry:30, angle:-5},
    {id:'bf-R',  view:'back', name:'Biceps Femoris',     colorIdx:0, desc:'Lateral hamstring. Two heads — long (biarticular) and short. Most commonly strained hamstring in sprinting.', cx:115, cy:384, rx:11, ry:36, angle:-3},
    {id:'st-R',  view:'back', name:'Semitendinosus',     colorIdx:1, desc:'Long medial hamstring with a cordlike tendon. Active in knee flexion and tibial internal rotation.', cx:128, cy:380, rx:10, ry:37, angle:3},
    {id:'sm-R',  view:'back', name:'Semimembranosus',    colorIdx:2, desc:'Deepest medial hamstring. Broad flat tendon at origin. Assists in posterior knee capsule stability.', cx:134, cy:374, rx:8,  ry:30, angle:5},
  ],
  calves: [
    {id:'gastmed-L', view:'back', name:'Gastroc — Medial Head',  colorIdx:0, desc:'The larger medial belly. Most visible calf bulk. Best loaded with straight-leg calf raises.', cx:72,  cy:453, rx:10, ry:24, angle:-7},
    {id:'gastlat-L', view:'back', name:'Gastroc — Lateral Head', colorIdx:1, desc:'Lateral belly. Gives width to the calf. Loaded with same exercises as medial head.', cx:85,  cy:450, rx:9,  ry:22, angle:7},
    {id:'sol-L',     view:'back', name:'Soleus',                 colorIdx:2, desc:'Pure plantarflexor, monoarticular, Type I dominant. Train with bent-knee (seated) calf raises.', cx:78,  cy:476, rx:12, ry:12, angle:0},
    {id:'gastmed-R', view:'back', name:'Gastroc — Medial Head',  colorIdx:0, desc:'The larger medial belly. Most visible calf bulk. Best loaded with straight-leg calf raises.', cx:128, cy:453, rx:10, ry:24, angle:7},
    {id:'gastlat-R', view:'back', name:'Gastroc — Lateral Head', colorIdx:1, desc:'Lateral belly. Gives width to the calf. Loaded with same exercises as medial head.', cx:115, cy:450, rx:9,  ry:22, angle:-7},
    {id:'sol-R',     view:'back', name:'Soleus',                 colorIdx:2, desc:'Pure plantarflexor, monoarticular, Type I dominant. Train with bent-knee (seated) calf raises.', cx:122, cy:476, rx:12, ry:12, angle:0},
  ],
  hipflexors: [
    {id:'psoas-L',    view:'front', name:'Psoas Major',   colorIdx:0, desc:'Originates from T12–L5 vertebrae. The only muscle directly connecting the spine to the leg. Tightness pulls the lumbar spine into excessive lordosis.', cx:84, cy:242, rx:7, ry:16, angle:-4},
    {id:'iliac-L',    view:'front', name:'Iliacus',       colorIdx:1, desc:'Fills the iliac fossa. Works in perfect tandem with the psoas (together = iliopsoas). More active in the terminal phase of hip flexion.', cx:79, cy:258, rx:8, ry:12, angle:5},
    {id:'tfl-L',      view:'front', name:'TFL',           colorIdx:3, desc:'Tensor Fasciae Latae. Short muscle feeding into the IT band. Hip flexor + abductor + internal rotator. Commonly tight in runners.', cx:70, cy:264, rx:6, ry:10, angle:-10},
    {id:'psoas-R',    view:'front', name:'Psoas Major',   colorIdx:0, desc:'Originates from T12–L5 vertebrae. The only muscle directly connecting the spine to the leg. Tightness pulls the lumbar spine into excessive lordosis.', cx:116, cy:242, rx:7, ry:16, angle:4},
    {id:'iliac-R',    view:'front', name:'Iliacus',       colorIdx:1, desc:'Fills the iliac fossa. Works in perfect tandem with the psoas (together = iliopsoas). More active in the terminal phase of hip flexion.', cx:121, cy:258, rx:8, ry:12, angle:-5},
    {id:'tfl-R',      view:'front', name:'TFL',           colorIdx:3, desc:'Tensor Fasciae Latae. Short muscle feeding into the IT band. Hip flexor + abductor + internal rotator. Commonly tight in runners.', cx:130, cy:264, rx:6, ry:10, angle:10},
  ],
  adductors: [
    {id:'adlong-L',  view:'front', name:'Adductor Longus',  colorIdx:0, desc:'Most anterior adductor. The prominent cordlike tendon palpable in the groin crease. Primary mover in hip adduction.', cx:88, cy:296, rx:7, ry:22, angle:-2},
    {id:'adbreve-L', view:'front', name:'Adductor Brevis',  colorIdx:1, desc:'Shorter, deeper adductor between Longus and Magnus. Contributes to hip flexion and adduction.', cx:87, cy:284, rx:6, ry:12, angle:0},
    {id:'admag-L',   view:'front', name:'Adductor Magnus',  colorIdx:2, desc:'Largest adductor — acts as both an adductor and a posterior-chain hip extensor (the "hamstring portion"). Often called the 5th hamstring.', cx:88, cy:342, rx:8, ry:36, angle:-3},
    {id:'grac-L',    view:'front', name:'Gracilis',         colorIdx:4, desc:'Long, thin, most medial adductor. Crosses both hip and knee. Assists in knee flexion and tibial internal rotation. Can be harvested for ACL repair.', cx:90, cy:362, rx:5, ry:40, angle:-2},
    {id:'adlong-R',  view:'front', name:'Adductor Longus',  colorIdx:0, desc:'Most anterior adductor. The prominent cordlike tendon palpable in the groin crease. Primary mover in hip adduction.', cx:112, cy:296, rx:7, ry:22, angle:2},
    {id:'adbreve-R', view:'front', name:'Adductor Brevis',  colorIdx:1, desc:'Shorter, deeper adductor between Longus and Magnus. Contributes to hip flexion and adduction.', cx:113, cy:284, rx:6, ry:12, angle:0},
    {id:'admag-R',   view:'front', name:'Adductor Magnus',  colorIdx:2, desc:'Largest adductor — acts as both an adductor and a posterior-chain hip extensor (the "hamstring portion"). Often called the 5th hamstring.', cx:112, cy:342, rx:8, ry:36, angle:3},
    {id:'grac-R',    view:'front', name:'Gracilis',         colorIdx:4, desc:'Long, thin, most medial adductor. Crosses both hip and knee. Assists in knee flexion and tibial internal rotation. Can be harvested for ACL repair.', cx:110, cy:362, rx:5, ry:40, angle:2},
  ],
  rhomboids: [
    {id:'rhmaj-L',  view:'back', name:'Rhomboid Major',  colorIdx:0, desc:'Larger rhomboid — retracts and downwardly rotates the scapula. Spans T2–T5. Highly active in all rowing movements.', cx:87, cy:124, rx:9, ry:12, angle:-12},
    {id:'rhmin-L',  view:'back', name:'Rhomboid Minor',  colorIdx:2, desc:'Smaller rhomboid at C7–T1. Holds the spine of the scapula level and prevents winging of the upper medial border.', cx:90, cy:110, rx:7, ry:7,  angle:-8},
    {id:'rhmaj-R',  view:'back', name:'Rhomboid Major',  colorIdx:0, desc:'Larger rhomboid — retracts and downwardly rotates the scapula. Spans T2–T5. Highly active in all rowing movements.', cx:113, cy:124, rx:9, ry:12, angle:12},
    {id:'rhmin-R',  view:'back', name:'Rhomboid Minor',  colorIdx:2, desc:'Smaller rhomboid at C7–T1. Holds the spine of the scapula level and prevents winging of the upper medial border.', cx:110, cy:110, rx:7, ry:7,  angle:8},
  ],
  serratus: [
    {id:'serr-up-L',  view:'front', name:'Upper Digitations',  colorIdx:5, desc:'Upper slips (ribs 1–4). Active throughout arm elevation. Critical for the initial phase of scapular upward rotation.', cx:57, cy:138, rx:8, ry:12, angle:-5},
    {id:'serr-lo-L',  view:'front', name:'Lower Digitations',  colorIdx:1, desc:'Lower slips (ribs 5–8). Primary driver of scapular protraction and upward rotation. Weakness here = scapular winging.', cx:55, cy:168, rx:8, ry:18, angle:-8},
    {id:'serr-up-R',  view:'front', name:'Upper Digitations',  colorIdx:5, desc:'Upper slips (ribs 1–4). Active throughout arm elevation. Critical for the initial phase of scapular upward rotation.', cx:143, cy:138, rx:8, ry:12, angle:5},
    {id:'serr-lo-R',  view:'front', name:'Lower Digitations',  colorIdx:1, desc:'Lower slips (ribs 5–8). Primary driver of scapular protraction and upward rotation. Weakness here = scapular winging.', cx:145, cy:168, rx:8, ry:18, angle:8},
  ],
  intercostals: [
    {id:'extint-L',  view:'front', name:'External Intercostals', colorIdx:5, desc:'Outermost layer. Fibres run downward and forward. Lift the rib cage to expand thoracic volume — primary inspiratory muscles active in every breath.', cx:63, cy:162, rx:6, ry:28, angle:-14},
    {id:'intint-L',  view:'front', name:'Internal Intercostals', colorIdx:1, desc:'Middle layer. Fibres run perpendicular to externals, downward and backward. Active in forced exhalation — depress the rib cage against resistance.', cx:69, cy:172, rx:5, ry:24, angle:10},
    {id:'transth-L', view:'front', name:'Transversus Thoracis', colorIdx:3, desc:'Deepest layer, running along the inner sternum. Depresses costal cartilages of ribs 2–6. Active during forceful exhalation — coughing, singing, heavy lifts.', cx:90, cy:168, rx:5, ry:20, angle:0},
    {id:'extint-R',  view:'front', name:'External Intercostals', colorIdx:5, desc:'Outermost layer. Fibres run downward and forward. Lift the rib cage to expand thoracic volume — primary inspiratory muscles active in every breath.', cx:137, cy:162, rx:6, ry:28, angle:14},
    {id:'intint-R',  view:'front', name:'Internal Intercostals', colorIdx:1, desc:'Middle layer. Fibres run perpendicular to externals, downward and backward. Active in forced exhalation — depress the rib cage against resistance.', cx:131, cy:172, rx:5, ry:24, angle:-10},
    {id:'transth-R', view:'front', name:'Transversus Thoracis', colorIdx:3, desc:'Deepest layer, running along the inner sternum. Depresses costal cartilages of ribs 2–6. Active during forceful exhalation — coughing, singing, heavy lifts.', cx:110, cy:168, rx:5, ry:20, angle:0},
  ],
  hands: [
    {id:'thenar-L',   view:'front', name:'Thenar Eminence',    colorIdx:0, desc:'Three muscles at the thumb base: Abductor Pollicis Brevis, Opponens Pollicis, Flexor Pollicis Brevis. Opposition — the defining human thumb motion — originates here.', cx:52, cy:295, rx:5, ry:10, angle:-8},
    {id:'hypoth-L',   view:'front', name:'Hypothenar Eminence',colorIdx:2, desc:'Three muscles at the little finger base: Abductor, Flexor, and Opponens Digiti Minimi. Forms the ulnar pad of the palm. Active in grip and pinch.', cx:26, cy:310, rx:5, ry:10, angle:5},
    {id:'lumbr-L',    view:'front', name:'Lumbricals',         colorIdx:4, desc:'Four worm-like muscles originating on the flexor digitorum profundus tendons. The only muscles in the body with no bony origin. Flex MCP joints while extending IP joints — essential for the "hook grip" in climbing and gymnastics.', cx:40, cy:307, rx:7, ry:8, angle:0},
    {id:'inteross-L', view:'front', name:'Palmar Interossei',  colorIdx:1, desc:'Three palmar (and four dorsal) interossei between the metacarpals. Palmar interossei adduct the fingers; dorsal interossei abduct. Together they govern lateral finger movement and joint stability.', cx:37, cy:298, rx:6, ry:6, angle:0},
    {id:'thenar-R',   view:'front', name:'Thenar Eminence',    colorIdx:0, desc:'Three muscles at the thumb base: Abductor Pollicis Brevis, Opponens Pollicis, Flexor Pollicis Brevis. Opposition — the defining human thumb motion — originates here.', cx:148, cy:295, rx:5, ry:10, angle:8},
    {id:'hypoth-R',   view:'front', name:'Hypothenar Eminence',colorIdx:2, desc:'Three muscles at the little finger base: Abductor, Flexor, and Opponens Digiti Minimi. Forms the ulnar pad of the palm. Active in grip and pinch.', cx:174, cy:310, rx:5, ry:10, angle:-5},
    {id:'lumbr-R',    view:'front', name:'Lumbricals',         colorIdx:4, desc:'Four worm-like muscles originating on the flexor digitorum profundus tendons. The only muscles in the body with no bony origin. Flex MCP joints while extending IP joints — essential for the "hook grip" in climbing and gymnastics.', cx:160, cy:307, rx:7, ry:8, angle:0},
    {id:'inteross-R', view:'front', name:'Palmar Interossei',  colorIdx:1, desc:'Three palmar (and four dorsal) interossei between the metacarpals. Palmar interossei adduct the fingers; dorsal interossei abduct. Together they govern lateral finger movement and joint stability.', cx:163, cy:298, rx:6, ry:6, angle:0},
  ],
  feet: [
    {id:'abdhal-L',   view:'front', name:'Abductor Hallucis',       colorIdx:0, desc:'Runs along the medial border of the foot. Primary mover of the big toe away from the midline. Critical for arch support and push-off mechanics. Strengthening it rebuilds collapsed medial arches.', cx:92, cy:492, rx:4, ry:9, angle:5},
    {id:'fdb-L',      view:'front', name:'Flexor Digitorum Brevis', colorIdx:2, desc:'Central plantar muscle directly above the plantar fascia. Flexes the middle phalanges of toes 2–5. Key component of the arch spring mechanism — absorbs and returns energy during each stride.', cx:75, cy:493, rx:8, ry:8, angle:0},
    {id:'edb-L',      view:'front', name:'Extensor Digitorum Brevis',colorIdx:4, desc:'Dorsal (top of foot) muscle. Extends toes 2–4 at the MTP joint. Visible as a slight bulk on the lateral dorsum of the foot. Active in toe clearance during gait swing phase.', cx:74, cy:480, rx:8, ry:6, angle:-8},
    {id:'abdmin-L',   view:'front', name:'Abductor Digiti Minimi',  colorIdx:1, desc:'Runs along the lateral border. Abducts the little toe and assists in plantarflexion of the 5th ray. Also plays a role in lateral foot arch support and balance during single-leg stance.', cx:58, cy:492, rx:4, ry:9, angle:-5},
    {id:'planint-L',  view:'front', name:'Plantar Interossei',      colorIdx:3, desc:'Three plantar (and four dorsal) interossei between the metatarsals. Adduct and abduct the toes, stabilise the metatarsal heads during push-off. Weakness contributes to claw toes and metatarsalgia.', cx:74, cy:485, rx:6, ry:5, angle:0},
    {id:'abdhal-R',   view:'front', name:'Abductor Hallucis',       colorIdx:0, desc:'Runs along the medial border of the foot. Primary mover of the big toe away from the midline. Critical for arch support and push-off mechanics. Strengthening it rebuilds collapsed medial arches.', cx:108, cy:492, rx:4, ry:9, angle:-5},
    {id:'fdb-R',      view:'front', name:'Flexor Digitorum Brevis', colorIdx:2, desc:'Central plantar muscle directly above the plantar fascia. Flexes the middle phalanges of toes 2–5. Key component of the arch spring mechanism — absorbs and returns energy during each stride.', cx:125, cy:493, rx:8, ry:8, angle:0},
    {id:'edb-R',      view:'front', name:'Extensor Digitorum Brevis',colorIdx:4, desc:'Dorsal (top of foot) muscle. Extends toes 2–4 at the MTP joint. Visible as a slight bulk on the lateral dorsum of the foot. Active in toe clearance during gait swing phase.', cx:126, cy:480, rx:8, ry:6, angle:8},
    {id:'abdmin-R',   view:'front', name:'Abductor Digiti Minimi',  colorIdx:1, desc:'Runs along the lateral border. Abducts the little toe and assists in plantarflexion of the 5th ray. Also plays a role in lateral foot arch support and balance during single-leg stance.', cx:142, cy:492, rx:4, ry:9, angle:5},
    {id:'planint-R',  view:'front', name:'Plantar Interossei',      colorIdx:3, desc:'Three plantar (and four dorsal) interossei between the metatarsals. Adduct and abduct the toes, stabilise the metatarsal heads during push-off. Weakness contributes to claw toes and metatarsalgia.', cx:126, cy:485, rx:6, ry:5, angle:0},
  ],
  rotatorcuff: [
    {id:'supra-L',   view:'back', name:'Supraspinatus',  colorIdx:0, desc:'Runs along the top of the scapula (supraspinous fossa) to the greater tubercle. Initiates abduction. The most commonly torn rotator cuff tendon — degenerates with age and is vulnerable to impingement between the humeral head and acromion.', cx:56, cy:96, rx:14, ry:8, angle:-4},
    {id:'infra-L',   view:'back', name:'Infraspinatus',  colorIdx:1, desc:'Covers the large infraspinous fossa below the scapular spine. The primary external rotator. Strength here directly determines shoulder health — weakness is linked to nearly every rotator cuff pathology.', cx:55, cy:118, rx:13, ry:14, angle:-3},
    {id:'tmin-L',    view:'back', name:'Teres Minor',    colorIdx:3, desc:'Small muscle along the lateral scapular border. Assists infraspinatus in external rotation. Specifically trained by the "empty can" and side-lying external rotation exercises.', cx:62, cy:134, rx:8,  ry:7,  angle:-10},
    {id:'tmaj-L',    view:'back', name:'Teres Major',    colorIdx:4, desc:'Not part of the rotator cuff (no cuff tendon) but functions synergistically. Medially rotates and adducts the arm — sometimes called "lat\'s little helper." Inserts into the lesser tubercle alongside the subscapularis.', cx:54, cy:143, rx:9,  ry:7,  angle:-14},
    {id:'subscap-L', view:'back', name:'Subscapularis',  colorIdx:5, desc:'Deep, anterior surface of the scapula — not visible from the back. The largest and strongest rotator cuff muscle. The primary internal rotator. Injury here causes severe posterior shoulder pain and compromises all pressing strength.', cx:55, cy:110, rx:10, ry:14, angle:0},
    {id:'supra-R',   view:'back', name:'Supraspinatus',  colorIdx:0, desc:'Runs along the top of the scapula (supraspinous fossa) to the greater tubercle. Initiates abduction. The most commonly torn rotator cuff tendon — degenerates with age and is vulnerable to impingement between the humeral head and acromion.', cx:144, cy:96, rx:14, ry:8, angle:4},
    {id:'infra-R',   view:'back', name:'Infraspinatus',  colorIdx:1, desc:'Covers the large infraspinous fossa below the scapular spine. The primary external rotator. Strength here directly determines shoulder health — weakness is linked to nearly every rotator cuff pathology.', cx:145, cy:118, rx:13, ry:14, angle:3},
    {id:'tmin-R',    view:'back', name:'Teres Minor',    colorIdx:3, desc:'Small muscle along the lateral scapular border. Assists infraspinatus in external rotation. Specifically trained by the "empty can" and side-lying external rotation exercises.', cx:138, cy:134, rx:8,  ry:7,  angle:10},
    {id:'tmaj-R',    view:'back', name:'Teres Major',    colorIdx:4, desc:'Not part of the rotator cuff (no cuff tendon) but functions synergistically. Medially rotates and adducts the arm — sometimes called "lat\'s little helper." Inserts into the lesser tubercle alongside the subscapularis.', cx:146, cy:143, rx:9,  ry:7,  angle:14},
    {id:'subscap-R', view:'back', name:'Subscapularis',  colorIdx:5, desc:'Deep, anterior surface of the scapula — not visible from the back. The largest and strongest rotator cuff muscle. The primary internal rotator. Injury here causes severe posterior shoulder pain and compromises all pressing strength.', cx:145, cy:110, rx:10, ry:14, angle:0},
  ],
  neck: [
    {id:'scm-L',     view:'front', name:'Sternocleidomastoid',  colorIdx:0, desc:'The dominant neck muscle — a thick diagonal strap running from behind the ear to the sternum and clavicle. Bilateral contraction flexes the neck; unilateral rotates the head to the opposite side. A painful SCM trigger point can cause headaches, dizziness, and referred jaw pain.', cx:89, cy:71, rx:4, ry:8, angle:-20},
    {id:'scal-L',    view:'front', name:'Anterior Scalene',     colorIdx:2, desc:'Flexes and laterally bends the cervical spine. Elevates the first rib as an accessory breathing muscle during deep inhalation. Scalene tightness is a major cause of thoracic outlet syndrome — compressing the brachial plexus.', cx:94, cy:72, rx:3, ry:7, angle:-8},
    {id:'mscal-L',   view:'front', name:'Middle Scalene',       colorIdx:4, desc:'The largest scalene. Also elevates the first rib and assists lateral neck flexion. The brachial plexus passes between the anterior and middle scalenes — compression here causes arm numbness and tingling.', cx:93, cy:74, rx:3, ry:6, angle:-5},
    {id:'scm-R',     view:'front', name:'Sternocleidomastoid',  colorIdx:0, desc:'The dominant neck muscle — a thick diagonal strap running from behind the ear to the sternum and clavicle. Bilateral contraction flexes the neck; unilateral rotates the head to the opposite side. A painful SCM trigger point can cause headaches, dizziness, and referred jaw pain.', cx:111, cy:71, rx:4, ry:8, angle:20},
    {id:'scal-R',    view:'front', name:'Anterior Scalene',     colorIdx:2, desc:'Flexes and laterally bends the cervical spine. Elevates the first rib as an accessory breathing muscle during deep inhalation. Scalene tightness is a major cause of thoracic outlet syndrome — compressing the brachial plexus.', cx:106, cy:72, rx:3, ry:7, angle:8},
    {id:'mscal-R',   view:'front', name:'Middle Scalene',       colorIdx:4, desc:'The largest scalene. Also elevates the first rib and assists lateral neck flexion. The brachial plexus passes between the anterior and middle scalenes — compression here causes arm numbness and tingling.', cx:107, cy:74, rx:3, ry:6, angle:5},
    {id:'spl-L',     view:'back',  name:'Splenius Capitis',     colorIdx:1, desc:'Broad flat muscle of the posterior neck. Extends and ipsilaterally rotates the head. Chronically loaded by forward head posture — a primary source of tension headaches in desk workers.', cx:89, cy:71, rx:5, ry:7, angle:10},
    {id:'semi-L',    view:'back',  name:'Semispinalis Capitis', colorIdx:3, desc:'The largest muscle of the posterior neck, running from the upper thoracic spine to the occiput. Bilateral extension of the head and neck. Maintains head position against gravity — hugely loaded by forward head posture.', cx:93, cy:73, rx:4, ry:6, angle:5},
    {id:'levsc-L',   view:'back',  name:'Levator Scapulae',     colorIdx:5, desc:'Connects the cervical spine to the scapula. Elevates the scapula and laterally flexes the neck. One of the most commonly tight muscles — overloaded by shoulder elevation and screen-looking posture. The classic "neck knot" location.', cx:86, cy:75, rx:4, ry:8, angle:14},
    {id:'spl-R',     view:'back',  name:'Splenius Capitis',     colorIdx:1, desc:'Broad flat muscle of the posterior neck. Extends and ipsilaterally rotates the head. Chronically loaded by forward head posture — a primary source of tension headaches in desk workers.', cx:111, cy:71, rx:5, ry:7, angle:-10},
    {id:'semi-R',    view:'back',  name:'Semispinalis Capitis', colorIdx:3, desc:'The largest muscle of the posterior neck, running from the upper thoracic spine to the occiput. Bilateral extension of the head and neck. Maintains head position against gravity — hugely loaded by forward head posture.', cx:107, cy:73, rx:4, ry:6, angle:-5},
    {id:'levsc-R',   view:'back',  name:'Levator Scapulae',     colorIdx:5, desc:'Connects the cervical spine to the scapula. Elevates the scapula and laterally flexes the neck. One of the most commonly tight muscles — overloaded by shoulder elevation and screen-looking posture. The classic "neck knot" location.', cx:114, cy:75, rx:4, ry:8, angle:-14},
  ],
  deepcore: [
    {id:'tva-L',     view:'front', name:'Transversus Abdominis', colorIdx:5, desc:'The deepest abdominal layer — runs horizontally like a corset. Cannot be seen or felt from the outside. Activated by drawing the navel inward and bracing. Its pre-activation before any limb movement is the hallmark of a healthy motor pattern.', cx:82, cy:214, rx:14, ry:16, angle:0},
    {id:'tva-R',     view:'front', name:'Transversus Abdominis', colorIdx:5, desc:'The deepest abdominal layer — runs horizontally like a corset. Cannot be seen or felt from the outside. Activated by drawing the navel inward and bracing. Its pre-activation before any limb movement is the hallmark of a healthy motor pattern.', cx:118, cy:214, rx:14, ry:16, angle:0},
    {id:'diaphragm', view:'front', name:'Diaphragm',             colorIdx:0, desc:'The dome-shaped breathing muscle that forms the roof of the intra-abdominal pressure cylinder. Descends on inhalation (pressurising the cylinder) and ascends on exhalation. Dysfunction from habitual breath-holding or stress patterns directly compromises spine stability.', cx:100, cy:202, rx:20, ry:6, angle:0},
    {id:'pfloor-L',  view:'front', name:'Pelvic Floor',          colorIdx:3, desc:'The hammock of muscles at the base of the pelvis — the cylinder floor. Co-contracts with the TVA and diaphragm to maintain pressure. Weakness causes leakage under load. Overactivity causes pelvic pain. It must be strong and mobile, not just strong.', cx:84, cy:232, rx:10, ry:6, angle:0},
    {id:'pfloor-R',  view:'front', name:'Pelvic Floor',          colorIdx:3, desc:'The hammock of muscles at the base of the pelvis — the cylinder floor. Co-contracts with the TVA and diaphragm to maintain pressure. Weakness causes leakage under load. Overactivity causes pelvic pain. It must be strong and mobile, not just strong.', cx:116, cy:232, rx:10, ry:6, angle:0},
    {id:'multifid',  view:'front', name:'Multifidus',            colorIdx:2, desc:'Deep segmental spine stabiliser running from sacrum to C2 — the cylinder\'s back wall. Atrophies rapidly after back pain onset and does not recover spontaneously, which is why first-episode back pain so often becomes chronic without targeted rehabilitation.', cx:100, cy:218, rx:5, ry:14, angle:0},
  ],
  peroneals: [
    {id:'perlong-L',  view:'front', name:'Peroneus Longus',  colorIdx:0, desc:'The longer peroneal — runs down the entire fibula and wraps under the foot to support the transverse arch. The longest peroneal tendon in the body. Its failure to evert the ankle fast enough after landing is the mechanism of most lateral ankle sprains.', cx:90, cy:422, rx:7, ry:24, angle:-3},
    {id:'perbrev-L',  view:'front', name:'Peroneus Brevis',  colorIdx:1, desc:'Shorter peroneal, running distal to longus. Inserts directly into the 5th metatarsal styloid — a stress fracture here (Jones fracture) is often a peroneal tendon avulsion injury. Primary ankle evertor.', cx:90, cy:452, rx:6, ry:14, angle:-2},
    {id:'pertert-L',  view:'front', name:'Peroneus Tertius', colorIdx:3, desc:'Anterior-compartment peroneal — absent in about 10% of people. Dorsiflexes and everts the foot simultaneously. Works alongside the tibialis anterior in the swing phase of gait.', cx:87, cy:436, rx:4, ry:12, angle:5},
    {id:'perlong-R',  view:'front', name:'Peroneus Longus',  colorIdx:0, desc:'The longer peroneal — runs down the entire fibula and wraps under the foot to support the transverse arch. The longest peroneal tendon in the body. Its failure to evert the ankle fast enough after landing is the mechanism of most lateral ankle sprains.', cx:110, cy:422, rx:7, ry:24, angle:3},
    {id:'perbrev-R',  view:'front', name:'Peroneus Brevis',  colorIdx:1, desc:'Shorter peroneal, running distal to longus. Inserts directly into the 5th metatarsal styloid — a stress fracture here (Jones fracture) is often a peroneal tendon avulsion injury. Primary ankle evertor.', cx:110, cy:452, rx:6, ry:14, angle:2},
    {id:'pertert-R',  view:'front', name:'Peroneus Tertius', colorIdx:3, desc:'Anterior-compartment peroneal — absent in about 10% of people. Dorsiflexes and everts the foot simultaneously. Works alongside the tibialis anterior in the swing phase of gait.', cx:113, cy:436, rx:4, ry:12, angle:-5},
  ],
};

/* ══════════════════════════════════════════════════════
   MUSCLE DATA
   ══════════════════════════════════════════════════════ */
const MUSCLES = {
  deltoids:{
    name:'Deltoids', sci:'Deltoideus — Anterior, Medial & Posterior Heads',
    region:'Shoulder', type:'Skeletal · Type I & II',
    origin:'Lateral clavicle, acromion process, spine of scapula',
    insert:'Deltoid tuberosity of the humerus',
    desc:'The deltoid is the thick triangular muscle forming the rounded cap of the shoulder. Its three heads produce movement in different planes — making it uniquely versatile. The anterior head fires in all pressing; the medial in abduction; the posterior in pulling and external rotation.',
    func:'Anterior: shoulder flexion, horizontal adduction, internal rotation. Medial: shoulder abduction (primary). Posterior: shoulder extension, horizontal abduction, external rotation. All three stabilise the glenohumeral joint under load.',
    tags:['Overhead Press','Lateral Raise','Shoulder Stability','Push','Row','Handstand'],
  },
  pectorals:{
    name:'Pectorals', sci:'Pectoralis Major (3 heads) & Pectoralis Minor',
    region:'Chest', type:'Skeletal · Type II dominant',
    origin:'Clavicular head: medial clavicle. Sternal head: sternum and costal cartilages 2–6. Abdominal portion: aponeurosis of the external oblique. Pec Minor: ribs 3–5.',
    insert:'Pec Major: intertubercular groove of the humerus. Pec Minor: coracoid process of the scapula.',
    desc:'The pectoralis major is a three-headed fan-shaped muscle covering the chest. The clavicular head behaves like an anterior deltoid; the sternal head is the primary horizontal pusher; the abdominal portion is the most horizontal and forms the lower shelf. Beneath all three sits the pectoralis minor — a separate muscle entirely, and one of the most chronically tight in modern life.',
    func:'Pec Major: horizontal shoulder adduction (primary). Shoulder flexion (clavicular head). Internal rotation. Adduction. Pec Minor: scapular protraction and downward rotation. Assists forced inhalation. Compresses the brachial plexus when shortened — a common source of arm numbness.',
    tags:['Push-Up','Chest Press','Incline Press','Decline Press','Dip','Ring Fly','Internal Rotation'],
  },
  biceps:{
    name:'Biceps', sci:'Biceps Brachii — Long Head & Short Head',
    region:'Anterior Upper Arm', type:'Skeletal · Type II dominant',
    origin:'Long head: supraglenoid tubercle of scapula. Short head: coracoid process.',
    insert:'Radial tuberosity and bicipital aponeurosis (into forearm fascia)',
    desc:'Despite being the muscle people flex first, the biceps is not the strongest elbow flexor — that title belongs to the brachialis underneath it. The biceps\' real superpower is supination: rotating the forearm palm-up. This is why chin-ups load it differently than pronated pull-ups.',
    func:'Elbow flexion (strongest in supination). Forearm supination (primary). Weak shoulder flexion via the long head. Primary antagonist to the triceps in all pulling movements.',
    tags:['Pull-Up','Chin-Up','Row','Supinated Grip','Elbow Flexion','Curl'],
  },
  forearms:{
    name:'Forearms', sci:'Flexor & Extensor Carpi Groups + Brachioradialis',
    region:'Forearm', type:'Skeletal · Type I & II mixed',
    origin:'Medial epicondyle of humerus (flexors); lateral epicondyle (extensors)',
    insert:'Carpal bones, metacarpals, and phalanges via long tendons',
    desc:'The forearm contains two opposing muscle groups: flexors on the palmar side and extensors on the dorsal side. They are loaded in virtually every grip-dependent exercise. Grip endurance — not just strength — is the bottleneck in most advanced pulling work, ring training, and loaded carries.',
    func:'Wrist flexion (flexor group). Wrist extension (extensor group). Forearm pronation and supination. Finger flexion (long flexors). Grip force generation and sustained endurance under load.',
    tags:['Grip Strength','Wrist Flexion','Wrist Extension','Pulling Endurance','Carry'],
  },
  abs:{
    name:'Abs', sci:'Rectus Abdominis',
    region:'Anterior Core', type:'Skeletal · Type I dominant',
    origin:'Pubic symphysis and pubic crest',
    insert:'Costal cartilages of ribs 5–7 and the xiphoid process',
    desc:'The rectus abdominis is the paired vertical muscle running the full length of the front of the abdomen, separated by a midline (linea alba) and divided into segments by tendinous intersections — the visible "six-pack." It is one of many core muscles, not the whole story.',
    func:'Trunk flexion (classic crunch motion). Posterior pelvic tilt. Compresses the abdominal wall to assist in generating intra-abdominal pressure during heavy lifts. Works in concert with the obliques and transversus abdominis.',
    tags:['Core','Trunk Flexion','Anterior Core','Hollow Body','L-Sit'],
  },
  obliques:{
    name:'Obliques', sci:'External Oblique & Internal Oblique',
    region:'Lateral Core', type:'Skeletal · Type I dominant',
    origin:'External: lower 8 ribs. Internal: inguinal ligament, iliac crest, thoracolumbar fascia.',
    insert:'External: iliac crest and linea alba. Internal: ribs 10–12 and linea alba.',
    desc:'The obliques form the lateral walls of the abdomen in two crossing layers — the external runs diagonally downward and inward; the internal upward and inward. This X-shaped arrangement makes them the primary generators of trunk rotation and lateral stability.',
    func:'Trunk rotation (the primary rotators of the spine). Lateral trunk flexion. Anti-rotation stiffness in loaded carries, planks, and windmills. Assists forced expiration. Critical for any sport involving throwing, twisting, or swinging.',
    tags:['Rotation','Lateral Flexion','Anti-Rotation','Core Stability','Side Plank'],
  },
  quadriceps:{
    name:'Quadriceps', sci:'Rectus Femoris, Vastus Lateralis, Medialis & Intermedius',
    region:'Anterior Thigh', type:'Skeletal · Type II dominant',
    origin:'Rectus Femoris: anterior inferior iliac spine. Vasti: proximal and lateral femoral surface.',
    insert:'Tibial tuberosity via the patellar tendon (quadriceps tendon → patella → patellar ligament)',
    desc:'The quadriceps is four muscles that share a single powerful tendon at the knee. It is the primary knee extensor and one of the strongest muscle groups in the human body. The rectus femoris is the only quad head that also crosses the hip — making hip angle critical in squat mechanics.',
    func:'Knee extension (primary, all four heads). Hip flexion (Rectus Femoris only). Decelerates knee flexion eccentrically during landing. Stabilises the patella (VMO). Essential for all squatting, lunging, jumping, and stair-climbing movements.',
    tags:['Squat','Knee Extension','Jump','Pistol Squat','Lunge','Deceleration'],
  },
  tibialis:{
    name:'Tibialis Anterior', sci:'Tibialis Anterior',
    region:'Anterior Lower Leg', type:'Skeletal · Type I dominant',
    origin:'Lateral condyle and upper 2/3 of the lateral tibial surface and interosseous membrane',
    insert:'Medial cuneiform bone and base of the first metatarsal',
    desc:'The tibialis anterior is the large muscle running along the outer edge of the shin. It is the primary ankle dorsiflexor and is responsible for lifting the foot during the swing phase of walking. Shin splints are typically an overuse condition of this muscle and the surrounding fascia.',
    func:'Ankle dorsiflexion (pulling the toes toward the shin — essential for gait). Foot inversion. Eccentrically controls foot lowering after heel strike. Works in every walking and running step. Also heavily loaded during box jumps, rope skipping, and barefoot training.',
    tags:['Dorsiflexion','Ankle Stability','Running','Gait','Shin Splints','Jump Rope'],
  },
  trapezius:{
    name:'Trapezius', sci:'Trapezius — Upper, Middle & Lower Portions',
    region:'Upper Back & Neck', type:'Skeletal · Type I dominant',
    origin:'External occipital protuberance, nuchal ligament, spinous processes C1–T12',
    insert:'Lateral third of clavicle, acromion, and spine of scapula',
    desc:'The trapezius is the large diamond-shaped muscle covering the upper back and neck. Its three portions have distinct and sometimes opposing actions. It is the primary scapular controller — dysfunction here leads to shoulder impingement, poor pressing strength, and neck pain.',
    func:'Upper: scapular elevation and upward rotation. Middle: scapular retraction (toward spine). Lower: scapular depression and upward rotation. All three control scapular position throughout every pressing and pulling movement.',
    tags:['Scapular Control','Shrug','Row','Overhead Stability','Posture','Face Pull'],
  },
  reardelts:{
    name:'Rear Deltoids', sci:'Deltoideus — Pars Spinalis (Posterior Head)',
    region:'Posterior Shoulder', type:'Skeletal · Type I & II',
    origin:'Spine of scapula',
    insert:'Deltoid tuberosity of the humerus',
    desc:'The posterior deltoid is systematically undertrained in programs that prioritise pushing. Every push-heavy routine that lacks horizontal pulling creates a progressively worsening anterior-to-posterior shoulder strength imbalance — a major driver of shoulder impingement and rotator cuff injury over time.',
    func:'Shoulder horizontal abduction (the reverse-fly motion). Shoulder extension (arm moving backward from the front). External rotation. Works alongside the rotator cuff to keep the humeral head properly seated in the glenoid socket during all pressing movements.',
    tags:['Face Pull','Reverse Fly','Horizontal Pull','Shoulder Health','Posture','Row'],
  },
  triceps:{
    name:'Triceps', sci:'Triceps Brachii — Long, Lateral & Medial Heads',
    region:'Posterior Upper Arm', type:'Skeletal · Type II dominant',
    origin:'Long head: infraglenoid tubercle of scapula. Lateral: posterior humerus (superior). Medial: posterior humerus (inferior).',
    insert:'Olecranon process of the ulna',
    desc:'The triceps makes up roughly two-thirds of upper arm volume. The long head is biarticular — it crosses both the shoulder and elbow — making it sensitive to shoulder position. In overhead extensions or dips with forward lean, the long head is fully stretched and most active.',
    func:'Elbow extension (primary — all pushing movements). Long head: shoulder extension and adduction. Most active in overhead pressing and dips with forward lean where the long head is pre-lengthened. Antagonist to the biceps.',
    tags:['Dip','Push-Up','Overhead Press','Elbow Extension','Ring Dip','Tricep Extension'],
  },
  lats:{
    name:'Lats', sci:'Latissimus Dorsi',
    region:'Posterior Trunk', type:'Skeletal · Type II dominant',
    origin:'T6–T12 spinous processes, thoracolumbar fascia, iliac crest, inferior angle of scapula, lower 3–4 ribs',
    insert:'Floor of the intertubercular (bicipital) groove of the humerus',
    desc:'The latissimus dorsi is the broadest muscle of the back — its name means "broadest of the back." It is the primary driver of back width and the dominant mover in all vertical pulling (pull-ups, muscle-ups). It also generates powerful shoulder internal rotation and adduction.',
    func:'Shoulder extension (pulling arm backward and down). Shoulder adduction (arm toward body). Internal rotation. Depresses the shoulder girdle. Major stabiliser of the lumbar spine via thoracolumbar fascia. Essential for all gymnastics skills requiring active shoulder depression.',
    tags:['Pull-Up','Muscle-Up','Lat Pulldown','Row','Vertical Pull','Planche Lean'],
  },
  lowerback:{
    name:'Lower Back', sci:'Erector Spinae — Iliocostalis, Longissimus & Spinalis',
    region:'Posterior Spine', type:'Skeletal · Type I dominant',
    origin:'Sacrum, iliac crest, spinous processes of lumbar and thoracic vertebrae',
    insert:'Ribs, transverse processes of thoracic and cervical vertebrae',
    desc:'The erector spinae is the column of muscles running parallel to the spine from sacrum to skull. The lower portion bears enormous compressive and shear loads in all hip-hinge movements. It is the most important muscle group for spinal safety in heavy lifting.',
    func:'Spinal extension (straightening from a bent position). Lateral trunk flexion. Eccentrically controls trunk flexion. Maintains neutral spine position under axial load in squats, deadlifts, and carries. Works synergistically with the multifidus and deep core.',
    tags:['Hip Hinge','Deadlift','Good Morning','Back Extension','Posture','Loaded Carry'],
  },
  glutes:{
    name:'Glutes', sci:'Gluteus Maximus, Medius & Minimus',
    region:'Posterior Hip', type:'Skeletal · Type I & II mixed',
    origin:'Posterior ilium, sacrum, and coccyx (Glute Max); ilium between iliac crests (Medius/Minimus)',
    insert:'Iliotibial band and gluteal tuberosity of femur (Max); greater trochanter of femur (Med/Min)',
    desc:'The gluteal complex is the powerhouse of the posterior chain. Gluteus Maximus is one of the largest muscles in the human body. Glute Medius is the primary hip abductor and frontal-plane pelvic stabiliser — its dysfunction is a major factor in knee injuries.',
    func:'Hip extension and external rotation (Glute Max). Hip abduction and pelvic stabilisation in single-leg stance (Glute Med). Deceleration of femoral internal rotation. Essential for sprint mechanics, jumping power, and injury prevention.',
    tags:['Hip Extension','Squat','Deadlift','Pelvic Stability','Sprint','Single-Leg'],
  },
  hamstrings:{
    name:'Hamstrings', sci:'Biceps Femoris, Semitendinosus & Semimembranosus',
    region:'Posterior Thigh', type:'Skeletal · Type I dominant',
    origin:'Ischial tuberosity (all three). Biceps Femoris short head: distal linea aspera of femur.',
    insert:'Biceps Femoris: fibular head. Semitendinosus & Semimembranosus: medial tibia.',
    desc:'The hamstrings are biarticular — they cross both the hip and knee — which makes them complex. They must lengthen at one joint while contracting at the other. This biarticular nature makes them acutely sensitive to position and among the most commonly strained muscles in athletes.',
    func:'Knee flexion and hip extension (both). Tibial rotation at the knee (internal by ST/SM; external by BF). Eccentric deceleration of knee extension in landing and sprinting. Critical for posterior chain balance and sprint mechanics.',
    tags:['Hip Extension','Knee Flexion','Nordic Curl','Sprint','Posterior Chain','RDL'],
  },
  calves:{
    name:'Calves', sci:'Gastrocnemius & Soleus',
    region:'Posterior Lower Leg', type:'Skeletal · Type I dominant',
    origin:'Gastrocnemius: medial and lateral femoral condyles. Soleus: posterior fibula and tibia.',
    insert:'Calcaneus (heel bone) via the Achilles tendon',
    desc:'The calf is two muscles sharing one tendon — the thickest tendon in the human body. The gastrocnemius is biarticular (crosses knee and ankle) and primarily fast-twitch; the soleus is monoarticular and overwhelmingly slow-twitch Type I. Targeted training requires both straight-knee and bent-knee positions.',
    func:'Plantarflexion (pushing foot downward — essential for walking, running, jumping). Gastrocnemius is most active with the knee extended (standing calf raise). Soleus is primary with knee bent (seated calf raise). Shock absorption at heel strike and jump landing.',
    tags:['Plantarflexion','Jump','Running','Achilles Tendon','Calf Raise','Jump Rope'],
  },
  hipflexors:{
    name:'Hip Flexors', sci:'Iliopsoas — Psoas Major, Iliacus & Tensor Fasciae Latae',
    region:'Anterior Hip', type:'Skeletal · Type I & II mixed',
    origin:'Psoas Major: T12–L5 vertebral bodies and transverse processes. Iliacus: iliac fossa. TFL: anterior superior iliac spine (ASIS).',
    insert:'Psoas & Iliacus: lesser trochanter of the femur. TFL: iliotibial band.',
    desc:'The hip flexors are among the most overloaded and undertrained muscle groups in modern life. Prolonged sitting keeps them in perpetual shortened state, leading to anterior pelvic tilt and inhibited glutes. The iliopsoas (psoas + iliacus) is the primary hip flexor; the TFL assists while also abducting and internally rotating the leg.',
    func:'Hip flexion — drawing the knee toward the chest (primary function). Lumbar spine stabilization and slight lordosis (Psoas). Hip abduction and internal rotation (TFL). Essential for sprinting, kicking, running, and any movement requiring the leg to swing forward. Eccentrically decelerate hip extension.',
    tags:['Hip Flexion','Sprint','Running','Leg Raise','Kick','Anterior Pelvic Tilt','Core'],
  },
  adductors:{
    name:'Adductors', sci:'Adductor Magnus, Longus, Brevis & Gracilis',
    region:'Medial Thigh', type:'Skeletal · Type I dominant',
    origin:'Pubic ramus and ischial tuberosity (Magnus); pubic body (Longus & Brevis); pubic symphysis (Gracilis)',
    insert:'Medial and posterior femur — linea aspera (Magnus, Longus, Brevis); medial tibia via pes anserinus (Gracilis)',
    desc:'The adductors form the entire medial wall of the thigh — collectively one of the largest muscle groups in the body — yet they are chronically undertrained and poorly understood. Adductor Magnus is particularly powerful and also acts as a posterior-chain hip extensor via its hamstring portion. Gracilis is the only adductor that crosses the knee.',
    func:'Hip adduction (bringing leg toward midline — primary function of all four). Hip flexion (Longus, Brevis, anterior Magnus). Hip extension (posterior Magnus — acts like a 5th hamstring). Knee flexion (Gracilis). Pelvic stabilization in gait. Critical for lateral change-of-direction and groin injury prevention.',
    tags:['Hip Adduction','Groin','Inner Thigh','Squat','Lunge','Lateral Movement','Single-Leg'],
  },
  rhomboids:{
    name:'Rhomboids', sci:'Rhomboid Major & Rhomboid Minor',
    region:'Interscapular Back', type:'Skeletal · Type I dominant',
    origin:'Spinous processes of C7–T5 (Major: T2–T5; Minor: C7–T1) and the ligamentum nuchae',
    insert:'Medial border of the scapula',
    desc:'The rhomboids retract and elevate the scapula and rotate it downward — the opposite of the trapezius. They are almost universally undertrained, and their weakness is a primary driver of rounded shoulders, scapular winging, and shoulder impingement. They work in concert with the middle and lower trapezius to hold the shoulder blades in proper retracted position.',
    func:'Scapular retraction (pulling shoulder blades together). Scapular elevation. Downward rotation of the scapula (opposing upper trap). Stabilises the medial border of the scapula against the rib cage. Highly active in all rowing movements, face pulls, and band pull-aparts.',
    tags:['Scapular Retraction','Posture','Row','Face Pull','Pull-Apart','Shoulder Health','Upper Back'],
  },
  serratus:{
    name:'Serratus Anterior', sci:'Serratus Anterior',
    region:'Lateral Thorax', type:'Skeletal · Type I dominant',
    origin:'Outer surfaces and superior borders of ribs 1–8 (or 9)',
    insert:'Anterior (costal) surface of the medial border of the scapula',
    desc:'The serratus anterior is often called "the boxer\'s muscle" because it protracts the scapula powerfully during a punch. Its distinctive finger-like digitations are visible on lean, developed athletes along the ribcage. It is the primary muscle responsible for keeping the scapula flat against the rib cage — its weakness causes scapular winging and shoulder instability in overhead movements.',
    func:'Scapular protraction (pushing the shoulder blade forward around the rib cage). Upward rotation of the scapula (essential for shoulder flexion above 90°). Holds the medial scapular border against the thorax — prevents winging. Active in all pushing and overhead movements. Critical for handstand balance and ring stability.',
    tags:['Scapular Protraction','Push-Up','Overhead Stability','Handstand','Punch','Winging','Shoulder Health'],
  },
  intercostals:{
    name:'Intercostals', sci:'Intercostales Externi, Interni & Transversus Thoracis',
    region:'Thoracic Cage', type:'Skeletal · Type I dominant',
    origin:'Inferior border of each rib above (External); superior border of each rib below (Internal)',
    insert:'Superior border of the rib below (External); inferior border of the rib above (Internal)',
    desc:'The intercostals are three layers of muscle filling the spaces between each pair of ribs. Though small individually, they span the entire thoracic cage and are active in every breath you take — around 20,000 times a day. The external intercostals assist inhalation; the internals assist forced exhalation. Transversus thoracis is the deepest layer, running along the inside of the sternum.',
    func:'External Intercostals: elevate the rib cage during inhalation. Internal Intercostals: depress the ribs during forced exhalation. Transversus Thoracis: compresses the thoracic cage. Together they maintain rib cage stiffness under load — essential for bracing in heavy lifting, Valsalva manoeuvre, and breath-hold performance.',
    tags:['Breathing','Inhalation','Exhalation','Valsalva','Core Bracing','Thoracic Stability'],
  },
  hands:{
    name:'Hand Intrinsics', sci:'Thenar & Hypothenar Groups, Lumbricals & Interossei',
    region:'Hand', type:'Skeletal · Type I & II mixed',
    origin:'Metacarpals, carpal bones, and long flexor tendons',
    insert:'Proximal phalanges and extensor expansions of fingers 1–5',
    desc:'The hand contains 17 intrinsic muscles packed into the palm — responsible for the fine motor precision that defines human dexterity. The thenar group controls the thumb (the most important digit), the hypothenar controls the little finger, and the lumbricals and interossei produce the subtle flexion-extension balance across each finger. Grip strength without intrinsic hand development is an incomplete chain.',
    func:'Thumb opposition and palmar abduction (Thenar). Little finger opposition and abduction (Hypothenar). MCP flexion with IP extension — the "lumbrical grip" essential for ring and bar work. Finger abduction and adduction (Interossei). Precision pinch, power grip, and all tool-use movements.',
    tags:['Grip','Pinch','Finger Flexion','Thumb Opposition','Ring Training','Climbing','Dexterity'],
  },
  feet:{
    name:'Foot Intrinsics', sci:'Plantar & Dorsal Intrinsic Muscle Groups',
    region:'Foot', type:'Skeletal · Type I dominant',
    origin:'Calcaneus (plantar group), metatarsals, and plantar fascia',
    insert:'Proximal phalanges and flexor tendons of toes 1–5',
    desc:'The foot contains 20 intrinsic muscles arranged in four plantar layers plus a dorsal group. They are the engine of arch control — not the passive plantar fascia. Weak foot intrinsics are a primary driver of plantar fasciitis, flat arch collapse, and ankle instability. Barefoot training, toe curls, and single-leg balance directly target these muscles.',
    func:'Arch maintenance and dynamic stiffening during push-off. Toe flexion for propulsion (plantar group). Toe extension for foot clearance in gait (dorsal). Abduction of hallux (Abductor Hallucis). Stabilisation of the metatarsal heads during the terminal stance phase of gait and jumping.',
    tags:['Arch Support','Plantar Fascia','Balance','Barefoot Training','Toe Flexion','Gait','Jump Landing'],
  },
  rotatorcuff:{
    name:'Rotator Cuff', sci:'Supraspinatus, Infraspinatus, Teres Minor & Subscapularis (SITS)',
    region:'Posterior Shoulder', type:'Skeletal · Type I dominant',
    origin:'Supraspinous fossa (Supraspinatus); Infraspinous fossa (Infraspinatus); Lateral scapular border (Teres Minor); Subscapular fossa, anterior scapula (Subscapularis)',
    insert:'Greater tubercle of humerus (Supra, Infra, Teres Minor); Lesser tubercle of humerus (Subscapularis)',
    desc:'The rotator cuff is four muscles whose tendons merge into a single cuff around the humeral head. Their job is not primarily to move the arm — it is to keep the humeral head centred in the glenoid socket during every shoulder movement. Without a strong rotator cuff, the deltoid simply pulls the humerus upward and impinges it on the acromion. It is the most commonly injured structure in the shoulder.',
    func:'Supraspinatus: initiates first 15–30° of abduction, compresses glenohumeral joint. Infraspinatus: primary external rotator of the shoulder. Teres Minor: external rotation and humeral head depression. Subscapularis: primary internal rotator, subscapular stabiliser. Together: dynamic stabilisation throughout the full shoulder range of motion.',
    tags:['Shoulder Stability','External Rotation','Internal Rotation','Impingement Prevention','Overhead Press','Rotator Cuff'],
  },
  neck:{
    name:'Neck Muscles', sci:'Sternocleidomastoid, Scalenes, Splenius & Semispinalis',
    region:'Cervical', type:'Skeletal · Type I dominant',
    origin:'SCM: manubrium and clavicle. Scalenes: transverse processes C2–C6. Splenius: ligamentum nuchae and spinous processes C7–T4.',
    insert:'SCM: mastoid process and lateral occipital bone. Scalenes: ribs 1–2. Splenius: mastoid process and occipital bone.',
    desc:'The neck contains over 20 muscles in several overlapping layers. The sternocleidomastoid (SCM) is the largest and most visible — its bilateral contraction flexes the neck; unilateral contraction rotates the head to the opposite side. The scalenes are important respiratory assistants, lifting the first two ribs during inhalation. Posterior muscles like the splenius and semispinalis extend and rotate the head and are chronically loaded in desk workers.',
    func:'SCM: neck flexion, lateral flexion, and contralateral rotation. Also elevates the sternum during forced inhalation. Scalenes: lateral neck flexion, first rib elevation (accessory breathing). Splenius Capitis: head extension and ipsilateral rotation. Semispinalis: bilateral head and neck extension, key postural muscle. Levator Scapulae: elevates the scapula and laterally flexes the cervical spine.',
    tags:['Head Position','Neck Flexion','Neck Extension','Posture','Breathing','Cervical Stability','Headache'],
  },
  deepcore:{
    name:'Deep Core', sci:'Transversus Abdominis, Diaphragm, Multifidus & Pelvic Floor',
    region:'Deep Anterior Core', type:'Skeletal · Type I dominant',
    origin:'TVA: inguinal ligament, iliac crest, thoracolumbar fascia, costal cartilages 7–12. Diaphragm: lower ribs, sternum, lumbar vertebrae.',
    insert:'TVA: linea alba and thoracolumbar fascia (forms a corset). Diaphragm: central tendon.',
    desc:'The deep core is a pressure cylinder — diaphragm on top, pelvic floor on the bottom, TVA wrapping around the sides like a corset, and multifidus at the back. When co-contracted, these four muscles create intra-abdominal pressure (IAP), the most powerful spinal stabilisation mechanism the body has. Heavy lifting without this system firing is how backs get injured. The TVA alone is invisible from the surface — it never "shows" but everything depends on it.',
    func:'TVA: compresses the abdominal contents to generate and maintain intra-abdominal pressure. The primary anti-rotation and anti-extension spine stabiliser. Diaphragm: primary breathing muscle, IAP roof. Pelvic floor: IAP floor, continence, pelvic organ support. Multifidus: segmental lumbar spine stabilisation. All four must be trained together — isolating them is less effective than integrating them via breathing cues and bracing.',
    tags:['Core Bracing','Intra-Abdominal Pressure','Valsalva','Deadlift','Squat','Back Health','Breathing','Plank'],
  },
  peroneals:{
    name:'Peroneals', sci:'Fibularis Longus, Brevis & Tertius',
    region:'Lateral Lower Leg', type:'Skeletal · Type I dominant',
    origin:'Fibula head and upper 2/3 of lateral fibula (Longus & Brevis); anterior fibula distal third (Tertius)',
    insert:'Longus: plantar surface of medial cuneiform and 1st metatarsal base. Brevis: styloid process of 5th metatarsal. Tertius: dorsum of 5th metatarsal.',
    desc:'The peroneal muscles (properly called fibularis muscles) run down the lateral lower leg and wrap behind the lateral malleolus via a shared tendon groove. They are the primary defenders against ankle inversion sprains — an ankle rolls inward when the peroneals fail to fire fast enough. Peroneal strengthening is the single most effective intervention for recurrent ankle sprains.',
    func:'Peroneus Longus: ankle eversion (primary), plantarflexion, and support of the transverse arch of the foot. Peroneus Brevis: ankle eversion, 5th ray stabilisation. Peroneus Tertius: ankle dorsiflexion and eversion. Together they maintain the lateral ankle column stability in every step, jump, and landing.',
    tags:['Ankle Stability','Eversion','Lateral Ankle Sprain','Running','Jump Landing','Arch Support','Proprioception'],
  },
};

/* ══════════════════════════════════════════════════════
   SVG BODY PATHS — 200×520 coordinate system
   ══════════════════════════════════════════════════════ */
const BODY = [
  // Head — cranium wider than jaw, slight temporal narrowing
  {tag:'ellipse',a:{cx:100,cy:37,rx:22,ry:26}},
  // Jaw / mandible lower portion
  {tag:'path',d:'M82,52 Q82,62 100,65 Q118,62 118,52'},
  // Neck — tapered column, slightly narrower than jaw
  {tag:'path',d:'M92,63 Q108,63 108,63 Q110,72 109,80 L91,80 Q90,72 92,63 Z'},
  // Torso — shoulders wide (~108), waist narrower (~80), hips moderate (~90)
  // Shoulder wings flare out, then taper to waist, then slight hip flare
  {tag:'path',d:'M46,83 Q28,94 44,112 Q50,168 52,202 Q54,226 62,241 L100,248 L138,241 Q146,226 148,202 Q150,168 156,112 Q172,94 154,83 Q128,76 100,76 Q72,76 46,83 Z'},
  // Pelvis bridge — slightly wider than waist
  {tag:'path',d:'M62,241 Q56,253 56,265 L100,269 L144,265 Q144,253 138,241 Z'},
  // Left upper arm — bulges at deltoid insertion, tapers to elbow
  {tag:'path',d:'M46,86 Q27,96 25,138 Q25,172 33,190 Q44,197 55,190 Q61,168 61,134 Q61,100 52,88 Z'},
  // Right upper arm
  {tag:'path',d:'M154,86 Q173,96 175,138 Q175,172 167,190 Q156,197 145,190 Q139,168 139,134 Q139,100 148,88 Z'},
  // Left forearm — wider at elbow, tapers elegantly toward wrist
  {tag:'path',d:'M31,192 Q17,216 17,254 Q19,278 32,290 Q44,297 56,287 Q59,267 58,242 Q56,212 48,192 Z'},
  // Right forearm
  {tag:'path',d:'M169,192 Q183,216 183,254 Q181,278 168,290 Q156,297 144,287 Q141,267 142,242 Q144,212 152,192 Z'},
  // Left hand — wider at knuckles, tapers to wrist
  {tag:'path',d:'M29,288 Q18,300 20,317 Q28,328 44,326 Q56,321 57,308 Q57,292 50,288 Z'},
  // Right hand
  {tag:'path',d:'M171,288 Q182,300 180,317 Q172,328 156,326 Q144,321 143,308 Q143,292 150,288 Z'},
  // Left thigh — wide at hip, tapers toward knee, slight VMO bulge at base
  {tag:'path',d:'M63,267 Q50,288 52,338 Q56,374 70,392 Q83,400 97,392 Q102,374 100,336 Q98,284 90,267 Z'},
  // Right thigh
  {tag:'path',d:'M137,267 Q150,288 148,338 Q144,374 130,392 Q117,400 103,392 Q98,374 100,336 Q102,284 110,267 Z'},
  // Left lower leg — widest just below knee (gastrocnemius), tapers to slim ankle
  {tag:'path',d:'M64,394 Q55,414 59,456 Q65,478 79,483 Q93,484 97,472 Q99,452 97,418 Q92,394 78,390 Z'},
  // Right lower leg
  {tag:'path',d:'M136,394 Q145,414 141,456 Q135,478 121,483 Q107,484 103,472 Q101,452 103,418 Q108,394 122,390 Z'},
  // Left foot — slight arch, toes area wider than heel
  {tag:'path',d:'M61,473 Q52,486 55,500 Q66,511 84,509 Q97,503 97,491 Q90,476 75,472 Z'},
  // Right foot
  {tag:'path',d:'M139,473 Q148,486 145,500 Q134,511 116,509 Q103,503 103,491 Q110,476 125,472 Z'},
];

/* FRONT muscle regions — anatomically improved paths */
const FRONT = [
  /* Deltoids — triangular shoulder cap */
  {id:'delt-L',key:'deltoids',label:'DELT',cx:47,cy:108,
   d:'M48,85 Q30,93 26,111 Q26,130 38,140 Q50,146 62,140 Q72,130 74,114 Q72,97 62,88 Q54,83 48,85 Z'},
  {id:'delt-R',key:'deltoids',label:'DELT',cx:153,cy:108,
   d:'M152,85 Q170,93 174,111 Q174,130 162,140 Q150,146 138,140 Q128,130 126,114 Q128,97 138,88 Q146,83 152,85 Z'},
  /* Pectorals — fan shape, fibres converging at deltoid tuberosity */
  {id:'pec-L',key:'pectorals',label:'PEC',cx:80,cy:108,
   d:'M67,84 Q56,92 57,108 Q60,124 74,134 Q86,140 100,134 Q102,120 100,94 Q96,84 82,82 Q72,82 67,84 Z'},
  {id:'pec-R',key:'pectorals',label:'PEC',cx:120,cy:108,
   d:'M133,84 Q144,92 143,108 Q140,124 126,134 Q114,140 100,134 Q98,120 100,94 Q104,84 118,82 Q128,82 133,84 Z'},
  /* Biceps — elongated teardrop */
  {id:'bic-L',key:'biceps',label:'BIC',cx:44,cy:160,
   d:'M33,136 Q22,156 24,176 Q28,194 46,198 Q60,196 66,178 Q68,158 60,138 Q50,130 36,132 Z'},
  {id:'bic-R',key:'biceps',label:'BIC',cx:156,cy:160,
   d:'M167,136 Q178,156 176,176 Q172,194 154,198 Q140,196 134,178 Q132,158 140,138 Q150,130 164,132 Z'},
  /* Forearms — tapered tube */
  {id:'fore-L',key:'forearms',label:'FORE',cx:38,cy:238,
   d:'M31,196 Q18,220 18,258 Q22,280 36,292 Q48,298 57,288 Q60,266 58,242 Q54,212 46,196 Z'},
  {id:'fore-R',key:'forearms',label:'FORE',cx:162,cy:238,
   d:'M169,196 Q182,220 182,258 Q178,280 164,292 Q152,298 143,288 Q140,266 142,242 Q146,212 154,196 Z'},
  /* Abs — rectus abdominis column with slight segmentation hints */
  {id:'abs',key:'abs',label:'ABS',cx:100,cy:172,
   d:'M85,128 Q78,150 78,182 Q80,216 100,224 Q120,216 122,182 Q122,150 115,128 Q108,122 100,122 Q92,122 85,128 Z'},
  /* Obliques — diagonal fan */
  {id:'obl-L',key:'obliques',label:'OBL',cx:67,cy:170,
   d:'M66,122 Q56,144 56,174 Q58,206 72,222 Q80,228 85,220 Q82,188 82,162 Q82,138 78,126 Z'},
  {id:'obl-R',key:'obliques',label:'OBL',cx:133,cy:170,
   d:'M134,122 Q144,144 144,174 Q142,206 128,222 Q120,228 115,220 Q118,188 118,162 Q118,138 122,126 Z'},
  /* Quadriceps — sweeping teardrop with VMO hint */
  {id:'quad-L',key:'quadriceps',label:'QUAD',cx:76,cy:328,
   d:'M63,268 Q52,290 53,336 Q57,374 70,394 Q82,402 98,394 Q102,374 100,334 Q98,284 90,268 Z'},
  {id:'quad-R',key:'quadriceps',label:'QUAD',cx:124,cy:328,
   d:'M137,268 Q148,290 147,336 Q143,374 130,394 Q118,402 102,394 Q98,374 100,334 Q102,284 110,268 Z'},
  /* Hip Flexors — inguinal crease, lower abdomen into upper thigh */
  {id:'hipflex-L',key:'hipflexors',label:'HIP FLEX',cx:82,cy:254,
   d:'M78,230 Q68,240 68,258 Q70,274 82,280 Q94,278 96,262 Q96,244 88,232 Z'},
  {id:'hipflex-R',key:'hipflexors',label:'HIP FLEX',cx:118,cy:254,
   d:'M122,230 Q132,240 132,258 Q130,274 118,280 Q106,278 104,262 Q104,244 112,232 Z'},
  /* Adductors — medial thigh, between quads */
  {id:'add-L',key:'adductors',label:'ADD',cx:88,cy:338,
   d:'M90,270 Q80,296 78,334 Q78,368 88,390 Q96,398 102,390 Q98,366 94,332 Q92,296 94,270 Z'},
  {id:'add-R',key:'adductors',label:'ADD',cx:112,cy:338,
   d:'M110,270 Q120,296 122,334 Q122,368 112,390 Q104,398 98,390 Q102,366 106,332 Q108,296 106,270 Z'},
  /* Serratus Anterior — lateral ribcage, finger-like digitations */
  {id:'serr-L',key:'serratus',label:'SERR',cx:55,cy:158,
   d:'M60,122 Q48,136 48,158 Q50,180 60,194 Q68,198 74,190 Q72,168 66,148 Q62,132 60,122 Z'},
  {id:'serr-R',key:'serratus',label:'SERR',cx:145,cy:158,
   d:'M140,122 Q152,136 152,158 Q150,180 140,194 Q132,198 126,190 Q128,168 134,148 Q138,132 140,122 Z'},
  /* Tibialis anterior — narrow shin blade */
  {id:'tib-L',key:'tibialis',label:'TIB',cx:75,cy:432,
   d:'M67,394 Q60,418 62,454 Q67,476 79,480 Q90,478 94,464 Q95,436 92,408 Q86,394 72,392 Z'},
  {id:'tib-R',key:'tibialis',label:'TIB',cx:125,cy:432,
   d:'M133,394 Q140,418 138,454 Q133,476 121,480 Q110,478 106,464 Q105,436 108,408 Q114,394 128,392 Z'},
  /* Intercostals — lateral lower chest between serratus and oblique */
  {id:'intcost-L',key:'intercostals',label:'INTCOST',cx:67,cy:172,
   d:'M66,140 Q60,154 60,172 Q60,194 66,206 Q72,210 78,206 Q80,186 80,166 Q80,148 74,138 Z'},
  {id:'intcost-R',key:'intercostals',label:'INTCOST',cx:133,cy:172,
   d:'M134,140 Q140,154 140,172 Q140,194 134,206 Q128,210 122,206 Q120,186 120,166 Q120,148 126,138 Z'},
  /* Hands — intrinsic palm muscles */
  {id:'hand-L',key:'hands',label:'HAND',cx:38,cy:305,
   d:'M50,286 Q36,288 24,298 Q21,312 30,322 Q42,326 54,318 Q57,304 56,292 Z'},
  {id:'hand-R',key:'hands',label:'HAND',cx:162,cy:305,
   d:'M150,286 Q164,288 176,298 Q179,312 170,322 Q158,326 146,318 Q143,304 144,292 Z'},
  /* Feet — intrinsic plantar/dorsal foot muscles */
  {id:'foot-L',key:'feet',label:'FOOT',cx:74,cy:492,
   d:'M63,473 Q54,484 56,498 Q66,509 83,507 Q95,501 95,491 Q88,476 74,471 Z'},
  {id:'foot-R',key:'feet',label:'FOOT',cx:126,cy:492,
   d:'M137,473 Q146,484 144,498 Q134,509 117,507 Q105,501 105,491 Q112,476 126,471 Z'},
  /* Neck — SCM and anterior scalenes, front view */
  {id:'neck-L',key:'neck',label:'NECK',cx:90,cy:72,
   d:'M93,64 Q86,66 84,72 Q85,79 93,79 L98,79 Q99,73 98,67 Z'},
  {id:'neck-R',key:'neck',label:'NECK',cx:110,cy:72,
   d:'M107,64 Q114,66 116,72 Q115,79 107,79 L102,79 Q101,73 102,67 Z'},
  /* Deep Core — TVA corset band, lower abdomen */
  {id:'deepcore',key:'deepcore',label:'TVA',cx:100,cy:220,
   d:'M76,200 Q68,214 70,228 Q76,238 100,242 Q124,238 130,228 Q132,214 124,200 Q112,196 100,196 Q88,196 76,200 Z'},
  /* Peroneals — lateral lower leg, outer fibula face */
  {id:'peron-L',key:'peroneals',label:'PERON',cx:91,cy:434,
   d:'M88,396 Q84,418 84,442 Q86,466 92,474 Q98,472 100,460 Q100,438 98,414 Q96,398 Z'},
  {id:'peron-R',key:'peroneals',label:'PERON',cx:109,cy:434,
   d:'M112,396 Q116,418 116,442 Q114,466 108,474 Q102,472 100,460 Q100,438 102,414 Q104,398 Z'},
];

/* BACK muscle regions — anatomically improved paths */
const BACK = [
  /* Trapezius — full diamond spanning neck to mid-back */
  {id:'trap',key:'trapezius',label:'TRAP',cx:100,cy:104,
   d:'M100,72 Q82,76 68,84 Q52,94 48,108 Q52,126 70,134 Q84,140 100,140 Q116,140 130,134 Q148,126 152,108 Q148,94 132,84 Q118,76 100,72 Z'},
  /* Rear deltoids — posterior cap */
  {id:'rdelt-L',key:'reardelts',label:'R.DELT',cx:46,cy:112,
   d:'M44,88 Q26,98 24,118 Q26,138 48,144 Q62,140 70,124 Q72,106 62,92 Q52,86 44,88 Z'},
  {id:'rdelt-R',key:'reardelts',label:'R.DELT',cx:154,cy:112,
   d:'M156,88 Q174,98 176,118 Q174,138 152,144 Q138,140 130,124 Q128,106 138,92 Q148,86 156,88 Z'},
  /* Triceps — horseshoe posterior arm */
  {id:'tri-L',key:'triceps',label:'TRI',cx:43,cy:166,
   d:'M31,140 Q20,160 22,182 Q26,200 46,204 Q62,200 67,182 Q68,160 58,140 Q46,132 31,140 Z'},
  {id:'tri-R',key:'triceps',label:'TRI',cx:157,cy:166,
   d:'M169,140 Q180,160 178,182 Q174,200 154,204 Q138,200 133,182 Q132,160 142,140 Q154,132 169,140 Z'},
  /* Lats — wide sweeping fan from armpit to lower back */
  {id:'lat-L',key:'lats',label:'LAT',cx:60,cy:162,
   d:'M50,106 Q38,126 42,162 Q46,200 60,224 Q70,234 80,226 Q76,196 74,164 Q72,130 68,110 Z'},
  {id:'lat-R',key:'lats',label:'LAT',cx:140,cy:162,
   d:'M150,106 Q162,126 158,162 Q154,200 140,224 Q130,234 120,226 Q124,196 126,164 Q128,130 132,110 Z'},
  /* Erector spinae — twin columns flanking spine */
  {id:'lback',key:'lowerback',label:'ERECTORS',cx:100,cy:183,
   d:'M82,140 Q74,164 76,198 Q80,230 100,238 Q120,230 124,198 Q126,164 118,140 Q110,132 100,130 Q90,132 82,140 Z'},
  /* Rhomboids — interscapular, between trapezius and spine */
  {id:'rhomb-L',key:'rhomboids',label:'RHOMB',cx:83,cy:118,
   d:'M100,104 Q92,104 84,108 Q78,114 80,126 Q84,136 92,140 Q100,140 100,128 Z'},
  {id:'rhomb-R',key:'rhomboids',label:'RHOMB',cx:117,cy:118,
   d:'M100,104 Q108,104 116,108 Q122,114 120,126 Q116,136 108,140 Q100,140 100,128 Z'},
  /* Glutes — full rounded posterior hip */
  {id:'glut-L',key:'glutes',label:'GLUTE',cx:76,cy:302,
   d:'M60,268 Q50,290 53,318 Q58,344 78,352 Q96,352 102,336 Q100,310 94,284 Q88,266 74,262 Z'},
  {id:'glut-R',key:'glutes',label:'GLUTE',cx:124,cy:302,
   d:'M140,268 Q150,290 147,318 Q142,344 122,352 Q104,352 98,336 Q100,310 106,284 Q112,266 126,262 Z'},
  /* Hamstrings — long posterior thigh */
  {id:'ham-L',key:'hamstrings',label:'HAM',cx:76,cy:384,
   d:'M61,354 Q52,376 56,404 Q62,428 78,434 Q94,434 100,420 Q102,394 98,366 Q92,346 78,348 Z'},
  {id:'ham-R',key:'hamstrings',label:'HAM',cx:124,cy:384,
   d:'M139,354 Q148,376 144,404 Q138,428 122,434 Q106,434 100,420 Q98,394 102,366 Q108,346 122,348 Z'},
  /* Calves — diamond gastrocnemius */
  {id:'calf-L',key:'calves',label:'CALF',cx:78,cy:459,
   d:'M64,434 Q56,458 60,478 Q66,496 80,500 Q94,498 99,484 Q100,460 96,434 Q88,426 76,430 Z'},
  {id:'calf-R',key:'calves',label:'CALF',cx:122,cy:459,
   d:'M136,434 Q144,458 140,478 Q134,496 120,500 Q106,498 101,484 Q100,460 104,434 Q112,426 124,430 Z'},
  /* Rotator Cuff — scapular face, beneath trapezius and rear delt */
  {id:'rcuff-L',key:'rotatorcuff',label:'R.CUFF',cx:57,cy:116,
   d:'M50,88 Q40,98 40,118 Q42,138 56,146 Q70,142 76,126 Q74,108 64,90 Z'},
  {id:'rcuff-R',key:'rotatorcuff',label:'R.CUFF',cx:143,cy:116,
   d:'M150,88 Q160,98 160,118 Q158,138 144,146 Q130,142 124,126 Q126,108 136,90 Z'},
  /* Neck posterior — splenius and semispinalis, back view */
  {id:'neck-back',key:'neck',label:'NECK',cx:100,cy:70,
   d:'M92,63 Q86,67 86,74 Q88,80 100,80 Q112,80 114,74 Q114,67 108,63 Q104,59 100,59 Q96,59 92,63 Z'},
];

/* ══════════════════════════════════════════════════════
   SKELETON DATA — 200×520 coordinate system
   Each entry: tag, class, optional d (path) or a (attrs for ellipse/line)
   ══════════════════════════════════════════════════════ */
const SKELETON_FRONT = [
  // ─── SKULL ───────────────────────────────────────────────────
  {tag:'ellipse',cls:'bone-outline',a:{cx:100,cy:37,rx:21,ry:26}},
  // Zygomatic arches (cheekbones)
  {tag:'path',cls:'bone-rib',d:'M80,44 Q77,47 79,51'},
  {tag:'path',cls:'bone-rib',d:'M120,44 Q123,47 121,51'},
  // Mandible (jaw)
  {tag:'path',cls:'bone-outline',d:'M83,54 Q83,64 100,67 Q117,64 117,54'},
  // Supraorbital ridges (brow bones)
  {tag:'path',cls:'bone-rib',d:'M87,31 Q93,28 100,29 Q107,28 113,31'},
  // Nasal bones
  {tag:'path',cls:'bone-spine',d:'M99,30 L99,42 L101,42 L101,30 Z'},
  // Mental protuberance (chin)
  {tag:'path',cls:'bone-rib',d:'M96,63 Q100,66 104,63'},

  // ─── CERVICAL SPINE (C1–C7) ──────────────────────────────────
  {tag:'path',cls:'bone-spine',d:'M99,65 L99,80 L101,80 L101,65 Z'},
  {tag:'path',cls:'bone-rib',d:'M96,68 L104,68 M96,72 L104,72 M96,76 L104,76'},

  // ─── CLAVICLES ───────────────────────────────────────────────
  {tag:'path',cls:'bone-line',d:'M99,80 C90,78 72,79 52,87'},
  {tag:'path',cls:'bone-line',d:'M101,80 C110,78 128,79 148,87'},
  // Sternoclavicular joints
  {tag:'ellipse',cls:'bone-outline',a:{cx:99,cy:80,rx:3,ry:3}},
  // Acromioclavicular joints (AC joints)
  {tag:'ellipse',cls:'bone-outline',a:{cx:52,cy:87,rx:3,ry:3}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:148,cy:87,rx:3,ry:3}},

  // ─── STERNUM ─────────────────────────────────────────────────
  {tag:'path',cls:'bone-spine',d:'M98,80 L98,164 L102,164 L102,80 Z'},
  // Sternal angle of Louis (T4 landmark)
  {tag:'path',cls:'bone-rib',d:'M96,91 L104,91'},
  // Sternal body segments
  {tag:'path',cls:'bone-rib',d:'M97,102 L103,102 M97,114 L103,114 M97,128 L103,128 M97,142 L103,142'},
  // Xiphoid process
  {tag:'path',cls:'bone-spine',d:'M99,164 Q99,171 100,173 Q101,171 101,164'},

  // ─── RIBS (12 pairs) ─────────────────────────────────────────
  {tag:'path',cls:'bone-rib',d:'M99,85 Q83,84 63,93'},  {tag:'path',cls:'bone-rib',d:'M101,85 Q117,84 137,93'},
  {tag:'path',cls:'bone-rib',d:'M99,93 Q79,93 59,105'}, {tag:'path',cls:'bone-rib',d:'M101,93 Q121,93 141,105'},
  {tag:'path',cls:'bone-rib',d:'M99,101 Q77,102 57,116'},{tag:'path',cls:'bone-rib',d:'M101,101 Q123,102 143,116'},
  {tag:'path',cls:'bone-rib',d:'M99,110 Q76,112 57,127'},{tag:'path',cls:'bone-rib',d:'M101,110 Q124,112 143,127'},
  {tag:'path',cls:'bone-rib',d:'M99,119 Q77,122 60,137'},{tag:'path',cls:'bone-rib',d:'M101,119 Q123,122 140,137'},
  {tag:'path',cls:'bone-rib',d:'M99,128 Q80,133 67,147'},{tag:'path',cls:'bone-rib',d:'M101,128 Q120,133 133,147'},
  {tag:'path',cls:'bone-rib',d:'M99,137 Q84,143 76,157'},{tag:'path',cls:'bone-rib',d:'M101,137 Q116,143 124,157'},
  // Costal cartilage arch (ribs 8–10 converge)
  {tag:'path',cls:'bone-rib',d:'M76,159 Q88,168 100,170 Q112,168 124,159'},
  // Floating ribs 11–12 (short, no cartilage)
  {tag:'path',cls:'bone-rib',d:'M77,160 Q68,164 63,172'},
  {tag:'path',cls:'bone-rib',d:'M123,160 Q132,164 137,172'},

  // ─── THORACIC + LUMBAR SPINE ─────────────────────────────────
  {tag:'path',cls:'bone-spine',d:'M98,85 L98,248 L102,248 L102,85 Z'},
  // Thoracic transverse processes (T1–T12)
  {tag:'path',cls:'bone-rib',d:'M96,95 L104,95 M96,108 L104,108 M96,121 L104,121 M96,134 L104,134 M96,147 L104,147 M96,160 L104,160'},
  // Lumbar vertebrae (L1–L5) — wider, blockier
  {tag:'path',cls:'bone-rib',d:'M94,172 L106,172 M94,184 L106,184 M94,196 L106,196 M94,208 L106,208 M94,220 L106,220'},

  // ─── SHOULDER JOINTS ─────────────────────────────────────────
  // Humeral head (ball of glenohumeral joint) L
  {tag:'ellipse',cls:'bone-outline',a:{cx:46,cy:90,rx:9,ry:8}},
  // Humeral head R
  {tag:'ellipse',cls:'bone-outline',a:{cx:154,cy:90,rx:9,ry:8}},

  // ─── HUMERUS ─────────────────────────────────────────────────
  {tag:'path',cls:'bone-line',d:'M46,98 Q37,138 30,192'},
  {tag:'path',cls:'bone-line',d:'M154,98 Q163,138 170,192'},

  // ─── ELBOW JOINT ─────────────────────────────────────────────
  // Medial epicondyle L
  {tag:'ellipse',cls:'bone-outline',a:{cx:36,cy:192,rx:4,ry:4}},
  // Lateral epicondyle L
  {tag:'ellipse',cls:'bone-outline',a:{cx:25,cy:190,rx:3,ry:3}},
  // Medial epicondyle R
  {tag:'ellipse',cls:'bone-outline',a:{cx:164,cy:192,rx:4,ry:4}},
  // Lateral epicondyle R
  {tag:'ellipse',cls:'bone-outline',a:{cx:175,cy:190,rx:3,ry:3}},

  // ─── RADIUS + ULNA ───────────────────────────────────────────
  // L: radius (lateral)
  {tag:'path',cls:'bone-line',d:'M26,193 Q20,242 20,289'},
  // L: ulna (medial, slightly posterior)
  {tag:'path',cls:'bone-spine',d:'M36,194 Q31,244 30,292'},
  // R: radius
  {tag:'path',cls:'bone-line',d:'M174,193 Q180,242 180,289'},
  // R: ulna
  {tag:'path',cls:'bone-spine',d:'M164,194 Q169,244 170,292'},

  // ─── WRIST — CARPAL BONES (2 rows of 4) ─────────────────────
  // L proximal row (scaphoid, lunate, triquetrum, pisiform)
  {tag:'path',cls:'bone-outline',d:'M19,291 Q23,289 29,290 Q35,291 38,293 Q36,298 29,298 Q22,298 19,295 Z'},
  // L distal row (trapezium, trapezoid, capitate, hamate)
  {tag:'path',cls:'bone-outline',d:'M18,299 Q23,297 30,298 Q37,298 40,301 Q38,306 30,306 Q21,306 18,303 Z'},
  // R proximal row
  {tag:'path',cls:'bone-outline',d:'M181,291 Q177,289 171,290 Q165,291 162,293 Q164,298 171,298 Q178,298 181,295 Z'},
  // R distal row
  {tag:'path',cls:'bone-outline',d:'M182,299 Q177,297 170,298 Q163,298 160,301 Q162,306 170,306 Q179,306 182,303 Z'},

  // ─── METACARPALS (5 per hand) ────────────────────────────────
  // L hand
  {tag:'path',cls:'bone-line',d:'M21,306 L20,321'},{tag:'path',cls:'bone-line',d:'M25,306 L24,322'},
  {tag:'path',cls:'bone-line',d:'M30,306 L29,323'},{tag:'path',cls:'bone-line',d:'M34,306 L35,322'},
  {tag:'path',cls:'bone-line',d:'M38,306 L40,321'},
  // R hand
  {tag:'path',cls:'bone-line',d:'M179,306 L180,321'},{tag:'path',cls:'bone-line',d:'M175,306 L176,322'},
  {tag:'path',cls:'bone-line',d:'M170,306 L171,323'},{tag:'path',cls:'bone-line',d:'M166,306 L165,322'},
  {tag:'path',cls:'bone-line',d:'M162,306 L160,321'},

  // ─── PHALANGES (proximal + middle rows) ──────────────────────
  // L proximal phalanges
  {tag:'path',cls:'bone-rib',d:'M20,322 L20,327 M24,323 L24,328 M29,324 L29,329 M35,323 L35,328 M40,322 L40,327'},
  // L middle phalanges
  {tag:'path',cls:'bone-rib',d:'M20,328 L20,331 M24,329 L24,332 M29,330 L29,333 M35,329 L35,332 M40,328 L40,331'},
  // R proximal phalanges
  {tag:'path',cls:'bone-rib',d:'M180,322 L180,327 M176,323 L176,328 M171,324 L171,329 M165,323 L165,328 M160,322 L160,327'},
  // R middle phalanges
  {tag:'path',cls:'bone-rib',d:'M180,328 L180,331 M176,329 L176,332 M171,330 L171,333 M165,329 L165,332 M160,328 L160,331'},

  // ─── PELVIS ──────────────────────────────────────────────────
  {tag:'path',cls:'bone-outline',d:'M66,249 Q54,255 52,270 Q54,284 68,288 L100,290 L132,288 Q146,284 148,270 Q146,255 134,249 Q118,244 100,244 Q82,244 66,249 Z'},
  // Iliac crests + wings
  {tag:'path',cls:'bone-rib',d:'M66,249 Q50,245 48,260 Q48,274 62,280'},
  {tag:'path',cls:'bone-rib',d:'M134,249 Q150,245 152,260 Q152,274 138,280'},
  // ASIS (anterior superior iliac spine — hip pointers)
  {tag:'ellipse',cls:'bone-outline',a:{cx:52,cy:252,rx:4,ry:3}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:148,cy:252,rx:4,ry:3}},
  // Pubic symphysis
  {tag:'path',cls:'bone-outline',d:'M92,283 Q96,287 100,288 Q104,287 108,283 Q104,279 100,279 Q96,279 92,283 Z'},
  // Inguinal ligament lines
  {tag:'path',cls:'bone-rib',d:'M52,252 Q64,270 82,278'},
  {tag:'path',cls:'bone-rib',d:'M148,252 Q136,270 118,278'},

  // ─── HIP JOINT ───────────────────────────────────────────────
  // Greater trochanter (lateral hip bump)
  {tag:'ellipse',cls:'bone-outline',a:{cx:60,cy:270,rx:6,ry:5}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:140,cy:270,rx:6,ry:5}},

  // ─── FEMUR ───────────────────────────────────────────────────
  {tag:'path',cls:'bone-line',d:'M78,272 Q75,330 75,394'},
  {tag:'path',cls:'bone-line',d:'M122,272 Q125,330 125,394'},

  // ─── KNEE JOINT ──────────────────────────────────────────────
  // Patella
  {tag:'ellipse',cls:'bone-outline',a:{cx:78,cy:383,rx:6,ry:7}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:122,cy:383,rx:6,ry:7}},
  // Femoral condyles
  {tag:'path',cls:'bone-rib',d:'M70,394 Q74,397 78,398 Q82,397 86,394'},
  {tag:'path',cls:'bone-rib',d:'M114,394 Q118,397 122,398 Q126,397 130,394'},
  // Tibial tuberosity
  {tag:'ellipse',cls:'bone-outline',a:{cx:74,cy:406,rx:3,ry:3}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:126,cy:406,rx:3,ry:3}},
  // Fibula head (lateral, just below knee)
  {tag:'ellipse',cls:'bone-outline',a:{cx:86,cy:406,rx:3,ry:3}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:114,cy:406,rx:3,ry:3}},

  // ─── TIBIA + FIBULA ──────────────────────────────────────────
  // Tibia L (medial, larger)
  {tag:'path',cls:'bone-line',d:'M72,397 Q70,452 69,505'},
  // Fibula L (lateral, slender)
  {tag:'path',cls:'bone-spine',d:'M85,408 Q88,457 87,505'},
  // Tibia R
  {tag:'path',cls:'bone-line',d:'M128,397 Q130,452 131,505'},
  // Fibula R
  {tag:'path',cls:'bone-spine',d:'M115,408 Q112,457 113,505'},

  // ─── ANKLE MORTISE ───────────────────────────────────────────
  // Medial malleolus L (tibia tip)
  {tag:'ellipse',cls:'bone-outline',a:{cx:70,cy:484,rx:4,ry:4}},
  // Lateral malleolus L (fibula tip — sits ~6mm lower)
  {tag:'ellipse',cls:'bone-outline',a:{cx:87,cy:487,rx:4,ry:4}},
  // Medial malleolus R
  {tag:'ellipse',cls:'bone-outline',a:{cx:130,cy:484,rx:4,ry:4}},
  // Lateral malleolus R
  {tag:'ellipse',cls:'bone-outline',a:{cx:113,cy:487,rx:4,ry:4}},

  // ─── FOOT — TARSAL BONES ─────────────────────────────────────
  // L: Talus (sits atop calcaneus, forms ankle joint)
  {tag:'ellipse',cls:'bone-outline',a:{cx:74,cy:490,rx:7,ry:5}},
  // L: Calcaneus (heel bone, mostly hidden in front view)
  {tag:'path',cls:'bone-outline',d:'M60,494 Q57,502 61,509 Q68,513 76,510 Q80,502 76,494 Q70,490 64,492 Z'},
  // L: Navicular
  {tag:'ellipse',cls:'bone-outline',a:{cx:76,cy:497,rx:5,ry:4}},
  // L: Cuboid
  {tag:'ellipse',cls:'bone-outline',a:{cx:66,cy:499,rx:5,ry:4}},
  // L: Cuneiforms (3 small bones)
  {tag:'path',cls:'bone-rib',d:'M70,500 Q73,498 76,499 Q79,500 82,499 Q79,503 76,503 Q72,503 70,500 Z'},
  // R: Talus
  {tag:'ellipse',cls:'bone-outline',a:{cx:126,cy:490,rx:7,ry:5}},
  // R: Calcaneus
  {tag:'path',cls:'bone-outline',d:'M140,494 Q143,502 139,509 Q132,513 124,510 Q120,502 124,494 Q130,490 136,492 Z'},
  // R: Navicular
  {tag:'ellipse',cls:'bone-outline',a:{cx:124,cy:497,rx:5,ry:4}},
  // R: Cuboid
  {tag:'ellipse',cls:'bone-outline',a:{cx:134,cy:499,rx:5,ry:4}},
  // R: Cuneiforms
  {tag:'path',cls:'bone-rib',d:'M130,500 Q127,498 124,499 Q121,500 118,499 Q121,503 124,503 Q128,503 130,500 Z'},

  // ─── METATARSALS (5 per foot) ────────────────────────────────
  // L foot (angled to match foot arch)
  {tag:'path',cls:'bone-line',d:'M62,502 L60,511'},{tag:'path',cls:'bone-line',d:'M66,503 L65,512'},
  {tag:'path',cls:'bone-line',d:'M71,503 L71,512'},{tag:'path',cls:'bone-line',d:'M76,503 L77,512'},
  {tag:'path',cls:'bone-line',d:'M81,502 L83,511'},
  // R foot
  {tag:'path',cls:'bone-line',d:'M138,502 L140,511'},{tag:'path',cls:'bone-line',d:'M134,503 L135,512'},
  {tag:'path',cls:'bone-line',d:'M129,503 L129,512'},{tag:'path',cls:'bone-line',d:'M124,503 L123,512'},
  {tag:'path',cls:'bone-line',d:'M119,502 L117,511'},
];

const SKELETON_BACK = [
  // ─── SKULL (occipital view) ───────────────────────────────────
  {tag:'ellipse',cls:'bone-outline',a:{cx:100,cy:37,rx:21,ry:26}},
  // External occipital protuberance (inion — midline bump)
  {tag:'ellipse',cls:'bone-outline',a:{cx:100,cy:56,rx:3,ry:2}},
  // Superior nuchal lines (muscle attachment ridges)
  {tag:'path',cls:'bone-rib',d:'M84,52 Q92,55 100,56 Q108,55 116,52'},
  // Mastoid processes (behind ears)
  {tag:'ellipse',cls:'bone-outline',a:{cx:80,cy:46,rx:3,ry:4}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:120,cy:46,rx:3,ry:4}},

  // ─── FULL SPINE (C1–L5, very prominent from back) ────────────
  {tag:'path',cls:'bone-spine',d:'M98,65 L98,310 L102,310 L102,65 Z'},
  // Cervical spinous processes (C2–C7)
  {tag:'path',cls:'bone-rib',d:'M95,68 L105,68 M95,72 L105,72 M95,76 L105,76 M95,80 L105,80 M95,85 L105,85 M95,90 L105,90 M95,95 L105,95'},
  // Thoracic spinous processes (T1–T12) — long, angled inferiorly
  {tag:'path',cls:'bone-rib',d:'M93,100 L107,100 M93,110 L107,110 M93,120 L107,120 M93,130 L107,130 M93,140 L107,140 M93,150 L107,150 M93,160 L107,160 M93,170 L107,170 M93,180 L107,180 M93,190 L107,190 M93,200 L107,200 M93,210 L107,210'},
  // Lumbar spinous processes (L1–L5) — wide, horizontal, most prominent
  {tag:'path',cls:'bone-rib',d:'M90,220 L110,220 M90,230 L110,230 M90,240 L110,240 M90,250 L110,250 M90,260 L110,260'},

  // ─── SCAPULAE (shoulder blades) ──────────────────────────────
  // L scapula body (triangular flat blade)
  {tag:'path',cls:'bone-scapula',d:'M50,92 Q38,114 44,146 Q50,162 68,160 Q83,151 83,122 Q81,100 66,90 Z'},
  // Spine of scapula L (prominent bony ridge crossing blade diagonally)
  {tag:'path',cls:'bone-line',d:'M50,107 Q60,103 70,104 Q78,106 83,110'},
  // Acromion process L (tip of shoulder, most lateral point)
  {tag:'path',cls:'bone-outline',d:'M44,90 Q38,87 36,93 Q38,101 47,101 Q54,99 52,92 Z'},
  // Coracoid process L (just visible)
  {tag:'ellipse',cls:'bone-outline',a:{cx:55,cy:94,rx:4,ry:3}},
  // Glenoid fossa L (shallow socket, lateral aspect)
  {tag:'ellipse',cls:'bone-outline',a:{cx:44,cy:106,rx:5,ry:8}},
  // Medial (vertebral) border L
  {tag:'path',cls:'bone-rib',d:'M51,97 Q51,130 54,158'},
  // Lateral border L
  {tag:'path',cls:'bone-rib',d:'M44,108 Q56,134 66,158'},
  // Inferior angle L
  {tag:'ellipse',cls:'bone-outline',a:{cx:66,cy:158,rx:4,ry:3}},
  // Subscapular fossa lines (shows structure of blade)
  {tag:'path',cls:'bone-rib',d:'M56,110 Q58,125 60,144 M62,108 Q64,126 66,148'},

  // R scapula body
  {tag:'path',cls:'bone-scapula',d:'M150,92 Q162,114 156,146 Q150,162 132,160 Q117,151 117,122 Q119,100 134,90 Z'},
  // Spine of scapula R
  {tag:'path',cls:'bone-line',d:'M150,107 Q140,103 130,104 Q122,106 117,110'},
  // Acromion process R
  {tag:'path',cls:'bone-outline',d:'M156,90 Q162,87 164,93 Q162,101 153,101 Q146,99 148,92 Z'},
  // Coracoid process R
  {tag:'ellipse',cls:'bone-outline',a:{cx:145,cy:94,rx:4,ry:3}},
  // Glenoid fossa R
  {tag:'ellipse',cls:'bone-outline',a:{cx:156,cy:106,rx:5,ry:8}},
  // Medial border R
  {tag:'path',cls:'bone-rib',d:'M149,97 Q149,130 146,158'},
  // Lateral border R
  {tag:'path',cls:'bone-rib',d:'M156,108 Q144,134 134,158'},
  // Inferior angle R
  {tag:'ellipse',cls:'bone-outline',a:{cx:134,cy:158,rx:4,ry:3}},
  // Subscapular fossa R
  {tag:'path',cls:'bone-rib',d:'M144,110 Q142,125 140,144 M138,108 Q136,126 134,148'},

  // ─── CLAVICLES (from back — softer view) ─────────────────────
  {tag:'path',cls:'bone-line',d:'M99,80 C90,78 70,79 50,88'},
  {tag:'path',cls:'bone-line',d:'M101,80 C110,78 130,79 150,88'},

  // ─── RIBS (from back — posterior angles visible) ─────────────
  {tag:'path',cls:'bone-rib',d:'M99,85 Q83,84 63,94'}, {tag:'path',cls:'bone-rib',d:'M101,85 Q117,84 137,94'},
  {tag:'path',cls:'bone-rib',d:'M99,93 Q79,93 59,106'},{tag:'path',cls:'bone-rib',d:'M101,93 Q121,93 141,106'},
  {tag:'path',cls:'bone-rib',d:'M99,101 Q77,102 57,116'},{tag:'path',cls:'bone-rib',d:'M101,101 Q123,102 143,116'},
  {tag:'path',cls:'bone-rib',d:'M99,110 Q76,112 57,128'},{tag:'path',cls:'bone-rib',d:'M101,110 Q124,112 143,128'},
  {tag:'path',cls:'bone-rib',d:'M99,119 Q77,122 60,138'},{tag:'path',cls:'bone-rib',d:'M101,119 Q123,122 140,138'},
  {tag:'path',cls:'bone-rib',d:'M99,128 Q80,133 67,148'},{tag:'path',cls:'bone-rib',d:'M101,128 Q120,133 133,148'},
  {tag:'path',cls:'bone-rib',d:'M99,137 Q84,143 76,158'},{tag:'path',cls:'bone-rib',d:'M101,137 Q116,143 124,158'},

  // ─── HUMERUS (from back) ─────────────────────────────────────
  {tag:'path',cls:'bone-line',d:'M43,96 Q35,136 28,193'},
  {tag:'path',cls:'bone-line',d:'M157,96 Q165,136 172,193'},

  // ─── ELBOW (olecranon process — very prominent from back) ────
  {tag:'path',cls:'bone-outline',d:'M30,192 Q25,196 27,202 Q33,206 40,202 Q42,196 38,192 Z'},
  {tag:'path',cls:'bone-outline',d:'M170,192 Q175,196 173,202 Q167,206 160,202 Q158,196 162,192 Z'},

  // ─── RADIUS + ULNA (from back) ───────────────────────────────
  {tag:'path',cls:'bone-line',d:'M29,204 Q23,246 23,290'},
  {tag:'path',cls:'bone-spine',d:'M38,204 Q34,248 32,294'},
  {tag:'path',cls:'bone-line',d:'M171,204 Q177,246 177,290'},
  {tag:'path',cls:'bone-spine',d:'M162,204 Q166,248 168,294'},
  // Ulnar styloid (medial wrist bump, prominent from back)
  {tag:'ellipse',cls:'bone-outline',a:{cx:32,cy:294,rx:3,ry:3}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:168,cy:294,rx:3,ry:3}},

  // ─── WRIST + HAND SKELETON (from back / dorsal) ──────────────
  // L proximal carpals
  {tag:'path',cls:'bone-outline',d:'M21,292 Q25,290 31,291 Q37,292 40,294 Q38,299 31,299 Q23,299 21,296 Z'},
  // L distal carpals
  {tag:'path',cls:'bone-outline',d:'M20,300 Q25,298 32,299 Q39,299 41,302 Q39,307 32,307 Q23,307 20,304 Z'},
  // L metacarpals (5)
  {tag:'path',cls:'bone-line',d:'M22,307 L21,323'},{tag:'path',cls:'bone-line',d:'M26,307 L25,324'},
  {tag:'path',cls:'bone-line',d:'M31,307 L31,325'},{tag:'path',cls:'bone-line',d:'M36,307 L36,324'},
  {tag:'path',cls:'bone-line',d:'M40,307 L42,323'},
  // L phalanges
  {tag:'path',cls:'bone-rib',d:'M21,324 L21,328 M25,325 L25,329 M31,326 L31,330 M36,325 L36,329 M42,324 L42,328'},
  {tag:'path',cls:'bone-rib',d:'M21,329 L21,332 M25,330 L25,333 M31,331 L31,334 M36,330 L36,333 M42,329 L42,332'},

  // R proximal carpals
  {tag:'path',cls:'bone-outline',d:'M179,292 Q175,290 169,291 Q163,292 160,294 Q162,299 169,299 Q177,299 179,296 Z'},
  // R distal carpals
  {tag:'path',cls:'bone-outline',d:'M180,300 Q175,298 168,299 Q161,299 159,302 Q161,307 168,307 Q177,307 180,304 Z'},
  // R metacarpals
  {tag:'path',cls:'bone-line',d:'M178,307 L179,323'},{tag:'path',cls:'bone-line',d:'M174,307 L175,324'},
  {tag:'path',cls:'bone-line',d:'M169,307 L169,325'},{tag:'path',cls:'bone-line',d:'M164,307 L164,324'},
  {tag:'path',cls:'bone-line',d:'M160,307 L158,323'},
  // R phalanges
  {tag:'path',cls:'bone-rib',d:'M179,324 L179,328 M175,325 L175,329 M169,326 L169,330 M164,325 L164,329 M158,324 L158,328'},
  {tag:'path',cls:'bone-rib',d:'M179,329 L179,332 M175,330 L175,333 M169,331 L169,334 M164,330 L164,333 M158,329 L158,332'},

  // ─── PELVIS (from back) ───────────────────────────────────────
  {tag:'path',cls:'bone-outline',d:'M64,248 Q50,254 48,270 Q50,286 66,292 L100,294 L134,292 Q150,286 152,270 Q150,254 136,248 Q118,243 100,243 Q82,243 64,248 Z'},
  // Sacrum (triangular bone visible from back)
  {tag:'path',cls:'bone-outline',d:'M88,248 Q84,264 84,282 Q90,298 100,300 Q110,298 116,282 Q116,264 112,248 Q106,243 100,243 Q94,243 88,248 Z'},
  // Sacral foramina (4 pairs — openings for sacral nerves)
  {tag:'path',cls:'bone-rib',d:'M92,258 L95,258 M105,258 L108,258 M92,267 L95,267 M105,267 L108,267 M92,276 L95,276 M105,276 L108,276 M92,285 L95,285 M105,285 L108,285'},
  // Coccyx (tailbone, 3–4 fused segments)
  {tag:'path',cls:'bone-spine',d:'M98,300 Q99,308 100,314 Q101,308 102,300 Z'},
  {tag:'path',cls:'bone-rib',d:'M97,304 L103,304 M97,309 L103,309'},
  // Iliac crests
  {tag:'path',cls:'bone-rib',d:'M66,248 Q50,244 48,260 Q48,276 60,282 Q70,286 78,282'},
  {tag:'path',cls:'bone-rib',d:'M134,248 Q150,244 152,260 Q152,276 140,282 Q130,286 122,282'},
  // PSIS (posterior superior iliac spine — the "dimples of Venus")
  {tag:'ellipse',cls:'bone-outline',a:{cx:88,cy:250,rx:4,ry:3}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:112,cy:250,rx:4,ry:3}},
  // Sacroiliac joint lines
  {tag:'path',cls:'bone-rib',d:'M88,252 Q88,268 90,280'},
  {tag:'path',cls:'bone-rib',d:'M112,252 Q112,268 110,280'},

  // ─── FEMUR (from back) ───────────────────────────────────────
  {tag:'path',cls:'bone-line',d:'M82,272 Q78,330 78,396'},
  {tag:'path',cls:'bone-line',d:'M118,272 Q122,330 122,396'},

  // ─── KNEE + POPLITEAL (from back) ────────────────────────────
  // Medial/lateral condyles visible
  {tag:'path',cls:'bone-rib',d:'M71,396 Q75,400 79,401 Q83,400 87,396'},
  {tag:'path',cls:'bone-rib',d:'M113,396 Q117,400 121,401 Q125,400 129,396'},
  // Fibula head
  {tag:'ellipse',cls:'bone-outline',a:{cx:87,cy:406,rx:4,ry:4}},
  {tag:'ellipse',cls:'bone-outline',a:{cx:113,cy:406,rx:4,ry:4}},

  // ─── TIBIA + FIBULA (from back) ──────────────────────────────
  {tag:'path',cls:'bone-line',d:'M73,400 Q71,454 70,508'},
  {tag:'path',cls:'bone-line',d:'M127,400 Q129,454 130,508'},
  {tag:'path',cls:'bone-spine',d:'M87,408 Q89,460 89,508'},
  {tag:'path',cls:'bone-spine',d:'M113,408 Q111,460 111,508'},

  // ─── ANKLE (from back — lateral malleolus more distal + prominent) ─
  // Lateral malleolus L (fibula tip — hangs ~6mm lower from back)
  {tag:'ellipse',cls:'bone-outline',a:{cx:89,cy:490,rx:5,ry:5}},
  // Medial malleolus L (tibia)
  {tag:'ellipse',cls:'bone-outline',a:{cx:70,cy:488,rx:4,ry:4}},
  // Lateral malleolus R
  {tag:'ellipse',cls:'bone-outline',a:{cx:111,cy:490,rx:5,ry:5}},
  // Medial malleolus R
  {tag:'ellipse',cls:'bone-outline',a:{cx:130,cy:488,rx:4,ry:4}},

  // ─── HEEL + FOOT (from back — calcaneus dominates) ───────────
  // Calcaneus L (large posterior heel bone, very visible from behind)
  {tag:'path',cls:'bone-outline',d:'M59,494 Q51,502 54,512 Q63,518 76,516 Q84,510 82,500 Q76,492 66,492 Z'},
  // Calcaneus R
  {tag:'path',cls:'bone-outline',d:'M141,494 Q149,502 146,512 Q137,518 124,516 Q116,510 118,500 Q124,492 134,492 Z'},
  // Talus L (sits on calcaneus, articulates with tibia)
  {tag:'ellipse',cls:'bone-outline',a:{cx:75,cy:492,rx:7,ry:4}},
  // Talus R
  {tag:'ellipse',cls:'bone-outline',a:{cx:125,cy:492,rx:7,ry:4}},
  // Achilles tendon groove (visible as medial notch on calcaneus)
  {tag:'path',cls:'bone-rib',d:'M71,490 Q74,498 77,502'},
  {tag:'path',cls:'bone-rib',d:'M129,490 Q126,498 123,502'},
  // Calcaneal tuberosity ridges
  {tag:'path',cls:'bone-rib',d:'M60,506 Q67,510 75,510'},
  {tag:'path',cls:'bone-rib',d:'M140,506 Q133,510 125,510'},
];

/* ══════════════════════════════════════════════════════
   SVG DOM REFERENCES & STATE
   ══════════════════════════════════════════════════════ */
const NS  = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('bodySvg');
const bodyLayer      = document.getElementById('bodyLayer');
const skeletonLayer    = document.getElementById('skeletonLayer');
const muscleLayer    = document.getElementById('muscleLayer');
const overlayLayer   = document.getElementById('overlayLayer');
const detailLayer    = document.getElementById('detailLayer');
const labelLayer     = document.getElementById('labelLayer');
const detailLabelLayer = document.getElementById('detailLabelLayer');
const rippleLayer    = document.getElementById('rippleLayer');
const tooltip        = document.getElementById('tooltip');
const ttName         = document.getElementById('ttName');
const statusEl       = document.getElementById('statusText');
const statusHint     = document.getElementById('statusHint');

let currentView    = 'front';
let selectedKey    = null;
let selectedSubEl  = null;   // currently tapped sub-muscle element
let isZoomed       = false;
let isDetailMode   = false;
let musclesVisible = true;
let bonesVisible   = false;
let sideFilter     = 'both';
let vbRaf          = null;
let currentVB      = {x:0,y:0,w:200,h:520};

const isMobile = navigator.maxTouchPoints > 0;
const svgWrap  = document.getElementById('svgWrap');

/* ── TOUCH STATE ── */
let touchPinching  = false;
let touchStartDist = 0;
let touchStartVB   = null;
let touchStartMid  = null;
let panStart       = null;
let panStartVB     = null;
let panMoved       = false;

/* ══════════════════════════════════════════════════════
   SVG BUILDER
   ══════════════════════════════════════════════════════ */
function mkEl(tag, attrs) {
  const e = document.createElementNS(NS, tag);
  if(attrs) for(const[k,v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}

function buildBody() {
  bodyLayer.innerHTML = '';
  BODY.forEach(p => {
    const a = {...(p.a||{}), class:'body-base'};
    if(p.d) a.d = p.d;
    bodyLayer.appendChild(mkEl(p.tag||'path', a));
  });
}

function buildMuscles(muscles) {
  muscleLayer.innerHTML = '';
  labelLayer.innerHTML  = '';
  overlayLayer.innerHTML = '';

  muscles.forEach(m => {
    const path = mkEl('path', {
      d: m.d, class: 'muscle-path',
      'data-key': m.key, 'data-id': m.id,
    });
    path.addEventListener('mouseenter', e => onEnter(e, m));
    path.addEventListener('mouseleave', ()  => onLeave(m));
    path.addEventListener('mousemove',  e => onMove(e));
    path.addEventListener('click',      e => { e.stopPropagation(); onClick(m); });
    muscleLayer.appendChild(path);

    const lbl = mkEl('text', {
      x: m.cx, y: m.cy, class: 'muscle-label',
      'data-id': m.id, 'data-key': m.key,
    });
    lbl.textContent = m.label || '';
    labelLayer.appendChild(lbl);
  });

  // Add 3D gradient overlays after DOM is ready
  requestAnimationFrame(() => addMuscleGradients());
}

/* ══════════════════════════════════════════════════════
   SKELETON BUILDER
   ══════════════════════════════════════════════════════ */
function buildSkeleton(bones) {
  skeletonLayer.innerHTML = '';
  skeletonLayer.style.opacity = bonesVisible ? '1' : '0';
  bones.forEach(b => {
    let el;
    if(b.tag === 'ellipse') {
      el = mkEl('ellipse', {...b.a, class: b.cls});
    } else {
      el = mkEl('path', {d: b.d, class: b.cls});
    }
    skeletonLayer.appendChild(el);
  });
}

/* ══════════════════════════════════════════════════════
   3D MUSCLE GRADIENTS
   Creates radial gradient per muscle to simulate
   a rounded lit muscle belly look
   ══════════════════════════════════════════════════════ */
function addMuscleGradients() {
  let defs = svg.querySelector('defs');
  if(!defs) { defs = mkEl('defs'); svg.insertBefore(defs, svg.firstChild); }

  // Remove old muscle gradients (all three prefix families)
  defs.querySelectorAll('[id^="mgo_"],[id^="mgs_"],[id^="mge_"]').forEach(e => e.remove());
  overlayLayer.innerHTML = '';

  muscleLayer.querySelectorAll('.muscle-path').forEach(path => {
    let bb;
    try { bb = path.getBBox(); } catch(e) { return; }
    if(!bb || bb.width === 0) return;

    const id   = path.getAttribute('data-id');
    const key  = path.getAttribute('data-key');
    const d    = path.getAttribute('d');
    const W    = bb.width, H = bb.height;
    const cx   = bb.x + W * 0.5;
    const cy   = bb.y + H * 0.5;
    const maxD = Math.max(W, H);

    // ── 1. Specular highlight ────────────────────────────────────────
    // Tight, bright peak near the top — simulates studio light on wet fascia.
    // Offset slightly left of center for a natural directional feel.
    const gradId = `mgo_${id}`;
    const grad = mkEl('radialGradient', {
      id: gradId,
      cx: bb.x + W * 0.40,
      cy: bb.y + H * 0.20,
      r:  maxD * 0.44,
      gradientUnits: 'userSpaceOnUse',
    });
    grad.innerHTML = `
      <stop offset="0%"   stop-color="rgba(255,248,250,0.90)"/>
      <stop offset="16%"  stop-color="rgba(255,195,205,0.68)"/>
      <stop offset="46%"  stop-color="rgba(230,80,98,0.30)" />
      <stop offset="100%" stop-color="rgba(165,22,38,0)"    />
    `;
    defs.appendChild(grad);

    // ── 2. Deep shadow ───────────────────────────────────────────────
    // Concentrated at the lower belly — adds volume and lifts the top half.
    const shadId = `mgs_${id}`;
    const shadGrad = mkEl('radialGradient', {
      id: shadId,
      cx: cx,
      cy: bb.y + H * 0.85,
      r:  maxD * 0.58,
      gradientUnits: 'userSpaceOnUse',
    });
    shadGrad.innerHTML = `
      <stop offset="0%"   stop-color="rgba(6,0,3,0.56)" />
      <stop offset="38%"  stop-color="rgba(6,0,3,0.24)" />
      <stop offset="100%" stop-color="rgba(0,0,0,0)"    />
    `;
    defs.appendChild(shadGrad);

    // ── 3. Edge contour / ambient occlusion ─────────────────────────
    // Transparent in the center, darkening only at the perimeter.
    // This simulates the muscle belly curving away from the viewer at its
    // edges — the single biggest trick for making flat shapes read as 3D.
    const edgeId = `mge_${id}`;
    const edgeGrad = mkEl('radialGradient', {
      id: edgeId,
      cx: cx, cy: cy,
      r:  maxD * 0.80,
      gradientUnits: 'userSpaceOnUse',
    });
    edgeGrad.innerHTML = `
      <stop offset="0%"   stop-color="rgba(0,0,0,0)"    />
      <stop offset="55%"  stop-color="rgba(0,0,0,0)"    />
      <stop offset="80%"  stop-color="rgba(0,0,0,0.14)" />
      <stop offset="100%" stop-color="rgba(0,0,0,0.40)" />
    `;
    defs.appendChild(edgeGrad);

    // ── Overlay paths (one per gradient layer) ──────────────────────
    [
      { fill: `url(#${gradId})`, 'data-key': key },   // specular
      { fill: `url(#${shadId})`, 'data-key': key },   // shadow
      { fill: `url(#${edgeId})`, 'data-key': key },   // edge AO
    ].forEach(attrs => {
      overlayLayer.appendChild(mkEl('path', {
        d,
        'pointer-events': 'none',
        class: 'muscle-overlay',
        ...attrs,
      }));
    });
  });
}

/* ══════════════════════════════════════════════════════
   INTERACTIONS
   ══════════════════════════════════════════════════════ */
function getSiblings(key) {
  return muscleLayer.querySelectorAll(`.muscle-path[data-key="${key}"]`);
}
function getSiblingLabels(key) {
  return labelLayer.querySelectorAll(`text[data-key="${key}"]`);
}

/* ── SIDE FILTER HELPERS ── */
function isSideMatch(id, side) {
  if(!id || side === 'both') return true;
  // Bilateral IDs end in '-L' or '-R'; midline muscles (abs, trap, lback…) always show
  if(id.endsWith('-L')) return side === 'L';
  if(id.endsWith('-R')) return side === 'R';
  return true;
}

function isBilateral(key) {
  const ids = [...getSiblings(key)].map(p => p.getAttribute('data-id'));
  return ids.some(id => id.endsWith('-L')) && ids.some(id => id.endsWith('-R'));
}

// Returns only the paths that match the current sideFilter
function getFilteredSiblings(key) {
  return [...getSiblings(key)].filter(p => isSideMatch(p.getAttribute('data-id'), sideFilter));
}

// Apply selected/dimmed classes respecting the current sideFilter
function applySelectionHighlight(key) {
  getSiblings(key).forEach(p => {
    const id = p.getAttribute('data-id');
    if(isSideMatch(id, sideFilter)) p.classList.add('selected');
    else                             p.classList.add('parent-dimmed');
  });
  getSiblingLabels(key).forEach(l => {
    const id = l.getAttribute('data-id');
    if(isSideMatch(id, sideFilter)) l.classList.add('label-active');
  });
}

function updateSidePicker() {
  const picker = document.getElementById('sidePicker');
  picker.style.display = (selectedKey && isBilateral(selectedKey)) ? 'flex' : 'none';
  document.getElementById('sideAll').classList.toggle('active', sideFilter === 'both');
  document.getElementById('sideL').classList.toggle('active',   sideFilter === 'L');
  document.getElementById('sideR').classList.toggle('active',   sideFilter === 'R');
}

function setSide(side) {
  if(!selectedKey) return;
  sideFilter = side;
  updateSidePicker();

  // Re-apply muscle highlight classes
  muscleLayer.querySelectorAll('.muscle-path')
    .forEach(p => p.classList.remove('selected','hovered','parent-dimmed'));
  overlayLayer.querySelectorAll('.muscle-overlay')
    .forEach(o => o.classList.remove('parent-dimmed'));
  labelLayer.querySelectorAll('text')
    .forEach(l => l.classList.remove('label-active','dimmed-lbl'));

  applySelectionHighlight(selectedKey);
  zoomTo(selectedKey);

  // Rebuild detail view for the new side
  if(isDetailMode) {
    detailLayer.innerHTML = '';
    detailLabelLayer.innerHTML = '';
    isDetailMode = false;
    document.getElementById('subInfoBanner').classList.remove('visible');
    setTimeout(() => showDetail(selectedKey), 60);
  }
}

function onEnter(e, m) {
  if(isDetailMode) return;
  if(isZoomed && selectedKey !== m.key) return;
  getSiblings(m.key).forEach(p => p.classList.add('hovered'));
  getSiblingLabels(m.key).forEach(l => l.classList.add('label-active'));
  const d = MUSCLES[m.key];
  ttName.textContent = d ? d.name : m.key;
  tooltip.classList.add('show');
  if(!selectedKey && statusEl) statusEl.textContent = (d ? d.name.toUpperCase() : m.key) + ' — CLICK TO INSPECT';
}

function onLeave(m) {
  if(isDetailMode) return;
  getSiblings(m.key).forEach(p => { if(selectedKey !== m.key) p.classList.remove('hovered'); });
  getSiblingLabels(m.key).forEach(l => { if(selectedKey !== m.key) l.classList.remove('label-active'); });
  tooltip.classList.remove('show');
  if(!selectedKey && statusEl) statusEl.textContent = 'HOVER A REGION TO INSPECT';
}

function onMove(e) {
  tooltip.style.left = (e.clientX + 16) + 'px';
  tooltip.style.top  = (e.clientY - 10) + 'px';
}

function onClick(m) {
  if(selectedKey === m.key && isZoomed) { clearSelection(); return; }
  selectMuscle(m);
}

function selectMuscle(m) {
  // Reset visual state WITHOUT touching zoom (avoids the jarring zoom-out)
  isDetailMode  = false;
  sideFilter    = 'both';
  selectedSubEl = null;
  document.getElementById('stickySubName').textContent = '';

  muscleLayer.querySelectorAll('.muscle-path')
    .forEach(p => p.classList.remove('selected','hovered','parent-dimmed'));
  overlayLayer.querySelectorAll('.muscle-overlay')
    .forEach(o => o.classList.remove('parent-dimmed'));
  labelLayer.querySelectorAll('text')
    .forEach(l => l.classList.remove('label-active','dimmed-lbl'));
  detailLayer.innerHTML = '';
  detailLabelLayer.innerHTML = '';
  document.getElementById('subInfoBanner').classList.remove('visible');
  document.getElementById('subHoverName').textContent = '';
  document.getElementById('subHoverDesc').textContent = '';
  document.getElementById('subLegend').innerHTML = '';

  selectedKey = m.key;

  applySelectionHighlight(m.key);
  updateSidePicker();

  // Animate directly to the new muscle — no intermediate zoom-out
  zoomTo(m.key);
  showInfo(m.key);

  // After zoom animation starts, render sub-muscles
  setTimeout(() => showDetail(m.key), 280);

  const d = MUSCLES[m.key];
  if(statusEl) statusEl.textContent = (d ? d.name.toUpperCase() : m.key) + ' — SELECTED';
  if(statusHint) statusHint.textContent = isMobile ? 'TAP SUB-MUSCLE · ESC TO CLEAR' : 'HOVER SUB-MUSCLES · ESC TO CLEAR';
}

function clearSelection() {
  selectedKey = null;
  sideFilter  = 'both';
  document.getElementById('sidePicker').style.display = 'none';
  muscleLayer.querySelectorAll('.muscle-path').forEach(p => p.classList.remove('selected','hovered','parent-dimmed'));
  overlayLayer.querySelectorAll('.muscle-overlay').forEach(p => p.classList.remove('parent-dimmed'));
  labelLayer.querySelectorAll('text').forEach(l => l.classList.remove('label-active','dimmed-lbl'));
  hideDetail();
  zoomReset();
  hideInfo();
  if(statusEl) statusEl.textContent = 'HOVER A REGION TO INSPECT';
  if(statusHint) statusHint.textContent = 'CLICK TO LOCK · ESC TO CLEAR';
}

/* ══════════════════════════════════════════════════════
   SUB-MUSCLE DETAIL VIEW
   ══════════════════════════════════════════════════════ */
function showDetail(key) {
  const subs = SUBMUSCLES[key];
  if(!subs) return;

  const filtered = subs.filter(s => (s.view === currentView || s.view === 'both') && isSideMatch(s.id, sideFilter));
  if(!filtered.length) return;

  isDetailMode = true;

  // Dim parent muscles and their overlays
  getSiblings(key).forEach(p => p.classList.add('parent-dimmed'));
  overlayLayer.querySelectorAll(`.muscle-overlay[data-key="${key}"]`)
    .forEach(o => o.classList.add('parent-dimmed'));

  // Dim all labels
  labelLayer.querySelectorAll('text').forEach(l => l.classList.add('dimmed-lbl'));

  detailLayer.innerHTML = '';
  detailLabelLayer.innerHTML = '';

  let defs = svg.querySelector('defs');

  // Build sub-muscle legend chips
  const legend = document.getElementById('subLegend');
  legend.innerHTML = '';
  const seenNames = new Set();

  filtered.forEach((s, idx) => {
    const pal = SUB_PALETTE[s.colorIdx % SUB_PALETTE.length];

    // Build legend chip (once per unique sub-muscle name)
    if(!seenNames.has(s.name)) {
      seenNames.add(s.name);
      const chip = document.createElement('div');
      chip.className = 'sub-legend-chip';
      chip.innerHTML = `<span class="sub-legend-dot" style="background:${pal.base};box-shadow:0 0 4px ${pal.base}55"></span>${s.name}`;
      legend.appendChild(chip);
    }

    // Gradient for this sub-muscle
    const gradId = `sg_${s.id}`;
    defs.querySelectorAll(`#${gradId}`).forEach(e => e.remove());

    const grad = mkEl('radialGradient', {
      id: gradId, cx: s.cx, cy: s.cy,
      r: Math.max(s.rx, s.ry) * 1.35,
      gradientUnits: 'userSpaceOnUse',
    });
    grad.innerHTML = `
      <stop offset="0%"   stop-color="${pal.light}"/>
      <stop offset="48%"  stop-color="${pal.base}" stop-opacity="0.52"/>
      <stop offset="100%" stop-color="${pal.base}" stop-opacity="0.04"/>
    `;
    defs.appendChild(grad);

    // Shadow gradient
    const shadId = `sgs_${s.id}`;
    defs.querySelectorAll(`#${shadId}`).forEach(e => e.remove());
    const shadGrad = mkEl('radialGradient', {
      id: shadId,
      cx: s.cx, cy: s.cy + s.ry * 0.5,
      r: Math.max(s.rx, s.ry) * 0.9,
      gradientUnits: 'userSpaceOnUse',
    });
    shadGrad.innerHTML = `
      <stop offset="0%"   stop-color="rgba(0,0,0,0.28)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    `;
    defs.appendChild(shadGrad);

    // Sub-muscle shape — path if anatomical outline exists, else ellipse fallback
    const transform = s.angle ? `rotate(${s.angle},${s.cx},${s.cy})` : '';
    let el, shadEl;
    if (s.d) {
      // Anatomical path shape
      el = mkEl('path', {
        d: s.d,
        fill: `url(#${gradId})`,
        stroke: pal.base,
        'stroke-width': '0.65',
        'stroke-opacity': '0.85',
        class: 'sub-muscle',
        'data-subname': s.name,
        'data-subdesc': s.desc,
        'data-colorbase': pal.base,
        style: `opacity:0; --sc:${pal.base}`,
      });
      shadEl = mkEl('path', {
        d: s.d,
        fill: `url(#${shadId})`,
        'pointer-events': 'none',
        style: 'opacity:0',
      });
    } else {
      // Fallback ellipse
      el = mkEl('ellipse', {
        cx: s.cx, cy: s.cy, rx: s.rx, ry: s.ry,
        fill: `url(#${gradId})`,
        stroke: pal.base,
        'stroke-width': '0.65',
        'stroke-opacity': '0.85',
        transform,
        class: 'sub-muscle',
        'data-subname': s.name,
        'data-subdesc': s.desc,
        'data-colorbase': pal.base,
        style: `opacity:0; --sc:${pal.base}`,
      });
      shadEl = mkEl('ellipse', {
        cx: s.cx, cy: s.cy + s.ry*0.05, rx: s.rx*0.9, ry: s.ry*0.7,
        fill: `url(#${shadId})`,
        'pointer-events': 'none',
        transform,
        style: 'opacity:0',
      });
    }

    el.addEventListener('mouseenter', () => onSubEnter(s, pal));
    el.addEventListener('mouseleave', () => onSubLeave());
    el.addEventListener('mousemove',  e  => onMove(e));
    el.addEventListener('click',      e  => { e.stopPropagation(); onSubClick(s, pal, el); });
    el.addEventListener('touchend',   e  => {
      if(touchPinching || panMoved) return;
      e.preventDefault(); e.stopPropagation();
      onSubClick(s, pal, el);
    }, {passive: false});

    detailLayer.appendChild(el);
    detailLayer.appendChild(shadEl);

    // Staggered fade-in
    const delay = idx * 55 + 40;
    setTimeout(() => {
      el.style.transition = 'opacity 0.38s ease';
      el.style.opacity = '1';
      shadEl.style.transition = 'opacity 0.38s ease';
      shadEl.style.opacity = '1';
    }, delay);

    // Label
    // Abbreviate: "Vastus Lateralis" → "V.LAT"
    const words = s.name.split(' ');
    const abbr = words.length === 1
      ? s.name.substring(0,5).toUpperCase()
      : words.map(w => w[0]).join('.').toUpperCase();

    const lbl = mkEl('text', {
      x: s.cx,
      y: s.cy + 1,
      class: 'sub-muscle-label',
      style: 'opacity:0',
    });
    lbl.textContent = abbr;
    detailLabelLayer.appendChild(lbl);

    setTimeout(() => {
      lbl.style.transition = 'opacity 0.38s ease';
      lbl.style.opacity = '1';
    }, delay + 120);
  });

  // Show the banner
  document.getElementById('subInfoBanner').classList.add('visible');
  document.getElementById('subHoverName').textContent = isMobile ? 'TAP A SUB-MUSCLE' : 'HOVER A SUB-MUSCLE';
  document.getElementById('subHoverName').style.color = 'var(--text3)';
  document.getElementById('subHoverDesc').textContent = 'Each color represents a distinct muscle head or bundle within this group.';
}

function hideDetail() {
  isDetailMode  = false;
  selectedSubEl = null;
  document.getElementById('stickySubName').textContent = '';
  detailLayer.innerHTML       = '';
  detailLabelLayer.innerHTML  = '';
  document.getElementById('subInfoBanner').classList.remove('visible');
  document.getElementById('subHoverName').textContent = '';
  document.getElementById('subHoverDesc').textContent = '';
  document.getElementById('subLegend').innerHTML = '';
}

function onSubClick(s, pal, el) {
  // Tap same sub again → deselect, zoom back to group
  if(selectedSubEl === el) {
    el.classList.remove('sub-selected');
    selectedSubEl = null;
    document.getElementById('stickySubName').textContent = '';
    document.getElementById('subHoverName').textContent  = isMobile ? 'TAP A SUB-MUSCLE' : 'HOVER A SUB-MUSCLE';
    document.getElementById('subHoverName').style.color  = 'var(--text3)';
    document.getElementById('subHoverDesc').textContent  = 'Each color represents a distinct muscle head or bundle within this group.';
    if(statusHint) statusHint.textContent = isMobile ? 'TAP SUB-MUSCLE · ESC TO CLEAR' : 'HOVER SUB-MUSCLES · ESC TO CLEAR';
    zoomTo(selectedKey);
    return;
  }
  // Swap selection
  if(selectedSubEl) selectedSubEl.classList.remove('sub-selected');
  selectedSubEl = el;
  el.classList.add('sub-selected');

  // Lock info into banner
  document.getElementById('subHoverName').textContent = s.name.toUpperCase();
  document.getElementById('subHoverName').style.color = pal.base;
  document.getElementById('subHoverDesc').textContent = s.desc || '';
  document.getElementById('stickySubName').textContent = '↳ ' + s.name.toUpperCase();
  if(statusHint) statusHint.textContent = 'TAP AGAIN TO ZOOM OUT · ESC TO CLEAR';

  // Zoom tightly to this specific sub-muscle
  const bb  = el.getBBox();
  const pad = Math.max(4, Math.max(bb.width, bb.height) * 0.22);
  const r   = svg.getBoundingClientRect();
  const dAR = r.width > 0 ? r.width / r.height : 200/520;
  let tx = bb.x - pad, ty = bb.y - pad;
  let tw = bb.width + pad*2, th = bb.height + pad*2;
  const tAR = tw/th;
  if(tAR > dAR) { const ex = (tw/dAR) - th; ty -= ex/2; th += ex; }
  else          { const ex = (th*dAR) - tw;  tx -= ex/2; tw += ex; }
  animateVB({x:tx, y:ty, w:tw, h:th}, 360);
}

function onSubEnter(s, pal) {
  // Always show tooltip; only override panel text if no sub is locked
  if(!selectedSubEl || selectedSubEl.getAttribute('data-subname') !== s.name) {
    document.getElementById('subHoverName').textContent = s.name.toUpperCase();
    document.getElementById('subHoverName').style.color = pal.base;
    document.getElementById('subHoverDesc').textContent = s.desc || '';
  }
  ttName.innerHTML = `<span style="color:${pal.base}">${s.name}</span>`;
  tooltip.classList.add('show');
}

function onSubLeave() {
  tooltip.classList.remove('show');
  if(selectedSubEl) return; // keep locked content
  document.getElementById('subHoverName').textContent = isMobile ? 'TAP A SUB-MUSCLE' : 'HOVER A SUB-MUSCLE';
  document.getElementById('subHoverName').style.color = 'var(--text3)';
  document.getElementById('subHoverDesc').textContent = 'Each color represents a distinct muscle head or bundle within this group.';
}

/* ══════════════════════════════════════════════════════
   VIEWBOX ZOOM
   ══════════════════════════════════════════════════════ */
function zoomTo(key) {
  // Use only the side-filtered paths for bounding-box calculation
  const paths = getFilteredSiblings(key);
  if(!paths.length) return;

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  paths.forEach(p => {
    const bb = p.getBBox();
    minX = Math.min(minX, bb.x);
    minY = Math.min(minY, bb.y);
    maxX = Math.max(maxX, bb.x + bb.width);
    maxY = Math.max(maxY, bb.y + bb.height);
  });

  const mw = maxX - minX;
  const mh = maxY - minY;

  // Proportional padding: 18 % of the larger dimension, clamped 10–30
  const pad = Math.max(10, Math.min(30, Math.max(mw, mh) * 0.18));

  let tx = minX - pad, ty = minY - pad;
  let tw = mw + pad * 2;
  let th = mh + pad * 2;

  // Use actual SVG display aspect ratio so the zoom matches the viewport
  const rect = svg.getBoundingClientRect();
  const dispAR = (rect.width > 0 && rect.height > 0) ? rect.width / rect.height : 200 / 520;
  const tAR    = tw / th;

  if(tAR > dispAR) { const extra = (tw / dispAR) - th; ty -= extra / 2; th += extra; }
  else             { const extra = (th * dispAR) - tw; tx -= extra / 2; tw += extra; }

  animateVB({x:tx, y:ty, w:tw, h:th}, 480);
  isZoomed = true;
  document.getElementById('zoomOutBtn').classList.add('show');
}

function zoomReset() {
  animateVB({x:0, y:0, w:200, h:520}, 380);
  isZoomed = false;
  document.getElementById('zoomOutBtn').classList.remove('show');
}

function animateVB(to, dur) {
  if(vbRaf) cancelAnimationFrame(vbRaf);
  const from  = {...currentVB};
  const start = performance.now();
  (function step(ts) {
    const t    = Math.min((ts - start) / dur, 1);
    const ease = t < .5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2;
    currentVB.x = from.x + (to.x - from.x) * ease;
    currentVB.y = from.y + (to.y - from.y) * ease;
    currentVB.w = from.w + (to.w - from.w) * ease;
    currentVB.h = from.h + (to.h - from.h) * ease;
    svg.setAttribute('viewBox', `${currentVB.x} ${currentVB.y} ${currentVB.w} ${currentVB.h}`);
    if(t < 1) vbRaf = requestAnimationFrame(step);
  })(performance.now());
}

/* ══════════════════════════════════════════════════════
   INFO PANEL
   ══════════════════════════════════════════════════════ */
function showInfo(key) {
  const d = MUSCLES[key];
  if(!d) return;
  document.getElementById('infoIdle').style.display = 'none';
  const c = document.getElementById('infoContent');
  c.classList.remove('show');
  void c.offsetWidth;
  c.classList.add('show');
  document.getElementById('iRegion').textContent = d.region;
  document.getElementById('iType').textContent   = d.type;
  document.getElementById('iName').textContent   = d.name;
  document.getElementById('iSci').textContent    = d.sci;
  document.getElementById('iDesc').textContent   = d.desc;
  document.getElementById('iFunc').textContent   = d.func;
  document.getElementById('iOrigin').textContent = d.origin;
  document.getElementById('iInsert').textContent = d.insert;
  document.getElementById('iTags').innerHTML =
    (d.tags||[]).map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('infoPanel').scrollTop = 0;
  // Sticky orientation header
  document.getElementById('stickyName').textContent    = d.name.toUpperCase();
  document.getElementById('stickySubName').textContent = '';
  document.getElementById('stickyHdr').classList.add('show');
}

function hideInfo() {
  document.getElementById('infoIdle').style.display = '';
  document.getElementById('infoContent').classList.remove('show');
  document.getElementById('stickyHdr').classList.remove('show');
  document.getElementById('stickyName').textContent    = '';
  document.getElementById('stickySubName').textContent = '';
}

/* ══════════════════════════════════════════════════════
   VIEW TOGGLE
   ══════════════════════════════════════════════════════ */
function setView(view) {
  currentView = view;
  clearSelection();
  document.getElementById('btnFront').classList.toggle('active', view === 'front');
  document.getElementById('btnBack').classList.toggle('active',  view === 'back');
  buildBody();
  buildSkeleton(view === 'front' ? SKELETON_FRONT : SKELETON_BACK);
  buildMuscles(view === 'front' ? FRONT : BACK);
  // If the panel is already visible (e.g. user toggles front/back after opening
  // anatomy directly), re-run gradients now that the new muscles are painted.
  const viewEl = document.getElementById('view-anatomy');
  if (viewEl && viewEl.classList.contains('active')) {
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        addMuscleGradients();
      });
    });
  }
}

function findMuscleView(key) {
  if(FRONT.some(m => m.key === key)) return 'front';
  if(BACK.some(m => m.key === key)) return 'back';
  return null;
}

function selectKey(key) {
  if(!key) return;
  const view = findMuscleView(key);
  if(view) setView(view);
  if(!getSiblings(key).length) return;
  selectMuscle({ key });
  history.replaceState(null, '', `#muscle=${encodeURIComponent(key)}`);
}

function applyHashSelection() {
  const hash = window.location.hash.slice(1);
  if(!hash) return;
  const params = new URLSearchParams(hash);
  const muscleKey = params.get('muscle');
  if(!muscleKey) return;
  selectKey(decodeURIComponent(muscleKey));
}

window.addEventListener('hashchange', applyHashSelection);

/* ── LAYER TOGGLE ── */
function toggleLayer(layer) {
  if(layer === 'muscles') {
    musclesVisible = !musclesVisible;
    muscleLayer.style.opacity   = musclesVisible ? '1' : '0';
    overlayLayer.style.opacity  = musclesVisible ? '1' : '0';
    labelLayer.style.opacity    = musclesVisible ? '1' : '0';
    detailLayer.style.opacity   = musclesVisible ? '1' : '0';
    detailLabelLayer.style.opacity = musclesVisible ? '1' : '0';
    document.getElementById('layerMuscles').classList.toggle('on', musclesVisible);
  } else if(layer === 'bones') {
    bonesVisible = !bonesVisible;
    skeletonLayer.style.opacity = bonesVisible ? '1' : '0';
    document.getElementById('layerBones').classList.toggle('on', bonesVisible);
  }
}

/* ── KEYBOARD SHORTCUTS ── */
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') clearSelection();
  if((e.key === 'f' || e.key === 'F') && !e.target.matches('input,textarea')) setView('front');
  if((e.key === 'b' || e.key === 'B') && !e.target.matches('input,textarea')) setView('back');
});

/* ── CLICK BODY TO DESELECT ── */
svg.addEventListener('click', e => {
  if(!e.target.closest('.muscle-path') && !e.target.closest('.sub-muscle') && selectedKey) clearSelection();
});

/* ══════════════════════════════════════════════════════
   PINCH-TO-ZOOM + SINGLE-FINGER PAN (MOBILE)
   ══════════════════════════════════════════════════════ */
function t2dist(t) {
  return Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
}
function clientToVB(cx, cy) {
  const r = svg.getBoundingClientRect();
  return {
    x: currentVB.x + (cx - r.left) / r.width  * currentVB.w,
    y: currentVB.y + (cy - r.top)  / r.height * currentVB.h,
  };
}

svgWrap.addEventListener('touchstart', e => {
  if(e.touches.length === 2) {
    touchPinching  = true;
    panStart       = null;
    touchStartDist = t2dist(e.touches);
    touchStartVB   = {...currentVB};
    const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    touchStartMid  = clientToVB(mx, my);
    e.preventDefault();
  } else if(e.touches.length === 1) {
    panStart   = {x: e.touches[0].clientX, y: e.touches[0].clientY};
    panStartVB = {...currentVB};
    panMoved   = false;
  }
}, {passive: false});

svgWrap.addEventListener('touchmove', e => {
  if(e.touches.length === 2 && touchPinching) {
    e.preventDefault();
    const newDist = t2dist(e.touches);
    // spread = zoom-in (smaller VB); pinch = zoom-out (larger VB)
    const scale   = Math.max(0.1, touchStartDist / newDist);
    const rawW    = touchStartVB.w * scale;

    // No hard upper cap — snap to full view on touchend instead
    const newW    = Math.max(15, rawW);
    const r       = svg.getBoundingClientRect();
    const dAR     = r.width > 0 ? r.width / r.height : 200/520;
    const newH    = newW / dAR;
    const mx      = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const my      = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    const fx      = (mx - r.left) / r.width;
    const fy      = (my - r.top)  / r.height;
    currentVB     = {x: touchStartMid.x - fx*newW, y: touchStartMid.y - fy*newH, w: newW, h: newH};
    svg.setAttribute('viewBox', `${currentVB.x} ${currentVB.y} ${currentVB.w} ${currentVB.h}`);
    isZoomed = rawW < 185;
    document.getElementById('zoomOutBtn').classList.toggle('show', isZoomed);

  } else if(e.touches.length === 1 && panStart && !touchPinching) {
    const dx = e.touches[0].clientX - panStart.x;
    const dy = e.touches[0].clientY - panStart.y;
    if(!panMoved && Math.hypot(dx, dy) < 7) return;
    panMoved = true;
    e.preventDefault();
    const r      = svg.getBoundingClientRect();
    currentVB.x  = panStartVB.x - dx * (panStartVB.w / r.width);
    currentVB.y  = panStartVB.y - dy * (panStartVB.h / r.height);
    svg.setAttribute('viewBox', `${currentVB.x} ${currentVB.y} ${currentVB.w} ${currentVB.h}`);
  }
}, {passive: false});

svgWrap.addEventListener('touchend', e => {
  // Lift one finger during pinch → stop pinching (small delay to block stray tap)
  if(e.touches.length < 2) setTimeout(() => { touchPinching = false; }, 80);

  if(e.touches.length === 0) {
    panStart = null;
    // KEY FIX: if user has pinched out far enough, snap cleanly to full view.
    // This replaces the hard cap that previously caused zoom-out to get stuck.
    if(currentVB.w >= 170) {
      zoomReset();
    }
  }
});


    /* ── Expose button handlers to global scope ── */
    // All onclick="..." attributes in the injected HTML look up functions on window.
    // Since setView / toggleLayer / setSide / clearSelection are defined inside
    // _initViewer(), they are not on window by default — wire them up here.
    window.setView     = setView;
    window.toggleLayer = toggleLayer;
    window.setSide     = setSide;
    window.clearSelection = clearSelection;

    /* ── Init ── */
    setView('front');

    /* ── Re-run gradients when anatomy view first becomes visible ──
       At boot the view is display:none so getBBox() returns 0 for every
       muscle path and addMuscleGradients() bails out early, leaving the
       overlay layer empty (no specular / shadow / edge shading).
       This observer fires the first time the active class is added and
       re-computes all gradients now that the SVG has real dimensions.     */
    (function() {
      const viewEl = document.getElementById('view-anatomy');
      if (!viewEl) return;
      let _done = false;
      const obs = new MutationObserver(function() {
        if (_done || !viewEl.classList.contains('active')) return;
        _done = true;
        // Double rAF: first tick lets the browser do layout,
        // second tick lets paint happen so getBBox() is accurate.
        requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            addMuscleGradients();
          });
        });
      });
      obs.observe(viewEl, { attributes: true, attributeFilter: ['class'] });
    })();

    // Expose selector so openAnatomyView can pre-select a muscle.
    // selectKey() handles switching to the correct front/back view before
    // highlighting, so back muscles (glutes, lats, traps, hamstrings, etc.) work too.
    window._anatomySelectMuscle = function(key) {
      if (!key) return;
      selectKey(key);
    };
  }

  /* ── Override openAnatomyView ───────────────────────────── */
  // Called from muscle modal "click for advanced view" button.
  // Was: location.href = 'anatomy.html#muscle=key'
  // Now: goTo('anatomy') then select the muscle inline.
  function _hookOpenAnatomyView() {
    window.openAnatomyView = function(event) {
      if (event) event.stopPropagation();
      const btn = event
        ? event.currentTarget
        : document.getElementById('mAnatomyBtn');
      if (!btn) return;
      const key = btn.dataset.muscleKey;
      // Close the muscle modal before navigating
      if (typeof closeModal === 'function') closeModal();
      if (typeof goTo === 'function') goTo('anatomy');
      if (key) {
        // Give goTo time to finish its transition before selecting.
        // 160ms is enough for CSS transitions while still feeling instant to the user.
        setTimeout(function() {
          if (typeof window._anatomySelectMuscle === 'function')
            window._anatomySelectMuscle(key);
        }, 160);
      }
    };
  }

  /* ── Boot ───────────────────────────────────────────────── */
  function _boot() {
    _injectHTML();
    _initViewer();
    _hookOpenAnatomyView();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _boot);
  } else {
    _boot();
  }

})();
