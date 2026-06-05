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
          '<li><a href="' + base + 'index.html"><span class="when">Home</span> Cub Scout Recruiting</a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="nav-group">' +
        '<h2>Single Pack Events</h2>' +
        '<p class="objective">Recruit kids grades K&ndash;5 to join your pack.</p>' +
        '<ul class="side-nav">' +
          '<li><a href="' + base + 'events/community-campfire.html"><span class="when">Aug / Sep</span> Community Campfire</a></li>' +
          '<li><a href="' + base + 'events/pinewood-derby.html"><span class="when">January</span> Pinewood Derby</a></li>' +
          '<li><a href="' + base + 'events/spring-open-house.html"><span class="when">Apr / May</span> Spring Open House</a></li>' +
          '<li><a href="' + base + 'events/summer-fun.html"><span class="when">Jun / Jul</span> Summer Parade</a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="nav-group">' +
        '<h2>Multiple Packs / Community Events</h2>' +
        '<p class="objective">Promote Scouting community-wide</p>' +
        '<ul class="side-nav">' +
          '<li><a href="' + base + 'events/scout-jamboree.html"><span class="when">Community</span> Scout Jamboree / Activity Fair</a></li>' +
        '</ul>' +
      '</div>' +
    '</nav>';

  function normalize(pathname) {
    return pathname.replace(/index\.html$/, '').replace(/\/$/, '');
  }

  function inject() {
    var target = document.getElementById('site-nav');
    if (!target) return;
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
