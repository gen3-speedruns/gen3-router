import { PokemonDataMap } from "../gamedata/pokemon";
import type { Nature, PokemonType, StatsTable } from "../gamedata/types";
import { getExpAtLevel, getLevelFromExp } from "./mechanics/experience";
import { calcHealth, calcPinchThreshold, calcStat } from "./mechanics/stats";

export interface BadgeBoosts {
  boulder: boolean;
  thunder: boolean;
  soul: boolean;
  volcano: boolean;
}

export interface Runner {
  species: string;
  dexId: number;
  level: number;
  types: PokemonType[];
  stats: StatsTable;
  pinchThreshold: number;
  badges: BadgeBoosts;
}

export interface RunnerRecord {
  species: string;
  nature: Nature;
  ivs: StatsTable;
  evs: StatsTable;
  totalExp: number;
  badges: BadgeBoosts;
}

export function calcStartingExp(species: string, level: number): number {
  const data = PokemonDataMap[species];
  return getExpAtLevel(level, data.growthRate);
}

export function buildRunner(record: RunnerRecord): Runner {
  const data = PokemonDataMap[record.species];
  const level = getLevelFromExp(record.totalExp, data.growthRate);
  const stats = buildStats(
    data.baseStats,
    level,
    record.ivs,
    record.evs,
    record.nature,
  );
  return {
    species: record.species,
    dexId: data.dexId,
    level,
    types: data.types,
    stats,
    pinchThreshold: calcPinchThreshold(stats.hp),
    badges: record.badges,
  };
}

function buildStats(
  base: StatsTable,
  level: number,
  ivs: StatsTable,
  evs: StatsTable,
  nature: Nature,
): StatsTable {
  const hp = calcHealth(base.hp, level, ivs.hp, evs.hp);
  return {
    hp,
    atk: calcStat("atk", base.atk, level, ivs.atk, evs.atk, nature),
    def: calcStat("def", base.def, level, ivs.def, evs.def, nature),
    spa: calcStat("spa", base.spa, level, ivs.spa, evs.spa, nature),
    spd: calcStat("spd", base.spd, level, ivs.spd, evs.spd, nature),
    spe: calcStat("spe", base.spe, level, ivs.spe, evs.spe, nature),
  };
}
