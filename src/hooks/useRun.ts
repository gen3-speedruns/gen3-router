import { useMemo } from "react";
import type { RouteTree } from "../domain/routeTree";
import { levelOf, pinchThresholdOf, statsOf, type Run } from "../domain/run";
import { resolveStateAt } from "../domain/stateTree";
import { useRunStore } from "../store/runState";

export interface RunView {
  run: Run;
  level: number;
  stats: ReturnType<typeof statsOf>;
  pinchThreshold: number;
}

export function toRunView(run: Run): RunView {
  return {
    run,
    level: levelOf(run),
    stats: statsOf(run),
    pinchThreshold: pinchThresholdOf(run),
  };
}

export function useRunAt(
  tree: RouteTree,
  stepId: string,
): RunView | "pending" | null {
  const root = useRunStore((s) => s.root);
  const choices = useRunStore((s) => s.choices);
  const optionals = useRunStore((s) => s.optionals);

  return useMemo(() => {
    if (!root) return null;
    const state = resolveStateAt(root, tree, choices, optionals, stepId);
    if (state === null || state === "pending") return state;
    return toRunView(state);
  }, [root, tree, choices, optionals, stepId]);
}

export function useRun(tree: RouteTree): RunView | null {
  const root = useRunStore((s) => s.root);
  const choices = useRunStore((s) => s.choices);
  const optionals = useRunStore((s) => s.optionals);

  return useMemo(() => {
    if (!root) return null;
    const ids = collectIds(tree, choices);
    for (let i = ids.length - 1; i >= 0; i--) {
      const state = resolveStateAt(root, tree, choices, optionals, ids[i]);
      if (state && state !== "pending") return toRunView(state);
    }
    return toRunView(root);
  }, [root, tree, choices, optionals]);
}

function collectIds(
  steps: RouteTree,
  choices: Record<string, string>,
): string[] {
  const ids: string[] = [];
  for (const step of steps) {
    ids.push(step.id);
    if (step.kind === "choice") {
      const selected = choices[step.id];
      const option = step.options.find((o) => o.value === selected);
      if (option) ids.push(...collectIds(option.steps, choices));
    }
  }
  return ids;
}
