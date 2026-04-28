import React, { useState } from "react";
import { useRunStore } from "../store/runState";
import type { Nature } from "../core/data/natures";

interface StarterProps {
  species: string;
  level: number;
  natures: Nature[];
}

export const Starter: React.FC<StarterProps> = ({
  species,
  level,
  natures,
}) => {
  const initPlayer = useRunStore((state) => state.initPlayer);
  const isInitialized = useRunStore((state) => state.player !== null);

  const [nature, setNature] = useState<Nature>(natures[0]);
  const [ivs, setIvs] = useState({
    hp: 31,
    atk: 31,
    def: 31,
    spa: 31,
    spd: 31,
    spe: 31,
  });

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    initPlayer(species, level, nature, ivs);
  };

  const handleIvChange = (stat: keyof typeof ivs, val: string) => {
    const num = Math.max(0, Math.min(31, Number(val) || 0));
    setIvs((prev) => ({ ...prev, [stat]: num }));
  };

  if (isInitialized) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-4 rounded">
        <p className="font-bold">Run Initialized!</p>
        <p className="text-sm">
          Locked in {species} (Lv. {level}). Good luck on the run!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleStart}
      className="bg-slate-800 text-white p-6 my-4 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold text-blue-400 mb-4">
        Initialize Starter: {species} (Lv. {level})
      </h3>

      <div className="mb-4">
        <label className="block text-sm text-slate-300 mb-1">Nature</label>
        <select
          value={nature}
          onChange={(e) => setNature(e.target.value as Nature)}
          className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
        >
          {natures.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {(Object.keys(ivs) as Array<keyof typeof ivs>).map((stat) => (
          <div key={stat}>
            <label className="block text-sm text-slate-300 uppercase mb-1">
              {stat}
            </label>
            <input
              type="number"
              min="0"
              max="31"
              value={ivs[stat]}
              onChange={(e) => handleIvChange(stat, e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white font-mono"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded transition-colors"
      >
        Begin Run
      </button>
    </form>
  );
};
