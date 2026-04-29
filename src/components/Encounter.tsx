import React, { useState, useMemo } from "react";
import { useRunStore } from "../store/runState";
import { EncounterProvider } from "./EncounterContext";
import { buildEnemySpec, buildPlayerSpec } from "../selectors/playerSelectors";

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
  const player = useRunStore((s) => s.player);

  const enemySpec = useMemo(
    () => buildEnemySpec(species, level, fixedIv),
    [species, level, fixedIv],
  );

  const playerSpec = useMemo(
    () => (player ? buildPlayerSpec(player) : null),
    [player],
  );

  if (!enemySpec)
    return (
      <div className="text-red-500 underline">
        Error: Species {species} not found
      </div>
    );

  if (!playerSpec)
    return (
      <div className="text-slate-400 italic p-4">
        Initialize your starter to see calculations.
      </div>
    );

  return (
    <EncounterProvider value={{ player: playerSpec, enemy: enemySpec }}>
      <div
        className={`card bg-base-100 border-l-4 border-primary shadow-sm my-6 ${defeated && "opacity-60 grayscale-[0.5]"}`}
      >
        <div className="card-body p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="card-title text-lg">
              <span className="badge badge-outline badge-sm mr-1">
                {isTrainer ? "TRAINER" : "WILD"}
              </span>
              {species}{" "}
              <span className="text-base-content/40 text-base ml-1">
                Lv.{level}
              </span>
            </h3>
            <button
              onClick={() => {
                gainEncounter(species, level, isTrainer);
                setDefeated(true);
              }}
              disabled={defeated}
              className={`btn btn-xs ${defeated ? "btn-disabled" : "btn-primary"}`}
            >
              {defeated ? "Defeated" : "Mark Defeat"}
            </button>
          </div>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {children}
          </div>
        </div>
      </div>
    </EncounterProvider>
  );
};
