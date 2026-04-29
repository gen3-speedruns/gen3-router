import React from "react";
import { useRunStore } from "../store/runState";
import { useEncounter } from "./EncounterContext";
import { getDamageIn } from "../selectors/damageSelectors";
import { buildPlayerSpec } from "../selectors/playerSelectors";

export const DamageIn: React.FC<{ move: string; stages?: number }> = ({
  move,
  stages = 0,
}) => {
  const player = useRunStore((s) => s.player);
  const enemy = useEncounter();

  if (!player) return null;

  const playerSpec = buildPlayerSpec(player);
  const damage = getDamageIn(enemy, playerSpec, move, { stages });
  if (!damage)
    return <span className="text-red-500">Move {move} not found!</span>;

  const { min, max, isLethal } = damage;

  return (
    <div
      className={`p-2 rounded text-sm my-1 flex justify-between items-center ${isLethal ? "bg-red-50 border border-red-200 text-red-900" : "bg-gray-50 border border-gray-200 text-gray-800"}`}
    >
      <span>
        Enemy <strong>{move}</strong>
      </span>
      <span className={isLethal ? "font-bold" : ""}>
        Takes {min} - {max} dmg
      </span>
    </div>
  );
};
