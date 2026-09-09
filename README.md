# United Community Foundation — React site

Vite + React single-page site for United Community Foundation (UCF), a Texas
nonprofit. Client-side page state in `App.jsx` (no router — matches the
original design's single-state navigation), GSAP for scroll reveals /
parallax / the services marquee, Font Awesome for icons.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Structure

- `src/App.jsx` — page state, routing between sections, layout shell
- `src/components/` — Nav, Footer, BackToTop, shared page chrome
- `src/components/pages/` — one component per site section (Home, About,
  Medical, Dental, Free, Social, Pending, Contact)
- `src/hooks/useScrollEffects.js` — GSAP reveal/parallax/marquee/counter wiring
