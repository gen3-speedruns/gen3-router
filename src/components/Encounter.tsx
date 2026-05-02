import React, { useMemo } from "react";
import { useRunStore } from "../store/runState";
import { EncounterProvider } from "./EncounterContext";
import { buildEnemySpec, buildPlayerSpec } from "../selectors/playerSelectors";
import { TypeBadge } from "./TypeBadge";
import { PokemonSprite } from "./PokemonSprite";
import { RouteCard } from "./RouteCard";
import { useRouteAction } from "../hooks/useRouteAction";

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
  const { completed, complete } = useRouteAction();
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
      <RouteCard
        faded={completed}
        left={<PokemonSprite dexId={enemySpec.dexId} name={species} />}
        title={
          <>
            <span>{species}</span>
            <span className="text-sm font-normal text-base-content/50">
              Lv. {level}
            </span>
            {enemySpec.types.map((t) => (
              <TypeBadge key={t} type={t} />
            ))}
            {optional && !completed && (
              <span className="badge badge-sm badge-ghost">optional</span>
            )}
          </>
        }
        action={
          <button
            onClick={() => {
              gainEncounter(species, level, isTrainer);
              complete();
            }}
            disabled={completed}
            className="btn btn-sm btn-primary"
          >
            {completed ? "Defeated" : "Defeat"}
          </button>
        }
      >
        {children}
      </RouteCard>
    </EncounterProvider>
  );
};
