import { create } from "zustand";
import type { Nature } from "../gamedata/natures";
import type { StatsTable, GrowthRate, BadgeBoosts } from "../gamedata/types";
import { calculateExpYield, getExpAtLevel } from "../mechanics/experience";
import { PokemonData } from "../gamedata/pokemon";
import { persist } from "zustand/middleware";

export interface PlayerState {
  species: string;
  nature: Nature;
  growthRate: GrowthRate;
  ivs: StatsTable;
  evs: StatsTable;
  totalExp: number;
  badges: BadgeBoosts;
}

interface AppState {
  player: PlayerState | null;
  completedActions: string[];
  choices: Record<string, string>;

  initPlayer: (
    species: string,
    level: number,
    nature: Nature,
    ivs: StatsTable,
  ) => void;
  evolve: (newSpecies: string) => void;
  gainEncounter: (species: string, level: number, isTrainer: boolean) => void;
  gainBadge: (badge: keyof PlayerState["badges"]) => void;
  completeAction: (id: string) => void;
  setChoice: (id: string, value: string) => void;
  reset: () => void;
}

export const useRunStore = create<AppState>()(
  persist(
    (set) => ({
      player: null,
      completedActions: [],
      choices: {},

      initPlayer: (species, level, nature, ivs) =>
        set(() => {
          const data = PokemonData[species];
          const startingExp = getExpAtLevel(level, data.growthRate);

          return {
            player: {
              species,
              growthRate: data.growthRate,
              nature,
              ivs: { ...ivs },
              evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
              totalExp: startingExp,
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
          if (!state.player) return state;
          const data = PokemonData[newSpecies];
          return {
            player: {
              ...state.player,
              species: newSpecies,
              growthRate: data.growthRate,
            },
          };
        }),

      gainEncounter: (species, level, isTrainer) =>
        set((state) => {
          if (!state.player) return state;
          const p = state.player;

          const data = PokemonData[species];
          if (!data) {
            console.error(`Pokemon ${species} not found in database!`);
            return state;
          }

          const expGained = calculateExpYield(data.baseExp, level, isTrainer);
          const evYield = data.evYield;

          return {
            player: {
              ...p,
              totalExp: p.totalExp + expGained,
              evs: {
                hp: Math.min(255, p.evs.hp + evYield.hp),
                atk: Math.min(255, p.evs.atk + evYield.atk),
                def: Math.min(255, p.evs.def + evYield.def),
                spa: Math.min(255, p.evs.spa + evYield.spa),
                spd: Math.min(255, p.evs.spd + evYield.spd),
                spe: Math.min(255, p.evs.spe + evYield.spe),
              },
            },
          };
        }),

      gainBadge: (badge) =>
        set((state) => {
          if (!state.player) return state;
          return {
            player: {
              ...state.player,
              badges: { ...state.player.badges, [badge]: true },
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
          player: null,
          completedActions: [],
          choices: {},
        })),
    }),
    { name: "gen3-router-run-state" },
  ),
);
