export default {
  q1: {
    id: "o7-q1",
    title: "Murky Depths",
    description: "Apply a CSS blur filter of 4px to the '.murky-water' element.",
    starterCode: { html: `<div class="murky-water">Abyss</div>`, css: `.murky-water {\n  /* TODO: Apply a 4px blur filter */\n}` },
    hints: ["Use filter: blur(4px);."],
    answer: { css: `.murky-water {\n  filter: blur(4px);\n}` },
    targetImage: "/gameplay/ocean-7/targets/q1.png",
  },
  q2: {
    id: "o7-q2",
    title: "Jellyfish Glide",
    description: "Create a smooth transition on the 'transform' property taking 1.5 seconds.",
    starterCode: { html: `<div class="jellyfish">🪼</div>`, css: `.jellyfish {\n  /* TODO: Add a 1.5s transition for transform */\n}\n.jellyfish:hover { transform: translateY(-20px); }` },
    hints: ["Use transition: transform 1.5s;."],
    answer: { css: `.jellyfish {\n  transition: transform 1.5s;\n}\n.jellyfish:hover { transform: translateY(-20px); }` },
    targetImage: "/gameplay/ocean-7/targets/q2.png",
  },
  q3: {
    id: "o7-q3",
    title: "Whirlpool Animation",
    description: "Apply the 'swirl' animation to the '.whirlpool' element to run infinitely over 3 seconds linearly.",
    starterCode: { html: `<div class="whirlpool">🌀</div>`, css: `.whirlpool {\n  /* TODO: Attach swirl animation, 3s, linear, infinite */\n}\n@keyframes swirl { 100% { transform: rotate(-360deg); } }` },
    hints: ["Use animation: swirl 3s linear infinite;."],
    answer: { css: `.whirlpool {\n  animation: swirl 3s linear infinite;\n}\n@keyframes swirl { 100% { transform: rotate(-360deg); } }` },
    targetImage: "/gameplay/ocean-7/targets/q3.png",
  }
};