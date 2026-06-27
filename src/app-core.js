/* ──────────────────────────────────────────────────────────────
   src/app-core.js — extracted from index.html (token-efficiency split)
   Core app: view routing (goTo), library table rendering, LIB_* registries, search, version log.
   Loaded as a plain (non-defer) <script src> in index.html at the
   same position it previously occupied inline — load order matters.
────────────────────────────────────────────────────────────── */

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
/* ════════════════════════════════════════════════════════════════
   GRND // WORKOUT WIKI — VERSION LOG
   ─────────────────────────────────────────────────────────────
   V1.43 — 2026-05 [CURRENT]
   ADDING A NEW VERSION:
     1. Update DEVLOG_VERSION in DevNotes.js.
     2. Add a new object to the front of DEVLOG_ENTRIES in DevNotes.js.
     3. Update this comment block.
     Keys used: grnd_theme · grnd_progress · grnd_devlog_seen · grnd_profile
     (grnd_uid / grnd_last_tier retired with firebase-sw.js removal — V1.44)
     Ranking/leaderboard keys: see js/ranking.js header for the full list.
════════════════════════════════════════════════════════════════ */

/*
 * ══════════════════════════════════════════════════════════════
 * GRND JAVASCRIPT  ·  single-file edition
 * ══════════════════════════════════════════════════════════════
 * External scripts already split:
 *   library/[name]-data.js   exercise datasets
 *   media/animations.js      glass-shard, HoF shimmer, Pantheon bg
 *   progress.js              PROG_KEY, loadProgress, saveProgress,
 *                            applyProgress*, progress context panel  ✅ done
 *   ranking.js               "Your Progress" / leaderboard replacement —
 *                            self-improvement framing, no real comparison
 *                            data. Replaces the old firebase-sw.js tier
 *                            counter + score leaderboard system, which has
 *                            been removed entirely (V1.44).             ✅ done
 *
 * Planned split when modularising:
 * ────────────────────────────────────────────────────────
 *  js/legal.js         LEGAL_CONTENT, openLegal, closeLegal
 *  DevNotes.js         DEVLOG_VERSION, DEVLOG_ENTRIES, devlog UI  ✅ done
 *  js/muscles.js       MUSCLES db, svgWrap, muscle modal
 *  js/router.js        LIB_VIEW_MAP, goTo, goBack, nav history
 *  js/tree.js          tree filter state, buildProgressionLevels,
 *                      renderProgressionTree, tree filter panel
 *  js/hof-renderer.js  HoF card renderer
 *  js/table.js         table renderer, column sorting, sticky header
 *  js/library.js       LIB_IDS, LIB_STATE, renderLibTable, toggleDetail
 *  js/search.js        global search, inline search
 *  js/progress.js      PROG_KEY, loadProgress, saveProgress,
 *                      applyProgress*, progress context panel  ✅ done → progress.js
 *  js/settings.js      restoreSavedSettings, training-focus
 *  js/theme.js         setBaseTheme, _updateThemeBtns
 *  js/modes.js         all MODE MODULE blocks (pushup … pantheon)
 *  js/menu.js          menu IIFE (open/close, reset, sendFeedback)
 *  js/profile.js       profile view/edit, photo crop (level IIFE)
 *  js/ranking.js       "Your Progress" / leaderboard replacement  ✅ done → ranking.js
 *  sw.js                registration — now back to a small standalone
 *                        inline snippet near the bottom of this file,
 *                        since it no longer rides along inside firebase-sw.js
 *  js/loader.js        loading-screen hide logic (inline script in <body>)
 * ══════════════════════════════════════════════════════════════
 */
/* ════════════════════════════════════════════════════════════════
   LEGAL MODAL
════════════════════════════════════════════════════════════════ */

/* ┌─ @file: js/legal.js ───────────────────────────────────────────── */
/* → MOVED TO settings.js § ① (js/legal.js)
   Contains: LEGAL_CONTENT, openLegal(), closeLegal(), Escape listener.
/* └─ @end:  js/legal.js ───────────────────────────────────────────── */

/* Dev note data moved to DevNotes.js */
/* ┌─ @file: js/muscles.js ─────────────────────────────────────────── */
/* ══ MUSCLE DATABASE ══════════════════════════════════════════ */

/* MUSCLES · MUSCLE_MODAL_ALIASES · MUSCLE_ANATOMY_ALIASES → anatomy.js */

/* Push-up data loaded from library/pushup/beginnerpushup-data.js */

/* Pull-up data loaded from library/pullup-data.js */

/* Squat data loaded from library/squats-data.js */


/* └─ @end:  js/muscles.js ─────────────────────────────────────────── */
/* ══ CORE DATA loaded from library/core-data.js ══════════════ */


/* ══ DIP DATA loaded from dips-data.js ════════════════════════════════════════════════ */

/* ══ WARM-UP DATA loaded from library/warmup-data.js ════════ */
/* Helper — switches the active jb-tab within its tab bar */
function switchTab(btn) {
  const bar = btn.closest('.jb-tab-bar');
  if (bar) bar.querySelector('.jb-tab.active')?.classList.remove('active');
  btn.classList.add('active');
}

/* ══ SIDE QUEST INFRASTRUCTURE ══════════════════════════════════════
   SIDE_QUEST_MAP  — built by buildSideQuestMap() after data files load.
   Key:   parent exercise name  (e.g. "Knee Push-Up")
   Value: array of exercise objects that declare sidequestKey === that name

   Workout file usage:
     sidequestKey: "Knee Push-Up"   ← add this field to any exercise object

   The map is (re)built automatically on DOMContentLoaded.
   Call buildSideQuestMap() manually if you add data at runtime.
════════════════════════════════════════════════════════════════════ */
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

/* ══ SQ "MARK FIRST" SYSTEM ═══════════════════════════════════════════
   Storage key: grnd_sq_mark_first
   Schema: { "Knee Push-Up": "pushup-12", ... }  — maps a parent exercise's
   name to the variant key (libKey-id) pinned to the top of its SQ dropdown.
════════════════════════════════════════════════════════════════════ */
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

/* ══ MARK-FIRST SWAP MODEL ════════════════════════════════════════════
   A parent tree node + its sidequest variants form one "family pool".
   The PRIMARY — the exercise shown as the main tree node, and the one
   that counts toward tier / home progress — is:
     • the variant pinned via Mark-First, if one is set; otherwise
     • the original parent (the natural default).
   The BRANCHES (shown inside the SQ panel) are the rest of the pool.
   Marking a branch "first" PROMOTES it to primary and DEMOTES the old
   primary down into the panel — a clean swap: no duplicate, no badge.
   Marking the current parent-branch clears the pin (parent → primary).
════════════════════════════════════════════════════════════════════ */
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

/* ══ EXERCISE PATH INFRASTRUCTURE ════════════════════════════════════
   PATH_MAP  — built by buildPathMap() after data files load.
   Key:   pathTag string (e.g. "one-arm")
   Value: array of exercise objects that declare pathTag === that tag,
          sorted by diff ascending.

   Distinct from sidequestKey: sidequestKey is VERTICAL — a branch within
   one family's tree (e.g. "Knee Push-Up" → its sidequests). pathTag is
   HORIZONTAL — a cross-family skill thread (e.g. every one-arm variant,
   regardless of which base family it branches from).

   Workout file usage:
     pathTag: "one-arm"   ← add this field to any exercise object

   The map is (re)built automatically on DOMContentLoaded.
   Call buildPathMap() manually if you add data at runtime.
════════════════════════════════════════════════════════════════════ */
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

/* ┌─ @file: js/router.js ──────────────────────────────────────────── */
/* ══ ROUTER ══════════════════════════════════════════════════ */
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
  'chinup-library': 'chinup',
  'frontlever-library': 'frontlever',
  'backlever-library': 'backlever',
  'combo-library':     'combo',
  'all-library':       'all',
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
    const hasProgTree = _navHistory.includes('progression-tree');
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
    const labelMap = {'home':'','metrics':'Metrics','bodyweight':'Bodyweight','gym':'Gym','gym-progression-tree':'Gym Tree','progression-tree':'Progression Tree','cardio':'Cardio','warmup-library':'Warm-Up','pushup-library':'Push-Ups','pullup-library':'Pull-Ups','chinup-library':'Chin-Ups','combo-library':'Combos','weighted-library':'Weighted Workouts','squat-library':'Squats','core-library':'Core','dip-library':'Dips','handstand-library':'Handstands','isometric-library':'Holds','frontlever-library':'Front Lever','hof-library':'Hall of Fame','pantheon-library':'Pantheon','all-library':'All Exercises','anatomy':'Anatomy // Muscles','nutrition':'Nutrition','foods-library':'Foods','recover':'Recover','recover-basics':'Recovery Basics','recover-tissue':'Heal by Injury Type','recover-supplements':'What to Take','recover-methods':'What to Do','recover-timelines':'Recovery Timelines','info-faq':'Info & FAQ'};
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
  if(v==='progression-tree') renderProgressionTree();
  else if(v==='hof-library') renderHof();
  else if(v==='pantheon-library') renderPantheonLibrary();
  else if(v==='intake-tracker') _intakeRender(); // defined in nutrition/intake-tracker.js
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
    }
  }, {passive:true});

  document.addEventListener('touchend', e => {
    if(!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - sx;
    const dy = Math.abs(e.changedTouches[0].clientY - sy);
    hideHint();
    if(dx >= MIN_SWIPE && dy < dx) goBack();
  }, {passive:true});
})();



/* ══════════════════════════════════════════════════════════════
   NUTRITION DATA
   Same schema as exercise entries so the existing renderLibTable
   pipeline works without modification. Field remapping:
     muscles  → primary/secondary nutrients (displayed as tags)
     diff     → prep complexity 1–10
     str      → muscle building suitability
     vol      → endurance/volume training suitability
     end      → fat loss / cutting suitability
     risk     → allergen risk (1=low … 5=extreme)
     cues     → prep & cooking notes
     equipment→ prep method
     position → meal timing recommendation
════════════════════════════════════════════════════════════════ */

/* ── FOOD LIBRARY ──────────────────────────────────────────── */
/* foods → library/nutrition-data.js */

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

const FRONT_LEVER_CHAIN_BRANCHES = [
  ['frontlever-13', 'frontlever-1001', 'frontlever-1006', 'frontlever-1401'],
  ['frontlever-1201', 'frontlever-1202', 'frontlever-1203', 'frontlever-1204'],
  ['frontlever-1002', 'frontlever-1005', 'frontlever-1003', 'frontlever-1004'],
];
const FRONT_LEVER_ROOT_KEYS = new Set(['frontlever-13', 'frontlever-1201', 'frontlever-1002']);

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

/* ── EXERCISE LIST CACHES ──────────────────────────────────────────────────
   Both getTreeEntries() and getHallOfFameExercises() rebuild from scratch
   on every call via flatMap+filter+sort. isHallOfFameKey() calls the latter
   inside loops, compounding the cost. Cache the results and invalidate
   whenever progress is saved (the only event that can change what is listed).
─────────────────────────────────────────────────────────────────────────── */
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

/* ══ PROGRESSION TREE MODE (bodyweight / cardio / gym) ═══════
   Persisted to localStorage so the user's choice survives reload.
══════════════════════════════════════════════════════════════ */
const TREE_MODE_KEY = 'grnd_tree_mode';
let _treeMode = (function(){
  try { const v = localStorage.getItem(TREE_MODE_KEY); return (v === 'cardio' || v === 'gym') ? v : 'bodyweight'; } catch(e){ return 'bodyweight'; }
})();

const CARDIO_TREE_SOURCES = [
  { lib:'cardio-running-library',  libKey:'cardioRunning',  family:'running',  data:cardioRunning  },
  { lib:'cardio-cycling-library',  libKey:'cardioCycling',  family:'cycling',  data:cardioCycling  },
  { lib:'cardio-hiit-library',     libKey:'cardioHIIT',     family:'hiit',     data:cardioHIIT     },
  { lib:'cardio-rowing-library',   libKey:'cardioRowing',   family:'rowing',   data:cardioRowing   },
  { lib:'cardio-recovery-library', libKey:'cardioRecovery', family:'recovery', data:cardioRecovery },
  { lib:'cardio-mobility-library', libKey:'cardioMobility', family:'mobility', data:cardioMobility },
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
    const hofOnly = !isAll && activeFilters.has('hof') && activeFilters.size === 1;
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
  // Post-render steps: apply saved progress state and re-arm event delegation.
  // These used to live in a monkey-patch wrapper in progress.js; folded here
  // so the full render sequence is visible in one place.
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
  // FIX: every consumer of this list (progress keys, DOM ids, the "all
  // exercises" library, the progression tree, applyProgressToPantheon, etc.)
  // builds its key as `pantheon-${e.id}`. Each of the 6 source arrays above
  // numbers its own `id` independently starting from 1, so without this
  // remap two unrelated exercises from different families (e.g. a push-up
  // variant and a dip variant both with id:1) would collide on the exact
  // same progress key and DOM id — marking one "unlocked" could visually or
  // logically affect the other. Giving every Pantheon exercise a globally
  // unique numeric id here fixes that at a single source point; the original
  // per-family id is preserved as `_pantheonLocalId` in case it's ever
  // needed for debugging.
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

/* ── HOF/PANTHEON "GOAL COLUMN" CELL ──────────────────────────────
   Shared by renderPantheonLibrary() and renderHof() — was previously
   redefined as a closure inside each .map() callback (once per card
   rendered). Hoisted out since it has no per-card dependencies beyond
   its own arguments. */
function renderGoalCol(label, obj, isLocked) {
  if(isLocked || !obj || !obj.suit) return `<div class="hof-goal-col"><div class="hof-goal-label">${label}</div><div class="hof-goal-val no">&#x2717;</div><div class="hof-goal-stars">${stars(0)}</div></div>`;
  return `<div class="hof-goal-col"><div class="hof-goal-label">${label}</div><div class="hof-goal-val yes">&#x2713;</div><div class="hof-goal-stars">${stars(obj.eff)}</div></div>`;
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

/* └─ @end:  js/router.js ──────────────────────────────────────────── */
/* ┌─ @file: js/hof-renderer.js ────────────────────────────────────── */
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
      if(!obj.suit) return `<div class="hof-goal-col"><div class="hof-goal-label">${label}</div><div class="hof-goal-val no">&#x2717;</div><div class="hof-goal-stars">${stars(0)}</div></div>`;
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

/* └─ @end:  js/hof-renderer.js ────────────────────────────────────── */
/* ┌─ @file: js/table.js ───────────────────────────────────────────── */
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
// Risk tier (1–5) for an exercise. Libraries like dips hardcode `risk`, but the
// push-up data files intentionally omit it and define risk via the joint profile
// (see §5 of the push-up authoring guide). When `risk` is absent we derive the
// tier from joints so extreme moves (e.g. the Planche Push-Up) no longer fall
// back to "SAFE". Formula mirrors §5: peak*0.6 + top3Avg*0.4, clamped to 1–5.
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
    if(!obj.suit) return `<div class="prescription-row"><span class="presc-goal">${goal}</span><span class="presc-na">— not recommended</span></div>`;
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

/* └─ @end:  js/table.js ───────────────────────────────────────────── */
/* ┌─ @file: js/library.js ─────────────────────────────────────────── */
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
  pullup:    [..._pullups.filter(ex => !_frontleverPullIds.has(ex.id)), ..._frontleverPullWorkouts],
  chinup:    _chinupData,
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
  all:       { body:'all-body',      shown:'all-shown',       total:'all-total',       empty:'all-empty',     search:'all-search',     filterRow:'all-filterRow',     sticky:'all-sticky',      scroll:'all-scroll'      },
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
  /* ── nutrition ── */
  foods:     { sortCol:'diff', sortDir:1, activeFilter:'all', searchTerm:'', openRow:null },
};

function isListedExercise(exercise) {
  return exercise?.listed !== false;
}

function decorateAllLibraryEntry(libKey, exercise) {
  return { ...exercise, _libKey: libKey, _uniqueKey: `${libKey}-${exercise.id}` };
}

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
    const sourceKey = libKey === 'all' ? (e._libKey || libKey) : libKey;
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
    else if(st.sortCol==='str')    { av=a.str.eff+(a.str.suit?10:0); bv=b.str.eff+(b.str.suit?10:0); }
    else if(st.sortCol==='vol')    { av=a.vol.eff+(a.vol.suit?10:0); bv=b.vol.eff+(b.vol.suit?10:0); }
    else if(st.sortCol==='end')    { av=a.end.eff+(a.end.suit?10:0); bv=b.end.eff+(b.end.suit?10:0); }
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
    const rowKey=libKey==='all'?(e._uniqueKey||`${e._libKey||'all'}-${e.id}`):`${e.id}`;
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
