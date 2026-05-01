import React, { useMemo } from "react";
import { useRunStore } from "../store/runState";
import { buildEnemySpec, buildPlayerSpec } from "../selectors/playerSelectors";
import { EncounterProvider } from "./EncounterContext";

interface EnemyProps {
  species: string;
  level: number;
  fixedIv?: number;
  children: React.ReactNode;
}

export const Enemy: React.FC<EnemyProps> = ({
  species,
  level,
  fixedIv,
  children,
}) => {
  const player = useRunStore((s) => s.player);

  const enemySpec = useMemo(
    () => buildEnemySpec(species, level, fixedIv),
    [species, level, fixedIv],
  );

  const playerSpec = useMemo(
    () => (player ? buildPlayerSpec(player) : null),
    [player],
  );

  if (!enemySpec)
    return (
      <div className="text-error text-sm">
        Enemy: Species {species} not found
      </div>
    );

  if (!playerSpec)
    return (
      <div className="text-base-content/50 italic text-sm">
        Set your starter to see calcs.
      </div>
    );

  return (
    <EncounterProvider value={{ player: playerSpec, enemy: enemySpec }}>
      {children}
    </EncounterProvider>
  );
};
