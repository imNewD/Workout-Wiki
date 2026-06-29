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

/* ── CHEST ──────────────────────────────────────────────────── */
var gymChestWorkouts = [
  {
    id: 1,
    name: 'Barbell Bench Press',
    alt: 'Flat bench — barbell',
    desc: 'The king of chest pressing. A horizontal barbell press performed on a flat bench that maximally loads the sternocostal (mid and lower) head of the pectoralis major, anterior deltoids, and triceps. Leg drive through the floor, a controlled arch, and retracted scapulae are the technical cornerstones that separate safe loading from shoulder injury.',
    cues: 'Grip the bar just outside shoulder width. Retract and depress your scapulae into the pad — they stay pinned throughout the set. Unrack with locked elbows, then lower the bar in a slight arc to mid-chest. Touch lightly, drive through the floor, press the bar back toward the rack in the same arc. Bar, wrists, and elbows stay stacked at the bottom.',
    equipment: 'Barbell, flat bench, rack or spotter',
    position: 'Supine on flat bench. Feet flat on the floor. Slight natural arch in the lower back.',
    muscles: [
      {n:'Chest', p:true},
      {n:'Triceps', p:true},
      {n:'Anterior Deltoids', p:false},
      {n:'Serratus Anterior', p:false}
    ],
    tags: ['chest','barbell','horizontal press','compound'],
    diff: 4,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:0},
    risk: 3,
    technique: 2,
    mobility: 2,
    strength: 3,
    joints: {shoulder:true, elbow:true, wrist:true},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.4, 0.7],
    load: {
      absolute: { label: '60 kg',  unit: 'kg',  note: 'Working set reference for intermediate lifters' },
      relative: { label: '80% BW', unit: '% BW', note: 'Scale to your bodyweight — 80 kg person targets 64 kg' }
    }
  },
  {
    id: 2,
    name: 'Incline Dumbbell Press',
    alt: '30–45° incline — dumbbells',
    desc: 'An incline pressing movement that shifts emphasis to the clavicular (upper) head of the pec major and demands greater anterior deltoid involvement than the flat variant. Dumbbells allow an independent path per hand, which improves symmetry and range of motion. The incline angle (30° is optimal; 45° increases shoulder load) determines how much upper chest vs shoulder work you get.',
    cues: 'Set the bench to 30°. Kick the dumbbells up from your knees, plant them at chest height with elbows at roughly 75° flare. Press to lockout, pause briefly, then lower under control. Allow a slight inward arc at the top to get a gentle adduction stretch at the bottom. Keep wrists stacked directly over elbows at the lowest point.',
    equipment: 'Pair of dumbbells, adjustable incline bench',
    position: 'Supine on incline bench. Feet flat on the floor. Head and upper back firmly pressed into the pad.',
    muscles: [
      {n:'Upper Chest', p:true},
      {n:'Anterior Deltoids', p:true},
      {n:'Triceps', p:false},
      {n:'Chest', p:false}
    ],
    tags: ['chest','dumbbell','incline','compound'],
    diff: 3,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:5},
    end: {suit:false, eff:0},
    risk: 2,
    technique: 2,
    mobility: 2,
    strength: 2,
    joints: {shoulder:true, elbow:true, wrist:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.35, 0.6],
    load: {
      absolute: { label: '20 kg / hand', unit: 'kg',  note: 'Per dumbbell — intermediate working weight' },
      relative: { label: '25% BW / hand', unit: '% BW', note: 'Each hand lifts ~25% of your bodyweight' }
    }
  },
  {
    id: 3,
    name: 'Cable Chest Fly',
    alt: 'Mid-cable or low-pulley — cables',
    desc: 'A cable isolation movement for the pectoralis major that maintains constant tension throughout the entire arc — something barbells and dumbbells cannot do. Using a mid-height or low pulley setting targets the sternal head. The cable fly is one of the few chest exercises that trains shoulder adduction directly, making it ideal as a finisher after compound pressing work.',
    cues: 'Stand in a split stance between two cable stacks set at mid height. Begin with arms wide and elbows slightly bent — never fully straight. Drive your hands together in a wide hugging arc, squeezing hard at the midline. Control the return, feeling the stretch across your chest at the fully open position. Do not let shoulders roll forward at the stretch.',
    equipment: 'Cable machine with dual pulleys or functional trainer',
    position: 'Standing, slight forward lean from the hips. Core braced throughout.',
    muscles: [
      {n:'Chest', p:true},
      {n:'Anterior Deltoids', p:false},
      {n:'Biceps', p:false}
    ],
    tags: ['chest','cable','isolation','fly'],
    diff: 2,
    str: {suit:false, eff:0},
    vol: {suit:true, eff:5},
    end: {suit:true, eff:3},
    risk: 1,
    technique: 2,
    mobility: 1,
    strength: 1,
    joints: {shoulder:true, elbow:false, wrist:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.2, 0.35],
    load: {
      absolute: { label: '12 kg / side', unit: 'kg',  note: 'Per stack — moderate isolation load' },
      relative: { label: '15% BW / side', unit: '% BW', note: 'Light relative load; control and stretch matter more than weight here' }
    }
  }
];

/* ── BACK ───────────────────────────────────────────────────── */
var gymBackWorkouts = [
  {
    id: 1,
    name: 'Conventional Deadlift',
    alt: 'Barbell — floor pull',
    desc: 'The conventional deadlift is the most complete posterior-chain compound movement available. It loads the entire back from traps to erectors, together with the glutes and hamstrings, making it the single most effective exercise for building raw back thickness and total-body strength. Technique demands are high: a neutral spine under heavy load, proper hip hinge mechanics, and active lat engagement are non-negotiable for longevity.',
    cues: 'Set up with the bar over mid-foot, roughly an inch from your shins. Hinge at the hips, grip just outside your legs. Before lifting, push your knees out toward your hands, create tension in the hamstrings by trying to "screw the floor apart", and engage your lats by imagining bending the bar around your legs. Drive the floor away — do not think "pull". Lock out by squeezing glutes. Lower under control.',
    equipment: 'Barbell, weight plates, lifting platform or rubber mats',
    position: 'Standing, hip-width stance. Toes forward or slightly out. Shins roughly vertical at setup.',
    muscles: [
      {n:'Erector Spinae', p:true},
      {n:'Glutes', p:true},
      {n:'Hamstrings', p:true},
      {n:'Lats', p:false},
      {n:'Traps', p:false},
      {n:'Forearms', p:false}
    ],
    tags: ['back','barbell','hinge','compound','legs','posterior chain'],
    diff: 7,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:0},
    risk: 4,
    technique: 4,
    mobility: 3,
    strength: 4,
    joints: {lumbar:true, hip:true, knee:true, wrist:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.8, 1.4],
    load: {
      absolute: { label: '100 kg', unit: 'kg',  note: 'Solid intermediate working weight — bar + plates' },
      relative: { label: '130% BW', unit: '% BW', note: 'Pulling 1.3× bodyweight is a strong intermediate benchmark' }
    }
  },
  {
    id: 2,
    name: 'Barbell Bent-Over Row',
    alt: 'Overhand grip — barbell',
    desc: 'The primary mass-building movement for upper and mid-back thickness. A hip-hinge based compound row that directly loads the lats, rhomboids, lower and mid traps, and rear deltoids while the erectors work isometrically to maintain position. The overhand grip emphasises the upper back; a supinated grip shifts more stimulus to the lower lats and biceps. Both have merit — overhand trains horizontal pulling patterns more completely.',
    cues: 'Hinge until your torso is between 45° and parallel to the floor. Maintain this angle throughout — do not stand up as you row. Pull the bar to your lower abdomen, not your chest. Drive your elbows back and squeeze your shoulder blades together at the top. Lower under full control. Keep the lower back flat — if you cannot maintain this, reduce the load.',
    equipment: 'Barbell, weight plates',
    position: 'Hip hinge stance, torso 45–90° from vertical. Knees soft. Bar hanging at arm\'s length.',
    muscles: [
      {n:'Lats', p:true},
      {n:'Rhomboids', p:true},
      {n:'Rear Deltoids', p:true},
      {n:'Erector Spinae', p:false},
      {n:'Biceps', p:false},
      {n:'Traps', p:false}
    ],
    tags: ['back','barbell','row','compound','horizontal pull'],
    diff: 5,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:0},
    risk: 3,
    technique: 3,
    mobility: 2,
    strength: 3,
    joints: {lumbar:true, shoulder:true, elbow:true, wrist:true},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.5, 0.85],
    load: {
      absolute: { label: '60 kg', unit: 'kg',  note: 'Row to lower abs — control trumps load' },
      relative: { label: '75% BW', unit: '% BW', note: 'Three-quarters of bodyweight is a solid working target' }
    }
  },
  {
    id: 3,
    name: 'Lat Pulldown',
    alt: 'Wide grip — cable machine',
    desc: 'The lat pulldown is the most accessible vertical pulling movement in the gym and an essential exercise for building lat width and shoulder extension strength. It closely mimics the pull-up pattern but allows progressive loading from any starting point. Grip width and elbow path determine emphasis: a wide grip and slightly forward lean targets the upper lats; a neutral grip with vertical forearms hits the lower lats harder.',
    cues: 'Sit with knees locked under the pad, chest up, slight lean back (not excessive). Before pulling, depress your shoulder blades — "put your shoulder blades in your back pockets". Pull the bar to your upper chest by driving your elbows down and back. Squeeze your lats hard at the bottom. Return slowly, allowing full arm extension at the top before the next rep.',
    equipment: 'Cable pulldown machine or functional trainer with lat bar',
    position: 'Seated with knees secured under pads. Slight backward lean at about 80° of trunk angle.',
    muscles: [
      {n:'Lats', p:true},
      {n:'Biceps', p:false},
      {n:'Rear Deltoids', p:false},
      {n:'Rhomboids', p:false},
      {n:'Traps', p:false}
    ],
    tags: ['back','cable','vertical pull','compound'],
    diff: 2,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:5},
    end: {suit:true, eff:3},
    risk: 1,
    technique: 2,
    mobility: 1,
    strength: 1,
    joints: {shoulder:true, elbow:true, wrist:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.3, 0.5],
    load: {
      absolute: { label: '50 kg', unit: 'kg',  note: 'Stack weight — adjust so reps are 8–12 with clean form' },
      relative: { label: '65% BW', unit: '% BW', note: 'Roughly two-thirds of bodyweight is a strong lat pulldown target' }
    }
  }
];

/* ── SHOULDERS ──────────────────────────────────────────────── */
var gymShouldersWorkouts = [
  {
    id: 1,
    name: 'Barbell Overhead Press',
    alt: 'Standing — barbell',
    desc: 'The standing overhead press is the definitive measure of pressing strength and the primary compound movement for shoulder development. It loads all three deltoid heads with emphasis on the anterior and lateral portions, and demands full-body tension — the core and glutes must brace hard to prevent spinal hyperextension under load. It also develops upper traps and triceps as strong secondary movers.',
    cues: 'Take the bar from a rack at upper chest height. Grip slightly outside shoulder width. Tuck your chin to let the bar pass your face, then press to lockout directly overhead. At lockout, push your head through your arms — your biceps should be next to your ears. Keep the bar path vertical. Brace your core before each rep; do not lean back as the weight gets heavy.',
    equipment: 'Barbell, squat rack or power cage',
    position: 'Standing, hip-width stance. Bar resting at the front of the shoulders in a full-hand grip.',
    muscles: [
      {n:'Anterior Deltoids', p:true},
      {n:'Lateral Deltoids', p:true},
      {n:'Triceps', p:true},
      {n:'Traps', p:false},
      {n:'Core', p:false}
    ],
    tags: ['shoulders','barbell','overhead press','compound'],
    diff: 6,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:0},
    risk: 3,
    technique: 3,
    mobility: 3,
    strength: 3,
    joints: {shoulder:true, elbow:true, wrist:true, lumbar:true},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.5, 0.85],
    load: {
      absolute: { label: '40 kg', unit: 'kg',  note: 'Working set weight — strict overhead, no leg drive' },
      relative: { label: '50% BW', unit: '% BW', note: 'Half bodyweight overhead is a respected intermediate standard' }
    }
  },
  {
    id: 2,
    name: 'Dumbbell Lateral Raise',
    alt: 'Strict form — dumbbells',
    desc: 'The lateral raise is the most direct isolation exercise for the lateral (medial) deltoid head, which is primarily responsible for the "shoulder width" appearance. While seemingly simple, it is frequently butchered with excessive swing and trap loading. Strict form — a slight forward lean, minimal momentum, and a controlled eccentric — maximises lateral delt stimulus and minimises rotator cuff impingement risk.',
    cues: 'Hinge slightly forward at the hips (about 5–10°). Raise the dumbbells to shoulder height with a slight forward angle — arms are not perfectly perpendicular to the body; they travel slightly in front of the frontal plane. Lead with the elbow, not the hand. At the top, the rear plate of the dumbbell should be slightly higher than the front (as if pouring water from a pitcher). Control the descent over 2–3 seconds.',
    equipment: 'Pair of dumbbells',
    position: 'Standing or seated. Slight forward hip hinge. Arms hanging at sides, slight bend in elbows.',
    muscles: [
      {n:'Lateral Deltoids', p:true},
      {n:'Anterior Deltoids', p:false},
      {n:'Traps', p:false},
      {n:'Rotator Cuff', p:false}
    ],
    tags: ['shoulders','dumbbell','isolation','lateral'],
    diff: 2,
    str: {suit:false, eff:0},
    vol: {suit:true, eff:5},
    end: {suit:true, eff:4},
    risk: 2,
    technique: 2,
    mobility: 1,
    strength: 1,
    joints: {shoulder:true, elbow:false, wrist:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.15, 0.25],
    load: {
      absolute: { label: '8 kg / hand', unit: 'kg',  note: 'Go lighter than you think — control over load' },
      relative: { label: '10% BW / hand', unit: '% BW', note: '10% of bodyweight per dumbbell is a demanding strict raise' }
    }
  },
  {
    id: 3,
    name: 'Arnold Press',
    alt: 'Rotating press — dumbbells',
    desc: "Named after Arnold Schwarzenegger, this dumbbell pressing variation begins with an internal rotation (like the top of a curl) and rotates into full external rotation as the arms press overhead. This rotation recruits the anterior deltoid through a longer arc than a standard press, creating unique tension at the bottom of the movement where a normal overhead press is usually weakest. It also places notable demand on rotator cuff stabilisers.",
    cues: 'Start with dumbbells at shoulder height, palms facing you. As you press overhead, rotate your wrists outward so palms face forward at the top. At lockout, you should be in the standard overhead press top position. Reverse the rotation as you lower back to the start. Keep the movement smooth — the rotation and the press happen simultaneously. Do not go too heavy; control is everything on this lift.',
    equipment: 'Pair of dumbbells, adjustable bench (optional)',
    position: 'Seated on a bench with back support, or standing. Dumbbells at shoulder height, palms facing body at start.',
    muscles: [
      {n:'Anterior Deltoids', p:true},
      {n:'Lateral Deltoids', p:true},
      {n:'Triceps', p:false},
      {n:'Rotator Cuff', p:false}
    ],
    tags: ['shoulders','dumbbell','overhead press','compound'],
    diff: 3,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:5},
    end: {suit:false, eff:0},
    risk: 2,
    technique: 3,
    mobility: 2,
    strength: 2,
    joints: {shoulder:true, elbow:true, wrist:true},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.3, 0.5],
    load: {
      absolute: { label: '16 kg / hand', unit: 'kg',  note: 'Moderate weight — the rotation demands control over raw load' },
      relative: { label: '20% BW / hand', unit: '% BW', note: 'Each dumbbell at 20% bodyweight is a strong Arnold Press standard' }
    }
  }
];

/* ── LEGS ───────────────────────────────────────────────────── */
var gymLegsWorkouts = [
  {
    id: 1,
    name: 'Barbell Back Squat',
    alt: 'High bar or low bar — barbell',
    desc: 'The back squat is the cornerstone of lower-body strength training and the most effective exercise for building quad and glute mass. The high-bar position (bar on traps) demands more upright torso and emphasises quads; the low-bar position (bar on rear delts) allows a greater forward lean and targets glutes and hamstrings more. Both are valid depending on your goals. Knee tracking, hip depth, and spinal position are the three variables that determine safety and effectiveness.',
    cues: 'Unrack the bar and create full-body tension — big breath, brace the core as if about to be punched. Initiate the descent by breaking at the hips and knees simultaneously. Track your knees over your toes throughout. Reach depth — crease of the hip below the top of the knee. Drive out of the hole by "pushing the floor away". Stay braced; exhale at the top.',
    equipment: 'Barbell, squat rack, weight plates',
    position: 'Standing, shoulder-to-hip-width stance. Toes 15–30° out. Bar on traps or rear deltoids.',
    muscles: [
      {n:'Quadriceps', p:true},
      {n:'Glutes', p:true},
      {n:'Hamstrings', p:false},
      {n:'Erector Spinae', p:false},
      {n:'Core', p:false},
      {n:'Calves', p:false}
    ],
    tags: ['legs','barbell','squat','compound','quads','glutes'],
    diff: 7,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:0},
    risk: 4,
    technique: 4,
    mobility: 4,
    strength: 4,
    joints: {knee:true, hip:true, lumbar:true, ankle:true},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.7, 1.2],
    load: {
      absolute: { label: '80 kg', unit: 'kg',  note: 'Solid intermediate working squat — bar + plates to parallel' },
      relative: { label: '100% BW', unit: '% BW', note: 'Squatting your own bodyweight is the classic intermediate benchmark' }
    }
  },
  {
    id: 2,
    name: 'Romanian Deadlift',
    alt: 'Hip hinge — barbell',
    desc: 'The Romanian deadlift (RDL) is the most effective barbell exercise for isolating the hamstrings and glutes through the hip hinge pattern. Unlike the conventional deadlift, the bar never touches the floor — the movement is purely controlled hip flexion and extension with minimal knee bend. It places extreme eccentric load on the hamstring-glute junction and is a critical exercise for posterior chain development and injury prevention in any athlete.',
    cues: 'Start standing with the bar held at hip level. Hinge at the hips, pushing them back while lowering the bar along your legs. Keep the bar in contact with your thighs throughout. Stop when you feel a significant hamstring stretch — typically just below the knee for most athletes. Drive your hips forward to stand tall, squeezing the glutes at lockout. Keep a neutral spine throughout; rounding under load is dangerous.',
    equipment: 'Barbell, weight plates',
    position: 'Standing, hip-width stance. Slight bend in knees, maintained throughout (not a squat).',
    muscles: [
      {n:'Hamstrings', p:true},
      {n:'Glutes', p:true},
      {n:'Erector Spinae', p:false},
      {n:'Traps', p:false},
      {n:'Forearms', p:false}
    ],
    tags: ['legs','barbell','hinge','hamstrings','glutes','posterior chain'],
    diff: 5,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:0},
    risk: 3,
    technique: 3,
    mobility: 3,
    strength: 3,
    joints: {lumbar:true, hip:true, knee:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.6, 1.0],
    load: {
      absolute: { label: '70 kg', unit: 'kg',  note: 'Lower than your deadlift — control the descent phase' },
      relative: { label: '90% BW', unit: '% BW', note: 'Near bodyweight is a strong RDL target for hamstring isolation' }
    }
  },
  {
    id: 3,
    name: 'Leg Press',
    alt: '45° sled machine',
    desc: 'The leg press is a machine-based quad and glute compound movement that removes the spinal loading component of the squat. This makes it invaluable for quad-focused volume work, rehabilitation phases, or when lower-back fatigue limits free-weight squatting. Foot position on the platform determines emphasis: high and wide targets glutes and hamstrings; low and narrow emphasises the quads. A full range of motion — hips not quite off the pad at the bottom — produces the best stimulus.',
    cues: 'Place your feet at the desired position on the platform. Unrack by straightening the legs and releasing the safety handles. Lower the platform under control until your knees reach roughly 90° or your hips just begin to rise — stop there. Push through the whole foot (not just the toes) to full extension, but do not lock the knees out hard on each rep. Keep the lower back flat against the pad throughout.',
    equipment: '45° leg press machine',
    position: 'Seated reclined at 45°. Back flat against the pad. Feet on platform.',
    muscles: [
      {n:'Quadriceps', p:true},
      {n:'Glutes', p:true},
      {n:'Hamstrings', p:false},
      {n:'Calves', p:false}
    ],
    tags: ['legs','machines','squat','compound','quads'],
    diff: 2,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:5},
    end: {suit:true, eff:3},
    risk: 2,
    technique: 1,
    mobility: 2,
    strength: 1,
    joints: {knee:true, hip:true, lumbar:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.5, 0.9],
    load: {
      absolute: { label: '120 kg', unit: 'kg',  note: 'Sled load — machine allows heavier loads than free-weight squat' },
      relative: { label: '150% BW', unit: '% BW', note: 'Leg pressing 1.5× bodyweight is a standard intermediate target' }
    }
  }
];

/* ── ARMS ───────────────────────────────────────────────────── */
var gymArmsWorkouts = [
  {
    id: 1,
    name: 'Barbell Curl',
    alt: 'Straight or EZ bar — standing',
    desc: 'The barbell curl is the gold standard for biceps mass and the most loaded direct biceps exercise available. The straight bar supinates the forearm fully, maximising the long head contribution. The EZ bar reduces wrist strain and emphasises the brachialis and brachioradialis slightly more. Both are effective; the choice depends on wrist comfort. Strict form — no momentum, full range of motion — produces superior results over heaving heavy weights.',
    cues: 'Stand with the bar in an underhand grip, elbows at your sides. Curl by flexing at the elbow only — your upper arms stay vertical and stationary throughout the rep. Bring the bar up until your forearms are past vertical. Squeeze the bicep hard at the top. Lower in 3 full seconds to the starting position, fully extending the elbow. Do not let the shoulders roll forward at the bottom.',
    equipment: 'Barbell or EZ bar',
    position: 'Standing, hip-width stance. Elbows pinned to the sides of the torso.',
    muscles: [
      {n:'Biceps', p:true},
      {n:'Brachialis', p:true},
      {n:'Forearms', p:false}
    ],
    tags: ['arms','barbell','biceps','curl','isolation'],
    diff: 2,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:5},
    end: {suit:false, eff:0},
    risk: 1,
    technique: 2,
    mobility: 1,
    strength: 1,
    joints: {elbow:true, wrist:true},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.2, 0.35],
    load: {
      absolute: { label: '30 kg', unit: 'kg',  note: 'Strict curl — no swinging' },
      relative: { label: '40% BW', unit: '% BW', note: 'Curling 40% of bodyweight strictly is a solid intermediate standard' }
    }
  },
  {
    id: 2,
    name: 'Skull Crusher',
    alt: 'EZ bar or dumbbells — lying',
    desc: 'The skull crusher (lying triceps extension) is one of the most effective isolation exercises for the long head of the triceps — the largest and most visible portion. The overhead position stretches the long head maximally, which research suggests drives greater hypertrophy than exercises performed with the arm at the body. The EZ bar version is easier on the wrists. Despite the intimidating name, it is safe with a controlled tempo and an appropriate load.',
    cues: 'Lie on a flat bench, pressing the bar or dumbbells to straight arms over your chest. Hinge only at the elbows, lowering the weight toward your forehead (or just behind your head for more long-head stretch). Keep the upper arms vertical and perfectly still throughout — any shoulder movement turns this into a press and removes the isolation benefit. Extend back to lockout, squeezing the tricep at the top.',
    equipment: 'EZ bar or dumbbells, flat bench',
    position: 'Supine on flat bench. Arms pressed straight up, perpendicular to the body.',
    muscles: [
      {n:'Triceps', p:true},
      {n:'Anterior Deltoids', p:false}
    ],
    tags: ['arms','barbell','dumbbell','triceps','isolation'],
    diff: 3,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:5},
    end: {suit:false, eff:0},
    risk: 2,
    technique: 2,
    mobility: 1,
    strength: 1,
    joints: {elbow:true, wrist:true, shoulder:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.2, 0.35],
    load: {
      absolute: { label: '25 kg', unit: 'kg',  note: 'EZ bar + plates — controlled lowering is non-negotiable' },
      relative: { label: '30% BW', unit: '% BW', note: 'About a third of bodyweight is a strong skull crusher working set' }
    }
  },
  {
    id: 3,
    name: 'Hammer Curl',
    alt: 'Neutral grip — dumbbells',
    desc: 'The hammer curl uses a neutral (thumb-up) grip which shifts emphasis from the biceps brachii to the brachialis and brachioradialis. The brachialis lies beneath the biceps and, when hypertrophied, physically pushes the biceps peak higher, making this exercise a key tool for arm aesthetics beyond what standard curls deliver. It is also easier on the wrists and elbows than supinated curls, making it suitable for athletes with joint sensitivity.',
    cues: 'Hold dumbbells with a neutral grip (thumbs up). Keep the upper arms still and curl by flexing at the elbows. The dumbbells should travel in a vertical path — do not supinate or pronate as you curl. Reach the top, squeeze, then lower under control. You can alternate arms for more control or perform both simultaneously. Seated variations reduce the temptation to use body momentum.',
    equipment: 'Pair of dumbbells',
    position: 'Standing or seated. Upper arms pinned to the sides of the torso.',
    muscles: [
      {n:'Brachialis', p:true},
      {n:'Biceps', p:true},
      {n:'Forearms', p:false}
    ],
    tags: ['arms','dumbbell','biceps','curl','isolation'],
    diff: 2,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:5},
    end: {suit:true, eff:3},
    risk: 1,
    technique: 1,
    mobility: 1,
    strength: 1,
    joints: {elbow:true, wrist:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.2, 0.35],
    load: {
      absolute: { label: '14 kg / hand', unit: 'kg',  note: 'Per dumbbell — stricter than barbell curl due to independent arm control' },
      relative: { label: '18% BW / hand', unit: '% BW', note: '18% per hand is a strong hammer curl working weight' }
    }
  }
];

/* ── CORE ───────────────────────────────────────────────────── */
var gymCoreWorkouts = [
  {
    id: 1,
    name: 'Cable Crunch',
    alt: 'Kneeling — rope attachment',
    desc: 'The cable crunch is the most effective weighted abdominal exercise, allowing progressive overload of the rectus abdominis — something most bodyweight core exercises cannot achieve beyond a certain point. Kneeling with the rope behind the head, the movement is a pure spinal flexion pattern. Unlike sit-ups or crunches, the cable provides consistent resistance through the full range and the loading can be increased incrementally as strength develops.',
    cues: 'Kneel facing the cable machine, rope behind your head. The movement is ONLY spinal flexion — curl your ribcage toward your pelvis. You should feel your abs pulling you down, not your hips. Do not bend at the hips first. The hips stay fixed in place throughout. Hold the contracted position for one count, then slowly extend back — but do not sit fully upright; keep a slight crunch to maintain tension at the top.',
    equipment: 'Cable machine with rope attachment',
    position: 'Kneeling facing the cable machine, sitting back slightly on heels. Rope held behind the head.',
    muscles: [
      {n:'Rectus Abdominis', p:true},
      {n:'Obliques', p:false}
    ],
    tags: ['core','cable','abs','isolation','weighted'],
    diff: 3,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:5},
    end: {suit:false, eff:0},
    risk: 2,
    technique: 3,
    mobility: 1,
    strength: 2,
    joints: {lumbar:true},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.15, 0.25],
    load: {
      absolute: { label: '40 kg', unit: 'kg',  note: 'Stack weight — enough to make 12–15 reps challenging' },
      relative: { label: '50% BW', unit: '% BW', note: 'Half bodyweight on the stack is a solid weighted crunch target' }
    }
  },
  {
    id: 2,
    name: 'Ab Wheel Rollout',
    alt: 'From knees or toes — ab wheel',
    desc: 'The ab wheel rollout is one of the hardest anti-extension core exercises available. It trains the rectus abdominis and, critically, the transverse abdominis in an anti-extension role — resisting the spine from extending under load rather than simply crunching it. This transfers directly to compound lifts. The kneeling version is already very challenging; the standing version is elite-level. A neutral lumbar spine must be maintained throughout or the lower back absorbs the stress instead of the abs.',
    cues: 'Kneel holding the ab wheel directly below your shoulders. Brace your core maximally — imagine tightening every muscle in your midsection. Roll forward slowly, maintaining a straight line from your knees through your hips to your shoulders. Stop when your lower back begins to arch — that is YOUR current end range, not the floor. Roll back by pulling with your abs, not your hip flexors. Never sacrifice spinal position for range.',
    equipment: 'Ab wheel (or barbell with plates as a substitute)',
    position: 'Kneeling with the wheel directly below the shoulders. Hips, spine, and shoulders in a straight line.',
    muscles: [
      {n:'Rectus Abdominis', p:true},
      {n:'Transverse Abdominis', p:true},
      {n:'Obliques', p:false},
      {n:'Lats', p:false},
      {n:'Triceps', p:false}
    ],
    tags: ['core','abs','anti-extension','bodyweight','advanced'],
    diff: 7,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:0},
    risk: 3,
    technique: 4,
    mobility: 2,
    strength: 3,
    joints: {lumbar:true, shoulder:true, elbow:true, wrist:true},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.25, 0.45],
    load: {
      absolute: { label: 'Bodyweight', unit: 'BW', note: 'Bodyweight exercise — no external load; progress by extending range' },
      relative: { label: 'BW', unit: 'BW', note: 'All load is bodyweight — progress by reaching further and adding sets' }
    }
  },
  {
    id: 3,
    name: 'Hanging Leg Raise',
    alt: 'Dead hang or elbow straps — pull-up bar',
    desc: 'The hanging leg raise is the most complete loaded hip flexion and lower-abdominal exercise available. Hanging from a bar eliminates momentum from the lower body and forces the abs and hip flexors to work through a large range of motion. Straight-leg raises are more difficult and hit the hip flexors harder; bent-knee raises reduce hip flexor involvement and focus more on the lower abs. The posterior pelvic tilt at the top of the movement is what activates the abs — simply raising the legs is not enough.',
    cues: 'Hang from the bar with arms straight. To initiate, posteriorly tilt your pelvis — tuck your tailbone under before lifting. Raise the legs, keeping control throughout. At the top, try to bring your legs parallel or higher, and emphasise the posterior tilt. Lower slowly — a 3-second eccentric is ideal. Do not swing or use momentum; a slight forward swing is acceptable but kipping is not. Strapless hanging also trains grip.',
    equipment: 'Pull-up bar or captain\'s chair (elbow support version)',
    position: 'Dead hang from a pull-up bar, arms fully extended, body straight.',
    muscles: [
      {n:'Rectus Abdominis', p:true},
      {n:'Hip Flexors', p:true},
      {n:'Obliques', p:false},
      {n:'Forearms', p:false}
    ],
    tags: ['core','abs','bodyweight','bar','hip flexors'],
    diff: 5,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:5},
    end: {suit:true, eff:3},
    risk: 2,
    technique: 3,
    mobility: 2,
    strength: 2,
    joints: {shoulder:true, elbow:false, wrist:false, lumbar:false},
    youtube: 'LINK_TODO',
    kcalPerRep: [0.2, 0.35],
    load: {
      absolute: { label: 'Bodyweight', unit: 'BW', note: 'Bodyweight only — add ankle weights to progress' },
      relative: { label: 'BW', unit: 'BW', note: 'Straight-leg raises are significantly harder than bent-knee — use that as your progression' }
    }
  }
];
