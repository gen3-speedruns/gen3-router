import React from "react";
import { RouteCard } from "./RouteCard";

interface RareCandyProps {
  id: string;
}

export const RareCandy: React.FC<RareCandyProps> = () => (
  <RouteCard
    left={
      <img
        src="/sprites/items/rare-candy.png"
        alt="Rare Candy"
        width={48}
        height={48}
        className="not-prose"
        onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
      />
    }
    title={<span>Rare Candy</span>}
  />
);
