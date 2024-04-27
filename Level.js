{
  "level": {
    "name": "Forest of Mysteries",
    "size": {
      "width": 1000,
      "height": 800
    },
    "terrain": "Forest",
    "obstacles": [
      {
        "type": "Tree",
        "position": {"x": 200, "y": 300}
      },
      {
        "type": "Rock",
        "position": {"x": 500, "y": 400}
      }
    ],
    "enemies": [
      {
        "name": "Goblin",
        "position": {"x": 300, "y": 200},
        "health": 50,
        "damage": 10,
        "speed": 5
      },
      {
        "name": "Spider",
        "position": {"x": 700, "y": 500},
        "health": 30,
        "damage": 8,
        "speed": 8
      }
    ],
    "treasures": [
      {
        "type": "Chest",
        "position": {"x": 600, "y": 100},
        "contents": [
          {"item": "Health Potion", "quantity": 1},
          {"item": "Gold", "quantity": 50}
        ]
      }
    ]
  }
}
