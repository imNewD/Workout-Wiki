/* ┌─ @file: js/programs.js ────────────────────────────────────────── */
/* ══ PROGRAMS MODULE ═════════════════════════════════════════════════
   Extracted from index.html. Single IIFE — manages the Programs
   library view and individual program detail pages: difficulty
   tiers, drag-and-drop reordering (window.GrndDrag), and the program
   detail panel (week tabs, exercise rows, completion dots).

   Exposes globally: window.onViewChanged, window.toggleProgFilterRow,
   window.GrndDrag, window.toggleProgView, window.openProgram,
   window.togglePgdWeek, window.toggleStartProgram,
   window.toggleProgramDot, window.toggleProgramExRow.

   Depends on globals defined elsewhere in index.html:
     goTo()       (router.js)
     LIB_DATA     (library.js)

   Load anywhere before the Programs page can be interacted with —
   placed where the old inline block was. Programs-specific CSS is
   still inline in index.html's <style> block, not yet split out.
════════════════════════════════════════════════════════════════════ */
/* ┌─ @file: js/programs.js ────────────────────────────────────────── */
/* ══ PROGRAMS MODULE ═════════════════════════════════════════════════
   Manages the Programs library view and individual program detail pages.
   To extract: move this block + Programs CSS into programs.js / programs.css.
════════════════════════════════════════════════════════════════════ */
(function(){

  /* ── DIFFICULTY TIERS ────────────────────────────────────────
     starter  = complete beginner, never trained
     beg      = knows basics (pushups, rows, hanging)
     int      = solid foundation (diamond pushups, elbow lever, L-sit)
     adv      = serious athlete (clap pushups, muscle-up, back lever)
     elite    = rare (one-arm pullup, full planche, human flag)
  ─────────────────────────────────────────────────────────── */

    // PROGRAMS data loaded from library/programs-data.js
  function renderProgramCard(p, match = true) {
    const filterClass = match ? '' : ' filtered-out';
    const statusAttr = isProgramCompleted(p.id) ? ' data-status="unlocked"' : '';
    if(p.soon) {
      return `<div class="prog-card soon${filterClass}">
        <span class="prog-card-tag ${p.tag}">${p.tagLabel}</span>
        <div class="prog-card-name">${p.name}</div>
        <div class="prog-diff-badge diff-${p.diff}">${getProgramDifficultyLabel(p.diff)}</div>
        <div class="cat-badge wip" style="align-self:flex-start;margin-top:2px">IN PROGRESS</div>
      </div>`;
    }
    return `<div class="prog-card${filterClass}"${statusAttr} data-program-id="${p.id}" onclick="openProgram(event,'${p.id}')">
      <span class="grnd-drag-handle" title="Drag to reorder">⠿</span>
      <span class="prog-card-arrow">→</span>
      <span class="prog-card-tag ${p.tag}">${p.tagLabel}</span>
      <div class="prog-card-name">${p.name}</div>
      <div class="prog-card-meta">
        <span><b>${p.weeks} wks</b> · ${p.freq}</span>
        <span>${p.progression}</span>
      </div>
      <div class="prog-diff-badge diff-${p.diff}">${getProgramDifficultyLabel(p.diff)}</div>
    </div>`;
  }

  function isProgramCompleted(programId) {
    const program = PROGRAMS.find(x => x.id === programId);
    if(!program || !program.weeks_data || !program.weeks_data.length) return false;
    const trackerKey = 'grnd_prog_tracker_' + programId;
    let tracker = {};
    try { tracker = JSON.parse(localStorage.getItem(trackerKey) || '{}'); } catch(e) {}
    const totalSessions = program.weeks_data.reduce((sum, wk) => {
      const perWeek = parseInt((wk.sessions[0]?.label||'').match(/(\d+)×/)?.[1]||'3',10);
      const weekCount = parseInt((wk.title||'').match(/(\d+)[\s–-]+(\d+)/)?.[2]||wk.title.match(/(\d+)/)?.[1]||'1',10)
        - parseInt((wk.title||'').match(/(\d+)/)?.[1]||'1',10) + 1;
      return sum + perWeek * weekCount;
    }, 0);
    const doneSessions = Object.values(tracker.dots||{}).filter(Boolean).length;
    return totalSessions > 0 && doneSessions === totalSessions;
  }

  /* How many built-in (non-custom) programs are fully completed.
     Used to gate the "Custom alarm" preference. */
  window.getCompletedPremadeProgramCount = function() {
    if(typeof PROGRAMS === 'undefined') return 0;
    return PROGRAMS.filter(p => p && !p.soon && p.tag !== 'custom' && isProgramCompleted(p.id)).length;
  };

  function playProgramShatterOnCard(programId, card) {
    if(!card || typeof window.createGlassBreakEffect !== 'function') return;
    card.dataset.lib = 'program';
    card.dataset.id = programId;
    card.classList.add('glass-shatter-effect');
    setTimeout(() => card.classList.remove('glass-shatter-effect'), 1200);
    createGlassBreakEffect(card, false, false, true);
    try { localStorage.setItem('grnd_prog_shatter_' + programId, '1'); } catch(e) {}
    try { localStorage.removeItem('grnd_prog_shatter_pending_' + programId); } catch(e) {}
  }

  function processPendingProgramShatters() {
    const grid = document.getElementById('programsGrid');
    if(!grid) return;
    PROGRAMS.forEach(p => {
      const pendingKey = 'grnd_prog_shatter_pending_' + p.id;
      if(localStorage.getItem(pendingKey) === '1') {
        const card = grid.querySelector('[data-program-id="' + p.id + '"]');
        if(card) playProgramShatterOnCard(p.id, card);
      }
    });
  }

  window.onViewChanged = function(toView, fromView) {
    if(toView === 'programs') processPendingProgramShatters();
  };

  let _activeFilter = localStorage.getItem('grnd_program_filter') || 'all';
  let _progSearch = '';
  let _progView = localStorage.getItem('progView') || 'card'; // 'card' | 'list'

  function getProgramDifficultyLabel(diff) {
    const labels = {
      starter: 'Starter',
      beg: 'Beginner',
      int: 'Intermediate',
      adv: 'Advanced',
      elite: 'Elite'
    };
    return labels[diff] || String(diff || 'Unknown');
  }

  function getProgramDifficultyRank(diff) {
    const order = { starter: 0, beg: 1, int: 2, adv: 3, elite: 4 };
    if(typeof diff === 'number') return diff;
    return order[diff] ?? 0;
  }

  function sortProgramsByDifficulty(list) {
    return [...list].sort((a, b) => {
      const da = getProgramDifficultyRank(a.diff);
      const db = getProgramDifficultyRank(b.diff);
      if(da !== db) return da - db;
      return (a.name || '').localeCompare(b.name);
    });
  }

  function programMatchesDifficultyFilter(p) {
    if(_activeFilter === 'all') return true;
    if(_activeFilter === 'beg') return p.diff === 'beg' || p.diff === 'starter';
    if(_activeFilter === 'int') return p.diff === 'int';
    if(_activeFilter === 'adv') return p.diff === 'adv';
    if(_activeFilter === 'elite') return p.diff === 'elite';
    return true;
  }

  function renderProgramRow(p, match = true) {
    const filterClass = match ? '' : ' filtered-out';
    const statusAttr = isProgramCompleted(p.id) ? ' data-status="unlocked"' : '';
    if(p.soon) return `<div class="prog-list-row${filterClass}" style="opacity:0.4;cursor:default">
      <div class="prog-list-left">
        <span class="prog-list-name">${p.name}</span>
        <span class="prog-list-sub">${p.weeks} wks · ${p.freq} · ${p.progression}</span>
      </div>
      <div class="prog-list-right">
        <span class="prog-list-tag ${p.tag}">${p.tagLabel}</span>
        <div class="prog-diff-badge diff-${p.diff}" style="font-size:0.5rem">${getProgramDifficultyLabel(p.diff)}</div>
        <span style="font-family:var(--mono);font-size:0.55rem;color:var(--text3)">SOON</span>
      </div>
    </div>`;
    return `<div class="prog-list-row${filterClass}"${statusAttr} data-program-id="${p.id}" onclick="openProgram(event,'${p.id}')">
      <span class="grnd-drag-handle" title="Drag to reorder">⠿</span>
      <div class="prog-list-left">
        <span class="prog-list-name">${p.name}</span>
        <span class="prog-list-sub">${p.weeks} wks · ${p.freq} · ${p.progression}</span>
      </div>
      <div class="prog-list-right">
        <span class="prog-list-tag ${p.tag}">${p.tagLabel}</span>
        <div class="prog-diff-badge diff-${p.diff}" style="font-size:0.5rem">${getProgramDifficultyLabel(p.diff)}</div>
        <span style="color:var(--accent);font-size:0.8rem">›</span>
      </div>
    </div>`;
  }

  function renderProgramsGrid() {
    const grid = document.getElementById('programsGrid');
    const soonGrid = document.getElementById('programsSoonGrid');
    const soonLabel = document.getElementById('progSoonLabel');
    if(!grid || !soonGrid) return;

    const active = sortProgramsByDifficulty(PROGRAMS.filter(p => !p.soon && programMatchesDifficultyFilter(p) && grndMatch([p.name, p.tagLabel||'', p.diff||'', p.freq||'', p.progression||'', p.desc||''], _progSearch)));
    const soon   = sortProgramsByDifficulty(PROGRAMS.filter(p => p.soon  && programMatchesDifficultyFilter(p) && grndMatch([p.name, p.tagLabel||'', p.diff||'', p.freq||'', p.progression||'', p.desc||''], _progSearch)));
    const isList = _progView === 'list';

    [grid, soonGrid].forEach(el => { el.classList.toggle('list-mode', isList); el.classList.toggle('prog-lib-grid', !isList); });
    if(isList) { grid.classList.remove('prog-lib-grid'); soonGrid.classList.remove('prog-lib-grid'); }
    else { grid.classList.add('prog-lib-grid'); soonGrid.classList.add('prog-lib-grid'); }

    grid.innerHTML     = active.map(p => isList ? renderProgramRow(p) : renderProgramCard(p)).join('');
    soonGrid.innerHTML = soon.map(p => isList ? renderProgramRow(p) : renderProgramCard(p)).join('');
    if(soonLabel) soonLabel.style.display = soon.length ? '' : 'none';

    if(window.GrndDrag) {
      window.GrndDrag.updateContainer(grid);
      window.GrndDrag.updateContainer(soonGrid);
    }

    const btn = document.getElementById('progViewToggle');
    if(btn) btn.textContent = isList ? '⊞ GRID' : '☰ LIST';
    updateProgramsFilterRow();
    const progFilterBtn = document.getElementById('progFilterBtn');
    if(progFilterBtn && typeof countActiveTreeFilters === 'function') {
      progFilterBtn.classList.toggle('active', countActiveTreeFilters() > 0);
    }
  }

  function updateProgramsFilterRow() {
    const filterRow = document.getElementById('programs-filterRow');
    if(!filterRow) return;
    filterRow.querySelectorAll('.filter-chip').forEach(x => {
      x.classList.toggle('on', x.dataset.filter === _activeFilter);
    });
  }

  window.toggleProgFilterRow = function() {
    const wrap = document.querySelector('.filter-row-wrap');
    const btn = document.getElementById('progFilterBtn');
    if(!wrap) return;
    wrap.classList.toggle('filters-hidden');
    if(btn) btn.classList.toggle('active', wrap.classList.contains('filters-hidden'));
  };

  window.GrndDrag = {
    _dragItem: null,
    _currentContainer: null,
    _dropTarget: null,
    _dropBefore: false,

    init() {
      document.addEventListener('dragstart', e => {
        if(e.target.closest('.grnd-drag-container')) e.preventDefault();
      }, true);
      document.querySelectorAll('.grnd-drag-container').forEach(container => this._attachContainer(container));
    },

    _attachContainer(container) {
      if(container._grndDragBound) return;
      const key = container.dataset.dragKey;
      if(!key) return;
      container._grndDragBound = true;
      container.classList.add('drag-ready');
      container.addEventListener('dragstart', e => e.preventDefault(), { capture: true });
      container.addEventListener('dragover', e => this._onDragOver(e, container));
      container.addEventListener('drop', e => this._onDrop(e, container));
      container.addEventListener('dragend', e => { e.preventDefault(); this._onDragEnd(e, container); });
      this.updateContainer(container);
    },

    updateContainer(container) {
      const key = container.dataset.dragKey;
      if(!key) return;
      this._attachHandles(container);
      if(key !== 'grnd_program_order') {
        this.restoreOrder(container, key);
      }
    },

    _attachHandles(container) {
      Array.from(container.querySelectorAll('.lib-item, .prog-card, .prog-list-row')).forEach(item => {
        item.draggable = false;
        // Do NOT set touchAction on the whole item — that kills page scrolling.
        // touch-action:none is already on .grnd-drag-handle in CSS.
        item.addEventListener('dragover', e => this._onDragOver(e, container));
        item.addEventListener('drop', e => this._onDrop(e, container));
        item.addEventListener('click', e => {
          if(this._dragItem) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
        // Do NOT attach pointerdown to the whole item — drag must only start
        // from the ⠿ handle, so touching the card body scrolls normally.
        const handle = item.querySelector('.grnd-drag-handle');
        if(handle) {
          handle.draggable = false;
          handle.style.touchAction = 'none'; // block scroll only on the handle
          handle.addEventListener('click', e => e.stopPropagation());
          handle.addEventListener('dragstart', e => e.preventDefault());
          handle.addEventListener('dragend', e => e.preventDefault());
          handle.addEventListener('dragenter', e => e.preventDefault());
          handle.addEventListener('pointerdown', e => this._onPointerDown(e, container));
        }
      });
    },

    _onPointerDown(e, container) {
      if(e.button !== 0 && e.pointerType !== 'touch') return;
      // Only allow drag to start when the user grabbed the ⠿ handle
      if(!e.target.closest('.grnd-drag-handle')) return;
      const item = e.target.closest('.lib-item, .prog-card, .prog-list-row');
      if(!item || !container.contains(item)) return;
      e.preventDefault();
      item.setPointerCapture?.(e.pointerId);
      this._pointerId = e.pointerId;
      this._pointerItem = item;
      this._currentContainer = container;
      this._pointerStartX = e.clientX;
      this._pointerStartY = e.clientY;
      this._pointerActive = false;
      if(!this._boundPointerMove) {
        this._boundPointerMove = this._onPointerMove.bind(this);
        this._boundPointerUp = this._onPointerUp.bind(this);
      }
      document.addEventListener('pointermove', this._boundPointerMove);
      document.addEventListener('pointerup', this._boundPointerUp);
      document.addEventListener('pointercancel', this._boundPointerUp);
    },

    _onPointerMove(e) {
      if(!this._pointerItem || !this._currentContainer) return;
      const dx = e.clientX - this._pointerStartX;
      const dy = e.clientY - this._pointerStartY;
      if(!this._pointerActive) {
        if(Math.abs(dx) + Math.abs(dy) < 10) return;
        this._pointerActive = true;
        this._dragItem = this._pointerItem;
        this._dragItem.classList.add('grnd-dragging');
        this._createGhost(e);
      }
      this._moveGhost(e);
      this._updateDropIndicator(e);
    },

    _onPointerUp(e) {
      if(this._pointerActive) {
        this._finalizePointerDrag(e);
      }
      this._cleanupPointerDrag();
    },

    _createGhost(e) {
      if(this._ghost) this._ghost.remove();
      const ghost = this._dragItem.cloneNode(true);
      ghost.classList.add('grnd-drag-ghost');
      ghost.style.width = `${this._dragItem.offsetWidth}px`;
      ghost.style.pointerEvents = 'none';
      ghost.style.position = 'fixed';
      ghost.style.margin = '0';
      document.body.appendChild(ghost);
      this._ghost = ghost;
      this._moveGhost(e);
    },

    _moveGhost(e) {
      if(!this._ghost) return;
      this._ghost.style.left = `${e.clientX + 12}px`;
      this._ghost.style.top = `${e.clientY + 12}px`;
      this._ghost.style.transform = 'none';
    },

    _updateDropIndicator(e) {
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if(!target) {
        this._clearDropIndicator();
        return;
      }
      const item = target.closest('.lib-item, .prog-card, .prog-list-row');
      this._clearDropIndicator();
      if(!item || item === this._dragItem) {
        this._dropTarget = null;
        return;
      }
      const rect = item.getBoundingClientRect();
      const before = e.clientY < rect.top + rect.height / 2;
      item.classList.toggle('grnd-drop-before', before);
      item.classList.toggle('grnd-drop-after', !before);
      this._dropTarget = item;
      this._dropBefore = before;
    },

    _clearDropIndicator() {
      if(this._currentContainer) {
        this._currentContainer.querySelectorAll('.grnd-drop-before,.grnd-drop-after').forEach(el => el.classList.remove('grnd-drop-before','grnd-drop-after'));
      }
    },

    _finalizePointerDrag(e) {
      this._clearDropIndicator();
      if(this._dropTarget && this._dragItem && this._currentContainer.contains(this._dropTarget)) {
        if(this._dropTarget !== this._dragItem) {
          if(this._dropBefore) this._currentContainer.insertBefore(this._dragItem, this._dropTarget);
          else this._currentContainer.insertBefore(this._dragItem, this._dropTarget.nextSibling);
        }
      } else if(this._currentContainer && this._dragItem && this._currentContainer.contains(this._dragItem)) {
        this._currentContainer.appendChild(this._dragItem);
      }
      if(this._currentContainer) this.saveOrder(this._currentContainer.dataset.dragKey);
      if(this._dragItem) this._dragItem.classList.remove('grnd-dragging');
      if(this._ghost) { this._ghost.remove(); this._ghost = null; }
      this._dragItem = null;
      this._dropTarget = null;
      this._dropBefore = false;
    },

    _cleanupPointerDrag() {
      if(this._pointerItem && this._pointerStartX != null) {
        this._pointerItem.releasePointerCapture?.(this._pointerId);
      }
      this._pointerItem = null;
      this._pointerId = null;
      this._pointerStartX = null;
      this._pointerStartY = null;
      this._pointerActive = false;
      document.removeEventListener('pointermove', this._boundPointerMove);
      document.removeEventListener('pointerup', this._boundPointerUp);
      document.removeEventListener('pointercancel', this._boundPointerUp);
    },

    _onDragStart(e, container) {
      const item = e.target.closest('.lib-item, .prog-card, .prog-list-row');
      if(!item || !container.contains(item)) return;
      this._dragItem = item;
      this._currentContainer = container;
      item.classList.add('grnd-dragging');
      e.dataTransfer.effectAllowed = 'move';
      try {
        e.dataTransfer.setData('text/plain', item.dataset.dragId || item.dataset.programId || '');
        const invisible = new Image();
        invisible.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
        if(typeof e.dataTransfer.setDragImage === 'function') {
          e.dataTransfer.setDragImage(invisible, 0, 0);
        }
        this._nativeGhost = null;
      } catch (err) {}
    },

    _onDragOver(e, container) {
      e.preventDefault();
      if(!this._dragItem || this._currentContainer == null) return;
      if(container !== this._currentContainer && container.dataset.dragKey !== this._currentContainer.dataset.dragKey) return;
      const item = e.target.closest('.lib-item, .prog-card, .prog-list-row');
      container.querySelectorAll('.grnd-drop-before,.grnd-drop-after').forEach(el => el.classList.remove('grnd-drop-before','grnd-drop-after'));
      if(!item || item === this._dragItem) return;
      const rect = item.getBoundingClientRect();
      const before = e.clientY < rect.top + rect.height / 2;
      item.classList.toggle('grnd-drop-before', before);
      item.classList.toggle('grnd-drop-after', !before);
    },

    _onDrop(e, container) {
      e.preventDefault();
      if(!this._dragItem || this._currentContainer == null) return;
      if(container !== this._currentContainer && container.dataset.dragKey !== this._currentContainer.dataset.dragKey) return;
      const item = e.target.closest('.lib-item, .prog-card, .prog-list-row');
      container.querySelectorAll('.grnd-drop-before,.grnd-drop-after').forEach(el => el.classList.remove('grnd-drop-before','grnd-drop-after'));
      if(!item || item === this._dragItem) {
        container.appendChild(this._dragItem);
      } else {
        const before = item.classList.contains('grnd-drop-before');
        if(before) container.insertBefore(this._dragItem, item);
        else container.insertBefore(this._dragItem, item.nextSibling);
      }
      this.saveOrder(container.dataset.dragKey);
    },

    _onDragEnd(e, container) {
      if(this._dragItem) this._dragItem.classList.remove('grnd-dragging');
      if(this._nativeGhost) { this._nativeGhost.remove(); this._nativeGhost = null; }
      container.querySelectorAll('.grnd-drop-before,.grnd-drop-after').forEach(el => el.classList.remove('grnd-drop-before','grnd-drop-after'));
      this._dragItem = null;
      this._currentContainer = null;
    },

    saveOrder(key) {
      if(!key) return;
      const containers = Array.from(document.querySelectorAll(`.grnd-drag-container[data-drag-key="${key}"]`));
      const order = containers.flatMap(container => Array.from(container.querySelectorAll('.lib-item, .prog-card, .prog-list-row')))
        .map(item => item.dataset.dragId || item.dataset.programId || item.id || '')
        .filter(Boolean);
      try { localStorage.setItem(key, JSON.stringify(order)); } catch (e) {}
    },

    restoreOrder(container, key) {
      if(!container || !key) return;
      const raw = localStorage.getItem(key);
      if(!raw) return;
      let order = [];
      try { order = JSON.parse(raw); } catch (e) { return; }
      if(!Array.isArray(order)) return;
      const items = Array.from(container.querySelectorAll('.lib-item, .prog-card, .prog-list-row'));
      const map = new Map(items.map(item => [(item.dataset.dragId || item.dataset.programId || item.id || ''), item]));
      order.forEach(id => {
        const item = map.get(id);
        if(item && container.contains(item)) {
          container.appendChild(item);
          map.delete(id);
        }
      });
    },

    resetOrder(key) {
      try { localStorage.removeItem(key); } catch (e) {}
      window.location.reload();
    },

    handleClick(event, id) {
      if(this._dragItem) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      goTo(id);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    if(window.GrndDrag) window.GrndDrag.init();
  });

  window.toggleProgView = function() {
    _progView = _progView === 'card' ? 'list' : 'card';
    localStorage.setItem('progView', _progView);
    renderProgramsGrid();
  };

  function setProgramsFilter(filter) {
    _activeFilter = filter || 'all';
    localStorage.setItem('grnd_program_filter', _activeFilter);
    updateProgramsFilterRow();
    renderProgramsGrid();
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderProgramsGrid();
    if(document.getElementById('view-programs')?.classList.contains('active')) {
      processPendingProgramShatters();
    }

    const filterRow = document.getElementById('programs-filterRow');
    if(filterRow) {
      filterRow.addEventListener('click', e => {
        const c = e.target.closest('.filter-chip');
        if(!c) return;
        setProgramsFilter(c.dataset.filter);
      });
    }

    const progSearchEl = document.getElementById('programs-search');
    if(progSearchEl) {
      progSearchEl.addEventListener('input', e => {
        _progSearch = e.target.value.trim();
        renderProgramsGrid();
      });
    }
    initCustomPrograms();
    renderProgramsGrid();
  });

  /* ── Shared exercise lookup ──────────────────────────────── */
  function lookupExerciseFull(name) {
    const SKIP_KEYS = new Set(['all','foods','hydration','mealTiming','nutrients','vitamins','minerals']);
    // Skill-specific libraries first; warmup/cardio/stretching last (better tiebreak)
    const KEY_PRIORITY = ['backlever','frontlever','isometric','pullup','chinup','pushup','planche','dip','handstand','combo','squat','core','weighted','gymChest','gymBack','gymShoulders','gymLegs','gymArms','gymCore','warmup','stretching','cardioRunning','cardioCycling','cardioHIIT','cardioRowing','cardioRecovery','cardioMobility'];
    const allLibKeys = (typeof LIB_DATA !== 'undefined')
      ? Object.keys(LIB_DATA)
        .filter(k => !SKIP_KEYS.has(k))
        .sort((a, b) => {
          const ia = KEY_PRIORITY.indexOf(a), ib = KEY_PRIORITY.indexOf(b);
          return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
        })
      : ['backlever','frontlever','isometric','pullup','chinup','pushup','planche','dip','handstand','combo','squat','core','warmup'];

    // Strip trailing equipment tag: " | (Bar)", " (Bar)", " — Parallettes" etc.
    const stripEquip = s => s.toLowerCase()
      .replace(/\s*\|?\s*\([^)]+\)\s*$/, '')
      .replace(/\s*[—\-]\s*[A-Za-z][A-Za-z\s]*$/, '')
      .trim();

    // Expand common abbreviations used in program names
    const expandAbbr = s => s.toLowerCase()
      .replace(/\bbl\b/g, 'back lever')
      .replace(/\bfl\b/g, 'front lever');

    const normName     = stripEquip(name);
    const normExpanded = expandAbbr(normName);

    // Pass 1: exact or stripped-equip match
    for(const key of allLibKeys) {
      const src = LIB_DATA[key];
      const arr = Array.isArray(src) ? src : (src?.data || []);
      const match = arr.find(e => {
        const en   = e.name.toLowerCase();
        const ea   = e.alt ? e.alt.toLowerCase() : '';
        const en_s = stripEquip(en);
        return en === name.toLowerCase()
          || ea === name.toLowerCase()
          || en_s === normName
          || en_s === normExpanded;
      });
      if(match) return { entry: match, libKey: key };
    }

    // Pass 2: scored fuzzy — expand abbreviations in entry names too, pick best precision score
    // score = matched words / entry word count (favours entries where most words match)
    const searchWords = (normExpanded || normName).split(' ').filter(w => w.length > 2);
    let bestScore = 0, bestEntry = null, bestKey = null;
    for(const key of allLibKeys) {
      const src = LIB_DATA[key];
      const arr = Array.isArray(src) ? src : (src?.data || []);
      for(const e of arr) {
        const en_e = expandAbbr(stripEquip(e.name.toLowerCase()));
        const entryWords = en_e.split(' ').filter(w => w.length > 2);
        const matchCount = searchWords.filter(w => en_e.includes(w)).length;
        if(matchCount === 0) continue;
        const score = matchCount / Math.max(entryWords.length, 1);
        if(score > bestScore) { bestScore = score; bestEntry = e; bestKey = key; }
      }
    }
    if(bestEntry && bestScore > 0) return { entry: bestEntry, libKey: bestKey };
    return null;
  }

  function lookupExerciseData(name) {
    return lookupExerciseFull(name)?.entry || null;
  }

  window.viewExInLibrary = function(libKey, exId) {
    goTo(libKey + '-library');
    setTimeout(function() {
      const detailEl = document.getElementById('detail-' + libKey + '-' + exId);
      if(!detailEl) return;
      if(!detailEl.classList.contains('open')) {
        if(typeof toggleDetail === 'function') toggleDetail(libKey, String(exId));
      }
      setTimeout(function() { detailEl.scrollIntoView({behavior:'smooth', block:'center'}); }, 120);
    }, 80);
  };

  window.openProgram = function(evtOrProgramId, maybeProgramId) {
    const programId = typeof evtOrProgramId === 'string' ? evtOrProgramId : maybeProgramId;
    const triggerCard = evtOrProgramId && evtOrProgramId.target ? evtOrProgramId.target.closest('.prog-card, .prog-list-row') : null;
    const p = PROGRAMS.find(x => x.id === programId);
    if(!p) return;

    const title = document.getElementById('pgd-title');
    const crumb = document.getElementById('pgd-breadcrumb-name');
    const metaRow = document.getElementById('pgd-meta-row');
    const body = document.getElementById('pgd-body');

    if(title)   title.textContent = p.name.toUpperCase();
    if(crumb)   crumb.textContent = p.name.toUpperCase();
    if(metaRow) metaRow.innerHTML = [
      p.weeks ? `<span class="pgd-chip">${p.weeks} WEEKS</span>` : '',
      p.freq  ? `<span class="pgd-chip">${p.freq}</span>` : '',
      p.progression ? `<span class="pgd-chip">${p.progression.toUpperCase()}</span>` : '',
      `<span class="pgd-chip" style="border:1px solid currentColor;background:transparent;color:${
        p.diff==='starter'?'#888':p.diff==='beg'?'#2a9d5c':p.diff==='int'?'#8fc05a':p.diff==='adv'?'#f4a261':'#e63946'
      }">${getProgramDifficultyLabel(p.diff).toUpperCase()}</span>`,
    ].filter(Boolean).join('');

    // Inject start button + progress bar into hero
    const hero = document.querySelector('#view-program-detail .pgd-hero');
    if(hero) {
      const existingWrap = hero.querySelector('.pgd-start-wrap');
      if(existingWrap) existingWrap.remove();

      if(p.weeks_data && p.weeks_data.length) {
        const progKey = 'grnd_prog_tracker_' + programId;
        let tracker = {};
        try { tracker = JSON.parse(localStorage.getItem(progKey) || '{}'); } catch(e) {}
        const isStarted = !!tracker.started;
        const isCustomProgram = p.tag === 'custom';

        const totalSessions = p.weeks_data.reduce((sum, wk) => {
          const perWeek = parseInt((wk.sessions[0]?.label||'').match(/(\d+)×/)?.[1]||'3',10);
          const weekCount = parseInt((wk.title||'').match(/(\d+)[\s–-]+(\d+)/)?.[2]||wk.title.match(/(\d+)/)?.[1]||'1',10)
            - parseInt((wk.title||'').match(/(\d+)/)?.[1]||'1',10) + 1;
          return sum + perWeek * weekCount;
        }, 0);

        const doneSessions = Object.values(tracker.dots||{}).filter(Boolean).length;
        const pct = totalSessions ? Math.round((doneSessions / totalSessions) * 100) : 0;

        const completionFlag = 'grnd_prog_shatter_' + programId;
        const pendingFlag = 'grnd_prog_shatter_pending_' + programId;
        if(totalSessions > 0 && doneSessions === totalSessions && !localStorage.getItem(completionFlag)) {
          const card = triggerCard || document.querySelector('[data-program-id="' + programId + '"]');
          if(card) {
            card.dataset.status = 'unlocked';
          }
          try { localStorage.setItem(pendingFlag, '1'); } catch(e) {}
        }

        const wrap = document.createElement('div');
        wrap.className = 'pgd-start-wrap';
        wrap.innerHTML = `
          <button class="pgd-start-btn${isStarted?' active':''}" onclick="toggleStartProgram('${programId}')">
            ${isStarted ? '▶ IN PROGRESS' : '▶ START'}
          </button>
          ${isCustomProgram ? `<button class="pgd-edit-btn" onclick="editCustomProgram('${programId}')">Edit</button>` : ''}
          ${isCustomProgram ? `<button class="pgd-delete-btn" onclick="deleteCustomProgram('${programId}')">Delete</button>` : ''}
          ${isStarted ? `
          <div class="pgd-prog-outer">
            <div class="pgd-prog-track"><div class="pgd-prog-fill" id="pgdProgFill-${programId}" style="width:${pct}%"></div></div>
            <div class="pgd-prog-label" id="pgdProgLabel-${programId}">${doneSessions} / ${totalSessions} sessions · ${pct}%</div>
          </div>` : ''}
        `;
        hero.appendChild(wrap);
      }
    }

    if(!body) { goTo('program-detail'); return; }

    /* ── Has real weeks data ─────────────────────────────── */
    if(p.weeks_data && p.weeks_data.length) {
      const progKey = 'grnd_prog_tracker_' + programId;
      let tracker = {};
      try { tracker = JSON.parse(localStorage.getItem(progKey) || '{}'); } catch(e) {}
      const dots = tracker.dots || {};

      const weekBlocks = p.weeks_data.map((wk, wi) => {
        const sessionsHtml = wk.sessions.map(sess => {
        const exRows = sess.exercises.map((ex, ei) => {
            const uid = `pgd-ex-${wi}-${ei}-${Math.random().toString(36).slice(2,6)}`;
            const safeName = ex.name.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
            const safeNote = (ex.note||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'");

            // Look up library data for rich display
            const libExFull  = lookupExerciseFull(ex.name);
            const libEx      = libExFull?.entry || null;
            const libExKey   = libExFull?.libKey || null;

            const exInjFlagged = libEx && typeof getInjuryFlaggedJoints === 'function'
              ? getInjuryFlaggedJoints(libEx.joints) : [];
            const exIsInj = exInjFlagged.length > 0;

            const musclesHtml = libEx
              ? (libEx.muscles||[]).map(m => `<span class="mtag${m.p?' primary':''}">${m.n}</span>`).join('')
              : '';

            let statsHtml = '';
            if(libEx) {
              const dc = diffColor(libEx.diff);
              const dp = (libEx.diff/10)*100;
              const dd = Number.isInteger(libEx.diff) ? libEx.diff : libEx.diff.toFixed(1);
              const diffHtml = `<div class="diff-wrap" style="gap:5px"><div class="diff-bar"><div class="diff-fill" style="width:${dp}%;background:${dc}"></div></div><span class="diff-num" style="color:${dc};font-size:0.65rem">${dd}/10</span></div>`;
              const rm = RISK_META[libEx.risk] || RISK_META[1];
              const riskHtml = `<div class="risk-wrap" style="font-size:0.6rem"><span class="risk-dot" style="background:${rm.c};box-shadow:0 0 5px ${rm.c}88"></span><span style="color:${rm.c}">${rm.l}</span></div>`;
              statsHtml = `<div class="pgd-ex-stats">
                ${diffHtml}
                <div class="pgd-ex-stat-divider"></div>
                ${riskHtml}
              </div>`;
            }

            const safeLibKey = (libExKey||'').replace(/'/g,"\\'");
            const safeExId   = libEx ? String(libEx.id).replace(/'/g,"\\'") : '';
            return `
              <div class="pgd-ex-wrap${exIsInj?' pgd-inj-flagged':''}" id="${uid}"${libExKey ? ` data-lib-key="${safeLibKey}" data-ex-id="${safeExId}"` : ''}>
                <div class="pgd-exercise-row clickable" onclick="toggleProgramExRow('${uid}','${safeName}','${safeNote}','${safeLibKey}','${safeExId}')">
                  <div class="pgd-ex-main">
                    <div class="pgd-ex-info">
                      <span class="pgd-ex-name">${ex.name}${exIsInj ? '<span class="inj-warn-badge">⚠ CAUTION</span>' : ''}</span>
                      ${ex.note ? `<span class="pgd-ex-note">${ex.note}</span>` : ''}
                      ${musclesHtml ? `<div class="pgd-ex-muscles muscles">${musclesHtml}</div>` : ''}
                    </div>
                    <div class="pgd-ex-right">
                      <div class="pgd-ex-badge">
                        <span class="pgd-ex-sets">${ex.sets}×</span>
                        <span class="pgd-ex-reps">${ex.reps}</span>
                      </div>
                      <span class="pgd-ex-chevron">›</span>
                    </div>
                  </div>
                  ${statsHtml}
                </div>
                <div class="pgd-ex-inline" id="${uid}-detail"></div>
              </div>`;
          }).join('');
          return `<div class="pgd-session">
            <div class="pgd-session-label">${sess.label}</div>
            ${exRows}
          </div>`;
        }).join('');

        // Calculate session dots for this week.
        // Custom programs should show one dot per actual day/session, including rest days.
        const isCustomProgram = p.tag === 'custom';
        let numDots = 0;
        if(isCustomProgram) {
          numDots = wk.sessions.length;
        } else {
          const freqMatch = (wk.sessions[0]?.label||'').match(/(\d+)×/);
          const sessPerWeek = parseInt(freqMatch?.[1]||'3', 10);
          const weekSpan = (() => {
            const m = (wk.title||'').match(/(\d+)\s*[–-]\s*(\d+)/);
            if(m) return parseInt(m[2],10) - parseInt(m[1],10) + 1;
            return 1;
          })();
          numDots = sessPerWeek * weekSpan;
        }
        const dotsHtml = Array.from({length: numDots}, (_,di) => {
          const session = Array.isArray(wk.sessions) && wk.sessions.length ? wk.sessions[di % wk.sessions.length] : {};
          const dotKey = `w${wi}_d${di}`;
          const isDone = !!dots[dotKey];
          const isRest = /rest/i.test(session.label || '') || !(Array.isArray(session.exercises) && session.exercises.length);
          const title = isRest ? 'Rest day' : `Session ${di+1}`;
          return `<div class="pgd-session-dot${isDone?' done':''}${isRest?' rest':''}" onclick="toggleProgramDot('${programId}',${wi},${di},event)" title="${title}"></div>`;
        }).join('');

        return `<div class="pgd-week" id="pgd-week-${wi}">
          <div class="pgd-week-hdr" onclick="togglePgdWeek(${wi})">
            <div style="flex:1;min-width:0">
              <div class="pgd-week-title">${wk.title}</div>
              <div class="pgd-week-sub">${wk.phase}</div>
              <div class="pgd-week-dots" onclick="event.stopPropagation()">${dotsHtml}</div>
            </div>
            <span class="pgd-week-arrow">▶</span>
          </div>
          <div class="pgd-week-body">
            ${wk.note ? `<div class="pgd-week-note">${wk.note}</div>` : ''}
            ${sessionsHtml}
          </div>
        </div>`;
      }).join('');

      body.innerHTML = `
        ${p.desc ? `<div class="pgd-desc-block">${p.desc}</div>` : ''}
        <div class="pgd-section-label">WEEK BY WEEK</div>
        ${weekBlocks}
        <div class="pgd-tip-block">
          <div class="pgd-tip-label">💡 TIPS</div>
          <div class="pgd-tip-text">Only rest if you have muscle pain that affects workouts. If you miss a week, repeat it — don't skip ahead. Progress is non-linear.</div>
        </div>
      `;

    /* ── Stub for programs without data yet ─────────────── */
    } else {
      body.innerHTML = `
        ${p.desc ? `<div class="pgd-desc-block">${p.desc}</div>` : ''}
        <div class="pgd-stub">
          📋 PROGRAM CONTENT COMING SOON<br>
          <span style="font-size:0.62rem;opacity:0.5">Week-by-week sessions will appear here</span>
        </div>
      `;
    }

    goTo('program-detail');
  };

  window.togglePgdWeek = function(n) {
    const el = document.getElementById('pgd-week-' + n);
    if(!el) return;
    el.classList.toggle('open');
  };

  /* ── START / TOGGLE PROGRAM ──────────────────────────────── */
  window.toggleStartProgram = function(programId) {
    const progKey = 'grnd_prog_tracker_' + programId;
    let tracker = {};
    try { tracker = JSON.parse(localStorage.getItem(progKey) || '{}'); } catch(e) {}
    if(tracker.started) {
      if(!confirm('Reset program progress? All session checkmarks will be cleared.')) return;
      tracker = {};
    } else {
      tracker.started = Date.now();
      tracker.dots = tracker.dots || {};
    }
    try { localStorage.setItem(progKey, JSON.stringify(tracker)); } catch(e) {}
    openProgram(programId); // re-render
  };

  /* ── SESSION DOT TOGGLE ──────────────────────────────────── */
  window.toggleProgramDot = function(programId, weekIdx, dotIdx, e) {
    const progKey = 'grnd_prog_tracker_' + programId;
    let tracker = {};
    try { tracker = JSON.parse(localStorage.getItem(progKey) || '{}'); } catch(e) {}
    if(!tracker.started) { tracker.started = Date.now(); }
    if(!tracker.dots) tracker.dots = {};
    const key = 'w' + weekIdx + '_d' + dotIdx;
    tracker.dots[key] = !tracker.dots[key];
    try { localStorage.setItem(progKey, JSON.stringify(tracker)); } catch(e) {}

    // Update dot visually without full re-render
    const dot = e.target;
    dot.classList.toggle('done', !!tracker.dots[key]);

    // Update progress bar
    const p = PROGRAMS.find(x => x.id === programId);
    if(p && p.weeks_data) {
      const totalSessions = p.weeks_data.reduce((sum, wk) => {
        const perWeek = parseInt((wk.sessions[0]?.label||'').match(/(\d+)×/)?.[1]||'3',10);
        const weekCount = (() => {
          const m=(wk.title||'').match(/(\d+)\s*[–-]\s*(\d+)/);
          if(m) return parseInt(m[2],10)-parseInt(m[1],10)+1;
          return 1;
        })();
        return sum + perWeek * weekCount;
      }, 0);
      const doneSessions = Object.values(tracker.dots).filter(Boolean).length;
      const pct = totalSessions ? Math.round((doneSessions/totalSessions)*100) : 0;
      const fill = document.getElementById('pgdProgFill-'+programId);
      const label = document.getElementById('pgdProgLabel-'+programId);
      if(fill) fill.style.width = pct + '%';
      if(label) label.textContent = doneSessions + ' / ' + totalSessions + ' sessions · ' + pct + '%';

      if(doneSessions === totalSessions) {
        const completionFlag = 'grnd_prog_shatter_' + programId;
        const pendingFlag = 'grnd_prog_shatter_pending_' + programId;
        if(!localStorage.getItem(completionFlag)) {
          try { localStorage.setItem(pendingFlag, '1'); } catch(e) {}
        }
      }

      // Update start button if needed
      const btn = document.querySelector('.pgd-start-btn');
      if(btn && !btn.classList.contains('active')) {
        btn.classList.add('active');
        btn.textContent = '▶ IN PROGRESS';
      }
      // Show progress bar if not visible
      const outer = document.querySelector('.pgd-prog-outer');
      if(!outer) {
        // re-render hero bar
        const wrap = document.querySelector('.pgd-start-wrap');
        if(wrap) {
          wrap.innerHTML = `
            <button class="pgd-start-btn active" onclick="toggleStartProgram('${programId}')">▶ IN PROGRESS</button>
            <div class="pgd-prog-outer">
              <div class="pgd-prog-track"><div class="pgd-prog-fill" id="pgdProgFill-${programId}" style="width:${pct}%"></div></div>
              <div class="pgd-prog-label" id="pgdProgLabel-${programId}">${doneSessions} / ${totalSessions} sessions · ${pct}%</div>
            </div>`;
        }
      }
    }
  };

  /* ── INLINE EXERCISE ROW TOGGLE ─────────────────────────────── */
  window.toggleProgramExRow = function(uid, name, note, libKeyHint, exIdHint) {
    const wrap   = document.getElementById(uid);
    const detail = document.getElementById(uid + '-detail');
    if(!wrap || !detail) return;

    const isOpening = !wrap.classList.contains('open');

    // Close any other open wrap in same session block
    const session = wrap.closest('.pgd-session');
    if(session) {
      session.querySelectorAll('.pgd-ex-wrap.open').forEach(w => {
        if(w !== wrap) w.classList.remove('open');
      });
    }

    wrap.classList.toggle('open', isOpening);

    if(isOpening && !detail.dataset.rendered) {
      detail.dataset.rendered = '1';

      // Use full lookup to get both entry and libKey
      const lookupResult = lookupExerciseFull(name);
      const found    = lookupResult?.entry || null;
      const foundKey = lookupResult?.libKey || libKeyHint || null;
      const foundId  = found?.id != null ? found.id : (exIdHint || null);

      if(found) {
        const kcalHtml = Array.isArray(found.kcalPerRep) && found.kcalPerRep.length === 2
          ? `<div style="margin-top:8px"><span style="font-family:var(--mono);font-size:0.58rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text3)">Est. kcal / rep</span><br><span style="font-family:var(--mono);font-size:0.82rem;font-weight:600;color:var(--text)">${found.kcalPerRep[0]} – ${found.kcalPerRep[1]}</span> <span style="font-family:var(--mono);font-size:0.68rem;color:var(--text2)">kcal</span><br><span style="font-family:var(--mono);font-size:0.5rem;color:var(--text3)">REF: 50–90 kg bodyweight</span></div>`
          : '';

        const injFlagged = typeof getInjuryFlaggedJoints === 'function' ? getInjuryFlaggedJoints(found.joints) : [];
        const injBannerHtml = injFlagged.length
          ? (() => {
              const names = injFlagged.map(k => {
                const jm = (typeof JOINTS_META !== 'undefined' ? JOINTS_META : []).find(j => j.key === k);
                return jm ? jm.label : k;
              }).join(' · ');
              return `<div class="inj-banner"><span class="inj-banner-ico">⚠</span><div><div class="inj-banner-text">This exercise loads joints you've flagged as injured.</div><div class="inj-banner-joints">${names}</div></div></div>`;
            })()
          : '';
        const viewLibBtn = (foundKey && foundId != null)
          ? `<button class="pgd-view-lib-btn" onclick="event.stopPropagation();viewExInLibrary('${foundKey}',${foundId})">→ View full entry in library</button>`
          : '';

        detail.innerHTML = `<div class="pgd-ex-inline-inner">
          ${injBannerHtml}
          ${note ? `<div class="pgd-ex-session-note"><b>COACH:</b> ${note}</div>` : ''}
          <div class="pgd-ex-grid">
            <div class="pgd-ex-card">
              <strong>Description</strong>
              <div class="pgd-ex-card-text">${found.desc||'—'}</div>
            </div>
            <div class="pgd-ex-card">
              <strong>Coaching Cues</strong>
              <div class="pgd-ex-card-text">${found.cues||'—'}</div>
            </div>
            <div class="pgd-ex-card">
              <strong>Equipment</strong>
              <div class="pgd-ex-card-meta">${found.equipment||'—'}
                <strong>Body Position</strong>${found.position||'—'}
                ${kcalHtml}
              </div>
            </div>
          </div>
          <div class="pgd-ex-breakdown-label">Performance Breakdown</div>
          <div class="pgd-ex-breakdown-grid">
            <div class="pgd-ex-card"><strong>Joint &amp; Tendon Stress</strong>${jointStressSummary(found.joints)}</div>
            <div class="pgd-ex-card"><strong>Mobility</strong>${mobBlock(found.mobility)}</div>
            <div class="pgd-ex-card"><strong>Strength</strong>${strengthBlock(found.strength)}</div>
          </div>
          ${found.youtube && found.youtube !== 'LINK_TODO'
            ? `<div class="yt-section"><div class="yt-label">Watch the Movement</div><div class="yt-wrap"><iframe src="https://www.youtube.com/embed/${found.youtube}" allowfullscreen loading="lazy"></iframe></div></div>`
            : found.youtube === 'LINK_TODO'
              ? `<div class="yt-section"><div class="yt-label">Watch the Movement</div><div class="yt-placeholder"><div class="yt-placeholder-icon">▶</div><div class="yt-placeholder-text">Video coming soon</div></div></div>`
              : ''}
          ${viewLibBtn}
        </div>`;
      } else {
        detail.innerHTML = `<div class="pgd-ex-not-found">
          No library data found for <strong style="color:var(--text)">${name}</strong>
        </div>`;
      }
    }

    // Scroll row into view on mobile
    if(isOpening) {
      setTimeout(() => {
        wrap.scrollIntoView({behavior:'smooth', block:'nearest'});
      }, 120);
    }
  };

})();
/* └─ @end:  js/programs.js ────────────────────────────────────────── */
/* └─ @end:  js/programs.js ────────────────────────────────────────── */