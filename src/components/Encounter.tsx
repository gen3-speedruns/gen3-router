import React, { useState, useMemo } from "react";
import { useRunStore } from "../store/runState";
import { PokemonData } from "../core/data/pokemon";
import { calcHealth, calcStat } from "../core/mechanics/stats";
import { EncounterProvider } from "./EncounterContext";

interface EncounterProps {
  species: string;
  level: number;
  isTrainer?: boolean;
  enemySpeed?: number;
  children: React.ReactNode;
}

export const Encounter: React.FC<EncounterProps> = ({
  species,
  level,
  isTrainer = false,
  enemySpeed,
  children,
}) => {
  const [defeated, setDefeated] = useState(false);
  const gainEncounter = useRunStore((state) => state.gainEncounter);

  const enemyData = useMemo(() => {
    const data = PokemonData[species];
    if (!data) return null;

    const stats = {
      hp: calcHealth(data.baseStats.hp, level, 0, 0),
      atk: calcStat("atk", data.baseStats.atk, level, 0, 0, "Hardy"),
      def: calcStat("def", data.baseStats.def, level, 0, 0, "Hardy"),
      spa: calcStat("spa", data.baseStats.spa, level, 0, 0, "Hardy"),
      spd: calcStat("spd", data.baseStats.spd, level, 0, 0, "Hardy"),
      spe:
        enemySpeed ?? calcStat("spe", data.baseStats.spe, level, 0, 0, "Hardy"),
    };

    return { species, level, types: data.types, stats };
  }, [species, level, enemySpeed]);

  if (!enemyData)
    return (
      <div className="text-red-500 underline">
        Error: Species {species} not found
      </div>
    );

  return (
    <EncounterProvider value={enemyData}>
      <div
        className={`border-l-4 p-5 my-6 rounded-lg shadow-sm bg-white border-blue-500 ${defeated && "opacity-60 grayscale-[0.5]"}`}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-black text-xl tracking-tight">
            {isTrainer ? "TRAINER" : "WILD"}: {species}{" "}
            <span className="text-gray-400 ml-2">Lv.{level}</span>
          </h3>
          <button
            onClick={() => {
              gainEncounter(species, level, isTrainer);
              setDefeated(true);
            }}
            disabled={defeated}
            className={`px-4 py-1 text-xs font-bold rounded uppercase tracking-widest ${defeated ? "bg-gray-200 text-gray-500" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            {defeated ? "Defeated" : "Mark Defeat"}
          </button>
        </div>

        <div className="prose prose-sm max-w-none text-gray-700">
          {children}
        </div>
      </div>
    </EncounterProvider>
  );
};
