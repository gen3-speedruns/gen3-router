import React from "react";
import type { Encounter } from "../domain/encounter";
import { useRouteAction } from "../hooks/useRouteAction";
import { useRunStore } from "../store/runState";
import { PokemonSprite } from "./PokemonSprite";
import { RouteCard } from "./RouteCard";
import { TypeBadge } from "./TypeBadge";

interface EncounterProps {
  encounter: Encounter;
  optional?: boolean;
  children?: React.ReactNode;
}

export const BaseEncounter: React.FC<EncounterProps> = ({
  encounter,
  optional = false,
  children,
}) => {
  const gainEncounter = useRunStore((state) => state.gainEncounter);
  const { completed, complete } = useRouteAction();
  return (
    <RouteCard
      faded={completed}
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
  );
};
