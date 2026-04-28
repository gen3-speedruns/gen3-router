import React from "react";
import { useRunStore } from "../store/runState";
import { getLevelFromExp } from "../core/mechanics/experience";

export const Sidebar: React.FC = () => {
  const player = useRunStore((state) => state.player);

  const currentLevel = player
    ? getLevelFromExp(player.totalExp, player.growthRate)
    : 0;

  return (
    <div className="w-80 bg-slate-900 text-white p-6 shadow-xl flex flex-col gap-6 fixed h-full overflow-y-auto">
      <div>
        <h1 className="text-2xl font-black text-blue-400 tracking-tight">
          Gen3 Router
        </h1>
        <p className="text-slate-400 text-sm mt-1">Live State Engine</p>
      </div>

      {!player ? (
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-slate-400 text-center italic">
          Waiting for starter initialization...
        </div>
      ) : (
        <>
          {/* Main Info Panel */}
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h2 className="text-xl font-bold">
              {player.species}{" "}
              <span className="text-blue-400">Lv. {currentLevel}</span>
            </h2>
            <div className="mt-2 text-sm text-slate-300">
              <div className="flex justify-between border-b border-slate-700 pb-1 mb-1">
                <span>Current HP:</span>
                <span className="font-mono text-green-400">
                  {player.currentHp}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total EXP:</span>
                <span className="font-mono">{player.totalExp}</span>
              </div>
              <div className="flex justify-between">
                <span>Nature:</span>
                <span>{player.nature}</span>
              </div>
            </div>
          </div>

          {/* IVs AND EVs BLOCK */}
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="grid grid-cols-2 gap-4">
              {/* IVs Column */}
              <div>
                <h3 className="font-bold mb-2 text-slate-200 border-b border-slate-600 pb-1">
                  IVs
                </h3>
                <ul className="text-sm space-y-1 text-slate-400">
                  <li>
                    HP:{" "}
                    <span className="text-slate-200 font-mono">
                      {player.ivs.hp}
                    </span>
                  </li>
                  <li>
                    Atk:{" "}
                    <span className="text-slate-200 font-mono">
                      {player.ivs.atk}
                    </span>
                  </li>
                  <li>
                    Def:{" "}
                    <span className="text-slate-200 font-mono">
                      {player.ivs.def}
                    </span>
                  </li>
                  <li>
                    SpA:{" "}
                    <span className="text-slate-200 font-mono">
                      {player.ivs.spa}
                    </span>
                  </li>
                  <li>
                    SpD:{" "}
                    <span className="text-slate-200 font-mono">
                      {player.ivs.spd}
                    </span>
                  </li>
                  <li>
                    Spe:{" "}
                    <span className="text-slate-200 font-mono">
                      {player.ivs.spe}
                    </span>
                  </li>
                </ul>
              </div>

              {/* EVs Column */}
              <div>
                <h3 className="font-bold mb-2 text-slate-200 border-b border-slate-600 pb-1">
                  EVs
                </h3>
                <ul className="text-sm space-y-1 text-slate-300">
                  <li>
                    HP:{" "}
                    <span className="text-white font-mono">
                      {player.evs.hp}
                    </span>
                  </li>
                  <li>
                    Atk:{" "}
                    <span className="text-white font-mono">
                      {player.evs.atk}
                    </span>
                  </li>
                  <li>
                    Def:{" "}
                    <span className="text-white font-mono">
                      {player.evs.def}
                    </span>
                  </li>
                  <li>
                    SpA:{" "}
                    <span className="text-white font-mono">
                      {player.evs.spa}
                    </span>
                  </li>
                  <li>
                    SpD:{" "}
                    <span className="text-white font-mono">
                      {player.evs.spd}
                    </span>
                  </li>
                  <li>
                    Spe:{" "}
                    <span className="text-white font-mono">
                      {player.evs.spe}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
