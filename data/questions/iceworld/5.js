export default {
  q1: {
   id: "i5-q1",
    title: "Wrapping the Supply Boxes",
    description: "Too many supply boxes are creating horizontal overflows. Force the flex items to wrap down into multi-line rows naturally.",
    starterCode: {
      html: `<div class="depot">\n  <div>📦</div><div>📦</div><div>📦</div><div>📦</div>\n</div>`,
      css: `.depot {\n  display: flex;\n  /* TODO: Allow flex items to wrap onto multiple lines */\n}`
    },
    hints: [
      "Use `flex-wrap: wrap;` to handle structural container row overflows safely."
    ],
    answer: {
      css: `.depot {\n  display: flex;\n  flex-wrap: wrap;\n}`
    },
    targetImage: "/gameplay/iceworld-5/targets/q1.png",
  },
  q2: {
   id: "i5-q2",
    title: "Shifting Snow Floes",
    description: "Re-orient the primary alignment direction axes for the ice sheets. Force them to layout vertically as a column from top to bottom.",
    starterCode: {
      html: `<div class="ice-flow">\n  <span>Floe 1</span>\n  <span>Floe 2</span>\n</div>`,
      css: `.ice-flow {\n  display: flex;\n  /* TODO: Change flex direction to stack items vertically */\n}`
    },
    hints: [
      "Configure the flex axis direction rule to: `flex-direction: column;`."
    ],
    answer: {
      css: `.ice-flow {\n  display: flex;\n  flex-direction: column;\n}`
    },
    targetImage: "/gameplay/iceworld-5/targets/q2.png",
  },
  q3: {
    id: "i5-q3",
    title: "The Hidden Igloo Trap",
    description: "Completely hide the dangerous trapbox element from visibility layout without destroying the document spacing dimensions layout footprint.",
    starterCode: {
      html: `<div class="path">\n  <div class="trap">⚠️ Trap</div>\n</div>`,
      css: `.trap {\n  background: red;\n  /* TODO: Hide the element while keeping its space occupied */\n}`
    },
    hints: [
      "To keep space occupied but hide visual visibility rendering completely, use `visibility: hidden;`."
    ],
    answer: {
      css: `.trap {\n  background: red;\n  visibility: hidden;\n}`
    },
    targetImage: "/gameplay/iceworld-5/targets/q3.png",
  },
};
