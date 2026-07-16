export default {
  q1: {
    id: "s1-q1",
    title: "Nimbus Base",
    description: "Create a div with class 'cloud' to form a base cloud.",
    starterCode: { html: ``, css: `.cloud { background: white; width: 100px; height: 50px; border-radius: 20px; }` },
    answer: { html: `<div class="cloud"></div>` },
    targetImage: "/gameplay/sky-1/targets/q1.png",
  },
  q2: {
    id: "s1-q2",
    title: "Sunlight Alert",
    description: "Wrap 'Sunlight detected!' in a strong tag.",
    starterCode: { html: `<p>Sunlight detected!</p>`, css: `strong { color: #ffba08; }` },
    answer: { html: `<p><strong>Sunlight detected!</strong></p>` },
    targetImage: "/gameplay/sky-1/targets/q2.png",
  },
  q3: {
    id: "s1-q3",
    title: "Take Off",
    description: "Create a link pointing to '/ascend' with text 'Take Off'.",
    starterCode: { html: ``, css: `a { color: #00b4d8; }` },
    answer: { html: `<a href="/ascend">Take Off</a>` },
    targetImage: "/gameplay/sky-1/targets/q3.png",
  }
};