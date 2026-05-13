import React from "react";
import { speedCheck } from "../domain/combat";
import { useEncounter } from "./EncounterContext";

interface SpeedCheckProps {
  playerStages: number;
  enemyStages: number;
}

export const SpeedCheck: React.FC<SpeedCheckProps> = ({
  playerStages,
  enemyStages,
}) => {
  const { run, encounter } = useEncounter();
  if (!run || run === "pending") {
    return (
      <div className="px-4 py-2 text-sm text-base-content/30 italic">
        {!run ? "Set your starter to see calcs." : "Pending earlier decision…"}
      </div>
    );
  }

  const { outcome, playerSpeed, enemySpeed } = speedCheck(
    run,
    encounter,
    playerStages,
    enemyStages,
  );

  const [outcomeLabel, resultColorClass] =
    outcome === "outspeed"
      ? ["Outspeed", "text-success"]
      : outcome === "outsped"
        ? ["Outsped", "text-error"]
        : ["Speed Tie", "text-warning"];

  const parts: string[] = [];
  if (playerStages !== 0) {
    parts.push(`Player at ${playerStages > 0 ? "+" : ""}${playerStages}`);
  }
  if (enemyStages !== 0) {
    parts.push(`Enemy at ${enemyStages > 0 ? "+" : ""}${enemyStages}`);
  }

  return (
    <div className="grid grid-cols-[5rem_1fr_auto] items-center gap-3 px-4 py-2 text-sm">
      <div className="text-xs font-medium uppercase tracking-wide text-base-content/45">
        Speed
      </div>

      <div className="text-base-content">
        {parts.length > 0 && parts.join(", ")}
      </div>

      <div className={`text-right font-bold ${resultColorClass}`}>
        {outcomeLabel}
        <span className="ml-1.5 text-xs font-normal text-base-content/40">
          ({playerSpeed} vs {enemySpeed})
        </span>
      </div>
    </div>
  );
};
