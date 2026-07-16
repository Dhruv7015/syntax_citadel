export default {
  q1: {
    id: "t9-q1",
    title: "Beacon Switch",
    description: "Target the selected operational node instance and reset the assigned structural text content string explicitly to reading value 'ACTIVE'.",
    starterCode: { html: `<div id="beacon">STANDBY</div>`, css: ``, js: `const beacon = document.getElementById('beacon');\n// TODO: Set textContent to 'ACTIVE'` },
    answer: { js: `beacon.textContent = 'ACTIVE';` },
    targetImage: "/gameplay/tundra-9/targets/q1.png",
  },
  q2: {
    id: "t9-q2",
    title: "Expose Route",
    description: "Access structural visibility mechanics to modify internal styling property layouts, setting display strictly value execution to 'block'.",
    starterCode: { html: `<div id="route" style="display:none;">SAFE ZONE</div>`, css: ``, js: `const route = document.getElementById('route');\n// TODO: Change style.display to 'block'` },
    answer: { js: `route.style.display = 'block';` },
    targetImage: "/gameplay/tundra-9/targets/q2.png",
  },
  q3: {
    id: "t9-q3",
    title: "SOS Trigger",
    description: "Establish tracking listeners monitoring target button interactions calling logic operations pointing to tracking functional parameter pointer 'transmit'.",
    starterCode: { html: `<button id="sos">Send Signal</button>`, css: ``, js: `const sos = document.getElementById('sos');\nfunction transmit() { console.log("Coordinates sent."); }\n// TODO: Add click event listener to sos executing transmit` },
    answer: { js: `sos.addEventListener('click', transmit);` },
    targetImage: "/gameplay/tundra-9/targets/q3.png",
  }
};