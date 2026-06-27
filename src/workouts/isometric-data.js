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

/*
 * isometric-data.js
 *
 * EXTENSIVE LIST — ISOMETRIC POSITIONS ONLY, NO MOVEMENT.
 * Think: things that can be done on different surfaces / different equipment.
 * As many variants for each family / full progression lines.
 *
 * EXCLUDED (owned by separate data files):
 *   Front Lever  → frontlever-data.js
 *   Back Lever   → backlever-data.js
 *   Planche      → planche-data.js
 *   Handstands   → handstand-data.js
 */

const isometrics = [

  /* ── ELBOW LEVER FAMILY ──────────────────────────────────────
     Pure balance + compression isometric. No movement.
     The body is held horizontal, elbows digging into the
     hip-flexor shelf, on a variety of surfaces.

     Progression lines:

     FLOOR:
       Tuck EL → Straddle EL → One-Leg EL → Full EL
       → Reverse Grip EL → Fingertip EL
       → One-Arm Tuck EL → One-Arm Straddle EL → One-Arm EL

     PARALLETTES:
       Tuck EL → Straddle EL → One-Leg EL → Full EL
       → One-Arm Tuck EL → One-Arm Straddle EL → One-Arm EL

     PUSH-UP HANDLES:
       Tuck EL → One-Leg EL → Straddle EL → Full EL
       → One-Arm Tuck EL → One-Arm Straddle EL → One-Arm EL

     RINGS:
       Tuck EL → One-Leg EL → Straddle EL → Full EL
       → One-Arm Tuck EL → One-Arm Straddle EL → One-Arm EL
  ──────────────────────────────────────────────────────────── */

  /* ─── FLOOR ─────────────────────────────────────────────── */

  {
    id: 126,
    name: "Tuck EL",
    alt: "Tuck elbow balance · bent-knee elbow lever floor",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 2.2,
    str: {suit:true, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:1, neck:1, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:1, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.4, 0.8],
    desc: "The most accessible entry into the elbow lever — the knees are tucked fully against the chest and upper arms rather than the legs being extended. The elbows still press into the hip-flexor shelf and the body is still elevated off the floor, but the short tucked lever arm dramatically reduces the balance and strength demands. A beginner can typically achieve their first successful hold within a single session using this position. The skill being trained is finding the balance point and learning to generate shoulder depression and forward lean simultaneously.",
    cues: "Press both elbows into the hip-flexor groove, brace the core into a hollow, and lean the shoulders forward slowly until the feet lift. With the knees tucked, the balance point arrives much sooner — don't overthink the lean. Hold the tuck position actively: don't let the knees splay apart. Extend the legs gradually into a straddle as confidence builds.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 97,
    name: "Straddle EL",
    alt: "Floor straddle elbow lever · wide-leg floor balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 3.6,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:1, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.8, 1.5],
    desc: "A straddle elbow lever on the floor — the standard first surface for this entry skill. The legs are spread wide, reducing the effective lever arm and making the balance point easier to find and hold. Elbows press into the hip-flexor groove, the core braces into a hollow position, and the shoulders lean forward until both feet lift. Most practitioners first learn the elbow lever in this position on the floor before transitioning to parallettes or attempting straight legs.",
    cues: "Find the hip-flexor shelf and lean forward until feet lift. Spread legs as wide as needed to find the balance point, then narrow gradually over sessions as confidence and strength build. The balance point shifts backward as the legs narrow — compensate by leaning the shoulders forward slightly more.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 128,
    name: "One-Leg EL",
    alt: "Half-lay elbow lever · single-leg extension floor balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 3.2,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.7, 1.3],
    desc: "An elbow lever with one leg extended and the other knee tucked — the asymmetric lever arm sits between the straddle and full straight-body position, making this a natural intermediate step. The extended leg demands more core anti-rotation and oblique bracing than the straddle; alternating sides each set reveals strength imbalances and builds bilateral balance capacity. The standard progression bridge between the straddle and the full elbow lever.",
    cues: "Keep the extended leg in line with the torso — it should not drift above or below horizontal. The tucked knee presses lightly into the upper arm for balance reference. Alternate which leg is extended across sets. If the hips rotate toward the extended side, the obliques are the limiting factor — spend more time in the straddle position first.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 95,
    name: "Elbow Lever",
    alt: "Floor elbow balance · forearm balance on floor",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 4.0,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [1, 2],
    desc: "Elbow lever on the floor — the standard first surface for this skill. The elbows press into the hip-flexor groove, the core locks into a hollow, and the whole body is balanced horizontally on two fists with legs together and fully extended. The lower height of the floor compared to parallettes changes the entry angle but the balance point mechanics are identical. Most first attempts occur on the floor and it remains the most accessible surface for the full straight-body version.",
    cues: "Press the elbow into the hip-flexor groove, not the abdomen — find the bony shelf formed by the iliac crest and hip flexor. Keep the core rigid in a hollow position and lean the torso forward until the feet lift. Parallettes make the entry angle slightly more comfortable but are not required for the skill.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 133,
    name: "EL | Reverse Grip",
    alt: "Reverse grip elbow lever · backward-hand floor balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Wrist Extensors", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 4.8,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 2,
    kcalPerRep: [1, 2],
    desc: "An elbow lever performed with the fingers pointing backward rather than forward — the wrist is in a reverse-extended orientation that shifts the elbow shelf geometry and loads the wrist extensor chain differently. The balance mechanics are otherwise identical to the standard elbow lever, but the changed hand angle moves the elbow contact point to a slightly different region of the hip flexor shelf and demands good wrist extension tolerance. A training variation used to develop wrist conditioning for back-bridge and reverse-planche adjacent skills.",
    cues: "Assess wrist extension range before loading this grip — the reverse orientation requires significant wrist flexibility. Begin with very light lean and build tolerance over several weeks before attempting a full hold. The elbow shelf position shifts slightly — spend a few attempts finding the new balance point before committing to a hold attempt.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 134,
    name: "EL | Fingertip",
    alt: "Fingertip elbow lever · open-hand floor balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 5.5,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 3,
    kcalPerRep: [1.2, 2.2],
    desc: "An elbow lever performed on the fingertips rather than flat palms — the entire bodyweight is channelled through the distal finger tendons and pulleys in addition to the standard balance and core demands of the elbow lever. A niche but legitimate variant: it trains the finger strength and wrist stability required for fingertip planche progressions while simultaneously conditioning the balance skill. The balance point shifts slightly due to the changed hand height and the elbow shelf mechanics become more sensitive.",
    cues: "Build fingertip hang and fingertip push-up endurance before attempting this — the tendons adapt slowly and loading to failure risks acute pulley injury. Begin with a straddle leg position to reduce the total load per session. Any sharp pain in the finger joints means the total hold duration is too high; reduce immediately.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9001, // TODO: assign real id from registry
    name: "One-Arm Tuck EL",
    alt: "Tucked single-arm elbow lever · bent-knee one-arm floor balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 5.0,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:1, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 3,
    kcalPerRep: [1.5, 2.8],
    desc: "The first bridging step between the two-arm elbow lever and the full one-arm hold — the knees stay tucked tightly against the chest exactly as in the two-arm tuck, but the entire bodyweight now balances through a single elbow-to-hip contact point. Tucking shortens the lever arm enough that the unilateral balance and anti-rotation demand becomes approachable well before a practitioner is ready for straight legs on one arm. The standard entry point for one-arm elbow lever training, and worth holding confidently before progressing to the straddle.",
    cues: "Keep the knees pulled in tight — the short lever is what makes one-arm balance possible at this stage. The free arm can lightly touch the floor or reach out as a counterbalance early on. Brace the obliques on the supporting side hard against the tilt toward the free side. Once tucked holds feel stable and centered, begin extending toward a straddle.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9002, // TODO: assign real id from registry
    name: "One-Arm Straddle EL",
    alt: "Straddled single-arm elbow lever · wide-leg one-arm floor balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 6.3,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2, 3.6],
    desc: "The second bridging step toward the full one-arm elbow lever — legs are spread wide into a straddle rather than tucked, lengthening the effective lever considerably while keeping the load manageable for the supporting arm and obliques. Most of the anti-rotation and unilateral core demand of the full one-arm hold is already present here; straight legs mainly add the longer lever and the loss of the tucked knee as a balance reference. A confident straddle hold on one arm is the clearest readiness signal for attempting the straight-body version.",
    cues: "Spread the legs only as wide as needed to feel stable, then narrow gradually across sessions exactly as in the two-arm straddle progression. The supporting elbow still digs into the same hip-flexor groove. Expect more rotational pull toward the free side than in the tucked version — keep the obliques locked in hard. Hold confidently here before attempting straight legs.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 96,
    name: "One-Arm EL",
    alt: "Floor single-arm elbow lever · one-arm balance floor",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 7.6,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.5, 4.5],
    desc: "A one-arm elbow lever on the floor — the entire bodyweight is balanced through a single elbow-to-hip-contact shelf, requiring significant unilateral core and oblique strength to prevent lateral tilt while maintaining the horizontal body position. Considerably harder than the two-arm version due to both the lateral balance challenge and the doubled load through a single elbow and wrist. The floor is the default surface for this skill. A respected advanced skill and a stepping stone toward one-arm planche preparations.",
    cues: "The free arm can assist balance by pressing gently on the thigh or reaching out as a lateral counterbalance. The supporting elbow digs into the same hip-flexor groove as in the two-arm version. Brace the obliques aggressively against the rotation that would tilt the body toward the free side. Begin with a straddle leg position on one arm before attempting straight legs.",
    equipment: "Floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  /* ─── PARALLETTES ────────────────────────────────────────── */

  {
    id: 127,
    name: "Tuck EL | (Parallettes)",
    alt: "Tuck elbow balance parallettes · bent-knee elevated balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 2.0,
    str: {suit:true, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:1, neck:1, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:1, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.4, 0.8],
    desc: "A tuck elbow lever on parallettes — the elevated handle height creates a more comfortable entry angle compared to the floor and gives the knees greater clearance, making this very slightly easier than the floor tuck version as a first hold attempt. The elbows still press into the hip-flexor shelf, both knees are tucked against the upper arms, and the core braces into a hollow to maintain the position. The best first surface for complete beginners to experience the elbow lever balance point for the first time.",
    cues: "Grip the parallettes and press the elbows into the hip-flexor groove. With knees tucked, the balance point is very close — lean forward incrementally until the feet lift rather than committing to a big lean. The elevated handles also make it easier to regain footing if the balance is lost. Progress by extending one leg at a time.",
    equipment: "Parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 63,
    name: "Straddle EL | (Parallettes)",
    alt: "Straddle forearm balance · wide-leg elbow lever parallettes",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 3.6,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:1, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.8, 1.5],
    desc: "An elbow lever on parallettes with the legs spread wide in a straddle — the wide leg position reduces the effective lever arm and makes finding the balance point more forgiving, making this the standard entry progression before the straight-body elbow lever. The elevated handles allow a slightly more natural entry angle and better knee clearance than the floor. The elbows-to-hip-flexor shelf mechanics are identical to all floor variants; only the hand height and leg position change.",
    cues: "Find the hip-flexor shelf first in this straddle position before attempting straight legs. Spread the legs as wide as needed to achieve a balanced hold, then narrow gradually over sessions. The balance point shifts forward as the legs extend — lean forward incrementally to compensate.",
    equipment: "Parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 129,
    name: "One-Leg EL | (Parallettes)",
    alt: "Half-lay elbow lever parallettes · single-leg extension parallette balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 3.0,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.7, 1.3],
    desc: "A one-leg elbow lever on parallettes — one leg extended, one knee tucked, held as a static isometric position. The parallette elevation improves the entry angle and provides knee clearance, making this slightly easier to first achieve than the floor version. The natural intermediate step on parallettes between the straddle hold and the full straight-body elbow lever. The extended leg side demands greater core anti-rotation; alternating sides builds bilateral strength.",
    cues: "Keep the extended leg horizontal and in line with the torso. The tucked knee presses lightly against the upper arm for lateral balance reference. If the hips rotate toward the extended leg side, the obliques are the limiting factor — spend more time in the straddle on parallettes before progressing.",
    equipment: "Parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 26,
    name: "Elbow Lever | (Parallettes)",
    alt: "Elbow balance parallettes · forearm balance on parallettes",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 4.0,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [1, 2],
    desc: "A floor balance skill where the body is held horizontal with both elbows digging into the hip flexor region and acting as a shelf — the forearms are vertical, the body is parallel to the floor, and bodyweight is balanced entirely on the elbow-to-hip contact points. Performed on parallettes for a slightly more comfortable entry angle and better hip clearance than the floor version. A fundamental calisthenics balance skill that serves as an accessible entry to horizontal holds and body-lever mechanics.",
    cues: "The elbows press into the hip-flexor groove, not the abdomen — find the bony shelf formed by the iliac crest and hip flexors. Keep the core rigid in a hollow position and lean the torso forward until the feet lift. Start with a straddle leg position to reduce the lever before attempting a straight-body hold.",
    equipment: "Parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9003, // TODO: assign real id from registry
    name: "One-Arm Tuck EL | (Parallettes)",
    alt: "Tucked single-arm elbow lever parallettes · bent-knee one-arm elevated balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 5.0,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:1, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 3,
    kcalPerRep: [1.5, 2.8],
    desc: "The parallette version of the tucked one-arm bridging step — the elevated handle gives a slightly more stable grip platform and better knee clearance than the floor, while the knees stay tucked tightly to keep the lever arm short enough for one-arm balance to be approachable. Mechanically identical to the floor version; the main benefit is a marginally easier entry angle. The standard first stage of one-arm elbow lever training for practitioners who prefer parallettes over floor.",
    cues: "Same setup as the two-arm parallette tuck: press the supporting elbow into the hip-flexor groove and keep the knees pulled in tight. The free arm can rest lightly on the parallette or reach out for balance early on. Once stable and centered, begin extending toward a straddle.",
    equipment: "Parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9004, // TODO: assign real id from registry
    name: "One-Arm Straddle EL | (Parallettes)",
    alt: "Straddled single-arm elbow lever parallettes · wide-leg one-arm elevated balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 6.3,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2, 3.6],
    desc: "The parallette version of the straddled one-arm bridging step — legs spread wide on one arm, supported by the more stable grip platform of the parallette handle. Carries nearly all of the anti-rotation and unilateral core demand of the full one-arm hold; straight legs add mainly the longer lever and the loss of the tucked knee as a reference point. A confident hold here is the clearest signal of readiness for the full straight-body one-arm parallette elbow lever.",
    cues: "Spread the legs only as wide as needed, narrowing gradually across sessions. Keep the obliques locked hard against the pull toward the free side — it will be more pronounced than in the tucked version. Hold confidently here before progressing to straight legs.",
    equipment: "Parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 27,
    name: "One-Arm EL | (Parallettes)",
    alt: "Single-arm elbow lever parallettes · one-arm balance elevated",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 7.6,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.5, 4.5],
    desc: "An elbow lever performed with a single arm on parallettes — the entire bodyweight is balanced through one elbow-to-hip contact point, requiring significant unilateral core and oblique strength to prevent lateral tilt. Considerably harder than the two-arm version due to both the lateral balance challenge and the increased load per side. The parallette handle provides a slightly more stable grip platform than the floor. A respected advanced skill and a natural stepping stone before one-arm planche work.",
    cues: "The free arm can assist balance by pressing gently on the thigh or reaching out as a counterbalance. The supporting elbow digs into the same hip-flexor groove as in the two-arm version. Brace the obliques hard against the rotation that would tilt the body toward the free side. Build from a solid two-arm parallette elbow lever and practice one-arm leans before attempting the full hold.",
    equipment: "Parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  },



  /* ── L-SIT FAMILY ────────────────────────────────────────────
     Pure compression + hip flexor isometric. No movement.
     The body is supported on the hands, legs held off the floor.

     Progression lines:

     FLOOR (fists):
       Tuck L-sit → One-Leg L-sit → Straddle L-sit → L-sit
       → N-sit → V-sit → Manna

     PARALLETTES:
       Tuck L-sit → One-Leg L-sit → Straddle L-sit → L-sit
       → N-sit → V-sit → Manna

     DIP BARS:
       Tuck L-sit → One-Leg L-sit → Straddle L-sit → L-sit
       → N-sit → V-sit

     RINGS:
       Tuck L-sit → One-Leg L-sit → Straddle L-sit → L-sit
       → N-sit → V-sit

     ONE-ARM (parallettes):
       One-Arm Tuck L-sit → One-Arm L-sit
  ──────────────────────────────────────────────────────────── */

  /* ─── FLOOR ─────────────────────────────────────────────── */

  {
    id: 9010, // TODO: assign real id from registry
    name: "Tuck L-sit",
    alt: "Tuck L-sit floor · bent-knee seated compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Shoulders",   p:false},
      {n:"Quads",       p:false}
    ],
    tags: ["hip flexors", "core", "triceps"],
    diff: 2.5,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:1, neck:1, thoracic:1, lowerBack:1, si:0, hip:2, groin:1, knee:2, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.5, 1.0],
    desc: "The entry point to L-sit training — both knees are pulled toward the chest and held off the floor while the arms bear the entire bodyweight on fists. The shortened lever arm of the tucked position dramatically reduces the hip flexor and compression demand compared to straight legs, allowing beginners to accumulate the pressing and active compression time needed before the hip flexors and triceps are strong enough to hold the full position. Performed on fists rather than flat palms to create enough clearance for the knees.",
    cues: "Sit on the floor with fists planted beside the hips, fingers facing forward. Press down hard through the arms and depress the shoulders — no shrugging. Pull the knees toward the chest and hold them there by actively contracting the hip flexors. The goal is to keep both feet off the floor simultaneously. Extend one leg at a time as the hold duration grows.",
    equipment: "Floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9011, // TODO: assign real id from registry
    name: "One-Leg L-sit",
    alt: "One-leg L-sit floor · single-leg extension compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "quads"],
    diff: 3.0,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.7, 1.3],
    desc: "An L-sit hold with one leg fully extended and the other knee tucked — the asymmetric position splits the hip flexor demand, loading the extended-leg side fully while the tucked side remains partially unloaded. The natural bridge between the tuck and the full two-leg L-sit. Alternating which leg is extended reveals hip flexor strength asymmetries and builds the active compression tolerance needed for the straight-leg position. The extended leg must be held at exactly hip height — no sagging.",
    cues: "Press down hard through both arms and depress the shoulders. Extend one leg fully at hip height — the quad must be engaged hard to keep the leg straight and parallel to the floor. The tucked knee does not need to be pulled high; it simply stays bent and clear of the floor. Alternate sides each set. When both legs feel equally strong in extension, progress to the full L-sit.",
    equipment: "Floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9012, // TODO: assign real id from registry
    name: "Straddle L-sit",
    alt: "Straddle L-sit floor · wide-leg seated compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Adductors",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "quads"],
    diff: 3.2,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.7, 1.4],
    desc: "An L-sit with both legs extended and spread wide in a straddle position. Straddling reduces the effective lever arm compared to legs together, distributing the hip flexor demand across a wider position and making the hold attainable for those who cannot yet hold the full parallel-legs L-sit. Also demands adductor endurance to hold the spread position. A common entry point for athletes with decent pressing strength but insufficient hip flexor output for the standard L-sit.",
    cues: "Press down through the arms and lock the shoulders in depression. Extend both legs wide — the exact straddle width does not matter; use whatever width allows you to hold the legs at hip height. Keep the quads tight so the knees do not bend. Gradually bring the feet closer together across sessions as hip flexor strength improves.",
    equipment: "Floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9013, // TODO: assign real id from registry
    name: "L-sit",
    alt: "L-sit floor · straight-leg seated compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "quads"],
    diff: 4.0,
    str:  {suit:true, eff:3},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:4, groin:1, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [1.0, 1.8],
    desc: "The standard L-sit: both legs fully extended and held parallel to the floor while the body is supported on the hands, forming an L-shape at the hips. The position demands simultaneous shoulder depression, tricep engagement, active hip flexion under load, and quad contraction to keep the knees straight. The hip flexors are the primary limiting factor for most athletes — they must generate enough force to hold the legs at exactly 90° against gravity. Performed on fists on the floor, which is the hardest surface due to the minimal clearance between the floor and the legs.",
    cues: "Plant fists shoulder-width apart, depress the shoulders fully and press hard into the floor. Lift the legs by actively contracting the hip flexors — the legs do not float up; you must pull them there. Keep the knees locked straight with the quads engaged. The legs should be parallel to the floor; any sag below horizontal reduces the hip flexor demand and defeats the purpose of the position. Hold the body rigid — no leaning forward excessively.",
    equipment: "Floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9014, // TODO: assign real id from registry
    name: "N-sit",
    alt: "N-sit floor · above-horizontal leg compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "quads", "shoulders"],
    diff: 5.5,
    str:  {suit:true, eff:4},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:3, neck:1, thoracic:2, lowerBack:3, si:1, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 4,
    kcalPerRep: [1.5, 2.8],
    desc: "The N-sit is an L-sit progression where the legs are raised above the horizontal plane — typically to 30–45° above hip height — while the body remains supported on the hands. The increased angle dramatically amplifies the hip flexor moment arm and spinal compression demand compared to the standard L-sit. The name reflects the N-shape formed at the hip when the legs are above horizontal. It is both a standalone strength target and a necessary stepping stone toward the V-sit and Manna.",
    cues: "Begin from a solid L-sit. Without bending the knees, contract the hip flexors harder to drive the feet upward past horizontal — aim for 30–45° above hip height initially. The lower back will want to round under the load; actively maintain thoracic extension. The arms must press harder into the floor as the legs rise. Hold the highest position where the knees remain locked straight.",
    equipment: "Floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9015, // TODO: assign real id from registry
    name: "V-sit",
    alt: "V-sit floor · high-leg compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Shoulders",   p:true},
      {n:"Quads",       p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "shoulders", "quads"],
    diff: 7.0,
    str:  {suit:true, eff:5},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:1},
    risk: 2,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:1, thoracic:3, lowerBack:4, si:2, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 4,
    strength: 5,
    kcalPerRep: [2.0, 3.8],
    desc: "The V-sit is a high-compression isometric where both legs are raised to approximately 45° above horizontal, forming a V-shape between the torso and legs. It requires extraordinary active hip flexion strength, high hamstring flexibility to allow full knee extension at elevation, significant thoracic compression tolerance, and total shoulder depression under heavy load. The torso begins to lean back slightly as the legs rise, shifting load from pure hip flexion into a combination of hip flexion and spinal compression. A respected advanced skill in its own right and the main prerequisite for the Manna.",
    cues: "From a solid N-sit, continue driving the feet higher — the torso will naturally lean back as the legs pass 45°. Allow this lean while maintaining thoracic extension; the spine should not round. Keep the knees absolutely locked and the feet together. The pressing demand through the arms increases substantially as the angle rises. Both hamstring flexibility and hip flexor output will be simultaneously limiting factors for most athletes.",
    equipment: "Floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9016, // TODO: assign real id from registry
    name: "Manna",
    alt: "Manna hold · maximum compression seated skill",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Shoulders",   p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true}
    ],
    tags: ["hip flexors", "shoulders", "core", "triceps", "quads"],
    diff: 9.5,
    str:  {suit:true, eff:5},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:3, hip:5, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 5,
    strength: 5,
    kcalPerRep: [3.0, 5.5],
    desc: "The Manna is the maximum expression of the seated compression family — the legs are raised fully vertical or beyond while the torso leans far back, held in a straight line, with the hands pressing into the floor behind the hips. It requires years of dedicated hip flexor and compression training, extreme hamstring flexibility, and complete mastery of all preceding L-sit progressions. Among the rarest and most demanding isometric skills achievable in calisthenics. Even an elite gymnast typically needs dedicated Manna-specific programming for an extended period before achieving the full position.",
    cues: "There is no shortcut to this position. Prerequisites are a solid V-sit, full pancake flexibility, and significant wrist extension tolerance for the behind-the-hip hand placement. Work N-sit and V-sit for extended periods — months to years — before attempting Manna holds. In the Manna itself, the torso leans back dramatically while the legs drive vertical; the wrists must tolerate extreme extension in the behind-hip grip. Any sharp wrist or lower back pain means the position has been rushed.",
    equipment: "Floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  /* ─── PARALLETTES ────────────────────────────────────────── */

  {
    id: 9020, // TODO: assign real id from registry
    name: "Tuck L-sit | (Parallettes)",
    alt: "Tuck L-sit parallettes · bent-knee elevated compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Shoulders",   p:false},
      {n:"Quads",       p:false}
    ],
    tags: ["hip flexors", "core", "triceps"],
    diff: 2.2,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:1, neck:1, thoracic:1, lowerBack:1, si:0, hip:2, groin:1, knee:2, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.5, 0.9],
    desc: "The entry point for L-sit work on parallettes — both knees are pulled toward the chest and held off the floor while the arms bear bodyweight on the parallette handles. The elevated handles create significantly more clearance beneath the hips than floor fists, making the tuck version easier to achieve and hold than the floor equivalent. The standard first L-sit drill for beginners, as the extra clearance removes the precision constraint and lets the athlete focus entirely on shoulder depression and pressing mechanics.",
    cues: "Grip the parallettes, lock the elbows, and depress the shoulders fully — no shrugging. Pull the knees toward the chest and hold by contracting the hip flexors. The extra handle height means the knees do not need to be pulled quite as high to clear the floor. Extend one leg at a time to progress.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9021, // TODO: assign real id from registry
    name: "One-Leg L-sit | (Parallettes)",
    alt: "One-leg L-sit parallettes · single-leg extension elevated hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "quads"],
    diff: 2.8,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.6, 1.2],
    desc: "A one-leg L-sit on parallettes — one leg fully extended at hip height, the other knee tucked. The parallette elevation gives comfortable clearance for both the extended and tucked leg, making this a clean and accessible intermediate step before the full two-leg L-sit on parallettes. The mechanics are identical to the floor version but the extra height removes the precision constraint, allowing the athlete to focus on hip flexor output on the extended side.",
    cues: "Lock the elbows and depress the shoulders. Extend one leg to hip height with the quad fully engaged — it must not sag below horizontal. Alternate sides each set. When both legs feel strong in isolation, bring them together for the full L-sit.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9022, // TODO: assign real id from registry
    name: "Straddle L-sit | (Parallettes)",
    alt: "Straddle L-sit parallettes · wide-leg elevated compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Adductors",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "quads"],
    diff: 3.0,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.7, 1.3],
    desc: "A straddle L-sit on parallettes — both legs extended and spread wide, held off the floor. The parallette clearance makes the straddle fully comfortable without the precision constraints of the floor version, making this the most accessible entry to an extended-leg L-sit hold for most beginners. The reduced lever from the wide leg position lowers hip flexor demand relative to the closed-leg L-sit, allowing athletes with pressing strength but limited hip flexor output to accumulate hold time in an extended-leg position.",
    cues: "Lock the elbows and depress the shoulders completely. Extend both legs wide at hip height. Width does not matter — use whatever straddle angle allows you to maintain hip height. Gradually bring the feet closer together as hip flexor strength improves across sessions.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9023, // TODO: assign real id from registry
    name: "L-sit | (Parallettes)",
    alt: "L-sit parallettes · straight-leg elevated compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "quads"],
    diff: 3.8,
    str:  {suit:true, eff:3},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:4, groin:1, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.9, 1.7],
    desc: "The standard L-sit on parallettes — both legs fully extended and held parallel to the floor. Parallettes are the most common and recommended surface for first achieving the full L-sit: the handle height provides ample clearance for the legs, the neutral-grip wrist position is comfortable, and the stable surface allows full focus on hip flexor and compression output rather than balance. The hip flexors remain the primary limiting factor regardless of surface; parallettes simply remove the equipment constraints that make the floor version harder to set up.",
    cues: "Lock the elbows fully and depress the shoulders hard — the scapulae should be pulled down, not shrugged. Drive the legs up to hip height by contracting the hip flexors, not by rocking or using momentum. Keep the quads engaged and the knees locked. Hold the position with the feet together and at exactly hip height — any sag reduces the training value.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9024, // TODO: assign real id from registry
    name: "N-sit | (Parallettes)",
    alt: "N-sit parallettes · above-horizontal leg hold elevated",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "quads", "shoulders"],
    diff: 5.2,
    str:  {suit:true, eff:4},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:2},
    risk: 2,
    joints: {fingers:1, wrist:2, elbow:3, shoulder:3, neck:1, thoracic:2, lowerBack:3, si:1, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 4,
    kcalPerRep: [1.4, 2.6],
    desc: "An N-sit on parallettes — legs raised above horizontal while supported on the handles. The parallettes allow a more comfortable and consistent wrist position than fists on the floor, and the extra clearance means the rising legs do not scrape the floor during the hold. Mechanically identical to the floor N-sit in all other respects. The hip flexor output required to hold the above-horizontal position is the same regardless of surface; parallettes simply provide a more controlled environment to work in.",
    cues: "From a solid parallettes L-sit, drive the feet higher — aim for 30–45° above horizontal. Maintain thoracic extension as the legs rise rather than allowing the back to round. The arms press harder as the angle increases. Hold the highest angle where the knees remain absolutely straight.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9025, // TODO: assign real id from registry
    name: "V-sit | (Parallettes)",
    alt: "V-sit parallettes · high-leg elevated compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Shoulders",   p:true},
      {n:"Quads",       p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "shoulders", "quads"],
    diff: 6.8,
    str:  {suit:true, eff:5},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:1},
    risk: 2,
    joints: {fingers:1, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:3, lowerBack:4, si:2, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 4,
    strength: 5,
    kcalPerRep: [1.8, 3.5],
    desc: "A V-sit on parallettes — legs raised to approximately 45° above horizontal with the torso leaning back, held on the handles. The parallette surface is the standard choice for V-sit training: the wrist position is more comfortable than fists on the floor for the duration of high-intensity compression holds, and the handle height gives clearance that the floor cannot. The strength and mobility demands are identical to the floor version; most athletes who achieve the V-sit do so first on parallettes.",
    cues: "Drive the feet higher from the N-sit position, allowing the torso to lean back naturally as the legs rise. Maintain a straight knee and a rigid body — the V-shape must be clean, not formed by rounding the lower back or bending the knees. Both hamstring flexibility and hip flexor output are co-limiting factors at this height.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9026, // TODO: assign real id from registry
    name: "Manna | (Parallettes)",
    alt: "Manna parallettes · maximum compression elevated skill",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Shoulders",   p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true}
    ],
    tags: ["hip flexors", "shoulders", "core", "triceps", "quads"],
    diff: 9.5,
    str:  {suit:true, eff:5},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:3, hip:5, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 5,
    strength: 5,
    kcalPerRep: [3.0, 5.5],
    desc: "The Manna on parallettes — legs vertical or beyond, torso leaning far back, held on the handles. The parallette surface is the preferred and most common training environment for the Manna: it gives a stable, comfortable grip and accommodates the behind-hip hand position required in the deepest versions more naturally than floor fists. All demands are identical to the floor Manna; the surface simply provides a better working environment for the advanced compression work involved.",
    cues: "All floor Manna prerequisites apply here. The parallette grip is slightly more comfortable for the wrist extension required in the deep lean-back. Approach this position only after a reliable, clean V-sit on parallettes across multiple sessions.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  /* ─── DIP BARS ───────────────────────────────────────────── */

  {
    id: 9030, // TODO: assign real id from registry
    name: "Tuck L-sit | (Dip Bars)",
    alt: "Tuck L-sit dip bars · bent-knee suspended compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Shoulders",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps"],
    diff: 2.3,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:1, neck:1, thoracic:1, lowerBack:1, si:0, hip:2, groin:1, knee:2, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.5, 0.9],
    desc: "A tuck L-sit on dip bars — the most accessible L-sit starting surface due to the high handle clearance and neutral-grip wrist position. The generous height of dip bars means knee clearance is almost never a limiting factor, allowing complete beginners to focus entirely on shoulder depression and pressing output. The mechanics are identical to all tuck L-sit variations; the dip bar height simply removes the clearance constraint entirely.",
    cues: "Support the bodyweight on straight arms, depress the shoulders, and pull the knees toward the chest. The height of dip bars gives ample clearance — focus on keeping the shoulders depressed and the elbows locked rather than on pulling the knees high. Extend one leg at a time to progress.",
    equipment: "Dip Bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9031, // TODO: assign real id from registry
    name: "One-Leg L-sit | (Dip Bars)",
    alt: "One-leg L-sit dip bars · single-leg extension suspended hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "quads"],
    diff: 2.7,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.6, 1.1],
    desc: "A one-leg L-sit on dip bars — one leg extended at hip height, the other knee tucked. The dip bar height gives excellent clearance and makes the setup and entry straightforward. Mechanically identical to all one-leg L-sit variations; dip bars simply offer the most comfortable and accessible environment to practice asymmetric hip flexor loading before the full two-leg version.",
    cues: "Straight arms, depressed shoulders. Extend one leg fully to hip height — quad locked, knee straight. Tucked knee stays relaxed and clear of the bars. Alternate sides. When both sides feel equal, bring the legs together.",
    equipment: "Dip Bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9032, // TODO: assign real id from registry
    name: "Straddle L-sit | (Dip Bars)",
    alt: "Straddle L-sit dip bars · wide-leg suspended compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Adductors",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "quads"],
    diff: 2.9,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.6, 1.2],
    desc: "A straddle L-sit on dip bars — both legs extended and spread wide. The dip bar height is the most forgiving surface for this position and a very common first extended-leg L-sit experience. The reduced lever from the straddle combined with the generous clearance makes this achievable for athletes still building toward the full L-sit.",
    cues: "Depress shoulders and lock elbows. Extend both legs wide at hip height. Use whatever straddle width keeps the legs at hip level. Narrow gradually across sessions.",
    equipment: "Dip Bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9033, // TODO: assign real id from registry
    name: "L-sit | (Dip Bars)",
    alt: "L-sit dip bars · straight-leg suspended compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "quads"],
    diff: 3.7,
    str:  {suit:true, eff:3},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:4, groin:1, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.9, 1.6],
    desc: "The standard L-sit on dip bars — both legs fully extended at hip height, body supported on straight arms. Dip bars sit between parallettes and rings in terms of accessibility: the neutral grip and high clearance make setup easy, but the fixed-width bars mean hand spacing is determined by the equipment. A very common first full L-sit surface. Hip flexor output is the sole limiting factor once the basic pressing mechanics are established.",
    cues: "Straight arms, fully depressed shoulders. Drive both legs to hip height simultaneously using the hip flexors. Lock the knees. Keep the legs together and horizontal — no sag.",
    equipment: "Dip Bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9034, // TODO: assign real id from registry
    name: "N-sit | (Dip Bars)",
    alt: "N-sit dip bars · above-horizontal leg hold suspended",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "quads", "shoulders"],
    diff: 5.0,
    str:  {suit:true, eff:4},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:2},
    risk: 2,
    joints: {fingers:1, wrist:1, elbow:3, shoulder:3, neck:1, thoracic:2, lowerBack:3, si:1, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 4,
    kcalPerRep: [1.4, 2.5],
    desc: "An N-sit on dip bars — legs above horizontal while supported on the bars. The dip bar surface is comfortable for the wrist in this advanced compression position. The hip flexor demand is identical to all other N-sit surfaces; the bars provide a stable, fixed environment that many athletes prefer for high-intensity compression work.",
    cues: "From the dip bar L-sit, drive the feet higher without bending the knees. Maintain thoracic extension under the increased load. Hold the highest angle achievable with locked knees.",
    equipment: "Dip Bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9035, // TODO: assign real id from registry
    name: "V-sit | (Dip Bars)",
    alt: "V-sit dip bars · high-leg elevated suspended hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Shoulders",   p:true},
      {n:"Quads",       p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "shoulders", "quads"],
    diff: 6.8,
    str:  {suit:true, eff:5},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:1},
    risk: 2,
    joints: {fingers:1, wrist:1, elbow:3, shoulder:4, neck:1, thoracic:3, lowerBack:4, si:2, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 4,
    strength: 5,
    kcalPerRep: [1.8, 3.4],
    desc: "A V-sit on dip bars — legs at approximately 45° above horizontal with the torso leaning back, supported on the bars. Mechanically identical to all other V-sit surfaces. The dip bar wrist position is comfortable for the extended duration of V-sit training sets. The strength and mobility demands are the same regardless of surface.",
    cues: "Drive the feet from the N-sit position still higher, allowing the natural torso lean-back. Straight knees, rigid body. Both hamstring flexibility and hip flexor output limit the angle achievable.",
    equipment: "Dip Bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  /* ─── RINGS ──────────────────────────────────────────────── */

  {
    id: 9040, // TODO: assign real id from registry
    name: "Tuck L-sit | (Rings)",
    alt: "Tuck L-sit rings · bent-knee suspended ring compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Shoulders",   p:true},
      {n:"Serratus",    p:false}
    ],
    tags: ["hip flexors", "core", "triceps", "shoulders"],
    diff: 3.0,
    str:  {suit:true, eff:2},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:2, groin:1, knee:2, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.7, 1.3],
    desc: "A tuck L-sit on gymnastics rings — the rings hang freely, requiring continuous shoulder and wrist stabilization to prevent the rings from swinging or rotating while the knees are held off the floor. The ring instability adds a shoulder stability demand that does not exist on fixed surfaces, making the ring tuck L-sit harder than the dip bar or parallette equivalents at the same leg position. The standard entry point for ring-based compression work.",
    cues: "Set the rings to hip height, grip them with palms facing in. Lock the elbows and depress the shoulders — then pull the rings down and slightly outward to prevent rotation. Pull the knees toward the chest. The rings will try to swing or rotate; resist this by keeping the grip firm and the shoulders stable.",
    equipment: "Rings",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9041, // TODO: assign real id from registry
    name: "One-Leg L-sit | (Rings)",
    alt: "One-leg L-sit rings · single-leg extension ring hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "quads", "shoulders"],
    diff: 3.5,
    str:  {suit:true, eff:3},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.8, 1.5],
    desc: "A one-leg L-sit on rings — one leg extended, one knee tucked, held on freely-hanging rings. The asymmetric leg position creates a mild lateral pull on the rings that must be actively resisted through the grip and shoulders, stacking a rotational stability demand on top of the standard hip flexor loading. Harder than the fixed-surface equivalent due to ring instability.",
    cues: "Depress shoulders and resist the ring rotation. Extend one leg fully to hip height, keeping the quad locked. The asymmetric load will try to pull one ring lower than the other — keep them level through shoulder and grip control.",
    equipment: "Rings",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9042, // TODO: assign real id from registry
    name: "Straddle L-sit | (Rings)",
    alt: "Straddle L-sit rings · wide-leg ring compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "quads", "shoulders"],
    diff: 3.8,
    str:  {suit:true, eff:3},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.8, 1.6],
    desc: "A straddle L-sit on rings — both legs extended and spread wide, supported on freely-hanging rings. The ring instability adds shoulder stability demands on top of the hip flexor and pressing load of the straddle position. A practical intermediate step on rings before the full closed-leg L-sit, where the reduced lever from the straddle partially offsets the added ring difficulty.",
    cues: "Depress shoulders and keep the rings from rotating. Spread the legs wide and hold at hip height. Narrow the straddle gradually across sessions as hip flexor output improves.",
    equipment: "Rings",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9043, // TODO: assign real id from registry
    name: "L-sit | (Rings)",
    alt: "L-sit rings · straight-leg ring compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "quads", "shoulders"],
    diff: 4.5,
    str:  {suit:true, eff:3},
    vol:  {suit:false, eff:1},
    end:  {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:4, groin:1, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 3,
    kcalPerRep: [1.2, 2.2],
    desc: "The standard L-sit on rings — both legs extended at hip height, body held on freely-hanging gymnastics rings. The ring instability adds a substantial shoulder and grip stability demand on top of the compression and hip flexor requirements of the standard L-sit, making this notably harder than the same position on parallel bars or parallettes. The rings want to rotate outward and swing; resisting this while simultaneously maintaining hip flexor output is the defining challenge of this variation.",
    cues: "Depress the shoulders and turn the rings out slightly to lock the elbow joint. Pull the rings firmly downward and resist any swing or rotation. Drive both legs to hip height simultaneously. Expect shorter hold times than on fixed surfaces — the ring stabilization demand reduces available hip flexor output.",
    equipment: "Rings",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9044, // TODO: assign real id from registry
    name: "N-sit | (Rings)",
    alt: "N-sit rings · above-horizontal leg ring hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Quads",       p:true},
      {n:"Shoulders",   p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "quads", "shoulders"],
    diff: 6.0,
    str:  {suit:true, eff:4},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:1},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 4,
    kcalPerRep: [1.7, 3.2],
    desc: "An N-sit on rings — legs raised above horizontal on freely-hanging gymnastics rings. The ring instability at this above-horizontal leg angle is considerable: the increased posterior lean required to balance the rising legs amplifies the swing tendency of the rings, demanding high shoulder and wrist stability in addition to the already extreme hip flexor output of the N-sit. One of the hardest ring compression holds before the V-sit.",
    cues: "From the ring L-sit, drive the feet higher while maintaining tight ring control. The rings will try to swing backward as the legs rise and the torso leans back — resist this through grip and shoulder depression. Keep the knees locked absolutely straight.",
    equipment: "Rings",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9045, // TODO: assign real id from registry
    name: "V-sit | (Rings)",
    alt: "V-sit rings · high-leg ring compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Shoulders",   p:true},
      {n:"Quads",       p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "shoulders", "quads"],
    diff: 7.5,
    str:  {suit:true, eff:5},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 4,
    strength: 5,
    kcalPerRep: [2.2, 4.2],
    desc: "A V-sit on gymnastics rings — legs at approximately 45° above horizontal with the torso leaning back, held on freely-hanging rings. The ring surface makes this the hardest standard V-sit variation: the instability of the rings at the deep lean-back angle of the V-sit is extreme, requiring simultaneous hip flexor output, shoulder ring control, and spinal compression tolerance. Achieving this cleanly represents an elite level of gymnastics conditioning.",
    cues: "All ring L-sit and N-sit prerequisites must be solid before attempting this. The deep lean-back of the V-sit creates powerful swing and rotation forces in the rings — resist them through the grip and shoulder depression. Straight knees, rigid body, controlled hold.",
    equipment: "Rings",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  /* ─── ONE-ARM ─────────────────────────────────────────────── */

  {
    id: 9050, // TODO: assign real id from registry
    name: "One-Arm Tuck L-sit | (Parallettes)",
    alt: "One-arm tuck L-sit parallettes · single-arm bent-knee compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Obliques",    p:true},
      {n:"Shoulders",   p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "obliques", "shoulders"],
    diff: 6.5,
    str:  {suit:true, eff:4},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:2, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.0, 3.8],
    desc: "A tuck L-sit performed on a single arm on parallettes — the entire bodyweight is supported through one arm while the knees are held off the floor, creating a powerful lateral tilt that the obliques and shoulder must resist. The tucked knee position shortens the lever enough to make the unilateral hold approachable before attempting straight legs on one arm. An extremely rare and challenging skill that bridges advanced two-arm compression work with the near-theoretical one-arm straight-leg hold.",
    cues: "Begin with a solid two-arm parallette L-sit and the ability to shift heavily onto one arm before attempting this. Supporting arm locks fully, shoulder depresses maximally. The free arm can rest on the thigh or reach out for counterbalance early in training. Brace the obliques hard against the lateral tilt. Keep the knees tucked close — the short lever is essential for the hold to be achievable.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9051, // TODO: assign real id from registry
    name: "One-Arm L-sit | (Parallettes)",
    alt: "One-arm L-sit parallettes · single-arm straight-leg compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core",        p:true},
      {n:"Triceps",     p:true},
      {n:"Obliques",    p:true},
      {n:"Shoulders",   p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "obliques", "shoulders"],
    diff: 8.5,
    str:  {suit:true, eff:5},
    vol:  {suit:false, eff:1},
    end:  {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [3.0, 5.5],
    desc: "A full L-sit on a single arm on parallettes — both legs fully extended at hip height while supported entirely by one arm. The unilateral pressing load, extreme oblique anti-lateral-tilt demand, and full hip flexor output required simultaneously place this at the outer boundary of what is achievable in the L-sit family. Documented holds are extremely rare and represent a convergence of one-arm pressing strength, hip flexor capacity, and oblique output that takes years of dedicated training to approach.",
    cues: "A prerequisite of one-arm tuck L-sit and a very strong two-arm L-sit is required. The supporting arm is fully locked and the shoulder depressed to its maximum. Both legs drive to hip height through pure hip flexor contraction. The obliques must fight the full lateral tilt of bodyweight on one side. The free arm may assist with a light touch on the thigh initially. This is a demonstration skill.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  },

];