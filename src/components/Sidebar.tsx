import React, { useState } from "react";
import { useRun } from "../hooks/useRun";
import { useRunStore } from "../store/runState";

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
  const runView = useRun();
  const reset = useRunStore((s) => s.reset);
  const [confirming, setConfirming] = useState(false);

  if (!runView) {
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

  const { run, level, stats, pinchThreshold } = runView;
  return (
    <SidebarShell>
      {/* Main Info */}
      <div className="card bg-base-200 border border-base-content/10">
        <div className="card-body p-4 gap-2">
          <div className="flex justify-between items-center border-b border-base-content/10 pb-2 mb-1">
            <h2 className="card-title text-lg">{run.species}</h2>
            <span className="badge badge-primary">Lv. {level}</span>
          </div>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-base-content/60">Total EXP</span>
              <span className="font-mono">{run.totalExp}</span>
            </div>
            <div className="flex justify-between border-b border-base-content/10 pb-2 mb-1">
              <span className="text-base-content/60">Nature</span>
              <span>{run.nature}</span>
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
              const data = label === "IVs" ? run.ivs : run.evs;
              return (
                <div key={label}>
                  <h3 className="font-bold text-sm border-b border-base-content/10 pb-1 mb-2">
                    {label}
                  </h3>
                  <ul className="text-sm space-y-1">
                    {(Object.entries(data) as [string, number][]).map(
                      ([stat, val]) => (
                        <li key={stat} className="flex justify-between">
                          <span className="text-xs font-medium uppercase tracking-wide text-base-content/45">
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

      <div className="mt-auto pt-4 border-t border-base-content/10">
        {!confirming ? (
          <button
            className="btn btn-ghost btn-sm text-error w-full"
            onClick={() => setConfirming(true)}
          >
            Reset Run
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-xs text-center text-base-content/60">
              This will clear all progress.
            </p>
            <div className="flex gap-2">
              <button
                className="btn btn-error btn-sm flex-1"
                onClick={() => {
                  reset();
                  setConfirming(false);
                }}
              >
                Confirm
              </button>
              <button
                className="btn btn-ghost btn-sm flex-1"
                onClick={() => setConfirming(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </SidebarShell>
  );
};
