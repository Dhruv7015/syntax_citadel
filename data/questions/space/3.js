export default {
  q1: {
    id: "sp3-q1",
    title: "Plasma Trail",
    description: "Set the text color of the '.nebula' class to #e0aaff.",
    starterCode: { html: `<h2 class="nebula">Ionized Fuel Burst</h2>`, css: `.nebula {\n  /* TODO: Set color to #e0aaff */\n}` },
    answer: { css: `.nebula {\n  color: #e0aaff;\n}` },
    targetImage: "/gameplay/space-3/targets/q1.png",
  },
  q2: {
    id: "sp3-q2",
    title: "Reactor Core",
    description: "Give the '.core' block a luminous solid background-color using the hex code #240046.",
    starterCode: { html: `<div class="core">Antimatter Drive</div>`, css: `.core {\n  width: 160px;\n  height: 100px;\n  /* TODO: Set background-color to #240046 */\n}` },
    answer: { css: `.core {\n  width: 160px;\n  height: 100px;\n  background-color: #240046;\n}` },
    targetImage: "/gameplay/space-3/targets/q2.png",
  },
  q3: {
    id: "sp3-q3",
    title: "Deflector Shield",
    description: "Apply a solid cyan (#00f5d4) border that is 5px thick to the '.shield' element.",
    starterCode: { html: `<div class="shield">Hull Buffer Matrix</div>`, css: `.shield {\n  padding: 12px;\n  /* TODO: Set a 5px solid #00f5d4 border */\n}` },
    answer: { css: `.shield {\n  padding: 12px;\n  border: 5px solid #00f5d4;\n}` },
    targetImage: "/gameplay/space-3/targets/q3.png",
  }
};