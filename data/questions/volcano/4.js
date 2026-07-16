export default {
  q1: {
    id: "v4-q1",
    title: "Lava Flow",
    description: "Make '.flow' a flex container.",
    starterCode: { html: `<div class="flow"></div>`, css: `.flow { /* TODO: display flex */ }` },
    answer: { css: `.flow { display: flex; }` },
  },
  q2: {
    id: "v4-q2",
    title: "Magma Alignment",
    description: "Align items to 'center' in the '.magma-stream' flex container.",
    starterCode: { html: `<div class="magma-stream"></div>`, css: `.magma-stream { display: flex; /* TODO: align-items */ }` },
    answer: { css: `.magma-stream { display: flex; align-items: center; }` },
  },
  q3: {
    id: "v4-q3",
    title: "Debris Spread",
    description: "Justify content to 'space-around' in '.debris'.",
    starterCode: { html: `<div class="debris"></div>`, css: `.debris { display: flex; /* TODO: justify-content */ }` },
    answer: { css: `.debris { display: flex; justify-content: space-around; }` },
  }
};