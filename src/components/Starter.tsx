import React, { useState } from "react";
import { useRunStore } from "../store/runState";
import type { Nature } from "../gamedata/natures";

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
      <div className="alert alert-success my-4">
        <span className="font-bold">Run Initialized!</span>
        <span className="text-sm">
          Locked in {species} (Lv. {level}). Good luck!
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleStart} className="card bg-base-100 shadow-lg my-4">
      <div className="card-body gap-4">
        <h3 className="card-title text-primary">
          Initialize Starter: {species} (Lv. {level})
        </h3>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Nature</span>
          </label>
          <select
            value={nature}
            onChange={(e) => setNature(e.target.value as Nature)}
            className="select select-bordered w-full"
          >
            {natures.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(ivs) as Array<keyof typeof ivs>).map((stat) => (
            <div key={stat} className="form-control">
              <label className="label">
                <span className="label-text uppercase text-xs">{stat}</span>
              </label>
              <input
                type="number"
                min="0"
                max="31"
                value={ivs[stat]}
                onChange={(e) => handleIvChange(stat, e.target.value)}
                className="input input-bordered input-sm font-mono w-full"
              />
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Begin Run
        </button>
      </div>
    </form>
  );
};
