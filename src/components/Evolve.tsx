import React from "react";
import { PokemonDataMap } from "../gamedata/pokemon";
import { PokemonSprite } from "./PokemonSprite";
import { RouteCard } from "./RouteCard";

interface EvolveProps {
  into: string;
}

export const Evolve: React.FC<EvolveProps> = ({ into }) => {
  const data = PokemonDataMap[into];
  if (!data)
    return <div className="text-error text-sm">Unknown species: {into}</div>;

  return (
    <RouteCard
      left={<PokemonSprite dexId={data.dexId} name={into} />}
      title={<span>Evolve into {into}</span>}
    />
  );
};
