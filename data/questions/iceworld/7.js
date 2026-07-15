export default {
  q1: {
    id: "i7-q1",
    title: "Shimmering Aurora Glow",
    description: "Blur out the harsh edges of the colorful sky element. Apply a native filter effect that creates a 10px blur on the component.",
    starterCode: {
      html: `<div class="aurora-sky"></div>`,
      css: `.aurora-sky {\n  background: #52b788;\n  /* TODO: Apply a 10px blur filter effect */\n}`
    },
    hints: [
      "Use CSS filters: `filter: blur(10px);`."
    ],
    answer: {
      css: `.aurora-sky {\n  background: #52b788;\n  filter: blur(10px);\n}`
    },
    targetImage: "/gameplay/iceworld-7/targets/q1.png",
  },
  q2: {
   id: "i7-q2",
    title: "Sliding Ice Sheet",
    description: "Smooth out position transitions. Set a transition rule on the 'left' style property that takes exactly 0.5 seconds with an 'ease-out' timing function.",
    starterCode: {
      html: `<div class="ice-sheet"></div>`,
      css: `.ice-sheet {\n  position: absolute;\n  left: 0;\n  /* TODO: Add a 0.5s ease-out transition tracking the left property */\n}`
    },
    hints: [
      "Use the transition property structure: `transition: left 0.5s ease-out;`."
    ],
    answer: {
      css: `.ice-sheet {\n  position: absolute;\n  left: 0;\n  transition: left 0.5s ease-out;\n}`
    },
    targetImage: "/gameplay/iceworld-7/targets/q2.png",
  },
  q3: {
   id: "i7-q3",
    title: "Pulsing Blizzard Warning",
    description: "Wire up the loop engine mechanics for an emergency warning system light. Set the animation duration to 1.5 seconds, running an infinite linear loop.",
    starterCode: {
      html: `<div class="beacon">🚨</div>`,
      css: `.beacon {\n  /* TODO: Attach the pulse animation: 1.5s duration, linear, infinite */\n}\n@keyframes pulse {\n  0% { opacity: 0.3; }\n  50% { opacity: 1.0; }\n  100% { opacity: 0.3; }\n}`
    },
    hints: [
      "Use `animation: pulse 1.5s linear infinite;` to complete the animation link configuration connection map."
    ],
    answer: {
      css: `.beacon {\n  animation: pulse 1.5s linear infinite;\n}\n@keyframes pulse {\n  0% { opacity: 0.3; }\n  50% { opacity: 1.0; }\n  100% { opacity: 0.3; }\n}`
    },
    targetImage: "/gameplay/iceworld-7/targets/q3.png",
  },
};
