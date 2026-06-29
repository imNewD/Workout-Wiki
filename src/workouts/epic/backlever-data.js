/* ─────────────────────────────────────────────────────────────────────────
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
 * ───────────────────────────────────────────────────────────────────────── */

/* cloneExercise is defined in data-registry.js (loaded before this file) */

const _blTuck = {
  id: 11,
  name: "Tuck BL | (Parallettes)",
  alt: "Tuck back lever on parallettes · back lever tuck parallettes",
  muscles: [
    {n:"Biceps", p:true},
    {n:"Shoulders", p:true},
    {n:"Core", p:true},
    {n:"Lats", p:false}
  ],
  tags: ["back", "shoulders", "core", "parallettes"],
  diff: 6,
  str: {suit:true, eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true, eff:3},
  risk: 2,
  joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
  technique: 4,
  mobility: 2,
  strength: 4,
  kcalPerRep: [1.5, 2.5],
  desc: "A straight-arm tuck back lever on parallettes with the knees drawn to the chest and the body held inverted and horizontal. The neutral grip removes pronation stress from the wrists, making this the recommended entry point for back lever training on parallettes. The shortened lever makes the shoulder extension demand manageable while still requiring genuine posterior chain and core engagement.",
  cues: "Press the parallettes firmly downward and keep the arms locked straight. The neutral grip lets you focus entirely on shoulder and core control without wrist interference. Hold the knees close to the chest and keep the hips level. Build 10-second holds before opening the tuck.",
  equipment: "Parallettes",
  position: "Inverted",
  youtube: "LINK_TODO"
};

/* ── PUBLIC BASE ARRAY ────────────────────────────────────────
   Consumed by isometric-data.js. backlever-data.js must load first.
   NOTE: Only Tuck BL kept — all other base entries removed pending rework.
──────────────────────────────────────────────────────────────── */
const backleverBaseStatics = [_blTuck];

/* ── ID SET (used by index.html for filtering) ───────────────── */
const backleverIsoIds = new Set([11]);

/* ── COMPLETE BACK LEVER LIBRARY ──────────────────────────────── */
const backlevers = (() => {
  const entries = [...backleverBaseStatics];

  const tuck = _blTuck;

  /* ── BAR VARIANT ─────────────────────────────────────────── */
  entries.push(cloneExercise(tuck, {
    id: 2001,
    name: 'Tuck BL | (Bar)',
    alt: 'Tuck back lever hold on pull-up bar',
    tags: ['shoulders', 'chest', 'core', 'bar'],
    diff: 6,
    strength: 4, risk: 2, technique: 4, mobility: 2,
    equipment: 'Pull-up bar',
    position: 'Inverted',
    joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
    desc: 'A straight-arm tuck back lever on a pull-up bar. The bar provides a stable grip while the body is held inverted and horizontal, demanding active shoulder extension strength, bicep tendon integrity, and core tension in the tucked position. This is the foundation back lever shape — spend significant time here before extending the legs.',
    cues: 'Keep the arms fully extended and the shoulders actively working in extension. Hold the knees close to the chest and keep the hips level so the body stays parallel to the floor. The chest should face down and the back should face up.',
  }));

  /* ── RINGS VARIANT ───────────────────────────────────────── */
  entries.push(cloneExercise(tuck, {
    id: 2003,
    name: 'Tuck BL | (Rings)',
    alt: 'Tuck back lever hold on gymnastic rings',
    tags: ['shoulders', 'chest', 'core', 'rings'],
    diff: 7,
    strength: 4, risk: 3, technique: 4, mobility: 2,
    equipment: 'Gymnastic rings',
    position: 'Inverted',
    joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
    desc: 'A tuck back lever on gymnastic rings. The freedom of the rings dramatically increases the shoulder coordination and stabilisation demands while preserving the horizontal inverted tuck shape. Ring rotation must be actively managed throughout the hold.',
    cues: 'Keep the rings close to the body and prevent them from flaring outward or rotating. Maintain core tension and a solid tuck to control the lever and joint angle. The rings should point forward — not diagonally.',
  }));

  const normalizedEntries = entries.map(exercise => ({ ...exercise }));

  window.backleverStaticWorkouts  = normalizedEntries.filter(ex => ex.position === 'Inverted');
  window.backleverPrepWorkouts    = normalizedEntries.filter(ex => ex.position === 'Hang');
  window.backleverDynamicWorkouts = normalizedEntries.filter(ex => ex.position === 'InvertedDynamic');
  return normalizedEntries;
})();
