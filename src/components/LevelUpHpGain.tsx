import React from "react";
import { hpGainOnLevelUp } from "../domain/run";
import { useEncounterMaybe } from "./EncounterContext";
import { useRunContext } from "./RunContext";

interface LevelUpHpGainProps {
  level: number;
}

export const LevelUpHpGain: React.FC<LevelUpHpGainProps> = ({ level }) => {
  const encounterCtx = useEncounterMaybe();
  const runCtx = useRunContext();
  const run = encounterCtx?.run ?? runCtx;

  if (!run || run === "pending") {
    return (
      <div className="px-4 py-2 text-sm text-base-content/30 italic">
        {!run ? "Set your starter to see calcs." : "Pending earlier decision…"}
      </div>
    );
  }

  const gain = hpGainOnLevelUp(run, level);
  return (
    <div className="grid grid-cols-[5rem_1fr_auto] items-center gap-3 px-4 py-2 text-sm">
      <div className="text-xs font-medium uppercase tracking-wide text-base-content/45">
        HP gain
      </div>
      <div className="text-base-content/60">
        Lv. {level - 1} → {level}
      </div>
      <div className="text-right font-mono font-bold text-success">+{gain}</div>
    </div>
  );
};
