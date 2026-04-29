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

  const { rolls, isLethal } = damage;
  return (
    <div
      className={`flex justify-between items-center text-sm px-3 py-1.5 my-1 rounded border ${
        isLethal
          ? "bg-error/10 border-error/30 text-error"
          : "bg-base-200 border-base-content/10 text-base-content"
      }`}
    >
      <span>
        <strong>{move}</strong>
      </span>
      <span>
        <strong>
          {formatDmgRange(rolls)}
          {isLethal && (
            <span className="ml-2 badge badge-error badge-xs">Lethal</span>
          )}
        </strong>
      </span>
    </div>
  );
};

function formatDmgRange(rolls: number[]): string {
  const min = rolls[0];
  const second = rolls[1];
  const penult = rolls[rolls.length - 2];
  const max = rolls[rolls.length - 1];

  const minIsOutlier = min !== second;
  const maxIsOutlier = max !== penult;

  const prefix = minIsOutlier ? `(${min})` : "";
  const core = formatInterval(
    minIsOutlier ? second : min,
    maxIsOutlier ? penult : max,
  );
  const suffix = maxIsOutlier ? `(${max})` : "";

  return `${prefix}${core}${suffix}`;
}

function formatInterval(lo: number, hi: number): string {
  return lo === hi ? `${lo}` : `${lo}–${hi}`;
}
