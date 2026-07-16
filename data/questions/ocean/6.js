export default {
  q1: {
    id: "o6-q1",
    title: "Low Tide Views",
    description: "Write a media query for a maximum width of 600px. Inside, change the background to light blue (#90e0ef) for a shallow water effect.",
    starterCode: { html: `<div class="tide-pool"></div>`, css: `/* TODO: Write a media query for max-width 600px altering .tide-pool */\n` },
    hints: ["@media (max-width: 600px) { .tide-pool { background: #90e0ef; } }"],
    answer: { css: `@media (max-width: 600px) {\n  .tide-pool {\n    background: #90e0ef;\n  }\n}` },
    targetImage: "/gameplay/ocean-6/targets/q1.png",
  },
  q2: {
    id: "o6-q2",
    title: "Stacking the Dock",
    description: "Inside the provided media query for small screens, change the flex-direction of '.dock' to column.",
    starterCode: { html: `<div class="dock"><span>Boat 1</span><span>Boat 2</span></div>`, css: `@media (max-width: 500px) {\n  .dock {\n    /* TODO: Set flex-direction to column */\n  }\n}` },
    hints: ["Add flex-direction: column;."],
    answer: { css: `@media (max-width: 500px) {\n  .dock {\n    flex-direction: column;\n  }\n}` },
    targetImage: "/gameplay/ocean-6/targets/q2.png",
  },
  q3: {
    id: "o6-q3",
    title: "Infinite Horizon",
    description: "Set the width of '.ocean-surface' to span exactly 100% of the viewport width using the 'vw' unit.",
    starterCode: { html: `<div class="ocean-surface"></div>`, css: `.ocean-surface {\n  /* TODO: Set width to 100vw */\n  height: 50px;\n}` },
    hints: ["Use width: 100vw;."],
    answer: { css: `.ocean-surface {\n  width: 100vw;\n  height: 50px;\n}` },
    targetImage: "/gameplay/ocean-6/targets/q3.png",
  }
};