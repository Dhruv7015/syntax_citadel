export default {
  q1: {
    id: "sp9-q1",
    title: "Comms Override",
    description: "Target the selected operational node instance and reset the assigned structural text content string explicitly to reading value 'TRANSMITTING'.",
    starterCode: { html: `<div id="comms">MUTED</div>`, css: ``, js: `const comms = document.getElementById('comms');\n// TODO: Set textContent to 'TRANSMITTING'` },
    answer: { js: `comms.textContent = 'TRANSMITTING';` },
    targetImage: "/gameplay/space-9/targets/q1.png",
  },
  q2: {
    id: "sp9-q2",
    title: "Expose Star Chart",
    description: "Access structural visibility mechanics to modify internal styling property layouts, setting display strictly value execution to 'block'.",
    starterCode: { html: `<div id="chart" style="display:none;">MAP STACK</div>`, css: ``, js: `const chart = document.getElementById('chart');\n// TODO: Change style.display to 'block'` },
    answer: { js: `chart.style.display = 'block';` },
    targetImage: "/gameplay/space-9/targets/q2.png",
  },
  q3: {
    id: "sp9-q3",
    title: "Warp Trigger",
    description: "Establish tracking listeners monitoring target button interactions calling logic operations pointing to tracking functional parameter pointer 'engageHyperdrive'.",
    starterCode: { html: `<button id="warp">Hyperdrive</button>`, css: ``, js: `const warp = document.getElementById('warp');\nfunction engageHyperdrive() { console.log("Entering warp velocity."); }\n// TODO: Add click event listener to warp executing engageHyperdrive` },
    answer: { js: `warp.addEventListener('click', engageHyperdrive);` },
    targetImage: "/gameplay/space-9/targets/q3.png",
  }
};