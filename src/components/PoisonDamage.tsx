import React from "react";
import { poisonDamage } from "../domain/combat";
import { useEncounter } from "./EncounterContext";

export const PoisonDamage: React.FC = () => {
  const { run } = useEncounter();
  if (!run || run === "pending") {
    return (
      <div className="px-4 py-2 text-sm text-base-content/30 italic">
        {!run ? "Set your starter to see calcs." : "Pending earlier decision…"}
      </div>
    );
  }

  const damage = poisonDamage(run);
  return (
    <div className="grid grid-cols-[5rem_1fr_auto] items-center gap-3 px-4 py-2 text-sm">
      <div className="text-xs font-medium uppercase tracking-wide text-base-content/45">
        Poison
      </div>
      <div className="text-base-content/60">per turn</div>
      <div className="text-right font-mono">{damage}</div>
    </div>
  );
};
