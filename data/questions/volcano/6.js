export default {
  q1: {
    id: "v6-q1",
    title: "Heat Wave",
    description: "Media query for max-width 768px changing background to #ffb703.",
    starterCode: { html: `<div class="surface"></div>`, css: `/* TODO: media query */` },
    answer: { css: `@media (max-width: 768px) { .surface { background: #ffb703; } }` },
  },
  q2: {
    id: "v6-q2",
    title: "Mobile Vent",
    description: "Stack flex items in column for screen < 500px.",
    starterCode: { css: `@media (max-width: 500px) { .vent { /* TODO: column */ } }` },
    answer: { css: `@media (max-width: 500px) { .vent { flex-direction: column; } }` },
  },
  q3: {
    id: "v6-q3",
    title: "Full Blast",
    description: "Set width to 100vw.",
    starterCode: { css: `.blast { width: /* TODO: 100vw */ }` },
    answer: { css: `.blast { width: 100vw; }` },
  }
};