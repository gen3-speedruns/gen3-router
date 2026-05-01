import type { PokemonType } from "./typeChart";

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
  dexId: number;
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

export interface BadgeBoosts {
  boulder: boolean;
  thunder: boolean;
  soul: boolean;
  volcano: boolean;
}

export interface PlayerSpec {
  level: number;
  types: PokemonType[];
  stats: StatsTable;
  pinchThreshold: number;
  badges: BadgeBoosts;
}

export interface EnemySpec {
  species: string;
  dexId: number;
  level: number;
  types: PokemonType[];
  stats: StatsTable;
}
