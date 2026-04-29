const level2 = {
  "id": "level_2",
  "name": "Level Two",
  "description": "A compact alien route tuned for MVP wave 2.",
  "cols": 9,
  "rows": 7,
  "tileSize": 82,
  "startGold": 287,
  "lives": 18,
  "blockers": [
    {
      "row": 0,
      "col": 0
    },
    {
      "row": 0,
      "col": 8
    },
    {
      "row": 6,
      "col": 0
    },
    {
      "row": 6,
      "col": 8
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
      "row": 2,
      "col": 1
    },
    {
      "row": 3,
      "col": 1
    },
    {
      "row": 3,
      "col": 2
    },
    {
      "row": 3,
      "col": 3
    },
    {
      "row": 2,
      "col": 3
    },
    {
      "row": 1,
      "col": 3
    },
    {
      "row": 1,
      "col": 4
    },
    {
      "row": 1,
      "col": 5
    },
    {
      "row": 2,
      "col": 5
    },
    {
      "row": 3,
      "col": 5
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
      "row": 4,
      "col": 7
    },
    {
      "row": 4,
      "col": 8
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
