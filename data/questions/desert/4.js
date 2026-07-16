export default {
  q1: {
    id: "d4-q1",
    title: "Align the Camels",
    description: "Convert the '.caravan' container to use Flexbox layout to align the camels in a row.",
    starterCode: { html: `<div class="caravan">\n  <span>🐫</span><span>🐫</span>\n</div>`, css: `.caravan {\n  /* TODO: Set display to flex */\n}` },
    hints: ["Set display: flex;."],
    answer: { css: `.caravan {\n  display: flex;\n}` },
    targetImage: "/gameplay/desert-4/targets/q1.png",
  },
  q2: {
    id: "d4-q2",
    title: "Spacing the Tents",
    description: "Distribute the tents evenly, pushing the outermost tents to the edges using justify-content.",
    starterCode: { html: `<div class="campsite">\n  <span>⛺</span><span>⛺</span><span>⛺</span>\n</div>`, css: `.campsite {\n  display: flex;\n  /* TODO: Apply space-between justification */\n}` },
    hints: ["Use justify-content: space-between;."],
    answer: { css: `.campsite {\n  display: flex;\n  justify-content: space-between;\n}` },
    targetImage: "/gameplay/desert-4/targets/q2.png",
  },
  q3: {
    id: "d4-q3",
    title: "Center the Artifact",
    description: "Center the artifact vertically in the flex container using align-items.",
    starterCode: { html: `<div class="pedestal">\n  <span>🏺</span>\n</div>`, css: `.pedestal {\n  display: flex;\n  height: 200px;\n  /* TODO: Center items vertically */\n}` },
    hints: ["Use align-items: center;."],
    answer: { css: `.pedestal {\n  display: flex;\n  height: 200px;\n  align-items: center;\n}` },
    targetImage: "/gameplay/desert-4/targets/q3.png",
  },
};