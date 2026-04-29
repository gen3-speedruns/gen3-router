import React from "react";
import { useRunStore } from "../store/runState";
import { buildPlayerSpec } from "../selectors/playerSelectors";

const SidebarShell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-80 bg-base-300 p-6 shadow-xl flex flex-col gap-6 fixed h-full overflow-y-auto">
    <div>
      <h1 className="text-2xl font-black text-primary tracking-tight">
        Gen3 Router
      </h1>
    </div>
    {children}
  </div>
);

export const Sidebar: React.FC = () => {
  const player = useRunStore((state) => state.player);

  if (!player) {
    return (
      <SidebarShell>
        <div className="card bg-base-200 border border-base-content/10">
          <div className="card-body text-base-content/50 text-center italic py-4">
            No starter set
          </div>
        </div>
      </SidebarShell>
    );
  }

  const { level, pinchThreshold, stats } = buildPlayerSpec(player);

  return (
    <SidebarShell>
      {/* Main Info */}
      <div className="card bg-base-200 border border-base-content/10">
        <div className="card-body p-4 gap-2">
          <div className="flex justify-between items-center border-b border-base-content/10 pb-2 mb-1">
            <h2 className="card-title text-lg">{player.species}</h2>
            <span className="badge badge-primary">Lv. {level}</span>
          </div>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-base-content/60">Total EXP</span>
              <span className="font-mono">{player.totalExp}</span>
            </div>
            <div className="flex justify-between border-b border-base-content/10 pb-2 mb-1">
              <span className="text-base-content/60">Nature</span>
              <span>{player.nature}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/60">Max HP</span>
              <span className="font-mono font-bold">{stats.hp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/60">Pinch Range</span>
              <span className="font-mono font-bold text-warning">
                ≤ {pinchThreshold}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-base-content/60">Speed</span>
              <span className="font-mono font-bold">{stats.spe}</span>
            </div>
          </div>
        </div>
      </div>

      {/* IVs / EVs */}
      <div className="card bg-base-200 border border-base-content/10">
        <div className="card-body p-4">
          <div className="grid grid-cols-2 gap-4">
            {(["IVs", "EVs"] as const).map((label) => {
              const data = label === "IVs" ? player.ivs : player.evs;
              return (
                <div key={label}>
                  <h3 className="font-bold text-sm border-b border-base-content/10 pb-1 mb-2">
                    {label}
                  </h3>
                  <ul className="text-sm space-y-1">
                    {(Object.entries(data) as [string, number][]).map(
                      ([stat, val]) => (
                        <li key={stat} className="flex justify-between">
                          <span className="text-base-content/50 uppercase">
                            {stat}
                          </span>
                          <span className="font-mono">{val}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SidebarShell>
  );
};
