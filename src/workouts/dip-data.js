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

const dips = [

  /* ── FOUNDATION ─────────────────────────────────────────── */

  {
    id: 1,
    name: "Dip | (Parallettes)",
    alt: "Chest dip · tricep dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 4.0,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.2, 0.37],
    desc: "The parallette dip is the foundation of all dip training — hands grip low parallel handles at roughly shoulder width, wrists in a neutral position rather than extended as on standard fixed dip bars. The neutral wrist reduces extension stress and allows precise hand placement. Torso lean determines emphasis: staying upright loads the triceps maximally, leaning forward shifts emphasis to the lower chest and front deltoid. Lower until the elbows reach 90°, then press to full lockout.",
    cues: "Track elbows back, not flaring wide. The neutral wrist is the primary benefit of parallettes — do not grip so that the wrist still extends. Control the descent all the way to 90° before pressing. Full lockout at the top — lazy lockout is wasted range.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 2,
    name: "Dip | (Rings)",
    alt: "Gymnastic ring dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 5.2,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.28, 0.5],
    desc: "A dip performed on gymnastic rings. The rings rotate and swing freely under load, demanding continuous shoulder and wrist stabilisation throughout every rep. The instability recruits significantly more anterior deltoid and serratus anterior than a fixed-bar dip. At the top of each rep, actively turn the rings out — knuckles facing outward — for full shoulder external rotation. A core skill in gymnastics and calisthenics and a prerequisite for the ring muscle-up.",
    cues: "Keep the rings close to the body throughout. Ring turnout at full lockout is mandatory, not optional. If the rings are shaking uncontrollably, the prerequisite parallel bar dip strength is not yet there.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },{
    id: 4,
    name: "Korean Dip | (Parallettes)",
    alt: "Behind-the-back dip · reverse dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Chest", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "shoulders", "back"],
    diff: 6.5,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:2},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 3,
    kcalPerRep: [0.24, 0.44],
    desc: "Performed with hands gripping a bar behind the body — fingers pointing backward, shoulders in extreme internal rotation and extension. The body dips downward in front of the bar rather than below it. Demands extraordinary posterior shoulder capsule flexibility and builds the specific shoulder extension strength used in the back lever. One of the most shoulder-mobility-demanding pressing exercises in existence.",
    cues: "Shoulder flexibility is the hard prerequisite — never force range. Build the position progressively with static holds before adding any dipping motion. Any sharp anterior shoulder pain is an immediate stop.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 5,
    name: "Tiger Bend | (Parallettes)",
    alt: "Forearm-to-handstand press · tiger bend push-up",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Chest", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "shoulders", "core"],
    diff: 9.0,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:4, shoulder:4, neck:0, thoracic:1, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.4, 0.72],
    desc: "Begin in a forearm stand or headstand, then press to a straight-arm handstand by extending at the elbows. The movement is the inverse of a tricep extension — the forearms drive down and back as the elbows straighten. An elite gymnastics pressing skill that bridges forearm-supported positions and full handstand pressing. Requires a solid handstand and strong tricep lockout strength before the transition mechanics can be learned.",
    cues: "The pressing must be initiated from the elbows, not the wrists. Keep the body tight in a hollow position throughout. If the elbows flare outward, the triceps are not strong enough yet.",
    equipment: "Parallettes",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 6,
    name: "Band-Assisted Dip | (Parallettes)",
    alt: "Banded dip · assisted dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 2.5,
    str: {suit:false, eff:2},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:2, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.12, 0.21],
    desc: "A parallel bar dip with a looped resistance band anchored over one or both bars, with the knee or foot resting in the band. The band provides the most assistance at the bottom — where the dip is hardest — and reduces assistance as the body rises. The most widely used beginner tool for building toward a first unassisted dip. Heavier bands provide more assistance; progression means using progressively lighter bands until no assistance is needed.",
    cues: "Use the lightest band that still allows clean full-range form — not the heaviest one that makes it comfortable. Treat the band as a step, not a permanent tool.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 7,
    name: "Dip | (Bench)",
    alt: "Tricep dip · chair dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Front Delts", p:false},
      {n:"Chest", p:false}
    ],
    tags: ["triceps", "shoulders", "chest"],
    diff: 2.0,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 3,
    joints: {fingers:1, wrist:2, elbow:2, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 2,
    strength: 1,
    kcalPerRep: [0.13, 0.24],
    desc: "Hands placed on a bench behind the body, feet on the floor or an elevated surface. The body dips downward between the bench and the legs. A common beginner tricep exercise, though the shoulder mechanics are inferior to the parallel bar dip. The internal rotation forced by the behind-back hand position creates significant anterior shoulder stress, especially as depth increases.",
    cues: "Keep depth controlled — going excessively deep dramatically increases shoulder impingement risk. A flat foot placement with knees at 90° is safer than feet elevated for most beginners.",
    equipment: "Bench",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 8,
    name: "L-Sit Dip | (Parallettes)",
    alt: "L-sit parallel bar dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 6.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:2, si:0, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 4,
    kcalPerRep: [0.28, 0.5],
    desc: "A parallel bar dip performed while maintaining a full L-sit — legs extended horizontally throughout every rep. The hip flexors and core must sustain the L position under the full pressing load of the dip. Requires both a solid static L-sit and solid parallel bar dips before combining them. The L position shifts the centre of mass forward, slightly increasing the chest component of the dip.",
    cues: "Hold the L-sit statically for 20+ seconds before adding any dipping reps. The legs will want to drop on every descent — they must not. If the L collapses, the set ends.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 9,
    name: "Dip | Negative (Parallettes)",
    alt: "Eccentric dip · slow lower",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 3.5,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 1,
    kcalPerRep: [0.23, 0.42],
    desc: "Jump or press to the top position of the dip — arms fully locked out — then lower the body as slowly as possible under full control until the elbows reach 90°. Only the eccentric (lowering) phase is trained. Muscles can sustain significantly more load eccentrically than concentrically, making this the primary bridge for those who cannot yet complete a full unassisted dip. A 5-second lowering target is standard.",
    cues: "Resist the descent the entire way down — do not drop through any portion. The slower the lowering, the greater the stimulus. Jump to the top position cleanly from a box rather than kipping up.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 10,
    name: "Dip | (Bar)",
    alt: "Bar dip · muscle-up lockout dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 5.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 4,
    kcalPerRep: [0.26, 0.47],
    desc: "A dip performed on a single straight bar — the bar runs across the body at hip level. The hands grip the bar in front and the body dips below it on the far side. The single-bar geometry forces the shoulders significantly further forward than a parallel bar dip. The lockout phase of both the bar muscle-up and ring muscle-up ends in a straight bar dip position.",
    cues: "Lean forward into the bar throughout — do not try to stay upright. Wrist conditioning over weeks of static support holds is essential before adding reps. Core must be active to prevent the legs from swinging.",
    equipment: "Bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── PROGRESSIONS & REGRESSIONS ─────────────────────────── */

  {
    id: 11,
    name: "Box Dip | (Bench)",
    alt: "Floor dip · ground-level dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:false},
      {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 2.0,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:1, shoulder:2, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.09, 0.16],
    desc: "Hands placed on a low box or step, feet flat on the floor. The body dips downward between the hands and the box surface. The absolute beginner regression before the bench dip — the very low height severely limits how far the shoulders are loaded. Used widely in physiotherapy and beginner fitness programs. As strength improves, a taller box or bench is used until a full parallel bar dip is achievable.",
    cues: "Keep hands directly below the shoulders. Focus on the lowering phase being controlled — do not drop. Feet flat, hips directly under the shoulders throughout.",
    equipment: "Bench",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 12,
    name: "Tuck Dip | (Parallettes)",
    alt: "Knees-tucked dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 2.5,
    str: {suit:false, eff:2},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {fingers:1, wrist:2, elbow:2, shoulder:2, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.15, 0.26],
    desc: "A parallel bar dip performed with both knees bent up and tucked toward the chest rather than hanging straight down. The tucked leg position shortens the body lever and slightly reduces the effective load — a common beginner modification. More importantly, it removes the instability of swinging straight legs, allowing beginners to focus entirely on the pressing pattern.",
    cues: "Keep the tuck consistent — don't let the legs gradually drop during the set. This is a bridge, not a permanent form. Progress to full hanging legs as soon as the pressing is controlled.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 13,
    name: "Machine-Assisted Dip | (Machine)",
    alt: "Counterweighted dip · machine-assisted dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 2.0,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:2, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.1, 0.18],
    desc: "Performed on a dedicated assisted dip machine with a counterweighted platform that reduces effective bodyweight. The machine provides consistent, measurable assistance and keeps the movement path fixed. The most controlled beginner entry point for the dip pattern — assistance is dialled in precisely by a weight stack. Transition to parallel bars as soon as possible since the machine path limits proprioceptive development.",
    cues: "Select the minimum assistance that still allows clean reps. Reduce the counterweight by 5–10 kg as soon as 10+ clean reps are achievable.",
    equipment: "Machine",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 14,
    name: "Feet-Supported Dip | (Parallettes)",
    alt: "Foot-assisted dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 2.5,
    str: {suit:false, eff:2},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:2, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.12, 0.21],
    desc: "A parallel bar dip performed with feet resting lightly on a bench placed in front, providing partial weight support. The support is minimal — just enough to assist the weakest portion of the rep — while the arms handle the majority of the load. A useful self-assisted progression for athletes training alone who have outgrown band assistance but cannot yet complete full clean reps.",
    cues: "Use the feet for stability, not as the primary driver. Reduce foot contact as pressing strength improves — the goal is to barely touch the surface. Eventually lift the feet entirely.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 43,
    name: "Tuck Dip | (Rings)",
    alt: "Tuck ring dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 4.0,
    str: {suit:false, eff:2},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.17, 0.32],
    desc: "A ring dip performed with both knees tucked to the chest rather than hanging straight down. The tucked position shortens the body lever and reduces the effective load, isolating the ring instability challenge from the full bodyweight demand. The primary stepping stone between band-assisted ring dips and full unassisted ring dips. Beginners on rings often find swinging straight legs destabilising — the tuck eliminates that variable while retaining the ring-specific stabilisation demand in full.",
    cues: "Keep the tuck consistent throughout the set — do not let the legs drop mid-rep. Ring turnout at the top still applies. Progress to full hanging legs as soon as the ring instability feels controlled.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 46,
    name: "Korean Dip | Negative (Parallettes)",
    alt: "Eccentric Korean dip · Korean dip slow lower",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Chest", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "shoulders", "back"],
    diff: 5.5,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 2,
    kcalPerRep: [0.19, 0.34],
    desc: "Reach the Korean dip top position via a step or jump assist, then lower as slowly as possible through the full Korean dip range of motion under eccentric control. Since the posterior shoulder capsule is under extreme stress in the Korean dip position, the eccentric-only approach allows the shoulder structures to adapt to this unique loading angle progressively before the concentric demand is introduced. A 3–5 second lowering target per rep. The primary bridge between static shoulder extension holds and the full Korean dip.",
    cues: "Never force the shoulder into ranges it cannot comfortably reach — eccentric loading in an extreme position requires weeks of progressive adaptation. Any sharp anterior shoulder pain is an absolute stop. Prioritise active shoulder flexibility work alongside this exercise.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── GRIP & SURFACE VARIATIONS ──────────────────────────── */

  {
    id: 15,
    name: "Wide-Grip Dip | (Parallettes)",
    alt: "Wide parallel bar dip",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 4.5,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.2, 0.37],
    desc: "A parallel bar dip performed with hands placed wider than shoulder width. The wider stance increases pectoral stretch at the bottom and shifts the primary load toward the chest, reducing triceps involvement. Shoulder stress at the bottom increases significantly with wider grip — depth must be carefully controlled. Commonly used by athletes who want to prioritise chest development from the dip movement.",
    cues: "Do not go as deep as a standard dip — the wider grip creates more shoulder impingement risk at full depth. Stop the descent when the chest feels a strong stretch, not when the elbows reach a fixed angle.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 16,
    name: "Narrow-Grip Dip | (Parallettes)",
    alt: "Close-grip dip · tricep-isolation dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:false},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 4.2,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.2, 0.37],
    desc: "A dip performed with hands placed closer than shoulder width — elbows track directly back alongside the torso rather than flaring. The narrow grip maximises triceps isolation by minimising chest contribution and keeping the humerus in a close adducted position. Requires bars set narrower than standard dip stations, or the use of a narrow parallette setup. The closest bodyweight analogue to a close-grip bench press.",
    cues: "Elbows must track directly rearward — not flaring outward. The closer the grip, the more important elbow tracking becomes. Any outward flare converts the movement back toward a standard dip.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 50,
    name: "Chest Dip | (Parallettes)",
    alt: "Forward lean dip · pec dip",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Front Delts", p:true},
      {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 4.3,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.2, 0.37],
    desc: "A parallel bar dip performed with a deliberate forward lean of the torso — typically 30–45° from vertical — so that the chest becomes the primary mover rather than the triceps. The same equipment and grip as the standard parallel bar dip; only the torso angle changes. The forward lean increases pectoral stretch at the bottom and shifts the pressing angle to more closely resemble a decline press. Widely programmed as a distinct exercise from the upright tricep-focused parallel bar dip, and frequently the version beginners default to without knowing it.",
    cues: "Lean from the hips with a straight spine — do not hunch the upper back forward. Let the elbows flare slightly outward rather than tracking back. Keep the chin tucked and look a metre ahead on the floor, not at the ceiling.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 18,
    name: "Turned Out Dip | (Rings)",
    alt: "RTO dip · externally rotated ring dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 6.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:4, wrist:3, elbow:4, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 4,
    kcalPerRep: [0.32, 0.57],
    desc: "A ring dip performed with the rings actively turned out — externally rotated — throughout the entire movement, not just at the top. Maintaining the turned-out position through the descent and ascent requires constant active external rotation of the humerus, recruiting the infraspinatus, teres minor, and rear deltoid throughout. Standard in gymnastics conditioning where this position trains the shoulder stability required for iron cross and other ring skills.",
    cues: "The rings must face outward from the very start — not just at lockout. If the turnout cannot be maintained through the descent, reduce range of motion before reducing turnout.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── LOADED VARIATIONS ──────────────────────────────────── */{
    id: 61,
    name: "Band-Resisted Dip | (Parallettes)",
    alt: "Loaded band dip · banded resistance dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 4.5,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:1},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.23, 0.42],
    desc: "A dip performed with a resistance band anchored above — looped from a fixed point overhead and around the torso or hips — so that the band adds downward force throughout the movement. The opposite of band-assisted dipping: the band is hardest at the top where it is most stretched and easiest at the bottom, which is the inverse resistance curve of a dip belt. Particularly effective for training lockout strength and the top portion of the press. Useful when a dip belt is unavailable or as an alternative loading method.",
    cues: "Anchor the band securely — a slipping band at the top of a heavy rep is a fall risk. The band must pull downward, not at an angle. Start with a light band; the effect is larger than it appears.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── UNILATERAL VARIATIONS ──────────────────────────────── */

  {
    id: 21,
    name: "Archer Dip | (Parallettes)",
    alt: "One-arm assisted dip · unilateral dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 6.0,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:4, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.3, 0.54],
    desc: "One arm bends to perform the dip while the other remains nearly straight and extended to the side, providing minimal balance assistance. The working arm handles the overwhelming majority of the load. The direct unilateral progression on parallel bars, analogous to the archer push-up in the pressing family. Each arm trained independently.",
    cues: "The straight arm is a guide — not a crutch. Gradually reduce the assistance the extended arm provides over weeks. Keep the torso square — resist the pull toward the working side.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 22,
    name: "One-Arm Dip | (Parallettes)",
    alt: "Single-arm dip · unilateral parallel bar dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 8.0,
    hof: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:3, elbow:5, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [0.35, 0.63],
    desc: "A full dip performed on a single arm — one hand grips a bar while the other is held free. The working arm handles the entire bodyweight load while the core must resist the extreme rotational torque generated by the single-point support. One of the rarest pressing feats in calisthenics, requiring years of systematic progression through archer dips and one-arm negatives. Train each side independently.",
    cues: "The archer dip with near-zero assistance is the final prerequisite. The free arm must not secretly brace against anything. Expect significant anti-rotation core demand — the torso will want to twist toward the working side.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 23,
    name: "One-Arm Dip | Negative (Parallettes)",
    alt: "Eccentric one-arm dip · unilateral slow lower",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 7.0,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:3, elbow:5, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.26, 0.47],
    desc: "Press to the top of a dip using both arms, then release one hand and lower as slowly as possible on a single arm. Only the eccentric (lowering) phase is performed unilaterally. Muscles are significantly stronger in the eccentric phase, making this the primary bridge between archer dips and the full one-arm dip. A 5-second lowering target is standard.",
    cues: "Release the assisting hand cleanly at the top — do not gradually shift the load mid-descent. Control every inch of the lowering. Use both arms to press back to the top for the next rep.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 59,
    name: "One-Arm Dip | (Rings)",
    alt: "Single-arm ring dip · unilateral ring dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 9.0,
    hof: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:5, elbow:5, shoulder:5, neck:0, thoracic:0, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.42, 0.76],
    desc: "A full dip performed with one hand on a gymnastic ring while the other arm is held free. Combines the entire load of the one-arm dip with the rotational instability of the rings — the ring rotates and swings freely under the full single-arm load, demanding simultaneous ring stabilisation, anti-rotation core engagement, and maximum unilateral pressing strength. Essentially an unseen movement outside of elite gymnastics and the most extreme unilateral pressing feat in the dip family. Years of both one-arm parallel bar dip and ring dip mastery are required before this is even conceptually approachable.",
    cues: "The one-arm parallel bar dip and standard ring dip must each be completely solid — multiple clean reps — before this is attempted. The ring will rotate aggressively; the wrist must be conditioned to absorb this under single-arm load. Treat any single partial rep as a significant achievement.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── TEMPO & ISOMETRIC VARIATIONS ───────────────────────── */

  {
    id: 24,
    name: "Pause Dip | (Parallettes)",
    alt: "Dead-stop dip · 90° pause dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 4.5,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.25, 0.45],
    desc: "A parallel bar dip with a deliberate 2–3 second pause at the bottom position — elbows at 90° — before pressing back up. The pause eliminates the stretch-shortening reflex and forces a true dead-stop press from the sticking point. Significantly harder than a standard dip for the same rep count.",
    cues: "Full dead stop at the bottom — no bounce, no micro-extension. Brace the entire body hard during the pause before initiating the press. The pause must be completely still.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 25,
    name: "Tempo Dip | (Parallettes)",
    alt: "Slow dip · 3-1-3 dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 4.3,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.3, 0.54],
    desc: "A dip performed with a strictly controlled tempo — typically a 3–4 second eccentric descent, 1–2 second pause at the bottom, and a controlled 2–3 second concentric press. Increases time under tension dramatically, eliminates momentum, and exposes weaknesses at every point in the range. Any given rep count at tempo is substantially harder than the same count at normal speed.",
    cues: "Count the seconds aloud or in your head. The moment the controlled pace breaks down, the set is over. Never sacrifice tempo to grind out an extra rep.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 26,
    name: "Support Hold | (Parallettes)",
    alt: "Dip lockout hold · top hold",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:false},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 1.5,
    str: {suit:false, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {fingers:1, wrist:2, elbow:1, shoulder:2, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.05, 0.09],
    desc: "A static hold at the top position of the dip — arms fully extended, body suspended between the bars. Builds lockout strength, wrist stability, and shoulder support endurance. Used as an activation drill before dip sessions, as a rehabilitation tool, and as the very first step for beginners before any pressing motion is introduced. Target 30 seconds minimum.",
    cues: "Push the bars apart slightly — active external pressure improves shoulder stability. Depress the scapulae and keep the chest tall. Do not let the elbows hyperextend or passively hang in the joint.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 27,
    name: "Bottom Hold | (Parallettes)",
    alt: "90° hold · sticking point hold",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 4.0,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.16, 0.29],
    desc: "A static hold at the bottom position of the dip — elbows at exactly 90°, the hardest point in the range of motion. Builds strength specifically at the sticking point that causes most dip failures. Lower into the 90° position from a support hold, pause maximally, then press back up. Directly transfers to increased explosive strength out of the bottom on standard dips.",
    cues: "Reach the 90° position through a controlled descent rather than dropping into it. Keep elbows tracking back, not flaring, throughout the hold.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 57,
    name: "Support Hold | (Rings)",
    alt: "Ring lockout hold · ring top hold",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:false},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 3.0,
    str: {suit:false, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:2, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.08, 0.14],
    desc: "A static hold at the top position of the ring dip — arms fully extended, rings close to the body, with active ring turnout maintained. The rings demand continuous rotational stabilisation from the wrists and shoulders that a fixed-bar support hold does not. The entry point for all ring work — athletes who cannot hold a stable, still ring support for 10+ seconds are not ready for ring dips. Target duration: 30 seconds with controlled turnout throughout.",
    cues: "Turn the rings out actively — knuckles facing outward — and maintain that position for the entire hold. Push the rings downward and slightly apart. Any shaking should reduce over weeks of consistent practice; if it does not, ring dip training should wait.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 58,
    name: "Korean Dip | Support Hold (Parallettes)",
    alt: "Korean dip top hold · reverse dip hold",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Chest", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "shoulders", "back"],
    diff: 4.5,
    str: {suit:false, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 4,
    joints: {fingers:2, wrist:3, elbow:2, shoulder:5, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 3,
    strength: 2,
    kcalPerRep: [0.1, 0.18],
    desc: "A static hold in the top position of the Korean dip — hands gripping a bar behind the body, fingers pointing backward, arms extended, body in front of the bar. The posterior shoulder capsule is loaded in extreme internal rotation and extension even in the static position. The mandatory prerequisite for Korean dip training, used to progressively condition the shoulder structures before any pressing motion is introduced. Begin with short holds of 5–10 seconds and extend duration over weeks.",
    cues: "Reach the position via a slow, controlled transition — never drop into it suddenly. Keep the arms as straight as possible. Even minor shoulder discomfort in this static position means the hold duration or frequency needs to be reduced, not pushed through.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── EXPLOSIVE VARIATIONS ───────────────────────────────── */

  {
    id: 28,
    name: "Explosive Dip | (Parallettes)",
    alt: "Plyometric dip · jump dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 4.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:4, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.28, 0.5],
    desc: "A dip executed with maximum concentric speed so that both hands briefly leave the bars at the top of the press — the body is momentarily airborne before catching the bars again. Develops rate of force development and pressing power that slow, controlled dips cannot train. A direct prerequisite for the bar muscle-up transition from the pressing side. Minimum prerequisite: 15+ strict parallel bar dips.",
    cues: "Drive the press as hard and fast as possible from the bottom. The hands leaving the bars is the measure of true explosiveness. Absorb the catch with soft elbows.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 29,
    name: "Clap Dip | (Parallettes)",
    alt: "Plyometric clap dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 5.0,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:4, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.3, 0.54],
    desc: "An explosive dip where the hands leave the bars and clap once in front of the chest before re-gripping. Harder than a standard explosive dip because the airborne phase must be high enough to create time for the clap without losing bar alignment on the catch. The clap is a measurable marker of true explosive power.",
    cues: "Get maximum height before attempting the clap — if you are rushing it, the explosive base is not strong enough yet. Catch with soft elbows and immediately stabilise.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── COMBINATION & ADVANCED VARIATIONS ─────────────────── */

  {
    id: 30,
    name: "Russian Dip | (Parallettes)",
    alt: "Forearm dip · rolling dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:false},
      {n:"Shoulders", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "shoulders", "core"],
    diff: 5.5,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 3,
    kcalPerRep: [0.26, 0.47],
    desc: "From a support hold on parallel bars, lower the forearms down to rest on the bars — transitioning from hand support to forearm support — then press back up to the support hold by extending the elbows. A gymnastics conditioning drill and a prerequisite for the tiger bend. Each rep travels hand → forearm → hand.",
    cues: "Lower to the forearms slowly and deliberately — do not drop. The press back up must be initiated from the elbows driving backward and downward, not by shrugging. Wrists relax in the forearm phase.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 31,
    name: "Dip Shrug | (Parallettes)",
    alt: "Scapular dip · support shrug",
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:false},
      {n:"Chest", p:false}
    ],
    tags: ["triceps", "shoulders", "back"],
    diff: 2.5,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:1, elbow:1, shoulder:1, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.07, 0.13],
    desc: "From a support hold on parallel bars, the body is elevated 3–5 cm by depressing the scapulae — the elbows remain completely straight throughout. Trains the scapular depression and retraction that every single dip rep should begin with. The dip equivalent of the scapular pull-up. Used as a warm-up, activation drill, and shoulder health tool.",
    cues: "Push the bars down and away — do not let the elbows bend at any point. If the elbows bend even slightly, it has converted into a dip. The movement is scapular only.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 32,
    name: "Straddle L-Sit Dip | (Parallettes)",
    alt: "Straddle dip · wide-leg L dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 7.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:2, si:0, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.32, 0.58],
    desc: "A parallel bar dip performed while holding a straddle position — legs extended and spread wide apart, parallel to the floor. Harder than the standard L-sit dip because the wide leg position requires significant hip abductor and adductor activation to maintain the straddle against gravity, stacked on top of the full hip flexor and core demand.",
    cues: "The straddle must remain parallel to the floor throughout — any leg drop terminates the set. Hip flexibility is a hard prerequisite. Master the full L-sit dip before attempting this.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 33,
    name: "Kipping Dip | (Parallettes)",
    alt: "Kip dip · CrossFit dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 3.5,
    str: {suit:false, eff:2},
    vol: {suit:false, eff:2},
    end: {suit:true, eff:5},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.22, 0.4],
    desc: "A dip that uses a deliberate hip swing — the kip — to generate momentum and dramatically reduce the concentric strength demand per rep. Standard in timed functional fitness workouts where maximising dip volume per set matters more than isolated muscle development. The shoulder absorbs significant shear forces at the swing initiation. Should not be trained before a baseline of 10+ strict dips is established.",
    cues: "Learn the kip timing before combining it with the press. The hip drive generates momentum — the arms cash it in. Strict strength must come first.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

        {
    id: 45,
    name: "L-Sit Dip | (Bar)",
    alt: "Bar L-sit dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 7.0,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.34, 0.61],
    desc: "An L-sit dip performed on a single straight bar — combining the extreme forward shoulder position of the straight bar dip with the full hip flexor and core demand of the L-sit. The legs held horizontally shift the centre of mass even further forward than a standard straight bar dip, dramatically increasing front deltoid demand and making bar clearance during the dipping motion substantially harder. The legs must remain perfectly horizontal while the body navigates below and back up over the bar without the feet catching.",
    cues: "Master both the parallel bar L-sit dip and the standard straight bar dip independently before combining them. Leg clearance over the bar is the primary technical obstacle — the L must remain locked throughout the ascent to prevent the feet from catching the bar.",
    equipment: "Bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 52,
    name: "German Dip | (Parallettes)",
    alt: "Deutsches Dip · European forearm dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Chest", p:false}
    ],
    tags: ["triceps", "shoulders", "core"],
    diff: 6.5,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 4,
    strength: 3,
    kcalPerRep: [0.28, 0.5],
    desc: "A named variant of the forearm dip tradition common in European gymnastics and calisthenics, particularly within German-speaking communities. From a forearm support position on parallel bars, the athlete drives through a deeper shoulder extension component before pressing back to the full hand support position — extending the range of motion and shoulder demand beyond the standard Russian dip. The deeper extension phase places the shoulder closer to the end of its available range during the transition, building the specific posterior shoulder strength used in German hang and back lever progressions.",
    cues: "The additional shoulder extension must be earned gradually — do not force the range. The forearm phase must be stable before the extended range is explored. Functions as a named distinct variant within the forearm dip family; even athletes proficient in the Russian dip should approach the extended range conservatively.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── SPECIALITY SURFACE VARIATIONS ─────────────────────── */

  {
    id: 35,
    name: "False Grip Dip | (Rings)",
    alt: "False grip ring dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 6.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:4, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.3, 0.54],
    desc: "A ring dip performed while maintaining a false grip — wrist positioned over the ring so the meaty part of the palm contacts the ring. The false grip keeps the wrist positioned above the ring throughout, which is the same grip required for the ring muscle-up transition. Combining the false grip with the dipping motion builds wrist tolerance under the specific load angle of the muscle-up. Significant wrist discomfort initially, reducing with adaptation.",
    cues: "Begin with static false grip ring support holds before adding any dipping motion. The grip must not slip mid-rep — if it slips, stop immediately. Wrist discomfort is expected; sharp wrist pain is a hard stop.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 36,
    name: "Impossible Dip | (Parallettes)",
    alt: "Between-chairs dip · deficit dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 8.5,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 4,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 4,
    kcalPerRep: [0.29, 0.52],
    desc: "Performed with each hand on a separate elevated surface — two sturdy chairs, boxes, or parallettes — with a gap between them. The body descends below the level of the hand supports, generating a range of motion and pectoral stretch impossible on a standard dip station. Named for its visual difficulty to observers unfamiliar with the movement. Achievable for any athlete with solid standard dips and adequate shoulder mobility.",
    cues: "Use stable, equal-height surfaces — unstable chairs are a fall risk. Shoulder flexibility is the primary limiting factor — stop if the stretch becomes sharp rather than deep.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 37,
    name: "L-Sit Dip | (Rings)",
    alt: "Ring L-sit dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 7.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.34, 0.61],
    desc: "A ring dip performed while maintaining a full L-sit — legs extended horizontally — on the rings. Stacks the ring instability of the ring dip with the core and hip flexor demand of the L-sit dip. One of the most demanding single exercises in the dip family. The swinging rings make maintaining the L position substantially harder than on fixed bars since every press attempt creates ring movement that must be actively counteracted.",
    cues: "Master the bar L-sit dip and the ring dip independently — both to 10+ clean reps — before combining. The L position on rings will wobble significantly; do not sacrifice ring control to hold the legs up.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },{
    id: 53,
    name: "Dip | (TRX)",
    alt: "Suspension trainer dip · strap dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 5.0,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.25, 0.45],
    desc: "A dip performed gripping TRX or suspension trainer handles. Distinct from a ring dip in a critical way: TRX handles are fixed in their orientation — they do not rotate — but they swing freely in all directions, creating a pendulum-type instability rather than the rotational instability of gymnastic rings. The fixed handle orientation reduces wrist rotational demand compared to rings while still demanding significant shoulder and core stabilisation to prevent the handles from swinging. Widely available in commercial gyms as an intermediate step between fixed bars and rings.",
    cues: "Keep the handles directly below the anchor point at the top — any swing increases difficulty sharply. Control the descent slowly; the handles will want to swing forward on the way down. Body tension throughout is non-negotiable.",
    equipment: "TRX",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 54,
    name: "Pike Dip | (Parallettes)",
    alt: "Angled dip · decline position dip",
    muscles: [
      {n:"Front Delts", p:true},
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Core", p:true}
    ],
    tags: ["shoulders", "chest", "triceps", "core"],
    diff: 4.8,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 2,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.24, 0.43],
    desc: "Feet elevated on a surface behind the body, hands on parallettes or bars in front, with the hips raised so the body is angled at roughly 45–60° from vertical — a pike-like geometry. Dipping in this position means pressing through a downward-and-forward pressing angle rather than a purely downward one, shifting the primary load to the front deltoids and upper chest rather than the triceps and lower chest. A bridge between the parallel bar dip and handstand push-up patterning. The steeper the body angle, the greater the overhead pressing component.",
    cues: "The hips must stay elevated throughout — do not let them drop toward horizontal during the descent, which converts the movement into a push-up. The further the feet are elevated and the closer to vertical the body angle, the more this resembles a partial handstand push-up.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── EXTREME / HALL OF FAME ─────────────────────────────── */

    {
    id: 60,
    name: "Korean Dip | (Rings)",
    alt: "Korean dip on rings · reverse ring dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Chest", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "shoulders", "back", "core"],
    diff: 7.5,
    hof: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:5, elbow:4, shoulder:5, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 5,
    strength: 5,
    kcalPerRep: [0.4, 0.72],
    desc: "A Korean dip performed on gymnastic rings — hands gripping the rings behind the body in extreme internal rotation and extension, with the rings free to rotate and swing. The rings add an additional layer of rotational wrist demand and spatial instability to an already extreme shoulder position. While the Korean dip on fixed bars is among the most shoulder-demanding movements in existence, the ring version compounds this with continuous ring stabilisation throughout the entire pressing motion. Effectively unseen outside of elite competitive gymnastics. An extraordinary combination of posterior shoulder capsule mobility, ring strength, and tendon conditioning.",
    cues: "The Korean dip on fixed bars must be completely mastered — multiple controlled reps — before this is even considered. The ring rotation in this shoulder position is unlike any other movement; begin with static holds in the ring Korean support position before adding any pressing motion. This combination of position and instability may not be appropriate for most training contexts.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

    {
    id: 40,
    name: "Iron Cross Dip | (Rings)",
    alt: "Cross dip · rings cross pressing",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core", "back"],
    diff: 10.0,
    hof: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:0, thoracic:0, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.42, 0.76],
    desc: "A dip performed while maintaining an iron cross position on rings — arms extended fully to the sides, body vertical. Adding a pressing motion to the iron cross position means pressing from full arm extension laterally into the top support position — simultaneously generating the adduction force to hold the cross and the pressing force to move. Considered one of the pinnacle pressing feats in gymnastics, achievable only by elite gymnasts and calisthenics athletes with years of dedicated cross training.",
    cues: "The iron cross static hold must be well-established — 3+ seconds minimum — before any pressing motion is introduced. Even a single partial rep from cross position is an exceptional strength achievement. Never force the range.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── GRIP & SURFACE VARIATIONS (new) ────────────────────── */

  {
    id: 62,
    name: "Typewriter Dip | (Parallettes)",
    alt: "Lateral shift dip · side-to-side dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 6.0,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.27, 0.49],
    desc: "A parallel bar dip that incorporates a lateral body shift at the bottom of each rep. The athlete descends to the standard 90° bottom position, then slides the body horizontally along the bars toward one side — increasing the load on that arm while the opposite arm approaches near-extension — before shifting back through centre and across to the other side, then pressing back to the top. Each rep loads both arms unilaterally in sequence within a single continuous movement. Builds the side-specific strength and bar awareness that bridges standard bilateral dipping and archer dip training.",
    cues: "The shift must happen at the bottom, not partway down — control the descent first, then slide. Keep the body in a consistent dipping position throughout the shift rather than rising or dropping. Equal time on both sides per rep.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 63,
    name: "Gironda Dip | (V-Bar)",
    alt: "V-bar dip · Vince Gironda dip",
    muscles: [
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Triceps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "shoulders", "triceps"],
    diff: 4.8,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.21, 0.38],
    desc: "Developed and popularised by bodybuilder Vince Gironda, this dip is performed on V-shaped bars — handles angled so the hands are closer together at the front and wider at the rear. The athlete keeps the torso upright, tucks the chin to the chest, rounds the upper back slightly, and allows the elbows to flare outward rather than tracking rearward. The combined effect of the bar angle, elbow path, and posture targets the outer and lower pectoral fibres in a way the standard forward-lean chest dip on straight bars does not. The V-bar geometry is the defining factor — performing this technique on standard parallel bars approximates but does not replicate it.",
    cues: "The chin-to-chest and slight upper back rounding are intentional and load-specific — do not cue a neutral spine here. Elbows must travel outward and slightly forward, not back. Depth to where a strong pectoral stretch is felt, not a fixed elbow angle.",
    equipment: "V-Bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 67,
    name: "Reverse Grip Dip | (Parallettes)",
    alt: "Supinated dip · underhand dip",
    muscles: [
      {n:"Front Delts", p:true},
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["shoulders", "chest", "triceps"],
    diff: 5.5,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 3,
    strength: 3,
    kcalPerRep: [0.2, 0.36],
    desc: "A dip performed with a supinated grip — palms facing outward, away from the body — on a fixed bar or edge. The reversed hand position naturally splays the elbows forward and outward rather than tracking rearward, fundamentally changing the pressing plane from a downward push to a more forward-pressing angle. The biceps tendon and anterior shoulder take on a substantially different loading profile compared to any pronated dip variant. A niche movement practiced in some bodybuilding and rehabilitation contexts, occasionally seen in historical strength training literature. Wrist tolerance to the supinated bar-bearing position is the primary adaptation required before training volume can be built.",
    cues: "The wrist and elbow position will feel unfamiliar — reduce range of motion until the forearm structures have adapted over several weeks. Never force depth. Any sharp pain in the biceps tendon or anterior shoulder is an immediate stop.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── UNILATERAL VARIATIONS (new) ────────────────────────── */

  {
    id: 66,
    name: "One-Arm Dip | (Bench)",
    alt: "Single-arm bench dip · unilateral bench dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Front Delts", p:false},
      {n:"Chest", p:false}
    ],
    tags: ["triceps", "shoulders", "chest"],
    diff: 4.5,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 4,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.18, 0.32],
    desc: "A bench dip performed with a single arm — one hand on the bench edge behind the body, the other arm held free across the chest or extended. Each side trained independently. The single-arm position concentrates all of the posterior shoulder and triceps load into one limb while creating an anti-rotation demand through the torso. Significantly harder than the bilateral bench dip while sharing the same behind-back shoulder mechanics and their associated risks. Useful as a unilateral triceps loading option when parallel bars are unavailable and as a bridge toward the one-arm parallel bar dip for athletes working through bench-level strength.",
    cues: "Keep depth conservative — the behind-back shoulder position under unilateral load is more exposed than the bilateral version. The free arm should not brace against the body. Both sides must be trained evenly each session.",
    equipment: "Bench",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── COMBINATION & ADVANCED VARIATIONS (new) ────────────── */

  {
    id: 64,
    name: "Archer Dip | (Rings)",
    alt: "One-arm assisted ring dip · ring unilateral dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 8.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [0.37, 0.67],
    desc: "An archer dip performed on gymnastic rings — one ring per hand, the working arm bending through the full dip range while the other arm extends nearly straight to the side on its ring. Unlike the fixed-bar archer dip, both arms are on independent rotating surfaces, meaning the extended arm must actively stabilise its ring throughout rather than simply pressing on a fixed bar. The working ring also rotates and swings under the near-full-bodyweight unilateral load. Demands simultaneous unilateral pressing strength and bilateral ring stabilisation. The advanced progression between the bar archer dip and the one-arm ring dip.",
    cues: "Both the bar archer dip and the standard ring dip should be solid — 5+ clean reps each — before combining them. The extended arm is a guide, not dead weight; it must actively resist ring rotation throughout. Expect significant unilateral ring wobble initially.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── EXPLOSIVE VARIATIONS (new) ─────────────────────────── */

  {
    id: 65,
    name: "Explosive Dip | (Rings)",
    alt: "Plyometric ring dip · jump ring dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 6.0,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [0.33, 0.59],
    desc: "An explosive dip performed on gymnastic rings where the hands briefly leave the rings at the top of the press — the body is momentarily airborne before the rings must be caught and immediately stabilised. Significantly harder than the parallel bar explosive dip because the rings swing freely on release and rotate on the catch, requiring instantaneous re-stabilisation under impact. The re-catch demands the ring stabilisation reflexes built by years of ring training. Used as a power development drill in advanced ring programs and as a specific preparation for the ring muscle-up's pull-to-dip transition. Minimum prerequisite: 10+ solid explosive parallel bar dips and 15+ clean ring dips.",
    cues: "Get maximum height before releasing — do not attempt the airborne phase until the ring dip press is genuinely explosive. Catch the rings with soft elbows and absorb actively through the shoulder. If the rings are spinning or swinging uncontrollably on the catch, ring dip volume needs to be higher before this is trained.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 70,
    name: "Explosive Dip | (Bar)",
    alt: "Plyometric bar dip · jump straight bar dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 6.0,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:3, elbow:5, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.32, 0.57],
    desc: "An explosive dip on a single straight bar where the hands leave the bar at the top of the press — the body clears the bar momentarily before re-gripping. The extreme forward shoulder position of the straight bar dip means the explosive drive must travel both upward and forward simultaneously, making bar clearance and accurate re-grip significantly more complex than the parallel bar equivalent. Used by gymnasts and advanced calisthenics athletes as a power drill for the bar muscle-up transition and as a measure of raw pressing explosiveness from a challenging position.",
    cues: "Only attempt once the unloaded straight bar dip is completely controlled and the parallel bar explosive dip is solid — both are prerequisites. The re-grip landing is the high-risk moment: soft elbows on contact and immediate shoulder stabilisation. Any wrist discomfort in the catch position requires progressive wrist conditioning before continuing.",
    equipment: "Bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }, /* ── LOADED VARIATIONS (new) ─────────────────────────────── *//* ── SPECIALITY SURFACE VARIATIONS (new) ────────────────── */

  {
    id: 71,
    name: "Pommel Horse Dip | (Pommel)",
    alt: "Gymnastics pommel dip · pommel support dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 6.5,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.22, 0.4],
    desc: "A dip performed in the pommel horse support position — hands on the pommels of a gymnastics pommel horse, body suspended between them. The pommels are set at a fixed height and width specific to the apparatus and do not allow grip width adjustment. Gripping handles that project upward from a curved leather body means the wrist angle and hand orientation differ subtly from standard parallel bars, and the lower body must be held active and straight rather than freely hanging. Used in gymnastics conditioning as a strength exercise within the pommel horse event's specific upper body demands. For athletes outside gymnastics, the movement is mechanically close to a parallel bar dip but the apparatus is rarely available.",
    cues: "Body position must be active throughout — legs together, toes pointed, body tight. The pommels are not as long as parallel bars; hand placement relative to the pommel head affects wrist comfort significantly. This is primarily a gymnastics-context exercise; in most training environments it is a parallel bar dip by another surface.",
    equipment: "Pommel",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  // ── RINGS VARIANTS (added) ───────────────────────────────

  {
    id: 72,
    name: "Dip | Negative (Rings)",
    alt: "Eccentric ring dip · slow lower rings",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 4.5,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.25, 0.46],
    desc: "Jump or press to the top of a ring support — arms fully locked out, rings turned out — then lower as slowly as possible under full control until the elbows reach 90°. Only the eccentric phase is trained. The rings rotate and swing freely throughout the descent, demanding continuous rotational stabilisation from the wrists and shoulders on top of the standard eccentric loading. Significantly harder than the parallettes negative dip and a direct stepping stone to the full ring dip. A 5-second lowering target is standard.",
    cues: "Maintain ring turnout from the very top — do not let the rings rotate inward during the descent. Control every millimetre of the lowering; the rings will want to swing forward. If the rings are shaking uncontrollably, build more ring support hold time before adding eccentric reps.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 73,
    name: "Russian Dip | (Rings)",
    alt: "Forearm ring dip · rolling ring dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:false},
      {n:"Shoulders", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "shoulders", "core"],
    diff: 7.5,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 4,
    kcalPerRep: [0.31, 0.56],
    desc: "From a ring support hold, lower the forearms down onto the rings — transitioning from hand support to forearm support — then press back up to the support position by extending the elbows. The same hand-to-forearm-to-hand pattern as the parallettes Russian dip, but performed on gymnastic rings. The rings rotate freely at every stage: on the forearm descent the rings swing inward and must be actively controlled, and on the press-out they rotate back as the wrists re-engage. Substantially harder than the parallettes version due to the added rotational instability in both phases. A direct prerequisite for the tiger bend on rings.",
    cues: "The Russian dip on parallettes must be solid before attempting this. Control the ring rotation during the forearm phase — they will try to splay outward. The press-out must drive the elbows backward and downward, same as on bars. Expect significant wrist adaptation time.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 74,
    name: "Straddle L-Sit Dip | (Rings)",
    alt: "Straddle ring dip · wide-leg ring L dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 8.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.36, 0.65],
    desc: "A ring dip performed while holding a straddle position — legs extended and spread wide, parallel to the floor. Stacks three simultaneous demands: the pressing strength and ring stabilisation of the ring dip, the hip flexor and core effort of holding the straddle, and the anti-swing control required to prevent the rings from moving as the legs shift the centre of mass. Every press attempt creates ring movement that must be counteracted while the straddle is held. One of the most technically demanding positions in the dip family outside of planche work.",
    cues: "Master the straddle L-sit dip on parallettes and the ring L-sit dip independently before combining them. The straddle will destabilise the rings far more than a standard L-sit — do not sacrifice ring control to hold the leg position. Hip flexibility is a hard prerequisite.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 75,
    name: "Typewriter Dip | (Rings)",
    alt: "Lateral shift ring dip · side-to-side ring dip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:true},
      {n:"Front Delts", p:false},
      {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "shoulders", "core"],
    diff: 8.0,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.31, 0.56],
    desc: "A ring dip incorporating a lateral body shift at the bottom of each rep — the body slides toward one ring at the bottom of the descent, loading that arm while the other approaches near-extension, before shifting back through centre and across to the opposite side. On parallettes the shift is a slide along fixed bars; on rings, each ring moves independently, meaning every lateral shift must be actively guided against ring swing and rotation. The rings will want to splay outward as the body shifts — both must be controlled throughout. Substantially harder than the parallettes typewriter dip and bridges ring archer dip training.",
    cues: "Both a solid ring dip and the parallettes typewriter dip are prerequisites. Execute the lateral shift slowly and deliberately — the rings will oscillate on any fast movement. Keep ring height matched throughout the shift. Equal loading on both sides per rep.",
    equipment: "Rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }

  ,

  /* ── WEIGHTED VARIANTS ─────────────────────────────────────── */

  {
    id: 76,
    name: "Weighted Dip | (Parallettes)",
    alt: "Loaded dip · belt dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "chest", "shoulders", "weighted"],
    diff: 5.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 1, strength: 5, kcalPerRep: [0.40, 0.70],
    desc: "A standard parallette dip performed with added load via a dip belt, weighted vest, or dumbbell held between the ankles. Weighted dips are the primary progressive overload method for the dip movement pattern, building the tricep and chest strength necessary for advanced variations and planche transitions.",
    cues: "Attach weight securely before every set. Maintain the same upright torso angle as the standard dip — do not let the additional load pull the chest forward excessively. Full range of motion takes priority over the amount loaded.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 77,
    name: "Weighted Dip | (Bar)",
    alt: "Loaded bar dip · belt bar dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "chest", "shoulders", "weighted", "bar"],
    diff: 5.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 1, strength: 5, kcalPerRep: [0.40, 0.70],
    desc: "Weighted dip on a parallel bar with added load. The bar provides a stable, fixed-width grip — useful for athletes who want to overload the dip without the extra stabilisation demand of rings or the potential wrist angle issues of some parallette widths.",
    cues: "Secure the load before each set. Keep elbows tracking slightly in rather than flaring out. Controlled descent to 90° then drive up to full lock-out.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 78,
    name: "Weighted Dip | (Rings)",
    alt: "Loaded ring dip · weighted gymnastic ring dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}, {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "shoulders", "weighted", "rings"],
    diff: 6.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 1, strength: 5, kcalPerRep: [0.45, 0.75],
    desc: "Weighted ring dip — adding external load to the already-demanding ring stabilisation and pressing challenge. Combining weighted resistance with ring instability produces a uniquely high tricep and shoulder conditioning stimulus. Only appropriate after the bodyweight ring dip is very well established.",
    cues: "Master 10+ clean bodyweight ring dips before adding load. The added weight amplifies ring swing — start conservatively and prioritise ring control over load. Turn-out rings at the top.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  /* ── GRIP VARIANTS ON MISSING EQUIPMENT ────────────────────── */

  {
    id: 79,
    name: "Wide-Grip Dip | (Rings)",
    alt: "Wide ring dip · spread ring dip",
    muscles: [
      {n:"Chest", p:true}, {n:"Triceps", p:true}, {n:"Front Delts", p:false}, {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders", "rings"],
    diff: 6.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 4, kcalPerRep: [0.32, 0.57],
    desc: "Ring dip performed with the rings spread wider than shoulder-width. Spreading the rings shifts greater loading to the chest (pectorals) and the anterior deltoid while also dramatically increasing shoulder stress as the wider spread creates a more vulnerable position under load.",
    cues: "Spread the rings to the desired width before descending. A wider position means more chest demand but significantly more shoulder risk — never force a depth the shoulders protest. Control the rings inward from splaying further during the descent.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 80,
    name: "Wide-Grip Dip | (Bar)",
    alt: "Wide bar dip · wide parallel bar dip",
    muscles: [
      {n:"Chest", p:true}, {n:"Triceps", p:true}, {n:"Front Delts", p:false}
    ],
    tags: ["chest", "triceps", "shoulders", "bar"],
    diff: 5.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:5, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 2, strength: 4, kcalPerRep: [0.28, 0.50],
    desc: "Dip on a wide-set parallel bar configuration. The wider grip increases pectoral recruitment and places more stress on the anterior shoulder. Often used intentionally for chest-emphasis dip training on fixed-width bar apparatus.",
    cues: "Set the bar or use the wider station if available. Lean slightly forward to increase pectoral activation. Monitor shoulder comfort — wide dips are more provocative for the AC joint than shoulder-width.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 81,
    name: "Narrow-Grip Dip | (Rings)",
    alt: "Close ring dip · tricep-focused ring dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:false}, {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "rings"],
    diff: 6.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:4, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 1, strength: 4, kcalPerRep: [0.28, 0.50],
    desc: "Ring dip with rings held close together — elbows track close to the torso throughout the movement. The narrow position maximises tricep isolation and reduces pectoral involvement. The rings' freedom means active inward compression is needed to maintain the close position.",
    cues: "Press the rings toward each other actively throughout the set. Elbows point backward — not flared. The close position is a tricep-dominant dip variation on rings.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 82,
    name: "Narrow-Grip Dip | (Bar)",
    alt: "Close bar dip · tricep dip close grip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:false}
    ],
    tags: ["triceps", "bar"],
    diff: 4.2,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 1, strength: 3, kcalPerRep: [0.25, 0.45],
    desc: "Close-grip parallel bar dip. The narrow hand position maximises elbow flexion and tricep isolation while reducing shoulder range-of-motion demands compared to the wide-grip variant. A tricep-focused pressing movement.",
    cues: "Hands closer than shoulder-width. Keep elbows tracking backward — narrow grip means the elbows naturally stay tighter to the ribcage. Drive through the triceps at lockout.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 83,
    name: "Chest Dip | (Rings)",
    alt: "Pec dip on rings · forward lean ring dip",
    muscles: [
      {n:"Chest", p:true}, {n:"Triceps", p:false}, {n:"Front Delts", p:false}, {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders", "rings"],
    diff: 6.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:0, thoracic:2, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 4, kcalPerRep: [0.30, 0.55],
    desc: "A ring dip performed with a pronounced forward lean, converting the tricep-dominant dip into a chest-dominant pressing movement. The pectoral fibres are stretched at the bottom of the descent and shortened at the top, producing maximum chest recruitment. The rings add stabilisation demand on top of the chest-focused loading.",
    cues: "Lean the torso forward significantly before descending. The more horizontal the chest, the more pectoral activation and less tricep involvement. Maintain the lean throughout — do not straighten up during the press.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 84,
    name: "Chest Dip | (Bar)",
    alt: "Forward lean bar dip · pec bar dip",
    muscles: [
      {n:"Chest", p:true}, {n:"Triceps", p:false}, {n:"Front Delts", p:false}
    ],
    tags: ["chest", "triceps", "shoulders", "bar"],
    diff: 4.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:5, neck:0, thoracic:2, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 2, strength: 3, kcalPerRep: [0.27, 0.48],
    desc: "Forward-lean chest dip on parallel bars. By tilting the torso forward during the movement, loading shifts from the triceps to the pectorals. The more forward the lean, the greater the chest stretch and contraction through the range of motion.",
    cues: "Lean chest forward and keep it forward throughout. Eyes angled toward the floor. The wider the grip and more forward the lean, the more chest-dominant the rep becomes.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  /* ── HOLD VARIANTS ─────────────────────────────────────────── */

  {
    id: 85,
    name: "Support Hold | (Bar)",
    alt: "Bar support hold · top of dip isometric bar",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}, {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "isometric", "bar"],
    diff: 2.5,
    str: {suit:true, eff:2}, vol: {suit:false, eff:1}, end: {suit:true, eff:4},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2, mobility: 1, strength: 2, kcalPerRep: [0.10, 0.18],
    desc: "Isometric support hold at the top of the dip position on a parallel bar — arms locked, body supported above the bar. Builds the elbow-lockout endurance, wrist tolerance, and body control foundational to all dip and bar pressing work.",
    cues: "Lock elbows fully, depress and retract shoulders, keep core engaged. Start with 10-second holds and progressively build duration. The standard entry point for bar calisthenics beginners.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 86,
    name: "Bottom Hold | (Rings)",
    alt: "Ring bottom hold · low position ring isometric",
    muscles: [
      {n:"Triceps", p:false}, {n:"Chest", p:true}, {n:"Front Delts", p:true}, {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders", "isometric", "rings"],
    diff: 5.5,
    str: {suit:true, eff:3}, vol: {suit:false, eff:1}, end: {suit:true, eff:4},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 3, kcalPerRep: [0.12, 0.22],
    desc: "Isometric hold at the bottom of the ring dip position — chest between the rings, shoulder at 90° flexion, rings under tension. The bottom hold is the most mechanically stressful position for the shoulder in the dip pattern and building tolerance here directly transfers to ring dip rep quality.",
    cues: "Lower to the bottom of the ring dip and hold. Rings should remain close to the body — any outward drift is a stability failure. Build up bottom hold duration before increasing ring dip reps.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 87,
    name: "Bottom Hold | (Bar)",
    alt: "Bar bottom hold · low dip isometric bar",
    muscles: [
      {n:"Chest", p:true}, {n:"Front Delts", p:true}, {n:"Triceps", p:false}
    ],
    tags: ["chest", "shoulders", "isometric", "bar"],
    diff: 3.5,
    str: {suit:true, eff:2}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 2, strength: 2, kcalPerRep: [0.10, 0.18],
    desc: "Isometric hold at the bottom of the parallel bar dip — elbows at 90°, chest lowered, shoulders in a stretched position. Builds bottom-position strength and shoulder stability in the most vulnerable point of the dip arc.",
    cues: "Lower to 90° and hold. Keep the torso in the desired lean angle (upright for tricep emphasis, forward for chest). Do not relax the shoulder at the bottom — active tension protects the AC joint.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 88,
    name: "Bottom Hold | (Parallettes)",
    alt: "Parallette bottom hold · low dip isometric",
    muscles: [
      {n:"Chest", p:true}, {n:"Front Delts", p:true}, {n:"Triceps", p:false}
    ],
    tags: ["chest", "shoulders", "isometric", "parallettes"],
    diff: 3.5,
    str: {suit:true, eff:2}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 2, strength: 2, kcalPerRep: [0.10, 0.18],
    desc: "Isometric hold at the bottom of the parallette dip position. Building bottom-position shoulder strength and tendon conditioning directly improves dip rep quality and injury resistance through the full range.",
    cues: "Lower to the bottom and pause. Keep shoulders active — do not dump into passive end range. The neutral grip on parallettes is most comfortable for accumulating bottom hold volume.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  /* ── NEGATIVE / ECCENTRIC ───────────────────────────────────── */

  {
    id: 89,
    name: "Dip | Negative (Bar)",
    alt: "Bar dip eccentric · slow bar dip lower",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "chest", "bar", "negative"],
    diff: 3.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 1, strength: 3, kcalPerRep: [0.22, 0.40],
    desc: "Eccentric-only bar dip — jump or step to the top position and lower with maximum control over 4-5 seconds. Eccentric dips build the tricep and chest strength for full dip reps with less total strength requirement than a concentric press, making them an effective regression for athletes who cannot yet complete full bar dips.",
    cues: "Jump to support. Lower as slowly as possible to the bottom — aim for 5 seconds. Step off at the bottom and repeat. Do not lower then bounce back up into a concentric — pure eccentric only.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 90,
    name: "L-Sit Dip | Negative (Parallettes)",
    alt: "L-sit dip eccentric parallettes",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Hip Flexors", p:true}, {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "core", "negative", "parallettes"],
    diff: 6.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:3, groin:1, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4, kcalPerRep: [0.30, 0.55],
    desc: "Eccentric L-sit dip on parallettes — from the top L-sit position, lower the body while holding the legs in the L position throughout the descent. The dual demand of maintaining the L-sit leg raise while controlling the eccentric press makes this significantly harder than a standard negative.",
    cues: "Maintain the L-sit throughout the descent. Do not drop the legs to make the negative easier — the whole point is the combined eccentric demand. 4-5 second descent.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 91,
    name: "L-Sit Dip | Negative (Rings)",
    alt: "L-sit ring dip eccentric",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Hip Flexors", p:true}, {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "core", "negative", "rings"],
    diff: 7.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:3, groin:1, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5, kcalPerRep: [0.35, 0.65],
    desc: "Eccentric L-sit dip on rings — L-sit held throughout the descent on free-hanging rings. The ring instability dramatically increases the difficulty of both the L-sit hold and the eccentric control.",
    cues: "L-sit maintained on rings while lowering slowly. The rings will want to drift — hold them close. This is a high-intensity conditioning drill combining ring control, core, and eccentric pressing.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 92,
    name: "Tiger Bend | Negative (Parallettes)",
    alt: "Tiger bend eccentric · ring forearm dip negative",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:false}, {n:"Shoulders", p:true}, {n:"Core", p:true}
    ],
    tags: ["triceps", "shoulders", "core", "negative", "parallettes"],
    diff: 6.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:4, neck:0, thoracic:1, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 4, kcalPerRep: [0.30, 0.55],
    desc: "Tiger bend negative — from the support position, lower the forearms to the bars/floor in the tiger bend pattern (forward forearm placement) under eccentric control. Building the pushing strength for the full tiger bend press-up through eccentric loading.",
    cues: "From the top position, slowly bend and lower the forearms forward until they contact. Reverse pattern from the full tiger bend. 3-4 second descent.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 93,
    name: "Tiger Bend | (Rings)",
    alt: "Ring tiger bend · ring forearm dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Shoulders", p:true}, {n:"Core", p:true}, {n:"Chest", p:false}
    ],
    tags: ["triceps", "shoulders", "core", "rings"],
    diff: 8.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:4, shoulder:4, neck:0, thoracic:2, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5, kcalPerRep: [0.45, 0.80],
    desc: "Tiger bend on gymnastic rings — lowering the forearms to the rings and pressing back up in the tiger bend pattern while managing full ring instability. The rings make the forearm contact and the press-out significantly harder due to the moving surface and ring-to-ring independence.",
    cues: "Requires a solid ring dip and parallette tiger bend before attempting. Control the ring forearm contact — rings will rotate and spread. Press out explosively from the low position.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 94,
    name: "Tiger Bend | (Bar)",
    alt: "Bar tiger bend · bar forearm dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Shoulders", p:true}, {n:"Core", p:true}
    ],
    tags: ["triceps", "shoulders", "core", "bar"],
    diff: 7.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:4, neck:0, thoracic:2, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5, kcalPerRep: [0.40, 0.72],
    desc: "Tiger bend on a parallel bar — the forearms contact the bar in the lowered position. The fixed bar provides a stable forearm base making this harder than parallettes (narrower) but not as unstable as rings.",
    cues: "Lower forearms to the bar. The contact point is the forearm pad — not the hands. Drive the hands down through the bar to press back up from the low tiger bend position.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  /* ── DYNAMIC VARIANTS ON ADDITIONAL EQUIPMENT ──────────────── */

  {
    id: 95,
    name: "Pause Dip | (Rings)",
    alt: "Ring dip bottom pause · ring controlled dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}, {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "rings"],
    diff: 6.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4, kcalPerRep: [0.30, 0.55],
    desc: "Ring dip with a 2-3 second pause at the bottom of each rep. Holding the bottom position on rings eliminates the stretch reflex and forces a dead-stop concentric press while managing ring instability simultaneously — dramatically increasing the strength demand over a standard ring dip rep.",
    cues: "Descend to the bottom and hold for a full 2-3 count before pressing. Do not bounce or use any momentum. The pause must be stable — rings still, position locked.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 96,
    name: "Pause Dip | (Bar)",
    alt: "Bar dip bottom pause · controlled bar dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "chest", "bar"],
    diff: 4.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 1, strength: 3, kcalPerRep: [0.26, 0.47],
    desc: "Bar dip with a 2-3 second pause at the bottom. Eliminating the stretch reflex through a dead-stop pause significantly increases the strength demand, building bottom-position power and improving starting-strength from the most mechanically disadvantaged point in the dip.",
    cues: "Pause fully at the bottom for 2-3 seconds. No bounce, no momentum — the press begins from a dead stop. A useful intermediate dip strength builder before weighted dips.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 97,
    name: "Tempo Dip | (Rings)",
    alt: "Slow ring dip · 3-1-3 ring dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}, {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "rings"],
    diff: 6.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4, kcalPerRep: [0.30, 0.55],
    desc: "Ring dip performed with deliberate slow timing — 3-4 seconds down, 1 second pause, 3-4 seconds up. Tempo work on rings maintains constant muscle tension through the full range while simultaneously requiring continuous ring stabilisation, making it a powerful hypertrophy and strength-endurance stimulus.",
    cues: "Count each phase — slow down, pause, slow up. Every second of the descent and ascent, the rings must be actively stabilised. No free-falling on the way down.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 98,
    name: "Tempo Dip | (Bar)",
    alt: "Slow bar dip · controlled tempo bar dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "chest", "bar"],
    diff: 4.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 1, strength: 3, kcalPerRep: [0.23, 0.42],
    desc: "Bar dip with controlled 3-1-3 tempo — 3 seconds down, 1 second pause, 3 seconds up. Slow tempo eliminates momentum from the rep, keeping the muscles under tension throughout the full range and building mind-muscle connection in the pressing pattern.",
    cues: "3 seconds down, pause, 3 seconds up. No using the stretch-shortening cycle. The slow bar dip is an excellent introductory strength-building tool for the dip movement.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 99,
    name: "German Dip | (Rings)",
    alt: "Ring German dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Shoulders", p:true}, {n:"Chest", p:false}, {n:"Core", p:true}
    ],
    tags: ["triceps", "shoulders", "core", "rings"],
    diff: 8.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:3, wrist:3, elbow:5, shoulder:5, neck:0, thoracic:2, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5, kcalPerRep: [0.55, 0.95],
    desc: "German dip on gymnastic rings — from a ring support, lean forward and lower the elbows behind the rings into a tricep-extension / shoulder-extension position before pressing back up. On rings, the forearm placement is on the ring straps rather than fixed bars, creating enormous instability during the most mechanically vulnerable position in this movement family. Extremely high elbow tendon and shoulder extension risk.",
    cues: "Solid parallette German dip mastery is mandatory before attempting on rings. The rings will move as the elbows go back — this requires active control at every point. Never attempt fatigued.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 100,
    name: "German Dip | (Bar)",
    alt: "Bar German dip · parallel bar German dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Shoulders", p:true}, {n:"Chest", p:false}
    ],
    tags: ["triceps", "shoulders", "bar"],
    diff: 7.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:3, elbow:5, shoulder:5, neck:0, thoracic:2, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5, kcalPerRep: [0.48, 0.85],
    desc: "German dip on a parallel bar. The fixed bar provides a stable forearm contact surface as the elbows move behind the body, making this more manageable than ring German dips while still demanding exceptional elbow tendon and shoulder extension strength and flexibility.",
    cues: "Lower the elbows behind the bars with control. The elbow must track rearward — not just bending the arm. Press back up through the tricep extension. Very high bicep tendon and elbow stress — warm up extensively.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 101,
    name: "German Dip | Negative (Parallettes)",
    alt: "German dip eccentric parallettes",
    muscles: [
      {n:"Triceps", p:true}, {n:"Shoulders", p:true}, {n:"Chest", p:false}
    ],
    tags: ["triceps", "shoulders", "negative", "parallettes"],
    diff: 6.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:5, neck:0, thoracic:2, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 4, kcalPerRep: [0.33, 0.60],
    desc: "Eccentric German dip — from the top position, slowly lower the elbows rearward into the German dip position under control. The eccentric phase develops the extreme shoulder extension strength and elbow tendon tolerance needed for the full German dip without requiring the concentric press-out capability.",
    cues: "Slowly lower elbows rearward in 4-5 seconds. Do not collapse — every centimetre of descent is controlled. Stop if pain (not discomfort) occurs at any point.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 102,
    name: "Pike Dip | (Rings)",
    alt: "Ring pike dip · V-sit ring dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Hip Flexors", p:true}, {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "core", "rings"],
    diff: 7.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:1, lowerBack:2, si:0, hip:4, groin:2, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 4, strength: 5, kcalPerRep: [0.40, 0.72],
    desc: "Pike dip on rings — a dip performed with the body in a deep pike position (hips flexed to near-parallel, legs straight down). The severe hip flexion shifts the centre of mass forward dramatically, requiring the pressing musculature to overcome this asymmetric load while managing ring instability.",
    cues: "Achieve the deep pike position before beginning to dip. The hips should be at 90° or greater. The further the hips are from between the rings the harder the press. Requires high hip flexor and hamstring flexibility.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 103,
    name: "Pike Dip | (Bar)",
    alt: "Bar pike dip · hip-hinge bar dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Hip Flexors", p:true}, {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "core", "bar"],
    diff: 5.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:1, lowerBack:2, si:0, hip:4, groin:2, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 4, strength: 4, kcalPerRep: [0.33, 0.58],
    desc: "Pike dip on parallel bars — dipping with legs straight and hips heavily flexed forward. The piked position changes the pressing mechanics and places the hip flexors under sustained isometric load during every rep. Builds pressing strength for L-sit dip and beyond.",
    cues: "Fold the hips and keep legs straight. Lower and press in the piked position. The deeper the pike, the harder the press. Hamstring flexibility limits the depth achievable.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 104,
    name: "Korean Dip | (Bar)",
    alt: "Reverse dip bar · Korean dip bar",
    muscles: [
      {n:"Rear Delts", p:true}, {n:"Triceps", p:true}, {n:"Chest", p:false}, {n:"Core", p:true}
    ],
    tags: ["shoulders", "triceps", "bar"],
    diff: 6.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:5, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 4, kcalPerRep: [0.35, 0.62],
    desc: "Korean dip on a bar — gripping the bar with hands behind the hips (palms-forward supinated grip) and dipping down into shoulder extension behind the body. On a fixed bar the wrist and elbow loading angle is more stressful than on parallettes. Directly trains the shoulder extension strength used in back lever preparation.",
    cues: "Grip bar behind hips with palms forward. Lower the body between the arms. The bar version is harder on wrists and elbows — build parallette Korean dip first. Keep the movement controlled at all times.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 105,
    name: "Korean Dip | Negative (Rings)",
    alt: "Korean dip eccentric rings",
    muscles: [
      {n:"Rear Delts", p:true}, {n:"Triceps", p:true}, {n:"Core", p:false}
    ],
    tags: ["shoulders", "triceps", "rings", "negative"],
    diff: 7.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:3, wrist:3, elbow:4, shoulder:5, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 4, kcalPerRep: [0.40, 0.72],
    desc: "Korean dip negative on rings — lowering slowly into the Korean dip bottom position on gymnastic rings. The ring rotation during the eccentric phase adds an instability challenge that makes controlling the descent significantly harder than the parallette or bar versions.",
    cues: "Control ring rotation throughout the descent. The rings will want to shift as the shoulder moves into extension — resist actively. Very slow 4-5 second descent. Stop if sharp pain occurs.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 106,
    name: "Reverse Grip Dip | (Rings)",
    alt: "Supinated grip ring dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}, {n:"Biceps", p:false}
    ],
    tags: ["triceps", "chest", "rings"],
    diff: 7.0,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:4, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 4, kcalPerRep: [0.32, 0.58],
    desc: "Ring dip with a supinated (underhand / reverse) grip — palms facing forward rather than inward. The reverse grip radically changes the wrist and elbow loading pattern and increases bicep tendon involvement. On rings the wrists can self-adjust angle, making this more feasible than reverse grip on a fixed bar.",
    cues: "Turn the hands so palms face forward (supinated). The rings can rotate slightly to find the most comfortable wrist angle. Lower and press in this reverse grip position. Wrist and elbow discomfort is common — build progressively.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 107,
    name: "Reverse Grip Dip | (Bar)",
    alt: "Supinated grip bar dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Biceps", p:false}
    ],
    tags: ["triceps", "chest", "bar"],
    diff: 5.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:5, elbow:4, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4, kcalPerRep: [0.28, 0.50],
    desc: "Bar dip with supinated grip — palms forward, thumbs pointing outward. The fixed bar creates maximal wrist torsion in this grip compared to rings or parallettes, making it the most wrist-demanding reverse grip dip variant. Strong wrist conditioning prerequisite.",
    cues: "Supinated grip on bar. The wrist is in an unusual angle — start with very short sets. The reverse grip dip on a fixed bar is significantly harder on the wrist than on rings. Build parallette or ring reverse-grip dip first.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 108,
    name: "Fingertip Dip | (Parallettes)",
    alt: "Fingertip grip dip parallettes",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "chest", "parallettes", "fingertip"],
    diff: 5.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:5, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 1, strength: 4, kcalPerRep: [0.28, 0.52],
    desc: "Parallette dip performed on fingertips only — full grip is replaced with fingertip pad contact on the parallette edges. Combines dip pressing strength with significant finger flexor and tendon conditioning. An unusual grip variant that develops both pushing and finger strength simultaneously.",
    cues: "Fingertips on the parallette edges. The neutral wrist position makes this more accessible on parallettes than on a bar. Lower and press with full dip form — the grip is the added challenge, not a reason to modify range of motion.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 109,
    name: "Fingertip Dip | (Rings)",
    alt: "Fingertip ring dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}, {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "rings", "fingertip"],
    diff: 7.0,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:5, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 1, strength: 5, kcalPerRep: [0.35, 0.62],
    desc: "Ring dip on fingertips — fingertip contact on the ring surface while performing a full ring dip. The ring rotation fights the fingertip grip, creating an extraordinary demand on both the finger flexors and the shoulder pressing musculature simultaneously.",
    cues: "Curl fingertips around the ring. The ring will rotate against the grip — prevent this actively. Fingertip ring dips should be treated as a max-intensity grip and pressing conditioning drill.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 110,
    name: "Jump Dip | (Parallettes)",
    alt: "Dip jump · jumping dip regression",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:false}, {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "chest", "parallettes", "regression"],
    diff: 2.0,
    str: {suit:true, eff:2}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2, mobility: 1, strength: 2, kcalPerRep: [0.20, 0.35],
    desc: "Jump to the top of the parallettes and lower with control — the easiest introduction to dip movement pattern loading. The jump eliminates the concentric press entirely, letting beginners experience the support position and start building the eccentric strength and wrist tolerance for full dips.",
    cues: "Jump to support at the top. Lower slowly. Step off at the bottom and repeat. Do not attempt to press back up yet. Build comfort with the support position and the descent before progressing to full dips.",
    equipment: "Parallettes",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 111,
    name: "Band-Assisted Dip | (Rings)",
    alt: "Assisted ring dip · ring dip with band",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}, {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "rings", "regression"],
    diff: 3.5,
    str: {suit:true, eff:3}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 2,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 1, strength: 2, kcalPerRep: [0.20, 0.37],
    desc: "Ring dip with a resistance band looped through the rings and under the feet or knees to reduce the bodyweight load. The band-assisted ring dip introduces athletes to ring instability and full ring dip range of motion with reduced pressing demand.",
    cues: "Loop the band at a height that provides useful assistance. As the bands provide varying assistance through the range, the bottom of the dip will be hardest. Progress by using lighter bands progressively.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 112,
    name: "Band-Assisted Dip | (Bar)",
    alt: "Assisted bar dip · bar dip with band",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:false}
    ],
    tags: ["triceps", "chest", "bar", "regression"],
    diff: 2.5,
    str: {suit:true, eff:2}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2, mobility: 1, strength: 1, kcalPerRep: [0.18, 0.32],
    desc: "Band-assisted dip on parallel bar — resistance band looped over the bar and under the feet to reduce load. The standard entry point for learning the full dip on a fixed bar, particularly useful in gym settings where parallel bars are the primary equipment.",
    cues: "Choose a band that allows 8-12 reps. Full range of motion — do not shortcut depth just because assistance is available. Progress by using lighter bands as strength increases.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 113,
    name: "Dip Shrug | (Rings)",
    alt: "Ring support shrug · ring scapular depress",
    muscles: [
      {n:"Triceps", p:false}, {n:"Serratus", p:true}, {n:"Lats", p:true}, {n:"Core", p:false}
    ],
    tags: ["shoulders", "lats", "rings", "isometric"],
    diff: 4.0,
    str: {suit:true, eff:2}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:3, wrist:3, elbow:2, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3, mobility: 1, strength: 2, kcalPerRep: [0.10, 0.18],
    desc: "Scapular depression shrug in the ring support position — from support on rings, actively push the body upward by depressing the scapulae (shoulders move down and away from the ears) without bending the elbows. Trains the scapular depression strength critical for all ring dip and ring support work on unstable surfaces.",
    cues: "In the ring support, actively push shoulders DOWN away from ears. Elbows stay locked. The body rises slightly as the scapulae depress. Hold the depressed position for a count before releasing. On rings this requires more co-contraction than on fixed bars.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 114,
    name: "Dip Shrug | (Bar)",
    alt: "Bar support shrug · scapular depress bar",
    muscles: [
      {n:"Serratus", p:true}, {n:"Lats", p:true}, {n:"Triceps", p:false}
    ],
    tags: ["shoulders", "lats", "bar"],
    diff: 2.5,
    str: {suit:true, eff:2}, vol: {suit:false, eff:1}, end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:3, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2, mobility: 1, strength: 2, kcalPerRep: [0.08, 0.15],
    desc: "Scapular depression shrug in the bar support position. The entry-level form of scapular depression training for the dip movement — a fundamental shoulder health exercise that activates the lower trapezius and serratus anterior in the pressing support position.",
    cues: "Support on the bar. Push shoulders DOWN. Body rises. Hold for 2-3 seconds. The stable bar makes this more accessible than on rings — master this before progressing to ring dip shrugs.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 115,
    name: "Tuck Dip | (Bar)",
    alt: "Tuck parallel bar dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Hip Flexors", p:false}, {n:"Core", p:false}
    ],
    tags: ["triceps", "chest", "bar"],
    diff: 4.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:1, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 3, mobility: 1, strength: 3, kcalPerRep: [0.27, 0.48],
    desc: "Bar dip with knees tucked to the chest. The tuck position shifts the centre of mass and adds hip flexor involvement. Often used to prevent feet from dragging on low bars during full dips, and as a transitional drill toward L-sit dip development.",
    cues: "Bring knees to chest before beginning the dip. Maintain the tuck throughout the full rep. This is a useful bar dip drill for developing the hip awareness and compression needed for L-sit dip progression.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 116,
    name: "Russian Dip | (Bar)",
    alt: "Bar Russian dip · elbow-to-bar dip",
    muscles: [
      {n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Front Delts", p:true}, {n:"Core", p:true}
    ],
    tags: ["triceps", "chest", "bar", "dynamic"],
    diff: 6.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:4, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 4, kcalPerRep: [0.38, 0.68],
    desc: "Russian dip on parallel bar — from the support position, lower the elbows to the bars (full elbow contact) then explosively press back up to straight arms. The transition from elbow-supported to hand-supported requires a powerful tricep extension and shoulder press from an unusual bottom position. Bar version places more wrist/elbow stress than parallettes.",
    cues: "Lower forearms until elbows contact the bar. From the elbow position, drive through the triceps to extend back to support. The bar makes the forearm contact slightly harder than on parallettes — transition smoothly.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }

,

  {
    id: 117,
    name: "Bench Dip | Negative (Bench)",
    alt: "Eccentric bench dip",
    muscles: [{n:"Triceps", p:true}, {n:"Chest", p:false}, {n:"Front Delts", p:false}],
    tags: ["triceps", "chest", "bench", "regression"],
    diff: 1.8,
    str: {suit:true, eff:2}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 2,
    joints: {fingers:0, wrist:2, elbow:2, shoulder:2, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1, mobility: 1, strength: 1, kcalPerRep: [0.15, 0.28],
    desc: "Slow eccentric-only bench dip — press up with legs or step down, then lower under maximal control. Standard entry point for beginners not yet able to press a full bench dip.",
    cues: "3-5 second controlled descent. Keep shoulders down, elbows tracking back not flaring. Reset at the top each rep.",
    equipment: "Bench",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 118,
    name: "L-Sit Dip | Negative (Bar)",
    alt: "Eccentric L-sit bar dip",
    muscles: [{n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Hip Flexors", p:true}, {n:"Core", p:true}],
    tags: ["triceps", "chest", "core", "bar"],
    diff: 6.8,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4, kcalPerRep: [0.3, 0.5],
    desc: "Eccentric-only L-sit dip on a straight bar — hold the L-sit and lower slowly, using assistance or a jump to reset at the top. Builds toward the full bar L-sit dip.",
    cues: "Legs stay horizontal throughout the descent. 3-4 second lower. Leg clearance over the bar on reset is the main technical hurdle.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 119,
    name: "One-Arm Dip | Negative (Rings)",
    alt: "Eccentric one-arm ring dip",
    muscles: [{n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Core", p:true}, {n:"Front Delts", p:false}],
    tags: ["triceps", "chest", "core", "rings"],
    diff: 8.5,
    str: {suit:true, eff:5}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:4, shoulder:5, neck:0, thoracic:0, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5, kcalPerRep: [0.35, 0.6],
    desc: "Single-arm eccentric ring dip — support on one arm, lower under control while resisting ring rotation and body rotation. Extreme unilateral pressing and stabilisation demand.",
    cues: "Free hand can lightly assist balance only, not load. Fight ring rotation the whole descent. Very few reach this — build full two-arm ring dip strength first.",
    equipment: "Gymnastic rings",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 120,
    name: "Korean Dip | Negative (Bar)",
    alt: "Eccentric behind-the-back bar dip",
    muscles: [{n:"Triceps", p:true}, {n:"Rear Delts", p:true}, {n:"Chest", p:false}],
    tags: ["triceps", "shoulders", "bar"],
    diff: 6.8,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:5, neck:0, thoracic:0, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4, mobility: 3, strength: 3, kcalPerRep: [0.22, 0.4],
    desc: "Eccentric Korean dip on a single straight bar — hands behind the body in extreme internal rotation, lowering under control. Same shoulder mobility prerequisite as the concentric version.",
    cues: "Never force the shoulder position. Build the static hold first, then add slow lowers. Stop immediately on any anterior shoulder pain.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  },

  {
    id: 121,
    name: "Straddle L-Sit Dip | (Bar)",
    alt: "Bar straddle dip · wide-leg bar L dip",
    muscles: [{n:"Triceps", p:true}, {n:"Chest", p:true}, {n:"Hip Flexors", p:true}, {n:"Core", p:true}],
    tags: ["triceps", "chest", "core", "bar"],
    diff: 7.5,
    str: {suit:true, eff:4}, vol: {suit:false, eff:1}, end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:4, neck:0, thoracic:0, lowerBack:2, si:0, hip:3, groin:1, knee:0, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 4, kcalPerRep: [0.3, 0.55],
    desc: "Straddle-leg dip on a single straight bar — legs spread wide and parallel to the floor throughout. Combines the forward centre-of-mass shift and bar-clearance challenge of the bar L-sit dip with straddle hip demand.",
    cues: "Master the bar L-sit dip and parallette straddle L-sit dip first. Straddle stays parallel to floor the whole rep. Leg clearance on the way up is the limiting factor.",
    equipment: "Pull-up bar",
    position: "Vertical · Arms Supporting",
    youtube: "LINK_TODO"
  }

];

/* Pantheon workouts moved from pantheon-data.js.
   Kept outside the normal library arrays so they stay gated and use pantheon-* progress keys. */
const dipPantheonWorkouts = [];
