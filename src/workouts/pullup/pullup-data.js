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

const pullupStatic = [
{
    id: 133,
    name: "Australian Pull-Up | (Low Bar)",
    alt: "Inverted row Â· horizontal pull-up Â· bodyweight row",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 1.5,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:4},
    joints: {fingers:1, wrist:1, elbow:1, shoulder:1, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.11, 0.2],
    desc: "A horizontal pull performed beneath a low bar, Smith machine, or table. The body is angled with the heels on the floor, and the chest is pulled up to the bar. The closer the body is to horizontal, the harder the exercise becomes. This is the classic entry-level horizontal pulling progression for athletes who are not yet ready for a full vertical pull-up.",
    cues: "Keep the body rigid from head to heels. Drive the elbows back toward the hips rather than lifting the shoulders. Adjust difficulty by changing the bar height or body angle: more horizontal is harder, more upright is easier.",
    equipment: "Low bar",
    position: "Supine",
    youtube: "LINK_TODO"
  },

  {
    id: 134,
    name: "Australian Pull-Up | (Parallettes)",
    sidequestKey: "Australian Pull-Up | (Low Bar)",
    alt: "Neutral grip bodyweight row Â· parallel bar row",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 1.6,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:4},
    joints: {wrist:1, elbow:1, shoulder:1, neck:0, lowerBack:0, hip:0, knee:0, fingers:1, thoracic:0, si:0, groin:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.12, 0.21],
    desc: "A horizontal pulling row using low parallettes or push-up bars. The neutral grip and narrow handles create a wrist-friendly position while still demanding full body tension and scapular control. Parallette rows are an effective alternative when a low bar is not available.",
    cues: "Keep the torso straight and the core braced. Pull the chest toward the handles while keeping the elbows close to the body. Increase load by lowering the body angle or raising the height of the feet.",
    equipment: "Parallettes",
    position: "Supine",
    youtube: "LINK_TODO"
  },

  {
    id: 135,
    name: "Australian Pull-Up | (Rings)",
    sidequestKey: "Australian Pull-Up | Feet Elevated (Low Bar)",
    alt: "Ring row Â· gymnastics ring row Â· horizontal ring pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 2,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:4},
    joints: {wrist:1, elbow:1, shoulder:1, neck:0, lowerBack:0, hip:0, knee:0, fingers:1, thoracic:0, si:0, groin:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.13, 0.22],
    desc: "A horizontal row performed from low gymnastics rings. Ring rows add instability and require greater shoulder stability, grip control, and scapular coordination than a fixed-bar row. The body remains straight while the rings are pulled toward the chest.",
    cues: "Keep the rings stable and the body aligned from head to heels. Pull the chest toward the rings, not the elbows out to the sides. Reduce instability by lowering the rings or taking a more upright body angle.",
    equipment: "Gymnastic rings",
    position: "Supine",
    youtube: "LINK_TODO"
  },

  {
    id: 142,
    name: "Australian Pull-Up | Feet Elevated (Low Bar)",
    alt: "Elevated inverted row Â· feet-up Australian pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["back", "biceps", "shoulders", "core"],
    diff: 2.8,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:3},
    joints: {wrist:1, elbow:2, shoulder:2, neck:0, lowerBack:1, hip:0, knee:0, fingers:1, thoracic:1, si:0, groin:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.15, 0.26],
    desc: "A horizontal pull performed with the feet raised onto a bench, box, or suspension strap rather than resting on the floor, bringing the torso closer to true horizontal beneath a low bar. Elevating the feet shifts a substantially larger share of bodyweight onto the pulling arms than the standard floor-footed Australian Pull-Up, and the longer lever arm from heel to shoulder adds real anti-extension core demand to keep the body rigid. A simple, equipment-light way to overload horizontal rowing before progressing to a full vertical pull-up.",
    cues: "Set the feet on a stable surface roughly hip-height or higher â€” the more horizontal the torso, the harder the pull. Brace the core hard to stop the hips sagging as the body angle increases. Pull the chest to the bar while keeping the body rigid from heels to head.",
    equipment: "Low bar",
    position: "Supine",
    youtube: "LINK_TODO"
  },

  {
    id: 53,
    name: "Jumping Pull-Up | (Bar)",
    alt: "Jump-assisted pull-up Â· jump kip",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:false},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 1,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    joints: {fingers:1, wrist:1, elbow:1, shoulder:1, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.14, 0.25],
    desc: "A two-footed jump directly beneath the bar launches the body upward. Hands grip the bar at the peak of the jump, and the remaining upward momentum is combined with an active pull to bring the chin over the bar. No band or box required â€” a useful beginner tool when no assistance equipment is available. The explosive jump removes the need for significant pulling strength while still practicing the chin-over-bar endpoint and initiating the pulling pattern.",
    cues: "Jump straight up, not forward. Grip the bar firmly at the peak of the jump and immediately pull. The jump provides momentum but does not replace the pull â€” the arms must actively contribute.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },


  {
    id: 58,
    name: "Wide Neutral Grip Pull-Up | (Wide Bar)",
    alt: "Wide parallel grip pull-up Â· wide hammer grip pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Rear Delts", p:true},
      {n:"Biceps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 4.2,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:3},
    joints: {fingers:2, wrist:1, elbow:1, shoulder:3, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.23, 0.42],
    desc: "A pull-up on a wide parallel-handle attachment, dual V-bar, or multi-grip bar with palms facing each other and hands placed wider than shoulder-width. Combines the lat-width recruitment of the wide pronated pull-up with the wrist-neutral safety of the standard neutral grip pull-up. The wider neutral stance increases rear deltoid and mid-back activation compared to shoulder-width neutral grip, while sparing the wrists from pronation stress. Requires a specialised bar or attachment â€” not achievable on a standard straight bar.",
    cues: "Elbows drive straight down â€” the wide neutral grip will pull them outward slightly. Resist this and keep them tracking vertically to maximise lat tension. Full dead hang to chin over bar on every rep.",
    equipment: "Wide pull-up bar with neutral-grip attachment",
    position: "Hanging",
    youtube: "LINK_TODO"
  },


  {
    id: 61,
    name: "Pinch Grip Pull-Up | (Bar)",
    sidequestKey: "Fingertip Pull-Up | (Bar)",
    alt: "Thumb-pinch pull-up Â· lateral pinch pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps"],
    diff: 5.5,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:2},
    joints: {fingers:5, wrist:2, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.22, 0.4],
    desc: "A pull-up performed by pinching the bar â€” thumb on one side, fingertips on the other â€” rather than wrapping the hand in the standard hook grip. The pinch eliminates the mechanical advantage of the hook and transfers the entire load to the thumb, thenar eminence, and finger pad muscles. Extreme lateral pinch strength training used by rock climbers and grip specialists. Back and bicep demand is identical to a standard pull-up; pinch grip capacity becomes the binding constraint well before the back fatigues.",
    cues: "Start with a thicker bar â€” a 28mm standard bar makes the pinch nearly impossible. Build static pinch dead hangs before attempting full pull-up reps.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 62,
    name: "Fingertip Pull-Up | (Bar)",
    alt: "Extended-finger pull-up Â· open-hand pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps"],
    diff: 5.5,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:2},
    joints: {fingers:4, wrist:2, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.22, 0.4],
    desc: "A full pull-up performed on extended fingertips â€” the bar rests across the first or second joints of the fingers rather than the palm and curled fingers. Demands significant finger flexor tendon strength to maintain contact under bodyweight load. Common in martial arts and climbing conditioning. Back and bicep demand is identical to a standard pull-up; finger tendon capacity becomes the governing factor well before the back fatigues. Requires months of fingertip dead hang conditioning before adding the pulling motion.",
    cues: "Begin with static dead hangs on fingertips before attempting any pull. Tendon adaptation is slow â€” progress conservatively and never train fingertip pull-ups to grip failure.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 136,
    name: "Full Crimp Pull-Up | (Bar)",
    alt: "Crimped grip pull-up Â· closed crimp pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Finger Flexors", p:true},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "biceps", "grip"],
    diff: 6.5,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {wrist:2, elbow:2, shoulder:2, neck:0, lowerBack:0, hip:0, knee:0, fingers:5, thoracic:0, si:0, groin:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.22, 0.4],
    desc: "A pull-up performed in a full crimp grip â€” fingers bent at the first joint with the thumb wrapped over the index and middle fingers, creating maximum finger flexor tendon recruitment and the highest per-joint load of any pull-up grip. The full crimp is the dominant grip in rock climbing but carries the highest injury risk of all grip positions due to extreme A2 pulley stress at the base of the ring finger. Back and bicep demand is identical to a standard pull-up; the crimp becomes the governing factor and training stimulus. Sits between the fingertip pull-up and the 4-finger pull-up in finger reduction progressions due to its unique mechanical demands. Should only be trained by those with an established fingertip pull-up base and months of progressive finger tendon conditioning.",
    cues: "Never attempt full crimp pull-ups cold â€” the A2 pulley tears at this grip position with no warm-up. Start with half-crimp hangs, then full-crimp dead hangs over multiple sessions before adding movement. If any sharp pain appears at the base of the ring finger, stop immediately.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 146,
    name: "Chest-to-Bar Pull-Up | (Rings)",
    sidequestKey: "Fingertip Pull-Up | (Bar)",
    alt: "Ring CTB pull-up Â· ring high pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Rear Delts", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 5.3,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    joints: {wrist:2, elbow:2, shoulder:4, neck:0, lowerBack:1, hip:0, knee:0, fingers:2, thoracic:2, si:0, groin:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.32, 0.58],
    desc: "A pull-up performed on freely-rotating gymnastic rings, pulled high enough that the chest makes contact with the rings at the top â€” combining the Chest-to-Bar Pull-Up's demand for full scapular retraction and depression with the constant rotational instability of the rings. The rings drift and rotate through the entire pulling arc, and that instability is hardest to control exactly where the bar version is already hardest: at the top, closest to the body. One of the more demanding standard ring pulling variants short of any single-arm or L-sit work.",
    cues: "Establish a clean strict Ring Pull-Up and a bar Chest-to-Bar Pull-Up independently before combining them. Drive the elbows past the rings and bring the chest to meet them â€” don't crane the neck forward to close the gap. Let the rings settle into their natural rotation rather than forcing a fixed path.",
    equipment: "Gymnastic rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 63,
    name: "Archer Pull-Up | (Rings)",
    sidequestKey: "Archer Pull-Up | (Bar)",
    alt: "One-arm assisted ring pull-up Â· archer ring pull",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders", "core"],
    diff: 6.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:0, thoracic:2, lowerBack:3, si:1, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [0.36, 0.65],
    desc: "An archer pull-up performed on gymnastic rings. One ring is gripped in the primary pulling position while the other is extended wide and near-straight as the guide arm. Unlike the fixed bar, the rings rotate freely and swing under load â€” the guide arm creates instability that a bar does not, and the pulling ring demands constant active rotation control throughout. The most demanding unilateral ring pulling progression short of the full one-arm ring pull-up. Each side must be trained independently.",
    cues: "Master the bar archer pull-up before attempting this â€” the ring version amplifies every instability immediately. Keep tension through the guide arm the entire rep; allow the rings to find their natural rotation rather than fighting them.",
    equipment: "Gymnastic rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 64,
    name: "Straddle L-Sit Pull-Up | (Bar)",
    alt: "Straddle pull-up Â· wide-leg L pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Biceps", p:false}
    ],
    tags: ["back", "core", "biceps"],
    diff: 6.1,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:1, elbow:2, shoulder:3, neck:0, thoracic:2, lowerBack:2, si:1, hip:4, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 4,
    kcalPerRep: [0.32, 0.57],
    desc: "A pull-up performed while holding a straddle position â€” legs extended and split wide apart, parallel to the floor. Harder than the standard L-Sit Pull-Up because the wide leg position requires significant hip abductor and adductor activation to maintain the straddle against gravity, stacked on top of the hip flexor and core demand. The straddle also shifts the centre of mass differently, altering the balance challenge. A front lever pull-up prerequisite and a key gymnastics strength benchmark.",
    cues: "The straddle must remain parallel to the floor throughout â€” any leg drop terminates the set. Hip flexibility is a hard prerequisite. Master the full L-Sit Pull-Up before progressing to the straddle version.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 65,
    name: "2-Finger Pull-Up | (Bar)",
    alt: "Index-middle finger pull-up Â· bilateral 2-finger pull",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps"],
    diff: 8,
    hof: true,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:5, wrist:4, elbow:4, shoulder:5, neck:1, thoracic:1, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.22, 0.4],
    desc: "A full pull-up performed on two fingers per hand â€” typically the index and middle finger only, with remaining fingers raised. The two-finger interface places the entire bodyweight through eight finger joints, demanding extraordinary finger flexor tendon strength built over years of progressive loading. Documented in the martial arts and rock climbing communities. The back and bicep demand matches a standard pull-up; the governing limitation is finger tendon tensile capacity. Requires a minimum of several years of dedicated fingertip pull-up training before this can be attempted safely.",
    cues: "Years of fingertip pull-up training across all fingers is the non-negotiable prerequisite. Never train to finger flexor failure. Tendon injury at this loading intensity can be irreversible.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 66,
    name: "Knuckle Pull-Up | (Bar)",
    sidequestKey: "Wide Pull-Up",
    alt: "Fist pull-up Â· closed-fist pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps"],
    diff: 4.2,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:3},
    joints: {fingers:3, wrist:2, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 2,
    kcalPerRep: [0.22, 0.4],
    desc: "A pull-up performed with closed fists on the bar â€” knuckles on top, wrists in a neutral, unstressed position. Identical back and bicep demand to the standard pull-up; the only difference is the grip interface. The neutral wrist removes the pronation or supination torque of open-hand pull-ups, making this a useful option for athletes with wrist sensitivity. Common in martial arts conditioning where knuckle integrity and wrist alignment under load are trained simultaneously.",
    cues: "The knuckles of the index and middle finger form the contact point on the bar. Keep wrists straight â€” do not let them collapse inward under load. Full dead hang at the bottom on every rep.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 67,
    name: "4-Finger Pull-Up | (Bar)",
    sidequestKey: "Fingertip Pull-Up | (Bar)",
    alt: "No-thumb pull-up Â· open-crimp pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps"],
    diff: 5.8,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:4, wrist:2, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 4,
    kcalPerRep: [0.22, 0.4],
    desc: "A fingertip pull-up performed on four fingers only â€” the thumb is deliberately raised and not used. Removing the thumb eliminates the opposition that gives the standard hook grip its security, placing the entire load through the four finger flexors. One step above the full-fingertip pull-up  in difficulty. Used as a systematic finger tendon progression in climbing-specific strength training, following the pattern: five-finger â†’ four-finger â†’ three-finger â†’ two-finger â†’ one-finger.",
    cues: "Masterly of the full Fingertip Pull-Up  across multiple sets is the prerequisite. Build dead hangs in the four-finger position before pulling. Never train to failure â€” tendon recovery from injury at this loading level is slow.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 68,
    name: "3-Finger Pull-Up | (Bar)",
    sidequestKey: "Full Crimp Pull-Up | (Bar)",
    alt: "3-finger pull-up Â· index-middle-ring pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps"],
    diff: 6.8,
    hof: false,
    str: {suit:true, eff:3},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:5, wrist:2, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.22, 0.4],
    desc: "A pull-up performed on the index, middle, and ring fingers only â€” pinky and thumb raised. The step between the four-finger pull-up and the two-finger pull-up in the finger-reduction progression. Distributes bodyweight across six finger joints rather than eight, significantly increasing per-joint load. Documented in traditional martial arts and elite rock climbing training. The same pattern used in push-up finger progressions (3-Finger Push-Up, id:106 in the push-up library) applied to vertical pulling.",
    cues: "The four-finger pull-up  must be fully mastered before attempting. Static three-finger dead hangs for accumulated time across multiple sessions are mandatory before pulling. This is a long-term conditioning target, not an exercise to rush.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 69,
    name: "1-Finger Pull-Up | (Bar)",
    alt: "Single-finger pull-up Â· index pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps"],
    diff: 9.5,
    hof: true,
    pantheon: true,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:5, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.22, 0.4],
    desc: "A full pull-up performed bilaterally on one finger per hand â€” typically the index finger â€” with all other fingers raised. The entire bodyweight load transfers through two finger joints. The absolute pinnacle of the finger-reduction pull-up progression: Dead Hang â†’ Fingertip â†’ 4-Finger â†’ 3-Finger â†’ 2-Finger â†’ 1-Finger. Verified performances are extremely rare and represent a lifetime of systematic finger tendon conditioning. The pulling mechanics are unchanged from the standard pull-up; the limitation is entirely the tensile capacity of a single finger flexor tendon.",
    cues: "No training prescription is appropriate. This is a demonstration of decades of progressive tendon adaptation. Attempting without the full preceding progression ladder causes catastrophic tendon rupture.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 70,
    name: "V-Sit Pull-Up | (Bar)",
    alt: "V-pull Â· above-horizontal leg pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Biceps", p:false}
    ],
    tags: ["back", "core", "biceps"],
    diff: 7.5,
    hof: false,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:1, elbow:2, shoulder:3, neck:0, thoracic:2, lowerBack:2, si:2, hip:5, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 5,
    kcalPerRep: [0.36, 0.65],
    desc: "A pull-up performed while holding both legs above the horizontal â€” forming a V-shape with the torso, ideally reaching the bar or higher. This exceeds the L-sit and straddle L-sit in hip flexor and abdominal demand: the legs must be driven above horizontal and held there through the entire pulling set. The progressive endpoint of the L-sit pull-up family: L-sit â†’ Straddle L-sit â†’ V-sit. Requires extraordinary hip flexor strength and hamstring flexibility stacked on top of advanced pulling ability.",
    cues: "Master 5+ Straddle L-Sit Pull-Ups  before attempting. The legs above horizontal will dramatically increase the forward tilt demand on the pulling chain. Start with a tuck-to-straddle approach before attempting full V-sit on every rep.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 71,
    name: "L-Sit Pull-Up | (Rings)",
    sidequestKey: "Straddle L-Sit Pull-Up | (Bar)",
    alt: "Ring L-pull Â· gymnastic ring L-sit pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Biceps", p:false}
    ],
    tags: ["back", "core", "biceps", "shoulders"],
    diff: 6.4,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:2, elbow:2, shoulder:4, neck:0, thoracic:2, lowerBack:2, si:0, hip:3, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.32, 0.57],
    desc: "An L-sit pull-up performed on gymnastic rings. The combined instability of the rings and the static L-sit demand makes this significantly harder than the bar version â€” the rings rotate and swing while the legs must remain parallel to the floor, requiring continuous coordination between shoulder stabilisation, lat pulling, and core bracing. A direct gymnastics strength benchmark and a precursor to the front lever pull-up on rings.",
    cues: "Both the ring pull-up and the bar L-sit pull-up must be well established before combining them. The L position must be set before the first pull and held until the set ends â€” legs dropping means the set is over.",
    equipment: "Gymnastic rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 72,
    name: "One-Arm Towel Pull-Up | (Bar)",
    alt: "Single-arm towel pull-up Â· unilateral cloth pull",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:true},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "biceps", "core"],
    diff: 6.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:4, wrist:3, elbow:4, shoulder:5, neck:0, thoracic:2, lowerBack:2, si:0, hip:1, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.35, 0.63],
    desc: "One hand grips the bar directly while the other hand grips a towel draped over the bar â€” the towel hand is the primary working arm. The soft, thick towel interface eliminates the mechanical security of bar contact and demands significantly greater grip crushing strength from the pulling hand throughout the eccentric and concentric phases. The back and unilateral pulling demand is close to an archer or uneven pull-up, but the grip challenge stacks on top. Used in grappling and combat sports conditioning where unilateral grip strength under pulling load is paramount.",
    cues: "Use a towel of consistent thickness throughout. The towel hand will want to slide â€” grip with the full hand and actively squeeze harder as fatigue builds. Master both the Uneven Pull-Up  and standard Towel Pull-Up  first.",
    equipment: "Pull-up bar + 1 towel",
    position: "Hanging",
    youtube: "LINK_TODO"
  },/* â”€â”€ NEW PULL-UP VARIATIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

  {
    id: 76,
    name: "Pull-Up | Tempo (Bar)",
    sidequestKey: "Wide Pull-Up",
    alt: "Slow pull-up Â· controlled pull-up Â· 3-1-3 pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 4.3,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:2},
    joints: {fingers:2, wrist:1, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.32, 0.57],
    desc: "Exactly as the Tempo Push-Up (id:52 in the push-up library) applied to vertical pulling. A pull-up performed with a controlled tempo â€” typically a 3â€“4 second eccentric descent, 1â€“2 second pause at the dead-hang bottom, and a controlled 2â€“3 second concentric pull rather than an explosive drive. Increases time under tension significantly, eliminates momentum, and exposes weaknesses throughout the full range. Each rep is substantially harder than the same rep count at normal speed.",
    cues: "Count the seconds aloud or in your head. The descent is as important as the pull â€” never drop. The moment the controlled pace breaks, the set is over.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

  {
    id: 144,
    name: "Pull-Up | Extended Negative (Bar)",
    sidequestKey: "Pull-Up | Tempo (Bar)",
    alt: "Slow negative pull-up Â· extended eccentric pull-up Â· max-tempo negative",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 4.5,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:4},
    end: {suit:false, eff:1},
    joints: {wrist:1, elbow:3, shoulder:3, neck:0, lowerBack:1, hip:0, knee:0, fingers:2, thoracic:1, si:0, groin:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.30, 0.54],
    desc: "Pull all the way to the top of a standard pull-up under full concentric strength, then lower for an extended, deliberately controlled eccentric of 8â€“15 seconds or longer â€” well beyond the 5â€“8 second target of the beginner Negative Pull-Up. Because this variant starts from a self-generated top position rather than a jump or step, it requires the full concentric strength of a standard pull-up before it can be trained at all, making it a strength and hypertrophy overload tool for lifters who already own the movement rather than a regression for those who don't. The greatly extended time under tension at long muscle lengths is the foundation most one-arm pull-up programmes build their early eccentric work on.",
    cues: "Pull up with full effort â€” no jumping or stepping to the top. Once at the top, fight the descent the entire way down, aiming for 10+ seconds before reaching a dead hang. Break the descent into checkpoints (top, 90Â°, near-bottom) if holding a single continuous count is too hard at first.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },


  {
    id: 78,
    name: "One-Arm Pull-Up | (Rings)",
    alt: "Single-arm ring pull-up Â· unilateral ring pull",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:true},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "biceps", "core", "shoulders"],
    diff: 9,
    hof: true,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:5, wrist:5, elbow:5, shoulder:5, neck:1, thoracic:2, lowerBack:4, si:2, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 5,
    kcalPerRep: [0.4, 0.72],
    desc: "A full dead-hang pull-up performed on a single gymnastic ring, from complete arm extension to chin over ring, with the other arm held free. The ring's free rotation adds an entirely new dimension beyond the standard one-arm pull-up: the ring rotates and swings under single-point load, demanding constant wrist-rotation control and shoulder stabilisation stacked on top of the full unilateral pulling demand. Arguably harder than the pronated one-arm pull-up on a fixed bar. Verified performances are extraordinarily rare.",
    cues: "The Ring Archer Pull-Up  is the direct prerequisite. Expect the ring to rotate â€” control the degree rather than fighting it completely. Train each side independently over years.",
    equipment: "Gymnastic rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  }, /* â”€â”€ WEIGHTED PULL-UP â€” BODYWEIGHT % TIERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ *//* â”€â”€ WEIGHTED CHIN-UP â€” BODYWEIGHT % TIERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ *//* â”€â”€ WEIGHTED NEUTRAL GRIP PULL-UP â€” BODYWEIGHT % TIERS â”€â”€â”€â”€â”€â”€â”€â”€ *//* â”€â”€ ADDITIONAL PULL-UP VARIATIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */





  {
    id: 95,
    name: "Neutral Grip Pull-Up | (Band)",
    alt: "Banded hammer pull-up Â· assisted parallel grip pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 2.5,
    str: {suit:false, eff:2},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    joints: {fingers:1, wrist:1, elbow:1, shoulder:1, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.12, 0.22],
    desc: "Exactly as the Pull-Up | (Band), performed with a neutral (palms-facing-each-other) grip using a V-bar, parallel handles, or multi-grip bar. For athletes with wrist, elbow, or shoulder sensitivity, the neutral grip is the most anatomically comfortable entry point into band-assisted pulling. The wrist-neutral position reduces elbow valgus torque under the band-assisted load, making this the preferred beginner pulling regression for individuals who find the pronated or supinated grip uncomfortable.",
    cues: "Use the lightest band that still allows clean full-range form. Progress to lighter bands over time. Transition to unassisted neutral-grip pull-ups before switching to pronated or supinated grips.",
    equipment: "Pull-up bar with neutral-grip attachment / V-bar + resistance band",
    position: "Hanging",
    youtube: "LINK_TODO"
  },



  {
    id: 98,
    name: "Side Pull-Up | (Bar)",
    sidequestKey: "Fingertip Pull-Up | (Bar)",
    alt: "Lateral pull-up Â· one-sided vertical pull",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["back", "biceps", "shoulders", "core"],
    diff: 5,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:2, elbow:2, shoulder:4, neck:0, thoracic:2, lowerBack:2, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 3,
    kcalPerRep: [0.27, 0.49],
    desc: "Both hands grip the bar but the body is pulled up and to one side so the head passes to the side of the hands â€” the bar ends up beside the neck at the top rather than in front of it. The torso leans and the pulling side arm drives from a different shoulder angle than a standard pull-up, increasing lateral lat and rear deltoid recruitment on the pulling side. Distinct from the Behind-The-Neck Pull-Up in that the bar does not travel behind the head. Trains an oblique pulling vector useful as a precursor to typewriter and archer variations.",
    cues: "Pull to one side consistently for the full set, then switch sides next set. The bar should pass the ear â€” not the back of the neck. Keep the non-pulling arm engaged throughout.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },



  {
    id: 101,
    name: "Superman Pull-Up | (Bar)",
    alt: "Airborne wide-to-narrow pull-up Â· explosive grip-change pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 6.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:3, wrist:2, elbow:3, shoulder:3, neck:0, thoracic:1, lowerBack:1, si:1, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.35, 0.63],
    desc: "An explosive pull-up where the hands begin wide apart and release at the peak, the body extends horizontally above the bar for a brief moment â€” arms stretched out in front like a flying position â€” before re-gripping the bar narrow at the catch. The brief extension phase requires extraordinary explosive pulling power, air time, and spatial awareness. The movement is a pull-up that transitions into a momentary flying position and back into a grip. Distinct from the clap and grip-switch variations by the full horizontal body extension in the airborne phase.",
    cues: "The explosive pull must generate enough height to fully extend the arms forward before the catch. A high box or elevated bar can be used to practice the extension phase. Master the Explosive Pull-Up  and Grip-Switch Pull-Up  first.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 800,
    name: "Pull-Up",
    pathNode: true,
    alt: "Standard pull-up Â· overhand pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Rear Delts", p:true},
      {n:"Biceps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders", "biceps"],
    diff: 3.9,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:3},
    joints: {fingers:2, wrist:1, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.24, 0.42],
    desc: "The standard vertical pull performed with a pronated (overhand, palms-away) grip at shoulder width, from a full dead hang to chin over the bar. The pronated grip places the biceps in a mechanically weaker line of pull than the supinated chin-up, shifting more of the load onto the lats and rear deltoids and making this the marginally harder of the two base grips for most people. The foundational bilateral vertical pull that every other pull-up variant builds from.",
    cues: "Grip the bar shoulder-width, palms facing away. Depress the scapulae before bending the elbows. Drive the elbows down and back rather than just down. Reach full extension at the bottom of every rep and clear the chin over the bar at the top.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 801,
    name: "Close Pull-Up",
    sidequestKey: "Pull-Up",
    alt: "Narrow pull-up",
    muscles: [
      {n:"Biceps", p:true},
      {n:"Lats", p:true},
      {n:"Brachialis", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps"],
    diff: 3.8,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:3},
    joints: {fingers:2, wrist:1, elbow:3, shoulder:1, neck:0, thoracic:1, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.23, 0.41],
    desc: "A pull-up with the hands placed close together, thumbs nearly touching, in a pronated grip. The narrow pronated position increases brachialis and biceps involvement compared to standard width, marginally reducing the difficulty relative to the base pull-up despite the grip still being overhand. Elbow loading is elevated versus standard width due to the more direct pulling line.",
    cues: "Bring the hands in until thumbs are nearly touching, palms facing away. Depress the scapulae, then drive the elbows straight back, keeping them close to the torso. Lower to a full dead hang each rep.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 802,
    name: "Slow Negative Pull-Up",
    sidequestKey: "Pull-Up",
    alt: "Negative pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 3.7,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:3},
    end: {suit:false, eff:2},
    joints: {fingers:2, wrist:1, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.16, 0.28],
    desc: "Step or jump to the chin-over-bar top position with a pronated grip, then lower under full control to a dead hang as slowly as possible, targeting 5-8 seconds. Since muscles are stronger eccentrically than concentrically, this lets athletes who cannot yet perform a full pull-up train meaningful tension in the pronated pulling line. A key regression before an unassisted pull-up is achievable.",
    cues: "Use a box to reach the top without exhausting yourself in the jump. Grip the bar palms away. Release the box and resist the descent the entire way down. Control to a full dead hang, then step back up.",
    equipment: "Pull-up bar + box or jump to reach top",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 803,
    name: "Wide Pull-Up",
    sidequestKey: null,
    alt: "Wide-grip pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Rear Delts", p:true},
      {n:"Biceps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 4.6,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:2},
    joints: {fingers:2, wrist:1, elbow:1, shoulder:3, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.27, 0.48],
    desc: "A pull-up with the hands placed wider than shoulder-width in a pronated grip. The wider stance further reduces the already-limited biceps leverage of the pronated grip, shifting almost the entire load onto the lats and rear delts. The most bicep-starved bilateral pull-up variant and a real step up from the standard-width pull-up.",
    cues: "Spread hands to roughly 1.5x shoulder width, palms facing away. Resist the elbows flaring fully forward; drive them down and back. Lower to a full dead hang each rep.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 804,
    name: "Paused Pull-Up",
    sidequestKey: "Wide Pull-Up",
    alt: "Dead-stop pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 4.7,
    str: {suit:true, eff:5},
    vol: {suit:true, eff:5},
    end: {suit:false, eff:2},
    joints: {fingers:2, wrist:1, elbow:2, shoulder:2, neck:0, thoracic:1, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 2,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.26, 0.46],
    desc: "A standard pronated pull-up with a deliberate 1-3 second dead-stop pause held with the chin clearly over the bar before lowering. Removing the stretch-reflex and momentum carryover at the top forces the lats and biceps to control the hardest part of the range under pure tension.",
    cues: "Pull to a full chin-over-bar position. Hold completely still for 1 to 3 seconds - no bouncing. Keep the scapulae depressed through the pause. Lower under full control to a dead hang each rep.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 805,
    name: "Pull-Up | (Rings)",
    sidequestKey: "Wide Pull-Up",
    alt: "Ring pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:false},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "biceps", "shoulders", "core"],
    diff: 4.9,
    str: {suit:true, eff:4},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:3},
    joints: {fingers:1, wrist:2, elbow:1, shoulder:2, neck:0, thoracic:1, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 3,
    kcalPerRep: [0.27, 0.48],
    desc: "A pull-up performed on gymnastic rings, held in a pronated grip that the rings will constantly try to rotate out of toward neutral. Resisting that rotation for the full set adds a forearm and wrist stability demand absent from a fixed bar, on top of the already bicep-limited pronated pulling line.",
    cues: "Grip the rings palms away and actively resist rotation toward neutral throughout every rep. Depress the scapulae, then pull the elbows down and back. Lower to a full hang each rep.",
    equipment: "Gymnastic rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 806,
    name: "Plyo Pull-Up",
    sidequestKey: "Fingertip Pull-Up | (Bar)",
    alt: "Explosive pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "power"],
    diff: 5,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:1, elbow:3, shoulder:2, neck:0, thoracic:1, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 4,
    kcalPerRep: [0.34, 0.61],
    desc: "A pronated pull-up where the concentric is executed explosively enough to briefly release the bar at the top before re-gripping. The pronated catch places high peak demand on the elbow and biceps tendon, and the reduced bicep leverage of the overhand grip makes the required power output higher than the chin-up equivalent.",
    cues: "Drive maximum acceleration off the dead hang, aiming to get the chest past the bar. Release at the apex, re-grip immediately, never catching with locked elbows. Lower under control to a full hang before the next rep.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 807,
    name: "Behind-the-Neck Pull-Up",
    sidequestKey: "Fingertip Pull-Up | (Bar)",
    alt: "Wide-grip pull-up to nape",
    muscles: [
      {n:"Lats", p:true},
      {n:"Rear Delts", p:true},
      {n:"Rhomboids", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 5.8,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:2, elbow:1, shoulder:5, neck:2, thoracic:2, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 4,
    strength: 3,
    kcalPerRep: [0.28, 0.50],
    desc: "A wide pronated pull-up in which the bar is pulled down behind the head to the nape of the neck rather than to the front of the chin. The extreme external shoulder rotation and rearward head position demand exceptional shoulder-joint mobility, and the reduced margin for error at end range means poor mobility converts the movement into a significant impingement risk. Distinct from the Side Pull-Up, where the bar passes beside the head rather than behind it. Not recommended for athletes without well-established overhead shoulder mobility.",
    cues: "Only attempt with fully warmed-up, mobile shoulders. Take a wide pronated grip and pull with control, letting the bar travel behind the head to the nape of the neck rather than forcing the position. Stop immediately at any pinching sensation. Lower under control to full extension.",
    equipment: "Wide pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 808,
    name: "Archer Pull-Up | (Bar)",
    sidequestKey: null,
    pathNode: true,
    alt: "Bar archer pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders", "core"],
    diff: 6.5,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:3, wrist:2, elbow:3, shoulder:4, neck:0, thoracic:2, lowerBack:2, si:1, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.34, 0.61],
    desc: "A pull-up in which one arm does nearly all the pulling in a pronated grip while the other arm extends out to the side, nearly straight, providing only minimal stabilising contact. The pronated working arm has less bicep leverage than the supinated Archer Chin-Up, making this the marginally harder of the two archer variants. The primary bilateral-assisted bridge toward the One-Arm Pull-Up.",
    cues: "Take a wide grip, working hand pronated, extended arm nearly straight. Pull toward the working side, not straight up. Keep tension through the straight arm and reduce its assistance over time. Train each side for equal sets.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 809,
    name: "Uneven Pull-Up",
    sidequestKey: "Archer Pull-Up | (Bar)",
    alt: "Offset-height pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:false},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "biceps", "core"],
    diff: 6.1,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    joints: {fingers:3, wrist:1, elbow:4, shoulder:3, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 4,
    kcalPerRep: [0.29, 0.52],
    desc: "One hand grips the bar in a pronated position at standard height while the other hand grips a lower attachment - a hanging band or towel loop - shifting most of the load onto the top arm. The pronated top-arm position has less mechanical advantage than the supinated Uneven Chin-Up, making this fractionally harder. Lowering the assisting attachment over weeks increases unilateral demand toward a full one-arm pull-up.",
    cues: "Grip the bar pronated with the working hand, and the lower attachment with the assisting hand. Lower the assisting attachment's height gradually over weeks. Keep the torso vertical - no lateral lean toward the working arm.",
    equipment: "Pull-up bar + hanging band / towel loop",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 810,
    name: "One-Arm Pull-Up | Lock-Off",
    sidequestKey: null,
    alt: "One-arm flex hang",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:true},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "biceps", "core"],
    diff: 7.3,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:1, elbow:3, shoulder:4, neck:0, thoracic:2, lowerBack:2, si:1, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 4,
    kcalPer3SecHold: [0.11, 0.20],
    desc: "Pull to the top using a bilateral pronated pull-up, then release one hand and hold the chin-over-bar position on a single pronated arm for as long as possible. Only the isometric hold is unilateral - the concentric remains bilateral. The pronated grip's weaker bicep leverage makes this fractionally harder than the equivalent chin-up lock-off. Trains the specific single-arm holding strength required for the One-Arm Pull-Up. Train each side independently.",
    cues: "Perform a full bilateral pull-up, then release the free hand cleanly at the top. Keep the working elbow close to the torso throughout the hold. Resist lateral torso lean toward the working side. Progress hold duration before advancing to One-Arm Negative Pull-Ups.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 811,
    name: "One-Arm Pull-Up | Negative",
    sidequestKey: "One-Arm Pull-Up | Lock-Off",
    alt: "One-arm negative pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:true},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "biceps", "core"],
    diff: 7.8,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:3, wrist:2, elbow:5, shoulder:5, neck:0, thoracic:2, lowerBack:3, si:1, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.29, 0.51],
    desc: "Jump or press with both arms to the top position, chin over bar in a pronated grip, then release one hand and lower as slowly as possible on a single pronated arm to a full dead hang. The weaker pronated bicep leverage during the eccentric makes this harder than the equivalent chin-up negative. Elbow loading at the bottom of the single-arm eccentric is extreme. The key bridge toward the full One-Arm Pull-Up. Target 5-8 seconds lowering per rep. Train each side independently.",
    cues: "Jump or use a box to reach the top without exhausting yourself getting there. Release the assisting hand cleanly at the top. Keep the lowering arm's elbow close to the body throughout. Control the descent to a full dead hang. Stop if elbow pain appears.",
    equipment: "Pull-up bar + box or jump to reach top",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 812,
    name: "Wrist-Assisted One-Arm Pull-Up",
    sidequestKey: "One-Arm Pull-Up | Lock-Off",
    alt: null,
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:true},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "biceps", "core"],
    diff: 7.2,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:3, wrist:3, elbow:5, shoulder:5, neck:0, thoracic:2, lowerBack:3, si:1, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.31, 0.55],
    desc: "One hand grips the bar in a pronated grip while the free hand wraps around the wrist or lower forearm of the working arm at bar height, providing direct self-assistance. The level of help is self-modulated - as unilateral strength builds, grip pressure from the free hand decreases toward zero. The preferred entry point for most athletes approaching their first One-Arm Pull-Up. Train each side independently.",
    cues: "Grip the wrist - not the bar - with the free hand, both fists at bar height. Reduce assisting pressure progressively across sessions rather than in single jumps. Brace the obliques hard from the first rep.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 813,
    name: "Finger-Assisted One-Arm Pull-Up",
    sidequestKey: "One-Arm Pull-Up | Lock-Off",
    alt: null,
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:true},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "biceps", "core", "grip"],
    diff: 7.4,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:5, wrist:3, elbow:5, shoulder:5, neck:0, thoracic:2, lowerBack:3, si:1, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 1,
    strength: 5,
    kcalPerRep: [0.32, 0.57],
    desc: "The working hand grips the bar in a full pronated grip while the assisting hand grips the bar beside it using only a small, fixed number of fingers - typically starting at four and reduced by one at a time as unilateral strength improves, down to a single finger before the unassisted One-Arm Pull-Up. The finger-count ladder gives a more precisely gradable assistance level than wrist-assisted work. Reduce assisting fingers only once 5-10 clean reps are achieved. Train each side independently.",
    cues: "Place the working hand on the bar pronated. Place only the agreed number of fingers from the assisting hand beside it, keeping the rest of that hand open. Pull primarily through the working arm - the assisting fingers should feel like a light touch. Drop to one fewer finger once 5-10 reps are clean.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 814,
    name: "Typewriter Pull-Up",
    sidequestKey: null,
    alt: null,
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Core", p:false}
    ],
    tags: ["back", "biceps", "shoulders"],
    diff: 7.7,
    str: {suit:true, eff:5},
    vol: {suit:false, eff:2},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:1, elbow:3, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.37, 0.66],
    desc: "Pull to bar height in a wide pronated grip, then sweep laterally from side to side at constant height before descending. Each side of the sweep approaches Archer Pull-Up loading as the body shifts to one arm. The pronated grip's weaker bicep leverage makes this marginally harder than the Typewriter Chin-Up throughout each lateral traverse.",
    cues: "Pull to bar height before initiating the lateral shift - never start the sweep from below the bar. Keep constant height throughout the traverse. Control the sweep speed. Return to centre before descending to a full dead hang.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 815,
    name: "Around The World Pull-Up",
    sidequestKey: null,
    hof: true,
    alt: null,
    muscles: [
      {n:"Lats", p:true},
      {n:"Rear Delts", p:true},
      {n:"Biceps", p:true},
      {n:"Core", p:true}
    ],
    tags: ["back", "biceps", "shoulders", "core"],
    diff: 7.2,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:1, elbow:3, shoulder:3, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 2,
    strength: 4,
    kcalPerRep: [0.42, 0.75],
    desc: "Pull to bar height in a wide pronated grip, then trace a full lateral arc - sweeping from one side all the way to the other at constant height - before descending. Any sag mid-traverse indicates insufficient base strength. The extreme ends of each sweep approach archer pull-up loading, and this carries the highest technique demand of any bilateral pull-up variant. Master the Typewriter Pull-Up first.",
    cues: "Pull to bar height before starting the arc - height must stay constant through the entire sweep. Drive each side by shifting weight actively toward that arm, not by dipping. Reverse direction smoothly at the extremes. Lower to a full dead hang after completing the arc.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 816,
    name: "Scapular Pull-Up",
    sidequestKey: null,
    alt: "Scapular retraction pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Rear Delts", p:false},
      {n:"Rhomboids", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 2.2,
    str: {suit:false, eff:1},
    vol: {suit:false, eff:1},
    end: {suit:true, eff:3},
    joints: {fingers:1, wrist:1, elbow:0, shoulder:1, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.06, 0.10],
    desc: "From a full pronated dead hang, the body is raised a few centimetres by depressing and retracting the scapulae only - the elbows stay completely straight throughout. Isolates the scapular initiation that every well-performed pull-up should begin with. Skipping this teaches pulling with the arms alone, losing lat activation and overloading the biceps tendon.",
    cues: "Hang at full arm extension, palms facing away. Without bending the elbows, draw the shoulder blades down and back. Slowly return to the dead hang. If the elbows bend, it has become the start of a pull-up.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 817,
    name: "Band-Assisted Pull-Up | (Band)",
    sidequestKey: null,
    alt: "Banded pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Rear Delts", p:true},
      {n:"Biceps", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders", "biceps"],
    diff: 2.7,
    str: {suit:false, eff:2},
    vol: {suit:true, eff:3},
    end: {suit:true, eff:4},
    joints: {fingers:1, wrist:1, elbow:1, shoulder:1, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.11, 0.19],
    desc: "A pronated-grip pull-up with a resistance band looped over the bar and placed under the feet or knees to reduce effective load. The band provides the most assistance at the bottom of the pull, exactly where beginners are weakest, and is the preferred entry point for athletes who cannot yet complete a single unassisted pull-up.",
    cues: "Loop the band over the bar and step or kneel into it before gripping the bar shoulder-width, palms away. Depress the scapulae before the first pull. Use the lightest band that still allows clean form, and progress to lighter bands over time.",
    equipment: "Pull-up bar + resistance band",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 818,
    name: "Machine-Assisted Pull-Up | (Machine)",
    sidequestKey: null,
    alt: "Assisted pull-up machine",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:false},
      {n:"Rear Delts", p:false},
      {n:"Core", p:false}
    ],
    tags: ["back", "shoulders"],
    diff: 1.8,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:4},
    joints: {fingers:1, wrist:1, elbow:1, shoulder:1, neck:0, thoracic:0, lowerBack:0, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 1,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.13, 0.23],
    desc: "A pull-up performed on a counterweighted assisted pull-up machine, kneeling or standing on a weighted platform that offsets a chosen percentage of bodyweight through the entire range. Unlike a band, the assistance stays constant across the full rep rather than tapering out near the top, making the finish of each rep more forgiving than banded work. The standard gym-based entry point into vertical pulling for beginners without access to a band or a partner spot.",
    cues: "Set the counterweight to the highest assistance level you can complete 8-10 clean reps with, then reduce the assistance in small increments as pulling strength improves. Step onto the platform smoothly rather than dropping onto it. Pull to a full chin or chest-height finish depending on machine design.",
    equipment: "Machine",
    position: "Kneeling",
    youtube: "LINK_TODO"
  },

{
    id: 819,
    name: "Kipping Pull-Up",
    sidequestKey: null,
    alt: "Kip pull-up",
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Biceps", p:false}
    ],
    tags: ["back", "core", "power"],
    diff: 2.4,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:4},
    joints: {fingers:1, wrist:1, elbow:1, shoulder:2, neck:0, thoracic:1, lowerBack:2, si:1, hip:2, groin:0, knee:0, ankle:0, foot:0},
    technique: 4,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.18, 0.32],
    desc: "A pull-up in which a rhythmic hip and leg swing generates momentum that drives the chin over the bar, replacing much of the strict pulling strength demand with timing and hip-drive technique. The pattern used in CrossFit-style training to accumulate high rep counts well beyond strict pull-up capacity. Trades raw pulling strength for coordination, core-to-shoulder timing, and shoulder mobility under a swinging load.",
    cues: "Initiate the kip from a hollow-to-arch swing of the hips and legs, not the arms. Time the pull to coincide with the forward drive of the hips at the top of the swing. Keep the shoulders engaged throughout - a fully passive shoulder invites injury. Build the strict pull-up first; the kip should add to existing strength, not replace it entirely.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 820,
    name: "Butterfly Pull-Up",
    sidequestKey: "Wide Pull-Up",
    alt: null,
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Rear Delts", p:false}
    ],
    tags: ["back", "core", "power"],
    diff: 4.6,
    str: {suit:false, eff:1},
    vol: {suit:true, eff:5},
    end: {suit:true, eff:4},
    joints: {fingers:2, wrist:2, elbow:1, shoulder:3, neck:0, thoracic:2, lowerBack:2, si:1, hip:3, groin:0, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 1,
    kcalPerRep: [0.20, 0.35],
    desc: "A continuous-cycle kipping pull-up in which the hips trace a circular path rather than a front-to-back swing, allowing the athlete to chain reps together with almost no pause at the top or bottom of each rep. Used in competitive CrossFit to maximise pull-up rate of fire. Demands significantly more shoulder mobility, timing precision, and grip endurance than a standard kipping pull-up, since the continuous circular motion never lets the shoulder rest in a stable position.",
    cues: "The hips move in a continuous circle - forward and up, then back and down - never stopping at either end of the pull-up. Grip must stay relaxed enough to allow the hands to roll around the bar without repositioning between reps. This is a rate-of-fire skill for high-volume sets, not a strength-building variant - build strict and kipping pull-up capacity first.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 821,
    name: "Australian Pull-Up | (TRX)",
    sidequestKey: "Australian Pull-Up | Feet Elevated (Low Bar)",
    alt: "TRX inverted row",
    muscles: [
      {n:"Lats", p:true},
      {n:"Biceps", p:true},
      {n:"Rear Delts", p:true},
      {n:"Core", p:true}
    ],
    tags: ["back", "biceps", "shoulders", "core"],
    diff: 2.2,
    str: {suit:true, eff:3},
    vol: {suit:true, eff:4},
    end: {suit:true, eff:3},
    joints: {fingers:1, wrist:1, elbow:1, shoulder:2, neck:0, thoracic:1, lowerBack:1, si:0, hip:0, groin:0, knee:0, ankle:0, foot:0},
    technique: 3,
    mobility: 1,
    strength: 1,
    kcalPerRep: [0.13, 0.23],
    desc: "A horizontal row performed on TRX suspension straps instead of a fixed low bar or rings. The straps hang independently and can drift both toward and away from each other, adding a two-handed instability component beyond what a single rotating ring pair provides. Body angle scales the load the same way as other Australian Pull-Up variants: more horizontal is harder, more upright is easier.",
    cues: "Set the straps to hover at roughly hip height, handles turned to a comfortable grip. Keep the body rigid from head to heels and pull the chest to the handles, resisting any independent strap drift. Adjust difficulty by walking the feet further under the anchor point for an easier angle, or further away for a harder one.",
    equipment: "TRX",
    position: "Supine",
    youtube: "LINK_TODO"
  },

{
    id: 822,
    name: "Straddle L-Sit Pull-Up | (Rings)",
    sidequestKey: "Straddle L-Sit Pull-Up | (Bar)",
    alt: null,
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Biceps", p:false}
    ],
    tags: ["back", "core", "biceps", "shoulders"],
    diff: 6.25,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:2, elbow:2, shoulder:4, neck:0, thoracic:2, lowerBack:2, si:1, hip:4, groin:2, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 4,
    kcalPerRep: [0.33, 0.58],
    desc: "A Straddle L-Sit Pull-Up performed on gymnastic rings instead of a fixed bar. The rings rotate and drift under the combined straddle-hold and pulling demand, adding a stabilisation cost on top of the hip abductor and core tension already required to hold the straddle. Easier than a full ring L-Sit Pull-Up since the straddle reduces hip flexor loading, but harder than the bar version due to the ring instability.",
    cues: "Establish the straddle position before the first pull and hold it for the entire set - any leg drop ends the rep. Grip the rings firmly and allow them to find a natural rotation rather than forcing a fixed path. Master the bar version first.",
    equipment: "Gymnastic rings",
    position: "Hanging",
    youtube: "LINK_TODO"
  },

{
    id: 823,
    name: "L-Sit Pull-Up | (Bar)",
    sidequestKey: "Straddle L-Sit Pull-Up | (Bar)",
    alt: null,
    muscles: [
      {n:"Lats", p:true},
      {n:"Core", p:true},
      {n:"Hip Flexors", p:true},
      {n:"Biceps", p:false}
    ],
    tags: ["back", "core", "biceps"],
    diff: 6.35,
    str: {suit:true, eff:4},
    vol: {suit:false, eff:1},
    end: {suit:false, eff:1},
    joints: {fingers:2, wrist:1, elbow:2, shoulder:3, neck:0, thoracic:2, lowerBack:2, si:1, hip:5, groin:1, knee:0, ankle:0, foot:0},
    technique: 5,
    mobility: 3,
    strength: 4,
    kcalPerRep: [0.34, 0.60],
    desc: "A pull-up performed on a fixed bar while holding a full L-sit - legs together and extended parallel to the floor - for the entire set. Harder than the Straddle L-Sit Pull-Up because closing the legs removes the hip-abductor assistance the straddle provides, concentrating the isometric load onto the hip flexors and abdominals alone. The direct bridge between the straddle and the full V-Sit Pull-Up.",
    cues: "Compress the abs and drive the legs to parallel, knees locked, before the first pull. Maintain the L throughout every rep - if the legs drop, the set is over. Master the Straddle L-Sit Pull-Up before progressing here.",
    equipment: "Pull-up bar",
    position: "Hanging",
    youtube: "LINK_TODO"
  }

];

window.pullups = pullupStatic;
