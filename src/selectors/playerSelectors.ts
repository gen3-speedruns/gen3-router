import { getLevelFromExp } from "../mechanics/experience";
import {
  calcHealth,
  calcStat,
  calcPinchThreshold,
  type StatName,
} from "../mechanics/stats";
import { PokemonData } from "../gamedata/pokemon";
import type { PlayerState } from "../store/runState";
import type { StatsTable } from "../gamedata/types";

export interface PlayerSnapshot {
  level: number;
  maxHp: number;
  pinchThreshold: number;
  stats: StatsTable;
}

export function getPlayerSnapshot(player: PlayerState): PlayerSnapshot {
  const data = PokemonData[player.species];
  const level = getLevelFromExp(player.totalExp, player.growthRate);

  const maxHp = calcHealth(
    data.baseStats.hp,
    level,
    player.ivs.hp,
    player.evs.hp,
  );

  const statNames: StatName[] = ["atk", "def", "spa", "spd", "spe"];
  const badgeMap: Record<StatName, boolean> = {
    atk: player.badges.boulder,
    def: player.badges.soul,
    spa: player.badges.volcano,
    spd: player.badges.volcano,
    spe: player.badges.thunder,
  };

  const stats = statNames.reduce(
    (acc, name) => {
      acc[name] = calcStat(
        name,
        data.baseStats[name],
        level,
        player.ivs[name],
        player.evs[name],
        player.nature,
        badgeMap[name],
      );
      return acc;
    },
    { hp: maxHp } as StatsTable,
  );

  return {
    level,
    maxHp,
    pinchThreshold: calcPinchThreshold(maxHp),
    stats,
  };
}
