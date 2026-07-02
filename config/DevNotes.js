const DEVLOG_VERSION = 'V1.84';
const DEVLOG_ENTRIES = [
  {
    ver: 'V1.84',
    date: 'July 2026',
    items: [
      { tag:'new', text:'Personalization — Custom Loader, Custom Backdrop, Custom Alarm Sound and Custom Motivational Quote are now unlockable through Achievements. More achievements added to the list.' },
    ]
  },
  {
    ver: 'V1.83',
    date: 'July 2026',
    items: [
      { tag:'new', text:'New section: Achievements — unlock special features as you train, tracked visually on a hex map you can explore.' },
      { tag:'fix', text:'Minor bug fixes.' },
    ]
  },
  {
    ver: 'V1.82',
    date: 'July 2026',
    items: [
      { tag:'new', text:'New seasonal themes — Summer, Winter Arc, Spring Cut and Autumn Bulk are now earned through real training and nutrition activity instead of the calendar.' },
      { tag:'fix', text:'Minor bug fixes.' },
      { tag:'wip', text:'WIP Achievements.' },
    ]
  },
  {
    ver: 'V1.81',
    date: 'June 2026',
    items: [
      { tag:'new', text:'Workout Library — Bodyweight, Gym, and Cardio libraries are now unified under a single "Workout Library" entry on the home screen. A 3-button switcher (same style as the Progression Tree) lets you flip between them in-place. Total exercise count shown on the home card.' },
      { tag:'fix', text:'Progression Tree — Cardio and Gym exercise strips now show their correct family colours instead of the default grey.' },
      { tag:'wip', text:'WIP Achievements — a new Achievements section is being added to the home screen and will show milestone badges and progress rewards.' },
    ]
  },
  {
    ver: 'V1.80',
    date: 'June 2026',
    items: [
      { tag:'fix',  text:'Libraries — visual consistency pass across Bodyweight, Gym, Cardio, Nutrition, and Recovery. Redundant tab bar removed from Cardio hub. Empty Gym Progression Tree stub removed.' },
      { tag:'fix',  text:'Search — hub search bars on Gym, Cardio, Bodyweight, Nutrition, and Recovery now return real exercise and content results, matching the full library table experience.' },
      { tag:'new',  text:'Meal Prep is now a dedicated library under Nutrition — recipes are no longer stranded on the hub page.' },
      { tag:'fix',  text:'Custom Program is now a first-class card in the Programs grid, always pinned first and styled consistently with all other programs.' },
    ]
  },
  {
    ver: 'V1.79',
    date: 'June 2026',
    items: [
      { tag:'new',  text:'Auto Program moved to Programs — generate or build manually from one place via the new program picker.' },
      { tag:'wip',  text:'Progression Tree — WIP tracking continues inside the tree view.' },
      { tag:'fix',  text:'Minor bugs and display fixes.' },
    ]
  },
  {
    ver: 'V1.78',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: Auto Program Designer generates 4 personalised weekly training plans from your data, with 8 refresh modes to focus on different goals. The Metrics dashboard now displays all data in always-expanded sections including injury-aware program suggestions with safety overlays.' },
    ]
  },
  {
    ver: 'V1.77',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: Program exercises are now linked to the full exercise library. Tap any exercise in a program to see its description, coaching cues, muscles, joints, difficulty, and video — all pulled from the same data as the library. A "View in Library" button jumps directly to the full entry.' },
      { tag:'new', text:'NEW: Injury-aware programs — if you have joints flagged as injured in your profile, exercises in programs that load those joints are highlighted with a ⚠ CAUTION badge and show an injury banner in their detail panel.' },
    ]
  },
  {
    ver: 'V1.76',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: Injury-aware filtering added to the exercise library. Flag injured joints in your profile (shoulder, knee, lower back, etc.) and exercises that heavily stress those joints get a red border and ⚠ CAUTION badge. Tap the exercise to see exactly which joints are affected and why — descriptions are blurred with a "COULD HARM YOU FURTHER" overlay and a "Got it — show anyway" dismiss button.' },
      { tag:'new', text:'NEW: Scientific sources layer added to Info & FAQ. A new "Joint stress & injury risk data" card cites the six key biomechanics studies behind the exercise ratings (Suprak 2011, Escamilla AJSM, Fleisig/NSCA, McGill, Escamilla knee 2001, ACSM 11th ed.), and a new "Biomechanics & Injury Risk" links group connects to AJSM, BJSM, JSCR, JOSPT, and ACSM. The "Recovery & Physiology" section was also expanded with Cochrane Reviews and the BJSM POLICE paper.' },
    ]
  },
  {
    ver: 'V1.75',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: An info page was added — it tells you how to get started, what everything does, and where to find things.' },
      { tag:'new', text:'NEW: More personalisation options added — unlock them as you progress.' },
      { tag:'fix', text:'FIX: Progression tree branches and some wording were cleaned up for clarity.' },
    ]
  },
  {
    ver: 'V1.74',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: A program alarm / reminder system was added — tap "Alarm for ur program" in the Programs section to set countdown or clock-time reminders with in-app banners, a chime, and OS notifications.' },
      { tag:'new', text:'NEW: A better save system is now in place. Use EXPORT in the menu Data section to download a full backup of your data, and IMPORT to restore it. IndexedDB mirrors your data automatically so a single browser-data wipe no longer means losing everything — but export regularly just in case.' },
      { tag:'fix', text:'FIX: Theme adjustments — the Stretch theme background is now a deeper pink, and theme toggle buttons no longer show emoji symbols.' },
      { tag:'new', text:'NEW: Metrics are now available in the menu — tap "Metrics" to view your progress and performance data.' },
    ]
  },
  {
    ver: 'V1.73',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: The anatomical engine now includes a Nerves layer — tap NERVES to explore 13 major nerves (brachial plexus, median, ulnar, radial, musculocutaneous, axillary, suprascapular, femoral, sciatic, tibial, common fibular, inferior gluteal, and the spinal cord) with full clinical data, injury cards, and innervated-muscle chips.' },
      { tag:'new', text:'NEW: A Recovery section was added to the home page with five detailed sub-pages: Recovery Basics (the five pillars), Heal by Injury Type, What to Take (supplements), What to Do (methods), and Recovery Timelines. The hub now supports grid and list view.' },
      { tag:'fix', text:'FIX: Light mode background adjusted to a warmer sandy-beige and cards lifted to a soft cream for a more premium, easier-to-read feel.' },
    ]
  },
  {
    ver: 'V1.72',
    date: 'June 2026',
    items: [
      { tag:'fix', text:'FIX: Minor bugs were fixed in exercise risk ratings.' },
      { tag:'fix', text:'FIX: The progression tree and a few specific workouts were adjusted.' },
    ]
  },
  {
    ver: 'V1.71',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: A Hydration library was added to the Nutrition section, covering daily water needs, electrolytes, sweat rate, pre/during/post workout hydration, dehydration signs, and more.' },
      { tag:'new', text:'NEW: A Meal Timing library was added to the Nutrition section, with guides on pre-workout meals, post-workout protein windows, calorie distribution, intermittent fasting, and sleep nutrition.' },
      { tag:'new', text:'NEW: Nutrition libraries are now in a single unified list that you can sort and switch between grid and list view.' },
      { tag:'new', text:'NEW: A Preferences popup was added to the menu — tap it to change your theme, appearance, and anatomy engine performance mode all in one place.' },
    ]
  },
  {
    ver: 'V1.70',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: A new Sidequests theme was added with a premium nature-inspired palette, leaf-like ambient motion, and a shiny emerald finish.' },
      { tag:'new', text:'NEW: The theme menu now includes a Sidequests mode that unlocks after completing every sidequest branch, with admin-preview support.' },
    ]
  },
  {
    ver: 'V1.69',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: More customisation is in progress, and the progression tree can now be split into bodyweight, cardio, and gym with their own progression lists.' },
      { tag:'wip', text:'WIP: Another progression tree update is underway.' },
    ]
  },
  {
    ver: 'V1.68',
    date: 'June 2026',
    items: [
      { tag:'fix', text:'FIX: A few bug fixes and text tweaks.' },
      { tag:'new', text:'NEW: An information panel was added to the progression tree to help explain specific terms.' },
      { tag:'fix', text:'FIX: The menu section was updated to feel more intuitive.' },
    ]
  },
  {
    ver: 'V1.67',
    date: 'June 2026',
    items: [
      { tag:'fix', text:'FIX: Exercises are being renamed and recalculated by difficulty, so some names may change or exercises may be added or removed.' },
      { tag:'wip', text:'WIP: More exercise naming and difficulty adjustments are still being refined.' },
    ]
  },
  {
    ver: 'V1.66',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: Tendons were added to the anatomy engine, and they now show up when rare moves such as HoF are unlocked.' },
      { tag:'fix', text:'FIX: The point formula was adjusted.' },
    ]
  },
  {
    ver: 'V1.65',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: The caloric intake tracker is nearly done and can track across days, with macros and micros, plus a quick way to add the previous day.' },
      { tag:'new', text:'NEW: You can now set and edit your diet goals from your profile.' },
    ]
  },
  {
    ver: 'V1.64',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: The nutrition section was updated with a vitamins and minerals info page so you can quickly understand what they do, their amounts, and what you need.' },
      { tag:'wip', text:'WIP: The caloric intake tracker is still being worked on.' },
    ]
  },
  {
    ver: 'V1.63',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: Custom programs were added, so you can create your own programs, save them, continue anytime, and see leaderboard updates.' },
    ]
  },
  {
    ver: 'V1.62',
    date: 'June 2026',
    items: [
      { tag:'fix', text:'FIX: The anatomy engine was updated and minor bugs between muscles and bones were fixed.' },
      { tag:'fix', text:'FIX: Other visual bugs were also corrected.' },
    ]
  },
  {
    ver: 'V1.61',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: Nutrition gaps were filled, most foods were updated with actual data, and the detailed food view was added.' },
      { tag:'new', text:'NEW: A new Stretching theme was added.' },
    ]
  },
  {
    ver: 'V1.60',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: Now u can make your own programs.' },
    ]
  },
  {
    ver: 'V1.59',
    date: 'June 2026',
    items: [
      { tag:'new', text:'NEW: progress tree and pushup update, branches added.' },
      { tag:'fix', text:'FIX: minor bugs fixed.' },
    ]
  },
  {
    ver: 'V1.58',
    date: 'June 2026',
    items: [
      { tag:'wip', text:'WIN: nutrition is active, with egg testing currently in use.' },
      { tag:'new', text:'NEW: progress tree added for cardio/gym.' },
      { tag:'fix', text:'FIX: various bugs and glitches fixed.' },
      { tag:'new', text:'NEW: exercise tags in anatomy engine now target exercises for the selected muscle.' },
    ]
  },
  {
    ver: 'V1.57',
    date: 'June 2026',
    items: [
      { tag:'wip', text:'WIP: WEIGHTS library under work' },
      { tag:'fix', text:'FIX: ANATOMY ENGINE MINOR FIX' },
    ]
  },
  {
    ver: 'V1.56',
    date: 'June 2026',
    items: [
      { tag:'fix', text:'The anatomy engine is much much more readable now.' },
      { tag:'fix', text:'Some minor bugs fixed' },
       { tag:'new', text:'Added more features to anatomy engine!' },
    ]
  },
  {
    ver: 'V1.55',
    date: 'June 2026',
    items: [
      { tag:'fix', text:'Workouts now follow the new format: [Variant] [Base] | [Class Label] (Equipment).' },
      { tag:'fix', text:'Better save/storage process with stronger persistence logic and backup fallback.' },
      { tag:'wip', text:'Unlocking tech tree is still in progress.' },
      { tag:'fix', text:'Minor visual and animation bugs corrected.' },
    ]
  },
  {
    ver: 'V1.54',
    date: 'June 2026',
    items: [
      { tag:'fix', text:'Better readability across workout names, descriptions, and program labels.' },
      { tag:'fix', text:'Cleaned up exercise naming so long lever variants are easier to scan.' },
      { tag:'fix', text:'Feedback message updated with the current contact options.' },
    ]
  },
  {
    ver: 'V1.53',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Programs added for beginners.' },
      { tag:'wip', text:'Nutrition added. Still far from done. Just for testing.' },
      { tag:'fix', text:'Minor bugs, spelling, and grammar errors corrected.' },
      { tag:'wip', text:'Anatomical engine is entering testing and is almost completed.' },
    ]
  },
  {
    ver: 'V1.51',
    date: 'May 2026',
    items: [
      { tag:'new', text:'NEW: homepage category panel now supports drag-to-reorder and row/grid view toggling like the rest of the library pages.' },
      { tag:'fix', text:'FIX: homepage icons restored and repositioned so category rows stay aligned without pushing content to the side.' },
    ]
  },
  {
    ver: 'V1.50',
    date: 'May 2026',
    items: [
      { tag:'new', text:'NEW: homepage category panel now supports drag-to-reorder and row/grid view toggling like the rest of the library pages.' },
      { tag:'fix', text:'FIX: homepage icons restored and repositioned so category rows stay aligned without pushing content to the side.' },
    ]
  },
  {
    ver: 'V1.49',
    date: 'May 2026',
    items: [
      { tag:'fix', text:'FIX: minor bug on the drag/drop feature.' },
      { tag:'wip', text:'WIP: atonomical engine in progress.' },
    ]
  },
  {
    ver: 'V1.48',
    date: 'May 2026',
    items: [
      { tag:'fix', text:'Offline support improved — the app now loads and runs more reliably without an internet connection.' },
      { tag:'fix', text:'Text highlight disabled across the UI for a cleaner, more app-like feel.' },
      { tag:'new', text:'Drag to reorder — hold and drag libraries or programs to arrange them in any order you like.' },
      { tag:'wip', text:'Transitioning to a fully fledged app — will be shared via social media soon. Stay tuned.' },
    ]
  },
  {
    ver: 'V1.47',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Programs — structured training programs are here. Follow step-by-step weekly plans designed to take you from beginner to your first rep and beyond.' },
      { tag:'new', text:'List & card view — switch between a compact list view and a card grid to browse exercises the way you prefer.' },
      { tag:'fix', text:'Minor bug fixes and data inaccuracies corrected.' },
    ]
  },
  {
    ver: 'V1.46',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Favourite workouts added to the Progression Tree — mark favourites from the hold/right-click menu and filter the tree by favourites.' },
      { tag:'fix', text:'Point system adjusted for combo, Hall of Fame, and Pantheon workouts so scoring matches the latest progression rules.' },
      { tag:'fix', text:'Minor UI bug fixes and readability improvements, including cleaner unlock feedback and improved text contrast in the holds theme.' },
    ]
  },
  {
    ver: 'V1.45',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Live ranking points added — scores can be submitted, but player identities remain private and full rankings are disabled.' },
    ]
  },
  {
    ver: 'V1.44',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Loading screen — animated GRND splash with progress bar shown while the app initialises.' },
      { tag:'new', text:'Privacy Policy, Disclaimer, and Terms of Use — accessible from the new Legal section in the menu.' },
      { tag:'new', text:'About section added to menu with open-source GitHub link.' },
      { tag:'new', text:'SEO meta tags — description, Open Graph, Twitter card, canonical URL, and JSON-LD structured data.' },
      { tag:'new', text:'PWA groundwork — Web App Manifest link, apple-touch-icon, and theme-color meta for home screen installs.' },
      { tag:'wip', text:'Favicon and app icons (favicon.svg, apple-touch-icon.png, manifest.json) — need to be added to repo root.' },
    ]
  },
  {
    ver: 'V1.43',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Extensive front and backlever library with clear progression added.' },
      { tag:'new', text:'Progression Tree now defaults to Push/Pull/Dips/Isometrics/Core/Squats only.' },
      { tag:'fix', text:'Adjusted progression tree level mapping to match difficulty ranges correctly.' },
      { tag:'fix', text:'Fixed difficulty display for some workouts so 3.0–3.9 maps to level 3 and 4.0–4.9 maps to level 4.' },
    ]
  },
  {
    ver: 'V1.41',
    date: 'May 2026',
    items: [
      { tag:'fix', text:'Minor bugs/visual fixes.' },
      { tag:'fix', text:'Filtering system improved.' },
      { tag:'new', text:'Front lever and back lever library updates.' },
    ]
  },
  {
    ver: 'V1.40',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Dip Mode — burnt orange theme (deep charred surfaces, warm tricep energy) unlocks after completing every non-HoF dip.' },
    ]
  },
  {
    ver: 'V1.39',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Pull Mode — steel blue theme (deep navy surfaces, cold disciplined palette) unlocks after completing every non-HoF pull-up. Mirrors pushup mode architecture, modular CSS ready for themes/pull.css.' },
    ]
  },
  {
    ver: 'V1.38',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Pushup Mode — a third appearance theme (ember reds, warm dark surfaces) that unlocks only after completing every non-Hall-of-Fame pushup. Available in Settings. Progress counter shown live until unlocked.' },
    ]
  },
  {
    ver: 'V1.37',
    date: 'May 2026',
    items: [
      { tag:'fix', text:'Text adjustments across the UI — taglines, descriptions, and labels cleaned up for a production-ready feel.' },
      { tag:'fix', text:'Navigation button order confirmed and documented: Back on the left, Home in the centre, Menu on the right.' },
    ]
  },
  {
    ver: 'V1.36',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Added COMBOS to the library and progression tree, with new movement entries and a matching dark blue family accent.' },
      { tag:'wip', text:'WIP: more combos and adjustments to be added.' },
      { tag:'fix', text:'Fix: Minor bug fixes.' },
    ]
  },
  {
    ver: 'V1.35',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Warm-ups were moved into the progression tree as a dedicated family at the end, with a light green visual style.' },
      { tag:'fix', text:'Layout refinements in the progression tree and library panels — spacing and filter flow were smoothed out for a cleaner experience.' },
    ]
  },
  {
    ver: 'V1.34',
    date: 'May 2026',
    items: [
      { tag:'fix', text:'Active button removed from the home card and replaced with a better visual progress summary.' },
    ]
  },
  {
    ver: 'V1.33',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Visual changes — the progression tree now uses stronger text contrast for better readability across themes.' },
      { tag:'new', text:'Tier progress bars now show a filled percentage and exercise count for each difficulty level.' },
    ]
  },
  {
    ver: 'V1.32',
    date: 'May 2026',
    items: [
      { tag:'fix', text:'Bug/visual fixes on the progression tree — collapse state, header spacing, and progress bar styling were improved.' },
    ]
  },
  {
    ver: 'V1.31',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Progression Tree multi-filter — filter chips now toggle independently so you can combine families (e.g. PUSH + PULL at once). Tap ALL to reset.' },
      { tag:'new', text:'Hall of Fame filter in the Progression Tree — a ★ HALL OF FAME chip is now available in the tree filter bar, highlighting all elite feats across every family.' },
    ]
  },
  {
    ver: 'V1.30',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Elite tier reveal — unlocking your first Hall of Fame feat now triggers a mythic reveal window, while sealed elite variant families become visible immediately after the gate opens.' },
      { tag:'new', text:'Progression Tree expansion — Front Lever Dominion and Fingertip Handstand were added as new elite variant families, including fusion requirements for their apex feats.' },
      { tag:'fix', text:'Progression Tree search rules — locked elite variants no longer appear in searchable pools; only unlocked entries can surface through search.' },
    ]
  },
  {
    ver: 'V1.28',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Progression Tree rework — elite variants are now organized into distinct movement families instead of a loose advanced-variant bucket.' },
      { tag:'new', text:'Progression Tree prerequisites — some elite moves now require multiple mastered roots at once, so fusion variants only unlock when every required base feat is done.' },
      { tag:'fix', text:'Progression Tree cleanup — duplicate ids were removed, misplaced tier entries were cut, and Maltese Push-Up was moved to its correct elite section.' },
    ]
  },
  {
    ver: 'V1.27',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Glass break sound — unlocking an exercise now plays a synthesised glass shatter using the Web Audio API. No audio files, works offline. HoF unlocks trigger a heavier version with a low thud, sub-bass rumble sweep, and a full resonant chord that rings out longer.' },
      { tag:'fix', text:'Glass break animation position — the crack SVG and shards are now anchored to the card in document space instead of the viewport, so scrolling or panning the screen mid-animation no longer leaves the effect floating in the wrong place.' },
      { tag:'new', text:'Skill level colours — each tier now has its own colour: Beginner gray, Novice green, Intermediate orange, Advanced red, Elite gold. Selection dot, border, and badge all match per level.' },
    ]
  },
  {
    ver: 'V1.26',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Player Level — your profile now shows a level calculated from every exercise you\'ve unlocked. Points are based on joint stress, training effectiveness, technique, mobility, and difficulty. Every 100 pts = 1 level.' },
      { tag:'fix', text:'Skill Level now mirrors Player Level automatically and is no longer manually editable. Reached ranks and current progress are shown in the profile UI.' },
      { tag:'fix', text:'Fixed One-Arm Pull-Up, One-Arm Chin-Up, and Two-Finger Pull-Up Hall of Fame joint stress summaries.' },
      { tag:'new', text:'Level colours — Gray → Green → Orange → Red → Gold, with animated golden radiation at GOAT (lv.100+). Your self-assessed skill level is shown inside the level block.' },
      { tag:'new', text:'Photo crop tool — after selecting a profile photo you can now drag, pinch or scroll to reposition and zoom before saving. Exports a clean circular crop.' },
      { tag:'new', text:'Contact & Feedback — send suggestions or bug reports directly from the Menu via email or Instagram.' },
      { tag:'new', text:'Menu panel on desktop now slides in from the right as a full-height side panel.' },
    ]
  },
  {
    ver: 'V1.25',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Menu panel — new MENU button in the bottom nav (and header on desktop) opens a slide-up panel for settings and profile.' },
      { tag:'new', text:'User profile — set your name, age, location, skill level (Beginner → Elite), and profile photo. Data is saved locally and persists across sessions.' },
      { tag:'new', text:'Theme toggle moved into the Menu panel. The header is now cleaner.' },
      { tag:'fix', text:'Hip Abductors muscle tag now opens the anatomy modal — full Gluteus Medius / Minimus / TFL entry added.' },
    ]
  },
  {
    ver: 'V1.24',
    date: 'May 2026',
    items: [
      { tag:'fix', text:'Muscle tags now all clickable — added full anatomy entries for Biceps, Lats, Hamstrings, Glutes, Quadriceps, Calves, Adductors, Erector Spinae, Upper Trapezius, Rotator Cuff, Thoracic Spine, Forearms, and Brachialis.' },
      { tag:'wip', text:'Tendon stress tab — the joint breakdown modal now has a dedicated TENDONS tab showing all tendons under load, grouped by joint stress level.' },
    ]
  },
  {
    ver: 'V1.23',
    date: 'May 2026',
    items: [
      { tag:'new', text:'GRND logo now takes you home — tap the logo from any screen to return to the main page.' },
      { tag:'new', text:'Header now shows which section you are in — a subtle label in the top centre tells you where you are at a glance.' },
      { tag:'new', text:'Warm-up library expanded — 93 exercises now available across full-body activators, hip & lower body mobility, shoulder & upper body prep, and core & spine activation.' },
    ]
  },
  {
    ver: 'V1.22',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Warm-Ups library — dedicated warm-up section added to the Bodyweight category. Covers dynamic mobility, activation drills, and pre-training movement prep.' },
    ]
  },
  {
    ver: 'V1.21',
    date: 'May 2026',
    items: [
      { tag:'fix', text:'Glass shatter effect refined — shards now radiate from a random impact point with crack lines and sub-cracks for a more realistic break.' },
      { tag:'new', text:'Hall of Fame unlocks now trigger an enhanced gold screen flash and larger shards. Unlocked HoF items pulse gold permanently in the tree.' },
    ]
  },
  {
    ver: 'V1.20',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Glass breaking effect — unlocking exercises in the Progression Tree triggers a satisfying glass shatter animation.' },
      { tag:'new', text:'Hall of Fame unlock celebration — HoF exercises get an enhanced golden flash for extra impact.' },
    ]
  },
  {
    ver: 'V1.19',
    date: 'May 2026',
    items: [
      { tag:'fix', text:'Progression Tree — saved exercise status now persists correctly after filtering the tree view.' },
      { tag:'wip', text:'More libraries coming soon: Combinations and more warm-up content on the way.' },
    ]
  },
  {
    ver: 'V1.17',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Handstand library — dedicated handstand section added. Covers wall progressions, freestanding holds, and balance variations.' },
    ]
  },
  {
    ver: 'V1.16',
    date: 'May 2026',
    items: [
      { tag:'new', text:'Squats library — added with progressions, difficulty ratings, and muscle targeting.' },
      { tag:'new', text:'Kcal per rep — estimated calorie data now shown in exercise detail panels.' },
      { tag:'new', text:'Core library — dedicated core training section with exercises, progressions, and difficulty ratings.' },
    ]
  },
  {
    ver: 'V1.15',
    date: 'May 2025',
    items: [
      { tag:'new', text:'Progress tracking — hold any exercise in the Progression Tree to mark it Unlocked or In Progress. Status syncs to the library.' },
      { tag:'new', text:'Navigation bar — bottom bar shows ← BACK and ⌂ HOME buttons. Supports unlimited back history.' },
      { tag:'new', text:'Swipe-back gesture — swipe right from the left edge to go back.' },
      { tag:'new', text:'Dev log — this panel. Shows once per version, dismissable, and reopenable from the badge.' },
    ]
  },
];


/* ══ DEV LOG ══════════════════════════════════════════════════

   Badge shows once per version (keyed by grnd_devlog_seen).
   Dismissed per-session via the ✕ button.
   Panel opens on badge click; closes on overlay click or button.
════════════════════════════════════════════════════════════ */
(function() {
  const SEEN_KEY = 'grnd_devlog_seen';
  let seen = false;
  try { seen = localStorage.getItem(SEEN_KEY) === DEVLOG_VERSION; } catch(e) {}

  const badge = document.getElementById('devlogBadge');
  const verEl = document.getElementById('devlogBadgeVer');


  if(verEl) verEl.textContent = DEVLOG_VERSION;

  // Show badge if this version hasn't been seen/dismissed
  if(!seen && badge) {
    setTimeout(() => badge.classList.add('visible'), 800);
  }

  // Build changelog HTML
  function buildContent() {
    return DEVLOG_ENTRIES.map(entry => `
      <div class="devlog-entry">
        <div class="devlog-entry-ver">${entry.ver}</div>
        <div class="devlog-entry-date">${entry.date}</div>
        ${entry.items.map(item => `
          <div class="devlog-item">
            <span class="devlog-tag ${item.tag}">${item.tag.toUpperCase()}</span>
            <span class="devlog-item-text">${item.text}</span>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  window.openDevlog = function() {
    const overlay = document.getElementById('devlogOverlay');
    const content = document.getElementById('devlogContent');
    if(content) content.innerHTML = buildContent();
    if(overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeDevlogPanel = function() {
    const overlay = document.getElementById('devlogOverlay');
    if(overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  window.closeDevlog = function(e) {
    if(e.target === document.getElementById('devlogOverlay')) closeDevlogPanel();
  };

  window.dismissDevlog = function() {
    if(badge) badge.classList.remove('visible');
    try { localStorage.setItem(SEEN_KEY, DEVLOG_VERSION); } catch(e) {}
  };

  window.DEVLOG_VERSION = DEVLOG_VERSION;
})();
