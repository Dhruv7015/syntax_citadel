export default {
  q1: {
    id: "sw10-q1",
    title: "Flora Catalog",
    description: "Run standard structural manipulation stack rules appending target string entity array data reading value 'Fern' directly to the back end indexing edge layer.",
    starterCode: { html: ``, css: ``, js: `let flora = ['Lichen'];\n// TODO: Push 'Fern' into array data stack` },
    answer: { js: `flora.push('Fern');` },
    targetImage: "/gameplay/swamp-10/targets/q1.png",
  },
  q2: {
    id: "sw10-q2",
    title: "Isolate Toxins",
    description: "Execute scanning filters tracking conditional arrays extraction targeting values strictly matching array item value bounds of 'toxic'.",
    starterCode: { html: ``, css: ``, js: `let herbs = ['safe', 'toxic', 'medicinal', 'toxic'];\n// TODO: Filter elements matching 'toxic' assigning results into const isolated tracker 'bad'` },
    answer: { js: `const bad = herbs.filter(h => h === 'toxic');` },
    targetImage: "/gameplay/swamp-10/targets/q2.png",
  },
  q3: {
    id: "sw10-q3",
    title: "Sensor Ping",
    description: "Call functional parsing iterations cycling linear map pointers explicitly looping operations target loops pointers to function configuration name instances pointing directly at 'pingSensor'.",
    starterCode: { html: ``, css: ``, js: `let locations = [404, 503, 200];\nfunction pingSensor(loc) { console.log("Pinging sector:", loc); }\n// TODO: Parse each element utilizing operational call structures forwarding data pointers down through loop parameters to target tracker 'pingSensor'` },
    answer: { js: `locations.forEach(pingSensor);` },
    targetImage: "/gameplay/swamp-10/targets/q3.png",
  }
};