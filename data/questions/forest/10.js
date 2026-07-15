export default {
  q1: {
    id: "f10-q1",
    title: "The Gathering Herd",
    description: "Create an array named 'creatures' containing three strings: 'Deer', 'Owl', and 'Fox'.",
    starterCode: {
      html: ``,
      css: ``,
      js: `// TODO: Declare creatures array with 'Deer', 'Owl', and 'Fox'`
    },
    hints: [
      "Define square brackets: `const creatures = [\"Deer\", \"Owl\", \"Fox\"];`"
    ],
    answer: {
      js: `const creatures = ["Deer", "Owl", "Fox"];`
    },
    targetImage: "/gameplay/forest-10/targets/q1.png",
  },
  q2: {
   id: "f10-q2",
    title: "Watering the Grand Oak Tree",
    description: "Help the elder water the roots. Create a loop that runs exactly 3 times, calling the 'water' function during each loop execution.",
    starterCode: {
      html: ``,
      css: ``,
      js: `function water() { console.log("💧"); }\n\n// TODO: Run a loop that calls water() exactly 3 times`
    },
    hints: [
      "A classic standard for-loop works beautifully: `for (let i = 0; i < 3; i++) { water(); }`."
    ],
    answer: {
      js: `function water() { console.log("💧"); }\n\nfor (let i = 0; i < 3; i++) {\n  water();\n}`
    },
    targetImage: "/gameplay/forest-10/targets/q2.png",
  },
  q3: {
   id: "f10-q3",
    title: "The Ancient Forest Guardian",
    description: "Model the forest giant. Declare a JavaScript object named 'guardian' with three key-value properties: name ('Groot'), level (100), and isFriendly (true).",
    starterCode: {
      html: ``,
      css: ``,
      js: `// TODO: Create the guardian object with name, level, and isFriendly properties`
    },
    hints: [
      "Construct a standard object literal structure with properties: `name: \"Groot\", level: 100, isFriendly: true`."
    ],
    answer: {
      js: `const guardian = {\n  name: "Groot",\n  level: 100,\n  isFriendly: true\n};`
    },
    targetImage: "/gameplay/forest-10/targets/q3.png",
  },
};
