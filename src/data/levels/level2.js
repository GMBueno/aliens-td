const level2 = {
  "id": "level_2",
  "name": "Level Two",
  "description": "A wider alien route tuned for MVP wave 2.",
  "cols": 16,
  "rows": 9,
  "tileSize": 64,
  "startGold": 287,
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
      "row": 1,
      "col": 0
    },
    {
      "row": 1,
      "col": 1
    },
    {
      "row": 1,
      "col": 2
    },
    {
      "row": 2,
      "col": 2
    },
    {
      "row": 3,
      "col": 2
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
      "row": 3,
      "col": 5
    },
    {
      "row": 2,
      "col": 5
    },
    {
      "row": 1,
      "col": 5
    },
    {
      "row": 1,
      "col": 6
    },
    {
      "row": 1,
      "col": 7
    },
    {
      "row": 1,
      "col": 8
    },
    {
      "row": 2,
      "col": 8
    },
    {
      "row": 3,
      "col": 8
    },
    {
      "row": 4,
      "col": 8
    },
    {
      "row": 5,
      "col": 8
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
      "row": 4,
      "col": 11
    },
    {
      "row": 3,
      "col": 11
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
          "enemy": "alien_normal",
          "at": 4.25
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
          "enemy": "alien_normal",
          "at": 4.9
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
          "enemy": "alien_fast",
          "at": 5.15
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
          "enemy": "alien_fast",
          "at": 2.7
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
          "enemy": "alien_tank",
          "at": 5.8
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
        },
        {
          "enemy": "alien_normal",
          "at": 11.68
        }
      ]
    }
  ]
};

export default level2;
