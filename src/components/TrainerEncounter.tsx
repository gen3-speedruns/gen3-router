import React, { useMemo } from "react";
import { resolveTrainerEncounter } from "../domain/encounter";
import { useRunAt } from "../hooks/useRun";
import { BaseEncounter } from "./BaseEncounter";
import { EncounterProvider } from "./EncounterContext";
import { useRouteTree } from "./RouteTreeContext";

interface TrainerEncounterProps {
  trainerId: string;
  slot?: number;
  optional?: boolean;
  children?: React.ReactNode;
}

export const TrainerEncounter: React.FC<TrainerEncounterProps> = ({
  trainerId,
  slot = 0,
  optional = false,
  children,
}) => {
  const tree = useRouteTree();
  const stepId = `${trainerId}-${slot}`;
  const encounter = useMemo(
    () => resolveTrainerEncounter(trainerId, slot),
    [trainerId, slot],
  );
  const runView = useRunAt(tree, stepId);

  if (!encounter) {
    return (
      <div className="text-error underline">
        Unknown trainer: {trainerId} slot {slot}
      </div>
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
      <BaseEncounter stepId={stepId} encounter={encounter} optional={optional}>
        {children}
      </BaseEncounter>
    </EncounterProvider>
  );
};
