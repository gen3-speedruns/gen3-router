import { create } from "zustand";
import type { Nature } from "../core/data/natures";
import type { StatsTable, GrowthRate } from "../core/types";
import { getExpAtLevel } from "../core/mechanics/experience";

export interface PlayerState {
  species: string;
  nature: Nature;
  growthRate: GrowthRate;
  ivs: StatsTable;
  evs: StatsTable;
  totalExp: number;
  currentHp: number;
  stages: StatsTable;
  badges: {
    boulder: boolean; // 1.1x Attack
    thunder: boolean; // 1.1x Speed
    soul: boolean; // 1.1x Defense
    volcano: boolean; // 1.1x SpA & SpD
  };
}

interface AppState {
  player: PlayerState;

  initPlayer: (
    species: string,
    growthRate: GrowthRate,
    nature: Nature,
    ivs: StatsTable,
  ) => void;
  evolve: (newSpecies: string) => void;
  gainEncounter: (expGained: number, evYield: StatsTable) => void;
  modifyHp: (amount: number) => void;
  applyStatStage: (stat: keyof StatsTable, amount: number) => void;
  resetCombatState: () => void;
  toggleBadge: (badge: keyof PlayerState["badges"], active: boolean) => void;
}

const initialStats: StatsTable = {
  hp: 0,
  atk: 0,
  def: 0,
  spa: 0,
  spd: 0,
  spe: 0,
};

const STARTING_LEVEL = 5;
const STARTING_GROWTH: GrowthRate = "MediumSlow";
const STARTING_EXP = getExpAtLevel(STARTING_LEVEL, STARTING_GROWTH);

export const useRunStore = create<AppState>((set) => ({
  player: {
    species: "Squirtle",
    nature: "Hardy",
    growthRate: "MediumSlow",
    ivs: { ...initialStats },
    evs: { ...initialStats },
    totalExp: STARTING_EXP,
    currentHp: 20,
    stages: { ...initialStats },
    badges: { boulder: false, thunder: false, soul: false, volcano: false },
  },

  rules: {
    badges: { boulder: false, cascade: false, thunder: false, volcano: false },
  },

  initPlayer: (species, growthRate, nature, ivs) =>
    set((state) => ({
      player: {
        ...state.player,
        species,
        growthRate,
        nature,
        ivs: { ...ivs },
      },
    })),

  evolve: (newSpecies) =>
    set((state) => ({
      player: { ...state.player, species: newSpecies },
    })),

  gainEncounter: (expGained, evYield) =>
    set((state) => {
      const p = state.player;
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

  modifyHp: (amount) =>
    set((state) => ({
      player: {
        ...state.player,
        currentHp: Math.max(0, state.player.currentHp + amount),
      },
    })),

  applyStatStage: (stat, amount) =>
    set((state) => {
      const current = state.player.stages[stat];
      return {
        player: {
          ...state.player,
          stages: {
            ...state.player.stages,
            [stat]: Math.max(-6, Math.min(6, current + amount)),
          },
        },
      };
    }),

  resetCombatState: () =>
    set((state) => ({
      player: {
        ...state.player,
        stages: { ...initialStats },
      },
    })),

  toggleBadge: (badge, active) =>
    set((state) => ({
      player: {
        ...state.player,
        badges: {
          ...state.player.badges,
          [badge]: active,
        },
      },
    })),
}));
