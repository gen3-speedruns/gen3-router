import { Tag, type Config, type Node } from "@markdoc/markdoc";
import type { EncounterSource } from "../domain/encounter";

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
        species: { type: String },
        level: { type: Number },
        trainerId: { type: String },
        slot: { type: Number },
        optional: { type: Boolean, default: false },
      },
      transform(node, config) {
        const { optional } = node.attributes;
        const source = parseEncounterSource(node);
        if (!source) return null;
        return new Tag(
          "Encounter",
          { source, optional },
          node.transformChildren(config),
        );
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
        species: { type: String },
        level: { type: Number },
        trainerId: { type: String },
        slot: { type: Number },
        optional: { type: Boolean, default: false },
      },
      transform(node, config) {
        const source = parseEncounterSource(node);
        if (!source) return null;
        return new Tag("CalcsFor", { source }, node.transformChildren(config));
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
      attributes: {},
    },
  },
};

function parseEncounterSource(node: Node): EncounterSource | null {
  const { species, level, trainerId, slot } = node.attributes;
  if (trainerId) {
    return { type: "trainer", trainerId, slot: slot ?? 0 };
  } else if (species && level != null) {
    return { type: "wild", species, level };
  } else {
    return null;
  }
}
