import React from "react";

export const Calcs: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className="rounded-box border border-base-content/10 bg-base-200">
      <div className="divide-y divide-base-content/10">{children}</div>
    </section>
  );
};
