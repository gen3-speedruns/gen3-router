import React from "react";
import { useRunStore } from "../store/runState";
import { getLevelUpHpGain } from "../selectors/playerSelectors";

interface LevelUpHpGainProps {
  level: number;
}

export const LevelUpHpGain: React.FC<LevelUpHpGainProps> = ({ level }) => {
  const player = useRunStore((s) => s.player);

  if (!player) {
    return (
      <div className="px-4 py-2 text-sm text-base-content/50 italic">
        Set your starter to see HP gain.
      </div>
    );
  }

  const gain = getLevelUpHpGain(player, level);

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
