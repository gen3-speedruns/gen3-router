import React from "react";

export const Calcs: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex flex-col divide-y divide-base-content/10 border-t border-base-content/10">
    {children}
  </div>
);
