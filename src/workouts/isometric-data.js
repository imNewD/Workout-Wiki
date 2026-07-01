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

/*
 * isometric-data.js
 *
 * EXTENSIVE LIST — ISOMETRIC POSITIONS ONLY, NO MOVEMENT.
 * Think: things that can be done on different surfaces / different equipment.
 * As many variants for each family / full progression lines.
 *
 * FAMILIES IN THIS FILE:
 *   Elbow Lever   — Floor, Parallettes, Rings
 *   L-sit         — Floor, Parallettes, Dip Bars, Rings (+ one-arm on Parallettes, Dip Bars, Rings)
 *   Dead Hang     — Bar (passive/active/mixed/towel/fingertip/one-arm/weighted/flexed-arm), Rope, Rings
 *   Human Flag    — Bar (tuck → one-leg → straddle → full → reverse grip)
 *   Support Hold  — Dip Bars, Parallettes, Rings (+ one-arm on Parallettes, Rings) + Support Scale (Rings)
 *   Iron Cross    — Rings
 *
 * EXCLUDED (owned by separate data files, or by core-data.js for
 * core-focused static holds like the plank family):
 *   Front Lever  → frontlever-data.js
 *   Back Lever   → backlever-data.js
 *   Planche      → planche-data.js
 *   Handstands   → handstand-data.js
 *   Core planks  → core-data.js
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
       → Reverse Grip EL → Fingertip EL
       → One-Arm Tuck EL → One-Arm Straddle EL → One-Arm EL

     RINGS:
       Tuck EL → One-Leg EL → Straddle EL → Full EL
       → Reverse Grip EL → Fingertip EL
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

  /* ── ELBOW LEVER FAMILY (CONT.) — RINGS ──────────────────────
     The hardest surface for this family: freely-hanging rings
     add continuous swing and rotation on top of the standard
     elbow-lever balance and core demands.

     Tuck EL → One-Leg EL → Straddle EL → Full EL
     → One-Arm Tuck EL → One-Arm Straddle EL → One-Arm EL
  ──────────────────────────────────────────────────────────── */

  {
    id: 9059, // TODO: assign real id from registry
    name: "Tuck EL | (Rings)",
    alt: "Tuck elbow balance rings · bent-knee ring elbow lever",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Wrist Flexors", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 4.4,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.6, 1.2],
    desc: "The entry point for elbow lever training on gymnastics rings — the short tucked lever keeps the core and balance demand low, but the rings themselves want to rotate outward and swing the instant weight is loaded onto the elbows, so even this beginner-level tuck position requires active ring control that the floor and handle versions don't demand. A useful introduction to how much the freely-hanging surface changes an otherwise simple skill.",
    cues: "Set the rings at roughly hip height and turn them slightly inward before loading the elbows — this resists the natural outward rotation. Press the elbows into the hip-flexor shelf as usual, but expect the whole position to feel less settled than on a fixed surface. Keep the knees tucked tight until the ring swing is under control.",
    equipment: "Rings",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9060, // TODO: assign real id from registry
    name: "One-Leg EL | (Rings)",
    alt: "Half-lay elbow lever rings · single-leg extension ring balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Wrist Flexors", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 5.6,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:3, neck:1, thoracic:2, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 3,
    kcalPerRep: [1.1, 2.0],
    desc: "A one-leg elbow lever on rings — one leg extended, one knee tucked, held on a surface that is actively trying to rotate and swing throughout the hold. The asymmetric leg position already pulls the hips toward rotation; the rings amplify any correction into a visible sway that has to be damped through the shoulders and grip rather than a fixed base. Considerably harder than the same shape on the floor or handles.",
    cues: "Keep the extended leg strictly horizontal — on rings, a drifting leg translates directly into ring swing. Turn the rings in slightly and press the elbows into the shelf as usual. Alternate which leg is extended across sets, and expect shorter holds than on fixed surfaces while the ring control is being learned.",
    equipment: "Rings",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9061, // TODO: assign real id from registry
    name: "Straddle EL | (Rings)",
    alt: "Straddle elbow balance rings · wide-leg ring balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Wrist Flexors", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 6.1,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:3, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 3,
    kcalPerRep: [1.3, 2.4],
    desc: "A straddle elbow lever on rings — the wide leg position shortens the lever the same way it does everywhere else, but the rings never stop trying to rotate outward under the elbow load, so the shoulders and grip are working continuously just to keep the straps still. The standard entry into straight-leg elbow lever work on rings, and noticeably harder to settle into than the floor or parallette straddle.",
    cues: "Turn the rings in slightly before loading the elbows to pre-fight the outward rotation. Find the hip-flexor shelf, spread the legs as wide as needed, and expect a low-level constant correction through the shoulders rather than a truly still hold. Narrow the straddle gradually as ring control improves.",
    equipment: "Rings",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9062, // TODO: assign real id from registry
    name: "Elbow Lever | (Rings)",
    alt: "Elbow balance rings · straight-body ring elbow lever",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Wrist Flexors", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 7.5,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:4, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [1.9, 3.4],
    desc: "The full straight-body elbow lever on rings — both legs extended, balanced through the elbows on a surface with no fixed reference point at all. The longer lever of straight legs magnifies any ring rotation into a much bigger swing at the feet than in the tuck or straddle, making this one of the harder standard elbow-lever variants across all surfaces despite sharing the same basic shape as the easy floor version.",
    cues: "Only attempt straight legs on rings once the straddle feels genuinely settled, not just achievable. Turn the rings in, press the elbows into the shelf, and lean forward slowly — sudden weight shifts are what trigger uncontrolled ring swing. Keep the core rigid in a hollow throughout.",
    equipment: "Rings",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9063, // TODO: assign real id from registry
    name: "One-Arm Tuck EL | (Rings)",
    alt: "Tucked single-arm elbow lever rings · bent-knee one-arm ring balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Wrist Flexors", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 8.0,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:4, shoulder:4, neck:1, thoracic:2, lowerBack:2, si:0, hip:1, groin:0, knee:1, ankle:0, foot:0},
    technique: 5,
    mobility: 1,
    strength: 4,
    kcalPerRep: [2.4, 4.2],
    desc: "A tucked one-arm elbow lever on a single ring — the short lever that makes the two-arm and fixed-surface versions approachable is now combined with a single ring that rotates freely in every direction. Even a well-drilled two-arm ring elbow lever doesn't fully prepare a practitioner for how much a single unweighted ring wants to spin the moment the load goes unilateral. A rare, specialist skill primarily trained by ring-focused athletes.",
    cues: "Turn the single ring in hard before committing weight to it. Keep the knees tucked tight and the free arm ready to catch a fall — the failure mode on one ring is usually a sudden spin rather than a gradual tip. Expect this to take significantly longer to acquire than the equivalent floor or handle skill.",
    equipment: "Rings",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9064, // TODO: assign real id from registry
    name: "One-Arm Straddle EL | (Rings)",
    alt: "Straddled single-arm elbow lever rings · wide-leg one-arm ring balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Wrist Flexors", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 9.1,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [3.2, 5.6],
    desc: "The straddled one-arm elbow lever on a single freely-rotating ring — one of the rarest holds in the entire elbow lever progression. Straight legs on one ring combine the full anti-rotation demand of the straddle with a single point of support that has no resistance to spinning at all; the oblique bracing and the ring-control correction have to happen through the same shoulder simultaneously. Achieved by only a small number of dedicated ring specialists.",
    cues: "This sits at the very top of the elbow lever family — a solid one-arm straddle on both parallettes and rings-tucked should already be established. Turn the ring in as far as possible before loading. Spread the legs generously; narrowing further offers little benefit given how rare a clean hold already is at this stage.",
    equipment: "Rings",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9065, // TODO: assign real id from registry
    name: "One-Arm EL | (Rings)",
    alt: "Single-arm elbow lever rings · one-arm straight-body ring balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Wrist Flexors", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 9.7,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [3.6, 6.2],
    desc: "The full straight-body one-arm elbow lever on a single ring — considered close to the theoretical ceiling of the entire family. Bodyweight balanced through one elbow on a support that offers zero resistance to rotation, with the long straight-leg lever maximizing how much any correction shows up as visible swing. Almost never trained as a standalone goal; it typically emerges as a byproduct of years of dedicated ring strength and one-arm planche-adjacent work rather than being pursued directly.",
    cues: "A genuinely confident one-arm straddle on rings, held for several seconds without excessive correction, is the realistic prerequisite here — not just a single achieved rep. Turn the ring in as far as possible and commit to the lean smoothly. Given how rare this hold is, most practitioners are better served treating it as a long-term exploration rather than a near-term goal.",
    equipment: "Rings",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  /* ── DEAD HANG FAMILY ─────────────────────────────────────────
     Pure grip-endurance / shoulder-integrity isometric — the body
     hangs freely from an overhead support with no swinging or
     kipping. The simplest isometric in the entire library, but
     with real variation in grip, arm count, and surface.

     Passive Dead Hang → Active Dead Hang → Mixed Grip Dead Hang
     → Towel Dead Hang → Fingertip Dead Hang → Dead Hang (Rings)
     → One-Arm Dead Hang
  ──────────────────────────────────────────────────────────── */

  {
    id: 9066, // TODO: assign real id from registry
    name: "Passive Dead Hang (Bar)",
    alt: "Relaxed dead hang · full-relaxation bar hang",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Lats", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["forearms", "grip"],
    diff: 1.0,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 1,
    joints: {fingers:2, wrist:1, elbow:1, shoulder:2, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.5, 1.0],
    desc: "The simplest isometric hold in the entire library — hanging from a bar with the shoulders fully relaxed and allowed to ride up toward the ears, letting the joint capsule and connective tissue take the load rather than actively engaged musculature. Used as a shoulder decompression and grip-endurance baseline; despite the low active-strength requirement, it's genuinely useful for spinal traction and as a diagnostic for grip and shoulder-mobility limitations before harder hangs are attempted.",
    cues: "Grip the bar and let the entire body go slack — shoulders shrug up, no attempt to depress or engage the lats. Breathe normally throughout; this should feel restful, not effortful. If sharp shoulder pain occurs rather than a mild stretch, discontinue and check shoulder mobility before progressing to active hangs.",
    equipment: "Bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 9067, // TODO: assign real id from registry
    name: "Active Dead Hang (Bar)",
    alt: "Scapular dead hang · shoulder-engaged bar hang",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Traps", p:false}
    ],
    tags: ["forearms", "grip", "shoulders"],
    diff: 2.3,
    str: {suit:true, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:1, elbow:1, shoulder:3, neck:0, thoracic:1, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.6, 1.3],
    desc: "A dead hang with the shoulder blades actively pulled down and back rather than left slack — this single cue transforms the passive hang into the foundational scapular-depression drill for every pulling skill in calisthenics, from strict pull-ups to front lever to the elbow lever entries above. Holding depressed scapulae under bodyweight for time builds the specific shoulder stability that separates controlled pulling movement from simply yanking the body upward.",
    cues: "Pull the shoulder blades down and slightly back, away from the ears, and hold that position actively for the full duration rather than only at the start. The elbows stay straight; only the scapular position changes versus the passive hang. This is the single most useful entry-level drill for anyone starting a pulling progression.",
    equipment: "Bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 9068, // TODO: assign real id from registry
    name: "Mixed Grip Dead Hang (Bar)",
    alt: "Mixed grip hang · one palm in, one palm out bar hang",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Lats", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["forearms", "grip"],
    diff: 1.6,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:1, shoulder:2, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.5, 1.1],
    desc: "A dead hang with one palm facing the body and the other facing away — the standard deadlift grip applied to hanging. The asymmetric forearm orientation loads the wrist and elbow slightly differently on each side and is worth rotating regularly to avoid building a one-sided imbalance, but it's mainly included as a grip-variety option and a familiarization drill for anyone who also trains mixed-grip weighted hangs or deadlifts.",
    cues: "Take one palm in supination, one in pronation, exactly as in a mixed grip deadlift. Switch which hand takes which position every set to avoid asymmetric adaptation. Otherwise identical in effort to the standard passive or active hang depending on shoulder engagement.",
    equipment: "Bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 9069, // TODO: assign real id from registry
    name: "Towel Dead Hang (Bar)",
    alt: "Towel hang · gi/rope-grip bar hang",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Lats", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["forearms", "grip"],
    diff: 3.2,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:3, wrist:2, elbow:1, shoulder:2, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.7, 1.5],
    desc: "A dead hang performed gripping a towel, gi lapel, or thick rope looped over the bar instead of the bar itself — the thicker, less rigid material removes the ability to hook the fingers around a fixed diameter, forcing the entire crush and pinch grip to do the work instead. A staple conditioning drill for grapplers and climbers, and a useful thick-grip alternative for anyone without access to a fat bar or gripper tools.",
    cues: "Loop one or two towels over the bar and grip them low enough that the hands can't accidentally slide onto the bar itself. Keep the grip a genuine crush rather than letting the towel bunch and become easier to hold. Expect noticeably shorter hold times than a standard bar hang at first.",
    equipment: "Bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 9070, // TODO: assign real id from registry
    name: "Fingertip Dead Hang (Bar)",
    alt: "Fingertip hang · open-hand crimp-free bar hang",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["forearms", "grip", "fingers"],
    diff: 4.8,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:5, wrist:2, elbow:1, shoulder:2, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.8, 1.7],
    desc: "A dead hang supported only by the fingertips rather than a full palm wrap around the bar — the entire bodyweight is channeled through the flexor tendons and pulleys of the fingers with no assistance from the thumb or palm. A direct grip-strength and finger-tendon conditioning drill borrowed from rock climbing training, and considerably more demanding on the connective tissue than any full-grip hang despite requiring less raw pulling strength.",
    cues: "Use an open-hand position rather than a crimped grip to reduce pulley stress — the fingers should curl gently over the bar edge, not clench sharply. Build up hold duration gradually over weeks; the tendons adapt far more slowly than the forearm muscles do. Stop immediately at any sharp joint pain rather than pushing through it.",
    equipment: "Bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 9071, // TODO: assign real id from registry
    name: "Dead Hang | (Rings)",
    alt: "Ring hang · freely-rotating ring dead hang",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Shoulders", p:true},
      {n:"Lats", p:false}
    ],
    tags: ["forearms", "grip", "shoulders"],
    diff: 2.9,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:1, elbow:1, shoulder:3, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.6, 1.3],
    desc: "A dead hang from gymnastics rings instead of a fixed bar — the rings are free to rotate and drift, so the shoulders and grip have to make small continuous corrections to keep the body from swinging or twisting, on top of the standard grip-endurance demand of a bar hang. A common warm-up and shoulder-prep hold before ring-specific strength work such as support holds, dips, or the ring elbow lever variants above.",
    cues: "Let the rings settle into a neutral, slightly turned-out position before fully loading them. Keep light active shoulder engagement rather than going fully passive, since a passive hang on freely-rotating rings tends to drift more than on a fixed bar. Small sway is normal; it doesn't need to be fought, only controlled.",
    equipment: "Rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 9072, // TODO: assign real id from registry
    name: "One-Arm Dead Hang (Bar)",
    alt: "Single-arm hang · one-arm bar hang",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:false}
    ],
    tags: ["forearms", "grip", "shoulders"],
    diff: 5.4,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:3, wrist:2, elbow:2, shoulder:4, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 2,
    kcalPerRep: [1.0, 2.0],
    desc: "A dead hang supported by a single arm — the full bodyweight is taken through one shoulder and one grip, with the body tending to rotate toward the hanging arm unless actively resisted. A direct grip and shoulder-stability precursor to one-arm pull-up training, and a useful standalone assessment of the strength asymmetry between the left and right sides before committing to unilateral pulling work.",
    cues: "Depress the working shoulder actively rather than hanging fully passively — a passive single-arm hang places excessive strain on the joint capsule. Let the body rotate slightly toward the hanging arm rather than fighting it rigidly. Test both arms and compare hold times to identify any meaningful side-to-side asymmetry.",
    equipment: "Bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  /* ── HUMAN FLAG FAMILY ────────────────────────────────────────
     Pure lateral compression isometric on a vertical bar — the
     body is held rigidly horizontal to the side of the support,
     resisted almost entirely through the obliques and lats.

     Tuck Flag → One-Leg Flag → Straddle Flag → Human Flag
  ──────────────────────────────────────────────────────────── */

  {
    id: 9073, // TODO: assign real id from registry
    name: "Tuck Flag",
    alt: "Flag tuck · bent-knee side lever on a vertical bar",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:false}
    ],
    tags: ["obliques", "lats", "shoulders"],
    diff: 5.8,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:2, si:1, hip:1, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 3,
    kcalPerRep: [1.8, 3.3],
    desc: "The entry point of the human flag progression — gripping a vertical bar with a top hand pulling and a bottom hand pushing, knees tucked tightly to the chest to shorten the lever the obliques have to control. Even in this short-lever form the flag is a demanding lateral compression hold: the top arm works in a pull-up-like pattern while the bottom arm works in a dip-like pattern simultaneously, and the whole line has to stay perpendicular to the bar rather than sagging toward the floor.",
    cues: "Grip the bar with the top hand in a pull-up-style grip and the bottom hand in a support-style grip, roughly shoulder-width apart on the bar. Pull with the top arm and press with the bottom arm at the same time to lift the hips level with the shoulders. Keep the knees tucked tight — a longer tuck immediately increases the lever the obliques must control.",
    equipment: "Bar",
    position: "Lateral",
    youtube: "LINK_TODO"
  },

  {
    id: 9074, // TODO: assign real id from registry
    name: "One-Leg Flag",
    alt: "Advanced tuck flag · single-leg extension flag",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:false}
    ],
    tags: ["obliques", "lats", "shoulders"],
    diff: 7.0,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.3, 4.1],
    desc: "The standard bridging step between the tuck flag and the straddle — one leg extends fully while the other stays tucked, lengthening the lever asymmetrically and revealing any left-right strength imbalance immediately. Often called the advanced tuck flag. The extended leg has to stay level with the torso rather than drooping, which demands considerably more sustained oblique output than the fully tucked version.",
    cues: "Extend one leg fully in line with the torso while keeping the other knee tucked in tight as a counterbalance. Alternate which leg is extended across sets to build both sides evenly. If the hips sag toward the floor, the extended leg is too heavy a lever for current strength — spend more time in the tuck flag first.",
    equipment: "Bar",
    position: "Lateral",
    youtube: "LINK_TODO"
  },

  {
    id: 9075, // TODO: assign real id from registry
    name: "Straddle Flag",
    alt: "Straddle flag · wide-leg side lever on a vertical bar",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:false}
    ],
    tags: ["obliques", "lats", "shoulders"],
    diff: 8.1,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:2, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.9, 5.2],
    desc: "A human flag with both legs spread wide into a straddle rather than one leg extended — spreading the legs actually reduces the effective lever slightly compared to bringing them together, which is why many practitioners find a wide straddle flag achievable before a narrow or fully together-leg version. Still an elite-level compression hold: the entire body weight is resisted laterally through one arm pulling and one arm pushing against a smooth bar.",
    cues: "Spread the legs wide immediately after establishing the top-pull, bottom-push grip pattern — a wide straddle is more forgiving on the obliques than people expect. Keep the whole body rigid and perpendicular to the bar rather than letting the hips lead or lag. Narrow the straddle only once the wide version is genuinely comfortable for several seconds.",
    equipment: "Bar",
    position: "Lateral",
    youtube: "LINK_TODO"
  },

  {
    id: 9076, // TODO: assign real id from registry
    name: "Human Flag",
    alt: "Full flag · straight-body side lever on a vertical bar",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:false},
      {n:"Forearms", p:false}
    ],
    tags: ["obliques", "lats", "shoulders"],
    diff: 9.2,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:4, lowerBack:5, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [3.5, 6.3],
    desc: "The complete human flag — legs together and fully extended, the entire body held perfectly horizontal and rigid to the side of a vertical bar, resisted purely through one arm pulling and one arm pushing. One of the most visually striking and widely recognized calisthenics skills, and one of the hardest: it demands elite oblique and lat strength simultaneously with the shoulder stability to keep the whole line dead straight rather than sagging at the hips.",
    cues: "A confident straddle flag held for several seconds is the realistic prerequisite before bringing the legs together. Keep the legs pressed tightly together and pointed, since any separation acts as a small stabilizer that's removed in the full version. The top arm pulls, the bottom arm pushes, and the entire torso stays rigid — think of the body as one solid beam rather than a collection of separately balanced parts.",
    equipment: "Bar",
    position: "Lateral",
    youtube: "LINK_TODO"
  },

  /* ── SUPPORT HOLD FAMILY ──────────────────────────────────────
     Straight-arm support isometric — the body is held above the
     hands with locked elbows and depressed shoulders, no leg
     lift or lever involved. Foundational for dips, muscle-ups,
     and all L-sit / planche-family progressions.
  ──────────────────────────────────────────────────────────── */

  {
    id: 9077, // TODO: assign real id from registry
    name: "Support Hold (Dip Bars)",
    alt: "Straight-arm support · top-of-dip hold on parallel bars",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Chest", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "shoulders", "chest"],
    diff: 1.8,
    str: {suit:true, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.5, 1.0],
    desc: "The straight-arm support position at the top of a dip — elbows locked, shoulders actively depressed, body held rigid above the bars with no leg lift or lever involved. The foundational hold that every dip, muscle-up, and most L-sit and planche progressions build from; before training the descent or the leg-raise component of any of those skills, being able to simply hold this locked-out top position for time is the first checkpoint.",
    cues: "Lock the elbows fully and actively pull the shoulders down away from the ears rather than letting them shrug up — this single cue is what separates a genuine support hold from just standing on locked arms. Keep the core braced and the legs still. Most people can hold this immediately; the value is in extending duration and building the habit of active shoulder depression.",
    equipment: "Dip Bars",
    position: "Support",
    youtube: "LINK_TODO"
  },

  {
    id: 9078, // TODO: assign real id from registry
    name: "Support Hold (Parallettes)",
    alt: "Straight-arm support · locked-out parallette support hold",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Chest", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "shoulders", "chest"],
    diff: 2.0,
    str: {suit:true, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 1,
    joints: {fingers:2, wrist:1, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:1, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.5, 1.0],
    desc: "A straight-arm support hold on parallettes — the lower height compared to full-size dip bars brings the feet closer to the floor, which is why this is often the version beginners start with before progressing to elevated bars. Shares the same locked-elbow, depressed-shoulder mechanics as the dip-bar version and serves the same foundational role for L-sit and planche-family progressions where parallettes are the primary training tool.",
    cues: "Lock the elbows and depress the shoulders exactly as in the dip-bar version. Because the parallettes sit low, the knees may need to bend slightly to keep the feet clear of the floor — this doesn't reduce the training value of the hold. Progress toward dip bars once this feels effortless for 30+ seconds.",
    equipment: "Parallettes",
    position: "Support",
    youtube: "LINK_TODO"
  },

  {
    id: 9079, // TODO: assign real id from registry
    name: "Support Hold (Rings)",
    alt: "Ring support · straight-arm ring support hold",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Chest", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "shoulders", "chest"],
    diff: 3.5,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.8, 1.6],
    desc: "A straight-arm support hold on freely-hanging gymnastics rings — the same locked-elbow, depressed-shoulder position as on parallettes or dip bars, but the rings want to rotate outward and swing the instant weight is loaded onto them, so the shoulders and wrists have to actively resist rotation throughout the hold. The direct foundation for ring dips, the iron cross, and every other ring strength skill; gymnasts drill this position extensively before any dynamic ring work.",
    cues: "Turn the rings out slightly as the arms lock — this is called turning out and it's what allows the shoulder to sit in a stable position rather than being twisted by the rings' natural rotation. Depress the shoulders hard and keep the rings from swinging. Expect this to feel considerably less stable than the equivalent hold on a fixed bar at first.",
    equipment: "Rings",
    position: "Support",
    youtube: "LINK_TODO"
  },

  /* ── IRON CROSS ───────────────────────────────────────────────
     A dedicated ring-strength isometric — arms extended
     horizontally to the sides while the body hangs vertically
     below. Distinct from the planche and front lever families:
     the torso is vertical, not horizontal, and the load path
     works through horizontal shoulder abduction rather than
     scapular protraction or depression.
  ──────────────────────────────────────────────────────────── */

  {
    id: 9080, // TODO: assign real id from registry
    name: "Iron Cross (Rings)",
    alt: "Ring cross · straight-arm cross hold on gymnastics rings",
    muscles: [
      {n:"Chest", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Biceps", p:false},
      {n:"Forearms", p:false}
    ],
    tags: ["chest", "lats", "shoulders"],
    diff: 9.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:3, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:2, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [4.0, 7.0],
    desc: "One of the most iconic and difficult static holds in all of gymnastics-derived calisthenics — arms locked straight and extended horizontally out to the sides while the body hangs vertically below, resisted almost entirely through the chest and lats fighting horizontal shoulder abduction under full bodyweight. Unlike the front lever or planche families, the torso stays vertical throughout; the demand here is a single enormous adduction force at the shoulder joint rather than a lever-arm balance problem. Genuinely achieved by only a small fraction of dedicated ring specialists after years of straps, band-assisted, and support-hold progressions.",
    cues: "This is an elite terminal skill, not something approached directly — years of ring support holds, band-assisted cross work, and cross-pull strength training on straps normally precede a first bodyweight attempt. Keep the elbows locked completely straight throughout; a bent elbow converts the hold into a much easier and structurally different shape. Turn the rings out and depress the shoulders as the arms lower to the sides. Any sharp elbow or shoulder pain means the assisted progression needs more time before attempting bodyweight.",
    equipment: "Rings",
    position: "Support",
    youtube: "LINK_TODO"
  },

  /* ── ELBOW LEVER FAMILY (CONT.) — PARALLETTES GRIP VARIANTS ──
     The same reverse-grip and fingertip variations that exist
     on the floor, carried over to parallettes.
  ──────────────────────────────────────────────────────────── */

  {
    id: 9081, // TODO: assign real id from registry
    name: "EL | Reverse Grip (Parallettes)",
    alt: "Reverse grip elbow lever parallettes · backward-hand elevated balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Wrist Extensors", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 4.6,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 2,
    kcalPerRep: [1, 2],
    desc: "An elbow lever on parallettes gripped with the fingers pointing backward — the parallette handle shape changes the wrist angle slightly compared to a flat floor grip, but the underlying demand is identical: significant wrist extension tolerance combined with the standard elbow lever balance mechanics. Some practitioners find the rounded parallette grip marginally more comfortable in this orientation than the flat floor, since the hand can wrap the bar rather than pressing flat against the ground.",
    cues: "Assess wrist extension range before loading this grip. Wrap the fingers backward around the parallette handle and press the elbow into the hip-flexor shelf as usual. Build tolerance gradually — this grip stresses the wrist differently than any other elbow lever variant.",
    equipment: "Parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9082, // TODO: assign real id from registry
    name: "EL | Fingertip (Parallettes)",
    alt: "Fingertip elbow lever parallettes · open-hand elevated balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 5.4,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 3,
    kcalPerRep: [1.2, 2.2],
    desc: "An elbow lever on parallettes performed gripping only the fingertip edge of the handle — the rounded parallette bar gives a slightly different fingertip contact than the flat floor, curling around the edge rather than pressing flat, but the tendon and pulley demand is the same. Trains the same fingertip strength and wrist stability relevant to fingertip planche work while conditioning the elbow lever balance skill on an elevated surface.",
    cues: "Build fingertip hang and fingertip push-up tolerance before attempting this. Curl the fingertips over the parallette edge rather than clenching hard. Begin with a straddle leg position to reduce total load per session, and stop immediately at any sharp finger-joint pain.",
    equipment: "Parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  /* ── DEAD HANG FAMILY (CONT.) — ADDITIONAL VARIANTS ──────────
     Load and grip-pattern variants that extend the base
     dead-hang family without changing its fundamental shape.
  ──────────────────────────────────────────────────────────── */

  {
    id: 9085, // TODO: assign real id from registry
    name: "Weighted Dead Hang (Bar)",
    alt: "Loaded dead hang · dead hang with added external load",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["forearms", "grip", "lats"],
    diff: 3.6,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:3, wrist:2, elbow:1, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.9, 1.8],
    desc: "A dead hang with additional external load added via a dip belt, weighted vest, or held dumbbell between the feet — the same active-hang mechanics as the bodyweight version, but with a measurable, progressively increasable resistance. The standard method for continuing to progress grip and hang endurance once bodyweight hangs are no longer challenging, and a direct strength carryover to weighted pull-ups.",
    cues: "Attach load via a dip belt for the cleanest hang mechanics — held dumbbells between the feet work but add a minor stabilization demand. Keep the shoulders actively depressed rather than passive once weight is added, since a passive weighted hang places excessive strain on the joint capsule. Increase load in small increments as hang duration improves.",
    equipment: "Bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 9086, // TODO: assign real id from registry
    name: "Flexed-Arm Hang (Bar)",
    alt: "Bent-arm hang · chin-over-bar isometric hold",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Forearms", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["lats", "biceps", "forearms"],
    diff: 5.0,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:3, neck:0, thoracic:1, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 3,
    kcalPerRep: [1.4, 2.6],
    desc: "The classic flexed-arm hang — chin held above the bar with the elbows bent, rather than the arms straight as in a standard dead hang. A well-known fitness-test staple, and considerably harder than a dead hang since bodyweight has to be pulled and held at the top of a pull-up rather than simply suspended. Trains the isometric strength of the top pulling position directly, which carries over to pull-up lockout strength and negative pull-up control.",
    cues: "Pull into the top position with a jump or a full pull-up, then hold with the chin above the bar and elbows bent to roughly a right angle. Keep the shoulders actively depressed rather than shrugged. This position fatigues quickly — expect much shorter hold times than a straight-arm dead hang.",
    equipment: "Bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 9087, // TODO: assign real id from registry
    name: "Rope Dead Hang (Rope)",
    alt: "Climbing rope hang · thick-rope grip hang",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["forearms", "grip"],
    diff: 3.0,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:3, wrist:2, elbow:1, shoulder:2, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.6, 1.3],
    desc: "A dead hang from a hanging climbing rope rather than a fixed bar — the round, compressible surface of the rope forces a full crush grip rather than a hooked-finger grip around a rigid diameter, and the rope's slight give and sway add a small ongoing stabilization demand. A staple grip-conditioning exercise for climbers and anyone training toward rope climbs.",
    cues: "Grip the rope with a full crush rather than letting it rest in an open hand. Some sway is normal and doesn't need to be actively fought. Wrapping the rope once around the wrist reduces grip demand and should be avoided if the goal is pure grip conditioning.",
    equipment: "Rope",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  /* ── HUMAN FLAG FAMILY (CONT.) — GRIP VARIANT ────────────────
     A grip-orientation variant of the full flag, changing the
     muscular emphasis of the top pulling arm.
  ──────────────────────────────────────────────────────────── */

  {
    id: 9088, // TODO: assign real id from registry
    name: "Human Flag | Reverse Grip",
    alt: "Reverse grip flag · underhand top-arm human flag",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:false}
    ],
    tags: ["obliques", "lats", "biceps", "shoulders"],
    diff: 9.4,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:4, lowerBack:5, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [3.7, 6.6],
    desc: "The full human flag performed with the top hand in an underhand (reverse) grip instead of the standard overhand pull-up grip — this shifts a meaningful portion of the top arm's pulling demand onto the biceps and changes the shoulder mechanics of the pull. Most flag specialists find one grip orientation noticeably harder than the other, and training both is common practice for well-rounded lateral pulling strength.",
    cues: "Only attempt this once the standard-grip human flag is confidently held, since the shoulder mechanics of the underhand top grip differ enough to require its own adaptation period. Keep the legs together and pointed exactly as in the standard flag. Expect one grip orientation to feel meaningfully harder than the other — this asymmetry is normal and worth tracking.",
    equipment: "Bar",
    position: "Lateral",
    youtube: "LINK_TODO"
  },

  /* ── SUPPORT HOLD FAMILY (CONT.) — ADVANCED VARIANTS ─────────
     Unilateral and single-leg extensions of the base support
     hold, bridging toward one-arm planche and ring-scale work.
  ──────────────────────────────────────────────────────────── */

  {
    id: 9089, // TODO: assign real id from registry
    name: "One-Arm Support Hold (Parallettes)",
    alt: "Single-arm support · one-arm locked-out parallette hold",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "shoulders", "obliques"],
    diff: 7.4,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:4, elbow:4, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.2, 4.0],
    desc: "A straight-arm support hold on a single parallette — the entire bodyweight balanced through one locked elbow and depressed shoulder while the free arm hangs or reaches for balance. A recognized bridge skill between two-arm support work and the one-arm planche and one-arm handstand press progressions, since it isolates the pure pressing lockout strength and lateral stability without any additional lever or leg-raise component.",
    cues: "Build significant two-arm support hold duration and comfortable one-arm-shifted support (weight heavily favoring one side while both hands stay down) before removing the second hand entirely. The free arm can lightly touch the thigh initially for balance reference. Brace the obliques hard against the tilt toward the free side.",
    equipment: "Parallettes",
    position: "Support",
    youtube: "LINK_TODO"
  },

  {
    id: 9090, // TODO: assign real id from registry
    name: "One-Arm Support Hold (Rings)",
    alt: "Single-arm ring support · one-arm locked-out ring hold",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "shoulders", "obliques"],
    diff: 8.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [2.8, 5.0],
    desc: "A straight-arm support hold on a single freely-rotating ring — considerably harder than the parallette version because the single ring wants to spin and swing under unilateral load with no fixed reference at all. One of the more advanced unilateral ring strength holds, sitting alongside the one-arm elbow lever variants as a specialist skill trained primarily by gymnasts and ring-focused calisthenics athletes.",
    cues: "A confident one-arm parallette support hold and a solid two-arm ring support are the realistic prerequisites here. Turn the single ring in hard before committing weight. Brace the obliques and expect the ring to want to rotate the instant the load goes fully unilateral — small, quick corrections are more effective than large ones.",
    equipment: "Rings",
    position: "Support",
    youtube: "LINK_TODO"
  },

  {
    id: 9091, // TODO: assign real id from registry
    name: "Support Scale (Rings)",
    alt: "Ring scale · single-leg raised support hold",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "shoulders", "hip flexors"],
    diff: 4.3,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:1, lowerBack:1, si:0, hip:3, groin:1, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [1.0, 2.0],
    desc: "A support hold on rings with one leg raised to horizontal, either to the front or the side — a classic gymnastics element that adds a hip flexor and single-leg stability demand on top of the standard straight-arm support. Because only one leg's weight shifts, it's considerably more approachable than the full L-sit family while still building genuine hip flexor strength and ring control in a supported position.",
    cues: "Establish a solid two-arm ring support hold first. Raise one leg to horizontal — front for hip flexor emphasis, side for adductor and hip mobility emphasis — while keeping the arms locked and shoulders depressed. Keep the rings still; the leg raise shouldn't cause the rings to swing. Switch legs across sets.",
    equipment: "Rings",
    position: "Support",
    youtube: "LINK_TODO"
  },

  /* ── L-SIT FAMILY (CONT.) — ONE-ARM EXTENSIONS ───────────────
     Extending the one-arm bridging steps beyond parallettes to
     the other standard L-sit surfaces.
  ──────────────────────────────────────────────────────────── */

  {
    id: 9092, // TODO: assign real id from registry
    name: "One-Arm Tuck L-sit | (Dip Bars)",
    alt: "One-arm tuck L-sit dip bars · single-arm bent-knee compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:true},
      {n:"Obliques", p:true},
      {n:"Shoulders", p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "obliques", "shoulders"],
    diff: 6.3,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:2, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.0, 3.7],
    desc: "A tuck L-sit on a single arm using dip bars — mechanically the same bridging skill as the parallette version, but the wider standard dip-bar spacing changes the hand position relative to the hips slightly and can make the lateral tilt marginally easier or harder to control depending on individual proportions. A reasonable alternative entry point for anyone whose gym has dip bars but no parallettes.",
    cues: "Build a solid two-arm dip-bar L-sit and comfortable one-arm weight-shifting before removing the second hand. Keep the knees tucked tight and brace the obliques hard against the tilt. The free arm can rest lightly on the bar or the thigh early in training.",
    equipment: "Dip Bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9093, // TODO: assign real id from registry
    name: "One-Arm L-sit | (Dip Bars)",
    alt: "One-arm L-sit dip bars · single-arm straight-leg compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:true},
      {n:"Obliques", p:true},
      {n:"Shoulders", p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "obliques", "shoulders"],
    diff: 8.3,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [2.9, 5.3],
    desc: "A full L-sit on a single arm using dip bars — both legs extended at hip height, supported entirely through one arm on the wider standard bar spacing. Shares the same extreme unilateral pressing, oblique, and hip flexor demands as the parallette version; the main practical difference is bar spacing, which some practitioners find changes the leverage on the supporting shoulder slightly.",
    cues: "A confident one-arm tuck L-sit and a strong two-arm dip-bar L-sit are required first. Lock the supporting arm fully and depress the shoulder maximally. Drive both legs to hip height and brace the obliques against the full lateral tilt of bodyweight on one side.",
    equipment: "Dip Bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9094, // TODO: assign real id from registry
    name: "One-Arm Tuck L-sit | (Rings)",
    alt: "One-arm tuck L-sit rings · single-arm bent-knee ring compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:true},
      {n:"Obliques", p:true},
      {n:"Shoulders", p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "obliques", "shoulders"],
    diff: 7.8,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:2, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.5, 4.5],
    desc: "A tuck L-sit on a single freely-rotating ring — the short lever of the tucked knees keeps the core and hip flexor demand manageable, but the single ring rotates and swings under unilateral load in a way that neither the parallette nor dip-bar version has to contend with. A genuinely rare specialist skill combining one-arm compression strength with single-ring control.",
    cues: "A solid two-arm ring L-sit and a confident one-arm tuck L-sit on parallettes are the realistic prerequisites. Turn the single ring in before loading it. Keep the knees tucked tight and expect the ring to want to rotate the moment weight goes fully unilateral.",
    equipment: "Rings",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9095, // TODO: assign real id from registry
    name: "One-Arm L-sit | (Rings)",
    alt: "One-arm L-sit rings · single-arm straight-leg ring compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:true},
      {n:"Obliques", p:true},
      {n:"Shoulders", p:true}
    ],
    tags: ["hip flexors", "core", "triceps", "obliques", "shoulders"],
    diff: 9.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:5, elbow:5, shoulder:5, neck:1, thoracic:4, lowerBack:5, si:2, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [3.5, 6.3],
    desc: "A full straight-leg L-sit on a single freely-rotating ring — arguably the hardest hold in the entire L-sit family. It combines the maximum unilateral pressing, oblique, and hip flexor output of the parallette one-arm L-sit with a support surface that offers no resistance to rotation at all. Achieved by only an extremely small number of elite ring specialists, typically as an incidental byproduct of years of combined one-arm strength and ring control training rather than a directly targeted goal.",
    cues: "This sits at the absolute top of the L-sit family — a genuinely confident one-arm L-sit on both parallettes and dip bars, plus solid one-arm ring support and tuck L-sit, should already be in place. Turn the ring in as far as possible before committing. Most practitioners are better served treating this as a long-term exploration rather than a near-term training goal.",
    equipment: "Rings",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 9096, // TODO: assign real id from registry
    name: "Manna | (Rings)",
    alt: "Ring manna · maximum compression hold on freely-hanging rings",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:true},
      {n:"Quads", p:false}
    ],
    tags: ["hip flexors", "shoulders", "core", "triceps"],
    diff: 9.9,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:5, elbow:5, shoulder:5, neck:1, thoracic:5, lowerBack:5, si:3, hip:5, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 5,
    strength: 5,
    kcalPerRep: [3.8, 6.8],
    desc: "The Manna performed on freely-hanging gymnastics rings rather than a fixed floor or parallette surface — the maximum expression of the seated compression family, now combined with a support that is free to rotate and swing under the extreme leaned-back load. Among the rarest static holds attempted in calisthenics; it requires the full flexibility, hip flexor, and compression prerequisites of the floor Manna plus the ring control of the most advanced ring L-sit and elbow lever work. Realistically approached only after the floor or parallette Manna is already well established.",
    cues: "The floor or parallette Manna should already be solid before this is attempted — the ring instability adds an entirely new failure mode on top of an already extreme position. Turn the rings in before loading the behind-hip hand position. Given the rarity of this hold, treat any progress here as exploratory rather than expecting a predictable timeline.",
    equipment: "Rings",
    position: "Seated",
    youtube: "LINK_TODO"
  },

];