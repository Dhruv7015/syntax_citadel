export default {
  q1: {
    id: "sp1-q1",
    title: "Hull Outer Layer",
    description: "Create a div with class 'hull' to serve as the structural base layer of the starship.",
    starterCode: { html: ``, css: `.hull { background: #2b2d42; height: 140px; width: 100%; }` },
    answer: { html: `<div class="hull"></div>` },
    targetImage: "/gameplay/space-1/targets/q1.png",
  },
  q2: {
    id: "sp1-q2",
    title: "Proximity Alert",
    description: "Wrap 'Debris collision warning!' in a strong tag to emphasize the alert.",
    starterCode: { html: `<p>HUD Message: Debris collision warning!</p>`, css: `strong { color: #ff0054; font-weight: bold; }` },
    answer: { html: `<p>HUD Message: <strong>Debris collision warning!</strong></p>` },
    targetImage: "/gameplay/space-1/targets/q2.png",
  },
  q3: {
    id: "sp1-q3",
    title: "Docking Coordinates",
    description: "Create a link pointing to '/station' with the text 'Initiate Docking'.",
    starterCode: { html: ``, css: `a { color: #7209b7; text-decoration: none; border-bottom: 2px dashed #7209b7; }` },
    answer: { html: `<a href="/station">Initiate Docking</a>` },
    targetImage: "/gameplay/space-1/targets/q3.png",
  }
};