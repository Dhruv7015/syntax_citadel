export default {
  q1: {
    id: "t4-q1",
    title: "Floe Alignment",
    description: "Convert the '.ice-floes' container to a layout using Flexbox to run elements in a line.",
    starterCode: { html: `<div class="ice-floes">\n  <span>🧊</span><span>🧊</span><span>🧊</span>\n</div>`, css: `.ice-floes {\n  /* TODO: Set display to flex */\n}` },
    answer: { css: `.ice-floes {\n  display: flex;\n}` },
    targetImage: "/gameplay/tundra-4/targets/q1.png",
  },
  q2: {
    id: "t4-q2",
    title: "Center Cairn",
    description: "Vertically align items to the center inside the '.cairn' flex container.",
    starterCode: { html: `<div class="cairn">\n  <span>🪨</span>\n</div>`, css: `.cairn {\n  display: flex;\n  height: 120px;\n  /* TODO: Align items vertically to center */\n}` },
    answer: { css: `.cairn {\n  display: flex;\n  height: 120px;\n  align-items: center;\n}` },
    targetImage: "/gameplay/tundra-4/targets/q2.png",
  },
  q3: {
    id: "t4-q3",
    title: "Sled Gear Space",
    description: "Distribute elements inside '.sled-gear' evenly with space between them along the line.",
    starterCode: { html: `<div class="sled-gear">\n  <span>📦</span><span>📦</span>\n</div>`, css: `.sled-gear {\n  display: flex;\n  /* TODO: Set justify-content to space-between */\n}` },
    answer: { css: `.sled-gear {\n  display: flex;\n  justify-content: space-between;\n}` },
    targetImage: "/gameplay/tundra-4/targets/q3.png",
  }
};