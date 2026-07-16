export default {
  q1: {
    id: "d3-q1",
    title: "Scorching Sun Color",
    description: "Change the text color of the '.sun-text' class to a bright orange (#f77f00).",
    starterCode: { html: `<h2 class="sun-text">Noon Heat</h2>`, css: `.sun-text {\n  /* TODO: Set color to #f77f00 */\n}` },
    hints: ["Use the CSS color property."],
    answer: { css: `.sun-text {\n  color: #f77f00;\n}` },
    targetImage: "/gameplay/desert-3/targets/q1.png",
  },
  q2: {
    id: "d3-q2",
    title: "Sandstone Background",
    description: "Apply a solid background color to the '.sandstone' block using the hex code #e9c46a.",
    starterCode: { html: `<div class="sandstone">Wall</div>`, css: `.sandstone {\n  width: 100px;\n  height: 100px;\n  /* TODO: Set background-color to #e9c46a */\n}` },
    hints: ["Use the background-color property inside the ruleset."],
    answer: { css: `.sandstone {\n  width: 100px;\n  height: 100px;\n  background-color: #e9c46a;\n}` },
    targetImage: "/gameplay/desert-3/targets/q2.png",
  },
  q3: {
    id: "d3-q3",
    title: "Cactus Borders",
    description: "Give the '.cactus' element a solid green (#2a9d8f) border that is 4px thick.",
    starterCode: { html: `<div class="cactus">Prickly</div>`, css: `.cactus {\n  padding: 10px;\n  /* TODO: Set a 4px solid #2a9d8f border */\n}` },
    hints: ["Use the shorthand border property: border: 4px solid #2a9d8f;."],
    answer: { css: `.cactus {\n  padding: 10px;\n  border: 4px solid #2a9d8f;\n}` },
    targetImage: "/gameplay/desert-3/targets/q3.png",
  },
};