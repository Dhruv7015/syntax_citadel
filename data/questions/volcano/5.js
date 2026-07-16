export default {
  q1: {
    id: "v5-q1",
    title: "Tectonic Plates",
    description: "Set '.plates' to display: grid.",
    starterCode: { html: `<div class="plates"></div>`, css: `.plates { /* TODO: grid */ }` },
    answer: { css: `.plates { display: grid; }` },
  },
  q2: {
    id: "v5-q2",
    title: "Plate Rows",
    description: "Create two equal columns using grid-template-columns: 1fr 1fr.",
    starterCode: { html: `<div class="grid"></div>`, css: `.grid { display: grid; /* TODO: columns */ }` },
    answer: { css: `.grid { display: grid; grid-template-columns: 1fr 1fr; }` },
  },
  q3: {
    id: "v5-q3",
    title: "Crust Gap",
    description: "Add a 'gap' of 20px between grid items.",
    starterCode: { html: `<div class="crust"></div>`, css: `.crust { display: grid; /* TODO: gap */ }` },
    answer: { css: `.crust { display: grid; gap: 20px; }` },
  }
};