import { create } from "zustand";
import type { Nature } from "../gamedata/natures";
import type { StatsTable, GrowthRate } from "../gamedata/types";
import { calculateExpYield, getExpAtLevel } from "../mechanics/experience";
import { PokemonData } from "../gamedata/pokemon";

export interface PlayerState {
  species: string;
  nature: Nature;
  growthRate: GrowthRate;
  ivs: StatsTable;
  evs: StatsTable;
  totalExp: number;
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
  gainBadge: (badge: keyof PlayerState["badges"]) => void;
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
          evs: { ...initialStats },
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
}));
