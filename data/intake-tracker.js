/* ══════════════════════════════════════════════════════════════════════
   INTAKE TRACKER (Manual food/macro log) — extracted from index.html
   ══════════════════════════════════════════════════════════════════════
   Loaded via <script src="data/intake-tracker.js"></script> in
   index.html (placed after the inline <script> containing the Calorie
   Calculator closes, alongside nutrition-ui.js). Every top-level
   function/const/let in this file is prefixed _intake, INTAKE_, or
   MICRO_.

   READS (external — must already be loaded as globals before this
   file runs; that's why it's loaded where it is in index.html):
     - CALC_STATE.lastResult / CALC_STATE.goal   — Calorie Calculator
       state, defined inline in index.html.
     - _calcDefaultMacros(weightKg, targetKcal)  — shared macro-split
       helper, also defined inline in index.html (Calorie Calculator
       section).
     - foods                                     — global array from
       nutrition/nutrition-data.js (reads food.nutritionProfile).
     - NUTRITION_SECTIONS                        — global from
       library/nutrient-info-data.js (referenced defensively via
       typeof-guards).
   None of these are written to, only read.

   CALLED BY (in index.html — only one call site):
     - Inside _execGoTo(): `else if(v==='intake-tracker') _intakeRender();`

   Markup/CSS for this feature stay in index.html (every feature's view
   markup lives there): <div id="view-intake-tracker"> + its scoped
   <style id="intakeTrackerStyle">, plus the nav <li onclick="goTo(
   'intake-tracker')"> in the Nutrition hub's GUIDES list.

   ── Original feature notes ──
   Lives on its own page (Nutrition → Calorie Calculator) and reads the
   profile's BMR/TDEE target (CALC_STATE.lastResult / CALC_STATE.goal,
   set up via "SET UP YOUR EST. KCAL INTAKE" in Edit Profile). The daily
   target can optionally be overridden just for this tracker — editing
   protein/carbs/fat always recomputes kcal (P×4 + C×4 + F×9); editing
   kcal directly just sets a flat override on top of those macros. */

const INTAKE_STORAGE_KEY = 'grnd_intake_tracker';
const INTAKE_LOG_PREFIX  = 'grnd_intake_log_';
const INTAKE_GOAL_LABELS = { cut: 'Cut', maintain: 'Maintain', bulk: 'Bulk' };

// Meal grouping — entries store a concrete meal bucket (never the literal
// "auto"); when the MEAL select is left on Auto, the bucket is resolved
// from the clock at the moment the entry is logged, then frozen on the
// entry so it doesn't drift later if logged retroactively at a different time.
const INTAKE_MEAL_ORDER  = ['breakfast', 'lunch', 'dinner', 'snack'];
const INTAKE_MEAL_LABELS = { breakfast: 'Breakfast', lunch: 'Lunch', dinner: 'Dinner', snack: 'Snack' };

function _intakeResolveMealAuto() {
  const hour = new Date().getHours();
  if(hour < 11) return 'breakfast';
  if(hour < 15) return 'lunch';
  if(hour < 17) return 'snack';
  if(hour < 21) return 'dinner';
  return 'snack';
}

const INTAKE_STATE = (function() {
  const defaults = { mode: 'macro', overrideActive: false, overrideKcal: null, overrideProtein: null, overrideCarbs: null, overrideFat: null };
  try {
    const raw = localStorage.getItem(INTAKE_STORAGE_KEY);
    if(raw) {
      const saved = JSON.parse(raw);
      // legacy mode names — MANUAL/AUTO became MACRO/MICRO
      if(saved.mode === 'manual') saved.mode = 'macro';
      else if(saved.mode === 'auto') saved.mode = 'micro';
      return Object.assign(defaults, saved);
    }
  } catch(e) {}
  return defaults;
})();

function _saveIntakeState() {
  try { localStorage.setItem(INTAKE_STORAGE_KEY, JSON.stringify(INTAKE_STATE)); } catch(e) {}
}

/* Calendar browsing state — deliberately not persisted, always opens on the
   current month with nothing selected. */
const INTAKE_CAL_STATE = (function() {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth(), selectedDate: null };
})();

/* Entries are kept per calendar day so the log naturally resets each day.
   _intakeDateKey() builds a 'YYYY-MM-DD' key for any Date; today's add/delete
   flow always targets _intakeTodayKey(), while the calendar/history feature
   below reads arbitrary past days via _intakeLoadEntriesForDate(). */
function _intakeDateKey(date) {
  const y = date.getFullYear(), m = String(date.getMonth()+1).padStart(2,'0'), day = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}

function _intakeTodayKey() {
  return INTAKE_LOG_PREFIX + _intakeDateKey(new Date());
}

function _intakeLoadEntriesForKey(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function _intakeLoadEntries() {
  return _intakeLoadEntriesForKey(_intakeTodayKey());
}

function _intakeLoadEntriesForDate(dateKey) {
  return _intakeLoadEntriesForKey(INTAKE_LOG_PREFIX + dateKey);
}

function _intakeSaveEntries(entries, dateKey) {
  const storageKey = dateKey ? (INTAKE_LOG_PREFIX + dateKey) : _intakeTodayKey();
  try { localStorage.setItem(storageKey, JSON.stringify(entries)); } catch(e) {}
}

function _intakeSumTotals(entries) {
  return entries.reduce((acc, e) => ({
    kcal:    acc.kcal    + (Number(e.kcal)    || 0),
    protein: acc.protein + (Number(e.protein) || 0),
    carbs:   acc.carbs   + (Number(e.carbs)   || 0),
    fat:     acc.fat     + (Number(e.fat)     || 0),
  }), { kcal: 0, protein: 0, carbs: 0, fat: 0 });
}

function _intakeEsc(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

function setIntakeMode(mode) {
  INTAKE_STATE.mode = mode;
  _saveIntakeState();
  document.querySelectorAll('#intakeModeSwitch .tree-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.intakeMode === mode));
  document.getElementById('intakeMacroPanel').style.display = mode === 'macro' ? '' : 'none';
  document.getElementById('intakeMicroPanel').style.display = mode === 'micro' ? '' : 'none';
  if(mode === 'micro') _intakeRenderMicro();
}
function _intakeRender() {
  // Sync the MACRO/MICRO tab buttons to saved state
  const mode = INTAKE_STATE.mode || 'macro';
  document.querySelectorAll('#intakeModeSwitch .tree-mode-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.intakeMode === mode)
  );
  document.getElementById('intakeMacroPanel').style.display = mode === 'macro' ? '' : 'none';
  document.getElementById('intakeMicroPanel').style.display = mode === 'micro'  ? '' : 'none';

  if(mode === 'micro') {
    _intakeRenderMicro();
  } else {
    _intakeRenderTargetCard();
    _intakeRenderEntries();
    _intakeRefreshHistory();
  }
}
/* Resolves what the tracker compares against today: the profile's
   calculated goal target, or this tracker's own override on top of it. */
function _intakeGetActiveTarget() {
  if(!CALC_STATE.lastResult) return null;
  const goal = CALC_STATE.goal || 'maintain';
  const calcKcal = CALC_STATE.lastResult[goal] != null ? CALC_STATE.lastResult[goal] : CALC_STATE.lastResult.maintain;
  const calcMacros = _calcDefaultMacros(CALC_STATE.lastResult.weightKg, calcKcal);
  const base = { kcal: calcKcal, protein: calcMacros.proteinG, carbs: calcMacros.carbG, fat: calcMacros.fatG };

  if(!INTAKE_STATE.overrideActive) {
    return Object.assign({}, base, { goalLabel: INTAKE_GOAL_LABELS[goal] || goal, isOverride: false });
  }
  return {
    kcal:    INTAKE_STATE.overrideKcal    != null ? INTAKE_STATE.overrideKcal    : base.kcal,
    protein: INTAKE_STATE.overrideProtein != null ? INTAKE_STATE.overrideProtein : base.protein,
    carbs:   INTAKE_STATE.overrideCarbs   != null ? INTAKE_STATE.overrideCarbs   : base.carbs,
    fat:     INTAKE_STATE.overrideFat     != null ? INTAKE_STATE.overrideFat     : base.fat,
    goalLabel: INTAKE_GOAL_LABELS[goal] || goal,
    isOverride: true,
  };
}

function toggleIntakeOverride() {
  if(!INTAKE_STATE.overrideActive) {
    /* Seed the override fields from the current calculated target so the
       user adjusts from a sensible starting point instead of from blank. */
    const target = _intakeGetActiveTarget();
    if(target) {
      INTAKE_STATE.overrideKcal    = Math.round(target.kcal);
      INTAKE_STATE.overrideProtein = Math.round(target.protein);
      INTAKE_STATE.overrideCarbs   = Math.round(target.carbs);
      INTAKE_STATE.overrideFat     = Math.round(target.fat);
    }
    INTAKE_STATE.overrideActive = true;
  } else {
    INTAKE_STATE.overrideActive = false;
  }
  _saveIntakeState();
  _intakeRenderTargetCard();
  _intakeRenderEntries();
  _intakeRefreshHistory();
}

function resetIntakeOverride() {
  clearTimeout(_intakeOverrideDebounce);
  INTAKE_STATE.overrideActive = false;
  INTAKE_STATE.overrideKcal = null;
  INTAKE_STATE.overrideProtein = null;
  INTAKE_STATE.overrideCarbs = null;
  INTAKE_STATE.overrideFat = null;
  _saveIntakeState();
  _intakeRenderTargetCard();
  _intakeRenderEntries();
  _intakeRefreshHistory();
}

// Override inputs fire on every keystroke (oninput) — re-rendering entries +
// the full history calendar per character is wasteful, so debounce just the
// render pass. State itself still saves immediately so nothing is lost.
let _intakeOverrideDebounce = null;
function _intakeOverrideScheduleRender() {
  clearTimeout(_intakeOverrideDebounce);
  _intakeOverrideDebounce = setTimeout(() => {
    _intakeRenderEntries();
    _intakeRefreshHistory();
  }, 300);
}

function setIntakeOverrideKcal(val) {
  const n = parseFloat(val);
  INTAKE_STATE.overrideKcal = isNaN(n) ? 0 : Math.round(n);
  _saveIntakeState();
  _intakeOverrideScheduleRender();
}

function setIntakeOverrideMacro(macro, val) {
  const n = parseFloat(val);
  const g = isNaN(n) ? 0 : n;
  if(macro === 'protein') INTAKE_STATE.overrideProtein = g;
  if(macro === 'carbs')   INTAKE_STATE.overrideCarbs   = g;
  if(macro === 'fat')     INTAKE_STATE.overrideFat     = g;

  /* Macro edits always drive kcal: P×4 + C×4 + F×9 */
  const p = INTAKE_STATE.overrideProtein != null ? INTAKE_STATE.overrideProtein : 0;
  const c = INTAKE_STATE.overrideCarbs   != null ? INTAKE_STATE.overrideCarbs   : 0;
  const f = INTAKE_STATE.overrideFat     != null ? INTAKE_STATE.overrideFat     : 0;
  INTAKE_STATE.overrideKcal = Math.round(p*4 + c*4 + f*9);
  const kcalInput = document.getElementById('intake-override-kcal');
  if(kcalInput) kcalInput.value = INTAKE_STATE.overrideKcal;

  _saveIntakeState();
  _intakeOverrideScheduleRender();
}

function _intakeRenderTargetCard() {
  const card = document.getElementById('intakeTargetCard');
  if(!card) return;

  const target = _intakeGetActiveTarget();

  if(!target) {
    card.innerHTML = `
      <div class="nutrition-card nutrition-breakdown">
        <h3>Daily Target</h3>
        <div class="empty-state" style="padding:28px 16px">
          <span class="empty-icon">🎯</span>
          Set up your profile to check against it.
          <div style="margin-top:14px">
            <button class="menu-action-btn menu-action-btn-primary" onclick="goTo('calorie-calculator')">SET UP PROFILE</button>
          </div>
        </div>
      </div>`;
    return;
  }

  if(!INTAKE_STATE.overrideActive) {
    card.innerHTML = `
      <div class="nutrition-card nutrition-breakdown">
        <div class="intake-target-hdr">
          <h3>Daily Target</h3>
          <button class="menu-action-btn menu-action-btn-sm" onclick="toggleIntakeOverride()">OVERRIDE</button>
        </div>
        <div class="nutrition-serving">Goal: ${_intakeEsc(target.goalLabel)} · from your profile</div>
        <div class="lib-stats" style="margin-top:14px">
          <div class="lib-stat"><strong>${Math.round(target.kcal).toLocaleString()}</strong>kcal/day</div>
          <div class="lib-stat"><strong>${Math.round(target.protein)}</strong>protein (g)</div>
          <div class="lib-stat"><strong>${Math.round(target.carbs)}</strong>carbs (g)</div>
          <div class="lib-stat"><strong>${Math.round(target.fat)}</strong>fat (g)</div>
        </div>
      </div>`;
    return;
  }

  card.innerHTML = `
    <div class="nutrition-card nutrition-breakdown">
      <div class="intake-target-hdr">
        <h3>Daily Target<span class="intake-override-tag">— override active</span></h3>
        <div style="display:flex;gap:6px">
          <button class="menu-action-btn menu-action-btn-ghost menu-action-btn-sm" onclick="resetIntakeOverride()">↺ RESET</button>
          <button class="menu-action-btn menu-action-btn-primary menu-action-btn-sm" onclick="toggleIntakeOverride()">DONE</button>
        </div>
      </div>
      <div class="nutrition-serving">Goal: ${_intakeEsc(target.goalLabel)} · adjust the numbers below</div>
      <div class="prof-fields" style="margin-top:14px">
        <div class="prof-field">
          <label class="prof-field-label">KCAL/DAY</label>
          <input class="prof-field-input" id="intake-override-kcal" type="number" inputmode="decimal" min="0" max="9000" step="1" value="${Math.round(target.kcal)}" oninput="setIntakeOverrideKcal(this.value)" />
        </div>
        <div class="prof-field-row">
          <div class="prof-field">
            <label class="prof-field-label">PROTEIN (G)</label>
            <input class="prof-field-input" id="intake-override-protein" type="number" inputmode="decimal" min="0" max="600" step="1" value="${Math.round(target.protein)}" oninput="setIntakeOverrideMacro('protein',this.value)" />
          </div>
          <div class="prof-field">
            <label class="prof-field-label">CARBS (G)</label>
            <input class="prof-field-input" id="intake-override-carbs" type="number" inputmode="decimal" min="0" max="900" step="1" value="${Math.round(target.carbs)}" oninput="setIntakeOverrideMacro('carbs',this.value)" />
          </div>
          <div class="prof-field">
            <label class="prof-field-label">FAT (G)</label>
            <input class="prof-field-input" id="intake-override-fat" type="number" inputmode="decimal" min="0" max="400" step="1" value="${Math.round(target.fat)}" oninput="setIntakeOverrideMacro('fat',this.value)" />
          </div>
        </div>
      </div>
    </div>`;
}

/* ── Macro Tracker state ─────────────────────────────────── */
// Stores the per-100g base when a food is selected from autocomplete
let _intakeBaseP100 = null, _intakeBaseC100 = null, _intakeBaseF100 = null;

function _intakeUpdateAddPreview() {
  const protein = parseFloat(document.getElementById('intake-input-protein').value) || 0;
  const carbs   = parseFloat(document.getElementById('intake-input-carbs').value)   || 0;
  const fat     = parseFloat(document.getElementById('intake-input-fat').value)     || 0;
  const kcal = Math.round(protein*4 + carbs*4 + fat*9);
  const el = document.getElementById('intakeAddKcalPreview');
  if(el) el.textContent = `= ${kcal.toLocaleString()} kcal`;
}

// Inline validation for the macro Add-Entry form — replaces a blocking alert()
// with a styled error message + red-bordered inputs, matching the day-feedback
// .intake-feedback-item look used elsewhere in this tab.
const _INTAKE_MACRO_FIELD_IDS = ['intake-input-protein', 'intake-input-carbs', 'intake-input-fat'];

function _intakeShowAddError(msg) {
  _INTAKE_MACRO_FIELD_IDS.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.style.borderColor = '#e63946';
  });
  const box = document.getElementById('intake-add-error');
  if(box) {
    box.innerHTML = `<div class="intake-feedback-item intake-feedback-over">${_intakeEsc(msg)}</div>`;
    box.style.display = '';
  }
}

function _intakeClearAddError() {
  _INTAKE_MACRO_FIELD_IDS.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.style.borderColor = '';
  });
  const box = document.getElementById('intake-add-error');
  if(box) { box.innerHTML = ''; box.style.display = 'none'; }
}

// Called when any macro field changes manually — clears base so mass doesn't override
function _intakeMacroInput() {
  _intakeBaseP100 = null; _intakeBaseC100 = null; _intakeBaseF100 = null;
  _intakeSetSelectedFood(null);
  _intakeClearAddError();
  _intakeUpdateAddPreview();
}

// Shared field setter — Math.round(x*10)/10 || '' used to blank out
// legitimate zero values (e.g. 0g carbs on a lean protein). Fixed here.
function _intakeSetFieldValue(id, val) {
  const el = document.getElementById(id);
  if(!el) return;
  el.value = (val === null || val === undefined || isNaN(val)) ? '' : Math.round(val*10)/10;
}

// Called when mass changes — scales macros from 100g base if available
function _intakeMassInput() {
  const mass = parseFloat(document.getElementById('intake-input-mass').value);
  if(!isNaN(mass) && mass > 0 && _intakeBaseP100 !== null) {
    const ratio = mass / 100;
    _intakeSetFieldValue('intake-input-protein', _intakeBaseP100 * ratio);
    _intakeSetFieldValue('intake-input-carbs',   _intakeBaseC100 * ratio);
    _intakeSetFieldValue('intake-input-fat',     _intakeBaseF100 * ratio);
  }
  _intakeUpdateAddPreview();
}

/* ── Label autocomplete — backed by the real Foods Library ─────────
   Reads the global `foods` array (nutrition/nutrition-data.js), NOT
   past logged entries. Most foods only have qualitative str/vol/end
   ratings (no literal grams) — only foods with a populated
   nutritionProfile.macros array can autofill. Foods without one still
   show up (so search reflects the full 114-food registry) but are
   tagged "enter manually" and only fill the label on selection.
──────────────────────────────────────────────────────────────────── */
function _intakeParseGrams(str) {
  if(str === null || str === undefined) return null;
  const n = parseFloat(String(str).replace(/[^\d.]/g, ''));
  return isNaN(n) ? null : n;
}

/* ── Custom food memory ─────────────────────────────────────────────
   Foods entered manually are saved here so they appear in the search
   dropdown on future visits. Each entry stores: name, protein, carbs,
   fat (all per-serving as entered). Key: 'grnd_intake_custom_foods'.
──────────────────────────────────────────────────────────────────── */
const INTAKE_CUSTOM_FOODS_KEY = 'grnd_intake_custom_foods';

function _intakeLoadCustomFoods() {
  try {
    const raw = localStorage.getItem(INTAKE_CUSTOM_FOODS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function _intakeSaveCustomFoods(list) {
  try { localStorage.setItem(INTAKE_CUSTOM_FOODS_KEY, JSON.stringify(list)); } catch(e) {}
}

function _intakeAddCustomFood(name, protein, carbs, fat) {
  if(!name) return;
  const list = _intakeLoadCustomFoods();
  // Update existing entry by name (case-insensitive) or push new one
  const idx = list.findIndex(f => f.name.toLowerCase() === name.toLowerCase());
  const entry = { name, protein: +protein || 0, carbs: +carbs || 0, fat: +fat || 0 };
  if(idx !== -1) list[idx] = entry;
  else list.unshift(entry);
  _intakeSaveCustomFoods(list);
}

function deleteCustomFood(name) {
  const list = _intakeLoadCustomFoods().filter(f => f.name !== name);
  _intakeSaveCustomFoods(list);
  // Refresh dropdown if it's currently open
  const box = document.getElementById('intake-label-suggestions');
  if(box && box.style.display !== 'none') _intakeLabelInput();
}

// Convert custom foods into the same shape _intakeGetFoodLibrary() returns
function _intakeGetCustomFoodLibrary() {
  return _intakeLoadCustomFoods().map(f => {
    const kcal = Math.round(f.protein*4 + f.carbs*4 + f.fat*9);
    return {
      id: null, name: f.name, alt: '', hasProfile: true,
      protein100: f.protein, carbs100: f.carbs, fat100: f.fat,
      kcal100: kcal, isCustom: true, raw: null,
    };
  });
}

let _intakeFoodLibCache = null;
function _intakeGetFoodLibrary() {
  if(_intakeFoodLibCache) return _intakeFoodLibCache;
  const list = (typeof foods !== 'undefined' && Array.isArray(foods)) ? foods : [];
  _intakeFoodLibCache = list.map(f => {
    const macros = (f.nutritionProfile && Array.isArray(f.nutritionProfile.macros)) ? f.nutritionProfile.macros : null;
    let protein100 = null, carbs100 = null, fat100 = null;
    if(macros) {
      macros.forEach(m => {
        const g = _intakeParseGrams(m.grams);
        if(m.key === 'protein') protein100 = g;
        else if(m.key === 'carbs') carbs100 = g;
        else if(m.key === 'fat') fat100 = g;
      });
    }
    const hasProfile = protein100 !== null || carbs100 !== null || fat100 !== null;
    return {
      id: f.id, name: f.name, alt: f.alt || '',
      hasProfile,
      protein100: protein100 || 0, carbs100: carbs100 || 0, fat100: fat100 || 0,
      kcal100: hasProfile ? Math.round((protein100||0)*4 + (carbs100||0)*4 + (fat100||0)*9) : null,
      raw: f, // full food object — lets the Micro tab read nutritionProfile.vitamins/minerals/amino/extras
    };
  }).sort((a,b) => a.name.localeCompare(b.name));
  return _intakeFoodLibCache;
}

let _intakeLabelBlurTimer = null;
function _intakeLabelBlur() {
  _intakeLabelBlurTimer = setTimeout(() => {
    const el = document.getElementById('intake-label-suggestions');
    if(el) el.style.display = 'none';
  }, 200);
}

function _intakeSetLabelNote(text) {
  const el = document.getElementById('intake-label-note');
  if(!el) return;
  el.textContent = text || '';
  el.style.display = text ? 'block' : 'none';
}

function _intakeLabelInput() {
  const input = document.getElementById('intake-input-label');
  const box   = document.getElementById('intake-label-suggestions');
  if(!input || !box) return;
  // typing away from the linked food's name drops the Micro-tab link (refocusing
  // without changing the value, e.g. just clicking back in, does NOT clear it)
  if(_intakeSelectedFood && input.value.trim() !== _intakeSelectedFood.name) {
    _intakeSetSelectedFood(null);
  }
  _intakeSetLabelNote('');
  const q = input.value.trim().toLowerCase();
  const library = _intakeGetFoodLibrary();
  const custom  = _intakeGetCustomFoodLibrary();
  // Custom foods shown first, then library — deduplicated by name
  const combined = [...custom, ...library.filter(f => !custom.some(c => c.name.toLowerCase() === f.name.toLowerCase()))];
  let matches;
  if(q.length === 0) {
    matches = combined.slice(0, 8);
  } else {
    const starts   = combined.filter(f => f.name.toLowerCase().startsWith(q));
    const contains = combined.filter(f => !f.name.toLowerCase().startsWith(q) && (f.name + ' ' + f.alt).toLowerCase().includes(q));
    matches = [...starts, ...contains].slice(0, 8);
  }
  if(matches.length === 0) { box.style.display = 'none'; return; }
  _intakeLastMatches = matches;
  box.innerHTML = matches.map((f, i) => {
    const rightTag = f.isCustom
      ? `<span style="color:var(--accent);font-style:italic">saved · ${f.kcal100} kcal</span>`
      : f.hasProfile
        ? `${f.kcal100} kcal / 100g`
        : `<span style="font-style:italic">enter manually</span>`;
    const deleteBtn = f.isCustom
      ? `<span onmousedown="event.stopPropagation();deleteCustomFood(${JSON.stringify(f.name)})" title="Remove saved food" style="color:var(--text3);cursor:pointer;padding:0 4px;font-size:0.75rem;line-height:1">✕</span>`
      : '';
    return `<div class="intake-suggest-item" onmousedown="_intakeSelectFood(${i})" style="padding:8px 12px;cursor:pointer;font-family:var(--mono);font-size:0.68rem;border-bottom:1px solid var(--border2);display:flex;justify-content:space-between;gap:8px;align-items:center">
      <span style="color:var(--text);flex:1;min-width:0">${_intakeEsc(f.name)}${f.alt ? ` <span style="color:var(--text3)">— ${_intakeEsc(f.alt)}</span>` : ''}</span>
      <span style="color:var(--text3);white-space:nowrap;display:flex;align-items:center;gap:4px">${rightTag}${deleteBtn}</span>
    </div>`;
  }).join('');
  box.style.display = 'block';
}

let _intakeLastMatches = [];
function _intakeSelectFood(index) {
  if(_intakeLabelBlurTimer) clearTimeout(_intakeLabelBlurTimer);
  const f = _intakeLastMatches[index];
  if(!f) return;
  document.getElementById('intake-input-label').value = f.name;

  if(f.hasProfile) {
    // store per-100g base so mass changes can rescale later
    _intakeBaseP100 = f.protein100; _intakeBaseC100 = f.carbs100; _intakeBaseF100 = f.fat100;
    _intakeSetFieldValue('intake-input-protein', _intakeBaseP100);
    _intakeSetFieldValue('intake-input-carbs',   _intakeBaseC100);
    _intakeSetFieldValue('intake-input-fat',     _intakeBaseF100);
    _intakeSetFieldValue('intake-input-mass', 100);
    _intakeSetLabelNote('');
    _intakeSetSelectedFood(f.raw || null);
  } else {
    // In the registry, but no gram-level macro data entered yet —
    // fill the label only and leave macros for manual entry.
    _intakeBaseP100 = null; _intakeBaseC100 = null; _intakeBaseF100 = null;
    _intakeSetFieldValue('intake-input-protein', null);
    _intakeSetFieldValue('intake-input-carbs', null);
    _intakeSetFieldValue('intake-input-fat', null);
    _intakeSetFieldValue('intake-input-mass', null);
    _intakeSetLabelNote('No macro data for this food yet — enter protein / carbs / fat manually.');
    _intakeSetSelectedFood(null);
  }

  document.getElementById('intake-label-suggestions').style.display = 'none';
  _intakeUpdateAddPreview();
}

function addIntakeEntry() {
  const labelEl = document.getElementById('intake-input-label');
  const label = labelEl ? labelEl.value.trim() : '';
  const protein = parseFloat(document.getElementById('intake-input-protein').value) || 0;
  const carbs   = parseFloat(document.getElementById('intake-input-carbs').value)   || 0;
  const fat     = parseFloat(document.getElementById('intake-input-fat').value)     || 0;
  const mass    = parseFloat(document.getElementById('intake-input-mass').value)    || null;
  const foodId  = _intakeSelectedFood ? _intakeSelectedFood.id : null;
  const mealSel = document.getElementById('intake-input-meal');
  const meal    = (mealSel && mealSel.value !== 'auto') ? mealSel.value : _intakeResolveMealAuto();

  if(protein <= 0 && carbs <= 0 && fat <= 0) {
    _intakeShowAddError('Enter at least one macro amount (protein, carbs or fat).');
    return;
  }
  _intakeClearAddError();

  // Save to custom food memory if it's not already in the built-in library
  if(label) {
    const inLibrary = _intakeGetFoodLibrary().some(f => f.name.toLowerCase() === label.toLowerCase());
    if(!inLibrary) _intakeAddCustomFood(label, protein, carbs, fat);
  }

  const kcal = Math.round(protein*4 + carbs*4 + fat*9);
  const entries = _intakeLoadEntries();
  entries.push({
    id: Date.now() + '-' + Math.random().toString(36).slice(2,7),
    label: label || 'Untitled entry',
    protein, carbs, fat, kcal, meal,
    ...(mass ? { mass } : {}),
    ...(foodId != null ? { foodId } : {}),
  });
  _intakeSaveEntries(entries);

  ['intake-input-label','intake-input-protein','intake-input-carbs','intake-input-fat','intake-input-mass'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.value = '';
  });
  if(mealSel) mealSel.value = 'auto';
  _intakeBaseP100 = null; _intakeBaseC100 = null; _intakeBaseF100 = null;
  _intakeSetSelectedFood(null);
  _intakeSetLabelNote('');
  _intakeUpdateAddPreview();
  _intakeRenderEntries();
  _intakeRefreshHistory();
  if(INTAKE_STATE.mode === 'micro') _intakeRenderMicro();
}

function deleteIntakeEntry(id, dateKey) {
  const entries = (dateKey ? _intakeLoadEntriesForDate(dateKey) : _intakeLoadEntries()).filter(e => e.id !== id);
  _intakeSaveEntries(entries, dateKey);
  _intakeRenderEntries();
  _intakeRefreshHistory();
  if(INTAKE_STATE.mode === 'micro') _intakeRenderMicro();
}

// Color for a macro-vs-target progress bar — distinct from
// _intakeMicroBarColor (deficiency-is-bad logic for micronutrients);
// here the target IS the goal, so on-track is green and overshooting
// is the thing to flag.
function _intakeMacroBarColor(pct) {
  if(pct > 105) return '#e63946';
  if(pct >= 85) return '#ffae1f';
  return '#48b86d';
}

function _intakeMacroProgressHTML(label, current, target) {
  if(!target) return '';
  const pct = Math.round((current / target) * 100);
  const width = Math.min(Math.max(pct, 0), 100);
  const color = _intakeMacroBarColor(pct);
  return `
    <div class="intake-micro-bar-wrap" style="margin-top:8px">
      <span class="intake-micro-pct" style="min-width:14px;text-align:left;color:var(--text3);font-weight:400">${label}</span>
      <div class="intake-micro-bar"><div class="intake-micro-bar-fill" style="width:${width}%;background:${color}"></div></div>
      <span class="intake-micro-pct" style="color:${color}">${pct}%</span>
    </div>`;
}

function _intakeEntryRowHTML(e, dateKey) {
  return `
      <div class="nutrition-macro-row intake-entry-row">
        <div class="nutrition-macro-main">
          <div class="nutrition-macro-name">${_intakeEsc(e.label)}</div>
          <div class="nutrition-macro-sub">P ${Math.round(e.protein*10)/10}g · C ${Math.round(e.carbs*10)/10}g · F ${Math.round(e.fat*10)/10}g</div>
        </div>
        <div class="nutrition-macro-value">${e.kcal.toLocaleString()}<div class="nutrition-macro-kcal">kcal</div></div>
        <button class="intake-entry-delete" onclick="deleteIntakeEntry('${e.id}'${dateKey ? `, '${dateKey}'` : ''})" title="Remove entry" aria-label="Remove entry">✕</button>
      </div>`;
}

function _intakeRenderEntries() {
  const card = document.getElementById('intakeEntriesCard');
  if(!card) return;

  const entries = _intakeLoadEntries();
  const totals = _intakeSumTotals(entries);

  let rowsHtml;
  if(entries.length === 0) {
    rowsHtml = `<div class="empty-state" style="padding:28px 16px"><span class="empty-icon">🍽</span>No entries logged yet today.</div>`;
  } else {
    rowsHtml = INTAKE_MEAL_ORDER.map(meal => {
      const group = entries.filter(e => (e.meal || 'snack') === meal);
      if(!group.length) return '';
      const groupTotals = _intakeSumTotals(group);
      return `
        <div class="intake-meal-group">
          <div class="intake-meal-group-hdr">
            <span>${INTAKE_MEAL_LABELS[meal]}</span>
            <span class="intake-meal-group-sub">${Math.round(groupTotals.kcal).toLocaleString()} kcal · P ${Math.round(groupTotals.protein)}g · C ${Math.round(groupTotals.carbs)}g · F ${Math.round(groupTotals.fat)}g</span>
          </div>
          ${group.map(e => _intakeEntryRowHTML(e)).join('')}
        </div>`;
    }).join('');
  }

  let totalsHtml = `
    <div class="lib-stats" style="margin-top:14px">
      <div class="lib-stat"><strong>${Math.round(totals.kcal).toLocaleString()}</strong>kcal logged</div>
      <div class="lib-stat"><strong>${Math.round(totals.protein)}</strong>protein (g)</div>
      <div class="lib-stat"><strong>${Math.round(totals.carbs)}</strong>carbs (g)</div>
      <div class="lib-stat"><strong>${Math.round(totals.fat)}</strong>fat (g)</div>
    </div>`;

  const target = _intakeGetActiveTarget();
  if(target) {
    totalsHtml += `
      <div class="intake-macro-bars" style="margin-top:4px">
        ${_intakeMacroProgressHTML('P', totals.protein, target.protein)}
        ${_intakeMacroProgressHTML('C', totals.carbs, target.carbs)}
        ${_intakeMacroProgressHTML('F', totals.fat, target.fat)}
      </div>`;
    const remainKcal = Math.round(target.kcal - totals.kcal);
    const over = remainKcal < 0;
    totalsHtml += `
      <div class="intake-remaining ${over ? 'intake-remaining-over' : 'intake-remaining-ok'}" style="margin-top:12px">
        ${over ? Math.abs(remainKcal).toLocaleString() + ' kcal over target' : remainKcal.toLocaleString() + ' kcal remaining'}
      </div>`;
  }

  const yesterdayKey = _intakeDateKey(new Date(Date.now() - 86400000));
  const yesterdayHasEntries = _intakeLoadEntriesForDate(yesterdayKey).length > 0;
  const repeatHtml = yesterdayHasEntries
    ? `<button class="menu-action-btn menu-action-btn-ghost" style="margin-top:14px;width:100%" onclick="repeatIntakeFromYesterday()">+ REPEAT FROM YESTERDAY</button>`
    : '';

  card.innerHTML = `<h3>Today's Log</h3>${rowsHtml}${totalsHtml}${repeatHtml}`;
}

// Clones yesterday's entries into today's log with fresh ids, preserving
// each entry's meal bucket. A confirm prompt guards against accidental
// double-logging since this can add several entries in one tap.
function repeatIntakeFromYesterday() {
  const yesterdayKey = _intakeDateKey(new Date(Date.now() - 86400000));
  const yesterdayEntries = _intakeLoadEntriesForDate(yesterdayKey);
  if(!yesterdayEntries.length) return;

  const ok = confirm(`Add all ${yesterdayEntries.length} item${yesterdayEntries.length > 1 ? 's' : ''} from yesterday to today's log?`);
  if(!ok) return;

  const entries = _intakeLoadEntries();
  yesterdayEntries.forEach(e => {
    entries.push(Object.assign({}, e, { id: Date.now() + '-' + Math.random().toString(36).slice(2,7) }));
  });
  _intakeSaveEntries(entries);

  _intakeRenderEntries();
  _intakeRefreshHistory();
  if(INTAKE_STATE.mode === 'micro') _intakeRenderMicro();
}

/* ── History calendar: month grid, green/red circle per day, click for feedback ── */

function _intakeCalDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function _intakeParseDateKey(dateKey) {
  const [y, m, d] = dateKey.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function _intakeCalNavMonth(delta) {
  let { year, month } = INTAKE_CAL_STATE;
  month += delta;
  if(month < 0)  { month = 11; year -= 1; }
  if(month > 11) { month = 0;  year += 1; }
  INTAKE_CAL_STATE.year = year;
  INTAKE_CAL_STATE.month = month;
  _intakeRenderCalendar();
}

// Walks backward from today through consecutive "hit target" days
// (same definition as intake-cal-success in the calendar) to compute
// a running streak. No target set → streak is always 0/undefined.
function _intakeComputeStreak() {
  const target = _intakeGetActiveTarget();
  if(!target) return 0;
  let streak = 0;
  const cursor = new Date();
  while(true) {
    const dateKey = _intakeDateKey(cursor);
    const totals = _intakeSumTotals(_intakeLoadEntriesForDate(dateKey));
    if(totals.kcal > 0 && totals.kcal <= target.kcal) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

function _intakeRenderCalendar() {
  const card = document.getElementById('intakeCalendarCard');
  if(!card) return;

  const { year, month } = INTAKE_CAL_STATE;
  const now = new Date();
  const todayKey = _intakeDateKey(now);
  const isCurrentMonth = (year === now.getFullYear() && month === now.getMonth());

  const firstDow = new Date(year, month, 1).getDay(); // 0 = Sunday
  const numDays  = _intakeCalDaysInMonth(year, month);
  const target   = _intakeGetActiveTarget();
  const monthLabel = new Date(year, month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const streak = _intakeComputeStreak();
  const streakHtml = target
    ? (streak > 0
        ? `<div class="intake-streak">🔥 ${streak}-day streak</div>`
        : `<div class="intake-streak intake-streak-empty">— start your streak today</div>`)
    : '';

  let cellsHtml = '';
  for(let i = 0; i < firstDow; i++) {
    cellsHtml += `<div class="intake-cal-cell intake-cal-empty"></div>`;
  }
  for(let d = 1; d <= numDays; d++) {
    const dateKey  = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isFuture = dateKey > todayKey;
    const isToday  = dateKey === todayKey;
    const isSelected = INTAKE_CAL_STATE.selectedDate === dateKey;

    let statusClass = '';
    if(!isFuture) {
      const totals = _intakeSumTotals(_intakeLoadEntriesForDate(dateKey));
      if(totals.kcal > 0) {
        statusClass = target ? (totals.kcal <= target.kcal ? 'intake-cal-success' : 'intake-cal-missed') : 'intake-cal-logged';
      }
    }

    const classes = ['intake-cal-cell'];
    if(isFuture) classes.push('intake-cal-future');
    if(statusClass) classes.push(statusClass);
    if(isToday) classes.push('intake-cal-today');
    if(isSelected) classes.push('intake-cal-selected');

    cellsHtml += `<div class="${classes.join(' ')}"${isFuture ? '' : ` onclick="selectIntakeDay('${dateKey}')"`}>${d}</div>`;
  }

  card.innerHTML = `
    <div class="intake-target-hdr">
      <h3>History</h3>
    </div>
    ${streakHtml}
    <div class="intake-cal-hdr">
      <button class="intake-cal-nav-btn" onclick="_intakeCalNavMonth(-1)" aria-label="Previous month">‹</button>
      <div class="intake-cal-title">${monthLabel}</div>
      <button class="intake-cal-nav-btn" onclick="_intakeCalNavMonth(1)" aria-label="Next month" ${isCurrentMonth ? 'disabled' : ''}>›</button>
    </div>
    <div class="intake-cal-grid">
      <div class="intake-cal-dow">S</div><div class="intake-cal-dow">M</div><div class="intake-cal-dow">T</div><div class="intake-cal-dow">W</div><div class="intake-cal-dow">T</div><div class="intake-cal-dow">F</div><div class="intake-cal-dow">S</div>
      ${cellsHtml}
    </div>
    <div class="intake-cal-legend">
      <span><i class="intake-cal-legend-dot intake-cal-success"></i>Hit target</span>
      <span><i class="intake-cal-legend-dot intake-cal-missed"></i>Over target</span>
      ${target
        ? ''
        : `<span><i class="intake-cal-legend-dot" style="background:var(--border2)"></i>Logged (no target)</span><span>Set up your profile to see which days hit your target</span>`}
    </div>
  `;
}

function selectIntakeDay(dateKey) {
  INTAKE_CAL_STATE.selectedDate = dateKey;
  _intakeRenderCalendar();
  _intakeRenderDayFeedback(dateKey);
}

function closeIntakeDayFeedback() {
  INTAKE_CAL_STATE.selectedDate = null;
  const card = document.getElementById('intakeDayFeedbackCard');
  if(card) card.style.display = 'none';
  _intakeRenderCalendar();
}

/* Builds the plain-language "what did I miss" bullets for a day's feedback panel. */
function _intakeBuildFeedback(totals, target) {
  const items = [];
  const kcalDiff = Math.round(totals.kcal - target.kcal);
  if(kcalDiff > 0)      items.push({ text: `${kcalDiff.toLocaleString()} kcal over target.`, tone: 'over' });
  else if(kcalDiff < 0) items.push({ text: `${Math.abs(kcalDiff).toLocaleString()} kcal under target.`, tone: 'under' });
  else                  items.push({ text: `Right on target for calories.`, tone: 'ok' });

  const macroNote = (name, consumed, targetVal) => {
    const diff = Math.round(consumed - targetVal);
    if(Math.abs(diff) <= 5) return { text: `${name} was on track.`, tone: 'ok' };
    if(diff > 0) return { text: `${name} ${diff}g over target.`, tone: 'over' };
    return { text: `${name} ${Math.abs(diff)}g under target.`, tone: 'under' };
  };
  items.push(macroNote('Protein', totals.protein, target.protein));
  items.push(macroNote('Carbs', totals.carbs, target.carbs));
  items.push(macroNote('Fat', totals.fat, target.fat));
  return items;
}

function _intakeRenderDayFeedback(dateKey) {
  const card = document.getElementById('intakeDayFeedbackCard');
  if(!card) return;

  const entries = _intakeLoadEntriesForDate(dateKey);
  const totals  = _intakeSumTotals(entries);
  const target  = _intakeGetActiveTarget();
  const dateLabel = _intakeParseDateKey(dateKey).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  let bodyHtml;
  if(entries.length === 0) {
    bodyHtml = `<div class="empty-state" style="padding:24px 16px"><span class="empty-icon">🍽</span>Nothing logged on this day.</div>`;
  } else {
    const entryRows = entries.map(e => _intakeEntryRowHTML(e, dateKey)).join('');

    const feedbackHtml = target
      ? `<div class="intake-feedback-list">${_intakeBuildFeedback(totals, target).map(f => `<div class="intake-feedback-item intake-feedback-${f.tone}">${f.text}</div>`).join('')}</div>`
      : '';

    bodyHtml = `
      <div class="lib-stats">
        <div class="lib-stat"><strong>${Math.round(totals.kcal).toLocaleString()}</strong>kcal logged</div>
        <div class="lib-stat"><strong>${Math.round(totals.protein)}</strong>protein (g)</div>
        <div class="lib-stat"><strong>${Math.round(totals.carbs)}</strong>carbs (g)</div>
        <div class="lib-stat"><strong>${Math.round(totals.fat)}</strong>fat (g)</div>
      </div>
      ${feedbackHtml}
      <details class="intake-entries-details" style="margin-top:14px">
        <summary>Show ${entries.length} logged item${entries.length > 1 ? 's' : ''} ▾</summary>
        <div class="nutrition-macro-list" style="margin-top:10px">${entryRows}</div>
      </details>
    `;
  }

  card.innerHTML = `
    <div class="intake-target-hdr">
      <h3>${_intakeEsc(dateLabel)}</h3>
      <button class="menu-action-btn menu-action-btn-ghost menu-action-btn-sm" onclick="closeIntakeDayFeedback()">✕ CLOSE</button>
    </div>
    ${bodyHtml}
  `;
  card.style.display = '';
}

/* Re-renders the calendar (and the open feedback panel, if any) after
   anything changes that could affect day-by-day status: a logged entry,
   or the active target via override. */
function _intakeRefreshHistory() {
  _intakeRenderCalendar();
  if(INTAKE_CAL_STATE.selectedDate) _intakeRenderDayFeedback(INTAKE_CAL_STATE.selectedDate);
}

/* ════════════════════════════════════════════════════════════════
   MICRO TAB — micronutrient breakdown
   ════════════════════════════════════════════════════════════════
   Autofills from whichever food was selected in the Macro tab (via
   _intakeSelectFood), scaled to the current MASS (G) field. Falls
   back to the canonical NUTRITION_SECTIONS field list (the same
   structure that drives the Foods Library nutrient detail overlay
   in nutrition-ui.js) when no profiled food is selected, so the tab
   always shows a full, editable micronutrient list.

   Each row can be overridden manually and entered as a raw amount
   (g / mg / µg) or directly as a %DV. _intakeMicroState.overrides
   tracks these keyed by "section|label", persisted to localStorage
   under a daily key (see _intakeMicroOverridesKey) so they survive
   re-renders and view switches within the same day.
   ════════════════════════════════════════════════════════════════ */

/* Currently linked Macro-tab food (the raw object from `foods`,
   including nutritionProfile) — null when no profiled food is
   selected, or the label/macros have since been hand-edited away
   from it. Set in _intakeSelectFood, cleared in _intakeMacroInput /
   _intakeLabelInput / addIntakeEntry via _intakeSetSelectedFood(). */
let _intakeSelectedFood = null;

// Persisted under a daily key so overrides survive re-renders, unit
// switches, and tab/view changes — same lifecycle as logged entries
// (a new day naturally starts with a fresh, empty key).
const INTAKE_MICRO_OVERRIDE_PREFIX = 'grnd_intake_micro_overrides_';

function _intakeMicroOverridesKey() {
  return INTAKE_MICRO_OVERRIDE_PREFIX + _intakeDateKey(new Date());
}

function _intakeLoadMicroOverrides() {
  try {
    const raw = localStorage.getItem(_intakeMicroOverridesKey());
    return raw ? JSON.parse(raw) : {};
  } catch(e) { return {}; }
}

function _intakeSaveMicroOverrides() {
  try { localStorage.setItem(_intakeMicroOverridesKey(), JSON.stringify(_intakeMicroState.overrides)); } catch(e) {}
}

let _intakeMicroState = { overrides: _intakeLoadMicroOverrides() };

function _intakeSetSelectedFood(foodOrNull) {
  _intakeSelectedFood = foodOrNull || null;
  _intakeMicroState = { overrides: {} }; // a new (or cleared) food invalidates old row overrides
  _intakeSaveMicroOverrides();
}

/* Reference "100% Daily Value" amounts — used as a fallback for rows
   with no food-sourced ratio to derive from (no food selected, or
   the food's own item rounds to 0%). When a food row IS available we
   instead reverse-engineer a row-specific reference from its own
   amount↔daily pair (see _intakeMicroBuildRows), which is always
   more accurate than this generic table for that food.

   Vitamins / minerals / cholesterol / choline use FDA (2020) adult
   Daily Values — cross-checked against Whole Eggs' embedded `daily`
   percentages in nutrition-data.js and they match almost exactly
   (e.g. egg Selenium 30.7mcg/56% ⇒ implied DV 54.8mcg vs FDA's 55mcg).
   Amino acids use WHO/FAO/UNU (2007) indispensable amino acid
   requirements scaled to a 70kg reference adult, matching the basis
   nutrition-data.js's own amino `note` field already describes.
   Combined labels ("Methionine + Cysteine") use the WHO/FAO combined
   figure directly; the individually-split entries below are a rough
   estimate for when a food supplies only the single amino acid.
   `amount: null` = no scientifically-established DV — the row still
   accepts a raw mass entry, it just can't show a %. */
const MICRO_DV_REFERENCE = {
  // Vitamins
  'Vitamin A': { amount: 900, unit: 'mcg' },
  'Vitamin C': { amount: 90, unit: 'mg' },
  'Vitamin D': { amount: 20, unit: 'mcg' },
  'Vitamin E': { amount: 15, unit: 'mg' },
  'Vitamin K': { amount: 120, unit: 'mcg' },
  'Vitamin K1': { amount: 120, unit: 'mcg' },
  'Vitamin K2': { amount: 120, unit: 'mcg' },
  'Vitamin B1': { amount: 1.2, unit: 'mg' },
  'Thiamine': { amount: 1.2, unit: 'mg' },
  'Thiamine B1': { amount: 1.2, unit: 'mg' },
  'Vitamin B2': { amount: 1.3, unit: 'mg' },
  'Riboflavin': { amount: 1.3, unit: 'mg' },
  'Riboflavin B2': { amount: 1.3, unit: 'mg' },
  'Vitamin B3': { amount: 16, unit: 'mg' },
  'Niacin': { amount: 16, unit: 'mg' },
  'Niacin B3': { amount: 16, unit: 'mg' },
  'Vitamin B5': { amount: 5, unit: 'mg' },
  'Pantothenic Acid': { amount: 5, unit: 'mg' },
  'Vitamin B6': { amount: 1.7, unit: 'mg' },
  'Vitamin B7': { amount: 30, unit: 'mcg' },
  'Biotin': { amount: 30, unit: 'mcg' },
  'Vitamin B9': { amount: 400, unit: 'mcg' },
  'Folate': { amount: 400, unit: 'mcg' },
  'Vitamin B12': { amount: 2.4, unit: 'mcg' },
  'Choline': { amount: 550, unit: 'mg' },

  // Minerals
  'Calcium': { amount: 1300, unit: 'mg' },
  'Iron': { amount: 18, unit: 'mg' },
  'Magnesium': { amount: 420, unit: 'mg' },
  'Phosphorus': { amount: 1250, unit: 'mg' },
  'Potassium': { amount: 4700, unit: 'mg' },
  'Sodium': { amount: 2300, unit: 'mg' },
  'Zinc': { amount: 11, unit: 'mg' },
  'Selenium': { amount: 55, unit: 'mcg' },
  'Manganese': { amount: 2.3, unit: 'mg' },
  'Copper': { amount: 0.9, unit: 'mg' },
  'Iodine': { amount: 150, unit: 'mcg' },
  'Chromium': { amount: 35, unit: 'mcg' },
  'Molybdenum': { amount: 45, unit: 'mcg' },
  'Fluoride': { amount: null, unit: 'mg' },

  // Amino acids — WHO/FAO/UNU 2007, mg/kg/day × 70kg reference adult
  'Leucine': { amount: 2.73, unit: 'g' },
  'Isoleucine': { amount: 1.4, unit: 'g' },
  'Valine': { amount: 1.82, unit: 'g' },
  'Lysine': { amount: 2.1, unit: 'g' },
  'Methionine + Cysteine': { amount: 1.05, unit: 'g' },
  'Methionine': { amount: 0.7, unit: 'g' },
  'Cysteine': { amount: 0.35, unit: 'g' },
  'Threonine': { amount: 1.05, unit: 'g' },
  'Tryptophan': { amount: 0.28, unit: 'g' },
  'Phenylalanine + Tyrosine': { amount: 1.75, unit: 'g' },
  'Phenylalanine': { amount: 1.05, unit: 'g' },
  'Tyrosine': { amount: 0.7, unit: 'g' },
  'Histidine': { amount: 0.7, unit: 'g' },
  'Glycine': { amount: null, unit: 'g' },
  'Arginine': { amount: null, unit: 'g' },
  'Glutamine': { amount: null, unit: 'g' },

  // Other
  'Cholesterol': { amount: 300, unit: 'mg' },
  'Lutein + Zeaxanthin': { amount: null, unit: 'mcg' },
  'Omega-3': { amount: 1.6, unit: 'g' },
  'CoQ10': { amount: null, unit: 'mg' },
  'Creatine': { amount: null, unit: 'g' },
};

/* Nutrients with a meaningful, food-achievable upper-intake risk get
   the full 5-band red/orange/green/orange/red treatment the spec
   asked for. Everything else (most water-soluble vitamins, most
   minerals, all amino acids) has no realistic "too much from food"
   ceiling, so it stays green from 75% up instead of swinging back to
   red past 150%. This is a deliberate refinement of the original
   flat 5-band rule — flagged here since the literal version would
   otherwise colour e.g. 300% Vitamin C red, which would be misleading. */
const MICRO_CEILING_SENSITIVE = new Set([
  'Vitamin A','Vitamin D','Vitamin E','Vitamin K','Vitamin K1','Vitamin K2',
  'Sodium','Cholesterol','Iron','Zinc','Copper','Manganese','Selenium','Iodine'
]);

const MICRO_UNIT_GRAMS = { g: 1, mg: 0.001, mcg: 0.000001 };

function _intakeMicroConvert(value, fromUnit, toUnit) {
  if(value == null || isNaN(value)) return null;
  if(fromUnit === toUnit) return value;
  return value * MICRO_UNIT_GRAMS[fromUnit] / MICRO_UNIT_GRAMS[toUnit];
}

/* "160 mcg RAE" -> {value:160, unit:'mcg', suffix:'RAE'} */
function _intakeParseMicroAmount(str) {
  if(!str) return null;
  const m = String(str).trim().match(/^([\d.]+)\s*(mcg|µg|mg|g)\b\s*(.*)$/i);
  if(!m) return null;
  const unit = m[2].toLowerCase() === 'µg' ? 'mcg' : m[2].toLowerCase();
  return { value: parseFloat(m[1]), unit, suffix: m[3] || '' };
}

function _intakeMicroKey(section, label) {
  return section + '|' + label;
}

function _intakeJsEsc(str) {
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function _intakeMicroBarColor(daily, ceilingSensitive) {
  if(daily == null) return 'var(--border2)';
  if(daily < 50) return '#e63946';
  if(daily < 75) return '#ffae1f';
  if(!ceilingSensitive) return '#48b86d';
  if(daily <= 125) return '#48b86d';
  if(daily <= 150) return '#ffae1f';
  return '#e63946';
}

function _intakeMicroGetMass() {
  const el = document.getElementById('intake-input-mass');
  const m = el ? parseFloat(el.value) : NaN;
  return (!isNaN(m) && m > 0) ? m : 100;
}

/* Today's logged entries that are linked back to a food with a real
   nutritionProfile (via the foodId stamped on the entry in
   addIntakeEntry — only present when the entry was added from an
   autocomplete-selected, profiled food, not a manual/typed-in one).
   Each source carries the mass the entry was actually logged at, so
   scaling reflects what was really eaten that day, not just whatever
   happens to be sitting in the add-form right now. */
function _intakeMicroSourceEntries() {
  const entries = (typeof _intakeLoadEntries === 'function') ? _intakeLoadEntries() : [];
  const list = [];
  entries.forEach(e => {
    if(e.foodId == null) return;
    const f = (typeof foods !== 'undefined' && Array.isArray(foods)) ? foods.find(x => x.id === e.foodId) : null;
    if(!f || !f.nutritionProfile) return;
    list.push({ entry: e, food: f, mass: e.mass || 100 });
  });
  return list;
}

/* Builds the row model list for one section by summing every today's
   logged food's contribution (each already merged by sourceItems
   label — e.g. two eggs-containing entries both contributing
   "Vitamin D" combine into one row, the same way kcal/protein totals
   sum across entries). Falls back to the canonical NUTRITION_SECTIONS
   field list (using MICRO_DV_REFERENCE) when nothing logged today
   carries micronutrient data. sectionKey is one of 'vitamins' |
   'minerals' | 'amino' | 'extras'. */
function _intakeMicroBuildRows(sectionKey) {
  const sources = _intakeMicroSourceEntries();

  if(sources.length) {
    const agg = new Map(); // label -> { label, color, nativeUnit, suffix, value, daily }
    sources.forEach(({ food, mass }) => {
      const profile = food.nutritionProfile;
      const sectionItems = (profile[sectionKey] && Array.isArray(profile[sectionKey].items)) ? profile[sectionKey].items : [];
      const ratio = mass / 100;
      sectionItems.forEach(item => {
        const parsed = _intakeParseMicroAmount(item.amount);
        const nativeUnit = parsed ? parsed.unit : 'mg';
        const addValue = parsed ? parsed.value * ratio : 0;
        const addDaily = (typeof item.daily === 'number') ? item.daily * ratio : 0;
        const existing = agg.get(item.label);
        if(existing) {
          existing.value += addValue;
          existing.daily += addDaily;
        } else {
          agg.set(item.label, {
            label: item.label, color: item.color || 'var(--accent)',
            nativeUnit, suffix: parsed ? parsed.suffix : '',
            value: addValue, daily: addDaily,
          });
        }
      });
    });
    return Array.from(agg.values()).map(a => {
      let ref = null;
      if(a.value && a.daily) {
        // row-specific reference, reverse-engineered from the aggregate's own ratio
        ref = { amount: a.value / (a.daily / 100), unit: a.nativeUnit };
      } else if(MICRO_DV_REFERENCE[a.label]) {
        ref = MICRO_DV_REFERENCE[a.label];
      }
      return {
        section: sectionKey, label: a.label, color: a.color,
        nativeUnit: a.nativeUnit, suffix: a.suffix, value: a.value, daily: a.daily, ref,
      };
    });
  }

  // Fallback — canonical field list, nothing logged today with profile data
  const sec = (typeof NUTRITION_SECTIONS !== 'undefined') ? NUTRITION_SECTIONS.find(s => s.key === sectionKey) : null;
  const fields = sec ? sec.fields : [];
  return fields.map(label => {
    const ref = MICRO_DV_REFERENCE[label] || null;
    return {
      section: sectionKey, label, color: 'var(--accent)',
      nativeUnit: ref ? ref.unit : 'mg', suffix: '', value: null, daily: null, ref,
    };
  });
}

/* Resolves a row's currently-displayed unit/amount/daily%, accounting
   for any manual override stored in _intakeMicroState. */
function _intakeMicroRowData(row) {
  const key = _intakeMicroKey(row.section, row.label);
  const override = _intakeMicroState.overrides[key];
  if(override) {
    if(override.unit === '%') {
      const daily = override.amount;
      const value = (row.ref && row.ref.amount != null) ? (daily / 100) * row.ref.amount : null;
      return { unit: '%', amount: override.amount, value, daily };
    }
    const daily = (row.ref && row.ref.amount != null)
      ? (_intakeMicroConvert(override.amount, override.unit, row.ref.unit) / row.ref.amount) * 100
      : null;
    return { unit: override.unit, amount: override.amount, value: override.amount, daily };
  }
  return { unit: row.nativeUnit, amount: row.value, value: row.value, daily: row.daily };
}

function _intakeMicroRowHTML(row) {
  const key   = _intakeMicroKey(row.section, row.label);
  const id    = 'micro-' + key.replace(/[^a-z0-9]+/gi, '_').toLowerCase();
  const data  = _intakeMicroRowData(row);
  const hasRef    = !!(row.ref && row.ref.amount != null);
  const daily     = data.daily != null ? Math.round(data.daily) : null;
  const barColor  = _intakeMicroBarColor(daily, MICRO_CEILING_SENSITIVE.has(row.label));
  const overridden = !!_intakeMicroState.overrides[key];
  const amtDisplay = (data.amount != null) ? (Math.round(data.amount * 100) / 100) : '';
  const sectionJs = _intakeJsEsc(row.section);
  const labelJs   = _intakeJsEsc(row.label);

  return `
    <div class="intake-micro-row">
      <div class="intake-micro-row-top">
        <span class="intake-micro-label"><span class="intake-micro-dot" style="background:${row.color}"></span>${_intakeEsc(row.label)}</span>
        <button type="button" class="intake-micro-reset" id="${id}-reset" style="${overridden?'':'display:none'}" onclick="_intakeMicroResetRow('${sectionJs}','${labelJs}')">reset</button>
      </div>
      <div class="intake-micro-row-controls">
        <input type="number" inputmode="decimal" step="0.01" min="0" class="intake-micro-amt-input" id="${id}-amt"
          value="${amtDisplay}" placeholder="0" autocomplete="off"
          oninput="_intakeMicroAmountInput('${sectionJs}','${labelJs}', this.value)" />
        <select class="intake-micro-unit-select" onchange="_intakeMicroUnitClick('${sectionJs}','${labelJs}', this.value)">
          <option value="g"${data.unit==='g'?' selected':''}>G</option>
          <option value="mg"${data.unit==='mg'?' selected':''}>MG</option>
          <option value="mcg"${data.unit==='mcg'?' selected':''}>µG</option>
          <option value="%"${data.unit==='%'?' selected':''}${hasRef?'':' disabled'}>%</option>
        </select>
      </div>
      <div class="intake-micro-bar-wrap">
        <div class="intake-micro-bar"><div class="intake-micro-bar-fill" id="${id}-bar" style="width:${daily!=null?Math.min(Math.max(daily,0),100):0}%;background:${barColor}"></div></div>
        <span class="intake-micro-pct" id="${id}-pct" style="color:${barColor}">${daily!=null?daily+'%':'—'}</span>
      </div>
    </div>
  `;
}

function _intakeMicroSectionHTML(sectionKey, sectionLabel) {
  const rows = _intakeMicroBuildRows(sectionKey);
  if(!rows.length) return '';
  return `
    <div class="intake-micro-section-hdr">${_intakeEsc(sectionLabel)}</div>
    ${rows.map(row => _intakeMicroRowHTML(row)).join('')}
  `;
}

function _intakeRenderMicro() {
  const card = document.getElementById('intakeMicroCard');
  if(!card) return;

  const sources = _intakeMicroSourceEntries();
  const note = sources.length
    ? `Auto-filled from ${sources.length} logged food${sources.length > 1 ? 's' : ''} with micronutrient data today, scaled to their logged mass. Edit any row to override.`
    : `No logged food with micronutrient data today — showing the default list. Log a profiled food in MACRO, or enter values manually below.`;

  card.innerHTML = `
    <h3>Micronutrients</h3>
    <div class="intake-micro-note">${note}</div>
    ${_intakeMicroSectionHTML('vitamins', 'Vitamins')}
    ${_intakeMicroSectionHTML('minerals', 'Minerals')}
    ${_intakeMicroSectionHTML('amino', 'Amino Acids')}
    ${_intakeMicroSectionHTML('extras', 'Other')}
  `;

  _intakeRenderMicroCalendar();
  _intakeRenderMicroNote(INTAKE_MICRO_CAL_STATE.selectedDate);
}

function _intakeMicroUnitClick(section, label, unit) {
  const key  = _intakeMicroKey(section, label);
  const row  = _intakeMicroBuildRows(section).find(r => r.label === label);
  if(!row) return;
  const current = _intakeMicroRowData(row);
  if(unit === current.unit) return; // no-op, already showing this unit
  if(unit === '%' && !(row.ref && row.ref.amount != null)) return; // guarded — option is disabled anyway

  let newAmount;
  if(unit === '%') {
    newAmount = current.daily != null ? Math.round(current.daily * 10) / 10 : 0;
  } else if(current.unit === '%') {
    newAmount = (row.ref && row.ref.amount != null)
      ? Math.round(_intakeMicroConvert((current.daily / 100) * row.ref.amount, row.ref.unit, unit) * 1000) / 1000
      : 0;
  } else {
    newAmount = current.amount != null ? Math.round(_intakeMicroConvert(current.amount, current.unit, unit) * 1000) / 1000 : 0;
  }
  _intakeMicroState.overrides[key] = { amount: newAmount || 0, unit };
  _intakeSaveMicroOverrides();
  _intakeRenderMicro();
}

function _intakeMicroAmountInput(section, label, valueStr) {
  const key = _intakeMicroKey(section, label);
  const row = _intakeMicroBuildRows(section).find(r => r.label === label);
  if(!row) return;
  const current = _intakeMicroRowData(row);
  const amount  = parseFloat(valueStr);
  _intakeMicroState.overrides[key] = { amount: isNaN(amount) ? 0 : amount, unit: current.unit };
  _intakeSaveMicroOverrides();

  // Update just this row's bar + % live, without a full re-render (keeps focus/cursor in the input)
  const id   = 'micro-' + key.replace(/[^a-z0-9]+/gi, '_').toLowerCase();
  const data = _intakeMicroRowData(row);
  const daily = data.daily != null ? Math.round(data.daily) : null;
  const barColor = _intakeMicroBarColor(daily, MICRO_CEILING_SENSITIVE.has(label));
  const bar = document.getElementById(id + '-bar');
  const pct = document.getElementById(id + '-pct');
  const resetBtn = document.getElementById(id + '-reset');
  if(bar) { bar.style.width = (daily != null ? Math.min(Math.max(daily,0),100) : 0) + '%'; bar.style.background = barColor; }
  if(pct) { pct.textContent = daily != null ? daily + '%' : '—'; pct.style.color = barColor; }
  if(resetBtn) { resetBtn.style.display = ''; }
}

function _intakeMicroResetRow(section, label) {
  const key = _intakeMicroKey(section, label);
  delete _intakeMicroState.overrides[key];
  _intakeSaveMicroOverrides();
  _intakeRenderMicro();
}

/* ════════════════════════════════════════════════════════════════
   MICRO HISTORY — calendar + "what was missed" note
   ════════════════════════════════════════════════════════════════
   A second, independent calendar (own nav state) scoped to the Micro
   tab. Each day is graded by what fraction of the canonical tracked
   micronutrients (those with an established Daily Value, per
   MICRO_DV_REFERENCE) reached at least 75% of their daily value that
   day, summed the same way _intakeMicroBuildRows sums across logged
   entries. Selecting a day (or just landing on the tab — it defaults
   to today) shows a note panel listing whatever fell short.
   ════════════════════════════════════════════════════════════════ */

const INTAKE_MICRO_CAL_STATE = (function() {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth(), selectedDate: _intakeDateKey(now) };
})();

/* The full set of vitamin/mineral/amino/extra labels that have a
   real, numeric Daily Value to grade against (skips entries like
   Fluoride or Creatine where MICRO_DV_REFERENCE.amount is null —
   there's no scientific "75%" to measure those against). */
let _microTrackedLabelsCache = null;
function _intakeMicroTrackedLabels() {
  if(_microTrackedLabelsCache) return _microTrackedLabelsCache;
  const set = new Set();
  if(typeof NUTRITION_SECTIONS !== 'undefined') {
    ['vitamins','minerals','amino','extras'].forEach(key => {
      const sec = NUTRITION_SECTIONS.find(s => s.key === key);
      if(sec) sec.fields.forEach(f => { if(MICRO_DV_REFERENCE[f] && MICRO_DV_REFERENCE[f].amount != null) set.add(f); });
    });
  }
  _microTrackedLabelsCache = Array.from(set);
  return _microTrackedLabelsCache;
}

/* Sums daily% across every profiled entry logged on dateKey (defaults
   to today), keyed by nutrient label — the same scaling logic as
   _intakeMicroBuildRows but date-scoped and override-free (history
   grading always reflects what was actually logged that day). */
function _intakeMicroDailyAgg(dateKey) {
  const entries = dateKey ? _intakeLoadEntriesForDate(dateKey) : _intakeLoadEntries();
  const map = new Map();
  let loggedCount = 0;
  entries.forEach(e => {
    if(e.foodId == null) return;
    const f = (typeof foods !== 'undefined' && Array.isArray(foods)) ? foods.find(x => x.id === e.foodId) : null;
    if(!f || !f.nutritionProfile) return;
    loggedCount++;
    const ratio = (e.mass || 100) / 100;
    ['vitamins','minerals','amino','extras'].forEach(sectionKey => {
      const items = (f.nutritionProfile[sectionKey] && Array.isArray(f.nutritionProfile[sectionKey].items)) ? f.nutritionProfile[sectionKey].items : [];
      items.forEach(item => {
        if(typeof item.daily !== 'number') return;
        map.set(item.label, (map.get(item.label) || 0) + item.daily * ratio);
      });
    });
  });
  return { map, loggedCount };
}

/* null = nothing logged that day (no grade yet). 'success' = 60%+ of
   tracked nutrients hit 75%+ DV. 'missed' = below that bar. */
function _intakeMicroDayStatus(dateKey) {
  const { map, loggedCount } = _intakeMicroDailyAgg(dateKey);
  if(loggedCount === 0) return null;
  const tracked = _intakeMicroTrackedLabels();
  if(tracked.length === 0) return null;
  let good = 0;
  tracked.forEach(label => { if((map.get(label) || 0) >= 75) good++; });
  return (good / tracked.length) >= 0.6 ? 'success' : 'missed';
}

/* Every tracked nutrient under 75% DV that day, lowest first. */
function _intakeMicroMissedList(dateKey) {
  const { map } = _intakeMicroDailyAgg(dateKey);
  return _intakeMicroTrackedLabels()
    .map(label => ({ label, daily: Math.round(map.get(label) || 0) }))
    .filter(r => r.daily < 75)
    .sort((a, b) => a.daily - b.daily);
}

function _intakeMicroCalNavMonth(delta) {
  let { year, month } = INTAKE_MICRO_CAL_STATE;
  month += delta;
  if(month < 0)  { month = 11; year -= 1; }
  if(month > 11) { month = 0;  year += 1; }
  INTAKE_MICRO_CAL_STATE.year = year;
  INTAKE_MICRO_CAL_STATE.month = month;
  _intakeRenderMicroCalendar();
}

function _intakeRenderMicroCalendar() {
  const card = document.getElementById('intakeMicroCalendarCard');
  if(!card) return;

  const { year, month } = INTAKE_MICRO_CAL_STATE;
  const now = new Date();
  const todayKey = _intakeDateKey(now);
  const isCurrentMonth = (year === now.getFullYear() && month === now.getMonth());

  const firstDow = new Date(year, month, 1).getDay();
  const numDays  = _intakeCalDaysInMonth(year, month);
  const monthLabel = new Date(year, month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  let cellsHtml = '';
  for(let i = 0; i < firstDow; i++) {
    cellsHtml += `<div class="intake-cal-cell intake-cal-empty"></div>`;
  }
  for(let d = 1; d <= numDays; d++) {
    const dateKey  = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isFuture = dateKey > todayKey;
    const isToday  = dateKey === todayKey;
    const isSelected = INTAKE_MICRO_CAL_STATE.selectedDate === dateKey;

    let statusClass = '';
    if(!isFuture) {
      const status = _intakeMicroDayStatus(dateKey);
      if(status === 'success') statusClass = 'intake-cal-success';
      else if(status === 'missed') statusClass = 'intake-cal-missed';
    }

    const classes = ['intake-cal-cell'];
    if(isFuture) classes.push('intake-cal-future');
    if(statusClass) classes.push(statusClass);
    if(isToday) classes.push('intake-cal-today');
    if(isSelected) classes.push('intake-cal-selected');

    cellsHtml += `<div class="${classes.join(' ')}"${isFuture ? '' : ` onclick="selectIntakeMicroDay('${dateKey}')"`}>${d}</div>`;
  }

  card.innerHTML = `
    <div class="intake-target-hdr">
      <h3>Micro History</h3>
    </div>
    <div class="intake-cal-hdr">
      <button class="intake-cal-nav-btn" onclick="_intakeMicroCalNavMonth(-1)" aria-label="Previous month">‹</button>
      <div class="intake-cal-title">${monthLabel}</div>
      <button class="intake-cal-nav-btn" onclick="_intakeMicroCalNavMonth(1)" aria-label="Next month" ${isCurrentMonth ? 'disabled' : ''}>›</button>
    </div>
    <div class="intake-cal-grid">
      <div class="intake-cal-dow">S</div><div class="intake-cal-dow">M</div><div class="intake-cal-dow">T</div><div class="intake-cal-dow">W</div><div class="intake-cal-dow">T</div><div class="intake-cal-dow">F</div><div class="intake-cal-dow">S</div>
      ${cellsHtml}
    </div>
    <div class="intake-cal-legend">
      <span><i class="intake-cal-legend-dot intake-cal-success"></i>Good coverage</span>
      <span><i class="intake-cal-legend-dot intake-cal-missed"></i>Gaps found</span>
    </div>
  `;
}

function selectIntakeMicroDay(dateKey) {
  INTAKE_MICRO_CAL_STATE.selectedDate = dateKey;
  _intakeRenderMicroCalendar();
  _intakeRenderMicroNote(dateKey);
}

function closeIntakeMicroNote() {
  INTAKE_MICRO_CAL_STATE.selectedDate = _intakeDateKey(new Date());
  _intakeRenderMicroCalendar();
  _intakeRenderMicroNote(INTAKE_MICRO_CAL_STATE.selectedDate);
}

function _intakeRenderMicroNote(dateKey) {
  const card = document.getElementById('intakeMicroNoteCard');
  if(!card) return;

  const todayKey = _intakeDateKey(new Date());
  const isToday  = dateKey === todayKey;

  const missed = _intakeMicroMissedList(dateKey);
  const status = _intakeMicroDayStatus(dateKey);
  const dateLabel = _intakeParseDateKey(dateKey).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  if(status === null) {
    card.style.display = 'none';
    return;
  }

  card.style.display = '';
  let html = `<div class="intake-target-hdr"><h3>${isToday ? 'Today' : dateLabel}</h3></div>`;

  if(missed.length === 0) {
    html += `<div class="intake-micro-note" style="color:var(--accent)">✓ All tracked nutrients hit 75% DV${isToday ? ' today' : ' that day'}.</div>`;
  } else {
    html += `<div class="intake-micro-note">Nutrients under 75% DV${isToday ? ' today' : ' that day'}:</div>`;
    html += `<div class="intake-micro-missed-list">`;
    missed.forEach(r => {
      html += `<div class="intake-micro-missed-row"><span class="intake-micro-missed-label">${_intakeEsc(r.label)}</span><span class="intake-micro-missed-pct">${r.daily}%</span></div>`;
    });
    html += `</div>`;
  }

  card.innerHTML = html;
}
