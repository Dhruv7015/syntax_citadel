export default {
  q1: {
    id: "i3-q1",
    title: "Ice Crystal Fonts",
    description: "Apply clear font attributes to your terminal screen text. Update the class to use a 'monospace' font family fallback and set the font-size to 18px.",
    starterCode: {
      html: `<div class="terminal">System Booting...</div>`,
      css: `.terminal {\n  /* TODO: Apply monospace font family and 18px size */\n}`
    },
    hints: [
      "Set `font-family: monospace;` and `font-size: 18px;` inside the block ruleset."
    ],
    answer: {
      css: `.terminal {\n  font-family: monospace;\n  font-size: 18px;\n}`
    }, 
    targetImage: "/gameplay/iceworld-3/targets/q1.png",
  },
  q2: {
    id: "i3-q2",
    title: "Glacial Blue Gradient",
    description: "Construct a smooth backdrop fill transition. Add a linear gradient background heading from top to bottom, blending color #00b4d8 into #0077b6.",
    starterCode: {
      html: `<div class="ice-wall"></div>`,
      css: `.ice-wall {\n  width: 100%;\n  height: 100px;\n  /* TODO: Set linear-gradient from #00b4d8 to #0077b6 */\n}`
    },
    hints: [
      "Assign `background: linear-gradient(#00b4d8, #0077b6);`."
    ],
    answer: {
      css: `.ice-wall {\n  width: 100%;\n  height: 100px;\n  background: linear-gradient(#00b4d8, #0077b6);\n}`
    },
    targetImage: "/gameplay/iceworld-3/targets/q2.png",
  },
  q3: {
   id: "i3-q3",
    title: "Frosty Padding",
    description: "Isolate inner content boxes from the structural frozen borders. Configure the uniform inside padding to exactly 20px on all 4 directions.",
    starterCode: {
      html: `<div class="supply-crate">Crate Contents</div>`,
      css: `.supply-crate {\n  border: 4px solid #caf0f8;\n  /* TODO: Set all-around padding to 20px */\n}`
    },
    hints: [
      "Use the shorthand `padding: 20px;` statement property ruleset."
    ],
    answer: {
      css: `.supply-crate {\n  border: 4px solid #caf0f8;\n  padding: 20px;\n}`
    },
    targetImage: "/gameplay/iceworld-3/targets/q3.png",
  },
};
