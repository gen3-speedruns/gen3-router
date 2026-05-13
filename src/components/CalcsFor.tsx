import React, { useMemo } from "react";
import { resolveTrainerEncounter } from "../domain/encounter";
import { useRunAt } from "../hooks/useRun";
import { Calcs } from "./Calcs";
import { EncounterProvider } from "./EncounterContext";
import { useRouteTree } from "./RouteTreeContext";

interface CalcsForProps {
  id: string;
  trainerId: string;
  slot?: number;
  children: React.ReactNode;
}

export const CalcsFor: React.FC<CalcsForProps> = ({
  id,
  trainerId,
  slot = 0,
  children,
}) => {
  const tree = useRouteTree();
  const encounter = useMemo(
    () => resolveTrainerEncounter(trainerId, slot),
    [trainerId, slot],
  );
  const runView = useRunAt(tree, id);

  if (!encounter)
    return (
      <div className="text-error text-sm">
        Unknown trainer: {trainerId} slot {slot}
      </div>
    );

  const run =
    runView === null ? null : runView === "pending" ? "pending" : runView.run;

  return (
    <EncounterProvider value={{ run, encounter }}>
      <Calcs>{children}</Calcs>
    </EncounterProvider>
  );
};
