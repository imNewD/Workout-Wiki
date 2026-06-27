/* ──────────────────────────────────────────────────────────────
   src/home-init.js — extracted from index.html (token-efficiency split)
   Home/init: program & nutrition counts, library-view toggle, inline global search helpers.
   Loaded as a plain (non-defer) <script src> in index.html at the
   same position it previously occupied inline — load order matters.
────────────────────────────────────────────────────────────── */
/* ── Init counts ───────────────────────────────────────── */
(function(){
  function getSavedCustomPrograms() {
    try {
      const raw = localStorage.getItem('grnd_custom_programs');
      const parsed = JSON.parse(raw || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function countPrograms(programs) {
    return Array.isArray(programs) ? programs.length : 0;
  }

  function updateHomeProgramsCount() {
    const homeProgramsEl = document.getElementById('home-programs-count');
    if(!homeProgramsEl) return;
    const stdPrograms = Array.isArray(window.PROGRAMS)
      ? window.PROGRAMS
      : (Array.isArray(PROGRAMS) ? PROGRAMS : []);
    const savedPrograms = getSavedCustomPrograms();
    const customPrograms = savedPrograms.filter(p => !stdPrograms.some(sp => sp.id === p.id));
    const totalPrograms = stdPrograms.concat(customPrograms);
    homeProgramsEl.textContent = countPrograms(totalPrograms) + ' programs';
  }

  window.updateHomeProgramsCount = updateHomeProgramsCount;

  const hofN = getHallOfFameExercises().length;
  const hofEl = document.getElementById('hof-count');
  if(hofEl) hofEl.textContent = hofN + ' exercises';

  // Per-library exercise counts
  const LIB_COUNT_KEYS = ['warmup','stretching','pushup','planche','pullup','dip','squat','core','handstand','isometric','chinup','frontlever','backlever','weighted','gymChest','gymBack','gymShoulders','gymLegs','gymArms','gymCore','cardioRunning','cardioCycling','cardioHIIT','cardioRowing','cardioRecovery','cardioMobility'];
  LIB_COUNT_KEYS.forEach(key => {
    const countId = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    const el = document.getElementById(countId + '-count');
    if(el) el.textContent = getLibEntries(key).length + ' exercises';
  });

  const homeWeightsEl = document.getElementById('home-weights-count');
  if(homeWeightsEl) {
    const gymWeightKeys = ['weighted','gymChest','gymBack','gymShoulders','gymLegs','gymArms','gymCore'];
    const gymWeightCount = gymWeightKeys.reduce((sum, key) => sum + getLibEntries(key).length, 0);
    homeWeightsEl.textContent = gymWeightCount + ' exercises';
  }

  const homeBodyweightEl = document.getElementById('home-bodyweight-count');
  if(homeBodyweightEl) {
    const bodyweightKeys = ['warmup','pushup','planche','pullup','chinup','squat','core','dip','handstand','isometric','frontlever','backlever'];
    const bodyweightCount = bodyweightKeys.reduce((sum, key) => sum + getLibEntries(key).length, 0);
    homeBodyweightEl.textContent = bodyweightCount + ' exercises';
  }

  const homeCardioEl = document.getElementById('home-cardio-count');
  if(homeCardioEl) {
    const cardioKeys = ['cardioRunning','cardioCycling','cardioHIIT','cardioRowing','cardioRecovery','cardioMobility'];
    const cardioCount = cardioKeys.reduce((sum, key) => sum + getLibEntries(key).length, 0);
    homeCardioEl.textContent = cardioCount + ' exercises';
  }

  /* ── Programs count ── */
  updateHomeProgramsCount();

  /* ── nutrition counts ── */
  const homeNutritionEl = document.getElementById('home-nutrition-count');
  if(homeNutritionEl) {
    homeNutritionEl.textContent = (LIB_DATA.foods||[]).length + ' foods';
  }
  const foodsCountEl = document.getElementById('foods-count');
  if(foodsCountEl) foodsCountEl.textContent = (LIB_DATA.foods||[]).length + ' foods';

  const comboEl = document.getElementById('combo-count');
  if(comboEl) comboEl.textContent = getLibEntries('combo').length + ' exercises';

  // ── Library view toggle ─────────────────────────────────
  (function initLibViewToggle() {
    document.querySelectorAll('.view-toggle-btn[data-view-target]').forEach(btn => {
      const wrap = document.getElementById(btn.dataset.viewTarget);
      if(!wrap) return;
      let libView = localStorage.getItem(btn.dataset.viewTarget + '-view') || 'card';
      function applyLibView() {
        wrap.classList.toggle('card-mode', libView === 'card');
        btn.textContent = libView === 'card' ? '☰ LIST' : '⊞ GRID';
      }
      applyLibView();
      btn.onclick = function() {
        libView = libView === 'list' ? 'card' : 'list';
        localStorage.setItem(btn.dataset.viewTarget + '-view', libView);
        applyLibView();
      };
    });
  })();
})();
/* ══ GLOBAL SEARCH — inline results on bodyweight page ══════ */
// Register inline as a pseudo-library that queries all data
LIB_STATE.inline  = { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null };
LIB_IDS.inline    = { sticky:'inline-sticky', scroll:'inline-scroll', body:'inline-body', filterRow:null, search:null, empty:'inline-empty', total:'inline-total', shown:'inline-shown' };
LIB_DATA.inline   = { data: [] }; // populated dynamically from all libs

function renderInlineSearch(term) {
  // Gather all exercises from every data source
  const progressData = loadProgress();
  const unlockedHof = new Set(getUnlockedHofKeys());
  const allEntries = Object.entries(LIB_DATA)
    .filter(([k]) => k !== 'inline' && k !== 'all' && k !== 'frontlever')
    .flatMap(([libKey, lib]) => {
      const entries = Array.isArray(lib) ? lib : (lib?.data || []);
      return entries.filter(isListedExercise).filter(e => !e.pantheon || pantheonRequirementsMet(e, unlockedHof, progressData)).map(e => ({ ...e, _libKey: libKey }));
    })
    .concat(getUnlockedPantheonExercises().filter(isListedExercise).map(e => ({ ...e, _libKey: 'pantheon' })));

  const filtered = allEntries.filter(e => grndMatchEx(e, term));

  const st = LIB_STATE.inline;

  // Sort
  filtered.sort((a,b) => {
    let av, bv;
    if(st.sortCol==='name')    { av=a.name; bv=b.name; return st.sortDir*(av<bv?-1:av>bv?1:0); }
    if(st.sortCol==='muscles') { av=(a.muscles||[]).find(m=>m.p)?.n||''; bv=(b.muscles||[]).find(m=>m.p)?.n||''; return st.sortDir*(av<bv?-1:av>bv?1:0); }
    if(st.sortCol==='diff')    { return st.sortDir*(a.diff-b.diff); }
    if(['str','vol','end'].includes(st.sortCol)) {
      const score = e => { const g=e[st.sortCol]; return (g?.suit?10:0)+(g?.eff||0); };
      return st.sortDir*(score(a)-score(b));
    }
    if(st.sortCol==='risk') { return st.sortDir*(a.risk-b.risk); }
    return 0;
  });

  const totalEl = document.getElementById('inline-total');
  const shownEl = document.getElementById('inline-shown');
  if(totalEl) totalEl.textContent = allEntries.length;
  if(shownEl) shownEl.textContent = filtered.length;

  const emptyEl = document.getElementById('inline-empty');
  const bodyEl  = document.getElementById('inline-body');

  if(filtered.length===0) {
    if(bodyEl) bodyEl.innerHTML='';
    if(emptyEl) emptyEl.style.display='block';
    return;
  }
  if(emptyEl) emptyEl.style.display='none';

  // Reuse the existing row-building logic via renderLibTable with a temporary override
  // Instead, build rows directly using the same helpers already defined above
  if(!bodyEl) return;
  bodyEl.innerHTML = filtered.map(e => {
    const libKey = e._libKey || 'pushup';
    const prim   = (e.muscles||[]).filter(m=>m.p).map(m=>m.n);
    const sec    = (e.muscles||[]).filter(m=>!m.p).map(m=>m.n);
    const tags   = [...prim.map(n=>`<span class="mtag pri" onclick="openMuscle(event,'${n}')">${n}</span>`),
                    ...sec.map(n=>`<span class="mtag sec" onclick="openMuscle(event,'${n}')">${n}</span>`)].join('');
    const dp     = Math.round((e.diff/10)*100);
    const dc     = e.diff<=3?'var(--green)':e.diff<=6?'var(--gold)':'var(--accent)';
    const diffDisplay = e.diff;
    const pantheonBadge = libKey === 'pantheon' ? '<span class="hof-badge" style="background:rgba(124,58,237,0.16);border-color:rgba(192,132,252,0.45);color:#f0abfc">PANTHEON</span>' : '';
    return `
    <tr onclick="toggleInlineDetail('${libKey}',${e.id})"${e.hof?' class="hof-row"':''}>
      <td class="ex-name">${e.name}${e.hof?'<span class="hof-badge">HOF</span>':''}${pantheonBadge}<br/><span class="ex-alt">${e.alt||''}</span></td>
      <td><div class="muscles">${tags}</div></td>
      <td><div class="diff-wrap">
        <div class="diff-bar"><div class="diff-fill" style="width:${dp}%;background:${dc}"></div></div>
        <span class="diff-num" style="color:${dc}">${diffDisplay}/10</span>
      </div></td>
      ${tCell(e.str)}${tCell(e.vol)}${tCell(e.end)}
      ${riskCell(e.risk)}
    </tr>
    <tr class="detail-row${e.hof?' hof':''}" id="detail-inline-${libKey}-${e.id}">
      <td class="detail-cell" colspan="7">
        <div class="detail-grid">
          <div class="${e.hof?'hof-desc-block':'detail-block'}">${e.hof?`<strong>DESCRIPTION</strong><span class="hof-desc-text">${e.desc}</span><span class="hof-feat-tag">★ HALL OF FAME FEAT</span>`:`<strong>DESCRIPTION</strong><div class="detail-block-text">${e.desc}</div>`}</div>
          <div class="detail-block"><strong>COACHING CUES</strong><div class="detail-block-text">${e.cues}</div></div>
          <div class="detail-block"><strong>EQUIPMENT</strong><div class="detail-meta">${e.equipment}<br/><strong style="margin-top:8px;display:block">BODY POSITION</strong>${e.position}${kcalBlock(e)}</div></div>
        </div>
        ${prescriptionBlock(e)}
      </td>
    </tr>`;
  }).join('');
}

let _inlineOpenRow = null;
function toggleInlineDetail(libKey, id) {
  const row = document.getElementById(`detail-inline-${libKey}-${id}`);
  if(!row) return;
  if(_inlineOpenRow && _inlineOpenRow !== row) _inlineOpenRow.classList.remove('open');
  row.classList.toggle('open');
  _inlineOpenRow = row.classList.contains('open') ? row : null;
}

function grndCardioSearch(query) {
  document.querySelectorAll('#cardioLibraryListWrap .lib-item').forEach(li => {
    const text = (li.querySelector('.lib-name')?.textContent || '') + ' ' + (li.querySelector('.lib-meta')?.textContent || '');
    li.style.display = grndMatch([text], query) ? '' : 'none';
  });
}

function grndGymSearch(query) {
  document.querySelectorAll('#gymLibraryListWrap .lib-item').forEach(li => {
    const text = (li.querySelector('.lib-name')?.textContent || '') + ' ' + (li.querySelector('.lib-meta')?.textContent || '');
    li.style.display = grndMatch([text], query) ? '' : 'none';
  });
}

function clearGlobalSearch() {
  const el = document.getElementById('globalSearch');
  if(el) { el.value = ''; el.focus(); }
  document.getElementById('inlineSearchResults').style.display = 'none';
  document.getElementById('libraryListWrap').style.display = '';
}

const globalSearchEl = document.getElementById('globalSearch');
if(globalSearchEl) {
  globalSearchEl.addEventListener('input', e => {
    const term = e.target.value;
    const resultsEl = document.getElementById('inlineSearchResults');
    const listEl    = document.getElementById('libraryListWrap');
    if(term.trim()) {
      if(resultsEl) resultsEl.style.display = '';
      if(listEl)    listEl.style.display    = 'none';
      renderInlineSearch(term.trim());
    } else {
      if(resultsEl) resultsEl.style.display = 'none';
      if(listEl)    listEl.style.display    = '';
    }
  });

  // Sortable column headers for inline results.
  // Must run after DOMContentLoaded so inject() has already populated
  // inline-sticky with th.sortable elements.
  document.addEventListener('DOMContentLoaded', () => {
    const inlineStickyEl = document.getElementById('inline-sticky');
    if(inlineStickyEl) {
      inlineStickyEl.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => {
          const st  = LIB_STATE.inline;
          const col = th.dataset.col;
          if(st.sortCol===col) st.sortDir*=-1; else { st.sortCol=col; st.sortDir=1; }
          inlineStickyEl.querySelectorAll('th.sortable').forEach(t=>{ t.classList.remove('sorted'); t.querySelector('.si').textContent='↕'; });
          th.classList.add('sorted');
          th.querySelector('.si').textContent = st.sortDir===1?'↑':'↓';
          const term = document.getElementById('globalSearch')?.value.trim() || '';
          renderInlineSearch(term);
        });
      });
      // Scroll sync
      const inlineScrollEl = document.getElementById('inline-scroll');
      if(inlineScrollEl) {
        inlineScrollEl.addEventListener('scroll', ()=>{ inlineStickyEl.scrollLeft=inlineScrollEl.scrollLeft; });
        inlineStickyEl.addEventListener('scroll', ()=>{ inlineScrollEl.scrollLeft=inlineStickyEl.scrollLeft; });
      }
    }
  });
}

/* └─ @end:  js/library.js ─────────────────────────────────────────── */
/* ┌─ @file: js/progress.js ────────────────────────────────────────── */
/* → MOVED TO progress.js (script tag right after this inline block
   closes, before settings.js / ranking.js). Contains: PROG_KEY,
   loadProgress, saveProgress, applyProgress*, progress context panel,
   long-press/right-click handling on tree items. */
/* └─ @end:  js/progress.js ────────────────────────────────────────── */
/* ┌─ @file: js/settings.js + js/theme.js ──────────────────────────── */
/* → MOVED TO settings.js § ② (theme.js + settings.js)
   Contains: THEME_META, _setThemeLabelDesc, _updateThemeBtns,
             setBaseTheme, updateAllModeBtns, boot restore call.
/* └─ @end:  js/settings.js + js/theme.js ──────────────────────────── */
/* ┌─ @file: js/modes.js ───────────────────────────────────────────── */
/* → MOVED TO settings.js:
   § ③  modes.js        — all unlockable theme modes (pushup/pull/dip/squat/
                           core/handstand/isometric/combo/warmup/stretch/hof/
                           pantheon) + admin cheat hook.
   § ④  profile / menu  — MENU PANEL IIFE (openMenuPanel, saveProfile,
                           handleProfilePhoto, removeProfilePhoto …)
   § ⑤  player-level    — PLAYER LEVEL SYSTEM IIFE (renderPlayerLevel …)
   § ⑥  image-crop      — IMAGE CROP MODULE IIFE (openCropModal …)
   § ⑦  sendFeedback    — feedback stub (feature currently disabled)
/* └─ @end:  js/modes.js ───────────────────────────────────────────── */

/* ══════════════════════════════════════════════════════════════
   PLAYER TIER COUNTS — REMOVED (V1.44)
   The old cross-user tier counter + score leaderboard system
   (formerly js/firebase.js → firebase-sw.js, window.ldbLoad,
   window.resetLeaderboard, etc.) has been removed entirely along
   with the Firebase Realtime Database dependency. Replaced by the
   self-improvement "Your Progress" / leaderboard flow in ranking.js
   — no real cross-user comparison data anywhere in the app now.
   The navigator.serviceWorker.register('./sw.js') call that used to
   ride along inside firebase-sw.js is restored as its own small
   inline snippet further down (see "SERVICE WORKER REGISTRATION").
   ────────────────────────────────────────────────────────────── */


