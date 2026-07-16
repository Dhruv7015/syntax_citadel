export default {
  1: {
    title: "Cloud Nine",
    questions: [
      { id: "s1-q1", title: "Nimbus Base", icon: "☁️", tags: ["HTML"], description: "Create a div with class 'cloud' to form a base cloud.", xp: 100, difficulty: "Easy" },
      { id: "s1-q2", title: "Sunlight Alert", icon: "☀️", tags: ["HTML"], description: "Wrap 'Sunlight detected!' in a strong tag.", xp: 100, difficulty: "Easy" },
      { id: "s1-q3", title: "Take Off", icon: "✈️", tags: ["HTML"], description: "Create a link pointing to '/ascend' with text 'Take Off'.", xp: 100, difficulty: "Easy" }
    ]
  },
  2: {
    title: "Aviation Basics",
    questions: [
      { id: "s2-q1", title: "Bird Spot", icon: "🦅", tags: ["HTML"], description: "Add an img tag with src '/bird.png' and alt 'bird'.", xp: 100, difficulty: "Easy" },
      { id: "s2-q2", title: "Propeller Start", icon: "⚙️", tags: ["HTML"], description: "Create a button of type 'button' with text 'Start Propeller'.", xp: 100, difficulty: "Easy" },
      { id: "s2-q3", title: "Oxygen Mask", icon: "🤿", tags: ["HTML"], description: "Create a checkbox input, checked by default.", xp: 100, difficulty: "Easy" }
    ]
  },
  3: {
    title: "Atmospheric CSS",
    questions: [
      { id: "s3-q1", title: "Sky Blue", icon: "🌌", tags: ["CSS"], description: "Set text color of '.sky-text' to #00b4d8.", xp: 100, difficulty: "Easy" },
      { id: "s3-q2", title: "Horizon Line", icon: "🌅", tags: ["CSS"], description: "Give '.horizon' a background-color of #ff9e00.", xp: 100, difficulty: "Easy" },
      { id: "s3-q3", title: "Wing Tip", icon: "🛩️", tags: ["CSS"], description: "Set a 3px solid white (#ffffff) border for '.wing'.", xp: 100, difficulty: "Easy" }
    ]
  },
  4: {
    title: "Soaring Flexbox",
    questions: [
      { id: "s4-q1", title: "Formation Flight", icon: "🦢", tags: ["CSS"], description: "Make '.formation' a flex container.", xp:150, difficulty: "Medium" },
      { id: "s4-q2", title: "Altitude Sync", icon: "⬆️", tags: ["CSS"], description: "Align items to 'center' in '.flight-path'.", xp:150, difficulty: "Medium" },
      { id: "s4-q3", title: "Drift Spacing", icon: "🌬️", tags: ["CSS"], description: "Justify content to 'space-between' in '.drift'.", xp: 150, difficulty: "Medium" }
    ]
  },
  5: {
    title: "Air Traffic Grid",
    questions: [
      { id: "s5-q1", title: "Runway Grid", icon: "✈️", tags: ["CSS"], description: "Set '.runway' to display: grid.", xp: 150, difficulty: "Medium" },
      { id: "s5-q2", title: "Hangar Bays", icon: "🏗️", tags: ["CSS"], description: "Create three equal columns using grid-template-columns: 1fr 1fr 1fr.", xp: 150, difficulty: "Medium" },
      { id: "s5-q3", title: "Safe Buffer", icon: "🚧", tags: ["CSS"], description: "Add a 'gap' of 30px between grid items.", xp: 150, difficulty: "Medium" }
    ]
  },
  6: {
    title: "High-Altitude Responsive",
    questions: [
      { id: "s6-q1", title: "Turbulence View", icon: "🌩️", tags: ["CSS"], description: "Media query for max-width 768px changing background to #90e0ef.", xp: 150, difficulty: "Medium" },
      { id: "s6-q2", title: "Vertical Ascent", icon: "🚀", tags: ["CSS"], description: "Stack flex items in column for screen < 500px.", xp: 150, difficulty: "Medium" },
      { id: "s6-q3", title: "Wide Horizon", icon: "🌍", tags: ["CSS"], description: "Set width to 100vw.", xp: 150, difficulty: "Medium" }
    ]
  },
  7: {
    title: "Aero Dynamics",
    questions: [
      { id: "s7-q1", title: "Fog Effect", icon: "🌫️", tags: ["CSS"], description: "Apply blur(2px) filter to '.fog'.", xp: 150, difficulty: "Medium" },
      { id: "s7-q2", title: "Landing Transition", icon: "🛬", tags: ["CSS"], description: "Add transition of 'transform 0.8s' to '.plane'.", xp: 150, difficulty: "Medium" },
      { id: "s7-q3", title: "Propeller Spin", icon: "🔄", tags: ["CSS"], description: "Animate 'spin' 1s infinite.", xp: 150, difficulty: "Medium" }
    ]
  },
  8: {
    title: "Navigation Logic",
    questions: [
      { id: "s8-q1", title: "Altitude Check", icon: "📏", tags: ["JS"], description: "If alt > 30000, set 'oxygen' to false.", xp: 200, difficulty: "Hard" },
      { id: "s8-q2", title: "Speed Calcs", icon: "⚡", tags: ["JS"], description: "Function 'calcSpeed' returning distance / time.", xp: 200, difficulty: "Hard" },
      { id: "s8-q3", title: "Clear Skies", icon: "✅", tags: ["JS"], description: "Arrow function 'isSafe' returning true if visibility > 5.", xp: 200, difficulty: "Hard" }
    ]
  },
  9: {
    title: "Cockpit Automation",
    questions: [
      { id: "s9-q1", title: "Panel Toggle", icon: "🔘", tags: ["JS"], description: "Set textContent of 'display' to 'ON'.", xp: 200, difficulty: "Hard" },
      { id: "s9-q2", title: "Radar View", icon: "📡", tags: ["JS"], description: "Set display style to 'block'.", xp: 200, difficulty: "Hard" },
      { id: "s9-q3", title: "Beacon Event", icon: "🚨", tags: ["JS"], description: "Add click listener to 'beacon' calling 'activate'.", xp: 200, difficulty: "Hard" }
    ]
  },
  10: {
    title: "Flight Data Log",
    questions: [
      { id: "s10-q1", title: "Log Entries", icon: "📝", tags: ["JS"], description: "Push 'Landing' to 'flightLogs' array.", xp: 250, difficulty: "Hard" },
      { id: "s10-q2", title: "Weather Filter", icon: "☔", tags: ["JS"], description: "Filter 'reports' for condition == 'clear'.", xp: 250, difficulty: "Hard" },
      { id: "s10-q3", title: "Report Broadcast", icon: "📣", tags: ["JS"], description: "Use forEach to call 'broadcast'.", xp: 250, difficulty: "Hard" }
    ]
  }
};