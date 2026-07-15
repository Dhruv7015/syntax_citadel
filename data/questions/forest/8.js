export default {
  q1: {
   id: "f8-q1",
    title: "Igniting the Campfire",
    description: "Initialize the wood fuel count. Declare a variable named 'woodCount' using 'let' and set its initial value to 5.",
    starterCode: {
      html: `<!-- JS execution context -->`,
      css: ``,
      js: `// TODO: Declare a variable 'woodCount' and assign it the value 5`
    },
    hints: [
      "Use `let woodCount = 5;` to define your variable."
    ],
    answer: {
      js: `let woodCount = 5;`
    },
    targetImage: "/gameplay/forest-8/targets/q1.png",
  },
  q2: {
    id: "f8-q2",
    title: "Counting the Timber logs",
    description: "An adventurer returned with another log. Update the existing 'totalLogs' variable by adding 1 to its current value.",
    starterCode: {
      html: ``,
      css: ``,
      js: `let totalLogs = 3;\n// TODO: Increment totalLogs by 1`
    },
    hints: [
      "You can use `totalLogs = totalLogs + 1;` or simply the shorthand incrementor `totalLogs++;`."
    ],
    answer: {
      js: `let totalLogs = 3;\ntotalLogs++;`
    },
    targetImage: "/gameplay/forest-8/targets/q2.png",
  },
  q3: {
   id: "f8-q3",
    title: "Alchemist's Portal Check",
    description: "Write a verification conditional statement. If 'hasPortalKey' is true, set the 'portalStatus' variable to the text 'OPEN'; otherwise, set it to 'CLOSED'.",
    starterCode: {
      html: ``,
      css: ``,
      js: `let hasPortalKey = true;\nlet portalStatus = "";\n\n// TODO: Use an if/else block to update portalStatus`
    },
    hints: [
      "Check if `hasPortalKey` is truthy, then update `portalStatus = \"OPEN\";` inside the if block, and use an `else` block for the fallback."
    ],
    answer: {
      js: `let hasPortalKey = true;\nlet portalStatus = "";\n\nif (hasPortalKey) {\n  portalStatus = "OPEN";\n} else {\n  portalStatus = "CLOSED";\n}`
    },
    targetImage: "/gameplay/forest-8/targets/q3.png",
  },
};
