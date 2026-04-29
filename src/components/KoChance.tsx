import React from "react";
import { useEncounter } from "./EncounterContext";
import { getKoChance } from "../selectors/damageSelectors";

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
  const { player, enemy } = useEncounter();

  const moveList = moves ?? Array(hits).fill(move);
  if (moveList.some((m) => !m))
    return (
      <span className="text-error text-sm">KoChance: no move specified</span>
    );

  const result = getKoChance(player, enemy, moveList, { pinch, stages });
  if (!result)
    return (
      <span className="text-error text-sm">Unknown move in ko-chance</span>
    );

  const { pct, chance, outOf, guaranteed } = result;
  const label = moveList.length === 1 ? "OHKO" : `${moveList.length}HKO`;

  const colorClass = guaranteed
    ? "text-success"
    : pct >= 50
      ? "text-warning"
      : "text-error";

  return (
    <span className={`font-bold ${colorClass}`}>
      {guaranteed ? `Guaranteed ${label}` : `${pct}% ${label}`}
      <span className="text-base-content/40 text-xs font-normal ml-1">
        ({chance}/{outOf})
      </span>
    </span>
  );
};
