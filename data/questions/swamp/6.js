export default {
  q1: {
    id: "sw6-q1",
    title: "High Water View",
    description: "Create a media query ruleset for viewports up to a max-width of 768px. Change the background of '.mire' to #52b788 inside it.",
    starterCode: { html: `<div class="mire"></div>`, css: `/* TODO: Create media query for max-width 768px changing .mire */\n` },
    answer: { css: `@media (max-width: 768px) {\n  .mire {\n    background: #52b788;\n  }\n}` },
    targetImage: "/gameplay/swamp-6/targets/q1.png",
  },
  q2: {
    id: "sw6-q2",
    title: "Narrow Canopy",
    description: "Inside the provided mobile media query, stack the flex alignment direction rules into a column configuration.",
    starterCode: { html: `<div class="canopy"><span>Willow</span><span>Cypress</span></div>`, css: `@media (max-width: 500px) {\n  .canopy {\n    display: flex;\n    /* TODO: Set flex-direction to column */\n  }\n}` },
    answer: { css: `@media (max-width: 500px) {\n  .canopy {\n    display: flex;\n    flex-direction: column;\n  }\n}` },
    targetImage: "/gameplay/swamp-6/targets/q2.png",
  },
  q3: {
    id: "sw6-q3",
    title: "Swamp Span",
    description: "Force the '.wetlands' element width rule to match exactly 100% of the horizontal viewport screen scale using vw.",
    starterCode: { html: `<div class="wetlands"></div>`, css: `.wetlands {\n  /* TODO: Set width to 100vw */\n  height: 90px;\n}` },
    answer: { css: `.wetlands {\n  width: 100vw;\n  height: 90px;\n}` },
    targetImage: "/gameplay/swamp-6/targets/q3.png",
  }
};