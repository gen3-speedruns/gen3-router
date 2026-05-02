import { useState } from "react";
import { useRunStore } from "../store/runState";
import { useRouteIndex } from "../components/RouteIndexContext";

export const useRouteAction = () => {
  const { next } = useRouteIndex();
  const [id] = useState(() => `action-${next()}`);
  const completed = useRunStore((s) => s.completedActions.includes(id));
  const completeAction = useRunStore((s) => s.completeAction);

  return {
    id,
    completed,
    complete: () => completeAction(id),
  };
};
