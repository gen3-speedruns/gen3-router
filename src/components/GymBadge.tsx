import { useRunStore } from "../store/runState";
import type { BadgeBoosts } from "../gamedata/types";

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
  const alreadyObtained = useRunStore((s) => s.player?.badges[id] ?? false);
  const meta = BADGE_META[id];

  return (
    <section
      className={`card my-4 border border-base-content/10 bg-base-100 shadow-sm ${
        alreadyObtained ? "opacity-60" : ""
      }`}
    >
      <div className="card-body gap-4 p-4">
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center min-w-0">
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
            <div className="card-title flex-wrap items-baseline gap-x-2 gap-y-1 pl-2">
              <span>{meta.label}</span>
            </div>
          </div>

          <div className="card-actions">
            <button
              onClick={() => gainBadge(id)}
              disabled={alreadyObtained}
              className="btn btn-sm btn-primary"
            >
              {alreadyObtained ? "Obtained" : "Obtain"}
            </button>
          </div>
        </header>
      </div>
    </section>
  );
};
