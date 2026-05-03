import React, { useMemo } from "react";
import { resolveWildEncounter } from "../domain/encounter";
import { useRunStore } from "../store/runState";
import { BaseEncounter } from "./BaseEncounter";
import { EncounterProvider } from "./EncounterContext";

interface WildEncounterProps {
  species: string;
  level: number;
  optional?: boolean;
  children?: React.ReactNode;
}

export const WildEncounter: React.FC<WildEncounterProps> = ({
  species,
  level,
  optional = false,
  children,
}) => {
  const run = useRunStore((s) => s.run);
  const encounter = useMemo(
    () => resolveWildEncounter(species, level),
    [species, level],
  );

  if (!encounter) {
    return (
      <div className="text-error underline">Unknown species: {species}</div>
    );
  }

  if (!run) {
    return (
      <div className="text-base-content/50 italic p-4">
        Set your starter to see calcs.
      </div>
    );
  }

  return (
    <EncounterProvider value={{ run, encounter }}>
      <BaseEncounter encounter={encounter} optional={optional}>
        {children}
      </BaseEncounter>
    </EncounterProvider>
  );
};
