/* ══ PROGRAMS DATA ═════════════════════════════════════════════════
   Library: programs
   Loaded by index.html via <script src="library/programs-data.js"></script>
   This file contains the program definitions only. The app uses the
   existing Programs module in index.html to render and manage them.
══════════════════════════════════════════════════════════════════════ */

const PROGRAMS = [
    {
      id:'pullup',
      name:'Pull-Up Program',
      tag:'pull', tagLabel:'Pull',
      weeks:8, freq:'3×/wk',
      progression:'Zero → First pull-up',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'You cannot do a single pull-up yet. This 8-week program takes you from dead hang to your first full rep — and beyond.',
      weeks_data:[
        {
          title:'Week 1–2', phase:'Dead Hang & Scapular Control',
          note:'Learn to hang and activate your back before pulling.',
          sessions:[
            {
              label:'Every session (3×/wk)',
              exercises:[
                {name:'Dead Hang',            sets:'3', reps:'20–30s hold', note:'Relax shoulders, then retract'},
                {name:'Scapular Pull-ups',    sets:'3', reps:'8 reps',      note:'Hang → retract scapula → lower. No elbow bend.'},
                {name:'Inverted Row (high)',  sets:'3', reps:'10 reps',     note:'Bar at hip height. Body mostly upright.'},
                {name:'Negative Pull-Up',    sets:'3', reps:'3–5 reps',   note:'Jump to top, lower yourself in 5s. Rest 90s between sets.'},
              ]
            }
          ]
        },
        {
          title:'Week 3–4', phase:'Building the Pull',
          note:'Start adding band-assisted or jumping reps to feel the full motion.',
          sessions:[
            {
              label:'Every session (3×/wk)',
              exercises:[
                {name:'Dead Hang',                 sets:'2', reps:'30s',        note:'Warm up the grip and shoulders'},
                {name:'Scapular Pull-ups',         sets:'3', reps:'10 reps',    note:'Controlled. Full range.'},
                {name:'Inverted Row (lower)',       sets:'3', reps:'10 reps',    note:'Lower the bar. Body more horizontal.'},
                {name:'Band-Assisted Pull-ups',     sets:'4', reps:'5–6 reps',   note:'Use lightest band that lets you complete reps with good form.'},
                {name:'Negative Pull-Up',            sets:'3', reps:'4 reps',     note:'6–8 second descent. Full lock-out at bottom.'},
              ]
            }
          ]
        },
        {
          title:'Week 5–6', phase:'Strength Accumulation',
          note:'Volume goes up. You should feel the movement clicking.',
          sessions:[
            {
              label:'Every session (3×/wk)',
              exercises:[
                {name:'Scapular Pull-ups',         sets:'3', reps:'12 reps',   note:''},
                {name:'Inverted Row (horizontal)', sets:'4', reps:'10 reps',  note:'Body parallel to floor. Chest to bar.'},
                {name:'Band-Assisted Pull-ups',    sets:'5', reps:'5 reps',   note:'Go lighter on the band if possible.'},
                {name:'Flexed Arm Hang',           sets:'3', reps:'10–15s',   note:'Hold chin above bar as long as possible.'},
                {name:'Negative Pull-Up',            sets:'3', reps:'5 reps',   note:'8–10 second descent.'},
              ]
            }
          ]
        },
        {
          title:'Week 7–8', phase:'First Rep & Beyond',
          note:'Attempt unassisted reps. One is a milestone — aim for more.',
          sessions:[
            {
              label:'Session A (day 1 & 3)',
              exercises:[
                {name:'Unassisted Pull-up Attempts', sets:'5', reps:'max reps',  note:'Rest 3 min between sets. Even 1 rep counts.'},
                {name:'Band-Assisted Pull-ups',      sets:'3', reps:'6 reps',   note:'Only if unassisted attempts were fewer than 3.'},
                {name:'Inverted Row',                sets:'3', reps:'12 reps',  note:''},
              ]
            },
            {
              label:'Session B (day 2)',
              exercises:[
                {name:'Scapular Pull-ups',    sets:'3', reps:'15 reps',   note:''},
                {name:'Dead Hang',            sets:'3', reps:'45s',       note:''},
                {name:'Negative Pull-Up',       sets:'4', reps:'5 reps',   note:'10s descent. Recovery session.'},
              ]
            }
          ]
        },
      ]
    },
    {
      id:'pullup-v2',
      name:'Pull-Up Program V2',
      tag:'pull', tagLabel:'Pull',
      weeks:12, freq:'2–3×/wk',
      progression:'Level 0 → Level 2',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'A tiered pull-up progression for zero rep pullers. Builds grip, shoulder stability and pulling strength with clear level goals.',
      weeks_data:[
        {
          title:'Level 0 — Can’t Pull Yet', phase:'Grip and shoulder conditioning',
          note:'2–3×/wk. Rest at least one day between sessions.',
          sessions:[
            {
              label:'Core session',
              exercises:[
                {name:'Dead Hang', sets:'3', reps:'20–40s', note:'Focus on grip and relaxed shoulders.'},
                {name:'Scapular Pull-Up', sets:'3', reps:'6–10', note:'Drive the shoulder blades down and together.'},
                {name:'High Inverted Row', sets:'3', reps:'8–12', note:'Body more upright to teach the pull pattern.'},
                {name:'Flexed Arm Hang', sets:'3', reps:'10–20s', note:'Jump up and hold the top position.'},
                {name:'Negative Pull-Up', sets:'3', reps:'3–5', note:'Lower very slowly to build strength.'},
              ]
            }
          ]
        },
        {
          title:'Level 1 — Building Real Strength', phase:'Controlled pulling and tension',
          note:'Move here after a 30s dead hang and controlled negatives.',
          sessions:[
            {
              label:'Core session',
              exercises:[
                {name:'Active Hang', sets:'3', reps:'20s', note:'Upgrade from Dead Hang with active shoulders.'},
                {name:'Scapular Pull-Up', sets:'3', reps:'8–12', note:'Maintain shoulder engagement.'},
                {name:'Inverted Row (lower)', sets:'4', reps:'8–12', note:'More horizontal and harder than the high row.'},
                {name:'Band-Assisted Pull-Up', sets:'4', reps:'5–8', note:'Use strong assistance and reduce it over time.'},
                {name:'Negative Pull-Up', sets:'4', reps:'3', note:'5–8s lowering.'},
                {name:'Hollow Body Hold', sets:'3', reps:'20–30s', note:'Builds body tension for cleaner pull-ups.'},
              ]
            }
          ]
        },
        {
          title:'Level 2 — First Pull-Up Phase', phase:'First clean pull-up attempts',
          note:'Move here when band pull-ups feel solid and rows are easy.',
          sessions:[
            {
              label:'Core session',
              exercises:[
                {name:'Unassisted Pull-Up Attempts', sets:'3', reps:'5 attempts', note:'Do these first while fresh.'},
                {name:'Band-Assisted Pull-Up', sets:'3', reps:'5', note:'Keep the band light enough to challenge you.'},
                {name:'Flexed Arm Hang', sets:'3', reps:'20s', note:'Build top-position confidence.'},
                {name:'Inverted Row (horizontal)', sets:'4', reps:'10–15', note:'A strong pulling finish.'},
                {name:'Slow Negative Pull-Up', sets:'3', reps:'3', note:'Controlled lowering from the top.'},
                {name:'Hanging Hollow Hold', sets:'3', reps:'15–25s', note:'Maintain core tension on the bar.'},
              ]
            }
          ]
        }
      ]
    },
    {
      id:'front-lever',
      name:'Front Lever Program',
      tag:'pull', tagLabel:'Pull',
      weeks:12, freq:'3×/wk',
      progression:'Tuck → Straddle → Full',
      diff:'adv', diffLabel:'Advanced',
      soon:false,
      desc:'A horizontal pulling hold that demands elite lat and core strength. Requires solid pull-up and row foundation.',
    },
    {
      id:'planche',
      name:'Planche Program',
      tag:'iso', tagLabel:'Isometric',
      weeks:16, freq:'4×/wk',
      progression:'Tuck → Straddle',
      diff:'elite', diffLabel:'Elite',
      soon:false,
      desc:'One of the hardest bodyweight skills. Full body compression and pushing strength at the highest level.',
    },
    {
      id:'muscle-up',
      name:'Muscle-Up Program',
      tag:'pull', tagLabel:'Pull',
      weeks:8, freq:'3×/wk',
      progression:'Pull-up base required',
      diff:'adv', diffLabel:'Advanced',
      soon:false,
      desc:'The transition from pull to push above the bar. Needs 8+ clean pull-ups before starting.',
    },
    {
      id:'handstand',
      name:'Handstand Program',
      tag:'push', tagLabel:'Push',
      weeks:10, freq:'5×/wk',
      progression:'Wall → Freestanding',
      diff:'int', diffLabel:'Intermediate',
      soon:false,
      desc:'Balance, wrist conditioning and shoulder strength to hold a freestanding handstand. Daily practice required.',
    },
    {
      id:'back-lever',
      name:'Back Lever Program',
      tag:'pull', tagLabel:'Pull',
      weeks:8, freq:'2–3×/wk',
      progression:'Prep → Full',
      diff:'adv', diffLabel:'Advanced',
      soon:false,
      desc:'Classic static progression for steady back lever progress. Built for most athletes and long-term strength.',
      weeks_data:[
        {
          title:'Phase 1 — Prep & Mobility', phase:'Shoulder mobility and connective tissue prep',
          note:'2–3×/wk. Build comfort in the shoulder positions before heavy holds.',
          sessions:[
            {
              label:'Session',
              exercises:[
                {name:'Dead Hang', sets:'3', reps:'20–40s', note:'Build grip strength and shoulder prep.'},
                {name:'Active Hang', sets:'3', reps:'20s', note:'Keep the shoulders engaged.'},
                {name:'Scapular Pull-Up', sets:'3', reps:'8–10', note:'Train shoulder blade control.'},
                {name:'German Hang', sets:'3', reps:'15–20s', note:'Open the shoulders safely.'},
                {name:'Skin the Cat', sets:'3', reps:'3–5', note:'Move slowly through the position.'},
              ]
            }
          ]
        },
        {
          title:'Phase 2 — Intro Lever Strength', phase:'Learn body positioning',
          note:'4×8–15s holds. Focus on a tight tuck and clean shape.',
          sessions:[
            {
              label:'Session',
              exercises:[
                {name:'Tuck Back Lever — Parallettes', sets:'4', reps:'8–15s', note:'Hold the tucked position.'},
                {name:'Tuck Back Lever Hold', sets:'4', reps:'8–15s', note:'Maintain the lean and shoulder tension.'},
                {name:'Arch Hold', sets:'4', reps:'10–15s', note:'Balance the shoulder opening.'},
                {name:'Hollow Body Hold', sets:'4', reps:'10–15s', note:'Build full-body tension.'},
                {name:'Scapular Pull-Up', sets:'3', reps:'8–10', note:'Keep the shoulders active.'},
              ]
            }
          ]
        },
        {
          title:'Phase 3 — Intermediate Lever', phase:'Increase lever length gradually',
          note:'4–5 sets. Progress by lengthening the tuck or adding one-leg work.',
          sessions:[
            {
              label:'Session',
              exercises:[
                {name:'Advanced Tuck Back Lever', sets:'4', reps:'8–15s', note:'Add lever length if the tuck is stable.'},
                {name:'One-Leg Back Lever — Parallettes', sets:'4', reps:'5–10s/leg', note:'Increase load on one side.'},
                {name:'Skin-the-Cat Inverted Tuck Hold', sets:'4', reps:'8–12s', note:'Keep the shoulders open and tight.'},
                {name:'German Hang Pull-Up', sets:'4', reps:'4–6', note:'Use a controlled pull in the hang.'},
              ]
            }
          ]
        },
        {
          title:'Phase 4 — Full Back Lever', phase:'Build full lever strength and control',
          note:'Continue lean progression with full lever and negative work.',
          sessions:[
            {
              label:'Session',
              exercises:[
                {name:'Back Lever — Parallettes', sets:'4', reps:'5–10s', note:'Attempt the full position with control.'},
                {name:'Back Lever Negatives', sets:'4', reps:'3–5', note:'Slow descent from the top.'},
                {name:'Back Lever Hold Attempts', sets:'4', reps:'max effort', note:'Try the hold fresh each set.'},
                {name:'Front Lever', sets:'3', reps:'8–12s', note:'Supplementary core strength.'},
                {name:'Reverse Planche Hold', sets:'3', reps:'8–12s', note:'Build shoulder pressing stability.'},
                {name:'Hollow-to-Arch Roll', sets:'3', reps:'5', note:'Link hollow and arch tension.'},
              ]
            }
          ]
        }
      ]
    },
    {
      id:'back-lever-dynamic',
      name:'Back Lever Program V2',
      tag:'pull', tagLabel:'Pull',
      weeks:8, freq:'2×/wk',
      progression:'Movement → Strength',
      diff:'adv', diffLabel:'Advanced',
      soon:false,
      desc:'A dynamic back lever program with movement-based strength work instead of static-only holds.',
      weeks_data:[
        {
          title:'Dynamic Strength', phase:'Movement and tendon adaptation',
          note:'2×/wk. Focus on quality, control and gradual loading.',
          sessions:[
            {
              label:'Session',
              exercises:[
                {name:'Skin the Cat', sets:'4', reps:'3–5', note:'Move with control through the rings or bar.'},
                {name:'German Hang Pull-Up', sets:'3', reps:'3–6', note:'Build straight-arm pulling strength.'},
                {name:'Tuck Back Lever Raises', sets:'4', reps:'3–5', note:'Use the tuck position if available.'},
                {name:'Back Lever Negative', sets:'4', reps:'3', note:'Slow descent from the top.'},
                {name:'One-Leg Back Lever — Parallettes', sets:'3', reps:'5–10s/side', note:'Build one-side lever control.'},
                {name:'Arch Hold', sets:'3', reps:'20–30s', note:'Keep the body tight and open.'},
              ]
            }
          ]
        }
      ]
    },
    {
      id:'back-lever-rings',
      name:'Rings Back Lever Program',
      tag:'pull', tagLabel:'Pull',
      weeks:8, freq:'2–3×/wk',
      progression:'Rings → Lever',
      diff:'elite', diffLabel:'Elite',
      soon:false,
      desc:'Ring-specific back lever training for advanced athletes who want stability-focused pulling work.',
      weeks_data:[
        {
          title:'Rings Foundation', phase:'Ring stability and shoulder prep',
          note:'Start with ring support and movement drills before lever work.',
          sessions:[
            {
              label:'Session',
              exercises:[
                {name:'Ring Support Hold', sets:'3', reps:'15–20s', note:'Hold the rings steady with straight arms.'},
                {name:'Skin the Cat — Rings', sets:'3', reps:'3–5', note:'Open the shoulders in a ring-friendly path.'},
                {name:'German Hang', sets:'3', reps:'15–20s', note:'Build shoulder flexibility.'},
                {name:'Active Hang', sets:'3', reps:'20s', note:'Keep the shoulders active.'},
              ]
            }
          ]
        },
        {
          title:'Rings Main Progression', phase:'Ring back lever work',
          note:'Work the ring-specific lever positions with assistance as needed.',
          sessions:[
            {
              label:'Session',
              exercises:[
                {name:'Tuck Back Lever — Rings', sets:'4', reps:'8–12s', note:'Use a safe ring tuck hold.'},
                {name:'One-Leg Back Lever — Rings', sets:'4', reps:'5–10s/leg', note:'Add one-legged stability.'},
                {name:'Back Lever — Rings', sets:'4', reps:'5–10s', note:'Attempt the full ring lever with support.'},
                {name:'Ring Row', sets:'3', reps:'8–12', note:'Build pulling balance.'},
                {name:'Ring Pull-Up', sets:'3', reps:'5–8', note:'Support the ring strength base.'},
                {name:'Ring Fallout', sets:'3', reps:'5', note:'Control the body as it slides forward.'},
                {name:'Hollow Body Hold', sets:'3', reps:'20–30s', note:'Keep core tension through the rings.'},
              ]
            }
          ]
        }
      ]
    },
    {
      id:'back-lever-lite',
      name:'Back Lever Lite',
      tag:'pull', tagLabel:'Pull',
      weeks:8, freq:'2–3×/wk',
      progression:'Bar only → Lever',
      diff:'adv', diffLabel:'Advanced',
      soon:false,
      desc:'A low-equipment back lever program for home or park training using only a pull-up bar.',
      weeks_data:[
        {
          title:'Low Equipment Progression', phase:'Bar-only leverage training',
          note:'Minimal setup. Focus on bar holds and basic lever entries.',
          sessions:[
            {
              label:'Session',
              exercises:[
                {name:'Dead Hang', sets:'3', reps:'20–40s', note:'Build grip and shoulder prep.'},
                {name:'Active Hang', sets:'3', reps:'20s', note:'Keep the shoulders engaged.'},
                {name:'Skin the Cat', sets:'3', reps:'3–5', note:'Use a secure pull-up bar.'},
                {name:'Tuck Back Lever', sets:'4', reps:'8–12s', note:'Start the lever with a tight tuck.'},
                {name:'Negative Back Lever', sets:'4', reps:'3', note:'Slow descent from the top.'},
                {name:'Arch Hold', sets:'3', reps:'20–30s', note:'Balance shoulder opening with tension.'},
                {name:'Hollow Body Hold', sets:'3', reps:'20–30s', note:'Keep the body tight as a unit.'},
              ]
            }
          ]
        }
      ]
    },
    {
      id:'hspu',
      name:'HSPU Program',
      tag:'push', tagLabel:'Push',
      weeks:10, freq:'4×/wk',
      progression:'HS hold required',
      diff:'adv', diffLabel:'Advanced',
      soon:false,
      desc:'Handstand push-up — shoulder pressing at maximum range of motion. Needs stable freestanding hold first.',
    },
    {
      id:'tier0',
      name:'Beginner Tier 0',
      tag:'push', tagLabel:'Push',
      weeks:8, freq:'3×/wk',
      progression:'Zero → Habit',
      diff:'starter', diffLabel:'Starter',
      soon:false,
      desc:'A gentle entry point for inactive, overweight or returning beginners. Builds mobility, coordination and confidence without intimidation.',
      weeks_data:[
        {
          title:'Week 1–8', phase:'Mobility, habit and easy strength',
          note:'3×/wk, alternate Workout A/B and rest as needed.',
          sessions:[
            {
              label:'Workout A',
              exercises:[
                {name:'Arm Circle', sets:'1', reps:'30s', note:'Slow, controlled motion.'},
                {name:'Hip Circle', sets:'1', reps:'30s', note:'Keep the spine tall.'},
                {name:'Wall Push-Up', sets:'2', reps:'8 reps', note:'Stand close to the wall and keep the body straight.'},
                {name:'Box Step Touch', sets:'2', reps:'20s', note:'Move slowly and keep the step light.'},
                {name:'Chair-Assisted Squat', sets:'2', reps:'8 reps', note:'Sit back to the chair and stand with control.'},
                {name:'Glute Bridge', sets:'2', reps:'10 reps', note:'Squeeze the hips at the top.'},
              ]
            },
            {
              label:'Workout B',
              exercises:[
                {name:'March in Place', sets:'1', reps:'30s', note:'Lift the knees only as high as is comfortable.'},
                {name:'Shoulder Roll', sets:'1', reps:'10 reps', note:'Roll both forwards and backwards.'},
                {name:'High Incline Push-Up', sets:'2', reps:'6 reps', note:'Use a table, counter or wall.'},
                {name:'Wall Sit', sets:'2', reps:'20s', note:'Keep the back flat against the wall.'},
                {name:'Kneeling Plank', sets:'2', reps:'20s', note:'Keep the hips level and core engaged.'},
                {name:'Reverse Lunge (assisted)', sets:'2', reps:'5 reps/leg', note:'Use a chair or wall for balance.'},
              ]
            }
          ]
        }
      ]
    },
    {
      id:'tier1',
      name:'Beginner Tier 1',
      tag:'push', tagLabel:'Push',
      weeks:8, freq:'3×/wk',
      progression:'Mover → Stronger',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'For people who can move comfortably and want a real beginner routine. Builds full-body strength, control and endurance.',
      weeks_data:[
        {
          title:'Week 1–8', phase:'Basic strength and coordination',
          note:'3×/wk, alternate Workout A/B and keep the pace steady.',
          sessions:[
            {
              label:'Workout A',
              exercises:[
                {name:'Jumping Jack', sets:'1', reps:'40s', note:'Light pace.'},
                {name:'Hip 90/90', sets:'1', reps:'30s', note:'Control the rotation.'},
                {name:'Incline Push-Up', sets:'3', reps:'8–12', note:'Keep the body straight.'},
                {name:'Bodyweight Squat', sets:'3', reps:'12', note:'Sit back and stand with control.'},
                {name:'Australian Pull-Up', sets:'3', reps:'6–10', note:'Pull the chest to the bar.'},
                {name:'Glute Bridge', sets:'3', reps:'12', note:'Squeeze the hips at the top.'},
                {name:'Plank', sets:'3', reps:'20–30s', note:'Keep the spine neutral.'},
              ]
            },
            {
              label:'Workout B',
              exercises:[
                {name:'Scapular Push-Up', sets:'1', reps:'10', note:'Focus on shoulder blade movement.'},
                {name:'Leg Swing (lateral)', sets:'1', reps:'10/leg', note:'Keep the torso stable.'},
                {name:'Incline Push-Up', sets:'3', reps:'8–12', note:'Lower with control.'},
                {name:'Bodyweight Squat', sets:'3', reps:'12', note:'Drive through the heels.'},
                {name:'Australian Pull-Up', sets:'3', reps:'6–10', note:'Use a straight line from head to heels.'},
                {name:'Reverse Lunge', sets:'3', reps:'8/leg', note:'Use support if needed.'},
                {name:'Optional Finisher', sets:'1', reps:'45s', note:'Jump rope or high knees.'},
              ]
            }
          ]
        }
      ]
    },
    {
      id:'tier2',
      name:'Beginner Tier 2',
      tag:'push', tagLabel:'Push',
      weeks:8, freq:'3–4×/wk',
      progression:'Ready for calisthenics',
      diff:'int', diffLabel:'Intermediate',
      soon:false,
      desc:'A proper beginner strength program for athletes who can do basic push-ups, squats and plank. Builds pushing, pulling and core stability.',
      weeks_data:[
        {
          title:'Week 1–8', phase:'Strength, skill prep and core',
          note:'3–4×/wk, choose one easy skill prep exercise each session.',
          sessions:[
            {
              label:'Session A',
              exercises:[
                {name:'Jumping Jack', sets:'1', reps:'40s', note:'Controlled cardio warm-up.'},
                {name:'Scapular Pull-Up', sets:'1', reps:'8', note:'Activate the shoulders and back.'},
                {name:'Standard Push-Up', sets:'3', reps:'6–12', note:'Keep the body straight.'},
                {name:'Australian Pull-Up', sets:'3', reps:'8–12', note:'Chest to bar with control.'},
                {name:'Bulgarian Split Squat', sets:'3', reps:'8/leg', note:'Use support if needed.'},
                {name:'Pike Push-Up', sets:'3', reps:'6–10', note:'Keep the hips high.'},
                {name:'Hanging Knee Raise', sets:'3', reps:'10', note:'Use a high bar or rings.'},
                {name:'Plank Shoulder Tap', sets:'3', reps:'20 taps', note:'Minimize hip rotation.'},
              ]
            },
            {
              label:'Skill Prep',
              exercises:[
                {name:'Choose one', sets:'1', reps:'15–30s', note:'Dead Hang, Flexed Arm Hang, Hollow Body Hold or Wall Handstand.'},
              ]
            }
          ]
        }
      ]
    },
    {
      id:'30-second-rule',
      name:'30-Second Rule',
      tag:'push', tagLabel:'Push',
      weeks:12, freq:'7×/wk',
      progression:'Beginner foundation',
      diff:'beg', diffLabel:'Beginner',
      soon:false,
      desc:'DEV\'s favourite workout. It builds a strong foundation for harder workouts and is suitable for beginners who can do the exercises listed.',
      weeks_data:[
        {
          title:'Week 1–12', phase:'Foundation conditioning',
          note:'Perform this circuit every day for 12 weeks. Rest 10–30 seconds between sets and focus on steady form over speed.',
          sessions:[
            {
              label:'Daily circuit (7×/wk)',
              exercises:[
                {name:'Bodyweight Squat', sets:'3', reps:'30s', note:'Drive through the heels, keep chest upright.'},
                {name:'Standard Push-Up', sets:'3', reps:'30s', note:'Maintain a straight line from head to heels.'},
                {name:'Crunch', sets:'3', reps:'30s', note:'Use controlled tension and avoid neck strain.'},
                {name:'Bicycle Crunch', sets:'3', reps:'30s', note:'Rotate fully and keep the lower back pressed into the floor.'},
                {name:'Burpees Combo', sets:'3', reps:'30s', note:'Jump softly and keep the push-up tight.'}
              ]
            }
          ]
        }
      ]
    },
    {
      id:'one-arm-pullup',
      name:'One-Arm Pull-Up',
      tag:'pull', tagLabel:'Pull',
      weeks:0, freq:'', progression:'',
      diff:'elite', diffLabel:'Elite',
      soon:true,
    },
    {
      id:'human-flag',
      name:'Human Flag',
      tag:'iso', tagLabel:'Isometric',
      weeks:0, freq:'', progression:'',
      diff:'elite', diffLabel:'Elite',
      soon:true,
    },
    {
      id:'foundation',
      name:'Beginner Foundation',
      tag:'push', tagLabel:'Push',
      weeks:0, freq:'', progression:'',
      diff:'beg', diffLabel:'Beginner',
      soon:true,
    },
  ];
