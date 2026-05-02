import { useRunStore } from "../store/runState";
import { PokemonData } from "../gamedata/pokemon";
import { PokemonSprite } from "./PokemonSprite";
import { RouteCard } from "./RouteCard";

interface EvolveProps {
  into: string;
}

export const Evolve: React.FC<EvolveProps> = ({ into }) => {
  const evolve = useRunStore((s) => s.evolve);
  const currentSpecies = useRunStore((s) => s.player?.species);
  const alreadyEvolved = currentSpecies === into;
  const intoData = PokemonData[into];

  if (!intoData) {
    return <div className="text-error text-sm">Unknown species: {into}</div>;
  }

  return (
    <RouteCard
      faded={alreadyEvolved}
      left={
        <div className="flex items-center gap-2">
          <PokemonSprite dexId={intoData.dexId} name={into} />
        </div>
      }
      title={<span>Evolve into {into}</span>}
      action={
        <button
          onClick={() => evolve(into)}
          disabled={alreadyEvolved}
          className="btn btn-sm btn-primary"
        >
          {alreadyEvolved ? "Evolved" : "Evolve"}
        </button>
      }
    />
  );
};
