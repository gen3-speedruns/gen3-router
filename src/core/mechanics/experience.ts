import type { GrowthRate } from "../types";

export function getExpAtLevel(level: number, rate: GrowthRate): number {
  if (level <= 1) return 0;
  const n = level;
  const n3 = n * n * n;

  switch (rate) {
    case "Fast":
      return Math.trunc((4 * n3) / 5);
    case "MediumFast":
      return n3;
    case "MediumSlow":
      return Math.trunc((6 * n3) / 5) - 15 * n * n + 100 * n - 140;
    case "Slow":
      return Math.trunc((5 * n3) / 4);
    case "Erratic":
      if (n <= 50) return Math.trunc((n3 * (100 - n)) / 50);
      if (n <= 68) return Math.trunc((n3 * (150 - n)) / 100);
      if (n <= 98)
        return Math.trunc((n3 * Math.trunc((1911 - 10 * n) / 3)) / 500);
      return Math.trunc((n3 * (160 - n)) / 100);
    case "Fluctuating":
      if (n <= 15)
        return Math.trunc((n3 * (Math.trunc((n + 1) / 3) + 24)) / 50);
      if (n <= 36) return Math.trunc((n3 * (n + 14)) / 50);
      return Math.trunc((n3 * (Math.trunc(n / 2) + 32)) / 50);
  }
}

export function getLevelFromExp(exp: number, rate: GrowthRate): number {
  for (let lvl = 100; lvl >= 1; lvl--) {
    if (exp >= getExpAtLevel(lvl, rate)) return lvl;
  }
  return 1;
}

export function calculateExpYield(
  baseExp: number,
  enemyLevel: number,
  isTrainer: boolean,
): number {
  const a = isTrainer ? 1.5 : 1.0;
  return Math.trunc((baseExp * enemyLevel * a) / 7);
}
