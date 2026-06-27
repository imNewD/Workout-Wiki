const TERMINOLOGY_ENTRIES = [

  // ══════════════════════════════════════════════════════════════════════════
  // GENERAL
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'When to consider an exercise completed',
    text: 'Aim for at least 3 clean reps with full control, or hold a static position for at least 3 seconds. "Clean" means no cheating the range of motion, no sudden collapse, and no using momentum to compensate.',
  },
  {
    label: 'What is a progression?',
    text: 'An easier variation of a skill that trains the same movement pattern and muscles. You work through progressions in order — each one slightly harder than the last — until you can perform the full skill. For example: knee push-up → full push-up → archer push-up → one-arm push-up.',
  },
  {
    label: 'What is a regression?',
    text: 'A scaled-down version of a movement used when the current exercise is too hard. Instead of skipping the skill entirely, you train the regression until you\'re strong enough to step up. Think of it as meeting your body where it actually is, not where you wish it was.',
  },
  {
    label: 'What does "loaded" mean?',
    text: 'Adding extra resistance on top of your own bodyweight — such as a weight vest, a dumbbell held to the chest, or a resistance band pulling against you. Useful when a bodyweight exercise has become too easy.',
  },
  {
    label: 'What does "unilateral" mean?',
    text: 'Training one side of the body at a time — one arm or one leg. Unilateral exercises (e.g. one-arm push-up, pistol squat) are significantly harder because all the load falls on a single limb and your core must work overtime to stay balanced. They also help identify and fix strength imbalances between sides.',
  },
  {
    label: 'What does "full range of motion (ROM)" mean?',
    text: 'Moving a joint through its complete possible range from start to finish. For example: chest touching the floor at the bottom of a push-up, or hips below parallel in a squat. Full ROM builds more strength and flexibility than partial reps, and is generally the standard unless a specific partial-range technique is being used intentionally.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GRIP & HAND POSITION
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Grip orientations',
    text: [
      '<strong>Pronated (overhand):</strong> palms facing away from you or facing down. Standard pull-up grip. Harder on the biceps, more lat-dominant.',
      '<strong>Supinated (underhand):</strong> palms facing toward you or facing up. Standard chin-up grip. Puts the biceps in a stronger position, making it slightly easier for most people.',
      '<strong>Neutral:</strong> palms facing each other, like holding two hammers. Often the most wrist-friendly option and used on parallel bars or with certain dumbbell exercises.',
    ].join('<br>'),
  },
  {
    label: "What's the difference between fist and knuckle push-ups?",
    text: '<strong>Fist push-ups</strong> rest on the flat front of the curled fingers (the finger pads). <strong>Knuckle push-ups</strong> balance on the knuckles of the index and middle fingers, keeping the wrist in a straight, neutral line. Knuckle push-ups reduce wrist strain for people with wrist pain, and also add a small stability challenge through the forearm.',
  },
  {
    label: 'What does "wide" or "narrow" grip mean?',
    text: '<strong>Wide grip:</strong> hands placed further than shoulder-width apart. Stretches the chest more, shifts load toward the pecs and rear delts. <strong>Narrow / close grip:</strong> hands close together, sometimes touching. Shifts the load toward the triceps and inner chest. Neither is universally better — both have their place in a well-rounded program.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FOOT & LEG POSITION
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'What does "straddle" mean?',
    text: 'Legs spread wide out to the sides, creating a broad base of support. A straddle position shortens the effective lever arm of the legs, making many skills (like levers and handstands) easier to hold than with legs together. It\'s a common first step when learning a new static skill.',
  },
  {
    label: 'What does "tuck" mean?',
    text: 'Knees pulled in toward the chest, making the body as compact as possible. A tucked position drastically reduces the lever arm, which is why it\'s the easiest progression for skills like the front lever, back lever, and planche. The tighter the tuck, the easier the hold.',
  },
  {
    label: 'What does "pike" mean?',
    text: 'Hips bent at roughly 90° with legs straight and together, forming a sharp "V" shape. It\'s the middle ground between a tuck (easier) and a full straight-body position (hardest). Common in handstand and lever progressions.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SHOULDER & SPINE
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Shoulder blade (scapular) movements',
    text: [
      '<strong>Protract:</strong> push the shoulder blades forward and apart, away from the spine — like rounding your upper back. Essential at the top of a push-up or dip to protect the shoulder joint.',
      '<strong>Retract:</strong> squeeze the shoulder blades together toward the spine — like trying to hold a pencil between them. Key for rows and pulling movements.',
      '<strong>Depress:</strong> pull the shoulder blades down, away from the ears. Critical for safe overhead pressing and hanging exercises — stops the shoulders from creeping up.',
      '<strong>Elevate:</strong> shrug the shoulder blades up toward the ears. Usually something to avoid during exercises, but used intentionally in shrugs and certain trap work.',
      '<strong>Scapular push-up / pull-up:</strong> a drill that isolates scapular movement with the arms locked straight — used to build the shoulder control needed for more advanced skills.',
    ].join('<br>'),
  },
  {
    label: 'Spine & core terms',
    text: [
      '<strong>Neutral spine:</strong> maintaining the natural S-curve of the back without forcing it to arch or round. The goal in most exercises. Keeps load distributed safely across the spine.',
      '<strong>Posterior pelvic tilt (PPT):</strong> tucking the tailbone under, which flattens the lower back. Done intentionally in hollow body holds and planche work to engage the core and protect the lumbar spine.',
      '<strong>Anterior pelvic tilt (APT):</strong> the pelvis tips forward and the lower back arches. Common posture problem — usually something to correct, though some exercises (like hip thrusts) use it deliberately.',
      '<strong>Hollow body:</strong> a full-body tension position where the ribs are pulled down, lower back is pressed flat, core is braced, and arms and legs are extended. The foundation of almost all gymnastics strength work.',
      '<strong>Bracing:</strong> actively tensing the entire core — front, sides, and back — as if you\'re about to take a punch. Not just "sucking in" — bracing creates 360° stability around the spine.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MOVEMENT QUALITY
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Tempo & movement phases',
    text: [
      '<strong>Eccentric (lowering phase):</strong> the muscle lengthens under tension — e.g. lowering yourself down in a push-up. Slow eccentrics build a lot of strength and cause more muscle damage (the good kind that drives growth).',
      '<strong>Concentric (lifting phase):</strong> the muscle shortens as it contracts — e.g. pressing back up from the bottom of a push-up.',
      '<strong>Isometric (hold):</strong> no movement at all; the muscle generates force without changing length. Planks, wall sits, and static levers are all isometric.',
      '<strong>Tempo notation:</strong> written as three numbers (e.g. 3-1-2) meaning: 3 seconds eccentric, 1 second pause at the bottom, 2 seconds concentric. Slowing tempo down dramatically increases difficulty without adding weight.',
      '<strong>Explosive / plyometric:</strong> moving as fast as possible through the concentric phase to develop power. The goal is speed, not control.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // VOLUME & TRAINING STRUCTURE
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Sets, reps & rest',
    text: [
      '<strong>Rep (repetition):</strong> one complete execution of a movement, from start position back to start position.',
      '<strong>Set:</strong> a group of consecutive reps done without stopping to rest.',
      '<strong>Rest interval:</strong> the recovery time between sets. Shorter rest (30–90 s) keeps intensity up and builds endurance. Longer rest (2–5 min) allows more recovery for strength-focused sets.',
      '<strong>Volume:</strong> the total amount of work in a session — typically sets × reps, or sets × reps × weight.',
      '<strong>Intensity:</strong> how close to your maximum a given set is. A set of 10 where you could do 20 is low intensity; a set of 10 where you could barely do 11 is high intensity.',
    ].join('<br>'),
  },
  {
    label: 'What is training to failure?',
    text: 'Pushing a set until you physically cannot complete another clean rep. Training to failure is effective but taxing on the nervous system — it\'s best used sparingly, maybe once per exercise per week, rather than every single set.',
  },
  {
    label: 'What is RPE (Rate of Perceived Exertion)?',
    text: 'A 1–10 scale for how hard a set feels. RPE 10 = absolute maximum effort, nothing left. RPE 8 = could have done 2 more reps. RPE 6 = could have done 4 more. Most working sets sit around RPE 7–9. It\'s a useful tool for auto-regulating effort on days when you feel great or feel off.',
  },
  {
    label: 'What is a superset?',
    text: 'Performing two exercises back-to-back with little or no rest between them. Often used to pair opposing muscle groups (e.g. push + pull) so one rests while the other works — making training more time-efficient without sacrificing quality.',
  },
  {
    label: 'What is progressive overload?',
    text: 'Gradually increasing the demand on your body over time — more reps, more sets, harder progressions, less rest, slower tempo, or added weight. Without progressive overload, the body adapts and stops improving. It\'s the single most important principle behind long-term strength gains.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BODY POSITIONS (CALISTHENICS)
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Common calisthenics body positions',
    text: [
      '<strong>Plank:</strong> a rigid, straight-line position from head to heels, held on hands or forearms and toes. The foundation of push-up and core work — a weak plank position means the whole exercise breaks down.',
      '<strong>Support hold:</strong> arms fully locked out, body suspended above a surface (floor, parallettes, or rings). Builds the wrist, elbow, and shoulder stability needed for more advanced skills.',
      '<strong>Inverted:</strong> any position where your hips or whole body is above your head — headstand, handstand, or inverted hang on a bar.',
      '<strong>Dead hang:</strong> hanging from a bar with arms fully extended and shoulders relaxed. Used as a baseline for grip and shoulder health, and as a decompression tool for the spine.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BODYWEIGHT EQUIPMENT
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'Bodyweight training equipment',
    text: [
      '<strong>Pull-up bar:</strong> a fixed horizontal bar for hanging, pulling, and pressing movements. Can be wall-mounted, door-frame mounted, or a free-standing rig.',
      '<strong>Parallettes:</strong> low parallel bars that raise your hands off the floor, giving you extra depth on push-ups and dips, and allowing support holds. Much more wrist-friendly than flat floor for many people.',
      '<strong>Gymnastic rings:</strong> two suspended wooden or plastic loops. Because they move freely, rings demand far more stabilizer muscle activation than any fixed bar. Harder but extremely effective.',
      '<strong>Resistance band:</strong> a thick elastic loop used either to assist a movement (looped around the bar and your foot to support some weight) or to add resistance to a movement (attached so it pulls against you).',
      '<strong>Dip bars / parallel bars:</strong> two horizontal bars set parallel to each other at hip height. Used for dips, L-sits, support holds, and pressing movements.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GYM (WEIGHT TRAINING)
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'What is weight training / resistance training?',
    text: 'Any form of training that uses external resistance — barbells, dumbbells, machines, or cables — to make muscles work against a load. The goal is to progressively increase that load over time, forcing the muscles to grow stronger and larger to meet the demand. It complements bodyweight training extremely well.',
  },
  {
    label: 'Free weights vs machines',
    text: [
      '<strong>Free weights (barbells & dumbbells):</strong> the weight moves freely in space, so your stabilizer muscles have to work alongside the primary movers. Harder to learn but builds more real-world strength and muscle coordination.',
      '<strong>Machines:</strong> the weight moves along a fixed path, which removes the balance/stability demand and isolates the target muscle more directly. Great for beginners learning a muscle group, or for isolating weak points without fatigue from stabilizers.',
      '<strong>Cable machines:</strong> a pulley system that keeps constant tension on the muscle throughout the full range of motion — unlike a dumbbell where tension drops at certain angles.',
    ].join('<br>'),
  },
  {
    label: 'Common gym equipment',
    text: [
      '<strong>Barbell:</strong> a long steel bar (typically 20 kg / 45 lb for a standard Olympic bar) loaded with weight plates on each end. Used for the big compound lifts — squat, deadlift, bench press, overhead press, row.',
      '<strong>Dumbbell:</strong> a short hand-held weight. More versatile than a barbell for unilateral work and allows a more natural range of motion on some exercises.',
      '<strong>Kettlebell:</strong> a cast-iron ball with a handle. The offset center of gravity makes it uniquely effective for swings, Turkish get-ups, and ballistic movements.',
      '<strong>Weight plates:</strong> circular discs slid onto a barbell to increase load. Come in standard sizes: 1.25 kg, 2.5 kg, 5 kg, 10 kg, 15 kg, 20 kg, 25 kg.',
      '<strong>Rack / squat rack / power rack:</strong> a steel frame with adjustable hooks that holds the barbell at the right height so you can safely get under it for squats and pressing, and re-rack it without a spotter.',
      '<strong>Bench:</strong> a padded surface used for bench press, dumbbell work, and step-ups. Can be flat, inclined (upper chest focus), or declined (lower chest focus).',
      '<strong>Cable machine / pulley:</strong> a system of cables, weights, and pulleys that can be adjusted to pull from any height. Provides constant tension and is highly versatile for rows, pull-downs, flyes, and tricep work.',
      '<strong>Smith machine:</strong> a barbell fixed to vertical rails — it only moves straight up and down. Removes the balance component. Useful for isolated pressing but limits natural bar path.',
    ].join('<br>'),
  },
  {
    label: 'Key gym movements',
    text: [
      '<strong>Compound lift:</strong> a movement that involves multiple joints and muscle groups at once — e.g. squat (hips + knees), deadlift (hips + back + legs), bench press (shoulders + elbows + chest). These are the most efficient exercises for building overall strength.',
      '<strong>Isolation exercise:</strong> targets a single muscle group with one joint moving — e.g. bicep curl, leg extension, lateral raise. Used to address weak points or add volume to a specific muscle.',
      '<strong>Squat:</strong> lowering the hips toward the floor by bending the knees and hips simultaneously, then standing back up. The king of lower body exercises — hits quads, glutes, hamstrings, and core.',
      '<strong>Deadlift:</strong> picking a loaded barbell off the floor to a standing position by driving the hips forward. One of the best full-body strength movements — especially for the posterior chain (back, glutes, hamstrings).',
      '<strong>Bench press:</strong> lying on a bench and pressing a barbell or dumbbells away from the chest. Primary chest, front delt, and tricep exercise.',
      '<strong>Overhead press (OHP):</strong> pressing a barbell or dumbbells from shoulder height to fully overhead. Trains shoulders, upper traps, and triceps.',
      '<strong>Row:</strong> pulling a weight horizontally toward your torso. Targets the back (lats, rhomboids, traps) and biceps. The horizontal pulling counterpart to pressing.',
      '<strong>Hip hinge:</strong> the fundamental movement pattern of bending forward at the hips while keeping a neutral spine — the basis of deadlifts, RDLs, and kettlebell swings.',
    ].join('<br>'),
  },
  {
    label: 'Gym programming terms',
    text: [
      '<strong>1RM (one-rep max):</strong> the maximum weight you can lift for exactly one full rep. Used as a reference point — e.g. "work up to 80% of your 1RM for 5 sets of 3."',
      '<strong>Compound first:</strong> a common programming rule — always do your big multi-joint lifts (squat, deadlift, press) early in the session when you\'re fresh, then move to isolation work afterward.',
      '<strong>Deload week:</strong> a planned week of reduced volume or intensity, typically every 4–8 weeks. Allows the joints, connective tissue, and nervous system to recover fully so you can push hard again afterward.',
      '<strong>Warm-up sets:</strong> lighter sets done before your working sets to prepare the joints and rehearse the movement pattern. Not junk volume — essential for performance and injury prevention.',
      '<strong>Spot (spotter):</strong> a training partner who stands by to assist if you fail a rep — especially important for heavy bench press or squats without a power rack.',
    ].join('<br>'),
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CARDIO
  // ══════════════════════════════════════════════════════════════════════════
  {
    label: 'What is cardio / cardiovascular training?',
    text: 'Any sustained activity that raises your heart rate and challenges the heart, lungs, and circulatory system to deliver oxygen to working muscles. Regular cardio improves your aerobic fitness (how efficiently your body uses oxygen), lowers resting heart rate, speeds up recovery between strength sets, and supports long-term heart health.',
  },
  {
    label: 'Aerobic vs anaerobic exercise',
    text: [
      '<strong>Aerobic ("with oxygen"):</strong> exercise at a moderate intensity your body can sustain for an extended period — jogging, cycling, swimming, brisk walking. Your body primarily burns fat and carbohydrates using oxygen as fuel. Builds your base fitness and endurance.',
      '<strong>Anaerobic ("without oxygen"):</strong> short, very high-intensity bursts where the demand for energy outpaces what oxygen can supply — sprinting, heavy lifting, jump squats. The body relies on stored energy (glycogen) and produces lactate as a byproduct. Can only be sustained for seconds to a couple of minutes.',
    ].join('<br>'),
  },
  {
    label: 'Heart rate zones',
    text: [
      'Your heart rate during cardio determines what energy system you\'re training. Zones are typically expressed as a percentage of your maximum heart rate (roughly estimated as 220 minus your age).',
      '<br><strong>Zone 1 (50–60%):</strong> very light effort — active recovery, easy walks. Great for moving without adding training stress.',
      '<strong>Zone 2 (60–70%):</strong> conversational pace — you can speak in full sentences. The most important zone for building a long-term aerobic base. Should make up the majority of cardio training.',
      '<strong>Zone 3 (70–80%):</strong> moderate effort — talking becomes uncomfortable. The "grey zone" — harder than easy but not hard enough to fully train the anaerobic system.',
      '<strong>Zone 4 (80–90%):</strong> hard effort — breathing heavily, can only say a few words. Builds lactate threshold (how long you can sustain high intensity).',
      '<strong>Zone 5 (90–100%):</strong> maximum effort — all-out sprints, unsustainable for more than 30–60 seconds. Trains peak power output.',
    ].join('<br>'),
  },
  {
    label: 'LISS, MISS & HIIT',
    text: [
      '<strong>LISS (Low-Intensity Steady State):</strong> sustained cardio at a low, constant effort — e.g. a 45-minute brisk walk or easy jog at Zone 2. Easy to recover from, can be done frequently, and excellent for building the aerobic base without interfering with strength training.',
      '<strong>MISS (Moderate-Intensity Steady State):</strong> sustained effort in the moderate zone — e.g. a 30-minute run at a comfortably hard pace. More demanding than LISS; use sparingly if your main goal is strength.',
      '<strong>HIIT (High-Intensity Interval Training):</strong> alternating between very hard effort and short recovery periods — e.g. 20 seconds all-out sprint, 40 seconds walk, repeated 8–10 times. Extremely time-efficient for burning calories and improving fitness, but very taxing. 1–2 sessions per week is usually enough.',
    ].join('<br>'),
  },
  {
    label: 'VO₂ max — what is it?',
    text: 'The maximum rate at which your body can consume oxygen during intense exercise, measured in mL/kg/min. It\'s the gold standard measure of aerobic fitness. A higher VO₂ max means your cardiovascular system can deliver more oxygen to your muscles, which translates to better endurance performance and — importantly — better long-term health outcomes.',
  },
  {
    label: 'Common cardio modalities',
    text: [
      '<strong>Running / jogging:</strong> the most accessible cardio — no equipment needed. High-impact, so joint-loading is something to manage with good footwear and gradual mileage increases.',
      '<strong>Cycling:</strong> low-impact cardio that\'s easy on the knees. Can be done outdoors or on a stationary bike. Spin classes add a structured, high-intensity option.',
      '<strong>Rowing:</strong> full-body cardio that engages legs, core, and arms simultaneously. Low-impact and excellent for people who want upper body involvement in their cardio.',
      '<strong>Jump rope / skipping:</strong> surprisingly intense. 10 minutes of jump rope is roughly equivalent to 30 minutes of jogging for cardiovascular load. Also develops coordination and footwork.',
      '<strong>Swimming:</strong> the most joint-friendly cardio option — essentially zero impact. Works the whole body and is particularly good for people with joint issues or during injury recovery.',
      '<strong>Stair climber / incline treadmill:</strong> low-impact alternatives to running that heavily load the glutes and quads. Good bridge between cardio and lower-body strength work.',
    ].join('<br>'),
  },
  {
    label: 'Cardio & strength training — how do they interact?',
    text: 'Done correctly, cardio and strength training complement each other. A good aerobic base speeds recovery between strength sets and between training days. However, doing very long or intense cardio immediately before strength work will reduce performance. Most people do best keeping cardio and strength sessions separate (different times of day or different days), or placing cardio after lifting if they must be combined. LISS is the least likely to interfere with strength gains.',
  },
];

function _renderInfoFaqTerms(searchTerm = '') {
  const container = document.getElementById('infoFaqTermsBody');
  if (!container) return;
  const empty = document.getElementById('iffTermsEmpty');
  const count = document.getElementById('iffTermCount');

  const query = (searchTerm || '').trim().toLowerCase();
  const results = TERMINOLOGY_ENTRIES.filter(entry => {
    if (!query) return true;
    return `${entry.label} ${entry.text}`.toLowerCase().includes(query);
  });

  container.innerHTML = results.map(entry =>
    `<details class="iff-term">
      <summary><span class="iff-term-chev">▸</span><span class="iff-term-q">${entry.label}</span></summary>
      <div class="iff-term-a">${entry.text}</div>
    </details>`
  ).join('');

  if (empty) empty.style.display = results.length ? 'none' : 'block';
  if (count) count.textContent = query
    ? `${results.length} of ${TERMINOLOGY_ENTRIES.length}`
    : `${TERMINOLOGY_ENTRIES.length} terms`;
}

document.addEventListener('DOMContentLoaded', () => {
  _renderInfoFaqTerms();
  const search = document.getElementById('iffTermsSearch');
  if (search) search.addEventListener('input', function() { _renderInfoFaqTerms(this.value); });
});

/* ──────────────────────────────────────────────────────────────
   "How it works" guided tour (#iffJourney) + scroll-reveal.
   A slide deck of N panels (count read from the DOM, not hard-coded).
   Auto-advances while visible; pauses on hover / when scrolled away.
   Prev/next arrows and dot indicators allow manual navigation; the
   dots are generated to match the panel count. A top progress bar
   tracks the auto-advance timer. Visibility is tracked with an
   IntersectionObserver, which also covers the .view display:none
   toggle when switching pages. Respects prefers-reduced-motion.
   ────────────────────────────────────────────────────────────── */
(function () {
  const STEP_MS = 8000;
  const reduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let root, panels, dots, bar, countEl, titleEl,
      idx = 0, N = 0, timer = null, playing = false, visible = false;

  const pad = (n) => String(n).padStart(2, '0');

  function restartBar() {
    if (!bar) return;
    bar.classList.remove('run');
    void bar.offsetWidth;               // force reflow so the animation restarts
    if (playing && !reduced) bar.classList.add('run');
  }
  function render(i) {
    idx = (i + N) % N;
    panels.forEach((p, k) => p.classList.toggle('on', k === idx));
    dots.forEach((d, k) => {
      d.classList.toggle('on', k === idx);
      d.classList.toggle('done', k < idx);
    });
    if (countEl) countEl.textContent = pad(idx + 1) + ' / ' + pad(N);
    if (titleEl) titleEl.textContent = panels[idx].getAttribute('data-title') || '';
    restartBar();
  }
  function stopTimer() { if (timer) { clearTimeout(timer); timer = null; } }
  function queue() { stopTimer(); timer = setTimeout(() => { render(idx + 1); queue(); }, STEP_MS); }
  function play() { if (reduced || playing) return; playing = true; root.classList.remove('iff-jrn-paused'); restartBar(); queue(); }
  function pause() { playing = false; stopTimer(); root.classList.add('iff-jrn-paused'); }
  function go(i) { render(i); if (!reduced) { pause(); play(); } }

  function initJourney() {
    root = document.getElementById('iffJourney');
    if (!root) return;
    panels = Array.prototype.slice.call(root.querySelectorAll('.iff-jrn-panel'));
    N = panels.length;
    if (!N) return;

    bar     = root.querySelector('.iff-jrn-bar-fill');
    countEl = root.querySelector('.iff-jrn-count');
    titleEl = root.querySelector('.iff-jrn-steptitle');
    root.style.setProperty('--jrn-dur', (STEP_MS / 1000) + 's');

    // Build one dot per panel.
    dots = [];
    const dotsWrap = root.querySelector('.iff-jrn-dots');
    if (dotsWrap) {
      panels.forEach((p, k) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'iff-jrn-dot';
        b.setAttribute('aria-label', 'Slide ' + (k + 1));
        b.addEventListener('click', () => go(k));
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }

    // Prev / next arrows (data-dir = -1 | 1).
    Array.prototype.forEach.call(root.querySelectorAll('.iff-jrn-nav'), (btn) => {
      const dir = parseInt(btn.getAttribute('data-dir'), 10) || 1;
      btn.addEventListener('click', () => go(idx + dir));
    });

    render(0);
    root.addEventListener('mouseenter', pause);
    root.addEventListener('mouseleave', () => { if (visible) play(); });

    if ('IntersectionObserver' in window && !reduced) {
      new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          visible = e.isIntersecting;
          if (visible) play(); else pause();
        });
      }, { threshold: 0.35 }).observe(root);
    }
  }

  function initReveal() {
    if (reduced || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll(
      '#view-info-faq .iff-nav-card, #view-info-faq .iff-spot, #view-info-faq .iff-label, ' +
      '#view-info-faq .iff-card, #view-info-faq .iff-links-card, #view-info-faq .iff-terms-search'
    );
    if (!targets.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('iff-rv-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach((t) => { t.classList.add('iff-rv'); io.observe(t); });
  }

  document.addEventListener('DOMContentLoaded', () => { initJourney(); initReveal(); });
})();
