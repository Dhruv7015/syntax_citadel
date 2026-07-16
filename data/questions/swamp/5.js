export default {
  q1: {
    id: "sw5-q1",
    title: "Bramble Grid",
    description: "Turn the '.brambles' block into a standard CSS Grid container.",
    starterCode: { html: `<div class="brambles">\n  <div>Thorn</div><div>Vine</div>\n</div>`, css: `.brambles {\n  /* TODO: Set display to grid */\n}` },
    answer: { css: `.brambles {\n  display: grid;\n}` },
    targetImage: "/gameplay/swamp-5/targets/q1.png",
  },
  q2: {
    id: "sw5-q2",
    title: "Moss Patches",
    description: "Explicitly divide the grid into three equal width columns using fractions.",
    starterCode: { html: `<div class="moss">\n  <div>Patch 1</div><div>Patch 2</div><div>Patch 3</div>\n</div>`, css: `.moss {\n  display: grid;\n  /* TODO: Set grid template for 3 equal columns */\n}` },
    answer: { css: `.moss {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}` },
    targetImage: "/gameplay/swamp-5/targets/q2.png",
  },
  q3: {
    id: "sw5-q3",
    title: "Sinkhole Spacing",
    description: "Add a consistent grid spacing gap of exactly 15px between grid blocks.",
    starterCode: { html: `<div class="sinkhole">\n  <div>Safe A</div><div>Safe B</div>\n</div>`, css: `.sinkhole {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Set gap to 15px */\n}` },
    answer: { css: `.sinkhole {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}` },
    targetImage: "/gameplay/swamp-5/targets/q3.png",
  }
};