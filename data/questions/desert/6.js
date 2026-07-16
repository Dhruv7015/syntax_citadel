export default {
  q1: {
    id: "d6-q1",
    title: "Mobile Dunes",
    description: "Write a media query for a maximum width of 600px. Inside, change the dune background to dark gray (#333) for a sandstorm effect.",
    starterCode: { html: `<div class="dune"></div>`, css: `/* TODO: Write a media query for max-width 600px altering .dune */\n` },
    hints: ["@media (max-width: 600px) { .dune { background: #333; } }"],
    answer: { css: `@media (max-width: 600px) {\n  .dune {\n    background: #333;\n  }\n}` },
    targetImage: "/gameplay/desert-6/targets/q1.png",
  },
  q2: {
    id: "d6-q2",
    title: "Stacking Columns",
    description: "Inside the provided media query for small screens, change the flex-direction of '.ruins' to column.",
    starterCode: { html: `<div class="ruins"><span>A</span><span>B</span></div>`, css: `@media (max-width: 500px) {\n  .ruins {\n    /* TODO: Set flex-direction to column */\n  }\n}` },
    hints: ["Add flex-direction: column;."],
    answer: { css: `@media (max-width: 500px) {\n  .ruins {\n    flex-direction: column;\n  }\n}` },
    targetImage: "/gameplay/desert-6/targets/q2.png",
  },
  q3: {
    id: "d6-q3",
    title: "Fluid Sand Width",
    description: "Set the width of '.sand-trap' to span exactly 100% of the viewport width using the 'vw' unit.",
    starterCode: { html: `<div class="sand-trap"></div>`, css: `.sand-trap {\n  /* TODO: Set width to 100vw */\n  height: 50px;\n}` },
    hints: ["Use width: 100vw;."],
    answer: { css: `.sand-trap {\n  width: 100vw;\n  height: 50px;\n}` },
    targetImage: "/gameplay/desert-6/targets/q3.png",
  },
};