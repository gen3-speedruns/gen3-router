import { createContext, useContext } from "react";
import type { Run } from "../domain/run";

const RunContext = createContext<Run | "pending" | null>(null);

export const RunProvider = RunContext.Provider;

export const useRunContext = (): Run | "pending" | null => {
  return useContext(RunContext);
};
