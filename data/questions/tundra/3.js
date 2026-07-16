export default {
  q1: {
    id: "t3-q1",
    title: "Glow Hue",
    description: "Set the text color of the '.aurora' class to #00f5d4.",
    starterCode: { html: `<h2 class="aurora">Sky Curtain</h2>`, css: `.aurora {\n  /* TODO: Set color to #00f5d4 */\n}` },
    answer: { css: `.aurora {\n  color: #00f5d4;\n}` },
    targetImage: "/gameplay/tundra-3/targets/q1.png",
  },
  q2: {
    id: "t3-q2",
    title: "Glacier Base",
    description: "Give the '.glacier' block a cold solid background-color using the hex code #d8f3dc.",
    starterCode: { html: `<div class="glacier">Pack Ice</div>`, css: `.glacier {\n  width: 180px;\n  height: 95px;\n  /* TODO: Set background-color to #d8f3dc */\n}` },
    answer: { css: `.glacier {\n  width: 180px;\n  height: 95px;\n  background-color: #d8f3dc;\n}` },
    targetImage: "/gameplay/tundra-3/targets/q2.png",
  },
  q3: {
    id: "t3-q3",
    title: "Crevasse Boundary",
    description: "Apply a solid navy (#1a3a4b) border that is 4px thick to the '.crevasse' element.",
    starterCode: { html: `<div class="crevasse">Abyss Edge</div>`, css: `.crevasse {\n  padding: 18px;\n  /* TODO: Set a 4px solid #1a3a4b border */\n}` },
    answer: { css: `.crevasse {\n  padding: 18px;\n  border: 4px solid #1a3a4b;\n}` },
    targetImage: "/gameplay/tundra-3/targets/q3.png",
  }
};