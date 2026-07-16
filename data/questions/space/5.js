export default {
  q1: {
    id: "sp5-q1",
    title: "Telemetry Grid",
    description: "Turn the '.telemetry' block into a standard CSS Grid container.",
    starterCode: { html: `<div class="telemetry">\n  <div>Radar</div><div>Comms</div>\n</div>`, css: `.telemetry {\n  /* TODO: Set display to grid */\n}` },
    answer: { css: `.telemetry {\n  display: grid;\n}` },
    targetImage: "/gameplay/space-5/targets/q1.png",
  },
  q2: {
    id: "sp5-q2",
    title: "Console Columns",
    description: "Explicitly divide the grid into three equal width columns using fractions.",
    starterCode: { html: `<div class="console">\n  <div>Screen 1</div><div>Screen 2</div><div>Screen 3</div>\n</div>`, css: `.console {\n  display: grid;\n  /* TODO: Set grid template for 3 equal columns */\n}` },
    answer: { css: `.console {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}` },
    targetImage: "/gameplay/space-5/targets/q2.png",
  },
  q3: {
    id: "sp5-q3",
    title: "Isolation Gaps",
    description: "Add a consistent grid spacing gap of exactly 20px between grid blocks.",
    starterCode: { html: `<div class="isolation">\n  <div>Rack A</div><div>Rack B</div>\n</div>`, css: `.isolation {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Set gap to 20px */\n}` },
    answer: { css: `.isolation {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}` },
    targetImage: "/gameplay/space-5/targets/q3.png",
  }
};