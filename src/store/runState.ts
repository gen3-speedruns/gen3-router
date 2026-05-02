import { create } from "zustand";
import type { StatsTable, Nature } from "../gamedata/types";
import { persist } from "zustand/middleware";
import {
  calcStartingExp,
  type BadgeBoosts,
  type RunnerRecord,
} from "../domain/runner";
import { calcEncounterYield, type Encounter } from "../domain/encounter";

interface AppState {
  runner: RunnerRecord | null;
  completedActions: string[];
  choices: Record<string, string>;

  initRunner: (
    species: string,
    level: number,
    nature: Nature,
    ivs: StatsTable,
  ) => void;
  evolve: (newSpecies: string) => void;
  gainEncounter: (encounter: Encounter) => void;
  gainBadge: (badge: keyof BadgeBoosts) => void;
  completeAction: (id: string) => void;
  setChoice: (id: string, value: string) => void;
  reset: () => void;
}

export const useRunStore = create<AppState>()(
  persist(
    (set) => ({
      runner: null,
      completedActions: [],
      choices: {},

      initRunner: (species, level, nature, ivs) =>
        set(() => {
          return {
            runner: {
              species,
              nature,
              ivs,
              evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
              totalExp: calcStartingExp(species, level),
              badges: {
                boulder: false,
                thunder: false,
                soul: false,
                volcano: false,
              },
            },
          };
        }),

      evolve: (newSpecies) =>
        set((state) => {
          if (!state.runner) return state;
          return {
            runner: {
              ...state.runner,
              species: newSpecies,
            },
          };
        }),

      gainEncounter: (encounter) =>
        set((state) => {
          if (!state.runner) return state;
          const { exp, evs } = calcEncounterYield(encounter);
          const r = state.runner;
          return {
            runner: {
              ...r,
              totalExp: r.totalExp + exp,
              evs: {
                hp: Math.min(255, r.evs.hp + evs.hp),
                atk: Math.min(255, r.evs.atk + evs.atk),
                def: Math.min(255, r.evs.def + evs.def),
                spa: Math.min(255, r.evs.spa + evs.spa),
                spd: Math.min(255, r.evs.spd + evs.spd),
                spe: Math.min(255, r.evs.spe + evs.spe),
              },
            },
          };
        }),
      gainBadge: (badge) =>
        set((state) => {
          if (!state.runner) return state;
          return {
            runner: {
              ...state.runner,
              badges: { ...state.runner.badges, [badge]: true },
            },
          };
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
          runner: null,
          completedActions: [],
          choices: {},
        })),
    }),
    { name: "gen3-router-run-state" },
  ),
);
