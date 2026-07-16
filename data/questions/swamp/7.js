export default {
  q1: {
    id: "sw7-q1",
    title: "Methane Haze",
    description: "Apply a standard CSS visual rendering filter targeting a blur at 4px strength on '.haze'.",
    starterCode: { html: `<div class="haze">Toxic Mists</div>`, css: `.haze {\n  /* TODO: Apply a 4px blur filter */\n}` },
    answer: { css: `.haze {\n  filter: blur(4px);\n}` },
    targetImage: "/gameplay/swamp-7/targets/q1.png",
  },
  q2: {
    id: "sw7-q2",
    title: "Ripple Effect",
    description: "Add a transition declaration targeting transform operations over exactly 0.6 seconds duration.",
    starterCode: { html: `<div class="ripple">🪷</div>`, css: `.ripple {\n  /* TODO: Add a 0.6s transition for transform */\n}\n.ripple:hover { transform: scale(1.3); }` },
    answer: { css: `.ripple {\n  transition: transform 0.6s;\n}\n.ripple:hover { transform: scale(1.3); }` },
    targetImage: "/gameplay/swamp-7/targets/q2.png",
  },
  q3: {
    id: "sw7-q3",
    title: "Firefly Blink",
    description: "Bind the keyframe named 'glow' to loop infinitely over an uninterrupted 1.5-second linear timeline window.",
    starterCode: { html: `<div class="bug">✨</div>`, css: `.bug {\n  /* TODO: Attach glow animation, 1.5s, linear, infinite loop */\n}\n@keyframes glow { 50% { opacity: 0.1; } }` },
    answer: { css: `.bug {\n  animation: glow 1.5s linear infinite;\n}\n@keyframes glow { 50% { opacity: 0.1; } }` },
    targetImage: "/gameplay/swamp-7/targets/q3.png",
  }
};