export default {
  q1: {
    id: "c4-q1",
    title: "Spike Alignment",
    description: "Convert the '.stalactites' container to a layout using Flexbox to run elements in a line.",
    starterCode: { html: `<div class="stalactites">\n  <span>▼</span><span>▼</span><span>▼</span>\n</div>`, css: `.stalactites {\n  /* TODO: Set display to flex */\n}` },
    answer: { css: `.stalactites {\n  display: flex;\n}` },
    targetImage: "/gameplay/cave-4/targets/q1.png",
  },
  q2: {
    id: "c4-q2",
    title: "Center Stream",
    description: "Vertically align items to the center inside the '.river' flex container.",
    starterCode: { html: `<div class="river">\n  <span>🌊</span>\n</div>`, css: `.river {\n  display: flex;\n  height: 100px;\n  /* TODO: Align items vertically to center */\n}` },
    answer: { css: `.river {\n  display: flex;\n  height: 100px;\n  align-items: center;\n}` },
    targetImage: "/gameplay/cave-4/targets/q2.png",
  },
  q3: {
    id: "c4-q3",
    title: "Ore Distribution",
    description: "Distribute elements inside '.ores' evenly with space around them along the line.",
    starterCode: { html: `<div class="ores">\n  <span>💎</span><span>💎</span>\n</div>`, css: `.ores {\n  display: flex;\n  /* TODO: Set justify-content to space-around */\n}` },
    answer: { css: `.ores {\n  display: flex;\n  justify-content: space-around;\n}` },
    targetImage: "/gameplay/cave-4/targets/q3.png",
  }
};