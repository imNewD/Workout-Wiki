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

const cardioRunning = [
  {
    id: 1,
    name: "Easy Run", alt: "Zone 2 / Conversational pace",
    desc: "The foundation of all endurance training. Easy runs are performed at a comfortable, conversational pace — you should be able to speak in full sentences without gasping. They build aerobic base, improve mitochondrial density, and enhance fat oxidation. The majority of any endurance program (70–80%) should be at this effort level.",
    cues: "Land with foot under your hips, not in front. Keep cadence ~170–180 steps/min. Shoulders relaxed, slight forward lean from ankles. Belly-breathe — inhale 3 steps, exhale 2. If you can't talk, slow down.",
    equipment: "Running shoes · Outdoor track / road / treadmill",
    position: "Aerobic base · Recovery day · Any time",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:false},{n:"Glutes",p:false},{n:"Hip Flexors",p:false}],
    tags: ["running","endurance","zone2","aerobic","beginner"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Minimal strength stimulus — not a strength builder."},
    vol:  {suit:true,  eff:3, note:"Excellent for building aerobic volume without excess fatigue."},
    end:  {suit:true,  eff:5, note:"The single best tool for building raw aerobic endurance."},
    risk: 2,
    joints: {ankle:2, knee:2, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [8, 14],
    youtube: null,
    targets: [
      { label: '3 km',   type: 'distance', note: 'Entry-level — build the habit first' },
      { label: '5 km',   type: 'distance', note: 'Standard easy run distance' },
      { label: '30 min', type: 'time',     note: 'Time-based — pace irrelevant, effort is the guide' }
    ]
  },
  {
    id: 2,
    name: "Tempo Run", alt: "Lactate threshold run",
    desc: "Tempo runs target the lactate threshold — the effort level at which lactate begins to accumulate faster than the body can clear it. Training at this intensity raises the threshold, allowing you to run faster for longer before fatigue sets in. Typically done at a 'comfortably hard' pace — you can speak a few words, not full sentences.",
    cues: "Aim for effort where speaking is difficult but possible in 3–4 word bursts. Maintain pace discipline — don't start fast and fade. Keep hips tall, drive arms back (not across). 20–40 minutes continuous or broken into 2×15–20 min blocks.",
    equipment: "Running shoes · Flat road / track / treadmill",
    position: "Speed day · Midweek quality session",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Glutes",p:false},{n:"Core",p:false}],
    tags: ["running","tempo","threshold","intermediate","speed"],
    diff: 6,
    str:  {suit:false, eff:1, note:"Cardiovascular, not strength-focused."},
    vol:  {suit:true,  eff:4, note:"High stimulus for aerobic adaptation at race-relevant paces."},
    end:  {suit:true,  eff:5, note:"Directly raises lactate threshold — the key determinant of race performance."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [11, 18],
    youtube: null,
    targets: [
      { label: '5:00 /km', type: 'pace',     note: 'Beginner threshold pace — adjust to your current fitness' },
      { label: '20 min',   type: 'time',     note: 'Continuous tempo block — the standard unit' },
      { label: '5 km',     type: 'distance', note: 'Sustained at threshold pace — strong intermediate target' }
    ]
  },
  {
    id: 3,
    name: "Interval Run", alt: "Track intervals / VO2max reps",
    desc: "High-intensity intervals performed at or above VO2max effort (roughly 5 km race pace or faster), separated by structured rest. They maximally stress the cardiovascular system, driving aerobic power adaptations that slower running cannot reach. Effective formats include 400 m, 800 m, and 1000 m repeats.",
    cues: "First rep should feel hard but controlled — not an all-out sprint. Last rep should feel as controlled as the first. Full recovery between reps (jog or walk until HR drops below 65% max). Don't sacrifice form for pace.",
    equipment: "Running shoes · Track (preferred) / treadmill / flat road",
    position: "Speed/quality day — 1× per week max",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Hip Flexors",p:true},{n:"Glutes",p:false}],
    tags: ["running","intervals","vo2max","advanced","speed"],
    diff: 8,
    str:  {suit:false, eff:2, note:"Some neuromuscular demand at high velocity."},
    vol:  {suit:true,  eff:5, note:"Maximally elevates aerobic power — the ceiling raiser of endurance training."},
    end:  {suit:true,  eff:5, note:"Directly targets VO2max — key for race performance at 5 km to half-marathon."},
    risk: 4,
    joints: {ankle:4, knee:4, hip:3},
    mobility: 2,
    strength: 2,
    kcalPerRep: [14, 22],
    youtube: null,
    targets: [
      { label: '400 m × 8',  type: 'reps', note: 'Classic track workout — 90s rest between reps' },
      { label: '800 m × 5',  type: 'reps', note: 'Longer intervals — 2 min rest between reps' },
      { label: '1000 m × 5', type: 'reps', note: 'Advanced volume — 3 min rest between reps' }
    ]
  }
];

/* ── CYCLING ──────────────────────────────────────────────── */
const cardioCycling = [
  {
    id: 101,
    name: "Steady-State Ride", alt: "Zone 2 cycling",
    desc: "Sustained cycling at moderate aerobic intensity — equivalent to easy running in zone 2. The best tool for building cardiovascular base with minimal joint stress, as the non-weight-bearing nature of cycling dramatically reduces impact compared to running. Perfect for cross-training, active recovery, or primary aerobic development.",
    cues: "Maintain a cadence of 80–90 RPM. Resist the urge to use heavy gears — spin faster at lower resistance for better cardiovascular stimulus without leg fatigue. Seat height should allow slight knee bend at the bottom of the pedal stroke.",
    equipment: "Road bike / indoor trainer / stationary bike",
    position: "Aerobic base · Cross-training · Recovery",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Glutes",p:true},{n:"Calves",p:false},{n:"Hip Flexors",p:false}],
    tags: ["cycling","endurance","zone2","aerobic","beginner","low-impact"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Minimal strength stimulus unless using heavy resistance."},
    vol:  {suit:true,  eff:4, note:"Excellent volume builder — lower fatigue cost than running at equivalent aerobic effort."},
    end:  {suit:true,  eff:5, note:"Top-tier aerobic development with negligible joint impact."},
    risk: 1,
    joints: {knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [7, 12],
    youtube: null,
    targets: [
      { label: '20 km',  type: 'distance', note: 'Comfortable base ride — 45–60 min at easy effort' },
      { label: '45 min', type: 'time',     note: 'Standard zone-2 block' },
      { label: '60 min', type: 'time',     note: 'Extended aerobic session — strong weekly base ride' }
    ]
  },
  {
    id: 102,
    name: "Cycling Intervals", alt: "Tabata / FTP intervals",
    desc: "High-intensity cycling efforts alternating between hard pushes and structured recovery. Formats include 4×4 min at VO2max, 20-min FTP (Functional Threshold Power) tests, or Tabata-style 20s on/10s off. Cycling intervals are the fastest way to develop aerobic power without running injury risk.",
    cues: "Use resistance that makes the target wattage or RPE sustainable for the full effort but no more. Cadence 90–100 RPM during intervals. Resist the urge to stand up — seated intervals maximise cardiovascular demand. Cool down fully after high-intensity sessions.",
    equipment: "Indoor trainer / stationary bike / spin bike",
    position: "Speed/quality day — limit to 2× per week",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Glutes",p:true},{n:"Calves",p:false},{n:"Core",p:false}],
    tags: ["cycling","intervals","vo2max","intermediate","speed"],
    diff: 7,
    str:  {suit:false, eff:2, note:"Some neuromuscular demand at high power output."},
    vol:  {suit:true,  eff:4, note:"High aerobic stimulus with manageable fatigue."},
    end:  {suit:true,  eff:5, note:"Directly targets VO2max and lactate threshold on the bike."},
    risk: 2,
    joints: {knee:2, hip:1},
    mobility: 2,
    strength: 2,
    kcalPerRep: [12, 20],
    youtube: null,
    targets: [
      { label: '4 min × 4',  type: 'reps', note: 'Norwegian 4×4 — hardest VO2max format on the bike' },
      { label: '20 min',     type: 'time', note: 'FTP effort — the gold standard threshold test' },
      { label: '20s/10s × 8', type: 'reps', note: 'Tabata protocol — 4 min total, maximum effort each round' }
    ]
  },
  {
    id: 103,
    name: "Sprint Cycling", alt: "Track sprint / standing sprint",
    desc: "All-out maximal cycling effort for 8–30 seconds, targeting the phosphocreatine energy system. Develops peak power output, fast-twitch muscle fiber recruitment, and anaerobic capacity. Highly effective for sport performance and fat loss when combined with full recovery between reps.",
    cues: "Standing position for maximum power output. Drive through the whole foot, not just the toe. Build to peak speed in 2–3 seconds, then maintain. Full recovery between sprints (2–4 min) — these should always feel like fresh efforts. 6–10 reps is sufficient.",
    equipment: "Stationary bike / spin bike / road bike on a flat stretch",
    position: "Power day — 1× per week",
    muscles: [{n:"Quadriceps",p:true},{n:"Glutes",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Core",p:false}],
    tags: ["cycling","sprint","power","anaerobic","advanced"],
    diff: 7,
    str:  {suit:true,  eff:3, note:"High peak power develops leg strength and fast-twitch fiber recruitment."},
    vol:  {suit:false, eff:2, note:"Intensity precludes volume — sessions are short by design."},
    end:  {suit:true,  eff:3, note:"Develops anaerobic capacity and speed reserve for endurance events."},
    risk: 2,
    joints: {knee:2, hip:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [18, 28],
    youtube: null,
    targets: [
      { label: '10 sec × 6',  type: 'reps', note: 'Power-system sprint — full 3 min recovery between reps' },
      { label: '20 sec × 8',  type: 'reps', note: 'Extended sprint — anaerobic capacity focus' },
      { label: '30 sec × 10', type: 'reps', note: 'High-volume sprint session — advanced conditioning' }
    ]
  }
];

/* ── HIIT ────────────────────────────────────────────────── */
const cardioHIIT = [
  {
    id: 201,
    name: "Burpee", alt: "Full-body HIIT movement",
    desc: "A compound movement combining a squat, plank, push-up, and jump into one seamless sequence. Burpees elevate heart rate rapidly and train total-body coordination under fatigue. They are a staple of HIIT protocols precisely because they demand effort from every major muscle group while requiring no equipment.",
    cues: "Place hands shoulder-width apart when dropping to the floor. Keep hips high in the plank — don't sag. Land soft from the jump, absorbing through knees and hips. Scale by removing the jump (step back instead) or removing the push-up. Pace yourself — form breaks down faster than you think.",
    equipment: "None — bodyweight only",
    position: "HIIT circuits · Conditioning finishers",
    muscles: [{n:"Quadriceps",p:true},{n:"Chest",p:true},{n:"Shoulders",p:false},{n:"Core",p:false},{n:"Calves",p:false}],
    tags: ["hiit","burpee","full-body","beginner","no-equipment"],
    diff: 5,
    str:  {suit:true,  eff:2, note:"Some muscular demand, primarily cardiovascular."},
    vol:  {suit:true,  eff:3, note:"Good volume tool in circuits — 10–20 reps per set."},
    end:  {suit:true,  eff:5, note:"Highly effective cardiovascular conditioning tool."},
    risk: 3,
    joints: {wrist:2, knee:3, shoulder:2},
    mobility: 2,
    strength: 1,
    kcalPerRep: [0.4, 0.8],
    youtube: null,
    targets: [
      { label: '10 reps × 5',  type: 'reps', note: 'Entry HIIT circuit — 90s rest between sets' },
      { label: '20s/10s × 8',  type: 'reps', note: 'Tabata burpees — 4 min of maximum effort' },
      { label: '100 reps',     type: 'reps', note: 'Century challenge — complete at any pace' }
    ]
  },
  {
    id: 205,
    name: "Kettlebell Swing", alt: "Ballistic hip hinge",
    desc: "A ballistic hip-hinge movement where a kettlebell is driven forward by powerful hip extension. The swing trains the posterior chain (glutes, hamstrings, lower back) explosively while providing a cardiovascular stimulus that rivals interval running. It bridges the gap between strength and cardio in a single movement.",
    cues: "It's a hip hinge, not a squat — push hips back as the bell swings down, snap hips forward explosively to drive it up. Arms are guides, not lifters. Bell should float momentarily at the top — not pulled up by the shoulders. Core braced throughout. Start with lighter weight to groove the pattern.",
    equipment: "Kettlebell (12–24 kg typical range)",
    position: "Conditioning · Finisher · Hybrid strength-cardio",
    muscles: [{n:"Glutes",p:true},{n:"Hamstrings",p:true},{n:"Lower Back",p:true},{n:"Core",p:false},{n:"Shoulders",p:false}],
    tags: ["hiit","kettlebell","swing","posterior-chain","intermediate"],
    diff: 5,
    str:  {suit:true,  eff:4, note:"Excellent posterior chain stimulus — competitive with deadlift variants for glutes/hamstrings."},
    vol:  {suit:true,  eff:4, note:"Sustains high rep ranges (15–30 per set) for cardiovascular demand."},
    end:  {suit:true,  eff:5, note:"Heart rate response rivals interval running. Builds exceptional conditioning."},
    risk: 3,
    joints: {lumbar:3, hip:2, knee:1},
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.5, 0.9],
    youtube: null,
    targets: [
      { label: '20 reps × 5',  type: 'reps', note: 'Standard swing set — 60s rest; focus on power per rep' },
      { label: '10 min EMOM',  type: 'time', note: '15 swings every minute on the minute — 10 min straight' },
      { label: '200 reps',     type: 'reps', note: 'Volume session — break into sets as needed, minimal rest' }
    ]
  },
  {
    id: 204,
    name: "Box Jump", alt: "Plyometric jump to elevated surface",
    desc: "An explosive plyometric exercise that develops lower body power, fast-twitch fiber recruitment, and proprioception. Box jumps train the stretch-shortening cycle — the rapid eccentric-to-concentric sequence that underpins all athletic jumping and sprinting. Use a stable box or platform at a height that allows a solid landing with soft knees.",
    cues: "Jump from a quarter-squat position — don't wind up too deep. Land softly in an athletic position: knees and hips bent, weight through the whole foot. Step down — never jump down. Start conservatively with box height (40–50 cm). Form > height. Never test max height when fatigued.",
    equipment: "Plyo box · Stable elevated surface (40–60+ cm)",
    position: "Power development · HIIT circuits · Pre-lift activation",
    muscles: [{n:"Quadriceps",p:true},{n:"Glutes",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:false},{n:"Core",p:false}],
    tags: ["hiit","plyometric","power","intermediate","explosive"],
    diff: 6,
    str:  {suit:true,  eff:4, note:"Develops explosive lower body power — complements strength training."},
    vol:  {suit:false, eff:2, note:"High neural demand; low volume appropriate (3–5 sets × 5–8 reps)."},
    end:  {suit:true,  eff:3, note:"Trains the cardiovascular system when used in circuits."},
    risk: 4,
    joints: {knee:4, ankle:3, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [0.8, 1.4],
    youtube: null,
    targets: [
      { label: '5 reps × 5',  type: 'reps', note: '40–50 cm box — power focus, full reset between reps' },
      { label: '8 reps × 4',  type: 'reps', note: '50–60 cm box — intermediate plyometric volume' },
      { label: '10 reps × 3', type: 'reps', note: '60+ cm box — advanced; only attempt when fresh' }
    ]
  }
];

/* ── ROWING ──────────────────────────────────────────────── */
const cardioRowing = [
  {
    id: 301,
    name: "Steady-State Row", alt: "Zone 2 ergometer rowing",
    desc: "Sustained rowing at moderate aerobic effort — typically 18–22 strokes per minute at conversational pace. One of the best full-body aerobic tools available: rowing engages 86% of muscle mass (far more than running or cycling), making the cardiovascular response exceptional without the impact of running.",
    cues: "Sequence matters: legs → back → arms on the drive; arms → back → legs on the return. Ratio: roughly 1:2 drive-to-recovery. Catch position: shins vertical, arms straight, slight forward lean. Don't rush the catch. Keep stroke rate moderate and focus on power per stroke.",
    equipment: "Rowing ergometer (Concept2 or equivalent)",
    position: "Aerobic base · Cross-training · Warm-up (10–15 min)",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Arms",p:false},{n:"Glutes",p:false}],
    tags: ["rowing","endurance","zone2","full-body","beginner","low-impact"],
    diff: 3,
    str:  {suit:true,  eff:2, note:"Some back and leg engagement but primarily cardiovascular."},
    vol:  {suit:true,  eff:5, note:"Full-body engagement allows high aerobic volume with lower systemic fatigue than running."},
    end:  {suit:true,  eff:5, note:"Exceptional aerobic and muscular endurance development across all major muscle groups."},
    risk: 2,
    joints: {lumbar:2, knee:1, shoulder:1},
    mobility: 2,
    strength: 1,
    kcalPerRep: [9, 15],
    youtube: null,
    targets: [
      { label: '5 km',   type: 'distance', note: 'Standard aerobic row — aim for consistent split throughout' },
      { label: '20 min', type: 'time',     note: 'Time-based zone-2 row — let pace come naturally' },
      { label: '10 km',  type: 'distance', note: 'Long aerobic row — the classic base-building benchmark' }
    ]
  },
  {
    id: 302,
    name: "Row Intervals", alt: "500 m / 1000 m rowing repeats",
    desc: "Structured high-intensity rowing intervals at faster than race pace. Common formats: 8×500 m (2 min rest), 5×1000 m (3 min rest), or 4×2000 m. Row intervals simultaneously develop VO2max, lactate threshold, and technique under fatigue — the most effective way to improve rowing performance and cardiovascular fitness rapidly.",
    cues: "Drive legs first with maximum force — legs account for 60% of rowing power. Keep back angle consistent — don't 'break' the sequence under fatigue. Maintain stroke rate at 24–28 s/min for intervals (higher than steady state). Splits should be consistent across all reps; avoid fast start, slow finish.",
    equipment: "Rowing ergometer · Performance monitor (split tracking)",
    position: "Speed/quality day — limit 2× per week",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Biceps",p:false},{n:"Shoulders",p:false}],
    tags: ["rowing","intervals","vo2max","intermediate","speed"],
    diff: 8,
    str:  {suit:true,  eff:3, note:"Significant posterior chain and lat engagement under high power output."},
    vol:  {suit:true,  eff:4, note:"High aerobic and muscular stimulus — more systemic fatigue than cycling intervals."},
    end:  {suit:true,  eff:5, note:"Directly raises lactate threshold and VO2max for rowing performance."},
    risk: 3,
    joints: {lumbar:3, knee:2, shoulder:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [13, 22],
    youtube: null,
    targets: [
      { label: '500 m × 8',  type: 'reps', note: '2 min rest — classic high-intensity rowing benchmark' },
      { label: '1000 m × 5', type: 'reps', note: '3 min rest — longer intervals for lactate threshold work' },
      { label: '2000 m × 4', type: 'reps', note: '4 min rest — race-simulation distance; advanced athletes only' }
    ]
  },
  {
    id: 303,
    name: "Rowing Sprint", alt: "Max-effort 100–250 m row",
    desc: "All-out maximal rowing effort over 30–90 seconds. Targets the phosphocreatine and glycolytic energy systems at maximum power output. Rowing sprints develop peak power, rate-of-force development, and anaerobic capacity. They're physically demanding but joint-friendly compared to most sprint modalities.",
    cues: "Start powerful — first 10 strokes set the piece. Drive the footboard away from you with explosive leg force. Keep stroke rate high (30–36 s/min). Arms pull hard through the finish with elbows staying wide. Full recovery between sprints (3–5 min). This should be maximal — not pacing.",
    equipment: "Rowing ergometer",
    position: "Power day — 1× per week maximum",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Biceps",p:true},{n:"Glutes",p:false}],
    tags: ["rowing","sprint","power","anaerobic","advanced"],
    diff: 9,
    str:  {suit:true,  eff:4, note:"Maximal power output creates significant strength stimulus in posterior chain."},
    vol:  {suit:false, eff:2, note:"Too intense for volume — quality over quantity."},
    end:  {suit:true,  eff:3, note:"Develops anaerobic capacity and power reserve for longer rowing pieces."},
    risk: 3,
    joints: {lumbar:3, knee:2, shoulder:3},
    mobility: 2,
    strength: 3,
    kcalPerRep: [18, 30],
    youtube: null,
    targets: [
      { label: '100 m × 6',  type: 'reps', note: '~20 sec all-out — 3 min full rest between reps' },
      { label: '250 m × 6',  type: 'reps', note: '~60 sec maximal effort — 4 min rest' },
      { label: '500 m × 4',  type: 'reps', note: 'Sub-max sprint pace — 5 min rest between reps' }
    ]
  }
];

/* ── RECOVERY ────────────────────────────────────────────── */
const cardioRecovery = [
  {
    id: 401,
    name: "Walking", alt: "Low-intensity steady state / LISS",
    desc: "The most underrated recovery and conditioning tool. Walking at a comfortable pace (3–5 km/h) is genuinely aerobic, burns fat, promotes recovery by increasing blood flow without generating fatigue, and improves markers of cardiovascular health when done consistently. 8,000–10,000 steps per day is strongly associated with longevity outcomes.",
    cues: "Walk at a pace where you could easily have a conversation. Arms should swing naturally. Posture tall — head up, shoulders back. Take longer walks in nature where possible for additional mental health benefits. Incline walking (treadmill 10–15%) dramatically increases calorie burn without pace change.",
    equipment: "None · Shoes · Outdoors / treadmill",
    position: "Active recovery day · Daily baseline · Post-training walk",
    muscles: [{n:"Calves",p:false},{n:"Glutes",p:false},{n:"Hip Flexors",p:false},{n:"Quadriceps",p:false}],
    tags: ["recovery","walking","liss","beginner","low-impact","daily"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible strength stimulus."},
    vol:  {suit:true,  eff:2, note:"Low stimulus — best as a supplement to other training, not a replacement."},
    end:  {suit:true,  eff:3, note:"Consistent walking significantly improves cardiovascular health over time."},
    risk: 1,
    joints: {ankle:1, knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [4, 7],
    youtube: null,
    targets: [
      { label: '20 min',  type: 'time',     note: 'Post-workout walk — active recovery' },
      { label: '5 km',    type: 'distance', note: 'Standard daily walk — 45–60 min at easy pace' },
      { label: '10,000 steps', type: 'reps', note: 'Daily step target — the longevity benchmark' }
    ]
  },
  {
    id: 402,
    name: "Active Recovery Swim", alt: "Leisure swimming / hydrotherapy",
    desc: "Low-intensity swimming — easy laps, water walking, or gentle freestyle — used on rest days or post-hard-training days. Water's buoyancy eliminates joint compression while its resistance provides gentle muscular engagement. Swimming is one of the best active recovery modalities for athletes with joint soreness.",
    cues: "Effort should feel effortless — if you're breathing hard, slow down. Focus on smooth, relaxed technique rather than pace or distance. 20–40 min is enough. Contrast bathing (alternating warm and cold water) after swimming can further accelerate recovery.",
    equipment: "Swimming pool · Swimwear · Goggles",
    position: "Active recovery · Rest day · Joint pain management",
    muscles: [{n:"Shoulders",p:false},{n:"Back",p:false},{n:"Core",p:false},{n:"Legs",p:false}],
    tags: ["recovery","swimming","low-impact","active-rest","beginner"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Not a meaningful strength stimulus at recovery intensity."},
    vol:  {suit:true,  eff:2, note:"Gentle movement without training load."},
    end:  {suit:true,  eff:2, note:"Maintains aerobic function without adding fatigue."},
    risk: 1,
    joints: {},
    mobility: 1,
    strength: 1,
    kcalPerRep: [5, 9],
    youtube: null,
    targets: [
      { label: '20 min',  type: 'time',     note: 'Short recovery dip — minimum effective dose' },
      { label: '1 km',    type: 'distance', note: 'Easy laps — ~30–40 min depending on pace' },
      { label: '40 min',  type: 'time',     note: 'Extended hydrotherapy session — ideal post-heavy-leg-day' }
    ]
  },
  {
    id: 403,
    name: "Cycling Recovery Spin", alt: "Easy spin / active rest",
    desc: "Very light cycling — 20–40 minutes at minimal resistance and low heart rate (below 120 bpm). Promotes blood circulation to fatigued muscles, helping flush metabolic waste products while delivering oxygen and nutrients. Ideal the day after a hard training session, especially leg-heavy work.",
    cues: "Resistance should feel like pedaling through air. Cadence 80–90 RPM. If your legs feel heavy at first, that's expected and will ease within 5–10 minutes. Don't push through soreness — this should feel restorative, not demanding.",
    equipment: "Stationary bike / road bike / light resistance trainer",
    position: "Day after heavy lifting or running · Active rest day",
    muscles: [{n:"Quadriceps",p:false},{n:"Hamstrings",p:false},{n:"Calves",p:false}],
    tags: ["recovery","cycling","easy","active-rest","low-impact"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true,  eff:2, note:"Movement without meaningful training load."},
    end:  {suit:true,  eff:2, note:"Maintains aerobic function while allowing system recovery."},
    risk: 1,
    joints: {knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [5, 8],
    youtube: null,
    targets: [
      { label: '20 min',  type: 'time',     note: 'Minimum recovery spin — gets blood moving' },
      { label: '10 km',   type: 'distance', note: 'Easy distance — <120 bpm throughout' },
      { label: '40 min',  type: 'time',     note: 'Full recovery session — legs should feel better leaving than arriving' }
    ]
  }
];

/* ── MOBILITY ────────────────────────────────────────────── */
const cardioMobility = [
  {
    id: 501,
    name: "Hip 90/90 Stretch", alt: "Seated hip rotation stretch",
    desc: "A fundamental hip mobility drill addressing both internal and external rotation simultaneously. The 90/90 position places one hip in external rotation and one in internal rotation, exposing stiffness in both directions. Hip mobility directly impacts running efficiency, squat depth, and lower back health.",
    cues: "Sit with both legs at 90-degree angles — front shin parallel to you, back shin to the side. Sit tall — resist collapsing through the spine. Lean gently forward over the front shin, keeping the chest up. Hold 60–90 seconds per side. Progress by shifting more weight onto the front hip.",
    equipment: "Mat · Smooth floor",
    position: "Pre-training warm-up · Post-training cooldown · Daily mobility work",
    muscles: [{n:"Hip Flexors",p:true},{n:"Glutes",p:true},{n:"Hip Rotators",p:true},{n:"Piriformis",p:false}],
    tags: ["mobility","hip","flexibility","beginner","daily"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Flexibility work, not a strength stimulus."},
    vol:  {suit:true,  eff:1, note:"Best used as prep or recovery, not a standalone training session."},
    end:  {suit:false, eff:1, note:"Not a cardiovascular stimulus."},
    risk: 1,
    joints: {hip:1, knee:1},
    mobility: 3,
    strength: 1,
    kcalPerRep: [0.1, 0.2],
    youtube: null,
    targets: [
      { label: '60 sec / side',  type: 'time', note: 'Entry hold — feel the rotation, breathe into it' },
      { label: '90 sec / side',  type: 'time', note: 'Standard hold — sufficient to elicit mobility change' },
      { label: '5 min total',    type: 'time', note: 'Full hip rotation session — 2–3 rounds per side' }
    ]
  },
  {
    id: 502,
    name: "World's Greatest Stretch", alt: "Multi-plane hip mobility complex",
    desc: "A multi-joint mobility drill that moves through thoracic rotation, hip flexor lengthening, hamstring extension, and ankle dorsiflexion in a single flowing sequence. Often called the 'most useful stretch' because it addresses the key restrictions that limit athletic movement in a single movement pattern.",
    cues: "Step into a deep lunge. Place same-side hand on the floor inside the front foot. Rotate the opposite arm toward the ceiling, following it with your eyes. Hold 2 seconds. Straighten the front leg to stretch the hamstring. Repeat 5 times each side. Move slowly and breathe into each position.",
    equipment: "None · Mat optional",
    position: "Pre-training warm-up · Morning mobility routine",
    muscles: [{n:"Hip Flexors",p:true},{n:"Thoracic Spine",p:true},{n:"Hamstrings",p:true},{n:"Ankles",p:false},{n:"Glutes",p:false}],
    tags: ["mobility","full-body","warm-up","beginner","dynamic"],
    diff: 3,
    str:  {suit:false, eff:1, note:"Mobility, not strength."},
    vol:  {suit:true,  eff:1, note:"Best as prep/cool-down."},
    end:  {suit:false, eff:1, note:"Not a cardiovascular stimulus."},
    risk: 1,
    joints: {hip:1, ankle:1, lumbar:1},
    mobility: 3,
    strength: 1,
    kcalPerRep: [0.1, 0.2],
    youtube: null,
    targets: [
      { label: '5 reps / side',  type: 'reps', note: 'Pre-training minimum — full sequence per rep' },
      { label: '8 reps / side',  type: 'reps', note: 'Standard warm-up volume — 3–4 min total' },
      { label: '3 rounds',       type: 'reps', note: 'Morning mobility routine — full body in 10 min' }
    ]
  },
  {
    id: 503,
    name: "Cat-Cow Flow", alt: "Spinal flexion-extension drill",
    desc: "A rhythmic, breath-coordinated spinal mobility drill that moves between full spinal flexion (cat) and extension (cow). It lubricates the spinal joints, gently activates the paraspinal musculature, and improves thoracic and lumbar mobility — all without any loading. Excellent as a first-thing-in-the-morning drill or warm-up opener.",
    cues: "On hands and knees with wrists under shoulders, knees under hips. Exhale fully as you round the spine — tuck pelvis, push mid-back to ceiling. Inhale as you arch — drop belly toward floor, lift chest and tailbone. Move slowly and explore the full range. 10–15 slow repetitions.",
    equipment: "Mat",
    position: "Morning routine · Pre-training · Daily spinal maintenance",
    muscles: [{n:"Paraspinals",p:true},{n:"Core",p:false},{n:"Thoracic Spine",p:false}],
    tags: ["mobility","spine","back","beginner","daily","warm-up"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Not a strength drill."},
    vol:  {suit:true,  eff:1, note:"Prep and recovery only."},
    end:  {suit:false, eff:1, note:"Not cardiovascular."},
    risk: 1,
    joints: {lumbar:1},
    mobility: 2,
    strength: 1,
    kcalPerRep: [0.05, 0.1],
    youtube: null,
    targets: [
      { label: '10 reps',  type: 'reps', note: 'Minimum spine wake-up — slow and deliberate' },
      { label: '20 reps',  type: 'reps', note: 'Standard daily dose — 2–3 min of spinal movement' },
      { label: '3 min',    type: 'time', note: 'Continuous flow — match breath to movement throughout' }
    ]
  }
];

/* ── AGGREGATE EXPORT (used by view nav buttons) ─────────── */
const cardioAllExercises = [
  ...cardioRunning,
  ...cardioCycling,
  ...cardioHIIT,
  ...cardioRowing,
  ...cardioRecovery,
  ...cardioMobility
];
