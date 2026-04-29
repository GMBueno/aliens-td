export const enemies = {
  alien_normal: {
    key: "alien_normal",
    label: "Scout",
    life: 55,
    speed: 54,
    damage: 1,
    gold: 12,
    shape: "circle",
    color: "#4de0a8",
  },
  alien_fast: {
    key: "alien_fast",
    label: "Skitter",
    life: 34,
    speed: 92,
    damage: 1,
    gold: 14,
    shape: "triangle",
    color: "#7bc8ff",
  },
  alien_tank: {
    key: "alien_tank",
    label: "Bulwark",
    life: 145,
    speed: 34,
    damage: 2,
    gold: 28,
    shape: "square",
    color: "#f5b447",
  },
  alien_boss: {
    key: "alien_boss",
    label: "Overseer",
    life: 520,
    speed: 26,
    damage: 6,
    gold: 120,
    shape: "pentagon",
    color: "#e96dff",
  },
};

export function getEnemy(key) {
  return enemies[key];
}
