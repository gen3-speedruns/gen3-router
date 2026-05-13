import React, { useState } from "react";
import { useRunStore } from "../store/runState";

const SidebarShell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-80 bg-base-300 p-6 shadow-xl flex flex-col gap-6 fixed h-full overflow-y-auto">
    <h1 className="text-2xl font-black text-primary tracking-tight">
      Gen3 Router
    </h1>
    {children}
  </div>
);

export const Sidebar: React.FC = () => {
  const root = useRunStore((s) => s.root);
  const reset = useRunStore((s) => s.reset);
  const [confirming, setConfirming] = useState(false);

  return (
    <SidebarShell>
      {root ? (
        <div className="card bg-base-200 border border-base-content/10">
          <div className="card-body p-4 gap-3">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-lg">{root.species}</h2>
              <span className="badge badge-primary">{root.nature}</span>
            </div>
            <div className="border-t border-base-content/10 pt-3">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                {(Object.entries(root.ivs) as [string, number][]).map(
                  ([stat, val]) => (
                    <li key={stat} className="flex justify-between">
                      <span className="text-base-content/60 uppercase text-xs font-medium tracking-wide">
                        {stat}
                      </span>
                      <span className="font-mono">{val}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="card bg-base-200 border border-base-content/10">
          <div className="card-body text-base-content/50 text-center italic py-4">
            No starter set
          </div>
        </div>
      )}

      <div className="mt-auto pt-4 border-t border-base-content/10">
        {!confirming ? (
          <button
            className="btn btn-ghost btn-sm text-error w-full"
            onClick={() => setConfirming(true)}
            disabled={!root}
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
