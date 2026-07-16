export default {
  q1: {
    id: "s10-q1",
    title: "Log Entries",
    description: "Run standard structural manipulation stack rules appending target string entity array data reading value 'Landing' directly to the back end indexing edge layer.",
    starterCode: { html: ``, css: ``, js: `let logs = ['Takeoff'];\n// TODO: Push 'Landing' into array data stack` },
    answer: { js: `logs.push('Landing');` },
    targetImage: "/gameplay/sky-10/targets/q1.png",
  },
  q2: {
    id: "s10-q2",
    title: "Weather Filter",
    description: "Execute scanning filters tracking conditional arrays extraction targeting values strictly matching array item value bounds of 'clear'.",
    starterCode: { html: ``, css: ``, js: `let reports = ['rain', 'clear', 'fog', 'clear'];\n// TODO: Filter elements matching 'clear' assigning results into const safe tracking instance 'clear'` },
    answer: { js: `const clear = reports.filter(r => r === 'clear');` },
    targetImage: "/gameplay/sky-10/targets/q2.png",
  },
  q3: {
    id: "s10-q3",
    title: "Report Broadcast",
    description: "Call functional parsing iterations cycling linear map pointers explicitly looping operations target loops pointers to function configuration name instances pointing directly at 'broadcast'.",
    starterCode: { html: ``, css: ``, js: `let data = ['Alt high', 'Wind safe'];\nfunction broadcast(val) { console.log("Transmission:", val); }\n// TODO: Parse each element utilizing operational call structures forwarding data pointers down through loop parameters to target tracker 'broadcast'` },
    answer: { js: `data.forEach(broadcast);` },
    targetImage: "/gameplay/sky-10/targets/q3.png",
  }
};