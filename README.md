# www.nevcan.com

The front door of the nevcan.com sites. One line, "I'm a ___", where the word rotates through what
Nevcan does. Each word opens its own site (dive, dev, and later film, games).

## Stack

- [Astro 7](https://astro.build), static output, one page, no framework on the client
- Font self-hosted (Inter: the same subset file as dive.nevcan.com)
- Portrait: `public/media/nev-portrait-256.webp`, the same file as dive.nevcan.com (see
  `CREDITS.md`)
- Hosting: GitHub Pages, deployed by GitHub Actions (`.github/workflows/deploy.yml`)

## Development

Node 24 (`.nvmrc`).

```sh
nvm use
npm install
npm run dev     # http://localhost:4321
npm run build   # astro check + static build to dist/
```

## Editing

| What                                         | Where                   |
| -------------------------------------------- | ----------------------- |
| The words, their sites, which are live       | `src/data/sites.ts`     |
| How long each word stays (`ROTATE_MS`)       | `src/data/sites.ts`     |
| The page, its styles and the rotation script | `src/pages/index.astro` |

Only sites with `live: true` appear on the page. When a new one is up, flip it to true. The word
size is set so the longest word fits the screen (`--word` in `src/layouts/Base.astro`); a word longer than
"software architect" needs that divisor raised.

## How it behaves

- The word changes every `ROTATE_MS` (1.8 s; the slide itself takes 0.6 s). Hovering the line stops it, so the word under the
  pointer can be clicked. Whenever the rotation is stopped for the visitor (hover, scroll, swipe,
  keyboard, the list below), the current word and its list item are underlined.
- Mouse wheel / trackpad: one word per notch; a trackpad flick counts once. Touch: swipe up or
  down. Keyboard: arrow keys, Enter opens the current word.
- The list at the bottom is the same choice in plain links: hovering or focusing an item shows its
  word. Screen readers and keyboard users use this list; the big line is hidden from them.
- Without JavaScript the first word shows and the list still works.
- Reduced motion: no slide, and the word changes every 2.4 s.

## Other pages and settings

- `src/pages/404.astro`: the not-found page ("Lost at sea."), linking home and to the live sites.
- `src/data/profile.ts`: name, footer accounts, contact email (hidden while `null`), and `STAGING`.
- `src/layouts/Base.astro`: head, logo, footer and the shared styles.
- Share preview (`public/og-image.png`) and iOS home-screen icon (`public/apple-touch-icon.png`)
  are rendered from SVGs in `design/` (see `design/README.md`).
- The home page carries JSON-LD (`Person`): name, photo, roles, the sites, and every profile in
  `profiles` (`src/data/profile.ts`). Absolute URLs follow `origin`, which follows `STAGING`.

## Domains

Live at **[www.nevcan.com](https://www.nevcan.com)** since November 2026, when it replaced v7
(now archived at [v7.nevcan.com](https://v7.nevcan.com)). It was previewed on v8.nevcan.com
first; `STAGING` in `src/data/profile.ts` (now `false`) made every page noindex during that time.

`www.nevcan.com` is the custom domain in the repository's Pages settings. The apex `nevcan.com`
points at GitHub Pages too (A records), so GitHub redirects it to `www`.

`public/gue/tf.html` and `public/calendar.html` redirect the two v7 pages that search engines
still showed to their new pages on dive.nevcan.com; they can go after 1 January 2028 (#1).
`robots.txt` and the sitemap (`@astrojs/sitemap`) point search engines at the site.
