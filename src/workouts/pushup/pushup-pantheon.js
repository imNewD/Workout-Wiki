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

/* pushup-pantheon.js — Pantheon workout definitions for the push-up library */

const pushupPantheonWorkouts = [];

pushupPantheonWorkouts.push(

// ─── PLANCHE PUSH-UP PROGRESSION ─────────────────────────────────────────────

{
  id: 900,
  name: "Tuck Planche Push-Up",
  pathNode: true,
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "power", "planche"],
  diff: 8.5,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3,
            knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 4,
  technique: 5,
  kcalPerRep: [0.35, 0.45],
  desc: "Push-up performed from and returning to a tuck planche hold — both feet off the floor, knees tucked to the chest, body horizontal. The press must happen without losing the tuck planche position or touching down with the feet. Requires a solid tuck planche hold as a prerequisite and replaces the eccentric phase with horizontal body weight rather than a diagonal lean, massively increasing anterior shoulder and wrist loading.",
  cues: "Establish a tuck planche hold with feet clear of the floor. Lower the chest toward the floor while keeping the tuck and the horizontal body position — the hips must not rise. Press back to the tuck planche. If the feet touch the floor, the hold was lost. Start with very short-ROM negatives from the hold before attempting full reps.",
  equipment: "None",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 901,
  name: "Tuck Planche Push-Up | (Parallettes)",
  sidequestKey: "Tuck Planche Push-Up",
  alt: null,
  pathNode: true,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "power", "planche"],
  diff: 8.2,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3,
            knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 4,
  technique: 5,
  kcalPerRep: [0.36, 0.46],
  desc: "Tuck planche push-up on parallettes — the preferred method for most athletes because the neutral wrist removes the extreme wrist extension stress of the floor tuck planche press. The elevated handles also allow the chest to drop below hand height, creating a larger ROM through the horizontal press. The wrist-safe gateway to planche push-up training.",
  cues: "Grip the parallettes and establish a tuck planche hold with neutral wrists. Lower the chest below handle height without dropping the feet. Press back to the hold. The parallettes make this significantly more accessible from a wrist-health standpoint — most athletes should train tuck planche push-ups on parallettes before the floor.",
  equipment: "Parallettes",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 902,
  name: "Tuck Planche Push-Up | (Rings)",
  sidequestKey: "Tuck Planche Push-Up",
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Serratus",  p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "serratus", "planche"],
  diff: 9.5,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 1, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3,
            knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 2, groin: 0, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 4,
  technique: 5,
  kcalPerRep: [0.40, 0.52],
  desc: "Tuck planche push-up on gymnastic rings — the hardest tuck planche press variant. Ring instability while horizontal in a tuck, pressing without feet, demands simultaneous planche-level shoulder strength and elite ring stabilisation skill. Directly feeds into the ring planche press progression.",
  cues: "Set rings at floor height and establish a ring tuck planche — already a major skill achievement. Lower and press while keeping the rings from swinging. Ring planche push-ups are the standard by which gymnastics horizontal pressing strength is ultimately judged.",
  equipment: "Rings",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 903,
  name: "Advanced Tuck Planche Push-Up",
  sidequestKey: "Tuck Planche Push-Up",
  pathNode: true,
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "power", "planche"],
  diff: 9.2,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3,
            knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 4,
  technique: 5,
  kcalPerRep: [0.38, 0.49],
  desc: "Planche push-up from an advanced tuck — hips higher, back flat, knees closer to full extension than the standard tuck. The reduced forward lean of the hips shifts more load to the pressing muscles and requires greater shoulder protraction strength. The direct bridge between tuck planche push-ups and the straddle planche press.",
  cues: "In the advanced tuck planche the back is flat (not rounded) and the knees are extended further than in the basic tuck. Press and lower while holding this more demanding position. The hips should not sag below horizontal or rise above it during the press.",
  equipment: "None",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 904,
  name: "Advanced Tuck Planche Push-Up | (Parallettes)",
  sidequestKey: "Advanced Tuck Planche Push-Up",
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "power", "planche"],
  diff: 9.0,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 4, shoulder: 5, neck: 1, lowerBack: 3,
            knee: 0, fingers: 0, thoracic: 3, si: 0, hip: 3, groin: 0, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 4,
  technique: 5,
  kcalPerRep: [0.39, 0.50],
  desc: "Advanced tuck planche push-up on parallettes, combining the increased horizontal load of the advanced tuck position with the wrist comfort and ROM advantage of elevated handles. The primary method for building toward the straddle planche press.",
  cues: "Grip parallettes with neutral wrists in an advanced tuck planche. The back is flat, knees extending further. Press and lower through the full handle depth. The flat-back advanced tuck on parallettes closely approaches the horizontal loading angle of the straddle — every rep here directly builds straddle planche pressing strength.",
  equipment: "Parallettes",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 905,
  name: "Straddle Planche Push-Up",
  pathNode: true,
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Hip Flexors", p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "hip flexors", "power", "planche"],
  diff: 10.5,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4,
            knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 3, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 5,
  technique: 5,
  kcalPerRep: [0.45, 0.58],
  desc: "Planche push-up performed with legs spread wide in a straddle — body fully horizontal, both feet completely off the floor, no wall or feet contact. The full bodyweight presses horizontally, which is mechanically far more demanding than any diagonal or pike pressing variant. Requires months to years of progressive planche training and is a milestone in advanced gymnastics and calisthenics. Achieving a straddle planche push-up for a clean single rep is a landmark in human horizontal pressing strength.",
  cues: "A solid straddle planche hold of at least 5 seconds is the prerequisite. Lower the chest toward the floor while maintaining the straddle and horizontal alignment — the hips must not drop or rise. Press back to the straddle planche. Each rep must be performed without any forward lean or foot touch. This takes years of dedicated planche training.",
  equipment: "None",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 906,
  name: "Straddle Planche Push-Up | (Parallettes)",
  sidequestKey: "Straddle Planche Push-Up",
  pathNode: true,
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Hip Flexors", p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "hip flexors", "power", "planche"],
  diff: 10.2,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4,
            knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 3, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 5,
  technique: 5,
  kcalPerRep: [0.46, 0.59],
  desc: "Straddle planche push-up on parallettes — the gold standard of planche pressing training. The neutral wrist eliminates the severe wrist extension loading of the floor straddle planche press and the extra ROM allows a deeper chest position at the bottom. Most serious calisthenics athletes work toward the straddle planche push-up exclusively on parallettes.",
  cues: "Establish a straddle planche hold on parallettes. Lower chest below handle height while maintaining full horizontal body alignment and straddle leg position. Press back to the hold. The depth below parallel on parallettes creates a more demanding range than the floor version. This is the final goal of most planche training journeys.",
  equipment: "Parallettes",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 907,
  name: "Straddle Planche Push-Up | (Rings)",
  sidequestKey: "Straddle Planche Push-Up",
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Serratus",  p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "serratus", "power", "planche"],
  diff: 11.5,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 1, elbow: 5, shoulder: 5, neck: 1, lowerBack: 4,
            knee: 0, fingers: 0, thoracic: 4, si: 0, hip: 4, groin: 3, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 5,
  technique: 5,
  kcalPerRep: [0.50, 0.64],
  desc: "Straddle planche push-up on gymnastic rings — pressing horizontally on free-hanging rings with legs in straddle and no wall contact. The ring instability on top of the maximal horizontal planche load makes this arguably the hardest ring skill achievable without also requiring handstand balance. Performed by a tiny handful of athletes globally.",
  cues: "A rock-solid ring tuck planche and straddle planche parallette press are prerequisites. Establish the ring straddle planche hold — itself an immense achievement — and lower while controlling ring drift in all three dimensions simultaneously. This is the apex of ring pushing skills.",
  equipment: "Rings",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 908,
  name: "Full Planche Push-Up",
  pathNode: true,
  hof: true,
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Hip Flexors", p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "hip flexors", "power", "planche"],
  diff: 11.0,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 5,
            knee: 0, fingers: 0, thoracic: 5, si: 1, hip: 5, groin: 2, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 5,
  technique: 5,
  kcalPerRep: [0.50, 0.65],
  desc: "Planche push-up performed with legs fully straight and together — the most demanding floor-based two-arm push-up that exists. The closed-leg full planche requires far greater hip-flexor and abdominal tension than the straddle to maintain a horizontal position with no outward leg leverage. A clean full planche push-up represents the apex of floor horizontal pressing ability and is achieved by a tiny fraction of calisthenics athletes worldwide after many years of training.",
  cues: "A straddle planche push-up must be secure before targeting the full planche press. Press straight legs together and maintain the body horizontal — the hips will want to drop as the leg spread disappears. Lower and press while bracing the entire posterior chain to hold the full horizontal position. One clean rep here represents years of focused training.",
  equipment: "None",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 909,
  name: "Full Planche Push-Up | (Parallettes)",
  sidequestKey: "Full Planche Push-Up",
  pathNode: true,
  hof: true,
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Hip Flexors", p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "hip flexors", "power", "planche"],
  diff: 10.8,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 2, elbow: 5, shoulder: 5, neck: 1, lowerBack: 5,
            knee: 0, fingers: 0, thoracic: 5, si: 1, hip: 5, groin: 2, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 5,
  technique: 5,
  kcalPerRep: [0.51, 0.66],
  desc: "Full planche push-up on parallettes — legs together, body fully horizontal, neutral wrist, pressing through the full handle-to-floor-level arc. The combination of elite horizontal pressing strength and wrist-comfortable parallette mechanics makes this the most commonly-seen full planche press variant in competition calisthenics.",
  cues: "All the same demands as the floor full planche press, but with the wrist relief and extra ROM of the parallettes. Lower the chest below handle height and press back, maintaining full leg extension and horizontal body. The gold medal of parallette pressing ability.",
  equipment: "Parallettes",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 910,
  name: "Full Planche Push-Up | (Rings)",
  sidequestKey: "Full Planche Push-Up",
  hof: true,
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Serratus",  p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "serratus", "power", "planche"],
  diff: 12.0,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 1, elbow: 5, shoulder: 5, neck: 1, lowerBack: 5,
            knee: 0, fingers: 0, thoracic: 5, si: 1, hip: 5, groin: 2, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 5,
  technique: 5,
  kcalPerRep: [0.56, 0.72],
  desc: "Full planche push-up on gymnastic rings — horizontal body, legs together, pressing on free-hanging rings. The most demanding push-up variant that can be codified. Ring instability on top of full planche horizontal loading requires an essentially perfect combination of strength, skill, and body control. Performed publicly by fewer than a handful of athletes in the world.",
  cues: "There is no coaching cue sequence that gets someone here; this is the product of years of rings training and planche specialisation converging. Maintain ring control in all axes while pressing from a full planche position. A legitimate world-class athletic achievement.",
  equipment: "Rings",
  position: "Prone",
  youtube: "LINK_TODO"
},

{
  id: 911,
  name: "One Arm Planche Push-Up",
  pathNode: true,
  hof: true,
  alt: null,
  muscles: [
    { n: "Chest",     p: true  },
    { n: "Shoulders", p: true  },
    { n: "Triceps",   p: true  },
    { n: "Core",      p: true  },
    { n: "Obliques",  p: true  },
    { n: "Hip Flexors", p: true  },
    { n: "Wrist Flexors", p: true  },
  ],
  tags: ["chest", "shoulders", "triceps", "core", "obliques", "power", "planche"],
  diff: 13.5,
  str:  { suit: true,  eff: 5 },
  vol:  { suit: false, eff: 1 },
  end:  { suit: false, eff: 1 },
  joints: { wrist: 5, elbow: 5, shoulder: 5, neck: 1, lowerBack: 5,
            knee: 0, fingers: 0, thoracic: 5, si: 3, hip: 5, groin: 3, ankle: 0, foot: 0 },
  strength: 5,
  mobility: 5,
  technique: 5,
  kcalPerRep: [0.65, 0.85],
  desc: "A single-arm planche push-up — the entire body horizontal, supported on one hand only, no feet contact, pressing through a full ROM. The anti-rotation demand of a one-arm hold in a fully horizontal planche position is essentially unsolvable without extraordinary oblique and core strength, combined with full planche pressing ability on that single arm. This is at the very frontier of human calisthenics strength. Only a mythically small number of athletes have ever achieved a clean single rep.",
  cues: "This is beyond a coaching cue — it is the result of mastering the full planche push-up, the one-arm push-up to expert level, and dedicated one-arm planche conditioning for years. Every component must be at elite level before this is even approachable. The anti-rotation demand alone is equivalent to a full body isometric oblique hold.",
  equipment: "None",
  position: "Prone",
  youtube: "LINK_TODO"
},

);
