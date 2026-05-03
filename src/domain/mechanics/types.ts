import type { PokemonType, StatsTable } from "../../gamedata/types";
import type { BadgeBoosts } from "../run";

export interface BattleStats {
  level: number;
  types: PokemonType[];
  stats: StatsTable;
  stages: number;
  isPinchActive: boolean;
  badges?: BadgeBoosts;
}
