import https from "https";
import fs from "fs";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const TreeSitter = require("./node_modules/web-tree-sitter/web-tree-sitter.cjs");
const { Parser, Language } = TreeSitter;

const URLS = {
  species:
    "https://raw.githubusercontent.com/pret/pokefirered/master/src/data/pokemon/species_info.h",
  moves:
    "https://raw.githubusercontent.com/pret/pokefirered/master/src/data/battle_moves.h",
  trainerParties:
    "https://raw.githubusercontent.com/pret/pokefirered/master/src/data/trainer_parties.h",
  trainers:
    "https://raw.githubusercontent.com/pret/pokefirered/master/src/data/trainers.h",
};

function fetchText(url) {
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

function findFirstDescendant(node, type) {
  if (!node) return null;
  if (node.type === type) return node;
  for (const child of node.namedChildren ?? []) {
    const found = findFirstDescendant(child, type);
    if (found) return found;
  }
  return null;
}

function findAllDescendants(node, type, out = []) {
  if (!node) return out;
  if (node.type === type) out.push(node);
  for (const child of node.namedChildren ?? []) {
    findAllDescendants(child, type, out);
  }
  return out;
}

function getTopLevelInitializerPairs(tree) {
  return findAllDescendants(tree.rootNode, "initializer_pair").filter(
    (node) => {
      let p = node.parent;
      while (p) {
        if (p.type === "initializer_pair") return false;
        p = p.parent;
      }
      return true;
    },
  );
}

function extractFields(initializerNode) {
  const fields = new Map();

  for (const child of initializerNode.namedChildren ?? []) {
    if (child.type !== "initializer_pair") continue;

    const fieldId = findFirstDescendant(child, "field_identifier");
    if (!fieldId) continue;

    const value = child.namedChildren[child.namedChildren.length - 1];
    if (!value) continue;

    fields.set(fieldId.text, value);
  }

  return fields;
}

function resolveValue(node) {
  if (!node) return undefined;

  switch (node.type) {
    case "number_literal":
      return Number(node.text);

    case "identifier":
      return node.text;

    case "string_literal":
      return node.text.slice(1, -1);

    case "initializer_list":
      return (node.namedChildren ?? []).map((child) => resolveValue(child));

    case "call_expression": {
      const str = findFirstDescendant(node, "string_literal");
      if (str) return str.text.slice(1, -1);
      return node.text;
    }

    case "binary_expression":
      return node.text;

    default:
      return node.text;
  }
}

function getField(fields, name, fallback = undefined) {
  return fields.has(name) ? resolveValue(fields.get(name)) : fallback;
}

const GROWTH_MAP = {
  GROWTH_ERRATIC: "Erratic",
  GROWTH_FAST: "Fast",
  GROWTH_MEDIUM_FAST: "MediumFast",
  GROWTH_MEDIUM_SLOW: "MediumSlow",
  GROWTH_SLOW: "Slow",
  GROWTH_FLUCTUATING: "Fluctuating",
};

function typeName(raw) {
  return String(raw)
    .replace(/^TYPE_/, "")
    .toLowerCase();
}

function moveName(raw) {
  return String(raw)
    .replace(/^MOVE_/, "")
    .toLowerCase()
    .split("_")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

function speciesName(raw) {
  return String(raw)
    .replace(/^SPECIES_/, "")
    .toLowerCase()
    .split("_")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

function parseSpecies(tree) {
  const pokedex = {};
  const entries = getTopLevelInitializerPairs(tree);

  for (const entry of entries) {
    const subscript = findFirstDescendant(entry, "subscript_designator");
    const keyNode = findFirstDescendant(subscript, "identifier");
    const initList = entry.namedChildren.find(
      (n) => n.type === "initializer_list",
    );

    const key = keyNode?.text;
    if (!key?.startsWith("SPECIES_")) continue;
    if (key === "SPECIES_NONE") continue;

    const rawName = key.replace(/^SPECIES_/, "");
    if (rawName.startsWith("OLD_UNOWN")) continue;

    const fields = extractFields(initList);

    const typesRaw = getField(fields, "types", []);
    const types = [
      ...new Set(
        (Array.isArray(typesRaw) ? typesRaw : [typesRaw])
          .filter((x) => String(x).startsWith("TYPE_"))
          .map(typeName),
      ),
    ];

    const name = speciesName(key);

    pokedex[name] = {
      types: types.length ? types : ["normal"],
      baseStats: {
        hp: getField(fields, "baseHP", 0),
        atk: getField(fields, "baseAttack", 0),
        def: getField(fields, "baseDefense", 0),
        spa: getField(fields, "baseSpAttack", 0),
        spd: getField(fields, "baseSpDefense", 0),
        spe: getField(fields, "baseSpeed", 0),
      },
      evYield: {
        hp: getField(fields, "evYield_HP", 0),
        atk: getField(fields, "evYield_Attack", 0),
        def: getField(fields, "evYield_Defense", 0),
        spa: getField(fields, "evYield_SpAttack", 0),
        spd: getField(fields, "evYield_SpDefense", 0),
        spe: getField(fields, "evYield_Speed", 0),
      },
      baseExp: getField(fields, "expYield", 0),
      growthRate: GROWTH_MAP[getField(fields, "growthRate")] ?? "MediumFast",
    };
  }

  return pokedex;
}

function parseMoves(tree) {
  const moveDex = {};
  const entries = getTopLevelInitializerPairs(tree);

  for (const entry of entries) {
    const subscript = findFirstDescendant(entry, "subscript_designator");
    const keyNode = findFirstDescendant(subscript, "identifier");
    const initList = entry.namedChildren.find(
      (n) => n.type === "initializer_list",
    );

    const key = keyNode?.text;
    if (!key?.startsWith("MOVE_")) continue;
    if (key === "MOVE_NONE") continue;

    const fields = extractFields(initList);
    const name = moveName(key);

    const rawType = getField(fields, "type", "TYPE_NORMAL");

    moveDex[name] = {
      power: getField(fields, "power", 0),
      type: rawType === "TYPE_MYSTERY" ? "normal" : typeName(rawType),
      accuracy: getField(fields, "accuracy", 0),
      pp: getField(fields, "pp", 0),
    };
  }

  return moveDex;
}

function parseTrainerParties(tree) {
  const parties = {};
  const declarations = findAllDescendants(tree.rootNode, "declaration");

  for (const decl of declarations) {
    const text = decl.text;
    if (!text.includes("sParty_")) continue;

    const varNode = findAllDescendants(decl, "identifier").find((n) =>
      n.text.startsWith("sParty_"),
    );
    if (!varNode) continue;

    const partyName = varNode.text;
    const initLists = findAllDescendants(decl, "initializer_list");
    if (!initLists.length) continue;

    const outerInit = initLists[0];
    const memberNodes = outerInit.namedChildren.filter(
      (n) => n.type === "initializer_list",
    );

    const members = [];

    for (const memberNode of memberNodes) {
      const fields = extractFields(memberNode);
      if (!fields.has("species")) continue;

      const speciesRaw = getField(fields, "species");
      const movesRaw = getField(fields, "moves", []);

      const member = {
        iv: Math.trunc((getField(fields, "iv", 0) / 255) * 31),
        level: getField(fields, "lvl", 0),
        species: speciesName(speciesRaw),
      };

      if (Array.isArray(movesRaw)) {
        member.moves = movesRaw
          .filter((m) => String(m).startsWith("MOVE_") && m !== "MOVE_NONE")
          .map(moveName);
      }

      const heldItem = getField(fields, "heldItem");
      if (heldItem && heldItem !== "ITEM_NONE") {
        member.heldItem = heldItem;
      }

      members.push(member);
    }

    if (members.length) {
      parties[partyName] = members;
    }
  }

  return parties;
}

function parseTrainers(tree, parties) {
  const trainers = {};
  const entries = getTopLevelInitializerPairs(tree);

  for (const entry of entries) {
    const subscript = findFirstDescendant(entry, "subscript_designator");
    const keyNode = findFirstDescendant(subscript, "identifier");
    const initList = entry.namedChildren.find(
      (n) => n.type === "initializer_list",
    );

    const trainerId = keyNode?.text;
    if (!trainerId?.startsWith("TRAINER_")) continue;
    if (trainerId === "TRAINER_NONE") continue;

    const fields = extractFields(initList);

    const partyNode = fields.get("party");
    if (!partyNode) continue;

    const partyArg = findAllDescendants(partyNode, "identifier").find((n) =>
      n.text.startsWith("sParty_"),
    );
    if (!partyArg) continue;

    const partyRef = partyArg.text;
    const party = parties[partyRef];
    if (!party) continue;

    const encounterMusic = getField(fields, "encounterMusic_gender", "");
    const name = getField(fields, "trainerName", "");

    trainers[trainerId] = {
      name,
      isFemale: String(encounterMusic).includes("FEMALE"),
      isDouble: getField(fields, "doubleBattle", "FALSE") !== "FALSE",
      party,
    };
  }

  return trainers;
}

function validatePokemon(pokedex) {
  let warnings = 0;
  for (const [name, mon] of Object.entries(pokedex)) {
    if (
      mon.baseStats.hp === 0 &&
      mon.baseStats.atk === 0 &&
      mon.baseStats.def === 0 &&
      mon.baseStats.spa === 0 &&
      mon.baseStats.spd === 0 &&
      mon.baseStats.spe === 0
    ) {
      console.warn(
        `  ⚠ ${name}: all base stats are 0 — possible parse failure`,
      );
      warnings++;
    }
  }
  return warnings;
}

async function main() {
  await Parser.init({
    locateFile: () =>
      join(__dirname, "node_modules/web-tree-sitter/web-tree-sitter.wasm"),
  });

  const C = await Language.load(
    join(__dirname, "node_modules/tree-sitter-c/tree-sitter-c.wasm"),
  );

  const parser = new Parser();
  parser.setLanguage(C);

  console.log("Fetching decomp data...");
  const [rawSpecies, rawMoves, rawTrainerParties, rawTrainers] =
    await Promise.all([
      fetchText(URLS.species),
      fetchText(URLS.moves),
      fetchText(URLS.trainerParties),
      fetchText(URLS.trainers),
    ]);

  console.log("Parsing...");
  const pokemon = parseSpecies(parser.parse(rawSpecies));
  const moves = parseMoves(parser.parse(rawMoves));
  const parties = parseTrainerParties(parser.parse(rawTrainerParties));
  const trainers = parseTrainers(parser.parse(rawTrainers), parties);

  const pokemonKeys = Object.keys(pokemon).slice(0, 386);
  const gen3Pokemon = {};
  pokemonKeys.forEach((k, i) => {
    gen3Pokemon[k] = { ...pokemon[k], dexId: i + 1 };
  });

  const moveKeys = Object.keys(moves).slice(0, 354);
  const gen3Moves = {};
  moveKeys.forEach((k) => {
    gen3Moves[k] = moves[k];
  });

  fs.mkdirSync("./src/gamedata", { recursive: true });

  fs.writeFileSync(
    "./src/gamedata/pokemon.ts",
    `import type { PokemonData } from './types';\n\nexport const PokemonDataMap: Record<string, PokemonData> = ${JSON.stringify(gen3Pokemon, null, 2)};\n`,
  );

  fs.writeFileSync(
    "./src/gamedata/moves.ts",
    `import type { MoveData } from './types';\n\nexport const MoveDataMap: Record<string, MoveData> = ${JSON.stringify(gen3Moves, null, 2)};\n`,
  );

  fs.writeFileSync(
    "./src/gamedata/trainers.ts",
    `import type { TrainerData } from './types';\n\nexport const TrainerDataMap: Record<string, TrainerData> = ${JSON.stringify(trainers, null, 2)};\n`,
  );

  console.log(
    `✓ ${Object.keys(gen3Pokemon).length} Pokémon → src/gamedata/pokemon.ts`,
  );
  console.log(
    `✓ ${Object.keys(gen3Moves).length} moves → src/gamedata/moves.ts`,
  );
  console.log(
    `✓ ${Object.keys(trainers).length} trainers → src/gamedata/trainers.ts`,
  );

  validatePokemon(gen3Pokemon);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
