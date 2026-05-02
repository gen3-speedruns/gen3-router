import type { PokemonData } from './types';

export const PokemonDataMap: Record<string, PokemonData> = {
  "Bulbasaur": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 49,
      "def": 49,
      "spa": 65,
      "spd": 65,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 64,
    "growthRate": "MediumSlow",
    "dexId": 1
  },
  "Ivysaur": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 62,
      "def": 63,
      "spa": 80,
      "spd": 80,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 141,
    "growthRate": "MediumSlow",
    "dexId": 2
  },
  "Venusaur": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 82,
      "def": 83,
      "spa": 100,
      "spd": 100,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 208,
    "growthRate": "MediumSlow",
    "dexId": 3
  },
  "Charmander": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 39,
      "atk": 52,
      "def": 43,
      "spa": 60,
      "spd": 50,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 65,
    "growthRate": "MediumSlow",
    "dexId": 4
  },
  "Charmeleon": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 58,
      "atk": 64,
      "def": 58,
      "spa": 80,
      "spd": 65,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 142,
    "growthRate": "MediumSlow",
    "dexId": 5
  },
  "Charizard": {
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spa": 109,
      "spd": 85,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 209,
    "growthRate": "MediumSlow",
    "dexId": 6
  },
  "Squirtle": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 44,
      "atk": 48,
      "def": 65,
      "spa": 50,
      "spd": 64,
      "spe": 43
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 66,
    "growthRate": "MediumSlow",
    "dexId": 7
  },
  "Wartortle": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 59,
      "atk": 63,
      "def": 80,
      "spa": 65,
      "spd": 80,
      "spe": 58
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 143,
    "growthRate": "MediumSlow",
    "dexId": 8
  },
  "Blastoise": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 79,
      "atk": 83,
      "def": 100,
      "spa": 85,
      "spd": 105,
      "spe": 78
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 210,
    "growthRate": "MediumSlow",
    "dexId": 9
  },
  "Caterpie": {
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 30,
      "def": 35,
      "spa": 20,
      "spd": 20,
      "spe": 45
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 53,
    "growthRate": "MediumFast",
    "dexId": 10
  },
  "Metapod": {
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 20,
      "def": 55,
      "spa": 25,
      "spd": 25,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 72,
    "growthRate": "MediumFast",
    "dexId": 11
  },
  "Butterfree": {
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 45,
      "def": 50,
      "spa": 80,
      "spd": 80,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 160,
    "growthRate": "MediumFast",
    "dexId": 12
  },
  "Weedle": {
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 35,
      "def": 30,
      "spa": 20,
      "spd": 20,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 52,
    "growthRate": "MediumFast",
    "dexId": 13
  },
  "Kakuna": {
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 25,
      "def": 50,
      "spa": 25,
      "spd": 25,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 71,
    "growthRate": "MediumFast",
    "dexId": 14
  },
  "Beedrill": {
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 80,
      "def": 40,
      "spa": 45,
      "spd": 80,
      "spe": 75
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 159,
    "growthRate": "MediumFast",
    "dexId": 15
  },
  "Pidgey": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 40,
      "spa": 35,
      "spd": 35,
      "spe": 56
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 55,
    "growthRate": "MediumSlow",
    "dexId": 16
  },
  "Pidgeotto": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 63,
      "atk": 60,
      "def": 55,
      "spa": 50,
      "spd": 50,
      "spe": 71
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 113,
    "growthRate": "MediumSlow",
    "dexId": 17
  },
  "Pidgeot": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 83,
      "atk": 80,
      "def": 75,
      "spa": 70,
      "spd": 70,
      "spe": 91
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 3
    },
    "baseExp": 172,
    "growthRate": "MediumSlow",
    "dexId": 18
  },
  "Rattata": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 56,
      "def": 35,
      "spa": 25,
      "spd": 35,
      "spe": 72
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 57,
    "growthRate": "MediumFast",
    "dexId": 19
  },
  "Raticate": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 81,
      "def": 60,
      "spa": 50,
      "spd": 70,
      "spe": 97
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 116,
    "growthRate": "MediumFast",
    "dexId": 20
  },
  "Spearow": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 60,
      "def": 30,
      "spa": 31,
      "spd": 31,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 58,
    "growthRate": "MediumFast",
    "dexId": 21
  },
  "Fearow": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 90,
      "def": 65,
      "spa": 61,
      "spd": 61,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 162,
    "growthRate": "MediumFast",
    "dexId": 22
  },
  "Ekans": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 60,
      "def": 44,
      "spa": 40,
      "spd": 54,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 62,
    "growthRate": "MediumFast",
    "dexId": 23
  },
  "Arbok": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 69,
      "spa": 65,
      "spd": 79,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 147,
    "growthRate": "MediumFast",
    "dexId": 24
  },
  "Pikachu": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 55,
      "def": 30,
      "spa": 50,
      "spd": 40,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 82,
    "growthRate": "MediumFast",
    "dexId": 25
  },
  "Raichu": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 90,
      "def": 55,
      "spa": 90,
      "spd": 80,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 3
    },
    "baseExp": 122,
    "growthRate": "MediumFast",
    "dexId": 26
  },
  "Sandshrew": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 75,
      "def": 85,
      "spa": 20,
      "spd": 30,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 93,
    "growthRate": "MediumFast",
    "dexId": 27
  },
  "Sandslash": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 100,
      "def": 110,
      "spa": 45,
      "spd": 55,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 163,
    "growthRate": "MediumFast",
    "dexId": 28
  },
  "Nidoran F": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 47,
      "def": 52,
      "spa": 40,
      "spd": 40,
      "spe": 41
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 59,
    "growthRate": "MediumSlow",
    "dexId": 29
  },
  "Nidorina": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 62,
      "def": 67,
      "spa": 55,
      "spd": 55,
      "spe": 56
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 117,
    "growthRate": "MediumSlow",
    "dexId": 30
  },
  "Nidoqueen": {
    "types": [
      "poison",
      "ground"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 82,
      "def": 87,
      "spa": 75,
      "spd": 85,
      "spe": 76
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 194,
    "growthRate": "MediumSlow",
    "dexId": 31
  },
  "Nidoran M": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 46,
      "atk": 57,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 60,
    "growthRate": "MediumSlow",
    "dexId": 32
  },
  "Nidorino": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 61,
      "atk": 72,
      "def": 57,
      "spa": 55,
      "spd": 55,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 118,
    "growthRate": "MediumSlow",
    "dexId": 33
  },
  "Nidoking": {
    "types": [
      "poison",
      "ground"
    ],
    "baseStats": {
      "hp": 81,
      "atk": 92,
      "def": 77,
      "spa": 85,
      "spd": 75,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 195,
    "growthRate": "MediumSlow",
    "dexId": 34
  },
  "Clefairy": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 45,
      "def": 48,
      "spa": 60,
      "spd": 65,
      "spe": 35
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 68,
    "growthRate": "Fast",
    "dexId": 35
  },
  "Clefable": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 70,
      "def": 73,
      "spa": 85,
      "spd": 90,
      "spe": 60
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 129,
    "growthRate": "Fast",
    "dexId": 36
  },
  "Vulpix": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 38,
      "atk": 41,
      "def": 40,
      "spa": 50,
      "spd": 65,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 63,
    "growthRate": "MediumFast",
    "dexId": 37
  },
  "Ninetales": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 73,
      "atk": 76,
      "def": 75,
      "spa": 81,
      "spd": 100,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 1
    },
    "baseExp": 178,
    "growthRate": "MediumFast",
    "dexId": 38
  },
  "Jigglypuff": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 115,
      "atk": 45,
      "def": 20,
      "spa": 45,
      "spd": 25,
      "spe": 20
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 76,
    "growthRate": "Fast",
    "dexId": 39
  },
  "Wigglytuff": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 140,
      "atk": 70,
      "def": 45,
      "spa": 75,
      "spd": 50,
      "spe": 45
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 109,
    "growthRate": "Fast",
    "dexId": 40
  },
  "Zubat": {
    "types": [
      "poison",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 30,
      "spd": 40,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 54,
    "growthRate": "MediumFast",
    "dexId": 41
  },
  "Golbat": {
    "types": [
      "poison",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 80,
      "def": 70,
      "spa": 65,
      "spd": 75,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 171,
    "growthRate": "MediumFast",
    "dexId": 42
  },
  "Oddish": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 50,
      "def": 55,
      "spa": 75,
      "spd": 65,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 78,
    "growthRate": "MediumSlow",
    "dexId": 43
  },
  "Gloom": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 65,
      "def": 70,
      "spa": 85,
      "spd": 75,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 132,
    "growthRate": "MediumSlow",
    "dexId": 44
  },
  "Vileplume": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 80,
      "def": 85,
      "spa": 100,
      "spd": 90,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 184,
    "growthRate": "MediumSlow",
    "dexId": 45
  },
  "Paras": {
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 70,
      "def": 55,
      "spa": 45,
      "spd": 55,
      "spe": 25
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 70,
    "growthRate": "MediumFast",
    "dexId": 46
  },
  "Parasect": {
    "types": [
      "bug",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 95,
      "def": 80,
      "spa": 60,
      "spd": 80,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 128,
    "growthRate": "MediumFast",
    "dexId": 47
  },
  "Venonat": {
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 55,
      "def": 50,
      "spa": 40,
      "spd": 55,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 75,
    "growthRate": "MediumFast",
    "dexId": 48
  },
  "Venomoth": {
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 65,
      "def": 60,
      "spa": 90,
      "spd": 75,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 138,
    "growthRate": "MediumFast",
    "dexId": 49
  },
  "Diglett": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 10,
      "atk": 55,
      "def": 25,
      "spa": 35,
      "spd": 45,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 81,
    "growthRate": "MediumFast",
    "dexId": 50
  },
  "Dugtrio": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 80,
      "def": 50,
      "spa": 50,
      "spd": 70,
      "spe": 120
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 153,
    "growthRate": "MediumFast",
    "dexId": 51
  },
  "Meowth": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 40,
      "spd": 40,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 69,
    "growthRate": "MediumFast",
    "dexId": 52
  },
  "Persian": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 70,
      "def": 60,
      "spa": 65,
      "spd": 65,
      "spe": 115
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 148,
    "growthRate": "MediumFast",
    "dexId": 53
  },
  "Psyduck": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 52,
      "def": 48,
      "spa": 65,
      "spd": 50,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 80,
    "growthRate": "MediumFast",
    "dexId": 54
  },
  "Golduck": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 82,
      "def": 78,
      "spa": 95,
      "spd": 80,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 174,
    "growthRate": "MediumFast",
    "dexId": 55
  },
  "Mankey": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 80,
      "def": 35,
      "spa": 35,
      "spd": 45,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 74,
    "growthRate": "MediumFast",
    "dexId": 56
  },
  "Primeape": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 105,
      "def": 60,
      "spa": 60,
      "spd": 70,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 149,
    "growthRate": "MediumFast",
    "dexId": 57
  },
  "Growlithe": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 70,
      "def": 45,
      "spa": 70,
      "spd": 50,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 91,
    "growthRate": "Slow",
    "dexId": 58
  },
  "Arcanine": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 110,
      "def": 80,
      "spa": 100,
      "spd": 80,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 213,
    "growthRate": "Slow",
    "dexId": 59
  },
  "Poliwag": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 50,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 77,
    "growthRate": "MediumSlow",
    "dexId": 60
  },
  "Poliwhirl": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 65,
      "def": 65,
      "spa": 50,
      "spd": 50,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 131,
    "growthRate": "MediumSlow",
    "dexId": 61
  },
  "Poliwrath": {
    "types": [
      "water",
      "fighting"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 85,
      "def": 95,
      "spa": 70,
      "spd": 90,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 3,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 185,
    "growthRate": "MediumSlow",
    "dexId": 62
  },
  "Abra": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 25,
      "atk": 20,
      "def": 15,
      "spa": 105,
      "spd": 55,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 73,
    "growthRate": "MediumSlow",
    "dexId": 63
  },
  "Kadabra": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 35,
      "def": 30,
      "spa": 120,
      "spd": 70,
      "spe": 105
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 145,
    "growthRate": "MediumSlow",
    "dexId": 64
  },
  "Alakazam": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 50,
      "def": 45,
      "spa": 135,
      "spd": 85,
      "spe": 120
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 186,
    "growthRate": "MediumSlow",
    "dexId": 65
  },
  "Machop": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 80,
      "def": 50,
      "spa": 35,
      "spd": 35,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 88,
    "growthRate": "MediumSlow",
    "dexId": 66
  },
  "Machoke": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 100,
      "def": 70,
      "spa": 50,
      "spd": 60,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 146,
    "growthRate": "MediumSlow",
    "dexId": 67
  },
  "Machamp": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 130,
      "def": 80,
      "spa": 65,
      "spd": 85,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 193,
    "growthRate": "MediumSlow",
    "dexId": 68
  },
  "Bellsprout": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 75,
      "def": 35,
      "spa": 70,
      "spd": 30,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 84,
    "growthRate": "MediumSlow",
    "dexId": 69
  },
  "Weepinbell": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 90,
      "def": 50,
      "spa": 85,
      "spd": 45,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 151,
    "growthRate": "MediumSlow",
    "dexId": 70
  },
  "Victreebel": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 100,
      "spd": 60,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 191,
    "growthRate": "MediumSlow",
    "dexId": 71
  },
  "Tentacool": {
    "types": [
      "water",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 40,
      "def": 35,
      "spa": 50,
      "spd": 100,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 105,
    "growthRate": "Slow",
    "dexId": 72
  },
  "Tentacruel": {
    "types": [
      "water",
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 70,
      "def": 65,
      "spa": 80,
      "spd": 120,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 205,
    "growthRate": "Slow",
    "dexId": 73
  },
  "Geodude": {
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 80,
      "def": 100,
      "spa": 30,
      "spd": 30,
      "spe": 20
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 86,
    "growthRate": "MediumSlow",
    "dexId": 74
  },
  "Graveler": {
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 95,
      "def": 115,
      "spa": 45,
      "spd": 45,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 134,
    "growthRate": "MediumSlow",
    "dexId": 75
  },
  "Golem": {
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 110,
      "def": 130,
      "spa": 55,
      "spd": 65,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 3,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 177,
    "growthRate": "MediumSlow",
    "dexId": 76
  },
  "Ponyta": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 85,
      "def": 55,
      "spa": 65,
      "spd": 65,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 152,
    "growthRate": "MediumFast",
    "dexId": 77
  },
  "Rapidash": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 100,
      "def": 70,
      "spa": 80,
      "spd": 80,
      "spe": 105
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 192,
    "growthRate": "MediumFast",
    "dexId": 78
  },
  "Slowpoke": {
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 65,
      "def": 65,
      "spa": 40,
      "spd": 40,
      "spe": 15
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 99,
    "growthRate": "MediumFast",
    "dexId": 79
  },
  "Slowbro": {
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 75,
      "def": 110,
      "spa": 100,
      "spd": 80,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 164,
    "growthRate": "MediumFast",
    "dexId": 80
  },
  "Magnemite": {
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 25,
      "atk": 35,
      "def": 70,
      "spa": 95,
      "spd": 55,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 89,
    "growthRate": "MediumFast",
    "dexId": 81
  },
  "Magneton": {
    "types": [
      "electric",
      "steel"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 60,
      "def": 95,
      "spa": 120,
      "spd": 70,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 161,
    "growthRate": "MediumFast",
    "dexId": 82
  },
  "Farfetchd": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 52,
      "atk": 65,
      "def": 55,
      "spa": 58,
      "spd": 62,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 94,
    "growthRate": "MediumFast",
    "dexId": 83
  },
  "Doduo": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 85,
      "def": 45,
      "spa": 35,
      "spd": 35,
      "spe": 75
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 96,
    "growthRate": "MediumFast",
    "dexId": 84
  },
  "Dodrio": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 110,
      "def": 70,
      "spa": 60,
      "spd": 60,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 158,
    "growthRate": "MediumFast",
    "dexId": 85
  },
  "Seel": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 45,
      "def": 55,
      "spa": 45,
      "spd": 70,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 100,
    "growthRate": "MediumFast",
    "dexId": 86
  },
  "Dewgong": {
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 70,
      "def": 80,
      "spa": 70,
      "spd": 95,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 176,
    "growthRate": "MediumFast",
    "dexId": 87
  },
  "Grimer": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 80,
      "def": 50,
      "spa": 40,
      "spd": 50,
      "spe": 25
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 90,
    "growthRate": "MediumFast",
    "dexId": 88
  },
  "Muk": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 105,
      "def": 75,
      "spa": 65,
      "spd": 100,
      "spe": 50
    },
    "evYield": {
      "hp": 1,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 157,
    "growthRate": "MediumFast",
    "dexId": 89
  },
  "Shellder": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 65,
      "def": 100,
      "spa": 45,
      "spd": 25,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 97,
    "growthRate": "Slow",
    "dexId": 90
  },
  "Cloyster": {
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 95,
      "def": 180,
      "spa": 85,
      "spd": 45,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 203,
    "growthRate": "Slow",
    "dexId": 91
  },
  "Gastly": {
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 35,
      "def": 30,
      "spa": 100,
      "spd": 35,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 95,
    "growthRate": "MediumSlow",
    "dexId": 92
  },
  "Haunter": {
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 50,
      "def": 45,
      "spa": 115,
      "spd": 55,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 126,
    "growthRate": "MediumSlow",
    "dexId": 93
  },
  "Gengar": {
    "types": [
      "ghost",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 75,
      "spe": 110
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 190,
    "growthRate": "MediumSlow",
    "dexId": 94
  },
  "Onix": {
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 45,
      "def": 160,
      "spa": 30,
      "spd": 45,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 108,
    "growthRate": "MediumFast",
    "dexId": 95
  },
  "Drowzee": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 48,
      "def": 45,
      "spa": 43,
      "spd": 90,
      "spe": 42
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 102,
    "growthRate": "MediumFast",
    "dexId": 96
  },
  "Hypno": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 73,
      "def": 70,
      "spa": 73,
      "spd": 115,
      "spe": 67
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 165,
    "growthRate": "MediumFast",
    "dexId": 97
  },
  "Krabby": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 105,
      "def": 90,
      "spa": 25,
      "spd": 25,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 115,
    "growthRate": "MediumFast",
    "dexId": 98
  },
  "Kingler": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 130,
      "def": 115,
      "spa": 50,
      "spd": 50,
      "spe": 75
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 206,
    "growthRate": "MediumFast",
    "dexId": 99
  },
  "Voltorb": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 30,
      "def": 50,
      "spa": 55,
      "spd": 55,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 103,
    "growthRate": "MediumFast",
    "dexId": 100
  },
  "Electrode": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 70,
      "spa": 80,
      "spd": 80,
      "spe": 140
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 150,
    "growthRate": "MediumFast",
    "dexId": 101
  },
  "Exeggcute": {
    "types": [
      "grass",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 40,
      "def": 80,
      "spa": 60,
      "spd": 45,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 98,
    "growthRate": "Slow",
    "dexId": 102
  },
  "Exeggutor": {
    "types": [
      "grass",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 95,
      "def": 85,
      "spa": 125,
      "spd": 65,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 212,
    "growthRate": "Slow",
    "dexId": 103
  },
  "Cubone": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 95,
      "spa": 40,
      "spd": 50,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 87,
    "growthRate": "MediumFast",
    "dexId": 104
  },
  "Marowak": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 80,
      "def": 110,
      "spa": 50,
      "spd": 80,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 124,
    "growthRate": "MediumFast",
    "dexId": 105
  },
  "Hitmonlee": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 120,
      "def": 53,
      "spa": 35,
      "spd": 110,
      "spe": 87
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 139,
    "growthRate": "MediumFast",
    "dexId": 106
  },
  "Hitmonchan": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 105,
      "def": 79,
      "spa": 35,
      "spd": 110,
      "spe": 76
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 140,
    "growthRate": "MediumFast",
    "dexId": 107
  },
  "Lickitung": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 55,
      "def": 75,
      "spa": 60,
      "spd": 75,
      "spe": 30
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 127,
    "growthRate": "MediumFast",
    "dexId": 108
  },
  "Koffing": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 65,
      "def": 95,
      "spa": 60,
      "spd": 45,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 114,
    "growthRate": "MediumFast",
    "dexId": 109
  },
  "Weezing": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 90,
      "def": 120,
      "spa": 85,
      "spd": 70,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 173,
    "growthRate": "MediumFast",
    "dexId": 110
  },
  "Rhyhorn": {
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 85,
      "def": 95,
      "spa": 30,
      "spd": 30,
      "spe": 25
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 135,
    "growthRate": "Slow",
    "dexId": 111
  },
  "Rhydon": {
    "types": [
      "ground",
      "rock"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 130,
      "def": 120,
      "spa": 45,
      "spd": 45,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 204,
    "growthRate": "Slow",
    "dexId": 112
  },
  "Chansey": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 250,
      "atk": 5,
      "def": 5,
      "spa": 35,
      "spd": 105,
      "spe": 50
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 255,
    "growthRate": "Fast",
    "dexId": 113
  },
  "Tangela": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 55,
      "def": 115,
      "spa": 100,
      "spd": 40,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 166,
    "growthRate": "MediumFast",
    "dexId": 114
  },
  "Kangaskhan": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 95,
      "def": 80,
      "spa": 40,
      "spd": 80,
      "spe": 90
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 175,
    "growthRate": "MediumFast",
    "dexId": 115
  },
  "Horsea": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 40,
      "def": 70,
      "spa": 70,
      "spd": 25,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 83,
    "growthRate": "MediumFast",
    "dexId": 116
  },
  "Seadra": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 65,
      "def": 95,
      "spa": 95,
      "spd": 45,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 155,
    "growthRate": "MediumFast",
    "dexId": 117
  },
  "Goldeen": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 67,
      "def": 60,
      "spa": 35,
      "spd": 50,
      "spe": 63
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 111,
    "growthRate": "MediumFast",
    "dexId": 118
  },
  "Seaking": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 92,
      "def": 65,
      "spa": 65,
      "spd": 80,
      "spe": 68
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 170,
    "growthRate": "MediumFast",
    "dexId": 119
  },
  "Staryu": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 45,
      "def": 55,
      "spa": 70,
      "spd": 55,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 106,
    "growthRate": "Slow",
    "dexId": 120
  },
  "Starmie": {
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 75,
      "def": 85,
      "spa": 100,
      "spd": 85,
      "spe": 115
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 207,
    "growthRate": "Slow",
    "dexId": 121
  },
  "Mr Mime": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 65,
      "spa": 100,
      "spd": 120,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 136,
    "growthRate": "MediumFast",
    "dexId": 122
  },
  "Scyther": {
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 110,
      "def": 80,
      "spa": 55,
      "spd": 80,
      "spe": 105
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 187,
    "growthRate": "MediumFast",
    "dexId": 123
  },
  "Jynx": {
    "types": [
      "ice",
      "psychic"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 50,
      "def": 35,
      "spa": 115,
      "spd": 95,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 137,
    "growthRate": "MediumFast",
    "dexId": 124
  },
  "Electabuzz": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 83,
      "def": 57,
      "spa": 95,
      "spd": 85,
      "spe": 105
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 156,
    "growthRate": "MediumFast",
    "dexId": 125
  },
  "Magmar": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 95,
      "def": 57,
      "spa": 100,
      "spd": 85,
      "spe": 93
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 167,
    "growthRate": "MediumFast",
    "dexId": 126
  },
  "Pinsir": {
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 125,
      "def": 100,
      "spa": 55,
      "spd": 70,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 200,
    "growthRate": "Slow",
    "dexId": 127
  },
  "Tauros": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 100,
      "def": 95,
      "spa": 40,
      "spd": 70,
      "spe": 110
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 211,
    "growthRate": "Slow",
    "dexId": 128
  },
  "Magikarp": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 10,
      "def": 55,
      "spa": 15,
      "spd": 20,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 20,
    "growthRate": "Slow",
    "dexId": 129
  },
  "Gyarados": {
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 125,
      "def": 79,
      "spa": 60,
      "spd": 100,
      "spe": 81
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 214,
    "growthRate": "Slow",
    "dexId": 130
  },
  "Lapras": {
    "types": [
      "water",
      "ice"
    ],
    "baseStats": {
      "hp": 130,
      "atk": 85,
      "def": 80,
      "spa": 85,
      "spd": 95,
      "spe": 60
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 219,
    "growthRate": "Slow",
    "dexId": 131
  },
  "Ditto": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 48,
      "atk": 48,
      "def": 48,
      "spa": 48,
      "spd": 48,
      "spe": 48
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 61,
    "growthRate": "MediumFast",
    "dexId": 132
  },
  "Eevee": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 55,
      "def": 50,
      "spa": 45,
      "spd": 65,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 92,
    "growthRate": "MediumFast",
    "dexId": 133
  },
  "Vaporeon": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 130,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 65
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 196,
    "growthRate": "MediumFast",
    "dexId": 134
  },
  "Jolteon": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 130
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 197,
    "growthRate": "MediumFast",
    "dexId": 135
  },
  "Flareon": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 130,
      "def": 60,
      "spa": 95,
      "spd": 110,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 198,
    "growthRate": "MediumFast",
    "dexId": 136
  },
  "Porygon": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 60,
      "def": 70,
      "spa": 85,
      "spd": 75,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 130,
    "growthRate": "MediumFast",
    "dexId": 137
  },
  "Omanyte": {
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 40,
      "def": 100,
      "spa": 90,
      "spd": 55,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 120,
    "growthRate": "MediumFast",
    "dexId": 138
  },
  "Omastar": {
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 60,
      "def": 125,
      "spa": 115,
      "spd": 70,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 199,
    "growthRate": "MediumFast",
    "dexId": 139
  },
  "Kabuto": {
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 80,
      "def": 90,
      "spa": 55,
      "spd": 45,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 119,
    "growthRate": "MediumFast",
    "dexId": 140
  },
  "Kabutops": {
    "types": [
      "rock",
      "water"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 115,
      "def": 105,
      "spa": 65,
      "spd": 70,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 201,
    "growthRate": "MediumFast",
    "dexId": 141
  },
  "Aerodactyl": {
    "types": [
      "rock",
      "flying"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 60,
      "spd": 75,
      "spe": 130
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 202,
    "growthRate": "Slow",
    "dexId": 142
  },
  "Snorlax": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 160,
      "atk": 110,
      "def": 65,
      "spa": 65,
      "spd": 110,
      "spe": 30
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 154,
    "growthRate": "Slow",
    "dexId": 143
  },
  "Articuno": {
    "types": [
      "ice",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 85,
      "def": 100,
      "spa": 95,
      "spd": 125,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 215,
    "growthRate": "Slow",
    "dexId": 144
  },
  "Zapdos": {
    "types": [
      "electric",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 90,
      "def": 85,
      "spa": 125,
      "spd": 90,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 216,
    "growthRate": "Slow",
    "dexId": 145
  },
  "Moltres": {
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 100,
      "def": 90,
      "spa": 125,
      "spd": 85,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 217,
    "growthRate": "Slow",
    "dexId": 146
  },
  "Dratini": {
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 41,
      "atk": 64,
      "def": 45,
      "spa": 50,
      "spd": 50,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 67,
    "growthRate": "Slow",
    "dexId": 147
  },
  "Dragonair": {
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 61,
      "atk": 84,
      "def": 65,
      "spa": 70,
      "spd": 70,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 144,
    "growthRate": "Slow",
    "dexId": 148
  },
  "Dragonite": {
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 91,
      "atk": 134,
      "def": 95,
      "spa": 100,
      "spd": 100,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 218,
    "growthRate": "Slow",
    "dexId": 149
  },
  "Mewtwo": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 106,
      "atk": 110,
      "def": 90,
      "spa": 154,
      "spd": 90,
      "spe": 130
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 220,
    "growthRate": "Slow",
    "dexId": 150
  },
  "Mew": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 64,
    "growthRate": "MediumSlow",
    "dexId": 151
  },
  "Chikorita": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 49,
      "def": 65,
      "spa": 49,
      "spd": 65,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 64,
    "growthRate": "MediumSlow",
    "dexId": 152
  },
  "Bayleef": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 62,
      "def": 80,
      "spa": 63,
      "spd": 80,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 141,
    "growthRate": "MediumSlow",
    "dexId": 153
  },
  "Meganium": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 82,
      "def": 100,
      "spa": 83,
      "spd": 100,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 208,
    "growthRate": "MediumSlow",
    "dexId": 154
  },
  "Cyndaquil": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 39,
      "atk": 52,
      "def": 43,
      "spa": 60,
      "spd": 50,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 65,
    "growthRate": "MediumSlow",
    "dexId": 155
  },
  "Quilava": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 58,
      "atk": 64,
      "def": 58,
      "spa": 80,
      "spd": 65,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 142,
    "growthRate": "MediumSlow",
    "dexId": 156
  },
  "Typhlosion": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spa": 109,
      "spd": 85,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 209,
    "growthRate": "MediumSlow",
    "dexId": 157
  },
  "Totodile": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 65,
      "def": 64,
      "spa": 44,
      "spd": 48,
      "spe": 43
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 66,
    "growthRate": "MediumSlow",
    "dexId": 158
  },
  "Croconaw": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 80,
      "def": 80,
      "spa": 59,
      "spd": 63,
      "spe": 58
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 143,
    "growthRate": "MediumSlow",
    "dexId": 159
  },
  "Feraligatr": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 105,
      "def": 100,
      "spa": 79,
      "spd": 83,
      "spe": 78
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 210,
    "growthRate": "MediumSlow",
    "dexId": 160
  },
  "Sentret": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 46,
      "def": 34,
      "spa": 35,
      "spd": 45,
      "spe": 20
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 57,
    "growthRate": "MediumFast",
    "dexId": 161
  },
  "Furret": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 76,
      "def": 64,
      "spa": 45,
      "spd": 55,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 116,
    "growthRate": "MediumFast",
    "dexId": 162
  },
  "Hoothoot": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 30,
      "def": 30,
      "spa": 36,
      "spd": 56,
      "spe": 50
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 58,
    "growthRate": "MediumFast",
    "dexId": 163
  },
  "Noctowl": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 50,
      "def": 50,
      "spa": 76,
      "spd": 96,
      "spe": 70
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 162,
    "growthRate": "MediumFast",
    "dexId": 164
  },
  "Ledyba": {
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 20,
      "def": 30,
      "spa": 40,
      "spd": 80,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 54,
    "growthRate": "Fast",
    "dexId": 165
  },
  "Ledian": {
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 35,
      "def": 50,
      "spa": 55,
      "spd": 110,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 134,
    "growthRate": "Fast",
    "dexId": 166
  },
  "Spinarak": {
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 60,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 54,
    "growthRate": "Fast",
    "dexId": 167
  },
  "Ariados": {
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 90,
      "def": 70,
      "spa": 60,
      "spd": 60,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 134,
    "growthRate": "Fast",
    "dexId": 168
  },
  "Crobat": {
    "types": [
      "poison",
      "flying"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 90,
      "def": 80,
      "spa": 70,
      "spd": 80,
      "spe": 130
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 3
    },
    "baseExp": 204,
    "growthRate": "MediumFast",
    "dexId": 169
  },
  "Chinchou": {
    "types": [
      "water",
      "electric"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 38,
      "def": 38,
      "spa": 56,
      "spd": 56,
      "spe": 67
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 90,
    "growthRate": "Slow",
    "dexId": 170
  },
  "Lanturn": {
    "types": [
      "water",
      "electric"
    ],
    "baseStats": {
      "hp": 125,
      "atk": 58,
      "def": 58,
      "spa": 76,
      "spd": 76,
      "spe": 67
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 156,
    "growthRate": "Slow",
    "dexId": 171
  },
  "Pichu": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 40,
      "def": 15,
      "spa": 35,
      "spd": 35,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 42,
    "growthRate": "MediumFast",
    "dexId": 172
  },
  "Cleffa": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 25,
      "def": 28,
      "spa": 45,
      "spd": 55,
      "spe": 15
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 37,
    "growthRate": "Fast",
    "dexId": 173
  },
  "Igglybuff": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 30,
      "def": 15,
      "spa": 40,
      "spd": 20,
      "spe": 15
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 39,
    "growthRate": "Fast",
    "dexId": 174
  },
  "Togepi": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 20,
      "def": 65,
      "spa": 40,
      "spd": 65,
      "spe": 20
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 74,
    "growthRate": "Fast",
    "dexId": 175
  },
  "Togetic": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 40,
      "def": 85,
      "spa": 80,
      "spd": 105,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 114,
    "growthRate": "Fast",
    "dexId": 176
  },
  "Natu": {
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 50,
      "def": 45,
      "spa": 70,
      "spd": 45,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 73,
    "growthRate": "MediumFast",
    "dexId": 177
  },
  "Xatu": {
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 75,
      "def": 70,
      "spa": 95,
      "spd": 70,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 171,
    "growthRate": "MediumFast",
    "dexId": 178
  },
  "Mareep": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 40,
      "def": 40,
      "spa": 65,
      "spd": 45,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 59,
    "growthRate": "MediumSlow",
    "dexId": 179
  },
  "Flaaffy": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 55,
      "def": 55,
      "spa": 80,
      "spd": 60,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 117,
    "growthRate": "MediumSlow",
    "dexId": 180
  },
  "Ampharos": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 75,
      "def": 75,
      "spa": 115,
      "spd": 90,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 194,
    "growthRate": "MediumSlow",
    "dexId": 181
  },
  "Bellossom": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 80,
      "def": 85,
      "spa": 90,
      "spd": 100,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 184,
    "growthRate": "MediumSlow",
    "dexId": 182
  },
  "Marill": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 20,
      "def": 50,
      "spa": 20,
      "spd": 50,
      "spe": 40
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 58,
    "growthRate": "Fast",
    "dexId": 183
  },
  "Azumarill": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 50,
      "def": 80,
      "spa": 50,
      "spd": 80,
      "spe": 50
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 153,
    "growthRate": "Fast",
    "dexId": 184
  },
  "Sudowoodo": {
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 100,
      "def": 115,
      "spa": 30,
      "spd": 65,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 135,
    "growthRate": "MediumFast",
    "dexId": 185
  },
  "Politoed": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 75,
      "def": 75,
      "spa": 90,
      "spd": 100,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 185,
    "growthRate": "MediumSlow",
    "dexId": 186
  },
  "Hoppip": {
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 35,
      "def": 40,
      "spa": 35,
      "spd": 55,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 74,
    "growthRate": "MediumSlow",
    "dexId": 187
  },
  "Skiploom": {
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 45,
      "def": 50,
      "spa": 45,
      "spd": 65,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 136,
    "growthRate": "MediumSlow",
    "dexId": 188
  },
  "Jumpluff": {
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 55,
      "def": 70,
      "spa": 55,
      "spd": 85,
      "spe": 110
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 3
    },
    "baseExp": 176,
    "growthRate": "MediumSlow",
    "dexId": 189
  },
  "Aipom": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 70,
      "def": 55,
      "spa": 40,
      "spd": 55,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 94,
    "growthRate": "Fast",
    "dexId": 190
  },
  "Sunkern": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 30,
      "def": 30,
      "spa": 30,
      "spd": 30,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 52,
    "growthRate": "MediumSlow",
    "dexId": 191
  },
  "Sunflora": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 75,
      "def": 55,
      "spa": 105,
      "spd": 85,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 146,
    "growthRate": "MediumSlow",
    "dexId": 192
  },
  "Yanma": {
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 65,
      "def": 45,
      "spa": 75,
      "spd": 45,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 147,
    "growthRate": "MediumFast",
    "dexId": 193
  },
  "Wooper": {
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 45,
      "def": 45,
      "spa": 25,
      "spd": 25,
      "spe": 15
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 52,
    "growthRate": "MediumFast",
    "dexId": 194
  },
  "Quagsire": {
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 85,
      "def": 85,
      "spa": 65,
      "spd": 65,
      "spe": 35
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 137,
    "growthRate": "MediumFast",
    "dexId": 195
  },
  "Espeon": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 95,
      "spe": 110
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 197,
    "growthRate": "MediumFast",
    "dexId": 196
  },
  "Umbreon": {
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 65,
      "def": 110,
      "spa": 60,
      "spd": 130,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 197,
    "growthRate": "MediumFast",
    "dexId": 197
  },
  "Murkrow": {
    "types": [
      "dark",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 42,
      "spa": 85,
      "spd": 42,
      "spe": 91
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 107,
    "growthRate": "MediumSlow",
    "dexId": 198
  },
  "Slowking": {
    "types": [
      "water",
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 75,
      "def": 80,
      "spa": 100,
      "spd": 110,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 164,
    "growthRate": "MediumFast",
    "dexId": 199
  },
  "Misdreavus": {
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 60,
      "spa": 85,
      "spd": 85,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 147,
    "growthRate": "Fast",
    "dexId": 200
  },
  "Unown": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 48,
      "atk": 72,
      "def": 48,
      "spa": 72,
      "spd": 48,
      "spe": 48
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 61,
    "growthRate": "MediumFast",
    "dexId": 201
  },
  "Wobbuffet": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 190,
      "atk": 33,
      "def": 58,
      "spa": 33,
      "spd": 58,
      "spe": 33
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 177,
    "growthRate": "MediumFast",
    "dexId": 202
  },
  "Girafarig": {
    "types": [
      "normal",
      "psychic"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 80,
      "def": 65,
      "spa": 90,
      "spd": 65,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 149,
    "growthRate": "MediumFast",
    "dexId": 203
  },
  "Pineco": {
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 65,
      "def": 90,
      "spa": 35,
      "spd": 35,
      "spe": 15
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 60,
    "growthRate": "MediumFast",
    "dexId": 204
  },
  "Forretress": {
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 90,
      "def": 140,
      "spa": 60,
      "spd": 60,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 118,
    "growthRate": "MediumFast",
    "dexId": 205
  },
  "Dunsparce": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 70,
      "def": 70,
      "spa": 65,
      "spd": 65,
      "spe": 45
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 75,
    "growthRate": "MediumFast",
    "dexId": 206
  },
  "Gligar": {
    "types": [
      "ground",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 75,
      "def": 105,
      "spa": 35,
      "spd": 65,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 108,
    "growthRate": "MediumSlow",
    "dexId": 207
  },
  "Steelix": {
    "types": [
      "steel",
      "ground"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 85,
      "def": 200,
      "spa": 55,
      "spd": 65,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 196,
    "growthRate": "MediumFast",
    "dexId": 208
  },
  "Snubbull": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 80,
      "def": 50,
      "spa": 40,
      "spd": 40,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 63,
    "growthRate": "Fast",
    "dexId": 209
  },
  "Granbull": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 120,
      "def": 75,
      "spa": 60,
      "spd": 60,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 178,
    "growthRate": "Fast",
    "dexId": 210
  },
  "Qwilfish": {
    "types": [
      "water",
      "poison"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 95,
      "def": 75,
      "spa": 55,
      "spd": 55,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 100,
    "growthRate": "MediumFast",
    "dexId": 211
  },
  "Scizor": {
    "types": [
      "bug",
      "steel"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 130,
      "def": 100,
      "spa": 55,
      "spd": 80,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 200,
    "growthRate": "MediumFast",
    "dexId": 212
  },
  "Shuckle": {
    "types": [
      "bug",
      "rock"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 10,
      "def": 230,
      "spa": 10,
      "spd": 230,
      "spe": 5
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 80,
    "growthRate": "MediumSlow",
    "dexId": 213
  },
  "Heracross": {
    "types": [
      "bug",
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 125,
      "def": 75,
      "spa": 40,
      "spd": 95,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 200,
    "growthRate": "Slow",
    "dexId": 214
  },
  "Sneasel": {
    "types": [
      "dark",
      "ice"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 95,
      "def": 55,
      "spa": 35,
      "spd": 75,
      "spe": 115
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 132,
    "growthRate": "MediumSlow",
    "dexId": 215
  },
  "Teddiursa": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 80,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 124,
    "growthRate": "MediumFast",
    "dexId": 216
  },
  "Ursaring": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 130,
      "def": 75,
      "spa": 75,
      "spd": 75,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 189,
    "growthRate": "MediumFast",
    "dexId": 217
  },
  "Slugma": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 40,
      "def": 40,
      "spa": 70,
      "spd": 40,
      "spe": 20
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 78,
    "growthRate": "MediumFast",
    "dexId": 218
  },
  "Magcargo": {
    "types": [
      "fire",
      "rock"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 120,
      "spa": 80,
      "spd": 80,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 154,
    "growthRate": "MediumFast",
    "dexId": 219
  },
  "Swinub": {
    "types": [
      "ice",
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 40,
      "spa": 30,
      "spd": 30,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 78,
    "growthRate": "Slow",
    "dexId": 220
  },
  "Piloswine": {
    "types": [
      "ice",
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 80,
      "spa": 60,
      "spd": 60,
      "spe": 50
    },
    "evYield": {
      "hp": 1,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 160,
    "growthRate": "Slow",
    "dexId": 221
  },
  "Corsola": {
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 55,
      "def": 85,
      "spa": 65,
      "spd": 85,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 113,
    "growthRate": "Fast",
    "dexId": 222
  },
  "Remoraid": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 65,
      "def": 35,
      "spa": 65,
      "spd": 35,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 78,
    "growthRate": "MediumFast",
    "dexId": 223
  },
  "Octillery": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 105,
      "def": 75,
      "spa": 105,
      "spd": 75,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 164,
    "growthRate": "MediumFast",
    "dexId": 224
  },
  "Delibird": {
    "types": [
      "ice",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 55,
      "def": 45,
      "spa": 65,
      "spd": 45,
      "spe": 75
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 183,
    "growthRate": "Fast",
    "dexId": 225
  },
  "Mantine": {
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 40,
      "def": 70,
      "spa": 80,
      "spd": 140,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 168,
    "growthRate": "Slow",
    "dexId": 226
  },
  "Skarmory": {
    "types": [
      "steel",
      "flying"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 80,
      "def": 140,
      "spa": 40,
      "spd": 70,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 168,
    "growthRate": "Slow",
    "dexId": 227
  },
  "Houndour": {
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 60,
      "def": 30,
      "spa": 80,
      "spd": 50,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 114,
    "growthRate": "Slow",
    "dexId": 228
  },
  "Houndoom": {
    "types": [
      "dark",
      "fire"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 90,
      "def": 50,
      "spa": 110,
      "spd": 80,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 204,
    "growthRate": "Slow",
    "dexId": 229
  },
  "Kingdra": {
    "types": [
      "water",
      "dragon"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 95,
      "def": 95,
      "spa": 95,
      "spd": 95,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 1,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 207,
    "growthRate": "MediumFast",
    "dexId": 230
  },
  "Phanpy": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 60,
      "def": 60,
      "spa": 40,
      "spd": 40,
      "spe": 40
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 124,
    "growthRate": "MediumFast",
    "dexId": 231
  },
  "Donphan": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 120,
      "def": 120,
      "spa": 60,
      "spd": 60,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 189,
    "growthRate": "MediumFast",
    "dexId": 232
  },
  "Porygon2": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 80,
      "def": 90,
      "spa": 105,
      "spd": 95,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 180,
    "growthRate": "MediumFast",
    "dexId": 233
  },
  "Stantler": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 73,
      "atk": 95,
      "def": 62,
      "spa": 85,
      "spd": 65,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 165,
    "growthRate": "Slow",
    "dexId": 234
  },
  "Smeargle": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 20,
      "def": 35,
      "spa": 20,
      "spd": 45,
      "spe": 75
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 106,
    "growthRate": "Fast",
    "dexId": 235
  },
  "Tyrogue": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 35,
      "def": 35,
      "spa": 35,
      "spd": 35,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 91,
    "growthRate": "MediumFast",
    "dexId": 236
  },
  "Hitmontop": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 95,
      "def": 95,
      "spa": 35,
      "spd": 110,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 138,
    "growthRate": "MediumFast",
    "dexId": 237
  },
  "Smoochum": {
    "types": [
      "ice",
      "psychic"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 30,
      "def": 15,
      "spa": 85,
      "spd": 65,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 87,
    "growthRate": "MediumFast",
    "dexId": 238
  },
  "Elekid": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 63,
      "def": 37,
      "spa": 65,
      "spd": 55,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 106,
    "growthRate": "MediumFast",
    "dexId": 239
  },
  "Magby": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 75,
      "def": 37,
      "spa": 70,
      "spd": 55,
      "spe": 83
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 117,
    "growthRate": "MediumFast",
    "dexId": 240
  },
  "Miltank": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 80,
      "def": 105,
      "spa": 40,
      "spd": 70,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 200,
    "growthRate": "Slow",
    "dexId": 241
  },
  "Blissey": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 255,
      "atk": 10,
      "def": 10,
      "spa": 75,
      "spd": 135,
      "spe": 55
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 255,
    "growthRate": "Fast",
    "dexId": 242
  },
  "Raikou": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 85,
      "def": 75,
      "spa": 115,
      "spd": 100,
      "spe": 115
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 216,
    "growthRate": "Slow",
    "dexId": 243
  },
  "Entei": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 115,
      "atk": 115,
      "def": 85,
      "spa": 90,
      "spd": 75,
      "spe": 100
    },
    "evYield": {
      "hp": 1,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 217,
    "growthRate": "Slow",
    "dexId": 244
  },
  "Suicune": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 75,
      "def": 115,
      "spa": 90,
      "spd": 115,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 215,
    "growthRate": "Slow",
    "dexId": 245
  },
  "Larvitar": {
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 64,
      "def": 50,
      "spa": 45,
      "spd": 50,
      "spe": 41
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 67,
    "growthRate": "Slow",
    "dexId": 246
  },
  "Pupitar": {
    "types": [
      "rock",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 84,
      "def": 70,
      "spa": 65,
      "spd": 70,
      "spe": 51
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 144,
    "growthRate": "Slow",
    "dexId": 247
  },
  "Tyranitar": {
    "types": [
      "rock",
      "dark"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 134,
      "def": 110,
      "spa": 95,
      "spd": 100,
      "spe": 61
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 218,
    "growthRate": "Slow",
    "dexId": 248
  },
  "Lugia": {
    "types": [
      "psychic",
      "flying"
    ],
    "baseStats": {
      "hp": 106,
      "atk": 90,
      "def": 130,
      "spa": 90,
      "spd": 154,
      "spe": 110
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 220,
    "growthRate": "Slow",
    "dexId": 249
  },
  "Ho Oh": {
    "types": [
      "fire",
      "flying"
    ],
    "baseStats": {
      "hp": 106,
      "atk": 130,
      "def": 90,
      "spa": 110,
      "spd": 154,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 220,
    "growthRate": "Slow",
    "dexId": 250
  },
  "Celebi": {
    "types": [
      "psychic",
      "grass"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 64,
    "growthRate": "MediumSlow",
    "dexId": 251
  },
  "Treecko": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 65,
      "spd": 55,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 65,
    "growthRate": "MediumSlow",
    "dexId": 252
  },
  "Grovyle": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 65,
      "def": 45,
      "spa": 85,
      "spd": 65,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 141,
    "growthRate": "MediumSlow",
    "dexId": 253
  },
  "Sceptile": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 85,
      "def": 65,
      "spa": 105,
      "spd": 85,
      "spe": 120
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 3
    },
    "baseExp": 208,
    "growthRate": "MediumSlow",
    "dexId": 254
  },
  "Torchic": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 60,
      "def": 40,
      "spa": 70,
      "spd": 50,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 65,
    "growthRate": "MediumSlow",
    "dexId": 255
  },
  "Combusken": {
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 60,
      "spa": 85,
      "spd": 60,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 142,
    "growthRate": "MediumSlow",
    "dexId": 256
  },
  "Blaziken": {
    "types": [
      "fire",
      "fighting"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 120,
      "def": 70,
      "spa": 110,
      "spd": 70,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 209,
    "growthRate": "MediumSlow",
    "dexId": 257
  },
  "Mudkip": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 70,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 65,
    "growthRate": "MediumSlow",
    "dexId": 258
  },
  "Marshtomp": {
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 85,
      "def": 70,
      "spa": 60,
      "spd": 70,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 143,
    "growthRate": "MediumSlow",
    "dexId": 259
  },
  "Swampert": {
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 110,
      "def": 90,
      "spa": 85,
      "spd": 90,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 210,
    "growthRate": "MediumSlow",
    "dexId": 260
  },
  "Poochyena": {
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 55,
      "def": 35,
      "spa": 30,
      "spd": 30,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 55,
    "growthRate": "MediumFast",
    "dexId": 261
  },
  "Mightyena": {
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 90,
      "def": 70,
      "spa": 60,
      "spd": 60,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 128,
    "growthRate": "MediumFast",
    "dexId": 262
  },
  "Zigzagoon": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 38,
      "atk": 30,
      "def": 41,
      "spa": 30,
      "spd": 41,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 60,
    "growthRate": "MediumFast",
    "dexId": 263
  },
  "Linoone": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 78,
      "atk": 70,
      "def": 61,
      "spa": 50,
      "spd": 61,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 128,
    "growthRate": "MediumFast",
    "dexId": 264
  },
  "Wurmple": {
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 45,
      "def": 35,
      "spa": 20,
      "spd": 30,
      "spe": 20
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 54,
    "growthRate": "MediumFast",
    "dexId": 265
  },
  "Silcoon": {
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 35,
      "def": 55,
      "spa": 25,
      "spd": 25,
      "spe": 15
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 71,
    "growthRate": "MediumFast",
    "dexId": 266
  },
  "Beautifly": {
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 70,
      "def": 50,
      "spa": 90,
      "spd": 50,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 161,
    "growthRate": "MediumFast",
    "dexId": 267
  },
  "Cascoon": {
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 35,
      "def": 55,
      "spa": 25,
      "spd": 25,
      "spe": 15
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 72,
    "growthRate": "MediumFast",
    "dexId": 268
  },
  "Dustox": {
    "types": [
      "bug",
      "poison"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 70,
      "spa": 50,
      "spd": 90,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 160,
    "growthRate": "MediumFast",
    "dexId": 269
  },
  "Lotad": {
    "types": [
      "water",
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 30,
      "def": 30,
      "spa": 40,
      "spd": 50,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 74,
    "growthRate": "MediumSlow",
    "dexId": 270
  },
  "Lombre": {
    "types": [
      "water",
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 50,
      "spa": 60,
      "spd": 70,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 141,
    "growthRate": "MediumSlow",
    "dexId": 271
  },
  "Ludicolo": {
    "types": [
      "water",
      "grass"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 70,
      "def": 70,
      "spa": 90,
      "spd": 100,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 181,
    "growthRate": "MediumSlow",
    "dexId": 272
  },
  "Seedot": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 40,
      "def": 50,
      "spa": 30,
      "spd": 30,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 74,
    "growthRate": "MediumSlow",
    "dexId": 273
  },
  "Nuzleaf": {
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 70,
      "def": 40,
      "spa": 60,
      "spd": 40,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 141,
    "growthRate": "MediumSlow",
    "dexId": 274
  },
  "Shiftry": {
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 100,
      "def": 60,
      "spa": 90,
      "spd": 60,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 181,
    "growthRate": "MediumSlow",
    "dexId": 275
  },
  "Nincada": {
    "types": [
      "bug",
      "ground"
    ],
    "baseStats": {
      "hp": 31,
      "atk": 45,
      "def": 90,
      "spa": 30,
      "spd": 30,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 65,
    "growthRate": "Erratic",
    "dexId": 276
  },
  "Ninjask": {
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 61,
      "atk": 90,
      "def": 45,
      "spa": 50,
      "spd": 50,
      "spe": 160
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 155,
    "growthRate": "Erratic",
    "dexId": 277
  },
  "Shedinja": {
    "types": [
      "bug",
      "ghost"
    ],
    "baseStats": {
      "hp": 1,
      "atk": 90,
      "def": 45,
      "spa": 30,
      "spd": 30,
      "spe": 40
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 95,
    "growthRate": "Erratic",
    "dexId": 278
  },
  "Taillow": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 55,
      "def": 30,
      "spa": 30,
      "spd": 30,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 59,
    "growthRate": "MediumSlow",
    "dexId": 279
  },
  "Swellow": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 60,
      "spa": 50,
      "spd": 50,
      "spe": 125
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 162,
    "growthRate": "MediumSlow",
    "dexId": 280
  },
  "Shroomish": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 40,
      "def": 60,
      "spa": 40,
      "spd": 60,
      "spe": 35
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 65,
    "growthRate": "Fluctuating",
    "dexId": 281
  },
  "Breloom": {
    "types": [
      "grass",
      "fighting"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 130,
      "def": 80,
      "spa": 60,
      "spd": 60,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 165,
    "growthRate": "Fluctuating",
    "dexId": 282
  },
  "Spinda": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 60,
      "spa": 60,
      "spd": 60,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 85,
    "growthRate": "Fast",
    "dexId": 283
  },
  "Wingull": {
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 30,
      "def": 30,
      "spa": 55,
      "spd": 30,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 64,
    "growthRate": "MediumFast",
    "dexId": 284
  },
  "Pelipper": {
    "types": [
      "water",
      "flying"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 100,
      "spa": 85,
      "spd": 70,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 164,
    "growthRate": "MediumFast",
    "dexId": 285
  },
  "Surskit": {
    "types": [
      "bug",
      "water"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 30,
      "def": 32,
      "spa": 50,
      "spd": 52,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 63,
    "growthRate": "MediumFast",
    "dexId": 286
  },
  "Masquerain": {
    "types": [
      "bug",
      "flying"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 60,
      "def": 62,
      "spa": 80,
      "spd": 82,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 128,
    "growthRate": "MediumFast",
    "dexId": 287
  },
  "Wailmer": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 130,
      "atk": 70,
      "def": 35,
      "spa": 70,
      "spd": 35,
      "spe": 60
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 137,
    "growthRate": "Fluctuating",
    "dexId": 288
  },
  "Wailord": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 170,
      "atk": 90,
      "def": 45,
      "spa": 90,
      "spd": 45,
      "spe": 60
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 206,
    "growthRate": "Fluctuating",
    "dexId": 289
  },
  "Skitty": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 45,
      "def": 45,
      "spa": 35,
      "spd": 35,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 65,
    "growthRate": "Fast",
    "dexId": 290
  },
  "Delcatty": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 65,
      "def": 65,
      "spa": 55,
      "spd": 55,
      "spe": 70
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 138,
    "growthRate": "Fast",
    "dexId": 291
  },
  "Kecleon": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 90,
      "def": 70,
      "spa": 60,
      "spd": 120,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 132,
    "growthRate": "MediumSlow",
    "dexId": 292
  },
  "Baltoy": {
    "types": [
      "ground",
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 40,
      "def": 55,
      "spa": 40,
      "spd": 70,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 58,
    "growthRate": "MediumFast",
    "dexId": 293
  },
  "Claydol": {
    "types": [
      "ground",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 70,
      "def": 105,
      "spa": 70,
      "spd": 120,
      "spe": 75
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 189,
    "growthRate": "MediumFast",
    "dexId": 294
  },
  "Nosepass": {
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 45,
      "def": 135,
      "spa": 45,
      "spd": 90,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 108,
    "growthRate": "MediumFast",
    "dexId": 295
  },
  "Torkoal": {
    "types": [
      "fire"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 85,
      "def": 140,
      "spa": 85,
      "spd": 70,
      "spe": 20
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 161,
    "growthRate": "MediumFast",
    "dexId": 296
  },
  "Sableye": {
    "types": [
      "dark",
      "ghost"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 75,
      "def": 75,
      "spa": 65,
      "spd": 65,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 98,
    "growthRate": "MediumSlow",
    "dexId": 297
  },
  "Barboach": {
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 48,
      "def": 43,
      "spa": 46,
      "spd": 41,
      "spe": 60
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 92,
    "growthRate": "MediumFast",
    "dexId": 298
  },
  "Whiscash": {
    "types": [
      "water",
      "ground"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 78,
      "def": 73,
      "spa": 76,
      "spd": 71,
      "spe": 60
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 158,
    "growthRate": "MediumFast",
    "dexId": 299
  },
  "Luvdisc": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 43,
      "atk": 30,
      "def": 55,
      "spa": 40,
      "spd": 65,
      "spe": 97
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 110,
    "growthRate": "Fast",
    "dexId": 300
  },
  "Corphish": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 43,
      "atk": 80,
      "def": 65,
      "spa": 50,
      "spd": 35,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 111,
    "growthRate": "Fluctuating",
    "dexId": 301
  },
  "Crawdaunt": {
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 63,
      "atk": 120,
      "def": 85,
      "spa": 90,
      "spd": 55,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 161,
    "growthRate": "Fluctuating",
    "dexId": 302
  },
  "Feebas": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 15,
      "def": 20,
      "spa": 10,
      "spd": 55,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 61,
    "growthRate": "Erratic",
    "dexId": 303
  },
  "Milotic": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 60,
      "def": 79,
      "spa": 100,
      "spd": 125,
      "spe": 81
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 213,
    "growthRate": "Erratic",
    "dexId": 304
  },
  "Carvanha": {
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 90,
      "def": 20,
      "spa": 65,
      "spd": 20,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 88,
    "growthRate": "Slow",
    "dexId": 305
  },
  "Sharpedo": {
    "types": [
      "water",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 120,
      "def": 40,
      "spa": 95,
      "spd": 40,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 175,
    "growthRate": "Slow",
    "dexId": 306
  },
  "Trapinch": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 100,
      "def": 45,
      "spa": 45,
      "spd": 45,
      "spe": 10
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 73,
    "growthRate": "MediumSlow",
    "dexId": 307
  },
  "Vibrava": {
    "types": [
      "ground",
      "dragon"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 70,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 126,
    "growthRate": "MediumSlow",
    "dexId": 308
  },
  "Flygon": {
    "types": [
      "ground",
      "dragon"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 100,
      "def": 80,
      "spa": 80,
      "spd": 80,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 197,
    "growthRate": "MediumSlow",
    "dexId": 309
  },
  "Makuhita": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 72,
      "atk": 60,
      "def": 30,
      "spa": 20,
      "spd": 30,
      "spe": 25
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 87,
    "growthRate": "Fluctuating",
    "dexId": 310
  },
  "Hariyama": {
    "types": [
      "fighting"
    ],
    "baseStats": {
      "hp": 144,
      "atk": 120,
      "def": 60,
      "spa": 40,
      "spd": 60,
      "spe": 50
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 184,
    "growthRate": "Fluctuating",
    "dexId": 311
  },
  "Electrike": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 40,
      "spa": 65,
      "spd": 40,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 104,
    "growthRate": "Slow",
    "dexId": 312
  },
  "Manectric": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 75,
      "def": 60,
      "spa": 105,
      "spd": 60,
      "spe": 105
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 168,
    "growthRate": "Slow",
    "dexId": 313
  },
  "Numel": {
    "types": [
      "fire",
      "ground"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 40,
      "spa": 65,
      "spd": 45,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 88,
    "growthRate": "MediumFast",
    "dexId": 314
  },
  "Camerupt": {
    "types": [
      "fire",
      "ground"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 100,
      "def": 70,
      "spa": 105,
      "spd": 75,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 175,
    "growthRate": "MediumFast",
    "dexId": 315
  },
  "Spheal": {
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 40,
      "def": 50,
      "spa": 55,
      "spd": 50,
      "spe": 25
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 75,
    "growthRate": "MediumSlow",
    "dexId": 316
  },
  "Sealeo": {
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 60,
      "def": 70,
      "spa": 75,
      "spd": 70,
      "spe": 45
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 128,
    "growthRate": "MediumSlow",
    "dexId": 317
  },
  "Walrein": {
    "types": [
      "ice",
      "water"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 80,
      "def": 90,
      "spa": 95,
      "spd": 90,
      "spe": 65
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 192,
    "growthRate": "MediumSlow",
    "dexId": 318
  },
  "Cacnea": {
    "types": [
      "grass"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 85,
      "def": 40,
      "spa": 85,
      "spd": 40,
      "spe": 35
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 97,
    "growthRate": "MediumSlow",
    "dexId": 319
  },
  "Cacturne": {
    "types": [
      "grass",
      "dark"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 115,
      "def": 60,
      "spa": 115,
      "spd": 60,
      "spe": 55
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 177,
    "growthRate": "MediumSlow",
    "dexId": 320
  },
  "Snorunt": {
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 50
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 74,
    "growthRate": "MediumFast",
    "dexId": 321
  },
  "Glalie": {
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 80,
      "def": 80,
      "spa": 80,
      "spd": 80,
      "spe": 80
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 187,
    "growthRate": "MediumFast",
    "dexId": 322
  },
  "Lunatone": {
    "types": [
      "rock",
      "psychic"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 55,
      "def": 65,
      "spa": 95,
      "spd": 85,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 150,
    "growthRate": "Fast",
    "dexId": 323
  },
  "Solrock": {
    "types": [
      "rock",
      "psychic"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 95,
      "def": 85,
      "spa": 55,
      "spd": 65,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 150,
    "growthRate": "Fast",
    "dexId": 324
  },
  "Azurill": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 20,
      "def": 40,
      "spa": 20,
      "spd": 40,
      "spe": 20
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 33,
    "growthRate": "Fast",
    "dexId": 325
  },
  "Spoink": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 25,
      "def": 35,
      "spa": 70,
      "spd": 80,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 89,
    "growthRate": "Fast",
    "dexId": 326
  },
  "Grumpig": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 45,
      "def": 65,
      "spa": 90,
      "spd": 110,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 164,
    "growthRate": "Fast",
    "dexId": 327
  },
  "Plusle": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 40,
      "spa": 85,
      "spd": 75,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 120,
    "growthRate": "MediumFast",
    "dexId": 328
  },
  "Minun": {
    "types": [
      "electric"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 40,
      "def": 50,
      "spa": 75,
      "spd": 85,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 120,
    "growthRate": "MediumFast",
    "dexId": 329
  },
  "Mawile": {
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 85,
      "def": 85,
      "spa": 55,
      "spd": 55,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 98,
    "growthRate": "Fast",
    "dexId": 330
  },
  "Meditite": {
    "types": [
      "fighting",
      "psychic"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 40,
      "def": 55,
      "spa": 40,
      "spd": 55,
      "spe": 60
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 91,
    "growthRate": "MediumFast",
    "dexId": 331
  },
  "Medicham": {
    "types": [
      "fighting",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 75,
      "spa": 60,
      "spd": 75,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 153,
    "growthRate": "MediumFast",
    "dexId": 332
  },
  "Swablu": {
    "types": [
      "normal",
      "flying"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 40,
      "def": 60,
      "spa": 40,
      "spd": 75,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 74,
    "growthRate": "Erratic",
    "dexId": 333
  },
  "Altaria": {
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 70,
      "def": 90,
      "spa": 70,
      "spd": 105,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 188,
    "growthRate": "Erratic",
    "dexId": 334
  },
  "Wynaut": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 23,
      "def": 48,
      "spa": 23,
      "spd": 48,
      "spe": 23
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 44,
    "growthRate": "MediumFast",
    "dexId": 335
  },
  "Duskull": {
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 40,
      "def": 90,
      "spa": 30,
      "spd": 90,
      "spe": 25
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 97,
    "growthRate": "Fast",
    "dexId": 336
  },
  "Dusclops": {
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 70,
      "def": 130,
      "spa": 60,
      "spd": 130,
      "spe": 25
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 179,
    "growthRate": "Fast",
    "dexId": 337
  },
  "Roselia": {
    "types": [
      "grass",
      "poison"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 60,
      "def": 45,
      "spa": 100,
      "spd": 80,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 152,
    "growthRate": "MediumSlow",
    "dexId": 338
  },
  "Slakoth": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 60,
      "spa": 35,
      "spd": 35,
      "spe": 30
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 83,
    "growthRate": "Slow",
    "dexId": 339
  },
  "Vigoroth": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 80,
      "def": 80,
      "spa": 55,
      "spd": 55,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 2
    },
    "baseExp": 126,
    "growthRate": "Slow",
    "dexId": 340
  },
  "Slaking": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 150,
      "atk": 160,
      "def": 100,
      "spa": 95,
      "spd": 65,
      "spe": 100
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 210,
    "growthRate": "Slow",
    "dexId": 341
  },
  "Gulpin": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 43,
      "def": 53,
      "spa": 43,
      "spd": 53,
      "spe": 40
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 75,
    "growthRate": "Fluctuating",
    "dexId": 342
  },
  "Swalot": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 73,
      "def": 83,
      "spa": 73,
      "spd": 83,
      "spe": 55
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 168,
    "growthRate": "Fluctuating",
    "dexId": 343
  },
  "Tropius": {
    "types": [
      "grass",
      "flying"
    ],
    "baseStats": {
      "hp": 99,
      "atk": 68,
      "def": 83,
      "spa": 72,
      "spd": 87,
      "spe": 51
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 169,
    "growthRate": "Slow",
    "dexId": 344
  },
  "Whismur": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 64,
      "atk": 51,
      "def": 23,
      "spa": 51,
      "spd": 23,
      "spe": 28
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 68,
    "growthRate": "MediumSlow",
    "dexId": 345
  },
  "Loudred": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 84,
      "atk": 71,
      "def": 43,
      "spa": 71,
      "spd": 43,
      "spe": 48
    },
    "evYield": {
      "hp": 2,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 126,
    "growthRate": "MediumSlow",
    "dexId": 346
  },
  "Exploud": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 104,
      "atk": 91,
      "def": 63,
      "spa": 91,
      "spd": 63,
      "spe": 68
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 184,
    "growthRate": "MediumSlow",
    "dexId": 347
  },
  "Clamperl": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 64,
      "def": 85,
      "spa": 74,
      "spd": 55,
      "spe": 32
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 142,
    "growthRate": "Erratic",
    "dexId": 348
  },
  "Huntail": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 104,
      "def": 105,
      "spa": 94,
      "spd": 75,
      "spe": 52
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 178,
    "growthRate": "Erratic",
    "dexId": 349
  },
  "Gorebyss": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 84,
      "def": 105,
      "spa": 114,
      "spd": 75,
      "spe": 52
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 178,
    "growthRate": "Erratic",
    "dexId": 350
  },
  "Absol": {
    "types": [
      "dark"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 130,
      "def": 60,
      "spa": 75,
      "spd": 60,
      "spe": 75
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 174,
    "growthRate": "MediumSlow",
    "dexId": 351
  },
  "Shuppet": {
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 44,
      "atk": 75,
      "def": 35,
      "spa": 63,
      "spd": 33,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 97,
    "growthRate": "Fast",
    "dexId": 352
  },
  "Banette": {
    "types": [
      "ghost"
    ],
    "baseStats": {
      "hp": 64,
      "atk": 115,
      "def": 65,
      "spa": 83,
      "spd": 63,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 179,
    "growthRate": "Fast",
    "dexId": 353
  },
  "Seviper": {
    "types": [
      "poison"
    ],
    "baseStats": {
      "hp": 73,
      "atk": 100,
      "def": 60,
      "spa": 100,
      "spd": 60,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 165,
    "growthRate": "Fluctuating",
    "dexId": 354
  },
  "Zangoose": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 73,
      "atk": 115,
      "def": 60,
      "spa": 60,
      "spd": 60,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 165,
    "growthRate": "Erratic",
    "dexId": 355
  },
  "Relicanth": {
    "types": [
      "water",
      "rock"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 90,
      "def": 130,
      "spa": 45,
      "spd": 65,
      "spe": 55
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 198,
    "growthRate": "Slow",
    "dexId": 356
  },
  "Aron": {
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 70,
      "def": 100,
      "spa": 40,
      "spd": 40,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 96,
    "growthRate": "Slow",
    "dexId": 357
  },
  "Lairon": {
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 90,
      "def": 140,
      "spa": 50,
      "spd": 50,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 152,
    "growthRate": "Slow",
    "dexId": 358
  },
  "Aggron": {
    "types": [
      "steel",
      "rock"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 110,
      "def": 180,
      "spa": 60,
      "spd": 60,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 3,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 205,
    "growthRate": "Slow",
    "dexId": 359
  },
  "Castform": {
    "types": [
      "normal"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 70,
      "def": 70,
      "spa": 70,
      "spd": 70,
      "spe": 70
    },
    "evYield": {
      "hp": 1,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 145,
    "growthRate": "MediumFast",
    "dexId": 360
  },
  "Volbeat": {
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 73,
      "def": 55,
      "spa": 47,
      "spd": 75,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 146,
    "growthRate": "Erratic",
    "dexId": 361
  },
  "Illumise": {
    "types": [
      "bug"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 47,
      "def": 55,
      "spa": 73,
      "spd": 75,
      "spe": 85
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 146,
    "growthRate": "Fluctuating",
    "dexId": 362
  },
  "Lileep": {
    "types": [
      "rock",
      "grass"
    ],
    "baseStats": {
      "hp": 66,
      "atk": 41,
      "def": 77,
      "spa": 61,
      "spd": 87,
      "spe": 23
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 121,
    "growthRate": "Erratic",
    "dexId": 363
  },
  "Cradily": {
    "types": [
      "rock",
      "grass"
    ],
    "baseStats": {
      "hp": 86,
      "atk": 81,
      "def": 97,
      "spa": 81,
      "spd": 107,
      "spe": 43
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 2,
      "spe": 0
    },
    "baseExp": 201,
    "growthRate": "Erratic",
    "dexId": 364
  },
  "Anorith": {
    "types": [
      "rock",
      "bug"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 95,
      "def": 50,
      "spa": 40,
      "spd": 50,
      "spe": 75
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 119,
    "growthRate": "Erratic",
    "dexId": 365
  },
  "Armaldo": {
    "types": [
      "rock",
      "bug"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 125,
      "def": 100,
      "spa": 70,
      "spd": 80,
      "spe": 45
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 200,
    "growthRate": "Erratic",
    "dexId": 366
  },
  "Ralts": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 28,
      "atk": 25,
      "def": 25,
      "spa": 45,
      "spd": 35,
      "spe": 40
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 70,
    "growthRate": "Slow",
    "dexId": 367
  },
  "Kirlia": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 38,
      "atk": 35,
      "def": 35,
      "spa": 65,
      "spd": 55,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 2,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 140,
    "growthRate": "Slow",
    "dexId": 368
  },
  "Gardevoir": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 68,
      "atk": 65,
      "def": 65,
      "spa": 125,
      "spd": 115,
      "spe": 80
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 208,
    "growthRate": "Slow",
    "dexId": 369
  },
  "Bagon": {
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 75,
      "def": 60,
      "spa": 40,
      "spd": 30,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 89,
    "growthRate": "Slow",
    "dexId": 370
  },
  "Shelgon": {
    "types": [
      "dragon"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 95,
      "def": 100,
      "spa": 60,
      "spd": 50,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 144,
    "growthRate": "Slow",
    "dexId": 371
  },
  "Salamence": {
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 135,
      "def": 80,
      "spa": 110,
      "spd": 80,
      "spe": 100
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 218,
    "growthRate": "Slow",
    "dexId": 372
  },
  "Beldum": {
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 55,
      "def": 80,
      "spa": 35,
      "spd": 60,
      "spe": 30
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 1,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 103,
    "growthRate": "Slow",
    "dexId": 373
  },
  "Metang": {
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 75,
      "def": 100,
      "spa": 55,
      "spd": 80,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 153,
    "growthRate": "Slow",
    "dexId": 374
  },
  "Metagross": {
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 135,
      "def": 130,
      "spa": 95,
      "spd": 90,
      "spe": 70
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 3,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 210,
    "growthRate": "Slow",
    "dexId": 375
  },
  "Regirock": {
    "types": [
      "rock"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 100,
      "def": 200,
      "spa": 50,
      "spd": 100,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 3,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 217,
    "growthRate": "Slow",
    "dexId": 376
  },
  "Regice": {
    "types": [
      "ice"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 50,
      "def": 100,
      "spa": 100,
      "spd": 200,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 216,
    "growthRate": "Slow",
    "dexId": 377
  },
  "Registeel": {
    "types": [
      "steel"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 75,
      "def": 150,
      "spa": 75,
      "spd": 150,
      "spe": 50
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 2,
      "spa": 0,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 215,
    "growthRate": "Slow",
    "dexId": 378
  },
  "Kyogre": {
    "types": [
      "water"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 90,
      "spa": 150,
      "spd": 140,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 218,
    "growthRate": "Slow",
    "dexId": 379
  },
  "Groudon": {
    "types": [
      "ground"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 150,
      "def": 140,
      "spa": 100,
      "spd": 90,
      "spe": 90
    },
    "evYield": {
      "hp": 0,
      "atk": 3,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 218,
    "growthRate": "Slow",
    "dexId": 380
  },
  "Rayquaza": {
    "types": [
      "dragon",
      "flying"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 150,
      "def": 90,
      "spa": 150,
      "spd": 90,
      "spe": 95
    },
    "evYield": {
      "hp": 0,
      "atk": 2,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 220,
    "growthRate": "Slow",
    "dexId": 381
  },
  "Latias": {
    "types": [
      "dragon",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 80,
      "def": 90,
      "spa": 110,
      "spd": 130,
      "spe": 110
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 3,
      "spe": 0
    },
    "baseExp": 211,
    "growthRate": "Slow",
    "dexId": 382
  },
  "Latios": {
    "types": [
      "dragon",
      "psychic"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 90,
      "def": 80,
      "spa": 130,
      "spd": 110,
      "spe": 110
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 3,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 211,
    "growthRate": "Slow",
    "dexId": 383
  },
  "Jirachi": {
    "types": [
      "steel",
      "psychic"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "evYield": {
      "hp": 3,
      "atk": 0,
      "def": 0,
      "spa": 0,
      "spd": 0,
      "spe": 0
    },
    "baseExp": 215,
    "growthRate": "Slow",
    "dexId": 384
  },
  "Deoxys": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 150,
      "def": 50,
      "spa": 150,
      "spd": 50,
      "spe": 150
    },
    "evYield": {
      "hp": 0,
      "atk": 1,
      "def": 0,
      "spa": 1,
      "spd": 0,
      "spe": 1
    },
    "baseExp": 215,
    "growthRate": "Slow",
    "dexId": 385
  },
  "Chimecho": {
    "types": [
      "psychic"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 50,
      "def": 70,
      "spa": 95,
      "spd": 80,
      "spe": 65
    },
    "evYield": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spa": 1,
      "spd": 1,
      "spe": 0
    },
    "baseExp": 147,
    "growthRate": "Fast",
    "dexId": 386
  }
};
