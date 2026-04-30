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
        Set your starter to see calcs.
      </div>
    );

  return (
    <EncounterProvider value={{ player: playerSpec, enemy: enemySpec }}>
      <div
        className={`card bg-base-100 border-l-4 border-primary my-4 ${defeated ? "opacity-60" : ""}`}
      >
        <div className="card-body gap-2 p-3">
          <div className="card-title justify-between">
            <h3 className="flex items-center gap-2 text-sm font-bold">
              <span className="badge badge-outline badge-xs">
                {isTrainer ? "TRAINER" : "WILD"}
              </span>
              {species}
              <span className="text-base-content/40 font-normal">
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
              {defeated ? "Fainted" : "Faint"}
            </button>
          </div>

          {children}
        </div>
      </div>
    </EncounterProvider>
  );
};
