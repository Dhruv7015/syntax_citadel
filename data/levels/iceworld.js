export default {
  1: {
    title: "The Frozen Outpost",
    questions: [
      {
        id: "i1-q1",
        title: "Carving Ice Blocks",
        icon: "🧱",
        tags: ["HTML"],
        description: "Create an image element displaying an ice brick. Give it a source of '/ice-block.png' and uniquely identify it with the id 'glacier-brick'.",
        xp: 400,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Render the ice block image with its unique ID and source -->`,
          css: `#glacier-brick { width: 60px; height: 60px; opacity: 0.9; }`
        },
        hints: ["Use the <img> tag and include both the 'id' and 'src' attributes correctly."],
        answer: { html: `<img id="glacier-brick" src="/ice-block.png" />` }
      },
      {
        id: "i1-q2",
        title: "Thermal Radiator Output",
        icon: "🔥",
        tags: ["HTML"],
        description: "Mark up text detailing your radiator's vital heat output. Emphasize the text 'CRITICAL LEVEL' so it stands out strongly as important text.",
        xp: 400,
        difficulty: "Easy",
        starterCode: {
          html: `<p>Warning: System heat is running at a <!-- TODO: Wrap the next words in a strong emphasis tag --> CRITICAL LEVEL.</p>`,
          css: `strong { color: #ff4d4d; }`
        },
        hints: ["Use the semantic <strong> tags around the target text block."],
        answer: { html: `<p>Warning: System heat is running at a <strong>CRITICAL LEVEL</strong>.</p>` }
      },
      {
        id: "i1-q3",
        title: "Survival Manual Button",
        icon: "📖",
        tags: ["HTML"],
        description: "Create a functional user interface button element. The button text must say 'Open Manual' and it must trigger a disabled state natively.",
        xp: 400,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Create a disabled button containing the text 'Open Manual' -->`,
          css: `button:disabled { opacity: 0.5; cursor: not-allowed; }`
        },
        hints: ["Use a <button> tag and append the Boolean keyword attribute disabled inside the tag wrapper."],
        answer: { html: `<button disabled>Open Manual</button>` }
      }
    ]
  },
  2: {
    title: "Glacier Ridge",
    questions: [
      {
        id: "i2-q1",
        title: "Frostbite Alert Audio",
        icon: "🔊",
        tags: ["HTML"],
        description: "Add an audio alert element that resource streams '/blizzard.mp3'. Ensure the browser native player controls interface is rendered.",
        xp: 400,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Add an audio element with native browser playback controls -->`,
          css: `audio { width: 100%; }`
        },
        hints: ["Use the <audio> tag accompanied by the src and controls attributes."],
        answer: { html: `<audio src="/blizzard.mp3" controls></audio>` }
      },
      {
        id: "i2-q2",
        title: "The Expedition Data Table",
        icon: "📊",
        tags: ["HTML"],
        description: "Set up the basic foundation structure for a table. Build a single table row (tr) that contains two header cells (th): 'Item' and 'Weight'.",
        xp: 400,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Insert a single table row with two header cells -->`,
          css: `table { width: 100%; border-collapse: collapse; }\nth { background: #0077b6; color: white; }`
        },
        hints: ["Wrap a <tr> element around two separate <th> columns."],
        answer: { html: `<tr>\n  <th>Item</th>\n  <th>Weight</th>\n</tr>` }
      },
      {
        id: "i2-q3",
        title: "Shelter Sign-Up Form",
        icon: "📝",
        tags: ["HTML"],
        description: "Construct a numeric configuration input element. Set its type to accept numbers, configure a minimum input boundary value of 1, and set a current fallback value of 1.",
        xp: 400,
        difficulty: "Easy",
        starterCode: {
          html: `<!-- TODO: Create a numeric input for shelter occupants -->`,
          css: `input[type="number"] { width: 60px; text-align: center; }`
        },
        hints: ["Assign type=\"number\", min=\"1\", and value=\"1\" onto the target input marker."],
        answer: { html: `<input type="number" min="1" value="1" />` }
      }
    ]
  },
  3: {
    title: "The Shivering Chasm",
    questions: [
      {
        id: "i3-q1",
        title: "Ice Crystal Fonts",
        icon: "🔤",
        tags: ["CSS"],
        description: "Apply clear font attributes to your terminal screen text. Update the class to use a 'monospace' font family fallback and set the font-size to 18px.",
        xp: 400,
        difficulty: "Easy",
        starterCode: {
          html: `<div class="terminal">System Booting...</div>`,
          css: `.terminal {\n  /* TODO: Apply monospace font family and 18px size */\n}`
        },
        hints: ["Set font-family: monospace; and font-size: 18px; inside the block ruleset."],
        answer: { css: `.terminal {\n  font-family: monospace;\n  font-size: 18px;\n}` }
      },
      {
        id: "i3-q2",
        title: "Glacial Blue Gradient",
        icon: "🎨",
        tags: ["CSS"],
        description: "Construct a smooth backdrop fill transition. Add a linear gradient background heading from top to bottom, blending color #00b4d8 into #0077b6.",
        xp: 400,
        difficulty: "Easy",
        starterCode: {
          html: `<div class="ice-wall"></div>`,
          css: `.ice-wall {\n  width: 100%;\n  height: 100px;\n  /* TODO: Set linear-gradient from #00b4d8 to #0077b6 */\n}`
        },
        hints: ["Assign background: linear-gradient(#00b4d8, #0077b6);."],
        answer: { css: `.ice-wall {\n  width: 100%;\n  height: 100px;\n  background: linear-gradient(#00b4d8, #0077b6);\n}` }
      },
      {
        id: "i3-q3",
        title: "Frosty Padding",
        icon: "📦",
        tags: ["CSS"],
        description: "Isolate inner content boxes from the structural frozen borders. Configure the uniform inside padding to exactly 20px on all 4 directions.",
        xp: 400,
        difficulty: "Easy",
        starterCode: {
          html: `<div class="supply-crate">Crate Contents</div>`,
          css: `.supply-crate {\n  border: 4px solid #caf0f8;\n  /* TODO: Set all-around padding to 20px */\n}`
        },
        hints: ["Use the shorthand padding: 20px; statement property ruleset."],
        answer: { css: `.supply-crate {\n  border: 4px solid #caf0f8;\n  padding: 20px;\n}` }
      }
    ]
  },
  4: {
    title: "Crystal Caverns",
    questions: [
      {
        id: "i4-q1",
        title: "Initializing the Ice Grid",
        icon: "🕸️",
        tags: ["CSS"],
        description: "Initialize the crystalline lattice architecture layout engine. Set the container's layout model type to CSS Grid explicitly.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="lattice">\n  <div>💎</div>\n  <div>💎</div>\n</div>`,
          css: `.lattice {\n  /* TODO: Convert this container into a CSS Grid context */\n}`
        },
        hints: ["Apply the structural layout generator command value: display: grid;."],
        answer: { css: `.lattice {\n  display: grid;\n}` }
      },
      {
        id: "i4-q2",
        title: "The Twin Bridge Columns",
        icon: "🌉",
        tags: ["CSS"],
        description: "Carve out two columns for your ice bridge. Configure them to be side-by-side, each taking up exactly 1 fractional unit (1fr) of space.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="bridge">\n  <div>Left</div>\n  <div>Right</div>\n</div>`,
          css: `.bridge {\n  display: grid;\n  /* TODO: Establish 2 equal columns using 1fr each */\n}`
        },
        hints: ["Use the property key statement: grid-template-columns: 1fr 1fr;."],
        answer: { css: `.bridge {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}` }
      },
      {
        id: "i4-q3",
        title: "Spacing the Stalactites",
        icon: "💎",
        tags: ["CSS"],
        description: "Maintain a safe gap inside the crystal array grid layout. Introduce exactly 15px of space between all adjacent items.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="crystal-grid">\n  <div>🔺</div><div>🔺</div>\n</div>`,
          css: `.crystal-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Add a 15px grid gap */\n}`
        },
        hints: ["Use the standard alignment keyword layout property: gap: 15px;."],
        answer: { css: `.crystal-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}` }
      }
    ]
  },
  5: {
    title: "The Avalanche Pass",
    questions: [
      {
        id: "i5-q1",
        title: "Wrapping the Supply Boxes",
        icon: "📦",
        tags: ["CSS"],
        description: "Too many supply boxes are creating horizontal overflows. Force the flex items to wrap down into multi-line rows naturally.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="depot">\n  <div>📦</div><div>📦</div>\n</div>`,
          css: `.depot {\n  display: flex;\n  /* TODO: Allow flex items to wrap onto multiple lines */\n}`
        },
        hints: ["Use flex-wrap: wrap; to handle structural container row overflows safely."],
        answer: { css: `.depot {\n  display: flex;\n  flex-wrap: wrap;\n}` }
      },
      {
        id: "i5-q2",
        title: "Shifting Snow Floes",
        icon: "❄️",
        tags: ["CSS"],
        description: "Re-orient the primary alignment direction axes for the ice sheets. Force them to layout vertically as a column from top to bottom.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="ice-flow">\n  <span>Floe 1</span>\n  <span>Floe 2</span>\n</div>`,
          css: `.ice-flow {\n  display: flex;\n  /* TODO: Change flex direction to stack items vertically */\n}`
        },
        hints: ["Configure the flex axis direction rule to: flex-direction: column;."],
        answer: { css: `.ice-flow {\n  display: flex;\n  flex-direction: column;\n}` }
      },
      {
        id: "i5-q3",
        title: "The Hidden Igloo Trap",
        icon: "⚠️",
        tags: ["CSS"],
        description: "Completely hide the dangerous trapbox element from visibility layout without destroying the document spacing dimensions layout footprint.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="path">\n  <div class="trap">⚠️ Trap</div>\n</div>`,
          css: `.trap {\n  background: red;\n  /* TODO: Hide the element while keeping its space occupied */\n}`
        },
        hints: ["To keep space occupied but hide visual visibility rendering completely, use visibility: hidden;."],
        answer: { css: `.trap {\n  background: red;\n  visibility: hidden;\n}` }
      }
    ]
  },
  6: {
    title: "Aurora Heights",
    questions: [
      {
        id: "i6-q1",
        title: "Sub-Zero Responsiveness",
        icon: "📱",
        tags: ["CSS"],
        description: "Write a media query structure targeting viewport screen dimensions. Establish a breakpoint targeting maximum widths of 768px.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="panel">Control UI</div>`,
          css: `/* TODO: Create a media query for max-width 768px, and within it, set .panel background to #000 */\n`
        },
        hints: ["Write out the syntax block rules: @media (max-width: 768px) { .panel { background: #000; } }."],
        answer: { css: `@media (max-width: 768px) {\n  .panel {\n    background: #000;\n  }\n}` }
      },
      {
        id: "i6-q2",
        title: "Responsive Ice Shelves",
        icon: "🖥️",
        tags: ["CSS"],
        description: "Adjust the layout for small screens. Inside the provided media query, switch the `.shelf` component to display as a full-width block element.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="shelf">Shelf Element</div>`,
          css: `@media (max-width: 480px) {\n  .shelf {\n    /* TODO: Overwrite to block layout display */\n  }\n}`
        },
        hints: ["Inside the nested media block section context structure apply: display: block;."],
        answer: { css: `@media (max-width: 480px) {\n  .shelf {\n    display: block;\n  }\n}` }
      },
      {
        id: "i6-q3",
        title: "Dynamic Frost Units",
        icon: "📐",
        tags: ["CSS"],
        description: "Make the core structural text size adapt dynamically to the global viewport frame size. Set the text font-size to exactly 5% of the total viewport width (vw).",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<h2 class="aurora-title">Northern Lights</h2>`,
          css: `.aurora-title {\n  /* TODO: Set font size to 5% of the viewport width */\n}`
        },
        hints: ["Use the fluid viewport width responsive scale metric sizing property option: font-size: 5vw;."],
        answer: { css: `.aurora-title {\n  font-size: 5vw;\n}` }
      }
    ]
  },
  7: {
    title: "The Borealis Spires",
    questions: [
      {
        id: "i7-q1",
        title: "Shimmering Aurora Glow",
        icon: "✨",
        tags: ["CSS"],
        description: "Blur out the harsh edges of the colorful sky element. Apply a native filter effect that creates a 10px blur on the component.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="aurora-sky"></div>`,
          css: `.aurora-sky {\n  background: #52b788;\n  /* TODO: Apply a 10px blur filter effect */\n}`
        },
        hints: ["Use CSS filters: filter: blur(10px);."],
        answer: { css: `.aurora-sky {\n  background: #52b788;\n  filter: blur(10px);\n}` }
      },
      {
        id: "i7-q2",
        title: "Sliding Ice Sheet",
        icon: "🛹",
        tags: ["CSS"],
        description: "Smooth out position transitions. Set a transition rule on the 'left' style property that takes exactly 0.5 seconds with an 'ease-out' timing function.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="ice-sheet"></div>`,
          css: `.ice-sheet {\n  position: absolute;\n  left: 0;\n  /* TODO: Add a 0.5s ease-out transition tracking the left property */\n}`
        },
        hints: ["Use the transition property structure: transition: left 0.5s ease-out;."],
        answer: { css: `.ice-sheet {\n  position: absolute;\n  left: 0;\n  transition: left 0.5s ease-out;\n}` }
      },
      {
        id: "i7-q3",
        title: "Pulsing Blizzard Warning",
        icon: "🚨",
        tags: ["CSS"],
        description: "Wire up the loop engine mechanics for an emergency warning system light. Set the animation duration to 1.5 seconds, running an infinite linear loop.",
        xp: 550,
        difficulty: "Medium",
        starterCode: {
          html: `<div class="beacon">🚨</div>`,
          css: `.beacon {\n  /* TODO: Attach the pulse animation: 1.5s duration, linear, infinite */\n}\n@keyframes pulse {\n  0% { opacity: 0.3; }\n  50% { opacity: 1.0; }\n  100% { opacity: 0.3; }\n}`
        },
        hints: ["Use animation: pulse 1.5s linear infinite;."],
        answer: { css: `.beacon {\n  animation: pulse 1.5s linear infinite;\n}\n@keyframes pulse {\n  0% { opacity: 0.3; }\n  50% { opacity: 1.0; }\n  100% { opacity: 0.3; }\n}` }
      }
    ]
  },
  8: {
    title: "The Frost Smithy",
    questions: [
      {
        id: "i8-q1",
        title: "The Freezing Point Check",
        icon: "🌡️",
        tags: ["JS"],
        description: "Evaluate current outdoor climate metrics. Write a conditional evaluation block that sets the variable 'isFrozen' to true if 'temperature' is less than or equal to 0.",
        xp: 700,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `let temperature = -4;\nlet isFrozen = false;\n\n// TODO: If temperature is <= 0, set isFrozen to true`
        },
        hints: ["Use the syntax: if (temperature <= 0) { isFrozen = true; }."],
        answer: { js: `if (temperature <= 0) {\n  isFrozen = true;\n}` }
      },
      {
        id: "i8-q2",
        title: "Calculating Shelter Heat",
        icon: "🧮",
        tags: ["JS"],
        description: "Write a standard JavaScript calculation handler routine. Return the total generated warmth by multiplying an input 'heaterCount' variable argument by 25.",
        xp: 700,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `function calculateWarmth(heaterCount) {\n  /* TODO: Return heaterCount multiplied by 25 */\n}`
        },
        hints: ["Use the multiplication operator inside the function: return heaterCount * 25;."],
        answer: { js: `function calculateWarmth(heaterCount) {\n  return heaterCount * 25;\n}` }
      },
      {
        id: "i8-q3",
        title: "The Ice Shard Multiplier",
        icon: "✖️",
        tags: ["JS"],
        description: "Refactor your logic tools using modern ES6 structures. Convert the standard functional math engine routine into an explicit arrow function assignment.",
        xp: 700,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `// TODO: Create an arrow function named 'doubleShards' that accepts 'x' and returns x * 2`
        },
        hints: ["Use arrow function shorthand syntax: const doubleShards = (x) => x * 2;."],
        answer: { js: `const doubleShards = (x) => x * 2;` }
      }
    ]
  },
  9: {
    title: "The Sub-Zero Vault",
    questions: [
      {
        id: "i9-q1",
        title: "Altering the Ice Sculpture",
        icon: "🗿",
        tags: ["JS"],
        description: "Manipulate DOM structures in real time. Update the text content property string value of the selected element node '#sculpture' to read 'Thawed'.",
        xp: 700,
        difficulty: "Hard",
        starterCode: {
          html: `<div id="sculpture">Frozen Solid</div>`,
          css: ``,
          js: `const item = document.querySelector("#sculpture");\n// TODO: Change its textContent to "Thawed"`
        },
        hints: ["Assign the text string to the textContent property directly: item.textContent = \"Thawed\";."],
        answer: { js: `item.textContent = "Thawed";` }
      },
      {
        id: "i9-q2",
        title: "Thawing the Vault Door",
        icon: "🚪",
        tags: ["JS"],
        description: "Directly manipulate the inline style parameters. Set the target element object node's CSS display configuration property mode string value to 'none'.",
        xp: 700,
        difficulty: "Hard",
        starterCode: {
          html: `<div id="ice-wall">🧱</div>`,
          css: ``,
          js: `const wall = document.querySelector("#ice-wall");\n// TODO: Modify the element style display property to hide it using "none"`
        },
        hints: ["Target the style mapping layer parameter: wall.style.display = \"none\";."],
        answer: { js: `wall.style.display = "none";` }
      },
      {
        id: "i9-q3",
        title: "Catching the Falling Icicle",
        icon: "🎯",
        tags: ["JS"],
        description: "Intercept real-time interactive framework action events. Hook a native pointer 'click' event listener onto the canvas node variable 'targetZone' to call 'saveItem'.",
        xp: 700,
        difficulty: "Hard",
        starterCode: {
          html: `<div id="targetZone">🎯</div>`,
          css: ``,
          js: `const targetZone = document.querySelector("#targetZone");\nfunction saveItem() { console.log("Caught!"); }\n\n// TODO: Add click event listener to targetZone to run saveItem`
        },
        hints: ["Use targetZone.addEventListener(\"click\", saveItem);."],
        answer: { js: `targetZone.addEventListener("click", saveItem);` }
      }
    ]
  },
  10: {
    title: "The Citadel of Ice",
    questions: [
      {
        id: "i10-q1",
        title: "Sorting Crystal Shards",
        icon: "💎",
        tags: ["JS"],
        description: "Append data parameters dynamically. Run an array method to inject the string item 'Amethyst' into the trailing tail slot allocation of the 'inventory' array.",
        xp: 900,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `let inventory = ["Ruby", "Sapphire"];\n// TODO: Push "Amethyst" into the inventory array`
        },
        hints: ["Utilize the built-in native mutator operation array function: inventory.push(\"Amethyst\");."],
        answer: { js: `inventory.push("Amethyst");` }
      },
      {
        id: "i10-q2",
        title: "Filtering Out Melted Cubes",
        icon: "🧊",
        tags: ["JS"],
        description: "Filter out elements based on their values. Create a filtered array called 'solidCubes' by keeping only elements from the 'iceCubes' array that are greater than 0.",
        xp: 900,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `let iceCubes = [5, 0, 12, -2, 8];\n// TODO: Use array.filter() to keep numbers greater than 0 and assign to solidCubes`
        },
        hints: ["Apply: const solidCubes = iceCubes.filter(val => val > 0);."],
        answer: { js: `const solidCubes = iceCubes.filter(val => val > 0);` }
      },
      {
        id: "i10-q3",
        title: "Scanning Frost Records",
        icon: "📋",
        tags: ["JS"],
        description: "Run a batch iterator action across structural configuration items. Execute the built-in forEach array mechanism to call the function 'logTemp' for each item in the data set.",
        xp: 900,
        difficulty: "Hard",
        starterCode: {
          html: ``,
          css: ``,
          js: `let log = [-10, -14, -8];\nfunction logTemp(t) { console.log("Recorded: " + t); }\n\n// TODO: Call logTemp for each item in the log array using forEach`
        },
        hints: ["Pass the tracking callback reference directly down: log.forEach(logTemp);."],
        answer: { js: `log.forEach(logTemp);` }
      }
    ]
  }
};