import { create } from "zustand";
import { persist } from "zustand/middleware";
import { startNewRun, type Run } from "../domain/run";
import type { Nature, StatsTable } from "../gamedata/types";

interface AppState {
  root: Run | null;
  optionals: Record<string, boolean>;
  choices: Record<string, string>;

  startRun: (
    species: string,
    level: number,
    nature: Nature,
    ivs: StatsTable,
  ) => void;
  resolveOptional: (id: string, did: boolean) => void;
  unresolveOptional: (id: string) => void;
  setChoice: (id: string, value: string) => void;
  unsetChoice: (id: string) => void;
  reset: () => void;
}

export const useRunStore = create<AppState>()(
  persist(
    (set) => ({
      root: null,
      optionals: {},
      choices: {},

      startRun: (species, level, nature, ivs) =>
        set({
          root: startNewRun(species, level, nature, ivs),
          optionals: {},
          choices: {},
        }),

      resolveOptional: (id, did) =>
        set((s) => ({ optionals: { ...s.optionals, [id]: did } })),

      unresolveOptional: (id) =>
        set((s) => {
          const next = { ...s.optionals };
          delete next[id];
          return { optionals: next };
        }),

      setChoice: (id, value) =>
        set((s) => ({ choices: { ...s.choices, [id]: value } })),

      unsetChoice: (id) =>
        set((s) => {
          const next = { ...s.choices };
          delete next[id];
          return { choices: next };
        }),

      reset: () => set({ root: null, optionals: {}, choices: {} }),
    }),
    {
      name: "gen3-router-run-state",
      version: 2,
      migrate: () => ({ root: null, optionals: {}, choices: {} }),
    },
  ),
);
