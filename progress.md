Original prompt: using @game-studio create a simple top-down alien-themed tower defense MVP like Bloons Tower Defense, with shape placeholder enemies, six weapon slots, separate data files for enemies/weapons/levels, a 3x3 level-select menu, in-game HUD, waves, persistent player level, pause/menu controls, and a Time Stop ability.

- Implemented a static browser MVP with HTML, CSS, and canvas-based ES modules.
- Active entry points:
  `index.html`,
  `styles.css`,
  `src/main.js`,
  `src/game.js`.
- Tuning data is split into:
  `src/data/enemies.js`,
  `src/data/weapons.js`,
  `src/data/player.js`,
  and `src/data/levels/level1.js` through `level9.js`.
- Gameplay currently includes:
  a 3x3 level selector,
  six fixed weapon slots,
  tile path/build/blocker rules,
  waves and enemy leaks,
  gold rewards,
  persistent player XP/level,
  projectile towers with ammo/reload,
  pause/play/2x,
  gear menu,
  restart/change-level actions,
  victory/defeat modal,
  Time Stop duration/cooldown,
  and `window.render_game_to_text` plus `window.advanceTime(ms)` for testing.

TODO
- Replace canvas/CSS placeholder art with isolated or provided image assets.
- Add the later skill tree/proficiency screen from the player-level button.
- Balance levels and weapon numbers after a few real play sessions.

- Follow-up change:
  removed `src/data/levelFactory.js` and expanded every level into a fully explicit `levelN.js` object so track, blockers, starting resources, lives, and every spawn timing are visible in the file that owns that level.
- Added tower range inspection:
  selecting a weapon shows its circular range over the hovered build tile;
  clicking an already placed tower shows that tower's circular range.
- Split the old 3-state speed button into separate Play/Pause and 1x/2x controls.

- Follow-up balance/audio pass:
  expanded all levels from 9x7 to 16x9 with longer explicit tracks and wider build space;
  increased every weapon range, with sniper range increased the most;
  added a Web Audio shot sound in `fireTower`, so sound plays when the weapon fires rather than when the projectile impacts.

- Added weapon slot info popups:
  every weapon slot now has a top-right info button;
  clicking it opens a two-column weapon inventory/details modal;
  the left side is a 3x3 inventory grid with the current weapon selected in the first slot;
  the right side shows damage, ATK speed, capacity, reload time, and range, plus disabled Equip and Destroy buttons reserved for later weapon drops/rewards.

- Follow-up UI pass:
  clicking a weapon info button now pauses the game while the inventory modal is open, then restores the previous pause state on close;
  clicking a placed tower opens an arena-row sidebar with weapon attributes plus live ammo;
  removed the visible arena wrapper card styling so the canvas and tower sidebar fit in the second UI row without a nested-card look;
  swapped top controls so the speed toggle appears before Play/Pause.

- Follow-up arena cleanup:
  removed the remaining arena frame treatment and made the tower sidebar overlay the arena row instead of pushing/resizing the canvas;
  changed Play/Pause from text to icon-only arrow/pause bars with accessible labels.
