import { MoveDataMap } from "../gamedata/moves";
import type { Runner } from "./runner";
import type { Encounter } from "./encounter";
import {
  calcDamageIn,
  calcKoChance,
  calcPoisonDamage,
  type DamageResult,
  type KoChanceResult,
} from "./mechanics/damage";
import { calcSpeedCheck, type SpeedResult } from "./mechanics/speed";

export type { DamageResult, KoChanceResult, SpeedResult };

export function getDamageIn(
  attacker: Encounter,
  defender: Runner,
  moveName: string,
  stages?: number,
): DamageResult | null {
  const move = MoveDataMap[moveName];
  if (!move) return null;
  return calcDamageIn(attacker, defender, move, stages);
}

export function getKoChance(
  attacker: Runner,
  defender: Encounter,
  moveNames: string[],
  pinch?: boolean,
  stages?: number,
): KoChanceResult | null {
  const moves = moveNames.map((n) => MoveDataMap[n]).filter(Boolean);
  if (!moves.length) return null;
  return calcKoChance(attacker, defender, moves, pinch, stages);
}

export function getSpeedCheck(
  runner: Runner,
  encounter: Encounter,
  runnerStages = 0,
  encounterStages = 0,
): SpeedResult {
  return calcSpeedCheck(runner, encounter, runnerStages, encounterStages);
}

export function getPoisonDamage(runner: Runner): number {
  return calcPoisonDamage(runner);
}
