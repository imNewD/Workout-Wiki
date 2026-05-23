/* Pantheon data
   Pantheon is reserved for beast-mode descendants of major Hall of Fame feats.
   Use `requires` to link each variant to prerequisite HoF or Pantheon keys.
   If a variant needs multiple prerequisites, set `requiresMode: 'all'`.

   Key reference (HoF):
     pushup-20   = Planche Push-Up          (equiv: isometric-9)
     pushup-34   = Straddle Planche Push-Up
     pushup-9    = One-Arm Push-Up
     pushup-23   = Fingertip Push-Up
     pushup-111  = 2-Finger Push-Up
     pushup-119  = 1-Finger Push-Up (bilateral)
     pushup-36   = Lalanne Push-Up Var.1
     pushup-37   = Lalanne Push-Up Var.2
     isometric-9  = Planche hold            (equiv: pushup-20)
     isometric-10 = Fingertip Planche hold
     isometric-15 = Front Lever
     isometric-64 = Maltese
     handstand-18 = Fingertip Handstand (freestanding)
     handstand-21 = One-Arm Wall HSPU
     pullup-20    = One-Arm Pull-Up
     pullup-78    = One-Arm Ring Pull-Up
     pullup-100   = Advanced pull-up prerequisite
     pullup-110   = One-Arm 3-Finger Pull-Up  (HoF + Pantheon, bar)
     pullup-111   = One-Arm 2-Finger Pull-Up  (HoF + Pantheon, bar)
     pullup-112   = One-Arm 1-Finger Pull-Up  (HoF + Pantheon, bar)

   Pantheon chain summary:
     PLANCHE FAMILY  ── THREE-GATE SYSTEM ──────────────────────────────
       GATE A  pushup-20  (Full Planche — hand)
         → all hand-based planche HOLDS (non-fingertip):
             One-Arm Tuck Planche (p-34) → One-Arm Planche (p-37)
             Full Planche on Rings (p-41)
             Reverse Planche (p-116)

       GATE B  pushup-34  (Straddle Planche Push-Up)
         → all PUSH-TYPE planches (non-fingertip):
             Straddle Planche Push-Up Ring (p-115)
             Reverse Planche Push-Up (p-91, also needs p-116)
             One-Arm Planche Push-Up (p-80, also needs p-37)
             Ring Planche Push-Up (p-96, also needs p-41 + p-115)

       GATE C  isometric-10  (Fingertip Planche Hold)
         → fingertip planche HOLDS only:
             One-Arm Fingertip Planche (p-39, also needs p-37)

       GATE A + B + C  (all three unlocked)
         → fingertip push-type planches:
             Fingertip Planche Push-Up (p-75)
             → 3-Finger (p-201) → 2-Finger (p-202) → 1-Finger (p-203)

     MALTESE FAMILY
       isometric-64 → Maltese Push-Up (p-71) → Victorian Cross (p-36, needs iso-64 too)
       isometric-64 → Maltese Dip (p-123)

     FINGERTIP PUSH-UP FAMILY (requires planche AND fingertip mastery)
       pushup-20 + pushup-23 → Fingertip OAP (p-101)
       p-101 → OAP 3-Finger (p-210) → OAP 2-Finger (p-211) → OAP 1-Finger (p-212)
       pushup-111 → 1-Finger Push-Up (p-77)
       pushup-111 + p-77 → 1-Finger OAP (p-213)

     LALANNE FAMILY
       pushup-36 + pushup-37 + pushup-111 → Lalanne 1-Finger (p-89)

     FRONT LEVER FAMILY
       isometric-15 → One-Arm Front Lever (p-119) → One-Arm FL 4-Fingers (p-124) → 3F (p-125) → 2F (p-126) → 1F (p-127)
       isometric-15 + frontlever-1004 → One-Arm Front Lever — Parallettes (p-330) → 4F (p-331) → 3F (p-332) → 2F (p-333) → 1F (p-334)
       isometric-15 + pullup-100 → Front Lever Pull-Up (p-118)
       pullup-77 + frontlever-1104 → One-Arm Front Lever Pull-Up — Parallettes (p-335) → 4F (p-336) → 3F (p-337) → 2F (p-338) → 1F (p-339)
       p-118 + p-119 → One-Arm Front Lever Pull-Up (p-120)
       pullup-104 (Full ICM, bar) → Ice Cream Maker on Rings (p-304)

     FINGERTIP HANDSTAND FAMILY
       handstand-18 → One-Arm Fingertip Handstand (p-121)
       p-121 + handstand-21 → One-Arm Fingertip HSPU (p-122)

     PULL-UP FAMILY
       ONE-ARM BAR FINGER CHAIN
         pullup-20 + pullup-68 (3F bilateral) → one-arm 3F bar (pullup-110, HoF+Pantheon in pullup-data)
         pullup-110 → one-arm 2F bar (pullup-111)  → one-arm 1F bar (pullup-112)

       ONE-ARM RING FINGER CHAIN
         pullup-78 + pullup-110 → OA 3-Finger Ring PU (p-301)
         p-301 + pullup-111    → OA 2-Finger Ring PU (p-302)
         p-302 + pullup-112    → OA 1-Finger Ring PU (p-303)
*/

const PANTHEON_EXERCISES = [

  /* ══════════════════════════════════════════════════════
     PLANCHE FAMILY
     Gate: pushup-20 (Planche Push-Up / isometric-9)
  ══════════════════════════════════════════════════════ */
  {
    id: 34,
    name: "One-Arm Tuck Planche",
    alt: "One-arm tuck hold · unilateral tuck planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Serratus", p:true},
      {n:"Obliques", p:true}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 9,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:5, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [4, 7],
    requires: ["pushup-20"],                                   // Gate A
    pantheonGroup: "Planche",
    pantheonSubgroup: "Unilateral",
    desc: "A tuck planche performed on a single arm. The shortened lever keeps it below the full one-arm straight-body version, but unilateral support creates extreme lateral and anti-rotation demand through the shoulder and trunk.",
    cues: "Gateway to one-arm planche work. Build heavy one-arm lean tolerance and keep the scapula fully protracted the entire time.",
    equipment: "Parallettes or floor", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 37,
    name: "One-Arm Planche",
    alt: "One-arm straight-body planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Serratus", p:true},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:3, wrist:5, elbow:2, shoulder:5, neck:1, thoracic:1, lowerBack:4, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5,
    kcalPerRep: [5, 8],
    requires: ["pantheon-34"],
    requiresMode: "all",
    pantheonGroup: "Planche",
    pantheonSubgroup: "Unilateral",
    desc: "The full straight-body one-arm planche. The entire horizontal lever is held on one arm with no reduction in body length and no second hand to absorb rotation.",
    cues: "Do not skip straight from full planche into this. The one-arm tuck should already feel stable before the legs are lengthened.",
    equipment: "Parallettes or floor", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 80,
    name: "One-Arm Planche Push-Up",
    alt: "Single-arm planche press",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:4, shoulder:4, neck:1, lowerBack:4, knee:0, fingers:0, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.49, 0.88],
    requires: ["pushup-34", "pantheon-37"],                    // Gate B + chain
    requiresMode: "all",
    pantheonGroup: "Planche",
    pantheonSubgroup: "Unilateral",
    desc: "A full planche push-up on one arm. Requires ownership of both the static one-arm planche and the bilateral planche press — no second hand to catch drift or rotation.",
    cues: "Both the Planche Push-Up HoF and the One-Arm Planche must already be real before this is attempted.",
    equipment: "Parallettes", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 41,
    name: "Full Planche on Rings",
    alt: "Ring planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Serratus", p:true},
      {n:"Chest", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:1, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [6, 10],
    requires: ["pushup-20"],                                   // Gate A
    pantheonGroup: "Planche",
    pantheonSubgroup: "Ring Pressure",
    desc: "A full planche on gymnastic rings. The body stays fully horizontal while the rings try to drift in every direction, turning a max fixed-surface feat into a three-dimensional stability problem.",
    cues: "A true full planche must already exist before rings enter the picture.",
    equipment: "Gymnastic rings", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 305,
    name: "Full Planche Dip",
    alt: "Planche dip · planche press",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:5, elbow:5, shoulder:5, neck:0, thoracic:1, lowerBack:3, si:1, hip:4, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5,
    kcalPerRep: [0.44, 0.79],
    requires: ["dip-41"],
    pantheonGroup: "Planche",
    pantheonSubgroup: "Dip",
    desc: "A dip performed while maintaining a full planche — legs fully extended together, body perfectly horizontal, supported only on the hands. The longest possible body lever in a horizontal pressing position makes this the pinnacle of planche dip progression.",
    cues: "The full planche static hold must be stable for multiple seconds before any pressing motion can be introduced. Even a fraction of a rep from full planche constitutes an extraordinary strength achievement.",
    equipment: "Parallettes / parallel bars", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 115,
    name: "Straddle Planche Push-Up — Ring",
    alt: "Ring straddle planche push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 9.9,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:3, shoulder:5, neck:1, lowerBack:3, knee:0, fingers:0, thoracic:2, si:2, hip:3, groin:2, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.46, 0.82],
    requires: ["pushup-34"],                                   // Gate B
    requiresMode: "all",
    pantheonGroup: "Planche",
    pantheonSubgroup: "Ring Pressure",
    desc: "A straddle planche push-up on rings. Natural ring bridge before the full ring planche push-up.",
    cues: "Floor straddle planche push-up and serious ring pseudo-planche control must both exist first.",
    equipment: "Gymnastic rings", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 96,
    name: "Ring Planche Push-Up",
    alt: "Full planche push-up on rings",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:3, shoulder:4, neck:1, lowerBack:3, knee:0, fingers:0, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.44, 0.79],
    requires: ["pushup-34", "pantheon-41", "pantheon-115"],    // Gate B + chain
    requiresMode: "all",
    pantheonGroup: "Planche",
    pantheonSubgroup: "Ring Pressure",
    desc: "The full planche push-up on rings — the ring-loaded dynamic summit of the planche family. Requires both the static ring planche and the ring straddle pressing bridge.",
    cues: "The ring planche and ring straddle press should already be real before this enters the conversation.",
    equipment: "Gymnastic rings", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 116,
    name: "Reverse Planche",
    alt: "Back-facing planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Back", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:false}
    ],
    tags: ["shoulders", "back", "core"],
    diff: 9,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:1, wrist:3, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:4, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5,
    kcalPerRep: [5, 9],
    requires: ["pushup-20"],                                   // Gate A
    pantheonGroup: "Planche",
    pantheonSubgroup: "Reverse Pressure",
    desc: "A reverse-facing horizontal support. Not just a novelty angle — a different stress profile with harsher posterior shoulder demand.",
    cues: "Serious wrist preparation and posterior shoulder capacity are mandatory before approaching this.",
    equipment: "Parallettes", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 91,
    name: "Reverse Planche Push-Up",
    alt: "Back-facing reverse planche press",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Back", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:false}
    ],
    tags: ["shoulders", "back", "core"],
    diff: 9.8,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:4, shoulder:4, neck:1, lowerBack:4, knee:0, fingers:0, thoracic:3, si:2, hip:3, groin:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.44, 0.79],
    requires: ["pushup-34", "pantheon-116"],                   // Gate B + chain
    requiresMode: "all",
    pantheonGroup: "Planche",
    pantheonSubgroup: "Reverse Pressure",
    desc: "A dynamic press from the reverse planche structure. Keeping the reverse-facing horizontal shape under load makes this more than a mobility flex.",
    cues: "The static reverse planche must already be solid. Respect the wrists and posterior capsule first.",
    equipment: "Parallettes", position: "Elevated", youtube: "LINK_TODO"
  },

  /* ══════════════════════════════════════════════════════
     FINGERTIP PLANCHE FAMILY
     Gate: pushup-20 + isometric-10 (fingertip planche hold)
  ══════════════════════════════════════════════════════ */
  {
    id: 75,
    name: "Fingertip Planche Push-Up",
    alt: "Finger planche push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:3, shoulder:4, neck:1, lowerBack:3, knee:0, fingers:5, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.44, 0.79],
    requires: ["pushup-20", "pushup-34", "isometric-10"],      // Gate A + B + C
    requiresMode: "all",
    pantheonGroup: "Fingertip Planche",
    pantheonSubgroup: "Dynamic",
    desc: "A planche push-up on the fingertips. Stacks a Hall of Fame fingertip planche hold and a Hall of Fame planche press into one movement.",
    cues: "Both the full planche push-up and the fingertip planche hold must already be genuine before they are fused.",
    equipment: "Floor or low parallettes", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 201,
    name: "3-Finger Planche Push-Up",
    alt: "Three-finger planche push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:3, shoulder:5, neck:1, lowerBack:4, knee:0, fingers:5, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.46, 0.83],
    requires: ["pantheon-75"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Planche",
    pantheonSubgroup: "Finger Reduction",
    desc: "Fingertip planche push-up reduced to three fingers per hand. Pinky removed, full planche lever intact. Same beast, narrower base.",
    cues: "Fingertip planche push-up must be owned first. Build static 3-finger planche holds before adding pressing range.",
    equipment: "Parallettes (mandatory)", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 202,
    name: "2-Finger Planche Push-Up",
    alt: "Two-finger planche push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:3, shoulder:5, neck:1, lowerBack:4, knee:0, fingers:5, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.49, 0.88],
    requires: ["pantheon-201"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Planche",
    pantheonSubgroup: "Finger Reduction",
    desc: "Full planche lever on two fingers per hand. Every rep drives the full bodyweight through four finger joints. Tendon adaptation is the only path.",
    cues: "3-finger planche push-up must be fully established first. Static 2-finger planche holds precede any pressing.",
    equipment: "Parallettes (mandatory)", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 203,
    name: "1-Finger Planche Push-Up",
    alt: "One-finger planche push-up · single-finger planche press",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:3, shoulder:5, neck:1, lowerBack:4, knee:0, fingers:5, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.52, 0.93],
    requires: ["pantheon-202"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Planche",
    pantheonSubgroup: "Finger Reduction",
    desc: "Theoretical ceiling of the finger-planche line: one index finger per hand bearing the full horizontal planche lever. No verified performances known. Documents the outer boundary of human connective tissue under load.",
    cues: "The 2-finger planche push-up must be fully established. This entry exists to document the possible, not as a training target.",
    equipment: "Parallettes (mandatory)", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 76,
    name: "2-Finger Planche Push-Up (old)",
    alt: "Two-finger planche push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:3, shoulder:4, neck:1, lowerBack:3, knee:0, fingers:5, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.46, 0.82],
    listed: false,
    requires: ["pantheon-75"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Planche",
    pantheonSubgroup: "Finger Reduction",
    desc: "Superseded by pantheon-202. Hidden.",
    cues: "",
    equipment: "Floor or low parallettes", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 39,
    name: "One-Arm Fingertip Planche",
    alt: "Single-arm fingertip planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Serratus", p:true},
      {n:"Core", p:true}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [7, 12],
    requires: ["isometric-10", "pantheon-37"],                 // Gate C + chain
    requiresMode: "all",
    pantheonGroup: "Fingertip Planche",
    pantheonSubgroup: "Fusion",
    desc: "One-arm planche control and fingertip planche pressure merged. The fusion of two independent monsters.",
    cues: "Both the One-Arm Planche and the Fingertip Planche Push-Up chain must be real. Neither can be missing.",
    equipment: "Floor or low parallettes", position: "Prone", youtube: "LINK_TODO"
  },

  /* ══════════════════════════════════════════════════════
     MALTESE FAMILY
     Gate: isometric-64 (Maltese hold)
  ══════════════════════════════════════════════════════ */
  {
    id: 71,
    name: "Maltese Push-Up",
    alt: "Maltese cross push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 9.8,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:3, shoulder:4, neck:1, lowerBack:3, knee:0, fingers:0, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.46, 0.82],
    requires: ["isometric-64"],
    requiresMode: "all",
    pantheonGroup: "Maltese",
    pantheonSubgroup: "Dynamic",
    desc: "The dynamic pressing expression of the Maltese line. Wider, uglier, and more punishing than a planche push-up.",
    cues: "The Maltese hold should already be credible. This is not a side-grade planche push-up.",
    equipment: "Parallettes or gymnastic rings", position: "Elevated", youtube: "LINK_TODO"
  },
  {
    id: 123,
    name: "Maltese Dip",
    alt: "Maltese cross dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core", "back"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:0, thoracic:1, lowerBack:3, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.43, 0.77],
    requires: ["isometric-64"],
    requiresMode: "all",
    pantheonGroup: "Maltese",
    pantheonSubgroup: "Dynamic",
    desc: "A dip while maintaining a Maltese cross position. Rings or parallettes are mandatory; long-term elbow preparation is not optional.",
    cues: "The full Maltese hold must be honest before any dip range is added.",
    equipment: "Gymnastic rings / parallettes", position: "Vertical · Arms Supporting", youtube: "LINK_TODO"
  },
  {
    id: 36,
    name: "Victorian Cross",
    alt: "Victorian cross on rings",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Lats", p:true},
      {n:"Core", p:true}
    ],
    tags: ["shoulders", "back", "core"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:1, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:3, lowerBack:3, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5,
    kcalPerRep: [6, 10],
    requires: ["isometric-64", "pantheon-71"],
    requiresMode: "all",
    pantheonGroup: "Maltese",
    pantheonSubgroup: "Cross Pressure",
    desc: "The apex of the Maltese-dominant ring family. Demands both the static width and the pressing ownership of the line beneath it.",
    cues: "Serious Maltese ownership first. Ring strength, shoulder extension, and elbow integrity all need to be elite together.",
    equipment: "Gymnastic rings", position: "Prone", youtube: "LINK_TODO"
  },

  /* ══════════════════════════════════════════════════════
     FINGERTIP PUSH-UP FAMILY
     Gate: pushup-20 (planche) + pushup-23 (fingertip push-up)
     OAP finger chain: pushup-9 + pushup-23 → Fingertip OAP → 3F → 2F → 1F
     Bilateral: pushup-111 → 1-Finger → 1-Finger OAP
  ══════════════════════════════════════════════════════ */
  {
    id: 101,
    name: "Fingertip OAP",
    alt: "One-arm fingertip push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 9.6,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:5, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.37, 0.66],
    requires: ["pushup-9", "pushup-23"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Push-Up",
    pantheonSubgroup: "Unilateral",
    desc: "One-arm push-up on the fingertips. Requires both the OAP and the fingertip push-up to be fully established — not one or the other.",
    cues: "If either base is still being built, the fusion is too early.",
    equipment: "Floor", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 210,
    name: "OAP 3-Finger Push-Up",
    alt: "One-arm three-finger push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 9.8,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:5, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.38, 0.68],
    requires: ["pantheon-101"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Push-Up",
    pantheonSubgroup: "Unilateral",
    desc: "Fingertip OAP with the pinky raised — three fingers bearing full unilateral bodyweight. One step deeper into the one-arm finger reduction chain.",
    cues: "Fingertip OAP must be owned fully. Never train to failure — tendon recovery at this load is slow.",
    equipment: "Floor", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 211,
    name: "OAP 2-Finger Push-Up",
    alt: "One-arm two-finger push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 9.9,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:5, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.41, 0.74],
    requires: ["pantheon-210"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Push-Up",
    pantheonSubgroup: "Unilateral",
    desc: "One-arm push-up on two fingers — index and middle only. Full bodyweight presses through two finger joints on a single hand. Among the rarest unilateral feats documented.",
    cues: "OAP 3-finger must be fully mastered. Static two-finger one-arm holds precede any pressing range.",
    equipment: "Floor", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 212,
    name: "OAP 1-Finger Push-Up",
    alt: "One-arm one-finger push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:5, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.44, 0.79],
    requires: ["pantheon-211"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Push-Up",
    pantheonSubgroup: "Unilateral",
    desc: "One-arm push-up on a single index finger. Full bodyweight plus rotational OAP demand loads through one distal phalanx. A handful of verified performances exist in recorded history.",
    cues: "No safe fast path. Every prior stage must be exhaustively established. Documents the boundary of the possible.",
    equipment: "Floor", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 77,
    name: "1-Finger Push-Up",
    alt: "Single-finger push-up (bilateral)",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Shoulders", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:3, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:5, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.35, 0.63],
    requires: ["pushup-111"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Push-Up",
    pantheonSubgroup: "Bilateral",
    desc: "The terminal step of the bilateral finger-reduction progression. One finger per hand bears the entire load for that side. Static one-finger holds must be deeply established before any pressing range.",
    cues: "2-Finger Push-Up must be completely mastered. Build static holds at an incline first and work toward flat over months.",
    equipment: "Floor", position: "Prone", youtube: "LINK_TODO"
  },
  {
    id: 213,
    name: "1-Finger OAP",
    alt: "One-arm one-finger push-up (from bilateral base)",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:5, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.44, 0.79],
    requires: ["pantheon-77", "pantheon-212"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Push-Up",
    pantheonSubgroup: "Bilateral",
    desc: "The absolute pinnacle of the finger push-up family: bilateral 1-finger mastery and OAP 1-finger mastery both required to fuse here. No safe route, no shortcut.",
    cues: "Both the bilateral 1-finger push-up and OAP 1-finger must be established independently before any attempt to combine them.",
    equipment: "Floor", position: "Prone", youtube: "LINK_TODO"
  },

  /* ══════════════════════════════════════════════════════
     LALANNE FAMILY
     Gate: pushup-36 + pushup-37 + pushup-111
  ══════════════════════════════════════════════════════ */
  {
    id: 89,
    name: "Lalanne 1-Finger Push-Up",
    alt: "One-finger Lalanne",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 9.7,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:2, shoulder:1, neck:1, lowerBack:1, knee:1, fingers:5, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 5, mobility: 2, strength: 4,
    kcalPerRep: [0.35, 0.63],
    requires: ["pushup-36", "pushup-37", "pushup-111"],
    requiresMode: "all",
    pantheonGroup: "Lalanne Push-Up",
    pantheonSubgroup: "Finger Pressure",
    desc: "A one-finger-per-hand Lalanne push-up. Classic Lalanne shape taken to its savage extreme — Lalanne turned monster.",
    cues: "Sits on top of both Lalanne variants and two-finger pressing tolerance together. The family identity matters here.",
    equipment: "Floor", position: "Prone", youtube: "LINK_TODO"
  },

  /* ══════════════════════════════════════════════════════
     FRONT LEVER FAMILY
     Gate: isometric-15 (Front Lever)
  ══════════════════════════════════════════════════════ */
  {
    id: 119,
    name: "One-Arm Front Lever",
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
    equipment: "Bar or rings", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 118,
    name: "Front Lever Pull-Up",
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
    equipment: "Pull-up bar or gymnastic rings", position: "Hanging", youtube: "LINK_TODO"
  },
  {
    id: 120,
    name: "One-Arm Front Lever Pull-Up",
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
    equipment: "Pull-up bar or gymnastic rings", position: "Hanging", youtube: "LINK_TODO"
  },
  {
    id: 124,
    name: "One-Arm Front Lever — 4 Fingers",
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
    equipment: "Bar or rings", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 125,
    name: "One-Arm Front Lever — 3 Fingers",
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
    equipment: "Bar or rings", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 126,
    name: "One-Arm Front Lever — 2 Fingers",
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
    equipment: "Bar or rings", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 127,
    name: "One-Arm Front Lever — 1 Finger",
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
    equipment: "Bar or rings", position: "Supine", youtube: "LINK_TODO"
  },

  {
    id: 330,
    name: "One-Arm Front Lever — Parallettes",
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
    name: "One-Arm Front Lever — 4 Fingers — Parallettes",
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
    name: "One-Arm Front Lever — 3 Fingers — Parallettes",
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
    name: "One-Arm Front Lever — 2 Fingers — Parallettes",
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
    name: "One-Arm Front Lever — 1 Finger — Parallettes",
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
    name: "One-Arm Front Lever Pull-Up — Parallettes",
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
    name: "One-Arm Front Lever Pull-Up — 4 Fingers — Parallettes",
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
    name: "One-Arm Front Lever Pull-Up — 3 Fingers — Parallettes",
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
    name: "One-Arm Front Lever Pull-Up — 2 Fingers — Parallettes",
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
    name: "One-Arm Front Lever Pull-Up — 1 Finger — Parallettes",
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
    name: "One-Arm Front Lever — Rings",
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
    equipment: "Gymnastic rings", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 341,
    name: "One-Arm Front Lever — 4 Fingers — Rings",
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
    equipment: "Gymnastic rings", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 342,
    name: "One-Arm Front Lever — 3 Fingers — Rings",
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
    equipment: "Gymnastic rings", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 343,
    name: "One-Arm Front Lever — 2 Fingers — Rings",
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
    equipment: "Gymnastic rings", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 344,
    name: "One-Arm Front Lever — 1 Finger — Rings",
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
    equipment: "Gymnastic rings", position: "Supine", youtube: "LINK_TODO"
  },
  {
    id: 345,
    name: "One-Arm Front Lever Pull-Up — Rings",
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
    equipment: "Gymnastic rings", position: "Hanging", youtube: "LINK_TODO"
  },
  {
    id: 346,
    name: "One-Arm Front Lever Pull-Up — 4 Fingers — Rings",
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
    equipment: "Gymnastic rings", position: "Hanging", youtube: "LINK_TODO"
  },
  {
    id: 347,
    name: "One-Arm Front Lever Pull-Up — 3 Fingers — Rings",
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
    equipment: "Gymnastic rings", position: "Hanging", youtube: "LINK_TODO"
  },
  {
    id: 348,
    name: "One-Arm Front Lever Pull-Up — 2 Fingers — Rings",
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
    equipment: "Gymnastic rings", position: "Hanging", youtube: "LINK_TODO"
  },
  {
    id: 349,
    name: "One-Arm Front Lever Pull-Up — 1 Finger — Rings",
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
    equipment: "Gymnastic rings", position: "Hanging", youtube: "LINK_TODO"
  },
  {
    id: 350,
    name: "Double Front Lever",
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
    name: "Triple Front Lever",
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
  },

  /* ══════════════════════════════════════════════════════
     FINGERTIP HANDSTAND FAMILY
     Gate: handstand-18 (Fingertip Handstand freestanding)
  ══════════════════════════════════════════════════════ */
  {
    id: 121,
    name: "One-Arm Fingertip Handstand",
    alt: "Single-arm fingertip handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Forearms", p:true}
    ],
    tags: ["shoulders", "core", "wrists", "fingers"],
    diff: 10,
    str: {suit:true, eff:3}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [6, 10],
    requires: ["handstand-18"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Handstand Push-Up",
    pantheonSubgroup: "Balance",
    desc: "One-arm fingertip handstand — the balance-dominant beast of the fingertip handstand kingdom. Control matters more than heroics; the contact base is tiny and unforgiving.",
    cues: "Comes after owning fingertip handstand balance under pressure, not before it.",
    equipment: "Floor or parallettes", position: "Inverted", youtube: "LINK_TODO"
  },
  {
    id: 122,
    name: "One-Arm Fingertip Handstand Push-Up",
    alt: "Unilateral fingertip handstand push-up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Core", p:true}
    ],
    tags: ["shoulders", "triceps", "fingers", "core"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:2, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [3.5, 6],
    requires: ["pantheon-121", "handstand-21"],
    requiresMode: "all",
    pantheonGroup: "Fingertip Handstand Push-Up",
    pantheonSubgroup: "Press",
    desc: "The final press crown of the fingertip handstand family — stacks one-arm overhead pressing, fingertip support, and inversion control into one absurd feat.",
    cues: "Sits above both the one-arm fingertip balance and the one-arm wall HSPU. If either root is shaky, the crown has not been earned.",
    equipment: "Wall or freestanding, floor or parallettes", position: "Inverted", youtube: "LINK_TODO"
  },

  /* ══════════════════════════════════════════════════════
     PULL-UP FAMILY
     Bar chain gate:  pullup-20 (One-Arm Pull-Up)
     Ring chain gate: pullup-78 (One-Arm Ring Pull-Up)
     Note: bar finger variants (pullup-110/111/112) live in
     pullup-data with pantheon:true and serve as ring-chain gates.
  ══════════════════════════════════════════════════════ */
  {
    id: 301,
    name: "One-Arm 3-Finger Ring Pull-Up",
    alt: "Single-arm three-finger ring pull-up · unilateral 3-finger ring pull",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Obliques", p:true},
      {n:"Finger Flexors", p:true}
    ],
    tags: ["back", "biceps"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 1, strength: 5,
    kcalPerRep: [0.22, 0.4],
    requires: ["pullup-78", "pullup-110"],
    requiresMode: "all",
    pantheonGroup: "Pull-Up",
    pantheonSubgroup: "Ring Finger Reduction",
    desc: "One-arm pull-up on a freely rotating gymnastic ring on three fingers only. Fuses ring instability, unilateral pulling, and finger tendon load simultaneously. Requires independent ownership of the one-arm ring pull-up and the bar-based one-arm three-finger pull-up.",
    cues: "Both prerequisite skills must be fully established — no merging until each is independently stable. Allow the ring to rotate naturally; fighting it creates additional wrist torque.",
    equipment: "Gymnastic ring", position: "Hanging", youtube: "LINK_TODO"
  },
  {
    id: 302,
    name: "One-Arm 2-Finger Ring Pull-Up",
    alt: "Single-arm two-finger ring pull-up · unilateral 2-finger ring pull",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Obliques", p:true},
      {n:"Finger Flexors", p:true}
    ],
    tags: ["back", "biceps"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 1, strength: 5,
    kcalPerRep: [0.22, 0.4],
    requires: ["pantheon-301", "pullup-111"],
    requiresMode: "all",
    pantheonGroup: "Pull-Up",
    pantheonSubgroup: "Ring Finger Reduction",
    desc: "One-arm pull-up on a freely rotating ring on two fingers. Full bodyweight through four finger joints on a rotating surface under unilateral load. Requires the three-finger ring variant and the bar-based two-finger one-arm pull-up.",
    cues: "The three-finger ring variant must already feel controlled. Two-finger ring dead hangs, one-arm, for accumulated time before pulling.",
    equipment: "Gymnastic ring", position: "Hanging", youtube: "LINK_TODO"
  },
  {
    id: 303,
    name: "One-Arm 1-Finger Ring Pull-Up",
    alt: "Single-arm one-finger ring pull-up · unilateral index ring pull",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Obliques", p:true},
      {n:"Finger Flexors", p:true}
    ],
    tags: ["back", "biceps"],
    diff: 10,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 1, strength: 5,
    kcalPerRep: [0.22, 0.4],
    requires: ["pantheon-302", "pullup-112"],
    requiresMode: "all",
    pantheonGroup: "Pull-Up",
    pantheonSubgroup: "Ring Finger Reduction",
    desc: "The theoretical outer boundary of the ring finger-reduction chain: one-arm pull-up on a single gymnastic ring, on a single finger, with the ring rotating freely. The convergence of three independent extreme skills — one-arm ring pull-up, one-arm one-finger bar pull-up, and the two-finger ring variant. No verified performances are known to exist.",
    cues: "No training prescription exists for this movement. Every prior stage in both chains must be independently mastered. It documents the terminus of the progression.",
    equipment: "Gymnastic ring", position: "Hanging", youtube: "LINK_TODO"
  }
];

function getPantheonExercises() {
  return PANTHEON_EXERCISES;
}
