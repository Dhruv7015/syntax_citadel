export default {
  q1: {
    id: "d10-q1",
    title: "Stashing Gold",
    description: "Use an array method to push the string 'Gold Coin' to the end of the 'loot' array.",
    starterCode: { html: ``, css: ``, js: `let loot = ["Ruby", "Emerald"];\n// TODO: Push "Gold Coin" to loot` },
    hints: ["loot.push(\"Gold Coin\");"],
    answer: { js: `loot.push("Gold Coin");` },
    targetImage: "/gameplay/desert-10/targets/q1.png",
  },
  q2: {
    id: "d10-q2",
    title: "Filtering Cursed Items",
    description: "Use array.filter() to create a 'pureItems' array containing only items greater than 0.",
    starterCode: { html: ``, css: ``, js: `let artifacts = [5, -2, 10, -1, 3];\n// TODO: Filter items > 0 into const pureItems` },
    hints: ["const pureItems = artifacts.filter(item => item > 0);"],
    answer: { js: `const pureItems = artifacts.filter(item => item > 0);` },
    targetImage: "/gameplay/desert-10/targets/q2.png",
  },
  q3: {
    id: "d10-q3",
    title: "Counting the Gems",
    description: "Use the forEach array method on 'gems' to call the 'appraise' function for every item.",
    starterCode: { html: ``, css: ``, js: `let gems = [100, 500, 250];\nfunction appraise(val) { console.log(val); }\n// TODO: Use forEach on gems to call appraise` },
    hints: ["gems.forEach(appraise);"],
    answer: { js: `gems.forEach(appraise);` },
    targetImage: "/gameplay/desert-10/targets/q3.png",
  },
};