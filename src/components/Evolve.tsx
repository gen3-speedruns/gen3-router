import { PokemonDataMap } from "../gamedata/pokemon";
import { useRouteAction } from "../hooks/useRouteAction";
import { useRunStore } from "../store/runState";
import { PokemonSprite } from "./PokemonSprite";
import { RouteCard } from "./RouteCard";

interface EvolveProps {
  into: string;
}

export const Evolve: React.FC<EvolveProps> = ({ into }) => {
  const evolve = useRunStore((s) => s.evolve);
  const { completed, complete } = useRouteAction(`evolve-${into}`);

  const intoData = PokemonDataMap[into];
  if (!intoData) {
    return <div className="text-error text-sm">Unknown species: {into}</div>;
  }

  return (
    <RouteCard
      faded={completed}
      left={
        <div className="flex items-center gap-2">
          <PokemonSprite dexId={intoData.dexId} name={into} />
        </div>
      }
      title={<span>Evolve into {into}</span>}
      action={
        <button
          onClick={() => {
            evolve(into);
            complete();
          }}
          disabled={completed}
          className="btn btn-sm btn-primary"
        >
          {completed ? "Evolved" : "Evolve"}
        </button>
      }
    />
  );
};
