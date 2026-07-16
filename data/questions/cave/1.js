export default {
  q1: {
    id: "c1-q1",
    title: "Cavern Vault",
    description: "Create a div with class 'cavern' to serve as the structural base layer of the cave.",
    starterCode: { html: ``, css: `.cavern { background: #1c1a17; height: 120px; width: 100%; }` },
    answer: { html: `<div class="cavern"></div>` },
    targetImage: "/gameplay/cave-1/targets/q1.png",
  },
  q2: {
    id: "c1-q2",
    title: "Echo Warning",
    description: "Wrap 'Bat swarm detected!' in an em tag to emphasize the structural cave warning.",
    starterCode: { html: `<p>Echo Scanner: Bat swarm detected!</p>`, css: `em { color: #d90429; font-style: italic; }` },
    answer: { html: `<p>Echo Scanner: <em>Bat swarm detected!</em></p>` },
    targetImage: "/gameplay/cave-1/targets/q2.png",
  },
  q3: {
    id: "c1-q3",
    title: "Rope Ascent",
    description: "Create a link pointing to '/surface' with the text 'Climb Up'.",
    starterCode: { html: ``, css: `a { color: #a3a3a3; text-decoration: underline; }` },
    answer: { html: `<a href="/surface">Climb Up</a>` },
    targetImage: "/gameplay/cave-1/targets/q3.png",
  }
};