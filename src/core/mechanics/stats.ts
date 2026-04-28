import { type Nature, NatureModifiers } from "../data/natures";

export function calcHealth(
  base: number,
  level: number,
  iv: number,
  ev: number,
): number {
  return (
    Math.trunc(((2 * base + iv + Math.trunc(ev / 4)) * level) / 100) +
    level +
    10
  );
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
  let val =
    Math.trunc(((2 * base + iv + Math.trunc(ev / 4)) * level) / 100) + 5;

  const mod = NatureModifiers[nature];
  if (mod.plus === statName) val = Math.trunc(val * 1.1);
  if (mod.minus === statName) val = Math.trunc(val * 0.9);

  return val;
}
