import React, { useState } from "react";
import { useRunStore } from "../store/runState";
import type { Nature } from "../gamedata/natures";
import { PokemonData } from "../gamedata/pokemon";
import { PokemonSprite } from "./PokemonSprite";

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

  const handleStart = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!isInitialized) initPlayer(species, level, nature, ivs);
  };

  const handleIvChange = (stat: keyof typeof ivs, val: string) => {
    const num = Math.max(0, Math.min(31, Number(val) || 0));
    setIvs((prev) => ({ ...prev, [stat]: num }));
  };

  return (
    <form
      onSubmit={handleStart}
      className={`card my-4 border border-base-content/10 bg-base-100 shadow-sm ${
        isInitialized ? "opacity-70" : ""
      }`}
    >
      <div className="card-body gap-4 p-4">
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center min-w-0">
            <PokemonSprite dexId={PokemonData[species].dexId} name={species} />
            <div className="card-title flex-wrap items-baseline gap-x-2 gap-y-1 pl-2">
              <span>{species}</span>
              <span className="text-sm font-normal text-base-content/50">
                Lv. {level}
              </span>
            </div>
          </div>

          <div className="card-actions">
            <button
              type="submit"
              disabled={isInitialized}
              className="btn btn-sm btn-primary"
            >
              {isInitialized ? "Active" : "Start Run"}
            </button>
          </div>
        </header>

        <section className="rounded-box border border-base-content/10 bg-base-200">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-4 py-3 sm:grid-cols-3">
            <label className="col-span-2 flex items-center justify-between gap-3 border-b border-base-content/10 pb-3 sm:col-span-3">
              <span className="text-xs font-medium uppercase tracking-wide text-base-content/45">
                Nature
              </span>
              {isInitialized ? (
                <span className="text-sm font-medium">{nature}</span>
              ) : (
                <select
                  value={nature}
                  onChange={(e) => setNature(e.target.value as Nature)}
                  className="select select-sm w-40 bg-base-100"
                >
                  {natures.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              )}
            </label>

            {(Object.keys(ivs) as Array<keyof typeof ivs>).map((stat) => (
              <label
                key={stat}
                className="flex items-center justify-between gap-3"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-base-content/45">
                  {stat}
                </span>
                {isInitialized ? (
                  <span className="font-mono text-sm">{ivs[stat]}</span>
                ) : (
                  <input
                    type="number"
                    min="0"
                    max="31"
                    value={ivs[stat]}
                    onChange={(e) => handleIvChange(stat, e.target.value)}
                    className="input input-sm w-16 bg-base-100 text-right font-mono"
                  />
                )}
              </label>
            ))}
          </div>
        </section>
      </div>
    </form>
  );
};
