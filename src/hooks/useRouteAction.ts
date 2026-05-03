import { useRunStore } from "../store/runState";

export const useRouteAction = (id: string) => {
  const completed = useRunStore((s) => s.completedActions.includes(id));
  const completeAction = useRunStore((s) => s.completeAction);

  return {
    id,
    completed,
    complete: () => completeAction(id),
  };
};
