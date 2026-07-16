export default {
  q1: {
    id: "t8-q1",
    title: "Hypothermia Check",
    description: "Write an evaluation condition block that reassigns critical to true only if the variable temperature drops below -10.",
    starterCode: { html: ``, css: ``, js: `let temperature = -15;\nlet critical = false;\n// TODO: Set critical to true if temperature < -10` },
    answer: { js: `if (temperature < -10) {\n  critical = true;\n}` },
    targetImage: "/gameplay/tundra-8/targets/q1.png",
  },
  q2: {
    id: "t8-q2",
    title: "Melt Rate",
    description: "Implement return execution details inside 'calcTime' dividing parameter instance volume by rate.",
    starterCode: { html: ``, css: ``, js: `function calcTime(volume, rate) {\n  // TODO: Return volume divided by rate\n}` },
    answer: { js: `function calcTime(volume, rate) {\n  return volume / rate;\n}` },
    targetImage: "/gameplay/tundra-8/targets/q2.png",
  },
  q3: {
    id: "t8-q3",
    title: "Ice Crack Tracker",
    description: "Refactor code configurations to assemble an arrow syntax constant execution tracking pointer evaluating true if target crackWidth exceeds 5.",
    starterCode: { html: ``, css: ``, js: `// TODO: Create const arrow function isUnstable taking crackWidth evaluating crackWidth > 5` },
    answer: { js: `const isUnstable = (crackWidth) => crackWidth > 5;` },
    targetImage: "/gameplay/tundra-8/targets/q3.png",
  }
};