/* ══════════════════════════════════════════════════════════════
   GRND // WORKOUT WIKI — HANDSTAND LIBRARY DATA
   handstand-data.js
   Loaded by index.html via <script src="library/handstand-data.js">
   Exposes: const handstands (array)
   ── SCHEMA ───────────────────────────────────────────────────
   See index.html header comment for full field reference.
   All exercises here are handstand-family movements — wall
   progressions, freestanding holds, HSPU variations, and
   advanced balance skills.
   Next available id: 31
══════════════════════════════════════════════════════════════ */

const handstands = [

  /* ── WALL WORK ───────────────────────────────────────────── */

  {
    id: 1,
    name: "Wall Walk",
    alt: "Wall walk-up · inverted ramp",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 2,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:2},
    end: {suit:true, eff:3},
    risk: 1,
    joints: {fingers:1, wrist:2, elbow:1, shoulder:2, neck:1, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.8, 1.5],
    desc: "The most accessible entry into inverted training. Starting in a push-up position with feet against a wall, the hands walk toward the wall as the feet climb it — building comfort with inversion, overhead load, and wrist weight-bearing with zero balance requirement.",
    cues: "Keep the core braced throughout — don't let the hips sag as you walk in. Work toward getting the chest as close to the wall as possible before walking back down under control.",
    equipment: "Wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 2,
    name: "Wall Handstand",
    alt: "Stomach-to-wall hold · chest-to-wall hold",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Triceps", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 3,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [2, 3.5],
    desc: "The foundational inverted hold. Wall support removes the balance variable, allowing you to build overhead pressing endurance, wrist strength, and full scapular elevation before the balance demands of freestanding work.",
    cues: "Push the floor away and elevate the scapulae fully — active protraction at the top is non-negotiable. Point toes, squeeze every muscle.",
    equipment: "Wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 3,
    name: "Kick to Wall Handstand",
    alt: "Handstand kick-up · wall kick-up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 3,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 2,
    joints: {fingers:1, wrist:3, elbow:1, shoulder:2, neck:1, thoracic:0, lowerBack:1, si:0, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 1,
    kcalPerRep: [1, 1.8],
    desc: "The dynamic entry into any wall handstand. From a lunge, one leg kicks up while the other pushes off the ground — requiring timing, hip flexibility, and the ability to absorb bodyweight through locked arms. The first real technique skill in handstand training.",
    cues: "Lead with the dominant leg, push hard with the trail leg. Place hands close to the wall — too far out makes the position extremely hard to hold. Absorb the load with active shoulders, don't collapse into the kick.",
    equipment: "Wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  }, /* ── FREESTANDING HOLDS ──────────────────────────────────── */

  {
    id: 4,
    name: "Tuck Handstand",
    alt: "Tuck balance · bent-knee freestanding handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Forearms", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 4,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 2,
    kcalPerRep: [2, 3.5],
    desc: "A freestanding handstand with both knees tucked to the chest — the reduced lever arm and lower centre of mass make balancing significantly easier than the full straight position. The correct bridge between wall work and a true freestanding handstand, and the first exercise where active fingertip balance corrections are trained.",
    cues: "Find balance through the fingertips — press down when tipping forward, relax when falling back. Keep shoulders fully elevated and arms completely locked. The tuck is the starting shape; work toward extending one leg, then both.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 5,
    name: "Freestanding Handstand",
    alt: "Free handstand · straight handstand hold",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Forearms", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 6,
    str: {suit:true, eff:2},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 3,
    joints: {fingers:3, wrist:4, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 3,
    kcalPerRep: [3, 5],
    desc: "The primary freestanding handstand — straight body, arms locked, balance maintained through constant fingertip micro-adjustments. Typically requires 3–6 months of consistent daily practice to achieve a 5-second hold from scratch. The foundation for all advanced handstand and press variations.",
    cues: "Fully elevate the scapulae — shrug toward the ears as hard as possible. Arms completely locked. Balance happens at the fingertips, not the wrists: subtle pressure, not gross corrections. Eyes fixed on a point on the floor between the hands.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  }, /* ── HANDSTAND PUSH-UPS ──────────────────────────────────── */

  {
    id: 6,
    name: "Negative Handstand Push-Up",
    alt: "HSPU eccentric · handstand push-up negative",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Upper Traps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["shoulders", "triceps", "core"],
    diff: 4,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:2},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:4, neck:2, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.5, 0.9],
    desc: "An eccentric-only handstand push-up against the wall — kick up, then lower the head toward the floor over 3–5 seconds before stepping down. Eccentric loading builds the specific shoulder and tricep strength required for the full HSPU without needing to press back up. The standard entry point for all HSPU training.",
    cues: "3 to 5 seconds on the way down — no faster. Elbows track slightly back rather than flaring straight out. Use a folded towel under the head as a target and buffer. Build 5 controlled negatives before attempting full reps.",
    equipment: "Wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 7,
    name: "Wall Handstand Push-Up",
    alt: "Wall HSPU · strict handstand push-up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Upper Traps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["shoulders", "triceps", "core"],
    diff: 5,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:4, neck:2, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.7, 1.3],
    desc: "A full handstand push-up with feet against the wall for balance support. Lower the head to the floor then press back to full lockout. The wall removes the balance variable entirely, making this the purest strength test for the inverted overhead press and the direct progression from eccentrics.",
    cues: "Full lockout at the top on every rep — no partial reps. Lower until the head touches the floor or a defined target. Elbows track back and slightly out, not straight to the sides. Don't kip.",
    equipment: "Wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 8,
    name: "Deficit Handstand Push-Up",
    alt: "Parallette HSPU · deep handstand push-up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Upper Traps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["shoulders", "triceps"],
    diff: 7,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:5, neck:2, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 4,
    kcalPerRep: [0.9, 1.6],
    desc: "A wall HSPU on parallettes or elevated handles — the head descends below hand level for a dramatically increased range of motion. Greater depth demands more shoulder mobility and strength across a longer range, making this the primary loading progression beyond the standard wall HSPU.",
    cues: "Assess shoulder mobility before loading this range — it is significant. Lower slowly through the full depth; rushing the descent is where shoulder injuries happen. Build wall HSPU to clean sets of 8–10 before adding a deficit.",
    equipment: "Parallettes or push-up handles + wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 9,
    name: "Freestanding Handstand Push-Up",
    alt: "Free HSPU · freestanding strict HSPU",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Upper Traps", p:false}
    ],
    tags: ["shoulders", "triceps", "core"],
    diff: 8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:2, thoracic:1, lowerBack:2, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [1, 1.8],
    desc: "A handstand push-up with no wall support — balance maintenance and maximal overhead pressing strength must work simultaneously. Any balance loss ends the set immediately. Considered elite; most practitioners spend years building toward consistent freestanding HSPU reps.",
    cues: "Balance correction and pressing happen at the same time — any gross balance loss means stepping out, not grinding through. Parallettes give a cleaner wrist angle and a safe bail. A solid wall HSPU and a consistent freestanding handstand hold are both hard prerequisites.",
    equipment: "None (parallettes strongly recommended)",
    position: "Inverted",
    youtube: "LINK_TODO"
  }, /* ── ADVANCED SKILLS ─────────────────────────────────────── */

  {
    id: 10,
    name: "Handstand Walk",
    alt: "Walking on hands · hand walking",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Forearms", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 5,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    risk: 3,
    joints: {fingers:3, wrist:4, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 2,
    kcalPerRep: [1.5, 2.5],
    desc: "Locomotion in the inverted position — each step is a controlled weight transfer requiring unilateral shoulder stability and dynamic fingertip balance corrections. Builds handstand endurance and proprioceptive control significantly faster than static holds alone.",
    cues: "Slightly turn the feet — it creates natural shoulder rotation that makes each step easier. Take small steps, not wide swings. Look slightly forward toward the floor between the hands, not straight down.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 11,
    name: "Press Handstand",
    alt: "Straddle press · pike press to handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Hamstrings", p:false}
    ],
    tags: ["shoulders", "core"],
    diff: 8,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 3,
    joints: {fingers:3, wrist:3, elbow:1, shoulder:4, neck:1, thoracic:2, lowerBack:2, si:1, hip:3, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 4,
    kcalPerRep: [2, 3.5],
    desc: "A controlled transition from a standing or seated straddle into a freestanding handstand with no kick or momentum — pure strength and flexibility. Requires exceptional shoulder strength in a compressed position, significant hip flexibility, and a solid freestanding handstand. One of the most demanding combined strength-flexibility skills in gymnastics training.",
    cues: "Lean forward over the hands aggressively — most failed presses come from insufficient forward lean, not lack of strength. Straddle wide to shorten the lever arm. The hips must pass directly over the shoulders before the legs can come together at the top.",
    equipment: "None (parallettes recommended)",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 12,
    name: "Handstand Pirouette",
    alt: "Handstand turn · 360° handstand rotation",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Forearms", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 7,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:3, wrist:4, elbow:1, shoulder:3, neck:1, thoracic:2, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 3,
    kcalPerRep: [2.5, 4],
    desc: "A full 360° rotation while maintaining a freestanding handstand — progressively shifting weight across the hands in a controlled circular path. Visual and vestibular reference points shift continuously throughout the turn, making deep proprioceptive control of the handstand essential.",
    cues: "Initiate with a subtle weight shift, not a gross lean. Keep the body line rigid — any shape break during the turn amplifies the imbalance. Drill quarter turns and half turns before committing to a full rotation.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 13,
    name: "One-Arm Handstand",
    alt: "One-arm balance · unilateral handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Forearms", p:true},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 10,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:4, wrist:5, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [4, 7],
    hof: true,
    desc: "A freestanding handstand on a single arm — eliminating the second contact point forces the entire body into a dramatically asymmetric balance challenge requiring unilateral wrist, forearm, and shoulder strength far beyond the two-arm equivalent. Considered one of the most elite skills in calisthenics and gymnastics; years of dedicated handstand training are a hard prerequisite.",
    cues: "Never attempt without consistent 30-second two-arm freestanding holds. Transition through supported practice first — free hand resting on a low block or light finger support from the other hand. The counterbalance position of the free arm and leg is a skill in itself and must be developed deliberately.",
    equipment: "None (parallettes recommended)",
    position: "Inverted",
    youtube: "LINK_TODO"
  }, /* ── FINGERTIP HOLDS ─────────────────────────────────────── */

  {
    id: 14,
    name: "Wall Fingertip Handstand",
    alt: "Fingertip wall hold · fingertip inverted hold",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Forearms", p:true},
      {n:"Core", p:false}
    ],
    tags: ["shoulders", "core", "wrists", "fingers"],
    diff: 4,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 3,
    kcalPerRep: [2.5, 4],
    desc: "A wall handstand held entirely on the fingertips — the palm never contacts the floor. The wall handles balance while all bodyweight transfers through the distal phalanges and finger flexor tendons. The entry point for fingertip handstand training; finger tendon conditioning must precede loading this position. Do not rush into this from a full-palm hold.",
    cues: "Curl all fingers as if gripping a lip on the floor — spread them wide for maximum base. Do not let the palm touch. Expect significant distal forearm pump initially; tendon adaptation is slow, so time under load should be built up over weeks, not sessions. Start with 5–10 second holds only.",
    equipment: "Wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 15,
    name: "Fingertip Handstand",
    alt: "Freestanding fingertip hold · fingertip balance",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Forearms", p:true},
      {n:"Core", p:true}
    ],
    tags: ["shoulders", "core", "wrists", "fingers"],
    diff: 8,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 4,
    joints: {fingers:5, wrist:2, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [4, 6.5],
    desc: "A freestanding handstand held entirely on the fingertips with no palm contact. Balance corrections that normally load the whole hand now pass entirely through the fingertip base — requiring far finer neuromuscular control and dramatically greater finger flexor and forearm strength than the palm equivalent. A consistent 30-second freestanding handstand and established fingertip wall tolerance are both hard prerequisites.",
    cues: "Balance is controlled through subtle differential pressure across the fingertip base — the same mechanism as a normal handstand but with a fraction of the contact area. Spread the fingers to maximise the base of support. Holds over 10 seconds should only come after weeks of wall fingertip conditioning; this position puts real load on tendons that adapt slowly.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  }, /* ── FINGERTIP HANDSTAND PUSH-UPS ───────────────────────── */

  {
    id: 16,
    name: "Wall Fingertip Handstand Push-Up",
    alt: "Fingertip HSPU · fingertip wall push-up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Forearms", p:true}
    ],
    tags: ["shoulders", "triceps", "fingers"],
    diff: 7,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:3, shoulder:4, neck:2, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [1, 1.8],
    desc: "A wall handstand push-up performed entirely on the fingertips. The movement demands all the pressing strength of the standard wall HSPU while the finger flexors isometrically brace the full bodyweight through every inch of the range of motion. One of the highest-load positions the finger tendons encounter in calisthenics — tendon health and a well-established fingertip hold are mandatory before attempting reps.",
    cues: "Lower and press with complete control — there is no room to grind or lose position here. If the fingertip hold degrades mid-rep, terminate the set. Establish solid sets of 5 clean wall HSPUs and a minimum 15-second fingertip wall hold before attempting this. Treat each rep as a near-maximal strength effort.",
    equipment: "Wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 17,
    name: "Deficit Fingertip Handstand Push-Up",
    alt: "Parallette fingertip HSPU · deep fingertip push-up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Forearms", p:true}
    ],
    tags: ["shoulders", "triceps", "fingers"],
    diff: 8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:4, shoulder:5, neck:2, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 5,
    kcalPerRep: [1.3, 2.2],
    desc: "A deficit handstand push-up on fingertips — elevated on parallettes or blocks with feet on the wall, lowering past hand level through an extended range of motion. The combination of increased ROM, heavy finger tendon loading, and peak shoulder stress at the bottom position makes this one of the most demanding HSPU variations available without removing the wall. Treat as near-maximal strength work.",
    cues: "Thorough shoulder and wrist warm-up is non-negotiable here. Control the descent especially through the bottom range — that is where shoulder injury risk is highest. Build 8–10 clean wall fingertip HSPUs before adding deficit. The fingertip contact must remain rock solid through the full depth.",
    equipment: "Parallettes or push-up handles + wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 18,
    name: "Freestanding Fingertip Handstand Push-Up",
    alt: "Free fingertip HSPU · freestanding fingertip push-up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Core", p:true}
    ],
    tags: ["shoulders", "triceps", "fingers", "core"],
    diff: 10,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:3, shoulder:5, neck:2, thoracic:1, lowerBack:2, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [1.8, 3],
    hof: true,
    desc: "A freestanding handstand push-up performed entirely on the fingertips — balance, maximal pressing strength, and finger tendon load must all be managed simultaneously with no external support. Each rep demands that a consistent freestanding fingertip handstand be maintained while pressing through a full overhead range of motion. Considered one of the most extreme feats in calisthenics; even athletes with elite handstand and HSPU foundations typically require extensive dedicated fingertip programming to reach this.",
    cues: "Any balance break ends the set immediately — attempting to grind through imbalance here transfers force into the fingers in the worst possible way. Parallettes are strongly recommended for a safer wrist angle and a more reliable bail. The prerequisite list is long: consistent freestanding HS, freestanding HSPU, fingertip freestanding hold, and wall fingertip HSPU reps with clean technique.",
    equipment: "None (parallettes strongly recommended)",
    position: "Inverted",
    youtube: "LINK_TODO"
  }, /* ── ONE-ARM PROGRESSIONS ────────────────────────────────── */

  {
    id: 19,
    name: "One-Arm Wall Handstand",
    alt: "Wall OAH · assisted one-arm handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Forearms", p:true},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 8,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 4,
    joints: {fingers:3, wrist:5, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [3.5, 6],
    desc: "A one-arm handstand hold with the body close to a wall for lateral support — the primary bridge between two-arm and true freestanding one-arm work. The wall handles the lateral fall direction, isolating the unilateral balance and strength demands without the full complexity of a free OAH. The correct entry point into one-arm handstand training for most practitioners.",
    cues: "Position the working hand close enough to the wall that a gentle lean catches you but far enough that the wall does not actively load the handstand. The free arm position — whether reaching out, behind the back, or across the body — must be practised deliberately; it has a substantial effect on the counterbalance. Work the non-dominant arm equally.",
    equipment: "Wall",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 20,
    name: "One-Arm Fingertip Handstand",
    alt: "OAH fingertips · one-arm fingertip balance",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Forearms", p:true}
    ],
    tags: ["shoulders", "core", "wrists", "fingers"],
    diff: 10,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [6, 10],
    hof: true,
    desc: "A freestanding one-arm handstand held entirely on the fingertips of a single hand. The two most extreme handstand variants — one-arm balance and fingertip contact — are combined into a single position. The entire bodyweight is balanced and supported through the fingertips of one hand, with all balance corrections happening within a contact base smaller than a human palm. Genuinely rare; this sits at the absolute frontier of what has been demonstrated in calisthenics.",
    cues: "This should not be attempted without a consistent 5-second freestanding OAH and a well-established freestanding fingertip handstand in both hands. Even then, begin with light fingertip contact alongside the standing hand before removing it. Finger tendon injury risk here is extreme — any fatigue in the contact fingers is an immediate signal to exit the position.",
    equipment: "None (parallettes recommended)",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 21,
    name: "One-Arm Wall Handstand Push-Up",
    alt: "One-arm wall HSPU · unilateral HSPU",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Forearms", p:true}
    ],
    tags: ["shoulders", "triceps", "core"],
    diff: 9,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:3, wrist:5, elbow:4, shoulder:5, neck:2, thoracic:2, lowerBack:3, si:1, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [2, 3.5],
    hof: true,
    desc: "A handstand push-up performed on a single arm with the feet against the wall for balance. All pressing load is handled unilaterally — the wrist, elbow, shoulder, and entire pressing chain on the working side must move and stabilise the full bodyweight through a complete range of motion. Prerequisites: a consistent one-arm wall handstand hold and strong bilateral freestanding HSPU. Extremely rare.",
    cues: "The wall manages the lateral dimension — place the working hand close to the wall but not touching it during the press. Lower with full control; there is no safety margin here and the eccentric must be owned. Parallette height can reduce the wrist angle stress. Develop the one-arm wall hold to 10+ seconds before attempting a single rep.",
    equipment: "Wall (parallettes recommended)",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 22,
    name: "One-Arm Fingertip Handstand Push-Up",
    alt: "One-arm fingertip HSPU · fingertip unilateral HSPU",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Core", p:true}
    ],
    tags: ["shoulders", "triceps", "fingers", "core"],
    diff: 10,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:4, shoulder:5, neck:2, thoracic:2, lowerBack:4, si:2, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [3.5, 6],
    hof: true,
    desc: "A one-arm handstand push-up performed entirely on the fingertips. The absolute pinnacle of handstand pressing — unilateral overhead pressing strength, finger tendon load capacity, and either wall-assisted or freestanding balance must all function simultaneously through a full range of motion. No other standard calisthenics pressing skill exceeds this in combined strength, balance, and tendon demand. Documented examples are extraordinarily rare.",
    cues: "This movement requires the one-arm wall HSPU and the one-arm fingertip handstand to both be independently solid. Finger tendon health is the most fragile variable — if there is any doubt, there is no doubt. Exit immediately if grip integrity degrades during a rep. This is a multi-year goal even for elite practitioners already training fingertip variants and one-arm work concurrently.",
    equipment: "Wall or freestanding (parallettes strongly recommended)",
    position: "Inverted",
    youtube: "LINK_TODO"
  }, /* ── SHAPE VARIANTS ─────────────────────────────────────── */

  {
    id: 23,
    name: "Straddle Handstand",
    alt: "Straddle hold · wide-leg handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Adductors", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 4,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:4},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:2, groin:2, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 2,
    kcalPerRep: [2, 3.5],
    desc: "A freestanding handstand with both legs spread wide to the sides — the lower centre of mass and shortened effective lever arm make this significantly easier to balance than the straight-leg version. A natural intermediate shape between the tuck and the full straight handstand, and the standard entry shape for press handstand training. Also used as a stylistic hold in its own right.",
    cues: "Spread the legs as wide as comfortable — wider reduces the lever, making balance easier. Maintain full scapular elevation and locked elbows just as in the straight position. Point the toes. This is the correct shape to practise the transition: tuck → straddle → straight.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 24,
    name: "Split Handstand",
    alt: "Scissors handstand · front-back split hold",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:false},
      {n:"Hamstrings", p:false}
    ],
    tags: ["shoulders", "core"],
    diff: 5,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:1, hip:4, groin:3, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 4,
    strength: 2,
    kcalPerRep: [2.5, 4],
    desc: "A freestanding handstand with one leg extended forward and one extended backward, creating a vertical split position. The front-back leg separation shifts the centre of mass in the sagittal plane, requiring deliberate balance compensation through the fingers. Requires genuine hip flexibility — a full or near-full front split is the realistic prerequisite. Often entered via a kick-up where the legs naturally separate at the top.",
    cues: "The split position itself is not the hard part — holding the shoulder position while the hips are under asymmetric hip flexor and hamstring pull is. Keep full scapular elevation regardless of what the legs are doing. The tendency is to arch the lower back to compensate for hip tightness — resist it. Work both leg-forward directions.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 25,
    name: "Arch Handstand",
    alt: "Banana handstand · hollowback handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Spinal Erectors", p:true},
      {n:"Glutes", p:false},
      {n:"Core", p:false}
    ],
    tags: ["shoulders", "core"],
    diff: 3,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:2},
    risk: 3,
    joints: {fingers:2, wrist:3, elbow:1, shoulder:2, neck:2, thoracic:3, lowerBack:4, si:1, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 2,
    strength: 1,
    kcalPerRep: [1.5, 2.5],
    desc: "A handstand with the spine arched into extension — hips pushed forward, legs angled behind the vertical line. Occurs naturally in beginners compensating for insufficient shoulder mobility, but is also trained deliberately as a stylistic position in gymnastics and contortion-influenced movement. The arch reduces the shoulder mobility demand at the cost of significant lumbar compression. Not recommended as a target shape for standard handstand training but worth understanding and documenting as its own position.",
    cues: "If this is an unintentional compensation shape: work shoulder and thoracic mobility and drill hollow-body tension in the wall handstand. If training it intentionally: the extension should be distributed across the whole spine, not concentrated at the lumbar. Those with existing lower back issues should approach with caution.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 26,
    name: "Stag Handstand",
    alt: "Stag hold · bent-knee split handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:false},
      {n:"Quadriceps", p:false}
    ],
    tags: ["shoulders", "core"],
    diff: 5,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 2,
    joints: {fingers:2, wrist:3, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:2, si:0, hip:3, groin:1, knee:2, ankle:0, foot:0},
    technique: 4,
    mobility: 3,
    strength: 2,
    kcalPerRep: [2.5, 4],
    desc: "A handstand with one leg extended straight and the other bent — typically the rear leg bent at the knee with the foot pointing upward, or the front leg raised and bent with the knee leading. The asymmetric leg position creates an elegant, expressive shape with less hip flexibility demand than the full split handstand. A staple of gymnastics floor work and widely used in hand balancing as a stylistic hold.",
    cues: "The bent leg introduces asymmetric load in the lower back and pelvis — maintain deliberate neutral lumbar position through the working shoulder chain and core. Both stag configurations (front bend vs rear bend) train different hip positions; work both. Keep the extended leg completely straight and the foot pointed.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 27,
    name: "One-Leg Handstand",
    alt: "Single-leg handstand · unicorn handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 6,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    risk: 3,
    joints: {fingers:2, wrist:4, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 2,
    kcalPerRep: [2.5, 4],
    desc: "A freestanding handstand with one leg extended straight and the other tucked, bent, or resting against the extended leg — the asymmetric mass distribution shifts the centre of mass laterally and sagittally, demanding active compensation through the shoulders and core. A clear intermediate step toward the one-arm handstand and a useful proprioceptive training tool for understanding how leg position affects balance.",
    cues: "The tucked leg should be deliberate in its position, not sloppy — decide where it is and hold it there. The tendency is to let the hips rotate toward the free leg; resist with the obliques. This is good training for understanding how asymmetric body position creates balance demands you cannot fix with wrist adjustments alone.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  }, /* ── ENTRIES & TRANSITIONS ───────────────────────────────── */

  {
    id: 28,
    name: "Jump to Handstand",
    alt: "Two-foot jump entry · jump kick-up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 4,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {fingers:1, wrist:3, elbow:1, shoulder:3, neck:1, thoracic:0, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:1, foot:0},
    technique: 4,
    mobility: 1,
    strength: 2,
    kcalPerRep: [1, 1.8],
    desc: "A handstand entry from a two-footed jump — both feet leave the ground simultaneously as the hands plant, and momentum carries the hips overhead into the inverted position. The symmetric entry makes it easier to land a straight-body handstand than the single-leg kick-up, but the larger momentum load demands good shoulder absorption at the catch. Common in gymnastics and tumbling sequences where the entry follows floor-level work.",
    cues: "Plant the hands firmly with arms already locked — absorb the jump momentum through active shoulders, not collapsing elbows. The height of the jump needs to be calibrated to your strength: too little and you short the handstand, too much and you overrotate. Practise the landing shape from a wall handstand first so you know what to aim for.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 29,
    name: "Cartwheel to Handstand",
    alt: "Cartwheel entry · cartwheel kick-up",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:false},
      {n:"Wrists", p:false}
    ],
    tags: ["shoulders", "core", "wrists"],
    diff: 5,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:2},
    risk: 3,
    joints: {fingers:1, wrist:3, elbow:1, shoulder:3, neck:1, thoracic:1, lowerBack:1, si:0, hip:3, groin:1, knee:0, ankle:1, foot:0},
    technique: 5,
    mobility: 2,
    strength: 2,
    kcalPerRep: [1.5, 2.5],
    desc: "A handstand entered through the lateral momentum of a cartwheel — as the cartwheel reaches the inverted phase, the legs are caught together overhead into a handstand hold rather than continuing through to the landing. The cartwheel generates rotational momentum in the frontal plane that must be stopped and converted into a stable vertical hold. Requires a clean cartwheel with good arm extension and the ability to stop and control the body at the inverted phase.",
    cues: "The cartwheel must be performed with straight arms throughout — any elbow bend at the inverted phase makes catching the handstand nearly impossible. As the second hand plants and the trailing leg swings up, actively pull the legs together and lock the shoulders. The goal is to stop all lateral momentum the moment both legs are overhead.",
    equipment: "None",
    position: "Inverted",
    youtube: "LINK_TODO"
  },

  {
    id: 30,
    name: "Tiger Bend Handstand",
    alt: "Tiger bend · forearm press to handstand",
    muscles: [
      {n:"Shoulders", p:true},
      {n:"Triceps", p:true},
      {n:"Core", p:true},
      {n:"Forearms", p:false}
    ],
    tags: ["shoulders", "triceps", "core"],
    diff: 8,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    risk: 4,
    joints: {fingers:2, wrist:3, elbow:5, shoulder:5, neck:2, thoracic:2, lowerBack:2, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [2.5, 4.5],
    hof: true,
    desc: "A transition from a forearm stand (elbow balance) to a full handstand by pressing the elbows off the floor and extending to lockout — with no wall support and no kick. The forearm-to-handstand press requires the triceps and anterior deltoids to generate force from an extremely short, mechanically disadvantaged position while the entire bodyweight is balanced overhead. A rare, high-skill movement found primarily in hand balancing and gymnastics; the elbow joint sees extreme compressive load at the initiation of the press.",
    cues: "The press initiates with the fingertips driving into the floor to rock the elbows up, not by muscling from a passive forearm rest. The transition through the bent-elbow phase is the hardest moment — too slow and you fail the press, too fast and you lose balance. Practise the forearm stand hold extensively first; you cannot tiger bend from an unstable forearm balance.",
    equipment: "None (parallettes optional for wrist angle)",
    position: "Inverted",
    youtube: "LINK_TODO"
  }];
