import { createContext, useContext } from "react";

export const RouteIndexContext = createContext<{ next: () => number } | null>(
  null,
);

export const useRouteIndex = () => {
  const ctx = useContext(RouteIndexContext);
  if (!ctx)
    throw new Error("useRouteIndex must be used within RouteIndexProvider");
  return ctx;
};
