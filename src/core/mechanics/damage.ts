import { type PokemonType, getTypeFactor } from "../data/typeChart";
import type { Move } from "../types";

export interface Combatant {
  level: number;
  types: PokemonType[];
  stat: number;
  stages: number;
  badgeBoost?: boolean;
}

export function calcDmgRange(
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

  // 2. Apply Badge Boosts (1.1x hidden modifier)
  if (attacker.badgeBoost) atkStat = Math.trunc(atkStat * 1.1);
  if (defender.badgeBoost) defStat = Math.trunc(defStat * 1.1);

  // 3. Apply Pinch Ability (Torrent / Blaze / Overgrow / Swarm)
  if (isPinchAbilityActive) {
    power = Math.trunc(power * 1.5);
  }

  // 4. Base Damage Formula (Restored exact order of operations)
  let baseDmg = (Math.trunc((2 * attacker.level) / 5) + 2) * power;
  baseDmg = Math.trunc(Math.trunc(baseDmg * (atkStat / defStat)) / 50) + 2;

  // 5. STAB (Same Type Attack Bonus)
  if (attacker.types.includes(move.type)) {
    baseDmg = Math.trunc(baseDmg * 1.5);
  }

  // 6. Type Effectiveness
  for (const defType of defender.types) {
    baseDmg = Math.trunc(baseDmg * getTypeFactor(move.type, defType));
  }

  // 7. Calculate the 16 Random Rolls (85% to 100%)
  const range: number[] = [];
  for (let rnd = 0.85; rnd <= 1.0; rnd += 0.01) {
    range.push(Math.trunc(baseDmg * rnd));
  }

  return range;
}
