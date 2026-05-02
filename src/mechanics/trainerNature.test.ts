import { expect, test, describe } from "vitest";
import { calcTrainerPokemonNature } from "./trainerNature";

describe("Trainer Nature Mechanics", () => {
  test("calculates Brocks's party natures", () => {
    expect(calcTrainerPokemonNature("TRAINER_LEADER_BROCK", 0)).toBe("Jolly");
    expect(calcTrainerPokemonNature("TRAINER_LEADER_BROCK", 1)).toBe("Careful");
  });
});
