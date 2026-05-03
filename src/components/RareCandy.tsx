import { useRouteAction } from "../hooks/useRouteAction";
import { useRunStore } from "../store/runState";
import { RouteCard } from "./RouteCard";

interface RareCandyProps {
  id: string;
}

export const RareCandy: React.FC<RareCandyProps> = ({ id }) => {
  const { completed, complete } = useRouteAction(id);
  const gainRareCandy = useRunStore((s) => s.gainRareCandy);

  return (
    <RouteCard
      faded={completed}
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
            complete();
          }}
          disabled={completed}
          className="btn btn-sm btn-primary"
        >
          {completed ? "Used" : "Use"}
        </button>
      }
    />
  );
};
