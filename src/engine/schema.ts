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
      attributes: {
        species: { type: String, required: true },
        level: { type: Number, required: true },
        isTrainer: { type: Boolean, default: false },
      },
    },
  },
};
