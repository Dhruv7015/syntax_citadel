export default {
  q1: {
    id: "s8-q1",
    title: "Altitude Check",
    description: "Write an evaluation condition block that reassigns oxygen to false only if the variable alt breaks past 30000.",
    starterCode: { html: ``, css: ``, js: `let alt = 35000;\nlet oxygen = true;\n// TODO: Set oxygen to false if alt > 30000` },
    answer: { js: `if (alt > 30000) {\n  oxygen = false;\n}` },
    targetImage: "/gameplay/sky-8/targets/q1.png",
  },
  q2: {
    id: "s8-q2",
    title: "Speed Calcs",
    description: "Implement return execution details inside 'calcSpeed' dividing parameter instance d by t.",
    starterCode: { html: ``, css: ``, js: `function calcSpeed(d, t) {\n  // TODO: Return d divided by t\n}` },
    answer: { js: `function calcSpeed(d, t) {\n  return d / t;\n}` },
    targetImage: "/gameplay/sky-8/targets/q2.png",
  },
  q3: {
    id: "s8-q3",
    title: "Clear Skies",
    description: "Refactor code configurations to assemble an arrow syntax constant execution tracking pointer evaluating true if target v exceeds 5.",
    starterCode: { html: ``, css: ``, js: `// TODO: Create const arrow function isSafe taking parameter v evaluating v > 5` },
    answer: { js: `const isSafe = (v) => v > 5;` },
    targetImage: "/gameplay/sky-8/targets/q3.png",
  }
};