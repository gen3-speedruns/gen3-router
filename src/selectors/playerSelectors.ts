import { getLevelFromExp } from "../mechanics/experience";
import { calcHealth, calcStat, calcPinchThreshold } from "../mechanics/stats";
import { PokemonData } from "../gamedata/pokemon";
import type { PlayerState } from "../store/runState";
import type { PlayerSpec, EnemySpec, StatsTable } from "../gamedata/types";

export function buildPlayerSpec(player: PlayerState): PlayerSpec {
  const data = PokemonData[player.species];
  const level = getLevelFromExp(player.totalExp, player.growthRate);
  const { badges, ivs, evs, nature } = player;

  const hp = calcHealth(data.baseStats.hp, level, ivs.hp, evs.hp);

  const stats: StatsTable = {
    hp,
    atk: calcStat(
      "atk",
      data.baseStats.atk,
      level,
      ivs.atk,
      evs.atk,
      nature,
      badges.boulder,
    ),
    def: calcStat(
      "def",
      data.baseStats.def,
      level,
      ivs.def,
      evs.def,
      nature,
      badges.soul,
    ),
    spa: calcStat(
      "spa",
      data.baseStats.spa,
      level,
      ivs.spa,
      evs.spa,
      nature,
      badges.volcano,
    ),
    spd: calcStat(
      "spd",
      data.baseStats.spd,
      level,
      ivs.spd,
      evs.spd,
      nature,
      badges.volcano,
    ),
    spe: calcStat(
      "spe",
      data.baseStats.spe,
      level,
      ivs.spe,
      evs.spe,
      nature,
      badges.thunder,
    ),
  };

  return {
    level,
    types: data.types,
    stats,
    pinchThreshold: calcPinchThreshold(hp),
  };
}

export function buildEnemySpec(
  species: string,
  level: number,
  fixedIv = 0,
): EnemySpec | null {
  const data = PokemonData[species];
  if (!data) return null;

  const iv = Math.floor((fixedIv * 31) / 255);

  const stats: StatsTable = {
    hp: calcHealth(data.baseStats.hp, level, iv, 0),
    atk: calcStat("atk", data.baseStats.atk, level, iv, 0, "Hardy"),
    def: calcStat("def", data.baseStats.def, level, iv, 0, "Hardy"),
    spa: calcStat("spa", data.baseStats.spa, level, iv, 0, "Hardy"),
    spd: calcStat("spd", data.baseStats.spd, level, iv, 0, "Hardy"),
    spe: calcStat("spe", data.baseStats.spe, level, iv, 0, "Hardy"),
  };

  return { species, level, types: data.types, stats };
}
