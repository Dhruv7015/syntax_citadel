export default {
  q1: {
    id: "d2-q1",
    title: "Ancient Pillar Image",
    description: "Display an image of a ruined pillar. Use the source '/pillar.png' and give it an alt text of 'pillar'.",
    starterCode: { html: `<!-- TODO: Add an img tag with src '/pillar.png' and alt 'pillar' -->`, css: `img { height: 150px; }` },
    hints: ["Ensure your <img> tag has both src and alt attributes."],
    answer: { html: `<img src="/pillar.png" alt="pillar" />` },
    targetImage: "/gameplay/desert-2/targets/q1.png",
  },
  q2: {
    id: "d2-q2",
    title: "Scorpion Trap Button",
    description: "Create a button element used to spring a trap. It must have the type 'button' and the text 'Spring Trap'.",
    starterCode: { html: `<!-- TODO: Create a button with type="button" -->`, css: `button { background: #ffb703; border: none; padding: 10px; }` },
    hints: ["Use a <button> tag with the type attribute explicitly defined."],
    answer: { html: `<button type="button">Spring Trap</button>` },
    targetImage: "/gameplay/desert-2/targets/q2.png",
  },
  q3: {
    id: "d2-q3",
    title: "Inventory Checkbox",
    description: "Create a checkbox input element for the traveler's inventory, checked by default.",
    starterCode: { html: `<!-- TODO: Create an input of type checkbox that is checked -->`, css: `input[type="checkbox"] { transform: scale(1.5); }` },
    hints: ["Use an <input> tag with type=\"checkbox\" and the checked attribute."],
    answer: { html: `<input type="checkbox" checked />` },
    targetImage: "/gameplay/desert-2/targets/q3.png",
  },
};