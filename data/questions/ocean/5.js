export default {
  q1: {
    id: "o5-q1",
    title: "Atlantis Grid",
    description: "Turn the '.atlantis-plaza' into a CSS Grid container.",
    starterCode: { html: `<div class="atlantis-plaza">\n  <div>Statue</div><div>Fountain</div>\n</div>`, css: `.atlantis-plaza {\n  /* TODO: Set display to grid */\n}` },
    hints: ["Set display: grid;."],
    answer: { css: `.atlantis-plaza {\n  display: grid;\n}` },
    targetImage: "/gameplay/ocean-5/targets/q1.png",
  },
  q2: {
    id: "o5-q2",
    title: "Three Pillars",
    description: "Define exactly three equal columns for the underwater temple using fractions.",
    starterCode: { html: `<div class="temple">\n  <div>Pillar</div><div>Pillar</div><div>Pillar</div>\n</div>`, css: `.temple {\n  display: grid;\n  /* TODO: Create 3 columns of 1fr each */\n}` },
    hints: ["Use grid-template-columns: 1fr 1fr 1fr;."],
    answer: { css: `.temple {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}` },
    targetImage: "/gameplay/ocean-5/targets/q2.png",
  },
  q3: {
    id: "o5-q3",
    title: "Trench Gaps",
    description: "Create a 15px gap between all grid items in the trench.",
    starterCode: { html: `<div class="trench">\n  <div>Rock</div><div>Rock</div>\n</div>`, css: `.trench {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Set gap to 15px */\n}` },
    hints: ["Use gap: 15px;."],
    answer: { css: `.trench {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}` },
    targetImage: "/gameplay/ocean-5/targets/q3.png",
  }
};