import fs from "fs";
import https from "https";

const SPECIES_URL =
  "https://raw.githubusercontent.com/pret/pokefirered/master/src/data/pokemon/species_info.h";
const MOVES_URL =
  "https://raw.githubusercontent.com/pret/pokefirered/master/src/data/battle_moves.h";

function fetchDecompData(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

// --- POKEMON PARSER ---
function parseSpeciesInfo(rawC) {
  const pokedex = {};
  const blocks = rawC.split("[SPECIES_");

  const GROWTH_MAP = {
    ERRATIC: "Erratic",
    FAST: "Fast",
    MEDIUM_FAST: "MediumFast",
    MEDIUM_SLOW: "MediumSlow",
    SLOW: "Slow",
    FLUCTUATING: "Fluctuating",
  };

  blocks.forEach((block) => {
    if (!block.includes("] =")) return;

    let name = block.split("]")[0].toLowerCase();
    if (
      name === "none" ||
      name.includes("unown_") ||
      name.includes("old_unown")
    )
      return;

    name = name.charAt(0).toUpperCase() + name.slice(1);

    const getVal = (key) => {
      const reg = new RegExp(`\\.${key}\\s*=\\s*(\\d+)`);
      const m = block.match(reg);
      return m ? parseInt(m[1], 10) : 0;
    };

    const getTypes = () => {
      const match = block.match(
        /\.types\s*=\s*\{TYPE_([A-Z_]+)(?:,\s*TYPE_([A-Z_]+))?\}/,
      );
      if (match) {
        const t1 = match[1].toLowerCase();
        const t2 = match[2] ? match[2].toLowerCase() : t1;
        return t1 === t2 ? [t1] : [t1, t2];
      }
      return ["normal"];
    };

    const getGrowthRate = () => {
      const match = block.match(/\.growthRate\s*=\s*GROWTH_([A-Z_]+)/);
      return match && GROWTH_MAP[match[1]]
        ? GROWTH_MAP[match[1]]
        : "MediumFast";
    };

    pokedex[name] = {
      types: getTypes(),
      baseStats: {
        hp: getVal("baseHP"),
        atk: getVal("baseAttack"),
        def: getVal("baseDefense"),
        spa: getVal("baseSpAttack"),
        spd: getVal("baseSpDefense"),
        spe: getVal("baseSpeed"),
      },
      evYield: {
        hp: getVal("evYield_HP"),
        atk: getVal("evYield_Attack"),
        def: getVal("evYield_Defense"),
        spa: getVal("evYield_SpAttack"),
        spd: getVal("evYield_SpDefense"),
        spe: getVal("evYield_Speed"),
      },
      baseExp: getVal("expYield"),
      growthRate: getGrowthRate(),
    };
  });

  return pokedex;
}

// --- MOVES PARSER ---
function parseMoves(rawC) {
  const moveDex = {};
  const blocks = rawC.split("[MOVE_");

  blocks.forEach((block) => {
    if (!block.includes("] =")) return;

    const rawName = block.split("]")[0];
    if (rawName.includes(" ") || rawName === "NONE") return;

    const name = rawName
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    const getVal = (key) => {
      const reg = new RegExp(`\\.${key}\\s*=\\s*(\\d+)`);
      const m = block.match(reg);
      return m ? parseInt(m[1], 10) : 0;
    };

    const getType = () => {
      const match = block.match(/\.type\s*=\s*TYPE_([A-Z_]+)/);
      const typeStr = match ? match[1].toLowerCase() : "normal";
      return typeStr === "mystery" ? "normal" : typeStr;
    };

    moveDex[name] = {
      power: getVal("power"),
      type: getType(),
      accuracy: getVal("accuracy"),
      pp: getVal("pp"),
    };
  });

  return moveDex;
}

async function main() {
  console.log("Fetching Decomp Data...");

  // 1. Fetch and Parse Pokemon
  const rawSpecies = await fetchDecompData(SPECIES_URL);
  const pokedex = parseSpeciesInfo(rawSpecies);

  // Filter for Gen 1-3
  const pokemonKeys = Object.keys(pokedex).slice(0, 386);
  const gen3Pokedex = {};
  pokemonKeys.forEach((k) => (gen3Pokedex[k] = pokedex[k]));

  const pokeContent = `import type { Pokemon } from '../types';\n\nexport const PokemonData: Record<string, Pokemon> = ${JSON.stringify(gen3Pokedex, null, 2)};\n`;
  fs.writeFileSync("./src/core/data/pokemon.ts", pokeContent);
  console.log(
    `Saved ${pokemonKeys.length} Pokemon to src/core/data/pokemon.ts`,
  );

  // 2. Fetch and Parse Moves
  const rawMoves = await fetchDecompData(MOVES_URL);
  const moveDex = parseMoves(rawMoves);

  // Gen 3 has 354 moves (up to Psycho Boost)
  const moveKeys = Object.keys(moveDex).slice(0, 354);
  const gen3Moves = {};
  moveKeys.forEach((k) => (gen3Moves[k] = moveDex[k]));

  const moveContent = `import type { Move } from '../types';\n\nexport const MoveData: Record<string, Move> = ${JSON.stringify(gen3Moves, null, 2)};\n`;
  fs.writeFileSync("./src/core/data/moves.ts", moveContent);
  console.log(`Saved ${moveKeys.length} Moves to src/core/data/moves.ts`);
}

main();
