import { type Config } from "@markdoc/markdoc";

export const markdocConfig: Config = {
  tags: {
    starter: {
      render: "Starter",
      attributes: {
        species: { type: String, required: true },
        level: { type: Number, required: true },
        natures: { type: Array, required: false },
      },
    },
    "wild-encounter": {
      render: "WildEncounter",
      selfClosing: false,
      attributes: {
        id: { type: String, required: true },
        species: { type: String, required: true },
        level: { type: Number, required: true },
        optional: { type: Boolean, default: false },
      },
    },
    "trainer-encounter": {
      render: "TrainerEncounter",
      selfClosing: false,
      attributes: {
        trainerId: { type: String, required: true },
        slot: { type: Number, default: 0 },
        optional: { type: Boolean, default: false },
      },
    },
    strategy: {
      render: "Strategy",
      selfClosing: false,
      attributes: {},
    },
    calcs: {
      render: "Calcs",
      selfClosing: false,
      attributes: {},
    },
    "calcs-for": {
      render: "CalcsFor",
      attributes: {
        trainerId: { type: String, required: true },
        slot: { type: Number, default: 0 },
      },
    },
    "speed-check": {
      render: "SpeedCheck",
      attributes: {
        playerStages: { type: Number, default: 0 },
        enemyStages: { type: Number, default: 0 },
      },
    },
    "damage-in": {
      render: "DamageIn",
      attributes: {
        move: { type: String, required: true },
        stages: { type: Number },
      },
    },
    "ko-chance": {
      render: "KoChance",
      attributes: {
        move: { type: String },
        moves: { type: Array },
        hits: { type: Number, default: 1 },
        pinch: { type: Boolean, default: false },
        stages: { type: Number, default: 0 },
      },
    },
    "poison-damage": {
      render: "PoisonDamage",
      attributes: {},
    },
    "level-up-hp-gain": {
      render: "LevelUpHpGain",
      attributes: {
        level: { type: Number, required: true },
      },
    },
    choice: {
      render: "Choice",
      attributes: {
        id: { type: String, required: true },
        label: { type: String },
      },
    },
    option: {
      render: "Option",
      attributes: {
        value: { type: String, required: true },
        label: { type: String, required: true },
      },
    },
    badge: {
      render: "GymBadge",
      selfClosing: true,
      attributes: {
        id: { type: String, required: true },
      },
    },
    evolve: {
      render: "Evolve",
      selfClosing: true,
      attributes: {
        into: { type: String, required: true },
      },
    },
    "rare-candy": {
      render: "RareCandy",
      selfClosing: true,
      attributes: {
        id: { type: String, required: true },
      },
    },
  },
};
