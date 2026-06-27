/* ─────────────────────────────────────────────────────────────────────────
 * EXERCISE NAMING RULES
 * Format:  [Main Variant] [Domain] | [Other modifier] [(equipment/surface)]
 *
 *   • Domain        — the movement family: Push-Up, Pull-Up, Front Lever, …
 *   • Main Variant  — qualifiers like "One Arm"; always filled FIRST and
 *                     placed BEFORE the domain (never after a "|").
 *   • Other modifier— only added when an exercise has TWO modifiers; goes
 *                     AFTER the "|".
 *   • (equipment)   — always AFTER the "|" and in brackets.
 *
 * Examples:
 *   Push-Up | One Arm           → NEVER
 *   One Arm Push-Up             → YES
 *   Push-Up | Negative          → NEVER
 *   Negative Push-Up            → YES
 *   One Arm Push-Up | Negative  → YES
 *
 * The standard Push-Up is the anchor at diff 3.0. For difficulty or kcal
 * calibration, check pushup-data.js or ask.
 * ───────────────────────────────────────────────────────────────────────── */

/* cloneExercise is defined in data-registry.js (loaded before this file) */

/* ── BASE STATIC HOLDS ────────────────────────────────────────
   These are the canonical back lever isometric progressions.
   isometric-data.js spreads backleverBaseStatics into its array.
──────────────────────────────────────────────────────────────── */

const _blTuck =   {
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

const _blFull =   {
    id: 12,
    name: "Back Lever | (Parallettes)",
    alt: "Back lever on parallettes · straight back lever parallettes",
    muscles: [
      {n:"Biceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Lats", p:true}
    ],
    tags: ["back", "shoulders", "core", "parallettes"],
    diff: 8.3,
  hof: true,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 4,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 5,
    kcalPerRep: [3, 5],
    desc: "The full back lever on parallettes — straight body, legs together, toes pointed. The neutral grip removes pronation stress from the wrists while preserving every other demand: extreme shoulder extension, maximum bicep tendon load, full-body tension, and lower back loading at the longest lever arm. Wrist-sensitive athletes often find this a more approachable first full back lever, but the strength requirement is identical to the bar version.",
    cues: "Press the handles firmly downward and hold the shoulders in active extension. Keep the entire body rigid from fingertips to pointed toes — glutes fully engaged, core braced. Hips must not drop even slightly. Enter via a controlled skin-the-cat descent; never load directly into the position.",
    equipment: "Parallettes",
    position: "Inverted",
    youtube: "LINK_TODO"
  };

const _blStraddle =   {
    id: 29,
    name: "Straddle BL | (Parallettes)",
    alt: "Straddle back lever on parallettes · wide-leg back lever parallettes",
    muscles: [
      {n:"Biceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Lats", p:true}
    ],
    tags: ["back", "shoulders", "core", "parallettes"],
    diff: 8,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 5,
    kcalPerRep: [2, 3.5],
    desc: "A straddle back lever on parallettes with both legs extended and spread wide. The neutral grip relieves wrist load while the shoulder extension demand, lower back loading, and full-body tension are identical to the bar version. Spread the legs as wide as needed to hold the horizontal position, then narrow gradually as strength develops. The standard bridge between the half-lay and full back lever.",
    cues: "Keep the legs wide and the hips level. Press through the parallettes and maintain active shoulder extension. Focus on keeping the hips level — the straddle can allow one hip to drift lower if tension is lost. Narrow the straddle angle gradually across sessions to progress toward the full back lever.",
    equipment: "Parallettes",
    position: "Inverted",
    youtube: "LINK_TODO"
  };

const _blHalfLay = {
    id: 45,
    name: "Half-Lay BL | (Parallettes)",
    alt: "Half-lay back lever on parallettes · bent-knee layout back lever parallettes",
    muscles: [
      {n:"Biceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Lats", p:false}
    ],
    tags: ["back", "shoulders", "core", "parallettes"],
    diff: 7,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2, 3.5],
    desc: "A half-lay back lever on parallettes with both hips fully extended and both knees bent at approximately 90 degrees, holding the body horizontal. The thighs are in line with the torso while the lower legs hang perpendicular below. This extends the lever arm significantly beyond the advanced tuck — because the hips are now fully open — while keeping it shorter than the one-leg position. A precise intermediate step for building the shoulder extension strength and lower back loading tolerance needed for full leg extension work. The neutral grip keeps the wrists comfortable throughout.",
    cues: "Press firmly through the parallettes and open the hips fully so the thighs align with the torso. Keep both knees bent at 90 degrees and hold them level — do not let one hip drop. Engage the glutes and lower back actively to hold the horizontal position. Build solid holds here before progressing to extending one leg fully.",
    equipment: "Parallettes",
    position: "Inverted",
    youtube: "LINK_TODO"
  };

const _blOneLeg = {
    id: 44,
    name: "One-Leg BL | (Parallettes)",
    alt: "One-leg back lever on parallettes · single-leg back lever parallettes",
    muscles: [
      {n:"Biceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Lats", p:false}
    ],
    tags: ["back", "shoulders", "core", "parallettes"],
    diff: 7.5,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 5,
    kcalPerRep: [2, 3.5],
    desc: "A one-leg back lever on parallettes with one leg fully extended and the other tucked. The neutral grip keeps the wrists comfortable while the asymmetric leg position creates a meaningful moment arm beyond the half-lay, loading one side of the hip and lower back more than the other. A critical step between the half-lay and straddle back lever, building the unilateral shoulder and core strength needed for full leg extension.",
    cues: "Press through the parallettes and keep the arms locked straight. Extend one leg fully and hold it in line with the torso. Keep the hips level — the extended-leg hip must stay aligned with the tucked-leg hip. Alternate legs across sets to develop both sides evenly. If the hip drops on the extended side, pull that leg slightly back toward the tuck before progressing.",
    equipment: "Parallettes",
    position: "Inverted",
    youtube: "LINK_TODO"
  };

/* ── PUBLIC BASE ARRAY ────────────────────────────────────────
   Consumed by isometric-data.js. backlever-data.js must load first.
──────────────────────────────────────────────────────────────── */
const backleverBaseStatics = [_blTuck, _blHalfLay, _blOneLeg, _blStraddle, _blFull];

/* ── ID SET (used by index.html for filtering) ───────────────── */
const backleverIsoIds = new Set([11, 12, 29, 44, 45]);

/* ── COMPLETE BACK LEVER LIBRARY ──────────────────────────────── */
const backlevers = (() => {
  // Base statics are kept separate for isometric-data.js consumption.
  // Including them here would create duplicates alongside the equipment-specific variants below.
  const entries = [];

  const tuck     = _blTuck;
  const full     = _blFull;
  const straddle = _blStraddle;
  const halfLay  = _blHalfLay;
  const oneLeg   = _blOneLeg;


  /* ─────────────────────────────────────────────────────────────────────
     BENT-ARM TUCK BACK LEVER — 'Inverted'
     Bent elbows shorten the effective lever arm and lower the shoulder
     load, making this a useful first back lever hold. However, bent
     elbows concentrate stress at the elbow joint — progress to
     straight-arm work as soon as shoulder strength permits.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(cloneExercise(tuck, {
      id: 2017,
      name: 'Bent-Arm Tuck BL | (Parallettes)',
      alt: 'Bent-arm tuck back lever hold on parallettes',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 5,
      strength: 3, risk: 3, technique: 3, mobility: 2,
      equipment: 'Parallettes',
      position: 'Inverted',
      // Neutral grip → wrist:2; bent arm → elbow:4
      joints: { fingers:3, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:3, lowerBack:2, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A bent-arm tuck back lever on parallettes. The neutral grip removes pronation stress from the wrist, making this a good entry point for those with wrist sensitivity. The bent elbow still increases elbow joint stress — progress toward straight arms as shoulder strength grows.',
      cues: 'Press the handles down and keep the elbows bent at 90 degrees. Hold the tuck tight and maintain a parallel body line. Use the neutral grip advantage to focus entirely on shoulder and core control.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2016,
      name: 'Bent-Arm Tuck BL | (Bar)',
      alt: 'Bent-arm tuck back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 5,
      strength: 3, risk: 3, technique: 3, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Bent arm: elbow:4 — compression + bicep tendon load in bent position;
      // shoulder:4 — shorter lever reduces shoulder extension demand vs straight arm
      joints: { fingers:3, wrist:3, elbow:4, shoulder:4, neck:1, thoracic:3, lowerBack:2, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever performed with bent elbows on a pull-up bar. The bent-arm position shortens the lever and reduces shoulder extension load, making this a first stepping stone before the straight-arm tuck. Note that the bent elbow concentrates stress at the elbow and bicep tendon — straighten the arms progressively as strength develops rather than staying here long-term.',
      cues: 'Keep the elbows at roughly 90 degrees and the knees pulled firmly to the chest. Hold the body parallel to the floor. Focus on feeling the shoulder extension work actively. Gradually extend the arms across weeks until the hold is fully straight-arm.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2018,
      name: 'Bent-Arm Tuck BL | (Rings)',
      alt: 'Bent-arm tuck back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 6,
      strength: 3, risk: 3, technique: 4, mobility: 2,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      // Ring instability adds to difficulty vs bar version despite same arm angle
      joints: { fingers:3, wrist:3, elbow:4, shoulder:4, neck:1, thoracic:3, lowerBack:2, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A bent-arm tuck back lever on gymnastic rings. The ring instability adds an active shoulder stabilisation demand even in this entry-level shape, requiring the wrist and shoulder to manage the ring angle while maintaining the inverted hold.',
      cues: 'Keep the rings close to the body and prevent them from flaring outward. Hold the elbows bent and the tuck firm. Stabilise the rings actively throughout — if the rings rotate uncontrollably, return to the bar version first.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     TUCK BACK LEVER — 'Inverted'
     Straight arms, knees drawn to the chest. The fundamental back lever
     hold — all subsequent progressions build from this shape.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(tuck); // id:11  Tuck BL — Parallettes (base static)

    entries.push(cloneExercise(tuck, {
      id: 2001,
      name: 'Tuck BL | (Bar)',
      alt: 'Tuck back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 6,
      strength: 4, risk: 2, technique: 4, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Straight arms, tuck: shoulder:5 — full extension load;
      // elbow:3 — bicep tendon stress under straight-arm extension
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
      // Rings: shoulder stability cost → one difficulty point above bar
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever on gymnastic rings. The freedom of the rings dramatically increases the shoulder coordination and stabilisation demands while preserving the horizontal inverted tuck shape. Ring rotation must be actively managed throughout the hold.',
      cues: 'Keep the rings close to the body and prevent them from flaring outward or rotating. Maintain core tension and a solid tuck to control the lever and joint angle. The rings should point forward — not diagonally.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     ADVANCED TUCK BACK LEVER — 'Inverted'
     Hips pushed further back than the standard tuck but knees remain
     bent. Extends the moment arm without full leg extension — the
     essential bridge between tuck and half-lay.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(cloneExercise(tuck, {
      id: 2014,
      name: 'Advanced Tuck BL | (Parallettes)',
      alt: 'Advanced tuck back lever on parallettes with hips pushed further back',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 7,
      strength: 4, risk: 3, technique: 4, mobility: 2,
      equipment: 'Parallettes',
      position: 'Inverted',
      joints: { fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'An advanced tuck back lever on parallettes with the hips pushed further back. The neutral grip keeps the wrists comfortable while the extended hip position lengthens the lever arm and increases the shoulder extension demand.',
      cues: 'Keep the knees bent and push the hips further back than the standard tuck. Press through the parallettes and maintain active shoulder extension. The aim is to progressively reduce the tuck angle across sessions.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2013,
      name: 'Advanced Tuck BL | (Bar)',
      alt: 'Advanced tuck back lever with hips pushed further back on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 7,
      strength: 4, risk: 3, technique: 4, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Extended hips → longer lever → lowerBack climbs to 3, SI:1→1 same
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'An advanced tuck back lever on a pull-up bar in which the hips are pushed further behind the torso than the standard tuck but the knees remain bent. The longer moment arm increases shoulder extension and core demands, bridging the gap between the tuck and half-lay positions. Use this to build progressive lever strength rather than jumping directly to a half-lay.',
      cues: 'Push the hips back further from the chest while keeping the knees bent. Keep the arms straight and the body parallel to the floor. Incrementally push the hips further each session until ready to extend one leg.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2015,
      name: 'Advanced Tuck BL | (Rings)',
      alt: 'Advanced tuck back lever on gymnastic rings with hips pushed further back',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 8,
      strength: 5, risk: 3, technique: 4, mobility: 2,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'An advanced tuck back lever on rings with the hips pushed further back than the standard tuck. The extended hip position increases the lever combined with ring instability, creating a significant shoulder and core challenge that prepares well for ring half-lay and straddle work.',
      cues: 'Control the rings and keep the arms straight. Push the hips away from the chest incrementally. Keep the knees bent and maintain a horizontal body line while managing ring angle.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     HALF-LAY BACK LEVER — 'Inverted'
     Both hips fully extended, both knees bent at ~90°, body horizontal.
     The thighs align with the torso; lower legs hang perpendicular.
     A genuine intermediate between advanced tuck and one-leg — the hip
     extension opens the lever without adding the full leg-length moment arm.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(halfLay); // id:45  Half-Lay BL — Parallettes (base static)

    entries.push(cloneExercise(halfLay, {
      id: 2019,
      name: 'Half-Lay BL | (Bar)',
      alt: 'Half-lay back lever on pull-up bar · bent-knee layout back lever bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 7,
      strength: 4, risk: 3, technique: 4, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A half-lay back lever on a pull-up bar with both hips fully extended and both knees bent at approximately 90 degrees. The thighs align with the torso while the lower legs hang perpendicular below, producing a longer lever arm than the advanced tuck without committing to a full leg extension. A precise intermediate step for building shoulder and lower back capacity on the path to the one-leg position.',
      cues: 'Extend the hips fully so the thighs are in line with the torso, then keep both knees bent at 90 degrees. Press the bar down and hold the shoulders active in extension. Keep both hips level — do not let one side drop. Build solid holds before extending one leg toward the one-leg position.',
    }));

    entries.push(cloneExercise(halfLay, {
      id: 2020,
      name: 'Half-Lay BL | (Rings)',
      alt: 'Half-lay back lever on gymnastic rings · bent-knee layout back lever rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 7.5,
      strength: 5, risk: 3, technique: 4, mobility: 2,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A half-lay back lever on gymnastic rings with both hips fully extended and both knees bent at 90 degrees. Ring instability adds a meaningful shoulder coordination demand on top of the hip-extended lever position, requiring active ring control while the lower back and shoulder extensors hold the body horizontal.',
      cues: 'Keep the rings aligned and prevent them from rotating as you hold the half-lay position. Extend the hips fully and hold the knees bent at 90 degrees. Brace the core and keep both hips level. Control the rings through the entire hold — do not let them flare outward.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     ONE-LEG BACK LEVER — 'Inverted'
     One leg fully extended, one leg tucked. A significant jump in lever
     length from the half-lay; builds the unilateral hip and shoulder
     capacity needed for the straddle without the full bilateral demand
     of two extended legs.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(oneLeg); // id:44  One-Leg BL — Parallettes (base static)

    entries.push(cloneExercise(oneLeg, {
      id: 2010,
      name: 'One-Leg BL | (Bar)',
      alt: 'One-leg back lever hold on pull-up bar · single-leg back lever bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 7.5,
      strength: 5, risk: 3, technique: 4, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // One leg extended: longer lever → lowerBack holds at 3, knee reduced vs tuck
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0 },
      desc: 'A one-leg back lever on a pull-up bar with one leg fully extended and one leg tucked. The asymmetric position significantly extends the moment arm beyond the half-lay, loading one side of the hip and lower back more than the other. A critical step in building the shoulder and core strength needed for full leg extension.',
      cues: 'Keep the hips level and the core braced hard. Extend one leg fully and hold it straight while the other remains tucked. Alternate legs across sets to develop both sides evenly and work toward extending both legs into the straddle.',
    }));

    entries.push(cloneExercise(oneLeg, {
      id: 2012,
      name: 'One-Leg BL | (Rings)',
      alt: 'One-leg back lever hold on gymnastic rings · single-leg back lever rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 8,
      strength: 5, risk: 4, technique: 4, mobility: 2,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0 },
      desc: 'A one-leg back lever on gymnastic rings with one leg extended. The asymmetric leg position combined with ring instability creates a substantial shoulder stability and core control challenge, particularly in preventing lateral rotation of the body.',
      cues: 'Keep the rings steady and the body rigid. Align the extended leg with the shoulders and keep the hips level. Control any tendency for the body to rotate toward the tucked leg side.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     STRADDLE BACK LEVER — 'Inverted'
     Both legs extended and spread wide. The straddle reduces the lever
     arm compared to legs-together while placing a new groin and hip
     abductor demand. A major skill in its own right.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(straddle); // id:29  Straddle BL — Parallettes (base static)

    entries.push(cloneExercise(straddle, {
      id: 2004,
      name: 'Straddle BL | (Bar)',
      alt: 'Straddle back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 8,
      strength: 5, risk: 3, technique: 4, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Full leg extension but spread wide: lowerBack:4, groin:1, SI:2
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      desc: 'A straddle back lever on a pull-up bar with both legs fully extended and spread wide. The straddle reduces the moment arm compared to legs together, but the shoulder extension demand, lower back load, and overall difficulty are still substantial. The bar provides a stable grip for this demanding inverted hold.',
      cues: 'Spread the legs as wide as comfortable and keep the hips level. Hold the arms completely straight and engage the glutes and core. The hips must not drop — squeeze everything to maintain the horizontal line.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2006,
      name: 'Straddle BL | (Rings)',
      alt: 'Straddle back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 9,
      strength: 5, risk: 4, technique: 5, mobility: 3,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      desc: 'A straddle back lever on gymnastic rings with both legs extended and spread wide. Ring instability adds a substantial shoulder coordination demand to what is already a demanding hold. The rings must be actively prevented from rotating or drifting while the body stays horizontal.',
      cues: 'Keep the rings aligned and the body completely rigid. Focus on active shoulder extension and controlling the rings through the entire hold. Spread the legs wide and engage the glutes hard.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     FULL BACK LEVER — 'Inverted'
     Straight body, legs together, toes pointed. Maximum lever arm.
     The benchmark back lever skill.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(full); // id:12  BL — Parallettes (base static)

    entries.push(cloneExercise(full, {
      id: 2007,
      name: 'Back Lever | (Bar)',
      alt: 'Full back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 8.5,
      strength: 5, risk: 4, technique: 4, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      hof: true,
      // Full straight body: maximum lever → lowerBack:4, SI:2; no knee/groin
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'The full back lever on a pull-up bar with the body completely straight and legs together. This is the benchmark back lever skill. The body remains horizontal and inverted while the shoulders hold the extreme extension position, demanding exceptional posterior chain and shoulder strength, full-body tension, and bicep tendon integrity at its maximum load.',
      cues: 'Keep the entire body rigid with toes pointed and glutes fully engaged. Press the bar down and hold the shoulders in active extension. The hips must not drop — every segment of the body must contribute to maintaining the perfect horizontal line.',
    }));

    entries.push(cloneExercise(full, {
      id: 2009,
      name: 'Back Lever | (Rings)',
      alt: 'Full back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 8.9,
      strength: 5, risk: 5, technique: 5, mobility: 3,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      hof: true,
      // Ring instability at full lever length = diff:10
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'The full back lever on gymnastic rings — one of the most demanding ring static skills. Ring instability adds a significant challenge to the extreme shoulder extension hold at full lever length. The body must remain perfectly rigid while the rings are kept aligned and under control throughout.',
      cues: 'Control the rings actively and keep the shoulder angle stable. Maintain a tight, straight body with hips level, glutes engaged, and toes pointed. The rings must face forward and not rotate during the hold.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     NEGATIVES & RAISES — 'InvertedDynamic'
     Dynamic loading through the back lever path builds tendon strength,
     motor control, and positional accuracy. Negatives and raises are
     critical for building the straddle and full back lever when static
     holds are not yet achievable, and for advancing once they are.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(cloneExercise(tuck, {
      id: 2030,
      name: 'Tuck BL | Negative (Bar)',
      alt: 'Tuck back lever slow lowering from inverted hang on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 5.8,
      strength: 4, risk: 3, technique: 3, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      // Dynamic load through tuck path: elbow:4 (eccentric bicep tendon load)
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A slow eccentric lowering from an inverted tuck hang to the horizontal tuck back lever position. Negatives in the tuck shape eccentrically load the shoulder extensors and bicep tendon, building the tendon resilience and shoulder control needed for a solid static tuck hold without requiring the isometric hold duration yet.',
      cues: 'From a tucked inverted hang, slowly lower the body to the horizontal position. Take 3–5 seconds per rep. Keep the core braced, the arms straight, and the tuck consistent throughout. Return to the inverted hang under control before repeating.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2031,
      name: 'Straddle BL | Negative (Bar)',
      alt: 'Straddle back lever slow lowering from inverted hang on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 7.7,
      strength: 5, risk: 4, technique: 4, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      desc: 'A slow eccentric lowering from an inverted straddle hang to the horizontal straddle back lever position. The straddle leg position reduces lever length while the eccentric load efficiently builds shoulder extension and lower back strength for the full back lever.',
      cues: 'Spread the legs wide before initiating the lower. Lower slowly and with control to the horizontal position, hold briefly, then return to the inverted hang. Keep the hips level and the arms locked straight throughout.',
    }));

    entries.push(cloneExercise(full, {
      id: 2032,
      name: 'Back Lever | Negative (Bar)',
      alt: 'Full back lever slow lowering from inverted hang on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 8.3,
      strength: 5, risk: 4, technique: 4, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      // Full lever dynamic: lowerBack:5 under eccentric load; elbow:4
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A slow eccentric lowering from an inverted hang to the full back lever position with legs together. This is among the most effective tools for developing the full back lever — the eccentric phase loads the shoulder extensors, bicep tendons, and lower back through the complete range. Use these to develop hold strength when a full back lever cannot yet be maintained statically.',
      cues: 'From a straight-body inverted hang, slowly lower to the horizontal position. Take 3–5 seconds. Keep the entire body rigid, the arms locked, and the toes pointed. Return to the inverted hang under complete control before each rep.',
    }));

    entries.push(cloneExercise(full, {
      id: 2033,
      name: 'Back Lever | Negative (Rings)',
      alt: 'Full back lever slow lowering from inverted hang on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 8.7,
      strength: 5, risk: 5, technique: 5, mobility: 3,
      equipment: 'Gymnastic rings',
      position: 'InvertedDynamic',
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A slow eccentric lowering into the full back lever on gymnastic rings. Managing ring rotation while performing a controlled full-body negative at maximum lever length is one of the most demanding back lever strength exercises available.',
      cues: 'Control the rings throughout the entire descent. Lower slowly and maintain complete body rigidity. The rings must not flare or rotate — maintain active shoulder tension and a firm grip to keep them aligned.',
    }));

    entries.push(cloneExercise(full, {
      id: 2034,
      name: 'Back Lever | Raise (Bar)',
      alt: 'Full back lever raise from horizontal to inverted hang on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 9,
      strength: 5, risk: 4, technique: 4, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A concentric back lever raise starting from the horizontal back lever position and lifting back up to the inverted hang. This is the concentric counterpart to back lever negatives and develops the ability to actively move through the full lever range of motion under load. Combine with negatives for a full raise-and-lower cycle.',
      cues: 'From the back lever position, actively drive the legs upward using the shoulder extensors, lats, and core to raise to the inverted hang. Maintain a straight body and avoid using momentum. Pause at both ends for maximum loading.',
    }));

    entries.push(cloneExercise(full, {
      id: 2035,
      name: 'Back Lever | Negative (Parallettes)',
      alt: 'Full back lever slow lowering from inverted hang on parallettes',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 8.1,
      strength: 5, risk: 4, technique: 4, mobility: 3,
      equipment: 'Parallettes',
      position: 'InvertedDynamic',
      joints: { fingers:3, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A slow eccentric lowering into the full back lever on parallettes. The neutral grip reduces wrist pronation stress while preserving the full-range shoulder extension and posterior-chain loading of a true back lever negative.',
      cues: 'Lower in 3–5 seconds with the entire body locked straight. Press firmly through the handles, keep the shoulders active in extension, and do not allow the hips to sag as you reach horizontal.',
    }));

    entries.push(cloneExercise(full, {
      id: 2036,
      name: 'Back Lever | Raise (Parallettes)',
      alt: 'Full back lever raise from horizontal to inverted hang on parallettes',
      tags: ['shoulders', 'chest', 'core', 'parallettes'],
      diff: 9,
      strength: 5, risk: 4, technique: 4, mobility: 3,
      equipment: 'Parallettes',
      position: 'InvertedDynamic',
      joints: { fingers:3, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A concentric back lever raise on parallettes from the full horizontal position back to the inverted hang. The neutral grip keeps the wrists cleaner while the shoulders, biceps tendons, and core still have to pull the entire straight body back through the lever arc.',
      cues: 'Drive from the lats and shoulder extensors rather than swinging. Keep the body completely rigid, squeeze the glutes, and return to the inverted hang under full control.',
    }));

    entries.push(cloneExercise(full, {
      id: 2037,
      name: 'Back Lever | Raise (Rings)',
      alt: 'Full back lever raise from horizontal to inverted hang on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 10,
      strength: 5, risk: 5, technique: 5, mobility: 3,
      equipment: 'Gymnastic rings',
      position: 'InvertedDynamic',
      joints: { fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A concentric back lever raise on gymnastic rings. Moving from the full ring back lever back to the inverted hang while controlling ring rotation is one of the cleanest demonstrations of complete back lever strength through the full path.',
      cues: 'Keep the rings from drifting or turning as you raise. Move slowly, stay perfectly straight from shoulders to toes, and avoid using momentum to escape the bottom position.',
    }));

    entries.push(cloneExercise(full, {
      id: 2038,
      name: 'Supinated BL | (Bar)',
      alt: 'Full back lever hold · supinated grip · underhand back lever',
      tags: ['shoulders', 'chest', 'core', 'bar', 'supinated'],
      diff: 9.4,
      strength: 5, risk: 5, technique: 4, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A full back lever performed with a supinated grip on the pull-up bar. The underhand wrist position changes how the biceps tendon and anterior elbow tolerate the shoulder extension angle while still demanding a complete straight-body back lever.',
      cues: 'Lock the elbows, keep the body perfectly straight, and do not let the supinated grip turn into a bent-arm compensation. Build shoulder and biceps tendon tolerance progressively before long holds.',
    }));

    entries.push(cloneExercise(full, {
      id: 2039,
      name: 'Supinated BL | (Rings)',
      alt: 'Full back lever hold · supinated grip on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings', 'supinated'],
      diff: 10,
      strength: 5, risk: 5, technique: 5, mobility: 3,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'A full back lever on gymnastic rings held with a supinated grip. Ring instability plus the underhand hand position create a more demanding tendon-control challenge while the body still expresses the full straight back lever line.',
      cues: 'Actively control ring rotation and keep the elbows straight. Stay rigid through the trunk and glutes, and only load this grip after standard ring back levers are already comfortable.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     REDUCED-FINGER BACK LEVER — 'Inverted'
     Progressively removing fingers from one hand shifts the load
     laterally, building the unilateral grip, wrist, and shoulder
     strength required for the one-arm back lever.
     Progress very slowly — finger tendon injuries in this phase
     accumulate silently and can set training back months.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(cloneExercise(tuck, {
      id: 2040,
      name: '3-Finger Tuck BL | (Bar)',
      alt: 'Tuck back lever with three fingers on one hand on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'fingers', 'bar'],
      diff: 8,
      strength: 4, risk: 4, technique: 4, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Reduced grip: fingers:4; unilateral lateral shift → wrist:4, SI:2
      joints: { fingers:4, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:2, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever with only three fingers (no pinky) on one hand. Removing one finger shifts the load laterally and begins building the unilateral grip and wrist strength needed for the one-arm back lever. The asymmetry is felt through the shoulder and wrist on the reducing side and demands core work to keep the body level.',
      cues: 'Remove the pinky from one hand and hold the tuck back lever. Keep the body as level as possible. Manage the lateral load through active core and lat engagement on the reducing side. Alternate sides across sessions.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2041,
      name: '2-Finger Tuck BL | (Bar)',
      alt: 'Tuck back lever with two fingers on one hand on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'fingers', 'bar'],
      diff: 9,
      strength: 5, risk: 4, technique: 4, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Two fingers: severe finger tendon load → fingers:5; high wrist:4
      joints: { fingers:5, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:2, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever with only the index and middle fingers on one hand. The severe reduction in grip area massively increases finger tendon and wrist stress on that side. Only attempt this variation once the three-finger version is comfortable across multiple sets and finger tendon health is well established. Progress slowly and take more rest days between sessions.',
      cues: 'Hold with the index and middle fingers on the reducing hand. Keep the hips level and the tuck firm. Manage the asymmetric load through core and shoulder control. Listen carefully to any finger joint discomfort — stop immediately if anything feels sharp or strained.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2042,
      name: '1-Finger Tuck BL | (Bar)',
      alt: 'Tuck back lever with one finger on one hand on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'fingers', 'bar'],
      diff: 9.5,
      strength: 5, risk: 5, technique: 4, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Single finger: maximum tendon stress → fingers:5, wrist:5
      joints: { fingers:5, wrist:5, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:2, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A tuck back lever with only one finger (typically the middle finger) on one hand. This is the final finger reduction before the full one-arm back lever and requires exceptional finger tendon strength and wrist integrity built over months. The body is substantially loaded through a single digit on one side, demanding enormous unilateral control. Finger tendons at this stage are at extreme injury risk — progress only after a very long base of reduced-finger work.',
      cues: 'Use the strongest single finger. Keep the tuck tight to minimise the lever arm as much as possible. The core must work very hard to prevent lateral rotation. This is a tendon-first skill — prioritise tissue health above all else.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     ONE-ARM BACK LEVER — 'Inverted'
     Elite gymnastic skill. A single arm supports the full body weight
     in an inverted horizontal position. Requires years of progressive
     loading. Tremendous shoulder extension strength, finger tendon
     integrity, wrist stability, and rotational core control.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(cloneExercise(tuck, {
      id: 2050,
      name: 'Assisted One-Arm Tuck BL | (Bar)',
      alt: 'Assisted one-arm tuck back lever with free hand on thigh on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 9,
      strength: 5, risk: 4, technique: 4, mobility: 2,
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
      name: 'One-Arm Tuck BL | (Bar)',
      alt: 'Full one-arm tuck back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 10,
      strength: 5, risk: 5, technique: 5, mobility: 2,
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
      name: 'One-Arm Tuck BL | (Rings)',
      alt: 'Full one-arm tuck back lever hold on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'rings'],
      diff: 10,
      strength: 5, risk: 5, technique: 5, mobility: 2,
      equipment: 'Gymnastic rings',
      position: 'Inverted',
      joints: { fingers:4, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:4, si:3, hip:3, groin:0, knee:2, ankle:0, foot:0 },
      desc: 'A one-arm tuck back lever on gymnastic rings. The ring adds a rotation management challenge on top of an already elite-level unilateral hold. The ring must be actively prevented from rotating while the body stays horizontal in the tuck position. This is an exceptionally rare skill.',
      cues: 'Hold the ring firmly and resist rotation throughout the entire hold. Brace the core hard and keep the tuck position tight. The free arm controls lateral balance and must not contact the ring.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2053,
      name: 'One-Arm Straddle BL | (Bar)',
      alt: 'One-arm straddle back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 10,
      strength: 5, risk: 5, technique: 5, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Straddle reduces lever vs full; but SI:3 and lowerBack:5 due to one-arm rotational load
      joints: { fingers:4, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:5, si:3, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      desc: 'A one-arm straddle back lever on a pull-up bar. The straddle leg position reduces the lever length compared to legs together, but the shoulder extension, elbow, and spinal demands remain extreme at this level of unilateral loading. This is a progression step toward the full one-arm back lever.',
      cues: 'Spread the legs wide and keep the hips level. Use the core and lat on the working side to prevent the body from rotating. The working arm must remain straight and the shoulder must stay actively extended throughout.',
    }));

    entries.push(cloneExercise(full, {
      id: 2054,
      name: 'One-Arm BL | (Bar)',
      alt: 'Full one-arm back lever hold on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'bar'],
      diff: 9.7,
      strength: 5, risk: 5, technique: 5, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'Inverted',
      // Maximum load: fingers:4, wrist:5, elbow:5, lowerBack:5, SI:3
      joints: { fingers:4, wrist:5, elbow:5, shoulder:5, neck:2, thoracic:3, lowerBack:5, si:3, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      desc: 'The full one-arm back lever on a pull-up bar — one of the most demanding static skills in calisthenics. A single arm supports the entire body weight in an inverted horizontal position with legs together and straight. This requires elite levels of shoulder extension strength, finger tendon integrity, wrist stability, and rotational core control built over years of progressive training.',
      cues: 'Keep the working arm locked straight and the shoulder actively extended. Squeeze the entire body into a rigid plank from fingertips to pointed toes. The free arm assists lateral balance without gripping. This is a skill that demands years of patient, progressive loading to achieve safely.',
    }));

  /* ─────────────────────────────────────────────────────────────────────
     BACK LEVER PULL-UPS — 'InvertedDynamic'
     A pull (elbow flexion) performed while maintaining the back lever
     position. The body stays horizontal and inverted throughout; the
     elbows bend to pull the torso toward the bar, then extend back to
     the lever. This stacks concentric bicep/shoulder load on top of an
     already extreme isometric position — one of the rarest and most
     demanding pulling skills in calisthenics.
     Prerequisites: solid static hold in the chosen shape + experience
     with negatives and raises in that position.
  ───────────────────────────────────────────────────────────────────── */

    entries.push(cloneExercise(tuck, {
      id: 2060,
      name: 'Tuck BL | Pull-Up (Bar)',
      alt: 'Tuck back lever pull-up · back lever row tuck on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'biceps', 'bar'],
      diff: 8.5,
      strength: 5, risk: 4, technique: 4, mobility: 2,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      // Elbow flexion under full back lever load: elbow:5 (bicep tendon compressed + loaded);
      // shoulder:5 sustained throughout; lowerBack:3; wrist:3
      joints: { fingers:3, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      kcalPerRep: [3, 5],
      desc: 'A pull-up performed while holding the tuck back lever position. The body stays inverted and horizontal in the tuck shape throughout; the elbows bend to pull the chest toward the bar, then extend back to the starting lever. The bicep tendons work concentrically under the full shoulder extension angle — a load they rarely experience — while the core holds the tuck rigid against the pull. An extremely rare skill that requires a solid static tuck back lever before attempting.',
      cues: 'Establish a firm tuck back lever first and breathe. Initiate the pull from the shoulders and lats — do not let the tuck open as the elbows bend. Pull until the chest approaches the bar, then lower with full control back to the extended lever. The tuck must not change shape during either phase. Start with singles and long rests.',
    }));

    entries.push(cloneExercise(tuck, {
      id: 2061,
      name: 'Tuck BL | Pull-Up (Rings)',
      alt: 'Tuck back lever pull-up on gymnastic rings',
      tags: ['shoulders', 'chest', 'core', 'biceps', 'rings'],
      diff: 9,
      strength: 5, risk: 4, technique: 5, mobility: 2,
      equipment: 'Gymnastic rings',
      position: 'InvertedDynamic',
      // Rings add rotation management to an already extreme elbow/shoulder load
      joints: { fingers:3, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0 },
      kcalPerRep: [3.5, 5.5],
      desc: 'A pull-up performed while holding the tuck back lever position on gymnastic rings. Ring rotation must be actively suppressed throughout the concentric and eccentric phases, adding a shoulder coordination demand on top of the already extreme bicep tendon and shoulder extension load. The tuck shape must remain rigid while the rings are controlled and the elbows move through their full range.',
      cues: 'Keep the rings from rotating or flaring at any point during the pull. Brace the tuck hard and initiate the pull without letting the hips shift. Lower with the same control as the ascent. The rings should stay parallel and forward-facing throughout.',
    }));

    entries.push(cloneExercise(straddle, {
      id: 2062,
      name: 'Straddle BL | Pull-Up (Bar)',
      alt: 'Straddle back lever pull-up on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'biceps', 'bar'],
      diff: 9.5,
      strength: 5, risk: 5, technique: 5, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      // Full leg extension increases lever arm; elbow:5; lowerBack:5 under dynamic load
      joints: { fingers:3, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0 },
      kcalPerRep: [4, 6],
      desc: 'A pull-up performed while holding the straddle back lever position. The legs remain fully extended and spread wide throughout the concentric and eccentric phases, maintaining the full straddle lever arm while the biceps and shoulder extensors work through the pull. The lower back load under dynamic loading at this lever length is significant. Requires a solid straddle back lever static hold and experience with straddle negatives before attempting.',
      cues: 'Hold the straddle position tight and keep the legs spread and level before initiating the pull. Do not allow one hip to drop as the elbows bend. Pull steadily and lower under full control — no momentum. The straddle width can be adjusted if needed but must remain consistent throughout each rep.',
    }));

    entries.push(cloneExercise(full, {
      id: 2063,
      name: 'Back Lever | Pull-Up (Bar)',
      alt: 'Full back lever pull-up · straight back lever row on pull-up bar',
      tags: ['shoulders', 'chest', 'core', 'biceps', 'bar'],
      diff: 10,
      strength: 5, risk: 5, technique: 5, mobility: 3,
      equipment: 'Pull-up bar',
      position: 'InvertedDynamic',
      // Maximum elbow + shoulder + lower back loading at full lever: elbow:5, lowerBack:5
      joints: { fingers:3, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0 },
      kcalPerRep: [5, 8],
      desc: 'A pull-up performed while holding the full back lever position with legs together and straight — one of the most extreme pulling skills in calisthenics. The entire body remains rigid and horizontal throughout; only the elbows move to pull the chest toward the bar. The bicep tendons are loaded concentrically at the shoulder\'s maximum extension angle, an anatomically extreme demand. The lower back, core, and shoulder extensors must all hold the full lever under dynamic load. Only attempt after achieving a consistent full back lever static hold.',
      cues: 'Lock the full back lever position before beginning — toes pointed, glutes and core maximally braced, hips level. Pull by bending the elbows while actively fighting any tendency for the hips to drop or the arch to increase. Lower with the same rigidity. Even a single clean rep represents elite-level pulling strength.',
    }));

  function isCompletedBackLeverVariant(exercise) {
    const name = exercise?.name || '';
    // Negatives and Raises are training tools, not completed skills
    if (name.includes('Negatives') || name.includes('Raises')) return false;
    return name === 'Back Lever'
      || name.startsWith('Back Lever | (')
      || name.startsWith('One-Arm BL');
  }

  const normalizedEntries = entries.map(exercise => {
    const next = { ...exercise };
    if(isCompletedBackLeverVariant(next)) {
      next.hof = true;
    }
    return next;
  });

  window.backleverStaticWorkouts  = normalizedEntries.filter(ex => ex.position === 'Inverted');
  window.backleverPrepWorkouts    = normalizedEntries.filter(ex => ex.position === 'Hang');
  window.backleverDynamicWorkouts = normalizedEntries.filter(ex => ex.position === 'InvertedDynamic');
  return normalizedEntries;
})();
