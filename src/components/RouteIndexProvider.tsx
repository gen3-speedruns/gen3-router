import { useRef } from "react";
import { RouteIndexContext } from "./RouteIndexContext";

export const RouteIndexProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const counter = useRef(0);
  const next = () => ++counter.current;
  return (
    <RouteIndexContext.Provider value={{ next }}>
      {children}
    </RouteIndexContext.Provider>
  );
};
