/* ══════════════════════════════════════════════════════════════
   GRND // WORKOUT WIKI — ISOMETRIC LIBRARY DATA
   isometric-data.js
   Loaded by index.html via <script src="library/isometric-data.js">
   Exposes: const isometrics (array)
   ── SCHEMA ───────────────────────────────────────────────────
   Same schema as all other library data files.
   Covers static holds and isometric strength skills:
   L-sit family, planche family, lever family, human flag,
   manna, and wall/floor isometric strength builders.
   Next available id: 83
══════════════════════════════════════════════════════════════ */

const isometrics = [

  /* ── FLOOR COMPRESSION HOLDS ─────────────────────────────── */

  {
    id: 1,
    name: "L-Sit",
    alt: "L-sit hold · parallel bar L-sit",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 5.4,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 3,
    strength: 3,
    kcalPerRep: [1.5, 2.5],
    desc: "A floor or parallel bar hold with the legs extended straight and horizontal, the hips raised off the surface, and the arms locked. The hip flexors and core work isometrically to maintain leg elevation while the triceps and depressed scapulae support the body. The foundational compression strength skill — prerequisite for V-sit, manna, and press handstand.",
    cues: "Depress the scapulae hard — push the floor away to elevate the hips as high as possible. Legs must be fully locked and horizontal, not drooping. If full extension isn't possible, train with one or both knees bent (tuck L-sit) and extend progressively.",
    equipment: "Parallettes, floor, or dip bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 2,
    name: "Tuck L-Sit",
    alt: "Tuck hold · bent-knee L-sit",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 3.3,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:2, elbow:1, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.8, 1.5],
    desc: "An L-sit with both knees tucked to the chest rather than legs extended — the shorter lever arm dramatically reduces hip flexor and core demand, making this the accessible entry point for compression strength training. The body is still elevated off the surface with locked arms and depressed scapulae.",
    cues: "The goal is maximum hip elevation, not just keeping the knees up. Push the floor away aggressively and sink the shoulders down. Work toward extending one leg at a time from this position as hip flexor strength develops.",
    equipment: "Parallettes, floor, or dip bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 3,
    name: "V-Sit",
    alt: "V-sit hold · compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Hamstrings", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 7.4,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:2, shoulder:3, neck:1, thoracic:2, lowerBack:3, si:1, hip:4, groin:2, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 4,
    strength: 4,
    kcalPerRep: [2.5, 4],
    desc: "An L-sit with the legs elevated above horizontal — the hips are compressed into deep flexion to hold the legs at 45° or higher while the arms support the body. Requires both exceptional hip flexor strength and significant hamstring flexibility to allow the pelvis to rotate into the compressed position. A direct progression from the L-sit and a prerequisite for the manna.",
    cues: "The legs rising above horizontal is driven by hip flexor strength, not by leaning back — any trunk lean backward is a compensation. Keep the chest up and spine as tall as possible. Hamstring flexibility is often the limiting factor: address it directly with compression stretching.",
    equipment: "Parallettes or floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 4,
    name: "Manna",
    alt: "Manna hold · compression skill",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Hamstrings", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 10.0,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:2, hip:5, groin:3, knee:1, ankle:0, foot:0},
    technique: 5,
    mobility: 5,
    strength: 5,
    kcalPerRep: [4, 7],
    hof: true,
    desc: "The maximum expression of compression strength — the legs are elevated above the head while the body is supported on the hands behind the hips, creating an extreme posterior compression of the hip joint. Demands simultaneous elite hip flexor strength, exceptional hamstring and posterior chain flexibility, and shoulder extension mobility that most practitioners never develop. One of the rarest gymnastics strength skills.",
    cues: "This is a multi-year development goal even from a solid V-sit baseline. Train hip flexor strength with weighted compression work and address hamstring and shoulder extension flexibility as dedicated sub-skills. Do not rush the progression — the hip joint stress at extreme compression is significant.",
    equipment: "Parallettes",
    position: "Seated",
    youtube: "LINK_TODO"
  }, /* ── PLANCHE FAMILY ──────────────────────────────────────── */

  {
    id: 5,
    name: "Planche Lean",
    alt: "Planche lean hold · forward lean",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Wrists", p:false},
      {n:"Serratus", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 4.8,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {fingers:2, wrist:4, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 3,
    kcalPerRep: [1, 2],
    desc: "A push-up position hold where the body leans forward past the wrists — the further the forward lean, the greater the anterior deltoid and serratus load. Not a full planche, but the primary conditioning tool for building the wrist, shoulder, and scapular base needed before the tuck planche. Usually performed on parallettes to allow the correct wrist angle.",
    cues: "Lean as far forward as possible while maintaining a rigid plank — the goal is maximum forward displacement of the shoulder over the hand. Protract the scapulae fully. Wrist conditioning is the limiting factor early on; build tolerance gradually over weeks.",
    equipment: "Parallettes or floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 6,
    name: "Tuck Planche",
    alt: "Tuck planche hold · bent-knee planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Serratus", p:true},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 7.0,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:3, wrist:4, elbow:1, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2, 3.5],
    desc: "The first true planche position — both feet are off the ground with the knees tucked tight to the chest, the body parallel to the floor, supported only on the hands. The short lever arm makes this achievable before the advanced variations, but it still demands significant anterior deltoid, serratus, and core isometric output. The entry point into planche training.",
    cues: "Hips must be level with the shoulders — any hip drop means the position is not yet held. Scapulae fully protracted and elevated, arms completely locked. The tuck should be tight: the more compact the tuck, the shorter the lever and the more manageable the hold.",
    equipment: "Parallettes or floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 7,
    name: "Advanced Tuck Planche",
    alt: "Advanced tuck hold · open tuck planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Serratus", p:true},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 7.2,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:3, wrist:4, elbow:1, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.5, 4],
    desc: "A tuck planche where the knees are extended slightly away from the chest — the hips are still bent but the back is more horizontal than in the tight tuck. The extended tuck increases the effective lever arm, placing greater demand on the anterior deltoids and core. The bridge between the tuck and straddle planche.",
    cues: "Open the tuck gradually — a few degrees at a time over sessions. The back should trend toward horizontal as the knees extend. Any hip drop is a sign the lever has been opened too far for current strength; close the tuck slightly and hold it there.",
    equipment: "Parallettes or floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 8,
    name: "Straddle Planche",
    alt: "Straddle planche hold · wide-leg planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Serratus", p:true},
      {n:"Adductors", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 9.2,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:1, shoulder:5, neck:1, thoracic:1, lowerBack:3, si:1, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [3, 5],
    desc: "A planche with both legs fully extended and spread wide to the sides — the straddle shortens the effective lever compared to the full planche by moving the legs' mass toward the centre, making this the standard intermediate between the advanced tuck and the full planche. One of the clearest strength benchmarks in calisthenics.",
    cues: "The wider the straddle, the shorter the lever — use that to your advantage during progressions. Full lockout in the elbows and complete scapular protraction at all times. The hips must stay level with or above the shoulders; any drop is immediate failure of the hold.",
    equipment: "Parallettes or floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 9,
    name: "Full Planche",
    alt: "Planche · straight-body planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Serratus", p:true},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 9,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:1, shoulder:5, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [4, 7],
    hof: true,
    desc: "The maximum planche — body completely horizontal, legs together and straight, supported solely on the hands with fully locked arms and protracted scapulae. The longest possible lever in the planche family demands elite anterior deltoid and serratus anterior strength across the full range of joint positions. Requires years of systematic planche progression. A definitive elite calisthenics benchmark.",
    cues: "Every degree of body lean below horizontal counts — work toward true horizontal with a spirit level or camera review. Legs together and pointed. The difference in anterior deltoid demand between straddle and full planche is enormous; time spent in straddle must be extensive before attempting this.",
    equipment: "Parallettes (strongly recommended)",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 10,
    name: "Fingertip Planche",
    alt: "Fingertip planche hold · fingerboard planche",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Serratus", p:true},
      {n:"Core", p:true}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 10,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:1, shoulder:5, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [5, 9],
    hof: true,
    desc: "A planche held entirely on the fingertips with no palm contact — all the demands of the full planche are present while the entire bodyweight passes through the distal finger tendons and joints. The wrist compression of a standard planche is replaced by extreme finger flexor and tendon load. Among the rarest strength demonstrations documented; requires not only elite planche-level shoulder and core strength but years of dedicated finger tendon conditioning.",
    cues: "Finger tendon adaptation is slow — this must be built progressively from tuck planche on fingertips, then advanced tuck, then straddle, over an extended period. Never load this position through fatigue. Even experienced planche practitioners must treat fingertip progression as a completely separate, long-term training strand.",
    equipment: "Floor or low parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  }, /* ── LEVER FAMILY ────────────────────────────────────────── */



  /* ── HUMAN FLAG & LATERAL HOLDS ─────────────────────────── */

  {
    id: 16,
    name: "Tuck Human Flag",
    alt: "Tuck flag · tucked side lever",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true}
    ],
    tags: ["core", "shoulders", "back"],
    diff: 7.2,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:1, wrist:3, elbow:3, shoulder:5, neck:2, thoracic:2, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2, 3.5],
    desc: "A human flag with both knees tucked — held on a vertical pole or wall bars with the body held sideways parallel to the floor. The top arm pushes while the bottom arm pulls, creating a torque couple that suspends the body against gravity in the lateral plane. The tuck reduces the lever arm, making this the accessible entry to human flag training.",
    cues: "The push-pull arm relationship is the mechanism — top arm presses hard, bottom arm pulls hard. Grip and shoulder strength in this lateral orientation is different from all other pulling or pressing; it needs dedicated exposure. Build 5-second holds before opening the tuck.",
    equipment: "Vertical pole or wall bars",
    position: "Lateral",
    youtube: "LINK_TODO"
  },

  {
    id: 17,
    name: "Human Flag",
    alt: "Human flag hold · side lever",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true}
    ],
    tags: ["core", "shoulders", "back"],
    diff: 9,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [5, 9],
    hof: true,
    desc: "The full human flag — body completely horizontal in the lateral plane, arms extended and gripping a vertical pole, the body held against gravity through a push-pull torque couple. One of the most visually striking and mechanically unusual isometrics in calisthenics: the shoulder, lat, and oblique system must resist a lateral gravitational load that no other exercise trains in this configuration.",
    cues: "Straddle and tuck progressions are the only viable path — do not attempt a straight flag without extensive tuck flag hold time. The bottom shoulder is the critical vulnerability; build it with dedicated lateral pressing and pulling work. A full 2-second clean hold at true horizontal is a serious achievement.",
    equipment: "Vertical pole or wall bars",
    position: "Lateral",
    youtube: "LINK_TODO"
  }, /* ── RING & BAR HOLDS ────────────────────────────────────── */

  {
    id: 18,
    name: "Ring Support Hold",
    alt: "Ring support · dip support hold",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Core", p:false},
      {n:"Serratus", p:false}
    ],
    tags: ["shoulders", "core"],
    diff: 3.9,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:1, wrist:3, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.5, 1],
    desc: "A straight-arm support hold on gymnastic rings — arms locked, rings turned out so the palms face forward, body upright. The ring turnout requires active external rotation in the shoulder and engages the musculature in a way that a bar or parallette support does not. The foundation for all ring work and a specific shoulder conditioning tool in its own right.",
    cues: "Turn the rings out as far as possible — the goal is palms facing fully forward. This tests external rotation strength and shoulder stability in a position that transfers directly to ring dips, muscle-ups, and iron cross progressions. Depress the scapulae to elevate the body as high as possible.",
    equipment: "Gymnastic rings",
    position: "Upright",
    youtube: "LINK_TODO"
  },

  {
    id: 19,
    name: "Ring Dip Support Hold",
    alt: "Bottom dip hold · bent-arm ring hold",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Chest", p:false},
      {n:"Core", p:false}
    ],
    tags: ["shoulders", "core"],
    diff: 5.9,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:1, wrist:3, elbow:3, shoulder:4, neck:1, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.8, 1.5],
    desc: "An isometric hold at the bottom of a ring dip — elbows bent to approximately 90°, rings held close to the body, body upright. The shoulder is under significant load in the inferior position. Trains the bottom-position strength that is the sticking point for ring dips and ring muscle-ups, and builds specific shoulder stability at the most vulnerable point in the dip range.",
    cues: "Keep the elbows tracked close to the body — flaring out at the bottom is where shoulder stress becomes dangerous. Attempt to turn the rings out even at the bottom position. Hold for time rather than grinding reps; the isometric exposure at this angle is the entire point.",
    equipment: "Gymnastic rings",
    position: "Upright",
    youtube: "LINK_TODO"
  },

  {
    id: 20,
    name: "Dead Hang",
    alt: "Passive hang · bar hang",
    muscles: [
      {n:"Lats", p:false},
      {n:"Forearms", p:true},
      {n:"Shoulders", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 1.5,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:1, shoulder:1, neck:1, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.5, 1],
    desc: "A passive hang from a bar with arms fully extended — the shoulder girdle is passively elevated by gravity, decompressing the spine and loading the shoulder joint in its natural hanging position. Often used for spinal decompression and shoulder health work. Also the base position for all hanging strength exercises. Grip endurance is the limiting factor for duration.",
    cues: "Fully relax the shoulders — let gravity decompress the shoulder joint naturally. An active hang (scapulae depressed) is a different exercise; this is explicitly passive. For spinal decompression benefits, relax everything and breathe slowly.",
    equipment: "Bar or rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 21,
    name: "Active Hang",
    alt: "Scapular hang · active bar hang",
    muscles: [
      {n:"Lats", p:true},
      {n:"Serratus", p:true},
      {n:"Shoulders", p:true},
      {n:"Forearms", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 3.3,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:2, wrist:2, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.5, 1],
    desc: "A hang with the scapulae actively depressed — the lats and lower traps pull the shoulder blades down while the arms remain straight. The body rises slightly compared to a dead hang. The correct starting position for all pull-up and lever work, and an important scapular stability conditioning tool. The distinction between active and passive hang is fundamental for injury-free overhead training.",
    cues: "Pull the shoulder blades down and back without bending the elbows — this is not the start of a pull-up. Think of trying to put your shoulder blades in your back pockets. The body should lift slightly from the dead hang position. Practise this transition until it is automatic before every hanging session.",
    equipment: "Bar or rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 22,
    name: "Iron Cross",
    alt: "Iron cross hold · ring cross",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Biceps", p:true},
      {n:"Lats", p:true}
    ],
    tags: ["shoulders", "back", "core"],
    diff: 10,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:1, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [5, 9],
    hof: true,
    desc: "The iconic gymnastic rings skill — both arms extended straight out to the sides at shoulder height, body upright and suspended between the rings. The elbow joint is under extraordinary valgus stress from the lateral gravitational pull, and the shoulder musculature must isometrically resist abduction across the full lever of the arm. One of the most demanding upper-body isometrics in existence; the elbow ligaments and tendons are the critical vulnerability.",
    cues: "The iron cross must be trained through years of ring support progressions, ring dip strength, and specific cross-cable conditioning. Never load this position without extensive preparation — the lateral elbow stress is severe and acute injury is common in practitioners who rush the progression. Cross-specific elastic band and cable conditioning are the standard preparation tools.",
    equipment: "Gymnastic rings",
    position: "Upright",
    youtube: "LINK_TODO"
  }, /* ── WALL & FLOOR ISOMETRICS ─────────────────────────────── */

  {
    id: 23,
    name: "Wall Sit",
    alt: "Wall squat hold · isometric squat",
    muscles: [
      {n:"Quadriceps", p:true},
      {n:"Glutes", p:false},
      {n:"Hamstrings", p:false},
      {n:"Core", p:false}
    ],
    tags: ["core"],
    diff: 1.5,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:0, wrist:0, elbow:0, shoulder:0, neck:0, thoracic:0, lowerBack:1, si:0, hip:2, groin:0, knee:3, ankle:1, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [1, 2],
    desc: "A static hold with the back against a wall, thighs parallel to the floor, and knees at 90° — a pure quadriceps isometric. Low skill requirement and low injury risk make this an accessible conditioning tool. Limited strength transfer but useful for building knee rehabilitation tolerance and as a warm-up or metabolic conditioning hold.",
    cues: "Thighs must be truly parallel to the floor — anything above 90° is a partial position that dramatically reduces the demand. Feet flat on the floor, knees tracking over the toes. The limiting factor is quadriceps endurance, not technique.",
    equipment: "Wall",
    position: "Standing",
    youtube: "LINK_TODO"
  },

  {
    id: 24,
    name: "Hollow Body Hold",
    alt: "Hollow hold · hollow rock isometric",
    muscles: [
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Shoulders", p:false},
      {n:"Quads", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 3.6,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 1,
    joints: {fingers:0, wrist:0, elbow:0, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.8, 1.5],
    desc: "A floor hold in the hollow body position — lower back pressed flat to the floor, legs extended and elevated at approximately 30°, arms extended overhead, shoulders slightly off the floor. The full-body tension of the hollow body is the foundational tension pattern for handstands, front levers, and planche. Practised as a hold for time or with a slow rock.",
    cues: "The lower back must remain in contact with the floor throughout — the moment it arches, the hollow is lost. If legs cannot be held low without losing the back contact, raise them until the back can stay flat, then gradually lower over sessions. Arms long, head neutral.",
    equipment: "None",
    position: "Supine",
    youtube: "LINK_TODO"
  },

  {
    id: 25,
    name: "Arch Hold",
    alt: "Superman hold · prone arch",
    muscles: [
      {n:"Spinal Erectors", p:true},
      {n:"Glutes", p:true},
      {n:"Hamstrings", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["back", "core"],
    diff: 4.0,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:0, wrist:0, elbow:0, shoulder:2, neck:2, thoracic:2, lowerBack:3, si:1, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.8, 1.5],
    desc: "A prone floor hold with arms and legs simultaneously elevated — the spinal erectors, glutes, and posterior chain work isometrically to resist gravity in a full-body extension position. The complement to the hollow body hold: together they train the complete tension spectrum needed for handstands and ring work. Also called the superman hold.",
    cues: "Elevate arms and legs simultaneously to the same height — asymmetric holds are compensations. Squeeze the glutes hard to protect the lower back from excessive compression. The hold should be felt primarily in the mid-back and glutes, not concentrated at the lumbar.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  }, /* ── ELBOW LEVER FAMILY ──────────────────────────────────── */

  {
    id: 26,
    name: "Elbow Lever",
    alt: "Elbow balance · forearm balance",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Triceps", p:false},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 4,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [1, 2],
    desc: "A floor balance skill where the body is held horizontal with both elbows digging into the hip flexor region and acting as a shelf — the forearms are vertical, the body is parallel to the floor, and bodyweight is balanced entirely on the elbow-to-hip contact points. A fundamental calisthenics balance skill that serves as an accessible entry to horizontal holds and body-lever mechanics.",
    cues: "The elbows press into the hip flexor groove, not the abdomen — find the bony shelf formed by the iliac crest and hip flexors. Keep the core rigid in a hollow position and lean the torso forward until the feet lift. Start with a straddle leg position to reduce the lever before attempting a straight-body hold.",
    equipment: "Parallettes or floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 27,
    name: "One-Arm Elbow Lever",
    alt: "Single-arm elbow lever · one-arm balance",
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
    desc: "An elbow lever performed with a single arm — the entire bodyweight is balanced through one elbow-to-hip contact point, requiring significant unilateral core and oblique strength to prevent lateral tilt. Considerably harder than the two-arm version due to both the lateral balance challenge and the increased load per side. A respected advanced skill and a natural stepping stone before one-arm planche work.",
    cues: "The free arm can assist balance by pressing gently on the thigh or reaching out as a counterbalance. The supporting elbow digs into the same hip-flexor groove as in the two-arm version. Brace the obliques hard against the rotation that would tilt the body toward the free side.",
    equipment: "Parallettes or floor",
    position: "Prone",
    youtube: "LINK_TODO"
  }, /* ── SHOULDER EXTENSION & MOBILITY HOLDS ────────────────── */

  {
    id: 28,
    name: "German Hang",
    alt: "Skin the cat bottom · dislocate hang",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Biceps", p:false},
      {n:"Chest", p:false},
      {n:"Lats", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 3.7,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 3,
    strength: 1,
    kcalPerRep: [0.5, 1],
    desc: "A hanging hold at the bottom of the skin-the-cat movement — the body hangs behind the bar with the arms extended overhead and the shoulder joint in extreme extension. Used primarily as a shoulder mobility conditioning tool and as an isometric exposure for back-lever preparation. The shoulder is loaded at its full posterior range and must be built into over weeks, not loaded suddenly.",
    cues: "Never jump or drop into this position — always arrive via a slow, controlled skin-the-cat descent. Hold only for the duration that feels open and controlled. Any pinching sensation means the range is not yet available; exit immediately and work the descent range before adding hold time.",
    equipment: "Bar or rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },
  {
    id: 2019,
    name: "Active German Hang",
    alt: "Active German hang shoulder strength drill on pull-up bar",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Lats", p:false},
      {n:"Triceps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders", "mobility"],
    diff: 3.5,
    str: {suit:false, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 3,
    strength: 2,
    kcalPerRep: [0.6, 1.2],
    desc: "The active version of the German hang where the shoulders support and slightly compress the extended position rather than hanging passively. This builds active shoulder extension strength and prepares the posterior chain for back lever holds.",
    cues: "From a German hang, engage the lats, triceps, and posterior shoulder to hold the position actively. Keep the arms straight and maintain full body tension. Resist the urge to relax into the hang — this should feel like a loaded shoulder extension hold.",
    equipment: "Bar or rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },
  {
    id: 2020,
    name: "Skin the Cat",
    alt: "Skin the cat through-rotation on pull-up bar",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Chest", p:false},
      {n:"Lats", p:false}
    ],
    tags: ["back", "shoulders", "core", "mobility", "bar"],
    diff: 4.2,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 4,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:2, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    technique: 4,
    mobility: 4,
    strength: 2,
    kcalPerRep: [0.7, 1.3],
    desc: "A rotational hanging movement where the legs pass through the arms into a German hang and back again. Skin the cat develops shoulder extension mobility, active control through the transition, and prepares the joints for inverted loadings.",
    cues: "Pull the knees to the chest, thread the legs between the arms, and continue the rotation until the body reaches a German hang. Reverse the motion under control — no swinging. Keep the shoulders active throughout the transition.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },
  {
    id: 2021,
    name: "Skin the Cat — Rings",
    alt: "Skin the cat through-rotation on gymnastic rings",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Chest", p:false},
      {n:"Lats", p:false}
    ],
    tags: ["back", "shoulders", "core", "mobility", "rings"],
    diff: 5.2,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 4,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:4, lowerBack:2, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    technique: 4,
    mobility: 4,
    strength: 2,
    kcalPerRep: [0.8, 1.5],
    desc: "A rings-based skin the cat. The freely rotating rings increase shoulder stability demand and coordination throughout the rotation, making it a powerful preparation exercise for ring-based back lever progressions.",
    cues: "Allow the rings to turn naturally as you pass through the rotation. Keep the arms straight and the shoulders engaged. Control the return phase as carefully as the entry to protect the shoulders and wrists.",
    equipment: "Gymnastic rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  }, /* ── BACK LEVER INTERMEDIATE ─────────────────────────────── */
 /* ── ADDITIONAL CORE ISOMETRICS ──────────────────────────── */

  {
    id: 30,
    name: "Dragon Flag Hold",
    alt: "Dragon flag isometric · incline body hold",
    muscles: [
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Lats", p:false},
      {n:"Spinal Erectors", p:false}
    ],
    tags: ["core", "back"],
    diff: 7.2,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:0, wrist:0, elbow:1, shoulder:3, neck:2, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2, 3.5],
    desc: "An isometric hold of the dragon flag — the body is held rigid from shoulders to feet at an angle to the bench or floor, supported only at the upper back while gripping a fixed object overhead. The full-body tension required to maintain a rigid line at any angle is exceptional. Popularised by Bruce Lee and a staple in advanced core training, this is the static hold version of one of calisthenics' most respected core exercises.",
    cues: "The body must remain completely rigid — any buckle at the hips dramatically reduces demand and loads the lower back unsafely. Grip the support tightly and drive the upper back into it. Begin with the hold at a higher angle near vertical and progress toward horizontal over months. The lower back must never be the first thing to sag.",
    equipment: "Bench or floor with fixed object to grip",
    position: "Supine",
    youtube: "LINK_TODO"
  },

  {
    id: 31,
    name: "Hanging L-Sit",
    alt: "Bar L-sit · hanging compression hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Lats", p:false},
      {n:"Forearms", p:false}
    ],
    tags: ["core", "back"],
    diff: 5.4,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:3, wrist:2, elbow:2, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 3,
    strength: 3,
    kcalPerRep: [1.5, 2.5],
    desc: "An L-sit performed while hanging from a bar — the legs are extended straight and horizontal while the body hangs from a dead-arm grip, creating a 90° angle at the hip. Distinct from the floor or parallette L-sit in that there is no downward push to assist elevation: the hip flexors must work against gravity alone. Trains the same compression strength as the floor L-sit with the added grip endurance and lat engagement of a hanging position.",
    cues: "Unlike the floor L-sit there is no push-down force to assist leg elevation — the hip flexors and core must raise the legs through their own strength. Keep knees fully locked and legs horizontal; a drooping position is a partial hold. Grip endurance is the secondary limiting factor alongside hip flexor strength.",
    equipment: "Bar or rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 32,
    name: "Reverse Planche Hold",
    alt: "Reverse planche lean · backward lean hold",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Wrists", p:true},
      {n:"Triceps", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 7.0,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 4,
    joints: {fingers:2, wrist:5, elbow:2, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 4,
    strength: 3,
    kcalPerRep: [1.5, 2.5],
    desc: "A planche-lean position with the hands pointing backward — the wrists are in extreme extension, the body leans back over the hands, and the shoulders are loaded posteriorly. Develops the wrist extension mobility and posterior shoulder strength that transfers to crab movement, back-bridge pressing, and certain ring skills. The wrist joint is the critical constraint: extreme wrist extension flexibility must be developed before any significant loading.",
    cues: "Wrist extension range must be assessed before any loading. Begin with hands flat and fingers pointing backward, lean only slightly, and build wrist tolerance over weeks. Do not chase more lean before wrist tissue has adapted — this is one of the highest wrist stress positions in bodyweight training.",
    equipment: "Floor or parallettes",
    position: "Prone",
    youtube: "LINK_TODO"
  }, /* ── HUMAN FLAG INTERMEDIATE ─────────────────────────────── */

  {
    id: 33,
    name: "Straddle Human Flag",
    alt: "Straddle flag · wide-leg side lever",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true}
    ],
    tags: ["core", "shoulders", "back"],
    diff: 9.1,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:4, si:1, hip:2, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [3.5, 6],
    desc: "A human flag with the legs spread wide in a straddle — the shorter effective lever reduces the shoulder and oblique demand compared to the full straight-body flag while maintaining all the lateral push-pull mechanics. The standard bridge between the tuck human flag and the full flag. Even the straddle flag demands elite shoulder strength and is considerably harder than most advanced isometric progressions.",
    cues: "Use the same push-pull arm mechanics as the tuck flag — top arm presses hard, bottom arm pulls hard. Narrow the straddle gradually across sessions. The bottom shoulder is the limiting vulnerability; any pain there means more sub-max hold time is needed before attempting to narrow the legs.",
    equipment: "Vertical pole or wall bars",
    position: "Lateral",
    youtube: "LINK_TODO"
  }, /* ── ONE-ARM PLANCHE PROGRESSIONS ────────────────────────── */

  {
    id: 37,
    name: "One-Arm Front Lever",
    alt: "Single-arm front lever · unilateral front lever",
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:true}
    ],
    tags: ["back", "shoulders", "core"],
    diff: 10,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [5, 9],
    hof: true,
    pantheon: true,
    desc: "A full front lever performed on a single arm — the body is held horizontal and rigid while hanging from one hand, requiring the lat, posterior shoulder, and core of the working side to resist vertical, lateral, and rotational forces simultaneously. The two-arm front lever is already an elite benchmark; the one-arm version is several orders beyond. Documented only in a small number of top-level calisthenics athletes globally.",
    cues: "A solid full two-arm front lever and extensive one-arm lat pulling work are absolute prerequisites. The free arm can initially rest on the working arm. The obliques and rotator cuff of the working side are under extreme stress — approach with long periods of one-arm hang conditioning at well below maximum effort before any front-lever attempt.",
    equipment: "Bar or rings",
    position: "Supine",
    youtube: "LINK_TODO"
  },

  /* ── PLANCHE FAMILY — ADDITIONAL VARIANTS ───────────────── */

  {
    id: 43,
    name: "One-Leg Front Lever",
    alt: "Half-lay front lever · single-leg front lever",
    listed: false,
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Obliques", p:false}
    ],
    tags: ["back", "shoulders", "core"],
    diff: 7.2,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:1, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.5, 4],
    desc: "A front lever with one leg fully extended and the other knee tucked — the asymmetric lever sits between the tuck front lever and the straddle front lever. The extended leg side demands more lat and core output; alternating sides builds bilateral strength and reveals imbalances. Also known as the half-lay front lever, this is the standard next step after a solid tuck front lever is established. A.K.A. Half-Lay Front Lever.",
    cues: "Keep the body truly horizontal — the extended leg should not rise above or drop below bar height. Alternate the extended leg each set. If the hip of the extended-leg side drops, the current lever is too long; tuck both knees slightly and extend again more gradually.",
    equipment: "Bar or rings",
    position: "Supine",
    youtube: "LINK_TODO"
  }, /* ── BACK LEVER — ADDITIONAL PROGRESSIONS ───────────────── */
 /* ── HUMAN FLAG — ADDITIONAL VARIANTS ───────────────────── */

  {
    id: 45,
    name: "One-Arm Human Flag",
    alt: "Single-arm flag · one-arm side lever",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true}
    ],
    tags: ["core", "shoulders", "back"],
    diff: 10,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:3, wrist:5, elbow:5, shoulder:5, neck:2, thoracic:3, lowerBack:5, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [8, 14],
    hof: true,
    pantheon: true,
    desc: "A human flag performed with only one arm gripping a vertical pole — the push-pull torque couple is replaced by a single-arm lateral cantilever, requiring the shoulder, lat, and entire lateral chain to resist the full gravitational load alone. One of the rarest and most extreme bodyweight feats documented; the wrist, elbow, and shoulder are under extraordinary stress with no counterbalancing arm. Verified holds are vanishingly rare.",
    cues: "A full two-arm human flag with genuine ease is the absolute minimum prerequisite, alongside extensive single-arm pressing and pulling work in the lateral plane. The wrist and elbow of the single supporting arm are under extreme valgus and torsional stress — build up with very short assisted exposures only. This is a lifetime achievement goal.",
    equipment: "Vertical pole or wall bars",
    position: "Lateral",
    youtube: "LINK_TODO"
  },

  {
    id: 46,
    name: "Inverted Human Flag",
    alt: "Upside-down flag · inverted side lever",
    muscles: [
      {n:"Obliques", p:true},
      {n:"Lats", p:true},
      {n:"Shoulders", p:true},
      {n:"Core", p:true}
    ],
    tags: ["core", "shoulders", "back"],
    diff: 9.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:2, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [6, 10],
    hof: true,
    desc: "A human flag performed upside down — the body is held sideways in the lateral plane but inverted, with the legs above and head below. The push-pull arm mechanics invert their roles: the arm that was pushing now pulls and vice versa, producing a completely different muscle recruitment pattern despite the visual similarity to the standard flag. The shoulder joint is under extension load rather than flexion. An extremely rare skill documented in a small number of elite practitioners.",
    cues: "Approach only with a clean standard human flag already established. The inverted orientation shifts the dominant load to the lat of the bottom arm and the overhead pressing of the top arm. Entry is typically via a controlled inversion on the pole rather than jumping into the position.",
    equipment: "Vertical pole or wall bars",
    position: "Lateral",
    youtube: "LINK_TODO"
  }, /* ── L-SIT / COMPRESSION — ADDITIONAL VARIANTS ──────────── */

  {
    id: 47,
    name: "Straddle L-Sit",
    alt: "Straddle sit · wide-leg L-sit",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Adductors", p:false},
      {n:"Triceps", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 4.0,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:1, wrist:3, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 2,
    kcalPerRep: [1, 2],
    desc: "An L-sit with the legs spread wide in a straddle rather than held together — the straddled position reduces hip flexor demand by moving leg mass toward the midline, making this easier than the standard L-sit with legs together. A useful accessible entry for those who cannot yet achieve horizontal legs in a standard L-sit, and a specific hip flexor and adductor conditioning position in its own right.",
    cues: "The straddle reduces lever demand — use it to achieve true horizontal leg height before working toward legs-together. Scapular depression and arm lockout standards remain identical to the standard L-sit. Gradually narrow the straddle over sessions as hip flexor strength develops.",
    equipment: "Parallettes, floor, or dip bars",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 48,
    name: "Tucked V-Sit",
    alt: "Tuck V-sit · compressed tuck hold",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:false},
      {n:"Shoulders", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 5.4,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:4, groin:2, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 3,
    strength: 3,
    kcalPerRep: [1, 2],
    desc: "A tuck L-sit where the hips are driven into deeper flexion so the knees rise above hip height — the body aims upward in the V pattern but with legs bent rather than extended. The hip joint is compressed past 90° and the hip flexors must fight gravity at a progressively disadvantaged angle. The natural progression from the tuck L-sit and the first exposure to the compression angles required for the V-sit and manna.",
    cues: "Push the floor away hard to maximise hip elevation, then actively drive the knees higher by compressing the hip — do not just lean back to create the angle. Any trunk lean backward is a compensation. Extend the legs slightly as a progression toward the full V-sit.",
    equipment: "Parallettes or floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 49,
    name: "One-Arm L-Sit",
    alt: "Single-arm L-sit · unilateral L-sit",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Obliques", p:true},
      {n:"Triceps", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 9.2,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:4, elbow:2, shoulder:3, neck:1, thoracic:1, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [3, 5],
    desc: "An L-sit performed on a single supporting arm — one hand is removed from the surface while the legs remain extended and horizontal. The obliques and lateral core must resist the powerful rotation torque attempting to tilt the body away from the support arm, adding a lateral anti-rotation demand to all the standard L-sit compression requirements. Significantly harder than the two-arm version.",
    cues: "The free hand can initially rest on the wrist of the working arm for balance assistance. The body will want to rotate toward the free side — brace the obliques aggressively against this. Build from a solid two-arm L-sit and practice one-arm leans before attempting the full hold.",
    equipment: "Parallettes or floor",
    position: "Seated",
    youtube: "LINK_TODO"
  },

  {
    id: 50,
    name: "One-Arm Hanging L-Sit",
    alt: "Single-arm bar L-sit · unilateral hanging compression",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Lats", p:true},
      {n:"Obliques", p:true}
    ],
    tags: ["core", "back"],
    diff: 9.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [4, 7],
    hof: false,
    desc: "A hanging L-sit performed on a single arm — both the extreme grip and lat demands of the one-arm hang are combined with the full compression demand of the L-sit. The hip flexors must raise the legs to horizontal against gravity alone while the single lat fights the body's rotational tendency. One of the rarest combined strength demonstrations; prerequisites are a clean two-arm hanging L-sit and a strong one-arm dead hang.",
    cues: "Approach only from a solid two-arm hanging L-sit and a one-arm active hang. The rotation attempting to tilt the torso toward the free side is enormous — the obliques and lat must co-contract maximally to resist it. Even a tuck position on one arm is a significant achievement to build from.",
    equipment: "Bar or rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 51,
    name: "Ring L-Sit",
    alt: "Ring compression hold · L-sit on rings",
    muscles: [
      {n:"Hip Flexors", p:true},
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Serratus", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 5.6,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:1, wrist:3, elbow:2, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 3,
    kcalPerRep: [1.5, 2.5],
    desc: "An L-sit performed on gymnastic rings — identical leg and hip position to the floor or parallette version, but the ring instability requires constant shoulder and elbow micro-stabilisation throughout the hold. Harder than the parallette L-sit due to this instability demand, and a useful stepping stone toward ring planche and compression work on rings. Turning the rings out is a specific challenge not present in the static parallette version.",
    cues: "Maintain ring turnout — palms facing forward — throughout the hold, which adds shoulder external rotation demand on top of the compression work. Depress the scapulae hard. If the rings are wobbling excessively, shorten the hold time and build stability before extending duration.",
    equipment: "Gymnastic rings",
    position: "Seated",
    youtube: "LINK_TODO"
  }, /* ── GRIP & HANG VARIANTS ────────────────────────────────── */

  {
    id: 52,
    name: "One-Arm Dead Hang",
    alt: "Single-arm hang · unilateral passive hang",
    muscles: [
      {n:"Forearms", p:true},
      {n:"Shoulders", p:false},
      {n:"Lats", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 3.9,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {fingers:3, wrist:3, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.5, 1],
    desc: "A passive hang from a bar or rings on a single arm — the shoulder is loaded in its full hanging range with the full bodyweight passing through one joint. Grip endurance in the single-arm position is the primary limiter, with shoulder passive stability as the secondary. An essential precondition for one-arm pull-ups, one-arm front lever work, and any unilateral bar skill. The single-arm version loads the shoulder joint significantly differently from the two-arm dead hang.",
    cues: "Begin with short durations — 5 to 10 seconds — and build gradually. The free arm can hang at the side or rest on the working wrist. Do not allow the shoulder to creak or load passively to a painful end-range; some active scapular tone is protective even in a 'passive' single-arm hang.",
    equipment: "Bar or rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 53,
    name: "One-Arm Active Hang",
    alt: "Single-arm scapular hang · unilateral active hang",
    muscles: [
      {n:"Lats", p:true},
      {n:"Serratus", p:true},
      {n:"Forearms", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 5.2,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {fingers:3, wrist:3, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.8, 1.5],
    desc: "A single-arm hang with the scapula actively depressed — the lat and lower trap pull the shoulder blade down while the arm remains straight, elevating the body slightly from the passive hang position. The essential precondition for all single-arm hanging skills and a direct shoulder health tool for unilateral overhead work. More demanding than the two-arm active hang due to the full bodyweight through one scapular depressor chain.",
    cues: "Pull the scapula down and back without bending the elbow — the body should rise slightly from the dead hang position. This is harder to feel on one side; use video to confirm the shoulder is actually depressing rather than shrugging. Build in short sets before extended duration work.",
    equipment: "Bar or rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 54,
    name: "Fingertip Hang",
    alt: "Fingertip dead hang · open-hand hang",
    muscles: [
      {n:"Finger Flexors", p:true},
      {n:"Forearms", p:true},
      {n:"Shoulders", p:false},
      {n:"Lats", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 4.6,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 3,
    joints: {fingers:5, wrist:2, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.5, 1],
    desc: "A dead hang performed on the fingertips with no thumb wrap or palm contact — the entire bodyweight is supported through the distal finger tendons and pulleys. Develops the finger tendon strength and capacity that underpins fingertip planche progressions, climbing strength, and finger injury resilience. The foundational finger loading tool for the fingertip planche family.",
    cues: "Finger tendon adaptation is extremely slow — build from very short holds (3–5 seconds) over many months. Never load to failure. Begin with all four fingers and reduce to three or two as capacity builds. Any sharp finger pain means the hold duration or frequency is too high; reduce immediately.",
    equipment: "Bar or rings (or ledge)",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 55,
    name: "Pinch Grip Hang",
    alt: "Pinch hang · thumb-and-finger hang",
    muscles: [
      {n:"Finger Flexors", p:true},
      {n:"Thumb Flexors", p:true},
      {n:"Forearms", p:true},
      {n:"Shoulders", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 4.6,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.5, 1],
    desc: "A hang where the bar or surface is gripped between the thumb and fingers rather than wrapped with a full grip — the palm does not contact the bar and the thumb opposes the fingers in a pinch. Develops thumb and adductor pollicis strength alongside the finger flexors in a way that the standard wrap grip does not. Trains a distinct forearm strength pattern with high carry-over to grip-intensive bodyweight skills.",
    cues: "Any ledge or bar edge wide enough for a pinch works — no gym equipment needed. Begin with a thick surface (easier) and progress to a narrower edge. Build hold duration slowly; the thumb and first finger adductor chain is seldom directly trained and adapts slowly.",
    equipment: "Bar or any ledge/surface edge",
    position: "Hanging",
    youtube: "LINK_TODO"
  }, /* ── RING HOLD VARIANTS ──────────────────────────────────── */

  {
    id: 56,
    name: "Cross Pull-In Hold",
    alt: "Iron cross mid-position · cross transition hold",
    muscles: [
      {n:"Chest", p:true},
      {n:"Biceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Lats", p:true}
    ],
    tags: ["shoulders", "back", "core"],
    diff: 7.8,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 4,
    joints: {fingers:1, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [2.5, 4.5],
    desc: "A hold in the transition position between the ring support and the iron cross — arms extended at approximately 135° from the body rather than fully lateral, body upright on rings. The elbow valgus stress is significant at this intermediate angle, and the chest and biceps work alongside the shoulder to resist the downward-outward pull. A primary iron cross preparation tool, allowing controlled elbow tendon loading at a less extreme angle than the full cross.",
    cues: "This angle already places meaningful stress on the elbow ligaments — do not skip this position to rush the full iron cross. Hold for time in short sets, building load tolerance gradually. Ring height should allow the feet to touch the floor if needed for safety.",
    equipment: "Gymnastic rings",
    position: "Upright",
    youtube: "LINK_TODO"
  },

  {
    id: 57,
    name: "Half Iron Cross",
    alt: "Asymmetric cross · one-arm cross hold",
    muscles: [
      {n:"Chest", p:true},
      {n:"Biceps", p:true},
      {n:"Shoulders", p:true},
      {n:"Lats", p:true}
    ],
    tags: ["shoulders", "back", "core"],
    diff: 9.1,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:1, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [3, 5],
    hof: false,
    desc: "A ring hold with one arm extended straight out to the side at shoulder height and the other arm in a support position at the hip — only one arm performs the cross position while the other maintains a standard ring support. The lateral elbow valgus stress on the extended arm is comparable to the full iron cross but with the other arm providing partial body support. A named intermediate skill and an important unilateral elbow tendon loading tool. A.K.A. Asymmetric Cross.",
    cues: "Alternate arms across sets for balanced development. The cross-side elbow is under full lateral stress — all the same elbow tendon precautions of the iron cross apply here. Do not rush into holding the full lateral position; approach through the cross pull-in angle first on each arm independently.",
    equipment: "Gymnastic rings",
    position: "Upright",
    youtube: "LINK_TODO"
  }, /* ── FLOOR / WALL ISOMETRICS — ADDITIONAL ───────────────── */

  {
    id: 58,
    name: "Bear Hold",
    alt: "Bear hover · quadruped hover hold",
    muscles: [
      {n:"Core", p:true},
      {n:"Shoulders", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Quads", p:false}
    ],
    tags: ["core", "shoulders"],
    diff: 2.3,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:3, elbow:1, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:2, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.5, 1],
    desc: "A quadruped hold with the knees hovering a few centimetres off the floor — on hands and toes, wrists under shoulders, knees under hips, back flat, knees lifted. The core, shoulder, and hip flexors work isometrically to maintain the position against gravity pulling the knees down. Completely different from a plank; the 90° hip and knee angles create a unique anti-extension and anti-rotation demand. A fundamental gymnastics conditioning hold used in floor and handstand preparation.",
    cues: "Knees should hover just off the floor — 2 to 5 centimetres is sufficient and correct. The back must be flat, not arched or rounded. Breathe normally; this is a sustained tension hold, not a breath-hold challenge. Progress by extending hold duration before adding any load.",
    equipment: "None",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 59,
    name: "Copenhagen Plank Hold",
    alt: "Copenhagen side plank · adductor side plank",
    muscles: [
      {n:"Adductors", p:true},
      {n:"Core", p:true},
      {n:"Obliques", p:true},
      {n:"Hip Flexors", p:false}
    ],
    tags: ["core"],
    diff: 4.3,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {fingers:0, wrist:1, elbow:2, shoulder:2, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:3, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [1, 2],
    desc: "A side plank variant where the top leg is elevated on a bench or surface while the bottom leg hangs — the adductors of the top leg must isometrically resist the downward pull of the unsupported lower body, loading the groin and inner thigh in a way that no other floor isometric does. A rare direct adductor strengthening tool that requires only a bench or low surface. Widely used in injury prevention for groin strains.",
    cues: "The elevation surface should be approximately knee height — a chair, bench, or low step works. The top leg can be straight (harder) or bent at the knee (easier). Keep the core braced and hips stacked. The adductor demand increases significantly as the bottom leg is allowed to drop further.",
    equipment: "Bench or low elevated surface",
    position: "Lateral",
    youtube: "LINK_TODO"
  },

  {
    id: 60,
    name: "Dragon Flag Tuck Hold",
    alt: "Tuck dragon flag · bent-knee dragon flag isometric",
    muscles: [
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Lats", p:false},
      {n:"Spinal Erectors", p:false}
    ],
    tags: ["core", "back"],
    diff: 5.2,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:0, wrist:0, elbow:1, shoulder:3, neck:2, thoracic:2, lowerBack:2, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 3,
    kcalPerRep: [1.5, 2.5],
    desc: "An isometric hold in the tucked dragon flag position — the body is inclined with both knees pulled to the chest, supported at the upper back while gripping a fixed object overhead. The shortened lever makes this the accessible entry to dragon flag training. The same full-body tension demand of the straight dragon flag applies, but at a manageable load for those building toward the full position.",
    cues: "Keep the upper back in contact with the surface and grip the support tightly. Even with the tuck, the lower back must not sag — maintain a rigid hollow line from shoulders to tucked knees. Extend one leg to progress toward the full hold.",
    equipment: "Bench or floor with fixed object to grip",
    position: "Supine",
    youtube: "LINK_TODO"
  },

  {
    id: 61,
    name: "Skin-the-Cat Inverted Tuck Hold",
    alt: "Inverted tuck hang · skin-the-cat mid-hold",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Lats", p:false},
      {n:"Core", p:true},
      {n:"Biceps", p:false}
    ],
    tags: ["back", "shoulders", "core"],
    diff: 4.3,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:1, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.5, 1],
    desc: "A paused hold in the inverted tucked position that is the midpoint of the skin-the-cat movement — hanging from a bar with the knees tucked to the chest and the body inverted between the arms. Used as a mobility and shoulder conditioning tool in its own right, and as the standard entry/exit position for back lever training. Holding the inverted tuck builds shoulder extension tolerance progressively before the back lever position is attempted.",
    cues: "Arrive at this position via a slow, controlled skin-the-cat rotation — never jump or swing into it. The shoulder must feel open and comfortable here; any impingement sensation means the range is not yet available. Build comfortable 5-second holds before continuing the descent to the back lever angle.",
    equipment: "Bar or rings",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 62,
    name: "Jefferson Curl Hold",
    alt: "Jefferson curl bottom hold · loaded spinal flexion hold",
    muscles: [
      {n:"Spinal Erectors", p:true},
      {n:"Hamstrings", p:true},
      {n:"Lats", p:false},
      {n:"Glutes", p:false}
    ],
    tags: ["back", "core"],
    diff: 5.3,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:1, shoulder:2, neck:2, thoracic:3, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 2,
    kcalPerRep: [0.8, 1.5],
    desc: "A paused isometric hold at the bottom position of the Jefferson curl — standing on an elevated surface gripping a bar or rings, with the spine in full sequential flexion from the neck down, body hanging forward. Used as a posterior chain mobility and isometric conditioning tool rather than a strength exercise. The spinal erectors and hamstrings are loaded under stretch in a fully flexed position, conditioning the tissues at end-range. Requires very gradual load and range progression.",
    cues: "This is a mobility isometric, not a strength pull — move into the position slowly, vertebra by vertebra, and hold at a comfortable end-range. Begin with no load or very light load. The hold position must feel like a controlled stretch, not a strain. Never rush the range; spinal flexion under load demands years of progressive conditioning.",
    equipment: "Bar or rings (for grip), elevated surface",
    position: "Standing",
    youtube: "LINK_TODO"
  }, /* ── ELBOW LEVER — ADDITIONAL PROGRESSION ───────────────── */

  {
    id: 63,
    name: "Straddle Elbow Lever",
    alt: "Straddle forearm balance · wide-leg elbow lever",
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
    desc: "An elbow lever with the legs spread wide in a straddle — the wide leg position reduces the effective lever arm and makes finding the balance point more forgiving, making this the standard entry progression before the straight-body elbow lever. The elbows-to-hip-flexor shelf mechanics are identical; only the leg position changes. The accessible first step into elbow lever training for most practitioners.",
    cues: "Find the hip-flexor shelf first in this straddle position before attempting straight legs. Spread the legs as wide as needed to achieve a balanced hold, then narrow gradually over sessions. The balance point shifts forward as the legs extend — lean forward incrementally to compensate.",
    equipment: "Parallettes or floor",
    position: "Prone",
    youtube: "LINK_TODO"
  },

  {
    id: 64,
    name: "Maltese",
    alt: "Maltese cross · wide rings strength hold",
    muscles: [
      {n:"Chest", p:true},
      {n:"Shoulders", p:true},
      {n:"Lats", p:true},
      {n:"Biceps", p:true}
    ],
    tags: ["shoulders", "chest", "back"],
    diff: 10,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:1, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [6, 10],
    hof: true,
    desc: "The Maltese is a maximum-width ring strength hold where the arms drift far wider than a planche while the body stays rigid and level. It is one of the true Hall of Fame ring feats: brutal on the shoulders, elbows, and connective tissue, and far beyond normal advanced pressing.",
    cues: "Think of this as its own top-tier skill, not just a wider planche. Ring stability, elbow tolerance, and long-term connective-tissue preparation all matter as much as raw strength.",
    equipment: "Gymnastic rings",
    position: "Upright",
    youtube: "LINK_TODO"
  },

  /* ── FRONT LEVER BASE HOLDS (owned by frontlever-data.js) ─ */
  ...(typeof frontleverBaseStatics !== 'undefined' ? frontleverBaseStatics : []),

  /* ── BACK LEVER BASE HOLDS (owned by backlever-data.js) ──── */
  ...(typeof backleverBaseStatics !== 'undefined' ? backleverBaseStatics : []),
];
