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

const stretches = [

  // ══════════════════════════════════════════════════════════════
  // REGION A — Neck & Upper Trapezius
  // ══════════════════════════════════════════════════════════════

  {
    id:201, listed:true,
    name:"Neck Side Tilt Stretch",
    alt:"cervical lateral flexion stretch · ear-to-shoulder stretch",
    muscles:[{"n":"Upper Trapezius","p":true},{"n":"Levator Scapulae","p":false},{"n":"Scalenes","p":false}],
    tags:["neck","upper-body"],
    diff:1.2,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":2,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"A simple cervical lateral flexion hold — the ear is drawn toward the same-side shoulder until a clear stretch is felt along the opposite side of the neck. Directly targets the upper trapezius and scalenes, which accumulate tension from forward head posture, desk work, and any overhead or pulling training.",
    cues:"Sit or stand tall. Let the weight of the head do the work — do not pull with the hand on top. Keep the opposite shoulder depressed and away from the ear; if it rises, the stretch is lost. Hold 30–45 seconds per side.",
    equipment:"None", position:"Standing / Seated",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:202, listed:true,
    name:"Upper Trapezius Stretch | Seated",
    alt:"neck rotation stretch · seated trap stretch",
    muscles:[{"n":"Upper Trapezius","p":true},{"n":"Sternocleidomastoid","p":false},{"n":"Scalenes","p":false}],
    tags:["neck","upper-body"],
    diff:1.3,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":2,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"A seated trap stretch where the head is rotated 45° toward the same side and then tilted diagonally toward the opposite armpit — targeting the posterior fibers of the upper trapezius more precisely than a pure lateral tilt. A useful companion to the side tilt for athletes with asymmetric trap tension from unilateral sport or injury.",
    cues:"Sit on one hand to anchor the shoulder down. Rotate the chin 45° toward that same shoulder, then nod diagonally toward the armpit — not straight down. Do not pull the head with the other hand; use gravity and a light fingertip guide only.",
    equipment:"None", position:"Seated",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:203, listed:true,
    name:"Levator Scapulae Stretch",
    alt:"neck diagonal stretch · levator stretch",
    muscles:[{"n":"Levator Scapulae","p":true},{"n":"Upper Trapezius","p":false}],
    tags:["neck","upper-body"],
    diff:1.4,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":2,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:2,
    desc:"A targeted stretch for the levator scapulae — a muscle that connects the cervical vertebrae to the scapula and is one of the primary contributors to the stiff, aching neck common in pulling athletes and desk workers. The head is rotated away from the side being stretched, then nodded forward-diagonally toward the opposite knee to isolate the levator from the trapezius.",
    cues:"Look across your body toward the opposite hip, then tuck the chin and let the head nod diagonally forward until you feel a deep pull behind and below the ear. Lock the stretching-side shoulder down by sitting on it or gripping a chair edge. 30–45 seconds per side minimum.",
    equipment:"None", position:"Seated",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION B — Chest & Anterior Shoulder
  // ══════════════════════════════════════════════════════════════

  {
    id:210, listed:true,
    name:"Doorway Chest Stretch",
    alt:"pec stretch · doorframe chest stretch",
    muscles:[{"n":"Pectoralis Major","p":true},{"n":"Anterior Deltoid","p":false},{"n":"Biceps","p":false}],
    tags:["chest","shoulders","upper-body"],
    diff:1.5,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":1,"shoulder":2,"neck":0,"thoracic":1,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"The forearm is placed against a doorframe at 90° and the body is rotated away, elongating the pectoralis major and anterior deltoid in a supported position. Three arm heights — low (sternal fibers), mid (clavicular fibers), high (anterior deltoid) — allow the full chest complex to be addressed systematically. Directly counteracts the internal rotation and forward-shoulder posture produced by pressing-heavy training.",
    cues:"Lead the movement with the chest, not by twisting the torso. Keep the shoulder depressed — don't let it shrug up toward the ear during the stretch. Step forward slightly to increase the opening. Hold 30–60 seconds per position per side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:211, listed:true,
    name:"Pec Minor Stretch | Wall Corner",
    alt:"pec minor stretch · corner stretch",
    muscles:[{"n":"Pectoralis Minor","p":true},{"n":"Pectoralis Major","p":false},{"n":"Anterior Deltoid","p":false}],
    tags:["chest","shoulders","upper-body"],
    diff:1.6,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":1,"shoulder":2,"neck":0,"thoracic":2,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:2, technique:2,
    desc:"Performed in a corner or between two surfaces — both forearms are placed on the walls and the body leans forward until a bilateral pec stretch is felt. The corner angle opens both sides simultaneously and naturally biases the pec minor and coracobrachialis more than a single-arm doorway stretch. A key restoration tool for athletes with protracted scapulae and rounded shoulders.",
    cues:"Arms at 90°, elbows at shoulder height. Lean in by shifting weight onto the front foot — don't hyperextend the lower back. Squeeze the shoulder blades together actively as you lean to deepen the anterior stretch. Hold 45–60 seconds.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:212, listed:true,
    name:"Supine Chest Opener | (Foam Roller)",
    alt:"foam roller chest stretch · thoracic chest opener",
    muscles:[{"n":"Pectoralis Major","p":true},{"n":"Anterior Deltoid","p":false},{"n":"Thoracic Spine","p":false}],
    tags:["chest","shoulders","thoracic","upper-body"],
    diff:1.7,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":2,"neck":0,"thoracic":2,"lowerBack":1,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"A foam roller placed perpendicular under the thoracic spine allows the arms to open out to the sides with gravity — the chest and anterior shoulder relax passively into the stretch as the thoracic extension simultaneously unlocks the mid-back. One of the few chest stretches that couples pec lengthening with thoracic mobility simultaneously.",
    cues:"Place the roller horizontally at mid-back level. Arms can be in a T or Y position — T loads the mid pec, Y the upper pec and anterior delt. Let gravity do the work; do not force the arms down. 60–90 seconds. Roll the roller up one segment and repeat.",
    equipment:"Foam Roller", position:"Supine",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION C — Posterior Shoulder & Rotator Cuff
  // ══════════════════════════════════════════════════════════════

  {
    id:220, listed:true,
    name:"Cross-Body Posterior Shoulder Stretch",
    alt:"posterior shoulder stretch · cross-arm stretch",
    muscles:[{"n":"Posterior Deltoid","p":true},{"n":"Infraspinatus","p":false},{"n":"Rhomboids","p":false}],
    tags:["shoulders","upper-body"],
    diff:1.3,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":1,"shoulder":1,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"The arm is drawn horizontally across the chest and held by the opposite hand, elongating the posterior deltoid, infraspinatus, and rhomboids. Posterior capsule tightness is extremely common in pressing-dominant athletes and throwers, and contributes to shoulder impingement and internal rotation deficit. This stretch is the primary remedy.",
    cues:"Keep the stretched arm at shoulder height — the moment the elbow drops below parallel, the target tissue changes. Draw the elbow toward the chin, not just the chest. Don't rotate the torso to compensate. 30–45 seconds per side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:221, listed:true,
    name:"Sleeper Stretch",
    alt:"posterior shoulder internal rotation stretch · sleeper position stretch",
    muscles:[{"n":"Posterior Rotator Cuff","p":true},{"n":"Posterior Deltoid","p":false},{"n":"Posterior Capsule","p":false}],
    tags:["shoulders","upper-body"],
    diff:2.5,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:2,
    joints:{"fingers":0,"wrist":0,"elbow":1,"shoulder":3,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:3, technique:3,
    desc:"Performed side-lying with the lower arm at 90° abduction and the elbow at 90° flexion — the top hand applies a gentle downward press on the lower wrist, internally rotating the shoulder and stretching the posterior capsule and external rotators. Widely used in shoulder rehabilitation protocols for athletes with GIRD (glenohumeral internal rotation deficit), and a standard prescription for throwers and overhead athletes.",
    cues:"Stack the shoulder directly over the other — do not let the body roll backward. The pressure should be gentle and sustained, not forceful. If any pain is felt inside the joint (not a stretch sensation behind it), stop immediately. 60 seconds per side is the evidence-backed minimum.",
    equipment:"None", position:"Side-lying",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION D — Biceps & Elbow Flexors
  // ══════════════════════════════════════════════════════════════

  {
    id:230, listed:true,
    name:"Biceps Wall Stretch",
    alt:"wall biceps stretch · supinated arm wall stretch",
    muscles:[{"n":"Biceps","p":true},{"n":"Anterior Deltoid","p":false},{"n":"Forearm Flexors","p":false}],
    tags:["shoulders","upper-body"],
    diff:1.5,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":1,"elbow":1,"shoulder":1,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:2,
    desc:"The palm is placed flat on a wall at shoulder height with the arm extended and rotated so the thumb points down — the body then turns away until the biceps and anterior deltoid are placed under tension. Elongates the biceps from both its proximal attachment (shoulder) and distal attachment (elbow), which is impossible in standard standing curls-position stretches. Important for chin-up and ring athletes with chronic bicipital tightness.",
    cues:"Thumb points toward the floor — supinating the arm maximally extends the biceps long head. Rotate the body slowly away from the wall until you feel the stretch along the front of the arm and shoulder. Do not hyperextend the elbow. 30–45 seconds per side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION E — Triceps & Elbow Extensors
  // ══════════════════════════════════════════════════════════════

  {
    id:235, listed:true,
    name:"Overhead Triceps Stretch",
    alt:"behind-head triceps stretch · arm over head triceps",
    muscles:[{"n":"Triceps","p":true},{"n":"Teres Minor","p":false}],
    tags:["shoulders","upper-body"],
    diff:1.4,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":2,"shoulder":1,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"The arm is raised overhead, the elbow is bent to place the hand behind the neck, and the opposite hand applies gentle pressure on the elbow to increase the stretch on the triceps long head. The long head crosses the shoulder joint, so this position elongates it through both the elbow and shoulder simultaneously — the only way to achieve a full triceps stretch.",
    cues:"Push the elbow upward and slightly behind the head, not straight up — this prevents the shoulder from protracting. Don't let the lower back arch to compensate. The opposite hand guides; it doesn't force. 30–45 seconds per arm.",
    equipment:"None", position:"Standing / Seated",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:236, listed:true,
    name:"Triceps Doorframe Stretch",
    alt:"doorframe triceps stretch · wall triceps overhead",
    muscles:[{"n":"Triceps","p":true},{"n":"Lateral Head Triceps","p":false}],
    tags:["shoulders","upper-body"],
    diff:1.6,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":2,"shoulder":1,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:2, technique:1,
    desc:"The elbow is bent and the forearm placed flat against a wall above the head — the body then leans forward until the triceps is stretched under a controlled load. Unlike the overhead stretch, using a fixed surface allows an even deeper elbow flexion angle without requiring the opposite hand, making it easier to relax fully into the position.",
    cues:"Forearm stays flat on the surface throughout. Walk the feet forward, not the hips back, to lean into the stretch. Keep the shoulder packed — don't let it elevate. 30–45 seconds each side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION F — Lats & Mid-Back
  // ══════════════════════════════════════════════════════════════

  {
    id:240, listed:true,
    name:"Kneeling Lat Stretch",
    alt:"prayer stretch lats · kneeling side lat stretch",
    muscles:[{"n":"Latissimus Dorsi","p":true},{"n":"Teres Major","p":false},{"n":"Thoracic Spine","p":false}],
    tags:["lats","back","shoulders","upper-body"],
    diff:1.6,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":1,"elbow":0,"shoulder":2,"neck":0,"thoracic":1,"lowerBack":1,"si":0,"hip":1,"groin":0,"knee":1,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"Kneeling in front of a bench or box, both hands are placed on the surface and the hips are pushed back toward the heels while the chest drops toward the floor — elongating the latissimus dorsi from its humeral attachment to the pelvis. A direct and accessible lat stretch critical for improving overhead range, pull-up depth, and front lever prerequisites.",
    cues:"Arms stay straight and at shoulder width. Push the hips back and down simultaneously — don't just lower the chest. For a unilateral variation, place only one arm out and rotate slightly to bias that side. 45–60 seconds per position.",
    equipment:"None", position:"Kneeling",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:241, listed:true,
    name:"Overhead Side Stretch",
    alt:"lateral trunk stretch · standing side stretch",
    muscles:[{"n":"Latissimus Dorsi","p":true},{"n":"Obliques","p":false},{"n":"Intercostals","p":false}],
    tags:["lats","core","upper-body"],
    diff:1.3,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":1,"neck":0,"thoracic":1,"lowerBack":1,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"From standing, one arm is raised overhead and the torso leans away from that side — elongating the lat, intercostals, and obliques in the frontal plane. A quick, effective stretch accessible to anyone; especially useful before overhead pressing or after sessions that accumulate thoracic tightness on one side.",
    cues:"Reach the arm long overhead before leaning — create length before bending. The lean is a pure lateral movement in the frontal plane; don't rotate forward or backward. Opposite hand can be placed on the hip for stability. 30 seconds per side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:242, listed:true,
    name:"Seated Lat Stretch | Band (Band)",
    alt:"band lat stretch · seated pull-down stretch",
    muscles:[{"n":"Latissimus Dorsi","p":true},{"n":"Teres Major","p":false},{"n":"Posterior Deltoid","p":false}],
    tags:["lats","back","upper-body"],
    diff:1.8,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":1,"wrist":1,"elbow":1,"shoulder":2,"neck":0,"thoracic":1,"lowerBack":1,"si":0,"hip":1,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:2, technique:2,
    desc:"A resistance band is anchored overhead and gripped with one or both hands; the athlete sits back and down, using bodyweight and the band's tension to achieve a decompressive lat stretch not possible with bodyweight alone. The band allows a loading angle that simultaneously distracts the shoulder joint and elongates the lat through its full range — valuable after heavy pulling sessions.",
    cues:"Sit back into the stretch, not just pull the band down. Keep the core slightly engaged to protect the lumbar spine from excessive extension. For a unilateral version, grip with one hand and rotate slightly to bias that side further. 45–60 seconds.",
    equipment:"Band", position:"Seated",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION G — Forearms & Wrists
  // ══════════════════════════════════════════════════════════════

  {
    id:245, listed:true,
    name:"Forearm Flexor Stretch | Kneeling",
    alt:"wrist extension stretch · palm-down forearm stretch",
    muscles:[{"n":"Forearm Flexors","p":true},{"n":"Wrist Flexors","p":true}],
    tags:["wrists","forearms","upper-body"],
    diff:1.5,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":1,"wrist":3,"elbow":1,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":1,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"From a kneeling or quadruped position, the palms are placed flat on the floor with fingers pointing backward toward the knees — the bodyweight is gradually shifted forward to load the wrists into extension, elongating the forearm flexors and wrist flexor tendons. An essential post-session stretch after any push-up, dip, or handstand training that loads the wrists in flexion.",
    cues:"Start with fingers pointing to the side rather than fully backward if the wrists are tight — move to the fingers-back position over time. Only shift bodyweight forward to the tolerance of the wrist, never force. Supplement with static wrist circles between sets. 30 seconds per direction.",
    equipment:"None", position:"Kneeling / Quadruped",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:246, listed:true,
    name:"Forearm Extensor Stretch",
    alt:"wrist flexion stretch · forearm top stretch",
    muscles:[{"n":"Forearm Extensors","p":true},{"n":"Wrist Extensors","p":true}],
    tags:["wrists","forearms","upper-body"],
    diff:1.3,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":1,"wrist":2,"elbow":1,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"The arm is extended forward with the back of the hand facing up — the opposite hand cups the back of the hand and applies a gentle downward press into wrist flexion, elongating the forearm extensors and finger extensors. Counteracts the extensor overactivation common after deadlifts, rows, and pull-up training where the extensors act as synergistic stabilisers.",
    cues:"Extend the elbow fully before applying pressure — a bent elbow reduces the extensors' effective length. Apply pressure gradually and hold at the point of comfortable stretch, not maximum range. 30 seconds per arm.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:247, listed:true,
    name:"Reverse Prayer Stretch",
    alt:"prayer hands behind back · reverse namaste",
    muscles:[{"n":"Forearm Flexors","p":true},{"n":"Wrist Flexors","p":true},{"n":"Anterior Deltoid","p":false}],
    tags:["wrists","forearms","shoulders","upper-body"],
    diff:2.2,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:2,
    joints:{"fingers":1,"wrist":3,"elbow":1,"shoulder":1,"neck":0,"thoracic":1,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:2, technique:2,
    desc:"Both hands are placed back-to-back behind the spine and then rotated to bring the palms together in a reverse prayer position — the fingers point downward and wrists are driven into flexion by the combined weight of the forearms. More effective than a solo wrist stretch because both sides are loaded simultaneously and the shoulder extension component adds an anterior deltoid element.",
    cues:"If palms cannot meet, place the backs of the hands together as a regression. Never force the wrists — move only until a clear stretch is felt, not pain. Keep the chest up and the thoracic spine tall. 30–45 seconds.",
    equipment:"None", position:"Standing / Seated",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION H — Hip Flexors & Quads
  // ══════════════════════════════════════════════════════════════

  {
    id:250, listed:true,
    name:"Kneeling Hip Flexor Stretch",
    alt:"low lunge stretch · runner's lunge static hold",
    muscles:[{"n":"Hip Flexors","p":true},{"n":"Rectus Femoris","p":false},{"n":"Psoas","p":false}],
    tags:["hips","quads","legs"],
    diff:1.8,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":2,"groin":1,"knee":2,"ankle":0,"foot":0},
    strength:1, mobility:2, technique:2,
    desc:"A kneeling lunge where the rear knee is on the floor and the hips are driven forward into terminal hip extension — directly elongating the iliopsoas, rectus femoris, and TFL of the back leg. Hip flexor tightness is one of the most pervasive training deficits; it inhibits glute activation, compresses the lumbar discs, and limits squat depth. This is the primary corrective.",
    cues:"Posterior tilt the pelvis — tuck the tailbone under before driving the hips forward, or the lumbar spine extends instead of the hip. The torso stays vertical. Add a slight trunk lateral lean away from the rear leg to target the psoas specifically. 45–60 seconds per side.",
    equipment:"None", position:"Kneeling",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:251, listed:true,
    name:"Couch Stretch",
    alt:"wall-assisted quad stretch · kneeling wall quad",
    muscles:[{"n":"Rectus Femoris","p":true},{"n":"Hip Flexors","p":true},{"n":"Vastus Intermedius","p":false}],
    tags:["quads","hips","legs"],
    diff:3.0,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:2,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":2,"groin":0,"knee":3,"ankle":0,"foot":0},
    strength:1, mobility:3, technique:3,
    desc:"The rear shin is placed against a wall (or the seat of a couch), the front foot steps forward, and the torso is raised upright — placing the rear hip into terminal extension and the rear knee into deep flexion simultaneously. Arguably the most effective quadriceps and rectus femoris stretch available; the combined knee flexion and hip extension demands position that cannot be achieved with a standing stretch.",
    cues:"Start with the torso leaning forward and slowly raise upright only as flexibility allows. Posterior tilt the pelvis before raising upright — identical to the kneeling hip flexor cue. Do not hyperextend the lower back to appear more upright. 60–90 seconds per side; this stretch requires patience.",
    equipment:"None", position:"Kneeling",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:252, listed:true,
    name:"Couch Stretch | Wall-Assisted",
    alt:"couch stretch with wall · elevated couch stretch",
    muscles:[{"n":"Rectus Femoris","p":true},{"n":"Hip Flexors","p":true},{"n":"Vastus Intermedius","p":false}],
    tags:["quads","hips","legs"],
    diff:3.4,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:2,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":2,"groin":0,"knee":3,"ankle":1,"foot":0},
    strength:1, mobility:3, technique:3,
    desc:"An advanced couch stretch variation where the shin is elevated on a bench or box rather than a wall — the heel-to-hip distance is reduced, placing the knee into a deeper flexion angle and demanding significantly more rectus femoris and hip flexor length. Reserved for athletes who have plateaued with the floor version and need a more intense end-range stimulus.",
    cues:"Same pelvic tilt cue as the standard version — tuck the tailbone under before raising the torso. The back foot is plantarflexed against the elevated surface, not dorsiflexed. Do not attempt this without spending at least 4 weeks in the floor version first. 60 seconds per side.",
    equipment:"None", position:"Kneeling",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:253, listed:true,
    name:"Standing Quad Stretch",
    alt:"standing knee bend stretch · single-leg quad hold",
    muscles:[{"n":"Quadriceps","p":true},{"n":"Rectus Femoris","p":false}],
    tags:["quads","legs"],
    diff:1.5,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":1,"groin":0,"knee":2,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"Standing on one leg, the opposite heel is drawn toward the glutes and held with the same-side hand — the knee drops down and back to isolate the quad. A quick, accessible stretch deployable anywhere without floor contact, making it practical as an in-session stretch between squat sets.",
    cues:"Squeeze the glute of the stretching leg — this simultaneously maximises hip extension and intensifies the rectus femoris component. Keep the knees together; the stretching knee should not flare out to the side. Brace the core to prevent a lower back arch. 30–45 seconds per side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:254, listed:true,
    name:"Prone Quad Stretch",
    alt:"lying quad stretch · front-lying quad",
    muscles:[{"n":"Quadriceps","p":true},{"n":"Hip Flexors","p":false}],
    tags:["quads","legs"],
    diff:1.7,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":1,"elbow":1,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":1,"groin":0,"knee":2,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"Lying face down, the heel is drawn toward the glutes and held with the ipsilateral hand — the prone hip position prevents anterior pelvic tilt and eliminates the lower back arch common in the standing version, placing the stretch entirely through the quad and eliminating hip flexor compensation. The most isolated quad stretch available.",
    cues:"Keep the hip pressed into the floor throughout — if the hip lifts, the pelvis is tilting and the hip flexor is substituting. Squeeze the glute of the stretching side to maximise hip extension. A pillow under the abdomen reduces lumbar discomfort. 45–60 seconds per side.",
    equipment:"None", position:"Prone",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION I — Hamstrings & Posterior Chain
  // ══════════════════════════════════════════════════════════════

  {
    id:255, listed:true,
    name:"Seated Hamstring Stretch",
    alt:"straight-leg forward fold · pike stretch",
    muscles:[{"n":"Hamstrings","p":true},{"n":"Calves","p":false},{"n":"Erector Spinae","p":false}],
    tags:["hamstrings","legs","posterior-chain"],
    diff:2.0,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":2,"groin":0,"knee":1,"ankle":1,"foot":0},
    strength:1, mobility:2, technique:2,
    desc:"Seated on the floor with legs extended together, the torso hinges forward from the hips until a stretch is felt through the hamstrings and posterior chain. The seated position removes any need for single-leg balance and allows both hamstrings to be loaded simultaneously for a time-efficient hold. Hip flexor tightness often limits forward range; addressing both before this stretch improves results significantly.",
    cues:"Hinge from the hips, not by rounding the lower back — the spine stays long and the chest leads. Pulling the toes back (dorsiflexion) adds a calf and sciatic component. Use a strap around the feet if the hamstrings prevent reaching the feet comfortably. 60 seconds minimum for connective tissue adaptation.",
    equipment:"None", position:"Seated",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:256, listed:true,
    name:"Supine Hamstring Stretch",
    alt:"lying hamstring stretch · dead bug hamstring",
    muscles:[{"n":"Hamstrings","p":true},{"n":"Glutes","p":false},{"n":"Calves","p":false}],
    tags:["hamstrings","legs","posterior-chain"],
    diff:1.8,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":2,"groin":0,"knee":1,"ankle":1,"foot":0},
    strength:1, mobility:2, technique:1,
    desc:"Lying supine with one leg flat on the floor, the opposite leg is raised toward the ceiling with the knee extended — the hamstring is elongated under gravity without any need for lumbar flexion or hip flexor loading. The supine position eliminates the compensatory lower back rounding that occurs in seated and standing versions, making this the most joint-safe hamstring stretch.",
    cues:"Keep the opposite leg flat on the floor with the quad engaged — lifting it changes the hip angle of the stretch leg. Dorsiflexion of the raised foot increases the sciatic nerve component. Hold the thigh, not the shin — pulling the knee in flexes it and defeats the stretch. 60 seconds per side.",
    equipment:"None", position:"Supine",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:257, listed:true,
    name:"Supine Hamstring Stretch | (Strap)",
    alt:"strap hamstring stretch · yoga strap hamstring",
    muscles:[{"n":"Hamstrings","p":true},{"n":"Calves","p":false},{"n":"Glutes","p":false}],
    tags:["hamstrings","legs","posterior-chain"],
    diff:1.9,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":1,"wrist":1,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":2,"groin":0,"knee":1,"ankle":2,"foot":0},
    strength:1, mobility:2, technique:1,
    desc:"The supine hamstring stretch performed with a strap looped around the foot — the strap allows deeper hip flexion angles than the unassisted version while maintaining a fully extended knee and a dorsiflexed ankle, making it the most effective option for athletes with very short hamstrings who cannot yet achieve sufficient range without compensating.",
    cues:"Loop the strap around the ball of the foot, not the arch. Keep the foot dorsiflexed throughout to add a sciatic nerve glide component. The strap is a guide, not a lever — pull only until a deep but comfortable stretch is felt. 60–90 seconds per side.",
    equipment:"Strap", position:"Supine",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:258, listed:true,
    name:"Standing Single-Leg Hamstring Stretch",
    alt:"foot-elevated hamstring stretch · standing split stretch",
    muscles:[{"n":"Hamstrings","p":true},{"n":"Calves","p":false},{"n":"Glutes","p":false}],
    tags:["hamstrings","legs","posterior-chain"],
    diff:2.1,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":2,"groin":0,"knee":1,"ankle":1,"foot":0},
    strength:1, mobility:2, technique:2,
    desc:"One leg is elevated on a surface (bench, bar, or step) with the knee extended and the foot dorsiflexed — the torso then hinges forward over the elevated leg until the hamstrings are under tension. The height of the surface controls intensity, allowing a progressive challenge that no floor stretch can match. Critical for gymnastics, martial arts, and any sport requiring high kicks.",
    cues:"Hinge from the hip, not by rounding the spine — lead with the chest. Square the hips to the elevated leg; rotating the hip open changes the stretch angle and reduces the target tissue load. Grip the foot or ankle only if flexibility allows; otherwise leave arms free. 45–60 seconds per side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:259, listed:true,
    name:"Pancake Stretch",
    alt:"straddle forward fold · wide-leg pike",
    muscles:[{"n":"Hamstrings","p":true},{"n":"Adductors","p":true},{"n":"Hip Flexors","p":false},{"n":"Glutes","p":false}],
    tags:["hamstrings","adductors","legs","posterior-chain"],
    diff:4.2,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:2,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":1,"hip":3,"groin":3,"knee":1,"ankle":0,"foot":0},
    strength:1, mobility:4, technique:3,
    desc:"A seated wide-leg forward fold — legs are spread as wide as possible and the torso hinges forward until the chest approaches the floor. Simultaneously demands maximum hip flexion, adductor flexibility, and hamstring length, making it the most comprehensive posterior chain and groin stretch in a single position. A prerequisite for the front split and a staple in gymnastics, martial arts, and dance conditioning.",
    cues:"Hinge from the hips first — the chest leads and the spine stays as long as possible. Internally rotate the legs (toes pointing up or slightly in) rather than externally to maximise hamstring bias vs. adductor bias depending on current limiting factor. Inch forward over weeks, not sessions. 90–120 seconds minimum per session.",
    equipment:"None", position:"Seated",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION J — Adductors & Groin
  // ══════════════════════════════════════════════════════════════

  {
    id:260, listed:true,
    name:"Butterfly Stretch",
    alt:"seated groin stretch · seated soles-together stretch",
    muscles:[{"n":"Adductors","p":true},{"n":"Hip External Rotators","p":false},{"n":"Groin","p":false}],
    tags:["adductors","hips","groin","legs"],
    diff:1.8,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":2,"groin":2,"knee":1,"ankle":0,"foot":0},
    strength:1, mobility:2, technique:1,
    desc:"Seated with the soles of the feet together and the knees falling out to the sides — the adductors, pectineus, and short hip external rotators are elongated under a passive load provided by the weight of the legs or light elbow pressure on the inner thighs. One of the most foundational groin stretches; applicable before any squat pattern, lateral movement, or martial arts session.",
    cues:"Sit tall with the spine long — collapsing through the lumbar spine reduces hip mobility and reduces the stretch. Draw the feet closer to the pelvis to increase intensity. Light elbow pressure on the inner thighs should be gradual, not a forced push. 60 seconds minimum; increase toward 2–3 minutes for significant groin flexibility improvements.",
    equipment:"None", position:"Seated",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:261, listed:true,
    name:"Wide-Leg Seated Stretch",
    alt:"seated straddle · wide-angle seated pose",
    muscles:[{"n":"Adductors","p":true},{"n":"Hamstrings","p":true},{"n":"Groin","p":false}],
    tags:["adductors","hamstrings","groin","legs"],
    diff:2.6,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":3,"groin":3,"knee":1,"ankle":0,"foot":0},
    strength:1, mobility:3, technique:2,
    desc:"Seated with legs spread as wide as is currently achievable — the adductors and medial hamstrings are loaded simultaneously under the passive load of the legs' weight. The width is incrementally challenged over time by placing hands forward and leaning the torso toward the floor. A stepping stone to the full pancake, this stretch is the most direct tool for building straddle width.",
    cues:"Sit on a folded blanket if the pelvis tilts backward — hip flexor tightness is the most common reason the lumbar spine rounds in this position. Internally rotate the legs (toes up) to bias the medial hamstrings; externally rotate (toes out) to bias the adductors more. Progress width by inches over weeks, not sessions.",
    equipment:"None", position:"Seated",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:262, listed:true,
    name:"Side Lunge Groin Stretch",
    alt:"lateral lunge groin stretch · cossack stretch hold",
    muscles:[{"n":"Adductors","p":true},{"n":"Groin","p":true},{"n":"Hip Flexors","p":false}],
    tags:["adductors","groin","hips","legs"],
    diff:2.3,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":3,"groin":3,"knee":2,"ankle":1,"foot":0},
    strength:1, mobility:2, technique:2,
    desc:"A static hold at the bottom of a deep lateral lunge — the body weight is shifted over one bent leg while the opposite leg remains fully extended with the heel flat, pulling the adductors of the straight leg into a sustained stretch. The most functional and sport-relevant groin stretch because it approximates the mechanics of lateral deceleration and groin-strain-risk positions in sport.",
    cues:"Keep the extended heel flat on the floor — if it lifts, ankle dorsiflexion or hamstring length is limiting rather than the groin. The working knee tracks over the foot, not caving inward. Sit deeper by pressing the hip down, not by widening the stance. 45 seconds per side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:263, listed:true,
    name:"Full Front Split",
    alt:"sagittal split · front split",
    muscles:[{"n":"Hip Flexors","p":true},{"n":"Hamstrings","p":true},{"n":"Adductors","p":false},{"n":"Rectus Femoris","p":false}],
    tags:["hips","hamstrings","quads","legs","posterior-chain"],
    diff:5.5,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:3,
    joints:{"fingers":0,"wrist":1,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":2,"si":1,"hip":4,"groin":2,"knee":1,"ankle":0,"foot":0},
    strength:2, mobility:5, technique:3,
    desc:"Both legs are extended in opposite directions in the sagittal plane until the pelvis approaches or reaches the floor — simultaneously demanding terminal hip extension (rear leg) and terminal hip flexion combined with maximal hamstring length (front leg). A long-term flexibility goal and prerequisite for gymnastics and martial arts; not a beginner or early-stage stretch. Requires prerequisite flexibility in both kneeling hip flexor and standing single-leg hamstring stretches before attempting.",
    cues:"Use blocks or hands on the floor to support bodyweight and control the descent — never drop unsupported into a split. Square the hips toward the front leg; rotating the rear hip open shortens the session but delays long-term progress. Progress 1–2 cm deeper per week maximum. 90 seconds per side at near-full range for adaptation.",
    equipment:"None", position:"Prone / Dynamic",
    kcalPer3SecHold:[0.01,0.03],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION K — Glutes & Hip External Rotators
  // ══════════════════════════════════════════════════════════════

  {
    id:264, listed:true,
    name:"Figure-4 Glute Stretch | Supine",
    alt:"supine pigeon · figure-4 stretch",
    muscles:[{"n":"Glutes","p":true},{"n":"Piriformis","p":true},{"n":"Hip External Rotators","p":false}],
    tags:["glutes","hips"],
    diff:2.2,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":3,"groin":0,"knee":2,"ankle":0,"foot":0},
    strength:1, mobility:2, technique:1,
    desc:"Supine with one ankle crossed over the opposite knee in a figure-4 shape — the leg is then drawn toward the chest by pulling behind the supporting thigh, loading the piriformis and deep hip external rotators. A gentler alternative to pigeon pose that is accessible regardless of hip flexibility and safer for athletes with anterior knee pain or poor hip range of motion.",
    cues:"Push the crossed knee away from the chest while simultaneously drawing the supporting leg in — this reciprocal action deepens the external rotation component. The ankle, not the shin, crosses the thigh — shin-crossing compresses the knee. Both shoulders stay flat on the floor throughout. 60 seconds per side.",
    equipment:"None", position:"Supine",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:265, listed:true,
    name:"Figure-4 Glute Stretch | Seated",
    alt:"seated pigeon · chair stretch",
    muscles:[{"n":"Glutes","p":true},{"n":"Piriformis","p":true},{"n":"Hip External Rotators","p":false}],
    tags:["glutes","hips"],
    diff:2.0,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":2,"groin":0,"knee":2,"ankle":0,"foot":0},
    strength:1, mobility:2, technique:1,
    desc:"The ankle of one leg is crossed over the opposite thigh while seated in a chair or on the floor — the forward torso hinge deepens the glute and piriformis stretch. Practical for office or post-session contexts where lying supine is impractical; the seated position allows gradual self-progression by increasing the torso lean.",
    cues:"Sit upright and hinge forward from the hip — do not round the back. Keep the crossed foot dorsiflexed to protect the knee. For a deeper stretch, apply gentle downward pressure on the crossed knee while leaning forward. 45–60 seconds per side.",
    equipment:"None", position:"Seated",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:266, listed:true,
    name:"Pigeon Pose Stretch",
    alt:"kapotasana stretch · hip opener pigeon",
    muscles:[{"n":"Piriformis","p":true},{"n":"Glutes","p":true},{"n":"Hip External Rotators","p":false},{"n":"Hip Flexors","p":false}],
    tags:["glutes","hips"],
    diff:2.8,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:2,
    joints:{"fingers":0,"wrist":1,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":1,"hip":3,"groin":1,"knee":2,"ankle":1,"foot":0},
    strength:1, mobility:3, technique:2,
    desc:"A floor-based stretch where the front shin is laid across the body and the rear leg extends straight behind — one of the deepest accessible positions for the piriformis, gluteus medius, and deep hip rotators. Simultaneously loads the hip flexors of the rear leg. A significant improvement over the figure-4 stretch for athletes with adequate hip range who need greater depth.",
    cues:"Square the hips toward the floor — do not let the hip of the front leg roll open toward the floor; that shifts load to the IT band and knee, not the piriformis. Prop on hands or forearms based on current flexibility. Ease into the position over 30 seconds, then hold 60–90 seconds per side minimum.",
    equipment:"None", position:"Prone / Ground",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:267, listed:true,
    diff:2.4,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:2,
    joints:{"fingers":0,"wrist":1,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":3,"groin":1,"knee":2,"ankle":0,"foot":0},
    strength:1, mobility:3, technique:3,
    desc:"Both shins are stacked horizontally — the bottom shin flat on the floor and the top shin stacked directly above it — loading both hip external rotator complexes simultaneously. A more demanding alternative to the single pigeon that also develops the bilateral hip external rotation needed for deep squatting and advanced gymnastics positions.",
    cues:"Flex both feet to protect the knee joints. Sit tall and hinge forward from the hips when ready to deepen — do not round the lower back immediately. If the top knee is several inches above the bottom ankle, work with the feet apart first before stacking them. 60–90 seconds.",
    equipment:"None", position:"Seated",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION L — IT Band & TFL
  // ══════════════════════════════════════════════════════════════

  {
    id:268, listed:true,
    name:"Standing IT Band Stretch",
    alt:"cross-legged IT band stretch · standing iliotibial stretch",
    muscles:[{"n":"IT Band","p":true},{"n":"TFL","p":true},{"n":"Glute Medius","p":false}],
    tags:["hips","legs","glutes"],
    diff:1.7,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":0,"hip":2,"groin":1,"knee":1,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"Standing with one leg crossed behind the other, the body leans away from the rear leg while a hand reaches overhead in the same direction — creating a lateral tensile load along the IT band and TFL. IT band tightness is closely linked to runner's knee and lateral knee pain in athletes with high-volume lower body training; this stretch is commonly prescribed as a conservative management tool.",
    cues:"Cross the rear foot behind the front and lock the stance. The lean must be pure lateral — not forward or backward. Reaching the ipsilateral arm overhead (same side as the leg being stretched) extends the stretch into the TFL insertion. 30–45 seconds per side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:269, listed:true,
    name:"Supine IT Band Stretch",
    alt:"lying IT band stretch · supine cross-body knee pull",
    muscles:[{"n":"IT Band","p":true},{"n":"TFL","p":false},{"n":"Glute Medius","p":false}],
    tags:["hips","legs","glutes"],
    diff:1.9,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":1,"si":1,"hip":2,"groin":0,"knee":1,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"Supine with one knee bent and the foot planted, the knee is guided across the midline toward the opposite side of the floor — placing a frontal-plane tension through the IT band and lateral hip. The floor-anchored position allows deeper sustained tension without balance demands, making this effective for athletes who cannot achieve the standing version comfortably.",
    cues:"Keep the opposite shoulder flat on the floor throughout — if it lifts, the rotation is coming from the thoracic spine rather than the hip, and the IT band stretch is lost. The arm of the stretching side can be extended to the side to anchor the shoulder. 45–60 seconds per side.",
    equipment:"None", position:"Supine",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION M — Calves, Soleus & Achilles
  // ══════════════════════════════════════════════════════════════

  {
    id:270, listed:true,
    name:"Standing Calf Stretch | Wall",
    alt:"gastrocnemius stretch · straight-leg calf stretch",
    muscles:[{"n":"Gastrocnemius","p":true},{"n":"Soleus","p":false},{"n":"Achilles Tendon","p":false}],
    tags:["calves","ankles","legs"],
    diff:1.4,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":1,"ankle":2,"foot":2},
    strength:1, mobility:1, technique:1,
    desc:"The hands are placed on a wall for support, one leg steps back with the heel flat on the floor and the knee locked straight — the calf (primarily gastrocnemius) is loaded through ankle dorsiflexion under the body's forward-leaning weight. Ankle dorsiflexion restriction is a leading cause of squat depth loss, knee cave, and Achilles tendinopathy; this is the most direct address.",
    cues:"The rear heel must stay completely flat — if it lifts, step the foot further back. Keep the knee locked straight to target the gastrocnemius specifically. Lean body weight into the wall by shifting the hips forward, not by bending the rear leg. 45–60 seconds per side.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:271, listed:true,
    name:"Soleus Stretch | Bent-Knee",
    alt:"bent-knee calf stretch · soleus wall stretch",
    muscles:[{"n":"Soleus","p":true},{"n":"Achilles Tendon","p":false}],
    tags:["calves","ankles","legs"],
    diff:1.5,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":2,"ankle":2,"foot":2},
    strength:1, mobility:1, technique:1,
    desc:"The same wall-lean position as the standing calf stretch but with the rear knee bent 20–30° — the bent knee takes the gastrocnemius off maximum stretch and isolates the deeper soleus, which is a key Achilles tendon load-bearing structure. Because the soleus is the primary ankle stabiliser and the deeper Achilles contributor, stretching it specifically is critical for runners, jumpers, and anyone with Achilles tendinopathy.",
    cues:"Keep the heel completely flat and bend the knee only 20–30° — more flexion loses tension, less flexion shifts the stretch back to the gastrocnemius. Lean the knee directly over the foot, not inward. 45–60 seconds per side. Often paired with the straight-leg version for complete lower-leg restoration.",
    equipment:"None", position:"Standing",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:272, listed:true,
    name:"Downward Dog Heel Drop",
    alt:"heel-drop stretch · downward dog calf stretch",
    muscles:[{"n":"Gastrocnemius","p":true},{"n":"Soleus","p":false},{"n":"Plantar Fascia","p":false}],
    tags:["calves","ankles","legs","posterior-chain"],
    diff:1.6,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":1,"wrist":2,"elbow":1,"shoulder":1,"neck":0,"thoracic":1,"lowerBack":1,"si":0,"hip":1,"groin":0,"knee":1,"ankle":2,"foot":2},
    strength:1, mobility:1, technique:1,
    desc:"From a downward dog position, one heel is pressed toward the floor while the opposite knee bends slightly — alternating in a slow peel-and-press action. Unlike the wall stretch, the inverted position simultaneously elongates the calves, hamstrings, Achilles, and plantar fascia in one held flow. The bilateral alternation allows active progressive loading rather than a static hold.",
    cues:"Drive the heel down by pushing the floor away with the entire foot, not just dropping the heel passively. Keep the arm and back straight — downward dog alignment must be solid or the calf stretch is secondary to compensatory movement. Slow alternation: 3–4 seconds per side, 10–12 reps each. Also effective as a static one-sided hold.",
    equipment:"None", position:"Inverted / Ground",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  },
  {
    id:273, listed:true,
    name:"Tibialis Anterior Stretch",
    alt:"shin stretch · top of foot stretch",
    muscles:[{"n":"Tibialis Anterior","p":true},{"n":"Toe Extensors","p":false}],
    tags:["ankles","legs"],
    diff:1.3,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":0,"si":0,"hip":0,"groin":0,"knee":1,"ankle":2,"foot":2},
    strength:1, mobility:1, technique:1,
    desc:"The top of the foot is pressed gently into the floor from a kneeling or half-kneeling position — plantarflexing the ankle and stretching the tibialis anterior, toe extensors, and dorsal foot. Often entirely overlooked, this stretch addresses the reciprocal tension built up by heavy heel-striking, stair climbing, and uphill running. A common complaint in shin splints and anterior compartment tightness.",
    cues:"Point the toes and sink the hips gently toward the heel — don't sit fully on the foot if the ankle joint is stiff. Both feet can be stretched simultaneously in a full kneeling position. Hold 30–45 seconds per side.",
    equipment:"None", position:"Kneeling",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },

  // ══════════════════════════════════════════════════════════════
  // REGION N — Thoracic Spine & Core
  // ══════════════════════════════════════════════════════════════

  {
    id:280, listed:true,
    name:"Supine Knee-to-Chest Stretch",
    alt:"knees-to-chest · lumbar decompression stretch",
    muscles:[{"n":"Erector Spinae","p":true},{"n":"Glutes","p":false},{"n":"SI Joint","p":false}],
    tags:["back","core","hips"],
    diff:1.2,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":0,"lowerBack":2,"si":1,"hip":2,"groin":0,"knee":1,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"One or both knees are drawn toward the chest while lying supine — gently flexing the lumbar spine and decompressing the posterior vertebral elements and SI joint. A first-resort stretch for anyone with lumbar tightness, post-deadlift or post-squat spinal compression, or morning stiffness. Accessible to virtually everyone and safe across all fitness levels.",
    cues:"Pull the knees with the hands on the shins, not the knees — knee compression with flexion can irritate the joint. For a bilateral hold, rock gently side to side for added lumbar mobility. For a unilateral hold, keep the opposite leg flat on the floor to maintain lumbar traction. 45–60 seconds.",
    equipment:"None", position:"Supine",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:281, listed:true,
    name:"Lumbar Rotation Stretch | Supine",
    alt:"supine spinal twist · lying torso rotation",
    muscles:[{"n":"Erector Spinae","p":true},{"n":"Quadratus Lumborum","p":true},{"n":"Obliques","p":false},{"n":"Piriformis","p":false}],
    tags:["back","core","hips","thoracic"],
    diff:1.5,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":0,"thoracic":1,"lowerBack":2,"si":1,"hip":1,"groin":0,"knee":1,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"Supine with both knees bent, the knees are guided to one side toward the floor while the shoulders stay flat — rotating the lumbar spine and stretching the quadratus lumborum, ipsilateral erectors, and contralateral obliques. A foundational spinal decompression and rotation stretch that is both safe and highly effective for post-session lumbar tightness and SI joint stiffness.",
    cues:"Keep both shoulders flat on the floor throughout — the moment a shoulder lifts, the rotation shifts to the thoracic spine rather than the lumbar. The knees stay together as a unit, moving as one block. Breathe into the side being stretched and let gravity do the work. 60 seconds per side.",
    equipment:"None", position:"Supine",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:282, listed:true,
    name:"Thoracic Extension | (Foam Roller)",
    alt:"t-spine foam roller extension · thoracic mobilisation",
    muscles:[{"n":"Thoracic Spine","p":true},{"n":"Erector Spinae","p":false},{"n":"Rhomboids","p":false}],
    tags:["thoracic","back","upper-body"],
    diff:1.8,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":0,"elbow":0,"shoulder":0,"neck":1,"thoracic":3,"lowerBack":1,"si":0,"hip":0,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:1,
    desc:"A foam roller is placed perpendicular under the mid-back; the athlete supports the neck and extends the thoracic spine over the roller segment by segment from T12 upward. The roller acts as a fulcrum, concentrating extension precisely at each vertebral level rather than the diffuse extension of a standing stretch. Directly reverses thoracic kyphosis and unlocks the stiff mid-back segments that limit overhead range and shoulder mechanics.",
    cues:"Support the head with both hands — do not let it fall back unsupported. Move up one vertebral-width at a time, pausing 20–30 seconds at each level before rolling up. The hips can stay low (passive extension) or rise (active mobilisation). Never place the roller under the lumbar spine.",
    equipment:"Foam Roller", position:"Supine",
    kcalPer3SecHold:[0.01,0.01],
    youtube:"LINK_TODO"
  },
  {
    id:283, listed:true,
    name:"Abdominal Stretch | Cobra",
    alt:"lying backbend stretch · prone spinal extension stretch",
    muscles:[{"n":"Abdominals","p":true},{"n":"Hip Flexors","p":false},{"n":"Chest","p":false}],
    tags:["core","thoracic","back"],
    diff:1.6,
    str:{"suit":false,"eff":1}, vol:{"suit":false,"eff":1}, end:{"suit":false,"eff":1},
    risk:1,
    joints:{"fingers":0,"wrist":1,"elbow":1,"shoulder":1,"neck":1,"thoracic":2,"lowerBack":2,"si":0,"hip":1,"groin":0,"knee":0,"ankle":0,"foot":0},
    strength:1, mobility:1, technique:2,
    desc:"From a prone position, the hands are placed under the shoulders and the chest is pressed up while the hips remain on the floor — elongating the abdominals and hip flexors while extending the thoracic and lumbar spine. A direct counter to the spinal flexion accumulated during sitting, abdominal training, and deadlift-pattern loading. Held rather than performed dynamically, this provides a sustained anterior chain stretch.",
    cues:"Lead the extension through the upper back and chest, not the lower back — imagine peeling the sternum forward and up rather than hyperextending the lumbar. Keep the elbows slightly bent (low cobra) to reduce lumbar compression. Shoulders away from ears. 30–60 seconds.",
    equipment:"None", position:"Prone",
    kcalPer3SecHold:[0.01,0.02],
    youtube:"LINK_TODO"
  }

];
/* └─ @end: stretching-data.js ──────────────────────────────────────────── */
