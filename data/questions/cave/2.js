export default {
  q1: {
    id: "c2-q1",
    title: "Glow Crystal",
    description: "Add an image of a crystal with source '/crystal.png' and alt text 'crystal'.",
    starterCode: { html: ``, css: `img { width: 80px; filter: drop-shadow(0 0 8px #00f5d4); }` },
    answer: { html: `<img src="/crystal.png" alt="crystal" />` },
    targetImage: "/gameplay/cave-2/targets/q1.png",
  },
  q2: {
    id: "c2-q2",
    title: "Ignite Torch",
    description: "Create a button of type 'button' with the text 'Ignite Torch'.",
    starterCode: { html: ``, css: `button { background: #ff5400; border: none; padding: 10px; color: #fff; border-radius: 4px; }` },
    answer: { html: `<button type="button">Ignite Torch</button>` },
    targetImage: "/gameplay/cave-2/targets/q2.png",
  },
  q3: {
    id: "c2-q3",
    title: "Rappel Lock",
    description: "Create a checkbox input, checked by default, to verify harness locks.",
    starterCode: { html: ``, css: `input[type="checkbox"] { accent-color: #ff007f; transform: scale(1.4); }` },
    answer: { html: `<input type="checkbox" checked />` },
    targetImage: "/gameplay/cave-2/targets/q3.png",
  }
};