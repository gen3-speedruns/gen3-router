import type { MoveData, PokemonType, StatsTable } from "../../gamedata/types";
import { applyStatStage } from "./stats";
import type { BattleStats } from "./types";

export interface DamageResult {
  rolls: number[];
  min: number;
  max: number;
  ohkoCount: number;
  ohkoPct: number;
  isLethal: boolean;
}

export function calcDamageIn(
  attacker: BattleStats,
  defender: BattleStats,
  move: MoveData,
): DamageResult {
  const rolls = calcDmgRange(attacker, defender, move);
  const ohkoCount = rolls.filter((r) => r >= defender.stats.hp).length;
  return {
    rolls,
    min: rolls[0],
    max: rolls[15],
    ohkoCount,
    ohkoPct: Math.round((ohkoCount / 16) * 100),
    isLethal: rolls[15] >= defender.stats.hp,
  };
}

export interface KoChanceResult {
  chance: number;
  outOf: number;
  pct: number;
  guaranteed: boolean;
}

export function calcKoChance(
  attacker: BattleStats,
  defender: BattleStats,
  moves: MoveData[],
): KoChanceResult {
  const rollSets = moves.map((move) => calcDmgRange(attacker, defender, move));

  let combos: number[] = rollSets[0];
  for (let i = 1; i < rollSets.length; i++) {
    const next: number[] = [];
    for (const a of combos) {
      for (const b of rollSets[i]) {
        next.push(a + b);
      }
    }
    combos = next;
  }

  const outOf = combos.length;
  const winning = combos.filter((total) => total >= defender.stats.hp).length;
  return {
    chance: winning,
    outOf,
    pct: Math.round((winning / outOf) * 100),
    guaranteed: combos[0] >= defender.stats.hp,
  };
}

export function calcPoisonDamage(stats: StatsTable) {
  return Math.trunc(stats.hp / 8);
}

const SPECIAL_TYPES: PokemonType[] = [
  "water",
  "grass",
  "fire",
  "ice",
  "electric",
  "psychic",
  "dragon",
  "dark",
];

const TYPES_FACTORS = {
  normal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5],
  fire: [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2],
  water: [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1],
  electric: [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1],
  grass: [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5],
  ice: [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5],
  fighting: [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2],
  poison: [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0],
  ground: [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2],
  flying: [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5],
  psychic: [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5],
  bug: [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5],
  rock: [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5],
  ghost: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
  dragon: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5],
  dark: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
  steel: [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5],
};

const TYPE_INDEX: Record<PokemonType, number> = {
  normal: 0,
  fire: 1,
  water: 2,
  electric: 3,
  grass: 4,
  ice: 5,
  fighting: 6,
  poison: 7,
  ground: 8,
  flying: 9,
  psychic: 10,
  bug: 11,
  rock: 12,
  ghost: 13,
  dragon: 14,
  dark: 15,
  steel: 16,
};

function calcDmgRange(
  attacker: BattleStats,
  defender: BattleStats,
  move: MoveData,
): number[] {
  const isSpecial = SPECIAL_TYPES.includes(move.type);
  let atkStat = isSpecial ? attacker.stats.spa : attacker.stats.atk;
  let defStat = isSpecial ? defender.stats.spd : defender.stats.def;

  // Apply Stat Stages
  atkStat = applyStatStage(atkStat, attacker.stages);
  defStat = applyStatStage(defStat, defender.stages);

  // Badge boosts
  if (isSpecial) {
    if (attacker.badges?.volcano) atkStat = Math.trunc((110 * atkStat) / 100);
    if (defender.badges?.volcano) defStat = Math.trunc((110 * defStat) / 100);
  } else {
    if (attacker.badges?.boulder) atkStat = Math.trunc((110 * atkStat) / 100);
    if (defender.badges?.soul) defStat = Math.trunc((110 * defStat) / 100);
  }

  // Apply Pinch Ability (Torrent / Blaze / Overgrow / Swarm)
  const power = attacker.isPinchActive
    ? Math.trunc((150 * move.power) / 100)
    : move.power;

  // Base Damage Formula
  let baseDmg = Math.trunc((2 * attacker.level) / 5) + 2;
  baseDmg = baseDmg * power * atkStat;
  baseDmg = Math.trunc(baseDmg / defStat);
  baseDmg = Math.trunc(baseDmg / 50);
  baseDmg += 2;

  // STAB (Same Type Attack Bonus)
  if (attacker.types.includes(move.type)) {
    baseDmg = Math.trunc((15 * baseDmg) / 10);
  }

  // Type Effectiveness
  for (const defType of defender.types) {
    baseDmg = Math.trunc(
      baseDmg * TYPES_FACTORS[move.type][TYPE_INDEX[defType]],
    );
  }

  // Calculate the 16 Random Rolls (85% to 100%)
  const range: number[] = [];
  for (let i = 85; i <= 100; i++) {
    range.push(Math.trunc((baseDmg * i) / 100));
  }

  return range;
}
