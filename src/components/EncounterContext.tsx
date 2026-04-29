import { createContext, useContext } from "react";
import type { EnemySpec } from "../gamedata/types";

const EncounterContext = createContext<EnemySpec | null>(null);

export const useEncounter = (): EnemySpec => {
  const ctx = useContext(EncounterContext);
  if (!ctx)
    throw new Error("Combat tags must be used within an {% encounter %}");
  return ctx;
};

export const EncounterProvider = EncounterContext.Provider;
