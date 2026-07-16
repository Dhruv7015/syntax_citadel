export default {
  q1: {
    id: "c5-q1",
    title: "Fossil Matrix",
    description: "Turn the '.matrix' block into a standard CSS Grid container.",
    starterCode: { html: `<div class="matrix">\n  <div>Amber</div><div>Bone</div>\n</div>`, css: `.matrix {\n  /* TODO: Set display to grid */\n}` },
    answer: { css: `.matrix {\n  display: grid;\n}` },
    targetImage: "/gameplay/cave-5/targets/q1.png",
  },
  q2: {
    id: "c5-q2",
    title: "Vault Pockets",
    description: "Explicitly divide the grid into two equal width columns using fractions.",
    starterCode: { html: `<div class="vault">\n  <div>Left Pocket</div><div>Right Pocket</div>\n</div>`, css: `.vault {\n  display: grid;\n  /* TODO: Set grid template for 2 equal columns */\n}` },
    answer: { css: `.vault {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}` },
    targetImage: "/gameplay/cave-5/targets/q2.png",
  },
  q3: {
    id: "c5-q3",
    title: "Fissure Gaps",
    description: "Add a consistent grid spacing gap of exactly 25px between grid blocks.",
    starterCode: { html: `<div class="fissure">\n  <div>Wall A</div><div>Wall B</div>\n</div>`, css: `.fissure {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Set gap to 25px */\n}` },
    answer: { css: `.fissure {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 25px;\n}` },
    targetImage: "/gameplay/cave-5/targets/q3.png",
  }
};