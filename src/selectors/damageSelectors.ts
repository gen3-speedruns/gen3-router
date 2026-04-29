import { getLevelFromExp } from "../mechanics/experience";
import { calcHealth, calcStat } from "../mechanics/stats";
import { calcDmgRange, type Combatant } from "../mechanics/damage";
import { PokemonData } from "../gamedata/pokemon";
import { MoveData } from "../gamedata/moves";
import { isSpecialType } from "../gamedata/typeChart";
import type { PlayerState } from "../store/runState";
import type { EnemyState } from "../components/EncounterContext";

export interface DamageRoll {
  rolls: number[];
  min: number;
  max: number;
}

export interface DamageOutResult {
  roll: DamageRoll;
  ohkoPct: number;
}

export interface DamageInResult {
  roll: DamageRoll;
  isLethal: boolean;
}

function toRoll(rolls: number[]): DamageRoll {
  return { rolls, min: rolls[0], max: rolls[15] };
}

export function getDamageOut(
  player: PlayerState,
  enemy: EnemyState,
  moveName: string,
  opts: { pinch?: boolean; stages?: number } = {},
): DamageOutResult | null {
  const moveObj = MoveData[moveName];
  if (!moveObj) return null;

  const { pinch = false, stages = 0 } = opts;
  const isSpecial = isSpecialType(moveObj.type);
  const level = getLevelFromExp(player.totalExp, player.growthRate);
  const baseData = PokemonData[player.species];

  const pStatName = isSpecial ? "spa" : "atk";
  const eStatName = isSpecial ? "spd" : "def";
  const badgeBoost = isSpecial ? player.badges.volcano : player.badges.boulder;

  const pStat = calcStat(
    pStatName,
    baseData.baseStats[pStatName],
    level,
    player.ivs[pStatName],
    player.evs[pStatName],
    player.nature,
    badgeBoost,
  );

  const attacker: Combatant = {
    level,
    types: baseData.types,
    stat: pStat,
    stages,
    badgeBoost: false,
  };
  const defender: Combatant = {
    level: enemy.level,
    types: enemy.types,
    stat: enemy.stats[eStatName],
    stages: 0,
    badgeBoost: false,
  };

  const rawRolls = calcDmgRange(attacker, defender, moveObj, pinch);
  const roll = toRoll(rawRolls);
  const ohkoCount = rawRolls.filter((r) => r >= enemy.stats.hp).length;

  return {
    roll,
    ohkoPct: Math.round((ohkoCount / 16) * 100),
  };
}

export function getDamageIn(
  player: PlayerState,
  enemy: EnemyState,
  moveName: string,
  opts: { stages?: number } = {},
): DamageInResult | null {
  const moveObj = MoveData[moveName];
  if (!moveObj) return null;

  const { stages = 0 } = opts;
  const isSpecial = isSpecialType(moveObj.type);
  const level = getLevelFromExp(player.totalExp, player.growthRate);
  const baseData = PokemonData[player.species];

  const eStatName = isSpecial ? "spa" : "atk";
  const pStatName = isSpecial ? "spd" : "def";
  const badgeBoost = isSpecial ? player.badges.volcano : player.badges.soul;

  const pStat = calcStat(
    pStatName,
    baseData.baseStats[pStatName],
    level,
    player.ivs[pStatName],
    player.evs[pStatName],
    player.nature,
    badgeBoost,
  );

  const attacker: Combatant = {
    level: enemy.level,
    types: enemy.types,
    stat: enemy.stats[eStatName],
    stages: 0,
    badgeBoost: false,
  };
  const defender: Combatant = {
    level,
    types: baseData.types,
    stat: pStat,
    stages,
    badgeBoost: false,
  };

  const rawRolls = calcDmgRange(attacker, defender, moveObj, false);
  const roll = toRoll(rawRolls);

  const playerMaxHp = calcHealth(
    baseData.baseStats.hp,
    level,
    player.ivs.hp,
    player.evs.hp,
  );

  return {
    roll,
    isLethal: roll.max >= playerMaxHp,
  };
}
