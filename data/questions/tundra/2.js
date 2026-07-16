export default {
  q1: {
    id: "t2-q1",
    title: "Ice Spike",
    description: "Add an image of an icicle with source '/icicle.png' and alt text 'icicle'.",
    starterCode: { html: `<!-- TODO: img tag with src '/icicle.png' and alt 'icicle' -->`, css: `img { width: 70px; filter: drop-shadow(0 0 6px #caf0f8); }` },
    answer: { html: `<img src="/icicle.png" alt="icicle" />` },
    targetImage: "/gameplay/tundra-2/targets/q1.png",
  },
  q2: {
    id: "t2-q2",
    title: "Ignite Heater",
    description: "Create a button of type 'button' with the text 'Start Heater'.",
    starterCode: { html: `<!-- TODO: Create a button with type="button" -->`, css: `button { background: #e63946; border: none; padding: 12px; color: #fff; border-radius: 6px; }` },
    answer: { html: `<button type="button">Start Heater</button>` },
    targetImage: "/gameplay/tundra-2/targets/q2.png",
  },
  q3: {
    id: "t2-q3",
    title: "Harness Double Check",
    description: "Create a checkbox input, checked by default, to confirm safety harness locks.",
    starterCode: { html: `<!-- TODO: input checkbox that is checked -->`, css: `input[type="checkbox"] { accent-color: #00b4d8; transform: scale(1.3); }` },
    answer: { html: `<input type="checkbox" checked />` },
    targetImage: "/gameplay/tundra-2/targets/q3.png",
  }
};