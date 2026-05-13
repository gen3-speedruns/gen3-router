import { calcEncounterYield } from "./encounter";
import type { RouteStep, RouteTree } from "./routeTree";
import { applyEncounterYield, applyRareCandy, type Run } from "./run";

function applyStep(state: Run, step: RouteStep): Run {
  switch (step.kind) {
    case "encounter":
      return applyEncounterYield(state, calcEncounterYield(step.encounter));
    case "badge":
      return { ...state, badges: { ...state.badges, [step.badge]: true } };
    case "evolve":
      return { ...state, species: step.species };
    case "rareCandy":
      return applyRareCandy(state);
    case "choice":
      return state;
    case "calcsFor":
      return state;
  }
}

function applyAll(
  state: Run,
  steps: RouteTree,
  choices: Record<string, string>,
  optionals: Record<string, boolean>,
): Run | "pending" {
  for (const step of steps) {
    if (step.kind === "choice") {
      const selected = choices[step.id];
      if (!selected) return "pending";
      const option = step.options.find((o) => o.value === selected);
      if (!option) return "pending";
      const after = applyAll(state, option.steps, choices, optionals);
      if (after === "pending") return "pending";
      state = after;
    } else if (step.kind === "encounter" && step.optional) {
      const resolved = optionals[step.id];
      if (resolved === undefined) return "pending";
      if (resolved) state = applyStep(state, step);
    } else {
      state = applyStep(state, step);
    }
  }
  return state;
}

export function resolveStateAt(
  root: Run,
  tree: RouteTree,
  choices: Record<string, string>,
  optionals: Record<string, boolean>,
  targetId: string,
): Run | "pending" | null {
  function walk(state: Run, steps: RouteTree): Run | "pending" | null {
    for (const step of steps) {
      if (step.id === targetId) return state;

      if (step.kind === "choice") {
        const selected = choices[step.id];
        if (!selected) return "pending";
        const option = step.options.find((o) => o.value === selected);
        if (!option) return "pending";

        const inner = walk(state, option.steps);
        if (inner !== null) return inner;

        const after = applyAll(state, option.steps, choices, optionals);
        if (after === "pending") return "pending";
        state = after;
      } else if (step.kind === "encounter" && step.optional) {
        const resolved = optionals[step.id];
        if (resolved) state = applyStep(state, step);
      } else {
        state = applyStep(state, step);
      }
    }
    return null;
  }

  return walk(root, tree);
}
