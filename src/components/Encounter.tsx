import React, { useMemo } from "react";
import { resolveEncounter, type EncounterSource } from "../domain/encounter";
import { useRouteAction } from "../hooks/useRouteAction";
import { useRunStore } from "../store/runState";
import { EncounterProvider } from "./EncounterContext";
import { PokemonSprite } from "./PokemonSprite";
import { RouteCard } from "./RouteCard";
import { TypeBadge } from "./TypeBadge";

interface EncounterProps {
  source: EncounterSource;
  optional?: boolean;
  children?: React.ReactNode;
}

export const Encounter: React.FC<EncounterProps> = ({
  source,
  optional = false,
  children,
}) => {
  const { completed, complete } = useRouteAction();
  const gainEncounter = useRunStore((state) => state.gainEncounter);
  const run = useRunStore((s) => s.run);
  const encounter = useMemo(() => resolveEncounter(source), [source]);

  if (!encounter) {
    return (
      <div className="text-error underline">
        Unknown encounter: {JSON.stringify(source)}
      </div>
    );
  }

  if (!run) {
    return (
      <div className="text-base-content/50 italic p-4">
        Set your starter to see calcs.
      </div>
    );
  }

  return (
    <EncounterProvider value={{ run, encounter }}>
      <RouteCard
        faded={completed}
        left={
          <PokemonSprite dexId={encounter.dexId} name={encounter.species} />
        }
        title={
          <>
            <span>{encounter.species}</span>
            <span className="text-sm font-normal text-base-content/50">
              Lv. {encounter.level}
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
