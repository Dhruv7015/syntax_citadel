export default {
  q1: {
    id: "c6-q1",
    title: "Narrow Passage",
    description: "Create a media query ruleset for viewports up to a max-width of 768px. Change the background of '.passage' to #6b705c inside it.",
    starterCode: { html: `<div class="passage"></div>`, css: `/* TODO: Create media query for max-width 768px changing .passage */\n` },
    answer: { css: `@media (max-width: 768px) {\n  .passage {\n    background: #6b705c;\n  }\n}` },
    targetImage: "/gameplay/cave-6/targets/q1.png",
  },
  q2: {
    id: "c6-q2",
    title: "Stacked Shaft",
    description: "Inside the provided mobile media query, stack the flex alignment direction rules into a column configuration.",
    starterCode: { html: `<div class="shaft"><span>Top Rope</span><span>Anchor</span></div>`, css: `@media (max-width: 500px) {\n  .shaft {\n    display: flex;\n    /* TODO: Set flex-direction to column */\n  }\n}` },
    answer: { css: `@media (max-width: 500px) {\n  .shaft {\n    display: flex;\n    flex-direction: column;\n  }\n}` },
    targetImage: "/gameplay/cave-6/targets/q2.png",
  },
  q3: {
    id: "c6-q3",
    title: "Chamber Depth",
    description: "Force the '.chamber' element width rule to match exactly 100% of the horizontal viewport screen scale using vw.",
    starterCode: { html: `<div class="chamber"></div>`, css: `.chamber {\n  /* TODO: Set width to 100vw */\n  height: 80px;\n}` },
    answer: { css: `.chamber {\n  width: 100vw;\n  height: 80px;\n}` },
    targetImage: "/gameplay/cave-6/targets/q3.png",
  }
};