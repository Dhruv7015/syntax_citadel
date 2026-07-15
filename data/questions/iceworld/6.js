export default {
  q1: {
   id: "i6-q1",
    title: "Sub-Zero Responsiveness",
    description: "Write a media query structure targeting viewport screen dimensions. Establish a breakpoint targeting maximum widths of 768px.",
    starterCode: {
      html: `<div class="panel">Control UI</div>`,
      css: `/* TODO: Create a media query for max-width 768px, and within it, set .panel background to #000 */\n`
    },
    hints: [
      "Write out the syntax block rules: `@media (max-width: 768px) { .panel { background: #000; } }`."
    ],
    answer: {
      css: `@media (max-width: 768px) {\n  .panel {\n    background: #000;\n  }\n}`
    },
    targetImage: "/gameplay/iceworld-6/targets/q1.png",
  },
  q2: {
   id: "i6-q2",
    title: "Responsive Ice Shelves",
    description: "Adjust the layout for small screens. Inside the provided media query, switch the `.shelf` component to display as a full-width block element.",
    starterCode: {
      html: `<div class="shelf">Shelf Element</div>`,
      css: `@media (max-width: 480px) {\n  .shelf {\n    /* TODO: Overwrite to block layout display */\n  }\n}`
    },
    hints: [
      "Inside the nested media block section context structure apply: `display: block;`."
    ],
    answer: {
      css: `@media (max-width: 480px) {\n  .shelf {\n    display: block;\n  }\n}`
    },
    targetImage: "/gameplay/iceworld-6/targets/q2.png",
  },
  q3: {
   id: "i6-q3",
    title: "Dynamic Frost Units",
    description: "Make the core structural text size adapt dynamically to the global viewport frame size. Set the text font-size to exactly 5% of the total viewport width (`vw`).",
    starterCode: {
      html: `<h2 class="aurora-title">Northern Lights</h2>`,
      css: `.aurora-title {\n  /* TODO: Set font size to 5% of the viewport width */\n}`
    },
    hints: [
      "Use the fluid web system viewport width responsive scale metric sizing property option: `font-size: 5vw;`."
    ],
    answer: {
      css: `.aurora-title {\n  font-size: 5vw;\n}`
    },
    targetImage: "/gameplay/iceworld-6/targets/q3.png",
  },
};
