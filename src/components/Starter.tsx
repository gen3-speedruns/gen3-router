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
      <div className="card bg-base-100 border-l-4 border-primary shadow-sm my-6 opacity-60 grayscale-[0.5]">
        <div className="card-body p-5">
          <div className="flex justify-between items-start">
            <h3 className="card-title text-lg">
              <span className="badge badge-outline badge-sm mr-1">STARTER</span>
              {species}
              <span className="text-base-content/40 text-base ml-1">
                Lv.{level}
              </span>
            </h3>
            <span className="btn btn-xs btn-disabled">Started</span>
          </div>
          <div className="text-sm flex flex-wrap gap-x-4 gap-y-1 text-base-content/70 mt-2">
            <span>
              Nature: <strong className="text-base-content">{nature}</strong>
            </span>
            {(Object.entries(ivs) as [string, number][]).map(([stat, val]) => (
              <span key={stat}>
                <span className="uppercase">{stat}</span>{" "}
                <strong className="font-mono text-base-content">{val}</strong>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleStart}
      className="card bg-base-100 border-l-4 border-primary shadow-sm my-6"
    >
      <div className="card-body p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="card-title text-lg">
            <span className="badge badge-outline badge-sm mr-1">STARTER</span>
            {species}
            <span className="text-base-content/40 text-base ml-1">
              Lv.{level}
            </span>
          </h3>
          <button type="submit" className="btn btn-xs btn-primary">
            Start Run
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-control col-span-2">
            <label className="label py-0 mb-1">
              <span className="label-text text-base-content/60 uppercase text-xs">
                Nature
              </span>
            </label>
            <select
              value={nature}
              onChange={(e) => setNature(e.target.value as Nature)}
              className="select select-bordered select-sm w-full"
            >
              {natures.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {(Object.keys(ivs) as Array<keyof typeof ivs>).map((stat) => (
            <div key={stat} className="form-control">
              <label className="label py-0 mb-1">
                <span className="label-text text-base-content/60 uppercase text-xs">
                  {stat}
                </span>
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
      </div>
    </form>
  );
};
