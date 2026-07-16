export default {
  q1: {
    id: "d9-q1",
    title: "Opening the Sarcophagus",
    description: "Select the element with id 'lid' and change its text content to 'Opened'.",
    starterCode: { html: `<div id="lid">Closed</div>`, css: ``, js: `const lid = document.getElementById("lid");\n// TODO: Set textContent to "Opened"` },
    hints: ["lid.textContent = \"Opened\";"],
    answer: { js: `lid.textContent = "Opened";` },
    targetImage: "/gameplay/desert-9/targets/q1.png",
  },
  q2: {
    id: "d9-q2",
    title: "Revealing the Trap",
    description: "Update the inline style of the 'trap' element to display as 'block'.",
    starterCode: { html: `<div id="trap" style="display:none;">Spikes!</div>`, css: ``, js: `const trap = document.getElementById("trap");\n// TODO: Change style.display to "block"` },
    hints: ["trap.style.display = \"block\";"],
    answer: { js: `trap.style.display = "block";` },
    targetImage: "/gameplay/desert-9/targets/q2.png",
  },
  q3: {
    id: "d9-q3",
    title: "Trigger the Switch",
    description: "Add a click event listener to the 'switchBtn' element that calls the 'openDoor' function.",
    starterCode: { html: `<button id="switchBtn">Pull</button>`, css: ``, js: `const switchBtn = document.getElementById("switchBtn");\nfunction openDoor() { console.log("Open!"); }\n// TODO: Add click event listener to switchBtn` },
    hints: ["switchBtn.addEventListener('click', openDoor);"],
    answer: { js: `switchBtn.addEventListener('click', openDoor);` },
    targetImage: "/gameplay/desert-9/targets/q3.png",
  },
};