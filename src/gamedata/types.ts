export interface StatsTable {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
}

export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel";

export type Nature =
  | "Hardy"
  | "Lonely"
  | "Brave"
  | "Adamant"
  | "Naughty"
  | "Bold"
  | "Docile"
  | "Relaxed"
  | "Impish"
  | "Lax"
  | "Timid"
  | "Hasty"
  | "Serious"
  | "Jolly"
  | "Naive"
  | "Modest"
  | "Mild"
  | "Quiet"
  | "Bashful"
  | "Rash"
  | "Calm"
  | "Gentle"
  | "Sassy"
  | "Careful"
  | "Quirky";

export type GrowthRate =
  | "Erratic"
  | "Fast"
  | "MediumFast"
  | "MediumSlow"
  | "Slow"
  | "Fluctuating";

export interface TrainerPartyMember {
  iv: number;
  level: number;
  species: string;
  moves?: string[];
  heldItem?: string;
}

export interface PokemonData {
  dexId: number;
  types: PokemonType[];
  baseStats: StatsTable;
  evYield: StatsTable;
  baseExp: number;
  growthRate: GrowthRate;
}

export interface MoveData {
  type: PokemonType;
  power: number;
  accuracy: number;
  pp: number;
}

export interface TrainerData {
  name: string;
  isFemale: boolean;
  isDouble: boolean;
  party: TrainerPartyMember[];
}
