import React, { useMemo } from "react";
import { resolveWildEncounter } from "../domain/encounter";
import { useRunAt } from "../hooks/useRun";
import { BaseEncounter } from "./BaseEncounter";
import { EncounterProvider } from "./EncounterContext";
import { useRouteTree } from "./RouteTreeContext";

interface WildEncounterProps {
  id: string;
  species: string;
  level: number;
  optional?: boolean;
  children?: React.ReactNode;
}

export const WildEncounter: React.FC<WildEncounterProps> = ({
  id,
  species,
  level,
  optional = false,
  children,
}) => {
  const tree = useRouteTree();
  const encounter = useMemo(
    () => resolveWildEncounter(species, level),
    [species, level],
  );
  const runView = useRunAt(tree, id);

  if (!encounter) {
    return (
      <div className="text-error underline">Unknown species: {species}</div>
    );
  }

  return (
    <EncounterProvider
      value={{
        run:
          runView === null
            ? null
            : runView === "pending"
              ? "pending"
              : runView.run,
        encounter,
      }}
    >
      <BaseEncounter stepId={id} encounter={encounter} optional={optional}>
        {children}
      </BaseEncounter>
    </EncounterProvider>
  );
};
