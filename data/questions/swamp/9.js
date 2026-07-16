export default {
  q1: {
    id: "sw9-q1",
    title: "Pump Switch",
    description: "Target the selected operational node instance and reset the assigned structural text content string explicitly to reading value 'RUNNING'.",
    starterCode: { html: `<div id="pump">IDLE</div>`, css: ``, js: `const pump = document.getElementById('pump');\n// TODO: Set textContent to 'RUNNING'` },
    answer: { js: `pump.textContent = 'RUNNING';` },
    targetImage: "/gameplay/swamp-9/targets/q1.png",
  },
  q2: {
    id: "sw9-q2",
    title: "Expose Map",
    description: "Access structural visibility mechanics to modify internal styling property layouts, setting display strictly value execution to 'block'.",
    starterCode: { html: `<div id="map" style="display:none;">SECRETS</div>`, css: ``, js: `const map = document.getElementById('map');\n// TODO: Change style.display to 'block'` },
    answer: { js: `map.style.display = 'block';` },
    targetImage: "/gameplay/swamp-9/targets/q2.png",
  },
  q3: {
    id: "sw9-q3",
    title: "Flare Trigger",
    description: "Establish tracking listeners monitoring target button interactions calling logic operations pointing to tracking functional parameter pointer 'signal'.",
    starterCode: { html: `<button id="flare">Launch Flare</button>`, css: ``, js: `const flare = document.getElementById('flare');\nfunction signal() { console.log("Rescue alerted."); }\n// TODO: Add click event listener to flare executing signal` },
    answer: { js: `flare.addEventListener('click', signal);` },
    targetImage: "/gameplay/swamp-9/targets/q3.png",
  }
};