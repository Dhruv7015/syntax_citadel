export default {
  q1: {
    id: "o8-q1",
    title: "Oxygen Check",
    description: "Write an if statement that sets 'critical' to true if 'oxygenLevel' is less than 20.",
    starterCode: { html: ``, css: ``, js: `let oxygenLevel = 15;\nlet critical = false;\n// TODO: Set critical to true if oxygenLevel < 20` },
    hints: ["if (oxygenLevel < 20) { critical = true; }"],
    answer: { js: `if (oxygenLevel < 20) {\n  critical = true;\n}` },
    targetImage: "/gameplay/ocean-8/targets/q1.png",
  },
  q2: {
    id: "o8-q2",
    title: "Pressure Calculator",
    description: "Create a function 'getPressure' that takes a 'depth' argument and returns the depth multiplied by 10.",
    starterCode: { html: ``, css: ``, js: `function getPressure(depth) {\n  // TODO: Return depth multiplied by 10\n}` },
    hints: ["return depth * 10;"],
    answer: { js: `function getPressure(depth) {\n  return depth * 10;\n}` },
    targetImage: "/gameplay/ocean-8/targets/q2.png",
  },
  q3: {
    id: "o8-q3",
    title: "Crush Depth Warning",
    description: "Convert a traditional function into an arrow function 'isCrushing' returning true if depth > 500.",
    starterCode: { html: ``, css: ``, js: `// TODO: Create const arrow function isCrushing taking 'depth'` },
    hints: ["const isCrushing = (depth) => depth > 500;"],
    answer: { js: `const isCrushing = (depth) => depth > 500;` },
    targetImage: "/gameplay/ocean-8/targets/q3.png",
  }
};