export default {
  q1: {
    id: "c9-q1",
    title: "Lever Release",
    description: "Target the selected operational node instance and reset the assigned structural text content string explicitly to reading value 'UNLOCKED'.",
    starterCode: { html: `<div id="gate">LOCKED</div>`, css: ``, js: `const gate = document.getElementById('gate');\n// TODO: Set textContent to 'UNLOCKED'` },
    answer: { js: `gate.textContent = 'UNLOCKED';` },
    targetImage: "/gameplay/cave-9/targets/q1.png",
  },
  q2: {
    id: "c9-q2",
    title: "Reveal Shaft",
    description: "Access structural visibility mechanics to modify internal styling property layouts, setting display strictly value execution to 'block'.",
    starterCode: { html: `<div id="shaft" style="display:none;">HIDDEN WAY</div>`, css: ``, js: `const shaft = document.getElementById('shaft');\n// TODO: Change style.display to 'block'` },
    answer: { js: `shaft.style.display = 'block';` },
    targetImage: "/gameplay/cave-9/targets/q2.png",
  },
  q3: {
    id: "c9-q3",
    title: "Detonation Trigger",
    description: "Establish tracking listeners monitoring target button interactions calling logic operations pointing to tracking functional parameter pointer 'blast'.",
    starterCode: { html: `<button id="detonate">Detonate</button>`, css: ``, js: `const detonate = document.getElementById('detonate');\nfunction blast() { console.log("Clearance complete."); }\n// TODO: Add click event listener to detonate executing blast` },
    answer: { js: `detonate.addEventListener('click', blast);` },
    targetImage: "/gameplay/cave-9/targets/q3.png",
  }
};