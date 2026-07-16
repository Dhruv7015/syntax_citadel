export default {
  q1: {
    id: "o4-q1",
    title: "School of Fish",
    description: "Convert the '.school' container to use Flexbox layout to align the fish in a row.",
    starterCode: { html: `<div class="school">\n  <span>🐟</span><span>🐟</span>\n</div>`, css: `.school {\n  /* TODO: Set display to flex */\n}` },
    hints: ["Set display: flex;."],
    answer: { css: `.school {\n  display: flex;\n}` },
    targetImage: "/gameplay/ocean-4/targets/q1.png",
  },
  q2: {
    id: "o4-q2",
    title: "Spacing the Kelp",
    description: "Distribute the kelp stalks evenly, spacing them out across the available width using justify-content.",
    starterCode: { html: `<div class="kelp-forest">\n  <span>🌿</span><span>🌿</span><span>🌿</span>\n</div>`, css: `.kelp-forest {\n  display: flex;\n  /* TODO: Apply space-between justification */\n}` },
    hints: ["Use justify-content: space-between;."],
    answer: { css: `.kelp-forest {\n  display: flex;\n  justify-content: space-between;\n}` },
    targetImage: "/gameplay/ocean-4/targets/q2.png",
  },
  q3: {
    id: "o4-q3",
    title: "Center the Treasure",
    description: "Center the sunken treasure vertically in the flex container using align-items.",
    starterCode: { html: `<div class="seabed">\n  <span>💎</span>\n</div>`, css: `.seabed {\n  display: flex;\n  height: 200px;\n  /* TODO: Center items vertically */\n}` },
    hints: ["Use align-items: center;."],
    answer: { css: `.seabed {\n  display: flex;\n  height: 200px;\n  align-items: center;\n}` },
    targetImage: "/gameplay/ocean-4/targets/q3.png",
  }
};