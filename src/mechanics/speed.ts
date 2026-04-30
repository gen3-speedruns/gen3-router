import { applyStatStage } from "./stats";
import type { PlayerSpec, EnemySpec } from "../gamedata/types";

export type SpeedOutcome = "outspeed" | "outsped" | "tie";

export interface SpeedResult {
  outcome: SpeedOutcome;
  playerFinal: number;
  enemySpeed: number;
}

export function calcSpeedCheck(
  player: PlayerSpec,
  enemy: EnemySpec,
  stages = 0,
): SpeedResult {
  let playerFinal = applyStatStage(player.stats.spe, stages);
  if (player.badges.thunder) {
    playerFinal = Math.floor((playerFinal * 110) / 100);
  }

  const diff = playerFinal - enemy.stats.spe;
  return {
    outcome: diff > 0 ? "outspeed" : diff < 0 ? "outsped" : "tie",
    playerFinal,
    enemySpeed: enemy.stats.spe,
  };
}
