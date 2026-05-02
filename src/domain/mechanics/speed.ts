import { applyStatStage } from "./stats";
import type { Runner } from "../runner";
import type { Encounter } from "../encounter";

export type SpeedOutcome = "outspeed" | "outsped" | "tie";

export interface SpeedResult {
  outcome: SpeedOutcome;
  playerSpeed: number;
  enemySpeed: number;
}

export function calcSpeedCheck(
  runner: Runner,
  encounter: Encounter,
  playerStages: number,
  enemyStages: number,
): SpeedResult {
  const enemySpeed = applyStatStage(encounter.stats.spe, enemyStages);
  let playerSpeed = applyStatStage(runner.stats.spe, playerStages);
  if (runner.badges.thunder) {
    playerSpeed = Math.floor((playerSpeed * 110) / 100);
  }

  const diff = playerSpeed - enemySpeed;
  return {
    outcome: diff > 0 ? "outspeed" : diff < 0 ? "outsped" : "tie",
    playerSpeed,
    enemySpeed,
  };
}
