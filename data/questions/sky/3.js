export default {
  q1: {
    id: "s3-q1",
    title: "Sky Blue",
    description: "Set the text color of the '.sky-text' class to #00b4d8.",
    starterCode: { html: `<h2 class="sky-text">High Altitude</h2>`, css: `.sky-text {\n  /* TODO: Set color to #00b4d8 */\n}` },
    answer: { css: `.sky-text {\n  color: #00b4d8;\n}` },
    targetImage: "/gameplay/sky-3/targets/q1.png",
  },
  q2: {
    id: "s3-q2",
    title: "Horizon Line",
    description: "Give the '.horizon' block a bright background-color using the hex code #ff9e00.",
    starterCode: { html: `<div class="horizon">Stratosphere Edge</div>`, css: `.horizon {\n  width: 140px;\n  height: 50px;\n  /* TODO: Set background-color to #ff9e00 */\n}` },
    answer: { css: `.horizon {\n  width: 140px;\n  height: 50px;\n  background-color: #ff9e00;\n}` },
    targetImage: "/gameplay/sky-3/targets/q2.png",
  },
  q3: {
    id: "s3-q3",
    title: "Wing Tip",
    description: "Apply a solid white (#ffffff) border that is 3px thick to the '.wing' element.",
    starterCode: { html: `<div class="wing">Aileron Flap</div>`, css: `.wing {\n  padding: 10px;\n  /* TODO: Set a 3px solid #ffffff border */\n}` },
    answer: { css: `.wing {\n  padding: 10px;\n  border: 3px solid #ffffff;\n}` },
    targetImage: "/gameplay/sky-3/targets/q3.png",
  }
};