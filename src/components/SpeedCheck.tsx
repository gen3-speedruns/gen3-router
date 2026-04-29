import React from "react";
import { useRunStore } from "../store/runState";
import { useEncounter } from "./EncounterContext";
import { getSpeedCheck } from "../selectors/damageSelectors";
import { buildPlayerSpec } from "../selectors/playerSelectors";

export const SpeedCheck: React.FC<{ stages?: number }> = ({ stages = 0 }) => {
  const player = useRunStore((s) => s.player);
  const enemy = useEncounter();

  if (!player) return null;

  const { outcome, playerFinal, enemySpeed } = getSpeedCheck(
    buildPlayerSpec(player),
    enemy,
    stages,
  );

  const result =
    outcome === "outspeed"
      ? "Outspeed"
      : outcome === "outsped"
        ? "Outsped"
        : "Speed Tie";
  const color =
    outcome === "outspeed"
      ? "text-green-600"
      : outcome === "outsped"
        ? "text-red-600"
        : "text-amber-600";

  return (
    <span className={`font-bold ${color}`}>
      {result} ({playerFinal} vs {enemySpeed})
    </span>
  );
};
