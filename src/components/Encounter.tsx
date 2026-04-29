import React, { useState, useMemo } from "react";
import { useRunStore } from "../store/runState";
import { EncounterProvider } from "./EncounterContext";
import { buildEnemySpec } from "../selectors/playerSelectors";

interface EncounterProps {
  species: string;
  level: number;
  isTrainer?: boolean;
  fixedIv?: number;
  children: React.ReactNode;
}

export const Encounter: React.FC<EncounterProps> = ({
  species,
  level,
  isTrainer = false,
  fixedIv,
  children,
}) => {
  const [defeated, setDefeated] = useState(false);
  const gainEncounter = useRunStore((state) => state.gainEncounter);

  const enemySpec = useMemo(
    () => buildEnemySpec(species, level, fixedIv),
    [species, level, fixedIv],
  );

  if (!enemySpec)
    return (
      <div className="text-red-500 underline">
        Error: Species {species} not found
      </div>
    );

  return (
    <EncounterProvider value={enemySpec}>
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
