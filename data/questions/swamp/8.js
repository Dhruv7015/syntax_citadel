export default {
  q1: {
    id: "sw8-q1",
    title: "Toxicity Check",
    description: "Write an evaluation condition block that reassigns unsafe to true only if the variable sporeCount breaks past 400.",
    starterCode: { html: ``, css: ``, js: `let sporeCount = 450;\nlet unsafe = false;\n// TODO: Set unsafe to true if sporeCount > 400` },
    answer: { js: `if (sporeCount > 400) {\n  unsafe = true;\n}` },
    targetImage: "/gameplay/swamp-8/targets/q1.png",
  },
  q2: {
    id: "sw8-q2",
    title: "Flow Velocity",
    description: "Implement return execution details inside 'calcVelocity' dividing parameter instance volume by time.",
    starterCode: { html: ``, css: ``, js: `function calcVelocity(volume, time) {\n  // TODO: Return volume divided by time\n}` },
    answer: { js: `function calcVelocity(volume, time) {\n  return volume / time;\n}` },
    targetImage: "/gameplay/swamp-8/targets/q2.png",
  },
  q3: {
    id: "sw8-q3",
    title: "Submersion Alert",
    description: "Refactor code configurations to assemble an arrow syntax constant execution tracking pointer evaluating true if target depth exceeds 8.",
    starterCode: { html: ``, css: ``, js: `// TODO: Create const arrow function isSubmerged taking depth evaluating depth > 8` },
    answer: { js: `const isSubmerged = (depth) => depth > 8;` },
    targetImage: "/gameplay/swamp-8/targets/q3.png",
  }
};