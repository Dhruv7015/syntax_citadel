export default {
  q1: {
    id: "s4-q1",
    title: "Formation Flight",
    description: "Convert the '.formation' container to a layout using Flexbox to run elements in a line.",
    starterCode: { html: `<div class="formation">\n  <span>🦅</span><span>🦅</span>\n</div>`, css: `.formation {\n  /* TODO: Set display to flex */\n}` },
    answer: { css: `.formation {\n  display: flex;\n}` },
    targetImage: "/gameplay/sky-4/targets/q1.png",
  },
  q2: {
    id: "s4-q2",
    title: "Altitude Sync",
    description: "Vertically align items to the center inside the '.flight-path' flex container.",
    starterCode: { html: `<div class="flight-path">\n  <span>✈️</span>\n</div>`, css: `.flight-path {\n  display: flex;\n  height: 120px;\n  /* TODO: Align items vertically to center */\n}` },
    answer: { css: `.flight-path {\n  display: flex;\n  height: 120px;\n  align-items: center;\n}` },
    targetImage: "/gameplay/sky-4/targets/q2.png",
  },
  q3: {
    id: "s4-q3",
    title: "Drift Spacing",
    description: "Distribute elements inside '.drift' evenly with space between them along the line.",
    starterCode: { html: `<div class="drift">\n  <span>☁️</span><span>☁️</span>\n</div>`, css: `.drift {\n  display: flex;\n  /* TODO: Set justify-content to space-between */\n}` },
    answer: { css: `.drift {\n  display: flex;\n  justify-content: space-between;\n}` },
    targetImage: "/gameplay/sky-4/targets/q3.png",
  }
};