# ucfclinic: layout reference build

This build reproduces the layout, type scale, colours, glass effects and reveal
animations of a reference site so they can be reused for United Community Foundation.

## Do not deploy as-is

All copy, photos, the logo, provider bios, reviews and blog text currently in
`src/data.js`, `src/wpData.js`, `src/pages/` and `public/img/` belong to the
reference site's owner and to the people named in it. They are stand-ins only.
Replace them with UCF's own content and brand assets before this is published
anywhere. `index.html` carries a `noindex` tag until that is done. The previous
UCF version of this site, with UCF's logo, photos and copy, is in git history
before commit `2d93a85`.

## Develop

```
npm install
npm run dev -- --port 5187
npm run build
```

## Structure

- `src/index.css`: all styles, design tokens at the top under `:root`
- `src/components/`: homepage sections, header, footer
- `src/components/inner/Common.jsx`: shared inner-page blocks
- `src/pages/`: inner pages, post template, listings, 404
- `src/router.jsx`: history router; `public/_redirects` for Netlify
- `src/hooks/useReveal.js`, `useCounter.js`: scroll reveals and counters
