import {
  buildRunner,
  calcStartingExp,
  type RunnerRecord,
} from "../domain/runner";

export function getLevelUpHpGain(runner: RunnerRecord, level: number): number {
  const current = buildRunner(runner);
  const next = buildRunner({
    ...runner,
    totalExp: calcStartingExp(runner.species, level),
  });

  return next.stats.hp - current.stats.hp;
}
