import React from "react";
import { useRunStore } from "../store/runState";
import { ChoiceProvider } from "./ChoiceContext";

interface ChoiceProps {
  id: string;
  label?: string;
  children: React.ReactNode;
}

export const Choice: React.FC<ChoiceProps> = ({ id, label, children }) => {
  const chosen = useRunStore((s) => s.choices[id] ?? null);
  const setChoice = useRunStore((s) => s.setChoice);
  const unsetChoice = useRunStore((s) => s.unsetChoice);
  const hasStarter = useRunStore((s) => s.root !== null);

  return (
    <ChoiceProvider
      value={{ chosen, onChoose: (value) => setChoice(id, value) }}
    >
      <section className="card my-5 border border-base-content/10 bg-base-100 shadow-sm">
        <div className="card-body gap-3 p-4">
          <div className="flex items-center justify-between">
            {label && (
              <div className="text-xs font-medium uppercase tracking-wide text-base-content/45">
                {label}
              </div>
            )}
            {chosen && hasStarter && (
              <button
                onClick={() => unsetChoice(id)}
                className="btn btn-xs btn-ghost"
              >
                Undo
              </button>
            )}
          </div>
          <div className={chosen ? "space-y-2" : "flex flex-wrap gap-2"}>
            {hasStarter ? (
              children
            ) : (
              <span className="text-sm text-base-content/30 italic">
                Set your starter to make a choice.
              </span>
            )}
          </div>
        </div>
      </section>
    </ChoiceProvider>
  );
};
