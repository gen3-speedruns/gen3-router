import { PokemonDataMap } from "../gamedata/pokemon";
import type { Nature, StatsTable } from "../gamedata/types";
import type { Encounter } from "./encounter";
import {
  calculateExpYield,
  getExpAtLevel,
  getLevelFromExp,
} from "./mechanics/experience";
import { calcHealth, calcPinchThreshold, calcStat } from "./mechanics/stats";

export interface BadgeBoosts {
  boulder: boolean;
  thunder: boolean;
  soul: boolean;
  volcano: boolean;
}

export interface Run {
  species: string;
  nature: Nature;
  ivs: StatsTable;
  evs: StatsTable;
  totalExp: number;
  badges: BadgeBoosts;
}

export function startNewRun(
  species: string,
  level: number,
  nature: Nature,
  ivs: StatsTable,
): Run {
  return {
    species,
    nature,
    ivs,
    evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    totalExp: startingExpFor(species, level),
    badges: { boulder: false, thunder: false, soul: false, volcano: false },
  };
}

export function startingExpFor(species: string, level: number): number {
  const data = PokemonDataMap[species];
  return getExpAtLevel(level, data.growthRate);
}

export function applyEncounterYield(run: Run, encounter: Encounter): Run {
  const data = PokemonDataMap[encounter.species];
  const exp = calculateExpYield(
    data.baseExp,
    encounter.level,
    encounter.isTrainer,
  );

  return {
    ...run,
    totalExp: run.totalExp + exp,
    evs: addEvs(run.evs, data.evYield),
  };
}

function addEvs(current: StatsTable, gained: StatsTable): StatsTable {
  const CAP = 255;
  return {
    hp: Math.min(CAP, current.hp + gained.hp),
    atk: Math.min(CAP, current.atk + gained.atk),
    def: Math.min(CAP, current.def + gained.def),
    spa: Math.min(CAP, current.spa + gained.spa),
    spd: Math.min(CAP, current.spd + gained.spd),
    spe: Math.min(CAP, current.spe + gained.spe),
  };
}

export function levelOf(run: Run): number {
  const data = PokemonDataMap[run.species];
  return getLevelFromExp(run.totalExp, data.growthRate);
}

export function statsOf(run: Run): StatsTable {
  const data = PokemonDataMap[run.species];
  const level = levelOf(run);
  const hp = calcHealth(data.baseStats.hp, level, run.ivs.hp, run.evs.hp);
  return {
    hp,
    atk: calcStat(
      "atk",
      data.baseStats.atk,
      level,
      run.ivs.atk,
      run.evs.atk,
      run.nature,
    ),
    def: calcStat(
      "def",
      data.baseStats.def,
      level,
      run.ivs.def,
      run.evs.def,
      run.nature,
    ),
    spa: calcStat(
      "spa",
      data.baseStats.spa,
      level,
      run.ivs.spa,
      run.evs.spa,
      run.nature,
    ),
    spd: calcStat(
      "spd",
      data.baseStats.spd,
      level,
      run.ivs.spd,
      run.evs.spd,
      run.nature,
    ),
    spe: calcStat(
      "spe",
      data.baseStats.spe,
      level,
      run.ivs.spe,
      run.evs.spe,
      run.nature,
    ),
  };
}

export function pinchThresholdOf(run: Run): number {
  return calcPinchThreshold(statsOf(run).hp);
}

export function hpGainOnLevelUp(run: Run, targetLevel: number): number {
  const currentHp = statsOf(run).hp;
  const nextHp = statsOf({
    ...run,
    totalExp: startingExpFor(run.species, targetLevel),
  }).hp;
  return nextHp - currentHp;
}
