import React from "react";
import { useRunStore } from "../store/runState";
import { useEncounter } from "./EncounterContext";
import { getLevelFromExp } from "../core/mechanics/experience";
import { calcHealth, calcStat } from "../core/mechanics/stats";
import { calcDmgRange, type Combatant } from "../core/mechanics/damage";
import { PokemonData } from "../core/data/pokemon";
import { MoveData } from "../core/data/moves";
import { isSpecialType } from "../core/data/typeChart";

export const DamageIn: React.FC<{ move: string; stages?: number }> = ({
  move,
  stages = 0,
}) => {
  const player = useRunStore((s) => s.player);
  const enemy = useEncounter();

  if (!player) return null;
  const moveObj = MoveData[move];
  if (!moveObj)
    return <span className="text-red-500">Move {move} not found!</span>;

  const level = getLevelFromExp(player.totalExp, player.growthRate);
  const isSpecial = isSpecialType(moveObj.type);
  const baseData = PokemonData[player.species];

  const eStatName = isSpecial ? "spa" : "atk";
  const pStatName = isSpecial ? "spd" : "def";

  const eStat = enemy.stats[eStatName];
  const pStat = calcStat(
    pStatName,
    baseData.baseStats[pStatName],
    level,
    player.ivs[pStatName],
    player.evs[pStatName],
    player.nature,
    isSpecial ? player.badges.volcano : player.badges.soul,
  );

  const attacker: Combatant = {
    level: enemy.level,
    types: enemy.types,
    stat: eStat,
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

  const rolls = calcDmgRange(attacker, defender, moveObj, false);
  const max = rolls[15];

  // Warning if it can kill us from full HP (assuming we know Max HP)
  const maxHp = calcHealth(
    baseData.baseStats.hp,
    level,
    player.ivs.hp,
    player.evs.hp,
  );
  const danger = max >= maxHp;

  return (
    <div
      className={`p-2 rounded text-sm my-1 flex justify-between items-center ${danger ? "bg-red-50 border border-red-200 text-red-900" : "bg-gray-50 border border-gray-200 text-gray-800"}`}
    >
      <span>
        Enemy <strong>{move}</strong>
      </span>
      <span className={danger ? "font-bold" : ""}>
        Takes {rolls[0]} - {max} dmg
      </span>
    </div>
  );
};
