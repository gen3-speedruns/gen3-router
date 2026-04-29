import React from "react";
import { useEncounter } from "./EncounterContext";
import { getDamageIn } from "../selectors/damageSelectors";

export const DamageIn: React.FC<{ move: string; stages?: number }> = ({
  move,
  stages = 0,
}) => {
  const { player, enemy } = useEncounter();

  const damage = getDamageIn(enemy, player, move, { stages });
  if (!damage)
    return <span className="text-error text-sm">Move {move} not found!</span>;

  const { min, max, isLethal } = damage;

  return (
    <div
      className={`flex justify-between items-center text-sm px-3 py-1.5 my-1 rounded border ${
        isLethal
          ? "bg-error/10 border-error/30 text-error"
          : "bg-base-200 border-base-content/10 text-base-content"
      }`}
    >
      <span>
        Enemy <strong>{move}</strong>
      </span>
      <span className={isLethal ? "font-bold" : ""}>
        {min} – {max} dmg
        {isLethal && (
          <span className="ml-2 badge badge-error badge-xs">Lethal</span>
        )}
      </span>
    </div>
  );
};
