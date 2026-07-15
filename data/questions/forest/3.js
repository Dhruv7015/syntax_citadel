export default {
  q1: {
    id: "f3-q1",
    title: "Leafy Text Style",
    description: "Style the text class to make it feel organic. Change the color to dark forest green and set the font-weight to bold.",
    starterCode: {
      html: `<p class="leafy-text">The forest is alive with code.</p>`,
      css: `.leafy-text {\n  /* TODO: Set the color to #1b4332 and bold the text */\n}`
    },
    hints: [
      "Use `color: #1b4332;` and `font-weight: bold;`."
    ],
    answer: {
      css: `.leafy-text {\n  color: #1b4332;\n  font-weight: bold;\n}`
    },
    targetImage: "/gameplay/forest-3/targets/q1.png",
  },
  q2: {
    id: "f3-q2",
    title: "The Shady Mud Ground",
    description: "The background of the mud ground is transparent. Apply a deep brown background color (#4a3728) and set its height to exactly 150px.",
    starterCode: {
      html: `<div class="mud-ground"></div>`,
      css: `.mud-ground {\n  width: 100%;\n  /* TODO: Add a dark brown background (#4a3728) and 150px height */\n}`
    },
    hints: [
      "Use `background-color: #4a3728;` and `height: 150px;` to solve this puzzle."
    ],
    answer: {
      css: `.mud-ground {\n  width: 100%;\n  background-color: #4a3728;\n  height: 150px;\n}`
    },
    targetImage: "/gameplay/forest-3/targets/q2.png",
  },
  q3: {
    id: "f3-q3",
    title: "Woodland Borders",
    description: "Apply a sturdy wooden frame around the chest box. Set a solid, 5px-thick border with a rich brown color (#5c3a21).",
    starterCode: {
      html: `<div class="chest">🔑</div>`,
      css: `.chest {\n  width: 80px;\n  height: 80px;\n  font-size: 32px;\n  text-align: center;\n  /* TODO: Apply a solid 5px border with color #5c3a21 */\n}`
    },
    hints: [
      "The border shorthand property works like: `border: [width] [style] [color];`."
    ],
    answer: {
      css: `.chest {\n  width: 80px;\n  height: 80px;\n  font-size: 32px;\n  text-align: center;\n  border: 5px solid #5c3a21;\n}`
    },
    targetImage: "/gameplay/forest-3/targets/q3.png",
  },
};
