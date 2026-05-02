import type { Nature } from "../../gamedata/types";

export type StatName = "atk" | "def" | "spa" | "spd" | "spe";

export const NatureModifiers: Record<
  Nature,
  { plus?: StatName; minus?: StatName }
> = {
  Hardy: {},
  Lonely: { plus: "atk", minus: "def" },
  Brave: { plus: "atk", minus: "spe" },
  Adamant: { plus: "atk", minus: "spa" },
  Naughty: { plus: "atk", minus: "spd" },
  Bold: { plus: "def", minus: "atk" },
  Docile: {},
  Relaxed: { plus: "def", minus: "spe" },
  Impish: { plus: "def", minus: "spa" },
  Lax: { plus: "def", minus: "spd" },
  Timid: { plus: "spe", minus: "atk" },
  Hasty: { plus: "spe", minus: "def" },
  Serious: {},
  Jolly: { plus: "spe", minus: "spa" },
  Naive: { plus: "spe", minus: "spd" },
  Modest: { plus: "spa", minus: "atk" },
  Mild: { plus: "spa", minus: "def" },
  Quiet: { plus: "spa", minus: "spe" },
  Bashful: {},
  Rash: { plus: "spa", minus: "spd" },
  Calm: { plus: "spd", minus: "atk" },
  Gentle: { plus: "spd", minus: "def" },
  Sassy: { plus: "spd", minus: "spe" },
  Careful: { plus: "spd", minus: "spa" },
  Quirky: {},
};

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

export function calcHealth(
  base: number,
  level: number,
  iv: number,
  ev: number,
): number {
  const stat = 2 * base + iv + Math.trunc(ev / 4);
  return Math.trunc((stat * level) / 100) + level + 10;
}

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

export function applyStatStage(stat: number, stage: number): number {
  if (stage === 0) return stat;

  const [num, den] = STAT_STAGE_RATIOS[stage + 6];
  return Math.trunc((stat * num) / den);
}
