/* ════════ services.js ════════
   Merged user-data/system services: METRICS + ALARMS + BACKUP.
   (Loads where metrics/alarms/backup used to, in that order.)
════════════════════════════════ */

/* ===== METRICS: PR board, training profile, body goals ===== */
/* ══ METRICS MODULE ══════════════════════════════════════════════
   Blocks: Summary Strip · PR Board · Training Profile · Body Goals
   + Consistency Tracker · Balance Score · Month-over-month
   Storage: grnd_metrics_pr · grnd_metrics_body · grnd_metrics_sessions
   Load order: after programs.js (needs PROGRAMS), before settings.js
════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ─── Storage keys ────────────────────────────────────────── */
  const PR_KEY       = 'grnd_metrics_pr';
  const BODY_KEY     = 'grnd_metrics_body';
  const SESSIONS_KEY = 'grnd_metrics_sessions';

  /* ─── Domain classification (libKey → domain) ──────────────── */
  const _DOM = {};
  [
    ['bodyweight', ['warmup','stretching','pushup','planche','pullup','chinup','combo',
                    'squat','core','dip','handstand','isometric','frontlever','backlever']],
    ['gym',        ['weighted','gymChest','gymBack','gymShoulders','gymLegs','gymArms','gymCore']],
    ['cardio',     ['cardioRunning','cardioCycling','cardioHIIT','cardioRowing',
                    'cardioRecovery','cardioMobility']]
  ].forEach(([d, keys]) => keys.forEach(k => { _DOM[k] = d; }));

  function domainOf(libKey) { return _DOM[libKey] || 'bodyweight'; }

  /* ─── Persistence ─────────────────────────────────────────── */
  function _ld(key, def) {
    try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : def; } catch(e) { return def; }
  }
  function _sv(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {} }

  function loadPR()        { return _ld(PR_KEY,       {}); }
  function savePR(d)       { _sv(PR_KEY, d); }
  function loadBody()      { return _ld(BODY_KEY,     { weightLog:[], targetWeight:null, height:null }); }
  function saveBody(d)     { _sv(BODY_KEY, d); }
  function loadSessions()  { return _ld(SESSIONS_KEY, []); }
  function saveSessions(d) { _sv(SESSIONS_KEY, d); }

  function _today() { return new Date().toISOString().slice(0,10); }

  function _logSession(type, domain) {
    const s = loadSessions();
    s.push({ d: _today(), type: type || 'exercise', domain: domain || null });
    saveSessions(s);
  }

  /* ─── Hooks ────────────────────────────────────────────────── */
  // Record session when an exercise is unlocked
  if (typeof window.onProgressSaved === 'function') {
    window.onProgressSaved(function (exKey, status) {
      if (status === 'unlocked') {
        const m = exKey.match(/^(.+)-\d+$/);
        _logSession('exercise', m ? domainOf(m[1]) : 'bodyweight');
        if (document.querySelector('#view-metrics.active')) setTimeout(renderMetrics, 0);
      }
    });
  }

  // Record session when a program dot is ticked ON
  document.addEventListener('DOMContentLoaded', function () {
    const _orig = window.toggleProgramDot;
    if (typeof _orig === 'function') {
      window.toggleProgramDot = function (programId, weekIdx, dotIdx, e) {
        _orig(programId, weekIdx, dotIdx, e);
        try {
          const t = JSON.parse(localStorage.getItem('grnd_prog_tracker_' + programId) || '{}');
          if ((t.dots || {})['w' + weekIdx + '_d' + dotIdx]) _logSession('program', null);
        } catch(_) {}
        if (document.querySelector('#view-metrics.active')) setTimeout(renderMetrics, 0);
      };
    }
  });

  // Chain view-changed so other modules' handlers still fire
  const _prevVC = window.onViewChanged;
  window.onViewChanged = function (toView, fromView) {
    if (typeof _prevVC === 'function') _prevVC(toView, fromView);
    if (toView === 'metrics') renderMetrics();
  };

  /* ─── isProgramCompleted (private copy — not exposed by programs.js) */
  function _isDone(p) {
    if (!p || !p.weeks_data || !p.weeks_data.length) return false;
    try {
      const t = JSON.parse(localStorage.getItem('grnd_prog_tracker_' + p.id) || '{}');
      const total = p.weeks_data.reduce((s, wk) => {
        const pw = parseInt((wk.sessions[0]?.label || '').match(/(\d+)×/)?.[1] || '3', 10);
        const mm = (wk.title || '').match(/(\d+)\s*[–-]\s*(\d+)/);
        const wks = mm ? parseInt(mm[2],10) - parseInt(mm[1],10) + 1 : 1;
        return s + pw * wks;
      }, 0);
      const done = Object.values(t.dots || {}).filter(Boolean).length;
      return total > 0 && done === total;
    } catch(_) { return false; }
  }

  /* ─── Stats ───────────────────────────────────────────────── */
  function _progress()  { return (typeof loadProgress  === 'function') ? loadProgress()  : {}; }
  function _libData()   { return (typeof LIB_DATA       !== 'undefined') ? LIB_DATA       : {}; }
  function _programs()  { return (typeof PROGRAMS        !== 'undefined') ? PROGRAMS        : []; }

  function _unlockedKeys() {
    const p = _progress();
    return Object.keys(p).filter(k => p[k] === 'unlocked');
  }

  function _exFromKey(key) {
    const m = key.match(/^(.+)-(\d+)$/);
    if (!m) return null;
    const [, lk, id] = m;
    const src = _libData()[lk];
    if (!src) return null;
    const arr = Array.isArray(src) ? src : (src.data || []);
    return arr.find(e => String(e.id) === id) || null;
  }

  function computeStats() {
    const keys = _unlockedKeys();

    let progs = 0;
    _programs().forEach(p => { if (_isDone(p)) progs++; });

    const muscleSet = new Set();
    keys.forEach(k => {
      const ex = _exFromKey(k);
      if (ex?.muscles) ex.muscles.forEach(mu => muscleSet.add(mu.n));
    });

    const prData = loadPR();
    let recentPR = null;
    Object.values(prData).forEach(pr => {
      if (!pr.entries?.length) return;
      const last = pr.entries[pr.entries.length - 1];
      if (!recentPR || last.d > recentPR.d) recentPR = { name: pr.name, v: last.v, u: pr.unit, d: last.d };
    });

    return { total: keys.length, programs: progs, muscles: muscleSet.size, recentPR };
  }

  /* ─── Domain distribution ─────────────────────────────────── */
  function computeDomainDist(mode) {
    const counts = { bodyweight:0, gym:0, cardio:0 };
    if (mode === 'exercises') {
      _unlockedKeys().forEach(k => {
        const mm = k.match(/^(.+)-\d+$/);
        if (mm) counts[domainOf(mm[1])]++;
      });
    } else {
      // Programs: name-lookup each exercise in completed programs
      const nameMap = {};
      Object.entries(_DOM).forEach(([lk, domain]) => {
        const src = _libData()[lk];
        if (!src) return;
        (Array.isArray(src) ? src : (src.data || [])).forEach(ex => {
          if (ex.name) nameMap[ex.name.toLowerCase()] = domain;
        });
      });
      _programs().filter(p => _isDone(p)).forEach(p => {
        p.weeks_data?.forEach(wk =>
          wk.sessions?.forEach(sess =>
            sess.exercises?.forEach(ex => {
              counts[nameMap[(ex.name || '').toLowerCase()] || 'bodyweight']++;
            })
          )
        );
      });
    }
    return counts;
  }

  /* ─── Muscle distribution ─────────────────────────────────── */
  function computeMuscleDist() {
    const counts = {};
    _unlockedKeys().forEach(k => {
      const ex = _exFromKey(k);
      if (!ex?.muscles) return;
      ex.muscles.forEach(mu => { counts[mu.n] = (counts[mu.n] || 0) + (mu.p ? 2 : 1); });
    });
    return counts;
  }

  /* ─── Balance score ───────────────────────────────────────── */
  const _PUSH = new Set(['Chest','Triceps','Front Delts','Anterior Deltoids','Serratus Anterior']);
  const _PULL = new Set(['Lats','Biceps','Rear Delts','Rhomboids','Traps','Teres Major']);
  const _LEGS = new Set(['Quadriceps','Hamstrings','Glutes','Gluteus Maximus','Calves','Hip Flexors']);
  const _CORE = new Set(['Core','Abs','Obliques','Erector Spinae','Transverse Abdominis']);

  function computeBalanceScore(md) {
    let push=0, pull=0, legs=0, core=0;
    Object.entries(md).forEach(([n,c]) => {
      if (_PUSH.has(n)) push+=c; else if (_PULL.has(n)) pull+=c;
      else if (_LEGS.has(n)) legs+=c; else if (_CORE.has(n)) core+=c;
    });
    const total = push+pull+legs+core;
    if (!total) return 0;
    const ideal = total/4;
    const variance = [push,pull,legs,core].reduce((s,v) => s + Math.abs(v-ideal), 0);
    return Math.round(Math.max(0, 1 - variance/(ideal*3)) * 100);
  }

  function _weakText(md) {
    const groups = {
      'Push': ['Chest','Triceps','Front Delts','Anterior Deltoids'],
      'Pull': ['Lats','Biceps','Rear Delts','Rhomboids'],
      'Legs': ['Quadriceps','Hamstrings','Glutes','Gluteus Maximus','Calves'],
      'Core': ['Core','Abs','Obliques']
    };
    const sugg = {
      Push: 'push-ups, dips, or bench press',
      Pull: 'pull-ups, rows, or lat pulldowns',
      Legs: 'squats, Romanian DLs, or Nordic curls',
      Core: 'hollow holds, L-sits, or ab wheel rollouts'
    };
    let grand = 0;
    const totals = Object.fromEntries(Object.entries(groups).map(([g, ms]) => {
      const v = ms.reduce((s,m) => s+(md[m]||0), 0);
      grand += v;
      return [g, v];
    }));
    if (!grand) return null;
    const sorted = Object.entries(totals).map(([g,v]) => ({ g, pct: Math.round(v/grand*100) })).sort((a,b)=>a.pct-b.pct);
    const w = sorted[0];
    if (w.pct >= 18) return null;
    return `${w.g} makes up only ${w.pct}% of your recent training — consider adding ${sugg[w.g]}.`;
  }

  /* ─── Month-over-month ────────────────────────────────────── */
  function computeMoM() {
    const s = loadSessions();
    const now = new Date();
    const tm = new Date(now.getFullYear(), now.getMonth(),   1).toISOString().slice(0,10);
    const lm = new Date(now.getFullYear(), now.getMonth()-1, 1).toISOString().slice(0,10);
    const le = new Date(now.getFullYear(), now.getMonth(),   0).toISOString().slice(0,10);
    const thisCount = s.filter(x => x.d >= tm).length;
    const lastCount = s.filter(x => x.d >= lm && x.d <= le).length;
    return { thisCount, lastCount, delta: thisCount - lastCount };
  }

  /* ─── Weekly buckets (last 8 weeks) ──────────────────────── */
  function computeWeeks() {
    const s = loadSessions();
    const now = new Date();
    return Array.from({ length: 8 }, (_, i) => {
      const end = new Date(now); end.setDate(now.getDate() - i*7);
      const start = new Date(end); start.setDate(end.getDate() - 6);
      const es = start.toISOString().slice(0,10), ee = end.toISOString().slice(0,10);
      return {
        label: start.toLocaleDateString('en-US',{month:'numeric',day:'numeric'}),
        count: s.filter(x => x.d >= es && x.d <= ee).length,
        isCurrent: i === 0
      };
    }).reverse();
  }

  /* ─── SVG chart helpers ───────────────────────────────────── */
  const D_COLORS = { bodyweight:'#e63946', gym:'#f4a261', cardio:'#2a9d5c' };
  const M_COLORS = ['#e63946','#f4a261','#2a9d5c','#4ac0e8','#d946ef',
                    '#fbbf24','#60a5fa','#f87171','#34d399','#a78bfa','#fb923c','#38bdf8'];

  function _donutPaths(slices, size) {
    const cx=size/2, cy=size/2, r=size*0.38, inn=size*0.22;
    const total = slices.reduce((s,x)=>s+x.value,0);
    let ang = -Math.PI/2;
    return slices.map(sl => {
      const sw = (sl.value/total)*2*Math.PI;
      const x1=cx+r*Math.cos(ang),y1=cy+r*Math.sin(ang);
      const x2=cx+r*Math.cos(ang+sw),y2=cy+r*Math.sin(ang+sw);
      const xi1=cx+inn*Math.cos(ang),yi1=cy+inn*Math.sin(ang);
      const xi2=cx+inn*Math.cos(ang+sw),yi2=cy+inn*Math.sin(ang+sw);
      const la=sw>Math.PI?1:0;
      const d=`M${x1},${y1}A${r},${r} 0 ${la} 1 ${x2},${y2}L${xi2},${yi2}A${inn},${inn} 0 ${la} 0 ${xi1},${yi1}Z`;
      ang+=sw;
      return `<path d="${d}" fill="${sl.color}" opacity="0.9"><title>${sl.label}: ${Math.round(sl.value/total*100)}%</title></path>`;
    }).join('');
  }

  function renderDonut(slices, size) {
    const s=size||180, total=slices.reduce((a,x)=>a+x.value,0);
    if (!total) return `<div class="metrics-empty">No data yet.</div>`;
    return `<div class="metrics-donut-row">
      <svg class="metrics-donut-svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}">${_donutPaths(slices,s)}</svg>
      <ul class="metrics-legend">${slices.filter(sl=>sl.value>0).map(sl=>{
        const pct=Math.round(sl.value/total*100);
        return `<li class="metrics-legend-item">
          <span class="metrics-legend-dot" style="background:${sl.color}"></span>
          <span class="metrics-legend-label">${sl.label}</span>
          <span class="metrics-legend-pct">${pct}%</span></li>`;
      }).join('')}</ul>
    </div>`;
  }

  function renderBarChart(weeks) {
    const W=320,H=160,pl=32,pr=16,pt=22,pb=38;
    const cW=W-pl-pr, cH=H-pt-pb;
    const maxC=Math.max(...weeks.map(w=>w.count),3);
    const gap=cW/weeks.length, bW=gap*0.52;
    const gridLines=[0.25,0.5,0.75,1].map(f=>{
      const y=pt+cH-f*cH;
      return `<line x1="${pl}" y1="${y.toFixed(1)}" x2="${(W-pr).toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--border)" stroke-width="0.8" opacity="0.6"/>`;
    }).join('');
    const bars=weeks.map((w,i)=>{
      const x=pl+i*gap+(gap-bW)/2, bH=maxC?(w.count/maxC)*cH:0, y=pt+cH-bH;
      const fill=w.isCurrent?'url(#bcGA)':'url(#bcGN)';
      const labelFill=w.isCurrent?'var(--accent)':'var(--text3)';
      return `<rect x="${x.toFixed(1)}" y="${Math.max(y,pt).toFixed(1)}" width="${bW.toFixed(1)}" height="${Math.max(bH,2).toFixed(1)}" rx="3" fill="${fill}"/>
${w.count?`<text x="${(x+bW/2).toFixed(1)}" y="${(Math.max(y,pt)-5).toFixed(1)}" font-size="8" fill="${labelFill}" text-anchor="middle" font-family="var(--mono)">${w.count}</text>`:''}
<text x="${(x+bW/2).toFixed(1)}" y="${(H-10).toFixed(1)}" font-size="7.5" fill="var(--text3)" text-anchor="middle" font-family="var(--mono)">${w.label}</text>`;
    }).join('');
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;display:block;margin:0 auto;overflow:visible">
      <defs>
        <linearGradient id="bcGA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity="1"/>
          <stop offset="100%" stop-color="var(--accent)" stop-opacity="0.45"/>
        </linearGradient>
        <linearGradient id="bcGN" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--border2)" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="var(--border2)" stop-opacity="0.25"/>
        </linearGradient>
      </defs>
      ${gridLines}
      <line x1="${pl}" y1="${(pt+cH).toFixed(1)}" x2="${(W-pr).toFixed(1)}" y2="${(pt+cH).toFixed(1)}" stroke="var(--border2)" stroke-width="1"/>
      ${bars}
      <text x="${pl-4}" y="${pt+5}" font-size="7" fill="var(--text3)" text-anchor="end" font-family="var(--mono)">${maxC}</text>
      <text x="${pl-4}" y="${(pt+cH+1).toFixed(1)}" font-size="7" fill="var(--text3)" text-anchor="end" font-family="var(--mono)">0</text>
    </svg>`;
  }

  function renderLineChart(entries, target, unit) {
    if (!entries?.length) return `<div class="metrics-empty" style="padding:20px 0">No entries yet — log your first value below.</div>`;
    const W=320,H=165,pl=40,pr=16,pt=20,pb=38;
    const cW=W-pl-pr, cH=H-pt-pb;
    const vals=entries.map(e=>e.v);
    const hasT=target!=null&&target>0;
    const allV=hasT?[...vals,target]:vals;
    const minV=Math.min(...allV)*0.88, maxV=Math.max(...allV)*1.12, rng=maxV-minV||1;
    const xP=i=>(pl+(i/Math.max(entries.length-1,1))*cW).toFixed(1);
    const yP=v=>(pt+cH-((v-minV)/rng)*cH).toFixed(1);
    const pts=entries.map((e,i)=>`${xP(i)},${yP(e.v)}`).join(' ');
    const areaPath=`M${xP(0)},${pt+cH} `+entries.map((e,i)=>`L${xP(i)},${yP(e.v)}`).join(' ')+` L${xP(entries.length-1)},${pt+cH} Z`;
    const gridLines=[0.25,0.5,0.75].map(f=>{
      const y=pt+f*cH;
      return `<line x1="${pl}" y1="${y.toFixed(1)}" x2="${(W-pr).toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--border)" stroke-width="0.7" opacity="0.5"/>`;
    }).join('');
    const dots=entries.map((e,i)=>{
      const b=!!e.badge;
      return `<circle cx="${xP(i)}" cy="${yP(e.v)}" r="${b?6:4}" fill="${b?'var(--gold)':'var(--accent)'}" stroke="var(--bg)" stroke-width="1.5"/>
${b?`<text x="${xP(i)}" y="${(+yP(e.v)-11).toFixed(1)}" text-anchor="middle" font-size="10" fill="var(--gold)">★</text>`:''}`;
    }).join('');
    const tLine=hasT?`<line x1="${pl}" y1="${yP(target)}" x2="${W-pr}" y2="${yP(target)}" stroke="var(--green)" stroke-dasharray="5,3" stroke-width="1.5" opacity="0.85"/>
<text x="${(W-pr-2).toFixed(1)}" y="${(+yP(target)-6).toFixed(1)}" fill="var(--green)" font-size="8" text-anchor="end" font-family="var(--mono)">GOAL ${target}${unit}</text>`:'';
    const yT=[minV,(minV+maxV)/2,maxV].map(v=>`<text x="${pl-5}" y="${(+yP(v)+3).toFixed(1)}" fill="var(--text3)" font-size="8" text-anchor="end" font-family="var(--mono)">${Math.round(v)}</text>`).join('');
    const idxs=entries.length<=3?entries.map((_,i)=>i):[0,Math.floor(entries.length/2),entries.length-1];
    const xT=idxs.map(i=>`<text x="${xP(i)}" y="${H-10}" fill="var(--text3)" font-size="7.5" text-anchor="middle" font-family="var(--mono)">${entries[i].d.slice(5)}</text>`).join('');
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;display:block;margin:0 auto;overflow:visible">
      <defs>
        <linearGradient id="lcAG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="var(--accent)" stop-opacity="0.02"/>
        </linearGradient>
      </defs>
      ${gridLines}
      <line x1="${pl}" y1="${(pt+cH).toFixed(1)}" x2="${(W-pr).toFixed(1)}" y2="${(pt+cH).toFixed(1)}" stroke="var(--border2)" stroke-width="1"/>
      <path d="${areaPath}" fill="url(#lcAG)"/>
      ${yT}${xT}
      <polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
      ${dots}${tLine}
    </svg>`;
  }

  /* ─── Body heatmap (reuses Anatomy Engine geometry) ───────────
     The body silhouette + muscle paths are pulled from
     window.GRND_ANATOMY so this map is pixel-identical to the
     Anatomy view. Muscles are tinted on a single scale:
     gray = never trained → purple = most trained. */

  // Exercise muscle name (lowercased) → one or more anatomy muscle keys
  const _MK = {};
  [
    ['pectorals',   ['chest','upper chest','lower chest','pectorals','pecs','pec']],
    ['deltoids',    ['anterior deltoids','front delts','front deltoids','lateral deltoids','side delts','deltoids','delts','shoulder']],
    ['reardelts',   ['rear deltoids','rear delts','posterior deltoids']],
    ['biceps',      ['biceps','brachialis','bicep']],
    ['triceps',     ['triceps','tricep']],
    ['forearms',    ['forearms','forearm','wrist flexors','grip']],
    ['serratus',    ['serratus anterior','serratus']],
    ['trapezius',   ['traps','trapezius','trap']],
    ['rhomboids',   ['rhomboids','rhomboid']],
    ['lats',        ['lats','latissimus dorsi','teres major','lat']],
    ['lowerback',   ['erector spinae','lower back','spinal erectors','erectors']],
    ['abs',         ['abs','rectus abdominis','core','abdominals']],
    ['deepcore',    ['transverse abdominis','deep core','tva']],
    ['obliques',    ['obliques','oblique']],
    ['quadriceps',  ['quadriceps','quads','quad']],
    ['hamstrings',  ['hamstrings','hamstring','hams']],
    ['glutes',      ['glutes','gluteus maximus','gluteus medius','glute','butt']],
    ['calves',      ['calves','calf','gastrocnemius','soleus']],
    ['tibialis',    ['tibialis','tibialis anterior','shins','shin']],
    ['peroneals',   ['peroneals','peroneal']],
    ['adductors',   ['adductors','adductor','inner thigh']],
    ['hipflexors',  ['hip flexors','hip flexor','hips','iliopsoas']],
    ['rotatorcuff', ['rotator cuff']],
    ['neck',        ['neck']],
    ['hands',       ['hands','hand']],
    ['feet',        ['feet','foot']],
  ].forEach(([key, names]) => names.forEach(n => { (_MK[n] = _MK[n] || []).push(key); }));

  // Broad/compound labels fan out across several anatomy keys
  const _MK_GROUP = {
    'back':         ['lats','rhomboids','trapezius'],
    'shoulders':    ['deltoids','reardelts'],
    'arms':         ['biceps','triceps','forearms'],
    'legs':         ['quadriceps','hamstrings','calves','glutes'],
    'upper body':   ['pectorals','lats','deltoids'],
    'lower body':   ['quadriceps','hamstrings','glutes','calves'],
  };

  function _muscleKeyCounts(md) {
    const out = {};
    Object.entries(md).forEach(([name, c]) => {
      const k = String(name).toLowerCase().trim();
      const keys = _MK[k] || _MK_GROUP[k];
      if (!keys) return;            // unknown / 'full body' → ignore
      keys.forEach(key => { out[key] = (out[key] || 0) + c; });
    });
    return out;
  }

  // Frequency → fill colour. 0 = neutral gray, scaling up to vivid purple.
  function _heatFill(count, max) {
    if (!count) return { fill: 'rgba(142,142,156,0.16)', stroke: 'rgba(142,142,156,0.32)' };
    const t = Math.min(1, 0.30 + 0.70 * (count / max));
    const a = [208, 190, 244], b = [114, 32, 198];   // pale lavender → deep purple
    const r  = Math.round(a[0] + (b[0]-a[0])*t);
    const g  = Math.round(a[1] + (b[1]-a[1])*t);
    const bl = Math.round(a[2] + (b[2]-a[2])*t);
    return { fill: `rgba(${r},${g},${bl},0.92)`, stroke: `rgba(${r},${g},${bl},1)` };
  }

  function renderHeatmap(muscleDist, view) {
    const A = window.GRND_ANATOMY;
    if (!A) return `<div class="metrics-empty" style="padding:24px 0">Body map unavailable.</div>`;
    const v = view === 'b' ? 'b' : 'f';

    const keyCounts = _muscleKeyCounts(muscleDist);
    const max   = Math.max(1, ...Object.values(keyCounts));
    const names = A.names || {};

    // Silhouette (faint) — identical to the Anatomy view body
    const body = A.BODY.map(p => {
      const attrs = Object.entries(p.a || {}).map(([k,val]) => `${k}="${val}"`).join(' ');
      const d = p.d ? `d="${p.d}"` : '';
      return `<${p.tag || 'path'} ${d} ${attrs} fill="var(--bg3,#e8e4da)" stroke="var(--border2,#c9c4b8)" stroke-width="1" opacity="0.5"/>`;
    }).join('');

    // Muscle regions, tinted by training frequency
    const regions = (v === 'b' ? A.BACK : A.FRONT).map(m => {
      const cnt = keyCounts[m.key] || 0;
      const { fill, stroke } = _heatFill(cnt, max);
      const nm = names[m.key] || m.key;
      const click = cnt === 0 ? `onclick="goTo('anatomy')" style="cursor:pointer"` : 'style="cursor:default"';
      return `<path d="${m.d}" fill="${fill}" stroke="${stroke}" stroke-width="0.8" ${click}>
        <title>${nm}${cnt ? ` — trained (${cnt} pts)` : ' — not trained yet · tap to explore'}</title></path>`;
    }).join('');

    return `<svg viewBox="${A.viewBox}" width="100%" style="max-width:172px;display:block;margin:0 auto" class="metrics-body-svg" role="img" aria-label="Muscle training heatmap">
      <g class="metrics-body-layer">${body}</g>
      <g class="metrics-muscle-layer">${regions}</g>
    </svg>
    <div class="metrics-heat-scale">
      <span class="metrics-heat-scale-label">Less</span>
      <span class="metrics-heat-scale-bar"></span>
      <span class="metrics-heat-scale-label">More</span>
    </div>`;
  }

  /* ─── Helpers ─────────────────────────────────────────────── */
  function _fdate(d) {
    if (!d) return '—';
    return new Date(d + 'T00:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  }

  /* Themed toast — replaces native alert() (which is off-theme and
     blocks the renderer). Auto-dismisses; stacks-safe (single node). */
  function _toast(msg, opts) {
    opts = opts || {};
    let t = document.getElementById('metricsToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'metricsToast';
      t.className = 'metrics-toast';
      document.body.appendChild(t);
    }
    t.classList.toggle('gold', !!opts.gold);
    t.innerHTML = `<span class="metrics-toast-icon">${opts.icon || '✓'}</span><span class="metrics-toast-msg">${msg}</span>`;
    // Force reflow so re-show re-triggers the transition
    void t.offsetWidth;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), opts.duration || 2800);
  }

  /* Themed confirm — replaces native confirm(). Calls onConfirm() on accept. */
  function _confirm(msg, onConfirm, opts) {
    opts = opts || {};
    let m = document.getElementById('metricsConfirm');
    if (!m) {
      m = document.createElement('div');
      m.id = 'metricsConfirm';
      m.className = 'metrics-confirm-overlay';
      m.innerHTML = `<div class="metrics-confirm-box" role="dialog" aria-modal="true">
        <div class="metrics-confirm-msg"></div>
        <div class="metrics-confirm-btns">
          <button type="button" class="metrics-confirm-cancel">CANCEL</button>
          <button type="button" class="metrics-confirm-ok">CONFIRM</button>
        </div></div>`;
      document.body.appendChild(m);
      m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
    }
    m.querySelector('.metrics-confirm-msg').textContent = msg;
    // Fresh button nodes to drop any stale handlers
    const okOld = m.querySelector('.metrics-confirm-ok');
    const caOld = m.querySelector('.metrics-confirm-cancel');
    const ok = okOld.cloneNode(false); ok.textContent = opts.okText || 'CONFIRM';
    ok.className = 'metrics-confirm-ok' + (opts.danger ? ' danger' : '');
    const ca = caOld.cloneNode(false); ca.textContent = 'CANCEL'; ca.className = 'metrics-confirm-cancel';
    okOld.replaceWith(ok); caOld.replaceWith(ca);
    ok.addEventListener('click', () => { m.classList.remove('open'); if (onConfirm) onConfirm(); });
    ca.addEventListener('click', () => { m.classList.remove('open'); });
    void m.offsetWidth;
    m.classList.add('open');
  }

  function _prCard(key, pr) {
    const best = pr.entries?.length ? pr.entries[pr.entries.length - 1] : null;
    const pct = (pr.target && best) ? Math.max(0, Math.min(100, Math.round((best.v / pr.target) * 100))) : null;
    return `<div class="metrics-pr-card">
      <div class="metrics-pr-name">${pr.name}${best?.badge?'<span class="metrics-badge-star"> ★</span>':''}</div>
      <div class="metrics-pr-best">${best ? `${best.v}<span class="metrics-pr-unit"> ${pr.unit}</span>` : '—'}</div>
      ${pr.target ? `<div class="metrics-pr-target">Goal: ${pr.target} ${pr.unit}${pct!==null?` · ${pct}%`:''}</div>` : ''}
      ${pct!==null ? `<div class="metrics-pr-prog"><div class="metrics-pr-prog-fill${pct>=100?' done':''}" style="width:${pct}%"></div></div>` : ''}
      <div class="metrics-pr-date">${best ? _fdate(best.d) : 'No entries'}</div>
      <div class="metrics-pr-btns">
        <button class="metrics-pr-log" onclick="metricsOpenLogPR('${key}')">+ LOG</button>
        <button class="metrics-pr-view" onclick="metricsCheckLog('${key}')">CHECK LOG</button>
      </div>
    </div>`;
  }

  /* ─── Main render ─────────────────────────────────────────── */
  let _domainMode   = 'exercises'; // 'exercises' | 'programs'
  let _activeTab    = 'domain';    // 'domain' | 'muscles' | 'body' | 'week'
  let _hmView       = 'f';         // 'f' | 'b'

  function renderMetrics() {
    const el = document.getElementById('view-metrics');
    if (!el) return;

    const stats   = computeStats();
    const prData  = loadPR();
    const prKeys  = Object.keys(prData);
    const dd      = computeDomainDist(_domainMode);
    const md      = computeMuscleDist();
    const balance = computeBalanceScore(md);
    const weakPt  = _weakText(md);
    const weeks   = computeWeeks();
    const mom     = computeMoM();
    const body    = loadBody();

    const domSlices = [
      { label:'Bodyweight', value:dd.bodyweight, color:D_COLORS.bodyweight },
      { label:'Gym',        value:dd.gym,        color:D_COLORS.gym        },
      { label:'Cardio',     value:dd.cardio,     color:D_COLORS.cardio     },
    ];

    const musSlices = Object.entries(md).sort((a,b)=>b[1]-a[1]).slice(0,10)
      .map(([name,count],i) => ({ label:name, value:count, color:M_COLORS[i%M_COLORS.length] }));

    const wLog = body.weightLog || [];
    const latestW = wLog.length ? wLog[wLog.length-1].v : null;
    const bmi = (latestW && body.height) ? (latestW/((body.height/100)**2)).toFixed(1) : null;

    el.querySelector('#metrics-content').innerHTML = `
      <!-- Summary Strip -->
      <div class="metrics-summary-strip">
        <div class="metrics-stat">
          <div class="metrics-stat-ico">💪</div>
          <div class="metrics-stat-num">${stats.total}</div>
          <div class="metrics-stat-label">Exercises<br>Completed</div>
        </div>
        <div class="metrics-stat">
          <div class="metrics-stat-ico">📋</div>
          <div class="metrics-stat-num">${stats.programs}</div>
          <div class="metrics-stat-label">Programs<br>Finished</div>
        </div>
        <div class="metrics-stat">
          <div class="metrics-stat-ico">🫀</div>
          <div class="metrics-stat-num">${stats.muscles}</div>
          <div class="metrics-stat-label">Muscle Groups<br>Trained</div>
        </div>
        <div class="metrics-stat ${stats.recentPR ? '' : 'metrics-stat-dim'}">
          <div class="metrics-stat-ico">🏆</div>
          ${stats.recentPR
            ? `<div class="metrics-stat-num">${stats.recentPR.v}<span class="metrics-stat-small"> ${stats.recentPR.u}</span></div>
               <div class="metrics-stat-label">Latest PR<br><span class="metrics-stat-sub">${stats.recentPR.name.length>22?stats.recentPR.name.slice(0,21)+'…':stats.recentPR.name}</span></div>`
            : `<div class="metrics-stat-num metrics-stat-dash">—</div><div class="metrics-stat-label">Latest PR</div>`}
        </div>
      </div>

      <!-- Injuries entry point -->
      <div class="metrics-block">
        <div style="padding:10px 0">
          <button class="contact-link-row" style="width:100%;box-sizing:border-box" onclick="if(typeof openInjuryModal==='function')openInjuryModal()">
            <span style="font-size:1rem;flex-shrink:0">🩹</span>
            <div class="contact-link-info" style="flex:1">
              <span class="contact-link-name">INJURIES</span>
              <span class="contact-link-sub" id="inj-metrics-sub">No areas flagged</span>
            </div>
            <span style="font-family:var(--mono);font-size:0.75rem;opacity:0.5">→</span>
          </button>
        </div>
      </div>

      <!-- PR Board -->
      <div class="metrics-block">
        <div class="section-label">PR BOARD
          <button class="view-toggle-btn" onclick="metricsAddPR()">+ ADD EXERCISE</button>
        </div>
        ${prKeys.length
          ? `<div class="metrics-pr-grid">${prKeys.map(k=>_prCard(k,prData[k])).join('')}</div>`
          : `<div class="metrics-empty-block">No personal records tracked yet — tap <strong>+ ADD EXERCISE</strong> to pick one and start logging.</div>`}
      </div>

      <!-- Training Dashboard (tabbed) -->
      <div class="metrics-dashboard">
        <div class="metrics-tabs">
          <button class="metrics-tab${_activeTab==='domain'?' active':''}" onclick="metricsSetTab('domain')">DOMAIN</button>
          <button class="metrics-tab${_activeTab==='muscles'?' active':''}" onclick="metricsSetTab('muscles')">MUSCLES</button>
          <button class="metrics-tab${_activeTab==='body'?' active':''}" onclick="metricsSetTab('body')">BODY</button>
          <button class="metrics-tab${_activeTab==='week'?' active':''}" onclick="metricsSetTab('week')">WEEK</button>
        </div>

        ${_activeTab === 'domain' ? `
        <div class="metrics-tab-panel">
          <div class="metrics-tab-toolbar">
            <span class="metrics-tab-toolabel">Source</span>
            <div class="metrics-segtab">
              <button class="metrics-segtab-btn${_domainMode==='exercises'?' active':''}" onclick="metricsSetDomain('exercises')">Exercises</button>
              <button class="metrics-segtab-btn${_domainMode==='programs'?' active':''}" onclick="metricsSetDomain('programs')">Programs</button>
            </div>
          </div>
          ${renderDonut(domSlices)}
          ${(mom.thisCount>0||mom.lastCount>0) ? `
          <div class="metrics-mom">
            <span>This month: <strong>${mom.thisCount}</strong> sessions</span>
            <span class="metrics-mom-delta ${mom.delta>=0?'pos':'neg'}">${mom.delta>=0?'+':''}${mom.delta} vs last month</span>
          </div>` : ''}
        </div>
        ` : ''}

        ${_activeTab === 'muscles' ? `
        <div class="metrics-tab-panel">
          <div class="metrics-muscle-layout">
            <div class="metrics-muscle-donut">${renderDonut(musSlices, 160)}</div>
            <div class="metrics-heatmap-col">
              <div class="metrics-segtab" style="margin:0 auto 8px">
                <button class="metrics-segtab-btn${_hmView==='f'?' active':''}" onclick="metricsSetHeatmap('f')">Front</button>
                <button class="metrics-segtab-btn${_hmView==='b'?' active':''}" onclick="metricsSetHeatmap('b')">Back</button>
              </div>
              ${renderHeatmap(md, _hmView)}
              <div class="metrics-anatomy-hint">Tap dim regions → Anatomy</div>
            </div>
          </div>
          ${weakPt ? `<div class="metrics-weak-point">⚠ ${weakPt}</div>` : ''}
          <div class="metrics-balance">
            <span class="metrics-balance-label">Balance Score</span>
            <div class="metrics-balance-bar-wrap"><div class="metrics-balance-fill" style="width:${balance}%"></div></div>
            <span class="metrics-balance-num">${balance}/100</span>
          </div>
        </div>
        ` : ''}

        ${_activeTab === 'body' ? `
        <div class="metrics-tab-panel">
          <div class="metrics-body-fields">
            <div class="metrics-body-field">
              <div class="metrics-field-label">Weight (kg)</div>
              <div class="metrics-field-row">
                <input class="metrics-input" id="mWeightIn" type="number" min="20" max="400" step="0.1" placeholder="${latestW||'—'}"/>
                <button class="metrics-field-btn" onclick="metricsLogWeight()">LOG</button>
              </div>
            </div>
            <div class="metrics-body-field">
              <div class="metrics-field-label">Target (kg)</div>
              <div class="metrics-field-row">
                <input class="metrics-input" id="mTargetIn" type="number" min="20" max="400" step="0.1" value="${body.targetWeight||''}"/>
                <button class="metrics-field-btn" onclick="metricsSetTarget()">SET</button>
              </div>
            </div>
            <div class="metrics-body-field">
              <div class="metrics-field-label">Height (cm)</div>
              <div class="metrics-field-row">
                <input class="metrics-input" id="mHeightIn" type="number" min="100" max="250" step="1" value="${body.height||''}"/>
                <button class="metrics-field-btn" onclick="metricsSetHeight()">SET</button>
              </div>
            </div>
          </div>
          ${latestW ? `<div class="metrics-body-summary">
            <span>Current: <strong>${latestW} kg</strong></span>
            ${body.targetWeight?`<span>Target: <strong>${body.targetWeight} kg</strong></span><span>Δ <strong>${(latestW-body.targetWeight).toFixed(1)} kg</strong></span>`:''}
            ${bmi?`<span>BMI: <strong>${bmi}</strong></span>`:''}
          </div>` : ''}
          ${wLog.length>1 ? `<div class="metrics-weight-chart">${renderLineChart(wLog.map(e=>({v:e.v,d:e.d})),body.targetWeight,'kg')}</div>` : ''}
          ${wLog.length ? `<div class="metrics-weight-log">
            ${wLog.slice(-8).reverse().map(e=>`<div class="metrics-weight-row"><span>${e.v} kg</span><span class="metrics-log-date">${_fdate(e.d)}</span></div>`).join('')}
          </div>` : ''}
        </div>
        ` : ''}

        ${_activeTab === 'week' ? `
        <div class="metrics-tab-panel metrics-tab-panel-week">
          ${renderBarChart(weeks)}
          <div class="metrics-consistency-note">Tracked from exercise unlocks &amp; program sessions since METRICS was installed.</div>
        </div>
        ` : ''}
      </div>

    `;

    // Sync the injuries row subtitle
    if (typeof window.syncInjuryMetricsRow === 'function') window.syncInjuryMetricsRow();

    // Make inputs user-selectable (global CSS blocks selection)
    el.querySelectorAll('.metrics-input').forEach(inp => {
      inp.style.webkitUserSelect = 'text';
      inp.style.userSelect = 'text';
    });
  }

  /* ─── Tab / domain / heatmap handlers ────────────────────── */
  window.metricsSetTab     = function (t) { _activeTab   = t; renderMetrics(); };
  window.metricsSetDomain  = function (m) { _domainMode  = m; renderMetrics(); };
  window.metricsSetHeatmap = function (v) { _hmView      = v; renderMetrics(); };

  /* ─── Add PR flow ─────────────────────────────────────────── */
  let _addCandidates = [], _addKey = null, _addName = null, _addUnit = 'reps';

  window.metricsAddPR = function () {
    const progress = _progress(), libData = _libData(), prData = loadPR();
    _addCandidates = [];
    _unlockedKeys().forEach(key => {
      if (prData[key]) return;
      const ex = _exFromKey(key);
      if (ex) _addCandidates.push({ key, name: ex.name });
    });
    _addCandidates.sort((a,b) => a.name.localeCompare(b.name));
    _addKey = null; _addName = null; _addUnit = 'reps';

    const ov = document.getElementById('metricsAddOverlay');
    if (!ov) return;
    ov.querySelector('#metricsAddPanel1').style.display = '';
    ov.querySelector('#metricsAddPanel2').style.display = 'none';
    ov.querySelector('#metricsAddSearch').value = '';
    _renderAddCandidates('');
    ov.classList.add('open');
  };

  function _renderAddCandidates(q) {
    const list = document.getElementById('metricsAddList');
    if (!list) return;
    const filtered = q ? _addCandidates.filter(c => c.name.toLowerCase().includes(q.toLowerCase())) : _addCandidates;
    if (!filtered.length) {
      list.innerHTML = `<div class="metrics-empty-block">${_addCandidates.length ? 'No match.' : 'All unlocked exercises are already on the board.'}</div>`;
      return;
    }
    list.innerHTML = filtered.map(c =>
      `<div class="metrics-add-item" onclick="metricsPickEx('${c.key}','${c.name.replace(/\\/g,'\\\\').replace(/'/g,"\\'")}')">
        <span>${c.name}</span><span class="metrics-add-arrow">→</span>
      </div>`).join('');
  }

  window.metricsFilterAdd = function (q) { _renderAddCandidates(q); };

  window.metricsPickEx = function (key, name) {
    _addKey = key; _addName = name;
    const ov = document.getElementById('metricsAddOverlay');
    if (!ov) return;
    ov.querySelector('#metricsPickedName').textContent = name;
    ov.querySelector('#metricsAddTarget').value = '';
    // Reset unit buttons
    ov.querySelectorAll('.metrics-unit-btn').forEach(b => b.classList.toggle('active', b.dataset.unit === 'reps'));
    _addUnit = 'reps';
    ov.querySelector('#metricsAddPanel1').style.display = 'none';
    ov.querySelector('#metricsAddPanel2').style.display = '';
  };

  window.metricsSelectUnit = function (btn) {
    document.querySelectorAll('.metrics-unit-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    _addUnit = btn.dataset.unit;
  };

  window.metricsConfirmAdd = function () {
    if (!_addKey || !_addName) return;
    const prData = loadPR();
    const targetEl = document.getElementById('metricsAddTarget');
    const target = targetEl ? parseFloat(targetEl.value) || null : null;
    prData[_addKey] = { name: _addName, unit: _addUnit, entries: [], target: target && target > 0 ? target : null };
    savePR(prData);
    metricsCloseAdd();
    renderMetrics();
  };

  window.metricsCloseAdd = function () {
    const ov = document.getElementById('metricsAddOverlay');
    if (ov) ov.classList.remove('open');
  };

  /* ─── Log PR value flow ────────────────────────────────────── */
  let _logPRKey = null;

  window.metricsOpenLogPR = function (key) {
    _logPRKey = key;
    const pr = loadPR()[key];
    if (!pr) return;
    const ov = document.getElementById('metricsLogPROverlay');
    if (!ov) return;
    ov.querySelector('#metricsLogPRTitle').textContent = pr.name;
    ov.querySelector('#metricsLogPRLabel').textContent = `Value (${pr.unit})`;
    ov.querySelector('#metricsLogPRInput').value = '';
    ov.classList.add('open');
    setTimeout(() => { ov.querySelector('#metricsLogPRInput').focus(); }, 180);
  };

  window.metricsSubmitLogPR = function () {
    const inp = document.getElementById('metricsLogPRInput');
    if (!inp || !_logPRKey) return;
    const v = parseFloat(inp.value);
    if (isNaN(v) || v <= 0) return;
    const prData = loadPR();
    const pr = prData[_logPRKey];
    if (!pr) return;
    if (!pr.entries) pr.entries = [];
    const prev = pr.entries[pr.entries.length - 1];
    // Milestone badges
    let badge = null;
    if (pr.target && prev && prev.v < pr.target && v >= pr.target) badge = 'goal';
    const rounds = [5,10,15,20,25,50,100,150,200];
    if (!badge && rounds.some(r => v >= r && (!prev || prev.v < r))) badge = 'milestone';
    pr.entries.push({ v, d: _today(), badge });
    savePR(prData);
    metricsCloseLogPR();
    renderMetrics();
    if (badge) {
      const msg = badge === 'goal'
        ? `Goal reached — ${v} ${pr.unit} on ${pr.name}!`
        : `Milestone — ${v} ${pr.unit} on ${pr.name}!`;
      _toast(msg, { gold: true, icon: '★', duration: 3400 });
    }
  };

  window.metricsCloseLogPR = function () {
    const ov = document.getElementById('metricsLogPROverlay');
    if (ov) ov.classList.remove('open');
  };

  /* ─── Check Log overlay ───────────────────────────────────── */
  let _checkLogKey = null;

  window.metricsCheckLog = function (key) {
    _checkLogKey = key;
    const prData = loadPR();
    const pr = prData[key];
    if (!pr) return;
    const ov = document.getElementById('metricsCheckLogOverlay');
    if (!ov) return;
    ov.querySelector('#mclTitle').textContent = pr.name;
    ov.querySelector('#mclChart').innerHTML = renderLineChart(pr.entries || [], pr.target, pr.unit);
    ov.querySelector('#mclHistory').innerHTML = pr.entries?.length
      ? pr.entries.slice().reverse().map(e =>
          `<div class="metrics-log-row${e.badge?' metrics-log-badge':''}">
            <span class="metrics-log-icon">${e.badge?'★':'·'}</span>
            <span class="metrics-log-val">${e.v} ${pr.unit}</span>
            <span class="metrics-log-date">${_fdate(e.d)}</span>
          </div>`).join('')
      : `<div class="metrics-empty-block">No entries yet.</div>`;
    ov.classList.add('open');
  };

  window.metricsCloseLog = function () {
    const ov = document.getElementById('metricsCheckLogOverlay');
    if (ov) ov.classList.remove('open');
  };

  window.metricsDeleteLast = function () {
    if (!_checkLogKey) return;
    const prData = loadPR();
    const pr = prData[_checkLogKey];
    if (!pr?.entries?.length) return;
    _confirm('Remove the most recent entry?', () => {
      const fresh = loadPR();
      const p = fresh[_checkLogKey];
      if (!p?.entries?.length) return;
      p.entries.pop();
      savePR(fresh);
      metricsCheckLog(_checkLogKey);
      renderMetrics();
    }, { danger: true, okText: 'REMOVE' });
  };

  window.metricsRemoveFromBoard = function () {
    if (!_checkLogKey) return;
    const name = loadPR()[_checkLogKey]?.name || 'this exercise';
    _confirm(`Remove “${name}” from the PR board? Its logged history will be deleted.`, () => {
      const fresh = loadPR();
      delete fresh[_checkLogKey];
      savePR(fresh);
      metricsCloseLog();
      renderMetrics();
    }, { danger: true, okText: 'REMOVE' });
  };

  /* ─── Body goals handlers ─────────────────────────────────── */
  window.metricsLogWeight = function () {
    const inp = document.getElementById('mWeightIn');
    if (!inp) return;
    const v = parseFloat(inp.value);
    if (isNaN(v) || v < 20 || v > 400) return;
    const b = loadBody();
    b.weightLog = b.weightLog || [];
    b.weightLog.push({ v, d: _today() });
    if (b.weightLog.length > 365) b.weightLog.splice(0, b.weightLog.length - 365);
    saveBody(b);
    inp.value = '';
    renderMetrics();
  };

  window.metricsSetTarget = function () {
    const inp = document.getElementById('mTargetIn');
    if (!inp) return;
    const v = parseFloat(inp.value);
    if (isNaN(v) || v < 20 || v > 400) return;
    const b = loadBody(); b.targetWeight = v; saveBody(b);
    renderMetrics();
  };

  window.metricsSetHeight = function () {
    const inp = document.getElementById('mHeightIn');
    if (!inp) return;
    const v = parseFloat(inp.value);
    if (isNaN(v) || v < 100 || v > 250) return;
    const b = loadBody(); b.height = v; saveBody(b);
    renderMetrics();
  };

})();


/* ===== ALARMS: local reminders + notifications ===== */
/* ══ ALARM / NOTIFICATION SYSTEM (MVP) ════════════════════════════
   A small, robust local reminder engine for future alerts
   (eating, workout, rest-timer …). Survives reloads, works with or
   without OS Notification permission, and needs zero asset files.

   Public API (window.GRNDAlarm):
     open() / close()           — the "Alarm for ur program" sheet
     notify(title, body, opts)  — fire a notification right now
     schedule(label, fireAtMs)  — arm an alarm for an absolute time
     requestPermission()        — ask for OS notification permission

   Storage: grnd_alarms = [{ id, label, fireAt, created }]
   Load order: any time after the DOM exists (defers its own init).
══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const KEY = 'grnd_alarms';
  let _mode = 'in';          // 'in' = countdown · 'at' = clock time
  let _actx = null;          // lazy WebAudio context (created on a gesture)

  /* ─── Storage ─────────────────────────────────────────────── */
  function _load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (_) { return []; }
  }
  function _save(arr) {
    try { localStorage.setItem(KEY, JSON.stringify(arr)); } catch (_) {}
  }
  function _remove(id) { _save(_load().filter(a => a.id !== id)); }

  /* ─── Sound (generated, no asset) ─────────────────────────── */
  // Create/resume the audio context during a user gesture so the
  // chime can still fire later from the (gesture-less) timer tick.
  function _primeAudio() {
    try {
      _actx = _actx || new (window.AudioContext || window.webkitAudioContext)();
      if (_actx.state === 'suspended') _actx.resume();
    } catch (_) {}
  }
  function _chime() {
    // Custom alarm sound (set in Preferences) takes priority over the
    // generated chime when the user has one saved.
    try {
      var customUrl = window.getCustomAlarmURL && window.getCustomAlarmURL();
      if (customUrl) {
        var a = new Audio(customUrl);
        a.volume = 0.85;
        var p = a.play();
        if (p && typeof p.catch === 'function') p.catch(function () {});
        return;
      }
    } catch (_) {}
    try {
      _actx = _actx || new (window.AudioContext || window.webkitAudioContext)();
      if (_actx.state === 'suspended') _actx.resume();
      const now = _actx.currentTime;
      [659.25, 783.99, 1046.5].forEach((f, i) => {     // E5 · G5 · C6
        const o = _actx.createOscillator(), g = _actx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        const t = now + i * 0.17;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.25, t + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
        o.connect(g).connect(_actx.destination);
        o.start(t); o.stop(t + 0.55);
      });
    } catch (_) {}
  }

  /* ─── Notification permission ─────────────────────────────── */
  function _supported() { return typeof Notification !== 'undefined'; }
  function requestPermission() {
    if (!_supported()) return Promise.resolve('unsupported');
    if (Notification.permission === 'granted') return Promise.resolve('granted');
    return Notification.requestPermission().then(p => { _renderPerm(); return p; });
  }

  /* ─── Fire a notification (now) ───────────────────────────── */
  function notify(title, body, opts) {
    opts = opts || {};
    // OS notification when allowed (works even if tab is hidden)
    if (_supported() && Notification.permission === 'granted') {
      try { new Notification(title, { body: body || '', tag: opts.tag || 'grnd', icon: opts.icon }); } catch (_) {}
    }
    _banner(title, body, opts.late);
    if (opts.silent !== true) _chime();
    if (navigator.vibrate) { try { navigator.vibrate([120, 60, 120]); } catch (_) {} }
  }

  /* ─── In-app banner (always shown, themed) ────────────────── */
  function _banner(title, body, late) {
    let b = document.getElementById('alarmBanner');
    if (!b) {
      b = document.createElement('div');
      b.id = 'alarmBanner';
      b.className = 'alarm-banner';
      document.body.appendChild(b);
    }
    b.innerHTML = `<span class="alarm-banner-icon">⏰</span>
      <div class="alarm-banner-text">
        <div class="alarm-banner-title">${_esc(title)}</div>
        ${body ? `<div class="alarm-banner-body">${_esc(body)}${late ? ' · (missed while away)' : ''}</div>` : ''}
      </div>
      <button class="alarm-banner-close" aria-label="Dismiss">✕</button>`;
    b.querySelector('.alarm-banner-close').onclick = () => b.classList.remove('show');
    void b.offsetWidth;
    b.classList.add('show');
    clearTimeout(b._t);
    b._t = setTimeout(() => b.classList.remove('show'), 9000);
  }

  function _esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  /* ─── Scheduling ──────────────────────────────────────────── */
  function schedule(label, fireAt) {
    const arr = _load();
    arr.push({ id: 'al_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
               label: label || 'Reminder', fireAt, created: Date.now() });
    _save(arr);
    _renderList();
    return true;
  }

  function _fire(a, late) {
    notify(a.label || 'Reminder', late ? 'This reminder came due while you were away.'
                                        : 'Time for: ' + (a.label || 'your reminder') + '.', { late, tag: a.id });
    _remove(a.id);
  }

  // 1-second heartbeat: fires due alarms, refreshes any open countdown.
  function _tick() {
    const now = Date.now();
    _load().forEach(a => { if (a.fireAt <= now) _fire(a, now - a.fireAt > 60000); });
    if (_isOpen()) _renderList();
  }

  /* ─── UI: overlay injection ───────────────────────────────── */
  function _ensureOverlay() {
    if (document.getElementById('programAlarmOverlay')) return;
    const ov = document.createElement('div');
    ov.className = 'modal-overlay';
    ov.id = 'programAlarmOverlay';
    ov.addEventListener('click', e => { if (e.target === ov) close(); });
    ov.innerHTML = `
      <div class="muscle-modal alarm-modal">
        <div class="modal-handle"></div>
        <div class="modal-header">
          <div>
            <div class="modal-label">Reminders</div>
            <div class="modal-name">⏰ Program Alarm</div>
          </div>
          <button class="modal-close" id="alarmCloseBtn">✕</button>
        </div>
        <div class="modal-divider"></div>
        <div class="modal-body alarm-body">
          <div class="alarm-perm" id="alarmPermRow"></div>

          <div class="alarm-field">
            <label class="alarm-flabel" for="alarmLabel">Label</label>
            <input class="alarm-input" id="alarmLabel" type="text" maxlength="48" placeholder="Workout reminder" value="Workout reminder">
          </div>

          <div class="alarm-mode">
            <button class="alarm-mode-btn active" data-mode="in">In…</button>
            <button class="alarm-mode-btn" data-mode="at">At time…</button>
          </div>

          <div class="alarm-pane" id="alarmPaneIn">
            <div class="alarm-chips">
              ${[5, 15, 30, 45, 60, 90].map(m => `<button class="alarm-chip" data-min="${m}">${m}m</button>`).join('')}
            </div>
            <div class="alarm-field-row">
              <input class="alarm-input alarm-num" id="alarmMinutes" type="number" min="1" max="1440" value="30">
              <span class="alarm-unit">minutes from now</span>
            </div>
          </div>

          <div class="alarm-pane" id="alarmPaneAt" style="display:none">
            <div class="alarm-field-row">
              <input class="alarm-input alarm-num" id="alarmTime" type="time">
              <span class="alarm-unit">today (or tomorrow if past)</span>
            </div>
          </div>

          <button class="alarm-set-btn" id="alarmSetBtn">SET ALARM</button>
          <button class="alarm-test-btn" id="alarmTestBtn">▶ Test notification (5s)</button>

          <div class="alarm-active-hdr" id="alarmActiveHdr"></div>
          <div class="alarm-list" id="alarmList"></div>
        </div>
      </div>`;
    document.body.appendChild(ov);

    // Wire events (delegation + direct)
    ov.querySelector('#alarmCloseBtn').onclick = close;
    ov.querySelector('#alarmSetBtn').onclick = setFromUI;
    ov.querySelector('#alarmTestBtn').onclick = test;
    ov.querySelectorAll('.alarm-mode-btn').forEach(b =>
      b.addEventListener('click', () => setMode(b.dataset.mode)));
    ov.querySelectorAll('.alarm-chip').forEach(c =>
      c.addEventListener('click', () => {
        const inp = document.getElementById('alarmMinutes');
        if (inp) inp.value = c.dataset.min;
      }));
    // Make inputs selectable (global CSS blocks text selection)
    ov.querySelectorAll('.alarm-input').forEach(i => { i.style.userSelect = 'text'; i.style.webkitUserSelect = 'text'; });
    ov.querySelector('#alarmPermRow').addEventListener('click', e => {
      if (e.target.closest('#alarmEnableBtn')) requestPermission();
    });
  }

  function _isOpen() {
    const ov = document.getElementById('programAlarmOverlay');
    return !!ov && ov.classList.contains('open');
  }

  function open() {
    _ensureOverlay();
    const ov = document.getElementById('programAlarmOverlay');
    // default clock time = now + 30 min
    const t = new Date(Date.now() + 30 * 60000);
    const ti = ov.querySelector('#alarmTime');
    if (ti) ti.value = String(t.getHours()).padStart(2, '0') + ':' + String(t.getMinutes()).padStart(2, '0');
    setMode('in');
    _renderPerm();
    _renderList();
    void ov.offsetWidth;
    ov.classList.add('open');
  }
  function close() {
    const ov = document.getElementById('programAlarmOverlay');
    if (ov) ov.classList.remove('open');
  }

  function setMode(m) {
    _mode = m === 'at' ? 'at' : 'in';
    const ov = document.getElementById('programAlarmOverlay');
    if (!ov) return;
    ov.querySelectorAll('.alarm-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === _mode));
    ov.querySelector('#alarmPaneIn').style.display = _mode === 'in' ? '' : 'none';
    ov.querySelector('#alarmPaneAt').style.display = _mode === 'at' ? '' : 'none';
  }

  function setFromUI() {
    const label = (document.getElementById('alarmLabel').value || 'Reminder').trim() || 'Reminder';
    let fireAt;
    if (_mode === 'in') {
      const mins = parseFloat(document.getElementById('alarmMinutes').value);
      if (isNaN(mins) || mins <= 0) { _banner('Enter a time', 'Minutes must be greater than zero.'); return; }
      fireAt = Date.now() + mins * 60000;
    } else {
      const v = document.getElementById('alarmTime').value;
      if (!v) { _banner('Pick a time', 'Choose a clock time first.'); return; }
      const [h, mn] = v.split(':').map(Number);
      const d = new Date(); d.setHours(h, mn, 0, 0);
      if (d.getTime() <= Date.now()) d.setDate(d.getDate() + 1);   // roll to tomorrow
      fireAt = d.getTime();
    }
    // Prime audio + ask permission on this user gesture
    _primeAudio();
    if (_supported() && Notification.permission === 'default') requestPermission();
    schedule(label, fireAt);
    _flash('#alarmSetBtn', 'ALARM SET ✓');
  }

  function test() {
    _primeAudio();
    if (_supported() && Notification.permission === 'default') requestPermission();
    schedule('Test reminder', Date.now() + 5000);
    _flash('#alarmTestBtn', 'Firing in 5s…');
  }

  function _flash(sel, txt) {
    const el = document.querySelector(sel);
    if (!el) return;
    const old = el.textContent;
    el.textContent = txt; el.classList.add('flash');
    setTimeout(() => { el.textContent = old; el.classList.remove('flash'); }, 1600);
  }

  /* ─── UI: render permission + active list ─────────────────── */
  function _renderPerm() {
    const row = document.getElementById('alarmPermRow');
    if (!row) return;
    if (!_supported()) {
      row.className = 'alarm-perm warn';
      row.innerHTML = `In-app alerts + sound only (this browser has no notification support).`;
      return;
    }
    if (Notification.permission === 'granted') {
      row.className = 'alarm-perm ok';
      row.innerHTML = `✓ Notifications enabled — alerts work even when this tab is in the background.`;
    } else if (Notification.permission === 'denied') {
      row.className = 'alarm-perm warn';
      row.innerHTML = `Notifications blocked. You'll still get in-app alerts + sound while GRND is open.`;
    } else {
      row.className = 'alarm-perm';
      row.innerHTML = `<span>Enable OS notifications for background alerts.</span>
        <button class="alarm-enable-btn" id="alarmEnableBtn">ENABLE</button>`;
    }
  }

  function _fmtRemain(ms) {
    if (ms < 0) ms = 0;
    const s = Math.round(ms / 1000);
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    if (h) return `${h}h ${m}m`;
    if (m) return `${m}m ${String(sec).padStart(2, '0')}s`;
    return `${sec}s`;
  }

  function _renderList() {
    const list = document.getElementById('alarmList');
    const hdr = document.getElementById('alarmActiveHdr');
    if (!list) return;
    const arr = _load().sort((a, b) => a.fireAt - b.fireAt);
    if (hdr) hdr.textContent = arr.length ? `ACTIVE ALARMS (${arr.length})` : '';
    if (!arr.length) { list.innerHTML = `<div class="alarm-empty">No alarms set.</div>`; return; }
    const now = Date.now();
    list.innerHTML = arr.map(a => `
      <div class="alarm-row">
        <div class="alarm-row-main">
          <div class="alarm-row-label">${_esc(a.label)}</div>
          <div class="alarm-row-when">${_fmtClock(a.fireAt)}</div>
        </div>
        <div class="alarm-row-remain">${_fmtRemain(a.fireAt - now)}</div>
        <button class="alarm-row-cancel" data-id="${a.id}" aria-label="Cancel">✕</button>
      </div>`).join('');
    list.querySelectorAll('.alarm-row-cancel').forEach(btn =>
      btn.addEventListener('click', () => { _remove(btn.dataset.id); _renderList(); }));
  }

  function _fmtClock(ms) {
    const d = new Date(ms);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const day = new Date(ms); day.setHours(0, 0, 0, 0);
    const t = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    return day.getTime() === today.getTime() ? t : 'tomorrow ' + t;
  }

  /* ─── Boot ────────────────────────────────────────────────── */
  function _init() {
    // Re-arm: fire anything that came due while the app was closed.
    const now = Date.now();
    _load().forEach(a => { if (a.fireAt <= now) _fire(a, true); });
    setInterval(_tick, 1000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _init);
  else _init();

  /* ─── Export ──────────────────────────────────────────────── */
  window.GRNDAlarm = { open, close, notify, schedule, requestPermission, setMode, setFromUI, test };
})();


/* ===== BACKUP: export/import + IndexedDB mirror ===== */
/* ══ BACKUP / RESTORE — durable save system ═══════════════════════
   Protects against data loss when a browser clears cache/history.
   Three layers, all lightweight & non-blocking:
     1. Export — download a .json of ALL GRND data (true off-device
        backup the user controls; survives any cache clear / device).
     2. Import — restore from that .json on any device.
     3. IndexedDB auto-mirror + navigator.storage.persist() — a
        same-device safety net that can silently recover data if
        localStorage gets wiped but IndexedDB survives.

   Public API (window.GRNDBackup):
     export()      — download a backup file
     importPick()  — choose a backup file to restore
     mirrorNow()   — force-write the IndexedDB snapshot
   Storage: IndexedDB "grnd_backup" › store "kv" › key "snapshot"
══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ─── localStorage snapshot ───────────────────────────────── */
  function _snapshot() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      data[k] = localStorage.getItem(k);
    }
    return data;
  }
  function _hasGrnd() {
    for (let i = 0; i < localStorage.length; i++) {
      if (/^grnd_/.test(localStorage.key(i))) return true;
    }
    return false;
  }
  function _esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  /* ─── IndexedDB (tiny promise wrapper) ────────────────────── */
  function _idb() {
    return new Promise((res, rej) => {
      let r;
      try { r = indexedDB.open('grnd_backup', 1); } catch (e) { return rej(e); }
      r.onupgradeneeded = () => { try { r.result.createObjectStore('kv'); } catch (_) {} };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
  }
  function _idbPut(key, val) {
    return _idb().then(db => new Promise((res, rej) => {
      const tx = db.transaction('kv', 'readwrite');
      tx.objectStore('kv').put(val, key);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    }));
  }
  function _idbGet(key) {
    return _idb().then(db => new Promise((res, rej) => {
      const tx = db.transaction('kv', 'readonly');
      const rq = tx.objectStore('kv').get(key);
      rq.onsuccess = () => res(rq.result);
      rq.onerror = () => rej(rq.error);
    }));
  }

  function mirrorNow() {
    try { return _idbPut('snapshot', { at: Date.now(), data: _snapshot() }).catch(() => {}); }
    catch (e) { return Promise.resolve(); }
  }

  /* ─── Export ──────────────────────────────────────────────── */
  function exportData() {
    const payload = { app: 'GRND', version: 1, exportedAt: new Date().toISOString(), data: _snapshot() };
    let url;
    try {
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'grnd-backup-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {
      _toast('Export failed', String((e && e.message) || e), 'err');
      return;
    }
    setTimeout(() => { try { URL.revokeObjectURL(url); } catch (_) {} }, 1500);
    const n = Object.keys(payload.data).length;
    _toast('Backup downloaded', `Saved ${n} keys to a .json file. Keep it safe — re-import any time.`, 'ok');
  }

  /* ─── Import ──────────────────────────────────────────────── */
  function importPick() {
    let inp = document.getElementById('grndImportInput');
    if (!inp) {
      inp = document.createElement('input');
      inp.type = 'file';
      inp.accept = 'application/json,.json';
      inp.id = 'grndImportInput';
      inp.style.display = 'none';
      document.body.appendChild(inp);
      inp.addEventListener('change', () => { if (inp.files && inp.files[0]) _importFile(inp.files[0]); inp.value = ''; });
    }
    inp.click();
  }

  function _importFile(file) {
    const rd = new FileReader();
    rd.onload = () => {
      let parsed;
      try { parsed = JSON.parse(rd.result); }
      catch (e) { _toast('Import failed', 'That file isn’t valid backup JSON.', 'err'); return; }
      const data = parsed && parsed.data && typeof parsed.data === 'object' ? parsed.data : parsed;
      if (!data || typeof data !== 'object' || Array.isArray(data)) {
        _toast('Import failed', 'No GRND data found in that file.', 'err'); return;
      }
      const keys = Object.keys(data);
      if (!keys.length) { _toast('Import failed', 'The backup is empty.', 'err'); return; }
      _confirm(`Restore ${keys.length} saved keys? This replaces your current GRND data on this device.`, () => {
        try {
          keys.forEach(k => {
            const v = data[k];
            localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
          });
          mirrorNow();
          _toast('Data restored', 'Reloading to apply your backup…', 'ok');
          setTimeout(() => location.reload(), 950);
        } catch (e) {
          _toast('Import failed', String((e && e.message) || e), 'err');
        }
      }, { okText: 'RESTORE' });
    };
    rd.onerror = () => _toast('Import failed', 'Could not read that file.', 'err');
    rd.readAsText(file);
  }

  /* ─── Themed toast (self-contained) ───────────────────────── */
  function _toast(title, body, kind) {
    let t = document.getElementById('grndBackupToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'grndBackupToast';
      document.body.appendChild(t);
    }
    t.className = 'grnd-backup-toast' + (kind ? ' ' + kind : '');
    t.innerHTML = `<strong>${_esc(title)}</strong>${body ? `<span>${_esc(body)}</span>` : ''}`;
    void t.offsetWidth;
    t.classList.add('show');
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove('show'), 3600);
  }

  /* ─── Themed confirm (reuses global .metrics-confirm CSS) ──── */
  function _confirm(msg, onConfirm, opts) {
    opts = opts || {};
    let m = document.getElementById('grndBackupConfirm');
    if (!m) {
      m = document.createElement('div');
      m.id = 'grndBackupConfirm';
      m.className = 'metrics-confirm-overlay';
      m.innerHTML = `<div class="metrics-confirm-box" role="dialog" aria-modal="true">
        <div class="metrics-confirm-msg"></div>
        <div class="metrics-confirm-btns">
          <button type="button" class="metrics-confirm-cancel">CANCEL</button>
          <button type="button" class="metrics-confirm-ok">CONFIRM</button>
        </div></div>`;
      document.body.appendChild(m);
      m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
    }
    m.querySelector('.metrics-confirm-msg').textContent = msg;
    const okOld = m.querySelector('.metrics-confirm-ok');
    const caOld = m.querySelector('.metrics-confirm-cancel');
    const ok = okOld.cloneNode(false); ok.textContent = opts.okText || 'CONFIRM'; ok.className = 'metrics-confirm-ok danger';
    const ca = caOld.cloneNode(false); ca.textContent = 'CANCEL'; ca.className = 'metrics-confirm-cancel';
    okOld.replaceWith(ok); caOld.replaceWith(ca);
    ok.addEventListener('click', () => { m.classList.remove('open'); onConfirm && onConfirm(); });
    ca.addEventListener('click', () => { m.classList.remove('open'); });
    void m.offsetWidth;
    m.classList.add('open');
  }

  /* ─── Boot: persist + auto-restore + periodic mirror ──────── */
  function _init() {
    // Ask the browser not to evict our storage under pressure.
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().catch(() => {});
    }

    // Recover silently if localStorage was wiped but the IDB mirror survived.
    if (!_hasGrnd()) {
      _idbGet('snapshot').then(snap => {
        if (snap && snap.data && Object.keys(snap.data).some(k => /^grnd_/.test(k))) {
          let restored = 0;
          Object.entries(snap.data).forEach(([k, v]) => {
            if (localStorage.getItem(k) == null) { try { localStorage.setItem(k, v); restored++; } catch (_) {} }
          });
          if (restored) {
            _toast('Data recovered', 'Restored your data from this device’s local backup. Reloading…', 'ok');
            setTimeout(() => location.reload(), 1400);
          }
        }
      }).catch(() => {});
    }

    // Periodic + lifecycle mirroring — only writes when something changed.
    // Guard: never overwrite a good backup with a GRND-less state (the
    // localStorage may be transiently wiped right before an unload).
    let lastLen = -1;
    const maybeMirror = () => {
      try {
        if (!_hasGrnd()) return;
        const s = JSON.stringify(_snapshot());
        if (s.length !== lastLen) {
          lastLen = s.length;
          _idbPut('snapshot', { at: Date.now(), data: JSON.parse(s) }).catch(() => {});
        }
      } catch (_) {}
    };
    setTimeout(maybeMirror, 2500);
    setInterval(maybeMirror, 60000);
    document.addEventListener('visibilitychange', () => { if (document.hidden) maybeMirror(); });
    window.addEventListener('pagehide', maybeMirror);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _init);
  else _init();

  /* ─── Export API ──────────────────────────────────────────── */
  window.GRNDBackup = { export: exportData, importPick, mirrorNow };
})();
