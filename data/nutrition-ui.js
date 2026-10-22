/* ┌─ @file: js/nutrition-ui.js ─────────────────────────────────────── */
/* ══ NUTRITION DETAIL UI ═════════════════════════════════════════════
   Extracted from index.html (was the inline "NutritionDetailData" /
   "openNutrient" block). NOT the food database — that's
   library/nutrition-data.js (foods) and
   library/nutrient-info-data.js (NUTRIENT_INFO/NUTRITION_SECTIONS).
   This file is purely the popups/modals that render that data.

   Two overlays live here:

   1) Nutrient overlay (#nutrientOverlay) — single-nutrient info card
        openNutrient(event, name)

   2) Macro breakdown overlay (#macroOverlay) — full food profile with
      a clickable SVG donut (macros) drilling into per-section nutrient
      lists, each drilling into a single nutrient detail view
        openMacroBreakdown(name)         entry point, sets _macroFood
        closeMacroBreakdown()
        _nutritionShowSection(key)       renders sidebar + active section
        _nutritionMakeSvgDonut(...)      builds the interactive donut
        _nutrSegHover(...)               donut segment hover/tap state
        _nutritionShowMacroDetail(label) macro (protein/carb/fat) drill-down
        _nutritionShowNutrientDetail(...) single nutrient drill-down
        nutritionMacroContent / nutritionNutrientContent /
        nutritionDailyDonut / nutritionPlaceholderContent
                                          HTML builders for each section
        nutritionIcon / eggLineIcon      small inline SVG icon helpers
        escapeHtml                       local-only HTML escaping util

   Depends on globals defined elsewhere:
     NUTRIENTS, NUTRIENT_INFO, NUTRITION_SECTIONS  (library/nutrient-info-data.js)
     foods                                          (library/nutrition-data.js)
     closeModal()                                   (index.html, Escape-key handler)

   Load anywhere after library/nutrition-data.js and
   library/nutrient-info-data.js, before the page can be interacted with
   (defines functions only, nothing runs at parse time).
════════════════════════════════════════════════════════════════════ */

function openNutrient(event, name){
  event.stopPropagation();
  const nutrient = (typeof NUTRIENTS !== 'undefined' ? NUTRIENTS[name] : undefined) || (typeof NUTRIENT_INFO !== 'undefined' ? NUTRIENT_INFO[name] : undefined);
  if(!nutrient) return;

  const title = nutrient.name || nutrient.display || name;
  const category = nutrient.category || (typeof NUTRITION_SECTIONS !== 'undefined' ? (NUTRITION_SECTIONS.find(section => section.fields?.includes(name) || section.fields?.includes(nutrient.display)) || {}).label : '') || '';
  const desc = nutrient.desc || [nutrient.role, nutrient.fitness].filter(Boolean).join('\n\n') || '';
  const tags = nutrient.tags || (category ? [category] : []);

  document.getElementById('nName').textContent = title;
  document.getElementById('nCategory').textContent = category;
  document.getElementById('nDesc').textContent = desc;
  document.getElementById('nTags').innerHTML = tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('nutrientOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

/* @module: NutritionDetailData — shared state & overlay lifecycle ─────────── */

let _macroFood = null;

function closeMacroBreakdown() {
  document.getElementById('macroOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* @end: NutritionDetailData — overlay lifecycle ──────────────────────────── */

function escapeHtml(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }[ch]));
}

/* @see: library/nutrient-info-data.js — NUTRIENT_INFO + NUTRITION_SECTIONS */

/* @module: NutritionDetailData — nutrient detail view ──────────────────── */

function _nutritionShowNutrientDetail(sectionKey, itemIndex) {
  const food = _macroFood || {};
  const section = NUTRITION_SECTIONS.find(s => s.key === sectionKey);
  const profile = food.nutritionProfile || {};
  const data = profile[sectionKey] || {};
  const items = Array.isArray(data.items) ? data.items : [];
  const item = items[itemIndex];
  if (!item || !section) return;

  const daily   = Math.max(0, Number(item.daily || 0));
  const barColor= item.color || 'var(--accent)';
  const info    = NUTRIENT_INFO[item.label] || {};

  /* ── animate bar width after insertion ── */
  const barId = 'nutr-det-bar-' + Date.now();

  document.getElementById('macroDetailCol').innerHTML = `
    <div class="nutrition-shell">
      <button class="nutrition-close" onclick="closeMacroBreakdown()" aria-label="Close nutrition profile">×</button>

      <button class="nutr-det-back" onclick="_nutritionShowSection('${escapeHtml(sectionKey)}')">← ${escapeHtml(section.label)}</button>

      <div class="nutr-det-hero">
        <span class="nutr-det-dot" style="background:${barColor}"></span>
        <h2 class="nutr-det-name">${escapeHtml(NUTRIENT_INFO[item.label]?.display || item.label)}</h2>
      </div>
      ${item.amount ? `<div class="nutr-det-amount">${escapeHtml(item.amount)}</div>` : ''}

      ${daily > 0 ? `
        <div class="nutr-det-bar-wrap">
          <div class="nutr-det-bar-label">
            <span>Daily Value</span>
            <span style="color:${barColor};font-weight:700">${daily}%</span>
          </div>
          <div class="nutr-det-bar">
            <div id="${barId}" class="nutr-det-bar-fill" style="width:0%;background:${barColor}"></div>
          </div>
          <div class="nutr-det-bar-hint">per 100 g · approximate adult daily requirement</div>
        </div>
      ` : `
        <div class="nutr-det-bar-wrap">
          <div class="nutr-det-bar-label"><span>Daily Value</span><span style="color:var(--text3)">—</span></div>
          <div class="nutr-det-bar"><div class="nutr-det-bar-fill" style="width:0%;background:var(--border2)"></div></div>
          <div class="nutr-det-bar-hint">no established adult daily value</div>
        </div>
      `}

      ${info.role ? `
        <div class="nutr-det-info">
          <div class="nutr-det-info-label">What it does</div>
          <div class="nutr-det-info-text">${escapeHtml(info.role)}</div>
        </div>` : ''}

      ${info.fitness ? `
        <div class="nutr-det-info">
          <div class="nutr-det-info-label">For athletes</div>
          <div class="nutr-det-info-text">${escapeHtml(info.fitness)}</div>
        </div>` : ''}

      ${food.desc ? `
        <div class="nutr-det-info" style="border-color:var(--border)">
          <div class="nutr-det-info-label">About this food</div>
          <div class="nutr-det-info-text">${escapeHtml(food.desc)}</div>
        </div>` : ''}
    </div>
  `;

  /* animate bar after DOM paint */
  if (daily > 0) {
    requestAnimationFrame(() => {
      const bar = document.getElementById(barId);
      if (bar) bar.style.width = Math.min(daily, 100) + '%';
    });
  }
}


function nutritionIcon(name) {
  const common = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
  const icons = {
    pie: `<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path ${common} d="M12 3v9h9"/><path ${common} d="M21 12a9 9 0 1 1-9-9"/></svg>`,
    pill: `<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path ${common} d="M10 21 21 10a5 5 0 0 0-7-7L3 14a5 5 0 0 0 7 7Z"/><path ${common} d="m8 12 4 4"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path ${common} d="M5 21c0-7 4-15 14-18 1 10-5 16-14 18Z"/><path ${common} d="M5 21c3-5 7-8 12-10"/></svg>`,
    nodes: `<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><circle ${common} cx="12" cy="5" r="2.2"/><circle ${common} cx="5" cy="18" r="2.2"/><circle ${common} cx="19" cy="18" r="2.2"/><path ${common} d="m11 7-5 9M13 7l5 9M7.3 18h9.4"/></svg>`,
    drop: `<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path ${common} d="M12 3s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13Z"/></svg>`
  };
  return icons[name] || icons.pie;
}

function eggLineIcon() {
  return `<svg viewBox="0 0 72 72" width="58" height="58" aria-hidden="true">
    <path d="M36 10C24 10 16 29 16 43c0 12 8 20 20 20s20-8 20-20C56 29 48 10 36 10Z" fill="none" stroke="currentColor" stroke-width="3.2"/>
    <path d="M27 28c2-5 5-9 9-11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`;
}

function openMacroBreakdown(name) {
  const all = typeof foods !== 'undefined' ? foods : [];
  _macroFood = all.find(f => f.name === name) || { name };
  _nutritionShowSection('macro');
  document.getElementById('macroOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function _nutritionShowSection(activeKey) {
  const food = _macroFood || {};
  document.getElementById('macroSideCol').innerHTML = `
    <div class="nutrition-nav-title">NUTRITION</div>
    ${NUTRITION_SECTIONS.map(section => `
      <div class="nutrition-nav-item ${section.key === activeKey ? 'active' : ''}" onclick="_nutritionShowSection('${section.key}')">
        <span class="nutrition-nav-icon">${nutritionIcon(section.icon)}</span>
        <span>${section.label}</span>
      </div>
    `).join('')}
  `;

  const active = NUTRITION_SECTIONS.find(s => s.key === activeKey) || NUTRITION_SECTIONS[0];
  const profile = food.nutritionProfile || {};
  const content = activeKey === 'macro'
    ? nutritionMacroContent(profile)
    : nutritionNutrientContent(active, profile[activeKey]);

  document.getElementById('macroDetailCol').innerHTML = `
    <div class="nutrition-shell">
      <button class="nutrition-close" onclick="closeMacroBreakdown()" aria-label="Close nutrition profile">×</button>
      <section class="nutrition-card nutrition-hero">
        <div class="nutrition-egg-icon">${eggLineIcon()}</div>
        <div>
          <h2>${escapeHtml(food.name || 'Food Profile')}</h2>
          <p>Explore the complete nutritional profile of ${(food.name || 'this food').toLowerCase()}.</p>
          <p>Use each section to dive deeper into nutrients, vitamins, minerals, and more.</p>
        </div>
      </section>
      ${content}
    </div>
  `;
}

/* @module: NutritionDetailData — macro breakdown view ───────────────────── */

function _nutritionMakeSvgDonut(macros, calories) {
  /* Build an interactive SVG donut replacing the old conic-gradient div.
     Each macro becomes a <path> arc segment that highlights on hover/tap
     and updates the central label. */
  const SIZE   = 280;
  const CX     = SIZE / 2;
  const CY     = SIZE / 2;
  const R_OUT  = 126;
  const R_IN   = 61;   /* hole radius */
  const GAP    = 0.018; /* radians gap between segments */

  function polarXY(cx, cy, r, angleRad) {
    return [cx + r * Math.cos(angleRad), cy + r * Math.sin(angleRad)];
  }

  function arcPath(startDeg, endDeg, rOut, rIn) {
    const s = (startDeg - 90) * Math.PI / 180;
    const e = (endDeg   - 90) * Math.PI / 180;
    const large = (endDeg - startDeg) > 180 ? 1 : 0;
    const [ox1, oy1] = polarXY(CX, CY, rOut, s);
    const [ox2, oy2] = polarXY(CX, CY, rOut, e);
    const [ix1, iy1] = polarXY(CX, CY, rIn,  e);
    const [ix2, iy2] = polarXY(CX, CY, rIn,  s);
    return [
      `M ${ox1.toFixed(3)} ${oy1.toFixed(3)}`,
      `A ${rOut} ${rOut} 0 ${large} 1 ${ox2.toFixed(3)} ${oy2.toFixed(3)}`,
      `L ${ix1.toFixed(3)} ${iy1.toFixed(3)}`,
      `A ${rIn} ${rIn} 0 ${large} 0 ${ix2.toFixed(3)} ${iy2.toFixed(3)}`,
      'Z'
    ].join(' ');
  }

  const gapDeg = GAP * 180 / Math.PI;
  const svgId  = 'nutr-svg-' + Date.now();

  /* Normalise percents so segments always fill the full 360°.
     m.percent may be a true % (sums to ~100) or already degrees — either
     way, scale the raw values proportionally to fill 360. */
  const rawPcts = macros.map(m => Math.max(Number(m.percent) || 0, 0));
  const pctSum  = rawPcts.reduce((a, b) => a + b, 0) || 1;
  const degSpans = rawPcts.map(v => (v / pctSum) * 360);

  let cursor = 0;
  const segments = macros.map((m, i) => {
    const span = degSpans[i];
    const s    = cursor + gapDeg;
    const e    = cursor + span - gapDeg;
    cursor    += span;
    const mid  = (s + e) / 2;
    return { m, s, e, mid, i };
  });

  const paths = segments.map(({ m, s, e, i }) => {
    const d = arcPath(s, e, R_OUT, R_IN);
    return `<path
      d="${d}"
      fill="${escapeHtml(m.color)}"
      data-nutr-seg="${i}"
      data-label="${escapeHtml(m.label)}"
      data-grams="${escapeHtml(String(m.grams))}"
      data-kcal="${escapeHtml(String(m.kcal))}"
      data-calories="${escapeHtml(String(calories))}"
      style="cursor:pointer;transition:opacity .15s,filter .15s"
      onmouseenter="_nutrSegHover(this,'${svgId}',true)"
      onmouseleave="_nutrSegHover(this,'${svgId}',false)"
      ontouchstart="_nutrSegHover(this,'${svgId}',true)"
      ontouchend="_nutrSegHover(this,'${svgId}',false)"
      onclick="_nutritionShowMacroDetail('${escapeHtml(m.label)}')"
      role="button" tabindex="0" aria-label="${escapeHtml(m.label)} ${escapeHtml(String(m.percent))}%"
    />`;
  }).join('\n');

  return `
    <svg id="${svgId}" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}"
         xmlns="http://www.w3.org/2000/svg" aria-label="Macro breakdown donut chart"
         style="display:block;overflow:visible">
      ${paths}
      <!-- centre hole -->
      <circle cx="${CX}" cy="${CY}" r="${R_IN}" fill="var(--bg2)"/>
      <!-- centre label — updated by JS on hover -->
      <text id="${svgId}-val" x="${CX}" y="${CY - 9}" text-anchor="middle"
            font-family="var(--mono)" font-size="22" font-weight="700"
            fill="var(--text)">${escapeHtml(String(calories))}</text>
      <text id="${svgId}-sub" x="${CX}" y="${CY + 13}" text-anchor="middle"
            font-family="var(--sans)" font-size="11" fill="var(--text2)">kcal</text>
    </svg>
  `;
}

function _nutrSegHover(el, svgId, entering) {
  /* Highlight the hovered segment and update the centre label */
  const svg = document.getElementById(svgId);
  if (!svg) return;
  const allPaths = svg.querySelectorAll('path[data-nutr-seg]');
  const valEl = document.getElementById(svgId + '-val');
  const subEl = document.getElementById(svgId + '-sub');

  if (entering) {
    allPaths.forEach(p => { p.style.opacity = p === el ? '1' : '0.45'; });
    el.style.filter = 'brightness(1.18)';
    if (valEl) valEl.textContent = el.dataset.grams;
    if (subEl) subEl.textContent = el.dataset.label.toLowerCase();
  } else {
    allPaths.forEach(p => { p.style.opacity = '1'; p.style.filter = ''; });
    if (valEl) valEl.textContent = el.dataset.calories;
    if (subEl) subEl.textContent = 'kcal';
  }
}

/* @module: NutritionDetailData — macro detail (Protein / Fat / Carbs) ───── */

function _nutritionShowMacroDetail(macroLabel) {
  /* Navigate the detail column to the dedicated macro info page */
  const food    = _macroFood || {};
  const profile = food.nutritionProfile || {};
  const macros  = Array.isArray(profile.macros) ? profile.macros : [];
  const m       = macros.find(x => x.label === macroLabel);
  const info    = NUTRIENT_INFO[macroLabel] || {};
  const barId   = 'nutr-macro-bar-' + Date.now();
  const color   = (m && m.color) || 'var(--accent)';

  document.getElementById('macroDetailCol').innerHTML = `
    <div class="nutrition-shell">
      <button class="nutrition-close" onclick="closeMacroBreakdown()" aria-label="Close">×</button>
      <button class="nutr-det-back" onclick="_nutritionShowSection('macro')">← Macros</button>

      <div class="nutr-det-hero">
        <span class="nutr-det-dot" style="background:${color}"></span>
        <h2 class="nutr-det-name">${escapeHtml(macroLabel)}</h2>
      </div>

      ${m ? `<div class="nutr-det-amount">${escapeHtml(m.grams)} · ${escapeHtml(String(m.percent))}% of total calories · ${escapeHtml(String(m.kcal))} kcal</div>` : ''}

      ${m ? `
        <div class="nutr-det-bar-wrap">
          <div class="nutr-det-bar-label">
            <span>% of total calories</span>
            <span style="color:${color};font-weight:700">${escapeHtml(String(m.percent))}%</span>
          </div>
          <div class="nutr-det-bar">
            <div id="${barId}" class="nutr-det-bar-fill" style="width:0%;background:${color}"></div>
          </div>
        </div>
      ` : ''}

      ${info.role ? `
        <div class="nutr-det-info">
          <div class="nutr-det-info-label">What it does</div>
          <div class="nutr-det-info-text">${escapeHtml(info.role)}</div>
        </div>` : ''}

      ${info.fitness ? `
        <div class="nutr-det-info">
          <div class="nutr-det-info-label">For athletes</div>
          <div class="nutr-det-info-text">${escapeHtml(info.fitness)}</div>
        </div>` : ''}

      ${food.desc ? `
        <div class="nutr-det-info" style="border-color:var(--border)">
          <div class="nutr-det-info-label">About this food</div>
          <div class="nutr-det-info-text">${escapeHtml(food.desc)}</div>
        </div>` : ''}
    </div>
  `;

  if (m) {
    requestAnimationFrame(() => {
      const bar = document.getElementById(barId);
      if (bar) bar.style.width = Math.min(Number(m.percent), 100) + '%';
    });
  }
}

/* @module: NutritionDetailData — macro section HTML builder ─────────────── */

function nutritionMacroContent(profile) {
  const macros = Array.isArray(profile.macros) ? profile.macros : [];
  if (!macros.length) {
    return nutritionPlaceholderContent(NUTRITION_SECTIONS[0]);
  }
  return `
    <section class="nutrition-card nutrition-breakdown">
      <h3>Macronutrient Breakdown</h3>
      <div class="nutrition-serving">${escapeHtml(profile.servingLabel || 'Amount per serving')}</div>
      <div class="nutrition-macro-layout">
        <div class="nutrition-donut-wrap">
          ${_nutritionMakeSvgDonut(macros, profile.calories || '')}
        </div>
        <div class="nutrition-macro-list">
          ${macros.map(m => `
            <div class="nutrition-macro-row nutr-clickable"
                 onclick="_nutritionShowMacroDetail('${escapeHtml(m.label)}')"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();_nutritionShowMacroDetail('${escapeHtml(m.label)}')}"
                 role="button" tabindex="0" aria-label="View ${escapeHtml(m.label)} details">
              <span class="nutrition-macro-dot" style="background:${m.color}"></span>
              <div class="nutrition-macro-main">
                <div class="nutrition-macro-name">${escapeHtml(m.label)}</div>
                <div class="nutrition-macro-sub">${escapeHtml(String(m.percent))}% of total calories</div>
              </div>
              <div class="nutrition-macro-value">${escapeHtml(m.grams)}<div class="nutrition-macro-kcal">${escapeHtml(String(m.kcal))} kcal</div></div>
              <span class="nutr-row-arrow">›</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    <div class="nutrition-card nutrition-info">
      <span aria-hidden="true">ⓘ</span>
      <span>${escapeHtml(profile.note || 'Values are approximate and ready to be reviewed.')}</span>
    </div>
  `;
}

/* @end: NutritionDetailData ─────────────────────────────────────────────── */

/* @module: NutritionDetailData — daily-dose donut (vitamins / minerals) ─── */

function nutritionDailyDonut(items, centerLabel, subLabel) {
  /* SVG version: interactive arc segments for vitamins/minerals daily-dose donut */
  const entries = (items || []).filter(item => Number(item.daily) > 0);
  if (!entries.length) {
    return `<svg viewBox="0 0 280 280" width="280" height="280" xmlns="http://www.w3.org/2000/svg">
      <circle cx="140" cy="140" r="126" fill="var(--border2)"/>
      <circle cx="140" cy="140" r="61"  fill="var(--bg2)"/>
      <text x="140" y="131" text-anchor="middle" font-family="var(--mono)" font-size="22"
            font-weight="700" fill="var(--text)">0%</text>
      <text x="140" y="153" text-anchor="middle" font-family="var(--sans)" font-size="11"
            fill="var(--text2)">${escapeHtml(subLabel || 'daily dose')}</text>
    </svg>`;
  }

  const total = entries.reduce((sum, item) => sum + Math.min(Number(item.daily) || 0, 100), 0);
  const avg   = Math.round(entries.reduce((sum, item) => sum + Number(item.daily || 0), 0) / entries.length);
  /* Convert each entry's proportion to degrees */
  const macroLike = entries.map(item => ({
    label:   item.label   || '',
    color:   item.color   || 'var(--accent)',
    percent: total ? (Math.min(Number(item.daily) || 0, 100) / total) * 100 : 0,
    grams:   (item.daily || 0) + '%',
    kcal:    'DV'
  }));
  /* Re-use the macro SVG builder; "calories" becomes the centre label */
  return _nutritionMakeSvgDonut(macroLike, centerLabel || (avg + '%'));
}

/* @end: NutritionDetailData — daily-dose donut ─────────────────────────── */

function nutritionNutrientContent(section, data) {
  const items = Array.isArray(data?.items) ? data.items : [];
  if (!items.length) {
    return nutritionPlaceholderContent(section);
  }
  const dailyValues = items.filter(item => Number(item.daily) > 0);
  const avgDaily = dailyValues.length
    ? Math.round(dailyValues.reduce((sum, item) => sum + Number(item.daily || 0), 0) / dailyValues.length) + '%'
    : '0%';
  return `
    <section class="nutrition-card nutrition-breakdown">
      <h3>${escapeHtml(data.label || section.label)} Breakdown</h3>
      <div class="nutrition-serving">${escapeHtml(data.note || 'Daily dose percentages are approximate per 100g.')}</div>
      <div class="nutrition-macro-layout">
        <div class="nutrition-donut-wrap">
          ${nutritionDailyDonut(items, avgDaily, data.totalLabel || 'avg daily dose')}
        </div>
        <div class="nutrition-macro-list">
          ${items.map((item, idx) => {
            const daily = Math.max(0, Number(item.daily || 0));
            return `
              <div class="nutrition-macro-row nutr-clickable" onclick="_nutritionShowNutrientDetail('${escapeHtml(section.key)}', ${idx})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();_nutritionShowNutrientDetail('${escapeHtml(section.key)}',${idx})}" role="button" tabindex="0">
                <span class="nutrition-macro-dot" style="background:${item.color || 'var(--accent)'}"></span>
                <div class="nutrition-macro-main">
                  <div class="nutrition-macro-name">${escapeHtml(NUTRIENT_INFO[item.label]?.display || item.label)}</div>
                  <div class="nutrition-macro-sub">${escapeHtml(item.amount || '')}${daily ? ` · ${daily}% of daily dose` : ' · no established daily dose'}</div>
                  <div class="nutrition-dose-bar"><div class="nutrition-dose-fill" style="width:${Math.min(daily,100)}%;background:${item.color || 'var(--accent)'}"></div></div>
                </div>
                <div class="nutrition-macro-value">${daily}%<div class="nutrition-macro-kcal">DV</div></div>
                <span class="nutr-row-arrow">›</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

/* @end: NutritionDetailData — nutrient detail view ─────────────────────── */

function nutritionPlaceholderContent(section, values) {
  const filled = values || {};
  return `
    <section class="nutrition-card nutrition-breakdown">
      <h3>${escapeHtml(section.label)} Breakdown</h3>
      <div class="nutrition-serving">Fields ready for nutrition data entry.</div>
      <div class="nutrition-placeholder-grid">
        ${section.fields.map(field => `
          <div class="nutrition-placeholder-field">
            <strong>${escapeHtml(field)}</strong>
            <span>${filled[field] ? escapeHtml(filled[field]) : ''}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

/* └─ @end:  js/nutrition-ui.js ────────────────────────────────────── */
