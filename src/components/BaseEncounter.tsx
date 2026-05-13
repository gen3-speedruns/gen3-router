import React from "react";
import type { Encounter } from "../domain/encounter";
import { useRunStore } from "../store/runState";
import { PokemonSprite } from "./PokemonSprite";
import { RouteCard } from "./RouteCard";
import { TypeBadge } from "./TypeBadge";

interface BaseEncounterProps {
  stepId: string;
  encounter: Encounter;
  optional: boolean;
  children?: React.ReactNode;
}

export const BaseEncounter: React.FC<BaseEncounterProps> = ({
  stepId,
  encounter,
  optional,
  children,
}) => {
  const resolveOptional = useRunStore((s) => s.resolveOptional);
  const unresolveOptional = useRunStore((s) => s.unresolveOptional);
  const resolved = useRunStore((s) => s.optionals[stepId]);
  const hasStarter = useRunStore((s) => s.root !== null);

  const isPending = optional && resolved === undefined;

  const action = optional ? (
    !hasStarter ? null : resolved === undefined ? (
      <button
        onClick={() => resolveOptional(stepId, true)}
        className="btn btn-sm btn-primary"
      >
        Done
      </button>
    ) : (
      <div className="flex items-center gap-2">
        <button
          onClick={() => unresolveOptional(stepId)}
          className="btn btn-xs btn-ghost"
        >
          Undo
        </button>
      </div>
    )
  ) : null;

  return (
    <RouteCard
      faded={optional && resolved === false}
      left={<PokemonSprite dexId={encounter.dexId} name={encounter.species} />}
      title={
        <>
          <span>{encounter.species}</span>
          <span className="text-sm font-normal text-base-content/50">
            Lv. {encounter.level}
          </span>
          {encounter.types.map((t) => (
            <TypeBadge key={t} type={t} />
          ))}
          {optional && (
            <span className="badge badge-sm badge-ghost">optional</span>
          )}
        </>
      }
      action={action}
    >
      {isPending ? null : children}
    </RouteCard>
  );
};
