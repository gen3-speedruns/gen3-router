import React from "react";
import { useRunAt } from "../hooks/useRun";
import { useEncounterMaybe } from "./EncounterContext";
import { useRouteTree } from "./RouteTreeContext";
import { RunProvider } from "./RunContext";

interface CalcsProps {
  id?: string;
  children: React.ReactNode;
}

const CalcsShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="rounded-box border border-base-content/10 bg-base-200">
    <div className="divide-y divide-base-content/10">{children}</div>
  </section>
);

export const Calcs: React.FC<CalcsProps> = ({ id, children }) => {
  const existingCtx = useEncounterMaybe();
  const tree = useRouteTree();
  const runView = useRunAt(tree, id ?? "");

  if (existingCtx) {
    return <CalcsShell>{children}</CalcsShell>;
  }

  const run =
    !id || runView === null
      ? null
      : runView === "pending"
        ? "pending"
        : runView.run;

  return (
    <RunProvider value={run}>
      <CalcsShell>{children}</CalcsShell>
    </RunProvider>
  );
};
