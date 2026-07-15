/**
 * scaffold-content.js
 *
 * Generates the full data/ folder structure for 10 worlds x 10 levels x 3 questions,
 * plus fully-registered lib/levels.js and lib/questions.js files.
 *
 * SAFE TO RE-RUN: any file that already exists is left untouched and skipped.
 * This means you can run it once now, fill in real content over time, and
 * re-run it later if you add a new world to WORLDS below — it will only
 * create what's missing.
 *
 * USAGE:
 *   1. Save this file at the ROOT of your Next.js project (same level as
 *      package.json, app/, lib/).
 *   2. Run:  node scaffold-content.js
 *   3. Review the console output for what was created vs skipped.
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

// Add/remove worlds here. Order doesn't matter.
const WORLDS = [
  "forest",
  "iceworld",
  "desert",
  "ocean",
  "volcano",
  "sky",
  "cave",
  "swamp",
  "tundra",
  "space",
];

const LEVELS_PER_WORLD = 10;
const QUESTIONS_PER_LEVEL = 3;

let createdCount = 0;
let skippedCount = 0;

function writeIfMissing(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });

  if (fs.existsSync(filePath)) {
    console.log(`  skip   ${path.relative(ROOT, filePath)}`);
    skippedCount++;
    return;
  }

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`  create ${path.relative(ROOT, filePath)}`);
  createdCount++;
}

// ---------------------------------------------------------------------------
// 1. data/levels/<world>.js  (PUBLIC — overview data, safe for client import)
// ---------------------------------------------------------------------------

function buildLevelsFileContent(world) {
  const levelEntries = [];

  for (let level = 1; level <= LEVELS_PER_WORLD; level++) {
    const questionEntries = [];
    for (let q = 1; q <= QUESTIONS_PER_LEVEL; q++) {
      questionEntries.push(
        `      { id: "q${q}", title: "Question - ${q}", icon: "🧩", tags: ["HTML", "CSS"], description: "TODO: describe question ${q} for ${world} level ${level}.", xp: 100, difficulty: "Easy" },`
      );
    }

    levelEntries.push(
      `  ${level}: {\n    title: "LEVEL - ${level}",\n    questions: [\n${questionEntries.join(
        "\n"
      )}\n    ],\n  },`
    );
  }

  return `export default {\n${levelEntries.join("\n")}\n};\n`;
}

console.log("\n== data/levels/ ==");
for (const world of WORLDS) {
  const filePath = path.join(ROOT, "data", "levels", `${world}.js`);
  writeIfMissing(filePath, buildLevelsFileContent(world));
}

// ---------------------------------------------------------------------------
// 2. data/questions/<world>/<level>.js  (PRIVATE — server-only, never client-imported)
// ---------------------------------------------------------------------------

function buildQuestionFileContent(world, level) {
  const entries = [];
  for (let q = 1; q <= QUESTIONS_PER_LEVEL; q++) {
    entries.push(
      `  q${q}: {\n` +
        `    starterCode: { html: \`<div class="target"></div>\`, css: \`.target {\\n\\n}\` },\n` +
        `    hints: [\n      "TODO: hint 1 for ${world} level ${level} q${q}",\n      "TODO: hint 2",\n      "TODO: hint 3",\n    ],\n` +
        `    answer: { html: \`<!-- TODO: answer html -->\`, css: \`/* TODO: answer css */\` },\n` +
        `    targetImage: "/gameplay/${world}-${level}/targets/q${q}.png",\n` +
        `  },`
    );
  }
  return `export default {\n${entries.join("\n")}\n};\n`;
}

console.log("\n== data/questions/ ==");
for (const world of WORLDS) {
  for (let level = 1; level <= LEVELS_PER_WORLD; level++) {
    const filePath = path.join(ROOT, "data", "questions", world, `${level}.js`);
    writeIfMissing(filePath, buildQuestionFileContent(world, level));
  }
}

// ---------------------------------------------------------------------------
// 3. lib/levels.js  (imports every world's overview data)
// ---------------------------------------------------------------------------

function buildLibLevelsContent() {
  const imports = WORLDS.map(
    (w) => `import ${w} from '@/data/levels/${w}';`
  ).join("\n");
  const mapEntries = WORLDS.join(", ");

  return (
    `${imports}\n\n` +
    `const WORLD_LEVELS = { ${mapEntries} };\n\n` +
    `export function getLevelData(world, levelId) {\n` +
    `  return WORLD_LEVELS[world]?.[levelId] ?? null;\n` +
    `}\n`
  );
}

// ---------------------------------------------------------------------------
// 4. lib/questions.js  (registers every world-level question file, server-only)
// ---------------------------------------------------------------------------

function buildLibQuestionsContent() {
  const loaderLines = [];
  for (const world of WORLDS) {
    for (let level = 1; level <= LEVELS_PER_WORLD; level++) {
      loaderLines.push(
        `  "${world}-${level}": () => import('@/data/questions/${world}/${level}'),`
      );
    }
  }

  return (
    `const loaders = {\n${loaderLines.join("\n")}\n};\n\n` +
    `export async function getQuestion(world, level, questionId) {\n` +
    `  const key = \`\${world}-\${level}\`;\n` +
    `  const loader = loaders[key];\n` +
    `  if (!loader) return null;\n` +
    `  const mod = await loader();\n` +
    `  return mod.default[questionId] ?? null;\n` +
    `}\n\n` +
    `export function toPublic(q) {\n` +
    `  const { answer, hints, ...safe } = q;\n` +
    `  return safe;\n` +
    `}\n`
  );
}

console.log("\n== lib/ ==");

// lib/levels.js and lib/questions.js are regenerated in full every run
// (not skipped) because they must always list ALL worlds/levels currently
// defined in WORLDS above — unlike data files, there's no hand-written
// content to protect here, it's a pure registration index.
const libLevelsPath = path.join(ROOT, "lib", "levels.js");
fs.mkdirSync(path.dirname(libLevelsPath), { recursive: true });
fs.writeFileSync(libLevelsPath, buildLibLevelsContent(), "utf-8");
console.log(`  write  ${path.relative(ROOT, libLevelsPath)} (regenerated)`);

const libQuestionsPath = path.join(ROOT, "lib", "questions.js");
fs.mkdirSync(path.dirname(libQuestionsPath), { recursive: true });
fs.writeFileSync(libQuestionsPath, buildLibQuestionsContent(), "utf-8");
console.log(`  write  ${path.relative(ROOT, libQuestionsPath)} (regenerated)`);

// ---------------------------------------------------------------------------
console.log(
  `\nDone. ${createdCount} data file(s) created, ${skippedCount} already existed and were left alone.`
);
console.log(
  "lib/levels.js and lib/questions.js were fully regenerated to include all worlds/levels listed in WORLDS.\n"
);
