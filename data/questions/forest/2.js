export default {
  q1: {
    id: "f2-q1",
    title: "The Ancient Scroll List",
    description: "Help the elder organize three ingredients: 'Vine', 'Lichen', and 'Dew'. Use an unordered list container.",
    starterCode: {
      html: `<!-- TODO: Create an unordered list with three items -->`,
      css: `ul { color: #74c69d; }`
    },
    hints: [
      "Use the <ul> container wrapper, and put each ingredient inside <li> tags."
    ],
    answer: {
      html: `<ul>\n  <li>Vine</li>\n  <li>Lichen</li>\n  <li>Dew</li>\n</ul>`
    },
    targetImage: "/gameplay/forest-2/targets/q1.png",
  },
  q2: {
    id: "f2-q2",
    title: "The Secret Map Image",
    description: "Render an image showing the paths of the forest. The source image is located at '/map.png' and it should have an alternative text of 'Secret Map'.",
    starterCode: {
      html: `<!-- TODO: Display the map image with its source and alternate description -->`,
      css: `img { width: 100%; border: 3px solid #8b5a2b; }`
    },
    hints: [
      "The <img> tag is self-closing and uses 'src' and 'alt' attributes."
    ],
    answer: {
      html: `<img src="/map.png" alt="Secret Map" />`
    },
    targetImage: "/gameplay/forest-2/targets/q2.png",
  },
  q3: {
    id: "f2-q3",
    title: "Gatherer's Input Form",
    description: "Create a simple text input field where a gatherer can type their username. Give it a placeholder attribute value of 'Enter explorer name'.",
    starterCode: {
      html: `<!-- TODO: Create a text input element with a placeholder -->`,
      css: `input { padding: 8px; border-radius: 4px; border: 1px solid #ccc; }`
    },
    hints: [
      "Use `<input type=\"text\">` and add the `placeholder` property."
    ],
    answer: {
      html: `<input type="text" placeholder="Enter explorer name" />`
    },
    targetImage: "/gameplay/forest-2/targets/q3.png",
  },
};
