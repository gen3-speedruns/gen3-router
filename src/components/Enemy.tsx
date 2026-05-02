import React, { useMemo } from "react";
import { useRunStore } from "../store/runState";
import { EncounterProvider } from "./EncounterContext";
import { resolveEncounter } from "../domain/encounter";
import { buildRunner } from "../domain/runner";

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
  const runnerRecord = useRunStore((s) => s.runner);

  const encounter = useMemo(
    () => resolveEncounter(species, level, false, fixedIv),
    [species, level, fixedIv],
  );

  const runner = useMemo(
    () => (runnerRecord ? buildRunner(runnerRecord) : null),
    [runnerRecord],
  );

  if (!encounter)
    return (
      <div className="text-error text-sm">
        Encounter: Species {species} not found
      </div>
    );

  if (!runner)
    return (
      <div className="text-base-content/50 italic text-sm">
        Set your starter to see calcs.
      </div>
    );

  return (
    <EncounterProvider value={{ runner: runner, encounter: encounter }}>
      {children}
    </EncounterProvider>
  );
};
