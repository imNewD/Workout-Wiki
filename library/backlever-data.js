/* GRND // WORKOUT WIKI — BACK LEVER LIBRARY DATA
   Loaded by index.html via <script src="library/backlever-data.js"></script>
   This file reuses existing back lever progressions from the isometric library
   and adds a complete progression from German hang through one-arm back lever,
   with bar, parallettes, and rings variants throughout.

   JOINT NOTES — BACK LEVER vs FRONT LEVER:
   ─ Shoulder is in extreme EXTENSION (vs flexion in front lever) → posterior
     deltoid, teres major, long head of triceps under load. Anterior capsule and
     bicep tendon are passively stretched and at risk. shoulder:5 for straight-arm holds.
   ─ Elbow is straight under shoulder extension load → bicep tendon is eccentrically
     stressed across both joints. elbow:3 for standard straight-arm; elbow:4 for
     bent-arm entry holds (compression) and dynamic negatives/raises.
   ─ Wrist is in a pronated position under extension load → wrist:3 for bar/rings;
     wrist:2 for parallettes (neutral grip relieves pronation stress).
   ─ Thoracic: chest, pec minor, and anterior shoulder are under significant passive
     stretch → thoracic:3 for all back lever holds (vs :2 in front lever).
   ─ Lower back: gravity pulls hips/legs down in both levers, but back lever's
     spinal extension position allows erectors to assist slightly → lowerBack:3
     for tuck-family holds, lowerBack:4 for straddle/full (longer moment arm).
   ─ Finger stress increases dramatically through the one-arm progression as
     unilateral load concentrates on fewer digits.

   PROGRESSION ORDER (difficulty):
   ─ Prep (diff 3–5)   German Hang · Active German Hang · Skin the Cat
   ─ Entry (diff 5)    Bent-Arm Tuck Back Lever
   ─ Tuck (diff 6–7)   Tuck Back Lever · Advanced Tuck Back Lever
   ─ Mid (diff 7–8)    Half-Lay Back Lever
   ─ Straddle (diff 8–9)   Straddle Back Lever
   ─ Full (diff 9–10)  Full Back Lever
   ─ Dynamic (diff 6–10)   Negatives · Raises
   ─ One-Arm (diff 8–10)   Reduced-Finger → Assisted → Tuck → Straddle → Full
*/

const backleverIsoIds = new Set([11, 29, 44]);

function cloneExercise(exercise, overrides = {}) {
  return { ...exercise, ...overrides };
}

const backlevers = (() => {
  const entries = [];
  const isoById = id => typeof isometrics !== 'undefined' && Array.isArray(isometrics)
    ? isometrics.find(ex => ex.id === id)
    : undefined;

  if (typeof isometrics !== 'undefined' && Array.isArray(isometrics)) {
    entries.push(...isometrics.filter(ex => backleverIsoIds.has(ex.id)));
  }

  const tuck     = isoById(11); // Tuck back lever
  const full     = isoById(12); // Full back lever
  const straddle = isoById(29); // Straddle back lever
  const halfLay  = isoById(44); // Half-lay back lever

  /* ─────────────────────────────────────────────────────────────────────
     BENT-ARM TUCK BACK LEVER — 'Inverted'
     Bent elbows shorten the effective lever arm and lower the shoulder
     load, making this a useful first back lever hold. However, bent
     elbows concentrate stress at the elbow joint — progress to
     straight-arm work as soon as shoulder strength permits.
  ───────────────────────────────────────────────────────────────────── */

  if (tuck) {
    entries.push(cloneExercise(tuck, {
      id: 2016,
      name: 'Bent-Arm Tuck Back Lever — Bar',
      alt: 'Bent-arm tuck back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 5,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Bent arm: elbow:4 — compression + bicep tendon load in bent position;
      // shoulder:4 — shorter lever reduces shoulder extension demand vs straight arm
      joints: { fingers:3, wrist:3, elbow:4, shoulder:4, neck:1, thoracic:3, lowerBack:2, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever performed with bent elbows on a pull-up bar. The bent-arm position shortens the lever and reduces shoulder extension load, making this a first stepping stone before the straight-arm tuck. Note that the bent elbow concentrates stress at the elbow and bicep tendon — straighten the arms progressively as strength develops rather than staying here long-term.',
      cues: 'Keep the elbows at roughly 90 degrees and the knees pulled firmly to the chest. Hold the body parallel to the floor. Focus on feeling the shoulder extension work actively. Gradually extend the arms across weeks until the hold is fully straight-arm.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2017,
      name: 'Bent-Arm Tuck Back Lever — Parallettes',
      alt: 'Bent-arm tuck back lever hold on parallettes',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 5,
      equipment: 'Parallettes',
      position: 'Inverted',
      // Neutral grip → wrist:2; bent arm → elbow:4
      joints: { fingers:3, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:3, lowerBack:2, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A bent-arm tuck back lever on parallettes. The neutral grip removes pronation stress from the wrist, making this a good entry point for those with wrist sensitivity. The bent elbow still increases elbow joint stress — progress toward straight arms as shoulder strength grows.',
      cues: 'Press the handles down and keep the elbows bent at 90 degrees. Hold the tuck tight and maintain a parallel body line. Use the neutral grip advantage to focus entirely on shoulder and core control.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2018,
      name: 'Bent-Arm Tuck Back Lever — Rings',
      alt: 'Bent-arm tuck back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 6,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      // Ring instability adds to difficulty vs bar version despite same arm angle
      joints: { fingers:3, wrist:3, elbow:4, shoulder:4, neck:1, thoracic:3, lowerBack:2, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A bent-arm tuck back lever on gymnastic rings. The ring instability adds an active shoulder stabilisation demand even in this entry-level shape, requiring the wrist and shoulder to manage the ring angle while maintaining the inverted hold.',
      cues: 'Keep the rings close to the body and prevent them from flaring outward. Hold the elbows bent and the tuck firm. Stabilise the rings actively throughout — if the rings rotate uncontrollably, return to the bar version first.',
    }));
  }

  /* ─────────────────────────────────────────────────────────────────────
     TUCK BACK LEVER — 'Inverted'
     Straight arms, knees drawn to the chest. The fundamental back lever
     hold — all subsequent progressions build from this shape.
  ───────────────────────────────────────────────────────────────────── */

  if (tuck) {
    entries.push(cloneExercise(tuck, {
      id: 2001,
      name: 'Tuck Back Lever — Bar',
      alt: 'Tuck back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 6,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Straight arms, tuck: shoulder:5 — full extension load;
      // elbow:3 — bicep tendon stress under straight-arm extension
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A straight-arm tuck back lever on a pull-up bar. The bar provides a stable grip while the body is held inverted and horizontal, demanding active shoulder extension strength, bicep tendon integrity, and core tension in the tucked position. This is the foundation back lever shape — spend significant time here before extending the legs.',
      cues: 'Keep the arms fully extended and the shoulders actively working in extension. Hold the knees close to the chest and keep the hips level so the body stays parallel to the floor. The chest should face down and the back should face up.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2002,
      name: 'Tuck Back Lever — Parallettes',
      alt: 'Tuck back lever hold on parallettes',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 6,
      equipment: 'Parallettes',
      position: 'Inverted',
      // Neutral grip → wrist:2
      joints: { fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A straight-arm tuck back lever on parallettes. The neutral grip eliminates pronation stress from the wrists, making this the recommended entry point for those building toward the back lever with wrist sensitivity. The shoulder extension and core demands are identical to the bar version.',
      cues: 'Press the parallettes downward and keep the shoulders open and working in extension. Maintain a strong tuck with the knees close to the chest and the body parallel to the floor.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2003,
      name: 'Tuck Back Lever — Rings',
      alt: 'Tuck back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 7,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      // Rings: shoulder stability cost → one difficulty point above bar
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever on gymnastic rings. The freedom of the rings dramatically increases the shoulder coordination and stabilisation demands while preserving the horizontal inverted tuck shape. Ring rotation must be actively managed throughout the hold.',
      cues: 'Keep the rings close to the body and prevent them from flaring outward or rotating. Maintain core tension and a solid tuck to control the lever and joint angle. The rings should point forward — not diagonally.',
    }));
  }

  /* ─────────────────────────────────────────────────────────────────────
     ADVANCED TUCK BACK LEVER — 'Inverted'
     Hips pushed further back than the standard tuck but knees remain
     bent. Extends the moment arm without full leg extension — the
     essential bridge between tuck and half-lay.
  ───────────────────────────────────────────────────────────────────── */

  if (tuck) {
    entries.push(cloneExercise(tuck, {
      id: 2013,
      name: 'Advanced Tuck Back Lever — Bar',
      alt: 'Advanced tuck back lever with hips pushed further back on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 7,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Extended hips → longer lever → lowerBack climbs to 3, SI:1→1 same
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'An advanced tuck back lever on a pull-up bar in which the hips are pushed further behind the torso than the standard tuck but the knees remain bent. The longer moment arm increases shoulder extension and core demands, bridging the gap between the tuck and half-lay positions. Use this to build progressive lever strength rather than jumping directly to a half-lay.',
      cues: 'Push the hips back further from the chest while keeping the knees bent. Keep the arms straight and the body parallel to the floor. Incrementally push the hips further each session until ready to extend one leg.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2014,
      name: 'Advanced Tuck Back Lever — Parallettes',
      alt: 'Advanced tuck back lever on parallettes with hips pushed further back',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 7,
      equipment: 'Parallettes',
      position: 'Inverted',
      joints: { fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'An advanced tuck back lever on parallettes with the hips pushed further back. The neutral grip keeps the wrists comfortable while the extended hip position lengthens the lever arm and increases the shoulder extension demand.',
      cues: 'Keep the knees bent and push the hips further back than the standard tuck. Press through the parallettes and maintain active shoulder extension. The aim is to progressively reduce the tuck angle across sessions.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2015,
      name: 'Advanced Tuck Back Lever — Rings',
      alt: 'Advanced tuck back lever on gymnastic rings with hips pushed further back',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 8,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'An advanced tuck back lever on rings with the hips pushed further back than the standard tuck. The extended hip position increases the lever combined with ring instability, creating a significant shoulder and core challenge that prepares well for ring half-lay and straddle work.',
      cues: 'Control the rings and keep the arms straight. Push the hips away from the chest incrementally. Keep the knees bent and maintain a horizontal body line while managing ring angle.',
    }));
  }

  /* ─────────────────────────────────────────────────────────────────────
     HALF-LAY BACK LEVER — 'Inverted'
     One leg extended, one leg tucked. A significant jump in lever length
     from the tuck; builds the hip and shoulder capacity needed for the
     straddle without the full rotational demand of two extended legs.
  ───────────────────────────────────────────────────────────────────── */

  if (halfLay) {
    entries.push(cloneExercise(halfLay, {
      id: 2010,
      name: 'Half-Lay Back Lever — Bar',
      alt: 'One-leg extended back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 7,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // One leg extended: longer lever → lowerBack holds at 3, knee reduced vs tuck
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0 },
      desc: 'A half-lay back lever on a pull-up bar with one leg fully extended and one leg tucked. The asymmetric position significantly extends the moment arm beyond the tuck while staying shorter than a straddle or full back lever. This is a critical step in building the shoulder and core strength for full leg extension.',
      cues: 'Keep the hips level and the core braced hard. Extend one leg fully and hold it straight while the other remains tucked. Alternate legs across sets to develop both sides evenly and work toward extending both legs into the straddle.',
    }));

    entries.push(cloneExercise(halfLay, {
      id: 2011,
      name: 'Half-Lay Back Lever — Parallettes',
      alt: 'One-leg extended back lever hold on parallettes',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 7,
      equipment: 'Parallettes',
      position: 'Inverted',
      joints: { fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0 },
      desc: 'A half-lay back lever on parallettes with one leg extended. The neutral grip reduces wrist stress while the single extended leg develops the shoulder extension strength and core control needed for the straddle and full back lever.',
      cues: 'Control the extended leg and keep the body rigid and parallel. Press through the parallettes and keep the shoulders working actively in extension. Do not let the hip of the extended leg drop below the other.',
    }));

    entries.push(cloneExercise(halfLay, {
      id: 2012,
      name: 'Half-Lay Back Lever — Rings',
      alt: 'One-leg extended back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 8,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0 },
      desc: 'A half-lay back lever on gymnastic rings with one leg extended. The asymmetric leg position combined with ring instability creates a substantial shoulder stability and core control challenge, particularly in preventing lateral rotation of the body.',
      cues: 'Keep the rings steady and the body rigid. Align the extended leg with the shoulders and keep the hips level. Control any tendency for the body to rotate toward the tucked leg side.',
    }));
  }

  /* ─────────────────────────────────────────────────────────────────────
     STRADDLE BACK LEVER — 'Inverted'
     Both legs extended and spread wide. The straddle reduces the lever
     arm compared to legs-together while placing a new groin and hip
     abductor demand. A major skill in its own right.
  ───────────────────────────────────────────────────────────────────── */

  if (straddle) {
    entries.push(cloneExercise(straddle, {
      id: 2004,
      name: 'Straddle Back Lever — Bar',
      alt: 'Straddle back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 8,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Full leg extension but spread wide: lowerBack:4, groin:1, SI:2
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      desc: 'A straddle back lever on a pull-up bar with both legs fully extended and spread wide. The straddle reduces the moment arm compared to legs together, but the shoulder extension demand, lower back load, and overall difficulty are still substantial. The bar provides a stable grip for this demanding inverted hold.',
      cues: 'Spread the legs as wide as comfortable and keep the hips level. Hold the arms completely straight and engage the glutes and core. The hips must not drop — squeeze everything to maintain the horizontal line.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2005,
      name: 'Straddle Back Lever — Parallettes',
      alt: 'Straddle back lever hold on parallettes',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 8,
      equipment: 'Parallettes',
      position: 'Inverted',
      joints: { fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      desc: 'A straddle back lever on parallettes with both legs extended and spread wide. The neutral grip relieves the wrist load of the pronated bar grip while the shoulder extension demands and lower back loading remain the same.',
      cues: 'Keep the legs wide and the body tight. Press through the parallettes and maintain active shoulder extension. Focus on keeping the hips level — the straddle can allow one hip to drift lower if tension is lost.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2006,
      name: 'Straddle Back Lever — Rings',
      alt: 'Straddle back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 9,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      desc: 'A straddle back lever on gymnastic rings with both legs extended and spread wide. Ring instability adds a substantial shoulder coordination demand to what is already a demanding hold. The rings must be actively prevented from rotating or drifting while the body stays horizontal.',
      cues: 'Keep the rings aligned and the body completely rigid. Focus on active shoulder extension and controlling the rings through the entire hold. Spread the legs wide and engage the glutes hard.',
    }));
  }

  /* ─────────────────────────────────────────────────────────────────────
     FULL BACK LEVER — 'Inverted'
     Straight body, legs together, toes pointed. Maximum lever arm.
     The benchmark back lever skill.
  ───────────────────────────────────────────────────────────────────── */

  if (full) {
    entries.push(cloneExercise(full, {
      id: 2007,
      name: 'Back Lever — Bar',
      alt: 'Full back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 9,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      hof: true,
      // Full straight body: maximum lever → lowerBack:4, SI:2; no knee/groin
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'The full back lever on a pull-up bar with the body completely straight and legs together. This is the benchmark back lever skill. The body remains horizontal and inverted while the shoulders hold the extreme extension position, demanding exceptional posterior chain and shoulder strength, full-body tension, and bicep tendon integrity at its maximum load.',
      cues: 'Keep the entire body rigid with toes pointed and glutes fully engaged. Press the bar down and hold the shoulders in active extension. The hips must not drop — every segment of the body must contribute to maintaining the perfect horizontal line.',
    }));

    entries.push(cloneExercise(full, {
      id: 2008,
      name: 'Back Lever — Parallettes',
      alt: 'Full back lever hold on parallettes',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 9,
      equipment: 'Parallettes',
      position: 'Inverted',
      hof: true,
      joints: { fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'The full back lever on parallettes with the body completely straight and legs together. The neutral grip position reduces the wrist load of the pronated bar grip while the shoulder, core, and posterior chain demands at maximum lever length remain unchanged.',
      cues: 'Keep the hips level and the shoulders working actively. Hold the legs straight with toes pointed and squeeze the glutes. The chest should face directly downward with the back facing up toward the ceiling.',
    }));

    entries.push(cloneExercise(full, {
      id: 2009,
      name: 'Back Lever — Rings',
      alt: 'Full back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 10,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      hof: true,
      // Ring instability at full lever length = diff:10
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'The full back lever on gymnastic rings — one of the most demanding ring static skills. Ring instability adds a significant challenge to the extreme shoulder extension hold at full lever length. The body must remain perfectly rigid while the rings are kept aligned and under control throughout.',
      cues: 'Control the rings actively and keep the shoulder angle stable. Maintain a tight, straight body with hips level, glutes engaged, and toes pointed. The rings must face forward and not rotate during the hold.',
    }));
  }

  /* ─────────────────────────────────────────────────────────────────────
     NEGATIVES & RAISES — 'InvertedDynamic'
     Dynamic loading through the back lever path builds tendon strength,
     motor control, and positional accuracy. Negatives and raises are
     critical for building the straddle and full back lever when static
     holds are not yet achievable, and for advancing once they are.
  ───────────────────────────────────────────────────────────────────── */

  if (tuck && full) {
    entries.push(cloneExercise(tuck, {
      id: 2030,
      name: 'Tuck Back Lever Negatives — Bar',
      alt: 'Tuck back lever slow lowering from inverted hang on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 6,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      // Dynamic load through tuck path: elbow:4 (eccentric bicep tendon load)
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A slow eccentric lowering from an inverted tuck hang to the horizontal tuck back lever position. Negatives in the tuck shape eccentrically load the shoulder extensors and bicep tendon, building the tendon resilience and shoulder control needed for a solid static tuck hold without requiring the isometric hold duration yet.',
      cues: 'From a tucked inverted hang, slowly lower the body to the horizontal position. Take 3–5 seconds per rep. Keep the core braced, the arms straight, and the tuck consistent throughout. Return to the inverted hang under control before repeating.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2031,
      name: 'Straddle Back Lever Negatives — Bar',
      alt: 'Straddle back lever slow lowering from inverted hang on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 8,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      desc: 'A slow eccentric lowering from an inverted straddle hang to the horizontal straddle back lever position. The straddle leg position reduces lever length while the eccentric load efficiently builds shoulder extension and lower back strength for the full back lever.',
      cues: 'Spread the legs wide before initiating the lower. Lower slowly and with control to the horizontal position, hold briefly, then return to the inverted hang. Keep the hips level and the arms locked straight throughout.',
    }));

    entries.push(cloneExercise(full, {
      id: 2032,
      name: 'Back Lever Negatives — Bar',
      alt: 'Full back lever slow lowering from inverted hang on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 9,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      // Full lever dynamic: lowerBack:5 under eccentric load; elbow:4
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A slow eccentric lowering from an inverted hang to the full back lever position with legs together. This is among the most effective tools for developing the full back lever — the eccentric phase loads the shoulder extensors, bicep tendons, and lower back through the complete range. Use these to develop hold strength when a full back lever cannot yet be maintained statically.',
      cues: 'From a straight-body inverted hang, slowly lower to the horizontal position. Take 3–5 seconds. Keep the entire body rigid, the arms locked, and the toes pointed. Return to the inverted hang under complete control before each rep.',
    }));

    entries.push(cloneExercise(full, {
      id: 2033,
      name: 'Back Lever Negatives — Rings',
      alt: 'Full back lever slow lowering from inverted hang on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 10,
      equipment: 'Gymnastic rings',
      position: 'InvertedDynamic',
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A slow eccentric lowering into the full back lever on gymnastic rings. Managing ring rotation while performing a controlled full-body negative at maximum lever length is one of the most demanding back lever strength exercises available.',
      cues: 'Control the rings throughout the entire descent. Lower slowly and maintain complete body rigidity. The rings must not flare or rotate — maintain active shoulder tension and a firm grip to keep them aligned.',
    }));

    entries.push(cloneExercise(full, {
      id: 2034,
      name: 'Back Lever Raises — Bar',
      alt: 'Full back lever raise from horizontal to inverted hang on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 9,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A concentric back lever raise starting from the horizontal back lever position and lifting back up to the inverted hang. This is the concentric counterpart to back lever negatives and develops the ability to actively move through the full lever range of motion under load. Combine with negatives for a full raise-and-lower cycle.',
      cues: 'From the back lever position, actively drive the legs upward using the shoulder extensors, lats, and core to raise to the inverted hang. Maintain a straight body and avoid using momentum. Pause at both ends for maximum loading.',
    }));
  }

  /* ─────────────────────────────────────────────────────────────────────
     REDUCED-FINGER BACK LEVER — 'Inverted'
     Progressively removing fingers from one hand shifts the load
     laterally, building the unilateral grip, wrist, and shoulder
     strength required for the one-arm back lever.
     Progress very slowly — finger tendon injuries in this phase
     accumulate silently and can set training back months.
  ───────────────────────────────────────────────────────────────────── */

  if (tuck) {
    entries.push(cloneExercise(tuck, {
      id: 2040,
      name: 'Three-Finger Tuck Back Lever — Bar',
      alt: 'Tuck back lever with three fingers on one hand on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'fingers', 'bar'],
      diff: 8,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Reduced grip: fingers:4; unilateral lateral shift → wrist:4, SI:2
      joints: { fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:2, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever with only three fingers (no pinky) on one hand. Removing one finger shifts the load laterally and begins building the unilateral grip and wrist strength needed for the one-arm back lever. The asymmetry is felt through the shoulder and wrist on the reducing side and demands core work to keep the body level.',
      cues: 'Remove the pinky from one hand and hold the tuck back lever. Keep the body as level as possible. Manage the lateral load through active core and lat engagement on the reducing side. Alternate sides across sessions.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2041,
      name: 'Two-Finger Tuck Back Lever — Bar',
      alt: 'Tuck back lever with two fingers on one hand on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'fingers', 'bar'],
      diff: 9,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Two fingers: severe finger tendon load → fingers:5; high wrist:4
      joints: { fingers:5, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:2, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever with only the index and middle fingers on one hand. The severe reduction in grip area massively increases finger tendon and wrist stress on that side. Only attempt this variation once the three-finger version is comfortable across multiple sets and finger tendon health is well established. Progress slowly and take more rest days between sessions.',
      cues: 'Hold with the index and middle fingers on the reducing hand. Keep the hips level and the tuck firm. Manage the asymmetric load through core and shoulder control. Listen carefully to any finger joint discomfort — stop immediately if anything feels sharp or strained.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2042,
      name: 'One-Finger Tuck Back Lever — Bar',
      alt: 'Tuck back lever with one finger on one hand on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'fingers', 'bar'],
      diff: 9,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Single finger: maximum tendon stress → fingers:5, wrist:5
      joints: { fingers:5, wrist:5, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:2, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever with only one finger (typically the middle finger) on one hand. This is the final finger reduction before the full one-arm back lever and requires exceptional finger tendon strength and wrist integrity built over months. The body is substantially loaded through a single digit on one side, demanding enormous unilateral control. Finger tendons at this stage are at extreme injury risk — progress only after a very long base of reduced-finger work.',
      cues: 'Use the strongest single finger. Keep the tuck tight to minimise the lever arm as much as possible. The core must work very hard to prevent lateral rotation. This is a tendon-first skill — prioritise tissue health above all else.',
    }));
  }

  /* ─────────────────────────────────────────────────────────────────────
     ONE-ARM BACK LEVER — 'Inverted'
     Elite gymnastic skill. A single arm supports the full body weight
     in an inverted horizontal position. Requires years of progressive
     loading. Tremendous shoulder extension strength, finger tendon
     integrity, wrist stability, and rotational core control.
  ───────────────────────────────────────────────────────────────────── */

  if (tuck && straddle && full) {
    entries.push(cloneExercise(tuck, {
      id: 2050,
      name: 'Assisted One-Arm Tuck Back Lever — Bar',
      alt: 'Assisted one-arm tuck back lever with free hand on thigh on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 9,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Free hand assists: reduces peak one-arm load slightly;
      // SI:3 due to rotational resistance demand; neck:2 due to unilateral load
      joints: { fingers:4, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:4, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'An assisted one-arm tuck back lever on a pull-up bar where the free hand rests lightly on the thigh to provide minimal support. The working arm carries most of the load while the free hand reduces the full one-arm demand. This is the recommended entry point into one-arm back lever training, allowing the shoulder, elbow, and wrist to adapt to unilateral loading before full bodyweight is applied.',
      cues: 'Hold the bar with the working arm and place the free hand lightly on the thigh. Keep the tuck tight and maintain the horizontal position as long as possible. Gradually reduce the pressure applied by the free hand week by week.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2051,
      name: 'One-Arm Tuck Back Lever — Bar',
      alt: 'Full one-arm tuck back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 10,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // One arm, tuck: fingers:4 (single hand full grip); wrist:4; elbow:4;
      // lowerBack:4; SI:3 — heavy rotational resistance; neck:2
      joints: { fingers:4, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:4, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A one-arm tuck back lever on a pull-up bar with no assistance. The single supporting arm carries the full body weight in an inverted horizontal position while the free arm controls balance. This requires exceptional unilateral shoulder extension strength, finger tendon integrity, and the lateral core control to resist the rotational pull of the unsupported side.',
      cues: 'Keep the working shoulder active and the elbow straight. Brace the core extremely hard to resist rotation. Hold the tuck tight to keep the lever arm as short as possible. The free arm assists balance only and must not grip anything.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2052,
      name: 'One-Arm Tuck Back Lever — Rings',
      alt: 'Full one-arm tuck back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 10,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:4, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:4, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A one-arm tuck back lever on gymnastic rings. The ring adds a rotation management challenge on top of an already elite-level unilateral hold. The ring must be actively prevented from rotating while the body stays horizontal in the tuck position. This is an exceptionally rare skill.',
      cues: 'Hold the ring firmly and resist rotation throughout the entire hold. Brace the core hard and keep the tuck position tight. The free arm controls lateral balance and must not contact the ring.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2053,
      name: 'One-Arm Straddle Back Lever — Bar',
      alt: 'One-arm straddle back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 10,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Straddle reduces lever vs full; but SI:3 and lowerBack:5 due to one-arm rotational load
      joints: { fingers:4, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:5, si:3, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      desc: 'A one-arm straddle back lever on a pull-up bar. The straddle leg position reduces the lever length compared to legs together, but the shoulder extension, elbow, and spinal demands remain extreme at this level of unilateral loading. This is a progression step toward the full one-arm back lever.',
      cues: 'Spread the legs wide and keep the hips level. Use the core and lat on the working side to prevent the body from rotating. The working arm must remain straight and the shoulder must stay actively extended throughout.',
    }));

    entries.push(cloneExercise(full, {
      id: 2054,
      name: 'One-Arm Back Lever — Bar',
      alt: 'Full one-arm back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 10,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Maximum load: fingers:4, wrist:5, elbow:5, lowerBack:5, SI:3
      joints: { fingers:4, wrist:5, elbow:5, shoulder:5, neck:2, thoracic:3, lowerBack:5, si:3, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'The full one-arm back lever on a pull-up bar — one of the most demanding static skills in calisthenics. A single arm supports the entire body weight in an inverted horizontal position with legs together and straight. This requires elite levels of shoulder extension strength, finger tendon integrity, wrist stability, and rotational core control built over years of progressive training.',
      cues: 'Keep the working arm locked straight and the shoulder actively extended. Squeeze the entire body into a rigid plank from fingertips to pointed toes. The free arm assists lateral balance without gripping. This is a skill that demands years of patient, progressive loading to achieve safely.',
    }));
  }

  window.backleverStaticWorkouts  = entries.filter(ex => ex.position === 'Inverted');
  window.backleverPrepWorkouts    = entries.filter(ex => ex.position === 'Hang');
  window.backleverDynamicWorkouts = entries.filter(ex => ex.position === 'InvertedDynamic');
  return entries;
})();
