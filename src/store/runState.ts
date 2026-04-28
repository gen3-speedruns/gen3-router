import { create } from "zustand";
import type { Nature } from "../core/data/natures";
import type { StatsTable, GrowthRate } from "../core/types";
import { calculateExpYield, getExpAtLevel } from "../core/mechanics/experience";
import { PokemonData } from "../core/data/pokemon";
import { calcHealth } from "../core/mechanics/stats";

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
  player: PlayerState | null;

  initPlayer: (
    species: string,
    level: number,
    nature: Nature,
    ivs: StatsTable,
  ) => void;
  evolve: (newSpecies: string) => void;
  gainEncounter: (species: string, level: number, isTrainer: boolean) => void;
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

export const useRunStore = create<AppState>((set) => ({
  player: null,

  rules: {
    badges: { boulder: false, cascade: false, thunder: false, volcano: false },
  },

  initPlayer: (species, level, nature, ivs) =>
    set(() => {
      const data = PokemonData[species];
      const startingExp = getExpAtLevel(level, data.growthRate);
      const startingMaxHp = calcHealth(data.baseStats.hp, level, ivs.hp, 0);

      return {
        player: {
          species,
          growthRate: data.growthRate,
          nature,
          ivs: { ...ivs },
          evs: { ...initialStats },
          totalExp: startingExp,
          currentHp: startingMaxHp,
          stages: { ...initialStats },
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
      return {
        player: { ...state.player, species: newSpecies },
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
  modifyHp: (amount) =>
    set((state) => {
      if (!state.player) return state;
      return {
        player: {
          ...state.player,
          currentHp: Math.max(0, state.player.currentHp + amount),
        },
      };
    }),

  applyStatStage: (stat, amount) =>
    set((state) => {
      if (!state.player) return state;
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
    set((state) => {
      if (!state.player) return state;
      return {
        player: {
          ...state.player,
          stages: { ...initialStats },
        },
      };
    }),

  toggleBadge: (badge, active) =>
    set((state) => {
      if (!state.player) return state;
      return {
        player: {
          ...state.player,
          badges: {
            ...state.player.badges,
            [badge]: active,
          },
        },
      };
    }),
}));
