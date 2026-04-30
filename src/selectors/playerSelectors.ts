import { getLevelFromExp } from "../mechanics/experience";
import {
  buildPlayerStats,
  buildEnemyStats,
  calcPinchThreshold,
} from "../mechanics/stats";
import { PokemonData } from "../gamedata/pokemon";
import type { PlayerState } from "../store/runState";
import type { PlayerSpec, EnemySpec } from "../gamedata/types";

export function buildPlayerSpec(player: PlayerState): PlayerSpec {
  const data = PokemonData[player.species];
  const level = getLevelFromExp(player.totalExp, player.growthRate);
  const stats = buildPlayerStats(
    data.baseStats,
    level,
    player.ivs,
    player.evs,
    player.nature,
  );
  return {
    level,
    types: data.types,
    stats,
    pinchThreshold: calcPinchThreshold(stats.hp),
    badges: player.badges,
  };
}

export function buildEnemySpec(
  species: string,
  level: number,
  fixedIv = 0,
): EnemySpec | null {
  const data = PokemonData[species];
  if (!data) return null;
  const stats = buildEnemyStats(data.baseStats, level, fixedIv);
  return { species, level, types: data.types, stats };
}
