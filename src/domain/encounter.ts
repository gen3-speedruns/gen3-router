import { PokemonDataMap } from "../gamedata/pokemon";
import type { Nature, PokemonType, StatsTable } from "../gamedata/types";
import { calculateExpYield } from "./mechanics/experience";
import { calcHealth, calcStat } from "./mechanics/stats";

export interface Encounter {
  species: string;
  dexId: number;
  level: number;
  types: PokemonType[];
  stats: StatsTable;
  isTrainer: boolean;
}

export function resolveEncounter(
  species: string,
  level: number,
  isTrainer?: boolean,
  fixedIv?: number,
): Encounter | null {
  const pokemon = PokemonDataMap[species];
  if (!pokemon) return null;

  return {
    species: species,
    dexId: pokemon.dexId,
    level: level,
    types: pokemon.types,
    stats: buildStats(pokemon.baseStats, level, fixedIv ?? 0, "Hardy"),
    isTrainer: isTrainer ?? false,
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

export interface EncounterYield {
  exp: number;
  evs: StatsTable;
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
