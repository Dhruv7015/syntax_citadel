export default {
  q1: {
    id: "f5-q1",
    title: "Stacked Bark Blocks",
    description: "Two logs are trying to stand side-by-side on the path. Force them to stack on top of each other as full-width block elements instead.",
    starterCode: {
      html: `<span class="log">🪵 Left</span>\n<span class="log">🪵 Right</span>`,
      css: `.log {\n  background-color: #8b5a2b;\n  color: white;\n  padding: 10px;\n  /* TODO: Turn these default inline elements into block elements */\n}`
    },
    hints: [
      "To make inline elements take up full rows and behave like blocks, set `display: block;`."
    ],
    answer: {
      css: `.log {\n  background-color: #8b5a2b;\n  color: white;\n  padding: 10px;\n  display: block;\n}`
    },
    targetImage: "/gameplay/forest-5/targets/q1.png",
  },
  q2: {
    id: "f5-q2",
    title: "The Hidden Moss Chamber",
    description: "Place a hidden moss chamber exactly 30px down and 40px left inside the ruins using absolute offsets.",
    starterCode: {
      html: `<div class="ruin">\n  <div class="moss-chamber">🌿</div>\n</div>`,
      css: `.ruin {\n  position: relative;\n  width: 200px;\n  height: 150px;\n  background-color: #475569;\n}\n.moss-chamber {\n  /* TODO: Position this chamber absolutely at top: 30px and left: 40px */\n}`
    },
    hints: [
      "Set `position: absolute;` along with the offset keys: `top: 30px;` and `left: 40px;`."
    ],
    answer: {
      css: `.ruin {\n  position: relative;\n  width: 200px;\n  height: 150px;\n  background-color: #475569;\n}\n.moss-chamber {\n  position: absolute;\n  top: 30px;\n  left: 40px;\n}`
    },
    targetImage: "/gameplay/forest-5/targets/q2.png",
  },
  q3: {
    id: "f5-q3",
    title: "Overlapping Tree Branches",
    description: "Bring the covered golden apple to the front by increasing its stacking order above the thick tree leaves.",
    starterCode: {
      html: `<div class="treetop">\n  <div class="leaves">🌳</div>\n  <div class="golden-apple">🍎</div>\n</div>`,
      css: `.treetop { position: relative; }\n.leaves {\n  position: absolute;\n  z-index: 1;\n}\n.golden-apple {\n  position: absolute;\n  font-size: 30px;\n  /* TODO: Set the z-index to 2 to stack it on top of the leaves */\n}`
    },
    hints: [
      "Assign a higher stacking value than the sibling: `z-index: 2;`."
    ],
    answer: {
      css: `.treetop { position: relative; }\n.leaves {\n  position: absolute;\n  z-index: 1;\n}\n.golden-apple {\n  position: absolute;\n  font-size: 30px;\n  z-index: 2;\n}`
    },
    targetImage: "/gameplay/forest-5/targets/q3.png",
  },
};
