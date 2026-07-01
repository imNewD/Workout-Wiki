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
        _apdSuggestions = null;
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
          const program = _programs().find(p => p.id === programId);
          if ((t.dots || {})['w' + weekIdx + '_d' + dotIdx] && !_isProgramRestDot(program, weekIdx, dotIdx)) {
            _logSession('program', null);
          }
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
  function _isProgramRestSession(session) {
    return /rest/i.test(session?.label || '') || !(Array.isArray(session?.exercises) && session.exercises.length);
  }

  function _programWeekSpan(wk) {
    const mm = (wk.title || '').match(/(\d+)\s*[–-]\s*(\d+)/);
    return mm ? parseInt(mm[2],10) - parseInt(mm[1],10) + 1 : 1;
  }

  function _programSessionFrequency(p, wk) {
    const fromLabel = (wk.sessions?.[0]?.label || '').match(/(\d+)×/);
    if (fromLabel) return parseInt(fromLabel[1], 10);
    const fromProgram = (p.freq || '').match(/(\d+)×/);
    if (fromProgram) return parseInt(fromProgram[1], 10);
    return p.tag === 'custom' ? (wk.sessions || []).length : 3;
  }

  function _programPlannedDotCount(p, wk) {
    if (p.tag === 'custom') return (wk.sessions || []).length;
    return _programSessionFrequency(p, wk) * _programWeekSpan(wk);
  }

  function _isProgramRestDot(p, weekIdx, dotIdx) {
    const wk = p?.weeks_data?.[weekIdx];
    const sessions = Array.isArray(wk?.sessions) ? wk.sessions : [];
    const session = sessions.length ? sessions[dotIdx % sessions.length] : null;
    return _isProgramRestSession(session);
  }

  function _programWorkoutStats(p, tracker) {
    const dots = tracker?.dots || {};
    let total = 0, done = 0;

    (p?.weeks_data || []).forEach((wk, wi) => {
      const planned = _programPlannedDotCount(p, wk);
      for (let di = 0; di < planned; di++) {
        if (_isProgramRestDot(p, wi, di)) continue;
        total++;
        if (dots['w' + wi + '_d' + di]) done++;
      }
    });

    return { total, done };
  }

  function _isDone(p) {
    if (!p || !p.weeks_data || !p.weeks_data.length) return false;
    try {
      const t = JSON.parse(localStorage.getItem('grnd_prog_tracker_' + p.id) || '{}');
      const stats = _programWorkoutStats(p, t);
      return stats.total > 0 && stats.done >= stats.total;
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

  const _WEAK_GROUPS = {
    Push: ['Chest','Triceps','Front Delts','Anterior Deltoids'],
    Pull: ['Lats','Biceps','Rear Delts','Rhomboids'],
    Legs: ['Quadriceps','Hamstrings','Glutes','Gluteus Maximus','Calves'],
    Core: ['Core','Abs','Obliques'],
  };

  function _computeGroupTotals(md) {
    let grand = 0;
    const totals = Object.fromEntries(Object.entries(_WEAK_GROUPS).map(([g, ms]) => {
      const v = ms.reduce((s, m) => s + (md[m] || 0), 0);
      grand += v;
      return [g, v];
    }));
    return { totals, grand };
  }

  function _weakText(md) {
    const sugg = {
      Push: 'push-ups, dips, or bench press',
      Pull: 'pull-ups, rows, or lat pulldowns',
      Legs: 'squats, Romanian DLs, or Nordic curls',
      Core: 'hollow holds, L-sits, or ab wheel rollouts'
    };
    const { totals, grand } = _computeGroupTotals(md);
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
    const musMax = musSlices.length ? musSlices[0].value : 1;

    const wLog = body.weightLog || [];
    const latestW = wLog.length ? wLog[wLog.length-1].v : null;
    const bmi = (latestW && body.height) ? (latestW/((body.height/100)**2)).toFixed(1) : null;

    el.querySelector('#metrics-content').innerHTML = `

      <!-- ── STAT CARDS ───────────────────────────────────────── -->
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

      <!-- ── INSIGHT ROW ──────────────────────────────────────── -->
      <div class="db-section db-section-flat">
        <div class="db-insights">
          <div class="db-insight">
            <div class="db-insight-ico">⚖</div>
            <div class="db-insight-val">${balance}</div>
            <div class="db-insight-label">Balance<br>Score</div>
          </div>
          <div class="db-insight">
            <div class="db-insight-ico">📅</div>
            <div class="db-insight-val">${mom.thisCount}</div>
            <div class="db-insight-label">Sessions<br>This Month</div>
          </div>
          <div class="db-insight ${mom.delta>0?'db-insight-pos':mom.delta<0?'db-insight-neg':''}">
            <div class="db-insight-ico">${mom.delta>0?'↗':mom.delta<0?'↘':'→'}</div>
            <div class="db-insight-val">${mom.delta>0?'+':''}${mom.delta}</div>
            <div class="db-insight-label">vs Last<br>Month</div>
          </div>
        </div>
      </div>

      <!-- ── PR BOARD ─────────────────────────────────────────── -->
      <div class="db-section">
        <div class="db-section-hd">
          <span class="db-section-title">TARGET & RECORDS</span>
          <button class="view-toggle-btn" onclick="metricsAddPR()">+ ADD EXERCISE</button>
        </div>
        ${prKeys.length
          ? `<div class="metrics-pr-grid">${prKeys.map(k=>_prCard(k,prData[k])).join('')}</div>`
          : `<div class="metrics-empty-block">No personal records yet — tap <strong>+ ADD EXERCISE</strong> to start logging.</div>`}
      </div>

      <!-- ── WEEKLY ACTIVITY ──────────────────────────────────── -->
      <div class="db-section">
        <div class="db-section-hd">
          <span class="db-section-title">WEEKLY ACTIVITY</span>
          ${(mom.thisCount>0||mom.lastCount>0) ? `<span class="db-mom-badge ${mom.delta>=0?'pos':'neg'}">${mom.delta>=0?'+':''}${mom.delta} vs last mo</span>` : ''}
        </div>
        <div class="db-chart-wrap">${renderBarChart(weeks)}</div>
        <div class="metrics-consistency-note">Tracked from exercise unlocks &amp; program sessions.</div>
      </div>

      <!-- ── MUSCLE MAP ───────────────────────────────────────── -->
      <div class="db-section">
        <div class="db-section-hd">
          <span class="db-section-title">MUSCLE MAP</span>
          <div class="metrics-segtab">
            <button class="metrics-segtab-btn${_hmView==='f'?' active':''}" onclick="metricsSetHeatmap('f')">Front</button>
            <button class="metrics-segtab-btn${_hmView==='b'?' active':''}" onclick="metricsSetHeatmap('b')">Back</button>
          </div>
        </div>
        <div class="db-muscle-layout">
          <div class="db-muscle-heatmap">
            ${renderHeatmap(md, _hmView)}
            <div class="metrics-anatomy-hint" style="text-align:center;margin-top:2px;font-size:0.5rem">Tap dim regions → Anatomy</div>
          </div>
          <div class="db-muscle-info">
            ${musSlices.slice(0,6).map(sl=>`
              <div class="db-muscle-row">
                <span class="db-muscle-dot" style="background:${sl.color}"></span>
                <span class="db-muscle-name">${sl.label}</span>
                <div class="db-muscle-bar-wrap"><div class="db-muscle-bar" style="width:${Math.round(sl.value/musMax*100)}%;background:${sl.color}"></div></div>
              </div>`).join('')}
            ${!musSlices.length ? `<div class="metrics-empty" style="padding:8px 0;text-align:left">No exercises unlocked yet.</div>` : ''}
            <div class="db-balance-row">
              <span class="db-balance-label">Balance</span>
              <div class="metrics-balance-bar-wrap" style="flex:1"><div class="metrics-balance-fill" style="width:${balance}%"></div></div>
              <span class="db-balance-num">${balance}%</span>
            </div>
            ${weakPt ? `<div class="db-weak-point">⚠ ${weakPt}</div>` : ''}
          </div>
        </div>
      </div>

      <!-- ── TRAINING SPLIT ───────────────────────────────────── -->
      <div class="db-section">
        <div class="db-section-hd">
          <span class="db-section-title">TRAINING SPLIT</span>
          <div class="metrics-segtab">
            <button class="metrics-segtab-btn${_domainMode==='exercises'?' active':''}" onclick="metricsSetDomain('exercises')">Exercises</button>
            <button class="metrics-segtab-btn${_domainMode==='programs'?' active':''}" onclick="metricsSetDomain('programs')">Programs</button>
          </div>
        </div>
        ${renderDonut(domSlices)}
      </div>

      <!-- ── BODY STATS ───────────────────────────────────────── -->
      <div class="db-section">
        <div class="db-section-hd">
          <span class="db-section-title">BODY STATS</span>
          ${bmi ? `<span class="db-bmi-badge">BMI ${bmi}</span>` : ''}
        </div>
        <div class="db-body-inputs">
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

      <!-- ── INJURIES ─────────────────────────────────────────── -->
      <div class="db-section">
        <div class="db-section-hd">
          <span class="db-section-title">INJURIES</span>
        </div>
        <div style="padding:4px 14px 14px">
          <button class="db-injury-btn" onclick="if(typeof openInjuryModal==='function')openInjuryModal()">
            <span style="font-size:1.1rem;flex-shrink:0">🩹</span>
            <div class="db-injury-info">
              <span class="db-injury-title">MANAGE INJURY AREAS</span>
              <span class="db-injury-sub" id="inj-metrics-sub">No areas flagged</span>
            </div>
            <span class="db-injury-arrow">→</span>
          </button>
        </div>
      </div>

      <!-- ── AUTO PROGRAM DESIGNER ────────────────────────────── -->
      <div class="db-section apd-section">
        <div class="db-section-hd">
          <div>
            <div class="db-section-title">AUTO PROGRAM</div>
            <div class="db-section-sub">Personalized weekly programs from your data</div>
          </div>
          <button class="view-toggle-btn" onclick="apdOpenRefresh()">↺ REFRESH</button>
        </div>
        <div class="apd-grid" id="apdGrid">${_apdRenderSuggestions()}</div>
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

  /* ─── Domain / heatmap handlers ──────────────────────────── */
  window.metricsSetDomain  = function (m) { _domainMode  = m; renderMetrics(); };
  window.metricsSetHeatmap = function (v) { _hmView      = v; renderMetrics(); };

  /* ─── Add PR flow ─────────────────────────────────────────── */
  let _addCandidates = [], _addKey = null, _addName = null, _addUnit = 'reps';

  window.metricsAddPR = function () {
    const prData = loadPR();
    _addCandidates = [];
    const ld = _libData();
    const seen = new Set();
    Object.keys(ld).forEach(lk => {
      const src = ld[lk];
      const arr = Array.isArray(src) ? src : (src.data || []);
      arr.forEach(ex => {
        if (!ex || !ex.name) return;
        const key = `${lk}-${ex.id}`;
        if (prData[key] || seen.has(key)) return;
        seen.add(key);
        _addCandidates.push({ key, name: ex.name });
      });
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
    _apdSuggestions = null;
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
    const hitRound = [...rounds].reverse().find(r => v >= r && (!prev || prev.v < r));
    if (!badge && hitRound !== undefined) badge = 'milestone';
    pr.entries.push({ v, d: _today(), badge });
    savePR(prData);
    _apdSuggestions = null;
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
      _apdSuggestions = null;
      metricsCheckLog(_checkLogKey);
      renderMetrics();
    }, { danger: true, okText: 'REMOVE' });
  };

  window.metricsRemoveFromBoard = function () {
    if (!_checkLogKey) return;
    const name = loadPR()[_checkLogKey]?.name || 'this exercise';
    _confirm(`Remove “${name}” from Target & Records? Its logged history will be deleted.`, () => {
      const fresh = loadPR();
      delete fresh[_checkLogKey];
      savePR(fresh);
      _apdSuggestions = null;
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

  /* ══ AUTO PROGRAM DESIGNER ════════════════════════════════════
     Generates 4 personalised weekly program suggestions from the
     user's local data: unlocked exercises, injuries, PR board,
     muscle balance. Saves directly as a custom program on accept.
  ══════════════════════════════════════════════════════════════ */

  let _apdBias       = 'balanced'; // active bias for generation
  let _apdGoal       = null;       // optional skill goal: { name, libKey } | null
  let _apdMuscle     = null;       // optional muscle focus: 'Chest'|'Back'|etc.|null
  let _apdSuggestions = null;      // cached suggestions; null = regenerate
  let _apdDismissed  = new Set();  // card indices where injury blur was dismissed
  let _apdGoalCache  = null;       // flat exercise list for goal search; built once

  /* ─── Exercise pool helpers ─────────────────────────────── */

  function _apdUnlocked(libKey) {
    const p = _progress();
    const ld = _libData();
    const src = ld[libKey];
    if (!src) return [];
    const arr = Array.isArray(src) ? src : (src.data || []);
    return arr
      .filter(ex => p[`${libKey}-${ex.id}`] === 'unlocked')
      .sort((a, b) => (b.diff || 0) - (a.diff || 0));
  }

  // Pick up to n exercises from a list of libKeys,
  // de-duplicating by name and optionally skipping extreme-stress joints.
  function _apdPick(libKeys, n, avoidInjuries, maxDiff) {
    const injuries = typeof window.getActiveInjuries === 'function' ? window.getActiveInjuries() : [];
    const seen = new Set();
    const out = [];
    for (const lk of libKeys) {
      for (const ex of _apdUnlocked(lk)) {
        if (out.length >= n) break;
        if (seen.has(ex.name)) continue;
        if (maxDiff && ex.diff > maxDiff) continue;
        if (avoidInjuries && injuries.length) {
          const severe = injuries.some(j => Number((ex.joints || {})[j] || 0) >= 4);
          if (severe) continue;
        }
        seen.add(ex.name);
        out.push({ ex, libKey: lk });
      }
      if (out.length >= n) break;
    }
    return out;
  }

  /* ─── Sets / reps suggestion ────────────────────────────── */

  function _apdReps(ex, goal) {
    const d = ex.diff || 3;
    const isHold = ex.end && ex.end.suit && !(ex.str && ex.str.suit);
    if (isHold) return { sets: '3', reps: '15–25s hold' };
    if (goal === 'skill') {
      if (d >= 7) return { sets: '5', reps: '3–5' };
      return { sets: '4', reps: '4–6' };
    }
    if (d >= 8) return { sets: '4', reps: '3–5' };
    if (d >= 6) return { sets: '4', reps: '4–7' };
    if (d >= 4) return { sets: '3', reps: '6–10' };
    return { sets: '3', reps: '8–12' };
  }

  function _apdMakeExercises(picks, goal) {
    return picks.map(({ ex, libKey }) => {
      const r = _apdReps(ex, goal);
      const primaryMuscles = (ex.muscles || []).filter(m => m.p).map(m => m.n);
      return {
        name: ex.name,
        sets: r.sets,
        reps: r.reps,
        note: '',
        _libKey: libKey,
        _id: String(ex.id),
        _diff: ex.diff || 0,
        _muscles: primaryMuscles
      };
    });
  }

  /* ─── Injury check across all exercises in sessions ─────── */

  function _apdInjuryConflicts(sessions) {
    const injuries = typeof window.getActiveInjuries === 'function' ? window.getActiveInjuries() : [];
    if (!injuries.length) return [];
    const ld = _libData();
    const conflicts = new Set();
    sessions.forEach(sess => {
      (sess.exercises || []).forEach(exEntry => {
        if (!exEntry._libKey || !exEntry._id) return;
        const src = ld[exEntry._libKey];
        if (!src) return;
        const arr = Array.isArray(src) ? src : (src.data || []);
        const ex = arr.find(e => String(e.id) === exEntry._id);
        if (!ex || !ex.joints) return;
        injuries.forEach(j => {
          if (Number((ex.joints || {})[j] || 0) >= 3) conflicts.add(j);
        });
      });
    });
    return Array.from(conflicts);
  }

  function _apdAvgDiff(sessions) {
    let total = 0, count = 0;
    sessions.forEach(s => (s.exercises || []).forEach(e => { if (e._diff) { total += e._diff; count++; } }));
    return count ? (total / count).toFixed(1) : '—';
  }

  function _apdMuscles(sessions) {
    const seen = new Set();
    sessions.forEach(s => (s.exercises || []).forEach(e => (e._muscles || []).forEach(m => seen.add(m))));
    return Array.from(seen).slice(0, 8);
  }

  /* ─── Warmup picker ─────────────────────────────────────── */

  function _apdPickWarmups(programType, n) {
    n = n || 2;
    const pool = typeof warmups !== 'undefined' ? warmups : [];
    const tagSets = {
      skill:     ['wrists','shoulders','thoracic'],
      pr:        ['wrists','shoulders','thoracic'],
      injuries:  ['mobility','hips'],
    };
    const wantTags = tagSets[programType] || ['full-body','cardio'];
    const scored = pool
      .filter(w => w.listed !== false && Array.isArray(w.tags) && w.tags.some(t => wantTags.includes(t)))
      .sort((a, b) => (a.diff || 1) - (b.diff || 1));
    return scored.slice(0, n).map(w => ({ name: w.name, diff: w.diff || 1, tags: w.tags || [] }));
  }

  /* ─── Beginner fallback (zero unlocks) ──────────────────── */

  function _apdBeginnerFallbackSessions() {
    const pool = typeof warmups !== 'undefined' ? warmups : [];
    const activation = pool.filter(w => w.listed !== false && (w.diff || 1) <= 2)
      .sort((a, b) => (a.diff || 1) - (b.diff || 1)).slice(0, 3)
      .map(w => ({ name: w.name, sets: '2', reps: '20s', note: '', _libKey: 'warmup', _id: String(w.id), _diff: w.diff || 1, _muscles: [] }));
    const base = [
      { name: 'Wall Push-Up', sets: '3', reps: '10–15', note: '', _libKey: 'pushup', _id: '0', _diff: 1, _muscles: ['Chest'] },
      { name: 'Knee Push-Up', sets: '3', reps: '8–12',  note: '', _libKey: 'pushup', _id: '0', _diff: 2, _muscles: ['Chest','Triceps'] },
      { name: 'Dead Hang',    sets: '3', reps: '15–30s hold', note: '', _libKey: 'pullup', _id: '0', _diff: 1, _muscles: ['Lats'] },
      { name: 'Bodyweight Squat', sets: '3', reps: '12–15', note: '', _libKey: 'squat', _id: '0', _diff: 1, _muscles: ['Quadriceps'] },
      { name: 'Plank',        sets: '3', reps: '20–30s hold', note: '', _libKey: 'core', _id: '0', _diff: 1, _muscles: ['Core'] },
    ];
    return [
      { label: 'Monday — Full Body A',    exercises: [base[0], base[2], base[3]], warmups: activation.slice(0,2) },
      { label: 'Wednesday — Full Body B', exercises: [base[1], base[4], base[3]], warmups: activation.slice(0,2) },
      { label: 'Friday — Full Body A',    exercises: [base[0], base[2], base[4]], warmups: activation.slice(0,2) },
    ];
  }

  /* ─── Individual suggestion builders ────────────────────── */

  const _APD_META = {
    balanced:  { label:'BALANCED',   color:'#2a9d5c' },
    skill:     { label:'SKILL',      color:'#8b5cf6' },
    frequency: { label:'HIGH FREQ',  color:'#e63946' },
    weak:      { label:'WEAK POINT', color:'#f4a261' },
    pr:        { label:'PR BUILDER', color:'#fbbf24' },
    high:      { label:'HIGH OUTPUT',color:'#e63946' },
    beginner:  { label:'BEGINNER',   color:'#2a9d5c' },
    injuries:  { label:'SAFE',       color:'#4ac0e8' },
  };

  function _apdExerciseCount(sessions) {
    return (sessions || []).reduce((n, sess) => n + ((sess.exercises || []).length), 0);
  }

  function _apdBuildSuggestion(type) {
    const prData  = loadPR();
    const md      = computeMuscleDist();
    const avoid   = (_apdBias === 'injuries');
    const meta    = _APD_META[type] || _APD_META.balanced;
    const unlockCount = _unlockedKeys().length;

    // Goal + muscle: additive blend, never override
    const _goalRelatedLibs = {
      planche:    ['planche','pushup','dip'],
      frontlever: ['frontlever','pullup','chinup'],
      backlever:  ['backlever','pullup','chinup'],
      handstand:  ['handstand','pushup','core'],
      pushup:     ['pushup','planche','dip'],
      pullup:     ['pullup','frontlever','backlever'],
      chinup:     ['chinup','pullup','frontlever'],
      dip:        ['dip','pushup','planche'],
      core:       ['core','isometric'],
      isometric:  ['isometric','core'],
      squat:      ['squat'],
      combo:      ['combo','pullup','pushup'],
      stretching: ['stretching','warmup'],
      warmup:     ['warmup'],
    };
    const _muscleLibKeys = {
      'Chest':     ['pushup','planche','dip'],
      'Back':      ['pullup','chinup','frontlever','backlever'],
      'Shoulders': ['handstand','pushup','dip'],
      'Triceps':   ['dip','pushup'],
      'Biceps':    ['chinup','pullup'],
      'Core':      ['core','isometric'],
      'Legs':      ['squat'],
    };
    const goalKeys   = _apdGoal ? (_goalRelatedLibs[_apdGoal.libKey] || [_apdGoal.libKey]) : null;
    const muscleKeys = _apdMuscle ? (_muscleLibKeys[_apdMuscle] || null) : null;

    let sessions = [], name = '', why = '', days = 3;

    /* ── BALANCED ── */
    if (type === 'balanced') {
      const push = _apdPick(['pushup','planche','dip'], 3, avoid);
      const pull = _apdPick(['pullup','chinup','backlever'], 3, avoid);
      const legs = _apdPick(['squat'], 2, avoid);
      const core = _apdPick(['core','isometric'], 2, avoid);
      if (!push.length && !pull.length && !legs.length) {
        const fb = _apdBeginnerFallbackSessions();
        return { id:type, ...meta, name:'Beginner Start', why:'Nothing unlocked yet — here\'s a starter program to build from.', days:3, sessions:fb, avgDiff:'1.5', muscles:['Chest','Lats','Quadriceps','Core'], injuryConflicts:[], empty:false };
      }
      sessions = [
        { label:'Monday — Push',        exercises: _apdMakeExercises(push.slice(0,3), 'strength') },
        { label:'Wednesday — Pull + Core', exercises: _apdMakeExercises([...pull.slice(0,2),...core.slice(0,1)], 'strength') },
        { label:'Friday — Legs + Core', exercises: _apdMakeExercises([...legs,...core.slice(0,2)], 'strength') },
      ];
      name = 'Push / Pull / Legs';
      days = 3;
      const pn = push[0]?.ex?.name, puln = pull[0]?.ex?.name;
      why = pn && puln
        ? `${pn} leads your push day. ${puln} leads your pull day. Classic 3-day split built from your strongest unlocked movements.`
        : 'Classic 3-day push/pull/legs split built from your highest unlocked exercises.';
    }

    /* ── SKILL ── */
    else if (type === 'skill') {
      const epic = _apdPick(['frontlever','backlever','planche','handstand'], 4, avoid);
      const prTargets = Object.values(prData)
        .filter(pr => pr.target && pr.entries?.length && pr.entries[pr.entries.length-1].v < pr.target)
        .slice(0, 2);
      const pushSup = _apdPick(['pushup'], 2, avoid);
      const pullSup = _apdPick(['pullup','chinup'], 2, avoid);
      const coreSup = _apdPick(['core','isometric'], 2, avoid);
      sessions = [
        { label:'Tuesday — Skill A',       exercises: _apdMakeExercises([...epic.slice(0,2),...pushSup.slice(0,1)], 'skill') },
        { label:'Thursday — Skill B',      exercises: _apdMakeExercises([...epic.slice(2,4),...pullSup.slice(0,1)], 'skill') },
        { label:'Saturday — Conditioning', exercises: _apdMakeExercises([...coreSup,...pushSup.slice(1),...pullSup.slice(1)], 'skill') },
      ];
      name = 'Skill Progression';
      days = 3;
      const epicNames = epic.slice(0,2).map(p=>p.ex?.name).filter(Boolean).join(' & ');
      const prNames = prTargets.map(p=>p.name).slice(0,2).join(' & ');
      why = epicNames
        ? `Built around ${epicNames}.${prNames ? ` Supports your PR targets: ${prNames}.` : ' Focused on your highest unlocked skill progressions.'}`
        : prNames
          ? `Structured to support your PR targets: ${prNames}.`
          : 'Targets your highest unlocked skill progressions and epic movements.';
    }

    /* ── HIGH FREQUENCY ── */
    else if (type === 'frequency') {
      const push = _apdPick(['pushup','dip'], 2, avoid);
      const pull = _apdPick(['pullup','chinup'], 2, avoid);
      const legs = _apdPick(['squat'], 1, avoid);
      const core = _apdPick(['core'], 1, avoid);
      sessions = [
        { label:'Monday — Full Body A',    exercises: _apdMakeExercises([...push,...pull.slice(0,1)], 'strength') },
        { label:'Tuesday — Full Body B',   exercises: _apdMakeExercises([...legs,...core,...push.slice(1)], 'strength') },
        { label:'Thursday — Full Body A',  exercises: _apdMakeExercises([...push.slice(0,1),...pull,...core], 'strength') },
        { label:'Friday — Full Body B',    exercises: _apdMakeExercises([...legs,...push.slice(1),...pull.slice(0,1)], 'strength') },
      ];
      name = '4-Day Full Body';
      days = 4;
      why = 'High-frequency full body training maximises weekly volume and motor pattern repetition. All major movement patterns every 48–72 hours.';
    }

    /* ── WEAK POINTS ── */
    else if (type === 'weak') {
      const libMap = { Push:['pushup','dip','planche','handstand'], Pull:['pullup','chinup','backlever','frontlever'], Legs:['squat'], Core:['core','isometric'] };
      const { totals, grand: weakGrand } = _computeGroupTotals(md);
      const sorted = Object.entries(totals).sort((a,b)=>a[1]-b[1]);
      const weakest = sorted[0][0], weak2 = sorted[1]?.[0] || 'Core';
      const pctWeak = weakGrand ? Math.round(totals[weakest]/weakGrand*100) : 0;
      const wPicks  = _apdPick(libMap[weakest]||[], 3, avoid);
      const w2Picks = _apdPick(libMap[weak2]||[], 2, avoid);
      const sup     = _apdPick(weakest!=='Core'?['core']:['pushup'], 1, avoid);
      sessions = [
        { label:'Monday — Weak Point A',   exercises: _apdMakeExercises([...wPicks,...sup], 'strength') },
        { label:'Wednesday — Weak Point B',exercises: _apdMakeExercises([...wPicks.slice(0,2),...w2Picks.slice(0,1)], 'strength') },
        { label:'Friday — Balance',        exercises: _apdMakeExercises([...w2Picks,...wPicks.slice(0,1)], 'strength') },
      ];
      name = `${weakest} Specialist`;
      days = 3;
      why = weakGrand
        ? `${weakest} makes up only ${pctWeak}% of your training volume. This program prioritises it to push your balance score toward 100.`
        : `No training data yet. This program builds ${weakest}-focused strength from your unlocked exercises.`;
    }

    /* ── PR BUILDER ── */
    else if (type === 'pr') {
      const prTargets = Object.entries(prData)
        .filter(([,pr]) => pr.target && pr.entries?.length && pr.entries[pr.entries.length-1].v < pr.target)
        .slice(0, 4);
      if (!prTargets.length) {
        return { id:type, ...meta, name:'No PR Targets', why:'Add goals to your PR board (tap + ADD EXERCISE) to generate a PR-focused program.', days:0, sessions:[], avgDiff:'—', muscles:[], injuryConflicts:[], empty:true };
      }
      const push = _apdPick(['pushup','dip'], 2, avoid);
      const pull = _apdPick(['pullup','chinup'], 2, avoid);
      const core = _apdPick(['core'], 1, avoid);
      // Build sessions around PR exercises
      const prExNames = prTargets.map(([,pr])=>pr.name);
      const prExs = _unlockedKeys().map(k => {
        const ex = _exFromKey(k);
        if (!ex) return null;
        if (!prExNames.some(n => n.toLowerCase() === ex.name.toLowerCase())) return null;
        const m = k.match(/^(.+)-\d+$/);
        return m ? { ex, libKey: m[1] } : null;
      }).filter(Boolean);
      sessions = [
        { label:'Monday — PR Focus',       exercises: _apdMakeExercises([...prExs.slice(0,2),...push.slice(0,1)], 'skill') },
        { label:'Wednesday — Support',     exercises: _apdMakeExercises([...pull,...core], 'strength') },
        { label:'Friday — PR + Volume',    exercises: _apdMakeExercises([...prExs.slice(0,2),...push.slice(1)], 'skill') },
      ];
      name = 'PR Builder';
      days = 3;
      why = `Structured around your active PR targets: ${prExNames.slice(0,3).join(', ')}. Frequency and volume optimised for measurable progress.`;
    }

    /* ── HIGH OUTPUT ── */
    else if (type === 'high') {
      const push = _apdPick(['pushup','planche','dip'], 3, avoid);
      const pull = _apdPick(['pullup','chinup','frontlever','backlever'], 3, avoid);
      const legs = _apdPick(['squat'], 2, avoid);
      const core = _apdPick(['core','isometric'], 2, avoid);
      sessions = [
        { label:'Monday — Heavy Push',     exercises: _apdMakeExercises(push.slice(0,3), 'strength') },
        { label:'Tuesday — Heavy Pull',    exercises: _apdMakeExercises(pull.slice(0,3), 'strength') },
        { label:'Thursday — Legs + Core',  exercises: _apdMakeExercises([...legs,...core], 'strength') },
        { label:'Saturday — Full Volume',  exercises: _apdMakeExercises([...push.slice(0,1),...pull.slice(0,1),...legs.slice(0,1),...core.slice(0,1)], 'strength') },
      ];
      name = 'High Output';
      days = 4;
      why = 'Maximum weekly volume using your hardest unlocked exercises. Push/pull split with a dedicated leg day and a full-volume Saturday session.';
    }

    /* ── BEGINNER ── */
    else if (type === 'beginner') {
      const push = _apdPick(['pushup'], 2, avoid, 4.0);
      const pull = _apdPick(['pullup','chinup'], 2, avoid, 4.0);
      const legs = _apdPick(['squat'], 2, avoid, 4.0);
      const core = _apdPick(['core'], 1, avoid, 4.0);
      if (!push.length && !pull.length && !legs.length) {
        const fb = _apdBeginnerFallbackSessions();
        return { id:type, ...meta, name:'Beginner Base', why:'Low-difficulty exercises only (diff ≤ 4). 3 full-body sessions per week. Build habit and consistency before adding complexity.', days:3, sessions:fb, avgDiff:'1.5', muscles:['Chest','Lats','Quadriceps','Core'], injuryConflicts:[], empty:false };
      }
      sessions = [
        { label:'Monday — Full Body A',    exercises: _apdMakeExercises([...push.slice(0,1),...pull.slice(0,1),...legs.slice(0,1)], 'strength') },
        { label:'Wednesday — Full Body B', exercises: _apdMakeExercises([...push.slice(1,2),...pull.slice(1,2),...core], 'strength') },
        { label:'Friday — Full Body A',    exercises: _apdMakeExercises([...push.slice(0,1),...pull.slice(0,1),...legs.slice(1,2)], 'strength') },
      ];
      name = 'Beginner Base';
      days = 3;
      why = 'Low-difficulty exercises only (diff ≤ 4). 3 full-body sessions per week. Build habit and consistency before adding complexity.';
    }

    /* ── INJURY SAFE ── */
    else if (type === 'injuries') {
      const push = _apdPick(['pushup','squat','core'], 3, true); // always avoid
      const pull = _apdPick(['pullup','chinup'], 2, true);
      const core = _apdPick(['core','isometric'], 2, true);
      sessions = [
        { label:'Monday — Safe Push',      exercises: _apdMakeExercises(push.slice(0,3), 'strength') },
        { label:'Wednesday — Safe Pull',   exercises: _apdMakeExercises([...pull,...core.slice(0,1)], 'strength') },
        { label:'Friday — Core + Mobility',exercises: _apdMakeExercises([...core,...push.slice(0,1)], 'strength') },
      ];
      name = 'Injury-Safe Program';
      days = 3;
      const inj = typeof window.getActiveInjuries === 'function' ? window.getActiveInjuries() : [];
      why = inj.length
        ? `All exercises selected avoid HIGH or EXTREME stress on your flagged joints: ${inj.map(j=>j.charAt(0).toUpperCase()+j.slice(1)).join(', ')}. Safe to train around your current injuries.`
        : 'Conservative selection across all categories. No exercises with high joint stress.';
    }

    // Filter empty sessions
    sessions = sessions.filter(s => s.exercises && s.exercises.length > 0);

    if (!sessions.length) {
      return {
        id: type,
        label: meta.label,
        color: meta.color,
        name: name || meta.label,
        days: 0,
        why: why || 'Not enough matching unlocked exercises yet. Unlock more exercises or choose a broader generation focus.',
        sessions: [],
        hasWarmups: false,
        avgDiff: '—',
        muscles: [],
        injuryConflicts: [],
        empty: true,
      };
    }

    // BLEND: goal → prepend 1 skill exercise to session 0 if not already present
    if (goalKeys && sessions.length) {
      const goalPick = _apdPick(goalKeys, 1, avoid);
      if (goalPick.length) {
        const goalEx = _apdMakeExercises(goalPick, 'skill');
        if (!sessions[0].exercises.some(e => e.name === goalEx[0].name)) {
          sessions[0].exercises = [...goalEx, ...sessions[0].exercises];
          if (!why.includes(goalPick[0].ex.name)) why = `${goalPick[0].ex.name} anchors this program. ` + why;
        }
      }
    }

    // BLEND: muscle → add 1 exercise to the least-full session if not already present
    if (muscleKeys && sessions.length) {
      const musclePick = _apdPick(muscleKeys, 1, avoid);
      if (musclePick.length) {
        const muscleEx = _apdMakeExercises(musclePick, 'strength');
        const alreadyIn = sessions.some(s => s.exercises.some(e => e.name === muscleEx[0].name));
        if (!alreadyIn) {
          const target = sessions.reduce((min, s) => s.exercises.length < min.exercises.length ? s : min, sessions[0]);
          target.exercises.push(...muscleEx);
        }
      }
    }

    // Inject warmups into each session that doesn't already have them
    const wu = _apdPickWarmups(type, 2);
    sessions.forEach(s => { if (!s.warmups) s.warmups = wu; });

    return {
      id: type,
      label: meta.label,
      color: meta.color,
      name,
      days,
      why,
      sessions,
      hasWarmups: wu.length > 0,
      avgDiff: _apdAvgDiff(sessions),
      muscles: _apdMuscles(sessions),
      injuryConflicts: _apdInjuryConflicts(sessions),
      empty: sessions.length === 0,
    };
  }

  /* ─── Render a single suggestion card ───────────────────── */

  function _apdRenderCard(s, idx) {
    const dismissed = _apdDismissed.has(idx);

    if (s.empty) {
      return `<div class="apd-card apd-card-empty">
        <div class="apd-card-badge" style="background:${s.color}20;color:${s.color};border:1px solid ${s.color}40">${s.label}</div>
        <div class="apd-card-name">${s.name}</div>
        <div class="apd-empty-text">${s.why}</div>
      </div>`;
    }

    const diffVal  = parseFloat(s.avgDiff) || 0;
    const diffPct  = Math.min(100, Math.round(diffVal / 10 * 100));
    const chipHtml = s.muscles.slice(0,5).map(m=>`<span class="apd-muscle-chip">${m}</span>`).join('');
    const exCount  = s.sessions.reduce((n,sess)=>n+(sess.exercises?.length||0),0);

    const cardBody = `
      <div class="apd-card-badge" style="background:${s.color}20;color:${s.color};border:1px solid ${s.color}40">${s.label}</div>
      <div class="apd-card-name">${s.name}</div>
      <div class="apd-card-why">${s.why}</div>
      <div class="apd-card-meta">
        <span class="apd-meta-item">📅 ${s.days}×/wk</span>
        <span class="apd-meta-item">💪 ${exCount} exercises</span>
        ${s.hasWarmups ? '<span class="apd-card-warmup-badge">🔥 WARMUP</span>' : ''}
      </div>
      <div class="apd-diff-row">
        <span class="apd-diff-label">AVG DIFF</span>
        <div class="apd-diff-bar-wrap"><div class="apd-diff-bar" style="width:${diffPct}%;background:${s.color}"></div></div>
        <span class="apd-diff-num">${s.avgDiff}</span>
      </div>
      <div class="apd-muscles">${chipHtml || '<span class="apd-no-muscles">—</span>'}</div>
      <div class="apd-card-footer">
        <button class="apd-gen-btn" onclick="event.stopPropagation();apdPreview(${idx})" style="border-color:${s.color};color:${s.color}">PREVIEW →</button>
      </div>`;

    if (s.injuryConflicts.length && !dismissed) {
      const jointNames = s.injuryConflicts.map(j=>j.charAt(0).toUpperCase()+j.slice(1)).join(', ');
      return `<div class="apd-card apd-card-injured" onclick="apdPreview(${idx})">
        <div class="apd-injury-overlay">
          <div class="apd-injury-icon">🩹</div>
          <div class="apd-injury-msg">Stresses your injured ${jointNames}</div>
          <button class="apd-continue-btn" onclick="event.stopPropagation();apdContinueAnyway(${idx})">Continue Anyway</button>
        </div>
        <div class="apd-injured-content">${cardBody}</div>
      </div>`;
    }

    return `<div class="apd-card" onclick="apdPreview(${idx})">${cardBody}</div>`;
  }

  function _apdRenderSuggestions() {
    if (!_apdSuggestions) {
      // Choose 4 types based on current bias
      let types;
      if      (_apdBias === 'weak')      types = ['weak','balanced','skill','frequency'];
      else if (_apdBias === 'pr')        types = ['pr','skill','balanced','frequency'];
      else if (_apdBias === 'injuries')  types = ['injuries','balanced','skill','weak'];
      else if (_apdBias === 'high')      types = ['high','frequency','skill','balanced'];
      else if (_apdBias === 'skill')     types = ['skill','pr','balanced','high'];
      else if (_apdBias === 'beginner')  types = ['beginner','balanced','weak','frequency'];
      else if (_apdBias === 'frequency') types = ['frequency','high','balanced','weak'];
      else                               types = ['balanced','skill','frequency','weak'];
      const seen = new Set();
      const fallbackTypes = ['balanced','beginner','frequency','weak','skill','high','injuries','pr'];
      const allTypes = types.concat(fallbackTypes).filter(t => {
        if (seen.has(t)) return false;
        seen.add(t);
        return true;
      });
      const built = allTypes.map(t => _apdBuildSuggestion(t));
      const usable = built.filter(s => !s.empty && _apdExerciseCount(s.sessions) > 0);
      _apdSuggestions = usable.length ? usable.slice(0, 4) : built.slice(0, 4);
    }
    return _apdSuggestions.map((s, i) => _apdRenderCard(s, i)).join('');
  }

  /* ─── Public APD handlers ────────────────────────────────── */

  window.apdOpenRefresh = function () {
    const ov = document.getElementById('apdRefreshOverlay');
    if (!ov) return;
    ov.querySelectorAll('.apd-bias-btn').forEach(b => b.classList.toggle('active', b.dataset.bias === _apdBias));
    ov.querySelectorAll('.apd-muscle-chip-btn').forEach(b => b.classList.toggle('active', b.dataset.muscle === _apdMuscle));
    // Restore goal search state
    const inp = document.getElementById('apdGoalSearchInput');
    const selWrap = document.getElementById('apdGoalSelectedWrap');
    const selLabel = document.getElementById('apdGoalSelectedLabel');
    const results = document.getElementById('apdGoalSearchResults');
    if (_apdGoal) {
      if (inp) inp.value = '';
      if (results) results.innerHTML = '';
      if (selLabel) selLabel.textContent = _apdGoal.name;
      if (selWrap) selWrap.style.display = 'flex';
    } else {
      if (inp) inp.value = '';
      if (results) results.innerHTML = '';
      if (selWrap) selWrap.style.display = 'none';
    }
    ov.classList.add('open');
  };

  window.apdCloseRefresh = function () {
    document.getElementById('apdRefreshOverlay')?.classList.remove('open');
  };

  window.apdSelectBias = function (bias) {
    _apdBias = bias;
    const ov = document.getElementById('apdRefreshOverlay');
    if (ov) ov.querySelectorAll('.apd-bias-btn').forEach(b => b.classList.toggle('active', b.dataset.bias === bias));
  };

  window.apdGoalSearch = function (query) {
    const resultsEl = document.getElementById('apdGoalSearchResults');
    if (!resultsEl) return;
    if (!query || !query.trim()) { resultsEl.innerHTML = ''; return; }
    const q = query.trim();
    if (!_apdGoalCache && typeof LIB_DATA !== 'undefined') {
      const excluded = new Set(['pantheon']);
      _apdGoalCache = [];
      Object.keys(LIB_DATA).forEach(function(k) {
        if (excluded.has(k)) return;
        (LIB_DATA[k] || []).forEach(function(ex) {
          _apdGoalCache.push({ name: ex.name || ex.alt || '', libKey: k, diff: ex.diff });
        });
      });
    }
    const allExercises = _apdGoalCache || [];
    const norm = function(s) { return (s || '').toLowerCase().replace(/[-_/\\]+/g, ' ').replace(/\s+/g, ' ').trim(); };
    const nq = norm(q);
    const matches = allExercises.filter(function(ex) {
      return norm(ex.name).includes(nq);
    }).slice(0, 10);
    if (!matches.length) { resultsEl.innerHTML = '<div class="apd-goal-no-results">No matches</div>'; return; }
    resultsEl.innerHTML = matches.map(function(ex) {
      const safeName = ex.name.replace(/'/g, "\\'");
      const safeLib = ex.libKey.replace(/'/g, "\\'");
      return '<button class="apd-goal-result-item" onclick="apdGoalSelect(\'' + safeName + '\',\'' + safeLib + '\')">' +
        '<span class="apd-goal-result-name">' + ex.name + '</span>' +
        '<span class="apd-goal-result-lib">' + ex.libKey + '</span>' +
        '</button>';
    }).join('');
  };

  window.apdGoalSelect = function (name, libKey) {
    _apdGoal = { name: name, libKey: libKey };
    const inp = document.getElementById('apdGoalSearchInput');
    const results = document.getElementById('apdGoalSearchResults');
    const selWrap = document.getElementById('apdGoalSelectedWrap');
    const selLabel = document.getElementById('apdGoalSelectedLabel');
    if (inp) inp.value = '';
    if (results) results.innerHTML = '';
    if (selLabel) selLabel.textContent = name;
    if (selWrap) selWrap.style.display = 'flex';
  };

  window.apdGoalClear = function () {
    _apdGoal = null;
    const selWrap = document.getElementById('apdGoalSelectedWrap');
    const inp = document.getElementById('apdGoalSearchInput');
    if (selWrap) selWrap.style.display = 'none';
    if (inp) { inp.value = ''; inp.focus(); }
  };

  window.apdSelectMuscle = function (muscle) {
    _apdMuscle = (_apdMuscle === muscle) ? null : muscle;
    const ov = document.getElementById('apdRefreshOverlay');
    if (ov) ov.querySelectorAll('.apd-muscle-chip-btn').forEach(b => b.classList.toggle('active', b.dataset.muscle === _apdMuscle));
  };

  window.apdConfirmGenerate = function () {
    _apdSuggestions = null;
    _apdDismissed = new Set();
    window.apdCloseRefresh();
    const html = _apdRenderSuggestions(); // always build _apdSuggestions regardless of view
    const grid = document.getElementById('apdGrid');
    if (grid) grid.innerHTML = html;
    if (_apdSuggestions && _apdSuggestions[0] && !_apdSuggestions[0].empty) {
      window.apdPreview(0);
    }
  };

  window.apdToggleAcc = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('apd-acc-open');
  };

  window.apdContinueAnyway = function (idx) {
    _apdDismissed.add(idx);
    const grid = document.getElementById('apdGrid');
    if (grid) grid.innerHTML = _apdRenderSuggestions();
  };

  /* ─── Auto-name with collision detection ─────────────────── */

  function _apdAutoName() {
    const existing = new Set();
    (window.PROGRAMS || []).forEach(p => existing.add(p.name));
    if (typeof loadSavedCustomPrograms === 'function') {
      loadSavedCustomPrograms().forEach(p => existing.add(p.name));
    }
    let n = 1;
    while (existing.has('Auto Generated Program ' + n)) n++;
    return 'Auto Generated Program ' + n;
  }

  /* ─── Build + persist program object ────────────────────── */

  function _apdDoSave(name, sessions, sourceId, sourceDays, sourceWhy) {
    const DAY_ORDER = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    const cleanSessions = sessions.map(sess => ({
      label: sess.label,
      exercises: (sess.exercises || []).map(ex => ({
        name: ex.name,
        sets: ex.sets,
        reps: ex.reps,
        note: ex.note || ''
      }))
    })).filter(sess => sess.exercises.length > 0);

    if (!_apdExerciseCount(cleanSessions)) {
      _toast('Add at least one exercise before saving.', { icon: '!', duration: 2600 });
      return false;
    }

    const usedDays = new Set(cleanSessions.map(s => s.label.split(' — ')[0].trim()));
    DAY_ORDER.forEach(d => {
      if (!usedDays.has(d)) cleanSessions.push({ label: d + ' — Rest', exercises: [] });
    });
    cleanSessions.sort((a, b) => {
      return DAY_ORDER.indexOf(a.label.split(' — ')[0].trim()) - DAY_ORDER.indexOf(b.label.split(' — ')[0].trim());
    });

    const program = {
      id: 'apd-' + sourceId + '-' + Date.now(),
      name,
      tag: 'custom',
      tagLabel: 'Custom',
      weeks: 1,
      freq: cleanSessions.filter(s => s.exercises.length).length + '×/wk',
      progression: 'Auto-generated',
      diff: 'int',
      diffLabel: 'Custom',
      soon: false,
      desc: sourceWhy,
      weeks_data: [{ title: 'Week 1 (Repeating)', phase: name, note: sourceWhy, sessions: cleanSessions }]
    };

    if (typeof loadSavedCustomPrograms === 'function' && typeof persistSavedCustomPrograms === 'function') {
      const saved = loadSavedCustomPrograms();
      saved.push(program);
      persistSavedCustomPrograms(saved);
      if (typeof PROGRAMS !== 'undefined' && Array.isArray(PROGRAMS)) PROGRAMS.push(program);
      if (typeof renderProgramsGrid === 'function') renderProgramsGrid();
      if (typeof window.updateHomeProgramsCount === 'function') window.updateHomeProgramsCount();
    }

    _toast('"' + name + '" saved to your programs!', { icon: '✓', duration: 2800 });
    setTimeout(() => {
      if (typeof openProgram === 'function') openProgram(program.id);
      else if (typeof goTo === 'function') goTo('programs');
    }, 600);
    return true;
  }

  /* ─── Preview / edit modal ───────────────────────────────── */

  let _apdEditState     = null;
  let _apdPickerSessIdx = -1;
  let _apdAllUnlocked   = null;

  function _apdEnsureModal() {
    if (document.getElementById('apdPreviewOverlay')) return;
    const el = document.createElement('div');
    el.id = 'apdPreviewOverlay';
    el.className = 'apd-preview-overlay';
    el.innerHTML =
      '<div class="apd-preview-modal" role="dialog" aria-modal="true">' +
        '<div class="apd-preview-hd">' +
          '<div class="apd-preview-name-wrap">' +
            '<span class="apd-preview-name-label">PROGRAM NAME</span>' +
            '<input class="apd-preview-name-input" id="apdPreviewNameInput" type="text" placeholder="Enter program name…" />' +
          '</div>' +
          '<button class="apd-preview-close-btn" onclick="apdClosePreview()">&#x2715;</button>' +
        '</div>' +
        '<div class="apd-preview-body" id="apdPreviewBody"></div>' +
        '<div class="apd-preview-ft">' +
          '<button class="apd-preview-save-btn" onclick="apdSaveFromPreview()">SAVE TO PROGRAMS</button>' +
        '</div>' +
        '<div class="apd-picker-overlay" id="apdPickerOverlay">' +
          '<div class="apd-picker-sheet">' +
            '<div class="apd-picker-hd">' +
              '<span class="apd-picker-title">ADD EXERCISE</span>' +
              '<button class="apd-preview-close-btn" onclick="apdClosePicker()">&#x2715;</button>' +
            '</div>' +
            '<div class="apd-picker-search-wrap">' +
              '<span class="apd-picker-search-icon">&#x2315;</span>' +
              '<input class="apd-picker-search" id="apdPickerSearch" type="text" placeholder="Search exercises…" oninput="apdPickerFilter()" />' +
            '</div>' +
            '<div class="apd-picker-list" id="apdPickerList"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
    el.addEventListener('click', function(e) { if (e.target === el) window.apdClosePreview(); });
    document.body.appendChild(el);
  }

  function _apdRenderPreviewBody() {
    const body = document.getElementById('apdPreviewBody');
    if (!body || !_apdEditState) return;
    body.innerHTML = _apdEditState.sessions.map(function(sess, si) {
      const warmupBlock = (sess.warmups && sess.warmups.length)
        ? '<div class="apd-warmup-block">' +
            '<span class="apd-warmup-label">WARMUP</span>' +
            sess.warmups.map(function(w) {
              return '<div class="apd-warmup-item">' + w.name + '</div>';
            }).join('') +
          '</div>'
        : '';
      const exRows = (sess.exercises || []).map(function(ex, ei) {
        return '<div class="apd-prev-ex-row">' +
          '<div class="apd-prev-ex-info">' +
            '<span class="apd-prev-ex-name">' + ex.name + '</span>' +
            '<span class="apd-prev-ex-meta">' + ex.sets + ' \xd7 ' + ex.reps + '</span>' +
          '</div>' +
          '<button class="apd-prev-ex-rm" onclick="apdPreviewRemoveEx(' + si + ',' + ei + ')" aria-label="Remove">&#x2715;</button>' +
        '</div>';
      }).join('');
      return '<div class="apd-prev-session">' +
        '<div class="apd-prev-sess-label">' + sess.label + '</div>' +
        warmupBlock +
        (exRows || '<div class="apd-prev-empty-sess">No exercises</div>') +
        '<button class="apd-prev-add-btn" onclick="apdOpenPicker(' + si + ')">＋ Add Exercise</button>' +
      '</div>';
    }).join('');
  }

  function _apdGetAllUnlocked() {
    // All valid LIB_DATA keys (must match app-core.js LIB_DATA)
    const KEYS = [
      'pushup','planche','dip','pullup','chinup','backlever','frontlever','handstand',
      'squat','core','isometric','combo','weighted','warmup','stretching',
      'gymChest','gymBack','gymShoulders','gymLegs','gymArms','gymCore',
      'cardioRunning','cardioCycling','cardioHIIT','cardioRowing','cardioRecovery','cardioMobility'
    ];
    const ld   = _libData();
    const prog = _progress();
    const seen = new Set(), out = [];
    KEYS.forEach(function(lk) {
      var src = ld[lk];
      if (!src) return;
      var arr = Array.isArray(src) ? src : (src.data || []);
      arr.forEach(function(ex) {
        if (!ex || !ex.name || seen.has(ex.name)) return;
        if (prog[lk + '-' + String(ex.id)] !== 'unlocked') return;
        seen.add(ex.name);
        var primaryMuscles = (ex.muscles || []).filter(function(m) { return m.p; }).map(function(m) { return m.n; });
        out.push({
          name: ex.name, sets: '3', reps: '8–12', note: '',
          _libKey: lk, _id: String(ex.id), _diff: ex.diff || 0,
          _muscles: primaryMuscles
        });
      });
    });
    return out.sort(function(a, b) { return a.name.localeCompare(b.name); });
  }

  window.apdPreview = function(idx) {
    const s = _apdSuggestions && _apdSuggestions[idx];
    if (!s || !s.sessions || !s.sessions.length) return;
    _apdEnsureModal();
    _apdEditState = {
      name: _apdAutoName(),
      sessions: s.sessions.map(function(sess) {
        return {
          label: sess.label,
          warmups: (sess.warmups || []).slice(),
          exercises: (sess.exercises || []).map(function(ex) { return Object.assign({}, ex); })
        };
      }),
      sourceS: s
    };
    _apdAllUnlocked = _apdGetAllUnlocked();
    const inp = document.getElementById('apdPreviewNameInput');
    if (inp) inp.value = _apdEditState.name;
    _apdRenderPreviewBody();
    document.getElementById('apdPreviewOverlay').classList.add('open');
  };

  window.apdClosePreview = function() {
    const ov = document.getElementById('apdPreviewOverlay');
    if (ov) ov.classList.remove('open');
  };

  window.apdPreviewRemoveEx = function(sessIdx, exIdx) {
    if (!_apdEditState) return;
    _apdEditState.sessions[sessIdx].exercises.splice(exIdx, 1);
    _apdRenderPreviewBody();
  };

  window.apdOpenPicker = function(sessIdx) {
    _apdPickerSessIdx = sessIdx;
    var search = document.getElementById('apdPickerSearch');
    if (search) search.value = '';
    window.apdPickerFilter();
    var ov = document.getElementById('apdPickerOverlay');
    if (ov) ov.style.display = 'flex';
    if (search) setTimeout(function() { search.focus(); }, 80);
  };

  window.apdClosePicker = function() {
    const ov = document.getElementById('apdPickerOverlay');
    if (ov) ov.style.display = 'none';
  };

  window.apdPickerFilter = function() {
    var q    = ((document.getElementById('apdPickerSearch') || {}).value || '').toLowerCase().trim();
    var list = document.getElementById('apdPickerList');
    if (!list) return;
    var items = (_apdAllUnlocked || []).filter(function(ex) {
      return !q || ex.name.toLowerCase().includes(q);
    });
    if (!items.length) {
      list.innerHTML = '<div class="apd-picker-empty">No exercises found</div>';
      return;
    }
    list.innerHTML = items.map(function(ex) {
      var diff = ex._diff || 0;
      var dots = '';
      for (var d = 1; d <= 10; d += 2) dots += '<span class="apd-picker-diff-dot' + (diff >= d ? ' on' : '') + '"></span>';
      var cat  = ex._libKey.replace(/([A-Z])/g, ' $1').trim();
      cat = cat.charAt(0).toUpperCase() + cat.slice(1);
      return '<button class="apd-picker-item" onclick="apdPickerAdd(' + "'" + ex._libKey + "','" + ex._id + "'" + ')">' +
        '<div class="apd-picker-item-left">' +
          '<span class="apd-picker-item-name">' + ex.name + '</span>' +
          '<span class="apd-picker-item-cat">' + cat + '</span>' +
        '</div>' +
        '<div class="apd-picker-item-right">' +
          '<div class="apd-picker-diff-dots">' + dots + '</div>' +
          '<span class="apd-picker-item-diff">' + (diff || '—') + '</span>' +
        '</div>' +
      '</button>';
    }).join('');
  };

  window.apdPickerAdd = function(libKey, exId) {
    if (!_apdEditState || _apdPickerSessIdx < 0) return;
    const ex = (_apdAllUnlocked || []).find(function(e) { return e._libKey === libKey && e._id === exId; });
    if (!ex) return;
    _apdEditState.sessions[_apdPickerSessIdx].exercises.push(Object.assign({}, ex));
    window.apdClosePicker();
    _apdRenderPreviewBody();
  };

  window.apdSaveFromPreview = function() {
    if (!_apdEditState) return;
    const inp  = document.getElementById('apdPreviewNameInput');
    const name = ((inp && inp.value) || '').trim() || _apdAutoName();
    const s    = _apdEditState.sourceS;
    if (_apdDoSave(name, _apdEditState.sessions, s.id, s.days, s.why)) {
      window.apdClosePreview();
    }
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

  /* ─── Sound (generated, no asset) ─────────────────────────── */
  function _primeAudio() {
    try {
      _actx = _actx || new (window.AudioContext || window.webkitAudioContext)();
      if (_actx.state === 'suspended') _actx.resume();
    } catch (_) {}
  }

  function _getSoundDurSecs() {
    var el = document.getElementById('alarmSoundDur');
    var v  = el ? parseFloat(el.value) : NaN;
    return (!isNaN(v) && v >= 1) ? Math.min(v, 60) : 10;
  }

  /* Play custom audio clip in a loop for `totalSecs`, 0.15s fade between plays */
  function _loopCustomAudio(url, totalSecs) {
    var deadline  = Date.now() + totalSecs * 1000;
    var FADE_MS   = 150;

    function playOnce() {
      if (Date.now() >= deadline) return;
      var a = new Audio(url);
      a.volume = 0;
      var p = a.play();
      var fadein = setInterval(function () {
        a.volume = Math.min(0.85, a.volume + 0.85 / (FADE_MS / 20));
        if (a.volume >= 0.85) { a.volume = 0.85; clearInterval(fadein); }
      }, 20);
      if (p && typeof p.catch === 'function') p.catch(function () {});
      a.onended = function () {
        if (Date.now() < deadline) setTimeout(playOnce, FADE_MS);
      };
      a.onerror = function () {};
    }
    playOnce();
  }

  /* Play the generated chime tone, repeated for `totalSecs` */
  function _loopChime(totalSecs) {
    var CHIME_PERIOD = 0.9; // seconds per chime cycle
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      var plays = Math.max(1, Math.ceil(totalSecs / CHIME_PERIOD));
      for (var rep = 0; rep < plays; rep++) {
        (function (r) {
          [659.25, 783.99, 1046.5].forEach(function (f, i) {
            var o = ctx.createOscillator(), g = ctx.createGain();
            o.type = 'sine'; o.frequency.value = f;
            var t = r * CHIME_PERIOD + i * 0.17;
            g.gain.setValueAtTime(0.0001, t);
            g.gain.exponentialRampToValueAtTime(0.25, t + 0.03);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
            o.connect(g).connect(ctx.destination);
            o.start(t); o.stop(t + 0.55);
          });
        })(rep);
      }
      setTimeout(function () { try { ctx.close(); } catch (_) {} }, totalSecs * 1000 + 500);
    } catch (_) {}
  }

  function _chime() {
    var dur = _getSoundDurSecs();
    try {
      var customUrl = window.getCustomAlarmURL && window.getCustomAlarmURL();
      if (customUrl) { _loopCustomAudio(customUrl, dur); return; }
    } catch (_) {}
    _loopChime(dur);
  }

  /* ─── SW bridge ───────────────────────────────────────────── */
  function _swReady() {
    return navigator.serviceWorker && navigator.serviceWorker.ready;
  }
  function _swSend(msg) {
    const p = _swReady();
    if (!p) return;
    p.then(reg => { if (reg.active) reg.active.postMessage(msg); });
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
    const notifOpts = { body: body || '', tag: opts.tag || 'grnd', icon: opts.icon, vibrate: [120, 60, 120] };
    if (_supported() && Notification.permission === 'granted') {
      // Prefer SW showNotification (works on mobile + backgrounded tabs)
      const p = _swReady();
      if (p) {
        p.then(reg => reg.showNotification(title, notifOpts)).catch(() => {
          try { new Notification(title, notifOpts); } catch (_) {}
        });
      } else {
        try { new Notification(title, notifOpts); } catch (_) {}
      }
    }
    _banner(title, body, opts.late);
    if (opts.silent !== true) _chime();
    if (navigator.vibrate) { try { navigator.vibrate([120, 60, 120]); } catch (_) {} }
  }

  /* ─── In-app banner ───────────────────────────────────────── */
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
    const alarm = { id: 'al_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
                    label: label || 'Reminder', fireAt, created: Date.now() };
    const arr = _load();
    arr.push(alarm);
    _save(arr);
    // Hand off to SW so it fires even when the tab is closed/backgrounded
    _swSend({ type: 'SCHEDULE_ALARM', alarm });
    _renderList();
    return true;
  }

  function _remove(id) {
    _save(_load().filter(a => a.id !== id));
    _swSend({ type: 'CANCEL_ALARM', id });
  }

  function _fire(a, late) {
    notify(a.label || 'Reminder', late ? 'This reminder came due while you were away.'
                                        : 'Time for: ' + (a.label || 'your reminder') + '.', { late, tag: a.id });
    _save(_load().filter(x => x.id !== a.id)); // remove without cancelling SW (it already fired)
  }

  function _tick() {
    const list = _load();
    if (!list.length) { if (_isOpen()) _renderList(); return; }
    const now = Date.now();
    list.forEach(a => { if (a.fireAt <= now) _fire(a, now - a.fireAt > 60000); });
    if (_isOpen()) _renderList();
  }

  /* ─── UI: overlay ─────────────────────────────────────────── */
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
            <div class="modal-label">REMINDERS</div>
            <div class="modal-name">⏰ PROGRAM ALARM</div>
          </div>
          <button class="modal-close" id="alarmCloseBtn">✕</button>
        </div>
        <div class="modal-divider"></div>
        <div class="modal-body alarm-body">
          <div class="alarm-perm" id="alarmPermRow"></div>

          <div class="alarm-field">
            <label class="alarm-flabel" for="alarmLabel">LABEL</label>
            <input class="alarm-input" id="alarmLabel" type="text" maxlength="48" placeholder="Workout reminder" value="Workout reminder">
          </div>

          <div class="alarm-mode">
            <button class="alarm-mode-btn active" data-mode="in">In…</button>
            <button class="alarm-mode-btn" data-mode="at">At time…</button>
          </div>

          <div class="alarm-pane" id="alarmPaneIn">
            <div class="alarm-chips">
              ${[5, 15, 30, 45, 60, 90].map(m => `<button class="alarm-chip" data-min="${m}">${m < 60 ? m + 'm' : (m/60) + 'h'}</button>`).join('')}
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

          <div class="alarm-field" style="margin-top:8px">
            <label class="alarm-flabel" for="alarmSoundDur">SOUND DURATION</label>
            <div class="alarm-field-row" style="margin-top:4px">
              <input class="alarm-input alarm-num" id="alarmSoundDur" type="number" min="1" max="60" value="10" style="width:64px">
              <span class="alarm-unit">seconds (clip repeats with fade)</span>
            </div>
          </div>

          <button class="alarm-set-btn" id="alarmSetBtn">SET ALARM</button>
          <button class="alarm-test-btn" id="alarmTestBtn">▶ Test notification (5s)</button>

          <div class="alarm-active-hdr" id="alarmActiveHdr"></div>
          <div class="alarm-list" id="alarmList"></div>
        </div>
      </div>`;
    document.body.appendChild(ov);

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
      if (d.getTime() <= Date.now()) d.setDate(d.getDate() + 1);
      fireAt = d.getTime();
    }
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

  /* ─── Render permission + active list ────────────────────── */
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
      row.innerHTML = `✓ Notifications enabled — alarms fire even when the app is closed.`;
    } else if (Notification.permission === 'denied') {
      row.className = 'alarm-perm warn';
      row.innerHTML = `Notifications blocked — alarms only trigger while GRND is open. Unblock in browser settings.`;
    } else {
      row.className = 'alarm-perm';
      row.innerHTML = `<span>Enable notifications to get alarms when the app is closed.</span>
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

  function _fmtClock(ms) {
    const d = new Date(ms);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const day = new Date(ms); day.setHours(0, 0, 0, 0);
    const t = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    return day.getTime() === today.getTime() ? t : 'tomorrow ' + t;
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

  /* ─── Boot ────────────────────────────────────────────────── */
  function _init() {
    const now = Date.now();
    _load().forEach(a => { if (a.fireAt <= now) _fire(a, true); });
    setInterval(_tick, 1000);

    // Sync pending alarms to SW so it can fire them even when tab is closed
    const pending = _load().filter(a => a.fireAt > Date.now());
    if (pending.length) _swSend({ type: 'SYNC_ALARMS', alarms: pending });

    // Listen for alarms the SW fired while the tab was closed
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('message', e => {
        if (e.data && e.data.type === 'ALARM_FIRED') {
          _save(_load().filter(a => a.id !== e.data.id));
          if (_isOpen()) _renderList();
        }
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _init);
  else _init();

  /* ─── Export ──────────────────────────────────────────────── */
  window.GRNDAlarm = { open, close, notify, schedule, requestPermission, setMode, setFromUI, test };
})();


/* ===== BACKUP / RESTORE ===== */
/* ══ BACKUP MODULE ═════════════════════════════════════════════════
   Public API (window.GRNDBackup):
     export()     — download all grnd_* localStorage keys as JSON
     importPick() — open file picker; restore keys from JSON file
══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const PREFIX = 'grnd_';

  function _collect() {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIX)) {
        try { out[k] = JSON.parse(localStorage.getItem(k)); }
        catch (_) { out[k] = localStorage.getItem(k); }
      }
    }
    return out;
  }

  function _toast(msg, ok) {
    let t = document.getElementById('grndBackupToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'grndBackupToast';
      t.className = 'grnd-backup-toast';
      t.innerHTML = '<strong></strong><span></span>';
      document.body.appendChild(t);
    }
    t.className = 'grnd-backup-toast ' + (ok ? 'ok' : 'err');
    t.querySelector('strong').textContent = ok ? '✓ ' + msg : '✕ ' + msg;
    t.querySelector('span').textContent   = ok ? 'All your data has been restored.' : 'Check the file and try again.';
    t.classList.add('show');
    setTimeout(function () { t.classList.remove('show'); }, 4000);
  }

  function exportBackup() {
    const data     = _collect();
    const json     = JSON.stringify({ _v: 1, _ts: Date.now(), data: data }, null, 2);
    const blob     = new Blob([json], { type: 'application/json' });
    const url      = URL.createObjectURL(blob);
    const date     = new Date().toISOString().slice(0, 10);
    const a        = document.createElement('a');
    a.href         = url;
    a.download     = 'grnd-backup-' + date + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function importPick() {
    const inp  = document.createElement('input');
    inp.type   = 'file';
    inp.accept = '.json,application/json';
    inp.onchange = function () {
      const file = inp.files && inp.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          const parsed = JSON.parse(e.target.result);
          const src    = parsed.data || parsed; // support both wrapped and bare
          let count    = 0;
          Object.keys(src).forEach(function (k) {
            if (k.startsWith(PREFIX)) {
              localStorage.setItem(k, typeof src[k] === 'string' ? src[k] : JSON.stringify(src[k]));
              count++;
            }
          });
          _toast('Restored ' + count + ' items', true);
          setTimeout(function () { location.reload(); }, 1600);
        } catch (err) {
          _toast('Invalid backup file', false);
        }
      };
      reader.readAsText(file);
    };
    document.body.appendChild(inp);
    inp.click();
    document.body.removeChild(inp);
  }

  window.GRNDBackup = { export: exportBackup, importPick: importPick };

})();
