export default {
  q1: {
    id: "v1-q1",
    title: "Magma Chamber",
    description: "Create a div with class 'magma' to serve as the base of the volcano.",
    starterCode: { html: `<!-- TODO: Create a div with class 'magma' -->`, css: `.magma { background: #d00000; height: 100px; width: 100%; }` },
    answer: { html: `<div class="magma"></div>` },
    targetImage: "/gameplay/volcano-1/targets/q1.png",
  },
  q2: {
    id: "v1-q2",
    title: "Lava Alert",
    description: "Wrap 'Eruption Imminent!' in an em tag to emphasize the warning.",
    starterCode: { html: `<p><!-- TODO: Wrap in em tag -->Eruption Imminent!</p>`, css: `em { color: #ffba08; font-style: italic; }` },
    answer: { html: `<p><em>Eruption Imminent!</em></p>` },
    targetImage: "/gameplay/volcano-1/targets/q2.png",
  },
  q3: {
    id: "v1-q3",
    title: "Escape Route",
    description: "Create a link pointing to '/safety' with the text 'Run to Safety'.",
    starterCode: { html: `<!-- TODO: Anchor link to /safety -->`, css: `a { color: #f48c06; }` },
    answer: { html: `<a href="/safety">Run to Safety</a>` },
    targetImage: "/gameplay/volcano-1/targets/q3.png",
  }
};