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
        title: "Balanced Vine Canopy",
        icon: "🌿",
        tags: ["Stack", "Strings"],
        description: "To swing across a forest gorge, you must verify the vine canopy string. Vines are represented by brackets '()[]{}'. A canopy is safe if open vines are closed by matching vine types in the correct order. Return true if safe, false otherwise.",
        xp: 100,
        difficulty: "Easy",
        starterCode: `function isValidVines(vines) {\n  // Write your solution here\n}`,
    examples: [
      {
        input: { vines: "()[]{}" },
        output: true,
        explanation: "All open brackets match and close in proper order."
      },
      {
        input: { vines: "(]" },
        output: false,
        explanation: "Mismatched bracket types."
      }
    ],
    hiddenTestCases: [
      { input: { vines: "{[]}" }, expected: true },
      { input: { vines: "([)]" }, expected: false },
      { input: { vines: "]]]]" }, expected: false }
    ],
    constraints: {
      timeComplexity: "O(N)",
      spaceComplexity: "O(N)",
      inputConstraints: "1 <= vines.length <= 10^4"
    }
  },
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
        title: "Gathering Acorns",
        icon: "🌰",
        tags: ["Arrays", "Sliding Window"],
        description: "A squirrel named Nutty is running along a straight trail with N trees. Each tree i has acorns[i] acorns. Nutty can only harvest acorns from K consecutive trees before getting tired. Return the maximum total number of acorns Nutty can gather.",
        xp: 100,
        difficulty: "Easy",
        starterCode: `function maxAcorns(acorns, k) {\n  // Write your solution here\n}`,
    examples: [
      {
        input: { acorns: [1, 12, -5, -6, 50, 3], k: 4 },
        output: 51,
        explanation: "Subarray [12, -5, -6, 50] yields the maximum consecutive sum of 51."
      },
      {
        input: { acorns: [5], k: 1 },
        output: 5,
        explanation: "Only 1 tree available, so max total is 5."
      }
    ],
    hiddenTestCases: [
      { input: { acorns: [-1, -2, -3, -4], k: 2 }, expected: -3 },
      { input: { acorns: [100, 200, 300, 400], k: 2 }, expected: 700 }
    ],
    constraints: {
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)",
      inputConstraints: "1 <= k <= N <= 10^5, -10^4 <= acorns[i] <= 10^4"
    }
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
        title: "Lone Wolf Tracker",
        icon: "🐺",
        tags: ["Bit Manipulation", "Hash Table"],
        description: "In the forest, wolves travel in pairs sharing the same ID number. Exactly one lone wolf travels alone without a pair. Given an array of wolf IDs, return the ID of the lone wolf.",
        xp: 100,
        difficulty: "Easy",
        starterCode: `function singleWolf(wolves) {\n  // Write your solution here\n}`,
        examples: [
      {
        input: { wolves: [2, 2, 1] },
        output: 1,
        explanation: "ID 2 appears twice, while ID 1 is alone."
      },
      {
        input: { wolves: [4, 1, 2, 1, 2] },
        output: 4,
        explanation: "ID 4 appears once."
      }
    ],
    hiddenTestCases: [
      { input: { wolves: [99] }, expected: 99 },
      { input: { wolves: [-1, 5, -1, 3, 5] }, expected: 3 }
    ],
    constraints: {
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)",
      inputConstraints: "1 <= wolves.length <= 3 * 10^4"
    }
  }, 
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
        title: "Highest Branch Distance",
        icon: "🌲",
        tags: ["Trees", "DFS"],
        description: "You encounter a giant Redwood represented as a binary tree. The canopy span is defined as the length of the longest path between any two branch nodes (measured in number of edges). Return the canopy span length.",
        xp: 100,
        difficulty: "Medium",
        starterCode: `function diameterOfTree(root) {\n  // Write your solution here\n}`,
    examples: [
      {
        input: { root: [1, 2, 3, 4, 5] },
        output: 3,
        explanation: "Longest edge path is between leaf node 4 and leaf node 3."
      }
    ],
    hiddenTestCases: [
      { input: { root: [1] }, expected: 0 },
      { input: { root: [1, 2, null, 3, null, 4] }, expected: 3 }
    ],
    constraints: {
      timeComplexity: "O(N)",
      spaceComplexity: "O(H)",
      inputConstraints: "1 <= Tree Nodes <= 10^4"
    }
  },
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
        title: "River Log Hopping",
        icon: "🪵",
        tags: ["Greedy", "Dynamic Programming"],
        description: "You must cross a roaring river by jumping on a row of floating logs. logs[i] represents your maximum jump length from log i. Return the minimum number of jumps needed to reach the last log.",
        xp: 100,
        difficulty: "Medium",
        starterCode: `function minJumps(logs) {\n  // Write your solution here\n}`,
    examples: [
      {
        input: { logs: [2, 3, 1, 1, 4] },
        output: 2,
        explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last log."
      }
    ],
    hiddenTestCases: [
      { input: { logs: [1, 1, 1, 1] }, expected: 3 },
      { input: { logs: [10, 1, 1, 1, 1] }, expected: 1 }
    ],
    constraints: {
      timeComplexity: "O(N)",
      spaceComplexity: "O(1)",
      inputConstraints: "1 <= logs.length <= 10^4"
    }
  },
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
        title: "Forest Clearing Explporations",
        icon: "🗺️",
        tags:["BFS", "DFS", "Matrix"],
        description:"A 2D map represents the forest grid with '1's (dry forest clearings) and '0's (impassable mud). Adjacent land cells horizontally or vertically form connected clearings. Return the total number of distinct clearings.",
        xp: 100,
        difficulty: "Medium",
        starterCode: `function numClearings(grid) {\n  // Write your solution here\n}`,
    examples: [
      {
        input: {
          grid: [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]
          ]
        },
        output: 1,
        explanation: "All dry land cells connect into a single forest clearing."
      }
    ],
    hiddenTestCases: [
      { input: { grid: [["0","0"],["0","0"]] }, expected: 0 },
      { input: { grid: [["1","0","1"],["0","1","0"],["1","0","1"]] }, expected: 5 }
    ],
    constraints: {
      timeComplexity: "O(M * N)",
      spaceComplexity: "O(M * N)",
      inputConstraints: "1 <= M, N <= 300"
    }
  },
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
        title: "Lumberjack's Saw Height",
        icon: "🪓",
        tags: ["Binary Search"],
        description: "Given an array of tree heights, a saw blade height H cuts off the tops of trees taller than H. Find the maximum integer saw height H that harvests at least K total units of wood.",
        xp: 150,
        difficulty: "Medium",
        starterCode: `function maxSawHeight(trees, k) {\n  // Write your solution here\n}`,
    examples: [
      {
        input: { trees: [20, 15, 10, 17], k: 7 },
        output: 15,
        explanation: "Height 15 cuts (20-15)=5 and (17-15)=2 units of wood for 7 total."
      }
    ],
    hiddenTestCases: [
      { input: { trees: [10, 20, 30], k: 60 }, expected: 0 },
      { input: { trees: [100], k: 10 }, expected: 90 }
    ],
    constraints: {
      timeComplexity: "O(N * log(max(trees)))",
      spaceComplexity: "O(1)",
      inputConstraints: "1 <= N <= 10^5, 1 <= K <= 2 * 10^9"
    }
  },
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
        title: "Connecting Ancient Tree Roots",
        icon: "🕸️",
        tags: ["Graph", "MST", "Union-Find"],
        description: "Given 2D coordinates of ancient trees, the cost to connect tree i and j is their Manhattan distance |xi - xj| + |yi - yj|. Return the minimum cost to make all trees connected.",
        xp: 200,
        difficulty: "Hard",
        starterCode: `function minCostToConnect(trees) {\n  // Write your solution here\n}`,
    examples: [
      {
        input: { trees: [[0,0],[2,2],[3,10],[5,2],[7,0]] },
        output: 20,
        explanation: "Connecting all trees into a minimum spanning tree costs 20 units."
      }
    ],
    hiddenTestCases: [
      { input: { trees: [[0,0]] }, expected: 0 },
      { input: { trees: [[0,0],[1,1],[1,0],[-1,1]] }, expected: 4 }
    ],
    constraints: {
      timeComplexity: "O(N^2)",
      spaceComplexity: "O(N)",
      inputConstraints: "1 <= trees.length <= 1000"
    }
  },
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
        title: "Forest Fire Spread",
        icon: "🔥",
        tags: ["BFS", "Graph", "Matrix"],
        description: "An M x N grid has cells: 0 (empty), 1 (tree), 2 (burning tree). Every minute, burning trees ignite adjacent healthy trees. Return the minimum minutes until no healthy trees remain, or -1 if impossible.",
        xp: 200,
        difficulty: "Hard",
        starterCode: `function minMinutesToBurn(grid) {\n  // Write your solution here\n}`,
    examples: [
      {
        input: {
          grid: [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1]
          ]
        },
        output: 4,
        explanation: "Fire spreads completely across 4 minutes."
      }
    ],
    hiddenTestCases: [
      { input: { grid: [[0, 2]] }, expected: 0 },
      { input: { grid: [[1]] }, expected: -1 }
    ],
    constraints: {
      timeComplexity: "O(M * N)",
      spaceComplexity: "O(M * N)",
      inputConstraints: "1 <= M, N <= 100"
    }
  },
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
        title: "Mystic Waterfall Energy Path",
        icon: "🌊",
        tags:["Dynamic Programming", "Matrix"],
        description:"Descending an M x N waterfall grid to (M-1, N-1), moving only Right or Down. Cells contain positive health boosts or negative toxic traps. Return the minimum initial health (> 0) required at (0,0) to stay alive.",
        xp: 100,
        difficulty: "Hard",
        starterCode: `function calculateMinimumHP(grid) {\n  // Write your solution here\n}`,
    examples: [
      {
        input: {
          grid: [
            [-2, -3, 3],
            [-5, -10, 1],
            [10, 30, -5]
          ]
        },
        output: 7,
        explanation: "Path RIGHT -> RIGHT -> DOWN -> DOWN requires starting health of 7."
      }
    ],
    hiddenTestCases: [
      { input: { grid: [[10]] }, expected: 1 },
      { input: { grid: [[-10]] }, expected: 11 },
      {
        input: {
          grid: [
            [1, -3, 3],
            [0, -2, 0],
            [-3, -3, -3]
          ]
        },
        expected: 3
      }
    ],
    constraints: {
      timeComplexity: "O(M * N)",
      spaceComplexity: "O(M * N)",
      inputConstraints: "1 <= M, N <= 200, -1000 <= grid[i][j] <= 1000"
    }
  }
    ]
  }
};