import { useRouteAction } from "../hooks/useRouteAction";
import { useRunStore } from "../store/runState";
import { RouteCard } from "./RouteCard";

export const RareCandy: React.FC = () => {
  const { id } = useRouteAction();
  const gainRareCandy = useRunStore((s) => s.gainRareCandy);
  const completeAction = useRunStore((s) => s.completeAction);
  const isCompleted = useRunStore((s) => s.completedActions.includes(id));

  return (
    <RouteCard
      faded={isCompleted}
      left={
        <img
          src={`/sprites/items/rare-candy.png`}
          alt="Rare Candy"
          width={48}
          height={48}
          className="not-prose"
          onLoad={(e) =>
            (e.target as HTMLImageElement).classList.remove("hidden")
          }
          onError={(e) =>
            ((e.target as HTMLImageElement).style.display = "none")
          }
        />
      }
      title={<span>Rare Candy</span>}
      action={
        <button
          onClick={() => {
            gainRareCandy();
            completeAction(id);
          }}
          disabled={isCompleted}
          className="btn btn-sm btn-primary"
        >
          {isCompleted ? "Used" : "Use"}
        </button>
      }
    />
  );
};
