import { expect, test, describe } from "vitest";
import {
  calcStat,
  calcHealth,
  calcDmgRange,
  isSpecialType,
  type Attacker,
  type Defender,
} from "./pokecalc";

describe("pokecalc core engine", () => {
  test("calcHealth calculates correct HP for Level 11 Squirtle", () => {
    const hp = calcHealth(44, 11, 31, 0);
    expect(hp).toBe(34);
  });

  test("calcStat calculates correct Sp.Atk with positive nature effect", () => {
    const spAtk = calcStat(65, 11, 31, 0, "positive");
    expect(spAtk).toBe(24);
  });

  test("calcDmgRange calculates STAB and 4x Weakness correctly (Bubble on Geodude)", () => {
    const squirtle: Attacker = {
      level: 11,
      atk: 24,
      types: ["water"],
      move: { power: 20, type: "water" },
    };

    const geodude: Defender = {
      types: ["rock", "ground"],
      def: 30,
    };

    const damageRange = calcDmgRange(squirtle, geodude, { torrent: false });

    expect(damageRange.length).toBe(16);
    expect(damageRange[0]).toBe(13);
    expect(damageRange[15]).toBe(16);
  });

  test("isSpecialType correctly identifies physical vs special types", () => {
    expect(isSpecialType("water")).toBe(true);
    expect(isSpecialType("grass")).toBe(true);
    expect(isSpecialType("normal")).toBe(false);
    expect(isSpecialType("rock")).toBe(false);
  });
});
