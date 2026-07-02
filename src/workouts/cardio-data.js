/* ─────────────────────────────────────────────────────────────────────────
 * CARDIO LIBRARY — pace/distance/rep modalities only (running, walking,
 * cycling, rowing, swimming, ski erg, air bike, elliptical, stair
 * climbing, jump rope).
 * HIIT combos, mobility/stretching and isolated power moves (burpees,
 * KB swings, box jumps) live in their own files. Jump rope entries here
 * are standalone cardio sets (continuous bouncing, rounds, double-unders),
 * not warm-up skip-throughs — those stay in the warm-up file.
 *
 * DIFFICULTY SCALE (1-10, calibrated against the existing reference scale:
 * Standard Push-Up 3.0, Chin-Up 3.8, Archer Push-Up 6.3, Tuck Planche 6.0,
 * Archer Pull-Up 6.5, Straddle Planche 8.5)
 * `diff` = the representative/typical version of the workout for an
 * average trained person. Steady/continuous work uses its Novice goalpost;
 * interval/sprint work uses its Advanced goalpost (hard at any level).
 *
 * `goalposts` = per-tier distance + pace + its own diff, so a 5km jog and
 * a marathon (or a 5km row and a 2km TT) aren't forced under one number.
 * tier: Beginner → Novice → Intermediate → Advanced → Elite
 * ───────────────────────────────────────────────────────────────────── */

/* ── WALKING ─────────────────────────────────────────────── */
const cardioWalking = [
  {
    id: 501,
    name: "Mall Walk", alt: "Indoor low-impact walk",
    desc: "Slow, flat, climate-controlled walking aimed at people who are very deconditioned, overweight, or returning from injury. Zero technique demand — the goal is simply moving consistently.",
    cues: "Comfortable shoes, flat indoor surface. Stop and rest anytime breathing feels labored. Build minutes before building pace.",
    equipment: "None · Indoor flat surface (mall, hallway, treadmill flat)",
    position: "Entry-level cardio · Rehab · Daily baseline",
    muscles: [{n:"Calves",p:false},{n:"Glutes",p:false},{n:"Hip Flexors",p:false}],
    tags: ["walking","beginner","rehab","low-impact"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:2, note:"Best used to build a consistency habit before adding intensity."},
    end:  {suit:true, eff:2, note:"Gentle aerobic stimulus for very deconditioned individuals."},
    risk: 1,
    joints: {ankle:1, knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [35, 45],
    youtube: null,
    targets: [
      { label: "1 km", type: "distance", note: "Beginner — 18:00 /km" },
      { label: "2 km", type: "distance", note: "Novice — 16:00 /km" },
      { label: "3 km", type: "distance", note: "Intermediate — 15:00 /km" },
      { label: "5 km", type: "distance", note: "Advanced — 14:00 /km" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "1 km", pace: "18:00 /km", diff: 1 },
      { tier: "Novice", distance: "2 km", pace: "16:00 /km", diff: 1 },
      { tier: "Intermediate", distance: "3 km", pace: "15:00 /km", diff: 1 },
      { tier: "Advanced", distance: "5 km", pace: "14:00 /km", diff: 2 }
    ]
  },
  {
    id: 502,
    name: "Leisure Walk", alt: "Casual walking pace",
    desc: "Unhurried, comfortable walking — the most accessible cardio there is. Genuinely aerobic when done consistently, with essentially zero injury risk.",
    cues: "Tall posture, natural arm swing, breathe normally throughout.",
    equipment: "None · Shoes",
    position: "Active recovery · Daily baseline",
    muscles: [{n:"Calves",p:false},{n:"Glutes",p:false},{n:"Hip Flexors",p:false},{n:"Quadriceps",p:false}],
    tags: ["walking","liss","recovery","low-impact"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:2, note:"Supplemental volume tool."},
    end:  {suit:true, eff:3, note:"Consistent walking improves cardiovascular markers over time."},
    risk: 1,
    joints: {ankle:1, knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [40, 50],
    youtube: null,
    targets: [
      { label: "2 km", type: "distance", note: "Beginner — 14:00 /km" },
      { label: "4 km", type: "distance", note: "Novice — 13:00 /km" },
      { label: "6 km", type: "distance", note: "Intermediate — 12:00 /km" },
      { label: "10 km", type: "distance", note: "Advanced — 12:00 /km" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "2 km", pace: "14:00 /km", diff: 1 },
      { tier: "Novice", distance: "4 km", pace: "13:00 /km", diff: 1 },
      { tier: "Intermediate", distance: "6 km", pace: "12:00 /km", diff: 2 },
      { tier: "Advanced", distance: "10 km", pace: "12:00 /km", diff: 2 }
    ]
  },
  {
    id: 503,
    name: "Brisk Walk", alt: "Purposeful moderate-pace walk",
    desc: "Walking at a pace that noticeably raises heart rate while remaining fully conversational. The standard 'get your steps in with intent' pace.",
    cues: "Arms bent ~90°, drive them forward. Push off through the toes for a slightly longer stride than leisure walking.",
    equipment: "None · Shoes",
    position: "Daily baseline · Active recovery",
    muscles: [{n:"Calves",p:true},{n:"Glutes",p:false},{n:"Hip Flexors",p:false},{n:"Quadriceps",p:false}],
    tags: ["walking","liss","beginner","low-impact"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:3, note:"Solid daily volume with minimal fatigue cost."},
    end:  {suit:true, eff:3, note:"Meaningful aerobic stimulus at a sustainable pace."},
    risk: 1,
    joints: {ankle:1, knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [45, 58],
    youtube: null,
    targets: [
      { label: "3 km", type: "distance", note: "Beginner — 11:30 /km" },
      { label: "5 km", type: "distance", note: "Novice — 11:00 /km" },
      { label: "8 km", type: "distance", note: "Intermediate — 10:30 /km" },
      { label: "12 km", type: "distance", note: "Advanced — 10:00 /km" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "3 km", pace: "11:30 /km", diff: 2 },
      { tier: "Novice", distance: "5 km", pace: "11:00 /km", diff: 2 },
      { tier: "Intermediate", distance: "8 km", pace: "10:30 /km", diff: 2 },
      { tier: "Advanced", distance: "12 km", pace: "10:00 /km", diff: 3 }
    ]
  },
  {
    id: 504,
    name: "Fast Walk", alt: "Power walk",
    desc: "Maximum-effort walking just shy of a jog — significantly raises heart rate while staying impact-free. A strong bridge for someone not yet ready to run.",
    cues: "Exaggerated arm drive, longer stride with quick turnover. Should feel like real effort by the end.",
    equipment: "None · Shoes",
    position: "Beginner cardio progression · Bridge to running",
    muscles: [{n:"Calves",p:true},{n:"Glutes",p:true},{n:"Hip Flexors",p:false},{n:"Quadriceps",p:false}],
    tags: ["walking","power-walk","beginner","low-impact"],
    diff: 3,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:3, note:"Good volume tool for those not yet ready to run."},
    end:  {suit:true, eff:4, note:"Strong aerobic stimulus without impact."},
    risk: 1,
    joints: {ankle:2, knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [55, 68],
    youtube: null,
    targets: [
      { label: "3 km", type: "distance", note: "Beginner — 9:30 /km" },
      { label: "5 km", type: "distance", note: "Novice — 9:00 /km" },
      { label: "8 km", type: "distance", note: "Intermediate — 8:30 /km" },
      { label: "12 km", type: "distance", note: "Advanced — 8:00 /km" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "3 km", pace: "9:30 /km", diff: 2 },
      { tier: "Novice", distance: "5 km", pace: "9:00 /km", diff: 3 },
      { tier: "Intermediate", distance: "8 km", pace: "8:30 /km", diff: 4 },
      { tier: "Advanced", distance: "12 km", pace: "8:00 /km", diff: 5 }
    ]
  },
  {
    id: 505,
    name: "Race Walk", alt: "Technical heel-toe walking",
    desc: "A technical walking discipline requiring one foot in contact with the ground at all times and a straightened support leg — the fastest form of walking, governed by strict form rules.",
    cues: "Heel strikes first, leg straightens fully under the body, hips rotate to extend stride length. Quick arm pump drives cadence.",
    equipment: "None · Shoes (racing flats optional)",
    position: "Technical cardio · Competitive walking",
    muscles: [{n:"Calves",p:true},{n:"Glutes",p:true},{n:"Hip Flexors",p:true},{n:"Hip Rotators",p:false}],
    tags: ["walking","race-walk","technique","intermediate"],
    diff: 5,
    str:  {suit:false, eff:1, note:"Minimal."},
    vol:  {suit:true, eff:3, note:"High-cadence volume with unique hip/glute demand."},
    end:  {suit:true, eff:4, note:"Cardio output approaches easy jogging without impact."},
    risk: 2,
    joints: {ankle:2, knee:2, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [60, 75],
    youtube: null,
    targets: [
      { label: "2 km", type: "distance", note: "Novice — 7:30 /km" },
      { label: "5 km", type: "distance", note: "Intermediate — 7:00 /km" },
      { label: "10 km", type: "distance", note: "Advanced — 6:30 /km" },
      { label: "20 km", type: "distance", note: "Elite — 6:00 /km" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2 km", pace: "7:30 /km", diff: 4 },
      { tier: "Intermediate", distance: "5 km", pace: "7:00 /km", diff: 5 },
      { tier: "Advanced", distance: "10 km", pace: "6:30 /km", diff: 6 },
      { tier: "Elite", distance: "20 km", pace: "6:00 /km", diff: 8 }
    ]
  },
  {
    id: 506,
    name: "Incline Treadmill Walk", alt: "Uphill walk",
    desc: "Flat-pace walking on a steep treadmill incline (10-15%+). Dramatically raises heart rate and calorie burn without any added joint impact compared to running.",
    cues: "Don't hold the handrails — let your legs and glutes do the work. Keep torso upright, not hunched forward.",
    equipment: "Treadmill",
    position: "Low-impact intensity builder · Glute-focused cardio",
    muscles: [{n:"Glutes",p:true},{n:"Calves",p:true},{n:"Hamstrings",p:false},{n:"Quadriceps",p:false}],
    tags: ["walking","incline","treadmill","low-impact"],
    diff: 3,
    str:  {suit:true, eff:2, note:"Real glute/calf endurance demand at steep grades."},
    vol:  {suit:true, eff:3, note:"High calorie burn per minute at low joint cost."},
    end:  {suit:true, eff:4, note:"Strong cardio stimulus without running's impact."},
    risk: 1,
    joints: {ankle:2, knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [70, 95],
    youtube: null,
    targets: [
      { label: "20 min", type: "time", note: "Beginner — 10% incline, 5 km/h" },
      { label: "30 min", type: "time", note: "Novice — 12% incline, 5 km/h" },
      { label: "40 min", type: "time", note: "Intermediate — 15% incline, 5.5 km/h" },
      { label: "60 min", type: "time", note: "Advanced — 15% incline, 6 km/h" },
      { label: "75 min", type: "time", note: "Elite — 15% incline, 6.5 km/h" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "20 min", pace: "10% incline, 5 km/h", diff: 3 },
      { tier: "Novice", distance: "30 min", pace: "12% incline, 5 km/h", diff: 4 },
      { tier: "Intermediate", distance: "40 min", pace: "15% incline, 5.5 km/h", diff: 5 },
      { tier: "Advanced", distance: "60 min", pace: "15% incline, 6 km/h", diff: 6 },
      { tier: "Elite", distance: "75 min", pace: "15% incline, 6.5 km/h", diff: 7 }
    ]
  },
  {
    id: 507,
    name: "Rucking", alt: "Weighted walk",
    desc: "Walking with a loaded backpack. Combines cardio with significant posterior chain and postural strength work — a military-conditioning staple that scales easily with added weight.",
    cues: "Pack weight high and close to the back. Stand tall, don't lean forward into the load. Start light (10% bodyweight) and add gradually.",
    equipment: "Weighted backpack / ruck plate",
    position: "Hybrid strength-cardio · Outdoor conditioning",
    muscles: [{n:"Glutes",p:true},{n:"Calves",p:true},{n:"Lower Back",p:true},{n:"Core",p:false},{n:"Hamstrings",p:false}],
    tags: ["walking","rucking","hybrid","intermediate"],
    diff: 4,
    str:  {suit:true, eff:3, note:"Loaded carry demand builds postural and posterior chain endurance."},
    vol:  {suit:true, eff:3, note:"Good volume tool, fatigue scales with load."},
    end:  {suit:true, eff:4, note:"Elevated heart rate from load without running's impact."},
    risk: 2,
    joints: {ankle:2, knee:2, hip:2, lumbar:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [65, 90],
    youtube: null,
    targets: [
      { label: "1.5 km", type: "distance", note: "Beginner — 13:00 /km, 5kg" },
      { label: "3 km", type: "distance", note: "Novice — 12:00 /km, 10kg" },
      { label: "6 km", type: "distance", note: "Intermediate — 11:00 /km, 15kg" },
      { label: "10 km", type: "distance", note: "Advanced — 10:30 /km, 20kg" },
      { label: "20 km", type: "distance", note: "Elite — 10:00 /km, 25kg+" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "1.5 km", pace: "13:00 /km, 5kg", diff: 2 },
      { tier: "Novice", distance: "3 km", pace: "12:00 /km, 10kg", diff: 3 },
      { tier: "Intermediate", distance: "6 km", pace: "11:00 /km, 15kg", diff: 5 },
      { tier: "Advanced", distance: "10 km", pace: "10:30 /km, 20kg", diff: 6 },
      { tier: "Elite", distance: "20 km", pace: "10:00 /km, 25kg+", diff: 8 }
    ]
  },
  {
    id: 508,
    name: "Nordic Walking", alt: "Pole walking",
    desc: "Walking with specialized poles that engage the upper body on every stride. Adds a full-body strength-endurance element to ordinary walking, raising calorie burn 20-40% over walking alone.",
    cues: "Plant pole at an angle behind the foot, push through to extend the arm fully. Let the poles propel you forward, don't just carry them.",
    equipment: "Nordic walking poles",
    position: "Full-body low-impact cardio",
    muscles: [{n:"Shoulders",p:false},{n:"Triceps",p:false},{n:"Calves",p:false},{n:"Core",p:false}],
    tags: ["walking","nordic","full-body","low-impact"],
    diff: 2,
    str:  {suit:true, eff:2, note:"Upper body pushing demand adds light strength-endurance stimulus."},
    vol:  {suit:true, eff:3, note:"Good volume with full-body engagement."},
    end:  {suit:true, eff:3, note:"Elevated calorie burn versus plain walking."},
    risk: 1,
    joints: {ankle:1, knee:1, hip:1, shoulder:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [55, 70],
    youtube: null,
    targets: [
      { label: "3 km", type: "distance", note: "Beginner — 11:00 /km" },
      { label: "5 km", type: "distance", note: "Novice — 10:30 /km" },
      { label: "8 km", type: "distance", note: "Intermediate — 10:00 /km" },
      { label: "12 km", type: "distance", note: "Advanced — 9:30 /km" },
      { label: "16 km", type: "distance", note: "Elite — 9:00 /km" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "3 km", pace: "11:00 /km", diff: 2 },
      { tier: "Novice", distance: "5 km", pace: "10:30 /km", diff: 2 },
      { tier: "Intermediate", distance: "8 km", pace: "10:00 /km", diff: 3 },
      { tier: "Advanced", distance: "12 km", pace: "9:30 /km", diff: 4 },
      { tier: "Elite", distance: "16 km", pace: "9:00 /km", diff: 5 }
    ]
  },
  {
    id: 509,
    name: "Sand Walking", alt: "Beach walking",
    desc: "Walking on loose sand, where the unstable surface forces every stride to generate more force. Significantly harder than the same pace on pavement, with added ankle stabilizer demand.",
    cues: "Shorter, more deliberate strides than on firm ground. Expect a noticeably higher heart rate at the same perceived pace.",
    equipment: "None · Beach / sand surface",
    position: "Variable-terrain cardio · Ankle/calf conditioning",
    muscles: [{n:"Calves",p:true},{n:"Glutes",p:false},{n:"Hip Flexors",p:false},{n:"Ankles",p:true}],
    tags: ["walking","sand","terrain","low-impact"],
    diff: 3,
    str:  {suit:true, eff:2, note:"Unstable surface raises calf and stabilizer demand."},
    vol:  {suit:true, eff:3, note:"Higher calorie cost per km than pavement walking."},
    end:  {suit:true, eff:4, note:"Elevated cardio output from surface resistance."},
    risk: 1,
    joints: {ankle:2, knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [65, 85],
    youtube: null,
    targets: [
      { label: "1.5 km", type: "distance", note: "Beginner — 12:00 /km" },
      { label: "3 km", type: "distance", note: "Novice — 11:00 /km" },
      { label: "5 km", type: "distance", note: "Intermediate — 10:30 /km" },
      { label: "8 km", type: "distance", note: "Advanced — 10:00 /km" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "1.5 km", pace: "12:00 /km", diff: 2 },
      { tier: "Novice", distance: "3 km", pace: "11:00 /km", diff: 3 },
      { tier: "Intermediate", distance: "5 km", pace: "10:30 /km", diff: 4 },
      { tier: "Advanced", distance: "8 km", pace: "10:00 /km", diff: 5 }
    ]
  },
  {
    id: 510,
    name: "Hiking", alt: "Trail walk",
    desc: "Walking on natural, often uneven and inclined terrain. Combines aerobic base-building with stabilizer and balance demand that flat walking doesn't provide.",
    cues: "Shorten stride on uphill sections, use a slight forward lean. Trekking poles recommended for steep or long descents to protect knees.",
    equipment: "Trail shoes / boots · Trekking poles optional",
    position: "Outdoor aerobic base · Variable terrain",
    muscles: [{n:"Quadriceps",p:true},{n:"Calves",p:true},{n:"Glutes",p:true},{n:"Hip Flexors",p:false},{n:"Core",p:false}],
    tags: ["walking","hiking","trail","outdoor"],
    diff: 3,
    str:  {suit:true, eff:2, note:"Uneven terrain and elevation demand real leg endurance."},
    vol:  {suit:true, eff:4, note:"Long sessions are common and well tolerated."},
    end:  {suit:true, eff:4, note:"Strong aerobic stimulus, intensity varies with terrain."},
    risk: 2,
    joints: {ankle:2, knee:2, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [70, 100],
    youtube: null,
    targets: [
      { label: "5 km", type: "distance", note: "Beginner — flat-rolling trail" },
      { label: "10 km", type: "distance", note: "Novice — moderate hills" },
      { label: "15 km", type: "distance", note: "Intermediate — sustained elevation gain" },
      { label: "25 km", type: "distance", note: "Advanced — significant elevation gain" },
      { label: "40+ km", type: "distance", note: "Elite — mountain day-hike" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "5 km", pace: "flat-rolling trail", diff: 2 },
      { tier: "Novice", distance: "10 km", pace: "moderate hills", diff: 4 },
      { tier: "Intermediate", distance: "15 km", pace: "sustained elevation gain", diff: 5 },
      { tier: "Advanced", distance: "25 km", pace: "significant elevation gain", diff: 7 },
      { tier: "Elite", distance: "40+ km", pace: "mountain day-hike", diff: 9 }
    ]
  }
];

/* ── RUNNING ─────────────────────────────────────────────── */
const cardioRunning = [
  {
    id: 1,
    name: "Walk-Run Intervals", alt: "Couch to 5K style",
    desc: "Alternating short jogging bouts with walking recovery. The standard on-ramp for someone with no running background to build up to continuous running safely.",
    cues: "Jog at a pace where you could still speak in short sentences. Walk fully recovers before the next jog bout. Progress jog time, not pace.",
    equipment: "Running shoes",
    position: "Entry point for new runners",
    muscles: [{n:"Quadriceps",p:false},{n:"Calves",p:false},{n:"Hamstrings",p:false}],
    tags: ["running","beginner","walk-run","couch-to-5k"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Minimal."},
    vol:  {suit:true, eff:3, note:"Builds running tolerance gradually."},
    end:  {suit:true, eff:3, note:"Introduces the body to running-specific aerobic demand."},
    risk: 2,
    joints: {ankle:2, knee:2, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [50, 65],
    youtube: null,
    targets: [
      { label: "1min jog / 2min walk × 6", type: "reps", note: "Beginner — conversational jog" },
      { label: "3min jog / 2min walk × 5", type: "reps", note: "Novice — conversational jog" },
      { label: "5min jog / 1min walk × 5", type: "reps", note: "Intermediate — easy jog" },
      { label: "8min jog / 1min walk × 3", type: "reps", note: "Advanced — easy jog" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "1min jog / 2min walk × 6", pace: "conversational jog", diff: 1 },
      { tier: "Novice", distance: "3min jog / 2min walk × 5", pace: "conversational jog", diff: 2 },
      { tier: "Intermediate", distance: "5min jog / 1min walk × 5", pace: "easy jog", diff: 3 },
      { tier: "Advanced", distance: "8min jog / 1min walk × 3", pace: "easy jog", diff: 3 }
    ]
  },
  {
    id: 2,
    name: "Light Jog", alt: "Very easy continuous jog",
    desc: "The slowest sustainable continuous running pace — slower than a typical 'easy run'. A stepping stone between walk-run intervals and a real easy run.",
    cues: "Pace should feel almost too slow. Land softly, short relaxed strides. If breathing hard, you're going too fast.",
    equipment: "Running shoes",
    position: "Beginner aerobic base",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:false},{n:"Calves",p:false}],
    tags: ["running","beginner","jog","aerobic"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Minimal."},
    vol:  {suit:true, eff:3, note:"Low-fatigue running volume for new runners."},
    end:  {suit:true, eff:4, note:"Builds the basic aerobic running engine."},
    risk: 2,
    joints: {ankle:2, knee:2, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [55, 68],
    youtube: null,
    targets: [
      { label: "2 km", type: "distance", note: "Beginner — 8:00 /km" },
      { label: "3 km", type: "distance", note: "Novice — 7:30 /km" },
      { label: "5 km", type: "distance", note: "Intermediate — 7:00 /km" },
      { label: "8 km", type: "distance", note: "Advanced — 6:30 /km" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "2 km", pace: "8:00 /km", diff: 2 },
      { tier: "Novice", distance: "3 km", pace: "7:30 /km", diff: 2 },
      { tier: "Intermediate", distance: "5 km", pace: "7:00 /km", diff: 3 },
      { tier: "Advanced", distance: "8 km", pace: "6:30 /km", diff: 4 }
    ]
  },
  {
    id: 3,
    name: "Easy Run", alt: "Zone 2 / conversational pace",
    desc: "Comfortable, conversational-pace running. Builds aerobic base, mitochondrial density, fat oxidation. Should be 70-80% of any running program.",
    cues: "Foot lands under hips, not in front. Cadence ~170-180 spm. Relaxed shoulders, slight forward lean. If you can't talk, slow down.",
    equipment: "Running shoes",
    position: "Aerobic base · Recovery day",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:false},{n:"Glutes",p:false},{n:"Hip Flexors",p:false}],
    tags: ["running","endurance","zone2","aerobic"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Minimal strength stimulus."},
    vol:  {suit:true, eff:3, note:"Builds aerobic volume without excess fatigue."},
    end:  {suit:true, eff:5, note:"Best tool for raw aerobic endurance."},
    risk: 2,
    joints: {ankle:2, knee:2, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [55, 70],
    youtube: null,
    targets: [
      { label: "3 km", type: "distance", note: "Beginner — 6:30 /km" },
      { label: "5 km", type: "distance", note: "Novice — 6:00 /km" },
      { label: "8 km", type: "distance", note: "Intermediate — 5:30 /km" },
      { label: "12 km", type: "distance", note: "Advanced — 5:00 /km" },
      { label: "16 km", type: "distance", note: "Elite — 4:30 /km" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "3 km", pace: "6:30 /km", diff: 1 },
      { tier: "Novice", distance: "5 km", pace: "6:00 /km", diff: 2 },
      { tier: "Intermediate", distance: "8 km", pace: "5:30 /km", diff: 3 },
      { tier: "Advanced", distance: "12 km", pace: "5:00 /km", diff: 4 },
      { tier: "Elite", distance: "16 km", pace: "4:30 /km", diff: 5 }
    ]
  },
  {
    id: 4,
    name: "Recovery Run", alt: "Very easy shake-out run",
    desc: "A deliberately slow, short run the day after hard training. The goal is blood flow, not fitness — pace is irrelevant as long as it stays genuinely easy.",
    cues: "Slower than your normal easy pace, no exceptions. If legs feel heavy at first, that's expected and should ease.",
    equipment: "Running shoes",
    position: "Active recovery · Day after hard session",
    muscles: [{n:"Quadriceps",p:false},{n:"Hamstrings",p:false},{n:"Calves",p:false}],
    tags: ["running","recovery","easy","active-rest"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:2, note:"Movement without meaningful training load."},
    end:  {suit:true, eff:2, note:"Maintains aerobic function while allowing recovery."},
    risk: 1,
    joints: {ankle:1, knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [50, 62],
    youtube: null,
    targets: [
      { label: "2 km", type: "distance", note: "Novice — 7:30 /km" },
      { label: "4 km", type: "distance", note: "Intermediate — 7:00 /km" },
      { label: "6 km", type: "distance", note: "Advanced — 6:30 /km" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2 km", pace: "7:30 /km", diff: 1 },
      { tier: "Intermediate", distance: "4 km", pace: "7:00 /km", diff: 1 },
      { tier: "Advanced", distance: "6 km", pace: "6:30 /km", diff: 2 }
    ]
  },
  {
    id: 5,
    name: "Progression Run", alt: "Negative-split build run",
    desc: "A continuous run that starts easy and gradually accelerates, finishing at or near tempo pace. Teaches pacing discipline and trains the body to perform under accumulated fatigue.",
    cues: "First third easy, middle third moderate, final third comfortably hard. The finish should feel controlled, not desperate.",
    equipment: "Running shoes",
    position: "Aerobic-to-threshold bridge session",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Glutes",p:false}],
    tags: ["running","progression","tempo","intermediate"],
    diff: 5,
    str:  {suit:false, eff:1, note:"Not strength-focused."},
    vol:  {suit:true, eff:4, note:"Trains multiple intensities in one session."},
    end:  {suit:true, eff:5, note:"Builds the ability to hold pace under fatigue."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [60, 78],
    youtube: null,
    targets: [
      { label: "5 km", type: "distance", note: "Novice — 6:30→5:30 /km" },
      { label: "8 km", type: "distance", note: "Intermediate — 6:00→5:00 /km" },
      { label: "12 km", type: "distance", note: "Advanced — 5:30→4:30 /km" },
      { label: "16 km", type: "distance", note: "Elite — 5:00→4:00 /km" }
    ],
    goalposts: [
      { tier: "Novice", distance: "5 km", pace: "6:30→5:30 /km", diff: 4 },
      { tier: "Intermediate", distance: "8 km", pace: "6:00→5:00 /km", diff: 5 },
      { tier: "Advanced", distance: "12 km", pace: "5:30→4:30 /km", diff: 7 },
      { tier: "Elite", distance: "16 km", pace: "5:00→4:00 /km", diff: 8 }
    ]
  },
  {
    id: 6,
    name: "Fartlek Run", alt: "Speed-play run",
    desc: "Unstructured speed variation woven into a continuous run — surge to a lamppost, ease off, repeat. A playful, low-pressure introduction to speed work.",
    cues: "Surges by feel, not a watch. Effort should range from easy to hard and back, recovering fully between pushes.",
    equipment: "Running shoes",
    position: "Speed introduction · Variety session",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Hip Flexors",p:false}],
    tags: ["running","fartlek","speed","intermediate"],
    diff: 4,
    str:  {suit:false, eff:1, note:"Minimal."},
    vol:  {suit:true, eff:4, note:"Mixes intensities for varied stimulus."},
    end:  {suit:true, eff:4, note:"Improves pace versatility and lactate buffering."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [60, 80],
    youtube: null,
    targets: [
      { label: "20 min", type: "time", note: "Novice — 6×30s surges" },
      { label: "30 min", type: "time", note: "Intermediate — 8×1min surges" },
      { label: "40 min", type: "time", note: "Advanced — 10×2min surges" }
    ],
    goalposts: [
      { tier: "Novice", distance: "20 min", pace: "6×30s surges", diff: 3 },
      { tier: "Intermediate", distance: "30 min", pace: "8×1min surges", diff: 5 },
      { tier: "Advanced", distance: "40 min", pace: "10×2min surges", diff: 6 }
    ]
  },
  {
    id: 7,
    name: "Tempo Run", alt: "Lactate threshold run",
    desc: "Sustained 'comfortably hard' effort at lactate threshold — speaking is hard but possible in short bursts. Raises the pace you can hold before fatigue.",
    cues: "3-4 word bursts of speech max. Pace discipline — don't fade. Hips tall, arms drive back not across.",
    equipment: "Running shoes",
    position: "Speed day · Midweek quality session",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Glutes",p:false},{n:"Core",p:false}],
    tags: ["running","tempo","threshold"],
    diff: 6,
    str:  {suit:false, eff:1, note:"Not strength-focused."},
    vol:  {suit:true, eff:4, note:"High stimulus at race-relevant pace."},
    end:  {suit:true, eff:5, note:"Directly raises lactate threshold."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [60, 78],
    youtube: null,
    targets: [
      { label: "3 km", type: "distance", note: "Novice — 5:30 /km" },
      { label: "5 km", type: "distance", note: "Intermediate — 5:00 /km" },
      { label: "8 km", type: "distance", note: "Advanced — 4:30 /km" },
      { label: "10 km", type: "distance", note: "Elite — 4:00 /km" }
    ],
    goalposts: [
      { tier: "Novice", distance: "3 km", pace: "5:30 /km", diff: 4 },
      { tier: "Intermediate", distance: "5 km", pace: "5:00 /km", diff: 6 },
      { tier: "Advanced", distance: "8 km", pace: "4:30 /km", diff: 7 },
      { tier: "Elite", distance: "10 km", pace: "4:00 /km", diff: 9 }
    ]
  },
  {
    id: 8,
    name: "Threshold Intervals", alt: "Cruise intervals",
    desc: "Tempo-pace running broken into repeats (e.g. 3×1.6km) with short rest, rather than one continuous block. Allows more total threshold volume than a continuous tempo run.",
    cues: "Rest is short (60-90s) — just enough to reset form, not fully recover. Each rep at the same controlled threshold pace.",
    equipment: "Running shoes · Track or measured road",
    position: "Speed/quality day",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Hip Flexors",p:false}],
    tags: ["running","threshold","intervals","intermediate"],
    diff: 6,
    str:  {suit:false, eff:1, note:"Not strength-focused."},
    vol:  {suit:true, eff:5, note:"More threshold volume tolerated than continuous tempo."},
    end:  {suit:true, eff:5, note:"Strong lactate threshold stimulus."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [62, 80],
    youtube: null,
    targets: [
      { label: "1 km × 3", type: "reps", note: "Novice — 5:00 /km · 90s rest" },
      { label: "1.6 km × 3", type: "reps", note: "Intermediate — 4:45 /km · 90s rest" },
      { label: "1.6 km × 5", type: "reps", note: "Advanced — 4:30 /km · 60s rest" },
      { label: "3 km × 3", type: "reps", note: "Elite — 4:15 /km · 90s rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "1 km × 3", pace: "5:00 /km", diff: 5, note: "90s rest" },
      { tier: "Intermediate", distance: "1.6 km × 3", pace: "4:45 /km", diff: 6, note: "90s rest" },
      { tier: "Advanced", distance: "1.6 km × 5", pace: "4:30 /km", diff: 7, note: "60s rest" },
      { tier: "Elite", distance: "3 km × 3", pace: "4:15 /km", diff: 8, note: "90s rest" }
    ]
  },
  {
    id: 9,
    name: "Hill Repeats", alt: "Uphill strength-endurance reps",
    desc: "Repeated hard uphill efforts with a jog/walk recovery back down. Builds running-specific leg strength, power, and form under fatigue, with naturally lower impact than flat sprinting.",
    cues: "Drive knees up, pump arms, lean from the ankles not the waist. Effort-based, not pace-based — hard but controlled.",
    equipment: "Running shoes · Hill (4-8% grade)",
    position: "Strength-endurance day",
    muscles: [{n:"Quadriceps",p:true},{n:"Glutes",p:true},{n:"Calves",p:true},{n:"Hamstrings",p:false}],
    tags: ["running","hills","strength-endurance","intermediate"],
    diff: 6,
    str:  {suit:true, eff:3, note:"Real leg-strength stimulus from uphill resistance."},
    vol:  {suit:true, eff:4, note:"Moderate volume, high quality per rep."},
    end:  {suit:true, eff:5, note:"Builds power and running economy."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [75, 100],
    youtube: null,
    targets: [
      { label: "30 sec × 6", type: "reps", note: "Novice — hard uphill effort · jog down recovery" },
      { label: "60 sec × 6", type: "reps", note: "Intermediate — hard uphill effort · jog down recovery" },
      { label: "90 sec × 8", type: "reps", note: "Advanced — hard uphill effort · jog down recovery" },
      { label: "2 min × 8", type: "reps", note: "Elite — hard uphill effort · jog down recovery" }
    ],
    goalposts: [
      { tier: "Novice", distance: "30 sec × 6", pace: "hard uphill effort", diff: 5, note: "jog down recovery" },
      { tier: "Intermediate", distance: "60 sec × 6", pace: "hard uphill effort", diff: 6, note: "jog down recovery" },
      { tier: "Advanced", distance: "90 sec × 8", pace: "hard uphill effort", diff: 7, note: "jog down recovery" },
      { tier: "Elite", distance: "2 min × 8", pace: "hard uphill effort", diff: 9, note: "jog down recovery" }
    ]
  },
  {
    id: 10,
    name: "Hill Sprints", alt: "Max-effort short hill reps",
    desc: "All-out sprints up a short, steep hill (8-12 seconds). Builds raw power and sprint mechanics with a naturally lower hamstring-injury risk than flat sprinting due to the forward lean.",
    cues: "Maximum effort from the first step. Full recovery (walk back down + rest) between reps — quality over fatigue.",
    equipment: "Running shoes · Steep hill (8-15% grade)",
    position: "Power day — 1× per week max",
    muscles: [{n:"Quadriceps",p:true},{n:"Glutes",p:true},{n:"Calves",p:true},{n:"Hamstrings",p:true}],
    tags: ["running","hills","sprint","power","advanced"],
    diff: 7,
    str:  {suit:true, eff:4, note:"High power output develops explosive leg strength."},
    vol:  {suit:false, eff:2, note:"Low volume by design — maximal intensity."},
    end:  {suit:true, eff:3, note:"Anaerobic capacity and sprint speed."},
    risk: 4,
    joints: {ankle:4, knee:3, hip:3},
    mobility: 2,
    strength: 3,
    kcalPerRep: [90, 120],
    youtube: null,
    targets: [
      { label: "8 sec × 5", type: "reps", note: "Novice — max effort" },
      { label: "10 sec × 8", type: "reps", note: "Intermediate — max effort" },
      { label: "12 sec × 10", type: "reps", note: "Advanced — max effort" },
      { label: "15 sec × 12", type: "reps", note: "Elite — max effort" }
    ],
    goalposts: [
      { tier: "Novice", distance: "8 sec × 5", pace: "max effort", diff: 5 },
      { tier: "Intermediate", distance: "10 sec × 8", pace: "max effort", diff: 6 },
      { tier: "Advanced", distance: "12 sec × 10", pace: "max effort", diff: 7 },
      { tier: "Elite", distance: "15 sec × 12", pace: "max effort", diff: 8 }
    ]
  },
  {
    id: 11,
    name: "Track Intervals — Short", alt: "200-400m repeats",
    desc: "Short, fast repeats targeting speed and running economy. Faster than 5km race pace, with full recovery between reps to maintain quality.",
    cues: "Relaxed top-end speed, not a frantic sprint. Same split every rep — fading times mean the session is over.",
    equipment: "Running shoes · Track",
    position: "Speed day — 1× per week max",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Hip Flexors",p:true}],
    tags: ["running","intervals","speed","track"],
    diff: 6,
    str:  {suit:false, eff:2, note:"Neuromuscular demand at speed."},
    vol:  {suit:true, eff:4, note:"Develops speed reserve."},
    end:  {suit:true, eff:4, note:"Improves running economy at faster paces."},
    risk: 4,
    joints: {ankle:4, knee:3, hip:3},
    mobility: 2,
    strength: 2,
    kcalPerRep: [75, 95],
    youtube: null,
    targets: [
      { label: "200 m × 6", type: "reps", note: "Novice — 45 sec · 2min rest" },
      { label: "300 m × 6", type: "reps", note: "Intermediate — 65 sec · 2min rest" },
      { label: "400 m × 8", type: "reps", note: "Advanced — 80 sec · 90s rest" },
      { label: "400 m × 12", type: "reps", note: "Elite — 75 sec · 90s rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "200 m × 6", pace: "45 sec", diff: 4, note: "2min rest" },
      { tier: "Intermediate", distance: "300 m × 6", pace: "65 sec", diff: 5, note: "2min rest" },
      { tier: "Advanced", distance: "400 m × 8", pace: "80 sec", diff: 6, note: "90s rest" },
      { tier: "Elite", distance: "400 m × 12", pace: "75 sec", diff: 8, note: "90s rest" }
    ]
  },
  {
    id: 12,
    name: "Track Intervals — Mid", alt: "600-800m repeats",
    desc: "Mid-distance repeats sitting right around 5km race pace — the classic VO2max-building interval distance, demanding both speed and sustained effort.",
    cues: "First rep hard but controlled, last rep matches it. Full recovery between reps (jog/walk until HR < 65% max).",
    equipment: "Running shoes · Track",
    position: "Speed/quality day — 1× per week max",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Hip Flexors",p:true}],
    tags: ["running","intervals","vo2max","track"],
    diff: 7,
    str:  {suit:false, eff:2, note:"Some neuromuscular demand at high velocity."},
    vol:  {suit:true, eff:5, note:"Maximally elevates aerobic power."},
    end:  {suit:true, eff:5, note:"Targets VO2max — key for 5km to half marathon."},
    risk: 4,
    joints: {ankle:4, knee:4, hip:3},
    mobility: 2,
    strength: 2,
    kcalPerRep: [75, 95],
    youtube: null,
    targets: [
      { label: "600 m × 5", type: "reps", note: "Novice — 2:45 · 2min rest" },
      { label: "800 m × 5", type: "reps", note: "Intermediate — 3:30 · 2min rest" },
      { label: "800 m × 8", type: "reps", note: "Advanced — 3:15 · 2min rest" },
      { label: "800 m × 10", type: "reps", note: "Elite — 3:00 · 90s rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "600 m × 5", pace: "2:45", diff: 6, note: "2min rest" },
      { tier: "Intermediate", distance: "800 m × 5", pace: "3:30", diff: 7, note: "2min rest" },
      { tier: "Advanced", distance: "800 m × 8", pace: "3:15", diff: 8, note: "2min rest" },
      { tier: "Elite", distance: "800 m × 10", pace: "3:00", diff: 9, note: "90s rest" }
    ]
  },
  {
    id: 13,
    name: "Track Intervals — Long", alt: "1000-1600m repeats / mile repeats",
    desc: "Longer repeats run near 10km-to-threshold pace. Builds the durability to hold a hard pace over extended reps — bridges VO2max work and tempo running.",
    cues: "Even splits across all reps — avoid a fast first rep that wrecks the rest. Stroke rate of breathing should stay rhythmic, not ragged.",
    equipment: "Running shoes · Track",
    position: "Speed/quality day — 1× per week max",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Hip Flexors",p:false}],
    tags: ["running","intervals","threshold","track"],
    diff: 7,
    str:  {suit:false, eff:1, note:"Not strength-focused."},
    vol:  {suit:true, eff:5, note:"High threshold-adjacent volume."},
    end:  {suit:true, eff:5, note:"Builds sustained hard-pace durability."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [70, 90],
    youtube: null,
    targets: [
      { label: "1000 m × 4", type: "reps", note: "Novice — 4:15 · 2min rest" },
      { label: "1000 m × 6", type: "reps", note: "Intermediate — 4:00 · 2min rest" },
      { label: "1600 m (mile) × 4", type: "reps", note: "Advanced — 6:30 · 3min rest" },
      { label: "1600 m (mile) × 6", type: "reps", note: "Elite — 6:00 · 3min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "1000 m × 4", pace: "4:15", diff: 6, note: "2min rest" },
      { tier: "Intermediate", distance: "1000 m × 6", pace: "4:00", diff: 7, note: "2min rest" },
      { tier: "Advanced", distance: "1600 m (mile) × 4", pace: "6:30", diff: 7, note: "3min rest" },
      { tier: "Elite", distance: "1600 m (mile) × 6", pace: "6:00", diff: 9, note: "3min rest" }
    ]
  },
  {
    id: 14,
    name: "Strides", alt: "Accelerations / stride-outs",
    desc: "Short, relaxed accelerations to near-top speed, holding it briefly before easing off. Not a conditioning tool — purely for neuromuscular sharpness, form, and turnover.",
    cues: "Build gradually to ~85-90% effort over the first 20m, hold relaxed, ease down over the last 10m. Full recovery between reps.",
    equipment: "Running shoes · Flat 80-100m surface",
    position: "Pre-race activation · End of easy runs",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Hip Flexors",p:true}],
    tags: ["running","strides","speed","neuromuscular"],
    diff: 4,
    str:  {suit:false, eff:2, note:"Light neuromuscular activation."},
    vol:  {suit:false, eff:1, note:"Not a volume tool."},
    end:  {suit:false, eff:2, note:"Not primarily cardiovascular."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [80, 100],
    youtube: null,
    targets: [
      { label: "80 m × 4", type: "reps", note: "Novice — 85% effort" },
      { label: "100 m × 6", type: "reps", note: "Intermediate — 85-90% effort" },
      { label: "100 m × 8", type: "reps", note: "Advanced — 90% effort" }
    ],
    goalposts: [
      { tier: "Novice", distance: "80 m × 4", pace: "85% effort", diff: 3 },
      { tier: "Intermediate", distance: "100 m × 6", pace: "85-90% effort", diff: 4 },
      { tier: "Advanced", distance: "100 m × 8", pace: "90% effort", diff: 5 }
    ]
  },
  {
    id: 15,
    name: "Sprint", alt: "Flat-out 60-100m sprint",
    desc: "Maximal-velocity running over a short distance, targeting the phosphocreatine system. The purest expression of running speed and power.",
    cues: "Explosive drive phase for the first 20-30m, transition to tall upright sprint mechanics. Full 3-5min recovery between reps — true maximal effort only.",
    equipment: "Running shoes · Flat surface",
    position: "Power/speed day — 1× per week max",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Glutes",p:true},{n:"Calves",p:true}],
    tags: ["running","sprint","power","anaerobic","advanced"],
    diff: 6,
    str:  {suit:true, eff:3, note:"High-velocity force production builds power."},
    vol:  {suit:false, eff:2, note:"Intensity precludes volume by design."},
    end:  {suit:true, eff:2, note:"Minimal aerobic contribution — anaerobic dominant."},
    risk: 5,
    joints: {ankle:4, knee:4, hip:4},
    mobility: 2,
    strength: 3,
    kcalPerRep: [100, 130],
    youtube: null,
    targets: [
      { label: "60 m × 4", type: "reps", note: "Novice — max effort · 4min rest" },
      { label: "80 m × 6", type: "reps", note: "Intermediate — max effort · 4min rest" },
      { label: "100 m × 6", type: "reps", note: "Advanced — max effort · 5min rest" },
      { label: "100 m × 10", type: "reps", note: "Elite — max effort · 5min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "60 m × 4", pace: "max effort", diff: 5, note: "4min rest" },
      { tier: "Intermediate", distance: "80 m × 6", pace: "max effort", diff: 6, note: "4min rest" },
      { tier: "Advanced", distance: "100 m × 6", pace: "max effort", diff: 7, note: "5min rest" },
      { tier: "Elite", distance: "100 m × 10", pace: "max effort", diff: 9, note: "5min rest" }
    ]
  },
  {
    id: 16,
    name: "Long Run", alt: "Distance endurance run",
    desc: "Continuous run well beyond normal distance at easy-to-moderate effort. Builds glycogen storage, fat utilization, mental endurance, and musculoskeletal resilience.",
    cues: "Start 30-60s/km slower than easy pace, can finish slightly faster. Fuel every 45min on runs over 90min. Hydrate.",
    equipment: "Running shoes",
    position: "Weekly endurance anchor",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Glutes",p:true},{n:"Hip Flexors",p:false}],
    tags: ["running","endurance","long-run","aerobic"],
    diff: 5,
    str:  {suit:false, eff:1, note:"Not strength-focused."},
    vol:  {suit:true, eff:5, note:"Single biggest volume driver in a running program."},
    end:  {suit:true, eff:5, note:"Builds durability and fuel efficiency over distance."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 1,
    strength: 1,
    kcalPerRep: [55, 70],
    youtube: null,
    targets: [
      { label: "10 km", type: "distance", note: "Novice — 6:00 /km" },
      { label: "15 km", type: "distance", note: "Intermediate — 5:45 /km" },
      { label: "21 km", type: "distance", note: "Advanced — 5:15 /km · Half marathon" },
      { label: "32 km", type: "distance", note: "Elite — 5:00 /km" },
      { label: "42 km", type: "distance", note: "Ultra — 4:45 /km · Marathon" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 km", pace: "6:00 /km", diff: 4 },
      { tier: "Intermediate", distance: "15 km", pace: "5:45 /km", diff: 5 },
      { tier: "Advanced", distance: "21 km", pace: "5:15 /km", diff: 7, note: "Half marathon" },
      { tier: "Elite", distance: "32 km", pace: "5:00 /km", diff: 8 },
      { tier: "Ultra", distance: "42 km", pace: "4:45 /km", diff: 9, note: "Marathon" }
    ]
  },
  {
    id: 17,
    name: "Marathon Pace Run", alt: "Race-rehearsal run",
    desc: "A continuous block run at goal marathon pace, used to groove pacing, fueling, and the specific physiological demand of race effort.",
    cues: "Pace should feel 'comfortably moderate' — sustainable for hours, not just the rep distance. Practice race-day fueling during this run.",
    equipment: "Running shoes",
    position: "Race-specific preparation",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Glutes",p:false}],
    tags: ["running","marathon-pace","race-specific","advanced"],
    diff: 6,
    str:  {suit:false, eff:1, note:"Not strength-focused."},
    vol:  {suit:true, eff:5, note:"Race-specific volume at goal intensity."},
    end:  {suit:true, eff:5, note:"Trains fueling and pacing for race day."},
    risk: 3,
    joints: {ankle:3, knee:3, hip:2},
    mobility: 1,
    strength: 1,
    kcalPerRep: [58, 72],
    youtube: null,
    targets: [
      { label: "8 km", type: "distance", note: "Novice — 5:30 /km goal pace" },
      { label: "16 km", type: "distance", note: "Intermediate — 5:00 /km goal pace" },
      { label: "24 km", type: "distance", note: "Advanced — 4:40 /km goal pace" },
      { label: "32 km", type: "distance", note: "Elite — 4:20 /km goal pace" }
    ],
    goalposts: [
      { tier: "Novice", distance: "8 km", pace: "5:30 /km goal pace", diff: 5 },
      { tier: "Intermediate", distance: "16 km", pace: "5:00 /km goal pace", diff: 6 },
      { tier: "Advanced", distance: "24 km", pace: "4:40 /km goal pace", diff: 7 },
      { tier: "Elite", distance: "32 km", pace: "4:20 /km goal pace", diff: 8 }
    ]
  },
  {
    id: 18,
    name: "Time Trial Run", alt: "All-out distance test",
    desc: "A maximal-effort run over a fixed distance to benchmark current fitness. Mentally and physically demanding — true 'race effort' outside of competition.",
    cues: "Even or slightly negative split pacing. Mentally segment the distance into manageable chunks rather than thinking about the whole.",
    equipment: "Running shoes · Measured route or track",
    position: "Fitness benchmark · Periodic testing",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Hip Flexors",p:true}],
    tags: ["running","time-trial","race-effort","advanced"],
    diff: 7,
    str:  {suit:false, eff:1, note:"Not strength-focused."},
    vol:  {suit:false, eff:3, note:"Single hard effort, not a volume tool."},
    end:  {suit:true, eff:5, note:"Maximal test of current aerobic and lactate fitness."},
    risk: 4,
    joints: {ankle:4, knee:3, hip:3},
    mobility: 2,
    strength: 2,
    kcalPerRep: [65, 85],
    youtube: null,
    targets: [
      { label: "1 mile", type: "distance", note: "Novice — 7:00" },
      { label: "5 km", type: "distance", note: "Intermediate — 24:00" },
      { label: "10 km", type: "distance", note: "Advanced — 45:00" },
      { label: "21 km", type: "distance", note: "Elite — 1:35:00 · Half marathon TT" }
    ],
    goalposts: [
      { tier: "Novice", distance: "1 mile", pace: "7:00", diff: 5 },
      { tier: "Intermediate", distance: "5 km", pace: "24:00", diff: 7 },
      { tier: "Advanced", distance: "10 km", pace: "45:00", diff: 8 },
      { tier: "Elite", distance: "21 km", pace: "1:35:00", diff: 9, note: "Half marathon TT" }
    ]
  },
  {
    id: 19,
    name: "Trail Run", alt: "Off-road running",
    desc: "Running on unpaved, uneven, often hilly terrain. Lower impact per stride than road running but demands far more stabilizer engagement, balance, and adaptability.",
    cues: "Shorten stride on technical sections, eyes scanning a few meters ahead. Walk steep uphills if needed — it's normal even for experienced trail runners.",
    equipment: "Trail running shoes",
    position: "Outdoor endurance · Variable terrain",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Ankles",p:true},{n:"Core",p:false}],
    tags: ["running","trail","outdoor","endurance"],
    diff: 5,
    str:  {suit:true, eff:2, note:"Uneven terrain adds stabilizer and ankle demand."},
    vol:  {suit:true, eff:4, note:"Well-tolerated long volume due to softer surfaces."},
    end:  {suit:true, eff:5, note:"Strong, variable-intensity aerobic stimulus."},
    risk: 3,
    joints: {ankle:3, knee:2, hip:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [65, 90],
    youtube: null,
    targets: [
      { label: "5 km", type: "distance", note: "Novice — easy effort, rolling trail" },
      { label: "12 km", type: "distance", note: "Intermediate — moderate hills" },
      { label: "21 km", type: "distance", note: "Advanced — sustained elevation gain" },
      { label: "42+ km", type: "distance", note: "Elite — mountain ultra terrain" }
    ],
    goalposts: [
      { tier: "Novice", distance: "5 km", pace: "easy effort, rolling trail", diff: 4 },
      { tier: "Intermediate", distance: "12 km", pace: "moderate hills", diff: 5 },
      { tier: "Advanced", distance: "21 km", pace: "sustained elevation gain", diff: 7 },
      { tier: "Elite", distance: "42+ km", pace: "mountain ultra terrain", diff: 9 }
    ]
  },
  {
    id: 20,
    name: "Backward Running", alt: "Retro running",
    desc: "Running in reverse. Shifts load to the quads and shins, improves proprioception and balance, and is used as both a novelty conditioning tool and a rehab exercise for anterior knee pain.",
    cues: "Short controlled strides, land on the balls of the feet, look over your shoulder periodically. Use a clear, flat, obstacle-free space.",
    equipment: "Running shoes · Clear flat surface",
    position: "Rehab/prehab · Conditioning novelty",
    muscles: [{n:"Quadriceps",p:true},{n:"Shins",p:true},{n:"Calves",p:false},{n:"Hip Flexors",p:false}],
    tags: ["running","backward","rehab","novelty"],
    diff: 4,
    str:  {suit:true, eff:2, note:"Quad-dominant loading pattern, different from forward running."},
    vol:  {suit:false, eff:2, note:"Used in short bouts, not high volume."},
    end:  {suit:true, eff:3, note:"Cardio stimulus at lower speeds than forward running."},
    risk: 3,
    joints: {ankle:2, knee:2, hip:1},
    mobility: 2,
    strength: 2,
    kcalPerRep: [75, 95],
    youtube: null,
    targets: [
      { label: "200 m × 4", type: "reps", note: "Novice — slow controlled pace" },
      { label: "400 m × 4", type: "reps", note: "Intermediate — moderate pace" },
      { label: "800 m × 4", type: "reps", note: "Advanced — moderate-fast pace" }
    ],
    goalposts: [
      { tier: "Novice", distance: "200 m × 4", pace: "slow controlled pace", diff: 3 },
      { tier: "Intermediate", distance: "400 m × 4", pace: "moderate pace", diff: 4 },
      { tier: "Advanced", distance: "800 m × 4", pace: "moderate-fast pace", diff: 6 }
    ]
  }
];

/* ── CYCLING ──────────────────────────────────────────────── */
const cardioCycling = [
  {
    id: 101,
    name: "Leisure Ride", alt: "Casual cycling",
    desc: "Easy, unstructured riding at a relaxed pace. Genuinely low-impact and accessible cardio for anyone able to balance a bike.",
    cues: "Comfortable cadence (70-80 RPM), low resistance. Should never feel like training, just movement.",
    equipment: "Bicycle (any type)",
    position: "Entry-level cardio · Recreational",
    muscles: [{n:"Quadriceps",p:false},{n:"Hamstrings",p:false},{n:"Calves",p:false}],
    tags: ["cycling","beginner","leisure","low-impact"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:2, note:"Low-stimulus aerobic volume."},
    end:  {suit:true, eff:2, note:"Gentle cardiovascular activity."},
    risk: 1,
    joints: {knee:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [18, 25],
    youtube: null,
    targets: [
      { label: "5 km", type: "distance", note: "Beginner — 15 km/h" },
      { label: "10 km", type: "distance", note: "Novice — 18 km/h" },
      { label: "20 km", type: "distance", note: "Intermediate — 20 km/h" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "5 km", pace: "15 km/h", diff: 1 },
      { tier: "Novice", distance: "10 km", pace: "18 km/h", diff: 1 },
      { tier: "Intermediate", distance: "20 km", pace: "20 km/h", diff: 2 }
    ]
  },
  {
    id: 102,
    name: "Steady-State Ride", alt: "Zone 2 cycling",
    desc: "Sustained moderate aerobic cycling — equivalent to easy running but with far less joint impact. Top tool for aerobic base or cross-training.",
    cues: "Cadence 80-90 RPM. Spin faster at lower resistance rather than mashing heavy gears.",
    equipment: "Road bike / indoor trainer / stationary bike",
    position: "Aerobic base · Cross-training · Recovery",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Glutes",p:true},{n:"Calves",p:false},{n:"Hip Flexors",p:false}],
    tags: ["cycling","endurance","zone2","low-impact"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Minimal unless heavy resistance used."},
    vol:  {suit:true, eff:4, note:"Lower fatigue cost than running at equal effort."},
    end:  {suit:true, eff:5, note:"Top-tier aerobic development, low joint impact."},
    risk: 1,
    joints: {knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [25, 35],
    youtube: null,
    targets: [
      { label: "10 km", type: "distance", note: "Novice — 20 km/h" },
      { label: "20 km", type: "distance", note: "Intermediate — 25 km/h" },
      { label: "40 km", type: "distance", note: "Advanced — 28 km/h" },
      { label: "80 km", type: "distance", note: "Elite — 30 km/h" },
      { label: "100+ km", type: "distance", note: "Century — 32 km/h" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 km", pace: "20 km/h", diff: 1 },
      { tier: "Intermediate", distance: "20 km", pace: "25 km/h", diff: 3 },
      { tier: "Advanced", distance: "40 km", pace: "28 km/h", diff: 4 },
      { tier: "Elite", distance: "80 km", pace: "30 km/h", diff: 6 },
      { tier: "Century", distance: "100+ km", pace: "32 km/h", diff: 7 }
    ]
  },
  {
    id: 103,
    name: "Endurance Long Ride", alt: "Weekend base ride",
    desc: "Extended duration ride at low-moderate effort, the cycling equivalent of a long run. Builds fat-burning capacity, saddle endurance, and durability for long events.",
    cues: "Eat and drink consistently — don't wait until hungry/thirsty. Shift position regularly to manage saddle and back fatigue.",
    equipment: "Road bike / gravel bike",
    position: "Weekly endurance anchor",
    muscles: [{n:"Quadriceps",p:true},{n:"Glutes",p:true},{n:"Hamstrings",p:false},{n:"Lower Back",p:false}],
    tags: ["cycling","endurance","long-ride","aerobic"],
    diff: 4,
    str:  {suit:false, eff:1, note:"Not strength-focused."},
    vol:  {suit:true, eff:5, note:"Biggest volume driver for cyclists."},
    end:  {suit:true, eff:5, note:"Builds long-duration fat-burning capacity and durability."},
    risk: 2,
    joints: {knee:2, hip:1, lumbar:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [22, 32],
    youtube: null,
    targets: [
      { label: "40 km", type: "distance", note: "Novice — 24 km/h" },
      { label: "80 km", type: "distance", note: "Intermediate — 27 km/h" },
      { label: "120 km", type: "distance", note: "Advanced — 28 km/h" },
      { label: "160+ km", type: "distance", note: "Elite — 29 km/h" }
    ],
    goalposts: [
      { tier: "Novice", distance: "40 km", pace: "24 km/h", diff: 3 },
      { tier: "Intermediate", distance: "80 km", pace: "27 km/h", diff: 5 },
      { tier: "Advanced", distance: "120 km", pace: "28 km/h", diff: 7 },
      { tier: "Elite", distance: "160+ km", pace: "29 km/h", diff: 9 }
    ]
  },
  {
    id: 104,
    name: "Tempo Ride", alt: "Moderate-hard sustained ride",
    desc: "Sustained riding just below threshold — harder than zone 2, still repeatable for 30-90 minutes. Builds muscular endurance and the ability to hold a strong pace.",
    cues: "RPE 'comfortably hard', breathing noticeably elevated but rhythmic. Cadence 85-95 RPM.",
    equipment: "Road bike / indoor trainer",
    position: "Quality aerobic session",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Glutes",p:true},{n:"Calves",p:false}],
    tags: ["cycling","tempo","intermediate"],
    diff: 5,
    str:  {suit:false, eff:2, note:"Some muscular endurance demand."},
    vol:  {suit:true, eff:4, note:"Solid quality volume."},
    end:  {suit:true, eff:5, note:"Builds sustained-power capacity."},
    risk: 2,
    joints: {knee:2, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [28, 38],
    youtube: null,
    targets: [
      { label: "20 km", type: "distance", note: "Novice — 28 km/h" },
      { label: "40 km", type: "distance", note: "Intermediate — 30 km/h" },
      { label: "60 km", type: "distance", note: "Advanced — 32 km/h" }
    ],
    goalposts: [
      { tier: "Novice", distance: "20 km", pace: "28 km/h", diff: 4 },
      { tier: "Intermediate", distance: "40 km", pace: "30 km/h", diff: 5 },
      { tier: "Advanced", distance: "60 km", pace: "32 km/h", diff: 6 }
    ]
  },
  {
    id: 105,
    name: "Sweet Spot Ride", alt: "Sub-threshold / FTP-builder ride",
    desc: "Riding at 88-94% of functional threshold power — the 'sweet spot' that maximizes threshold-building adaptation per unit of fatigue, a staple of structured cycling training.",
    cues: "Stay just under threshold — sustainable for 20-60min blocks, not all-out. Use a power meter or HR if available for precision.",
    equipment: "Indoor trainer with power meter (or RPE-based outdoor)",
    position: "Structured threshold-building block",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Glutes",p:true},{n:"Calves",p:false}],
    tags: ["cycling","sweet-spot","threshold","intermediate"],
    diff: 6,
    str:  {suit:false, eff:2, note:"Some muscular endurance demand."},
    vol:  {suit:true, eff:4, note:"High-value threshold-adjacent volume."},
    end:  {suit:true, eff:5, note:"Efficiently raises FTP/threshold."},
    risk: 2,
    joints: {knee:2, hip:1},
    mobility: 1,
    strength: 2,
    kcalPerRep: [30, 42],
    youtube: null,
    targets: [
      { label: "2×10 min", type: "reps", note: "Novice — 88% FTP · 5min rest" },
      { label: "3×15 min", type: "reps", note: "Intermediate — 90% FTP · 5min rest" },
      { label: "3×20 min", type: "reps", note: "Advanced — 92% FTP · 5min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2×10 min", pace: "88% FTP", diff: 5, note: "5min rest" },
      { tier: "Intermediate", distance: "3×15 min", pace: "90% FTP", diff: 6, note: "5min rest" },
      { tier: "Advanced", distance: "3×20 min", pace: "92% FTP", diff: 7, note: "5min rest" }
    ]
  },
  {
    id: 106,
    name: "Cycling Hill Repeats", alt: "Climbing intervals",
    desc: "Repeated hard efforts up a climb, with a descent or flat recovery between reps. Builds climbing-specific strength and power on the bike.",
    cues: "Stay seated for steady power, stand briefly for steep sections or to change muscle recruitment. Even effort throughout each rep.",
    equipment: "Road bike · Hill / climb",
    position: "Strength-endurance day",
    muscles: [{n:"Quadriceps",p:true},{n:"Glutes",p:true},{n:"Hamstrings",p:false},{n:"Calves",p:false}],
    tags: ["cycling","hills","climbing","intermediate"],
    diff: 6,
    str:  {suit:true, eff:3, note:"Significant leg-strength demand under sustained load."},
    vol:  {suit:true, eff:4, note:"Moderate volume, high quality."},
    end:  {suit:true, eff:5, note:"Builds climbing power and threshold."},
    risk: 2,
    joints: {knee:2, hip:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [32, 45],
    youtube: null,
    targets: [
      { label: "3 min × 4", type: "reps", note: "Novice — hard climb effort · descend recovery" },
      { label: "5 min × 5", type: "reps", note: "Intermediate — hard climb effort · descend recovery" },
      { label: "8 min × 4", type: "reps", note: "Advanced — hard climb effort · descend recovery" }
    ],
    goalposts: [
      { tier: "Novice", distance: "3 min × 4", pace: "hard climb effort", diff: 5, note: "descend recovery" },
      { tier: "Intermediate", distance: "5 min × 5", pace: "hard climb effort", diff: 6, note: "descend recovery" },
      { tier: "Advanced", distance: "8 min × 4", pace: "hard climb effort", diff: 8, note: "descend recovery" }
    ]
  },
  {
    id: 107,
    name: "Cycling Intervals", alt: "VO2max / FTP intervals",
    desc: "High-intensity efforts alternating hard pushes with structured recovery — Norwegian 4x4, FTP tests, Tabata. Fastest way to build aerobic power without running's injury risk.",
    cues: "Cadence 90-100 RPM during efforts. Stay seated for max cardiovascular demand. Full cooldown after.",
    equipment: "Indoor trainer / stationary bike / spin bike",
    position: "Speed/quality day — limit 2× per week",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Glutes",p:true},{n:"Calves",p:false},{n:"Core",p:false}],
    tags: ["cycling","intervals","vo2max","speed"],
    diff: 7,
    str:  {suit:false, eff:2, note:"Neuromuscular demand at high power output."},
    vol:  {suit:true, eff:4, note:"High stimulus, manageable fatigue."},
    end:  {suit:true, eff:5, note:"Targets VO2max and lactate threshold on the bike."},
    risk: 2,
    joints: {knee:2, hip:1},
    mobility: 2,
    strength: 2,
    kcalPerRep: [30, 42],
    youtube: null,
    targets: [
      { label: "2 min × 4", type: "reps", note: "Novice — moderate effort" },
      { label: "4 min × 4", type: "reps", note: "Intermediate — VO2max effort · Norwegian 4×4" },
      { label: "20 min", type: "time", note: "Advanced — FTP effort · Threshold test" },
      { label: "20s/10s × 16", type: "reps", note: "Elite — max effort · Tabata, 8min" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2 min × 4", pace: "moderate effort", diff: 5 },
      { tier: "Intermediate", distance: "4 min × 4", pace: "VO2max effort", diff: 7, note: "Norwegian 4×4" },
      { tier: "Advanced", distance: "20 min", pace: "FTP effort", diff: 8, note: "Threshold test" },
      { tier: "Elite", distance: "20s/10s × 16", pace: "max effort", diff: 9, note: "Tabata, 8min" }
    ]
  },
  {
    id: 108,
    name: "Cadence Drills", alt: "Spin-ups",
    desc: "Short bursts of very high pedal cadence (110-130+ RPM) at low resistance. Trains neuromuscular coordination and pedaling efficiency rather than raw power.",
    cues: "Stay seated, hips should not bounce. Build cadence smoothly rather than jumping straight to max.",
    equipment: "Stationary bike / indoor trainer",
    position: "Technique work · Warm-up component",
    muscles: [{n:"Quadriceps",p:false},{n:"Hamstrings",p:false},{n:"Calves",p:false}],
    tags: ["cycling","cadence","technique","drill"],
    diff: 3,
    str:  {suit:false, eff:1, note:"Not a strength stimulus."},
    vol:  {suit:false, eff:2, note:"Short bouts, not a volume tool."},
    end:  {suit:true, eff:2, note:"Mild cardio stimulus."},
    risk: 1,
    joints: {knee:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [20, 28],
    youtube: null,
    targets: [
      { label: "30 sec × 6", type: "reps", note: "Novice — 100 RPM" },
      { label: "30 sec × 8", type: "reps", note: "Intermediate — 115 RPM" },
      { label: "45 sec × 8", type: "reps", note: "Advanced — 130 RPM" }
    ],
    goalposts: [
      { tier: "Novice", distance: "30 sec × 6", pace: "100 RPM", diff: 2 },
      { tier: "Intermediate", distance: "30 sec × 8", pace: "115 RPM", diff: 3 },
      { tier: "Advanced", distance: "45 sec × 8", pace: "130 RPM", diff: 4 }
    ]
  },
  {
    id: 109,
    name: "Sprint Cycling", alt: "Track sprint / standing sprint",
    desc: "All-out maximal effort for 8-30 seconds, targeting the phosphocreatine system. Peak power, fast-twitch recruitment, anaerobic capacity.",
    cues: "Standing position for max power. Build to peak speed in 2-3s, hold. Full 2-4min recovery between reps.",
    equipment: "Stationary bike / spin bike / road bike",
    position: "Power day — 1× per week",
    muscles: [{n:"Quadriceps",p:true},{n:"Glutes",p:true},{n:"Hamstrings",p:true},{n:"Calves",p:true},{n:"Core",p:false}],
    tags: ["cycling","sprint","power","anaerobic"],
    diff: 6,
    str:  {suit:true, eff:3, note:"High peak power develops leg strength and fast-twitch recruitment."},
    vol:  {suit:false, eff:2, note:"Intensity precludes volume by design."},
    end:  {suit:true, eff:3, note:"Anaerobic capacity and speed reserve."},
    risk: 2,
    joints: {knee:2, hip:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [35, 50],
    youtube: null,
    targets: [
      { label: "10s × 6", type: "reps", note: "Novice — max effort · 3min rest" },
      { label: "15s × 8", type: "reps", note: "Intermediate — max effort · 3min rest" },
      { label: "20s × 10", type: "reps", note: "Advanced — max effort · 3min rest" },
      { label: "30s × 10", type: "reps", note: "Elite — max effort · 4min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10s × 6", pace: "max effort", diff: 5, note: "3min rest" },
      { tier: "Intermediate", distance: "15s × 8", pace: "max effort", diff: 6, note: "3min rest" },
      { tier: "Advanced", distance: "20s × 10", pace: "max effort", diff: 7, note: "3min rest" },
      { tier: "Elite", distance: "30s × 10", pace: "max effort", diff: 8, note: "4min rest" }
    ]
  },
  {
    id: 110,
    name: "Cycling Time Trial", alt: "All-out distance/time test",
    desc: "A maximal sustained effort over a fixed distance or time, alone against the clock. The purest test of cycling fitness, blending power, pacing, and aerodynamics.",
    cues: "Even pacing — a fast start that fades wastes time overall. Stay aero and relaxed through the upper body.",
    equipment: "Road bike / TT bike · Measured route",
    position: "Fitness benchmark · Race effort",
    muscles: [{n:"Quadriceps",p:true},{n:"Hamstrings",p:true},{n:"Glutes",p:true},{n:"Core",p:true}],
    tags: ["cycling","time-trial","race-effort","advanced"],
    diff: 7,
    str:  {suit:true, eff:2, note:"Sustained high power output."},
    vol:  {suit:false, eff:3, note:"Single hard effort, not a volume tool."},
    end:  {suit:true, eff:5, note:"Maximal aerobic and threshold test."},
    risk: 2,
    joints: {knee:2, hip:2, lumbar:1},
    mobility: 1,
    strength: 2,
    kcalPerRep: [35, 48],
    youtube: null,
    targets: [
      { label: "10 km", type: "distance", note: "Novice — 30 km/h" },
      { label: "20 km", type: "distance", note: "Intermediate — 34 km/h" },
      { label: "40 km", type: "distance", note: "Advanced — 37 km/h" },
      { label: "40 km", type: "distance", note: "Elite — 42+ km/h" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 km", pace: "30 km/h", diff: 5 },
      { tier: "Intermediate", distance: "20 km", pace: "34 km/h", diff: 7 },
      { tier: "Advanced", distance: "40 km", pace: "37 km/h", diff: 8 },
      { tier: "Elite", distance: "40 km", pace: "42+ km/h", diff: 9 }
    ]
  },
  {
    id: 111,
    name: "Mountain Bike Trail Ride", alt: "Off-road technical riding",
    desc: "Riding on natural, technical, often hilly singletrack. Combines aerobic demand with constant power surges, core stabilization, and bike-handling skill.",
    cues: "Weight back and low on descents, stay loose through the arms to absorb terrain. Look ahead, not down, to pick the line.",
    equipment: "Mountain bike · Trail",
    position: "Outdoor variable-intensity cardio",
    muscles: [{n:"Quadriceps",p:true},{n:"Core",p:true},{n:"Forearms",p:true},{n:"Glutes",p:false}],
    tags: ["cycling","mountain-bike","trail","outdoor"],
    diff: 6,
    str:  {suit:true, eff:3, note:"Significant core and grip endurance demand."},
    vol:  {suit:true, eff:4, note:"Good volume with high engagement."},
    end:  {suit:true, eff:5, note:"Variable-intensity aerobic and anaerobic stimulus."},
    risk: 4,
    joints: {knee:2, hip:1, wrist:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [35, 55],
    youtube: null,
    targets: [
      { label: "10 km", type: "distance", note: "Novice — easy flowing trail" },
      { label: "20 km", type: "distance", note: "Intermediate — moderate technical trail" },
      { label: "35 km", type: "distance", note: "Advanced — technical/hilly trail" },
      { label: "60+ km", type: "distance", note: "Elite — endurance MTB race terrain" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 km", pace: "easy flowing trail", diff: 4 },
      { tier: "Intermediate", distance: "20 km", pace: "moderate technical trail", diff: 6 },
      { tier: "Advanced", distance: "35 km", pace: "technical/hilly trail", diff: 8 },
      { tier: "Elite", distance: "60+ km", pace: "endurance MTB race terrain", diff: 9 }
    ]
  },
  {
    id: 112,
    name: "Recovery Spin", alt: "Easy spin / active rest",
    desc: "Very light cycling at minimal resistance and low heart rate. Promotes circulation to fatigued muscles without adding training load.",
    cues: "Resistance should feel like pedaling through air. Cadence 80-90 RPM. Should feel restorative, not demanding.",
    equipment: "Stationary bike / road bike",
    position: "Day after heavy training · Active rest day",
    muscles: [{n:"Quadriceps",p:false},{n:"Hamstrings",p:false},{n:"Calves",p:false}],
    tags: ["cycling","recovery","easy","active-rest"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:2, note:"Movement without meaningful training load."},
    end:  {suit:true, eff:2, note:"Maintains aerobic function while allowing recovery."},
    risk: 1,
    joints: {knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [18, 25],
    youtube: null,
    targets: [
      { label: "10 km", type: "distance", note: "Novice — <120bpm" },
      { label: "20 km", type: "distance", note: "Intermediate — <120bpm" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 km", pace: "<120bpm", diff: 1 },
      { tier: "Intermediate", distance: "20 km", pace: "<120bpm", diff: 1 }
    ]
  }
];

/* ── ROWING ──────────────────────────────────────────────── */
const cardioRowing = [
  {
    id: 301,
    name: "Recovery Row", alt: "Easy active-rest row",
    desc: "Very light rowing at low stroke rate and heart rate. Promotes blood flow to fatigued muscles without adding fatigue.",
    cues: "Light pressure on the drive, focus purely on smooth technique. Should feel easy throughout.",
    equipment: "Rowing ergometer",
    position: "Active recovery · Day after heavy training",
    muscles: [{n:"Legs",p:false},{n:"Back",p:false},{n:"Core",p:false}],
    tags: ["rowing","recovery","easy","active-rest"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:2, note:"Movement without meaningful training load."},
    end:  {suit:true, eff:2, note:"Maintains aerobic function while allowing recovery."},
    risk: 1,
    joints: {lumbar:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [35, 45],
    youtube: null,
    targets: [
      { label: "1.5 km", type: "distance", note: "Novice — 2:45 /500m" },
      { label: "3 km", type: "distance", note: "Intermediate — 2:40 /500m" }
    ],
    goalposts: [
      { tier: "Novice", distance: "1.5 km", pace: "2:45 /500m", diff: 1 },
      { tier: "Intermediate", distance: "3 km", pace: "2:40 /500m", diff: 2 }
    ]
  },
  {
    id: 302,
    name: "Steady-State Row", alt: "Zone 2 ergometer rowing",
    desc: "Sustained rowing at conversational pace, 18-22 strokes/min. Engages ~86% of muscle mass — exceptional aerobic tool without running's impact.",
    cues: "Sequence: legs → back → arms on drive, arms → back → legs on return. ~1:2 drive-to-recovery ratio.",
    equipment: "Rowing ergometer",
    position: "Aerobic base · Cross-training",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Arms",p:false},{n:"Glutes",p:false}],
    tags: ["rowing","endurance","zone2","full-body"],
    diff: 3,
    str:  {suit:true, eff:2, note:"Some back/leg engagement but primarily cardiovascular."},
    vol:  {suit:true, eff:5, note:"High aerobic volume with lower systemic fatigue than running."},
    end:  {suit:true, eff:5, note:"Exceptional aerobic and muscular endurance across the whole body."},
    risk: 2,
    joints: {lumbar:2, knee:1, shoulder:1},
    mobility: 2,
    strength: 1,
    kcalPerRep: [45, 60],
    youtube: null,
    targets: [
      { label: "2 km", type: "distance", note: "Novice — 2:30 /500m" },
      { label: "5 km", type: "distance", note: "Intermediate — 2:15 /500m" },
      { label: "10 km", type: "distance", note: "Advanced — 2:05 /500m" },
      { label: "21 km", type: "distance", note: "Elite — 2:00 /500m · Half marathon row" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2 km", pace: "2:30 /500m", diff: 2 },
      { tier: "Intermediate", distance: "5 km", pace: "2:15 /500m", diff: 3 },
      { tier: "Advanced", distance: "10 km", pace: "2:05 /500m", diff: 5 },
      { tier: "Elite", distance: "21 km", pace: "2:00 /500m", diff: 7, note: "Half marathon row" }
    ]
  },
  {
    id: 303,
    name: "Tempo Row", alt: "Moderate-hard sustained row",
    desc: "Sustained rowing harder than zone 2 but below threshold — builds the muscular and aerobic capacity to hold a strong split for extended periods.",
    cues: "Hold a split you could repeat for 30-40min. Stroke rate 22-26 s/min, controlled and consistent.",
    equipment: "Rowing ergometer",
    position: "Quality aerobic session",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Arms",p:false}],
    tags: ["rowing","tempo","intermediate"],
    diff: 5,
    str:  {suit:true, eff:3, note:"Sustained power output builds muscular endurance."},
    vol:  {suit:true, eff:4, note:"Solid quality volume."},
    end:  {suit:true, eff:5, note:"Builds sustained-effort capacity."},
    risk: 2,
    joints: {lumbar:2, knee:1, shoulder:1},
    mobility: 2,
    strength: 2,
    kcalPerRep: [50, 68],
    youtube: null,
    targets: [
      { label: "3 km", type: "distance", note: "Novice — 2:10 /500m" },
      { label: "5 km", type: "distance", note: "Intermediate — 2:05 /500m" },
      { label: "8 km", type: "distance", note: "Advanced — 2:00 /500m" }
    ],
    goalposts: [
      { tier: "Novice", distance: "3 km", pace: "2:10 /500m", diff: 4 },
      { tier: "Intermediate", distance: "5 km", pace: "2:05 /500m", diff: 5 },
      { tier: "Advanced", distance: "8 km", pace: "2:00 /500m", diff: 6 }
    ]
  },
  {
    id: 304,
    name: "Sweet Spot Row", alt: "Sub-threshold row",
    desc: "Rowing at a split just below threshold for extended blocks — efficiently builds threshold power with manageable fatigue, mirroring sweet-spot cycling.",
    cues: "Split should be sustainable for the full block without major fade. Stroke rate 24-28 s/min.",
    equipment: "Rowing ergometer",
    position: "Structured threshold-building block",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Arms",p:false}],
    tags: ["rowing","sweet-spot","threshold","intermediate"],
    diff: 6,
    str:  {suit:true, eff:3, note:"Sustained power output near threshold."},
    vol:  {suit:true, eff:4, note:"High-value threshold-adjacent volume."},
    end:  {suit:true, eff:5, note:"Efficiently raises threshold split."},
    risk: 2,
    joints: {lumbar:2, knee:1, shoulder:1},
    mobility: 2,
    strength: 2,
    kcalPerRep: [55, 72],
    youtube: null,
    targets: [
      { label: "2×10 min", type: "reps", note: "Novice — 2:05 /500m · 5min rest" },
      { label: "3×15 min", type: "reps", note: "Intermediate — 2:00 /500m · 5min rest" },
      { label: "3×20 min", type: "reps", note: "Advanced — 1:55 /500m · 5min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2×10 min", pace: "2:05 /500m", diff: 5, note: "5min rest" },
      { tier: "Intermediate", distance: "3×15 min", pace: "2:00 /500m", diff: 6, note: "5min rest" },
      { tier: "Advanced", distance: "3×20 min", pace: "1:55 /500m", diff: 7, note: "5min rest" }
    ]
  },
  {
    id: 305,
    name: "Row Intervals", alt: "500m / 1000m rowing repeats",
    desc: "Structured high-intensity intervals faster than race pace — 8x500m, 5x1000m, 4x2000m. Develops VO2max, lactate threshold and technique under fatigue.",
    cues: "Legs drive first — ~60% of power. Keep back angle consistent under fatigue. Splits even across all reps.",
    equipment: "Rowing ergometer · Performance monitor",
    position: "Speed/quality day — limit 2× per week",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Biceps",p:false},{n:"Shoulders",p:false}],
    tags: ["rowing","intervals","vo2max"],
    diff: 7,
    str:  {suit:true, eff:3, note:"Significant posterior chain and lat engagement at high power."},
    vol:  {suit:true, eff:4, note:"High aerobic and muscular stimulus."},
    end:  {suit:true, eff:5, note:"Raises lactate threshold and VO2max for rowing performance."},
    risk: 3,
    joints: {lumbar:3, knee:2, shoulder:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [55, 75],
    youtube: null,
    targets: [
      { label: "500 m × 4", type: "reps", note: "Novice — 2:10 /500m · 2min rest" },
      { label: "500 m × 8", type: "reps", note: "Intermediate — 2:00 /500m · 2min rest" },
      { label: "1000 m × 5", type: "reps", note: "Advanced — 1:55 /500m · 3min rest" },
      { label: "2000 m × 4", type: "reps", note: "Elite — 1:50 /500m · 4min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "500 m × 4", pace: "2:10 /500m", diff: 5, note: "2min rest" },
      { tier: "Intermediate", distance: "500 m × 8", pace: "2:00 /500m", diff: 7, note: "2min rest" },
      { tier: "Advanced", distance: "1000 m × 5", pace: "1:55 /500m", diff: 8, note: "3min rest" },
      { tier: "Elite", distance: "2000 m × 4", pace: "1:50 /500m", diff: 9, note: "4min rest" }
    ]
  },
  {
    id: 306,
    name: "Power Strokes", alt: "Strength-endurance row intervals",
    desc: "Short, very high-power strokes at low stroke rate (16-20 s/min) with heavy effort per pull. Builds raw pulling power and stroke-level strength rather than aerobic capacity.",
    cues: "Maximum force per stroke, deliberate slow recovery between strokes. Quality over speed — this is about power, not pace.",
    equipment: "Rowing ergometer (damper setting 7-10)",
    position: "Strength-endurance day",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Lats",p:true},{n:"Core",p:false}],
    tags: ["rowing","power","strength-endurance","intermediate"],
    diff: 5,
    str:  {suit:true, eff:4, note:"High per-stroke force builds posterior chain and pulling strength."},
    vol:  {suit:false, eff:2, note:"Low volume, high quality per stroke."},
    end:  {suit:true, eff:2, note:"Limited aerobic contribution at this stroke rate."},
    risk: 3,
    joints: {lumbar:3, knee:1, shoulder:2},
    mobility: 2,
    strength: 3,
    kcalPerRep: [50, 68],
    youtube: null,
    targets: [
      { label: "10 strokes × 4", type: "reps", note: "Novice — max power" },
      { label: "15 strokes × 5", type: "reps", note: "Intermediate — max power" },
      { label: "20 strokes × 6", type: "reps", note: "Advanced — max power" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 strokes × 4", pace: "max power", diff: 4 },
      { tier: "Intermediate", distance: "15 strokes × 5", pace: "max power", diff: 5 },
      { tier: "Advanced", distance: "20 strokes × 6", pace: "max power", diff: 7 }
    ]
  },
  {
    id: 307,
    name: "Rowing Sprint", alt: "Max-effort 100-500m row",
    desc: "All-out effort over 30-90 seconds, targeting phosphocreatine and glycolytic systems. Peak power and rate-of-force development.",
    cues: "Powerful first 10 strokes set the piece. Stroke rate 30-36 s/min. Full 3-5min recovery between sprints.",
    equipment: "Rowing ergometer",
    position: "Power day — 1× per week max",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Biceps",p:true},{n:"Glutes",p:false}],
    tags: ["rowing","sprint","power","anaerobic"],
    diff: 8,
    str:  {suit:true, eff:4, note:"Maximal power creates significant posterior chain strength stimulus."},
    vol:  {suit:false, eff:2, note:"Too intense for volume — quality over quantity."},
    end:  {suit:true, eff:3, note:"Anaerobic capacity and power reserve for longer pieces."},
    risk: 3,
    joints: {lumbar:3, knee:2, shoulder:3},
    mobility: 2,
    strength: 3,
    kcalPerRep: [70, 95],
    youtube: null,
    targets: [
      { label: "100 m × 4", type: "reps", note: "Novice — max effort · 3min rest" },
      { label: "250 m × 6", type: "reps", note: "Intermediate — max effort · 4min rest" },
      { label: "500 m × 4", type: "reps", note: "Advanced — max effort · 5min rest" },
      { label: "500 m × 6", type: "reps", note: "Elite — max effort · 5min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "100 m × 4", pace: "max effort", diff: 5, note: "3min rest" },
      { tier: "Intermediate", distance: "250 m × 6", pace: "max effort", diff: 7, note: "4min rest" },
      { tier: "Advanced", distance: "500 m × 4", pace: "max effort", diff: 8, note: "5min rest" },
      { tier: "Elite", distance: "500 m × 6", pace: "max effort", diff: 9, note: "5min rest" }
    ]
  },
  {
    id: 308,
    name: "Row Time Trial — 2k", alt: "The classic 2000m test",
    desc: "The benchmark rowing test — an all-out 2000m piece. Demands a rare blend of strength, power, and aerobic capacity sustained at near-max effort throughout.",
    cues: "Strong first 250m to settle into rhythm, even pace through the middle, empty the tank over the final 250m.",
    equipment: "Rowing ergometer · Performance monitor",
    position: "Fitness benchmark · Race effort",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Arms",p:true}],
    tags: ["rowing","time-trial","race-effort","advanced"],
    diff: 8,
    str:  {suit:true, eff:3, note:"Maximal sustained power output."},
    vol:  {suit:false, eff:3, note:"Single maximal effort, not a volume tool."},
    end:  {suit:true, eff:5, note:"The definitive rowing fitness test."},
    risk: 3,
    joints: {lumbar:3, knee:2, shoulder:2},
    mobility: 2,
    strength: 3,
    kcalPerRep: [65, 85],
    youtube: null,
    targets: [
      { label: "2000 m", type: "distance", note: "Novice — 2:10 /500m" },
      { label: "2000 m", type: "distance", note: "Intermediate — 1:55 /500m" },
      { label: "2000 m", type: "distance", note: "Advanced — 1:45 /500m" },
      { label: "2000 m", type: "distance", note: "Elite — 1:35 /500m" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2000 m", pace: "2:10 /500m", diff: 6 },
      { tier: "Intermediate", distance: "2000 m", pace: "1:55 /500m", diff: 8 },
      { tier: "Advanced", distance: "2000 m", pace: "1:45 /500m", diff: 9 },
      { tier: "Elite", distance: "2000 m", pace: "1:35 /500m", diff: 10 }
    ]
  },
  {
    id: 309,
    name: "Row Time Trial — Long", alt: "10k / Half Marathon row",
    desc: "An extended maximal-pacing test, demanding both lactate threshold fitness and the mental discipline to hold a hard, even split for an hour or more.",
    cues: "Conservative first kilometer — going out too hot ends the piece early. Settle into a split you can defend, not just survive.",
    equipment: "Rowing ergometer · Performance monitor",
    position: "Fitness benchmark · Endurance test",
    muscles: [{n:"Legs",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Arms",p:false}],
    tags: ["rowing","time-trial","endurance","advanced"],
    diff: 8,
    str:  {suit:true, eff:2, note:"Sustained moderate-high power output."},
    vol:  {suit:false, eff:3, note:"Single maximal effort, not a volume tool."},
    end:  {suit:true, eff:5, note:"Severe test of lactate threshold and endurance."},
    risk: 3,
    joints: {lumbar:3, knee:2, shoulder:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [55, 72],
    youtube: null,
    targets: [
      { label: "10 km", type: "distance", note: "Novice — 2:15 /500m" },
      { label: "10 km", type: "distance", note: "Intermediate — 2:05 /500m" },
      { label: "21 km", type: "distance", note: "Advanced — 2:05 /500m · Half marathon row" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 km", pace: "2:15 /500m", diff: 6 },
      { tier: "Intermediate", distance: "10 km", pace: "2:05 /500m", diff: 7 },
      { tier: "Advanced", distance: "21 km", pace: "2:05 /500m", diff: 9, note: "Half marathon row" }
    ]
  }
];

/* ── SWIMMING ────────────────────────────────────────────── */
const cardioSwimming = [
  {
    id: 401,
    name: "Aqua Jogging", alt: "Water walking / deep-water running",
    desc: "Running motion performed in water (often with a flotation belt), with zero impact on joints. The gold standard for rehab cardio or for very overweight/deconditioned individuals.",
    cues: "Maintain upright posture, drive knees forward as if running. Use a flotation belt in deep water to remove all impact.",
    equipment: "Swimming pool · Flotation belt (deep water) or shallow end",
    position: "Rehab cardio · Joint-limited / overweight-friendly entry point",
    muscles: [{n:"Hip Flexors",p:false},{n:"Quadriceps",p:false},{n:"Core",p:false}],
    tags: ["swimming","aqua-jog","rehab","beginner","low-impact"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:2, note:"Gentle volume tool for very deconditioned individuals."},
    end:  {suit:true, eff:3, note:"Real cardio stimulus with zero joint loading."},
    risk: 1,
    joints: {},
    mobility: 1,
    strength: 1,
    kcalPerRep: [8, 12],
    youtube: null,
    targets: [
      { label: "10 min", type: "time", note: "Beginner — easy effort" },
      { label: "20 min", type: "time", note: "Novice — easy-moderate effort" },
      { label: "30 min", type: "time", note: "Intermediate — moderate effort" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "10 min", pace: "easy effort", diff: 1 },
      { tier: "Novice", distance: "20 min", pace: "easy-moderate effort", diff: 1 },
      { tier: "Intermediate", distance: "30 min", pace: "moderate effort", diff: 2 }
    ]
  },
  {
    id: 402,
    name: "Recovery Swim", alt: "Leisure swimming / hydrotherapy",
    desc: "Low-intensity swimming on rest days or after hard training. Buoyancy eliminates joint compression, providing gentle engagement and circulation without fatigue.",
    cues: "Effort should feel effortless. Focus on smooth, relaxed technique rather than pace or distance.",
    equipment: "Swimming pool · Swimwear · Goggles",
    position: "Active recovery · Joint pain management",
    muscles: [{n:"Shoulders",p:false},{n:"Back",p:false},{n:"Core",p:false},{n:"Legs",p:false}],
    tags: ["recovery","swimming","low-impact","active-rest"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Not meaningful at recovery intensity."},
    vol:  {suit:true, eff:2, note:"Gentle movement without training load."},
    end:  {suit:true, eff:2, note:"Maintains aerobic function without adding fatigue."},
    risk: 1,
    joints: {},
    mobility: 1,
    strength: 1,
    kcalPerRep: [28, 38],
    youtube: null,
    targets: [
      { label: "500 m", type: "distance", note: "Novice — easy effort" },
      { label: "1 km", type: "distance", note: "Intermediate — easy effort" }
    ],
    goalposts: [
      { tier: "Novice", distance: "500 m", pace: "easy effort", diff: 1 },
      { tier: "Intermediate", distance: "1 km", pace: "easy effort", diff: 2 }
    ]
  },
  {
    id: 403,
    name: "Steady Swim", alt: "Zone 2 / continuous freestyle",
    desc: "Continuous freestyle swimming at aerobic effort. Buoyancy removes joint compression — exceptional for athletes carrying joint soreness.",
    cues: "Effort should feel sustainable, not breathless. Smooth technique over speed. Bilateral breathing helps balance.",
    equipment: "Swimming pool · Swimwear · Goggles",
    position: "Aerobic base · Cross-training",
    muscles: [{n:"Shoulders",p:true},{n:"Back",p:true},{n:"Core",p:false},{n:"Legs",p:false}],
    tags: ["swimming","endurance","zone2","low-impact"],
    diff: 3,
    str:  {suit:true, eff:2, note:"Shoulder/back endurance stimulus at higher volumes."},
    vol:  {suit:true, eff:4, note:"Full-body aerobic volume with zero joint loading."},
    end:  {suit:true, eff:5, note:"Top-tier non-impact aerobic conditioning."},
    risk: 1,
    joints: {shoulder:1},
    mobility: 2,
    strength: 1,
    kcalPerRep: [35, 50],
    youtube: null,
    targets: [
      { label: "500 m", type: "distance", note: "Beginner — 2:30 /100m" },
      { label: "1 km", type: "distance", note: "Novice — 2:15 /100m" },
      { label: "2 km", type: "distance", note: "Intermediate — 2:00 /100m" },
      { label: "3 km", type: "distance", note: "Advanced — 1:50 /100m" },
      { label: "5 km", type: "distance", note: "Elite — 1:40 /100m" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "500 m", pace: "2:30 /100m", diff: 1 },
      { tier: "Novice", distance: "1 km", pace: "2:15 /100m", diff: 3 },
      { tier: "Intermediate", distance: "2 km", pace: "2:00 /100m", diff: 4 },
      { tier: "Advanced", distance: "3 km", pace: "1:50 /100m", diff: 6 },
      { tier: "Elite", distance: "5 km", pace: "1:40 /100m", diff: 8 }
    ]
  },
  {
    id: 404,
    name: "Swim Intervals", alt: "Repeat sets",
    desc: "Structured sets of repeats (e.g. 10x100m) with short rest, swum faster than continuous pace. Builds swim-specific aerobic power and pacing control.",
    cues: "Hold a consistent split across all reps. Push off the wall powerfully on each repeat.",
    equipment: "Swimming pool · Pace clock",
    position: "Speed/quality session",
    muscles: [{n:"Shoulders",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Legs",p:false}],
    tags: ["swimming","intervals","speed","intermediate"],
    diff: 6,
    str:  {suit:true, eff:3, note:"Higher-velocity strokes increase upper-body demand."},
    vol:  {suit:true, eff:4, note:"High aerobic and technical stimulus."},
    end:  {suit:true, eff:5, note:"Raises swim-specific lactate threshold."},
    risk: 2,
    joints: {shoulder:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [42, 58],
    youtube: null,
    targets: [
      { label: "50 m × 8", type: "reps", note: "Novice — 1:10 · 20s rest" },
      { label: "100 m × 10", type: "reps", note: "Intermediate — 1:50 · 20s rest" },
      { label: "200 m × 6", type: "reps", note: "Advanced — 3:20 · 30s rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "50 m × 8", pace: "1:10", diff: 4, note: "20s rest" },
      { tier: "Intermediate", distance: "100 m × 10", pace: "1:50", diff: 6, note: "20s rest" },
      { tier: "Advanced", distance: "200 m × 6", pace: "3:20", diff: 7, note: "30s rest" }
    ]
  },
  {
    id: 405,
    name: "Backstroke Continuous", alt: "Sustained back crawl",
    desc: "Continuous swimming on the back. Lower breathing restriction than freestyle but demands strong core/hip stabilization to maintain a straight line.",
    cues: "Keep hips up near the surface, rotate from the core rather than just the arms.",
    equipment: "Swimming pool",
    position: "Aerobic base · Stroke variety",
    muscles: [{n:"Shoulders",p:true},{n:"Lats",p:true},{n:"Core",p:true},{n:"Legs",p:false}],
    tags: ["swimming","backstroke","endurance","intermediate"],
    diff: 4,
    str:  {suit:true, eff:2, note:"Core and lat stabilization demand."},
    vol:  {suit:true, eff:4, note:"Good aerobic volume, lower shoulder-impingement risk than freestyle."},
    end:  {suit:true, eff:4, note:"Solid non-impact aerobic stimulus."},
    risk: 1,
    joints: {shoulder:1},
    mobility: 2,
    strength: 1,
    kcalPerRep: [35, 50],
    youtube: null,
    targets: [
      { label: "400 m", type: "distance", note: "Novice — 2:30 /100m" },
      { label: "800 m", type: "distance", note: "Intermediate — 2:15 /100m" },
      { label: "1.5 km", type: "distance", note: "Advanced — 2:00 /100m" }
    ],
    goalposts: [
      { tier: "Novice", distance: "400 m", pace: "2:30 /100m", diff: 3 },
      { tier: "Intermediate", distance: "800 m", pace: "2:15 /100m", diff: 4 },
      { tier: "Advanced", distance: "1.5 km", pace: "2:00 /100m", diff: 6 }
    ]
  },
  {
    id: 406,
    name: "Breaststroke Continuous", alt: "Sustained breaststroke",
    desc: "Continuous breaststroke swimming. The slowest competitive stroke but with unique hip-adductor and chest demand, popular for recreational distance swimming.",
    cues: "Glide briefly after each pull before the next stroke cycle. Keep the kick narrow and whip-like, not a frog-kick lunge.",
    equipment: "Swimming pool",
    position: "Aerobic base · Stroke variety",
    muscles: [{n:"Chest",p:true},{n:"Hip Adductors",p:true},{n:"Core",p:false},{n:"Shoulders",p:false}],
    tags: ["swimming","breaststroke","endurance","beginner"],
    diff: 3,
    str:  {suit:true, eff:2, note:"Chest and hip-adductor demand from the kick."},
    vol:  {suit:true, eff:3, note:"Moderate volume tool — naturally lower pace than freestyle."},
    end:  {suit:true, eff:3, note:"Solid aerobic stimulus at a controlled pace."},
    risk: 2,
    joints: {knee:2, hip:1},
    mobility: 2,
    strength: 1,
    kcalPerRep: [40, 55],
    youtube: null,
    targets: [
      { label: "400 m", type: "distance", note: "Novice — 3:00 /100m" },
      { label: "800 m", type: "distance", note: "Intermediate — 2:45 /100m" },
      { label: "1.5 km", type: "distance", note: "Advanced — 2:30 /100m" }
    ],
    goalposts: [
      { tier: "Novice", distance: "400 m", pace: "3:00 /100m", diff: 2 },
      { tier: "Intermediate", distance: "800 m", pace: "2:45 /100m", diff: 3 },
      { tier: "Advanced", distance: "1.5 km", pace: "2:30 /100m", diff: 5 }
    ]
  },
  {
    id: 407,
    name: "Butterfly Intervals", alt: "Fly repeats",
    desc: "Short, high-intensity butterfly repeats. The most demanding swim stroke technically and metabolically — used in short bouts even by strong swimmers.",
    cues: "Undulate from the chest through the hips, two kicks per arm cycle. Breathe every 1-2 strokes to manage demand.",
    equipment: "Swimming pool",
    position: "Power/technique day — short bouts only",
    muscles: [{n:"Shoulders",p:true},{n:"Chest",p:true},{n:"Core",p:true},{n:"Lats",p:true}],
    tags: ["swimming","butterfly","power","advanced"],
    diff: 8,
    str:  {suit:true, eff:4, note:"Extremely high upper-body and core power demand."},
    vol:  {suit:false, eff:2, note:"Very short bouts due to intensity."},
    end:  {suit:true, eff:4, note:"Severe cardio demand even at short distances."},
    risk: 4,
    joints: {shoulder:4, lumbar:2},
    mobility: 3,
    strength: 3,
    kcalPerRep: [60, 85],
    youtube: null,
    targets: [
      { label: "25 m × 6", type: "reps", note: "Novice — controlled technique · 30s rest" },
      { label: "50 m × 6", type: "reps", note: "Intermediate — moderate-fast · 30s rest" },
      { label: "100 m × 4", type: "reps", note: "Advanced — fast sustained · 45s rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "25 m × 6", pace: "controlled technique", diff: 6, note: "30s rest" },
      { tier: "Intermediate", distance: "50 m × 6", pace: "moderate-fast", diff: 7, note: "30s rest" },
      { tier: "Advanced", distance: "100 m × 4", pace: "fast sustained", diff: 9, note: "45s rest" }
    ]
  },
  {
    id: 408,
    name: "Individual Medley Swim", alt: "IM — all four strokes",
    desc: "Continuous or interval swimming cycling through butterfly, backstroke, breaststroke, and freestyle. Demands full-body conditioning and technical versatility across all strokes.",
    cues: "Pace conservatively on the fly leg so the remaining strokes aren't compromised. Smooth transitions at each wall.",
    equipment: "Swimming pool",
    position: "Full-body technical conditioning",
    muscles: [{n:"Shoulders",p:true},{n:"Core",p:true},{n:"Legs",p:true},{n:"Lats",p:false}],
    tags: ["swimming","im","full-body","advanced"],
    diff: 7,
    str:  {suit:true, eff:3, note:"Engages every major swim-strength pattern."},
    vol:  {suit:true, eff:4, note:"Demanding full-body volume."},
    end:  {suit:true, eff:5, note:"Comprehensive aerobic and technical test."},
    risk: 3,
    joints: {shoulder:3, knee:1},
    mobility: 3,
    strength: 2,
    kcalPerRep: [50, 70],
    youtube: null,
    targets: [
      { label: "100 m IM × 4", type: "reps", note: "Novice — 2:30 · 30s rest" },
      { label: "200 m IM × 3", type: "reps", note: "Intermediate — 5:00 · 45s rest" },
      { label: "400 m IM", type: "distance", note: "Advanced — 10:30" }
    ],
    goalposts: [
      { tier: "Novice", distance: "100 m IM × 4", pace: "2:30", diff: 6, note: "30s rest" },
      { tier: "Intermediate", distance: "200 m IM × 3", pace: "5:00", diff: 7, note: "45s rest" },
      { tier: "Advanced", distance: "400 m IM", pace: "10:30", diff: 9 }
    ]
  },
  {
    id: 409,
    name: "Open Water Swim", alt: "Lake / sea / river swimming",
    desc: "Swimming outside a controlled pool environment — no walls, variable water conditions, and sighting demands. Adds navigation and adaptability to the standard aerobic stimulus.",
    cues: "Sight every 6-10 strokes by lifting eyes just above the surface. Stay aware of currents, temperature, and exit points.",
    equipment: "Open water · Wetsuit (cold water) · Safety buoy",
    position: "Outdoor endurance · Race-specific prep",
    muscles: [{n:"Shoulders",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Legs",p:false}],
    tags: ["swimming","open-water","outdoor","endurance"],
    diff: 6,
    str:  {suit:true, eff:2, note:"Standard swim demand plus added stabilization in moving water."},
    vol:  {suit:true, eff:4, note:"Good long-volume tolerance."},
    end:  {suit:true, eff:5, note:"Strong aerobic stimulus with environmental variability."},
    risk: 3,
    joints: {shoulder:1},
    mobility: 2,
    strength: 1,
    kcalPerRep: [40, 58],
    youtube: null,
    targets: [
      { label: "750 m", type: "distance", note: "Novice — calm water, wetsuit" },
      { label: "1.9 km", type: "distance", note: "Intermediate — moderate conditions · Half-Ironman distance" },
      { label: "3.8 km", type: "distance", note: "Advanced — variable conditions · Ironman distance" }
    ],
    goalposts: [
      { tier: "Novice", distance: "750 m", pace: "calm water, wetsuit", diff: 5 },
      { tier: "Intermediate", distance: "1.9 km", pace: "moderate conditions", diff: 7, note: "Half-Ironman distance" },
      { tier: "Advanced", distance: "3.8 km", pace: "variable conditions", diff: 9, note: "Ironman distance" }
    ]
  },
  {
    id: 410,
    name: "Swim Sprint", alt: "Max-effort 25-50m freestyle",
    desc: "All-out maximal-effort freestyle swimming over very short distances, targeting the phosphocreatine system. The pool equivalent of a track sprint — pure stroke speed and power.",
    cues: "Explosive push off the wall, hold near-max turnover for the full length. Full recovery between reps — true maximal effort only.",
    equipment: "Swimming pool · Pace clock",
    position: "Power/speed day — 1× per week max",
    muscles: [{n:"Shoulders",p:true},{n:"Lats",p:true},{n:"Core",p:true},{n:"Legs",p:false}],
    tags: ["swimming","sprint","power","anaerobic","advanced"],
    diff: 7,
    str:  {suit:true, eff:3, note:"High-velocity stroke production builds upper-body power."},
    vol:  {suit:false, eff:2, note:"Intensity precludes volume by design."},
    end:  {suit:true, eff:2, note:"Minimal aerobic contribution — anaerobic dominant."},
    risk: 2,
    joints: {shoulder:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [50, 70],
    youtube: null,
    targets: [
      { label: "25 m × 6", type: "reps", note: "Novice — max effort · 2min rest" },
      { label: "50 m × 8", type: "reps", note: "Intermediate — max effort · 3min rest" },
      { label: "50 m × 12", type: "reps", note: "Advanced — max effort · 3min rest" },
      { label: "100 m × 8", type: "reps", note: "Elite — max effort · 4min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "25 m × 6", pace: "max effort", diff: 5, note: "2min rest" },
      { tier: "Intermediate", distance: "50 m × 8", pace: "max effort", diff: 6, note: "3min rest" },
      { tier: "Advanced", distance: "50 m × 12", pace: "max effort", diff: 8, note: "3min rest" },
      { tier: "Elite", distance: "100 m × 8", pace: "max effort", diff: 9, note: "4min rest" }
    ]
  },
  {
    id: 411,
    name: "Swim Time Trial — 100m", alt: "All-out freestyle benchmark test",
    desc: "A maximal-effort 100m freestyle swim to benchmark current fitness — the pool equivalent of a time-trial run or a 2k row, blending speed, power, and pacing under fatigue.",
    cues: "Controlled, powerful first 25m to avoid early fade. Hold stroke rate and technique as the arms fatigue over the back half.",
    equipment: "Swimming pool · Pace clock",
    position: "Fitness benchmark · Periodic testing",
    muscles: [{n:"Shoulders",p:true},{n:"Back",p:true},{n:"Core",p:true},{n:"Legs",p:false}],
    tags: ["swimming","time-trial","race-effort","advanced"],
    diff: 7,
    str:  {suit:true, eff:2, note:"Maximal sustained stroke power."},
    vol:  {suit:false, eff:3, note:"Single maximal effort, not a volume tool."},
    end:  {suit:true, eff:4, note:"Combined speed-endurance test of swim fitness."},
    risk: 2,
    joints: {shoulder:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [45, 62],
    youtube: null,
    targets: [
      { label: "100 m", type: "distance", note: "Novice — 2:00" },
      { label: "100 m", type: "distance", note: "Intermediate — 1:40" },
      { label: "100 m", type: "distance", note: "Advanced — 1:15" },
      { label: "100 m", type: "distance", note: "Elite — 1:00" }
    ],
    goalposts: [
      { tier: "Novice", distance: "100 m", pace: "2:00", diff: 5 },
      { tier: "Intermediate", distance: "100 m", pace: "1:40", diff: 6 },
      { tier: "Advanced", distance: "100 m", pace: "1:15", diff: 8 },
      { tier: "Elite", distance: "100 m", pace: "1:00", diff: 9 }
    ]
  }
];

/* ── SKI ERG ─────────────────────────────────────────────── */
const cardioSkiErg = [
  {
    id: 601,
    name: "Steady-State Ski Erg", alt: "Zone 2 ski ergometer",
    desc: "Sustained double-poling motion on a ski ergometer, mimicking Nordic skiing. Full-body, low-impact aerobic work with heavy lat and core engagement.",
    cues: "Drive from the hips and lats, not just the arms. Maintain a consistent rhythm, ~ 1:1.5 pull-to-recovery ratio.",
    equipment: "Ski ergometer",
    position: "Aerobic base · Cross-training",
    muscles: [{n:"Lats",p:true},{n:"Core",p:true},{n:"Shoulders",p:false},{n:"Triceps",p:false}],
    tags: ["skierg","endurance","zone2","full-body"],
    diff: 3,
    str:  {suit:true, eff:2, note:"Lat and core engagement under continuous load."},
    vol:  {suit:true, eff:4, note:"Full-body aerobic volume, low impact."},
    end:  {suit:true, eff:5, note:"Strong non-impact aerobic stimulus."},
    risk: 1,
    joints: {shoulder:1, lumbar:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [40, 55],
    youtube: null,
    targets: [
      { label: "2 km", type: "distance", note: "Novice — 2:45 /500m" },
      { label: "5 km", type: "distance", note: "Intermediate — 2:30 /500m" },
      { label: "10 km", type: "distance", note: "Advanced — 2:15 /500m" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2 km", pace: "2:45 /500m", diff: 2 },
      { tier: "Intermediate", distance: "5 km", pace: "2:30 /500m", diff: 4 },
      { tier: "Advanced", distance: "10 km", pace: "2:15 /500m", diff: 6 }
    ]
  },
  {
    id: 602,
    name: "Ski Erg Intervals", alt: "VO2max ski ergometer intervals",
    desc: "High-intensity interval sets on the ski ergometer. Builds aerobic power with a unique full-body, low-impact loading pattern distinct from running or cycling.",
    cues: "Drive hard through the hips and core on each pull. Maintain pulling rhythm even as fatigue sets in.",
    equipment: "Ski ergometer",
    position: "Speed/quality day",
    muscles: [{n:"Lats",p:true},{n:"Core",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:false}],
    tags: ["skierg","intervals","vo2max"],
    diff: 7,
    str:  {suit:true, eff:3, note:"High-power pulls under fatigue build full-body strength-endurance."},
    vol:  {suit:true, eff:4, note:"High aerobic stimulus."},
    end:  {suit:true, eff:5, note:"Targets VO2max with a unique loading pattern."},
    risk: 2,
    joints: {shoulder:2, lumbar:2},
    mobility: 2,
    strength: 2,
    kcalPerRep: [48, 65],
    youtube: null,
    targets: [
      { label: "500 m × 4", type: "reps", note: "Novice — 2:25 /500m · 2min rest" },
      { label: "500 m × 8", type: "reps", note: "Intermediate — 2:10 /500m · 2min rest" },
      { label: "1000 m × 5", type: "reps", note: "Advanced — 2:00 /500m · 3min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "500 m × 4", pace: "2:25 /500m", diff: 5, note: "2min rest" },
      { tier: "Intermediate", distance: "500 m × 8", pace: "2:10 /500m", diff: 7, note: "2min rest" },
      { tier: "Advanced", distance: "1000 m × 5", pace: "2:00 /500m", diff: 8, note: "3min rest" }
    ]
  },
  {
    id: 603,
    name: "Ski Erg Sprint", alt: "Max-effort short ski erg piece",
    desc: "All-out short efforts on the ski ergometer. Tests upper-body and core power output at maximal intensity.",
    cues: "Explosive first 5 pulls, full body extension through the hips on every stroke. Full recovery between sprints.",
    equipment: "Ski ergometer",
    position: "Power day — 1× per week max",
    muscles: [{n:"Lats",p:true},{n:"Core",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:true}],
    tags: ["skierg","sprint","power","anaerobic"],
    diff: 8,
    str:  {suit:true, eff:4, note:"Maximal power output builds explosive lat/core strength."},
    vol:  {suit:false, eff:2, note:"Too intense for volume."},
    end:  {suit:true, eff:3, note:"Anaerobic capacity, unique upper-body loading."},
    risk: 2,
    joints: {shoulder:3, lumbar:2},
    mobility: 2,
    strength: 3,
    kcalPerRep: [60, 85],
    youtube: null,
    targets: [
      { label: "100 m × 4", type: "reps", note: "Novice — max effort · 3min rest" },
      { label: "250 m × 6", type: "reps", note: "Intermediate — max effort · 4min rest" },
      { label: "500 m × 4", type: "reps", note: "Advanced — max effort · 5min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "100 m × 4", pace: "max effort", diff: 6, note: "3min rest" },
      { tier: "Intermediate", distance: "250 m × 6", pace: "max effort", diff: 7, note: "4min rest" },
      { tier: "Advanced", distance: "500 m × 4", pace: "max effort", diff: 9, note: "5min rest" }
    ]
  },
  {
    id: 604,
    name: "Recovery Ski Erg", alt: "Easy active-rest ski erg",
    desc: "Very light double-poling at low rate and heart rate on the ski ergometer. Promotes blood flow to fatigued muscles without adding fatigue — the same role as a recovery row, with upper-body emphasis.",
    cues: "Light pressure on the pull, focus purely on smooth rhythm. Should feel easy throughout.",
    equipment: "Ski ergometer",
    position: "Active recovery · Day after heavy training",
    muscles: [{n:"Lats",p:false},{n:"Core",p:false},{n:"Shoulders",p:false}],
    tags: ["skierg","recovery","easy","active-rest"],
    diff: 1,
    str:  {suit:false, eff:1, note:"Negligible."},
    vol:  {suit:true, eff:2, note:"Movement without meaningful training load."},
    end:  {suit:true, eff:2, note:"Maintains aerobic function while allowing recovery."},
    risk: 1,
    joints: {shoulder:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [30, 40],
    youtube: null,
    targets: [
      { label: "1.5 km", type: "distance", note: "Novice — 2:55 /500m" },
      { label: "3 km", type: "distance", note: "Intermediate — 2:50 /500m" }
    ],
    goalposts: [
      { tier: "Novice", distance: "1.5 km", pace: "2:55 /500m", diff: 1 },
      { tier: "Intermediate", distance: "3 km", pace: "2:50 /500m", diff: 2 }
    ]
  },
  {
    id: 605,
    name: "Tempo Ski Erg", alt: "Moderate-hard sustained ski erg",
    desc: "Sustained double-poling harder than zone 2 but below threshold — builds the muscular and aerobic capacity to hold a strong split for extended periods, mirroring tempo rowing.",
    cues: "Hold a split you could repeat for 30-40min. Drive consistently from the hips through the lats.",
    equipment: "Ski ergometer",
    position: "Quality aerobic session",
    muscles: [{n:"Lats",p:true},{n:"Core",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:false}],
    tags: ["skierg","tempo","intermediate"],
    diff: 5,
    str:  {suit:true, eff:3, note:"Sustained power output builds full-body muscular endurance."},
    vol:  {suit:true, eff:4, note:"Solid quality volume."},
    end:  {suit:true, eff:5, note:"Builds sustained-effort capacity."},
    risk: 2,
    joints: {shoulder:2, lumbar:1},
    mobility: 2,
    strength: 2,
    kcalPerRep: [45, 62],
    youtube: null,
    targets: [
      { label: "3 km", type: "distance", note: "Novice — 2:25 /500m" },
      { label: "5 km", type: "distance", note: "Intermediate — 2:20 /500m" },
      { label: "8 km", type: "distance", note: "Advanced — 2:15 /500m" }
    ],
    goalposts: [
      { tier: "Novice", distance: "3 km", pace: "2:25 /500m", diff: 4 },
      { tier: "Intermediate", distance: "5 km", pace: "2:20 /500m", diff: 5 },
      { tier: "Advanced", distance: "8 km", pace: "2:15 /500m", diff: 6 }
    ]
  },
  {
    id: 606,
    name: "Sweet Spot Ski Erg", alt: "Sub-threshold ski erg",
    desc: "Double-poling at a split just below threshold for extended blocks — efficiently builds threshold power with manageable fatigue, mirroring sweet-spot rowing and cycling.",
    cues: "Split should be sustainable for the full block without major fade. Drive rate 24-28 pulls/min.",
    equipment: "Ski ergometer",
    position: "Structured threshold-building block",
    muscles: [{n:"Lats",p:true},{n:"Core",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:false}],
    tags: ["skierg","sweet-spot","threshold","intermediate"],
    diff: 6,
    str:  {suit:true, eff:3, note:"Sustained power output near threshold."},
    vol:  {suit:true, eff:4, note:"High-value threshold-adjacent volume."},
    end:  {suit:true, eff:5, note:"Efficiently raises threshold split."},
    risk: 2,
    joints: {shoulder:2, lumbar:1},
    mobility: 2,
    strength: 2,
    kcalPerRep: [50, 68],
    youtube: null,
    targets: [
      { label: "2×10 min", type: "reps", note: "Novice — 2:20 /500m · 5min rest" },
      { label: "3×15 min", type: "reps", note: "Intermediate — 2:15 /500m · 5min rest" },
      { label: "3×20 min", type: "reps", note: "Advanced — 2:10 /500m · 5min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2×10 min", pace: "2:20 /500m", diff: 5, note: "5min rest" },
      { tier: "Intermediate", distance: "3×15 min", pace: "2:15 /500m", diff: 6, note: "5min rest" },
      { tier: "Advanced", distance: "3×20 min", pace: "2:10 /500m", diff: 7, note: "5min rest" }
    ]
  },
  {
    id: 607,
    name: "Power Pulls", alt: "Strength-endurance ski erg intervals",
    desc: "Short, very high-power pulls at a low rate with heavy effort per stroke. Builds raw pulling power and full-body force production rather than aerobic capacity, mirroring power-stroke rowing.",
    cues: "Maximum force per pull, deliberate slow recovery between strokes. Quality over speed — this is about power, not pace.",
    equipment: "Ski ergometer (damper setting 7-10)",
    position: "Strength-endurance day",
    muscles: [{n:"Lats",p:true},{n:"Core",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:false}],
    tags: ["skierg","power","strength-endurance","intermediate"],
    diff: 5,
    str:  {suit:true, eff:4, note:"High per-pull force builds lat, core, and shoulder strength."},
    vol:  {suit:false, eff:2, note:"Low volume, high quality per pull."},
    end:  {suit:true, eff:2, note:"Limited aerobic contribution at this rate."},
    risk: 2,
    joints: {shoulder:3, lumbar:1},
    mobility: 2,
    strength: 3,
    kcalPerRep: [45, 62],
    youtube: null,
    targets: [
      { label: "10 pulls × 4", type: "reps", note: "Novice — max power" },
      { label: "15 pulls × 5", type: "reps", note: "Intermediate — max power" },
      { label: "20 pulls × 6", type: "reps", note: "Advanced — max power" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 pulls × 4", pace: "max power", diff: 4 },
      { tier: "Intermediate", distance: "15 pulls × 5", pace: "max power", diff: 5 },
      { tier: "Advanced", distance: "20 pulls × 6", pace: "max power", diff: 7 }
    ]
  },
  {
    id: 608,
    name: "Ski Erg Time Trial — 2k", alt: "The classic 2000m ski erg test",
    desc: "The benchmark ski-ergometer test — an all-out 2000m piece. Demands a blend of full-body strength, power, and aerobic capacity at near-max effort throughout, the SkiErg equivalent of the rowing 2k.",
    cues: "Strong first 250m to settle into rhythm, even pace through the middle, empty the tank over the final 250m.",
    equipment: "Ski ergometer · Performance monitor",
    position: "Fitness benchmark · Race effort",
    muscles: [{n:"Lats",p:true},{n:"Core",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:true}],
    tags: ["skierg","time-trial","race-effort","advanced"],
    diff: 8,
    str:  {suit:true, eff:3, note:"Maximal sustained power output."},
    vol:  {suit:false, eff:3, note:"Single maximal effort, not a volume tool."},
    end:  {suit:true, eff:5, note:"The definitive ski ergometer fitness test."},
    risk: 2,
    joints: {shoulder:3, lumbar:2},
    mobility: 2,
    strength: 3,
    kcalPerRep: [60, 80],
    youtube: null,
    targets: [
      { label: "2000 m", type: "distance", note: "Novice — 2:25 /500m" },
      { label: "2000 m", type: "distance", note: "Intermediate — 2:10 /500m" },
      { label: "2000 m", type: "distance", note: "Advanced — 1:55 /500m" }
    ],
    goalposts: [
      { tier: "Novice", distance: "2000 m", pace: "2:25 /500m", diff: 6 },
      { tier: "Intermediate", distance: "2000 m", pace: "2:10 /500m", diff: 8 },
      { tier: "Advanced", distance: "2000 m", pace: "1:55 /500m", diff: 9 }
    ]
  }
];

/* ── ELLIPTICAL ──────────────────────────────────────────── */
const cardioElliptical = [
  {
    id: 701,
    name: "Steady-State Elliptical", alt: "Zone 2 elliptical",
    desc: "Continuous low-impact cardio on an elliptical trainer. A strong option for individuals carrying extra weight or with joint issues, since the foot never leaves the pedal.",
    cues: "Stand tall, engage the handles lightly for arm involvement, avoid leaning heavily on them. Moderate resistance, smooth stride.",
    equipment: "Elliptical trainer",
    position: "Aerobic base · Joint-friendly entry point",
    muscles: [{n:"Quadriceps",p:true},{n:"Glutes",p:false},{n:"Hamstrings",p:false},{n:"Calves",p:false}],
    tags: ["elliptical","endurance","zone2","low-impact","beginner-friendly"],
    diff: 2,
    str:  {suit:false, eff:1, note:"Minimal unless resistance is high."},
    vol:  {suit:true, eff:4, note:"High-volume tolerance due to zero impact."},
    end:  {suit:true, eff:4, note:"Solid aerobic stimulus, very joint-friendly."},
    risk: 1,
    joints: {knee:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [40, 55],
    youtube: null,
    targets: [
      { label: "10 min", type: "time", note: "Beginner — easy effort" },
      { label: "20 min", type: "time", note: "Novice — moderate effort" },
      { label: "40 min", type: "time", note: "Intermediate — moderate effort" },
      { label: "60 min", type: "time", note: "Advanced — moderate-hard effort" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "10 min", pace: "easy effort", diff: 1 },
      { tier: "Novice", distance: "20 min", pace: "moderate effort", diff: 2 },
      { tier: "Intermediate", distance: "40 min", pace: "moderate effort", diff: 3 },
      { tier: "Advanced", distance: "60 min", pace: "moderate-hard effort", diff: 4 }
    ]
  },
  {
    id: 702,
    name: "Elliptical Intervals", alt: "High-intensity elliptical",
    desc: "Alternating hard pushes and recovery on the elliptical. Raises heart rate aggressively while remaining completely impact-free.",
    cues: "Increase resistance and stride speed together during work intervals. Maintain posture — don't collapse forward.",
    equipment: "Elliptical trainer",
    position: "Speed/quality day · Low-impact alternative to running intervals",
    muscles: [{n:"Quadriceps",p:true},{n:"Glutes",p:true},{n:"Hamstrings",p:false},{n:"Calves",p:false}],
    tags: ["elliptical","intervals","low-impact"],
    diff: 5,
    str:  {suit:false, eff:2, note:"Some demand at high resistance."},
    vol:  {suit:true, eff:4, note:"High stimulus with zero impact."},
    end:  {suit:true, eff:5, note:"Strong cardiovascular stimulus, joint-friendly alternative to running intervals."},
    risk: 1,
    joints: {knee:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [48, 65],
    youtube: null,
    targets: [
      { label: "1 min × 6", type: "reps", note: "Novice — hard effort · 1min easy" },
      { label: "2 min × 6", type: "reps", note: "Intermediate — hard effort · 1min easy" },
      { label: "3 min × 6", type: "reps", note: "Advanced — hard effort · 1min easy" }
    ],
    goalposts: [
      { tier: "Novice", distance: "1 min × 6", pace: "hard effort", diff: 4, note: "1min easy" },
      { tier: "Intermediate", distance: "2 min × 6", pace: "hard effort", diff: 5, note: "1min easy" },
      { tier: "Advanced", distance: "3 min × 6", pace: "hard effort", diff: 7, note: "1min easy" }
    ]
  },
  {
    id: 703,
    name: "Incline Elliptical Climb", alt: "Elliptical climbing mode",
    desc: "Elliptical use at maximum incline setting, simulating uphill climbing. Increases glute and hamstring recruitment significantly over flat elliptical use.",
    cues: "Keep weight through the whole foot, not just the toes. Resist gripping the handles for support — let the legs do the work.",
    equipment: "Elliptical trainer with incline",
    position: "Low-impact glute/hamstring-focused cardio",
    muscles: [{n:"Glutes",p:true},{n:"Hamstrings",p:true},{n:"Quadriceps",p:false},{n:"Calves",p:false}],
    tags: ["elliptical","incline","low-impact"],
    diff: 4,
    str:  {suit:true, eff:2, note:"Real glute/hamstring endurance demand at high incline."},
    vol:  {suit:true, eff:3, note:"Good calorie burn with zero impact."},
    end:  {suit:true, eff:4, note:"Strong stimulus without joint loading."},
    risk: 1,
    joints: {knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [55, 75],
    youtube: null,
    targets: [
      { label: "15 min", type: "time", note: "Novice — max incline, moderate pace" },
      { label: "25 min", type: "time", note: "Intermediate — max incline, moderate pace" },
      { label: "40 min", type: "time", note: "Advanced — max incline, brisk pace" }
    ],
    goalposts: [
      { tier: "Novice", distance: "15 min", pace: "max incline, moderate pace", diff: 3 },
      { tier: "Intermediate", distance: "25 min", pace: "max incline, moderate pace", diff: 4 },
      { tier: "Advanced", distance: "40 min", pace: "max incline, brisk pace", diff: 6 }
    ]
  }
];

/* ── STAIR CLIMBING ──────────────────────────────────────── */
const cardioStairs = [
  {
    id: 801,
    name: "Stair Machine Steady-State", alt: "StairMaster zone 2",
    desc: "Continuous stepping on a stair-climbing machine at moderate pace. Heavy glute and quad demand with low-impact, machine-controlled step height.",
    cues: "Don't lean on the handrails — stand tall and let the legs do the work. Full steps, not tiny shuffling steps.",
    equipment: "Stair-climbing machine (StairMaster or similar)",
    position: "Aerobic base · Glute-focused cardio",
    muscles: [{n:"Glutes",p:true},{n:"Quadriceps",p:true},{n:"Calves",p:false},{n:"Hamstrings",p:false}],
    tags: ["stairs","endurance","zone2","glute-focused"],
    diff: 3,
    str:  {suit:true, eff:2, note:"Continuous leg-press-like demand builds muscular endurance."},
    vol:  {suit:true, eff:4, note:"Good volume tolerance at moderate pace."},
    end:  {suit:true, eff:5, note:"Strong aerobic stimulus with added strength-endurance."},
    risk: 1,
    joints: {knee:1, hip:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [60, 80],
    youtube: null,
    targets: [
      { label: "10 min", type: "time", note: "Beginner — 60 steps/min" },
      { label: "20 min", type: "time", note: "Novice — 70 steps/min" },
      { label: "35 min", type: "time", note: "Intermediate — 80 steps/min" },
      { label: "50 min", type: "time", note: "Advanced — 90 steps/min" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "10 min", pace: "60 steps/min", diff: 2 },
      { tier: "Novice", distance: "20 min", pace: "70 steps/min", diff: 3 },
      { tier: "Intermediate", distance: "35 min", pace: "80 steps/min", diff: 5 },
      { tier: "Advanced", distance: "50 min", pace: "90 steps/min", diff: 6 }
    ]
  },
  {
    id: 802,
    name: "Stair Sprints", alt: "Real-stair sprint intervals",
    desc: "All-out sprinting up a real staircase. Builds explosive leg power and elevates heart rate extremely fast due to the vertical resistance.",
    cues: "Drive knees up, use the handrail for balance only, not pulling assistance. Walk back down to recover.",
    equipment: "Staircase (building, stadium, outdoor)",
    position: "Power day — 1× per week max",
    muscles: [{n:"Glutes",p:true},{n:"Quadriceps",p:true},{n:"Calves",p:true},{n:"Hamstrings",p:false}],
    tags: ["stairs","sprint","power","advanced"],
    diff: 7,
    str:  {suit:true, eff:4, note:"High vertical power output builds explosive leg strength."},
    vol:  {suit:false, eff:2, note:"High intensity precludes volume."},
    end:  {suit:true, eff:4, note:"Severe cardio demand in short bouts."},
    risk: 3,
    joints: {knee:3, ankle:2, hip:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [100, 140],
    youtube: null,
    targets: [
      { label: "1 flight × 6", type: "reps", note: "Novice — max effort · walk-down recovery" },
      { label: "2 flights × 8", type: "reps", note: "Intermediate — max effort · walk-down recovery" },
      { label: "4 flights × 10", type: "reps", note: "Advanced — max effort · walk-down recovery" }
    ],
    goalposts: [
      { tier: "Novice", distance: "1 flight × 6", pace: "max effort", diff: 5, note: "walk-down recovery" },
      { tier: "Intermediate", distance: "2 flights × 8", pace: "max effort", diff: 6, note: "walk-down recovery" },
      { tier: "Advanced", distance: "4 flights × 10", pace: "max effort", diff: 8, note: "walk-down recovery" }
    ]
  },
  {
    id: 803,
    name: "Tower Climb", alt: "Sustained building stair climb",
    desc: "Continuous climbing of a tall staircase (multi-story building, stadium) for extended duration or total floors. A demanding hybrid of leg strength-endurance and cardiovascular output, popularized by stair-climbing races.",
    cues: "Settle into a sustainable rhythm early — going out too hard on a long tower climb leads to a hard blow-up. Use the rail for rhythm, not pulling power.",
    equipment: "Multi-story staircase",
    position: "Endurance challenge · Race-specific prep",
    muscles: [{n:"Glutes",p:true},{n:"Quadriceps",p:true},{n:"Calves",p:true},{n:"Hamstrings",p:false}],
    tags: ["stairs","endurance","tower-climb","advanced"],
    diff: 7,
    str:  {suit:true, eff:3, note:"Sustained vertical leg-press demand."},
    vol:  {suit:true, eff:4, note:"High total volume in a single effort."},
    end:  {suit:true, eff:5, note:"Severe combined strength-endurance and cardio test."},
    risk: 3,
    joints: {knee:3, hip:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [90, 130],
    youtube: null,
    targets: [
      { label: "20 floors", type: "distance", note: "Novice — steady pace" },
      { label: "50 floors", type: "distance", note: "Intermediate — steady pace" },
      { label: "86 floors", type: "distance", note: "Advanced — steady pace · Empire State Building Run-Up distance" }
    ],
    goalposts: [
      { tier: "Novice", distance: "20 floors", pace: "steady pace", diff: 5 },
      { tier: "Intermediate", distance: "50 floors", pace: "steady pace", diff: 7 },
      { tier: "Advanced", distance: "86 floors", pace: "steady pace", diff: 9, note: "Empire State Building Run-Up distance" }
    ]
  }
];

/* ── AIR BIKE ────────────────────────────────────────────── */
const cardioAirBike = [
  {
    id: 1001,
    name: "Steady-State Air Bike", alt: "Zone 2 fan bike",
    desc: "Sustained combined arm-and-leg pedaling on a fan/air bike at conversational effort. Full-body engagement raises heart rate faster than regular cycling at the same perceived effort, with resistance that scales automatically with output.",
    cues: "Push and pull evenly through the arms while driving the legs — don't let one half coast. Smooth, even RPM rather than surging.",
    equipment: "Air bike / fan bike (Assault Bike, Echo Bike, AirDyne)",
    position: "Aerobic base · Cross-training",
    muscles: [{n:"Quadriceps",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:false},{n:"Core",p:false}],
    tags: ["airbike","fanbike","endurance","zone2","full-body"],
    diff: 3,
    str:  {suit:true, eff:2, note:"Combined arm/leg drive adds light full-body endurance demand."},
    vol:  {suit:true, eff:4, note:"Good aerobic volume, low joint impact."},
    end:  {suit:true, eff:5, note:"Strong full-body aerobic stimulus."},
    risk: 1,
    joints: {knee:1, shoulder:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [45, 62],
    youtube: null,
    targets: [
      { label: "10 min", type: "time", note: "Beginner — 8 cal/min" },
      { label: "15 min", type: "time", note: "Novice — 10 cal/min" },
      { label: "20 min", type: "time", note: "Intermediate — 12 cal/min" },
      { label: "30 min", type: "time", note: "Advanced — 14 cal/min" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "10 min", pace: "8 cal/min", diff: 2 },
      { tier: "Novice", distance: "15 min", pace: "10 cal/min", diff: 3 },
      { tier: "Intermediate", distance: "20 min", pace: "12 cal/min", diff: 5 },
      { tier: "Advanced", distance: "30 min", pace: "14 cal/min", diff: 6 }
    ]
  },
  {
    id: 1002,
    name: "Air Bike Intervals", alt: "Calorie-target interval rounds",
    desc: "Repeated hard efforts against a fixed time or calorie target with short rest — a CrossFit and conditioning staple. The fan's air resistance punishes any pacing mistake instantly, making this a brutal but efficient VO2max tool.",
    cues: "Settle into a strong, sustainable RPM rather than starting all-out. Drive through the legs first — the arms fatigue fast if overused early.",
    equipment: "Air bike / fan bike",
    position: "Speed/quality day",
    muscles: [{n:"Quadriceps",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:true},{n:"Core",p:false}],
    tags: ["airbike","fanbike","intervals","vo2max"],
    diff: 7,
    str:  {suit:true, eff:3, note:"High-output pushing/pulling under fatigue builds full-body strength-endurance."},
    vol:  {suit:true, eff:4, note:"High aerobic and anaerobic stimulus."},
    end:  {suit:true, eff:5, note:"Severe VO2max and lactate tolerance demand."},
    risk: 2,
    joints: {knee:2, shoulder:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [55, 75],
    youtube: null,
    targets: [
      { label: "10 cal × 6", type: "reps", note: "Novice — max effort · 90s rest" },
      { label: "15 cal × 8", type: "reps", note: "Intermediate — max effort · 75s rest" },
      { label: "20 cal × 10", type: "reps", note: "Advanced — max effort · 60s rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 cal × 6", pace: "max effort", diff: 5, note: "90s rest" },
      { tier: "Intermediate", distance: "15 cal × 8", pace: "max effort", diff: 7, note: "75s rest" },
      { tier: "Advanced", distance: "20 cal × 10", pace: "max effort", diff: 8, note: "60s rest" }
    ]
  },
  {
    id: 1003,
    name: "Air Bike Sprint", alt: "Max-effort short fan bike burst",
    desc: "All-out maximal effort for 10-20 seconds on the fan bike, targeting the phosphocreatine system. The air resistance ramps up instantly with effort, making this one of the most punishing short sprints available.",
    cues: "Explosive first 3-5 strokes to spin the fan up, then hold maximal RPM. Full 2-4min recovery between reps — true max effort only.",
    equipment: "Air bike / fan bike",
    position: "Power day — 1× per week max",
    muscles: [{n:"Quadriceps",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:true},{n:"Core",p:true}],
    tags: ["airbike","fanbike","sprint","power","anaerobic"],
    diff: 7,
    str:  {suit:true, eff:3, note:"High peak power output builds full-body explosive strength."},
    vol:  {suit:false, eff:2, note:"Intensity precludes volume by design."},
    end:  {suit:true, eff:3, note:"Severe anaerobic capacity demand in short bouts."},
    risk: 2,
    joints: {knee:2, shoulder:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [50, 68],
    youtube: null,
    targets: [
      { label: "10 sec × 6", type: "reps", note: "Novice — max effort · 3min rest" },
      { label: "15 sec × 8", type: "reps", note: "Intermediate — max effort · 3min rest" },
      { label: "20 sec × 10", type: "reps", note: "Advanced — max effort · 4min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 sec × 6", pace: "max effort", diff: 5, note: "3min rest" },
      { tier: "Intermediate", distance: "15 sec × 8", pace: "max effort", diff: 6, note: "3min rest" },
      { tier: "Advanced", distance: "20 sec × 10", pace: "max effort", diff: 8, note: "4min rest" }
    ]
  },
  {
    id: 1004,
    name: "Air Bike Time Trial", alt: "Max-calorie fixed-time test",
    desc: "An all-out push for maximum calories within a fixed window (commonly 1-4 minutes) — a brutal, well-known fan-bike benchmark that blends anaerobic power with the ability to suffer through rising air resistance.",
    cues: "Pace conservatively for the first 20% — going out too hard buries the legs before the window closes. Hold cadence, don't let it bleed away in the final third.",
    equipment: "Air bike / fan bike",
    position: "Fitness benchmark · Race effort",
    muscles: [{n:"Quadriceps",p:true},{n:"Shoulders",p:true},{n:"Triceps",p:true},{n:"Core",p:true}],
    tags: ["airbike","fanbike","time-trial","race-effort","advanced"],
    diff: 8,
    str:  {suit:true, eff:3, note:"Maximal sustained full-body power output."},
    vol:  {suit:false, eff:3, note:"Single maximal effort, not a volume tool."},
    end:  {suit:true, eff:5, note:"Severe combined aerobic/anaerobic fitness test."},
    risk: 2,
    joints: {knee:2, shoulder:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [65, 85],
    youtube: null,
    targets: [
      { label: "1 min", type: "time", note: "Novice — max calories, target 15+ cal" },
      { label: "2 min", type: "time", note: "Intermediate — max calories, target 35+ cal" },
      { label: "4 min", type: "time", note: "Advanced — max calories, target 65+ cal" }
    ],
    goalposts: [
      { tier: "Novice", distance: "1 min", pace: "max calories, target 15+ cal", diff: 6 },
      { tier: "Intermediate", distance: "2 min", pace: "max calories, target 35+ cal", diff: 7 },
      { tier: "Advanced", distance: "4 min", pace: "max calories, target 65+ cal", diff: 9 }
    ]
  }
];

/* ── JUMP ROPE ───────────────────────────────────────────── */
const cardioJumpRope = [
  {
    id: 1101,
    name: "Steady Jump Rope", alt: "Basic bounce / single-unders",
    desc: "Continuous basic single-under skipping at a controlled, sustainable rhythm. A genuine standalone cardio session, not just a warm-up tool — boxers and combat athletes build entire conditioning blocks around it.",
    cues: "Small jumps, just enough to clear the rope. Soft knees, wrists do the turning — not the shoulders. Stay relaxed and breathe rhythmically.",
    equipment: "Jump rope",
    position: "Aerobic base · Coordination/cardio combo",
    muscles: [{n:"Calves",p:true},{n:"Shoulders",p:false},{n:"Forearms",p:false},{n:"Core",p:false}],
    tags: ["jump-rope","skipping","endurance","zone2","coordination"],
    diff: 3,
    str:  {suit:false, eff:1, note:"Minimal at steady pace."},
    vol:  {suit:true, eff:4, note:"High aerobic volume tolerance once rhythm is established."},
    end:  {suit:true, eff:4, note:"Strong calf-driven aerobic stimulus."},
    risk: 2,
    joints: {ankle:2, knee:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [45, 60],
    youtube: null,
    targets: [
      { label: "3 min", type: "time", note: "Beginner — steady single-unders" },
      { label: "8 min", type: "time", note: "Novice — steady single-unders" },
      { label: "15 min", type: "time", note: "Intermediate — steady single-unders" },
      { label: "25 min", type: "time", note: "Advanced — steady single-unders" }
    ],
    goalposts: [
      { tier: "Beginner", distance: "3 min", pace: "steady single-unders", diff: 2 },
      { tier: "Novice", distance: "8 min", pace: "steady single-unders", diff: 3 },
      { tier: "Intermediate", distance: "15 min", pace: "steady single-unders", diff: 5 },
      { tier: "Advanced", distance: "25 min", pace: "steady single-unders", diff: 6 }
    ]
  },
  {
    id: 1102,
    name: "Jump Rope Intervals", alt: "Round-based rope conditioning",
    desc: "Faster-paced rope work broken into rounds with short rest — the classic boxing-gym format (e.g. 3min on/1min off). Builds rope-specific conditioning and footwork speed beyond steady bouncing.",
    cues: "Pick up the pace for the round, don't just extend duration. Stay light on the feet — quiet landings mean efficient technique.",
    equipment: "Jump rope · Timer",
    position: "Speed/quality day",
    muscles: [{n:"Calves",p:true},{n:"Shoulders",p:false},{n:"Forearms",p:true},{n:"Core",p:false}],
    tags: ["jump-rope","skipping","intervals","conditioning"],
    diff: 5,
    str:  {suit:false, eff:2, note:"Forearm and calf endurance under repeated rounds."},
    vol:  {suit:true, eff:4, note:"High-quality interval volume."},
    end:  {suit:true, eff:5, note:"Strong conditioning stimulus, boxing-style."},
    risk: 2,
    joints: {ankle:2, knee:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [55, 75],
    youtube: null,
    targets: [
      { label: "1 min × 6", type: "reps", note: "Novice — fast pace · 1min rest" },
      { label: "2 min × 6", type: "reps", note: "Intermediate — fast pace · 1min rest" },
      { label: "3 min × 8", type: "reps", note: "Advanced — fast pace · 1min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "1 min × 6", pace: "fast pace", diff: 4, note: "1min rest" },
      { tier: "Intermediate", distance: "2 min × 6", pace: "fast pace", diff: 6, note: "1min rest" },
      { tier: "Advanced", distance: "3 min × 8", pace: "fast pace", diff: 7, note: "1min rest" }
    ]
  },
  {
    id: 1103,
    name: "Double Unders", alt: "Rope passes twice per jump",
    desc: "An advanced rope skill where the rope passes under the feet twice per jump, requiring a higher, more powerful hop and faster wrist speed. A CrossFit staple that's as much a coordination test as a cardio one.",
    cues: "Jump slightly higher than single-unders, snap the wrists rather than swinging the whole arm. Land softly on the balls of the feet, knees slightly bent.",
    equipment: "Jump rope (speed rope recommended)",
    position: "Power/skill day",
    muscles: [{n:"Calves",p:true},{n:"Shoulders",p:false},{n:"Forearms",p:true},{n:"Core",p:false}],
    tags: ["jump-rope","double-unders","power","skill","advanced"],
    diff: 6,
    str:  {suit:true, eff:2, note:"Higher per-jump power output than single-unders."},
    vol:  {suit:false, eff:2, note:"Skill demand limits sustainable volume for most."},
    end:  {suit:true, eff:3, note:"Sharp anaerobic spikes in short unbroken sets."},
    risk: 2,
    joints: {ankle:2, knee:2},
    mobility: 1,
    strength: 2,
    kcalPerRep: [50, 68],
    youtube: null,
    targets: [
      { label: "10 unbroken × 4", type: "reps", note: "Novice — consistent rhythm" },
      { label: "25 unbroken × 4", type: "reps", note: "Intermediate — consistent rhythm" },
      { label: "50 unbroken × 4", type: "reps", note: "Advanced — consistent rhythm" }
    ],
    goalposts: [
      { tier: "Novice", distance: "10 unbroken × 4", pace: "consistent rhythm", diff: 4 },
      { tier: "Intermediate", distance: "25 unbroken × 4", pace: "consistent rhythm", diff: 6 },
      { tier: "Advanced", distance: "50 unbroken × 4", pace: "consistent rhythm", diff: 8 }
    ]
  },
  {
    id: 1104,
    name: "Jump Rope Sprint", alt: "Max-speed single-unders",
    desc: "Maximal turnover speed skipping for a short burst, targeting the phosphocreatine system and peak foot speed. The rope equivalent of a flat sprint.",
    cues: "Tiny, fast hops — barely leave the ground. Relax the shoulders and let the wrists drive rope speed. Full recovery between reps.",
    equipment: "Jump rope (speed rope recommended)",
    position: "Power/speed day — 1× per week max",
    muscles: [{n:"Calves",p:true},{n:"Forearms",p:true},{n:"Shoulders",p:false},{n:"Core",p:false}],
    tags: ["jump-rope","sprint","power","anaerobic"],
    diff: 6,
    str:  {suit:false, eff:2, note:"Neuromuscular demand at speed."},
    vol:  {suit:false, eff:2, note:"Intensity precludes volume by design."},
    end:  {suit:true, eff:3, note:"Anaerobic capacity and rope speed reserve."},
    risk: 2,
    joints: {ankle:2, knee:1},
    mobility: 1,
    strength: 1,
    kcalPerRep: [45, 60],
    youtube: null,
    targets: [
      { label: "15 sec × 6", type: "reps", note: "Novice — max speed · 2min rest" },
      { label: "20 sec × 8", type: "reps", note: "Intermediate — max speed · 2min rest" },
      { label: "30 sec × 10", type: "reps", note: "Advanced — max speed · 3min rest" }
    ],
    goalposts: [
      { tier: "Novice", distance: "15 sec × 6", pace: "max speed", diff: 4, note: "2min rest" },
      { tier: "Intermediate", distance: "20 sec × 8", pace: "max speed", diff: 5, note: "2min rest" },
      { tier: "Advanced", distance: "30 sec × 10", pace: "max speed", diff: 7, note: "3min rest" }
    ]
  }
];

/* ── AGGREGATE EXPORT (used by view nav buttons) ─────────── */
const cardioAllExercises = [
  ...cardioWalking,
  ...cardioRunning,
  ...cardioCycling,
  ...cardioRowing,
  ...cardioSwimming,
  ...cardioSkiErg,
  ...cardioElliptical,
  ...cardioStairs,
  ...cardioAirBike,
  ...cardioJumpRope
];
