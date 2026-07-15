export default {
  q1: {
    id: "i4-q1",
    title: "Initializing the Ice Grid",
    description: "Initialize the crystalline lattice architecture layout engine. Set the container's layout model type to CSS Grid explicitly.",
    starterCode: {
      html: `<div class="lattice">\n  <div>💎</div>\n  <div>💎</div>\n</div>`,
      css: `.lattice {\n  /* TODO: Convert this container into a CSS Grid context */\n}`
    },
    hints: [
      "Apply the structural layout generator command value: `display: grid;`."
    ],
    answer: {
      css: `.lattice {\n  display: grid;\n}`
    },
    targetImage: "/gameplay/iceworld-4/targets/q1.png",
  },
  q2: {
   id: "i4-q2",
    title: "The Twin Bridge Columns",
    description: "Carve out two columns for your ice bridge. Configure them to be side-by-side, each taking up exactly 1 fractional unit (`1fr`) of space.",
    starterCode: {
      html: `<div class="bridge">\n  <div>Left Support</div>\n  <div>Right Support</div>\n</div>`,
      css: `.bridge {\n  display: grid;\n  /* TODO: Establish 2 equal columns using 1fr each */\n}`
    },
    hints: [
      "Use the property key statement: `grid-template-columns: 1fr 1fr;`."
    ],
    answer: {
      css: `.bridge {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}`
    },
    targetImage: "/gameplay/iceworld-4/targets/q2.png",
  },
  q3: {
    id: "i4-q3",
    title: "Spacing the Stalactites",
    description: "Maintain a safe gap inside the crystal array grid layout. Introduce exactly 15px of space between all adjacent items.",
    starterCode: {
      html: `<div class="crystal-grid">\n  <div>🔺</div><div>🔺</div>\n  <div>🔺</div><div>🔺</div>\n</div>`,
      css: `.crystal-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Add a 15px grid gap */\n}`
    },
    hints: [
      "Use the standard alignment keyword layout property: `gap: 15px;`."
    ],
    answer: {
      css: `.crystal-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}`
    },
    targetImage: "/gameplay/iceworld-4/targets/q3.png",
  },
};
