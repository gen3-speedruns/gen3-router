import { levelOf, pinchThresholdOf, statsOf, type Run } from "../domain/run";
import { useRunStore } from "../store/runState";

export interface RunView {
  run: Run;
  level: number;
  stats: ReturnType<typeof statsOf>;
  pinchThreshold: number;
}

export function useRun(): RunView | null {
  const run = useRunStore((s) => s.run);
  if (!run) return null;
  return {
    run,
    level: levelOf(run),
    stats: statsOf(run),
    pinchThreshold: pinchThresholdOf(run),
  };
}
