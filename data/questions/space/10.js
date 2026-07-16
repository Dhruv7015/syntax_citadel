export default {
  q1: {
    id: "sp10-q1",
    title: "Log Entry",
    description: "Run standard structural manipulation stack rules appending target string entity array data reading value 'Signal Lost' directly to the back end indexing edge layer.",
    starterCode: { html: ``, css: ``, js: `let logs = ['Orbit Sync'];\n// TODO: Push 'Signal Lost' into array data stack` },
    answer: { js: `logs.push('Signal Lost');` },
    targetImage: "/gameplay/space-10/targets/q1.png",
  },
  q2: {
    id: "sp10-q2",
    title: "Filter Frequencies",
    description: "Execute scanning filters tracking conditional arrays extraction targeting values strictly matching array item value bounds of 'beacon'.",
    starterCode: { html: ``, css: ``, js: `let frequencies = ['noise', 'beacon', 'static', 'beacon'];\n// TODO: Filter elements matching 'beacon' assigning results into const targeted array 'pings'` },
    answer: { js: `const pings = frequencies.filter(f => f === 'beacon');` },
    targetImage: "/gameplay/space-10/targets/q2.png",
  },
  q3: {
    id: "sp10-q3",
    title: "Ping Sector Array",
    description: "Call functional parsing iterations cycling linear map pointers explicitly looping operations target loops pointers to function configuration name instances pointing directly at 'pingModule'.",
    starterCode: { html: ``, css: ``, js: `let sectors = ['Alpha', 'Gamma', 'Zeta'];\nfunction pingModule(name) { console.log("Pinging array node:", name); }\n// TODO: Parse each element utilizing operational call structures forwarding data pointers down through loop parameters to target tracker 'pingModule'` },
    answer: { js: `sectors.forEach(pingModule);` },
    targetImage: "/gameplay/space-10/targets/q3.png",
  }
};