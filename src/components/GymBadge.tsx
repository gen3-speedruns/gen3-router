import type { BadgeBoosts } from "../domain/runner";
import { useRunStore } from "../store/runState";
import { RouteCard } from "./RouteCard";

const BADGE_META: Record<string, { label: string; imageId: number }> = {
  boulder: { label: "Boulder Badge", imageId: 1 },
  cascade: { label: "Cascade Badge", imageId: 2 },
  thunder: { label: "Thunder Badge", imageId: 3 },
  rainbow: { label: "Rainbow Badge", imageId: 4 },
  soul: { label: "Soul Badge", imageId: 5 },
  marsh: { label: "Marsh Badge", imageId: 6 },
  volcano: { label: "Volcano Badge", imageId: 7 },
  earth: { label: "Earth Badge", imageId: 8 },
};

interface GymBadgeProps {
  id: keyof BadgeBoosts;
}

export const GymBadge: React.FC<GymBadgeProps> = ({ id }) => {
  const gainBadge = useRunStore((s) => s.gainBadge);
  const alreadyObtained = useRunStore((s) => s.runner?.badges[id] ?? false);
  const meta = BADGE_META[id];

  return (
    <RouteCard
      faded={alreadyObtained}
      left={
        <img
          src={`/sprites/badges/${meta.imageId}.png`}
          alt={meta.label}
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
      title={<span>{meta.label}</span>}
      action={
        <button
          onClick={() => gainBadge(id)}
          disabled={alreadyObtained}
          className="btn btn-sm btn-primary"
        >
          {alreadyObtained ? "Obtained" : "Obtain"}
        </button>
      }
    />
  );
};
