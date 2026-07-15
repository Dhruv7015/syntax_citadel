export default {
  1: {
    title: "The Whispering Woods",
    questions: [
      {
        id: "f1-q1",
        title: "Planting Sprout Seeds",
        icon: "🌱",
        tags: ["HTML"],
        description: "Create an image element displaying a forest sprout. Give it a source of '/sprout.png' and uniquely identify it with the id 'sacred-sprout'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Render the sprout image with its unique ID and source -->`,
          css: `#sacred-sprout { width: 50px; height: 50px; }`
        },
        hints: ["Use the <img> tag and include both the 'id' and 'src' attributes correctly."],
        answer: { html: `<img id="sacred-sprout" src="/sprout.png" />` }
      },
      {
        id: "f1-q2",
        title: "Ancient Tree Carving",
        icon: "📜",
        tags: ["HTML"],
        description: "Mark up text detailing an ancient prophecy found on a tree trunk. Emphasize the text 'DANGER AHEAD' so it stands out strongly as important text.",
        xp: 100,
        difficulty: "Easy",
        starterCode: {
          html: `<p>The carving reads: Travelers beware, there is <!-- TODO: Wrap the next words in a strong emphasis tag --> DANGER AHEAD.</p>`,
          css: `strong { color: #d90429; }`
        },
        hints: ["Use the semantic <strong> tags around the target text block."],
        answer: { html: `<p>The carving reads: Travelers beware, there is <strong>DANGER AHEAD</strong>.</p>` }
      },
      {
        id: "f1-q3",
        title: "Gathering Tools Button",
        icon: "🎒",
        tags: ["HTML"],
        description: "Create a functional user interface button element. The button text must say 'Collect Wood' and it must trigger a disabled state natively.",
        xp: 100,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Create a disabled button containing the text 'Collect Wood' -->`,
          css: `button:disabled { opacity: 0.6; cursor: not-allowed; }`
        },
        hints: ["Use a <button> tag and append the Boolean keyword attribute disabled inside the tag wrapper."],
        answer: { html: `<button disabled>Collect Wood</button>` }
      }
    ]
  },
  2: {
    title: "Canopy Walkway",
    questions: [
      {
        id: "f2-q1",
        title: "Rustling Leaves Audio",
        icon: "🍃",
        tags: ["HTML"],
        description: "Add an audio atmosphere element that resource streams '/forest-ambient.mp3'. Ensure the browser native player controls interface is rendered.",
        xp: 100,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Add an audio element with native browser playback controls -->`,
          css: `audio { width: 100%; max-width: 300px; }`
        },
        hints: ["Use the <audio> tag accompanied by the src and controls attributes."],
        answer: { html: `<audio src="/forest-ambient.mp3" controls></audio>` }
      },
      {
        id: "f2-q2",
        title: "Foraging Log Table",
        icon: "🍄",
        tags: ["HTML"],
        description: "Set up the basic foundation structure for a table. Build a single table row (tr) that contains two header cells (th): 'Mushroom' and 'Type'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Insert a single table row with two header cells -->`,
          css: `table { width: 100%; border-collapse: collapse; }\nth { background: #2d6a4f; color: white; }`
        },
        hints: ["Wrap a <tr> element around two separate <th> columns."],
        answer: { html: `<tr>\n  <th>Mushroom</th>\n  <th>Type</th>\n</tr>` }
      },
      {
        id: "f2-q3",
        title: "Campfire Log Input",
        icon: "🔥",
        tags: ["HTML"],
        description: "Construct a numeric configuration input element. Set its type to accept numbers, configure a minimum input boundary value of 1, and set a current fallback value of 1.",
        xp: 100,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Create a numeric input for campfire logs -->`,
          css: `input[type="number"] { width: 50px; padding: 5px; }`
        },
        hints: ["Assign type=\"number\", min=\"1\", and value=\"1\" onto the target input marker."],
        answer: { html: `<input type="number" min="1" value="1" />` }
      }
    ]
  },
  3: {
    title: "The Mossy Cavern",
    questions: [
      {
        id: "f3-q1",
        title: "Elven Font Styles",
        icon: "📜",
        tags: ["CSS"],
        description: "Apply clear font attributes to your camp terminal text. Update the class to use a 'monospace' font family fallback and set the font-size to 18px.",
        xp: 100,
        difficulty: "Easy",
        starterCode: {
          html: `<div class="elven-text">Decrypting Runes...</div>`,
          css: `.elven-text {\n  /* TODO: Apply monospace font family and 18px size */\n}`
        },
        hints: ["Set font-family: monospace; and font-size: 18px; inside the block ruleset."],
        answer: { css: `.elven-text {\n  font-family: monospace;\n  font-size: 18px;\n}` }
      },
      {
        id: "f3-q2",
        title: "Emerald Canopy Gradient",
        icon: "🌿",
        tags: ["CSS"],
        description: "Construct a smooth backdrop fill transition. Add a linear gradient background heading from top to bottom, blending color #52b788 into #1b4332.",
        xp: 100,
        difficulty: "Easy",
        starterCode: {
          html: `<div class="canopy-bg"></div>`,
          css: `.canopy-bg {\n  width: 100%;\n  height: 120px;\n  /* TODO: Set linear-gradient from #52b788 to #1b4332 */\n}`
        },
        hints: ["Assign background: linear-gradient(#52b788, #1b4332);."],
        answer: { css: `.canopy-bg {\n  width: 100%;\n  height: 120px;\n  background: linear-gradient(#52b788, #1b4332);\n}` }
      },
      {
        id: "f3-q3",
        title: "Treehouse Spacing",
        icon: "🏠",
        tags: ["CSS"],
        description: "Isolate inner content boxes from the structural wooden borders. Configure the uniform inside padding to exactly 20px on all 4 directions.",
        xp: 100,
        difficulty: "Easy",
        starterCode: {
          html: `<div class="supply-chest">Gathered Items</div>`,
          css: `.supply-chest {\n  border: 4px solid #74c69d;\n  /* TODO: Set all-around padding to 20px */\n}`
        },
        hints: ["Use the shorthand padding: 20px; statement property ruleset."],
        answer: { css: `.supply-chest {\n  border: 4px solid #74c69d;\n  padding: 20px;\n}` }
      }
    ]
  },
  4: {
    title: "Overgrown Ruins",
    questions: [
      {
        id: "f4-q1",
        title: "Activating the Vine Grid",
        icon: "🕸️",
        tags: ["CSS"],
        description: "Initialize the ancient vine lattice architecture layout engine. Set the container's layout model type to CSS Grid explicitly.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="vine-lattice">\n  <div>🌿</div>\n  <div>🌿</div>\n</div>`,
          css: `.vine-lattice {\n  /* TODO: Convert this container into a CSS Grid context */\n}`
        },
        hints: ["Apply the structural layout generator command value: display: grid;."],
        answer: { css: `.vine-lattice {\n  display: grid;\n}` }
      },
      {
        id: "f4-q2",
        title: "The Twin Totem Columns",
        icon: "🗿",
        tags: ["CSS"],
        description: "Carve out two columns for your ruins gate. Configure them to be side-by-side, each taking up exactly 1 fractional unit (1fr) of space.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="totem-gate">\n  <div>Left</div>\n  <div>Right</div>\n</div>`,
          css: `.totem-gate {\n  display: grid;\n  /* TODO: Establish 2 equal columns using 1fr each */\n}`
        },
        hints: ["Use the property key statement: grid-template-columns: 1fr 1fr;."],
        answer: { css: `.totem-gate {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}` }
      },
      {
        id: "f4-q3",
        title: "Spacing the Thorns",
        icon: "🌵",
        tags: ["CSS"],
        description: "Maintain a safe gap inside the thorn array grid layout. Introduce exactly 15px of space between all adjacent items.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="thorn-grid">\n  <div>🔺</div><div>🔺</div>\n</div>`,
          css: `.thorn-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Add a 15px grid gap */\n}`
        },
        hints: ["Use the standard alignment keyword layout property: gap: 15px;."],
        answer: { css: `.thorn-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}` }
      }
    ]
  },
  5: {
    title: "The Deep Jungle",
    questions: [
      {
        id: "f5-q1",
        title: "Wrapping the Logs",
        icon: "🪵",
        tags: ["CSS"],
        description: "Too many gathered logs are creating horizontal overflows. Force the flex items to wrap down into multi-line rows naturally.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="lumber-yard">\n  <div>🪵</div><div>🪵</div>\n</div>`,
          css: `.lumber-yard {\n  display: flex;\n  /* TODO: Allow flex items to wrap onto multiple lines */\n}`
        },
        hints: ["Use flex-wrap: wrap; to handle structural container row overflows safely."],
        answer: { css: `.lumber-yard {\n  display: flex;\n  flex-wrap: wrap;\n}` }
      },
      {
        id: "f5-q2",
        title: "Sprouting Columns",
        icon: "🌱",
        tags: ["CSS"],
        description: "Re-orient the primary alignment direction axes for the plants. Force them to layout vertically as a column from top to bottom.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="greenhouse">\n  <span>Sprout 1</span>\n  <span>Sprout 2</span>\n</div>`,
          css: `.greenhouse {\n  display: flex;\n  /* TODO: Change flex direction to stack items vertically */\n}`
        },
        hints: ["Configure the flex axis direction rule to: flex-direction: column;."],
        answer: { css: `.greenhouse {\n  display: flex;\n  flex-direction: column;\n}` }
      },
      {
        id: "f5-q3",
        title: "The Camouflaged Pitfall",
        icon: "⚠️",
        tags: ["CSS"],
        description: "Completely hide the dangerous trapbox element from visibility layout without destroying the document spacing dimensions layout footprint.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="forest-path">\n  <div class="hidden-trap">⚠️ Pitfall</div>\n</div>`,
          css: `.hidden-trap {\n  background: #7a4419;\n  /* TODO: Hide the element while keeping its space occupied */\n}`
        },
        hints: ["To keep space occupied but hide visual visibility rendering completely, use visibility: hidden;."],
        answer: { css: `.hidden-trap {\n  background: #7a4419;\n  visibility: hidden;\n}` }
      }
    ]
  },
  6: {
    title: "Firefly Glade",
    questions: [
      {
        id: "f6-q1",
        title: "Wilderness Responsiveness",
        icon: "📱",
        tags: ["CSS"],
        description: "Write a media query structure targeting viewport screen dimensions. Establish a breakpoint targeting maximum widths of 768px.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="survival-panel">Map UI</div>`,
          css: `/* TODO: Create a media query for max-width 768px, and within it, set .survival-panel background to #111 */\n`
        },
        hints: ["Write out the syntax block rules: @media (max-width: 768px) { .survival-panel { background: #111; } }."],
        answer: { css: `@media (max-width: 768px) {\n  .survival-panel {\n    background: #111;\n  }\n}` }
      },
      {
        id: "f6-q2",
        title: "Fluid Tree Branches",
        icon: "🖥️",
        tags: ["CSS"],
        description: "Adjust the layout for small screens. Inside the provided media query, switch the `.branch` component to display as a full-width block element.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="branch">Branch Element</div>`,
          css: `@media (max-width: 480px) {\n  .branch {\n    /* TODO: Overwrite to block layout display */\n  }\n}`
        },
        hints: ["Inside the nested media block section context structure apply: display: block;."],
        answer: { css: `@media (max-width: 480px) {\n  .branch {\n    display: block;\n  }\n}` }
      },
      {
        id: "f6-q3",
        title: "Dynamic Leaf Units",
        icon: "📐",
        tags: ["CSS"],
        description: "Make the core structural text size adapt dynamically to the global viewport frame size. Set the text font-size to exactly 5% of the total viewport width (vw).",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<h2 class="forest-title">Deep Woods</h2>`,
          css: `.forest-title {\n  /* TODO: Set font size to 5% of the viewport width */\n}`
        },
        hints: ["Use the fluid viewport width responsive scale metric sizing property option: font-size: 5vw;."],
        answer: { css: `.forest-title {\n  font-size: 5vw;\n}` }
      }
    ]
  },
  7: {
    title: "The Glowing Thicket",
    questions: [
      {
        id: "f7-q1",
        title: "Mystic Forest Mist",
        icon: "✨",
        tags: ["CSS"],
        description: "Blur out the harsh edges of the magical fog element. Apply a native filter effect that creates a 10px blur on the component.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="mystic-fog"></div>`,
          css: `.mystic-fog {\n  background: #40916c;\n  /* TODO: Apply a 10px blur filter effect */\n}`
        },
        hints: ["Use CSS filters: filter: blur(10px);."],
        answer: { css: `.mystic-fog {\n  background: #40916c;\n  filter: blur(10px);\n}` }
      },
      {
        id: "f7-q2",
        title: "Swinging Vine",
        icon: "🐒",
        tags: ["CSS"],
        description: "Smooth out position transitions. Set a transition rule on the 'left' style property that takes exactly 0.5 seconds with an 'ease-out' timing function.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="hanging-vine"></div>`,
          css: `.hanging-vine {\n  position: absolute;\n  left: 0;\n  /* TODO: Add a 0.5s ease-out transition tracking the left property */\n}`
        },
        hints: ["Use the transition property structure: transition: left 0.5s ease-out;."],
        answer: { css: `.hanging-vine {\n  position: absolute;\n  left: 0;\n  transition: left 0.5s ease-out;\n}` }
      },
      {
        id: "f7-q3",
        title: "Pulsing Spore Warning",
        icon: "🚨",
        tags: ["CSS"],
        description: "Wire up the loop engine mechanics for an emergency warning system spore. Set the animation duration to 1.5 seconds, running an infinite linear loop.",
        xp: 100,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="spore-beacon">🍄</div>`,
          css: `.spore-beacon {\n  /* TODO: Attach the pulse animation: 1.5s duration, linear, infinite */\n}\n@keyframes pulse {\n  0% { opacity: 0.3; }\n  50% { opacity: 1.0; }\n  100% { opacity: 0.3; }\n}`
        },
        hints: ["Use animation: pulse 1.5s linear infinite;."],
        answer: { css: `.spore-beacon {\n  animation: pulse 1.5s linear infinite;\n}\n@keyframes pulse {\n  0% { opacity: 0.3; }\n  50% { opacity: 1.0; }\n  100% { opacity: 0.3; }\n}` }
      }
    ]
  },
  8: {
    title: "The Druid's Hearth",
    questions: [
      {
        id: "f8-q1",
        title: "The Autumn Frost Check",
        icon: "🌡️",
        tags: ["JS"],
        description: "Evaluate current outdoor climate metrics. Write a conditional evaluation block that sets the variable 'isFrozen' to true if 'temperature' is less than or equal to 0.",
        xp: 100,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `let temperature = -2;\nlet isFrozen = false;\n\n// TODO: If temperature is <= 0, set isFrozen to true`
        },
        hints: ["Use the syntax: if (temperature <= 0) { isFrozen = true; }."],
        answer: { js: `if (temperature <= 0) {\n  isFrozen = true;\n}` }
      },
      {
        id: "f8-q2",
        title: "Gathering Campfire Heat",
        icon: "🧮",
        tags: ["JS"],
        description: "Write a standard JavaScript calculation handler routine. Return the total generated warmth by multiplying an input 'woodCount' variable argument by 25.",
        xp: 100,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `function calculateWarmth(woodCount) {\n  /* TODO: Return woodCount multiplied by 25 */\n}`
        },
        hints: ["Use the multiplication operator inside the function: return woodCount * 25;."],
        answer: { js: `function calculateWarmth(woodCount) {\n  return woodCount * 25;\n}` }
      },
      {
        id: "f8-q3",
        title: "The Magic Berry Multiplier",
        icon: "✖️",
        tags: ["JS"],
        description: "Refactor your logic tools using modern ES6 structures. Convert the standard functional math engine routine into an explicit arrow function assignment.",
        xp: 100,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `// TODO: Create an arrow function named 'doubleBerries' that accepts 'x' and returns x * 2`
        },
        hints: ["Use arrow function shorthand syntax: const doubleBerries = (x) => x * 2;."],
        answer: { js: `const doubleBerries = (x) => x * 2;` }
      }
    ]
  },
  9: {
    title: "The Sacred Grove",
    questions: [
      {
        id: "f9-q1",
        title: "Awakening the Statue",
        icon: "🗿",
        tags: ["JS"],
        description: "Manipulate DOM structures in real time. Update the text content property string value of the selected element node '#statue' to read 'Active'.",
        xp: 100,
        difficulty: "Hard",
        starterCode: {
          html: `<div id="statue">Dormant Stone</div>`,
          css: ``,
          js: `const target = document.querySelector("#statue");\n// TODO: Change its textContent to "Active"`
        },
        hints: ["Assign the text string to the textContent property directly: target.textContent = \"Active\";."],
        answer: { js: `target.textContent = "Active";` }
      },
      {
        id: "f9-q2",
        title: "Clearing Brambles",
        icon: "🚪",
        tags: ["JS"],
        description: "Directly manipulate the inline style parameters. Set the target element object node's CSS display configuration property mode string value to 'none'.",
        xp: 100,
        difficulty: "Hard",
        starterCode: {
          html: `<div id="bramble-wall">🌿</div>`,
          css: ``,
          js: `const brush = document.querySelector("#bramble-wall");\n// TODO: Modify the element style display property to hide it using "none"`
        },
        hints: ["Target the style mapping layer parameter: brush.style.display = \"none\";."],
        answer: { js: `brush.style.display = "none";` }
      },
      {
        id: "f9-q3",
        title: "Plucking the Golden Leaf",
        icon: "🎯",
        tags: ["JS"],
        description: "Intercept real-time interactive framework action events. Hook a native pointer 'click' event listener onto the canvas node variable 'branchZone' to call 'collectLeaf'.",
        xp: 100,
        difficulty: "Hard",
        starterCode: {
          html: `<div id="branchZone">🍂</div>`,
          css: ``,
          js: `const branchZone = document.querySelector("#branchZone");\nfunction collectLeaf() { console.log("Collected!"); }\n\n// TODO: Add click event listener to branchZone to run collectLeaf`
        },
        hints: ["Use branchZone.addEventListener(\"click\", collectLeaf);."],
        answer: { js: `branchZone.addEventListener("click", collectLeaf);` }
      }
    ]
  },
  10: {
    title: "The Great Canopy Citadel",
    questions: [
      {
        id: "f10-q1",
        title: "Sorting Foraged Herbs",
        icon: "🌿",
        tags: ["JS"],
        description: "Append data parameters dynamically. Run an array method to inject the string item 'Sage' into the trailing tail slot allocation of the 'herbs' array.",
        xp: 100,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `let herbs = ["Lavender", "Mint"];\n// TODO: Push "Sage" into the herbs array`
        },
        hints: ["Utilize the built-in native mutator operation array function: herbs.push(\"Sage\");."],
        answer: { js: `herbs.push("Sage");` }
      },
      {
        id: "f10-q2",
        title: "Filtering Poisonous Mushrooms",
        icon: "🍄",
        tags: ["JS"],
        description: "Filter out elements based on their values. Create a filtered array called 'safeSparks' by keeping only elements from the 'spores' array that are greater than 0.",
        xp: 100,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `let spores = [4, 0, 9, -1, 7];\n// TODO: Use array.filter() to keep numbers greater than 0 and assign to safeSparks`
        },
        hints: ["Apply: const safeSparks = spores.filter(val => val > 0);."],
        answer: { js: `const safeSparks = spores.filter(val => val > 0);` }
      },
      {
        id: "f10-q3",
        title: "Scanning Tree Rings",
        icon: "📋",
        tags: ["JS"],
        description: "Run a batch iterator action across structural configuration items. Execute the built-in forEach array mechanism to call the function 'logAge' for each item in the data set.",
        xp: 100,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `let rings = [120, 85, 210];\nfunction logAge(r) { console.log("Age: " + r); }\n\n// TODO: Call logAge for each item in the rings array using forEach`
        },
        hints: ["Pass the tracking callback reference directly down: rings.forEach(logAge);."],
        answer: { js: `rings.forEach(logAge);` }
      }
    ]
  }
};