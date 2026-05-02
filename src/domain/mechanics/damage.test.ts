import { describe, expect, it } from "vitest";
import { calcDamageIn, calcKoChance } from "./damage";
import type { BadgeBoosts, Runner } from "../runner";
import type { MoveData } from "../../gamedata/types";
import type { Encounter } from "../encounter";

const NO_BADGES: BadgeBoosts = {
  boulder: false,
  thunder: false,
  soul: false,
  volcano: false,
};

const physicalMove: MoveData = {
  type: "normal",
  power: 80,
  accuracy: 100,
  pp: 10,
};
const specialMove: MoveData = {
  type: "fire",
  power: 80,
  accuracy: 100,
  pp: 10,
};
const fightingMove: MoveData = {
  type: "fighting",
  power: 80,
  accuracy: 100,
  pp: 10,
};

const enemy: Encounter = {
  species: "",
  level: 50,
  types: ["poison"],
  stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
};
const player: Runner = {
  level: 50,
  types: ["water"],
  stats: { hp: 200, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
  pinchThreshold: 66,
  badges: NO_BADGES,
};

describe("calcDamageIn — base formula", () => {
  it("produces 16 rolls", () => {
    expect(calcDamageIn(enemy, player, physicalMove).rolls).toHaveLength(16);
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

  it("uses Def for physical and SpD for special moves", () => {
    const tankyPhysical: PlayerSpec = {
      ...player,
      types: ["normal"],
      stats: { ...player.stats, def: 200, spd: 50 },
    };

    const physResult = calcDamageIn(enemy, tankyPhysical, physicalMove);
    const specResult = calcDamageIn(enemy, tankyPhysical, specialMove);

    expect(physResult.max).toBe(19);
    expect(specResult.max).toBe(72);
  });
});

describe("calcDamageIn — STAB", () => {
  it("applies floor(15x/10) when attacker type matches move type", () => {
    const stabEnemy: EnemySpec = { ...enemy, types: ["normal"] };
    const { min, max } = calcDamageIn(stabEnemy, player, physicalMove);
    expect(min).toBe(46);
    expect(max).toBe(55);
  });

  it("does not apply STAB when attacker type does not match", () => {
    expect(calcDamageIn(enemy, player, physicalMove).max).toBe(37);
  });
});

describe("calcDamageIn — type effectiveness", () => {
  it("2× — Fighting super effective vs Normal", () => {
    const { min, max } = calcDamageIn(
      enemy,
      { ...player, types: ["normal"] },
      fightingMove,
    );
    expect(min).toBe(62);
    expect(max).toBe(74);
  });

  it("0.5× — Fighting resisted by Poison", () => {
    const { min, max } = calcDamageIn(
      enemy,
      { ...player, types: ["poison"] },
      fightingMove,
    );
    expect(min).toBe(15);
    expect(max).toBe(18);
  });

  it("0× — Normal immune to Ghost", () => {
    const { min, max } = calcDamageIn(
      enemy,
      { ...player, types: ["ghost"] },
      physicalMove,
    );
    expect(min).toBe(0);
    expect(max).toBe(0);
  });

  it("4× — Fighting vs Normal+Rock applies two separate truncating multiplies", () => {
    const { max } = calcDamageIn(
      enemy,
      { ...player, types: ["normal", "rock"] },
      fightingMove,
    );
    expect(max).toBe(148);
  });
});

describe("calcDamageIn — defender stat stages", () => {
  it("increases damage at stage -1", () => {
    const { min, max } = calcDamageIn(enemy, player, physicalMove, {
      stages: -1,
    });
    expect(min).toBe(46);
    expect(max).toBe(55);
  });

  it("decreases damage at stage +1", () => {
    const { min, max } = calcDamageIn(enemy, player, physicalMove, {
      stages: 1,
    });
    expect(min).toBe(21);
    expect(max).toBe(25);
  });

  it("applies stage -6 (×1/4 via floor(stat*10/40))", () => {
    expect(calcDamageIn(enemy, player, physicalMove, { stages: -6 }).max).toBe(
      142,
    );
  });

  it("applies stage +6 (×4 via floor(stat*40/10))", () => {
    expect(calcDamageIn(enemy, player, physicalMove, { stages: 6 }).max).toBe(
      10,
    );
  });
});

describe("calcDamageIn — badge boosts (player as defender)", () => {
  it("Soul badge reduces incoming physical damage (110% def)", () => {
    const badgedPlayer: PlayerSpec = {
      ...player,
      badges: { ...NO_BADGES, soul: true },
    };
    const noBadge = calcDamageIn(enemy, player, physicalMove);
    const badged = calcDamageIn(enemy, badgedPlayer, physicalMove);

    expect(badged.max).toBeLessThan(noBadge.max);
    expect(badged.max).toBe(34);
    expect(badged.min).toBe(28);
  });

  it("Volcano badge reduces incoming special damage (110% spd)", () => {
    const badgedPlayer: PlayerSpec = {
      ...player,
      types: ["normal"], // neutral vs Fire
      badges: { ...NO_BADGES, volcano: true },
    };
    const noBadge = calcDamageIn(
      enemy,
      { ...player, types: ["normal"] },
      specialMove,
    );
    const badged = calcDamageIn(enemy, badgedPlayer, specialMove);

    expect(badged.max).toBeLessThan(noBadge.max);
    expect(badged.max).toBe(34);
  });

  it("Boulder badge has no effect on incoming physical damage (enemy has no badges)", () => {
    const badgedPlayer: PlayerSpec = {
      ...player,
      badges: { ...NO_BADGES, boulder: true },
    };
    const noBadge = calcDamageIn(enemy, player, physicalMove);
    const badged = calcDamageIn(enemy, badgedPlayer, physicalMove);

    expect(badged.max).toBe(noBadge.max);
  });
});

describe("calcKoChance — badge boosts (player as attacker)", () => {
  it("Boulder badge increases outgoing physical damage (110% atk)", () => {
    const badgedPlayer: PlayerSpec = {
      ...player,
      badges: { ...NO_BADGES, boulder: true },
    };
    const borderEnemy: EnemySpec = {
      ...enemy,
      stats: { ...enemy.stats, hp: 40 },
    };
    const noBadge = calcKoChance(player, borderEnemy, [physicalMove], {});
    const badged = calcKoChance(badgedPlayer, borderEnemy, [physicalMove], {});

    expect(noBadge.chance).toBe(0);
    expect(badged.chance).toBeGreaterThan(0);
  });

  it("Soul badge has no effect on outgoing physical damage (player is attacker)", () => {
    const badgedPlayer: PlayerSpec = {
      ...player,
      badges: { ...NO_BADGES, soul: true },
    };
    const noBadge = calcKoChance(player, enemy, [physicalMove], {});
    const badged = calcKoChance(badgedPlayer, enemy, [physicalMove], {});

    expect(badged.chance).toBe(noBadge.chance);
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

  it("counts partial OHKO rolls — only the 100% roll hits at hp=37", () => {
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
    const unreachable: EnemySpec = {
      ...enemy,
      stats: { ...enemy.stats, hp: 9999 },
    };
    expect(calcKoChance(player, unreachable, [physicalMove], {}).outOf).toBe(
      16,
    );
    expect(
      calcKoChance(player, unreachable, [physicalMove, physicalMove], {}).outOf,
    ).toBe(256);
    expect(
      calcKoChance(
        player,
        unreachable,
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

  it("pinch ability boosts damage output", () => {
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
    expect(noPinch.chance).toBe(0);
    expect(pinch.chance).toBeGreaterThan(0);
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
    expect(noStage.chance).toBe(0);
    expect(boosted.chance).toBeGreaterThan(0);
  });
});
