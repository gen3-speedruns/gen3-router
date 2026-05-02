import React from "react";
import { useEncounter } from "./EncounterContext";
import { getKoChance } from "../domain/combat";

interface KoChanceProps {
  move?: string;
  moves?: string[];
  hits?: number;
  pinch?: boolean;
  stages?: number;
}

export const KoChance: React.FC<KoChanceProps> = ({
  move,
  moves,
  hits = 1,
  pinch = false,
  stages = 0,
}) => {
  const { runner, encounter } = useEncounter();

  const moveList = moves ?? Array(hits).fill(move);
  if (moveList.some((m) => !m)) {
    return (
      <div className="px-4 py-2 text-sm text-error">
        KoChance: no move specified
      </div>
    );
  }

  const result = getKoChance(runner, encounter, moveList, pinch, stages);
  if (!result) {
    return (
      <div className="px-4 py-2 text-sm text-error">
        Unknown move in ko-chance
      </div>
    );
  }

  const { pct, chance, outOf, guaranteed } = result;
  const label = moveList.length === 1 ? "OHKO" : `${moveList.length}HKO`;
  const moveName = [...new Set(moveList)].join(" + ");

  const resultColorClass = guaranteed
    ? "text-success"
    : pct >= 50
      ? "text-warning"
      : "text-error";

  return (
    <div className="grid grid-cols-[5rem_1fr_auto] items-center gap-3 px-4 py-2 text-sm">
      <div className="text-xs font-medium uppercase tracking-wide text-base-content/45">
        {label}
      </div>

      <div className="text-base-content">
        {moveName}
        {pinch && (
          <span className="ml-1.5 text-xs text-base-content/40">(pinch)</span>
        )}
      </div>

      <div className={`text-right font-bold ${resultColorClass}`}>
        {guaranteed ? "Guaranteed" : `${pct}%`}
        <span className="ml-1.5 font-normal text-xs text-base-content/40">
          ({chance}/{outOf})
        </span>
      </div>
    </div>
  );
};
