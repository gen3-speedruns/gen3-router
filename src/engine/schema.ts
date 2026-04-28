import type { Config } from "@markdoc/markdoc";

export const markdocConfig: Config = {
  tags: {
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
