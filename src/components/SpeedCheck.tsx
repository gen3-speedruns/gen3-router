import React from "react";
import { useEncounter } from "./EncounterContext";
import { getSpeedCheck } from "../selectors/damageSelectors";

export const SpeedCheck: React.FC<{ stages?: number }> = ({ stages = 0 }) => {
  const { player, enemy } = useEncounter();
  if (!player) return null;

  const { outcome, playerFinal, enemySpeed } = getSpeedCheck(
    player,
    enemy,
    stages,
  );

  const [label, colorClass] =
    outcome === "outspeed"
      ? ["Outspeed", "text-success"]
      : outcome === "outsped"
        ? ["Outsped", "text-error"]
        : ["Speed Tie", "text-warning"];

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 text-sm">
      <span className="badge badge-xs badge-warning shrink-0">SPD</span>
      <span className="flex-1 text-base-content/60">Speed</span>
      <span className={`font-bold ${colorClass}`}>
        {label}
        <span className="text-base-content/40 text-xs font-normal ml-1">
          ({playerFinal} vs {enemySpeed})
        </span>
      </span>
    </div>
  );
};
