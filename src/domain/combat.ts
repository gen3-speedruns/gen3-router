import { MoveDataMap } from "../gamedata/moves";
import { PokemonDataMap } from "../gamedata/pokemon";
import type { Encounter } from "./encounter";
import {
  calcDamageIn,
  calcKoChance,
  calcPoisonDamage,
  type DamageResult,
  type KoChanceResult,
} from "./mechanics/damage";
import { calcSpeedCheck, type SpeedResult } from "./mechanics/speed";
import type { BattleStats } from "./mechanics/types";
import { levelOf, statsOf, type Run } from "./run";

export type { DamageResult, KoChanceResult, SpeedResult };

export function damageIn(
  run: Run,
  encounter: Encounter,
  moveName: string,
  stages?: number,
): DamageResult | null {
  const move = MoveDataMap[moveName];
  if (!move) return null;

  return calcDamageIn(
    encounterBattleStats(encounter, stages),
    runBattleStats(run, stages, false),
    move,
  );
}

export function koChance(
  run: Run,
  encounter: Encounter,
  moveNames: string[],
  stages?: number,
  isPinchActive?: boolean,
): KoChanceResult | null {
  const moves = moveNames.map((n) => MoveDataMap[n]).filter(Boolean);
  if (!moves) return null;

  return calcKoChance(
    runBattleStats(run, stages, isPinchActive),
    encounterBattleStats(encounter, 0, false),
    moves,
  );
}

export function getSpeedCheck(
  run: Run,
  encounter: Encounter,
  runnerStages?: number,
  encounterStages?: number,
): SpeedResult {
  return calcSpeedCheck(
    runBattleStats(run, runnerStages ?? 0, false),
    encounterBattleStats(encounter, encounterStages ?? 0, false),
  );
}

export function poisonDamage(run: Run): number {
  return calcPoisonDamage(runBattleStats(run).stats);
}

function runBattleStats(
  run: Run,
  stages?: number,
  isPinchActive?: boolean,
): BattleStats {
  return {
    level: levelOf(run),
    types: PokemonDataMap[run.species].types,
    stats: statsOf(run),
    stages: stages ?? 0,
    isPinchActive: isPinchActive ?? false,
    badges: run.badges,
  };
}

function encounterBattleStats(
  encounter: Encounter,
  stages?: number,
  isPinchActive?: boolean,
): BattleStats {
  return {
    level: encounter.level,
    types: encounter.types,
    stats: encounter.stats,
    stages: stages ?? 0,
    isPinchActive: isPinchActive ?? false,
  };
}
