import React, { useMemo } from "react";
import { resolveEncounter, type EncounterSource } from "../domain/encounter";
import { useRunStore } from "../store/runState";
import { Calcs } from "./Calcs";
import { EncounterProvider } from "./EncounterContext";

interface CalcsForProps {
  source: EncounterSource;
  children: React.ReactNode;
}

export const CalcsFor: React.FC<CalcsForProps> = ({ source, children }) => {
  const run = useRunStore((s) => s.run);
  const encounter = useMemo(() => resolveEncounter(source), [source]);

  if (!encounter)
    return (
      <div className="text-error text-sm">
        Unknown encounter: {JSON.stringify(source)}
      </div>
    );

  if (!run)
    return (
      <div className="text-base-content/50 italic text-sm">
        Set your starter to see calcs.
      </div>
    );

  return (
    <EncounterProvider value={{ run, encounter }}>
      <Calcs>{children}</Calcs>
    </EncounterProvider>
  );
};
