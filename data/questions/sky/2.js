export default {
  q1: {
    id: "s2-q1",
    title: "Bird Spot",
    description: "Add an image of a bird with source '/bird.png' and alt text 'bird'.",
    starterCode: { html: ``, css: `img { width: 50px; opacity: 0.95; }` },
    answer: { html: `<img src="/bird.png" alt="bird" />` },
    targetImage: "/gameplay/sky-2/targets/q1.png",
  },
  q2: {
    id: "s2-q2",
    title: "Propeller Start",
    description: "Create a button of type 'button' with the text 'Start Propeller'.",
    starterCode: { html: ``, css: `button { background: #90e0ef; border: none; padding: 12px; color: #03045e; }` },
    answer: { html: `<button type="button">Start Propeller</button>` },
    targetImage: "/gameplay/sky-2/targets/q2.png",
  },
  q3: {
    id: "s2-q3",
    title: "Oxygen Mask",
    description: "Create a checkbox input, checked by default, to verify life support systems.",
    starterCode: { html: ``, css: `input[type="checkbox"] { accent-color: #0077b6; transform: scale(1.3); }` },
    answer: { html: `<input type="checkbox" checked />` },
    targetImage: "/gameplay/sky-2/targets/q3.png",
  }
};