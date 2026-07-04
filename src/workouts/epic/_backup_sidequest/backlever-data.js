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

// ─── ADVANCED TUCK BL ────────────────────────────────────────────────────────
const _blAdvTuck = {
  id: 2004,
  name: 'Advanced Tuck BL | (Parallettes)',
  alt: 'Advanced tuck back lever on parallettes · flat-back tuck BL',
  muscles: [
    {n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true},
    {n:'Lats', p:false}, {n:'Glutes', p:false}
  ],
  tags: ['back', 'shoulders', 'core', 'parallettes'],
  diff: 6.5,
  str: {suit:true, eff:3}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
  risk: 2,
  joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
  technique: 4, mobility: 2, strength: 4,
  kcalPerRep: [1.8, 2.8],
  desc: 'Advanced tuck back lever on parallettes with the back flat (not rounded) and the knees only slightly bent rather than fully tucked. The flattened back eliminates the leverage advantage of the tucked hips, demanding significantly more shoulder extension and posterior chain engagement than the standard tuck. The bridge between the tuck and the half-lay progression.',
  cues: 'Extend the hips until the back is flat and parallel to the floor — do not let the lower back round upward. The knees remain slightly bent but the hips are in full extension. Hold the shoulders actively pressing down. Build 8-second holds before opening to the half-lay.',
  equipment: 'Parallettes', position: 'Inverted', youtube: 'LINK_TODO'
};

// ─── HALF LAY BL ─────────────────────────────────────────────────────────────
const _blHalfLay = {
  id: 2007,
  name: 'Half Lay BL | (Parallettes)',
  alt: 'Half-lay back lever on parallettes · half-straddle BL',
  muscles: [
    {n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true},
    {n:'Lats', p:false}, {n:'Glutes', p:true}, {n:'Hip Flexors', p:false}
  ],
  tags: ['back', 'shoulders', 'core', 'parallettes'],
  diff: 7.0,
  str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
  risk: 3,
  joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:3, groin:0, knee:0, ankle:0, foot:0},
  technique: 4, mobility: 3, strength: 4,
  kcalPerRep: [2.0, 3.0],
  desc: 'Half-lay (or half-straddle) back lever on parallettes — one leg fully extended while the other remains tucked. This asymmetric lever position is longer than the tuck but shorter than a full straddle, providing an intermediate shoulder loading step. The asymmetry also introduces a mild rotational component that the core must resist.',
  cues: 'Extend one leg fully backward while keeping the opposite knee tucked. Keep the hips level — the extended leg will want to drop. Actively work the shoulder extension and glute engagement on the extended leg side. Alternate legs each set.',
  equipment: 'Parallettes', position: 'Inverted', youtube: 'LINK_TODO'
};

// ─── STRADDLE BL ─────────────────────────────────────────────────────────────
const _blStraddle = {
  id: 2013,
  name: 'Straddle BL | (Parallettes)',
  alt: 'Straddle back lever on parallettes',
  muscles: [
    {n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true},
    {n:'Lats', p:true}, {n:'Glutes', p:true}, {n:'Hip Flexors', p:false}
  ],
  tags: ['back', 'shoulders', 'core', 'parallettes'],
  diff: 8.0,
  str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
  risk: 3,
  joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
  technique: 4, mobility: 4, strength: 5,
  kcalPerRep: [2.3, 3.5],
  desc: 'Straddle back lever on parallettes — both legs fully extended and spread wide in a straddle position, body horizontal and inverted. The straddle reduces the lever arm slightly compared to a closed-leg full back lever, making this the standard intermediate between the tuck and full back lever. Requires significant hip flexor flexibility for a wide straddle and serious shoulder extension strength.',
  cues: 'Spread the legs as wide as possible — the wider the straddle the shorter the lever and the slightly easier the hold. Keep the hips level and the body truly horizontal; any hip drop is immediately visible. Press the parallettes firmly downward and keep the arms locked. Build 5-second holds at a solid straddle before closing the legs.',
  equipment: 'Parallettes', position: 'Inverted', youtube: 'LINK_TODO'
};

// ─── FULL BL ─────────────────────────────────────────────────────────────────
const _blFull = {
  id: 2016,
  name: 'Full BL | (Parallettes)',
  alt: 'Full back lever on parallettes · straight back lever',
  muscles: [
    {n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true},
    {n:'Lats', p:true}, {n:'Glutes', p:true}, {n:'Hip Flexors', p:true}
  ],
  tags: ['back', 'shoulders', 'core', 'parallettes'],
  diff: 9.0,
  str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
  risk: 4,
  joints: {fingers:4, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
  technique: 5, mobility: 4, strength: 5,
  kcalPerRep: [2.8, 4.2],
  desc: 'Full (straight) back lever on parallettes — legs together, body fully extended and horizontal, arms locked straight. The maximum lever arm creates the highest possible shoulder extension torque for a two-arm back lever hold. Holding a clean full back lever for 3+ seconds on parallettes is a major calisthenics milestone and proof of elite shoulder extension strength and body tension.',
  cues: 'Squeeze every muscle in the body — glutes, quads, abs, and hip flexors must all fire simultaneously to hold the legs up. The shoulders do the pulling; the rest of the body maintains rigidity. The body must be truly horizontal — not slightly downward angled. Even a 3-second hold here represents significant training investment.',
  equipment: 'Parallettes', position: 'Inverted', youtube: 'LINK_TODO'
};

/* ── PUBLIC BASE ARRAY ────────────────────────────────────────
   Consumed by isometric-data.js. backlever-data.js must load first.
──────────────────────────────────────────────────────────────── */
const backleverBaseStatics = [_blTuck, _blAdvTuck, _blHalfLay, _blStraddle, _blFull];

/* ── ID SET (used by index.html for filtering) ───────────────── */
const backleverIsoIds = new Set([11, 2004, 2007, 2013, 2016]);

/* ── COMPLETE BACK LEVER LIBRARY ──────────────────────────────── */
const backlevers = (() => {
  const entries = [...backleverBaseStatics];

  const tuck     = _blTuck;
  const advTuck  = _blAdvTuck;
  const halfLay  = _blHalfLay;
  const straddle = _blStraddle;
  const full     = _blFull;

  // ── TUCK BL: BAR & RINGS ────────────────────────────────────
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

  // ── ADVANCED TUCK BL: BAR & RINGS ───────────────────────────
  entries.push(cloneExercise(advTuck, {
    id: 2005,
    name: 'Advanced Tuck BL | (Bar)',
    alt: 'Advanced tuck back lever on pull-up bar',
    tags: ['shoulders', 'core', 'bar'],
    diff: 6.5,
    strength: 4, risk: 2, technique: 4, mobility: 2,
    equipment: 'Pull-up bar',
    position: 'Inverted',
    joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0 },
    desc: 'Advanced tuck back lever on a pull-up bar — back flat, hips fully extended, knees only slightly bent. The bar grip requires active pronation management while holding the advanced tuck position, adding wrist and forearm demand compared to the parallette version.',
    cues: 'Flatten the back entirely — the lower back should be parallel to the floor. The knees are only slightly bent. Keep the arms locked and the shoulders pressing down hard. The flat-back position requires noticeably more core and glute engagement than the rounded tuck.',
  }));

  entries.push(cloneExercise(advTuck, {
    id: 2006,
    name: 'Advanced Tuck BL | (Rings)',
    alt: 'Advanced tuck back lever on rings',
    tags: ['shoulders', 'core', 'rings'],
    diff: 7.5,
    strength: 5, risk: 3, technique: 5, mobility: 2,
    equipment: 'Gymnastic rings',
    position: 'Inverted',
    joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0 },
    desc: 'Advanced tuck back lever on rings — flat back, knees slightly bent, ring instability superimposed on the higher shoulder loading of the advanced tuck. Holding a flat-back position on rings requires the stabilising muscles to work continuously to prevent the rings from wandering as the body position becomes more demanding.',
    cues: 'Flatten the back and let the rings settle to a forward-pointing position. Resist any outward drift of the rings as the longer lever increases the shoulder torque. Keep both legs at the same level to avoid rolling to one side.',
  }));

  // ── HALF LAY BL: BAR & RINGS ────────────────────────────────
  entries.push(cloneExercise(halfLay, {
    id: 2008,
    name: 'Half Lay BL | (Bar)',
    alt: 'Half-lay back lever on pull-up bar',
    tags: ['shoulders', 'core', 'bar'],
    diff: 7.0,
    strength: 4, risk: 3, technique: 4, mobility: 3,
    equipment: 'Pull-up bar',
    position: 'Inverted',
    joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:3, groin:0, knee:0, ankle:0, foot:0 },
    desc: 'Half-lay back lever on a pull-up bar — one leg extended fully, one tucked. The bar forces supination stress on the biceps tendon which increases at the asymmetric lever length of the half-lay. Alternate the extended leg each set.',
    cues: 'Extend one leg fully back and keep the other tucked. The extended-leg side will feel heavier — compensate with extra lat and shoulder engagement on that side. Keep the hips level throughout.',
  }));

  entries.push(cloneExercise(halfLay, {
    id: 2009,
    name: 'Half Lay BL | (Rings)',
    alt: 'Half-lay back lever on rings',
    tags: ['shoulders', 'core', 'rings'],
    diff: 8.0,
    strength: 5, risk: 3, technique: 5, mobility: 3,
    equipment: 'Gymnastic rings',
    position: 'Inverted',
    joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:3, groin:0, knee:0, ankle:0, foot:0 },
    desc: 'Half-lay back lever on rings — one leg extended, one tucked, on free-hanging rings. The asymmetric lever creates a rotational moment that the rings amplify, requiring extra stabilisation effort to prevent rolling toward the extended leg side.',
    cues: 'Set the rings and then extend one leg. The rings will want to drift toward the extended-leg side — counteract this with additional shoulder engagement. Keep the rings pointing forward throughout. Alternate the extended leg each set.',
  }));

  // ── STRADDLE BL: BAR & RINGS ─────────────────────────────────
  entries.push(cloneExercise(straddle, {
    id: 2014,
    name: 'Straddle BL | (Bar)',
    alt: 'Straddle back lever on pull-up bar',
    tags: ['shoulders', 'core', 'bar'],
    diff: 8.0,
    strength: 5, risk: 3, technique: 4, mobility: 4,
    equipment: 'Pull-up bar',
    position: 'Inverted',
    joints: { fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0 },
    desc: 'Straddle back lever on a pull-up bar — both legs spread wide and extended, body horizontal. The bar version requires the biceps tendon to handle the straddle lever load under full pronation, demanding significant biceps tendon conditioning on top of the shoulder extension strength required.',
    cues: 'Spread the legs as wide as possible. Engage the glutes, quads, and hip abductors firmly to hold the straddle position. The bar will feel harder on the elbows and wrists than parallettes due to forced pronation under this load.',
  }));

  entries.push(cloneExercise(straddle, {
    id: 2015,
    name: 'Straddle BL | (Rings)',
    alt: 'Straddle back lever on rings',
    tags: ['shoulders', 'core', 'rings'],
    diff: 9.0,
    strength: 5, risk: 4, technique: 5, mobility: 4,
    equipment: 'Gymnastic rings',
    position: 'Inverted',
    joints: { fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0 },
    desc: 'Straddle back lever on gymnastic rings — the elite ring static skill combining the long lever of the straddle with full ring instability. Maintaining the straddle BL position on rings requires perfect combination of shoulder extension strength and ring stabilisation skill.',
    cues: 'Keep the rings close to the body and pointed forward. Spread the legs as wide as possible — the straddle reduces the lever arm slightly and is the only way to make this manageable on rings. Brace every muscle from fingers to ankles.',
  }));

  // ── FULL BL: BAR & RINGS ─────────────────────────────────────
  entries.push(cloneExercise(full, {
    id: 2017,
    name: 'Full BL | (Bar)',
    alt: 'Full back lever on pull-up bar',
    tags: ['shoulders', 'core', 'bar'],
    diff: 9.0,
    strength: 5, risk: 4, technique: 5, mobility: 4,
    equipment: 'Pull-up bar',
    position: 'Inverted',
    joints: { fingers:4, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0 },
    desc: 'Full back lever on a pull-up bar — legs together, body fully extended and horizontal. The bar forces full forearm pronation under the maximum straight-body lever load, creating significant biceps tendon and elbow stress alongside the already-demanding shoulder extension requirement. A significant milestone in calisthenics strength.',
    cues: 'Squeeze legs together and brace everything. The bar requires extra attention to the biceps tendon as the full lever load is now channelled through a pronated grip. Keep the arms locked straight and the shoulders in active extension.',
  }));

  entries.push(cloneExercise(full, {
    id: 2018,
    name: 'Full BL | (Rings)',
    alt: 'Full back lever on rings',
    tags: ['shoulders', 'core', 'rings'],
    diff: 10.0,
    strength: 5, risk: 4, technique: 5, mobility: 4,
    equipment: 'Gymnastic rings',
    position: 'Inverted',
    joints: { fingers:4, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0 },
    desc: 'Full back lever on gymnastic rings — legs together, body fully extended and horizontal, on free-hanging rings. One of the hardest static skills available on rings and an absolute proof of elite shoulder extension strength combined with ring stabilisation mastery. Very few athletes can hold a true full back lever on rings for even 3 seconds.',
    cues: 'Everything must work at maximum — shoulder extension, core, glutes, quads, ring stabilisation. Even slight ring drift will break the position at this lever length. A full back lever on rings is the product of years of progressive back lever training.',
  }));

  // ── PREP: GERMAN HANG ────────────────────────────────────────
  entries.push({
    id: 2019,
    name: 'German Hang | (Bar)',
    alt: 'German hang · skin the cat start position · inverted hang',
    muscles: [
      {n:'Biceps', p:false}, {n:'Shoulders', p:true}, {n:'Chest', p:false}, {n:'Lats', p:false}
    ],
    tags: ['shoulders', 'chest', 'back', 'bar', 'prep'],
    diff: 3.5,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 4, strength: 2,
    kcalPerRep: [0.8, 1.4],
    desc: 'German hang on a pull-up bar — from an overhand dead hang, rotate the body backward (elbows bending to assist) until the arms are behind and above the body in a shoulder extension position. The chest faces upward, the body hangs below the bar with arms extended behind. This is the most important shoulder extension flexibility exercise for back lever development, conditioning the anterior shoulder capsule and biceps tendon under load.',
    cues: 'From a dead hang, initiate the rotation by leaning back and allowing the body to swing backward under the bar. Aim to land with the arms as straight as possible and the hands behind the hips. Hold the bottom position and breathe. Progress by increasing the time held and the arm straightness. NEVER force the rotation — the shoulder should feel stretched, not sharp pain.',
    equipment: 'Pull-up bar', position: 'Hang', youtube: 'LINK_TODO'
  });

  entries.push({
    id: 2020,
    name: 'German Hang | (Rings)',
    alt: 'German hang on rings · ring German hang',
    muscles: [
      {n:'Biceps', p:false}, {n:'Shoulders', p:true}, {n:'Chest', p:false}
    ],
    tags: ['shoulders', 'chest', 'rings', 'prep'],
    diff: 4.0,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 4, strength: 2,
    kcalPerRep: [0.9, 1.5],
    desc: 'German hang on gymnastic rings — the ring version allows the hands to rotate freely, removing the forced pronation that makes the bar German hang more stressful on the wrists. The rings allow a more natural hand position throughout the rotation, making this the preferred shoulder flexibility prep method for ring athletes.',
    cues: 'From a ring dead hang, rotate backward. Let the rings turn to match the most comfortable wrist angle as you rotate. Aim for arms as straight as possible at the bottom. The ring freedom means less wrist stress than the bar — spend more time in the bottom position to develop the shoulder flexibility.',
    equipment: 'Gymnastic rings', position: 'Hang', youtube: 'LINK_TODO'
  });

  // ── PREP: SKIN THE CAT ───────────────────────────────────────
  entries.push({
    id: 2021,
    name: 'Skin the Cat | (Bar)',
    alt: 'Skin the cat · full rotation hang · German hang invert',
    muscles: [
      {n:'Lats', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true},
      {n:'Biceps', p:false}, {n:'Chest', p:false}
    ],
    tags: ['shoulders', 'lats', 'core', 'bar', 'prep'],
    diff: 4.5,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:2, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 4, strength: 3,
    kcalPerRep: [1.2, 2.0],
    desc: 'Skin the cat on a pull-up bar — from a dead hang, raise the legs overhead and continue rotating until passing through the inverted tuck/straddle position, descending into a German hang, then reversing back to the start. The full rotation develops the shoulder extension mobility and strength through the entire arc needed for back lever and front lever work. A fundamental gymnastics conditioning exercise.',
    cues: 'Initiate from a dead hang by pulling the knees up toward the chest, then continuing the rotation overhead. Pass through the inverted position tucked, then lower into the German hang — going as far as flexibility allows. Reverse the movement back through inversion to the starting hang. Keep the movement smooth and controlled in both directions.',
    equipment: 'Pull-up bar', position: 'Hang', youtube: 'LINK_TODO'
  });

  entries.push({
    id: 2022,
    name: 'Skin the Cat | (Rings)',
    alt: 'Skin the cat on rings · ring rotation',
    muscles: [
      {n:'Lats', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true},
      {n:'Biceps', p:false}, {n:'Serratus', p:false}
    ],
    tags: ['shoulders', 'lats', 'core', 'rings', 'prep'],
    diff: 5.0,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:2, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 4, strength: 3,
    kcalPerRep: [1.3, 2.1],
    desc: 'Skin the cat on gymnastic rings — the ring version adds rotational freedom that makes the rotation more shoulder-friendly but adds a stabilisation challenge as the rings swing through the arc. A foundational ring skill that builds shoulder extension mobility, lat strength, and ring control simultaneously.',
    cues: 'From a ring hang, pull the legs up and continue over the top — let the rings rotate naturally. Descend into the German hang as far as shoulder flexibility allows. Reverse back through the inversion. The rings will rotate during the arc — allow this rather than fighting it. This is the entry-level ring back lever preparation skill.',
    equipment: 'Gymnastic rings', position: 'Hang', youtube: 'LINK_TODO'
  });

  entries.push({
    id: 2023,
    name: 'Straddle Skin the Cat | (Bar)',
    alt: 'Straddle skin the cat · wide-leg rotation',
    muscles: [
      {n:'Lats', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true},
      {n:'Hip Flexors', p:false}, {n:'Groin', p:false}
    ],
    tags: ['shoulders', 'lats', 'core', 'bar', 'prep'],
    diff: 4.8,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:2, si:1, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 5, strength: 3,
    kcalPerRep: [1.3, 2.1],
    desc: 'Skin the cat performed with legs in a straddle (spread wide) throughout the entire rotation. The straddle reduces the lever arm during the inverted phases, making the rotation slightly more accessible, while simultaneously demanding hip flexor and inner-thigh flexibility through the wide-leg arc. A direct preparation for the straddle back lever.',
    cues: 'Begin with legs spread wide before initiating the rotation. Maintain the straddle throughout — over the top, through the inverted position, and into the German hang. The wide legs make the inverted phase easier but require significant hip flexibility in the hang phase.',
    equipment: 'Pull-up bar', position: 'Hang', youtube: 'LINK_TODO'
  });

  entries.push({
    id: 2024,
    name: 'Straddle Skin the Cat | (Rings)',
    alt: 'Straddle skin the cat on rings',
    muscles: [
      {n:'Lats', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true},
      {n:'Hip Flexors', p:false}, {n:'Groin', p:false}
    ],
    tags: ['shoulders', 'lats', 'core', 'rings', 'prep'],
    diff: 5.2,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:2, si:1, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 5, strength: 3,
    kcalPerRep: [1.4, 2.2],
    desc: 'Straddle skin the cat on rings — wide legs throughout the full rotation on gymnastic rings. The rings allow natural wrist rotation through the arc while the straddle reduces lever demands. A key preparatory drill for the ring straddle back lever.',
    cues: 'Spread the legs wide before starting. Let the rings rotate freely as the body passes over the top and descends into the straddle German hang. Reverse the motion back. The combination of ring freedom and wide-leg leverage makes this the most accessible full skin-the-cat variant on rings.',
    equipment: 'Gymnastic rings', position: 'Hang', youtube: 'LINK_TODO'
  });

  // ── DYNAMIC: BACK LEVER NEGATIVES ───────────────────────────
  entries.push({
    id: 2025,
    name: 'Tuck BL | Negative | (Bar)',
    alt: 'Back lever eccentric · tuck back lever lower',
    muscles: [
      {n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}
    ],
    tags: ['shoulders', 'lats', 'core', 'bar', 'dynamic'],
    diff: 5.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [1.5, 2.3],
    desc: 'Eccentric-only tuck back lever — from an inverted hang or skin-the-cat top position, lower the tucked body slowly into the horizontal tuck back lever position under control, hold briefly, then reset. The eccentric builds the shoulder extension strength and body tension needed for the static hold without requiring the full concentric ability.',
    cues: 'From an inverted position, slowly lower the body into the tuck back lever, taking 3-5 seconds to reach horizontal. Maintain the shoulder extension and core engagement throughout the lowering. Once horizontal, hold briefly if possible. Reset by pulling the legs overhead back to inverted.',
    equipment: 'Pull-up bar', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });

  entries.push({
    id: 2026,
    name: 'Tuck BL | Negative | (Rings)',
    alt: 'Ring tuck back lever eccentric',
    muscles: [
      {n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}
    ],
    tags: ['shoulders', 'lats', 'core', 'rings', 'dynamic'],
    diff: 6.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [1.6, 2.5],
    desc: 'Eccentric tuck back lever on rings — lowering slowly from inverted to horizontal tuck position on free-hanging rings. The ring instability amplifies the difficulty of controlling the descent while maintaining the inverted tuck position.',
    cues: 'From the inverted ring position, lower slowly into the tuck back lever on rings. Control the rings from swinging during the descent — this requires sustained co-contraction throughout the lowering. Take 4 seconds minimum for the descent.',
    equipment: 'Gymnastic rings', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });

  entries.push({
    id: 2027,
    name: 'Straddle BL | Negative | (Bar)',
    alt: 'Straddle back lever eccentric',
    muscles: [
      {n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true},
      {n:'Core', p:true}, {n:'Glutes', p:true}
    ],
    tags: ['shoulders', 'lats', 'core', 'bar', 'dynamic'],
    diff: 7.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:2, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 4, strength: 5,
    kcalPerRep: [2.0, 3.1],
    desc: 'Eccentric straddle back lever on bar — lowering from inverted to horizontal straddle position under control. The longer straddle lever demands much greater shoulder extension strength to control the descent than the tuck negative. This is the primary training method for building toward the straddle static hold.',
    cues: 'Spread the legs wide and lower slowly from inverted to horizontal straddle over 4-5 seconds. Brace glutes, quads, and hip abductors to hold the straddle position while the shoulders control the descent. Reset by pulling the straddled legs back overhead.',
    equipment: 'Pull-up bar', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });

  entries.push({
    id: 2028,
    name: 'Full BL | Negative | (Bar)',
    alt: 'Full back lever eccentric · straight back lever lower',
    muscles: [
      {n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true},
      {n:'Core', p:true}, {n:'Hip Flexors', p:true}, {n:'Glutes', p:true}
    ],
    tags: ['shoulders', 'lats', 'core', 'bar', 'dynamic'],
    diff: 8.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5,
    kcalPerRep: [2.5, 3.8],
    desc: 'Full back lever negative — lowering the fully extended body from inverted to horizontal under control. Completing a slow eccentric to the full back lever position, even briefly, represents elite shoulder extension strength and body tension and directly builds toward the static full back lever hold.',
    cues: 'Squeeze legs together and every muscle in the body. Lower from inverted slowly over 5+ seconds in the fully extended position. The moment the hips drop below horizontal, the full back lever form is lost — stop there or reset. Even touching 1 second of horizontal is a major benchmark on the path to the static hold.',
    equipment: 'Pull-up bar', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });

  entries.push({
    id: 2029,
    name: 'Full BL | Negative | (Parallettes)',
    alt: 'Full back lever eccentric on parallettes',
    muscles: [
      {n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true},
      {n:'Core', p:true}, {n:'Hip Flexors', p:true}, {n:'Glutes', p:true}
    ],
    tags: ['shoulders', 'lats', 'core', 'parallettes', 'dynamic'],
    diff: 8.3,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5,
    kcalPerRep: [2.5, 3.8],
    desc: 'Full back lever negative on parallettes — the wrist-friendly version of the most demanding back lever eccentric. The neutral grip reduces elbow and wrist stress substantially while preserving the full shoulder and posterior chain loading of the maximum-lever descent.',
    cues: 'Grip parallettes and rotate through the inverted position, then lower slowly from inverted to full horizontal in the fully extended body position. Maintain the neutral grip throughout. Take 5+ seconds for the descent. The parallettes are significantly more comfortable than the bar for this highly loaded movement.',
    equipment: 'Parallettes', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });

  // ── WIDE GRIP HOLDS ─────────────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2030, name: 'Tuck BL | Wide Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.2,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever with hands placed wider than shoulder-width on the bar. The wider grip shifts the posterior-deltoid loading arc and changes the shoulder external-rotation demand compared to the standard-width tuck.',
    cues: 'Set hands wider than shoulder-width before rotating. Maintain the tuck tension and level hips. Expect the shoulder pull to feel slightly different at the wider angle.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2031, name: 'Tuck BL | Wide Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 6.0,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever wide grip on parallettes — neutral grip with hands wider than shoulder-width. The neutral grip eliminates wrist pronation stress even at the wide position.',
    cues: 'Place parallettes wider than shoulder-width. Neutral grip keeps wrists comfortable as the wider position shifts loading to the outer shoulders.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2032, name: 'Tuck BL | Wide Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.2,
    strength: 4, risk: 3, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever wide grip on rings. Spreading the rings wide combines shoulder-width grip demands with ring instability, multiplying the stabilisation requirement.',
    cues: 'Spread rings wider than shoulder-width and keep them from swinging inward. The combined wide-plus-ring challenge demands exceptional shoulder co-contraction.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2033, name: 'Advanced Tuck BL | Wide Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.7,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever (flat back) with wide grip on bar. The flat-back position and wide grip together increase shoulder extension and posterior deltoid demands.',
    cues: 'Keep the back flat and hips extended. Wide grip shifts the pull to the outer shoulder heads — resist any shoulder forward rounding.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2034, name: 'Advanced Tuck BL | Wide Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 6.5,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever wide grip on parallettes. Flat-back advanced tuck with hands wider than shoulder-width on neutral-grip parallettes.',
    cues: 'Flatten the back completely, spread the parallettes, and maintain shoulder-depression throughout.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2035, name: 'Advanced Tuck BL | Wide Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.7,
    strength: 5, risk: 3, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever wide grip on rings. Flat-back tuck combined with wide ring spread — a serious shoulder stability challenge.',
    cues: 'Keep rings wide and prevent inward drift. Flat back, extended hips — any rounding immediately reduces the shoulder loading.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2036, name: 'Half Lay BL | Wide Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 7.2,
    strength: 5, risk: 3, technique: 4, mobility: 3, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever (one leg extended, one bent) with wide grip on bar. The longer half-lay lever combined with wide grip pushes shoulder extension demand to a high level.',
    cues: 'Extend one leg fully while keeping the other slightly bent. Grip wide and hold the shoulder in active extension — the wide grip makes this notably harder than standard half-lay.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2037, name: 'Half Lay BL | Wide Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 7.0,
    strength: 5, risk: 2, technique: 4, mobility: 3, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever wide grip on parallettes. Neutral grip removes wrist stress at the wide position while the long lever and wide hand spacing challenge the shoulders.',
    cues: 'Parallettes allow a comfortable wide neutral grip. Focus on shoulder extension and keeping the extended leg driving upward through the heel.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2038, name: 'Half Lay BL | Wide Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 8.2,
    strength: 5, risk: 3, technique: 5, mobility: 3, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever wide grip on rings — a very advanced variation combining the half-lay lever, wide ring position, and ring instability.',
    cues: 'Spread rings wide, hold the half-lay body position, and prevent ring drift inward. Three simultaneous demands on shoulder stability.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2039, name: 'Straddle BL | Wide Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 8.2,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever wide grip on bar. The straddle reduces the lever arm slightly but the wide grip increases the shoulder loading arc — net result is a very high shoulder extension demand.',
    cues: 'Spread legs as wide as possible while gripping the bar wider than shoulder-width. Straddle and wide grip combine — prioritise not letting the hips drop.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2040, name: 'Straddle BL | Wide Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 8.0,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever wide grip on parallettes — neutral wide grip on low parallettes while holding the straddle horizontal. Wrist-friendly elite variation.',
    cues: 'Place parallettes wide. Full straddle, flat body, shoulder in deep extension. Neutral grip means wrists are never the limiter here.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2041, name: 'Straddle BL | Wide Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 9.2,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever wide grip on rings — one of the most demanding straddle variations, combining wide ring spread with straddle position and full ring instability.',
    cues: 'Pull rings apart actively, spread legs maximally, and brace the entire posterior chain. Any relaxation results in immediate ring drift and position collapse.',
  }));
  entries.push(cloneExercise(full, {
    id: 2042, name: 'Full BL | Wide Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 9.3,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever (legs together, body straight) with wide grip on bar. The maximum lever combined with wide grip creates extreme posterior shoulder and upper-back loading.',
    cues: 'Squeeze every muscle, grip wide, and fight to keep the body perfectly horizontal. Wide grip makes the full lever noticeably harder than the standard-width version.',
  }));
  entries.push(cloneExercise(full, {
    id: 2043, name: 'Full BL | Wide Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 9.1,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever wide grip on parallettes. The maximum-lever straight-body hold at wide neutral grip — the wrist-friendly version of the widest full back lever variation.',
    cues: 'Neutral wide grip, full body extension, every posterior chain muscle engaged. The parallettes take wrist pain completely out of the equation.',
  }));
  entries.push(cloneExercise(full, {
    id: 2044, name: 'Full BL | Wide Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 10.2,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever wide grip on rings — the full body straight, rings spread wide, in free-hanging gymnastics rings. One of the hardest back lever static variations achievable.',
    cues: 'Pull rings apart. Squeeze everything. Hold horizontal. Any single point of relaxation ends the hold immediately.',
  }));

  // ── CLOSE/NARROW GRIP HOLDS ──────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2045, name: 'Tuck BL | Close Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.2,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever with a close (narrower than shoulder-width) grip on bar. The narrow grip increases elbow-flexion demands and places the biceps tendon in a slightly different angle of stress.',
    cues: 'Grip narrower than shoulder-width. Expect more elbow involvement. Maintain the same tuck body tension — the grip change mainly alters the upper-arm loading pattern.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2046, name: 'Tuck BL | Close Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 6.0,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:3, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever close grip on parallettes. Narrow neutral grip focuses more stress on the inner elbow and distal bicep tendon while keeping wrists comfortable.',
    cues: 'Place parallettes closer than shoulder-width. The narrow neutral grip concentrates the bicep-tendon load slightly differently than the standard position.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2047, name: 'Tuck BL | Close Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.2,
    strength: 4, risk: 3, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:3, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever close grip on rings — rings held close together while maintaining the tuck horizontal position. Narrowing the rings changes instability pattern from the standard ring width.',
    cues: 'Keep rings close together and prevent them from spreading outward. Tight grip with elbows pointing rearward.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2048, name: 'Advanced Tuck BL | Close Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.7,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever (flat back) with close grip on bar. Flat hips and narrow grip simultaneously.',
    cues: 'Keep the back flat and hips extended fully. Close grip will make elbows more prominent in the overall demand — build elbow tolerance before this variation.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2049, name: 'Advanced Tuck BL | Close Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 6.5,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:3, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever close grip on parallettes. Flat-back close neutral grip — elbow focus without wrist stress.',
    cues: 'Parallettes close together, flat back, hips extended. Pure elbow and shoulder extension challenge on neutral grip.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2050, name: 'Advanced Tuck BL | Close Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.7,
    strength: 5, risk: 3, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:3, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever close grip on rings. Rings close together, flat back, hips fully extended — ring instability forces the narrowed grip to work harder against outward ring drift.',
    cues: 'Press rings toward each other actively. Flat back, hips out. Any outward ring drift means the close-grip challenge is doing its job.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2051, name: 'Half Lay BL | Close Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 7.2,
    strength: 5, risk: 3, technique: 4, mobility: 3, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever close grip on bar. One leg extended, longer lever, narrow grip — elbow and shoulder extension demand is high.',
    cues: 'Narrow grip on bar with one leg extended. Manage the asymmetric body position while the narrow grip focuses the bicep-tendon and elbow load.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2052, name: 'Half Lay BL | Close Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 7.0,
    strength: 5, risk: 2, technique: 4, mobility: 3, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever close grip on parallettes. The easiest grip-variant of the half-lay — wrist-neutral with focused elbow loading.',
    cues: 'Close parallettes, one leg extended, flat body. The neutral grip keeps the exercise shoulder-and-elbow-pure.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2053, name: 'Half Lay BL | Close Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 8.2,
    strength: 5, risk: 3, technique: 5, mobility: 3, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever close grip on rings. Rings held close, half-lay body — the ring instability and close grip fight each other: rings want to spread, close grip wants them in.',
    cues: 'Keep rings close and fight their tendency to spread. Half-lay body, flat back, extended hip on the straight leg.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2054, name: 'Straddle BL | Close Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 8.2,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever close grip on bar. Legs spread, body horizontal, narrow grip — the close-grip straddle requires high elbow tendon health and exceptional shoulder strength.',
    cues: 'Spread legs maximally, grip bar narrower than shoulder-width. The straddle reduces lever length but the close grip adds unique elbow stress.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2055, name: 'Straddle BL | Close Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 8.0,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever close grip on parallettes — wrist-neutral straddle BL at close hand spacing.',
    cues: 'Parallettes close, legs straddled wide, body flat. Neutral grip keeps the challenge in the shoulder and elbow without wrist discomfort.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2056, name: 'Straddle BL | Close Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 9.2,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever close grip on rings. Rings pulled inward, legs spread wide, body horizontal — an elite ring stabilisation challenge.',
    cues: 'Resist ring outward drift aggressively. Straddle the legs fully. Flat body, arms straight. Close rings and wide legs simultaneously.',
  }));
  entries.push(cloneExercise(full, {
    id: 2057, name: 'Full BL | Close Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 9.3,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever close grip on bar. Maximum lever with legs together and narrow grip — the close grip places extreme stress on the bicep tendon and medial elbow under the full-body lever load.',
    cues: 'Grip narrow, squeeze the whole body tight, keep hips level. The close grip dramatically increases bicep-tendon vulnerability — only attempt after significant elbow tendon conditioning.',
  }));
  entries.push(cloneExercise(full, {
    id: 2058, name: 'Full BL | Close Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 9.1,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever close grip on parallettes. Neutral narrow grip holds the maximum lever — much kinder to the wrist than the bar at this grip position.',
    cues: 'Close parallettes, straight body, maximum contraction. Neutral grip means the elbow is the main stress point — not the wrist.',
  }));
  entries.push(cloneExercise(full, {
    id: 2059, name: 'Full BL | Close Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 10.2,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever close grip on rings — rings held together, body fully extended horizontal. A brutal combination of maximum lever and ring instability.',
    cues: 'Pull rings inward and hold them close. Body straight, legs together, every muscle engaged. Rings will want to spread — that resistance is the whole point.',
  }));

  // ── REVERSE GRIP HOLDS ───────────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2060, name: 'Tuck BL | Reverse Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.3,
    strength: 4, risk: 3, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:3, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever with a supinated (underhand / reverse) grip on bar. The palms face upward rather than downward, radically changing the forearm and bicep-tendon loading angle. Heavily stresses the distal bicep tendon in a way the standard pronated grip does not.',
    cues: 'Grip bar with palms facing away from the ground (supinated). Rotate into the inverted tuck carefully — the wrist and elbow will feel the reversed angle immediately. Build this tolerance gradually.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2061, name: 'Tuck BL | Reverse Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 6.1,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever reverse grip on parallettes — supinated grip on handles. Less wrist torque than the bar reverse grip because the handle can be gripped at a slightly natural angle.',
    cues: 'Rotate grip so thumbs point inward (reverse). Parallettes allow slight wrist angle adjustment — use it to find the least uncomfortable supinated position.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2062, name: 'Tuck BL | Reverse Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.0,
    strength: 4, risk: 3, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever reverse grip on rings. The rings can rotate to follow the most natural supinated wrist angle, reducing the wrist stress of the reverse grip variant significantly.',
    cues: 'Allow rings to rotate into the most comfortable supinated position. The ring freedom makes reverse grip much more accessible than on a fixed bar.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2063, name: 'Advanced Tuck BL | Reverse Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.8,
    strength: 4, risk: 3, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:3, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck (flat back) back lever with reverse supinated grip on bar. Flat-back position plus supinated grip creates a challenging bicep tendon and wrist loading combination.',
    cues: 'Flat back, hips extended, supinated grip. The flat-back position at supinated grip requires more shoulder and elbow tendon conditioning than the standard tuck reverse grip.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2064, name: 'Advanced Tuck BL | Reverse Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 6.6,
    strength: 4, risk: 2, technique: 4, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever reverse grip on parallettes. The flat-back position with supinated neutral handle grip.',
    cues: 'Reverse the grip on the parallettes — thumbs should point inward. Flat back and extended hips with the grip-angle change.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2065, name: 'Advanced Tuck BL | Reverse Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.6,
    strength: 5, risk: 3, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever reverse grip on rings. Flat back, supinated ring grip — rings can rotate to ease wrist angle, so this is a useful stepping stone.',
    cues: 'Allow the rings to turn into the supinated position naturally. Flat back, extended hips, stable ring control.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2066, name: 'Half Lay BL | Reverse Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 7.3,
    strength: 5, risk: 3, technique: 4, mobility: 3, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever reverse grip on bar. One leg extended under supinated grip — the longer lever amplifies the wrist and elbow stress of the reverse grip considerably.',
    cues: 'Supinated grip, one leg extended. The half-lay lever makes the reverse grip much harder on the wrist than in the tuck — build bar RG tuck first.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2067, name: 'Half Lay BL | Reverse Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 7.1,
    strength: 5, risk: 2, technique: 4, mobility: 3, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever reverse grip on parallettes. Neutral-handle supinated grip with half-lay body — wrist most comfortable reverse-grip half-lay option.',
    cues: 'Supinated parallette grip, one leg extended. Wrist is the most comfortable here — focus on the shoulder extension and half-lay body tension.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2068, name: 'Half Lay BL | Reverse Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 8.1,
    strength: 5, risk: 3, technique: 5, mobility: 3, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever reverse grip on rings. The rings self-rotate to the most natural supinated angle, making the half-lay reverse grip most accessible on this equipment.',
    cues: 'Let rings find natural supinated angle. Half-lay body, shoulder extension — ring rotation removes the worst of the wrist torsion.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2069, name: 'Straddle BL | Reverse Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 8.3,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever reverse grip on bar. Wide legs and supinated grip — the straddle is the minimum lever length at which most athletes can manage reverse grip without elbow discomfort.',
    cues: 'Full straddle, supinated grip. The wide-leg position reduces some of the lever stress to make the reverse-grip wrist and elbow load manageable.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2070, name: 'Straddle BL | Reverse Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 8.1,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever reverse grip on parallettes. Supinated neutral grip straddle — comfortable wrist position for the supinated straddle hold.',
    cues: 'Straddle wide, parallette supinated grip. Body flat, shoulder deep in extension. Most accessible supinated straddle variant.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2071, name: 'Straddle BL | Reverse Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 9.1,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever reverse grip on rings. Rings rotate naturally into the supinated position while the straddle body is held horizontal — demanding ring stabilisation and shoulder extension.',
    cues: 'Allow rings to settle into supinated angle. Hold the straddle firmly. An excellent ring-conditioning straddle variant.',
  }));
  entries.push(cloneExercise(full, {
    id: 2072, name: 'Full BL | Reverse Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 9.5,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:5, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever with supinated grip on bar — full body extended, legs together, palms facing away from the ground. The maximum lever under reverse grip demands exceptional bicep-tendon and wrist resilience. An elite-tier variation approached with caution.',
    cues: 'Supinated grip, full body extension, total muscle contraction. The wrist and elbow are under severe stress at this combination — only attempt after extensive reverse-grip tuck and straddle progression.',
  }));
  entries.push(cloneExercise(full, {
    id: 2073, name: 'Full BL | Reverse Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 9.3,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever reverse grip on parallettes. Maximum lever with supinated neutral grip — the most wrist-friendly version of the full reverse grip back lever.',
    cues: 'Supinated parallette grip, full body extension. Neutral handles reduce wrist torque significantly vs the bar — prioritise this version for building the pattern.',
  }));
  entries.push(cloneExercise(full, {
    id: 2074, name: 'Full BL | Reverse Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 10.3,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever reverse grip on rings — maximum lever, supinated ring grip, full ring instability. Among the hardest static back lever variations in existence.',
    cues: 'Let rings rotate to natural supinated angle. Full body squeezing everything. Rings, reverse grip, and maximum lever simultaneously.',
  }));

  // ── FINGERTIP HOLDS ──────────────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2075, name: 'Tuck BL | Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 6.5,
    strength: 4, risk: 3, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever on fingertips on bar. All fingers extended, supporting the full back lever load through the fingertip pads and flexor tendons. Requires a foundation of fingertip pull-up bar conditioning before attempting.',
    cues: 'Open the hand so only the fingertip pads contact the bar. The tuck body position is the minimum lever length to start fingertip BL work. Grip strength failure will come before shoulder failure.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2076, name: 'Tuck BL | Fingertip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes', 'fingertip'], diff: 6.3,
    strength: 4, risk: 3, technique: 4, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:5, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever fingertip on parallettes. Fingertip grip on the handle edges — neutral wrist position makes this marginally more accessible than bar fingertip for most athletes.',
    cues: 'Drape fingertips over the parallette edges. Neutral wrist is easier on the forearm than the bar position. Tuck tight and keep body tension high.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2077, name: 'Tuck BL | Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 7.5,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever fingertip on rings. Rings combined with fingertip grip add ring stabilisation stress on top of finger tendon load. An extreme grip-strength conditioning tool.',
    cues: 'Curl fingertips around the ring surface. The ring will want to rotate — the fingertip grip must resist that rotation. Start with very short holds.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2078, name: 'Advanced Tuck BL | Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 7.0,
    strength: 5, risk: 3, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck (flat back) back lever on fingertips on bar. Flat-back position requires more shoulder strength while the fingertip grip simultaneously limits how long any hold can be sustained.',
    cues: 'Flat back, extended hips, fingertip grip. Every second on fingertips is earned — the flat position removes the tuck\'s lever-shortening benefit.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2079, name: 'Advanced Tuck BL | Fingertip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes', 'fingertip'], diff: 6.8,
    strength: 5, risk: 3, technique: 5, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:5, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever fingertip on parallettes. Flat back, neutral grip on fingertips — preferred equipment for building flat-back fingertip BL tolerance.',
    cues: 'Flat back and hips extended. Parallette fingertip is the gentlest way to add fingertip load at this progression level.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2080, name: 'Advanced Tuck BL | Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 8.0,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever fingertip on rings. Flat back, ring fingertip hold — ring movement makes the grip challenge severe. An advanced conditioning drill.',
    cues: 'Flat back, ring fingertip. Minimal hold time — this is a max-intensity conditioning stimulus, not a duration challenge.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2081, name: 'Half Lay BL | Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 7.5,
    strength: 5, risk: 3, technique: 5, mobility: 3, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever fingertip on bar. One leg extended, fingertip grip — the increased lever length makes finger tendon demands very high. A serious grip-strength benchmark on the back lever path.',
    cues: 'One leg extended, fingertip grip. Expect very short hold durations. The half-lay lever makes finger fatigue arrive rapidly.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2082, name: 'Half Lay BL | Fingertip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes', 'fingertip'], diff: 7.3,
    strength: 5, risk: 3, technique: 5, mobility: 3, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:5, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever fingertip on parallettes. Extended-leg position at neutral fingertip grip.',
    cues: 'Half-lay body, fingertip on parallettes. Neutral wrist keeps this manageable — build long-duration holds before moving to bar fingertip at this progression.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2083, name: 'Half Lay BL | Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 8.5,
    strength: 5, risk: 4, technique: 5, mobility: 3, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever fingertip on rings. Three compounding challenges: extended lever, fingertip grip, ring instability. A highly specialised conditioning variation.',
    cues: 'Fingertip on rings, half-lay body. Ring rotation against the fingertip adds a unique demand — the grip cannot passively lock as it would on a fixed bar.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2084, name: 'Straddle BL | Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 8.5,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever fingertip on bar. Wide legs reduce the lever; fingertip grip adds severe finger tendon load. This is the practical ceiling of fingertip back lever work for most athletes.',
    cues: 'Max straddle spread, fingertip grip. The straddle is necessary to make the fingertip grip survivable at this level. Build tuck and advanced tuck fingertip first.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2085, name: 'Straddle BL | Fingertip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes', 'fingertip'], diff: 8.3,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:5, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever fingertip on parallettes. Neutral-wrist straddle fingertip BL — the preferred equipment for straddle fingertip conditioning.',
    cues: 'Full straddle, fingertip on parallette edges. The neutral grip is the most tendon-friendly way to accumulate straddle fingertip BL volume.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2086, name: 'Straddle BL | Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 9.5,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever fingertip on rings. An elite-level finger and shoulder conditioning variation combining the straddle position with ring instability and fingertip load.',
    cues: 'Max straddle, fingertip on rings. Everything is fighting your stability simultaneously. Sub-5-second holds are elite-level achievement.',
  }));
  entries.push(cloneExercise(full, {
    id: 2087, name: 'Full BL | Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 9.8,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever on fingertips — legs together, body fully horizontal, supported entirely through the fingertip pads. One of the most demanding static grip-strength feats attainable on the back lever path.',
    cues: 'Maximum body tension, fingertip grip. The full lever loads the fingers maximally. This is a feat of both shoulder extension and finger tendon strength at the elite level.',
  }));
  entries.push(cloneExercise(full, {
    id: 2088, name: 'Full BL | Fingertip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes', 'fingertip'], diff: 9.6,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:5, wrist:2, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever fingertip on parallettes. The wrist-friendly version of the full-lever fingertip hold — neutral grip removes one stress variable to isolate finger tendon and shoulder loading.',
    cues: 'Fingertip on parallette edges, full body extended. Neutral grip isolates the finger and shoulder demands without adding wrist torsion.',
  }));
  entries.push(cloneExercise(full, {
    id: 2089, name: 'Full BL | Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 10.8,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever fingertip on rings — the apex of fingertip back lever variations. Maximum lever, maximum ring instability, maximum finger tendon load. Near-mythical territory in gymnastics strength.',
    cues: 'Every muscle maximally contracted. Fingertip ring grip fights rotation every millisecond. Documented performances at this level are extraordinarily rare.',
  }));

  // ── PINCH GRIP HOLDS ──────────────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2090, name: 'Tuck BL | Pinch Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.4,
    strength: 4, risk: 3, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever with pinch grip on bar — thumb opposing fingers around the bar rather than wrapping underneath. The pinch grip targets the thumb abductor and finger flexor strength in a different recruitment pattern than a full grip.',
    cues: 'Squeeze the bar between the thumb and fingers without wrapping the thumb underneath. The tuck is the appropriate start position — pinch grip will fatigue faster than a standard grip.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2091, name: 'Tuck BL | Pinch Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 6.2,
    strength: 4, risk: 3, technique: 4, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever pinch grip on parallettes. The wider parallette handle makes pinch grip feel quite different from bar pinch — the wider surface requires a broader thumb-to-finger spread.',
    cues: 'Pinch the parallette top surface. The wider handle trains a slightly different thumb abductor angle than the bar. Tuck body for minimum lever.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2092, name: 'Tuck BL | Pinch Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.4,
    strength: 4, risk: 3, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever pinch grip on rings. Pinch grip on the round ring surface — the ring can rotate against the grip, making pinch retention significantly harder than on a fixed bar.',
    cues: 'Pinch the ring. The ring rotates against the pinch — actively resist this. Tuck body only. This combination makes for a very short maximal hold.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2093, name: 'Advanced Tuck BL | Pinch Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.9,
    strength: 5, risk: 3, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck (flat back) back lever with pinch grip on bar. Flat-back position plus pinch grip — two simultaneous difficulty escalations from standard tuck full grip.',
    cues: 'Flat back, hips extended, pinch grip. The flat position eliminates the tuck\'s lever advantage, making the pinch grip\'s shorter fatigue timeline matter more.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2094, name: 'Advanced Tuck BL | Pinch Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 6.7,
    strength: 5, risk: 3, technique: 5, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever pinch grip on parallettes. Flat-back neutral pinch grip — a clean way to build pinch strength at the advanced tuck level.',
    cues: 'Flat back, pinch the parallette tops. Wrists are comfortable — focus on maintaining the flat-back body line as pinch fatigue sets in.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2095, name: 'Advanced Tuck BL | Pinch Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.9,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever pinch grip on rings. Flat back, ring pinch — high demand on thumb flexors fighting ring rotation simultaneously.',
    cues: 'Flat back, pinch rings. Ring rotation is the enemy of pinch grip — the flat-back advanced tuck requires full grip tendon readiness before this variation.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2096, name: 'Half Lay BL | Pinch Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 7.4,
    strength: 5, risk: 3, technique: 5, mobility: 3, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever pinch grip on bar. Extended-leg position with pinch grip — the longer lever makes pinch failure arrive much faster than at tuck.',
    cues: 'One leg extended, pinch grip. The half-lay lever significantly accelerates grip fatigue. Short quality holds are the training stimulus here.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2097, name: 'Half Lay BL | Pinch Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 7.2,
    strength: 5, risk: 3, technique: 5, mobility: 3, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever pinch grip on parallettes. Neutral wrist pinch at the half-lay lever length — the preferred equipment for this progression.',
    cues: 'Half-lay body, pinch the parallette. Neutral wrist keeps the focus on the thumb and finger load rather than wrist stress.',
  }));
  entries.push(cloneExercise(halfLay, {
    id: 2098, name: 'Half Lay BL | Pinch Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 8.4,
    strength: 5, risk: 4, technique: 5, mobility: 3, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    desc: 'Half lay back lever pinch grip on rings. Extended leg, ring pinch — an advanced conditioning variation where ring rotation, lever length, and pinch strength are all simultaneously challenged.',
    cues: 'Half-lay body, pinch the ring surface. Ring rotation fights the pinch continuously — micro-adjustments to the grip are constant throughout the hold.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2099, name: 'Straddle BL | Pinch Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 8.4,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever pinch grip on bar. Wide-leg lever at pinch grip — the straddle is typically the minimum usable lever for straddle-level pinch grip BL work.',
    cues: 'Max straddle, pinch grip. The straddle reduces lever arm enough to make pinch grip achievable at this level. Build straddle full-grip first.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2100, name: 'Straddle BL | Pinch Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 8.2,
    strength: 5, risk: 3, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever pinch grip on parallettes. Neutral pinch at straddle lever — the most accessible route into straddle pinch-grip back lever work.',
    cues: 'Full straddle, pinch parallettes. Neutral grip prevents wrist issues — accumulate quality seconds and build up hold duration progressively.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2101, name: 'Straddle BL | Pinch Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 9.4,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever pinch grip on rings. A demanding specialised variation: ring straddle position with pinch grip fighting ring rotation. Elite conditioning for grip and shoulder extension.',
    cues: 'Straddle wide, pinch rings. Ring rotation relentlessly attacks the pinch — active resistance is continuous throughout the hold.',
  }));
  entries.push(cloneExercise(full, {
    id: 2102, name: 'Full BL | Pinch Grip (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 9.7,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever pinch grip on bar — maximum lever, legs together, pinch grip supporting the full load. Extremely demanding on thumb flexors and forearm musculature at this lever length.',
    cues: 'Full body straight, pinch grip. The maximum lever amplifies pinch failure — only seconds are possible even at elite level. Track hold time carefully.',
  }));
  entries.push(cloneExercise(full, {
    id: 2103, name: 'Full BL | Pinch Grip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 9.5,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever pinch grip on parallettes. The neutral-grip wrist-friendly version of the full pinch BL — still maximally demanding on finger flexors and shoulder extension.',
    cues: 'Full body, neutral pinch on parallettes. Wrist is comfortable — the grip and shoulder demand is the focus.',
  }));
  entries.push(cloneExercise(full, {
    id: 2104, name: 'Full BL | Pinch Grip (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 10.7,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever pinch grip on rings — rings, maximum lever, pinch grip. Considered among the most demanding non-one-arm back lever static variations.',
    cues: 'Every contraction maximal. Rings rotate, lever pulls, pinch fights both. Sub-3-second holds are considered exceptional at this level.',
  }));

  // ── 4-FINGER HOLDS ───────────────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2105, name: 'Tuck BL | 4-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.6,
    strength: 4, risk: 3, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever with the pinky finger removed from the grip (four fingers only). Each removed finger escalates the load per remaining finger and shifts the hand\'s proprioceptive base.',
    cues: 'Lift the pinky off the bar. Four fingers must now carry what five did. The tuck is essential — finger tendons fatigue faster than shoulders at this grip.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2106, name: 'Tuck BL | 4-Finger (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.6,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever 4-finger grip on rings. Ring rotation fights the reduced grip continuously — a challenging finger tendon conditioning drill.',
    cues: 'Four fingers on the ring, tuck body. Rings rotate against the grip — brace the remaining four fingers and prevent ring drift.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2107, name: 'Straddle BL | 4-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 8.6,
    strength: 5, risk: 4, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever 4-finger grip on bar. Straddle position allows this grip combination — any longer lever makes 4-finger back lever nearly impossible for most athletes.',
    cues: 'Max straddle, 4 fingers on bar. The straddle reduces lever length enough to make this achievable. Build extensive tuck 4-finger capacity first.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2108, name: 'Straddle BL | 4-Finger (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 9.6,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever 4-finger grip on rings — an elite specialised variant combining straddle position, reduced finger count, and ring instability.',
    cues: 'Wide straddle, 4 fingers on rings. Ring rotation and four-finger load simultaneously — only experienced athletes with strong tendon conditioning should attempt this.',
  }));
  entries.push(cloneExercise(full, {
    id: 2109, name: 'Full BL | 4-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 9.9,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever 4-finger grip on bar. Maximum lever with pinky removed — extreme finger tendon loading at the hardest lever length. Theoretical ceiling of 4-finger back lever strength.',
    cues: 'Full body extension, 4 fingers. Each removed finger means 25% more load on each remaining one. Only seconds are possible at elite level.',
  }));

  // ── 3-FINGER HOLDS ───────────────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2110, name: 'Tuck BL | 3-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 6.9,
    strength: 4, risk: 4, technique: 4, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever 3-finger grip — index, middle and ring fingers only on bar. Each finger now bears approximately one-third of the total load, requiring significant flexor tendon conditioning.',
    cues: 'Three fingers on bar, tuck body. The two removed fingers shift load dramatically — this grip requires substantial preparation through full-grip and 4-finger work first.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2111, name: 'Tuck BL | 3-Finger (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 7.9,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever 3-finger grip on rings. Three fingers on rings — ring rotation fights the reduced contact area at every moment of the hold.',
    cues: 'Three fingers, ring surface, tuck body. The ring\'s rotational force is completely unforgiving with only three fingers — brief maximal holds only.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2112, name: 'Straddle BL | 3-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 8.9,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever 3-finger grip on bar. The straddle is essential to make three-finger back lever approachable — even with legs spread, finger tendon demands are extreme.',
    cues: 'Max straddle, 3 fingers. The straddle is a prerequisite for managing the 3-finger load. Respect tendon warm-up and volume limits rigorously.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2113, name: 'Straddle BL | 3-Finger (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 9.9,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever 3-finger on rings — among the most demanding grip-strength combinations in calisthenics. Three fingers fighting ring instability at straddle lever length.',
    cues: 'Wide straddle, 3 fingers on rings. Near the absolute limit of what human finger tendons can achieve in this position.',
  }));
  entries.push(cloneExercise(full, {
    id: 2114, name: 'Full BL | 3-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 10.2,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever 3-finger grip on bar. Maximum lever length with only three fingers — a feat at the absolute frontier of human static grip strength.',
    cues: 'Full body, 3 fingers on bar. Considered by most gymnasts to be the practical limit of finger-reduced back lever. Any hold time here is remarkable.',
  }));

  // ── 2-FINGER HOLDS ───────────────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2115, name: 'Tuck BL | 2-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 7.5,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever 2-finger grip — index and middle finger only on bar. Half the normal contact area carries the complete body weight. Extreme flexor digitorum profundus demand.',
    cues: 'Two fingers on bar, tuck body. The load per finger is now 2.5× a full grip. Only athletes with serious finger tendon preparation should attempt this.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2116, name: 'Tuck BL | 2-Finger (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 8.5,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever 2-finger grip on rings. Two fingers against ring rotation — an extreme conditioning stimulus for finger tendons and hand strength.',
    cues: 'Two fingers on rings, tuck. Ring rotation is unforgiving with only two fingers — brief supramaximal holds only, with extensive warm-up.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2117, name: 'Straddle BL | 2-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 9.5,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever 2-finger on bar — the most reduced grip achievable at an extended lever. The straddle is the minimum lever at which 2-finger back lever is possible for any athlete.',
    cues: 'Max straddle, 2 fingers. This is extreme territory — treat as a max-effort assessment rather than a training exercise.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2118, name: 'Straddle BL | 2-Finger (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 10.5,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever 2-finger on rings. Two fingers, ring instability, straddle lever — one of the hardest achievable grip-strength combinations in existence.',
    cues: 'Wide straddle, 2 fingers on rings. Maximum effort, minimum volume. Only attempt this as an advanced finger tendon test after years of preparation.',
  }));

  // ── 1-FINGER HOLDS ───────────────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2119, name: 'Tuck BL | 1-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 8.5,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever 1-finger grip — the entire body weight supported through a single finger on each hand on the bar. The index or middle finger (never the ring or pinky) must carry 100% of the grip load. An extreme feat of digit tendon strength.',
    cues: 'One finger per hand on bar, tuck body. The index or middle finger is significantly stronger than the others — use one of those. This represents the absolute limit of reduced-finger BL.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2120, name: 'Tuck BL | 1-Finger (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 9.5,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever 1-finger on rings — one finger per ring fighting both the body weight and the ring\'s rotational freedom. Possibly the most demanding grip expression of the tuck back lever.',
    cues: 'One finger on rings, tuck. Ring rotation with a single digit — this is a maximum test of tendon resilience. Warm-up extensively and limit volume severely.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2121, name: 'Straddle BL | 1-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 10.5,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever 1-finger on bar — a single finger per hand at straddle lever length. One of the rarest and most extreme static strength feats in calisthenics. Documented performances are extraordinarily scarce.',
    cues: 'Max straddle, one finger per hand. The straddle is the only lever length at which 1-finger BL is even theoretically possible for most athletes. Treat as a maximum-effort benchmark.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2122, name: 'Advanced Tuck BL | 1-Finger (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 9.0,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever 1-finger on bar. Flat-back position at 1-finger grip — harder than tuck 1-finger because the lever advantage of hip tuck is removed.',
    cues: 'Flat back, one finger per hand. The advanced tuck\'s flat-back form significantly increases shoulder demand over the standard tuck, making one-finger grip even harder to sustain.',
  }));

  // ── ONE-ARM HOLDS ────────────────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2123, name: 'Tuck BL | One Arm (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 8.5,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever held with a single arm on bar. The free arm hangs or is held at the side. One shoulder must produce the full extension force while the core fights the lateral rotation that single-arm loading creates. The entry point for one-arm back lever development.',
    cues: 'Grip the bar with one hand and rotate into the tuck position. The non-gripping side will try to drop — prevent this with intense anti-rotation core bracing. Expect very short hold durations initially.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2124, name: 'Tuck BL | One Arm (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 8.3,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever one arm on parallettes. One hand on a single parallette — neutral grip reduces wrist stress while the single-arm demand remains maximally challenging for shoulder extension.',
    cues: 'One parallette, one hand, tuck body. The neutral grip is significantly more comfortable for long-term one-arm back lever training. The core anti-rotation demand is identical to the bar version.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2125, name: 'Tuck BL | One Arm (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 9.5,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever one arm on a single ring. The ring adds rotational instability to the already-extreme one-arm shoulder extension demand. An elite gymnastics conditioning movement.',
    cues: 'One ring, one arm, tuck body. The ring will rotate freely — the single-arm grip must resist this on top of the shoulder extension work. Extremely short holds at elite level.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2126, name: 'Advanced Tuck BL | One Arm (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 9.0,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck (flat back) one-arm back lever on bar. The flat-back body position removes the lever-shortening advantage of hip tuck, making the single-arm demand significantly harder than tuck one-arm.',
    cues: 'Flat back, one arm. The anti-rotation demand is maximised at this body position because there is less mass compression helping the tuck. Build tuck one-arm extensively first.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2127, name: 'Advanced Tuck BL | One Arm (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 8.8,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck one-arm back lever on parallettes. Flat-back single-arm hold — neutral wrist makes this the preferred equipment for building flat-back one-arm BL strength.',
    cues: 'One parallette, flat back, one arm. The neutral grip preserves wrist health for the high training volumes needed to build one-arm BL capacity at this progression.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2128, name: 'Advanced Tuck BL | One Arm (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 10.0,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck one-arm back lever on a single ring. Flat back, one ring, one arm — three compounding difficulties combined into one elite variation.',
    cues: 'One ring, flat back, one arm. This is near the ceiling of what is achievable outside elite gymnastics competition. Approach with full tendon preparedness.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2129, name: 'Straddle BL | One Arm (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 9.8,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:4, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever one arm on bar. Legs wide spread with a single arm supporting the full load — the straddle reduces the lever making one-arm work more manageable than the full position.',
    cues: 'Wide straddle, one arm on bar. The straddle\'s lever reduction is what makes one-arm work possible at this progression for most athletes. Core anti-rotation is critical.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2130, name: 'Straddle BL | One Arm (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 9.6,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever one arm on parallettes. Neutral-grip single-arm straddle BL — the preferred equipment pathway for developing one-arm straddle back lever strength.',
    cues: 'Single parallette, straddle body, one arm. Neutral grip keeps wrists out of the equation entirely — focus on the shoulder extension and anti-rotation core bracing.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2131, name: 'Straddle BL | One Arm (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 10.8,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever one arm on a single ring. Ring instability, single arm, straddle lever — an elite gymnastics strength variation performed by only a handful of athletes worldwide.',
    cues: 'One ring, straddle wide, one arm. Ring rotation fights the grip and the shoulder simultaneously. An extreme test of integrated gymnastics strength.',
  }));
  entries.push(cloneExercise(full, {
    id: 2132, name: 'Full BL | One Arm (Bar)',
    tags: ['shoulders', 'core', 'bar'], diff: 11.0,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:5, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever one arm on bar — the complete straight-body back lever supported by a single arm. Legs together, body horizontal, one arm. The pinnacle of back lever strength. Performed by an extremely small number of athletes globally.',
    cues: 'One arm, full body extension. Every fibre of shoulder, core, posterior chain and grip must fire maximally and simultaneously. The full one-arm BL represents the absolute peak of this skill family.',
  }));
  entries.push(cloneExercise(full, {
    id: 2133, name: 'Full BL | One Arm (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes'], diff: 10.8,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:5, wrist:2, elbow:5, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever one arm on parallettes. Maximum lever, single arm, neutral grip. Slightly more accessible on the wrist than the bar — but the shoulder and core demands are identical.',
    cues: 'One parallette, full body, one arm. The neutral grip removes wrist stress but nothing else is easier. This is still peak-level gymnastics strength.',
  }));
  entries.push(cloneExercise(full, {
    id: 2134, name: 'Full BL | One Arm (Rings)',
    tags: ['shoulders', 'core', 'rings'], diff: 11.5,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:3, elbow:5, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever one arm on a single ring — widely considered one of the most demanding static strength skills in gymnastics. Maximum lever, single arm, free-hanging ring instability. Arguably the apex of calisthenics static strength.',
    cues: 'One ring, full body, one arm. If this is being attempted, it has been prepared for over years. Every variable is maximised simultaneously.',
  }));

  // ── ONE-ARM FINGERTIP HOLDS ──────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2135, name: 'Tuck BL | One Arm Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 10.0,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever one arm on fingertips on bar. Single arm, fingertip-only grip, tuck body — the combination of one-arm loading and fingertip contact creates a near-superhuman finger tendon demand even at the tuck position.',
    cues: 'One-arm fingertip grip, tuck body. An experimental/extreme conditioning variation. Only for athletes who have thoroughly mastered both one-arm tuck BL and fingertip tuck BL independently.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2136, name: 'Tuck BL | One Arm Fingertip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes', 'fingertip'], diff: 9.8,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:5, wrist:2, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever one arm fingertip on parallettes. The neutral-grip version reduces wrist stress at this extreme grip/strength combination.',
    cues: 'Fingertip on single parallette, one arm, tuck. Neutral grip makes this marginally more accessible on the wrist — the finger and shoulder demand remains extreme.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2137, name: 'Tuck BL | One Arm Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 11.0,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever one arm fingertip on a single ring — one of the most extreme grip/shoulder combinations in calisthenics. Ring rotation, one arm, fingertip contact, tuck position. Theoretical territory for nearly all athletes.',
    cues: 'One ring, one arm, fingertip, tuck. Four simultaneous extreme demands. A benchmark rather than a training exercise.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2138, name: 'Advanced Tuck BL | One Arm Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 10.5,
    strength: 5, risk: 5, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:2, thoracic:4, lowerBack:5, si:3, hip:3, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck one-arm fingertip back lever on bar. Flat back, single arm, fingertip — the removal of the tuck\'s hip-compression advantage makes this significantly harder than the tuck version.',
    cues: 'Flat back, one arm, fingertip on bar. A frontier-level strength expression. Only proceed after extensive preparation in each component independently.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2139, name: 'Straddle BL | One Arm Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 11.0,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever one arm fingertip on bar. Wide legs, one arm, fingertip — the straddle is the minimum practical lever at which this grip/shoulder combination becomes fathomable.',
    cues: 'Max straddle, one arm, fingertip. Sub-2-second holds at this variation represent extraordinary finger and shoulder strength.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2140, name: 'Straddle BL | One Arm Fingertip (Parallettes)',
    tags: ['shoulders', 'core', 'parallettes', 'fingertip'], diff: 10.8,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Parallettes', position: 'Inverted',
    joints: {fingers:5, wrist:2, elbow:4, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever one arm fingertip on parallettes. Neutral grip straddle one-arm fingertip — wrist is the only thing made easier versus the bar.',
    cues: 'Single parallette, straddle, one arm, fingertip. Neutral grip is the one concession — everything else is at absolute maximum.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2141, name: 'Straddle BL | One Arm Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 12.0,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever one arm fingertip on a single ring — possibly the most demanding realistically achievable back lever variation. Ring instability, one arm, fingertip grip, straddle body. Beyond elite level.',
    cues: 'One ring, one arm, fingertip, straddle. A demonstration-level feat. Documented attempts are extraordinarily rare.',
  }));
  entries.push(cloneExercise(full, {
    id: 2142, name: 'Full BL | One Arm Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 12.5,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:5, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever one arm fingertip on bar — if the full one-arm BL is the apex of this skill family, this extends beyond it. Maximum lever, single arm, single-finger-pad contact. A feat beyond what is currently documented.',
    cues: 'This is theoretical territory. Track as a concept boundary. If you\'re reading this and it\'s within reach, document it.',
  }));
  entries.push(cloneExercise(full, {
    id: 2143, name: 'Full BL | One Arm Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 13.0,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:5, shoulder:5, neck:2, thoracic:5, lowerBack:5, si:3, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever one arm fingertip on a single ring — the absolute theoretical limit of the back lever skill family. Every parameter at maximum simultaneously. Beyond any documented human achievement.',
    cues: 'Exists as the outer boundary of the progression map. Train toward it, generation by generation.',
  }));

  // ── SUPINATED FINGERTIP HOLDS ────────────────────────────────────────────────
  entries.push(cloneExercise(tuck, {
    id: 2144, name: 'Tuck BL | Supinated Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 7.0,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever supinated fingertip on bar — reverse grip (palms away) combined with fingertip contact. The supinated wrist in the fingertip position creates a uniquely stressful forearm and elbow loading angle.',
    cues: 'Supinated (reverse) fingertip grip on bar. The wrist is under dual challenge: reverse angle plus fingertip load. Tuck only. Requires strong reverse-grip and fingertip preparation separately first.',
  }));
  entries.push(cloneExercise(tuck, {
    id: 2145, name: 'Tuck BL | Supinated Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 8.0,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    desc: 'Tuck back lever supinated fingertip on rings. The ring rotation can align the wrist naturally into a more comfortable supinated angle — making this more manageable than the bar version.',
    cues: 'Let rings rotate to natural supinated-fingertip angle. Tuck body. Ring rotation relief is the main advantage of this variant over bar supinated fingertip.',
  }));
  entries.push(cloneExercise(advTuck, {
    id: 2146, name: 'Advanced Tuck BL | Supinated Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 7.5,
    strength: 5, risk: 4, technique: 5, mobility: 2, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    desc: 'Advanced tuck back lever supinated fingertip on bar. Flat back plus supinated fingertip grip — the flat-back position removes the tuck advantage while the supinated fingertip compounds wrist stress.',
    cues: 'Flat back, supinated fingertip grip. Build the standard tuck supinated fingertip first — the flat-back form significantly increases the demands on both shoulder and finger.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2147, name: 'Straddle BL | Supinated Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 9.0,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever supinated fingertip on bar. Wide legs reduce the lever to make this extreme grip combination approachable — the straddle is essential at this grip difficulty.',
    cues: 'Max straddle, supinated fingertip on bar. Wrist stress is maximised at this variant — extensive warm-up and careful progressive loading required.',
  }));
  entries.push(cloneExercise(straddle, {
    id: 2148, name: 'Straddle BL | Supinated Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 10.0,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    desc: 'Straddle back lever supinated fingertip on rings. The ring self-rotates to the natural supinated-fingertip angle, reducing wrist torsion — making this the preferred equipment for straddle supinated fingertip BL.',
    cues: 'Straddle wide, let rings rotate into supinated-fingertip position. The ring freedom is the main advantage over bar at this grip/position combination.',
  }));
  entries.push(cloneExercise(full, {
    id: 2149, name: 'Full BL | Supinated Fingertip (Bar)',
    tags: ['shoulders', 'core', 'bar', 'fingertip'], diff: 10.5,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Pull-up bar', position: 'Inverted',
    joints: {fingers:5, wrist:5, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever supinated fingertip on bar. Maximum lever, reverse grip, fingertips only — the combination of these three factors creates extreme wrist, elbow, and finger tendon demand simultaneously.',
    cues: 'Full body, supinated fingertip grip. All three extreme grip factors combined at the maximum lever. Reserve for strength benchmarking after years of progressive preparation.',
  }));
  entries.push(cloneExercise(full, {
    id: 2150, name: 'Full BL | Supinated Fingertip (Rings)',
    tags: ['shoulders', 'core', 'rings', 'fingertip'], diff: 11.5,
    strength: 5, risk: 5, technique: 5, mobility: 4, equipment: 'Gymnastic rings', position: 'Inverted',
    joints: {fingers:5, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    desc: 'Full back lever supinated fingertip on rings — maximum lever, ring instability, supinated reverse grip, fingertip contact. An extreme theoretical variation at the boundary of human grip-strength expression.',
    cues: 'Full body, rings rotating to supinated-fingertip. The ring relief on wrist torsion is the only concession. Everything else is at maximum.',
  }));

  // ── MISSING DYNAMICS (NEGATIVES + RISES) ────────────────────────────────────
  entries.push({
    id: 2151,
    name: 'Advanced Tuck BL | Negative | (Bar)',
    alt: 'Advanced tuck back lever eccentric bar',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}],
    tags: ['shoulders', 'lats', 'core', 'bar', 'dynamic'],
    diff: 6.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4, kcalPerRep: [1.6, 2.5],
    desc: 'Eccentric advanced tuck back lever on bar — from inverted, lower slowly to the flat-back tuck position. The flat-back form makes this significantly harder than standard tuck negatives.',
    cues: 'Lower from inverted with back flat, hips extended — do not tuck the hips to compensate. 4-5 second descent.',
    equipment: 'Pull-up bar', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2152,
    name: 'Advanced Tuck BL | Negative | (Rings)',
    alt: 'Advanced tuck back lever eccentric rings',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}],
    tags: ['shoulders', 'lats', 'core', 'rings', 'dynamic'],
    diff: 6.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 4, kcalPerRep: [1.7, 2.6],
    desc: 'Eccentric advanced tuck back lever on rings — flat-back descent on gymnastic rings. Ring instability amplifies the shoulder co-contraction needed to control the lowering.',
    cues: 'Flat back, lower on rings. Keep the rings from swinging during the 4-second descent. The ring freedom makes the descent less predictable than bar.',
    equipment: 'Gymnastic rings', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2153,
    name: 'Advanced Tuck BL | Negative | (Parallettes)',
    alt: 'Advanced tuck back lever eccentric parallettes',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}],
    tags: ['shoulders', 'lats', 'core', 'parallettes', 'dynamic'],
    diff: 5.8,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 2,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4, kcalPerRep: [1.6, 2.5],
    desc: 'Eccentric advanced tuck back lever on parallettes — wrist-neutral flat-back descent. The safest equipment for building advanced tuck BL eccentric volume.',
    cues: 'Flat back, lower on parallettes. Neutral grip removes wrist stress — accumulate controlled descent volume here before progressing to bar.',
    equipment: 'Parallettes', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2154,
    name: 'Half Lay BL | Negative | (Bar)',
    alt: 'Half lay back lever eccentric bar',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}, {n:'Glutes', p:false}],
    tags: ['shoulders', 'lats', 'core', 'bar', 'dynamic'],
    diff: 6.8,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 3, strength: 5, kcalPerRep: [1.9, 2.9],
    desc: 'Eccentric half-lay back lever on bar — lowering from inverted with one leg extended and one bent. The half-lay lever demands more shoulder strength to control the descent than the advanced tuck.',
    cues: 'One leg extended from inverted, lower slowly over 4-5 seconds. The extended leg significantly increases the shoulder load during the descent.',
    equipment: 'Pull-up bar', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2155,
    name: 'Half Lay BL | Negative | (Rings)',
    alt: 'Half lay back lever eccentric rings',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}, {n:'Glutes', p:false}],
    tags: ['shoulders', 'lats', 'core', 'rings', 'dynamic'],
    diff: 7.3,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:3, groin:1, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5, kcalPerRep: [2.0, 3.0],
    desc: 'Eccentric half-lay back lever on rings. Extended-leg descent on rings — ring instability makes the half-lay negative particularly demanding on shoulder coordination.',
    cues: 'One leg extended, lower on rings. The rings will swing if the descent is not perfectly controlled. Aim for 5 seconds from inverted to horizontal.',
    equipment: 'Gymnastic rings', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2156,
    name: 'Straddle BL | Negative | (Rings)',
    alt: 'Straddle back lever eccentric rings',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}, {n:'Glutes', p:true}],
    tags: ['shoulders', 'lats', 'core', 'rings', 'dynamic'],
    diff: 8.0,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:2, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5, kcalPerRep: [2.2, 3.3],
    desc: 'Eccentric straddle back lever on rings. Wide-leg descent on rings — the ring instability combined with the straddle lever makes this the hardest negative variant short of the full body.',
    cues: 'Spread legs wide and lower slowly on rings. Rings will try to swing laterally — counter this with strong ring compression. 4-5 second descent target.',
    equipment: 'Gymnastic rings', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2157,
    name: 'Straddle BL | Negative | (Parallettes)',
    alt: 'Straddle back lever eccentric parallettes',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}, {n:'Glutes', p:true}],
    tags: ['shoulders', 'lats', 'core', 'parallettes', 'dynamic'],
    diff: 7.7,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:2, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 4, strength: 5, kcalPerRep: [2.1, 3.2],
    desc: 'Eccentric straddle back lever on parallettes — wrist-neutral straddle descent. Preferred equipment for accumulating straddle negative volume with maximum comfort.',
    cues: 'Straddle wide, lower on parallettes. Neutral grip lets the wrist stay comfortable through the full straddle descent arc.',
    equipment: 'Parallettes', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2158,
    name: 'Full BL | Negative | (Rings)',
    alt: 'Full back lever eccentric rings',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}, {n:'Hip Flexors', p:true}, {n:'Glutes', p:true}],
    tags: ['shoulders', 'lats', 'core', 'rings', 'dynamic'],
    diff: 9.0,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:2, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5, kcalPerRep: [2.6, 3.9],
    desc: 'Full back lever negative on rings — the most demanding back lever eccentric. Lowering the fully extended body from inverted on rings demands exceptional shoulder extension strength and ring stabilisation simultaneously.',
    cues: 'Full body from inverted, lower on rings. The rings will want to swing outward during the descent — resist this. Even 3 seconds to horizontal is elite territory.',
    equipment: 'Gymnastic rings', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2159,
    name: 'Tuck BL | Rise | (Bar)',
    alt: 'Tuck back lever concentric rise',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}],
    tags: ['shoulders', 'lats', 'core', 'bar', 'dynamic'],
    diff: 6.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5, kcalPerRep: [1.8, 2.7],
    desc: 'From the tuck back lever hold position, actively pull the body back up to the inverted position — the concentric reversal of the negative. Rising from the hold requires concentric shoulder extension strength, making this harder than the negative alone.',
    cues: 'From horizontal tuck BL, pull the legs overhead to return to inverted. Lead with the hips — keep the tuck tight throughout the rise. A full rep = lower down (negative) + rise back up.',
    equipment: 'Pull-up bar', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2160,
    name: 'Tuck BL | Rise | (Rings)',
    alt: 'Tuck back lever concentric rise rings',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}],
    tags: ['shoulders', 'lats', 'core', 'rings', 'dynamic'],
    diff: 7.0,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5, kcalPerRep: [1.9, 2.8],
    desc: 'From the tuck back lever position on rings, actively rise back to the inverted hang. The ring instability during the concentric rise adds coordination demand to the strength requirement.',
    cues: 'From tuck BL on rings, drive hips overhead. Keep the rings from swinging during the rise — this requires active ring compression throughout the concentric pull.',
    equipment: 'Gymnastic rings', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2161,
    name: 'Straddle BL | Rise | (Bar)',
    alt: 'Straddle back lever concentric rise bar',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}, {n:'Glutes', p:true}],
    tags: ['shoulders', 'lats', 'core', 'bar', 'dynamic'],
    diff: 8.3,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5, kcalPerRep: [2.3, 3.4],
    desc: 'Rising from the straddle back lever position back to the inverted hang on bar — the concentric straddle movement. Requires strong shoulder extension to drive the wide-leg body overhead from horizontal.',
    cues: 'From straddle BL, maintain the straddle spread and drive hips overhead. The straddle wide-leg position must be held throughout the rise — avoid closing the legs until inverted.',
    equipment: 'Pull-up bar', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2162,
    name: 'Straddle BL | Rise | (Rings)',
    alt: 'Straddle back lever concentric rise rings',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}, {n:'Glutes', p:true}],
    tags: ['shoulders', 'lats', 'core', 'rings', 'dynamic'],
    diff: 8.8,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:4, si:2, hip:4, groin:3, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5, kcalPerRep: [2.4, 3.6],
    desc: 'Straddle back lever rise on rings. Concentric straddle rise from horizontal to inverted on free-hanging rings — challenging ring control during the dynamic phase.',
    cues: 'From straddle BL on rings, drive hips overhead while keeping rings compressed. The rings will want to swing outward as the body rises — resist with strong shoulder pull.',
    equipment: 'Gymnastic rings', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2163,
    name: 'Full BL | Rise | (Bar)',
    alt: 'Full back lever concentric rise bar',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}, {n:'Hip Flexors', p:true}, {n:'Glutes', p:true}],
    tags: ['shoulders', 'lats', 'core', 'bar', 'dynamic'],
    diff: 9.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5, kcalPerRep: [2.8, 4.2],
    desc: 'Rising from the full back lever (legs together, body horizontal) to the inverted hang — the complete concentric back lever movement. Requires the full static hold to be achievable before the rise is possible.',
    cues: 'From full BL, drive the entire straight body overhead to inverted. Do not break the straight-body line during the rise. Full BL static must be mastered first.',
    equipment: 'Pull-up bar', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2164,
    name: 'Full BL | Rise | (Parallettes)',
    alt: 'Full back lever concentric rise parallettes',
    muscles: [{n:'Biceps', p:true}, {n:'Shoulders', p:true}, {n:'Lats', p:true}, {n:'Core', p:true}, {n:'Hip Flexors', p:true}, {n:'Glutes', p:true}],
    tags: ['shoulders', 'lats', 'core', 'parallettes', 'dynamic'],
    diff: 9.3,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5, kcalPerRep: [2.7, 4.1],
    desc: 'Full back lever rise on parallettes — wrist-neutral concentric rise from horizontal to inverted. The preferred equipment for building full BL rise strength without wrist interference.',
    cues: 'From full BL on parallettes, drive the straight body overhead. Neutral grip lets the shoulder and posterior chain focus purely on the concentric strength expression.',
    equipment: 'Parallettes', position: 'InvertedDynamic', youtube: 'LINK_TODO'
  });

  // ── ADDITIONAL PREP ENTRIES ──────────────────────────────────────────────────
  entries.push({
    id: 2165,
    name: 'German Hang | (Parallettes)',
    alt: 'German hang on parallettes · parallel bar shoulder stretch',
    muscles: [{n:'Biceps', p:false}, {n:'Shoulders', p:true}, {n:'Chest', p:false}],
    tags: ['shoulders', 'chest', 'parallettes', 'prep'],
    diff: 3.5,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 4, strength: 2, kcalPerRep: [0.8, 1.3],
    desc: 'German hang on parallettes — from an inverted position on two parallel bars or parallettes, the body hangs below with arms behind in shoulder extension. The neutral grip and separate handles make this more accessible than bar German hang for athletes with wrist sensitivity.',
    cues: 'Support on parallel bars or parallettes at shoulder width, rotate backward into the hang position. Neutral grip removes wrist torsion. Aim to straighten the arms progressively as shoulder flexibility develops.',
    equipment: 'Parallettes', position: 'Hang', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2166,
    name: 'Straddle German Hang | (Bar)',
    alt: 'Straddle German hang bar · wide-leg shoulder hang',
    muscles: [{n:'Shoulders', p:true}, {n:'Hip Flexors', p:false}, {n:'Groin', p:false}],
    tags: ['shoulders', 'core', 'bar', 'prep'],
    diff: 4.2,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:1, si:1, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 5, strength: 2, kcalPerRep: [0.7, 1.2],
    desc: 'German hang performed with legs in a wide straddle. The straddle position reduces the amount of shoulder extension range needed to clear the bar, making this more accessible for athletes still building shoulder flexibility. Also develops hip abductor and inner-thigh flexibility simultaneously.',
    cues: 'From a wide-straddle hang, lean back into the German hang position. The straddle allows the hips to pass between the arms more easily. Hold the bottom position and breathe into the shoulder stretch.',
    equipment: 'Pull-up bar', position: 'Hang', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2167,
    name: 'Straddle German Hang | (Rings)',
    alt: 'Straddle German hang rings',
    muscles: [{n:'Shoulders', p:true}, {n:'Hip Flexors', p:false}, {n:'Groin', p:false}],
    tags: ['shoulders', 'core', 'rings', 'prep'],
    diff: 4.5,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:1, si:1, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 5, strength: 2, kcalPerRep: [0.8, 1.3],
    desc: 'Straddle German hang on rings — rings allow the wrists to self-rotate to the most comfortable angle during the wide-leg hang. Combines shoulder extension flexibility development with ring stabilisation practice.',
    cues: 'Wide straddle, rings rotate freely. Let the rings settle at the natural angle as the body hangs in straddle German hang. A key ring back lever preparation drill.',
    equipment: 'Gymnastic rings', position: 'Hang', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2168,
    name: 'Straddle German Hang | (Parallettes)',
    alt: 'Straddle German hang parallettes',
    muscles: [{n:'Shoulders', p:true}, {n:'Hip Flexors', p:false}, {n:'Groin', p:false}],
    tags: ['shoulders', 'core', 'parallettes', 'prep'],
    diff: 4.0,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:1, si:1, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 5, strength: 2, kcalPerRep: [0.7, 1.2],
    desc: 'Straddle German hang on parallettes — neutral grip wide-leg shoulder hang, the most comfortable version of the straddle German hang. Ideal for athletes with wrist sensitivity building back lever shoulder flexibility.',
    cues: 'Wide straddle, neutral grip parallette German hang. The most joint-friendly option for shoulder-extension range-of-motion development.',
    equipment: 'Parallettes', position: 'Hang', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2169,
    name: 'German Hang | Bent Arm | (Bar)',
    alt: 'Bent arm German hang · relaxed shoulder hang',
    muscles: [{n:'Shoulders', p:true}, {n:'Biceps', p:false}, {n:'Chest', p:false}],
    tags: ['shoulders', 'chest', 'bar', 'prep'],
    diff: 3.0,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 2, mobility: 3, strength: 1, kcalPerRep: [0.5, 0.9],
    desc: 'Bent-arm German hang — elbows slightly bent during the shoulder-extension hang. The bent arms reduce the bicep-tendon and elbow stress compared to the straight-arm version, making this the entry point for athletes new to shoulder extension flexibility work or with prior elbow issues.',
    cues: 'Allow a slight elbow bend as you hang in the German hang position. Do not lock out the elbows. Gradually straighten the arms over weeks as the shoulder and elbow tolerance builds.',
    equipment: 'Pull-up bar', position: 'Hang', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2170,
    name: 'German Hang | Bent Arm | (Rings)',
    alt: 'Bent arm German hang rings',
    muscles: [{n:'Shoulders', p:true}, {n:'Biceps', p:false}, {n:'Chest', p:false}],
    tags: ['shoulders', 'chest', 'rings', 'prep'],
    diff: 3.2,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 2, mobility: 3, strength: 1, kcalPerRep: [0.5, 1.0],
    desc: 'Bent-arm German hang on rings — the ring version lets the wrists rotate freely while maintaining a slight elbow bend. The most accessible entry to German hang flexibility work for ring athletes.',
    cues: 'Slight elbow bend, rings rotate to natural position. The most forgiving German hang variant — ideal starting point for ring back lever flexibility development.',
    equipment: 'Gymnastic rings', position: 'Hang', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2171,
    name: 'Half Lay Skin the Cat | (Bar)',
    alt: 'Half lay skin the cat · extended leg rotation bar',
    muscles: [{n:'Lats', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true}, {n:'Hip Flexors', p:false}],
    tags: ['shoulders', 'lats', 'core', 'bar', 'prep'],
    diff: 5.5,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:2, si:1, hip:3, groin:1, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 4, strength: 3, kcalPerRep: [1.4, 2.3],
    desc: 'Skin the cat with one leg extended throughout the full rotation. The asymmetric half-lay body position during the arc provides direct preparation for the half-lay back lever and tests the shoulder flexibility with a longer moment arm than the tucked version.',
    cues: 'Extend one leg throughout the entire rotation — maintain the extension through the inverted phase and into the German hang. The extended leg significantly increases shoulder flexibility demand during the descent.',
    equipment: 'Pull-up bar', position: 'Hang', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2172,
    name: 'Half Lay Skin the Cat | (Rings)',
    alt: 'Half lay skin the cat rings',
    muscles: [{n:'Lats', p:true}, {n:'Shoulders', p:true}, {n:'Core', p:true}, {n:'Hip Flexors', p:false}],
    tags: ['shoulders', 'lats', 'core', 'rings', 'prep'],
    diff: 6.0,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:2, si:1, hip:3, groin:1, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 3, kcalPerRep: [1.5, 2.4],
    desc: 'Half-lay skin the cat on rings — one leg extended throughout the ring rotation. The ring freedom aids the wrist during the arc while the extended leg prepares the half-lay back lever shoulder demands.',
    cues: 'One leg extended through the full rotation on rings. Let rings rotate naturally. The extended leg makes the ring arc significantly more demanding than the standard ring STC.',
    equipment: 'Gymnastic rings', position: 'Hang', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2173,
    name: 'German Hang | Fingertip | (Bar)',
    alt: 'Fingertip German hang bar',
    muscles: [{n:'Shoulders', p:true}, {n:'Biceps', p:false}, {n:'Chest', p:false}],
    tags: ['shoulders', 'chest', 'bar', 'prep', 'fingertip'],
    diff: 5.0,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 4, strength: 2, kcalPerRep: [0.7, 1.1],
    desc: 'German hang with fingertip-only grip on bar. Combines shoulder extension flexibility development with significant finger tendon conditioning — preparing both the shoulder and grip for fingertip back lever work.',
    cues: 'Fingertip contact only on the bar in the German hang position. The shoulder stretch is the main goal — the fingertip grip adds tendon conditioning bonus. Start with shorter holds than the full-grip German hang.',
    equipment: 'Pull-up bar', position: 'Hang', youtube: 'LINK_TODO'
  });
  entries.push({
    id: 2174,
    name: 'German Hang | Fingertip | (Rings)',
    alt: 'Fingertip German hang rings',
    muscles: [{n:'Shoulders', p:true}, {n:'Biceps', p:false}, {n:'Chest', p:false}],
    tags: ['shoulders', 'chest', 'rings', 'prep', 'fingertip'],
    diff: 5.5,
    str: {suit:false, eff:1}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 4, strength: 2, kcalPerRep: [0.8, 1.2],
    desc: 'German hang fingertip grip on rings — rings rotate to natural wrist angle while fingertips condition the grip tendons. A useful combination drill for ring fingertip back lever preparation.',
    cues: 'Fingertip on rings in the German hang position. The ring rotation keeps the wrist comfortable while the fingertip load conditions the tendons. Shorter holds than full-grip German hang.',
    equipment: 'Gymnastic rings', position: 'Hang', youtube: 'LINK_TODO'
  });

  const normalizedEntries = entries.map(exercise => ({ ...exercise }));

  window.backleverStaticWorkouts  = normalizedEntries.filter(ex => ex.position === 'Inverted');
  window.backleverPrepWorkouts    = normalizedEntries.filter(ex => ex.position === 'Hang');
  window.backleverDynamicWorkouts = normalizedEntries.filter(ex => ex.position === 'InvertedDynamic');
  return normalizedEntries;
})();
