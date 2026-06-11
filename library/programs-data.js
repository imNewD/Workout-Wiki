/* ══ PROGRAMS DATA ═══════════════════════════════════════════════════════
   Full progression programs built from the all-workouts list.
   Each covers multiple phases from Beginner through Elite.
   Syntax fix: wrapped in const PROGRAMS = [...] export.
══════════════════════════════════════════════════════════════════════════ */

const PROGRAMS = [
    // ─────────────────────────────────────────────────────────────────
    // 1. PUSH-UP MASTERY  (Wall Push-Up → One-Arm Push-Up)
    // ─────────────────────────────────────────────────────────────────
    {
      id:'pushup-mastery',
      name:'Push-Up Mastery',
      tag:'push', tagLabel:'Push',
      weeks:20, freq:'3–4×/wk',
      progression:'Wall → One-Arm Push-Up',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'A complete push-up journey from zero to one-arm. Four progressive phases take you through every major push-up variation — no equipment needed.',
      weeks_data:[
        {
          title:'Phase 1 — Weeks 1–4', phase:'Wall & Incline Foundation',
          note:'3×/wk. Build basic pushing strength and body-line awareness before going to the floor.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'Arm Circle',           sets:'1', reps:'30s',     note:'Forward and backward. Loosen the shoulders.'},
                {name:'Scapular Push-Up',     sets:'2', reps:'10',      note:'Protract and retract the shoulder blades. Elbows stay straight.'},
                {name:'Wall Push-Up',         sets:'3', reps:'12–15',   note:'Stand close to the wall. Body stays in a rigid plank.'},
                {name:'High Incline Push-Up', sets:'3', reps:'10–12',   note:'Use a table or high surface. Easier than the floor.'},
                {name:'Kneeling Plank',       sets:'3', reps:'20–30s',  note:'Core must stay braced. Hips don\'t sag.'},
                {name:'Wrist Circle',         sets:'1', reps:'20',      note:'Both directions. Do this after every session.'},
              ]
            }
          ]
        },
        {
          title:'Phase 2 — Weeks 5–10', phase:'Floor Push-Up Strength',
          note:'3×/wk. Goal: 3 sets of 20 clean standard push-ups before moving on.',
          sessions:[
            {
              label:'Session A (Push strength)',
              exercises:[
                {name:'Scapular Push-Up',     sets:'2', reps:'10',     note:'Always warm up the shoulders first.'},
                {name:'Knee Push-Up',         sets:'3', reps:'10–15',  note:'Only if standard push-ups aren\'t clean yet.'},
                {name:'Standard Push-Up',     sets:'4', reps:'5–15',   note:'Full range. Chest touches floor. Elbows ~45° from torso.'},
                {name:'Wide Push-Up',         sets:'3', reps:'8–12',   note:'Hands wider than shoulder-width. More chest emphasis.'},
                {name:'Narrow / Diamond Push-Up', sets:'3', reps:'6–10', note:'Hands together under chest. Targets triceps.'},
                {name:'Plank',               sets:'3', reps:'30–45s',  note:'Squeeze glutes and abs. Don\'t let the hips sag or rise.'},
              ]
            },
            {
              label:'Session B (Volume & conditioning)',
              exercises:[
                {name:'Hand-Release Push-Up', sets:'3', reps:'8–12',   note:'Lift hands off the floor at the bottom. Builds explosive power.'},
                {name:'Decline Push-Up',      sets:'3', reps:'8–12',   note:'Feet elevated. Shifts load to upper chest and shoulders.'},
                {name:'Low Incline Push-Up',  sets:'3', reps:'10–12',  note:'Small incline. Slight change in angle.'},
                {name:'Plank Shoulder Tap',   sets:'3', reps:'20 taps',note:'Minimize hip rock. Core must stay tight.'},
                {name:'Superman Hold',        sets:'3', reps:'20s',    note:'Counterbalance for all the pushing.'},
              ]
            }
          ]
        },
        {
          title:'Phase 3 — Weeks 11–16', phase:'Advanced Variations',
          note:'3–4×/wk. Introduce archer, pike, and plyometric work toward one-arm prep.',
          sessions:[
            {
              label:'Session A (Skill & strength)',
              exercises:[
                {name:'Pseudo Planche Push-Up',  sets:'4', reps:'6–10',  note:'Lean the torso forward. Hands by hips. Massive wrist and shoulder load.'},
                {name:'Archer Push-Up',          sets:'4', reps:'5–8/side', note:'One arm bends fully, the other stays straight as a guide.'},
                {name:'Pike Push-Up',            sets:'3', reps:'8–12',  note:'Hips high, head between arms. Shoulder focus.'},
                {name:'Elevated Pike Push-Up',   sets:'3', reps:'6–10',  note:'Feet on a box. Harder shoulder press angle.'},
                {name:'Typewriter Push-Up',      sets:'3', reps:'4–6/side', note:'Slide side to side at the bottom. Controls full range.'},
                {name:'Planche Lean',            sets:'3', reps:'15–20s', note:'Hold a forward lean from push-up position. Builds wrist and shoulder base.'},
              ]
            },
            {
              label:'Session B (Explosive & endurance)',
              exercises:[
                {name:'Plyometric / Clap Push-Up', sets:'4', reps:'5–8',    note:'Explosive push off the floor. Land softly and immediately do the next rep.'},
                {name:'Stagger Push-Up',           sets:'3', reps:'8/side',  note:'One hand forward, one hand back. Asymmetric loading.'},
                {name:'T Push-Up',                 sets:'3', reps:'6/side',  note:'Rotate to side plank at the top. Full hip extension.'},
                {name:'Spiderman Push-Up',         sets:'3', reps:'6/side',  note:'Bring the knee to the elbow as you lower.'},
                {name:'Dive Bomber Push-Up',       sets:'3', reps:'8–10',    note:'Swooping motion through the bottom. Open the chest at the top.'},
                {name:'Weighted Push-Up (+10–25% BW)', sets:'3', reps:'6–10', note:'Use a plate on the back or a weight vest. Controlled reps only.'},
              ]
            }
          ]
        },
        {
          title:'Phase 4 — Weeks 17–20', phase:'One-Arm Push-Up Progression',
          note:'3–4×/wk. One clean OAP is the goal. These will take months of consistent work.',
          sessions:[
            {
              label:'Session A (OAP prep)',
              exercises:[
                {name:'Incline One-Arm Push-Up',  sets:'4', reps:'5–8/side',  note:'Start elevated. Reduce incline weekly as strength improves.'},
                {name:'Archer Push-Up',           sets:'4', reps:'5–6/side',  note:'Use the straight arm as minimal assistance only.'},
                {name:'Feet-Elevated One-Arm Push-Up — Straddle', sets:'3', reps:'3–5/side', note:'Wide foot stance helps balance the one-arm push-up.'},
                {name:'One-Arm Push-Up',          sets:'5', reps:'max',        note:'Attempt fresh. Even 1 clean rep is progress.'},
                {name:'Weighted Push-Up (+25–50% BW)', sets:'3', reps:'5–8',  note:'Build overall pressing strength to support the OAP.'},
              ]
            },
            {
              label:'Session B (Strength maintenance)',
              exercises:[
                {name:'Pseudo Planche Push-Up',   sets:'4', reps:'8–10',      note:'Lean stays forward. Wrist and shoulder conditioning.'},
                {name:'Weighted Push-Up (+10–25% BW)', sets:'3', reps:'8–10', note:'Keep volume honest.'},
                {name:'One-Arm Clap Push-Up',     sets:'3', reps:'3–5/side',  note:'Elite variation — only attempt when a standard OAP is solid.'},
                {name:'Planche Lean',             sets:'3', reps:'20–30s',    note:'Continue planche preparation alongside OAP training.'},
              ]
            }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // 2. DIP MASTERY  (Bench Dip → Ring Dip → One-Arm Dip)
    // ─────────────────────────────────────────────────────────────────
    {
      id:'dip-mastery',
      name:'Dip Mastery',
      tag:'push', tagLabel:'Push',
      weeks:16, freq:'3×/wk',
      progression:'Bench Dip → One-Arm Dip',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'From bench dips to one-arm ring dips — a full tricep and shoulder progression across four phases. No pulling prerequisites needed.',
      weeks_data:[
        {
          title:'Phase 1 — Weeks 1–4', phase:'Bench & Box Dips',
          note:'3×/wk. Learn the movement pattern before going to parallel bars.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'Arm Circle',         sets:'1', reps:'30s',    note:'Shoulder warm-up. Both directions.'},
                {name:'Chest Opener',       sets:'1', reps:'30s',    note:'Stretch the chest before loading it.'},
                {name:'Bench Dip',          sets:'3', reps:'10–15',  note:'Hands on a bench behind you. Go to 90° at the elbow.'},
                {name:'Box Dip',            sets:'3', reps:'8–12',   note:'Parallel box handles. Wider range of motion than bench.'},
                {name:'Dip Shrug',          sets:'3', reps:'10',     note:'Support yourself on parallel bars and shrug up/down. No elbow bend.'},
                {name:'Triceps Stretch',    sets:'1', reps:'20s/side', note:'Overhead triceps stretch. Hold gently.'},
              ]
            }
          ]
        },
        {
          title:'Phase 2 — Weeks 5–9', phase:'Parallel Bar Dips',
          note:'3×/wk. Build to 3×15 clean chest dips before adding weight.',
          sessions:[
            {
              label:'Session A (Volume)',
              exercises:[
                {name:'Isometric Support Hold', sets:'2', reps:'20–30s',   note:'Support straight arms on the bars. Builds lockout endurance.'},
                {name:'Chest Dip',              sets:'4', reps:'6–12',     note:'Lean forward slightly. Go all the way down until shoulders are below elbows.'},
                {name:'Parallel Bar Dip',       sets:'4', reps:'8–15',     note:'Upright torso. Tricep focus.'},
                {name:'Negative Dip',           sets:'3', reps:'5',        note:'Lower in 4–5 seconds. Jump back to top.'},
                {name:'L-Sit Dip',             sets:'3', reps:'5–8',      note:'Keep the legs extended forward while dipping.'},
                {name:'Band-Assisted Dip',      sets:'2', reps:'10–12',   note:'Only if unassisted reps are still fewer than 5.'},
              ]
            },
            {
              label:'Session B (Skill & control)',
              exercises:[
                {name:'Pause Dip',           sets:'3', reps:'5–8',    note:'Pause 2 seconds at the bottom. Removes the bounce.'},
                {name:'Tempo Dip',           sets:'3', reps:'5',      note:'3 seconds down, 1 second up. Strict control.'},
                {name:'Korean Dip',          sets:'3', reps:'5–8',    note:'Hands behind the hips. Shoulder extension emphasis.'},
                {name:'Kipping Dip',         sets:'3', reps:'8–12',   note:'Use body momentum. Cardio-style volume.'},
                {name:'Ring Dip Support Hold', sets:'3', reps:'15–20s', note:'Straight-arm hold on rings. Builds stability.'},
              ]
            }
          ]
        },
        {
          title:'Phase 3 — Weeks 10–14', phase:'Ring Dips & Weighted',
          note:'3×/wk. Rings add instability. Weighted dips build raw strength.',
          sessions:[
            {
              label:'Session A (Ring dips)',
              exercises:[
                {name:'Ring Dip',              sets:'4', reps:'5–10',      note:'Keep rings turned out at top. Controlled descent.'},
                {name:'Ring Dip — Turned Out', sets:'3', reps:'5–8',      note:'Actively rotate rings out throughout the full rep.'},
                {name:'Ring Dip — L-Sit',      sets:'3', reps:'4–6',      note:'Hold legs out while dipping on rings.'},
                {name:'Ring Dip — False Grip', sets:'3', reps:'5–8',      note:'False grip sets up muscle-up transitions.'},
                {name:'Tuck Ring Dip',         sets:'3', reps:'6–10',     note:'Tuck the knees while dipping. Core and tricep challenge.'},
                {name:'Explosive Ring Dip',    sets:'3', reps:'4–6',      note:'Push explosively out of the bottom.'},
              ]
            },
            {
              label:'Session B (Weighted & specialty)',
              exercises:[
                {name:'Weighted Dip (+10–25% BW)',  sets:'4', reps:'5–8',    note:'Use a belt or dumbbell between legs.'},
                {name:'Weighted Dip (+25–50% BW)',  sets:'3', reps:'4–6',    note:'Only when lighter weight is very comfortable.'},
                {name:'German Dip',                 sets:'3', reps:'5–8',    note:'Pause behind body. Extreme shoulder-extension demand.'},
                {name:'Archer Dip',                 sets:'3', reps:'5/side', note:'One arm pushes, one guides. Ring or bar version.'},
                {name:'Typewriter Dip',             sets:'3', reps:'4/side', note:'Side-to-side at the bottom. Uneven loading.'},
              ]
            }
          ]
        },
        {
          title:'Phase 4 — Weeks 15–16', phase:'One-Arm Dip Progression',
          note:'3×/wk. True one-arm dips are elite-level. Begin with assisted variations.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'One-Arm Bench Dip',        sets:'4', reps:'5–8/side',  note:'One hand on a bench, the other at your side. Full range.'},
                {name:'Archer Dip',               sets:'4', reps:'5/side',    note:'Reduce assistance from the guide arm each week.'},
                {name:'One-Arm Negative Dip',     sets:'3', reps:'3/side',    note:'Lower on one arm in 5 seconds. Use two arms to reset.'},
                {name:'One-Arm Dip',              sets:'5', reps:'max',        note:'Attempt fresh after the warm-up. Even a partial rep counts.'},
                {name:'Weighted Ring Dip',        sets:'3', reps:'5–8',        note:'Keep ring strength high to support the OA work.'},
                {name:'One-Arm Ring Dip',         sets:'3', reps:'attempt',    note:'Use assistance from the other hand if needed. Long-term goal.'},
              ]
            }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // 3. SQUAT & LEG MASTERY  (Wall Sit → Pistol Squat → Dragon Squat)
    // ─────────────────────────────────────────────────────────────────
    {
      id:'squat-mastery',
      name:'Squat & Leg Mastery',
      tag:'legs', tagLabel:'Legs',
      weeks:20, freq:'3×/wk',
      progression:'Wall Sit → Dragon Squat',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'A complete lower body progression requiring zero equipment. Goes from basic squats through single-leg work, pistol squats and beyond.',
      weeks_data:[
        {
          title:'Phase 1 — Weeks 1–4', phase:'Mobility & Basic Squat',
          note:'3×/wk. Fix ankle and hip mobility so you can squat safely before loading.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'Ankle Circle',             sets:'1', reps:'15/side',  note:'Unlock stiff ankles — they limit squat depth.'},
                {name:'Hip Circle',               sets:'1', reps:'15/side',  note:'Loosen the hips. Do both directions.'},
                {name:'Frog Stretch',             sets:'2', reps:'30s',      note:'Sink hips between feet. The deeper the better.'},
                {name:'Asian Squat',              sets:'2', reps:'30–60s',   note:'Hold as low as possible. Use a support if needed.'},
                {name:'Deep Squat Hold',          sets:'3', reps:'20–30s',   note:'Elbows inside knees pressing out. Chest up.'},
                {name:'Bodyweight Squat',         sets:'3', reps:'15',       note:'Control the descent. Drive through the full foot.'},
                {name:'Wall Sit',                 sets:'3', reps:'30–45s',   note:'90° knee angle. Flat back against wall.'},
                {name:'Glute Bridge',             sets:'3', reps:'15',       note:'Posterior chain activation. Squeeze the glutes at top.'},
              ]
            }
          ]
        },
        {
          title:'Phase 2 — Weeks 5–9', phase:'Single-Leg Foundations',
          note:'3×/wk. Single-leg work reveals imbalances. Go slow and honest.',
          sessions:[
            {
              label:'Session A',
              exercises:[
                {name:'Split Squat',            sets:'3', reps:'10/leg',    note:'Rear foot elevated on a surface. Front knee tracks toes.'},
                {name:'Bulgarian Split Squat',  sets:'3', reps:'8/leg',    note:'Greater range and hip flexor stretch.'},
                {name:'Reverse Lunge',          sets:'3', reps:'10/leg',   note:'Step back and drop the rear knee close to the floor.'},
                {name:'Lateral Lunge',          sets:'3', reps:'8/leg',    note:'Sit into one hip while the other leg stays straight.'},
                {name:'Single-Leg Wall Sit',    sets:'3', reps:'20s/leg',  note:'Build unilateral quad endurance.'},
                {name:'Squat to Stand',         sets:'2', reps:'10',       note:'Stretch at the bottom then stand. Keep the feet flat.'},
              ]
            },
            {
              label:'Session B',
              exercises:[
                {name:'Cossack Squat',          sets:'3', reps:'8/side',   note:'Wide stance, sit fully to one side. Other leg is straight.'},
                {name:'ATG Split Squat',        sets:'3', reps:'8/leg',    note:'Knee goes far over the toe. Builds ankle range.'},
                {name:'Heel-Elevated Squat',    sets:'3', reps:'12',       note:'Small plate or board under heels. Deeper knee bend.'},
                {name:'Jump Squat',             sets:'3', reps:'8',        note:'Explode up. Land softly with knees slightly bent.'},
                {name:'Squat Pulse',            sets:'3', reps:'30s',      note:'Small pulses at the bottom of the squat. Burns.'},
                {name:'Standing Calf Raise',    sets:'3', reps:'20',       note:'Full range. Rise onto the ball of the foot slowly.'},
              ]
            }
          ]
        },
        {
          title:'Phase 3 — Weeks 10–15', phase:'Pistol Squat Progression',
          note:'3×/wk. The pistol squat requires ankle mobility, knee strength and balance. Progress each component separately.',
          sessions:[
            {
              label:'Session A (Pistol prep)',
              exercises:[
                {name:'Single-Leg Box Squat',    sets:'4', reps:'5/leg',     note:'Sit to a box or chair on one leg. Lower the box weekly.'},
                {name:'Skater Squat',            sets:'3', reps:'6/leg',     note:'Back knee hovers above the floor. Very hard on the quad.'},
                {name:'Eccentric Pistol Squat',  sets:'3', reps:'4/leg',     note:'Lower down on one leg in 4–6 seconds. Stand back up with two.'},
                {name:'Isometric Split Squat',   sets:'3', reps:'20s/leg',   note:'Hold the bottom position of a split squat. Build static strength.'},
                {name:'ATG Squat',               sets:'3', reps:'10',        note:'Fully loaded deep squat. Builds knee strength through range.'},
              ]
            },
            {
              label:'Session B (Pistol practice)',
              exercises:[
                {name:'Pistol Squat',            sets:'5', reps:'max/leg',   note:'Attempt a full rep. Even a partial counts toward progress.'},
                {name:'Duck Walk',               sets:'3', reps:'10m',       note:'Walk forward in a deep squat. Hip and quad mobility.'},
                {name:'Shrimp Squat',            sets:'3', reps:'5/leg',     note:'Rear foot held in hand. Extreme quad stretch at the bottom.'},
                {name:'Bulgarian Split Squat Jump', sets:'3', reps:'5/leg', note:'Add a jump at the top for explosive power.'},
                {name:'Standing Calf Raise',     sets:'3', reps:'15',        note:'Calf strength aids pistol squat balance.'},
              ]
            }
          ]
        },
        {
          title:'Phase 4 — Weeks 16–20', phase:'Elite Leg Skills',
          note:'3×/wk. Dragon squat, sissy squat and plyometric mastery.',
          sessions:[
            {
              label:'Session A (Elite skill work)',
              exercises:[
                {name:'Dragon Squat',            sets:'4', reps:'3–5/leg',   note:'Cross the non-working leg behind the standing leg. Full pistol depth.'},
                {name:'Sissy Squat',             sets:'3', reps:'6–10',      note:'Lean back as you lower. Pure quad isolation with no hip hinge.'},
                {name:'Shrimp Squat',            sets:'3', reps:'6/leg',     note:'Increase depth and slow the descent.'},
                {name:'Airborne Lunge',          sets:'3', reps:'5/leg',     note:'Rear foot behind on a raised surface. Extreme hip flexor demand.'},
                {name:'Broad Jump to Walk Back', sets:'3', reps:'5',         note:'Explosive horizontal jump. Walk back slowly. Eccentric control.'},
              ]
            },
            {
              label:'Session B (Power & volume)',
              exercises:[
                {name:'Pistol Squat',               sets:'4', reps:'5/leg',    note:'Full range with control. Add a pause at the bottom.'},
                {name:'Bulgarian Split Squat Jump',  sets:'3', reps:'6/leg',   note:'Plyometric single-leg power.'},
                {name:'Jump Squat',                  sets:'3', reps:'10',       note:'Max height. Tuck the knees at the top.'},
                {name:'Reactive Jump Squat',         sets:'3', reps:'6',        note:'Bounce immediately upon landing. Trains reactive strength.'},
                {name:'Standing Hamstring Sweep',    sets:'2', reps:'10/leg',   note:'Hip hinge on one leg. Hamstring and balance work.'},
              ]
            }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // 4. L-SIT & CORE MASTERY  (Tuck L-Sit → V-Sit)
    // ─────────────────────────────────────────────────────────────────
    {
      id:'lsit-mastery',
      name:'L-Sit & Core Mastery',
      tag:'iso', tagLabel:'Isometric',
      weeks:16, freq:'4×/wk',
      progression:'Tuck L-Sit → V-Sit',
      diff:'int', diffLabel:'Intermediate',
      soon:false,
      desc:'A systematic core compression progression. Builds the pushing strength, hip flexor power and hamstring flexibility needed to hold a full L-sit and beyond.',
      weeks_data:[
        {
          title:'Phase 1 — Weeks 1–4', phase:'Compression & Support Strength',
          note:'4×/wk. Build straight-arm support strength and hip flexor compression before any holds.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'Isometric Support Hold',    sets:'3', reps:'20–30s',  note:'Straight arms on parallel bars or floor. Just hold — no leg raise yet.'},
                {name:'Hollow Body Hold',          sets:'3', reps:'20–30s',  note:'Lower back pressed into the floor. Core of the L-sit.'},
                {name:'Seated Knee Tuck Hold',     sets:'3', reps:'15–20s',  note:'Sit on floor, lean back slightly and hold knees up.'},
                {name:'Hanging Knee Raise',        sets:'3', reps:'10–12',   note:'Dead hang position. Pull knees to chest with control.'},
                {name:'Tuck L-Sit',               sets:'4', reps:'5–10s',   note:'On parallel bars or floor. Both knees tucked close.'},
                {name:'Compression Hold',         sets:'3', reps:'15–20s',  note:'Seated on floor, press hands down and lift legs even slightly.'},
              ]
            }
          ]
        },
        {
          title:'Phase 2 — Weeks 5–9', phase:'Full L-Sit',
          note:'4×/wk. One leg at a time if needed. Aim for a 10-second full L-sit hold.',
          sessions:[
            {
              label:'Session A',
              exercises:[
                {name:'Tuck L-Sit',            sets:'3', reps:'10–15s',   note:'Baseline — should feel easy before progressing.'},
                {name:'Hanging L-Sit',         sets:'3', reps:'5–10s',    note:'Straight legs from a dead hang. Harder than parallel bar version.'},
                {name:'L-Sit',                 sets:'5', reps:'max hold', note:'Both legs fully extended. Rest 2 minutes between sets.'},
                {name:'Straddle L-Sit',        sets:'3', reps:'5–10s',    note:'Legs spread wider — easier to hold. Bridge to full.'},
                {name:'Seated Pike Leg Lifts', sets:'3', reps:'10',       note:'From floor, seated pike. Lift both legs straight. Brutal hip flexors.'},
                {name:'Dead Bug',              sets:'3', reps:'10/side',   note:'Lower back pressed into floor. Core stability work.'},
              ]
            },
            {
              label:'Session B',
              exercises:[
                {name:'L-Sit Dip',             sets:'3', reps:'5–8',     note:'Dip while holding the L-sit position. Combines push and compression.'},
                {name:'L-Sit Pull-Up',         sets:'3', reps:'4–6',     note:'L-sit position while pulling up. Much harder than standard pull-ups.'},
                {name:'L-Sit Chin-Up',         sets:'3', reps:'4–6',     note:'Underhand grip. Often easier than overhand for beginners.'},
                {name:'Tuck L-Sit Pull-Up',    sets:'3', reps:'5–8',     note:'Knees tucked if legs-extended is too hard.'},
                {name:'Ring L-Sit',            sets:'3', reps:'5–10s',   note:'Rings add instability — much harder than bars.'},
                {name:'Hanging Oblique Knee Raise', sets:'3', reps:'10/side', note:'Twist the knees to one side each rep. Trains oblique compression.'},
              ]
            }
          ]
        },
        {
          title:'Phase 3 — Weeks 10–13', phase:'Manna & V-Sit Prep',
          note:'4×/wk. Maximum hip flexor and posterior compression work. Very demanding.',
          sessions:[
            {
              label:'Session A (V-Sit skill)',
              exercises:[
                {name:'L-Sit',                  sets:'3', reps:'15–20s',   note:'Should be very comfortable before starting this phase.'},
                {name:'Tucked V-Sit',            sets:'4', reps:'5–10s',   note:'Lean back, pull knees above hip height. Harder than a tuck L-sit.'},
                {name:'V-Sit Hold',              sets:'5', reps:'max hold', note:'Full legs-extended V. 5° above horizontal is the goal.'},
                {name:'Manna',                  sets:'3', reps:'attempt',  note:'Extreme: hands behind hips, body nearly inverted. Long-term goal.'},
                {name:'Straddle L-Sit',         sets:'3', reps:'15s',      note:'Maintain as a base.'},
              ]
            },
            {
              label:'Session B (Support & transitions)',
              exercises:[
                {name:'V-Sit Pull-Up',          sets:'3', reps:'3–5',      note:'Hold the V while pulling up. Extraordinary difficulty.'},
                {name:'One-Arm L-Sit',          sets:'3', reps:'5s/side',  note:'Press on one arm while the other is held out.'},
                {name:'Toes-to-Bar to L-Sit Hold', sets:'3', reps:'3',    note:'Toes up, then straight legs forward. Two skills linked.'},
                {name:'Ring L-Sit Muscle-Up',   sets:'3', reps:'2–4',     note:'Elite combination of ring muscle-up and L-sit hold.'},
                {name:'Hollow Rock',            sets:'3', reps:'20',       note:'Dynamic core compression. Keep the lower back in contact.'},
              ]
            }
          ]
        },
        {
          title:'Phase 4 — Weeks 14–16', phase:'Max Compression & Integration',
          note:'4×/wk. Integrate into full skills and maintain what you\'ve built.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'V-Sit Hold',               sets:'5', reps:'max',      note:'Push the duration every session.'},
                {name:'L-Sit Press to Handstand', sets:'3', reps:'attempt',  note:'From L-sit, press up into a handstand. The hardest pushing skill.'},
                {name:'Hanging Windshield Wipers', sets:'3', reps:'6/side', note:'Full legs-extended rotation from a dead hang.'},
                {name:'Dragon Flag Hold',          sets:'3', reps:'5–10s',   note:'Lie on bench. Body rigid, parallel to floor. Lat and core strength.'},
                {name:'Manna',                    sets:'4', reps:'attempt',  note:'Keep working the position. Progress is slow but real.'},
                {name:'One-Arm L-Sit',            sets:'3', reps:'8–10s/side', note:'Final phase: one-arm compression strength.'},
              ]
            }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // 5. HANDSTAND MASTERY  (Wall Handstand → Freestanding → HSPU)
    // ─────────────────────────────────────────────────────────────────
    {
      id:'handstand-mastery',
      name:'Handstand Mastery',
      tag:'push', tagLabel:'Push',
      weeks:24, freq:'5×/wk',
      progression:'Wall → Freestanding → HSPU',
      diff:'int', diffLabel:'Intermediate',
      soon:false,
      desc:'A daily handstand practice going from wall holds to a freestanding handstand and the handstand push-up. Wrist prep is built into every session.',
      weeks_data:[
        {
          title:'Phase 1 — Weeks 1–5', phase:'Wall Conditioning',
          note:'5×/wk. Daily practice is how handstands are learned. Chest-to-wall position trains the correct body line.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'Wrist Circle',              sets:'1', reps:'20',      note:'Always — before every session, every day.'},
                {name:'Wrist Extension Stretch',   sets:'1', reps:'30s',     note:'Kneel and press the back of the hands to the floor.'},
                {name:'Scapular Push-Up',          sets:'2', reps:'10',      note:'Build shoulder stability. Protract fully.'},
                {name:'Kick to Wall Handstand',    sets:'5', reps:'kick',    note:'Kick up to the wall and hold 10–20s each time.'},
                {name:'Wall Handstand',            sets:'4', reps:'20–30s',  note:'Chest facing wall. Practice a tight hollow body line.'},
                {name:'Pike Push-Up',              sets:'3', reps:'8–10',    note:'Shoulder strength for the eventual press.'},
                {name:'Elevated Pike Push-Up',     sets:'3', reps:'6–8',     note:'Feet on a box. Approaches handstand push-up angle.'},
                {name:'Plank',                     sets:'2', reps:'30s',     note:'Reinforce body tension habits.'},
              ]
            }
          ]
        },
        {
          title:'Phase 2 — Weeks 6–11', phase:'Balance Practice',
          note:'5×/wk. Begin leaving the wall. Pirouette exits are safer than crashing. Fingertip control is the key to balance.',
          sessions:[
            {
              label:'Session A (Balance focus)',
              exercises:[
                {name:'Wrist Circle',              sets:'1', reps:'20',      note:'Non-negotiable warm-up.'},
                {name:'Fingertip Hang',            sets:'2', reps:'10–15s',  note:'Hang from a bar on fingertips. Builds hand strength.'},
                {name:'Wall Handstand',            sets:'3', reps:'20s',     note:'Keep chest to wall for shape, then try backing away 1–2 cm.'},
                {name:'Tuck Handstand',            sets:'5', reps:'hold',    note:'Kick up and hold a tuck before extending. Easier to balance.'},
                {name:'Freestanding Handstand',    sets:'6', reps:'attempt', note:'15–30 second attempts. Fingertip pressure controls balance.'},
                {name:'Handstand Pirouette',       sets:'3', reps:'practice',note:'Learn to step out safely. Reduces fear of falling.'},
              ]
            },
            {
              label:'Session B (Push strength)',
              exercises:[
                {name:'Wall Handstand Push-Up',    sets:'4', reps:'5–8',     note:'From a wall handstand, lower the head to the floor.'},
                {name:'Negative Handstand Push-Up',sets:'3', reps:'3–5',     note:'Lower slowly in 4–5 seconds. Build up to full reps.'},
                {name:'Elevated Pike Push-Up',     sets:'3', reps:'8–10',    note:'Keep shoulder strength moving forward.'},
                {name:'Fingertip Push-Up',         sets:'3', reps:'8–10',    note:'Builds hand and wrist resilience.'},
              ]
            }
          ]
        },
        {
          title:'Phase 3 — Weeks 12–18', phase:'Freestanding & HSPU',
          note:'5×/wk. Combine balance practice with handstand push-up work. These are separate skills — train both.',
          sessions:[
            {
              label:'Session A (Freestanding hold)',
              exercises:[
                {name:'Wrist Circle',              sets:'1', reps:'20',      note:''},
                {name:'Freestanding Handstand',    sets:'8', reps:'attempt', note:'Target: 30 consecutive seconds. Use a wall only if needed.'},
                {name:'Stag Handstand',            sets:'3', reps:'10–15s',  note:'One knee bent, one leg straight. Helps with balance asymmetry.'},
                {name:'Split Handstand',           sets:'3', reps:'10–15s',  note:'Legs split front/back. Another balance aid.'},
                {name:'Arch Handstand',            sets:'3', reps:'10s',     note:'Practice the arch shape — different from hollow. Body awareness.'},
                {name:'Handstand Walk',            sets:'3', reps:'max dist',note:'Walk on hands. Trains dynamic balance. Even 1m counts.'},
              ]
            },
            {
              label:'Session B (HSPU strength)',
              exercises:[
                {name:'Wall Handstand Push-Up',       sets:'5', reps:'3–6',    note:'Full range. Head to floor.'},
                {name:'Deficit Handstand Push-Up',    sets:'3', reps:'3–5',    note:'Hands on blocks or parallettes. Greater depth.'},
                {name:'Freestanding Handstand Push-Up', sets:'3', reps:'attempt', note:'The ultimate goal. Only attempt with a spotter or wall nearby.'},
                {name:'Tiger Bend',                   sets:'3', reps:'3–5',    note:'HSPU variant: lower to forearms then press back up. Massive shoulder demand.'},
                {name:'Pike Push-Up',                 sets:'3', reps:'12',     note:'Maintenance volume.'},
              ]
            }
          ]
        },
        {
          title:'Phase 4 — Weeks 19–24', phase:'Advanced Handstand Skills',
          note:'5×/wk. Freestanding HSPU and specialty skills.',
          sessions:[
            {
              label:'Session A (Specialty skills)',
              exercises:[
                {name:'One-Arm Wall Handstand',        sets:'4', reps:'5–10s/side', note:'One hand on the wall, one hand lifted. Balance transition.'},
                {name:'One-Arm Handstand',             sets:'4', reps:'attempt',    note:'Long-term elite goal. Take it slow.'},
                {name:'Fingertip Handstand',           sets:'3', reps:'5–10s',      note:'Full handstand supported only by fingertips.'},
                {name:'Press Handstand',               sets:'3', reps:'attempt',    note:'Straddle L-sit pressing up to handstand. Requires extreme strength and flexibility.'},
                {name:'Handstand Walk',                sets:'3', reps:'max dist',   note:'Push distance every session.'},
              ]
            },
            {
              label:'Session B (HSPU mastery)',
              exercises:[
                {name:'Freestanding Handstand Push-Up',sets:'5', reps:'max',       note:'Prioritise quality over reps.'},
                {name:'Deficit Handstand Push-Up',     sets:'3', reps:'5',         note:'Use higher parallettes as strength increases.'},
                {name:'Tiger Bend Handstand',          sets:'3', reps:'3–5',       note:'Full elbow-to-hand press from the floor.'},
                {name:'Wall Handstand Push-Up',        sets:'3', reps:'8–10',      note:'Volume maintenance.'},
                {name:'One-Arm Wall Handstand Push-Up',sets:'3', reps:'2–3/side',  note:'Ultimate push skill. Only when freestanding HSPU is solid.'},
              ]
            }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // 6. FIRST PULL-UP  (Dead Hang → 10 Clean Pull-Ups)
    // ─────────────────────────────────────────────────────────────────
    {
      id:'first-pullup',
      name:'First Pull-Up',
      tag:'pull', tagLabel:'Pull',
      weeks:12, freq:'3×/wk',
      progression:'Dead Hang → 10 Clean Pull-Ups',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'Can\'t do a single pull-up yet? This 12-week program builds the hang strength, scapular control and pulling power to get your first clean rep — and then 10 of them.',
      weeks_data:[
        {
          title:'Phase 1 — Weeks 1–4', phase:'Hanging & Scapular Strength',
          note:'3×/wk. You must be comfortable hanging for 30+ seconds before pulling. These weeks build that foundation.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'Arm Circle',           sets:'1', reps:'30s',     note:'Loosen the shoulder joint before loading it.'},
                {name:'Dead Hang',            sets:'4', reps:'15–30s',  note:'Grip the bar overhand. Relax the shoulders at first, then engage them.'},
                {name:'Active Hang',          sets:'3', reps:'10–20s',  note:'Same as dead hang but pull the shoulder blades down and together. Key movement pattern.'},
                {name:'Scapular Pull-Up',     sets:'3', reps:'8–10',    note:'Hang and pull the shoulders down without bending the elbows. The very first motion of a pull-up.'},
                {name:'Australian Pull-Up',   sets:'3', reps:'8–12',   note:'Bar at hip height, body angled. Easier horizontal pulling to build the muscles.'},
                {name:'Band-Assisted Pull-Up',sets:'3', reps:'5–8',    note:'Use a resistance band around the bar. Only use enough band to complete clean reps.'},
                {name:'Flex Hang Chin-Up',    sets:'3', reps:'5–10s',  note:'Jump to the top position and hold. Builds pulling muscles where you\'re strongest.'},
              ]
            }
          ]
        },
        {
          title:'Phase 2 — Weeks 5–8', phase:'Negatives & Partials',
          note:'3×/wk. Eccentric (negative) strength comes before concentric. Lower slowly to build your first full rep.',
          sessions:[
            {
              label:'Session A (Negatives)',
              exercises:[
                {name:'Dead Hang',            sets:'2', reps:'30s',    note:'Warm-up hang. Focus on grip.'},
                {name:'Active Hang',          sets:'2', reps:'20s',    note:'Shoulder blades down and back.'},
                {name:'Negative Pull-Up',     sets:'5', reps:'3–5',    note:'Jump to the top, lower in 5–8 seconds. This is the main event these weeks.'},
                {name:'Partial Pull-Up — Bottom Half', sets:'3', reps:'5', note:'Pull from dead hang to 90° elbow. Strengthens the hardest part.'},
                {name:'Partial Pull-Up — Top Half',    sets:'3', reps:'5', note:'From 90° elbow to chin-over-bar. Strengthens the easiest part.'},
                {name:'Australian Pull-Up',   sets:'3', reps:'10–15',  note:'Add reps as you get stronger.'},
              ]
            },
            {
              label:'Session B (Assisted volume)',
              exercises:[
                {name:'Band-Assisted Pull-Up',      sets:'4', reps:'6–10',  note:'Decrease band assistance weekly.'},
                {name:'Band-Assisted Chin-Up',      sets:'3', reps:'6–10',  note:'Underhand grip — usually 10–20% easier than overhand.'},
                {name:'Jumping Pull-Up',            sets:'3', reps:'5–8',   note:'Jump to add momentum. Focus on the pull, not the jump.'},
                {name:'Isometric Pull-Up Hold',     sets:'3', reps:'5–10s', note:'Hold at chin-over-bar, or at 90°. Both are useful.'},
                {name:'Dead Hang',                  sets:'2', reps:'30–45s',note:'Grip endurance. Use an overhand grip.'},
              ]
            }
          ]
        },
        {
          title:'Phase 3 — Weeks 9–12', phase:'First Reps to 10',
          note:'3×/wk. You should be getting 1–3 pull-ups by now. The goal is 10 clean reps by week 12.',
          sessions:[
            {
              label:'Session A (Max reps)',
              exercises:[
                {name:'Pull-Up',              sets:'5', reps:'max',    note:'Rest 3 minutes between sets. Every set to clean failure.'},
                {name:'Chin-Up',              sets:'3', reps:'max',    note:'Underhand grip for extra bicep contribution.'},
                {name:'Dead Hang Chin-Up',    sets:'3', reps:'5–8',    note:'Start from a full dead hang — no kipping or swinging.'},
                {name:'Negative Pull-Up',     sets:'3', reps:'3',      note:'After your max sets, do slow negatives to fatigue. 8-second lowering.'},
              ]
            },
            {
              label:'Session B (Volume & variation)',
              exercises:[
                {name:'Pull-Up',              sets:'3', reps:'50–70% max', note:'Submaximal sets. More total volume without failure.'},
                {name:'Neutral Grip Pull-Up', sets:'3', reps:'max',        note:'Palms facing each other. Often slightly easier. Good for elbow health.'},
                {name:'Close Grip Pull-Up',   sets:'3', reps:'5–8',        note:'Hands closer than shoulder-width. Shifts to lower lats.'},
                {name:'Wide Grip Pull-Up',    sets:'3', reps:'5–8',        note:'Wider than shoulder-width. More upper lat emphasis.'},
                {name:'Scapular Pull-Up',     sets:'2', reps:'10',         note:'Keep doing these every session. Foundation of all pulling.'},
                {name:'Dead Hang',            sets:'2', reps:'45–60s',     note:'Grip is the limiter for many people. Train it directly.'},
              ]
            }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // 7. BEGINNER FULL BODY  (Zero → Consistent Training Habit)
    // ─────────────────────────────────────────────────────────────────
    {
      id:'beginner-full-body',
      name:'Beginner Full Body',
      tag:'full', tagLabel:'Full Body',
      weeks:8, freq:'3×/wk',
      progression:'Zero → Consistent Training Habit',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'The perfect starting point. Three full-body sessions per week covering push, pull, legs and core — all with zero equipment. Builds the habit and foundation for every other program.',
      weeks_data:[
        {
          title:'Phase 1 — Weeks 1–4', phase:'Movement Foundations',
          note:'3×/wk. Mon/Wed/Fri or any 3 non-consecutive days. Focus on form and consistency — not intensity.',
          sessions:[
            {
              label:'Every session (same workout)',
              exercises:[
                {name:'Jumping Jacks',        sets:'1', reps:'30',     note:'Warm-up. Gets the heart rate up.'},
                {name:'Arm Circle',           sets:'1', reps:'30s',    note:'Forward and backward. Loosens the shoulders.'},
                {name:'Hip Circle',           sets:'1', reps:'10/side',note:'Unlock the hips before squatting.'},
                {name:'Wall Push-Up',         sets:'3', reps:'12–15',  note:'Stand close to a wall. Body is a straight plank. Progress to the floor when easy.'},
                {name:'Australian Pull-Up',   sets:'3', reps:'8–10',   note:'Use a table edge or low bar. Body angled, pulling to chest.'},
                {name:'Bodyweight Squat',     sets:'3', reps:'15',     note:'Sit back and down. Knees track over toes. Full depth if possible.'},
                {name:'Glute Bridge',         sets:'3', reps:'15',     note:'Feet flat on the floor, drive hips up. Squeeze glutes at top.'},
                {name:'Kneeling Plank',       sets:'3', reps:'20–30s', note:'Knees on the floor if needed. Hips don\'t sag.'},
                {name:'Cat-Cow',              sets:'1', reps:'10',     note:'Cool-down. Slow and controlled. Decompress the spine.'},
              ]
            }
          ]
        },
        {
          title:'Phase 2 — Weeks 5–8', phase:'Progressive Overload',
          note:'3×/wk. Introduce A/B sessions. Each week try to add 1–2 reps or improve form.',
          sessions:[
            {
              label:'Session A (Push + Core)',
              exercises:[
                {name:'High Knees',           sets:'1', reps:'30s',    note:'Warm-up. Drive the knees up to hip height.'},
                {name:'Standard Push-Up',     sets:'3', reps:'5–12',   note:'Chest to floor, full lockout. Use Knee Push-Up if needed.'},
                {name:'Wide Push-Up',         sets:'3', reps:'8–12',   note:'Wider hand position. More chest involvement.'},
                {name:'Pike Push-Up',         sets:'2', reps:'8–10',   note:'Hips high. First step toward a handstand push-up.'},
                {name:'Plank',               sets:'3', reps:'30–45s',  note:'The goal is no sagging, no raising. Perfect line.'},
                {name:'Hollow Body Hold',     sets:'3', reps:'15–20s', note:'Lower back pressed into the floor. Legs and arms reach away.'},
                {name:'Dead Bug',             sets:'2', reps:'8/side', note:'Slow and controlled. Core stays braced the whole time.'},
              ]
            },
            {
              label:'Session B (Pull + Legs)',
              exercises:[
                {name:'Butt Kicks',           sets:'1', reps:'30s',    note:'Warm-up. Activates the hamstrings.'},
                {name:'Australian Pull-Up',   sets:'4', reps:'8–12',   note:'Lower your body angle each week to make it harder.'},
                {name:'Dead Hang',            sets:'3', reps:'15–30s', note:'Grip the bar and hang. Builds the foundation for pull-ups.'},
                {name:'Bodyweight Squat',     sets:'3', reps:'15–20',  note:'Focus on depth and control.'},
                {name:'Reverse Lunge',        sets:'3', reps:'8/leg',  note:'Step back and lower the rear knee to the floor.'},
                {name:'Glute Bridge',         sets:'3', reps:'20',     note:'Add a 2-second pause at the top.'},
                {name:'Bird Dog',             sets:'3', reps:'8/side', note:'Opposite arm and leg extend. Keep hips level.'},
                {name:'Child\'s Pose',        sets:'1', reps:'30s',    note:'Cool-down. Breathe and let the hips open.'},
              ]
            }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // 8. CORE FOUNDATIONS  (Beginner Core → Dragon Flag)
    // ─────────────────────────────────────────────────────────────────
    {
      id:'core-foundations',
      name:'Core Foundations',
      tag:'core', tagLabel:'Core',
      weeks:16, freq:'4×/wk',
      progression:'Plank → Dragon Flag',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'Build real core strength from scratch. Progresses from basic planks and dead bugs through hollow body, ab wheel, hanging work, and finally the dragon flag.',
      weeks_data:[
        {
          title:'Phase 1 — Weeks 1–4', phase:'Bracing & Stability',
          note:'4×/wk. Learn to brace, not just crunch. These exercises build the neurological patterns all advanced core work depends on.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'Abdominal Vacuum',     sets:'3', reps:'20–30s', note:'Exhale fully and pull the belly button in and up. Hold. Trains the deep core.'},
                {name:'Pelvic Tilt',          sets:'2', reps:'10',     note:'Lying on your back, flatten the lower back into the floor. Essential movement awareness.'},
                {name:'Dead Bug',             sets:'3', reps:'8/side', note:'Lower back pressed down. Opposite arm and leg extend slow. Never let the back arch.'},
                {name:'Plank',               sets:'4', reps:'20–30s',  note:'Build to 60 seconds before moving on. Perfect position only.'},
                {name:'Side Plank',           sets:'3', reps:'20s/side', note:'Hip must stay up. Stack the feet or stagger them.'},
                {name:'Glute Bridge',         sets:'3', reps:'15',     note:'Activates the posterior chain which supports the core.'},
                {name:'Cat-Cow',              sets:'1', reps:'10',     note:'Spine mobility. Never skip this.'},
              ]
            }
          ]
        },
        {
          title:'Phase 2 — Weeks 5–8', phase:'Anti-Extension & Flexion',
          note:'4×/wk. Build hollow body strength and introduce dynamic anti-extension work.',
          sessions:[
            {
              label:'Session A',
              exercises:[
                {name:'Hollow Body Hold',     sets:'4', reps:'20–30s', note:'Lower back is the key. If it lifts off the floor, tuck the knees. Extend as you get stronger.'},
                {name:'Hollow Rock',          sets:'3', reps:'10–15',  note:'Rock forward and back while maintaining the hollow position. Don\'t lose the shape.'},
                {name:'Ab Wheel Rollout',     sets:'4', reps:'5–10',   note:'From knees first. Extend as far as you can while keeping the lower back from caving.'},
                {name:'Plank',               sets:'3', reps:'45–60s',  note:'Progression from Phase 1.'},
                {name:'RKC Plank',           sets:'3', reps:'10–15s',  note:'Squeeze every muscle in the body. Harder than a regular plank.'},
                {name:'Mountain Climbers (Slow)', sets:'3', reps:'10/side', note:'Drive the knee to the chest. Hold 1 second. Core stays tight.'},
              ]
            },
            {
              label:'Session B',
              exercises:[
                {name:'Reverse Crunch',       sets:'3', reps:'12–15',  note:'Curl the pelvis up, not the legs. The movement starts from the lower abs.'},
                {name:'Double Leg Lowering',  sets:'3', reps:'8–10',   note:'From 90°, lower both legs together. Stop before the back arches. Raise back up slow.'},
                {name:'Flutter Kicks',        sets:'3', reps:'30s',    note:'Small kicks from a hollow body position. Lower back stays flat.'},
                {name:'Side Plank Hip Dip',   sets:'3', reps:'10/side',note:'From side plank, lower the hip to the floor and raise back up.'},
                {name:'McGill Curl-Up',       sets:'3', reps:'8',      note:'Hands under lower back for support. Lift only the head and shoulders. Spine-safe.'},
                {name:'Superman Hold',        sets:'3', reps:'20s',    note:'Posterior chain balance for all the anterior core work.'},
              ]
            }
          ]
        },
        {
          title:'Phase 3 — Weeks 9–12', phase:'Hanging & Rotational',
          note:'4×/wk. Move to hanging exercises and introduce rotation. Requires a pull-up bar.',
          sessions:[
            {
              label:'Session A (Hanging core)',
              exercises:[
                {name:'Dead Hang',             sets:'2', reps:'20–30s',  note:'Build grip and shoulder endurance first.'},
                {name:'Hanging Knee Raise',    sets:'4', reps:'10–12',   note:'Bring knees to chest. Control both up and down.'},
                {name:'Hanging Tuck Hold',     sets:'3', reps:'10–15s',  note:'Hold knees at chest height. Core compression.'},
                {name:'Hanging L-Sit',         sets:'3', reps:'5–10s',   note:'Extend both legs straight out. Brutal hip flexor work.'},
                {name:'Hanging Leg Raise',     sets:'3', reps:'8–10',    note:'Full straight-leg raise. Slow lowering.'},
                {name:'Hollow Body Hold',      sets:'3', reps:'30s',     note:'Keep the floor work sharp.'},
              ]
            },
            {
              label:'Session B (Rotational)',
              exercises:[
                {name:'Russian Twist',          sets:'3', reps:'20 total', note:'Keep the chest up, rotate from the spine. Add a pause at each side.'},
                {name:'Hanging Oblique Knee Raise', sets:'3', reps:'10/side', note:'Twist the knees to one side each rep from a dead hang.'},
                {name:'Side Jackknife',         sets:'3', reps:'10/side', note:'Lying on side, bring elbow and hip together. Oblique crunch.'},
                {name:'Plank Hip Dip',          sets:'3', reps:'12/side', note:'From a forearm plank, rotate the hips side to side. Controlled and slow.'},
                {name:'Ab Wheel Rollout',       sets:'3', reps:'8–12',    note:'Progression — try standing if kneeling is easy.'},
                {name:'Stir the Pot',           sets:'3', reps:'8/side',  note:'Forearms on a stability ball (or wall), circle the hands. Advanced plank.'},
              ]
            }
          ]
        },
        {
          title:'Phase 4 — Weeks 13–16', phase:'Dragon Flag & Advanced Skills',
          note:'4×/wk. The dragon flag is the pinnacle of floor core strength. Approach it gradually.',
          sessions:[
            {
              label:'Every session',
              exercises:[
                {name:'Hollow Body Hold',       sets:'3', reps:'45s',        note:'Should be very comfortable by now.'},
                {name:'Standing Ab Wheel Rollout', sets:'3', reps:'5–8',     note:'From standing — dramatically harder than kneeling. Only when kneeling is very easy.'},
                {name:'Dragon Flag Hold',        sets:'4', reps:'5–10s',      note:'Lie on bench, hold behind head. Body rigid and parallel to the floor. Lower slowly.'},
                {name:'Tucked Dragon Flag',      sets:'4', reps:'5–8',        note:'Knees tucked — the first step to the full flag.'},
                {name:'Dragon Flag',             sets:'3', reps:'max',         note:'Full straight-body flag. Lower in 3–4 seconds. Don\'t let the hips pike.'},
                {name:'Toes-to-Bar',             sets:'3', reps:'8–10',        note:'Straight legs to the bar. The hanging equivalent of the dragon flag.'},
                {name:'Hanging Windshield Wipers', sets:'3', reps:'6/side',   note:'Full legs-extended rotation from a dead hang. Elite rotational core.'},
              ]
            }
          ]
        }
      ]
    },

];
