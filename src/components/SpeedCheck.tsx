import React from "react";
import { useRunStore } from "../store/runState";
import { useEncounter } from "./EncounterContext";
import { calcStat, applyStatStage } from "../mechanics/stats";
import { getLevelFromExp } from "../mechanics/experience";
import { PokemonData } from "../gamedata/pokemon";

export const SpeedCheck: React.FC<{ stages?: number }> = ({ stages = 0 }) => {
  const player = useRunStore((s) => s.player);
  const enemy = useEncounter();

  if (!player) return null;
  const level = getLevelFromExp(player.totalExp, player.growthRate);
  const baseSpe = PokemonData[player.species]?.baseStats.spe || 0;

  const rawSpeed = calcStat(
    "spe",
    baseSpe,
    level,
    player.ivs.spe,
    player.evs.spe,
    player.nature,
    player.badges.thunder,
  );
  const finalSpeed = applyStatStage(rawSpeed, stages);

  const diff = finalSpeed - enemy.stats.spe;
  const result = diff > 0 ? "Outspeed" : diff < 0 ? "Outsped" : "Speed Tie";
  const color =
    diff > 0 ? "text-green-600" : diff < 0 ? "text-red-600" : "text-amber-600";

  return (
    <span className={`font-bold ${color}`}>
      {result} ({finalSpeed} vs {enemy.stats.spe})
    </span>
  );
};
