/*
 * data-registry.js
 *
 * Loaded FIRST, before any workout data file.
 *
 * Two jobs:
 *   1. Define shared utilities that multiple data files need (cloneExercise).
 *      Having one canonical definition here means no "who loaded last wins"
 *      ambiguity across frontlever-data.js, backlever-data.js, etc.
 *
 *   2. Provide window.GRND.register() so each data file can opt in to the
 *      registry. app-core.js reads window.GRND.data[key] with an || []
 *      fallback, so a missing data file produces an empty library instead
 *      of crashing the whole app.
 */

/* ── Shared utilities ──────────────────────────────────────────────────── */

function cloneExercise(exercise, overrides = {}) {
  return { ...exercise, ...overrides };
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
