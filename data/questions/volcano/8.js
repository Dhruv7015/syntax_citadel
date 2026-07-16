export default {
  q1: {
    id: "v8-q1",
    title: "Temperature Check",
    description: "If temp > 1000, set 'danger' to true.",
    starterCode: { js: `let temp = 1200; let danger = false; // TODO: if` },
    answer: { js: `if (temp > 1000) { danger = true; }` },
  },
  q2: {
    id: "v8-q2",
    title: "Magma Volume",
    description: "Function 'calcVolume' returning width * height.",
    starterCode: { js: `function calcVolume(w, h) { /* TODO: return */ }` },
    answer: { js: `function calcVolume(w, h) { return w * h; }` },
  },
  q3: {
    id: "v8-q3",
    title: "Danger Level",
    description: "Arrow function 'isHot' returning true if t > 800.",
    starterCode: { js: `const isHot = (t) => /* TODO */` },
    answer: { js: `const isHot = (t) => t > 800;` },
  }
};