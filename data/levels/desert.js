export default {
  1: {
    title: "The Shifting Sands",
    questions: [
      {
        id: "d1-q1",
        title: "Dune Canvas",
        icon: "🏜️",
        tags: ["HTML"],
        description: "Create a standard main container block to act as the primary dune layer. Assign it the class 'dune'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Create a div element with the class 'dune' -->`, css: `.dune { background: #e3d5ca; height: 100px; width: 100%; border-radius: 50% 50% 0 0; }` },
        hints: ["Use a <div> tag and add class=\"dune\"."],
        answer: { html: `<div class="dune"></div>` }
      },
      {
        id: "d1-q2",
        title: "Caravan Route Text",
        icon: "🐪",
        tags: ["HTML"],
        description: "Mark up an important warning for travelers. Wrap the text 'Beware the mirage' in a semantic emphasis tag.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<p>A sign reads: <!-- TODO: Wrap in an em tag --> Beware the mirage.</p>`, css: `em { color: #d62828; font-style: italic; }` },
        hints: ["Use the semantic <em> tag around the target text."],
        answer: { html: `<p>A sign reads: <em>Beware the mirage</em>.</p>` }
      },
      {
        id: "d1-q3",
        title: "The Oasis Link",
        icon: "💧",
        tags: ["HTML"],
        description: "Create an anchor element that points to the local path '/oasis'. The text must say 'Drink Water'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Create an anchor link pointing to '/oasis' -->`, css: `a { color: #0077b6; text-decoration: underline; }` },
        hints: ["Use an <a> tag and set the href attribute to \"/oasis\"."],
        answer: { html: `<a href="/oasis">Drink Water</a>` }
      }
    ]
  },
  2: {
    title: "The Mirage Ruins",
    questions: [
      {
        id: "d2-q1",
        title: "Ancient Pillar Image",
        icon: "🏛️",
        tags: ["HTML"],
        description: "Display an image of a ruined pillar. Use the source '/pillar.png' and give it an alt text of 'pillar'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Add an img tag with src '/pillar.png' and alt 'pillar' -->`, css: `img { height: 150px; }` },
        hints: ["Ensure your <img> tag has both src and alt attributes."],
        answer: { html: `<img src="/pillar.png" alt="pillar" />` }
      },
      {
        id: "d2-q2",
        title: "Scorpion Trap Button",
        icon: "🦂",
        tags: ["HTML"],
        description: "Create a button element used to spring a trap. It must have the type 'button' and the text 'Spring Trap'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Create a button with type="button" -->`, css: `button { background: #ffb703; border: none; padding: 10px; }` },
        hints: ["Use a <button> tag with the type attribute explicitly defined."],
        answer: { html: `<button type="button">Spring Trap</button>` }
      },
      {
        id: "d2-q3",
        title: "Inventory Checkbox",
        icon: "🎒",
        tags: ["HTML"],
        description: "Create a checkbox input element for the traveler's inventory, checked by default.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Create an input of type checkbox that is checked -->`, css: `input[type="checkbox"] { transform: scale(1.5); }` },
        hints: ["Use an <input> tag with type=\"checkbox\" and the checked attribute."],
        answer: { html: `<input type="checkbox" checked />` }
      }
    ]
  },
  3: {
    title: "Sun-Baked Colors",
    questions: [
      {
        id: "d3-q1",
        title: "Scorching Sun Color",
        icon: "☀️",
        tags: ["CSS"],
        description: "Change the text color of the '.sun-text' class to a bright orange (#f77f00).",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<h2 class="sun-text">Noon Heat</h2>`, css: `.sun-text {\n  /* TODO: Set color to #f77f00 */\n}` },
        hints: ["Use the CSS color property."],
        answer: { css: `.sun-text {\n  color: #f77f00;\n}` }
      },
      {
        id: "d3-q2",
        title: "Sandstone Background",
        icon: "🧱",
        tags: ["CSS"],
        description: "Apply a solid background color to the '.sandstone' block using the hex code #e9c46a.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<div class="sandstone">Wall</div>`, css: `.sandstone {\n  width: 100px;\n  height: 100px;\n  /* TODO: Set background-color to #e9c46a */\n}` },
        hints: ["Use the background-color property inside the ruleset."],
        answer: { css: `.sandstone {\n  width: 100px;\n  height: 100px;\n  background-color: #e9c46a;\n}` }
      },
      {
        id: "d3-q3",
        title: "Cactus Borders",
        icon: "🌵",
        tags: ["CSS"],
        description: "Give the '.cactus' element a solid green (#2a9d8f) border that is 4px thick.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<div class="cactus">Prickly</div>`, css: `.cactus {\n  padding: 10px;\n  /* TODO: Set a 4px solid #2a9d8f border */\n}` },
        hints: ["Use the shorthand border property: border: 4px solid #2a9d8f;."],
        answer: { css: `.cactus {\n  padding: 10px;\n  border: 4px solid #2a9d8f;\n}` }
      }
    ]
  },
  4: {
    title: "The Caravan Flexbox",
    questions: [
      {
        id: "d4-q1",
        title: "Align the Camels",
        icon: "🐪",
        tags: ["CSS"],
        description: "Convert the '.caravan' container to use Flexbox layout to align the camels in a row.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="caravan">\n  <span>🐫</span><span>🐫</span>\n</div>`, css: `.caravan {\n  /* TODO: Set display to flex */\n}` },
        hints: ["Set display: flex;."],
        answer: { css: `.caravan {\n  display: flex;\n}` }
      },
      {
        id: "d4-q2",
        title: "Spacing the Tents",
        icon: "⛺",
        tags: ["CSS"],
        description: "Distribute the tents evenly, pushing the outermost tents to the edges using justify-content.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="campsite">\n  <span>⛺</span><span>⛺</span><span>⛺</span>\n</div>`, css: `.campsite {\n  display: flex;\n  /* TODO: Apply space-between justification */\n}` },
        hints: ["Use justify-content: space-between;."],
        answer: { css: `.campsite {\n  display: flex;\n  justify-content: space-between;\n}` }
      },
      {
        id: "d4-q3",
        title: "Center the Artifact",
        icon: "🏺",
        tags: ["CSS"],
        description: "Center the artifact vertically in the flex container using align-items.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="pedestal">\n  <span>🏺</span>\n</div>`, css: `.pedestal {\n  display: flex;\n  height: 200px;\n  /* TODO: Center items vertically */\n}` },
        hints: ["Use align-items: center;."],
        answer: { css: `.pedestal {\n  display: flex;\n  height: 200px;\n  align-items: center;\n}` }
      }
    ]
  },
  5: {
    title: "Pyramid Grid",
    questions: [
      {
        id: "d5-q1",
        title: "Foundations",
        icon: "📐",
        tags: ["CSS"],
        description: "Turn the '.pyramid-base' into a CSS Grid container.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="pyramid-base">\n  <div>Block</div><div>Block</div>\n</div>`, css: `.pyramid-base {\n  /* TODO: Set display to grid */\n}` },
        hints: ["Set display: grid;."],
        answer: { css: `.pyramid-base {\n  display: grid;\n}` }
      },
      {
        id: "d5-q2",
        title: "Three Column Layout",
        icon: "🧱",
        tags: ["CSS"],
        description: "Define exactly three equal columns for the grid using fractions.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="grid-level">\n  <div>1</div><div>2</div><div>3</div>\n</div>`, css: `.grid-level {\n  display: grid;\n  /* TODO: Create 3 columns of 1fr each */\n}` },
        hints: ["Use grid-template-columns: 1fr 1fr 1fr;."],
        answer: { css: `.grid-level {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}` }
      },
      {
        id: "d5-q3",
        title: "Grid Gap Tunnels",
        icon: "🕳️",
        tags: ["CSS"],
        description: "Create a 20px gap between all grid items in the tomb.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="tomb">\n  <div>Room</div><div>Room</div>\n</div>`, css: `.tomb {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Set gap to 20px */\n}` },
        hints: ["Use gap: 20px;."],
        answer: { css: `.tomb {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}` }
      }
    ]
  },
  6: {
    title: "Sandstorm Responsive",
    questions: [
      {
        id: "d6-q1",
        title: "Mobile Dunes",
        icon: "📱",
        tags: ["CSS"],
        description: "Write a media query for a maximum width of 600px. Inside, change the dune background to dark gray (#333) for a sandstorm effect.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="dune"></div>`, css: `/* TODO: Write a media query for max-width 600px altering .dune */\n` },
        hints: ["@media (max-width: 600px) { .dune { background: #333; } }"],
        answer: { css: `@media (max-width: 600px) {\n  .dune {\n    background: #333;\n  }\n}` }
      },
      {
        id: "d6-q2",
        title: "Stacking Columns",
        icon: "🏛️",
        tags: ["CSS"],
        description: "Inside the provided media query for small screens, change the flex-direction of '.ruins' to column.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="ruins"><span>A</span><span>B</span></div>`, css: `@media (max-width: 500px) {\n  .ruins {\n    /* TODO: Set flex-direction to column */\n  }\n}` },
        hints: ["Add flex-direction: column;."],
        answer: { css: `@media (max-width: 500px) {\n  .ruins {\n    flex-direction: column;\n  }\n}` }
      },
      {
        id: "d6-q3",
        title: "Fluid Sand Width",
        icon: "📏",
        tags: ["CSS"],
        description: "Set the width of '.sand-trap' to span exactly 100% of the viewport width using the 'vw' unit.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="sand-trap"></div>`, css: `.sand-trap {\n  /* TODO: Set width to 100vw */\n  height: 50px;\n}` },
        hints: ["Use width: 100vw;."],
        answer: { css: `.sand-trap {\n  width: 100vw;\n  height: 50px;\n}` }
      }
    ]
  },
  7: {
    title: "Mirage Distortions",
    questions: [
      {
        id: "d7-q1",
        title: "Shimmering Heat",
        icon: "🌫️",
        tags: ["CSS"],
        description: "Apply a CSS blur filter of 5px to the '.heat-wave' element.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="heat-wave">Horizon</div>`, css: `.heat-wave {\n  /* TODO: Apply a 5px blur filter */\n}` },
        hints: ["Use filter: blur(5px);."],
        answer: { css: `.heat-wave {\n  filter: blur(5px);\n}` }
      },
      {
        id: "d7-q2",
        title: "Vulture Hover",
        icon: "🦅",
        tags: ["CSS"],
        description: "Create a smooth transition on the 'transform' property taking 1 second.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="vulture">🦅</div>`, css: `.vulture {\n  /* TODO: Add a 1s transition for transform */\n}\n.vulture:hover { transform: scale(1.5); }` },
        hints: ["Use transition: transform 1s;."],
        answer: { css: `.vulture {\n  transition: transform 1s;\n}\n.vulture:hover { transform: scale(1.5); }` }
      },
      {
        id: "d7-q3",
        title: "Sandstorm Animation",
        icon: "🌪️",
        tags: ["CSS"],
        description: "Apply the 'spin' animation to the '.tornado' element to run infinitely over 2 seconds linearly.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="tornado">🌪️</div>`, css: `.tornado {\n  /* TODO: Attach spin animation, 2s, linear, infinite */\n}\n@keyframes spin { 100% { transform: rotate(360deg); } }` },
        hints: ["Use animation: spin 2s linear infinite;."],
        answer: { css: `.tornado {\n  animation: spin 2s linear infinite;\n}\n@keyframes spin { 100% { transform: rotate(360deg); } }` }
      }
    ]
  },
  8: {
    title: "Oasis Logic",
    questions: [
      {
        id: "d8-q1",
        title: "Water Ration Check",
        icon: "💧",
        tags: ["JS"],
        description: "Write an if statement that sets 'needsWater' to true if 'waterLevel' is less than 10.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `let waterLevel = 5;\nlet needsWater = false;\n// TODO: Set needsWater to true if waterLevel < 10` },
        hints: ["if (waterLevel < 10) { needsWater = true; }"],
        answer: { js: `if (waterLevel < 10) {\n  needsWater = true;\n}` }
      },
      {
        id: "d8-q2",
        title: "Camel Speed Calculation",
        icon: "🐪",
        tags: ["JS"],
        description: "Create a function 'getSpeed' that takes a 'weight' argument and returns 100 minus the weight.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `function getSpeed(weight) {\n  // TODO: Return 100 minus weight\n}` },
        hints: ["return 100 - weight;"],
        answer: { js: `function getSpeed(weight) {\n  return 100 - weight;\n}` }
      },
      {
        id: "d8-q3",
        title: "Temperature Warning",
        icon: "🌡️",
        tags: ["JS"],
        description: "Convert a traditional function into an arrow function 'isTooHot' returning true if temp > 40.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `// TODO: Create const arrow function isTooHot taking 'temp'` },
        hints: ["const isTooHot = (temp) => temp > 40;"],
        answer: { js: `const isTooHot = (temp) => temp > 40;` }
      }
    ]
  },
  9: {
    title: "Tomb Mechanics",
    questions: [
      {
        id: "d9-q1",
        title: "Opening the Sarcophagus",
        icon: "⚰️",
        tags: ["JS"],
        description: "Select the element with id 'lid' and change its text content to 'Opened'.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: `<div id="lid">Closed</div>`, css: ``, js: `const lid = document.getElementById("lid");\n// TODO: Set textContent to "Opened"` },
        hints: ["lid.textContent = \"Opened\";"],
        answer: { js: `lid.textContent = "Opened";` }
      },
      {
        id: "d9-q2",
        title: "Revealing the Trap",
        icon: "🕸️",
        tags: ["JS"],
        description: "Update the inline style of the 'trap' element to display as 'block'.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: `<div id="trap" style="display:none;">Spikes!</div>`, css: ``, js: `const trap = document.getElementById("trap");\n// TODO: Change style.display to "block"` },
        hints: ["trap.style.display = \"block\";"],
        answer: { js: `trap.style.display = "block";` }
      },
      {
        id: "d9-q3",
        title: "Trigger the Switch",
        icon: "🎚️",
        tags: ["JS"],
        description: "Add a click event listener to the 'switchBtn' element that calls the 'openDoor' function.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: `<button id="switchBtn">Pull</button>`, css: ``, js: `const switchBtn = document.getElementById("switchBtn");\nfunction openDoor() { console.log("Open!"); }\n// TODO: Add click event listener to switchBtn` },
        hints: ["switchBtn.addEventListener('click', openDoor);"],
        answer: { js: `switchBtn.addEventListener('click', openDoor);` }
      }
    ]
  },
  10: {
    title: "Pharaoh's Vault",
    questions: [
      {
        id: "d10-q1",
        title: "Stashing Gold",
        icon: "💰",
        tags: ["JS"],
        description: "Use an array method to push the string 'Gold Coin' to the end of the 'loot' array.",
        xp: 250,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `let loot = ["Ruby", "Emerald"];\n// TODO: Push "Gold Coin" to loot` },
        hints: ["loot.push(\"Gold Coin\");"],
        answer: { js: `loot.push("Gold Coin");` }
      },
      {
        id: "d10-q2",
        title: "Filtering Cursed Items",
        icon: "💀",
        tags: ["JS"],
        description: "Use array.filter() to create a 'pureItems' array containing only items greater than 0.",
        xp: 250,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `let artifacts = [5, -2, 10, -1, 3];\n// TODO: Filter items > 0 into const pureItems` },
        hints: ["const pureItems = artifacts.filter(item => item > 0);"],
        answer: { js: `const pureItems = artifacts.filter(item => item > 0);` }
      },
      {
        id: "d10-q3",
        title: "Counting the Gems",
        icon: "💎",
        tags: ["JS"],
        description: "Use the forEach array method on 'gems' to call the 'appraise' function for every item.",
        xp: 250,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `let gems = [100, 500, 250];\nfunction appraise(val) { console.log(val); }\n// TODO: Use forEach on gems to call appraise` },
        hints: ["gems.forEach(appraise);"],
        answer: { js: `gems.forEach(appraise);` }
      }
    ]
  }
};