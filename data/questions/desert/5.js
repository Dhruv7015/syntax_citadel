export default {
  q1: {
    id: "d5-q1",
    title: "Foundations",
    description: "Turn the '.pyramid-base' into a CSS Grid container.",
    starterCode: { html: `<div class="pyramid-base">\n  <div>Block</div><div>Block</div>\n</div>`, css: `.pyramid-base {\n  /* TODO: Set display to grid */\n}` },
    hints: ["Set display: grid;."],
    answer: { css: `.pyramid-base {\n  display: grid;\n}` },
    targetImage: "/gameplay/desert-5/targets/q1.png",
  },
  q2: {
    id: "d5-q2",
    title: "Three Column Layout",
    description: "Define exactly three equal columns for the grid using fractions.",
    starterCode: { html: `<div class="grid-level">\n  <div>1</div><div>2</div><div>3</div>\n</div>`, css: `.grid-level {\n  display: grid;\n  /* TODO: Create 3 columns of 1fr each */\n}` },
    hints: ["Use grid-template-columns: 1fr 1fr 1fr;."],
    answer: { css: `.grid-level {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}` },
    targetImage: "/gameplay/desert-5/targets/q2.png",
  },
  q3: {
    id: "d5-q3",
    title: "Grid Gap Tunnels",
    description: "Create a 20px gap between all grid items in the tomb.",
    starterCode: { html: `<div class="tomb">\n  <div>Room</div><div>Room</div>\n</div>`, css: `.tomb {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Set gap to 20px */\n}` },
    hints: ["Use gap: 20px;."],
    answer: { css: `.tomb {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}` },
    targetImage: "/gameplay/desert-5/targets/q3.png",
  },
};