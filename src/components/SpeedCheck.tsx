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

  const [outcomeLabel, resultColorClass] =
    outcome === "outspeed"
      ? ["Outspeed", "text-success"]
      : outcome === "outsped"
        ? ["Outsped", "text-error"]
        : ["Speed Tie", "text-warning"];

  return (
    <div className="grid grid-cols-[5rem_1fr_auto] items-center gap-3 px-4 py-2 text-sm">
      <div className="text-xs font-medium uppercase tracking-wide text-base-content/45">
        Speed
      </div>

      <div className="text-base-content">
        {playerFinal} vs {enemySpeed}
      </div>

      <div className={`text-right font-bold ${resultColorClass}`}>
        {outcomeLabel}
      </div>
    </div>
  );
};
