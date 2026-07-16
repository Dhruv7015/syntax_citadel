export default {
  q1: {
    id: "t7-q1",
    title: "Frosty Pane",
    description: "Apply a standard CSS visual rendering filter targeting a blur at 6px strength on '.ice-window'.",
    starterCode: { html: `<div class="ice-window">Frost Layer</div>`, css: `.ice-window {\n  /* TODO: Apply a 6px blur filter */\n}` },
    answer: { css: `.ice-window {\n  filter: blur(6px);\n}` },
    targetImage: "/gameplay/tundra-7/targets/q1.png",
  },
  q2: {
    id: "t7-q2",
    title: "Avalanche Slide",
    description: "Add a transition declaration targeting transform operations over exactly 0.5 seconds duration.",
    starterCode: { html: `<div class="slide">🏂</div>`, css: `.slide {\n  /* TODO: Add a 0.5s transition for transform */\n}\n.slide:hover { transform: translateY(20px); }` },
    answer: { css: `.slide {\n  transition: transform 0.5s;\n}\n.slide:hover { transform: translateY(20px); }` },
    targetImage: "/gameplay/tundra-7/targets/q2.png",
  },
  q3: {
    id: "t7-q3",
    title: "Snowfall Cycle",
    description: "Bind the keyframe named 'drift' to loop infinitely over an uninterrupted 5-second linear timeline window.",
    starterCode: { html: `<div class="snowflake">❄️</div>`, css: `.snowflake {\n  /* TODO: Attach drift animation, 5s, linear, infinite loop */\n}\n@keyframes drift { 100% { transform: translateY(40px) rotate(360deg); } }` },
    answer: { css: `.snowflake {\n  animation: drift 5s linear infinite;\n}\n@keyframes drift { 100% { transform: translateY(40px) rotate(360deg); } }` },
    targetImage: "/gameplay/tundra-7/targets/q3.png",
  }
};