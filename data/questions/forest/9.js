export default {
  q1: {
    id: "f9-q1",
    title: "Summoning the Forest Guard",
    description: "Define a function named 'summonGuard' that returns the string value 'Arise Guardian!'.",
    starterCode: {
      html: ``,
      css: ``,
      js: `// TODO: Create the summonGuard function`
    },
    hints: [
      "Define standard syntax: `function summonGuard() { return \"Arise Guardian!\"; }`."
    ],
    answer: {
      js: `function summonGuard() {\n  return "Arise Guardian!";\n}`
    },
    targetImage: "/gameplay/forest-9/targets/q1.png",
  },
  q2: {
    id: "f9-q2",
    title: "The Druid's Healing Spell",
    description: "Select the HTML heart container element from the webpage DOM using querySelector. The element has the ID of 'heart'.",
    starterCode: {
      html: `<div id="heart">❤️</div>`,
      css: ``,
      js: `// TODO: Select the element with ID 'heart' and save it to a variable named 'heartElement'`
    },
    hints: [
      "Use `document.querySelector('#heart')` or `document.getElementById('heart')` and assign it."
    ],
    answer: {
      js: `const heartElement = document.querySelector("#heart");`
    },
    targetImage: "/gameplay/forest-9/targets/q2.png",
  },
  q3: {
   id: "f9-q3",
    title: "Sprouting Flowers on Click",
    description: "Register a click listener on the 'growBtn' element. When clicked, it should call the existing function named 'sprout'."
    ,
    starterCode: {
      html: `<button id="growBtn">Grow</button>`,
      css: ``,
      js: `const growBtn = document.querySelector("#growBtn");\nfunction sprout() { console.log("🌱"); }\n\n// TODO: Register a click event listener on growBtn to execute sprout`
    },
    hints: [
      "Use `growBtn.addEventListener('click', sprout);`."
    ],
    answer: {
      js: `const growBtn = document.querySelector("#growBtn");\nfunction sprout() { console.log("🌱"); }\n\ngrowBtn.addEventListener("click", sprout);`
    },
    targetImage: "/gameplay/forest-9/targets/q3.png",
  },
};
