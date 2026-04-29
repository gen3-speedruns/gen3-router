import { type Nature, NatureModifiers } from "../gamedata/natures";
import type { StatsTable } from "../gamedata/types";

export function calcHealth(
  base: number,
  level: number,
  iv: number,
  ev: number,
): number {
  const stat = 2 * Number(base) + Number(iv) + Math.trunc(Number(ev) / 4);
  return Math.trunc((stat * Number(level)) / 100) + Number(level) + 10;
}

export type StatName = "atk" | "def" | "spa" | "spd" | "spe";

export function calcStat(
  statName: StatName,
  base: number,
  level: number,
  iv: number,
  ev: number,
  nature: Nature,
  badgeBoost: boolean = false,
): number {
  let val =
    Math.trunc(
      ((2 * Number(base) + Number(iv) + Math.trunc(Number(ev) / 4)) *
        Number(level)) /
        100,
    ) + 5;

  const mod = NatureModifiers[nature];
  if (mod.plus === statName) val = Math.trunc(val * 1.1);
  if (mod.minus === statName) val = Math.trunc(val * 0.9);
  if (badgeBoost) val = Math.trunc(val * 1.1);

  return val;
}

export function calcPinchThreshold(maxHp: number): number {
  return Math.trunc(maxHp / 3);
}

export function applyStatStage(stat: number, stage: number): number {
  if (stage === 0) return stat;
  const factor = stage > 0 ? (2 + stage) / 2 : 2 / (2 - stage);
  return Math.trunc(stat * factor);
}

export interface BadgeSet {
  boulder: boolean; // 1.1x Atk
  thunder: boolean; // 1.1x Spe
  soul: boolean; // 1.1x Def
  volcano: boolean; // 1.1x SpA & SpD
}

export function buildPlayerStats(
  base: StatsTable,
  level: number,
  ivs: StatsTable,
  evs: StatsTable,
  nature: Nature,
  badges: BadgeSet,
): StatsTable {
  const hp = calcHealth(base.hp, level, ivs.hp, evs.hp);
  return {
    hp,
    atk: calcStat(
      "atk",
      base.atk,
      level,
      ivs.atk,
      evs.atk,
      nature,
      badges.boulder,
    ),
    def: calcStat(
      "def",
      base.def,
      level,
      ivs.def,
      evs.def,
      nature,
      badges.soul,
    ),
    spa: calcStat(
      "spa",
      base.spa,
      level,
      ivs.spa,
      evs.spa,
      nature,
      badges.volcano,
    ),
    spd: calcStat(
      "spd",
      base.spd,
      level,
      ivs.spd,
      evs.spd,
      nature,
      badges.volcano,
    ),
    spe: calcStat(
      "spe",
      base.spe,
      level,
      ivs.spe,
      evs.spe,
      nature,
      badges.thunder,
    ),
  };
}

export function buildEnemyStats(
  base: StatsTable,
  level: number,
  fixedIv = 0,
): StatsTable {
  const iv = Math.floor((fixedIv * 31) / 255);
  const hp = calcHealth(base.hp, level, iv, 0);
  return {
    hp,
    atk: calcStat("atk", base.atk, level, iv, 0, "Hardy"),
    def: calcStat("def", base.def, level, iv, 0, "Hardy"),
    spa: calcStat("spa", base.spa, level, iv, 0, "Hardy"),
    spd: calcStat("spd", base.spd, level, iv, 0, "Hardy"),
    spe: calcStat("spe", base.spe, level, iv, 0, "Hardy"),
  };
}
