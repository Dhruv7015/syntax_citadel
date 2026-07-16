export default {
  q1: {
    id: "o3-q1",
    title: "Deep Blue Colors",
    description: "Change the text color of the '.water-text' class to a deep ocean blue (#03045e).",
    starterCode: { html: `<h2 class="water-text">Mariana Trench</h2>`, css: `.water-text {\n  /* TODO: Set color to #03045e */\n}` },
    hints: ["Use the CSS color property."],
    answer: { css: `.water-text {\n  color: #03045e;\n}` },
    targetImage: "/gameplay/ocean-3/targets/q1.png",
  },
  q2: {
    id: "o3-q2",
    title: "Submarine Hull",
    description: "Apply a solid background color to the '.submarine' block using the hex code #ffb703.",
    starterCode: { html: `<div class="submarine">Hull</div>`, css: `.submarine {\n  width: 150px;\n  height: 80px;\n  /* TODO: Set background-color to #ffb703 */\n}` },
    hints: ["Use the background-color property inside the ruleset."],
    answer: { css: `.submarine {\n  width: 150px;\n  height: 80px;\n  background-color: #ffb703;\n}` },
    targetImage: "/gameplay/ocean-3/targets/q2.png",
  },
  q3: {
    id: "o3-q3",
    title: "Clam Shell Borders",
    description: "Give the '.clam' element a solid purple (#7209b7) border that is 5px thick.",
    starterCode: { html: `<div class="clam">Pearl Inside</div>`, css: `.clam {\n  padding: 15px;\n  /* TODO: Set a 5px solid #7209b7 border */\n}` },
    hints: ["Use the shorthand border property: border: 5px solid #7209b7;."],
    answer: { css: `.clam {\n  padding: 15px;\n  border: 5px solid #7209b7;\n}` },
    targetImage: "/gameplay/ocean-3/targets/q3.png",
  }
};