import { MoveData } from "../gamedata/moves";
import {
  calcDamageIn,
  type DamageResult,
  calcKoChance,
  type KoChanceResult,
  calcPoisonDamage,
} from "../mechanics/damage";
import { calcSpeedCheck, type SpeedResult } from "../mechanics/speed";
import type { PlayerSpec, EnemySpec } from "../gamedata/types";

export type { DamageResult, SpeedResult };

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
  playerStages: number,
  enemyStages: number,
): SpeedResult {
  return calcSpeedCheck(player, enemy, playerStages, enemyStages);
}

export function getKoChance(
  player: PlayerSpec,
  enemy: EnemySpec,
  moveNames: string[],
  opts: { pinch?: boolean; stages?: number },
): KoChanceResult | null {
  const moves = moveNames.map((name) => MoveData[name]);
  if (!moves.filter((move) => move)) {
    console.log(moves);

    return null;
  }

  return calcKoChance(player, enemy, moves, opts);
}

export function getPoisonDamage(player: PlayerSpec): number {
  return calcPoisonDamage(player);
}
