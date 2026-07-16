export default {
  q1: {
    id: "sw3-q1",
    title: "Algae Bloom",
    description: "Set the text color of the '.algae' class to #2d6a4f.",
    starterCode: { html: `<h3 class="algae">Toxic Vegetation Surface</h3>`, css: `.algae {\n  /* TODO: Set color to #2d6a4f */\n}` },
    answer: { css: `.algae {\n  color: #2d6a4f;\n}` },
    targetImage: "/gameplay/swamp-3/targets/q1.png",
  },
  q2: {
    id: "sw3-q2",
    title: "Bog Core",
    description: "Give the '.bog' block a deep earthy solid background-color using the hex code #1b4332.",
    starterCode: { html: `<div class="bog">Silt Layer</div>`, css: `.bog {\n  width: 150px;\n  height: 90px;\n  /* TODO: Set background-color to #1b4332 */\n}` },
    answer: { css: `.bog {\n  width: 150px;\n  height: 90px;\n  background-color: #1b4332;\n}` },
    targetImage: "/gameplay/swamp-3/targets/q2.png",
  },
  q3: {
    id: "sw3-q3",
    title: "Quicksand Boundary",
    description: "Apply a solid gold (#ee9b00) border that is 5px thick to the '.quicksand' element.",
    starterCode: { html: `<div class="quicksand">Unstable Pit</div>`, css: `.quicksand {\n  padding: 15px;\n  /* TODO: Set a 5px solid #ee9b00 border */\n}` },
    answer: { css: `.quicksand {\n  padding: 15px;\n  border: 5px solid #ee9b00;\n}` },
    targetImage: "/gameplay/swamp-3/targets/q3.png",
  }
};