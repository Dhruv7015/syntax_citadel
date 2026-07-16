export default {
  1: {
    title: "The Fire Pit",
    questions: [
      { id: "v1-q1", title: "Magma Chamber", icon: "🌋", tags: ["HTML"], description: "Create a div with class 'magma' to serve as the base of the volcano.", xp: 100, difficulty: "Easy" },
      { id: "v1-q2", title: "Lava Alert", icon: "⚠️", tags: ["HTML"], description: "Wrap 'Eruption Imminent!' in an em tag to emphasize the warning.", xp: 100, difficulty: "Easy" },
      { id: "v1-q3", title: "Escape Route", icon: "🏃", tags: ["HTML"], description: "Create a link pointing to '/safety' with the text 'Run to Safety'.", xp: 100, difficulty: "Easy" }
    ]
  },
  2: {
    title: "Obsidian Collection",
    questions: [
      { id: "v2-q1", title: "Ash Cloud", icon: "☁️", tags: ["HTML"], description: "Add an image of an ash cloud with source '/ash.png' and alt text 'ash'.", xp: 100, difficulty: "Easy" },
      { id: "v2-q2", title: "Start Drill", icon: "🏗️", tags: ["HTML"], description: "Create a button of type 'button' with the text 'Start Drill'.", xp: 100, difficulty: "Easy" },
      { id: "v2-q3", title: "Thermal Suit", icon: "🥽", tags: ["HTML"], description: "Create a checkbox input, checked by default.", xp: 100, difficulty: "Easy" }
    ]
  },
  3: {
    title: "Molten CSS",
    questions: [
      { id: "v3-q1", title: "Lava Glow", icon: "✨", tags: ["CSS"], description: "Set the text color of '.lava-text' to #fca311.", xp: 100, difficulty: "Easy" },
      { id: "v3-q2", title: "Igneous Rock", icon: "🪨", tags: ["CSS"], description: "Give '.rock' a background-color of #370617.", xp: 100, difficulty: "Easy" },
      { id: "v3-q3", title: "Vent Border", icon: "🔥", tags: ["CSS"], description: "Set a 4px solid red (#d00000) border for '.vent'.", xp: 100, difficulty: "Easy" }
    ]
  },
  4: {
    title: "Flowing Lava Flex",
    questions: [
      { id: "v4-q1", title: "Lava Flow", icon: "〰️", tags: ["CSS"], description: "Make '.flow' a flex container.", xp: 150, difficulty: "Medium" },
      { id: "v4-q2", title: "Magma Alignment", icon: "📍", tags: ["CSS"], description: "Align items to 'center' in the '.magma-stream' flex container.", xp: 150, difficulty: "Medium" },
      { id: "v4-q3", title: "Debris Spread", icon: "☄️", tags: ["CSS"], description: "Justify content to 'space-around' in '.debris'.", xp: 150, difficulty: "Medium" }
    ]
  },
  5: {
    title: "Tectonic Grid",
    questions: [
      { id: "v5-q1", title: "Tectonic Plates", icon: "🧩", tags: ["CSS"], description: "Set '.plates' to display: grid.", xp: 150, difficulty: "Medium" },
      { id: "v5-q2", title: "Plate Rows", icon: "🏗️", tags: ["CSS"], description: "Create two equal columns using grid-template-columns: 1fr 1fr.", xp: 150, difficulty: "Medium" },
      { id: "v5-q3", title: "Crust Gap", icon: "📉", tags: ["CSS"], description: "Add a 'gap' of 20px between grid items.", xp: 150, difficulty: "Medium" }
    ]
  },
  6: {
    title: "Heat Wave Responsive",
    questions: [
      { id: "v6-q1", title: "Heat Wave", icon: "🌡️", tags: ["CSS"], description: "Media query for max-width 768px changing background to #ffb703.", xp: 150, difficulty: "Medium" },
      { id: "v6-q2", title: "Mobile Vent", icon: "📱", tags: ["CSS"], description: "Stack flex items in column for screen < 500px.", xp: 150, difficulty: "Medium" },
      { id: "v6-q3", title: "Full Blast", icon: "📏", tags: ["CSS"], description: "Set width to 100vw.", xp: 150, difficulty: "Medium" }
    ]
  },
  7: {
    title: "Ash Cloud Effects",
    questions: [
      { id: "v7-q1", title: "Ash Filter", icon: "🌫️", tags: ["CSS"], description: "Apply grayscale(50%) filter to '.ash-fall'.", xp: 150, difficulty: "Medium" },
      { id: "v7-q2", title: "Eruption Fade", icon: "💨", tags: ["CSS"], description: "Add transition of 'opacity 0.5s' to '.eruption'.", xp:150, difficulty: "Medium" },
      { id: "v7-q3", title: "Lava Pulse", icon: "💓", tags: ["CSS"], description: "Animate 'pulse' 2s infinite.", xp:150, difficulty: "Medium" }
    ]
  },
  8: {
    title: "Thermal Logic",
    questions: [
      { id: "v8-q1", title: "Temperature Check", icon: "🌡️", tags: ["JS"], description: "If temp > 1000, set 'danger' to true.", xp: 200, difficulty: "Hard" },
      { id: "v8-q2", title: "Magma Volume", icon: "🧮", tags: ["JS"], description: "Function 'calcVolume' returning width * height.", xp: 200, difficulty: "Hard" },
      { id: "v8-q3", title: "Danger Level", icon: "⚠️", tags: ["JS"], description: "Arrow function 'isHot' returning true if t > 800.", xp: 200, difficulty: "Hard" }
    ]
  },
  9: {
    title: "Vent Automation",
    questions: [
      { id: "v9-q1", title: "Vent Control", icon: "🔓", tags: ["JS"], description: "Set textContent of 'vent' to 'Open'.", xp: 200, difficulty: "Hard" },
      { id: "v9-q2", title: "Show Lava", icon: "🔥", tags: ["JS"], description: "Set display style to 'block'.", xp: 200, difficulty: "Hard" },
      { id: "v9-q3", title: "Eruption Trigger", icon: "🕹️", tags: ["JS"], description: "Add click listener to 'btn' calling 'erupt'.", xp: 200, difficulty: "Hard" }
    ]
  },
  10: {
    title: "Seismic Analysis",
    questions: [
      { id: "v10-q1", title: "Rock Storage", icon: "📦", tags: ["JS"], description: "Push 'Basalt' to 'rocks' array.", xp: 250, difficulty: "Hard" },
      { id: "v10-q2", title: "Filter Magma", icon: "🧬", tags: ["JS"], description: "Filter 'temps' for > 900.", xp: 250, difficulty: "Hard" },
      { id: "v10-q3", title: "Log Seismic Data", icon: "📊", tags: ["JS"], description: "Use forEach to call 'logData'.", xp: 250, difficulty: "Hard" }
    ]
  }
};