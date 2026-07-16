export default {
  q1: {
    id: "t10-q1",
    title: "Log Sample",
    description: "Run standard structural manipulation stack rules appending target string entity array data reading value 'Core' directly to the back end indexing edge layer.",
    starterCode: { html: ``, css: ``, js: `let samples = ['Snow'];\n// TODO: Push 'Core' into array data stack` },
    answer: { js: `samples.push('Core');` },
    targetImage: "/gameplay/tundra-10/targets/q1.png",
  },
  q2: {
    id: "t10-q2",
    title: "Isolate Hazards",
    description: "Execute scanning filters tracking conditional arrays extraction targeting values strictly matching array item value bounds of 'unstable'.",
    starterCode: { html: ``, css: ``, js: `let slopes = ['stable', 'unstable', 'stable', 'unstable'];\n// TODO: Filter elements matching 'unstable' assigning results into const isolated tracker 'dangerous'` },
    answer: { js: `const dangerous = slopes.filter(s => s === 'unstable');` },
    targetImage: "/gameplay/tundra-10/targets/q2.png",
  },
  q3: {
    id: "t10-q3",
    title: "Sensor Ping",
    description: "Call functional parsing iterations cycling linear map pointers explicitly looping operations target loops pointers to function configuration name instances pointing directly at 'pingBeacon'.",
    starterCode: { html: ``, css: ``, js: `let coordinates = [882, 104, 709];\nfunction pingBeacon(coord) { console.log("Pinging beacon at:", coord); }\n// TODO: Parse each element utilizing operational call structures forwarding data pointers down through loop parameters to target tracker 'pingBeacon'` },
    answer: { js: `coordinates.forEach(pingBeacon);` },
    targetImage: "/gameplay/tundra-10/targets/q3.png",
  }
};