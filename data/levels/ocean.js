export default {
  1: {
    title: "The Coral Nursery",
    questions: [
      {
        id: "o1-q1",
        title: "Coral Canvas",
        icon: "🪸",
        tags: ["HTML"],
        description: "Create a standard main container block to act as the primary coral reef layer. Assign it the class 'reef'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Create a div element with the class 'reef' -->`, css: `.reef { background: #ff7f50; height: 100px; width: 100%; border-radius: 10px; }` },
        hints: ["Use a <div> tag and add class=\"reef\"."],
        answer: { html: `<div class="reef"></div>` }
      },
      {
        id: "o1-q2",
        title: "Shark Warning",
        icon: "🦈",
        tags: ["HTML"],
        description: "Mark up an important warning for divers. Wrap the text 'Shark spotted' in a semantic strong tag.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<p>Sonar readings indicate: <!-- TODO: Wrap in a strong tag --> Shark spotted.</p>`, css: `strong { color: #d62828; font-weight: bold; }` },
        hints: ["Use the semantic <strong> tag around the target text."],
        answer: { html: `<p>Sonar readings indicate: <strong>Shark spotted</strong>.</p>` }
      },
      {
        id: "o1-q3",
        title: "Surface Link",
        icon: "🌊",
        tags: ["HTML"],
        description: "Create an anchor element that points to the local path '/surface'. The text must say 'Swim Up'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Create an anchor link pointing to '/surface' -->`, css: `a { color: #90e0ef; text-decoration: none; font-weight: bold; }` },
        hints: ["Use an <a> tag and set the href attribute to \"/surface\"."],
        answer: { html: `<a href="/surface">Swim Up</a>` }
      }
    ]
  },
  2: {
    title: "Sunken Treasures",
    questions: [
      {
        id: "o2-q1",
        title: "Sunken Anchor",
        icon: "⚓",
        tags: ["HTML"],
        description: "Display an image of a sunken anchor. Use the source '/anchor.png' and give it an alt text of 'anchor'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Add an img tag with src '/anchor.png' and alt 'anchor' -->`, css: `img { height: 150px; opacity: 0.8; }` },
        hints: ["Ensure your <img> tag has both src and alt attributes."],
        answer: { html: `<img src="/anchor.png" alt="anchor" />` }
      },
      {
        id: "o2-q2",
        title: "Open Chest Button",
        icon: "💰",
        tags: ["HTML"],
        description: "Create a button element used to open a treasure chest. It must have the type 'button' and the text 'Open Chest'.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Create a button with type="button" -->`, css: `button { background: #ffd700; border: none; padding: 10px; border-radius: 5px; }` },
        hints: ["Use a <button> tag with the type attribute explicitly defined."],
        answer: { html: `<button type="button">Open Chest</button>` }
      },
      {
        id: "o2-q3",
        title: "Scuba Gear Checkbox",
        icon: "🤿",
        tags: ["HTML"],
        description: "Create a checkbox input element for checking your oxygen tank, checked by default.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<!-- TODO: Create an input of type checkbox that is checked -->`, css: `input[type="checkbox"] { transform: scale(1.5); accent-color: #0077b6; }` },
        hints: ["Use an <input> tag with type=\"checkbox\" and the checked attribute."],
        answer: { html: `<input type="checkbox" checked />` }
      }
    ]
  },
  3: {
    title: "Deep Sea Colors",
    questions: [
      {
        id: "o3-q1",
        title: "Deep Blue Colors",
        icon: "💧",
        tags: ["CSS"],
        description: "Change the text color of the '.water-text' class to a deep ocean blue (#03045e).",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<h2 class="water-text">Mariana Trench</h2>`, css: `.water-text {\n  /* TODO: Set color to #03045e */\n}` },
        hints: ["Use the CSS color property."],
        answer: { css: `.water-text {\n  color: #03045e;\n}` }
      },
      {
        id: "o3-q2",
        title: "Submarine Hull",
        icon: "🚢",
        tags: ["CSS"],
        description: "Apply a solid background color to the '.submarine' block using the hex code #ffb703.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<div class="submarine">Hull</div>`, css: `.submarine {\n  width: 150px;\n  height: 80px;\n  /* TODO: Set background-color to #ffb703 */\n}` },
        hints: ["Use the background-color property inside the ruleset."],
        answer: { css: `.submarine {\n  width: 150px;\n  height: 80px;\n  background-color: #ffb703;\n}` }
      },
      {
        id: "o3-q3",
        title: "Clam Shell Borders",
        icon: "🐚",
        tags: ["CSS"],
        description: "Give the '.clam' element a solid purple (#7209b7) border that is 5px thick.",
        xp: 100,
        difficulty: "Easy",
        starterCode: { html: `<div class="clam">Pearl Inside</div>`, css: `.clam {\n  padding: 15px;\n  /* TODO: Set a 5px solid #7209b7 border */\n}` },
        hints: ["Use the shorthand border property: border: 5px solid #7209b7;."],
        answer: { css: `.clam {\n  padding: 15px;\n  border: 5px solid #7209b7;\n}` }
      }
    ]
  },
  4: {
    title: "The Kelp Flexbox",
    questions: [
      {
        id: "o4-q1",
        title: "School of Fish",
        icon: "🐟",
        tags: ["CSS"],
        description: "Convert the '.school' container to use Flexbox layout to align the fish in a row.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="school">\n  <span>🐟</span><span>🐟</span>\n</div>`, css: `.school {\n  /* TODO: Set display to flex */\n}` },
        hints: ["Set display: flex;."],
        answer: { css: `.school {\n  display: flex;\n}` }
      },
      {
        id: "o4-q2",
        title: "Spacing the Kelp",
        icon: "🌿",
        tags: ["CSS"],
        description: "Distribute the kelp stalks evenly, spacing them out across the available width using justify-content.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="kelp-forest">\n  <span>🌿</span><span>🌿</span><span>🌿</span>\n</div>`, css: `.kelp-forest {\n  display: flex;\n  /* TODO: Apply space-between justification */\n}` },
        hints: ["Use justify-content: space-between;."],
        answer: { css: `.kelp-forest {\n  display: flex;\n  justify-content: space-between;\n}` }
      },
      {
        id: "o4-q3",
        title: "Center the Treasure",
        icon: "💎",
        tags: ["CSS"],
        description: "Center the sunken treasure vertically in the flex container using align-items.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="seabed">\n  <span>💎</span>\n</div>`, css: `.seabed {\n  display: flex;\n  height: 200px;\n  /* TODO: Center items vertically */\n}` },
        hints: ["Use align-items: center;."],
        answer: { css: `.seabed {\n  display: flex;\n  height: 200px;\n  align-items: center;\n}` }
      }
    ]
  },
  5: {
    title: "Atlantis Grid",
    questions: [
      {
        id: "o5-q1",
        title: "Atlantis Grid",
        icon: "🏛️",
        tags: ["CSS"],
        description: "Turn the '.atlantis-plaza' into a CSS Grid container.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="atlantis-plaza">\n  <div>Statue</div><div>Fountain</div>\n</div>`, css: `.atlantis-plaza {\n  /* TODO: Set display to grid */\n}` },
        hints: ["Set display: grid;."],
        answer: { css: `.atlantis-plaza {\n  display: grid;\n}` }
      },
      {
        id: "o5-q2",
        title: "Three Pillars",
        icon: "🧱",
        tags: ["CSS"],
        description: "Define exactly three equal columns for the underwater temple using fractions.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="temple">\n  <div>Pillar</div><div>Pillar</div><div>Pillar</div>\n</div>`, css: `.temple {\n  display: grid;\n  /* TODO: Create 3 columns of 1fr each */\n}` },
        hints: ["Use grid-template-columns: 1fr 1fr 1fr;."],
        answer: { css: `.temple {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}` }
      },
      {
        id: "o5-q3",
        title: "Trench Gaps",
        icon: "🕳️",
        tags: ["CSS"],
        description: "Create a 15px gap between all grid items in the trench.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="trench">\n  <div>Rock</div><div>Rock</div>\n</div>`, css: `.trench {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  /* TODO: Set gap to 15px */\n}` },
        hints: ["Use gap: 15px;."],
        answer: { css: `.trench {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}` }
      }
    ]
  },
  6: {
    title: "Surface Responsive",
    questions: [
      {
        id: "o6-q1",
        title: "Low Tide Views",
        icon: "📱",
        tags: ["CSS"],
        description: "Write a media query for a maximum width of 600px. Inside, change the background to light blue (#90e0ef) for a shallow water effect.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="tide-pool"></div>`, css: `/* TODO: Write a media query for max-width 600px altering .tide-pool */\n` },
        hints: ["@media (max-width: 600px) { .tide-pool { background: #90e0ef; } }"],
        answer: { css: `@media (max-width: 600px) {\n  .tide-pool {\n    background: #90e0ef;\n  }\n}` }
      },
      {
        id: "o6-q2",
        title: "Stacking the Dock",
        icon: "🛶",
        tags: ["CSS"],
        description: "Inside the provided media query for small screens, change the flex-direction of '.dock' to column.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="dock"><span>Boat 1</span><span>Boat 2</span></div>`, css: `@media (max-width: 500px) {\n  .dock {\n    /* TODO: Set flex-direction to column */\n  }\n}` },
        hints: ["Add flex-direction: column;."],
        answer: { css: `@media (max-width: 500px) {\n  .dock {\n    flex-direction: column;\n  }\n}` }
      },
      {
        id: "o6-q3",
        title: "Infinite Horizon",
        icon: "📏",
        tags: ["CSS"],
        description: "Set the width of '.ocean-surface' to span exactly 100% of the viewport width using the 'vw' unit.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="ocean-surface"></div>`, css: `.ocean-surface {\n  /* TODO: Set width to 100vw */\n  height: 50px;\n}` },
        hints: ["Use width: 100vw;."],
        answer: { css: `.ocean-surface {\n  width: 100vw;\n  height: 50px;\n}` }
      }
    ]
  },
  7: {
    title: "Abyss Distortions",
    questions: [
      {
        id: "o7-q1",
        title: "Murky Depths",
        icon: "🌫️",
        tags: ["CSS"],
        description: "Apply a CSS blur filter of 4px to the '.murky-water' element.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="murky-water">Abyss</div>`, css: `.murky-water {\n  /* TODO: Apply a 4px blur filter */\n}` },
        hints: ["Use filter: blur(4px);."],
        answer: { css: `.murky-water {\n  filter: blur(4px);\n}` }
      },
      {
        id: "o7-q2",
        title: "Jellyfish Glide",
        icon: "🪼",
        tags: ["CSS"],
        description: "Create a smooth transition on the 'transform' property taking 1.5 seconds.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="jellyfish">🪼</div>`, css: `.jellyfish {\n  /* TODO: Add a 1.5s transition for transform */\n}\n.jellyfish:hover { transform: translateY(-20px); }` },
        hints: ["Use transition: transform 1.5s;."],
        answer: { css: `.jellyfish {\n  transition: transform 1.5s;\n}\n.jellyfish:hover { transform: translateY(-20px); }` }
      },
      {
        id: "o7-q3",
        title: "Whirlpool Animation",
        icon: "🌀",
        tags: ["CSS"],
        description: "Apply the 'swirl' animation to the '.whirlpool' element to run infinitely over 3 seconds linearly.",
        xp: 150,
        difficulty: "Medium",
        starterCode: { html: `<div class="whirlpool">🌀</div>`, css: `.whirlpool {\n  /* TODO: Attach swirl animation, 3s, linear, infinite */\n}\n@keyframes swirl { 100% { transform: rotate(-360deg); } }` },
        hints: ["Use animation: swirl 3s linear infinite;."],
        answer: { css: `.whirlpool {\n  animation: swirl 3s linear infinite;\n}\n@keyframes swirl { 100% { transform: rotate(-360deg); } }` }
      }
    ]
  },
  8: {
    title: "Submarine Logic",
    questions: [
      {
        id: "o8-q1",
        title: "Oxygen Check",
        icon: "🫁",
        tags: ["JS"],
        description: "Write an if statement that sets 'critical' to true if 'oxygenLevel' is less than 20.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `let oxygenLevel = 15;\nlet critical = false;\n// TODO: Set critical to true if oxygenLevel < 20` },
        hints: ["if (oxygenLevel < 20) { critical = true; }"],
        answer: { js: `if (oxygenLevel < 20) {\n  critical = true;\n}` }
      },
      {
        id: "o8-q2",
        title: "Pressure Calculator",
        icon: "🗜️",
        tags: ["JS"],
        description: "Create a function 'getPressure' that takes a 'depth' argument and returns the depth multiplied by 10.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `function getPressure(depth) {\n  // TODO: Return depth multiplied by 10\n}` },
        hints: ["return depth * 10;"],
        answer: { js: `function getPressure(depth) {\n  return depth * 10;\n}` }
      },
      {
        id: "o8-q3",
        title: "Crush Depth Warning",
        icon: "⚠️",
        tags: ["JS"],
        description: "Convert a traditional function into an arrow function 'isCrushing' returning true if depth > 500.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `// TODO: Create const arrow function isCrushing taking 'depth'` },
        hints: ["const isCrushing = (depth) => depth > 500;"],
        answer: { js: `const isCrushing = (depth) => depth > 500;` }
      }
    ]
  },
  9: {
    title: "Wreck Mechanics",
    questions: [
      {
        id: "o9-q1",
        title: "Looting the Wreck",
        icon: "📦",
        tags: ["JS"],
        description: "Select the element with id 'chest' and change its text content to 'Empty'.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: `<div id="chest">Full of Gold</div>`, css: ``, js: `const chest = document.getElementById("chest");\n// TODO: Set textContent to "Empty"` },
        hints: ["chest.textContent = \"Empty\";"],
        answer: { js: `chest.textContent = "Empty";` }
      },
      {
        id: "o9-q2",
        title: "Lighting the Flare",
        icon: "✨",
        tags: ["JS"],
        description: "Update the inline style of the 'flare' element to display as 'block'.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: `<div id="flare" style="display:none;">Light!</div>`, css: ``, js: `const flare = document.getElementById("flare");\n// TODO: Change style.display to "block"` },
        hints: ["flare.style.display = \"block\";"],
        answer: { js: `flare.style.display = "block";` }
      },
      {
        id: "o9-q3",
        title: "Ping the Sonar",
        icon: "📡",
        tags: ["JS"],
        description: "Add a click event listener to the 'sonarBtn' element that calls the 'ping' function.",
        xp: 200,
        difficulty: "Hard",
        starterCode: { html: `<button id="sonarBtn">Ping</button>`, css: ``, js: `const sonarBtn = document.getElementById("sonarBtn");\nfunction ping() { console.log("Ping..."); }\n// TODO: Add click event listener to sonarBtn` },
        hints: ["sonarBtn.addEventListener('click', ping);"],
        answer: { js: `sonarBtn.addEventListener('click', ping);` }
      }
    ]
  },
  10: {
    title: "Oceanographer's Log",
    questions: [
      {
        id: "o10-q1",
        title: "Harvesting Pearls",
        icon: "⚪",
        tags: ["JS"],
        description: "Use an array method to push the string 'Black Pearl' to the end of the 'cargo' array.",
        xp: 250,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `let cargo = ["Seashell", "Driftwood"];\n// TODO: Push "Black Pearl" to cargo` },
        hints: ["cargo.push(\"Black Pearl\");"],
        answer: { js: `cargo.push("Black Pearl");` }
      },
      {
        id: "o10-q2",
        title: "Filtering Predators",
        icon: "🦈",
        tags: ["JS"],
        description: "Use array.filter() to create a 'safeFish' array containing only fish objects where isPredator is false.",
        xp: 250,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `let fish = [{name: "Guppy", isPredator: false}, {name: "Shark", isPredator: true}];\n// TODO: Filter where isPredator is false into const safeFish` },
        hints: ["const safeFish = fish.filter(f => f.isPredator === false);"],
        answer: { js: `const safeFish = fish.filter(f => f.isPredator === false);` }
      },
      {
        id: "o10-q3",
        title: "Plotting Coordinates",
        icon: "📍",
        tags: ["JS"],
        description: "Use the forEach array method on 'waypoints' to call the 'plot' function for every coordinate.",
        xp: 250,
        difficulty: "Hard",
        starterCode: { html: ``, css: ``, js: `let waypoints = [10.5, 42.1, -5.3];\nfunction plot(coord) { console.log("Plotting", coord); }\n// TODO: Use forEach on waypoints to call plot` },
        hints: ["waypoints.forEach(plot);"],
        answer: { js: `waypoints.forEach(plot);` }
      }
    ]
  }
};