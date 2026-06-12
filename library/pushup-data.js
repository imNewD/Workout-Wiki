/* ══ PUSH-UP DATA ════════════════════════════════════════════
   Edit this file to add, remove, or tweak push-up entries.
   Schema reference is in the main HTML comment block.
   Next available id: 132
════════════════════════════════════════════════════════════ */
const pushups = [
  {
    id: 1,
    name: "Standard Push-Up",
    alt: "Classic / Regular",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Shoulders", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders", "core"],
    diff: 3.3,
    str: {suit:true, eff:2},
    vol: {suit:true, eff:5},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {wrist:1, elbow:2, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 1,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.14, 0.25],
    desc: "The foundation of all push-up training. Hands shoulder-width apart, body in a straight line from head to heels. Lower until chest nearly touches the floor, press back up.",
    cues: "Keep elbows at ~45°. Squeeze glutes. Don't let hips sag.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 2,
    name: "Wide Push-Up",
    alt: "Wide-Grip",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:false},
      {n:"Triceps", p:false}
    ],
    tags: ["chest", "shoulders"],
    diff: 3.9,
    str: {suit:true, eff:2},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {wrist:1, elbow:2, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 1,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.14, 0.25],
    desc: "Hands placed wider than shoulder-width. Emphasises the outer pectoral fibres and reduces triceps involvement.",
    cues: "Don't flare elbows excessively — keep some tension in the shoulder blades.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 3,
    name: "Narrow / Diamond Push-Up",
    alt: "Close-Grip",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Chest", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["triceps", "chest", "shoulders"],
    diff: 3.9,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:1},
    risk: 2,
    joints: {wrist:2, elbow:4, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 1,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.15, 0.27],
    desc: "Hands close together forming a diamond shape. Maximum triceps recruitment and inner chest emphasis.",
    cues: "Keep elbows tucked tight to your sides throughout the movement.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 4,
    name: "Decline Push-Up (Elevated surface)",
    alt: "Feet Elevated",
    muscles: [
      {n:"Upper Chest", p:true},
      {n:"Shoulders", p:false},
      {n:"Triceps", p:false}
    ],
    tags: ["chest", "shoulders", "triceps"],
    diff: 4.2,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {wrist:1, elbow:2, shoulder:2, neck:2, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:1, foot:1},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.16, 0.29],
    desc: "Feet raised on a surface (bench, step, box). Shifts load to the clavicular head of the pectoralis major and the front deltoids.",
    cues: "The higher the surface, the more shoulder-focused it becomes.",
    equipment: "Elevated surface",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 5,
    name: "High Incline Push-Up (Elevated surface)",
    alt: "Hands Elevated High",
    muscles: [
      {n:"Lower Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 1.3,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:5},
    risk: 1,
    joints: {wrist:1, elbow:2, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.09, 0.16],
    desc: "Hands placed on a high surface so hips are level with or above the hands. Easy beginner regression with minimal bodyweight load.",
    cues: "Keep the body straight from head to knees. The higher the surface, the easier the movement.",
    equipment: "Elevated surface",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 132,
    name: "Low Incline Push-Up (Elevated surface)",
    alt: "Hands Elevated Low",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 2.1,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {wrist:1, elbow:2, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.11, 0.19],
    desc: "Hands placed on a low surface below hip height. Easier than a full floor push-up, but much closer to standard push-up loading and form.",
    cues: "Choose a low stable surface so your body stays nearly horizontal. The lower the surface, the harder it becomes.",
    equipment: "Elevated surface",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 6,
    name: "Archer Push-Up",
    alt: "Side-to-Side",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Back", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "back", "core"],
    diff: 5.5,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {wrist:2, elbow:3, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:1, ankle:0, foot:1},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.21, 0.38],
    desc: "Wide hand placement; lower toward one hand while extending the opposite arm straight. One side takes the majority of load — a stepping stone to one-arm push-ups.",
    cues: "Keep hips square. The extended arm stays on the ground for balance.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 7,
    name: "Pike Push-Up",
    alt: "Shoulder Push-Up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:false}
    ],
    tags: ["shoulders", "triceps", "core"],
    diff: 5.3,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 2,
    joints: {wrist:1, elbow:2, shoulder:2, neck:2, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:2, groin:0, ankle:0, foot:1},
    technique: 2,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.18, 0.32],
    desc: "Hips high in an inverted V, hands shoulder-width. Lower the crown of the head toward the floor. Essential for handstand push-up progression.",
    cues: "Walk feet closer to hands for more shoulder isolation.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 8,
    name: "Pseudo Planche Push-Up",
    alt: "Forward-Lean",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "core"],
    diff: 7.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {wrist:5, elbow:3, shoulder:4, neck:1, lowerBack:2, knee:0, fingers:0, thoracic:1, si:1, hip:2, groin:0, ankle:0, foot:1},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.26, 0.47],
    desc: "Hands at hip level, fingers pointing back. Lean body forward past the hands before descending. Extreme anterior deltoid and lower chest demand with constant core tension.",
    cues: "Start with small forward lean. Progress the lean distance over weeks.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9,
    name: "One-Arm Push-Up",
    alt: "1-Arm / OAP",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 9,
    hof: true,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {wrist:3, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:0, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 4,
    mobility: 2,
    strength: 5,
    kcalPerRep: [0.32, 0.58],
    desc: "Full push-up performed on a single arm. One of the ultimate tests of upper-body strength. Requires exceptional core stability and unilateral pressing power.",
    cues: "Spread legs wide for stability first. Gradually bring feet together as you get stronger.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 10,
    name: "Plyometric / Clap Push-Up",
    alt: "Explosive Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 5.3,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:2},
    risk: 2,
    joints: {wrist:2, elbow:3, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:1, foot:1},
    technique: 2,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.22, 0.4],
    desc: "Explosive push-up where hands leave the floor at the top. Develops fast-twitch fibres and upper-body power. Can add a clap between reps.",
    cues: "Land with soft elbows. Focus on the explosive drive — not the clap.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 11,
    name: "Spiderman Push-Up",
    alt: "Knee-to-Elbow",
    muscles: [
      {n:"Chest", p:true},
      {n:"Core", p:true},
      {n:"Obliques", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["chest", "core"],
    diff: 4.2,
    str: {suit:false, eff:2},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {wrist:1, elbow:2, shoulder:1, neck:1, lowerBack:1, knee:1, fingers:0, thoracic:1, si:0, hip:3, groin:1, ankle:0, foot:1},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.17, 0.31],
    desc: "As you lower, bring one knee out to the side toward the same-side elbow. Alternating sides each rep. Adds rotational core demand and hip flexor activation.",
    cues: "Time the knee drive to coincide with the bottom of the push-up.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 12,
    name: "T Push-Up",
    alt: "Rotation Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false},
      {n:"Back", p:false}
    ],
    tags: ["chest", "core", "shoulders", "back"],
    diff: 4,
    str: {suit:false, eff:2},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {wrist:1, elbow:2, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:2, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.17, 0.31],
    desc: "Standard push-up, but at the top rotate the body open, raising one arm toward the ceiling. Adds thoracic rotation and shoulder stability demands.",
    cues: "Keep hips stacked when in the side-plank position.",
    equipment: "None (dumbbells optional)",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 13,
    name: "Hindu Push-Up",
    alt: "Dand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Chest", p:false},
      {n:"Back", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "back", "core"],
    diff: 5,
    str: {suit:false, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:5},
    risk: 2,
    joints: {wrist:1, elbow:2, shoulder:2, neck:2, lowerBack:2, knee:0, fingers:0, thoracic:3, si:1, hip:2, groin:0, ankle:0, foot:1},
    technique: 3,
    mobility: 3,
    strength: 2,
    kcalPerRep: [0.21, 0.38],
    desc: "A flowing push-up moving from pike position, sweeping the chest forward and up into upward dog. Combines pressing and spinal extension. A staple of Indian wrestling conditioning.",
    cues: "Flow smoothly — the transition is as important as the pressing.",
    equipment: "None",
    position: "Dynamic",
    youtube: "LINK_TODO"
  },

  {
    id: 14,
    name: "Typewriter Push-Up",
    alt: "Sliding / Lateral",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:false},
      {n:"Triceps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "core"],
    diff: 7.4,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {wrist:2, elbow:3, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:1, ankle:0, foot:1},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.24, 0.43],
    desc: "At the bottom of a wide push-up, shift weight laterally — extending one arm straight while the body slides to that side like a typewriter carriage. Bridges archer and OAP.",
    cues: "Keep hips level throughout the lateral slide.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 15,
    name: "Elevated Pike Push-Up (Elevated surface)",
    alt: "Feet-Elevated Pike",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Upper Chest", p:false}
    ],
    tags: ["shoulders", "triceps", "chest"],
    diff: 5.5,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {wrist:2, elbow:2, shoulder:3, neck:3, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:2, groin:0, ankle:1, foot:1},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.21, 0.38],
    desc: "Pike push-up with feet on an elevated surface. Increases shoulder loading significantly — a key progression toward wall handstand push-ups.",
    cues: "The higher the feet, the more it resembles a handstand push-up.",
    equipment: "Elevated surface",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 16,
    name: "Ring Push-Up (Gymnastic rings)",
    alt: "Gymnastic Ring Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders", "core"],
    diff: 5,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 2,
    joints: {wrist:2, elbow:3, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.2, 0.36],
    desc: "Push-up on gymnastic rings. Instability demands constant stabiliser recruitment. Turn rings out at the top for maximum pectoral engagement.",
    cues: "Ring turnout at lockout activates more chest than virtually any ground variation.",
    equipment: "Gymnastic rings",
    position: "Prone",
    youtube: "LINK_TODO"
  },{
    id: 18,
    name: "Stagger Push-Up",
    alt: "Offset Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Core", p:false},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 4.0,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {wrist:2, elbow:3, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.15, 0.27],
    desc: "One hand placed forward of the shoulder, one back. Loads each side differently — a useful OAP stepping stone and a way to address unilateral strength imbalances.",
    cues: "Alternate hand positions between sets for balanced development.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 19,
    name: "Wall Push-Up (Wall)",
    alt: "Standing Push-Up",
    muscles: [
      {n:"Chest", p:false},
      {n:"Shoulders", p:false},
      {n:"Triceps", p:false}
    ],
    tags: ["chest", "shoulders", "triceps"],
    diff: 1,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:2},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {wrist:1, elbow:1, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:0, groin:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.05, 0.09],
    desc: "Performed standing against a wall. Minimal loading — ideal for absolute beginners, rehabilitation, or shoulder mobility warm-ups.",
    cues: "Perfect form learning tool before progressing to floor variations.",
    equipment: "Wall",
    position: "Standing",
    youtube: "LINK_TODO"
  },

  {
    id: 20,
    name: "Planche Push-Up (Parallettes / floor)",
    alt: "Full Planche",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 9.6,
    hof: true,
    pantheon: true,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:3, shoulder:5, neck:1, lowerBack:4, knee:0, fingers:0, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.42, 0.76],
    desc: "Performed with the body fully horizontal and elevated, supported only by the hands. One of the most advanced feats in bodyweight strength. Requires years of systematic progression.",
    cues: "Requires pseudo planche, planche lean, and straddle planche proficiency first.",
    equipment: "Parallettes / floor",
    position: "Elevated",
    youtube: "LINK_TODO"
  },

  {
    id: 117,
    name: "Maltese Push-Up (Parallettes / gymnastic rings)",
    alt: "Maltese Cross Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 9.8,
    hof: true,
    pantheon: true,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:3, shoulder:4, neck:1, lowerBack:3, knee:0, fingers:3, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.46, 0.82],
    desc: "A Maltese-style push-up requiring the same extreme shoulder and core leverage as the ring Maltese. Best performed on parallettes or rings with an advanced forward lever and extreme lateral arm position.",
    cues: "Unlocks the Pantheon Maltese variants. Requires a solid planche push-up base and dedicated ring or parallette strength training.",
    equipment: "Parallettes / gymnastic rings",
    position: "Elevated",
    youtube: "LINK_TODO"
  },

  {
    id: 21,
    name: "Dive Bomber Push-Up",
    alt: "Dive-Bomber",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Chest", p:false},
      {n:"Triceps", p:false},
      {n:"Back", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "shoulders", "triceps", "back", "core"],
    diff: 5,
    str: {suit:false, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {wrist:1, elbow:2, shoulder:2, neck:2, lowerBack:2, knee:0, fingers:0, thoracic:3, si:1, hip:2, groin:0, ankle:0, foot:1},
    technique: 3,
    mobility: 3,
    strength: 2,
    kcalPerRep: [0.23, 0.41],
    desc: "Starts in pike position, sweeps chest forward and down to the floor then pushes up into upward dog — then reverses the arc back to pike. Unlike the Hindu, the return path mirrors the descent.",
    cues: "The return sweep is what separates this from the Hindu. Control both directions equally.",
    equipment: "None",
    position: "Dynamic",
    youtube: "LINK_TODO"
  },

  {
    id: 22,
    name: "Knuckle Push-Up",
    alt: "Fist Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Shoulders", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 3.6,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {wrist:1, elbow:2, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 1,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.14, 0.25],
    desc: "Performed on closed fists, keeping the wrist in a neutral straight position. Reduces wrist extension stress and increases range of motion at the bottom. Common in martial arts conditioning.",
    cues: "Keep fists aligned under shoulders. Knuckles of index and middle finger contact the floor.",
    equipment: "None (mat recommended)",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 23,
    name: "Fingertip Push-Up",
    alt: "Finger Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 5,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {wrist:3, elbow:2, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:4, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.14, 0.25],
    desc: "Performed on the tips of extended fingers instead of the palms. Builds grip strength, finger tendon resilience, and forearm strength. A staple in martial arts and rock climbing conditioning.",
    cues: "Progress slowly — finger tendons adapt much slower than muscle. Never train to failure.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 24,
    name: "Scapular Push-Up",
    alt: "Scap Push-Up",
    muscles: [
      {n:"Back", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["back", "shoulders", "core"],
    diff: 2.3,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {wrist:1, elbow:1, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:0, groin:0, ankle:0, foot:1},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.04, 0.07],
    desc: "Arms stay locked — movement comes only from protracting and retracting the shoulder blades. No elbow bend. Used as a serratus anterior activation drill and shoulder health exercise.",
    cues: "Think: push the floor away to spread the shoulder blades, then let them pinch together. Elbows stay straight throughout.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 25,
    name: "Tuck Planche Push-Up (Parallettes / floor)",
    alt: "Tuck Planche",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core"],
    diff: 8.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {wrist:3, elbow:3, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:0, thoracic:2, si:1, hip:3, groin:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 5,
    kcalPerRep: [0.34, 0.61],
    desc: "Planche push-up with knees tucked to the chest, reducing the lever arm. The key progression between pseudo planche push-ups and the full planche push-up. Requires solid pseudo planche first.",
    cues: "Keep hips up and round the lower back slightly to maintain the tuck position throughout.",
    equipment: "Parallettes / floor",
    position: "Elevated",
    youtube: "LINK_TODO"
  },

  {
    id: 26,
    name: "Reverse-Hand Push-Up",
    alt: "Fingers-Back Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 4.6,
    str: {suit:true, eff:2},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {wrist:3, elbow:2, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.14, 0.25],
    desc: "Hands placed with fingers pointing toward the feet instead of forward. Puts the wrist into full extension in the opposite direction — used as a wrist mobility drill and to vary pressing stimulus.",
    cues: "Warm up wrists thoroughly first. Stop immediately if sharp wrist pain occurs.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 27,
    name: "Superman Push-Up",
    alt: "Flying Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Shoulders", p:false},
      {n:"Core", p:true}
    ],
    tags: ["chest", "triceps", "shoulders", "core"],
    diff: 7.1,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {wrist:2, elbow:3, shoulder:2, neck:1, lowerBack:2, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:1, foot:1},
    technique: 4,
    mobility: 1,
    strength: 4,
    kcalPerRep: [0.28, 0.5],
    desc: "An explosive push-up where both hands leave the floor and reach forward overhead at the peak — body briefly airborne in a Superman position. Requires significant upper-body power.",
    cues: "Drive through the whole palm, not just the fingers. Tuck chin on landing.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 28,
    name: "90° Pause Push-Up",
    alt: "Dead-Stop Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Shoulders", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders", "core"],
    diff: 4.9,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 2,
    joints: {wrist:1, elbow:3, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 2,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.18, 0.32],
    desc: "A standard push-up with a deliberate 2–3 second pause at the bottom position (elbows at 90°). Eliminates the stretch-shortening cycle, increasing chest and triceps strength demand at the sticking point.",
    cues: "Full dead stop at the bottom — no bounce. Brace hard before pressing.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  }, // id:29 Korean Dip → moved to Dip Library (not a push-up)
  {id:30, name:"Feet-Together Push-Up", alt:"Narrow-Stance Push-Up", muscles:[{n:"Chest",p:true},

  {n:"Triceps",p:false},{n:"Core",p:true},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:3.6, str:{suit:true,eff:2}, vol:{suit:true,eff:4}, end:{suit:true,eff:4}, risk:1, joints:{wrist:1,elbow:2,shoulder:1,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:1, strength:2, kcalPerRep:[0.14, 0.25], desc:"Standard push-up with feet together instead of hip-width apart. Reduces the base of support, increasing core anti-rotation and balance demand throughout the movement.", cues:"Brace the whole body as a single rigid unit. Any hip rotation means the core gave out.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:31, name:"Aztec Push-Up", alt:"Aztec / Jump Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:true}], tags:["chest","triceps","shoulders","core"], diff:8.0, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:4, joints:{wrist:3,elbow:3,shoulder:3,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:2,foot:2}, technique:5, mobility:1, strength:4, kcalPerRep:[0.32, 0.58], desc:"An explosive push-up where both hands and both feet leave the floor simultaneously at the top. Hands clap overhead while airborne. Requires exceptional upper-body power and precise landing mechanics.", cues:"Land with soft elbows and bent knees to absorb impact. Master the clap push-up first.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:32, name:"Scorpion Push-Up", alt:"Scorpion", muscles:[{n:"Chest",p:true},{n:"Core",p:true},{n:"Obliques",p:false},{n:"Shoulders",p:false}], tags:["chest","core","shoulders"], diff:5, str:{suit:false,eff:2}, vol:{suit:true,eff:3}, end:{suit:true,eff:4}, risk:2, joints:{wrist:1,elbow:2,shoulder:2,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:2,si:1,hip:3,groin:1,ankle:0,foot:1}, technique:3, mobility:3, strength:2, kcalPerRep:[0.18, 0.32], desc:"At the bottom of each rep, one leg bends and swings across the body, rotating the hips while the foot reaches toward the opposite hand. Alternating each rep. Adds spinal rotation and hip mobility demand.", cues:"Keep the hip swing controlled — don't let momentum drive the movement.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},
  // id:33 Tiger Bend → moved to Dip Library (forearm-to-hand press, dip family)
  {id:34, name:"Straddle Planche Push-Up (Parallettes / floor)", alt:"Straddle Planche", muscles:[{n:"Chest",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Back",p:false}], tags:["chest","shoulders","triceps","core","back"], diff:9.3, hof:true, unlocks:[20], str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:5, joints:{wrist:5,elbow:3,shoulder:5,neck:1,lowerBack:3,knee:0,fingers:0,thoracic:2,si:2,hip:3,groin:2,ankle:0,foot:0}, technique:5, mobility:3, strength:5, kcalPerRep:[0.38, 0.68], desc:"Planche push-up with legs spread wide to the sides, reducing the lever arm compared to the full planche. The standard progression between tuck planche and full planche push-up.", cues:"The wider the straddle the easier the lever — gradually bring legs together over months.", equipment:"Parallettes / floor", position:"Elevated", youtube:"LINK_TODO"},

  {id:35, name:"90° Hindu Push-Up", alt:"Hindu Pause Push-Up", muscles:[{n:"Shoulders",p:true},{n:"Chest",p:false},{n:"Triceps",p:false},{n:"Back",p:false},{n:"Core",p:false}], tags:["chest","shoulders","triceps","back","core"], diff:6, str:{suit:true,eff:4}, vol:{suit:false,eff:2}, end:{suit:false,eff:2}, risk:3, joints:{wrist:1,elbow:3,shoulder:2,neck:2,lowerBack:2,knee:0,fingers:0,thoracic:3,si:1,hip:2,groin:0,ankle:0,foot:1}, technique:4, mobility:3, strength:3, kcalPerRep:[0.24, 0.43], desc:"A Hindu push-up with a deliberate pause at the bottom when elbows reach 90°, before continuing the forward sweep into upward dog. The pause kills the stretch reflex and increases shoulder strength demand at the sticking point.", cues:"Hold the 90° position for 2–3 seconds. Stay tight — do not let the hips sag during the pause.", equipment:"None", position:"Dynamic", youtube:"LINK_TODO"},

  {id:36, name:"Lalanne Push-Up — Var. 1", alt:"Jack Lalanne Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false}], tags:["chest","triceps","shoulders"], diff:5, str:{suit:true,eff:3}, vol:{suit:false,eff:2}, end:{suit:false,eff:2}, risk:3, joints:{wrist:3,elbow:2,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:3,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:2, strength:2, kcalPerRep:[0.14, 0.25], desc:"Made famous by fitness pioneer Jack Lalanne. Performed on the fingertips with feet in the normal forward-facing position. The fingertip contact is the defining feature — building grip and tendon strength alongside the standard pressing muscles.", cues:"Keep fingers spread and rigid. Progress from knuckle push-ups before attempting this variation.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:37, name:"Lalanne Push-Up — Var. 2", alt:"Jack Lalanne Sideways", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false}], tags:["chest","triceps","shoulders"], diff:4.9, str:{suit:true,eff:3}, vol:{suit:false,eff:2}, end:{suit:false,eff:2}, risk:3, joints:{wrist:3,elbow:2,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:3,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:2, strength:2, kcalPerRep:[0.16, 0.29], desc:"Some sources describe the Lalanne push-up with feet turned sideways (toes pointing to one side, feet stacked or side by side) in addition to the fingertip hand position. This increases the hip stability and core rotation demand. The two variations are often conflated — both are valid interpretations.", cues:"If feet are stacked, the top hip will want to drop — resist it by squeezing the core hard.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:38, name:"Prayer Push-Up", alt:"Praying Hands Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false}], tags:["chest","triceps","shoulders"], diff:4, str:{suit:true,eff:3}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:2, joints:{wrist:2,elbow:3,shoulder:1,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:1, strength:2, kcalPerRep:[0.15, 0.27], desc:"Palms pressed flat together in front of the chest (prayer position) throughout the entire movement. The constant lateral pressing force activates the pectoral fibres isometrically in addition to the standard pressing motion.", cues:"Keep palms pressed together hard throughout — the moment you stop squeezing you lose the pec activation.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:39, name:"Shoulder Tap Push-Up", alt:"Tap Push-Up", muscles:[{n:"Chest",p:true},{n:"Core",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:3.3, str:{suit:false,eff:2}, vol:{suit:true,eff:3}, end:{suit:true,eff:4}, risk:1, joints:{wrist:2,elbow:2,shoulder:1,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:1, strength:2, kcalPerRep:[0.17, 0.31], desc:"A standard push-up followed by lifting one hand to tap the opposite shoulder at the top of each rep, alternating sides. Introduces a brief one-arm support phase that demands significant anti-rotation core stability.", cues:"The wider your feet the easier the balance. Narrow the stance as you get stronger.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:40, name:"Wrist Push-Up (Mat recommended)", alt:"Back-of-Hand Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false}], tags:["chest","triceps","shoulders"], diff:4.6, str:{suit:false,eff:2}, vol:{suit:false,eff:2}, end:{suit:true,eff:3}, risk:3, joints:{wrist:3,elbow:2,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:2, strength:2, kcalPerRep:[0.14, 0.25], desc:"Performed on the backs of the hands with wrists in flexion rather than extension. Loads the wrist flexors and is used as a rehabilitation and mobility exercise to balance the wrist extensor stress of standard push-ups. Common in martial arts warm-ups.", cues:"Use a soft surface or mat. Stop if sharp pain occurs — discomfort is expected, pain is not.", equipment:"Mat recommended", position:"Prone", youtube:"LINK_TODO"},

  {id:41, name:"Clapping Behind-Back Push-Up", alt:"Behind-Back Clap", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:8, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:3, joints:{wrist:2,elbow:3,shoulder:3,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:1,foot:1}, technique:5, mobility:2, strength:4, kcalPerRep:[0.27, 0.49], desc:"An explosive push-up where hands leave the floor and clap behind the lower back at the peak of the jump. Requires significantly more power and air time than a chest clap. Shoulder flexibility needed to bring arms behind the body mid-air.", cues:"Drive through the entire palm. Get maximum height before attempting the behind-back clap — if you're rushing it you don't have enough power yet.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:42, name:"Double Clap Push-Up", alt:"2-Clap Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:7, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:3, joints:{wrist:2,elbow:3,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:1,foot:1}, technique:4, mobility:1, strength:4, kcalPerRep:[0.25, 0.45], desc:"An explosive push-up with two claps before landing — chest clap then behind-back clap, or two chest claps in quick succession. Requires noticeably more air time and power output than the single clap variation.", cues:"Master the single clap push-up to near-effortless before attempting. Land with soft elbows every time.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:43, name:"Triple Clap Push-Up", alt:"3-Clap Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:8.4, hof:false, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:4, joints:{wrist:3,elbow:4,shoulder:3,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:1,foot:1}, technique:5, mobility:2, strength:5, kcalPerRep:[0.35, 0.63], desc:"Three claps before landing — typically chest, behind-back, chest in sequence. Demands extreme upper-body explosive power and significant air time. One of the most advanced plyometric push-up variations.", cues:"Only attempt after double clap is consistent. A failed landing with this much air time carries real injury risk.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:44, name:"L-Sit Push-Up (Parallettes / dip bars)", alt:"L-Sit Press", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:true},{n:"Core",p:true}], tags:["chest","triceps","shoulders","core"], diff:9, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:4, joints:{wrist:3,elbow:3,shoulder:3,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:4,groin:0,ankle:0,foot:0}, technique:5, mobility:3, strength:5, kcalPerRep:[0.49, 0.88], desc:"Performed while maintaining an L-sit — legs extended horizontally throughout every rep. The hip flexors and core must sustain the L position under the added pressing load. Requires a solid static L-sit before attempting the dynamic version.", cues:"Hold the L-sit static for 20+ seconds before adding push-up reps. The legs will want to drop on every descent — don't let them.", equipment:"Parallettes / dip bars", position:"Elevated", youtube:"LINK_TODO"},

  {id:45, name:"Ring Dip Push-Up (Gymnastic rings)", alt:"Deep Ring Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:true},{n:"Core",p:true}], tags:["chest","triceps","shoulders","core"], diff:7.2, str:{suit:true,eff:5}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:3, joints:{wrist:2,elbow:4,shoulder:3,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:4, mobility:2, strength:4, kcalPerRep:[0.28, 0.50], desc:"Rings set low to the floor, push-up grip. The depth possible exceeds the floor, allowing a greater stretch at the bottom. Full ring turnout at lockout maximises pectoral engagement. The combination of extra depth and ring instability makes this significantly harder than a standard ring push-up.", cues:"Turn the rings out actively at the top — knuckles facing outward. Control the extra depth; don't sink passively.", equipment:"Gymnastic rings", position:"Prone", youtube:"LINK_TODO"},

  {id:46, name:"Typewriter Pike Push-Up", alt:"Lateral Pike Push-Up", muscles:[{n:"Shoulders",p:true},{n:"Triceps",p:true},{n:"Core",p:false}], tags:["shoulders","triceps","core"], diff:7, str:{suit:true,eff:4}, vol:{suit:false,eff:2}, end:{suit:false,eff:2}, risk:3, joints:{wrist:2,elbow:3,shoulder:3,neck:3,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:2,groin:0,ankle:0,foot:1}, technique:4, mobility:2, strength:4, kcalPerRep:[0.40, 0.71], desc:"A typewriter movement performed in pike position — at the bottom of the pike push-up, shift the head laterally toward one hand while extending the opposite arm. Combines the unilateral shoulder loading of the typewriter with the shoulder-dominant angle of the pike.", cues:"Keep hips high throughout the lateral shift. The extended arm stays on the floor for balance.", equipment:"None", position:"Inverted", youtube:"LINK_TODO"},

  {id:47, name:"Sphinx Push-Up", alt:"Cobra Push-Up", muscles:[{n:"Triceps",p:true},{n:"Shoulders",p:true},{n:"Chest",p:false},{n:"Core",p:false}], tags:["triceps","shoulders","chest","core"], diff:4, str:{suit:true,eff:3}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:2, joints:{wrist:1,elbow:4,shoulder:2,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:2,si:1,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:2, strength:2, kcalPerRep:[0.16, 0.29], desc:"Starts in a sphinx position (forearms flat on the floor). Press up to straight arms by extending at the elbows, then lower back down with control. Slower and more controlled than the tiger bend — emphasises triceps isolation and spinal extension awareness.", cues:"Keep hips on or close to the floor throughout. This is not a full body press — isolate the arms.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:48, name:"Uneven Push-Up (Elevated surface (block / plate))", alt:"Offset Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders","core"], diff:4, str:{suit:true,eff:3}, vol:{suit:true,eff:3}, end:{suit:true,eff:3}, risk:2, joints:{wrist:2,elbow:3,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:1, strength:2, kcalPerRep:[0.16, 0.28], desc:"One hand placed on an elevated surface (yoga block, book, weight plate) while the other stays on the floor. The lower-side arm handles a greater share of the load. Useful for identifying and correcting unilateral strength imbalances.", cues:"Alternate which hand is elevated between sets. The height of the surface controls how uneven the load is.", equipment:"Elevated surface (block / plate)", position:"Prone", youtube:"LINK_TODO"},

  {id:49, name:"Medicine Ball Push-Up", alt:"Ball Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:true},{n:"Core",p:true}], tags:["chest","triceps","shoulders","core"], diff:6, str:{suit:true,eff:4}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:3, joints:{wrist:3,elbow:3,shoulder:3,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:1, strength:3, kcalPerRep:[0.19, 0.35], desc:"Both hands placed on a single medicine ball. The unstable, narrow base demands constant stabilisation from the wrists, shoulders, and core throughout every rep. Significantly harder than a standard push-up despite the same pressing motion.", cues:"Use a non-slip medicine ball. Start with hands on top and progress to a slightly forward position as stability improves.", equipment:"Medicine ball", position:"Prone", youtube:"LINK_TODO"},

  {id:50, name:"Bulgarian Push-Up (Elevated surface)", alt:"Bulgarian Split Push-Up", muscles:[{n:"Chest",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:false},{n:"Core",p:true}], tags:["chest","shoulders","triceps","core"], diff:6, str:{suit:true,eff:4}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:3, joints:{wrist:2,elbow:3,shoulder:2,neck:2,lowerBack:2,knee:1,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:1,foot:1}, technique:3, mobility:2, strength:3, kcalPerRep:[0.21, 0.38], desc:"Feet elevated on a bench with one hand placed forward and one back (staggered), combining the uneven loading of the stagger push-up with the upper-chest emphasis of the decline angle. Each side is trained in a different mechanical position simultaneously.", cues:"Keep the core braced against the rotational pull from the asymmetric hand placement.", equipment:"Elevated surface", position:"Prone", youtube:"LINK_TODO"},

  {id:51, name:"Chest-to-Bar Push-Up", alt:"Full ROM Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:3.9, str:{suit:true,eff:3}, vol:{suit:true,eff:4}, end:{suit:true,eff:4}, risk:2, joints:{wrist:1,elbow:2,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:1, strength:2, kcalPerRep:[0.15, 0.26], desc:"A standard push-up performed with a full range of motion — chest makes deliberate contact with the floor on every rep. Ensures complete pectoral stretch at the bottom and removes the tendency to cut depth short under fatigue.", cues:"Don't bounce off the floor. Touch and pause briefly before pressing.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:52, name:"Tempo Push-Up", alt:"Slow Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders","core"], diff:4, str:{suit:true,eff:4}, vol:{suit:true,eff:4}, end:{suit:false,eff:2}, risk:1, joints:{wrist:1,elbow:3,shoulder:1,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:1, strength:3, kcalPerRep:[0.37, 0.66], desc:"A push-up performed with a controlled tempo — typically a 3–4 second descent, 1 second pause at the bottom, and an explosive concentric press. Increases time under tension and eliminates momentum, making any given rep count significantly harder.", cues:"Count the seconds out loud or in your head. The moment you rush the descent, the set is over.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:53, name:"Band-Resisted Push-Up (Resistance band)", alt:"Banded Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:5, str:{suit:true,eff:4}, vol:{suit:true,eff:4}, end:{suit:false,eff:2}, risk:2, joints:{wrist:1,elbow:3,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:1, strength:3, kcalPerRep:[0.19, 0.35], desc:"A resistance band is looped across the upper back and anchored under both hands. The band provides accommodating resistance — lightest at the bottom, heaviest at lockout — matching the strength curve of the pressing motion.", cues:"Anchor the band symmetrically so it doesn't shift mid-rep. Heavier band = more lockout demand.", equipment:"Resistance band", position:"Prone", youtube:"LINK_TODO"},

  {id:54, name:"Push-Up (Resistance band + anchor point)", alt:"Assisted Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:1, str:{suit:false,eff:1}, vol:{suit:true,eff:2}, end:{suit:true,eff:3}, risk:1, joints:{wrist:1,elbow:1,shoulder:1,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:1, mobility:1, strength:1, kcalPerRep:[0.07, 0.13], desc:"A band is anchored above and looped under the chest, providing upward assistance throughout the movement. Reduces effective bodyweight load — used for beginners building toward their first full push-up, or during rehabilitation.", cues:"Use the minimum assistance needed. Reduce band tension as strength improves.", equipment:"Resistance band + anchor point", position:"Prone", youtube:"LINK_TODO"},

  {id:55, name:"Parallette Push-Up (Parallettes)", alt:"P-Bar Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders","core"], diff:3, str:{suit:true,eff:3}, vol:{suit:true,eff:4}, end:{suit:true,eff:3}, risk:1, joints:{wrist:1,elbow:2,shoulder:1,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:1, mobility:1, strength:2, kcalPerRep:[0.15, 0.26], desc:"Performed on parallettes, keeping the wrists in a neutral position rather than extended. Allows greater depth than the floor and removes wrist extension stress entirely. The preferred surface for those with wrist pain during standard push-ups.", cues:"Set parallettes shoulder-width apart. Sink as deep as comfortable — the extra depth is the point.", equipment:"Parallettes", position:"Prone", youtube:"LINK_TODO"},

  {id:56, name:"Hollow Body Push-Up", alt:"Hollow Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:4, str:{suit:true,eff:3}, vol:{suit:true,eff:3}, end:{suit:true,eff:3}, risk:1, joints:{wrist:1,elbow:2,shoulder:1,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:1, strength:2, kcalPerRep:[0.16, 0.28], desc:"A push-up performed while maintaining a strict hollow body position — posterior pelvic tilt, ribs pulled down, glutes squeezed, legs together and tight. The hollow position transfers directly to gymnastics pressing skills and eliminates lumbar hyperextension compensation.", cues:"Tilt the pelvis back before the first rep and hold it the entire set. If the lower back arches, the hollow is lost.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:57, name:"Frog Push-Up", alt:"Frog Stance Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:3, str:{suit:false,eff:2}, vol:{suit:true,eff:3}, end:{suit:true,eff:4}, risk:1, joints:{wrist:1,elbow:2,shoulder:1,neck:1,lowerBack:1,knee:1,fingers:0,thoracic:1,si:0,hip:2,groin:1,ankle:0,foot:0}, technique:1, mobility:2, strength:2, kcalPerRep:[0.13, 0.24], desc:"Performed with knees bent and spread out to the sides in a frog position, feet off the floor. The lower body is compact and off the ground, shifting the balance point forward slightly. Common in yoga and calisthenics flow work.", cues:"Keep knees wide and relaxed. The frog position is not load-bearing — focus entirely on the press.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:58, name:"Around the World Push-Up", alt:"Circular Push-Up", muscles:[{n:"Chest",p:true},{n:"Shoulders",p:false},{n:"Triceps",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders","core"], diff:4.3, str:{suit:false,eff:2}, vol:{suit:true,eff:4}, end:{suit:true,eff:4}, risk:2, joints:{wrist:2,elbow:2,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:2, strength:2, kcalPerRep:[0.29, 0.53], desc:"At the bottom of the push-up, the torso traces a circular arc — dipping to one side, sweeping across the floor, and rising on the other side before pressing back up. The circular path hits the chest from multiple angles within a single rep.", cues:"Keep hips level throughout the arc. The circle should be deliberate and controlled, not sloppy.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:59, name:"One-Arm Negative Push-Up", alt:"One-Arm Eccentric", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:7, str:{suit:true,eff:5}, vol:{suit:false,eff:2}, end:{suit:false,eff:1}, risk:3, joints:{wrist:2,elbow:4,shoulder:3,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:0,foot:1}, technique:4, mobility:1, strength:4, kcalPerRep:[0.41, 0.73], desc:"Press up using both arms, then lower slowly on one arm only. The eccentric phase is performed unilaterally while the concentric uses both. Eccentrics can handle significantly more load than concentrics — a key OAP progression for building the strength to press back up.", cues:"Take 3–5 seconds to lower. Use the two-arm press-up to reset, not to rest.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:60, name:"One-Arm Assisted Push-Up (Medicine ball / yoga block)", alt:"Assisted OAP", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:7, str:{suit:true,eff:5}, vol:{suit:false,eff:2}, end:{suit:false,eff:1}, risk:3, joints:{wrist:2,elbow:4,shoulder:3,neck:1,lowerBack:2,knee:0,fingers:1,thoracic:1,si:1,hip:1,groin:0,ankle:0,foot:1}, technique:4, mobility:1, strength:4, kcalPerRep:[0.26, 0.47], desc:"Full push-up on one arm while the other hand rests fingertips-only on a ball, block, or low surface for minimal balance assistance. The working arm handles nearly all the load. The assistance is reduced progressively until no support is needed.", cues:"Use as little assistance as possible. A single fingertip on the ground is enough — resist the urge to lean into it.", equipment:"Medicine ball / yoga block", position:"Prone", youtube:"LINK_TODO"},

  {id:61, name:"Plyo Push-Up to Box (Box / step / plates)", alt:"Box Jump Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:6.1, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:3, joints:{wrist:2,elbow:3,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:1,foot:1}, technique:4, mobility:1, strength:3, kcalPerRep:[0.25, 0.44], desc:"An explosive push-up where hands leave the floor and land on a raised surface (box, step, plates). Trains the concentric power phase with a defined height target. Can be reversed — starting on the box and exploding down to the floor.", cues:"Box height should allow a clean landing with soft elbows. Start low and increase height as power develops.", equipment:"Box / step / plates", position:"Prone", youtube:"LINK_TODO"},

  {id:62, name:"Deficit Push-Up (Push-up handles / parallettes / plates)", alt:"Deep Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:4, str:{suit:true,eff:4}, vol:{suit:true,eff:4}, end:{suit:false,eff:2}, risk:2, joints:{wrist:2,elbow:3,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:2, strength:2, kcalPerRep:[0.16, 0.28], desc:"Both hands placed on elevated surfaces (push-up handles, parallettes, weight plates, books) so the chest can descend below hand level. The increased range of motion produces a greater pectoral stretch at the bottom than a standard push-up.", cues:"Start with a small deficit (2–4 cm) and increase as shoulder mobility allows. Never force depth.", equipment:"Push-up handles / parallettes / plates", position:"Prone", youtube:"LINK_TODO"},

  {id:63, name:"Feet-Elevated One-Arm Push-Up (Elevated surface)", alt:"Decline OAP", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Shoulders",p:true}], tags:["chest","triceps","core","shoulders"], diff:8.8, hof:false, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:4, joints:{wrist:3,elbow:4,shoulder:4,neck:2,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:1,foot:1}, technique:5, mobility:2, strength:5, kcalPerRep:[0.37, 0.66], desc:"A one-arm push-up with feet elevated on a bench or box. The decline angle shifts more load onto the upper chest and anterior deltoid while all the unilateral core and stability demands of the OAP remain. One of the hardest push-up variations achievable.", cues:"Only attempt after flat one-arm push-ups are consistent and controlled. Feet elevation amplifies every weakness.", equipment:"Elevated surface", position:"Prone", youtube:"LINK_TODO"},

  {id:64, name:"Cruz Push-Up", alt:"Cruz / Alternating Archer", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders","core"], diff:5, str:{suit:true,eff:3}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:2, joints:{wrist:2,elbow:3,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:1,ankle:0,foot:1}, technique:3, mobility:2, strength:3, kcalPerRep:[0.19, 0.35], desc:"Wide hand placement. On each rep, one arm bends to do the work while the other stays fully extended and straight — alternating sides each rep. Unlike the Typewriter push-up (which shifts the torso laterally at the bottom), the Cruz keeps the torso centred and simply alternates which arm bends. The two are often confused but are mechanically distinct.", cues:"Keep the extended arm straight and on the floor throughout. The torso stays square — don't let it drift toward the working arm.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:65, name:"Russian Push-Up", alt:"Forearm-to-Hand Push-Up", muscles:[{n:"Triceps",p:true},{n:"Chest",p:false},{n:"Shoulders",p:true},{n:"Core",p:false}], tags:["triceps","shoulders","chest","core"], diff:4.3, str:{suit:true,eff:3}, vol:{suit:true,eff:4}, end:{suit:true,eff:3}, risk:2, joints:{wrist:1,elbow:3,shoulder:2,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:2, strength:2, kcalPerRep:[0.29, 0.53], desc:"Alternates between a forearm plank and a push-up top position — lower to the forearms one arm at a time, then press back up one arm at a time. A slow, controlled movement that isolates the triceps and challenges shoulder stability through the transition. Related to the tiger bend but performed sequentially rather than explosively.", cues:"Lead with the same arm each set, then switch. Keep hips level throughout — they will want to rotate.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:66, name:"Bosu Ball Push-Up", alt:"Bosu Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:true},{n:"Core",p:true}], tags:["chest","triceps","shoulders","core"], diff:5.3, str:{suit:true,eff:3}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:3, joints:{wrist:3,elbow:3,shoulder:3,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:1, strength:2, kcalPerRep:[0.19, 0.35], desc:"Both hands placed on the dome side of a Bosu ball. The curved unstable surface demands constant wrist, shoulder, and core stabilisation on every rep. Can also be performed dome-side down (flat side up) for a different and more extreme instability challenge.", cues:"Dome-side up is the standard starting point. Flat-side up is significantly harder — only attempt once dome-side is controlled.", equipment:"Bosu ball", position:"Prone", youtube:"LINK_TODO"},

  {id:67, name:"Push-Up with Rotation", alt:"Rotational Push-Up", muscles:[{n:"Chest",p:true},{n:"Core",p:true},{n:"Obliques",p:true},{n:"Shoulders",p:false}], tags:["chest","core","shoulders"], diff:4, str:{suit:false,eff:2}, vol:{suit:true,eff:3}, end:{suit:true,eff:3}, risk:2, joints:{wrist:1,elbow:2,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:2,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:2, strength:2, kcalPerRep:[0.23, 0.42], desc:"At the top of each push-up, the body rotates into a full side plank with the top arm reaching directly toward the ceiling. The rotation is the primary focus of the movement, not incidental — distinguishing it from the T push-up where the arm raise is secondary. Alternating sides each rep.", cues:"Fully commit to the rotation — stack the hips and reach the arm straight up. A half-rotation defeats the purpose.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:68, name:"Muay Thai Push-Up", alt:"Thai Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:4, str:{suit:true,eff:3}, vol:{suit:true,eff:4}, end:{suit:true,eff:3}, risk:2, joints:{wrist:2,elbow:2,shoulder:1,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:2, mobility:2, strength:2, kcalPerRep:[0.16, 0.28], desc:"As you descend, the wrists rotate inward so the forearms nearly touch the floor at the bottom — elbows flare out wide rather than tracking back. Common in Muay Thai conditioning. Emphasises the outer chest and places the wrists through a rotational range not seen in standard push-ups.", cues:"The wrist rotation should be smooth and controlled. Stop if sharp wrist discomfort occurs.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:69, name:"Capoeira Push-Up", alt:"Ginga Push-Up", muscles:[{n:"Chest",p:true},{n:"Shoulders",p:true},{n:"Core",p:true},{n:"Triceps",p:false}], tags:["chest","shoulders","core"], diff:6, str:{suit:true,eff:3}, vol:{suit:false,eff:2}, end:{suit:false,eff:2}, risk:3, joints:{wrist:2,elbow:3,shoulder:2,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:2,groin:2,ankle:0,foot:1}, technique:4, mobility:3, strength:3, kcalPerRep:[0.23, 0.41], desc:"Performed with one arm as the base while the legs are in a wide, low ginga-like stance from Brazilian capoeira. The single-arm base and wide asymmetric leg position create an unusual load distribution and demand significant lateral core stability.", cues:"The wide leg stance is load-bearing — keep it active. Don't let the hips drop toward the floor.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:70, name:"Hindu Knuckle Push-Up", alt:"Dand Knuckle", muscles:[{n:"Shoulders",p:true},{n:"Chest",p:false},{n:"Back",p:false},{n:"Core",p:false}], tags:["chest","shoulders","triceps","back","core"], diff:5.0, str:{suit:false,eff:3}, vol:{suit:true,eff:4}, end:{suit:true,eff:4}, risk:2, joints:{wrist:1,elbow:2,shoulder:2,neck:2,lowerBack:2,knee:0,fingers:0,thoracic:3,si:1,hip:2,groin:0,ankle:0,foot:1}, technique:3, mobility:3, strength:2, kcalPerRep:[0.26, 0.46], desc:"A Hindu push-up performed on closed fists instead of open palms. Combines the wrist-neutral benefit of knuckle push-ups with the full-body flowing demand of the Hindu. The knuckle base also slightly increases the range of motion at the bottom of the sweep.", cues:"Flow as smoothly as the standard Hindu — the fists change the base, not the movement pattern.", equipment:"None (mat recommended)", position:"Dynamic", youtube:"LINK_TODO"},

  {id:72, name:"Tricep Extension Push-Up", alt:"Skull-Crusher Push-Up", muscles:[{n:"Triceps",p:true},{n:"Chest",p:false},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["triceps","chest","shoulders"], diff:5, str:{suit:true,eff:4}, vol:{suit:true,eff:4}, end:{suit:false,eff:2}, risk:2, joints:{wrist:1,elbow:5,shoulder:1,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:1, strength:3, kcalPerRep:[0.21, 0.38], desc:"Hands close together, elbows point straight back toward the feet. Lower by bending only at the elbows — forearms skim the floor — then extend back up. The motion mirrors a skull-crusher or lying tricep extension. Near-zero chest involvement.", cues:"Keep upper arms fixed and vertical throughout. Only the forearms move — if the elbows flare, it becomes a regular push-up.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:73, name:"Sliding Push-Up (Sliders / smooth floor + socks)", alt:"Slider Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:true},{n:"Core",p:true}], tags:["chest","shoulders","triceps","core"], diff:6, str:{suit:true,eff:4}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:3, joints:{wrist:2,elbow:3,shoulder:3,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:1,ankle:0,foot:1}, technique:3, mobility:2, strength:3, kcalPerRep:[0.30, 0.55], desc:"One or both hands placed on sliders, socks, or a smooth surface. Allows the hands to travel dynamically during the rep — sliding wide as you descend and back in as you press. The dynamic range change increases pectoral stretch and demands continuous shoulder stability throughout.", cues:"Start with one sliding hand and one fixed. Both hands sliding simultaneously is significantly harder.", equipment:"Sliders / smooth floor + socks", position:"Prone", youtube:"LINK_TODO"},

  {id:74, name:"Suspended Push-Up (TRX / suspension trainer)", alt:"TRX Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:true},{n:"Core",p:true}], tags:["chest","triceps","shoulders","core"], diff:6, str:{suit:true,eff:4}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:3, joints:{wrist:2,elbow:3,shoulder:3,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:1, strength:3, kcalPerRep:[0.23, 0.41], desc:"Hands in suspension trainer handles (TRX or similar) set low. The instability comes from below — handles swing both side-to-side and front-to-back. Every stabilising muscle in the shoulder girdle and core is engaged continuously. Difficulty increases significantly as handles are set lower.", cues:"Keep handles from swinging by actively pressing them apart. The more horizontal the body, the harder.", equipment:"TRX / suspension trainer", position:"Prone", youtube:"LINK_TODO"},

  /* ── NEW ADDITIONS ───────────────────────────────────────────── */
  // Push-ups only — no holds, no handstands (own category), no combo moves

  {id:78, name:"Archer Push-Up — Elevated (Push-up handles / parallettes)", alt:"Deficit Archer", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Back",p:false},{n:"Core",p:false}], tags:["chest","triceps","back","core"], diff:7, str:{suit:true,eff:5}, vol:{suit:true,eff:3}, end:{suit:false,eff:1}, risk:3, joints:{wrist:2,elbow:3,shoulder:3,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:1,ankle:0,foot:1}, technique:4, mobility:2, strength:4, kcalPerRep:[0.26, 0.47], desc:"An archer push-up with each hand on an elevated surface (push-up handles, parallettes, or books) allowing the chest to descend significantly below hand level on the working side. Combines unilateral loading with increased pectoral stretch.", cues:"Handles must be stable. Descent is limited by shoulder mobility — don't force depth.", equipment:"Push-up handles / parallettes", position:"Prone", youtube:"LINK_TODO"},

  {id:79, name:"Explosive One-Arm Push-Up", alt:"Plyo OAP", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:9.1, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:4, joints:{wrist:3,elbow:4,shoulder:4,neck:1,lowerBack:3,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:1,foot:1}, technique:5, mobility:2, strength:5, kcalPerRep:[0.37, 0.66], desc:"A one-arm push-up where the working hand leaves the floor at the top of the press — fully airborne on a single arm. The peak of unilateral pressing power. Requires a rock-solid OAP as a foundation before any explosive work is added.", cues:"A strict, controlled OAP at 5+ reps is the minimum prerequisite. Do not rush the progression.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:127, name:"Archer Push-Up — Ring (Gymnastic rings)", alt:"Ring Archer Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:true},{n:"Core",p:true}], tags:["chest","shoulders","core","triceps"], diff:7, str:{suit:true,eff:5}, vol:{suit:false,eff:2}, end:{suit:false,eff:1}, risk:3, joints:{wrist:2,elbow:3,shoulder:3,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:1,ankle:0,foot:1}, technique:4, mobility:2, strength:4, kcalPerRep:[0.30, 0.54], desc:"An archer push-up performed on gymnastic rings. Wide hand placement; lower toward one ring while extending the opposite arm straight. The rings introduce rotational instability on top of the existing unilateral load — the working ring wants to swing inward under the pressing force, and the extended ring wants to drift outward. Both must be actively controlled throughout the rep. The direct prerequisite to the Ring Typewriter Push-Up and a significant progression over the ground-based archer.", cues:"Master the floor archer push-up before adding rings. Keep both rings parallel and still — any swing means tension was lost. The extended arm must resist the ring drifting outward actively.", equipment:"Gymnastic rings", position:"Prone", youtube:"LINK_TODO"},

  {id:81, name:"Typewriter Push-Up — Ring (Gymnastic rings)", alt:"Ring Typewriter", muscles:[{n:"Chest",p:true},{n:"Shoulders",p:true},{n:"Core",p:true},{n:"Triceps",p:false}], tags:["chest","shoulders","core","triceps"], diff:9.1, str:{suit:true,eff:5}, vol:{suit:false,eff:2}, end:{suit:false,eff:1}, risk:4, joints:{wrist:2,elbow:3,shoulder:4,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:1,ankle:0,foot:1}, technique:5, mobility:2, strength:5, kcalPerRep:[0.44, 0.80], desc:"A typewriter push-up performed on gymnastic rings. The rings must be kept from swinging as the body shifts laterally at the bottom — adding a rotational instability that ground-based typewriter push-ups do not have.", cues:"Master the ring archer push-up before attempting this. Ring control is the primary challenge.", equipment:"Gymnastic rings", position:"Prone", youtube:"LINK_TODO"},

  {id:82, name:"Pike Push-Up — Parallette (Parallettes)", alt:"Parallette Pike", muscles:[{n:"Shoulders",p:true},{n:"Triceps",p:true},{n:"Upper Chest",p:false}], tags:["shoulders","triceps","core"], diff:5, str:{suit:true,eff:4}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:2, joints:{wrist:1,elbow:2,shoulder:3,neck:3,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:2,groin:0,ankle:0,foot:1}, technique:3, mobility:2, strength:3, kcalPerRep:[0.21, 0.38], desc:"A pike push-up performed on parallettes, allowing the head to descend further below hand level than a floor pike. Substantially increases the overhead range of motion and shoulder pressing demand. A key step between floor pike push-ups and wall handstand push-ups.", cues:"Keep hips high and walk feet in close to increase the angle. Depth is limited by shoulder mobility.", equipment:"Parallettes", position:"Inverted", youtube:"LINK_TODO"},

  {id:83, name:"Plyometric Ring Push-Up (Gymnastic rings)", alt:"Explosive Ring Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:true},{n:"Core",p:true}], tags:["chest","triceps","shoulders","core"], diff:8, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:4, joints:{wrist:3,elbow:3,shoulder:4,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:1,foot:1}, technique:5, mobility:2, strength:4, kcalPerRep:[0.33, 0.60], desc:"An explosive push-up on gymnastic rings where both hands leave the rings at the peak of the press. The rings swing unpredictably on landing — demanding immediate re-stabilisation. The instability makes this significantly harder than a floor clap push-up.", cues:"Set rings very low. Control the swing on every landing — failing to do so sends the rings outward.", equipment:"Gymnastic rings", position:"Prone", youtube:"LINK_TODO"},

  {id:84, name:"Cuban Push-Up", alt:"Arm-Curl Push-Up", muscles:[{n:"Shoulders",p:true},{n:"Triceps",p:true},{n:"Chest",p:false},{n:"Core",p:false}], tags:["shoulders","triceps","core"], diff:4.1, str:{suit:true,eff:3}, vol:{suit:true,eff:4}, end:{suit:true,eff:4}, risk:2, joints:{wrist:1,elbow:2,shoulder:2,neck:2,lowerBack:2,knee:0,fingers:0,thoracic:3,si:1,hip:2,groin:0,ankle:0,foot:1}, technique:2, mobility:3, strength:2, kcalPerRep:[0.26, 0.47], desc:"Starting prone on the floor, pull the body up into upward-dog by contracting the back, then press up to straight arms from there. A hybrid pulling-into-pressing movement used in wrestling and Lucha Libre conditioning. Trains the full upper-body arc.", cues:"The pull from the floor initiates the movement — don't skip it by starting at the upward-dog position.", equipment:"None", position:"Dynamic", youtube:"LINK_TODO"},

  {id:85, name:"Staggered Planche Push-Up (Parallettes (recommended))", alt:"Half-Planche", muscles:[{n:"Chest",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Back",p:false}], tags:["chest","shoulders","triceps","core","back"], diff:9.8, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:5, joints:{wrist:4,elbow:3,shoulder:4,neck:1,lowerBack:3,knee:0,fingers:0,thoracic:2,si:2,hip:3,groin:1,ankle:0,foot:0}, technique:5, mobility:3, strength:5, kcalPerRep:[0.39, 0.69], desc:"One hand in standard push-up position and the other in planche position (beside the hip, fingers back). The asymmetric setup creates a gradient between a normal push-up and a full planche — more accessible than the full planche but far beyond the standard pressing spectrum.", cues:"Alternate which hand is in planche position between sets. Wrist conditioning is mandatory before loading this pattern.", equipment:"Parallettes (recommended)", position:"Elevated", youtube:"LINK_TODO"},

  {id:86, name:"Ab-Wheel Push-Up (Ab wheel)", alt:"Ab Roller Push-Up", muscles:[{n:"Chest",p:true},{n:"Core",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:7, str:{suit:true,eff:4}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:4, joints:{wrist:2,elbow:3,shoulder:3,neck:1,lowerBack:3,knee:0,fingers:0,thoracic:2,si:1,hip:1,groin:0,ankle:0,foot:1}, technique:4, mobility:2, strength:3, kcalPerRep:[0.33, 0.59], desc:"Performed with hands on an ab wheel. The wheel rolls slightly with every rep, demanding continuous stabilisation against forward and lateral drift. Simultaneously challenges the anti-extension core under a pressing load — something no standard push-up variation achieves.", cues:"Keep the wheel from rolling forward during the descent. If it drifts, the lower back immediately follows.", equipment:"Ab wheel", position:"Prone", youtube:"LINK_TODO"},

  {id:87, name:"Crossed-Arm Push-Up", alt:"Cross-Arm Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:false},{n:"Shoulders",p:false},{n:"Core",p:true}], tags:["chest","triceps","core"], diff:5.9, str:{suit:true,eff:3}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:3, joints:{wrist:2,elbow:3,shoulder:2,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:0,foot:1}, technique:3, mobility:2, strength:3, kcalPerRep:[0.18, 0.32], desc:"Arms crossed at the wrists so each hand is on the opposite side of the body. The crossed position alters the leverage angle and forces an unusual pectoral recruitment pattern. Requires wrist and shoulder flexibility uncommon in beginners.", cues:"Start slowly — the wrist load from the crossed angle is unfamiliar. Warm up thoroughly.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:88, name:"Hindu Push-Up — Fingertip", alt:"Fingertip Dand", muscles:[{n:"Shoulders",p:true},{n:"Chest",p:false},{n:"Back",p:false},{n:"Core",p:false}], tags:["chest","shoulders","triceps","back","core"], diff:6.3, str:{suit:false,eff:3}, vol:{suit:true,eff:3}, end:{suit:true,eff:4}, risk:3, joints:{wrist:3,elbow:2,shoulder:2,neck:2,lowerBack:2,knee:0,fingers:4,thoracic:3,si:1,hip:2,groin:0,ankle:0,foot:1}, technique:4, mobility:3, strength:3, kcalPerRep:[0.30, 0.55], desc:"The full Hindu push-up movement performed on extended fingertips rather than palms. Combines the flowing full-body demand of the Hindu with the finger tendon conditioning of fingertip push-ups. Used in traditional Indian wrestling as an advanced conditioning method.", cues:"Only progress here after fingertip push-ups are well established. The wrist load through the forward sweep is extreme.", equipment:"None", position:"Dynamic", youtube:"LINK_TODO"},

  {id:90, name:"Impossible Push-Up (2 chairs / boxes / benches)", alt:"Between-Chairs Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:true},{n:"Core",p:true}], tags:["chest","triceps","shoulders","core"], diff:7, str:{suit:true,eff:4}, vol:{suit:true,eff:3}, end:{suit:false,eff:2}, risk:4, joints:{wrist:2,elbow:3,shoulder:4,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:0,foot:1}, technique:4, mobility:3, strength:3, kcalPerRep:[0.25, 0.44], desc:"Performed suspended between two chairs or boxes — one hand on each surface with a gap in between. The body descends below the level of the supports, generating a much greater pectoral and anterior deltoid stretch than any floor variation. Named for its visual difficulty, not its training inaccessibility.", cues:"Use stable, equally-height chairs. Shoulder flexibility is the limiting factor — stop when stretch becomes sharp.", equipment:"2 chairs / boxes / benches", position:"Prone", youtube:"LINK_TODO"},

  {id:92, name:"Tuck OAP", alt:"Knees-Tucked One-Arm", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:7, str:{suit:true,eff:4}, vol:{suit:false,eff:2}, end:{suit:false,eff:1}, risk:3, joints:{wrist:2,elbow:3,shoulder:3,neck:1,lowerBack:2,knee:1,fingers:0,thoracic:1,si:1,hip:2,groin:0,ankle:0,foot:0}, technique:4, mobility:1, strength:4, kcalPerRep:[0.23, 0.41], desc:"A one-arm push-up with both knees bent and on the floor, reducing the lever arm. Allows focus on unilateral pressing strength before adding the full-body stability demand of the standard OAP. The most accessible OAP progression from knee push-ups.", cues:"Keep the non-working arm tucked behind the back. The knees are a step — remove them as soon as pressing strength allows.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:93, name:"Wide-Stance OAP", alt:"Wide-Leg One-Arm", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:7.1, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:3, joints:{wrist:3,elbow:4,shoulder:3,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:1,ankle:0,foot:1}, technique:4, mobility:1, strength:4, kcalPerRep:[0.30, 0.54], desc:"One-arm push-up with feet spread wide — often shoulder-width or beyond. The wide stance reduces the rotational core demand and lowers the balance threshold, making the pressing strength the primary challenge. A natural intermediate between the tuck OAP and the strict narrow-stance OAP.", cues:"Start feet wider than you think necessary. Bring them together gradually — each inch inward is a significant difficulty increase.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:94, name:"Clapping Archer Push-Up", alt:"Plyo Archer", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}], tags:["chest","triceps","shoulders"], diff:8, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:3, joints:{wrist:2,elbow:3,shoulder:3,neck:1,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:1,ankle:1,foot:1}, technique:5, mobility:1, strength:4, kcalPerRep:[0.30, 0.54], desc:"An archer push-up performed explosively so the working arm leaves the floor at the top of the press. The body is briefly airborne on one side before landing in the wide archer position for the opposite side. A plyometric bridge between the archer and the explosive OAP.", cues:"Master controlled archer push-ups first. The landing must be absorbed with soft elbows — don't lock out on impact.", equipment:"None", position:"Prone", youtube:"LINK_TODO"},

  {id:95, name:"Decline Diamond Push-Up (Elevated surface)", alt:"Feet-Elevated Diamond", muscles:[{n:"Triceps",p:true},{n:"Upper Chest",p:true},{n:"Shoulders",p:false}], tags:["triceps","chest","shoulders"], diff:5, str:{suit:true,eff:4}, vol:{suit:true,eff:4}, end:{suit:false,eff:2}, risk:2, joints:{wrist:2,elbow:4,shoulder:2,neck:2,lowerBack:1,knee:0,fingers:0,thoracic:1,si:0,hip:1,groin:0,ankle:1,foot:1}, technique:2, mobility:1, strength:3, kcalPerRep:[0.19, 0.35], desc:"A diamond push-up with feet elevated on a bench or step. Combines the upper chest shift of the decline angle with the maximum triceps isolation of the diamond hand position. Significantly increases triceps and front deltoid demand over a standard diamond push-up.", cues:"Keep elbows tracking directly backward — flaring outward removes the triceps isolation.", equipment:"Elevated surface", position:"Prone", youtube:"LINK_TODO"},

  {id:98, name:"Knuckle OAP", alt:"Fist One-Arm Push-Up", muscles:[{n:"Chest",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Shoulders",p:false}], tags:["chest","triceps","core","shoulders"], diff:9, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:4, joints:{wrist:2,elbow:4,shoulder:3,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:1,groin:0,ankle:0,foot:1}, technique:5, mobility:1, strength:5, kcalPerRep:[0.33, 0.60], desc:"A full one-arm push-up performed on the closed fist, keeping the wrist neutral throughout. Combines the wrist-joint benefits of knuckle push-ups with the full unilateral demand of the OAP. Common in advanced martial arts conditioning where wrist integrity is paramount.", cues:"Align the knuckles of the index and middle finger. The neutral wrist is the point — don't let it collapse.", equipment:"None (mat recommended)", position:"Prone", youtube:"LINK_TODO"},

  {id:99, name:"Planche Push-Up — Tuck to Straddle (Parallettes / floor)", alt:"Tuck-Straddle Planche", muscles:[{n:"Chest",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:true},{n:"Core",p:true},{n:"Back",p:false}], tags:["chest","shoulders","triceps","core","back"], diff:9.7, str:{suit:true,eff:5}, vol:{suit:false,eff:1}, end:{suit:false,eff:1}, risk:5, joints:{wrist:4,elbow:3,shoulder:4,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:2,si:2,hip:4,groin:2,ankle:0,foot:0}, technique:5, mobility:2, strength:5, kcalPerRep:[0.54, 0.97], desc:"Begins with a tuck planche push-up and extends the legs out to straddle at the top of each rep before tucking back in for the descent. Integrates two planche positions within a single rep, building the hip flexor and core control needed to transition between planche stages under load.", cues:"The extension to straddle happens at lockout only — do not open the legs during the pressing phase.", equipment:"Parallettes / floor", position:"Elevated", youtube:"LINK_TODO"},

  {id:100, name:"Pseudo Planche Push-Up — Ring (Gymnastic rings)", alt:"Ring Pseudo Planche", muscles:[{n:"Chest",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:false},{n:"Core",p:false}], tags:["chest","shoulders","triceps","core"], diff:9.1, str:{suit:true,eff:5}, vol:{suit:false,eff:2}, end:{suit:false,eff:1}, risk:4, joints:{wrist:3,elbow:3,shoulder:4,neck:1,lowerBack:2,knee:0,fingers:0,thoracic:1,si:1,hip:2,groin:0,ankle:0,foot:1}, technique:5, mobility:2, strength:5, kcalPerRep:[0.33, 0.60], desc:"A pseudo planche push-up (forward lean, hands at hip level, fingers back) performed on gymnastic rings. The rings add instability to an already extremely demanding wrist and shoulder position. A key progression for athletes bridging pseudo planche to tuck planche work.", cues:"Master the floor pseudo planche push-up first — the ring version amplifies every weakness immediately.", equipment:"Gymnastic rings", position:"Prone", youtube:"LINK_TODO"},
  /* ── ADDED VARIATIONS ───────────────────────────────────────── */
  {
    id: 102,
    name: "Knee Push-Up",
    alt: "Modified Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 1.8,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {wrist:1, elbow:2, shoulder:1, neck:1, lowerBack:1, knee:1, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.09, 0.16],
    desc: "A standard push-up performed from the knees instead of the toes. The knees act as the pivot point, reducing the proportion of bodyweight being pressed. The most widely taught beginner regression and the primary stepping stone between the Low Incline Push-Up and the full floor push-up.",
    cues: "Keep hips in line with the torso — don't let them shoot up or sag. Cross the ankles to keep the lower body stable.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 103,
    name: "Hand-Release Push-Up",
    alt: "Army Push-Up / ACFT Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 3,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {wrist:1, elbow:2, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.21, 0.38],
    desc: "At the bottom of each rep both hands briefly lift off the floor — breaking contact entirely — before pressing back up. Eliminates the stretch-shortening reflex and forces a pure concentric press from a true dead stop. Also known as the Army Push-Up or ACFT Push-Up — the official standard of the US Army Combat Fitness Test. These are all the same exercise, just named differently.",
    cues: "The hand lift is momentary — not a rest. Keep the core braced and do not let the hips rise as the hands leave the floor.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 104,
    name: "1.5 Rep Push-Up",
    alt: "One-and-a-Half Rep Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Shoulders", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders", "core"],
    diff: 3.3,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:2},
    risk: 1,
    joints: {wrist:1, elbow:3, shoulder:1, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.35, 0.63],
    desc: "Lower to the bottom position, press halfway up, lower back to the bottom again, then press all the way to the top — that counts as one rep. The double visit to the bottom doubles time under tension in the stretched position and removes the elastic bounce, making a given rep count substantially harder without adding weight or instability.",
    cues: "The halfway point is the sticking point — don't rush through it. Maintain full body tension on both descents.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 105,
    name: "Incline One-Arm Push-Up (Elevated surface)",
    alt: "Hands-Elevated OAP",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 7,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {wrist:2, elbow:3, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:0, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 4,
    mobility: 1,
    strength: 4,
    kcalPerRep: [0.28, 0.5],
    desc: "A one-arm push-up with the working hand on an elevated surface — bench, step, or box. The incline angle reduces the effective load, bridging the gap between the One-Arm Assisted Push-Up and the standard flat One-Arm Push-Up. The higher the surface the easier — the inverse of the Feet-Elevated One-Arm Push-Up.",
    cues: "Use the same body rotation control as the flat OAP. Lower the surface height gradually as pressing strength develops.",
    equipment: "Elevated surface",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 106,
    name: "3-Finger Push-Up",
    alt: "Three-Finger Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 6,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:2},
    risk: 4,
    joints: {wrist:3, elbow:2, shoulder:3, neck:1, lowerBack:1, knee:0, fingers:3, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 3,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.15, 0.26],
    desc: "Performed on the index, middle, and ring fingers only — the pinky raised off the floor. The direct intermediate between the Fingertip Push-Up  and the 2-Finger Push-Up  in the bilateral finger-reduction progression. A standard progression in traditional Indian wrestling (kushti) and Japanese martial arts conditioning, where tendon strength is built by removing one finger at a time.",
    cues: "Train the Fingertip Push-Up until easy before progressing here. Tendon adaptation is slow — never train to failure.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 111,
    name: "2-Finger Push-Up",
    alt: "Two-Finger Push-Up · index-middle push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 8,
    hof: true,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:2, shoulder:3, neck:1, lowerBack:1, knee:0, fingers:4, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 4,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.18, 0.32],
    desc: "A push-up performed on two fingers per hand — typically the index and middle finger — with the remaining fingers raised off the floor. The entire bodyweight load transfers through four finger joints, placing extreme tensile stress on the finger flexor tendons. The penultimate step in the finger-reduction progression: Fingertip → 3-Finger → 2-Finger → 1-Finger. The pressing mechanics are unchanged from the standard push-up; finger tendon capacity is the sole limiting factor. Documented extensively in traditional martial arts conditioning.",
    cues: "The 3-Finger Push-Up must be fully mastered before attempting. Build static holds on two fingers before adding any pressing motion. Never train to failure — finger tendon recovery from overload injury is extremely slow.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  }, /* ── WEIGHTED PUSH-UP — BODYWEIGHT % TIERS ─────────────────── */{
    id: 112,
    name: "Elbow Lever Push-Up (Parallettes / floor)",
    alt: "Elbow Lever Press",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Chest", p:false}
    ],
    tags: ["shoulders", "triceps", "core", "chest"],
    diff: 7.4,
    hof: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:4, shoulder:4, neck:1, lowerBack:3, knee:0, fingers:0, thoracic:2, si:2, hip:4, groin:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.56, 1.01],
    desc: "Performed while maintaining a full elbow lever — body horizontal, balanced on both elbows pressed into the lateral abdomen, legs locked straight. From the lever position, the athlete lowers by bending the elbows and presses back up while keeping the body parallel to the floor throughout. The simultaneous demand of the lever balance and the pressing motion makes this one of the most technically demanding push-up variations in existence. Requires a solid static elbow lever hold before any pressing is attempted.",
    cues: "The lever position must be stable and effortless before adding any pressing range. Start with partial range of motion — even a few centimetres of controlled descent is meaningful progress. Parallettes prevent wrist deviation and are strongly preferred.",
    equipment: "Parallettes / floor",
    position: "Elevated",
    youtube: "LINK_TODO"
  },

  {
    id: 113,
    name: "Ring Pike Push-Up (Gymnastic rings)",
    alt: "Gymnastic Ring Pike Push-Up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:false}
    ],
    tags: ["shoulders", "triceps", "core"],
    diff: 7,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {wrist:2, elbow:3, shoulder:3, neck:2, lowerBack:1, knee:0, fingers:0, thoracic:1, si:0, hip:2, groin:0, ankle:0, foot:1},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.26, 0.47],
    desc: "A pike push-up performed on gymnastic rings set low to the floor. Hips high in an inverted V, feet on the floor, hands on the rings. The rings introduce instability into an already shoulder-demanding movement — the stabiliser recruitment required to keep the rings from swinging outward significantly increases anterior deltoid and rotator cuff demand. A key progression for athletes building toward ring handstand push-ups.",
    cues: "Keep the rings close together and parallel throughout. Turn the rings out slightly at lockout. The rings will want to flare — resist them actively.",
    equipment: "Gymnastic rings",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 114,
    name: "Crab Push-Up",
    alt: "Reverse Push-Up",
    muscles: [
      {n:"Triceps", p:true},
      {n:"Shoulders", p:false},
      {n:"Chest", p:false}
    ],
    tags: ["triceps", "shoulders", "chest"],
    diff: 4.6,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {wrist:3, elbow:3, shoulder:2, neck:1, lowerBack:1, knee:0, fingers:0, thoracic:1, si:1, hip:2, groin:0, ankle:1, foot:1},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.14, 0.25],
    desc: "Performed in the crab position — face up, hands on the floor behind the body with fingers pointing toward the feet, hips lifted. Lower the hips toward the floor by bending the elbows, then press back up. The reversed hand position loads the wrist into extension in the opposite direction to a standard push-up and strongly targets the triceps. A useful antagonist movement to balance the wrist extensor stress accumulated from standard pushing work.",
    cues: "Warm up wrists thoroughly before attempting — the reverse wrist load is unfamiliar for most athletes. Stop immediately if sharp wrist pain occurs. Fingers can point slightly outward to reduce wrist stress.",
    equipment: "None",
    position: "Supine",
    youtube: "LINK_TODO"
  },

  {
    id: 116,
    name: "One-Arm Clap Push-Up",
    alt: "1-Arm Clap Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 8.7,
    hof: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {wrist:3, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:0, thoracic:1, si:1, hip:1, groin:0, ankle:1, foot:1},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.39, 0.69],
    desc: "An explosive one-arm push-up where the working hand leaves the floor at the peak — the free hand claps the airborne hand mid-air before both return to position for the next rep. Combines the full unilateral pressing strength of the one-arm push-up with the explosive power output of the clap push-up. Requires both skills to be deeply trained independently before combining. The landing mechanics on a single arm demand complete control — a failed landing represents significant injury risk.",
    cues: "Both the standard one-arm push-up and the clap push-up must be deeply ingrained before combining them. Drive through the entire palm. Land with a soft elbow — never lock out on impact. Wide feet for stability.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  /* ── STRADDLE / STRICT VARIANTS ─────────────────────────────── */

  {
    id: 118,
    name: "Feet-Elevated One-Arm Push-Up — Straddle (Elevated surface)",
    alt: "Decline OAP Wide-Stance",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:true}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 8.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {wrist:3, elbow:4, shoulder:4, neck:2, lowerBack:2, knee:0, fingers:0, thoracic:1, si:1, hip:1, groin:1, ankle:1, foot:1},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [0.34, 0.61],
    desc: "A one-arm push-up with feet elevated on a bench or box and legs spread wide in a straddle stance. The wide foot placement reduces the rotational core demand compared to the strict narrow-stance version , making the unilateral pressing strength — not anti-rotation — the primary limiter. The decline angle still shifts load heavily onto the upper chest and anterior deltoid. The natural step between the flat straddle OAP and the full feet-elevated strict OAP.",
    cues: "Spread feet wider than you think necessary. Each inch the feet come together is a meaningful difficulty increase. Only attempt after the flat wide-stance OAP is consistent.",
    equipment: "Elevated surface",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  /* ── FINGER-REDUCTION PLANCHE — PANTHEON ────────────────────── */

  {
    id: 128,
    name: "3-Finger Planche Push-Up (Parallettes (mandatory))",
    alt: "Three-Finger Planche Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    hof: true,
    pantheon: true,
    listed: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:3, shoulder:5, neck:1, lowerBack:4, knee:0, fingers:4, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.46, 0.83],
    desc: "A full planche push-up performed on three fingers per hand — index, middle, and ring — with the pinky raised off the surface. The planche position already places the wrist under extreme compressive and rotational load; removing the pinky finger concentrates the entire bodyweight lever through six finger joints with no additional support. The bilateral Planche Push-Up must be thoroughly established and the bilateral 3-Finger Push-Up must be deeply conditioned before any attempt to combine the two. A virtually undocumented training feat — the intersection of two already-extreme disciplines.",
    cues: "Both the full Planche Push-Up and the 3-Finger Push-Up must be mastered independently before any attempt to combine them. Parallettes are mandatory — the wrist cannot sustain the planche angle with finger-only contact on flat ground. Build extended static 3-finger planche holds before adding any pressing range. Never train to failure.",
    equipment: "Parallettes (mandatory)",
    position: "Elevated",
    youtube: "LINK_TODO"
  },

  {
    id: 129,
    name: "2-Finger Planche Push-Up (Parallettes (mandatory))",
    alt: "Two-Finger Planche Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    hof: true,
    pantheon: true,
    listed: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:3, shoulder:5, neck:1, lowerBack:4, knee:0, fingers:5, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.49, 0.88],
    desc: "A full planche push-up performed on two fingers per hand — index and middle only. Full bodyweight in the planche position loads through four finger joints, each bearing the combined compressive force of the planche lever and the pressing motion. Requires years of progressive bilateral finger conditioning through the full 3-Finger → 2-Finger progression alongside planche mastery. No verified performances of this combination are known to exist in documented training records. This entry exists to define the outer boundary of bilateral finger-planche difficulty.",
    cues: "The 3-Finger Planche Push-Up must be fully established before any attempt here. Static 2-finger planche holds on parallettes must precede any pressing range. Tendon damage at this combined load level may be career-ending — this is not a training exercise but a documentation of the possible.",
    equipment: "Parallettes (mandatory)",
    position: "Elevated",
    youtube: "LINK_TODO"
  },

  {
    id: 130,
    name: "1-Finger Planche Push-Up (Parallettes (mandatory))",
    alt: "One-Finger Planche Push-Up · Single-Finger Planche",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    hof: true,
    pantheon: true,
    listed: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:3, shoulder:5, neck:1, lowerBack:4, knee:0, fingers:5, thoracic:2, si:2, hip:4, groin:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.52, 0.93],
    desc: "The theoretical absolute ceiling of bilateral push-up difficulty: a full planche push-up on a single index finger per hand. Each finger bears the entirety of the bodyweight planche lever — the tensile load on a single distal phalanx in this position exceeds anything human connective tissue has been documented to sustain. This entry exists as the logical terminus of the bilateral finger-planche progression. No verified performance is known. The 2-Finger Planche Push-Up and the bilateral 1-Finger Push-Up must both be completely established before this could even theoretically be approached.",
    cues: "There is no safe route to this. Every prior stage of both the planche and finger-reduction progressions must be exhaustively developed. This entry documents the conceptual boundary of push-up difficulty — not a training target.",
    equipment: "Parallettes (mandatory)",
    position: "Elevated",
    youtube: "LINK_TODO"
  },

  /* ── ONE-ARM PLANCHE — PANTHEON ──────────────────────────────── */

  {
    id: 125,
    name: "One-Arm Planche Push-Up (Parallettes (mandatory))",
    alt: "One-Arm Full Planche Push-Up · 1-Arm Planche",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Back", p:true}
    ],
    tags: ["chest", "shoulders", "triceps", "core", "back"],
    diff: 10,
    hof: true,
    pantheon: true,
    listed: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:4, shoulder:5, neck:1, lowerBack:5, knee:0, fingers:0, thoracic:2, si:3, hip:5, groin:2, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.60, 1.08],
    desc: "A full planche push-up performed on a single arm — body fully horizontal and elevated, legs parallel to the floor, supported only by one hand throughout the entire pressing range of motion. The most demanding bodyweight push-up in existence. The bilateral Planche Push-Up already represents years of training; the unilateral version multiplies every physical demand: the pressing load doubles on one shoulder, the anti-rotation core demand becomes extreme, and the wrist must resist both the compression of the planche and the torque of the unilateral loading. Verified performances are among the rarest feats in all of bodyweight strength. No shortcut to this exists — bilateral Planche Push-Up mastery, one-arm straddle planche holds, and years of specific unilateral planche conditioning are the only path.",
    cues: "The bilateral Planche Push-Up must be deeply established — clean reps, not forced singles. Build static one-arm planche holds extensively before attempting any pressing range. Begin with a one-arm straddle planche and add millimetres of range over months. This entry documents the theoretical ceiling of push-up difficulty.",
    equipment: "Parallettes (mandatory)",
    position: "Elevated",
    youtube: "LINK_TODO"
  },

  /* ── FINGER-REDUCTION EXTREMES — PANTHEON ────────────────────── */

  {
    id: 126,
    name: "One-Arm Fingertip Push-Up",
    alt: "OAP Fingertip · One-Arm Finger Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 9.1,
    hof: true,
    pantheon: true,
    listed: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:4, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.36, 0.65],
    desc: "A full one-arm push-up performed on the extended fingertips of the working hand, with the palm raised off the floor. The natural bridge between the standard OAP and the One-Arm 3-Finger Push-Up — unilateral pressing strength and finger tendon resilience must both be fully developed before combining them. The working fingertips bear the entire bodyweight plus the rotational anti-torque load of the OAP across a small contact surface. Both disciplines — bilateral fingertip push-ups and the standard OAP — must be completely mastered and extensively conditioned before any attempt.",
    cues: "Never attempt without both a solid standard OAP (5+ clean reps) and established bilateral Fingertip Push-Ups. Begin with the wide-stance OAP on fingertips, not the strict version. Finger tendon adaptation is slow — months of preparation are required before narrowing the stance. Never train to failure.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 119,
    name: "1-Finger Push-Up",
    alt: "One-Finger Push-Up · single-finger push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 9.7,
    hof: true,
    pantheon: true,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:3, shoulder:3, neck:1, lowerBack:1, knee:0, fingers:5, thoracic:1, si:0, hip:1, groin:0, ankle:0, foot:1},
    technique: 5,
    mobility: 1,
    strength: 4,
    kcalPerRep: [0.22, 0.40],
    desc: "The terminal point of the bilateral finger-reduction progression: Fingertip → 3-Finger → 2-Finger → 1-Finger. One finger per hand — typically the index finger — bears the entire load for that side. The tensile force on each distal interphalangeal joint at bodyweight exceeds anything a standard training protocol would ever apply. Documented only in the most advanced traditional martial arts conditioning lineages and in competitive extreme fitness. Static holds on a single finger must be deeply established before any pressing range is attempted.",
    cues: "The 2-Finger Push-Up must be completely mastered before any progression here. Begin with static one-finger holds at an angle (incline) and build over months. Injury to a finger tendon at this load level may be permanent. Never train to failure under any circumstances.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 120,
    name: "One-Arm 3-Finger Push-Up",
    alt: "OAP Three-Finger Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 9.3,
    hof: true,
    pantheon: true,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:4, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:4, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.38, 0.68],
    desc: "A full one-arm push-up performed on three fingers (index, middle, ring) of the working hand, with the pinky raised. Combines the complete unilateral pressing demand of the OAP with the tendon-loading of the 3-Finger Push-Up. The entire bodyweight presses through six finger joints on one hand. Both disciplines — OAP and 3-Finger Push-Up — must be thoroughly mastered and conditioned before any attempt is made.",
    cues: "Only attempt if both the standard OAP and the bilateral 3-Finger Push-Up are fully established. Begin with a wide-stance OAP on three fingers before narrowing the base. Tendon damage from premature loading here is severe and slow to heal.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 121,
    name: "One-Arm 2-Finger Push-Up",
    alt: "OAP Two-Finger Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 9.6,
    hof: true,
    pantheon: true,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:5, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.41, 0.74],
    desc: "A full one-arm push-up on two fingers — index and middle — of the working hand. Full bodyweight channels through four finger joints on a single hand. Among the rarest feats in all of bodyweight strength. Requires years of systematic bilateral finger-reduction training alongside OAP development before the two disciplines can be safely combined at this level.",
    cues: "Both the bilateral 2-Finger Push-Up and the One-Arm 3-Finger Push-Up must be fully mastered first. Static holds on two fingers one-handed must precede any pressing. This is a lifetime-progression milestone — do not rush.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 122,
    name: "One-Arm 1-Finger Push-Up",
    alt: "OAP One-Finger Push-Up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["chest", "triceps", "core", "shoulders"],
    diff: 10,
    hof: true,
    pantheon: true,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:5, elbow:4, shoulder:3, neck:1, lowerBack:2, knee:0, fingers:5, thoracic:1, si:1, hip:1, groin:0, ankle:0, foot:1},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.44, 0.79],
    desc: "The absolute pinnacle of push-up difficulty: a full one-arm push-up on a single finger of the working hand. Full bodyweight — plus the rotational core demand of the OAP — loads through a single distal phalanx. Only a handful of verified performances exist in recorded history. This is not a training exercise; it is the outer boundary of what human connective tissue can sustain under bodyweight pressing. Static one-arm one-finger supports must precede any dynamic attempt, themselves representing years of preparation.",
    cues: "There is no safe fast path here. Years of progressive finger conditioning across all prior stages is the only route. Any shortcut results in injury. This entry exists to document the boundary of the possible.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },
  {
    id: 131,
    name: "Pelican Push-Up (Parallettes, low rings, or blocks)",
    alt: "Pelican curl push-up · extreme ROM push-up",
    muscles: [
      {n:"Chest", p:true},
      {n:"Triceps", p:true},
      {n:"Shoulders", p:false},
      {n:"Core", p:false}
    ],
    tags: ["chest", "triceps", "shoulders"],
    diff: 9.8,
    hof: false,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {wrist:3, elbow:4, shoulder:5, neck:1, lowerBack:2, knee:0, fingers:0, thoracic:1, si:1, hip:0, groin:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.40, 0.72],
    desc: "A deep-range push-up performed on low parallettes, low rings, or blocks, allowing the chest to descend far below the shoulder line while the elbows sweep back behind the torso. The athlete must recover the body from the extreme bottom position back to the start without collapsing into a standard push-up. The loading is concentrated through the anterior shoulder, chest, and triceps, while the extreme range of motion demands exceptional joint control and core stability.",
    cues: "Use a stable surface and move slowly through the deepest safe range. Keep the core locked and avoid lower-back sag as the shoulders descend. If using rings, allow natural tracking but control the elbows on the return. Build from deep decline push-ups, Maltese-style push-ups, or the planche push-up before attempting the full Pelican depth.",
    equipment: "Parallettes, low rings, or blocks",
    position: "Prone",
    youtube: "LINK_TODO"
  }];

/* Pantheon workouts moved from pantheon-data.js.
   Kept outside the normal library arrays so they stay gated and use pantheon-* progress keys. */
const pushupPantheonWorkouts = [
  {
      id: 34,
      name: "One-Arm Tuck Planche (Parallettes or floor)",
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
      name: "One-Arm Planche (Parallettes or floor)",
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
      name: "One-Arm Planche Push-Up (Parallettes)",
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
      name: "Full Planche on Rings (Gymnastic rings)",
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
      id: 115,
      name: "Straddle Planche Push-Up — Ring (Gymnastic rings)",
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
      name: "Ring Planche Push-Up (Gymnastic rings)",
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
      name: "Reverse Planche (Parallettes)",
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
      name: "Reverse Planche Push-Up (Parallettes)",
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
      name: "3-Finger Planche Push-Up (Parallettes (mandatory))",
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
      name: "2-Finger Planche Push-Up (Parallettes (mandatory))",
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
      name: "1-Finger Planche Push-Up (Parallettes (mandatory))",
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
      name: "2-Finger Planche Push-Up Legacy",
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
  {
      id: 71,
      name: "Maltese Push-Up (Parallettes or gymnastic rings)",
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
    }
];
