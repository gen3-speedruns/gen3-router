import { applyStatStage } from "./stats";
import type { PlayerSpec, EnemySpec } from "../gamedata/types";

export type SpeedOutcome = "outspeed" | "outsped" | "tie";

export interface SpeedResult {
  outcome: SpeedOutcome;
  playerSpeed: number;
  enemySpeed: number;
}

export function calcSpeedCheck(
  player: PlayerSpec,
  enemy: EnemySpec,
  playerStages: number,
  enemyStages: number,
): SpeedResult {
  const enemySpeed = applyStatStage(enemy.stats.spe, enemyStages);
  let playerSpeed = applyStatStage(player.stats.spe, playerStages);
  if (player.badges.thunder) {
    playerSpeed = Math.floor((playerSpeed * 110) / 100);
  }

  const diff = playerSpeed - enemySpeed;
  return {
    outcome: diff > 0 ? "outspeed" : diff < 0 ? "outsped" : "tie",
    playerSpeed,
    enemySpeed,
  };
}
