# Aliens Tower Defense

Top-down alien tower-defense MVP inspired by classic lane/path defense games.

The game is a static HTML/CSS/JavaScript canvas app with:

- a 3x3 mission selector,
- six weapon slots,
- path-based alien waves,
- placeable turrets with range inspection,
- persistent player XP/level,
- pause, speed, menu, restart, and Time Stop controls,
- image assets for the board tiles, aliens, lower HUD cards, and turrets.

Run locally:

```bash
npm run serve
```

Then open http://localhost:4173.

If that port is already in use, run a one-off server on another port:

```bash
python3 -m http.server 4181
```

Then open http://localhost:4181.

## GitHub Pages

This repository is a static site. GitHub Pages deploys it from the
`.github/workflows/deploy-pages.yml` workflow whenever `main` is pushed.

## Swapping Art

Most runtime asset paths are centralized in `src/data/assets.js`.

To change visuals later, either replace the PNG at the existing path or update the matching entry in that file. The current asset groups cover board tiles, upper HUD plaques/buttons, alien sprites, placed tower parts, lower HUD slot cards, lower HUD weapon art, and price plaques.
