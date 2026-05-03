import React, { useMemo } from "react";
import { resolveEncounter } from "../domain/encounter";
import { useRunStore } from "../store/runState";
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
  const run = useRunStore((s) => s.run);
  const encounter = useMemo(
    () => resolveEncounter(species, level, false, fixedIv),
    [species, level, fixedIv],
  );

  if (!encounter)
    return (
      <div className="text-error text-sm">
        Encounter: Species {species} not found
      </div>
    );

  if (!run)
    return (
      <div className="text-base-content/50 italic text-sm">
        Set your starter to see calcs.
      </div>
    );

  return (
    <EncounterProvider value={{ run, encounter }}>{children}</EncounterProvider>
  );
};
