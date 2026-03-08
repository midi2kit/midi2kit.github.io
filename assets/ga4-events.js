// GA4 Custom Event Tracking - MIDI2Kit
document.addEventListener('DOMContentLoaded', function() {
  if (typeof gtag !== 'function') return;

  var productName = 'MIDI2Kit';
  var currentDomain = location.hostname;

  // 1. app_store_click - App Store link tracking
  document.querySelectorAll('a[href*="apps.apple.com"]').forEach(function(link) {
    link.addEventListener('click', function() {
      gtag('event', 'app_store_click', {
        product_name: productName,
        source_page: document.title
      });
    });
  });

  // 2. cta_click - CTA button tracking
  document.querySelectorAll('.btn, .cta, .hero-buttons a, .app-store-link, [class*="cta"], [class*="btn-primary"]').forEach(function(el) {
    el.addEventListener('click', function() {
      gtag('event', 'cta_click', {
        cta_text: (el.textContent || '').trim().substring(0, 100),
        cta_location: document.title
      });
    });
  });

  // 3. external_link_click - External link tracking
  document.querySelectorAll('a[href^="http"]').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.indexOf(currentDomain) === -1) {
      link.addEventListener('click', function() {
        gtag('event', 'external_link_click', {
          link_url: href,
          product_name: productName
        });
      });
    }
  });
});
