/* ┌─ @file: js/ranking.js ─────────────────────────────────────────────
   "YOUR PROGRESS" / LEADERBOARD REPLACEMENT
   ─────────────────────────────────────────────────────────────────
   States (all inside #view-leaderboard, only one visible at a time):
     #ldb-manifesto    → default landing. Locked or unlocked sub-state.
     #ldb-fakeboard    → flickering board + reveal text (SEE RANK ANYWAY / FULL VIEW).
     #ldb-postreveal   → motivational text. Shows "Proceed anyway" first,
                         switches to "REVISIT" after ambient closes.
     #ldb-ambient      → image + audio. Only reachable via "Proceed anyway".

   Unlock condition: level >= 100 OR hofCount > 0.

   Flow:
     SEE RANK ANYWAY / FULL VIEW
       → ldb-fakeboard flicker → CONTINUE
       → ldb-postreveal ("Proceed anyway")
       → ldb-ambient (image + audio)
       → ldb-postreveal ("REVISIT")
       → replay from ldb-fakeboard

   localStorage keys:
     grnd_leaderboard_revealed     '1' once first reveal played
     grnd_ldb_board                JSON {id,pts}[] fake board rows
     grnd_ldb_milestone_unlocked   last unlocked count board grew on
     grnd_ldb_milestone_points     last pts total board grew on
     grnd_ldb_fake_data            {rank,total,pts} stable fake identity
     grnd_ldb_version              schema version ('2')
   └─ */
(function(){

  try{
    localStorage.removeItem('grnd_uid');
    localStorage.removeItem('grnd_last_tier');
  }catch(e){}

  /* ────────────────────────────────────────────────────────────────
     Stats accessor
     ──────────────────────────────────────────────────────────────── */
  function _grndGetStats(){
    var level=1, points=0, unlocked=0, hofCount=0, gotSummary=false;
    try{
      if (typeof window.getPlayerLevelSummary === 'function'){
        var s = window.getPlayerLevelSummary() || {};
        var L = s.level, P = s.totalPts, U = s.unlockedCount;
        if (L != null && P != null){
          level = Number(L) || 1;
          points = Number(P) || 0;
          unlocked = Number(U) || 0;
          gotSummary = true;
        }
      }
    }catch(e){}
    if (!gotSummary){
      try{
        var lvlEl = document.getElementById('prof-level-num');
        var ptsEl = document.getElementById('prof-level-pts-cur');
        var cntEl = document.getElementById('prof-level-count');
        if (lvlEl) level = parseInt(lvlEl.textContent,10) || 1;
        if (ptsEl) points = parseInt((ptsEl.textContent||'').replace(/[^\d]/g,''),10) || 0;
        if (cntEl) unlocked = parseInt(cntEl.textContent,10) || 0;
      }catch(e){}
    }
    try{
      if (typeof window.getUnlockedHofKeys === 'function' && typeof window.getUnlockedPantheonExercises === 'function'){
        hofCount = (window.getUnlockedHofKeys().length || 0) + (window.getUnlockedPantheonExercises().length || 0);
      } else {
        var hofCntEl = document.getElementById('prof-level-hof-count');
        var hofPanel = document.getElementById('prof-level-hof-panel');
        if (hofCntEl) hofCount = parseInt(hofCntEl.textContent,10) || 0;
        else if (hofPanel) hofCount = (hofPanel.style.display !== 'none') ? 1 : 0;
      }
    }catch(e){}
    return { level: level||1, points: points||0, unlocked: unlocked||0, hofCount: hofCount||0 };
  }

  function _grndIsUnlocked(stats){
    stats = stats || _grndGetStats();
    return stats.level >= 100 || stats.hofCount > 0;
  }

  /* ────────────────────────────────────────────────────────────────
     Stable fake identity
     Generated once, persisted — every visit sees the same rank/pts/total.
       rank  : 7500–8999  (user's position in the global fake board)
       total : rank + 2k–7k  (total "players")
       pts   : 3200–6799  (fake 4-digit score shown on the board)
     ──────────────────────────────────────────────────────────────── */
  function _grndStableFakeData(){
    var key = 'grnd_ldb_fake_data';
    var stored = null;
    try{ stored = JSON.parse(localStorage.getItem(key) || 'null'); }catch(e){}
    if (stored && stored.rank && stored.total && stored.pts) return stored;
    var rank  = 7500 + Math.floor(Math.random() * 1500);          // 7500–8999
    var total = rank  + 2000 + Math.floor(Math.random() * 5000);  // rank + 2k–7k more
    var pts   = 3200 + Math.floor(Math.random() * 3600);          // 3200–6799
    var result = { rank: rank, total: total, pts: pts };
    try{ localStorage.setItem(key, JSON.stringify(result)); }catch(e){}
    return result;
  }

  /* ────────────────────────────────────────────────────────────────
     Anonymized 4-digit fake player IDs  (e.g. #4521)
     ──────────────────────────────────────────────────────────────── */
  function _grndFakeId(){
    return '#' + String(Math.floor(1000 + Math.random()*9000));
  }

  /* ────────────────────────────────────────────────────────────────
     Menu visibility — show/hide REFRESH + FULL VIEW based on unlock
     ──────────────────────────────────────────────────────────────── */
  function _grndUpdateMenuVisibility(){
    var unlocked = _grndIsUnlocked();
    var btnRow   = document.getElementById('ldb-menu-btn-row');
    var lockedMsg = document.getElementById('ldb-menu-locked-msg');
    if (btnRow)    btnRow.style.display    = unlocked ? '' : 'none';
    if (lockedMsg) lockedMsg.style.display = unlocked ? 'none' : '';
  }
  window.grndUpdateMenuVisibility = _grndUpdateMenuVisibility;

  /* ────────────────────────────────────────────────────────────────
     Menu score + rank neighbor table
     Shows rank positions (#rank-1 / YOU / #rank+1) with fake 4-digit pts.
     ──────────────────────────────────────────────────────────────── */
  function grndMenuRefresh(){
    var stats = _grndGetStats();
    _grndUpdateMenuVisibility();

    var scoreEl = document.getElementById('ldb-menu-score');
    if (scoreEl) scoreEl.textContent = stats.points.toLocaleString();

    var wrap = document.getElementById('ldb-menu-table-wrap');
    if (!wrap) return;

    if (!_grndIsUnlocked(stats)){ wrap.innerHTML = ''; return; }

    var fd = _grndStableFakeData();

    // Rank: tight neighbors (±1 spot)
    var myRank     = fd.rank;
    var aheadRank  = myRank - 1;
    var behindRank = myRank + 1;

    // Pts: stable fake 4-digit base ± small spread on each refresh
    var spread    = Math.max(6, Math.round(fd.pts * 0.008));
    var myPts     = fd.pts;
    var aheadPts  = myPts + Math.floor(Math.random() * spread) + Math.ceil(spread * 0.6);
    var behindPts = Math.max(1000, myPts - Math.floor(Math.random() * spread) - Math.ceil(spread * 0.6));

    wrap.innerHTML =
      '<div class="ldb-neighbors">' +
        '<div class="ldb-board-row"><span class="ldb-board-id">#' + aheadRank  + '</span><span class="ldb-board-pts">' + aheadPts.toLocaleString()  + ' pts</span></div>' +
        '<div class="ldb-board-row ldb-board-row-you"><span class="ldb-board-id">YOU</span><span class="ldb-board-pts">' + myPts.toLocaleString() + ' pts</span></div>' +
        '<div class="ldb-board-row"><span class="ldb-board-id">#' + behindRank + '</span><span class="ldb-board-pts">' + behindPts.toLocaleString() + ' pts</span></div>' +
      '</div>';
  }
  window.grndMenuRefresh = grndMenuRefresh;

  /* FULL VIEW → fakeboard sequence. Image+audio only via "Proceed anyway". */
  function grndOpenFullView(){
    if (typeof window.goTo === 'function') window.goTo('leaderboard');
    if (typeof window.closeMenuPanel === 'function') window.closeMenuPanel();
    // Wait one tick for grndOnEnterLeaderboard (fired by view change) to reset to manifesto,
    // then immediately launch the fakeboard sequence.
    setTimeout(function(){
      var stats = _grndGetStats();
      _grndRunFakeboardSequence(stats, false);
    }, 60);
  }
  window.grndOpenFullView = grndOpenFullView;

  /* ────────────────────────────────────────────────────────────────
     Full fake board — grows with milestones, pts in same 4-digit range
     ──────────────────────────────────────────────────────────────── */
  function _grndLoadBoard(){
    try{ return JSON.parse(localStorage.getItem('grnd_ldb_board') || 'null') || []; }catch(e){ return []; }
  }
  function _grndSaveBoard(board){
    try{ localStorage.setItem('grnd_ldb_board', JSON.stringify(board)); }catch(e){}
  }

  function _grndSeedBoard(){
    var fd = _grndStableFakeData();
    var board = [];
    for (var i=0; i<9; i++){
      var delta = Math.round((Math.random()-0.5) * 260);  // ±130 pts
      board.push({ id: _grndFakeId(), pts: Math.max(1000, fd.pts + delta) });
    }
    _grndSaveBoard(board);
    return board;
  }

  function _grndCheckMilestones(){
    var stats = _grndGetStats();
    // v2 migration: wipe any board seeded with real pts (old scheme)
    var ver = null;
    try{ ver = localStorage.getItem('grnd_ldb_version'); }catch(e){}
    if (ver !== '2'){
      try{ localStorage.removeItem('grnd_ldb_board'); localStorage.setItem('grnd_ldb_version', '2'); }catch(e){}
    }

    var lastUnlocked = parseInt(localStorage.getItem('grnd_ldb_milestone_unlocked') || '0', 10) || 0;
    var lastPoints   = parseInt(localStorage.getItem('grnd_ldb_milestone_points')   || '0', 10) || 0;
    var board = _grndLoadBoard();
    var grew  = false;
    var fd    = _grndStableFakeData();

    if (!board.length){
      board = _grndSeedBoard();
      lastUnlocked = stats.unlocked;
      lastPoints   = stats.points;
      grew = true;
    }
    if (stats.unlocked - lastUnlocked >= 2){
      board.push({ id: _grndFakeId(), pts: Math.max(1000, fd.pts + Math.round((Math.random()-0.3)*180) + 30) });
      lastUnlocked = stats.unlocked;
      grew = true;
    }
    if (stats.points - lastPoints >= 250){
      board.push({ id: _grndFakeId(), pts: Math.max(1000, fd.pts + Math.round((Math.random()-0.3)*180) + 30) });
      lastPoints = stats.points;
      grew = true;
    }
    if (grew){
      _grndSaveBoard(board);
      try{
        localStorage.setItem('grnd_ldb_milestone_unlocked', String(lastUnlocked));
        localStorage.setItem('grnd_ldb_milestone_points',   String(lastPoints));
      }catch(e){}
    }
    return board;
  }

  /* Renders board. Rank column uses global positions centered on fd.rank
     (e.g., if user is #8247, rows around them show #8244, #8245 … #8252). */
  function _grndRenderBoard(board){
    var list = document.getElementById('ldb-board-list');
    if (!list) return;

    var fd   = _grndStableFakeData();
    var rows = board.map(function(e){ return { id: e.id, pts: e.pts, you: false }; });
    rows.push({ id: 'YOU', pts: fd.pts, you: true });
    rows.sort(function(a,b){ return b.pts - a.pts; });

    var youIdx = 0;
    for (var i=0; i<rows.length; i++){ if (rows[i].you){ youIdx=i; break; } }

    list.innerHTML = '';
    rows.forEach(function(r, i){
      var globalRank = Math.max(1, fd.rank - youIdx + i);
      var row = document.createElement('div');
      row.className = 'ldb-board-row' + (r.you ? ' ldb-board-row-you' : '');
      row.style.animationDelay = (i*0.05) + 's';
      row.dataset.basePts  = r.pts;
      row.dataset.baseRank = globalRank;
      row.innerHTML =
        '<span class="ldb-board-rank">#' + globalRank + '</span>' +
        '<span class="ldb-board-id">' + r.id + '</span>' +
        '<span class="ldb-board-pts">' + r.pts.toLocaleString() + ' pts</span>';
      list.appendChild(row);
    });
  }

  /* Flickers pts and rank on non-YOU rows.
     Rank stays within ±30 of its base global position. */
  function _grndStartBoardFlicker(intervalMs){
    var rows = document.querySelectorAll('#ldb-board-list .ldb-board-row:not(.ldb-board-row-you)');
    return setInterval(function(){
      rows.forEach(function(row){
        var basePts  = parseInt(row.dataset.basePts,  10) || 1000;
        var baseRank = parseInt(row.dataset.baseRank, 10) || 1;
        var newPts   = Math.max(1000, basePts  + Math.round((Math.random()-0.5) * 80));
        var newRank  = Math.max(1,    baseRank + Math.round((Math.random()-0.5) * 60));
        var ptsEl  = row.querySelector('.ldb-board-pts');
        var rankEl = row.querySelector('.ldb-board-rank');
        if (ptsEl)  ptsEl.textContent  = newPts.toLocaleString() + ' pts';
        if (rankEl) rankEl.textContent = '#' + newRank;
      });
    }, intervalMs);
  }

  /* Reveal text: shows REAL pts ("Real — you earned every one") and the large
     fake rank/total from fd (e.g., "Ranked 8,247/12,500"). */
  function _grndPopulateReveal(stats){
    var p1 = document.getElementById('ldb-reveal-p1');
    if (!p1) return;
    var fd = _grndStableFakeData();
    p1.innerHTML =
      'You: ' + stats.points.toLocaleString() + ' pts. Real — you earned every one of those. ' +
      'Ranked <span id="ldb-reveal-rank" data-rank="' + fd.rank + '" data-total="' + fd.total + '">' +
      fd.rank.toLocaleString() + '</span>/' +
      '<span id="ldb-reveal-total">' + fd.total.toLocaleString() + '</span>' +
      ', except you were never actually being ranked: the rest of that board ' +
      'got built around your number the second you tapped SEE RANK ANYWAY.';
  }

  /* Rank and total flicker ±small variance around their base values. */
  function _grndStartRankFlicker(intervalMs){
    var rankEl  = document.getElementById('ldb-reveal-rank');
    var totalEl = document.getElementById('ldb-reveal-total');
    if (!rankEl) return null;
    var baseRank  = parseInt(rankEl.dataset.rank,  10) || 1;
    var baseTotal = parseInt(rankEl.dataset.total, 10) || baseRank + 2000;
    return setInterval(function(){
      var r = Math.max(1,   baseRank  + Math.round((Math.random()-0.5) * 100));
      var t = Math.max(r+1, baseTotal + Math.round((Math.random()-0.5) * 180));
      if (rankEl)  rankEl.textContent  = r.toLocaleString();
      if (totalEl) totalEl.textContent = t.toLocaleString();
    }, intervalMs);
  }

  /* ────────────────────────────────────────────────────────────────
     State machine
     ──────────────────────────────────────────────────────────────── */
  function _grndShowOnly(id){
    ['ldb-manifesto','ldb-fakeboard','ldb-postreveal','ldb-ambient'].forEach(function(s){
      var el = document.getElementById(s);
      if (el) el.style.display = (s === id) ? '' : 'none';
    });
  }

  var _grndActiveFlickerTimer     = null;
  var _grndActiveRankFlickerTimer = null;

  function grndOnEnterLeaderboard(){
    if (_grndActiveFlickerTimer){     clearInterval(_grndActiveFlickerTimer);     _grndActiveFlickerTimer     = null; }
    if (_grndActiveRankFlickerTimer){ clearInterval(_grndActiveRankFlickerTimer); _grndActiveRankFlickerTimer = null; }
    _grndShowOnly('ldb-manifesto');
    var reveal = document.getElementById('ldb-reveal');
    if (reveal) reveal.style.display = 'none';
    var boardList = document.getElementById('ldb-board-list');
    if (boardList) boardList.innerHTML = '';

    var unlocked   = _grndIsUnlocked();
    var lockedEl   = document.getElementById('ldb-manifesto-locked');
    var unlockedEl = document.getElementById('ldb-manifesto-unlocked');
    if (lockedEl)   lockedEl.style.display   = unlocked ? 'none' : '';
    if (unlockedEl) unlockedEl.style.display = unlocked ? '' : 'none';

    _grndCheckMilestones();
  }
  window.grndOnEnterLeaderboard = grndOnEnterLeaderboard;

  function grndSeeRankAnyway(){
    var stats = _grndGetStats();
    if (!_grndIsUnlocked(stats)) return;
    var revealed = false;
    try{ revealed = localStorage.getItem('grnd_leaderboard_revealed') === '1'; }catch(e){}
    _grndRunFakeboardSequence(stats, !revealed);
  }
  window.grndSeeRankAnyway = grndSeeRankAnyway;

  /* Fakeboard flicker → pulse YOU row → reveal text + CONTINUE button */
  function _grndRunFakeboardSequence(stats, setRevealedFlag){
    var board = _grndCheckMilestones();
    _grndShowOnly('ldb-fakeboard');

    var reveal = document.getElementById('ldb-reveal');
    if (reveal) reveal.style.display = 'none';
    var youRow = document.querySelector('.ldb-board-row-you');
    if (youRow) youRow.classList.remove('ldb-board-row-you-pulse');

    _grndRenderBoard(board);
    var rowCount = document.querySelectorAll('#ldb-board-list .ldb-board-row').length;

    var settleDelay     = Math.max(400, (rowCount-1)*50 + 400);
    var flickerInterval = 300;
    var flickerDuration = 1800;
    var pulseDuration   = 900;
    var pauseAfterPulse = 250;

    var flickerTimer = null;
    setTimeout(function(){
      flickerTimer = _grndActiveFlickerTimer = _grndStartBoardFlicker(flickerInterval);
    }, settleDelay);

    setTimeout(function(){
      if (flickerTimer) clearInterval(flickerTimer);
      _grndActiveFlickerTimer = null;
      var yr = document.querySelector('.ldb-board-row-you');
      if (yr) yr.classList.add('ldb-board-row-you-pulse');
    }, settleDelay + flickerDuration);

    var totalDelay = settleDelay + flickerDuration + pulseDuration + pauseAfterPulse;
    setTimeout(function(){
      _grndPopulateReveal(stats);
      if (reveal) reveal.style.display = '';
      _grndActiveRankFlickerTimer = _grndStartRankFlicker(flickerInterval);
      if (setRevealedFlag){
        try{ localStorage.setItem('grnd_leaderboard_revealed', '1'); }catch(e){}
      }
    }, totalDelay);
  }

  /* CONTINUE → motivational post-reveal page, "Proceed anyway" state */
  function grndContinueToPostreveal(){
    if (_grndActiveRankFlickerTimer){ clearInterval(_grndActiveRankFlickerTimer); _grndActiveRankFlickerTimer = null; }
    _grndShowOnly('ldb-postreveal');
    var proceedBtn = document.getElementById('ldb-btn-proceed');
    var revisitBtn = document.getElementById('ldb-btn-revisit');
    if (proceedBtn) proceedBtn.style.display = '';
    if (revisitBtn) revisitBtn.style.display = 'none';
  }
  window.grndContinueToPostreveal = grndContinueToPostreveal;

  /* "Proceed anyway" → image + audio */
  function grndProceedToAmbient(){
    grndShowAmbient();
  }
  window.grndProceedToAmbient = grndProceedToAmbient;

  /* REVISIT → replay fakeboard sequence */
  function grndRevisit(){
    var stats = _grndGetStats();
    _grndRunFakeboardSequence(stats, false);
  }
  window.grndRevisit = grndRevisit;

  /* ────────────────────────────────────────────────────────────────
     Ambient stillness screen — always reached via "Proceed anyway"
     ──────────────────────────────────────────────────────────────── */
  var _grndFadeRaf = null;

  function grndShowAmbient(){
    _grndShowOnly('ldb-ambient');
    var audio   = document.getElementById('ldb-ambient-audio');
    var muteBtn = document.getElementById('ldb-ambient-mute');
    if (!audio) return;
    try{
      audio.muted = false;
      audio.volume = 0;
      if (muteBtn) muteBtn.textContent = '🔊';
      var playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function'){
        playPromise.catch(function(){});
      }
      var target = 0.55, start = performance.now(), dur = 1500;
      if (_grndFadeRaf) cancelAnimationFrame(_grndFadeRaf);
      (function step(now){
        var t = Math.min(1, (now - start) / dur);
        audio.volume = target * t;
        if (t < 1) _grndFadeRaf = requestAnimationFrame(step);
      })(start);
    }catch(e){}
  }
  window.grndShowAmbient = grndShowAmbient;

  /* Closing ambient always returns to post-reveal, switching to REVISIT state */
  function grndCloseAmbient(){
    var audio = document.getElementById('ldb-ambient-audio');
    if (_grndFadeRaf){ cancelAnimationFrame(_grndFadeRaf); _grndFadeRaf = null; }
    if (audio){ try{ audio.pause(); }catch(e){} }
    _grndShowOnly('ldb-postreveal');
    var proceedBtn = document.getElementById('ldb-btn-proceed');
    var revisitBtn = document.getElementById('ldb-btn-revisit');
    if (proceedBtn) proceedBtn.style.display = 'none';
    if (revisitBtn) revisitBtn.style.display = '';
  }
  window.grndCloseAmbient = grndCloseAmbient;

  function grndToggleMute(){
    var audio = document.getElementById('ldb-ambient-audio');
    var btn   = document.getElementById('ldb-ambient-mute');
    if (!audio) return;
    audio.muted = !audio.muted;
    if (btn) btn.textContent = audio.muted ? '🔇' : '🔊';
  }
  window.grndToggleMute = grndToggleMute;

  /* ────────────────────────────────────────────────────────────────
     Hooks
     ──────────────────────────────────────────────────────────────── */
  (function(){
    var prev = (typeof window.onViewChanged === 'function') ? window.onViewChanged : null;
    window.onViewChanged = function(v, fromView){
      if (prev) prev(v, fromView);
      if (v === 'leaderboard') grndOnEnterLeaderboard();
    };
  })();

  (function(){
    var prevOpen = (typeof window.openMenuPanel === 'function') ? window.openMenuPanel : null;
    window.openMenuPanel = function(){
      if (prevOpen) prevOpen.apply(this, arguments);
      _grndUpdateMenuVisibility();
      var stats   = _grndGetStats();
      var scoreEl = document.getElementById('ldb-menu-score');
      if (scoreEl) scoreEl.textContent = stats.points.toLocaleString();
    };
  })();

  (function(){
    if (typeof window.onProgressSaved === 'function'){
      window.onProgressSaved(function(){
        _grndCheckMilestones();
        _grndUpdateMenuVisibility();
      });
    }
  })();

  /* ────────────────────────────────────────────────────────────────
     Dev reset
     ──────────────────────────────────────────────────────────────── */
  window._grndDebugResetLeaderboard = function(){
    ['grnd_leaderboard_revealed','grnd_ldb_board','grnd_ldb_milestone_unlocked',
     'grnd_ldb_milestone_points','grnd_ldb_fake_data','grnd_ldb_version'
    ].forEach(function(k){ try{ localStorage.removeItem(k); }catch(e){} });
    console.info('[ranking.js] leaderboard state reset — reload to regenerate fake identity.');
  };

})();
/* └─ @end: js/ranking.js ──────────────────────────────────────────── */
