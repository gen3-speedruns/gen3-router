import { MoveData } from "../gamedata/moves";
import {
  calcDamageOut,
  calcDamageIn,
  type DamageResult,
} from "../mechanics/damage";
import { calcSpeedCheck, type SpeedResult } from "../mechanics/speed";
import type { PlayerSpec, EnemySpec } from "../gamedata/types";

export type { DamageResult, SpeedResult };

export function getDamageOut(
  player: PlayerSpec,
  enemy: EnemySpec,
  moveName: string,
  opts: { pinch?: boolean; stages?: number } = {},
): DamageResult | null {
  const move = MoveData[moveName];
  if (!move) return null;
  return calcDamageOut(player, enemy, move, opts);
}

export function getDamageIn(
  enemy: EnemySpec,
  player: PlayerSpec,
  moveName: string,
  opts: { stages?: number } = {},
): DamageResult | null {
  const move = MoveData[moveName];
  if (!move) return null;
  return calcDamageIn(enemy, player, move, opts);
}

export function getSpeedCheck(
  player: PlayerSpec,
  enemy: EnemySpec,
  stages = 0,
): SpeedResult {
  return calcSpeedCheck(player, enemy, stages);
}
