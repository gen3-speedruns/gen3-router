import React from "react";
import { useRunStore } from "../store/runState";
import { buildPlayerSpec } from "../selectors/playerSelectors";

export const Sidebar: React.FC = () => {
  const player = useRunStore((state) => state.player);

  const header = (
    <div>
      <h1 className="text-2xl font-black text-blue-400 tracking-tight">
        Gen3 Router
      </h1>
      <p className="text-slate-400 text-sm mt-1">Live State Engine</p>
    </div>
  );

  if (!player) {
    return (
      <div className="w-80 bg-slate-900 text-white p-6 shadow-xl flex flex-col gap-6 fixed h-full overflow-y-auto">
        {header}
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-slate-400 text-center italic">
          Waiting for starter...
        </div>
      </div>
    );
  }

  const { level, pinchThreshold, stats } = buildPlayerSpec(player);
  return (
    <div className="w-80 bg-slate-900 text-white p-6 shadow-xl flex flex-col gap-6 fixed h-full overflow-y-auto">
      {header}

      {/* Main Info Panel */}
      <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
        <h2 className="text-xl font-bold border-b border-slate-700 pb-2 mb-2">
          {player.species}{" "}
          <span className="text-blue-400 float-right">Lv. {level}</span>
        </h2>

        <div className="text-sm text-slate-300 space-y-1">
          {/* Static Info */}
          <div className="flex justify-between pt-1">
            <span>Total EXP:</span>
            <span className="font-mono text-white">{player.totalExp}</span>
          </div>
          <div className="flex justify-between mb-2 pb-2 border-b border-slate-700">
            <span>Nature:</span>
            <span className="text-white">{player.nature}</span>
          </div>

          {/* Active Combat Info */}
          <div className="flex justify-between items-center pt-1">
            <span>Max HP:</span>
            <span className="font-mono font-bold text-white">{stats.hp}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Pinch Range:</span>
            <span className="font-mono font-bold text-white">
              ≤ {pinchThreshold}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Speed:</span>
            <span className="font-mono font-bold text-white">{stats.spe}</span>
          </div>
        </div>
      </div>

      {/* IVs AND EVs BLOCK */}
      <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
        <div className="grid grid-cols-2 gap-6">
          {/* IVs Column */}
          <div>
            <h3 className="font-bold mb-2 text-slate-200 border-b border-slate-600 pb-1">
              IVs
            </h3>
            <ul className="text-sm space-y-1 text-slate-400">
              <li className="flex justify-between">
                <span>HP</span>{" "}
                <span className="text-slate-200 font-mono">
                  {player.ivs.hp}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Atk</span>{" "}
                <span className="text-slate-200 font-mono">
                  {player.ivs.atk}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Def</span>{" "}
                <span className="text-slate-200 font-mono">
                  {player.ivs.def}
                </span>
              </li>
              <li className="flex justify-between">
                <span>SpA</span>{" "}
                <span className="text-slate-200 font-mono">
                  {player.ivs.spa}
                </span>
              </li>
              <li className="flex justify-between">
                <span>SpD</span>{" "}
                <span className="text-slate-200 font-mono">
                  {player.ivs.spd}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Spe</span>{" "}
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
            <ul className="text-sm space-y-1 text-slate-400">
              <li className="flex justify-between">
                <span>HP</span>{" "}
                <span className="text-white font-mono">{player.evs.hp}</span>
              </li>
              <li className="flex justify-between">
                <span>Atk</span>{" "}
                <span className="text-white font-mono">{player.evs.atk}</span>
              </li>
              <li className="flex justify-between">
                <span>Def</span>{" "}
                <span className="text-white font-mono">{player.evs.def}</span>
              </li>
              <li className="flex justify-between">
                <span>SpA</span>{" "}
                <span className="text-white font-mono">{player.evs.spa}</span>
              </li>
              <li className="flex justify-between">
                <span>SpD</span>{" "}
                <span className="text-white font-mono">{player.evs.spd}</span>
              </li>
              <li className="flex justify-between">
                <span>Spe</span>{" "}
                <span className="text-white font-mono">{player.evs.spe}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
