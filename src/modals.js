/* ===== muscle-modal.js (merged in — opens the muscle detail modal) ===== */
/* ┌─ @file: js/muscle-modal.js ─────────────────────────────────────── */
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

/* └─ @end:  js/muscle-modal.js ────────────────────────────────────── */


/* ===== modals.js (modals/overlays + custom-program builder) ===== */
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
  if(!confirm('Delete this custom workout? This cannot be undone.')) return;
  removeSavedCustomProgram(programId);
  if(typeof renderProgramsGrid === 'function') renderProgramsGrid();
  window.updateHomeProgramsCount?.();
  goTo('programs');
}

function getCustomProgramStateFromProgram(program){
  if(!program || !program.weeks_data || !Array.isArray(program.weeks_data)) return null;
  const dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const state = { selectedDay:null, previewMode:null, dayModes:{}, assignedExercises:{} };
  const sessions = (program.weeks_data[0]?.sessions) || [];
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
    if(index === 0) {
      state.selectedDay = day;
      state.previewMode = isRest ? 'rest' : 'workout';
    }
  });
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
  const saved = loadSavedCustomPrograms();
  if(!saved.length) return;
  const existingIds = new Set(PROGRAMS.map(p => p.id));
  saved.forEach(prog => {
    if(!prog || !prog.id || existingIds.has(prog.id)) return;
    PROGRAMS.push(prog);
    existingIds.add(prog.id);
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
