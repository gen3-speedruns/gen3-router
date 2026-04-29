import React from "react";
import { useRunStore } from "../store/runState";
import { useEncounter } from "./EncounterContext";
import { getDamageOut } from "../selectors/damageSelectors";
import { buildPlayerSpec } from "../selectors/playerSelectors";

export const DamageOut: React.FC<{
  move: string;
  pinch?: boolean;
  stages?: number;
}> = ({ move, pinch = false, stages = 0 }) => {
  const player = useRunStore((s) => s.player);
  const enemy = useEncounter();

  if (!player) return null;

  const damage = getDamageOut(buildPlayerSpec(player), enemy, move, {
    pinch,
    stages,
  });
  if (!damage)
    return <span className="text-red-500">Move {move} not found!</span>;

  const { min, max, ohkoPct } = damage;

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
