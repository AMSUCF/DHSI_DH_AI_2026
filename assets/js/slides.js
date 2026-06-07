// Intro slide deck navigation: keyboard arrows, prev/next buttons, counter.
(function() {
  var deck = document.querySelector('.deck');
  if (!deck) return;

  var slides = Array.prototype.slice.call(deck.querySelectorAll('.slide'));
  if (!slides.length) return;

  var prevBtn = document.getElementById('deck-prev');
  var nextBtn = document.getElementById('deck-next');
  var counter = document.getElementById('deck-counter');
  var current = 0;

  function render() {
    slides.forEach(function(slide, i) {
      slide.classList.toggle('is-active', i === current);
    });
    if (counter) {
      counter.textContent = String(current + 1).padStart(2, '0') + ' / ' +
        String(slides.length).padStart(2, '0');
    }
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === slides.length - 1;
  }

  function go(delta) {
    var next = current + delta;
    if (next < 0 || next >= slides.length) return;
    current = next;
    render();
  }

  if (prevBtn) prevBtn.addEventListener('click', function() { go(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function() { go(1); });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') { go(-1); }
    else if (e.key === 'ArrowRight' || e.key === ' ') { go(1); }
  });

  // Touch: a horizontal swipe advances (left) or rewinds (right) a slide.
  var startX = null, startY = null;
  deck.addEventListener('touchstart', function(e) {
    var t = e.changedTouches[0];
    startX = t.clientX;
    startY = t.clientY;
  }, { passive: true });
  deck.addEventListener('touchend', function(e) {
    if (startX === null) return;
    var t = e.changedTouches[0];
    var dx = t.clientX - startX;
    var dy = t.clientY - startY;
    startX = startY = null;
    // Ignore taps and mostly-vertical drags; only act on clear horizontal swipes.
    if (Math.abs(dx) < 40 || Math.abs(dx) <= Math.abs(dy)) return;
    go(dx < 0 ? 1 : -1);
  }, { passive: true });

  render();
})();
