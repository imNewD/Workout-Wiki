/* ══════════════════════════════════════════════════════════════
   GRND // WORKOUT WIKI — FRONT LEVER LIBRARY DATA
   frontlever-data.js  ·  SINGLE SOURCE OF TRUTH for all front lever exercises.

   LOAD ORDER: this file must load BEFORE isometric-data.js and pullup-data.js.

   Exposes (globals):
     frontleverBaseStatics   — base static holds  → consumed by isometric-data.js
     frontleverBasePulls     — base pull-up vars  → consumed by pullup-data.js
     frontlevers             — complete front lever exercise library
     window.frontleverStaticWorkouts
     window.frontleverPullWorkouts
══════════════════════════════════════════════════════════════ */

function cloneExercise(exercise, overrides = {}) {
  return { ...exercise, ...overrides };
}

/* ── BASE STATIC HOLDS ────────────────────────────────────────
   These are the canonical front lever isometric progressions.
   isometric-data.js spreads frontleverBaseStatics into its array.
──────────────────────────────────────────────────────────────── */

const _flTuck = {
  id: 13,
  name: "Tuck FL | (Bar)",
  alt: "Tuck front lever hold · front lever tuck",
  muscles: [
    {n:"Lats", p:true},
    {n:"Core", p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps", p:false}
  ],
  tags: ["back", "shoulders", "core"],
  diff: 5.3,
  str: {suit:true, eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true, eff:3},
  risk: 2,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
  technique: 3,
  mobility: 2,
  strength: 3,
  kcalPerRep: [1.5, 2.5],
  desc: "A front lever with both knees tucked — hanging from a bar with the face pointing upward, hips at bar height, body approximately horizontal. The shortened lever makes this the entry point for front lever training. The lats and core work isometrically to resist the downward pull of gravity on the tucked body.",
  cues: "Hips must reach bar height — a sagging hip is a half-position, not a tuck front lever. Depress the scapulae and pull them together, activating the lats maximally. Straighten one leg and pull it back to parallel as a step toward the straddle.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flStraddle = {
  id: 14,
  name: "Straddle FL | (Bar)",
  alt: "Straddle front lever · wide-leg front lever",
  muscles: [
    {n:"Lats", p:true},
    {n:"Core", p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps", p:false}
  ],
  tags: ["back", "shoulders", "core"],
  diff: 8.2,
  str: {suit:true, eff:5},
  vol: {suit:false, eff:1},
  end: {suit:false, eff:1},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:3, groin:2, knee:0, ankle:0, foot:0},
  technique: 4,
  mobility: 2,
  strength: 5,
  kcalPerRep: [3, 5],
  desc: "A front lever with the legs extended and straddled wide — reducing the lever relative to the full front lever by moving leg mass toward the centre. The lats and posterior shoulder chain are under heavy isometric load through the full hold. A true strength benchmark and the standard bridge to the full front lever.",
  cues: "Legs fully extended and as wide as comfortable — wider is mechanically easier, so use that advantage during early straddle lever training. Scapular depression and retraction must be maximal. The body should be completely horizontal; any downward sag at the hips is a sign of insufficient current strength.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flFull = {
  id: 15,
  name: "Full FL | (Bar)",
  alt: "Front lever hold · straight front lever",
  muscles: [
    {n:"Lats", p:true},
    {n:"Core", p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps", p:false}
  ],
  tags: ["back", "shoulders", "core"],
  diff: 8.5,
  str: {suit:true, eff:5},
  vol: {suit:false, eff:1},
  end: {suit:false, eff:1},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
  technique: 5,
  mobility: 2,
  strength: 5,
  kcalPerRep: [4, 7],
  hof: true,
  desc: "The full front lever — hanging from a bar or rings, face upward, body completely horizontal and rigid, arms fully extended. The lats are the primary mover holding the body against gravity at a severe mechanical disadvantage. One of the most recognised and respected strength benchmarks in calisthenics; a genuine 3-second hold at true horizontal is considered elite by any standard.",
  cues: "True horizontal is strict — use video review. The body must be in a hollow position: posterior pelvic tilt, ribcage down, no lower back arch. Any arch artificially shortens the lever and makes the position look held when it is not. Legs together, toes pointed.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

/* Bar-only: physical hip contact with the apparatus is not achievable on rings
   (strap interference) or standard parallettes. No parallettes/rings variants
   are defined; this is intentional, not a missing-data gap. */
const _flHipToBar = {
  id: 1100,
  name: "Hip-to-Bar FL | (Bar)",
  alt: "Hip to bar front lever · bar-contact front lever",
  muscles: [
    {n:"Lats", p:true},
    {n:"Core", p:true},
    {n:"Shoulders", p:true},
    {n:"Hip Flexors", p:false}
  ],
  tags: ["back", "shoulders", "core"],
  diff: 8.7,
  str: {suit:true, eff:5},
  vol: {suit:false, eff:1},
  end: {suit:false, eff:1},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:0, ankle:0, foot:0},
  technique: 5,
  mobility: 3,
  strength: 5,
  hof: true,
  kcalPerRep: [4.5, 7.5],
  desc: "A front lever hold performed with the hips maintained in contact with the bar throughout the hold. The body remains rigid and supine, but the bar-to-hip contact changes the shoulder and core alignment, adding a unique control challenge as the hips anchor the lever closer to the bar.",
  cues: "Press the hips into the bar and keep the entire body tight. Avoid letting the lower back arch or the hips drift away; the contact point should stay stable while the shoulders remain depressed and the legs stay straight.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

/* ── BASE PULL-UP VARIANTS ────────────────────────────────────
   These are the canonical front lever pull-up progressions.
   pullup-data.js spreads frontleverBasePulls into its array.
──────────────────────────────────────────────────────────────── */

/* NOTE: The Pantheon also contains id:118 "FL Pull-Up" as a gated version of
   this movement. id:77 serves the normal workout library; id:118 gates behind
   isometric-15 + pullup-100. Same movement — different roles. Keep both. */
const _flPullFull = {
  id: 77,
  name: "FL | Pull-Up (Bar)",
  alt: "Front lever row · horizontal bar pull",
  muscles: [
    {n:"Lats", p:true},
    {n:"Core", p:true},
    {n:"Rear Delts", p:true},
    {n:"Biceps", p:false}
  ],
  tags: ["back", "core", "shoulders"],
  diff: 10,
  hof: true,
  str: {suit:true, eff:5},
  vol: {suit:false, eff:1},
  end: {suit:false, eff:1},
  risk: 4,
  joints: {fingers:2, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
  technique: 5,
  mobility: 2,
  strength: 5,
  kcalPerRep: [0.44, 0.79],
  desc: "A pull-up performed while maintaining a full front lever — body completely horizontal, face-up, parallel to the ground — throughout the entire range of motion. The hands pull the bar toward the torso while the front lever position is held rigid from start to finish. Simultaneously requires full front lever isometric strength and the concentric pulling strength to perform reps from that position. The absolute pinnacle of horizontal pulling strength in calisthenics and gymnastics.",
  cues: "The full front lever static hold must be well-established before attempting any pulling reps. Tuck and advanced-tuck front lever pull-ups are the developmental progressions. Even a single full-range rep is an exceptional feat.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flPullTuck = {
  id: 99,
  name: "Tuck FL | Pull-Up (Bar)",
  alt: "Tuck FL pull · knees-tucked front lever row",
  muscles: [
    {n:"Lats", p:true},
    {n:"Core", p:true},
    {n:"Rear Delts", p:true},
    {n:"Biceps", p:false}
  ],
  tags: ["back", "core", "shoulders"],
  diff: 7.5,
  str: {suit:true, eff:5},
  vol: {suit:false, eff:1},
  end: {suit:false, eff:1},
  risk: 3,
  joints: {fingers:3, wrist:4, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
  technique: 5,
  mobility: 2,
  strength: 4,
  kcalPerRep: [0.35, 0.63],
  desc: "A pull-up performed while maintaining a tuck front lever position — knees pulled to the chest, body roughly horizontal, face-up, parallel to the ground — from start to finish. The tuck reduces the lever arm of the legs compared to the full FL Pull-Up , making this the primary developmental progression before the advanced tuck and full front lever versions. Simultaneously requires tuck front lever isometric strength and concentric pulling from the horizontal position. The direct precursor to the Adv Tuck FL Pull-Up.",
  cues: "The tuck front lever static hold must be stable before adding pulling reps. Maintain the horizontal body position throughout — any hip drop reduces it to a standard pull-up. Even one clean rep is a meaningful strength benchmark.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flPullAdvanced = {
  id: 100,
  name: "Adv Tuck FL | Pull-Up (Bar)",
  alt: "Advanced tuck FL pull · half-extended front lever pull-up",
  muscles: [
    {n:"Lats", p:true},
    {n:"Core", p:true},
    {n:"Rear Delts", p:true},
    {n:"Biceps", p:false}
  ],
  tags: ["back", "core", "shoulders"],
  diff: 8.5,
  hof: false,
  str: {suit:true, eff:5},
  vol: {suit:false, eff:1},
  end: {suit:false, eff:1},
  risk: 4,
  joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
  technique: 5,
  mobility: 2,
  strength: 5,
  kcalPerRep: [0.4, 0.72],
  desc: "A pull-up performed while holding an advanced tuck front lever position — hips extended fully, knees pulled to the chest, body parallel to the ground — throughout the entire movement. The extended hip position dramatically lengthens the lever arm compared to the tuck version, placing the core, hip flexors, and lat under near-full front lever stress while pulling. The bridge between the Tuck FL Pull-Up  and the full FL Pull-Up . Performing even a single clean rep requires extraordinary pulling and core strength.",
  cues: "The advanced tuck front lever static hold must be well established before attempting reps. Any hip flexion loss during the pull collapses the position into the tuck variation. Progress conservatively — the jump from tuck to advanced tuck is large.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flPullStraddle = {
  id: 130,
  name: "Straddle FL | Pull-Up (Bar)",
  alt: "Straddle FL pull · wide-leg front lever row",
  muscles: [
    {n:"Lats", p:true},
    {n:"Core", p:true},
    {n:"Rear Delts", p:true},
    {n:"Biceps", p:false}
  ],
  tags: ["back", "core", "shoulders"],
  diff: 9,
  str: {suit:true, eff:5},
  vol: {suit:false, eff:1},
  end: {suit:false, eff:1},
  risk: 4,
  joints: {wrist:0, elbow:1, shoulder:2, neck:0, lowerBack:1, hip:1, knee:0, fingers:0, thoracic:1, si:0, groin:1, ankle:0, foot:0},
  technique: 5,
  mobility: 3,
  strength: 5,
  kcalPerRep: [0.42, 0.75],
  desc: "A pull-up performed while maintaining a straddle front lever position — legs spread wide and fully extended, body horizontal and face-up, parallel to the ground — throughout the entire range of motion. The straddle reduces the lever arm compared to the full straight-body front lever by spreading the legs wide, while significantly exceeding the advanced tuck variant in both core demand and effective leverage. The natural intermediate between the Adv Tuck FL Pull-Up  and the full FL Pull-Up , mirroring the straddle step present in the ICM family. Requires a stable straddle front lever static hold before any pulling reps are attempted.",
  cues: "The straddle front lever static hold must be well established before adding the pull. Legs stay fully extended and spread throughout — any knee bend drops the position into the advanced tuck variant. Hips must remain at bar height; sagging hips reduce this to an L-sit-adjacent pull-up rather than a true lever pull.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

/* ── PUBLIC BASE ARRAYS ───────────────────────────────────────
   Consumed by isometric-data.js and pullup-data.js respectively.
   frontlever-data.js must be loaded first in your HTML.
──────────────────────────────────────────────────────────────── */
const frontleverBaseStatics = [_flTuck, _flStraddle, _flFull, _flHipToBar];
const frontleverBasePulls   = [_flPullFull, _flPullTuck, _flPullAdvanced, _flPullStraddle];

/* ── ID SETS (used by index.html for filtering) ──────────────── */
const frontleverIsoIds  = new Set([13, 14, 15, 1100]);
const frontleverPullIds = new Set([77, 99, 100, 130]);

/* ── COMPLETE FRONT LEVER LIBRARY ─────────────────────────── */
const frontlevers = (() => {
  const entries = [...frontleverBaseStatics, ...frontleverBasePulls];

  const tuck         = _flTuck;
  const straddle     = _flStraddle;
  const full         = _flFull;
  const pullFull     = _flPullFull;
  const pullTuck     = _flPullTuck;
  const pullAdvanced = _flPullAdvanced;
  const pullStraddle = _flPullStraddle;




    /* ── BAR STATIC VARIANTS ─────────────────────────────── */

    entries.push(cloneExercise(tuck, {
      id: 1001,
      name: 'Adv Tuck FL | (Bar)',
      alt: 'Advanced tuck front lever hold · half-extended front lever',
      tags: ['back', 'shoulders', 'core', 'bar'],
      diff: 7,
      // Hips extended further than tuck → longer moment arm → more lowerBack load
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      desc: 'A front lever hold that sits between the tuck and straddle positions. The hips extend farther than the tuck while the knees remain tucked, building the longer lever strength needed for advanced front lever progressions.',
      cues: 'Keep the shoulders depressed and the body rigid. Extend the hips more than a tuck hold, but maintain the tucked knee position to keep the lever manageable.',
      equipment: 'Bar',
      position: 'Supine',
    }));

    entries.push(cloneExercise(full, {
      id: 1006,
      name: 'One-Leg FL | (Bar)',
      alt: 'One-leg front lever hold on pull-up bar',
      tags: ['back', 'shoulders', 'core', 'bar'],
      diff: 8.4,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A one-leg front lever hold on a pull-up bar. One leg is fully extended while the opposite knee remains tucked, creating an asymmetric lever that builds shoulder, lat, and core strength while keeping the moment arm slightly reduced compared to the full front lever.',
      cues: 'Keep the shoulders depressed, the torso rigid, and the extended leg straight. Hold the tucked leg close to the body and alternate sides across sets to balance both hips and lats.',
    }));

    entries.push(cloneExercise(full, {
      id: 1007,
      name: 'One-Leg FL | (Parallettes)',
      alt: 'One-leg front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      diff: 8.4,
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A one-leg front lever performed on parallettes. The neutral grip reduces wrist strain while the asymmetric leg position increases the lever length and targets unilateral stability in the hips, core, and shoulders.',
      cues: 'Keep the body rigid and the extended leg straight. Use the neutral handles to maintain wrist comfort while holding the tucked leg close and controlling the shoulder line.',
    }));

    entries.push(cloneExercise(full, {
      id: 1205,
      name: 'One-Leg FL | (Rings)',
      alt: 'One-leg front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A one-leg front lever on gymnastic rings. One leg extends fully while the opposite knee stays tucked, demanding unilateral stability and control as the rings add rotation and balance challenges.',
      cues: 'Keep the shoulders depressed and the body straight. Control the rings and hold the tucked leg tight to prevent rotation, then alternate legs to develop both sides evenly.',
    }));

    /* ── PARALLETTES STATIC VARIANTS ─────────────────────── */
    // Neutral wrist grip throughout → wrist:2 vs bar wrist:3

    entries.push(cloneExercise(tuck, {
      id: 1002,
      name: 'Tuck FL | (Parallettes)',
      alt: 'Tuck front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      // Neutral grip reduces wrist load; tuck keeps lowerBack moderate and knee loaded
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A tuck front lever performed on parallettes. The neutral wrist position and handle height create a different leverage feel while preserving the horizontal tuck lever shape.',
    }));
    entries.push(cloneExercise(straddle, {
      id: 1003,
      name: 'Straddle FL | (Parallettes)',
      alt: 'Straddle front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      // Wider legs → groin:1, longer lever → lowerBack:4, reduced knee vs tuck
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A straddle front lever performed on parallettes. The wider leg position reduces the lever while the parallettes keep wrist stress low and the shoulder line stable.',
    }));
    entries.push(cloneExercise(full, {
      id: 1004,
      name: 'Full FL | (Parallettes)',
      alt: 'Full front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      // Full straight body → max lowerBack, no knee, no groin
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'The full front lever performed on parallettes. The alternative handle surface changes the shoulder and wrist loading slightly, while the core and lat strength demands remain the same.',
    }));
    entries.push(cloneExercise(tuck, {
      id: 1005,
      name: 'Adv Tuck FL | (Parallettes)',
      alt: 'Advanced tuck front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      diff: 7,
      // Advanced tuck: hips further extended → lowerBack:4 vs tuck:3; knees still tucked
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'An advanced tuck front lever on parallettes. The hips extend more than the standard tuck while the knees remain tucked, using the neutral parallettes grip to support a longer lever position.',
      cues: 'Maintain body tension and keep the knees tucked. The parallettes allow a cleaner wrist angle for this longer tuck variation.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 1401,
      name: 'One-Arm Tuck FL | (Bar)',
      alt: 'One-arm tuck front lever hold on pull-up bar',
      tags: ['back', 'shoulders', 'core', 'bar'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A one-arm tuck front lever hold on a pull-up bar. The support arm carries most of the load while the free arm helps balance the body, building unilateral lat, shoulder, and core control in a front lever shape.',
      cues: 'Keep the torso horizontal and the unsupported arm controlled. Maintain shoulder depression and a tight hollow body throughout the hold.',
    }));
    entries.push(cloneExercise(tuck, {
      id: 1402,
      name: 'One-Arm Tuck FL | (Parallettes)',
      alt: 'One-arm tuck front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      diff: 9,
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A one-arm tuck front lever performed on parallettes. The neutral handle grip eases wrist strain while the unilateral hold increases shoulder and core stability on the supporting side.',
      cues: 'Keep the body rigid and the free side steady. Focus on pressing the supporting shoulder down and keeping the hips aligned with the shoulders.',
    }));


    entries.push(cloneExercise(tuck, {
      id: 1410,
      name: 'One-Arm Tuck FL | (Rings)',
      alt: 'One-arm tuck front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      diff: 9.5,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A one-arm tuck front lever on gymnastic rings. Ring instability amplifies the unilateral balance and shoulder control demands on top of the standard one-arm tuck lever.',
      cues: 'Control ring rotation while keeping the torso horizontal and the unsupported arm steady. Maintain shoulder depression and alternate arms across sets.',
    }));

    /* ── ONE-ARM ADVANCED TUCK FL ─────────────────────────────────────────────
       Missing intermediate between One-Arm Tuck FL and Pantheon One-Arm FL (id:119).
    ──────────────────────────────────────────────────────────────────────────── */

    entries.push(cloneExercise(tuck, {
      id: 1420,
      name: 'One-Arm Adv Tuck FL | (Bar)',
      alt: 'One-arm advanced tuck front lever hold on pull-up bar',
      tags: ['back', 'shoulders', 'core', 'bar'],
      diff: 9.3,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A one-arm advanced tuck front lever on a pull-up bar. The hips extend further than a standard tuck while the knees remain tucked, increasing the lever length and the unilateral demand on the lat, shoulder, and core.',
      cues: 'Maintain shoulder depression and extend the hips past the tuck. Keep the knees drawn in and the free arm controlled throughout the hold.',
    }));
    entries.push(cloneExercise(tuck, {
      id: 1421,
      name: 'One-Arm Adv Tuck FL | (Parallettes)',
      alt: 'One-arm advanced tuck front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      diff: 9.3,
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A one-arm advanced tuck front lever on parallettes. The neutral grip reduces wrist stress while the extended hip position increases lever demand and targets unilateral lat and shoulder stability.',
      cues: 'Keep the hips extended past the tuck. Use the neutral handle to maintain wrist comfort while holding the free arm steady.',
    }));
    entries.push(cloneExercise(tuck, {
      id: 1422,
      name: 'One-Arm Adv Tuck FL | (Rings)',
      alt: 'One-arm advanced tuck front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      diff: 9.8,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A one-arm advanced tuck front lever on rings. The extended hip position and ring instability combine to push the unilateral shoulder and core demand close to the Pantheon threshold.',
      cues: 'Control ring rotation and extend the hips fully. Keep the knees tucked and the working shoulder packed while managing ring instability through the hold.',
    }));

    /* ── ONE-ARM STRADDLE FL ──────────────────────────────────────────────────
       Final bridge before Pantheon One-Arm FL (id:119/330/340).
    ──────────────────────────────────────────────────────────────────────────── */

    entries.push(cloneExercise(straddle, {
      id: 1430,
      name: 'One-Arm Straddle FL | (Bar)',
      alt: 'One-arm straddle front lever hold on pull-up bar',
      tags: ['back', 'shoulders', 'core', 'bar'],
      diff: 9.6,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:3, groin:2, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A one-arm straddle front lever on a pull-up bar. Legs spread wide reduce the lever arm while the one-arm support creates an asymmetric challenge demanding exceptional unilateral lat, shoulder, and core control.',
      cues: 'Depress the working shoulder hard and spread the legs wide to reduce the lever. Keep the body horizontal and alternate arms across sets.',
    }));
    entries.push(cloneExercise(straddle, {
      id: 1431,
      name: 'One-Arm Straddle FL | (Parallettes)',
      alt: 'One-arm straddle front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      diff: 9.6,
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:3, groin:2, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A one-arm straddle front lever on parallettes. The neutral grip reduces wrist stress while the wide leg position shortens the lever, making this a slightly more accessible one-arm lever step before the full straight-body Pantheon version.',
      cues: 'Keep the hips level and the legs spread wide. Focus on shoulder depression on the working side and use the neutral handles to maintain wrist comfort.',
    }));
    entries.push(cloneExercise(straddle, {
      id: 1432,
      name: 'One-Arm Straddle FL | (Rings)',
      alt: 'One-arm straddle front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      diff: 10,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:3, groin:2, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A one-arm straddle front lever on gymnastic rings. Ring instability on top of the unilateral straddle lever creates an extreme coordination and stability challenge that borders on Pantheon territory.',
      cues: 'Control ring rotation and keep the legs spread wide. Depress the working shoulder and manage ring drift throughout the hold.',
    }));

    /* ── RINGS STATIC VARIANTS ───────────────────────────── */
    // Ring instability → wrist:3 (rotation management), shoulder:5 same as bar

    entries.push(cloneExercise(tuck, {
      id: 1201,
      name: 'Tuck FL | (Rings)',
      alt: 'Tuck front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      // Rings: wrist matches bar (pronated-to-neutral rotation under load)
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A tuck front lever performed on gymnastic rings. The rotating handles add a stability challenge while preserving the horizontal tuck lever shape.',
      cues: 'Keep the shoulders depressed and the body rigid. Manage ring instability by controlling the path of the handles as you hold the tuck lever.',
    }));
    entries.push(cloneExercise(tuck, {
      id: 1202,
      name: 'Adv Tuck FL | (Rings)',
      alt: 'Advanced tuck front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      // Advanced hips → lowerBack:4
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      diff: 7,
      equipment: 'Rings',
      position: 'Supine',
      desc: 'An advanced tuck front lever on rings. The hips are extended farther than a standard tuck while the knees remain tucked, adding ring stability demands to the longer lever position.',
      cues: 'Maintain body tension and keep the knees tucked. Stay aware of ring rotation and keep the shoulders stable through the hold.',
    }));
    entries.push(cloneExercise(straddle, {
      id: 1203,
      name: 'Straddle FL | (Rings)',
      alt: 'Straddle front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A straddle front lever on rings. The wide leg position reduces the lever arm while ring instability increases the shoulder and core coordination challenge.',
    }));
    entries.push(cloneExercise(full, {
      id: 1204,
      name: 'Full FL | (Rings)',
      alt: 'Full front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'The full front lever performed on gymnastic rings. The rings require extra stability control while the body remains rigid and horizontal.',
    }));

    /* ── HANDS TOGETHER GRIP — BAR STATIC ───────────────────── */
    // Both hands touching each other on the pull-up bar (diamond / close grip)
    // Narrow base concentrates load on fingers and wrists → fingers:4, wrist:4
    // Shoulder stability demand increases due to reduced lateral base

    entries.push(cloneExercise(tuck, {
      id: 1501,
      name: 'Tuck FL | Hands Together (Bar)',
      alt: 'Tuck front lever hold · hands together grip · close grip front lever',
      tags: ['back', 'shoulders', 'core', 'bar', 'close-grip'],
      diff: 7,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A tuck front lever hold performed with both hands touching each other on the pull-up bar. The close grip concentrates stress on the fingers and wrists while demanding greater shoulder stability due to the narrower base.',
      cues: 'Press both hands firmly together and depress the shoulders. Maintain full body tension and keep the hips level with the shoulders throughout the hold.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 1502,
      name: 'Adv Tuck FL | Hands Together (Bar)',
      alt: 'Advanced tuck front lever hold · hands together grip',
      tags: ['back', 'shoulders', 'core', 'bar', 'close-grip'],
      diff: 8,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'An advanced tuck front lever with both hands touching on the pull-up bar. The hips extend further than the standard tuck while the close grip adds finger and wrist stress and requires strong shoulder control from a narrow base.',
      cues: 'Press the hands together and keep the shoulders packed. Extend the hips past the tuck position while keeping the knees drawn toward the chest.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 1503,
      name: 'Straddle FL | Hands Together (Bar)',
      alt: 'Straddle front lever hold · hands together grip',
      tags: ['back', 'shoulders', 'core', 'bar', 'close-grip'],
      diff: 9,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A straddle front lever with both hands touching on the pull-up bar. The wide leg position reduces the lever arm while the close grip challenges the fingers and wrists and demands strong shoulder control throughout the hold.',
      cues: 'Keep the hands pressed together and the arms straight. Spread the legs wide and maintain a strong hollow body position to keep the hips level.',
    }));

    entries.push(cloneExercise(full, {
      id: 1504,
      name: 'Full FL | Hands Together (Bar)',
      alt: 'Full front lever hold · hands together grip',
      tags: ['back', 'shoulders', 'core', 'bar', 'close-grip'],
      diff: 10,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'The full front lever performed with both hands touching each other on the pull-up bar. This elite variation places maximum demand on the wrists and fingers while requiring exceptional shoulder stability from the narrow grip base.',
      cues: 'Keep the hands firmly together and the shoulders depressed throughout. Maintain a rigid hollow body with legs straight and together.',
    }));

    entries.push(cloneExercise(full, {
      id: 1505,
      name: 'One-Leg FL | Hands Together (Bar)',
      alt: 'One-leg front lever hold · hands together grip',
      tags: ['back', 'shoulders', 'core', 'bar', 'close-grip'],
      diff: 9,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A one-leg front lever with both hands touching on the pull-up bar. One leg extends fully while the opposite knee stays tucked, combining the asymmetric lever challenge with the increased finger and wrist demands of the close grip.',
      cues: 'Press the hands firmly together and keep the extended leg straight. Hold the tucked knee close and alternate sides across sets.',
    }));

    /* ── RINGS TOGETHER — STATIC ─────────────────────────── */
    // Rings held close together (touching or nearly touching)
    // Ring instability + close grip → fingers:4, wrist:4; shoulder:5 throughout

    entries.push(cloneExercise(tuck, {
      id: 1701,
      name: 'Tuck FL | Rings Together (Rings)',
      alt: 'Tuck front lever hold · rings together · close rings front lever',
      tags: ['back', 'shoulders', 'core', 'rings', 'close-grip'],
      diff: 8,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A tuck front lever performed with both rings held close together. The close ring position adds wrist and finger stress on top of the usual ring instability, demanding greater shoulder control than a standard tuck front lever on rings.',
      cues: 'Hold the rings close and keep the shoulders depressed. Manage ring rotation while maintaining the tuck shape and horizontal body line.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 1702,
      name: 'Adv Tuck FL | Rings Together (Rings)',
      alt: 'Advanced tuck front lever hold · rings together',
      tags: ['back', 'shoulders', 'core', 'rings', 'close-grip'],
      diff: 8,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'An advanced tuck front lever on rings held close together. The extended hip position and close ring grip combine to challenge the wrists, fingers, and shoulder stability beyond the standard advanced tuck on rings.',
      cues: 'Keep the rings close and the shoulders packed. Extend the hips past the standard tuck while managing ring rotation throughout the hold.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 1703,
      name: 'Straddle FL | Rings Together (Rings)',
      alt: 'Straddle front lever hold · rings together',
      tags: ['back', 'shoulders', 'core', 'rings', 'close-grip'],
      diff: 9,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A straddle front lever on rings held close together. The wide leg position shortens the lever while the close ring grip and ring instability both challenge the wrists and demand steady shoulder control.',
      cues: 'Hold the rings close and spread the legs wide. Depress the shoulders and fight ring rotation with a strong core and steady grip.',
    }));

    entries.push(cloneExercise(full, {
      id: 1704,
      name: 'Full FL | Rings Together (Rings)',
      alt: 'Full front lever hold · rings together',
      tags: ['back', 'shoulders', 'core', 'rings', 'close-grip'],
      diff: 10,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'The full front lever performed on rings held close together. This extreme variation demands elite wrist, finger, and shoulder control while combining the full lever moment arm with ring instability and a close grip.',
      cues: 'Keep the rings close and the body completely rigid. Maintain shoulder depression and prevent any ring drift throughout the hold.',
    }));

    entries.push(cloneExercise(full, {
      id: 1705,
      name: 'One-Leg FL | Rings Together (Rings)',
      alt: 'One-leg front lever hold · rings together',
      tags: ['back', 'shoulders', 'core', 'rings', 'close-grip'],
      diff: 10,
      joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A one-leg front lever on rings held close together. The asymmetric leg position creates unilateral stability demands while the close ring grip and ring rotation add extra challenge to the wrists and shoulders.',
      cues: 'Hold the rings together and keep the extended leg straight. Control ring rotation and alternate legs to develop both sides evenly.',
    }));

    /* ── PARALLETTES SIDE GRIP — STATIC ─────────────────────── */
    // Gripping the sides of the parallette handles: thumbs point up,
    // fingers of each hand face each other across the midline.
    // Unusual wrist angle creates ulnar/radial stress → wrist:4; fingers:3

    entries.push(cloneExercise(tuck, {
      id: 1901,
      name: 'Tuck FL | Side Grip (Parallettes)',
      alt: 'Tuck front lever hold · parallettes side grip · fingers facing grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'side-grip'],
      diff: 7,
      joints: {fingers:3, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A tuck front lever on parallettes gripped from the sides, with thumbs pointing up and fingers of each hand facing each other. The lateral grip angle loads the wrists differently from the standard neutral hold, demanding extra wrist stability throughout the lever.',
      cues: 'Keep the thumbs pointing up and both wrists firm. Depress the shoulders and hold the tuck position with the hips level.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 1902,
      name: 'Adv Tuck FL | Side Grip (Parallettes)',
      alt: 'Advanced tuck front lever hold · parallettes side grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'side-grip'],
      diff: 8,
      joints: {fingers:3, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'An advanced tuck front lever on parallettes using a side grip with fingers facing each other. The extended hip position increases lower back demand while the lateral wrist angle challenges wrist stability under a longer lever.',
      cues: 'Keep the thumbs up and extend the hips past the standard tuck. Brace the wrists and maintain shoulder depression through the hold.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 1903,
      name: 'Straddle FL | Side Grip (Parallettes)',
      alt: 'Straddle front lever hold · parallettes side grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'side-grip'],
      diff: 9,
      joints: {fingers:3, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A straddle front lever on parallettes using a side grip with fingers facing each other. The wide leg position reduces the lever while the lateral grip angle places unique stress on the wrists through the hold.',
      cues: 'Grip the sides of the handles firmly with thumbs up. Spread the legs wide and keep the hips level while bracing the wrists.',
    }));

    entries.push(cloneExercise(full, {
      id: 1904,
      name: 'Full FL | Side Grip (Parallettes)',
      alt: 'Full front lever hold · parallettes side grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'side-grip'],
      diff: 10,
      joints: {fingers:3, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'The full front lever on parallettes using a side grip with fingers facing each other. This elite variation demands strong wrist stability through the unusual lateral angle while the body maintains the full horizontal line.',
      cues: 'Keep the thumbs pointing up and the wrists braced throughout. Maintain shoulder depression and a rigid hollow body with legs together.',
    }));

    entries.push(cloneExercise(full, {
      id: 1905,
      name: 'One-Leg FL | Side Grip (Parallettes)',
      alt: 'One-leg front lever hold · parallettes side grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'side-grip'],
      diff: 9,
      joints: {fingers:3, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A one-leg front lever on parallettes using a side grip with fingers facing each other. The asymmetric leg position reduces the lever while the lateral grip angle creates extra wrist demand through the hold.',
      cues: 'Keep the thumbs up and the extended leg straight. Brace the wrists and alternate legs across sets to develop both sides evenly.',
    }));

    /* ── PARALLETTES BACK GRIP — STATIC ─────────────────────── */
    // Backs of hands face each other: extreme pronation + inward rotation.
    // Wrists under maximum rotational stress → wrist:5, fingers:4

    entries.push(cloneExercise(tuck, {
      id: 2001,
      name: 'Tuck FL | Back Grip (Parallettes)',
      alt: 'Tuck front lever hold · parallettes back grip · knuckles inward grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'back-grip'],
      diff: 8,
      joints: {fingers:4, wrist:5, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A tuck front lever on parallettes with the backs of both hands facing each other — an extreme inward rotation of the wrists. This grip places significant stress on the wrists and forearms while maintaining the same horizontal lever position.',
      cues: 'Brace the wrists firmly before loading. Keep the shoulders depressed and the tuck position stable, limiting hold duration until wrist tolerance is established.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2002,
      name: 'Adv Tuck FL | Back Grip (Parallettes)',
      alt: 'Advanced tuck front lever hold · parallettes back grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'back-grip'],
      diff: 9,
      joints: {fingers:4, wrist:5, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'An advanced tuck front lever on parallettes with the backs of both hands facing each other. The extended hip position adds lower back demand while the extreme wrist angle increases the grip challenge significantly.',
      cues: 'Build wrist tolerance in the tuck variation first. Keep the hips extended past the tuck and brace the wrists firmly throughout the hold.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2003,
      name: 'Straddle FL | Back Grip (Parallettes)',
      alt: 'Straddle front lever hold · parallettes back grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'back-grip'],
      diff: 9,
      joints: {fingers:4, wrist:5, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A straddle front lever on parallettes with the backs of both hands facing each other. The wide leg position reduces the lever while the extreme inward wrist rotation challenges the forearms and wrists intensely.',
      cues: 'Grip firmly and brace the wrists before loading. Spread the legs wide to reduce the lever and keep the hips level throughout.',
    }));

    entries.push(cloneExercise(full, {
      id: 2004,
      name: 'Full FL | Back Grip (Parallettes)',
      alt: 'Full front lever hold · parallettes back grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'back-grip'],
      diff: 10,
      joints: {fingers:4, wrist:5, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'The full front lever on parallettes with the backs of both hands facing each other. An elite and extremely demanding variation that combines the full lever moment arm with maximum rotational wrist stress.',
      cues: 'Only attempt with well-conditioned wrists. Maintain shoulder depression and a completely rigid body, keeping the hold duration conservative.',
    }));

    entries.push(cloneExercise(full, {
      id: 2005,
      name: 'One-Leg FL | Back Grip (Parallettes)',
      alt: 'One-leg front lever hold · parallettes back grip',
      tags: ['back', 'shoulders', 'core', 'parallettes', 'back-grip'],
      diff: 10,
      joints: {fingers:4, wrist:5, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A one-leg front lever on parallettes with the backs of both hands facing each other. The asymmetric leg position slightly reduces the lever while the extreme wrist angle remains highly demanding on the forearms and wrists.',
      cues: 'Build wrist tolerance in easier back-grip holds first. Keep the extended leg straight and alternate sides across sets.',
    }));

    /* ── BAR SUPINATED GRIP — STATIC ─────────────────────────── */
    // Underhand (chin-up style) grip: palms face the body.
    // Shifts load toward biceps and changes shoulder recruitment.
    // wrist:3 (supinated angle); shoulder:4–5 depending on lever length

    entries.push(cloneExercise(tuck, {
      id: 2101,
      name: 'Tuck FL | Supinated Grip (Bar)',
      alt: 'Tuck front lever hold · supinated grip · underhand front lever',
      tags: ['back', 'shoulders', 'core', 'bar', 'supinated'],
      diff: 6,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A tuck front lever held with a supinated (underhand) grip on the pull-up bar. The palms-facing-body position shifts load toward the biceps and alters shoulder recruitment compared to the standard overhand grip, making this a useful progression for those working toward a full front lever.',
      cues: 'Grip the bar underhand and depress the shoulders. Keep the hips level and hold the body rigid — the supinated position tends to feel more natural for beginners.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2102,
      name: 'Adv Tuck FL | Supinated Grip (Bar)',
      alt: 'Advanced tuck front lever hold · supinated grip',
      tags: ['back', 'shoulders', 'core', 'bar', 'supinated'],
      diff: 7,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'An advanced tuck front lever with a supinated grip on the pull-up bar. The extended hip position and underhand grip combine bicep-dominant pulling with core and lower back control at a longer lever.',
      cues: 'Grip underhand and extend the hips past the standard tuck. Keep the knees tucked and the shoulders packed through the hold.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2103,
      name: 'Straddle FL | Supinated Grip (Bar)',
      alt: 'Straddle front lever hold · supinated grip',
      tags: ['back', 'shoulders', 'core', 'bar', 'supinated'],
      diff: 8,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A straddle front lever with a supinated grip on the pull-up bar. The wide leg position reduces the lever arm while the underhand grip shifts shoulder and bicep recruitment compared to the standard pronated version.',
      cues: 'Grip underhand and spread the legs wide. Maintain shoulder depression and a hollow body — the supinated grip makes it easier to keep the elbows locked.',
    }));

    entries.push(cloneExercise(full, {
      id: 2104,
      name: 'Full FL | Supinated Grip (Bar)',
      alt: 'Full front lever hold · supinated grip · underhand front lever',
      tags: ['back', 'shoulders', 'core', 'bar', 'supinated'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'The full front lever performed with a supinated grip on the pull-up bar. This challenging variation develops the full lever at maximum moment arm while using an underhand grip to alter how the shoulders, lats, and biceps share the load.',
      cues: 'Grip underhand and depress the shoulders hard. Maintain a completely rigid body from head to toe — the supinated grip provides slightly more natural elbow lockout.',
    }));

    entries.push(cloneExercise(full, {
      id: 2105,
      name: 'One-Leg FL | Supinated Grip (Bar)',
      alt: 'One-leg front lever hold · supinated grip',
      tags: ['back', 'shoulders', 'core', 'bar', 'supinated'],
      diff: 8,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Supine',
      desc: 'A one-leg front lever with a supinated grip on the pull-up bar. One leg extends fully while the opposite knee stays tucked, combining the asymmetric lever challenge with the altered shoulder and bicep recruitment of the underhand grip.',
      cues: 'Grip underhand and keep the extended leg straight. Hold the tucked knee close and alternate sides to develop both hips and lats evenly.',
    }));

    /* ── RINGS SUPINATED GRIP — STATIC ───────────────────────── */
    // Underhand grip on rings: palms face the body.
    // Ring instability + supination → wrist:3, shoulder:5 throughout

    entries.push(cloneExercise(tuck, {
      id: 2201,
      name: 'Tuck FL | Supinated Grip (Rings)',
      alt: 'Tuck front lever hold · supinated grip on rings · underhand ring front lever',
      tags: ['back', 'shoulders', 'core', 'rings', 'supinated'],
      diff: 7,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A tuck front lever on gymnastic rings held with a supinated grip. The palms-facing-body position shifts load toward the biceps while the rings add rotation and stability demands on top of the standard tuck lever.',
      cues: 'Grip the rings underhand and depress the shoulders. Control ring rotation and hold the tuck position rigid throughout.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2202,
      name: 'Adv Tuck FL | Supinated Grip (Rings)',
      alt: 'Advanced tuck front lever hold · supinated grip on rings',
      tags: ['back', 'shoulders', 'core', 'rings', 'supinated'],
      diff: 8,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'An advanced tuck front lever on rings held with a supinated grip. The extended hip position increases the lever while the underhand ring grip challenges both the biceps and the shoulder stabilizers against ring rotation.',
      cues: 'Grip the rings underhand and extend the hips past the standard tuck. Manage ring rotation while keeping the knees drawn in and the shoulders packed.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2203,
      name: 'Straddle FL | Supinated Grip (Rings)',
      alt: 'Straddle front lever hold · supinated grip on rings',
      tags: ['back', 'shoulders', 'core', 'rings', 'supinated'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A straddle front lever on rings held with a supinated grip. The wide leg position reduces the lever while ring instability and the underhand grip combine to challenge shoulder stability and bicep engagement.',
      cues: 'Grip the rings underhand and spread the legs wide. Fight ring rotation and maintain shoulder depression throughout the hold.',
    }));

    entries.push(cloneExercise(full, {
      id: 2204,
      name: 'Full FL | Supinated Grip (Rings)',
      alt: 'Full front lever hold · supinated grip on rings',
      tags: ['back', 'shoulders', 'core', 'rings', 'supinated'],
      diff: 10,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'The full front lever on gymnastic rings held with a supinated grip. This elite variation combines the maximum lever moment arm with ring instability and an underhand grip, demanding exceptional strength across the lats, biceps, and shoulder stabilizers.',
      cues: 'Grip the rings underhand and depress the shoulders hard. Maintain a completely rigid body and control ring rotation throughout the hold.',
    }));

    entries.push(cloneExercise(full, {
      id: 2205,
      name: 'One-Leg FL | Supinated Grip (Rings)',
      alt: 'One-leg front lever hold · supinated grip on rings',
      tags: ['back', 'shoulders', 'core', 'rings', 'supinated'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Supine',
      desc: 'A one-leg front lever on rings held with a supinated grip. One leg extends fully while the opposite knee stays tucked, combining unilateral lever demands with ring instability and underhand grip recruitment.',
      cues: 'Grip the rings underhand and keep the extended leg straight. Control ring rotation and alternate legs to build even strength on both sides.',
    }));

    /* ── PARALLETTES PULL-UP VARIANTS ────────────────────── */
    // Dynamic pulling → elbow:3 (vs isometric 2); neutral grip → wrist:2

    entries.push(cloneExercise(pullTuck, {
      id: 1101,
      name: 'Tuck FL | Pull-Up (Parallettes)',
      alt: 'Tuck front lever pull-up on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      // Elbow flex under load; tuck means moderate lowerBack, active hip and knee
      joints: {fingers:3, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A tuck front lever pulling variation performed on parallettes. Keep the body horizontal and tucked while pulling the handles toward the torso, preserving the same lever path as the bar version.',
    }));
    entries.push(cloneExercise(pullAdvanced, {
      id: 1102,
      name: 'Adv Tuck FL | Pull-Up (Parallettes)',
      alt: 'Advanced tuck front lever pull-up on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      // Longer moment arm → lowerBack:4; shoulder increases to 5
      joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'An advanced tuck front lever pull-up on parallettes. The hips are more extended than the tucked variant, while the legs remain pulled toward the chest and the body stays horizontal.',
    }));
    entries.push(cloneExercise(pullStraddle, {
      id: 1103,
      name: 'Straddle FL | Pull-Up (Parallettes)',
      alt: 'Straddle front lever pull-up on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A straddle front lever pull-up on parallettes. Legs spread wide reduce the lever arm while the parallel handles keep the wrists neutral and the shoulder line stable.',
    }));
    entries.push(cloneExercise(pullFull, {
      id: 1104,
      name: 'FL | Pull-Up (Parallettes)',
      alt: 'Full front lever pull-up on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      // Full straight body dynamic: max shoulder and lowerBack, no knee
      joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A full front lever pull-up performed on parallettes. The body stays rigid and horizontal while the parallettes provide a neutral grip and an alternate lever feel compared to the bar version.',
    }));

    /* ── BAR PULL-UP VARIANTS ───────────────────────────── */
    // Dynamic frontal pulling that mimics the front lever line on a bar

    /* FL Row is performed in full-body HORIZONTAL position, not adv-tuck.
       Cloned from pullAdvanced for its hof:false/kcalPerRep defaults only;
       joints and position are explicitly overridden to full-body values.
       All FL Row variants (parallettes, rings-together, etc.) follow the same rule. */
    entries.push(cloneExercise(pullAdvanced, {
      id: 1403,
      name: 'FL | Row (Bar)',
      alt: 'Front lever style row on pull-up bar',
      tags: ['back', 'core', 'shoulders', 'bar'],
      diff: 8,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A horizontal row variation performed in a front lever orientation on a pull-up bar. The body remains rigid while the elbows pull the torso toward the bar, training the same lever and shoulder mechanics as a front lever hold.',
      cues: 'Keep the hips extended and the body straight. Pull with the lats and maintain a tight core while returning slowly to the full hanging start position.',
    }));
    entries.push(cloneExercise(pullFull, {
      id: 1404,
      name: 'FL | Raises / Negatives (Bar)',
      alt: 'Front lever raises and negatives on pull-up bar',
      tags: ['back', 'core', 'shoulders', 'bar'],
      diff: 8,
      hof: false,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A controlled front lever raise and negative performed on a pull-up bar. This exercise develops strength through the full lever path by raising into the horizontal line or lowering from it under tension.',
      cues: 'Use the tempo to control each phase. Keep the shoulders depressed and the core braced as you raise into and lower from the front lever line.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 1405,
      name: 'FL | Row (Parallettes)',
      alt: 'Front lever style row on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      diff: 8,
      joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A front lever row performed on parallettes. The neutral grip makes the wrist more comfortable while the body remains rigid and pulls through the horizontal lever path.',
      cues: 'Keep the torso tight and the hips aligned. Pull the chest toward the handles while maintaining the front lever posture.',
    }));
    entries.push(cloneExercise(pullFull, {
      id: 1406,
      name: 'FL | Raises / Negatives (Parallettes)',
      alt: 'Front lever raises and negatives on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      diff: 8,
      hof: false,
      joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A controlled front lever raise and negative on parallettes. The neutral grip helps keep the wrists comfortable while reinforcing the full lever path through the rise and descent.',
      cues: 'Maintain full body tension and a rigid plank line. Focus on slow negatives and controlled raises without letting the hips sag.',
    }));

    /* ── HANDS TOGETHER GRIP — BAR PULL-UP ──────────────────── */
    // Dynamic pulling with both hands touching on bar
    // Close grip → fingers:4, wrist:4; dynamic pulling → elbow:3

    entries.push(cloneExercise(pullTuck, {
      id: 1601,
      name: 'Tuck FL | Pull-Up Hands Together (Bar)',
      alt: 'Tuck front lever pull-up · hands together grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'close-grip'],
      diff: 8,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A tuck front lever pull-up with both hands touching each other on the pull-up bar. The close grip adds wrist and finger demand while the body stays horizontal and tucked through the pulling motion.',
      cues: 'Keep the hands pressed together and pull with the lats. Maintain the tuck position and horizontal body line throughout the movement.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 1602,
      name: 'Adv Tuck FL | Pull-Up Hands Together (Bar)',
      alt: 'Advanced tuck front lever pull-up · hands together grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'close-grip'],
      diff: 9,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'An advanced tuck front lever pull-up with both hands touching on the bar. The extended hip position increases lower back demand while the close grip loads the fingers and wrists through the full pulling range.',
      cues: 'Hold the hands together and keep the hips extended past the tuck position. Pull the bar toward the chest while maintaining the lever.',
    }));

    entries.push(cloneExercise(pullStraddle, {
      id: 1603,
      name: 'Straddle FL | Pull-Up Hands Together (Bar)',
      alt: 'Straddle front lever pull-up · hands together grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'close-grip'],
      diff: 9,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A straddle front lever pull-up with both hands touching on the bar. The wide leg position reduces the lever while the close grip challenges the fingers and wrists through each repetition.',
      cues: 'Keep the hands together and legs spread wide. Pull through the full range while maintaining shoulder depression and a rigid core.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 1604,
      name: 'FL | Pull-Up Hands Together (Bar)',
      alt: 'Full front lever pull-up · hands together grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'close-grip'],
      diff: 10,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A full front lever pull-up with both hands touching each other on the bar. This elite variation combines maximum lever demands with the added wrist and finger stress of the close grip.',
      cues: 'Keep the hands together and the body completely straight. Pull with the lats while maintaining the rigid horizontal position throughout.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 1605,
      name: 'FL | Row Hands Together (Bar)',
      alt: 'Front lever row · hands together grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'close-grip'],
      diff: 9,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A front lever row with both hands touching on the bar. The body stays rigid and horizontal while the elbows pull the torso toward the close-grip bar, combining lever mechanics with close-grip pulling stress.',
      cues: 'Press the hands together and pull with the lats. Keep the hips extended and the body straight, returning slowly to the hanging start position.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 1606,
      name: 'FL | Raises / Negatives Hands Together (Bar)',
      alt: 'Front lever raises and negatives · hands together grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'close-grip'],
      diff: 9,
      hof: false,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'Front lever raises and negatives with both hands touching on the bar. The close grip adds wrist and finger challenge to the full lever path through the controlled rise and descent.',
      cues: 'Keep the hands pressed together throughout each phase. Use a slow tempo on the way down and maintain full body tension on the raise.',
    }));

    /* ── RINGS TOGETHER — PULL-UP ────────────────────────── */
    // Dynamic pulling with rings held close together
    // Ring instability + close grip + dynamic → fingers:4, wrist:4, elbow:3

    entries.push(cloneExercise(pullTuck, {
      id: 1801,
      name: 'Tuck FL | Pull-Up Rings Together (Rings)',
      alt: 'Tuck front lever pull-up · rings together',
      tags: ['back', 'core', 'shoulders', 'rings', 'close-grip'],
      diff: 9,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A tuck front lever pull-up with both rings held close together. Ring instability, close grip, and dynamic pulling create a high coordination demand on top of the standard tuck lever.',
      cues: 'Hold the rings close and pull with the lats. Keep the body tucked and horizontal while controlling ring rotation through each rep.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 1802,
      name: 'Adv Tuck FL | Pull-Up Rings Together (Rings)',
      alt: 'Advanced tuck front lever pull-up · rings together',
      tags: ['back', 'core', 'shoulders', 'rings', 'close-grip'],
      diff: 9,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'An advanced tuck front lever pull-up on rings held close together. The extended hip position and close ring grip challenge the wrists, fingers, and shoulder stability throughout the pulling motion.',
      cues: 'Keep the rings close and the hips extended. Pull through the full range while fighting ring rotation and maintaining the horizontal lever.',
    }));

    entries.push(cloneExercise(pullStraddle, {
      id: 1803,
      name: 'Straddle FL | Pull-Up Rings Together (Rings)',
      alt: 'Straddle front lever pull-up · rings together',
      tags: ['back', 'core', 'shoulders', 'rings', 'close-grip'],
      diff: 10,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A straddle front lever pull-up on rings held close together. The wide leg position reduces the lever arm while the close ring grip and ring instability add challenge through the pulling range.',
      cues: 'Hold the rings close and spread the legs wide. Pull with the lats and manage ring rotation throughout each rep.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 1804,
      name: 'FL | Pull-Up Rings Together (Rings)',
      alt: 'Full front lever pull-up · rings together',
      tags: ['back', 'core', 'shoulders', 'rings', 'close-grip'],
      diff: 10,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A full front lever pull-up on rings held close together. This combines maximum lever challenge with ring instability and close grip demands, making it one of the most advanced front lever pulling variations.',
      cues: 'Hold the rings together and keep the body completely straight. Pull with the lats and maintain the horizontal lever while controlling ring rotation.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 1805,
      name: 'FL | Row Rings Together (Rings)',
      alt: 'Front lever row · rings together',
      tags: ['back', 'core', 'shoulders', 'rings', 'close-grip'],
      diff: 9,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A front lever row on rings held close together. The body stays rigid and horizontal while pulling the rings toward the torso, combining close-grip lever mechanics with the stability demands of rings.',
      cues: 'Keep the rings close and pull with the lats. Maintain the lever and control ring drift throughout each pull.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 1806,
      name: 'FL | Raises / Negatives Rings Together (Rings)',
      alt: 'Front lever raises and negatives · rings together',
      tags: ['back', 'core', 'shoulders', 'rings', 'close-grip'],
      diff: 9,
      hof: false,
      joints: {fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'Front lever raises and negatives on rings held close together. The close grip and ring instability add challenge to the lever path through the controlled rise and descent, building strength and coordination through the full range.',
      cues: 'Hold the rings close and use a slow tempo. Fight ring rotation on both the raise and the descent while maintaining full body tension.',
    }));

    /* ── PARALLETTES SIDE GRIP — PULL-UP ────────────────────── */
    // Dynamic pulling with lateral handle grip: thumbs up, fingers facing each other
    // Unusual wrist angle under dynamic load → wrist:4, elbow:3

    entries.push(cloneExercise(pullTuck, {
      id: 1906,
      name: 'Tuck FL | Pull-Up Side Grip (Parallettes)',
      alt: 'Tuck front lever pull-up · parallettes side grip · fingers facing grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'side-grip'],
      diff: 8,
      joints: {fingers:3, wrist:4, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A tuck front lever pull-up on parallettes gripped from the sides with fingers facing each other. The lateral grip angle challenges the wrists under dynamic pulling load while the body stays tucked and horizontal.',
      cues: 'Keep the thumbs pointing up and the wrists firm. Pull with the lats and maintain the tuck lever through the full range of motion.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 1907,
      name: 'Adv Tuck FL | Pull-Up Side Grip (Parallettes)',
      alt: 'Advanced tuck front lever pull-up · parallettes side grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'side-grip'],
      diff: 9,
      joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'An advanced tuck front lever pull-up on parallettes gripped from the sides. The extended hip position increases the lever demand while the lateral grip angle stresses the wrists through the pulling motion.',
      cues: 'Brace the wrists and extend the hips past the standard tuck. Pull through the full range while keeping the body horizontal.',
    }));

    entries.push(cloneExercise(pullStraddle, {
      id: 1908,
      name: 'Straddle FL | Pull-Up Side Grip (Parallettes)',
      alt: 'Straddle front lever pull-up · parallettes side grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'side-grip'],
      diff: 9,
      joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A straddle front lever pull-up on parallettes gripped from the sides with fingers facing each other. The wide leg position reduces the lever while the lateral grip challenges the wrists dynamically through each rep.',
      cues: 'Grip the sides of the handles firmly with thumbs up. Spread the legs wide and pull with the lats through the full range.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 1909,
      name: 'FL | Pull-Up Side Grip (Parallettes)',
      alt: 'Full front lever pull-up · parallettes side grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'side-grip'],
      diff: 10,
      joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A full front lever pull-up on parallettes gripped from the sides with fingers facing each other. This elite variation demands maximal wrist stability through the lateral angle while the body maintains a full rigid horizontal line throughout the pull.',
      cues: 'Keep the thumbs up and the wrists braced. Maintain a rigid body and pull with the lats — return slowly to the hanging start.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 1910,
      name: 'FL | Row Side Grip (Parallettes)',
      alt: 'Front lever row · parallettes side grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'side-grip'],
      diff: 9,
      joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A front lever row on parallettes gripped from the sides with fingers facing each other. The body stays horizontal while the elbows pull the torso toward the handles, combining lever mechanics with the unusual lateral grip angle.',
      cues: 'Grip the sides firmly with thumbs up. Pull the chest toward the handles while keeping the hips extended and the body straight.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 1911,
      name: 'FL | Raises / Negatives Side Grip (Parallettes)',
      alt: 'Front lever raises and negatives · parallettes side grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'side-grip'],
      diff: 9,
      hof: false,
      joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'Front lever raises and negatives on parallettes gripped from the sides with fingers facing each other. The lateral grip angle challenges wrist stability throughout the controlled rise and descent of the full lever path.',
      cues: 'Brace the wrists before each phase. Use a slow controlled tempo and maintain full body tension through both the raise and the descent.',
    }));

    /* ── PARALLETTES BACK GRIP — PULL-UP ─────────────────────── */
    // Dynamic pulling with backs of hands facing each other
    // Extreme wrist stress under dynamic load → wrist:5, fingers:4, elbow:3

    entries.push(cloneExercise(pullTuck, {
      id: 2006,
      name: 'Tuck FL | Pull-Up Back Grip (Parallettes)',
      alt: 'Tuck front lever pull-up · parallettes back grip · knuckles inward grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'back-grip'],
      diff: 9,
      joints: {fingers:4, wrist:5, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A tuck front lever pull-up on parallettes with the backs of both hands facing each other. The extreme rotational wrist angle is loaded dynamically through the pull, demanding very well-conditioned wrists and forearms.',
      cues: 'Build tolerance in the static back-grip hold before attempting pull-ups. Keep the body tucked and pull with the lats while bracing the wrists firmly.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 2007,
      name: 'Adv Tuck FL | Pull-Up Back Grip (Parallettes)',
      alt: 'Advanced tuck front lever pull-up · parallettes back grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'back-grip'],
      diff: 10,
      joints: {fingers:4, wrist:5, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'An advanced tuck front lever pull-up on parallettes with the backs of hands facing each other. The extended hip position increases the lever demand while the extreme wrist angle is loaded through the full pulling range.',
      cues: 'Brace the wrists and keep the hips extended past the tuck. Pull with the lats and return slowly — keep reps low and monitor wrist feedback.',
    }));

    entries.push(cloneExercise(pullStraddle, {
      id: 2008,
      name: 'Straddle FL | Pull-Up Back Grip (Parallettes)',
      alt: 'Straddle front lever pull-up · parallettes back grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'back-grip'],
      diff: 10,
      joints: {fingers:4, wrist:5, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A straddle front lever pull-up on parallettes with the backs of hands facing each other. The wide leg position reduces the lever arm while the extreme wrist angle remains very demanding through the dynamic pull.',
      cues: 'Spread the legs wide to reduce the lever and brace the wrists firmly. Pull with the lats and keep reps low to respect wrist load.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 2009,
      name: 'FL | Pull-Up Back Grip (Parallettes)',
      alt: 'Full front lever pull-up · parallettes back grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'back-grip'],
      diff: 10,
      joints: {fingers:4, wrist:5, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A full front lever pull-up on parallettes with the backs of hands facing each other. One of the most demanding front lever variations, combining the maximum lever moment arm with extreme rotational wrist stress under dynamic load.',
      cues: 'Only attempt with thoroughly conditioned wrists. Maintain a rigid body and pull with the lats — return slowly and keep volume very low.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 2010,
      name: 'FL | Row Back Grip (Parallettes)',
      alt: 'Front lever row · parallettes back grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'back-grip'],
      diff: 10,
      joints: {fingers:4, wrist:5, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'A front lever row on parallettes with the backs of hands facing each other. The body stays rigid and horizontal while pulling the torso toward the handles, applying the extreme wrist angle dynamically through the row.',
      cues: 'Brace the wrists firmly and keep the hips extended. Pull the chest toward the handles slowly and return under full control.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 2011,
      name: 'FL | Raises / Negatives Back Grip (Parallettes)',
      alt: 'Front lever raises and negatives · parallettes back grip',
      tags: ['back', 'core', 'shoulders', 'parallettes', 'back-grip'],
      diff: 10,
      hof: false,
      joints: {fingers:4, wrist:5, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Hanging',
      desc: 'Front lever raises and negatives on parallettes with the backs of hands facing each other. The extreme wrist angle is loaded throughout the full lever path, making the controlled descent especially demanding on the wrists and forearms.',
      cues: 'Brace the wrists before each phase. Use a very slow tempo and limit to a few quality reps — prioritize wrist safety over volume.',
    }));

    /* ── BAR SUPINATED GRIP — PULL-UP ────────────────────────── */
    // Underhand (chin-up) grip on bar: palms face the body.
    // More bicep and lower lat recruitment. wrist:3, elbow:3 dynamic

    entries.push(cloneExercise(pullTuck, {
      id: 2106,
      name: 'Tuck FL | Pull-Up Supinated Grip (Bar)',
      alt: 'Tuck front lever pull-up · supinated grip · underhand front lever pull-up',
      tags: ['back', 'core', 'shoulders', 'bar', 'supinated'],
      diff: 7,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A tuck front lever pull-up with a supinated grip on the pull-up bar. The palms-facing-body position recruits the biceps alongside the lats while the body stays horizontal and tucked through the pull.',
      cues: 'Grip the bar underhand and pull with the lats and biceps. Keep the body tucked and horizontal, maintaining the lever shape throughout.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 2107,
      name: 'Adv Tuck FL | Pull-Up Supinated Grip (Bar)',
      alt: 'Advanced tuck front lever pull-up · supinated grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'supinated'],
      diff: 8,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'An advanced tuck front lever pull-up with a supinated grip. The extended hip position increases the lever demand while the underhand grip engages the biceps and lower lats through the pulling range.',
      cues: 'Grip underhand and extend the hips past the standard tuck. Pull the bar toward the chest while keeping the body horizontal.',
    }));

    entries.push(cloneExercise(pullStraddle, {
      id: 2108,
      name: 'Straddle FL | Pull-Up Supinated Grip (Bar)',
      alt: 'Straddle front lever pull-up · supinated grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'supinated'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A straddle front lever pull-up with a supinated grip. The wide leg position reduces the lever while the underhand grip changes how the biceps and lats share the pulling load.',
      cues: 'Grip underhand and spread the legs wide. Pull with the lats and biceps and maintain the horizontal lever through each rep.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 2109,
      name: 'FL | Pull-Up Supinated Grip (Bar)',
      alt: 'Full front lever pull-up · supinated grip · underhand front lever pull-up',
      tags: ['back', 'core', 'shoulders', 'bar', 'supinated'],
      diff: 10,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A full front lever pull-up with a supinated grip. This variation trains the full lever at maximum moment arm using an underhand grip, strongly recruiting the biceps and lower lats alongside the posterior chain.',
      cues: 'Grip underhand and maintain a rigid body throughout. Pull with the lats and biceps — return slowly to the full horizontal hanging position.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 2110,
      name: 'FL | Row Supinated Grip (Bar)',
      alt: 'Front lever row · supinated grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'supinated'],
      diff: 8,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'A front lever row with a supinated grip on the pull-up bar. The body stays rigid and horizontal while the elbows pull the torso toward the bar, emphasizing the biceps and lower lats more than the standard pronated row.',
      cues: 'Grip underhand and keep the hips extended. Pull the chest toward the bar and return slowly — focus on the lower lat and bicep contraction.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 2111,
      name: 'FL | Raises / Negatives Supinated Grip (Bar)',
      alt: 'Front lever raises and negatives · supinated grip',
      tags: ['back', 'core', 'shoulders', 'bar', 'supinated'],
      diff: 9,
      hof: false,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Bar',
      position: 'Hanging',
      desc: 'Front lever raises and negatives with a supinated grip on the pull-up bar. The underhand grip alters lat and bicep recruitment through the full lever path, making this a useful training tool alongside the standard overhand version.',
      cues: 'Grip underhand and use a slow tempo on both phases. Keep the body rigid and maintain the lever shape through the full rise and descent.',
    }));

    /* ── RINGS SUPINATED GRIP — PULL-UP ──────────────────────── */
    // Underhand grip on rings + ring instability: fingers:3, wrist:3, elbow:3

    entries.push(cloneExercise(pullTuck, {
      id: 2206,
      name: 'Tuck FL | Pull-Up Supinated Grip (Rings)',
      alt: 'Tuck front lever pull-up · supinated grip on rings',
      tags: ['back', 'core', 'shoulders', 'rings', 'supinated'],
      diff: 8,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A tuck front lever pull-up on gymnastic rings held with a supinated grip. Ring instability and the underhand grip combine to challenge shoulder stability and bicep recruitment while the body stays horizontal and tucked.',
      cues: 'Grip the rings underhand and pull with the lats and biceps. Control ring rotation and maintain the tuck lever through each rep.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 2207,
      name: 'Adv Tuck FL | Pull-Up Supinated Grip (Rings)',
      alt: 'Advanced tuck front lever pull-up · supinated grip on rings',
      tags: ['back', 'core', 'shoulders', 'rings', 'supinated'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'An advanced tuck front lever pull-up on rings with a supinated grip. The extended hip position and ring instability both increase the challenge while the underhand grip recruits the biceps through the pulling range.',
      cues: 'Grip the rings underhand and extend the hips past the tuck. Pull with lats and biceps while managing ring rotation throughout.',
    }));

    entries.push(cloneExercise(pullStraddle, {
      id: 2208,
      name: 'Straddle FL | Pull-Up Supinated Grip (Rings)',
      alt: 'Straddle front lever pull-up · supinated grip on rings',
      tags: ['back', 'core', 'shoulders', 'rings', 'supinated'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A straddle front lever pull-up on rings held with a supinated grip. Wide legs reduce the lever while ring instability and the underhand grip challenge stability and bicep recruitment through each rep.',
      cues: 'Grip the rings underhand and spread the legs wide. Pull with lats and biceps and fight ring rotation throughout the movement.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 2209,
      name: 'FL | Pull-Up Supinated Grip (Rings)',
      alt: 'Full front lever pull-up · supinated grip on rings',
      tags: ['back', 'core', 'shoulders', 'rings', 'supinated'],
      diff: 10,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A full front lever pull-up on rings held with a supinated grip. This elite variation combines maximum lever demands, ring instability, and underhand grip recruitment, placing exceptional stress on the lats, biceps, and shoulder stabilizers.',
      cues: 'Grip the rings underhand and keep the body completely straight. Pull with the lats and biceps and control ring rotation through the full range.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 2210,
      name: 'FL | Row Supinated Grip (Rings)',
      alt: 'Front lever row · supinated grip on rings',
      tags: ['back', 'core', 'shoulders', 'rings', 'supinated'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A front lever row on rings held with a supinated grip. The body stays horizontal while pulling the rings toward the torso, combining lever row mechanics with ring instability and bicep-dominant underhand recruitment.',
      cues: 'Grip the rings underhand and keep the hips extended. Pull the chest toward the rings while controlling rotation, returning slowly to the start.',
    }));

    entries.push(cloneExercise(pullFull, {
      id: 2211,
      name: 'FL | Raises / Negatives Supinated Grip (Rings)',
      alt: 'Front lever raises and negatives · supinated grip on rings',
      tags: ['back', 'core', 'shoulders', 'rings', 'supinated'],
      diff: 9,
      hof: false,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'Front lever raises and negatives on rings held with a supinated grip. Ring instability and the underhand grip both add challenge through the controlled rise and descent, building strength across the full lever path.',
      cues: 'Grip the rings underhand and use a slow tempo. Fight ring rotation and maintain full body tension through both the raise and the descent.',
    }));

    /* ── RINGS PULL-UP VARIANTS ──────────────────────────── */
    // Ring rotation management → wrist:3; dynamic elbow → elbow:3

    entries.push(cloneExercise(pullTuck, {
      id: 1301,
      name: 'Tuck FL | Pull-Up (Rings)',
      alt: 'Tuck front lever pull-up on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A tuck front lever pull-up performed on gymnastic rings. Keep the body horizontal and tucked while pulling the rings toward the torso, managing the additional instability.',
    }));
    entries.push(cloneExercise(pullAdvanced, {
      id: 1302,
      name: 'Adv Tuck FL | Pull-Up (Rings)',
      alt: 'Advanced tuck front lever pull-up on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'An advanced tuck front lever pull-up on rings. The hips are more extended than the tucked variant while the body remains horizontal and the rings rotate freely.',
    }));
    entries.push(cloneExercise(pullStraddle, {
      id: 1303,
      name: 'Straddle FL | Pull-Up (Rings)',
      alt: 'Straddle front lever pull-up on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A straddle front lever pull-up on rings. The wide leg position shortens the lever while the rings force you to control the grip and shoulder position.',
    }));
    entries.push(cloneExercise(pullFull, {
      id: 1304,
      name: 'FL | Pull-Up (Rings)',
      alt: 'Full front lever pull-up on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'The full front lever pull-up on gymnastic rings. This variant blends maximal lever control with the instability of a ring grip.',
    }));

    /* ── RINGS ROW AND RAISES — STANDARD GRIP ────────────────
       Mirrors Bar versions but on rings.
       Ring rotation management → wrist:3; dynamic elbow → elbow:3 */

    entries.push(cloneExercise(_flStraddle, {
      id: 1407,
      name: 'FL | Row (Rings)',
      alt: 'Front lever style row on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      diff: 8.5,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A front lever row on gymnastic rings. The body remains horizontal while pulling the rings toward the torso, training the lever pulling mechanics while managing ring rotation throughout the movement. The rings add instability relative to the bar version, demanding active wrist and shoulder stabilisation on every rep.',
      cues: 'Keep the hips extended and body rigid. Pull with the lats while suppressing ring rotation — the rings will want to splay on the pull. Return slowly to the start under control.',
    }));

    entries.push(cloneExercise(_flFull, {
      id: 1408,
      name: 'FL | Raises / Negatives (Rings)',
      alt: 'Front lever raises and negatives on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      diff: 8.5,
      hof: false,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'Front lever raises and negatives on gymnastic rings. The controlled rise into and descent from the horizontal lever line is performed on freely rotating rings, adding ring stabilisation demands on top of the lever path strength. One of the most effective ways to build the ring-specific front lever.',
      cues: 'Use a slow tempo through both phases. Maintain ring control especially during the raise — the rings will drift forward. Keep the body hollow and the scapulae depressed throughout.',
    }));

    /* ── RINGS ROW AND RAISES — SIDE GRIP ────────────────────
       Rings rotated to lateral orientation → wrist:4 */

    entries.push(cloneExercise(_flStraddle, {
      id: 2110,
      name: 'FL | Row Side Grip (Rings)',
      alt: 'Front lever row · rings side grip',
      tags: ['back', 'core', 'shoulders', 'rings', 'side-grip'],
      diff: 9.0,
      joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A front lever row with the rings rotated to a lateral (side-grip) orientation — fingers facing each other, thumbs up. This grip angle loads the wrists differently from the standard pronated grip while the body stays horizontal through the pull. Mirrors the parallettes side grip row but with ring instability added throughout.',
      cues: 'Keep the thumbs pointing up and the wrists firm against ring rotation. Pull with the lats while resisting any drift of the ring angle. Return slowly to full extension.',
    }));

    entries.push(cloneExercise(_flFull, {
      id: 2111,
      name: 'FL | Raises / Negatives Side Grip (Rings)',
      alt: 'Front lever raises and negatives · rings side grip',
      tags: ['back', 'core', 'shoulders', 'rings', 'side-grip'],
      diff: 9.0,
      hof: false,
      joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'Front lever raises and negatives with the rings in a side-grip orientation. The lateral ring angle and ring instability both challenge the lever path through the rise and descent, building wrist resilience alongside lever strength.',
      cues: 'Maintain the side-grip angle and keep the wrists firm through each phase. Slow and controlled tempo is essential — ring rotation will amplify any loss of tension.',
    }));

    /* ── RINGS ROW AND RAISES — BACK GRIP ────────────────────
       Reversed ring orientation → wrist:5, elbow:4 */

    entries.push(cloneExercise(_flStraddle, {
      id: 2112,
      name: 'FL | Row Back Grip (Rings)',
      alt: 'Front lever row · rings back grip',
      tags: ['back', 'core', 'shoulders', 'rings', 'back-grip'],
      diff: 9.5,
      joints: {fingers:4, wrist:5, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'A front lever row with the rings held in a back (reverse) grip — fingers pointing backward, palms facing forward. The reversed ring orientation places significant stress on the wrists, elbows, and anterior shoulder under the dynamic pulling motion. A thorough wrist conditioning base is an absolute prerequisite.',
      cues: 'Build extensive back grip static holds before adding any dynamic pulling. Warm up the wrists and elbows thoroughly. Pull conservatively and stop immediately at any joint discomfort.',
    }));

    entries.push(cloneExercise(_flFull, {
      id: 2113,
      name: 'FL | Raises / Negatives Back Grip (Rings)',
      alt: 'Front lever raises and negatives · rings back grip',
      tags: ['back', 'core', 'shoulders', 'rings', 'back-grip'],
      diff: 9.5,
      hof: false,
      joints: {fingers:4, wrist:5, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Rings',
      position: 'Hanging',
      desc: 'Front lever raises and negatives in a back grip on rings. The reversed ring angle under lever path loading creates extreme stress on the wrists, elbows, and shoulder complex. Only appropriate after extensive back grip static hold conditioning.',
      cues: 'Back grip static holds on rings must be solid and pain-free before any dynamic range is introduced. Use the shortest possible range of motion initially. Stop at the first sign of joint discomfort.',
    }));

  function isCompletedFrontLeverVariant(exercise) {
    const name = exercise?.name || '';
    // Matches any Full FL or FL Pull-Up variant regardless of equipment suffix.
    // Uses prefix match up to the pipe so "Full FL | (Bar)", "Full FL | (Rings)",
    // "Full FL | Supinated Grip (Bar)" etc. all qualify.
    return name === 'Full FL | (Bar)'
      || name.startsWith('Full FL |')
      || name === 'FL | Pull-Up (Bar)'
      || name.startsWith('FL | Pull-Up');
  }

  const normalizedEntries = entries.map(exercise => {
    const next = { ...exercise };
    if(isCompletedFrontLeverVariant(next)) {
      next.hof = true;
    }
    return next;
  });

  window.frontleverStaticWorkouts = normalizedEntries.filter(ex => ex.position === 'Supine' && ex.listed !== false);
  window.frontleverPullWorkouts   = normalizedEntries.filter(ex => ex.position === 'Hanging' && ex.listed !== false);
  return normalizedEntries;
})();

/* Pantheon workouts moved from pantheon-data.js.
   Kept outside the normal library arrays so they stay gated and use pantheon-* progress keys. */
const frontleverPantheonWorkouts = [
  {
      id: 119,
      name: "One-Arm FL | (Bar)",
      alt: "Single-arm front lever",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Obliques", p:true}
      ],
      tags: ["back", "shoulders", "core"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["isometric-15"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Static",
      desc: "The unilateral sovereign of the front lever family. Straight-body front lever is the threshold; this is the monster beyond it.",
      cues: "The straight-body front lever should already be calm and repeatable before you even think about removing an arm.",
      equipment: "Bar", position: "Supine", youtube: "LINK_TODO"
    },
  {
      // Pantheon-gated version of library id:77. Same movement;
      // requires isometric-15 + pullup-100 before unlocking.
      id: 118,
      name: "FL | Pull-Up (Bar)",
      alt: "Full front lever pull-up",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Biceps", p:false}
      ],
      tags: ["back", "core", "shoulders"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 4,
      joints: {wrist:3, elbow:3, shoulder:4, neck:1, lowerBack:3, hip:2, knee:0, fingers:3, thoracic:2, si:1, groin:0, ankle:0, foot:0},
      technique: 5, mobility: 2, strength: 5,
      kcalPerRep: [0.44, 0.79],
      requires: ["isometric-15", "pullup-100"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Dynamic",
      desc: "The dynamic expression of a Hall of Fame front lever. Not just a hard pull-up — a crowned descendant of the front lever line.",
      cues: "A true front lever and high-end front lever pull-up progression must already be owned.",
      equipment: "Bar", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 120,
      name: "One-Arm FL | Pull-Up (Bar)",
      alt: "Unilateral front lever pull-up",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Obliques", p:true}
      ],
      tags: ["back", "core", "shoulders"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-118", "pantheon-119"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Mythic Pull",
      desc: "Fusion of unilateral front lever ownership and front lever pulling power. Feats that almost nobody on earth can demonstrate cleanly.",
      cues: "Both the one-arm lever and the front lever pull-up must be real first. If either is missing, this is still legend.",
      equipment: "Bar", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 124,
      name: "One-Arm FL | 4 Fingers (Bar)",
      alt: "Single-arm front lever on four fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-119"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "One-arm front lever on four fingers — begins the 4-3-2-1 finger reduction branch.",
      cues: "Standard one-arm front lever must already be solid. Treat finger reduction as a tendon progression.",
      equipment: "Bar", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 125,
      name: "One-Arm FL | 3 Fingers (Bar)",
      alt: "Single-arm front lever on three fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-124"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "One-arm front lever line reduced to three fingers. One step deeper into the branch.",
      cues: "Four-finger control must already feel owned. Respect tissue adaptation timeline.",
      equipment: "Bar", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 126,
      name: "One-Arm FL | 2 Fingers (Bar)",
      alt: "Single-arm front lever on two fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-125"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "Two-finger one-arm front lever. By here the branch is as much a finger-tendon feat as a lat and core feat.",
      cues: "Do not reduce fingers until the previous stage is repeatable and pain-free.",
      equipment: "Bar", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 127,
      name: "One-Arm FL | 1 Finger (Bar)",
      alt: "Single-arm front lever on one finger",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-126"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "The final expression of the single-arm 4-3-2-1 finger front lever branch. An end-state demonstration.",
      cues: "Every earlier step must already feel fully under control.",
      equipment: "Bar", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 330,
      name: "One-Arm FL | (Parallettes)",
      alt: "Single-arm front lever on parallettes",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Obliques", p:true}
      ],
      tags: ["back", "shoulders", "core", "parallettes"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["isometric-15", "frontlever-1004"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Static",
      desc: "A unilateral front lever performed on parallettes. The neutral wrist and handle height change the leverage feel while the one-arm balance demand remains supreme.",
      cues: "Build both the full front lever and the parallettes front lever before attempting this. Keep the hips level and the working arm locked throughout the hold.",
      equipment: "Parallettes", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 331,
      name: "One-Arm FL | 4 Fingers (Parallettes)",
      alt: "Single-arm front lever on parallettes with four fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "shoulders", "core", "parallettes", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-330"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "One-arm front lever on parallettes with four fingers. Begins the parallettes-specific 4-3-2-1 finger reduction branch.",
      cues: "Only move to this once the one-arm parallettes lever is stable. Treat finger reduction as a tendon progression.",
      equipment: "Parallettes", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 332,
      name: "One-Arm FL | 3 Fingers (Parallettes)",
      alt: "Single-arm front lever on parallettes with three fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "shoulders", "core", "parallettes", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-331"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "One-arm front lever on parallettes with three fingers. One step deeper into the finger-reduction branch.",
      cues: "Serve the four-finger variant before reducing contact. Maintain the same body tension through the increased tendon demand.",
      equipment: "Parallettes", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 333,
      name: "One-Arm FL | 2 Fingers (Parallettes)",
      alt: "Single-arm front lever on parallettes with two fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "shoulders", "core", "parallettes", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-332"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "One-arm front lever on parallettes with two fingers. By this stage the movement is as much a finger tendon feat as a lever strength feat.",
      cues: "Only reduce further after the three-finger variant feels secure. Keep the shoulders packed and the wrist aligned.",
      equipment: "Parallettes", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 334,
      name: "One-Arm FL | 1 Finger (Parallettes)",
      alt: "Single-arm front lever on parallettes with one finger",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "shoulders", "core", "parallettes", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-333"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "The ultimate one-arm front lever on parallettes with just one finger. This variant demands extreme tendon tolerance and perfect body alignment.",
      cues: "Only pursue this after the two-finger variant is fully stable and pain-free. Stay patient with tendon adaptation.",
      equipment: "Parallettes", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 335,
      name: "One-Arm FL | Pull-Up (Parallettes)",
      alt: "Single-arm front lever pull-up on parallettes",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Obliques", p:true}
      ],
      tags: ["back", "core", "shoulders", "parallettes"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["isometric-15", "pullup-77", "frontlever-1104"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Mythic Pull",
      desc: "A one-arm front lever pull-up performed on parallettes. This combines the stability of a neutral parallettes grip with the unilateral pulling and lever control of a one-arm front lever pull.",
      cues: "Only attempt after the full front lever, front lever pull-up, and full parallettes front lever pull-up are all secure. Keep the body rigid and the active shoulder stable through the pull.",
      equipment: "Parallettes", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 336,
      name: "One-Arm FL | Pull-Up 4 Fingers (Parallettes)",
      alt: "Single-arm front lever pull-up on parallettes with four fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "parallettes", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-335"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "One-arm front lever pull-up on parallettes with four fingers. The first step into the finger-reduction series for the pull-up variant.",
      cues: "Build the full one-arm parallettes pull-up before taking contact down to four fingers. Manage tendon load carefully.",
      equipment: "Parallettes", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 337,
      name: "One-Arm FL | Pull-Up 3 Fingers (Parallettes)",
      alt: "Single-arm front lever pull-up on parallettes with three fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "parallettes", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-336"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "One-arm front lever pull-up on parallettes with three fingers. The next step in the finger-reduction line.",
      cues: "The four-finger pull-up must already feel repeatable on parallettes. Keep the pulling arm straight and the torso rigid.",
      equipment: "Parallettes", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 338,
      name: "One-Arm FL | Pull-Up 2 Fingers (Parallettes)",
      alt: "Single-arm front lever pull-up on parallettes with two fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "parallettes", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-337"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "One-arm front lever pull-up on parallettes with two fingers only. This is a rare and extreme variant of the pull-up branch.",
      cues: "Only reduce after the three-finger variant is fully stable. Watch the wrist angle and keep the shoulder joint healthy.",
      equipment: "Parallettes", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 339,
      name: "One-Arm FL | Pull-Up 1 Finger (Parallettes)",
      alt: "Single-arm front lever pull-up on parallettes with one finger",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "parallettes", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-338"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Finger Reduction",
      desc: "The ultimate one-arm front lever pull-up on parallettes using only one finger. A true mythic expression of unilateral finger-pull strength.",
      cues: "This is a terminal finger-reduction feat. Do not attempt until every prior stage is deeply owned.",
      equipment: "Parallettes", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 340,
      name: "One-Arm FL | (Rings)",
      alt: "Single-arm front lever on rings",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Obliques", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["isometric-15", "frontlever-1204"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Static",
      desc: "A one-arm front lever performed specifically on gymnastic rings. The rings demand extra stability while the body holds the lever position.",
      cues: "The straight-body front lever should be solid before attempting the unilateral ring version. Control ring rotation and preserve a rigid torso.",
      equipment: "Rings", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 341,
      name: "One-Arm FL | 4 Fingers (Rings)",
      alt: "Single-arm front lever on rings with four fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-340"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Finger Reduction",
      desc: "One-arm front lever on rings with four fingers. Begins the ring-specific finger-reduction branch.",
      cues: "Only reduce to four fingers after the ring one-arm front lever feels stable. Build tendon adaptation gradually.",
      equipment: "Rings", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 342,
      name: "One-Arm FL | 3 Fingers (Rings)",
      alt: "Single-arm front lever on rings with three fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-341"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Finger Reduction",
      desc: "One-arm front lever on rings with three fingers. The next step in the ring finger reduction series.",
      cues: "Complete the four-finger ring variant before moving here. Keep the lever rigid and the loaded finger under control.",
      equipment: "Rings", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 343,
      name: "One-Arm FL | 2 Fingers (Rings)",
      alt: "Single-arm front lever on rings with two fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-342"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Finger Reduction",
      desc: "One-arm front lever on rings with two fingers. A more extreme ring finger reduction step.",
      cues: "Only pursue this after the three-finger ring variant is fully mastered. Keep the grip and shoulder stable.",
      equipment: "Rings", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 344,
      name: "One-Arm FL | 1 Finger (Rings)",
      alt: "Single-arm front lever on rings with one finger",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [5, 9],
      requires: ["pantheon-343"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Finger Reduction",
      desc: "The ultimate one-arm front lever on rings using just one finger. This is the peak of the ring-specific finger reduction branch.",
      cues: "Only attempt this after every earlier ring one-arm lever variation is rock solid. Respect finger tendon adaptation and progress slowly.",
      equipment: "Rings", position: "Supine", youtube: "LINK_TODO"
    },
  {
      id: 345,
      name: "One-Arm FL | Pull-Up (Rings)",
      alt: "Single-arm front lever pull-up on rings",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Obliques", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pullup-77", "frontlever-1304"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Pull",
      desc: "A one-arm front lever pull-up performed on rings. This variant blends maximal front lever pulling with ring stability demands.",
      cues: "The full ring front lever pull-up and ring one-arm leverage must be secure before pursuing this. Keep the body rigid and the ring grip controlled.",
      equipment: "Rings", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 346,
      name: "One-Arm FL | Pull-Up 4 Fingers (Rings)",
      alt: "Single-arm front lever pull-up on rings with four fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-345"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Finger Reduction",
      desc: "One-arm front lever pull-up on rings with four fingers. The first step into the ring pull-up finger reduction branch.",
      cues: "Build the full ring one-arm pull-up before reducing to four fingers. Manage tendon load and maintain tension through the pull.",
      equipment: "Rings", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 347,
      name: "One-Arm FL | Pull-Up 3 Fingers (Rings)",
      alt: "Single-arm front lever pull-up on rings with three fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-346"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Finger Reduction",
      desc: "One-arm front lever pull-up on rings with three fingers. Progress deeper into the ring pull-up finger-reduction line.",
      cues: "Only move to this variant after the four-finger ring pull-up is stable. Keep the pulling arm straight and the body locked.",
      equipment: "Rings", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 348,
      name: "One-Arm FL | Pull-Up 2 Fingers (Rings)",
      alt: "Single-arm front lever pull-up on rings with two fingers",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-347"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Finger Reduction",
      desc: "One-arm front lever pull-up on rings with two fingers. A more advanced ring pull-up finger reduction milestone.",
      cues: "Keep the shoulder stable and the grip secure when reducing to two fingers. Build tendon tolerance slowly.",
      equipment: "Rings", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 349,
      name: "One-Arm FL | Pull-Up 1 Finger (Rings)",
      alt: "Single-arm front lever pull-up on rings with one finger",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Rear Delts", p:true},
        {n:"Finger Flexors", p:true}
      ],
      tags: ["back", "core", "shoulders", "rings", "fingers"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-348"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Ring Finger Reduction",
      desc: "The ultimate one-arm front lever pull-up on rings with one finger. This is the terminal ring pull-up finger reduction feat.",
      cues: "Only attempt this once every earlier ring one-arm pull-up variant is deeply secure. Respect long-term tendon adaptation.",
      equipment: "Rings", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 350,
      name: "Double FL",
      alt: "Two-person front lever stack",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Stability", p:true}
      ],
      tags: ["back", "core", "shoulders", "partner"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:2, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["isometric-15"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Partner",
      desc: "A two-person front lever feat where a second athlete holds a front lever on the shoulders of the base athlete, creating a stacked front lever formation.",
      cues: "Both participants should already own clean full front levers. Communicate shoulder position and keep the stack rigid while balancing the top lever.",
      equipment: "Bodyweight / Partner", position: "Hanging", youtube: "LINK_TODO"
    },
  {
      id: 351,
      name: "Triple FL",
      alt: "Three-person front lever pyramid",
      muscles: [
        {n:"Lats", p:true},
        {n:"Core", p:true},
        {n:"Shoulders", p:true},
        {n:"Stability", p:true}
      ],
      tags: ["back", "core", "shoulders", "partner"],
      diff: 10,
      str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
      risk: 5,
      joints: {fingers:2, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      technique: 5, mobility: 3, strength: 5,
      kcalPerRep: [0.52, 0.93],
      requires: ["pantheon-350"],
      requiresMode: "all",
      pantheonGroup: "Front Lever",
      pantheonSubgroup: "Partner",
      desc: "A three-person front lever feat where a third athlete adds another front lever on top of the double front lever stack.",
      cues: "Only attempt after the double front lever is stable. Keep the entire pyramid rigid, the shoulders pinned, and the top athlete aligned with the lower stack.",
      equipment: "Bodyweight / Partner", position: "Hanging", youtube: "LINK_TODO"
    }
];
