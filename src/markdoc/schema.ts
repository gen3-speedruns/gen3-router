import type { Config } from "@markdoc/markdoc";

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
    encounter: {
      render: "Encounter",
      selfClosing: false,
      attributes: {
        species: { type: String, required: true },
        level: { type: Number, required: true },
        isTrainer: { type: Boolean, default: false },
        optional: { type: Boolean, default: false },
        fixedIv: { type: Number, default: 0 },
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
    enemy: {
      render: "Enemy",
      attributes: {
        species: { type: String, required: true },
        level: { type: Number, required: true },
        fixedIv: { type: Number, default: 0 },
      },
    },
    badge: {
      render: "Badge",
      selfClosing: true,
      attributes: {
        id: { type: String, required: true },
      },
    },
  },
};
