export default {
  q1: {
   id: "i10-q1",
    title: "Sorting Crystal Shards",
    description: "Append data parameters dynamically. Run an array tracking engine array command to inject the string item 'Amethyst' into the trailing tail index slot mapping allocation of the 'inventory' tracker list.",
    starterCode: {
      html: ``,
      css: ``,
      js: `let inventory = ["Ruby", "Sapphire"];\n// TODO: Push "Amethyst" into the inventory array`
    },
    hints: [
      "Utilize the built-in native mutator operation array workflow function tool path: `inventory.push(\"Amethyst\");`."
    ],
    answer: {
      js: `let inventory = ["Ruby", "Sapphire"];\ninventory.push("Amethyst");`
    },
    targetImage: "/gameplay/iceworld-10/targets/q1.png",
  },
  q2: {
    id: "i10-q2",
    title: "Filtering Out Melted Cubes",
    description: "Filter out elements based on their values. Create a filtered array called 'solidCubes' by keeping only elements from the 'iceCubes' array that are greater than 0.",
    starterCode: {
      html: ``,
      css: ``,
      js: `let iceCubes = [5, 0, 12, -2, 8];\n// TODO: Use array.filter() to keep numbers greater than 0 and assign to solidCubes`
    },
    hints: [
      "Apply: `const solidCubes = iceCubes.filter(val => val > 0);`."
    ],
    answer: {
      js: `let iceCubes = [5, 0, 12, -2, 8];\nconst solidCubes = iceCubes.filter(val => val > 0);`
    },
    targetImage: "/gameplay/iceworld-10/targets/q2.png",
  },
  q3: {
    id: "i10-q3",
    title: "Scanning Frost Records",
    description: "Run a batch iterator action across structural context configurations. Execute the built-in `forEach` array mechanism to call the function 'logTemp' for each item in the data set.",
    starterCode: {
      html: ``,
      css: ``,
      js: `let log = [-10, -14, -8];\nfunction logTemp(t) { console.log("Recorded: " + t); }\n\n// TODO: Call logTemp for each item in the log array using forEach`
    },
    hints: [
      "Pass the tracking callback reference directly down: `log.forEach(logTemp);`."
    ],
    answer: {
      js: `let log = [-10, -14, -8];\nfunction logTemp(t) { console.log("Recorded: " + t); }\n\nlog.forEach(logTemp);`
    },
    targetImage: "/gameplay/iceworld-10/targets/q3.png",
  },
};
