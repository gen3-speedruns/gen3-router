import { createContext, useContext } from "react";
import type { RouteTree } from "../domain/routeTree";

const RouteTreeContext = createContext<RouteTree | null>(null);

export const RouteTreeProvider = RouteTreeContext.Provider;

export function useRouteTree(): RouteTree {
  const ctx = useContext(RouteTreeContext);
  if (!ctx) throw new Error("Must be inside RouteTreeProvider");
  return ctx;
}
