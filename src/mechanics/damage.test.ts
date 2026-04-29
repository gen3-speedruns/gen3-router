import { expect, test, describe } from "vitest";
import { calcDmgRange, type Combatant } from "./damage";
import type { Move } from "../gamedata/types";

describe("Damage Calculation Mechanics", () => {
  test("calcDmgRange applies STAB and 4x Weakness correctly", () => {
    // Level 11 Squirtle with 24 Sp.Atk (Modest, 31 IV)
    const squirtle: Combatant = {
      level: 11,
      types: ["water"],
      stat: 24,
      stages: 0,
      badgeBoost: false,
    };

    // Level 12 Geodude with 30 Sp.Def
    const geodude: Combatant = {
      level: 12,
      types: ["rock", "ground"],
      stat: 30,
      stages: 0,
      badgeBoost: false,
    };

    const bubble: Move = {
      power: 20,
      type: "water",
      accuracy: 100,
      pp: 30,
    };

    const damageRange = calcDmgRange(squirtle, geodude, bubble, false);

    expect(damageRange.length).toBe(16);
    expect(damageRange[0]).toBe(13);
    expect(damageRange[15]).toBe(16);
  });

  test("calcDmgRange applies Pinch Ability (Torrent/Blaze/Overgrow) multiplier", () => {
    const squirtle: Combatant = {
      level: 11,
      types: ["water"],
      stat: 24,
      stages: 0,
    };
    const geodude: Combatant = {
      level: 12,
      types: ["rock", "ground"],
      stat: 30,
      stages: 0,
    };
    const bubble: Move = { power: 20, type: "water", accuracy: 100, pp: 30 };

    const normalDmg = calcDmgRange(squirtle, geodude, bubble, false);
    const pinchDmg = calcDmgRange(squirtle, geodude, bubble, true);
    expect(pinchDmg[0]).toBeGreaterThan(normalDmg[0]);
  });
});
