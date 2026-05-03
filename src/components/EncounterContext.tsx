import { createContext, useContext } from "react";
import type { Encounter } from "../domain/encounter";
import type { Run } from "../domain/run";

interface EncounterContextValue {
  run: Run;
  encounter: Encounter;
}

const EncounterContext = createContext<EncounterContextValue | null>(null);

export const useEncounter = (): EncounterContextValue => {
  const ctx = useContext(EncounterContext);
  if (!ctx)
    throw new Error("Combat tags must be used within an {% encounter %}");
  return ctx;
};

export const EncounterProvider = EncounterContext.Provider;
