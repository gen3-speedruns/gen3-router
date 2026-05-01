import { useRunStore } from "../store/runState";
import type { BadgeBoosts } from "../gamedata/types";

interface BadgeProps {
  id: keyof BadgeBoosts;
}

export const Badge: React.FC<BadgeProps> = ({ id }) => {
  const gainBadge = useRunStore((s) => s.gainBadge);
  const alreadyObtained = useRunStore((s) => s.player?.badges[id] ?? false);
  const label = `${id.charAt(0).toUpperCase()}${id.slice(1)}`;

  return (
    <section
      className={`card my-4 border border-base-content/10 bg-base-100 shadow-sm ${
        alreadyObtained ? "opacity-60" : ""
      }`}
    >
      <div className="card-body gap-4 p-4">
        <header className="flex items-start justify-between gap-3">
          <div className="min-w-0 space-y-2">
            <div className="card-title flex items-baseline gap-2">
              <span>{label} Badge</span>
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
