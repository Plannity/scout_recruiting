# Cub Scout Recruiting

A small static website of recruiting playbooks for Cub Scout leaders. It documents
clear, repeatable steps for running successful recruiting events, drawn from the
first-hand experience of leaders who have grown their packs.

The centerpiece is a reusable **Scout Jamboree** roadmap so any pack can run its
own community recruiting event. Supporting playbooks cover seasonal single-pack
events (Community Campfire, Pinewood Derby, Spring Open House, Summer Parade) and
the overall "fun-first" recruiting approach.

## Structure

- `index.html` : home page (intro plus the Fun-First Recruiting playbook)
- `events/` : one page per recruiting event playbook
- `nav.js` : shared left-hand navigation injected into every page
- `styles.css` : shared styles
- `images/` : hero and supporting images

The site is plain linked HTML with no build step or server-side code, intended for
static hosting (Cloudflare + R2). Pages use relative links so they work locally and
when deployed.

## Viewing locally

Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
