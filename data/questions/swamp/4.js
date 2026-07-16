export default {
  q1: {
    id: "sw4-q1",
    title: "Root Alignment",
    description: "Convert the '.roots' container to a layout using Flexbox to run elements in a line.",
    starterCode: { html: `<div class="roots">\n  <span>🌾</span><span>🌾</span><span>🌾</span>\n</div>`, css: `.roots {\n  /* TODO: Set display to flex */\n}` },
    answer: { css: `.roots {\n  display: flex;\n}` },
    targetImage: "/gameplay/swamp-4/targets/q1.png",
  },
  q2: {
    id: "sw4-q2",
    title: "Center Current",
    description: "Vertically align items to the center inside the '.bayou' flex container.",
    starterCode: { html: `<div class="bayou">\n  <span>🛶</span>\n</div>`, css: `.bayou {\n  display: flex;\n  height: 110px;\n  /* TODO: Align items vertically to center */\n}` },
    answer: { css: `.bayou {\n  display: flex;\n  height: 110px;\n  align-items: center;\n}` },
    targetImage: "/gameplay/swamp-4/targets/q2.png",
  },
  q3: {
    id: "sw4-q3",
    title: "Lillypad Spacing",
    description: "Distribute elements inside '.pads' evenly with space between them along the line.",
    starterCode: { html: `<div class="pads">\n  <span>🪷</span><span>🪷</span>\n</div>`, css: `.pads {\n  display: flex;\n  /* TODO: Set justify-content to space-between */\n}` },
    answer: { css: `.pads {\n  display: flex;\n  justify-content: space-between;\n}` },
    targetImage: "/gameplay/swamp-4/targets/q3.png",
  }
};