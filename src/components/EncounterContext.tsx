import { createContext, useContext } from "react";
import type { PokemonType } from "../gamedata/typeChart";

export interface EnemyState {
  species: string;
  level: number;
  types: PokemonType[];
  stats: {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
}

const EncounterContext = createContext<EnemyState | null>(null);

export const useEncounter = () => {
  const context = useContext(EncounterContext);
  if (!context)
    throw new Error("Combat tags must be used within an {% encounter %}");
  return context;
};

export const EncounterProvider = EncounterContext.Provider;
