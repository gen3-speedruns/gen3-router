import { createContext, useContext } from "react";

interface ChoiceContextValue {
  chosen: string | null;
  onChoose: (value: string) => void;
}

const ChoiceContext = createContext<ChoiceContextValue | null>(null);

export const useChoice = (): ChoiceContextValue => {
  const ctx = useContext(ChoiceContext);
  if (!ctx) throw new Error("{% option %} must be used within a {% choice %}");
  return ctx;
};

export const ChoiceProvider = ChoiceContext.Provider;
