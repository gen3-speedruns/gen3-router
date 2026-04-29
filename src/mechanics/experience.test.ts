import { expect, test, describe } from "vitest";
import {
  getExpAtLevel,
  getLevelFromExp,
  calculateExpYield,
} from "./experience";

describe("Experience Mechanics", () => {
  test("getExpAtLevel calculates MediumSlow curve correctly", () => {
    // Level 100 MediumSlow (Squirtle/Bulbasaur) should be exactly 1,059,860
    const exp = getExpAtLevel(100, "MediumSlow");
    expect(exp).toBe(1059860);

    // Level 1 should be 0
    expect(getExpAtLevel(1, "MediumSlow")).toBe(0);
  });

  test("getLevelFromExp reverses the curve accurately", () => {
    // If we have 1,059,860 EXP on a MediumSlow Pokemon, we should be level 100
    expect(getLevelFromExp(1059860, "MediumSlow")).toBe(100);

    // If we have slightly less than level 100 requirement, we should be 99
    expect(getLevelFromExp(1059859, "MediumSlow")).toBe(99);
  });

  test("calculateExpYield applies trainer bonus correctly", () => {
    // Pidgey base EXP yield is 50. Level 3 Wild vs Trainer.
    const wildYield = calculateExpYield(50, 3, false);
    const trainerYield = calculateExpYield(50, 3, true);

    expect(wildYield).toBe(21);
    expect(trainerYield).toBe(32);
  });
});
