import React from "react";
import { useEncounter } from "./EncounterContext";
import { getDamageIn } from "../selectors/damageSelectors";

export const DamageIn: React.FC<{ move: string; stages?: number }> = ({
  move,
  stages = 0,
}) => {
  const { player, enemy } = useEncounter();
  const damage = getDamageIn(enemy, player, move, { stages });

  if (!damage) {
    return (
      <div className="px-4 py-2 text-sm text-error">Move {move} not found!</div>
    );
  }

  const { rolls, isLethal } = damage;
  const label =
    stages !== 0 ? `${move} (${stages > 0 ? "+" : ""}${stages} Def)` : move;

  return (
    <div className="grid grid-cols-[5rem_1fr_auto] items-center gap-3 px-4 py-2 text-sm">
      <div className="text-xs font-medium uppercase tracking-wide text-base-content/45">
        Damage
      </div>
      <div className={isLethal ? "text-error" : "text-base-content"}>
        {label}
      </div>
      <div className="text-right font-mono">
        <span className={isLethal ? "font-bold text-error" : ""}>
          {formatDmgRange(rolls)}
        </span>
        {isLethal && (
          <span className="ml-2 text-xs font-medium uppercase tracking-wide text-error">
            lethal
          </span>
        )}
      </div>
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
