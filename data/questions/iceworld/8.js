export default {
  q1: {
    id: "i8-q1",
    title: "The Freezing Point Check",
    description: "Evaluate current outdoor climate metrics. Write a conditional evaluation string block that sets the variable 'isFrozen' to true if 'temperature' is less than or equal to 0.",
    starterCode: {
      html: ``,
      css: ``,
      js: `let temperature = -4;\nlet isFrozen = false;\n\n// TODO: If temperature is <= 0, set isFrozen to true`
    },
    hints: [
      "Use the syntax: `if (temperature <= 0) { isFrozen = true; }`."
    ],
    answer: {
      js: `let temperature = -4;\nlet isFrozen = false;\n\nif (temperature <= 0) {\n  isFrozen = true;\n}`
    },
    targetImage: "/gameplay/iceworld-8/targets/q1.png",
  },
  q2: {
    id: "i8-q2",
    title: "Calculating Shelter Heat",
    description: "Write a standard JavaScript calculation handler routine. Return the total generated warmth by multiplying an input 'heaterCount' variable argument by 25.",
    starterCode: {
      html: ``,
      css: ``,
      js: `function calculateWarmth(heaterCount) {\n  /* TODO: Return heaterCount multiplied by 25 */\n}`
    },
    hints: [
      "Use the math multiplication character inside the return line execution block: `return heaterCount * 25;`."
    ],
    answer: {
      js: `function calculateWarmth(heaterCount) {\n  return heaterCount * 25;\n}`
    },
    targetImage: "/gameplay/iceworld-8/targets/q2.png",
  },
  q3: {
    id: "i8-q3",
    title: "The Ice Shard Multiplier",
    description: "Refactor your logic tools using modern ECMA structures. Convert the standard functional math engine routine into an explicit arrow function assignment.",
    starterCode: {
      html: ``,
      css: ``,
      js: `// TODO: Create an arrow function named 'doubleShards' that accepts 'x' and returns x * 2`
    },
    hints: [
      "Use arrow function shorthand: `const doubleShards = (x) => x * 2;`."
    ],
    answer: {
      js: `const doubleShards = (x) => x * 2;`
    },
    targetImage: "/gameplay/iceworld-8/targets/q3.png",
  },
};
