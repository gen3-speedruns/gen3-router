import { createContext, useContext } from "react";
import type { EnemySpec, PlayerSpec } from "../gamedata/types";

interface EncounterContextValue {
  player: PlayerSpec;
  enemy: EnemySpec;
}

const EncounterContext = createContext<EncounterContextValue | null>(null);

export const useEncounter = (): EncounterContextValue => {
  const ctx = useContext(EncounterContext);
  if (!ctx)
    throw new Error("Combat tags must be used within an {% encounter %}");
  return ctx;
};

export const EncounterProvider = EncounterContext.Provider;
