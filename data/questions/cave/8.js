export default {
  q1: {
    id: "c8-q1",
    title: "Gas Detection",
    description: "Write an evaluation condition block that reassigns hazard to true only if the variable gasLevel breaks past 50.",
    starterCode: { html: ``, css: ``, js: `let gasLevel = 65;\nlet hazard = false;\n// TODO: Set hazard to true if gasLevel > 50` },
    answer: { js: `if (gasLevel > 50) {\n  hazard = true;\n}` },
    targetImage: "/gameplay/cave-8/targets/q1.png",
  },
  q2: {
    id: "c8-q2",
    title: "Echo Distance",
    description: "Implement return execution details inside 'calcDistance' multiplying parameter instance speed by time.",
    starterCode: { html: ``, css: ``, js: `function calcDistance(speed, time) {\n  // TODO: Return speed multiplied by time\n}` },
    answer: { js: `function calcDistance(speed, time) {\n  return speed * time;\n}` },
    targetImage: "/gameplay/cave-8/targets/q2.png",
  },
  q3: {
    id: "c8-q3",
    title: "Unstable Crust",
    description: "Refactor code configurations to assemble an arrow syntax constant execution tracking pointer evaluating true if target frequency exceeds 12.",
    starterCode: { html: ``, css: ``, js: `// TODO: Create const arrow function isUnstable taking frequency evaluating frequency > 12` },
    answer: { js: `const isUnstable = (frequency) => frequency > 12;` },
    targetImage: "/gameplay/cave-8/targets/q3.png",
  }
};