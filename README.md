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
- `nav.js` : shared left-hand navigation and footer injected into every page
- `styles.css` : shared styles
- `images/` : hero and supporting images
- `404.html`, `robots.txt`, `sitemap.xml`, `_headers` : hosting support files

The site is plain linked HTML with no build step or server-side code. Pages use
relative links so they work locally and when deployed.

## Viewing locally

Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deployment

Hosted on **Cloudflare Pages**, connected to this GitHub repo. Every push to
`main` deploys automatically. There is no build step: framework preset is "None",
the build command is empty, and the output directory is the repo root (`/`).

The live site is `https://scout-recruiting.org`. Privacy-first page views are
tracked with Cloudflare Web Analytics (no cookies, no personal data).
