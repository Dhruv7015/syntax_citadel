export default {
  q1: {
    id: "sp4-q1",
    title: "Constellation Alignment",
    description: "Convert the '.stars' container to a layout using Flexbox to run elements in a line.",
    starterCode: { html: `<div class="stars">\n  <span>✨</span><span>✨</span><span>✨</span>\n</div>`, css: `.stars {\n  /* TODO: Set display to flex */\n}` },
    answer: { css: `.stars {\n  display: flex;\n}` },
    targetImage: "/gameplay/space-4/targets/q1.png",
  },
  q2: {
    id: "sp4-q2",
    title: "Center Satellite",
    description: "Vertically align items to the center inside the '.orbit' flex container.",
    starterCode: { html: `<div class="orbit">\n  <span>🛰️</span>\n</div>`, css: `.orbit {\n  display: flex;\n  height: 140px;\n  /* TODO: Align items vertically to center */\n}` },
    answer: { css: `.orbit {\n  display: flex;\n  height: 140px;\n  align-items: center;\n}` },
    targetImage: "/gameplay/space-4/targets/q2.png",
  },
  q3: {
    id: "sp4-q3",
    title: "Cargo Pod Space",
    description: "Distribute elements inside '.cargo' evenly with space between them along the line.",
    starterCode: { html: `<div class="cargo">\n  <span>📦</span><span>📦</span>\n</div>`, css: `.cargo {\n  display: flex;\n  /* TODO: Set justify-content to space-between */\n}` },
    answer: { css: `.cargo {\n  display: flex;\n  justify-content: space-between;\n}` },
    targetImage: "/gameplay/space-4/targets/q3.png",
  }
};