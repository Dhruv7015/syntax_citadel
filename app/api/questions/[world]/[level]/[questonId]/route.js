import { NextResponse } from 'next/server';

const WORLD_DATABASE = {
  justifyjungle: {
    // ==========================================
    // LEVEL 1: JUSTIFY JUNGLE (justify-content)
    // ==========================================
    level_1: {
      round_1: {
        title: "🌴 Lvl 1 - Rd 1: Canopy Monkey Alignment",
        type: "webdev",
        desc: "A troop of monkeys needs to cross a dangerous chasm in the jungle. Currently, they are clumped up on the far left side, causing the tree branch to tilt hazardously.",
        instructions: "Spread the monkeys evenly across the horizontal axis of the branch with equal space around each of them to stabilize the balance.",
        visualType: "flexbox-jungle",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.canopy-branch {\n  display: flex;\n  flex-direction: row;\n  /* Align elements with equal space around them */\n  justify-content: space-around;\n}` },
        testCases: [{ input: "justify-content: space-around", expected: true }]
      },
      round_2: {
        title: "🌴 Lvl 1 - Rd 2: Ancient Ruins Corridor",
        type: "webdev",
        desc: "You have arrived at the temple gate. Two stone pillars must be pushed away from the center to flush flat against the left and right walls to trigger the door pressure plates.",
        instructions: "Align the elements so that the first pillar is on the far-left edge and the last pillar is on the far-right edge, leaving equal space between them.",
        visualType: "flexbox-jungle",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.temple-gate {\n  display: flex;\n  /* Distribute items evenly from edge to edge */\n  justify-content: space-between;\n}` },
        testCases: [{ input: "justify-content: space-between", expected: true }]
      },
      round_3: {
        title: "⚡ Lvl 1 - Rd 3: Jungle Energy Core (DSA)",
        type: "dsa",
        desc: "The ancient temple power grid is powered by kinetic crystals. To activate the gate, you must sum up all individual energy frequencies.",
        instructions: "Complete the function code to calculate and return the total numerical sum of all data array coordinates values.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function calculateJungleEnergy(crystals) {\n    let total = 0;\n    for(let i = 0; i < crystals.length; i++) {\n        total += crystals[i];\n    }\n    return total;\n}`,
          python: `def calculate_jungle_energy(crystals):\n    return sum(crystals)`,
          cpp: `int calculateJungleEnergy(vector<int> crystals) {\n    int sum = 0;\n    for(int n : crystals) sum += n;\n    return sum;\n}`
        },
        testCases: [
          { input: [45, 12, 85, 30], expected: 172 },
          { input: [10, 20, 30], expected: 60 }
        ]
      }
    },

    // ==========================================
    // LEVEL 2: ALIGN AMAZON (align-items)
    // ==========================================
    level_2: {
      round_1: {
        title: "🐅 Lvl 2 - Rd 1: River Jaguar Leap",
        type: "webdev",
        desc: "Jaguars are attempting to cross a rapid river on logs. They are all hovering at different heights along the vertical axis, missing their landing points.",
        instructions: "Vertically center all elements inside the container layout structure along the cross-axis.",
        visualType: "align-amazon",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.river-logs {\n  display: flex;\n  /* Vertically align all cross-axis child items to the middle */\n  align-items: center;\n}` },
        testCases: [{ input: "align-items: center", expected: true }]
      },
      round_2: {
        title: "🐅 Lvl 2 - Rd 2: Low-Hanging Vines",
        type: "webdev",
        desc: "Gathering bots need to crawl across the swamp base floor line. Currently, they are stuck floating at the top ceiling boundary layer.",
        instructions: "Align all flex containers items to line up cleanly against the absolute bottom edge of the cross-axis.",
        visualType: "align-amazon",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.swamp-floor {\n  display: flex;\n  /* Force items to align to the end of the cross axis */\n  align-items: flex-end;\n}` },
        testCases: [{ input: "align-items: flex-end", expected: true }]
      },
      round_3: {
        title: "⚡ Lvl 2 - Rd 3: Amazon Altitude Peak (DSA)",
        type: "dsa",
        desc: "Drone scanners are measuring the dense jungle mountain terrain altitude sequence arrays. Find the single highest apex peak coordinate.",
        instructions: "Write an algorithm that evaluates an array of integers and returns the absolute maximum integer value.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function findMaxPeak(altitudes) {\n    return Math.max(...altitudes);\n}`,
          python: `def find_max_peak(altitudes):\n    return max(altitudes)`,
          cpp: `int findMaxPeak(vector<int> altitudes) {\n    int maxVal = altitudes[0];\n    for(int a : altitudes) if(a > maxVal) maxVal = a;\n    return maxVal;\n}`
        },
        testCases: [
          { input: [120, 450, 310, 89], expected: 450 },
          { input: [5, 12, 2], expected: 12 }
        ]
      }
    },

    // ==========================================
    // LEVEL 3: FLEX-DIRECTION DEEPWOODS (flex-direction)
    // ==========================================
    level_3: {
      round_1: {
        title: "🌲 Lvl 3 - Rd 1: Redwood Treehouse Stack",
        type: "webdev",
        desc: "The local forest research capsules are spawning in a horizontal line, but they must be stacked vertically like a high-rise treehouse.",
        instructions: "Change the primary main axis direction layout to run vertically from top to bottom.",
        visualType: "flexbox-deepwoods",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.redwood-modules {\n  display: flex;\n  /* Direct elements to flow inside a single vertical column block */\n  flex-direction: column;\n}` },
        testCases: [{ input: "flex-direction: column", expected: true }]
      },
      round_2: {
        title: "🌲 Lvl 3 - Rd 2: Reversed Ant Trails",
        type: "webdev",
        desc: "Jungle worker ants are carrying food units horizontally, but the queue must be reversed back-to-front for secure distribution entry.",
        instructions: "Set the flex main-axis direction horizontally but in exact reverse order.",
        visualType: "flexbox-deepwoods",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.ant-queue {\n  display: flex;\n  /* Reverse the horizontal distribution row direction */\n  flex-direction: row-reverse;\n}` },
        testCases: [{ input: "flex-direction: row-reverse", expected: true }]
      },
      round_3: {
        title: "⚡ Lvl 3 - Rd 3: Deepwoods Path Reversal (DSA)",
        type: "dsa",
        desc: "An tracking encryption key requires array-based reverse sequencing to override an access control door terminal mechanism.",
        instructions: "Reverse the order of elements within the given array payload structure.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function reversePath(trail) {\n    return trail.reverse();\n}`,
          python: `def reverse_path(trail):\n    return trail[::-1]`,
          cpp: `vector<int> reversePath(vector<int> trail) {\n    reverse(trail.begin(), trail.end());\n    return trail;\n}`
        },
        testCases: [
          { input: [1, 2, 3, 4], expected: [4, 3, 2, 1] }
        ]
      }
    },

    // ==========================================
    // LEVEL 4: WRAP WILDERNESS (flex-wrap)
    // ==========================================
    level_4: {
      round_1: {
        title: "⛺ Lvl 4 - Rd 1: Overflow Camp Supplies",
        type: "webdev",
        desc: "Jungle supply chests are running outside the viewing borders of the storage unit container frame in a rigid single line.",
        instructions: "Enable multi-line wrapping so overflowing crates wrap down onto a new line naturally.",
        visualType: "wrap-wilderness",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.supply-bay {\n  display: flex;\n  /* Allow flex items to break onto multiple lines */\n  flex-wrap: wrap;\n}` },
        testCases: [{ input: "flex-wrap: wrap", expected: true }]
      },
      round_2: {
        title: "⛺ Lvl 4 - Rd 2: Multi-Layer Canopy Shelters",
        type: "webdev",
        desc: "Defense platforms are wrapping to new lines downward, but jungle defensive layouts require them to wrap upwards instead.",
        instructions: "Allow flex elements to wrap onto multiple lines, but flowing from bottom to top.",
        visualType: "wrap-wilderness",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.defense-grid {\n  display: flex;\n  /* Wrap elements in reverse multi-line ordering structures */\n  flex-wrap: wrap-reverse;\n}` },
        testCases: [{ input: "flex-wrap: wrap-reverse", expected: true }]
      },
      round_3: {
        title: "⚡ Lvl 4 - Rd 3: Supply Inventory Count (DSA)",
        type: "dsa",
        desc: "Count the existence frequency metric coordinates of target emergency items contained across cargo registries.",
        instructions: "Return the count of how many times a target integer value appears inside the target array parameter scope.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function countCrates(inventory, target) {\n    return inventory.filter(x => x === target).length;\n}`,
          python: `def count_crates(inventory, target):\n    return inventory.count(target)`,
          cpp: `int countCrates(vector<int> inventory, int target) {\n    int count = 0;\n    for(int x : inventory) if(x == target) count++;\n    return count;\n}`
        },
        testCases: [
          { input: [[2, 5, 2, 8, 2], 2], expected: 3 }
        ]
      }
    },

    // ==========================================
    // LEVEL 5: GROW GROVE (flex-grow)
    // ==========================================
    level_5: {
      round_1: {
        title: "🌿 Lvl 5 - Rd 1: Sunlight Sprout Scaling",
        type: "webdev",
        desc: "A central bio-dome solar cell block must stretch out automatically to absorb all remaining empty workspace layout gap tracks.",
        instructions: "Configure the item property rule to let a targeted flex item expand to consume 1 unit share of unallocated container void spaces.",
        visualType: "grow-grove",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.main-solar-sprout {\n  /* Set item growth property weight factor factor below */\n  flex-grow: 1;\n}` },
        testCases: [{ input: "flex-grow: 1", expected: true }]
      },
      round_2: {
        title: "🌿 Lvl 5 - Rd 2: Dual Core Allocation Ratio",
        type: "webdev",
        desc: "An analytical sensor hub must grow twice as large as the secondary sibling telemetry units within the exact same workspace branch row.",
        instructions: "Set the growth multiplier tracking property factor weight allocation value exactly to 2.",
        visualType: "grow-grove",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.sensor-hub-alpha {\n  /* Expand element layout space footprint tracking proportionally */\n  flex-grow: 2;\n}` },
        testCases: [{ input: "flex-grow: 2", expected: true }]
      },
      round_3: {
        title: "⚡ Lvl 5 - Rd 3: Grove Sprout Filter (DSA)",
        type: "dsa",
        desc: "Ecosystem data capture blocks register plant development logs. Filter out standard baseline noise below an operational limit.",
        instructions: "Filter out all integers from the array that are strictly less than a given limit value and return the cleaned array.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function filterSprouts(growthLogs, threshold) {\n    return growthLogs.filter(g => g >= threshold);\n}`,
          python: `def filter_sprouts(growth_logs, threshold):\n    return [g for g in growth_logs if g >= threshold]`,
          cpp: `vector<int> filterSprouts(vector<int> growthLogs, int threshold) {\n    vector<int> res;\n    for(int g : growthLogs) if(g >= threshold) res.push_back(g);\n    return res;\n}`
        },
        testCases: [
          { input: [[12, 5, 45, 18, 3], 15], expected: [45, 18] }
        ]
      }
    },

    // ==========================================
    // LEVEL 6: SHRINK SWAMPLANDS (flex-shrink)
    // ==========================================
    level_6: {
      round_1: {
        title: "🐊 Lvl 6 - Rd 1: Core Research Preservation",
        type: "webdev",
        desc: "When screen width bounds tighten, the primary research databank pod is getting compressed and its text is breaking.",
        instructions: "Set the flex-shrink property rule to ensure this specific pod never collapses or scales down past its default native bounding box size.",
        visualType: "shrink-swamp",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.research-databank {\n  /* Lock shrink factor factor parameter securely below */\n  flex-shrink: 0;\n}` },
        testCases: [{ input: "flex-shrink: 0", expected: true }]
      },
      round_2: {
        title: "🐊 Lvl 6 - Rd 2: Mud-Sinking Weight Balance",
        type: "webdev",
        desc: "Emergency escape valves must compress at twice the rate of regular structural components when workspace allocations are limited.",
        instructions: "Set the compression shrink scale factor value rule directly to 2.",
        visualType: "shrink-swamp",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.escape-valves {\n  /* Increase shrink scale speed compression multiplier */\n  flex-shrink: 2;\n}` },
        testCases: [{ input: "flex-shrink: 2", expected: true }]
      },
      round_3: {
        title: "⚡ Lvl 6 - Rd 3: Swamp Duplicates Cleansing (DSA)",
        type: "dsa",
        desc: "Telemetry logs are capturing multiple redundant signal packets. Clear all duplicates to clean data streams.",
        instructions: "Remove all duplicate integers from a sorted array, returning an array of unique values.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function removeDuplicates(logs) {\n    return [...new Set(logs)];\n}`,
          python: `def remove_duplicates(logs):\n    return list(sorted(set(logs)))`,
          cpp: `vector<int> removeDuplicates(vector<int> logs) {\n    logs.erase(unique(logs.begin(), logs.end()), logs.end());\n    return logs;\n}`
        },
        testCases: [
          { input: [10, 10, 20, 30, 30], expected: [10, 20, 30] }
        ]
      }
    },

    // ==========================================
    // LEVEL 7: BASIS BUSHLANDS (flex-basis)
    // ==========================================
    level_7: {
      round_1: {
        title: "🏹 Lvl 7 - Rd 1: Locked Outpost Bounds",
        type: "webdev",
        desc: "A sniper surveillance checkpoint box requires a fixed, standard default baseline initialization width before any layout adjustments take place.",
        instructions: "Lock the default starting size length metrics constraint value explicitly to 300 pixels.",
        visualType: "basis-bushlands",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.scout-checkpoint {\n  /* Assign standard sizing length base parameter values */\n  flex-basis: 300px;\n}` },
        testCases: [{ input: "flex-basis: 300px", expected: true }]
      },
      round_2: {
        title: "🏹 Lvl 7 - Rd 2: Modular Half-Screen Bay",
        type: "webdev",
        desc: "The central communication array panel item demands exactly half of the tracking width space of the viewport container as its core blueprint size.",
        instructions: "Set the layout baseline initialization size value to 50 percent.",
        visualType: "basis-bushlands",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.comm-array {\n  /* Define base sizing length using percentages ratio scales */\n  flex-basis: 50%;\n}` },
        testCases: [{ input: "flex-basis: 50%", expected: true }]
      },
      round_3: {
        title: "⚡ Lvl 7 - Rd 3: Radar Coordinates Check (DSA)",
        type: "dsa",
        desc: "Scouting sensors need to find if two specific sector readouts match target signal requirements parameters.",
        instructions: "Check if any two distinct integers in the array add up to exactly the target value. Return true or false.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function checkCoordinates(signals, target) {\n    for(let i=0; i<signals.length; i++){\n        for(let j=i+1; j<signals.length; j++){\n            if(signals[i]+signals[j]===target) return true;\n        }\n    }\n    return false;\n}`,
          python: `def check_coordinates(signals, target):\n    seen = set()\n    for s in signals:\n        if target - s in seen: return True\n        seen.add(s)\n    return False`,
          cpp: `bool checkCoordinates(vector<int> signals, int target) {\n    unordered_set<int> seen;\n    for(int s : signals) {\n        if(seen.count(target - s)) return true;\n        seen.insert(s);\n    }\n    return false;\n}`
        },
        testCases: [
          { input: [[4, 8, 15, 16], 23], expected: true },
          { input: [[1, 2, 3], 10], expected: false }
        ]
      }
    },

    // ==========================================
    // LEVEL 8: ORDER OUTPOST (order)
    // ==========================================
    level_8: {
      round_1: {
        title: "🛡️ Lvl 8 - Rd 1: Rearguard Shield Push",
        type: "webdev",
        desc: "A heavy plasma shield turret block item is sitting at the end of the markup queue, but must be forced to the front to take damage first.",
        instructions: "Use the order property rule to pull this single flex element ahead of all default items.",
        visualType: "order-outpost",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.plasma-shield-turret {\n  /* Shift element to absolute layout priority indexing slot */\n  order: -1;\n}` },
        testCases: [{ input: "order: -1", expected: true }]
      },
      round_2: {
        title: "🛡️ Lvl 8 - Rd 2: Offline Battery De-prioritization",
        type: "webdev",
        desc: "An offline generator core battery is blocking central menus. It should be pushed to the back of the queue.",
        instructions: "Set the item structural processing sequence sequence index property value explicitly to 5.",
        visualType: "order-outpost",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.offline-generator {\n  /* Relocate block layout rendering orders indexes tags */\n  order: 5;\n}` },
        testCases: [{ input: "order: 5", expected: true }]
      },
      round_3: {
        title: "⚡ Lvl 8 - Rd 3: Frequency Sorting Pipeline (DSA)",
        type: "dsa",
        desc: "Outpost communication lines require intercepted data integers to be arranged in an ascending sequence.",
        instructions: "Write a sorting routine that arranges the integers within an array parameter from lowest to highest value.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function sortFrequencies(frequencies) {\n    return frequencies.sort((a,b) => a - b);\n}`,
          python: `def sort_frequencies(frequencies):\n    return sorted(frequencies)`,
          cpp: `vector<int> sortFrequencies(vector<int> frequencies) {\n    sort(frequencies.begin(), frequencies.end());\n    return frequencies;\n}`
        },
        testCases: [
          { input: [90, 12, 45, 5], expected: [5, 12, 45, 90] }
        ]
      }
    },

    // ==========================================
    // LEVEL 9: GAP GLADE (gap)
    // ==========================================
    level_9: {
      round_1: {
        title: "🪵 Lvl 9 - Rd 1: Firebreak Explosives Safe Buffer",
        type: "webdev",
        desc: "Jungle fuel storage vaults are sitting dangerously close together, causing thermal crossover chains.",
        instructions: "Introduce a standard unified spacing gap buffer separating every adjacent item inside the flex grid layout by 24 pixels.",
        visualType: "gap-glade",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.fuel-matrix {\n  display: flex;\n  /* Apply spacing dimensions between all child inner lanes blocks */\n  gap: 24px;\n}` },
        testCases: [{ input: "gap: 24px", expected: true }]
      },
      round_2: {
        title: "🪵 Lvl 9 - Rd 2: Column Isolation Void Lanes",
        type: "webdev",
        desc: "Multi-axis tracking items need distinct layout spacing rules: row gaps are fine, but column channels need isolated custom spacing gaps.",
        instructions: "Set the column-specific spacing gap width attribute rule directly to 32 pixels.",
        visualType: "gap-glade",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.telemetry-grid {\n  display: flex;\n  /* Insert gutter space strictly separating vertical columns units */\n  column-gap: 32px;\n}` },
        testCases: [{ input: "column-gap: 32px", expected: true }]
      },
      round_3: {
        title: "⚡ Lvl 9 - Rd 3: Glade Node Proximity Check (DSA)",
        type: "dsa",
        desc: "Sensors are checking path segment distances. Find the single smallest numerical delta variance between any two given numbers.",
        instructions: "Evaluate an array of integers and return the absolute minimum difference between any two numbers inside it.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function minVariance(nodes) {\n    nodes.sort((a,b)=>a-b);\n    let minDiff = Infinity;\n    for(let i=1; i<nodes.length; i++) {\n        minDiff = Math.min(minDiff, nodes[i] - nodes[i-1]);\n    }\n    return minDiff;\n}`,
          python: `def min_variance(nodes):\n    nodes.sort()\n    return min(nodes[i] - nodes[i-1] for i in range(1, len(nodes)))`,
          cpp: `int minVariance(vector<int> nodes) {\n    sort(nodes.begin(), nodes.end());\n    int minDiff = nodes[1] - nodes[0];\n    for(size_t i=2; i<nodes.size(); ++i) minDiff = min(minDiff, nodes[i] - nodes[i-1]);\n    return minDiff;\n}`
        },
        testCases: [
          { input: [10, 35, 12, 50], expected: 2 }
        ]
      }
    },

    // ==========================================
    // LEVEL 10: THE CANOPY CITADEL (Comprehensive)
    // ==========================================
    level_10: {
      round_1: {
        title: "🏰 Lvl 10 - Rd 1: Master Citadel Command Flow",
        type: "webdev",
        desc: "You have scaled the Canopy Citadel! To configure the final main engine layout, you must declare a shorthand flex configuration that enables growth, compression, and automated bases layouts.",
        instructions: "Use the `flex` shorthand property on an element to set flex-grow to 1, flex-shrink to 1, and flex-basis to auto.",
        visualType: "citadel-boss",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.citadel-core-engine {\n  /* Define master flex composite rules parameter tags */\n  flex: 1 1 auto;\n}` },
        testCases: [{ input: "flex: 1 1 auto", expected: true }]
      },
      round_2: {
        title: "🏰 Lvl 10 - Rd 2: Ultimate Shield Core Align",
        type: "webdev",
        desc: "The defense shield crystal must be centered exactly inside the control chamber container along both horizontal and vertical directions.",
        instructions: "Configure the control chamber grid container rules using flexbox layout definitions to lock its child elements perfectly dead-center.",
        visualType: "citadel-boss",
        defaultLanguage: "css",
        languages: ["css"],
        boilerplates: { css: `.shield-chamber {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}` },
        testCases: [
          { input: "justify-content: center", expected: true },
          { input: "align-items: center", expected: true }
        ]
      },
      round_3: {
        title: "⚡ Lvl 10 - Rd 3: Citadel Verification Key (DSA)",
        type: "dsa",
        desc: "The final door terminal lock requires a symmetric validation algorithm. Check if an array code reads identically forward and backward.",
        instructions: "Determine if an array of elements is a Palindrome. Return true or false.",
        visualType: "dsa-crystals",
        defaultLanguage: "javascript",
        languages: ["javascript", "python", "cpp"],
        boilerplates: {
          javascript: `function verifyCitadelKey(securityCode) {\n    const str = securityCode.join('');\n    const rev = securityCode.reverse().join('');\n    return str === rev;\n}`,
          python: `def verify_citadel_key(security_code):\n    return security_code == security_code[::-1]`,
          cpp: `bool verifyCitadelKey(vector<int> securityCode) {\n    int n = securityCode.size();\n    for(int i = 0; i < n/2; i++) {\n        if(securityCode[i] != securityCode[n-1-i]) return false;\n    }\n    return true;\n}`
        },
        testCases: [
          { input: [8, 1, 4, 1, 8], expected: true },
          { input: [1, 2, 3, 4], expected: false }
        ]
      }
    }
  }
};

export async function GET(request, { params }) {
  const { world, level, round } = await params;
  
  const levelKey = `level_${level}`;
  const roundKey = `round_${round}`;

  const worldData = WORLD_DATABASE[world.toLowerCase()];
  if (!worldData) {
    return NextResponse.json({ error: "World location matrix code invalid." }, { status: 404 });
  }

  const levelData = worldData[levelKey];
  if (!levelData) {
    return NextResponse.json({ error: `Level ${level} scope not found.` }, { status: 404 });
  }

  const challenge = levelData[roundKey];
  if (!challenge) {
    return NextResponse.json({ error: `Round ${round} code segment missing.` }, { status: 404 });
  }

  return NextResponse.json(challenge);
}