export const enemies = {
  alien_normal: {
    key: "alien_normal",
    label: "Scout",
    life: 10000,
    speed: 30,
    damage: 1,
    gold: 12,
    shape: "circle",
    color: "#4de0a8",
  },
  alien_fast: {
    key: "alien_fast",
    label: "Skitter",
    life: 5000,
    speed: 50,
    damage: 1,
    gold: 14,
    shape: "triangle",
    color: "#7bc8ff",
  },
  alien_tank: {
    key: "alien_tank",
    label: "Bulwark",
    life: 50000,
    speed: 20,
    damage: 2,
    gold: 28,
    shape: "square",
    color: "#f5b447",
  },
  alien_boss: {
    key: "alien_boss",
    label: "Overseer",
    life: 100000,
    speed: 15,
    damage: 6,
    gold: 120,
    shape: "pentagon",
    color: "#e96dff",
  },
};

export function getEnemy(key) {
  return enemies[key];
}
