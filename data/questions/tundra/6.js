export default {
  q1: {
    id: "t6-q1",
    title: "Freezing Limit",
    description: "Create a media query ruleset for viewports up to a max-width of 768px. Change the background of '.shelter' to #2b2d42 inside it.",
    starterCode: { html: `<div class="shelter"></div>`, css: `/* TODO: Create media query for max-width 768px changing .shelter */\n` },
    answer: { css: `@media (max-width: 768px) {\n  .shelter {\n    background: #2b2d42;\n  }\n}` },
    targetImage: "/gameplay/tundra-6/targets/q1.png",
  },
  q2: {
    id: "t6-q2",
    title: "Windbreak Stack",
    description: "Inside the provided mobile media query, stack the flex alignment direction rules into a column configuration.",
    starterCode: { html: `<div class="windbreak"><span>Barrier A</span><span>Barrier B</span></div>`, css: `@media (max-width: 500px) {\n  .windbreak {\n    display: flex;\n    /* TODO: Set flex-direction to column */\n  }\n}` },
    answer: { css: `@media (max-width: 500px) {\n  .windbreak {\n    display: flex;\n    flex-direction: column;\n  }\n}` },
    targetImage: "/gameplay/tundra-6/targets/q2.png",
  },
  q3: {
    id: "t6-q3",
    title: "Tundra Vista",
    description: "Force the '.vista' element width rule to match exactly 100% of the horizontal viewport screen scale using vw.",
    starterCode: { html: `<div class="vista"></div>`, css: `.vista {\n  /* TODO: Set width to 100vw */\n  height: 95px;\n}` },
    answer: { css: `.vista {\n  width: 100vw;\n  height: 95px;\n}` },
    targetImage: "/gameplay/tundra-6/targets/q3.png",
  }
};