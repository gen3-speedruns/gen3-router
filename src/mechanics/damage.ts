import {
  type PokemonType,
  getTypeFactor,
  isSpecialType,
} from "../gamedata/typeChart";
import type { EnemySpec, Move, PlayerSpec } from "../gamedata/types";

export interface DamageResult {
  rolls: number[];
  min: number;
  max: number;
  ohkoCount: number;
  ohkoPct: number;
  isLethal: boolean;
}

export function calcDamageOut(
  player: PlayerSpec,
  enemy: EnemySpec,
  move: Move,
  opts: { pinch?: boolean; stages?: number } = {},
): DamageResult {
  const isSpecial = isSpecialType(move.type);
  const atkStat = isSpecial ? player.stats.spa : player.stats.atk;
  const defStat = isSpecial ? enemy.stats.spd : enemy.stats.def;

  const rolls = calcDmgRange(
    {
      level: player.level,
      types: player.types,
      stat: atkStat,
      stages: opts.stages ?? 0,
    },
    { level: enemy.level, types: enemy.types, stat: defStat, stages: 0 },
    move,
    opts.pinch ?? false,
  );
  return toResult(rolls, enemy.stats.hp);
}

export function calcDamageIn(
  enemy: EnemySpec,
  player: PlayerSpec,
  move: Move,
  opts: { stages?: number } = {},
): DamageResult {
  const isSpecial = isSpecialType(move.type);
  const atkStat = isSpecial ? enemy.stats.spa : enemy.stats.atk;
  const defStat = isSpecial ? player.stats.spd : player.stats.def;

  const rolls = calcDmgRange(
    { level: enemy.level, types: enemy.types, stat: atkStat, stages: 0 },
    {
      level: player.level,
      types: player.types,
      stat: defStat,
      stages: opts.stages ?? 0,
    },
    move,
    false,
  );
  return toResult(rolls, player.stats.hp);
}

interface Combatant {
  level: number;
  types: PokemonType[];
  stat: number;
  stages: number;
}

function calcDmgRange(
  attacker: Combatant,
  defender: Combatant,
  move: Move,
  isPinchAbilityActive: boolean = false,
): number[] {
  let atkStat = attacker.stat;
  let defStat = defender.stat;
  let power = move.power;

  // 1. Apply Stat Stages
  if (attacker.stages) {
    const factor =
      attacker.stages > 0
        ? (2 + attacker.stages) / 2
        : 2 / (2 - attacker.stages);
    atkStat = Math.trunc(atkStat * factor);
  }
  if (defender.stages) {
    const factor =
      defender.stages > 0
        ? (2 + defender.stages) / 2
        : 2 / (2 - defender.stages);
    defStat = Math.trunc(defStat * factor);
  }

  // 2. Apply Pinch Ability (Torrent / Blaze / Overgrow / Swarm)
  if (isPinchAbilityActive) {
    power = Math.trunc(power * 1.5);
  }

  // 3. Base Damage Formula (Restored exact order of operations)
  let baseDmg = (Math.trunc((2 * attacker.level) / 5) + 2) * power;
  baseDmg = Math.trunc(Math.trunc(baseDmg * (atkStat / defStat)) / 50) + 2;

  // 4. STAB (Same Type Attack Bonus)
  if (attacker.types.includes(move.type)) {
    baseDmg = Math.trunc(baseDmg * 1.5);
  }

  // 5. Type Effectiveness
  for (const defType of defender.types) {
    baseDmg = Math.trunc(baseDmg * getTypeFactor(move.type, defType));
  }

  // 6. Calculate the 16 Random Rolls (85% to 100%)
  const range: number[] = [];
  for (let i = 85; i <= 100; i++) {
    range.push(Math.trunc((baseDmg * i) / 100));
  }

  return range;
}

function toResult(rolls: number[], defenderHp: number): DamageResult {
  const ohkoCount = rolls.filter((r) => r >= defenderHp).length;
  return {
    rolls,
    min: rolls[0],
    max: rolls[15],
    ohkoCount,
    ohkoPct: Math.round((ohkoCount / 16) * 100),
    isLethal: rolls[15] >= defenderHp,
  };
}
