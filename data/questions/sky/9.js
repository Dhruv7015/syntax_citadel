export default {
  q1: {
    id: "s9-q1",
    title: "Panel Toggle",
    description: "Target the selected operational node instance and reset the assigned structural text content string explicitly to reading value 'ON'.",
    starterCode: { html: `<div id="display">OFF</div>`, css: ``, js: `const display = document.getElementById('display');\n// TODO: Set textContent to 'ON'` },
    answer: { js: `display.textContent = 'ON';` },
    targetImage: "/gameplay/sky-9/targets/q1.png",
  },
  q2: {
    id: "s9-q2",
    title: "Radar View",
    description: "Access structural visibility mechanics to modify internal styling property layouts, setting display strictly value execution to 'block'.",
    starterCode: { html: `<div id="radar" style="display:none;">SCANNING</div>`, css: ``, js: `const radar = document.getElementById('radar');\n// TODO: Change style.display to 'block'` },
    answer: { js: `radar.style.display = 'block';` },
    targetImage: "/gameplay/sky-9/targets/q2.png",
  },
  q3: {
    id: "s9-q3",
    title: "Beacon Event",
    description: "Establish tracking listeners monitoring target button interactions calling logic operations pointing to tracking functional parameter pointer 'activate'.",
    starterCode: { html: `<button id="beacon">Signal</button>`, css: ``, js: `const beacon = document.getElementById('beacon');\nfunction activate() { console.log("Radar pinged."); }\n// TODO: Add click event listener to beacon executing activate` },
    answer: { js: `beacon.addEventListener('click', activate);` },
    targetImage: "/gameplay/sky-9/targets/q3.png",
  }
};