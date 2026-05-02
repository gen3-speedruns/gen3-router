import { type Nature, NaturesInOrder } from "../gamedata/natures";
import { TrainerDataMap } from "../gamedata/trainers";

function gen3CharByte(c: string): number {
  const code = c.charCodeAt(0);
  if (code >= 65 && code <= 90) return 0xbb + (code - 65);
  if (code >= 97 && code <= 122) return 0xd5 + (code - 97);
  return 0x00;
}

function gen3NameHash(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += gen3CharByte(name[i].toUpperCase());
  }
  return hash;
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

  const base = getInitialValue(trainer.isDouble, trainer.isFemale);
  let nameHash = 0;

  for (let i = 0; i <= slot; i++) {
    const pokemon = trainer.party[i];
    if (!pokemon)
      throw new Error(`Slot ${i} not found for trainer ${trainerId}`);

    nameHash += gen3NameHash(trainer.name);
    nameHash += gen3NameHash(pokemon.species);
  }

  const personalityValue = (base + (nameHash << 8)) >>> 0;
  return NaturesInOrder[personalityValue % 25];
}
