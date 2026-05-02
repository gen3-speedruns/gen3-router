import React, { useMemo } from "react";
import { useRunStore } from "../store/runState";
import { EncounterProvider } from "./EncounterContext";
import { TypeBadge } from "./TypeBadge";
import { PokemonSprite } from "./PokemonSprite";
import { RouteCard } from "./RouteCard";
import { useRouteAction } from "../hooks/useRouteAction";
import { buildRunner } from "../domain/runner";
import { resolveEncounter } from "../domain/encounter";

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
  const runnerRecord = useRunStore((s) => s.runner);

  const encounter = useMemo(
    () => resolveEncounter(species, level, isTrainer, fixedIv),
    [species, level, isTrainer, fixedIv],
  );

  const runner = useMemo(
    () => (runnerRecord ? buildRunner(runnerRecord) : null),
    [runnerRecord],
  );

  if (!encounter) {
    return (
      <div className="text-error underline">
        Error: Species {species} not found
      </div>
    );
  }

  if (!runner) {
    return (
      <div className="text-base-content/50 italic p-4">
        Set your starter to see calcs.
      </div>
    );
  }

  return (
    <EncounterProvider value={{ runner: runner, encounter: encounter }}>
      <RouteCard
        faded={completed}
        left={<PokemonSprite dexId={encounter.dexId} name={species} />}
        title={
          <>
            <span>{species}</span>
            <span className="text-sm font-normal text-base-content/50">
              Lv. {level}
            </span>
            {encounter.types.map((t) => (
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
              gainEncounter(encounter);
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
