const levelNames = [
  "Level One",
  "Level Two",
  "Level Three",
  "Level Four",
  "Level Five",
  "Level Six",
  "Level Seven",
  "Level Eight",
  "Level Nine",
];

const tracks = [
  [
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [3, 4], [2, 4], [2, 5], [2, 6], [3, 6], [4, 6], [4, 7], [4, 8],
  ],
  [
    [1, 0], [1, 1], [2, 1], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [4, 5], [4, 6], [4, 7], [4, 8],
  ],
  [
    [5, 0], [5, 1], [5, 2], [4, 2], [3, 2], [2, 2], [2, 3], [2, 4], [3, 4], [4, 4], [5, 4], [5, 5], [5, 6], [4, 6], [3, 6], [3, 7], [3, 8],
  ],
];

function spawn(enemy, at, count, interval = 0.75) {
  return Array.from({ length: count }, (_, index) => ({ enemy, at: at + index * interval }));
}

export function createLevel(index) {
  const track = tracks[(index - 1) % tracks.length].map(([row, col]) => ({ row, col }));
  const difficulty = index - 1;
  const waves = [
    {
      id: 1,
      spawns: [
        ...spawn("alien_normal", 0.5, 5 + difficulty),
        ...spawn("alien_fast", 4.5, Math.max(1, Math.floor(index / 2)), 0.6),
      ],
    },
    {
      id: 2,
      spawns: [
        ...spawn("alien_normal", 0.4, 6 + difficulty),
        ...spawn("alien_fast", 3.5, 3 + Math.floor(index / 2), 0.55),
        ...spawn("alien_tank", 7.8, Math.max(1, Math.floor(index / 3)), 1.4),
      ],
    },
    {
      id: 3,
      spawns: [
        ...spawn("alien_fast", 0.5, 4 + difficulty, 0.55),
        ...spawn("alien_tank", 3.5, 2 + Math.floor(index / 2), 1.15),
        ...(index % 3 === 0 || index === 9 ? spawn("alien_boss", 8.8, 1, 1) : spawn("alien_normal", 8.8, 6 + difficulty, 0.48)),
      ],
    },
  ];

  return {
    id: `level_${index}`,
    name: levelNames[index - 1],
    description: `A compact alien route tuned for MVP wave ${index}.`,
    cols: 9,
    rows: 7,
    tileSize: 82,
    startGold: 265 + difficulty * 22,
    lives: 18 + Math.floor(index / 3),
    blockers: [
      { row: 0, col: 0 }, { row: 0, col: 8 }, { row: 6, col: 0 }, { row: 6, col: 8 },
      ...(index > 3 ? [{ row: 1, col: 7 }, { row: 5, col: 1 }] : []),
    ],
    track,
    waves,
  };
}
