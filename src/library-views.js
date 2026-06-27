/* ──────────────────────────────────────────────────────────────────────────
   src/library-views.js — generates the 26 standard "exercise library" views
   ──────────────────────────────────────────────────────────────────────────
   WHY: these views were ~26 near-identical 33-line HTML blocks in index.html
   (breadcrumb → hero → stats → search → filter chips → table → empty-state).
   They are now built from the GRND_LIBRARIES config below, removing ~900 lines
   of duplicated markup. Behaviour (search/filter/render) is wired by initLib()
   in src/pantheon-awakening.js off the element IDs produced here — unchanged.

   ADD / EDIT A LIBRARY:  add or change one row in GRND_LIBRARIES, done.
     v       = view id without the 'view-' prefix  (element id = 'view-'+v)
     p       = element-id prefix, derived as v without '-library'
               → builds  p-search · p-filterRow · p-sticky · p-scroll · p-body ·
                 p-empty · p-total · p-unlocked · p-locked  (or p-shown)
               also register the libKey in LIB_* in src/app-core.js so the
               table actually renders (this file only builds the shell).
     parent  = [slug,label] middle breadcrumb crumb (home is always first)
     leaf    = final breadcrumb label
     title   = <h2> text            (defaults to leaf)
     tagMain = first tagline        (defaults to DEFAULT_TAG)
     tagSub  = second tagline       (null = omit the sub line)
     ph      = search placeholder   (defaults to DEFAULT_PH)
     empty   = empty-state text     (defaults to DEFAULT_EMPTY)
     statCols= dynamic stat columns (defaults to total/unlocked/locked)
     filters = [[dataFilter,label], …]; first entry is the active "ALL" chip

   NOT templatized (left static in index.html): weighted-library (has an extra
   jb-tab-bar), foods/vitamins (nutrition), hof/pantheon (special card views).
   This file is loaded as a plain <script src> right after </main>, so the
   shells exist before initAllLibs() runs on DOMContentLoaded — order matters.
   ────────────────────────────────────────────────────────────────────────── */
(function(){
  'use strict';

  var DEFAULT_TAG   = 'Tap any exercise to expand it. Tap a muscle name to learn more about it.';
  var DEFAULT_PH    = 'Search exercises or muscles…';
  var DEFAULT_EMPTY = 'No exercises match your search.';
  var DIFF_SUB      = 'Difficulty is rated 1–10 based on technique, strength needed, mobility and joint & tendon stress.';
  var SCROLL_HINT   = '← scroll table horizontally →';

  /* One row per standard library view (see header for field reference). */
  var LIBS = [
    /* ── bodyweight ── */
    { v:'warmup-library', parent:['bodyweight','BODYWEIGHT'], leaf:'WARM UPS',
      tagSub:'Dynamic mobility and activation drills to prepare your body for training.',
      filters:[['all','ALL'],['hips','HIPS'],['shoulders','SHOULDERS'],['thoracic','THORACIC'],['full-body','FULL BODY'],['cardio','CARDIO']] },
    { v:'stretching-library', parent:['bodyweight','BODYWEIGHT'], leaf:'STRETCHING',
      tagMain:'Tap any stretch to expand it. Tap a muscle name to learn more about it.',
      tagSub:'Post-workout and recovery stretches for every major muscle group.',
      ph:'Search stretches or muscles…', empty:'No stretches match your search.',
      filters:[['all','ALL'],['neck','NECK'],['shoulders','SHOULDERS'],['chest','CHEST'],['back','BACK'],['hips','HIPS'],['hamstrings','HAMSTRINGS'],['quads','QUADS'],['calves','CALVES']] },
    { v:'pushup-library', parent:['bodyweight','BODYWEIGHT'], leaf:'PUSH-UP LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['chest','CHEST'],['shoulders','SHOULDERS'],['triceps','TRICEPS'],['core','CORE'],['back','BACK'],['hof','★ HALL OF FAME']] },
    { v:'planche-library', parent:['bodyweight','BODYWEIGHT'], leaf:'PLANCHE LIBRARY', title:'PLANCHE LIBRARY',
      tagMain:'Straight-arm horizontal pressing — the planche and maltese push-up progressions. Tap any exercise to expand it.',
      tagSub:'From the feet-down pseudo planche through tuck, straddle and the full planche to the maltese. Hall of Fame begins at the full planche.',
      ph:'Search planche or maltese variants…', empty:'No planche variants match your search.',
      filters:[['all','ALL'],['shoulders','SHOULDERS'],['triceps','TRICEPS'],['chest','CHEST'],['core','CORE'],['hof','★ HALL OF FAME']] },
    { v:'pullup-library', parent:['bodyweight','BODYWEIGHT'], leaf:'PULL-UP LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['back','BACK'],['biceps','BICEPS'],['shoulders','SHOULDERS'],['core','CORE'],['hof','★ HALL OF FAME']] },
    { v:'chinup-library', parent:['bodyweight','BODYWEIGHT'], leaf:'CHIN-UP LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['back','BACK'],['biceps','BICEPS'],['shoulders','SHOULDERS'],['core','CORE'],['chin-up','CHIN-UP'],['hof','★ HALL OF FAME']] },
    { v:'squat-library', parent:['bodyweight','BODYWEIGHT'], leaf:'SQUAT LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['quads','QUADS'],['glutes','GLUTES'],['hamstrings','HAMSTRINGS'],['core','CORE']] },
    { v:'core-library', parent:['bodyweight','BODYWEIGHT'], leaf:'CORE LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['abs','ABS'],['obliques','OBLIQUES'],['lower back','LOWER BACK']] },
    { v:'dip-library', parent:['bodyweight','BODYWEIGHT'], leaf:'DIP LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['triceps','TRICEPS'],['chest','CHEST'],['shoulders','SHOULDERS'],['core','CORE'],['back','BACK']] },
    { v:'handstand-library', parent:['bodyweight','BODYWEIGHT'], leaf:'HANDSTAND LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['shoulders','SHOULDERS'],['triceps','TRICEPS'],['core','CORE'],['wrists','WRISTS']] },
    { v:'isometric-library', parent:['bodyweight','BODYWEIGHT'], leaf:'HOLDS LIBRARY', tagSub:DIFF_SUB,
      filters:[['all','ALL'],['shoulders','SHOULDERS'],['core','CORE'],['back','BACK'],['wrists','WRISTS'],['chest','CHEST'],['hof','★ HALL OF FAME']] },
    { v:'frontlever-library', parent:['bodyweight','BODYWEIGHT'], leaf:'FRONT LEVER LIBRARY',
      tagMain:'A dedicated view for front lever holds, pull-up progressions, and elite lever work.',
      tagSub:'This library reuses existing front lever data without deleting or moving it from the original sources.',
      ph:'Search front lever exercises or muscles…',
      filters:[['all','ALL'],['back','BACK'],['core','CORE'],['shoulders','SHOULDERS'],['hof','★ HALL OF FAME']] },
    { v:'backlever-library', parent:['bodyweight','BODYWEIGHT'], leaf:'BACK LEVER LIBRARY',
      tagMain:'A dedicated view for back lever holds, shoulder extension progressions, and inverted strength work.',
      tagSub:'This library keeps back lever progressions together while reusing existing isometric data.',
      ph:'Search back lever exercises or muscles…',
      filters:[['all','ALL'],['back','BACK'],['core','CORE'],['shoulders','SHOULDERS'],['hof','★ HALL OF FAME']] },
    { v:'combo-library', parent:['bodyweight','BODYWEIGHT'], leaf:'COMBOS',
      tagMain:'High-skill combinations built around muscle-ups, transitions, and dynamic sequence work.',
      tagSub:'Requires a strong base in both pushing and pulling — approach these only after mastering the foundational libraries.',
      filters:[['all','ALL'],['pull','PULL'],['push','PUSH'],['core','CORE'],['bar','BAR'],['rings','RINGS']] },
    { v:'all-library', parent:['bodyweight','BODYWEIGHT'], leaf:'SEARCH', title:'ALL EXERCISES',
      tagMain:'Searching all libraries. Tap any exercise to expand it.', tagSub:null,
      statCols:['total','shown'],
      filters:[['all','ALL'],['chest','CHEST'],['shoulders','SHOULDERS'],['triceps','TRICEPS'],['back','BACK'],['core','CORE'],['quads','QUADS'],['glutes','GLUTES'],['hof','★ HALL OF FAME']] },
    /* ── gym ── */
    { v:'gym-chest-library', parent:['gym','GYM'], leaf:'CHEST',
      tagSub:'Pressing and fly movements targeting the pectoralis major and supporting muscles.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['cable','CABLE'],['compound','COMPOUND'],['isolation','ISOLATION']] },
    { v:'gym-back-library', parent:['gym','GYM'], leaf:'BACK',
      tagSub:'Pulling and hinge movements targeting the lats, traps, rhomboids, and erectors.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['cable','CABLE'],['row','ROW'],['hinge','HINGE']] },
    { v:'gym-shoulders-library', parent:['gym','GYM'], leaf:'SHOULDERS',
      tagSub:'Overhead pressing and lateral movements for all three deltoid heads and the traps.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['compound','COMPOUND'],['isolation','ISOLATION'],['lateral','LATERAL']] },
    { v:'gym-legs-library', parent:['gym','GYM'], leaf:'LEGS',
      tagSub:'Squat, hinge, and isolation movements for quads, glutes, hamstrings, and calves.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['machines','MACHINES'],['compound','COMPOUND'],['glutes','GLUTES'],['hamstrings','HAMSTRINGS']] },
    { v:'gym-arms-library', parent:['gym','GYM'], leaf:'ARMS',
      tagSub:'Curl and extension movements isolating the biceps, triceps, and forearms.',
      filters:[['all','ALL'],['barbell','BARBELL'],['dumbbell','DUMBBELL'],['cable','CABLE'],['biceps','BICEPS'],['triceps','TRICEPS']] },
    { v:'gym-core-library', parent:['gym','GYM'], leaf:'CORE',
      tagSub:'Weighted and anti-movement core exercises for the abs, obliques, and lower back.',
      filters:[['all','ALL'],['cable','CABLE'],['weighted','WEIGHTED'],['bodyweight','BODYWEIGHT'],['abs','ABS'],['obliques','OBLIQUES']] },
    /* ── cardio ── */
    { v:'cardio-running-library', parent:['cardio','CARDIO'], leaf:'RUNNING',
      tagSub:'Tempo, interval, and endurance runs from easy aerobic base to VO2max efforts.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['intermediate','INTERMEDIATE'],['advanced','ADVANCED'],['endurance','ENDURANCE'],['speed','SPEED']] },
    { v:'cardio-cycling-library', parent:['cardio','CARDIO'], leaf:'CYCLING',
      tagSub:'Steady-state and interval cycling — full cardiovascular development with zero impact.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['intermediate','INTERMEDIATE'],['advanced','ADVANCED'],['low-impact','LOW IMPACT'],['speed','SPEED']] },
    { v:'cardio-hiit-library', parent:['cardio','CARDIO'], leaf:'HIIT',
      tagSub:'High-intensity intervals — maximum cardiovascular and metabolic stimulus in minimum time.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['intermediate','INTERMEDIATE'],['no-equipment','NO EQUIPMENT'],['plyometric','PLYOMETRIC'],['kettlebell','KETTLEBELL']] },
    { v:'cardio-rowing-library', parent:['cardio','CARDIO'], leaf:'ROWING',
      tagSub:'Full-body aerobic and anaerobic training — 86% muscle engagement with zero impact.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['intermediate','INTERMEDIATE'],['advanced','ADVANCED'],['full-body','FULL BODY'],['low-impact','LOW IMPACT']] },
    { v:'cardio-recovery-library', parent:['cardio','CARDIO'], leaf:'RECOVERY',
      tagSub:'Low-impact movement and active rest — accelerate recovery without adding training load.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['low-impact','LOW IMPACT'],['daily','DAILY'],['active-rest','ACTIVE REST']] },
    { v:'cardio-mobility-library', parent:['cardio','CARDIO'], leaf:'MOBILITY',
      tagSub:'Joint prep and range of motion — the foundation that makes every other movement better.',
      filters:[['all','ALL'],['beginner','BEGINNER'],['hip','HIP'],['daily','DAILY'],['warm-up','WARM-UP'],['desk-worker','DESK WORKER']] }
  ];

  /* expose for inspection / future tooling */
  window.GRND_LIBRARIES = LIBS;

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function statsHTML(p, cols){
    var html = (cols || ['total','unlocked','locked']).map(function(c){
      return '<div class="lib-stat"><strong id="'+p+'-'+c+'">—</strong>'+c+'</div>';
    }).join('');
    return html + '<div class="lib-stat"><strong>1–10</strong>difficulty</div>';
  }

  function viewHTML(L){
    var p = L.v.replace('-library','');
    var title   = L.title   || L.leaf;
    var tagMain = L.tagMain || DEFAULT_TAG;
    var ph      = L.ph      || DEFAULT_PH;
    var empty   = L.empty   || DEFAULT_EMPTY;
    var subLine = (L.tagSub == null) ? '' : '<div class="lib-tagline sub">'+esc(L.tagSub)+'</div>';
    var chips = L.filters.map(function(f, i){
      return '<button class="filter-chip'+(i===0?' on':'')+'" data-filter="'+f[0]+'">'+esc(f[1])+'</button>';
    }).join('');
    return ''+
      '<div class="view" id="view-'+L.v+'">'+
        '<div class="breadcrumb">'+
          '<span class="crumb" onclick="goTo(\'home\')">HOME</span><span class="sep">/</span>'+
          '<span class="crumb" onclick="goTo(\''+L.parent[0]+'\')">'+esc(L.parent[1])+'</span><span class="sep">/</span>'+
          '<span>'+esc(L.leaf)+'</span>'+
        '</div>'+
        '<div class="lib-hero">'+
          '<h2>'+esc(title)+'</h2>'+
          '<div class="lib-tagline">'+esc(tagMain)+'</div>'+
          subLine+
          '<div class="lib-stats">'+statsHTML(p, L.statCols)+'</div>'+
        '</div>'+
        '<div class="search-bar"><input class="search-input" id="'+p+'-search" type="text" placeholder="'+esc(ph)+'" /></div>'+
        '<div class="filter-row-wrap"><div class="filter-row" id="'+p+'-filterRow">'+chips+'</div></div>'+
        '<div class="sticky-header" id="'+p+'-sticky"></div>'+
        '<div class="scroll-hint">'+SCROLL_HINT+'</div>'+
        '<div class="table-wrap" id="'+p+'-scroll"><table><tbody id="'+p+'-body"></tbody></table></div>'+
        '<div class="empty-state" id="'+p+'-empty" style="display:none"><span class="empty-icon">🔍</span>'+esc(empty)+'</div>'+
      '</div>';
  }

  function render(){
    var main = document.querySelector('main');
    if(!main) return;
    var tmp = document.createElement('div');
    tmp.innerHTML = LIBS.map(viewHTML).join('');
    while(tmp.firstElementChild) main.appendChild(tmp.firstElementChild);
  }

  render();
})();
