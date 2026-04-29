# Alien Armory Defense

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
