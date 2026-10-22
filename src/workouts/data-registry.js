/*
 * data-registry.js
 *
 * Loaded FIRST, before any workout data file.
 *
 * Three jobs:
 *   1. Define shared utilities that multiple data files need (cloneExercise).
 *      Having one canonical definition here means no "who loaded last wins"
 *      ambiguity across frontlever-data.js, backlever-data.js, etc.
 *
 *   2. Provide window.GRND.register() so each data file can opt in to the
 *      registry. app-core.js reads window.GRND.data[key] with an || []
 *      fallback, so a missing data file produces an empty library instead
 *      of crashing the whole app.
 *
 *   3. Hold the one canonical copy of the naming-rule / difficulty-scale /
 *      Hall-of-Fame header that every other data file used to repeat in full
 *      (byte-identical, 28 lines, in ~22 files). Each of those files now
 *      just points back here with a one-line comment.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * NAMING RULE
 * Format: [modifier] [family] | [extra modifier] (equipment)
 *
 * - Modifiers always go before the family name.
 * - Base variation: use "Standard" or "Strict".
 * - Omit equipment if it's the default (floor for push-ups, bar for pull-ups).
 *   Only include it when non-default.
 *
 * ✓ One Arm Push-Up | Fingertips (bar)
 * ✗ Push-Up | One Arm
 *
 * ─────────────────────────────────────────────────────────────────────────
 *
 * DIFFICULTY REFERENCE (scale 1–10)
 * 1. Standard Push-Up     — 3.0
 * 2. Archer Push-Up       — 6.3
 * 3. Tuck Planche         — 6.0
 * 4. Chin-Up              — 3.8
 * 5. Archer Pull-Up       — 6.5
 * 6. Straddle Planche     — 8.5
 *
 * ─────────────────────────────────────────────────────────────────────────
 *
 * HALL OF FAME (HoF)
 * Do not mark any move as HoF unless it is fully achieved.
 * If uncertain, ask before tagging.
 * ─────────────────────────────────────────────────────────────────────────
 */

/* ── Shared utilities ──────────────────────────────────────────────────── */

function cloneExercise(exercise, overrides = {}) {
  // sidequestKey never inherits from the base template — a clone that wants to be
  // a branch must say so explicitly. Silent inheritance here caused real mis-grouping
  // bugs in backlever-data.js and frontlever-data.js (a clone left it unset, so it
  // silently picked up whatever progression-tree parent the shared template had).
  return { ...exercise, sidequestKey: null, ...overrides };
}

/* ── Data registry ─────────────────────────────────────────────────────── */

window.GRND = window.GRND || {};
window.GRND.data = window.GRND.data || {};

/**
 * Register a data-file's primary array (or Set) under a named key.
 * app-core.js reads these via window.GRND.data[key] || [].
 *
 * @param {string} key   - e.g. 'frontlevers', 'isometrics'
 * @param {Array}  data  - the exported array from the data file
 */
window.GRND.register = function(key, data) {
  window.GRND.data[key] = Array.isArray(data) ? data : (data instanceof Set ? data : []);
};
