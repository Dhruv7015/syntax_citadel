export default {
  q1: {
   id: "f4-q1",
    title: "Centering the Sprout",
    description: "Make sure the sprout is growing perfectly in the exact center of the soil bed using Flexbox.",
    starterCode: {
      html: `<div class="soil-bed">\n  <div class="sprout">🌱</div>\n</div>`,
      css: `.soil-bed {\n  width: 100%;\n  height: 120px;\n  background-color: #3e2723;\n  /* TODO: Turn this into a flexbox container and center its items horizontally and vertically */\n}\n.sprout { font-size: 30px; }`
    },
    hints: [
      "Turn the container into a flex container with `display: flex;`, then apply `justify-content: center;` and `align-items: center;`."
    ],
    answer: {
      css: `.soil-bed {\n  width: 100%;\n  height: 120px;\n  background-color: #3e2723;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sprout { font-size: 30px; }`
    },
    targetImage: "/gameplay/forest-4/targets/q1.png",
  },
  q2: {
    id: "f4-q2",
    title: "The Vine Climbers",
    description: "Align three climbing vines horizontally in a single file line, distributing them evenly so there's equal space around each of them.",
    starterCode: {
      html: `<div class="cliff">\n  <span>🌿</span>\n  <span>🌿</span>\n  <span>🌿</span>\n</div>`,
      css: `.cliff {\n  display: flex;\n  background-color: #1b4332;\n  /* TODO: Distribute items so there is equal space around them */\n}`
    },
    hints: [
      "Use `justify-content: space-around;` to space the elements out cleanly."
    ],
    answer: {
      css: `.cliff {\n  display: flex;\n  background-color: #1b4332;\n  justify-content: space-around;\n}`
    },
    targetImage: "/gameplay/forest-4/targets/q2.png",
  },
  q3: {
    id: "f4-q3",
    title: "The Canopy Sky Bridge",
    description: "The wind is blowing! Force the wooden bridge boards to align themselves along the very bottom of the high canopy cliffs.",
    starterCode: {
      html: `<div class="canopy">\n  <div class="plank">🪵</div>\n  <div class="plank">🪵</div>\n  <div class="plank">🪵</div>\n</div>`,
      css: `.canopy {\n  display: flex;\n  height: 150px;\n  background-color: #40916c;\n  /* TODO: Align the planks along the bottom vertical axis */\n}`
    },
    hints: [
      "To align elements along the cross axis (vertically, by default), use `align-items: flex-end;`."
    ],
    answer: {
      css: `.canopy {\n  display: flex;\n  height: 150px;\n  background-color: #40916c;\n  align-items: flex-end;\n}`
    },
    targetImage: "/gameplay/forest-4/targets/q3.png",
  },
};
