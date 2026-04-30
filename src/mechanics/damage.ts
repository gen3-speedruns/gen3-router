import {
  type PokemonType,
  getTypeFactor,
  isSpecialType,
} from "../gamedata/typeChart";
import type {
  EnemySpec,
  Move,
  PlayerSpec,
  StatsTable,
} from "../gamedata/types";

export interface DamageResult {
  rolls: number[];
  min: number;
  max: number;
  ohkoCount: number;
  ohkoPct: number;
  isLethal: boolean;
}

export function calcDamageIn(
  enemy: EnemySpec,
  player: PlayerSpec,
  move: Move,
  opts: { stages?: number } = {},
): DamageResult {
  const rolls = calcDmgRange(
    { level: enemy.level, types: enemy.types, stats: enemy.stats, stages: 0 },
    {
      level: player.level,
      types: player.types,
      stats: player.stats,
      stages: opts.stages ?? 0,
    },
    move,
    false,
  );

  const ohkoCount = rolls.filter((r) => r >= player.stats.hp).length;
  return {
    rolls,
    min: rolls[0],
    max: rolls[15],
    ohkoCount,
    ohkoPct: Math.round((ohkoCount / 16) * 100),
    isLethal: rolls[15] >= player.stats.hp,
  };
}

export interface KoChanceResult {
  chance: number;
  outOf: number;
  pct: number;
  guaranteed: boolean;
}

export function calcKoChance(
  player: PlayerSpec,
  enemy: EnemySpec,
  moves: Move[],
  opts: { pinch?: boolean; stages?: number },
): KoChanceResult {
  const rollSets = moves.map((move) =>
    calcDmgRange(
      {
        level: player.level,
        types: player.types,
        stats: player.stats,
        stages: opts.stages ?? 0,
      },
      { level: enemy.level, types: enemy.types, stats: enemy.stats, stages: 0 },
      move,
      opts.pinch ?? false,
    ),
  );

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
  const winning = combos.filter((total) => total >= enemy.stats.hp).length;
  return {
    chance: winning,
    outOf,
    pct: Math.round((winning / outOf) * 100),
    guaranteed: combos[0] >= enemy.stats.hp,
  };
}

interface Combatant {
  level: number;
  types: PokemonType[];
  stats: StatsTable;
  stages: number;
}

const STAT_STAGE_RATIOS: [number, number][] = [
  [10, 40],
  [10, 35],
  [10, 30],
  [10, 25],
  [10, 20],
  [10, 15],
  [10, 10],
  [15, 10],
  [20, 10],
  [25, 10],
  [30, 10],
  [35, 10],
  [40, 10],
];

function applyStatStage(stat: number, stage: number): number {
  if (stage === 0) return stat;
  const [num, den] = STAT_STAGE_RATIOS[stage + 6];
  return Math.trunc((stat * num) / den);
}

function calcDmgRange(
  attacker: Combatant,
  defender: Combatant,
  move: Move,
  isPinchAbilityActive: boolean = false,
): number[] {
  const isSpecial = isSpecialType(move.type);
  let atkStat = isSpecial ? attacker.stats.spa : attacker.stats.atk;
  let defStat = isSpecial ? defender.stats.spd : defender.stats.def;

  // 1. Apply Stat Stages
  atkStat = applyStatStage(atkStat, attacker.stages);
  defStat = applyStatStage(defStat, defender.stages);

  // 2. Apply Pinch Ability (Torrent / Blaze / Overgrow / Swarm)
  const power = isPinchAbilityActive
    ? Math.trunc((150 * move.power) / 100)
    : move.power;

  // 3. Base Damage Formula
  let baseDmg = Math.trunc((2 * attacker.level) / 5) + 2;
  baseDmg = baseDmg * power * atkStat;
  baseDmg = Math.trunc(baseDmg / defStat);
  baseDmg = Math.trunc(baseDmg / 50);
  baseDmg += 2;

  // 4. STAB (Same Type Attack Bonus)
  if (attacker.types.includes(move.type)) {
    baseDmg = Math.trunc((15 * baseDmg) / 10);
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
