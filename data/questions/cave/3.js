export default {
  q1: {
    id: "c3-q1",
    title: "Moss Glow",
    description: "Set the text color of the '.moss-text' class to #38b000.",
    starterCode: { html: `<h2 class="moss-text">Bioluminescent Coating</h2>`, css: `.moss-text {\n  /* TODO: Set color to #38b000 */\n}` },
    answer: { css: `.moss-text {\n  color: #38b000;\n}` },
    targetImage: "/gameplay/cave-3/targets/q1.png",
  },
  q2: {
    id: "c3-q2",
    title: "Bedrock Core",
    description: "Give the '.bedrock' block a dark solid background-color using the hex code #242423.",
    starterCode: { html: `<div class="bedrock">Deep Crust</div>`, css: `.bedrock {\n  width: 200px;\n  height: 80px;\n  /* TODO: Set background-color to #242423 */\n}` },
    answer: { css: `.bedrock {\n  width: 200px;\n  height: 80px;\n  background-color: #242423;\n}` },
    targetImage: "/gameplay/cave-3/targets/q2.png",
  },
  q3: {
    id: "c3-q3",
    title: "Chasm Edge",
    description: "Apply a solid grey (#4a4e69) border that is 6px thick to the '.chasm' element.",
    starterCode: { html: `<div class="chasm">Drop-off Point</div>`, css: `.chasm {\n  padding: 20px;\n  /* TODO: Set a 6px solid #4a4e69 border */\n}` },
    answer: { css: `.chasm {\n  padding: 20px;\n  border: 6px solid #4a4e69;\n}` },
    targetImage: "/gameplay/cave-3/targets/q3.png",
  }
};