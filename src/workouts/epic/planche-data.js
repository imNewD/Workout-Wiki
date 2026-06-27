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
 *
 * ADDING AN EXERCISE — log it here: ID · NAME · DIFF. IDs must be unique
 * within this file; check existing ids before assigning a new one.
 * ───────────────────────────────────────────────────────────────────────── */

const planches = [
{
    id: 91,
    name: "Planche Lean",
    alt: "Floor planche lean Â· forward lean on floor",
    muscles: [{n:"Shoulders",p:true},{n:"Core",p:true},{n:"Wrists",p:false},{n:"Serratus",p:false}],
    tags: ["shoulders","core","wrists"],
    diff: 4.6,
    str: {suit:true,eff:3}, vol: {suit:false,eff:1}, end: {suit:true,eff:4},
    risk: 3,
    joints: {fingers:2,wrist:5,elbow:1,shoulder:3,neck:1,thoracic:1,lowerBack:2,si:0,hip:1,groin:0,knee:0,ankle:0,foot:0},
    technique: 2, mobility: 3, strength: 2,
    kcalPerRep: [1, 2],
    desc: "Planche lean on the floor â€” hands flat, fingers spread. Wrist extension load is significantly higher than on parallettes, making wrist conditioning the primary limiter rather than shoulder strength. Use parallettes if available; the floor version trains wrist resilience as a secondary adaptation.",
    cues: "If wrists allow, lean as far forward as possible. Fingers spread wide to distribute load. Build wrist extension tolerance progressively over weeks.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },
  {
    id: 92,
    name: "Tuck Planche",
    alt: "Floor tuck planche Â· tuck planche on floor",
    muscles: [{n:"Shoulders",p:true},{n:"Core",p:true},{n:"Serratus",p:true},{n:"Wrists",p:false}],
    tags: ["shoulders","core","wrists"],
    diff: 7.2,
    str: {suit:true,eff:4}, vol: {suit:false,eff:1}, end: {suit:true,eff:3},
    risk: 4,
    joints: {fingers:3,wrist:5,elbow:1,shoulder:4,neck:1,thoracic:1,lowerBack:2,si:0,hip:2,groin:0,knee:1,ankle:0,foot:0},
    technique: 4, mobility: 3, strength: 4,
    kcalPerRep: [2, 3.5],
    desc: "Tuck planche on the floor â€” knees tucked, body parallel, hands flat with full wrist extension under bodyweight. Harder on the wrists than parallettes. Consider parallettes for primary planche training; use the floor version to build wrist resilience as a deliberate adaptation.",
    cues: "Hips level with shoulders, scapulae fully protracted, arms locked. Expect higher wrist fatigue than the parallette version.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },
  {
    id: 93,
    name: "Advanced Tuck Planche",
    alt: "Floor advanced tuck planche Â· open tuck on floor",
    muscles: [{n:"Shoulders",p:true},{n:"Core",p:true},{n:"Serratus",p:true},{n:"Wrists",p:false}],
    tags: ["shoulders","core","wrists"],
    diff: 7.4,
    str: {suit:true,eff:4}, vol: {suit:false,eff:1}, end: {suit:true,eff:3},
    risk: 4,
    joints: {fingers:3,wrist:5,elbow:1,shoulder:4,neck:1,thoracic:1,lowerBack:2,si:0,hip:2,groin:0,knee:1,ankle:0,foot:0},
    technique: 4, mobility: 3, strength: 4,
    kcalPerRep: [2.5, 4],
    desc: "Advanced tuck planche on the floor â€” knees extended slightly from chest, back trending horizontal, wrists in full extension under increasing lever load.",
    cues: "Open the tuck gradually. Wrist load increases as the lever opens; monitor joint tolerance carefully.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },
  {
    id: 94,
    name: "Straddle Planche",
    alt: "Floor straddle planche Â· wide-leg planche on floor",
    muscles: [{n:"Shoulders",p:true},{n:"Core",p:true},{n:"Serratus",p:true},{n:"Adductors",p:false}],
    tags: ["shoulders","core","wrists"],
    diff: 9.3,
    str: {suit:true,eff:5}, vol: {suit:false,eff:1}, end: {suit:false,eff:1},
    risk: 5,
    joints: {fingers:3,wrist:5,elbow:1,shoulder:5,neck:1,thoracic:1,lowerBack:3,si:1,hip:3,groin:2,knee:0,ankle:0,foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [3, 5],
    desc: "Straddle planche on the floor â€” legs straddled, body horizontal, hands flat under extreme wrist extension load at elite shoulder load. Parallettes are strongly recommended for long-term training; the floor version is appropriate only once wrist conditioning is thoroughly established.",
    cues: "All standard straddle planche cues apply. Wrist joint is a critical vulnerability at this load level on the floor.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },


// â”€â”€ FAMILY: PSEUDO PLANCHE â”€â”€ (feet on the floor, shoulders leaned ahead of the
// hands; bar/parallettes neutral grips lower wrist stress vs the floor)

{
  id: 400, name: "Pseudo Planche Push-Up", alt: null, pathTag: "planche", pathNode: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: false } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 7.9, str: { suit: true, eff: 4 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 3, shoulder: 4, neck: 1, lowerBack: 2, knee: 0, fingers: 0, thoracic: 2, si: 0, hip: 1, groin: 0, ankle: 0, foot: 0 },
  strength: 4, mobility: 3, technique: 3, kcalPerRep: [0.45, 0.58],
  desc: "Push-up with the hands rotated out at hip level and the shoulders leaned well ahead of the hands while the feet stay on the floor, redirecting load onto the anterior deltoids and serratus to mimic the planche shoulder position. Wrist extension stress is the main limiter on the floor â€” the foundational entry to the whole planche family.",
  cues: "Place the hands at hip level, fingers pointing out, and lean the shoulders as far forward as you can hold. Lower with the elbows close to the torso, then press back keeping the lean. Build the wrists gradually; reduce the lean before discomfort turns sharp.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 401, name: "Pseudo Planche Push-Up | (Bar)", sidequestKey: "Pseudo Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: false } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 7.85, str: { suit: true, eff: 4 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 3, shoulder: 4, neck: 1, lowerBack: 2, knee: 0, fingers: 0, thoracic: 2, si: 0, hip: 1, groin: 0, ankle: 0, foot: 0 },
  strength: 4, mobility: 3, technique: 3, kcalPerRep: [0.45, 0.58],
  desc: "Pseudo planche push-up gripping push-up bars so the wrist stays neutral through the leaned position. The anterior shoulder and serratus load is identical to the floor version; the neutral grip removes the wrist-extension stress, making this the recommended way to start accumulating pseudo planche volume.",
  cues: "Set the bars at hip level, lean the shoulders ahead of the hands and lower with the elbows tracking close. Press back keeping the lean, wrists straight on the bars.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 402, name: "Pseudo Planche Push-Up | (Parallettes)", sidequestKey: "Pseudo Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: false } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 7.95, str: { suit: true, eff: 4 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 3, shoulder: 4, neck: 1, lowerBack: 2, knee: 0, fingers: 0, thoracic: 2, si: 0, hip: 1, groin: 0, ankle: 0, foot: 0 },
  strength: 4, mobility: 3, technique: 3, kcalPerRep: [0.45, 0.58],
  desc: "Pseudo planche push-up on parallettes, keeping the wrist neutral while the raised handles let the chest travel below hand height for a deeper range. The extra depth lengthens the anterior deltoid and pec, making this the preferred surface for building toward the true planche while sparing the wrists.",
  cues: "Set parallettes at hip width, grip neutral, and push the shoulders forward of the hands. Lower as deep as the lean allows, then press back without losing the forward shoulder position.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 403, name: "Pseudo Planche Push-Up | (Rings)", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.4, str: { suit: true, eff: 4 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 3, shoulder: 4, neck: 1, lowerBack: 2, knee: 0, fingers: 0, thoracic: 2, si: 0, hip: 1, groin: 0, ankle: 0, foot: 0 },
  strength: 4, mobility: 3, technique: 5, kcalPerRep: [0.48, 0.62],
  desc: "Pseudo planche push-up on rings turned out at floor height, adding three-dimensional rotational instability to the leaned shoulder position. The rings must be held turned out and dead-still while the shoulders carry the lean, a stabilisation demand that significantly raises the serratus and rotator-cuff load over any fixed surface.",
  cues: "Lower the rings to just above the floor and turn them out. Lean the shoulders forward and lower under tight control, resisting any swing. Press back keeping the rings turned out and the lean intact.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 411, name: "Pseudo Planche Push-Up | Negative", sidequestKey: "Pseudo Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: false } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 7.6, str: { suit: true, eff: 5 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 3, shoulder: 4, neck: 1, lowerBack: 2, knee: 0, fingers: 0, thoracic: 2, si: 0, hip: 1, groin: 0, ankle: 0, foot: 0 },
  strength: 4, mobility: 3, technique: 3, kcalPerRep: [0.55, 0.70],
  desc: "Pseudo planche push-up trained on the eccentric only â€” a maximal forward lean is held and lowered over a 3â€“5 second descent before the lean is reset rather than pressed back. The slow lower drives the anterior deltoid, serratus and wrist demand toward planche-push-up levels and builds connective-tissue tolerance.",
  cues: "Set the deepest lean you can control with the hands at hip level. Lower over a full 3â€“5 second count, keeping the shoulders well ahead of the hands. Reduce the lean to reset; keep sessions short.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: PLANCHE LEAN â”€â”€ (a deeper feet-down lean than the pseudo)

{
  id: 420, name: "Planche Lean Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.4, str: { suit: true, eff: 5 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.53, 0.68],
  desc: "A deeper feet-down lean than the pseudo planche, the shoulders driven well ahead of the hands toward a near-horizontal torso so that pressing is almost entirely replaced by shoulder depression and protraction. The longer lever and greater wrist compression push this well past the pseudo planche.",
  cues: "From the pseudo planche, push the shoulders much further forward until the torso approaches horizontal. Lower with full scapular control and press back without shortening the lean. Keep the hips from sagging.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 421, name: "Planche Lean Push-Up | (Bar)", sidequestKey: "Planche Lean Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.25, str: { suit: true, eff: 5 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.53, 0.68],
  desc: "Deep planche lean push-up on push-up bars, the neutral grip removing the heavy wrist compression of the floor lean while preserving the near-horizontal shoulder load. The recommended surface for building lean strength at length without overloading the wrists.",
  cues: "Grip the bars at hip level and drive the shoulders forward toward horizontal. Lower with scapular control and press back holding the lean, wrists straight.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 422, name: "Planche Lean Push-Up | (Parallettes)", sidequestKey: "Planche Lean Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.35, str: { suit: true, eff: 5 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.53, 0.68],
  desc: "Deep planche lean push-up on parallettes, the neutral grip plus raised handles allowing a near-horizontal lean with extra below-hand depth. The closest feet-down approximation of the tuck planche push-up's shoulder loading.",
  cues: "Grip the parallettes at hip width, drive the shoulders forward toward horizontal, and lower deep below the handles. Press back without losing the lean.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 423, name: "Planche Lean Push-Up | (Rings)", sidequestKey: "Planche Lean Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.7, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.55, 0.71],
  desc: "Deep planche lean push-up on rings turned out at floor height, adding full rotational instability to the near-horizontal lean. The rings must be held turned out and motionless while the shoulders carry the lean â€” a severe rotator-cuff and serratus stabilisation demand.",
  cues: "Turn the rings out at floor height and drive the shoulders forward to a deep lean. Lower under total control, keeping the rings turned out and still, then press back holding the lean.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: TRIANGLE PLANCHE â”€â”€ (an advanced feet-down lean with the hips driven
// HIGH so the body forms a shallow triangle â€” a steeper, harder lean variant)

{
  id: 430, name: "Triangle Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.6, str: { suit: true, eff: 5 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 4, shoulder: 5, neck: 1, lowerBack: 2, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 1, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.53, 0.68],
  desc: "An advanced planche lean performed with the hips driven high so the body forms a shallow triangle, the shoulders leaned far past the hands while the elevated hips shorten the leg lever and tip more load onto the arms. The high-hip position increases the vertical load through the leaned shoulders versus a flat lean.",
  cues: "Set the hands at hip level and lean the shoulders forward, then pike the hips up into a shallow triangle over the hands. Lower with scapular control, keeping the hips high, and press back into the leaned triangle.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 431, name: "Triangle Planche Push-Up | (Bar)", sidequestKey: "Triangle Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.45, str: { suit: true, eff: 5 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 2, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 1, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.53, 0.68],
  desc: "High-hip triangle planche lean push-up on push-up bars, the neutral grip relieving wrist compression while the leaned, hips-high position keeps the load on the shoulders. A wrist-friendly way to train the steep lean.",
  cues: "Grip the bars at hip level, lean the shoulders forward and pike the hips high into the triangle. Lower with control and press back, wrists straight.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 432, name: "Triangle Planche Push-Up | (Parallettes)", sidequestKey: "Triangle Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.55, str: { suit: true, eff: 5 }, vol: { suit: true, eff: 2 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 2, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 1, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.53, 0.68],
  desc: "High-hip triangle planche lean push-up on parallettes, the raised neutral grip allowing a deeper below-hand range while the hips stay piked high over the hands. A strong bridge from the lean toward the feet-off tuck planche.",
  cues: "Grip the parallettes at hip width, lean the shoulders forward and pike the hips high. Lower deep below the handles and press back into the triangle, keeping the hips up.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 433, name: "Triangle Planche Push-Up | (Rings)", sidequestKey: "Triangle Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.85, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 4, shoulder: 5, neck: 1, lowerBack: 2, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 1, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.55, 0.71],
  desc: "High-hip triangle planche lean push-up on rings turned out at floor height, adding rotational instability to the steep hips-high lean. The rings amplify every wobble in an already precarious leaned position, demanding elite shoulder stabilisation.",
  cues: "Turn the rings out at floor height, lean the shoulders forward and pike the hips high. Lower with total control, keeping the rings turned out and still, then press back into the triangle.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: TUCK PLANCHE â”€â”€ (feet leave the floor; knees tucked to the chest)

{
  id: 440, name: "Tuck Planche Push-Up", alt: null, pathTag: "planche", pathNode: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.9, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.57, 0.73],
  desc: "Planche push-up with the knees tucked tightly to the chest to shorten the body lever, the feet fully off the ground and the whole bodyweight on the hands alone. The press is driven by shoulder depression, protraction and posterior tilt â€” the accessible entry to true feet-off planche pressing.",
  cues: "From a tuck planche hold, lower by bending the elbows toward 90 degrees while keeping the knees tucked and the hips at shoulder height. Press back to the tuck planche. Any hip drop changes the movement â€” film your sets.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 441, name: "Tuck Planche Push-Up | (Bar)", sidequestKey: "Tuck Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.7, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.57, 0.73],
  desc: "Tuck planche push-up on push-up bars, the neutral grip reducing wrist compression versus the floor while the knees stay tucked. The slightly raised hands give a touch more shoulder-depression range at the bottom.",
  cues: "Set a tuck planche on the bars, hips level with the shoulders. Bend the elbows toward 90 degrees, then press back, wrists neutral.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 442, name: "Tuck Planche Push-Up | (Parallettes)", sidequestKey: "Tuck Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.8, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.57, 0.73],
  desc: "Tuck planche push-up on parallettes, combining a neutral wrist with raised hands so the shoulders can depress slightly deeper. The standard training surface for accumulating tuck planche volume without overusing the wrists.",
  cues: "Hold a tuck planche on the parallettes, hips level. Lower by bending the elbows toward 90 degrees, then press back. Keep the hips up â€” any drop turns it into a dip.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 443, name: "Tuck Planche Push-Up | (Rings)", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.2, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.59, 0.76],
  desc: "Tuck planche push-up on rings turned out, adding full rotational instability to the feet-off tuck position. The rings must be stabilised turned-out while the shoulders depress and press, a coordination demand that eclipses any fixed-surface tuck planche.",
  cues: "Set a tuck planche on turned-out rings, hips level. Lower by bending the elbows while keeping the rings turned out and still, then press back.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 450, name: "Tuck Planche Push-Up | Negative", sidequestKey: "Tuck Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 8.7, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 4, kcalPerRep: [0.57, 0.73],
  desc: "Tuck planche push-up trained on the eccentric only, lowering from the tuck planche over a 3â€“5 second descent before resetting rather than pressing back. The slow lower builds the feet-off pressing strength and wrist tolerance needed before clean concentric reps.",
  cues: "From a tuck planche hold, lower over a full 3â€“5 second count keeping the hips level. Reset to the hold from the knees or a brief assist rather than pressing back.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: ADVANCED TUCK PLANCHE â”€â”€ (knees bent, back flat, hips opened)

{
  id: 460, name: "Advanced Tuck Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.15, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.58, 0.75],
  desc: "Planche push-up with the knees still bent but the back flattened and the hips opened away from the chest, lengthening the body lever well beyond the basic tuck. The longer lever sharply raises the shoulder and lower-back load while the open hips demand more posterior-chain tension.",
  cues: "From an advanced tuck planche â€” flat back, hips open, shins back â€” lower by bending the elbows while holding the line, then press back. Keep the back flat; rounding it collapses into the easier tuck.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 461, name: "Advanced Tuck Planche Push-Up | (Bar)", sidequestKey: "Advanced Tuck Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.0, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.58, 0.75],
  desc: "Advanced tuck planche push-up on push-up bars, the neutral grip easing wrist load while the flat-back, hips-open lever keeps the shoulder demand high. A wrist-friendly step between tuck and half-lay planche pressing.",
  cues: "Hold an advanced tuck planche on the bars, flat back and open hips. Bend the elbows a controlled range, then press back, wrists neutral.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 462, name: "Advanced Tuck Planche Push-Up | (Parallettes)", sidequestKey: "Advanced Tuck Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.1, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.58, 0.75],
  desc: "Advanced tuck planche push-up on parallettes, the raised neutral grip allowing extra depth while the flat-back open-hip lever holds the load on the shoulders. The standard surface for grooving advanced tuck reps.",
  cues: "Hold an advanced tuck planche on the parallettes, flat back, hips open. Lower deep below the handles, then press back keeping the body line.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 463, name: "Advanced Tuck Planche Push-Up | (Rings)", sidequestKey: "Advanced Tuck Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.4, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.60, 0.77],
  desc: "Advanced tuck planche push-up on rings turned out, adding rotational instability to the longer flat-back lever. The combination of an extended lever and free rings demands elite shoulder and core stabilisation.",
  cues: "Hold an advanced tuck planche on turned-out rings, flat back. Bend the elbows a controlled range keeping the rings turned out and still, then press back.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: HALF LAY PLANCHE â”€â”€ (legs bent at the knees, shins drawn up, soles up)

{
  id: 470, name: "Half Lay Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.35, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.60, 0.77],
  desc: "Planche push-up in the half-lay position â€” the hips fully open with the thighs in line with the torso but the knees bent so the shins draw up and the soles face the ceiling. Opening the hips lengthens the lever past the advanced tuck while the bent knees keep it short of the straddle.",
  cues: "From a half-lay planche â€” flat body, hips open, knees folded with soles up â€” lower by bending the elbows while holding the horizontal line, then press back. Keep the thighs in line with the torso.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 471, name: "Half Lay Planche Push-Up | (Bar)", sidequestKey: "Half Lay Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.2, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.60, 0.77],
  desc: "Half-lay planche push-up on push-up bars, the neutral grip reducing wrist load while the open-hip, folded-knee lever keeps the demand high. A wrist-sparing bridge between advanced tuck and straddle planche pressing.",
  cues: "Hold a half-lay planche on the bars, hips open and soles up. Bend the elbows a controlled range, then press back, wrists neutral.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 472, name: "Half Lay Planche Push-Up | (Parallettes)", sidequestKey: "Half Lay Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.3, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.60, 0.77],
  desc: "Half-lay planche push-up on parallettes, the raised neutral grip allowing extra depth while the open-hip folded-knee lever holds the load on the shoulders. The standard surface for grooving half-lay reps.",
  cues: "Hold a half-lay planche on the parallettes, hips open and soles up. Lower deep below the handles, then press back keeping the horizontal line.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 473, name: "Half Lay Planche Push-Up | (Rings)", sidequestKey: "Half Lay Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.55, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "Half-lay planche push-up on rings turned out, adding rotational instability to the long open-hip lever. The free rings amplify every wobble in a near-straddle planche position, demanding elite stabilisation.",
  cues: "Hold a half-lay planche on turned-out rings, hips open and soles up. Bend the elbows a controlled range keeping the rings turned out and still, then press back.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: ONE-LEG PLANCHE â”€â”€ (one leg extended, the other tucked)

{
  id: 480, name: "One-Leg Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.5, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 1, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "Planche push-up with one leg fully extended behind and the other tucked, an asymmetric lever just below the straddle. The single extended leg lengthens the body line and shifts the centre of mass back, while the offset legs add a mild anti-rotation demand.",
  cues: "From a one-leg planche â€” one leg straight back, the other tucked â€” lower by bending the elbows while holding the line and resisting tilt toward the extended leg. Press back, alternating legs between sets.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 481, name: "One-Leg Planche Push-Up | (Bar)", sidequestKey: "One-Leg Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.4, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 1, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "One-leg planche push-up on push-up bars, the neutral grip relieving the wrists while the single extended leg holds the lever just below the straddle. A wrist-friendly final step before the symmetric straddle planche push-up.",
  cues: "Hold a one-leg planche on the bars, one leg straight, the other tucked. Bend the elbows a controlled range, resisting tilt, then press back. Alternate legs.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 482, name: "One-Leg Planche Push-Up | (Parallettes)", sidequestKey: "One-Leg Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.45, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 1, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "One-leg planche push-up on parallettes, the raised neutral grip giving extra depth while the asymmetric single-leg lever sits just below the straddle. The standard surface for grooving the one-leg planche press.",
  cues: "Hold a one-leg planche on the parallettes, one leg straight, the other tucked. Lower deep below the handles resisting tilt, then press back. Alternate legs.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 483, name: "One-Leg Planche Push-Up | (Rings)", sidequestKey: "One-Leg Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.7, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 1, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.62, 0.80],
  desc: "One-leg planche push-up on rings turned out, the asymmetric lever combined with full rotational instability. The offset legs and free rings together demand elite anti-rotation and shoulder control through every inch of the press.",
  cues: "Hold a one-leg planche on turned-out rings, one leg straight. Bend the elbows a controlled range keeping the rings turned out and the hips square, then press back. Alternate legs.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: STRADDLE PLANCHE â”€â”€ (legs straight and spread wide â€” a progression
// node, NOT Hall of Fame)

{
  id: 490, name: "Straddle Planche Push-Up", alt: null, pathTag: "planche", pathNode: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.75, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "Planche push-up with the legs straight and spread wide, lengthening the lever beyond every tuck and half-lay variant but stopping short of the legs-together full planche. The wide straddle demands strong hip abductor and adductor tension to hold the split horizontal while pressing.",
  cues: "From a straddle planche â€” legs wide, body horizontal â€” lower by bending the elbows toward 90 degrees while keeping the hips level and legs extended. Press back. Own the static hold first.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 491, name: "Straddle Planche Push-Up | (Bar)", sidequestKey: "Straddle Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.6, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "Straddle planche push-up on push-up bars, the neutral grip relieving wrist compression while the wide-legged lever holds the load on the shoulders. The most wrist-friendly way to train the straddle press.",
  cues: "Hold a straddle planche on the bars, legs wide and body horizontal. Bend the elbows toward 90 degrees, then press back, wrists neutral and hips level.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 492, name: "Straddle Planche Push-Up | (Parallettes)", sidequestKey: "Straddle Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.65, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "Straddle planche push-up on parallettes, the raised neutral grip allowing deeper shoulder depression while the wide-legged lever holds the load. The standard surface for grooving the straddle planche press.",
  cues: "Hold a straddle planche on the parallettes, legs wide. Lower below the handles by bending the elbows, then press back, hips level.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 493, name: "Straddle Planche Push-Up | (Rings)", sidequestKey: "Straddle Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.9, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.63, 0.81],
  desc: "Straddle planche push-up on rings turned out, the wide-legged lever combined with full rotational instability. Holding the straddle level while pressing on free, turned-out rings is among the rarest pressing feats in ring gymnastics.",
  cues: "Hold a straddle planche on turned-out rings, legs wide. Bend the elbows a controlled range keeping the rings turned out and dead-still, then press back.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 495, name: "Straddle Planche Push-Up | Negative", sidequestKey: "Straddle Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.0, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "Straddle planche push-up trained on the eccentric only, lowering from the straddle planche over a controlled 3â€“5 second descent before resetting. The slow lower builds the straddle pressing strength and wrist tolerance for clean concentric reps.",
  cues: "From a straddle planche hold, lower over a full 3â€“5 second count keeping the hips level and legs wide. Reset to the hold rather than pressing back.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: BANANA PLANCHE â”€â”€ (a full-lever planche held with a curved, U-shaped
// "banana" body line â€” a progression node, NOT Hall of Fame)

{
  id: 500, name: "Banana Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.85, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.62, 0.80],
  desc: "Full-lever planche push-up held with a deliberate curved, U-shaped body line â€” the chest and legs lifted so the body bows like a banana rather than holding dead-flat. The curve shifts the centre of mass and loads the shoulders and lower back through a longer effective lever, an elite full-body variant distinct from the flat full planche.",
  cues: "From a curved full planche â€” shoulders and legs lifted into a shallow U â€” lower by bending the elbows while holding the banana line, then press back. Maintain the curve intentionally; this is a controlled shape, not a sagging hip.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 501, name: "Banana Planche Push-Up | (Bar)", sidequestKey: "Banana Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.7, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.62, 0.80],
  desc: "Banana (curved full-lever) planche push-up on push-up bars, the neutral grip relieving the wrists while the deliberate U-shaped body line loads the shoulders and lower back.",
  cues: "Hold a curved full planche on the bars, body bowed into a shallow U. Bend the elbows a controlled range, then press back, wrists neutral and the banana line held.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 502, name: "Banana Planche Push-Up | (Parallettes)", sidequestKey: "Banana Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.75, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.62, 0.80],
  desc: "Banana (curved full-lever) planche push-up on parallettes, the raised neutral grip allowing extra depth while the U-shaped body line loads the shoulders. The standard surface for grooving the banana planche press.",
  cues: "Hold a curved full planche on the parallettes, body bowed into a shallow U. Lower below the handles, then press back holding the banana line and level hips.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 503, name: "Banana Planche Push-Up | (Rings)", sidequestKey: "Banana Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.95, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.63, 0.81],
  desc: "Banana (curved full-lever) planche push-up on rings turned out, the U-shaped full lever combined with full rotational instability. Among the most extreme demonstrations of straight-arm strength.",
  cues: "Hold a curved full planche on turned-out rings, body bowed into a shallow U. Bend the elbows a bare controlled range keeping the rings turned out and still, then press back.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: (FULL) PLANCHE â”€â”€ (legs straight and together, body dead-flat â€” the
// pinnacle and the FIRST Hall of Fame tier of this library)

{
  id: 510, name: "Planche Push-Up", alt: null, hof: true, pathTag: "planche", pathNode: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.95, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.63, 0.81],
  desc: "The full planche push-up â€” legs straight and together, body dead-flat and horizontal, on the hands alone â€” the longest symmetric lever and the pinnacle of bodyweight pressing. Every rep begins and ends in a full planche hold; wrist compressive stress is maximal on the floor. A Hall of Fame feat and the prerequisite for the Maltese push-up.",
  cues: "Requires a solid full planche hold. From the planche, lower by bending the elbows while keeping hips, shoulders and heels at one height, then press to full lock-out. A single strict rep is a significant achievement.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 511, name: "Planche Push-Up | (Bar)", sidequestKey: "Planche Push-Up", alt: null, hof: true, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.8, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.63, 0.81],
  desc: "Full planche push-up on push-up bars, the neutral grip relieving the maximal wrist compression of the floor version while the legs-together flat lever holds the load on the shoulders. A Hall of Fame feat on every surface.",
  cues: "Hold a full planche on the bars, body dead-flat. Bend the elbows toward 90 degrees keeping the line, then press to lock-out, wrists neutral.",
  equipment: "Push-Up Bars", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 512, name: "Planche Push-Up | (Parallettes)", sidequestKey: "Planche Push-Up", alt: null, hof: true, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.9, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 3, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.63, 0.81],
  desc: "Full planche push-up on parallettes, the neutral grip and raised hands reducing wrist stress and allowing slightly deeper shoulder depression while the legs-together flat lever holds the load. The standard surface for maximum-effort full planche reps. A Hall of Fame feat.",
  cues: "Hold a full planche on the parallettes, body dead-flat. Lower by bending the elbows toward 90 degrees while keeping the line, then press to lock-out. Film every set.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 513, name: "Planche Push-Up | (Rings)", alt: null, hof: true, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.64, 0.82],
  desc: "Full planche push-up on rings turned out â€” the legs-together flat lever combined with full rotational instability on free rings. Pressing a dead-flat full planche while holding turned-out rings motionless is one of the very hardest bodyweight pressing feats demonstrated. A Hall of Fame feat.",
  cues: "Hold a full planche on turned-out rings, body dead-flat. Bend the elbows a bare controlled range keeping the rings turned out and dead-still, then press back.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 514, name: "Planche Push-Up | Fingertip", alt: null, hof: true, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Forearms", p: true }, { n: "Core", p: true } ],
  tags: ["shoulders", "chest", "triceps", "forearms", "core"],
  diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 5, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.64, 0.82],
  desc: "Full planche push-up balanced on spread fingertips, the dead-flat legs-together lever channelling the entire bodyweight through the finger flexor tendons. A near-mythic fusion of the hardest standard planche lever and an elite fingertip base. A Hall of Fame feat that unlocks the fingertip Pantheon chain (full planche on 4, 3, 2, then 1 finger).",
  cues: "Hold a full planche on spread fingertips, body dead-flat. Lower a bare controlled range and press back, keeping every fingertip planted. Only conceivable on a rock-solid full planche push-up plus years of finger conditioning.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 515, name: "Planche Push-Up | Negative", sidequestKey: "Planche Push-Up", alt: null, pathTag: "planche",
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.2, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 4, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.63, 0.81],
  desc: "Full planche push-up trained on the eccentric only, lowering from the full planche over a controlled 3â€“5 second descent before resetting. The slow lower builds the full-planche pressing strength and wrist tolerance needed before clean concentric reps. A progression step toward the completed Hall of Fame feat.",
  cues: "From a full planche hold, lower over a full 3â€“5 second count keeping hips, shoulders and heels level. Reset to the hold rather than pressing back.",
  equipment: "None", position: "Prone", youtube: "LINK_TODO"
},

// â”€â”€ FAMILY: MALTESE â”€â”€ (arms extended out to the sides, body horizontal â€” beyond
// the planche. Sub-full levers are progression nodes; the FULL maltese is HoF.)

{
  id: 520, name: "Tuck Maltese Push-Up | (Parallettes)", alt: null, pathTag: "maltese",
  hof: true, pantheon: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.5, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 5, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.60, 0.77],
  desc: "Maltese push-up in the tuck position on parallettes â€” the arms held wider than the shoulders toward the maltese line while the knees stay tucked to shorten the lever. Widening the arms past the planche dramatically raises the biceps-tendon and anterior-shoulder load even in the shortened tuck. The accessible entry to maltese pressing.",
  cues: "From a tuck maltese hold on the parallettes â€” arms angled out, knees tucked â€” bend the elbows a short controlled range, then press back. Long-term elbow and biceps-tendon preparation is mandatory before adding range.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 521, name: "Tuck Maltese Push-Up | (Rings)", sidequestKey: "Tuck Maltese Push-Up | (Parallettes)", alt: null, pathTag: "maltese",
  hof: true, pantheon: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.65, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 5, shoulder: 5, neck: 1, lowerBack: 3, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "Tuck maltese push-up on rings turned out, adding rotational instability to the wide-arm tuck maltese position. The free rings amplify the already extreme biceps and shoulder load of the maltese line.",
  cues: "From a tuck maltese hold on turned-out rings, bend the elbows a bare controlled range keeping the rings still, then press back. Elbow conditioning is non-negotiable.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 522, name: "Advanced Tuck Maltese Push-Up | (Parallettes)", sidequestKey: "Tuck Maltese Push-Up | (Parallettes)", alt: null, pathTag: "maltese",
  hof: true, pantheon: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.7, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.61, 0.78],
  desc: "Advanced tuck maltese push-up on parallettes â€” the wide-arm maltese line held with the back flat and hips opened, lengthening the lever beyond the tuck maltese while still bending the knees. The longer lever pushes the biceps-tendon load toward the limit.",
  cues: "From an advanced tuck maltese hold on the parallettes â€” arms wide, flat back â€” bend the elbows a short controlled range, then press back. Stop at any elbow-tendon warning.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 523, name: "Advanced Tuck Maltese Push-Up | (Rings)", sidequestKey: "Advanced Tuck Maltese Push-Up | (Parallettes)", alt: null, pathTag: "maltese",
  hof: true, pantheon: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.8, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 4, technique: 5, kcalPerRep: [0.62, 0.80],
  desc: "Advanced tuck maltese push-up on rings turned out, the longer flat-back maltese lever combined with full rotational instability. An extraordinary demonstration of straight-arm and elbow strength.",
  cues: "From an advanced tuck maltese hold on turned-out rings, bend the elbows a bare range keeping the rings still, then press back.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 524, name: "Straddle Maltese Push-Up | (Parallettes)", sidequestKey: "Tuck Maltese Push-Up | (Parallettes)", alt: null, pathTag: "maltese",
  hof: true, pantheon: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.85, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.62, 0.80],
  desc: "Straddle maltese push-up on parallettes â€” the wide-arm maltese line held with the legs straight and spread wide, the last lever before the full maltese. The straddled legs plus the maltese arm angle demand near-maximal straight-arm strength and hip tension.",
  cues: "From a straddle maltese hold on the parallettes â€” arms wide, legs spread â€” bend the elbows a short controlled range, then press back. Only after the advanced tuck maltese is owned.",
  equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
},
{
  id: 525, name: "Straddle Maltese Push-Up | (Rings)", sidequestKey: "Straddle Maltese Push-Up | (Parallettes)", alt: null, pathTag: "maltese",
  hof: true, pantheon: true,
  muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
  tags: ["shoulders", "chest", "triceps", "core", "serratus"],
  diff: 9.95, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 },
  joints: { wrist: 4, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 0, foot: 0 },
  strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.63, 0.81],
  desc: "Straddle maltese push-up on rings turned out, the wide-arm straddle maltese combined with full rotational instability â€” the final progression step before the full maltese push-up.",
  cues: "From a straddle maltese hold on turned-out rings, bend the elbows a bare range keeping the rings still, then press back.",
  equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
}

];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// PANTHEON â€” mythic upgrades gated behind the HoF feats above. The full fingertip
// Planche | (planche-514) unlocks the finger-reduction chain; the full planche
// (planche-510..513) unlocks the one-arm planche; the tuck maltese (planche-520)
// gates the full maltese (ids 9/10 here â€” keys pantheon-100009/100010), which in
// turn unlocks the maltese fingertip/one-arm variants (ids 7/8). Registered by
// app-core.js (PANTHEON_SOURCE_ARRAYS). `risk` is set for the Pantheon RISK chip.
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const planchePantheonWorkouts = [
  {
    id: 1, name: "Planche Push-Up | 4-Finger", alt: "Four-finger full planche press",
    requires: ["planche-514"], requiresMode: "all",
    pantheonGroup: "Fingertip Planche", pantheonSubgroup: "Finger Reduction",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Forearms", p: true }, { n: "Core", p: true } ],
    tags: ["shoulders", "chest", "triceps", "forearms", "core"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 5, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.64, 0.82],
    desc: "Full planche push-up on four fingertips per hand, the dead-flat lever balanced with the pinky lifted. The first step of the fingertip-planche finger-reduction chain that the full fingertip planche unlocks â€” a feat at the absolute edge of human pressing and grip strength.",
    cues: "Only after the full fingertip planche push-up is owned. Hold the full planche on four fingertips per hand and lower a bare controlled range. Stop at the first sharp tendon sensation.",
    equipment: "None", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 2, name: "Planche Push-Up | 3-Finger", alt: "Three-finger full planche press",
    requires: ["planche-514"], requiresMode: "all",
    pantheonGroup: "Fingertip Planche", pantheonSubgroup: "Finger Reduction",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Forearms", p: true }, { n: "Core", p: true } ],
    tags: ["shoulders", "chest", "triceps", "forearms", "core"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 5, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.64, 0.82],
    desc: "Full planche push-up on three fingertips per hand, the next step of the fingertip-planche finger-reduction chain. The entire dead-flat planche load channels through three digits per side â€” a near-inconceivable union of grip and straight-arm strength.",
    cues: "Hold the full planche on three fingertips per hand and lower a fraction under absolute control. Treat any sharp pain as an immediate stop.",
    equipment: "None", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 3, name: "Planche Push-Up | 2-Finger", alt: "Two-finger full planche press",
    requires: ["planche-514"], requiresMode: "all",
    pantheonGroup: "Fingertip Planche", pantheonSubgroup: "Finger Reduction",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Forearms", p: true }, { n: "Core", p: true } ],
    tags: ["shoulders", "chest", "triceps", "forearms", "core"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 5, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.65, 0.83],
    desc: "Full planche push-up on two fingertips per hand â€” a purely theoretical pinnacle of the fingertip-planche chain in which the whole horizontal bodyweight rests on two digits per side.",
    cues: "Conceptual mythic tier. Hold the full planche on two fingertips per hand and attempt only the barest range under total control.",
    equipment: "None", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 4, name: "Planche Push-Up | 1-Finger", alt: "One-finger full planche press",
    requires: ["planche-514"], requiresMode: "all",
    pantheonGroup: "Fingertip Planche", pantheonSubgroup: "Finger Reduction",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Forearms", p: true }, { n: "Core", p: true } ],
    tags: ["shoulders", "chest", "triceps", "forearms", "core"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 5, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.65, 0.83],
    desc: "Full planche push-up on a single fingertip per hand â€” the terminal, purely mythic node of the fingertip-planche finger-reduction chain, beyond any demonstrated human feat.",
    cues: "The conceptual end-point of the fingertip planche progression. Listed as the ceiling of the chain rather than a trainable target.",
    equipment: "None", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 5, name: "Planche Push-Up | One Arm", alt: "One-arm full planche press",
    requires: ["planche-510", "planche-511", "planche-512", "planche-513"], requiresMode: "any",
    pantheonGroup: "Planche", pantheonSubgroup: "Unilateral",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Obliques", p: true } ],
    tags: ["shoulders", "chest", "triceps", "core", "obliques"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 5, knee: 1, fingers: 0, thoracic: 4, si: 2, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.66, 0.85],
    desc: "Full planche push-up supported on a single arm, the entire dead-flat horizontal bodyweight pressed and balanced on one hand while the obliques fight a colossal rotational moment. Beyond essentially all demonstrated human pressing â€” the mythic apex of the planche unilateral line.",
    cues: "Mythic tier, gated behind a full planche push-up on any surface. A one-arm full planche static hold would itself be unprecedented; listed as the ceiling of the planche progression.",
    equipment: "None", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 6, name: "Planche Push-Up | One Arm, Fingertip", alt: "One-arm fingertip planche press",
    requires: ["planche-514"], requiresMode: "all",
    pantheonGroup: "Fingertip Planche", pantheonSubgroup: "Unilateral",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Forearms", p: true }, { n: "Obliques", p: true } ],
    tags: ["shoulders", "chest", "triceps", "forearms", "obliques"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 5, knee: 1, fingers: 5, thoracic: 4, si: 2, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.66, 0.85],
    desc: "Full planche push-up on the fingertips of a single hand â€” fusing the one-arm planche's unilateral balance with the fingertip planche's tendon load. A purely mythic node combining the two hardest planche branches.",
    cues: "Conceptual apex combining the one-arm and fingertip planche lines. Listed as a ceiling target rather than a trainable feat.",
    equipment: "None", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 7, name: "Maltese Push-Up | Fingertip", alt: "Fingertip maltese press",
    requires: ["pantheon-100009", "pantheon-100010"], requiresMode: "any",
    pantheonGroup: "Maltese", pantheonSubgroup: "Finger Pressure",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Forearms", p: true }, { n: "Core", p: true } ],
    tags: ["shoulders", "chest", "triceps", "forearms", "core"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 5, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.66, 0.85],
    desc: "Full maltese push-up balanced on spread fingertips, stacking an elite fingertip base onto the most extreme straight-arm pressing line in existence. Gated behind the full maltese push-up â€” a purely mythic feat.",
    cues: "Conceptual apex of the maltese line. A fingertip maltese static hold would itself be unprecedented; listed as a ceiling target.",
    equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 8, name: "Maltese Push-Up | One Arm", alt: "One-arm maltese press",
    requires: ["pantheon-100009", "pantheon-100010"], requiresMode: "any",
    pantheonGroup: "Maltese", pantheonSubgroup: "Unilateral",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Obliques", p: true } ],
    tags: ["shoulders", "chest", "triceps", "core", "obliques"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 5, knee: 1, fingers: 0, thoracic: 4, si: 2, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.67, 0.86],
    desc: "Full maltese push-up pressed and balanced on a single arm â€” the absolute mythic ceiling of straight-arm pressing, combining the maltese's maximal arm lever with single-arm balance and anti-rotation. Listed as the apex of the entire planche and maltese progression.",
    cues: "Purely conceptual apex, gated behind the full maltese push-up. Stands as the ceiling of the library rather than a trainable target.",
    equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 9, name: "Maltese Push-Up | (Parallettes)", alt: "Full maltese press",
    requires: ["planche-520"], requiresMode: "all",
    pantheonGroup: "Maltese", pantheonSubgroup: "Full Maltese",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
    tags: ["shoulders", "chest", "triceps", "core", "serratus"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.64, 0.82],
    desc: "The full maltese push-up on parallettes â€” body horizontal with legs straight and together, arms extended out to the sides at chest level. The single most extreme straight-arm pressing position the body can hold. The maltese arm angle multiplies elbow, biceps-tendon and anterior-shoulder load far beyond the full planche â€” a feat that gates the entire maltese Pantheon chain.",
    cues: "A stable full maltese static hold on parallettes is an absolute prerequisite â€” the full planche push-up must already be trivial. Long-term elbow and biceps-tendon conditioning is non-negotiable. Even a fraction of a rep is an extraordinary feat.",
    equipment: "Parallettes", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 10, name: "Maltese Push-Up | (Rings)", alt: "Ring maltese press",
    requires: ["pantheon-100009"], requiresMode: "all",
    pantheonGroup: "Maltese", pantheonSubgroup: "Full Maltese",
    muscles: [ { n: "Shoulders", p: true }, { n: "Chest", p: true }, { n: "Triceps", p: true }, { n: "Core", p: true }, { n: "Serratus", p: true } ],
    tags: ["shoulders", "chest", "triceps", "core", "serratus"],
    diff: 10, str: { suit: true, eff: 5 }, vol: { suit: false, eff: 1 }, end: { suit: false, eff: 1 }, risk: 5,
    joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4, knee: 1, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 0, ankle: 1, foot: 1 },
    strength: 5, mobility: 5, technique: 5, kcalPerRep: [0.65, 0.84],
    desc: "The full maltese push-up on rings turned out â€” the wide-arm maltese line combined with the independent rotational freedom of the rings. Effectively unseen outside elite competitive ring gymnastics. Gated behind the parallettes full maltese, which must already be controlled.",
    cues: "A solid ring maltese static hold must be honest before any range is added; the parallettes maltese push-up should already be controlled. Keep the rings turned out and dead-still through the entire press.",
    equipment: "Rings", position: "Prone", youtube: "LINK_TODO"
  }
];
