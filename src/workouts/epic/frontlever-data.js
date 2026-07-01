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

/* cloneExercise is defined in data-registry.js (loaded before this file) */

/* ═══════════════════════════════════════════════════════════════════════════
 * STATIC HOLDS — BAR
 * Progression: Tuck → Advanced Tuck → One Leg → Straddle → Half Lay →
 *              Front Lever → grip variants → One Arm
 * position: "Supine"
 * ═══════════════════════════════════════════════════════════════════════════ */

const _flTuck = {
  id: 13,
  name: "Tuck FL | (Bar)",
  alt: "Tuck front lever hold · front lever tuck",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps",    p:false}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever"],
  diff: 5.3,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 2,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
  technique: 3,
  mobility: 2,
  strength: 3,
  kcalPerRep: [0.35, 0.48],
  desc: "A front lever with both knees tucked — hanging from a bar with the face pointing upward, hips at bar height, body approximately horizontal. The shortened lever makes this the entry point for front lever training. The lats and core work isometrically to resist the downward pull of gravity on the tucked body.",
  cues: "Hips must reach bar height — a sagging hip is a half-position, not a tuck front lever. Depress the scapulae and pull them together, activating the lats maximally. Straighten one leg and pull it back to parallel as a step toward the straddle.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flAdvancedTuck = {
  id: 14,
  name: "Advanced Tuck FL | (Bar)",
  alt: "Advanced tuck front lever · advanced tuck hold",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps",    p:false}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever"],
  diff: 6.9,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
  technique: 3,
  mobility: 2,
  strength: 4,
  kcalPerRep: [0.42, 0.56],
  desc: "A tuck front lever with the hips pushed back to roughly parallel with the torso, flattening the body closer to horizontal than the basic tuck. The knees remain bent but the hip angle opens significantly, increasing the effective lever arm and the demand on the lats and lower back.",
  cues: "Drive the hips back and up so the thighs approach parallel with the floor — if the knees are bunched under the hips the position is too compact. Keep the scapulae depressed and retracted. This is the bridge between the tuck and one-leg extensions.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flOneLeg = {
  id: 15,
  name: "One Leg FL | (Bar)",
  alt: "One leg front lever · single leg front lever hold",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps",    p:false}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever"],
  diff: 8.2,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
  technique: 4,
  mobility: 2,
  strength: 5,
  kcalPerRep: [0.50, 0.65],
  desc: "One leg is extended fully in line with the torso while the other remains tucked. The asymmetry demands more lat and core engagement to keep the hips level and the body horizontal. A natural midpoint between the advanced tuck and full straddle positions.",
  cues: "Keep the extended leg locked out and in line with the torso — not drifting down. The tucked knee should stay pulled toward the chest, not creeping toward the straddle. Hold the hips square; rotational drift indicates insufficient core tension.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flStraddle = {
  id: 16,
  name: "Straddle FL | (Bar)",
  alt: "Straddle front lever · straddle hold · wide leg front lever",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps",    p:false}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever"],
  diff: 8.3,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
  technique: 4,
  mobility: 3,
  strength: 5,
  kcalPerRep: [0.52, 0.67],
  desc: "Both legs are extended and spread wide apart, shortening the overall lever arm relative to a full front lever. The straddle width directly governs difficulty — a wider stance makes the hold easier; closing the legs increases demand. Hip flexor and adductor flexibility determines how far the straddle can open.",
  cues: "Spread the legs as wide as your flexibility allows to reduce the lever length. Keep the legs locked straight and toes pointed. Lower back must not collapse — maintain posterior pelvic tilt by bracing the abs and glutes hard.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flHalfLay = {
  id: 17,
  name: "Half Lay FL | (Bar)",
  alt: "Half lay front lever · pike front lever · bent knee front lever",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps",    p:false}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever"],
  diff: 9.2,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
  technique: 4,
  mobility: 2,
  strength: 6,
  kcalPerRep: [0.56, 0.72],
  desc: "Both legs are bent approximately 90° at the knees with the shins hanging vertically downward, so the flat of the feet faces toward the floor. The thighs remain horizontal and in line with the torso. This position sits between the straddle and full front lever in lever length and is a direct stepping-stone to the full hold.",
  cues: "Thighs must stay parallel to the floor — do not let them drop toward a pike. Keep the knees together and shins straight down. The body from hips to head should be horizontal; the bent shins are the only deviation from a full lever.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flFull = {
  id: 18,
  name: "Front Lever | (Bar)",
  alt: "Front lever hold · full front lever · front lever static",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps",    p:false},
    {n:"Glutes",    p:false}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever"],
  diff: 10.5,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 4,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
  technique: 5,
  mobility: 2,
  strength: 7,
  kcalPerRep: [0.60, 0.78],
  desc: "The complete front lever: the entire body is held horizontal and rigid in a supine orientation, arms straight overhead on the bar. The face points upward, ankles, hips, and shoulders all at the same height. The lats and core resist gravity acting along the full length of the body — the longest possible lever.",
  cues: "Push the bar away and down as you pull the scapulae into depression and retraction simultaneously. The body must be dead flat — no arch, no pike, no rotation. Squeeze the glutes and legs together tightly to keep the posterior chain engaged. Point the toes.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flWideGrip = {
  id: 19,
  name: "Wide Grip FL | (Bar)",
  alt: "Wide grip front lever · wide front lever hold",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Rear Delts", p:false},
    {n:"Biceps",    p:false}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever"],
  diff: 11.2,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 4,
  joints: {fingers:1, wrist:2, elbow:2, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
  technique: 5,
  mobility: 3,
  strength: 7,
  kcalPerRep: [0.64, 0.82],
  desc: "A full front lever performed with a grip significantly wider than shoulder width. The wider base shifts more load onto the horizontal abductors and rear delts while reducing the mechanical advantage of the lats. Shoulder joint stress increases substantially, making this a harder and higher-risk variant.",
  cues: "Do not go so wide that the shoulders are compromised — just outside shoulder-width is usually the limit for healthy training. Externally rotate the upper arms to protect the shoulder joint. Maintain the same depression and retraction cues as the standard front lever.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flCloseGrip = {
  id: 20,
  name: "Close Grip FL | (Bar)",
  alt: "Close grip front lever · narrow grip front lever",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps",    p:false},
    {n:"Triceps",   p:false}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever"],
  diff: 9.5,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:1, hip:4, groin:0, knee:1, ankle:0, foot:0},
  technique: 5,
  mobility: 2,
  strength: 6,
  kcalPerRep: [0.58, 0.75],
  desc: "A full front lever with the hands close together — typically touching or just a few centimetres apart. The narrow grip shifts load toward the triceps and reduces lat mechanical advantage, making it more technically demanding than it initially appears. Elbow stress increases. Often used as a technique drill or for variety.",
  cues: "Keep the elbows from flaring outward — the narrow grip wants to internally rotate the shoulders, so actively counter this with external rotation intent. Core and scapular cues are identical to the standard full front lever.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flReverseGrip = {
  id: 21,
  name: "Reverse Grip FL | (Bar)",
  alt: "Underhand front lever · supinated grip front lever · chin-up grip front lever",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Biceps",    p:true},
    {n:"Shoulders", p:true}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever"],
  diff: 9.8,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 4,
  joints: {fingers:1, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
  technique: 4,
  mobility: 2,
  strength: 6,
  kcalPerRep: [0.60, 0.78],
  desc: "A full front lever performed with a supinated (underhand / chin-up style) grip. The inverted wrist position places the biceps in a strong pulling line and can feel easier to initiate for some athletes, but it places significantly higher load on the bicipital tendon at the elbow and is associated with greater injury risk at that joint.",
  cues: "Be cautious approaching this variant — ease into it from shorter holds. The elbow is the limiting factor, not strength. Do not use this grip if there is any existing elbow or biceps tendon issue. Keep the same flat-body and scapular mechanics as the standard lever.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

const _flOneArm = {
  id: 22,
  name: "One Arm FL | (Bar)",
  alt: "One arm front lever · single arm front lever",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Obliques",  p:true},
    {n:"Biceps",    p:false}
  ],
  tags: ["back", "shoulders", "core", "isometric", "frontlever", "elite"],
  diff: 14.4,
  str: {suit:true,  eff:3},
  vol: {suit:false, eff:1},
  end: {suit:true,  eff:3},
  risk: 5,
  joints: {fingers:2, wrist:3, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:5, groin:0, knee:1, ankle:0, foot:0},
  technique: 7,
  mobility: 3,
  strength: 9,
  kcalPerRep: [0.75, 0.98],
  desc: "A front lever supported by a single arm — the free arm is held at the side or behind the back. The lateral demand on the shoulder, lat, and core of the support side is extreme. The thoracic spine and SI joint are loaded asymmetrically. One of the most difficult bar strength skills in calisthenics.",
  cues: "Build this via one-arm rows from the FL position and assisted holds with a band on the free wrist. Keep the hips level and prevent rotation — the tendency to twist toward the free side must be resisted entirely by the obliques. Only train this with a thorough warm-up and zero elbow discomfort.",
  equipment: "Bar",
  position: "Supine",
  youtube: "LINK_TODO"
};

/* ═══════════════════════════════════════════════════════════════════════════
 * DYNAMIC PULLS — BAR
 * Rows: pull from dead hang up into FL position (horizontal finish)
 * Pullups: start in FL, pull chin above bar
 * Negatives / skill drills included at end
 * position: "Hanging"
 * ═══════════════════════════════════════════════════════════════════════════ */

const _flRowTuck = {
  id: 30,
  name: "Tuck FL Row | (Bar)",
  alt: "Tuck front lever row · front lever pull tuck",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Biceps",    p:true},
    {n:"Shoulders", p:true},
    {n:"Rear Delts", p:false}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever"],
  diff: 7.2,
  str: {suit:true,  eff:4},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
  technique: 4,
  mobility: 2,
  strength: 4,
  kcalPerRep: [0.48, 0.62],
  desc: "From a dead hang, pull the body upward while tucking the knees to the chest, finishing with the torso horizontal in a tuck front lever position. The row builds dynamic pulling strength for the front lever family and trains the scapular depression that is critical for static holds.",
  cues: "Initiate with scapular depression before bending the elbows — the pull must come from the lats first. Arrive at the tuck FL position at the top of the pull with the hips at bar height. Lower with control for an eccentric benefit.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flRowAdvancedTuck = {
  id: 31,
  name: "Advanced Tuck FL Row | (Bar)",
  alt: "Advanced tuck front lever row · adv tuck FL pull",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Biceps",    p:true},
    {n:"Shoulders", p:true},
    {n:"Rear Delts", p:false}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever"],
  diff: 8.2,
  str: {suit:true,  eff:4},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
  technique: 4,
  mobility: 2,
  strength: 5,
  kcalPerRep: [0.54, 0.70],
  desc: "A front lever row finishing in the advanced tuck position: hips pushed back to near-parallel with the torso, knees bent but hip angle open. The longer lever arm at the top of the movement demands significantly more lat output than the standard tuck row.",
  cues: "At the top of the pull the thighs should be approximately horizontal. Control the descent — don't just drop from the hold. This row feeds directly into straddle and half-lay static progression.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flRowStraddle = {
  id: 32,
  name: "Straddle FL Row | (Bar)",
  alt: "Straddle front lever row · straddle FL pull",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Biceps",    p:true},
    {n:"Shoulders", p:true},
    {n:"Rear Delts", p:false}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever"],
  diff: 9.6,
  str: {suit:true,  eff:4},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
  technique: 5,
  mobility: 3,
  strength: 6,
  kcalPerRep: [0.60, 0.78],
  desc: "A front lever row finishing in the straddle front lever position, with both legs spread wide and extended. The adductors and hip flexors work to hold the straddle angle while the lats and core maintain body position. The top of each rep is held briefly to reinforce the static position.",
  cues: "Spread the legs before the pull begins, not at the top. Maintain lat depression throughout the movement — letting the shoulders shrug at the bottom wastes the eccentric. Hip flexibility limits how much the straddle can reduce the lever.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flRowFull = {
  id: 33,
  name: "Front Lever Row | (Bar)",
  alt: "Full front lever row · FL row · front lever pull",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Biceps",    p:true},
    {n:"Shoulders", p:true},
    {n:"Rear Delts", p:true}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever"],
  diff: 11.1,
  str: {suit:true,  eff:5},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 4,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
  technique: 5,
  mobility: 2,
  strength: 7,
  kcalPerRep: [0.68, 0.88],
  desc: "A full front lever row: from a dead hang, the body is pulled into and held at the full front lever position — body flat, horizontal, face up — before being lowered with control. One of the most demanding pulling exercises in calisthenics, combining the static strength of the full hold with a dynamic pulling component.",
  cues: "Depress and retract the scapulae from the first moment of the pull. The body must arrive flat — no pike, no arch. Hold the top position for a count if possible. Lower eccentrically in a straight line back to the hang.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flPullupTuck = {
  id: 34,
  name: "Tuck FL Pull-Up | (Bar)",
  alt: "Tuck front lever pull-up · front lever pull-up tuck",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Biceps",    p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever"],
  diff: 8.2,
  str: {suit:true,  eff:4},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:1, ankle:0, foot:0},
  technique: 4,
  mobility: 2,
  strength: 5,
  kcalPerRep: [0.52, 0.67],
  desc: "Starting in a tuck front lever position, the athlete pulls until the chin clears the bar. The body remains in the tucked horizontal orientation throughout the movement — this is not a standard pull-up followed by a lever; the lever position must be maintained from bottom to top.",
  cues: "Do not let the hips drop as the chin approaches the bar — the tucked torso should stay parallel to the floor for the whole range. Think of pulling the bar down to the hips rather than pulling the body up to the bar.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flPullupAdvancedTuck = {
  id: 35,
  name: "Advanced Tuck FL Pull-Up | (Bar)",
  alt: "Advanced tuck front lever pull-up · adv tuck FL pull-up",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Biceps",    p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever"],
  diff: 9.2,
  str: {suit:true,  eff:4},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 3,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:0, knee:1, ankle:0, foot:0},
  technique: 4,
  mobility: 2,
  strength: 6,
  kcalPerRep: [0.58, 0.75],
  desc: "A front lever pull-up performed in the advanced tuck position: hips pushed back, thighs approximately horizontal, knees bent. The longer lever compared to the basic tuck pull-up makes each rep substantially harder. Maintaining the near-flat body line while pulling is the primary challenge.",
  cues: "The thighs must remain roughly parallel to the floor throughout. If the hips drop below horizontal on the pull, the lever is being sacrificed for the chin — reset and use a more tucked position until sufficient strength is built.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flPullupStraddle = {
  id: 36,
  name: "Straddle FL Pull-Up | (Bar)",
  alt: "Straddle front lever pull-up · straddle FL pull-up",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Biceps",    p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Rear Delts", p:false}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever"],
  diff: 11.2,
  str: {suit:true,  eff:5},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 4,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
  technique: 5,
  mobility: 3,
  strength: 7,
  kcalPerRep: [0.66, 0.86],
  desc: "A front lever pull-up in the straddle position — both legs extended and spread wide, body horizontal, pulling until the chin clears the bar. The straddle shortens the lever slightly relative to a full pull-up, making this the common bridge between advanced tuck and full front lever pull-ups.",
  cues: "Spread the legs wide before initiating the pull and do not let them close during the movement. Scapular mechanics are identical to the standard front lever pull-up — lead with depression. Lower with control.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flPullupFull = {
  id: 37,
  name: "Front Lever Pull-Up | (Bar)",
  alt: "Full front lever pull-up · FL pull-up · front lever pull-up",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Biceps",    p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Rear Delts", p:true}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever", "elite"],
  diff: 12.4,
  str: {suit:true,  eff:5},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 4,
  joints: {fingers:1, wrist:2, elbow:4, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
  technique: 6,
  mobility: 2,
  strength: 8,
  kcalPerRep: [0.72, 0.94],
  desc: "A pull-up performed with the body held in a full front lever position — entirely horizontal, face up, legs together and straight — throughout the full range of motion until the chin clears the bar. The elbow joint is heavily loaded at the bottom due to the horizontal torso angle. One of the most demanding pulling movements in calisthenics.",
  cues: "The body line must be held rigidly flat from start to finish — any pike or arch means the lever is being dropped. Pull the bar down and into the hips. Lower eccentrically under full tension; a negative front lever pull-up is nearly as valuable as the concentric.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flNegative = {
  id: 38,
  name: "Negative Front Lever | (Bar)",
  alt: "Front lever negative · eccentric front lever · front lever lowering",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps",    p:false}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever", "eccentric"],
  diff: 10.1,
  str: {suit:true,  eff:4},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 4,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
  technique: 5,
  mobility: 2,
  strength: 6,
  kcalPerRep: [0.62, 0.80],
  desc: "Starting from an inverted hang or tucked invert, the body is lowered eccentrically through the front lever position, resisting gravity with the lats and core. The goal is to pass through — and pause at — the full horizontal front lever on the way down. The eccentric phase builds the connective tissue resilience and strength needed for the static hold.",
  cues: "Do not rush the descent. Aim to pass through the flat horizontal position and hold it for as long as possible before continuing down to the hang. The slower the lower, the greater the training effect. Use a jump or kip to reach the inverted start position.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

const _flIceCreamMaker = {
  id: 39,
  name: "Ice Cream Maker | (Bar)",
  alt: "Ice cream maker front lever · FL swing through · german hang to front lever",
  muscles: [
    {n:"Lats",      p:true},
    {n:"Core",      p:true},
    {n:"Shoulders", p:true},
    {n:"Biceps",    p:false},
    {n:"Hip Flexors", p:false}
  ],
  tags: ["back", "shoulders", "core", "pull", "frontlever"],
  diff: 10.4,
  str: {suit:true,  eff:4},
  vol: {suit:true,  eff:2},
  end: {suit:false, eff:1},
  risk: 4,
  joints: {fingers:1, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
  technique: 6,
  mobility: 2,
  strength: 6,
  kcalPerRep: [0.65, 0.84],
  desc: "A dynamic front lever drill: from a dead hang, the body swings backward and up into an inverted hang, then pulls through the full front lever position on the way down. The circular arc requires full-body coordination and produces a brief, loaded pass through the horizontal lever position. Often used as a conditioning drill or to build dynamic FL awareness.",
  cues: "Control the swing — do not use so much momentum that the front lever phase is bypassed entirely. The goal is to slow and resist the moment the body passes horizontal. Keep the core braced throughout the entire arc. Shoulders must stay depressed; do not shrug at any point.",
  equipment: "Bar",
  position: "Hanging",
  youtube: "LINK_TODO"
};

/* ── PUBLIC BASE ARRAYS ───────────────────────────────────────────────────
   frontleverBaseStatics — consumed by isometric-data.js
   frontleverBasePulls   — consumed by pullup-data.js
   frontlever-data.js must be loaded first in your HTML.
──────────────────────────────────────────────────────────────────────────── */
const frontleverBaseStatics = [
  _flTuck,
  _flAdvancedTuck,
  _flOneLeg,
  _flStraddle,
  _flHalfLay,
  _flFull,
  _flWideGrip,
  _flCloseGrip,
  _flReverseGrip,
  _flOneArm
];

const frontleverBasePulls = [
  _flRowTuck,
  _flRowAdvancedTuck,
  _flRowStraddle,
  _flRowFull,
  _flPullupTuck,
  _flPullupAdvancedTuck,
  _flPullupStraddle,
  _flPullupFull,
  _flNegative,
  _flIceCreamMaker
];

/* ── ID SETS (used by index.html for filtering) ──────────────────────────── */
const frontleverIsoIds = new Set([
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  /* parallettes              */ 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009,
  /* rings                    */ 1201, 1202, 1203, 1204, 1205, 1206,
  /* pinch grip (bar)         */ 1400, 1401, 1442, 1443, 1444, 1445,
  /* supinated fingertip(bar) */ 1402, 1403, 1450, 1451, 1452, 1453,
  /* pronated tip (bar)       */ 1406, 1407, 1460, 1461, 1462, 1463,
  /* fingertip (parallettes)  */ 1404, 1405, 1470, 1471, 1472, 1473,
  /* fingertip (rings)        */ 1480, 1481, 1482, 1483, 1484, 1485,
  /* 4-finger                 */ 1410, 1411, 1500, 1501, 1502, 1503,
  /* 3-finger                 */ 1420, 1421, 1510, 1511, 1512, 1513,
  /* 2-finger                 */ 1430, 1431, 1520, 1521, 1522, 1523,
  /* 1-finger                 */ 1440, 1441, 1530, 1531, 1532, 1533,
  /* one arm — bar            */ 1600, 1601, 1602,
  /* one arm — parallettes    */ 1610, 1611, 1612, 1613,
  /* one arm — rings          */ 1620, 1621, 1622, 1623,
  /* one arm fingertip — bar  */ 1700, 1701, 1702, 1703,
  /* one arm fingertip — p.   */ 1710, 1711, 1712, 1713,
  /* one arm fingertip — rings*/ 1720, 1721, 1722, 1723,
  /* pinch — parallettes      */ 1800, 1801, 1802, 1803, 1804, 1805,
  /* pinch — rings            */ 1810, 1811, 1812, 1950, 1951, 1952,
  /* sup.tip — rings          */ 1820, 1821, 1822, 1940, 1941, 1942,
  /* wide/close — rings       */ 1830, 1840,
  /* reverse grip — bar       */ 1900, 1901, 1902, 1903, 1904,
  /* reverse grip — p-lettes  */ 1910, 1911, 1912, 1913, 2060, 2061,
  /* reverse grip — rings     */ 1920, 1921, 1922, 1923, 2070, 2071,
  /* sup.tip — parallettes    */ 1930, 1931, 1932, 1933, 1934, 1935,
  /* wide grip — bar stages   */ 1960, 1961, 1962, 1963, 2080,
  /* wide grip — rings        */ 2081, 2082, 2083, 2084,
  /* wide grip — parallettes  */ 2085, 2086, 2087, 2088,
  /* close grip — bar stages  */ 1970, 1971, 1972, 1973,
  /* close grip — parallettes */ 2090, 2091, 2092, 2093,
  /* close grip — rings       */ 2100, 2101, 2102, 2103,
  /* one arm missing stages   */ 2000, 2001, 2010, 2011, 2020, 2021,
  /* one arm tip missing      */ 2030, 2031, 2040, 2041, 2050, 2051,
  /* 4-finger parallettes     */ 2200, 2201, 2202,
  /* 3-finger parallettes     */ 2210, 2211, 2212,
  /* 2-finger parallettes     */ 2220, 2221, 2222,
  /* 1-finger parallettes     */ 2230, 2231,
  /* 4-finger rings           */ 2300, 2301, 2302,
  /* 3-finger rings           */ 2310, 2311, 2312,
  /* 2-finger rings           */ 2320, 2321,
  /* 1-finger rings           */ 2330, 2331,
]);
const frontleverPullIds = new Set([
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  /* rings         */ 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215,
  /* parallettes   */ 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308
]);

/* ── COMPLETE FRONT LEVER LIBRARY ────────────────────────────────────────── */
const frontlevers = (() => {
  const entries = [...frontleverBaseStatics, ...frontleverBasePulls];

  const tuck         = _flTuck;
  const advancedTuck = _flAdvancedTuck;
  const oneLeg       = _flOneLeg;
  const straddle     = _flStraddle;
  const halfLay      = _flHalfLay;
  const full         = _flFull;

  /* ── PARALLETTES STATIC VARIANTS ───────────────────────────────────── */
  entries.push(cloneExercise(tuck, {
    id: 1002,
    name: 'Tuck FL | (Parallettes)',
    alt: 'Tuck front lever hold on parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Parallettes',
    desc: 'A tuck front lever performed on parallettes. The neutral wrist position and handle height create a different leverage feel while preserving the horizontal tuck lever shape.',
  }));

  entries.push(cloneExercise(advancedTuck, {
    id: 1003,
    name: 'Advanced Tuck FL | (Parallettes)',
    alt: 'Advanced tuck front lever on parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Parallettes',
    desc: 'An advanced tuck front lever on parallettes, with the hips pushed back toward horizontal. The neutral grip reduces wrist strain compared to the bar while the parallette height forces slightly greater scapular depression to maintain the hold.',
  }));

  entries.push(cloneExercise(oneLeg, {
    id: 1004,
    name: 'One Leg FL | (Parallettes)',
    alt: 'One leg front lever on parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Parallettes',
    desc: 'A one-leg front lever on parallettes — one leg fully extended in line with the torso, the other tucked. The neutral grip eases wrist demands while the asymmetric load on core and lats remains identical to the bar version.',
  }));

  entries.push(cloneExercise(straddle, {
    id: 1005,
    name: 'Straddle FL | (Parallettes)',
    alt: 'Straddle front lever on parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    equipment: 'Parallettes',
    desc: 'A straddle front lever on parallettes with both legs extended and spread wide. The parallette handles provide a wrist-neutral position and slightly more ground clearance, which can make the position marginally more comfortable to sustain.',
  }));

  entries.push(cloneExercise(halfLay, {
    id: 1006,
    name: 'Half Lay FL | (Parallettes)',
    alt: 'Half lay front lever on parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Parallettes',
    desc: 'A half-lay front lever on parallettes, with the thighs horizontal and shins hanging vertically. The parallette height provides additional clearance for the bent shins and the neutral grip keeps wrist stress minimal.',
  }));

  entries.push(cloneExercise(full, {
    id: 1007,
    name: 'Front Lever | (Parallettes)',
    alt: 'Full front lever on parallettes · parallette front lever',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 10.7,
    risk: 4,
    joints: {fingers:3, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Parallettes',
    desc: 'A full front lever held on parallettes — body completely horizontal, face up, arms straight. The neutral grip reduces wrist stress relative to the bar but the elevated handles demand that the scapulae depress even further to keep the body flat. Slightly harder to achieve the dead-flat position than on a fixed bar.',
    cues: 'Drive the handles down and push away as you depress and retract the scapulae. The elevated surface means the hips and feet must be raised slightly higher to clear the floor — ensure you have adequate parallette height for your body proportions.',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 1008,
    name: 'Wide Grip FL | (Parallettes)',
    alt: 'Wide grip front lever on parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 11.4,
    risk: 4,
    joints: {fingers:3, wrist:2, elbow:2, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Parallettes',
    desc: 'A wide grip front lever on parallettes, using two parallettes set wider than shoulder-width. The wide neutral handles increase rear delt and horizontal abductor recruitment while the neutral grip reduces the pronation stress that a wide bar grip creates.',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 1009,
    name: 'Close Grip FL | (Parallettes)',
    alt: 'Close grip front lever on parallettes · narrow parallette front lever',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 9.7,
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:1, hip:4, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Parallettes',
    desc: 'A close grip front lever on parallettes with the handles set narrow — typically just inside shoulder-width. The neutral grip at a close position creates a different shoulder-rotation demand than a close bar grip, distributing load more evenly between the lats and triceps.',
  }));

  /* ── RINGS STATIC VARIANTS ─────────────────────────────────────────── */
  entries.push(cloneExercise(tuck, {
    id: 1201,
    name: 'Tuck FL | (Rings)',
    alt: 'Tuck front lever hold on rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Supine',
    desc: 'A tuck front lever performed on gymnastic rings. The rotating handles add a stability challenge while preserving the horizontal tuck lever shape.',
    cues: 'Keep the shoulders depressed and the body rigid. Manage ring instability by controlling the path of the handles as you hold the tuck lever.',
  }));

  entries.push(cloneExercise(advancedTuck, {
    id: 1202,
    name: 'Advanced Tuck FL | (Rings)',
    alt: 'Advanced tuck front lever on rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 7.2,
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Supine',
    desc: 'An advanced tuck front lever on rings, with the hips pushed back to near-parallel. The rings rotate and oscillate under the shifted load as the hips open from the tuck — significantly harder to stabilise than the bar version.',
    cues: 'Establish a solid bar advanced tuck first. On rings, any imbalance between the arms will cause the rings to drift — focus on equal pressure through both handles throughout the hold.',
  }));

  entries.push(cloneExercise(oneLeg, {
    id: 1203,
    name: 'One Leg FL | (Rings)',
    alt: 'One leg front lever on rings · single leg front lever rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 8.6,
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Supine',
    desc: 'A one-leg front lever on rings — one leg extended, one tucked — with the added instability of rotating ring handles. The asymmetric leg position and the free rings together demand exceptional core anti-rotation and shoulder stabilisation.',
    cues: 'The ring on the extended-leg side will want to drift outward — actively resist this by gripping firmly and maintaining lat tension on that side. Hips must stay square; any rotation amplifies ring movement.',
  }));

  entries.push(cloneExercise(straddle, {
    id: 1204,
    name: 'Straddle FL | (Rings)',
    alt: 'Straddle front lever on rings · straddle ring front lever',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 8.7,
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Supine',
    desc: 'A straddle front lever on gymnastic rings with both legs wide and extended. The straddle reduces the lever arm, but the ring instability adds a significant stabilisation tax on top. This is the recommended first ring front lever target for athletes transitioning from the bar.',
    cues: 'Spread the legs as wide as possible before initiating the hold — the straddle helps manage the overall difficulty while the rings add their own challenge. Focus on equal tension through both handles at all times.',
  }));

  entries.push(cloneExercise(halfLay, {
    id: 1205,
    name: 'Half Lay FL | (Rings)',
    alt: 'Half lay front lever on rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 9.6,
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:5, si:2, hip:3, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Supine',
    desc: 'A half-lay front lever on rings with thighs horizontal and shins hanging vertically. One of the harder ring front lever static variants — the bent shin position shifts the centre of mass in a way that creates unpredictable ring oscillation.',
    cues: 'Keep the shins strictly vertical and parallel — any splaying of the knees will cause uneven ring rotation. Maintain maximum scapular depression; the rings amplify any upward shoulder drift immediately.',
  }));

  entries.push(cloneExercise(full, {
    id: 1206,
    name: 'Front Lever | (Rings)',
    alt: 'Full front lever on rings · ring front lever',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings', 'elite'],
    diff: 11.0,
    risk: 5,
    joints: {fingers:3, wrist:3, elbow:2, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Supine',
    desc: 'A full front lever on gymnastic rings — body completely horizontal, face up, legs together and straight, on freely rotating handles. The instability of the rings makes this substantially harder than the bar version: any micro-shift in body tension causes the rings to swing, requiring continuous corrective output from the lats, core, and shoulder stabilisers. Considered one of the most demanding ring strength standards in calisthenics.',
    cues: 'Only attempt this with a fully established bar front lever. The rings will want to flare outward — fight this by actively pulling the handles toward each other throughout the hold. Squeeze the glutes, legs, and core at maximum tension; any relaxation is immediately punished by ring movement.',
  }));

  /* ── RINGS DYNAMIC VARIANTS ────────────────────────────────────────── */
  entries.push(cloneExercise(_flRowTuck, {
    id: 1207,
    name: 'Tuck FL Row | (Rings)',
    alt: 'Tuck front lever row on rings · ring FL row tuck',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'rings'],
    diff: 7.8,
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Hanging',
    desc: 'A tuck front lever row on gymnastic rings — pulling from a dead hang into a tuck front lever position on rotating handles. The rings swing during the pull and must be actively stabilised at the top, adding a significant co-contraction demand on top of the standard row strength requirement.',
    cues: 'Control the rings throughout the pull — do not let them swing out. At the top of the row, lock the tuck position and resist any oscillation before lowering with control.',
  }));

  entries.push(cloneExercise(_flRowStraddle, {
    id: 1208,
    name: 'Straddle FL Row | (Rings)',
    alt: 'Straddle front lever row on rings',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'rings'],
    diff: 10.2,
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Hanging',
    desc: 'A straddle front lever row on rings, pulling into the straddle FL position on freely rotating handles. The straddle controls the lever arm while the rings add full-body stabilisation demand at the top of each rep.',
    cues: 'Straddle wide before the pull. At the top, the rings will want to rotate — maintain equal grip pressure through both handles. Lower slowly for maximum eccentric benefit.',
  }));

  entries.push(cloneExercise(_flRowFull, {
    id: 1209,
    name: 'Front Lever Row | (Rings)',
    alt: 'Full front lever row on rings · ring FL row',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'rings', 'elite'],
    diff: 11.8,
    risk: 5,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Hanging',
    desc: 'A full front lever row on gymnastic rings — pulling from a dead hang into a full horizontal front lever on rotating handles. The hardest dynamic ring pulling movement in this family. Ring oscillation at the top of the movement is extreme and must be actively controlled through maximum full-body tension.',
    cues: 'The bar front lever row must be well established before attempting this. Expect the rings to flare outward at the top — actively pull them toward each other. The hold at the top is the most demanding phase.',
  }));

  entries.push(cloneExercise(_flPullupTuck, {
    id: 1210,
    name: 'Tuck FL Pull-Up | (Rings)',
    alt: 'Tuck front lever pull-up on rings',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'rings'],
    diff: 8.8,
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Hanging',
    desc: 'A tuck front lever pull-up on gymnastic rings — held in the tuck FL position while pulling until the chin clears the rings. The rings rotate as the chin rises, requiring continuous wrist and shoulder stabilisation stacked on top of the FL pull-up demand.',
    cues: 'Let the rings rotate naturally as you pull — fighting them increases wrist strain. Keep the tuck position flat; any hip drop will cause the rings to swing erratically.',
  }));

  entries.push(cloneExercise(_flPullupStraddle, {
    id: 1211,
    name: 'Straddle FL Pull-Up | (Rings)',
    alt: 'Straddle front lever pull-up on rings',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'rings'],
    diff: 11.8,
    risk: 5,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Hanging',
    desc: 'A straddle front lever pull-up on rings — legs wide and extended in the straddle FL position while pulling to chin over rings. The straddle shortens the lever while the rings amplify every stabilisation demand. One of the most advanced ring pulling movements before the full FL pull-up on rings.',
    cues: 'Spread the legs wide before the pull and maintain the straddle throughout. The rings will oscillate at the top — brace maximally and allow a brief settle before lowering.',
  }));

  entries.push(cloneExercise(_flNegative, {
    id: 1212,
    name: 'Negative Front Lever | (Rings)',
    alt: 'Front lever negative on rings · eccentric ring front lever',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'rings', 'eccentric'],
    diff: 10.8,
    risk: 5,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Hanging',
    desc: 'An eccentric front lever on rings — lowering from an inverted hang through the front lever position while controlling the rings. The rotating handles make the horizontal pass-through phase dramatically more challenging than the bar version, as any speed variation causes the rings to swing unpredictably.',
    cues: 'Use a kip or jump to reach the inverted position. Lower as slowly as possible; the rings will stabilise when body tension is high and swing when it drops. Treat the negative as a stability drill as much as a strength one.',
  }));

  /* ── RINGS MISSING GAPS ────────────────────────────────────────────── */
  entries.push(cloneExercise(_flRowAdvancedTuck, {
    id: 1213,
    name: 'Advanced Tuck FL Row | (Rings)',
    alt: 'Advanced tuck front lever row on rings',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'rings'],
    diff: 8.8,
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Hanging',
    desc: 'An advanced tuck front lever row on rings — pulling from a dead hang to the advanced tuck FL position on rotating handles. The hip-back position at the top creates more ring oscillation than the basic tuck, demanding greater stabilisation from both arms simultaneously.',
    cues: 'At the top, the thighs should be roughly horizontal. Resist any sideways drift of the rings by maintaining equal lat tension through both handles. Lower under control — do not let the rings swing freely on the descent.',
  }));

  entries.push(cloneExercise(_flPullupAdvancedTuck, {
    id: 1214,
    name: 'Advanced Tuck FL Pull-Up | (Rings)',
    alt: 'Advanced tuck front lever pull-up on rings',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'rings'],
    diff: 9.8,
    risk: 4,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:6, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Hanging',
    desc: 'An advanced tuck front lever pull-up on rings — held in the advanced tuck FL position while pulling until the chin clears the rings. The near-horizontal thigh position and ring instability make this significantly harder than the tuck ring pull-up; the rings want to rotate and flare outward as the chin rises.',
    cues: 'Keep the thighs parallel throughout the pull. Let the rings rotate naturally rather than fighting them. If the hips drop below horizontal at any point, reset and reduce to the basic tuck version.',
  }));

  entries.push(cloneExercise(_flIceCreamMaker, {
    id: 1215,
    name: 'Ice Cream Maker | (Rings)',
    alt: 'Ice cream maker on rings · ring FL swing through',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'rings'],
    diff: 11.2,
    risk: 5,
    joints: {fingers:3, wrist:3, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:4, si:1, hip:3, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Rings',
    position: 'Hanging',
    desc: 'An ice cream maker on gymnastic rings — swinging backward into an inverted hang then pulling through the front lever position on the way down, on freely rotating handles. The circular arc combined with ring instability is extreme: the moment the body passes through horizontal, the rings want to flare and rotate simultaneously, requiring maximum full-body tension to control.',
    cues: 'Do not let momentum carry you through the horizontal phase — the goal is to slow and resist exactly there. Keep grip pressure equal through both rings at all times. Only attempt after the bar ice cream maker is fully controlled.',
  }));

  /* ── PARALLETTES DYNAMIC VARIANTS ──────────────────────────────────── */
  entries.push(cloneExercise(_flRowTuck, {
    id: 1300,
    name: 'Tuck FL Row | (Parallettes)',
    alt: 'Tuck front lever row on parallettes',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'parallettes'],
    diff: 7.4,
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Parallettes',
    position: 'Hanging',
    desc: 'A tuck front lever row on parallettes — pulling from a dead hang into the tuck FL position on neutral-grip handles. The parallette height requires a wider grip setup and the neutral wrist position reduces stress on the forearm during the pull. The mechanics and top position are otherwise identical to the bar version.',
    cues: 'Ensure the parallettes are stable and set at a height that allows a full dead hang. Initiate with scapular depression before bending the elbows. Arrive at the tuck FL position with hips at handle height and lower with control.',
  }));

  entries.push(cloneExercise(_flRowAdvancedTuck, {
    id: 1301,
    name: 'Advanced Tuck FL Row | (Parallettes)',
    alt: 'Advanced tuck front lever row on parallettes',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'parallettes'],
    diff: 8.4,
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Parallettes',
    position: 'Hanging',
    desc: 'An advanced tuck front lever row on parallettes, finishing with hips pushed back to near-parallel with the torso. The neutral grip and fixed handles make this slightly more stable than the ring version while still training the critical lat and core output needed for the advanced tuck static hold.',
    cues: 'At the top of the pull the thighs should be approximately horizontal. The parallette setup means the hip-back position is directly verifiable against handle height — use this as a positional reference. Lower slowly.',
  }));

  entries.push(cloneExercise(_flRowStraddle, {
    id: 1302,
    name: 'Straddle FL Row | (Parallettes)',
    alt: 'Straddle front lever row on parallettes',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'parallettes'],
    diff: 9.8,
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    equipment: 'Parallettes',
    position: 'Hanging',
    desc: 'A straddle front lever row on parallettes, pulling into the straddle FL position on neutral-grip handles. Spreading the legs wide before the pull reduces the effective lever arm while the parallettes provide a fixed, stable base. The wider stance may require slightly wider parallette spacing to avoid foot contact with the handles.',
    cues: 'Straddle as wide as possible before initiating the pull. Keep the legs locked and spread throughout the rep — any closing of the straddle increases the lever arm mid-movement. Maintain scapular depression throughout.',
  }));

  entries.push(cloneExercise(_flRowFull, {
    id: 1303,
    name: 'Front Lever Row | (Parallettes)',
    alt: 'Full front lever row on parallettes · parallette FL row',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'parallettes'],
    diff: 11.3,
    risk: 4,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Parallettes',
    position: 'Hanging',
    desc: 'A full front lever row on parallettes — pulling from a dead hang into a full horizontal front lever on neutral-grip handles. The fixed, stable handles make this marginally more approachable than the ring version, but the strength demand is essentially identical to the bar version. Requires sufficient parallette height for the body to hang fully extended at the bottom.',
    cues: 'Verify parallette height allows a true dead hang before starting. Depress and retract the scapulae from the first moment of the pull. The body must arrive dead flat — no pike, no arch. Hold the top position and lower eccentrically.',
  }));

  entries.push(cloneExercise(_flPullupTuck, {
    id: 1304,
    name: 'Tuck FL Pull-Up | (Parallettes)',
    alt: 'Tuck front lever pull-up on parallettes',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'parallettes'],
    diff: 8.4,
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:0, hip:2, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Parallettes',
    position: 'Hanging',
    desc: 'A tuck front lever pull-up on parallettes — held in the tuck FL position while pulling until the chin clears the handles. The neutral grip reduces wrist stress compared to the bar version and the fixed handles are more stable than rings. The lever position must be maintained throughout the full range.',
    cues: 'Keep the tuck position flat — hips at handle height for the full range. Think of pulling the handles down toward the hips. Do not let the hips drop as the chin approaches the top.',
  }));

  entries.push(cloneExercise(_flPullupAdvancedTuck, {
    id: 1305,
    name: 'Advanced Tuck FL Pull-Up | (Parallettes)',
    alt: 'Advanced tuck front lever pull-up on parallettes',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'parallettes'],
    diff: 9.4,
    risk: 3,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:0, knee:2, ankle:0, foot:0},
    equipment: 'Parallettes',
    position: 'Hanging',
    desc: 'An advanced tuck front lever pull-up on parallettes — thighs approximately horizontal, knees bent, pulling until the chin clears the handles. The near-flat body position demands significant lat and core output throughout the pull. The neutral grip and stable handles make this a sound bridge between the tuck version and the straddle pull-up on parallettes.',
    cues: 'The thighs must remain roughly parallel to the handles throughout. If the hips drop at any point during the pull, regress to the tuck version. Control the descent.',
  }));

  entries.push(cloneExercise(_flPullupStraddle, {
    id: 1306,
    name: 'Straddle FL Pull-Up | (Parallettes)',
    alt: 'Straddle front lever pull-up on parallettes',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'parallettes'],
    diff: 11.4,
    risk: 4,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    equipment: 'Parallettes',
    position: 'Hanging',
    desc: 'A straddle front lever pull-up on parallettes — legs spread wide and extended throughout the pull until the chin clears the handles. The straddle shortens the lever while the neutral grip parallettes provide a stable, wrist-friendly base. Requires wide parallette spacing to avoid foot contact with the handles during the straddle.',
    cues: 'Spread the legs wide before the pull and keep them there throughout. Ensure the parallette spacing accommodates the straddle. Lead the pull with scapular depression and control the lowering phase fully.',
  }));

  entries.push(cloneExercise(_flPullupFull, {
    id: 1307,
    name: 'Front Lever Pull-Up | (Parallettes)',
    alt: 'Full front lever pull-up on parallettes · parallette FL pull-up',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'parallettes', 'elite'],
    diff: 12.6,
    risk: 4,
    joints: {fingers:3, wrist:2, elbow:4, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Parallettes',
    position: 'Hanging',
    desc: 'A full front lever pull-up on parallettes — body entirely horizontal, face up, legs together and straight, pulling until the chin clears the neutral-grip handles. The parallette setup provides a stable base versus rings, but the strength demand equals the bar version. Requires tall parallettes to allow a true dead hang at full arm extension.',
    cues: 'Verify full hang clearance before loading the movement. Hold the body dead flat from first pull to last — any deviation means the lever is lost. Lower eccentrically under maximum tension.',
  }));

  entries.push(cloneExercise(_flNegative, {
    id: 1308,
    name: 'Negative Front Lever | (Parallettes)',
    alt: 'Front lever negative on parallettes · eccentric parallette front lever',
    tags: ['back', 'shoulders', 'core', 'pull', 'frontlever', 'parallettes', 'eccentric'],
    diff: 10.3,
    risk: 4,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    equipment: 'Parallettes',
    position: 'Hanging',
    desc: 'An eccentric front lever on parallettes — lowering from an inverted hang through the horizontal front lever position while controlling the neutral-grip handles. The fixed handles and neutral wrist position make this marginally more comfortable than the bar version, which can help athletes extend the eccentric duration and accumulate more time through the hardest range.',
    cues: 'Use a jump or kip to reach the inverted start position. Lower as slowly as possible; aim to pause at the fully horizontal position. The goal is maximum time in the front lever zone — do not rush through it.',
  }));

  /* ── GRIP / FINGER-REDUCTION STATIC VARIANTS — BAR ────────────────── */

  /* ·· PINCH GRIP (thumb + fingertips, pronated) ························ */
  entries.push(cloneExercise(_flStraddle, {
    id: 1400,
    name: 'Straddle FL | Pinch Grip (Bar)',
    alt: 'Pinch grip straddle front lever · thumb-pinch straddle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 9.6,
    risk: 4,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 6,
    kcalPerRep: [0.55, 0.72],
    desc: 'A straddle front lever held with a pinch grip — the thumb presses against one side of the bar and the fingertips against the other, with no hook wrap. The pinch eliminates all mechanical advantage from the standard hook grip and forces the thumb, thenar eminence, and fingertip pads to bear the entire load. The straddle leg position is used to make the front lever component achievable while the grip is the primary limiting factor.',
    cues: 'Build static pinch dead hangs on a bar for 10–20 seconds before attempting this hold. A thicker bar (32–50mm) makes the pinch more manageable than a 28mm standard bar. Depress the scapulae hard — the pinch grip destabilises the shoulder chain.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1401,
    name: 'Front Lever | Pinch Grip (Bar)',
    alt: 'Pinch grip front lever · thumb-pinch FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 11.8,
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 6,
    mobility: 2,
    strength: 8,
    kcalPerRep: [0.64, 0.84],
    desc: 'A full front lever held in pinch grip — thumb on one side of the bar, fingertips on the other, no hook wrap, legs together and body completely horizontal. The pinch removes all hook-grip mechanical security, demanding extraordinary lateral pinch strength on top of the full front lever output. The grip becomes the hard limiting factor well before lat or core capacity is reached. Extremely rare and reserved for grip specialists with a long front lever and heavy pinch dead-hang history.',
    cues: 'Only attempt with a well-established full front lever and a documented 30+ second pinch dead hang on the target bar. Any upward drift of the shoulders is amplified immediately by the grip insecurity. Thicker bars (40–50mm) are strongly preferred.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  /* ·· SUPINATED FINGERTIP (underhand, fingertips only) ················ */
  entries.push(cloneExercise(_flStraddle, {
    id: 1402,
    name: 'Straddle FL | Supinated Fingertip (Bar)',
    alt: 'Underhand fingertip straddle front lever · supinated open-hand straddle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 9.8,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 6,
    kcalPerRep: [0.55, 0.72],
    desc: 'A straddle front lever held with a supinated (underhand) grip on fingertips only — the bar rests across the distal finger joints with palms facing upward. The supinated position puts the biceps tendon under significant load (as in the Reverse Grip FL), and removing the palm hook adds extreme finger flexor demand simultaneously. The combination of biceps tendon stress and finger tendon stress makes this one of the highest-risk grip variants in the FL family.',
    cues: 'Never attempt without a long history of both supinated FL holds and fingertip dead hangs. The elbow is the most vulnerable joint here — any sharp pain at the elbow or biceps tendon insertion means stop immediately.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1403,
    name: 'Front Lever | Supinated Fingertip (Bar)',
    alt: 'Underhand fingertip front lever · supinated open-hand FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 12.2,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 7,
    mobility: 2,
    strength: 8,
    kcalPerRep: [0.66, 0.86],
    desc: 'A full front lever held with a supinated grip on fingertips only — body completely horizontal, face up, legs together, palms facing up, bar resting on distal finger joints. The full combination of front lever output, biceps tendon load from supination, and finger tendon load from the open hand makes this among the most technically and physically demanding grip variants in the entire FL family. Documented performances are extremely rare.',
    cues: 'A verified clean full front lever and a verified clean Reverse Grip FL are both hard prerequisites. Build supinated fingertip dead hangs progressively over months before adding the FL component. This grip is contraindicated for anyone with any elbow history.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  /* ·· NEUTRAL FINGERTIP (parallettes, fingertips only) ················ */
  entries.push(cloneExercise(_flStraddle, {
    id: 1404,
    name: 'Straddle FL | Fingertip (Parallettes)',
    alt: 'Fingertip straddle front lever on parallettes · open-hand straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 9.4,
    risk: 4,
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 6,
    kcalPerRep: [0.54, 0.70],
    desc: 'A straddle front lever on parallettes held on fingertips only — the handles rest across the distal finger joints with no palm contact, in a neutral wrist position. The neutral grip removes the elbow and wrist torque of supinated or pronated fingertip holds, making this the most structurally sound fingertip FL entry point. The round parallel bar handles are typically thicker than a standard pull-up bar, reducing per-joint load slightly.',
    cues: 'Build neutral-grip fingertip dead hangs on the parallette handles before adding the FL hold. Fingertip contact should be on the distal pads — not the first knuckle crease. Scapular depression must be maximal.',
    equipment: 'Parallettes',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1405,
    name: 'Front Lever | Fingertip (Parallettes)',
    alt: 'Fingertip front lever on parallettes · open-hand FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 11.4,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 6,
    mobility: 2,
    strength: 8,
    kcalPerRep: [0.63, 0.82],
    desc: 'A full front lever on parallettes held on fingertips only — body completely horizontal, face up, legs together, bar resting on distal finger pads in a neutral wrist orientation. The neutral grip spares the elbow relative to supinated or pronated fingertip variants, but the full front lever body position means the finger flexors must sustain load for far longer than in a standard fingertip hang.',
    cues: 'Establish a clean full front lever on parallettes with full grip before attempting on fingertips. Transfer the scapular depression cue directly. Do not attempt if any finger flexor tendon is sore.',
    equipment: 'Parallettes',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  /* ·· PRONATED FINGERTIP (bar, standard orientation) ·················· */
  entries.push(cloneExercise(_flStraddle, {
    id: 1406,
    name: 'Straddle FL | Fingertip (Bar)',
    alt: 'Fingertip straddle front lever · open-hand straddle FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 9.5,
    risk: 4,
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 6,
    kcalPerRep: [0.54, 0.70],
    desc: 'A straddle front lever on a standard bar held on extended fingertips only — the bar rests across the first or second finger joints with palms pronated (facing down) and no hook wrap. The straddle reduces the lever arm to a manageable level while the fingertip grip is the primary challenge. The pronated wrist under load creates significant wrist extensor stress in addition to the finger flexor demand.',
    cues: 'Build pronated fingertip dead hangs for 10+ seconds before attempting the FL hold. The wrists will want to roll — keep them stacked and resist the pronation torque actively. Scapular depression is the main keeper of the position.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1407,
    name: 'Front Lever | Fingertip (Bar)',
    alt: 'Fingertip front lever · open-hand FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 11.5,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 6,
    mobility: 2,
    strength: 8,
    kcalPerRep: [0.63, 0.82],
    desc: 'A full front lever on a standard bar held entirely on fingertips — pronated, bar across the distal finger joints, no palm hook, legs together, body completely horizontal. The full front lever position sustains the fingertip contact for far longer than a hang, demanding elite-level finger flexor tendon conditioning on top of a world-class FL.',
    cues: 'A full front lever in standard grip and 20+ second pronated fingertip dead hangs are both required baselines. Transfer your lat and scapular depression cues unchanged — only the grip interface differs. If any finger tendon is sore, do not attempt.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  /* ·· 4-FINGER FL (no thumb, pronated) ································ */
  entries.push(cloneExercise(_flStraddle, {
    id: 1410,
    name: 'Straddle FL | 4-Finger (Bar)',
    alt: '4-finger straddle front lever · no-thumb straddle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 10.0,
    risk: 4,
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 6,
    kcalPerRep: [0.55, 0.72],
    desc: 'A straddle front lever held on four fingers only — index, middle, ring, and pinky on the bar with the thumb deliberately raised and not used. Removing the thumb eliminates the grip opposition that stabilises the standard hook, placing all load through the four finger flexors and significantly increasing per-tendon stress. Follows directly from the 4-Finger Pull-Up progression in grip-reduction training.',
    cues: 'The 4-Finger Pull-Up must be well established before transferring the no-thumb grip to FL work. Build 4-finger dead hangs in the supine hanging position before attempting the straddle FL. Thumb raised means thumb raised — no partial contact.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1411,
    name: 'Front Lever | 4-Finger (Bar)',
    alt: '4-finger front lever · no-thumb FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 12.0,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 6,
    mobility: 2,
    strength: 8,
    kcalPerRep: [0.65, 0.84],
    desc: 'A full front lever held on four fingers only — no thumb contact, body completely horizontal, legs together. The 4-finger grip distributes full front lever load across eight finger joints rather than the thumb-stabilised hook, dramatically increasing per-joint demand. A long-term conditioning target achievable only by athletes who have systematically built grip-reduction FL holds from the straddle version upward over many months.',
    cues: 'The 4-Finger Straddle FL must be a controlled hold before attempting the full version. Scapular depression is your only grip stabiliser — the thumb is gone and the hook is gone, so the lat and scapular system must compensate completely.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  /* ·· 3-FINGER FL (index + middle + ring, pronated) ·················· */
  entries.push(cloneExercise(_flStraddle, {
    id: 1420,
    name: 'Straddle FL | 3-Finger (Bar)',
    alt: '3-finger straddle front lever · index-middle-ring straddle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 10.6,
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 6,
    mobility: 3,
    strength: 7,
    kcalPerRep: [0.56, 0.74],
    desc: 'A straddle front lever on three fingers — index, middle, and ring only, with pinky and thumb raised. Six finger joints bear the full front lever load, dramatically increasing per-joint stress relative to the 4-finger version. Follows the climbing-derived finger-reduction progression. The straddle position makes the front lever component achievable while the grip is the limiting factor at this stage.',
    cues: 'The 3-Finger Pull-Up and the 4-Finger Straddle FL are both mandatory prerequisites. Build 3-finger dead hangs in the supine position specifically. Never train 3-finger FL to tendon fatigue; stop at the first sign of finger flexor pump.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1421,
    name: 'Front Lever | 3-Finger (Bar)',
    alt: '3-finger front lever · index-middle-ring FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 12.6,
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 7,
    mobility: 2,
    strength: 9,
    kcalPerRep: [0.68, 0.88],
    desc: 'A full front lever held on three fingers — index, middle, and ring, with pinky and thumb raised, body completely horizontal. One of the most extreme grip-strength FL variants: six finger joints bear the full load of a complete horizontal body hold. Requires years of systematic 3-finger and 4-finger FL progression.',
    cues: 'The 3-Finger Straddle FL must be a comfortable multi-second hold before progressing. No warm-up, no attempt. The descent from the straddle to the full position must be gradual.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  /* ·· 2-FINGER FL (index + middle, pronated) ·························· */
  entries.push(cloneExercise(_flStraddle, {
    id: 1430,
    name: 'Straddle FL | 2-Finger (Bar)',
    alt: '2-finger straddle front lever · index-middle straddle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 11.4,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 7,
    mobility: 3,
    strength: 8,
    kcalPerRep: [0.58, 0.76],
    desc: 'A straddle front lever on two fingers per hand — index and middle only, remaining fingers raised. Four finger joints in total bear the full horizontal front lever load. The per-joint stress at this stage is extreme, placing this well beyond recreational training and into elite grip-specialist territory. The straddle leg position is the only concession to making the movement achievable. Mirrors the 2-Finger Pull-Up applied to the FL family.',
    cues: 'The 3-Finger Straddle FL and the 2-Finger Pull-Up are both non-negotiable prerequisites. Build 2-finger dead hangs in the supine FL setup specifically. Tendon injury at this stage can be career-ending; never train through any finger discomfort.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1431,
    name: 'Front Lever | 2-Finger (Bar)',
    alt: '2-finger front lever · index-middle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 13.4,
    hof: true,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 8,
    mobility: 2,
    strength: 9,
    kcalPerRep: [0.72, 0.94],
    desc: 'A full front lever on two fingers per hand — index and middle only, body completely horizontal, legs together. Four finger joints in total bear the entire load of a full front lever. One of the most extreme grip-strength feats in all of calisthenics. Verified performances are vanishingly rare; the combination of elite FL strength and years of systematic 2-finger tendon conditioning makes this an almost theoretical benchmark.',
    cues: 'The 2-Finger Straddle FL must be a genuine controlled hold before attempting the full version. Treat every single set as high-stakes tendon work — warm up completely, stop at the first hint of finger joint discomfort, never more than once per week.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  /* ·· 1-FINGER FL (index only, pronated) ······························ */
  entries.push(cloneExercise(_flStraddle, {
    id: 1440,
    name: 'Straddle FL | 1-Finger (Bar)',
    alt: '1-finger straddle front lever · single-finger straddle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 13.0,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 8,
    mobility: 3,
    strength: 9,
    kcalPerRep: [0.62, 0.82],
    desc: 'A straddle front lever on one finger per hand — the index finger only, all others raised, in a pronated orientation. Two finger joints in total bear the full horizontal front lever load. The absolute pinnacle of the finger-reduction FL progression in its straddle form. Even with the straddle reducing the lever arm, the per-joint load is so extreme that verified performances are essentially undocumented.',
    cues: 'No coaching prescription exists that makes this safe for a general audience. This is a theoretical endpoint of decades of systematic single-finger tendon conditioning combined with elite-level FL strength. The 2-Finger Straddle FL must be easy and established before this can be considered.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1441,
    name: 'Front Lever | 1-Finger (Bar)',
    alt: '1-finger front lever · single-finger FL · index FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 15.0,
    hof: true,
    pantheon: false,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 9,
    mobility: 2,
    strength: 10,
    kcalPerRep: [0.78, 1.00],
    desc: 'A full front lever on one finger per hand — index finger only, body completely horizontal, legs together. Two finger joints in total bear the full load of a complete horizontal front lever hold. The absolute pinnacle of both the front lever progression and the finger-reduction grip progression simultaneously. No verified public performance of this movement is known to exist. The theoretical ceiling of the FL grip ladder.',
    cues: 'No training prescription. This movement exists as the logical endpoint of two independent elite strength ladders — the FL progression and the 1-finger tendon progression — applied simultaneously. Attempting it without reaching the verified top of both ladders independently would be catastrophically injurious.',
    equipment: 'Bar',
    position: 'Supine',
    youtube: 'LINK_TODO',
  }));


  /* ══════════════════════════════════════════════════════════════════════
     GRIP / FINGER-REDUCTION VARIANTS — FULL PROGRESSION MATRIX
     Each grip family covers: Tuck → Advanced Tuck → One Leg → Straddle
     → Half Lay → Full FL, across Bar / Parallettes / Rings as appropriate.
     Previously only Straddle + Full were added; this block fills in
     the complete progression for every grip family and equipment combo.
     ══════════════════════════════════════════════════════════════════════ */

  /* ── PINCH GRIP — missing progression (Tuck / AdvTuck / OneLeg / HalfLay) ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1442,
    name: 'Tuck FL | Pinch Grip (Bar)',
    alt: 'Pinch grip tuck front lever · thumb-pinch tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 6.8,
    risk: 3,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.38, 0.52],
    desc: 'A tuck front lever held with a pinch grip — thumb on one side of the bar, four fingertips on the other, no hook wrap. The tucked knees dramatically shorten the lever arm, making the front lever component approachable, but the pinch grip still demands considerable lateral thumb and finger-pad strength. The best entry point for building the pinch-grip FL from scratch.',
    cues: 'Establish a 10-second pinch dead hang before attempting the tuck FL in pinch. Depress the scapulae first, then pull the knees to the chest while maintaining the pinch — the grip will try to open as body weight increases.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1443,
    name: 'Advanced Tuck FL | Pinch Grip (Bar)',
    alt: 'Pinch grip advanced tuck front lever · thumb-pinch adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 7.8,
    risk: 3,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.44, 0.60],
    desc: 'An advanced tuck front lever (hips at bar height, back flat) held with a pinch grip. The flattened back increases the effective lever length considerably versus the rounded tuck, while the pinch grip remains the secondary limiting factor. Bridges the tuck and one-leg pinch FL.',
    cues: 'Keep the back flat — not arched, not rounded — while maintaining the pinch contact. If the grip slips, reduce to the rounded tuck version before reattempting.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1444,
    name: 'One Leg FL | Pinch Grip (Bar)',
    alt: 'Pinch grip one-leg front lever · thumb-pinch single-leg FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 8.8,
    risk: 4,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.49, 0.66],
    desc: 'A one-leg front lever (one leg extended, one tucked) held with a pinch grip. The asymmetric leg position provides a moderate lever arm reduction from the full FL while the pinch grip adds meaningful grip demand. A useful intermediate between the advanced tuck and straddle pinch FL.',
    cues: 'The extended leg should be completely straight and the tucked knee close to the body. Resist any rotation from the asymmetric leg position — the hips must stay square and horizontal.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1445,
    name: 'Half Lay FL | Pinch Grip (Bar)',
    alt: 'Pinch grip half lay front lever · thumb-pinch half lay FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 10.2,
    risk: 4,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 7,
    kcalPerRep: [0.58, 0.76],
    desc: 'A half-lay front lever (legs together, knees slightly bent at roughly 45°) held with a pinch grip. The half-lay produces nearly the same lever demand as the full FL — the slight knee bend gives only a small reduction. At this stage the pinch grip stress is very high. Direct preparation for the full FL in pinch.',
    cues: 'The knees should be only slightly bent — not tucked. Keep the body dead flat from shoulders to knees. The grip is now the performance ceiling rather than the lever strength.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── SUPINATED FINGERTIP — missing progression ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1450,
    name: 'Tuck FL | Supinated Fingertip (Bar)',
    alt: 'Underhand fingertip tuck front lever · supinated open-hand tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 6.9,
    risk: 4,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.38, 0.52],
    desc: 'A tuck front lever held with an underhand (supinated) grip on fingertips only. The tuck position reduces the lever demand to a manageable level, but the supinated fingertip grip simultaneously loads the biceps tendon (from the supination) and the finger flexors (from the open hand), making this high-risk even at the tuck stage. The entry point for athletes building toward the supinated fingertip FL ladder.',
    cues: 'Build supinated fingertip dead hangs in a vertical hang before transferring to the FL position. Any sharp elbow pain stops the set immediately — the bicipital tendon is under load from both the supination and the bodyweight.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1451,
    name: 'Advanced Tuck FL | Supinated Fingertip (Bar)',
    alt: 'Underhand fingertip advanced tuck FL · supinated open-hand adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 8.0,
    risk: 4,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.44, 0.60],
    desc: 'An advanced tuck front lever (back flat, hips at bar height) held with a supinated grip on fingertips. The increase in lever arm from the rounded to advanced tuck increases elbow torque meaningfully. The combination of biceps tendon load and finger flexor demand continues to make this higher-risk than the pronated fingertip equivalent.',
    cues: 'Do not rush through the tuck stage. The advanced tuck in supinated fingertip should feel controlled for 3+ seconds before progressing further up the lever ladder.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1452,
    name: 'One Leg FL | Supinated Fingertip (Bar)',
    alt: 'Underhand fingertip one-leg FL · supinated open-hand single-leg FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 9.0,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 6,
    kcalPerRep: [0.50, 0.66],
    desc: 'A one-leg front lever held with a supinated grip on fingertips only. The extended lever arm of the one-leg position significantly raises the elbow and finger load from the advanced tuck stage. Risk is high; the asymmetric leg position also introduces a rotational demand on top of the already complex grip.',
    cues: 'Keep the hips square despite the asymmetric legs. The supinated fingertip grip offers no rotational security — any torque will open the grip. Prioritise hip levelness before adding lever length.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1453,
    name: 'Half Lay FL | Supinated Fingertip (Bar)',
    alt: 'Underhand fingertip half lay FL · supinated open-hand half-lay FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 10.6,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 7,
    kcalPerRep: [0.58, 0.76],
    desc: 'A half-lay front lever held with a supinated grip on fingertips only. At this stage the lever arm is nearly that of the full FL and the elbow joint is under extreme multi-axis stress — supination torque, biceps tendon load, finger flexor demand, and the full bodyweight cantilever simultaneously. A rare and high-risk preparatory step for the full supinated fingertip FL.',
    cues: 'This is only appropriate for athletes with zero elbow symptoms and years of supinated FL and fingertip FL training independently. The half-lay in supinated fingertip is not a standalone training goal — it is a stepping stone that must be approached with extreme caution.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── PRONATED FINGERTIP ON BAR — missing progression ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1460,
    name: 'Tuck FL | Fingertip (Bar)',
    alt: 'Fingertip tuck front lever · open-hand tuck FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 6.5,
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.37, 0.51],
    desc: 'A tuck front lever on a standard bar held entirely on fingertips — pronated (palms down), bar across the distal finger joints, no hook wrap. The tuck position makes the FL component accessible while the fingertip grip is the primary challenge. The entry point for building fingertip-specific FL strength on a standard bar, where the narrow 28mm diameter concentrates the load on a small contact area.',
    cues: 'Establish a pronated fingertip dead hang for 10+ seconds before attempting the tuck hold. Scapular depression must precede the tuck — do not try to pull the knees up without the shoulders already packed.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1461,
    name: 'Advanced Tuck FL | Fingertip (Bar)',
    alt: 'Fingertip advanced tuck FL · open-hand adv tuck FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 7.6,
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.43, 0.58],
    desc: 'An advanced tuck front lever (back flat, hips level with bar) held on pronated fingertips on a standard bar. The flattened back substantially increases the horizontal lever arm and the finger flexor demand relative to the rounded tuck. A key intermediate in the fingertip FL ladder.',
    cues: 'The transition from rounded to flat back is the hardest part of this progression. Ensure the back is genuinely flat — not arched — before adding time or moving to the one-leg stage.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1462,
    name: 'One Leg FL | Fingertip (Bar)',
    alt: 'Fingertip one-leg FL · open-hand single-leg FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 8.6,
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.48, 0.65],
    desc: 'A one-leg front lever (one leg extended, one tucked) held on pronated fingertips on a standard bar. The asymmetric leg position extends the effective lever arm while keeping the full FL moment at bay. At this stage finger flexor fatigue begins to become a meaningful performance ceiling alongside the lever strength demand.',
    cues: 'Keep the hips square against any rotational pull from the asymmetric legs. If the grip starts to open, the hips will rotate — watch for both simultaneously.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1463,
    name: 'Half Lay FL | Fingertip (Bar)',
    alt: 'Fingertip half-lay FL · open-hand half-lay FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 10.0,
    risk: 4,
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 7,
    kcalPerRep: [0.57, 0.74],
    desc: 'A half-lay front lever (legs together, knees bent roughly 45°) held on pronated fingertips on a standard bar. The lever arm is nearly that of the full FL, and the finger flexors are now sustaining a near-maximal horizontal body hold. Direct preparation for the full FL fingertip hold on a standard bar.',
    cues: 'The fingertips will fatigue before the lats at this level. Train the grip endurance component separately with fingertip dead hangs at increasing durations before attempting the half-lay.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── FINGERTIP ON PARALLETTES — missing progression ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1470,
    name: 'Tuck FL | Fingertip (Parallettes)',
    alt: 'Fingertip tuck front lever parallettes · open-hand tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 6.3,
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.37, 0.50],
    desc: 'A tuck front lever on parallettes held entirely on fingertips — bar resting across distal finger joints in a neutral wrist orientation. The neutral wrist removes the pronation torque of the standard bar version, making this the most comfortable fingertip FL entry point. Parallette handles are typically thicker than a standard bar, spreading the load across a larger contact area. The best starting point for fingertip FL work for most athletes.',
    cues: 'Parallette fingertip dead hangs first. The neutral wrist position means no wrist extensor fatigue — focus entirely on the finger pad contact and scapular depression.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1471,
    name: 'Advanced Tuck FL | Fingertip (Parallettes)',
    alt: 'Fingertip advanced tuck FL parallettes · open-hand adv tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 7.4,
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.42, 0.57],
    desc: 'An advanced tuck front lever (back flat) on parallettes held on fingertips only, neutral wrist orientation. The flat back increases the lever demand substantially. The parallette setup continues to spare the wrist relative to the bar version.',
    cues: 'Flatten the back fully before adding time. The finger pads will feel more pressure as the back flattens — this is normal and expected.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1472,
    name: 'One Leg FL | Fingertip (Parallettes)',
    alt: 'Fingertip one-leg FL parallettes · open-hand single-leg FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 8.4,
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.47, 0.64],
    desc: 'A one-leg front lever on parallettes held on fingertips. The asymmetric leg position increases the effective lever arm while the neutral-grip handles continue to spare the wrist. At this stage the finger flexor demand begins to match the lat demand for most athletes.',
    cues: 'Extended leg fully locked, tucked knee pulled in. Watch for hip rotation — the handles do not rotate on parallettes so any rotation will be visible as body tilt rather than wrist roll.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1473,
    name: 'Half Lay FL | Fingertip (Parallettes)',
    alt: 'Fingertip half-lay FL parallettes · open-hand half-lay FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 9.8,
    risk: 4,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 7,
    kcalPerRep: [0.56, 0.73],
    desc: 'A half-lay front lever on parallettes held on fingertips. The lever arm is nearly full FL magnitude and finger flexor fatigue now sets the ceiling. The neutral wrist remains an advantage over the bar version at this level where joint stress is high.',
    cues: 'Knees only slightly bent. Body flat. The fingertip contact must remain on the distal pads throughout — any creeping toward the knuckle means the grip is degrading.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── FINGERTIP ON RINGS — full 6-stage progression ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1480,
    name: 'Tuck FL | Fingertip (Rings)',
    alt: 'Fingertip tuck front lever rings · open-hand tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 7.5,
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.40, 0.55],
    desc: 'A tuck front lever on gymnastic rings held on fingertips — the rings rest across the distal finger joints with no hook wrap. The rings add a rotational instability to the standard fingertip demand: as the ring spins freely, the wrist must actively resist rotation while the fingers maintain contact. Even at the tuck level, this combination of instability and grip limitation is extremely challenging.',
    cues: 'Lock the rings as vertically as possible before attempting the fingertip hold — any outward flare immediately increases the instability. Turn the rings out to parallel or slightly supinated to find the most stable fingertip contact angle.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1481,
    name: 'Advanced Tuck FL | Fingertip (Rings)',
    alt: 'Fingertip advanced tuck FL rings · open-hand adv tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 8.8,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 6,
    kcalPerRep: [0.48, 0.65],
    desc: 'An advanced tuck front lever on rings held on fingertips only. The flat back position increases the lever arm and the rotational instability of the rings becomes harder to control without the security of a hook grip. The wrist must simultaneously manage the ring rotation, the pronation load, and the open-hand finger demand.',
    cues: 'Only progress from the tuck version when the tuck in fingertip-rings feels truly stable. The advanced tuck on rings fingertips is a significant jump — there is no grace period on ring rotation if the grip fails.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1482,
    name: 'One Leg FL | Fingertip (Rings)',
    alt: 'Fingertip one-leg FL rings · open-hand single-leg FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 9.8,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 6,
    kcalPerRep: [0.53, 0.70],
    desc: 'A one-leg front lever on rings held on fingertips. The asymmetric leg position introduces a rotational body torque that the rings cannot resist passively — only the finger and wrist system, combined with lat activation, prevents both ring spin and hip tilt. One of the most complex bodyweight skill demands in the FL fingertip ladder.',
    cues: 'Square the hips aggressively from the first moment. Ring rotation and hip rotation reinforce each other — once either starts, the other follows. Stop and reset rather than fighting both simultaneously.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 1483,
    name: 'Straddle FL | Fingertip (Rings)',
    alt: 'Fingertip straddle FL rings · open-hand straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 10.8,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 7,
    kcalPerRep: [0.58, 0.76],
    desc: 'A straddle front lever on rings held on fingertips. The straddled legs open to reduce the lever arm, allowing the grip and ring stability components to be the primary challenge rather than the FL strength itself. Even so, the wrist rotation demands of the free-spinning rings combined with the open-hand finger contact make this elite territory. A genuine benchmark in the fingertip-on-rings FL progression.',
    cues: 'Spread the legs to a comfortable straddle width — wider is easier for the FL, but at this level the grip is already the bottleneck. Turn the rings to a neutral or slightly supinated angle to find the most stable contact point for the fingertip pads.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1484,
    name: 'Half Lay FL | Fingertip (Rings)',
    alt: 'Fingertip half-lay FL rings · open-hand half-lay FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 11.8,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 8,
    kcalPerRep: [0.64, 0.84],
    desc: 'A half-lay front lever on rings held on fingertips — legs together with knees slightly bent, on free-spinning rings with no hook wrap. The lever arm is near-maximal and the ring instability is unmitigated by any leg position advantage. The finger flexors, wrist stabilisers, and ring control system are all at or near their absolute limits simultaneously. Documented performances are extremely rare.',
    cues: 'Only attempt after the straddle fingertip rings is a controlled hold. The half-lay removes the leg-spread safety margin — every joint is now at a higher fraction of its maximum load than in the straddle.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1485,
    name: 'Front Lever | Fingertip (Rings)',
    alt: 'Fingertip full front lever rings · open-hand FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 12.5,
    hof: true,
    risk: 5,
    joints: {fingers:4, wrist:5, elbow:3, shoulder:6, neck:2, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 9,
    kcalPerRep: [0.68, 0.88],
    desc: 'A full front lever on gymnastic rings held entirely on fingertips — body completely horizontal, face up, legs together, rings resting across the distal finger joints with no hook wrap. Every variable is at its maximum simultaneously: full FL lever arm, free-spinning ring instability, and complete absence of grip security. No verified public performance is known to exist. The absolute pinnacle of the fingertip FL and ring FL ladders combined.',
    cues: 'No standalone training prescription. Both the Full FL on rings (with full grip) and the Full FL fingertip on bar must be well-established before this can even be considered. The combination of two elite-tier prerequisites makes this a theoretical endpoint.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── 4-FINGER FL — missing progression (Tuck / AdvTuck / OneLeg / HalfLay) ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1500,
    name: 'Tuck FL | 4-Finger (Bar)',
    alt: '4-finger tuck front lever · no-thumb tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 6.6,
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.37, 0.51],
    desc: 'A tuck front lever held with four fingers only — index, middle, ring, and pinky on the bar, thumb deliberately raised. The tuck reduces the FL lever demand to a manageable level, making this the ideal entry point for the 4-finger FL ladder. The absence of thumb opposition removes the grip stabilisation that a hook grip provides, increasing per-joint load on each finger flexor tendon.',
    cues: 'Establish the 4-finger dead hang and the 4-finger pull-up before attempting this. Tuck first, depress the scapulae second, then hold. Thumb raised means raised — check in a mirror on first attempts.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1501,
    name: 'Advanced Tuck FL | 4-Finger (Bar)',
    alt: '4-finger advanced tuck FL · no-thumb adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 7.7,
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.43, 0.58],
    desc: 'An advanced tuck front lever (back flat, hips at bar height) held with four fingers only. The flat back substantially increases the lever demand relative to the rounded tuck, and the four-finger load rises proportionally. A critical intermediate in the 4-finger FL ladder.',
    cues: 'Only progress from the rounded tuck once the hold is stable for 3+ seconds. The flat back in 4-finger grip is a meaningful jump — take it seriously.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1502,
    name: 'One Leg FL | 4-Finger (Bar)',
    alt: '4-finger one-leg FL · no-thumb single-leg FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 8.7,
    risk: 4,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.48, 0.65],
    desc: 'A one-leg front lever held with four fingers only. The asymmetric legs increase the effective lever arm and introduce a rotational tendency that must be resisted entirely through core and lat activation — the 4-finger grip provides zero rotational counter.',
    cues: 'Square the hips before initiating the hold. Without the thumb, any rotation is unrecoverable — the grip will open. Reset to tuck if rotation appears.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1503,
    name: 'Half Lay FL | 4-Finger (Bar)',
    alt: '4-finger half-lay FL · no-thumb half-lay FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 10.1,
    risk: 4,
    joints: {fingers:4, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 6,
    kcalPerRep: [0.56, 0.73],
    desc: 'A half-lay front lever held with four fingers. The near-full lever arm means the four finger flexors are sustaining close to the maximum load they will face in this ladder. Direct preparation for the 4-finger full FL.',
    cues: 'The finger flexor tendons are the bottleneck here. Stop well before failure — a missed 4-finger hold from tendon fatigue at near-full lever can mean weeks of recovery.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── 3-FINGER FL — missing progression ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1510,
    name: 'Tuck FL | 3-Finger (Bar)',
    alt: '3-finger tuck front lever · index-middle-ring tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 7.2,
    risk: 4,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 4,
    kcalPerRep: [0.38, 0.52],
    desc: 'A tuck front lever on three fingers — index, middle, and ring only, pinky and thumb raised. Six finger joints total bear the load. The tuck provides the necessary lever reduction to make this achievable, and is the mandatory first stage in the 3-finger FL progression. Preconditioned 3-finger tendon strength from pulling work is essential before attempting.',
    cues: 'The 3-Finger Pull-Up and 4-Finger Tuck FL are both prerequisites. Never attempt 3-finger FL work cold. Warm up with 3-finger dead hangs in a vertical orientation first, then transfer to the FL position.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1511,
    name: 'Advanced Tuck FL | 3-Finger (Bar)',
    alt: '3-finger advanced tuck FL · index-middle-ring adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 8.3,
    risk: 4,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.45, 0.61],
    desc: 'An advanced tuck front lever (back flat) on three fingers. Six joints sustain a meaningfully larger per-joint load as the back flattens and the lever arm lengthens from the rounded tuck. At this stage every rep should be treated with the care of a max-effort set.',
    cues: 'One or two quality holds per session maximum. 3-finger tendon conditioning operates on a longer recovery cycle than lat strength — do not increase volume week to week without a matching increase in recovery.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1512,
    name: 'One Leg FL | 3-Finger (Bar)',
    alt: '3-finger one-leg FL · index-middle-ring single-leg FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 9.4,
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 6,
    kcalPerRep: [0.51, 0.68],
    desc: 'A one-leg front lever on three fingers only. The asymmetric leg position increases the lever arm and the rotational tendency while the grip offers no redundancy — if a single finger loses contact the hold ends. Risk is high at this stage and only athletes with a long history of 3-finger FL training should attempt it.',
    cues: 'Square the hips before anything else. A rotation with three fingers on a bar is unrecoverable. Keep sessions to a single quality attempt with full rest.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1513,
    name: 'Half Lay FL | 3-Finger (Bar)',
    alt: '3-finger half-lay FL · index-middle-ring half-lay FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip'],
    diff: 10.8,
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 7,
    kcalPerRep: [0.58, 0.76],
    desc: 'A half-lay front lever on three fingers — near-full lever arm, six joints bearing maximum load. This is the penultimate step before the full 3-finger FL and among the most extreme grip-FL combinations a human can perform. Long-term conditioning and zero acute finger symptoms are mandatory.',
    cues: 'The half-lay in 3-finger grip should be approached as a test, not a training exercise. Assess once every 2–3 weeks maximum. If there is any finger flexor soreness, postpone.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── 2-FINGER FL — missing progression ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1520,
    name: 'Tuck FL | 2-Finger (Bar)',
    alt: '2-finger tuck front lever · index-middle tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 8.2,
    hof: false,
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 5,
    kcalPerRep: [0.42, 0.58],
    desc: 'A tuck front lever on two fingers per hand — index and middle only, all others raised. Four finger joints in total sustain the load. Even with the tuck reducing the FL component, the per-joint finger stress is extreme and places this firmly in elite grip-specialist territory. The entry point for the 2-finger FL ladder, requiring the 3-finger tuck FL and the 2-finger pull-up as hard prerequisites.',
    cues: 'Never attempt without a fully established 3-finger Tuck FL and a 2-Finger Pull-Up. The two-finger tuck FL is not a beginner-of-advanced movement — it is the top of a very long progression. Build 2-finger dead hangs specifically in the supine FL orientation before adding the tuck.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1521,
    name: 'Advanced Tuck FL | 2-Finger (Bar)',
    alt: '2-finger advanced tuck FL · index-middle adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 9.4,
    hof: false,
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:2, shoulder:5, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 2, strength: 6,
    kcalPerRep: [0.50, 0.67],
    desc: 'An advanced tuck front lever (back flat) on two fingers. The flattening of the back significantly increases per-joint load on the two remaining fingers. At this stage the finger flexors are working at or near their absolute maximum even for athletes with extensive 2-finger conditioning. A true elite movement even in its tuck form.',
    cues: 'Progress from the rounded 2-finger tuck only when that hold is stable for 3+ seconds with no finger discomfort. The advanced tuck jump is large in 2-finger FL work. Monthly progression is fast here.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1522,
    name: 'One Leg FL | 2-Finger (Bar)',
    alt: '2-finger one-leg FL · index-middle single-leg FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 10.6,
    risk: 5,
    joints: {fingers:5, wrist:3, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 2, strength: 7,
    kcalPerRep: [0.56, 0.74],
    desc: 'A one-leg front lever on two fingers per hand. The asymmetric leg position increases the lever arm and introduces a rotational tendency with no grip redundancy to absorb it. Verified performances are extraordinarily rare. The gap between the 2-finger advanced tuck and the 2-finger one-leg FL is enormous and should be treated as a multi-month progression.',
    cues: 'The hip squaring cue is non-negotiable. With two fingers, any rotation that is not immediately corrected by core and lat tension will open the grip completely. Attempt only in a fully fresh state.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1523,
    name: 'Half Lay FL | 2-Finger (Bar)',
    alt: '2-finger half-lay FL · index-middle half-lay FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 12.2,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 2, strength: 8,
    kcalPerRep: [0.65, 0.85],
    desc: 'A half-lay front lever on two fingers per hand — near-full lever arm, four joints sustaining maximum load. One of the most extreme upper-body strength feats achievable on a bar. Documented performances are practically nonexistent. The preparatory step before the full 2-finger FL, itself a legendary achievement.',
    cues: 'No training prescription beyond establishing the 2-finger one-leg FL first. This is an assessment movement at this level — not a training exercise to be performed in volume.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── 1-FINGER FL — missing progression ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1530,
    name: 'Tuck FL | 1-Finger (Bar)',
    alt: '1-finger tuck front lever · single-finger tuck FL · index tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 10.0,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:3, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 2, strength: 6,
    kcalPerRep: [0.48, 0.65],
    desc: 'A tuck front lever on one finger per hand — index finger only, all others raised. Two joints in total bear the full body load, even with the tuck reducing the lever. Even at the tuck level this is an almost theoretical human performance limit. The tuck stage is included as the only realistic entry point into the 1-finger FL ladder and as a reference for athletes who have completed the 2-finger tuck FL and want to understand the next frontier.',
    cues: 'No athlete-facing prescription. The 2-finger tuck FL and the 1-finger pull-up are both required. This is included for completeness of the progression matrix, not as a routine training target.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1531,
    name: 'Advanced Tuck FL | 1-Finger (Bar)',
    alt: '1-finger advanced tuck FL · single-finger adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 11.5,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:3, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 2, strength: 7,
    kcalPerRep: [0.55, 0.73],
    desc: 'An advanced tuck front lever (back flat) on one finger per hand. Two joints bear the full lever load of a flat-back FL position. This movement sits at the absolute frontier of documented human grip strength. No verified performances of the flat-back version are publicly known.',
    cues: 'The 1-finger tuck FL must be an established hold. The jump to flat-back is significant even in standard grip — in one-finger it is enormous. Treat as a once-per-month assessment at most.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1532,
    name: 'One Leg FL | 1-Finger (Bar)',
    alt: '1-finger one-leg FL · single-finger single-leg FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 13.0,
    pantheon: false,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 2, strength: 8,
    kcalPerRep: [0.62, 0.82],
    desc: 'A one-leg front lever on one finger per hand. A movement that exists at the theoretical edge of human biomechanical possibility. Included for completeness of the 1-finger FL progression matrix. Attempting this without being the absolute world standard in both 1-finger pulling and full front lever is not just inadvisable — it is anatomically dangerous.',
    cues: 'No prescription.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1533,
    name: 'Half Lay FL | 1-Finger (Bar)',
    alt: '1-finger half-lay FL · single-finger half-lay FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'elite'],
    diff: 14.2,
    pantheon: false,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:5, si:2, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 2, strength: 9,
    kcalPerRep: [0.74, 0.96],
    desc: 'A half-lay front lever on one finger per hand — near-full lever arm, two joints sustaining the entire load. Included as the penultimate step in the 1-finger FL progression matrix. Whether this is physically achievable by any human remains unconfirmed. The theoretical second-hardest grip-FL combination in existence.',
    cues: 'No prescription.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ══════════════════════════════════════════════════════════════════════
     ONE ARM FRONT LEVER — FULL PROGRESSION MATRIX
     Base: _flOneArm (id:22) is the full bar version.
     Here we add: bar progression (tuck/adv/straddle leading up to id:22),
     parallettes full progression, rings full progression.
     ══════════════════════════════════════════════════════════════════════ */

  /* ── ONE ARM FL — BAR PROGRESSION (leading up to id:22) ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 1600,
    name: 'Tuck FL | One Arm (Bar)',
    alt: 'One arm tuck front lever · single arm tuck FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques'],
    diff: 10.5,
    risk: 5,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:6, neck:1, thoracic:3, lowerBack:4, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 7,
    kcalPerRep: [0.52, 0.70],
    desc: 'A tuck front lever supported by a single arm on a bar — the free arm held at the side or behind the back, knees pulled to the chest. The tuck dramatically shortens the lever arm, making one-arm FL training accessible while the unilateral shoulder, lat, and oblique load remains enormous. The entry point of the one-arm front lever progression and one of the hardest tuck-position exercises in calisthenics.',
    cues: 'Build unilateral FL strength via one-arm FL rows and assisted one-arm holds with a band before attempting this. Keep the hips perfectly level — the obliques on the working side are the primary anti-rotation mechanism. Free arm should be relaxed, not gripping anything.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1601,
    name: 'Advanced Tuck FL | One Arm (Bar)',
    alt: 'One arm advanced tuck front lever · single arm adv tuck FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques'],
    diff: 11.8,
    risk: 5,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 8,
    kcalPerRep: [0.60, 0.78],
    desc: 'An advanced tuck front lever (back flat, hips at bar height) held with a single arm. The flattened back increases the lever arm substantially versus the rounded tuck, and the unilateral load on the shoulder and thoracic spine escalates significantly. The obliques must work harder to prevent the greater rotation tendency from the longer lever.',
    cues: 'The flat-back position with one arm is a major jump from the tuck. Only progress when the tuck one-arm FL is stable for 3+ seconds. The tendency to tilt toward the free side increases as the back flattens — resist it actively with the obliques, not the free hand.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1602,
    name: 'Straddle FL | One Arm (Bar)',
    alt: 'One arm straddle front lever · single arm straddle FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques'],
    diff: 13.0,
    risk: 5,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:2, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 9,
    kcalPerRep: [0.68, 0.88],
    desc: 'A straddle front lever supported by a single arm — legs spread to reduce lever length, body horizontal, free arm at the side. The straddle provides only a moderate lever reduction at this level; the unilateral shoulder and lat demand is still elite by any standard. The direct prerequisite for the full one-arm front lever.',
    cues: 'Straddle width is a training variable — wider is slightly easier. Keep hips square and horizontal; the asymmetric support arm creates a powerful rotation tendency that only the obliques and core can counter. Train both arms equally from the start.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── ONE ARM FL — PARALLETTES (Tuck → Adv Tuck → Straddle → Full) ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 1610,
    name: 'Tuck FL | One Arm (Parallettes)',
    alt: 'One arm tuck front lever parallettes · single arm tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'parallettes'],
    diff: 10.8,
    risk: 5,
    joints: {fingers:3, wrist:2, elbow:2, shoulder:6, neck:1, thoracic:3, lowerBack:4, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 7,
    kcalPerRep: [0.54, 0.72],
    desc: 'A tuck front lever on parallettes held with a single arm — the free arm at the side, knees tucked, one hand gripping a parallette handle in neutral wrist orientation. The neutral wrist spares the forearm rotators compared to the bar, but the unilateral shoulder and oblique demand is identical in magnitude. The parallette setup also raises the body slightly, giving more clearance for the tucked knee position.',
    cues: 'The neutral-grip handle gives a small wrist advantage but changes nothing about the lat and oblique requirement. Depress the working-side scapula maximally before attempting the tuck hold.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1611,
    name: 'Advanced Tuck FL | One Arm (Parallettes)',
    alt: 'One arm advanced tuck FL parallettes · single arm adv tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'parallettes'],
    diff: 12.0,
    risk: 5,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 8,
    kcalPerRep: [0.62, 0.80],
    desc: 'An advanced tuck front lever (back flat) on parallettes held with a single arm. The neutral-grip handle marginally reduces wrist stress versus the bar, but the flat-back unilateral position remains one of the most demanding isometric strength tests achievable on parallettes.',
    cues: 'Same cues as the bar version — the parallette advantage is wrist comfort only. Do not let the neutral grip create a false sense of security about the shoulder and oblique demand.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1612,
    name: 'Straddle FL | One Arm (Parallettes)',
    alt: 'One arm straddle FL parallettes · single arm straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'parallettes'],
    diff: 13.2,
    risk: 5,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:2, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 9,
    kcalPerRep: [0.70, 0.90],
    desc: 'A straddle front lever on parallettes held with a single arm. The fixed neutral-grip handle provides slightly more wrist comfort than the bar version, which can marginally extend the hold duration. An elite-level one-arm FL movement with all the same rotation and lateral demands as the bar equivalent.',
    cues: 'Straddle wide enough that the FL component is not the limiting factor — the one-arm stability should be the challenge. Keep hips square and level throughout.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1613,
    name: 'Front Lever | One Arm (Parallettes)',
    alt: 'One arm full front lever parallettes · single arm FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'parallettes'],
    diff: 14.6,
    hof: true,
    risk: 5,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:5, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 9,
    kcalPerRep: [0.76, 0.99],
    desc: 'A full front lever on parallettes held with a single arm — body completely horizontal, face up, legs together, one hand on a neutral-grip parallette handle, free arm at the side. Matches the bar full one-arm FL in strength demand with the minor wrist advantage of the neutral grip. An elite calisthenics benchmark. The parallette version is preferred by some athletes for long-term training due to reduced wrist fatigue.',
    cues: 'A full FL on parallettes with two arms and the tuck one-arm FL on parallettes must both be well established. All the cues of the standard one-arm FL apply — scapular depression, oblique anti-rotation, hip leveling.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── ONE ARM FL — RINGS (Tuck → Adv Tuck → Straddle → Full) ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 1620,
    name: 'Tuck FL | One Arm (Rings)',
    alt: 'One arm tuck front lever rings · single arm tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'rings'],
    diff: 11.5,
    risk: 5,
    joints: {fingers:3, wrist:4, elbow:3, shoulder:7, neck:1, thoracic:3, lowerBack:4, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 4, strength: 8,
    kcalPerRep: [0.56, 0.75],
    desc: 'A tuck front lever on gymnastic rings held with a single arm — the ring spinning freely, free arm at the side, knees tucked to the chest. The ring adds an entirely new dimension of instability on top of the one-arm demand: the wrist must simultaneously resist ring rotation and provide the sole support point for the body. Even at the tuck level this is an extraordinary combination of strength and stability demands. One of the hardest tuck-position exercises that exists.',
    cues: 'Turn the ring to a neutral or slightly supinated position before gripping. Any outward flare of the ring dramatically increases the instability. The working-side wrist must be actively controlled — do not let the ring drift into external rotation as the body weight increases.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1621,
    name: 'Advanced Tuck FL | One Arm (Rings)',
    alt: 'One arm advanced tuck FL rings · single arm adv tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'rings'],
    diff: 12.8,
    risk: 5,
    joints: {fingers:3, wrist:4, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:5, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 4, strength: 8,
    kcalPerRep: [0.64, 0.84],
    desc: 'An advanced tuck front lever (back flat) on rings with a single arm. The flat back increases lever length and shoulder torque significantly, while the freely rotating ring remains completely unmitigated. The wrist and shoulder on the working side are simultaneously managing ring anti-rotation, lateral anti-tilt, and the full horizontal lever load. Documented performances at this stage are extremely rare.',
    cues: 'Only progress from the tuck ring version when it feels genuinely stable. The flat-back jump on rings in one arm is larger than in any bar or parallette equivalent. Control the ring orientation at all times — it will try to rotate outward.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1622,
    name: 'Straddle FL | One Arm (Rings)',
    alt: 'One arm straddle FL rings · single arm straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'rings'],
    diff: 14.0,
    risk: 5,
    joints: {fingers:3, wrist:4, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:2, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 4, strength: 9,
    kcalPerRep: [0.72, 0.94],
    desc: 'A straddle front lever on rings held with a single arm — legs spread, body horizontal, one hand in a free-spinning ring, free arm at the side. Combines three of the hardest FL modifiers simultaneously: one arm, rings instability, and a near-full lever arm. A movement at the very edge of documented human performance. Verified performances are essentially nonexistent in public records.',
    cues: 'No standard training prescription exists for this combination. The straddle one-arm FL on bar and the straddle FL on rings with two arms must both be elite-level holds before this can be considered. The ring rotation and hip rotation are mutually reinforcing — losing control of one immediately accelerates the other.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1623,
    name: 'Front Lever | One Arm (Rings)',
    alt: 'One arm full front lever rings · single arm FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'rings'],
    diff: 15.5,
    hof: true,
    pantheon: false,
    risk: 5,
    joints: {fingers:3, wrist:5, elbow:4, shoulder:7, neck:2, thoracic:5, lowerBack:6, si:3, hip:5, groin:0, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 4, strength: 10,
    kcalPerRep: [0.82, 1.05],
    desc: 'A full front lever on gymnastic rings held with a single arm — body completely horizontal, face up, legs together, one hand in a free-spinning ring. The absolute pinnacle of front lever performance: every axis of difficulty simultaneously at maximum. Full lever arm, one-arm unilateral load, ring instability with no fixed axis, and no grip redundancy. No verified public performance of a held version is known to exist. The theoretical ceiling of the entire front lever family.',
    cues: 'No training prescription. This is the logical confluence of two separately elite movement ceilings — the one-arm FL and the FL on rings — applied simultaneously. Both must be independently verified elite-level before this is even theoretically approachable.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ══════════════════════════════════════════════════════════════════════
     ONE ARM FINGERTIP FL — FULL PROGRESSION × ALL EQUIPMENT
     The intersection of one-arm FL, fingertip grip, and equipment choice.
     These are theoretical/benchmark entries at the extreme end.
     ══════════════════════════════════════════════════════════════════════ */

  /* ── ONE ARM FINGERTIP — BAR ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 1700,
    name: 'Tuck FL | One Arm Fingertip (Bar)',
    alt: 'One arm fingertip tuck front lever · single arm open-hand tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques'],
    diff: 12.5,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:4, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 8,
    kcalPerRep: [0.60, 0.80],
    desc: 'A tuck front lever on a bar held with a single arm on fingertips only — index, middle, ring, and pinky on the bar with no hook wrap, thumb raised, free arm at the side. Combines the one-arm FL demand with the open-hand fingertip grip: two independently elite prerequisites applied simultaneously. Even at the tuck lever stage this is a movement at the outer boundary of documented human performance. The finger flexors, working-side lat, and obliques are all at near-maximum output simultaneously.',
    cues: 'Both the tuck one-arm FL with full grip and the tuck FL in fingertip (bar) must be well established before approaching this. This is not a training exercise for most athletes — it is a benchmark.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1701,
    name: 'Advanced Tuck FL | One Arm Fingertip (Bar)',
    alt: 'One arm fingertip advanced tuck FL · single arm open-hand adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques'],
    diff: 13.8,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:3, shoulder:6, neck:1, thoracic:4, lowerBack:5, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 3, strength: 9,
    kcalPerRep: [0.68, 0.88],
    desc: 'An advanced tuck front lever (back flat) held with a single arm on fingertips only. The flat-back position increases the lever arm and significantly raises both the one-arm shoulder demand and the per-finger tendon load. No verified performance is known to exist. Included as a progression reference point between the tuck and straddle one-arm fingertip FL.',
    cues: 'No standalone training prescription. Both prerequisites (adv tuck one-arm FL and adv tuck fingertip FL on bar) must be independently established. The finger flexors and working-side shoulder are both near-absolute limits simultaneously.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1702,
    name: 'Straddle FL | One Arm Fingertip (Bar)',
    alt: 'One arm fingertip straddle FL · single arm open-hand straddle FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques'],
    diff: 14.8,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:2, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 3, strength: 9,
    kcalPerRep: [0.76, 0.98],
    desc: 'A straddle front lever on a bar held with a single arm on fingertips only. Three elite modifiers combined: one-arm support, open-hand fingertip grip, and near-full lever arm. A purely theoretical movement at present. Included as the near-pinnacle of the one-arm fingertip FL ladder.',
    cues: 'No prescription.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1703,
    name: 'Front Lever | One Arm Fingertip (Bar)',
    alt: 'One arm fingertip full front lever · single arm open-hand FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques'],
    diff: 16.0,
    hof: true,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:4, shoulder:7, neck:2, thoracic:5, lowerBack:6, si:3, hip:5, groin:0, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 3, strength: 10,
    kcalPerRep: [0.84, 1.08],
    desc: 'A full front lever on a bar held with a single arm on fingertips only — body completely horizontal, face up, legs together, four finger pads on the bar with no hook, free arm at side. The hardest bar-based front lever variant conceivable: full lever arm, one-arm unilateral load, and open-hand fingertip grip simultaneously. A movement that defines the theoretical upper ceiling of human bar strength. No verified performance exists or is likely to exist.',
    cues: 'No prescription.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── ONE ARM FINGERTIP — PARALLETTES ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 1710,
    name: 'Tuck FL | One Arm Fingertip (Parallettes)',
    alt: 'One arm fingertip tuck FL parallettes · single arm open-hand tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'parallettes'],
    diff: 12.3,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:4, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 8,
    kcalPerRep: [0.60, 0.80],
    desc: 'A tuck front lever on parallettes held with a single arm on fingertips only — neutral wrist, bar across distal finger joints, no hook wrap, free arm at side. The neutral grip spares the wrist relative to the bar version, but the one-arm and open-hand finger demands are unchanged. The most structurally forgiving entry point in the one-arm fingertip FL matrix.',
    cues: 'Build fingertip parallette dead hangs with one arm before attempting the FL hold. The neutral wrist advantage is real but marginal at this difficulty level.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1711,
    name: 'Advanced Tuck FL | One Arm Fingertip (Parallettes)',
    alt: 'One arm fingertip advanced tuck FL parallettes · single arm open-hand adv tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'parallettes'],
    diff: 13.6,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:3, shoulder:6, neck:1, thoracic:4, lowerBack:5, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 3, strength: 9,
    kcalPerRep: [0.68, 0.88],
    desc: 'An advanced tuck front lever (back flat) on parallettes held with a single arm on fingertips. The wrist benefit of the neutral grip is the only meaningful structural difference from the bar version. Every other demand is near-identical. A theoretical benchmark.',
    cues: 'No prescription beyond establishing the tuck version first.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1712,
    name: 'Straddle FL | One Arm Fingertip (Parallettes)',
    alt: 'One arm fingertip straddle FL parallettes · single arm open-hand straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'parallettes'],
    diff: 14.6,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:2, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 3, strength: 9,
    kcalPerRep: [0.76, 0.98],
    desc: 'A straddle front lever on parallettes held with a single arm on fingertips. The parallette neutral grip is the sole structural concession — the combined one-arm, open-hand, and near-full-lever demands remain at the extreme upper end of human physical capacity.',
    cues: 'No prescription.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1713,
    name: 'Front Lever | One Arm Fingertip (Parallettes)',
    alt: 'One arm fingertip full front lever parallettes · single arm open-hand FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'parallettes'],
    diff: 15.8,
    hof: true,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:7, neck:2, thoracic:5, lowerBack:6, si:3, hip:5, groin:0, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 3, strength: 10,
    kcalPerRep: [0.84, 1.08],
    desc: 'A full front lever on parallettes held with a single arm on fingertips only — body completely horizontal, face up, legs together, one hand on a neutral-grip parallette handle on fingertip contact only, free arm at side. The neutral wrist makes this marginally more structurally sound than the bar version, but the combined demands still define the outermost theoretical limit of parallette front lever performance.',
    cues: 'No prescription.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── ONE ARM FINGERTIP — RINGS ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 1720,
    name: 'Tuck FL | One Arm Fingertip (Rings)',
    alt: 'One arm fingertip tuck FL rings · single arm open-hand tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'rings'],
    diff: 13.5,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:5, elbow:3, shoulder:7, neck:2, thoracic:3, lowerBack:4, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 4, strength: 8,
    kcalPerRep: [0.64, 0.84],
    desc: 'A tuck front lever on gymnastic rings held with a single arm on fingertips only — the ring resting across the distal finger joints with no hook wrap, free arm at side. The hardest tuck-position front lever variant: one-arm load, open-hand fingertip grip, and free-spinning ring instability simultaneously. Even at the tuck level this combination is at or beyond the current known frontier of human calisthenics performance. Included as the entry point of the rings one-arm fingertip FL matrix and as a theoretical benchmark.',
    cues: 'No viable training prescription exists. The tuck one-arm FL on rings and the tuck FL fingertip on rings must both be independently elite-level holds. The freely-spinning ring will try to rotate outward — the fingertip contact must counteract this with no mechanical advantage.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1721,
    name: 'Advanced Tuck FL | One Arm Fingertip (Rings)',
    alt: 'One arm fingertip adv tuck FL rings · single arm open-hand adv tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'rings'],
    diff: 14.8,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:5, elbow:4, shoulder:7, neck:2, thoracic:4, lowerBack:5, si:2, hip:3, groin:0, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 4, strength: 9,
    kcalPerRep: [0.72, 0.94],
    desc: 'An advanced tuck front lever (back flat) on rings held with a single arm on fingertips. The flat-back position removes the lever-arm concession of the tucked position while ring rotation, one-arm loading, and open-hand grip all remain. A purely theoretical movement that represents one of the hardest conceivable combinations of FL modifiers at a non-full-lever stage.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1722,
    name: 'Straddle FL | One Arm Fingertip (Rings)',
    alt: 'One arm fingertip straddle FL rings · single arm open-hand straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'rings'],
    diff: 16.0,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:5, elbow:4, shoulder:7, neck:2, thoracic:5, lowerBack:6, si:3, hip:4, groin:2, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 4, strength: 10,
    kcalPerRep: [0.80, 1.04],
    desc: 'A straddle front lever on rings held with a single arm on fingertips. Four modifiers simultaneously at near-maximum: one arm, fingertip open hand, rings instability, and a near-full lever arm. An entirely theoretical movement. No human is known to have performed this.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 1723,
    name: 'Front Lever | One Arm Fingertip (Rings)',
    alt: 'One arm fingertip full front lever rings · single arm open-hand FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'rings'],
    diff: 17.5,
    hof: true,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:5, elbow:5, shoulder:7, neck:2, thoracic:5, lowerBack:6, si:3, hip:5, groin:0, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 4, strength: 10,
    kcalPerRep: [0.88, 1.12],
    desc: 'A full front lever on gymnastic rings held with a single arm on fingertips only — body completely horizontal, face up, legs together, one hand with fingertip-only contact on a free-spinning ring, free arm at side. Every possible dimension of front lever difficulty at its absolute maximum simultaneously: full lever arm, one arm, open-hand fingertip grip, and unmitigated ring instability. The absolute theoretical ceiling of all human front lever performance. No verified performance exists and none is expected to exist. Included as the definitive end-point of the entire FL library.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ══════════════════════════════════════════════════════════════════════
     REMAINING EQUIPMENT GAPS
     Pinch grip on Parallettes/Rings, Supinated Fingertip on Rings,
     Wide/Close Grip on Rings.
     ══════════════════════════════════════════════════════════════════════ */

  /* ── PINCH GRIP ON PARALLETTES — full progression ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1800,
    name: 'Tuck FL | Pinch Grip (Parallettes)',
    alt: 'Pinch grip tuck FL parallettes · thumb-pinch tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 6.6,
    risk: 3,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.37, 0.51],
    desc: 'A tuck front lever on parallettes held with a pinch grip — thumb on one side of the handle, fingertips on the other, no hook wrap. The round parallette handle is typically thicker than a standard bar, making the pinch grip more comfortable and manageable at this entry-level stage. The best starting point for pinch-grip FL work for athletes who find the standard bar diameter too challenging.',
    cues: 'Thicker handles mean a wider pinch span — ensure your thumb can comfortably reach the opposite side of the handle before loading. The neutral wrist on parallettes removes one stress variable from the standard bar pinch version.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1801,
    name: 'Advanced Tuck FL | Pinch Grip (Parallettes)',
    alt: 'Pinch grip advanced tuck FL parallettes · thumb-pinch adv tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 7.6,
    risk: 3,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.43, 0.59],
    desc: 'An advanced tuck front lever (back flat) on parallettes in pinch grip. The flat back increases lever length and pinch load. The neutral wrist continues to provide a structural advantage over the bar version at this intermediate stage.',
    cues: 'Flatten the back fully before adding time. If the pinch slips as the back flattens, return to the tuck stage and build more thumb pad strength.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1802,
    name: 'One Leg FL | Pinch Grip (Parallettes)',
    alt: 'Pinch grip one-leg FL parallettes · thumb-pinch single-leg FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 8.6,
    risk: 3,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.47, 0.64],
    desc: 'A one-leg front lever on parallettes in pinch grip. The asymmetric legs increase the lever arm and introduce a rotation tendency. The fixed handles of the parallettes prevent any handle rotation, keeping the wrist load predictable and stable despite the body asymmetry.',
    cues: 'Square hips before loading the hold. The parallette handles will not rotate if you generate body torque, making this slightly more forgiving than the bar version for rotational control.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 1803,
    name: 'Straddle FL | Pinch Grip (Parallettes)',
    alt: 'Pinch grip straddle FL parallettes · thumb-pinch straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 9.4,
    risk: 4,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 6,
    kcalPerRep: [0.53, 0.70],
    desc: 'A straddle front lever on parallettes in pinch grip. The straddle reduces the lever arm while the pinch grip remains the primary challenge. The parallette handle thickness makes the pinch more reliable at this stage than on a standard bar.',
    cues: 'Straddle width is a lever variable — wider is easier. Pinch security on the thicker parallette handle should feel more stable than bar equivalents. If it does not, the thumb pad conditioning needs more work.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1804,
    name: 'Half Lay FL | Pinch Grip (Parallettes)',
    alt: 'Pinch grip half-lay FL parallettes · thumb-pinch half-lay FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 10.0,
    risk: 4,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 7,
    kcalPerRep: [0.57, 0.75],
    desc: 'A half-lay front lever on parallettes in pinch grip — near-full lever arm, neutral wrist, thumb-only opposing the handle. The lever is now almost at maximum and the pinch load is very high. Direct preparation for the full FL pinch on parallettes.',
    cues: 'The neutral wrist advantage narrows as the lever arm lengthens — at this stage the pinch load is the ceiling regardless of handle type. Keep the scapulae firmly depressed.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1805,
    name: 'Front Lever | Pinch Grip (Parallettes)',
    alt: 'Pinch grip full front lever parallettes · thumb-pinch FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 11.6,
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 8,
    kcalPerRep: [0.63, 0.83],
    desc: 'A full front lever on parallettes in pinch grip — body completely horizontal, legs together, neutral wrist, thumb and fingertips the only grip contact on the handles. The full lever arm places maximum load on the pinch system. The parallette handle thickness is the main advantage over the bar version at this stage. An elite-level grip-strength FL benchmark.',
    cues: 'A full FL on parallettes with full grip and a 30+ second pinch dead hang on the same handle are both prerequisites. Scapular depression and lat contraction are the primary position-keepers — the pinch provides no mechanical backup.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── PINCH GRIP ON RINGS — selected stages ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1810,
    name: 'Tuck FL | Pinch Grip (Rings)',
    alt: 'Pinch grip tuck FL rings · thumb-pinch tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 7.8,
    risk: 4,
    joints: {fingers:5, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.40, 0.55],
    desc: 'A tuck front lever on gymnastic rings held in pinch grip — thumb on one side of the ring, fingertips on the other, no hook wrap. The freely spinning ring adds a rotational instability on top of the standard pinch demand: any ring rotation must be resisted by the pinch contact alone, with no wrist hook to stabilise. A high-risk combination even at the tuck level.',
    cues: 'Lock the rings to vertical before gripping. The ring will try to spin toward external rotation — the thumb must actively resist this. Start with rings closer to vertical than you would normally, as the pinch provides no anti-spin security.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 1811,
    name: 'Straddle FL | Pinch Grip (Rings)',
    alt: 'Pinch grip straddle FL rings · thumb-pinch straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 10.6,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 7,
    kcalPerRep: [0.57, 0.75],
    desc: 'A straddle front lever on rings held in pinch grip — thumb and fingertips on the ring with no hook, legs spread, body horizontal. The combination of ring instability and pinch grip is extremely high-risk at the straddle lever stage. The ring will try to rotate as the body weight comes on, and the pinch is the only interface preventing it.',
    cues: 'Pre-load the pinch before the hold — do not let the ring settle after body weight is on it. The straddle reduces the FL component but does nothing to simplify the grip-stability interaction.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1812,
    name: 'Front Lever | Pinch Grip (Rings)',
    alt: 'Pinch grip full front lever rings · thumb-pinch FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 12.8,
    hof: true,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:3, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 9,
    kcalPerRep: [0.70, 0.92],
    desc: 'A full front lever on rings held in pinch grip — body completely horizontal, face up, legs together, rings gripped only by thumb and fingertips with no hook wrap. The free-spinning ring adds anti-rotation demand on top of an already-extreme pinch and full-FL load. A movement that sits at the frontier of documented human grip-FL performance. No verified performances are known.',
    cues: 'Both the full FL on rings with standard grip and the full FL pinch on bar must be established prerequisites. The ring rotation and pinch security interact — any ring drift ends the hold instantly.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── SUPINATED FINGERTIP ON RINGS — selected stages ── */

  entries.push(cloneExercise(_flTuck, {
    id: 1820,
    name: 'Tuck FL | Supinated Fingertip (Rings)',
    alt: 'Underhand fingertip tuck FL rings · supinated open-hand tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 8.5,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 5,
    kcalPerRep: [0.42, 0.58],
    desc: 'A tuck front lever on rings held with a supinated (underhand) grip on fingertips only. The ring rotation interacts with the supinated wrist position to create a uniquely complex joint load: the ring tries to spin toward pronation while the supinated wrist tries to resist, simultaneously loading the biceps tendon and the finger flexors. The highest-risk tuck FL grip combination.',
    cues: 'The supinated wrist on a free ring creates a force couple the moment body weight is applied — the ring will try to pull the wrist into pronation. Pre-set the wrist position firmly before the hold. Any elbow discomfort means stop immediately.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 1821,
    name: 'Straddle FL | Supinated Fingertip (Rings)',
    alt: 'Underhand fingertip straddle FL rings · supinated open-hand straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 11.2,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:6, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 7,
    kcalPerRep: [0.60, 0.78],
    desc: 'A straddle front lever on rings held with a supinated grip on fingertips. The near-full lever arm, biceps tendon load from supination, ring instability, and open-hand finger demand are all present simultaneously. Documented performances are essentially nonexistent. The straddle is used purely to make the lever component achievable — the grip system is at its absolute limit.',
    cues: 'No standard training path exists. Both the supinated fingertip straddle FL on bar and the straddle FL on rings must be established. Elbow health is the primary gating factor throughout.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1822,
    name: 'Front Lever | Supinated Fingertip (Rings)',
    alt: 'Underhand fingertip full FL rings · supinated open-hand FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 13.5,
    hof: true,
    risk: 5,
    joints: {fingers:4, wrist:5, elbow:5, shoulder:6, neck:2, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 9,
    kcalPerRep: [0.72, 0.96],
    desc: 'A full front lever on rings held with a supinated grip on fingertips only — body completely horizontal, palms up, rings on distal finger pads, free spinning. Every stress vector is at maximum: full FL, supinated elbow load, open-hand finger demand, ring instability. Purely theoretical. Included as the pinnacle of the supinated FL family.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── WIDE GRIP FL — RINGS ── */

  entries.push(cloneExercise(_flWideGrip, {
    id: 1830,
    name: 'Wide Grip FL | (Rings)',
    alt: 'Wide grip front lever rings · wide FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 10.0,
    risk: 5,
    joints: {fingers:3, wrist:4, elbow:2, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 4, strength: 7,
    kcalPerRep: [0.55, 0.73],
    desc: 'A front lever on rings with a wide grip — rings set wider than shoulder width, body horizontal, face up. The wide grip on free-spinning rings massively increases the shoulder abduction demand compared to the bar equivalent: not only is the lever arm longer laterally, but the rings will try to collapse inward as the body weight loads them. The athlete must actively press outward against the rings while maintaining the full FL position. Extremely rare and challenging.',
    cues: 'Set the rings to their widest stable position before loading. The outward press against ring collapse must be initiated the moment weight transfers to the rings — do not wait for the rings to drift in. Shoulder mobility and external rotation strength are the primary gatekeepers.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── CLOSE GRIP FL — RINGS ── */

  entries.push(cloneExercise(_flCloseGrip, {
    id: 1840,
    name: 'Close Grip FL | (Rings)',
    alt: 'Close grip front lever rings · narrow FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 10.0,
    risk: 5,
    joints: {fingers:3, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 4, strength: 7,
    kcalPerRep: [0.55, 0.73],
    desc: 'A front lever on rings with a close grip — rings positioned close together, inside shoulder width, body horizontal. The narrow ring setup creates inward torque at the wrist and elbow from the ring rotation tendency, and the rings will try to splay outward as the body weight presses down. The close grip FL on rings is arguably harder than the wide grip rings variant because the rings actively resist the close hand position.',
    cues: 'Keep the rings oriented vertically — any outward splay will immediately change the effective grip width and create unpredictable joint torques. The elbow is the most vulnerable joint here due to the combined close grip and ring rotation load.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));


  /* ══════════════════════════════════════════════════════════════════════
     REVERSE GRIP (SUPINATED) FL — FULL PROGRESSION
     Base _flReverseGrip (id:21) is the full FL on bar.
     Adding: Tuck → Adv Tuck → One Leg → Straddle → Half Lay on Bar,
     plus full 6-stage progression on Parallettes and Rings.
     High risk throughout: bicipital tendon load + elbow stress.
     ══════════════════════════════════════════════════════════════════════ */

  /* ── REVERSE GRIP — BAR PROGRESSION (leading into id:21) ── */

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1900,
    name: 'Tuck FL | Reverse Grip (Bar)',
    alt: 'Underhand tuck front lever · supinated grip tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps'],
    diff: 5.8,
    risk: 3,
    joints: {fingers:1, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.36, 0.49],
    desc: 'A tuck front lever held with a supinated (underhand/chin-up style) grip on the bar. The tuck reduces the lever arm to a manageable level, allowing athletes to begin conditioning the bicipital tendon and supinated wrist under FL load without the full-lever demand. The easiest entry point in the reverse-grip FL progression. Must be built gradually — the biceps tendon is uniquely vulnerable to the supinated hanging load.',
    cues: 'Start with very short holds (2–3 seconds) and build duration gradually over weeks. Zero elbow pain is the non-negotiable standard — even minor discomfort means stop. Build parallel to the standard grip tuck FL, not instead of it.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1901,
    name: 'Advanced Tuck FL | Reverse Grip (Bar)',
    alt: 'Underhand advanced tuck FL · supinated grip adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps'],
    diff: 7.0,
    risk: 4,
    joints: {fingers:1, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.42, 0.57],
    desc: 'An advanced tuck front lever (back flat, hips at bar height) in a supinated grip. The flat-back position increases the lever arm and significantly raises the bicipital tendon load compared to the rounded tuck. This is the stage where elbow conditioning becomes the primary long-term limiter in the reverse-grip FL progression.',
    cues: 'Never rush through the tuck stage. The advanced tuck with reverse grip should be trained for multiple weeks before progressing. If any sharp anterior elbow discomfort appears, return to the tuck and reduce hold duration.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1902,
    name: 'One Leg FL | Reverse Grip (Bar)',
    alt: 'Underhand one-leg FL · supinated grip single-leg FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps'],
    diff: 8.2,
    risk: 4,
    joints: {fingers:1, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.47, 0.63],
    desc: 'A one-leg front lever in supinated grip — one leg extended, one tucked, bar gripped underhand. The asymmetric legs introduce rotation tendency while the elbow joint continues to bear increasing load from the growing lever arm. The asymmetry also places slightly unequal load through the two arms, stressing the supinated elbow joint unevenly.',
    cues: 'Square the hips and keep the extended leg fully locked. With a supinated grip, any rotation is particularly destabilising — the underhand position reduces the grip security relative to the standard overhand grip.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1903,
    name: 'Straddle FL | Reverse Grip (Bar)',
    alt: 'Underhand straddle FL · supinated grip straddle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps'],
    diff: 8.8,
    risk: 4,
    joints: {fingers:1, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.50, 0.67],
    desc: 'A straddle front lever in supinated grip — legs spread to reduce lever length, bar gripped underhand. The straddle makes the FL component manageable while the elbow remains under substantial load. A key intermediate between the one-leg and full reverse grip FL.',
    cues: 'Use straddle width as the lever-reduction tool — wider is easier for the lever component. Keep elbow health the primary training metric; volume and hold duration should only increase when the elbows are completely symptom-free.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1904,
    name: 'Half Lay FL | Reverse Grip (Bar)',
    alt: 'Underhand half-lay FL · supinated grip half-lay FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps'],
    diff: 9.2,
    risk: 4,
    joints: {fingers:1, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 6,
    kcalPerRep: [0.54, 0.72],
    desc: 'A half-lay front lever in supinated grip — legs together, knees slightly bent, bar gripped underhand. The lever arm is nearly that of the full FL. This is the penultimate step before the full reverse-grip FL (id:21) and the most elbow-demanding stage short of the full version.',
    cues: 'Only proceed to the half-lay when the straddle reverse grip FL is a comfortable multi-second hold. The elbow stress at the half-lay stage is only marginally less than at the full FL — treat it as a near-maximal effort for the bicipital tendon.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── REVERSE GRIP — PARALLETTES (neutral → supinated isn't possible on fixed parallettes,
        but some parallette setups allow rotation; included for athletes with rotating handles) ── */

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1910,
    name: 'Tuck FL | Reverse Grip (Parallettes)',
    alt: 'Underhand tuck FL parallettes · supinated grip tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'parallettes'],
    diff: 6.0,
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.36, 0.50],
    desc: 'A tuck front lever on parallettes held with an underhand (supinated) grip — hands rotated so the knuckles face away, on parallette handles. Requires parallette handles that allow full supination (rotating handles or low bars gripped from inside). The supinated wrist on a fixed neutral handle is uncomfortable and structurally compromised; this variant is intended for rotating-handle parallettes or low box setups. The bicipital tendon conditioning benefit is the same as the bar version.',
    cues: 'Only perform on parallettes that allow full supination. Forcing a supinated wrist on a fixed neutral-grip handle creates excessive wrist torque. Short holds, gradual duration increase, zero elbow symptoms.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1911,
    name: 'Advanced Tuck FL | Reverse Grip (Parallettes)',
    alt: 'Underhand adv tuck FL parallettes · supinated grip adv tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'parallettes'],
    diff: 7.2,
    risk: 4,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.43, 0.58],
    desc: 'An advanced tuck front lever (back flat) on parallettes in a supinated grip. The flat-back position increases elbow load. The parallette handle provides slightly different wrist mechanics than a round bar, which some athletes find more comfortable for supinated holds.',
    cues: 'Same progression rules as the bar version — symptom-free elbows, short holds, long-term build. The flat-back position is the critical jump; do not rush it.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1912,
    name: 'Straddle FL | Reverse Grip (Parallettes)',
    alt: 'Underhand straddle FL parallettes · supinated grip straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'parallettes'],
    diff: 9.0,
    risk: 4,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.51, 0.68],
    desc: 'A straddle front lever on parallettes in supinated grip. Straddle provides lever reduction while the supinated wrist continues to load the biceps tendon. A useful intermediate for athletes building toward the full reverse-grip FL.',
    cues: 'Straddle wide enough that the lever is comfortable. The elbow is the performance ceiling — not the lats or core.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1913,
    name: 'Front Lever | Reverse Grip (Parallettes)',
    alt: 'Underhand full FL parallettes · supinated grip FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'parallettes'],
    diff: 10.0,
    risk: 4,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 6,
    kcalPerRep: [0.62, 0.80],
    desc: 'A full front lever on parallettes in supinated (underhand) grip — body completely horizontal, legs together, hands supinated on the parallette handles. The parallette handle shape may offer a marginal wrist-comfort advantage for some athletes over the round bar. All elbow loading patterns are equivalent to the bar version.',
    cues: 'A full FL on parallettes with neutral grip and the half-lay reverse grip bar FL are both prerequisites. Elbow health is the gating factor — only attempt this when the reverse grip FL progression is already near-complete on bar.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── REVERSE GRIP — RINGS ── */

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1920,
    name: 'Tuck FL | Reverse Grip (Rings)',
    alt: 'Underhand tuck FL rings · supinated grip tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'rings'],
    diff: 6.8,
    risk: 4,
    joints: {fingers:2, wrist:3, elbow:4, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 4,
    kcalPerRep: [0.38, 0.52],
    desc: 'A tuck front lever on gymnastic rings held with a supinated (underhand) grip. The freely spinning ring under a supinated wrist creates a powerful torque: the ring will try to rotate toward pronation as body weight loads it, directly opposing the supinated wrist position. This creates a unique biceps tendon and wrist load not present in any bar or parallette variant. Even at the tuck level, the combination of ring instability and supinated grip is very high-risk.',
    cues: 'The ring will spin toward pronation the moment weight is loaded — pre-set the supinated position firmly and resist the rotation actively throughout. Any elbow pain means stop immediately.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1921,
    name: 'Advanced Tuck FL | Reverse Grip (Rings)',
    alt: 'Underhand adv tuck FL rings · supinated grip adv tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'rings'],
    diff: 8.0,
    risk: 5,
    joints: {fingers:2, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.45, 0.61],
    desc: 'An advanced tuck front lever (back flat) on rings in supinated grip. The flat-back position increases lever arm, elbow torque, and ring-rotation resistance demand simultaneously. One of the highest-risk non-full-FL positions in the entire FL library.',
    cues: 'The tuck ring reverse grip must be an established comfortable hold before attempting. The combined jump in lever arm and ring-rotation load is significant. Elbow symptoms at any prior stage are a hard stop.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1922,
    name: 'Straddle FL | Reverse Grip (Rings)',
    alt: 'Underhand straddle FL rings · supinated grip straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'rings', 'elite'],
    diff: 9.8,
    risk: 5,
    joints: {fingers:2, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 6,
    kcalPerRep: [0.54, 0.72],
    desc: 'A straddle front lever on rings in supinated grip. Ring rotation, supinated biceps-tendon load, and near-full-lever arm are all present simultaneously. A rare and high-risk movement appropriate only for athletes with extensive ring FL and reverse-grip bar FL training histories.',
    cues: 'Both the straddle FL on rings and the straddle reverse-grip FL on bar must be established. The ring will fight the supinated wrist continuously — do not let the fight distract from the core and scapular position.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 1923,
    name: 'Front Lever | Reverse Grip (Rings)',
    alt: 'Underhand full FL rings · supinated grip FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'rings', 'elite'],
    diff: 11.2,
    hof: true,
    risk: 5,
    joints: {fingers:2, wrist:4, elbow:5, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 7,
    kcalPerRep: [0.65, 0.86],
    desc: 'A full front lever on rings held in a supinated (underhand) grip — body completely horizontal, legs together, palms up, rings spinning freely. The combination of ring instability, supinated biceps-tendon load, and full front lever magnitude creates one of the most joint-intensive FL variants possible. Documented performances are extremely rare. The pinnacle of the reverse-grip FL ladder.',
    cues: 'The full reverse grip FL on bar and the full FL on rings with standard grip must both be well-established. Elbow health is the primary gate. The ring rotation force couple under supination is constant and must be actively countered throughout the hold.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ══════════════════════════════════════════════════════════════════════
     SUPINATED FINGERTIP — PARALLETTES (full 6-stage)
     ══════════════════════════════════════════════════════════════════════ */

  entries.push(cloneExercise(_flTuck, {
    id: 1930,
    name: 'Tuck FL | Supinated Fingertip (Parallettes)',
    alt: 'Underhand fingertip tuck FL parallettes · supinated open-hand tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 7.0,
    risk: 4,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 4,
    kcalPerRep: [0.38, 0.52],
    desc: 'A tuck front lever on parallettes held with a supinated (underhand) grip on fingertips only. Requires rotating-handle parallettes or low-bar setups that allow supination. The supinated fingertip grip loads both the biceps tendon (from supination) and the finger flexors (from open hand), while the parallette handle shape may provide slightly more comfortable fingertip contact than a round bar. The tuck position makes the lever component achievable at this grip difficulty.',
    cues: 'Only suitable for rotating-handle setups. Build supinated fingertip dead hangs on the parallette handles specifically before adding the FL position. Zero elbow pain is the baseline.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1931,
    name: 'Advanced Tuck FL | Supinated Fingertip (Parallettes)',
    alt: 'Underhand fingertip adv tuck FL parallettes · supinated open-hand adv tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 8.2,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.44, 0.60],
    desc: 'An advanced tuck front lever (back flat) on parallettes in a supinated fingertip grip. The flat-back position substantially increases both the lever arm and the bicipital tendon load. The finger flexors are working alongside a supinated elbow at increasing load — a high-risk combination requiring careful progression.',
    cues: 'The tuck stage must be a stable hold before progressing. At the flat-back stage, elbow discomfort is more likely to appear — stop at the first sign and return to tuck duration work.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1932,
    name: 'One Leg FL | Supinated Fingertip (Parallettes)',
    alt: 'Underhand fingertip one-leg FL parallettes · supinated open-hand single-leg FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 9.2,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 5,
    kcalPerRep: [0.50, 0.67],
    desc: 'A one-leg front lever on parallettes in supinated fingertip grip. The asymmetric legs increase the effective lever arm and introduce a rotational demand on top of the already high elbow and finger load. The parallette handles do not rotate, providing a more stable wrist environment than rings for this grip pattern.',
    cues: 'Square hips rigorously. The supinated wrist is already under multi-axis stress — any rotation from the asymmetric legs adds further torque to the elbow joint.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 1933,
    name: 'Straddle FL | Supinated Fingertip (Parallettes)',
    alt: 'Underhand fingertip straddle FL parallettes · supinated open-hand straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 9.8,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 6,
    kcalPerRep: [0.54, 0.72],
    desc: 'A straddle front lever on parallettes in supinated fingertip grip. The straddle reduces the lever component while the grip remains the primary challenge. The parallette handle provides a fixed axis, making this more stable than the rings equivalent.',
    cues: 'Straddle wide to reduce the lever. The elbow and finger system is the ceiling — not lat strength at this stage.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1934,
    name: 'Half Lay FL | Supinated Fingertip (Parallettes)',
    alt: 'Underhand fingertip half-lay FL parallettes · supinated open-hand half-lay FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 10.8,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 7,
    kcalPerRep: [0.58, 0.76],
    desc: 'A half-lay front lever on parallettes in supinated fingertip grip — near-full lever arm, biceps tendon under maximum load, finger flexors sustaining a horizontal hold. A rare and technically demanding movement. Direct preparation for the full supinated fingertip FL on parallettes.',
    cues: 'Only attempt with zero elbow symptoms and the straddle version well-established. The half-lay is a near-maximal stress test for the bicipital tendon in this grip family.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 1935,
    name: 'Front Lever | Supinated Fingertip (Parallettes)',
    alt: 'Underhand fingertip full FL parallettes · supinated open-hand FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 12.0,
    hof: true,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:5, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 2, strength: 8,
    kcalPerRep: [0.66, 0.86],
    desc: 'A full front lever on parallettes held with a supinated grip on fingertips only — body completely horizontal, palms up, distal finger joints on the handles, no hook. The parallette fixed axis removes the ring-rotation variable while retaining the full supinated fingertip load. An extraordinary combination of FL strength, biceps tendon conditioning, and finger flexor capacity. Documented performances are vanishingly rare.',
    cues: 'No prescription. Both the full supinated fingertip FL on bar and the full FL on parallettes are prerequisites. The parallette handle advantage is structural comfort only — the demands are otherwise equivalent to the bar version.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ══════════════════════════════════════════════════════════════════════
     SUPINATED FINGERTIP ON RINGS — missing stages
     (Tuck + Straddle + Full already exist; adding Adv Tuck, One Leg, Half Lay)
     ══════════════════════════════════════════════════════════════════════ */

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1940,
    name: 'Advanced Tuck FL | Supinated Fingertip (Rings)',
    alt: 'Underhand fingertip adv tuck FL rings · supinated open-hand adv tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 9.4,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 6,
    kcalPerRep: [0.47, 0.64],
    desc: 'An advanced tuck front lever (back flat) on rings in supinated fingertip grip. Four simultaneous stress systems: flat-back lever arm, biceps tendon from supination, finger flexor load from open hand, and ring anti-rotation demand from the free-spinning ring under a supinated wrist. Among the highest-risk advanced tuck FL variants.',
    cues: 'The tuck supinated fingertip rings version must be genuinely stable before this. The flat-back jump is large in this grip-equipment combination. Stop at any elbow discomfort.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1941,
    name: 'One Leg FL | Supinated Fingertip (Rings)',
    alt: 'Underhand fingertip one-leg FL rings · supinated open-hand single-leg FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 10.4,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 6,
    kcalPerRep: [0.54, 0.72],
    desc: 'A one-leg front lever on rings in supinated fingertip grip. The asymmetric leg position adds body rotation to the already complex ring-rotation + supinated-elbow + open-hand system. One of the most multi-variable FL positions in the entire library.',
    cues: 'Square hips before and during the hold. With a supinated grip on a free ring, any body rotation creates an unpredictable ring-spin interaction. The obliques and core must pre-activate to prevent rotation before the hold is initiated.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1942,
    name: 'Half Lay FL | Supinated Fingertip (Rings)',
    alt: 'Underhand fingertip half-lay FL rings · supinated open-hand half-lay FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 11.4,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:5, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 7,
    kcalPerRep: [0.62, 0.82],
    desc: 'A half-lay front lever on rings in supinated fingertip grip — near-full lever arm, biceps tendon at peak load, finger flexors sustaining horizontal bodyweight, and a free-spinning ring resisting supination. Essentially the final preparatory step before the full supinated fingertip FL on rings. Documented performances are unknown to exist.',
    cues: 'No standalone training prescription. The straddle version must be a controlled hold. This is a near-maximal demand on three separate systems simultaneously.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ══════════════════════════════════════════════════════════════════════
     PINCH GRIP ON RINGS — missing stages
     (Tuck + Straddle + Full already exist; adding Adv Tuck, One Leg, Half Lay)
     ══════════════════════════════════════════════════════════════════════ */

  entries.push(cloneExercise(_flAdvancedTuck, {
    id: 1950,
    name: 'Advanced Tuck FL | Pinch Grip (Rings)',
    alt: 'Pinch grip adv tuck FL rings · thumb-pinch adv tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 8.4,
    risk: 4,
    joints: {fingers:5, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.46, 0.62],
    desc: 'An advanced tuck front lever (back flat) on rings in pinch grip. The flat-back position increases the lever arm and the per-joint pinch demand. The ring tries to rotate outward and the pinch must resist it while simultaneously supporting a larger bodyweight moment arm than the tuck stage.',
    cues: 'Only progress from tuck when that hold is stable. The flat-back pinch on rings is a meaningful jump — the ring rotation demand increases with lever arm, not just with grip difficulty.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneLeg, {
    id: 1951,
    name: 'One Leg FL | Pinch Grip (Rings)',
    alt: 'Pinch grip one-leg FL rings · thumb-pinch single-leg FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 9.4,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 5,
    kcalPerRep: [0.52, 0.70],
    desc: 'A one-leg front lever on rings in pinch grip. The asymmetric leg position generates body rotation tendency while the pinch provides no rotational resistance. Ring rotation and hip rotation can compound each other rapidly if not controlled. A technically demanding combination at the one-leg lever stage.',
    cues: 'Pre-square the hips and pre-lock the ring orientation before committing body weight. With a pinch grip on a ring, there is no way to recover from either a ring spin or a hip rotation mid-hold.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flHalfLay, {
    id: 1952,
    name: 'Half Lay FL | Pinch Grip (Rings)',
    alt: 'Pinch grip half-lay FL rings · thumb-pinch half-lay FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 10.8,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 7,
    kcalPerRep: [0.58, 0.77],
    desc: 'A half-lay front lever on rings in pinch grip — near-full lever arm, ring rotation to resist, thumb-and-fingertip contact only. The penultimate step in the rings pinch grip FL ladder. Ring rotation resistance is at its maximum at this lever stage, since the bodyweight moment arm is near-maximal.',
    cues: 'The straddle pinch rings FL must be a controlled hold before attempting. The half-lay removes the straddle lever reduction — every joint is now near its peak load in this grip-equipment family.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ══════════════════════════════════════════════════════════════════════
     WIDE GRIP FL — PROGRESSION STAGES
     Base id:19 = Wide Grip FL | (Bar) — Full FL only. Adding stages.
     ══════════════════════════════════════════════════════════════════════ */

  entries.push(cloneExercise(_flWideGrip, {
    id: 1960,
    name: 'Tuck FL | Wide Grip (Bar)',
    alt: 'Wide grip tuck front lever · wide tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever'],
    diff: 5.2,
    risk: 3,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 3,
    kcalPerRep: [0.34, 0.46],
    desc: 'A tuck front lever held with a wider-than-shoulder-width grip. The wider hand position shifts load to the rear delts and horizontal abductors even at the tuck stage. A useful entry point for building wide-grip FL strength, and also used as a shoulder warm-up by athletes working toward the full wide-grip FL.',
    cues: 'Do not go excessively wide — shoulder-width plus a hand-width on each side is sufficient at the tuck stage. Externally rotate the upper arms to protect the shoulder joint under the abducted load.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 1961,
    name: 'Advanced Tuck FL | Wide Grip (Bar)',
    alt: 'Wide grip advanced tuck FL · wide adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever'],
    diff: 7.4,
    risk: 3,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.43, 0.58],
    desc: 'A wide-grip front lever in the advanced tuck position (back flat, hips at bar height). The flat back combined with the wide grip increases shoulder abduction stress substantially. A key stage in building the rear delt and horizontal abductor strength needed for the full wide-grip FL.',
    cues: 'Flat back first, then hold. External rotation of the upper arms is critical at the advanced tuck stage — the shoulder joint is under greater abduction load than in the standard grip advanced tuck.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 1962,
    name: 'Straddle FL | Wide Grip (Bar)',
    alt: 'Wide grip straddle FL · wide straddle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever'],
    diff: 9.6,
    risk: 4,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 6,
    kcalPerRep: [0.54, 0.72],
    desc: 'A wide-grip front lever in a straddle position — legs spread to reduce lever length, hands wider than shoulder width. The straddle provides lever relief while the wide grip imposes the characteristic shoulder abduction and rear-delt demand. The most common approach to working toward the full wide-grip FL.',
    cues: 'Use straddle width as the primary progression variable — as shoulder strength increases, bring the feet closer together. External rotation and scapular depression must both be maintained throughout.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 1963,
    name: 'Half Lay FL | Wide Grip (Bar)',
    alt: 'Wide grip half-lay front lever · wide half-lay FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever'],
    diff: 9.8,
    risk: 4,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:5, si:2, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 6,
    kcalPerRep: [0.57, 0.75],
    desc: 'A wide-grip front lever in the half-lay position — legs together with knees slightly bent, hands wider than shoulder width. The lever arm is nearly that of the full wide-grip FL, and the shoulder abduction demand is at its peak. The penultimate step before the full wide-grip front lever (id:19).',
    cues: 'The shoulder is now under near-maximum abduction stress — maintain external rotation intent throughout. Only a slight knee bend; the body should be close to fully horizontal.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── CLOSE GRIP FL — PROGRESSION STAGES ── */

  entries.push(cloneExercise(_flCloseGrip, {
    id: 1970,
    name: 'Tuck FL | Close Grip (Bar)',
    alt: 'Close grip tuck FL · narrow tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever'],
    diff: 4.5,
    risk: 2,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 3, mobility: 2, strength: 3,
    kcalPerRep: [0.33, 0.45],
    desc: 'A tuck front lever with hands close together on the bar — typically touching or a few centimetres apart. The close grip at the tuck stage is accessible for most athletes working on FL progression and produces a useful tricep and elbow flexor stimulus alongside the standard tuck FL muscles. Sometimes used as an entry point for athletes who find the standard grip tuck FL too easy.',
    cues: 'Keep the elbows from flaring outward — the close grip promotes internal shoulder rotation. Actively counter this with external rotation intent throughout the hold.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 1971,
    name: 'Advanced Tuck FL | Close Grip (Bar)',
    alt: 'Close grip advanced tuck FL · narrow adv tuck FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever'],
    diff: 6.8,
    risk: 2,
    joints: {fingers:1, wrist:1, elbow:3, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.40, 0.55],
    desc: 'A close-grip front lever in the advanced tuck position (back flat). The flat back and narrow hand position increase elbow stress relative to the rounded tuck. Triceps and elbow flexors must work harder as the lever arm lengthens. A good intermediate for athletes building toward the close-grip full FL.',
    cues: 'Resist the internal rotation tendency from the close grip at every stage of the hold. The elbow is under more load here than in the standard grip advanced tuck — watch for any medial elbow discomfort.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 1972,
    name: 'Straddle FL | Close Grip (Bar)',
    alt: 'Close grip straddle FL · narrow straddle FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever'],
    diff: 7.8,
    risk: 3,
    joints: {fingers:1, wrist:1, elbow:3, shoulder:4, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.46, 0.62],
    desc: 'A close-grip front lever in the straddle position. The straddle reduces the lever arm while the close grip increases elbow demand. A practical intermediate step between the advanced tuck close-grip FL and the full close-grip FL.',
    cues: 'Use straddle width as the lever-progression variable. Keep external rotation intent constant — the close grip will fight you on this throughout.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 1973,
    name: 'Half Lay FL | Close Grip (Bar)',
    alt: 'Close grip half-lay FL · narrow half-lay FL',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever'],
    diff: 8.2,
    risk: 3,
    joints: {fingers:1, wrist:1, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.50, 0.67],
    desc: 'A close-grip front lever in the half-lay position — legs together with knees slightly bent, hands close together. The near-full lever arm at close grip places peak elbow and lat demand simultaneously. The final step before the full close-grip FL (id:20).',
    cues: 'External rotation intent is non-negotiable here. The close grip wants to internally rotate the shoulders — resist actively. Only a slight knee bend; stay as horizontal as possible.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ══════════════════════════════════════════════════════════════════════
     MISSING STAGES — BATCH COMPLETION
     Fills all remaining gaps identified in the gap audit:
     • One Arm (Bar/Parallettes/Rings): One Leg + Half Lay stages
     • One Arm Fingertip (Bar/Parallettes/Rings): One Leg + Half Lay stages
     • Reverse Grip (Parallettes): One Leg + Half Lay stages
     • Reverse Grip (Rings): One Leg + Half Lay stages
     • Wide Grip: One Leg on Bar, full progression on Rings, stages on Parallettes
     • Close Grip: full progression on Parallettes + Rings
     • Finger reduction (4/3/2/1): full progression on Parallettes + Rings
     ══════════════════════════════════════════════════════════════════════ */

  /* ── ONE ARM — BAR: missing One Leg + Half Lay ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 2000,
    name: 'One Leg FL | One Arm (Bar)',
    alt: 'One arm one-leg FL · single arm single-leg FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques'],
    diff: 12.2,
    risk: 5,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:7, neck:2, thoracic:3, lowerBack:5, si:3, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 8,
    kcalPerRep: [0.63, 0.83],
    desc: 'A one-leg front lever (one leg extended, one tucked) held with a single arm. The asymmetric leg position combined with the one-arm support creates a compound rotation demand: the legs introduce a hip-roll tendency while the single support arm creates a lateral-tilt tendency. Both must be resisted simultaneously by the obliques and core. A key intermediate between the advanced tuck and straddle one-arm FL.',
    cues: 'Square the hips before initiating. The one-arm lateral tilt and the asymmetric-leg hip roll compound each other — both must be pre-controlled before the hold is loaded.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 2001,
    name: 'Half Lay FL | One Arm (Bar)',
    alt: 'One arm half-lay FL · single arm half-lay FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques'],
    diff: 13.5,
    risk: 5,
    joints: {fingers:2, wrist:3, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 9,
    kcalPerRep: [0.70, 0.92],
    desc: 'A half-lay front lever (legs together, knees slightly bent) held with a single arm. The near-full lever arm means the shoulder and oblique demands are almost identical to the full one-arm FL. The slight knee bend is the only lever concession; everything else is at maximum. The final preparatory step before the full one-arm FL (id:22).',
    cues: 'Only progress here when the straddle one-arm FL is a controlled hold. The half-lay removes almost all the lever advantage of the straddle. Treat it as a near-maximal effort for the obliques and shoulder.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── ONE ARM — PARALLETTES: missing One Leg + Half Lay ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 2010,
    name: 'One Leg FL | One Arm (Parallettes)',
    alt: 'One arm one-leg FL parallettes · single arm single-leg FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'parallettes'],
    diff: 12.4,
    risk: 5,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:7, neck:2, thoracic:3, lowerBack:5, si:3, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 8,
    kcalPerRep: [0.64, 0.84],
    desc: 'A one-leg front lever on parallettes held with a single arm. The neutral-grip handle spares the wrist relative to the bar version, but the one-arm and asymmetric-leg demands are unchanged. The fixed parallette handles mean no ring-rotation variable — the instability challenge comes purely from the one-arm lateral tilt and leg-driven hip rotation.',
    cues: 'Pre-square the hips and depress the working-side scapula before loading. The parallette advantage is wrist comfort only — everything else is identically demanding to the bar version.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 2011,
    name: 'Half Lay FL | One Arm (Parallettes)',
    alt: 'One arm half-lay FL parallettes · single arm half-lay FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'parallettes'],
    diff: 13.7,
    risk: 5,
    joints: {fingers:3, wrist:2, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 9,
    kcalPerRep: [0.72, 0.94],
    desc: 'A half-lay front lever on parallettes held with a single arm. Near-full lever arm, neutral wrist. The penultimate step before the full one-arm FL on parallettes (id:1613).',
    cues: 'Same oblique and scapular cues as the straddle version — the only change is the legs coming closer together, removing the lever advantage.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── ONE ARM — RINGS: missing One Leg + Half Lay ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 2020,
    name: 'One Leg FL | One Arm (Rings)',
    alt: 'One arm one-leg FL rings · single arm single-leg FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'rings'],
    diff: 13.2,
    risk: 5,
    joints: {fingers:3, wrist:4, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:5, si:3, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 4, strength: 9,
    kcalPerRep: [0.67, 0.88],
    desc: 'A one-leg front lever on rings held with a single arm. Three simultaneous instability vectors: ring rotation, one-arm lateral tilt, and asymmetric-leg hip roll. The combination at the one-leg lever stage is extraordinary — documented performances are essentially unknown. The obliques, wrist, and shoulder must manage three independent destabilisation axes at once.',
    cues: 'Square hips, lock ring orientation, and depress the working scapula — all before the hold is loaded. Any of the three instability vectors getting ahead of the others will cascade immediately.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 2021,
    name: 'Half Lay FL | One Arm (Rings)',
    alt: 'One arm half-lay FL rings · single arm half-lay FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'obliques', 'rings'],
    diff: 14.8,
    pantheon: false,
    risk: 5,
    joints: {fingers:3, wrist:4, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 4, strength: 9,
    kcalPerRep: [0.76, 0.99],
    desc: 'A half-lay front lever on rings held with a single arm — near-full lever arm, free-spinning ring, one support point. The penultimate step before the full one-arm FL on rings (id:1623). No documented verified performance. Every joint on the working side is at or near its maximum output simultaneously.',
    cues: 'No training prescription beyond establishing the straddle one-arm rings FL as a controlled hold. This is a benchmark assessment, not a training exercise.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── ONE ARM FINGERTIP — BAR: missing One Leg + Half Lay ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 2030,
    name: 'One Leg FL | One Arm Fingertip (Bar)',
    alt: 'One arm fingertip one-leg FL · single arm open-hand single-leg FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques'],
    diff: 14.2,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:5, si:3, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 3, strength: 9,
    kcalPerRep: [0.72, 0.94],
    desc: 'A one-leg front lever on bar held with a single arm on fingertips. One-arm support, open-hand fingertip grip, and asymmetric leg rotation demand simultaneously. A purely theoretical movement at present.',
    cues: 'No prescription.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 2031,
    name: 'Half Lay FL | One Arm Fingertip (Bar)',
    alt: 'One arm fingertip half-lay FL · single arm open-hand half-lay FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques'],
    diff: 15.4,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:3, elbow:4, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 3, strength: 10,
    kcalPerRep: [0.80, 1.04],
    desc: 'A half-lay front lever on bar held with a single arm on fingertips. Near-full lever arm, one arm, open-hand. Penultimate step before the full one-arm fingertip FL on bar (id:1703). Purely theoretical.',
    cues: 'No prescription.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── ONE ARM FINGERTIP — PARALLETTES: missing One Leg + Half Lay ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 2040,
    name: 'One Leg FL | One Arm Fingertip (Parallettes)',
    alt: 'One arm fingertip one-leg FL parallettes · single arm open-hand single-leg FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'parallettes'],
    diff: 14.0,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:3, shoulder:7, neck:2, thoracic:4, lowerBack:5, si:3, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 3, strength: 9,
    kcalPerRep: [0.72, 0.94],
    desc: 'A one-leg front lever on parallettes held with a single arm on fingertips. Neutral wrist is the sole structural concession versus the bar version. Purely theoretical.',
    cues: 'No prescription.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 2041,
    name: 'Half Lay FL | One Arm Fingertip (Parallettes)',
    alt: 'One arm fingertip half-lay FL parallettes · single arm open-hand half-lay FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'parallettes'],
    diff: 15.2,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:4, shoulder:7, neck:2, thoracic:4, lowerBack:6, si:3, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 3, strength: 10,
    kcalPerRep: [0.80, 1.04],
    desc: 'A half-lay front lever on parallettes held with a single arm on fingertips. Penultimate step before the full one-arm fingertip FL on parallettes (id:1713). Purely theoretical.',
    cues: 'No prescription.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── ONE ARM FINGERTIP — RINGS: missing One Leg + Half Lay ── */

  entries.push(cloneExercise(_flOneArm, {
    id: 2050,
    name: 'One Leg FL | One Arm Fingertip (Rings)',
    alt: 'One arm fingertip one-leg FL rings · single arm open-hand single-leg FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'rings'],
    diff: 15.2,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:5, elbow:4, shoulder:7, neck:2, thoracic:4, lowerBack:5, si:3, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 4, strength: 10,
    kcalPerRep: [0.78, 1.02],
    desc: 'A one-leg front lever on rings held with a single arm on fingertips. Four simultaneous extreme demands: one-arm lateral tilt, fingertip open hand, ring rotation, asymmetric-leg hip roll. Purely theoretical.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flOneArm, {
    id: 2051,
    name: 'Half Lay FL | One Arm Fingertip (Rings)',
    alt: 'One arm fingertip half-lay FL rings · single arm open-hand half-lay FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'elite', 'grip', 'obliques', 'rings'],
    diff: 16.8,
    pantheon: false,
    risk: 5,
    joints: {fingers:4, wrist:5, elbow:5, shoulder:7, neck:2, thoracic:5, lowerBack:6, si:3, hip:5, groin:0, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 4, strength: 10,
    kcalPerRep: [0.86, 1.10],
    desc: 'A half-lay front lever on rings held with a single arm on fingertips. Near-full lever arm, ring rotation, open-hand grip, one-arm support. The penultimate step before the full one-arm fingertip FL on rings (id:1723) — the absolute theoretical ceiling of all FL performance.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── REVERSE GRIP — PARALLETTES: missing One Leg + Half Lay ── */

  entries.push(cloneExercise(_flReverseGrip, {
    id: 2060,
    name: 'One Leg FL | Reverse Grip (Parallettes)',
    alt: 'Underhand one-leg FL parallettes · supinated grip single-leg FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'parallettes'],
    diff: 8.4,
    risk: 4,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 5,
    kcalPerRep: [0.48, 0.65],
    desc: 'A one-leg front lever on parallettes in supinated grip. The asymmetric legs add rotation tendency while the elbow remains under load from the supinated position. The fixed parallette handles prevent ring-spin complications.',
    cues: 'Square hips before loading. The supinated wrist provides no rotational resistance — only the core and lats prevent hip tilt.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 2061,
    name: 'Half Lay FL | Reverse Grip (Parallettes)',
    alt: 'Underhand half-lay FL parallettes · supinated grip half-lay FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'parallettes'],
    diff: 9.4,
    risk: 4,
    joints: {fingers:2, wrist:2, elbow:4, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 6,
    kcalPerRep: [0.55, 0.73],
    desc: 'A half-lay front lever on parallettes in supinated grip — near-full lever arm. The penultimate step before the full reverse grip FL on parallettes (id:1913). Elbow is at peak load.',
    cues: 'Symptom-free elbows only. The half-lay on parallettes in reverse grip is equivalent in elbow demand to the full bar version at this lever length.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── REVERSE GRIP — RINGS: missing One Leg + Half Lay ── */

  entries.push(cloneExercise(_flReverseGrip, {
    id: 2070,
    name: 'One Leg FL | Reverse Grip (Rings)',
    alt: 'Underhand one-leg FL rings · supinated grip single-leg FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'rings', 'elite'],
    diff: 9.6,
    risk: 5,
    joints: {fingers:2, wrist:3, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 5,
    kcalPerRep: [0.52, 0.70],
    desc: 'A one-leg front lever on rings in supinated grip. Ring rotation compounds the asymmetric-leg hip-roll tendency — both destabilise the hold simultaneously while the elbow is under supinated biceps-tendon load. High-risk at every axis.',
    cues: 'Pre-square hips and pre-lock ring orientation before committing to the hold. Any axis of instability getting ahead of the others ends the hold and risks the elbow.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flReverseGrip, {
    id: 2071,
    name: 'Half Lay FL | Reverse Grip (Rings)',
    alt: 'Underhand half-lay FL rings · supinated grip half-lay FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'biceps', 'rings', 'elite'],
    diff: 10.6,
    risk: 5,
    joints: {fingers:2, wrist:4, elbow:5, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 7,
    kcalPerRep: [0.58, 0.77],
    desc: 'A half-lay front lever on rings in supinated grip — near-full lever arm, ring rotation, biceps tendon at peak load. The penultimate step before the full reverse grip FL on rings (id:1923). An extraordinary combination of joint demands.',
    cues: 'Both the straddle reverse grip rings FL and the half-lay reverse grip bar FL should be established before attempting. Elbow health is the absolute gate.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── WIDE GRIP — ONE LEG ON BAR + RINGS PROGRESSION ── */

  entries.push(cloneExercise(_flWideGrip, {
    id: 2080,
    name: 'One Leg FL | Wide Grip (Bar)',
    alt: 'Wide grip one-leg FL · wide single-leg FL bar',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever'],
    diff: 8.6,
    risk: 4,
    joints: {fingers:1, wrist:1, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:3, si:1, hip:3, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.49, 0.66],
    desc: 'A one-leg front lever with a wide grip — one leg extended, one tucked, hands wider than shoulder width. The asymmetric legs reduce the lever arm while the wide grip imposes rear delt and horizontal abductor demand. An intermediate between the wide-grip straddle and the full wide-grip FL.',
    cues: 'Square the hips against the asymmetric leg pull. External rotation intent is especially important with the wide grip — the abducted shoulder position is already stressful without adding internal rotation.',
    equipment: 'Bar', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 2081,
    name: 'Tuck FL | Wide Grip (Rings)',
    alt: 'Wide grip tuck FL rings · wide tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 6.8,
    risk: 4,
    joints: {fingers:2, wrist:4, elbow:2, shoulder:6, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 4,
    kcalPerRep: [0.37, 0.51],
    desc: 'A tuck front lever on widely-spaced rings. The rings will try to collapse inward as body weight loads them — the athlete must actively press outward to maintain the wide position. At the tuck level this collapse tendency is already meaningful. The entry point for wide-grip FL work on rings.',
    cues: 'Pre-set the wide ring position before loading. Actively press the rings outward throughout — do not let them drift in. External rotation of the upper arms resists the ring collapse.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 2082,
    name: 'Advanced Tuck FL | Wide Grip (Rings)',
    alt: 'Wide grip advanced tuck FL rings · wide adv tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 8.4,
    risk: 4,
    joints: {fingers:2, wrist:4, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 5,
    kcalPerRep: [0.46, 0.62],
    desc: 'An advanced tuck front lever (back flat) on widely-spaced rings. The flat back increases the lever arm and the ring-collapse force simultaneously. The outward press requirement is more demanding than at the tuck stage.',
    cues: 'Flat back and outward ring press must be maintained simultaneously. If either breaks, reset. The ring collapse and body-drop are linked — ring drift means lever loss.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 2083,
    name: 'Straddle FL | Wide Grip (Rings)',
    alt: 'Wide grip straddle FL rings · wide straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings', 'elite'],
    diff: 10.2,
    risk: 5,
    joints: {fingers:2, wrist:4, elbow:2, shoulder:7, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 4, strength: 6,
    kcalPerRep: [0.57, 0.75],
    desc: 'A straddle front lever on widely-spaced rings. The straddle reduces lever length but does nothing to reduce the ring-collapse tendency. At the straddle lever arm the outward press demand and rear delt load are near-maximal for this grip family.',
    cues: 'Straddle wide for lever relief. Press outward against the rings throughout. External rotation is the only thing preventing both ring collapse and shoulder impingement simultaneously.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 2084,
    name: 'Half Lay FL | Wide Grip (Rings)',
    alt: 'Wide grip half-lay FL rings · wide half-lay FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings', 'elite'],
    diff: 11.4,
    risk: 5,
    joints: {fingers:2, wrist:4, elbow:2, shoulder:7, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 4, strength: 7,
    kcalPerRep: [0.63, 0.83],
    desc: 'A half-lay front lever on widely-spaced rings — near-full lever, maximum ring-collapse resistance required, maximum rear delt and horizontal abductor demand. The penultimate step before the full wide-grip FL on rings (id:1830).',
    cues: 'The legs are almost together — the lever and shoulder demands are now near-maximal. Continue the outward ring press. Shoulder mobility is the primary gating factor at this stage.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 2085,
    name: 'Tuck FL | Wide Grip (Parallettes)',
    alt: 'Wide grip tuck FL parallettes · wide tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 5.4,
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 3,
    kcalPerRep: [0.34, 0.47],
    desc: 'A tuck front lever on widely-spaced parallettes. The neutral wrist on fixed handles makes this the most comfortable wide-grip FL entry point. The rear delt and horizontal abductor demand is present from the tuck stage even with the lever reduction.',
    cues: 'Set the parallettes wide but not so wide that the shoulder is at end-range. External rotation intent applies even on the neutral-grip handles.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 2086,
    name: 'Advanced Tuck FL | Wide Grip (Parallettes)',
    alt: 'Wide grip advanced tuck FL parallettes · wide adv tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 7.6,
    risk: 3,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.44, 0.59],
    desc: 'An advanced tuck front lever (back flat) on widely-spaced parallettes. The flat back increases shoulder abduction demand. Neutral wrist provides wrist comfort throughout.',
    cues: 'Flat back, external rotation intent. The neutral grip does not change the shoulder demand — just the wrist load.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 2087,
    name: 'Straddle FL | Wide Grip (Parallettes)',
    alt: 'Wide grip straddle FL parallettes · wide straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 9.8,
    risk: 4,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 6,
    kcalPerRep: [0.55, 0.73],
    desc: 'A straddle front lever on widely-spaced parallettes. Straddle provides lever relief; the wide neutral-grip handles deliver the rear delt demand without wrist stress. The most practical training setup for building wide-grip FL strength.',
    cues: 'Straddle width and parallette spacing are independent variables — optimise both for the target training stimulus.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flWideGrip, {
    id: 2088,
    name: 'Half Lay FL | Wide Grip (Parallettes)',
    alt: 'Wide grip half-lay FL parallettes · wide half-lay FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 11.2,
    risk: 4,
    joints: {fingers:2, wrist:2, elbow:2, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 7,
    kcalPerRep: [0.63, 0.83],
    desc: 'A half-lay front lever on widely-spaced parallettes — near-full lever, rear delt at near-peak demand, neutral wrist. The penultimate step before the full wide-grip FL on parallettes (id:1008).',
    cues: 'External rotation and scapular depression. The neutral wrist is the only concession from the bar version at this lever length.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── CLOSE GRIP — PARALLETTES PROGRESSION ── */

  entries.push(cloneExercise(_flCloseGrip, {
    id: 2090,
    name: 'Tuck FL | Close Grip (Parallettes)',
    alt: 'Close grip tuck FL parallettes · narrow tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 4.6,
    risk: 2,
    joints: {fingers:2, wrist:1, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 3, mobility: 2, strength: 3,
    kcalPerRep: [0.33, 0.46],
    desc: 'A tuck front lever on closely-spaced parallettes — handles touching or just apart, neutral wrist. The most comfortable close-grip FL entry point. The neutral handles eliminate the internal rotation torque of the bar close-grip while retaining the elbow and tricep demand.',
    cues: 'External rotation intent even with neutral grip — the narrow hand position still promotes internal rotation. Depress scapulae before tucking.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 2091,
    name: 'Advanced Tuck FL | Close Grip (Parallettes)',
    alt: 'Close grip advanced tuck FL parallettes · narrow adv tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 6.9,
    risk: 2,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:4, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.40, 0.55],
    desc: 'An advanced tuck front lever (back flat) on closely-spaced parallettes. The flat back increases elbow demand and neutral grip reduces wrist torque relative to the bar version. A useful intermediate for athletes with wrist sensitivity.',
    cues: 'Flat back and external rotation intent. The parallette close grip is significantly more wrist-friendly than the bar equivalent at this lever.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 2092,
    name: 'Straddle FL | Close Grip (Parallettes)',
    alt: 'Close grip straddle FL parallettes · narrow straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 8.0,
    risk: 3,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.47, 0.63],
    desc: 'A straddle front lever on closely-spaced parallettes. Straddle reduces lever length; neutral close grip reduces wrist load. A practical training vehicle for building close-grip FL strength with minimal joint stress.',
    cues: 'Use straddle width as the lever variable. Progress by bringing legs closer together over weeks.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 2093,
    name: 'Half Lay FL | Close Grip (Parallettes)',
    alt: 'Close grip half-lay FL parallettes · narrow half-lay FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'parallettes'],
    diff: 8.4,
    risk: 3,
    joints: {fingers:2, wrist:1, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:1, knee:1, anchor:0, foot:0},
    technique: 4, mobility: 2, strength: 5,
    kcalPerRep: [0.50, 0.67],
    desc: 'A half-lay front lever on closely-spaced parallettes — near-full lever arm, neutral close grip. The penultimate step before the full close-grip FL on parallettes (id:1009).',
    cues: 'External rotation intent. The near-full lever at close grip means peak elbow demand — watch for medial elbow discomfort.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── CLOSE GRIP — RINGS PROGRESSION ── */

  entries.push(cloneExercise(_flCloseGrip, {
    id: 2100,
    name: 'Tuck FL | Close Grip (Rings)',
    alt: 'Close grip tuck FL rings · narrow tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 6.0,
    risk: 3,
    joints: {fingers:2, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 4,
    kcalPerRep: [0.35, 0.49],
    desc: 'A tuck front lever on closely-spaced rings. The rings will try to splay outward as body weight presses down — the athlete must actively resist this outward splay while maintaining the close hand position and the tuck FL. The close rings interaction is different from wide rings: instead of collapse inward, the load vector pushes the rings out, which the wrist and shoulder must resist.',
    cues: 'Pre-set the rings to vertical and close before loading. Resist any outward ring splay actively. The close position fights against the natural ring-splay tendency under load.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 2101,
    name: 'Advanced Tuck FL | Close Grip (Rings)',
    alt: 'Close grip advanced tuck FL rings · narrow adv tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings'],
    diff: 7.4,
    risk: 4,
    joints: {fingers:2, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:1, lowerBack:3, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.42, 0.57],
    desc: 'An advanced tuck front lever (back flat) on closely-spaced rings. The flat back increases the lever arm and the ring-splay resistance demand. Elbow stress rises as the supination tendency from the ring splay interacts with the close grip.',
    cues: 'Flat back and active ring-splay resistance simultaneously. The two cues compete for attention — train them independently before combining.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 2102,
    name: 'Straddle FL | Close Grip (Rings)',
    alt: 'Close grip straddle FL rings · narrow straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings', 'elite'],
    diff: 9.0,
    risk: 4,
    joints: {fingers:2, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 5,
    kcalPerRep: [0.51, 0.68],
    desc: 'A straddle front lever on closely-spaced rings. The straddle reduces lever length while the close ring splay resistance remains constant. A key intermediate in the close-grip rings FL progression.',
    cues: 'Straddle wide for lever relief. The ring splay force is lever-independent — it must be resisted regardless of leg position.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flCloseGrip, {
    id: 2103,
    name: 'Half Lay FL | Close Grip (Rings)',
    alt: 'Close grip half-lay FL rings · narrow half-lay FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'rings', 'elite'],
    diff: 10.2,
    risk: 5,
    joints: {fingers:2, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:5, si:2, hip:4, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 6,
    kcalPerRep: [0.57, 0.75],
    desc: 'A half-lay front lever on closely-spaced rings — near-full lever, ring splay resistance at maximum, elbow at peak close-grip load. The penultimate step before the full close-grip FL on rings (id:1840).',
    cues: 'Near-full lever means near-maximum elbow stress. The ring splay is unmitigated. Only progress when the straddle close-grip rings FL is a comfortable hold.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── FINGER REDUCTION — PARALLETTES (4/3/2/1 finger, Tuck through Full) ── */

  entries.push(cloneExercise(_flTuck, {
    id: 2200,
    name: 'Tuck FL | 4-Finger (Parallettes)',
    alt: '4-finger tuck FL parallettes · no-thumb tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 6.4,
    risk: 3,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 4, mobility: 2, strength: 4,
    kcalPerRep: [0.37, 0.50],
    desc: 'A tuck front lever on parallettes held with four fingers only — thumb raised, index/middle/ring/pinky on the handle, neutral wrist. The neutral-grip handle is easier on the wrist than a bar for 4-finger work and the round handle cross-section concentrates the load similarly. The best equipment starting point for 4-finger FL training.',
    cues: 'Thumb fully raised throughout. The neutral wrist is a genuine advantage here — less wrist extensor fatigue means more focus on the finger flexors themselves.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 2201,
    name: 'Straddle FL | 4-Finger (Parallettes)',
    alt: '4-finger straddle FL parallettes · no-thumb straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 9.8,
    risk: 4,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 6,
    kcalPerRep: [0.55, 0.72],
    desc: 'A straddle front lever on parallettes with four fingers only. Straddle provides lever reduction; neutral grip spares the wrist. The combination makes this the most approachable straddle finger-reduction FL entry point.',
    cues: 'Use straddle to manage the lever. Thumb stays raised. The neutral grip removes one stress dimension, keeping focus on finger flexor conditioning.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 2202,
    name: 'Front Lever | 4-Finger (Parallettes)',
    alt: '4-finger full front lever parallettes · no-thumb FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 11.8,
    risk: 5,
    joints: {fingers:4, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 8,
    kcalPerRep: [0.64, 0.84],
    desc: 'A full front lever on parallettes with four fingers only — no thumb, neutral wrist, body completely horizontal. The neutral grip makes this the most structurally sound full 4-finger FL variant. Requires both full FL strength and extensive 4-finger tendon conditioning.',
    cues: 'A full FL on parallettes with full grip and the 4-finger straddle FL on parallettes are prerequisites. Thumb raised, scapulae depressed.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flTuck, {
    id: 2210,
    name: 'Tuck FL | 3-Finger (Parallettes)',
    alt: '3-finger tuck FL parallettes · index-middle-ring tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 7.0,
    risk: 4,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 2, strength: 4,
    kcalPerRep: [0.38, 0.52],
    desc: 'A tuck front lever on parallettes on three fingers — index, middle, ring only. The neutral-grip handle provides a more comfortable contact surface for 3-finger FL work than a round bar. Six joints bear the load even at the tuck level.',
    cues: '3-finger pull-up and 4-finger tuck FL on parallettes are prerequisites. Warm up with 3-finger dead hangs on the parallette handles specifically before attempting.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 2211,
    name: 'Straddle FL | 3-Finger (Parallettes)',
    alt: '3-finger straddle FL parallettes · index-middle-ring straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes'],
    diff: 10.4,
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 7,
    kcalPerRep: [0.57, 0.75],
    desc: 'A straddle front lever on parallettes on three fingers. The neutral grip and straddle position together make this the most accessible straddle 3-finger FL variant. Still high-risk from a finger flexor tendon perspective.',
    cues: 'Never train to tendon fatigue. Quality holds of 2–3 seconds maximum per session. Stop at any finger flexor pump or discomfort.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 2212,
    name: 'Front Lever | 3-Finger (Parallettes)',
    alt: '3-finger full front lever parallettes · index-middle-ring FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 12.4,
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 2, strength: 9,
    kcalPerRep: [0.67, 0.87],
    desc: 'A full front lever on parallettes on three fingers. Six joints sustain a full horizontal body hold. One of the most extreme grip-FL combinations achievable with any equipment concession (neutral wrist). A rare elite benchmark.',
    cues: 'Both the full FL on parallettes and the 3-finger straddle FL on parallettes are prerequisites. Treat every attempt as a max-effort tendon event.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flTuck, {
    id: 2220,
    name: 'Tuck FL | 2-Finger (Parallettes)',
    alt: '2-finger tuck FL parallettes · index-middle tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 8.0,
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:2, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 2, strength: 5,
    kcalPerRep: [0.42, 0.58],
    desc: 'A tuck front lever on parallettes on two fingers — index and middle only. Four joints bear the tuck FL load. The neutral-grip handle is the only structural concession versus the bar version. An elite grip-strength FL movement even at the tuck stage.',
    cues: '3-finger tuck FL on parallettes and 2-finger pull-up are prerequisites. Never attempt cold. Build 2-finger dead hangs on the parallette handles specifically.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 2221,
    name: 'Straddle FL | 2-Finger (Parallettes)',
    alt: '2-finger straddle FL parallettes · index-middle straddle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 11.2,
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 8,
    kcalPerRep: [0.58, 0.76],
    desc: 'A straddle front lever on parallettes on two fingers. Four joints sustain near-full-lever load with neutral wrist. Among the most extreme grip-FL movements achievable in practice. Neutral wrist is the only structural advantage over the bar version.',
    cues: 'No standard training prescription. Monthly progression at most. Finger flexor health is the primary gate at every stage.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 2222,
    name: 'Front Lever | 2-Finger (Parallettes)',
    alt: '2-finger full front lever parallettes · index-middle FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 13.2,
    hof: true,
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:3, shoulder:5, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 2, strength: 9,
    kcalPerRep: [0.71, 0.93],
    desc: 'A full front lever on parallettes on two fingers. Four joints bear the complete horizontal body load with neutral wrist. Essentially a theoretical human performance ceiling with the neutral-grip concession. No verified performances are known.',
    cues: 'No prescription beyond establishing the straddle 2-finger FL on parallettes.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flTuck, {
    id: 2230,
    name: 'Tuck FL | 1-Finger (Parallettes)',
    alt: '1-finger tuck FL parallettes · single-finger tuck FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 9.8,
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:3, shoulder:4, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 2, strength: 6,
    kcalPerRep: [0.48, 0.65],
    desc: 'A tuck front lever on parallettes on one finger — index only, neutral wrist. Two joints bear the tuck FL load. Included as the neutral-wrist equivalent of the bar 1-finger tuck FL. An almost entirely theoretical movement even with the tuck and neutral-wrist concessions.',
    cues: 'No training prescription. 2-finger tuck FL on parallettes and 1-finger pull-up are both prerequisites.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 2231,
    name: 'Front Lever | 1-Finger (Parallettes)',
    alt: '1-finger full front lever parallettes · single-finger FL parallettes',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'parallettes', 'elite'],
    diff: 14.8,
    hof: true,
    pantheon: false,
    risk: 5,
    joints: {fingers:5, wrist:2, elbow:4, shoulder:5, neck:2, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 2, strength: 10,
    kcalPerRep: [0.77, 1.00],
    desc: 'A full front lever on parallettes on one finger — index only, neutral wrist, body completely horizontal. Two joints sustain the full horizontal body hold. The theoretical ceiling of the finger-reduction FL on parallettes. No verified performance is expected to exist.',
    cues: 'No prescription.',
    equipment: 'Parallettes', position: 'Supine', youtube: 'LINK_TODO',
  }));

  /* ── FINGER REDUCTION — RINGS (4/3/2/1, key stages) ── */

  entries.push(cloneExercise(_flTuck, {
    id: 2300,
    name: 'Tuck FL | 4-Finger (Rings)',
    alt: '4-finger tuck FL rings · no-thumb tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 7.4,
    risk: 4,
    joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 5, mobility: 3, strength: 5,
    kcalPerRep: [0.40, 0.55],
    desc: 'A tuck front lever on rings held with four fingers only — no thumb, ring freely spinning. The ring rotation must be resisted entirely by four finger flexors and the wrist without the thumb opposition. Even at the tuck level the ring rotation under a no-thumb grip is very challenging. The entry point for ring finger-reduction FL work.',
    cues: 'Pre-lock the ring orientation before gripping with 4 fingers. The thumb absence means any ring spin is unrecoverable without full reset. Short holds, high reset frequency.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 2301,
    name: 'Straddle FL | 4-Finger (Rings)',
    alt: '4-finger straddle FL rings · no-thumb straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 10.8,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 7,
    kcalPerRep: [0.58, 0.76],
    desc: 'A straddle front lever on rings with four fingers. Ring rotation, no-thumb grip, and near-full lever arm. A genuine elite movement combining two difficult FL modifiers (rings + finger reduction) at the straddle level.',
    cues: 'Both the 4-finger bar straddle FL and the straddle FL on rings with full grip are prerequisites. Ring and hip orientation must both be pre-set before loading.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 2302,
    name: 'Front Lever | 4-Finger (Rings)',
    alt: '4-finger full front lever rings · no-thumb FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 12.8,
    hof: true,
    risk: 5,
    joints: {fingers:4, wrist:4, elbow:2, shoulder:6, neck:1, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 9,
    kcalPerRep: [0.70, 0.92],
    desc: 'A full front lever on rings with four fingers — no thumb, free-spinning ring, body horizontal. Ring rotation and 4-finger grip simultaneously at full lever. Documented performances are essentially unknown. The pinnacle of the 4-finger FL ladder on rings.',
    cues: 'No prescription. Both the 4-finger bar full FL and the full FL on rings must be established.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flTuck, {
    id: 2310,
    name: 'Tuck FL | 3-Finger (Rings)',
    alt: '3-finger tuck FL rings · index-middle-ring tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings'],
    diff: 8.0,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:2, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 6, mobility: 3, strength: 5,
    kcalPerRep: [0.42, 0.57],
    desc: 'A tuck front lever on rings on three fingers — index, middle, ring only. Six joints sustain the load while the ring spins freely. The tuck is the mandatory entry point; even so this is an extraordinary combination of grip and equipment difficulty.',
    cues: '3-finger bar tuck FL and 4-finger tuck rings FL are both prerequisites. Treat as a max-effort tendon session — short holds, long rest, no fatigue.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flStraddle, {
    id: 2311,
    name: 'Straddle FL | 3-Finger (Rings)',
    alt: '3-finger straddle FL rings · index-middle-ring straddle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 11.4,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:2, shoulder:6, neck:1, thoracic:2, lowerBack:4, si:1, hip:3, groin:2, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 8,
    kcalPerRep: [0.62, 0.82],
    desc: 'A straddle front lever on rings on three fingers. Six joints sustaining a straddle lever on a free-spinning ring. An extreme benchmark combining two of the hardest FL modifiers at the straddle level. No verified performances are known.',
    cues: 'No prescription. Purely for athletes who have mastered both the 3-finger bar straddle FL and the straddle FL on rings with full grip.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 2312,
    name: 'Front Lever | 3-Finger (Rings)',
    alt: '3-finger full front lever rings · index-middle-ring FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 13.4,
    hof: true,
    pantheon: false,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:2, shoulder:6, neck:2, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 9,
    kcalPerRep: [0.73, 0.95],
    desc: 'A full front lever on rings on three fingers. Six joints, full lever, free-spinning ring. One of the hardest non-one-arm FL variants theoretically possible. No verified performance is known or expected. Included as the pinnacle of the 3-finger rings FL ladder.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flTuck, {
    id: 2320,
    name: 'Tuck FL | 2-Finger (Rings)',
    alt: '2-finger tuck FL rings · index-middle tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 9.0,
    risk: 5,
    joints: {fingers:5, wrist:4, elbow:3, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 7, mobility: 3, strength: 6,
    kcalPerRep: [0.46, 0.62],
    desc: 'A tuck front lever on rings on two fingers — index and middle only. Four joints and a free-spinning ring. Even at the tuck level this is a movement at the frontier of documented human grip-FL performance. Included as the entry point of the 2-finger rings FL ladder.',
    cues: 'No training prescription. 2-finger bar tuck FL and 3-finger tuck rings FL are both required. This is a benchmark, not a training exercise.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 2321,
    name: 'Front Lever | 2-Finger (Rings)',
    alt: '2-finger full front lever rings · index-middle FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 14.2,
    hof: true,
    pantheon: false,
    risk: 5,
    joints: {fingers:5, wrist:5, elbow:3, shoulder:6, neck:2, thoracic:3, lowerBack:5, si:2, hip:4, groin:0, knee:1, ankle:0, foot:0},
    technique: 9, mobility: 3, strength: 10,
    kcalPerRep: [0.76, 0.99],
    desc: 'A full front lever on rings on two fingers — four joints, full lever, free-spinning ring. A movement at the absolute outer boundary of what is theoretically achievable by a human being on a ring. No verified performance exists or is expected. Included as the pinnacle of the 2-finger rings FL ladder.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flTuck, {
    id: 2330,
    name: 'Tuck FL | 1-Finger (Rings)',
    alt: '1-finger tuck FL rings · single-finger tuck FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 11.0,
    pantheon: false,
    risk: 5,
    joints: {fingers:5, wrist:5, elbow:3, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:1, hip:2, groin:1, knee:1, ankle:0, foot:0},
    technique: 8, mobility: 3, strength: 7,
    kcalPerRep: [0.52, 0.70],
    desc: 'A tuck front lever on rings on one finger — index only. Two joints and a free-spinning ring at the tuck level. A purely theoretical human performance benchmark. Included for completeness of the 1-finger rings FL ladder.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  entries.push(cloneExercise(_flFull, {
    id: 2331,
    name: 'Front Lever | 1-Finger (Rings)',
    alt: '1-finger full front lever rings · single-finger FL rings',
    tags: ['back', 'shoulders', 'core', 'isometric', 'frontlever', 'grip', 'rings', 'elite'],
    diff: 17.0,
    hof: true,
    pantheon: false,
    risk: 5,
    joints: {fingers:5, wrist:5, elbow:5, shoulder:7, neck:2, thoracic:5, lowerBack:6, si:3, hip:5, groin:0, knee:1, ankle:0, foot:0},
    technique: 10, mobility: 3, strength: 10,
    kcalPerRep: [0.86, 1.12],
    desc: 'A full front lever on rings on one finger — index only, free-spinning ring, body completely horizontal. Two joints and a ring. The absolute combined ceiling of the 1-finger FL and ring FL ladders simultaneously, short of adding one-arm. A movement that defines the theoretical outer limit of grip-based front lever performance. No verified performance exists or will exist.',
    cues: 'No prescription.',
    equipment: 'Rings', position: 'Supine', youtube: 'LINK_TODO',
  }));

  const normalizedEntries = entries.map(exercise => ({ ...exercise }));

  window.frontleverStaticWorkouts = normalizedEntries.filter(ex => ex.position === 'Supine'   && ex.listed !== false);
  window.frontleverPullWorkouts   = normalizedEntries.filter(ex => ex.position === 'Hanging'  && ex.listed !== false);
  return normalizedEntries;
})();
