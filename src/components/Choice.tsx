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

  return (
    <ChoiceProvider
      value={{ chosen, onChoose: (value) => setChoice(id, value) }}
    >
      <section className="card my-5 border border-base-content/10 bg-base-100 shadow-sm">
        <div className="card-body gap-3 p-4">
          {label && (
            <div className="text-xs font-medium uppercase tracking-wide text-base-content/45">
              {label}
            </div>
          )}
          <div className={chosen ? "space-y-2" : "flex flex-wrap gap-2"}>
            {children}
          </div>
        </div>
      </section>
    </ChoiceProvider>
  );
};
