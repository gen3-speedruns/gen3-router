import type { BadgeBoosts } from "../domain/run";
import { RouteCard } from "./RouteCard";

const BADGE_META: Record<
  keyof BadgeBoosts,
  { label: string; imageId: number }
> = {
  boulder: { label: "Boulder Badge", imageId: 1 },
  thunder: { label: "Thunder Badge", imageId: 3 },
  soul: { label: "Soul Badge", imageId: 5 },
  volcano: { label: "Volcano Badge", imageId: 7 },
};

interface GymBadgeProps {
  id: keyof BadgeBoosts;
}

export const GymBadge: React.FC<GymBadgeProps> = ({ id }) => {
  const meta = BADGE_META[id];
  return (
    <RouteCard
      left={
        <img
          src={`/sprites/badges/${meta.imageId}.png`}
          alt={meta.label}
          width={48}
          height={48}
          className="not-prose"
          onError={(e) =>
            ((e.target as HTMLImageElement).style.display = "none")
          }
        />
      }
      title={<span>{meta.label}</span>}
    />
  );
};
