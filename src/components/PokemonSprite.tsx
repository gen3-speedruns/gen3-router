interface PokemonSpriteProps {
  dexId: number;
  name: string;
}

export const PokemonSprite: React.FC<PokemonSpriteProps> = ({
  dexId,
  name,
}) => {
  return (
    <img
      src={`/sprites/pokemon/frlg/${dexId}.png`}
      alt={name}
      width={48}
      height={48}
      className="not-prose object-contain shrink-0 hidden"
      onLoad={(e) => {
        (e.target as HTMLImageElement).classList.remove("hidden");
      }}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
};
