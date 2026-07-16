export default {
  q1: {
    id: "sp8-q1",
    title: "Radiation Check",
    description: "Write an evaluation condition block that reassigns shieldsCritical to true only if the variable radLevel breaks past 800.",
    starterCode: { html: ``, css: ``, js: `let radLevel = 920;\nlet shieldsCritical = false;\n// TODO: Set shieldsCritical to true if radLevel > 800` },
    answer: { js: `if (radLevel > 800) {\n  shieldsCritical = true;\n}` },
    targetImage: "/gameplay/space-8/targets/q1.png",
  },
  q2: {
    id: "sp8-q2",
    title: "Trajectory Math",
    description: "Implement return execution details inside 'calcTrajectory' dividing parameter instance distance by velocity.",
    starterCode: { html: ``, css: ``, js: `function calcTrajectory(distance, velocity) {\n  // TODO: Return distance divided by velocity\n}` },
    answer: { js: `function calcTrajectory(distance, velocity) {\n  return distance / velocity;\n}` },
    targetImage: "/gameplay/space-8/targets/q2.png",
  },
  q3: {
    id: "sp8-q3",
    title: "Life Support Tracker",
    description: "Refactor code configurations to assemble an arrow syntax constant execution tracking pointer evaluating true if target oxygenPct falls below 19.",
    starterCode: { html: ``, css: ``, js: `// TODO: Create const arrow function isLow taking oxygenPct evaluating oxygenPct < 19` },
    answer: { js: `const isLow = (oxygenPct) => oxygenPct < 19;` },
    targetImage: "/gameplay/space-8/targets/q3.png",
  }
};