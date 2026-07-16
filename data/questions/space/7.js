export default {
  q1: {
    id: "sp7-q1",
    title: "Warp Blur",
    description: "Apply a standard CSS visual rendering filter targeting a blur at 8px strength on '.warp-field'.",
    starterCode: { html: `<div class="warp-field">Distorted Space</div>`, css: `.warp-field {\n  /* TODO: Apply an 8px blur filter */\n}` },
    answer: { css: `.warp-field {\n  filter: blur(8px);\n}` },
    targetImage: "/gameplay/space-7/targets/q1.png",
  },
  q2: {
    id: "sp7-q2",
    title: "Shuttle Launch",
    description: "Add a transition declaration targeting transform operations over exactly 0.7 seconds duration.",
    starterCode: { html: `<div class="shuttle">🛸</div>`, css: `.shuttle {\n  /* TODO: Add a 0.7s transition for transform */\n}\n.shuttle:hover { transform: translateY(-50px) scale(0.5); }` },
    answer: { css: `.shuttle {\n  transition: transform 0.7s;\n}\n.shuttle:hover { transform: translateY(-50px) scale(0.5); }` },
    targetImage: "/gameplay/space-7/targets/q2.png",
  },
  q3: {
    id: "sp7-q3",
    title: "Pulsar Cycle",
    description: "Bind the keyframe named 'pulse' to loop infinitely over an uninterrupted 2-second linear timeline window.",
    starterCode: { html: `<div class="pulsar">🚨</div>`, css: `.pulsar {\n  /* TODO: Attach pulse animation, 2s, linear, infinite loop */\n}\n@keyframes pulse { 50% { transform: scale(1.4); opacity: 0.3; } }` },
    answer: { css: `.pulsar {\n  animation: pulse 2s linear infinite;\n}\n@keyframes pulse { 50% { transform: scale(1.4); opacity: 0.3; } }` },
    targetImage: "/gameplay/space-7/targets/q3.png",
  }
};