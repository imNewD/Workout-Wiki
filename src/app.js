/* ── src/app.js — main app bundle ── */

/* ── SAFE DATA ALIASES ─────────────────────────────────────────────────────
   Every global declared by a data file is wrapped with typeof here.
   If a file is missing or fails to load, its alias is [] (or new Set())
   and the affected library shows empty rather than crashing the app.
   Add a new alias here whenever a new data file is referenced below.
 ─────────────────────────────────────────────────────────────────────────── */
const _warmups               = typeof warmups               !== 'undefined' ? warmups               : [];
const _stretches             = typeof stretches             !== 'undefined' ? stretches             : [];
const _pushups               = typeof pushups               !== 'undefined' ? pushups               : [];
const _planches              = typeof planches              !== 'undefined' ? planches              : [];
const _pullups               = typeof pullups               !== 'undefined' ? pullups               : [];
const _chinupData            = typeof chinupData            !== 'undefined' ? chinupData            : [];
const _combos                = typeof combos                !== 'undefined' ? combos                : [];
const _weightedWorkouts      = typeof weightedWorkouts      !== 'undefined' ? weightedWorkouts      : [];
const _gymChestWorkouts      = typeof gymChestWorkouts      !== 'undefined' ? gymChestWorkouts      : [];
const _gymBackWorkouts       = typeof gymBackWorkouts       !== 'undefined' ? gymBackWorkouts       : [];
const _gymShouldersWorkouts  = typeof gymShouldersWorkouts  !== 'undefined' ? gymShouldersWorkouts  : [];
const _gymLegsWorkouts       = typeof gymLegsWorkouts       !== 'undefined' ? gymLegsWorkouts       : [];
const _gymArmsWorkouts       = typeof gymArmsWorkouts       !== 'undefined' ? gymArmsWorkouts       : [];
const _gymCoreWorkouts       = typeof gymCoreWorkouts       !== 'undefined' ? gymCoreWorkouts       : [];
const _squats                = typeof squats                !== 'undefined' ? squats                : [];
const _coreExercises         = typeof coreExercises         !== 'undefined' ? coreExercises         : [];
const _dips                  = typeof dips                  !== 'undefined' ? dips                  : [];
const _handstands            = typeof handstands            !== 'undefined' ? handstands            : [];
const _isometrics            = typeof isometrics            !== 'undefined' ? isometrics            : [];
const _frontlevers           = typeof frontlevers           !== 'undefined' ? frontlevers           : [];
const _frontleverIsoIds      = typeof frontleverIsoIds      !== 'undefined' ? frontleverIsoIds      : new Set();
const _frontleverStaticWorkouts = typeof frontleverStaticWorkouts !== 'undefined' ? frontleverStaticWorkouts : [];
const _frontleverPullIds     = typeof frontleverPullIds     !== 'undefined' ? frontleverPullIds     : new Set();
const _frontleverPullWorkouts = typeof frontleverPullWorkouts !== 'undefined' ? frontleverPullWorkouts : [];
const _backlevers            = typeof backlevers            !== 'undefined' ? backlevers            : [];
const _cardioRunning         = typeof cardioRunning         !== 'undefined' ? cardioRunning         : [];
const _cardioCycling         = typeof cardioCycling         !== 'undefined' ? cardioCycling         : [];
const _cardioHIIT            = typeof cardioHIIT            !== 'undefined' ? cardioHIIT            : [];
const _cardioRowing          = typeof cardioRowing          !== 'undefined' ? cardioRowing          : [];
const _cardioRecovery        = typeof cardioRecovery        !== 'undefined' ? cardioRecovery        : [];
const _cardioMobility        = typeof cardioMobility        !== 'undefined' ? cardioMobility        : [];
const _foods                 = typeof foods                 !== 'undefined' ? foods                 : [];
/* V1.43 — 2026-05 [CURRENT] · version entries → DevNotes.js */
/* Helper — switches the active jb-tab within its tab bar */
function switchTab(btn) {
  const bar = btn.closest('.jb-tab-bar');
  if (bar) bar.querySelector('.jb-tab.active')?.classList.remove('active');
  btn.classList.add('active');
}

/* ── Hub library list search (gym / cardio) ───────────────────────────────
   Filters .lib-item cards in a hub wrapper by name/meta text.             */
function grndHubSearch(term, wrapId) {
  const wrap = document.getElementById(wrapId);
  if (!wrap) return;
  const q = grndNorm(term);
  wrap.querySelectorAll('.lib-item').forEach(item => {
    if (!q) { item.style.display = ''; return; }
    const name = grndNorm(item.querySelector('.lib-name')?.textContent || '');
    const meta = grndNorm(item.querySelector('.lib-meta')?.textContent || '');
    item.style.display = (name.includes(q) || meta.includes(q)) ? '' : 'none';
  });
}
/* Navigating (goTo) hides the current view — including the search box the
   user is typing in — so re-navigating on every keystroke steals focus
   after the first character. Only navigate once; after that, just
   re-render the already-visible target table. Debounced since
   renderLibTable rebuilds the whole table and can take 100ms+. */
let _grndGymSearchDebounce;
function grndGymSearch(v) {
  if (!v) return;
  LIB_STATE.gymAll.searchTerm = v;
  const inp = document.getElementById('gym-all-search');
  if (inp) inp.value = v;
  clearTimeout(_grndGymSearchDebounce);
  _grndGymSearchDebounce = setTimeout(() => {
    if (document.querySelector('.view.active')?.id === 'view-gym-all-library') { renderLibTable('gymAll'); return; }
    goTo('gym-all-library');
    inp?.focus();
    inp?.setSelectionRange(inp.value.length, inp.value.length);
  }, 200);
}
let _grndCardioSearchDebounce;
function grndCardioSearch(v) {
  if (!v) return;
  LIB_STATE.cardioAll.searchTerm = v;
  const inp = document.getElementById('cardio-all-search');
  if (inp) inp.value = v;
  clearTimeout(_grndCardioSearchDebounce);
  _grndCardioSearchDebounce = setTimeout(() => {
    if (document.querySelector('.view.active')?.id === 'view-cardio-all-library') { renderLibTable('cardioAll'); return; }
    goTo('cardio-all-library');
    inp?.focus();
    inp?.setSelectionRange(inp.value.length, inp.value.length);
  }, 200);
}

/* ── Nutrition hub search ─────────────────────────────────────────────────
   Searches foods data + all vmlib-row items (vitamins, hydration, timing).
   Results render inline; clicking foods navigates + pre-fills foods search;
   clicking nutrient rows opens the nutrient overlay.                       */
function grndNutritionSearch(v) {
  const resultsEl = document.getElementById('nutritionSearchResults');
  const wrapEl    = document.getElementById('nutritionLibraryListWrap');
  if (!resultsEl || !wrapEl) return;
  const q = grndNorm(v);
  if (!q) {
    resultsEl.style.display = 'none';
    wrapEl.style.display = '';
    return;
  }
  const matches = [];
  // Foods
  (LIB_DATA.foods || []).forEach(f => {
    if (grndMatchEx(f, q)) {
      const cats = (f.muscles||[]).map(m=>m.n).join(' · ') || (f.tags||[]).join(', ');
      matches.push({
        name: f.name, sub: f.alt ? `${f.alt} · ${cats}` : cats, source: 'Foods',
        onclick: `(function(){const inp=document.getElementById('foods-search');if(inp)inp.value=${JSON.stringify(v)};goTo('foods-library');setTimeout(()=>{if(inp){const ev=new Event('input');inp.dispatchEvent(ev);}},60);})()`
      });
    }
  });
  // vmlib-rows in vitamins / hydration / meal-timing views
  const NUTR_VIEWS = {
    'view-vitamins-library': 'Vitamins & Minerals',
    'view-hydration-library': 'Hydration',
    'view-meal-timing-library': 'Meal Timing'
  };
  Object.entries(NUTR_VIEWS).forEach(([viewId, label]) => {
    const viewEl = document.getElementById(viewId);
    if (!viewEl) return;
    viewEl.querySelectorAll('.vmlib-row').forEach(row => {
      const name = row.querySelector('.vmlib-name')?.textContent || '';
      const sub  = row.querySelector('.vmlib-sub')?.textContent  || '';
      if (grndMatch([name, sub], q)) {
        const oc = row.getAttribute('onclick') || '';
        const m  = oc.match(/openNutrient\(event,'([^']+)'\)/);
        const key = m ? m[1] : name;
        matches.push({
          name, sub, source: label,
          onclick: `openNutrient(event,${JSON.stringify(key)})`
        });
      }
    });
  });
  const shownEl = document.getElementById('nutr-shown');
  const listEl  = document.getElementById('nutr-results-list');
  const emptyEl = document.getElementById('nutr-empty');
  if (shownEl) shownEl.textContent = matches.length;
  if (!matches.length) {
    if (listEl) listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
  } else {
    if (emptyEl) emptyEl.style.display = 'none';
    if (listEl) listEl.innerHTML = matches.map(m =>
      `<div class="lib-item active" style="cursor:pointer" onclick="${m.onclick.replace(/"/g,'&quot;')}">
        <div class="lib-left">
          <div class="lib-name">${m.name}</div>
          <div class="lib-meta">${m.source}${m.sub ? ' · ' + m.sub : ''}</div>
        </div>
        <div class="lib-right"><span class="lib-arrow">→</span></div>
      </div>`
    ).join('');
  }
  resultsEl.style.display = '';
  wrapEl.style.display = 'none';
}
function clearNutritionSearch() {
  const inp = document.getElementById('nutrition-search');
  if (inp) inp.value = '';
  grndNutritionSearch('');
}

/* ── Recovery hub search ──────────────────────────────────────────────────
   Searches all rcv-card <details> summaries across every recovery sub-view.
   Results render inline; clicking navigates to the containing sub-view.   */
const RCV_VIEW_LABELS = {
  'view-recover-basics':      'Recovery Basics',
  'view-recover-tissue':      'Heal by Injury Type',
  'view-recover-supplements': 'What to Take',
  'view-recover-methods':     'What to Do',
  'view-recover-timelines':   'Recovery Timelines'
};
function grndRecoverSearch(v) {
  const resultsEl = document.getElementById('recoverSearchResults');
  const wrapEl    = document.getElementById('recoverHubList');
  if (!resultsEl || !wrapEl) return;
  const q = grndNorm(v);
  if (!q) {
    resultsEl.style.display = 'none';
    wrapEl.style.display = '';
    return;
  }
  const matches = [];
  Object.entries(RCV_VIEW_LABELS).forEach(([viewId, label]) => {
    const viewEl = document.getElementById(viewId);
    if (!viewEl) return;
    const navKey = viewId.replace('view-', '');
    viewEl.querySelectorAll('details.rcv-card').forEach(card => {
      const title = card.querySelector('.rcv-sum-title')?.textContent || '';
      const sub   = card.querySelector('.rcv-sum-sub')?.textContent  || '';
      if (grndMatch([title, sub], q)) {
        matches.push({ name: title, sub, source: label, navKey });
      }
    });
  });
  const shownEl = document.getElementById('rcv-shown');
  const listEl  = document.getElementById('rcv-results-list');
  const emptyEl = document.getElementById('rcv-empty');
  if (shownEl) shownEl.textContent = matches.length;
  if (!matches.length) {
    if (listEl) listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
  } else {
    if (emptyEl) emptyEl.style.display = 'none';
    if (listEl) {
      listEl.innerHTML = matches.map(m =>
        `<div class="lib-item active" style="cursor:pointer" data-nav="${m.navKey}" data-title="${m.name.replace(/"/g,'&quot;')}">
          <div class="lib-left">
            <div class="lib-name">${m.name}</div>
            <div class="lib-meta">${m.source}${m.sub ? ' · ' + m.sub : ''}</div>
          </div>
          <div class="lib-right"><span class="lib-arrow">→</span></div>
        </div>`
      ).join('');
      listEl.querySelectorAll('.lib-item').forEach(el => {
        el.addEventListener('click', () => grndScrollToCard(el.dataset.nav, el.dataset.title));
      });
    }
  }
  resultsEl.style.display = '';
  wrapEl.style.display = 'none';
}
function clearRecoverSearch() {
  const inp = document.getElementById('recover-search');
  if (inp) inp.value = '';
  grndRecoverSearch('');
}

function grndScrollToCard(navKey, titleText) {
  goTo(navKey);
  setTimeout(() => {
    const viewEl = document.getElementById('view-' + navKey);
    if (!viewEl) return;
    let target = null;
    viewEl.querySelectorAll('details.rcv-card').forEach(card => {
      if ((card.querySelector('.rcv-sum-title')?.textContent || '') === titleText) target = card;
    });
    if (!target) return;
    target.open = true;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.style.transition = 'box-shadow 0.3s, background 0.3s';
    target.style.background = 'rgba(255,200,0,0.18)';
    target.style.boxShadow  = '0 0 0 2px rgba(255,180,0,0.6)';
    setTimeout(() => {
      target.style.background = '';
      target.style.boxShadow  = '';
    }, 3000);
  }, 80);
}

/* ── Bodyweight global search ─────────────────────────────────────────────
   Routes to the all-library view (full table with all columns).
   Same fix as grndGymSearch/grndCardioSearch: only navigate once (goTo
   hides the current view, including this input, which steals focus after
   the first keystroke), and debounce since renderLibTable is expensive. */
let _renderGlobalSearchDebounce;
function renderGlobalSearch(term) {
  if (!term) return;
  LIB_STATE.all.searchTerm = term;
  const inp = document.getElementById('all-search');
  if (inp) inp.value = term;
  clearTimeout(_renderGlobalSearchDebounce);
  _renderGlobalSearchDebounce = setTimeout(() => {
    if (document.querySelector('.view.active')?.id === 'view-all-library') { renderLibTable('all'); return; }
    goTo('all-library');
    inp?.focus();
    inp?.setSelectionRange(inp.value.length, inp.value.length);
  }, 200);
}

function clearGlobalSearch() {
  const gs = document.getElementById('globalSearch');
  if (gs) gs.value = '';
  LIB_STATE.all.searchTerm = '';
  goTo('bodyweight');
}

/* SIDE_QUEST_MAP: parentName → variant exercises (sidequestKey field). Built on DOMContentLoaded. */
window.SIDE_QUEST_MAP = {};

window.buildSideQuestMap = function() {
  window.SIDE_QUEST_MAP = {};
window.SIDE_QUEST_PARENT_MAP = {};
  const sources = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES.slice() : [];
  const libKeys = typeof ALL_LIBRARY_KEYS !== 'undefined' ? ALL_LIBRARY_KEYS.slice() : [];

  if(sources.length === 0 && libKeys.length > 0) {
    sources.push.apply(sources, libKeys.map(key => ({ libKey: key, data: Array.isArray(LIB_DATA?.[key]) ? LIB_DATA[key] : [] })));
  }

  sources.forEach(function(source) {
    const libKey = source && source.libKey ? source.libKey : null;
    let dataObj = Array.isArray(source?.data) ? source.data : null;
    if(!dataObj && libKey) {
      dataObj = Array.isArray(LIB_DATA?.[libKey]) ? LIB_DATA[libKey]
              : Array.isArray(window[libKey]) ? window[libKey]
              : Array.isArray(window[libKey + 's']) ? window[libKey + 's']
              : Array.isArray(window[libKey.toUpperCase()]) ? window[libKey.toUpperCase()]
              : Array.isArray(window[libKey.toUpperCase() + '_DATA']) ? window[libKey.toUpperCase() + '_DATA']
              : null;
    }
    if(!dataObj) return;
    const items = Array.isArray(dataObj) ? dataObj
                : Array.isArray(dataObj.items) ? dataObj.items
                : [];
    items.forEach(function(ex) {
      if(!ex || !ex.sidequestKey) return;
      const parentName = String(ex.sidequestKey).trim();
      if(!window.SIDE_QUEST_MAP[parentName]) window.SIDE_QUEST_MAP[parentName] = [];
      window.SIDE_QUEST_MAP[parentName].push({
        ...ex,
        _sqSourceLib: source.lib || source.libKey || '',
        _sqSourceLibKey: source.libKey || source.lib || '',
        _sqSourceFamily: source.family || ex.family || '',
      });
    });
  });
};

/* Mark First: pins a variant key (libKey-id) as primary for a given parent. Stored in grnd_sq_mark_first. */
const SQ_MARK_FIRST_KEY = 'grnd_sq_mark_first';

function loadSqMarkFirst() {
  const raw = getStorageValue(SQ_MARK_FIRST_KEY);
  const data = parseStoredJSON(raw);
  return data || {};
}

function saveSqMarkFirst(data) {
  setStorageValue(SQ_MARK_FIRST_KEY, JSON.stringify(data));
}

function setSqMarkFirst(parentName, variantKey) {
  const data = loadSqMarkFirst();
  data[parentName] = variantKey;
  saveSqMarkFirst(data);
}

function clearSqMarkFirst(parentName) {
  const data = loadSqMarkFirst();
  delete data[parentName];
  saveSqMarkFirst(data);
}

/* Toggle a side quest panel open/closed.
   `tabEl` is the .sq-tab button that was clicked. */
window.toggleSideQuest = function(event, tabEl) {
  event.stopPropagation();
  const panel = tabEl.nextElementSibling; // .sq-panel
  if(!panel) return;
  const isOpen = panel.classList.contains('open');
  // Refresh status dots each time we open
  if(!isOpen) {
    const progressData = loadProgress();
    panel.querySelectorAll('.sq-item').forEach(function(item) {
      const lib = item.dataset.sqLib;
      const id  = item.dataset.sqId;
      if(!lib || !id) return;
      const status = progressData[lib + '-' + id] || '';
      item.dataset.sqStatus = status;
    });
  }
  panel.classList.toggle('open', !isOpen);
  tabEl.classList.toggle('open', !isOpen);
};

function getSqVariantKey(ex) {
  return (ex._sqSourceLibKey || ex.libKey || ex.lib || '') + '-' + (ex.id || '');
}

function getPrimarySqVariant(parentName, sqItems) {
  if(!Array.isArray(sqItems) || sqItems.length === 0) return null;
  const markFirstMap = loadSqMarkFirst();
  const selectedKey = parentName ? markFirstMap[parentName] : null;
  if(selectedKey) {
    const selected = sqItems.find(function(ex) {
      return getSqVariantKey(ex) === selectedKey;
    });
    if(selected) return selected;
  }
  return sqItems.slice().sort(function(a, b) {
    const tierA = clampTreeDifficulty(a.diff);
    const tierB = clampTreeDifficulty(b.diff);
    if(tierA !== tierB) return tierA - tierB;
    const diffA = Number(a.diff) || 1;
    const diffB = Number(b.diff) || 1;
    if(diffA !== diffB) return diffA - diffB;
    return (a.name || '').localeCompare(b.name || '');
  })[0] || null;
}

/* Family pool = parent node + SQ variants. PRIMARY = Mark-First pin if set, else the parent.
   BRANCHES = rest of pool shown in the SQ panel. Promoting a branch swaps it with the parent. */
function parentAsSqVariant(item){
  if(!item) return null;
  const libKey = item.libKey || item._sqSourceLibKey || item.lib || '';
  const lib = item.lib || item._sqSourceLib || libKey;
  return {
    ...item,
    name: item.name,
    id: item.id,
    libKey: libKey,
    lib: lib,
    diff: item.diff,
    family: item.family || item._sqSourceFamily || '',
    hof: !!item.hof,
    _sqSourceLib: lib,
    _sqSourceLibKey: libKey,
    _sqSourceFamily: item.family || item._sqSourceFamily || '',
    _isParentNode: true,
  };
}

/* Full pool = the parent node + every sidequest variant under it. */
function getSqFamilyPool(parentName, parentItem){
  const variants = window.SIDE_QUEST_MAP[parentName] || [];
  const parent = parentAsSqVariant(parentItem);
  return parent ? [parent].concat(variants) : variants.slice();
}

/* Which pool member is the primary (the main tree node)? */
function resolveTreePrimary(parentName, parentItem){
  const pool = getSqFamilyPool(parentName, parentItem);
  if(!pool.length) return parentAsSqVariant(parentItem);
  const markedKey = loadSqMarkFirst()[parentName] || null;
  if(markedKey){
    const m = pool.find(function(ex){ return getSqVariantKey(ex) === markedKey; });
    if(m) return m;
  }
  const parentKey = parentItem ? getSqVariantKey(parentAsSqVariant(parentItem)) : null;
  return pool.find(function(ex){ return getSqVariantKey(ex) === parentKey; }) || pool[0];
}

/* Branches = the pool minus the primary (sorted later by buildSqPanelHTML). */
function resolveTreeBranches(parentName, parentItem){
  const pool = getSqFamilyPool(parentName, parentItem);
  const primaryKey = getSqVariantKey(resolveTreePrimary(parentName, parentItem));
  return pool.filter(function(ex){ return getSqVariantKey(ex) !== primaryKey; });
}

/* Build the HTML for the branch items inside an SQ panel.
   Receives the already-resolved branch list (pool minus primary); sorts
   by tier/diff ascending. No "first" badge — promotion is a swap. */
window.buildSqPanelHTML = function(branchItems, progressData, parentName, parentExercise) {
  const panelItems = (branchItems || []).slice().sort(function(a, b) {
    const tierA = clampTreeDifficulty(a.diff);
    const tierB = clampTreeDifficulty(b.diff);
    if(tierA !== tierB) return tierA - tierB;
    const diffA = Number(a.diff) || 1;
    const diffB = Number(b.diff) || 1;
    if(diffA !== diffB) return diffA - diffB;
    return (a.name || '').localeCompare(b.name || '');
  });

  return panelItems.map(function(ex) {
    const viewLib = ex._sqSourceLib || ex.lib || '';
    const libKey = ex._sqSourceLibKey || ex.libKey || ex.lib || '';
    const id = ex.id || '';
    const exKey = libKey + '-' + id;
    const status = progressData[exKey] || '';
    const familyClass = (ex.family || ex._sqSourceFamily) ? ' family-' + (ex.family || ex._sqSourceFamily) : '';
    const statusAttr = status ? ' data-status="' + status + '"' : '';
    return '<button class="prog-item sq-item' + familyClass + '" data-lib="' + libKey + '" data-lib-key="' + libKey + '" data-view-lib="' + viewLib + '" data-id="' + id + '" data-sq-lib="' + libKey + '" data-sq-id="' + id + '" data-sq-status="' + status + '"' + statusAttr
      + ' onclick="openExerciseFromTree(\'' + viewLib + '\',' + id + ')">'
      + '<span class="sq-item-name">' + (ex.name || '') + '</span>'
      + '<span class="sq-item-dot prog-status-dot"></span>'
      + '</button>';
  }).join('');
};

/* Rebuild a single SQ panel in place — used after a "Mark First" change so
   the pinned variant jumps to the top without a full tree re-render. */
function refreshSqPanel(parentName) {
  if(!parentName) return;
  const progressData = loadProgress();
  const parentInfo = window.SIDE_QUEST_PARENT_MAP[parentName] || null;
  const parentItem = parentInfo ? {
    name: parentInfo.name,
    id: parentInfo.id,
    lib: parentInfo.lib,
    libKey: parentInfo.libKey,
    family: parentInfo.family,
    _sqSourceLib: parentInfo.lib,
    _sqSourceLibKey: parentInfo.libKey,
  } : null;
  const branches = resolveTreeBranches(parentName, parentItem);
  document.querySelectorAll('.sq-panel[data-sq-parent]').forEach(function(panel) {
    if(panel.dataset.sqParent !== parentName) return;
    const wasOpen = panel.classList.contains('open');
    panel.innerHTML = buildSqPanelHTML(branches, progressData, parentName, parentItem);
    if(wasOpen) panel.classList.add('open');
  });
}

window.setSqParentInfo = function(parentName, parentExercise) {
  if(!parentName || !parentExercise) return;
  window.SIDE_QUEST_PARENT_MAP[parentName] = {
    lib: parentExercise.lib || parentExercise._sqSourceLib || '',
    libKey: parentExercise.libKey || parentExercise._sqSourceLibKey || parentExercise.lib || '',
    viewLib: parentExercise.lib || parentExercise._sqSourceLib || '',
    id: parentExercise.id,
    name: parentExercise.name,
    family: parentExercise.family || '',
  };
};

window.getSqParentInfo = function(parentName) {
  return window.SIDE_QUEST_PARENT_MAP[parentName] || null;
};

/* PATH_MAP: pathTag → exercises sorted by diff. Cross-family skill threads (horizontal),
   distinct from sidequestKey which is vertical (branches within one family). Built on DOMContentLoaded. */
window.PATH_MAP = {};

window.buildPathMap = function() {
  window.PATH_MAP = {};
  const sources = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES.slice() : [];
  const libKeys = typeof ALL_LIBRARY_KEYS !== 'undefined' ? ALL_LIBRARY_KEYS.slice() : [];

  if(sources.length === 0 && libKeys.length > 0) {
    sources.push.apply(sources, libKeys.map(key => ({ libKey: key, data: Array.isArray(LIB_DATA?.[key]) ? LIB_DATA[key] : [] })));
  }

  sources.forEach(function(source) {
    const libKey = source && source.libKey ? source.libKey : null;
    let dataObj = Array.isArray(source?.data) ? source.data : null;
    if(!dataObj && libKey) {
      dataObj = Array.isArray(LIB_DATA?.[libKey]) ? LIB_DATA[libKey]
              : Array.isArray(window[libKey]) ? window[libKey]
              : Array.isArray(window[libKey + 's']) ? window[libKey + 's']
              : Array.isArray(window[libKey.toUpperCase()]) ? window[libKey.toUpperCase()]
              : Array.isArray(window[libKey.toUpperCase() + '_DATA']) ? window[libKey.toUpperCase() + '_DATA']
              : null;
    }
    if(!dataObj) return;
    const items = Array.isArray(dataObj) ? dataObj
                : Array.isArray(dataObj.items) ? dataObj.items
                : [];
    items.forEach(function(ex) {
      if(!ex || !ex.pathTag) return;
      const tag = String(ex.pathTag).trim();
      if(!window.PATH_MAP[tag]) window.PATH_MAP[tag] = [];
      window.PATH_MAP[tag].push({
        ...ex,
        _pathSourceLib: source.lib || source.libKey || '',
        _pathSourceLibKey: source.libKey || source.lib || '',
        _pathSourceFamily: source.family || ex.family || '',
      });
    });
  });

  // Sort each path's entries by difficulty ascending
  Object.keys(window.PATH_MAP).forEach(function(tag) {
    window.PATH_MAP[tag].sort(function(a, b) {
      return (a.diff || 0) - (b.diff || 0);
    });
  });
};

window.getPath = function(tag) {
  return window.PATH_MAP[tag] || [];
};

// Build the maps once the page + data files are fully loaded
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    window.buildSideQuestMap();
    window.buildPathMap();
  });
} else {
  setTimeout(function() {
    window.buildSideQuestMap();
    window.buildPathMap();
  }, 0);
}

/* ── ROUTER ── */
const LIB_VIEW_MAP = {
  'warmup-library':    'warmup',
  'stretching-library': 'stretching',
  'pushup-library':    'pushup',
  'planche-library':   'planche',
  'pullup-library':    'pullup',
  'weighted-library':       'weighted',
  'gym-chest-library':      'gymChest',
  'gym-back-library':       'gymBack',
  'gym-shoulders-library':  'gymShoulders',
  'gym-legs-library':       'gymLegs',
  'gym-arms-library':       'gymArms',
  'gym-core-library':       'gymCore',
  'squat-library':     'squat',
  'core-library':      'core',
  'dip-library':       'dip',
  'handstand-library': 'handstand',
  'isometric-library': 'isometric',
  'chinup-library': 'pullup',
  'frontlever-library': 'frontlever',
  'backlever-library': 'backlever',
  'combo-library':     'combo',
  'all-library':       'all',
  'gym-all-library':   'gymAll',
  'cardio-all-library':'cardioAll',
  /* ── cardio ── */
  'cardio-running-library':  'cardioRunning',
  'cardio-cycling-library':  'cardioCycling',
  'cardio-hiit-library':     'cardioHIIT',
  'cardio-rowing-library':   'cardioRowing',
  'cardio-recovery-library': 'cardioRecovery',
  'cardio-mobility-library': 'cardioMobility',
  /* ── nutrition ── */
  'foods-library':     'foods',
};
/* ══ NAVIGATION — history stack ══════════════════════════════
   _navHistory: array of view names, oldest first.
   goTo(v)   — push current view, navigate to v.
   goBack()  — pop history, navigate backwards.
   Going to 'home' always clears the stack.
════════════════════════════════════════════════════════════ */
const _navHistory = [];
const _scrollPositions = {};
/* ── TREE FILTER STATE ─────────────────────────────────────── */
const TREE_FILTER_STORAGE_KEY = 'grnd_tree_filter';

const TREE_FILTER_STATE = (function() {
  const defaults = { families: new Set(), status: 'all', diffMin: 1, diffMax: 10, favourite: false, hideSideQuests: true };
  try {
    const raw = localStorage.getItem(TREE_FILTER_STORAGE_KEY);
    if(raw) {
      const saved = JSON.parse(raw);
      return {
        families: new Set(Array.isArray(saved.families) ? saved.families : []),
        status:   typeof saved.status === 'string' ? saved.status : 'all',
        diffMin:  typeof saved.diffMin === 'number' ? saved.diffMin : 1,
        diffMax:  typeof saved.diffMax === 'number' ? saved.diffMax : 10,
        favourite: !!saved.favourite,
        hideSideQuests: saved.hideSideQuests !== undefined ? !!saved.hideSideQuests : true,
      };
    }
  } catch(e) {}
  return defaults;
})();

function saveTreeFilterState() {
  try {
    localStorage.setItem(TREE_FILTER_STORAGE_KEY, JSON.stringify({
      families: Array.from(TREE_FILTER_STATE.families),
      status:   TREE_FILTER_STATE.status,
      diffMin:  TREE_FILTER_STATE.diffMin,
      diffMax:  TREE_FILTER_STATE.diffMax,
      favourite: TREE_FILTER_STATE.favourite,
      hideSideQuests: TREE_FILTER_STATE.hideSideQuests,
    }));
  } catch(e) {}
}


function countActiveTreeFilters() {
  let n = TREE_FILTER_STATE.families.size;
  if(TREE_FILTER_STATE.status !== 'all') n++;
  if(TREE_FILTER_STATE.diffMin !== 1 || TREE_FILTER_STATE.diffMax !== 10) n++;
  if(TREE_FILTER_STATE.favourite) n++;
  return n;
}

/* Inject Tree Filter Panel HTML once */
(function _injectTreeFilterPanel(){
  if(document.getElementById('treeFilterOverlay')) return;
  const fams = [
    {k:'push',       l:'PUSH-UPS',     c:'#e63946'},
    {k:'planche',    l:'PLANCHE',      c:'#f97316'},
    {k:'pull',       l:'PULL-UPS',     c:'#4c9be8'},
    {k:'dip',        l:'DIPS',         c:'#f4a261'},
    {k:'core',       l:'CORE',         c:'#2a9d5c'},
    {k:'squat',      l:'LEGS',         c:'#48b58a'},
    {k:'chinup',     l:'SUPINATED',    c:'#1f7f65'},
    {k:'handstand',  l:'HANDSTANDS',   c:'#a78bfa'},
    {k:'frontlever', l:'FRONT LEVER',  c:'#0ea5e9'},
    {k:'backlever',  l:'BACK LEVER',   c:'#0d9488'},
    {k:'isometric',  l:'HOLDS',        c:'#8b5cf6'},
    {k:'combo',      l:'COMBOS',       c:'#1d4ed8'},
    {k:'weighted',   l:'WEIGHTED',     c:'#888'},
    {k:'hof',        l:'★ HOF',        c:'#c87d00'},
  ];
  const famChips = fams.map(f =>
    `<button class="tree-fp-chip" data-fam="${f.k}" onclick="treeFpToggleFamily('${f.k}')">${f.l}</button>`
  ).join('');
  const statusChips = [
    {v:'all',      l:'ALL'},
    {v:'unlocked', l:'✓ UNLOCKED'},
    {v:'progress', l:'◉ IN PROGRESS'},
    {v:'none',     l:'○ NOT STARTED'},
  ].map(s =>
    `<button class="tree-fp-chip" data-status="${s.v}" onclick="treeFpSetStatus('${s.v}')">${s.l}</button>`
  ).join('');
  const specialChips = `<button class="tree-fp-chip favorite-chip" data-special="favourite" onclick="treeFpToggleFavourite()">★ FAVOURITES</button><button class="tree-fp-chip hide-sq-chip" data-special="hideSideQuests" onclick="treeFpToggleHideSideQuests()">⊘ HIDE SIDE QUESTS</button>`;

  const html = `
<div id="treeFilterOverlay" onclick="if(event.target===this)closeTreeFilterPanel()">
  <div id="treeFilterPanel">
    <div class="tree-fp-hdr">
      <div class="tree-fp-title">TREE <em>FILTER</em></div>
      <button class="tree-fp-close" onclick="closeTreeFilterPanel()">CLOSE ✕</button>
    </div>
    <div id="treeFpActiveSummary" class="tree-fp-active-summary" style="display:none"></div>
    <div class="tree-fp-section">
      <div class="tree-fp-section-lbl">FAMILY</div>
      <div class="tree-fp-chips" id="treeFpFamilyChips">${famChips}</div>
    </div>
    <div class="tree-fp-section" style="margin-top:12px">
      <div class="tree-fp-section-lbl">STATUS</div>
      <div class="tree-fp-chips" id="treeFpStatusChips">${statusChips}</div>
    </div>
    <div class="tree-fp-section" style="margin-top:12px">
      <div class="tree-fp-section-lbl">SPECIAL</div>
      <div class="tree-fp-chips">${specialChips}</div>
    </div>
    <div class="tree-fp-section" style="margin-top:12px">
      <div class="tree-fp-section-lbl">DIFFICULTY RANGE</div>
      <div class="tree-fp-diff-wrap">
        <div class="tree-fp-diff-track">
          <span class="tree-fp-range-label">MIN</span>
          <input type="range" class="tree-fp-range" id="treeFpDiffMin" min="1" max="10" value="1" oninput="treeFpUpdateDiff('min',this.value)"/>
          <span class="tree-fp-range-val" id="treeFpDiffMinVal">1</span>
        </div>
        <div class="tree-fp-diff-track">
          <span class="tree-fp-range-label">MAX</span>
          <input type="range" class="tree-fp-range" id="treeFpDiffMax" min="1" max="10" value="10" oninput="treeFpUpdateDiff('max',this.value)"/>
          <span class="tree-fp-range-val" id="treeFpDiffMaxVal">10</span>
        </div>
      </div>
    </div>
    <div class="tree-fp-actions">
      <button class="menu-action-btn menu-action-btn-ghost" onclick="resetTreeFilter()">RESET ALL</button>
      <button class="menu-action-btn tree-fp-save" onclick="saveAndApplyTreeFilter()" id="treeFpSaveBtn">💾 SAVE &amp; APPLY</button>
      <button class="menu-action-btn menu-action-btn-primary" onclick="applyTreeFilterAndClose()">APPLY</button>
    </div>
  </div>
</div>`;
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap.firstElementChild);
})();

/* ── TREE FILTER PANEL FUNCTIONS ─────────────────────────── */
function _treeFpSyncUI() {
  document.querySelectorAll('.tree-fp-chip[data-fam]').forEach(c => {
    c.classList.toggle('on', TREE_FILTER_STATE.families.has(c.dataset.fam));
  });
  document.querySelectorAll('.tree-fp-chip[data-status]').forEach(c => {
    c.classList.toggle('on', c.dataset.status === TREE_FILTER_STATE.status);
  });
  document.querySelectorAll('.tree-fp-chip[data-special="favourite"]').forEach(c => {
    c.classList.toggle('on', !!TREE_FILTER_STATE.favourite);
  });
  document.querySelectorAll('.tree-fp-chip[data-special="hideSideQuests"]').forEach(c => {
    c.classList.toggle('on', !!TREE_FILTER_STATE.hideSideQuests);
  });
  const minEl = document.getElementById('treeFpDiffMin');
  const maxEl = document.getElementById('treeFpDiffMax');
  const minV  = document.getElementById('treeFpDiffMinVal');
  const maxV  = document.getElementById('treeFpDiffMaxVal');
  if(minEl){ minEl.value = TREE_FILTER_STATE.diffMin; } if(minV) minV.textContent = TREE_FILTER_STATE.diffMin;
  if(maxEl){ maxEl.value = TREE_FILTER_STATE.diffMax; } if(maxV) maxV.textContent = TREE_FILTER_STATE.diffMax;
  // active summary
  const sumEl = document.getElementById('treeFpActiveSummary');
  const n = countActiveTreeFilters();
  if(sumEl) {
    if(n > 0) {
      const parts = [];
      if(TREE_FILTER_STATE.families.size > 0) parts.push(Array.from(TREE_FILTER_STATE.families).join(', ').toUpperCase());
      if(TREE_FILTER_STATE.status !== 'all') parts.push('STATUS: ' + TREE_FILTER_STATE.status.toUpperCase());
      if(TREE_FILTER_STATE.favourite) parts.push('FAVOURITES');
      if(TREE_FILTER_STATE.diffMin !== 1 || TREE_FILTER_STATE.diffMax !== 10) parts.push(`DIFF: ${TREE_FILTER_STATE.diffMin}–${TREE_FILTER_STATE.diffMax}`);
      sumEl.textContent = 'ACTIVE: ' + parts.join(' · ');
      sumEl.style.display = '';
    } else {
      sumEl.style.display = 'none';
    }
  }
}

window.openTreeFilterPanel = function() {
  const overlay = document.getElementById('treeFilterOverlay');
  if(!overlay) return;
  _treeFpSyncUI();
  overlay.classList.add('open');
};

window.closeTreeFilterPanel = function() {
  const overlay = document.getElementById('treeFilterOverlay');
  if(!overlay) return;
  overlay.classList.remove('open');
};

window.treeFpToggleFamily = function(fam) {
  if(TREE_FILTER_STATE.families.has(fam)) TREE_FILTER_STATE.families.delete(fam);
  else TREE_FILTER_STATE.families.add(fam);
  _treeFpSyncUI();
};
window.treeFpSetStatus = function(status) {
  TREE_FILTER_STATE.status = status;
  _treeFpSyncUI();
};
window.treeFpToggleFavourite = function() {
  TREE_FILTER_STATE.favourite = !TREE_FILTER_STATE.favourite;
  _treeFpSyncUI();
};
window.treeFpToggleHideSideQuests = function() {
  TREE_FILTER_STATE.hideSideQuests = !TREE_FILTER_STATE.hideSideQuests;
  saveTreeFilterState();
  _treeFpSyncUI();
};
window.treeFpUpdateDiff = function(which, val) {
  val = parseInt(val);
  if(which === 'min') {
    if(val > TREE_FILTER_STATE.diffMax) val = TREE_FILTER_STATE.diffMax;
    TREE_FILTER_STATE.diffMin = val;
    const el = document.getElementById('treeFpDiffMinVal');
    if(el) el.textContent = val;
  } else {
    if(val < TREE_FILTER_STATE.diffMin) val = TREE_FILTER_STATE.diffMin;
    TREE_FILTER_STATE.diffMax = val;
    const el = document.getElementById('treeFpDiffMaxVal');
    if(el) el.textContent = val;
  }
};
window.applyTreeFilterAndClose = function() {
  closeTreeFilterPanel();
  renderProgressionTree();
};
window.saveAndApplyTreeFilter = function() {
  saveTreeFilterState();
  // flash the button
  const btn = document.getElementById('treeFpSaveBtn');
  if(btn) {
    const orig = btn.textContent;
    btn.textContent = '✓ SAVED';
    btn.classList.add('saved');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('saved'); }, 1200);
  }
  closeTreeFilterPanel();
  renderProgressionTree();
};
window.resetTreeFilter = function() {
  TREE_FILTER_STATE.families.clear();
  TREE_FILTER_STATE.status = 'all';
  TREE_FILTER_STATE.diffMin = 1;
  TREE_FILTER_STATE.diffMax = 10;
  TREE_FILTER_STATE.favourite = false;
  TREE_FILTER_STATE.hideSideQuests = true;
  try { localStorage.removeItem(TREE_FILTER_STORAGE_KEY); } catch(e) {}
  _treeFpSyncUI();
};
/* Quick-chip presets */
window.setTreeQuickFilter = function(qf) {
  TREE_FILTER_STATE.families.clear();
  TREE_FILTER_STATE.status = 'all';
  TREE_FILTER_STATE.diffMin = 1;
  TREE_FILTER_STATE.diffMax = 10;
  TREE_FILTER_STATE.favourite = false;

  if(qf !== 'all') {
    if(qf === 'push' || qf === 'planche' || qf === 'pull' || qf === 'dip' || qf === 'isometric') {
      TREE_FILTER_STATE.families.add(qf);
    } else if(qf === 'favourite') {
      TREE_FILTER_STATE.favourite = true;
    }
  }

  renderProgressionTree();
};

/* ══ FOODS FILTER PANEL ═══════════════════════════════════════
   Mirrors the tree filter panel pattern: a few quick chips inline
   (All/Meat/Vegetables/Legumes) + a "⚙ FILTER" button that opens
   the full category list. Maps onto the same LIB_STATE.foods
   .activeFilter string the renderLibTable() tag filter already
   reads — single source of truth, no separate filter state object.

   NOTE: #treeFilterOverlay/#treeFilterPanel are styled by ID in
   main.css (not a reusable class), so this panel can't inherit
   that positioning. .tree-fp-chip / .tree-fp-section-lbl /
   .menu-action-btn ARE real shared classes and are reused as-is.
   The overlay/panel positioning below is self-contained scoped CSS
   built from confirmed theme variables so it doesn't depend on
   unknown main.css rules. If main.css's tree filter panel is ever
   restyled, this block won't auto-follow — worth a look then.
════════════════════════════════════════════════════════════════ */
const FOODS_FILTER_CATEGORIES = [
  {v:'all',        l:'ALL'},
  {v:'meat',       l:'MEAT'},
  {v:'poultry',    l:'POULTRY'},
  {v:'fish',       l:'FISH'},
  {v:'shellfish',  l:'SHELLFISH'},
  {v:'egg',        l:'EGGS'},
  {v:'dairy',      l:'DAIRY'},
  {v:'plant',      l:'PLANT'},
  {v:'grain',      l:'GRAINS'},
  {v:'fruit',      l:'FRUIT'},
  {v:'vegetable',  l:'VEGETABLES'},
  {v:'legume',     l:'LEGUMES'},
  {v:'nut,seed',   l:'NUTS & SEEDS'},
  {v:'oil',        l:'OILS'},
  {v:'sweetener',  l:'SWEETENER'},
  {v:'supplement', l:'SUPPLEMENTS'},
];

(function _injectFoodsFilterPanel(){
  if(document.getElementById('foodsFilterOverlay')) return;
  const catChips = FOODS_FILTER_CATEGORIES.map(c =>
    `<button class="tree-fp-chip" data-cat="${c.v}" onclick="foodsFpSetCategory('${c.v}')">${c.l}</button>`
  ).join('');

  const html = `
<div id="foodsFilterOverlay" onclick="if(event.target===this)closeFoodsFilterPanel()">
  <div id="foodsFilterPanel">
    <div class="tree-fp-hdr">
      <div class="tree-fp-title">FOODS <em>FILTER</em></div>
      <button class="tree-fp-close" onclick="closeFoodsFilterPanel()">CLOSE ✕</button>
    </div>
    <div class="tree-fp-section">
      <div class="tree-fp-section-lbl">CATEGORY</div>
      <div class="tree-fp-chips" id="foodsFpCategoryChips">${catChips}</div>
    </div>
    <div class="tree-fp-actions">
      <button class="menu-action-btn menu-action-btn-ghost" onclick="resetFoodsFilter()">RESET</button>
      <button class="menu-action-btn menu-action-btn-primary" onclick="closeFoodsFilterPanel()">APPLY</button>
    </div>
  </div>
</div>`;
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap.firstElementChild);
})();

function _foodsFpSyncUI() {
  const active = LIB_STATE.foods.activeFilter;
  document.querySelectorAll('#foodsFpCategoryChips .tree-fp-chip').forEach(c => {
    c.classList.toggle('on', c.dataset.cat === active);
  });
  document.querySelectorAll('#foods-quickChips .prog-qchip').forEach(c => {
    c.classList.toggle('on', c.dataset.qf === active);
  });
  const isAll = active === 'all';
  const btn = document.getElementById('foodsFilterMenuBtn');
  const badge = document.getElementById('foodsFilterBadge');
  if(btn) btn.classList.toggle('active', !isAll);
  if(badge) { badge.style.display = isAll ? 'none' : ''; badge.textContent = isAll ? '' : '1'; }
}

window.openFoodsFilterPanel = function() {
  const overlay = document.getElementById('foodsFilterOverlay');
  if(!overlay) return;
  _foodsFpSyncUI();
  overlay.classList.add('open');
};
window.closeFoodsFilterPanel = function() {
  const overlay = document.getElementById('foodsFilterOverlay');
  if(!overlay) return;
  overlay.classList.remove('open');
};
window.foodsFpSetCategory = function(cat) {
  LIB_STATE.foods.activeFilter = cat;
  _foodsFpSyncUI();
  renderLibTable('foods');
};
window.resetFoodsFilter = function() {
  LIB_STATE.foods.activeFilter = 'all';
  _foodsFpSyncUI();
  renderLibTable('foods');
};
window.setFoodsQuickFilter = function(qf) {
  LIB_STATE.foods.activeFilter = qf;
  _foodsFpSyncUI();
  renderLibTable('foods');
};

/* ══ CALORIE CALCULATOR ═══════════════════════════════════════
   Manual mode: Mifflin-St Jeor BMR → activity multiplier → TDEE →
   cut/maintain/bulk targets → protein/fat/carb split.
   Auto mode (food-log based) is not implemented yet — placeholder
   panel only. State persists to localStorage under CALC_STORAGE_KEY
   so the form/result survive a page reload.
════════════════════════════════════════════════════════════════ */
const CALC_STORAGE_KEY = 'grnd_calorie_calc';
const CALC_CM_PER_IN = 2.54;
const CALC_KG_PER_LB = 0.45359237;

const CALC_STATE = (function() {
  const defaults = { sex:'male', activity:'1.55', goal:'maintain', heightUnit:'cm', weightUnit:'kg' };
  try {
    const raw = localStorage.getItem(CALC_STORAGE_KEY);
    if(raw) {
      const saved = JSON.parse(raw);
      return Object.assign(defaults, saved);
    }
  } catch(e) {}
  return defaults;
})();

function _saveCalcState() {
  try { localStorage.setItem(CALC_STORAGE_KEY, JSON.stringify(CALC_STATE)); } catch(e) {}
}

const CALC_ACTIVITY_HINTS = {
  '1.2':   'Sedentary: little or no exercise',
  '1.375': 'Light: exercise 1–3×/week',
  '1.55':  'Moderate: exercise 3–5×/week',
  '1.725': 'Active: hard exercise 6–7×/week',
  '1.9':   'Very active: hard daily exercise or physical job',
};

function setCalcSex(sex) {
  CALC_STATE.sex = sex;
  _saveCalcState();
  document.querySelectorAll('#calcSexSwitch .tree-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.calcSex === sex));
}

function setCalcHeightUnit(unit) {
  if(unit === CALC_STATE.heightUnit) return;
  const input = document.getElementById('calc-input-height');
  const cur = parseFloat(input.value);
  if(!isNaN(cur)) {
    const converted = unit === 'in' ? (cur / CALC_CM_PER_IN) : (cur * CALC_CM_PER_IN);
    const rounded = Math.round(converted * 10) / 10;
    input.value = rounded;
    if(CALC_STATE.height !== undefined) CALC_STATE.height = rounded;
  }
  CALC_STATE.heightUnit = unit;
  _saveCalcState();
  _calcApplyHeightUnitUI();
  /* BMR/TDEE were already computed in metric, so just relabel the existing results — no need to force a recalculation */
  if(CALC_STATE.lastResult) _calcRenderResults(CALC_STATE.lastResult);
}

function _calcApplyHeightUnitUI() {
  const unit = CALC_STATE.heightUnit;
  document.querySelectorAll('#calcHeightUnitSwitch .calc-unit-btn').forEach(b => b.classList.toggle('on', b.dataset.heightUnit === unit));
  const input = document.getElementById('calc-input-height');
  if(!input) return;
  if(unit === 'in') { input.min = 39; input.max = 98; input.placeholder = 'e.g. 70'; }
  else              { input.min = 100; input.max = 250; input.placeholder = 'e.g. 178'; }
}

function setCalcWeightUnit(unit) {
  if(unit === CALC_STATE.weightUnit) return;
  const input = document.getElementById('calc-input-weight');
  const cur = parseFloat(input.value);
  if(!isNaN(cur)) {
    const converted = unit === 'lb' ? (cur / CALC_KG_PER_LB) : (cur * CALC_KG_PER_LB);
    const rounded = Math.round(converted * 10) / 10;
    input.value = rounded;
    if(CALC_STATE.weight !== undefined) CALC_STATE.weight = rounded;
  }
  CALC_STATE.weightUnit = unit;
  _saveCalcState();
  _calcApplyWeightUnitUI();
  if(CALC_STATE.lastResult) _calcRenderResults(CALC_STATE.lastResult);
}

function _calcApplyWeightUnitUI() {
  const unit = CALC_STATE.weightUnit;
  document.querySelectorAll('#calcWeightUnitSwitch .calc-unit-btn').forEach(b => b.classList.toggle('on', b.dataset.weightUnit === unit));
  const input = document.getElementById('calc-input-weight');
  if(!input) return;
  if(unit === 'lb') { input.min = 66; input.max = 660; input.placeholder = 'e.g. 165'; }
  else               { input.min = 30; input.max = 300; input.placeholder = 'e.g. 75'; }
}

function setCalcActivity(val, btnEl) {
  CALC_STATE.activity = val;
  _saveCalcState();
  document.querySelectorAll('#calcActivityChips .filter-chip').forEach(b => b.classList.remove('on'));
  if(btnEl) btnEl.classList.add('on');
  const hint = document.getElementById('calcActivityHint');
  if(hint) hint.textContent = CALC_ACTIVITY_HINTS[val] || '';
}

function setCalcGoal(goal, btnEl) {
  CALC_STATE.goal = goal;
  _saveCalcState();
  document.querySelectorAll('#calcGoalChips .filter-chip').forEach(b => b.classList.remove('on'));
  if(btnEl) btnEl.classList.add('on');
  /* If results are already showing, re-highlight the matching target row without forcing a recalculation */
  if(document.getElementById('calcResults').style.display !== 'none') _calcHighlightGoalRow();
}

function _calcHighlightGoalRow() {
  const rows = { cut:'calcTargetCut', maintain:'calcTargetMaintain', bulk:'calcTargetBulk' };
  Object.entries(rows).forEach(([g, id]) => {
    const el = document.getElementById(id);
    if(el) el.classList.toggle('nutr-clickable', false), el.style.outline = (g === CALC_STATE.goal) ? '2px solid var(--accent)' : 'none';
  });
}

function _calcSyncFormUI() {
  document.querySelectorAll('#calcSexSwitch .tree-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.calcSex === CALC_STATE.sex));
  document.querySelectorAll('#calcActivityChips .filter-chip').forEach(b => b.classList.toggle('on', b.dataset.calcActivity === CALC_STATE.activity));
  document.querySelectorAll('#calcGoalChips .filter-chip').forEach(b => b.classList.toggle('on', b.dataset.calcGoal === CALC_STATE.goal));
  const hint = document.getElementById('calcActivityHint');
  if(hint) hint.textContent = CALC_ACTIVITY_HINTS[CALC_STATE.activity] || '';
  _calcApplyHeightUnitUI();
  _calcApplyWeightUnitUI();
  if(CALC_STATE.age)    { const el = document.getElementById('calc-input-age');    if(el) el.value = CALC_STATE.age; }
  if(CALC_STATE.height) { const el = document.getElementById('calc-input-height'); if(el) el.value = CALC_STATE.height; }
  if(CALC_STATE.weight) { const el = document.getElementById('calc-input-weight'); if(el) el.value = CALC_STATE.weight; }
  if(CALC_STATE.lastResult) _calcRenderResults(CALC_STATE.lastResult);
}

function calculateCalories() {
  const age    = parseFloat(document.getElementById('calc-input-age').value);
  const height = parseFloat(document.getElementById('calc-input-height').value);
  const weight = parseFloat(document.getElementById('calc-input-weight').value);

  const heightCm = CALC_STATE.heightUnit === 'in' ? height * CALC_CM_PER_IN : height;
  const weightKg = CALC_STATE.weightUnit === 'lb' ? weight * CALC_KG_PER_LB : weight;

  if(!age || !heightCm || !weightKg || age < 10 || age > 99 || heightCm < 100 || heightCm > 250 || weightKg < 30 || weightKg > 300) {
    const el = document.getElementById('calcResults');
    if(el) el.style.display = 'none';
    const heightMsg = CALC_STATE.heightUnit === 'in' ? 'height (39–98 in)' : 'height (100–250 cm)';
    const weightMsg = CALC_STATE.weightUnit === 'lb' ? 'weight (66–660 lb)' : 'weight (30–300 kg)';
    alert(`Please enter a valid age (10–99), ${heightMsg} and ${weightMsg}.`);
    return;
  }

  CALC_STATE.age = age;
  CALC_STATE.height = height;
  CALC_STATE.weight = weight;

  /* Mifflin-St Jeor (metric only — convert first if the form is in imperial units) */
  const bmr = CALC_STATE.sex === 'male'
    ? (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5
    : (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;

  const tdee = bmr * parseFloat(CALC_STATE.activity);

  const result = {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    cut: Math.round(tdee * 0.8),
    maintain: Math.round(tdee),
    bulk: Math.round(tdee * 1.15),
    weightKg: weightKg,
  };

  CALC_STATE.lastResult = result;
  _saveCalcState();
  _calcRenderResults(result);
}

/* Shared macro-split helper: protein 1.8g/kg bodyweight, fat ~25% of kcal,
   carbs fill the rest. Used by both the BMR/TDEE results panel above and
   the intake tracker's daily target (kept in one place so they never drift). */
function _calcDefaultMacros(weightKg, targetKcal) {
  const proteinG = Math.round(weightKg * 1.8);
  const proteinKcal = proteinG * 4;
  const fatKcal = Math.round(targetKcal * 0.25);
  const fatG = Math.round(fatKcal / 9);
  const carbKcal = Math.max(targetKcal - proteinKcal - fatKcal, 0);
  const carbG = Math.round(carbKcal / 4);
  return { proteinG, fatG, carbG };
}

function _calcRenderResults(result) {
  const targetKcal = { cut: result.cut, maintain: result.maintain, bulk: result.bulk }[CALC_STATE.goal] || result.maintain;

  /* Protein always uses canonical kg regardless of the display unit. */
  const { proteinG, fatG, carbG } = _calcDefaultMacros(result.weightKg, targetKcal);

  const heightLabel = CALC_STATE.heightUnit === 'in' ? `${CALC_STATE.height} in` : `${CALC_STATE.height} cm`;
  const weightLabel = CALC_STATE.weightUnit === 'lb' ? `${CALC_STATE.weight} lb` : `${CALC_STATE.weight} kg`;
  const weightKgRounded = Math.round(result.weightKg * 10) / 10;

  document.getElementById('calcResultsSubline').textContent =
    `Based on ${CALC_STATE.sex === 'male' ? 'male' : 'female'}, age ${CALC_STATE.age}, ${heightLabel}, ${weightLabel}`;
  document.getElementById('calcBmrVal').textContent = result.bmr.toLocaleString();
  document.getElementById('calcTdeeVal').textContent = result.tdee.toLocaleString();
  document.getElementById('calcTargetCutVal').innerHTML = result.cut.toLocaleString() + '<div class="nutrition-macro-kcal">kcal/day</div>';
  document.getElementById('calcTargetMaintainVal').innerHTML = result.maintain.toLocaleString() + '<div class="nutrition-macro-kcal">kcal/day</div>';
  document.getElementById('calcTargetBulkVal').innerHTML = result.bulk.toLocaleString() + '<div class="nutrition-macro-kcal">kcal/day</div>';
  document.getElementById('calcMacroProteinVal').innerHTML = proteinG + '<div class="nutrition-macro-kcal">g/day</div>';
  document.getElementById('calcMacroFatVal').innerHTML = fatG + '<div class="nutrition-macro-kcal">g/day</div>';
  document.getElementById('calcMacroCarbVal').innerHTML = carbG + '<div class="nutrition-macro-kcal">g/day</div>';
  document.getElementById('calcMacroProteinSub').textContent = `1.8 g/kg × ${weightKgRounded} kg bodyweight`;

  document.getElementById('calcResults').style.display = '';
  _calcHighlightGoalRow();
}

function resetCalorieCalc() {
  ['calc-input-age','calc-input-height','calc-input-weight'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.value = '';
  });
  delete CALC_STATE.age;
  delete CALC_STATE.height;
  delete CALC_STATE.weight;
  delete CALC_STATE.lastResult;
  _saveCalcState();
  document.getElementById('calcResults').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('view-calorie-calculator')) _calcSyncFormUI();
});

function _updateNavState(toView) {
  /* Desktop: floating back-to-tree button */
  const floatBtn = document.getElementById('backTreeBtn');
  if(floatBtn) {
    const hasProgTree = _navHistory[_navHistory.length - 1] === 'progression-tree';
    const showFloat = hasProgTree
      && toView !== 'progression-tree'
      && toView !== 'home';
    floatBtn.classList.toggle('visible', showFloat);
  }
  const progBtn = document.getElementById('backProgramBtn');
  if(progBtn) {
    const showProg = window._customProgramOverlayHiddenForLibrary
      && typeof toView === 'string'
      && (toView.includes('library') || toView === 'anatomy');
    progBtn.style.display = showProg ? 'flex' : 'none';
  }
  /* Mobile: bottom nav back + home state */
  const backBtn = document.getElementById('bnavBack');
  const homeBtn = document.getElementById('bnavHome');
  if(backBtn) backBtn.classList.toggle('disabled', _navHistory.length === 0);
  if(homeBtn) homeBtn.classList.toggle('at-home', toView === 'home');
  /* Swipe edge hint */
  const hint = document.getElementById('swipeEdgeHint');
  if(hint) hint.classList.toggle('visible', _navHistory.length > 0);
  const headerLabel = document.getElementById('headerViewLabel');
  if(headerLabel) {
    const labelMap = {'home':'','metrics':'Metrics','workout-library':'Workout Library','bodyweight':'Bodyweight','gym':'Gym','gym-progression-tree':'Gym Tree','progression-tree':'Progression Tree','cardio':'Cardio','warmup-library':'Warm-Up','pushup-library':'Push-Ups','pullup-library':'Pull-Ups','combo-library':'Combos','weighted-library':'Weighted Workouts','squat-library':'Squats','core-library':'Core','dip-library':'Dips','handstand-library':'Handstands','isometric-library':'Holds','frontlever-library':'Front Lever','hof-library':'Hall of Fame','pantheon-library':'Pantheon','all-library':'All Exercises','gym-all-library':'Gym Search','cardio-all-library':'Cardio Search','meal-prep-library':'Meal Prep','anatomy':'Anatomy // Muscles','nutrition':'Nutrition','foods-library':'Foods','recover':'Recover','recover-basics':'Recovery Basics','recover-tissue':'Heal by Injury Type','recover-supplements':'What to Take','recover-methods':'What to Do','recover-timelines':'Recovery Timelines','info-faq':'Info & FAQ'};
    headerLabel.textContent = labelMap[toView] !== undefined ? labelMap[toView] : toView.replace(/-/g,' ').toUpperCase();
    headerLabel.classList.toggle('home', toView === 'home');
  }
}

function _setHeaderVisibility(v) {
  const header = document.querySelector('header');
  if(!header) return;
  header.style.display = v === 'anatomy' ? 'none' : '';
}

function goBack() {
  if(_navHistory.length === 0) return;
  const prev = _navHistory.pop();
  _execGoTo(prev, true);
}

function returnToCustomProgram() {
  const fromExercisePopup = window._anatomyReturnToExercisePopup;
  window._customProgramOverlayHiddenForLibrary = false;
  window._anatomyReturnToExercisePopup = false;
  openCustomProgram();
  if(fromExercisePopup){
    // Restore the exercise popup on top of the builder
    setTimeout(function(){
      document.getElementById('customProgramExerciseOverlay')?.classList.add('open');
    }, 80);
  }
}

function goTo(v) {
  if (v === 'bodyweight' || v === 'gym' || v === 'cardio') {
    setWLMode(v);
    v = 'workout-library';
  }
  const currentEl = document.querySelector('.view.active');
  const currentView = currentEl ? currentEl.id.replace('view-','') : null;
  if(v === 'home') {
    _navHistory.length = 0;
  } else if(currentView && currentView !== v) {
    _navHistory.push(currentView);
  }
  _execGoTo(v, false);
}

function _execGoTo(v, isBack) {
  const currentEl = document.querySelector('.view.active');
  const currentView = currentEl ? currentEl.id.replace('view-','') : null;

  /* Save scroll position when leaving a view */
  if(currentView) {
    _scrollPositions[currentView] = window.scrollY || window.pageYOffset;
  }

  document.querySelectorAll('.view').forEach(el=>el.classList.remove('active'));
  const el=document.getElementById('view-'+v);
  if(el) el.classList.add('active');

  /* Restore scroll position if going back, otherwise scroll to top */
  if(isBack && _scrollPositions[v] !== undefined) {
    setTimeout(() => {
      window.scrollTo(0, _scrollPositions[v]);
    }, 10);
  } else {
    window.scrollTo(0,0);
  }

  if(v!=='bodyweight' && v!=='all-library'){
    const gs=document.getElementById('globalSearch');
    if(gs) gs.value='';
  }
  if(v==='bodyweight'){
    LIB_STATE.all.searchTerm='';
    LIB_STATE.all.activeFilter='all';
    const allInput=document.getElementById('all-search');
    if(allInput) allInput.value='';
    const gs=document.getElementById('globalSearch');
    if(gs) gs.value='';
  }
  if(v==='gym'){
    const gi=document.getElementById('gym-search');
    if(gi) gi.value='';
  }
  if(v==='cardio'){
    const ci=document.getElementById('cardio-search');
    if(ci) ci.value='';
  }
  if(v==='progression-tree') renderProgressionTree();
  else if(v==='hof-library') renderHof();
  else if(v==='pantheon-library') renderPantheonLibrary();
  else if(v==='intake-tracker') _intakeRender(); // defined in nutrition/intake-tracker.js
  else if(v==='programs' && typeof renderProgramsGrid === 'function') renderProgramsGrid();
  else if(LIB_VIEW_MAP[v]) renderLibTable(LIB_VIEW_MAP[v]);
  if(v === 'home') {
    if(typeof updateHomeTreeProgress === 'function') updateHomeTreeProgress();
    if(typeof updateHomeBodyweightSummary === 'function') updateHomeBodyweightSummary();
  }
  _setHeaderVisibility(v);
  _updateNavState(v);
  if(typeof window.onViewChanged === 'function') window.onViewChanged(v, currentView);
}

function refreshHomeSummary() {
  if(typeof updateHomeTreeProgress === 'function') updateHomeTreeProgress();
  if(typeof updateHomeBodyweightSummary === 'function') updateHomeBodyweightSummary();
}

if(typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    refreshHomeSummary();
    setWLMode(_wlMode);

    /* ── Hub view grid/list toggle ──────────────────────────────────────
       Handles all .view-toggle-btn[data-view-target] buttons (home, gym,
       cardio, nutrition, recover, bodyweight library etc).
       Toggles 'card-mode' on the target container and persists per key. */
    const VIEW_TOGGLE_KEY = 'grnd_hub_view_';
    document.querySelectorAll('.view-toggle-btn[data-view-target]').forEach(btn => {
      const targetId = btn.dataset.viewTarget;
      const el = document.getElementById(targetId);
      if(!el) return;
      // Grid is default — only switch to list if explicitly saved
      if(localStorage.getItem(VIEW_TOGGLE_KEY + targetId) !== 'list') {
        el.classList.add('card-mode');
        btn.textContent = '☰ LIST';
      }
      btn.addEventListener('click', () => {
        const isCard = el.classList.toggle('card-mode');
        btn.textContent = isCard ? '☰ LIST' : '⊞ GRID';
        localStorage.setItem(VIEW_TOGGLE_KEY + targetId, isCard ? 'card' : 'list');
      });
    });

    /* Wire up bodyweight global search */
    const gsEl = document.getElementById('globalSearch');
    if (gsEl) gsEl.addEventListener('input', e => renderGlobalSearch(e.target.value.trim()));
  });
}

/* Update backTreeBtn onclick to use goBack() */
(function(){
  const b = document.getElementById('backTreeBtn');
  if(b) b.onclick = goBack;
})();

/* ── SWIPE-BACK GESTURE ────────────────────────────────────
   Trigger: touch starts within EDGE_ZONE px of left edge,
   drags right MIN_SWIPE px, horizontal > vertical.
   Only fires when there is history to go back to.
─────────────────────────────────────────────────────────── */
(function(){
  const EDGE_ZONE = 28;
  const MIN_SWIPE = 58;
  let sx = 0, sy = 0, tracking = false;
  const hint = document.getElementById('swipeEdgeHint');

  function hideHint() {
    if(hint) hint.classList.remove('visible');
  }

  document.addEventListener('touchstart', e => {
    if(_navHistory.length === 0) return;
    if(e.touches[0].clientX > EDGE_ZONE) return;
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
    tracking = true;
    if(hint) hint.classList.add('visible');
  }, {passive:true});

  document.addEventListener('touchmove', e => {
    if(!tracking) return;
    const dy = Math.abs(e.touches[0].clientY - sy);
    const dx = e.touches[0].clientX - sx;
    if(dy > dx + 10) {
      tracking = false;
      hideHint();
      return;
    }
    /* We're inside our own edge-swipe gesture — stop the browser/OS
       native swipe-back navigation from also firing (it would exit
       the app instead of just switching views). */
    if(dx > 0 && e.cancelable) e.preventDefault();
  }, {passive:false});

  document.addEventListener('touchend', e => {
    if(!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - sx;
    const dy = Math.abs(e.changedTouches[0].clientY - sy);
    hideHint();
    if(dx >= MIN_SWIPE && dy < dx) goBack();
  }, {passive:true});
})();



/* NUTRITION DATA — reuses exercise schema: muscles=nutrients, diff=prep complexity, risk=allergen risk,
   cues=cooking notes, equipment=prep method, position=meal timing. Data → nutrition-data.js */

const TREE_LIBRARY_SOURCES = [
  { lib:'frontlever-library', libKey:'frontlever', family:'frontlever', data:_frontlevers },
  { lib:'backlever-library', libKey:'backlever', family:'backlever', data:_backlevers },
  { lib:'pushup-library', libKey:'pushup', family:'push', data:_pushups },
  { lib:'planche-library', libKey:'planche', family:'planche', data:_planches },
  { lib:'pullup-library', libKey:'pullup', family:'pull', data:_pullups },
  { lib:'chinup-library', libKey:'chinup', family:'chinup', data:_chinupData },
  { lib:'combo-library', libKey:'combo', family:'combo', data:_combos },
  { lib:'dip-library', libKey:'dip', family:'dip', data:_dips },
  { lib:'handstand-library', libKey:'handstand', family:'handstand', data:_handstands },
  { lib:'isometric-library', libKey:'isometric', family:'isometric', data:_isometrics },
  { lib:'core-library', libKey:'core', family:'core', data:_coreExercises },
  { lib:'squat-library', libKey:'squat', family:'squat', data:_squats },
];

const TREE_FAMILY_ORDER = ['push','pull','chinup','dip','core','squat','isometric','handstand','frontlever','backlever','planche','combo'];

// Skeleton: only Tuck FL (Bar + Parallettes + Rings) kept — full rework pending.
const FRONT_LEVER_CHAIN_BRANCHES = [
  ['frontlever-13', 'frontlever-1002', 'frontlever-1201'],
];
const FRONT_LEVER_ROOT_KEYS = new Set(['frontlever-13']);

function getTreeSourceData(source) {
  try {
    if (Array.isArray(LIB_DATA[source.libKey])) return LIB_DATA[source.libKey];
  } catch(e) {}
  return Array.isArray(source.data) ? source.data : [];
}

function clampTreeDifficulty(diff){
  return Math.max(1, Math.min(10, Math.floor(Number(diff) || 1)));
}

function getTreePrereqStatus(key, progressData) {
  return progressData[String(key)] === 'unlocked';
}

function isTreeItemAvailableByPrereqs(item, progressData) {
  const requires = Array.isArray(item.requires) ? item.requires.filter(Boolean) : [];
  if(requires.length === 0) return true;
  const requiresMode = item.requiresMode === 'any' ? 'any' : 'all';
  if(requiresMode === 'any') {
    return requires.some(req => getTreePrereqStatus(req, progressData));
  }
  return requires.every(req => getTreePrereqStatus(req, progressData));
}

function findFrontLeverBranch(key) {
  return FRONT_LEVER_CHAIN_BRANCHES.find(branch => branch.includes(key)) || null;
}

function shouldIncludeFrontLeverItem(item, progressData) {
  const key = item.key;
  const branch = findFrontLeverBranch(key);
  if(branch) {
    const index = branch.indexOf(key);
    if(index === 0) return true;
    const prevKey = branch[index - 1];
    return getTreePrereqStatus(prevKey, progressData) || getTreePrereqStatus(key, progressData);
  }
  return FRONT_LEVER_ROOT_KEYS.has(key);
}

function shouldIncludeTreeItem(item, progressData) {
  if(item.family === 'frontlever') {
    return shouldIncludeFrontLeverItem(item, progressData);
  }
  return isTreeItemAvailableByPrereqs(item, progressData);
}

const TREE_FAMILY_FALLBACKS = {
  frontlever: 'isometric',
  backlever: 'isometric',
  handstand: 'isometric',
};

function getTreeFallbackFamily(family) {
  return TREE_FAMILY_FALLBACKS[family] || family;
}

function getTreeRouteFamily(item) {
  if(item.family === 'chinup') return 'pull';
  if(item.family === 'handstand') return 'handstand';
  const routeFamilies = ['frontlever', 'backlever', 'handstand'];
  if(!routeFamilies.includes(item.family)) return item.family;

  const text = `${item.name || ''} ${item.alt || ''}`.toLowerCase();
  const tags = Array.isArray(item.tags) ? item.tags.map(String) : [];

  const isPull = /\b(pull[- ]?up|pullup)\b/.test(text) || tags.some(t => /^(pull|pull-up|pullup|pulls?)$/.test(t));
  if(isPull) return 'pull';

  const isDip = /\b(dip|dips)\b/.test(text) || tags.some(t => /^(dip|dips)$/.test(t));
  if(isDip) return 'dip';

  if(item.family === 'handstand') return 'handstand';

  const isPush = /\b(push[- ]?up|pushup)\b/.test(text) || tags.some(t => /^(push|push-up|pushup)$/.test(t));
  if(isPush) return 'push';

  return 'isometric';
}

function resolveTreeFamily(item, activeFilters) {
  if(!activeFilters || activeFilters.size === 0) {
    return getTreeRouteFamily(item);
  }
  if(activeFilters.has(item.family)) return item.family;
  const routeFamily = getTreeRouteFamily(item);
  if(activeFilters.has(routeFamily)) return routeFamily;
  const fallback = getTreeFallbackFamily(item.family);
  if(fallback !== item.family && activeFilters.has(fallback)) return fallback;
  return item.family;
}

function doesTreeItemMatchFilters(item, activeFilters) {
  if(activeFilters.size === 0) return true;
  if(activeFilters.has('hof') && item.hof) return true;
  if(activeFilters.has(item.family)) return true;
  const routeFamily = getTreeRouteFamily(item);
  if(activeFilters.has(routeFamily)) return true;
  const fallback = getTreeFallbackFamily(item.family);
  if(fallback !== item.family && activeFilters.has(fallback)) return true;
  return false;
}

/* Caches for getTreeEntries / getHallOfFameExercises — invalidated on every saveProgress. */
let _treeEntriesCache = null;
let _hofExercisesCache = null;
let _hofKeySetCache = null;
function _getHofKeySet() {
  if(!_hofKeySetCache) {
    _hofKeySetCache = new Set(getHallOfFameExercises().map(ex => `${ex._libKey}-${ex.id}`));
  }
  return _hofKeySetCache;
}
function _invalidateExerciseCaches() {
  _treeEntriesCache = null;
  _hofExercisesCache = null;
  _hofKeySetCache = null;
}

function isHallOfFameKey(exKey) {
  if(!exKey || typeof exKey !== 'string') return false;
  return _getHofKeySet().has(exKey);
}

function getTreeEntries() {
  if(_treeEntriesCache) return _treeEntriesCache;
  const seen = new Set();
  const result = TREE_LIBRARY_SOURCES.flatMap(source =>
    getTreeSourceData(source)
      .filter(exercise => isListedExercise(exercise) && !exercise.pantheon && !exercise.sidequestKey)
      .map(exercise => {
        const dedupeKey = `${(exercise.name||'').trim().toLowerCase()}|${(exercise.position||'').trim().toLowerCase()}`;
        if(seen.has(dedupeKey)) return null;
        seen.add(dedupeKey);
        return {
          id: exercise.id,
          key: `${source.libKey}-${exercise.id}`,
          name: exercise.name,
          lib: source.lib,
          libKey: source.libKey,
          family: source.family,
          hof: !!exercise.hof,
          diff: Number(exercise.diff) || 1,
          tier: clampTreeDifficulty(exercise.diff),
          requires: Array.isArray(exercise.requires) ? exercise.requires.slice() : [],
          requiresMode: exercise.requiresMode || 'all',
        };
      })
      .filter(Boolean)
  ).sort((a, b) => {
    if(a.tier !== b.tier) return a.tier - b.tier;
    if(a.hof !== b.hof) return a.hof ? 1 : -1;
    if(a.family !== b.family) return TREE_FAMILY_ORDER.indexOf(a.family) - TREE_FAMILY_ORDER.indexOf(b.family);
    const allFrontLeverKeys = FRONT_LEVER_CHAIN_BRANCHES.flat();
    const aChainIndex = allFrontLeverKeys.indexOf(a.key);
    const bChainIndex = allFrontLeverKeys.indexOf(b.key);
    if(aChainIndex !== -1 || bChainIndex !== -1) {
      if(aChainIndex !== -1 && bChainIndex !== -1) return aChainIndex - bChainIndex;
      return aChainIndex !== -1 ? -1 : 1;
    }
    if(a.diff !== b.diff) return a.diff - b.diff;
    return a.name.localeCompare(b.name);
  });
  _treeEntriesCache = result;
  return _treeEntriesCache;
}

function getFilteredTreeEntries(includeHidden = false) {
  const entries = getTreeEntries();
  const progressData = loadProgress();
  const favouriteData = loadFavourites();
  const activeFilters = TREE_FILTER_STATE.families;
  const isAll = activeFilters.size === 0;
  return entries.filter(item => {
    if(!includeHidden && !shouldIncludeTreeItem(item, progressData)) return false;
    if(!isAll && !doesTreeItemMatchFilters(item, activeFilters)) return false;
    if(item.tier < TREE_FILTER_STATE.diffMin || item.tier > TREE_FILTER_STATE.diffMax) return false;
    const key = `${item.libKey||item.lib}-${item.id}`;
    const status = progressData[key] || '';
    if(TREE_FILTER_STATE.favourite && !favouriteData[key]) return false;
    if(TREE_FILTER_STATE.status === 'unlocked' && status !== 'unlocked') return false;
    if(TREE_FILTER_STATE.status === 'progress' && status !== 'progress') return false;
    if(TREE_FILTER_STATE.status === 'none' && (status === 'unlocked' || status === 'progress')) return false;
    return true;
  });
}

function buildProgressionLevels(){
  const entries = getTreeEntries();
  const progressData = loadProgress();
  const visibleEntries = entries.filter(entry => shouldIncludeTreeItem(entry, progressData));
  return Array.from({length:10}, (_, index) => {
    const tier = index + 1;
    const tierEntries = visibleEntries
      .filter(entry => entry.tier === tier)
      .map(entry => ({
        ...entry,
        treeFamily: resolveTreeFamily(entry, TREE_FILTER_STATE.families),
      }));
    const groups = TREE_FAMILY_ORDER.map(family => {
      const items = tierEntries.filter(entry => entry.treeFamily === family);
      return items.length ? { family, items } : null;
    }).filter(Boolean);

    return {
      difficulty: String(tier),
      groups: groups.length ? groups : [null],
    };
  });
}

function getHallOfFameExercises(){
  if(_hofExercisesCache) return _hofExercisesCache;
  _hofExercisesCache = TREE_LIBRARY_SOURCES
    .flatMap(source => getTreeSourceData(source)
      .filter(exercise => exercise.hof && !exercise.pantheon && isListedExercise(exercise))
      .map(exercise => ({ ...exercise, _lib: source.lib, _libKey: source.libKey }))
    )
    .sort((a, b) => b.diff - a.diff || a.name.localeCompare(b.name));
  return _hofExercisesCache;
}

function openExerciseFromTree(viewName, exerciseId){
  goTo(viewName);
  const libKey = LIB_VIEW_MAP[viewName];
  if(!libKey) return;
  const openTarget = () => {
    const detailRow = document.getElementById(`detail-${libKey}-${exerciseId}`);
    const baseRow = document.querySelector(`#${CSS.escape('view-' + viewName)} tr[data-id="${exerciseId}"]`);
    if(!detailRow) return;
    if(!detailRow.classList.contains('open')) toggleDetail(libKey, exerciseId);
    if(baseRow) baseRow.scrollIntoView({behavior:'smooth', block:'start'});
  };
  requestAnimationFrame(() => requestAnimationFrame(openTarget));
}

/* ══ WORKOUT LIBRARY MODE (bodyweight / gym / cardio) ════════
   Persisted to localStorage so the user's tab choice survives reload.
══════════════════════════════════════════════════════════════ */
const WL_MODE_KEY = 'grnd_wl_mode';
let _wlMode = (function(){
  try { const v = localStorage.getItem(WL_MODE_KEY); return (v === 'gym' || v === 'cardio') ? v : 'bodyweight'; } catch(e){ return 'bodyweight'; }
})();

function setWLMode(mode) {
  _wlMode = mode;
  try { localStorage.setItem(WL_MODE_KEY, mode); } catch(e){}
  document.querySelectorAll('#wlModeSwitch .tree-mode-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  document.querySelectorAll('.wl-panel').forEach(function(p) { p.classList.remove('active'); });
  const panel = document.getElementById('wl-panel-' + mode);
  if (panel) panel.classList.add('active');
}

/* ══ PROGRESSION TREE MODE (bodyweight / cardio / gym) ═══════
   Persisted to localStorage so the user's choice survives reload.
══════════════════════════════════════════════════════════════ */
const TREE_MODE_KEY = 'grnd_tree_mode';
let _treeMode = (function(){
  try { const v = localStorage.getItem(TREE_MODE_KEY); return (v === 'cardio' || v === 'gym') ? v : 'bodyweight'; } catch(e){ return 'bodyweight'; }
})();

const CARDIO_TREE_SOURCES = [
  { lib:'cardio-running-library',  libKey:'cardioRunning',  family:'running',  data:_cardioRunning  },
  { lib:'cardio-cycling-library',  libKey:'cardioCycling',  family:'cycling',  data:_cardioCycling  },
  { lib:'cardio-hiit-library',     libKey:'cardioHIIT',     family:'hiit',     data:_cardioHIIT     },
  { lib:'cardio-rowing-library',   libKey:'cardioRowing',   family:'rowing',   data:_cardioRowing   },
  { lib:'cardio-recovery-library', libKey:'cardioRecovery', family:'recovery', data:_cardioRecovery },
  { lib:'cardio-mobility-library', libKey:'cardioMobility', family:'mobility', data:_cardioMobility },
];
const CARDIO_FAMILY_META = {
  running:  { label:'RUNNING',  color:'#e63946' },
  cycling:  { label:'CYCLING',  color:'#4c9be8' },
  hiit:     { label:'HIIT',     color:'#f4a261' },
  rowing:   { label:'ROWING',   color:'#2a9d5c' },
  recovery: { label:'RECOVERY', color:'#48b58a' },
  mobility: { label:'MOBILITY', color:'#a78bfa' },
};
const CARDIO_FAMILY_ORDER = ['running','cycling','hiit','rowing','recovery','mobility'];

const GYM_TREE_SOURCES = [
  { lib:'gym-chest-library',     libKey:'gymChest',     family:'gymChest',     data:[] },
  { lib:'gym-back-library',      libKey:'gymBack',      family:'gymBack',      data:[] },
  { lib:'gym-shoulders-library', libKey:'gymShoulders', family:'gymShoulders', data:[] },
  { lib:'gym-legs-library',      libKey:'gymLegs',      family:'gymLegs',      data:[] },
  { lib:'gym-arms-library',      libKey:'gymArms',      family:'gymArms',      data:[] },
  { lib:'gym-core-library',      libKey:'gymCore',      family:'gymCore',      data:[] },
  { lib:'weighted-library',      libKey:'weighted',     family:'weighted',     data:[] },
];
const GYM_FAMILY_META = {
  gymChest:     { label:'CHEST',     color:'#e63946' },
  gymBack:      { label:'BACK',      color:'#4c9be8' },
  gymShoulders: { label:'SHOULDERS', color:'#f4a261' },
  gymLegs:      { label:'LEGS',      color:'#2a9d5c' },
  gymArms:      { label:'ARMS',      color:'#a78bfa' },
  gymCore:      { label:'CORE',      color:'#48b58a' },
  weighted:     { label:'WEIGHTED',  color:'#888888' },
};
const GYM_FAMILY_ORDER = ['gymChest','gymBack','gymShoulders','gymLegs','gymArms','gymCore','weighted'];

function getActiveTreeSources() {
  if(_treeMode === 'cardio') return CARDIO_TREE_SOURCES;
  if(_treeMode === 'gym') return GYM_TREE_SOURCES;
  return TREE_LIBRARY_SOURCES;
}
function getActiveFamilyMeta() {
  if(_treeMode === 'cardio') return CARDIO_FAMILY_META;
  if(_treeMode === 'gym') return GYM_FAMILY_META;
  return null; // renderProgressionTree uses its own FAMILY_META for bodyweight
}
function getActiveFamilyOrder() {
  if(_treeMode === 'cardio') return CARDIO_FAMILY_ORDER;
  if(_treeMode === 'gym') return GYM_FAMILY_ORDER;
  return TREE_FAMILY_ORDER;
}
function getActiveTreeEntries() {
  const sources = getActiveTreeSources();
  const result = sources.flatMap(source => {
    let data; try { data = Array.isArray(LIB_DATA[source.libKey]) ? LIB_DATA[source.libKey] : null; } catch(e) { data = null; }
    if (!data) data = Array.isArray(source.data) ? source.data : [];
    return data.filter(isListedExercise).map(ex => ({
      ...ex,
      tier: ex.diff,
      lib: source.lib,
      libKey: source.libKey,
      family: source.family,
      treeFamily: source.family,
    }));
  });
  const familyOrder = getActiveFamilyOrder();
  result.sort((a,b) => {
    if(a.tier !== b.tier) return a.tier - b.tier;
    const ai = familyOrder.indexOf(a.family), bi = familyOrder.indexOf(b.family);
    return ai - bi;
  });
  return result;
}

function _updateTreeModeBtns() {
  document.querySelectorAll('.tree-mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === _treeMode);
  });
}

function setTreeMode(mode) {
  if(mode === _treeMode) return;
  _treeMode = mode;
  try { localStorage.setItem(TREE_MODE_KEY, mode); } catch(e){}
  _updateTreeModeBtns();
  // Reset tree family filters when switching mode (they're mode-specific)
  TREE_FILTER_STATE.families.clear();
  renderProgressionTree();
  updateHomeTreeProgress();
}

function renderProgressionTree(){
  const body=document.getElementById('progressionBody');
  if(!body) return;

  // ── Mode-aware setup ────────────────────────────────────────
  _updateTreeModeBtns();
  const isBodyweight = _treeMode === 'bodyweight';

  // For non-bodyweight modes build levels/entries from active mode data
  const _modeEntries = isBodyweight ? null : getActiveTreeEntries();

  function buildModeLevels() {
    if(isBodyweight) return buildProgressionLevels();
    const familyOrder = getActiveFamilyOrder();
    return Array.from({length:10}, (_,i) => {
      const tier = i + 1;
      const tierItems = _modeEntries.filter(e => e.tier === tier);
      const groupMap = {};
      tierItems.forEach(item => {
        if(!groupMap[item.family]) groupMap[item.family] = [];
        groupMap[item.family].push(item);
      });
      const groups = familyOrder
        .filter(f => groupMap[f] && groupMap[f].length)
        .map(f => ({ family:f, items:groupMap[f] }));
      return { difficulty: String(tier), groups };
    });
  }

  function getModeFilteredEntries() {
    if(isBodyweight) return getFilteredTreeEntries(true);
    const progressData = loadProgress();
    const favouriteData = loadFavourites();
    const activeFilters = TREE_FILTER_STATE.families;
    return _modeEntries.filter(item => {
      if(activeFilters.size > 0 && !activeFilters.has(item.family)) return false;
      if(item.tier < TREE_FILTER_STATE.diffMin || item.tier > TREE_FILTER_STATE.diffMax) return false;
      const key = `${item.libKey}-${item.id}`;
      const status = progressData[key] || '';
      if(TREE_FILTER_STATE.favourite && !favouriteData[key]) return false;
      if(TREE_FILTER_STATE.status === 'unlocked' && status !== 'unlocked') return false;
      if(TREE_FILTER_STATE.status === 'progress' && status !== 'progress') return false;
      if(TREE_FILTER_STATE.status === 'none' && (status==='unlocked'||status==='progress')) return false;
      return true;
    });
  }

  const levels=buildModeLevels();
  const filteredEntries = getModeFilteredEntries();
  const totalNodes = filteredEntries.length;
  const routesEl=document.getElementById('progress-total-routes');
  const nodesEl=document.getElementById('progress-total-nodes');
  if(routesEl) routesEl.textContent=levels.length;
  if(nodesEl) nodesEl.textContent=totalNodes;

  const FAMILY_META = isBodyweight ? {
    push:      {label:'PUSH-UPS',    color:'#e63946'},
    planche:   {label:'PLANCHE',     color:'#111111'},
    pull:      {label:'PULL-UPS',    color:'#4c9be8'},
    dip:       {label:'DIPS',        color:'#f4a261'},
    core:      {label:'CORE',        color:'#2a9d5c'},
    squat:     {label:'LEGS',        color:'#48b58a'},
    chinup:    {label:'SUPINATED',   color:'#1f7f65'},
    handstand: {label:'HANDSTANDS',  color:'#a78bfa'},
    frontlever:{label:'FRONT LEVER', color:'#0ea5e9'},
    backlever: {label:'BACK LEVER',  color:'#0d9488'},
    isometric: {label:'HOLDS',       color:'#8b5cf6'},
    combo:     {label:'COMBOS',      color:'#1d4ed8'},
    weighted:  {label:'WEIGHTED',    color:'#888888'},
    hof:       {label:'HALL OF FAME',color:'#c87d00'},
  } : getActiveFamilyMeta();

  // activeFilters is a Set; empty Set = "all"
  const activeFilters = TREE_FILTER_STATE.families;

  function rowDiffColor(d){
    const n=parseInt(d);
    if(n<=2) return 'var(--green)';
    if(n<=4) return '#8fc05a';
    if(n<=6) return 'var(--gold)';
    if(n<=8) return '#e07b39';
    return 'var(--accent)';
  }

  const COLLAPSED_TIERS_KEY = 'grnd_prog_collapsed_tiers';

  function getDefaultCollapsedTierKeys() {
    if(typeof levels === 'undefined' || !Array.isArray(levels) || levels.length <= 1) return [];
    return levels.slice(1).map(level => String(level.difficulty));
  }

  const collapsedTiers = new Set(
    (() => {
      try {
        const raw = localStorage.getItem(COLLAPSED_TIERS_KEY);
        if(raw === null) return getDefaultCollapsedTierKeys();
        const parsed = JSON.parse(raw || '[]');
        return Array.isArray(parsed) ? parsed : [];
      } catch(e) { return getDefaultCollapsedTierKeys(); }
    })()
  );

  function persistCollapsedTiers() {
    try { localStorage.setItem(COLLAPSED_TIERS_KEY, JSON.stringify([...collapsedTiers])); } catch(e) {}
  }

  window.toggleTierCollapse = function(tier) {
    const tierKey = String(tier);
    if(collapsedTiers.has(tierKey)) collapsedTiers.delete(tierKey);
    else collapsedTiers.add(tierKey);
    persistCollapsedTiers();
    document.getElementById('progRows').innerHTML = renderRows();
    applyProgressToTree();
  };

  function renderRows(){
    const unlockedHofs = getUnlockedPantheonGroupData();
    const progressData = loadProgress();
    const favouriteData = loadFavourites();
    const countEntries = isBodyweight ? getFilteredTreeEntries(true) : getModeFilteredEntries();
    const showPantheonHint = unlockedHofs.length > 0;
    const isAll = activeFilters.size === 0;

    // Precompute which HoF keys open at least one Pantheon exercise (respects requiresMode)
    const _panExercises = typeof getPantheonExercises === 'function' ? getPantheonExercises() : [];
    const _unlockedHofSet = new Set(getUnlockedHofKeys());
    const pantheonGateKeys = new Set();
    _panExercises.forEach(ex => {
      if(!Array.isArray(ex.requires)) return;
      ex.requires.forEach(req => {
        if(!req.startsWith('pantheon-')) pantheonGateKeys.add(req);
      });
    });
    const activeLabel = isAll ? '' : Array.from(activeFilters).map(f=>FAMILY_META[f]?.label||f).join(', ') + ' ';
    return levels.map(level=>{
      const filteredGroups = level.groups
        .map(group => {
          const items = group.items.filter(item => {
            if(!isAll) {
              let show = false;
              if(isBodyweight && activeFilters.has('hof') && item.hof) show = true;
              if(!show && activeFilters.has(group.family)) show = true;
              if(!show) return false;
            }
            if(item.tier < TREE_FILTER_STATE.diffMin || item.tier > TREE_FILTER_STATE.diffMax) return false;
            const itemKey = `${item.libKey||item.lib}-${item.id}`;
            const itemStatus = progressData[itemKey] || '';
            if(TREE_FILTER_STATE.favourite && !favouriteData[itemKey]) return false;
            if(TREE_FILTER_STATE.status === 'unlocked' && itemStatus !== 'unlocked') return false;
            if(TREE_FILTER_STATE.status === 'progress' && itemStatus !== 'progress') return false;
            if(TREE_FILTER_STATE.status === 'none' && (itemStatus === 'unlocked' || itemStatus === 'progress')) return false;
            return true;
          });
          return items.length ? {...group, items} : null;
        })
        .filter(Boolean);
      const allItems = filteredGroups.flatMap(group => group.items);
      const levelItems = countEntries.filter(item => String(item.tier) === level.difficulty);
      const totalCount = levelItems.length;
      // Tier-count key = the PRIMARY of each family pool (promoted variant
      // if Mark-First is set, else the parent) — so a swap still counts.
      function getRenderedItemKey(item) {
        const variants = window.SIDE_QUEST_MAP?.[item.name] || [];
        if(variants.length) return getSqVariantKey(resolveTreePrimary(item.name, item));
        return `${item.libKey||item.lib}-${item.id}`;
      }
      const unlockedCount = levelItems.reduce((sum,item)=>{
        const key = getRenderedItemKey(item);
        return sum + (progressData[key] === 'unlocked' ? 1 : 0);
      }, 0);
      const pct = totalCount ? Math.round((unlockedCount / totalCount) * 100) : 100;

      const hideSQ = TREE_FILTER_STATE.hideSideQuests;
      const sideQuestEntries = hideSQ ? [] : levelItems.flatMap(item => {
        const sqItems = window.SIDE_QUEST_MAP?.[item.name] || [];
        if(!sqItems.length) return [];
        return resolveTreeBranches(item.name, item);
      });
      const sideQuestTotal = sideQuestEntries.length;
      const sideQuestUnlocked = hideSQ ? 0 : sideQuestEntries.reduce((sum, sq) => {
        const sqKey = `${sq._sqSourceLibKey || sq.libKey || sq.lib || ''}-${sq.id}`;
        return sum + (progressData[sqKey] === 'unlocked' ? 1 : 0);
      }, 0);
      const sideQuestPct = sideQuestTotal ? Math.round((sideQuestUnlocked / sideQuestTotal) * 100) : 0;
      const dc=rowDiffColor(level.difficulty);
      const progressBarColor = totalCount === 0 ? 'var(--green)' : null;
      const sideQuestBarColor = sideQuestTotal === 0 ? 'var(--border2)' : 'linear-gradient(90deg,#4c9be8,#6ec8ff)';
      const collapsed = collapsedTiers.has(level.difficulty);
      const hasItems=filteredGroups.length>0;
      return `
        <div class="prog-row${!hasItems?' prog-row-empty':''}${collapsed?' collapsed':''}" data-tier="${level.difficulty}">
          <div class="prog-diff">
            <div class="prog-diff-value" style="color:${dc}">${level.difficulty}</div>
          </div>
          <div class="prog-lanes-scroll">
            <div class="tier-header" onclick="toggleTierCollapse('${level.difficulty}')">
              <div class="tier-label">Tier ${level.difficulty}</div>
              <div class="tier-progress-meta">
                <div class="tier-progress-group">
                  <div class="tier-progress-bar"><span style="width:${pct}%;background:${progressBarColor || 'linear-gradient(90deg,#2a9d5c,#6ed6a0)'}"></span></div>
                  <div class="tier-progress-text" style="color:${totalCount===0?'var(--green)':'var(--text3)'}">${pct}% · ${unlockedCount}/${totalCount} exercises</div>
                </div>
                <div class="tier-progress-group sq-progress-group"${TREE_FILTER_STATE.hideSideQuests ? ' style="display:none"' : ''}>
                  <div class="tier-progress-bar sq-progress-bar"><span style="width:${sideQuestPct}%;background:${sideQuestBarColor}"></span></div>
                  <div class="tier-progress-text" style="color:${sideQuestTotal===0?'var(--text3)':'var(--text3)'}">SQ ${sideQuestPct}% · ${sideQuestUnlocked}/${sideQuestTotal}</div>
                </div>
              </div>
            </div>
            <div class="prog-lanes" style="grid-template-columns:repeat(${Math.max(filteredGroups.length,1)},minmax(180px,1fr))">
              ${hasItems ? filteredGroups.map(group=>`
                <div class="prog-group family-${group.family}">
                  <div class="prog-group-label"${group.family === 'isometric' ? '' : ` style="color:${FAMILY_META[group.family]?.color||'var(--text3)'}"`}>${FAMILY_META[group.family]?.label||group.family}</div>
                  <div class="prog-group-list">
                    ${group.items.map(item=>{
                      const sqItems = window.SIDE_QUEST_MAP[item.name] || [];
                      const hasSQ = sqItems.length > 0;
                      if(hasSQ) setSqParentInfo(item.name, item);
                      // Effective main node = primary of the family pool (the
                      // parent, or a Mark-First-promoted variant). Branches =
                      // the rest of the pool (incl. the demoted parent).
                      const node = hasSQ ? resolveTreePrimary(item.name, item) : item;
                      const branches = hasSQ ? resolveTreeBranches(item.name, item) : [];
                      const nodeLibKey = node.libKey || node._sqSourceLibKey || node.lib;
                      const nodeViewLib = node.lib || node._sqSourceLib || nodeLibKey;
                      const nodeId = node.id;
                      const nodeName = node.name;
                      const nodeFamily = getTreeRouteFamily(node.family ? node : item);
                      const nodeHof = !!node.hof;
                      const nodeKey = `${nodeLibKey}-${nodeId}`;
                      const isGate = nodeHof && pantheonGateKeys.has(nodeKey);
                      const favAttr = favouriteData[nodeKey] ? ' data-favourite="true"' : '';
                      const sqTabHTML = hasSQ && !TREE_FILTER_STATE.hideSideQuests
                        ? `<button class="sq-tab" onclick="toggleSideQuest(event,this)" title="${branches.length} branche${branches.length>1?'s':''} available"><span class="sq-tab-dot"></span>BRANCHE (${branches.length})<span class="sq-tab-chevron">▾</span></button><div class="sq-panel" data-sq-parent="${item.name}">${buildSqPanelHTML(branches, progressData, item.name, item)}</div>`
                        : '';
                      return `<div class="prog-item-wrap"><button class="prog-item family-${nodeFamily}${nodeHof?' prog-item-hof':''}${hasSQ?' has-sq':''}" data-lib="${nodeLibKey}" data-lib-key="${nodeLibKey}" data-view-lib="${nodeViewLib}" data-id="${nodeId}"${favAttr} onclick="openExerciseFromTree('${nodeViewLib}', ${nodeId})">
                        <span class="prog-item-name">${nodeName}</span>
                        <span class="prog-item-meta">
                          <span class="prog-status-dot"></span>
                          <span class="prog-favourite-star">&#9733;</span>
                        </span>
                        ${nodeHof?'<span class="prog-hof-star">★</span>':''}
                      </button>${sqTabHTML}</div>`;
                    }).join('')}
                  </div>
                </div>
              `).join('') : `<div class="prog-empty-tier">No ${activeLabel}exercises at level ${level.difficulty}</div>`}
            </div>
          </div>
        </div>
      `;
    }).join('') + (isBodyweight ? buildPantheonTreeRow() : '');
  }

  function updateChips(){
    const isAllClear = activeFilters.size === 0 && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10;
    const isPushOnly = activeFilters.size === 1 && activeFilters.has('push') && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10;
    const isPullOnly = activeFilters.size === 1 && activeFilters.has('pull') && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10;
    const isDipOnly = activeFilters.size === 1 && activeFilters.has('dip') && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10;
    const isIsometricOnly = activeFilters.size === 1 && activeFilters.has('isometric') && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10;
    const isFavouriteOnly = activeFilters.size === 0 && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10 && TREE_FILTER_STATE.favourite;
    document.querySelectorAll('.prog-qchip[data-qf="all"]').forEach(c => c.classList.toggle('on', isAllClear));
    document.querySelectorAll('.prog-qchip[data-qf="push"]').forEach(c => c.classList.toggle('on', isPushOnly));
    document.querySelectorAll('.prog-qchip[data-qf="pull"]').forEach(c => c.classList.toggle('on', isPullOnly));
    document.querySelectorAll('.prog-qchip[data-qf="dip"]').forEach(c => c.classList.toggle('on', isDipOnly));
    document.querySelectorAll('.prog-qchip[data-qf="isometric"]').forEach(c => c.classList.toggle('on', isIsometricOnly));
    document.querySelectorAll('.prog-qchip[data-qf="favourite"]').forEach(c => c.classList.toggle('on', isFavouriteOnly));
    const n = countActiveTreeFilters();
    document.querySelectorAll('.prog-filter-menu-btn').forEach(b => {
      b.classList.toggle('active', n > 0);
      const badge = b.querySelector('.prog-filter-badge');
      if(badge) badge.textContent = n > 0 ? n : '';
      if(badge) badge.style.display = n > 0 ? '' : 'none';
    });
  }

  window.setTreeFilter=function(btn,fam){
    if(fam === 'all'){
      activeFilters.clear();
    } else {
      if(activeFilters.has(fam)){
        activeFilters.delete(fam);
      } else {
        activeFilters.add(fam);
      }
    }
    updateChips();
    document.getElementById('progRows').innerHTML=renderRows();
    applyProgressToTree();
  };

  const isAllClear0 = activeFilters.size === 0 && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10;
  const isPushOnly0    = activeFilters.size === 1 && activeFilters.has('push')    && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10;
  const isPlancheOnly0 = activeFilters.size === 1 && activeFilters.has('planche') && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10;
  const isPullOnly0    = activeFilters.size === 1 && activeFilters.has('pull')    && TREE_FILTER_STATE.status === 'all' && TREE_FILTER_STATE.diffMin === 1 && TREE_FILTER_STATE.diffMax === 10;
  const activeCount0 = countActiveTreeFilters();
  const hasSavedFilter = (function(){ try{ return !!localStorage.getItem(TREE_FILTER_STORAGE_KEY); }catch(e){ return false; } })();

  // Build mode-specific quick chips
  const _quickChips = isBodyweight
    ? `<button class="prog-qchip${isAllClear0 ? ' on' : ''}" data-qf="all" onclick="setTreeQuickFilter('all')">ALL</button>
       <button class="prog-qchip${isPushOnly0 ? ' on' : ''}" data-qf="push" onclick="setTreeQuickFilter('push')">PUSHUPS</button>
       <button class="prog-qchip${isPlancheOnly0 ? ' on' : ''}" data-qf="planche" onclick="setTreeQuickFilter('planche')">PLANCHE</button>
       <button class="prog-qchip${isPullOnly0 ? ' on' : ''}" data-qf="pull" onclick="setTreeQuickFilter('pull')">PULLUPS</button>`
    : Object.entries(FAMILY_META).map(([k,v]) =>
        `<button class="prog-qchip" data-qf="${k}" onclick="setTreeFilter(this,'${k}')">${v.label}</button>`
      ).join('');

  body.innerHTML=`
    <div class="prog-filter-bar">
      <div class="prog-quick-chips">
        ${isBodyweight ? '' : `<button class="prog-qchip on" data-qf="all" onclick="setTreeFilter(this,'all')">ALL</button>`}
        ${_quickChips}
      </div>
      <button class="prog-filter-menu-btn${activeCount0 > 0 ? ' active' : ''}" onclick="openTreeFilterPanel()">
        ⚙ FILTER${activeCount0 > 0 ? '<span class="prog-filter-badge">' + activeCount0 + '</span>' : ''}${hasSavedFilter && !isAllClear0 ? '<span style="font-size:0.48rem;color:var(--green);margin-left:2px">💾</span>' : ''}
      </button>
    </div>
    <div class="prog-board">
      <div class="prog-rows" id="progRows">${renderRows()}</div>
      <div class="prog-legend">
        ${Object.entries(FAMILY_META).filter(([k])=>k!=='all'&&k!=='hof').map(([k,v])=>`
          <span class="prog-legend-item">
            <span class="prog-legend-dot" style="background:${v.color}"></span>
            <span>${v.label}</span>
          </span>
        `).join('')}
      </div>
    </div>
  `;
  updateChips();
  applyProgressToTree();
  refreshProgressionTreeProgress();
  initProgressLongPress();
  initSqLongPress();
}

function checkPantheonUnlock() {
  const unlockedHofKeys = getUnlockedHofKeys();
  const unlockedPantheonExercises = getUnlockedPantheonExercises();
  const hasUnlock = unlockedPantheonExercises.length > 0;
  const previewMode = typeof isPantheonPreviewEnabled === 'function' ? isPantheonPreviewEnabled() : false;
  const showPantheon = hasUnlock || previewMode;
  const libItem = document.getElementById('pantheon-lib-item');
  const previewCountEl = document.getElementById('pantheon-preview-count');
  const heroCountEl = document.getElementById('pantheon-hero-count');
  const countValue = hasUnlock ? unlockedPantheonExercises.length : '—';
  if(libItem) libItem.style.display = showPantheon ? '' : 'none';
  if(previewCountEl) {
    previewCountEl.textContent = countValue;
    previewCountEl.style.display = showPantheon ? 'inline' : 'none';
  }
  if(heroCountEl) {
    heroCountEl.textContent = countValue;
  }
  return unlockedHofKeys;
}

const EQUIVALENT_HOF_KEYS = {
  'pushup-20': ['planche-9'],
  'planche-9': ['pushup-20'],
};

function hofKeyMatchesRequirement(req, key) {
  if(req === key) return true;
  const reqAliases = EQUIVALENT_HOF_KEYS[req] || [];
  if(reqAliases.includes(key)) return true;
  const keyAliases = EQUIVALENT_HOF_KEYS[key] || [];
  return keyAliases.includes(req);
}

function getUnlockedHofKeys() {
  const hofData = getHallOfFameExercises();
  const hofKeys = new Set(hofData.map(e => `${e._libKey}-${e.id}`));
  const progressData = loadProgress();
  return Object.keys(progressData).filter(k => progressData[k] === 'unlocked' && hofKeys.has(k));
}

function pantheonRequirementMet(req, unlockedHof, progressData) {
  if(unlockedHof.has(req)) return true;
  if(progressData[req] === 'unlocked') return true;
  return Array.from(unlockedHof).some(key => hofKeyMatchesRequirement(req, key));
}

function pantheonRequirementsMet(exercise, unlockedHof, progressData) {
  const requirements = Array.isArray(exercise.requires) ? exercise.requires : [];
  if(!requirements.length) return false;
  const mode = exercise.requiresMode === 'all' ? 'all' : 'any';
  return mode === 'all'
    ? requirements.every(req => pantheonRequirementMet(req, unlockedHof, progressData))
    : requirements.some(req => pantheonRequirementMet(req, unlockedHof, progressData));
}

function getPantheonExercisesForRender() {
  const exercises = getPantheonExercises();
  const unlockedHof = new Set(getUnlockedHofKeys());
  const progressData = loadProgress();
  return exercises.map(e => ({
    ...e,
    family: 'pantheon',
    lib: 'pantheon-library',
    libKey: 'pantheon',
    unlocked: pantheonRequirementsMet(e, unlockedHof, progressData)
  }));
}

function getUnlockedPantheonExercises() {
  const exercises = getPantheonExercises();
  const unlockedHof = new Set(getUnlockedHofKeys());
  const progressData = loadProgress();
  return exercises
    .filter(e => pantheonRequirementsMet(e, unlockedHof, progressData))
    .map(e => ({ ...e, family: 'pantheon', lib: 'pantheon-library', libKey: 'pantheon' }));
}

function getUnlockedPantheonExerciseKeys() {
  return new Set(getUnlockedPantheonExercises().map(e => `pantheon-${e.id}`));
}

function hasPantheonAccess() {
  return getUnlockedPantheonExercises().length > 0;
}

function getExerciseByKey(key) {
  if(!key || typeof key !== 'string') return null;
  const [libKey, rawId] = key.split('-');
  const id = Number(rawId);
  if(!libKey || !Number.isFinite(id)) return null;
  if(libKey === 'pantheon') {
    const pantheonExercises = getPantheonExercises();
    return pantheonExercises.find(ex => ex.id === id) || null;
  }
  const source = TREE_LIBRARY_SOURCES.find(entry => entry.libKey === libKey);
  return source ? (getTreeSourceData(source).find(ex => ex.id === id) || null) : null;
}

const PANTHEON_SOURCE_ARRAYS = [
  typeof pushupPantheonWorkouts !== 'undefined' ? pushupPantheonWorkouts : [],
  typeof planchePantheonWorkouts !== 'undefined' ? planchePantheonWorkouts : [],
  typeof dipPantheonWorkouts !== 'undefined' ? dipPantheonWorkouts : [],
  typeof isometricPantheonWorkouts !== 'undefined' ? isometricPantheonWorkouts : [],
  typeof frontleverPantheonWorkouts !== 'undefined' ? frontleverPantheonWorkouts : [],
  typeof handstandPantheonWorkouts !== 'undefined' ? handstandPantheonWorkouts : [],
  typeof pullupPantheonWorkouts !== 'undefined' ? pullupPantheonWorkouts : [],
];

function getPantheonExercises() {
  // Each source array has its own id sequence starting from 1, so ids are remapped to globally
  // unique values (srcIndex * 100000 + id). Original id preserved as _pantheonLocalId.
  return PANTHEON_SOURCE_ARRAYS.flatMap((arr, srcIndex) =>
    arr.map(exercise => ({
      ...exercise,
      pantheon: true,
      hof: true,
      listed: exercise.listed === false ? false : true,
      _pantheonLocalId: exercise.id,
      id: srcIndex * 100000 + (Number(exercise.id) || 0),
    }))
  );
}

function getExerciseNameByKey(key) {
  return getExerciseByKey(key)?.name || key;
}

function getPantheonUpgradeNamesForKey(key) {
  const pantheonExercises = getPantheonExercises();
  return pantheonExercises
    .filter(exercise => Array.isArray(exercise.requires) && exercise.requires.some(req => {
      if(req === key) return true;
      if(key.startsWith('pantheon-')) return false;
      return hofKeyMatchesRequirement(req, key);
    }))
    .map(exercise => exercise.name)
    .filter((name, index, list) => name && list.indexOf(name) === index);
}

function pantheonPathwayBlock(exercise) {
  const currentKey = `${exercise.libKey || exercise._libKey || 'pantheon'}-${exercise.id}`;
  const buildFrom = (Array.isArray(exercise.requires) ? exercise.requires : [])
    .map(getExerciseNameByKey)
    .filter((name, index, list) => name && list.indexOf(name) === index);
  const upgrades = getPantheonUpgradeNamesForKey(currentKey);
  if(!buildFrom.length && !upgrades.length) return '';
  const modeLabel = exercise.requiresMode === 'all' ? 'All Required' : 'Any Unlocks';
  return `<div class="pantheon-path-section">
    <div class="tactical-label">PATHWAY</div>
    ${buildFrom.length ? `<div class="pantheon-path-row"><div class="pantheon-path-label">${modeLabel}</div><div class="pantheon-path-values">${buildFrom.map(name => `<span class="pantheon-path-chip">${name}</span>`).join('')}</div></div>` : ''}
    ${upgrades.length ? `<div class="pantheon-path-row"><div class="pantheon-path-label">Upgrades Into</div><div class="pantheon-path-values">${upgrades.map(name => `<span class="pantheon-path-chip">${name}</span>`).join('')}</div></div>` : ''}
  </div>`;
}

function renderPantheonLibrary() {
  const body = document.getElementById('pantheonBody');
  if(!body) return;
  const unlocked = getUnlockedHofKeys();
  const exercises = getPantheonExercisesForRender();
  const unlockedItems = exercises.filter(e => e.unlocked);
  const heroCount = document.getElementById('pantheon-hero-count');
  if(heroCount) heroCount.textContent = unlockedItems.length;
  if(!unlocked.length) {
    body.innerHTML = `<div class="pantheon-view-locked"><div class="pantheon-view-locked-icon">⬡</div><h3 class="pantheon-locked-title">PANTHEON LOCKED</h3><p class="pantheon-locked-sub">Unlock any Hall of Fame feat to access mythic variant constellations.</p></div>`;
    return;
  }
  const RISK_LABEL = ['','SAFE','LOW','MOD','HIGH','EXTREME'];
  const RISK_CLASS = ['','safe','low','mod','high','extreme'];
  const progressData = loadProgress();
  pantheonOpenRow = null;
  const preferredOrder = ['Planche', 'Fingertip Planche', 'Maltese', 'Lalanne Push-Up', 'Fingertip Push-Up', 'Front Lever', 'Fingertip Handstand Push-Up'];
  const familyRank = name => {
    const index = preferredOrder.indexOf(name || '');
    return index === -1 ? preferredOrder.length + 20 : index;
  };
  const subgroupOrder = ['Static', 'Dynamic', 'Unilateral', 'Bilateral', 'Fusion', 'Ring Pressure', 'Reverse Pressure', 'Cross Pressure', 'Finger Reduction', 'Finger Pressure', 'Mythic Pull', 'Balance', 'Press'];
  const subgroupRank = name => {
    const index = subgroupOrder.indexOf(name || '');
    return index === -1 ? subgroupOrder.length + 20 : index;
  };
  const sortedExercises = exercises.slice().sort((a, b) => {
    const famDiff = familyRank(a.pantheonGroup) - familyRank(b.pantheonGroup);
    if(famDiff !== 0) return famDiff;
    const subDiff = subgroupRank(a.pantheonSubgroup) - subgroupRank(b.pantheonSubgroup);
    if(subDiff !== 0) return subDiff;
    if((b.unlocked ? 1 : 0) !== (a.unlocked ? 1 : 0)) return (b.unlocked ? 1 : 0) - (a.unlocked ? 1 : 0);
    if((Number(b.diff) || 0) !== (Number(a.diff) || 0)) return (Number(b.diff) || 0) - (Number(a.diff) || 0);
    return (a.name || '').localeCompare(b.name || '');
  });
  const renderCard = e => {
    const hofKey = `${e.libKey || e._libKey || 'pantheon'}-${e.id}`;
    const progressStatus = progressData[hofKey] || '';
    const isUnlocked = !!e.unlocked;
    const isCompleted = progressStatus === 'unlocked';
    const isLocked = !isUnlocked;
    const dc = isLocked ? '#999' : diffColor(e.diff);
    const diffDisplay = isLocked ? '??' : (Number.isInteger(e.diff) ? e.diff : e.diff.toFixed(1));
    const riskLabel = isLocked ? 'UNKNOWN' : (RISK_LABEL[e.risk] || '');
    const riskClass = isLocked ? 'locked' : (RISK_CLASS[e.risk] || '');
    const cardName = isLocked ? '???????' : (e.name || 'Untitled Variant');
    const cardAlt = isLocked ? '' : (e.alt || '');
    const cardDesc = isLocked ? 'Unlock the required base feats to reveal this Pantheon variant.' : (e.desc || 'Variant exercise entry with Hall of Fame mastery details.');
    const tags = isLocked ? '' : (e.muscles || []).map(m => `<span class="mtag${m.p?' primary':''}" onclick="openMuscle(event,'${m.n}')">${m.n}</span>`).join('');
    const familyTag = e.pantheonGroup || 'Pantheon';
    const subgroupTag = e.pantheonSubgroup || '';
    const pathwayBlock = pantheonPathwayBlock(e);
    function goalCol(label,obj) {
      if(isLocked || !obj || !obj.suit) return `<div class="hof-goal-col"><div class="hof-goal-label">${label}</div><div class="hof-goal-val no">&#x2717;</div><div class="hof-goal-stars">${stars(0)}</div></div>`;
      return `<div class="hof-goal-col"><div class="hof-goal-label">${label}</div><div class="hof-goal-val yes">&#x2713;</div><div class="hof-goal-stars">${stars(obj.eff)}</div></div>`;
    }
    const statusClass = progressStatus ? progressStatus : '';
    const actionButton = isLocked
      ? `<button class="hof-card-action pantheon-card-sealed" type="button" disabled>SEALED</button>`
      : `<button class="hof-card-action" data-lib="pantheon" data-id="${e.id}" onclick="openProgressCtx(this, '${hofKey}', '${cardName.replace(/'/g, "\\'")}', event.clientX + 10, event.clientY + 10); event.stopPropagation();">STATUS</button>`;
    const statusBadge = progressStatus ? `<span class="hof-card-status ${statusClass}">${progressStatus === 'unlocked' ? '✓ DONE' : '◉ WIP'}</span>` : '';
    return `<div class="hof-card pantheon-card${isCompleted ? ' completed' : ''}${isLocked ? ' locked' : ''}" id="pantheon-card-${hofKey}" data-lib="pantheon" data-id="${e.id}"${progressStatus ? ` data-status="${progressStatus}"` : ''}>
      <div class="hof-card-main" onclick="togglePantheonDetail('${hofKey}')">
        <div class="hof-card-top">
          <div style="flex:1;min-width:0">
            <div class="hof-card-label">⬡ PANTHEON</div>
            <div class="pantheon-meta-row">
              <span class="pantheon-meta-tag">Pantheon</span>
              <span class="pantheon-meta-tag family">${familyTag}</span>
              ${subgroupTag ? `<span class="pantheon-meta-tag">${subgroupTag}</span>` : ''}
            </div>
            <div class="hof-card-name">${cardName}</div>
            ${statusBadge}
            <div class="hof-card-alt">${cardAlt}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0;margin-left:10px">
            ${actionButton}
            <div style="text-align:right">
              <div class="hof-diff-badge" style="color:${dc}">${diffDisplay}</div>
              <div class="hof-diff-sub">/ 10</div>
            </div>
          </div>
        </div>
        <div class="hof-card-muscles">${tags}</div>
        <div class="hof-card-desc">${cardDesc}</div>
        <div class="hof-card-chips">
          <span class="hof-chip-item ${riskClass==='extreme'?'extreme':riskClass==='high'?'high':''}">RISK: ${riskLabel}</span>
          <span class="hof-chip-item">${isLocked ? 'Unknown' : (e.equipment || 'Bodyweight')}</span>
          <span class="hof-chip-item">${isLocked ? 'Unknown' : (e.position || 'Position')}</span>
        </div>
        <div class="hof-training-row">
          ${goalCol('STR',e.str)}
          ${goalCol('VOL',e.vol)}
          ${goalCol('END',e.end)}
        </div>
        <div class="hof-card-toggle"><span>Full breakdown</span><span class="tog-arrow">&#9660;</span></div>
      </div>
      <div class="hof-card-detail" id="pantheon-detail-${hofKey}">
        <div class="hof-card-detail-inner">
          <div class="hof-desc-block" style="margin-bottom:14px">
            <strong>DESCRIPTION</strong>
            <span class="hof-desc-text">${cardDesc}</span>
            <span class="hof-feat-tag">⬡ PANTHEON VARIANT</span>
          </div>
          <div class="detail-grid" style="margin-bottom:14px">
            <div class="detail-block"><strong>COACHING CUES</strong><div class="detail-block-text">${isLocked ? 'Unlock this variant to view coaching cues.' : (e.cues || 'No coaching cues available.')}</div></div>
            <div class="detail-block"><strong>EQUIPMENT</strong><div class="detail-meta">${isLocked ? 'Unknown' : (e.equipment || 'Bodyweight')}<br/><strong style="margin-top:8px;display:block">BODY POSITION</strong>${isLocked ? 'Unknown' : (e.position || 'N/A')}${isLocked ? '' : kcalBlock(e)}</div></div>
          </div>
          <div class="tactical-section">
            <div class="tactical-label">PERFORMANCE BREAKDOWN</div>
            <div class="tactical-grid">
              <div class="detail-block" style="margin-bottom:10px">
                <strong>JOINT &amp; TENDON STRESS</strong>
                ${isLocked ? '<div class="detail-block-text">Unlock to see the joint stress profile.</div>' : jointStressSummary(e.joints)}
              </div>
              <div class="detail-block" style="margin-bottom:10px">
                <strong>MOBILITY</strong>
                ${isLocked ? '<div class="detail-block-text">Unlock to see mobility breakdown.</div>' : mobBlock(e.mobility)}
              </div>
              <div class="detail-block" style="margin-bottom:10px">
                <strong>STRENGTH</strong>
                ${isLocked ? '<div class="detail-block-text">Unlock to see strength breakdown.</div>' : strengthBlock(e.strength)}
              </div>
            </div>
          </div>
          ${isLocked ? '' : prescriptionBlock(e)}
          ${pathwayBlock}
        </div>
      </div>
    </div>`;
  };
  body.innerHTML = sortedExercises.map(renderCard).join('');
  applyProgressToPantheon();
}

/* ══ HALL OF FAME RENDERER
 ═══════════════════════════════════ */
let hofOpenRow=null;
let pantheonOpenRow=null;

function renderHof(){
  const data=getHallOfFameExercises();
  document.getElementById('hof-stat-total').textContent=data.length;
  hofOpenRow=null;
  const body=document.getElementById('hofBody');
  const RISK_LABEL=['','SAFE','LOW','MOD','HIGH','EXTREME'];
  const RISK_CLASS=['','safe','low','mod','high','extreme'];
  const progressData = loadProgress();
  body.innerHTML=data.map(e=>{
    const hofKey=`${e._libKey}-${e.id}`;
    const progressStatus = progressData[hofKey] || '';
    const isCompleted = progressStatus === 'unlocked';
    const dc=diffColor(e.diff);
    const diffDisplay=Number.isInteger(e.diff)?e.diff:e.diff.toFixed(1);
    const riskLabel=RISK_LABEL[e.risk]||'';
    const riskClass=RISK_CLASS[e.risk]||'';
    const tags=e.muscles.map(m=>`<span class="mtag${m.p?' primary':''}" onclick="openMuscle(event,'${m.n}')">${m.n}</span>`).join('');
    function goalCol(label,obj){
      if(!obj || !obj.suit) return `<div class="hof-goal-col"><div class="hof-goal-label">${label}</div><div class="hof-goal-val no">&#x2717;</div><div class="hof-goal-stars">${stars(0)}</div></div>`;
      return `<div class="hof-goal-col"><div class="hof-goal-label">${label}</div><div class="hof-goal-val yes">&#x2713;</div><div class="hof-goal-stars">${stars(obj.eff)}</div></div>`;
    }
    return `<div class="hof-card${isCompleted ? ' completed' : ''}" id="hof-card-${hofKey}">
      <div class="hof-card-main" onclick="toggleHofDetail('${hofKey}')">
        <div class="hof-card-top">
          <div style="flex:1;min-width:0">
            <div class="hof-card-label">&#9733; HALL OF FAME</div>
            <div class="hof-card-name">${e.name}</div>
            <div class="hof-card-alt">${e.alt||''}</div>
          </div>
          <div style="text-align:right;flex-shrink:0;margin-left:10px">
            <div class="hof-diff-badge" style="color:${dc}">${diffDisplay}</div>
            <div class="hof-diff-sub">/ 10</div>
          </div>
        </div>
        <div class="hof-card-muscles">${tags}</div>
        <div class="hof-card-desc">${e.desc}</div>
        <div class="hof-card-chips">
          <span class="hof-chip-item ${riskClass==='extreme'?'extreme':riskClass==='high'?'high':''}">RISK: ${riskLabel}</span>
          <span class="hof-chip-item">${e.equipment}</span>
          <span class="hof-chip-item">${e.position}</span>
        </div>
        <div class="hof-training-row">
          ${goalCol('STR',e.str)}
          ${goalCol('VOL',e.vol)}
          ${goalCol('END',e.end)}
        </div>
        <div class="hof-card-toggle"><span>Full breakdown</span><span class="tog-arrow">&#9660;</span></div>
      </div>
      <div class="hof-card-detail" id="hof-detail-${hofKey}">
        <div class="hof-card-detail-inner">
          <div class="hof-desc-block" style="margin-bottom:14px">
            <strong>DESCRIPTION</strong>
            <span class="hof-desc-text">${e.desc}</span>
            <span class="hof-feat-tag">&#9733; HALL OF FAME FEAT</span>
          </div>
          <div class="detail-grid" style="margin-bottom:14px">
            <div class="detail-block"><strong>COACHING CUES</strong><div class="detail-block-text">${e.cues}</div></div>
            <div class="detail-block"><strong>EQUIPMENT</strong><div class="detail-meta">${e.equipment}<br/><strong style="margin-top:8px;display:block">BODY POSITION</strong>${e.position}${kcalBlock(e)}</div></div>
          </div>
          <div class="tactical-section">
            <div class="tactical-label">PERFORMANCE BREAKDOWN</div>
            <div class="tactical-grid">
              <div class="detail-block" style="margin-bottom:10px">
                <strong>JOINT &amp; TENDON STRESS</strong>
                ${jointStressSummary(e.joints)}
              </div>
              <div class="detail-block" style="margin-bottom:10px">
                <strong>MOBILITY</strong>
                ${mobBlock(e.mobility)}
              </div>
              <div class="detail-block" style="margin-bottom:10px">
                <strong>STRENGTH</strong>
                ${strengthBlock(e.strength)}
              </div>
            </div>
          </div>
          ${prescriptionBlock(e)}
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleHofDetail(hofKey){
  const card=document.getElementById('hof-card-'+hofKey);
  if(!card) return;
  if(hofOpenRow&&hofOpenRow!==card) hofOpenRow.classList.remove('open');
  card.classList.toggle('open');
  hofOpenRow=card.classList.contains('open')?card:null;
}

function togglePantheonDetail(pantheonKey){
  const card=document.getElementById('pantheon-card-'+pantheonKey);
  if(!card) return;
  if(pantheonOpenRow&&pantheonOpenRow!==card) pantheonOpenRow.classList.remove('open');
  card.classList.toggle('open');
  pantheonOpenRow=card.classList.contains('open')?card:null;
}

/* ══ TABLE ════════════════════════════════════════════════════ */

function diffColor(d){
  if(d<=2) return '#2a9d5c';
  if(d<=4) return '#8fc05a';
  if(d<=6) return '#f4a261';
  if(d<=8) return '#e07b39';
  if(d<9)  return '#e63946';
  // HOF range: 9.0–10.0 — gradient from deep red to pure white-gold
  const t=(d-9)/1; // 0 at 9.0, 1 at 10.0
  if(t<0.3) return '#e63946';
  if(t<0.5) return '#cc2a5a';
  if(t<0.7) return '#b5006e';
  if(t<0.9) return '#9900aa';
  return '#cc00ff'; // diff:10 — truly singular
}
function stars(n,max=5){
  let s='';
  for(let i=1;i<=max;i++) s+=`<span class="star ${i<=n?'filled':'empty'}">${i<=n?'★':'☆'}</span>`;
  return s;
}
function tCell(t){
  if(!t || !t.suit) return `<td class="tc"><div class="t-badge"><span class="t-suit no">✗</span><div class="t-stars">${stars(0)}</div></div></td>`;
  return `<td class="tc"><div class="t-badge"><span class="t-suit yes">✓</span><div class="t-stars">${stars(t.eff)}</div></div></td>`;
}

/* ── RISK / JOINT / TECHNIQUE / MOBILITY HELPERS ─────────── */
const RISK_META=[null,
  {l:'SAFE',   c:'#2a9d5c'},
  {l:'LOW',    c:'#8fc05a'},
  {l:'MOD',    c:'#f4a261'},
  {l:'HIGH',   c:'#e07b39'},
  {l:'EXTREME',c:'#e63946'}
];
function exerciseRisk(e){
  if(e && typeof e.risk === 'number') return e.risk;
  const j = e && e.joints;
  if(!j) return 1;
  const vals = Object.values(j).filter(v => typeof v === 'number');
  if(!vals.length) return 1;
  const peak = Math.max(...vals);
  const top3Avg = vals.slice().sort((a,b)=>b-a).slice(0,3).reduce((s,v)=>s+v,0) / 3;
  const r = peak*0.6 + top3Avg*0.4;
  return Math.max(1, Math.min(5, Math.round(r)));
}
function riskCell(r){
  const m=RISK_META[r]||RISK_META[1];
  return `<td class="trisk"><div class="risk-wrap"><span class="risk-dot" style="background:${m.c};box-shadow:0 0 5px ${m.c}88"></span><span style="color:${m.c}">${m.l}</span></div></td>`;
}
function nutritionCookingNotes(e){
  // Kept for any legacy callers — returns empty string since the new
  // nutrDetailCard() handles description + cooking inline.
  return '';
}
function nutritionToolsBlock(e){
  return '';
}
/* ── NUTRITION DETAIL CARD ───────────────────────────────────────
   Single compact card (Image-1 style) replacing the old 3-panel
   detail-grid + bottom stat rows.
   Reuses: stars(), RISK_META, .t-stars/.star, .risk-wrap/.risk-dot
──────────────────────────────────────────────────────────────── */
/* ── NUTRITION MOBILE CARD RENDERER ─────────────────────────────
   Renders the 2-col card grid for <640px screens.
   Called by renderLibTable after the table body is written.
──────────────────────────────────────────────────────────────── */
function renderNutritionCards(libKey, data) {
  const gridId = libKey + '-cards';
  const grid = document.getElementById(gridId);
  if (!grid) return;

  // Each food gets a .nutr-mob-wrap containing the collapsed card + hidden detail.
  // Wrapper uses display:contents normally (transparent to grid) and display:block
  // when open (spans full width via grid-column:1/-1 on the wrapper... but since
  // display:contents is used for collapsed, we instead mark open wrappers with
  // grid-column span via inline style toggled in JS).
  grid.innerHTML = data.map(e => {
    const rowKey = `${e.id}`;
    const dc = diffColor(e.diff);
    const dp = (e.diff / 10) * 100;
    const diffDisplay = Number.isInteger(e.diff) ? e.diff : e.diff.toFixed(1);
    const riskMeta = RISK_META[e.risk] || RISK_META[1];
    const tags = (e.muscles || []).map(m =>
      `<span class="nutr-mob-tag${m.p ? ' primary' : ''}" onclick="openNutrient(event,'${m.n}')">${m.n}</span>`
    ).join('');
    const riskDot = `<span class="risk-dot" style="background:${riskMeta.c};box-shadow:0 0 5px ${riskMeta.c}88;flex-shrink:0;margin-top:2px"></span>`;

    return `<div class="nutr-mob-wrap" id="nutr-mob-wrap-${libKey}-${rowKey}" style="grid-column:auto">
      <div class="nutr-mob-card" onclick="toggleNutrCard(event,'${libKey}','${rowKey}')">
        <div class="nutr-mob-card-top">
          <div>
            <div class="nutr-mob-card-name">${e.name}</div>
            ${e.alt ? `<div class="nutr-mob-card-alt">${e.alt}</div>` : ''}
          </div>
          ${riskDot}
        </div>
        <div class="nutr-mob-score">
          <div class="nutr-mob-bar"><div class="nutr-mob-bar-fill" style="width:${dp}%;background:${dc}"></div></div>
          <span class="nutr-mob-score-num" style="color:${dc}">${diffDisplay}/10</span>
        </div>
        <div class="nutr-mob-tags">${tags}</div>
      </div>
      <div class="nutr-mob-detail">
        ${nutritionStatFooter(e)}
      </div>
    </div>`;
  }).join('');
}

function toggleNutrCard(event, libKey, rowKey) {
  event.stopPropagation();
  const wrap = document.getElementById(`nutr-mob-wrap-${libKey}-${rowKey}`);
  if (!wrap) return;

  const grid = wrap.closest('.nutr-card-grid');
  const isOpening = !wrap.classList.contains('open');

  // close any currently open wrapper in this grid
  grid.querySelectorAll('.nutr-mob-wrap.open').forEach(w => {
    w.classList.remove('open');
    w.style.gridColumn = 'auto';
  });

  if (isOpening) {
    wrap.classList.add('open');
    wrap.style.gridColumn = '1 / -1';  // span both columns
    setTimeout(() => wrap.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }
}

function nutritionStatFooter(e) {
  const STAT_LABELS = ['PROTEIN','CARBS','FAT'];
  const STAT_KEYS   = ['str','vol','end'];

  // Macro items inside a single panel
  const macroCols = STAT_KEYS.map((k, i) => {
    const t = e[k];
    const suit = t && t.suit;
    const suitIcon = `<span class="nutr-macro-suit ${suit?'yes':'no'}">${suit?'✓':'✗'}</span>`;
    const starsHtml = `<div class="t-stars">${stars(suit ? (t.eff||0) : 0)}</div>`;
    const note = suit && t.note ? `<div class="nutr-macro-note">${t.note.split('.')[0]}.</div>` : '';
    const typeClass = k === 'str' ? 'protein' : k === 'vol' ? 'carbs' : 'fat';
    return `<div class="nutr-macro-col ${typeClass}">
      <div class="nutr-macro-label"><span class="nutr-macro-dot"></span>${STAT_LABELS[i]}</div>
      <div class="nutr-macro-status">${suitIcon}${starsHtml}</div>
      ${note}
    </div>`;
  });

  // Timing row
  const timingPills = e.position
    ? e.position.split(' · ').map(s => `<span class="nutr-timing-pill">${s}</span>`).join('')
    : '<span class="nutr-timing-pill" style="opacity:.4">—</span>';

  // Footer badges
  const riskMeta = RISK_META[e.risk] || RISK_META[1];
  const tags = (e.tags||[]).map(t=>t.toLowerCase());
  const allergenKeys = ['egg','dairy','soy','fish','shellfish','peanut','nut','gluten','wheat','sesame'];
  const allergen = tags.find(t => allergenKeys.includes(t));
  const allergenBadge = allergen
    ? `<span class="risk-wrap"><span class="risk-dot" style="background:${riskMeta.c};box-shadow:0 0 5px ${riskMeta.c}88"></span><span style="color:${riskMeta.c};font-size:0.58rem;letter-spacing:.06em">ALLERGEN: ${allergen.toUpperCase()}</span></span>`
    : `<span style="font-size:0.58rem;letter-spacing:.06em;color:var(--text3)">ALLERGEN: NONE</span>`;
  const riskBadge = `<span class="risk-wrap"><span class="risk-dot" style="background:${riskMeta.c};box-shadow:0 0 5px ${riskMeta.c}88"></span><span style="color:${riskMeta.c};font-size:0.58rem;letter-spacing:.06em">RISK: ${riskMeta.l}</span></span>`;

  // Cooking short note (first sentence) + tools
  const cookingShort = e.cues ? e.cues.split('.')[0] + '.' : '';
  const toolsNote = e.equipment ? e.equipment : '';
  const prepNote = [cookingShort, toolsNote].filter(Boolean).join(' · ');

  const breakdownName = e.name ? JSON.stringify(e.name) : '"Macro"';
  return `<div class="nutr-card">
    <div class="nutr-desc">${e.desc || ''}</div>
    <div class="nutr-macro-panel">
      <div class="nutr-macro-summary">${macroCols.join('')}</div>
      <button class="joint-detail-btn" onclick='openMacroBreakdown(${breakdownName})'>Nutritional profile<span class="jdb-arrow">→</span></button>
    </div>
    <div class="nutr-card-bottom-row">
      <div class="nutr-macro-timing">
        <div class="nutr-macro-label">TIMING</div>
        <div class="nutr-timing-pills">${timingPills}</div>
      </div>
      <div class="nutr-footer-bar">
        <div class="nutr-badge-group">${allergenBadge}${riskBadge}</div>
        ${prepNote ? `<div class="nutr-cooking-note">${prepNote}</div>` : ''}
      </div>
    </div>
  </div>`;
}
/* JOINTS_META → anatomy.js */

const J_COLORS = ['','#2a9d5c','#c9a227','#e07b39','#e85d3f','#e63946'];
const J_LABELS = ['N/A','LOW','MOD','HIGH','V.HIGH','EXTREME'];

/* ── Injury-aware filtering ───────────────────────────────── */
const _injuryDismissed = new Set(); // '${libKey}-${rowKey}' — session only

function _injJointVal(v) {
  if (typeof v === 'boolean') return v ? 3 : 0; // legacy bool: true → treat as HIGH
  return Number(v) || 0;
}

function getInjuryFlaggedJoints(joints) {
  const injuries = typeof window.getActiveInjuries === 'function' ? window.getActiveInjuries() : [];
  if (!injuries.length || !joints) return [];
  return injuries.filter(k => _injJointVal(joints[k]) >= 3);
}

window.dismissInjuryWarning = function(detailId) {
  _injuryDismissed.add(detailId);
  const detail = document.getElementById(detailId);
  if (!detail) return;
  const overlay = detail.querySelector('.inj-blur-overlay');
  const blurred = detail.querySelector('.inj-section-blur');
  if (overlay) overlay.style.display = 'none';
  if (blurred) blurred.style.filter = 'none';
};

let _jbActiveKey = null;
let _jbCurrentJoints = {};

function jointStressSummary(joints) {
  const jointsData = joints && typeof joints === 'object' ? joints : {};
  const all = JOINTS_META.map(jm => ({
    ...jm,
    val: Math.max(0, Math.min(5, Number(jointsData[jm.key]) || 0))
  }));
  const hasStressData = Object.keys(jointsData).some(key => JOINTS_META.some(jm => jm.key === key));
  const stressed = all.filter(j => j.val >= 2).sort((a,b) => b.val - a.val).slice(0, 3);

  let bodyHtml;
  if(!hasStressData) {
    bodyHtml = `<div class="joint-no-stress">No joint/tendon stress data available for this entry.</div>`;
    return bodyHtml;
  }

  if(stressed.length === 0) {
    bodyHtml = `<div class="joint-no-stress">No significant joint stress — suitable for most users.</div>`;
  } else {
    bodyHtml = `<div class="joint-summary-list">` +
      stressed.map(j => {
        const c = J_COLORS[j.val];
        let dots = '';
        for(let i=1;i<=5;i++) dots += `<span class="jsi-dot" style="${i<=j.val?`background:${c};border-color:${c};box-shadow:0 0 3px ${c}88`:''}"></span>`;
        return `<div class="joint-summary-item">
          <span class="jsi-label">${j.label}</span>
          <div class="jsi-dots">${dots}<span class="jsi-val" style="color:${c}">${J_LABELS[j.val]}</span></div>
        </div>`;
      }).join('') + `</div>`;
  }
  const safe = encodeURIComponent(JSON.stringify(jointsData));
  return bodyHtml +
    `<button class="joint-detail-btn" onclick="openJointBreakdown('${safe}')">
      <span class="jdb-arrow">▶</span> DETAILED BREAKDOWN
    </button>`;
}

function openJointBreakdown(encoded) {
  try { _jbCurrentJoints = JSON.parse(decodeURIComponent(encoded)); } catch(e){ _jbCurrentJoints = {}; }
  const first = JOINTS_META.find(jm => (_jbCurrentJoints[jm.key]||0) > 0) || JOINTS_META[0];
  _jbActiveKey = first.key;
  _jbActiveTab = 'joints';
  // Ensure joints tab is active, tendons tab hidden
  const _jbJ = document.getElementById('jbTabContentJoints');
  const _jbT = document.getElementById('jbTabContentTendons');
  if(_jbJ) _jbJ.style.display = 'flex';
  if(_jbT) _jbT.style.display = 'none';
  const _jbJBtn = document.getElementById('jbTabJoints');
  const _jbTBtn = document.getElementById('jbTabTendons');
  if(_jbJBtn) _jbJBtn.classList.add('active');
  if(_jbTBtn) _jbTBtn.classList.remove('active');
  _renderJbJointList();
  _renderJbTendons(_jbActiveKey);
  document.getElementById('jbOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function resetAppData() {
  // Themed confirm (reuses the app's global .metrics-confirm dialog) with a
  // 5-second safety delay on the confirm button before it can be pressed.
  _grndConfirmReset(_grndWipeEverything);
}

function grndConfirm(message, onConfirm, opts) {
  opts = opts || {};
  var m = document.getElementById(opts.id || 'grndAppConfirm');
  if (!m) {
    m = document.createElement('div');
    m.id = opts.id || 'grndAppConfirm';
    m.className = 'metrics-confirm-overlay';
    m.innerHTML = '<div class="metrics-confirm-box" role="dialog" aria-modal="true">' +
      '<div class="metrics-confirm-msg"></div>' +
      '<div class="metrics-confirm-btns">' +
        '<button type="button" class="metrics-confirm-cancel">CANCEL</button>' +
        '<button type="button" class="metrics-confirm-ok"></button>' +
      '</div></div>';
    document.body.appendChild(m);
    m.addEventListener('click', function (e) { if (e.target === m) m.classList.remove('open'); });
  }

  m.querySelector('.metrics-confirm-msg').textContent = message;

  var okOld = m.querySelector('.metrics-confirm-ok');
  var caOld = m.querySelector('.metrics-confirm-cancel');
  var ok = okOld.cloneNode(false);
  var ca = caOld.cloneNode(false);
  ok.className = 'metrics-confirm-ok' + (opts.danger ? ' danger' : '');
  ok.textContent = opts.okText || 'CONFIRM';
  ca.className = 'metrics-confirm-cancel';
  ca.textContent = opts.cancelText || 'CANCEL';
  okOld.replaceWith(ok);
  caOld.replaceWith(ca);

  ca.addEventListener('click', function () { m.classList.remove('open'); });
  ok.addEventListener('click', function () {
    m.classList.remove('open');
    if (onConfirm) onConfirm();
  });

  void m.offsetWidth;
  m.classList.add('open');
}
window.grndConfirm = grndConfirm;

function _grndConfirmReset(onConfirm) {
  var m = document.getElementById('grndResetConfirm');
  if (!m) {
    m = document.createElement('div');
    m.id = 'grndResetConfirm';
    m.className = 'metrics-confirm-overlay';
    m.innerHTML = '<div class="metrics-confirm-box" role="dialog" aria-modal="true">' +
      '<div class="metrics-confirm-msg"></div>' +
      '<div class="metrics-confirm-btns">' +
        '<button type="button" class="metrics-confirm-cancel">CANCEL</button>' +
        '<button type="button" class="metrics-confirm-ok danger"></button>' +
      '</div></div>';
    document.body.appendChild(m);
    m.addEventListener('click', function (e) { if (e.target === m) m.classList.remove('open'); });
  }
  m.querySelector('.metrics-confirm-msg').innerHTML =
    'This erases <strong>everything</strong> on this device — progress, stats, settings, ' +
    'custom background, loader &amp; alarm, and the local backup. This cannot be undone.';

  // Swap in fresh buttons so we never stack listeners across openings.
  var okOld = m.querySelector('.metrics-confirm-ok');
  var caOld = m.querySelector('.metrics-confirm-cancel');
  var ok = okOld.cloneNode(false); ok.className = 'metrics-confirm-ok danger';
  var ca = caOld.cloneNode(false); ca.className = 'metrics-confirm-cancel'; ca.textContent = 'CANCEL';
  okOld.replaceWith(ok); caOld.replaceWith(ca);

  // 5-second countdown: confirm stays locked until the user has waited it out.
  var left = 5;
  ok.disabled = true;
  ok.textContent = 'WAIT ' + left + 's';
  var timer = setInterval(function () {
    left -= 1;
    if (left > 0) { ok.textContent = 'WAIT ' + left + 's'; return; }
    clearInterval(timer);
    ok.disabled = false;
    ok.textContent = 'ERASE EVERYTHING';
  }, 1000);

  ca.addEventListener('click', function () { clearInterval(timer); m.classList.remove('open'); });
  ok.addEventListener('click', function () {
    if (ok.disabled) return;
    clearInterval(timer);
    m.classList.remove('open');
    if (onConfirm) onConfirm();
  });

  void m.offsetWidth;
  m.classList.add('open');
}

// Empties the 'kv' store of a same-origin IndexedDB. Clearing the store
// (vs deleteDatabase) can't be blocked by the app's open connections, so the
// wipe is reliable. Resolves regardless of outcome.
function _grndClearIdbStore(name) {
  return new Promise(function (resolve) {
    var req;
    try { req = indexedDB.open(name); }
    catch (e) { resolve(); return; }
    req.onerror = function () { resolve(); };
    req.onsuccess = function () {
      var db = req.result;
      try {
        if (!db.objectStoreNames.contains('kv')) { db.close(); resolve(); return; }
        var tx = db.transaction('kv', 'readwrite');
        tx.objectStore('kv').clear();
        tx.oncomplete = function () { try { db.close(); } catch (e) {} resolve(); };
        tx.onerror = function () { try { db.close(); } catch (e) {} resolve(); };
      } catch (e) { try { db.close(); } catch (_) {} resolve(); }
    };
  });
}

function _grndWipeEverything() {
  try { localStorage.clear(); } catch (e) {}
  try { sessionStorage.clear(); } catch (e) {}
  // Drop the live custom-background layer right away for instant feedback.
  try {
    document.documentElement.classList.remove('grnd-has-custombg');
    var bg = document.getElementById('grnd-custom-bg');
    if (bg) bg.style.backgroundImage = '';
  } catch (e) {}
  // Without this, the grnd_backup snapshot restores localStorage on the next
  // load (so the background/settings came back), and the grnd_custom alarm
  // blob would survive a "reset everything".
  var jobs = [_grndClearIdbStore('grnd_backup'), _grndClearIdbStore('grnd_custom')];
  var reloaded = false;
  function finish() { if (reloaded) return; reloaded = true; location.reload(); }
  Promise.all(jobs).then(finish, finish);
  setTimeout(finish, 2000); // safety net if a store hangs
}

function _renderJbJointList() {
  document.getElementById('jbJointList').innerHTML = JOINTS_META.map(jm => {
    const val = Math.max(0, Math.min(5, Number((_jbCurrentJoints||{})[jm.key]) || 0));
    const c   = J_COLORS[val] || 'var(--text3)';
    let dots  = '';
    for(let i=1;i<=5;i++) dots += `<span class="jb-jdot" style="${val>0&&i<=val?`background:${c};border-color:${c};box-shadow:0 0 3px ${c}66`:''}"></span>`;
    return `<div class="jb-jitem${_jbActiveKey===jm.key?' active':''}" onclick="jbSelectJoint('${jm.key}')">
      <span class="jb-jname">${jm.label}</span>
      <div class="jb-jdots">${dots}</div>
      <span class="jb-jlevel" style="color:${val?c:'var(--text3)'}">${val?J_LABELS[val]:'N/A'}</span>
    </div>`;
  }).join('');
}

function _renderJbTendons(key) {
  const jm  = JOINTS_META.find(j => j.key === key);
  if(!jm) return;
  const val = Math.max(0, Math.min(5, Number((_jbCurrentJoints||{})[key]) || 0));
  const c   = J_COLORS[val] || 'var(--text3)';
  let dots  = '';
  for(let i=1;i<=5;i++) dots += `<span class="jb-t-dot" style="${val>0&&i<=val?`background:${c};border-color:${c};box-shadow:0 0 4px ${c}77`:''}"></span>`;

  const tendonsHtml = jm.tendons.map(t => {
    const loaded = val >= 2;
    return `<div class="jb-tendon-card${loaded?' loaded':''}" ${loaded?`style="border-color:${c}55;background:${c}0d"`:''}>
      <div class="jb-tendon-name" ${loaded?`style="color:${c}"`:''}>${t.name}</div>
      <div class="jb-tendon-status" ${loaded?`style="color:${c}99"`:''}>${loaded ? '⚠ Under load at this stress level' : '✓ Not significantly loaded'}</div>
      <div style="font-family:var(--sans);font-size:0.68rem;color:var(--text2);margin-top:4px;line-height:1.55">${t.note}</div>
    </div>`;
  }).join('');

  const zeroNote = val === 0
    ? `<div class="jb-no-stress-note">This joint is not loaded by this exercise — all tendons remain unstressed.</div>`
    : '';

  document.getElementById('jbTendonPanel').innerHTML =
    `<div class="jb-t-header" ${val>0?`style="border-bottom:2px solid ${c}44"`:''}> 
      <div class="jb-t-joint-name" ${val>0?`style="color:${c}"`:''}>${jm.label}</div>
      <div class="jb-t-stress-row">
        <div class="jb-t-dots">${dots}</div>
        <span class="jb-t-level" style="color:${val?c:'var(--text3)'}">${val?J_LABELS[val]:'NOT LOADED'}</span>
      </div>
    </div>
    ${zeroNote}
    <div class="jb-t-body">
      <div class="jb-t-section-label">TENDONS & STRUCTURES</div>
      ${tendonsHtml}
    </div>`;
}

window.jbSelectJoint = function(key) {
  _jbActiveKey = key;
  _renderJbJointList();
  _renderJbTendons(key);
  const tp = document.getElementById('jbTendonPanel');
  if(tp) tp.scrollTop = 0;
};

function closeJointBreakdown() {
  document.getElementById('jbOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── JB TABS ─────────────────────────────────────────────────────── */
let _jbActiveTab = 'joints';

window.jbSwitchTab = function(tab) {
  _jbActiveTab = tab;
  const jEl = document.getElementById('jbTabContentJoints');
  const tEl = document.getElementById('jbTabContentTendons');
  if(jEl) jEl.style.display = tab === 'joints' ? 'flex' : 'none';
  if(tEl) tEl.style.display = tab === 'tendons' ? 'flex' : 'none';
  const jBtn = document.getElementById('jbTabJoints');
  const tBtn = document.getElementById('jbTabTendons');
  if(jBtn) jBtn.classList.toggle('active', tab === 'joints');
  if(tBtn) tBtn.classList.toggle('active', tab === 'tendons');
  if(tab === 'tendons') _renderJbTendonsTab();
};

function _renderJbTendonsTab() {
  const el = document.getElementById('jbTendonsTabContent');
  if(!el) return;

  // Collect all joints that have any stress, sorted highest first
  const groups = JOINTS_META
    .map(jm => ({
      jm,
      val: Math.max(0, Math.min(5, Number((_jbCurrentJoints||{})[jm.key]) || 0))
    }))
    .filter(g => g.val > 0)
    .sort((a,b) => b.val - a.val);

  if(groups.length === 0) {
    el.innerHTML = '<div class="jb-no-stress-note" style="padding:20px 0">No tendons under significant load for this exercise — all structures remain unstressed.</div>';
    return;
  }

  el.innerHTML = groups.map(({jm, val}) => {
    const c     = J_COLORS[val];
    const label = J_LABELS[val];
    let dots = '';
    for(let i=1;i<=5;i++) dots += `<span class="jb-t-dot" style="${i<=val?`background:${c};border-color:${c};box-shadow:0 0 4px ${c}77`:''}"></span>`;

    const tendonsHtml = jm.tendons.map(t => `
      <div class="jb-tendon-card loaded" style="border-color:${c}44;background:${c}0d;margin-bottom:6px">
        <div class="jb-tendon-name" style="color:${c}">${t.name}</div>
        <div class="jb-tendon-status" style="color:${c}88">⚠ ${label} load via ${jm.label}</div>
        <div style="font-family:var(--sans);font-size:0.68rem;color:var(--text2);margin-top:4px;line-height:1.55">${t.note}</div>
      </div>`).join('');

    return `<div style="margin-bottom:20px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--border)">
        <span style="font-family:var(--display);font-size:1.1rem;letter-spacing:0.04em;color:${c}">${jm.label}</span>
        <div class="jb-t-dots">${dots}</div>
        <span style="font-family:var(--mono);font-size:0.58rem;font-weight:700;letter-spacing:0.08em;color:${c}">${label}</span>
      </div>
      ${tendonsHtml}
    </div>`;
  }).join('');
}

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeJointBreakdown();
});

function jointRow(label,val){
  const safeVal=Math.max(0,Math.min(5,Number(val)||0));
  const jColors=['','#2a9d5c','#c9a227','#e07b39','#e85d3f','#e63946'];
  const jLabels=['','LOW','MOD','HIGH','V.HIGH','EXTREME'];
  if(safeVal===0) return '';
  let dots='';
  for(let i=1;i<=5;i++) dots+=`<span class="jdot" style="${i<=safeVal?`background:${jColors[safeVal]};border-color:${jColors[safeVal]};box-shadow:0 0 3px ${jColors[safeVal]}88`:''}"></span>`;
  return `<div class="jrow"><span class="jrow-label">${label}</span><div class="jdots">${dots}<span class="jval" style="color:${jColors[safeVal]}">${jLabels[safeVal]}</span></div></div>`;
}
function techBlock(val){
  const techLabels=['','BASIC','NOVICE','INTERMEDIATE','ADVANCED','ELITE'];
  const techSubs=['','Movement fundamentals only','Consistent form required','Coordination + body awareness','Balance, timing, neural pattern','Years of systematic training'];
  const c=diffColor(val*2);
  const pct=(val/5)*100;
  return `<div class="tech-level" style="color:${c}">${techLabels[val]}</div>
    <div class="tech-bar-wrap"><div class="tech-fill" style="width:${pct}%;background:${c}"></div></div>
    <div class="tech-sub">${techSubs[val]}</div>`;
}
function mobBlock(val){
  const classes=['','mob-1','mob-2','mob-3','mob-4','mob-5'];
  const labels=['','LOW','MEDIUM','HIGH','VERY HIGH','EXTREME'];
  const desc=[
    '',
    'Standard range of motion sufficient.',
    'Above-average flexibility needed — warm up properly.',
    'Significant mobility prerequisites. Address restrictions before loading.',
    'Exceptional joint mobility required; train dedicated flexibility first.',
    'Elite-level mobility demands — only attempt with years of focused preparation.'
  ];
  if(typeof val !== 'number' || val < 1 || val > 5) {
    return `<span class="mob-pill">N/A</span><div class="mob-desc">Mobility rating unavailable.</div>`;
  }
  return `<span class="mob-pill ${classes[val]}">${labels[val]}</span><div class="mob-desc">${desc[val]}</div>`;
}

function strengthBlock(val){
  const labels=['','MINIMAL','LOW','MODERATE','HIGH','EXTREME'];
  const subs=['',
    'Accessible to beginners — no prior strength base required.',
    'Basic fitness level sufficient.',
    'Consistent training background needed before attempting.',
    'Significant pressing strength required as a prerequisite.',
    'Elite-level absolute strength — years of dedicated training.'
  ];
  const colors=['','#2a9d5c','#8fc05a','#f4a261','#e07b39','#e63946'];
  const pct=(val/5)*100;
  const c=colors[val]||colors[3];
  return `<div class="tech-level" style="color:${c}">${labels[val]||'—'}</div>
    <div class="tech-bar-wrap"><div class="tech-fill" style="width:${pct}%;background:${c}"></div></div>
    <div class="tech-sub">${subs[val]||''}</div>`;
}

/* ── KCAL PER REP ─────────────────────────────────────────────
   kcalPerRep: [number, number] — [kcalAt50kg, kcalAt90kg]
   Derived from MET × weight × 3.5 / 200 × avg_rep_duration_min.
   The 50–90 kg bracket covers the majority of bodyweight trainees.
   Actual burn varies with tempo, rest, and individual metabolism —
   treat as a rough order-of-magnitude estimate only.
──────────────────────────────────────────────────────────────── */
function kcalBlock(e) {
  if(Array.isArray(e.kcalPerRep) && e.kcalPerRep.length === 2) {
    const [lo, hi] = e.kcalPerRep;
    return `<strong style="margin-top:8px;display:block">EST. KCAL / REP</strong>
      <span class="kcal-value">${lo} – ${hi}</span>
      <span class="kcal-unit"> kcal</span>
      <br/><span style="font-family:var(--mono);font-size:0.5rem;color:var(--text3);letter-spacing:0.06em">REF: 50 – 90 kg bodyweight</span>`;
  }
  return `<strong style="margin-top:8px;display:block">EST. KCAL / REP</strong>
    <span class="kcal-pending">⏳ DATA PENDING</span>`;
}

/* ── PRESCRIPTION BLOCK ───────────────────────────────────── */
/*
  Derives sets/reps from the exercise's str/vol/end data.
  suit:false → "not recommended"
  eff 1–2 → light prescription
  eff 3   → moderate
  eff 4–5 → full prescription
  All ranges are general guidelines, not medical advice.
*/
function prescriptionBlock(e){
  function row(goal, obj){
    obj = obj || {};
    if(!obj || !obj.suit) return `<div class="prescription-row"><span class="presc-goal">${goal}</span><span class="presc-na">— not recommended</span></div>`;
    const presets=[null,
      {sets:'2–3', reps:'15–20', note:'light stimulus'},
      {sets:'2–3', reps:'12–15', note:''},
      {sets:'3–4', reps:'8–12',  note:''},
      {sets:'4–5', reps:'5–8',   note:''},
      {sets:'5',   reps:'3–5',   note:'near max effort'},
    ];
    const endPresets=[null,
      {sets:'2',   reps:'20–30', note:'low volume'},
      {sets:'2–3', reps:'20–30', note:''},
      {sets:'3',   reps:'15–25', note:''},
      {sets:'3–4', reps:'15–20', note:''},
      {sets:'4',   reps:'15–20', note:'high density'},
    ];
    const volPresets=[null,
      {sets:'3',   reps:'12–15', note:''},
      {sets:'3–4', reps:'10–15', note:''},
      {sets:'4',   reps:'8–12',  note:''},
      {sets:'4–5', reps:'8–12',  note:''},
      {sets:'5',   reps:'6–10',  note:'high volume'},
    ];
    const map={STRENGTH:presets, VOLUME:volPresets, ENDURANCE:endPresets};
    const p=(map[goal]||presets)[obj.eff];
    if(!p) return '';
    return `<div class="prescription-row">
      <span class="presc-goal">${goal}</span>
      <span class="presc-val">${p.sets} × ${p.reps}</span>
      ${p.note?`<span class="presc-note">${p.note}</span>`:''}
    </div>`;
  }
  return `
    <div class="prescription-section">
      <div class="tactical-label">SETS & REPS</div>
      ${row('STRENGTH', e.str)}
      ${row('VOLUME',   e.vol)}
      ${row('ENDURANCE',e.end)}
    </div>`;
}

/* ══ GENERIC LIBRARY SYSTEM
 ══════════════════════════════════ */


/* ── TABLE STRUCTURE INJECTOR ──────────────────────────────────
   Injects colgroup + thead into every library's sticky header
   and colgroup into every library's scroll table, so the HTML
   doesn't need to repeat those 10 lines per library.
─────────────────────────────────────────────────────────────── */
(function initLibraryTableStructure() {
  var CG = '<colgroup><col class="cn"/><col class="cm"/><col class="cd"/><col class="ct"/><col class="ct"/><col class="ct"/><col class="cr"/></colgroup>';
  var TH = '<thead><tr>'
    + '<th class="sortable" data-col="name">EXERCISE <span class="si">\u2195</span></th>'
    + '<th class="sortable" data-col="muscles">MUSCLES <span class="si">\u2195</span></th>'
    + '<th class="sortable sorted" data-col="diff">DIFFICULTY <span class="si">\u2191</span></th>'
    + '<th class="center sortable" data-col="str">STRENGTH <span class="si">\u2195</span></th>'
    + '<th class="center sortable" data-col="vol">VOLUME <span class="si">\u2195</span></th>'
    + '<th class="center sortable" data-col="end">ENDURANCE <span class="si">\u2195</span></th>'
    + '<th class="sortable" data-col="risk">RISK <span class="si">\u2195</span></th>'
    + '</tr></thead>';

  // All sticky IDs and their matching scroll IDs
  var LIBS = [
    {sticky:'warmup-sticky',   scroll:'warmup-scroll'},
    {sticky:'pushup-sticky',   scroll:'pushup-scroll'},
    {sticky:'planche-sticky',  scroll:'planche-scroll'},
    {sticky:'pullup-sticky',   scroll:'pullup-scroll'},
    {sticky:'squat-sticky',    scroll:'squat-scroll'},
    {sticky:'core-sticky',     scroll:'core-scroll'},
    {sticky:'dip-sticky',      scroll:'dip-scroll'},
    {sticky:'handstand-sticky',scroll:'handstand-scroll'},
    {sticky:'isometric-sticky',scroll:'isometric-scroll'},
    {sticky:'weighted-sticky', scroll:'weighted-scroll'},
    {sticky:'gym-chest-sticky',     scroll:'gym-chest-scroll'},
    {sticky:'gym-back-sticky',      scroll:'gym-back-scroll'},
    {sticky:'gym-shoulders-sticky', scroll:'gym-shoulders-scroll'},
    {sticky:'gym-legs-sticky',      scroll:'gym-legs-scroll'},
    {sticky:'gym-arms-sticky',      scroll:'gym-arms-scroll'},
    {sticky:'gym-core-sticky',      scroll:'gym-core-scroll'},
    {sticky:'cardio-running-sticky',  scroll:'cardio-running-scroll'},
    {sticky:'cardio-cycling-sticky',  scroll:'cardio-cycling-scroll'},
    {sticky:'cardio-hiit-sticky',     scroll:'cardio-hiit-scroll'},
    {sticky:'cardio-rowing-sticky',   scroll:'cardio-rowing-scroll'},
    {sticky:'cardio-recovery-sticky', scroll:'cardio-recovery-scroll'},
    {sticky:'cardio-mobility-sticky', scroll:'cardio-mobility-scroll'},
    {sticky:'stretching-sticky', scroll:'stretching-scroll'},
    {sticky:'chinup-sticky',   scroll:'chinup-scroll'},
    {sticky:'all-sticky',      scroll:'all-scroll'},
    {sticky:'combo-sticky',    scroll:'combo-scroll'},
    {sticky:'frontlever-sticky', scroll:'frontlever-scroll'},
    {sticky:'backlever-sticky', scroll:'backlever-scroll'},
    {sticky:'inline-sticky',   scroll:'inline-scroll'},
    /* ── nutrition ── */
    {sticky:'foods-sticky',    scroll:'foods-scroll'},
  ];

  function getHeaderRow(stickyId) {
    var isNutrition = stickyId === 'foods-sticky';
    if (isNutrition) {
      return '<thead><tr>'
        + '<th class="sortable" data-col="name">FOOD <span class="si">\u2195</span></th>'
        + '<th class="sortable" data-col="muscles">NUTRIENTS <span class="si">\u2195</span></th>'
        + '<th class="sortable sorted" data-col="diff">KCAL / 100g <span class="si">\u2191</span></th>'
        + '<th class="center sortable" data-col="str">PROTEIN <span class="si">\u2195</span></th>'
        + '<th class="center sortable" data-col="vol">CARBS <span class="si">\u2195</span></th>'
        + '<th class="center sortable" data-col="end">FAT <span class="si">\u2195</span></th>'
        + '<th class="sortable" data-col="risk">ALLERGEN <span class="si">\u2195</span></th>'
        + '</tr></thead>';
    }
    return TH;
  }

  function inject(stickyId, scrollId) {
    var sEl = document.getElementById(stickyId);
    if (sEl && !sEl.querySelector('table')) {
      sEl.innerHTML = '<table>' + CG + getHeaderRow(stickyId) + '</table>';
    }
    var wEl = document.getElementById(scrollId);
    if (wEl) {
      var tbl = wEl.querySelector('table');
      if (tbl && !tbl.querySelector('colgroup')) {
        var cg = document.createElement('colgroup');
        cg.innerHTML = '<col class="cn"/><col class="cm"/><col class="cd"/><col class="ct"/><col class="ct"/><col class="ct"/><col class="cr"/>';
        tbl.prepend(cg);
      }
    }
  }

  function run() {
    var seen = new Set();
    LIBS.forEach(function(lib) {
      var sk = lib.stickyId || lib.sticky;
      var sc = lib.scrollId || lib.scroll;
      var key = sk + '|' + sc;
      if (!seen.has(key)) { seen.add(key); inject(sk, sc); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();

const ALL_LIBRARY_KEYS = ['warmup','pushup','planche','pullup','chinup','frontlever','backlever','combo','squat','core','dip','handstand','isometric'];

const LIB_DATA = {
  warmup:    _warmups,
  stretching: _stretches,
  pushup:    _pushups,
  planche:   _planches,
  pullup:    [..._pullups.filter(ex => !_frontleverPullIds.has(ex.id)), ..._frontleverPullWorkouts, ..._chinupData],
  chinup:    [],
  combo:     _combos,
  weighted:  _weightedWorkouts,
  gymChest:     _gymChestWorkouts,
  gymBack:      _gymBackWorkouts,
  gymShoulders: _gymShouldersWorkouts,
  gymLegs:      _gymLegsWorkouts,
  gymArms:      _gymArmsWorkouts,
  gymCore:      _gymCoreWorkouts,
  squat:     _squats,
  core:      _coreExercises,
  dip:       _dips,
  handstand: _handstands,
  isometric: [..._isometrics.filter(ex => !_frontleverIsoIds.has(ex.id)), ..._frontleverStaticWorkouts],
  frontlever: _frontlevers,
  backlever: _backlevers,
  cardioRunning:  _cardioRunning,
  cardioCycling:  _cardioCycling,
  cardioHIIT:     _cardioHIIT,
  cardioRowing:   _cardioRowing,
  cardioRecovery: _cardioRecovery,
  cardioMobility: _cardioMobility,
  get all(){ return [..._warmups,..._pushups,..._planches,...this.pullup,...this.chinup,...this.frontlever,...this.backlever,..._combos,..._squats,..._coreExercises,..._dips,..._handstands,...this.isometric]; },
  get gymAll(){ return []; },    // entries built by getLibEntries special case
  get cardioAll(){ return []; }, // entries built by getLibEntries special case
  /* ── nutrition ── */
  foods: _foods,
};

const LIB_IDS = {
  warmup:    { body:'warmup-body',   shown:'warmup-shown',   total:'warmup-total',   unlocked:'warmup-unlocked',   locked:'warmup-locked',   empty:'warmup-empty',  search:'warmup-search',  filterRow:'warmup-filterRow',  sticky:'warmup-sticky',   scroll:'warmup-scroll'   },
  stretching:{ body:'stretching-body',shown:'stretching-shown',total:'stretching-total',unlocked:'stretching-unlocked',locked:'stretching-locked',empty:'stretching-empty',search:'stretching-search',filterRow:'stretching-filterRow',sticky:'stretching-sticky',scroll:'stretching-scroll'},
  pushup:    { body:'pushup-body',    shown:'pushup-shown',    total:'pushup-total',    unlocked:'pushup-unlocked',    locked:'pushup-locked',    empty:'pushup-empty',    search:'pushup-search',    filterRow:'pushup-filterRow',    sticky:'pushup-sticky',   scroll:'pushup-scroll'   },
  planche:   { body:'planche-body',   shown:'planche-shown',   total:'planche-total',   unlocked:'planche-unlocked',   locked:'planche-locked',   empty:'planche-empty',   search:'planche-search',   filterRow:'planche-filterRow',   sticky:'planche-sticky',  scroll:'planche-scroll'  },
  pullup:    { body:'pullup-body',   shown:'pullup-shown',    total:'pullup-total',    unlocked:'pullup-unlocked',   locked:'pullup-locked',   empty:'pullup-empty',  search:'pullup-search',  filterRow:'pullup-filterRow',  sticky:'pullup-sticky',   scroll:'pullup-scroll'   },
  chinup:    { body:'chinup-body',   shown:'chinup-shown',    total:'chinup-total',    unlocked:'chinup-unlocked',   locked:'chinup-locked',   empty:'chinup-empty',  search:'chinup-search',  filterRow:'chinup-filterRow',  sticky:'chinup-sticky',   scroll:'chinup-scroll'   },
  squat:     { body:'squat-body',    shown:'squat-shown',     total:'squat-total',     unlocked:'squat-unlocked',     locked:'squat-locked',     empty:'squat-empty',   search:'squat-search',   filterRow:'squat-filterRow',   sticky:'squat-sticky',    scroll:'squat-scroll'    },
  core:      { body:'core-body',     shown:'core-shown',      total:'core-total',      unlocked:'core-unlocked',      locked:'core-locked',      empty:'core-empty',    search:'core-search',    filterRow:'core-filterRow',    sticky:'core-sticky',     scroll:'core-scroll'     },
  dip:       { body:'dip-body',      shown:'dip-shown',       total:'dip-total',       unlocked:'dip-unlocked',       locked:'dip-locked',       empty:'dip-empty',     search:'dip-search',     filterRow:'dip-filterRow',     sticky:'dip-sticky',      scroll:'dip-scroll'      },
  handstand: { body:'handstand-body',shown:'handstand-shown', total:'handstand-total', unlocked:'handstand-unlocked', locked:'handstand-locked', empty:'handstand-empty',search:'handstand-search',filterRow:'handstand-filterRow',sticky:'handstand-sticky',scroll:'handstand-scroll'},
  isometric: { body:'isometric-body',shown:'isometric-shown', total:'isometric-total', unlocked:'isometric-unlocked', locked:'isometric-locked', empty:'isometric-empty',search:'isometric-search',filterRow:'isometric-filterRow',sticky:'isometric-sticky',scroll:'isometric-scroll'},
  frontlever:{ body:'frontlever-body',shown:'frontlever-shown', total:'frontlever-total', unlocked:'frontlever-unlocked', locked:'frontlever-locked', empty:'frontlever-empty', search:'frontlever-search', filterRow:'frontlever-filterRow', sticky:'frontlever-sticky', scroll:'frontlever-scroll'},
  backlever:{ body:'backlever-body',shown:'backlever-shown', total:'backlever-total', unlocked:'backlever-unlocked', locked:'backlever-locked', empty:'backlever-empty', search:'backlever-search', filterRow:'backlever-filterRow', sticky:'backlever-sticky', scroll:'backlever-scroll'},
  combo:     { body:'combo-body',   shown:'combo-shown',    total:'combo-total',    unlocked:'combo-unlocked',    locked:'combo-locked',    empty:'combo-empty',  search:'combo-search',  filterRow:'combo-filterRow',  sticky:'combo-sticky',   scroll:'combo-scroll'   },
  weighted:   { body:'weighted-body',shown:'weighted-shown', total:'weighted-total', unlocked:'weighted-unlocked', locked:'weighted-locked', empty:'weighted-empty',search:'weighted-search',filterRow:'weighted-filterRow',sticky:'weighted-sticky',scroll:'weighted-scroll'},
  gymChest:   { body:'gym-chest-body', shown:'gym-chest-shown', total:'gym-chest-total', unlocked:'gym-chest-unlocked', locked:'gym-chest-locked', empty:'gym-chest-empty', search:'gym-chest-search', filterRow:'gym-chest-filterRow', sticky:'gym-chest-sticky', scroll:'gym-chest-scroll' },
  gymBack:    { body:'gym-back-body',  shown:'gym-back-shown',  total:'gym-back-total',  unlocked:'gym-back-unlocked',  locked:'gym-back-locked',  empty:'gym-back-empty',  search:'gym-back-search',  filterRow:'gym-back-filterRow',  sticky:'gym-back-sticky',  scroll:'gym-back-scroll'  },
  gymShoulders:{ body:'gym-shoulders-body',shown:'gym-shoulders-shown',total:'gym-shoulders-total',unlocked:'gym-shoulders-unlocked',locked:'gym-shoulders-locked',empty:'gym-shoulders-empty',search:'gym-shoulders-search',filterRow:'gym-shoulders-filterRow',sticky:'gym-shoulders-sticky',scroll:'gym-shoulders-scroll'},
  gymLegs:    { body:'gym-legs-body', shown:'gym-legs-shown', total:'gym-legs-total', unlocked:'gym-legs-unlocked', locked:'gym-legs-locked', empty:'gym-legs-empty', search:'gym-legs-search', filterRow:'gym-legs-filterRow', sticky:'gym-legs-sticky', scroll:'gym-legs-scroll' },
  gymArms:    { body:'gym-arms-body', shown:'gym-arms-shown', total:'gym-arms-total', unlocked:'gym-arms-unlocked', locked:'gym-arms-locked', empty:'gym-arms-empty', search:'gym-arms-search', filterRow:'gym-arms-filterRow', sticky:'gym-arms-sticky', scroll:'gym-arms-scroll' },
  gymCore:    { body:'gym-core-body', shown:'gym-core-shown', total:'gym-core-total', unlocked:'gym-core-unlocked', locked:'gym-core-locked', empty:'gym-core-empty', search:'gym-core-search', filterRow:'gym-core-filterRow', sticky:'gym-core-sticky', scroll:'gym-core-scroll' },
  cardioRunning:  { body:'cardio-running-body',  shown:'cardio-running-shown',  total:'cardio-running-total',  unlocked:'cardio-running-unlocked',  locked:'cardio-running-locked',  empty:'cardio-running-empty',  search:'cardio-running-search',  filterRow:'cardio-running-filterRow',  sticky:'cardio-running-sticky',  scroll:'cardio-running-scroll'  },
  cardioCycling:  { body:'cardio-cycling-body',  shown:'cardio-cycling-shown',  total:'cardio-cycling-total',  unlocked:'cardio-cycling-unlocked',  locked:'cardio-cycling-locked',  empty:'cardio-cycling-empty',  search:'cardio-cycling-search',  filterRow:'cardio-cycling-filterRow',  sticky:'cardio-cycling-sticky',  scroll:'cardio-cycling-scroll'  },
  cardioHIIT:     { body:'cardio-hiit-body',     shown:'cardio-hiit-shown',     total:'cardio-hiit-total',     unlocked:'cardio-hiit-unlocked',     locked:'cardio-hiit-locked',     empty:'cardio-hiit-empty',     search:'cardio-hiit-search',     filterRow:'cardio-hiit-filterRow',     sticky:'cardio-hiit-sticky',     scroll:'cardio-hiit-scroll'     },
  cardioRowing:   { body:'cardio-rowing-body',   shown:'cardio-rowing-shown',   total:'cardio-rowing-total',   unlocked:'cardio-rowing-unlocked',   locked:'cardio-rowing-locked',   empty:'cardio-rowing-empty',   search:'cardio-rowing-search',   filterRow:'cardio-rowing-filterRow',   sticky:'cardio-rowing-sticky',   scroll:'cardio-rowing-scroll'   },
  cardioRecovery: { body:'cardio-recovery-body', shown:'cardio-recovery-shown', total:'cardio-recovery-total', unlocked:'cardio-recovery-unlocked', locked:'cardio-recovery-locked', empty:'cardio-recovery-empty', search:'cardio-recovery-search', filterRow:'cardio-recovery-filterRow', sticky:'cardio-recovery-sticky', scroll:'cardio-recovery-scroll' },
  cardioMobility: { body:'cardio-mobility-body', shown:'cardio-mobility-shown', total:'cardio-mobility-total', unlocked:'cardio-mobility-unlocked', locked:'cardio-mobility-locked', empty:'cardio-mobility-empty', search:'cardio-mobility-search', filterRow:'cardio-mobility-filterRow', sticky:'cardio-mobility-sticky', scroll:'cardio-mobility-scroll' },
  all:       { body:'all-body',          shown:'all-shown',          total:'all-total',          empty:'all-empty',          search:'all-search',          filterRow:'all-filterRow',          sticky:'all-sticky',          scroll:'all-scroll'          },
  gymAll:    { body:'gym-all-body',      shown:'gym-all-shown',      total:'gym-all-total',      empty:'gym-all-empty',      search:'gym-all-search',      filterRow:'gym-all-filterRow',      sticky:'gym-all-sticky',      scroll:'gym-all-scroll'      },
  cardioAll: { body:'cardio-all-body',   shown:'cardio-all-shown',   total:'cardio-all-total',   empty:'cardio-all-empty',   search:'cardio-all-search',   filterRow:'cardio-all-filterRow',   sticky:'cardio-all-sticky',   scroll:'cardio-all-scroll'   },
  /* ── nutrition ── */
  foods:     { body:'foods-body',    shown:'foods-shown',    total:'foods-total',    unlocked:'foods-logged',    locked:'foods-locked',    empty:'foods-empty',    search:'foods-search',    filterRow:'foods-quickChips',    sticky:'foods-sticky',    scroll:'foods-scroll'    },
};

const LIB_STATE = {
  warmup:    { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  stretching:{ sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  pushup:    { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  planche:   { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  pullup:    { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  chinup:    { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  squat:     { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  core:      { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  dip:       { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  handstand: { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  isometric: { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  frontlever:{ sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  backlever:{ sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  combo:     { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  weighted:  { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  gymChest:  { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  gymBack:   { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  gymShoulders:{ sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  gymLegs:   { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  gymArms:   { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  gymCore:   { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  cardioRunning:  { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  cardioCycling:  { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  cardioHIIT:     { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  cardioRowing:   { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  cardioRecovery: { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  cardioMobility: { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  all:       { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  gymAll:    { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  cardioAll: { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
  /* ── nutrition ── */
  foods:     { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
};

function isListedExercise(exercise) {
  return exercise?.listed !== false;
}

function decorateAllLibraryEntry(libKey, exercise) {
  return { ...exercise, _libKey: libKey, _uniqueKey: `${libKey}-${exercise.id}` };
}

const GYM_ALL_KEYS     = ['weighted','gymChest','gymBack','gymShoulders','gymLegs','gymArms','gymCore'];
const CARDIO_ALL_KEYS  = ['cardioRunning','cardioCycling','cardioHIIT','cardioRowing','cardioRecovery','cardioMobility'];
const COMPOSITE_LIB_KEYS = new Set(['all','gymAll','cardioAll']);

function getLibEntries(libKey) {
  const progressData = loadProgress();
  const unlockedHof = new Set(getUnlockedHofKeys());
  const canShowPantheonEntry = exercise => !exercise.pantheon || pantheonRequirementsMet(exercise, unlockedHof, progressData);

  if(libKey === 'all') {
    const standardEntries = ALL_LIBRARY_KEYS.flatMap(key => {
      const source = LIB_DATA[key];
      const entries = Array.isArray(source) ? source : (source?.data || []);
      return entries.filter(isListedExercise).filter(canShowPantheonEntry).map(entry => decorateAllLibraryEntry(key, entry));
    });
    const pantheonEntries = getUnlockedPantheonExercises()
      .filter(isListedExercise)
      .map(entry => decorateAllLibraryEntry('pantheon', entry));
    return [...standardEntries, ...pantheonEntries];
  }
  if(libKey === 'gymAll') {
    return GYM_ALL_KEYS.flatMap(key => {
      const source = LIB_DATA[key];
      const entries = Array.isArray(source) ? source : (source?.data || []);
      return entries.filter(isListedExercise).filter(canShowPantheonEntry).map(entry => decorateAllLibraryEntry(key, entry));
    });
  }
  if(libKey === 'cardioAll') {
    return CARDIO_ALL_KEYS.flatMap(key => {
      const source = LIB_DATA[key];
      const entries = Array.isArray(source) ? source : (source?.data || []);
      return entries.filter(isListedExercise).filter(canShowPantheonEntry).map(entry => decorateAllLibraryEntry(key, entry));
    });
  }
  const source = LIB_DATA[libKey];
  const entries = Array.isArray(source) ? source : (source?.data || []);
  return entries.filter(isListedExercise).filter(canShowPantheonEntry).map(entry => decorateAllLibraryEntry(libKey, entry));
}

/* ══ SHARED FUZZY SEARCH ══════════════════════════════════════
   grndNorm  — strip punctuation, lowercase, collapse spaces
   grndMatch — every whitespace-token in query must appear in haystack
   grndMatchEx — convenience wrapper for exercise entries
══════════════════════════════════════════════════════════════ */
function grndNorm(s){ return (s||'').toLowerCase().replace(/[-|_/\\]+/g,' ').replace(/\s+/g,' ').trim(); }
function grndCompact(s){ return grndNorm(s).replace(/\s+/g,''); }
function grndMatch(fields, query){
  if(!query) return true;
  const h = fields.map(grndNorm).join(' ');
  const hCompact = grndCompact(h);
  return grndNorm(query).split(' ').every(tok => {
    if(!tok) return true;
    return h.includes(tok) || hCompact.includes(tok);
  });
}
function grndMatchEx(e, query){
  return grndMatch([e.name, e.alt, ...(e.muscles||[]).map(m=>m.n), ...(e.tags||[]), e.equipment||''], query);
}

function renderLibTable(libKey) {
  const st  = LIB_STATE[libKey];
  const ids = LIB_IDS[libKey];
  const allEntries = getLibEntries(libKey);
  const totalCount = allEntries.length;
  const progressData = loadProgress();
  const unlockedCount = allEntries.reduce((sum, e) => {
    const sourceKey = COMPOSITE_LIB_KEYS.has(libKey) ? (e._libKey || libKey) : libKey;
    const key = `${sourceKey}-${e.id}`;
    return sum + (progressData[key] === 'unlocked' ? 1 : 0);
  }, 0);
  const lockedCount = totalCount - unlockedCount;
  let data  = [...allEntries];

  if(st.activeFilter !== 'all') {
    if(st.activeFilter === 'hof') data = data.filter(e => e.hof);
    else {
      const filterTags = st.activeFilter.split(',');
      data = data.filter(e =>
        filterTags.some(ft => (e.tags||[]).includes(ft)) ||
        (e.muscles||[]).some(m => grndNorm(m.n) === st.activeFilter)
      );
    }
  }
  if(st.searchTerm) {
    data = data.filter(e => grndMatchEx(e, st.searchTerm));
  }
  data.sort((a,b) => {
    let av, bv;
    if(st.sortCol==='name')        { av=a.name; bv=b.name; }
    else if(st.sortCol==='diff')   { av=a.diff; bv=b.diff; }
    else if(st.sortCol==='str')    { av=(a.str?.eff||0)+(a.str?.suit?10:0); bv=(b.str?.eff||0)+(b.str?.suit?10:0); }
    else if(st.sortCol==='vol')    { av=(a.vol?.eff||0)+(a.vol?.suit?10:0); bv=(b.vol?.eff||0)+(b.vol?.suit?10:0); }
    else if(st.sortCol==='end')    { av=(a.end?.eff||0)+(a.end?.suit?10:0); bv=(b.end?.eff||0)+(b.end?.suit?10:0); }
    else if(st.sortCol==='risk')   { av=exerciseRisk(a); bv=exerciseRisk(b); }
    else if(st.sortCol==='muscles'){ av=(a.muscles||[]).find(m=>m.p)?.n||a.muscles?.[0]?.n||''; bv=(b.muscles||[]).find(m=>m.p)?.n||b.muscles?.[0]?.n||''; }
    else                           { av=a.diff; bv=b.diff; }
    return av<bv ? -st.sortDir : av>bv ? st.sortDir : 0;
  });

  const totalEl = ids.total ? document.getElementById(ids.total) : null;
  if(totalEl) totalEl.textContent = totalCount;
  const unlockedEl = ids.unlocked ? document.getElementById(ids.unlocked) : null;
  if(unlockedEl) unlockedEl.textContent = unlockedCount;
  const lockedEl = ids.locked ? document.getElementById(ids.locked) : null;
  if(lockedEl) lockedEl.textContent = lockedCount;
  const shownEl = ids.shown ? document.getElementById(ids.shown) : null;
  if(shownEl) shownEl.textContent = data.length;
  const body  = document.getElementById(ids.body);
  const isNutritionLib = libKey === 'foods';
  const isGymLib     = libKey.startsWith('gym');
  const isCardioLib  = libKey.startsWith('cardio');
  const empty = document.getElementById(ids.empty);
  st.openRow  = null;
  if(!data.length){ body.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display = 'none';
  body.innerHTML = data.map(e => {
    const rowKey=COMPOSITE_LIB_KEYS.has(libKey)?(e._uniqueKey||`${e._libKey||libKey}-${e.id}`):`${e.id}`;
    const dc=diffColor(e.diff), dp=(e.diff/10)*100;
    const diffDisplay=Number.isInteger(e.diff)?e.diff:e.diff.toFixed(1);
    const hofBadge=e.hof?'<span class="hof-badge">HALL OF FAME</span>':'';
    const pantheonBadge=e._libKey==='pantheon'?'<span class="hof-badge" style="background:rgba(124,58,237,0.16);border-color:rgba(192,132,252,0.45);color:#f0abfc">PANTHEON</span>':'';
    const openMetaFn = isNutritionLib ? 'openNutrient' : 'openMuscle';
    const tags=(e.muscles||[]).map(m=>`<span class="mtag${m.p?' primary':''}" onclick="${openMetaFn}(event,'${m.n}')">${m.n}</span>`).join('');
    const loadLabel = isGymLib && e.load?.absolute?.label
      ? e.load.absolute.label
      : isCardioLib && e.targets?.[0]?.label
      ? e.targets[0].label
      : '';
    const displayName = loadLabel ? `${e.name} | ${loadLabel}` : e.name;
    const injFlagged = !isNutritionLib ? getInjuryFlaggedJoints(e.joints) : [];
    const isInjFlagged = injFlagged.length > 0;
    const injWarnBadge = isInjFlagged ? '<span class="inj-warn-badge">⚠ CAUTION</span>' : '';
    const detailId = `detail-${libKey}-${rowKey}`;
    const isDismissed = _injuryDismissed.has(detailId);
    const injBanner = isInjFlagged ? (() => {
      const jointNames = injFlagged.map(k => {
        const jm = (typeof JOINTS_META !== 'undefined' ? JOINTS_META : []).find(j => j.key === k);
        const label = jm ? jm.label : k;
        const val = _injJointVal((e.joints||{})[k]);
        return `${label} — ${J_LABELS[Math.min(val,5)]||''}`;
      }).join(' · ');
      return `<div class="inj-banner"><span class="inj-banner-ico">⚠</span><div><div class="inj-banner-text">This exercise loads areas you've flagged as injured.</div><div class="inj-banner-joints">${jointNames}</div></div></div>`;
    })() : '';
    return `
    <tr data-id="${e.id}" data-row-key="${rowKey}" class="${isInjFlagged?'inj-flagged':''}" onclick="toggleDetail('${libKey}','${rowKey}')">
      <td class="ex-name">${displayName}${hofBadge}${pantheonBadge}${injWarnBadge}${e.alt?`<span class="ex-alt">${e.alt}</span>`:''}</td>
      <td><div class="muscles">${tags}</div></td>
      <td><div class="diff-wrap">
        <div class="diff-bar"><div class="diff-fill" style="width:${dp}%;background:${dc}"></div></div>
        <span class="diff-num" style="color:${dc}">${diffDisplay}/10</span>
      </div></td>
      ${tCell(e.str)}${tCell(e.vol)}${tCell(e.end)}
      ${riskCell(exerciseRisk(e))}
    </tr>
    <tr class="detail-row${e.hof?' hof':''}" id="${detailId}">
      <td class="detail-cell" colspan="7">
        ${isNutritionLib ? nutritionStatFooter(e) : `${injBanner}${isInjFlagged && !isDismissed ? '<div class="inj-section-wrap"><div class="inj-section-blur">' : ''}<div class="detail-grid">
          <div class="${e.hof?'hof-desc-block':'detail-block'}">${e.hof
            ? `<strong>DESCRIPTION</strong><span class="hof-desc-text">${e.desc}</span><span class="hof-feat-tag">★ HALL OF FAME FEAT</span>`
            : `<strong>DESCRIPTION</strong><div class="detail-block-text">${e.desc}</div>`
          }</div>
          <div class="detail-block"><strong>COACHING CUES</strong><div class="detail-block-text">${e.cues}</div></div>
          <div class="detail-block"><strong>EQUIPMENT</strong><div class="detail-meta">${e.equipment}<br/><strong style="margin-top:8px;display:block">BODY POSITION</strong>${e.position}${kcalBlock(e)}</div></div>
        </div>
        <div class="tactical-section">
          <div class="tactical-label">PERFORMANCE BREAKDOWN</div>
          <div class="tactical-grid">
            <div class="detail-block" style="margin-bottom:10px">
              <strong>JOINT &amp; TENDON STRESS</strong>
              ${jointStressSummary(e.joints)}
            </div>
            <div class="detail-block" style="margin-bottom:10px">
              <strong>MOBILITY</strong>
              ${mobBlock(e.mobility)}
            </div>
            <div class="detail-block" style="margin-bottom:10px">
              <strong>STRENGTH</strong>
              ${strengthBlock(e.strength)}
            </div>
          </div>
        </div>
        ${prescriptionBlock(e)}${isInjFlagged && !isDismissed ? `</div><div class="inj-blur-overlay"><span class="inj-blur-msg">COULD HARM YOU FURTHER</span><button class="inj-got-it-btn" onclick="event.stopPropagation();dismissInjuryWarning('${detailId}')">Got it — show anyway</button></div></div>` : ''}`}
        ${e.youtube?(e.youtube==='LINK_TODO'
          ?`<div class="yt-section"><div class="yt-label">Watch the Movement</div><div class="yt-placeholder"><div class="yt-placeholder-icon">▶</div><div class="yt-placeholder-text">Video coming soon</div></div></div>`
          :`<div class="yt-section"><div class="yt-label">Watch the Movement</div><div class="yt-wrap"><iframe src="https://www.youtube.com/embed/${e.youtube}" allowfullscreen loading="lazy"></iframe></div></div>`):''}
      </td>
    </tr>`;
  }).join('');
  // Mobile card grid for nutrition libs
  if (isNutritionLib) renderNutritionCards(libKey, data);
}

function toggleDetail(libKey, rowKey) {
  const st  = LIB_STATE[libKey];
  const row = document.getElementById(`detail-${libKey}-${rowKey}`);
  if(!row) return;
  const isOpening = !row.classList.contains('open');
  if(st.openRow && st.openRow !== row) st.openRow.classList.remove('open');
  row.classList.toggle('open');
  st.openRow = row.classList.contains('open') ? row : null;
  /* Scroll detail into view at top for mobile */
  if(isOpening && row.classList.contains('open')) {
    const baseRow = document.querySelector(`tr[data-row-key="${rowKey}"]`);
    if(baseRow) {
      setTimeout(() => {
        baseRow.scrollIntoView({behavior:'smooth', block:'start'});
      }, 100);
    }
  }
}


/* ──────────────────────────────────────────────────────────────────────────
   src/library-views.js — generates the 26 standard "exercise library" views
   ──────────────────────────────────────────────────────────────────────────
   WHY: these views were ~26 near-identical 33-line HTML blocks in index.html
   (breadcrumb → hero → stats → search → filter chips → table → empty-state).
   They are now built from the GRND_LIBRARIES config below, removing ~900 lines
   of duplicated markup. Behaviour (search/filter/render) is wired by initLib()
   in src/pantheon-awakening.js off the element IDs produced here — unchanged.

   ADD / EDIT A LIBRARY:  add or change one row in GRND_LIBRARIES, done.
     v       = view id without the 'view-' prefix  (element id = 'view-'+v)
     p       = element-id prefix, derived as v without '-library'
               → builds  p-search · p-filterRow · p-sticky · p-scroll · p-body ·
                 p-empty · p-total · p-unlocked · p-locked  (or p-shown)
               also register the libKey in LIB_* in src/app-core.js so the
               table actually renders (this file only builds the shell).
     parent  = [slug,label] middle breadcrumb crumb (home is always first)
     leaf    = final breadcrumb label
     title   = <h2> text            (defaults to leaf)
     tagMain = first tagline        (defaults to DEFAULT_TAG)
     tagSub  = second tagline       (null = omit the sub line)
     ph      = search placeholder   (defaults to DEFAULT_PH)
     empty   = empty-state text     (defaults to DEFAULT_EMPTY)
     statCols= dynamic stat columns (defaults to total/unlocked/locked)
     filters = [[dataFilter,label], …]; first entry is the active "ALL" chip

   NOT templatized (left static in index.html): weighted-library (has an extra
   jb-tab-bar), foods/vitamins (nutrition), hof/pantheon (special card views).
   This file is loaded as a plain <script src> right after </main>, so the
   shells exist before initAllLibs() runs on DOMContentLoaded — order matters.
   ────────────────────────────────────────────────────────────────────────── */
(function(){
  'use strict';

  var DEFAULT_TAG   = 'Tap any exercise to expand it. Tap a muscle name to learn more about it.';
  var DEFAULT_PH    = 'Search exercises or muscles…';
  var DEFAULT_EMPTY = 'No exercises match your search.';
  var DIFF_SUB      = 'Difficulty is rated 1–10 based on technique, strength needed, mobility and joint & tendon stress.';
  var SCROLL_HINT   = '← scroll table horizontally →';

  /* One row per standard library view (see header for field reference). */
  /*
   * LIBRARY REGISTRY
   * ─────────────────────────────────────────────────────────────────────────
   * Each entry is the single source of truth for a library view.  Fields:
   *
   *   v          View id without the 'view-' prefix  (element id = 'view-'+v)
   *   libKey     Key used in LIB_DATA / getLibEntries / progress storage.
   *              Derived as v.replace('-library','') when omitted but always
   *              set explicitly here so downstream code never has to guess.
   *   section    'bodyweight' | 'gym' | 'cardio'
   *              Used to build per-section counts on home without touching
   *              a separate hardcoded list.
   *   searchable true  → included in ALL_LIBRARY_KEYS (progression tree +
   *                       inline global search on the Bodyweight hub).
   *              false → has its own search UI; excluded from cross-library
   *                       search (gym, cardio, the all-library meta-view).
   *   parent / leaf / title / tagMain / tagSub / ph / empty / statCols / filters
   *              — all control the generated HTML shell (see viewHTML below).
   *
   * ADDING A NEW LIBRARY: add one row here, register the data in app-core.js
   * LIB_DATA, and the rest (counts, search inclusion, HTML shell) is automatic.
   * ─────────────────────────────────────────────────────────────────────────
   */
  var LIBS = [
    /* ── bodyweight ───────────────────────────────────────────────────── */
    { v:'warmup-library',     libKey:'warmup',     section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'WARM UPS',
      tagSub:'Dynamic mobility and activation drills to prepare your body for training.',
      filters:[['all','ALL'],['hips','HIPS'],['shoulders','SHOULDERS'],['thoracic','THORACIC'],['full-body','FULL BODY'],['cardio','CARDIO']] },

    { v:'stretching-library', libKey:'stretching', section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'STRETCHING',
      tagMain:'Tap any stretch to expand it. Tap a muscle name to learn more about it.',
      tagSub:'Post-workout and recovery stretches for every major muscle group.',
      ph:'Search stretches or muscles…', empty:'No stretches match your search.',
      filters:[['all','ALL'],['neck','NECK'],['shoulders','SHOULDERS'],['chest','CHEST'],['back','BACK'],['hips','HIPS'],['hamstrings','HAMSTRINGS'],['quads','QUADS'],['calves','CALVES']] },
    { v:'pushup-library',     libKey:'pushup',     section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'PUSH-UP LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['chest','CHEST'],['shoulders','SHOULDERS'],['triceps','TRICEPS'],['core','CORE'],['serratus','SERRATUS'],['hof','★ HALL OF FAME']] },
    { v:'planche-library',    libKey:'planche',    section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'PLANCHE LIBRARY', title:'PLANCHE LIBRARY',
      tagMain:'Straight-arm horizontal pressing — the planche and maltese push-up progressions. Tap any exercise to expand it.',
      tagSub:'From the feet-down pseudo planche through tuck, straddle and the full planche to the maltese. Hall of Fame begins at the full planche.',
      ph:'Search planche or maltese variants…', empty:'No planche variants match your search.',
      filters:[['all','ALL'],['shoulders','SHOULDERS'],['triceps','TRICEPS'],['chest','CHEST'],['core','CORE'],['wrists','WRISTS'],['hof','★ HALL OF FAME']] },

    { v:'pullup-library',     libKey:'pullup',     section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'PULL-UP LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['back','BACK'],['biceps','BICEPS'],['shoulders','SHOULDERS'],['core','CORE'],['hof','★ HALL OF FAME']] },

      { v:'squat-library',      libKey:'squat',      section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'SQUAT LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['quads','QUADS'],['glutes','GLUTES'],['hamstrings','HAMSTRINGS'],['core','CORE'],['adductors','ADDUCTORS'],['calves','CALVES']] },

    { v:'core-library',       libKey:'core',       section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'CORE LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['abs','ABS'],['obliques','OBLIQUES'],['lower back','LOWER BACK']] },

    { v:'dip-library',        libKey:'dip',        section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'DIP LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['triceps','TRICEPS'],['chest','CHEST'],['shoulders','SHOULDERS'],['core','CORE'],['back','BACK']] },

    { v:'handstand-library',  libKey:'handstand',  section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'HANDSTAND LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['shoulders','SHOULDERS'],['triceps','TRICEPS'],['core','CORE'],['wrists','WRISTS']] },
    { v:'isometric-library',  libKey:'isometric',  section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'HOLDS LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['shoulders','SHOULDERS'],['core','CORE'],['back','BACK'],['hof','★ HALL OF FAME']] },
    { v:'frontlever-library', libKey:'frontlever', section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'FRONT LEVER LIBRARY',
      tagMain:'A dedicated view for front lever holds, pull-up progressions, and elite lever work.',
      tagSub:'From tuck to full front lever — holds, pull progressions, and one-arm variants across bar, rings, and parallettes.',
      ph:'Search front lever exercises or muscles…',
      filters:[['all','ALL'],['back','BACK'],['core','CORE'],['shoulders','SHOULDERS'],['bar','BAR'],['rings','RINGS'],['parallettes','PARALLETTES'],['hof','★ HALL OF FAME']] },
    { v:'backlever-library',  libKey:'backlever',  section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'BACK LEVER LIBRARY',
      tagMain:'A dedicated view for back lever holds, shoulder extension progressions, and inverted strength work.',
      tagSub:'From tuck back lever to full back lever — holds and progressions across bar, rings, and parallettes.',
      ph:'Search back lever exercises or muscles…',
      filters:[['all','ALL'],['back','BACK'],['core','CORE'],['shoulders','SHOULDERS'],['bar','BAR'],['rings','RINGS'],['parallettes','PARALLETTES'],['hof','★ HALL OF FAME']] },

    { v:'combo-library',      libKey:'combo',      section:'bodyweight', searchable:true,
      parent:['bodyweight','BODYWEIGHT'], leaf:'COMBOS',
      tagMain:'High-skill combinations built around muscle-ups, transitions, and dynamic sequence work.',
      tagSub:'Requires a strong base in both pushing and pulling — approach these only after mastering the foundational libraries.',
      filters:[['all','ALL'],['pull','PULL'],['push','PUSH'],['core','CORE'],['bar','BAR'],['rings','RINGS']] },
    { v:'all-library',        libKey:'all',        section:'bodyweight', searchable:false,
      parent:['bodyweight','BODYWEIGHT'], leaf:'SEARCH', title:'ALL EXERCISES',
      tagMain:'Searching all libraries. Tap any exercise to expand it.', tagSub:null,
      statCols:['total','shown'],
      filters:[['all','ALL'],['chest','CHEST'],['shoulders','SHOULDERS'],['triceps','TRICEPS'],['back','BACK'],['core','CORE'],['quads','QUADS'],['glutes','GLUTES'],['hof','★ HALL OF FAME']] },
    { v:'gym-all-library',    libKey:'gymAll',     section:'gym',        searchable:false,
      parent:['gym','GYM'], leaf:'SEARCH', title:'ALL GYM EXERCISES',
      tagMain:'Searching all gym libraries. Tap any exercise to expand it.', tagSub:null,
      statCols:['total','shown'],
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['cable','CABLE'],['compound','COMPOUND'],['isolation','ISOLATION'],['chest','CHEST'],['back','BACK'],['legs','LEGS']] },
    { v:'cardio-all-library', libKey:'cardioAll',  section:'cardio',     searchable:false,
      parent:['cardio','CARDIO'], leaf:'SEARCH', title:'ALL CARDIO EXERCISES',
      tagMain:'Searching all cardio libraries. Tap any exercise to expand it.', tagSub:null,
      statCols:['total','shown'],
      filters:[['all','ALL'],['beginner','BEGINNER'],['intermediate','INTERMEDIATE'],['advanced','ADVANCED'],['endurance','ENDURANCE'],['speed','SPEED'],['low-impact','LOW IMPACT']] },

    /* ── gym ───────────────────────────────────────────────────────────── */
    { v:'gym-chest-library',     libKey:'gymChest',     section:'gym', searchable:false,
      parent:['gym','GYM'], leaf:'CHEST',
      tagSub:'Pressing and fly movements targeting the pectoralis major and supporting muscles.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['cable','CABLE'],['compound','COMPOUND'],['isolation','ISOLATION']] },
    { v:'gym-back-library',      libKey:'gymBack',      section:'gym', searchable:false,
      parent:['gym','GYM'], leaf:'BACK',
      tagSub:'Pulling and hinge movements targeting the lats, traps, rhomboids, and erectors.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['cable','CABLE'],['row','ROW'],['hinge','HINGE']] },
    { v:'gym-shoulders-library', libKey:'gymShoulders', section:'gym', searchable:false,
      parent:['gym','GYM'], leaf:'SHOULDERS',
      tagSub:'Overhead pressing and lateral movements for all three deltoid heads and the traps.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['compound','COMPOUND'],['isolation','ISOLATION'],['lateral','LATERAL']] },
    { v:'gym-legs-library',      libKey:'gymLegs',      section:'gym', searchable:false,
      parent:['gym','GYM'], leaf:'LEGS',
      tagSub:'Squat, hinge, and isolation movements for quads, glutes, hamstrings, and calves.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['machines','MACHINES'],['compound','COMPOUND'],['glutes','GLUTES'],['hamstrings','HAMSTRINGS']] },
    { v:'gym-arms-library',      libKey:'gymArms',      section:'gym', searchable:false,
      parent:['gym','GYM'], leaf:'ARMS',
      tagSub:'Curl and extension movements isolating the biceps, triceps, and forearms.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['cable','CABLE'],['biceps','BICEPS'],['triceps','TRICEPS']] },
    { v:'gym-core-library',      libKey:'gymCore',      section:'gym', searchable:false,
      parent:['gym','GYM'], leaf:'CORE',
      tagSub:'Weighted and anti-movement core exercises for the abs, obliques, and lower back.',
      filters:[['all','ALL'],['cable','CABLE'],['weighted','WEIGHTED'],['bodyweight','BODYWEIGHT'],['abs','ABS'],['obliques','OBLIQUES']] },

    /* ── cardio ────────────────────────────────────────────────────────── */
    { v:'cardio-running-library',  libKey:'cardioRunning',  section:'cardio', searchable:false,
      parent:['cardio','CARDIO'], leaf:'RUNNING',
      tagSub:'Tempo, interval, and endurance runs from easy aerobic base to VO2max efforts.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['intermediate','INTERMEDIATE'],['advanced','ADVANCED'],['endurance','ENDURANCE'],['speed','SPEED']] },
    { v:'cardio-cycling-library',  libKey:'cardioCycling',  section:'cardio', searchable:false,
      parent:['cardio','CARDIO'], leaf:'CYCLING',
      tagSub:'Steady-state and interval cycling — full cardiovascular development with zero impact.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['intermediate','INTERMEDIATE'],['advanced','ADVANCED'],['low-impact','LOW IMPACT'],['speed','SPEED']] },
    { v:'cardio-hiit-library',     libKey:'cardioHIIT',     section:'cardio', searchable:false,
      parent:['cardio','CARDIO'], leaf:'HIIT',
      tagSub:'High-intensity intervals — maximum cardiovascular and metabolic stimulus in minimum time.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['intermediate','INTERMEDIATE'],['no-equipment','NO EQUIPMENT'],['plyometric','PLYOMETRIC'],['kettlebell','KETTLEBELL']] },
    { v:'cardio-rowing-library',   libKey:'cardioRowing',   section:'cardio', searchable:false,
      parent:['cardio','CARDIO'], leaf:'ROWING',
      tagSub:'Full-body aerobic and anaerobic training — 86% muscle engagement with zero impact.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['intermediate','INTERMEDIATE'],['advanced','ADVANCED'],['full-body','FULL BODY'],['low-impact','LOW IMPACT']] },
    { v:'cardio-recovery-library', libKey:'cardioRecovery', section:'cardio', searchable:false,
      parent:['cardio','CARDIO'], leaf:'RECOVERY',
      tagSub:'Low-impact movement and active rest — accelerate recovery without adding training load.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['low-impact','LOW IMPACT'],['daily','DAILY'],['active-rest','ACTIVE REST']] },
    { v:'cardio-mobility-library', libKey:'cardioMobility', section:'cardio', searchable:false,
      parent:['cardio','CARDIO'], leaf:'MOBILITY',
      tagSub:'Joint prep and range of motion — the foundation that makes every other movement better.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['hip','HIP'],['daily','DAILY'],['warm-up','WARM-UP'],['desk-worker','DESK WORKER']] }
  ];

  /* Expose as window.GRND_LIBRARIES — single source of truth consumed by:
     - app-core.js  → ALL_LIBRARY_KEYS (progression tree + search pool)
     - home-init.js → LIB_COUNT_KEYS, bodyweightKeys, gymKeys, cardioKeys
     - home-init.js → renderInlineSearch exclusion list
     Adding a new library: add one row above. Everything else is automatic. */
  window.GRND_LIBRARIES = LIBS;

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function statsHTML(p, cols){
    var html = (cols || ['total','unlocked','locked']).map(function(c){
      return '<div class="lib-stat"><strong id="'+p+'-'+c+'">—</strong>'+c+'</div>';
    }).join('');
    return html + '<div class="lib-stat"><strong>1–10</strong>difficulty</div>';
  }

  function viewHTML(L){
    var p = L.v.replace('-library','');
    var title   = L.title   || L.leaf;
    var tagMain = L.tagMain || DEFAULT_TAG;
    var ph      = L.ph      || DEFAULT_PH;
    var empty   = L.empty   || DEFAULT_EMPTY;
    var subLine = (L.tagSub == null) ? '' : '<div class="lib-tagline sub">'+esc(L.tagSub)+'</div>';
    var chips = L.filters.map(function(f, i){
      return '<button class="filter-chip'+(i===0?' on':'')+'" data-filter="'+f[0]+'">'+esc(f[1])+'</button>';
    }).join('');
    return ''+
      '<div class="view" id="view-'+L.v+'">'+
        '<div class="breadcrumb">'+
          '<span class="crumb" onclick="goTo(\'home\')">HOME</span><span class="sep">/</span>'+
          '<span class="crumb" onclick="goTo(\''+L.parent[0]+'\')">'+esc(L.parent[1])+'</span><span class="sep">/</span>'+
          '<span>'+esc(L.leaf)+'</span>'+
        '</div>'+
        '<div class="lib-hero">'+
          '<h2>'+esc(title)+'</h2>'+
          '<div class="lib-tagline">'+esc(tagMain)+'</div>'+
          subLine+
          '<div class="lib-stats">'+statsHTML(p, L.statCols)+'</div>'+
        '</div>'+
        '<div class="search-bar"><input class="search-input" id="'+p+'-search" type="text" placeholder="'+esc(ph)+'" /></div>'+
        '<div class="filter-row-wrap"><div class="filter-row" id="'+p+'-filterRow">'+chips+'</div></div>'+
        '<div class="sticky-header" id="'+p+'-sticky"></div>'+
        '<div class="scroll-hint">'+SCROLL_HINT+'</div>'+
        '<div class="table-wrap" id="'+p+'-scroll"><table><tbody id="'+p+'-body"></tbody></table></div>'+
        '<div class="empty-state" id="'+p+'-empty" style="display:none"><span class="empty-icon">🔍</span>'+esc(empty)+'</div>'+
      '</div>';
  }

  function render(){
    var main = document.querySelector('main');
    if(!main) return;
    var tmp = document.createElement('div');
    tmp.innerHTML = LIBS.map(viewHTML).join('');
    while(tmp.firstElementChild) main.appendChild(tmp.firstElementChild);
  }

  render();
})();


/* ══ MUSCLE MODAL ════════════════════════════════════════════════════
   Extracted from index.html (was mislabeled "MUSCLE MODAL" but that
   header used to span 940+ extra lines that are actually the Custom
   Programs builder — that code was left in index.html, not moved here).

   Opens the muscle-info popup from exercise tags and lets it hand off
   to the full anatomy view.

     openMuscle(event, name)      – populate + open #muscleOverlay
     openAnatomyView(event)       – close modal, route to anatomy.js,
                                     select the muscle there
     _muscleOutsideClick(e)       – click-outside-to-close listener,
                                     attached/removed by openMuscle/closeModal

   Depends on globals defined elsewhere:
     MUSCLES, MUSCLE_MODAL_ALIASES, MUSCLE_ANATOMY_ALIASES  (anatomy.js)
     closeModal()                                            (index.html)
     goTo(), window._anatomySelectMuscle()        (router.js / anatomy.js)
     persistCustomProgramState()           (index.html, typeof-guarded)

   DOM ids used: mName, mSci, mDesc, mFunc, mTags, mAnatomyBtn,
   muscleOverlay, muscleModal, customProgramExerciseOverlay,
   customProgramOverlay.

   Load anywhere before the modal can be clicked (defines functions only,
   nothing runs at parse time) — placed where the old inline block was.
════════════════════════════════════════════════════════════════════ */

function openMuscle(event, name){
  event.stopPropagation();
  // Canonical alias maps are defined in anatomy.js (MUSCLE_MODAL_ALIASES /
  // MUSCLE_ANATOMY_ALIASES). anatomy.js must load before muscle-modal.js can
  // be used, so MUSCLES is also always defined at this point.
  const modalAliases  = typeof MUSCLE_MODAL_ALIASES   !== 'undefined' ? MUSCLE_MODAL_ALIASES   : {};
  const engineAliases = typeof MUSCLE_ANATOMY_ALIASES !== 'undefined' ? MUSCLE_ANATOMY_ALIASES : {};
  const key = modalAliases[name] || name;
  // Try exercise-context overlay first, then fall back to the richer anatomy viewer data
  let d = MUSCLES[key];
  if(!d && typeof window.ANATOMY_MUSCLES !== 'undefined') {
    const viewerKey = engineAliases[name] || engineAliases[key] || key.toLowerCase();
    const vd = window.ANATOMY_MUSCLES[viewerKey];
    if(vd) {
      const color = (typeof MUSCLE_COLORS !== 'undefined' ? MUSCLE_COLORS[viewerKey] : '') || '';
      d = Object.assign({}, vd, {color});
    }
  }
  if(!d) return;
  document.getElementById('mName').textContent=name;
  document.getElementById('mSci').textContent=d.sci;
  document.getElementById('mDesc').textContent=d.desc;
  document.getElementById('mFunc').textContent=d.func;

  document.getElementById('mTags').innerHTML=d.tags.map(t=>`<span class="modal-tag ${d.color||''}">${t}</span>`).join('');
  const btn = document.getElementById('mAnatomyBtn');
  if(btn) btn.dataset.muscleKey = engineAliases[name] || engineAliases[key] || key.toLowerCase();
  document.getElementById('muscleOverlay').classList.add('open');
  // If opened from inside the exercise assignment popup, raise z-index so
  // muscle panel sits above it. closeModal() resets this on close.
  const exerciseOverlay = document.getElementById('customProgramExerciseOverlay');
  if(exerciseOverlay?.classList.contains('open')){
    document.getElementById('muscleOverlay').style.zIndex = '10000';
  }
  document.body.style.overflow='hidden';
  // Dismiss on any click outside the modal panel (covers all viewport areas)
  document.addEventListener('click', _muscleOutsideClick);
}
function openAnatomyView(event) {
  if(event) event.stopPropagation();
  const btn = event ? event.currentTarget : document.getElementById('mAnatomyBtn');
  if(!btn) return;
  const key = btn.dataset.muscleKey;
  // If coming from inside the custom program flow, flag so "back to program"
  // button appears on the anatomy view and we can restore the right modal.
  const exercisePopupOpen = document.getElementById('customProgramExerciseOverlay')?.classList.contains('open');
  const programBuilderOpen = document.getElementById('customProgramOverlay')?.classList.contains('open');
  if(exercisePopupOpen || programBuilderOpen){
    window._customProgramOverlayHiddenForLibrary = true;
    window._anatomyReturnToExercisePopup = exercisePopupOpen;
    if(typeof persistCustomProgramState === 'function') persistCustomProgramState(window._customProgramState);
  }
  closeModal();
  if(typeof goTo === 'function') goTo('anatomy');
  if(key) setTimeout(function() {
    if(typeof window._anatomySelectMuscle === 'function')
      window._anatomySelectMuscle(key);
  }, 160);
}
function _muscleOutsideClick(e){
  if(!document.getElementById('muscleModal').contains(e.target)) closeModal();
}



/* ──────────────────────────────────────────────────────────────
   src/modals.js — extracted from index.html (token-efficiency split)
   Modals & overlays: muscle/progression-tree overlays, custom-program builder, closeModal().
   Loaded as a plain (non-defer) <script src> in index.html at the
   same position it previously occupied inline — load order matters.
────────────────────────────────────────────────────────────── */
function overlayClick(event){ if(event.target !== event.currentTarget) return; closeModal(); }
const CUSTOM_PROGRAM_SAVE_KEY = 'grnd_custom_program_state';
const CUSTOM_PROGRAMS_KEY = 'grnd_custom_programs';

function closeModal(){
  const treeInfoOverlay = document.getElementById('treeInfoOverlay');
  if(treeInfoOverlay?.classList.contains('open')){
    treeInfoOverlay.classList.remove('open');
    document.body.style.overflow = '';
    return;
  }
  const muscleOverlay = document.getElementById('muscleOverlay');
  const muscleOpen = muscleOverlay?.classList.contains('open');
  if(muscleOpen){
    muscleOverlay.classList.remove('open');
    muscleOverlay.style.zIndex = '';
    if(typeof window._muscleOverlayCloseCallback === 'function'){
      window._muscleOverlayCloseCallback();
      window._muscleOverlayCloseCallback = null;
    }
    document.removeEventListener('click', _muscleOutsideClick);
    const anyOpen = ['customProgramExerciseOverlay','customProgramSaveOverlay','customProgramDeleteConfirmOverlay','customProgramOverlay']
      .some(id => document.getElementById(id)?.classList.contains('open'));
    if(!anyOpen) document.body.style.overflow = '';
    return;
  }
  document.getElementById('nutrientOverlay')?.classList.remove('open');
  const exerciseOpen = document.getElementById('customProgramExerciseOverlay')?.classList.contains('open');
  const saveOpen = document.getElementById('customProgramSaveOverlay')?.classList.contains('open');
  const deleteOpen = document.getElementById('customProgramDeleteConfirmOverlay')?.classList.contains('open');
  if(exerciseOpen){ document.getElementById('customProgramExerciseOverlay').classList.remove('open'); return; }
  if(saveOpen){ document.getElementById('customProgramSaveOverlay').classList.remove('open'); return; }
  if(deleteOpen){ document.getElementById('customProgramDeleteConfirmOverlay').classList.remove('open'); return; }
  document.getElementById('customProgramOverlay')?.classList.remove('open');
  document.body.style.overflow='';
  document.removeEventListener('click', _muscleOutsideClick);
}

function loadCustomProgramState(){
  try {
    const raw = localStorage.getItem(CUSTOM_PROGRAM_SAVE_KEY);
    if(!raw) return null;
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : null;
  } catch (e) {
    return null;
  }
}

function persistCustomProgramState(state){
  if(!state || typeof state !== 'object') return;
  try {
    setStorageValue(CUSTOM_PROGRAM_SAVE_KEY, JSON.stringify({
      selectedDay: state.selectedDay || null,
      previewMode: state.previewMode || null,
      dayModes: state.dayModes || {},
      assignedExercises: state.assignedExercises || {},
      savedAt: Date.now()
    }));
  } catch (e) {}
}

function loadSavedCustomPrograms(){
  try {
    const raw = localStorage.getItem(CUSTOM_PROGRAMS_KEY);
    if(!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function persistSavedCustomPrograms(programs){
  if(!Array.isArray(programs)) return;
  try { localStorage.setItem(CUSTOM_PROGRAMS_KEY, JSON.stringify(programs)); } catch(e) {}
}

function removeSavedCustomProgram(programId){
  if(!programId) return;
  const saved = loadSavedCustomPrograms().filter(prog => prog.id !== programId);
  persistSavedCustomPrograms(saved);
  const index = PROGRAMS.findIndex(p => p.id === programId);
  if(index !== -1) PROGRAMS.splice(index, 1);
}

function deleteCustomProgram(programId){
  if(!programId) return;
  const doDelete = function() {
    const prog = PROGRAMS.find(p => p.id === programId);
    const isPremade = prog && prog.tag !== 'custom';
    if(isPremade) {
      try {
        const deleted = JSON.parse(localStorage.getItem('grnd_deleted_premade') || '[]');
        if(!deleted.includes(programId)) { deleted.push(programId); localStorage.setItem('grnd_deleted_premade', JSON.stringify(deleted)); }
      } catch(e) {}
      const saved = loadSavedCustomPrograms().filter(p => p.id !== programId);
      persistSavedCustomPrograms(saved);
    } else {
      removeSavedCustomProgram(programId);
    }
    const idx = PROGRAMS.findIndex(p => p.id === programId);
    if(idx !== -1) PROGRAMS.splice(idx, 1);
    if(typeof renderProgramsGrid === 'function') renderProgramsGrid();
    window.updateHomeProgramsCount?.();
    goTo('programs');
  };
  if(typeof window.grndConfirm === 'function') {
    window.grndConfirm('Delete this program? This cannot be undone.', doDelete, { okText:'DELETE', danger:true });
  } else if(confirm('Delete this program? This cannot be undone.')) {
    doDelete();
  }
}

function getCustomProgramStateFromProgram(program){
  if(!program || !program.weeks_data || !Array.isArray(program.weeks_data)) return null;
  const dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const state = { selectedDay:null, previewMode:null, dayModes:{}, assignedExercises:{} };

  // Use last week for premades (most complete set of exercises)
  const weekData = program.weeks_data[program.weeks_data.length - 1] || program.weeks_data[0];
  const sessions = weekData?.sessions || [];

  // Check if sessions are already day-labeled (custom program format)
  const isDayLabeled = sessions.length > 0 && dayNames.includes((sessions[0]?.label || '').split('—')[0].trim());

  if(isDayLabeled) {
    sessions.forEach((sess, index) => {
      const label = String(sess.label || '').trim();
      const day = label.split('—')[0].trim() || dayNames[index] || `Day ${index+1}`;
      const isRest = /rest/i.test(label) || !(Array.isArray(sess.exercises) && sess.exercises.length);
      if(isRest) {
        state.dayModes[day] = 'rest';
        state.assignedExercises[day] = [];
      } else {
        state.dayModes[day] = 'workout';
        state.assignedExercises[day] = (sess.exercises || []).map(ex => ({
          name: ex.name || 'Unnamed exercise',
          meta: ex.note || '',
          sets: ex.sets || '3',
          reps: ex.reps || ''
        }));
      }
      if(index === 0) { state.selectedDay = day; state.previewMode = isRest ? 'rest' : 'workout'; }
    });
  } else {
    // Premade program — distribute sessions across days based on frequency
    const freqMatch = (program.freq || '').match(/(\d+)/);
    const daysPerWeek = Math.min(freqMatch ? parseInt(freqMatch[1]) : 3, 7);
    const PATTERNS = {
      1: ['Monday'],
      2: ['Monday','Thursday'],
      3: ['Monday','Wednesday','Friday'],
      4: ['Monday','Tuesday','Thursday','Friday'],
      5: ['Monday','Tuesday','Wednesday','Friday','Saturday'],
      6: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      7: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    };
    const workoutDays = PATTERNS[daysPerWeek] || PATTERNS[3];
    const restDays = dayNames.filter(d => !workoutDays.includes(d));
    const workoutSessions = sessions.filter(s => Array.isArray(s.exercises) && s.exercises.length > 0);
    const sessPool = workoutSessions.length ? workoutSessions : sessions;

    workoutDays.forEach((day, i) => {
      const sess = sessPool[i % sessPool.length] || {};
      state.dayModes[day] = 'workout';
      state.assignedExercises[day] = (sess.exercises || []).map(ex => ({
        name: ex.name || 'Unnamed exercise',
        meta: ex.note || '',
        sets: ex.sets || '3',
        reps: ex.reps || ''
      }));
    });
    restDays.forEach(day => { state.dayModes[day] = 'rest'; state.assignedExercises[day] = []; });
    state.selectedDay = workoutDays[0] || 'Monday';
    state.previewMode = 'workout';
  }
  return state;
}

function editCustomProgram(programId){
  if(!programId) return;
  const program = PROGRAMS.find(p => p.id === programId);
  if(!program) return;
  const state = getCustomProgramStateFromProgram(program);
  if(!state) return;
  window._customProgramState = state;
  window._customProgramEditProgramId = programId;
  openCustomProgram();
}

function initCustomPrograms(){
  if(typeof PROGRAMS === 'undefined' || !Array.isArray(PROGRAMS)) return;
  // Remove deleted premade programs
  try {
    const deleted = new Set(JSON.parse(localStorage.getItem('grnd_deleted_premade') || '[]'));
    if(deleted.size) {
      for(let i = PROGRAMS.length - 1; i >= 0; i--) {
        if(deleted.has(PROGRAMS[i].id)) PROGRAMS.splice(i, 1);
      }
    }
  } catch(e) {}
  const saved = loadSavedCustomPrograms();
  if(!saved.length) return;
  const existingIds = new Set(PROGRAMS.map(p => p.id));
  saved.forEach(prog => {
    if(!prog || !prog.id) return;
    if(existingIds.has(prog.id)) {
      // Replace premade with saved edited version
      const idx = PROGRAMS.findIndex(p => p.id === prog.id);
      if(idx !== -1) PROGRAMS[idx] = prog;
    } else {
      PROGRAMS.push(prog);
      existingIds.add(prog.id);
    }
  });
}

function slugifyProgramName(name){
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'custom-program';
}

function generateCustomProgramId(name){
  const base = slugifyProgramName(name);
  const existingIds = new Set(PROGRAMS.map(p => p.id));
  let id = base;
  let suffix = 1;
  while(existingIds.has(id)){
    id = `${base}-${suffix++}`;
  }
  return id;
}

function isProgramNameTaken(name, ignoreProgramId){
  const normalized = String(name || '').trim().toLowerCase();
  if(!normalized) return false;
  return PROGRAMS.some(p => {
    if(ignoreProgramId && p.id === ignoreProgramId) return false;
    return String(p.name || '').trim().toLowerCase() === normalized;
  });
}

function validateCustomProgramName(name, ignoreProgramId){
  const trimmed = String(name || '').trim();
  if(!trimmed) return 'Enter a workout name.';
  if(isProgramNameTaken(trimmed, ignoreProgramId)) return 'Name already exists. Choose another.';
  return null;
}

function promptSaveCustomProgram(){
  if(!window._customProgramState || !hasCustomProgramAssignments(window._customProgramState)) return;
  const overlay = document.getElementById('customProgramSaveOverlay');
  if(!overlay) return;
  const nameInput = document.getElementById('customProgramSaveInput');
  const descInput = document.getElementById('customProgramSaveDesc');
  const errorEl = document.getElementById('customProgramSaveError');
  document.getElementById('customProgramSaveError').textContent = '';
  if(window._customProgramEditProgramId) {
    const program = PROGRAMS.find(p => p.id === window._customProgramEditProgramId);
    if(program) {
      nameInput.value = program.name || '';
      descInput.value = program.desc || '';
    } else {
      nameInput.value = '';
      descInput.value = '';
    }
  } else {
    nameInput.value = '';
    descInput.value = '';
  }
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  nameInput.focus();
}

function buildProgramObjectFromCustomState(state, name, desc){
  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const sessions = [];
  days.forEach(day => {
    const mode = state.dayModes?.[day] || null;
    const assigned = (state.assignedExercises?.[day]) || [];
    if(!mode && !assigned.length) return;
    const exercises = assigned.map(item => ({
      name: item.name || 'Unnamed exercise',
      sets: item.sets || '3',
      reps: item.reps || '',
      note: item.meta || ''
    }));
    sessions.push({
      label: mode === 'rest' ? `${day} — Rest` : `${day} — Workout`,
      exercises
    });
  });
  if(!sessions.length) return null;
  const workoutDays = sessions.filter(sess => Array.isArray(sess.exercises) && sess.exercises.length).length;
  return {
    id: generateCustomProgramId(name),
    name: name.trim(),
    tag: 'custom',
    tagLabel: 'Custom',
    weeks: 1,
    freq: workoutDays ? `${workoutDays}×/wk` : 'Custom',
    progression: 'Custom',
    diff: 'beg',
    diffLabel: 'Custom',
    soon: false,
    desc: desc.trim() || 'Created in the custom program builder.',
    weeks_data: [{
      title: 'Custom Week',
      phase: 'Personalized workout schedule',
      note: desc.trim() || '',
      sessions
    }]
  };
}

function confirmCustomProgramSave(){
  const nameInput = document.getElementById('customProgramSaveInput');
  const descInput = document.getElementById('customProgramSaveDesc');
  const errorEl = document.getElementById('customProgramSaveError');
  if(!nameInput || !errorEl) return;
  const name = String(nameInput.value || '').trim();
  const desc = String(descInput?.value || '').trim();
  const validationError = validateCustomProgramName(name, window._customProgramEditProgramId);
  if(validationError){
    errorEl.textContent = validationError;
    nameInput.focus();
    return;
  }
  const program = buildProgramObjectFromCustomState(window._customProgramState, name, desc);
  if(!program){
    errorEl.textContent = 'Unable to create workout.';
    return;
  }
  const savedPrograms = loadSavedCustomPrograms();
  if(window._customProgramEditProgramId) {
    program.id = window._customProgramEditProgramId;
    const savedIndex = savedPrograms.findIndex(p => p.id === window._customProgramEditProgramId);
    if(savedIndex !== -1) savedPrograms[savedIndex] = program;
    else savedPrograms.push(program);
    const progIndex = PROGRAMS.findIndex(p => p.id === window._customProgramEditProgramId);
    if(progIndex !== -1) PROGRAMS[progIndex] = program;
    else PROGRAMS.push(program);
    window._customProgramEditProgramId = null;
  } else {
    savedPrograms.push(program);
    if(Array.isArray(PROGRAMS)) PROGRAMS.push(program);
  }
  persistSavedCustomPrograms(savedPrograms);
  if(typeof renderProgramsGrid === 'function') renderProgramsGrid();
  window.updateHomeProgramsCount?.();
  closeModal();
  if(typeof openProgram === 'function') openProgram(program.id);
}

function hasCustomProgramAssignments(state){
  if(!state || !state.assignedExercises) return false;
  return Object.values(state.assignedExercises).some(arr => Array.isArray(arr) && arr.length > 0);
}

function refreshCustomProgramSaveButton(){
  const button = document.getElementById('customProgramSaveBtn');
  if(!button) return;
  button.style.display = hasCustomProgramAssignments(window._customProgramState) ? '' : 'none';
}

function saveCustomProgram(){
  if(!window._customProgramState) return;
  if(!hasCustomProgramAssignments(window._customProgramState)) return;
  persistCustomProgramState(window._customProgramState);
  const button = document.getElementById('customProgramSaveBtn');
  if(button){
    const original = button.textContent;
    button.textContent = '✓ SAVED';
    button.classList.add('saved');
    setTimeout(() => {
      button.textContent = original;
      button.classList.remove('saved');
    }, 1200);
  }
}

function selectProgramDay(event){
  const card = event.currentTarget || event.target;
  const day = card.dataset.day;
  if(!day) return;
  const cards = document.querySelectorAll('.program-day-card');
  cards.forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  window._customProgramState = window._customProgramState || { selectedDay: null, previewMode: null, dayModes: {}, assignedExercises: {} };
  if(!window._customProgramState.dayModes) window._customProgramState.dayModes = {};
  if(!window._customProgramState.assignedExercises) window._customProgramState.assignedExercises = {};
  window._customProgramState.selectedDay = day;
  const storedMode = window._customProgramState.dayModes[day] || null;
  window._customProgramState.previewMode = storedMode;
  window._customProgramAssignedPage = 0;
  const buttons = document.querySelectorAll('.preview-option');
  buttons.forEach(b => b.classList.toggle('preview-option-active', b.dataset.preview === storedMode));
  renderCustomProgramAssignedList();
  updateCustomProgramPreview();
}
function setProgramPreviewMode(event){
  const button = event.currentTarget || event.target;
  const mode = button.dataset.preview;
  if(!mode) return;
  const buttons = document.querySelectorAll('.preview-option');
  buttons.forEach(b => b.classList.toggle('preview-option-active', b.dataset.preview === mode));
  window._customProgramState = window._customProgramState || { selectedDay: null, previewMode: null, dayModes: {} };
  const day = window._customProgramState.selectedDay;
  if(day){
    window._customProgramState.previewMode = mode;
    window._customProgramState.dayModes[day] = mode;
  }
  updateCustomProgramPreview();
}
function cancelPreviewMode(){
  window._customProgramState = window._customProgramState || { selectedDay: null, previewMode: null, dayModes: {} };
  const day = window._customProgramState.selectedDay;
  if(day){
    // Truly reset — clear both the stored dayMode and the active previewMode
    delete window._customProgramState.dayModes[day];
    window._customProgramState.previewMode = null;
    const previewPanel = document.getElementById('programPreviewPanel');
    previewPanel?.classList.remove('rest-mode', 'workout-mode');
    document.getElementById('workoutPreviewUI')?.classList.remove('visible');
    const buttons = document.querySelectorAll('.preview-option');
    buttons.forEach(b => b.classList.remove('preview-option-active'));
    updateCustomProgramPreview();
  }
}
function getDayStatusLabel(day){
  const state = window._customProgramState;
  const list = state?.assignedExercises?.[day] || [];
  return list.length ? String(list.length) : '';
}
function updateCustomProgramPreview(){
  const previewText = document.getElementById('programPreviewText');
  const previewPanel = document.getElementById('programPreviewPanel');
  if(!previewText || !previewPanel) return;
  const state = window._customProgramState || { selectedDay: null, previewMode: null, dayModes: {} };
  const cards = document.querySelectorAll('.program-day-card');
  cards.forEach(card => {
    const day = card.dataset.day;
    const selected = state.selectedDay === day;
    const mode = state.dayModes[day] || null;
    card.classList.toggle('selected', selected);
    card.classList.toggle('rest-day', mode === 'rest');
    card.classList.toggle('workout-day', mode === 'workout');
    const statusEl = card.querySelector('[data-pd-status]');
    if(statusEl){
      if(mode === 'rest'){ statusEl.textContent = '●'; }
      else if(mode === 'workout'){ statusEl.textContent = getDayStatusLabel(day); }
      else { statusEl.textContent = ''; }
    }
  });
  if(!state.selectedDay){
    previewText.textContent = 'Select a day to assign it.';
    previewPanel.classList.remove('has-selection');
    previewPanel.classList.remove('rest-mode');
    previewPanel.classList.remove('workout-mode');
    document.getElementById('workoutPreviewUI')?.classList.remove('visible');
    refreshCustomProgramSaveButton();
    return;
  }
  previewPanel.classList.add('has-selection');
  const currentMode = state.previewMode || state.dayModes[state.selectedDay] || null;
  if(currentMode === 'rest'){
    previewPanel.classList.add('rest-mode');
    previewPanel.classList.remove('workout-mode');
    document.getElementById('workoutPreviewUI')?.classList.remove('visible');
    previewText.textContent = 'This is a rest day, make sure u take a break, eat enough.';
    return;
  }
  if(currentMode === 'workout'){
    previewPanel.classList.remove('rest-mode');
    previewPanel.classList.add('workout-mode');
    document.getElementById('workoutPreviewUI')?.classList.add('visible');
    previewText.textContent = '';
    updateCustomProgramSearchResults();
    return;
  }
  previewPanel.classList.remove('rest-mode');
  previewPanel.classList.remove('workout-mode');
  document.getElementById('workoutPreviewUI')?.classList.remove('visible');
  previewText.textContent = 'Select workout or rest day.';
}
function getProgramSearchState(){
  if(!window._customProgramSearchState){
    window._customProgramSearchState = { term:'', filters:{types:[], equipment:[], difficulties:[], muscles:[]}, searchResults: [] };
  }
  return window._customProgramSearchState;
}
function toggleProgramFilters(event){
  event.stopPropagation();
  const dropdown = document.getElementById('programFilterDropdown');
  if(!dropdown) return;
  dropdown.classList.toggle('visible');
}
function toggleProgramFilter(event){
  const button = event.currentTarget || event.target;
  const type = button.dataset.filterType;
  const value = button.dataset.filterValue;
  if(!type || !value) return;
  const state = getProgramSearchState();
  const list = state.filters[type] || [];
  const normalized = value.toString();
  const has = list.includes(normalized);
  state.filters[type] = has ? list.filter(v => v !== normalized) : [...list, normalized];
  button.classList.toggle('on', !has);
  updateCustomProgramSearchResults();
}
function getCustomProgramExercises(){
  const entries = typeof getLibEntries === 'function' ? getLibEntries('all') : [];
  return Array.isArray(entries) ? entries : [];
}
function matchesCustomProgramFilters(entry, filters){
  if(!filters) return true;
  const equipment = (entry.equipment || '').toString().toLowerCase();
  const tags = ((entry.tags || []) || []).map(t => t.toString().toLowerCase());
  const muscles = ((entry.muscles || []) || []).map(m => (m && (m.n || m)).toString().toLowerCase());
  const diff = (entry.diff || entry.difficulty || '').toString().toLowerCase();
  if(filters.types.length){
    const ok = filters.types.some(value => {
      const key = value.toString().toLowerCase();
      if(key === 'bodyweight') return equipment.includes('bodyweight') || tags.includes('bodyweight');
      if(key === 'gym') return equipment.includes('gym') || tags.includes('gym');
      if(key === 'cardio') return tags.includes('cardio');
      return false;
    });
    if(!ok) return false;
  }
  if(filters.equipment && filters.equipment.length){
    const ok = filters.equipment.some(value => {
      const key = value.toString().toLowerCase();
      return equipment.includes(key) || tags.includes(key) || muscles.includes(key);
    });
    if(!ok) return false;
  }
  if(filters.difficulties.length){
    const ok = filters.difficulties.some(value => diff.includes(value.toString().toLowerCase()) || tags.includes(value.toString().toLowerCase()));
    if(!ok) return false;
  }
  if(filters.muscles.length){
    const ok = filters.muscles.some(value => muscles.includes(value.toString().toLowerCase()));
    if(!ok) return false;
  }
  return true;
}
function updateCustomProgramSearchResults(){
  const state = getProgramSearchState();
  const input = document.getElementById('programSearchInput');
  state.term = input?.value.trim() || '';
  const listEl = document.getElementById('workoutPreviewList');
  const resultsEl = document.getElementById('programSearchResults');
  const emptyEl = document.getElementById('programNoResults');
  if(!listEl || !resultsEl || !emptyEl) return;
  const allExercises = getCustomProgramExercises();
  const matched = allExercises.filter(ex => {
    if(!matchesCustomProgramFilters(ex, state.filters)) return false;
    if(!state.term) return true;
    return typeof grndMatchEx === 'function' ? grndMatchEx(ex, state.term) : grndMatch([ex.name || ex.alt || ''], state.term);
  });
  state.searchResults = matched.slice(0, 20);
  if(!state.term){
    listEl.innerHTML = '';
    resultsEl.classList.remove('visible');
    emptyEl.classList.remove('visible');
    emptyEl.style.display = 'none';
    return;
  }
  if(!state.searchResults.length){
    listEl.innerHTML = '';
    resultsEl.classList.remove('visible');
    emptyEl.style.display = 'block';
    emptyEl.classList.add('visible');
    return;
  }
  emptyEl.style.display = 'none';
  emptyEl.classList.remove('visible');
  resultsEl.classList.add('visible');
  listEl.innerHTML = state.searchResults.map((ex, index) => {
    const label = ex.name || ex.alt || 'Unnamed exercise';
    const diffRaw = ex.diff != null ? Number(ex.diff) : null;
    const hasDiff = diffRaw != null && !Number.isNaN(diffRaw);
    const dc = hasDiff ? diffColor(diffRaw) : 'var(--text3)';
    const dp = hasDiff ? Math.min((diffRaw / 10) * 100, 100) : 0;
    const diffDisplay = hasDiff ? (Number.isInteger(diffRaw) ? diffRaw : diffRaw.toFixed(1)) : null;
    const diffHtml = hasDiff
      ? `<div class="preview-item-diff">
           <div class="diff-bar preview-diff-bar"><div class="diff-fill" style="width:${dp}%;background:${dc}"></div></div>
           <span class="diff-num" style="color:${dc}">${diffDisplay}/10</span>
         </div>`
      : '';
    return `<div class="workout-preview-item" data-result-index="${index}">
      <span class="preview-item-name">${label}</span>
      ${diffHtml}
    </div>`;
  }).join('');
  listEl.onclick = function(event){
    const item = event.target.closest('.workout-preview-item');
    if(item && listEl.contains(item)) openExerciseAssignmentPopup({ currentTarget: item });
  };
}
function renderCustomProgramAssignedList(){
  const listEl = document.getElementById('programAssignedList');
  const pagerEl = document.getElementById('programAssignedPager');
  const state0 = window._customProgramState;
  if(state0?.selectedDay){
    const mode0 = state0.dayModes?.[state0.selectedDay] || null;
    const card0 = document.querySelector(`.program-day-card[data-day="${state0.selectedDay}"]`);
    const statusEl0 = card0?.querySelector('[data-pd-status]');
    if(statusEl0) statusEl0.textContent = mode0 === 'rest' ? '●' : (mode0 === 'workout' ? getDayStatusLabel(state0.selectedDay) : '');
  }
  if(!listEl || !pagerEl) return;
  const state = window._customProgramState || { selectedDay: null, assignedExercises: {} };
  const day = state.selectedDay;
  if(!day){
    listEl.innerHTML = '<div class="program-assigned-empty">Select a day to see assigned exercises.</div>';
    pagerEl.style.display = 'none';
    refreshCustomProgramSaveButton();
    return;
  }
  const assigned = (state.assignedExercises && state.assignedExercises[day]) || [];
  if(!assigned.length){
    listEl.innerHTML = '<div class="program-assigned-empty">No exercises assigned yet. Search and add one.</div>';
    pagerEl.innerHTML = '';
    pagerEl.style.display = 'none';
    refreshCustomProgramSaveButton();
    return;
  }
  const pageSize = 4;
  const pages = Math.max(1, Math.ceil(assigned.length / pageSize));
  window._customProgramAssignedPage = Math.min(window._customProgramAssignedPage || 0, pages - 1);
  const pagesHtml = Array.from({ length: pages }, (_, pageIndex) => {
    const pageItems = assigned.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize).map((item, index) => {
      const assignedIndex = pageIndex * pageSize + index;
      const hasSource = item.source && (item.source.id != null || item.source._uniqueKey || item.source._libKey || item.source._lib || item.source.lib);
      const sourceAction = hasSource ? `onclick="openAssignedExerciseLibrary(event, ${assignedIndex})"` : '';
      return `
        <div class="program-assigned-row" data-assigned-index="${assignedIndex}">
          <div class="assigned-move-group">
            <button class="assigned-action-btn assigned-move-btn" type="button" onclick="moveAssignedExercise(event,-1)" data-assigned-index="${assignedIndex}" title="Move up">↑</button>
            <button class="assigned-action-btn assigned-move-btn" type="button" onclick="moveAssignedExercise(event,1)" data-assigned-index="${assignedIndex}" title="Move down">↓</button>
          </div>
          <div class="assigned-main" ${sourceAction}>
            <div class="assigned-top">
              <div class="assigned-body">
                <div class="assigned-name">${item.name}</div>
              </div>
              <button class="assigned-remove-btn" type="button" onclick="requestAssignedExerciseDelete(event)" data-assigned-index="${assignedIndex}" title="Delete assignment">✕</button>
            </div>
            <div class="assigned-bottom">
              <div class="assigned-meta">${item.sets} sets · ${item.reps}</div>
              <button class="assigned-action-btn assigned-edit-btn" type="button" onclick="editAssignedExercise(event)" data-assigned-index="${assignedIndex}">edit</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
    return `<div class="assigned-page">${pageItems}</div>`;
  }).join('');
  listEl.innerHTML = pagesHtml;
  listEl.scrollLeft = (listEl.clientWidth || 0) * window._customProgramAssignedPage;
  listEl.onscroll = () => updateAssignedPageDots(listEl);
  pagerEl.innerHTML = Array.from({ length: pages }, (_, i) => `
    <button type="button" class="assigned-page-dot${i === window._customProgramAssignedPage ? ' active' : ''}" data-page="${i}" onclick="setAssignedPage(event)"></button>
  `).join('');
  pagerEl.style.display = pages > 1 ? 'flex' : 'none';
  refreshCustomProgramSaveButton();
}

function setAssignedPage(event){
  const button = event.currentTarget || event.target;
  const pageIndex = parseInt(button.dataset.page, 10);
  if(Number.isNaN(pageIndex)) return;
  window._customProgramAssignedPage = pageIndex;
  const listEl = document.getElementById('programAssignedList');
  const pagerEl = document.getElementById('programAssignedPager');
  if(listEl) listEl.scrollLeft = (listEl.clientWidth || 0) * pageIndex;
  if(pagerEl) {
    pagerEl.querySelectorAll('.assigned-page-dot').forEach(dot => {
      dot.classList.toggle('active', parseInt(dot.dataset.page, 10) === pageIndex);
    });
  }
}

function updateAssignedPageDots(listEl){
  const pageIndex = Math.round((listEl.scrollLeft || 0) / (listEl.clientWidth || 1));
  window._customProgramAssignedPage = pageIndex;
  const pagerEl = document.getElementById('programAssignedPager');
  if(pagerEl){
    pagerEl.querySelectorAll('.assigned-page-dot').forEach(dot => {
      dot.classList.toggle('active', parseInt(dot.dataset.page, 10) === pageIndex);
    });
  }
}
function renderExercisePopupDetails(container, exercise){
  if(!container) return;
  if(!exercise){
    container.innerHTML = '';
    return;
  }
  const diffRaw = exercise.diff != null ? Number(exercise.diff) : null;
  const hasDiff = diffRaw != null && !Number.isNaN(diffRaw);
  const dc = hasDiff ? diffColor(diffRaw) : null;
  const dp = hasDiff ? Math.min((diffRaw / 10) * 100, 100) : 0;
  const diffDisplay = hasDiff ? (Number.isInteger(diffRaw) ? diffRaw : diffRaw.toFixed(1)) : null;
  const diffHtml = hasDiff ? `
    <div class="ex-popup-diff">
      <span class="ex-popup-diff-label">DIFFICULTY</span>
      <div class="diff-wrap">
        <div class="diff-bar ex-popup-diff-bar"><div class="diff-fill" style="width:${dp}%;background:${dc}"></div></div>
        <span class="diff-num" style="color:${dc}">${diffDisplay}/10</span>
      </div>
    </div>` : '';
  const muscles = Array.isArray(exercise.muscles) ? exercise.muscles : [];
  const tagsHtml = muscles.length ? `
    <div class="muscles ex-popup-muscles">
      ${muscles.map(m => {
        const n = (m && (m.n || m)).toString();
        const isPrimary = m && m.p;
        return `<span class="mtag${isPrimary ? ' primary' : ''}" onclick="openMuscle(event,'${n}')">${n}</span>`;
      }).join('')}
    </div>` : '';
  container.innerHTML = diffHtml + tagsHtml || '';
}
function openExerciseAssignmentPopup(event){
  const target = event.currentTarget || event.target;
  const index = parseInt(target.dataset.resultIndex, 10);
  if(Number.isNaN(index)) return;
  const state = getProgramSearchState();
  const exercise = state.searchResults?.[index];
  if(!exercise) return;
  const name = exercise.name || exercise.alt || 'Unnamed exercise';
  document.getElementById('exercisePopupTitle').textContent = 'Assign exercise';
  document.getElementById('exercisePopupName').textContent = name;
  // Clean meta: equipment only, skip raw diff number
  const equipment = exercise.equipment && exercise.equipment !== 'None' ? exercise.equipment : null;
  document.getElementById('exercisePopupMeta').textContent = equipment || '';
  // Rich details: diff bar + muscle tags
  renderExercisePopupDetails(document.getElementById('exercisePopupDetails'), exercise);
  document.getElementById('exercisePopupSets').value = 3;
  document.getElementById('exercisePopupReps').value = 8;
  const errEl = document.getElementById('exercisePopupError');
  if(errEl) errEl.style.display = 'none';
  const searchInput = document.getElementById('programSearchInput');
  if(searchInput) searchInput.value = '';
  const filterDropdown = document.getElementById('programFilterDropdown');
  if(filterDropdown) filterDropdown.style.display = 'none';
  state.term = '';
  updateCustomProgramSearchResults();
  const muscleTags = Array.isArray(exercise.muscles) ? exercise.muscles.map(m => (m && (m.n || m)).toString()).filter(Boolean) : [];
  const tags = Array.isArray(exercise.tags) ? exercise.tags.map(t => t.toString()).filter(Boolean) : [];
  const details = [muscleTags.join(', '), tags.join(', ')].filter(Boolean).join(' · ');
  state.pendingExercise = { name, meta: equipment || '', details, source: exercise, assignedIndex: null };
  document.getElementById('customProgramExerciseOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCustomProgramExerciseOverlay(){
  document.getElementById('customProgramExerciseOverlay')?.classList.remove('open');
}
function exerciseOverlayClick(event){
  if(event.target !== event.currentTarget) return;
  closeCustomProgramExerciseOverlay();
}
function showExercisePopupError(msg){
  const el = document.getElementById('exercisePopupError');
  if(!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 3000);
}

// Shows an inline warning banner asking if the user really wants 10+ exercises.
// Returns true if they confirmed (clicked Save again), false if not.
// We use a flag on state so the next Save click bypasses the warning.
function showExercisePopupWarning(){
  const state = getProgramSearchState();
  if(state._confirmed10th) { state._confirmed10th = false; return true; }
  const el = document.getElementById('exercisePopupError');
  if(!el) return true; // fallback: allow
  el.textContent = "That's already 10 exercises. Hit Save again to confirm.";
  el.style.display = 'block';
  state._confirmed10th = true;
  // Hide warning if user cancels
  setTimeout(() => { if(el) el.style.display = 'none'; state._confirmed10th = false; }, 4000);
  return false;
}

function confirmExerciseAssignment(){
  const state = getProgramSearchState();
  const pending = state.pendingExercise;
  const day = window._customProgramState?.selectedDay;
  if(!pending || !day) return;
  const setsInput = document.getElementById('exercisePopupSets');
  const repsInput = document.getElementById('exercisePopupReps');
  const setsRaw = Math.max(1, parseInt(setsInput?.value, 10) || 3);
  const repsRaw = Math.max(1, parseInt(repsInput?.value, 10) || 8);
  if(setsInput) setsInput.value = setsRaw;
  if(repsInput) repsInput.value = repsRaw;
  const sets = String(setsRaw);
  const reps = String(repsRaw);
  window._customProgramState.assignedExercises = window._customProgramState.assignedExercises || {};
  const assigned = window._customProgramState.assignedExercises[day] || [];
  const isEdit = typeof pending.assignedIndex === 'number' && pending.assignedIndex >= 0;
  if(!isEdit) {
    if(assigned.length >= 15) {
      showExercisePopupError('Max 15 exercises per day reached.');
      return;
    }
    if(assigned.length === 9) {
      if(!showExercisePopupWarning()) return;
    }
  }
  if(isEdit){
    assigned[pending.assignedIndex] = { name: pending.name, meta: pending.meta, sets, reps, source: pending.source };
  } else {
    assigned.push({ name: pending.name, meta: pending.meta, sets, reps, source: pending.source });
  }
  window._customProgramState.assignedExercises[day] = assigned;
  persistCustomProgramState(window._customProgramState);
  closeCustomProgramExerciseOverlay();
  renderCustomProgramAssignedList();
}
function editAssignedExercise(event){
  event.stopPropagation();
  const button = event.currentTarget || event.target;
  const index = parseInt(button.dataset.assignedIndex, 10);
  const day = window._customProgramState?.selectedDay;
  const assigned = (window._customProgramState?.assignedExercises?.[day]) || [];
  const item = assigned[index];
  if(!item || Number.isNaN(index)) return;
  document.getElementById('exercisePopupTitle').textContent = 'Edit exercise';
  document.getElementById('exercisePopupName').textContent = item.name;
  document.getElementById('exercisePopupMeta').textContent = item.meta || '';
  renderExercisePopupDetails(document.getElementById('exercisePopupDetails'), item.source || null);
  document.getElementById('exercisePopupSets').value = item.sets || '3';
  document.getElementById('exercisePopupReps').value = item.reps || '';
  const state = getProgramSearchState();
  state.pendingExercise = { name: item.name, meta: item.meta || '', details: item.details || '', source: item.source || null, assignedIndex: index };
  document.getElementById('customProgramExerciseOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function moveAssignedExercise(event, direction){
  event.stopPropagation();
  const button = event.currentTarget || event.target;
  const index = parseInt(button.dataset.assignedIndex, 10);
  const day = window._customProgramState?.selectedDay;
  const list = (window._customProgramState?.assignedExercises?.[day]) || [];
  if(day == null || Number.isNaN(index) || !list.length) return;
  const targetIndex = index + direction;
  if(targetIndex < 0 || targetIndex >= list.length) return;
  const item = list[index];
  list.splice(index, 1);
  list.splice(targetIndex, 0, item);
  window._customProgramState.assignedExercises[day] = list;
  persistCustomProgramState(window._customProgramState);
  renderCustomProgramAssignedList();
}
function requestAssignedExerciseDelete(event){
  event.stopPropagation();
  const button = event.currentTarget || event.target;
  const index = parseInt(button.dataset.assignedIndex, 10);
  const day = window._customProgramState?.selectedDay;
  if(day == null || Number.isNaN(index)) return;
  const assigned = (window._customProgramState?.assignedExercises?.[day]) || [];
  const exerciseName = assigned[index]?.name || 'this exercise';
  const nameEl = document.getElementById('deleteConfirmExerciseName');
  if(nameEl) nameEl.textContent = `Remove "${exerciseName}"?`;
  const state = getProgramSearchState();
  state.pendingDelete = { day, index };
  document.getElementById('customProgramDeleteConfirmOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function confirmAssignedExerciseDelete(){
  const state = getProgramSearchState();
  const pending = state.pendingDelete;
  if(!pending) return;
  const list = (window._customProgramState?.assignedExercises?.[pending.day]) || [];
  list.splice(pending.index, 1);
  window._customProgramState.assignedExercises[pending.day] = list;
  state.pendingDelete = null;
  persistCustomProgramState(window._customProgramState);
  document.getElementById('customProgramDeleteConfirmOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
  renderCustomProgramAssignedList();
}
function openAssignedExerciseLibrary(event, index){
  event.stopPropagation();
  const state = window._customProgramState || { selectedDay: null, assignedExercises: {} };
  const day = state.selectedDay;
  const assigned = (state.assignedExercises && state.assignedExercises[day]) || [];
  const item = assigned[index];
  if(!item || !item.source) return;

  const source = item.source;
  const libKey = source._libKey || source._lib || source.lib || source.viewLib || source._viewLib || null;
  const viewName = libKey && typeof LIB_VIEW_MAP === 'object'
    ? Object.entries(LIB_VIEW_MAP).find(([, value]) => value === libKey)?.[0] || (Object.keys(LIB_VIEW_MAP).includes(libKey) ? libKey : null)
    : null;
  const idCandidate = source.id != null ? source.id : (source.exerciseId != null ? source.exerciseId : null);
  const exerciseId = idCandidate != null ? idCandidate : null;
  if(!viewName || exerciseId == null) return;

  window._customProgramOverlayHiddenForLibrary = true;
  persistCustomProgramState(window._customProgramState);
  closeModal();
  if(typeof openExerciseFromTree === 'function') {
    openExerciseFromTree(viewName, exerciseId);
  } else if(typeof goTo === 'function') {
    goTo(viewName);
  }
}

function cancelAssignedExerciseDelete(event){
  if(event && event.target !== event.currentTarget && !event.currentTarget?.classList?.contains('modal-close')) return;
  const state = getProgramSearchState();
  state.pendingDelete = null;
  document.getElementById('customProgramDeleteConfirmOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}
function setupCustomProgramFilterClose(){
  if(window._customProgramFilterCloseSetup) return;
  window._customProgramFilterCloseSetup = true;
  document.addEventListener('click', event => {
    const dropdown = document.getElementById('programFilterDropdown');
    const advBtn = document.querySelector('.preview-search-adv');
    if(!dropdown || !advBtn) return;
    if(dropdown.contains(event.target) || advBtn.contains(event.target)) return;
    dropdown.style.display = 'none';
  });
}
/* ── Program Type Picker ─────────────────────────────────────────────────
   Shows a two-card sheet (Auto / Manual). Clicking a card starts a 2-second
   fill animation as a soft confirmation. Clicking outside or the other card
   cancels. On completion: Auto → apdOpenRefresh, Manual → openCustomProgram.
──────────────────────────────────────────────────────────────────────────── */
(function() {
  let _pickerTimer  = null;
  let _pickerActive = null; // 'auto' | 'manual' | null

  function _clearTimer() {
    if (_pickerTimer) { clearTimeout(_pickerTimer); _pickerTimer = null; }
  }

  function _resetBars() {
    ['Auto','Manual'].forEach(id => {
      const bar = document.getElementById('progPickerBar' + id);
      if (!bar) return;
      bar.classList.remove('filling');
      bar.style.width = '0%';
      bar.style.transition = 'none';
    });
    document.querySelectorAll('.prog-picker-card').forEach(c => c.classList.remove('selecting'));
    _pickerActive = null;
  }

  window._progPickerOpen = function() {
    _resetBars();
    const ov = document.getElementById('progPickerOverlay');
    if (ov) {
      ov.style.cssText = 'display:flex !important;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.78);align-items:flex-end;justify-content:center;backdrop-filter:blur(5px)';
    }
  };

  window._progPickerCancel = function() {
    _clearTimer();
    _resetBars();
    const ov = document.getElementById('progPickerOverlay');
    if (ov) ov.style.cssText = 'display:none';
  };

  window._progPickerSelect = function(type) {
    // If clicking the already-active card, cancel it
    if (_pickerActive === type) { _clearTimer(); _resetBars(); return; }

    // Switch to newly clicked card
    _clearTimer();
    _resetBars();
    _pickerActive = type;

    const capType = type === 'auto' ? 'Auto' : 'Manual';
    const card = document.getElementById('progPicker' + capType);
    const bar  = document.getElementById('progPickerBar' + capType);
    if (card) card.classList.add('selecting');
    if (bar) {
      bar.style.transition = '';
      bar.style.width = '0%';
      bar.offsetWidth; // eslint-disable-line no-unused-expressions
      bar.classList.add('filling');
      bar.style.width = '100%';
    }

    _pickerTimer = setTimeout(function() {
      window._progPickerCancel();
      if (type === 'auto') {
        if (typeof window.apdOpenRefresh === 'function') window.apdOpenRefresh();
      } else {
        openCustomProgram();
      }
    }, 1500);
  };
})();

function openCustomProgram(){
  const overlay = document.getElementById('customProgramOverlay');
  overlay?.classList.add('open');
  document.body.style.overflow='hidden';
  if(!window._customProgramState){
    const savedState = loadCustomProgramState();
    window._customProgramState = savedState || { selectedDay: null, previewMode: null, dayModes: {}, assignedExercises: {} };
  }
  if(!window._customProgramState.dayModes) {
    window._customProgramState.dayModes = {};
  }
  if(!window._customProgramState.assignedExercises) {
    window._customProgramState.assignedExercises = {};
  }
  getProgramSearchState();
  setupCustomProgramFilterClose();
  renderCustomProgramAssignedList();
  updateCustomProgramPreview();
}


/* ── @file: src/terminology.js ── */
const TERMINOLOGY_ENTRIES = [

  // ══════════════════════════════════════════════════════════════════════════
  // GENERAL
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'When to consider an exercise completed',
    text: 'Aim for at least 3 clean reps with full control, or hold a static position for at least 3 seconds. "Clean" means no cheating the range of motion, no sudden collapse, and no using momentum to compensate.',
  },
  {
    label: 'What is a progression?',
    text: 'An easier variation of a skill that trains the same movement pattern and muscles. You work through progressions in order — each one slightly harder than the last — until you can perform the full skill. For example: knee push-up → full push-up → archer push-up → one-arm push-up.',
  },
  {
    label: 'What is a regression?',
    text: 'A scaled-down version of a movement used when the current exercise is too hard. Instead of skipping the skill entirely, you train the regression until you\'re strong enough to step up. Think of it as meeting your body where it actually is, not where you wish it was.',
  },
  {
    label: 'What does "loaded" mean?',
    text: 'Adding extra resistance on top of your own bodyweight — such as a weight vest, a dumbbell held to the chest, or a resistance band pulling against you. Useful when a bodyweight exercise has become too easy.',
  },
  {
    label: 'What does "unilateral" mean?',
    text: 'Training one side of the body at a time — one arm or one leg. Unilateral exercises (e.g. one-arm push-up, pistol squat) are significantly harder because all the load falls on a single limb and your core must work overtime to stay balanced. They also help identify and fix strength imbalances between sides.',
  },
  {
    label: 'What does "full range of motion (ROM)" mean?',
    text: 'Moving a joint through its complete possible range from start to finish. For example: chest touching the floor at the bottom of a push-up, or hips below parallel in a squat. Full ROM builds more strength and flexibility than partial reps, and is generally the standard unless a specific partial-range technique is being used intentionally.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GRIP & HAND POSITION
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Grip orientations',
    text: [
      '<strong>Pronated (overhand):</strong> palms facing away from you or facing down. Standard pull-up grip. Harder on the biceps, more lat-dominant.',
      '<strong>Supinated (underhand):</strong> palms facing toward you or facing up. Standard chin-up grip. Puts the biceps in a stronger position, making it slightly easier for most people.',
      '<strong>Neutral:</strong> palms facing each other, like holding two hammers. Often the most wrist-friendly option and used on parallel bars or with certain dumbbell exercises.',
    ].join('<br>'),
  },
  {
    label: "What's the difference between fist and knuckle push-ups?",
    text: '<strong>Fist push-ups</strong> rest on the flat front of the curled fingers (the finger pads). <strong>Knuckle push-ups</strong> balance on the knuckles of the index and middle fingers, keeping the wrist in a straight, neutral line. Knuckle push-ups reduce wrist strain for people with wrist pain, and also add a small stability challenge through the forearm.',
  },
  {
    label: 'What does "wide" or "narrow" grip mean?',
    text: '<strong>Wide grip:</strong> hands placed further than shoulder-width apart. Stretches the chest more, shifts load toward the pecs and rear delts. <strong>Narrow / close grip:</strong> hands close together, sometimes touching. Shifts the load toward the triceps and inner chest. Neither is universally better — both have their place in a well-rounded program.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FOOT & LEG POSITION
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'What does "straddle" mean?',
    text: 'Legs spread wide out to the sides, creating a broad base of support. A straddle position shortens the effective lever arm of the legs, making many skills (like levers and handstands) easier to hold than with legs together. It\'s a common first step when learning a new static skill.',
  },
  {
    label: 'What does "tuck" mean?',
    text: 'Knees pulled in toward the chest, making the body as compact as possible. A tucked position drastically reduces the lever arm, which is why it\'s the easiest progression for skills like the front lever, back lever, and planche. The tighter the tuck, the easier the hold.',
  },
  {
    label: 'What does "pike" mean?',
    text: 'Hips bent at roughly 90° with legs straight and together, forming a sharp "V" shape. It\'s the middle ground between a tuck (easier) and a full straight-body position (hardest). Common in handstand and lever progressions.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SHOULDER & SPINE
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Shoulder blade (scapular) movements',
    text: [
      '<strong>Protract:</strong> push the shoulder blades forward and apart, away from the spine — like rounding your upper back. Essential at the top of a push-up or dip to protect the shoulder joint.',
      '<strong>Retract:</strong> squeeze the shoulder blades together toward the spine — like trying to hold a pencil between them. Key for rows and pulling movements.',
      '<strong>Depress:</strong> pull the shoulder blades down, away from the ears. Critical for safe overhead pressing and hanging exercises — stops the shoulders from creeping up.',
      '<strong>Elevate:</strong> shrug the shoulder blades up toward the ears. Usually something to avoid during exercises, but used intentionally in shrugs and certain trap work.',
      '<strong>Scapular push-up / pull-up:</strong> a drill that isolates scapular movement with the arms locked straight — used to build the shoulder control needed for more advanced skills.',
    ].join('<br>'),
  },
  {
    label: 'Spine & core terms',
    text: [
      '<strong>Neutral spine:</strong> maintaining the natural S-curve of the back without forcing it to arch or round. The goal in most exercises. Keeps load distributed safely across the spine.',
      '<strong>Posterior pelvic tilt (PPT):</strong> tucking the tailbone under, which flattens the lower back. Done intentionally in hollow body holds and planche work to engage the core and protect the lumbar spine.',
      '<strong>Anterior pelvic tilt (APT):</strong> the pelvis tips forward and the lower back arches. Common posture problem — usually something to correct, though some exercises (like hip thrusts) use it deliberately.',
      '<strong>Hollow body:</strong> a full-body tension position where the ribs are pulled down, lower back is pressed flat, core is braced, and arms and legs are extended. The foundation of almost all gymnastics strength work.',
      '<strong>Bracing:</strong> actively tensing the entire core — front, sides, and back — as if you\'re about to take a punch. Not just "sucking in" — bracing creates 360° stability around the spine.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MOVEMENT QUALITY
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Tempo & movement phases',
    text: [
      '<strong>Eccentric (lowering phase):</strong> the muscle lengthens under tension — e.g. lowering yourself down in a push-up. Slow eccentrics build a lot of strength and cause more muscle damage (the good kind that drives growth).',
      '<strong>Concentric (lifting phase):</strong> the muscle shortens as it contracts — e.g. pressing back up from the bottom of a push-up.',
      '<strong>Isometric (hold):</strong> no movement at all; the muscle generates force without changing length. Planks, wall sits, and static levers are all isometric.',
      '<strong>Tempo notation:</strong> written as three numbers (e.g. 3-1-2) meaning: 3 seconds eccentric, 1 second pause at the bottom, 2 seconds concentric. Slowing tempo down dramatically increases difficulty without adding weight.',
      '<strong>Explosive / plyometric:</strong> moving as fast as possible through the concentric phase to develop power. The goal is speed, not control.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // VOLUME & TRAINING STRUCTURE
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Sets, reps & rest',
    text: [
      '<strong>Rep (repetition):</strong> one complete execution of a movement, from start position back to start position.',
      '<strong>Set:</strong> a group of consecutive reps done without stopping to rest.',
      '<strong>Rest interval:</strong> the recovery time between sets. Shorter rest (30–90 s) keeps intensity up and builds endurance. Longer rest (2–5 min) allows more recovery for strength-focused sets.',
      '<strong>Volume:</strong> the total amount of work in a session — typically sets × reps, or sets × reps × weight.',
      '<strong>Intensity:</strong> how close to your maximum a given set is. A set of 10 where you could do 20 is low intensity; a set of 10 where you could barely do 11 is high intensity.',
    ].join('<br>'),
  },
  {
    label: 'What is training to failure?',
    text: 'Pushing a set until you physically cannot complete another clean rep. Training to failure is effective but taxing on the nervous system — it\'s best used sparingly, maybe once per exercise per week, rather than every single set.',
  },
  {
    label: 'What is RPE (Rate of Perceived Exertion)?',
    text: 'A 1–10 scale for how hard a set feels. RPE 10 = absolute maximum effort, nothing left. RPE 8 = could have done 2 more reps. RPE 6 = could have done 4 more. Most working sets sit around RPE 7–9. It\'s a useful tool for auto-regulating effort on days when you feel great or feel off.',
  },
  {
    label: 'What is a superset?',
    text: 'Performing two exercises back-to-back with little or no rest between them. Often used to pair opposing muscle groups (e.g. push + pull) so one rests while the other works — making training more time-efficient without sacrificing quality.',
  },
  {
    label: 'What is progressive overload?',
    text: 'Gradually increasing the demand on your body over time — more reps, more sets, harder progressions, less rest, slower tempo, or added weight. Without progressive overload, the body adapts and stops improving. It\'s the single most important principle behind long-term strength gains.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BODY POSITIONS (CALISTHENICS)
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Common calisthenics body positions',
    text: [
      '<strong>Plank:</strong> a rigid, straight-line position from head to heels, held on hands or forearms and toes. The foundation of push-up and core work — a weak plank position means the whole exercise breaks down.',
      '<strong>Support hold:</strong> arms fully locked out, body suspended above a surface (floor, parallettes, or rings). Builds the wrist, elbow, and shoulder stability needed for more advanced skills.',
      '<strong>Inverted:</strong> any position where your hips or whole body is above your head — headstand, handstand, or inverted hang on a bar.',
      '<strong>Dead hang:</strong> hanging from a bar with arms fully extended and shoulders relaxed. Used as a baseline for grip and shoulder health, and as a decompression tool for the spine.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BODYWEIGHT EQUIPMENT
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Bodyweight training equipment',
    text: [
      '<strong>Pull-up bar:</strong> a fixed horizontal bar for hanging, pulling, and pressing movements. Can be wall-mounted, door-frame mounted, or a free-standing rig.',
      '<strong>Parallettes:</strong> low parallel bars that raise your hands off the floor, giving you extra depth on push-ups and dips, and allowing support holds. Much more wrist-friendly than flat floor for many people.',
      '<strong>Gymnastic rings:</strong> two suspended wooden or plastic loops. Because they move freely, rings demand far more stabilizer muscle activation than any fixed bar. Harder but extremely effective.',
      '<strong>Resistance band:</strong> a thick elastic loop used either to assist a movement (looped around the bar and your foot to support some weight) or to add resistance to a movement (attached so it pulls against you).',
      '<strong>Dip bars / parallel bars:</strong> two horizontal bars set parallel to each other at hip height. Used for dips, L-sits, support holds, and pressing movements.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GYM (WEIGHT TRAINING)
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'What is weight training / resistance training?',
    text: 'Any form of training that uses external resistance — barbells, dumbbells, machines, or cables — to make muscles work against a load. The goal is to progressively increase that load over time, forcing the muscles to grow stronger and larger to meet the demand. It complements bodyweight training extremely well.',
  },
  {
    label: 'Free weights vs machines',
    text: [
      '<strong>Free weights (barbells & dumbbells):</strong> the weight moves freely in space, so your stabilizer muscles have to work alongside the primary movers. Harder to learn but builds more real-world strength and muscle coordination.',
      '<strong>Machines:</strong> the weight moves along a fixed path, which removes the balance/stability demand and isolates the target muscle more directly. Great for beginners learning a muscle group, or for isolating weak points without fatigue from stabilizers.',
      '<strong>Cable machines:</strong> a pulley system that keeps constant tension on the muscle throughout the full range of motion — unlike a dumbbell where tension drops at certain angles.',
    ].join('<br>'),
  },
  {
    label: 'Common gym equipment',
    text: [
      '<strong>Barbell:</strong> a long steel bar (typically 20 kg / 45 lb for a standard Olympic bar) loaded with weight plates on each end. Used for the big compound lifts — squat, deadlift, bench press, overhead press, row.',
      '<strong>Dumbbell:</strong> a short hand-held weight. More versatile than a barbell for unilateral work and allows a more natural range of motion on some exercises.',
      '<strong>Kettlebell:</strong> a cast-iron ball with a handle. The offset center of gravity makes it uniquely effective for swings, Turkish get-ups, and ballistic movements.',
      '<strong>Weight plates:</strong> circular discs slid onto a barbell to increase load. Come in standard sizes: 1.25 kg, 2.5 kg, 5 kg, 10 kg, 15 kg, 20 kg, 25 kg.',
      '<strong>Rack / squat rack / power rack:</strong> a steel frame with adjustable hooks that holds the barbell at the right height so you can safely get under it for squats and pressing, and re-rack it without a spotter.',
      '<strong>Bench:</strong> a padded surface used for bench press, dumbbell work, and step-ups. Can be flat, inclined (upper chest focus), or declined (lower chest focus).',
      '<strong>Cable machine / pulley:</strong> a system of cables, weights, and pulleys that can be adjusted to pull from any height. Provides constant tension and is highly versatile for rows, pull-downs, flyes, and tricep work.',
      '<strong>Smith machine:</strong> a barbell fixed to vertical rails — it only moves straight up and down. Removes the balance component. Useful for isolated pressing but limits natural bar path.',
    ].join('<br>'),
  },
  {
    label: 'Key gym movements',
    text: [
      '<strong>Compound lift:</strong> a movement that involves multiple joints and muscle groups at once — e.g. squat (hips + knees), deadlift (hips + back + legs), bench press (shoulders + elbows + chest). These are the most efficient exercises for building overall strength.',
      '<strong>Isolation exercise:</strong> targets a single muscle group with one joint moving — e.g. bicep curl, leg extension, lateral raise. Used to address weak points or add volume to a specific muscle.',
      '<strong>Squat:</strong> lowering the hips toward the floor by bending the knees and hips simultaneously, then standing back up. The king of lower body exercises — hits quads, glutes, hamstrings, and core.',
      '<strong>Deadlift:</strong> picking a loaded barbell off the floor to a standing position by driving the hips forward. One of the best full-body strength movements — especially for the posterior chain (back, glutes, hamstrings).',
      '<strong>Bench press:</strong> lying on a bench and pressing a barbell or dumbbells away from the chest. Primary chest, front delt, and tricep exercise.',
      '<strong>Overhead press (OHP):</strong> pressing a barbell or dumbbells from shoulder height to fully overhead. Trains shoulders, upper traps, and triceps.',
      '<strong>Row:</strong> pulling a weight horizontally toward your torso. Targets the back (lats, rhomboids, traps) and biceps. The horizontal pulling counterpart to pressing.',
      '<strong>Hip hinge:</strong> the fundamental movement pattern of bending forward at the hips while keeping a neutral spine — the basis of deadlifts, RDLs, and kettlebell swings.',
    ].join('<br>'),
  },
  {
    label: 'Gym programming terms',
    text: [
      '<strong>1RM (one-rep max):</strong> the maximum weight you can lift for exactly one full rep. Used as a reference point — e.g. "work up to 80% of your 1RM for 5 sets of 3."',
      '<strong>Compound first:</strong> a common programming rule — always do your big multi-joint lifts (squat, deadlift, press) early in the session when you\'re fresh, then move to isolation work afterward.',
      '<strong>Deload week:</strong> a planned week of reduced volume or intensity, typically every 4–8 weeks. Allows the joints, connective tissue, and nervous system to recover fully so you can push hard again afterward.',
      '<strong>Warm-up sets:</strong> lighter sets done before your working sets to prepare the joints and rehearse the movement pattern. Not junk volume — essential for performance and injury prevention.',
      '<strong>Spot (spotter):</strong> a training partner who stands by to assist if you fail a rep — especially important for heavy bench press or squats without a power rack.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CARDIO
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'What is cardio / cardiovascular training?',
    text: 'Any sustained activity that raises your heart rate and challenges the heart, lungs, and circulatory system to deliver oxygen to working muscles. Regular cardio improves your aerobic fitness (how efficiently your body uses oxygen), lowers resting heart rate, speeds up recovery between strength sets, and supports long-term heart health.',
  },
  {
    label: 'Aerobic vs anaerobic exercise',
    text: [
      '<strong>Aerobic ("with oxygen"):</strong> exercise at a moderate intensity your body can sustain for an extended period — jogging, cycling, swimming, brisk walking. Your body primarily burns fat and carbohydrates using oxygen as fuel. Builds your base fitness and endurance.',
      '<strong>Anaerobic ("without oxygen"):</strong> short, very high-intensity bursts where the demand for energy outpaces what oxygen can supply — sprinting, heavy lifting, jump squats. The body relies on stored energy (glycogen) and produces lactate as a byproduct. Can only be sustained for seconds to a couple of minutes.',
    ].join('<br>'),
  },
  {
    label: 'Heart rate zones',
    text: [
      'Your heart rate during cardio determines what energy system you\'re training. Zones are typically expressed as a percentage of your maximum heart rate (roughly estimated as 220 minus your age).',
      '<br><strong>Zone 1 (50–60%):</strong> very light effort — active recovery, easy walks. Great for moving without adding training stress.',
      '<strong>Zone 2 (60–70%):</strong> conversational pace — you can speak in full sentences. The most important zone for building a long-term aerobic base. Should make up the majority of cardio training.',
      '<strong>Zone 3 (70–80%):</strong> moderate effort — talking becomes uncomfortable. The "grey zone" — harder than easy but not hard enough to fully train the anaerobic system.',
      '<strong>Zone 4 (80–90%):</strong> hard effort — breathing heavily, can only say a few words. Builds lactate threshold (how long you can sustain high intensity).',
      '<strong>Zone 5 (90–100%):</strong> maximum effort — all-out sprints, unsustainable for more than 30–60 seconds. Trains peak power output.',
    ].join('<br>'),
  },
  {
    label: 'LISS, MISS & HIIT',
    text: [
      '<strong>LISS (Low-Intensity Steady State):</strong> sustained cardio at a low, constant effort — e.g. a 45-minute brisk walk or easy jog at Zone 2. Easy to recover from, can be done frequently, and excellent for building the aerobic base without interfering with strength training.',
      '<strong>MISS (Moderate-Intensity Steady State):</strong> sustained effort in the moderate zone — e.g. a 30-minute run at a comfortably hard pace. More demanding than LISS; use sparingly if your main goal is strength.',
      '<strong>HIIT (High-Intensity Interval Training):</strong> alternating between very hard effort and short recovery periods — e.g. 20 seconds all-out sprint, 40 seconds walk, repeated 8–10 times. Extremely time-efficient for burning calories and improving fitness, but very taxing. 1–2 sessions per week is usually enough.',
    ].join('<br>'),
  },
  {
    label: 'VO₂ max — what is it?',
    text: 'The maximum rate at which your body can consume oxygen during intense exercise, measured in mL/kg/min. It\'s the gold standard measure of aerobic fitness. A higher VO₂ max means your cardiovascular system can deliver more oxygen to your muscles, which translates to better endurance performance and — importantly — better long-term health outcomes.',
  },
  {
    label: 'Common cardio modalities',
    text: [
      '<strong>Running / jogging:</strong> the most accessible cardio — no equipment needed. High-impact, so joint-loading is something to manage with good footwear and gradual mileage increases.',
      '<strong>Cycling:</strong> low-impact cardio that\'s easy on the knees. Can be done outdoors or on a stationary bike. Spin classes add a structured, high-intensity option.',
      '<strong>Rowing:</strong> full-body cardio that engages legs, core, and arms simultaneously. Low-impact and excellent for people who want upper body involvement in their cardio.',
      '<strong>Jump rope / skipping:</strong> surprisingly intense. 10 minutes of jump rope is roughly equivalent to 30 minutes of jogging for cardiovascular load. Also develops coordination and footwork.',
      '<strong>Swimming:</strong> the most joint-friendly cardio option — essentially zero impact. Works the whole body and is particularly good for people with joint issues or during injury recovery.',
      '<strong>Stair climber / incline treadmill:</strong> low-impact alternatives to running that heavily load the glutes and quads. Good bridge between cardio and lower-body strength work.',
    ].join('<br>'),
  },
  {
    label: 'Cardio & strength training — how do they interact?',
    text: 'Done correctly, cardio and strength training complement each other. A good aerobic base speeds recovery between strength sets and between training days. However, doing very long or intense cardio immediately before strength work will reduce performance. Most people do best keeping cardio and strength sessions separate (different times of day or different days), or placing cardio after lifting if they must be combined. LISS is the least likely to interfere with strength gains.',
  },
];

function _renderInfoFaqTerms(searchTerm = '') {
  const container = document.getElementById('infoFaqTermsBody');
  if (!container) return;
  const empty = document.getElementById('iffTermsEmpty');
  const count = document.getElementById('iffTermCount');

  const query = (searchTerm || '').trim().toLowerCase();
  const results = TERMINOLOGY_ENTRIES.filter(entry => {
    if (!query) return true;
    return `${entry.label} ${entry.text}`.toLowerCase().includes(query);
  });

  container.innerHTML = results.map(entry =>
    `<details class="iff-term">
      <summary><span class="iff-term-chev">▸</span><span class="iff-term-q">${entry.label}</span></summary>
      <div class="iff-term-a">${entry.text}</div>
    </details>`
  ).join('');

  if (empty) empty.style.display = results.length ? 'none' : 'block';
  if (count) count.textContent = query
    ? `${results.length} of ${TERMINOLOGY_ENTRIES.length}`
    : `${TERMINOLOGY_ENTRIES.length} terms`;
}

document.addEventListener('DOMContentLoaded', () => {
  _renderInfoFaqTerms();
  const search = document.getElementById('iffTermsSearch');
  if (search) search.addEventListener('input', function() { _renderInfoFaqTerms(this.value); });
});

/* ──────────────────────────────────────────────────────────────
   "How it works" guided tour (#iffJourney) + scroll-reveal.
   A slide deck of N panels (count read from the DOM, not hard-coded).
   Auto-advances while visible; pauses on hover / when scrolled away.
   Prev/next arrows and dot indicators allow manual navigation; the
   dots are generated to match the panel count. A top progress bar
   tracks the auto-advance timer. Visibility is tracked with an
   IntersectionObserver, which also covers the .view display:none
   toggle when switching pages. Respects prefers-reduced-motion.
   ────────────────────────────────────────────────────────────── */
(function () {
  const STEP_MS = 8000;
  const reduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let root, panels, dots, bar, countEl, titleEl,
      idx = 0, N = 0, timer = null, playing = false, visible = false;

  const pad = (n) => String(n).padStart(2, '0');

  function restartBar() {
    if (!bar) return;
    bar.classList.remove('run');
    void bar.offsetWidth;               // force reflow so the animation restarts
    if (playing && !reduced) bar.classList.add('run');
  }
  function render(i) {
    idx = (i + N) % N;
    panels.forEach((p, k) => p.classList.toggle('on', k === idx));
    dots.forEach((d, k) => {
      d.classList.toggle('on', k === idx);
      d.classList.toggle('done', k < idx);
    });
    if (countEl) countEl.textContent = pad(idx + 1) + ' / ' + pad(N);
    if (titleEl) titleEl.textContent = panels[idx].getAttribute('data-title') || '';
    restartBar();
  }
  function stopTimer() { if (timer) { clearTimeout(timer); timer = null; } }
  function queue() { stopTimer(); timer = setTimeout(() => { render(idx + 1); queue(); }, STEP_MS); }
  function play() { if (reduced || playing) return; playing = true; root.classList.remove('iff-jrn-paused'); restartBar(); queue(); }
  function pause() { playing = false; stopTimer(); root.classList.add('iff-jrn-paused'); }
  function go(i) { render(i); if (!reduced) { pause(); play(); } }

  function initJourney() {
    root = document.getElementById('iffJourney');
    if (!root) return;
    panels = Array.prototype.slice.call(root.querySelectorAll('.iff-jrn-panel'));
    N = panels.length;
    if (!N) return;

    bar     = root.querySelector('.iff-jrn-bar-fill');
    countEl = root.querySelector('.iff-jrn-count');
    titleEl = root.querySelector('.iff-jrn-steptitle');
    root.style.setProperty('--jrn-dur', (STEP_MS / 1000) + 's');

    // Build one dot per panel.
    dots = [];
    const dotsWrap = root.querySelector('.iff-jrn-dots');
    if (dotsWrap) {
      panels.forEach((p, k) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'iff-jrn-dot';
        b.setAttribute('aria-label', 'Slide ' + (k + 1));
        b.addEventListener('click', () => go(k));
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }

    // Prev / next arrows (data-dir = -1 | 1).
    Array.prototype.forEach.call(root.querySelectorAll('.iff-jrn-nav'), (btn) => {
      const dir = parseInt(btn.getAttribute('data-dir'), 10) || 1;
      btn.addEventListener('click', () => go(idx + dir));
    });

    render(0);
    root.addEventListener('mouseenter', pause);
    root.addEventListener('mouseleave', () => { if (visible) play(); });

    if ('IntersectionObserver' in window && !reduced) {
      new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          visible = e.isIntersecting;
          if (visible) play(); else pause();
        });
      }, { threshold: 0.35 }).observe(root);
    }
  }

  function initReveal() {
    if (reduced || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll(
      '#view-info-faq .iff-nav-card, #view-info-faq .iff-spot, #view-info-faq .iff-label, ' +
      '#view-info-faq .iff-card, #view-info-faq .iff-links-card, #view-info-faq .iff-terms-search'
    );
    if (!targets.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('iff-rv-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach((t) => { t.classList.add('iff-rv'); io.observe(t); });
  }

  document.addEventListener('DOMContentLoaded', () => { initJourney(); initReveal(); });

document.addEventListener('DOMContentLoaded', () => {
  if(typeof updateHomeBodyweightSummary === 'function') updateHomeBodyweightSummary();
});
})();


/* ── @file: config/progress.js ── */
/* ┌─ @file: js/progress.js ────────────────────────────────────────── */
/* ══ PROGRESS TRACKING
 ════════════════════════════════════════
   Storage key: grnd_progress  (follows existing grnd_* namespace)
   Schema: { "pushup-3": "unlocked", "pullup-7": "progress", … }
   Status values: "unlocked" | "progress" | null (absent = none)

   Depends on globals defined earlier in index.html (router.js / table.js /
   library.js blocks): LIB_IDS, LIB_VIEW_MAP, renderLibTable, renderHof,
   renderPantheonLibrary, renderProgressionTree, buildProgressionLevels,
   getFilteredTreeEntries, getActiveTreeEntries, ALL_LIBRARY_KEYS,
   getLibEntries, getUnlockedHofKeys, getPantheonExercisesForRender,
   pantheonRequirementsMet, hasPantheonAccess, getUnlockedPantheonExerciseKeys,
   isHallOfFameKey, checkPantheonUnlock, createGlassBreakEffect,
   triggerPantheonCinematic, playHofCardRevealAnimation,
   triggerPantheonCompletionCinematic, maybeShowPantheonAwakening,
   PANTHEON_AWAKENING_KEY, loadSqMarkFirst, setSqMarkFirst, refreshSqPanel,
   SIDE_QUEST_MAP, _treeMode, _invalidateExerciseCaches, clearGlassEffect
   (animations.js), renderPlayerLevel (settings.js).

   Load this file AFTER the main inline script block and BEFORE
   firebase.js (firebase.js calls window.onProgressSaved at load time).
════════════════════════════════════════════════════════════ */

const PROG_KEY = 'grnd_progress';
const PROG_BACKUP_KEY = 'grnd_progress_backup';
const FAV_KEY = 'grnd_favourites';

function parseStoredJSON(raw) {
  if(raw === null || raw === undefined) return {};
  if(raw === '') return null;
  try { return JSON.parse(raw); } catch(e) { return null; }
}

function getStorageValue(key) {
  try { return localStorage.getItem(key); } catch(e) {}
  try { return sessionStorage.getItem(key); } catch(e) {}
  return null;
}

function setStorageValue(key, value) {
  try { localStorage.setItem(key, value); return true; } catch(e) {}
  try { sessionStorage.setItem(key, value); return true; } catch(e) {}
  return false;
}

function persistProgressData(data) {
  const payload = JSON.stringify(data);
  setStorageValue('grnd_progress', payload);
  setStorageValue('grnd_progress_backup', payload);
  _invalidateExerciseCaches();
}

function loadProgress() {
  const raw = getStorageValue('grnd_progress');
  const data = parseStoredJSON(raw);
  if(data !== null) return data;

  const backupRaw = getStorageValue('grnd_progress_backup');
  const backupData = parseStoredJSON(backupRaw);
  if(backupData !== null) {
    persistProgressData(backupData);
    return backupData;
  }

  return {};
}

function loadFavourites() {
  const raw = getStorageValue(FAV_KEY);
  const data = parseStoredJSON(raw);
  if(data !== null) return data;
  const backupRaw = getStorageValue(FAV_KEY + '_backup');
  const backupData = parseStoredJSON(backupRaw);
  if(backupData !== null) {
    const payload = JSON.stringify(backupData);
    setStorageValue(FAV_KEY, payload);
    setStorageValue(FAV_KEY + '_backup', payload);
    return backupData;
  }
  return {};
}

function isFavourite(exKey) {
  const data = loadFavourites();
  return !!data[exKey];
}

function toggleFavourite(exKey, forceValue) {
  try {
    const data = loadFavourites();
    const next = typeof forceValue === 'boolean' ? forceValue : !data[exKey];
    if(next) data[exKey] = true;
    else delete data[exKey];
    const payload = JSON.stringify(data);
    setStorageValue(FAV_KEY, payload);
    setStorageValue(FAV_KEY + '_backup', payload);
    return next;
  } catch(e) {
    return false;
  }
}

/* ── PROGRESS LISTENER REGISTRY ───────────────────────────────────────────
   Modules that need to react to progress changes register here instead of
   monkey-patching saveProgress. Callbacks receive (exKey, status).
   status is the new value ('unlocked' | 'progress') or null when cleared.
─────────────────────────────────────────────────────────────────────────── */
const _progressListeners = [];
window.onProgressSaved = function(fn) { _progressListeners.push(fn); };

function saveProgress(exKey, status) {
  try {
    const data = loadProgress();
    if(status) {
      data[exKey] = status;
    } else {
      delete data[exKey];
      // Let animations.js own the glass-effect flag; fall back to inline clear
      // if the exposed helper isn't loaded yet.
      if(typeof window.clearGlassEffect === 'function') {
        window.clearGlassEffect(exKey);
      } else {
        try {
          const gd = JSON.parse(localStorage.getItem('grnd_glass_effects') || '{}');
          delete gd[exKey];
          localStorage.setItem('grnd_glass_effects', JSON.stringify(gd));
        } catch(ge) {}
      }
    }
    persistProgressData(data);
    if(typeof renderPlayerLevel === 'function') renderPlayerLevel();
    if(typeof checkPantheonUnlock === 'function') checkPantheonUnlock();
    // Notify listeners after all internal state is settled.
    _progressListeners.forEach(fn => { try { fn(exKey, status); } catch(e) {} });
  } catch(e) {}
}

function getProgressBtnKey(btn) {
  const libKey = btn.dataset.lib || btn.dataset.libKey;
  const id = btn.dataset.id;
  return libKey && id ? `${libKey}-${id}` : null;
}

function updateProgressCtxFavouriteBtn() {
  const btn = document.getElementById('ctxFavouriteBtn');
  if(!btn || !_ctxTarget) return;
  const active = isFavourite(_ctxTarget.exKey);
  btn.classList.toggle('active', active);
  btn.innerHTML = `<span class="ctx-icon">&#9733;</span> ${active ? 'REMOVE FAVOURITE' : 'FAVOURITE'}`;
}

/* Apply status attrs to every rendered .prog-item in the tree */
function getUnlockedPantheonGroupData(){
  const unlockedHof = getUnlockedHofKeys();
  const exercises = getPantheonExercisesForRender();
  const groups = new Map();
  const unlockedHofSet = new Set(unlockedHof);
  const progressDataForGroup = loadProgress();
  exercises.forEach(exercise => {
    if(!Array.isArray(exercise.requires)) return;
    const isUnlocked = pantheonRequirementsMet(exercise, unlockedHofSet, progressDataForGroup);
    if(!isUnlocked) return;
    const groupKey = exercise.pantheonGroup || 'Pantheon';
    if(!groups.has(groupKey)){
      groups.set(groupKey, { key: groupKey, name: groupKey, variants: [] });
    }
    const group = groups.get(groupKey);
    if(!group.variants.some(v => v.id === exercise.id)){
      group.variants.push(exercise);
    }
  });
  return Array.from(groups.values());
}

function buildPantheonTreeRow(progressData) {
  const unlockedHofs = getUnlockedPantheonGroupData();
  if(!unlockedHofs.length) return '';
  if(!progressData) progressData = loadProgress();
  return `<div class="prog-row prog-row-pantheon">
    <div class="prog-diff"><div class="prog-diff-value">???</div></div>
    <div class="prog-lanes-scroll">
      <div class="prog-lanes" style="grid-template-columns:repeat(${Math.max(unlockedHofs.length,1)},minmax(180px,1fr))">
        ${unlockedHofs.map(group => `
          <div class="prog-group prog-group-pantheon">
            <div class="prog-group-label">${group.name.toUpperCase()}</div>
            <div class="prog-group-list">
              ${group.variants.length ? group.variants.map(v => {
                const key = `pantheon-${v.id}`;
                const status = progressData[key] || '';
                const statusAttr = status ? ` data-status="${status}"` : '';
                return `<button class="prog-item family-pantheon" data-lib="pantheon" data-lib-key="pantheon" data-view-lib="pantheon-library" data-id="${v.id}"${statusAttr} onclick="goTo('pantheon-library')">
                  <span class="prog-item-name">${v.name || 'Unnamed Variant'}</span>
                </button>`;
              }).join('') : `<button class="prog-item family-pantheon" data-status="unlocked" onclick="goTo('pantheon-library')">
                <span class="prog-item-name">No unlocked variants</span>
              </button>`}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`;
}

function applyProgressToTree() {
  const data = loadProgress();
  const favouriteData = loadFavourites();
  document.querySelectorAll('.prog-item[data-id]').forEach(btn => {
    const key = getProgressBtnKey(btn);
    if(!key) return;
    const status = data[key] || '';
    if(status) btn.setAttribute('data-status', status);
    else btn.removeAttribute('data-status');
    if(favouriteData[key]) btn.setAttribute('data-favourite', 'true');
    else btn.removeAttribute('data-favourite');
  });

  // Refresh the Pantheon row in-place without full tree rebuild
  const progRows = document.getElementById('progRows');
  if(!progRows) {
    if(typeof updateHomeTreeProgress === 'function') updateHomeTreeProgress();
    return;
  }
  const existingPanRow = progRows.querySelector('.prog-row-pantheon');
  const newRowHTML = buildPantheonTreeRow(data);
  if(newRowHTML) {
    if(existingPanRow) {
      existingPanRow.outerHTML = newRowHTML;
    } else {
      progRows.insertAdjacentHTML('beforeend', newRowHTML);
    }
  } else if(existingPanRow) {
    existingPanRow.remove();
  }
  if(typeof updateHomeTreeProgress === 'function') updateHomeTreeProgress();
}

function refreshProgressionTreeProgress() {
  const data = loadProgress();
  const levels = buildProgressionLevels();
  levels.forEach(level => {
    const row = document.querySelector(`.prog-row[data-tier="${level.difficulty}"]`);
    if(!row) return;
    const items = Array.from(row.querySelectorAll('.prog-item[data-id]:not(.sq-item)'));
    const totalCount = items.length;
    const unlockedCount = items.reduce((sum, item) => {
      const key = getProgressBtnKey(item);
      return sum + ((key && data[key] === 'unlocked') ? 1 : 0);
    }, 0);
    const pct = totalCount ? Math.round((unlockedCount / totalCount) * 100) : 100;
    const bar = row.querySelector('.tier-progress-bar span');
    const text = row.querySelector('.tier-progress-group:not(.sq-progress-group) .tier-progress-text');
    if(bar) bar.style.width = pct + '%';
    if(text) text.textContent = `${pct}% · ${unlockedCount}/${totalCount} exercises`;

    const sqItems = Array.from(row.querySelectorAll('.sq-panel .sq-item'));
    const sideQuestTotal = sqItems.length;
    const sideQuestUnlocked = sqItems.reduce((sum, item) => {
      return sum + (item.dataset.status === 'unlocked' ? 1 : 0);
    }, 0);
    const sideQuestPct = sideQuestTotal ? Math.round((sideQuestUnlocked / sideQuestTotal) * 100) : 0;
    const sqBar = row.querySelector('.sq-progress-bar span');
    const sqText = row.querySelector('.sq-progress-group .tier-progress-text');
    if(sqBar) sqBar.style.width = sideQuestPct + '%';
    if(sqText) sqText.textContent = `SQ ${sideQuestPct}% · ${sideQuestUnlocked}/${sideQuestTotal}`;
  });
}

function updateHomeTreeProgress() {
  const data = loadProgress();
  // Use mode-specific entries for accurate per-mode progress
  const entries = (_treeMode === 'bodyweight')
    ? getFilteredTreeEntries(true)
    : getActiveTreeEntries();
  const totalCount = entries.length;
  const unlockedCount = entries.reduce((sum, item) => {
    // Count the PRIMARY of each family pool (a Mark-First swap counts as the
    // main exercise) so home progress matches the tree.
    const variants = (window.SIDE_QUEST_MAP && window.SIDE_QUEST_MAP[item.name]) || [];
    const key = (variants.length && typeof resolveTreePrimary === 'function')
      ? getSqVariantKey(resolveTreePrimary(item.name, item))
      : `${item.libKey||item.lib}-${item.id}`;
    return sum + (data[key] === 'unlocked' ? 1 : 0);
  }, 0);
  const pct = totalCount ? Math.round((unlockedCount / totalCount) * 100) : 0;
  const bar = document.getElementById('homeTreeProgressBar');
  const text = document.getElementById('homeTreeProgressText');
  const cardBar = document.getElementById('homeTreeCardProgressBar');
  const cardText = document.getElementById('homeTreeCardProgressText');
  const viewLabel = `${pct}% · ${unlockedCount}/${totalCount} exercises`;
  const cardLabel = `${pct}% · ${unlockedCount}/${totalCount}`;
  if(bar) bar.style.width = pct + '%';
  if(text) text.textContent = viewLabel;
  if(cardBar) cardBar.style.width = pct + '%';
  if(cardText) cardText.textContent = cardLabel;
  if(typeof updateHomeBodyweightSummary === 'function') updateHomeBodyweightSummary();
}

function updateHomeBodyweightSummary() {
  const libraries = ALL_LIBRARY_KEYS.length;
  const workouts = ALL_LIBRARY_KEYS.reduce((sum, key) => sum + getLibEntries(key).length, 0);
  const desc = document.getElementById('homeBodyweightDesc');
  if(desc) desc.textContent = `${libraries} libraries · ${workouts} workouts`;

  // Bodyweight count
  const bwCount = ['pushup','planche','pullup','chinup','frontlever','backlever','combo','squat','core','dip','handstand','isometric'].reduce((s,k) => s + getLibEntries(k).length, 0);

  // Cardio count
  const cardioCount = ['cardioRunning','cardioCycling','cardioHIIT','cardioRowing','cardioRecovery','cardioMobility'].reduce((s,k) => s + (LIB_DATA[k]||[]).length, 0);

  // Weights count
  const weightsCount = ['gymChest','gymBack','gymShoulders','gymLegs','gymArms','gymCore','weighted'].reduce((s,k) => s + (LIB_DATA[k]||[]).length, 0);

  // Unified workout library count
  const totalEl = document.getElementById('home-workout-library-count');
  if(totalEl) totalEl.textContent = (bwCount + cardioCount + weightsCount) + ' exercises';

  // Programs count (built-in + saved custom + auto-generated)
  const builtIn = (typeof PROGRAMS !== 'undefined' ? PROGRAMS : []).length;
  const saved = typeof loadSavedCustomPrograms === 'function' ? loadSavedCustomPrograms().length : 0;
  const progTotal = builtIn + saved;
  const progLabel = `${progTotal} program${progTotal !== 1 ? 's' : ''}`;
  ['home-programs-count'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = progLabel;
  });

  // Foods count from global foods array
  const foodTotal = (typeof foods !== 'undefined' && Array.isArray(foods)) ? foods.length : 0;
  const foodLabel = `${foodTotal} food${foodTotal !== 1 ? 's' : ''}`;
  ['home-nutrition-count', 'foods-count'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = foodLabel;
  });

  // Per-library counts for bodyweight / gym / cardio section views
  const _libCountMap = {
    warmup:'warmup-count', pushup:'pushup-count', pullup:'pullup-count',
    chinup:'chinup-count', squat:'squat-count', core:'core-count',
    dip:'dip-count', handstand:'handstand-count', isometric:'isometric-count',
    stretching:'stretching-count', planche:'planche-count',
    frontlever:'frontlever-count', backlever:'backlever-count', combo:'combo-count',
    gymChest:'gym-chest-count', gymBack:'gym-back-count', gymShoulders:'gym-shoulders-count',
    gymLegs:'gym-legs-count', gymArms:'gym-arms-count', gymCore:'gym-core-count',
    weighted:'weighted-count',
    cardioRunning:'cardio-running-count', cardioCycling:'cardio-cycling-count',
    cardioHIIT:'cardio-hiit-count', cardioRowing:'cardio-rowing-count',
    cardioRecovery:'cardio-recovery-count', cardioMobility:'cardio-mobility-count',
  };
  Object.entries(_libCountMap).forEach(([k, id]) => {
    const el = document.getElementById(id);
    if(el) {
      const n = (typeof LIB_DATA !== 'undefined' && Array.isArray(LIB_DATA[k])) ? LIB_DATA[k].length : 0;
      if(n > 0) el.textContent = n + ' exercises';
    }
  });
  // HoF count
  const hofEl = document.getElementById('hof-count');
  if(hofEl && typeof getHallOfFameExercises === 'function') {
    hofEl.textContent = getHallOfFameExercises().length + ' exercises';
  }
}

/* Apply status attrs to rendered library table rows */
function applyProgressToLib(libKey) {
  const data = loadProgress();
  const ids = LIB_IDS[libKey];
  if(!ids) return;
  const body = document.getElementById(ids.body);
  if(!body) return;
  body.querySelectorAll('tr[data-id]').forEach(tr => {
    const key = COMPOSITE_LIB_KEYS.has(libKey) ? tr.dataset.rowKey : (libKey + '-' + tr.dataset.id);
    const status = data[key] || '';
    if(status) {
      tr.setAttribute('data-status', status);
      // Update ex-name badge
      const nameCell = tr.querySelector('.ex-name');
      if(nameCell) {
        // Remove old badge if any
        const old = nameCell.querySelector('.ex-status-badge');
        if(old) old.remove();
        const badge = document.createElement('span');
        badge.className = 'ex-status-badge ' + status;
        badge.textContent = status === 'unlocked' ? '✓ DONE' : '◉ WIP';
        const altEl = nameCell.querySelector('.ex-alt');
        if(altEl) nameCell.insertBefore(badge, altEl);
        else nameCell.appendChild(badge);
      }
    } else {
      tr.removeAttribute('data-status');
      const old = tr.querySelector('.ex-status-badge');
      if(old) old.remove();
    }
  });
}

/* Patch renderLibTable and renderProgressionTree to auto-apply status */
const _origRenderLibTable = renderLibTable;
window.renderLibTable = function(libKey) {
  _origRenderLibTable(libKey);
  applyProgressToLib(libKey);
};

function applyProgressToPantheon() {
  const data = loadProgress();
  document.querySelectorAll('.pantheon-card[data-id]').forEach(card => {
    const key = `pantheon-${card.dataset.id}`;
    const status = data[key] || '';
    if(status) {
      card.setAttribute('data-status', status);
    } else {
      card.removeAttribute('data-status');
    }
    const badge = card.querySelector('.hof-card-status');
    if(status) {
      const label = status === 'unlocked' ? '✓ DONE' : '◉ WIP';
      if(badge) {
        badge.className = `hof-card-status ${status}`;
        badge.textContent = label;
      } else {
        const badgeEl = document.createElement('span');
        badgeEl.className = `hof-card-status ${status}`;
        badgeEl.textContent = label;
        const nameEl = card.querySelector('.hof-card-name');
        if(nameEl) nameEl.insertAdjacentElement('afterend', badgeEl);
      }
    } else if(badge) {
      badge.remove();
    }
  });
}

/* ── PROGRESS CONTEXT PANEL (long-press / right-click)
   _ctxTarget: { btn, exKey, sqParentName } — sqParentName set only for .sq-item presses. */
let _ctxTarget = null;

window.openProgressCtx = function(btn, exKey, exName, x, y, sqParentName) {
  _ctxTarget = { btn, exKey, sqParentName: sqParentName || null };
  const panel   = document.getElementById('progressCtxPanel');
  const overlay = document.getElementById('progressCtxOverlay');
  const nameEl  = document.getElementById('ctxExName');
  if(!panel || !overlay) return;
  if(nameEl) nameEl.textContent = exName || exKey;

  // Position panel near pointer, clamped inside viewport
  panel.style.display = 'block';
  const vw = window.innerWidth, vh = window.innerHeight;
  const pw = panel.offsetWidth  || 200;
  const ph = panel.offsetHeight || 160;
  const left = Math.min(x, vw - pw - 8);
  const top  = Math.min(y, vh - ph - 8);
  panel.style.left = Math.max(8, left) + 'px';
  panel.style.top  = Math.max(8, top)  + 'px';

  updateProgressCtxFavouriteBtn();
  updateProgressCtxMarkFirstBtn();
  overlay.classList.add('open');
};

window.closeProgressCtx = function() {
  _ctxTarget = null;
  const panel   = document.getElementById('progressCtxPanel');
  const overlay = document.getElementById('progressCtxOverlay');
  if(panel)   panel.style.display = 'none';
  if(overlay) overlay.classList.remove('open');
};

/* Show/hide and label the "Mark First" action — only relevant for SQ
   variants (i.e. when _ctxTarget.sqParentName is set). Acts as a toggle:
   pins the variant if it isn't already pinned, unpins it if it is. */
function updateProgressCtxMarkFirstBtn() {
  const btn = document.getElementById('ctxMarkFirstBtn');
  if(!btn) return;
  if(!_ctxTarget || !_ctxTarget.sqParentName) {
    btn.style.display = 'none';
    return;
  }
  btn.style.display = '';
  const markFirstMap = loadSqMarkFirst();
  const isMarked = markFirstMap[_ctxTarget.sqParentName] === _ctxTarget.exKey;
  btn.classList.toggle('active', isMarked);
  btn.innerHTML = `<span class="ctx-icon">📌</span> ${isMarked ? 'UNMARK FIRST' : 'MARK FIRST'}`;
}

window.markFirstFromCtx = function() {
  if(!_ctxTarget || !_ctxTarget.sqParentName) return;
  const parentName = _ctxTarget.sqParentName;
  const selectedKey = _ctxTarget.exKey;
  const parentInfo = window.SIDE_QUEST_PARENT_MAP ? window.SIDE_QUEST_PARENT_MAP[parentName] : null;
  const parentKey = parentInfo ? (parentInfo.libKey || parentInfo.lib || '') + '-' + parentInfo.id : null;
  // Promote the picked branch to the main node (a clean swap). If the picked
  // branch IS the original parent, clear the pin so the parent returns as
  // primary. Either way the swap is reflected on a full re-render.
  if(parentKey && selectedKey === parentKey) {
    clearSqMarkFirst(parentName);
  } else {
    setSqMarkFirst(parentName, selectedKey);
  }
  renderProgressionTree();
  applyProgressToTree();
  closeProgressCtx();
};

window.toggleFavouriteFromCtx = function() {
  if(!_ctxTarget) return;
  const next = toggleFavourite(_ctxTarget.exKey);
  const btn = _ctxTarget.btn;
  if(btn) {
    if(next) btn.setAttribute('data-favourite', 'true');
    else btn.removeAttribute('data-favourite');
  }
  updateProgressCtxFavouriteBtn();
  if(_ctxTarget.sqParentName) {
    // SQ variant: skip the full tree re-render so the open SQ panel stays put.
    closeProgressCtx();
    return;
  }
  renderProgressionTree();
  applyProgressToTree();
  closeProgressCtx();
};

window.setProgressFromCtx = function(status) {
  if(!_ctxTarget) return;

  // ── Side-quest variant: lightweight path — no tree animations/cinematics,
  // just persist progress and refresh this item's status dot in place. ──
  if(_ctxTarget.sqParentName) {
    saveProgress(_ctxTarget.exKey, status);
    const sqBtn = _ctxTarget.btn;
    if(sqBtn) {
      if(status) {
        sqBtn.dataset.sqStatus = status;
        sqBtn.setAttribute('data-status', status);
      } else {
        sqBtn.dataset.sqStatus = '';
        sqBtn.removeAttribute('data-status');
      }
    }
    applyProgressToTree();
    refreshSqPanel(_ctxTarget.sqParentName);
    refreshProgressionTreeProgress();
    if(status === 'unlocked') {
      let animBtn = sqBtn;
      if(_ctxTarget.sqParentName && sqBtn) {
        const libKey = sqBtn.dataset.sqLib || sqBtn.dataset.lib || sqBtn.dataset.libKey || '';
        const id = sqBtn.dataset.sqId || sqBtn.dataset.id || '';
        const panelSelector = '.sq-panel[data-sq-parent="' + _ctxTarget.sqParentName + '"]';
        const panel = document.querySelector(panelSelector);
        if(panel) {
          animBtn = panel.querySelector('.sq-item[data-sq-lib="' + libKey + '"][data-sq-id="' + id + '"]') || animBtn;
        }
      }
      if(animBtn) {
        animBtn.classList.add('glass-shatter-effect');
        setTimeout(() => animBtn.classList.remove('glass-shatter-effect'), 1200);
        if(typeof createGlassBreakEffect === 'function') {
          setTimeout(() => createGlassBreakEffect(animBtn, false, false), 100);
        }
      }
    }
    closeProgressCtx();
    return;
  }

  const prevPantheonUnlocked = hasPantheonAccess();
  const prevPantheonExerciseKeys = getUnlockedPantheonExerciseKeys();

  // Capture btn identity before saveProgress in case a re-render detaches it.
  const btn = _ctxTarget.btn;
  const _btnLib = btn ? (btn.dataset.lib || btn.dataset.libKey) : null;
  const _btnId  = btn ? btn.dataset.id : null;

  saveProgress(_ctxTarget.exKey, status);

  if(btn) {
    if(status) {
      btn.setAttribute('data-status', status);
      if(status === 'unlocked') {
        const isPantheon = btn.classList.contains('family-pantheon') || !!btn.closest('.pantheon-card');
        const exKey = _ctxTarget.exKey;
        const isHoF = isPantheon || btn.classList.contains('prog-item-hof') || isHallOfFameKey(exKey);
        const nowPantheonUnlocked = hasPantheonAccess();
        const nextPantheonExerciseKeys = getUnlockedPantheonExerciseKeys();
        // isFirstPantheon keys off the access transition, not isHoF, so non-HoF gate exercises still trigger the cinematic.
        const isFirstPantheon = !prevPantheonUnlocked && nowPantheonUnlocked && !isPantheon;
        let awakeningAlreadySeen = false;
        try { awakeningAlreadySeen = localStorage.getItem(PANTHEON_AWAKENING_KEY) === '1'; } catch(e) {}

        const gatesPantheon = !isPantheon &&
          typeof getPantheonUpgradeNamesForKey === 'function' &&
          getPantheonUpgradeNamesForKey(exKey).length > 0 &&
          Array.from(nextPantheonExerciseKeys).some(key => !prevPantheonExerciseKeys.has(key));

        if(isFirstPantheon && !awakeningAlreadySeen) {
          // Very first HoF unlock that opens Pantheon: full cinematic + modal
          setTimeout(() => triggerPantheonCinematic(btn), 80);
        } else if(gatesPantheon) {
          // Subsequent HoF unlocks that gate Pantheon content: card-to-centre reveal only
          setTimeout(() => playHofCardRevealAnimation(btn), 80);
        } else if(isPantheon) {
          // Pantheon completion: 5-second epic black-screen cinematic
          setTimeout(() => triggerPantheonCompletionCinematic(btn), 80);
        } else {
          setTimeout(() => {
            // Re-query by data attrs in case a re-render detached btn (getBCR returns zeros on detached nodes).
            let animBtn = btn;
            if(!btn.isConnected && _btnLib && _btnId) {
              animBtn = document.querySelector(
                `[data-lib="${_btnLib}"][data-id="${_btnId}"]`
              ) || btn;
            }
            createGlassBreakEffect(animBtn, isHoF, isPantheon);
          }, 100);
          maybeShowPantheonAwakening(prevPantheonUnlocked, status);
        }
      }
    } else {
      btn.removeAttribute('data-status');
    }
  }
  Object.keys(LIB_IDS).forEach(k => applyProgressToLib(k));
  const activeView = document.querySelector('.view.active');
  if(activeView) {
    const libKey = LIB_VIEW_MAP[activeView.id];
    if(libKey) {
      renderLibTable(libKey);
    } else if(activeView.id === 'view-hof-library' && typeof renderHof === 'function') {
      renderHof();
    } else if(activeView.id === 'view-pantheon-library' && typeof renderPantheonLibrary === 'function') {
      renderPantheonLibrary();
    }
  }
  applyProgressToTree();
  refreshProgressionTreeProgress();
  applyProgressToPantheon();
  checkPantheonUnlock(); // reveal/hide the Pantheon nav entry whenever progress changes
  closeProgressCtx();
};

/* Close panel when clicking the overlay */
document.getElementById('progressCtxOverlay').addEventListener('click', closeProgressCtx);

/* Long-press / right-click shared engine — event-delegated so it survives re-renders. */
function _initLongPress(board, initFlag, selector, resolveArgs) {
  if(!board || board[initFlag]) return;
  board[initFlag] = true;

  let pressTimer = null;
  let pressedBtn = null;
  let longPressFired = false;

  function startPress(btn, clientX, clientY) {
    pressedBtn = btn;
    longPressFired = false;
    pressTimer = setTimeout(() => {
      pressTimer = null;
      longPressFired = true;
      const args = resolveArgs(btn);
      if(!args) return;
      openProgressCtx(btn, args.exKey, args.exName, clientX, clientY, args.parentName);
    }, 480);
  }

  function cancelPress() {
    if(pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
    pressedBtn = null;
  }

  board.addEventListener('pointerdown', e => {
    const btn = e.target.closest(selector);
    if(!btn) return;
    startPress(btn, e.clientX + 10, e.clientY + 10);
  });
  board.addEventListener('pointerup', e => {
    if(longPressFired) {
      longPressFired = false;
      e.preventDefault();
      e.stopPropagation();
    }
    cancelPress();
  });
  board.addEventListener('pointercancel', cancelPress);
  board.addEventListener('pointerleave', cancelPress);
  board.addEventListener('pointermove', e => {
    if(pressedBtn && Math.hypot(e.movementX, e.movementY) > 6) cancelPress();
  });
  board.addEventListener('click', e => {
    if(!longPressFired) return;
    longPressFired = false;
    e.preventDefault();
    e.stopPropagation();
  }, true);

  // Right-click / context menu on desktop
  board.addEventListener('contextmenu', e => {
    const btn = e.target.closest(selector);
    if(!btn) return;
    e.preventDefault();
    cancelPress();
    const args = resolveArgs(btn);
    if(!args) return;
    openProgressCtx(btn, args.exKey, args.exName, e.clientX + 10, e.clientY + 10, args.parentName);
  });
}

function initProgressLongPress(board) {
  board = board || document.getElementById('progressionBody');
  _initLongPress(board, '_progPressInit', '[data-lib][data-id]', btn => {
    const exKey = getProgressBtnKey(btn);
    if(!exKey) return null;
    const exName = btn.querySelector('.prog-item-name, .hof-card-name')?.textContent || exKey;
    return { exKey, exName };
  });
}

function initSqLongPress(board) {
  board = board || document.getElementById('progressionBody');
  _initLongPress(board, '_sqPressInit', '.sq-item[data-sq-lib][data-sq-id]', btn => {
    const lib = btn.dataset.sqLib || btn.dataset.lib || '';
    const id  = btn.dataset.sqId  || btn.dataset.id  || '';
    if(!lib || !id) return null;
    const exKey = lib + '-' + id;
    const exName = btn.querySelector('.sq-item-name')?.textContent || id;
    const panel  = btn.closest('.sq-panel[data-sq-parent]');
    const parentName = panel ? panel.dataset.sqParent : null;
    return { exKey, exName, parentName };
  });
}
