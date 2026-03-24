// Theme toggle
(function() {
  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  function getPreferred() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    return 'dark';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (toggle) {
      toggle.textContent = theme === 'dark' ? '[light]' : '[dark]';
    }
  }

  applyTheme(getPreferred());

  if (toggle) {
    toggle.addEventListener('click', function() {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();

// Accordion animation
// Handles both open and close with smooth transitions.
// No-JS fallback: <details> still opens/closes natively without animation.
(function() {
  document.querySelectorAll('.accordion-section').forEach(function(details) {
    var content = details.querySelector('.accordion-content');
    if (!content) return;
    var isAnimating = false;

    // Clean up fixed maxHeight after open animation completes
    content.addEventListener('transitionend', function(e) {
      if (e.propertyName === 'max-height' && details.open) {
        content.style.maxHeight = 'none';
        isAnimating = false;
      }
    });

    // Intercept click on summary to animate close
    details.querySelector('summary').addEventListener('click', function(e) {
      if (isAnimating) return;

      if (details.open) {
        // Animate close: set current height explicitly, then collapse to 0
        e.preventDefault();
        isAnimating = true;
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.transition = 'none';
        requestAnimationFrame(function() {
          content.style.transition = 'max-height 0.3s ease, opacity 0.2s ease';
          content.style.maxHeight = '0px';
          content.style.opacity = '0';
        });
        setTimeout(function() {
          details.open = false;
          isAnimating = false;
        }, 300);
      }
    });

    // Animate open
    details.addEventListener('toggle', function() {
      if (details.open && !isAnimating) {
        isAnimating = true;
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
        content.style.transition = 'none';
        requestAnimationFrame(function() {
          content.style.transition = 'max-height 0.3s ease, opacity 0.2s ease';
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
        });
      }
    });
  });
})();
