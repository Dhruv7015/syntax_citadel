export default {
  q1: {
    id: "t5-q1",
    title: "Shelter Matrix",
    description: "Turn the '.matrix' block into a standard CSS Grid container.",
    starterCode: { html: `<div class="matrix">\n  <div>Bunk</div><div>Storage</div>\n</div>`, css: `.matrix {\n  /* TODO: Set display to grid */\n}` },
    answer: { css: `.matrix {\n  display: grid;\n}` },
    targetImage: "/gameplay/tundra-5/targets/q1.png",
  },
  q2: {
    id: "t5-q2",
    title: "Ice Cell Divisions",
    description: "Explicitly divide the grid into two equal width columns using fractions.",
    starterCode: { html: `<div class="shelter-cells">\n  <div>Bay A</div><div>Bay B</div>\n</div>`, css: `.shelter-cells {\n  display: grid;\n  /* TODO: Set grid template for 2 equal columns */\n}` },
    answer: { css: `.shelter-cells {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}` },
    targetImage: "/gameplay/tundra-5/targets/q2.png",
  },
  q3: {
    id: "t5-q3",
    title: "Ventilation Gaps",
    description: "Add a consistent grid spacing gap of exactly 20px between grid blocks.",
    starterCode: { html: `<div class="vents">\n  <div>Intake</div><div>Exhaust</div>\n</div>`, css: `.vents {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Set gap to 20px */\n}` },
    answer: { css: `.vents {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}` },
    targetImage: "/gameplay/tundra-5/targets/q3.png",
  }
};