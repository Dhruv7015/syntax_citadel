export default {
  q1: {
   id: "f6-q1",
    title: "The Spooky Mushroom Shadow",
    description: "Add an extra dimension of danger to the toxic mushroom. Apply a solid dark drop-shadow directly below it.",
    starterCode: {
      html: `<div class="toxic">🍄</div>`,
      css: `.toxic {\n  font-size: 50px;\n  /* TODO: Add a box-shadow offset 0 horizontally, 10px vertically, with a 5px blur, and black (#000000) color */\n}`
    },
    hints: [
      "Use `box-shadow: 0 10px 5px #000000;`."
    ],
    answer: {
      css: `.toxic {\n  font-size: 50px;\n  box-shadow: 0 10px 5px #000000;\n}`
    },
    targetImage: "/gameplay/forest-6/targets/q1.png",
  },
  q2: {
   id: "f6-q2",
    title: "Bouncing Mushrooms",
    description: "Set up the mushroom's physical response. Declare a 0.3-second transition effect that scales up smoothly when the cursor touches it.",
    starterCode: {
      html: `<div class="shroom">🍄</div>`,
      css: `.shroom {\n  font-size: 40px;\n  /* TODO: Configure a transition on 'transform' over 0.3 seconds */\n}\n.shroom:hover {\n  transform: scale(1.3);\n}`
    },
    hints: [
      "Use `transition: transform 0.3s;` (or with an ease function like `ease-in-out`)."
    ],
    answer: {
      css: `.shroom {\n  font-size: 40px;\n  transition: transform 0.3s;\n}\n.shroom:hover {\n  transform: scale(1.3);\n}`
    },
    targetImage: "/gameplay/forest-6/targets/q2.png",
  },
  q3: {
    id: "f6-q3",
    title: "The Golden Leaf Glow",
    description: "Make the hidden golden leaf flash with a vibrant drop-shadow filter glow whenever hovered over.",
    starterCode: {
      html: `<div class="leaf">🍂</div>`,
      css: `.leaf {\n  font-size: 50px;\n  transition: filter 0.3s;\n}\n/* TODO: Add a hover selector that gives the leaf a bright yellow drop shadow: filter: drop-shadow(0 0 15px #ffd700); */`
    },
    hints: [
      "Define `.leaf:hover { filter: drop-shadow(0 0 15px #ffd700); }`."
    ],
    answer: {
      css: `.leaf {\n  font-size: 50px;\n  transition: filter 0.3s;\n}\n.leaf:hover {\n  filter: drop-shadow(0 0 15px #ffd700);\n}`
    },
    targetImage: "/gameplay/forest-6/targets/q3.png",
  },
};
