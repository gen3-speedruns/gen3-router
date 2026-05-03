import { applyStatStage } from "./stats";
import type { BattleStats } from "./types";

export type SpeedOutcome = "outspeed" | "outsped" | "tie";

export interface SpeedResult {
  outcome: SpeedOutcome;
  playerSpeed: number;
  enemySpeed: number;
}

export function calcSpeedCheck(
  attacker: BattleStats,
  defender: BattleStats,
): SpeedResult {
  const enemySpeed = applyStatStage(defender.stats.spe, defender.stages);
  let playerSpeed = applyStatStage(attacker.stats.spe, attacker.stages);
  if (attacker.badges?.thunder) {
    playerSpeed = Math.floor((playerSpeed * 110) / 100);
  }

  const diff = playerSpeed - enemySpeed;
  return {
    outcome: diff > 0 ? "outspeed" : diff < 0 ? "outsped" : "tie",
    playerSpeed,
    enemySpeed,
  };
}
