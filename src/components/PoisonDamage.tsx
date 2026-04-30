import React from "react";
import { useEncounter } from "./EncounterContext";
import { getPoisonDamage } from "../selectors/damageSelectors";

export const PoisonDamage: React.FC = () => {
  const { player } = useEncounter();
  const damage = getPoisonDamage(player);
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
