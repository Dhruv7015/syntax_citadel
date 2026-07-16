export default {
  q1: {
    id: "s5-q1",
    title: "Runway Grid",
    description: "Turn the '.runway' block into a standard CSS Grid container.",
    starterCode: { html: `<div class="runway">\n  <div>Terminal 1</div><div>Terminal 2</div>\n</div>`, css: `.runway {\n  /* TODO: Set display to grid */\n}` },
    answer: { css: `.runway {\n  display: grid;\n}` },
    targetImage: "/gameplay/sky-5/targets/q1.png",
  },
  q2: {
    id: "s5-q2",
    title: "Hangar Bays",
    description: "Explicitly divide the grid into three equal width columns using fractions.",
    starterCode: { html: `<div class="hangar">\n  <div>Bay A</div><div>Bay B</div><div>Bay C</div>\n</div>`, css: `.hangar {\n  display: grid;\n  /* TODO: Set grid template for 3 equal columns */\n}` },
    answer: { css: `.hangar {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}` },
    targetImage: "/gameplay/sky-5/targets/q2.png",
  },
  q3: {
    id: "s5-q3",
    title: "Safe Buffer",
    description: "Add a consistent grid spacing gap of exactly 30px between grid blocks.",
    starterCode: { html: `<div class="buffer">\n  <div>Zone 1</div><div>Zone 2</div>\n</div>`, css: `.buffer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Set gap to 30px */\n}` },
    answer: { css: `.buffer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n}` },
    targetImage: "/gameplay/sky-5/targets/q3.png",
  }
};