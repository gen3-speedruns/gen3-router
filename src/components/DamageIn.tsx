import React from "react";
import { useRunStore } from "../store/runState";
import { useEncounter } from "./EncounterContext";
import { getDamageIn } from "../selectors/damageSelectors";

export const DamageIn: React.FC<{ move: string; stages?: number }> = ({
  move,
  stages = 0,
}) => {
  const player = useRunStore((s) => s.player);
  const enemy = useEncounter();

  if (!player) return null;

  const damage = getDamageIn(player, enemy, move, { stages });
  if (!damage)
    return <span className="text-red-500">Move {move} not found!</span>;

  const {
    roll: { min, max },
    isLethal,
  } = damage;

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
