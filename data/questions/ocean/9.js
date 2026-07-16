export default {
  q1: {
    id: "o9-q1",
    title: "Looting the Wreck",
    description: "Select the element with id 'chest' and change its text content to 'Empty'.",
    starterCode: { html: `<div id="chest">Full of Gold</div>`, css: ``, js: `const chest = document.getElementById("chest");\n// TODO: Set textContent to "Empty"` },
    hints: ["chest.textContent = \"Empty\";"],
    answer: { js: `chest.textContent = "Empty";` },
    targetImage: "/gameplay/ocean-9/targets/q1.png",
  },
  q2: {
    id: "o9-q2",
    title: "Lighting the Flare",
    description: "Update the inline style of the 'flare' element to display as 'block'.",
    starterCode: { html: `<div id="flare" style="display:none;">Light!</div>`, css: ``, js: `const flare = document.getElementById("flare");\n// TODO: Change style.display to "block"` },
    hints: ["flare.style.display = \"block\";"],
    answer: { js: `flare.style.display = "block";` },
    targetImage: "/gameplay/ocean-9/targets/q2.png",
  },
  q3: {
    id: "o9-q3",
    title: "Ping the Sonar",
    description: "Add a click event listener to the 'sonarBtn' element that calls the 'ping' function.",
    starterCode: { html: `<button id="sonarBtn">Ping</button>`, css: ``, js: `const sonarBtn = document.getElementById("sonarBtn");\nfunction ping() { console.log("Ping..."); }\n// TODO: Add click event listener to sonarBtn` },
    hints: ["sonarBtn.addEventListener('click', ping);"],
    answer: { js: `sonarBtn.addEventListener('click', ping);` },
    targetImage: "/gameplay/ocean-9/targets/q3.png",
  }
};