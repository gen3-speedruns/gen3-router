import { type Nature, NatureModifiers } from "../gamedata/natures";

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
