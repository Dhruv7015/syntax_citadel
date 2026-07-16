export default {
  q1: {
    id: "sp2-q1",
    title: "Solar Array",
    description: "Add an image of a panel with source '/solar-panel.png' and alt text 'panel'.",
    starterCode: { html: ``, css: `img { width: 100px; filter: saturate(1.5); }` },
    answer: { html: `<img src="/solar-panel.png" alt="panel" />` },
    targetImage: "/gameplay/space-2/targets/q1.png",
  },
  q2: {
    id: "sp2-q2",
    title: "Engage Thruster",
    description: "Create a button of type 'button' with the text 'Fire Thruster'.",
    starterCode: { html: ``, css: `button { background: #ffaa00; border: none; padding: 14px; color: #000; font-weight: bold; }` },
    answer: { html: `<button type="button">Fire Thruster</button>` },
    targetImage: "/gameplay/space-2/targets/q2.png",
  },
  q3: {
    id: "sp2-q3",
    title: "Airlock Seal",
    description: "Create a checkbox input, checked by default, to confirm the primary airlock is sealed.",
    starterCode: { html: ``, css: `input[type="checkbox"] { accent-color: #38b000; transform: scale(1.5); }` },
    answer: { html: `<input type="checkbox" checked />` },
    targetImage: "/gameplay/space-2/targets/q3.png",
  }
};