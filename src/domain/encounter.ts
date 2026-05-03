import { PokemonDataMap } from "../gamedata/pokemon";
import { TrainerDataMap } from "../gamedata/trainers";
import type { Nature, PokemonType, StatsTable } from "../gamedata/types";
import { calculateExpYield } from "./mechanics/experience";
import { calcHealth, calcStat } from "./mechanics/stats";
import { calcTrainerPokemonNature } from "./mechanics/trainerNature";
import type { EncounterYield } from "./mechanics/types";

export interface Encounter {
  species: string;
  dexId: number;
  level: number;
  types: PokemonType[];
  stats: StatsTable;
  isTrainer: boolean;
}

export function resolveTrainerEncounter(
  trainerId: string,
  slot: number,
): Encounter | null {
  const trainer = TrainerDataMap[trainerId];
  if (!trainer) return null;
  const member = trainer.party[slot];
  if (!member) return null;
  const pokemon = PokemonDataMap[member.species];
  if (!pokemon) return null;

  return {
    species: member.species,
    dexId: pokemon.dexId,
    level: member.level,
    types: pokemon.types,
    stats: buildStats(
      pokemon.baseStats,
      member.level,
      member.iv,
      calcTrainerPokemonNature(trainerId, slot),
    ),
    isTrainer: true,
  };
}

export function resolveWildEncounter(
  species: string,
  level: number,
): Encounter | null {
  const pokemon = PokemonDataMap[species];
  if (!pokemon) return null;

  return {
    species: species,
    dexId: pokemon.dexId,
    level: level,
    types: pokemon.types,
    stats: buildStats(pokemon.baseStats, level, 0, "Hardy"),
    isTrainer: false,
  };
}

function buildStats(
  base: StatsTable,
  level: number,
  iv: number,
  nature: Nature,
): StatsTable {
  const hp = calcHealth(base.hp, level, iv, 0);
  return {
    hp,
    atk: calcStat("atk", base.atk, level, iv, 0, nature),
    def: calcStat("def", base.def, level, iv, 0, nature),
    spa: calcStat("spa", base.spa, level, iv, 0, nature),
    spd: calcStat("spd", base.spd, level, iv, 0, nature),
    spe: calcStat("spe", base.spe, level, iv, 0, nature),
  };
}

export function calcEncounterYield(encounter: Encounter): EncounterYield {
  const data = PokemonDataMap[encounter.species];
  const exp = calculateExpYield(
    data.baseExp,
    encounter.level,
    encounter.isTrainer,
  );

  return { exp, evs: data.evYield };
}
