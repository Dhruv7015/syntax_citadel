export default {
  q1: {
   id: "i9-q1",
    title: "Altering the Ice Sculpture",
    description: "Manipulate DOM structures in real time. Update the text content property string value of the selected element node '#sculpture' to read 'Thawed'.",
    starterCode: {
      html: `<div id="sculpture">Frozen Solid</div>`,
      css: ``,
      js: `const item = document.querySelector("#sculpture");\n// TODO: Change its textContent to "Thawed"`
    },
    hints: [
      "Assign the text string to the variable reference node element path directly: `item.textContent = \"Thawed\";`."
    ],
    answer: {
      js: `const item = document.querySelector("#sculpture");\nitem.textContent = "Thawed";`
    },
    targetImage: "/gameplay/iceworld-9/targets/q1.png",
  },
  q2: {
    id: "i9-q2",
    title: "Thawing the Vault Door",
    description: "Directly manipulate the inline presentation styles array metrics engine. Set the target element object node's CSS display configuration property mode string value to 'none'.",
    starterCode: {
      html: `<div id="ice-wall">🧱</div>`,
      css: ``,
      js: `const wall = document.querySelector("#ice-wall");\n// TODO: Modify the element style display property to hide it using "none"`
    },
    hints: [
      "Target the style mapping layer parameter: `wall.style.display = \"none\";`."
    ],
    answer: {
      js: `const wall = document.querySelector("#ice-wall");\nwall.style.display = "none";`
    },
    targetImage: "/gameplay/iceworld-9/targets/q2.png",
  },
  q3: {
    id: "i9-q3",
    title: "Catching the Falling Icicle",
    description: "Intercept real-time interactive framework action events. Hook a native pointer 'click' event tracker controller engine onto the canvas node variable identifier layer 'targetZone' to call 'saveItem'.",
    starterCode: {
      html: `<div id="targetZone">🎯</div>`,
      css: ``,
      js: `const targetZone = document.querySelector("#targetZone");\nfunction saveItem() { console.log("Caught!"); }\n\n// TODO: Add click event listener to targetZone to run saveItem`
    },
    hints: [
      "Use `targetZone.addEventListener(\"click\", saveItem);`."
    ],
    answer: {
      js: `const targetZone = document.querySelector("#targetZone");\nfunction saveItem() { console.log("Caught!"); }\n\ntargetZone.addEventListener("click", saveItem);`
    },
    targetImage: "/gameplay/iceworld-9/targets/q3.png",
  },
};
