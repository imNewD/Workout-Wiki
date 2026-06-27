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
  const libKey = btn.dataset.lib || btn.dataset.libKey || btn.dataset.viewLib;
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
}

/* Apply status attrs to rendered library table rows */
function applyProgressToLib(libKey) {
  const data = loadProgress();
  const ids = LIB_IDS[libKey];
  if(!ids) return;
  const body = document.getElementById(ids.body);
  if(!body) return;
  body.querySelectorAll('tr[data-id]').forEach(tr => {
    const key = libKey === 'all' ? tr.dataset.rowKey : (libKey + '-' + tr.dataset.id);
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

// renderProgressionTree post-render steps (applyProgressToTree, initProgressLongPress)
// are now folded directly into renderProgressionTree's body in router.js.

/* Apply to already-rendered library tables on page load */

/* ── PROGRESS CONTEXT PANEL (long-press / right-click menu) ───────────────
   _ctxTarget holds { btn, exKey, sqParentName } for the currently open
   context panel. sqParentName is set only when the long-pressed item is a
   side-quest variant (.sq-item) — it's the parent exercise's name, used as
   the key into grnd_sq_mark_first.
   openProgressCtx()  — positions and shows the panel near the pointer.
   closeProgressCtx() — hides the panel and clears the target.
─────────────────────────────────────────────────────────────────────────── */
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

  // Capture btn and its DOM identity BEFORE saveProgress, which may trigger
  // renderProgressionTree() (via the saveProgress monkey-patch) and detach btn.
  const btn = _ctxTarget.btn;
  const _btnLib = btn ? (btn.dataset.lib || btn.dataset.libKey || btn.dataset.viewLib) : null;
  const _btnId  = btn ? btn.dataset.id : null;

  saveProgress(_ctxTarget.exKey, status);
  // btn may now be detached from the document if the tree was re-rendered above.

  if(btn) {
    if(status) {
      btn.setAttribute('data-status', status);
      if(status === 'unlocked') {
        const isPantheon = btn.classList.contains('family-pantheon') || !!btn.closest('.pantheon-card');
        const exKey = _ctxTarget.exKey;
        const isHoF = isPantheon || btn.classList.contains('prog-item-hof') || isHallOfFameKey(exKey);
        const nowPantheonUnlocked = hasPantheonAccess();
        const nextPantheonExerciseKeys = getUnlockedPantheonExerciseKeys();
        // FIX: a Pantheon exercise's `requires` array can reference ANY
        // progress key (see pantheonRequirementMet), not just ones tagged
        // hof:true. The old `isHoF` requirement here meant the very first
        // Pantheon unlock would silently downgrade from the full cinematic
        // to the plain glass-break path whenever it happened to be gated by
        // a non-HoF exercise — inconsistent and confusing. Key off the
        // actual access transition instead, which is what we really care
        // about.
        const isFirstPantheon = !prevPantheonUnlocked && nowPantheonUnlocked && !isPantheon;
        let awakeningAlreadySeen = false;
        try { awakeningAlreadySeen = localStorage.getItem(PANTHEON_AWAKENING_KEY) === '1'; } catch(e) {}

        // Does this specific unlock gate any (additional) Pantheon workouts?
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
            // If renderProgressionTree() ran inside saveProgress, btn is now detached.
            // getBoundingClientRect() on a detached node returns all zeros, making the
            // animation fire off-screen. Re-query the live replacement by data attributes.
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

/* ── LONG-PRESS + RIGHT-CLICK ON TREE ITEMS ───────────────
   Uses event delegation on progressionBody — survives re-renders
   (setTreeFilter calls innerHTML = renderRows() which wipes DOM)
─────────────────────────────────────────────────────────── */
/* ── LONG-PRESS + RIGHT-CLICK (shared engine) ─────────────────────
   Powers both initProgressLongPress and initSqLongPress below — same
   timer/pointer/contextmenu logic, parameterised by the init-guard
   flag, the delegated selector, and how to resolve {exKey, exName,
   parentName} from the matched button. Uses event delegation so it
   survives re-renders (innerHTML wipes on every renderRows() call). */
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

/* ── LONG-PRESS + RIGHT-CLICK ON TREE ITEMS ───────────────
   Uses event delegation on progressionBody — survives re-renders
   (setTreeFilter calls innerHTML = renderRows() which wipes DOM)
─────────────────────────────────────────────────────────── */
function initProgressLongPress(board) {
  board = board || document.getElementById('progressionBody');
  _initLongPress(board, '_progPressInit', '[data-lib][data-id]', btn => {
    const exKey = getProgressBtnKey(btn);
    if(!exKey) return null;
    const exName = btn.querySelector('.prog-item-name, .hof-card-name')?.textContent || exKey;
    return { exKey, exName };
  });
}

/* ── LONG-PRESS + RIGHT-CLICK ON SQ PANEL VARIANTS ────────────────────
   Same pattern as initProgressLongPress, scoped to .sq-item buttons inside
   side-quest dropdowns. Opens the shared progress context panel with
   sqParentName set so "Mark First" / status changes target the variant. */
function initSqLongPress(board) {
  board = board || document.getElementById('progressionBody');
  _initLongPress(board, '_sqPressInit', '.sq-item[data-sq-lib][data-sq-id]', btn => {
    const lib = btn.dataset.sqLib;
    const id  = btn.dataset.sqId;
    if(!lib || !id) return null;
    const exKey = lib + '-' + id;
    const exName = btn.querySelector('.sq-item-name')?.textContent || exKey;
    const panel = btn.closest('.sq-panel');
    const parentName = panel ? panel.dataset.sqParent : null;
    return { exKey, exName, parentName };
  });
}

/* Also init now in case renderProgressionTree or Pantheon library was already called */
initProgressLongPress();
initProgressLongPress(document.getElementById('pantheonBody'));
initSqLongPress();
if(typeof checkPantheonUnlock === 'function') checkPantheonUnlock();

/* └─ @end:  js/progress.js ────────────────────────────────────────── */
