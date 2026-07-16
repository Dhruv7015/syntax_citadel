export default {
  q1: {
    id: "v9-q1",
    title: "Vent Control",
    description: "Set textContent of 'vent' to 'Open'.",
    starterCode: { js: `const vent = document.getElementById('vent'); // TODO: textContent` },
    answer: { js: `vent.textContent = 'Open';` },
  },
  q2: {
    id: "v9-q2",
    title: "Show Lava",
    description: "Set display style to 'block'.",
    starterCode: { js: `const lava = document.getElementById('lava'); // TODO: style.display` },
    answer: { js: `lava.style.display = 'block';` },
  },
  q3: {
    id: "v9-q3",
    title: "Eruption Trigger",
    description: "Add click listener to 'btn' calling 'erupt'.",
    starterCode: { js: `const btn = document.getElementById('btn'); // TODO: addEventListener` },
    answer: { js: `btn.addEventListener('click', erupt);` },
  }
};