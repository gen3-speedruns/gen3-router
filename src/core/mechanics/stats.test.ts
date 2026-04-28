import { expect, test, describe } from "vitest";
import { calcHealth, calcStat } from "./stats";

describe("Stat Calculation Mechanics", () => {
  test("calcHealth calculates correct HP for Level 11 Squirtle", () => {
    // Squirtle Base HP: 44, Level: 11, IV: 31, EV: 0
    const hp = calcHealth(44, 11, 31, 0);
    expect(hp).toBe(34);
  });

  test("calcStat applies Modest Nature correctly to Sp.Atk", () => {
    // Squirtle Base Sp.Atk: 65, Level: 11, IV: 31, EV: 0, Modest (+SpA, -Atk)
    const spAtk = calcStat("spa", 65, 11, 31, 0, "Modest");
    expect(spAtk).toBe(24);
  });

  test("calcStat applies Modest Nature correctly to Attack (Negative)", () => {
    // Squirtle Base Atk: 48, Level: 11, IV: 31, EV: 0, Modest (+SpA, -Atk)
    const atk = calcStat("atk", 48, 11, 31, 0, "Modest");
    expect(atk).toBe(16);
  });
});
