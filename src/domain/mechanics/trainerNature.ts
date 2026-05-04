import { TrainerDataMap } from "../../gamedata/trainers";
import type { Nature } from "../../gamedata/types";

export const NaturesInOrder: Nature[] = [
  "Hardy",
  "Lonely",
  "Brave",
  "Adamant",
  "Naughty",
  "Bold",
  "Docile",
  "Relaxed",
  "Impish",
  "Lax",
  "Timid",
  "Hasty",
  "Serious",
  "Jolly",
  "Naive",
  "Modest",
  "Mild",
  "Quiet",
  "Bashful",
  "Rash",
  "Calm",
  "Gentle",
  "Sassy",
  "Careful",
  "Quirky",
];

const GEN3_CHARMAP: Record<string, number> = {
  A: 0xbb,
  B: 0xbc,
  C: 0xbd,
  D: 0xbe,
  E: 0xbf,
  F: 0xc0,
  G: 0xc1,
  H: 0xc2,
  I: 0xc3,
  J: 0xc4,
  K: 0xc5,
  L: 0xc6,
  M: 0xc7,
  N: 0xc8,
  O: 0xc9,
  P: 0xca,
  Q: 0xcb,
  R: 0xcc,
  S: 0xcd,
  T: 0xce,
  U: 0xcf,
  V: 0xd0,
  W: 0xd1,
  X: 0xd2,
  Y: 0xd3,
  Z: 0xd4,
  ".": 0xad,
  " ": 0x00,
};

function sumGen3Bytes(text: string): number {
  let sum = 0;
  for (const char of text) {
    const byte = GEN3_CHARMAP[char];
    if (byte === undefined) {
      throw new Error(
        `Unsupported Gen 3 char: ${JSON.stringify(char)} in ${JSON.stringify(text)}`,
      );
    }
    sum += byte;
  }
  return sum;
}

function getInitialValue(isDouble: boolean, isFemale: boolean): number {
  if (isDouble) return 0x80;
  return isFemale ? 0x78 : 0x88;
}

export function calcTrainerPokemonNature(
  trainerId: string,
  slot: number,
): Nature {
  const trainer = TrainerDataMap[trainerId];
  if (!trainer) throw new Error(`Unknown trainer: ${trainerId}`);

  let personalityValue = 0;
  let nameHash = 0;

  for (let i = 0; i <= slot; i++) {
    const pokemon = trainer.party[i];
    if (!pokemon) {
      throw new Error(`Slot ${i} not found for trainer ${trainerId}`);
    }

    nameHash += sumGen3Bytes(trainer.name.toUpperCase());
    nameHash += sumGen3Bytes(pokemon.species.toUpperCase());
    personalityValue = getInitialValue(trainer.isDouble, trainer.isFemale);
    personalityValue += nameHash << 8;
  }

  return NaturesInOrder[(personalityValue >>> 0) % NaturesInOrder.length];
}
