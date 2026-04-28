import React from "react";
import { useRunStore } from "../store/runState";
import { useEncounter } from "./EncounterContext";
import { getLevelFromExp } from "../core/mechanics/experience";
import { calcStat } from "../core/mechanics/stats";
import { calcDmgRange, type Combatant } from "../core/mechanics/damage";
import { PokemonData } from "../core/data/pokemon";
import { MoveData } from "../core/data/moves";
import { isSpecialType } from "../core/data/typeChart";

export const DamageOut: React.FC<{
  move: string;
  pinch?: boolean;
  stages?: number;
}> = ({ move, pinch = false, stages = 0 }) => {
  const player = useRunStore((s) => s.player);
  const enemy = useEncounter();

  if (!player) return null;
  const moveObj = MoveData[move];
  if (!moveObj)
    return <span className="text-red-500">Move {move} not found!</span>;

  const level = getLevelFromExp(player.totalExp, player.growthRate);
  const isSpecial = isSpecialType(moveObj.type);
  const baseData = PokemonData[player.species];

  // Map to correct Attack/SpA and Defense/SpD
  const pStatName = isSpecial ? "spa" : "atk";
  const eStatName = isSpecial ? "spd" : "def";

  const pStat = calcStat(
    pStatName,
    baseData.baseStats[pStatName],
    level,
    player.ivs[pStatName],
    player.evs[pStatName],
    player.nature,
    isSpecial ? player.badges.volcano : player.badges.boulder,
  );
  const eStat = enemy.stats[eStatName];

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
    stat: eStat,
    stages: 0,
    badgeBoost: false,
  };

  const rolls = calcDmgRange(attacker, defender, moveObj, pinch);
  const min = rolls[0];
  const max = rolls[15];

  // Calculate OHKO chance
  const ohkoCount = rolls.filter((r) => r >= enemy.stats.hp).length;
  const ohkoPct = Math.round((ohkoCount / 16) * 100);

  return (
    <div className="bg-blue-50 border border-blue-200 p-2 rounded text-sm text-blue-900 my-1 flex justify-between items-center">
      <span>
        <strong>{move}</strong>{" "}
        {pinch && <span className="text-blue-500 text-xs">(Pinch Active)</span>}
      </span>
      <span>
        {min} - {max} dmg{" "}
        <span
          className={`ml-2 font-bold ${ohkoPct === 100 ? "text-green-600" : ohkoPct > 0 ? "text-amber-600" : "text-gray-500"}`}
        >
          ({ohkoPct}% OHKO)
        </span>
      </span>
    </div>
  );
};
