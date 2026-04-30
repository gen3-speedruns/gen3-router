import React from "react";

export const Strategy: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex items-center gap-2 px-3 py-1.5 text-sm leading-none">
    <span className="badge badge-xs badge-primary shrink-0">STRAT</span>
    <span className="text-base-content/80">{children}</span>
  </div>
);
