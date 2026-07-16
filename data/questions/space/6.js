export default {
  q1: {
    id: "sp6-q1",
    title: "Bandwidth Drop",
    description: "Create a media query ruleset for viewports up to a max-width of 768px. Change the background of '.terminal' to #10002b inside it.",
    starterCode: { html: `<div class="terminal"></div>`, css: `/* TODO: Create media query for max-width 768px changing .terminal */\n` },
    answer: { css: `@media (max-width: 768px) {\n  .terminal {\n    background: #10002b;\n  }\n}` },
    targetImage: "/gameplay/space-6/targets/q1.png",
  },
  q2: {
    id: "sp6-q2",
    title: "Module Stack",
    description: "Inside the provided mobile media query, stack the flex alignment direction rules into a column configuration.",
    starterCode: { html: `<div class="modules"><span>Habitation</span><span>Engineering</span></div>`, css: `@media (max-width: 500px) {\n  .modules {\n    display: flex;\n    /* TODO: Set flex-direction to column */\n  }\n}` },
    answer: { css: `@media (max-width: 500px) {\n  .modules {\n    display: flex;\n    flex-direction: column;\n  }\n}` },
    targetImage: "/gameplay/space-6/targets/q2.png",
  },
  q3: {
    id: "sp6-q3",
    title: "Deep Space Span",
    description: "Force the '.void' element width rule to match exactly 100% of the horizontal viewport screen scale using vw.",
    starterCode: { html: `<div class="void"></div>`, css: `.void {\n  /* TODO: Set width to 100vw */\n  height: 100px;\n}` },
    answer: { css: `.void {\n  width: 100vw;\n  height: 100px;\n}` },
    targetImage: "/gameplay/space-6/targets/q3.png",
  }
};