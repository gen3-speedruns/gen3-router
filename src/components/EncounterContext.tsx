import { createContext, useContext } from "react";
import type { Runner } from "../domain/runner";
import type { Encounter } from "../domain/encounter";

interface EncounterContextValue {
  runner: Runner;
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
