export default {
  q1: {
    id: "s7-q1",
    title: "Fog Effect",
    description: "Apply a standard CSS visual rendering filter targeting a blur at 2px strength on '.fog'.",
    starterCode: { html: `<div class="fog">Cloud Bank</div>`, css: `.fog {\n  /* TODO: Apply a 2px blur filter */\n}` },
    answer: { css: `.fog {\n  filter: blur(2px);\n}` },
    targetImage: "/gameplay/sky-7/targets/q1.png",
  },
  q2: {
    id: "s7-q2",
    title: "Landing Transition",
    description: "Add a transition declaration targeting transform operations over exactly 0.8 seconds duration.",
    starterCode: { html: `<div class="plane">🛬</div>`, css: `.plane {\n  /* TODO: Add a 0.8s transition for transform */\n}\n.plane:hover { transform: scale(1.5); }` },
    answer: { css: `.plane {\n  transition: transform 0.8s;\n}\n.plane:hover { transform: scale(1.5); }` },
    targetImage: "/gameplay/sky-7/targets/q2.png",
  },
  q3: {
    id: "s7-q3",
    title: "Propeller Spin",
    description: "Bind the keyframe named 'spin' to loop infinitely over an uninterrupted 1-second linear timeline window.",
    starterCode: { html: `<div class="prop">🚁</div>`, css: `.prop {\n  /* TODO: Attach spin animation, 1s, linear, infinite loop */\n}\n@keyframes spin { 100% { transform: rotate(360deg); } }` },
    answer: { css: `.prop {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin { 100% { transform: rotate(360deg); } }` },
    targetImage: "/gameplay/sky-7/targets/q3.png",
  }
};