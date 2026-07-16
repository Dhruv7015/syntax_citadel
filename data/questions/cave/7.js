export default {
  q1: {
    id: "c7-q1",
    title: "Dust Blur",
    description: "Apply a standard CSS visual rendering filter targeting a blur at 5px strength on '.dust'.",
    starterCode: { html: `<div class="dust">Particulates</div>`, css: `.dust {\n  /* TODO: Apply a 5px blur filter */\n}` },
    answer: { css: `.dust {\n  filter: blur(5px);\n}` },
    targetImage: "/gameplay/cave-7/targets/q1.png",
  },
  q2: {
    id: "c7-q2",
    title: "Tremor Glide",
    description: "Add a transition declaration targeting transform operations over exactly 0.4 seconds duration.",
    starterCode: { html: `<div class="tremor">🪨</div>`, css: `.tremor {\n  /* TODO: Add a 0.4s transition for transform */\n}\n.tremor:hover { transform: translateX(15px); }` },
    answer: { css: `.tremor {\n  transition: transform 0.4s;\n}\n.tremor:hover { transform: translateX(15px); }` },
    targetImage: "/gameplay/cave-7/targets/q2.png",
  },
  q3: {
    id: "c7-q3",
    title: "Geyser Cycle",
    description: "Bind the keyframe named 'burst' to loop infinitely over an uninterrupted 4-second linear timeline window.",
    starterCode: { html: `<div class="geyser">💨</div>`, css: `.geyser {\n  /* TODO: Attach burst animation, 4s, linear, infinite loop */\n}\n@keyframes burst { 50% { transform: translateY(-30px); } }` },
    answer: { css: `.geyser {\n  animation: burst 4s linear infinite;\n}\n@keyframes burst { 50% { transform: translateY(-30px); } }` },
    targetImage: "/gameplay/cave-7/targets/q3.png",
  }
};