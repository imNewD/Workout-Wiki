/* ── @file: config/settings.js ── */
/* ══════════════════════════════════════════════════════════════════════
   settings.js — GRND // Workout Wiki
   ─────────────────────────────────────────────────────────────────────
   Extracted from index.html. Contains:

     ① js/legal.js     – LEGAL_CONTENT object, openLegal(), closeLegal(),
                          and the Escape-key listener.

     ② js/theme.js     – THEME_META, _setThemeLabelDesc(), _updateThemeBtns(),
                          setBaseTheme(), updateAllModeBtns(), and the
                          RESTORE SAVED SETTINGS boot call.

     ③ js/modes.js     – All unlockable theme modes (pushup, pull, dip,
                          squat, core, handstand, isometric, combo, warmup,
                          stretch, hof, pantheon) + the ADMIN CHEAT hook.

     ④ profile / menu  – MENU PANEL IIFE: openMenuPanel, closeMenuPanel,
                          openProfileEdit, saveProfile, handleProfilePhoto,
                          removeProfilePhoto, renderPlayerLevel bootstrap.

     ⑤ player-level    – PLAYER LEVEL SYSTEM IIFE: calcLevel(),
                          renderPlayerLevel(), getPlayerLevelSummary().

     ⑥ image-crop      – IMAGE CROP MODULE IIFE: openCropModal(),
                          confirmCrop(), cancelCrop(), cropZoomFromSlider(),
                          and all pointer/touch/wheel drag handlers.

     ⑦ sendFeedback    – Stub feedback function (feature currently disabled).

   Load order requirement: must come AFTER progress.js / library.js
   (depends on loadProgress, LIB_DATA, TREE_LIBRARY_SOURCES, etc.)

   In index.html, replace each of the above blocks with a single-line
   comment referencing this file, e.g.:
     → settings.js: legal.js
     → settings.js: theme.js + settings.js
     → settings.js: modes.js
     → settings.js: menu + profile + photo
     → settings.js: player-level
     → settings.js: image-crop
══════════════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════════════
   ① LEGAL (js/legal.js)
   LEGAL_CONTENT — inline HTML for Privacy Policy, Disclaimer, Terms.
   openLegal(type) / closeLegal() — driven from menu section & footer.
   Escape key listener closes the panel.
═══════════════════════════════════════════════════════════════════════ */
/* ┌─ @file: js/legal.js ───────────────────────────────────────────── */
(function() {
  if (typeof window.isAdminPreviewEnabled !== 'function') {
    window.isAdminPreviewEnabled = function() {
      try { return localStorage.getItem('grnd_admin_theme_preview') === '1'; } catch (e) { return false; }
    };
  }
  if (typeof window.isPantheonPreviewEnabled !== 'function') {
    window.isPantheonPreviewEnabled = function() {
      try { return localStorage.getItem('grnd_pantheon_preview') === '1'; } catch (e) { return false; }
    };
  }
})();

const LEGAL_CONTENT = {
  privacy: {
    title: 'PRIVACY POLICY',
    html: `
      <div class="legal-section">
        <div class="legal-section-title">Overview</div>
        <div class="legal-section-text">
          GRND is a static website hosted on GitHub Pages. We are committed to protecting your privacy.
          This page explains what information, if any, is collected when you use GRND.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Data We Do NOT Collect</div>
        <div class="legal-section-text">
          GRND does <strong>not</strong> collect, transmit, or store any personal information on external servers.
          Specifically:<br><br>
          &bull; No account registration is required.<br>
          &bull; No analytics or tracking scripts are used.<br>
          &bull; No cookies are set by this site.<br>
          &bull; No advertising networks are used.<br>
          &bull; We do not sell or share any data with third parties.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Local Storage</div>
        <div class="legal-section-text">
          Your profile, progress, and preferences (theme, skill level, completed exercises) are saved using
          your browser's <strong>localStorage</strong>. This data stays entirely on your device and is never
          sent anywhere. You can clear it at any time using the Reset button in Settings.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Leaderboard</div>
        <div class="legal-section-text">
          The Leaderboard does not use Firebase or any external service. Everything shown there —
          your level, points, and unlocked exercises — is read from the same on-device
          <strong>localStorage</strong> described above. Nothing related to this feature is
          transmitted, stored remotely, or shared with anyone.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Third-Party Services</div>
        <div class="legal-section-text">
          GRND loads fonts from <strong>Google Fonts</strong>. Google may collect basic request data (IP address,
          browser type) as part of serving those fonts. Please refer to
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style="color:var(--accent)">Google's Privacy Policy</a>
          for details.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Your Rights (GDPR / CCPA)</div>
        <div class="legal-section-text">
          Because GRND stores all data exclusively on your own device and collects no personal information on
          external servers, there is no personal data held by us to access, correct, or delete.<br><br>
          If you are in the European Union (GDPR) or California (CCPA), you already have full control over
          your data: it exists only in your browser's localStorage and can be wiped instantly via
          <strong>Settings → Reset All Data</strong>. No request to us is required.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Governing Law</div>
        <div class="legal-section-text">
          GRND is an open-source project. This policy is written to comply with the
          <strong>EU General Data Protection Regulation (GDPR)</strong> and the
          <strong>California Consumer Privacy Act (CCPA)</strong> to the extent applicable.
          As no personal data is collected or processed by us, the substantive obligations of those laws
          do not apply — but we disclose this information in the spirit of full transparency.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Contact</div>
        <div class="legal-section-text">
          Questions about privacy? Email: <a href="mailto:samuelbilla12@gmail.com" style="color:var(--accent)">samuelbilla12@gmail.com</a>
        </div>
      </div>
      <div class="legal-updated">LAST UPDATED — JUNE 2026 &nbsp;·&nbsp; GRND // WORKOUT WIKI</div>
    `
  },
  disclaimer: {
    title: 'DISCLAIMER',
    html: `
      <div class="legal-section">
        <div class="legal-section-title">Exercise at Your Own Risk</div>
        <div class="legal-section-text">
          The exercises, progressions, and difficulty ratings on GRND are provided for
          <strong>informational and educational purposes only</strong>. They do not constitute
          professional medical or fitness advice.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Consult a Professional</div>
        <div class="legal-section-text">
          Before starting any new exercise programme, especially one involving high-intensity or
          advanced movements, you should consult a qualified fitness professional or medical doctor —
          particularly if you have any existing injuries, health conditions, or physical limitations.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Limitation of Liability</div>
        <div class="legal-section-text">
          GRND and its author(s) accept <strong>no responsibility or liability</strong> for any
          injury, loss, or damage arising from the use of information on this site. Difficulty ratings,
          risk assessments, and training suggestions are based on general community experience and may
          not apply to your individual circumstances.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Accuracy of Information</div>
        <div class="legal-section-text">
          While we strive to keep exercise data accurate, GRND is maintained by a small team and
          errors may exist. If you spot something incorrect, please reach out via email or Instagram.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">External Links</div>
        <div class="legal-section-text">
          GRND may link to external sites (GitHub, Instagram). We are not responsible for the content
          or privacy practices of those sites.
        </div>
      </div>
      <div class="legal-updated">LAST UPDATED — MAY 2026 &nbsp;·&nbsp; GRND // WORKOUT WIKI</div>
    `
  },
  terms: {
    title: 'TERMS OF USE',
    html: `
      <div class="legal-section">
        <div class="legal-section-title">Acceptance</div>
        <div class="legal-section-text">
          By using GRND you agree to these terms. If you do not agree, please stop using the site.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Free to Use</div>
        <div class="legal-section-text">
          GRND is free of charge and provided as-is. We reserve the right to change, suspend, or
          discontinue the service at any time without notice.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Intellectual Property</div>
        <div class="legal-section-text">
          The exercise data, descriptions, difficulty ratings, and design of GRND are the work of
          the author(s). The source code is open-source and available under the licence specified in
          the <a href="https://github.com/imNewD/Workout-Wiki/blob/main/LICENSE" target="_blank" rel="noopener" style="color:var(--accent)">GitHub repository</a>.
          Do not republish the content wholesale without attribution.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Permitted Use</div>
        <div class="legal-section-text">
          You may use GRND for personal, non-commercial fitness reference. You may not:<br><br>
          &bull; Scrape or bulk-download the exercise database for redistribution.<br>
          &bull; Use the site in a way that could harm other users or the service.<br>
          &bull; Misrepresent GRND as your own work.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Changes to These Terms</div>
        <div class="legal-section-text">
          These terms may be updated from time to time. Continued use of the site after changes
          constitutes acceptance of the new terms.
        </div>
      </div>
      <div class="legal-section">
        <div class="legal-section-title">Governing Law</div>
        <div class="legal-section-text">
          These Terms of Use are provided in good faith for informational purposes. GRND is a free,
          open-source project with no commercial entity behind it. Any disputes arising from your use
          of GRND will be governed by applicable law in the jurisdiction where the author resides.
        </div>
      </div>
      <div class="legal-updated">LAST UPDATED — JUNE 2026 &nbsp;·&nbsp; GRND // WORKOUT WIKI</div>
    `
  }
};

function openLegal(type) {
  const content = LEGAL_CONTENT[type];
  if (!content) return;
  document.getElementById('legalPanelTitle').textContent = content.title;
  document.getElementById('legalBody').innerHTML = content.html;
  const overlay = document.getElementById('legalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLegal() {
  document.getElementById('legalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
/* └─ @end:  js/legal.js ───────────────────────────────────────────── */

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLegal();
});

/* ═══════════════════════════════════════════════════════════════════════
   ② THEME + SETTINGS (js/settings.js + js/theme.js)
   Restores saved theme on boot, manages light/dark toggle,
   THEME_META labels, setBaseTheme(), updateAllModeBtns().
═══════════════════════════════════════════════════════════════════════ */
/* ┌─ @file: js/settings.js + js/theme.js ──────────────────────────── */
/* ══ RESTORE SAVED SETTINGS
 ════════════════════════════════ */
(function(){
  try {
    const savedTheme = localStorage.getItem('grnd_theme');
    const validThemes = ['light','dark','pushup','pull','dip','squat','core','handstand','isometric','combo','warmup','stretch','sidequests','hof','pantheon','gym','cardio','beber','summer','winter','spring','autumn','chemist','biologist'];
    if(savedTheme && validThemes.includes(savedTheme)) {
      document.documentElement.dataset.theme = savedTheme;
      _setThemeLabelDesc(savedTheme);
    }
    _updateNavState('home');
  } catch(e) {}
  try { updateAllModeBtns(); } catch(e) {}
})();
/* ══ THEME ═════════════════════════════════════════════════ */
function _updateThemeBtns() {
  const cur = document.documentElement.dataset.theme;
  const lb = document.getElementById('themeLightBtn');
  const db = document.getElementById('themeDarkBtn');
  if(lb) lb.classList.toggle('active', cur === 'light');
  if(db) db.classList.toggle('active', cur === 'dark');
}
/* updateAnatomyLiteBtn · setAnatomyLite · toggleAnatomyLite → anatomy.js */
/* anatomyLite dataset + button sync handled in anatomy.js _boot() */
const THEME_META = {
  pantheon:  { label: 'PANTHEON',      desc: 'Pantheon mode active' },
  hof:       { label: 'HALL OF FAME',  desc: 'Hall of Fame mode active' },
  warmup:    { label: 'WARMUP',        desc: 'Warmup mode active' },
  isometric: { label: 'HOLDS',         desc: 'Holds mode active' },
  handstand: { label: 'HANDSTAND',     desc: 'Handstand mode active' },
  pushup:    { label: 'PUSHUP',        desc: 'Pushup mode active' },
  pull:      { label: 'PULL',          desc: 'Pull mode active' },
  dip:       { label: 'DIP',           desc: 'Dip mode active' },
  squat:     { label: 'SQUAT',         desc: 'Squat mode active' },
  core:      { label: 'CORE',          desc: 'Core mode active' },
  combo:     { label: 'COMBO',         desc: 'Combo mode active' },
  stretch:   { label: 'STRETCH',       desc: 'Stretch mode active' },
  chemist:   { label: 'CHEMIST',       desc: 'Chemist mode active — atoms adrift 🧪' },
  biologist: { label: 'BIOLOGIST',     desc: 'Biologist mode active — cells adrift 🧬' },
  sidequests:{ label: 'SIDEQUESTS',    desc: 'Sidequests mode active' },
  gym:       { label: 'GYM',           desc: 'Gym mode active — iron &amp; steel' },
  cardio:    { label: 'CARDIO',        desc: 'Cardio mode active — dawn horizon' },
  beber:     { label: 'BEBER',         desc: 'For my love 💗' },
  summer:    { label: 'SUMMER',        desc: "We're cool for the summer 🌊" },
  winter:    { label: 'WINTER ARC',    desc: 'Winter Arc engaged — embrace the cold ❄' },
  spring:    { label: 'SPRING CUT',    desc: 'Spring Cut active — clear skies ahead 🌱' },
  autumn:    { label: 'AUTUMN BULK',   desc: 'Autumn Bulk active — harvest season 🍂' },
  light:     { label: 'LIGHT',         desc: 'Light mode active' },
  dark:      { label: 'DARK',          desc: 'Dark mode active' },
};
function _setThemeLabelDesc(next) {
  const lbl  = document.getElementById('menuThemeLabel');
  const desc = document.getElementById('menu-theme-desc');
  const meta = THEME_META[next];
  if (lbl)  lbl.textContent  = meta ? meta.label : next.toUpperCase();
  if (desc) desc.textContent = meta ? meta.desc  : next.toUpperCase() + ' mode active';
}
/* Helper — refreshes every mode-theme button in one call */
function updateAllModeBtns() {
  updatePushupModeBtn(); updatePullModeBtn(); updateDipModeBtn();
  updateSquatModeBtn();  updateCoreModeBtn(); updateHandstandModeBtn();
  updateIsometricModeBtn(); updateComboModeBtn(); updateWarmupModeBtn();
  updateStretchModeBtn(); updateChemistModeBtn(); updateBiologistModeBtn();
  if (typeof updateSidequestsModeBtn === 'function') updateSidequestsModeBtn();
  if (typeof updateHofModeBtn      === 'function') updateHofModeBtn();
  if (typeof updatePantheonModeBtn  === 'function') updatePantheonModeBtn();
  if (typeof updateGymModeBtn       === 'function') updateGymModeBtn();
  if (typeof updateCardioModeBtn    === 'function') updateCardioModeBtn();
  if (typeof updateBeberModeBtn     === 'function') updateBeberModeBtn();
  if (typeof updateSeasonModeBtns   === 'function') updateSeasonModeBtns();
  // Guard against the pinned dropdown-header row going locked out from
  // under it (e.g. admin preview toggled off) — see theme-dropdown.js below.
  if (typeof _refreshThemeDropdownHeader === 'function') _refreshThemeDropdownHeader();
}
window.setBaseTheme = function(next) {
  document.documentElement.dataset.theme = next;
  _setThemeLabelDesc(next);
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _updateThemeBtns();
  updateAllModeBtns();
};
_updateThemeBtns();

/* └─ @end:  js/settings.js + js/theme.js ──────────────────────────── */

/* ═══════════════════════════════════════════════════════════════════════
   ②.5 THEME MODES DROPDOWN (js/theme-dropdown.js)
   Drives the THEMES dropdown below the APPEARANCE row in Settings.

   Design: the header (#themeModeHeader) shows the real .menu-setting-row
   for whichever mode is currently pinned, PHYSICALLY MOVED there out of
   the dropdown list (#themeModeDropdown), rather than the generic
   "THEMES" placeholder — the placeholder is only a fallback for the
   (currently impossible, since warmup/stretch are always unlocked) case
   where nothing in the list is unlocked. That way the pinned row's own
   ACTIVATE button — class, icon, label, active state — never needs to be
   duplicated or re-styled; it's just the real row living in a different
   parent for a while.

     toggleThemeDropdown()         open/close the list, rotate the chevron
     selectThemeRow(event, rowId)  tap a row: pin it to the header,
                                    demoting whatever was pinned before
                                    back into the list, then close the
                                    dropdown. Tapping the row that's
                                    ALREADY pinned just re-toggles the
                                    dropdown instead (same as tapping the
                                    header itself).
     _pinThemeRow(rowId)           internal — move row into the header
     _demotePinnedThemeRow()       internal — move pinned row back into
                                    the list, restore the THEMES placeholder
     _firstUnlockedThemeRowId()    internal — first visible row in the
                                    list, used to default the header to a
                                    real theme instead of the placeholder
     _syncPinnedThemeRowToActive() called from every ACTIVATE button —
                                    swaps the pinned header row over to
                                    whichever mode was just turned on, so
                                    activating a different theme from
                                    inside the list actually updates what
                                    the header shows
     _refreshThemeDropdownHeader() internal — called from updateAllModeBtns()
                                    on every refresh. If the pinned row's
                                    mode just got locked back out (e.g.
                                    admin preview switched off), demotes it
                                    and immediately pins the next unlocked
                                    row in its place instead of leaving the
                                    bare placeholder showing.

   NOTE: _pinnedThemeRowId is declared with `var`, not `let`/`const`.
   updateAllModeBtns() — which calls _refreshThemeDropdownHeader() — is
   already invoked once during RESTORE SAVED SETTINGS above, before this
   block runs, so the state has to be hoisted-safe (var hoists as
   `undefined`, which the `if (!_pinnedThemeRowId) return;` guard already
   treats as "nothing pinned yet" — no crash, no incorrect behavior).
═══════════════════════════════════════════════════════════════════════ */
/* ┌─ @file: js/theme-dropdown.js ──────────────────────────────────── */
var _pinnedThemeRowId = null;

const _THEME_ROW_MAP = {
  pushup: 'pushupModeRow',       pull: 'pullModeRow',
  dip: 'dipModeRow',             squat: 'squatModeRow',
  core: 'coreModeRow',           handstand: 'handstandModeRow',
  isometric: 'isometricModeRow', combo: 'comboModeRow',
  warmup: 'warmupModeRow',       stretch: 'stretchModeRow',
  chemist: 'chemistModeRow',     biologist: 'biologistModeRow',
  sidequests: 'sidequestsModeRow',
  hof: 'hofModeRow',             pantheon: 'pantheonModeRow',
  gym: 'gymModeRow',             cardio: 'cardioModeRow',
  beber: 'beberModeRow',
  summer: 'summerModeRow',       winter: 'winterModeRow',
  spring: 'springModeRow',       autumn: 'autumnModeRow',
};

window.toggleThemeDropdown = function() {
  const dd = document.getElementById('themeModeDropdown');
  const chevron = document.getElementById('themeDropdownChevron');
  if (!dd) return;
  const opening = dd.style.display === 'none';
  dd.style.display = opening ? '' : 'none';
  if (chevron) chevron.style.transform = opening ? 'rotate(180deg)' : '';
};

window.selectThemeRow = function(event, rowId) {
  if (event) event.stopPropagation();
  if (rowId === _pinnedThemeRowId) {
    // Tapping the row that's already pinned in the header — treat it the
    // same as tapping the header itself: just open/close the list.
    toggleThemeDropdown();
    return;
  }
  _pinThemeRow(rowId);
  const dd = document.getElementById('themeModeDropdown');
  const chevron = document.getElementById('themeDropdownChevron');
  if (dd) dd.style.display = 'none';
  if (chevron) chevron.style.transform = '';
};

function _pinThemeRow(rowId) {
  const header      = document.getElementById('themeModeHeader');
  const dropdown    = document.getElementById('themeModeDropdown');
  const chevron     = document.getElementById('themeDropdownChevron');
  const placeholder = document.getElementById('themeModeHeaderDefault');
  const row         = document.getElementById(rowId);
  if (!header || !dropdown || !chevron || !row) return;

  if (_pinnedThemeRowId && _pinnedThemeRowId !== rowId) {
    _demotePinnedThemeRow();
  }
  if (placeholder) placeholder.style.display = 'none';
  row.style.flex = '1';
  row.style.minWidth = '0';
  header.insertBefore(row, chevron);
  _pinnedThemeRowId = rowId;
}

function _demotePinnedThemeRow() {
  if (!_pinnedThemeRowId) return;
  const dropdown    = document.getElementById('themeModeDropdown');
  const placeholder = document.getElementById('themeModeHeaderDefault');
  const row         = document.getElementById(_pinnedThemeRowId);
  if (row && dropdown) {
    row.style.flex = '';
    row.style.minWidth = '';
    dropdown.prepend(row);
  }
  if (placeholder) placeholder.style.display = '';
  _pinnedThemeRowId = null;
}

/* First unlocked row in dropdown order (warmup + stretch are always
   visible, so this only returns null if the dropdown markup is missing
   entirely). Used to default the header to a real theme instead of the
   generic "THEMES" placeholder. */
function _firstUnlockedThemeRowId() {
  const dropdown = document.getElementById('themeModeDropdown');
  if (!dropdown) return null;
  const rows = dropdown.querySelectorAll('.menu-setting-row');
  for (const row of rows) {
    if (row.style.display !== 'none') return row.id;
  }
  return null;
}

/* Called right after every toggle<X>Mode() click (chained directly onto
   each ACTIVATE button's onclick in index.html, after stopPropagation).
   Selecting a row only pins it for preview — it doesn't change the
   active theme — so it can't tell us when the user actually turns a
   *different* mode on. This does: if the row just activated isn't the
   one currently pinned, swap the header over to it. Deactivating (the
   theme falling back to light/dark) intentionally leaves the header
   alone — see _THEME_ROW_MAP lookup returning nothing for those. */
function _syncPinnedThemeRowToActive() {
  const active = document.documentElement.dataset.theme;
  const desiredRowId = _THEME_ROW_MAP[active];
  if (!desiredRowId || desiredRowId === _pinnedThemeRowId) return;
  const desiredRow = document.getElementById(desiredRowId);
  if (!desiredRow || desiredRow.style.display === 'none') return;
  if (_pinnedThemeRowId) _demotePinnedThemeRow();
  _pinThemeRow(desiredRowId);
}

function _refreshThemeDropdownHeader() {
  if (!_pinnedThemeRowId) return;
  const row = document.getElementById(_pinnedThemeRowId);
  if (row && row.style.display === 'none') {
    _demotePinnedThemeRow();
    // Don't leave the header on the bare placeholder if another theme is
    // still unlocked — pin the next available one in its place.
    const fallbackId = _firstUnlockedThemeRowId();
    if (fallbackId) _pinThemeRow(fallbackId);
  }
}

/* Boot: the header should always show a real unlocked theme rather than
   the generic "THEMES" placeholder — prefer whichever mode is already
   active (restored from localStorage above), and fall back to the first
   unlocked row in the list if the active theme isn't a dropdown mode
   (e.g. plain light/dark). Tapping the pinned row then opens the
   dropdown to browse the rest. */
(function() {
  const active = document.documentElement.dataset.theme;
  let rowId = _THEME_ROW_MAP[active];
  let row = rowId ? document.getElementById(rowId) : null;
  if (!row || row.style.display === 'none') {
    rowId = _firstUnlockedThemeRowId();
    row = rowId ? document.getElementById(rowId) : null;
  }
  if (row) _pinThemeRow(rowId);
})();

// animations.js (loaded after system.js) defines isAdminPreviewEnabled which
// updateAllModeBtns() needs. Run the full init once everything is ready so
// warmup/stretch rows are guaranteed visible and the header is pinned.
document.addEventListener('DOMContentLoaded', function() {
  try { updateAllModeBtns(); } catch(e) {}
  if (!_pinnedThemeRowId) {
    var active = document.documentElement.dataset.theme;
    var rowId = _THEME_ROW_MAP[active];
    var row = rowId ? document.getElementById(rowId) : null;
    if (!row || row.style.display === 'none') {
      rowId = _firstUnlockedThemeRowId();
      row = rowId ? document.getElementById(rowId) : null;
    }
    if (row) _pinThemeRow(rowId);
  }
});
/* └─ @end:  js/theme-dropdown.js ─────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════════════════
   ②.6 UI STYLE ENGINE  (whole-app re-skins)
   Composable layer on top of colour themes. Two independent axes, each
   persisted separately:
     • data-ui-theme  on <html>  → which style   (grnd_ui_theme)
     • data-ui-power="high"      → effects tier   (grnd_ui_power)
   A style re-skins the entire app by redefining the surface tokens
   (--bg2/--bg3/--border…) in themes.css, so even content like the
   progression tree changes. The animated background lives on an injected
   #uiFxLayer (see _ensureUIFxLayer) so it never collides with the
   per-colour-theme body::before/::after effects.
   High-Performance mode (off by default) unlocks the expensive tier:
   real translucency, backdrop blur, animated backgrounds & glows.
   Public API: setUITheme(theme) · toggleUIPower()
═══════════════════════════════════════════════════════════════════════ */
/* ┌─ @file: js/ui-theme.js ────────────────────────────────────────── */
/* Registry of selectable UI styles. 'default' is the implicit no-overlay
   state and lives only as the reset button, not in this map. Order here =
   display order in the dropdown. */
var UI_STYLES = {
  glass:      { label: 'LIQUID GLASS',  desc: 'Frosted surfaces with a liquid shimmer' },
  glassmorph: { label: 'GLASSMORPHISM', desc: 'Vivid frosted panels, drifting light' },
  neo:        { label: 'NEOMORPHISM',   desc: 'Soft extruded monochrome — pillowy & calm' },
  skeu:       { label: 'SKEUOMORPHISM', desc: 'Glossy, bevelled, real-world materials' },
  clay:       { label: 'CLAYMORPHISM',  desc: 'Puffy 3D pastel clay, friendly & round' },
  spatial:    { label: 'SPATIAL',       desc: 'Deep space, floating depth & glow' },
  brutal:     { label: 'NEUBRUTALISM',  desc: 'Raw blocks, thick ink, hard shadows' },
  arcade:     { label: 'ARCADE',        desc: '8-bit cabinet — pixel frames & scanlines' },
};

/* The animated background layer. One fixed, behind-everything element with
   two child layers the CSS animates independently. Created once, reused. */
function _ensureUIFxLayer() {
  if (document.getElementById('uiFxLayer')) return;
  var fx = document.createElement('div');
  fx.id = 'uiFxLayer';
  fx.setAttribute('aria-hidden', 'true');
  fx.innerHTML = '<div class="ui-fx-1"></div><div class="ui-fx-2"></div>';
  if (document.body) document.body.insertBefore(fx, document.body.firstChild);
}

function _updateUIThemeBtns() {
  var cur  = document.documentElement.dataset.uiTheme || 'default';
  var db   = document.getElementById('uiDefaultBtn');
  var desc = document.getElementById('ui-theme-desc');
  var meta = UI_STYLES[cur];
  // DEFAULT THEME button: active only when no style overlay is on
  if (db)   db.classList.toggle('active', !meta);
  if (desc) desc.textContent = meta ? (meta.label.charAt(0) + meta.label.slice(1).toLowerCase() + ' active') : 'Default layout active';
  _syncUIStyleDropdownHeader();
  _syncUIPowerBtn();
}

window._syncUIStyleDropdownHeader = function() {
  var cur     = document.documentElement.dataset.uiTheme || 'default';
  var meta    = UI_STYLES[cur];
  var label   = document.getElementById('uiStyleDropdownLabel');
  var subdesc = document.getElementById('uiStyleDropdownDesc');
  if (label)   label.textContent   = meta ? meta.label : 'UI STYLES';
  if (subdesc) subdesc.textContent = meta ? 'Active — tap to change' : 'Tap to browse styles';
  // Sync every style row's ACTIVATE/ACTIVE button state
  Object.keys(UI_STYLES).forEach(function(key) {
    var btn = document.getElementById('uiStyle_' + key + '_Btn');
    if (!btn) return;
    var on = key === cur;
    btn.textContent = on ? '◦ ACTIVE' : 'ACTIVATE';
    btn.classList.toggle('menu-action-btn-primary', on);
  });
};

var _uiStyleDropdownOpen = false;
window.toggleUIStyleDropdown = function() {
  _uiStyleDropdownOpen = !_uiStyleDropdownOpen;
  var dropdown = document.getElementById('uiStyleDropdown');
  var chevron  = document.getElementById('uiStyleDropdownChevron');
  if (dropdown) dropdown.style.display = _uiStyleDropdownOpen ? '' : 'none';
  if (chevron)  chevron.style.transform = _uiStyleDropdownOpen ? 'rotate(180deg)' : '';
};

window.setUITheme = function(theme) {
  _ensureUIFxLayer();
  if (UI_STYLES[theme]) {
    document.documentElement.dataset.uiTheme = theme;
  } else {
    theme = 'default';
    delete document.documentElement.dataset.uiTheme;
    // Reset to default collapses the dropdown
    _uiStyleDropdownOpen = false;
    var dropdown = document.getElementById('uiStyleDropdown');
    var chevron  = document.getElementById('uiStyleDropdownChevron');
    if (dropdown) dropdown.style.display = 'none';
    if (chevron)  chevron.style.transform = '';
  }
  try { localStorage.setItem('grnd_ui_theme', theme); } catch(e) {}
  _updateUIThemeBtns();
};

/* ── High-Performance (effects) tier ──────────────────────────────── */
function _syncUIPowerBtn() {
  var on  = document.documentElement.dataset.uiPower === 'high';
  var btn = document.getElementById('uiPowerBtn');
  var desc = document.getElementById('ui-power-desc');
  if (btn) {
    btn.textContent = on ? 'ON' : 'OFF';
    btn.classList.toggle('menu-action-btn-primary', on);
  }
  if (desc) desc.textContent = on
    ? 'Full effects — blur, motion & glow (best on strong devices)'
    : 'Lightweight effects for smooth performance everywhere';
}

window.toggleUIPower = function() {
  var on = document.documentElement.dataset.uiPower === 'high';
  if (on) delete document.documentElement.dataset.uiPower;
  else    document.documentElement.dataset.uiPower = 'high';
  try { localStorage.setItem('grnd_ui_power', on ? 'lite' : 'high'); } catch(e) {}
  _syncUIPowerBtn();
}

document.addEventListener('DOMContentLoaded', function() {
  _ensureUIFxLayer();
  _updateUIThemeBtns();
});
/* └─ @end:  js/ui-theme.js ──────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════════════════
   ③ THEME MODES (js/modes.js)
   Each unlockable theme mode follows the same pattern:
     get<X>ModeStats()      count total vs done exercises
     is<X>ModeUnlocked()    returns bool (also checks admin preview)
     update<X>ModeBtn()     sync the Settings row visibility + text
     toggle<X>Mode()        flip the theme, persist to localStorage
   Modes: pushup, pull, dip, squat, core, handstand, isometric,
          combo, warmup, stretch, hof, pantheon.
   Also includes the ADMIN CHEAT ("admin" in feedback textarea).
═══════════════════════════════════════════════════════════════════════ */
/* ┌─ @file: js/modes.js ───────────────────────────────────────────── */
/* ══ PUSHUP MODE MODULE
 ═══════════════════════════════════════
   Storage key: grnd_theme (reuses existing — 'pushup' is a valid value)
   Unlocks when every non-HoF pushup exercise has status 'unlocked'.
   To extract: move this block to themes/pushup.js
════════════════════════════════════════════════════════════ */
function getPushupModeStats() {
  const src = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES : [];
  const pushupSrc = src.find(s => s.libKey === 'pushup');
  if (!pushupSrc) return { total: 0, done: 0 };
  const nonHof = getTreeSourceData(pushupSrc).filter(e =>
    !e.hof && !e.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(e))
  );
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const done = nonHof.filter(e => prog[`pushup-${e.id}`] === 'unlocked').length;
  return { total: nonHof.length, done };
}

function isPushupModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const { total, done } = getPushupModeStats();
  return total > 0 && done >= total;
}

function updatePushupModeBtn() {
  const row    = document.getElementById('pushupModeRow');
  const btn    = document.getElementById('pushupModeBtn');
  const desc   = document.getElementById('pushup-mode-desc');
  if (!row || !btn) return;
  const unlocked = isPushupModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'pushup';

  // Only reveal the row when unlocked
  row.style.display = unlocked ? '' : 'none';

  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🔥 ACTIVE';
      if (desc) desc.textContent = 'Ember reds engaged';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'All pushups complete — mode unlocked!';
    }
  }
}

window.togglePushupMode = function() {
  if (!isPushupModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'pushup' ? 'dark' : 'pushup';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* Refresh mode buttons whenever any exercise is saved.
   Uses the listener registry instead of monkey-patching saveProgress. */
window.onProgressSaved(function() { updateAllModeBtns(); });

/* ══ PULL MODE MODULE ════════════════════════════════════════
   Storage key: grnd_theme ('pull' is a valid value)
   Unlocks when every non-HoF pull-up exercise has status 'unlocked'.
   To extract: move this block to themes/pull.js
════════════════════════════════════════════════════════════ */
function getPullModeStats() {
  const src = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES : [];
  const pullSrc = src.find(s => s.libKey === 'pullup');
  if (!pullSrc) return { total: 0, done: 0 };
  const nonHof = getTreeSourceData(pullSrc).filter(e =>
    !e.hof && !e.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(e))
  );
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const done = nonHof.filter(e => prog[`pullup-${e.id}`] === 'unlocked').length;
  return { total: nonHof.length, done };
}

function isPullModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const { total, done } = getPullModeStats();
  return total > 0 && done >= total;
}

function updatePullModeBtn() {
  const row  = document.getElementById('pullModeRow');
  const btn  = document.getElementById('pullModeBtn');
  const desc = document.getElementById('pull-mode-desc');
  if (!row || !btn) return;
  const unlocked = isPullModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'pull';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🌊 ACTIVE';
      if (desc) desc.textContent = 'Steel blues engaged';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'All pull-ups complete — mode unlocked!';
    }
  }
}

window.togglePullMode = function() {
  if (!isPullModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'pull' ? 'dark' : 'pull';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ DIP MODE MODULE ═════════════════════════════════════════
   Storage key: grnd_theme ('dip' is a valid value)
   Unlocks when every non-HoF dip exercise has status 'unlocked'.
   To extract: move this block to themes/dip.js
════════════════════════════════════════════════════════════ */
function getDipModeStats() {
  const src = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES : [];
  const dipSrc = src.find(s => s.libKey === 'dip');
  if (!dipSrc) return { total: 0, done: 0 };
  const nonHof = getTreeSourceData(dipSrc).filter(e =>
    !e.hof && !e.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(e))
  );
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const done = nonHof.filter(e => prog[`dip-${e.id}`] === 'unlocked').length;
  return { total: nonHof.length, done };
}

function isDipModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const { total, done } = getDipModeStats();
  return total > 0 && done >= total;
}

function updateDipModeBtn() {
  const row  = document.getElementById('dipModeRow');
  const btn  = document.getElementById('dipModeBtn');
  const desc = document.getElementById('dip-mode-desc');
  if (!row || !btn) return;
  const unlocked = isDipModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'dip';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🟠 ACTIVE';
      if (desc) desc.textContent = 'Light orange engaged';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'All dips complete — mode unlocked!';
    }
  }
}

window.toggleDipMode = function() {
  if (!isDipModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'dip' ? 'dark' : 'dip';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ SQUAT MODE MODULE ═══════════════════════════════════════
   Storage key: grnd_theme ('squat' is a valid value)
   Unlocks when every non-HoF squat exercise has status 'unlocked'.
   To extract: move this block to themes/squat.js
════════════════════════════════════════════════════════════ */
function getSquatModeStats() {
  const src = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES : [];
  const squatSrc = src.find(s => s.libKey === 'squat');
  if (!squatSrc) return { total: 0, done: 0 };
  const nonHof = getTreeSourceData(squatSrc).filter(e =>
    !e.hof && !e.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(e))
  );
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const done = nonHof.filter(e => prog[`squat-${e.id}`] === 'unlocked').length;
  return { total: nonHof.length, done };
}

function isSquatModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const { total, done } = getSquatModeStats();
  return total > 0 && done >= total;
}

function updateSquatModeBtn() {
  const row  = document.getElementById('squatModeRow');
  const btn  = document.getElementById('squatModeBtn');
  const desc = document.getElementById('squat-mode-desc');
  if (!row || !btn) return;
  const unlocked = isSquatModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'squat';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🌿 ACTIVE';
      if (desc) desc.textContent = 'Forest greens engaged';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'All squats complete — mode unlocked!';
    }
  }
}

window.toggleSquatMode = function() {
  if (!isSquatModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'squat' ? 'dark' : 'squat';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ CORE MODE MODULE ════════════════════════════════════════
   Storage key: grnd_theme ('core' is a valid value)
   Unlocks when every non-HoF core exercise has status 'unlocked'.
   To extract: move this block to themes/core.js
════════════════════════════════════════════════════════════ */
function getCoreModeStats() {
  const src = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES : [];
  const coreSrc = src.find(s => s.libKey === 'core');
  if (!coreSrc) return { total: 0, done: 0 };
  const nonHof = getTreeSourceData(coreSrc).filter(e =>
    !e.hof && !e.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(e))
  );
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const done = nonHof.filter(e => prog[`core-${e.id}`] === 'unlocked').length;
  return { total: nonHof.length, done };
}

function isCoreModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const { total, done } = getCoreModeStats();
  return total > 0 && done >= total;
}

function updateCoreModeBtn() {
  const row  = document.getElementById('coreModeRow');
  const btn  = document.getElementById('coreModeBtn');
  const desc = document.getElementById('core-mode-desc');
  if (!row || !btn) return;
  const unlocked = isCoreModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'core';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '⚡ ACTIVE';
      if (desc) desc.textContent = 'Acid electric engaged';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'All core exercises complete — mode unlocked!';
    }
  }
}

window.toggleCoreMode = function() {
  if (!isCoreModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'core' ? 'dark' : 'core';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ HANDSTAND MODE MODULE ═══════════════════════════════════
   Storage key: grnd_theme ('handstand' is a valid value)
   Unlocks when every non-HoF handstand exercise has status 'unlocked'.
   To extract: move this block to themes/handstand.js
════════════════════════════════════════════════════════════ */
function getHandstandModeStats() {
  const src = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES : [];
  const s = src.find(s => s.libKey === 'handstand');
  if (!s) return { total: 0, done: 0 };
  const nonHof = getTreeSourceData(s).filter(e =>
    !e.hof && !e.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(e))
  );
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const done = nonHof.filter(e => prog[`handstand-${e.id}`] === 'unlocked').length;
  return { total: nonHof.length, done };
}
function isHandstandModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const { total, done } = getHandstandModeStats();
  return total > 0 && done >= total;
}
function updateHandstandModeBtn() {
  const row  = document.getElementById('handstandModeRow');
  const btn  = document.getElementById('handstandModeBtn');
  const desc = document.getElementById('handstand-mode-desc');
  if (!row || !btn) return;
  const unlocked = isHandstandModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'handstand';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🌤 ACTIVE';
      if (desc) desc.textContent = 'Airy skies engaged';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'All handstands complete — mode unlocked!';
    }
  }
}
window.toggleHandstandMode = function() {
  if (!isHandstandModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'handstand' ? 'light' : 'handstand';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ ISOMETRIC MODE MODULE ═══════════════════════════════════
   Storage key: grnd_theme ('isometric' is a valid value)
   Unlocks when every non-HoF isometric exercise has status 'unlocked'.
   To extract: move this block to themes/isometric.js
════════════════════════════════════════════════════════════ */
function getIsometricModeStats() {
  const src = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES : [];
  const s = src.find(s => s.libKey === 'isometric');
  if (!s) return { total: 0, done: 0 };
  const nonHof = getTreeSourceData(s).filter(e =>
    !e.hof && !e.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(e))
  );
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const done = nonHof.filter(e => prog[`isometric-${e.id}`] === 'unlocked').length;
  return { total: nonHof.length, done };
}
function isIsometricModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const { total, done } = getIsometricModeStats();
  return total > 0 && done >= total;
}
function updateIsometricModeBtn() {
  const row  = document.getElementById('isometricModeRow');
  const btn  = document.getElementById('isometricModeBtn');
  const desc = document.getElementById('isometric-mode-desc');
  if (!row || !btn) return;
  const unlocked = isIsometricModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'isometric';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🌫 ACTIVE';
      if (desc) desc.textContent = 'Cloud frost engaged';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'All holds complete — mode unlocked!';
    }
  }
}
window.toggleIsometricMode = function() {
  if (!isIsometricModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'isometric' ? 'light' : 'isometric';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ COMBO MODE MODULE ═══════════════════════════════════════
   Storage key: grnd_theme ('combo' is a valid value)
   Unlocks when every non-HoF combo exercise has status 'unlocked'.
   To extract: move this block to themes/combo.js
════════════════════════════════════════════════════════════ */
function getComboModeStats() {
  const src = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES : [];
  const s = src.find(s => s.libKey === 'combo');
  if (!s) return { total: 0, done: 0 };
  const nonHof = getTreeSourceData(s).filter(e =>
    !e.hof && !e.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(e))
  );
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const done = nonHof.filter(e => prog[`combo-${e.id}`] === 'unlocked').length;
  return { total: nonHof.length, done };
}
function isComboModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const { total, done } = getComboModeStats();
  return total > 0 && done >= total;
}
function updateComboModeBtn() {
  const row  = document.getElementById('comboModeRow');
  const btn  = document.getElementById('comboModeBtn');
  const desc = document.getElementById('combo-mode-desc');
  if (!row || !btn) return;
  const unlocked = isComboModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'combo';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '💜 ACTIVE';
      if (desc) desc.textContent = 'Forge purple engaged';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'All combos complete — mode unlocked!';
    }
  }
}
window.toggleComboMode = function() {
  if (!isComboModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'combo' ? 'dark' : 'combo';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ WARMUP MODE MODULE ══════════════════════════════════════
   Storage key: grnd_theme ('warmup' is a valid value)
   Unlocks when every warm-up exercise has status 'unlocked'.
   To extract: move this block to themes/warmup.js
════════════════════════════════════════════════════════════ */
function getWarmupModeStats() {
  const nonHof = (typeof warmups !== 'undefined' ? warmups : []).filter(e =>
    !e.hof && !e.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(e))
  );
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const done = nonHof.filter(e => prog[`warmup-${e.id}`] === 'unlocked').length;
  return { total: nonHof.length, done };
}
function isWarmupModeUnlocked() {
  const { total, done } = getWarmupModeStats();
  return total > 0 && done >= total;
}
function updateWarmupModeBtn() {
  const row  = document.getElementById('warmupModeRow');
  const btn  = document.getElementById('warmupModeBtn');
  const desc = document.getElementById('warmup-mode-desc');
  if (!row || !btn) return;
  const unlocked = isWarmupModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'warmup';
  row.style.display = ''; // Warmup is intentionally always visible (no unlock gate)
  if (isActive) {
    btn.classList.add('active');
    btn.textContent = '🌿 ACTIVE';
    if (desc) desc.textContent = 'Warmup theme active';
  } else {
    btn.classList.remove('active');
    btn.textContent = '🔓 ACTIVATE';
    if (desc) {
      desc.textContent = unlocked
        ? 'All warm-ups complete — theme ready'
        : 'Warmup theme available for everyone';
    }
  }
}
window.toggleWarmupMode = function() {
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'warmup' ? 'light' : 'warmup';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

function updateStretchModeBtn() {
  const row  = document.getElementById('stretchModeRow');
  const btn  = document.getElementById('stretchModeBtn');
  const desc = document.getElementById('stretch-mode-desc');
  if (!row || !btn) return;
  const isActive = document.documentElement.dataset.theme === 'stretch';
  row.style.display = '';
  if (isActive) {
    btn.classList.add('active');
    btn.textContent = '🌸 ACTIVE';
    if (desc) desc.textContent = 'Stretch theme active';
  } else {
    btn.classList.remove('active');
    btn.textContent = '🔓 ACTIVATE';
    if (desc) desc.textContent = 'Stretch theme available for everyone';
  }
}

window.toggleStretchMode = function() {
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'stretch' ? 'light' : 'stretch';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  _updateThemeBtns();
  updateAllModeBtns();
};

/* ══ CHEMIST MODE MODULE ═══════════════════════════════════════
   Storage key: grnd_theme ('chemist' is a valid value)
   Available for everyone, no unlock gate — same pattern as warmup/stretch.
════════════════════════════════════════════════════════════════ */
function updateChemistModeBtn() {
  const row  = document.getElementById('chemistModeRow');
  const btn  = document.getElementById('chemistModeBtn');
  const desc = document.getElementById('chemist-mode-desc');
  if (!row || !btn) return;
  const isActive = document.documentElement.dataset.theme === 'chemist';
  row.style.display = '';
  if (isActive) {
    btn.classList.add('active');
    btn.textContent = '🧪 ACTIVE';
    if (desc) desc.textContent = 'Chemist theme active';
  } else {
    btn.classList.remove('active');
    btn.textContent = '🔓 ACTIVATE';
    if (desc) desc.textContent = 'Chemist theme available for everyone';
  }
}
window.toggleChemistMode = function() {
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'chemist' ? 'light' : 'chemist';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  _updateThemeBtns();
  updateAllModeBtns();
};

/* ══ BIOLOGIST MODE MODULE ═════════════════════════════════════
   Storage key: grnd_theme ('biologist' is a valid value)
   Available for everyone, no unlock gate — same pattern as warmup/stretch.
════════════════════════════════════════════════════════════════ */
function updateBiologistModeBtn() {
  const row  = document.getElementById('biologistModeRow');
  const btn  = document.getElementById('biologistModeBtn');
  const desc = document.getElementById('biologist-mode-desc');
  if (!row || !btn) return;
  const isActive = document.documentElement.dataset.theme === 'biologist';
  row.style.display = '';
  if (isActive) {
    btn.classList.add('active');
    btn.textContent = '🧬 ACTIVE';
    if (desc) desc.textContent = 'Biologist theme active';
  } else {
    btn.classList.remove('active');
    btn.textContent = '🔓 ACTIVATE';
    if (desc) desc.textContent = 'Biologist theme available for everyone';
  }
}
window.toggleBiologistMode = function() {
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'biologist' ? 'light' : 'biologist';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  _updateThemeBtns();
  updateAllModeBtns();
};

/* ══ SIDEQUESTS MODE MODULE ═══════════════════════════════════
   Storage key: grnd_theme ('sidequests' is a valid value)
   Unlocks when every sidequest branch exercise has status 'unlocked'.
══════════════════════════════════════════════════════════════════ */
function getSidequestsModeStats() {
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const entries = [];
  if (window.SIDE_QUEST_MAP && typeof window.SIDE_QUEST_MAP === 'object') {
    Object.values(window.SIDE_QUEST_MAP).forEach(list => {
      if (!Array.isArray(list)) return;
      list.forEach(ex => {
        if (ex && ex.id != null) entries.push(ex);
      });
    });
  }
  if (!entries.length) {
    const src = typeof TREE_LIBRARY_SOURCES !== 'undefined' ? TREE_LIBRARY_SOURCES : [];
    src.forEach(source => {
      const data = getTreeSourceData(source) || [];
      data.forEach(ex => {
        if (ex && ex.sidequestKey && ex.id != null) entries.push({ ...ex, _sqSourceLibKey: source.libKey || source.lib || '' });
      });
    });
  }
  const visible = entries.filter(ex => !ex.hof && !ex.pantheon && (typeof isListedExercise !== 'function' || isListedExercise(ex)));
  const done = visible.filter(ex => {
    const lib = ex._sqSourceLibKey || ex.libKey || ex.lib || '';
    const key = lib ? `${lib}-${ex.id}` : null;
    return key && prog[key] === 'unlocked';
  }).length;
  return { total: visible.length, done };
}

function isSidequestsModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const { total, done } = getSidequestsModeStats();
  return total > 0 && done >= total;
}

function updateSidequestsModeBtn() {
  const row  = document.getElementById('sidequestsModeRow');
  const btn  = document.getElementById('sidequestsModeBtn');
  const desc = document.getElementById('sidequests-mode-desc');
  if (!row || !btn) return;
  const unlocked = isSidequestsModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'sidequests';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🌿 ACTIVE';
      if (desc) desc.textContent = 'Leaf-laced emerald engaged';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🍃 ACTIVATE';
      if (desc) desc.textContent = 'Complete every sidequest branch to unlock this theme.';
    }
  }
}

window.toggleSidequestsMode = function() {
  if (!isSidequestsModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'sidequests' ? 'dark' : 'sidequests';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ HOF MODE MODULE ═════════════════════════════════════════
   Storage key: grnd_theme ('hof' is a valid value)
   Unlocks when ANY Hall of Fame exercise has been completed.
   To extract: move this block to themes/hof.js
════════════════════════════════════════════════════════════ */
function isHofModeUnlocked() {
  try {
    if (isAdminPreviewEnabled()) return true;
    const prog = typeof loadProgress === 'function' ? loadProgress() : {};
    if (typeof getHallOfFameExercises === 'function') {
      const hofData = getHallOfFameExercises();
      const hofKeys = new Set(hofData.map(e => `${e._libKey}-${e.id}`));
      return Object.keys(prog).some(k => prog[k] === 'unlocked' && hofKeys.has(k));
    }
    // Fallback: any key with a known hof lib prefix
    return Object.keys(prog).some(k => prog[k] === 'unlocked');
  } catch(e) { return false; }
}

function updateHofModeBtn() {
  const row  = document.getElementById('hofModeRow');
  const btn  = document.getElementById('hofModeBtn');
  const desc = document.getElementById('hof-mode-desc');
  if (!row || !btn) return;
  const unlocked = isHofModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'hof';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '★ ACTIVE';
      if (desc) desc.textContent = 'Molten gold engaged — legend status.';
    } else {
      btn.classList.remove('active');
      btn.textContent = '★ ACTIVATE';
      if (desc) desc.textContent = 'Hall of Fame feat completed — theme unlocked!';
    }
  }
}

window.toggleHofMode = function() {
  if (!isHofModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'hof' ? 'dark' : 'hof';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  _updateThemeBtns();
  updateAllModeBtns();
};

/* ══ PANTHEON MODE MODULE ════════════════════════════════════
   Storage key: grnd_theme ('pantheon' is a valid value)
   Unlocks when ANY Pantheon exercise has been completed.
   To extract: move this block to themes/pantheon.js
════════════════════════════════════════════════════════════ */
function isPantheonModeUnlocked() {
  try {
    if (isAdminPreviewEnabled()) return true;
    const prog = typeof loadProgress === 'function' ? loadProgress() : {};
    if (isPantheonPreviewEnabled()) return true;
    // FIX: was checking a global `PANTHEON_EXERCISES` that's never defined,
    // so this always fell through to the fallback below. Wired to the real
    // source so the primary, more efficient path actually runs.
    const pantheonExercises = typeof getPantheonExercises === 'function' ? getPantheonExercises() : [];
    if (pantheonExercises.length) {
      return pantheonExercises.some(e => e && e.id != null && prog[`pantheon-${e.id}`] === 'unlocked');
    }
    // Fallback: check if any pantheon-prefixed key is unlocked
    return Object.keys(prog).some(k => k.startsWith('pantheon-') && prog[k] === 'unlocked');
  } catch(e) { return false; }
}

function updatePantheonModeBtn() {
  const row  = document.getElementById('pantheonModeRow');
  const btn  = document.getElementById('pantheonModeBtn');
  const desc = document.getElementById('pantheon-mode-desc');
  if (!row || !btn) return;
  const unlocked = isPantheonModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'pantheon';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '⬡ ACTIVE';
      if (desc) desc.textContent = 'Celestial light engaged — ascension achieved.';
    } else {
      btn.classList.remove('active');
      btn.textContent = '⬡ ACTIVATE';
      if (desc) desc.textContent = 'Pantheon exercise completed — divine theme unlocked!';
    }
  }
}

window.togglePantheonMode = function() {
  if (!isPantheonModeUnlocked()) return;
  const cur = document.documentElement.dataset.theme;
  const next = cur === 'pantheon'
    ? (window._themeBeforePantheon || 'light')
    : 'pantheon';
  if (cur !== 'pantheon') window._themeBeforePantheon = cur;
  setBaseTheme(next);
};
/* ══ ADMIN CHEAT — type "admin" in feedback to unlock all themes ══
   Type "cancel" to clear without triggering anything.
   Hook is deferred to DOMContentLoaded so it wraps the final
   window.sendFeedback definition rather than being overwritten by it.
   To extract: move this block to themes/admin.js
════════════════════════════════════════════════════════════ */
(function(){
  function adminUnlockAllThemes() {
    try { localStorage.setItem(ADMIN_PREVIEW_KEY, '1'); } catch(e) {}
    try { localStorage.setItem(PANTHEON_PREVIEW_KEY, '1'); } catch(e) {}
    updateAllModeBtns();
  }

  document.addEventListener('DOMContentLoaded', function() {
    const _origSendFeedback = window.sendFeedback;
    if (window.showLeaderboardAdminButtons) window.showLeaderboardAdminButtons();
    window.sendFeedback = function() {
      const ta = document.getElementById('feedbackText');
      if (ta) {
        const val = ta.value.trim().toLowerCase();
        if (val === 'admin') {
          adminUnlockAllThemes();
          if (typeof window.setLeaderboardAdminEnabled === 'function') window.setLeaderboardAdminEnabled(true);
          if (window.showLeaderboardAdminButtons) window.showLeaderboardAdminButtons();
          ta.value = '';
          const msg = document.getElementById('feedbackSentMsg');
          if (msg) {
            const orig = msg.textContent;
            msg.textContent = '🔓 ADMIN MODE ENABLED';
            msg.classList.add('visible');
            setTimeout(() => { msg.classList.remove('visible'); msg.textContent = orig; }, 3000);
          }
          return;
        }
        if (val === 'admin off') {
          try { localStorage.removeItem(ADMIN_PREVIEW_KEY); } catch(e) {}
          try { localStorage.removeItem(PANTHEON_PREVIEW_KEY); } catch(e) {}
          if (typeof window.setLeaderboardAdminEnabled === 'function') window.setLeaderboardAdminEnabled(false);
          if (window.showLeaderboardAdminButtons) window.showLeaderboardAdminButtons();
          updateAllModeBtns();
          ta.value = '';
          const msg = document.getElementById('feedbackSentMsg');
          if (msg) {
            const orig = msg.textContent;
            msg.textContent = '🔒 ADMIN MODE DISABLED';
            msg.classList.add('visible');
            setTimeout(() => { msg.classList.remove('visible'); msg.textContent = orig; }, 3000);
          }
          return;
        }
        if (val === 'beber') {
          try { localStorage.setItem('grnd_beber_unlocked', '1'); } catch(e) {}
          // Reveal the row, then switch straight into the theme so the
          // hearts start falling immediately.
          document.documentElement.dataset.theme = 'beber';
          try { localStorage.setItem('grnd_theme', 'beber'); } catch(e) {}
          if (typeof _setThemeLabelDesc === 'function') _setThemeLabelDesc('beber');
          if (typeof _updateThemeBtns === 'function') _updateThemeBtns();
          updateAllModeBtns();
          if (typeof _syncPinnedThemeRowToActive === 'function') _syncPinnedThemeRowToActive();
          ta.value = '';
          const msg = document.getElementById('feedbackSentMsg');
          if (msg) {
            const orig = msg.textContent;
            msg.textContent = '💗 For my love — happy forever 💗';
            msg.classList.add('visible');
            setTimeout(() => { msg.classList.remove('visible'); msg.textContent = orig; }, 5000);
          }
          return;
        }
        if (val === 'cancel') {
          ta.value = '';
          return;
        }
        if (val === 'reset') {
          if (window._grndDebugResetLeaderboard) window._grndDebugResetLeaderboard();
          ta.value = '';
          if (typeof closeMenuPanel === 'function') closeMenuPanel();
          goTo('leaderboard');
          if (window.grndSeeRankAnyway) window.grndSeeRankAnyway();
          return;
        }
      }
      if (_origSendFeedback) _origSendFeedback();
    };
  });
})();

/* ══ GYM MODE MODULE ═════════════════════════════════════════
   Unlocks when ≥1 gym exercise is marked 'unlocked'.
════════════════════════════════════════════════════════════ */
function isGymModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const gymKeys = ['gymChest','gymBack','gymShoulders','gymLegs','gymArms','gymCore'];
  return gymKeys.some(function(lk) {
    const data = typeof LIB_DATA !== 'undefined' ? LIB_DATA[lk] : null;
    if (!Array.isArray(data)) return false;
    return data.some(function(e) { return prog[lk + '-' + e.id] === 'unlocked'; });
  });
}

function updateGymModeBtn() {
  const row  = document.getElementById('gymModeRow');
  const btn  = document.getElementById('gymModeBtn');
  const desc = document.getElementById('gym-mode-desc');
  if (!row || !btn) return;
  const unlocked = isGymModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'gym';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🏋 ACTIVE';
      if (desc) desc.textContent = 'Iron & steel mode active';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'Gym exercise complete — iron mode unlocked!';
    }
  }
}

window.toggleGymMode = function() {
  if (!isGymModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'gym' ? 'dark' : 'gym';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ CARDIO MODE MODULE ══════════════════════════════════════
   Unlocks when ≥1 cardio exercise is marked 'unlocked'.
════════════════════════════════════════════════════════════ */
function isCardioModeUnlocked() {
  if (isAdminPreviewEnabled()) return true;
  const prog = typeof loadProgress === 'function' ? loadProgress() : {};
  const cardioKeys = ['cardioRunning','cardioCycling','cardioHIIT','cardioRowing','cardioRecovery','cardioMobility'];
  return cardioKeys.some(function(lk) {
    const data = typeof LIB_DATA !== 'undefined' ? LIB_DATA[lk] : null;
    if (!Array.isArray(data)) return false;
    return data.some(function(e) { return prog[lk + '-' + e.id] === 'unlocked'; });
  });
}

function updateCardioModeBtn() {
  const row  = document.getElementById('cardioModeRow');
  const btn  = document.getElementById('cardioModeBtn');
  const desc = document.getElementById('cardio-mode-desc');
  if (!row || !btn) return;
  const unlocked = isCardioModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'cardio';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '🏃 ACTIVE';
      if (desc) desc.textContent = 'Dawn horizon mode active';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🔓 ACTIVATE';
      if (desc) desc.textContent = 'Cardio exercise complete — dawn mode unlocked!';
    }
  }
}

window.toggleCardioMode = function() {
  if (!isCardioModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'cardio' ? 'dark' : 'cardio';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ BEBER MODE MODULE  💗 (secret) ══════════════════════════
   A hidden love-letter theme. Not earned through exercises —
   revealed only by typing "beber" in the feedback box (see the
   ADMIN CHEAT block). Once revealed, the flag persists so it
   stays unlocked forever. Admin preview also reveals it, like
   every other mode.
   Storage key: grnd_beber_unlocked = '1'
════════════════════════════════════════════════════════════ */
const BEBER_UNLOCK_KEY = 'grnd_beber_unlocked';

function isBeberModeUnlocked() {
  try {
    return localStorage.getItem(BEBER_UNLOCK_KEY) === '1';
  } catch(e) { return false; }
}

function updateBeberModeBtn() {
  const row  = document.getElementById('beberModeRow');
  const btn  = document.getElementById('beberModeBtn');
  const desc = document.getElementById('beber-mode-desc');
  if (!row || !btn) return;
  const unlocked = isBeberModeUnlocked();
  const isActive = document.documentElement.dataset.theme === 'beber';
  row.style.display = unlocked ? '' : 'none';
  if (unlocked) {
    if (isActive) {
      btn.classList.add('active');
      btn.textContent = '💗 ACTIVE';
      if (desc) desc.textContent = 'A sky full of hearts, just for you 💗';
    } else {
      btn.classList.remove('active');
      btn.textContent = '💗 ACTIVATE';
      if (desc) desc.textContent = 'A little secret made with love 💗';
    }
  }
}

window.toggleBeberMode = function() {
  if (!isBeberModeUnlocked()) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === 'beber' ? 'dark' : 'beber';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══ SEASONAL THEMES MODULE  🌊❄🌱🍂 ═════════════════════════
   Four limited-time themes, each only offered while its real
   calendar season is running (northern hemisphere months) —
   or always under admin preview, like every other mode:
     summer → Jun/Jul/Aug   "We're cool for the summer"
     winter → Dec/Jan/Feb   "Winter Arc"
     spring → Mar/Apr/May   "Spring Cut"
     autumn → Sep/Oct/Nov   "Autumn Bulk"
   No exercise requirement — the season itself is the unlock.
   If the season rolls over while a seasonal theme is active it
   stays active (the row just hides), same as admin-preview-off
   behaviour on other modes.
   Storage key: grnd_theme (each key is a valid value)
   To extract: move this block to themes/seasons.js
════════════════════════════════════════════════════════════ */
function getCurrentSeason() {
  const m = new Date().getMonth(); // 0 = Jan
  if (m === 11 || m <= 1) return 'winter';
  if (m <= 4) return 'spring';
  if (m <= 7) return 'summer';
  return 'autumn';
}

const SEASON_MODES = {
  summer: {
    row: 'summerModeRow', btn: 'summerModeBtn', desc: 'summer-mode-desc',
    icon: '🌊',
    activeDesc: "Beach engaged — we're cool for the summer",
    readyDesc:  'Summer is here — the beach is open!',
  },
  winter: {
    row: 'winterModeRow', btn: 'winterModeBtn', desc: 'winter-mode-desc',
    icon: '❄',
    activeDesc: 'Winter Arc engaged — let it snow',
    readyDesc:  'Winter is here — begin your arc.',
  },
  spring: {
    row: 'springModeRow', btn: 'springModeBtn', desc: 'spring-mode-desc',
    icon: '🌱',
    activeDesc: 'Spring Cut engaged — fields in bloom',
    readyDesc:  'Spring is here — time to cut.',
  },
  autumn: {
    row: 'autumnModeRow', btn: 'autumnModeBtn', desc: 'autumn-mode-desc',
    icon: '🍂',
    activeDesc: 'Autumn Bulk engaged — harvest gains',
    readyDesc:  'Autumn is here — time to bulk.',
  },
};

function isSeasonModeUnlocked(season) {
  if (isAdminPreviewEnabled()) return true;
  return getCurrentSeason() === season;
}

function updateSeasonModeBtns() {
  Object.keys(SEASON_MODES).forEach(function(season) {
    const cfg  = SEASON_MODES[season];
    const row  = document.getElementById(cfg.row);
    const btn  = document.getElementById(cfg.btn);
    const desc = document.getElementById(cfg.desc);
    if (!row || !btn) return;
    const unlocked = isSeasonModeUnlocked(season);
    const isActive = document.documentElement.dataset.theme === season;
    row.style.display = unlocked ? '' : 'none';
    if (unlocked) {
      if (isActive) {
        btn.classList.add('active');
        btn.textContent = cfg.icon + ' ACTIVE';
        if (desc) desc.textContent = cfg.activeDesc;
      } else {
        btn.classList.remove('active');
        btn.textContent = '🔓 ACTIVATE';
        if (desc) desc.textContent = cfg.readyDesc;
      }
    }
  });
}

window.toggleSeasonMode = function(season) {
  if (!SEASON_MODES[season] || !isSeasonModeUnlocked(season)) return;
  const cur  = document.documentElement.dataset.theme;
  const next = cur === season ? 'dark' : season;
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('grnd_theme', next); } catch(e) {}
  _setThemeLabelDesc(next);
  updateAllModeBtns();
};

/* ══════════════════════════════════════════════════════════════
   MENU PANEL — self-contained module

   Storage key: grnd_profile  → { firstName, lastName, age,
                                   country, city, skillLevel,
                                   photoDataUrl }
   To split: move the HTML/CSS/IIFE blocks marked "MENU PANEL"
   into menu.html / menu.css / menu.js and <script src> them.
   Public API (called from inline onclick):
     openMenuPanel()       open menu
     closeMenuPanel(evt)   close (evt = backdrop click)
     openProfileEdit()     → edit mode
     cancelProfileEdit()   discard edits
     saveProfile()         commit to localStorage
     handleProfilePhoto()  FileReader upload handler
     removeProfilePhoto()  clear photo
════════════════════════════════════════════════════════════════ */
(function() {
  const STORAGE_KEY  = 'grnd_profile';
  const SKILL_LABELS = ['','BEGINNER','NOVICE','INTERMEDIATE','ADVANCED','ELITE'];
  const SKILL_CSS    = ['','s1','s2','s3','s4','s5'];

  let _p = {firstName:'',lastName:'',age:'',country:'',city:'',skillLevel:0,photoDataUrl:'',goal:'',joinDate:'',injuries:[]};
  let _editSkill  = 0;
  let _pendingPic = null;
  let _clearPic   = false;

  function load() {
    try { const r=localStorage.getItem(STORAGE_KEY); if(r) _p={..._p,...JSON.parse(r)}; } catch(e){}
    renderView();
  }
  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(_p)); } catch(e){}
  }

  function initials(f,l) {
    f=(f||'').trim(); l=(l||'').trim();
    if(!f&&!l) return '?';
    return ((f[0]||'')+(l[0]||'')).toUpperCase()||'?';
  }
  function setAvatar(el, photo, first, last) {
    if(!el) return;
    // preserve camera overlay spans that may be inside
    const camOverlay = el.querySelector('.prof-avatar-cam-overlay');
    const editCam    = el.querySelector('.prof-avatar-edit-cam');
    el.innerHTML = photo
      ? `<img src="${photo}" alt="" />`
      : `<span class="prof-avatar-initials">${initials(first,last)}</span>`;
    if(camOverlay) el.appendChild(camOverlay);
    if(editCam)    el.appendChild(editCam);
  }

  function renderView() {
    const name = [_p.firstName,_p.lastName].filter(Boolean).join(' ');
    const q = s => document.getElementById(s);
    if(q('prof-name-display')) q('prof-name-display').textContent = name||'Set up your profile';
    const parts=[];
    if(_p.age) parts.push('Age '+_p.age);
    const loc=[_p.city,_p.country].filter(Boolean).join(', ');
    if(loc) parts.push(loc);
    if(q('prof-meta-display')) q('prof-meta-display').textContent = parts.join(' · ');
    const badge=q('prof-skill-badge');
    if(badge) {
      const derived = getDerivedSkillLevel();
      if(derived) {
        badge.textContent = SKILL_LABELS[derived];
        badge.className   = 'prof-skill-badge '+SKILL_CSS[derived];
        badge.style.display = '';
      } else {
        badge.style.display = 'none';
      }
    }
    setAvatar(q('prof-avatar-display'), _p.photoDataUrl, _p.firstName, _p.lastName);
    if(q('prof-goal-display')) {
      q('prof-goal-display').textContent = _p.goal || '';
      q('prof-goal-display').style.display = _p.goal ? '' : 'none';
    }
    if(q('prof-since-display')) {
      if(_p.joinDate) {
        const d = new Date(_p.joinDate);
        const label = d.toLocaleString('en-US',{month:'long',year:'numeric'});
        q('prof-since-display').textContent = 'Training since ' + label;
        q('prof-since-display').style.display = '';
      } else {
        q('prof-since-display').style.display = 'none';
      }
    }
    renderInjuryChips();
  }

  const INJURY_JOINTS = [
    { key:'shoulder',  label:'Shoulder',   group:'upper' },
    { key:'elbow',     label:'Elbow',      group:'upper' },
    { key:'wrist',     label:'Wrist',      group:'upper' },
    { key:'fingers',   label:'Fingers',    group:'upper' },
    { key:'neck',      label:'Neck',       group:'spine' },
    { key:'thoracic',  label:'Upper back', group:'spine' },
    { key:'lowerBack', label:'Lower back', group:'spine' },
    { key:'si',        label:'SI joint',   group:'spine' },
    { key:'hip',       label:'Hip',        group:'lower' },
    { key:'groin',     label:'Groin',      group:'lower' },
    { key:'knee',      label:'Knee',       group:'lower' },
    { key:'ankle',     label:'Ankle',      group:'lower' },
    { key:'foot',      label:'Foot',       group:'lower' },
  ];
  const INJURY_GROUP_LABELS = { upper:'Upper body', spine:'Spine', lower:'Lower body' };

  function renderInjuryChips() {
    const wrap = document.getElementById('prof-injuries-chips');
    const badge = document.getElementById('prof-injuries-badge');
    if (!wrap) return;
    const active = Array.isArray(_p.injuries) ? _p.injuries : [];
    if (badge) {
      badge.textContent = active.length ? active.length + ' active' : '';
      badge.style.display = active.length ? '' : 'none';
    }
    const groups = ['upper','spine','lower'];
    wrap.innerHTML = groups.map(g => {
      const joints = INJURY_JOINTS.filter(j => j.group === g);
      return `<div class="prof-inj-group-label">${INJURY_GROUP_LABELS[g]}</div>
        <div class="prof-inj-row">${joints.map(j =>
          `<button class="prof-inj-chip${active.includes(j.key) ? ' on' : ''}" onclick="toggleInjury('${j.key}')">${j.label}</button>`
        ).join('')}</div>`;
    }).join('');
    syncInjuryMetricsRow(active);
  }

  function syncInjuryMetricsRow(active) {
    const list = active || (Array.isArray(_p.injuries) ? _p.injuries : []);
    const sub = document.getElementById('inj-metrics-sub');
    if (sub) sub.textContent = list.length ? `${list.length} area${list.length !== 1 ? 's' : ''} flagged` : 'No areas flagged';
  }

  window.renderInjuryChips = renderInjuryChips;
  window.syncInjuryMetricsRow = syncInjuryMetricsRow;

  window.openInjuryModal = function() {
    renderInjuryChips();
    document.getElementById('injuryModalOverlay')?.classList.add('open');
  };
  window.closeInjuryModal = function() {
    document.getElementById('injuryModalOverlay')?.classList.remove('open');
  };

  window.getActiveInjuries = function() {
    return Array.isArray(_p.injuries) ? _p.injuries.slice() : [];
  };

  window.toggleInjury = function(jKey) {
    if (!Array.isArray(_p.injuries)) _p.injuries = [];
    const idx = _p.injuries.indexOf(jKey);
    if (idx === -1) _p.injuries.push(jKey);
    else _p.injuries.splice(idx, 1);
    persist();
    renderInjuryChips();
  };

  window.openMenuPanel = function() {
    document.getElementById('menuOverlay')?.classList.add('open');
    document.body.style.overflow='hidden';
    document.getElementById('bnavMenu')?.classList.add('open');
    document.getElementById('headerMenuBtn')?.classList.add('open');
    showView();
    if(typeof renderPlayerLevel === 'function') renderPlayerLevel();
  };
  window.closeMenuPanel = function(e) {
    if(e && e.target!==document.getElementById('menuOverlay')) return;
    document.getElementById('menuOverlay')?.classList.remove('open');
    document.body.style.overflow='';
    document.getElementById('bnavMenu')?.classList.remove('open');
    document.getElementById('headerMenuBtn')?.classList.remove('open');
    if(document.getElementById('prof-edit')?.style.display!=='none') showView();
  };

  function showView() {
    document.getElementById('prof-view').style.display='';
    document.getElementById('prof-edit').style.display='none';
    _pendingPic=null; _clearPic=false;
    renderView();
  }
  function showEdit() {
    const q=s=>document.getElementById(s);
    q('prof-input-first').value   = _p.firstName;
    q('prof-input-last').value    = _p.lastName;
    q('prof-input-age').value     = _p.age||'';
    q('prof-input-country').value = _p.country;
    q('prof-input-city').value    = _p.city;
    if(q('prof-input-goal')) q('prof-input-goal').value = _p.goal||'';
    setAvatar(q('prof-avatar-edit'), _p.photoDataUrl, _p.firstName, _p.lastName);
    q('prof-remove-photo').style.display = _p.photoDataUrl?'':'none';
    _editSkill = getDerivedSkillLevel();
    renderSkillSummary();
    q('prof-view').style.display='none';
    q('prof-edit').style.display='';
  }
  window.openProfileEdit   = function() { showEdit(); };
  window.cancelProfileEdit = function() { showView(); };

  function getDerivedSkillLevel() {
    const player = window.getPlayerLevelSummary ? window.getPlayerLevelSummary() : null;
    if(player && typeof player.level === 'number') {
      if(player.level >= 40) return 5;
      if(player.level >= 20) return 4;
      if(player.level >= 10) return 3;
      if(player.level >= 5) return 2;
      return 1;
    }
    return _p.skillLevel || 1;
  }

  function renderSkillSummary() {
    const player = window.getPlayerLevelSummary ? window.getPlayerLevelSummary() : null;
    const current = getDerivedSkillLevel();
    const progress = player && typeof player.pct === 'number' ? player.pct : 0;
    const levelText = player && typeof player.level === 'number' ? `Lv ${player.level}` : 'Lv ?';
    const nextText = player && typeof player.ptsToNext === 'number'
      ? `${player.ptsToNext} pts to next level`
      : 'Progress unavailable';
    const badge = document.getElementById('prof-skill-summary-badge');
    const meta = document.getElementById('prof-skill-summary-meta');
    const text = document.getElementById('prof-skill-summary-text');
    const fill = document.getElementById('prof-skill-summary-fill');
    if(badge) {
      badge.textContent = SKILL_LABELS[current] || 'UNKNOWN';
      badge.className = 'prof-skill-badge ' + SKILL_CSS[current];
    }
    if(meta) meta.textContent = levelText;
    if(text) text.textContent = nextText;
    if(fill) fill.style.width = progress.toFixed(1) + '%';
  }

  window.handleProfilePhoto = function(evt) {
    const file = evt.target.files?.[0];
    if(!file || !file.type.startsWith('image/')) return;
    const fromViewMode = evt.target.id === 'prof-photo-input-quick';
    const reader = new FileReader();
    reader.onload = e => {
      const dataUrl = e.target.result;
      openCropModal(dataUrl, function(croppedUrl) {
        _pendingPic = croppedUrl; _clearPic = false;
        if(fromViewMode) {
          // save immediately when editing from view mode
          _p.photoDataUrl = croppedUrl; _pendingPic = null;
          persist();
          renderView();
        } else {
          const av = document.getElementById('prof-avatar-edit');
          if(av) {
            av.innerHTML = `<img src="${croppedUrl}" alt="" /><span class="prof-avatar-edit-cam">📷</span>`;
          }
          document.getElementById('prof-remove-photo').style.display = '';
        }
      });
    };
    reader.readAsDataURL(file);
    evt.target.value = '';
  };
  window.removeProfilePhoto = function() {
    _pendingPic=null; _clearPic=true;
    const av=document.getElementById('prof-avatar-edit');
    if(av) av.innerHTML=`<span class="prof-avatar-initials">${
      initials(document.getElementById('prof-input-first').value,
               document.getElementById('prof-input-last').value)
    }</span><span class="prof-avatar-edit-cam">📷</span>`;
    document.getElementById('prof-remove-photo').style.display='none';
  };

  window.saveProfile = function() {
    _p.firstName  = document.getElementById('prof-input-first').value.trim();
    _p.lastName   = document.getElementById('prof-input-last').value.trim();
    _p.age        = parseInt(document.getElementById('prof-input-age').value)||'';
    _p.country    = document.getElementById('prof-input-country').value.trim();
    _p.city       = document.getElementById('prof-input-city').value.trim();
    _p.goal       = (document.getElementById('prof-input-goal')?.value||'').trim();
    if(!_p.joinDate && (_p.firstName||_p.lastName)) _p.joinDate = new Date().toISOString();
    _p.skillLevel = getDerivedSkillLevel();
    if(_pendingPic) { _p.photoDataUrl=_pendingPic; _pendingPic=null; }
    if(_clearPic)   { _p.photoDataUrl='';           _clearPic=false; }
    persist();
    showView();
  };

  load();

/* └─ @end:  js/modes.js ───────────────────────────────────────────── */
})(); /* ══ END MENU MODULE ═══════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════════════
   ④ MENU PANEL + PROFILE (js/menu.js / js/profile.js)
   Self-contained IIFE. Reads/writes grnd_profile in localStorage.
   Public API (called from HTML onclick attrs):
     openMenuPanel()         open slide-in menu
     closeMenuPanel(evt)     close (backdrop click or button)
     openProfileEdit()       switch to edit mode
     cancelProfileEdit()     discard, return to view mode
     saveProfile()           persist profile to localStorage
     handleProfilePhoto(e)   FileReader → openCropModal pipeline
     removeProfilePhoto()    clear photo from profile
═══════════════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════════════
   ⑤ PLAYER LEVEL SYSTEM (js/player-level.js)
   Self-contained IIFE.
     calcLevel()             compute level, pts, title from progress
     renderPlayerLevel()     update all #prof-level-* DOM elements
     getPlayerLevelSummary() returns calcLevel() result (public)
   Depends on: loadProgress(), LIB_DATA, getPantheonExercises(),
               getUnlockedHofKeys(), getUnlockedPantheonExercises()
═══════════════════════════════════════════════════════════════════════ */
/* ══════════════════════════════════════════════════════════════
   PLAYER LEVEL SYSTEM
════════════════════════════════════════════════════════════════ */
(function() {
  const POINTS_PER_LEVEL = 100;
  // [minLevel, title, tierClass]
  const LEVEL_TIERS = [
    [100, 'GOAT',         'lv-goat'],
    [80,  'LEGEND',       'lv-gold'],
    [65,  'GRANDMASTER',  'lv-red'],
    [50,  'MASTER',       'lv-red'],
    [40,  'VETERAN',      'lv-red'],
    [30,  'WARRIOR',      'lv-orange'],
    [20,  'FIGHTER',      'lv-orange'],
    [15,  'ATHLETE',      'lv-green'],
    [10,  'TRAINEE',      'lv-green'],
    [5,   'ROOKIE',       'lv-gray'],
    [1,   'NEWCOMER',     'lv-gray'],
  ];
  const SKILL_LABELS = ['','BEGINNER','NOVICE','INTERMEDIATE','ADVANCED','ELITE'];
  const SKILL_CSS    = ['','s1','s2','s3','s4','s5'];

  function tri(n) { n = Math.max(0, n); return n * (n + 1) / 2; }

  function exercisePoints(e) {
    const j = e.joints || {};
    const joints_sum = (j.wrist||0)+(j.elbow||0)+(j.shoulder||0)+(j.neck||0)
                     + (j.lowerBack||0)+(j.hip||0)+(j.knee||0)+(j.ankle||0);
    const train_pts  = (e.str?.suit ? tri(e.str.eff||0) : 0)
                     + (e.vol?.suit ? tri(e.vol.eff||0) : 0)
                     + (e.end?.suit ? tri(e.end.eff||0) : 0);
    const base = joints_sum + train_pts + (e.technique||0) + (e.mobility||0);
    const pts = Math.round(base * (e.diff || 1));
    const libKey = e._libKey || e.libKey || '';
    if(e.pantheonGroup || libKey === 'pantheon') return Math.round(pts * 3);
    if(e.hof) return Math.round(pts * 2.5);
    if(libKey === 'combo') return Math.round(pts * 1.5);
    return Math.round(pts);
  }

  function buildExerciseMap() {
    const map = {};
    if(typeof LIB_DATA === 'undefined') return map;
    Object.keys(LIB_DATA).filter(libKey => libKey !== 'all').forEach(libKey => {
      const arr = LIB_DATA[libKey];
      if(!Array.isArray(arr)) return;
      arr.forEach(e => {
        if(e && e.id != null) map[`${libKey}-${e.id}`] = { ...e, _libKey: libKey };
      });
    });
    // FIX: this used to reference a global `PANTHEON_EXERCISES` that is never
    // defined anywhere in the app, so this branch never ran — every Pantheon
    // completion was missing from the map, fell through `if(!ex) return;` in
    // calcLevel(), and scored 0 XP despite the 3x multiplier built for it
    // in exercisePoints(). Use the real Pantheon source instead.
    if(typeof getPantheonExercises === 'function') {
      getPantheonExercises().forEach(e => {
        if(e && e.id != null) map[`pantheon-${e.id}`] = { ...e, _libKey: 'pantheon' };
      });
    }
    return map;
  }

  function calcLevel() {
    const prog = (() => {
      try { return JSON.parse(localStorage.getItem('grnd_progress') || '{}'); } catch(e) { return {}; }
    })();
    const exMap = buildExerciseMap();
    let totalPts = 0, unlockedCount = 0;
    Object.entries(prog).forEach(([key, status]) => {
      if(status !== 'unlocked') return;
      const ex = exMap[key];
      if(!ex) return;
      totalPts += exercisePoints(ex);
      unlockedCount++;
    });
    const level      = Math.floor(totalPts / POINTS_PER_LEVEL) + 1;
    const ptsInLevel = totalPts % POINTS_PER_LEVEL;
    const ptsToNext  = POINTS_PER_LEVEL - ptsInLevel;
    const pct        = (ptsInLevel / POINTS_PER_LEVEL) * 100;
    const tier = LEVEL_TIERS.find(([min]) => level >= min) || LEVEL_TIERS[LEVEL_TIERS.length - 1];
    return { level, totalPts, ptsInLevel, ptsToNext, pct,
             title: tier[1], tierClass: tier[2], unlockedCount };
  }

  window.renderPlayerLevel = function() {
    const r  = calcLevel();
    const $  = id => document.getElementById(id);
    const blk = $('prof-level-block');

    if($('prof-level-num'))      $('prof-level-num').textContent  = r.level;
    if($('prof-level-title'))    $('prof-level-title').textContent = r.title;
    if($('prof-level-bar'))      $('prof-level-bar').style.width   = r.pct.toFixed(1) + '%';
    if($('prof-level-pts-cur'))  $('prof-level-pts-cur').textContent  = r.totalPts.toLocaleString() + ' pts total';
    if($('prof-level-pts-next')) $('prof-level-pts-next').textContent = r.ptsToNext + ' pts to lv.' + (r.level + 1);
    if($('prof-level-count'))    $('prof-level-count').textContent = r.unlockedCount;
    const hofPanel = $('prof-level-hof-panel');
    if(hofPanel) {
      const hofCount = getUnlockedHofKeys().length;
      const pantheonCount = getUnlockedPantheonExercises().length;
      const totalStars = hofCount + pantheonCount;
      const hofEl = $('prof-level-hof');
      const hofStars = $('prof-level-hof-stars');
      const hofCollapsed = $('prof-level-hof-collapsed');
      const hofCountEl = $('prof-level-hof-count');
      if(totalStars > 0) {
        hofPanel.style.display = '';
        if(hofCountEl) hofCountEl.textContent = totalStars;
        if(hofStars) {
          hofStars.innerHTML = '';
          for(let i = 0; i < pantheonCount; i++) {
            hofStars.innerHTML += '<span class="prof-level-hof-star prof-level-hof-star-pantheon">★</span>';
          }
          for(let i = 0; i < hofCount; i++) {
            hofStars.innerHTML += '<span class="prof-level-hof-star prof-level-hof-star-hof">★</span>';
          }
          hofStars.style.display = '';
        }
        if(hofCollapsed) hofCollapsed.style.display = 'none';
        if(hofStars && hofStars.scrollWidth > hofStars.clientWidth) {
          if(hofStars) hofStars.style.display = 'none';
          if(hofCollapsed) hofCollapsed.style.display = '';
        }
      } else {
        hofPanel.style.display = 'none';
      }
    }

    // Apply tier class to block
    if(blk) {
      blk.className = 'prof-level-block ' + r.tierClass;
    }

    // Skill badge inside level block
    const sb = $('prof-level-skill-badge');
    if(sb) {
      const SKILL_LABELS = ['', 'BEGINNER', 'NOVICE', 'INTERMEDIATE', 'ADVANCED', 'ELITE'];
      const SKILL_CSS = ['', 's1', 's2', 's3', 's4', 's5'];
      function deriveSkillFromLevel(lvl) {
        if(lvl >= 40) return 5;
        if(lvl >= 20) return 4;
        if(lvl >= 10) return 3;
        if(lvl >= 5) return 2;
        return 1;
      }
      const skillLevel = deriveSkillFromLevel(r.level);
      if(skillLevel) {
        sb.textContent = SKILL_LABELS[skillLevel];
        sb.className = 'prof-level-skill prof-skill-badge ' + SKILL_CSS[skillLevel];
        sb.style.display = '';
      } else {
        sb.style.display = 'none';
      }
    }
  };
  window.getPlayerLevelSummary = function() { return calcLevel(); };
})(); /* ══ END LEVEL MODULE ═════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════════════
   ⑥ IMAGE CROP MODULE (js/image-crop.js)
   Self-contained IIFE. Canvas-based circular crop.
   Public API:
     openCropModal(dataUrl, onConfirmCb)   — called by handleProfilePhoto
     confirmCrop()                         — user hits "SAVE PHOTO"
     cancelCrop()                          — user hits "CANCEL"
     cropZoomFromSlider(val)               — range input handler
   Internal: pointer/touch drag, pinch zoom, wheel zoom, clampOffset.
═══════════════════════════════════════════════════════════════════════ */
/* ══════════════════════════════════════════════════════════════
   IMAGE CROP MODULE
   Opens a canvas-based circular crop after any photo selection.
   Public API:
     openCropModal(dataUrl, onConfirm)   — called by handleProfilePhoto
     confirmCrop()                       — user confirms
     cancelCrop()                        — user cancels
     cropZoomFromSlider(val)             — slider input handler
════════════════════════════════════════════════════════════════ */
(function() {
  const CANVAS_SIZE = 520;   // internal canvas resolution
  const DISPLAY_SIZE = 260;  // CSS display size

  let _img = new Image();
  let _onConfirm = null;
  let _zoom = 1, _minZoom = 1;
  let _ox = 0, _oy = 0;   // image offset (centre-based)
  let _dragging = false, _lastX = 0, _lastY = 0;
  let _pinchDist = 0;

  function clampOffset() {
    const iw = _img.naturalWidth  * _zoom;
    const ih = _img.naturalHeight * _zoom;
    const maxX = Math.max(0, (iw - CANVAS_SIZE) / 2);
    const maxY = Math.max(0, (ih - CANVAS_SIZE) / 2);
    _ox = Math.max(-maxX, Math.min(maxX, _ox));
    _oy = Math.max(-maxY, Math.min(maxY, _oy));
  }

  function draw() {
    const cv = document.getElementById('cropCanvas');
    if(!cv || !_img.naturalWidth) return;
    const ctx = cv.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Draw image
    const iw = _img.naturalWidth  * _zoom;
    const ih = _img.naturalHeight * _zoom;
    const dx = (CANVAS_SIZE - iw) / 2 + _ox;
    const dy = (CANVAS_SIZE - ih) / 2 + _oy;
    ctx.drawImage(_img, dx, dy, iw, ih);

    // Dark overlay outside circle
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.62)';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(CANVAS_SIZE/2, CANVAS_SIZE/2, CANVAS_SIZE/2 - 8, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();

    // Circle border
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.55)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(CANVAS_SIZE/2, CANVAS_SIZE/2, CANVAS_SIZE/2 - 9, 0, Math.PI*2);
    ctx.stroke();
    ctx.restore();
  }

  window.openCropModal = function(dataUrl, onConfirmCb) {
    _onConfirm = onConfirmCb;
    _ox = 0; _oy = 0;
    _img.onload = function() {
      // set min zoom so image covers the circle
      const shorter = Math.min(_img.naturalWidth, _img.naturalHeight);
      _minZoom = CANVAS_SIZE / shorter;
      _zoom = _minZoom;
      const sl = document.getElementById('cropZoomSlider');
      if(sl) { sl.min = _minZoom; sl.max = _minZoom * 4; sl.value = _zoom; }
      draw();
    };
    _img.src = dataUrl;
    document.getElementById('cropOverlay').classList.add('open');
  };

  window.cancelCrop = function() {
    document.getElementById('cropOverlay').classList.remove('open');
    _onConfirm = null;
    // reset file inputs
    ['prof-photo-input','prof-photo-input-quick'].forEach(id => {
      const el = document.getElementById(id);
      if(el) el.value = '';
    });
  };

  window.confirmCrop = function() {
    // Render crisp 300×300 circle onto an offscreen canvas
    const out = document.createElement('canvas');
    out.width = out.height = 300;
    const ctx = out.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.arc(150, 150, 150, 0, Math.PI*2);
    ctx.clip();
    const iw = _img.naturalWidth  * _zoom;
    const ih = _img.naturalHeight * _zoom;
    const scale = 300 / CANVAS_SIZE;
    const dx = ((CANVAS_SIZE - iw) / 2 + _ox) * scale;
    const dy = ((CANVAS_SIZE - ih) / 2 + _oy) * scale;
    ctx.drawImage(_img, dx, dy, iw * scale, ih * scale);
    ctx.restore();
    const result = out.toDataURL('image/jpeg', 0.92);
    document.getElementById('cropOverlay').classList.remove('open');
    if(_onConfirm) _onConfirm(result);
  };

  window.cropZoomFromSlider = function(val) {
    _zoom = parseFloat(val);
    clampOffset();
    draw();
  };

  // ── Pointer events (mouse + touch) ──────────────────────────
  function getWrap() { return document.getElementById('cropCanvasWrap'); }

  function onPointerDown(e) {
    if(e.touches && e.touches.length === 2) return; // handled by pinch
    _dragging = true;
    const pt = e.touches ? e.touches[0] : e;
    _lastX = pt.clientX; _lastY = pt.clientY;
    e.preventDefault();
  }
  function onPointerMove(e) {
    if(e.touches && e.touches.length === 2) {
      // Pinch zoom
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY);
      if(_pinchDist) {
        const sl = document.getElementById('cropZoomSlider');
        _zoom = Math.max(parseFloat(sl?.min||_minZoom),
                Math.min(parseFloat(sl?.max||_minZoom*4),
                _zoom * (d / _pinchDist)));
        if(sl) sl.value = _zoom;
        clampOffset(); draw();
      }
      _pinchDist = d;
      e.preventDefault(); return;
    }
    if(!_dragging) return;
    const pt = e.touches ? e.touches[0] : e;
    const scale = CANVAS_SIZE / DISPLAY_SIZE;
    _ox += (pt.clientX - _lastX) * scale;
    _oy += (pt.clientY - _lastY) * scale;
    _lastX = pt.clientX; _lastY = pt.clientY;
    clampOffset(); draw();
    e.preventDefault();
  }
  function onPointerUp() { _dragging = false; _pinchDist = 0; }
  function onWheel(e) {
    const sl = document.getElementById('cropZoomSlider');
    _zoom = Math.max(parseFloat(sl?.min||_minZoom),
            Math.min(parseFloat(sl?.max||_minZoom*4),
            _zoom * (e.deltaY < 0 ? 1.08 : 0.93)));
    if(sl) sl.value = _zoom;
    clampOffset(); draw();
    e.preventDefault();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const wrap = getWrap();
    if(!wrap) return;
    wrap.addEventListener('mousedown',  onPointerDown, {passive:false});
    wrap.addEventListener('mousemove',  onPointerMove, {passive:false});
    wrap.addEventListener('mouseup',    onPointerUp);
    wrap.addEventListener('mouseleave', onPointerUp);
    wrap.addEventListener('touchstart', onPointerDown, {passive:false});
    wrap.addEventListener('touchmove',  onPointerMove, {passive:false});
    wrap.addEventListener('touchend',   onPointerUp);
    wrap.addEventListener('wheel',      onWheel,       {passive:false});
  });
})(); /* ══ END CROP MODULE ══════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════════════
   ⑦ FEEDBACK STUB (feature currently disabled)
   sendFeedback() clears the textarea and briefly shows feedbackSentMsg.
   The ADMIN CHEAT in ③ wraps this function on DOMContentLoaded.
═══════════════════════════════════════════════════════════════════════ */
window.sendFeedback = function() {
  const ta  = document.getElementById('feedbackText');
  const msg = document.getElementById('feedbackSentMsg');
  if(ta) ta.value = '';
  if(msg) { msg.classList.add('visible'); setTimeout(()=>msg.classList.remove('visible'), 3500); }
};

/* ── Preferences overlay ───────────────────────────────────────────── */
window.openPreferences = function() {
  const el = document.getElementById('preferencesOverlay');
  if(!el) return;
  // Ensure the overlay is a direct child of body so it sits above all panels
  if(el.parentElement !== document.body) document.body.appendChild(el);
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closePreferences = function() {
  const el = document.getElementById('preferencesOverlay');
  if(!el) return;
  el.classList.remove('open');
  document.body.style.overflow = '';
};

/* ── @file: config/ranking.js ── */
/* ┌─ @file: js/ranking.js ─────────────────────────────────────────────
   "YOUR PROGRESS" / LEADERBOARD REPLACEMENT
   ─────────────────────────────────────────────────────────────────
   States (all inside #view-leaderboard, only one visible at a time):
     #ldb-manifesto    → default landing. Locked or unlocked sub-state.
     #ldb-fakeboard    → flickering board + reveal text (SEE RANK ANYWAY / FULL VIEW).
     #ldb-postreveal   → motivational text. Shows "Proceed anyway" first,
                         switches to "REVISIT" after ambient closes.
     #ldb-ambient      → image + audio. Only reachable via "Proceed anyway".

   Unlock condition: level >= 100 OR hofCount > 0.

   Flow:
     SEE RANK ANYWAY / FULL VIEW
       → ldb-fakeboard flicker → CONTINUE
       → ldb-postreveal ("Proceed anyway")
       → ldb-ambient (image + audio)
       → ldb-postreveal ("REVISIT")
       → replay from ldb-fakeboard

   localStorage keys:
     grnd_leaderboard_revealed     '1' once first reveal played
     grnd_ldb_board                JSON {id,pts}[] fake board rows
     grnd_ldb_milestone_unlocked   last unlocked count board grew on
     grnd_ldb_milestone_points     last pts total board grew on
     grnd_ldb_fake_data            {rank,total,pts} stable fake identity
     grnd_ldb_version              schema version ('2')
   └─ */
(function(){

  try{
    localStorage.removeItem('grnd_uid');
    localStorage.removeItem('grnd_last_tier');
  }catch(e){}

  /* ────────────────────────────────────────────────────────────────
     Stats accessor
     ──────────────────────────────────────────────────────────────── */
  function _grndGetStats(){
    var level=1, points=0, unlocked=0, hofCount=0, gotSummary=false;
    try{
      if (typeof window.getPlayerLevelSummary === 'function'){
        var s = window.getPlayerLevelSummary() || {};
        var L = s.level, P = s.totalPts, U = s.unlockedCount;
        if (L != null && P != null){
          level = Number(L) || 1;
          points = Number(P) || 0;
          unlocked = Number(U) || 0;
          gotSummary = true;
        }
      }
    }catch(e){}
    if (!gotSummary){
      try{
        var lvlEl = document.getElementById('prof-level-num');
        var ptsEl = document.getElementById('prof-level-pts-cur');
        var cntEl = document.getElementById('prof-level-count');
        if (lvlEl) level = parseInt(lvlEl.textContent,10) || 1;
        if (ptsEl) points = parseInt((ptsEl.textContent||'').replace(/[^\d]/g,''),10) || 0;
        if (cntEl) unlocked = parseInt(cntEl.textContent,10) || 0;
      }catch(e){}
    }
    try{
      if (typeof window.getUnlockedHofKeys === 'function' && typeof window.getUnlockedPantheonExercises === 'function'){
        hofCount = (window.getUnlockedHofKeys().length || 0) + (window.getUnlockedPantheonExercises().length || 0);
      } else {
        var hofCntEl = document.getElementById('prof-level-hof-count');
        var hofPanel = document.getElementById('prof-level-hof-panel');
        if (hofCntEl) hofCount = parseInt(hofCntEl.textContent,10) || 0;
        else if (hofPanel) hofCount = (hofPanel.style.display !== 'none') ? 1 : 0;
      }
    }catch(e){}
    return { level: level||1, points: points||0, unlocked: unlocked||0, hofCount: hofCount||0 };
  }

  function _grndIsUnlocked(stats){
    stats = stats || _grndGetStats();
    return stats.level >= 100 || stats.hofCount > 0;
  }

  /* ────────────────────────────────────────────────────────────────
     Stable fake identity
     Generated once, persisted — every visit sees the same rank/pts/total.
       rank  : 7500–8999  (user's position in the global fake board)
       total : rank + 2k–7k  (total "players")
       pts   : 3200–6799  (fake 4-digit score shown on the board)
     ──────────────────────────────────────────────────────────────── */
  function _grndStableFakeData(){
    var key = 'grnd_ldb_fake_data';
    var stored = null;
    try{ stored = JSON.parse(localStorage.getItem(key) || 'null'); }catch(e){}
    if (stored && stored.rank && stored.total && stored.pts) return stored;
    var rank  = 7500 + Math.floor(Math.random() * 1500);          // 7500–8999
    var total = rank  + 2000 + Math.floor(Math.random() * 5000);  // rank + 2k–7k more
    var pts   = 3200 + Math.floor(Math.random() * 3600);          // 3200–6799
    var result = { rank: rank, total: total, pts: pts };
    try{ localStorage.setItem(key, JSON.stringify(result)); }catch(e){}
    return result;
  }

  /* ────────────────────────────────────────────────────────────────
     Anonymized 4-digit fake player IDs  (e.g. #4521)
     ──────────────────────────────────────────────────────────────── */
  function _grndFakeId(){
    return '#' + String(Math.floor(1000 + Math.random()*9000));
  }

  /* ────────────────────────────────────────────────────────────────
     Menu visibility — show/hide REFRESH + FULL VIEW based on unlock
     ──────────────────────────────────────────────────────────────── */
  function _grndUpdateMenuVisibility(){
    var unlocked = _grndIsUnlocked();
    var btnRow   = document.getElementById('ldb-menu-btn-row');
    var lockedMsg = document.getElementById('ldb-menu-locked-msg');
    if (btnRow)    btnRow.style.display    = unlocked ? '' : 'none';
    if (lockedMsg) lockedMsg.style.display = unlocked ? 'none' : '';
  }
  window.grndUpdateMenuVisibility = _grndUpdateMenuVisibility;

  /* ────────────────────────────────────────────────────────────────
     Menu score + rank neighbor table
     Shows rank positions (#rank-1 / YOU / #rank+1) with fake 4-digit pts.
     ──────────────────────────────────────────────────────────────── */
  function grndMenuRefresh(){
    var stats = _grndGetStats();
    _grndUpdateMenuVisibility();

    var scoreEl = document.getElementById('ldb-menu-score');
    if (scoreEl) scoreEl.textContent = stats.points.toLocaleString();

    var wrap = document.getElementById('ldb-menu-table-wrap');
    if (!wrap) return;

    if (!_grndIsUnlocked(stats)){ wrap.innerHTML = ''; return; }

    var fd = _grndStableFakeData();

    // Rank: tight neighbors (±1 spot)
    var myRank     = fd.rank;
    var aheadRank  = myRank - 1;
    var behindRank = myRank + 1;

    // Pts: stable fake 4-digit base ± small spread on each refresh
    var spread    = Math.max(6, Math.round(fd.pts * 0.008));
    var myPts     = fd.pts;
    var aheadPts  = myPts + Math.floor(Math.random() * spread) + Math.ceil(spread * 0.6);
    var behindPts = Math.max(1000, myPts - Math.floor(Math.random() * spread) - Math.ceil(spread * 0.6));

    wrap.innerHTML =
      '<div class="ldb-neighbors">' +
        '<div class="ldb-board-row"><span class="ldb-board-id">#' + aheadRank  + '</span><span class="ldb-board-pts">' + aheadPts.toLocaleString()  + ' pts</span></div>' +
        '<div class="ldb-board-row ldb-board-row-you"><span class="ldb-board-id">YOU</span><span class="ldb-board-pts">' + myPts.toLocaleString() + ' pts</span></div>' +
        '<div class="ldb-board-row"><span class="ldb-board-id">#' + behindRank + '</span><span class="ldb-board-pts">' + behindPts.toLocaleString() + ' pts</span></div>' +
      '</div>';
  }
  window.grndMenuRefresh = grndMenuRefresh;

  /* FULL VIEW → fakeboard sequence. Image+audio only via "Proceed anyway". */
  function grndOpenFullView(){
    if (typeof window.goTo === 'function') window.goTo('leaderboard');
    if (typeof window.closeMenuPanel === 'function') window.closeMenuPanel();
    // Wait one tick for grndOnEnterLeaderboard (fired by view change) to reset to manifesto,
    // then immediately launch the fakeboard sequence.
    setTimeout(function(){
      var stats = _grndGetStats();
      _grndRunFakeboardSequence(stats, false);
    }, 60);
  }
  window.grndOpenFullView = grndOpenFullView;

  /* ────────────────────────────────────────────────────────────────
     Full fake board — grows with milestones, pts in same 4-digit range
     ──────────────────────────────────────────────────────────────── */
  function _grndLoadBoard(){
    try{ return JSON.parse(localStorage.getItem('grnd_ldb_board') || 'null') || []; }catch(e){ return []; }
  }
  function _grndSaveBoard(board){
    try{ localStorage.setItem('grnd_ldb_board', JSON.stringify(board)); }catch(e){}
  }

  function _grndSeedBoard(){
    var fd = _grndStableFakeData();
    var board = [];
    for (var i=0; i<9; i++){
      var delta = Math.round((Math.random()-0.5) * 260);  // ±130 pts
      board.push({ id: _grndFakeId(), pts: Math.max(1000, fd.pts + delta) });
    }
    _grndSaveBoard(board);
    return board;
  }

  function _grndCheckMilestones(){
    var stats = _grndGetStats();
    // v2 migration: wipe any board seeded with real pts (old scheme)
    var ver = null;
    try{ ver = localStorage.getItem('grnd_ldb_version'); }catch(e){}
    if (ver !== '2'){
      try{ localStorage.removeItem('grnd_ldb_board'); localStorage.setItem('grnd_ldb_version', '2'); }catch(e){}
    }

    var lastUnlocked = parseInt(localStorage.getItem('grnd_ldb_milestone_unlocked') || '0', 10) || 0;
    var lastPoints   = parseInt(localStorage.getItem('grnd_ldb_milestone_points')   || '0', 10) || 0;
    var board = _grndLoadBoard();
    var grew  = false;
    var fd    = _grndStableFakeData();

    if (!board.length){
      board = _grndSeedBoard();
      lastUnlocked = stats.unlocked;
      lastPoints   = stats.points;
      grew = true;
    }
    if (stats.unlocked - lastUnlocked >= 2){
      board.push({ id: _grndFakeId(), pts: Math.max(1000, fd.pts + Math.round((Math.random()-0.3)*180) + 30) });
      lastUnlocked = stats.unlocked;
      grew = true;
    }
    if (stats.points - lastPoints >= 250){
      board.push({ id: _grndFakeId(), pts: Math.max(1000, fd.pts + Math.round((Math.random()-0.3)*180) + 30) });
      lastPoints = stats.points;
      grew = true;
    }
    if (grew){
      _grndSaveBoard(board);
      try{
        localStorage.setItem('grnd_ldb_milestone_unlocked', String(lastUnlocked));
        localStorage.setItem('grnd_ldb_milestone_points',   String(lastPoints));
      }catch(e){}
    }
    return board;
  }

  /* Renders board. Rank column uses global positions centered on fd.rank
     (e.g., if user is #8247, rows around them show #8244, #8245 … #8252). */
  function _grndRenderBoard(board){
    var list = document.getElementById('ldb-board-list');
    if (!list) return;

    var fd   = _grndStableFakeData();
    var rows = board.map(function(e){ return { id: e.id, pts: e.pts, you: false }; });
    rows.push({ id: 'YOU', pts: fd.pts, you: true });
    rows.sort(function(a,b){ return b.pts - a.pts; });

    var youIdx = 0;
    for (var i=0; i<rows.length; i++){ if (rows[i].you){ youIdx=i; break; } }

    list.innerHTML = '';
    rows.forEach(function(r, i){
      var globalRank = Math.max(1, fd.rank - youIdx + i);
      var row = document.createElement('div');
      row.className = 'ldb-board-row' + (r.you ? ' ldb-board-row-you' : '');
      row.style.animationDelay = (i*0.05) + 's';
      row.dataset.basePts  = r.pts;
      row.dataset.baseRank = globalRank;
      row.innerHTML =
        '<span class="ldb-board-rank">#' + globalRank + '</span>' +
        '<span class="ldb-board-id">' + r.id + '</span>' +
        '<span class="ldb-board-pts">' + r.pts.toLocaleString() + ' pts</span>';
      list.appendChild(row);
    });
  }

  /* Flickers pts and rank on non-YOU rows.
     Rank stays within ±30 of its base global position. */
  function _grndStartBoardFlicker(intervalMs){
    var rows = document.querySelectorAll('#ldb-board-list .ldb-board-row:not(.ldb-board-row-you)');
    return setInterval(function(){
      rows.forEach(function(row){
        var basePts  = parseInt(row.dataset.basePts,  10) || 1000;
        var baseRank = parseInt(row.dataset.baseRank, 10) || 1;
        var newPts   = Math.max(1000, basePts  + Math.round((Math.random()-0.5) * 80));
        var newRank  = Math.max(1,    baseRank + Math.round((Math.random()-0.5) * 60));
        var ptsEl  = row.querySelector('.ldb-board-pts');
        var rankEl = row.querySelector('.ldb-board-rank');
        if (ptsEl)  ptsEl.textContent  = newPts.toLocaleString() + ' pts';
        if (rankEl) rankEl.textContent = '#' + newRank;
      });
    }, intervalMs);
  }

  /* Reveal text: shows REAL pts ("Real — you earned every one") and the large
     fake rank/total from fd (e.g., "Ranked 8,247/12,500"). */
  function _grndPopulateReveal(stats){
    var p1 = document.getElementById('ldb-reveal-p1');
    if (!p1) return;
    var fd = _grndStableFakeData();
    p1.innerHTML =
      'You: ' + stats.points.toLocaleString() + ' pts. Real — you earned every one of those. ' +
      'Ranked <span id="ldb-reveal-rank" data-rank="' + fd.rank + '" data-total="' + fd.total + '">' +
      fd.rank.toLocaleString() + '</span>/' +
      '<span id="ldb-reveal-total">' + fd.total.toLocaleString() + '</span>' +
      ', except you were never actually being ranked: the rest of that board ' +
      'got built around your number the second you tapped SEE RANK ANYWAY.';
  }

  /* Rank and total flicker ±small variance around their base values. */
  function _grndStartRankFlicker(intervalMs){
    var rankEl  = document.getElementById('ldb-reveal-rank');
    var totalEl = document.getElementById('ldb-reveal-total');
    if (!rankEl) return null;
    var baseRank  = parseInt(rankEl.dataset.rank,  10) || 1;
    var baseTotal = parseInt(rankEl.dataset.total, 10) || baseRank + 2000;
    return setInterval(function(){
      var r = Math.max(1,   baseRank  + Math.round((Math.random()-0.5) * 100));
      var t = Math.max(r+1, baseTotal + Math.round((Math.random()-0.5) * 180));
      if (rankEl)  rankEl.textContent  = r.toLocaleString();
      if (totalEl) totalEl.textContent = t.toLocaleString();
    }, intervalMs);
  }

  /* ────────────────────────────────────────────────────────────────
     State machine
     ──────────────────────────────────────────────────────────────── */
  function _grndShowOnly(id){
    ['ldb-manifesto','ldb-fakeboard','ldb-postreveal','ldb-ambient'].forEach(function(s){
      var el = document.getElementById(s);
      if (el) el.style.display = (s === id) ? '' : 'none';
    });
  }

  var _grndActiveFlickerTimer     = null;
  var _grndActiveRankFlickerTimer = null;

  function grndOnEnterLeaderboard(){
    if (_grndActiveFlickerTimer){     clearInterval(_grndActiveFlickerTimer);     _grndActiveFlickerTimer     = null; }
    if (_grndActiveRankFlickerTimer){ clearInterval(_grndActiveRankFlickerTimer); _grndActiveRankFlickerTimer = null; }
    _grndShowOnly('ldb-manifesto');
    var reveal = document.getElementById('ldb-reveal');
    if (reveal) reveal.style.display = 'none';
    var boardList = document.getElementById('ldb-board-list');
    if (boardList) boardList.innerHTML = '';

    var unlocked   = _grndIsUnlocked();
    var lockedEl   = document.getElementById('ldb-manifesto-locked');
    var unlockedEl = document.getElementById('ldb-manifesto-unlocked');
    if (lockedEl)   lockedEl.style.display   = unlocked ? 'none' : '';
    if (unlockedEl) unlockedEl.style.display = unlocked ? '' : 'none';

    _grndCheckMilestones();
  }
  window.grndOnEnterLeaderboard = grndOnEnterLeaderboard;

  function grndSeeRankAnyway(){
    var stats = _grndGetStats();
    if (!_grndIsUnlocked(stats)) return;
    var revealed = false;
    try{ revealed = localStorage.getItem('grnd_leaderboard_revealed') === '1'; }catch(e){}
    _grndRunFakeboardSequence(stats, !revealed);
  }
  window.grndSeeRankAnyway = grndSeeRankAnyway;

  /* Fakeboard flicker → pulse YOU row → reveal text + CONTINUE button */
  function _grndRunFakeboardSequence(stats, setRevealedFlag){
    var board = _grndCheckMilestones();
    _grndShowOnly('ldb-fakeboard');

    var reveal = document.getElementById('ldb-reveal');
    if (reveal) reveal.style.display = 'none';
    var youRow = document.querySelector('.ldb-board-row-you');
    if (youRow) youRow.classList.remove('ldb-board-row-you-pulse');

    _grndRenderBoard(board);
    var rowCount = document.querySelectorAll('#ldb-board-list .ldb-board-row').length;

    var settleDelay     = Math.max(400, (rowCount-1)*50 + 400);
    var flickerInterval = 300;
    var flickerDuration = 1800;
    var pulseDuration   = 900;
    var pauseAfterPulse = 250;

    var flickerTimer = null;
    setTimeout(function(){
      flickerTimer = _grndActiveFlickerTimer = _grndStartBoardFlicker(flickerInterval);
    }, settleDelay);

    setTimeout(function(){
      if (flickerTimer) clearInterval(flickerTimer);
      _grndActiveFlickerTimer = null;
      var yr = document.querySelector('.ldb-board-row-you');
      if (yr) yr.classList.add('ldb-board-row-you-pulse');
    }, settleDelay + flickerDuration);

    var totalDelay = settleDelay + flickerDuration + pulseDuration + pauseAfterPulse;
    setTimeout(function(){
      _grndPopulateReveal(stats);
      if (reveal) reveal.style.display = '';
      _grndActiveRankFlickerTimer = _grndStartRankFlicker(flickerInterval);
      if (setRevealedFlag){
        try{ localStorage.setItem('grnd_leaderboard_revealed', '1'); }catch(e){}
      }
    }, totalDelay);
  }

  /* CONTINUE → motivational post-reveal page, "Proceed anyway" state */
  function grndContinueToPostreveal(){
    if (_grndActiveRankFlickerTimer){ clearInterval(_grndActiveRankFlickerTimer); _grndActiveRankFlickerTimer = null; }
    _grndShowOnly('ldb-postreveal');
    var proceedBtn = document.getElementById('ldb-btn-proceed');
    var revisitBtn = document.getElementById('ldb-btn-revisit');
    if (proceedBtn) proceedBtn.style.display = '';
    if (revisitBtn) revisitBtn.style.display = 'none';
  }
  window.grndContinueToPostreveal = grndContinueToPostreveal;

  /* "Proceed anyway" → image + audio */
  function grndProceedToAmbient(){
    grndShowAmbient();
  }
  window.grndProceedToAmbient = grndProceedToAmbient;

  /* REVISIT → replay fakeboard sequence */
  function grndRevisit(){
    var stats = _grndGetStats();
    _grndRunFakeboardSequence(stats, false);
  }
  window.grndRevisit = grndRevisit;

  /* ────────────────────────────────────────────────────────────────
     Ambient stillness screen — always reached via "Proceed anyway"
     ──────────────────────────────────────────────────────────────── */
  var _grndFadeRaf = null;

  function grndShowAmbient(){
    _grndShowOnly('ldb-ambient');
    var audio   = document.getElementById('ldb-ambient-audio');
    var muteBtn = document.getElementById('ldb-ambient-mute');
    if (!audio) return;
    try{
      audio.muted = false;
      audio.volume = 0;
      if (muteBtn) muteBtn.textContent = '🔊';
      var playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function'){
        playPromise.catch(function(){});
      }
      var target = 0.55, start = performance.now(), dur = 1500;
      if (_grndFadeRaf) cancelAnimationFrame(_grndFadeRaf);
      (function step(now){
        var t = Math.min(1, (now - start) / dur);
        audio.volume = target * t;
        if (t < 1) _grndFadeRaf = requestAnimationFrame(step);
      })(start);
    }catch(e){}
  }
  window.grndShowAmbient = grndShowAmbient;

  /* Closing ambient always returns to post-reveal, switching to REVISIT state */
  function grndCloseAmbient(){
    var audio = document.getElementById('ldb-ambient-audio');
    if (_grndFadeRaf){ cancelAnimationFrame(_grndFadeRaf); _grndFadeRaf = null; }
    if (audio){ try{ audio.pause(); }catch(e){} }
    _grndShowOnly('ldb-postreveal');
    var proceedBtn = document.getElementById('ldb-btn-proceed');
    var revisitBtn = document.getElementById('ldb-btn-revisit');
    if (proceedBtn) proceedBtn.style.display = 'none';
    if (revisitBtn) revisitBtn.style.display = '';
  }
  window.grndCloseAmbient = grndCloseAmbient;

  function grndToggleMute(){
    var audio = document.getElementById('ldb-ambient-audio');
    var btn   = document.getElementById('ldb-ambient-mute');
    if (!audio) return;
    audio.muted = !audio.muted;
    if (btn) btn.textContent = audio.muted ? '🔇' : '🔊';
  }
  window.grndToggleMute = grndToggleMute;

  /* ────────────────────────────────────────────────────────────────
     Hooks
     ──────────────────────────────────────────────────────────────── */
  (function(){
    var prev = (typeof window.onViewChanged === 'function') ? window.onViewChanged : null;
    window.onViewChanged = function(v, fromView){
      if (prev) prev(v, fromView);
      if (v === 'leaderboard') grndOnEnterLeaderboard();
    };
  })();

  (function(){
    var prevOpen = (typeof window.openMenuPanel === 'function') ? window.openMenuPanel : null;
    window.openMenuPanel = function(){
      if (prevOpen) prevOpen.apply(this, arguments);
      _grndUpdateMenuVisibility();
      var stats   = _grndGetStats();
      var scoreEl = document.getElementById('ldb-menu-score');
      if (scoreEl) scoreEl.textContent = stats.points.toLocaleString();
    };
  })();

  (function(){
    if (typeof window.onProgressSaved === 'function'){
      window.onProgressSaved(function(){
        _grndCheckMilestones();
        _grndUpdateMenuVisibility();
      });
    }
  })();

  /* ────────────────────────────────────────────────────────────────
     Dev reset
     ──────────────────────────────────────────────────────────────── */
  window._grndDebugResetLeaderboard = function(){
    ['grnd_leaderboard_revealed','grnd_ldb_board','grnd_ldb_milestone_unlocked',
     'grnd_ldb_milestone_points','grnd_ldb_fake_data','grnd_ldb_version'
    ].forEach(function(k){ try{ localStorage.removeItem(k); }catch(e){} });
    console.info('[ranking.js] leaderboard state reset — reload to regenerate fake identity.');
  };

})();
/* └─ @end: js/ranking.js ──────────────────────────────────────────── */

/* ══ GRND CUSTOM PERSONALISATION ══════════════════════════════════════
   Handles: custom alarm sound (pick · trim · test · reset)
            custom motivational quote
            custom loader / background image (stubs — separate impl)

   IDB store: 'grnd_custom'  →  objectStore 'kv'
   Keys used: 'alarm_blob'
   localStorage keys: 'grnd_custom_quote'
══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── IDB helpers ──────────────────────────────────────────────── */
  const DB = 'grnd_custom', STORE = 'kv';

  function _openDb(cb) {
    var req;
    try { req = indexedDB.open(DB, 1); } catch (e) { cb(e); return; }
    req.onupgradeneeded = function (e) {
      try { e.target.result.createObjectStore(STORE); } catch (_) {}
    };
    req.onsuccess = function () { cb(null, req.result); };
    req.onerror  = function () { cb(req.error); };
  }
  function _idbSet(key, value, cb) {
    _openDb(function (err, db) {
      if (err) { if (cb) cb(err); return; }
      var tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(value, key);
      tx.oncomplete = function () { db.close(); if (cb) cb(null); };
      tx.onerror    = function () { db.close(); if (cb) cb(tx.error); };
    });
  }
  function _idbGet(key, cb) {
    _openDb(function (err, db) {
      if (err) { cb(err); return; }
      var tx  = db.transaction(STORE, 'readonly');
      var req = tx.objectStore(STORE).get(key);
      req.onsuccess = function () { db.close(); cb(null, req.result); };
      req.onerror   = function () { db.close(); cb(req.error); };
    });
  }
  function _idbDel(key, cb) {
    _openDb(function (err, db) {
      if (err) { if (cb) cb(err); return; }
      var tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(key);
      tx.oncomplete = function () { db.close(); if (cb) cb(null); };
      tx.onerror    = function () { db.close(); if (cb) cb(tx.error); };
    });
  }

  /* ── Cached alarm blob URL ────────────────────────────────────── */
  var _alarmBlobUrl = null;

  window.getCustomAlarmURL = function () { return _alarmBlobUrl || null; };

  function _loadAlarmUrl(cb) {
    _idbGet('alarm_blob', function (err, blob) {
      if (!err && blob instanceof Blob) {
        if (_alarmBlobUrl) try { URL.revokeObjectURL(_alarmBlobUrl); } catch (_) {}
        _alarmBlobUrl = URL.createObjectURL(blob);
      }
      if (cb) cb(_alarmBlobUrl);
    });
  }

  /* ── Lock check ───────────────────────────────────────────────── */
  function _isAlarmUnlocked() {
    return typeof window.getCompletedPremadeProgramCount === 'function'
      ? window.getCompletedPremadeProgramCount() >= 1
      : false;
  }

  function _updateAlarmRow() {
    var locked   = !_isAlarmUnlocked();
    var lockEl   = document.getElementById('custAlarmLock');
    var ctrlsEl  = document.getElementById('custAlarmCtrls');
    if (!lockEl || !ctrlsEl) return;
    lockEl.style.display  = locked ? '' : 'none';
    ctrlsEl.style.display = locked ? 'none' : '';
    if (!locked) {
      var hasAlarm = !!_alarmBlobUrl;
      var testBtn  = document.getElementById('custAlarmTest');
      var resetBtn = document.getElementById('custAlarmReset');
      if (testBtn)  testBtn.style.display  = hasAlarm ? '' : 'none';
      if (resetBtn) resetBtn.style.display = hasAlarm ? '' : 'none';
    }
  }

  /* ── Audio → WAV blob encoder ─────────────────────────────────── */
  function _bufferToWav(buffer) {
    var numCh  = buffer.numberOfChannels;
    var sr     = buffer.sampleRate;
    var len    = buffer.length;
    var ab     = new ArrayBuffer(44 + len * numCh * 2);
    var dv     = new DataView(ab);
    function str(off, s) { for (var i = 0; i < s.length; i++) dv.setUint8(off + i, s.charCodeAt(i)); }
    str(0, 'RIFF'); dv.setUint32(4,  36 + len * numCh * 2, true);
    str(8, 'WAVE'); str(12, 'fmt ');
    dv.setUint32(16, 16,          true);
    dv.setUint16(20, 1,           true);   // PCM
    dv.setUint16(22, numCh,       true);
    dv.setUint32(24, sr,          true);
    dv.setUint32(28, sr * numCh * 2, true);
    dv.setUint16(32, numCh * 2,   true);
    dv.setUint16(34, 16,          true);
    str(36, 'data'); dv.setUint32(40, len * numCh * 2, true);
    var off = 44;
    for (var i = 0; i < len; i++) {
      for (var ch = 0; ch < numCh; ch++) {
        var s = Math.max(-1, Math.min(1, buffer.getChannelData(ch)[i]));
        dv.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        off += 2;
      }
    }
    return new Blob([ab], { type: 'audio/wav' });
  }

  /* ── Trimmer state ────────────────────────────────────────────── */
  var _trimBuf = null, _trimStart = 0, _trimPreview = null;

  function _stopPreview() {
    if (_trimPreview) {
      try { _trimPreview.src.stop(); } catch (_) {}
      try { _trimPreview.ctx.close(); } catch (_) {}
      _trimPreview = null;
    }
  }

  function _openTrimmer(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var actx = new (window.AudioContext || window.webkitAudioContext)();
      actx.decodeAudioData(e.target.result.slice(0), function (buf) {
        _trimBuf   = buf;
        _trimStart = 0;
        actx.close();
        _showTrimUI(buf.duration);
      }, function () {
        actx.close();
        alert('Could not decode that audio file. Try a different format (mp3, wav, m4a).');
      });
    };
    reader.readAsArrayBuffer(file);
  }

  function _showTrimUI(totalDur) {
    var old = document.getElementById('grndAlarmTrimOverlay');
    if (old) old.remove();

    var maxStart = Math.max(0, totalDur - 3);
    _trimStart   = 0;
    var CLIP     = Math.min(3, totalDur);

    var ov = document.createElement('div');
    ov.className = 'modal-overlay open';
    ov.id = 'grndAlarmTrimOverlay';
    ov.style.cssText = 'z-index:1200';
    ov.innerHTML = [
      '<div class="muscle-modal alarm-modal" style="max-width:340px">',
        '<div class="modal-handle"></div>',
        '<div class="modal-header">',
          '<div>',
            '<div class="modal-label">CUSTOM ALARM</div>',
            '<div class="modal-name">Select 3-second clip</div>',
          '</div>',
          '<button class="modal-close" id="trimCloseBtn">✕</button>',
        '</div>',
        '<div class="modal-divider"></div>',
        '<div class="modal-body alarm-body" style="gap:14px">',
          '<div style="font-size:0.7rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em">Clip start position</div>',
          maxStart > 0
            ? '<input type="range" id="trimSlider" min="0" max="' + maxStart.toFixed(2) + '" step="0.05" value="0" style="width:100%;accent-color:var(--accent)">'
            : '<div style="font-size:0.75rem;color:var(--text3)">Audio is ≤ 3 s — entire file will be used.</div>',
          '<div style="display:flex;justify-content:space-between;font-size:0.72rem;color:var(--text3)">',
            '<span id="trimStartLbl">0.0 s</span>',
            '<span id="trimEndLbl">' + CLIP.toFixed(1) + ' s</span>',
          '</div>',
          '<div style="font-size:0.72rem;color:var(--text3)">Total file: ' + totalDur.toFixed(1) + ' s</div>',
          '<button class="alarm-test-btn" id="trimPreviewBtn" style="margin-top:4px">▶ Preview 3 s</button>',
          '<button class="alarm-set-btn"  id="trimSaveBtn">SAVE CLIP</button>',
        '</div>',
      '</div>'
    ].join('');
    document.body.appendChild(ov);

    var slider   = document.getElementById('trimSlider');
    var startLbl = document.getElementById('trimStartLbl');
    var endLbl   = document.getElementById('trimEndLbl');

    if (slider) {
      slider.oninput = function () {
        _trimStart = parseFloat(slider.value) || 0;
        startLbl.textContent = _trimStart.toFixed(1) + ' s';
        endLbl.textContent   = Math.min(totalDur, _trimStart + 3).toFixed(1) + ' s';
      };
    }

    document.getElementById('trimCloseBtn').onclick = function () {
      _stopPreview(); ov.remove();
    };
    document.getElementById('trimPreviewBtn').onclick = function () {
      _stopPreview();
      if (!_trimBuf) return;
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var src = ctx.createBufferSource();
      src.buffer = _trimBuf;
      src.connect(ctx.destination);
      src.start(0, _trimStart, Math.min(3, _trimBuf.duration - _trimStart));
      _trimPreview = { src: src, ctx: ctx };
      src.onended = function () { try { ctx.close(); } catch (_) {} _trimPreview = null; };
    };
    document.getElementById('trimSaveBtn').onclick = function () {
      if (!_trimBuf) return;
      _stopPreview();
      var btn = document.getElementById('trimSaveBtn');
      if (btn) { btn.textContent = 'Processing…'; btn.disabled = true; }

      var sr       = _trimBuf.sampleRate;
      var numCh    = _trimBuf.numberOfChannels;
      var clipSecs = Math.min(3, _trimBuf.duration - _trimStart);
      var frames   = Math.ceil(sr * clipSecs);

      var offCtx = new OfflineAudioContext(numCh, frames, sr);
      var src    = offCtx.createBufferSource();
      src.buffer = _trimBuf;
      src.connect(offCtx.destination);
      src.start(0, _trimStart, clipSecs);

      offCtx.startRendering().then(function (rendered) {
        var blob = _bufferToWav(rendered);
        _idbSet('alarm_blob', blob, function (err) {
          if (err) {
            if (btn) { btn.textContent = 'SAVE CLIP'; btn.disabled = false; }
            alert('Could not save alarm sound. Please try again.');
            return;
          }
          if (_alarmBlobUrl) try { URL.revokeObjectURL(_alarmBlobUrl); } catch (_) {}
          _alarmBlobUrl = URL.createObjectURL(blob);
          ov.remove();
          _updateAlarmRow();
          var t = document.getElementById('custAlarmTest');
          if (t) { var o = t.textContent; t.textContent = '✓ SAVED'; setTimeout(function () { t.textContent = o; }, 1800); }
        });
      }).catch(function () {
        if (btn) { btn.textContent = 'SAVE CLIP'; btn.disabled = false; }
        alert('Processing failed. Try a different audio file.');
      });
    };
  }

  /* ── Public alarm API ─────────────────────────────────────────── */
  function pickAlarm() {
    if (!_isAlarmUnlocked()) return;
    var inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'audio/*';
    inp.onchange = function () {
      if (inp.files && inp.files[0]) _openTrimmer(inp.files[0]);
    };
    inp.click();
  }

  function testAlarm() {
    var url = _alarmBlobUrl;
    if (!url) return;
    var a = new Audio(url);
    a.volume = 0.85;
    var p = a.play();
    if (p && typeof p.catch === 'function') p.catch(function () {});
  }

  function resetAlarm() {
    _idbDel('alarm_blob', function () {
      if (_alarmBlobUrl) { try { URL.revokeObjectURL(_alarmBlobUrl); } catch (_) {} _alarmBlobUrl = null; }
      _updateAlarmRow();
    });
  }

  /* ── Motivational quote ───────────────────────────────────────── */
  var QUOTE_KEY = 'grnd_custom_quote';

  function _updateQuoteCount() {
    var inp = document.getElementById('custQuoteInput');
    var cnt = document.getElementById('custQuoteCount');
    if (inp && cnt) cnt.textContent = inp.value.length;
  }

  function editQuote() {
    var ov = document.getElementById('custQuoteOverlay');
    if (!ov) return;
    var inp = document.getElementById('custQuoteInput');
    if (inp) {
      inp.value = '';
      try { inp.value = localStorage.getItem(QUOTE_KEY) || ''; } catch (_) {}
      _updateQuoteCount();
      inp.oninput = _updateQuoteCount;
    }
    if (ov.parentElement !== document.body) document.body.appendChild(ov);
    ov.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuote() {
    var ov = document.getElementById('custQuoteOverlay');
    if (ov) ov.classList.remove('open');
    document.body.style.overflow = '';
  }

  function quoteOverlayClick(e) {
    if (e && e.target === document.getElementById('custQuoteOverlay')) closeQuote();
  }

  function saveQuote() {
    var inp = document.getElementById('custQuoteInput');
    if (!inp) return;
    var val = inp.value.trim();
    try { val ? localStorage.setItem(QUOTE_KEY, val) : localStorage.removeItem(QUOTE_KEY); } catch (_) {}
    var rst = document.getElementById('custQuoteReset');
    if (rst) rst.style.display = val ? '' : 'none';
    closeQuote();
  }

  function resetQuote() {
    try { localStorage.removeItem(QUOTE_KEY); } catch (_) {}
    var rst = document.getElementById('custQuoteReset');
    if (rst) rst.style.display = 'none';
  }

  /* ── Loader / Background image pickers ───────────────────────────
     Both store a resized/compressed data URL in localStorage (not
     IndexedDB like the alarm blob) because the loader has to read its
     image back SYNCHRONOUSLY at the very top of <body>, before any
     async IndexedDB open could resolve in time for the first frame —
     see the inline script right after #grnd-loader in index.html. */
  function _resizeImageFile(file, maxDim, quality, cb) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = new Image();
      img.onload = function () {
        var scale = Math.min(1, maxDim / Math.max(img.naturalWidth, img.naturalHeight));
        var w = Math.max(1, Math.round(img.naturalWidth * scale));
        var h = Math.max(1, Math.round(img.naturalHeight * scale));
        var cv = document.createElement('canvas');
        cv.width = w; cv.height = h;
        cv.getContext('2d').drawImage(img, 0, 0, w, h);
        cb(cv.toDataURL('image/jpeg', quality));
      };
      img.onerror = function () { alert('Could not load that image.'); };
      img.src = e.target.result;
    };
    reader.onerror = function () { alert('Could not read that file.'); };
    reader.readAsDataURL(file);
  }

  function _updateLoaderRow() {
    var rst = document.getElementById('custLoaderReset');
    if (rst) { var has = false; try { has = !!localStorage.getItem('grnd_custom_loader'); } catch (_) {} rst.style.display = has ? '' : 'none'; }
  }

  function pickLoader() {
    var inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'image/*';
    inp.onchange = function () {
      if (!inp.files || !inp.files[0]) return;
      _resizeImageFile(inp.files[0], 900, 0.82, function (dataUrl) {
        try { localStorage.setItem('grnd_custom_loader', dataUrl); } catch (e) { alert('That image is too large to save.'); return; }
        _updateLoaderRow();
      });
    };
    inp.click();
  }
  function resetLoader() {
    try { localStorage.removeItem('grnd_custom_loader'); } catch (_) {}
    _updateLoaderRow();
  }

  function _applyCustomBg() {
    var url = null;
    try { url = localStorage.getItem('grnd_custom_bg'); } catch (_) {}
    var el = document.getElementById('grnd-custom-bg');
    if (url) {
      if (el) el.style.backgroundImage = "url('" + url + "')";
      document.documentElement.classList.add('grnd-has-custombg');
    } else {
      document.documentElement.classList.remove('grnd-has-custombg');
    }
  }
  function _updateBgRow() {
    var rst = document.getElementById('custBgReset');
    if (rst) { var has = false; try { has = !!localStorage.getItem('grnd_custom_bg'); } catch (_) {} rst.style.display = has ? '' : 'none'; }
  }

  function pickBg() {
    var inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'image/*';
    inp.onchange = function () {
      if (!inp.files || !inp.files[0]) return;
      _resizeImageFile(inp.files[0], 1600, 0.8, function (dataUrl) {
        try { localStorage.setItem('grnd_custom_bg', dataUrl); } catch (e) { alert('That image is too large to save.'); return; }
        _applyCustomBg();
        _updateBgRow();
      });
    };
    inp.click();
  }
  function resetBg() {
    try { localStorage.removeItem('grnd_custom_bg'); } catch (_) {}
    _applyCustomBg();
    _updateBgRow();
  }

  /* ── Init ─────────────────────────────────────────────────────── */
  _loadAlarmUrl(function () {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _updateAlarmRow);
    } else {
      _updateAlarmRow();
    }
    // Re-check lock whenever a program might be completed
    if (typeof window.onProgressSaved === 'function') {
      window.onProgressSaved(function () { _updateAlarmRow(); });
    }
  });
  _applyCustomBg();
  _updateLoaderRow();
  _updateBgRow();

  /* ── Expose ───────────────────────────────────────────────────── */
  window.GRNDCustom = {
    pickAlarm: pickAlarm, testAlarm: testAlarm, resetAlarm: resetAlarm,
    editQuote: editQuote, closeQuote: closeQuote,
    quoteOverlayClick: quoteOverlayClick, saveQuote: saveQuote, resetQuote: resetQuote,
    pickLoader: pickLoader, resetLoader: resetLoader,
    pickBg: pickBg, resetBg: resetBg,
    refreshAlarmRow: _updateAlarmRow,
  };

})();
/* └─ @end: GRNDCustom ─────────────────────────────────────────────── */
