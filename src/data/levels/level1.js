const level1 = {
  "id": "level_1",
  "name": "Level One",
  "description": "A wider alien route tuned for MVP wave 1.",
  "cols": 16,
  "rows": 9,
  "tileSize": 64,
  "startGold": 265,
  "lives": 18,
  "blockers": [
    {
      "row": 0,
      "col": 0
    },
    {
      "row": 0,
      "col": 15
    },
    {
      "row": 8,
      "col": 0
    },
    {
      "row": 8,
      "col": 15
    },
    {
      "row": 0,
      "col": 7
    },
    {
      "row": 8,
      "col": 7
    }
  ],
  "track": [
    {
      "row": 4,
      "col": 0
    },
    {
      "row": 4,
      "col": 1
    },
    {
      "row": 4,
      "col": 2
    },
    {
      "row": 4,
      "col": 3
    },
    {
      "row": 4,
      "col": 4
    },
    {
      "row": 4,
      "col": 5
    },
    {
      "row": 4,
      "col": 6
    },
    {
      "row": 3,
      "col": 6
    },
    {
      "row": 2,
      "col": 6
    },
    {
      "row": 2,
      "col": 7
    },
    {
      "row": 2,
      "col": 8
    },
    {
      "row": 2,
      "col": 9
    },
    {
      "row": 3,
      "col": 9
    },
    {
      "row": 4,
      "col": 9
    },
    {
      "row": 5,
      "col": 9
    },
    {
      "row": 5,
      "col": 10
    },
    {
      "row": 5,
      "col": 11
    },
    {
      "row": 5,
      "col": 12
    },
    {
      "row": 4,
      "col": 12
    },
    {
      "row": 3,
      "col": 12
    },
    {
      "row": 3,
      "col": 13
    },
    {
      "row": 3,
      "col": 14
    },
    {
      "row": 3,
      "col": 15
    }
  ],
  "waves": [
    {
      "id": 1,
      "spawns": [
        {
          "enemy": "alien_normal",
          "at": 0.5
        },
        {
          "enemy": "alien_normal",
          "at": 1.25
        },
        {
          "enemy": "alien_normal",
          "at": 2
        },
        {
          "enemy": "alien_normal",
          "at": 2.75
        },
        {
          "enemy": "alien_normal",
          "at": 3.5
        },
        {
          "enemy": "alien_fast",
          "at": 4.5
        }
      ]
    },
    {
      "id": 2,
      "spawns": [
        {
          "enemy": "alien_normal",
          "at": 0.4
        },
        {
          "enemy": "alien_normal",
          "at": 1.15
        },
        {
          "enemy": "alien_normal",
          "at": 1.9
        },
        {
          "enemy": "alien_normal",
          "at": 2.65
        },
        {
          "enemy": "alien_normal",
          "at": 3.4
        },
        {
          "enemy": "alien_normal",
          "at": 4.15
        },
        {
          "enemy": "alien_fast",
          "at": 3.5
        },
        {
          "enemy": "alien_fast",
          "at": 4.05
        },
        {
          "enemy": "alien_fast",
          "at": 4.6
        },
        {
          "enemy": "alien_tank",
          "at": 7.8
        }
      ]
    },
    {
      "id": 3,
      "spawns": [
        {
          "enemy": "alien_fast",
          "at": 0.5
        },
        {
          "enemy": "alien_fast",
          "at": 1.05
        },
        {
          "enemy": "alien_fast",
          "at": 1.6
        },
        {
          "enemy": "alien_fast",
          "at": 2.15
        },
        {
          "enemy": "alien_tank",
          "at": 3.5
        },
        {
          "enemy": "alien_tank",
          "at": 4.65
        },
        {
          "enemy": "alien_normal",
          "at": 8.8
        },
        {
          "enemy": "alien_normal",
          "at": 9.28
        },
        {
          "enemy": "alien_normal",
          "at": 9.76
        },
        {
          "enemy": "alien_normal",
          "at": 10.24
        },
        {
          "enemy": "alien_normal",
          "at": 10.72
        },
        {
          "enemy": "alien_normal",
          "at": 11.2
        }
      ]
    }
  ]
};

export default level1;
