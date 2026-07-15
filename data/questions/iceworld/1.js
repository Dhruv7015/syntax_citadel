export default {
  q1: {
   id: "i1-q1",
    title: "Carving Ice Blocks",
    description: "Create an image element displaying an ice brick. Give it a source of '/ice-block.png' and uniquely identify it with the id 'glacier-brick'.",
    starterCode: {
      html: `<!-- TODO: Render the ice block image with its unique ID and source -->`,
      css: `#glacier-brick { width: 60px; height: 60px; opacity: 0.9; }`
    },
    hints: [
      "Use the <img> tag and include both the 'id' and 'src' attributes correctly."
    ],
    answer: {
      html: `<img id="glacier-brick" src="/ice-block.png" />`
    },
    targetImage: "/gameplay/iceworld-1/targets/q1.png",
  },
  q2: {
   id: "i1-q2",
    title: "Thermal Radiator Output",
    description: "Mark up text detailing your radiator's vital heat output. Emphasize the text 'CRITICAL LEVEL' so it stands out strongly as important text.",
    starterCode: {
      html: `<p>Warning: System heat is running at a <!-- TODO: Wrap the next words in a strong emphasis tag --> CRITICAL LEVEL.</p>`,
      css: `strong { color: #ff4d4d; }`
    },
    hints: [
      "Use the semantic `<strong>` tags around the target text block."
    ],
    answer: {
      html: `<p>Warning: System heat is running at a <strong>CRITICAL LEVEL</strong>.</p>`
    },
    targetImage: "/gameplay/iceworld-1/targets/q2.png",
  },
  q3: {
   id: "i1-q3",
    title: "Survival Manual Button",
    description: "Create a functional user interface button element. The button text must say 'Open Manual' and it must triggers a disabled state natively.",
    starterCode: {
      html: `<!-- TODO: Create a disabled button containing the text 'Open Manual' -->`,
      css: `button:disabled { opacity: 0.5; cursor: not-allowed; }`
    },
    hints: [
      "Use a `<button>` tag and append the Boolean keyword attribute `disabled` inside the tag wrapper."
    ],
    answer: {
      html: `<button disabled>Open Manual</button>`
    },
    targetImage: "/gameplay/iceworld-1/targets/q3.png",
  },
};
