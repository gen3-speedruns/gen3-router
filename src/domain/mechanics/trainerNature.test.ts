import { describe, expect, test } from "vitest";
import { calcTrainerPokemonNature } from "./trainerNature";

describe("Trainer Nature Mechanics", () => {
  test("calculates Brocks's party natures", () => {
    expect(calcTrainerPokemonNature("TRAINER_LEADER_BROCK", 0)).toBe("Jolly");
    expect(calcTrainerPokemonNature("TRAINER_LEADER_BROCK", 1)).toBe("Careful");
  });
  test("calculates Lt. Surges's party natures", () => {
    expect(calcTrainerPokemonNature("TRAINER_LEADER_LT_SURGE", 0)).toBe("Lax");
    expect(calcTrainerPokemonNature("TRAINER_LEADER_LT_SURGE", 1)).toBe(
      "Sassy",
    );
    expect(calcTrainerPokemonNature("TRAINER_LEADER_LT_SURGE", 2)).toBe(
      "Modest",
    );
  });
});
