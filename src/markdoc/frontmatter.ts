import yaml from "js-yaml";

export interface RouteFrontmatter {
  title: string;
  game: "frlg";
  category: string;
  author: string;
  date: string;
}

const GAME_LABELS: Record<RouteFrontmatter["game"], string> = {
  frlg: "FireRed / LeafGreen",
};

export function parseFrontmatter(
  raw: string | undefined,
): RouteFrontmatter | null {
  if (!raw) return null;
  try {
    const data = yaml.load(raw) as Partial<RouteFrontmatter>;
    if (
      !data.title ||
      !data.game ||
      !data.category ||
      !data.author ||
      !data.date
    )
      return null;
    return {
      title: data.title,
      game: data.game,
      category: data.category,
      author: data.author,
      date: data.date,
    };
  } catch {
    return null;
  }
}

export function getGameLabel(game: RouteFrontmatter["game"]): string {
  return GAME_LABELS[game] ?? game;
}
