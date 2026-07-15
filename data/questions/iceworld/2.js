export default {
  q1: {
    id: "i2-q1",
    title: "Frostbite Alert Audio",
    description: "Add an audio alert element that resource streams '/blizzard.mp3'. Ensure the browser native player controls interface is rendered.",
    starterCode: {
      html: `<!-- TODO: Add an audio element with native browser playback controls -->`,
      css: `audio { width: 100%; }`
    },
    hints: [
      "Use the `<audio>` tag accompanied by the `src` and `controls` attributes."
    ],
    answer: {
      html: `<audio src="/blizzard.mp3" controls></audio>`
    },
    targetImage: "/gameplay/iceworld-2/targets/q1.png",
  },
  q2: {
   id: "i2-q2",
    title: "The Expedition Data Table",
    description: "Set up the basic foundation structure for a table. Build a single table row (`tr`) that contains two header cells (`th`): 'Item' and 'Weight'.",
    starterCode: {
      html: `<table>\n  <!-- TODO: Insert a single table row with two header cells -->\n</table>`,
      css: `table { width: 100%; border-collapse: collapse; }\nth { background: #0077b6; color: white; }`
    },
    hints: [
      "Wrap a `<tr>` element around two separate `<th>` columns."
    ],
    answer: {
      html: `<table>\n  <tr>\n    <th>Item</th>\n    <th>Weight</th>\n  </tr>\n</table>`
    },
    targetImage: "/gameplay/iceworld-2/targets/q2.png",
  },
  q3: {
    id: "i2-q3",
    title: "Shelter Sign-Up Form",
    description: "Construct a numeric configuration input element. Set its type to accept numbers, configure a minimum input boundary value of 1, and set a current fallback value of 1.",
    starterCode: {
      html: `<!-- TODO: Create a numeric input for shelter occupants -->`,
      css: `input[type="number"] { width: 60px; text-align: center; }`
    },
    hints: [
      "Assign `type=\"number\"`, `min=\"1\"`, and `value=\"1\"` onto the target input marker."
    ],
    answer: {
      html: `<input type="number" min="1" value="1" />`
    },
    targetImage: "/gameplay/iceworld-2/targets/q3.png",
  },
};
