export default {
  q1: {
    id: "o2-q1",
    title: "Sunken Anchor",
    description: "Display an image of a sunken anchor. Use the source '/anchor.png' and give it an alt text of 'anchor'.",
    starterCode: { html: `<!-- TODO: Add an img tag with src '/anchor.png' and alt 'anchor' -->`, css: `img { height: 150px; opacity: 0.8; }` },
    hints: ["Ensure your <img> tag has both src and alt attributes."],
    answer: { html: `<img src="/anchor.png" alt="anchor" />` },
    targetImage: "/gameplay/ocean-2/targets/q1.png",
  },
  q2: {
    id: "o2-q2",
    title: "Open Chest Button",
    description: "Create a button element used to open a treasure chest. It must have the type 'button' and the text 'Open Chest'.",
    starterCode: { html: `<!-- TODO: Create a button with type="button" -->`, css: `button { background: #ffd700; border: none; padding: 10px; border-radius: 5px; }` },
    hints: ["Use a <button> tag with the type attribute explicitly defined."],
    answer: { html: `<button type="button">Open Chest</button>` },
    targetImage: "/gameplay/ocean-2/targets/q2.png",
  },
  q3: {
    id: "o2-q3",
    title: "Scuba Gear Checkbox",
    description: "Create a checkbox input element for checking your oxygen tank, checked by default.",
    starterCode: { html: `<!-- TODO: Create an input of type checkbox that is checked -->`, css: `input[type="checkbox"] { transform: scale(1.5); accent-color: #0077b6; }` },
    hints: ["Use an <input> tag with type=\"checkbox\" and the checked attribute."],
    answer: { html: `<input type="checkbox" checked />` },
    targetImage: "/gameplay/ocean-2/targets/q3.png",
  }
};