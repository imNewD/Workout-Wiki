// GRND Anatomy Viewer — SPA module
// Auto-injected into index.html via <script src="src/anatomy.js"></script>
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
  top: 0; left: 0; right: 0; bottom: 56px;
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
.viewer-panel{flex:0 0 clamp(280px,38vw,460px);max-width:clamp(280px,38vw,460px);display:flex;flex-direction:column;border-right:1px solid var(--border);background:var(--bg);position:relative;overflow:hidden}
@media(max-width:767px){.viewer-panel{width:100%;max-width:100%;flex:none;height:var(--viewer-h,42vh);height:var(--viewer-h,clamp(38svh,42svh,48svh))}}


/* Dot grid background */
.viewer-panel::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,var(--grid-dot) 1px,transparent 1px);background-size:18px 18px;pointer-events:none;z-index:0}

/* Controls */
.view-controls{padding:clamp(7px,2vw,10px) clamp(8px,2.5vw,12px);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:clamp(5px,1.5vw,8px);flex-shrink:0;position:relative;z-index:2;background:var(--bg)}
.view-toggle{display:flex;background:var(--bg3);border-radius:7px;border:1px solid var(--border2);overflow:hidden}
.vtbtn{font-family:var(--mono);font-size:clamp(0.52rem,1.5vw,0.6rem);letter-spacing:0.1em;text-transform:uppercase;padding:clamp(6px,1.5vw,7px) clamp(9px,3.5vw,16px);color:var(--text3);transition:all var(--trans);background:transparent}
.vtbtn.active{background:var(--accent);color:#fff}
.vtbtn.mode-on{border-color:var(--accent);color:var(--accent);box-shadow:inset 0 0 0 1px rgba(230,57,70,0.25)}

/* SVG area */
.svg-wrap{flex:1;display:flex;align-items:center;justify-content:center;padding:0;position:relative;z-index:1;overflow:hidden;touch-action:none}
#bodySvg{width:100%;height:100%;max-width:100%;max-height:100%;display:block;transition:filter .20s ease}

/* Scan-lines overlay */
.scanlines{position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(to bottom,transparent,transparent 3px,rgba(0,0,0,0.022) 3px,rgba(0,0,0,0.022) 4px);z-index:3}

/* Zoom-out button */
.zoom-out-btn{position:absolute;bottom:14px;right:12px;z-index:10;font-family:var(--mono);font-size:0.56rem;letter-spacing:0.08em;text-transform:uppercase;padding:6px 12px;border:1px solid var(--accent);color:var(--accent);border-radius:6px;background:rgba(230,57,70,0.08);transition:all var(--trans);opacity:0;pointer-events:none}
.zoom-out-btn.show{opacity:1;pointer-events:all}
.zoom-out-btn:hover{background:rgba(230,57,70,0.20)}
/* Home button — desktop only, bottom-left of svg-wrap */
.anatomy-home-btn{position:absolute;bottom:14px;left:12px;z-index:10;font-family:var(--mono);font-size:0.56rem;letter-spacing:0.08em;text-transform:uppercase;padding:6px 12px;border:1px solid var(--border2);color:var(--text3);border-radius:6px;background:var(--bg3);transition:all var(--trans);display:flex;align-items:center;gap:6px;cursor:pointer}
.anatomy-home-btn:hover{border-color:var(--border);color:var(--text);background:var(--bg2)}
@media(max-width:767px){.anatomy-home-btn{display:none}}
.zoom-controls{display:flex;gap:8px;align-items:center}
.zoom-button{font-family:var(--mono);font-size:0.65rem;letter-spacing:0.08em;text-transform:none;padding:6px 10px;border:1px solid var(--border2);border-radius:8px;background:var(--bg3);color:var(--text3);cursor:pointer;transition:all var(--trans)}
.zoom-button:hover{border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.08)}

/* ── SVG ELEMENT STYLES ── */
.body-base{fill:var(--body-fill);stroke:var(--body-stroke);stroke-width:0.7;transition:fill var(--trans)}
.muscle-path{
  fill:var(--muscle-default);
  stroke:var(--muscle-stroke);
  stroke-width:1.15;
  cursor:pointer;
  transition:fill .18s,stroke .18s,filter .18s,opacity .25s,stroke-width .14s;
  filter:drop-shadow(0 1px 4px rgba(0,0,0,0.55));
}
.muscle-path:hover,.muscle-path.hovered{fill:var(--muscle-hover);stroke:var(--muscle-stroke-h);stroke-width:1.25;filter:drop-shadow(0 2px 8px rgba(220,55,70,0.45)) drop-shadow(0 1px 4px rgba(0,0,0,0.50))}
.muscle-path.selected{fill:var(--muscle-active);stroke:rgba(238,68,82,0.99);stroke-width:1.35;animation:musclePulse 2.2s ease-in-out infinite}
.muscle-path.parent-dimmed{opacity:0.10!important;pointer-events:none!important;filter:none!important;animation:none!important}

.muscle-label{fill:var(--text3);font-family:var(--mono);font-size:5.5px;letter-spacing:0.03em;pointer-events:none;transition:fill .18s,opacity .25s;dominant-baseline:middle;text-anchor:middle}
.label-active{fill:var(--accent) !important}
.muscle-label.dimmed-lbl{opacity:0!important}

@keyframes musclePulse{
  0%,100%{filter:drop-shadow(0 0 4px rgba(230,57,70,.50)) drop-shadow(0 1px 4px rgba(0,0,0,0.48))}
  50%{filter:drop-shadow(0 0 10px rgba(230,57,70,.82)) drop-shadow(0 1px 4px rgba(0,0,0,0.48))}
}

/* ── MUSCLE SEPARATION GROOVES (between heads / bellies) ── */
.muscle-groove{
  fill:none;
  stroke:rgba(0,0,0,0.28);
  stroke-width:0.8;
  stroke-linecap:round;
  pointer-events:none;
}
[data-theme="light"] .muscle-groove{stroke:rgba(0,0,0,0.14)}

/* ══════════════════════════════════════════════════════════
   REALISTIC ANATOMICAL RENDER MODE  ·  data-anatomy-real="1"
   Swaps the schematic theme-tint for a true anatomy-plate look:
   myoglobin-red muscle bellies, visible fascicle striations,
   deep inter-muscular grooves, and a connective-tissue body.
   Intentionally theme-independent — real flesh isn't recoloured.
   ══════════════════════════════════════════════════════════ */
[data-anatomy-real="1"] .body-base{fill:#ece2cd;stroke:#cbb992;stroke-width:0.6}
[data-anatomy-real="1"] .muscle-path{
  fill:#9d2026;
  stroke:#5a0f13;
  stroke-width:0.45;
  filter:drop-shadow(0.4px 0.8px 0.7px rgba(28,3,5,0.50));
  transition:fill .15s,filter .15s,stroke .15s;
}
[data-anatomy-real="1"] .muscle-path:hover,
[data-anatomy-real="1"] .muscle-path.hovered{
  fill:#bf282e;stroke:#7c161b;
  filter:drop-shadow(0.4px 1px 1.4px rgba(28,3,5,0.55)) brightness(1.10) saturate(1.12);
}
[data-anatomy-real="1"] .muscle-path.selected{
  fill:#cf3138;stroke:#8a191f;
  filter:drop-shadow(0 0 3px rgba(207,49,56,0.5));
  animation:none;
}
/* Lit belly + form-shadow overlays carry the volumetric rounding */
[data-anatomy-real="1"] .mus-hi{opacity:1}
[data-anatomy-real="1"] .mus-shadow{opacity:1}
/* Fascicle striations — the cue that makes flesh read as muscle */
[data-anatomy-real="1"] .fascicle{stroke:rgba(56,8,10,0.50)!important;stroke-width:0.55!important}
/* Deeper inter-muscular separation */
[data-anatomy-real="1"] .muscle-groove{stroke:rgba(26,3,5,0.62);stroke-width:1}
/* Ink-dark labels stay legible on crimson */
[data-anatomy-real="1"] .muscle-label{fill:rgba(28,6,6,0.62)}
/* Render-mode toggle button */
.render-mode-btn{
  font-family:var(--mono);font-size:0.5rem;letter-spacing:0.1em;text-transform:uppercase;
  padding:5px 10px;border-radius:6px;border:1px solid var(--border2);
  color:var(--text3);background:var(--bg3);cursor:pointer;transition:all .15s;
  display:inline-flex;align-items:center;gap:5px;flex-shrink:0;white-space:nowrap;
}
.render-mode-btn:hover{border-color:#c0282e;color:#d8585e}
.render-mode-btn.active{border-color:#c0282e;color:#e8d2c0;background:#9d2026;box-shadow:0 0 10px rgba(157,32,38,0.4)}

/* ── SUB-MUSCLE STYLES ── */
.sub-muscle{
  cursor:pointer;
  transition:filter .2s, opacity .12s;
  filter:drop-shadow(0 1px 4px rgba(0,0,0,0.6));
  animation:subFadeIn 0.38s ease var(--di, 0ms) both;
}
.sub-muscle:hover{filter:drop-shadow(0 0 5px var(--sc,#e63946)) drop-shadow(0 1px 3px rgba(0,0,0,0.52));opacity:0.95!important}
.sub-muscle-label{
  font-family:var(--mono);
  font-size:4.8px;
  letter-spacing:0.03em;
  pointer-events:none;
  dominant-baseline:middle;
  text-anchor:middle;
  text-transform:uppercase;
  fill:rgba(255,255,255,0.95);
  paint-order:stroke fill;
  stroke:rgba(0,0,0,0.55);
  stroke-width:2.2px;
  stroke-linejoin:round;
  transition:opacity .3s ease;
  animation:subFadeIn 0.38s ease calc(var(--di, 0ms) + 120ms) both;
}
.sub-muscle-dot{
  pointer-events:none;
  transition:opacity .3s ease;
}
@keyframes subFadeIn{from{opacity:0}to{opacity:1}}
.sub-muscle.sub-selected{
  animation:subPulse 2s ease-in-out infinite;
  opacity:1!important;
}
@keyframes subPulse{
  0%,100%{filter:drop-shadow(0 0 5px var(--sc,#e63946)) drop-shadow(0 1px 3px rgba(0,0,0,0.48))}
  50%{filter:drop-shadow(0 0 10px var(--sc,#e63946)) drop-shadow(0 1px 3px rgba(0,0,0,0.48))}
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
  padding:0;
  background:var(--bg3);
  display:none;
  flex-direction:column;
  animation:slideUp .22s ease;
  overflow:hidden;
}
.sub-info-banner.visible{display:flex !important}

/* ── Sub-group header row ── */
.sub-group-hdr{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:8px 16px;
  border-bottom:1px solid var(--border2);
  gap:8px;
  flex-shrink:0;
  background:var(--bg2);
}
.sub-group-lbl{
  font-family:var(--mono);
  font-size:0.46rem;
  letter-spacing:0.16em;
  text-transform:uppercase;
  color:var(--text3);
}
.sub-group-count{
  font-family:var(--mono);
  font-size:0.44rem;
  letter-spacing:0.10em;
  text-transform:uppercase;
  color:var(--accent);
  padding:2px 8px;
  border:1px solid rgba(230,57,70,0.35);
  border-radius:4px;
  background:rgba(230,57,70,0.07);
  flex-shrink:0;
}

/* ── Legend chips ── */
.sub-info-legend{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
  padding:10px 16px 11px;
  border-bottom:1px solid var(--border2);
  flex-shrink:0;
}
.sub-legend-chip{
  display:flex;
  align-items:center;
  gap:7px;
  font-family:var(--mono);
  font-size:0.50rem;
  letter-spacing:0.07em;
  text-transform:uppercase;
  color:var(--text2);
  padding:5px 10px 5px 5px;
  border-radius:6px;
  border:1px solid var(--border2);
  cursor:pointer;
  transition:border-color .16s,background .16s,color .16s,box-shadow .16s;
  background:var(--bg2);
}
.sub-legend-chip:hover{
  border-color:var(--lc,var(--border2));
  color:var(--text);
  background:var(--bg);
}
.sub-legend-chip.chip-active{
  border-color:var(--lc,var(--accent));
  background:rgba(255,255,255,0.04);
  color:var(--text);
  box-shadow:inset 0 0 0 1px var(--lc,var(--accent));
}
.sub-legend-swatch{
  width:13px;height:13px;border-radius:3px;flex-shrink:0;opacity:0.88;
}

/* ── Sub-hover area ── */
.sub-hover-area{
  padding:11px 16px 14px;
  flex:1;
  display:flex;
  flex-direction:column;
  gap:4px;
  min-height:74px;
}
.sub-hover-name{
  font-family:var(--mono);
  font-size:0.68rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  font-weight:500;
  line-height:1.25;
  transition:color .18s;
  margin:0;
}
.sub-hover-desc{
  font-family:var(--sans);
  font-size:0.78rem;
  color:var(--text2);
  line-height:1.68;
  -webkit-user-select:text;
  user-select:text;
  margin:0;
}

/* ── INFO PANEL ── */
.info-panel{flex:1;overflow-y:auto;overflow-x:hidden;background:var(--bg2);display:flex;flex-direction:column;position:relative;min-width:0;min-height:min(200px,22svh)}
@media(max-width:767px){.info-panel{border-top:1px solid var(--border);min-height:min(160px,18svh)}}

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
.tag-link{cursor:pointer;transition:color .15s,background .15s,border-color .15s}
.tag-link:hover{color:var(--accent);border-color:rgba(230,57,70,0.45);background:rgba(230,57,70,0.09)}
.tag-link:active{background:rgba(230,57,70,0.16)}

/* ── FIBER TYPE BADGE ── */
.badge-fiber{font-family:var(--mono);font-size:0.52rem;letter-spacing:0.08em;text-transform:uppercase;color:#a855f7;padding:3px 8px;border:1px solid rgba(168,85,247,0.40);border-radius:4px;background:rgba(168,85,247,0.07);cursor:default}
.fiber-card{background:rgba(168,85,247,0.06);border:1px solid rgba(168,85,247,0.22);border-radius:8px;padding:11px 14px;margin-top:8px}
.fiber-bar-wrap{display:flex;height:5px;border-radius:3px;overflow:hidden;margin:8px 0 4px;gap:1px}
.fiber-bar-i{background:#a855f7;opacity:0.75;border-radius:3px 0 0 3px}
.fiber-bar-ii{background:rgba(230,57,70,0.75);border-radius:0 3px 3px 0}
.fiber-bar-labels{display:flex;justify-content:space-between;font-family:var(--mono);font-size:0.44rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);margin-bottom:7px}
.fiber-note{font-family:var(--sans);font-size:0.74rem;color:var(--text2);line-height:1.68}


/* ── BONE REGION INTERACTION ── */
.bone-region-hit{fill:transparent;cursor:pointer;pointer-events:all}
.bone-region-path{
  fill:rgba(210,195,165,0.0);
  stroke:transparent;
  stroke-width:1.5;
  cursor:pointer;
  pointer-events:all;
  transition:fill .18s,stroke .18s,filter .18s;
}
.bone-region-path:hover,.bone-region-path.bone-hovered{
  fill:rgba(210,195,165,0.18);
  stroke:rgba(230,215,185,0.75);
  filter:drop-shadow(0 0 6px rgba(220,205,170,0.55));
}
.bone-region-path.bone-selected{
  fill:rgba(210,195,165,0.26);
  stroke:rgba(240,225,195,0.95);
  stroke-width:1.6;
  filter:drop-shadow(0 0 10px rgba(220,205,170,0.75));
  animation:bonePulse 2.4s ease-in-out infinite;
}
@keyframes bonePulse{
  0%,100%{filter:drop-shadow(0 0 6px rgba(220,205,170,0.55))}
  50%{filter:drop-shadow(0 0 16px rgba(240,225,180,0.95)) drop-shadow(0 0 6px rgba(255,240,200,0.4))}
}
.bone-label{
  fill:rgba(220,210,185,0.70);
  font-family:var(--mono);
  font-size:4.8px;
  letter-spacing:0.04em;
  pointer-events:none;
  dominant-baseline:middle;
  text-anchor:middle;
  transition:fill .18s,opacity .25s;
}
.bone-label.bone-label-active{fill:rgba(240,228,200,0.99)!important}
.bone-label.bone-label-dimmed{opacity:0!important}

/* ── BONE INFO PANEL STYLES ── */
.badge-bone-type{font-family:var(--mono);font-size:0.52rem;letter-spacing:0.08em;text-transform:uppercase;color:#d4c58a;padding:3px 8px;border:1px solid rgba(212,197,138,0.40);border-radius:4px;background:rgba(212,197,138,0.07)}
.bone-fact-card{background:rgba(212,197,138,0.06);border:1px solid rgba(212,197,138,0.22);border-radius:8px;padding:11px 14px;margin-top:8px}
.bone-fact-card .bone-fact-label{font-family:var(--mono);font-size:0.48rem;letter-spacing:0.13em;text-transform:uppercase;color:#d4c58a;margin-bottom:5px;display:block}
.bone-fact-card .bone-fact-text{font-family:var(--sans);font-size:0.74rem;color:var(--text2);line-height:1.68}
.bone-joints-row{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.bone-joint-chip{font-family:var(--mono);font-size:0.50rem;letter-spacing:0.07em;text-transform:uppercase;padding:4px 10px;border-radius:5px;background:rgba(212,197,138,0.10);border:1px solid rgba(212,197,138,0.30);color:#d4c58a;cursor:pointer;transition:all .15s}
.bone-joint-chip:hover{background:rgba(212,197,138,0.22);border-color:rgba(212,197,138,0.65)}

/* ── BONE INFO CONTENT ── */
#boneInfoContent{display:none;padding:20px 18px 48px;animation:slideUp .25s ease}
#boneInfoContent.show{display:block}

/* tendon paths — rendered as fibrous cords (band + striations) */
.tendon-path{fill:rgba(74,195,210,0.20);stroke:rgba(74,195,210,0.85);stroke-width:0.8;stroke-linejoin:round;cursor:pointer;transition:fill .18s,stroke .18s,filter .18s}
.tendon-path:hover,.tendon-hovered{fill:rgba(74,195,210,0.42) !important;stroke:rgba(74,195,210,1) !important;filter:drop-shadow(0 0 1.6px rgba(74,195,210,0.85))}
.tendon-selected{fill:rgba(74,195,210,0.52) !important;stroke:#4ac3d2 !important;stroke-width:1.3 !important;filter:drop-shadow(0 0 2px rgba(74,195,210,0.95))}
/* fibre striations — purely decorative, never the pointer target */
.tendon-fiber{fill:none;stroke:rgba(74,195,210,0.55);stroke-width:0.4;stroke-linecap:round;pointer-events:none}
.tendon-fiber-active{stroke:rgba(180,240,248,0.9) !important}
.tendon-label{font-family:var(--mono);font-size:4px;fill:#7fd9e6;text-anchor:middle;dominant-baseline:middle;pointer-events:none;letter-spacing:0.02em;opacity:0;transition:opacity .15s;paint-order:stroke;stroke:rgba(18,18,22,0.9);stroke-width:0.8}
.tendon-label-active{opacity:1 !important;fill:#4ac3d2 !important;font-weight:700}
.badge-tendon-type{font-family:var(--mono);font-size:0.52rem;letter-spacing:0.08em;text-transform:uppercase;color:#4ac3d2;padding:3px 8px;border:1px solid rgba(74,195,210,0.40);border-radius:4px;background:rgba(74,195,210,0.07)}
.tendon-fact-card{background:rgba(74,195,210,0.06);border:1px solid rgba(74,195,210,0.22);border-radius:8px;padding:11px 14px;margin-top:8px}
.tendon-fact-card .tendon-fact-label{font-family:var(--mono);font-size:0.48rem;letter-spacing:0.13em;text-transform:uppercase;color:#4ac3d2;margin-bottom:5px;display:block}
.tendon-fact-card .tendon-fact-text{font-family:var(--sans);font-size:0.74rem;color:var(--text2);line-height:1.68}
.tendon-chip{font-family:var(--mono);font-size:0.50rem;letter-spacing:0.07em;text-transform:uppercase;padding:4px 10px;border-radius:5px;background:rgba(74,195,210,0.10);border:1px solid rgba(74,195,210,0.30);color:#4ac3d2;cursor:pointer;transition:all .15s}
.tendon-chip:hover{background:rgba(74,195,210,0.22);border-color:rgba(74,195,210,0.65)}
#tendonInfoContent{display:none;padding:20px 18px 48px;animation:slideUp .25s ease}
#tendonInfoContent.show{display:block}

/* nerve paths — rendered as branching neural cords (band + axon striations) */
.nerve-path{fill:rgba(168,85,247,0.18);stroke:rgba(168,85,247,0.85);stroke-width:0.8;stroke-linejoin:round;cursor:pointer;transition:fill .18s,stroke .18s,filter .18s}
.nerve-path:hover,.nerve-hovered{fill:rgba(168,85,247,0.42) !important;stroke:rgba(186,120,255,1) !important;filter:drop-shadow(0 0 1.6px rgba(168,85,247,0.85))}
.nerve-selected{fill:rgba(168,85,247,0.52) !important;stroke:#a855f7 !important;stroke-width:1.3 !important;filter:drop-shadow(0 0 2px rgba(168,85,247,0.95))}
/* axon striations — purely decorative, never the pointer target */
.nerve-fiber{fill:none;stroke:rgba(168,85,247,0.55);stroke-width:0.4;stroke-linecap:round;pointer-events:none}
.nerve-fiber-active{stroke:rgba(216,180,254,0.9) !important}
.nerve-label{font-family:var(--mono);font-size:4px;fill:#c4a3f7;text-anchor:middle;dominant-baseline:middle;pointer-events:none;letter-spacing:0.02em;opacity:0;transition:opacity .15s;paint-order:stroke;stroke:rgba(18,18,22,0.9);stroke-width:0.8}
.nerve-label-active{opacity:1 !important;fill:#a855f7 !important;font-weight:700}
.badge-nerve-type{font-family:var(--mono);font-size:0.52rem;letter-spacing:0.08em;text-transform:uppercase;color:#a855f7;padding:3px 8px;border:1px solid rgba(168,85,247,0.40);border-radius:4px;background:rgba(168,85,247,0.07)}
.nerve-fact-card{background:rgba(168,85,247,0.06);border:1px solid rgba(168,85,247,0.22);border-radius:8px;padding:11px 14px;margin-top:8px}
.nerve-fact-card .nerve-fact-label{font-family:var(--mono);font-size:0.48rem;letter-spacing:0.13em;text-transform:uppercase;color:#a855f7;margin-bottom:5px;display:block}
.nerve-fact-card .nerve-fact-text{font-family:var(--sans);font-size:0.74rem;color:var(--text2);line-height:1.68}
.nerve-chip{font-family:var(--mono);font-size:0.50rem;letter-spacing:0.07em;text-transform:uppercase;padding:4px 10px;border-radius:5px;background:rgba(168,85,247,0.10);border:1px solid rgba(168,85,247,0.30);color:#a855f7;cursor:pointer;transition:all .15s}
.nerve-chip:hover{background:rgba(168,85,247,0.22);border-color:rgba(168,85,247,0.65)}
.mfchip.nerves-on{border-color:#a855f7 !important;color:#a855f7 !important;background:rgba(168,85,247,0.08) !important}
#nerveInfoContent{display:none;padding:20px 18px 48px;animation:slideUp .25s ease}
#nerveInfoContent.show{display:block}

/* Wiki link */
.wiki-link{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:0.58rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);border:1px solid var(--border);border-radius:6px;padding:9px 14px;transition:all var(--trans);margin-top:18px;width:100%;justify-content:center}
.wiki-link:hover{color:var(--green);border-color:rgba(42,157,92,0.5);background:rgba(42,157,92,0.05)}

/* ── SYNERGIST / ANTAGONIST CHIPS ── */
.muscle-relation-row{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}
.rel-chip{font-family:var(--mono);font-size:0.5rem;letter-spacing:0.07em;text-transform:uppercase;padding:4px 9px;border-radius:5px;cursor:pointer;transition:all .15s;border:1px solid transparent}
.rel-chip.synergist{background:rgba(52,211,153,0.1);color:#34d399;border-color:rgba(52,211,153,0.28)}
.rel-chip.synergist:hover{background:rgba(52,211,153,0.22);border-color:rgba(52,211,153,0.6)}
.rel-chip.antagonist{background:rgba(251,146,60,0.1);color:#fb923c;border-color:rgba(251,146,60,0.28)}
.rel-chip.antagonist:hover{background:rgba(251,146,60,0.22);border-color:rgba(251,146,60,0.6)}
/* Synergist / antagonist glow on the SVG body */
.muscle-path.synergist-hi{opacity:1!important;filter:drop-shadow(0 0 4px rgba(52,211,153,0.7))!important}
.muscle-path.antagonist-hi{opacity:1!important;filter:drop-shadow(0 0 4px rgba(251,146,60,0.65))!important}

/* ── INJURY CARDS ── */
.injury-card{background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:11px 13px;margin-bottom:8px}
.injury-card:last-child{margin-bottom:0}
.injury-header{display:flex;align-items:center;gap:8px;margin-bottom:5px}
.injury-name{font-family:var(--mono);font-size:0.58rem;letter-spacing:0.06em;color:var(--text);flex:1}
.injury-sev{font-family:var(--mono);font-size:0.44rem;letter-spacing:0.1em;text-transform:uppercase;padding:2px 7px;border-radius:3px}
.injury-sev.mild{color:#34d399;background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.25)}
.injury-sev.moderate{color:#fbbf24;background:rgba(251,191,36,0.12);border:1px solid rgba(251,191,36,0.25)}
.injury-sev.severe{color:#f87171;background:rgba(248,113,113,0.12);border:1px solid rgba(248,113,113,0.3)}
.injury-desc{font-family:var(--sans);font-size:0.73rem;color:var(--text3);line-height:1.65}

/* ── STRETCH CARDS ── */
.stretch-card{background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:11px 13px;margin-bottom:8px;display:flex;gap:10px;align-items:flex-start}
.stretch-card:last-child{margin-bottom:0}
.stretch-icon{font-size:1rem;flex-shrink:0;margin-top:1px;opacity:0.7}
.stretch-body{flex:1;min-width:0}
.stretch-name{font-family:var(--mono);font-size:0.56rem;letter-spacing:0.06em;color:var(--text);margin-bottom:4px}
.stretch-desc{font-family:var(--sans);font-size:0.73rem;color:var(--text3);line-height:1.65}

/* ── TOUCH HIT TARGET HELPER ── */
.sub-hit{fill:transparent;cursor:pointer;pointer-events:all}

/* ── DOUBLE-TAP ZOOM RESET RING ── */
@keyframes tapRing{0%{r:6;opacity:.8}100%{r:20;opacity:0}}
.tap-ring-anim{animation:tapRing .4s ease-out forwards;pointer-events:none;fill:none;stroke:var(--accent);stroke-width:1.5}

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
[data-anatomy-lite="1"] .viewer-panel::before,
[data-anatomy-lite="1"] .scanlines{display:none!important}
[data-anatomy-lite="1"] .muscle-path,
[data-anatomy-lite="1"] .muscle-path:hover,
[data-anatomy-lite="1"] .muscle-path.hovered,
[data-anatomy-lite="1"] .muscle-path.selected,
[data-anatomy-lite="1"] .sub-muscle,
[data-anatomy-lite="1"] .sub-muscle:hover,
[data-anatomy-lite="1"] .sub-muscle.sub-selected,
[data-anatomy-lite="1"] .bone-region-path.bone-selected{filter:none!important;animation:none!important}
[data-anatomy-lite="1"] #bodySvg{transition:none!important}
@media(max-width:767px){.view-controls{align-items:stretch;flex-wrap:wrap}.view-toggle{flex:1 1 auto}.vtbtn{flex:1;padding:8px 9px}}
@media(max-width:540px){}
/* ── Narrow phones (≤380px — anything smaller than A56) ── */
@media(max-width:380px){
  .view-controls{padding:6px 7px;gap:4px}
  .vtbtn{padding:5px 7px;font-size:0.5rem;letter-spacing:0.06em}
  .zoom-button{padding:5px 7px;font-size:0.58rem}
  .msearch-wrap{padding:7px 9px 6px;gap:7px}
  .mfchip{padding:4px 6px;font-size:0.4rem}
  .msearch-result{padding:7px 8px}
  .msearch-result-name{font-size:0.52rem}
}
/* ── Mid tablet (768–1024px) ── */
@media(min-width:768px) and (max-width:1024px){
  .viewer-panel{flex:0 0 clamp(300px,42%,440px);max-width:clamp(300px,42%,440px)}
}

/* ── MUSCLE SEARCH PANEL (idle state) ── */
.info-idle{display:flex;flex-direction:column;height:100%;padding:0;text-align:left;justify-content:flex-start}
.msearch-wrap{display:flex;flex-direction:column;width:100%;padding:clamp(8px,3vw,12px) clamp(10px,3.5vw,14px) 8px;gap:clamp(7px,2vw,10px);box-sizing:border-box;flex:1;min-height:0;overflow-y:auto}
.msearch-bar{display:flex;align-items:center;gap:8px;background:var(--bg3);border:1px solid var(--border2);border-radius:8px;padding:7px 12px;transition:border-color .18s,box-shadow .18s;flex-shrink:0}
.msearch-bar:focus-within{border-color:var(--accent);box-shadow:0 0 0 2px rgba(230,57,70,0.14)}
.msearch-icon{font-size:0.68rem;color:var(--text3);flex-shrink:0;pointer-events:none}
.msearch-input{flex:1;background:transparent;border:none;outline:none;font-family:var(--mono);font-size:0.6rem;letter-spacing:0.05em;color:var(--text);min-width:0}
.msearch-input::placeholder{color:var(--text3);opacity:0.7}
.msearch-clear{font-family:var(--mono);font-size:0.5rem;color:var(--text3);cursor:pointer;padding:2px 6px;border-radius:3px;transition:color .12s;display:none;flex-shrink:0;background:transparent;border:none}
.msearch-clear.show{display:block}
.msearch-clear:hover{color:var(--accent)}
.msearch-filters{display:flex;flex-wrap:wrap;gap:5px;flex-shrink:0}
.mfchip{font-family:var(--mono);font-size:clamp(0.42rem,1.2vw,0.48rem);letter-spacing:0.09em;text-transform:uppercase;padding:clamp(4px,1.2vw,5px) clamp(7px,2.5vw,10px);border-radius:6px;border:1px solid var(--border2);color:var(--text3);background:var(--bg3);cursor:pointer;transition:all .14s}
.mfchip.active,.mfchip:hover{border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.08)}
.msearch-results{display:flex;flex-direction:column;gap:3px;overflow-y:visible;padding-bottom:8px}
.msearch-result{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:7px;border:1px solid var(--border2);background:var(--bg3);cursor:pointer;transition:border-color .12s,background .12s;flex-shrink:0}
.msearch-result:hover{border-color:var(--accent);background:rgba(230,57,70,0.07)}
.msearch-result-name{font-family:var(--mono);font-size:0.58rem;letter-spacing:0.06em;text-transform:uppercase;color:var(--text);flex:0 0 auto;white-space:nowrap}
.msearch-result-sci{font-family:var(--sans);font-size:0.5rem;color:var(--text3);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.msearch-result-region{font-family:var(--mono);font-size:0.44rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--accent);padding:2px 6px;border:1px solid rgba(230,57,70,0.35);border-radius:4px;background:rgba(230,57,70,0.07);flex-shrink:0;white-space:nowrap}
.msearch-empty{padding:20px;text-align:center;font-family:var(--mono);font-size:0.56rem;color:var(--text3);letter-spacing:0.1em}

/* ── INFO PANEL FILTER DROPDOWN (MUSCLES ▾) ── */
.mf-dd{position:relative;display:inline-block}
.mf-dd-panel{display:none;position:absolute;top:calc(100% + 5px);left:0;min-width:190px;max-height:260px;overflow-y:auto;background:var(--bg2);border:1px solid var(--border2);border-radius:8px;padding:5px 4px;z-index:300;box-shadow:0 8px 28px rgba(0,0,0,.5);animation:slideUp .15s ease}
.mf-dd.open .mf-dd-panel{display:block}
.mf-dd-item{display:flex;align-items:center;justify-content:space-between;width:100%;padding:7px 10px;font-family:var(--mono);font-size:0.5rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text2);text-align:left;cursor:pointer;border-radius:5px;border:none;background:transparent;transition:background .12s,color .12s;gap:8px}
.mf-dd-item:hover{background:var(--bg3);color:var(--accent)}
.mf-dd-item-region{font-family:var(--mono);font-size:0.42rem;letter-spacing:0.06em;color:var(--text3);flex-shrink:0;text-transform:uppercase}
.mfchip-locked{opacity:0.38 !important;cursor:not-allowed !important;pointer-events:none !important}
.mfchip-locked::after{content:" ◌";font-size:0.42rem}
.mfchip.bones-on{border-color:#d4c58a !important;color:#d4c58a !important;background:rgba(212,197,138,0.08) !important}
.mfchip.mf-dd-trigger.open{border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.08)}

/* ── ADVANCED FILTER PANEL ── */
.filter-panel{display:none;flex-direction:column;gap:0;background:var(--bg2);border:1px solid var(--border2);border-radius:9px;animation:slideUp .18s ease;flex-shrink:0;overflow-y:auto;max-height:70vh}
.filter-panel.open{display:flex}
/* Section rows */
.fp-section{display:flex;flex-direction:column;padding:10px 12px 12px;border-bottom:1px solid var(--border)}
.fp-section:last-of-type{border-bottom:none}
.fp-section-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;gap:6px}
.fp-section-name{font-family:var(--mono);font-size:0.5rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--text);font-weight:500}
.fp-section-count{font-family:var(--mono);font-size:0.42rem;letter-spacing:0.08em;color:var(--accent);padding:2px 7px;border:1px solid rgba(230,57,70,0.35);border-radius:3px;background:rgba(230,57,70,0.07);display:none}
.fp-section-count.show{display:block}
.fp-section-sub{font-family:var(--mono);font-size:0.40rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3)}
/* Chips */
.fp-chips{display:flex;flex-wrap:wrap;gap:5px}
.fp-chip{font-family:var(--mono);font-size:clamp(0.4rem,1.1vw,0.46rem);letter-spacing:0.08em;text-transform:uppercase;padding:4px 9px;border-radius:5px;border:1px solid var(--border2);color:var(--text3);background:var(--bg3);cursor:pointer;transition:all .14s;flex-shrink:0}
.fp-chip:hover:not(:disabled){border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.06)}
/* Muscle region chips */
.fp-chip.fp-muscle.active{border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.12);box-shadow:inset 0 0 0 1px rgba(230,57,70,0.18)}
/* Fiber sub-section */
.fp-sub{display:flex;flex-direction:column;gap:6px;margin-top:9px;padding-top:9px;border-top:1px solid var(--border)}
.fp-sub-lbl{font-family:var(--mono);font-size:0.4rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--text3);margin-bottom:4px}
.fp-chip.fp-fiber-i:hover:not(:disabled){border-color:#a855f7;color:#a855f7;background:rgba(168,85,247,0.07)}
.fp-chip.fp-fiber-i.active{border-color:#a855f7;color:#a855f7;background:rgba(168,85,247,0.12);box-shadow:inset 0 0 0 1px rgba(168,85,247,0.18)}
.fp-chip.fp-fiber-ii:hover:not(:disabled){border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.06)}
.fp-chip.fp-fiber-ii.active{border-color:var(--accent);color:var(--accent);background:rgba(230,57,70,0.12);box-shadow:inset 0 0 0 1px rgba(230,57,70,0.18)}
.fp-chip.fp-fiber-mixed:hover:not(:disabled){border-color:#22d3ee;color:#22d3ee;background:rgba(34,211,238,0.07)}
.fp-chip.fp-fiber-mixed.active{border-color:#22d3ee;color:#22d3ee;background:rgba(34,211,238,0.10);box-shadow:inset 0 0 0 1px rgba(34,211,238,0.18)}
.fp-chip.fp-layer-bones:hover:not(:disabled){border-color:#d4c58a;color:#d4c58a;background:rgba(212,197,138,0.07)}
.fp-chip.fp-layer-bones.active{border-color:#d4c58a;color:#d4c58a;background:rgba(212,197,138,0.12);box-shadow:inset 0 0 0 1px rgba(212,197,138,0.18)}
.fp-chip.fp-layer-tendons:hover:not(:disabled){border-color:#4ac3d2;color:#4ac3d2;background:rgba(74,195,210,0.07)}
.fp-chip.fp-layer-tendons.active{border-color:#4ac3d2;color:#4ac3d2;background:rgba(74,195,210,0.12);box-shadow:inset 0 0 0 1px rgba(74,195,210,0.18)}
.fp-chip.fp-layer-nerves:hover:not(:disabled){border-color:#a855f7;color:#a855f7;background:rgba(168,85,247,0.07)}
.fp-chip.fp-layer-nerves.active{border-color:#a855f7;color:#a855f7;background:rgba(168,85,247,0.12);box-shadow:inset 0 0 0 1px rgba(168,85,247,0.18)}
/* Footer */
.fp-footer{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;background:var(--bg3);border-top:1px solid var(--border)}
.fp-active-count{font-family:var(--mono);font-size:0.44rem;letter-spacing:0.08em;color:var(--text3)}
.fp-active-count em{font-style:normal;color:var(--accent);font-weight:600}
.fp-reset-btn{font-family:var(--mono);font-size:0.44rem;letter-spacing:0.1em;text-transform:uppercase;padding:5px 11px;border:1px solid var(--border2);border-radius:5px;color:var(--text3);background:transparent;cursor:pointer;transition:all .14s}
.fp-reset-btn:hover{border-color:rgba(230,57,70,0.5);color:var(--accent)}
/* Filter button badge */
.mfchip.filter-on{border-color:var(--accent) !important;color:var(--accent) !important;background:rgba(230,57,70,0.08) !important}
.filter-badge{display:none;align-items:center;justify-content:center;min-width:14px;height:14px;border-radius:7px;background:var(--accent);color:#fff;font-size:0.36rem;padding:0 3px;margin-left:4px;font-family:var(--mono);letter-spacing:0;flex-shrink:0}
.mfchip.filter-on .filter-badge{display:inline-flex}
/* SVG dimming */
.muscle-path.filter-dimmed{opacity:0.055 !important;pointer-events:none !important;filter:none !important;animation:none !important}
.muscle-label.filter-dimmed-lbl{opacity:0 !important}
.bone-region-path.filter-dimmed{opacity:0.07 !important;pointer-events:none !important;filter:none !important}
.bone-label.filter-dimmed-lbl{opacity:0 !important}

/* ── LITE MODE — auto-enabled on low-end mobile (≤4 cores or ≤2 GB RAM) ── */
[data-anatomy-lite="1"] .muscle-path{filter:none!important;transition:fill .14s,stroke .14s,opacity .18s,stroke-width .10s}
[data-anatomy-lite="1"] .muscle-path:hover,
[data-anatomy-lite="1"] .muscle-path.hovered{filter:none!important}
[data-anatomy-lite="1"] .muscle-path.selected{animation:none!important;filter:none!important}
[data-anatomy-lite="1"] .sub-muscle{filter:none!important;transition:opacity .12s}
[data-anatomy-lite="1"] .sub-muscle:hover{filter:none!important;opacity:0.92!important}
[data-anatomy-lite="1"] .sub-muscle.sub-selected{animation:none!important;filter:none!important}
[data-anatomy-lite="1"] .scanlines{display:none!important}
[data-anatomy-lite="1"] #bodySvg{transition:none!important}
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
        <button class="vtbtn" id="btnSide" onclick="toggleSideView()">◉ LEFT</button>
      </div>
      <div class="zoom-controls">
        <button class="zoom-button" id="zoomStepInBtn" onclick="zoomIn()">＋</button>
        <button class="zoom-button" id="zoomStepOutBtn" onclick="zoomOut()">−</button>
        <button class="render-mode-btn" id="renderRealBtn" onclick="toggleAnatomyRealistic()" title="Realistic anatomical rendering" aria-pressed="false">◑ REALISTIC</button>
      </div>

      <div id="sidePicker">
        <button class="side-btn active" id="sideAll" onclick="setSide('both')" title="Highlight center">C</button>
        <button class="side-btn" id="sideL" onclick="setSide('L')" title="Isolate left side">L</button>
        <button class="side-btn" id="sideR" onclick="setSide('R')" title="Isolate right side">R</button>
      </div>
    </div>

    <div class="svg-wrap" id="svgWrap">
      <svg id="bodySvg" viewBox="0 0 200 520" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
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
        <g id="boneRegionLayer"></g>
        <g id="boneLabelLayer"></g>
        <g id="tendonLayer"></g>
        <g id="tendonLabelLayer"></g>
        <g id="nerveLayer"></g>
        <g id="nerveLabelLayer"></g>
        <g id="muscleLayer"></g>
        <g id="overlayLayer"></g>
        <g id="detailLayer"></g>
        <g id="labelLayer"></g>
        <g id="detailLabelLayer"></g>
        <g id="rippleLayer"></g>
      </svg>
      <div class="scanlines"></div>
      <button class="zoom-out-btn" id="zoomOutBtn" onclick="zoomReset()">⟵ ZOOM OUT</button>
      <button class="anatomy-home-btn" onclick="(function(){if(typeof goTo==='function'){goTo('home')}else if(typeof window.goTo==='function'){window.goTo('home')}else{history.back()}})()" title="Back to home">⌂ HOME</button>
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
      <div class="msearch-wrap">
        <div class="msearch-bar">
          <span class="msearch-icon">⌕</span>
          <input class="msearch-input" id="msearchInput" type="text" placeholder="SEARCH MUSCLES…" autocomplete="off" spellcheck="false"/>
          <button class="msearch-clear" id="msearchClear" tabindex="-1">✕</button>
        </div>
        <div class="msearch-filters" id="msearchFilters">
          <button class="mfchip active" id="mfAllBtn">ALL</button>
          <div class="mf-dd" id="mfMuscleDd">
            <button class="mfchip mf-dd-trigger" id="mfMuscleBtn">MUSCLES ▾</button>
            <div class="mf-dd-panel" id="mfMuscleDdPanel"></div>
          </div>
          <button class="mfchip" id="mfBonesBtn">BONES</button>
          <button class="mfchip" id="mfTendonsBtn">TENDONS</button>
          <button class="mfchip" id="mfNervesBtn">NERVES</button>
          <button class="mfchip" id="mfFilterBtn">FILTER <span class="filter-badge" id="filterBadge"></span></button>
        </div>

        <!-- Advanced filter panel -->
        <div class="filter-panel" id="filterPanel">

          <!-- ── MUSCLES (active) ──────────────────────────── -->
          <div class="fp-section">
            <div class="fp-section-hdr">
              <span class="fp-section-name">MUSCLES</span>
              <span class="fp-section-count" id="fpMuscleCount"></span>
            </div>
            <div class="fp-chips">
              <button class="fp-chip fp-muscle filter-chip" data-fregion="chest">CHEST</button>
              <button class="fp-chip fp-muscle filter-chip" data-fregion="back">BACK</button>
              <button class="fp-chip fp-muscle filter-chip" data-fregion="shoulders">SHOULDERS</button>
              <button class="fp-chip fp-muscle filter-chip" data-fregion="arms">ARMS</button>
              <button class="fp-chip fp-muscle filter-chip" data-fregion="core">CORE</button>
              <button class="fp-chip fp-muscle filter-chip" data-fregion="legs">LEGS</button>
              <button class="fp-chip fp-muscle filter-chip" data-fregion="neck">NECK</button>
            </div>
            <div class="fp-sub">
              <div class="fp-sub-lbl">FIBER TYPE</div>
              <div class="fp-chips">
                <button class="fp-chip fp-fiber-i filter-chip" data-ffiber="i">TYPE I — ENDURANCE</button>
                <button class="fp-chip fp-fiber-ii filter-chip" data-ffiber="ii">TYPE II — POWER</button>
                <button class="fp-chip fp-fiber-mixed filter-chip" data-ffiber="mixed">MIXED</button>
              </div>
            </div>
          </div>

          <!-- ── OVERLAY LAYERS ────────────────────────────── -->
          <div class="fp-section">
            <div class="fp-section-hdr">
              <span class="fp-section-name">OVERLAY LAYERS</span>
              <span class="fp-section-sub">combine with muscles</span>
            </div>
            <div class="fp-chips">
              <button class="fp-chip fp-layer-bones filter-chip" data-flayer="bones">BONES</button>
              <button class="fp-chip fp-layer-tendons filter-chip" data-flayer="tendons">TENDONS</button>
              <button class="fp-chip fp-layer-nerves filter-chip" data-flayer="nerves">NERVES</button>
            </div>
          </div>

          <!-- ── Footer ─────────────────────────────────────── -->
          <div class="fp-footer">
            <span class="fp-active-count" id="filterActiveCount">NO FILTERS ACTIVE</span>
            <button class="fp-reset-btn" id="filterResetBtn">RESET ALL</button>
          </div>

        </div>
        <div class="msearch-results" id="msearchResults"></div>
      </div>
    </div>

    <!-- Sub-muscle detail banner (shown when zoomed into a group) -->
    <div class="sub-info-banner" id="subInfoBanner">
      <div class="sub-group-hdr">
        <span class="sub-group-lbl" id="subGroupLbl"></span>
        <span class="sub-group-count" id="subGroupCount"></span>
      </div>
      <div class="sub-info-legend" id="subLegend"></div>
      <div class="sub-hover-area">
        <div class="sub-hover-name" id="subHoverName"></div>
        <div class="sub-hover-desc" id="subHoverDesc"></div>
      </div>
    </div>

    <div class="info-content" id="infoContent">
      <div class="info-badge-row">
        <span class="badge-region" id="iRegion"></span>
        <span class="badge-type"   id="iType"></span>
        <span class="badge-fiber"  id="iFiberBadge"></span>
      </div>
      <div class="info-name" id="iName"></div>
      <div class="info-sci"  id="iSci"></div>

      <div class="section-lbl">DESCRIPTION</div>
      <div class="info-text" id="iDesc"></div>

      <div class="section-lbl">FUNCTION</div>
      <div class="info-text" id="iFunc"></div>

      <div class="origin-grid">
        <div class="origin-card"><strong>Origin</strong><span id="iOrigin"></span></div>
        <div class="origin-card"><strong>Insertion</strong><span id="iInsert"></span></div>
      </div>

      <div class="divider"></div>

      <!-- Fiber Type -->
      <div id="iFiberWrap">
        <div class="section-lbl">⬡ FIBER TYPE PROFILE</div>
        <div class="fiber-card" id="iFiberCard"></div>
      </div>

      <div class="divider"></div>

      <!-- Synergists & Antagonists -->
      <div id="iSynWrap">
        <div class="section-lbl">SYNERGISTS</div>
        <div class="muscle-relation-row" id="iSynChips"></div>
      </div>
      <div id="iAntWrap" style="margin-top:10px">
        <div class="section-lbl">ANTAGONISTS</div>
        <div class="muscle-relation-row" id="iAntChips"></div>
      </div>

      <div class="divider"></div>

      <div class="section-lbl">TRAINING TAGS</div>
      <div class="tags-wrap" id="iTags"></div>

      <div class="divider"></div>

      <!-- Injuries -->
      <div id="iInjWrap">
        <div class="section-lbl">⚠ COMMON INJURIES &amp; PATHOLOGIES</div>
        <div id="iInjCards"></div>
      </div>

      <div class="divider" id="iStrDivider"></div>

      <!-- Stretches -->
      <div id="iStrWrap">
        <div class="section-lbl">🧘 MOBILITY &amp; STRETCHES</div>
        <div id="iStrCards"></div>
      </div>

      <a href="index.html" class="wiki-link">↗ BACK TO EXERCISE WIKI</a>
    </div>
    <!-- ── BONE INFO PANEL ── -->
    <div id="boneInfoContent">
      <div class="info-badge-row">
        <span class="badge-region" id="bRegion"></span>
        <span class="badge-bone-type" id="bBoneType"></span>
      </div>
      <div class="info-name" id="bName"></div>
      <div class="info-sci"  id="bSci"></div>

      <div class="section-lbl">DESCRIPTION</div>
      <div class="info-text" id="bDesc"></div>

      <div class="section-lbl">FUNCTION</div>
      <div class="info-text" id="bFunc"></div>

      <div class="divider"></div>

      <div class="section-lbl">ARTICULATIONS</div>
      <div class="bone-joints-row" id="bJoints"></div>

      <div class="divider"></div>

      <div id="bMuscleWrap">
        <div class="section-lbl">ATTACHED MUSCLES</div>
        <div class="rel-chips-row" id="bMuscleChips"></div>
      </div>

      <div class="divider"></div>

      <div class="section-lbl">⚠ COMMON INJURIES &amp; PATHOLOGIES</div>
      <div id="bInjCards"></div>

      <div class="divider"></div>

      <div id="bFactWrap">
        <div class="section-lbl">⬡ OSTEOLOGY NOTE</div>
        <div class="bone-fact-card">
          <span class="bone-fact-label">CLINICAL / TRAINING RELEVANCE</span>
          <div class="bone-fact-text" id="bFact"></div>
        </div>
      </div>

      <a href="index.html" class="wiki-link">↗ BACK TO EXERCISE WIKI</a>
    </div>

    <div id="tendonInfoContent">
      <div class="info-badge-row">
        <span class="badge-region" id="tRegion"></span>
        <span class="badge-tendon-type" id="tTendonType"></span>
      </div>
      <div class="info-name" id="tName"></div>
      <div class="info-sci"  id="tSci"></div>

      <div class="section-lbl">ORIGIN &amp; INSERTION</div>
      <div class="info-text" id="tOriginIns"></div>

      <div class="section-lbl">DESCRIPTION</div>
      <div class="info-text" id="tDesc"></div>

      <div class="section-lbl">FUNCTION</div>
      <div class="info-text" id="tFunc"></div>

      <div class="divider"></div>

      <div id="tMuscleWrap">
        <div class="section-lbl">CONNECTED MUSCLE</div>
        <div class="rel-chips-row" id="tMuscleChips"></div>
      </div>

      <div class="divider"></div>

      <div id="tBoneWrap">
        <div class="section-lbl">ATTACHED BONE</div>
        <div class="rel-chips-row" id="tBoneChips"></div>
      </div>

      <div class="divider"></div>

      <div class="section-lbl">⚠ COMMON INJURIES &amp; PATHOLOGIES</div>
      <div id="tInjCards"></div>

      <div class="divider"></div>

      <div id="tFactWrap">
        <div class="section-lbl">⬡ TENDON NOTE</div>
        <div class="tendon-fact-card">
          <span class="tendon-fact-label">CLINICAL / TRAINING RELEVANCE</span>
          <div class="tendon-fact-text" id="tFact"></div>
        </div>
      </div>

      <a href="index.html" class="wiki-link">↗ BACK TO EXERCISE WIKI</a>
    </div>

    <!-- ── NERVE INFO PANEL ── -->
    <div id="nerveInfoContent">
      <div class="info-badge-row">
        <span class="badge-region" id="nRegion"></span>
        <span class="badge-nerve-type" id="nNerveType"></span>
      </div>
      <div class="info-name" id="nName"></div>
      <div class="info-sci"  id="nSci"></div>

      <div class="section-lbl">SPINAL ROOTS &amp; COURSE</div>
      <div class="info-text" id="nRootsCourse"></div>

      <div class="section-lbl">DESCRIPTION</div>
      <div class="info-text" id="nDesc"></div>

      <div class="section-lbl">FUNCTION</div>
      <div class="info-text" id="nFunc"></div>

      <div class="divider"></div>

      <div id="nMuscleWrap">
        <div class="section-lbl">INNERVATED MUSCLES</div>
        <div class="rel-chips-row" id="nMuscleChips"></div>
      </div>

      <div class="divider" id="nSensoryDivider"></div>

      <div id="nSensoryWrap">
        <div class="section-lbl">SENSORY TERRITORY</div>
        <div class="info-text" id="nSensory"></div>
      </div>

      <div class="divider"></div>

      <div class="section-lbl">⚠ COMMON INJURIES &amp; PATHOLOGIES</div>
      <div id="nInjCards"></div>

      <div class="divider"></div>

      <div id="nFactWrap">
        <div class="section-lbl">⬡ NEURO NOTE</div>
        <div class="nerve-fact-card">
          <span class="nerve-fact-label">CLINICAL / TRAINING RELEVANCE</span>
          <div class="nerve-fact-text" id="nFact"></div>
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
     cx:44, cy:114, rx:13, ry:19, angle:6,
     d:'M42,88 Q26,97 24,116 Q26,134 44,142 Q56,140 64,128 Q68,114 64,98 Q56,88 44,88 Z'},
    {id:'tmin-L',  view:'back',  name:'Teres Minor',      colorIdx:3, desc:'External rotation of the shoulder. Rotator cuff muscle — key for shoulder joint stability.',
     cx:60, cy:132, rx:7,  ry:10, angle:-15},
    {id:'pdelt-R', view:'back',  name:'Posterior Head',   colorIdx:0, desc:'Shoulder horizontal abduction & extension. Chronically undertrained — critical for shoulder health.',
     cx:156, cy:114, rx:13, ry:19, angle:-6,
     d:'M158,88 Q174,97 176,116 Q174,134 156,142 Q144,140 136,128 Q132,114 136,98 Q144,88 158,88 Z'},
    {id:'tmin-R',  view:'back',  name:'Teres Minor',      colorIdx:3, desc:'External rotation of the shoulder. Rotator cuff muscle — key for shoulder joint stability.',
     cx:140, cy:132, rx:7,  ry:10, angle:15},
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
    /* ── FRONT view ─────────────────────────────────────── */
    {id:'brad-L',  view:'front', name:'Brachioradialis',   colorIdx:2,
     desc:'The most laterally visible forearm muscle. Elbow flexor with a neutral or hammer grip. Forms the prominent lateral bulge at the elbow crease — the first thing you see when someone flexes their forearm from the front.',
     cx:42, cy:210, rx:10, ry:18,
     d:'M46,196 Q36,196 26,206 Q20,216 20,230 Q24,242 34,246 Q44,246 52,238 Q56,226 54,212 Q52,198 46,196 Z'},
    {id:'flex-L',  view:'front', name:'Flexor Group',      colorIdx:0,
     desc:'Flexor Carpi Radialis, Flexor Carpi Ulnaris, Palmaris Longus, and Flexor Digitorum Superficialis. Wrist flexion and grip force. The primary endurance bottleneck in pulling, dead hangs, and loaded carries.',
     cx:31, cy:252, rx:10, ry:32,
     d:'M34,242 Q22,258 20,276 Q22,284 34,290 Q46,296 54,284 Q52,268 48,254 Q44,244 36,242 Z'},
    {id:'ext-L',   view:'front', name:'Extensor Group',    colorIdx:1,
     desc:'Extensor Carpi Radialis, Extensor Carpi Ulnaris, and Extensor Digitorum. Wrist and finger extension. Undertrained in most programs despite being critical for elbow health — unbalanced flexor dominance drives medial and lateral epicondylitis.',
     cx:48, cy:248, rx:9, ry:28,
     d:'M44,242 Q52,242 58,254 Q58,268 52,280 Q46,286 40,284 Q34,278 34,264 Q34,250 40,244 Z'},
    {id:'flex-R',  view:'front', name:'Flexor Group',      colorIdx:0,
     desc:'Flexor Carpi Radialis, Flexor Carpi Ulnaris, Palmaris Longus, and Flexor Digitorum Superficialis. Wrist flexion and grip force. The primary endurance bottleneck in pulling, dead hangs, and loaded carries.',
     cx:169, cy:252, rx:10, ry:32,
     d:'M166,242 Q178,258 180,276 Q178,284 166,290 Q154,296 146,284 Q148,268 152,254 Q156,244 164,242 Z'},
    {id:'ext-R',   view:'front', name:'Extensor Group',    colorIdx:1,
     desc:'Extensor Carpi Radialis, Extensor Carpi Ulnaris, and Extensor Digitorum. Wrist and finger extension. Undertrained in most programs despite being critical for elbow health — unbalanced flexor dominance drives medial and lateral epicondylitis.',
     cx:152, cy:248, rx:9, ry:28,
     d:'M156,242 Q148,242 142,254 Q142,268 148,280 Q154,286 160,284 Q166,278 166,264 Q166,250 160,244 Z'},
    {id:'brad-R',  view:'front', name:'Brachioradialis',   colorIdx:2,
     desc:'The most laterally visible forearm muscle. Elbow flexor with a neutral or hammer grip. Forms the prominent lateral bulge at the elbow crease — the first thing you see when someone flexes their forearm from the front.',
     cx:158, cy:210, rx:10, ry:18,
     d:'M154,196 Q164,196 174,206 Q180,216 180,230 Q176,242 166,246 Q156,246 148,238 Q144,226 146,212 Q148,198 154,196 Z'},
    /* ── BACK view ──────────────────────────────────────── */
    {id:'extdig-bk-L',  view:'back', name:'Extensor Digitorum', colorIdx:1,
     desc:'The dominant posterior forearm muscle. Four tendons run to fingers 2–5 across the back of the hand. Its fasciae form the visible ropy bands you see in lean forearms during grip work. Active in every extension and release phase of pulling.',
     cx:38, cy:250, rx:10, ry:32,
     d:'M46,200 Q38,200 30,212 Q26,226 26,252 Q26,270 32,282 Q40,292 50,286 Q58,276 60,256 Q60,232 56,210 Q52,198 46,200 Z'},
    {id:'ecu-bk-L',     view:'back', name:'Extensor Carpi Ulnaris', colorIdx:3,
     desc:'Runs along the ulnar (medial) border of the posterior forearm. Extends and ulnar-deviates the wrist. The most medial of the extensor muscles — its tendon is palpable at the back of the wrist.',
     cx:30, cy:258, rx:7, ry:26,
     d:'M34,216 Q26,234 26,258 Q26,274 30,284 Q38,292 44,284 Q46,268 44,248 Q42,228 38,216 Z'},
    {id:'brad-bk-L',    view:'back', name:'Brachioradialis',   colorIdx:2,
     desc:'Visible as a thick lateral ridge at the top of the posterior forearm near the elbow. Its muscle belly tapers quickly into a long flat tendon by mid-forearm. Bridges elbow flexion and forearm orientation — most active at 90° flexion with neutral grip.',
     cx:52, cy:212, rx:8, ry:16,
     d:'M46,200 Q54,200 60,210 Q62,222 60,234 Q56,242 48,244 Q40,242 36,230 Q36,216 42,204 Z'},
    {id:'extdig-bk-R',  view:'back', name:'Extensor Digitorum', colorIdx:1,
     desc:'The dominant posterior forearm muscle. Four tendons run to fingers 2–5 across the back of the hand. Its fasciae form the visible ropy bands you see in lean forearms during grip work. Active in every extension and release phase of pulling.',
     cx:162, cy:250, rx:10, ry:32,
     d:'M154,200 Q162,200 170,212 Q174,226 174,252 Q174,270 168,282 Q160,292 150,286 Q142,276 140,256 Q140,232 144,210 Q148,198 154,200 Z'},
    {id:'ecu-bk-R',     view:'back', name:'Extensor Carpi Ulnaris', colorIdx:3,
     desc:'Runs along the ulnar (medial) border of the posterior forearm. Extends and ulnar-deviates the wrist. The most medial of the extensor muscles — its tendon is palpable at the back of the wrist.',
     cx:170, cy:258, rx:7, ry:26,
     d:'M166,216 Q174,234 174,258 Q174,274 170,284 Q162,292 156,284 Q154,268 156,248 Q158,228 162,216 Z'},
    {id:'brad-bk-R',    view:'back', name:'Brachioradialis',   colorIdx:2,
     desc:'Visible as a thick lateral ridge at the top of the posterior forearm near the elbow. Its muscle belly tapers quickly into a long flat tendon by mid-forearm. Bridges elbow flexion and forearm orientation — most active at 90° flexion with neutral grip.',
     cx:148, cy:212, rx:8, ry:16,
     d:'M154,200 Q146,200 140,210 Q138,222 140,234 Q144,242 152,244 Q160,242 164,230 Q164,216 158,204 Z'},
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
    {id:'vm-L', view:'front', name:'Vastus Medialis',   colorIdx:2, desc:'The VMO "teardrop" near the knee. Critical for patellar tracking and knee stability. Oblique fibers of VMO (vastus medialis oblique) are the final-degree stabilisers of the patella.',              cx:66,  cy:358, rx:10, ry:22, angle:-14},
    {id:'vi-L', view:'front', name:'Vastus Intermedius',colorIdx:3, desc:'Deep quad layer — lies beneath rectus femoris and is not visible externally. Pure knee extensor with no role in hip flexion. Heavily recruited in terminal knee extension.',              cx:80,  cy:308, rx:7,  ry:44, angle:2},
    {id:'sart-L', view:'front', name:'Sartorius',       colorIdx:4, desc:'The longest muscle in the human body — a ribbon-like strap running obliquely from ASIS to the medial tibia. Crosses both hip and knee. Flexes, abducts, and externally rotates the hip while flexing the knee. Active in the "tailor position" of sitting cross-legged.', cx:73, cy:340, rx:4, ry:55, angle:-14},
    {id:'popl-L', view:'front', name:'Popliteus',       colorIdx:5, desc:'"Unlocks" the fully extended knee by internally rotating the tibia. This small triangular muscle initiates all knee flexion from the straight-leg position — without it you cannot begin to bend your knee from full extension. Key for knee health in deceleration sports.', cx:74, cy:392, rx:8, ry:7, angle:-5},
    {id:'rf-R', view:'front', name:'Rectus Femoris',    colorIdx:0, desc:'The only quad head that crosses the hip. Hip angle is critical — changes how it loads in squats.',  cx:123, cy:324, rx:11, ry:54, angle:0},
    {id:'vl-R', view:'front', name:'Vastus Lateralis',  colorIdx:1, desc:'Outer sweep of the quad. Builds the lateral thigh shelf. Loaded by all knee extension movements.',  cx:109, cy:316, rx:10, ry:50, angle:-4},
    {id:'vm-R', view:'front', name:'Vastus Medialis',   colorIdx:2, desc:'The VMO "teardrop" near the knee. Critical for patellar tracking and knee stability. Oblique fibers of VMO (vastus medialis oblique) are the final-degree stabilisers of the patella.',              cx:134, cy:358, rx:10, ry:22, angle:14},
    {id:'vi-R', view:'front', name:'Vastus Intermedius',colorIdx:3, desc:'Deep quad layer — lies beneath rectus femoris and is not visible externally. Pure knee extensor with no role in hip flexion. Heavily recruited in terminal knee extension.',              cx:120, cy:308, rx:7,  ry:44, angle:-2},
    {id:'sart-R', view:'front', name:'Sartorius',       colorIdx:4, desc:'The longest muscle in the human body — a ribbon-like strap running obliquely from ASIS to the medial tibia. Crosses both hip and knee. Flexes, abducts, and externally rotates the hip while flexing the knee. Active in the "tailor position" of sitting cross-legged.', cx:127, cy:340, rx:4, ry:55, angle:14},
    {id:'popl-R', view:'front', name:'Popliteus',       colorIdx:5, desc:'"Unlocks" the fully extended knee by internally rotating the tibia. This small triangular muscle initiates all knee flexion from the straight-leg position — without it you cannot begin to bend your knee from full extension. Key for knee health in deceleration sports.', cx:126, cy:392, rx:8, ry:7, angle:5},
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
    // ── Iliocostalis (lateral column) ──
    {id:'ilcost-L', view:'back', name:'Iliocostalis', colorIdx:0, desc:'The most lateral erector column. Runs from the iliac crest and sacrum up to the angles of the lower ribs. Primary lateral stabiliser under side-load and the first column to fatigue in asymmetrical carries.', cx:82, cy:192, rx:5, ry:40, angle:-3},
    {id:'ilcost-R', view:'back', name:'Iliocostalis', colorIdx:0, desc:'The most lateral erector column. Runs from the iliac crest and sacrum up to the angles of the lower ribs. Primary lateral stabiliser under side-load and the first column to fatigue in asymmetrical carries.', cx:118, cy:192, rx:5, ry:40, angle:3},
    // ── Longissimus (intermediate/central column) ──
    {id:'longiss-L', view:'back', name:'Longissimus',  colorIdx:1, desc:'The largest and longest erector column — the middle band. Runs from the sacrum all the way to the transverse processes of the cervical spine. The primary spinal extensor under axial load. Dominant in deadlifts and Romanian deadlifts.', cx:90, cy:182, rx:5, ry:46, angle:-1},
    {id:'longiss-R', view:'back', name:'Longissimus',  colorIdx:1, desc:'The largest and longest erector column — the middle band. Runs from the sacrum all the way to the transverse processes of the cervical spine. The primary spinal extensor under axial load. Dominant in deadlifts and Romanian deadlifts.', cx:110, cy:182, rx:5, ry:46, angle:1},
    // ── Spinalis (medial column) ──
    {id:'spinalis-L', view:'back', name:'Spinalis',    colorIdx:2, desc:'The smallest, most medial erector column. Runs along the spinous processes themselves — T4 to T8 in the thoracic spine. Less powerful but critical for fine segmental control and the "stacking" sensation of upright posture.', cx:96, cy:174, rx:4, ry:36, angle:0},
    {id:'spinalis-R', view:'back', name:'Spinalis',    colorIdx:2, desc:'The smallest, most medial erector column. Runs along the spinous processes themselves — T4 to T8 in the thoracic spine. Less powerful but critical for fine segmental control and the "stacking" sensation of upright posture.', cx:104, cy:174, rx:4, ry:36, angle:0},
    // ── Multifidus (deep layer) ──
    {id:'multi',  view:'back', name:'Multifidus',     colorIdx:3, desc:'Deep segmental stabilizer of the spine. Short rotator-class muscle spanning 2–4 vertebrae. Atrophies rapidly after back pain onset and does not self-recover. The primary target of spinal rehab protocols.', cx:100, cy:185, rx:5, ry:40, angle:0},
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
    {id:'psoasmaj-L', view:'front', name:'Psoas Major',   colorIdx:0, desc:'Originates from T12–L5 vertebral bodies and transverse processes. The only muscle directly connecting the spine to the femur. Tightness pulls the lumbar spine into excessive lordosis and anteriorly tilts the pelvis. Critical for sprinting, kicking, and any running movement.', cx:84, cy:242, rx:7, ry:16, angle:-4},
    {id:'psoasmin-L', view:'front', name:'Psoas Minor',   colorIdx:5, desc:'Present in only ~50% of people. Much smaller than the major — a thin, weak trunk flexor. Runs anterior to psoas major. Clinical relevance: its tendon can become a snapping structure causing "internal snapping hip syndrome" when it catches on the iliopectineal eminence.', cx:89, cy:234, rx:4, ry:10, angle:-2},
    {id:'iliac-L',    view:'front', name:'Iliacus',       colorIdx:1, desc:'Fills the iliac fossa — the bowl of the hip bone. Works in perfect tandem with the psoas major (together = iliopsoas). More active in the terminal phase of hip flexion and in controlling the pelvis during the stance phase of gait.', cx:79, cy:258, rx:8, ry:12, angle:5},
    {id:'tfl-L',      view:'front', name:'TFL',           colorIdx:3, desc:'Tensor Fasciae Latae. Short muscle feeding into the IT band at Gerdy\'s tubercle. Hip flexor + abductor + internal rotator simultaneously. Commonly overloaded in runners — IT band syndrome is often really a TFL problem.', cx:70, cy:264, rx:6, ry:10, angle:-10},
    {id:'psoasmaj-R', view:'front', name:'Psoas Major',   colorIdx:0, desc:'Originates from T12–L5 vertebral bodies and transverse processes. The only muscle directly connecting the spine to the femur. Tightness pulls the lumbar spine into excessive lordosis and anteriorly tilts the pelvis. Critical for sprinting, kicking, and any running movement.', cx:116, cy:242, rx:7, ry:16, angle:4},
    {id:'psoasmin-R', view:'front', name:'Psoas Minor',   colorIdx:5, desc:'Present in only ~50% of people. Much smaller than the major — a thin, weak trunk flexor. Runs anterior to psoas major. Clinical relevance: its tendon can become a snapping structure causing "internal snapping hip syndrome" when it catches on the iliopectineal eminence.', cx:111, cy:234, rx:4, ry:10, angle:2},
    {id:'iliac-R',    view:'front', name:'Iliacus',       colorIdx:1, desc:'Fills the iliac fossa — the bowl of the hip bone. Works in perfect tandem with the psoas major (together = iliopsoas). More active in the terminal phase of hip flexion and in controlling the pelvis during the stance phase of gait.', cx:121, cy:258, rx:8, ry:12, angle:-5},
    {id:'tfl-R',      view:'front', name:'TFL',           colorIdx:3, desc:'Tensor Fasciae Latae. Short muscle feeding into the IT band at Gerdy\'s tubercle. Hip flexor + abductor + internal rotator simultaneously. Commonly overloaded in runners — IT band syndrome is often really a TFL problem.', cx:130, cy:264, rx:6, ry:10, angle:10},
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
    fiberType:{label:'55% II / 45% I',pctII:55,pctI:45,note:'Mixed composition suited to both sustained posture and explosive overhead force. Benefits from both strength work (heavy presses) and high-rep isolation (lateral raises). The anterior head skews more fast-twitch; the posterior head more slow-twitch.'},
    name:'Deltoids', sci:'Deltoideus — Anterior, Medial & Posterior Heads',
    region:'Shoulder', type:'Skeletal · Type I & II',
    origin:'Lateral clavicle, acromion process, spine of scapula',
    insert:'Deltoid tuberosity of the humerus',
    desc:'The deltoid is the thick triangular muscle forming the rounded cap of the shoulder. Its three heads produce movement in different planes — making it uniquely versatile. The anterior head fires in all pressing; the medial in abduction; the posterior in pulling and external rotation.',
    func:'Anterior: shoulder flexion, horizontal adduction, internal rotation. Medial: shoulder abduction (primary). Posterior: shoulder extension, horizontal abduction, external rotation. All three stabilise the glenohumeral joint under load.',
    tags:['Overhead Press','Lateral Raise','Shoulder Stability','Push','Row','Handstand'],
    synergists:['pectorals','trapezius','rotatorcuff','triceps'],
    antagonists:['lats','rotatorcuff'],
    injuries:[
      {name:'Anterior deltoid strain', severity:'mild', desc:'Overstretching during heavy pressing or front raises. Common in bench-press athletes. Pain on shoulder flexion.'},
      {name:'AC joint impingement', severity:'moderate', desc:'Repeated overhead loading compresses the acromioclavicular joint. Aching at top of shoulder, worse on cross-body movements.'},
      {name:'Deltoid tendinopathy', severity:'mild', desc:'Overuse-related tendon degeneration at the deltoid tuberosity insertion. Dull ache with resisted abduction.'},
    ],
    stretches:[
      {name:'Cross-body shoulder stretch', desc:'Pull the arm horizontally across the chest with the opposite hand. Hold 30 s. Targets posterior head.'},
      {name:'Doorway anterior deltoid stretch', desc:'Place palm on a doorframe at shoulder height, rotate body away. Hold 30 s per side.'},
    ],
  },
  pectorals:{
    fiberType:{label:'60% II / 40% I',pctII:60,pctI:40,note:'Fast-twitch dominant, favouring explosive pressing power. Responds well to heavy loads and progressive overload. The lower sternal fibres are slightly more Type II than the clavicular head. High-rep pump work still adds hypertrophy but heavy compound pressing is the primary driver.'},
    name:'Pectorals', sci:'Pectoralis Major (3 heads) & Pectoralis Minor',
    region:'Chest', type:'Skeletal · Type II dominant',
    origin:'Clavicular head: medial clavicle. Sternal head: sternum and costal cartilages 2–6. Abdominal portion: aponeurosis of the external oblique. Pec Minor: ribs 3–5.',
    insert:'Pec Major: intertubercular groove of the humerus. Pec Minor: coracoid process of the scapula.',
    desc:'The pectoralis major is a three-headed fan-shaped muscle covering the chest. The clavicular head behaves like an anterior deltoid; the sternal head is the primary horizontal pusher; the abdominal portion is the most horizontal and forms the lower shelf. Beneath all three sits the pectoralis minor — a separate muscle entirely, and one of the most chronically tight in modern life.',
    func:'Pec Major: horizontal shoulder adduction (primary). Shoulder flexion (clavicular head). Internal rotation. Adduction. Pec Minor: scapular protraction and downward rotation. Assists forced inhalation. Compresses the brachial plexus when shortened — a common source of arm numbness.',
    tags:['Push-Up','Chest Press','Incline Press','Decline Press','Dip','Ring Fly','Internal Rotation'],
    synergists:['deltoids','triceps','serratus'],
    antagonists:['lats','trapezius','rotatorcuff'],
    injuries:[
      {name:'Pectoralis major tear', severity:'severe', desc:'Typically occurs during heavy bench press at the musculotendinous junction near the humerus. Sudden pop, bruising tracking medially, loss of pressing strength. Requires imaging.'},
      {name:'Pec minor tightness / TOS', severity:'moderate', desc:'Shortened pec minor compresses the brachial plexus beneath the coracoid, causing arm numbness, tingling, and referred forearm pain — often misdiagnosed.'},
      {name:'Costochondral strain', severity:'mild', desc:'Strain at the rib-cartilage junction, often from explosive pressing. Sharp localised pain on the sternum edge that worsens on deep breathing.'},
    ],
    stretches:[
      {name:'Doorway pec stretch', desc:'Stand in a doorway, elbows at 90°, lean forward until a stretch is felt across the chest. Hold 30 s. Targets sternal head.'},
      {name:'Incline foam roll', desc:'Lie on a foam roller along the spine, arms out to the sides at 90°. Allow chest to open with gravity for 60–90 s. Targets pec minor.'},
    ],
  },
  biceps:{
    fiberType:{label:'55% II / 45% I',pctII:55,pctI:45,note:'Slightly fast-twitch dominant but with a notable slow-twitch base. Biceps fatigue quickly at high loads but recover well between sets. The short head has a higher Type I proportion than the long head. Both tempo curls and heavy chins produce results.'},
    name:'Biceps', sci:'Biceps Brachii — Long Head & Short Head',
    region:'Anterior Upper Arm', type:'Skeletal · Type II dominant',
    origin:'Long head: supraglenoid tubercle of scapula. Short head: coracoid process.',
    insert:'Radial tuberosity and bicipital aponeurosis (into forearm fascia)',
    desc:'Despite being the muscle people flex first, the biceps is not the strongest elbow flexor — that title belongs to the brachialis underneath it. The biceps\' real superpower is supination: rotating the forearm palm-up. This is why chin-ups load it differently than pronated pull-ups.',
    func:'Elbow flexion (strongest in supination). Forearm supination (primary). Weak shoulder flexion via the long head. Primary antagonist to the triceps in all pulling movements.',
    tags:['Pull-Up','Chin-Up','Row','Supinated Grip','Elbow Flexion','Curl'],
    synergists:['forearms','lats','rotatorcuff'],
    antagonists:['triceps'],
    injuries:[
      {name:'Biceps tendinopathy (long head)', severity:'moderate', desc:'Degeneration of the long head tendon in the bicipital groove. Aching anterior shoulder pain, worse on overhead and supinated movements. Very common in overhead athletes.'},
      {name:'Distal biceps tendon rupture', severity:'severe', desc:'Rare but serious — the tendon tears from the radial tuberosity during a sudden supination load (e.g. catching a heavy object). "Pop" at the elbow, bruising, loss of supination strength.'},
      {name:'SLAP lesion', severity:'moderate', desc:'The long head biceps tendon anchors at the superior labrum — heavy pulling or FOOSH (fall on outstretched hand) can tear this anchor. Deep shoulder aching and catching sensation.'},
    ],
    stretches:[
      {name:'Wall bicep stretch', desc:'Place palm flat on a wall at shoulder height, rotate body away. Hold 30 s. Elongates the bicep at both elbow and shoulder.'},
      {name:'Behind-back finger interlace', desc:'Interlace fingers behind the back, straighten arms and gently lift away from the body. Hold 20 s.'},
    ],
  },
  forearms:{
    fiberType:{label:'70% I / 30% II',pctII:30,pctI:70,note:'Strongly slow-twitch dominant — designed for sustained grip endurance rather than explosive power. High-rep, time-under-tension work (dead hangs, farmer carries) is more effective than heavy low-rep curls. Responds well to frequency; multiple training sessions per week accelerate development.'},
    name:'Forearms', sci:'Flexor & Extensor Carpi Groups + Brachioradialis',
    region:'Forearm', type:'Skeletal · Type I & II mixed',
    origin:'Medial epicondyle of humerus (flexors); lateral epicondyle (extensors)',
    insert:'Carpal bones, metacarpals, and phalanges via long tendons',
    desc:'The forearm contains two opposing muscle groups: flexors on the palmar side and extensors on the dorsal side. They are loaded in virtually every grip-dependent exercise. Grip endurance — not just strength — is the bottleneck in most advanced pulling work, ring training, and loaded carries.',
    func:'Wrist flexion (flexor group). Wrist extension (extensor group). Forearm pronation and supination. Finger flexion (long flexors). Grip force generation and sustained endurance under load.',
    tags:['Grip Strength','Wrist Flexion','Wrist Extension','Pulling Endurance','Carry'],
    synergists:['biceps','hands'],
    antagonists:['triceps'],
    injuries:[
      {name:'Medial epicondylitis (Golfer\'s Elbow)', severity:'moderate', desc:'Overuse tendinopathy of the flexor-pronator origin at the medial epicondyle. Pain on the inner elbow, worsened by resisted wrist flexion and grip activities.'},
      {name:'Lateral epicondylitis (Tennis Elbow)', severity:'moderate', desc:'Overuse tendinopathy of the common extensor origin (ECRB) at the lateral epicondyle. Outer elbow aching, worse with gripping and wrist extension. Extremely common in climbers and keyboard workers.'},
      {name:'De Quervain\'s tenosynovitis', severity:'mild', desc:'Inflammation of the APL and EPB tendons at the radial wrist (base of thumb). Pain on thumb movement, positive Finkelstein test. Common in new parents and mobile device users.'},
    ],
    stretches:[
      {name:'Wrist flexor stretch', desc:'Extend the arm forward, palm up. Use the other hand to gently pull fingers back toward the body. Hold 30 s.'},
      {name:'Wrist extensor stretch', desc:'Extend the arm forward, palm down. Use the other hand to gently press the hand downward. Hold 30 s.'},
    ],
  },
  abs:{
    fiberType:{label:'60% I / 40% II',pctII:40,pctI:60,note:'The rectus abdominis is more slow-twitch than widely assumed. It is primarily a postural and stabilising muscle, active in low-level tonic contractions throughout the day. High-rep hollow holds, L-sits, and plank progressions match its fibre profile better than heavy weighted crunches.'},
    name:'Abs', sci:'Rectus Abdominis',
    region:'Anterior Core', type:'Skeletal · Type I dominant',
    origin:'Pubic symphysis and pubic crest',
    insert:'Costal cartilages of ribs 5–7 and the xiphoid process',
    desc:'The rectus abdominis is the paired vertical muscle running the full length of the front of the abdomen, separated by a midline (linea alba) and divided into segments by tendinous intersections — the visible "six-pack." It is one of many core muscles, not the whole story.',
    func:'Trunk flexion (classic crunch motion). Posterior pelvic tilt. Compresses the abdominal wall to assist in generating intra-abdominal pressure during heavy lifts. Works in concert with the obliques and transversus abdominis.',
    tags:['Core','Trunk Flexion','Anterior Core','Hollow Body','L-Sit'],
    synergists:['obliques','deepcore'],
    antagonists:['lowerback'],
    injuries:[
      {name:'Rectus abdominis strain', severity:'mild', desc:'Acute tear from explosive flexion or rotational load. Sharp pain and localised tenderness over the muscle belly. More common in sprinters and gymnasts.'},
      {name:'Diastasis recti', severity:'moderate', desc:'Widening of the linea alba (midline), causing a gap between the left and right rectus bellies. Very common postpartum but also occurs in heavy lifters using excessive intra-abdominal pressure without bracing properly.'},
    ],
    stretches:[
      {name:'Cobra stretch', desc:'Lie prone, press up with straight arms to extend the lumbar spine. Hold 20–30 s. Lengthens the entire anterior core.'},
      {name:'Standing back-bend', desc:'Stand tall, place hands on lower back for support, and gently extend the thoracic and lumbar spine backwards.'},
    ],
  },
  obliques:{
    fiberType:{label:'65% I / 35% II',pctII:35,pctI:65,note:'Predominantly slow-twitch, reflecting a role in continuous postural bracing and trunk rotation throughout daily movement. Anti-rotation exercises (Pallof press, loaded carries) and rotational movements both load them well. Higher rep ranges and prolonged isometric work are highly effective.'},
    name:'Obliques', sci:'External Oblique & Internal Oblique',
    region:'Lateral Core', type:'Skeletal · Type I dominant',
    origin:'External: lower 8 ribs. Internal: inguinal ligament, iliac crest, thoracolumbar fascia.',
    insert:'External: iliac crest and linea alba. Internal: ribs 10–12 and linea alba.',
    desc:'The obliques form the lateral walls of the abdomen in two crossing layers — the external runs diagonally downward and inward; the internal upward and inward. This X-shaped arrangement makes them the primary generators of trunk rotation and lateral stability.',
    func:'Trunk rotation (the primary rotators of the spine). Lateral trunk flexion. Anti-rotation stiffness in loaded carries, planks, and windmills. Assists forced expiration. Critical for any sport involving throwing, twisting, or swinging.',
    tags:['Rotation','Lateral Flexion','Anti-Rotation','Core Stability','Side Plank'],
    synergists:['abs','deepcore','lowerback'],
    antagonists:['lowerback'],
    injuries:[
      {name:'Oblique strain', severity:'mild', desc:'Acute tear from violent rotation — common in baseball pitchers, golfers, and racket sports. Sharp pain at the side of the trunk, worsened by rotation or coughing.'},
      {name:'Sports hernia (athletic pubalgia)', severity:'moderate', desc:'Disruption of the posterior inguinal wall, often involving the oblique aponeurosis. Chronic groin pain worsened by explosive movements. Not a true hernia but requires specialist assessment.'},
    ],
    stretches:[
      {name:'Side stretch', desc:'Standing, extend one arm overhead and bend laterally toward the opposite side. Hold 30 s per side.'},
      {name:'Seated rotation', desc:'Sitting cross-legged, place one hand behind and one on the opposite knee. Rotate the trunk and hold for 20 s per side.'},
    ],
  },
  quadriceps:{
    fiberType:{label:'50% II / 50% I',pctII:50,pctI:50,note:'Near-equal fibre split on average, though this varies significantly by individual and head. Vastus lateralis is often reported as slightly more fast-twitch; rectus femoris and vastus medialis are more mixed. Both heavy squats and high-rep leg presses build quad mass effectively.'},
    name:'Quadriceps', sci:'Rectus Femoris, Vastus Lateralis, Medialis & Intermedius',
    region:'Anterior Thigh', type:'Skeletal · Type II dominant',
    origin:'Rectus Femoris: anterior inferior iliac spine. Vasti: proximal and lateral femoral surface.',
    insert:'Tibial tuberosity via the patellar tendon (quadriceps tendon → patella → patellar ligament)',
    desc:'The quadriceps is four muscles that share a single powerful tendon at the knee. It is the primary knee extensor and one of the strongest muscle groups in the human body. The rectus femoris is the only quad head that also crosses the hip — making hip angle critical in squat mechanics.',
    func:'Knee extension (primary, all four heads). Hip flexion (Rectus Femoris only). Decelerates knee flexion eccentrically during landing. Stabilises the patella (VMO). Essential for all squatting, lunging, jumping, and stair-climbing movements.',
    tags:['Squat','Knee Extension','Jump','Pistol Squat','Lunge','Deceleration'],
    synergists:['glutes','hipflexors','adductors'],
    antagonists:['hamstrings'],
    injuries:[
      {name:'Patellar tendinopathy (Jumper\'s Knee)', severity:'moderate', desc:'Overuse degeneration of the patellar tendon below the kneecap. Anterior knee pain worsened by jumping, squatting, and stairs. Very common in volleyball and basketball athletes.'},
      {name:'Quadriceps strain', severity:'mild', desc:'Acute muscle tear, often in the rectus femoris at mid-belly or proximal musculotendinous junction. Sharp thigh pain during sprinting or kicking.'},
      {name:'PFPS (Patellofemoral Pain Syndrome)', severity:'mild', desc:'Diffuse anterior knee pain from patellar maltracking, often due to VMO weakness relative to VL. Worsened by sustained knee flexion (cinema sign), stairs, and running.'},
    ],
    stretches:[
      {name:'Standing quad stretch', desc:'Standing on one leg, pull the ankle toward the glutes. Keep knees together. Hold 30 s per side.'},
      {name:'Kneeling lunge quad stretch', desc:'Kneel on one knee, tuck the pelvis posteriorly to elongate the rectus femoris crossing the hip. Hold 45 s per side.'},
    ],
  },
  tibialis:{
    fiberType:{label:'70% I / 30% II',pctII:30,pctI:70,note:'Slow-twitch dominant — active in every walking step and throughout standing. Responds best to high-volume, moderate-load training. Deficit tibialis raises, toe-up walks, and long duration isometric holds match its fibre profile. Shin splints develop partly because high-rep running overloads an undertrained slow-twitch muscle.'},
    name:'Tibialis Anterior', sci:'Tibialis Anterior',
    region:'Anterior Lower Leg', type:'Skeletal · Type I dominant',
    origin:'Lateral condyle and upper 2/3 of the lateral tibial surface and interosseous membrane',
    insert:'Medial cuneiform bone and base of the first metatarsal',
    desc:'The tibialis anterior is the large muscle running along the outer edge of the shin. It is the primary ankle dorsiflexor and is responsible for lifting the foot during the swing phase of walking. Shin splints are typically an overuse condition of this muscle and the surrounding fascia.',
    func:'Ankle dorsiflexion (pulling the toes toward the shin — essential for gait). Foot inversion. Eccentrically controls foot lowering after heel strike. Works in every walking and running step. Also heavily loaded during box jumps, rope skipping, and barefoot training.',
    tags:['Dorsiflexion','Ankle Stability','Running','Gait','Jump Rope'],
  },
  trapezius:{
    fiberType:{label:'55% I / 45% II',pctII:45,pctI:55,note:'Slightly slow-twitch dominant, consistent with its primary role in sustained scapular position. The lower trapezius skews more Type I than the upper. Face pulls, Y-raises, and light-to-moderate rowing at higher reps are most effective for all three portions.'},
    name:'Trapezius', sci:'Trapezius — Upper, Middle & Lower Portions',
    region:'Upper Back & Neck', type:'Skeletal · Type I dominant',
    origin:'External occipital protuberance, nuchal ligament, spinous processes C1–T12',
    insert:'Lateral third of clavicle, acromion, and spine of scapula',
    desc:'The trapezius is the large diamond-shaped muscle covering the upper back and neck. Its three portions have distinct and sometimes opposing actions. It is the primary scapular controller — dysfunction here leads to shoulder impingement, poor pressing strength, and neck pain.',
    func:'Upper: scapular elevation and upward rotation. Middle: scapular retraction (toward spine). Lower: scapular depression and upward rotation. All three control scapular position throughout every pressing and pulling movement.',
    tags:['Scapular Control','Shrug','Row','Overhead Stability','Posture','Face Pull'],
  },
  reardelts:{
    fiberType:{label:'60% I / 40% II',pctII:40,pctI:60,note:'More slow-twitch than the anterior deltoid, reflecting a postural stabilising role. Responds exceptionally well to high-rep, light-to-moderate loads — reverse flyes, face pulls, and band pull-aparts at 20–30 reps. Often the weakest muscle in pressing-dominant athletes due to neglect.'},
    name:'Rear Deltoids', sci:'Deltoideus — Pars Spinalis (Posterior Head)',
    region:'Posterior Shoulder', type:'Skeletal · Type I & II',
    origin:'Spine of scapula',
    insert:'Deltoid tuberosity of the humerus',
    desc:'The posterior deltoid is systematically undertrained in programs that prioritise pushing. Every push-heavy routine that lacks horizontal pulling creates a progressively worsening anterior-to-posterior shoulder strength imbalance — a major driver of shoulder impingement and rotator cuff injury over time.',
    func:'Shoulder horizontal abduction (the reverse-fly motion). Shoulder extension (arm moving backward from the front). External rotation. Works alongside the rotator cuff to keep the humeral head properly seated in the glenoid socket during all pressing movements.',
    tags:['Face Pull','Reverse Fly','Horizontal Pull','Shoulder Health','Posture','Row'],
  },
  triceps:{
    fiberType:{label:'60% II / 40% I',pctII:60,pctI:40,note:'Fast-twitch dominant, particularly the lateral and long heads. The medial head has a higher Type I proportion and is the fatigue-resistant workhorse in repeated pushing. Heavy compound movements (dips, close-grip press) match the lateral head\'s profile; higher reps and overhead work suit the long head.'},
    name:'Triceps', sci:'Triceps Brachii — Long, Lateral & Medial Heads',
    region:'Posterior Upper Arm', type:'Skeletal · Type II dominant',
    origin:'Long head: infraglenoid tubercle of scapula. Lateral: posterior humerus (superior). Medial: posterior humerus (inferior).',
    insert:'Olecranon process of the ulna',
    desc:'The triceps makes up roughly two-thirds of upper arm volume. The long head is biarticular — it crosses both the shoulder and elbow — making it sensitive to shoulder position. In overhead extensions or dips with forward lean, the long head is fully stretched and most active.',
    func:'Elbow extension (primary — all pushing movements). Long head: shoulder extension and adduction. Most active in overhead pressing and dips with forward lean where the long head is pre-lengthened. Antagonist to the biceps.',
    tags:['Dip','Push-Up','Overhead Press','Elbow Extension','Ring Dip','Tricep Extension'],
    synergists:['deltoids','pectorals'],
    antagonists:['biceps','forearms'],
    injuries:[
      {name:'Triceps tendinopathy', severity:'moderate', desc:'Overuse degeneration at the olecranon insertion. Posterior elbow aching, worse with resisted extension and heavy pressing. Common in powerlifters.'},
      {name:'Olecranon bursitis', severity:'mild', desc:'Inflammation of the bursa over the elbow tip. Soft, squishy posterior elbow swelling often from direct trauma or sustained leaning on elbows.'},
      {name:'Long head strain', severity:'mild', desc:'Acute tear at the musculotendinous junction during heavy overhead loading. Pain deep in the armpit and posterior arm.'},
    ],
    stretches:[
      {name:'Overhead tricep stretch', desc:'Raise arm overhead, bend the elbow to touch the upper back. Use the opposite hand to press the elbow further. Hold 30 s per side.'},
      {name:'Wall push overhead stretch', desc:'Stand facing a wall, raise one arm and press it against the wall above head height. Lean gently into the wall.'},
    ],
  },
  lats:{
    fiberType:{label:'55% II / 45% I',pctII:55,pctI:45,note:'Slightly fast-twitch dominant, designed for powerful pulling. The lower lats skew more Type I than the upper. Pull-ups and rows with heavy loads target the fast-twitch portion; higher-rep pulling builds the slow-twitch base needed for sustained grip and overhead stability.'},
    name:'Lats', sci:'Latissimus Dorsi',
    region:'Posterior Trunk', type:'Skeletal · Type II dominant',
    origin:'T6–T12 spinous processes, thoracolumbar fascia, iliac crest, inferior angle of scapula, lower 3–4 ribs',
    insert:'Floor of the intertubercular (bicipital) groove of the humerus',
    desc:'The latissimus dorsi is the broadest muscle of the back — its name means "broadest of the back." It is the primary driver of back width and the dominant mover in all vertical pulling (pull-ups, muscle-ups). It also generates powerful shoulder internal rotation and adduction.',
    func:'Shoulder extension (pulling arm backward and down). Shoulder adduction (arm toward body). Internal rotation. Depresses the shoulder girdle. Major stabiliser of the lumbar spine via thoracolumbar fascia. Essential for all gymnastics skills requiring active shoulder depression.',
    tags:['Pull-Up','Muscle-Up','Lat Pulldown','Row','Vertical Pull','Planche Lean'],
    synergists:['biceps','rotatorcuff','lowerback','rhomboids'],
    antagonists:['deltoids','pectorals','trapezius'],
    injuries:[
      {name:'Lat strain', severity:'mild', desc:'Acute tear from heavy pulling or sudden deceleration. Sharp pain under the armpit or along the side of the back. Common in baseball pitchers and swimmers.'},
      {name:'Latissimus dorsi tendinopathy', severity:'mild', desc:'Insertional tendinopathy at the humerus. Posterior shoulder aching with resisted internal rotation and adduction.'},
    ],
    stretches:[
      {name:'Hanging lat stretch', desc:'Hang from a bar with straight arms for 20–30 s. Allow the shoulder girdle to fully decompress.'},
      {name:'Child\'s pose with arm extension', desc:'Kneel, extend both arms forward and lower the chest to the floor. For unilateral emphasis, walk hands to one side. Hold 45 s per side.'},
    ],
  },
  lowerback:{
    fiberType:{label:'70% I / 30% II',pctII:30,pctI:70,note:'Strongly slow-twitch dominant — the erector spinae is primarily a postural muscle maintaining spinal position against gravity for hours at a time. Heavy deadlifts build the fast-twitch capacity; but back extension endurance work, loaded carries, and farmers walks are essential for the dominant Type I fibres.'},
    name:'Lower Back', sci:'Erector Spinae — Iliocostalis, Longissimus & Spinalis',
    region:'Posterior Spine', type:'Skeletal · Type I dominant',
    origin:'Sacrum, iliac crest, spinous processes of lumbar and thoracic vertebrae',
    insert:'Ribs, transverse processes of thoracic and cervical vertebrae',
    desc:'The erector spinae is three parallel columns running from sacrum to skull. Iliocostalis (lateral) anchors to the rib angles and resists lateral bending. Longissimus (intermediate) is the longest and most powerful — the dominant extensor in deadlifts. Spinalis (medial) runs along the spinous processes themselves and handles fine segmental control. Deep to all three sits the Multifidus, a short segmental stabiliser that spans just 2–4 vertebrae and atrophies rapidly after back injury.',
    func:'Spinal extension (straightening from a bent position). Lateral trunk flexion (Iliocostalis). Eccentrically controls trunk flexion under load. Maintains neutral lumbar curve during squats, deadlifts, and carries. Longissimus and Iliocostalis extend the thoracic and cervical spine as well. Multifidus provides segmental micro-stability at each vertebral level.',
    tags:['Hip Hinge','Deadlift','Good Morning','Back Extension','Posture','Loaded Carry','Spinal Stability'],
    synergists:['glutes','deepcore','hamstrings'],
    antagonists:['abs','obliques','deepcore'],
    injuries:[
      {name:'Lumbar strain / sprain', severity:'moderate', desc:'The most common back injury — acute overstretching of erector fibres or lumbar ligaments. Diffuse lower back pain, muscle spasm, and guarding. Usually resolves in 4–6 weeks with appropriate loading.'},
      {name:'Disc herniation (L4/L5 or L5/S1)', severity:'severe', desc:'Nucleus pulposus protrudes through the annulus fibrosus, compressing a nerve root. Sharp radiating leg pain (sciatica), possible numbness or weakness. Most common at L4/L5 and L5/S1.'},
      {name:'Facet joint syndrome', severity:'moderate', desc:'Irritation of the lumbar facet joints from extension loading. Pain on backward bending and rotation. Common in older athletes and powerlifters with repeated end-range extension.'},
      {name:'Spondylolysis / spondylolisthesis', severity:'moderate', desc:'Stress fracture of the pars interarticularis, often from repetitive hyperextension (gymnastics, fast bowling, throwing). Low back pain worsened by extension. Vertebral slippage (listhesis) can follow.'},
    ],
    stretches:[
      {name:'Cat-cow mobilisation', desc:'On hands and knees, alternate between lumbar flexion (cat) and extension (cow). 10–15 reps. Restores segmental motion and relieves erector tension.'},
      {name:'Knee-to-chest stretch', desc:'Lie on back, pull both knees toward the chest. Hold 30–45 s. Gently distracts the lumbar facets.'},
      {name:'Piriformis / figure-4 stretch', desc:'Lie on back, cross one ankle over the opposite knee, gently pull the uncrossed leg toward the chest. Relieves associated hip external rotator and sacroiliac tension.'},
    ],
  },
  glutes:{
    fiberType:{label:'50% II / 50% I',pctII:50,pctI:50,note:'Near-equal fibre split, with Gluteus Maximus slightly fast-twitch dominant (for explosive hip extension in sprinting) and Gluteus Medius more slow-twitch (postural pelvic stabilisation). Heavy hip thrusts and Romanian deadlifts cover the fast-twitch; single-leg holds and clamshells work the slow-twitch medius.'},
    name:'Glutes', sci:'Gluteus Maximus, Medius & Minimus',
    region:'Posterior Hip', type:'Skeletal · Type I & II mixed',
    origin:'Posterior ilium, sacrum, and coccyx (Glute Max); ilium between iliac crests (Medius/Minimus)',
    insert:'Iliotibial band and gluteal tuberosity of femur (Max); greater trochanter of femur (Med/Min)',
    desc:'The gluteal complex is the powerhouse of the posterior chain. Gluteus Maximus is one of the largest muscles in the human body. Glute Medius is the primary hip abductor and frontal-plane pelvic stabiliser — its dysfunction is a major factor in knee injuries.',
    func:'Hip extension and external rotation (Glute Max). Hip abduction and pelvic stabilisation in single-leg stance (Glute Med). Deceleration of femoral internal rotation. Essential for sprint mechanics, jumping power, and injury prevention.',
    tags:['Hip Extension','Squat','Deadlift','Pelvic Stability','Sprint','Single-Leg'],
    synergists:['hamstrings','lowerback','adductors'],
    antagonists:['hipflexors','quadriceps'],
    injuries:[
      {name:'Proximal hamstring / gluteal tendinopathy', severity:'moderate', desc:'Insertional tendinopathy at the ischial tuberosity where hamstrings and lower glute fibres attach. Deep buttock pain worsened by sitting, running hills, and forward folding. Responds poorly to stretching — load is the treatment.'},
      {name:'Greater trochanteric pain syndrome', severity:'moderate', desc:'Glute medius/minimus tendinopathy at the greater trochanter. Lateral hip pain, worse with single-leg loading and lying on the affected side. Often misdiagnosed as hip bursitis.'},
      {name:'Piriformis syndrome', severity:'mild', desc:'Piriformis (external rotator beneath glute max) compresses the sciatic nerve. Buttock pain with sciatica-like referral. Differentiated from disc herniation by provocative hip rotation testing.'},
    ],
    stretches:[
      {name:'Figure-4 / pigeon stretch', desc:'Lying on back or in pigeon pose, cross ankle over knee and draw the leg toward the chest. Hold 45 s per side. Targets glute max and external rotators.'},
      {name:'90-90 hip stretch', desc:'Sit with both knees bent at 90° (one forward, one to the side). Rotate torso toward the front leg. Hold 30 s per side. Excellent for hip internal and external rotators simultaneously.'},
    ],
  },
  hamstrings:{
    fiberType:{label:'55% II / 45% I',pctII:55,pctI:45,note:'Slightly fast-twitch dominant, particularly Biceps Femoris long head — consistent with its frequent role in acute sprinting strains. Semimembranosus has a higher Type I proportion. Nordic curls and RDLs load the fast-twitch; sustained hip hinge holds and leg curl endurance develop the slow-twitch base.'},
    name:'Hamstrings', sci:'Biceps Femoris, Semitendinosus & Semimembranosus',
    region:'Posterior Thigh', type:'Skeletal · Type I dominant',
    origin:'Ischial tuberosity (all three). Biceps Femoris short head: distal linea aspera of femur.',
    insert:'Biceps Femoris: fibular head. Semitendinosus & Semimembranosus: medial tibia.',
    desc:'The hamstrings are biarticular — they cross both the hip and knee — which makes them complex. They must lengthen at one joint while contracting at the other. This biarticular nature makes them acutely sensitive to position and among the most commonly strained muscles in athletes.',
    func:'Knee flexion and hip extension (both). Tibial rotation at the knee (internal by ST/SM; external by BF). Eccentric deceleration of knee extension in landing and sprinting. Critical for posterior chain balance and sprint mechanics.',
    tags:['Hip Extension','Knee Flexion','Nordic Curl','Sprint','Posterior Chain','RDL'],
    synergists:['glutes','lowerback','adductors'],
    antagonists:['quadriceps','hipflexors'],
    injuries:[
      {name:'Proximal hamstring strain (Grade I–III)', severity:'moderate', desc:'The most common athletic soft-tissue injury worldwide. Acute tearing at the myotendinous junction near the ischial origin, typically during sprinting. Sudden posterior thigh pain. Risk factors: previous injury, fatigue, inadequate eccentric strength.'},
      {name:'Proximal hamstring avulsion', severity:'severe', desc:'Complete tendon tear from the ischial tuberosity, often in water-skiers and sprinters. Audible pop, massive bruising tracking down the thigh, complete loss of function. Surgical reattachment required if retracted.'},
      {name:'Hamstring tendinopathy', severity:'moderate', desc:'Chronic degeneration at the ischial insertion from high-load hip flexion activities (hills, deadlifts). Deep buttock pain worsened by prolonged sitting and stretching. Stretching makes it worse — progressive loading is the treatment.'},
    ],
    stretches:[
      {name:'RNT hamstring stretch', desc:'Lie on back, loop a band or towel around one foot and gently raise the leg with a soft knee. Hold 30 s. Avoids compressive loading of the ischial insertion.'},
      {name:'Standing toe touch', desc:'Stand with soft knees, hinge forward from the hips (not the lumbar spine). Hold at end-range for 30–45 s. Do not do this if you have proximal hamstring tendinopathy.'},
    ],
  },
  calves:{
    fiberType:{label:'55% I / 45% II',pctII:45,pctI:55,note:'The gastrocnemius is near-equal fibre split; the soleus is predominantly Type I (~80%). Together, the calf complex leans slow-twitch. Soleus must be trained with bent-knee (seated) calf raises at high reps; gastroc responds to both heavy straight-leg raises and higher-rep work.'},
    name:'Calves', sci:'Gastrocnemius & Soleus',
    region:'Posterior Lower Leg', type:'Skeletal · Type I dominant',
    origin:'Gastrocnemius: medial and lateral femoral condyles. Soleus: posterior fibula and tibia.',
    insert:'Calcaneus (heel bone) via the Achilles tendon',
    desc:'The calf is two muscles sharing one tendon — the thickest tendon in the human body. The gastrocnemius is biarticular (crosses knee and ankle) and primarily fast-twitch; the soleus is monoarticular and overwhelmingly slow-twitch Type I. Targeted training requires both straight-knee and bent-knee positions.',
    func:'Plantarflexion (pushing foot downward — essential for walking, running, jumping). Gastrocnemius is most active with the knee extended (standing calf raise). Soleus is primary with knee bent (seated calf raise). Shock absorption at heel strike and jump landing.',
    tags:['Plantarflexion','Jump','Running','Achilles Tendon','Calf Raise','Jump Rope'],
    synergists:['tibialis','peroneals','feet'],
    antagonists:['tibialis'],
    injuries:[
      {name:'Achilles tendinopathy', severity:'moderate', desc:'The most common lower-leg overuse injury. Mid-substance or insertional degeneration of the Achilles tendon. Morning stiffness, posterior heel pain, and a characteristic nodule. Stretching insertional tendinopathy makes it worse — load management and heel raises are the treatment.'},
      {name:'Achilles tendon rupture', severity:'severe', desc:'Complete tendon tear, typically 2–6 cm above the insertion. "Kick in the back of the leg" sensation, Thompson test positive. More common in recreational "weekend warrior" athletes aged 30–50.'},
      {name:'Calf strain (gastrocnemius tear)', severity:'moderate', desc:'Acute tear of the medial gastrocnemius head at the myotendinous junction — "tennis leg." Sudden push-off pain, bruising, and painful gait. Responds well to conservative management.'},
    ],
    stretches:[
      {name:'Standing gastrocnemius stretch', desc:'Stand with one foot against a wall or step, heel down, knee straight. Lean forward. Hold 45 s per side. Targets gastrocnemius.'},
      {name:'Seated soleus stretch', desc:'Sit on the floor, knees bent ~90°. Pull toes up toward the shin. Hold 45 s per side. Specifically targets the soleus (bent-knee position).'},
    ],
  },
  hipflexors:{
    fiberType:{label:'55% I / 45% II',pctII:45,pctI:55,note:'Slightly slow-twitch dominant, reflecting a role in sustained postural hip flexion and cyclic gait. The TFL is more fast-twitch than the iliopsoas. Isometric hip flexor holds, slow leg raises, and hip flexion against resistance at moderate loads work well alongside explosive sprint mechanics.'},
    name:'Hip Flexors', sci:'Iliopsoas — Psoas Major, Iliacus & Tensor Fasciae Latae',
    region:'Anterior Hip', type:'Skeletal · Type I & II mixed',
    origin:'Psoas Major: T12–L5 vertebral bodies and transverse processes. Iliacus: iliac fossa. TFL: anterior superior iliac spine (ASIS).',
    insert:'Psoas & Iliacus: lesser trochanter of the femur. TFL: iliotibial band.',
    desc:'The hip flexors are among the most overloaded and undertrained muscle groups in modern life. Prolonged sitting keeps them in perpetual shortened state, leading to anterior pelvic tilt and inhibited glutes. The iliopsoas (psoas + iliacus) is the primary hip flexor; the TFL assists while also abducting and internally rotating the leg.',
    func:'Hip flexion — drawing the knee toward the chest (primary function). Lumbar spine stabilization and slight lordosis (Psoas). Hip abduction and internal rotation (TFL). Essential for sprinting, kicking, running, and any movement requiring the leg to swing forward. Eccentrically decelerate hip extension.',
    tags:['Hip Flexion','Sprint','Running','Leg Raise','Kick','Anterior Pelvic Tilt','Core'],
    synergists:['quadriceps','adductors','abs'],
    antagonists:['glutes','hamstrings','lowerback'],
    injuries:[
      {name:'Hip flexor strain', severity:'mild', desc:'Acute tear, typically of the rectus femoris or iliopsoas, from explosive hip flexion. Sharp anterior hip/groin pain. Common in sprinters and kickers.'},
      {name:'Iliopsoas tendinopathy / snapping hip', severity:'mild', desc:'The iliopsoas tendon snaps over the iliopectineal eminence during hip flexion/extension. Audible or palpable snap with anterior hip aching. Coxa saltans interna.'},
      {name:'IT band syndrome', severity:'moderate', desc:'TFL overload transfers tension through the IT band to the lateral knee. Burning lateral knee pain in runners — typically at the 2 km mark. TFL tightness is often the root cause, not the IT band itself.'},
    ],
    stretches:[
      {name:'Kneeling hip flexor lunge', desc:'Kneel on one knee. Tuck the pelvis posteriorly (flatten the lower back). Shift weight forward until a deep anterior hip stretch is felt. Hold 45 s per side.'},
      {name:'Couch stretch', desc:'Kneel with one shin against a wall, foot up. Bring the opposite foot forward into a lunge. Hold 60 s per side. Highly effective for addressing sitting-related hip flexor shortening.'},
    ],
  },
  adductors:{
    fiberType:{label:'55% I / 45% II',pctII:45,pctI:55,note:'Slight slow-twitch dominance, consistent with continuous medial pelvic support during gait. Adductor Magnus (hamstring portion) is slightly more fast-twitch than Longus/Brevis. Copenhagen adductor exercises and moderate-load cable adduction at higher reps match the fibre profile well.'},
    name:'Adductors', sci:'Adductor Magnus, Longus, Brevis & Gracilis',
    region:'Medial Thigh', type:'Skeletal · Type I dominant',
    origin:'Pubic ramus and ischial tuberosity (Magnus); pubic body (Longus & Brevis); pubic symphysis (Gracilis)',
    insert:'Medial and posterior femur — linea aspera (Magnus, Longus, Brevis); medial tibia via pes anserinus (Gracilis)',
    desc:'The adductors form the entire medial wall of the thigh — collectively one of the largest muscle groups in the body — yet they are chronically undertrained and poorly understood. Adductor Magnus is particularly powerful and also acts as a posterior-chain hip extensor via its hamstring portion. Gracilis is the only adductor that crosses the knee.',
    func:'Hip adduction (bringing leg toward midline — primary function of all four). Hip flexion (Longus, Brevis, anterior Magnus). Hip extension (posterior Magnus — acts like a 5th hamstring). Knee flexion (Gracilis). Pelvic stabilization in gait. Critical for lateral change-of-direction and groin injury prevention.',
    tags:['Hip Adduction','Groin','Inner Thigh','Squat','Lunge','Lateral Movement','Single-Leg'],
    synergists:['glutes','hamstrings','quadriceps'],
    antagonists:['glutes','hipflexors'],
    injuries:[
      {name:'Adductor strain (groin pull)', severity:'moderate', desc:'Acute tear of the adductor longus at the proximal myotendinous junction — the most common groin injury. Sharp medial thigh pain during cutting or kicking. Resisted adduction is painful.'},
      {name:'Adductor tendinopathy (athletic groin pain)', severity:'moderate', desc:'Chronic insertional tendinopathy at the pubic attachment. Deep medial groin pain worsened by kicking, change of direction, and adduction against resistance. Often bilateral.'},
      {name:'Osteitis pubis', severity:'moderate', desc:'Stress-related inflammation of the pubic symphysis, often from adductor and abdominal muscle tug-of-war. Diffuse groin and pubic pain. Common in football and ice hockey players.'},
    ],
    stretches:[
      {name:'Butterfly / frog stretch', desc:'Sit on the floor, soles of feet together, knees falling out to the sides. Gently press knees toward the floor. Hold 45 s. For a deeper stretch, lean the torso forward.'},
      {name:'Standing adductor stretch', desc:'Stand with feet wide, toes forward. Shift weight to one side and lower into a lateral lunge. Keep the straight leg\'s foot flat. Hold 30 s per side.'},
    ],
  },
  rhomboids:{
    fiberType:{label:'65% I / 35% II',pctII:35,pctI:65,note:'Predominantly slow-twitch — the rhomboids are postural muscles whose primary job is sustained scapular retraction against gravity throughout the day. High-rep rowing, band pull-aparts, and face pulls are more effective than low-rep heavy rows for this specific muscle group.'},
    name:'Rhomboids', sci:'Rhomboid Major & Rhomboid Minor',
    region:'Interscapular Back', type:'Skeletal · Type I dominant',
    origin:'Spinous processes of C7–T5 (Major: T2–T5; Minor: C7–T1) and the ligamentum nuchae',
    insert:'Medial border of the scapula',
    desc:'The rhomboids retract and elevate the scapula and rotate it downward — the opposite of the trapezius. They are almost universally undertrained, and their weakness is a primary driver of rounded shoulders, scapular winging, and shoulder impingement. They work in concert with the middle and lower trapezius to hold the shoulder blades in proper retracted position.',
    func:'Scapular retraction (pulling shoulder blades together). Scapular elevation. Downward rotation of the scapula (opposing upper trap). Stabilises the medial border of the scapula against the rib cage. Highly active in all rowing movements, face pulls, and band pull-aparts.',
    tags:['Scapular Retraction','Posture','Row','Face Pull','Pull-Apart','Shoulder Health','Upper Back'],
    synergists:['trapezius','lats','rotatorcuff'],
    antagonists:['pectorals','serratus'],
    injuries:[
      {name:'Rhomboid strain', severity:'mild', desc:'Acute or chronic tearing from forceful protraction (punching, throwing). Deep medial border pain between shoulder blade and spine. Often confused with thoracic disc pain.'},
      {name:'Myofascial trigger points', severity:'mild', desc:'Chronic knotting from sustained protraction. Aching between scapulae with shoulder referral. Responds to dry needling and scapular retraction exercises.'},
    ],
    stretches:[
      {name:'Cross-body scapular stretch', desc:'Reach one arm across the body at chest height. Use the other hand to press it closer to the chest. Feel the pull between shoulder blade and spine. Hold 30 s per side.'},
    ],
  },
  serratus:{
    fiberType:{label:'70% I / 30% II',pctII:30,pctI:70,note:'Strongly slow-twitch dominant, reflecting its role in continuous scapular stabilisation throughout all arm movements. Responds best to high-rep, timed work: push-up plus at the top, wall slides, serratus punches, and overhead pressing with protraction cues. Difficult to overload with heavy low-rep work.'},
    name:'Serratus Anterior', sci:'Serratus Anterior',
    region:'Lateral Thorax', type:'Skeletal · Type I dominant',
    origin:'Outer surfaces and superior borders of ribs 1–8 (or 9)',
    insert:'Anterior (costal) surface of the medial border of the scapula',
    desc:'The serratus anterior is often called "the boxer\'s muscle" because it protracts the scapula powerfully during a punch. Its distinctive finger-like digitations are visible on lean, developed athletes along the ribcage. It is the primary muscle responsible for keeping the scapula flat against the rib cage — its weakness causes scapular winging and shoulder instability in overhead movements.',
    func:'Scapular protraction (pushing the shoulder blade forward around the rib cage). Upward rotation of the scapula (essential for shoulder flexion above 90°). Holds the medial scapular border against the thorax — prevents winging. Active in all pushing and overhead movements. Critical for handstand balance and ring stability.',
    tags:['Scapular Protraction','Push-Up','Overhead Stability','Handstand','Punch','Winging','Shoulder Health'],
    synergists:['trapezius','pectorals','rotatorcuff'],
    antagonists:['rhomboids'],
    injuries:[
      {name:'Serratus weakness / scapular winging', severity:'moderate', desc:'Long thoracic nerve palsy (direct blow, crutch compression) or disuse causes medial scapular winging. Painful and limits all overhead function. Progressive serratus loading is the treatment.'},
      {name:'Serratus strain', severity:'mild', desc:'Acute tear from sudden forced protraction. Sharp lateral ribcage pain worsening with deep breathing. Can mimic a rib fracture.'},
    ],
    stretches:[
      {name:'Serratus mobility drill', desc:'Stand in a doorway, place palm on the frame at shoulder height. Rotate body forward to stretch the serratus / lateral chest. 30 s per side.'},
    ],
  },
  intercostals:{
    fiberType:{label:'80% I / 20% II',pctII:20,pctI:80,note:'Among the most slow-twitch muscles in the body — they fire with every breath, approximately 20,000 times per day. Cannot be directly isolated in traditional training; they develop through breathing mechanics, valsalva training, and thoracic mobility work. Fatigue under maximal exertion is a primary limiter in high-intensity breathing events.'},
    name:'Intercostals', sci:'Intercostales Externi, Interni & Transversus Thoracis',
    region:'Thoracic Cage', type:'Skeletal · Type I dominant',
    origin:'Inferior border of each rib above (External); superior border of each rib below (Internal)',
    insert:'Superior border of the rib below (External); inferior border of the rib above (Internal)',
    desc:'The intercostals are three layers of muscle filling the spaces between each pair of ribs. Though small individually, they span the entire thoracic cage and are active in every breath you take — around 20,000 times a day. The external intercostals assist inhalation; the internals assist forced exhalation. Transversus thoracis is the deepest layer, running along the inside of the sternum.',
    func:'External Intercostals: elevate the rib cage during inhalation. Internal Intercostals: depress the ribs during forced exhalation. Transversus Thoracis: compresses the thoracic cage. Together they maintain rib cage stiffness under load — essential for bracing in heavy lifting, Valsalva manoeuvre, and breath-hold performance.',
    tags:['Breathing','Core Bracing','Thoracic Stability'],
    synergists:['deepcore','abs'],
    antagonists:['deepcore'],
    injuries:[
      {name:'Intercostal strain', severity:'mild', desc:'Acute tear from explosive rotation, coughing, or direct impact. Sharp, well-localised pain over one or two ribs worsened by breathing and movement. Clinically indistinguishable from a rib fracture without imaging.'},
    ],
    stretches:[
      {name:'Lateral side stretch', desc:'Standing, reach one arm overhead and bend to the opposite side. Creates lateral rib expansion. Hold 20 s per side.'},
    ],
  },
  hands:{
    fiberType:{label:'50% II / 50% I',pctII:50,pctI:50,note:'Near-equal split: intrinsic muscles used for precision (lumbricals, interossei) tend toward Type I for fine motor endurance; thenar and hypothenar muscles are more mixed for grip power. Climbing, ring training, and sustained grip work (dead hangs) develop both populations. High frequency training accelerates intrinsic development.'},
    name:'Hand Intrinsics', sci:'Thenar & Hypothenar Groups, Lumbricals & Interossei',
    region:'Hand', type:'Skeletal · Type I & II mixed',
    origin:'Metacarpals, carpal bones, and long flexor tendons',
    insert:'Proximal phalanges and extensor expansions of fingers 1–5',
    desc:'The hand contains 17 intrinsic muscles packed into the palm — responsible for the fine motor precision that defines human dexterity. The thenar group controls the thumb (the most important digit), the hypothenar controls the little finger, and the lumbricals and interossei produce the subtle flexion-extension balance across each finger. Grip strength without intrinsic hand development is an incomplete chain.',
    func:'Thumb opposition and palmar abduction (Thenar). Little finger opposition and abduction (Hypothenar). MCP flexion with IP extension — the "lumbrical grip" essential for ring and bar work. Finger abduction and adduction (Interossei). Precision pinch, power grip, and all tool-use movements.',
    tags:['Grip','Pinch','Finger Flexion','Thumb Opposition','Ring Training','Climbing'],
    synergists:['forearms','biceps'],
    antagonists:['forearms'],
    injuries:[
      {name:'Trigger finger', severity:'mild', desc:'Narrowing of the flexor tendon sheath causes the tendon to catch or lock. Painful clicking or locking of a finger in flexion. Common in grippers and climbers.'},
      {name:'Dupuytren\'s contracture', severity:'moderate', desc:'Fibrosis of the palmar fascia causes progressive finger contracture. Ring and little finger curl toward the palm. Genetic, more common in men of Northern European descent.'},
    ],
    stretches:[
      {name:'Palm-up finger extension', desc:'Hold one hand palm-up, gently press back each finger with the opposite hand. Hold 10 s per finger.'},
      {name:'Prayer stretch', desc:'Press both palms together in front of the chest, lower toward the waist keeping palms together. Hold 30 s.'},
    ],
  },
  feet:{
    fiberType:{label:'70% I / 30% II',pctII:30,pctI:70,note:'Predominantly slow-twitch, consistent with continuous arch support and proprioceptive functions throughout the day. Short-foot exercises, toe spreads, and single-leg balance work directly target these slow-twitch fibres. Barefoot training and gradual surface variability are the most effective long-term strategies.'},
    name:'Foot Intrinsics', sci:'Plantar & Dorsal Intrinsic Muscle Groups',
    region:'Foot', type:'Skeletal · Type I dominant',
    origin:'Calcaneus (plantar group), metatarsals, and plantar fascia',
    insert:'Proximal phalanges and flexor tendons of toes 1–5',
    desc:'The foot contains 20 intrinsic muscles arranged in four plantar layers plus a dorsal group. They are the engine of arch control — not the passive plantar fascia. Weak foot intrinsics are a primary driver of plantar fasciitis, flat arch collapse, and ankle instability. Barefoot training, toe curls, and single-leg balance directly target these muscles.',
    func:'Arch maintenance and dynamic stiffening during push-off. Toe flexion for propulsion (plantar group). Toe extension for foot clearance in gait (dorsal). Abduction of hallux (Abductor Hallucis). Stabilisation of the metatarsal heads during the terminal stance phase of gait and jumping.',
    tags:['Arch Support','Plantar Fascia','Balance','Toe Flexion','Gait','Jump Landing'],
    synergists:['calves','tibialis','peroneals'],
    antagonists:['tibialis','calves'],
    injuries:[
      {name:'Plantar fasciitis', severity:'moderate', desc:'Insertional fasciosis at the calcaneal attachment. Classic first-step morning pain. Weak foot intrinsics are a primary contributing factor. Heavy stretching is contraindicated acutely — progressive loading and intrinsic strengthening are the treatment.'},
      {name:'Hallux valgus (bunion)', severity:'mild', desc:'Lateral deviation of the big toe with medial bony prominence. Related to weak abductor hallucis, narrow footwear, and hyperpronation.'},
      {name:'Metatarsalgia', severity:'mild', desc:'Pain under the metatarsal heads from weak plantar intrinsics failing to support the transverse arch. Burning under the ball of the foot.'},
    ],
    stretches:[
      {name:'Toe spreading drill', desc:'Barefoot, lift all toes and spread them as wide as possible. Hold 5 s, repeat 10×. Activates intrinsic abductors.'},
      {name:'Short-foot exercise', desc:'Draw the ball of the foot toward the heel without curling the toes. Hold 10 s, repeat 10×. Gold-standard intrinsic strengthening drill.'},
    ],
  },
  rotatorcuff:{
    fiberType:{label:'60% I / 40% II',pctII:60,pctI:40,note:'Predominantly slow-twitch — the rotator cuff is a dynamic stabilising system, not a prime mover. It fires continuously throughout every shoulder movement to maintain glenohumeral centring. Light-to-moderate load, high-rep external rotation work, side-lying raises, and band exercises are most effective.'},
    name:'Rotator Cuff', sci:'Supraspinatus, Infraspinatus, Teres Minor & Subscapularis (SITS)',
    region:'Posterior Shoulder', type:'Skeletal · Type I dominant',
    origin:'Supraspinous fossa (Supraspinatus); Infraspinous fossa (Infraspinatus); Lateral scapular border (Teres Minor); Subscapular fossa, anterior scapula (Subscapularis)',
    insert:'Greater tubercle of humerus (Supra, Infra, Teres Minor); Lesser tubercle of humerus (Subscapularis)',
    desc:'The rotator cuff is four muscles whose tendons merge into a single cuff around the humeral head. Their job is not primarily to move the arm — it is to keep the humeral head centred in the glenoid socket during every shoulder movement. Without a strong rotator cuff, the deltoid simply pulls the humerus upward and impinges it on the acromion. It is the most commonly injured structure in the shoulder.',
    func:'Supraspinatus: initiates first 15–30° of abduction, compresses glenohumeral joint. Infraspinatus: primary external rotator of the shoulder. Teres Minor: external rotation and humeral head depression. Subscapularis: primary internal rotator, subscapular stabiliser. Together: dynamic stabilisation throughout the full shoulder range of motion.',
    tags:['Shoulder Stability','External Rotation','Internal Rotation','Impingement Prevention','Overhead Press','Rotator Cuff'],
    synergists:['deltoids','trapezius','serratus'],
    antagonists:['pectorals','lats'],
    injuries:[
      {name:'Supraspinatus tear', severity:'severe', desc:'Most common rotator cuff tear — at the critical zone 1 cm from insertion. Gradual (degenerative) or acute (trauma). Painful arc 60–120° of abduction. MRI required for diagnosis.'},
      {name:'Subscapularis tear', severity:'severe', desc:'Anterior shoulder pain, weakness in internal rotation. Often associated with anterior dislocation. Lift-off test or belly press positive. Frequently missed.'},
      {name:'Shoulder impingement', severity:'moderate', desc:'Mechanical compression of the supraspinatus tendon between the humeral head and acromion. Painful arc 70–120°. Usually results from rotator cuff weakness — responds to strengthening.'},
      {name:'SLAP tear', severity:'moderate', desc:'Superior labrum anterior to posterior tear — biceps long head anchor disrupted. Deep shoulder pain and clicking with overhead/throwing movements.'},
    ],
    stretches:[
      {name:'Sleeper stretch', desc:'Lie on the affected shoulder, elbow at 90°. Use other hand to gently press forearm toward the floor. Hold 30 s. Targets posterior capsule and infraspinatus.'},
      {name:'Cross-body posterior shoulder stretch', desc:'Pull one arm across the chest. Hold 30 s per side. Stretches posterior cuff — infraspinatus and teres minor.'},
    ],
  },
  neck:{
    fiberType:{label:'70% I / 30% II',pctII:30,pctI:70,note:'Strongly slow-twitch dominant — cervical muscles maintain head position (approximately 5 kg of load) against gravity for every waking hour. Deep cervical flexors (longus colli, longus capitis) are almost entirely Type I. High-rep, low-load endurance work and postural retraining are more effective than heavy neck training.'},
    name:'Neck Muscles', sci:'Sternocleidomastoid, Scalenes, Splenius & Semispinalis',
    region:'Cervical', type:'Skeletal · Type I dominant',
    origin:'SCM: manubrium and clavicle. Scalenes: transverse processes C2–C6. Splenius: ligamentum nuchae and spinous processes C7–T4.',
    insert:'SCM: mastoid process and lateral occipital bone. Scalenes: ribs 1–2. Splenius: mastoid process and occipital bone.',
    desc:'The neck contains over 20 muscles in several overlapping layers. The sternocleidomastoid (SCM) is the largest and most visible — its bilateral contraction flexes the neck; unilateral contraction rotates the head to the opposite side. The scalenes are important respiratory assistants, lifting the first two ribs during inhalation. Posterior muscles like the splenius and semispinalis extend and rotate the head and are chronically loaded in desk workers.',
    func:'SCM: neck flexion, lateral flexion, and contralateral rotation. Also elevates the sternum during forced inhalation. Scalenes: lateral neck flexion, first rib elevation (accessory breathing). Splenius Capitis: head extension and ipsilateral rotation. Semispinalis: bilateral head and neck extension, key postural muscle. Levator Scapulae: elevates the scapula and laterally flexes the cervical spine.',
    tags:['Head Position','Neck Flexion','Neck Extension','Posture','Breathing','Cervical Stability'],
    synergists:['trapezius','lowerback'],
    antagonists:['trapezius'],
    injuries:[
      {name:'Cervical strain / whiplash', severity:'moderate', desc:'Rapid flexion-extension mechanism overstretches cervical musculature. Delayed-onset neck stiffness, headache, and restricted rotation. Active early mobilisation outperforms immobilisation.'},
      {name:'Thoracic outlet syndrome (TOS)', severity:'moderate', desc:'Scalene tightness compresses the brachial plexus between the scalenes or below the clavicle. Arm pain, numbness, vascular symptoms. Scalene release and postural correction are first-line treatment.'},
      {name:'Cervicogenic headache', severity:'mild', desc:'SCM and suboccipital trigger points refer pain to the temple, forehead, and around the eye. Often mistaken for migraine. Upper cervical mobilisation is highly effective.'},
    ],
    stretches:[
      {name:'Levator scapulae stretch', desc:'Sit tall. Look down toward your armpit (45° rotation + flexion). Gently press down on the back of the head. Hold 30 s per side.'},
      {name:'SCM stretch', desc:'Tilt ear to shoulder, then rotate the chin slightly upward. Hold 30 s per side.'},
    ],
  },
  deepcore:{
    fiberType:{label:'80% I / 20% II',pctII:20,pctI:80,note:'Among the most slow-twitch muscles in the human body. The TVA, diaphragm, pelvic floor, and multifidus are all primarily postural muscles designed for continuous, low-level co-contraction throughout every waking hour. Heavy loading is counterproductive — slow, precise activation drills, breathing mechanics, and progressive loaded carries are the correct modalities.'},
    name:'Deep Core', sci:'Transversus Abdominis, Diaphragm, Multifidus & Pelvic Floor',
    region:'Deep Anterior Core', type:'Skeletal · Type I dominant',
    origin:'TVA: inguinal ligament, iliac crest, thoracolumbar fascia, costal cartilages 7–12. Diaphragm: lower ribs, sternum, lumbar vertebrae.',
    insert:'TVA: linea alba and thoracolumbar fascia (forms a corset). Diaphragm: central tendon.',
    desc:'The deep core is a pressure cylinder — diaphragm on top, pelvic floor on the bottom, TVA wrapping around the sides like a corset, and multifidus at the back. When co-contracted, these four muscles create intra-abdominal pressure (IAP), the most powerful spinal stabilisation mechanism the body has. Heavy lifting without this system firing is how backs get injured. The TVA alone is invisible from the surface — it never "shows" but everything depends on it.',
    func:'TVA: compresses the abdominal contents to generate and maintain intra-abdominal pressure. The primary anti-rotation and anti-extension spine stabiliser. Diaphragm: primary breathing muscle, IAP roof. Pelvic floor: IAP floor, continence, pelvic organ support. Multifidus: segmental lumbar spine stabilisation. All four must be trained together — isolating them is less effective than integrating them via breathing cues and bracing.',
    tags:['Core Bracing','Intra-Abdominal Pressure','Deadlift','Squat','Back Health','Breathing','Plank'],
    synergists:['abs','obliques','lowerback'],
    antagonists:['abs','lowerback'],
    injuries:[
      {name:'Pelvic floor dysfunction', severity:'moderate', desc:'Weakness (stress incontinence, pelvic organ prolapse under heavy load) or overactivity (pelvic pain). Both impair the IAP system. Requires specialist physiotherapy — Kegel exercises alone are insufficient and can worsen overactivity.'},
      {name:'Multifidus atrophy after back injury', severity:'moderate', desc:'After any lumbar injury, multifidus selectively atrophies and does NOT spontaneously recover — even after pain resolves. This explains why first-episode back pain commonly recurs. Motor control rehab (bird dogs, Pallof press) specifically targets multifidus recovery.'},
    ],
    stretches:[
      {name:'90/90 breathing drill', desc:'Lie on back, legs on a wall at 90°. Exhale fully, feel ribs drop. Inhale 360° into the ribcage. Teaches diaphragmatic breathing and IAP coordination.'},
    ],
  },
  peroneals:{
    fiberType:{label:'65% I / 35% II',pctII:35,pctI:65,note:'Predominantly slow-twitch, consistent with their role in continuous lateral ankle stability throughout gait. Fast-twitch fibres handle the reactive eversion response in ankle inversion injury prevention. Both high-rep eversion work and reactive balance training (wobble board, single-leg landings) are essential for complete peroneal development.'},
    name:'Peroneals', sci:'Fibularis Longus, Brevis & Tertius',
    region:'Lateral Lower Leg', type:'Skeletal · Type I dominant',
    origin:'Fibula head and upper 2/3 of lateral fibula (Longus & Brevis); anterior fibula distal third (Tertius)',
    insert:'Longus: plantar surface of medial cuneiform and 1st metatarsal base. Brevis: styloid process of 5th metatarsal. Tertius: dorsum of 5th metatarsal.',
    desc:'The peroneal muscles (properly called fibularis muscles) run down the lateral lower leg and wrap behind the lateral malleolus via a shared tendon groove. They are the primary defenders against ankle inversion sprains — an ankle rolls inward when the peroneals fail to fire fast enough. Peroneal strengthening is the single most effective intervention for recurrent ankle sprains.',
    func:'Peroneus Longus: ankle eversion (primary), plantarflexion, and support of the transverse arch of the foot. Peroneus Brevis: ankle eversion, 5th ray stabilisation. Peroneus Tertius: ankle dorsiflexion and eversion. Together they maintain the lateral ankle column stability in every step, jump, and landing.',
    tags:['Ankle Stability','Running','Jump Landing','Arch Support','Proprioception'],
    synergists:['tibialis','calves','feet'],
    antagonists:['tibialis'],
    injuries:[
      {name:'Peroneal tendinopathy', severity:'moderate', desc:'Degeneration of the peroneal longus or brevis tendon at the retromalleolar groove. Lateral ankle aching worsened by activity. Often follows chronic instability.'},
      {name:'Peroneal tendon subluxation', severity:'moderate', desc:'Retinaculum tears and tendons snap anteriorly over the lateral malleolus. Snapping sensation with ankle dorsiflexion. Requires immobilisation or surgical repair.'},
      {name:'Lateral ankle sprain', severity:'moderate', desc:'ATFL is the most commonly sprained ligament in the body. Occurs when peroneals fail to resist ankle inversion fast enough. Peroneal strengthening reduces recurrence by ~50%.'},
    ],
    stretches:[
      {name:'Peroneal stretch', desc:'Sit on the floor, cross one leg, and invert the foot (sole facing up and inward). Gently press into inversion until a lateral leg stretch is felt. Hold 30 s per side.'},
    ],
  },
};


/* ══════════════════════════════════════════════════════
   BONE DATA — 24 named regions
   type: long | flat | irregular | short | sesamoid
   ══════════════════════════════════════════════════════ */
const BONE_DATA = {
  skull:{
    name:'Skull',sci:'Cranium & Mandible',
    region:'Head',boneType:'Flat',
    desc:'The skull is 22 fused bones — 8 cranial bones forming the braincase and 14 facial bones. The neurocranium (calvarium) protects the brain; the viscerocranium forms the face and jaw. The only mobile bone is the mandible. Cranial sutures are fibrous joints that ossify in adulthood.',
    func:'Protects the brain from mechanical trauma. Houses the sense organs (eyes, ears, nasal cavity). Provides attachment for neck and jaw muscles. The mandible is the only lever capable of generating the bite force needed for mastication.',
    joints:['Temporomandibular (TMJ)','Atlanto-occipital (C0–C1)','Cervical Spine'],
    injuries:[
      {name:'Skull fracture',severity:'severe',desc:'Linear fractures of the calvarium from blunt impact. Basilar skull fractures (temporal/occipital base) carry risk of CSF leak and cranial nerve injury.'},
      {name:'Mandibular fracture',severity:'moderate',desc:'Common facial fracture from direct impact. Typically at the condyle neck or parasymphysis. Dental malocclusion and trismus are clinical signs.'},
    ],
    fact:'The temporal bone contains the smallest bones in the human body — the ossicles (malleus, incus, stapes) — within the middle ear. The stapes at 3 mm long is the smallest bone in the body.',
    muscles:['neck','trapezius'],
  },
  cervicalSpine:{
    name:'Cervical Spine',sci:'Vertebrae C1–C7',
    region:'Neck',boneType:'Irregular',
    desc:'Seven cervical vertebrae forming the neck column. C1 (atlas) and C2 (axis) are unique — C1 is a ring without a body; C2 has the dens (odontoid process) around which C1 rotates. C3–C7 are typical vertebrae with bodies, pedicles, laminae, and transverse foramina transmitting the vertebral arteries.',
    func:'Supports and positions the 5 kg head. Protects the cervical spinal cord. Provides 80° of flexion, 70° of extension, 45° of lateral bending, and 80° of rotation. The atlas-axis complex contributes ~50% of all cervical rotation.',
    joints:['Atlanto-occipital (C0–C1)','Atlantoaxial (C1–C2)','Facet joints C2–C7','Intervertebral discs C2–C7'],
    injuries:[
      {name:'Cervical disc herniation',severity:'moderate',desc:'Nucleus pulposus protrudes through the annulus at C5/C6 or C6/C7 most commonly. Radicular arm pain, paraesthesia, or weakness in the distribution of the compressed nerve root.'},
      {name:'Atlantoaxial instability',severity:'severe',desc:'Pathological laxity of the transverse ligament (Down syndrome, rheumatoid, trauma). Risk of C2 compression during extremes of cervical motion.'},
      {name:'Cervical fracture (hangman\'s / Jefferson)',severity:'severe',desc:'Burst fractures of C1 (Jefferson) or C2 pedicle fractures (hangman\'s). High-velocity mechanism. Spinal cord injury risk is high.'},
    ],
    fact:'C7\'s spinous process is the longest and most prominent — palpable as the "vertebra prominens" at the base of the neck. It\'s the anatomical landmark for counting thoracic vertebrae.',
    muscles:['neck','trapezius','lowerback'],
  },
  thoracicSpine:{
    name:'Thoracic Spine',sci:'Vertebrae T1–T12',
    region:'Upper Back',boneType:'Irregular',
    desc:'Twelve thoracic vertebrae with characteristic heart-shaped bodies, long posteriorly-angled spinous processes, and costal facets for rib articulation. The thoracic kyphosis (normal 20–45°) is a primary curve present since fetal life. The costovertebral articulations create a rigid rib-cage stabilising structure.',
    func:'Structural support of the upper body. Attachment for all 12 pairs of ribs. Protection of thoracic spinal cord. Contributes to trunk rotation (primary site). Costovertebral joints control rib movement during breathing — stiffness directly impairs respiratory mechanics.',
    joints:['Costovertebral joints (12 per side)','Costotransverse joints','Facet joints T1–T12','Intervertebral discs T1–T12'],
    injuries:[
      {name:'Thoracic compression fracture',severity:'severe',desc:'Osteoporotic or traumatic wedge collapse of a vertebral body, most common at T12/L1 junction. Sudden midback pain, height loss, kyphosis progression.'},
      {name:'Scheuermann\'s kyphosis',severity:'moderate',desc:'Structural kyphosis >45° from endplate irregularities during adolescent growth. Irreversible without bracing in growth phase. Associated with tight pec minors and weak thoracic extensors.'},
    ],
    fact:'The thoracic spine is the stiffest section of the vertebral column — the rib cage reduces each segment\'s ROM to ~2–3° of rotation. Athletes with restricted thoracic rotation compensate with excessive lumbar and shoulder motion, a key injury driver.',
    muscles:['trapezius','rhomboids','lowerback','serratus'],
  },
  lumbarSpine:{
    name:'Lumbar Spine',sci:'Vertebrae L1–L5',
    region:'Lower Back',boneType:'Irregular',
    desc:'Five large lumbar vertebrae with kidney-shaped bodies, short pedicles, broad laminae, and wide horizontally-oriented transverse processes. The lumbar lordosis (40–60°) is a secondary curve that develops when we begin walking. L4/L5 and L5/S1 are the most loaded and most commonly injured segments in the entire spine.',
    func:'Bears the full compressive load of the upper body. Primary site of forward trunk bending. Protects the lower spinal cord (conus medullaris ends at L1/L2) and cauda equina below. Lumbar multifidus and erector spinae attach directly to the lumbar transverse processes and spinous processes.',
    joints:['Facet joints L1–L5','Intervertebral discs L1–L5','Lumbosacral joint (L5/S1)','Iliolumbar ligament junction'],
    injuries:[
      {name:'L4/L5 or L5/S1 disc herniation',severity:'severe',desc:'The two most common herniation levels — compressed nerve roots cause sciatica (L4: medial calf; L5: dorsum of foot; S1: lateral calf). Positive straight leg raise confirms neural tension.'},
      {name:'Spondylolysis',severity:'moderate',desc:'Pars interarticularis stress fracture, most common at L5. Adolescent athletes in extension-loaded sports (gymnastics, cricket fast-bowling). Bilateral pars defects lead to spondylolisthesis.'},
      {name:'Lumbar stenosis',severity:'moderate',desc:'Narrowing of the spinal canal from osteophyte formation and ligamentum flavum hypertrophy. Neurogenic claudication — bilateral leg pain relieved by lumbar flexion (shopping cart sign).'},
    ],
    fact:'L5 is the largest vertebra in the spine and bears the greatest compressive force — up to 8× bodyweight during maximal deadlifts. The iliolumbar ligament anchors L5 to the ilium, making this the most mechanically constrained segment.',
    muscles:['lowerback','hipflexors','glutes'],
  },
  sacrum:{
    name:'Sacrum & Coccyx',sci:'Os Sacrum + Os Coccygis',
    region:'Pelvis',boneType:'Irregular',
    desc:'The sacrum is five fused vertebrae forming a triangular wedge between the two iliac bones. The sacroiliac joints (SIJs) are among the strongest joints in the body — secured by the posterior sacroiliac ligament complex, one of the strongest ligamentous structures in humans. The coccyx (3–5 fused vestigial vertebrae) anchors the pelvic floor.',
    func:'Transmits the entire upper body load to the pelvis and lower limbs. The wedge shape of the sacrum locks more tightly under load (force-closure). Provides attachment for the sacrotuberous and sacrospinous ligaments. The coccyx anchors coccygeus and levator ani — pelvic floor muscles.',
    joints:['Sacroiliac joints (bilateral)','Lumbosacral joint (L5/S1)','Sacrococcygeal joint'],
    injuries:[
      {name:'Sacroiliac joint dysfunction',severity:'moderate',desc:'Asymmetrical SIJ loading from leg length discrepancy or single-leg sport. Posterior iliac crest pain, positive FABER and FADIR tests. Highly prevalent in runners and CrossFit athletes.'},
      {name:'Coccyx fracture',severity:'mild',desc:'Direct impact (falling onto a hard surface). Severe coccydynia — pain on sitting and defecation. Usually managed conservatively with a coccyx cushion.'},
    ],
    fact:'SIJ motion is only 2–4° of nutation/counternutation — yet it is disproportionately common as a pain generator. The pelvic ring\'s rigidity comes not from bone but from the extraordinary ligament system holding the sacrum in place.',
    muscles:['glutes','lowerback'],
  },
  pelvis:{
    name:'Pelvis',sci:'Os Coxae — Ilium, Ischium & Pubis',
    region:'Hip',boneType:'Flat',
    desc:'Each hip bone is three embryologically separate bones (ilium, ischium, pubis) that fuse at the triradiate cartilage by age 16. The ilium forms the broad flat wing; the ischium the posterior-inferior weight-bearing segment; the pubis the anterior arch. The two hip bones articulate anteriorly at the pubic symphysis and posteriorly with the sacrum.',
    func:'Transmits upper body loads to femora. Protects pelvic viscera. Provides vast surface area for hip and trunk muscle origins. The acetabulum (from all three bones) is the deep socket for the femoral head — one of the most stable ball-and-socket joints in the body.',
    joints:['Hip joints (acetabulum)','Sacroiliac joints','Pubic symphysis','Lumbosacral junction'],
    injuries:[
      {name:'Stress fracture of pubic ramus',severity:'moderate',desc:'Overuse fracture in distance runners and military recruits. Groin or medial thigh pain worsened by impact. Requires 6–8 weeks off impact loading.'},
      {name:'Avulsion fractures (ASIS/AIIS/ischial)',severity:'moderate',desc:'Explosive hip flexor or hamstring contraction avulses apophysis in adolescents. Sudden sharp hip/groin pain during sprinting. Treated conservatively.'},
      {name:'Hip labral tear',severity:'moderate',desc:'Fibrocartilaginous labrum tears from acetabular impingement (FAI), hypermobility, or trauma. Deep anterior hip pain, clicking, and restricted rotation. Often requires arthroscopic repair.'},
    ],
    fact:'The female pelvis is wider, shallower, and has a larger subpubic angle (>90°) compared to the male pelvis — adaptations for childbirth. This increased Q-angle in females increases the lateral pull on the patella, contributing to higher rates of PFPS and ACL injury.',
    muscles:['glutes','hamstrings','hipflexors','adductors','quadriceps'],
  },
  clavicle:{
    name:'Clavicle',sci:'Clavicula',
    region:'Shoulder Girdle',boneType:'Long',
    desc:'The clavicle is the only long bone oriented horizontally. It is S-shaped — medially convex anteriorly, laterally concave. It is the first bone to begin ossification (5th–6th week in utero) and the last to complete it (medial epiphysis fuses at 25–30 years). It acts as a strut, holding the shoulder away from the chest wall.',
    func:'Transmits compressive and tensile forces between the upper limb and axial skeleton. Protects the underlying brachial plexus and subclavian vessels. Elevates and rotates the shoulder girdle. The clavicle rotates ~50° posteriorly during full shoulder elevation — this is essential and invisible to casual examination.',
    joints:['Sternoclavicular joint (medial)','Acromioclavicular joint (lateral)','Coracoclavicular ligament attachment'],
    injuries:[
      {name:'Clavicle fracture',severity:'moderate',desc:'The most commonly fractured bone in the body — 80% at the middle third. Fall on outstretched hand or direct lateral shoulder impact. Deformity, tenderness, and arm guarding. Most treated conservatively; displaced fractures increasingly plated.'},
      {name:'AC joint separation',severity:'moderate',desc:'Coracoclavicular ligament tear graded I–VI. Lateral clavicle "step deformity." Extremely common in contact sport. Grade I–III managed conservatively; IV–VI may need surgical reduction.'},
    ],
    fact:'The clavicle is the most commonly fractured bone in sport, accounting for ~5% of all fractures. In rugby and cycling, it accounts for up to 15% of injuries. The middle third is weakest because it lacks muscle reinforcement on both surfaces.',
    muscles:['trapezius','deltoids','pectorals'],
  },
  scapula:{
    name:'Scapula',sci:'Scapula (Shoulder Blade)',
    region:'Posterior Shoulder',boneType:'Flat',
    desc:'A triangular flat bone with two surfaces (subscapular fossa and infraspinous fossa), three borders, three angles, and the key landmarks: spine, acromion, coracoid process, glenoid fossa, and suprascapular notch. It articulates only at the acromioclavicular and glenohumeral joints — everything else is muscle-dependent (scapulothoracic "joint"). The glenoid fossa is only 25–30% the size of the humeral head.',
    func:'Provides the glenoid socket for the glenohumeral joint. Acts as origin for 17 muscles. Rotates, protracts, and retracts to position the glenoid under the moving humerus — scapular kinematics are prerequisite for all overhead function. The scapular spine is the landmark for identifying trapezius fibre direction.',
    joints:['Glenohumeral joint','Acromioclavicular joint','Scapulothoracic articulation (functional)'],
    injuries:[
      {name:'Scapular winging',severity:'moderate',desc:'Medial border lifts off the thorax due to serratus anterior weakness (long thoracic nerve palsy) or rhomboid/trapezius weakness. Painful, limits overhead strength by up to 60%.'},
      {name:'Suprascapular nerve entrapment',severity:'moderate',desc:'Nerve compressed at the suprascapular notch or spinoglenoid notch. Insidious posterior shoulder ache and selective infraspinatus or supraspinatus atrophy.'},
    ],
    fact:'The glenoid labrum deepens the shallow glenoid fossa by 50% — without it, glenohumeral joint contact area drops dramatically and the shoulder becomes unstable. The labrum contributes more to shoulder stability than the bony socket itself.',
    muscles:['rotatorcuff','deltoids','serratus','rhomboids','trapezius','biceps','reardelts'],
  },
  humerus:{
    name:'Humerus',sci:'Humerus',
    region:'Upper Arm',boneType:'Long',
    desc:'The largest bone of the upper limb. The proximal end features the spherical head (articulating with glenoid), anatomical neck, surgical neck (most common fracture site), greater and lesser tubercles, and the bicipital groove. The shaft twists ~165° between proximal and distal ends. The distal end forms the condyles, trochlea, capitulum, medial and lateral epicondyles, and olecranon fossa.',
    func:'Provides the lever arm for elbow and shoulder movements. The greater tubercle is the primary attachment for three rotator cuff muscles (supraspinatus, infraspinatus, teres minor). The medial epicondyle anchors the common flexor origin; lateral the common extensor origin.',
    joints:['Glenohumeral joint (proximal)','Humeroulnar joint (distal)','Humeroradial joint (distal)'],
    injuries:[
      {name:'Proximal humerus fracture',severity:'severe',desc:'Four-part Neer classification. Surgical neck fractures account for ~80%. High fall-on-outstretched-hand mechanism. Axillary nerve injury risk.'},
      {name:'Humeral shaft fracture',severity:'moderate',desc:'Direct blow or spiral torsional mechanism. Radial nerve palsy at the spiral groove (wrist drop) in up to 20% of mid-shaft fractures.'},
    ],
    fact:'The bicipital groove (intertubercular sulcus) houses the long head of biceps tendon — a common site of tendinitis and tendon rupture. Its medial wall angle predicts impingement risk: angles <30° associated with higher tendinitis rates.',
    muscles:['deltoids','rotatorcuff','pectorals','biceps','triceps'],
  },
  radius:{
    name:'Radius & Ulna',sci:'Radius + Ulna',
    region:'Forearm',boneType:'Long',
    desc:'Two parallel bones connected by the interosseous membrane. The radius is laterally placed and rotates around the ulna during pronation/supination. The ulna is the primary stabiliser of the elbow — its olecranon fits precisely into the olecranon fossa. The radius bears ~60% of axial forearm load at the wrist.',
    func:'Radius: primary wrist articulator; rotates during forearm pronation/supination. Ulna: primary elbow stabiliser via the trochlear notch/semilunar notch. The interosseous membrane transfers ~80% of axial load from the radius to the ulna. Together they form the DRUJ (distal radioulnar joint) for forearm rotation.',
    joints:['Humeroulnar joint','Humeroradial joint','Proximal radioulnar joint','Distal radioulnar joint (DRUJ)','Radiocarpal joint (wrist)'],
    injuries:[
      {name:'Colles\' fracture',severity:'moderate',desc:'Distal radius fracture with dorsal angulation — the most common fracture in adults over 50. Fall on outstretched hand. "Dinner fork" deformity. Treat with reduction and casting or volar plate fixation.'},
      {name:'Radial head fracture',severity:'moderate',desc:'Fall on outstretched hand transmits force to the radial head. Lateral elbow pain, restricted pronation/supination. Mason classification. Often managed with early mobilisation.'},
      {name:'Galeazzi / Monteggia fractures',severity:'severe',desc:'Combined fractures with radioulnar dislocation. Galeazzi = distal radius fracture + DRUJ dislocation. Monteggia = proximal ulna fracture + radial head dislocation. Require surgical fixation.'},
    ],
    fact:'Forearm pronation/supination occurs by the radius rotating around the fixed ulna — ~150° arc. This rotation is essential for all object manipulation; loss of 50% rotation from a malunited fracture dramatically impairs daily function.',
    muscles:['biceps','forearms'],
  },
  carpals:{
    name:'Wrist & Hand Bones',sci:'Carpals, Metacarpals & Phalanges',
    region:'Hand',boneType:'Short',
    desc:'Eight carpal bones (proximal row: scaphoid, lunate, triquetrum, pisiform; distal row: trapezium, trapezoid, capitate, hamate) plus five metacarpals and fourteen phalanges per hand. The scaphoid bridges the two carpal rows — a position that makes it highly vulnerable to fracture and avascular necrosis.',
    func:'Wrist flexion/extension (radiocarpal and midcarpal joints). Fine motor precision. Force transmission from digits to forearm. The carpal tunnel (through carpal bones and flexor retinaculum) transmits nine tendons and the median nerve. The hamate hook is the pulley for the ring and little finger flexors.',
    joints:['Radiocarpal joint','Midcarpal joint','CMC joints (1–5)','MCP joints','PIP/DIP joints'],
    injuries:[
      {name:'Scaphoid fracture',severity:'moderate',desc:'Most common carpal fracture — often missed on initial X-ray. Anatomical snuffbox tenderness. Proximal pole fractures risk avascular necrosis (no direct blood supply). MRI gold standard in first 48h.'},
      {name:'Hook of hamate fracture',severity:'moderate',desc:'Bat/racket/club impact. Ulnar side of the palm pain and weakness in ring/little finger grip. Carpal tunnel CT required.'},
      {name:'Mallet finger',severity:'mild',desc:'Extensor tendon avulsion at the DIP joint distal phalanx — ball-to-fingertip impact. Persistent DIP flexion deformity. Splint in extension for 6–8 weeks.'},
    ],
    fact:'The scaphoid is the most frequently fractured carpal bone and the most frequently missed fracture in the emergency department — up to 20% of scaphoid fractures are not visible on initial X-ray. A missed fracture risks avascular necrosis and non-union.',
    muscles:['forearms','hands'],
  },
  ribs:{
    name:'Ribs & Sternum',sci:'Costae 1–12 + Sternum',
    region:'Thorax',boneType:'Flat',
    desc:'Twelve pairs of ribs forming the bony thoracic cage. Ribs 1–7 are "true" ribs — each articulates with the sternum via its own costal cartilage. Ribs 8–10 are "false" (shared cartilage). Ribs 11–12 are "floating" (no anterior attachment). The sternum is three parts: manubrium, body, xiphoid process — united by the sternal angle of Louis (T4 landmark).',
    func:'Protects heart and lungs from mechanical trauma. Costovertebral joint motion drives respiratory mechanics — ribs 1–6 "pump handle" (anterior–posterior), ribs 7–10 "bucket handle" (lateral). Thoracic cage rigidity is crucial for force transfer in the upper extremity kinetic chain.',
    joints:['Costovertebral joints (posterior)','Costotransverse joints','Costochondral junctions','Sternocostal joints'],
    injuries:[
      {name:'Rib stress fracture',severity:'moderate',desc:'Posteromedial ribs in rowers (1st rib at scalene attachment in throwers). Lateral lower ribs in golfers. Pain with deep breathing, coughing, rotation.'},
      {name:'Costochondral strain',severity:'mild',desc:'Hypermobile costal cartilage junction — sharp, well-localised chest pain worsened by rotation and deep breath. Clinically mimics cardiac pain.'},
    ],
    fact:'The first rib is the widest, shortest, and most curved rib but is also the one most likely to fracture in high-energy trauma due to its position — scalene muscles attach on its superior surface, making it a stress-fracture site in throwers and rowers.',
    muscles:['pectorals','serratus','intercostals'],
  },
  femur:{
    name:'Femur',sci:'Femur (Thigh Bone)',
    region:'Thigh',boneType:'Long',
    desc:'The longest and strongest bone in the human body. The proximal femur has a spherical head (135° neck-shaft angle, ~15° anteversion in adults), neck, greater and lesser trochanters. The shaft is cylindrical. The distal femur flares into the medial and lateral condyles and the patellar groove. The femur transmits 2.5–5× bodyweight during walking and up to 8× during landing.',
    func:'Primary load-bearing bone of the lower limb. Greater trochanter anchors the hip abductors and external rotators. Lesser trochanter is the insertion of iliopsoas. The linea aspera (posterior ridge) is the attachment for adductors and vastus medialis/lateralis. Femoral anteversion influences patellar tracking and knee mechanics.',
    joints:['Hip joint (femoral head)','Patellofemoral joint','Tibiofemoral joint (medial and lateral condyles)'],
    injuries:[
      {name:'Femoral neck stress fracture',severity:'severe',desc:'High-risk fracture in female athletes (RED-S), military recruits, and distance runners. Groin pain with impact. Tension-side fractures (superior neck) risk displacement — require surgical pinning. Do NOT return to running.'},
      {name:'Subtrochanteric / shaft fracture',severity:'severe',desc:'High-energy trauma. Femur shaft fractures cause up to 2L blood loss into the thigh. Require surgical intramedullary nailing.'},
      {name:'Distal femur fracture',severity:'severe',desc:'Supracondylar fractures in osteoporotic elderly or high-energy young patients. Popliteal artery at risk due to proximal pull of gastrocnemius. Requires urgent vascular assessment.'},
    ],
    fact:'The neck-shaft angle of 135° is critical: coxa vara (<120°) shortens the limb and impairs abductor mechanics; coxa valga (>140°) increases shear stress on the femoral neck and risk of hip displacement. Athletes with wide stance squatting may alter hip mechanics based on native femoral neck angles.',
    muscles:['glutes','hamstrings','adductors','quadriceps','hipflexors'],
  },
  patella:{
    name:'Patella',sci:'Patella (Kneecap)',
    region:'Knee',boneType:'Sesamoid',
    desc:'The largest sesamoid bone in the body — embedded within the quadriceps tendon. The patella has a convex anterior surface and a V-shaped posterior articular surface divided by a median ridge into medial and lateral facets. It begins as cartilage and ossifies from 3–6 years of age.',
    func:'Increases the mechanical advantage (moment arm) of the quadriceps by ~30%. Reduces tensile stress on the patellar tendon. Protects the anterior knee from direct trauma. Quadriceps force is transmitted through the patellar tendon to the tibial tuberosity — the patella is the fulcrum of this lever system.',
    joints:['Patellofemoral joint','Patellofemoral trochlear groove (femur)'],
    injuries:[
      {name:'Patellar fracture',severity:'severe',desc:'Direct impact or eccentric quadriceps force. Disrupts the extensor mechanism — patient cannot perform a straight leg raise. Operative for displaced fractures.'},
      {name:'Patellar dislocation',severity:'moderate',desc:'Lateral dislocation (96% of cases) from MPFL rupture. Young female athletes, trochlear dysplasia as risk factor. Spontaneous reduction is common. MPFL reconstruction reduces recurrence.'},
      {name:'Bipartite patella',severity:'mild',desc:'Superolateral ossification centre fails to fuse — present in 2–3% of people. Usually asymptomatic; can become painful with direct trauma or patellar loading sports.'},
    ],
    fact:'The quadriceps angle (Q-angle) — from ASIS to patella centre to tibial tuberosity — is 10–15° in males and 15–20° in females. A Q-angle >20° increases lateral patellar stress and is a risk factor for PFPS, patellar dislocation, and patellar tendinopathy.',
    muscles:['quadriceps'],
  },
  tibia:{
    name:'Tibia & Fibula',sci:'Tibia + Fibula',
    region:'Lower Leg',boneType:'Long',
    desc:'The tibia is the primary weight-bearing bone of the lower leg — its proximal surface (tibial plateau) bears the full body weight transmitted from the femoral condyles. The fibula is a non-weight-bearing strut providing the lateral ankle mortise and origin for lower leg muscles. The tibia bears ~85% of lower leg compressive load; the fibula 15%.',
    func:'Tibia: primary load-bearing, proximal attachment of patellar tendon (tibial tuberosity), origin of tibialis posterior and long toe flexors, medial malleolus forms the medial ankle mortise. Fibula: lateral malleolus forms the lateral ankle mortise (critical for ankle stability), origin of peroneals.',
    joints:['Tibiofemoral joint (proximal tibia)','Proximal tibiofibular joint','Distal tibiofibular syndesmosis','Talocrural (ankle) joint'],
    injuries:[
      {name:'Tibial stress fracture',severity:'moderate',desc:'Posteromedial tibia most common site in runners. Focal pinpoint tenderness, positive tuning fork test. Requires 4–8 weeks off impact. Anterior cortex fractures ("dreaded black line") have high non-union risk.'},
      {name:'Proximal tibial plateau fracture',severity:'severe',desc:'Axial load with valgus/varus force — common in motor vehicle accidents and ski injuries. Medial plateau fractures often involve LCL/cruciate tears. Requires CT for surgical planning.'},
      {name:'Fibula stress fracture',severity:'mild',desc:'Distal fibula stress fracture in runners and dancers. Lateral lower leg pain with impact. Generally benign with 4–6 weeks activity modification.'},
    ],
    fact:'The tibial tuberosity is the insertion of the patellar tendon — the most powerful tendon in the body. In adolescents, this apophysis is vulnerable to traction injury (Osgood-Schlatter disease) — a common cause of anterior knee pain in active teenagers aged 10–15.',
    muscles:['hamstrings','calves','tibialis','peroneals'],
  },
  tarsals:{
    name:'Foot Bones',sci:'Tarsals, Metatarsals & Phalanges',
    region:'Foot',boneType:'Short',
    desc:'Seven tarsal bones (talus, calcaneus, navicular, cuboid, three cuneiforms), five metatarsals, and fourteen phalanges per foot. The talus is unique — it has no muscle attachments and receives force from the entire body. The calcaneus is the largest tarsal bone and the insertion of the Achilles tendon. The plantar fascia originates on the medial calcaneal tuberosity.',
    func:'Supports body weight. Spring-like energy storage and return during walking/running gait. The medial longitudinal arch (calcaneus → talus → navicular → cuneiforms → metatarsals 1–3) is the primary energy storage structure. The transverse arch spreads load across the metatarsal heads.',
    joints:['Talocrural (ankle) joint','Subtalar joint','Midtarsal (Chopart\'s) joint','Tarsometatarsal (Lisfranc) joints','MTP joints'],
    injuries:[
      {name:'Jones fracture (5th metatarsal base)',severity:'moderate',desc:'Fracture at the metaphyseal-diaphyseal junction — notoriously poor blood supply, high non-union risk. Distinguished from the common avulsion fracture at the styloid. Athletes require screw fixation for early return.'},
      {name:'Lisfranc fracture-dislocation',severity:'severe',desc:'Disruption of tarsometatarsal ligaments — frequently missed. Plantar ecchymosis (Peicha\'s sign) is pathognomonic. Anatomical reduction required; even mild displacement causes rapid post-traumatic arthritis.'},
      {name:'Calcaneal stress fracture',severity:'moderate',desc:'Medial and lateral calcaneal compression test positive. Military recruits and distance runners. Visible on MRI or bone scan before X-ray. 6–8 weeks non-weight-bearing.'},
    ],
    fact:'The Achilles tendon inserts onto the posterior calcaneal tuberosity with a force of up to 9× bodyweight during running — making it the most load-intensive tendon insertion in the body. The retrocalcaneal bursa between the tendon and bone is a frequent source of insertional tendinopathy.',
    muscles:['calves','peroneals','tibialis','feet'],
  },
};

/* ══════════════════════════════════════════════════════
   TENDON DATA
   ══════════════════════════════════════════════════════ */
const TENDON_DATA = {
  achilles:{
    name:'Achilles Tendon', sci:'Tendo Calcaneus',
    region:'Posterior Heel', tendonType:'Long',
    origin:'Gastrocnemius & Soleus (calf complex)',
    insertion:'Posterior calcaneal tuberosity',
    desc:'The largest and strongest tendon in the human body — approximately 15 cm long and capable of withstanding forces of 9× bodyweight during running. Formed by the convergence of gastrocnemius and soleus aponeuroses. The tendon rotates 90° as it descends, creating internal tensile stress that predisposes it to mid-substance degeneration.',
    func:'Transmits the full plantarflexion force of the calf complex to the heel. Essential for push-off during walking, running, and jumping. Works eccentrically to decelerate dorsiflexion during landing and absorbs elastic strain energy for recoil.',
    injuries:[
      {name:'Achilles tendinopathy',severity:'moderate',desc:'Degenerative change of the tendon mid-substance (2–6 cm above insertion) from repetitive overload. Morning stiffness, focal thickening, pain with load. Managed with progressive eccentric loading (Alfredson protocol).'},
      {name:'Insertional Achilles tendinopathy',severity:'moderate',desc:'Enthesopathy at the calcaneal insertion — distinct from mid-portion tendinopathy. Often associated with Haglund deformity (bony heel prominence). Eccentric heel drops behind the step are contraindicated; heavy slow resistance preferred.'},
      {name:'Achilles tendon rupture',severity:'severe',desc:'Complete rupture at the mid-substance (2–6 cm above insertion). Audible "pop," positive Thompson squeeze test. Age 30–50, male-dominant. Operative vs conservative management remains debated — outcomes equivalent with accelerated rehab.'},
    ],
    fact:'The Achilles tendon is the thickest but also the most frequently ruptured tendon in the body. Fluoroquinolone antibiotics (ciprofloxacin) significantly increase rupture risk — a critical consideration for active patients.',
    muscles:['calves'],
    bones:['tarsals'],
  },
  patellar:{
    name:'Patellar Tendon', sci:'Ligamentum Patellae',
    region:'Anterior Knee', tendonType:'Long',
    origin:'Inferior pole of patella',
    insertion:'Tibial tuberosity',
    desc:'Technically a ligament (bone-to-bone) but functionally the distal extension of the quadriceps mechanism. Approximately 5 cm long and 3 cm wide. Connects the patella to the tibial tuberosity, completing the extensor mechanism of the knee. Under compressive load the deep surface contacts the fat pad.',
    func:'Transmits quadriceps force across the knee joint to extend the knee. The patella acts as a pulley, increasing the mechanical advantage by ~30%. Peak forces reach 7–8× bodyweight during deep squatting.',
    injuries:[
      {name:'Patellar tendinopathy (Jumper\'s Knee)',severity:'moderate',desc:'Reactive or degenerative change at the inferior patellar pole — the most common overuse injury in jumping athletes (volleyball, basketball). Pain on palpation of the inferior pole. Heavy slow resistance (leg press, hack squat) is the cornerstone of rehab.'},
      {name:'Patellar tendon rupture',severity:'severe',desc:'Usually occurs in males under 40 from eccentric overload or direct impact. Patient cannot perform active knee extension or straight leg raise. Requires surgical repair and 6–12 months rehabilitation.'},
      {name:'Osgood-Schlatter disease',severity:'mild',desc:'Traction apophysitis at the tibial tuberosity in adolescents during growth spurts. Painful bony prominence below the knee. Load management and quadriceps stretching; generally self-resolving.'},
    ],
    fact:'The distinction between "patellar tendinopathy" and "patellar tendinitis" matters clinically — true inflammation (tendinitis) is rare and transient; degenerative tendinopathy with failed healing response is the dominant pathology and responds poorly to anti-inflammatories.',
    muscles:['quadriceps'],
    bones:['patella','tibia'],
  },
  quadricepsTendon:{
    name:'Quadriceps Tendon', sci:'Tendo Quadricipitis Femoris',
    region:'Anterior Knee (Proximal)', tendonType:'Long',
    origin:'Quadriceps femoris (four heads)',
    insertion:'Superior pole of patella',
    desc:'A broad, flat tendon formed by the convergence of all four quadriceps muscles. Wider and shorter than the patellar tendon. Has a trilaminar structure: rectus femoris anteriorly, vasti medially and laterally. Increasingly used as a graft source for ACL reconstruction due to its large cross-sectional area.',
    func:'Transmits the combined force of all four quadriceps heads to the patella and ultimately to the tibial tuberosity. Resists knee flexion under load. The most powerful extensor mechanism in the lower limb.',
    injuries:[
      {name:'Quadriceps tendon rupture',severity:'severe',desc:'Typically in males over 40 with pre-existing tendinopathy, steroid use, or metabolic disease (diabetes, renal failure). Avulsion from the superior patellar pole. Palpable gap above the patella, inability to extend knee. Requires surgical repair.'},
      {name:'Quadriceps tendinopathy',severity:'moderate',desc:'Insertional degeneration at the superior patellar pole, less common than patellar tendinopathy. Pain above the patella with heavy loading (squats, leg press). Treat with progressive tendon loading.'},
    ],
    fact:'The quadriceps tendon is now the preferred ACL graft in many centres — a 10 mm wide graft from the central quadriceps tendon matches the native ACL cross-section and avoids the donor-site morbidity of patellar or hamstring grafts.',
    muscles:['quadriceps'],
    bones:['patella','femur'],
  },
  bicepsTendon:{
    name:'Biceps Distal Tendon', sci:'Tendo Bicipitis Brachii (Distalis)',
    region:'Anterior Elbow', tendonType:'Short',
    origin:'Biceps brachii (short & long head)',
    insertion:'Radial tuberosity & bicipital aponeurosis',
    desc:'The distal tendon of the biceps attaches to the radial tuberosity and the bicipital aponeurosis (lacertus fibrosus). The bicipital aponeurosis is a broad fascial sheet protecting the brachial artery and median nerve. The tendon passes through a narrow bicipital tunnel where it is vulnerable to impingement during forearm rotation.',
    func:'Elbow flexion and forearm supination. The supination function is biomechanically significant — the tendon wraps around the radius, creating a powerful rotational moment arm. In forearm supination, the tendon force reaches 2–3× bodyweight during gripping tasks.',
    injuries:[
      {name:'Distal biceps tendon rupture',severity:'severe',desc:'Eccentric load during elbow flexion (lifting, catching). Palpable defect in the antecubital fossa, "Popeye" sign. Leads to 40% loss of supination and 30% loss of flexion strength if untreated. Surgical reattachment recommended for active patients.'},
      {name:'Distal biceps tendinopathy',severity:'moderate',desc:'Insertional degeneration from repetitive forearm rotation and elbow loading. Anterior elbow pain with resisted supination. Hook test positive. Treat with load modification and eccentric exercises.'},
    ],
    fact:'Distal biceps tendon rupture classically occurs in the dominant arm of males aged 40–60 during an unexpected eccentric load — e.g. catching a falling object. The "hook test" (hooking a finger around the tendon in the antecubital fossa) has 100% sensitivity for complete rupture.',
    muscles:['biceps'],
    bones:['radius'],
  },
  rotatorcuff:{
    name:'Rotator Cuff Tendons', sci:'Tendines Musculi Rotatorii Cuff',
    region:'Shoulder', tendonType:'Rotator cuff',
    origin:'Scapula (glenoid rim, supraspinous/infraspinous/subscapular fossa)',
    insertion:'Greater & lesser tubercles of humerus',
    desc:'Four tendons (supraspinatus, infraspinatus, subscapularis, teres minor) that blend with the glenohumeral joint capsule to form a continuous cuff. The supraspinatus tendon passes under the coracoacromial arch — the "critical zone" 1 cm proximal to its insertion is avascular and the commonest site of rotator cuff tears. The tendons collectively compress the humeral head into the glenoid.',
    func:'Dynamic shoulder stabilisation — compresses the humeral head into the glenoid throughout shoulder motion. Each muscle has a directional role: supraspinatus initiates abduction, infraspinatus/teres minor externally rotate, subscapularis internally rotates. The cuff balances the deltoid\'s superior shear force to enable true abduction.',
    injuries:[
      {name:'Supraspinatus tear (partial or full)',severity:'severe',desc:'The most common rotator cuff tear. Partial tears in athletes from overuse; full-thickness tears in older adults from degeneration. Painful arc at 60–120° of abduction, positive empty can test. MRI gold standard. Surgical repair for full-thickness tears in active patients.'},
      {name:'Rotator cuff tendinopathy',severity:'moderate',desc:'Reactive or degenerative tendinopathy typically in the supraspinatus critical zone. Painful arc, night pain, weakness in external rotation. Treat with scapular control exercises, rotator cuff strengthening, and subacromial load management.'},
      {name:'Calcific tendinitis',severity:'moderate',desc:'Calcium hydroxyapatite deposition within the supraspinatus tendon. Acute phase causes excruciating pain from chemical irritation. Most resolve spontaneously; refractory cases respond to ultrasound-guided barbotage.'},
    ],
    fact:'The "critical zone" of the supraspinatus tendon — 1 cm from its insertion — is the most avascular region of any tendon in the body, explaining why tears almost always originate here rather than at the musculotendinous junction.',
    muscles:['rotatorcuff','deltoids'],
    bones:['humerus','scapula'],
  },
  proxHamstring:{
    name:'Proximal Hamstring Tendons', sci:'Tendines Ischiocrurei (Proximales)',
    region:'Posterior Hip', tendonType:'Long',
    origin:'Ischial tuberosity (common origin)',
    insertion:'Proximal femur (biceps femoris to lateral aspect; semi-tendons to medial)',
    desc:'Three tendons (biceps femoris long head, semitendinosus, semimembranosus) share a common origin at the ischial tuberosity. The conjoined tendon of biceps femoris and semitendinosus sits superficially; semimembranosus is deeper and broader. This origin is the most commonly avulsed tendon insertion in the body among sprinting athletes.',
    func:'Hip extension and knee flexion. The proximal hamstring origin is under maximum load during the late swing phase of sprinting — when the hip is flexed and the knee is extending simultaneously. This lengthened position under high force is the mechanism of both proximal tendinopathy and proximal avulsion.',
    injuries:[
      {name:'Proximal hamstring tendinopathy',severity:'moderate',desc:'Degenerative change at the ischial tuberosity origin — the classic "runner\'s deep buttock pain." Worsened by sitting on hard surfaces, hill running, and lunges (hip flexion loads the tendon eccentrically). Isometric holds (Nordic curls with hip extension) are first-line.'},
      {name:'Proximal hamstring avulsion',severity:'severe',desc:'Explosive hip flexion with knee extension avulses the conjoined tendon from the ischium. Sprinting or waterskiing fall. MRI shows complete retraction. Surgical reattachment for >2 cm retraction or athletes.'},
      {name:'Hamstring origin bursitis',severity:'mild',desc:'Ischial bursa inflammation from repetitive friction. Deep buttock pain aggravated by prolonged sitting. Ultrasound-guided corticosteroid injection effective when combined with load management.'},
    ],
    fact:'Proximal hamstring tendinopathy is exquisitely sensitive to hip flexion angle — symptoms worsen on a bike but improve when running uphill. The key biomechanical driver is the "degree of hip flexion beyond 90°" which drastically increases tendon compressive load against the ischium.',
    muscles:['hamstrings'],
    bones:['pelvis','femur'],
  },
  iliopsoas:{
    name:'Iliopsoas Tendon', sci:'Tendo Iliopsoas',
    region:'Anterior Hip', tendonType:'Long',
    origin:'Iliacus (iliac fossa) + Psoas major (T12–L5)',
    insertion:'Lesser trochanter of femur',
    desc:'The combined tendon of iliacus and psoas major as they converge to pass under the inguinal ligament and over the anterior hip capsule before inserting on the lesser trochanter. The tendon passes over the iliopectineal eminence in a groove where it can produce the "snapping hip" (coxa saltans interna). The iliopsoas bursa lies between the tendon and the hip capsule.',
    func:'The primary hip flexor — essential for walking, running, and all activities requiring lifting the thigh. Also contributes to lumbar spine stabilisation via the psoas attachment to the lumbar vertebrae. Under maximal load the tendon force is estimated at 2.5–4× bodyweight.',
    injuries:[
      {name:'Iliopsoas tendinopathy',severity:'moderate',desc:'Insertional degeneration at the lesser trochanter from repetitive hip flexion. Common in dancers, gymnasts, and cyclists. Anterior groin pain with resisted hip flexion and passive extension. Load with progressive hip flexion strengthening.'},
      {name:'Snapping hip (coxa saltans)',severity:'mild',desc:'Audible or palpable snap as the iliopsoas tendon flicks over the iliopectineal eminence during hip flexion-to-extension. Often painless; becomes symptomatic with bursitis. Fluoroscopic-guided iliopsoas bursa injection for refractory cases.'},
      {name:'Iliopsoas bursitis',severity:'moderate',desc:'The iliopsoas bursa (largest bursa in the body) communicates with the hip joint in 15% of people. Inflammation from rheumatoid arthritis, OA, or tendon overload. Anterior hip pain and groin swelling. Corticosteroid injection under image guidance.'},
    ],
    fact:'The iliopsoas bursa is the largest bursa in the body and communicates directly with the hip joint in 15% of people — making bursitis a potential indicator of hip joint pathology (rheumatoid synovitis, hip effusion) when it presents bilaterally.',
    muscles:['hipflexors'],
    bones:['pelvis','femur'],
  },
  tibAnterior:{
    name:'Tibialis Anterior Tendon', sci:'Tendo Musculi Tibialis Anterioris',
    region:'Anterior Ankle', tendonType:'Long',
    origin:'Tibialis anterior muscle (lateral tibial shaft)',
    insertion:'Medial cuneiform & base of 1st metatarsal',
    desc:'The largest anterior compartment tendon. Passes under the superior and inferior extensor retinacula at the ankle before inserting on the medial cuneiform. The tendon is surrounded by a synovial tendon sheath from the extensor retinaculum to its insertion. It is the primary dorsiflexor and invertor of the foot.',
    func:'Dorsiflexion (clears the foot during the swing phase of gait), foot inversion (supination), and medial arch support during the stance phase. Eccentric activity decelerates plantarflexion during heel strike. Critical for stair-climbing and walking on uneven terrain.',
    injuries:[
      {name:'Tibialis anterior tendinopathy',severity:'moderate',desc:'Uncommon but debilitating — eccentric overload from repetitive dorsiflexion against resistance (downhill hiking, skiing). Pain along the anterior ankle and medial foot. Load with tibialis anterior strengthening (tibialis raises, resistance band dorsiflexion).'},
      {name:'Tibialis anterior tendon rupture',severity:'severe',desc:'Rare spontaneous rupture in older adults or following local steroid injection. Foot drop + loss of inversion. The patient walks with a steppage gait. Surgical repair for active patients; splinting for older/sedentary.'},
    ],
    fact:'Tibialis anterior activity can be seen and palpated easily on the anteromedial shin during active dorsiflexion — making it the most superficial and accessible tendon for real-time palpation in clinical assessment.',
    muscles:['tibialis'],
    bones:['tibia','tarsals'],
  },
  peroneals:{
    name:'Peroneal Tendons', sci:'Tendines Musculorum Fibularium',
    region:'Lateral Ankle', tendonType:'Long',
    origin:'Peroneus longus & brevis (lateral fibula)',
    insertion:'Base of 1st metatarsal & medial cuneiform (longus); 5th metatarsal base (brevis)',
    desc:'Two tendons (peroneus longus and brevis) share a common synovial sheath as they pass posterior to the lateral malleolus, held in the retromalleolar groove by the superior peroneal retinaculum. They then diverge: brevis attaches to the 5th metatarsal base, longus crosses the plantar surface to reach the medial foot. Both are critical lateral ankle stabilisers.',
    func:'Foot eversion (pronation) — the primary function of both tendons, stabilising the lateral ankle against inversion sprain. Peroneus longus also plantarflexes the 1st ray (essential for push-off) and supports the transverse arch. Together they are the primary dynamic lateral ankle stabilisers during all weight-bearing activity.',
    injuries:[
      {name:'Peroneal tendon subluxation/dislocation',severity:'moderate',desc:'Superior peroneal retinaculum rupture from sudden forced dorsiflexion-eversion (ski fall). Painful snapping sensation over the lateral malleolus. Missed acutely — misdiagnosed as lateral ankle sprain. MRI or dynamic ultrasound confirms. Surgical retinaculum repair for athletes.'},
      {name:'Peroneus brevis longitudinal split tear',severity:'moderate',desc:'The brevis tendon splits longitudinally as it is impinged between the fibula and the longus tendon during inversion stress. Lateral ankle pain, chronic instability feeling. MRI shows "crescent sign." Surgical debridement and tubularisation for refractory cases.'},
      {name:'Peroneal tendinopathy',severity:'moderate',desc:'Insertional (brevis at 5th metatarsal) or mid-substance degeneration from repetitive inversion-eversion. Lateral ankle aching. Eccentric eversion exercises (foot off edge of step) are first-line.'},
    ],
    fact:'The peroneal tendons pass posterior to the lateral malleolus in a groove that is only 1–2 mm deep in ~25% of people — a shallow retromalleolar groove is a major anatomical risk factor for peroneal tendon subluxation, visible on axial MRI.',
    muscles:['peroneals'],
    bones:['tibia','tarsals'],
  },
  flexorTendons:{
    name:'Common Flexor Tendon', sci:'Tendo Communis Flexorum (Epicondylus Medialis)',
    region:'Medial Elbow', tendonType:'Short',
    origin:'Pronator teres, FCR, PL, FCU, FDS (common origin)',
    insertion:'Medial epicondyle of humerus',
    desc:'The common origin of the forearm flexor-pronator muscle group at the medial epicondyle. Pronator teres arises most anteriorly; flexor carpi ulnaris most posteriorly. The common flexor tendon is much shorter and narrower than the common extensor tendon. The ulnar nerve passes immediately posterior to the medial epicondyle, making nerve involvement common in medial elbow pathology.',
    func:'Transmits the combined force of wrist flexion, pronation, and grip to the medial elbow. Peak tensile loads during throwing, golf swing, and racket sports. The tendon is also loaded in eccentric deceleration during the follow-through phase of overhead throwing.',
    injuries:[
      {name:'Medial epicondylitis (Golfer\'s Elbow)',severity:'moderate',desc:'Tendinopathy of the common flexor origin — degenerative change from repetitive wrist flexion and forearm pronation overload. Medial elbow pain, worse with resisted wrist flexion and pronation. Heavy slow resistance (wrist curls, hammer curls) cornerstone of rehab.'},
      {name:'UCL complex injury',severity:'moderate',desc:'Ulnar collateral ligament (UCL) injury often co-exists with common flexor tendinopathy in overhead throwers. Valgus stress instability, medial pain, reduced ball velocity. Tommy John surgery (UCL reconstruction) for high-level throwers.'},
    ],
    fact:'"Golfer\'s elbow" is a misnomer — medial epicondylitis is more prevalent in construction workers, plumbers, and racket sport players than golfers. Only 5% of cases are related to golf.',
    muscles:['forearms'],
    bones:['humerus'],
  },
  extensorTendons:{
    name:'Common Extensor Tendon', sci:'Tendo Communis Extensorum (Epicondylus Lateralis)',
    region:'Lateral Elbow', tendonType:'Short',
    origin:'ECRB, EDC, EDM, ECU (common origin)',
    insertion:'Lateral epicondyle of humerus',
    desc:'The common origin of the wrist and finger extensor muscles at the lateral epicondyle. The extensor carpi radialis brevis (ECRB) origin is the most commonly involved tendon in lateral epicondylalgia — its footprint sits directly over the radiocapitellar joint, where it is compressed during elbow extension under load. The tendon has a poor vascular supply at the critical zone just below the epicondyle.',
    func:'Transmits wrist extension and finger extension forces to the lateral humerus. Loaded eccentrically during wrist flexion under grip (e.g., backhand groundstrokes, lifting). The ECRB is the primary wrist extensor and stabiliser during grip activities.',
    injuries:[
      {name:'Lateral epicondylalgia (Tennis Elbow)',severity:'moderate',desc:'The most common overuse injury of the elbow — degenerative tendinopathy of the ECRB origin. Lateral elbow pain, worse with gripping and wrist extension. Affects 1–3% of the general population. Heavy slow resistance exercises (Tyler Twist, wrist extension curls) have the strongest evidence base.'},
      {name:'Posterior interosseous nerve entrapment',severity:'moderate',desc:'The deep branch of the radial nerve (PIN) passes through the radial tunnel below the ECRB origin — nerve entrapment here mimics lateral epicondylalgia but without focal lateral epicondyle tenderness. Resistant resisted middle finger extension test positive.'},
    ],
    fact:'"Tennis elbow" affects tennis players in <5% of cases. The true high-risk occupations are manual labour, painting, plumbing, and keyboard-intensive office work. The ECRB tendon degenerative zone is consistently found to lack inflammatory cells — confirming it as a tendinopathy, not tendinitis.',
    muscles:['forearms'],
    bones:['humerus'],
  },
  tricepsTendon:{
    name:'Triceps Tendon', sci:'Tendo Musculi Tricipitis Brachii',
    region:'Posterior Elbow', tendonType:'Long',
    origin:'Triceps brachii (three heads)',
    insertion:'Olecranon process of the ulna',
    desc:'A broad, flat tendon formed by the convergence of all three triceps heads onto the olecranon. It has a deep and a superficial lamina; the deep portion blends with the posterior elbow capsule. It is the dominant force behind every locking-out movement of the elbow — dips, push-ups, overhead presses, and the lockout of a planche.',
    func:'Elbow extension. Transmits the entire triceps force to the olecranon, generating the push at the end range of pressing. Loaded eccentrically when lowering under control and explosively at lockout. The long head also assists shoulder extension and adduction.',
    injuries:[
      {name:'Triceps tendinopathy',severity:'moderate',desc:'Posterior elbow degeneration from repetitive heavy pressing and lockouts ("weightlifter\'s elbow"). Pain at the olecranon with resisted extension and deep dips. Heavy slow resistance (close-grip press, JM press) is first-line rehab.'},
      {name:'Triceps tendon rupture',severity:'severe',desc:'The rarest of all tendon ruptures. Occurs from a sudden eccentric load (a failed heavy bench press) or a direct fall on the elbow. Associated with anabolic steroid use and local steroid injection. Palpable gap, loss of active extension — surgical repair for active patients.'},
    ],
    fact:'Triceps tendon rupture is the least common tendon rupture in the entire body (<1% of all tendon injuries). When it does occur it is strongly associated with anabolic steroid use, olecranon bursitis, and prior local corticosteroid injection — a near-pathognomonic history in powerlifters.',
    muscles:['triceps'],
    bones:['radius'],
  },
  fingerFlexors:{
    name:'Finger Flexor Tendons', sci:'Tendines Flexorum Digitorum',
    region:'Palmar Hand & Fingers', tendonType:'Long',
    origin:'Flexor digitorum superficialis & profundus (forearm)',
    insertion:'Middle phalanges (FDS) & distal phalanges (FDP) of digits 2–5',
    desc:'The long flexor tendons travel from the forearm muscle bellies, through the carpal tunnel, and along the palmar surface of each finger inside a fibro-osseous sheath held by a series of annular (A1–A5) pulleys. The A2 and A4 pulleys are the most mechanically critical — they keep the tendon close to the bone for efficient force transfer. These are THE tendons under maximal load in fingertip push-ups, dead hangs, and rock climbing.',
    func:'Flexion of the fingers and grip. The profundus flexes the distal joint (the fingertip "crimp"); the superficialis flexes the middle joint. Together they generate crushing and supporting grip. In a fingertip plank or front-lever hang, bodyweight is transmitted through these tendons and their pulleys.',
    injuries:[
      {name:'A2/A4 pulley rupture',severity:'severe',desc:'The classic climbing injury — a "pop" at the base of the finger during a maximal crimp. The flexor tendon bowstrings away from the bone. Graded I–IV; complete multi-pulley ruptures require surgical reconstruction. Taping and progressive loading for partial tears.'},
      {name:'Trigger finger (stenosing tenosynovitis)',severity:'mild',desc:'Thickening of the A1 pulley causes the flexor tendon to catch, producing painful clicking or locking of the finger in flexion. Common in heavy grippers and diabetics. Splinting, corticosteroid injection, or A1 pulley release.'},
      {name:'Flexor tendon avulsion (Jersey finger)',severity:'severe',desc:'The FDP tendon avulses from the distal phalanx when a flexed fingertip is forcibly extended (gripping a jersey). Loss of active DIP flexion. Surgical reattachment within 7–10 days for best outcome.'},
    ],
    fact:'During a maximal-effort fingertip crimp, the force on the A2 pulley can exceed three times the force applied at the fingertip — a leverage effect that explains why pulley rupture is the single most common serious injury in competitive rock climbers.',
    muscles:['forearms','hands'],
    bones:['carpals'],
  },
  fingerExtensors:{
    name:'Finger Extensor Tendons', sci:'Tendines Extensorum Digitorum',
    region:'Dorsal Hand & Fingers', tendonType:'Long',
    origin:'Extensor digitorum (common extensor, lateral epicondyle)',
    insertion:'Extensor expansions of digits 2–5 (middle & distal phalanges)',
    desc:'The extensor tendons fan out across the back of the hand — the visible "ropes" that stand up when you splay your fingers — held down at the wrist by the extensor retinaculum. Over each finger they flatten into the extensor expansion (dorsal hood), a complex aponeurosis that the lumbricals and interossei plug into. They are comparatively superficial and poorly padded, making them vulnerable to lacerations and crush.',
    func:'Extension of the fingers — opening the hand and releasing the grip. The extensor expansion coordinates the balance between MCP extension and IP joint motion. Antagonist to the finger flexors; essential for the release phase of every pull and the open-hand control in gymnastics and calisthenics.',
    injuries:[
      {name:'Mallet finger',severity:'moderate',desc:'Avulsion of the terminal extensor tendon at the distal phalanx from a sudden forced flexion (a ball striking the fingertip). The DIP joint droops and cannot actively straighten. Treated with a continuous extension splint for 6–8 weeks.'},
      {name:'Boutonnière deformity',severity:'moderate',desc:'Rupture of the central slip of the extensor expansion at the PIP joint. The PIP buttonholes into flexion while the DIP hyperextends. Results from trauma or rheumatoid arthritis. Splinting in PIP extension; surgery if chronic.'},
      {name:'Sagittal band rupture',severity:'mild',desc:'Tear of the sagittal band that centres the extensor tendon over the MCP joint ("boxer\'s knuckle"). The tendon subluxes into the valley between knuckles on flexion. Relative-motion splinting or surgical repair.'},
    ],
    fact:'Because the extensor tendons are so superficial on the back of the hand, a laceration that looks trivial on the skin frequently divides the tendon completely — the hand surgeon\'s rule is that any dorsal hand wound is a tendon injury until proven otherwise.',
    muscles:['forearms','hands'],
    bones:['carpals'],
  },
  adductorTendon:{
    name:'Adductor Longus Tendon', sci:'Tendo Musculi Adductoris Longi',
    region:'Groin', tendonType:'Long',
    origin:'Adductor longus (and the conjoint adductor mass)',
    insertion:'Body of the pubis (pubic tubercle)',
    desc:'A strong, narrow cord arising from the pubis — the most superficial and palpable structure in the groin crease. The proximal enthesis blends with the rectus abdominis aponeurosis across the pubic symphysis to form the "pubic aponeurotic plate," which is why adductor and lower-abdominal groin pain so often coexist. This is the tendon most often implicated in athletic "groin strains."',
    func:'Hip adduction and a contribution to hip flexion. Stabilises the pelvis during single-leg stance, cutting, and change of direction. Heavily loaded in skating, sprinting, kicking, the sumo-stance deadlift, and the Copenhagen-plank rehab exercise.',
    injuries:[
      {name:'Adductor strain (groin pull)',severity:'moderate',desc:'The commonest groin injury in football, hockey and sprinting — a musculotendinous tear near the proximal enthesis from explosive adduction or a forced abduction stretch. Graded I–III. Progressive adductor strengthening (Copenhagen protocol) is both treatment and prevention.'},
      {name:'Adductor enthesopathy / osteitis pubis',severity:'moderate',desc:'Chronic overload of the adductor-rectus plate at the pubic symphysis. Deep groin and lower-abdominal pain on kicking and sit-ups. Common in footballers; managed with load modification and core-adductor strengthening.'},
      {name:'Adductor tendon avulsion',severity:'severe',desc:'Rare bony or tendinous avulsion from the pubis under an extreme involuntary abduction load. Sudden sharp groin pain with bruising. Most are managed conservatively; surgery reserved for large displacements in athletes.'},
    ],
    fact:'Adductor and lower-abdominal pain share a common anatomical plate at the pubis, which is why isolated "groin strain" treatment so often fails — modern sports-medicine treats the adductor longus enthesis and the rectus abdominis insertion as a single biomechanical unit.',
    muscles:['adductors'],
    bones:['pelvis','femur'],
  },
  pectoralTendon:{
    name:'Pectoralis Major Tendon', sci:'Tendo Musculi Pectoralis Majoris',
    region:'Anterior Axilla', tendonType:'Short',
    origin:'Pectoralis major (clavicular & sternocostal heads)',
    insertion:'Lateral lip of the bicipital groove of the humerus',
    desc:'A flat, bilaminar tendon that folds on itself as it inserts onto the humerus — the clavicular fibres insert lower and the sternal fibres higher, creating a characteristic twist. It forms the firm anterior wall of the armpit you can grasp. Increasingly torn in the gym era: the bench press is the single most common mechanism of pectoralis major rupture.',
    func:'Adduction, internal rotation, and flexion of the humerus. Transmits the full pressing force of the chest to the arm. Loaded maximally at the bottom of a bench press, in dips, and during a fly — the lengthened, eccentrically loaded position where ruptures occur.',
    injuries:[
      {name:'Pectoralis major rupture',severity:'severe',desc:'Almost always a tendinous avulsion off the humerus during a heavy bench press, as the bar descends to the chest (maximal eccentric load). A "pop," bruising, and a visible axillary fold defect with loss of the anterior contour. Surgical repair within weeks gives the best strength outcome in athletes.'},
      {name:'Pectoral tendinopathy',severity:'moderate',desc:'Insertional degeneration at the humerus from high-volume pressing. Anterior shoulder/axillary pain with resisted adduction and deep bench positions. Managed with load modification and progressive pressing rehab.'},
    ],
    fact:'Pectoralis major rupture is overwhelmingly an injury of weight-training men aged 20–40, and the bench press accounts for the majority of cases — the tear happens at the precise instant the bar is lowest and the muscle is most stretched under load.',
    muscles:['pectorals'],
    bones:['humerus'],
  },
  plantarFascia:{
    name:'Plantar Fascia', sci:'Aponeurosis Plantaris',
    region:'Sole of Foot', tendonType:'Aponeurosis',
    origin:'Medial calcaneal tuberosity (heel)',
    insertion:'Proximal phalanges & flexor sheaths of the toes (forefoot)',
    desc:'A thick, fibrous aponeurosis — not a true tendon but functionally a tension band — fanning from the heel across the sole to the base of the toes. It is the primary passive support of the medial longitudinal arch and the spring of the foot. Extending the toes tightens it via the "windlass mechanism," raising the arch for a rigid push-off.',
    func:'Maintains the longitudinal arch and stores/returns elastic energy during gait. Tensions automatically as the toes dorsiflex at toe-off (the windlass), converting the foot into a rigid lever. Absorbs and returns load in every step, jump, and sprint.',
    injuries:[
      {name:'Plantar fasciitis',severity:'moderate',desc:'The commonest cause of heel pain — degenerative overload at the medial calcaneal origin. Classic "first-step pain" in the morning that eases with walking. Driven by tight calves, high training volume, and poor foot mechanics. Calf/plantar stretching, loading, and orthoses are first-line.'},
      {name:'Plantar fascia rupture',severity:'severe',desc:'An acute tear, often after a forceful push-off or in a patient with chronic fasciitis weakened by repeated steroid injections. Sudden midfoot pain, a palpable gap, and arch collapse. Managed with immobilisation and gradual loading.'},
      {name:'Heel spur',severity:'mild',desc:'A bony traction outgrowth at the fascia origin, seen on X-ray in many people with (and without) heel pain. The spur is a marker of chronic traction, not usually the pain source itself — treatment targets the fascia, not the spur.'},
    ],
    fact:'The plantar fascia\'s "windlass mechanism" means simply extending the big toe tightens the whole arch — a test clinicians use at the bedside, and the reason toe-spring in a running shoe changes how much load the fascia must carry.',
    muscles:['feet','calves'],
    bones:['tarsals'],
  },
};


/* ══════════════════════════════════════════════════════
   NERVE DATA — major peripheral nerves & plexuses
   Same card schema as tendons/bones. Extra fields:
     nerveType (Mixed | Motor | Sensory | Plexus)
     roots     (spinal segmental origin, e.g. "C5–T1")
     course    (path from root cluster to terminal field)
     sensory   (cutaneous / sensory territory)
     muscles   (innervated muscle keys → relation chips)
   ══════════════════════════════════════════════════════ */
const NERVE_DATA = {
  brachialPlexus:{
    name:'Brachial Plexus', sci:'Plexus Brachialis',
    region:'Neck / Shoulder', nerveType:'Plexus', roots:'C5–T1',
    course:'Anterior rami of C5–T1 → roots, trunks, divisions, cords, branches → passes between the anterior and middle scalenes, under the clavicle, and into the axilla.',
    desc:'The master switchboard of the entire upper limb — a dense network where the five spinal roots (C5–T1) reorganise through three trunks, six divisions, three cords and finally five terminal branches (musculocutaneous, axillary, radial, median, ulnar). Almost every motor and sensory signal to the arm and hand routes through it. Its position between the scalenes, under the clavicle and over the first rib makes it vulnerable to compression and traction.',
    func:'Carries all motor commands and sensory information for the shoulder, arm, forearm and hand. The upper trunk (C5–C6) governs shoulder abduction and elbow flexion; the lower trunk (C8–T1) governs the small muscles of the hand and fine grip.',
    sensory:'Skin of the entire upper limb except a small patch over the medial arm (intercostobrachial nerve) and the point of the shoulder (supraclavicular nerves).',
    injuries:[
      {name:'Erb\'s palsy (upper trunk, C5–C6)',severity:'severe',desc:'Traction injury that widens the head-shoulder angle — birth trauma or a fall onto the shoulder. The arm hangs adducted and internally rotated, forearm pronated: the classic "waiter\'s tip" posture. Recovery depends on whether axons are stretched (good) or avulsed (poor).'},
      {name:'Klumpke\'s palsy (lower trunk, C8–T1)',severity:'severe',desc:'Traction with the arm forced overhead. Paralysis of the intrinsic hand muscles produces a "claw hand," often with Horner\'s syndrome if T1 sympathetic fibres are torn.'},
      {name:'Thoracic outlet syndrome',severity:'moderate',desc:'Compression of the plexus (and/or subclavian vessels) between the scalenes, a cervical rib, or under the pectoralis minor. Aching, numbness and a heavy, easily-fatigued arm — worse with overhead work. Managed with posture, scalene/pec-minor mobility and nerve-glide work before surgery is considered.'},
      {name:'Stinger / burner',severity:'mild',desc:'A transient traction or compression of the upper trunk in collision sports — a burning electric shock shooting down one arm with brief weakness. Resolves in minutes; recurrent stingers warrant neck and scapular strengthening.'},
    ],
    fact:'The brachial plexus is the single most commonly examined structure in clinical neuroanatomy because virtually every upper-limb deficit can be localised by knowing where in the plexus the lesion sits — roots vs trunks vs cords each give a signature pattern of weakness.',
    muscles:['deltoids','biceps','triceps','forearms','rotatorcuff','hands'],
    bones:['clavicle','scapula','humerus'],
  },
  median:{
    name:'Median Nerve', sci:'Nervus Medianus',
    region:'Anterior Arm / Wrist', nerveType:'Mixed', roots:'C6–T1',
    course:'From the medial and lateral cords → travels down the medial arm beside the brachial artery → crosses the cubital fossa → between the two heads of pronator teres → through the carpal tunnel into the hand.',
    desc:'The "labourer\'s nerve" — it powers most of the forearm flexors and the thumb. After a quiet course down the arm it dives between the heads of pronator teres and runs deep through the forearm before squeezing through the carpal tunnel, the single most common site of nerve entrapment in the body. It gives the thumb its opposable, pinch-grip power.',
    func:'Flexion of the wrist and fingers (with the ulnar nerve), forearm pronation, and — critically — thumb opposition and the precision pinch grip via the thenar muscles. Sensation to the palmar thumb, index, middle and half the ring finger.',
    sensory:'Palmar surface and fingertips of the thumb, index, middle and lateral half of the ring finger — the working surface for fine touch and tool use.',
    injuries:[
      {name:'Carpal tunnel syndrome',severity:'moderate',desc:'Compression at the wrist under the flexor retinaculum. Night-time tingling and numbness in the thumb-index-middle fingers, clumsiness, and eventually thenar wasting. The commonest entrapment neuropathy — managed with wrist splints, load modification, nerve glides; surgical release for severe/progressive cases.'},
      {name:'Pronator teres syndrome',severity:'moderate',desc:'Compression higher up, between the two heads of pronator teres. Mimics carpal tunnel but with forearm aching and no night pain. Aggravated by repetitive pronation (screwdriver use, gripping).'},
      {name:'"Hand of benediction"',severity:'severe',desc:'A high median nerve lesion: when asked to make a fist the index and middle fingers cannot flex, leaving them extended. Loss of thumb opposition cripples pinch grip.'},
    ],
    fact:'Carpal tunnel syndrome is the most frequently performed nerve-decompression surgery worldwide — but early cases respond remarkably well to a simple neutral-wrist night splint, because most of the nerve compression occurs when the wrist flexes during sleep.',
    muscles:['forearms','hands'],
    bones:['humerus','radius','carpals'],
  },
  ulnar:{
    name:'Ulnar Nerve', sci:'Nervus Ulnaris',
    region:'Medial Arm / Hand', nerveType:'Mixed', roots:'C8–T1',
    course:'From the medial cord → down the medial arm → behind the medial epicondyle (the "funny bone" groove) → through the cubital tunnel → along the ulnar forearm → into the hand via Guyon\'s canal.',
    desc:'The "musician\'s nerve" — it controls the intrinsic hand muscles that make fine, independent finger movements possible. Its great vulnerability is that it runs superficially behind the medial epicondyle, where a knock produces the electric "funny bone" jolt. Chronic compression here (cubital tunnel) is the second most common entrapment after carpal tunnel.',
    func:'Powers most intrinsic hand muscles — the interossei (finger spread/close), most lumbricals, hypothenar muscles and adductor pollicis. Governs grip strength, finger dexterity and the powerful key-pinch. Flexes the wrist and the ring/little fingers via FCU and FDP.',
    sensory:'The little finger and medial half of the ring finger, plus the ulnar border of the palm and back of the hand.',
    injuries:[
      {name:'Cubital tunnel syndrome',severity:'moderate',desc:'Compression behind the medial epicondyle from prolonged elbow flexion (sleeping with bent elbows, phone use) or leaning on the elbow. Tingling in the little/ring fingers and grip weakness. Managed with a night elbow extension splint, padding and nerve glides.'},
      {name:'Ulnar claw hand',severity:'severe',desc:'A low ulnar lesion (at the wrist) leaves the ring and little fingers hyperextended at the knuckle and flexed at the tips — the "claw." Paradoxically the claw is worse with a distal lesion than a high one (the "ulnar paradox").'},
      {name:'Handlebar palsy (Guyon\'s canal)',severity:'mild',desc:'Compression at the wrist in cyclists from sustained pressure on the handlebars. Numb little finger and weak grip after long rides. Resolved with padded gloves, bar position changes and varying hand position.'},
    ],
    fact:'The "ulnar paradox": a nerve injury at the wrist produces a more dramatic claw hand than one at the elbow, because the high lesion also paralyses the long finger flexor (FDP) that would otherwise pull the fingertips into the claw — proof that worse-looking deformity does not mean a worse injury.',
    muscles:['forearms','hands'],
    bones:['humerus','carpals'],
  },
  radial:{
    name:'Radial Nerve', sci:'Nervus Radialis',
    region:'Posterior Arm / Forearm', nerveType:'Mixed', roots:'C5–T1',
    course:'The largest branch of the brachial plexus (posterior cord) → spirals around the back of the humerus in the radial (spiral) groove → crosses the lateral elbow → splits into a superficial sensory branch and the deep posterior interosseous nerve.',
    desc:'The great extensor nerve of the upper limb. It winds around the posterior shaft of the humerus in the spiral groove — pressed directly against bone, which is why a humeral shaft fracture so often damages it. Below the elbow its deep motor branch (the posterior interosseous nerve) threads through the supinator to drive every wrist and finger extensor.',
    func:'Extension of the elbow (triceps), wrist and fingers, plus forearm supination and thumb extension/abduction. It is the nerve that opens the hand and stabilises the wrist so the long finger flexors can generate grip.',
    sensory:'The back of the arm and forearm, and a patch of skin over the back of the thumb web (the anatomical snuffbox).',
    injuries:[
      {name:'Wrist drop',severity:'severe',desc:'The hallmark of a radial nerve lesion — paralysed wrist and finger extensors leave the hand hanging limp, unable to lift against gravity. Grip strength collapses because the wrist can no longer be stabilised in extension.'},
      {name:'"Saturday night palsy"',severity:'moderate',desc:'Compression of the nerve in the spiral groove from an arm draped over a chair back during deep sleep (classically alcohol-related). Temporary wrist drop that usually recovers fully over weeks as the nerve remyelinates.'},
      {name:'Posterior interosseous nerve syndrome',severity:'moderate',desc:'Entrapment of the deep motor branch as it passes through the supinator (the arcade of Frohse). Causes finger-drop with preserved wrist extension and no numbness — often mistaken for tennis elbow.'},
    ],
    fact:'A mid-shaft humeral fracture damages the radial nerve in up to 1 in 5 cases because the nerve is bound tightly against the bone in the spiral groove — yet the vast majority recover spontaneously, so the standard approach is to wait and watch rather than operate immediately.',
    muscles:['triceps','forearms'],
    bones:['humerus','radius'],
  },
  femoral:{
    name:'Femoral Nerve', sci:'Nervus Femoralis',
    region:'Anterior Thigh', nerveType:'Mixed', roots:'L2–L4',
    course:'From the lumbar plexus (L2–L4) → emerges lateral to psoas → passes under the inguinal ligament lateral to the femoral artery → fans into branches in the anterior thigh; its longest sensory branch (saphenous) reaches the medial foot.',
    desc:'The main nerve of the anterior thigh and the principal driver of the knee-extension (quadriceps) mechanism. It enters the thigh under the inguinal ligament just lateral to the femoral artery. Its terminal sensory branch, the saphenous nerve, is the longest cutaneous nerve in the body, supplying skin all the way to the medial ankle.',
    func:'Extension of the knee (the entire quadriceps) and assistance with hip flexion via the iliacus and sartorius. Essential for standing from a squat, stair climbing and the stance phase of gait. Sensation to the anterior thigh and the medial lower leg.',
    sensory:'Front of the thigh (anterior cutaneous branches) and the medial leg down to the medial ankle (saphenous branch).',
    injuries:[
      {name:'Femoral neuropathy',severity:'severe',desc:'Damage from pelvic surgery, prolonged lithotomy positioning, or a retroperitoneal (psoas) haematoma. The knee buckles because the quadriceps cannot extend it, the patellar reflex is lost, and the anterior thigh feels numb.'},
      {name:'Saphenous nerve entrapment',severity:'mild',desc:'Compression of the sensory branch at the adductor canal or knee. Burning medial knee/leg pain and numbness with no weakness — easily mistaken for a knee-joint problem.'},
      {name:'Meralgia paraesthetica',severity:'mild',desc:'Strictly a lateral femoral cutaneous nerve issue (a separate L2–L3 branch), but commonly grouped here: burning numbness over the outer thigh from compression under the inguinal ligament — tight belts, heavy tool-belts, or pregnancy.'},
    ],
    fact:'The saphenous nerve — the femoral nerve\'s final sensory branch — is the longest cutaneous nerve in the human body, which is why an injury far up at the groin can produce numbness as distant as the inner ankle.',
    muscles:['quadriceps','hipflexors'],
    bones:['pelvis','femur'],
  },
  sciatic:{
    name:'Sciatic Nerve', sci:'Nervus Ischiadicus',
    region:'Posterior Hip / Thigh', nerveType:'Mixed', roots:'L4–S3',
    course:'The largest nerve in the body (sacral plexus, L4–S3) → exits the pelvis through the greater sciatic foramen below piriformis → descends through the buttock and down the back of the thigh → divides above the knee into the tibial and common fibular nerves.',
    desc:'The thickest and longest nerve in the human body — at the buttock it is as wide as a thumb. It is really two nerves (tibial + common fibular) bound in one sheath. It exits the pelvis beneath the piriformis and runs down the posterior thigh, supplying the hamstrings before splitting at the knee. Its sheer size and superficial buttock course make it the source of "sciatica."',
    func:'Knee flexion (the hamstrings) and, through its terminal branches, all movement and sensation below the knee — the entire foot and lower leg. Effectively the nerve that powers walking, running and push-off.',
    sensory:'Via its branches: the entire foot and the lower leg below the knee (except the medial strip served by the saphenous nerve).',
    injuries:[
      {name:'Sciatica (radiculopathy)',severity:'moderate',desc:'Compression of the nerve roots (usually L5/S1) by a lumbar disc herniation or stenosis — not the nerve itself. Shooting pain down the back of the leg, often with numbness or weakness. Most settle with movement, nerve-glide work and load management; red-flag deficits need imaging.'},
      {name:'Piriformis syndrome',severity:'mild',desc:'The nerve is irritated as it passes beneath (or through) a tight piriformis in the buttock. Deep buttock pain worse with sitting and hip rotation, without the back pain of true sciatica. Responds to hip mobility and glute/piriformis release.'},
      {name:'Iatrogenic injection injury',severity:'severe',desc:'A badly placed intramuscular injection into the lower-inner buttock can spear the nerve — the reason injections are given in the upper-outer quadrant. Causes foot drop and lasting numbness.'},
    ],
    fact:'"Sciatica" is one of the most over-used terms in musculoskeletal medicine: true sciatica is compression of the nerve roots in the spine, not the sciatic nerve in the leg — so the cause and the treatment usually live in the lower back, far from where the pain is felt.',
    muscles:['hamstrings','glutes'],
    bones:['pelvis','femur'],
  },
  tibial:{
    name:'Tibial Nerve', sci:'Nervus Tibialis',
    region:'Posterior Leg / Sole', nerveType:'Mixed', roots:'L4–S3',
    course:'The larger terminal branch of the sciatic → down the back of the knee (popliteal fossa) → deep in the posterior calf with the posterior tibial vessels → behind the medial malleolus through the tarsal tunnel → splits into the medial and lateral plantar nerves of the sole.',
    desc:'The powerhouse of plantarflexion and the sensory nerve of the sole of the foot. It runs deep through the posterior calf, then passes behind the medial ankle through the tarsal tunnel — the foot\'s equivalent of the carpal tunnel. Its plantar branches supply the small muscles that grip and balance the foot.',
    func:'Plantarflexion (calf complex) and toe flexion — the push-off of every step, jump and sprint — plus inversion. Through the plantar branches it powers the intrinsic foot muscles and supplies sensation to the entire sole.',
    sensory:'The sole of the foot and the toes (via medial and lateral plantar nerves) — critical for balance and protective sensation.',
    injuries:[
      {name:'Tarsal tunnel syndrome',severity:'moderate',desc:'Compression behind the medial malleolus. Burning, tingling and numbness in the sole, worse with standing and activity — the foot\'s version of carpal tunnel. Managed with orthoses, footwear changes and nerve mobilisation.'},
      {name:'Tibial neuropathy',severity:'severe',desc:'A high lesion (deep laceration, knee dislocation) abolishes plantarflexion and sole sensation — the patient cannot stand on tiptoe and loses protective sensation, raising ulcer risk.'},
      {name:'Plantar nerve entrapment (Jogger\'s foot)',severity:'mild',desc:'Entrapment of the medial plantar branch in runners with excessive pronation. Aching arch and tingling toes during running, relieved by motion-control footwear.'},
    ],
    fact:'Loss of protective sensation from tibial-nerve damage (commonly in diabetes) is the single biggest risk factor for foot ulcers and amputation — which is why the plantar sensation it supplies is tested at every diabetic foot check.',
    muscles:['calves','feet'],
    bones:['tibia','tarsals'],
  },
  commonFibular:{
    name:'Common Fibular Nerve', sci:'Nervus Fibularis Communis',
    region:'Lateral Knee / Lower Leg', nerveType:'Mixed', roots:'L4–S2',
    course:'The smaller terminal branch of the sciatic → wraps subcutaneously around the neck of the fibula (just below the knee) → divides into superficial (everters) and deep (dorsiflexors) branches in the lower leg.',
    desc:'Also called the common peroneal nerve, it is the most commonly injured nerve in the lower limb — because it wraps around the fibular neck just under the skin, with almost no padding. A direct knock, a tight cast, or even prolonged leg-crossing can compress it. Its deep branch drives dorsiflexion; the superficial branch drives eversion.',
    func:'Dorsiflexion (lifting the foot to clear the ground in swing phase) and toe extension via the deep branch; eversion (turning the sole outward) via the superficial branch. It keeps the foot from slapping and from rolling into a sprain.',
    sensory:'The front and lateral lower leg and the top (dorsum) of the foot.',
    injuries:[
      {name:'Foot drop',severity:'severe',desc:'The signature lesion — paralysed dorsiflexors leave the foot hanging, forcing a high-stepping (steppage) gait to avoid catching the toes. Caused by fibular-neck trauma, prolonged squatting, or compression in a cast.'},
      {name:'Fibular neck compression',severity:'moderate',desc:'Habitual leg-crossing, a tight plaster cast, or prolonged bed rest presses the nerve against the bone. Tingling over the shin and foot dorsum with early dorsiflexion weakness — usually reversible if caught early.'},
      {name:'Recurrent ankle sprain link',severity:'mild',desc:'A severe inversion sprain can stretch the superficial branch; conversely, weak eversion from nerve irritation predisposes to repeat sprains — a feedback loop addressed with peroneal strengthening and balance work.'},
    ],
    fact:'The common fibular nerve is the most frequently injured nerve in the entire lower limb purely because of geography — it is the only major nerve that loops around a subcutaneous bony point (the fibular neck) with no muscular padding to shield it.',
    muscles:['tibialis','peroneals','feet'],
    bones:['tibia','tarsals'],
  },
  musculocutaneous:{
    name:'Musculocutaneous Nerve', sci:'Nervus Musculocutaneus',
    region:'Anterior Arm', nerveType:'Mixed', roots:'C5–C7',
    course:'From the lateral cord of the brachial plexus → pierces the coracobrachialis → travels between biceps brachii and brachialis down the lateral arm → continues as the lateral cutaneous nerve of the forearm.',
    desc:'The nerve that makes every curl possible. It is a branch of the lateral cord of the brachial plexus and dives through the coracobrachialis before running between the biceps brachii and brachialis down to the elbow. After powering these three muscles it continues as the lateral cutaneous nerve of the forearm — a pure sensory branch from elbow to wrist. Despite being the nerve behind one of the most trained muscles in the gym, isolated injuries are rare because of its deep, protected course.',
    func:'Motor to coracobrachialis (shoulder flexion/adduction), biceps brachii (elbow flexion and forearm supination) and brachialis (pure elbow flexion). These three muscles produce every chin-up, curl and row movement. Sensory to the lateral forearm.',
    sensory:'Lateral forearm from elbow to wrist (via the lateral cutaneous nerve of the forearm) — the hand-side edge you rest a phone on.',
    injuries:[
      {name:'Shoulder dislocation stretch',severity:'moderate',desc:'An anterior shoulder dislocation can stretch the nerve as it exits the lateral cord. The biceps and brachialis become weak or absent; the biceps reflex is lost. Most recover over weeks to months as the nerve remyelinates — heavy curls should wait until full strength returns.'},
      {name:'Heavy backpack palsy',severity:'mild',desc:'A very heavy rucksack (>20 kg) worn for hours can compress the nerve at the axilla. Presents as lateral forearm numbness and mild elbow-flexion weakness. Resolves with rest and nerve-glide exercises once the load is removed.'},
      {name:'Coracobrachialis entrapment',severity:'mild',desc:'Rare compression inside a hypertrophied coracobrachialis — sometimes seen in strength athletes with very developed medial arm musculature. Lateral forearm tingling with a subtle elbow-flexion lag; responds to targeted nerve-mobilisation work.'},
    ],
    fact:'The biceps brachii gets all the glory for the "peak" contraction, but without the musculocutaneous nerve it cannot fire at all — which is why a shoulder dislocation that subtly stretches this nerve can make even a light curl feel impossibly heavy, long after the joint itself is pain-free.',
    muscles:['biceps','forearms'],
    bones:['humerus','radius'],
  },
  axillary:{
    name:'Axillary Nerve', sci:'Nervus Axillaris',
    region:'Shoulder / Deltoid', nerveType:'Mixed', roots:'C5–C6',
    course:'From the posterior cord of the brachial plexus → exits the axilla through the quadrilateral space (alongside the posterior circumflex humeral artery) → wraps around the surgical neck of the humerus → fans into the anterior, lateral and posterior deltoid and teres minor.',
    desc:'The deltoid\'s dedicated nerve — without it, you cannot raise your arm to the side or front. It exits the axilla through the quadrilateral space and wraps tightly around the surgical neck of the humerus, which is precisely why a shoulder dislocation or a proximal humeral fracture so frequently damages it. It also supplies the teres minor and the characteristic "regimental badge" patch of skin over the lateral deltoid.',
    func:'Motor to all three deltoid heads (anterior — shoulder flexion; lateral — shoulder abduction; posterior — shoulder extension) and teres minor (external rotation). Loss abolishes the ability to lift the arm away from the body. Sensory to the regimental-badge area of skin over the lateral deltoid.',
    sensory:'"Regimental badge" area — the round patch of skin over the lateral deltoid shoulder; absence of sensation here is the bedside sign of axillary nerve damage after a shoulder injury.',
    injuries:[
      {name:'Shoulder dislocation palsy',severity:'moderate',desc:'The most common cause: anterior dislocation stretches the axillary nerve as the humeral head pivots forward. The deltoid contracts weakly or not at all and the arm cannot be actively abducted. 70–80% recover spontaneously within 3–6 months; serial EMG monitoring guides the timeline for return to pressing and overhead work.'},
      {name:'Quadrilateral space syndrome',severity:'mild',desc:'The nerve and posterior circumflex humeral artery are compressed in the quadrilateral space by a fibrous band or scar tissue. Dull posterior shoulder ache with overhead activities, plus regimental-badge numbness. Common in overhead athletes (volleyball, baseball). Managed with posture, soft-tissue work and activity modification before surgical exploration.'},
      {name:'Surgical neck of humerus fracture',severity:'severe',desc:'Displaced fractures can directly lacerate or stretch the nerve in its groove around the humeral neck. A complete lesion leaves a flail shoulder that cannot abduct — rehabilitation must wait for neural recovery before meaningful deltoid retraining can begin.'},
    ],
    fact:'The "regimental badge" test — checking sensation over the lateral deltoid after any shoulder injury — takes five seconds and immediately tells you whether the axillary nerve is functioning. It should be documented before and after every shoulder reduction or fracture manipulation.',
    muscles:['deltoids','rotatorcuff'],
    bones:['humerus','scapula'],
  },
  suprascapular:{
    name:'Suprascapular Nerve', sci:'Nervus Suprascapularis',
    region:'Posterior Shoulder / Rotator Cuff', nerveType:'Motor + Articular', roots:'C5–C6',
    course:'From the upper trunk of the brachial plexus → runs laterally along the posterior neck → passes through the suprascapular notch under the transverse scapular ligament → into the supraspinous fossa → curves around the spine of the scapula at the spinoglenoid notch → into the infraspinous fossa.',
    desc:'The rotator cuff\'s primary nerve — powering both the supraspinatus and infraspinatus. It travels from the upper trunk across the posterior shoulder to pass through the suprascapular notch, a bony channel bridged by a ligament that is notorious for pinching the nerve in overhead athletes. A ganglion cyst at the spinoglenoid notch can selectively compress only the infraspinatus branch, giving silent wasting and external-rotation weakness with no pain — a presentation that routinely puzzles clinicians until the MRI arrives.',
    func:'Motor to supraspinatus (initiates the first 15° of shoulder abduction, seating the humeral head; full-thickness tears produce the characteristic "shrug" compensation) and infraspinatus (external rotation and posterior capsule stability in all pressing and pulling movements). Articular sensation to the glenohumeral and acromioclavicular joints.',
    sensory:'Articular branches to the glenohumeral and acromioclavicular joints — explains why deep, hard-to-locate shoulder pain can arise from nerve compression rather than the joints themselves.',
    injuries:[
      {name:'Suprascapular notch entrapment',severity:'moderate',desc:'Chronic compression from overhead sport, a heavy backpack, or a ganglion cyst at the notch. Deep aching posterior shoulder pain with progressive wasting of both supraspinatus and infraspinatus. MRI with contrast is the key investigation; ganglion aspiration or surgical notch decompression resolves most cases.'},
      {name:'Spinoglenoid notch cyst',severity:'moderate',desc:'A paralabral ganglion cyst at the base of the scapular spine compresses only the infraspinatus branch — painless external rotation weakness without supraspinatus involvement, often found incidentally on an MRI for a "shoulder pain of unknown origin." Common in overhead athletes; often resolves after labral repair.'},
      {name:'Overhead-sport traction injury',severity:'severe',desc:'Repetitive traction during the wind-up phase (volleyball serve, baseball pitch) progressively stretches the nerve. The athlete develops insidious external-rotation weakness and visible infraspinatus hollowing. Can curtail competitive careers if not identified and offloaded early with technique modification and nerve-glide rehabilitation.'},
    ],
    fact:'Studies on elite volleyball players have found infraspinatus atrophy on MRI in up to 45% of serving arms — most with zero symptoms — caused by suprascapular nerve traction at the spinoglenoid notch during the wind-up. The muscle quietly wastes while the athlete keeps playing.',
    muscles:['rotatorcuff','deltoids'],
    bones:['scapula','humerus'],
  },
  inferiorGluteal:{
    name:'Inferior Gluteal Nerve', sci:'Nervus Gluteus Inferior',
    region:'Posterior Hip / Buttock', nerveType:'Motor', roots:'L5–S2',
    course:'From the sacral plexus (L5–S2) → exits the pelvis through the greater sciatic foramen, inferior to the piriformis → immediately fans into the underside of the gluteus maximus.',
    desc:'The sole motor nerve of gluteus maximus — the largest and most powerful muscle in the human body. Without it, standing from a squat, climbing stairs, sprinting and full hip extension collapse completely. Despite supplying such a large and athletically critical muscle, it is a short, stout motor nerve that travels only a centimetre or two outside the pelvis before disappearing into the deep surface of the glute. Because it has no sensory territory, a lesion causes weakness without numbness — making it easy to miss without careful strength testing.',
    func:'Entire motor supply to gluteus maximus: powerful hip extension, lateral rotation and lower-fibre hip abduction. This is the engine behind every squat, deadlift, hip thrust, sprint and stair climb. When this nerve is compromised, the hip cannot extend against load and the glute cannot produce its hallmark power.',
    sensory:'None — this is a purely motor nerve. A lesion causes weakness and wasting, not numbness or tingling.',
    injuries:[
      {name:'Gluteal injection palsy',severity:'severe',desc:'The nerve can be injured by a badly placed intramuscular injection given too medially or inferiorly in the buttock. Results in hip-extension weakness; the patient struggles to rise from a chair or walk up stairs. Correct injection technique (upper-outer quadrant or ventrogluteal site) prevents this entirely.'},
      {name:'Posterior hip dislocation injury',severity:'severe',desc:'High-energy posterior hip dislocation can stretch or avulse the nerve as it exits the greater sciatic foramen. Profound gluteus maximus weakness is one element of the complex neurovascular deficit; prognosis depends on whether the nerve is stretched (often recovers) or torn (permanent).'},
      {name:'Inferior gluteal entrapment',severity:'mild',desc:'Rare compression by a tight piriformis, scar tissue or pelvic mass. Presents as deep buttock discomfort with hip-extension weakness that does not radiate below the knee (unlike sciatic compression). Often diagnosed only after a targeted diagnostic nerve block.'},
    ],
    fact:'Gluteus maximus accounts for roughly 16% of total lower-body muscle mass, yet the nerve that controls it — the inferior gluteal — is only a few centimetres long. A small anatomical insult near the greater sciatic notch can eliminate the primary power source behind every squat, deadlift and sprint you\'ll ever perform.',
    muscles:['glutes'],
    bones:['pelvis','femur'],
  },
  spinalCord:{
    name:'Spinal Cord', sci:'Medulla Spinalis',
    region:'Cervical – Sacral Spine', nerveType:'Central CNS', roots:'C1–S5',
    course:'From the brainstem (medulla oblongata) through the foramen magnum → descends through the vertebral canal protected by 33 vertebrae, three meningeal layers and cerebrospinal fluid → gives off 31 pairs of spinal nerve roots (8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal) → tapers to the conus medullaris at L1–L2 → continues as the cauda equina ("horse\'s tail") of loose roots to L5–S5.',
    desc:'The master conduit of the entire nervous system and the origin of every nerve shown in this layer. The spinal cord is not a peripheral nerve — it is the central relay column through which all 31 pairs of spinal roots emerge to form the peripheral nerves of the body. Each spinal segment maps to a specific region of skin (a dermatome) and a group of muscles (a myotome), which lets clinicians localise an injury level precisely from the pattern of loss. Below L1–L2 the cord ends and only individual roots travel through the canal as the cauda equina.',
    func:'Carries all descending motor commands from the brain cortex to every muscle below the head, and all ascending sensory signals (pain, temperature, vibration, proprioception) from the body to the brain. Also hosts autonomous reflex arcs that act before the brain can respond — withdrawing a hand from a flame, for example, is decided in the cord, not the cortex.',
    sensory:'All sensation below the neck is relayed through the spinal cord. The dermatome map is the clinical key: C6 = thumb and index; T4 = nipple line; T10 = navel; L4 = medial calf; S1 = lateral foot. Loss of sensation at a specific level pinpoints the injury segment.',
    injuries:[
      {name:'Traumatic spinal cord injury',severity:'severe',desc:'A complete injury (motor and sensory below the lesion) typically results from fracture-dislocation, hyperflexion or axial-load trauma. Cervical lesions cause tetraplegia; thoracic and lumbar lesions cause paraplegia. Immobilisation, oedema control and early rehabilitation are the pillars of acute management.'},
      {name:'Central cord syndrome',severity:'severe',desc:'The most common incomplete SCI — usually a hyperextension injury in a person with pre-existing cervical stenosis. The central grey matter (which carries arm fibres) is damaged more than the peripheral white matter (leg fibres). The paradoxical result: greater weakness in the arms than the legs, with bladder dysfunction and variable sensory loss below the level.'},
      {name:'Cauda equina syndrome',severity:'severe',desc:'Below L1–L2, the canal contains only the loose roots of the cauda equina, not the cord itself. A large disc herniation or stenosis here compresses multiple roots simultaneously: bilateral leg weakness, saddle-area anaesthesia (inner thighs and perineum), and — the surgical emergency sign — bladder and bowel dysfunction. Decompression within 24–48 hours dramatically improves outcome; delay risks permanent incontinence.'},
    ],
    fact:'The spinal cord ends at vertebral level L1–L2 in adults — below this the canal contains only the floating cauda equina roots. This anatomical fact is why lumbar punctures (spinal taps) are done at L3–L4 or L4–L5: there is no cord to puncture, and the roots drift safely away from the needle.',
    muscles:['all'],
    bones:['cervicalSpine','thoracicSpine','lumbarSpine','sacrum'],
  },
};


/* ══════════════════════════════════════════════════════
   BONE REGION PATHS — interactive overlays (front + back)
   Paths roughly trace the named bone; cx/cy = label anchor
   ══════════════════════════════════════════════════════ */
const BONE_REGIONS_FRONT = [
  {id:'br-skull',     key:'skull',         label:'SKULL',   cx:100, cy:37,
   d:'M80,14 Q80,8 100,8 Q120,8 120,14 Q128,22 128,40 Q128,56 120,64 Q110,70 100,70 Q90,70 80,64 Q72,56 72,40 Q72,22 80,14 Z'},
  {id:'br-cerv',      key:'cervicalSpine', label:'C-SPINE', cx:100, cy:72,
   d:'M94,62 Q100,60 106,62 L108,82 Q104,86 100,86 Q96,86 92,82 Z'},
  {id:'br-clav-L',    key:'clavicle',      label:'CLAV',    cx:75,  cy:82,
   d:'M97,79 Q86,76 68,80 Q54,86 50,91 Q56,94 68,90 Q82,83 97,81 Z'},
  {id:'br-clav-R',    key:'clavicle',      label:'CLAV',    cx:125, cy:82,
   d:'M103,79 Q114,76 132,80 Q146,86 150,91 Q144,94 132,90 Q118,83 103,81 Z'},
  {id:'br-rib-L',     key:'ribs',          label:'RIBS',    cx:72,  cy:130,
   d:'M98,85 Q82,84 60,96 Q52,110 55,130 Q58,148 74,156 Q84,158 90,152 Q90,128 88,104 Q96,88 98,85 Z'},
  {id:'br-rib-R',     key:'ribs',          label:'RIBS',    cx:128, cy:130,
   d:'M102,85 Q118,84 140,96 Q148,110 145,130 Q142,148 126,156 Q116,158 110,152 Q110,128 112,104 Q104,88 102,85 Z'},
  {id:'br-sternum',   key:'ribs',          label:'STERNUM', cx:100, cy:124,
   d:'M96,80 Q96,168 100,174 Q104,168 104,80 Z'},
  {id:'br-thoracic',  key:'thoracicSpine', label:'T-SPINE', cx:100, cy:152,
   d:'M97,85 Q95,120 95,165 Q95,230 98,248 L102,248 Q105,230 105,165 Q105,120 103,85 Z'},
  {id:'br-lumbar',    key:'lumbarSpine',   label:'L-SPINE', cx:100, cy:210,
   d:'M96,170 Q94,192 94,222 Q95,242 100,250 Q105,242 106,222 Q106,192 104,170 Z'},
  {id:'br-humerus-L', key:'humerus',       label:'HUMERUS', cx:38,  cy:160,
   d:'M52,88 Q36,100 28,148 Q25,170 30,194 Q38,202 46,196 Q56,172 56,142 Q56,108 50,90 Z'},
  {id:'br-humerus-R', key:'humerus',       label:'HUMERUS', cx:162, cy:160,
   d:'M148,88 Q164,100 172,148 Q175,170 170,194 Q162,202 154,196 Q144,172 144,142 Q144,108 150,90 Z'},
  {id:'br-radius-L',  key:'radius',        label:'R/U',     cx:34,  cy:240,
   d:'M28,192 Q14,220 15,258 Q18,280 32,292 Q44,298 56,288 Q58,266 56,242 Q52,210 46,192 Z'},
  {id:'br-radius-R',  key:'radius',        label:'R/U',     cx:166, cy:240,
   d:'M172,192 Q186,220 185,258 Q182,280 168,292 Q156,298 144,288 Q142,266 144,242 Q148,210 154,192 Z'},
  {id:'br-carpals-L', key:'carpals',       label:'HAND',    cx:36,  cy:308,
   d:'M48,286 Q34,286 20,296 Q16,312 24,324 Q36,330 52,322 Q58,308 56,290 Z'},
  {id:'br-carpals-R', key:'carpals',       label:'HAND',    cx:164, cy:308,
   d:'M152,286 Q166,286 180,296 Q184,312 176,324 Q164,330 148,322 Q142,308 144,290 Z'},
  {id:'br-pelvis',    key:'pelvis',        label:'PELVIS',  cx:100, cy:264,
   d:'M50,252 Q50,270 56,282 Q68,292 100,294 Q132,292 144,282 Q150,270 150,252 Q136,244 100,244 Q64,244 50,252 Z'},
  {id:'br-sacrum',    key:'sacrum',        label:'SACRUM',  cx:100, cy:278,
   d:'M92,248 Q88,262 88,280 Q92,296 100,298 Q108,296 112,280 Q112,262 108,248 Z'},
  {id:'br-femur-L',   key:'femur',         label:'FEMUR',   cx:74,  cy:330,
   d:'M56,268 Q48,296 50,344 Q52,378 70,396 Q82,402 96,396 Q100,376 98,336 Q96,292 84,268 Z'},
  {id:'br-femur-R',   key:'femur',         label:'FEMUR',   cx:126, cy:330,
   d:'M144,268 Q152,296 150,344 Q148,378 130,396 Q118,402 104,396 Q100,376 102,336 Q104,292 116,268 Z'},
  {id:'br-patella-L', key:'patella',       label:'PAT',     cx:78,  cy:383,
   d:'M72,374 Q72,394 78,396 Q84,394 84,374 Q84,368 78,368 Q72,368 72,374 Z'},
  {id:'br-patella-R', key:'patella',       label:'PAT',     cx:122, cy:383,
   d:'M116,374 Q116,394 122,396 Q128,394 128,374 Q128,368 122,368 Q116,368 116,374 Z'},
  {id:'br-tibia-L',   key:'tibia',         label:'TIB/FIB', cx:76,  cy:450,
   d:'M62,396 Q54,424 56,462 Q62,488 80,492 Q96,490 100,472 Q101,446 98,418 Q92,396 78,394 Z'},
  {id:'br-tibia-R',   key:'tibia',         label:'TIB/FIB', cx:124, cy:450,
   d:'M138,396 Q146,424 144,462 Q138,488 120,492 Q104,490 100,472 Q99,446 102,418 Q108,396 122,394 Z'},
  {id:'br-tarsals-L', key:'tarsals',       label:'FOOT',    cx:74,  cy:494,
   d:'M58,476 Q50,490 54,506 Q65,514 82,512 Q96,506 96,492 Q89,478 74,474 Z'},
  {id:'br-tarsals-R', key:'tarsals',       label:'FOOT',    cx:126, cy:494,
   d:'M142,476 Q150,490 146,506 Q135,514 118,512 Q104,506 104,492 Q111,478 126,474 Z'},
];

const BONE_REGIONS_BACK = [
  {id:'br-skull-bk',     key:'skull',         label:'SKULL',   cx:100, cy:37,
   d:'M80,14 Q80,8 100,8 Q120,8 120,14 Q128,22 128,40 Q128,56 120,64 Q110,70 100,70 Q90,70 80,64 Q72,56 72,40 Q72,22 80,14 Z'},
  {id:'br-cerv-bk',      key:'cervicalSpine', label:'C-SPINE', cx:100, cy:72,
   d:'M94,62 Q100,60 106,62 L108,82 Q104,86 100,86 Q96,86 92,82 Z'},
  {id:'br-scap-L',       key:'scapula',       label:'SCAPULA', cx:62,  cy:128,
   d:'M50,96 Q38,116 44,148 Q50,164 68,162 Q82,152 84,124 Q82,100 66,92 Z'},
  {id:'br-scap-R',       key:'scapula',       label:'SCAPULA', cx:138, cy:128,
   d:'M150,96 Q162,116 156,148 Q150,164 132,162 Q118,152 116,124 Q118,100 134,92 Z'},
  {id:'br-thoracic-bk',  key:'thoracicSpine', label:'T-SPINE', cx:100, cy:150,
   d:'M97,85 Q95,120 95,165 Q95,220 98,248 L102,248 Q105,220 105,165 Q105,120 103,85 Z'},
  {id:'br-rib-bk-L',     key:'ribs',          label:'RIBS',    cx:68,  cy:130,
   d:'M98,85 Q80,84 60,96 Q50,112 52,134 Q56,152 74,158 Q84,156 88,148 Q88,120 90,98 Q96,87 98,85 Z'},
  {id:'br-rib-bk-R',     key:'ribs',          label:'RIBS',    cx:132, cy:130,
   d:'M102,85 Q120,84 140,96 Q150,112 148,134 Q144,152 126,158 Q116,156 112,148 Q112,120 110,98 Q104,87 102,85 Z'},
  {id:'br-lumbar-bk',    key:'lumbarSpine',   label:'L-SPINE', cx:100, cy:210,
   d:'M96,170 Q94,192 94,222 Q95,242 100,250 Q105,242 106,222 Q106,192 104,170 Z'},
  {id:'br-sacrum-bk',    key:'sacrum',        label:'SACRUM',  cx:100, cy:274,
   d:'M88,250 Q84,264 84,282 Q88,298 100,302 Q112,298 116,282 Q116,264 112,250 Q106,245 100,244 Q94,245 88,250 Z'},
  {id:'br-pelvis-bk',    key:'pelvis',        label:'PELVIS',  cx:100, cy:258,
   d:'M50,250 Q50,270 56,284 Q70,294 100,296 Q130,294 144,284 Q150,270 150,250 Q136,244 100,243 Q64,244 50,250 Z'},
  {id:'br-humerus-bk-L', key:'humerus',       label:'HUMERUS', cx:34,  cy:165,
   d:'M44,94 Q28,110 26,150 Q24,174 30,196 Q40,204 50,196 Q60,172 58,140 Q56,106 48,92 Z'},
  {id:'br-humerus-bk-R', key:'humerus',       label:'HUMERUS', cx:166, cy:165,
   d:'M156,94 Q172,110 174,150 Q176,174 170,196 Q160,204 150,196 Q140,172 142,140 Q144,106 152,92 Z'},
  {id:'br-radius-bk-L',  key:'radius',        label:'R/U',     cx:30,  cy:245,
   d:'M28,202 Q14,232 16,268 Q20,290 34,298 Q46,304 56,294 Q58,270 56,246 Q50,214 42,202 Z'},
  {id:'br-radius-bk-R',  key:'radius',        label:'R/U',     cx:170, cy:245,
   d:'M172,202 Q186,232 184,268 Q180,290 166,298 Q154,304 144,294 Q142,270 144,246 Q150,214 158,202 Z'},
  {id:'br-carpals-bk-L', key:'carpals',       label:'HAND',    cx:32,  cy:308,
   d:'M46,290 Q32,290 20,300 Q17,314 26,326 Q38,332 54,324 Q58,310 56,292 Z'},
  {id:'br-carpals-bk-R', key:'carpals',       label:'HAND',    cx:168, cy:308,
   d:'M154,290 Q168,290 180,300 Q183,314 174,326 Q162,332 146,324 Q142,310 144,292 Z'},
  {id:'br-femur-bk-L',   key:'femur',         label:'FEMUR',   cx:74,  cy:390,
   d:'M52,264 Q44,292 48,344 Q52,380 72,400 Q84,406 100,400 Q104,378 100,340 Q96,290 82,264 Z'},
  {id:'br-femur-bk-R',   key:'femur',         label:'FEMUR',   cx:126, cy:390,
   d:'M148,264 Q156,292 152,344 Q148,380 128,400 Q116,406 100,400 Q96,378 100,340 Q104,290 118,264 Z'},
  {id:'br-tibia-bk-L',   key:'tibia',         label:'TIB/FIB', cx:76,  cy:455,
   d:'M58,398 Q50,428 54,466 Q60,492 78,498 Q96,496 100,476 Q101,448 97,420 Q90,396 76,394 Z'},
  {id:'br-tibia-bk-R',   key:'tibia',         label:'TIB/FIB', cx:124, cy:455,
   d:'M142,398 Q150,428 146,466 Q140,492 122,498 Q104,496 100,476 Q99,448 103,420 Q110,396 124,394 Z'},
  {id:'br-tarsals-bk-L', key:'tarsals',       label:'FOOT',    cx:72,  cy:506,
   d:'M58,490 Q50,502 54,514 Q65,520 80,518 Q92,512 94,500 Q87,487 72,486 Z'},
  {id:'br-tarsals-bk-R', key:'tarsals',       label:'FOOT',    cx:128, cy:506,
   d:'M142,490 Q150,502 146,514 Q135,520 120,518 Q108,512 106,500 Q113,487 128,486 Z'},
];

/* Tendon regions are described PARAMETRICALLY as a cord running from a
   proximal point (x1,y1 — the muscle/belly end, usually wider w1) to a
   distal point (x2,y2 — the bony insertion, narrower w2). buildTendons()
   feeds these to _tendonGeo(), which generates a rounded fibrous band plus
   internal fibre striations — so the shapes read as real tendons, not blobs.
   A few non-linear tendons (rotator cuff arc, plantar fascia fan) supply a
   raw `d` (and optional `fibers`) instead. Tendons that are anatomically
   more than one cord (the four finger flexor/extensor tendons, peroneus
   longus+brevis, the conjoined hamstring tendons) instead supply a
   `strands` array — each {x1,y1,x2,y2,w1,w2} entry becomes its own
   independently-sized cord, all sharing one key/id so they still act as a
   single tendon for hover/click/zoom. Flag exactly one strand `label:true`
   to anchor that tendon's label. Coordinates are calibrated against the
   muscle and bone-region landmark tables above. */
const TENDON_REGIONS_FRONT = [
  // ── Pectoralis major tendon — broad, flat, bilaminar; folds into the
  //    anterior axilla and inserts on the humerus (bicipital groove).
  {id:'tr-pec-L',   key:'pectoralTendon',  label:'PEC T.',       x1:64, y1:108, x2:51, y2:117, w1:3.6, w2:2.0},
  {id:'tr-pec-R',   key:'pectoralTendon',  label:'PEC T.',       x1:136,y1:108, x2:149,y2:117, w1:3.6, w2:2.0},
  // ── Biceps distal tendon — a slim, cordlike rope diving medially to the
  //    radial tuberosity. Much narrower than the pec tendon above it.
  {id:'tr-bicep-L', key:'bicepsTendon',    label:'BICEPS T.',    x1:40, y1:192, x2:45, y2:216, w1:2.2, w2:1.3},
  {id:'tr-bicep-R', key:'bicepsTendon',    label:'BICEPS T.',    x1:160,y1:192, x2:155,y2:216, w1:2.2, w2:1.3},
  // ── Common flexor tendon — compact knot at the medial (inner) epicondyle.
  {id:'tr-flex-L',  key:'flexorTendons',   label:'FLEXOR T.',    x1:54, y1:190, x2:49, y2:206, w1:2.0, w2:1.2},
  {id:'tr-flex-R',  key:'flexorTendons',   label:'FLEXOR T.',    x1:146,y1:190, x2:151,y2:206, w1:2.0, w2:1.2},
  // ── Common extensor tendon — compact knot at the lateral (outer)
  //    epicondyle. Sits right on the seam between the upper-arm and forearm
  //    shapes, so its anchor point is nudged onto solid silhouette instead
  //    of the thin notch right at the elbow crease.
  {id:'tr-ext-L',   key:'extensorTendons', label:'EXTENSOR T.',  x1:33, y1:197, x2:34, y2:208, w1:2.0, w2:1.2},
  {id:'tr-ext-R',   key:'extensorTendons', label:'EXTENSOR T.',  x1:167,y1:197, x2:166,y2:208, w1:2.0, w2:1.2},
  // ── Finger flexor tendons — FDS/FDP fan out as four separate cords to
  //    digits 2–5, not one block. The middle-finger tendon runs longest and
  //    thickest; the pinky's is shortest and thinnest — that size spread is
  //    the real anatomy (and why these strands shouldn't look identical).
  //    THE tendons loaded in fingertip push-ups, dead hangs, and grip work.
  {id:'tr-ffl-L', key:'fingerFlexors', label:'FINGER FLEX.', strands:[
    {x1:34,y1:289,x2:24,y2:316,w1:1.8,w2:1.0},            // index (digit 2)
    {x1:37,y1:288,x2:34,y2:320,w1:2.3,w2:1.3,label:true}, // middle (digit 3) — longest, thickest
    {x1:40,y1:289,x2:42,y2:318,w1:2.0,w2:1.15},           // ring (digit 4)
    {x1:43,y1:291,x2:50,y2:312,w1:1.5,w2:0.85},           // pinky (digit 5) — shortest, thinnest
  ]},
  {id:'tr-ffl-R', key:'fingerFlexors', label:'FINGER FLEX.', strands:[
    {x1:166,y1:289,x2:176,y2:316,w1:1.8,w2:1.0},
    {x1:163,y1:288,x2:166,y2:320,w1:2.3,w2:1.3,label:true},
    {x1:160,y1:289,x2:158,y2:318,w1:2.0,w2:1.15},
    {x1:157,y1:291,x2:150,y2:312,w1:1.5,w2:0.85},
  ]},
  // ── Iliopsoas tendon — anterior hip, to the lesser trochanter.
  {id:'tr-ilps-L',  key:'iliopsoas',       label:'ILIOPSOAS T.', x1:90, y1:258, x2:84, y2:280, w1:2.5, w2:1.6},
  {id:'tr-ilps-R',  key:'iliopsoas',       label:'ILIOPSOAS T.', x1:110,y1:258, x2:116,y2:280, w1:2.5, w2:1.6},
  // ── Adductor longus tendon — the slender cord palpable in the groin crease.
  {id:'tr-add-L',   key:'adductorTendon',  label:'ADDUCTOR T.',  x1:93, y1:266, x2:86, y2:292, w1:2.0, w2:1.3},
  {id:'tr-add-R',   key:'adductorTendon',  label:'ADDUCTOR T.',  x1:107,y1:266, x2:114,y2:292, w1:2.0, w2:1.3},
  // ── Quadriceps tendon — the broadest, flattest tendon at the knee, onto
  //    the superior patella. Second only to the Achilles in raw size.
  {id:'tr-quad-L',  key:'quadricepsTendon',label:'QUAD T.',      x1:76, y1:360, x2:78, y2:376, w1:4.2, w2:3.0},
  {id:'tr-quad-R',  key:'quadricepsTendon',label:'QUAD T.',      x1:124,y1:360, x2:122,y2:376, w1:4.2, w2:3.0},
  // ── Patellar tendon — inferior patella to tibial tuberosity. Thick, but
  //    distinctly slimmer than the quad tendon it continues from.
  {id:'tr-pat-L',   key:'patellar',        label:'PATELLAR T.',  x1:78, y1:391, x2:78, y2:410, w1:3.0, w2:2.1},
  {id:'tr-pat-R',   key:'patellar',        label:'PATELLAR T.',  x1:122,y1:391, x2:122,y2:410, w1:3.0, w2:2.1},
  // ── Tibialis anterior tendon — slim cord, anterior ankle onto the dorsal foot.
  {id:'tr-tib-L',   key:'tibAnterior',     label:'TIB. ANT. T.', x1:74, y1:452, x2:79, y2:486, w1:1.9, w2:1.1},
  {id:'tr-tib-R',   key:'tibAnterior',     label:'TIB. ANT. T.', x1:126,y1:452, x2:121,y2:486, w1:1.9, w2:1.1},
];

const TENDON_REGIONS_BACK = [
  // ── Rotator cuff — broad arc cupping the humeral head (custom path).
  {id:'tr-rc-L',    key:'rotatorcuff',     label:'ROT. CUFF',    cx:51, cy:101, lx:43, ly:101,
   d:'M60,92 Q66,98 64,106 Q60,114 50,113 Q44,110 44,103 Q45,95 52,93 Q57,91 60,92 Z',
   fibers:['M58,95 Q62,101 56,108','M52,94 Q55,101 50,109','M62,98 Q63,104 58,110']},
  {id:'tr-rc-R',    key:'rotatorcuff',     label:'ROT. CUFF',    cx:149,cy:101, lx:157,ly:101,
   d:'M140,92 Q134,98 136,106 Q140,114 150,113 Q156,110 156,103 Q155,95 148,93 Q143,91 140,92 Z',
   fibers:['M142,95 Q138,101 144,108','M148,94 Q145,101 150,109','M138,98 Q137,104 142,110']},
  // ── Triceps tendon — broad band onto the olecranon (point of the elbow).
  {id:'tr-tri-L',   key:'tricepsTendon',   label:'TRICEPS T.',   x1:36, y1:176, x2:38, y2:199, w1:3.5, w2:2.1},
  {id:'tr-tri-R',   key:'tricepsTendon',   label:'TRICEPS T.',   x1:164,y1:176, x2:162,y2:199, w1:3.5, w2:2.1},
  // ── Finger extensor tendons — the ropy bands that stand up on the back of
  //    the hand when you splay your fingers. Four separate cords to digits
  //    2–5, fanning from the wrist — not one block. Middle finger's runs
  //    longest and thickest; pinky's is the shortest and thinnest.
  {id:'tr-fex-L', key:'fingerExtensors', label:'FINGER EXT.', strands:[
    {x1:30,y1:291,x2:22,y2:315,w1:1.8,w2:1.0},
    {x1:33,y1:290,x2:32,y2:320,w1:2.3,w2:1.3,label:true},
    {x1:36,y1:291,x2:40,y2:318,w1:2.0,w2:1.15},
    {x1:39,y1:293,x2:48,y2:313,w1:1.5,w2:0.85},
  ]},
  {id:'tr-fex-R', key:'fingerExtensors', label:'FINGER EXT.', strands:[
    {x1:170,y1:291,x2:178,y2:315,w1:1.8,w2:1.0},
    {x1:167,y1:290,x2:168,y2:320,w1:2.3,w2:1.3,label:true},
    {x1:164,y1:291,x2:160,y2:318,w1:2.0,w2:1.15},
    {x1:161,y1:293,x2:152,y2:313,w1:1.5,w2:0.85},
  ]},
  // ── Proximal hamstring tendons — biceps femoris + semitendinosus form a
  //    thin, superficial conjoined cord; semimembranosus sits deeper as its
  //    own broader, flatter tendon. Two distinctly different strands, not
  //    a single shared origin block.
  {id:'tr-prxhm-L', key:'proxHamstring', label:'HAMSTRING T.', strands:[
    {x1:85,y1:261,x2:81,y2:289,w1:2.1,w2:1.3},          // ST/BF conjoined cord
    {x1:82,y1:263,x2:85,y2:283,w1:3.0,w2:2.1,label:true}, // semimembranosus — broad, flat
  ]},
  {id:'tr-prxhm-R', key:'proxHamstring', label:'HAMSTRING T.', strands:[
    {x1:115,y1:261,x2:119,y2:289,w1:2.1,w2:1.3},
    {x1:118,y1:263,x2:115,y2:283,w1:3.0,w2:2.1,label:true},
  ]},
  // ── Peroneal tendons — longus is the longer, thinner of the pair, wrapping
  //    furthest under the foot; brevis is shorter and noticeably thicker,
  //    ending sooner at the 5th metatarsal base. Two different tendons, two
  //    different sizes — not a doubled-up copy of one shape.
  {id:'tr-pero-L', key:'peroneals', label:'PERONEAL T.', strands:[
    {x1:66,y1:446,x2:56,y2:486,w1:2.1,w2:1.3},          // longus
    {x1:64,y1:456,x2:62,y2:480,w1:2.4,w2:1.6,label:true}, // brevis
  ]},
  {id:'tr-pero-R', key:'peroneals', label:'PERONEAL T.', strands:[
    {x1:134,y1:446,x2:144,y2:486,w1:2.1,w2:1.3},
    {x1:136,y1:456,x2:138,y2:480,w1:2.4,w2:1.6,label:true},
  ]},
  // ── Achilles tendon — the thickest tendon in the human body, by a clear
  //    margin over everything else on the model, to the calcaneus.
  {id:'tr-ach-L',   key:'achilles',        label:'ACHILLES',     x1:74, y1:448, x2:74, y2:489, w1:4.8, w2:3.4},
  {id:'tr-ach-R',   key:'achilles',        label:'ACHILLES',     x1:126,y1:448, x2:126,y2:489, w1:4.8, w2:3.4},
  // ── Plantar fascia — fans from the calcaneus toward the forefoot, wide
  //    and flat. Endpoint is pulled in a bit from the very tip of the foot
  //    shape so the wide fan-end doesn't poke past the silhouette.
  {id:'tr-pf-L',    key:'plantarFascia',   label:'PLANTAR F.',   x1:72, y1:492, x2:84, y2:503, w1:2.1, w2:3.1},
  {id:'tr-pf-R',    key:'plantarFascia',   label:'PLANTAR F.',   x1:128,y1:492, x2:116,y2:503, w1:2.1, w2:3.1},
];

/* Nerves are drawn with the same parametric cord builder as tendons — a thin
   neural trunk that branches via multi-strand `strands` arrays. They are
   deliberately slimmer than tendons (lower w1/w2) so they read as nerves, not
   cords. Flag exactly one strand `label:true` to anchor that nerve's label. */
const NERVE_REGIONS_FRONT = [
  // ── Brachial plexus — root cluster fanning from the lower neck under the
  //    clavicle into the axilla. Drawn as a small radiating fan.
  {id:'nr-bp-L', key:'brachialPlexus', label:'BR. PLEXUS', strands:[
    {x1:94,y1:68,x2:80,y2:86,w1:1.3,w2:0.9},
    {x1:93,y1:72,x2:70,y2:96,w1:1.5,w2:1.0,label:true},
    {x1:92,y1:76,x2:60,y2:108,w1:1.3,w2:0.9},
  ]},
  {id:'nr-bp-R', key:'brachialPlexus', label:'BR. PLEXUS', strands:[
    {x1:106,y1:68,x2:120,y2:86,w1:1.3,w2:0.9},
    {x1:107,y1:72,x2:130,y2:96,w1:1.5,w2:1.0,label:true},
    {x1:108,y1:76,x2:140,y2:108,w1:1.3,w2:0.9},
  ]},
  // ── Median nerve — down the anterior arm, across the elbow, through the
  //    carpal tunnel into the palm.
  {id:'nr-med-L', key:'median', label:'MEDIAN N.', strands:[
    {x1:55,y1:112,x2:42,y2:165,w1:1.4,w2:1.1},
    {x1:42,y1:165,x2:35,y2:230,w1:1.1,w2:0.9,label:true},
    {x1:35,y1:230,x2:34,y2:296,w1:0.9,w2:0.7},
  ]},
  {id:'nr-med-R', key:'median', label:'MEDIAN N.', strands:[
    {x1:145,y1:112,x2:158,y2:165,w1:1.4,w2:1.1},
    {x1:158,y1:165,x2:165,y2:230,w1:1.1,w2:0.9,label:true},
    {x1:165,y1:230,x2:166,y2:296,w1:0.9,w2:0.7},
  ]},
  // ── Ulnar nerve — medial arm, behind the elbow, to the little-finger side.
  {id:'nr-uln-L', key:'ulnar', label:'ULNAR N.', strands:[
    {x1:57,y1:115,x2:46,y2:170,w1:1.2,w2:1.0},
    {x1:46,y1:170,x2:40,y2:235,w1:1.0,w2:0.8,label:true},
    {x1:40,y1:235,x2:26,y2:300,w1:0.85,w2:0.65},
  ]},
  {id:'nr-uln-R', key:'ulnar', label:'ULNAR N.', strands:[
    {x1:143,y1:115,x2:154,y2:170,w1:1.2,w2:1.0},
    {x1:154,y1:170,x2:160,y2:235,w1:1.0,w2:0.8,label:true},
    {x1:160,y1:235,x2:174,y2:300,w1:0.85,w2:0.65},
  ]},
  // ── Femoral nerve — anterior thigh, continuing as the saphenous toward the
  //    medial leg.
  {id:'nr-fem-L', key:'femoral', label:'FEMORAL N.', strands:[
    {x1:88,y1:250,x2:84,y2:300,w1:1.6,w2:1.3,label:true},
    {x1:84,y1:300,x2:80,y2:362,w1:1.2,w2:0.9},
    {x1:80,y1:362,x2:84,y2:444,w1:0.7,w2:0.5},
  ]},
  {id:'nr-fem-R', key:'femoral', label:'FEMORAL N.', strands:[
    {x1:112,y1:250,x2:116,y2:300,w1:1.6,w2:1.3,label:true},
    {x1:116,y1:300,x2:120,y2:362,w1:1.2,w2:0.9},
    {x1:120,y1:362,x2:116,y2:444,w1:0.7,w2:0.5},
  ]},
  // ── Common fibular nerve — wraps the fibular neck below the lateral knee
  //    and runs to the dorsum of the foot.
  {id:'nr-cf-L', key:'commonFibular', label:'COM. FIBULAR', strands:[
    {x1:66,y1:392,x2:62,y2:430,w1:1.1,w2:0.9,label:true},
    {x1:62,y1:430,x2:70,y2:478,w1:0.8,w2:0.6},
  ]},
  {id:'nr-cf-R', key:'commonFibular', label:'COM. FIBULAR', strands:[
    {x1:134,y1:392,x2:138,y2:430,w1:1.1,w2:0.9,label:true},
    {x1:138,y1:430,x2:130,y2:478,w1:0.8,w2:0.6},
  ]},
  // ── Musculocutaneous nerve — lateral arm from axilla to elbow, between
  //    biceps and brachialis, then continues as lat. cutaneous of forearm.
  {id:'nr-mc-L', key:'musculocutaneous', label:'MUSCULOCUT.', strands:[
    {x1:62,y1:100,x2:64,y2:148,w1:1.1,w2:0.9,label:true},
    {x1:64,y1:148,x2:60,y2:192,w1:0.9,w2:0.7},
  ]},
  {id:'nr-mc-R', key:'musculocutaneous', label:'MUSCULOCUT.', strands:[
    {x1:138,y1:100,x2:136,y2:148,w1:1.1,w2:0.9,label:true},
    {x1:136,y1:148,x2:140,y2:192,w1:0.9,w2:0.7},
  ]},
];

const NERVE_REGIONS_BACK = [
  // ── Radial nerve — spirals around the back of the humerus and into the
  //    posterior forearm.
  {id:'nr-rad-L', key:'radial', label:'RADIAL N.', strands:[
    {x1:50,y1:112,x2:40,y2:150,w1:1.4,w2:1.1},
    {x1:40,y1:150,x2:46,y2:198,w1:1.1,w2:0.9,label:true},
    {x1:46,y1:198,x2:36,y2:270,w1:0.9,w2:0.7},
  ]},
  {id:'nr-rad-R', key:'radial', label:'RADIAL N.', strands:[
    {x1:150,y1:112,x2:160,y2:150,w1:1.4,w2:1.1},
    {x1:160,y1:150,x2:154,y2:198,w1:1.1,w2:0.9,label:true},
    {x1:154,y1:198,x2:164,y2:270,w1:0.9,w2:0.7},
  ]},
  // ── Sciatic nerve — the body's thickest nerve, from the buttock down the
  //    posterior thigh to just above the knee.
  {id:'nr-sci-L', key:'sciatic', label:'SCIATIC N.', strands:[
    {x1:80,y1:292,x2:78,y2:340,w1:2.0,w2:1.6,label:true},
    {x1:78,y1:340,x2:76,y2:388,w1:1.5,w2:1.2},
  ]},
  {id:'nr-sci-R', key:'sciatic', label:'SCIATIC N.', strands:[
    {x1:120,y1:292,x2:122,y2:340,w1:2.0,w2:1.6,label:true},
    {x1:122,y1:340,x2:124,y2:388,w1:1.5,w2:1.2},
  ]},
  // ── Tibial nerve — down the posterior calf, behind the medial malleolus
  //    into the sole.
  {id:'nr-tib-L', key:'tibial', label:'TIBIAL N.', strands:[
    {x1:76,y1:396,x2:74,y2:440,w1:1.3,w2:1.0,label:true},
    {x1:74,y1:440,x2:74,y2:486,w1:0.9,w2:0.7},
  ]},
  {id:'nr-tib-R', key:'tibial', label:'TIBIAL N.', strands:[
    {x1:124,y1:396,x2:126,y2:440,w1:1.3,w2:1.0,label:true},
    {x1:126,y1:440,x2:126,y2:486,w1:0.9,w2:0.7},
  ]},
  // ── Suprascapular nerve — from upper brachial plexus trunk laterally
  //    through the suprascapular notch across the back of the scapula.
  {id:'nr-ssc-L', key:'suprascapular', label:'SUPRASCAP.', strands:[
    {x1:90,y1:84,x2:70,y2:92,w1:0.9,w2:0.8},
    {x1:70,y1:92,x2:52,y2:108,w1:0.8,w2:0.65,label:true},
  ]},
  {id:'nr-ssc-R', key:'suprascapular', label:'SUPRASCAP.', strands:[
    {x1:110,y1:84,x2:130,y2:92,w1:0.9,w2:0.8},
    {x1:130,y1:92,x2:148,y2:108,w1:0.8,w2:0.65,label:true},
  ]},
  // ── Axillary nerve — wraps around the surgical neck of the humerus
  //    posteriorly to reach the deltoid.
  {id:'nr-axl-L', key:'axillary', label:'AXILLARY N.', strands:[
    {x1:52,y1:96,x2:40,y2:108,w1:1.0,w2:0.8,label:true},
    {x1:40,y1:108,x2:36,y2:126,w1:0.8,w2:0.65},
  ]},
  {id:'nr-axl-R', key:'axillary', label:'AXILLARY N.', strands:[
    {x1:148,y1:96,x2:160,y2:108,w1:1.0,w2:0.8,label:true},
    {x1:160,y1:108,x2:164,y2:126,w1:0.8,w2:0.65},
  ]},
  // ── Inferior gluteal nerve — from sacral plexus into the underside of
  //    gluteus maximus (medial to the sciatic).
  {id:'nr-ig-L', key:'inferiorGluteal', label:'INF. GLUTEAL', strands:[
    {x1:88,y1:284,x2:84,y2:306,w1:1.2,w2:0.9,label:true},
    {x1:84,y1:306,x2:80,y2:328,w1:0.9,w2:0.7},
  ]},
  {id:'nr-ig-R', key:'inferiorGluteal', label:'INF. GLUTEAL', strands:[
    {x1:112,y1:284,x2:116,y2:306,w1:1.2,w2:0.9,label:true},
    {x1:116,y1:306,x2:120,y2:328,w1:0.9,w2:0.7},
  ]},
  // ── Spinal cord — the central column from which all peripheral nerves
  //    originate; runs from the cervical cord (C1) to the conus at L1–L2.
  {id:'nr-sc', key:'spinalCord', label:'SPINAL CORD', strands:[
    {x1:100,y1:62,x2:100,y2:88,w1:2.2,w2:2.0,label:true},
    {x1:100,y1:88,x2:100,y2:198,w1:2.0,w2:1.7},
    {x1:100,y1:198,x2:100,y2:260,w1:1.7,w2:1.0},
  ]},
];

/* ══════════════════════════════════════════════════════
   SVG BODY PATHS — 200×520 coordinate system
   ══════════════════════════════════════════════════════ */
const BODY = [
  // Head — slightly oval cranium, wider at temples
  {tag:'ellipse',a:{cx:100,cy:36,rx:20,ry:23}},
  // Neck — tapered column
  {tag:'path',d:'M91,57 Q100,61 109,57 L111,80 Q104,84 100,84 Q96,84 89,80 Z'},
  // Torso — anatomically correct: clavicle width ~136, waist ~84, hip ~100
  // Shoulder line, armpit hollow, waist taper, hip flare
  {tag:'path',d:'M54,82 Q36,90 34,106 Q34,118 44,128 Q48,168 50,200 Q52,222 58,238 Q68,248 100,252 Q132,248 142,238 Q148,222 150,200 Q152,168 156,128 Q166,118 166,106 Q166,90 146,82 Q124,76 100,76 Q76,76 54,82 Z'},
  // Pelvis / hip girdle — fills gap between torso and thighs
  {tag:'path',d:'M58,238 Q52,250 52,266 Q54,278 100,282 Q146,278 148,266 Q148,250 142,238 Q124,248 100,252 Q76,248 58,238 Z'},
  // Left upper arm — deltoid bulge at top, tapers to elbow
  {tag:'path',d:'M36,94 Q22,108 22,148 Q23,172 32,190 Q43,198 54,192 Q62,174 62,148 Q62,116 52,96 Z'},
  // Right upper arm
  {tag:'path',d:'M164,94 Q178,108 178,148 Q177,172 168,190 Q157,198 146,192 Q138,174 138,148 Q138,116 148,96 Z'},
  // Left forearm — wider at elbow, tapers to wrist
  {tag:'path',d:'M30,192 Q16,218 17,254 Q19,276 31,288 Q43,296 54,288 Q58,268 58,244 Q57,214 48,192 Z'},
  // Right forearm
  {tag:'path',d:'M170,192 Q184,218 183,254 Q181,276 169,288 Q157,296 146,288 Q142,268 142,244 Q143,214 152,192 Z'},
  // Left hand
  {tag:'path',d:'M19,288 Q14,302 18,318 Q27,328 43,326 Q54,320 55,308 Q54,292 48,286 Z'},
  // Right hand
  {tag:'path',d:'M181,288 Q186,302 182,318 Q173,328 157,326 Q146,320 145,308 Q146,292 152,286 Z'},
  // Left thigh — wide at hip socket, gentle taper to knee
  {tag:'path',d:'M56,270 Q44,292 46,342 Q50,378 66,396 Q80,404 96,396 Q101,374 100,338 Q98,290 88,268 Q74,262 60,268 Z'},
  // Right thigh
  {tag:'path',d:'M144,270 Q156,292 154,342 Q150,378 134,396 Q120,404 104,396 Q99,374 100,338 Q102,290 112,268 Q126,262 140,268 Z'},
  // Left lower leg — calf bulge upper half, slim ankle
  {tag:'path',d:'M62,398 Q54,420 57,460 Q63,482 78,488 Q93,488 97,474 Q99,454 97,422 Q93,398 78,394 Z'},
  // Right lower leg
  {tag:'path',d:'M138,398 Q146,420 143,460 Q137,482 122,488 Q107,488 103,474 Q101,454 103,422 Q107,398 122,394 Z'},
  // Left foot
  {tag:'path',d:'M59,474 Q50,488 54,502 Q65,512 82,510 Q96,504 97,492 Q91,477 76,472 Z'},
  // Right foot
  {tag:'path',d:'M141,474 Q150,488 146,502 Q135,512 118,510 Q104,504 103,492 Q109,477 124,472 Z'},
];

/* FRONT muscle regions — anatomically improved paths */
const FRONT = [
  /* Deltoids — triangular shoulder cap, sits on top of upper arm */
  {id:'delt-L',key:'deltoids',label:'DELT',cx:43,cy:106,rx:16,ry:22,
   d:'M52,80 Q36,88 30,106 Q30,124 40,136 Q50,144 62,138 Q70,128 70,112 Q68,96 60,86 Q56,80 52,80 Z',
   fascicles:['M46,84 Q40,102 40,124','M54,82 Q50,102 52,126','M60,86 Q58,108 58,128']},
  {id:'delt-R',key:'deltoids',label:'DELT',cx:157,cy:106,rx:16,ry:22,
   d:'M148,80 Q164,88 170,106 Q170,124 160,136 Q150,144 138,138 Q130,128 130,112 Q132,96 140,86 Q144,80 148,80 Z',
   fascicles:['M154,84 Q160,102 160,124','M146,82 Q150,102 148,126','M140,86 Q142,108 142,128']},
  /* Pectorals — fan shape converging at sternum, follows chest contour */
  {id:'pec-L',key:'pectorals',label:'PEC',cx:78,cy:110,rx:18,ry:22,
   d:'M64,82 Q54,92 56,110 Q60,128 74,138 Q88,144 100,138 Q101,122 100,96 Q96,82 80,80 Q70,80 64,82 Z',
   fascicles:[
     // Upper fibres fan toward sternum
     'M66,86 Q78,96 98,100',
     'M62,96 Q74,106 98,110',
     // Lower fibres
     'M62,110 Q74,120 96,124',
     'M66,124 Q78,132 97,132',
   ]},
  {id:'pec-R',key:'pectorals',label:'PEC',cx:122,cy:110,rx:18,ry:22,
   d:'M136,82 Q146,92 144,110 Q140,128 126,138 Q112,144 100,138 Q99,122 100,96 Q104,82 120,80 Q130,80 136,82 Z',
   fascicles:[
     'M134,86 Q122,96 102,100',
     'M138,96 Q126,106 102,110',
     'M138,110 Q126,120 104,124',
     'M134,124 Q122,132 103,132',
   ]},
  /* Biceps — elongated oval on front of upper arm */
  {id:'bic-L',key:'biceps',label:'BIC',cx:40,cy:158,rx:16,ry:28,
   d:'M28,136 Q20,158 22,180 Q26,198 46,202 Q60,198 66,180 Q68,160 60,138 Q50,130 36,132 Z',
   fascicles:[
     // Long head (lateral peak)
     'M56,136 Q58,160 56,192',
     // Short head (medial)
     'M34,134 Q32,158 34,192',
   ]},
  {id:'bic-R',key:'biceps',label:'BIC',cx:160,cy:158,rx:16,ry:28,
   d:'M172,136 Q180,158 178,180 Q174,198 154,202 Q140,198 134,180 Q132,160 140,138 Q150,130 164,132 Z',
   fascicles:[
     'M144,136 Q142,160 144,192',
     'M166,134 Q168,158 166,192',
   ]},
  /* Forearms — front view: flexor compartment dominant */
  {id:'fore-L',key:'forearms',label:'FORE',cx:36,cy:238,rx:14,ry:42,
   d:'M30,196 Q20,218 20,252 Q22,274 34,288 Q46,296 56,286 Q58,268 56,244 Q54,218 46,196 Z',
   fascicles:[
     'M44,198 Q38,226 34,266',
     'M36,198 Q28,226 24,268',
     'M50,202 Q46,232 44,272',
   ]},
  {id:'fore-R',key:'forearms',label:'FORE',cx:164,cy:238,rx:14,ry:42,
   d:'M170,196 Q180,218 180,252 Q178,274 166,288 Q154,296 144,286 Q142,268 144,244 Q146,218 154,196 Z',
   fascicles:[
     'M156,198 Q162,226 166,266',
     'M164,198 Q172,226 176,268',
     'M150,202 Q154,232 156,272',
   ]},
  /* Abs — rectus abdominis column */
  {id:'abs',key:'abs',label:'ABS',cx:100,cy:174,rx:14,ry:38,
   d:'M87,130 Q80,152 80,184 Q82,216 100,226 Q118,216 120,184 Q120,152 113,130 Q107,124 100,124 Q93,124 87,130 Z',
   fascicles:[
     // Tendinous inscriptions (horizontal bands)
     'M84,148 Q100,146 116,148',
     'M82,166 Q100,164 118,166',
     'M82,184 Q100,182 118,184',
     'M82,202 Q100,200 118,202',
   ]},
  /* Obliques — diagonal fan wrapping the waist */
  {id:'obl-L',key:'obliques',label:'OBL',cx:66,cy:172,rx:12,ry:30,
   d:'M64,126 Q54,148 54,178 Q56,210 70,226 Q78,232 84,224 Q82,192 82,164 Q82,140 78,128 Z',
   fascicles:[
     'M76,130 Q64,152 60,186',
     'M72,136 Q60,160 56,192',
   ]},
  {id:'obl-R',key:'obliques',label:'OBL',cx:134,cy:172,rx:12,ry:30,
   d:'M136,126 Q146,148 146,178 Q144,210 130,226 Q122,232 116,224 Q118,192 118,164 Q118,140 122,128 Z',
   fascicles:[
     'M124,130 Q136,152 140,186',
     'M128,136 Q140,160 144,192',
   ]},
  /* Quadriceps — sweeping front thigh */
  {id:'quad-L',key:'quadriceps',label:'QUAD',cx:73,cy:330,rx:20,ry:48,
   d:'M58,270 Q46,294 48,342 Q52,378 66,398 Q80,406 96,398 Q100,378 100,338 Q98,290 88,270 Z',
   fascicles:[
     // Rectus femoris — central
     'M76,272 Q74,310 72,370',
     // Vastus lateralis — outer
     'M90,272 Q88,312 84,372',
     // Vastus medialis — inner teardrop
     'M64,280 Q62,316 66,370',
   ]},
  {id:'quad-R',key:'quadriceps',label:'QUAD',cx:127,cy:330,rx:20,ry:48,
   d:'M142,270 Q154,294 152,342 Q148,378 134,398 Q120,406 104,398 Q100,378 100,338 Q102,290 112,270 Z',
   fascicles:[
     'M124,272 Q126,310 128,370',
     'M110,272 Q112,312 116,372',
     'M136,280 Q138,316 134,370',
   ]},
  /* Hip Flexors — inguinal crease area */
  {id:'hipflex-L',key:'hipflexors',label:'HIP FLEX',cx:80,cy:256,rx:10,ry:14,
   d:'M76,232 Q66,244 66,262 Q68,278 80,284 Q92,282 94,266 Q94,248 86,234 Z'},
  {id:'hipflex-R',key:'hipflexors',label:'HIP FLEX',cx:120,cy:256,rx:10,ry:14,
   d:'M124,232 Q134,244 134,262 Q132,278 120,284 Q108,282 106,266 Q106,248 114,234 Z'},
  /* Adductors — medial thigh */
  {id:'add-L',key:'adductors',label:'ADD',cx:88,cy:340,rx:8,ry:42,
   d:'M90,272 Q80,298 78,338 Q78,370 88,394 Q96,400 102,394 Q98,368 94,336 Q92,302 94,272 Z'},
  {id:'add-R',key:'adductors',label:'ADD',cx:112,cy:340,rx:8,ry:42,
   d:'M110,272 Q120,298 122,338 Q122,370 112,394 Q104,400 98,394 Q102,368 106,336 Q108,302 106,272 Z'},
  /* Serratus Anterior — lateral rib cage */
  {id:'serr-L',key:'serratus',label:'SERR',cx:56,cy:160,rx:8,ry:22,
   d:'M60,124 Q48,140 48,162 Q50,184 62,198 Q70,202 76,194 Q74,172 68,150 Q64,134 60,124 Z',
   fascicles:[
     // Finger-like slips
     'M58,128 Q52,144 50,164',
     'M60,136 Q54,154 52,176',
     'M62,148 Q56,166 58,186',
   ]},
  {id:'serr-R',key:'serratus',label:'SERR',cx:144,cy:160,rx:8,ry:22,
   d:'M140,124 Q152,140 152,162 Q150,184 138,198 Q130,202 124,194 Q126,172 132,150 Q136,134 140,124 Z',
   fascicles:[
     'M142,128 Q148,144 150,164',
     'M140,136 Q146,154 148,176',
     'M138,148 Q144,166 142,186',
   ]},
  /* Tibialis anterior — narrow shin blade */
  {id:'tib-L',key:'tibialis',label:'TIB',cx:74,cy:435,rx:10,ry:30,
   d:'M64,398 Q57,422 60,458 Q65,480 78,486 Q90,484 94,468 Q95,440 92,412 Q86,396 72,394 Z',
   fascicles:[
     'M72,396 Q68,424 70,464',
     'M80,398 Q78,428 78,464',
   ]},
  {id:'tib-R',key:'tibialis',label:'TIB',cx:126,cy:435,rx:10,ry:30,
   d:'M136,398 Q143,422 140,458 Q135,480 122,486 Q110,484 106,468 Q105,440 108,412 Q114,396 128,394 Z',
   fascicles:[
     'M128,396 Q132,424 130,464',
     'M120,398 Q122,428 122,464',
   ]},
  /* Intercostals — lateral lower chest */
  {id:'intcost-L',key:'intercostals',label:'INTCOST',cx:66,cy:174,rx:8,ry:22,
   d:'M66,142 Q58,158 58,176 Q58,198 64,210 Q72,214 78,208 Q80,188 80,168 Q80,150 74,140 Z',
   fascicles:[
     'M68,144 Q62,158 60,178',
     'M70,152 Q64,168 62,192',
     'M70,164 Q66,180 64,202',
   ]},
  {id:'intcost-R',key:'intercostals',label:'INTCOST',cx:134,cy:174,rx:8,ry:22,
   d:'M134,142 Q142,158 142,176 Q142,198 136,210 Q128,214 122,208 Q120,188 120,168 Q120,150 126,140 Z',
   fascicles:[
     'M132,144 Q138,158 140,178',
     'M130,152 Q136,168 138,192',
     'M130,164 Q134,180 136,202',
   ]},
  /* Hands — intrinsic palm muscles */
  {id:'hand-L',key:'hands',label:'HAND',cx:36,cy:304,rx:12,ry:14,
   d:'M48,286 Q34,288 22,298 Q19,312 28,322 Q40,328 52,320 Q56,306 55,292 Z'},
  {id:'hand-R',key:'hands',label:'HAND',cx:164,cy:304,rx:12,ry:14,
   d:'M152,286 Q166,288 178,298 Q181,312 172,322 Q160,328 148,320 Q144,306 145,292 Z'},
  /* Feet */
  {id:'foot-L',key:'feet',label:'FOOT',cx:73,cy:494,rx:14,ry:14,
   d:'M61,475 Q52,488 56,502 Q67,512 83,510 Q96,504 96,492 Q89,477 74,473 Z'},
  {id:'foot-R',key:'feet',label:'FOOT',cx:127,cy:494,rx:14,ry:14,
   d:'M139,475 Q148,488 144,502 Q133,512 117,510 Q104,504 104,492 Q111,477 126,473 Z'},
  /* Neck — SCM and anterior scalenes */
  {id:'neck-L',key:'neck',label:'NECK',cx:90,cy:70,rx:5,ry:8,
   d:'M92,58 Q85,62 83,70 Q84,78 93,79 L98,79 Q99,73 98,64 Z'},
  {id:'neck-R',key:'neck',label:'NECK',cx:110,cy:70,rx:5,ry:8,
   d:'M108,58 Q115,62 117,70 Q116,78 107,79 L102,79 Q101,73 102,64 Z'},
  /* Deep Core — TVA corset band */
  {id:'deepcore',key:'deepcore',label:'TVA',cx:100,cy:222,rx:18,ry:10,
   d:'M76,202 Q68,216 70,230 Q76,242 100,246 Q124,242 130,230 Q132,216 124,202 Q112,198 100,198 Q88,198 76,202 Z'},
  /* Peroneals — lateral lower leg */
  {id:'peron-L',key:'peroneals',label:'PERON',cx:90,cy:436,rx:6,ry:26,
   d:'M88,398 Q83,422 83,446 Q85,468 91,478 Q98,474 100,462 Q100,440 98,416 Q96,400 88,398 Z'},
  {id:'peron-R',key:'peroneals',label:'PERON',cx:110,cy:436,rx:6,ry:26,
   d:'M112,398 Q117,422 117,446 Q115,468 109,478 Q102,474 100,462 Q100,440 102,416 Q104,400 112,398 Z'},
];

/* BACK muscle regions — anatomically corrected paths */
const BACK = [
  /* Trapezius — true diamond shape spanning neck to mid-back */
  {id:'trap',key:'trapezius',label:'TRAP',cx:100,cy:118,
   d:'M100,70 Q88,74 76,80 Q62,86 56,94 Q52,102 56,112 Q62,124 76,132 Q90,140 100,142 Q110,140 124,132 Q138,124 144,112 Q148,102 144,94 Q138,86 124,80 Q112,74 100,70 Z',
   rx:24, ry:36,
   fascicles:[
     'M100,72 Q94,88 82,104 M100,72 Q106,88 118,104',  // upper trap fibres fan
     'M80,84 Q88,110 88,132 M120,84 Q112,110 112,132',  // mid trap diagonal
     'M70,100 Q82,118 90,140 M130,100 Q118,118 110,140', // lower trap
   ]},
  /* Rear deltoids — posterior shoulder cap */
  {id:'rdelt-L',key:'reardelts',label:'R.DELT',cx:40,cy:112,
   d:'M38,86 Q22,96 20,116 Q22,136 40,144 Q54,142 62,130 Q66,116 62,100 Q54,88 40,86 Z',
   rx:13, ry:19,
   fascicles:[
     'M44,90 Q34,108 34,128 M50,92 Q40,112 42,132',
   ]},
  {id:'rdelt-R',key:'reardelts',label:'R.DELT',cx:160,cy:112,
   d:'M162,86 Q178,96 180,116 Q178,136 160,144 Q146,142 138,130 Q134,116 138,100 Q146,88 162,86 Z',
   rx:13, ry:19,
   fascicles:[
     'M156,90 Q166,108 166,128 M150,92 Q160,112 158,132',
   ]},
  /* Triceps — three-headed posterior arm; lateral head visible along outer edge,
     long head runs down the centre, medial head at the distal inner arm */
  {id:'tri-L',key:'triceps',label:'TRI',cx:38,cy:166,
   d:'M24,138 Q14,158 14,182 Q18,204 38,212 Q56,210 64,192 Q68,172 60,146 Q50,132 36,134 Z',
   rx:18, ry:28,
   fascicles:[
     // Long head — central vertical
     'M36,136 Q38,162 38,196',
     // Lateral head — outer diagonal
     'M52,140 Q58,162 56,192',
     // Medial head — inner lower
     'M26,162 Q28,182 32,200',
   ]},
  {id:'tri-R',key:'triceps',label:'TRI',cx:162,cy:166,
   d:'M176,138 Q186,158 186,182 Q182,204 162,212 Q144,210 136,192 Q132,172 140,146 Q150,132 164,134 Z',
   rx:18, ry:28,
   fascicles:[
     'M164,136 Q162,162 162,196',
     'M148,140 Q142,162 144,192',
     'M174,162 Q172,182 168,200',
   ]},
  /* Lats — wide fan from rear delt down to iliac crest */
  {id:'lat-L',key:'lats',label:'LAT',cx:54,cy:172,
   d:'M40,108 Q28,132 30,174 Q32,214 50,238 Q60,248 72,240 Q76,212 74,176 Q72,140 62,112 Q52,104 40,108 Z',
   rx:16, ry:40,
   fascicles:[
     // Fan fibres converging toward axilla
     'M62,112 Q52,140 50,180',
     'M56,114 Q44,148 42,190',
     'M48,120 Q36,160 36,200',
     'M42,130 Q32,172 34,214',
   ]},
  {id:'lat-R',key:'lats',label:'LAT',cx:146,cy:172,
   d:'M160,108 Q172,132 170,174 Q168,214 150,238 Q140,248 128,240 Q124,212 126,176 Q128,140 138,112 Q148,104 160,108 Z',
   rx:16, ry:40,
   fascicles:[
     'M138,112 Q148,140 150,180',
     'M144,114 Q156,148 158,190',
     'M152,120 Q164,160 164,200',
     'M158,130 Q168,172 166,214',
   ]},
  /* Erector spinae — two columns flanking spine with inter-column groove */
  {id:'lback',key:'lowerback',label:'ERECTORS',cx:100,cy:200,
   d:'M82,148 Q72,174 72,208 Q74,242 86,258 Q92,266 100,266 Q108,266 114,258 Q126,242 128,208 Q128,174 118,148 Q112,142 100,140 Q88,142 82,148 Z',
   rx:22, ry:32,
   fascicles:[
     // Left erector column
     'M88,150 Q86,180 86,214 M84,156 Q82,186 82,220',
     // Right erector column
     'M112,150 Q114,180 114,214 M116,156 Q118,186 118,220',
     // Horizontal banding (segmental)
     'M86,168 Q100,165 114,168 M84,188 Q100,185 116,188 M84,208 Q100,205 116,208',
   ]},
  /* Rhomboids — between medial scapular borders and spine */
  {id:'rhomb-L',key:'rhomboids',label:'RHOMB',cx:82,cy:124,
   d:'M100,106 Q88,108 78,116 Q72,126 74,140 Q78,150 88,154 Q96,152 100,136 Q100,120 100,106 Z',
   rx:12, ry:16,
   fascicles:[
     'M96,110 Q84,120 78,138 M96,118 Q86,126 80,144',
   ]},
  {id:'rhomb-R',key:'rhomboids',label:'RHOMB',cx:118,cy:124,
   d:'M100,106 Q112,108 122,116 Q128,126 126,140 Q122,150 112,154 Q104,152 100,136 Q100,120 100,106 Z',
   rx:12, ry:16,
   fascicles:[
     'M104,110 Q116,120 122,138 M104,118 Q114,126 120,144',
   ]},
  /* Glutes — large rounded mass covering posterior hip.
     Gluteus medius peeks out superolaterally above the main mass */
  {id:'glut-L',key:'glutes',label:'GLUTE',cx:72,cy:308,
   d:'M50,264 Q38,288 42,322 Q48,356 72,368 Q94,370 104,348 Q106,320 98,286 Q90,262 72,258 Q58,260 50,264 Z',
   rx:24, ry:36,
   fascicles:[
     // Radiating fibres from PSIS toward femur
     'M60,270 Q68,300 70,340 M72,262 Q76,298 76,344',
     'M80,264 Q84,300 82,342 M88,270 Q90,302 88,338',
   ]},
  {id:'glut-R',key:'glutes',label:'GLUTE',cx:128,cy:308,
   d:'M150,264 Q162,288 158,322 Q152,356 128,368 Q106,370 96,348 Q94,320 102,286 Q110,262 128,258 Q142,260 150,264 Z',
   rx:24, ry:36,
   fascicles:[
     'M140,270 Q132,300 130,340 M128,262 Q124,298 124,344',
     'M120,264 Q116,300 118,342 M112,270 Q110,302 112,338',
   ]},
  /* Hamstrings — posterior thigh with visible medial/lateral separation:
     biceps femoris lateral, semimembranosus/semitendinosus medial */
  {id:'ham-L',key:'hamstrings',label:'HAM',cx:73,cy:398,
   d:'M54,358 Q44,384 48,420 Q54,448 76,454 Q98,452 104,432 Q106,404 102,372 Q96,348 76,352 Q62,354 54,358 Z',
   rx:20, ry:36,
   fascicles:[
     // Biceps femoris (lateral) — outer edge
     'M90,358 Q94,390 92,428',
     // Semitendinosus (medial)
     'M68,354 Q64,388 66,430',
     // Semimembranosus (deep medial)
     'M60,360 Q56,392 58,426',
   ]},
  {id:'ham-R',key:'hamstrings',label:'HAM',cx:127,cy:398,
   d:'M146,358 Q156,384 152,420 Q146,448 124,454 Q102,452 96,432 Q94,404 98,372 Q104,348 124,352 Q138,354 146,358 Z',
   rx:20, ry:36,
   fascicles:[
     'M110,358 Q106,390 108,428',
     'M132,354 Q136,388 134,430',
     'M140,360 Q144,392 142,426',
   ]},
  /* Calves — gastrocnemius two distinct heads meet at Achilles midline */
  {id:'calf-L',key:'calves',label:'CALF',cx:75,cy:462,
   d:'M56,448 Q48,468 52,488 Q60,510 80,514 Q98,512 103,492 Q105,466 100,444 Q92,430 76,432 Q64,436 56,448 Z',
   rx:18, ry:26,
   fascicles:[
     // Medial head runs slightly longer and wider
     'M66,436 Q62,462 64,490',
     // Lateral head
     'M84,434 Q88,462 86,490',
     // Diamond apex at Achilles
     'M74,490 Q76,500 78,508 M78,490 Q76,500 74,508',
   ]},
  {id:'calf-R',key:'calves',label:'CALF',cx:125,cy:462,
   d:'M144,448 Q152,468 148,488 Q140,510 120,514 Q102,512 97,492 Q95,466 100,444 Q108,430 124,432 Q136,436 144,448 Z',
   rx:18, ry:26,
   fascicles:[
     'M134,436 Q138,462 136,490',
     'M116,434 Q112,462 114,490',
     'M126,490 Q124,500 122,508 M122,490 Q124,500 126,508',
   ]},
  /* Rotator Cuff — infraspinatus covers lower scapular blade */
  {id:'rcuff-L',key:'rotatorcuff',label:'R.CUFF',cx:58,cy:130,
   d:'M48,108 Q38,122 40,140 Q44,154 60,158 Q74,154 78,140 Q76,122 66,108 Q58,104 48,108 Z',
   rx:14, ry:18},
  {id:'rcuff-R',key:'rotatorcuff',label:'R.CUFF',cx:142,cy:130,
   d:'M152,108 Q162,122 160,140 Q156,154 140,158 Q126,154 122,140 Q124,122 134,108 Q142,104 152,108 Z',
   rx:14, ry:18},
  /* Posterior forearms — extensor compartment (visible from back):
     extensor digitorum, extensor carpi radialis, brachioradialis upper portion */
  {id:'fore-bk-L',key:'forearms',label:'FORE',cx:35,cy:238,
   d:'M46,194 Q34,216 28,248 Q24,270 28,286 Q36,296 48,290 Q58,280 60,260 Q62,234 56,200 Q52,192 46,194 Z',
   rx:12, ry:38,
   fascicles:[
     // Extensor digitorum long sweep
     'M52,198 Q46,228 40,268',
     // Brachioradialis — lateral edge
     'M58,200 Q56,224 50,258',
     // Extensor carpi ulnaris — medial edge
     'M40,200 Q34,232 30,268',
   ]},
  {id:'fore-bk-R',key:'forearms',label:'FORE',cx:165,cy:238,
   d:'M154,194 Q166,216 172,248 Q176,270 172,286 Q164,296 152,290 Q142,280 140,260 Q138,234 144,200 Q148,192 154,194 Z',
   rx:12, ry:38,
   fascicles:[
     'M148,198 Q154,228 160,268',
     'M142,200 Q144,224 150,258',
     'M160,200 Q166,232 170,268',
   ]},
  /* Neck posterior — deep cervical muscles */
  {id:'neck-back',key:'neck',label:'NECK',cx:100,cy:68,
   d:'M91,58 Q84,64 84,73 Q86,81 100,82 Q114,81 116,73 Q116,64 109,58 Q104,54 100,54 Q96,54 91,58 Z',
   rx:8, ry:7},
];

const BODY_SIDE = [
  {tag:'ellipse',a:{cx:102,cy:38,rx:17,ry:25}},
  {tag:'path',d:'M94,65 Q88,78 91,92 Q83,115 86,170 Q88,222 96,248 Q88,256 88,270 Q93,284 100,287 Q106,284 112,270 Q112,256 104,248 Q112,220 114,170 Q117,115 109,92 Q112,78 106,65 Z'},
  {tag:'path',d:'M91,94 Q71,110 68,151 Q67,190 75,205 Q88,210 96,200 Q99,168 98,132 Q97,108 91,94 Z'},
  {tag:'path',d:'M75,205 Q61,232 64,270 Q68,292 83,300 Q94,295 94,280 Q90,240 88,211 Z'},
  {tag:'path',d:'M97,282 Q85,310 88,360 Q93,394 104,405 Q116,396 117,360 Q116,314 108,284 Z'},
  {tag:'path',d:'M104,405 Q95,432 97,470 Q101,493 113,498 Q124,490 123,466 Q121,430 116,405 Z'},
  {tag:'path',d:'M112,493 Q95,500 94,510 Q108,517 132,512 Q132,500 122,494 Z'},
];

const SIDE_BASE = [
  {id:'side-neck',key:'neck',label:'NECK',cx:101,cy:72,d:'M94,62 Q104,58 112,66 Q112,78 102,83 Q92,78 92,68 Z'},
  {id:'side-delt',key:'deltoids',label:'DELT',cx:86,cy:112,d:'M88,88 Q70,100 69,124 Q74,142 91,148 Q104,138 105,116 Q104,96 94,88 Z'},
  {id:'side-pec',key:'pectorals',label:'PEC',cx:104,cy:118,d:'M99,88 Q119,98 122,124 Q119,148 103,154 Q94,136 94,112 Q94,96 99,88 Z'},
  {id:'side-serr',key:'serratus',label:'SERR',cx:92,cy:159,d:'M90,126 Q80,146 82,176 Q86,198 96,207 Q103,196 101,171 Q98,144 94,128 Z'},
  {id:'side-lat',key:'lats',label:'LAT',cx:87,cy:174,d:'M84,116 Q70,144 72,184 Q76,222 90,240 Q101,232 101,198 Q99,156 93,120 Z'},
  {id:'side-obl',key:'obliques',label:'OBL',cx:101,cy:190,d:'M98,154 Q110,174 110,212 Q106,236 96,242 Q88,226 88,194 Q90,168 98,154 Z'},
  {id:'side-abs',key:'abs',label:'ABS',cx:110,cy:177,d:'M106,132 Q118,154 119,190 Q118,224 106,236 Q100,214 100,178 Q100,150 106,132 Z'},
  {id:'side-deepcore',key:'deepcore',label:'TVA',cx:105,cy:226,d:'M92,204 Q105,196 118,206 Q120,226 105,238 Q90,230 88,216 Z'},
  {id:'side-lback',key:'lowerback',label:'ERECT',cx:87,cy:196,d:'M82,140 Q72,170 74,212 Q78,244 94,252 Q98,220 96,180 Q94,152 88,140 Z'},
  {id:'side-bic',key:'biceps',label:'BIC',cx:76,cy:166,d:'M70,132 Q58,154 61,182 Q66,202 82,204 Q92,188 91,162 Q88,140 78,132 Z'},
  {id:'side-tri',key:'triceps',label:'TRI',cx:88,cy:168,d:'M82,132 Q96,148 96,180 Q92,202 78,206 Q82,184 82,158 Q80,142 82,132 Z'},
  {id:'side-fore',key:'forearms',label:'FORE',cx:74,cy:244,d:'M72,204 Q60,230 63,270 Q68,294 84,300 Q94,284 90,248 Q86,220 82,206 Z'},
  {id:'side-hand',key:'hands',label:'HAND',cx:82,cy:306,d:'M80,292 Q66,299 67,313 Q77,324 92,318 Q98,304 91,294 Z'},
  {id:'side-glute',key:'glutes',label:'GLUTE',cx:93,cy:299,d:'M92,260 Q72,282 75,320 Q82,350 102,356 Q118,340 116,306 Q111,274 102,262 Z'},
  {id:'side-hipflex',key:'hipflexors',label:'HIP',cx:108,cy:266,d:'M103,238 Q118,250 119,272 Q114,288 102,287 Q96,270 98,252 Z'},
  {id:'side-add',key:'adductors',label:'ADD',cx:102,cy:337,d:'M96,286 Q106,316 106,362 Q104,392 96,402 Q88,378 88,334 Q90,304 96,286 Z'},
  {id:'side-quad',key:'quadriceps',label:'QUAD',cx:112,cy:338,d:'M106,284 Q124,310 124,358 Q120,394 106,406 Q98,380 98,336 Q100,304 106,284 Z'},
  {id:'side-ham',key:'hamstrings',label:'HAM',cx:96,cy:373,d:'M90,336 Q80,366 84,404 Q90,432 105,438 Q112,416 110,382 Q106,350 98,336 Z'},
  {id:'side-tib',key:'tibialis',label:'TIB',cx:116,cy:444,d:'M112,402 Q123,430 122,466 Q119,492 110,498 Q104,474 105,438 Q106,414 112,402 Z'},
  {id:'side-calf',key:'calves',label:'CALF',cx:103,cy:455,d:'M99,404 Q88,432 91,470 Q96,496 110,502 Q120,482 118,450 Q116,420 108,404 Z'},
  {id:'side-peron',key:'peroneals',label:'PERON',cx:112,cy:452,d:'M110,404 Q118,430 117,462 Q115,486 108,494 Q104,468 105,436 Q106,414 110,404 Z'},
  {id:'side-foot',key:'feet',label:'FOOT',cx:118,cy:504,d:'M110,490 Q94,500 94,510 Q108,518 134,512 Q134,500 122,492 Z'},
];

/* ── Public data export ───────────────────────────────────────
   Lets other modules (e.g. metrics.js) reuse the exact same body
   silhouette + muscle paths without duplicating the geometry.
   Read-only snapshot — consumers should never mutate these. */
window.GRND_ANATOMY = {
  viewBox: '0 0 200 520',
  BODY,            // silhouette paths
  FRONT,           // front muscle regions {id,key,cx,cy,d,...}
  BACK,            // back muscle regions
  names: Object.fromEntries(Object.keys(MUSCLES).map(k => [k, MUSCLES[k].name || k])),
};

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
const boneRegionLayer  = document.getElementById('boneRegionLayer');
const boneLabelLayer   = document.getElementById('boneLabelLayer');
const tooltip        = document.getElementById('tooltip');
const ttName         = document.getElementById('ttName');

// Info panel element cache — avoids repeated getElementById on every selection
const infoIdle       = document.getElementById('infoIdle');
const infoContent    = document.getElementById('infoContent');
const infoPanel      = document.getElementById('infoPanel');
const stickyHdr      = document.getElementById('stickyHdr');
const stickyNameEl   = document.getElementById('stickyName');
const stickySubNameEl= document.getElementById('stickySubName');
const subInfoBanner  = document.getElementById('subInfoBanner');
const subGroupLbl    = document.getElementById('subGroupLbl');
const subGroupCount  = document.getElementById('subGroupCount');
const subHoverName   = document.getElementById('subHoverName');
const subHoverDesc   = document.getElementById('subHoverDesc');
const subLegend      = document.getElementById('subLegend');
const iRegionEl      = document.getElementById('iRegion');
const iTypeEl        = document.getElementById('iType');
const iNameEl        = document.getElementById('iName');
const iSciEl         = document.getElementById('iSci');
const iDescEl        = document.getElementById('iDesc');
const iFuncEl        = document.getElementById('iFunc');
const iOriginEl      = document.getElementById('iOrigin');
const iInsertEl      = document.getElementById('iInsert');
const iTagsEl        = document.getElementById('iTags');
const iFiberBadge    = document.getElementById('iFiberBadge');
const iFiberWrap     = document.getElementById('iFiberWrap');
const iFiberCard     = document.getElementById('iFiberCard');
const iSynWrap       = document.getElementById('iSynWrap');
const iSynChips      = document.getElementById('iSynChips');
const iAntWrap       = document.getElementById('iAntWrap');
const iAntChips      = document.getElementById('iAntChips');
const iInjWrap       = document.getElementById('iInjWrap');
const iInjCards      = document.getElementById('iInjCards');
const iStrWrap       = document.getElementById('iStrWrap');
const iStrDiv        = document.getElementById('iStrDivider');
const iStrCards      = document.getElementById('iStrCards');
const sidePicker     = document.getElementById('sidePicker');
const sideAllBtn     = document.getElementById('sideAll');
const sideLBtn       = document.getElementById('sideL');
const sideRBtn       = document.getElementById('sideR');
const boneInfoContent= document.getElementById('boneInfoContent');
const bRegionEl      = document.getElementById('bRegion');
const bBoneTypeEl    = document.getElementById('bBoneType');
const bNameEl        = document.getElementById('bName');
const bSciEl         = document.getElementById('bSci');
const bDescEl        = document.getElementById('bDesc');
const bFuncEl        = document.getElementById('bFunc');
const bFactEl        = document.getElementById('bFact');
const bJointsEl      = document.getElementById('bJoints');
const bInjCards      = document.getElementById('bInjCards');
const bMuscleWrap    = document.getElementById('bMuscleWrap');
const bMuscleChips   = document.getElementById('bMuscleChips');
const tendonLayer      = document.getElementById('tendonLayer');
const tendonLabelLayer = document.getElementById('tendonLabelLayer');
const tendonInfoContent= document.getElementById('tendonInfoContent');
const tRegionEl        = document.getElementById('tRegion');
const tTendonTypeEl    = document.getElementById('tTendonType');
const tNameEl          = document.getElementById('tName');
const tSciEl           = document.getElementById('tSci');
const tOriginInsEl     = document.getElementById('tOriginIns');
const tDescEl          = document.getElementById('tDesc');
const tFuncEl          = document.getElementById('tFunc');
const tFactEl          = document.getElementById('tFact');
const tInjCards        = document.getElementById('tInjCards');
const tMuscleWrap      = document.getElementById('tMuscleWrap');
const tMuscleChips     = document.getElementById('tMuscleChips');
const tBoneWrap        = document.getElementById('tBoneWrap');
const tBoneChips       = document.getElementById('tBoneChips');
const nerveLayer       = document.getElementById('nerveLayer');
const nerveLabelLayer  = document.getElementById('nerveLabelLayer');
const nerveInfoContent = document.getElementById('nerveInfoContent');
const nRegionEl        = document.getElementById('nRegion');
const nNerveTypeEl     = document.getElementById('nNerveType');
const nNameEl          = document.getElementById('nName');
const nSciEl           = document.getElementById('nSci');
const nRootsCourseEl   = document.getElementById('nRootsCourse');
const nDescEl          = document.getElementById('nDesc');
const nFuncEl          = document.getElementById('nFunc');
const nSensoryEl       = document.getElementById('nSensory');
const nSensoryWrap     = document.getElementById('nSensoryWrap');
const nFactEl          = document.getElementById('nFact');
const nInjCards        = document.getElementById('nInjCards');
const nMuscleWrap      = document.getElementById('nMuscleWrap');
const nMuscleChips     = document.getElementById('nMuscleChips');
const zoomOutBtn     = document.getElementById('zoomOutBtn');

let currentView    = 'front';
let selectedKey    = null;
let selectedSubEl  = null;   // currently tapped sub-muscle element
let isZoomed       = false;
let isDetailMode   = false;
let musclesVisible = true;
let bonesVisible   = false;
let sideFilter     = 'both';
let currentSideView = 'left';
let vbRaf          = null;
let selectedBoneKey = null;
let tendonsVisible  = false;
let selectedTendonKey = null;
let nervesVisible   = false;
let selectedNerveKey = null;
let currentVB      = {x:0,y:0,w:200,h:520};
const isMobile = navigator.maxTouchPoints > 0;
const svgWrap  = document.getElementById('svgWrap');

// Clamp so the body is always at least MARGIN SVG-units visible in each axis
function clampPan() {
  const MARGIN = 30;
  const bMinX = 19, bMaxX = 181, bMinY = 0, bMaxY = 520;
  currentVB.x = Math.min(Math.max(currentVB.x, bMinX - currentVB.w + MARGIN), bMaxX - MARGIN);
  currentVB.y = Math.min(Math.max(currentVB.y, bMinY - currentVB.h + MARGIN), bMaxY - MARGIN);
}

/* ── TOUCH STATE ── */
let touchPinching  = false;
let touchStartDist = 0;
let touchStartVB   = null;
let touchStartMid  = null;
let touchStartRect = null;
let panStart       = null;
let panStartVB     = null;
let panStartRect   = null;
let panMoved       = false;
let ignoreNextClick = false;

/* ══════════════════════════════════════════════════════
   SVG BUILDER
   ══════════════════════════════════════════════════════ */
function mkEl(tag, attrs) {
  const e = document.createElementNS(NS, tag);
  if(attrs) for(const[k,v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}

function mirrorPath(path) {
  let command = '';
  let coordIndex = 0;
  return path.replace(/[A-Za-z]|-?\d+(?:\.\d+)?/g, function(token) {
    if(/[A-Za-z]/.test(token)) {
      command = token;
      coordIndex = 0;
      return token;
    }
    const value = parseFloat(token);
    const isX = command.toUpperCase() === 'H' || (command.toUpperCase() !== 'V' && coordIndex % 2 === 0);
    coordIndex++;
    if(!isX) return token;
    return String(Math.round((200 - value) * 100) / 100);
  });
}

function mirrorSideItem(item) {
  return {
    ...item,
    id: item.id.replace(/-L$/, '-R'),
    cx: 200 - item.cx,
    d: mirrorPath(item.d),
  };
}

function getSideMuscles() {
  const base = SIDE_BASE.map(item => ({...item, id: item.id + '-L'}));
  return currentSideView === 'left' ? base : base.map(mirrorSideItem);
}

function buildBody() {
  bodyLayer.innerHTML = '';
  const source = currentView === 'side' ? BODY_SIDE : BODY;
  source.forEach(p => {
    const a = {...(p.a||{}), class:'body-base'};
    if(currentView === 'side' && currentSideView === 'right' && a.cx) a.cx = 200 - Number(a.cx);
    if(p.d) a.d = p.d;
    if(currentView === 'side' && currentSideView === 'right' && p.d) a.d = mirrorPath(p.d);
    bodyLayer.appendChild(mkEl(p.tag||'path', a));
  });
}

function buildMuscles(muscles) {
  muscleLayer.innerHTML = '';
  labelLayer.innerHTML  = '';

  // ── Build per-muscle radial gradients for 3-D depth ──────────
  let defs = svg.querySelector('defs');
  if(!defs) { defs = mkEl('defs', {}); svg.prepend(defs); }
  const _isReal = document.documentElement.dataset.anatomyReal === '1';
  // In lite mode the depth overlays are normally skipped — but realistic mode
  // needs them for the volumetric belly look, so keep them whenever real is on.
  const _isLite = document.documentElement.dataset.anatomyLite === '1' && !_isReal;

  // First path per muscle key gets tabindex="0"; bilateral mirrors get -1
  const _firstOfKey = new Set();

  muscles.forEach(m => {
    // Radial gradient: bright highlight offset toward top-left, dark rim
    const gradId  = `mg_${m.id}`;
    const shadId  = `mgs_${m.id}`;
    defs.querySelectorAll(`#${gradId},#${shadId}`).forEach(e => e.remove());

    if(!_isLite) {
    // Compute highlight centre ~25% up and left from muscle centre
    const hx = m.cx - (m.cx > 100 ? 2 : -2);
    const hy = m.cy - 4;

    const grad = mkEl('radialGradient', {
      id: gradId, cx: hx, cy: hy,
      r: Math.max(m.rx || 20, m.ry || 30) * 1.6,
      gradientUnits: 'userSpaceOnUse',
    });
    // Subtle inner highlight, fades to the CSS variable colour
    grad.innerHTML = `
      <stop offset="0%"   stop-color="rgba(255,130,140,0.22)"/>
      <stop offset="35%"  stop-color="rgba(205,52,65,0.08)"/>
      <stop offset="100%" stop-color="rgba(145,30,45,0.18)"/>
    `;
    defs.appendChild(grad);

    // Depth shadow gradient centred below muscle centre
    const shad = mkEl('radialGradient', {
      id: shadId, cx: m.cx, cy: m.cy + (m.ry || 20) * 0.4,
      r: Math.max(m.rx || 20, m.ry || 30) * 1.0,
      gradientUnits: 'userSpaceOnUse',
    });
    shad.innerHTML = `
      <stop offset="0%"   stop-color="rgba(0,0,0,0)"/>
      <stop offset="70%"  stop-color="rgba(0,0,0,0.12)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.26)"/>
    `;
    defs.appendChild(shad);
    } // end !_isLite

    // Base muscle path
    const _isFirstPath = !_firstOfKey.has(m.key);
    if(_isFirstPath) _firstOfKey.add(m.key);
    const _muscleName = (MUSCLES[m.key] && MUSCLES[m.key].name) ? MUSCLES[m.key].name : m.key;
    const path = mkEl('path', {
      d: m.d, class: 'muscle-path',
      'data-key': m.key, 'data-id': m.id,
      role: 'button',
      'aria-label': _muscleName,
      'aria-pressed': 'false',
      tabindex: _isFirstPath ? '0' : '-1',
    });
    path.addEventListener('mouseenter', e => onEnter(e, m));
    path.addEventListener('mouseleave', ()  => onLeave(m));
    path.addEventListener('mousemove',  e => onMove(e));
    path.addEventListener('click',      e => { e.stopPropagation(); onClick(m); });
    // Keyboard: Enter/Space activates; focus mirrors hover highlight
    path.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onClick(m); }
    });
    path.addEventListener('focus', () => {
      if(isDetailMode || isMobile) return;
      getSiblings(m.key).forEach(p => p.classList.add('hovered'));
      getSiblingLabels(m.key).forEach(l => l.classList.add('label-active'));
      const md = MUSCLES[m.key];
      ttName.textContent = md ? md.name : m.key;
      // Position tooltip near the SVG wrapper top-right for keyboard users
      const wr = svgWrap.getBoundingClientRect();
      tooltip.style.left = (wr.right - 120) + 'px';
      tooltip.style.top  = (wr.top  + 8)   + 'px';
      tooltip.classList.add('show');
    });
    path.addEventListener('blur', () => {
      if(selectedKey !== m.key) {
        getSiblings(m.key).forEach(p => p.classList.remove('hovered'));
        getSiblingLabels(m.key).forEach(l => l.classList.remove('label-active'));
      }
      tooltip.classList.remove('show');
    });
    muscleLayer.appendChild(path);

    // Highlight overlay (pointer-events:none so clicks pass through)
    if(!_isLite) {
    const hiPath = mkEl('path', {
      d: m.d,
      class: 'mus-hi',
      fill: `url(#${gradId})`,
      'pointer-events': 'none',
    });
    muscleLayer.appendChild(hiPath);

    // Shadow overlay
    const shadPath = mkEl('path', {
      d: m.d,
      class: 'mus-shadow',
      fill: `url(#${shadId})`,
      'pointer-events': 'none',
    });
    muscleLayer.appendChild(shadPath);
    } // end !_isLite

    // Fascicle lines — subtle internal detail for larger muscles
    if(m.fascicles) {
      m.fascicles.forEach(fd => {
        const fl = mkEl('path', {
          d: fd,
          class: 'fascicle',
          fill: 'none',
          stroke: 'rgba(255,100,110,0.13)',
          'stroke-width': '0.45',
          'stroke-linecap': 'round',
          'pointer-events': 'none',
        });
        muscleLayer.appendChild(fl);
      });
    }

    const lbl = mkEl('text', {
      x: m.cx, y: m.cy, class: 'muscle-label',
      'data-id': m.id, 'data-key': m.key,
    });
    lbl.textContent = m.label || '';
    labelLayer.appendChild(lbl);
  });

  // Cache for _applyToSVG (avoids repeated querySelectorAll on every chip click)
  window._cachedMusclePaths  = [...muscleLayer.querySelectorAll('.muscle-path')];
  window._cachedMuscleLabels = [...labelLayer.querySelectorAll('text')];

  // Re-apply any active advanced filters to the freshly-built muscle paths
  if(typeof window._reapplyAdvancedFilter === 'function') {
    requestAnimationFrame(window._reapplyAdvancedFilter);
  }
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
  // Rebuild bone region hit targets whenever skeleton is rebuilt
  buildBoneRegions(currentView === 'back' ? BONE_REGIONS_BACK : BONE_REGIONS_FRONT);
}

function buildBoneRegions(regions) {
  if(!boneRegionLayer || !boneLabelLayer) return;
  boneRegionLayer.innerHTML = '';
  boneLabelLayer.innerHTML  = '';
  boneRegionLayer.style.display = bonesVisible ? '' : 'none';
  boneLabelLayer.style.display  = bonesVisible ? '' : 'none';

  regions.forEach(r => {
    // Hit path
    const el = mkEl('path', {
      d: r.d,
      class: 'bone-region-path',
      'data-bonekey': r.key,
      'data-boneid':  r.id,
    });
    el.addEventListener('mouseenter', () => onBoneEnter(r));
    el.addEventListener('mouseleave', () => onBoneLeave(r));
    el.addEventListener('mousemove',  e  => onMove(e));
    el.addEventListener('click',      e  => { e.stopPropagation(); onBoneClick(r); });
    el.addEventListener('touchend',   e  => {
      if(touchPinching || panMoved) return;
      e.preventDefault(); e.stopPropagation();
      _haptic(6);
      onBoneClick(r);
    }, {passive:false});
    boneRegionLayer.appendChild(el);

    // Label
    const lbl = mkEl('text', {
      x: r.cx, y: r.cy,
      class: 'bone-label',
      'data-boneid':  r.id,
      'data-bonekey': r.key,
    });
    lbl.textContent = r.label;
    boneLabelLayer.appendChild(lbl);
  });
}


/* ══════════════════════════════════════════════════════
   TENDON BUILDER
   ══════════════════════════════════════════════════════ */
// Build a fibrous tendon cord (rounded band + internal striations) from a
// parametric region, or pass through a custom `d`/`fibers` for special shapes.
// Build one tapered fibrous cord between two points — a rounded band plus
// internal striations whose count scales with the cord's own length, so a
// short stubby cord and a long thin one don't read as the same object.
function _tendonCord(x1, y1, x2, y2, w1, w2) {
  const f = v => Math.round(v * 10) / 10;
  const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;   // axis direction
  const nx = -uy, ny = ux;              // unit normal
  const P = (x, y) => `${f(x)},${f(y)}`;
  // side rails
  const a1 = P(x1 + nx*w1, y1 + ny*w1), a2 = P(x1 - nx*w1, y1 - ny*w1);
  const b1 = P(x2 + nx*w2, y2 + ny*w2), b2 = P(x2 - nx*w2, y2 - ny*w2);
  // rounded end caps (control points extend past each tip along the axis)
  const capE = P(x2 + ux*w2*1.5, y2 + uy*w2*1.5);
  const capS = P(x1 - ux*w1*1.5, y1 - uy*w1*1.5);
  const d = `M${a1} L${b1} Q${capE} ${b2} L${a2} Q${capS} ${a1} Z`;
  // fibre striations parallel to the axis — more on long/thick cords, fewer
  // on short/thin ones, so each individual strand reads at its own scale
  const offs = len > 26 ? [-0.5, 0, 0.5] : len > 12 ? [-0.4, 0.4] : [0];
  const fibers = offs.map(o =>
    `M${P(x1 + nx*w1*o, y1 + ny*w1*o)} L${P(x2 + nx*w2*o, y2 + ny*w2*o)}`);
  return { d, fibers, mx:(x1+x2)/2, my:(y1+y2)/2 };
}

// A tendon "region" renders as one or more cords sharing the same key/id —
// click/hover/zoom all operate on the full group (see getAllTendonElsByKey
// etc.), so a multi-strand tendon still behaves as a single logical tendon
// even though it's drawn as several individually-sized strands.
function _tendonGeo(r) {
  const f = v => Math.round(v * 10) / 10;

  // Custom freeform path (rotator cuff arc, plantar fascia fan, etc.)
  if(r.d) {
    const mx = r.cx != null ? r.cx : 100, my = r.cy != null ? r.cy : 100;
    return { cords:[{ d:r.d, fibers:r.fibers || [] }],
             lx:(r.lx != null ? r.lx : mx), ly:(r.ly != null ? r.ly : my) };
  }

  // Multiple individual strands fanning from one tendon (e.g. the four
  // finger flexor/extensor tendons, or paired peroneus longus/brevis) —
  // each strand gets its own length/width so they look like real, separate
  // cords rather than duplicates of one shape.
  if(r.strands) {
    const cords = r.strands.map(s => {
      const c = _tendonCord(s.x1, s.y1, s.x2, s.y2,
                             s.w1 != null ? s.w1 : 1.6,
                             s.w2 != null ? s.w2 : 0.9);
      return { d:c.d, fibers:c.fibers, mx:c.mx, my:c.my };
    });
    let li = r.strands.findIndex(s => s.label);
    if(li < 0) li = Math.floor(cords.length / 2);
    const lm = cords[li];
    const side = lm.mx < 100 ? -1 : 1;
    return { cords, lx:f(lm.mx + side*8), ly:f(lm.my) };
  }

  // Single linear cord (the common case).
  const w1 = r.w1 != null ? r.w1 : 2.3;
  const w2 = r.w2 != null ? r.w2 : 1.4;
  const c = _tendonCord(r.x1, r.y1, r.x2, r.y2, w1, w2);
  const side = c.mx < 100 ? -1 : 1;
  return { cords:[{ d:c.d, fibers:c.fibers }], lx:f(c.mx + side*8), ly:f(c.my) };
}

function buildTendons(regions) {
  if(!tendonLayer || !tendonLabelLayer) return;
  tendonLayer.innerHTML      = '';
  tendonLabelLayer.innerHTML = '';
  tendonLayer.style.display      = tendonsVisible ? '' : 'none';
  tendonLabelLayer.style.display = tendonsVisible ? '' : 'none';

  regions.forEach(r => {
    const geo = _tendonGeo(r);

    geo.cords.forEach(cord => {
      const el = mkEl('path', {
        d: cord.d,
        class: 'tendon-path',
        'data-tendonkey': r.key,
        'data-tendonid':  r.id,
      });
      el.addEventListener('mouseenter', () => onTendonEnter(r));
      el.addEventListener('mouseleave', () => onTendonLeave(r));
      el.addEventListener('mousemove',  e  => onMove(e));
      el.addEventListener('click',      e  => { e.stopPropagation(); onTendonClick(r); });
      el.addEventListener('touchend',   e  => {
        if(touchPinching || panMoved) return;
        e.preventDefault(); e.stopPropagation();
        _haptic(6);
        onTendonClick(r);
      }, {passive:false});
      tendonLayer.appendChild(el);

      // fibre striations sit on top (decorative, never the pointer target)
      cord.fibers.forEach(fd => {
        tendonLayer.appendChild(mkEl('path', {
          d: fd, class:'tendon-fiber', 'data-tendonkey': r.key,
        }));
      });
    });

    const lbl = mkEl('text', {
      x: geo.lx, y: geo.ly,
      class: 'tendon-label',
      'data-tendonid':  r.id,
      'data-tendonkey': r.key,
    });
    lbl.textContent = r.label;
    tendonLabelLayer.appendChild(lbl);
  });
}

/* ══════════════════════════════════════════════════════
   NERVE BUILDER — reuses the parametric cord geometry from
   _tendonGeo() (strands / single cord / custom d all supported),
   but renders into the nerve layers with nerve styling.
   ══════════════════════════════════════════════════════ */
function buildNerves(regions) {
  if(!nerveLayer || !nerveLabelLayer) return;
  nerveLayer.innerHTML      = '';
  nerveLabelLayer.innerHTML = '';
  nerveLayer.style.display      = nervesVisible ? '' : 'none';
  nerveLabelLayer.style.display = nervesVisible ? '' : 'none';

  regions.forEach(r => {
    const geo = _tendonGeo(r);

    geo.cords.forEach(cord => {
      const el = mkEl('path', {
        d: cord.d,
        class: 'nerve-path',
        'data-nervekey': r.key,
        'data-nerveid':  r.id,
      });
      el.addEventListener('mouseenter', () => onNerveEnter(r));
      el.addEventListener('mouseleave', () => onNerveLeave(r));
      el.addEventListener('mousemove',  e  => onMove(e));
      el.addEventListener('click',      e  => { e.stopPropagation(); onNerveClick(r); });
      el.addEventListener('touchend',   e  => {
        if(touchPinching || panMoved) return;
        e.preventDefault(); e.stopPropagation();
        _haptic(6);
        onNerveClick(r);
      }, {passive:false});
      nerveLayer.appendChild(el);

      // axon striations sit on top (decorative, never the pointer target)
      cord.fibers.forEach(fd => {
        nerveLayer.appendChild(mkEl('path', {
          d: fd, class:'nerve-fiber', 'data-nervekey': r.key,
        }));
      });
    });

    const lbl = mkEl('text', {
      x: geo.lx, y: geo.ly,
      class: 'nerve-label',
      'data-nerveid':  r.id,
      'data-nervekey': r.key,
    });
    lbl.textContent = r.label;
    nerveLabelLayer.appendChild(lbl);
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
  sidePicker.style.display = (selectedKey && isBilateral(selectedKey)) ? 'flex' : 'none';
  sideAllBtn.classList.toggle('active', sideFilter === 'both');
  sideLBtn.classList.toggle('active',   sideFilter === 'L');
  sideRBtn.classList.toggle('active',   sideFilter === 'R');
}

function setSide(side) {
  if(!selectedKey) return;
  sideFilter = side;
  updateSidePicker();

  // Re-apply muscle highlight classes
  muscleLayer.querySelectorAll('.muscle-path')
    .forEach(p => p.classList.remove('selected','hovered','parent-dimmed'));
  labelLayer.querySelectorAll('text')
    .forEach(l => l.classList.remove('label-active','dimmed-lbl'));

  applySelectionHighlight(selectedKey);
  zoomTo(selectedKey);

  // Rebuild detail view for the new side
  if(isDetailMode) {
    detailLayer.innerHTML = '';
    detailLabelLayer.innerHTML = '';
    isDetailMode = false;
    subInfoBanner.classList.remove('visible');
    setTimeout(() => showDetail(selectedKey), 60);
  }
}

function onEnter(e, m) {
  if(isDetailMode) return;
  if(isMobile) return;  // touch: mouseleave never fires reliably → tooltip gets stuck
  if(isZoomed && selectedKey !== m.key) return;
  getSiblings(m.key).forEach(p => p.classList.add('hovered'));
  getSiblingLabels(m.key).forEach(l => l.classList.add('label-active'));
  const d = MUSCLES[m.key];
  ttName.textContent = d ? d.name : m.key;
  tooltip.classList.add('show');
}

function onLeave(m) {
  if(isDetailMode) return;
  getSiblings(m.key).forEach(p => { if(selectedKey !== m.key) p.classList.remove('hovered'); });
  getSiblingLabels(m.key).forEach(l => { if(selectedKey !== m.key) l.classList.remove('label-active'); });
  tooltip.classList.remove('show');
}

let _tooltipRaf = null;
function onMove(e) {
  if(_tooltipRaf) return;
  const cx = e.clientX, cy = e.clientY;
  _tooltipRaf = requestAnimationFrame(() => {
    tooltip.style.left = (cx + 16) + 'px';
    tooltip.style.top  = (cy - 10) + 'px';
    _tooltipRaf = null;
  });
}

function onClick(m) {
  if(selectedKey === m.key && isZoomed) { clearSelection(); return; }
  selectMuscle(m);
}

function selectMuscle(m) {
  _haptic(6);
  // Reset visual state WITHOUT touching zoom (avoids the jarring zoom-out)
  isDetailMode  = false;
  sideFilter    = 'both';
  selectedSubEl = null;
  stickySubNameEl.textContent = '';

  muscleLayer.querySelectorAll('.muscle-path')
    .forEach(p => p.classList.remove('selected','hovered','parent-dimmed'));
  labelLayer.querySelectorAll('text')
    .forEach(l => l.classList.remove('label-active','dimmed-lbl'));
  detailLayer.innerHTML = '';
  detailLabelLayer.innerHTML = '';
  subInfoBanner.classList.remove('visible');
  subGroupLbl.textContent   = '';
  subGroupCount.textContent = '';
  subHoverName.textContent = '';
  subHoverDesc.textContent = '';
  subLegend.innerHTML = '';

  selectedKey = m.key;

  applySelectionHighlight(m.key);
  getSiblings(m.key).forEach(p => p.setAttribute('aria-pressed', 'true'));
  updateSidePicker();

  // Animate directly to the new muscle — no intermediate zoom-out
  zoomTo(m.key);
  showInfo(m.key);

  // After zoom animation starts, render sub-muscles
  setTimeout(() => showDetail(m.key), 280);
}

function clearSelection() {
  if(selectedBoneKey) clearBoneSelection();
  selectedKey = null;
  sideFilter  = 'both';
  _clearRelHighlight();
  sidePicker.style.display = 'none';
  muscleLayer.querySelectorAll('.muscle-path').forEach(p => {
    p.classList.remove('selected','hovered','parent-dimmed');
    p.setAttribute('aria-pressed', 'false');
  });
  labelLayer.querySelectorAll('text').forEach(l => l.classList.remove('label-active','dimmed-lbl'));
  hideDetail();
  zoomReset();
  hideInfo();
}

/* ── Haptic feedback (Android vibrate; iOS partial via AudioContext) ── */
let _audioCtx = null;
function _haptic(ms) {
  try {
    if(navigator.vibrate) { navigator.vibrate(ms); return; }
    if(!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = _audioCtx.createOscillator();
    const gain = _audioCtx.createGain();
    osc.connect(gain); gain.connect(_audioCtx.destination);
    osc.frequency.value = 440;
    gain.gain.setValueAtTime(0.001, _audioCtx.currentTime);
    osc.start(); osc.stop(_audioCtx.currentTime + 0.01);
  } catch(e) {}
}

/* ══════════════════════════════════════════════════════
   SUB-MUSCLE DETAIL VIEW
   ══════════════════════════════════════════════════════ */
function showDetail(key) {
  const subs = SUBMUSCLES[key];
  if(!subs) return;

  const detailView = currentView === 'side' ? 'both' : currentView;
  const filtered = subs.filter(s => (detailView === 'both' || s.view === detailView || s.view === 'both') && isSideMatch(s.id, sideFilter));
  if(!filtered.length) return;

  isDetailMode = true;

  // Dim parent muscles
  getSiblings(key).forEach(p => p.classList.add('parent-dimmed'));

  // Dim all labels
  labelLayer.querySelectorAll('text').forEach(l => l.classList.add('dimmed-lbl'));

  detailLayer.innerHTML = '';
  detailLabelLayer.innerHTML = '';

  let defs = svg.querySelector('defs');
  if(!defs) { defs = mkEl('defs', {}); svg.prepend(defs); }

  // Build sub-muscle legend chips
  const legend = document.getElementById('subLegend');
  legend.innerHTML = '';
  const seenNames = new Set();

  // ── Group header ──────────────────────────────────────────
  const muscleName = (MUSCLES[key] && MUSCLES[key].name) ? MUSCLES[key].name.toUpperCase() : key.toUpperCase();
  subGroupLbl.textContent = muscleName + ' — SUBGROUPS';

  // Pre-count unique sub-muscle names for the badge
  filtered.forEach(s => seenNames.add(s.name));
  const uniqueCount = seenNames.size;
  subGroupCount.textContent =
    uniqueCount + (uniqueCount === 1 ? ' HEAD' : ' HEADS');
  seenNames.clear(); // reset for the chip-building pass below

  filtered.forEach((s, idx) => {
    const pal = SUB_PALETTE[s.colorIdx % SUB_PALETTE.length];

    // Build legend chip (once per unique sub-muscle name)
    if(!seenNames.has(s.name)) {
      seenNames.add(s.name);
      const chip = document.createElement('div');
      chip.className = 'sub-legend-chip';
      chip.style.setProperty('--lc', pal.base);
      chip.dataset.chipname = s.name;
      chip.innerHTML = `<span class="sub-legend-swatch" style="background:${pal.base};box-shadow:0 0 0 1px ${pal.base}55"></span>${s.name}`;
      // Click → select the first matching sub-muscle in the SVG
      chip.addEventListener('click', () => {
        const svgEl = [...detailLayer.querySelectorAll('.sub-muscle')]
          .find(e => e.getAttribute('data-subname') === s.name);
        if(svgEl) onSubClick(s, pal, svgEl);
      });
      subLegend.appendChild(chip);
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
        style: `--sc:${pal.base}`,
      });
      shadEl = mkEl('path', {
        d: s.d,
        fill: `url(#${shadId})`,
        'pointer-events': 'none',
        style: '',
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
        style: `--sc:${pal.base}`,
      });
      shadEl = mkEl('ellipse', {
        cx: s.cx, cy: s.cy + s.ry*0.05, rx: s.rx*0.9, ry: s.ry*0.7,
        fill: `url(#${shadId})`,
        'pointer-events': 'none',
        transform,
        style: '',
      });
    }

    el.addEventListener('mouseenter', () => onSubEnter(s, pal));
    el.addEventListener('mouseleave', () => onSubLeave());
    el.addEventListener('mousemove',  e  => onMove(e));
    el.addEventListener('click',      e  => { e.stopPropagation(); onSubClick(s, pal, el); });
    el.addEventListener('touchend',   e  => {
      if(touchPinching || panMoved) return;
      e.preventDefault(); e.stopPropagation();
      _haptic(8);
      onSubClick(s, pal, el);
    }, {passive: false});

    detailLayer.appendChild(el);
    detailLayer.appendChild(shadEl);

    // ── Invisible hit-target ellipse — ensures 44px minimum touch area ──
    const MIN_HIT_PX = 22; // SVG units; at ~2× scale on mobile ≈ 44 CSS px
    if(s.rx < MIN_HIT_PX || s.ry < MIN_HIT_PX) {
      const hitEl = mkEl('ellipse', {
        cx: s.cx, cy: s.cy,
        rx: Math.max(s.rx, MIN_HIT_PX),
        ry: Math.max(s.ry, MIN_HIT_PX),
        transform,
        class: 'sub-hit',
      });
      hitEl.addEventListener('click',    e => { e.stopPropagation(); onSubClick(s, pal, el); });
      hitEl.addEventListener('touchend', e => {
        if(touchPinching || panMoved) return;
        e.preventDefault(); e.stopPropagation();
        _haptic(8);
        onSubClick(s, pal, el);
      }, {passive: false});
      detailLayer.appendChild(hitEl);
    }

    // Staggered fade-in via CSS animation-delay
    const delay = idx * 55 + 40;
    el.style.setProperty('--di', `${delay}ms`);
    shadEl.style.setProperty('--di', `${delay}ms`);
    shadEl.style.animation = `subFadeIn 0.38s ease ${delay}ms both`;

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
      style: `fill:${pal.light}`,
    });
    lbl.style.setProperty('--di', `${delay}ms`);
    lbl.textContent = abbr;
    detailLabelLayer.appendChild(lbl);
  });

  // Show the banner
  document.getElementById('subInfoBanner').classList.add('visible');
  document.getElementById('subHoverName').textContent = isMobile ? 'TAP A HEAD TO INSPECT' : 'HOVER OR CLICK A HEAD';
  document.getElementById('subHoverName').style.color = 'var(--text3)';
  document.getElementById('subHoverDesc').textContent = 'Each color above represents a distinct sub-region within this muscle group.';
}

function hideDetail() {
  isDetailMode  = false;
  selectedSubEl = null;
  document.getElementById('stickySubName').textContent = '';
  document.getElementById('subGroupLbl').textContent   = '';
  document.getElementById('subGroupCount').textContent = '';
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
    document.querySelectorAll('.sub-legend-chip').forEach(c => c.classList.remove('chip-active'));
    document.getElementById('stickySubName').textContent = '';
    document.getElementById('subHoverName').textContent  = isMobile ? 'TAP A HEAD TO INSPECT' : 'HOVER OR CLICK A HEAD';
    document.getElementById('subHoverName').style.color  = 'var(--text3)';
    document.getElementById('subHoverDesc').textContent  = 'Each color above represents a distinct sub-region within this muscle group.';
    zoomTo(selectedKey);
    return;
  }
  // Swap selection
  if(selectedSubEl) selectedSubEl.classList.remove('sub-selected');
  selectedSubEl = el;
  el.classList.add('sub-selected');

  // Sync legend chip active state
  document.querySelectorAll('.sub-legend-chip').forEach(c => c.classList.remove('chip-active'));
  const activeChip = document.querySelector(`.sub-legend-chip[data-chipname="${CSS.escape(s.name)}"]`);
  if(activeChip) activeChip.classList.add('chip-active');

  // Lock info into banner
  document.getElementById('subHoverName').textContent = s.name.toUpperCase();
  document.getElementById('subHoverName').style.color = pal.base;
  document.getElementById('subHoverDesc').textContent = s.desc || '';
  document.getElementById('stickySubName').textContent = '↳ ' + s.name.toUpperCase();

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
  if(isMobile) return;  // touch: tooltip gets stuck (mouseleave unreliable)
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
  document.querySelectorAll('.sub-legend-chip').forEach(c => c.classList.remove('chip-active'));
  document.getElementById('subHoverName').textContent = isMobile ? 'TAP A HEAD TO INSPECT' : 'HOVER OR CLICK A HEAD';
  document.getElementById('subHoverName').style.color = 'var(--text3)';
  document.getElementById('subHoverDesc').textContent = 'Each color above represents a distinct sub-region within this muscle group.';
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
  zoomOutBtn.classList.add('show');
}

function getCurrentViewBox() {
  const vb = svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width > 0
    ? {x: svg.viewBox.baseVal.x, y: svg.viewBox.baseVal.y, w: svg.viewBox.baseVal.width, h: svg.viewBox.baseVal.height}
    : (function() {
        const parts = (svg.getAttribute('viewBox') || '').split(/\s+|,/).map(Number);
        return {x: parts[0] || 19, y: parts[1] || 0, w: parts[2] || 162, h: parts[3] || 520};
      })();
  return {
    x: Number.isFinite(currentVB.x) ? currentVB.x : vb.x,
    y: Number.isFinite(currentVB.y) ? currentVB.y : vb.y,
    w: Number.isFinite(currentVB.w) ? currentVB.w : vb.w,
    h: Number.isFinite(currentVB.h) ? currentVB.h : vb.h,
  };
}

function getFullViewBox() {
  const rect = svg.getBoundingClientRect();
  let bb;
  try {
    bb = svg.getBBox();
  } catch (err) {
    return {x: 0, y: 0, w: 200, h: 520};
  }
  if (!rect.width || !rect.height || !isFinite(bb.width) || !isFinite(bb.height) || bb.width <= 0 || bb.height <= 0) {
    return {x: 0, y: 0, w: 200, h: 520};
  }

  const pad = 8;
  let x = bb.x - pad;
  let y = bb.y - pad;
  let w = bb.width + pad * 2;
  let h = bb.height + pad * 2;
  const dispAR = rect.width / rect.height;
  const contentAR = w / h;

  if (contentAR > dispAR) {
    const newH = w / dispAR;
    y -= (newH - h) / 2;
    h = newH;
  } else {
    const newW = h * dispAR;
    x -= (newW - w) / 2;
    w = newW;
  }

  return {x, y, w, h};
}

function zoomReset() {
  const full = getFullViewBox();
  animateVB({x: full.x, y: full.y, w: full.w, h: full.h}, 380);
  isZoomed = false;
  zoomOutBtn.classList.remove('show');
}

function zoomIn() {
  const current = getCurrentViewBox();
  const rect = svg.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const dispAR = rect.width / rect.height;
  const factor = 0.82;
  const newW = Math.max(40, current.w * factor);
  const newH = newW / dispAR;
  const target = {
    x: current.x + current.w / 2 - newW / 2,
    y: current.y + current.h / 2 - newH / 2,
    w: newW,
    h: newH,
  };
  const full = getFullViewBox();
  animateVB(target, 280);
  isZoomed = target.w < full.w - 1 || target.h < full.h - 1;
  zoomOutBtn.classList.toggle('show', isZoomed);
}

function zoomOut() {
  const current = getCurrentViewBox();
  const rect = svg.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const dispAR = rect.width / rect.height;
  const full = getFullViewBox();
  if (current.w >= full.w * 0.995 || current.h >= full.h * 0.995) {
    zoomReset();
    return;
  }
  const factor = 1.25;
  let newW = Math.min(full.w, current.w * factor);
  let newH = newW / dispAR;
  if (newH > full.h) {
    newH = full.h;
    newW = newH * dispAR;
  }
  const target = {
    x: current.x + current.w / 2 - newW / 2,
    y: current.y + current.h / 2 - newH / 2,
    w: newW,
    h: newH,
  };
  if (newW >= full.w - 1 && newH >= full.h - 1) {
    animateVB(full, 280);
    isZoomed = false;
  } else {
    animateVB(target, 280);
    isZoomed = true;
  }
  zoomOutBtn.classList.toggle('show', isZoomed);
}

function animateVB(to, dur, onDone) {
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
    // NOTE: intentionally no clampPan() here — programmatic zoom/reset targets
    // (e.g. getFullViewBox) may produce large negative x on wide viewports to
    // properly centre the model. Manual-pan handlers clamp inline in their own handlers.
    svg.setAttribute('viewBox', `${currentVB.x} ${currentVB.y} ${currentVB.w} ${currentVB.h}`);
    if(t < 1) vbRaf = requestAnimationFrame(step);
    else if(onDone) onDone();
  })(performance.now());
}

/* ══════════════════════════════════════════════════════
   INFO PANEL
   ══════════════════════════════════════════════════════ */
function showInfo(key) {
  const d = MUSCLES[key];
  if(!d) return;
  infoIdle.style.display = 'none';
  infoContent.classList.remove('show');
  void infoContent.offsetWidth;
  infoContent.classList.add('show');

  // ── Core fields ──
  iRegionEl.textContent = d.region;
  iTypeEl.textContent   = d.type;
  iNameEl.textContent   = d.name;
  iSciEl.textContent    = d.sci;
  iDescEl.textContent   = d.desc;
  iFuncEl.textContent   = d.func;
  iOriginEl.textContent = d.origin;
  iInsertEl.textContent = d.insert;
  iTagsEl.innerHTML =
    (d.tags||[]).map(t => `<span class="tag tag-link" onclick="navigateToExerciseTag('${t.replace(/'/g,"&#39;")}')" title="Find ${t.replace(/'/g,"&#39;")} exercises">${t} ↗</span>`).join('');

  // ── Fiber Type ──
  if(d.fiberType) {
    const ft = d.fiberType;
    if(iFiberBadge) iFiberBadge.textContent = '⬡ ' + ft.label;
    if(iFiberWrap)  iFiberWrap.style.display = '';
    if(iFiberCard) {
      const barI  = Math.round(ft.pctI);
      const barII = Math.round(ft.pctII);
      iFiberCard.innerHTML = `
        <div class="fiber-bar-labels">
          <span style="color:#a855f7">TYPE I (SLOW)</span>
          <span style="color:rgba(230,57,70,0.9)">TYPE II (FAST)</span>
        </div>
        <div class="fiber-bar-wrap">
          <div class="fiber-bar-i"  style="flex:${barI}"></div>
          <div class="fiber-bar-ii" style="flex:${barII}"></div>
        </div>
        <div class="fiber-bar-labels" style="margin-top:2px">
          <span>${barI}%</span>
          <span>${barII}%</span>
        </div>
        <div class="fiber-note" style="margin-top:8px">${ft.note}</div>`;
    }
  } else {
    if(iFiberBadge) iFiberBadge.textContent = '';
    if(iFiberWrap)  iFiberWrap.style.display = 'none';
  }

  // ── Synergists ──
  if(iSynWrap) {
    if(d.synergists && d.synergists.length) {
      iSynWrap.style.display = '';
      iSynChips.innerHTML = d.synergists.map(k => {
        const m = MUSCLES[k];
        const label = m ? m.name : k;
        return `<span class="rel-chip synergist" onclick="selectKey('${k}');_clearRelHighlight()">${label}</span>`;
      }).join('');
    } else {
      iSynWrap.style.display = 'none';
    }
  }

  // ── Antagonists ──
  if(iAntWrap) {
    if(d.antagonists && d.antagonists.length) {
      iAntWrap.style.display = '';
      iAntChips.innerHTML = d.antagonists.map(k => {
        const m = MUSCLES[k];
        const label = m ? m.name : k;
        return `<span class="rel-chip antagonist" onclick="selectKey('${k}');_clearRelHighlight()">${label}</span>`;
      }).join('');
    } else {
      iAntWrap.style.display = 'none';
    }
  }

  // ── Highlight synergists / antagonists on SVG ──
  _clearRelHighlight();
  requestAnimationFrame(() => {
    (d.synergists||[]).forEach(k => {
      document.querySelectorAll(`.muscle-path[data-key="${k}"]`).forEach(el => {
        if(!el.classList.contains('selected')) el.classList.add('synergist-hi');
      });
    });
    (d.antagonists||[]).forEach(k => {
      document.querySelectorAll(`.muscle-path[data-key="${k}"]`).forEach(el => {
        if(!el.classList.contains('selected')) el.classList.add('antagonist-hi');
      });
    });
  });

  // ── Injuries ──
  if(iInjWrap) {
    if(d.injuries && d.injuries.length) {
      iInjWrap.style.display = '';
      iInjCards.innerHTML = d.injuries.map(inj => `
        <div class="injury-card">
          <div class="injury-header">
            <span class="injury-name">${inj.name}</span>
            <span class="injury-sev ${inj.severity}">${inj.severity}</span>
          </div>
          <div class="injury-desc">${inj.desc}</div>
        </div>`).join('');
    } else {
      iInjWrap.style.display = 'none';
    }
  }

  // ── Stretches / Mobility ──
  if(iStrWrap) {
    if(d.stretches && d.stretches.length) {
      iStrWrap.style.display = '';
      if(iStrDiv) iStrDiv.style.display = '';
      iStrCards.innerHTML = d.stretches.map(s => `
        <div class="stretch-card">
          <span class="stretch-icon">🧘</span>
          <div class="stretch-body">
            <div class="stretch-name">${s.name}</div>
            <div class="stretch-desc">${s.desc}</div>
          </div>
        </div>`).join('');
    } else {
      iStrWrap.style.display = 'none';
      if(iStrDiv) iStrDiv.style.display = 'none';
    }
  }

  infoPanel.scrollTop = 0;
  stickyNameEl.textContent    = d.name.toUpperCase();
  stickySubNameEl.textContent = '';
  stickyHdr.classList.add('show');
}

function _clearRelHighlight() {
  document.querySelectorAll('.muscle-path.synergist-hi,.muscle-path.antagonist-hi').forEach(el => {
    el.classList.remove('synergist-hi','antagonist-hi');
  });
}

function hideInfo() {
  infoIdle.style.display = '';
  infoContent.classList.remove('show');
  stickyHdr.classList.remove('show');
  stickyNameEl.textContent    = '';
  stickySubNameEl.textContent = '';
  if(typeof window._refreshMuscleSearch === 'function') window._refreshMuscleSearch();
}


/* ══════════════════════════════════════════════════════
   BONE INTERACTIONS
   ══════════════════════════════════════════════════════ */
function onBoneEnter(r) {
  if(!bonesVisible) return;
  if(isMobile) return;  // touch: tooltip gets stuck (mouseleave unreliable)
  getAllBoneElsByKey(r.key).forEach(el => el.classList.add('bone-hovered'));
  getAllBoneLblsByKey(r.key).forEach(l  => l.classList.add('bone-label-active'));
  const d = BONE_DATA[r.key];
  ttName.innerHTML = `<span style="color:#d4c58a">${d ? d.name : r.key}</span>`;
  tooltip.classList.add('show');
}
function onBoneLeave(r) {
  if(selectedBoneKey !== r.key) {
    getAllBoneElsByKey(r.key).forEach(el => el.classList.remove('bone-hovered'));
    getAllBoneLblsByKey(r.key).forEach(l  => l.classList.remove('bone-label-active'));
  }
  tooltip.classList.remove('show');
}
function onBoneClick(r) {
  if(!bonesVisible) return;
  if(selectedBoneKey === r.key) { clearBoneSelection(); return; }
  // Clear muscle selection first
  if(selectedKey) clearSelection();
  selectBone(r.key);
}
function getAllBoneElsByKey(key) {
  return [...boneRegionLayer.querySelectorAll(`.bone-region-path[data-bonekey="${key}"]`)];
}
function getAllBoneLblsByKey(key) {
  return [...boneLabelLayer.querySelectorAll(`text[data-bonekey="${key}"]`)];
}
function selectBone(key) {
  _haptic(6);
  selectedBoneKey = key;
  // Clear any previous bone highlight
  boneRegionLayer.querySelectorAll('.bone-region-path').forEach(el => el.classList.remove('bone-selected','bone-hovered'));
  boneLabelLayer.querySelectorAll('text').forEach(l => l.classList.remove('bone-label-active','bone-label-dimmed'));
  // Highlight matching regions
  getAllBoneElsByKey(key).forEach(el => el.classList.add('bone-selected'));
  getAllBoneLblsByKey(key).forEach(l  => l.classList.add('bone-label-active'));
  // Zoom to the bone region bounding box
  zoomToBone(key);
  // Show bone info panel
  showBoneInfo(key);
}
function clearBoneSelection() {
  selectedBoneKey = null;
  boneRegionLayer.querySelectorAll('.bone-region-path').forEach(el => el.classList.remove('bone-selected','bone-hovered'));
  boneLabelLayer.querySelectorAll('text').forEach(l => l.classList.remove('bone-label-active','bone-label-dimmed'));
  hideBoneInfo();
  zoomReset();
}

/* ══════════════════════════════════════════════════════
   TENDON INTERACTIONS
   ══════════════════════════════════════════════════════ */
function getAllTendonElsByKey(key) {
  return [...tendonLayer.querySelectorAll(`.tendon-path[data-tendonkey="${key}"]`)];
}
function getAllTendonLblsByKey(key) {
  return [...tendonLabelLayer.querySelectorAll(`text[data-tendonkey="${key}"]`)];
}
function getAllTendonFibersByKey(key) {
  return [...tendonLayer.querySelectorAll(`.tendon-fiber[data-tendonkey="${key}"]`)];
}
function onTendonEnter(r) {
  if(!tendonsVisible) return;
  if(isMobile) return;
  getAllTendonElsByKey(r.key).forEach(el => el.classList.add('tendon-hovered'));
  getAllTendonFibersByKey(r.key).forEach(el => el.classList.add('tendon-fiber-active'));
  getAllTendonLblsByKey(r.key).forEach(l  => l.classList.add('tendon-label-active'));
  const d = TENDON_DATA[r.key];
  ttName.innerHTML = `<span style="color:#4ac3d2">${d ? d.name : r.key}</span>`;
  tooltip.classList.add('show');
}
function onTendonLeave(r) {
  if(selectedTendonKey !== r.key) {
    getAllTendonElsByKey(r.key).forEach(el => el.classList.remove('tendon-hovered'));
    getAllTendonFibersByKey(r.key).forEach(el => el.classList.remove('tendon-fiber-active'));
    getAllTendonLblsByKey(r.key).forEach(l  => l.classList.remove('tendon-label-active'));
  }
  tooltip.classList.remove('show');
}
function onTendonClick(r) {
  if(!tendonsVisible) return;
  if(selectedTendonKey === r.key) { clearTendonSelection(); return; }
  if(selectedKey) clearSelection();
  selectTendon(r.key);
}
// Which view holds a given tendon, and whether it's visible right now.
function findTendonView(key) {
  if(TENDON_REGIONS_FRONT.some(t => t.key === key)) return 'front';
  if(TENDON_REGIONS_BACK.some(t => t.key === key))  return 'back';
  return null;
}
function tendonInCurrentView(key) {
  const arr = currentView === 'back' ? TENDON_REGIONS_BACK : TENDON_REGIONS_FRONT;
  return arr.some(t => t.key === key);
}
function selectTendon(key) {
  _haptic(6);
  selectedTendonKey = key;
  // If the tendon lives on the other view (e.g. Achilles on BACK while we're
  // on FRONT), switch first so it can actually be highlighted and zoomed to.
  if(!tendonInCurrentView(key)) {
    const tv = findTendonView(key);
    if(tv) { setView(tv); selectedTendonKey = key; }
  }
  tendonLayer.querySelectorAll('.tendon-path').forEach(el => el.classList.remove('tendon-selected','tendon-hovered'));
  tendonLayer.querySelectorAll('.tendon-fiber').forEach(el => el.classList.remove('tendon-fiber-active'));
  tendonLabelLayer.querySelectorAll('text').forEach(l => l.classList.remove('tendon-label-active'));
  getAllTendonElsByKey(key).forEach(el => el.classList.add('tendon-selected'));
  getAllTendonFibersByKey(key).forEach(el => el.classList.add('tendon-fiber-active'));
  getAllTendonLblsByKey(key).forEach(l  => l.classList.add('tendon-label-active'));
  zoomToTendon(key);
  showTendonInfo(key);
}
function clearTendonSelection() {
  selectedTendonKey = null;
  if(tendonLayer) tendonLayer.querySelectorAll('.tendon-path').forEach(el => el.classList.remove('tendon-selected','tendon-hovered'));
  if(tendonLayer) tendonLayer.querySelectorAll('.tendon-fiber').forEach(el => el.classList.remove('tendon-fiber-active'));
  if(tendonLabelLayer) tendonLabelLayer.querySelectorAll('text').forEach(l => l.classList.remove('tendon-label-active'));
  hideTendonInfo();
  zoomReset();
}
function zoomToTendon(key) {
  const els = getAllTendonElsByKey(key);
  if(!els.length) return;
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  els.forEach(el => {
    try {
      const bb = el.getBBox();
      minX=Math.min(minX,bb.x); minY=Math.min(minY,bb.y);
      maxX=Math.max(maxX,bb.x+bb.width); maxY=Math.max(maxY,bb.y+bb.height);
    } catch(e) {}
  });
  const mw=maxX-minX, mh=maxY-minY;
  const pad=Math.max(18, Math.min(50, Math.max(mw,mh)*0.6));
  let tx=minX-pad, ty=minY-pad, tw=mw+pad*2, th=mh+pad*2;
  const rect=svg.getBoundingClientRect();
  const dAR=(rect.width>0&&rect.height>0)?rect.width/rect.height:200/520;
  const tAR=tw/th;
  if(tAR>dAR){const ex=(tw/dAR)-th;ty-=ex/2;th+=ex;}
  else       {const ex=(th*dAR)-tw; tx-=ex/2;tw+=ex;}
  animateVB({x:tx,y:ty,w:tw,h:th},480);
  isZoomed=true;
  zoomOutBtn.classList.add('show');
}
function showTendonInfo(key) {
  const d = TENDON_DATA[key];
  if(!d) return;
  infoIdle.style.display      = 'none';
  infoContent.classList.remove('show');
  subInfoBanner.classList.remove('visible');
  boneInfoContent.classList.remove('show');
  tendonInfoContent.classList.remove('show');
  void tendonInfoContent.offsetWidth;
  tendonInfoContent.classList.add('show');
  tRegionEl.textContent    = d.region;
  tTendonTypeEl.textContent = d.tendonType + ' TENDON';
  tNameEl.textContent      = d.name;
  tSciEl.textContent       = d.sci;
  tOriginInsEl.textContent = 'Origin: ' + d.origin + '  ·  Insertion: ' + d.insertion;
  tDescEl.textContent      = d.desc;
  tFuncEl.textContent      = d.func;
  tFactEl.textContent      = d.fact;
  // Connected muscles
  if(tMuscleWrap) {
    if(d.muscles && d.muscles.length) {
      tMuscleWrap.style.display = '';
      const am = window.ANATOMY_MUSCLES || {};
      tMuscleChips.innerHTML = d.muscles.map(k => {
        const md = am[k];
        const lbl = md ? md.name : k;
        return `<span class="rel-chip synergist" style="cursor:pointer" onclick="toggleLayer('tendons');selectKey('${k}')">${lbl} ↗</span>`;
      }).join('');
    } else {
      tMuscleWrap.style.display = 'none';
    }
  }
  // Attached bones
  if(tBoneWrap) {
    if(d.bones && d.bones.length) {
      tBoneWrap.style.display = '';
      tBoneChips.innerHTML = d.bones.map(k => {
        const bd = BONE_DATA[k];
        const lbl = bd ? bd.name : k;
        return `<span class="tendon-chip" style="cursor:pointer" onclick="toggleLayer('tendons');toggleLayer('bones');selectBone('${k}')">${lbl} ↗</span>`;
      }).join('');
    } else {
      tBoneWrap.style.display = 'none';
    }
  }
  // Injuries
  if(tInjCards) {
    tInjCards.innerHTML = (d.injuries||[]).map(inj => `
      <div class="injury-card">
        <div class="injury-header">
          <span class="injury-name">${inj.name}</span>
          <span class="injury-sev ${inj.severity}">${inj.severity}</span>
        </div>
        <div class="injury-desc">${inj.desc}</div>
      </div>`).join('');
  }
  infoPanel.scrollTop = 0;
  stickyNameEl.textContent    = d.name.toUpperCase();
  stickySubNameEl.textContent = d.tendonType.toUpperCase() + ' TENDON';
  stickyHdr.classList.add('show');
}
function hideTendonInfo() {
  if(tendonInfoContent) tendonInfoContent.classList.remove('show');
  infoIdle.style.display = '';
  stickyHdr.classList.remove('show');
  stickyNameEl.textContent    = '';
  stickySubNameEl.textContent = '';
  if(typeof window._refreshMuscleSearch === 'function') window._refreshMuscleSearch();
}

/* ══════════════════════════════════════════════════════
   NERVE INTERACTIONS
   ══════════════════════════════════════════════════════ */
function getAllNerveElsByKey(key) {
  return [...nerveLayer.querySelectorAll(`.nerve-path[data-nervekey="${key}"]`)];
}
function getAllNerveLblsByKey(key) {
  return [...nerveLabelLayer.querySelectorAll(`text[data-nervekey="${key}"]`)];
}
function getAllNerveFibersByKey(key) {
  return [...nerveLayer.querySelectorAll(`.nerve-fiber[data-nervekey="${key}"]`)];
}
function onNerveEnter(r) {
  if(!nervesVisible) return;
  if(isMobile) return;
  getAllNerveElsByKey(r.key).forEach(el => el.classList.add('nerve-hovered'));
  getAllNerveFibersByKey(r.key).forEach(el => el.classList.add('nerve-fiber-active'));
  getAllNerveLblsByKey(r.key).forEach(l  => l.classList.add('nerve-label-active'));
  const d = NERVE_DATA[r.key];
  ttName.innerHTML = `<span style="color:#a855f7">${d ? d.name : r.key}</span>`;
  tooltip.classList.add('show');
}
function onNerveLeave(r) {
  if(selectedNerveKey !== r.key) {
    getAllNerveElsByKey(r.key).forEach(el => el.classList.remove('nerve-hovered'));
    getAllNerveFibersByKey(r.key).forEach(el => el.classList.remove('nerve-fiber-active'));
    getAllNerveLblsByKey(r.key).forEach(l  => l.classList.remove('nerve-label-active'));
  }
  tooltip.classList.remove('show');
}
function onNerveClick(r) {
  if(!nervesVisible) return;
  if(selectedNerveKey === r.key) { clearNerveSelection(); return; }
  if(selectedKey) clearSelection();
  selectNerve(r.key);
}
function findNerveView(key) {
  if(NERVE_REGIONS_FRONT.some(t => t.key === key)) return 'front';
  if(NERVE_REGIONS_BACK.some(t => t.key === key))  return 'back';
  return null;
}
function nerveInCurrentView(key) {
  const arr = currentView === 'back' ? NERVE_REGIONS_BACK : NERVE_REGIONS_FRONT;
  return arr.some(t => t.key === key);
}
function selectNerve(key) {
  _haptic(6);
  selectedNerveKey = key;
  // If the nerve lives on the other view (e.g. radial on BACK while we're on
  // FRONT), switch first so it can actually be highlighted and zoomed to.
  if(!nerveInCurrentView(key)) {
    const nv = findNerveView(key);
    if(nv) { setView(nv); selectedNerveKey = key; }
  }
  nerveLayer.querySelectorAll('.nerve-path').forEach(el => el.classList.remove('nerve-selected','nerve-hovered'));
  nerveLayer.querySelectorAll('.nerve-fiber').forEach(el => el.classList.remove('nerve-fiber-active'));
  nerveLabelLayer.querySelectorAll('text').forEach(l => l.classList.remove('nerve-label-active'));
  getAllNerveElsByKey(key).forEach(el => el.classList.add('nerve-selected'));
  getAllNerveFibersByKey(key).forEach(el => el.classList.add('nerve-fiber-active'));
  getAllNerveLblsByKey(key).forEach(l  => l.classList.add('nerve-label-active'));
  zoomToNerve(key);
  showNerveInfo(key);
}
function clearNerveSelection() {
  selectedNerveKey = null;
  if(nerveLayer) nerveLayer.querySelectorAll('.nerve-path').forEach(el => el.classList.remove('nerve-selected','nerve-hovered'));
  if(nerveLayer) nerveLayer.querySelectorAll('.nerve-fiber').forEach(el => el.classList.remove('nerve-fiber-active'));
  if(nerveLabelLayer) nerveLabelLayer.querySelectorAll('text').forEach(l => l.classList.remove('nerve-label-active'));
  hideNerveInfo();
  zoomReset();
}
function zoomToNerve(key) {
  const els = getAllNerveElsByKey(key);
  if(!els.length) return;
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  els.forEach(el => {
    try {
      const bb = el.getBBox();
      minX=Math.min(minX,bb.x); minY=Math.min(minY,bb.y);
      maxX=Math.max(maxX,bb.x+bb.width); maxY=Math.max(maxY,bb.y+bb.height);
    } catch(e) {}
  });
  const mw=maxX-minX, mh=maxY-minY;
  const pad=Math.max(18, Math.min(50, Math.max(mw,mh)*0.6));
  let tx=minX-pad, ty=minY-pad, tw=mw+pad*2, th=mh+pad*2;
  const rect=svg.getBoundingClientRect();
  const dAR=(rect.width>0&&rect.height>0)?rect.width/rect.height:200/520;
  const tAR=tw/th;
  if(tAR>dAR){const ex=(tw/dAR)-th;ty-=ex/2;th+=ex;}
  else       {const ex=(th*dAR)-tw; tx-=ex/2;tw+=ex;}
  animateVB({x:tx,y:ty,w:tw,h:th},480);
  isZoomed=true;
  zoomOutBtn.classList.add('show');
}
function showNerveInfo(key) {
  const d = NERVE_DATA[key];
  if(!d) return;
  infoIdle.style.display      = 'none';
  infoContent.classList.remove('show');
  subInfoBanner.classList.remove('visible');
  boneInfoContent.classList.remove('show');
  tendonInfoContent.classList.remove('show');
  nerveInfoContent.classList.remove('show');
  void nerveInfoContent.offsetWidth;
  nerveInfoContent.classList.add('show');
  nRegionEl.textContent     = d.region;
  nNerveTypeEl.textContent  = (d.nerveType || '').toUpperCase() + (d.nerveType === 'Plexus' ? '' : ' NERVE');
  nNameEl.textContent       = d.name;
  nSciEl.textContent        = d.sci;
  nRootsCourseEl.textContent = 'Roots: ' + d.roots + '  ·  ' + d.course;
  nDescEl.textContent       = d.desc;
  nFuncEl.textContent       = d.func;
  nFactEl.textContent       = d.fact;
  // Sensory territory
  if(nSensoryWrap) {
    if(d.sensory) { nSensoryWrap.style.display = ''; nSensoryEl.textContent = d.sensory; }
    else nSensoryWrap.style.display = 'none';
  }
  // Innervated muscles
  if(nMuscleWrap) {
    if(d.muscles && d.muscles.length) {
      nMuscleWrap.style.display = '';
      const am = window.ANATOMY_MUSCLES || {};
      nMuscleChips.innerHTML = d.muscles.map(k => {
        const md = am[k];
        const lbl = md ? md.name : k;
        return `<span class="rel-chip synergist" style="cursor:pointer" onclick="toggleLayer('nerves');selectKey('${k}')">${lbl} ↗</span>`;
      }).join('');
    } else {
      nMuscleWrap.style.display = 'none';
    }
  }
  // Injuries
  if(nInjCards) {
    nInjCards.innerHTML = (d.injuries||[]).map(inj => `
      <div class="injury-card">
        <div class="injury-header">
          <span class="injury-name">${inj.name}</span>
          <span class="injury-sev ${inj.severity}">${inj.severity}</span>
        </div>
        <div class="injury-desc">${inj.desc}</div>
      </div>`).join('');
  }
  infoPanel.scrollTop = 0;
  stickyNameEl.textContent    = d.name.toUpperCase();
  stickySubNameEl.textContent = (d.nerveType || 'NERVE').toUpperCase();
  stickyHdr.classList.add('show');
}
function hideNerveInfo() {
  if(nerveInfoContent) nerveInfoContent.classList.remove('show');
  infoIdle.style.display = '';
  stickyHdr.classList.remove('show');
  stickyNameEl.textContent    = '';
  stickySubNameEl.textContent = '';
  if(typeof window._refreshMuscleSearch === 'function') window._refreshMuscleSearch();
}

function zoomToBone(key) {
  const els = getAllBoneElsByKey(key);
  if(!els.length) return;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  els.forEach(el => {
    try {
      const bb = el.getBBox();
      minX = Math.min(minX, bb.x);
      minY = Math.min(minY, bb.y);
      maxX = Math.max(maxX, bb.x + bb.width);
      maxY = Math.max(maxY, bb.y + bb.height);
    } catch(e) {}
  });
  const mw = maxX - minX, mh = maxY - minY;
  const pad = Math.max(10, Math.min(34, Math.max(mw, mh) * 0.22));
  let tx = minX - pad, ty = minY - pad;
  let tw = mw + pad*2, th = mh + pad*2;
  const rect = svg.getBoundingClientRect();
  const dAR  = (rect.width > 0 && rect.height > 0) ? rect.width / rect.height : 200/520;
  const tAR  = tw/th;
  if(tAR > dAR) { const ex = (tw/dAR) - th; ty -= ex/2; th += ex; }
  else          { const ex = (th*dAR) - tw;  tx -= ex/2; tw += ex; }
  animateVB({x:tx, y:ty, w:tw, h:th}, 480);
  isZoomed = true;
  zoomOutBtn.classList.add('show');
}
function showBoneInfo(key) {
  const d = BONE_DATA[key];
  if(!d) return;
  // Hide muscle panel, show bone panel
  infoIdle.style.display    = 'none';
  infoContent.classList.remove('show');
  subInfoBanner.classList.remove('visible');
  boneInfoContent.classList.remove('show');
  void boneInfoContent.offsetWidth;
  boneInfoContent.classList.add('show');
  // Populate
  bRegionEl.textContent   = d.region;
  bBoneTypeEl.textContent = d.boneType + ' BONE';
  bNameEl.textContent     = d.name;
  bSciEl.textContent      = d.sci;
  bDescEl.textContent     = d.desc;
  bFuncEl.textContent     = d.func;
  bFactEl.textContent     = d.fact;
  // Joints chips
  bJointsEl.innerHTML = (d.joints||[]).map(j =>
    `<span class="bone-joint-chip">${j}</span>`).join('');
  // Attached muscles — clicking exits bone mode and selects the muscle
  if(bMuscleWrap) {
    if(d.muscles && d.muscles.length) {
      bMuscleWrap.style.display = '';
      const am = window.ANATOMY_MUSCLES || {};
      bMuscleChips.innerHTML = d.muscles.map(k => {
        const md = am[k];
        const lbl = md ? md.name : k;
        return `<span class="rel-chip synergist" style="cursor:pointer" onclick="toggleLayer('bones');selectKey('${k}')">${lbl} ↗</span>`;
      }).join('');
    } else {
      bMuscleWrap.style.display = 'none';
    }
  }
  // Injuries
  if(bInjCards) {
    bInjCards.innerHTML = (d.injuries||[]).map(inj => `
      <div class="injury-card">
        <div class="injury-header">
          <span class="injury-name">${inj.name}</span>
          <span class="injury-sev ${inj.severity}">${inj.severity}</span>
        </div>
        <div class="injury-desc">${inj.desc}</div>
      </div>`).join('');
  }
  infoPanel.scrollTop = 0;
  stickyNameEl.textContent    = d.name.toUpperCase();
  stickySubNameEl.textContent = d.boneType.toUpperCase() + ' BONE';
  stickyHdr.classList.add('show');
}
function hideBoneInfo() {
  if(boneInfoContent) boneInfoContent.classList.remove('show');
  infoIdle.style.display = '';
  stickyHdr.classList.remove('show');
  stickyNameEl.textContent    = '';
  stickySubNameEl.textContent = '';
  if(typeof window._refreshMuscleSearch === 'function') window._refreshMuscleSearch();
}

/* ══════════════════════════════════════════════════════
   VIEW TOGGLE
   ══════════════════════════════════════════════════════ */
/* ══════════════════════════════════════════════════════
   MUSCLE GROOVES — inter-head / inter-belly separators
   rendered in overlayLayer above muscle fills
   ══════════════════════════════════════════════════════ */
const GROOVES_FRONT = [
  // Biceps: long/short head split (lateral groove)
  {d:'M54,138 Q56,162 54,194'},
  {d:'M146,138 Q144,162 146,194'},
  // Pec: clavicular/sternal division
  {d:'M64,94 Q74,100 98,104'},
  {d:'M136,94 Q126,100 102,104'},
  // Abs: linea alba (central vertical)
  {d:'M100,128 L100,224'},
  // Quads: rectus femoris / vastus lateralis split
  {d:'M80,272 Q84,310 82,376'},
  {d:'M120,272 Q116,310 118,376'},
  // Vastus medialis teardrop (inner lower quad bulge outline)
  {d:'M60,346 Q60,370 72,388 Q80,396 88,390'},
  {d:'M140,346 Q140,370 128,388 Q120,396 112,390'},
];

const GROOVES_BACK = [
  // Erector columns: left/right groove
  {d:'M100,142 L100,264'},
  // Triceps: lateral/long head split
  {d:'M44,138 Q44,168 42,200'},
  {d:'M156,138 Q156,168 158,200'},
  // Triceps: medial/long head split
  {d:'M32,162 Q34,188 38,208'},
  {d:'M168,162 Q166,188 162,208'},
  // Glute: gluteus medius peak (upper edge of max visible above medius)
  {d:'M56,270 Q50,288 50,310'},
  {d:'M144,270 Q150,288 150,310'},
  // Hamstrings: biceps femoris / semimembranosus split line
  {d:'M78,358 Q80,392 78,430'},
  {d:'M122,358 Q120,392 122,430'},
  // Calf: medial/lateral gastrocnemius heads — the diamond groove
  {d:'M78,438 Q76,464 78,488'},
  {d:'M122,438 Q124,464 122,488'},
  // Lat: posterior border fold
  {d:'M68,116 Q66,152 68,200'},
  {d:'M132,116 Q134,152 132,200'},
];

function buildGrooves(view) {
  const overlayLayer = document.getElementById('overlayLayer');
  if(!overlayLayer) return;
  overlayLayer.innerHTML = '';
  const grooves = view === 'back' ? GROOVES_BACK : view === 'front' ? GROOVES_FRONT : [];
  grooves.forEach(g => {
    const el = mkEl('path', {d: g.d, class: 'muscle-groove'});
    overlayLayer.appendChild(el);
  });
}

function setView(view) {
  currentView = view;
  clearSelection();
  document.getElementById('btnFront').classList.toggle('active', view === 'front');
  document.getElementById('btnBack').classList.toggle('active',  view === 'back');
  const sideBtn = document.getElementById('btnSide');
  if(sideBtn) {
    sideBtn.classList.toggle('active', view === 'side');
    sideBtn.textContent = '◉ ' + (currentSideView === 'left' ? 'LEFT' : 'RIGHT');
  }
  buildBody();
  buildSkeleton(view === 'front' || view === 'side' ? SKELETON_FRONT : SKELETON_BACK);
  buildMuscles(view === 'front' ? FRONT : view === 'back' ? BACK : getSideMuscles());
  buildGrooves(view);
  buildTendons(view === 'back' ? TENDON_REGIONS_BACK : TENDON_REGIONS_FRONT);
  buildNerves(view === 'back' ? NERVE_REGIONS_BACK : NERVE_REGIONS_FRONT);
}

function toggleSideView() {
  if(currentView === 'side') currentSideView = currentSideView === 'left' ? 'right' : 'left';
  setView('side');
}

/* ── Realistic anatomical render mode ─────────────────────── */
function updateRenderRealBtn() {
  const on  = document.documentElement.dataset.anatomyReal === '1';
  const btn = document.getElementById('renderRealBtn');
  if(btn) {
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }
}

function setAnatomyRealistic(on) {
  document.documentElement.dataset.anatomyReal = on ? '1' : '0';
  try { localStorage.setItem('grnd_anatomy_real', on ? '1' : '0'); } catch(e) {}
  updateRenderRealBtn();
  // Rebuild the current view so depth overlays are added/removed to match
  if(typeof currentView !== 'undefined' && currentView) setView(currentView);
}

function toggleAnatomyRealistic() {
  setAnatomyRealistic(document.documentElement.dataset.anatomyReal !== '1');
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
  if(!muscleKey) {
    if(hash === 'anatomy' && typeof goTo === 'function') goTo('anatomy');
    return;
  }
  if(typeof goTo === 'function') goTo('anatomy');
  selectKey(decodeURIComponent(muscleKey));
}

window.addEventListener('hashchange', applyHashSelection);


function toggleLayer(layer) {
  if(layer === 'muscles') {
    musclesVisible = !musclesVisible;
    muscleLayer.style.opacity   = musclesVisible ? '1' : '0';
    overlayLayer.style.opacity  = musclesVisible ? '1' : '0';
    labelLayer.style.opacity    = musclesVisible ? '1' : '0';
    detailLayer.style.opacity   = musclesVisible ? '1' : '0';
    detailLabelLayer.style.opacity = musclesVisible ? '1' : '0';
  } else if(layer === 'bones') {
    bonesVisible = !bonesVisible;
    skeletonLayer.style.opacity = bonesVisible ? '1' : '0';
    if(boneRegionLayer) {
      boneRegionLayer.style.display = bonesVisible ? '' : 'none';
      boneLabelLayer.style.display  = bonesVisible ? '' : 'none';
    }
    if(bonesVisible) {
      // Entering bone mode — clear any muscle selection, hide all muscle layers
      // so bone hit-targets are never obscured by muscle paths
      if(selectedKey) clearSelection();
      else if(isZoomed) zoomReset();
      muscleLayer.style.opacity      = '0';
      overlayLayer.style.opacity     = '0';
      labelLayer.style.opacity       = '0';
      detailLayer.style.opacity      = '0';
      detailLabelLayer.style.opacity = '0';
      muscleLayer.style.pointerEvents = 'none';
      // Bones, tendons and nerves are mutually exclusive — turn the others off
      if(tendonsVisible) {
        tendonsVisible = false;
        if(tendonLayer) { tendonLayer.style.display='none'; tendonLabelLayer.style.display='none'; }
        clearTendonSelection();
      }
      if(nervesVisible) {
        nervesVisible = false;
        if(nerveLayer) { nerveLayer.style.display='none'; nerveLabelLayer.style.display='none'; }
        clearNerveSelection();
      }
    } else {
      // Leaving bone mode — restore muscle layers (respect the muscles toggle)
      if(musclesVisible) {
        muscleLayer.style.opacity      = '1';
        overlayLayer.style.opacity     = '1';
        labelLayer.style.opacity       = '1';
        detailLayer.style.opacity      = '1';
        detailLabelLayer.style.opacity = '1';
      }
      muscleLayer.style.pointerEvents = '';
      clearBoneSelection();
    }
  } else if(layer === 'tendons') {
    tendonsVisible = !tendonsVisible;
    if(tendonLayer) {
      tendonLayer.style.display      = tendonsVisible ? '' : 'none';
      tendonLabelLayer.style.display = tendonsVisible ? '' : 'none';
    }
    if(tendonsVisible) {
      if(selectedKey) clearSelection();
      else if(isZoomed) zoomReset();
      muscleLayer.style.opacity       = '0';
      overlayLayer.style.opacity      = '0';
      labelLayer.style.opacity        = '0';
      detailLayer.style.opacity       = '0';
      detailLabelLayer.style.opacity  = '0';
      muscleLayer.style.pointerEvents = 'none';
      // Also turn off bones / nerves if active (mutually exclusive layers)
      if(bonesVisible) {
        bonesVisible = false;
        skeletonLayer.style.opacity = '0';
        if(boneRegionLayer) { boneRegionLayer.style.display='none'; boneLabelLayer.style.display='none'; }
        clearBoneSelection();
      }
      if(nervesVisible) {
        nervesVisible = false;
        if(nerveLayer) { nerveLayer.style.display='none'; nerveLabelLayer.style.display='none'; }
        clearNerveSelection();
      }
    } else {
      if(musclesVisible) {
        muscleLayer.style.opacity      = '1';
        overlayLayer.style.opacity     = '1';
        labelLayer.style.opacity       = '1';
        detailLayer.style.opacity      = '1';
        detailLabelLayer.style.opacity = '1';
      }
      muscleLayer.style.pointerEvents = '';
      clearTendonSelection();
    }
  } else if(layer === 'nerves') {
    nervesVisible = !nervesVisible;
    if(nerveLayer) {
      nerveLayer.style.display      = nervesVisible ? '' : 'none';
      nerveLabelLayer.style.display = nervesVisible ? '' : 'none';
    }
    if(nervesVisible) {
      if(selectedKey) clearSelection();
      else if(isZoomed) zoomReset();
      muscleLayer.style.opacity       = '0';
      overlayLayer.style.opacity      = '0';
      labelLayer.style.opacity        = '0';
      detailLayer.style.opacity       = '0';
      detailLabelLayer.style.opacity  = '0';
      muscleLayer.style.pointerEvents = 'none';
      // Also turn off bones / tendons if active (mutually exclusive layers)
      if(bonesVisible) {
        bonesVisible = false;
        skeletonLayer.style.opacity = '0';
        if(boneRegionLayer) { boneRegionLayer.style.display='none'; boneLabelLayer.style.display='none'; }
        clearBoneSelection();
      }
      if(tendonsVisible) {
        tendonsVisible = false;
        if(tendonLayer) { tendonLayer.style.display='none'; tendonLabelLayer.style.display='none'; }
        clearTendonSelection();
      }
    } else {
      if(musclesVisible) {
        muscleLayer.style.opacity      = '1';
        overlayLayer.style.opacity     = '1';
        labelLayer.style.opacity       = '1';
        detailLayer.style.opacity      = '1';
        detailLabelLayer.style.opacity = '1';
      }
      muscleLayer.style.pointerEvents = '';
      clearNerveSelection();
    }
  }
  // Keep filter panel layer chips in sync after exclusive top-bar toggle
  if(typeof window._syncLayerFilterChips === 'function') window._syncLayerFilterChips();
}

/* ── KEYBOARD SHORTCUTS ── */
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') clearSelection();
  if((e.key === 'f' || e.key === 'F') && !e.target.matches('input,textarea')) setView('front');
  if((e.key === 'b' || e.key === 'B') && !e.target.matches('input,textarea')) setView('back');

  // Arrow-key navigation between focusable muscle paths
  if(e.key === 'ArrowRight' || e.key === 'ArrowLeft' ||
     e.key === 'ArrowDown'  || e.key === 'ArrowUp') {
    if(!e.target.classList.contains('muscle-path')) return;
    e.preventDefault();
    const focusable = [...muscleLayer.querySelectorAll('.muscle-path[tabindex="0"]')];
    const idx  = focusable.indexOf(e.target);
    const next = (e.key === 'ArrowRight' || e.key === 'ArrowDown')
      ? focusable[(idx + 1) % focusable.length]
      : focusable[(idx - 1 + focusable.length) % focusable.length];
    if(next) next.focus();
  }
});

/* ── CLICK BODY TO DESELECT ── */
svg.addEventListener('click', e => {
  if(ignoreNextClick) {
    ignoreNextClick = false;
    return;
  }
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

// Double-tap state variables
let _lastTapTime = 0, _lastTapX = 0, _lastTapY = 0;

svgWrap.addEventListener('touchstart', e => {
  if(e.target.closest('button') || e.target.closest('a')) return;
  if(e.touches.length === 2) {
    // Cancel any running zoom animation so it doesn't fight the pinch
    if(vbRaf) { cancelAnimationFrame(vbRaf); vbRaf = null; }
    touchPinching  = true;
    panStart       = null;
    touchStartDist = t2dist(e.touches);
    touchStartVB   = {...currentVB};
    touchStartRect = svg.getBoundingClientRect();
    const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    touchStartMid  = clientToVB(mx, my);
    e.preventDefault();
  } else if(e.touches.length === 1) {
    // Cancel animation so pan doesn't fight it
    if(vbRaf) { cancelAnimationFrame(vbRaf); vbRaf = null; }
    panStart     = {x: e.touches[0].clientX, y: e.touches[0].clientY};
    panStartVB   = {...currentVB};
    panStartRect = svg.getBoundingClientRect();
    panMoved     = false;
  }
}, {passive: false});

svgWrap.addEventListener('touchmove', e => {
  if(e.touches.length === 2 && touchPinching) {
    e.preventDefault();
    const newDist = t2dist(e.touches);
    // spread = zoom-in (smaller VB); pinch = zoom-out (larger VB)
    const scale   = Math.max(0.1, touchStartDist / newDist);
    const rawW    = touchStartVB.w * scale;

    // Allow zooming in freely; cap zoom-out at 2x the full view
    const full    = getFullViewBox();
    const newW    = Math.min(full.w * 2, Math.max(15, rawW));
    const r       = touchStartRect || svg.getBoundingClientRect();
    const dAR     = r.width > 0 ? r.width / r.height : 200/520;
    const newH    = newW / dAR;
    const mx      = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const my      = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    const fx      = (mx - r.left) / r.width;
    const fy      = (my - r.top)  / r.height;
    currentVB     = {x: touchStartMid.x - fx*newW, y: touchStartMid.y - fy*newH, w: newW, h: newH};
    clampPan();
    svg.setAttribute('viewBox', `${currentVB.x} ${currentVB.y} ${currentVB.w} ${currentVB.h}`);
    isZoomed = newW < full.w - 1;
    zoomOutBtn.classList.toggle('show', isZoomed);

  } else if(e.touches.length === 1 && panStart && !touchPinching) {
    const dx = e.touches[0].clientX - panStart.x;
    const dy = e.touches[0].clientY - panStart.y;
    if(!panMoved && Math.hypot(dx, dy) < 7) return;
    panMoved = true;
    ignoreNextClick = true;
    e.preventDefault();
    const r      = panStartRect || svg.getBoundingClientRect();
    currentVB.x  = panStartVB.x - dx * (panStartVB.w / r.width);
    currentVB.y  = panStartVB.y - dy * (panStartVB.h / r.height);
    clampPan();
    svg.setAttribute('viewBox', `${currentVB.x} ${currentVB.y} ${currentVB.w} ${currentVB.h}`);
  }
}, {passive: false});

svgWrap.addEventListener('touchend', e => {
  // Always clear tooltip on touch-end — mouseleave is unreliable on touch
  tooltip.classList.remove('show');
  // Lift one finger during pinch → stop pinching (small delay to block stray tap)
  if(e.touches.length < 2) setTimeout(() => { touchPinching = false; }, 80);

  if(e.touches.length === 0) {
    if(panMoved) {
      ignoreNextClick = true;
      e.preventDefault();
    }
    panStart = null;
    // No auto-reset on pinch-end — the user controls zoom freely.

    // Double-tap to reset zoom
    const now = Date.now();
    const changedTouch = e.changedTouches[0];
    if(changedTouch && !panMoved && !touchPinching) {
      const dt   = now - (_lastTapTime || 0);
      const tdx  = changedTouch.clientX - (_lastTapX || 0);
      const tdy  = changedTouch.clientY - (_lastTapY || 0);
      const dist = Math.hypot(tdx, tdy);
      if(dt < 340 && dist < 40) {
        _lastTapTime = 0;
        if(isZoomed) {
          _haptic(12);
          zoomReset();
          const vbPt = clientToVB(changedTouch.clientX, changedTouch.clientY);
          const ring = mkEl('circle', {
            cx: vbPt.x, cy: vbPt.y, r: 6,
            class: 'tap-ring-anim',
          });
          const rl = document.getElementById('rippleLayer');
          if(rl) {
            rl.appendChild(ring);
            setTimeout(() => ring.remove(), 450);
          }
        }
      } else {
        _lastTapTime = now;
        _lastTapX    = changedTouch.clientX;
        _lastTapY    = changedTouch.clientY;
      }
    }
  }
}, {passive: false});

svgWrap.addEventListener('pointerdown', e => {
  if(e.pointerType !== 'mouse' || e.button !== 0) return;
  if(e.target.closest('.muscle-path') || e.target.closest('.sub-muscle')) return;
  if(e.target.closest('.bone-region-path')) return;
  if(e.target.closest('.tendon-path')) return;
  if(e.target.closest('.nerve-path')) return;
  if(e.target.closest('button') || e.target.closest('a')) return;
  panStart     = {x: e.clientX, y: e.clientY};
  panStartVB   = {...currentVB};
  panStartRect = svg.getBoundingClientRect();
  panMoved     = false;
  ignoreNextClick = false;
  svgWrap.setPointerCapture(e.pointerId);
  e.preventDefault();
});

svgWrap.addEventListener('pointermove', e => {
  if(e.pointerType !== 'mouse' || !panStart || touchPinching) return;
  const dx = e.clientX - panStart.x;
  const dy = e.clientY - panStart.y;
  if(!panMoved && Math.hypot(dx, dy) < 7) return;
  panMoved = true;
  ignoreNextClick = true;
  e.preventDefault();
  const r      = panStartRect || svg.getBoundingClientRect();
  currentVB.x  = panStartVB.x - dx * (panStartVB.w / r.width);
  currentVB.y  = panStartVB.y - dy * (panStartVB.h / r.height);
  clampPan();
  svg.setAttribute('viewBox', `${currentVB.x} ${currentVB.y} ${currentVB.w} ${currentVB.h}`);
});

svgWrap.addEventListener('pointerup', e => {
  if(e.pointerType !== 'mouse') return;
  if(panMoved) ignoreNextClick = true;
  panStart = null;
  if(e.pointerId != null) svgWrap.releasePointerCapture(e.pointerId);
});

svgWrap.addEventListener('pointercancel', e => {
  if(e.pointerType !== 'mouse') return;
  panStart = null;
  if(e.pointerId != null) svgWrap.releasePointerCapture(e.pointerId);
});


/* ══════════════════════════════════════════════════════
   MUSCLE SEARCH PANEL
   ══════════════════════════════════════════════════════ */
(function _initMuscleSearch() {
  // Flat searchable index: { key, name, sci, region }
  const SEARCH_INDEX = Object.entries(MUSCLES)
    .filter(([, d]) => d && d.name)
    .map(([key, d]) => ({
      key,
      name: d.name,
      sci:  d.sci || '',
      region: d.region || '',
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const BONE_SEARCH_INDEX = Object.entries(BONE_DATA)
    .filter(([, d]) => d && d.name)
    .map(([key, d]) => ({
      key,
      name: d.name,
      sci:  d.sci || '',
      region: d.region || '',
      isBone: true,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const TENDON_SEARCH_INDEX = Object.entries(TENDON_DATA)
    .filter(([, d]) => d && d.name)
    .map(([key, d]) => ({
      key,
      name: d.name,
      sci:  d.sci || '',
      region: d.region || '',
      isTendon: true,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const NERVE_SEARCH_INDEX = Object.entries(NERVE_DATA)
    .filter(([, d]) => d && d.name)
    .map(([key, d]) => ({
      key,
      name: d.name,
      sci:  d.sci || '',
      region: d.region || '',
      isNerve: true,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  function _getResults(query) {
    const index = bonesVisible ? BONE_SEARCH_INDEX : tendonsVisible ? TENDON_SEARCH_INDEX : nervesVisible ? NERVE_SEARCH_INDEX : SEARCH_INDEX;
    const q = query.trim().toLowerCase();
    if(!q) return index.slice(0, 40);
    return index.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.sci.toLowerCase().includes(q) ||
      item.region.toLowerCase().includes(q)
    ).slice(0, 40);
  }

  function _renderResults(results, query) {
    const container = document.getElementById('msearchResults');
    if(!container) return;
    if(!results.length) {
      container.innerHTML = `<div class="msearch-empty">${bonesVisible ? 'NO BONES FOUND' : tendonsVisible ? 'NO TENDONS FOUND' : nervesVisible ? 'NO NERVES FOUND' : 'NO MUSCLES FOUND'}</div>`;
      return;
    }
    const q = query.trim().toLowerCase();
    container.innerHTML = results.map(item => {
      function hl(str) {
        if(!q) return str;
        const idx = str.toLowerCase().indexOf(q);
        if(idx === -1) return str;
        return str.slice(0, idx) +
               `<mark style="background:rgba(230,57,70,0.28);color:var(--accent);border-radius:2px">${str.slice(idx, idx + q.length)}</mark>` +
               str.slice(idx + q.length);
      }
      return `<div class="msearch-result" data-mkey="${item.key}" data-isbone="${item.isBone||''}" data-istendon="${item.isTendon||''}" data-isnerve="${item.isNerve||''}" tabindex="0">
        <div class="msearch-result-name">${hl(item.name)}</div>
        <div class="msearch-result-sci">${hl(item.sci)}</div>
        <div class="msearch-result-region">${item.region}</div>
      </div>`;
    }).join('');
    container.querySelectorAll('.msearch-result').forEach(el => {
      const key = el.dataset.mkey;
      const isBone   = el.dataset.isbone   === 'true';
      const isTendon = el.dataset.istendon === 'true';
      const isNerve  = el.dataset.isnerve  === 'true';
      const action = () => isBone ? selectBone(key) : isTendon ? selectTendon(key) : isNerve ? selectNerve(key) : selectKey(key);
      el.addEventListener('click', action);
      el.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') action(); });
    });
  }

  function _updatePlaceholder() {
    const input = document.getElementById('msearchInput');
    if(input) input.placeholder = bonesVisible ? 'SEARCH BONES…' : tendonsVisible ? 'SEARCH TENDONS…' : nervesVisible ? 'SEARCH NERVES…' : 'SEARCH MUSCLES…';
  }

  function _update() {
    _updatePlaceholder();
    const q = (document.getElementById('msearchInput') || {}).value || '';
    _renderResults(_getResults(q), q);
    const clr = document.getElementById('msearchClear');
    if(clr) clr.classList.toggle('show', q.length > 0);
  }

  // ── Build MUSCLES dropdown list ──────────────────────────────
  function _buildMuscleDropdown() {
    const panel = document.getElementById('mfMuscleDdPanel');
    if(!panel || panel.childElementCount > 0) return;
    panel.innerHTML = SEARCH_INDEX.map(item =>
      `<button class="mf-dd-item" data-mkey="${item.key}">
        <span>${item.name}</span>
        <span class="mf-dd-item-region">${item.region}</span>
      </button>`
    ).join('');
    panel.querySelectorAll('.mf-dd-item').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        selectKey(btn.dataset.mkey);
        _closeMuscleDD();
      });
    });
  }

  function _closeMuscleDD() {
    const dd  = document.getElementById('mfMuscleDd');
    const btn = document.getElementById('mfMuscleBtn');
    if(dd)  dd.classList.remove('open');
    if(btn) btn.classList.remove('open');
  }

  // ── Wire up ALL / MUSCLES / BONES buttons ───────────────────
  setTimeout(() => {
    const input    = document.getElementById('msearchInput');
    const clear    = document.getElementById('msearchClear');
    const allBtn   = document.getElementById('mfAllBtn');
    const muscleDD = document.getElementById('mfMuscleDd');
    const muscleBtn= document.getElementById('mfMuscleBtn');
    const bonesBtn = document.getElementById('mfBonesBtn');

    if(input) {
      const _updateDebounced = (() => { let t; return () => { clearTimeout(t); t = setTimeout(_update, 50); }; })();
      input.addEventListener('input', _updateDebounced);
      input.addEventListener('keydown', e => {
        if(e.key === 'Escape') { input.value = ''; _update(); input.blur(); }
      });
    }
    if(clear) {
      clear.addEventListener('click', () => { if(input) { input.value = ''; input.focus(); } _update(); });
    }

    // ALL — just reset search
    if(allBtn) {
      allBtn.addEventListener('click', () => {
        allBtn.classList.add('active');
        if(bonesBtn) { bonesBtn.classList.remove('active', 'bones-on'); }
        const tBtn = document.getElementById('mfTendonsBtn');
        if(tBtn) tBtn.classList.remove('active');
        const nBtn = document.getElementById('mfNervesBtn');
        if(nBtn) nBtn.classList.remove('active', 'nerves-on');
        _closeMuscleDD();
        // Turn any active overlay layer off
        if(bonesVisible) toggleLayer('bones');
        if(tendonsVisible) toggleLayer('tendons');
        if(nervesVisible) toggleLayer('nerves');
        if(input) { input.value = ''; }
        _update();
      });
    }

    // MUSCLES ▾ — show all muscles AND open sub-filter dropdown
    if(muscleBtn && muscleDD) {
      muscleBtn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = muscleDD.classList.contains('open');
        _closeMuscleDD();
        if(!isOpen) {
          // Switch to all-muscles state (deactivate overlays)
          if(bonesVisible) toggleLayer('bones');
          if(tendonsVisible) toggleLayer('tendons');
          if(nervesVisible) toggleLayer('nerves');
          if(bonesBtn) bonesBtn.classList.remove('active', 'bones-on');
          const _tBtn = document.getElementById('mfTendonsBtn');
          if(_tBtn) _tBtn.classList.remove('active');
          const _nBtn = document.getElementById('mfNervesBtn');
          if(_nBtn) _nBtn.classList.remove('active', 'nerves-on');
          if(allBtn) allBtn.classList.remove('active');
          if(input) { input.value = ''; }
          _update();
          // Then open the dropdown for sub-filtering
          _buildMuscleDropdown();
          muscleDD.classList.add('open');
          muscleBtn.classList.add('open', 'active');
        } else {
          // Closing dropdown — go back to all state
          if(allBtn) allBtn.classList.add('active');
          muscleBtn.classList.remove('active');
        }
      });
    }

    const tendonsBtn = document.getElementById('mfTendonsBtn');
    const nervesBtn  = document.getElementById('mfNervesBtn');

    // BONES toggle
    if(bonesBtn) {
      bonesBtn.addEventListener('click', () => {
        toggleLayer('bones');
        bonesBtn.classList.toggle('bones-on', bonesVisible);
        bonesBtn.classList.toggle('active', bonesVisible);
        if(allBtn) allBtn.classList.toggle('active', !bonesVisible);
        // bones turns tendons/nerves off internally — clear their chips too
        if(tendonsBtn) tendonsBtn.classList.toggle('active', false);
        if(nervesBtn) nervesBtn.classList.toggle('active', false);
        _closeMuscleDD();
        const inp = document.getElementById('msearchInput');
        if(inp) inp.value = '';
        _update();
      });
    }

    // TENDONS toggle
    if(tendonsBtn) {
      tendonsBtn.addEventListener('click', () => {
        toggleLayer('tendons');
        tendonsBtn.classList.toggle('active', tendonsVisible);
        if(allBtn) allBtn.classList.toggle('active', !tendonsVisible && !bonesVisible && !nervesVisible);
        if(bonesBtn) bonesBtn.classList.toggle('active', false);
        if(bonesBtn) bonesBtn.classList.toggle('bones-on', false);
        if(nervesBtn) nervesBtn.classList.toggle('active', false);
        _closeMuscleDD();
        const inp = document.getElementById('msearchInput');
        if(inp) inp.value = '';
        _update();
      });
    }

    // NERVES toggle
    if(nervesBtn) {
      nervesBtn.addEventListener('click', () => {
        toggleLayer('nerves');
        nervesBtn.classList.toggle('active', nervesVisible);
        if(allBtn) allBtn.classList.toggle('active', !nervesVisible && !bonesVisible && !tendonsVisible);
        if(bonesBtn) { bonesBtn.classList.toggle('active', false); bonesBtn.classList.toggle('bones-on', false); }
        if(tendonsBtn) tendonsBtn.classList.toggle('active', false);
        _closeMuscleDD();
        const inp = document.getElementById('msearchInput');
        if(inp) inp.value = '';
        _update();
      });
    }

    // Close MUSCLES dropdown on outside click
    document.addEventListener('click', e => {
      if(!e.target.closest('#mfMuscleDd')) _closeMuscleDD();
    });

    _update(); // initial render
  }, 0);

  const _patchHide = () => {
    _update();
    // Sync bones button state
    const bonesBtn = document.getElementById('mfBonesBtn');
    if(bonesBtn) { bonesBtn.classList.toggle('bones-on', bonesVisible); bonesBtn.classList.toggle('active', bonesVisible); }
    const tendonsBtn2 = document.getElementById('mfTendonsBtn');
    if(tendonsBtn2) tendonsBtn2.classList.toggle('active', tendonsVisible);
    const nervesBtn2 = document.getElementById('mfNervesBtn');
    if(nervesBtn2) nervesBtn2.classList.toggle('active', nervesVisible);
    const allBtn = document.getElementById('mfAllBtn');
    if(allBtn) allBtn.classList.toggle('active', !bonesVisible && !tendonsVisible && !nervesVisible);
  };
  window._refreshMuscleSearch = _patchHide;
})();

/* ══════════════════════════════════════════════════════
   ADVANCED FILTER PANEL
   ══════════════════════════════════════════════════════ */
(function _initAdvancedFilter() {

  // ── Region tags per muscle key ────────────────────────────
  function _regionTags(region, key) {
    const r = region.toLowerCase(), k = key.toLowerCase();
    const t = [];
    if(r.includes('chest') || k==='pectorals' || k==='serratus') t.push('chest');
    if(r.includes('back') || r.includes('interscapular') || k==='lats' || k==='trapezius' || k==='rhomboids' || k==='lowerback') t.push('back');
    if(r.includes('shoulder') || k==='deltoids' || k==='reardelts' || k==='rotatorcuff') t.push('shoulders');
    if(r.includes('arm') || r.includes('forearm') || k==='biceps' || k==='triceps' || k==='forearms' || k==='hands') t.push('arms');
    if(r.includes('core') || k==='abs' || k==='obliques' || k==='deepcore' || k==='intercostals') t.push('core');
    if(r.includes('thigh')||r.includes('hip')||r.includes('glut')||r.includes('leg')||r.includes('foot')||r.includes('knee')||
       k==='quadriceps'||k==='hamstrings'||k==='calves'||k==='glutes'||k==='hipflexors'||k==='adductors'||
       k==='tibialis'||k==='peroneals'||k==='feet') t.push('legs');
    if(r.includes('neck')||r.includes('cervical')||k==='neck') t.push('neck');
    return t;
  }

  // ── Fiber type bucket per muscle key ─────────────────────
  function _fiberBucket(key) {
    const d = MUSCLES[key];
    if(!d || !d.fiberType) return 'mixed';
    const {pctI, pctII} = d.fiberType;
    if(pctI  >= 60) return 'i';
    if(pctII >= 60) return 'ii';
    return 'mixed';
  }

  // ── Build per-key lookup table once ──────────────────────
  const META = {};
  Object.entries(MUSCLES).forEach(([key, d]) => {
    if(!d || !d.name) return;
    META[key] = {
      regions: _regionTags(d.region || '', key),
      fiber:   _fiberBucket(key),
    };
  });

  // ── State ─────────────────────────────────────────────────
  const activeRegions = new Set();
  let   activeFiber   = null; // null | 'i' | 'ii' | 'mixed'
  const activeLayers  = new Set(); // 'bones' | 'tendons' | 'nerves'

  function _totalActive() {
    return activeRegions.size + (activeFiber ? 1 : 0) + activeLayers.size;
  }

  // Additive layer toggle — shows layers stacked on muscles without mutual exclusion
  function _applyLayerAdditive(layer, on) {
    if(layer === 'bones') {
      bonesVisible = on;
      if(skeletonLayer) skeletonLayer.style.opacity = on ? '1' : '0';
      if(boneRegionLayer) { boneRegionLayer.style.display = on ? '' : 'none'; boneLabelLayer.style.display = on ? '' : 'none'; }
      const b = document.getElementById('mfBonesBtn');
      if(b) { b.classList.toggle('active', on); b.classList.toggle('bones-on', on); }
    } else if(layer === 'tendons') {
      tendonsVisible = on;
      if(tendonLayer) { tendonLayer.style.display = on ? '' : 'none'; tendonLabelLayer.style.display = on ? '' : 'none'; }
      const t = document.getElementById('mfTendonsBtn');
      if(t) t.classList.toggle('active', on);
    } else if(layer === 'nerves') {
      nervesVisible = on;
      if(nerveLayer) { nerveLayer.style.display = on ? '' : 'none'; nerveLabelLayer.style.display = on ? '' : 'none'; }
      const n = document.getElementById('mfNervesBtn');
      if(n) n.classList.toggle('active', on);
    }
    // Dim muscles when any overlay is stacked on top
    const hasOverlay = bonesVisible || tendonsVisible || nervesVisible;
    const musOp = hasOverlay && musclesVisible ? '0.35' : (musclesVisible ? '1' : '0');
    [muscleLayer, overlayLayer, labelLayer, detailLayer, detailLabelLayer].forEach(el => { if(el) el.style.opacity = musOp; });
    if(muscleLayer) muscleLayer.style.pointerEvents = hasOverlay ? 'none' : '';
  }

  // ── Apply filters to SVG muscle paths + labels ───────────
  function _applyToSVG() {
    const paths  = window._cachedMusclePaths  || [...document.querySelectorAll('.muscle-path[data-key]')];
    const labels = window._cachedMuscleLabels || [...document.querySelectorAll('.muscle-label[data-key]')];
    const noRegionFilter = activeRegions.size === 0;
    const noFiberFilter  = activeFiber === null;
    if(noRegionFilter && noFiberFilter) {
      // Remove all dimming
      paths.forEach(el  => el.classList.remove('filter-dimmed'));
      labels.forEach(el => el.classList.remove('filter-dimmed-lbl'));
      return;
    }
    // Hoist once — avoids allocating a new array per element inside the loops
    const regionsArr = noRegionFilter ? [] : [...activeRegions];
    paths.forEach(el => {
      const key  = el.getAttribute('data-key');
      const meta = META[key];
      if(!meta) return;
      let pass = true;
      if(!noRegionFilter) {
        pass = regionsArr.some(r => meta.regions.includes(r));
      }
      if(pass && !noFiberFilter) {
        pass = meta.fiber === activeFiber;
      }
      el.classList.toggle('filter-dimmed', !pass);
    });
    labels.forEach(el => {
      const key  = el.getAttribute('data-key');
      const meta = META[key];
      if(!meta) { return; }
      let pass = true;
      if(!noRegionFilter) pass = regionsArr.some(r => meta.regions.includes(r));
      if(pass && !noFiberFilter) pass = meta.fiber === activeFiber;
      el.classList.toggle('filter-dimmed-lbl', !pass);
    });
  }

  // ── Sync UI chrome ────────────────────────────────────────
  function _syncUI() {
    const n = _totalActive();
    const btn    = document.getElementById('mfFilterBtn');
    const badge  = document.getElementById('filterBadge');
    const count  = document.getElementById('filterActiveCount');
    if(btn)   btn.classList.toggle('filter-on', n > 0);
    if(badge) { badge.textContent = n || ''; }
    if(count) {
      count.innerHTML = n > 0
        ? `<em>${n}</em> ACTIVE FILTER${n > 1 ? 'S' : ''}`
        : 'NO FILTERS ACTIVE';
    }
    // Sync muscle section count badge
    const mCount = document.getElementById('fpMuscleCount');
    if(mCount) {
      const mr = activeRegions.size;
      mCount.textContent = mr > 0 ? String(mr) : '';
      mCount.classList.toggle('show', mr > 0);
    }
    // Sync chip active states
    document.querySelectorAll('.filter-chip[data-fregion]').forEach(c => {
      c.classList.toggle('active', activeRegions.has(c.dataset.fregion));
    });
    document.querySelectorAll('.filter-chip[data-ffiber]').forEach(c => {
      c.classList.toggle('active', c.dataset.ffiber === activeFiber);
    });
    document.querySelectorAll('.filter-chip[data-flayer]').forEach(c => {
      c.classList.toggle('active', activeLayers.has(c.dataset.flayer));
    });
  }

  function _resetAll() {
    activeRegions.clear();
    activeFiber = null;
    activeLayers.forEach(l => _applyLayerAdditive(l, false));
    activeLayers.clear();
    _applyToSVG();
    _syncUI();
    // Also refresh search results through the existing hook
    if(typeof window._refreshMuscleSearch === 'function') window._refreshMuscleSearch();
  }

  // ── Wire up DOM ───────────────────────────────────────────
  setTimeout(() => {
    const filterBtn   = document.getElementById('mfFilterBtn');
    const filterPanel = document.getElementById('filterPanel');
    const resetBtn    = document.getElementById('filterResetBtn');

    // Toggle panel
    if(filterBtn && filterPanel) {
      filterBtn.addEventListener('click', e => {
        e.stopPropagation();
        const open = filterPanel.classList.toggle('open');
        filterBtn.classList.toggle('active', open || _totalActive() > 0);
        // Close muscles dropdown if open
        const dd = document.getElementById('mfMuscleDd');
        if(dd) dd.classList.remove('open');
        const mb = document.getElementById('mfMuscleBtn');
        if(mb) mb.classList.remove('open');
      });
    }

    // Close panel on outside click
    document.addEventListener('click', e => {
      if(!e.target.closest('#filterPanel') && !e.target.closest('#mfFilterBtn')) {
        if(filterPanel) filterPanel.classList.remove('open');
        if(filterBtn) filterBtn.classList.toggle('active', _totalActive() > 0);
      }
    });

    // Region chips
    document.querySelectorAll('.filter-chip[data-fregion]').forEach(chip => {
      chip.addEventListener('click', e => {
        e.stopPropagation();
        const r = chip.dataset.fregion;
        if(activeRegions.has(r)) activeRegions.delete(r);
        else                      activeRegions.add(r);
        _applyToSVG();
        _syncUI();
      });
    });

    // Fiber chips (radio-style)
    document.querySelectorAll('.filter-chip[data-ffiber]').forEach(chip => {
      chip.addEventListener('click', e => {
        e.stopPropagation();
        const f = chip.dataset.ffiber;
        activeFiber = (activeFiber === f) ? null : f; // toggle off if same
        _applyToSVG();
        _syncUI();
      });
    });

    // Layer chips (additive, no mutual exclusion)
    document.querySelectorAll('.filter-chip[data-flayer]').forEach(chip => {
      chip.addEventListener('click', e => {
        e.stopPropagation();
        const l = chip.dataset.flayer;
        const on = !activeLayers.has(l);
        if(on) activeLayers.add(l); else activeLayers.delete(l);
        _applyLayerAdditive(l, on);
        _syncUI();
      });
    });

    // Reset
    if(resetBtn) resetBtn.addEventListener('click', e => { e.stopPropagation(); _resetAll(); });

    // Re-apply filters whenever view changes (muscles rebuild on setView)
    const _origSetView = window.setView;
    window.setView = function(v) {
      _origSetView(v);
      // Reapply after a tick so new DOM elements exist
      requestAnimationFrame(_applyToSVG);
    };

    _syncUI(); // initial state
  }, 50); // slight delay to let _initMuscleSearch finish first

  // Expose for external reset (e.g. clearSelection)
  window._resetAdvancedFilter = _resetAll;
  window._reapplyAdvancedFilter = _applyToSVG;
  // Sync filter layer chips when top-bar exclusive-mode buttons change state
  window._syncLayerFilterChips = function() {
    activeLayers.clear();
    if(bonesVisible)   activeLayers.add('bones');
    if(tendonsVisible) activeLayers.add('tendons');
    if(nervesVisible)  activeLayers.add('nerves');
    _syncUI();
  };
})();

    /* ── Expose button handlers to global scope ── */
    // All onclick="..." attributes in the injected HTML look up functions on window.
    // Since setView / toggleLayer / setSide / clearSelection are defined inside
    // _initViewer(), they are not on window by default — wire them up here.
    window.setView     = setView;
    window.toggleSideView = toggleSideView;
    window.toggleLayer = toggleLayer;
    window.setSide     = setSide;
    window.clearSelection = clearSelection;
    window._clearRelHighlight = _clearRelHighlight;
    window.selectKey   = selectKey;
    window.clearBoneSelection = clearBoneSelection;
    window.zoomIn      = zoomIn;
    window.zoomOut     = zoomOut;
    window.zoomReset   = zoomReset;
    window.toggleAnatomyRealistic = toggleAnatomyRealistic;
    window.setAnatomyRealistic    = setAnatomyRealistic;
    window.updateRenderRealBtn    = updateRenderRealBtn;

    /* ── Init ── */
    setView('front');
    requestAnimationFrame(() => zoomReset()); // start fully zoomed-out by default



    // Expose selector so openAnatomyView can pre-select a muscle.
    // selectKey() handles switching to the correct front/back view before
    // highlighting, so back muscles (glutes, lats, traps, hamstrings, etc.) work too.
    window._anatomySelectMuscle = function(key) {
      if (!key) return;
      selectKey(key);
    };
    setTimeout(applyHashSelection, 0);
    setTimeout(applyHashSelection, 350);
    // Expose so muscle-modal.js can fall back to viewer data for enriched muscle detail
    window.ANATOMY_MUSCLES = MUSCLES;
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
      if (typeof closeModal === 'function') closeModal();
      if (typeof goTo === 'function') goTo('anatomy');
      if (key) setTimeout(function() {
        if (typeof window._anatomySelectMuscle === 'function')
          window._anatomySelectMuscle(key);
      }, 160);
    };
  }

  /* ── Boot ───────────────────────────────────────────────── */
  function _boot() {
    try {
      const savedLite = localStorage.getItem('grnd_anatomy_lite');
      const forceLite = savedLite === '1' || savedLite === null;
      // Auto-lite on mobile with ≤4 CPU cores or ≤2 GB RAM
      const autoLite  = navigator.maxTouchPoints > 0 &&
        (navigator.hardwareConcurrency <= 4 ||
         (navigator.deviceMemory !== undefined && navigator.deviceMemory <= 2));
      document.documentElement.dataset.anatomyLite =
        (forceLite || autoLite) ? '1' : '0';
      // Realistic render mode — opt-in, off by default
      document.documentElement.dataset.anatomyReal =
        localStorage.getItem('grnd_anatomy_real') === '1' ? '1' : '0';
    } catch(e) {}
    _injectHTML();
    _initViewer();
    _hookOpenAnatomyView();
    if(typeof window.updateRenderRealBtn === 'function') window.updateRenderRealBtn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _boot);
  } else {
    _boot();
  }

})();

/* 
   MUSCLE MODAL DATA
   Per-key color tokens and exercise-context overlay.
   Viewer anatomy data lives in window.ANATOMY_MUSCLES (set by _initViewer).
 */

// Color swatch per anatomy viewer key
const MUSCLE_COLORS = {
  pectorals:'red',  triceps:'blue',  deltoids:'blue',  biceps:'red',   lats:'blue',
  abs:'green',      obliques:'green',deepcore:'green',  glutes:'red',   hamstrings:'red',
  quadriceps:'red', calves:'red',    adductors:'green', hipflexors:'green',
  lowerback:'blue', trapezius:'blue',rotatorcuff:'blue',reardelts:'blue',
  rhomboids:'blue', serratus:'blue', forearms:'blue',   neck:'blue',
  intercostals:'green', tibialis:'red', peroneals:'red', feet:'red', hands:'blue',
};

// Exercise-context entries whose descriptions differ from anatomy viewer data.
// All other muscles fall back to window.ANATOMY_MUSCLES in openMuscle().
const MUSCLES = {
  'Upper Chest': {
    sci:'Pectoralis Major — Caput Claviculare', region:'Anterior Thorax (Superior)', type:'Skeletal · Type II dominant',
    origin:'Medial half of clavicle', insertion:'Greater tubercle of humerus',
    desc:"The clavicular head of the pectoralis major. Best emphasised at incline angles or when the arms move upward across the body.",
    func:'Shoulder flexion, horizontal adduction with an upward arm path, and internal rotation.',
    tags:['Incline Press','Shoulder Flexion','Sub-region of Pec Major'], color:'red',
  },
  'Lower Chest': {
    sci:'Pectoralis Major — Caput Sternocostale', region:'Anterior Thorax (Inferior)', type:'Skeletal · Type II dominant',
    origin:'Sternum and costal cartilages 2-6', insertion:'Greater tubercle of humerus',
    desc:'The sternocostal head of the pectoralis major. Best emphasised by pressing at a decline angle.',
    func:'Horizontal adduction with a downward arm path, arm depression, and internal rotation.',
    tags:['Decline Press','Arm Depression','Sub-region of Pec Major'], color:'red',
  },
  'Core': {
    sci:'Rectus Abdominis & Transversus Abdominis', region:'Anterior Abdomen', type:'Skeletal · Type I dominant',
    origin:'Rectus: pubic crest. Transversus: iliac crest, thoracolumbar fascia, costal cartilages.',
    insertion:'Rectus: xiphoid process & costal cartilages 5-7. Transversus: linea alba.',
    desc:"In a pressing context 'core' means the rectus abdominis and deep transversus abdominis, acting isometrically to maintain a rigid neutral spine under load.",
    func:'Rectus: spinal flexion. Transversus: trunk compression, intra-abdominal pressure, and anti-extension stabilisation.',
    tags:['Stabiliser','Anti-Extension','Isometric'], color:'green',
  },
  'Back': {
    sci:'Serratus Anterior & Rhomboids', region:'Lateral Rib Cage / Posterior Thorax', type:'Skeletal',
    origin:'Serratus: ribs 1-8. Rhomboids: spinous processes T2-T5.',
    insertion:'Serratus: medial border of scapula. Rhomboids: medial scapular border.',
    desc:"In a pushing context 'back' means the serratus anterior (scapular protraction at top of rep) and rhomboids (counter-force stabilisers).",
    func:'Serratus: scapular protraction & upward rotation. Rhomboids: scapular retraction & elevation.',
    tags:['Scapular Protraction','Shoulder Health','Pressing Stabiliser','Serratus Anterior'], color:'blue',
  },
  'Thoracic Spine': {
    sci:'Thoracic Vertebrae T1-T12 & Surrounding Musculature', region:'Mid Back', type:'Structural / Skeletal',
    origin:'T1-T12 vertebral bodies with attached ribs', insertion:'N/A — structural segment',
    desc:'The thoracic spine is the middle section of the vertebral column. Thoracic mobility is critical for safe overhead movement, pressing, and rotational sport skills.',
    func:'Thoracic extension allows upright posture and overhead reach. Reduced mobility forces compensation at the lumbar spine or shoulder.',
    tags:['Spinal Mobility','Thoracic Extension','Rotation'], color:'blue',
  },
};

const MUSCLE_MODAL_ALIASES = {
  'Rectus Abdominis': 'Core',
  'Transverse Abdominis': 'Core',
  'Rectus Femoris': 'Quadriceps',
  'Vastus Lateralis': 'Quadriceps',
  'Vastus Medialis': 'Quadriceps',
  'Vastus Intermedius': 'Quadriceps',
  'Quads': 'Quadriceps',
  'Gluteus Maximus': 'Glutes',
  'Gluteus Medius': 'Glutes',
  'Gluteus Minimus': 'Glutes',
  'External Oblique': 'Obliques',
  'Internal Oblique': 'Obliques',
  'Gastrocnemius': 'Calves',
  'Soleus': 'Calves',
  'Biceps Femoris': 'Hamstrings',
  'Semitendinosus': 'Hamstrings',
  'Semimembranosus': 'Hamstrings',
  'Brachialis': 'Biceps',
  'Brachioradialis': 'Forearms',
  'Pectoralis Major': 'Chest',
  'Pectoralis Minor': 'Chest',
  'Teres Minor': 'Rotator Cuff',
  'Serratus': 'Back',
  'Serratus Anterior': 'Back',
  'Rhomboids': 'Back',
  'Lats': 'Lats',
  'Front Delts': 'Shoulders',
  'Rear Delts': 'Shoulders',
  'Rear Deltoids': 'Shoulders',
  'Upper Traps': 'Upper Trapezius',
  'Spinal Erectors': 'Erector Spinae',
  'Hip Adductors': 'Adductors',
  'Arms': 'Biceps',
  'Wrists': 'Forearms',
  'Finger Flexors': 'Forearms',
  'Thumb Flexors': 'Forearms',
  'Legs': 'Quadriceps',
  'Hips': 'Glutes',
  'Stability': 'Core',
  'Thoracic Rotators': 'Thoracic Spine',
};

const MUSCLE_ANATOMY_ALIASES = {
  'Rectus Abdominis': 'abs',
  'Transverse Abdominis': 'deepcore',
  'Core': 'abs',
  'Obliques': 'obliques',
  'Gluteus Maximus': 'glutes',
  'Gluteus Medius': 'glutes',
  'Gluteus Minimus': 'glutes',
  'Biceps Femoris': 'hamstrings',
  'Semitendinosus': 'hamstrings',
  'Semimembranosus': 'hamstrings',
  'Gastrocnemius': 'calves',
  'Soleus': 'calves',
  'External Oblique': 'obliques',
  'Internal Oblique': 'obliques',
  'Rectus Femoris': 'quadriceps',
  'Vastus Lateralis': 'quadriceps',
  'Vastus Medialis': 'quadriceps',
  'Vastus Intermedius': 'quadriceps',
  'Quads': 'quadriceps',
  'Pectoralis Major': 'pectorals',
  'Pectoralis Minor': 'pectorals',
  'Teres Minor': 'rotatorcuff',
  'Serratus': 'serratus',
  'Serratus Anterior': 'serratus',
  'Rhomboids': 'rhomboids',
  'Brachialis': 'biceps',
  'Brachioradialis': 'forearms',
  'Chest': 'pectorals',
  'Upper Chest': 'pectorals',
  'Lower Chest': 'pectorals',
  'Shoulders': 'deltoids',
  'Front Delts': 'deltoids',
  'Rear Delts': 'reardelts',
  'Rear Deltoids': 'reardelts',
  'Back': 'lats',
  'Lats': 'lats',
  'Hip Flexors': 'hipflexors',
  'Erector Spinae': 'lowerback',
  'Spinal Erectors': 'lowerback',
  'Upper Trapezius': 'trapezius',
  'Upper Traps': 'trapezius',
  'Rotator Cuff': 'rotatorcuff',
  'Thoracic Spine': 'lowerback',
  'Thoracic Rotators': 'obliques',
  'Hip Abductors': 'glutes',
  'Hip Adductors': 'adductors',
  'Adductors': 'adductors',
  'Arms': 'biceps',
  'Wrists': 'forearms',
  'Finger Flexors': 'forearms',
  'Thumb Flexors': 'hands',
  'Legs': 'quadriceps',
  'Hips': 'glutes',
  'Stability': 'deepcore',
  'Triceps': 'triceps',
  'Forearms': 'forearms',
  'Biceps': 'biceps',
  'Hamstrings': 'hamstrings',
  'Glutes': 'glutes',
  'Quadriceps': 'quadriceps',
  'Calves': 'calves',
};

/* ══════════════════════════════════════════════════════
   JOINT / TENDON DATA  (moved from index.html)
   ══════════════════════════════════════════════════════ */
const JOINTS_META = [
  { key:'fingers',   label:'FINGERS / HAND',
    tendons:[
      { name:'Flexor Digitorum Profundus',     note:'Deep finger flexor — high load in grip/pulling' },
      { name:'Flexor Digitorum Superficialis', note:'Superficial flexor — stabilises finger curl' },
      { name:'Extensor Digitorum Communis',    note:'Finger extension — loaded in open-hand work' },
      { name:'A2 / A4 Pulleys',               note:'Critical in climbing & grip-heavy exercises' },
      { name:'Collateral Ligaments',           note:'Lateral stability of finger joints' },
    ]
  },
  { key:'wrist',     label:'WRIST',
    tendons:[
      { name:'Flexor Carpi Radialis',          note:'Wrist flexion — heavily loaded in pressing' },
      { name:'Extensor Carpi Radialis',        note:'Wrist extension — loaded in pulling / rowing' },
      { name:'Flexor Carpi Ulnaris',           note:'Ulnar-side stabiliser — boxing, kettlebell work' },
      { name:'Extensor Carpi Ulnaris',         note:'Ulnar extensor — rotational wrist loads' },
      { name:'Scapholunate Ligament',          note:'Key wrist stabiliser — at risk in heavy WB' },
    ]
  },
  { key:'elbow',     label:'ELBOW',
    tendons:[
      { name:'Distal Biceps Tendon',           note:'Loaded in curls, pull-ups, supinated rows' },
      { name:'Common Extensor Tendon',         note:'Lateral epicondyle — "tennis elbow" site' },
      { name:"Common Flexor Tendon",           note:"Medial epicondyle — golfer's elbow site" },
      { name:'Brachialis Tendon',              note:'Deep elbow flexor — pronated pulling loads' },
      { name:'Triceps Tendon',                 note:'Elbow extension — all pressing movements' },
    ]
  },
  { key:'shoulder',  label:'SHOULDER',
    tendons:[
      { name:'Supraspinatus',                  note:'Most injured rotator cuff tendon — overhead load' },
      { name:'Infraspinatus',                  note:'External rotation — throwing, pressing' },
      { name:'Subscapularis',                  note:'Internal rotation — bench press, dips' },
      { name:'Teres Minor',                    note:'External rotation stabiliser' },
      { name:'Biceps Long Head',               note:'Runs through shoulder — at risk in overhead work' },
      { name:'Coracohumeral Ligament',         note:'Superior capsule — overhead stability' },
    ]
  },
  { key:'neck',      label:'NECK',
    tendons:[
      { name:'Cervical Erector Tendons',       note:'Loaded under axial load — barbell squats' },
      { name:'Ligamentum Nuchae',              note:'Posterior stabiliser — flexion under load' },
      { name:'Upper Trapezius',                note:'Shrug load, overhead pressing, contact sports' },
      { name:'Sternocleidomastoid',            note:'Neck rotation — wrestling, boxing' },
      { name:'Levator Scapulae',               note:'Neck-to-scapula link — shrugs, carries' },
    ]
  },
  { key:'thoracic',  label:'THORACIC SPINE',
    tendons:[
      { name:'Thoracic Erector Spinae',        note:'Mid-back extension — rows, deadlifts' },
      { name:'Rhomboid Tendons',               note:'Scapular retraction — rowing movements' },
      { name:'Thoracic Multifidus',            note:'Segmental stabiliser — rotational loads' },
      { name:'Interspinous Ligaments',         note:'Spinal flexion control under load' },
      { name:'Thoracodorsal Fascia (mid)',     note:'Force transfer from arms to spine' },
    ]
  },
  { key:'lowerBack', label:'LOWER BACK',
    tendons:[
      { name:'Thoracolumbar Fascia',           note:'Major force transfer structure — deadlifts, squats' },
      { name:'Erector Spinae Tendons',         note:'Lumbar extension under load' },
      { name:'Multifidus',                     note:'Deep stabiliser — critical in all loaded movement' },
      { name:'Quadratus Lumborum',             note:'Lateral stabiliser — unilateral loads, carries' },
      { name:'Interspinous Ligament',          note:'Flexion control — RDLs, good mornings' },
    ]
  },
  { key:'si',        label:'SACROILIAC (SI)',
    tendons:[
      { name:'Sacroiliac Ligaments',           note:'Primary SI stabilisers — heavy axial load' },
      { name:'Sacrotuberous Ligament',         note:'Hammering force — running, jumping landings' },
      { name:'Iliolumbar Ligament',            note:'L4/L5 to pelvis — at risk in deep squats' },
      { name:'Posterior SI Ligament',          note:'Loaded in forward bend patterns' },
    ]
  },
  { key:'hip',       label:'HIP',
    tendons:[
      { name:'Iliopsoas Tendon',               note:'Hip flexion — squats, kicks, sprinting' },
      { name:'Rectus Femoris Origin',          note:'Hip flexor + quad — lunges, kicking' },
      { name:'Gluteus Medius Tendon',          note:'Lateral hip — single-leg load, running' },
      { name:'Piriformis',                     note:'External rotator — deep squats, martial arts' },
      { name:'Hip Flexor Complex',             note:'General anterior hip — squatting / hinging' },
    ]
  },
  { key:'groin',     label:'GROIN / ADDUCTORS',
    tendons:[
      { name:'Adductor Longus Tendon',         note:'Most commonly strained — lateral cuts, sumo' },
      { name:'Adductor Magnus Tendon',         note:'Inner knee attachment — squats, deadlifts' },
      { name:'Gracilis Tendon',                note:'Medial thigh to knee — sprinting, agility' },
      { name:'Pectineus Tendon',               note:'Proximal adductor — hip flexion + adduction' },
    ]
  },
  { key:'knee',      label:'KNEE',
    tendons:[
      { name:'Patellar Tendon',                note:"Quad-to-tibia — jumper's knee risk in jumping" },
      { name:'Quadriceps Tendon',              note:'Above kneecap — heavy squat loads' },
      { name:'Iliotibial Band',                note:"Lateral knee — runner's knee in repetitive flex" },
      { name:'Biceps Femoris Tendon',          note:'Posterior lateral — hamstring loading' },
      { name:'Medial Collateral Lig.',         note:'Valgus stress — lateral sports, deep squats' },
    ]
  },
  { key:'ankle',     label:'ANKLE',
    tendons:[
      { name:'Achilles Tendon',                note:'Highest-load tendon in the body — running, jumping' },
      { name:'Peroneal Tendons',               note:'Lateral ankle stability — inversion sprains' },
      { name:'Anterior Talofibular Lig.',      note:'Most commonly sprained ankle ligament' },
      { name:'Tibialis Posterior',             note:'Arch support — running, plyometrics' },
      { name:'Tibialis Anterior',              note:'Dorsiflexion — shin splints site' },
    ]
  },
  { key:'foot',      label:'FOOT / TOES',
    tendons:[
      { name:'Plantar Fascia',                 note:'Arch — plantar fasciitis in running / jumping' },
      { name:'Flexor Digitorum Longus',        note:'Toe flexion — push-off in sprinting' },
      { name:'Extensor Digitorum Brevis',      note:'Toe extension — loaded in agility work' },
      { name:'Lisfranc Ligament',              note:'Midfoot stability — at risk in twisting sports' },
      { name:'Peroneus Longus (distal)',       note:'Arch support / first metatarsal anchor' },
    ]
  },
];
window.JOINTS_META = JOINTS_META;

/* ══════════════════════════════════════════════════════
   TRAINING TAG → LIBRARY NAVIGATION
   Clicking a tag on the anatomy muscle panel navigates
   to the All-Exercises library, pre-filtered by that tag.
   ══════════════════════════════════════════════════════ */
window.navigateToExerciseTag = function(tag) {
  // 1. Prime the all-library search state
  if(typeof LIB_STATE !== 'undefined' && LIB_STATE.all) {
    LIB_STATE.all.searchTerm  = tag;
    LIB_STATE.all.activeFilter = 'all';
    LIB_STATE.all.openRow     = null;
  }

  // 2. Sync the visible search input
  const searchEl = document.getElementById('all-search');
  if(searchEl) searchEl.value = tag;

  // 3. Reset filter-chip highlight to ALL
  const filterRow = document.getElementById('all-filterRow');
  if(filterRow) {
    filterRow.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('on'));
    const allChip = filterRow.querySelector('[data-filter="all"]');
    if(allChip) allChip.classList.add('on');
  }

  // 4. Navigate then re-render (small delay lets goTo finish its scroll reset)
  if(typeof goTo === 'function') goTo('all-library');
  if(typeof renderLibTable === 'function') {
    setTimeout(() => renderLibTable('all'), 60);
  }
};


function updateAnatomyLiteBtn() {
  const enabled = document.documentElement.dataset.anatomyLite === '1';
  const btn = document.getElementById('anatomyLiteBtn');
  const desc = document.getElementById('anatomy-lite-desc');
  if(btn) {
    btn.textContent = enabled ? 'ON' : 'OFF';
    btn.classList.toggle('menu-action-btn-primary', enabled);
  }
  if(desc) desc.textContent = enabled ? 'Reduced glow, shadows & animations — better performance' : 'Full visuals active';
}
function setAnatomyLite(enabled) {
  document.documentElement.dataset.anatomyLite = enabled ? '1' : '0';
  try { localStorage.setItem('grnd_anatomy_lite', enabled ? '1' : '0'); } catch(e) {}
  updateAnatomyLiteBtn();
}
function toggleAnatomyLite() {
  setAnatomyLite(document.documentElement.dataset.anatomyLite !== '1');
}
// Sync button text/state now that the DOM is ready (defer fires post-parse).
updateAnatomyLiteBtn();
