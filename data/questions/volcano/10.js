export default {
  q1: {
    id: "v10-q1",
    title: "Rock Storage",
    description: "Push 'Basalt' to 'rocks' array.",
    starterCode: { js: `let rocks = ['Obsidian']; // TODO: push` },
    answer: { js: `rocks.push('Basalt');` },
  },
  q2: {
    id: "v10-q2",
    title: "Filter Magma",
    description: "Filter 'temps' for > 900.",
    starterCode: { js: `let temps = [500, 1000]; // TODO: filter` },
    answer: { js: `const hot = temps.filter(t => t > 900);` },
  },
  q3: {
    id: "v10-q3",
    title: "Log Seismic Data",
    description: "Use forEach to call 'logData'.",
    starterCode: { js: `let data = [1, 2]; // TODO: forEach` },
    answer: { js: `data.forEach(logData);` },
  }
};