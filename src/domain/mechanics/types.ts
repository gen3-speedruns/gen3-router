import type { PokemonType, StatsTable } from "../../gamedata/types";
import type { BadgeBoosts } from "../run";

export interface BattleStats {
  level: number;
  types: PokemonType[];
  stats: StatsTable;
  stages: number;
  badges?: BadgeBoosts;
}

export interface EncounterYield {
  exp: number;
  evs: StatsTable;
}
