import { type Nature, NatureModifiers } from "../gamedata/natures";
import type { StatsTable } from "../gamedata/types";

export function calcHealth(
  base: number,
  level: number,
  iv: number,
  ev: number,
): number {
  const stat = 2 * base + iv + Math.trunc(ev / 4);
  return Math.trunc((stat * level) / 100) + level + 10;
}

export type StatName = "atk" | "def" | "spa" | "spd" | "spe";

export function calcStat(
  statName: StatName,
  base: number,
  level: number,
  iv: number,
  ev: number,
  nature: Nature,
): number {
  let stat =
    Math.trunc(((2 * base + iv + Math.trunc(ev / 4)) * level) / 100) + 5;

  const { plus, minus } = NatureModifiers[nature];
  if (plus === statName) stat = Math.trunc((stat * 110) / 100);
  if (minus === statName) stat = Math.trunc((stat * 90) / 100);

  return stat;
}

export function calcPinchThreshold(maxHp: number): number {
  return Math.trunc(maxHp / 3);
}

const STAT_STAGE_RATIOS: [number, number][] = [
  [10, 40],
  [10, 35],
  [10, 30],
  [10, 25],
  [10, 20],
  [10, 15],
  [10, 10],
  [15, 10],
  [20, 10],
  [25, 10],
  [30, 10],
  [35, 10],
  [40, 10],
];

export function applyStatStage(stat: number, stage: number): number {
  if (stage === 0) return stat;

  console.log(stage);
  const [num, den] = STAT_STAGE_RATIOS[stage + 6];
  return Math.trunc((stat * num) / den);
}

export function buildPlayerStats(
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

export function buildEnemyStats(
  base: StatsTable,
  level: number,
  fixedIv = 0,
): StatsTable {
  const hp = calcHealth(base.hp, level, fixedIv, 0);
  return {
    hp,
    atk: calcStat("atk", base.atk, level, fixedIv, 0, "Hardy"),
    def: calcStat("def", base.def, level, fixedIv, 0, "Hardy"),
    spa: calcStat("spa", base.spa, level, fixedIv, 0, "Hardy"),
    spd: calcStat("spd", base.spd, level, fixedIv, 0, "Hardy"),
    spe: calcStat("spe", base.spe, level, fixedIv, 0, "Hardy"),
  };
}
