export default {
  q1: {
    id: "o10-q1",
    title: "Harvesting Pearls",
    description: "Use an array method to push the string 'Black Pearl' to the end of the 'cargo' array.",
    starterCode: { html: ``, css: ``, js: `let cargo = ["Seashell", "Driftwood"];\n// TODO: Push "Black Pearl" to cargo` },
    hints: ["cargo.push(\"Black Pearl\");"],
    answer: { js: `cargo.push("Black Pearl");` },
    targetImage: "/gameplay/ocean-10/targets/q1.png",
  },
  q2: {
    id: "o10-q2",
    title: "Filtering Predators",
    description: "Use array.filter() to create a 'safeFish' array containing only fish objects where isPredator is false.",
    starterCode: { html: ``, css: ``, js: `let fish = [{name: "Guppy", isPredator: false}, {name: "Shark", isPredator: true}];\n// TODO: Filter where isPredator is false into const safeFish` },
    hints: ["const safeFish = fish.filter(f => f.isPredator === false);"],
    answer: { js: `const safeFish = fish.filter(f => f.isPredator === false);` },
    targetImage: "/gameplay/ocean-10/targets/q2.png",
  },
  q3: {
    id: "o10-q3",
    title: "Plotting Coordinates",
    description: "Use the forEach array method on 'waypoints' to call the 'plot' function for every coordinate.",
    starterCode: { html: ``, css: ``, js: `let waypoints = [10.5, 42.1, -5.3];\nfunction plot(coord) { console.log("Plotting", coord); }\n// TODO: Use forEach on waypoints to call plot` },
    hints: ["waypoints.forEach(plot);"],
    answer: { js: `waypoints.forEach(plot);` },
    targetImage: "/gameplay/ocean-10/targets/q3.png",
  }
};