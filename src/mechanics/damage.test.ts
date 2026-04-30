import { describe, expect, it } from "vitest";
import { calcDamageIn, calcKoChance } from "./damage";
import type { EnemySpec, Move, PlayerSpec } from "../gamedata/types";

const physicalMove: Move = { type: "normal", power: 80, accuracy: 100, pp: 10 };
const specialMove: Move = { type: "fire", power: 80, accuracy: 100, pp: 10 };
const fightingMove: Move = {
  type: "fighting",
  power: 80,
  accuracy: 100,
  pp: 10,
};

const enemy: EnemySpec = {
  species: "",
  level: 50,
  types: ["poison"],
  stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
};

const player: PlayerSpec = {
  level: 50,
  types: ["water"],
  stats: { hp: 200, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
  pinchThreshold: 66,
};

describe("calcDamageIn — base formula", () => {
  it("produces 16 rolls", () => {
    const result = calcDamageIn(enemy, player, physicalMove);
    expect(result.rolls).toHaveLength(16);
  });

  it("rolls are strictly non-decreasing", () => {
    const { rolls } = calcDamageIn(enemy, player, physicalMove);
    for (let i = 1; i < rolls.length; i++) {
      expect(rolls[i]).toBeGreaterThanOrEqual(rolls[i - 1]);
    }
  });

  it("computes correct min/max for known values", () => {
    const { min, max } = calcDamageIn(enemy, player, physicalMove);
    expect(min).toBe(31);
    expect(max).toBe(37);
  });

  it("exposes min and max as rolls[0] and rolls[15]", () => {
    const result = calcDamageIn(enemy, player, physicalMove);
    expect(result.min).toBe(result.rolls[0]);
    expect(result.max).toBe(result.rolls[15]);
  });

  it("uses Def for physical moves and SpD for special moves", () => {
    const tankyPhysical: PlayerSpec = {
      ...player,
      types: ["normal"],
      stats: { ...player.stats, def: 200, spd: 50 },
    };

    const physResult = calcDamageIn(enemy, tankyPhysical, physicalMove);
    const specResult = calcDamageIn(enemy, tankyPhysical, specialMove);

    expect(physResult.max).toBe(19);
    expect(specResult.max).toBe(72);
    expect(physResult.max).toBeLessThan(specResult.max);
  });
});

describe("calcDamageIn — STAB", () => {
  it("applies 1.5× via floor(15x/10) when attacker type matches move type", () => {
    const stabEnemy: EnemySpec = { ...enemy, types: ["normal"] };
    const { min, max } = calcDamageIn(stabEnemy, player, physicalMove);
    expect(min).toBe(46);
    expect(max).toBe(55);
  });

  it("does not apply STAB when attacker type does not match move type", () => {
    const { max } = calcDamageIn(enemy, player, physicalMove);
    expect(max).toBe(37);
  });
});

describe("calcDamageIn — type effectiveness", () => {
  it("doubles damage — Fighting super effective vs Normal (2×)", () => {
    const normalPlayer: PlayerSpec = { ...player, types: ["normal"] };
    const { min, max } = calcDamageIn(enemy, normalPlayer, fightingMove);
    expect(min).toBe(62);
    expect(max).toBe(74);
  });

  it("halves damage — Fighting resisted by Poison (0.5×)", () => {
    const poisonPlayer: PlayerSpec = { ...player, types: ["poison"] };
    const { min, max } = calcDamageIn(enemy, poisonPlayer, fightingMove);
    expect(min).toBe(15);
    expect(max).toBe(18);
  });

  it("produces zero damage — Normal has no effect on Ghost (0×)", () => {
    const ghostPlayer: PlayerSpec = { ...player, types: ["ghost"] };
    const { min, max } = calcDamageIn(enemy, ghostPlayer, physicalMove);
    expect(min).toBe(0);
    expect(max).toBe(0);
  });

  it("applies each defending type as a separate truncating multiply — Fighting vs Normal+Rock (4×)", () => {
    const dualTypePlayer: PlayerSpec = { ...player, types: ["normal", "rock"] };
    const { max } = calcDamageIn(enemy, dualTypePlayer, fightingMove);
    expect(max).toBe(148);
  });
});

describe("calcDamageIn — defender stat stages", () => {
  it("increases damage when defender is at -1 stage", () => {
    const base = calcDamageIn(enemy, player, physicalMove);
    const boosted = calcDamageIn(enemy, player, physicalMove, { stages: -1 });
    expect(boosted.max).toBeGreaterThan(base.max);
    expect(boosted.min).toBe(46);
    expect(boosted.max).toBe(55);
  });

  it("decreases damage when defender is at +1 stage", () => {
    const base = calcDamageIn(enemy, player, physicalMove);
    const nerfed = calcDamageIn(enemy, player, physicalMove, { stages: 1 });
    expect(nerfed.max).toBeLessThan(base.max);
    expect(nerfed.min).toBe(21);
    expect(nerfed.max).toBe(25);
  });

  it("applies max stage -6 (×1/4 via floor(stat*10/40))", () => {
    const result = calcDamageIn(enemy, player, physicalMove, { stages: -6 });
    expect(result.max).toBe(142);
  });

  it("applies max stage +6 (×4 via floor(stat*40/10))", () => {
    const result = calcDamageIn(enemy, player, physicalMove, { stages: 6 });
    expect(result.max).toBe(10);
  });
});

describe("calcDamageIn — OHKO / lethality", () => {
  it("isLethal when max roll >= defender HP", () => {
    const lowHpPlayer: PlayerSpec = {
      ...player,
      stats: { ...player.stats, hp: 30 },
    };
    const result = calcDamageIn(enemy, lowHpPlayer, physicalMove);
    expect(result.isLethal).toBe(true);
    expect(result.ohkoCount).toBe(16);
    expect(result.ohkoPct).toBe(100);
  });

  it("is not lethal when max roll < defender HP", () => {
    const result = calcDamageIn(enemy, player, physicalMove);
    expect(result.isLethal).toBe(false);
    expect(result.ohkoCount).toBe(0);
    expect(result.ohkoPct).toBe(0);
  });

  it("counts partial OHKO rolls correctly — only the 100% roll hits", () => {
    const exactHpPlayer: PlayerSpec = {
      ...player,
      stats: { ...player.stats, hp: 37 },
    };
    const result = calcDamageIn(enemy, exactHpPlayer, physicalMove);
    expect(result.ohkoCount).toBe(1);
    expect(result.isLethal).toBe(true);
  });
});

describe("calcKoChance", () => {
  it("guaranteed KO when all combo rolls exceed enemy HP", () => {
    const weakEnemy: EnemySpec = {
      ...enemy,
      stats: { ...enemy.stats, hp: 10 },
    };
    const result = calcKoChance(player, weakEnemy, [physicalMove], {});
    expect(result.guaranteed).toBe(true);
    expect(result.chance).toBe(result.outOf);
    expect(result.pct).toBe(100);
  });

  it("0% KO when no roll reaches enemy HP", () => {
    const result = calcKoChance(player, enemy, [physicalMove], {});
    expect(result.guaranteed).toBe(false);
    expect(result.chance).toBe(0);
    expect(result.pct).toBe(0);
  });

  it("produces 16^n combos for n moves", () => {
    const unreachableEnemy: EnemySpec = {
      ...enemy,
      stats: { ...enemy.stats, hp: 9999 },
    };

    expect(
      calcKoChance(player, unreachableEnemy, [physicalMove], {}).outOf,
    ).toBe(16);
    expect(
      calcKoChance(player, unreachableEnemy, [physicalMove, physicalMove], {})
        .outOf,
    ).toBe(256);
    expect(
      calcKoChance(
        player,
        unreachableEnemy,
        [physicalMove, physicalMove, physicalMove],
        {},
      ).outOf,
    ).toBe(4096);
  });

  it("guaranteed=false when minimum roll misses but some rolls hit", () => {
    const edgeEnemy: EnemySpec = {
      ...enemy,
      stats: { ...enemy.stats, hp: 32 },
    };
    const result = calcKoChance(player, edgeEnemy, [physicalMove], {});
    expect(result.guaranteed).toBe(false);
    expect(result.chance).toBeGreaterThan(0);
    expect(result.chance).toBeLessThan(result.outOf);
  });

  it("pinch ability increases damage output", () => {
    const borderEnemy: EnemySpec = {
      ...enemy,
      stats: { ...enemy.stats, hp: 50 },
    };
    const noPinch = calcKoChance(player, borderEnemy, [physicalMove], {
      pinch: false,
    });
    const pinch = calcKoChance(player, borderEnemy, [physicalMove], {
      pinch: true,
    });
    expect(pinch.chance).toBeGreaterThan(noPinch.chance);
  });

  it("attacker stat stages increase KO count", () => {
    const borderEnemy: EnemySpec = {
      ...enemy,
      stats: { ...enemy.stats, hp: 50 },
    };
    const noStage = calcKoChance(player, borderEnemy, [physicalMove], {
      stages: 0,
    });
    const boosted = calcKoChance(player, borderEnemy, [physicalMove], {
      stages: 1,
    });
    expect(boosted.chance).toBeGreaterThan(noStage.chance);
  });
});
