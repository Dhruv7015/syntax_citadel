export default {
  q1: {
    id: "s6-q1",
    title: "Turbulence View",
    description: "Create a media query ruleset for viewports up to a max-width of 768px. Change the background of '.sky' to #90e0ef inside it.",
    starterCode: { html: `<div class="sky"></div>`, css: `/* TODO: Create media query for max-width 768px changing .sky */\n` },
    answer: { css: `@media (max-width: 768px) {\n  .sky {\n    background: #90e0ef;\n  }\n}` },
    targetImage: "/gameplay/sky-6/targets/q1.png",
  },
  q2: {
    id: "s6-q2",
    title: "Vertical Ascent",
    description: "Inside the provided mobile media query, stack the flex alignment direction rules into a column configuration.",
    starterCode: { html: `<div class="ascent"><span>Ship 1</span><span>Ship 2</span></div>`, css: `@media (max-width: 500px) {\n  .ascent {\n    display: flex;\n    /* TODO: Set flex-direction to column */\n  }\n}` },
    answer: { css: `@media (max-width: 500px) {\n  .ascent {\n    display: flex;\n    flex-direction: column;\n  }\n}` },
    targetImage: "/gameplay/sky-6/targets/q2.png",
  },
  q3: {
    id: "s6-q3",
    title: "Wide Horizon",
    description: "Force the '.wide' element width rule to match exactly 100% of the horizontal viewport screen scale using vw.",
    starterCode: { html: `<div class="wide"></div>`, css: `.wide {\n  /* TODO: Set width to 100vw */\n  height: 60px;\n}` },
    answer: { css: `.wide {\n  width: 100vw;\n  height: 60px;\n}` },
    targetImage: "/gameplay/sky-6/targets/q3.png",
  }
};