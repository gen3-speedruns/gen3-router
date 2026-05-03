import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calcEncounterYield, type Encounter } from "../domain/encounter";
import {
  applyEncounterYield,
  applyRareCandy,
  startNewRun,
  type BadgeBoosts,
  type Run,
} from "../domain/run";
import type { Nature, StatsTable } from "../gamedata/types";

interface AppState {
  run: Run | null;
  completedActions: string[];
  choices: Record<string, string>;

  startRun: (
    species: string,
    level: number,
    nature: Nature,
    ivs: StatsTable,
  ) => void;
  evolve: (newSpecies: string) => void;
  gainEncounter: (encounter: Encounter) => void;
  gainBadge: (badge: keyof BadgeBoosts) => void;
  gainRareCandy: () => void;
  completeAction: (id: string) => void;
  setChoice: (id: string, value: string) => void;
  reset: () => void;
}

export const useRunStore = create<AppState>()(
  persist(
    (set) => ({
      run: null,
      completedActions: [],
      choices: {},

      startRun: (species, level, nature, ivs) =>
        set(() => {
          return {
            run: startNewRun(species, level, nature, ivs),
          };
        }),

      evolve: (newSpecies) =>
        set((state) => {
          if (!state.run) return state;
          return {
            run: {
              ...state.run,
              species: newSpecies,
            },
          };
        }),

      gainEncounter: (encounter) =>
        set((state) => {
          if (!state.run) return state;
          return {
            run: applyEncounterYield(state.run, calcEncounterYield(encounter)),
          };
        }),

      gainBadge: (badge) =>
        set((state) => {
          if (!state.run) return state;
          return {
            run: {
              ...state.run,
              badges: { ...state.run.badges, [badge]: true },
            },
          };
        }),

      gainRareCandy: () =>
        set((state) => {
          if (!state.run) return state;
          return { run: applyRareCandy(state.run) };
        }),

      completeAction: (id) =>
        set((state) => ({
          completedActions: state.completedActions.includes(id)
            ? state.completedActions
            : [...state.completedActions, id],
        })),

      setChoice: (id, value) =>
        set((state) => ({
          choices: { ...state.choices, [id]: value },
        })),

      reset: () =>
        set(() => ({
          run: null,
          completedActions: [],
          choices: {},
        })),
    }),
    {
      name: "gen3-router-run-state",
      version: 1,
      migrate: () => ({ run: null, completedActions: [], choices: {} }),
    },
  ),
);
