export default {
  q1: {
    id: "d8-q1",
    title: "Water Ration Check",
    description: "Write an if statement that sets 'needsWater' to true if 'waterLevel' is less than 10.",
    starterCode: { html: ``, css: ``, js: `let waterLevel = 5;\nlet needsWater = false;\n// TODO: Set needsWater to true if waterLevel < 10` },
    hints: ["if (waterLevel < 10) { needsWater = true; }"],
    answer: { js: `if (waterLevel < 10) {\n  needsWater = true;\n}` },
    targetImage: "/gameplay/desert-8/targets/q1.png",
  },
  q2: {
    id: "d8-q2",
    title: "Camel Speed Calculation",
    description: "Create a function 'getSpeed' that takes a 'weight' argument and returns 100 minus the weight.",
    starterCode: { html: ``, css: ``, js: `function getSpeed(weight) {\n  // TODO: Return 100 minus weight\n}` },
    hints: ["return 100 - weight;"],
    answer: { js: `function getSpeed(weight) {\n  return 100 - weight;\n}` },
    targetImage: "/gameplay/desert-8/targets/q2.png",
  },
  q3: {
    id: "d8-q3",
    title: "Temperature Warning",
    description: "Convert a traditional function into an arrow function 'isTooHot' returning true if temp > 40.",
    starterCode: { html: ``, css: ``, js: `// TODO: Create const arrow function isTooHot taking 'temp'` },
    hints: ["const isTooHot = (temp) => temp > 40;"],
    answer: { js: `const isTooHot = (temp) => temp > 40;` },
    targetImage: "/gameplay/desert-8/targets/q3.png",
  },
};