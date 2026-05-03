import React, { useMemo } from "react";
import { resolveTrainerEncounter } from "../domain/encounter";
import { useRunStore } from "../store/runState";
import { BaseEncounter } from "./BaseEncounter";
import { EncounterProvider } from "./EncounterContext";

interface TrainerEncounterProps {
  trainerId: string;
  slot: number;
  optional?: boolean;
  children?: React.ReactNode;
}

export const TrainerEncounter: React.FC<TrainerEncounterProps> = ({
  trainerId,
  slot,
  optional = false,
  children,
}) => {
  const run = useRunStore((s) => s.run);
  const encounter = useMemo(
    () => resolveTrainerEncounter(trainerId, slot),
    [trainerId, slot],
  );

  if (!encounter) {
    return (
      <div className="text-error underline">
        Unknown trainer encounter: {trainerId}-{slot}
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

  const actionId = `trainer-encounter-${trainerId}-${slot}`;
  return (
    <EncounterProvider value={{ run, encounter }}>
      <BaseEncounter
        actionId={actionId}
        encounter={encounter}
        optional={optional}
      >
        {children}
      </BaseEncounter>
    </EncounterProvider>
  );
};
