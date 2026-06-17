/* Shared site navigation.
   Injected into <aside id="site-nav"> on every page. Link paths are computed
   from this script's own location, so the same file works from the site root
   (index.html) and from subfolders (events/*.html), on both file:// and a web
   server. Single source of truth for the nav: edit here, every page updates. */
(function () {
  var script = document.currentScript;
  var base = new URL('.', script.src).href; // URL of the folder holding nav.js (site root)

  var html =
    '<nav aria-label="Site navigation">' +
      '<div class="nav-group">' +
        '<ul class="side-nav">' +
          '<li><a href="' + base + 'index.html"><span class="nav-text"><span class="when">Home</span> Cub Scout Recruiting</span></a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="nav-group">' +
        '<h2>Single Pack Events</h2>' +
        '<p class="objective">Template events you can use for year-round recruiting for your pack.</p>' +
        '<ul class="side-nav">' +
          '<li><a href="' + base + 'events/community-campfire.html">' +
            '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M12 2c2.5 3.5 4.5 5.5 4.5 9a4.5 4.5 0 0 1-9 0c0-1.8.8-3 2-4 .4 1 1.1 1.6 2 1.6-.5-2.5 0-4.8.5-6.6z"/>' +
              '<path d="M6 18l12 3"/><path d="M6 21l12-3"/>' +
            '</svg>' +
            '<span class="nav-text"><span class="when">Fall</span> Community Campfire</span></a></li>' +
          '<li><a href="' + base + 'events/pinewood-derby.html">' +
            '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M5 15V10L7 7h10l2 3v5"/><path d="M3 15h18"/>' +
              '<circle cx="7.5" cy="16" r="1.7"/><circle cx="16.5" cy="16" r="1.7"/>' +
            '</svg>' +
            '<span class="nav-text"><span class="when">Winter</span> Pinewood Derby</span></a></li>' +
          '<li><a href="' + base + 'events/spring-open-house.html">' +
            '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>' +
            '</svg>' +
            '<span class="nav-text"><span class="when">Spring</span> Spring Open House</span></a></li>' +
          '<li><a href="' + base + 'events/summer-fun.html">' +
            '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M6 21V3"/><path d="M6 4h11l-2.5 3.5L17 11H6"/>' +
            '</svg>' +
            '<span class="nav-text"><span class="when">Summer</span> Summer Parade</span></a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="nav-group">' +
        '<h2>Multiple Packs / Community Events</h2>' +
        '<p class="objective">Promote Scouting community-wide</p>' +
        '<ul class="side-nav">' +
          '<li><a href="' + base + 'events/scout-jamboree.html">' +
            '<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M12 2v3"/><path d="M12 2l3 1-3 1"/>' +
              '<path d="M3 21L12 5l9 16"/>' +
              '<path d="M3 21h18"/>' +
              '<path d="M9 21l3-6 3 6"/>' +
            '</svg>' +
            '<span class="nav-text"><span class="when">Community</span> Scout Jamboree / Activity Fair</span></a></li>' +
        '</ul>' +
      '</div>' +
    '</nav>';

  function normalize(pathname) {
    return pathname.replace(/index\.html$/, '').replace(/\/$/, '');
  }

  function inject() {
    var target = document.getElementById('site-nav');
    if (target) {
      target.innerHTML = html;
      // Mark the link for the current page so it can be highlighted.
      var herePath = normalize(location.pathname);
      var anchors = target.getElementsByTagName('a');
      for (var i = 0; i < anchors.length; i++) {
        if (normalize(new URL(anchors[i].href).pathname) === herePath) {
          anchors[i].setAttribute('aria-current', 'page');
        }
      }
    }

    // Footer text, with an always-current year. Single source for every page.
    var footer = document.getElementById('site-footer-text');
    if (footer) {
      var year = new Date().getFullYear();
      footer.textContent = year +
        ' Northeast Illinois Council · Recruiting playbooks · Built for Scout leaders';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
