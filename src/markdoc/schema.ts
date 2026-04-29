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
        fixedIv: { type: Number, default: 0 },
      },
    },
    "speed-check": {
      render: "SpeedCheck",
      attributes: { stages: { type: Number } },
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
  },
};
