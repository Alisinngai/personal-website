# Photographer portfolio

A single-page portfolio: an introduction, a selection of work, pricing and a
contact block, in that order. Built on the shadcn Next.js preset
`b5rR41Mtnc` (`base-lyra` style), Next.js 16, Tailwind CSS v4 and React 19.

## Running it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint
pnpm typecheck
```

## Where the words live

Almost everything you will want to change is in **`lib/site.ts`**: your name,
your email address, the headline, the introduction, the list of what you
photograph, the photographs themselves and the pricing tiers. Every section
reads from that file, so you can rewrite the copy without touching markup.

The sections themselves:

| Section | Component |
| --- | --- |
| Header and navigation | `components/site-header.tsx` |
| Introduction | `components/introduction.tsx` |
| Selected work | `components/work.tsx` |
| Pricing | `components/pricing.tsx` |
| Contact | `components/contact.tsx` |
| Footer | `components/site-footer.tsx` |

## Replace the placeholder photographs

Every photograph on the site is a placeholder served by
[picsum.photos](https://picsum.photos). Each one is addressed by a stable
`seed`, so the same picture loads every time. Here is the full list:

| # | Where it appears | Value to replace |
| --- | --- | --- |
| 1 | Beside the introduction | `site.hero.seed` — `self-portrait-window` |
| 2 | Work, first wide pair | `site.work.photos[0]` — `harbour-first-light` |
| 3 | Work, first wide pair | `site.work.photos[1]` — `room-with-morning` |
| 4 | Work, row of three | `site.work.photos[2]` — `north-field` |
| 5 | Work, row of three | `site.work.photos[3]` — `studio-one-light` |
| 6 | Work, row of three | `site.work.photos[4]` — `river-bend` |
| 7 | Work, second wide pair | `site.work.photos[5]` — `market-lane` |
| 8 | Work, second wide pair | `site.work.photos[6]` — `quiet-street` |
| 9 | Work, row of three | `site.work.photos[7]` — `window-seat` |
| 10 | Work, row of three | `site.work.photos[8]` — `after-rain` |
| 11 | Work, row of three | `site.work.photos[9]` — `long-shadows` |

All of those values live in `lib/site.ts`. To swap one out, drop your own file
into `public/` and point the value at it:

```ts
{ seed: "/work/harbour-first-light.jpg", title: "Harbour, first light", alt: "…" }
```

Any value that starts with `/` is treated as a local file; anything else is a
picsum seed. Once every photograph is yours, delete the `images.remotePatterns`
block in `next.config.ts` — it only exists to allow the placeholders.

Please rewrite the `alt` text as you go: it is read aloud by screen readers,
and it should describe the picture rather than the page.

## Design notes

- **Type.** Headings and the wordmark are set in Cormorant Garamond, body text
  in Inter. Both are loaded through `next/font/google` in `app/layout.tsx`, so
  they are self-hosted at build time; change the pair there and the whole site
  follows.
- **Colour.** The theme is monochrome — near-black on near-white in light mode,
  inverted in dark mode — so the photographs carry the colour. The tokens live
  in `app/globals.css`.
- **Shape.** Corners are square and separators are hairlines; the layout leans
  on spacing and a two-column grid rather than decoration.
- **Dark mode** follows the reader's system preference. Press `d` to toggle it
  while you are working.

## Deploying

The site is fully static. Vercel, Netlify or Cloudflare Pages will build it
from this repository with no extra configuration; `pnpm build` followed by
`pnpm start` works anywhere Node runs.
