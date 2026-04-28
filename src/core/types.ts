import type { PokemonType } from "./data/typeChart";

export interface StatsTable {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
}

export type GrowthRate =
  | "Erratic"
  | "Fast"
  | "MediumFast"
  | "MediumSlow"
  | "Slow"
  | "Fluctuating";

export interface Pokemon {
  types: PokemonType[];
  baseStats: StatsTable;
  evYield: StatsTable;
  baseExp: number;
  growthRate: GrowthRate;
}

export interface Move {
  type: PokemonType;
  power: number;
  accuracy: number;
  pp: number;
}
