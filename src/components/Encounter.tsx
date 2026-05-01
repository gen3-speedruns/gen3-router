import React, { useState, useMemo } from "react";
import { useRunStore } from "../store/runState";
import { EncounterProvider } from "./EncounterContext";
import { buildEnemySpec, buildPlayerSpec } from "../selectors/playerSelectors";
import { TypeBadge } from "./TypeBadge";
import { PokemonSprite } from "./PokemonSprite";

interface EncounterProps {
  species: string;
  level: number;
  isTrainer?: boolean;
  optional?: boolean;
  fixedIv?: number;
  children?: React.ReactNode;
}

export const Encounter: React.FC<EncounterProps> = ({
  species,
  level,
  isTrainer = false,
  optional = false,
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

  if (!enemySpec) {
    return (
      <div className="text-error underline">
        Error: Species {species} not found
      </div>
    );
  }

  if (!playerSpec) {
    return (
      <div className="text-base-content/50 italic p-4">
        Set your starter to see calcs.
      </div>
    );
  }

  return (
    <EncounterProvider value={{ player: playerSpec, enemy: enemySpec }}>
      <section
        className={`card my-4 border border-base-content/10 bg-base-100 shadow-sm ${
          defeated ? "opacity-70" : ""
        }`}
      >
        <div className="card-body gap-4 p-4">
          <header className="flex items-center justify-between gap-3">
            <div className="flex items-center min-w-0">
              <PokemonSprite dexId={enemySpec.dexId} name={species} />
              <div className="card-title flex-wrap items-baseline gap-x-2 gap-y-1 pl-2">
                <span>{species}</span>
                <span className="text-sm font-normal text-base-content/50">
                  Lv. {level}
                </span>
                {enemySpec.types.map((t) => (
                  <TypeBadge key={t} type={t} />
                ))}
                {optional && !defeated && (
                  <span className="badge badge-sm badge-ghost">optional</span>
                )}
              </div>
            </div>

            <div className="card-actions">
              <button
                onClick={() => {
                  gainEncounter(species, level, isTrainer);
                  setDefeated(true);
                }}
                disabled={defeated}
                className="btn btn-sm btn-primary"
              >
                {defeated ? "Defeated" : "Defeat"}
              </button>
            </div>
          </header>

          {children && <div className="space-y-3">{children}</div>}
        </div>
      </section>
    </EncounterProvider>
  );
};
