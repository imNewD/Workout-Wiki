/* GRND // WORKOUT WIKI — FRONT LEVER LIBRARY DATA
   Loaded by index.html via <script src="library/frontlever-data.js"></script>
   This file is intentionally non-destructive: it reuses existing front lever
   progressions from the isometric and pull-up libraries without removing them
   from their current source files.
*/

const frontleverIsoIds = new Set([13, 14, 15, 1100]);
const frontleverPullIds = new Set([77, 99, 100, 130]);

function cloneExercise(exercise, overrides = {}) {
  return { ...exercise, ...overrides };
}

const frontlevers = (() => {
  const entries = [];
  const isoById = id => typeof isometrics !== 'undefined' && Array.isArray(isometrics) ? isometrics.find(ex => ex.id === id) : undefined;
  const pullById = id => typeof pullups !== 'undefined' && Array.isArray(pullups) ? pullups.find(ex => ex.id === id) : undefined;

  if(typeof isometrics !== 'undefined' && Array.isArray(isometrics)) {
    entries.push(...isometrics.filter(ex => frontleverIsoIds.has(ex.id)));
  }
  if(typeof pullups !== 'undefined' && Array.isArray(pullups)) {
    entries.push(...pullups.filter(ex => frontleverPullIds.has(ex.id)));
  }

  const tuck = isoById(13);
  const straddle = isoById(14);
  const full = isoById(15);
  const pullFull = pullById(77);
  const pullTuck = pullById(99);
  const pullAdvanced = pullById(100);
  const pullStraddle = pullById(130);

  if(tuck && straddle && full) {

    /* ── BAR STATIC VARIANTS ─────────────────────────────── */

    entries.push(cloneExercise(tuck, {
      id: 1001,
      name: 'Advanced Tuck Front Lever',
      alt: 'Advanced tuck front lever hold · half-extended front lever',
      tags: ['back', 'shoulders', 'core', 'bar'],
      diff: 7,
      // Hips extended further than tuck → longer moment arm → more lowerBack load
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      desc: 'A front lever hold that sits between the tuck and straddle positions. The hips extend farther than the tuck while the knees remain tucked, building the longer lever strength needed for advanced front lever progressions.',
      cues: 'Keep the shoulders depressed and the body rigid. Extend the hips more than a tuck hold, but maintain the tucked knee position to keep the lever manageable.',
      equipment: 'Pull-up bar or rings',
      position: 'Supine',
    }));

    entries.push(cloneExercise(full, {
      id: 1006,
      name: 'One-Leg Front Lever — Bar',
      alt: 'One-leg front lever hold on pull-up bar',
      tags: ['back', 'shoulders', 'core', 'bar'],
      diff: 8,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Pull-up bar',
      position: 'Supine',
      desc: 'A one-leg front lever hold on a pull-up bar. One leg is fully extended while the opposite knee remains tucked, creating an asymmetric lever that builds shoulder, lat, and core strength while keeping the moment arm slightly reduced compared to the full front lever.',
      cues: 'Keep the shoulders depressed, the torso rigid, and the extended leg straight. Hold the tucked leg close to the body and alternate sides across sets to balance both hips and lats.',
    }));

    entries.push(cloneExercise(full, {
      id: 1007,
      name: 'One-Leg Front Lever — Parallettes',
      alt: 'One-leg front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      diff: 8,
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A one-leg front lever performed on parallettes. The neutral grip reduces wrist strain while the asymmetric leg position increases the lever length and targets unilateral stability in the hips, core, and shoulders.',
      cues: 'Keep the body rigid and the extended leg straight. Use the neutral handles to maintain wrist comfort while holding the tucked leg close and controlling the shoulder line.',
    }));

    entries.push(cloneExercise(full, {
      id: 1205,
      name: 'One-Leg Front Lever — Rings',
      alt: 'One-leg front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
      equipment: 'Gymnastic rings',
      position: 'Supine',
      desc: 'A one-leg front lever on gymnastic rings. One leg extends fully while the opposite knee stays tucked, demanding unilateral stability and control as the rings add rotation and balance challenges.',
      cues: 'Keep the shoulders depressed and the body straight. Control the rings and hold the tucked leg tight to prevent rotation, then alternate legs to develop both sides evenly.',
    }));

    /* ── PARALLETTES STATIC VARIANTS ─────────────────────── */
    // Neutral wrist grip throughout → wrist:2 vs bar wrist:3

    entries.push(cloneExercise(tuck, {
      id: 1002,
      name: 'Tuck Front Lever — Parallettes',
      alt: 'Tuck front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      // Neutral grip reduces wrist load; tuck keeps lowerBack moderate and knee loaded
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A tuck front lever performed on parallettes. The neutral wrist position and handle height create a different leverage feel while preserving the horizontal tuck lever shape.',
    }));
    entries.push(cloneExercise(straddle, {
      id: 1003,
      name: 'Straddle Front Lever — Parallettes',
      alt: 'Straddle front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      // Wider legs → groin:1, longer lever → lowerBack:4, reduced knee vs tuck
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A straddle front lever performed on parallettes. The wider leg position reduces the lever while the parallettes keep wrist stress low and the shoulder line stable.',
    }));
    entries.push(cloneExercise(full, {
      id: 1004,
      name: 'Front Lever — Parallettes',
      alt: 'Full front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      // Full straight body → max lowerBack, no knee, no groin
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'The full front lever performed on parallettes. The alternative handle surface changes the shoulder and wrist loading slightly, while the core and lat strength demands remain the same.',
    }));
    entries.push(cloneExercise(tuck, {
      id: 1005,
      name: 'Advanced Tuck Front Lever — Parallettes',
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
      name: 'One-Arm Tuck Front Lever',
      alt: 'One-arm tuck front lever hold on pull-up bar',
      tags: ['back', 'shoulders', 'core', 'bar'],
      diff: 9,
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Pull-up bar',
      position: 'Supine',
      desc: 'A one-arm tuck front lever hold on a pull-up bar. The support arm carries most of the load while the free arm helps balance the body, building unilateral lat, shoulder, and core control in a front lever shape.',
      cues: 'Keep the torso horizontal and the unsupported arm controlled. Maintain shoulder depression and a tight hollow body throughout the hold.',
    }));
    entries.push(cloneExercise(tuck, {
      id: 1402,
      name: 'One-Arm Tuck Front Lever — Parallettes',
      alt: 'One-arm tuck front lever hold on parallettes',
      tags: ['back', 'shoulders', 'core', 'parallettes'],
      diff: 9,
      joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      position: 'Supine',
      desc: 'A one-arm tuck front lever performed on parallettes. The neutral handle grip eases wrist strain while the unilateral hold increases shoulder and core stability on the supporting side.',
      cues: 'Keep the body rigid and the free side steady. Focus on pressing the supporting shoulder down and keeping the hips aligned with the shoulders.',
    }));

    /* ── RINGS STATIC VARIANTS ───────────────────────────── */
    // Ring instability → wrist:3 (rotation management), shoulder:5 same as bar

    entries.push(cloneExercise(tuck, {
      id: 1201,
      name: 'Tuck Front Lever — Rings',
      alt: 'Tuck front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      // Rings: wrist matches bar (pronated-to-neutral rotation under load)
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Gymnastic rings',
      position: 'Supine',
      desc: 'A tuck front lever performed on gymnastic rings. The rotating handles add a stability challenge while preserving the horizontal tuck lever shape.',
      cues: 'Keep the shoulders depressed and the body rigid. Manage ring instability by controlling the path of the handles as you hold the tuck lever.',
    }));
    entries.push(cloneExercise(tuck, {
      id: 1202,
      name: 'Advanced Tuck Front Lever — Rings',
      alt: 'Advanced tuck front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      // Advanced hips → lowerBack:4
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      diff: 7,
      equipment: 'Gymnastic rings',
      position: 'Supine',
      desc: 'An advanced tuck front lever on rings. The hips are extended farther than a standard tuck while the knees remain tucked, adding ring stability demands to the longer lever position.',
      cues: 'Maintain body tension and keep the knees tucked. Stay aware of ring rotation and keep the shoulders stable through the hold.',
    }));
    entries.push(cloneExercise(straddle, {
      id: 1203,
      name: 'Straddle Front Lever — Rings',
      alt: 'Straddle front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Gymnastic rings',
      position: 'Supine',
      desc: 'A straddle front lever on rings. The wide leg position reduces the lever arm while ring instability increases the shoulder and core coordination challenge.',
    }));
    entries.push(cloneExercise(full, {
      id: 1204,
      name: 'Front Lever — Rings',
      alt: 'Full front lever hold on rings',
      tags: ['back', 'shoulders', 'core', 'rings'],
      joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Gymnastic rings',
      position: 'Supine',
      desc: 'The full front lever performed on gymnastic rings. The rings require extra stability control while the body remains rigid and horizontal.',
    }));
  }

  if(pullFull && pullTuck && pullAdvanced && pullStraddle) {

    /* ── PARALLETTES PULL-UP VARIANTS ────────────────────── */
    // Dynamic pulling → elbow:3 (vs isometric 2); neutral grip → wrist:2

    entries.push(cloneExercise(pullTuck, {
      id: 1101,
      name: 'Tuck Front Lever Pull-Up — Parallettes',
      alt: 'Tuck front lever pull-up on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      // Elbow flex under load; tuck means moderate lowerBack, active hip and knee
      joints: {fingers:3, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A tuck front lever pulling variation performed on parallettes. Keep the body horizontal and tucked while pulling the handles toward the torso, preserving the same lever path as the bar version.',
    }));
    entries.push(cloneExercise(pullAdvanced, {
      id: 1102,
      name: 'Advanced Tuck Front Lever Pull-Up — Parallettes',
      alt: 'Advanced tuck front lever pull-up on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      // Longer moment arm → lowerBack:4; shoulder increases to 5
      joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'An advanced tuck front lever pull-up on parallettes. The hips are more extended than the tucked variant, while the legs remain pulled toward the chest and the body stays horizontal.',
    }));
    entries.push(cloneExercise(pullStraddle, {
      id: 1103,
      name: 'Straddle Front Lever Pull-Up — Parallettes',
      alt: 'Straddle front lever pull-up on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A straddle front lever pull-up on parallettes. Legs spread wide reduce the lever arm while the parallel handles keep the wrists neutral and the shoulder line stable.',
    }));
    entries.push(cloneExercise(pullFull, {
      id: 1104,
      name: 'Front Lever Pull-Up — Parallettes',
      alt: 'Full front lever pull-up on parallettes',
      tags: ['back', 'core', 'shoulders', 'parallettes'],
      // Full straight body dynamic: max shoulder and lowerBack, no knee
      joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Parallettes',
      desc: 'A full front lever pull-up performed on parallettes. The body stays rigid and horizontal while the parallettes provide a neutral grip and an alternate lever feel compared to the bar version.',
    }));

    /* ── BAR PULL-UP VARIANTS ───────────────────────────── */
    // Dynamic frontal pulling that mimics the front lever line on a bar

    entries.push(cloneExercise(pullAdvanced, {
      id: 1403,
      name: 'Front Lever Row',
      alt: 'Front lever style row on pull-up bar',
      tags: ['back', 'core', 'shoulders', 'bar'],
      diff: 8,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Pull-up bar',
      position: 'Hanging',
      desc: 'A horizontal row variation performed in a front lever orientation on a pull-up bar. The body remains rigid while the elbows pull the torso toward the bar, training the same lever and shoulder mechanics as a front lever hold.',
      cues: 'Keep the hips extended and the body straight. Pull with the lats and maintain a tight core while returning slowly to the full hanging start position.',
    }));
    entries.push(cloneExercise(pullFull, {
      id: 1404,
      name: 'Front Lever Raises / Negatives',
      alt: 'Front lever raises and negatives on pull-up bar',
      tags: ['back', 'core', 'shoulders', 'bar'],
      diff: 8,
      hof: false,
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Pull-up bar',
      position: 'Hanging',
      desc: 'A controlled front lever raise and negative performed on a pull-up bar. This exercise develops strength through the full lever path by raising into the horizontal line or lowering from it under tension.',
      cues: 'Use the tempo to control each phase. Keep the shoulders depressed and the core braced as you raise into and lower from the front lever line.',
    }));

    entries.push(cloneExercise(pullAdvanced, {
      id: 1405,
      name: 'Front Lever Row — Parallettes',
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
      name: 'Front Lever Raises / Negatives — Parallettes',
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

    /* ── RINGS PULL-UP VARIANTS ──────────────────────────── */
    // Ring rotation management → wrist:3; dynamic elbow → elbow:3

    entries.push(cloneExercise(pullTuck, {
      id: 1301,
      name: 'Tuck Front Lever Pull-Up — Rings',
      alt: 'Tuck front lever pull-up on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Gymnastic rings',
      position: 'Hanging',
      desc: 'A tuck front lever pull-up performed on gymnastic rings. Keep the body horizontal and tucked while pulling the rings toward the torso, managing the additional instability.',
    }));
    entries.push(cloneExercise(pullAdvanced, {
      id: 1302,
      name: 'Advanced Tuck Front Lever Pull-Up — Rings',
      alt: 'Advanced tuck front lever pull-up on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
      equipment: 'Gymnastic rings',
      position: 'Hanging',
      desc: 'An advanced tuck front lever pull-up on rings. The hips are more extended than the tucked variant while the body remains horizontal and the rings rotate freely.',
    }));
    entries.push(cloneExercise(pullStraddle, {
      id: 1303,
      name: 'Straddle Front Lever Pull-Up — Rings',
      alt: 'Straddle front lever pull-up on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:1, knee:1, ankle:0, foot:0},
      equipment: 'Gymnastic rings',
      position: 'Hanging',
      desc: 'A straddle front lever pull-up on rings. The wide leg position shortens the lever while the rings force you to control the grip and shoulder position.',
    }));
    entries.push(cloneExercise(pullFull, {
      id: 1304,
      name: 'Front Lever Pull-Up — Rings',
      alt: 'Full front lever pull-up on rings',
      tags: ['back', 'core', 'shoulders', 'rings'],
      joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
      equipment: 'Gymnastic rings',
      position: 'Hanging',
      desc: 'The full front lever pull-up on gymnastic rings. This variant blends maximal lever control with the instability of a ring grip.',
    }));
  }

  window.frontleverStaticWorkouts = entries.filter(ex => ex.position === 'Supine');
  window.frontleverPullWorkouts = entries.filter(ex => ex.position === 'Hanging');
  return entries;
})();
