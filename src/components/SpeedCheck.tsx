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
    <span className={`font-bold ${colorClass}`}>
      {label}
      <span className="text-base-content/40 text-xs font-normal ml-1">
        ({playerFinal} vs {enemySpeed})
      </span>
    </span>
  );
};
