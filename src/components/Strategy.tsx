import React from "react";

export const Strategy: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className="rounded-box border border-primary/15 bg-primary/10 px-4">
      <div className="sm:prose text-base font-semibold leading-tight">
        {children}
      </div>
    </section>
  );
};
