export default {
  q1: {
    id: "sw2-q1",
    title: "Submerged Logs",
    description: "Add an image of a log with source '/log.png' and alt text 'log'.",
    starterCode: { html: ``, css: `img { width: 90px; filter: contrast(1.2); }` },
    answer: { html: `<img src="/log.png" alt="log" />` },
    targetImage: "/gameplay/swamp-2/targets/q1.png",
  },
  q2: {
    id: "sw2-q2",
    title: "Drain Sluice",
    description: "Create a button of type 'button' with the text 'Open Valve'.",
    starterCode: { html: ``, css: `button { background: #0b5257; border: 1px solid #000; padding: 8px; color: #fff; }` },
    answer: { html: `<button type="button">Open Valve</button>` },
    targetImage: "/gameplay/swamp-2/targets/q2.png",
  },
  q3: {
    id: "sw2-q3",
    title: "Wader Verification",
    description: "Create a checkbox input, checked by default, to confirm high-water wader boots are secured.",
    starterCode: { html: ``, css: `input[type="checkbox"] { accent-color: #52b788; transform: scale(1.2); }` },
    answer: { html: `<input type="checkbox" checked />` },
    targetImage: "/gameplay/swamp-2/targets/q3.png",
  }
};