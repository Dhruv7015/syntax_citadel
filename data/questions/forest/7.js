export default {
  q1: {
    id: "f7-q1",
    title: "The Whispering Wind",
    description: "The wind is blowing strongly from the west! Shift the floating cloud 50px to the right and scale it up slightly.",
    starterCode: {
      html: `<div class="cloud">☁️</div>`,
      css: `.cloud {\n  font-size: 40px;\n  /* TODO: Translate the cloud 50px horizontally and scale it by 1.2 using transform */\n}`
    },
    hints: [
      "Combine transforms together in a single statement: `transform: translateX(50px) scale(1.2);`."
    ],
    answer: {
      css: `.cloud {\n  font-size: 40px;\n  transform: translateX(50px) scale(1.2);\n}`
    },
    targetImage: "/gameplay/forest-7/targets/q1.png",
  },
  q2: {
    id: "f7-q2",
    title: "Floating Fireflies",
    description: "Assign the custom 'drift' keyframe animation to the firefly element, keeping its movements loopable forever.",
    starterCode: {
      html: `<div class="firefly">✨</div>`,
      css: `.firefly {\n  font-size: 30px;\n  /* TODO: Apply the 'drift' animation: 2s duration, infinite loop, alternate direction */\n}\n@keyframes drift {\n  from { transform: translateY(0); }\n  to { transform: translateY(-20px); }\n}`
    },
    hints: [
      "Use `animation: drift 2s infinite alternate;`."
    ],
    answer: {
      css: `.firefly {\n  font-size: 30px;\n  animation: drift 2s infinite alternate;\n}\n@keyframes drift {\n  from { transform: translateY(0); }\n  to { transform: translateY(-20px); }\n}`
    },
    targetImage: "/gameplay/forest-7/targets/q2.png",
  },
  q3: {
    id: "f7-q3",
    title: "Spinning Windmill Blades",
    description: "Bring the rusty generator to life. Animate its rotating blades to spin 360 degrees smoothly and continuously.",
    starterCode: {
      html: `<div class="windmill">❌</div>`,
      css: `.windmill {\n  font-size: 45px;\n  display: inline-block;\n  /* TODO: Apply the 'spin' animation: 4s duration, infinite loop, linear easing */\n}\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}`
    },
    hints: [
      "Apply the style: `animation: spin 4s linear infinite;` to start rotating the blades."
    ],
    answer: {
      css: `.windmill {\n  font-size: 45px;\n  display: inline-block;\n  animation: spin 4s linear infinite;\n}\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}`
    },
      
    targetImage: "/gameplay/forest-7/targets/q3.png",
  },
};
