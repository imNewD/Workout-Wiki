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
      diff:'starter', diffLabel:'Starter',
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
      weeks:8, freq:'3×/wk',
      progression:'Tuck → Full',
      diff:'adv', diffLabel:'Advanced',
      soon:false,
      desc:'A foundational gymnastic hold. Easier than front lever but still demands serious shoulder extension strength.',
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
