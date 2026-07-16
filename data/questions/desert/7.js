export default {
  q1: {
    id: "d7-q1",
    title: "Shimmering Heat",
    description: "Apply a CSS blur filter of 5px to the '.heat-wave' element.",
    starterCode: { html: `<div class="heat-wave">Horizon</div>`, css: `.heat-wave {\n  /* TODO: Apply a 5px blur filter */\n}` },
    hints: ["Use filter: blur(5px);."],
    answer: { css: `.heat-wave {\n  filter: blur(5px);\n}` },
    targetImage: "/gameplay/desert-7/targets/q1.png",
  },
  q2: {
    id: "d7-q2",
    title: "Vulture Hover",
    description: "Create a smooth transition on the 'transform' property taking 1 second.",
    starterCode: { html: `<div class="vulture">🦅</div>`, css: `.vulture {\n  /* TODO: Add a 1s transition for transform */\n}\n.vulture:hover { transform: scale(1.5); }` },
    hints: ["Use transition: transform 1s;."],
    answer: { css: `.vulture {\n  transition: transform 1s;\n}\n.vulture:hover { transform: scale(1.5); }` },
    targetImage: "/gameplay/desert-7/targets/q2.png",
  },
  q3: {
    id: "d7-q3",
    title: "Sandstorm Animation",
    description: "Apply the 'spin' animation to the '.tornado' element to run infinitely over 2 seconds linearly.",
    starterCode: { html: `<div class="tornado">🌪️</div>`, css: `.tornado {\n  /* TODO: Attach spin animation, 2s, linear, infinite */\n}\n@keyframes spin { 100% { transform: rotate(360deg); } }` },
    hints: ["Use animation: spin 2s linear infinite;."],
    answer: { css: `.tornado {\n  animation: spin 2s linear infinite;\n}\n@keyframes spin { 100% { transform: rotate(360deg); } }` },
    targetImage: "/gameplay/desert-7/targets/q3.png",
  },
};