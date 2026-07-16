export default {
  q1: {
    id: "o1-q1",
    title: "Coral Canvas",
    description: "Create a standard main container block to act as the primary coral reef layer. Assign it the class 'reef'.",
    starterCode: { html: `<!-- TODO: Create a div element with the class 'reef' -->`, css: `.reef { background: #ff7f50; height: 100px; width: 100%; border-radius: 10px; }` },
    hints: ["Use a standard <div> element and assign class=\"reef\" to it."],
    answer: { html: `<div class="reef"></div>` },
    targetImage: "/gameplay/ocean-1/targets/q1.png",
  },
  q2: {
    id: "o1-q2",
    title: "Shark Warning",
    description: "Mark up an important warning for divers. Wrap the text 'Shark spotted' in a semantic strong tag.",
    starterCode: { html: `<p>Sonar readings indicate: <!-- TODO: Wrap in a strong tag --> Shark spotted.</p>`, css: `strong { color: #d62828; font-weight: bold; }` },
    hints: ["Use the semantic <strong> tag around the target text."],
    answer: { html: `<p>Sonar readings indicate: <strong>Shark spotted</strong>.</p>` },
    targetImage: "/gameplay/ocean-1/targets/q2.png",
  },
  q3: {
    id: "o1-q3",
    title: "Surface Link",
    description: "Create an anchor element that points to the local path '/surface'. The text must say 'Swim Up'.",
    starterCode: { html: `<!-- TODO: Create an anchor link pointing to '/surface' -->`, css: `a { color: #90e0ef; text-decoration: none; font-weight: bold; }` },
    hints: ["Use an <a> tag and set the href attribute to \"/surface\"."],
    answer: { html: `<a href="/surface">Swim Up</a>` },
    targetImage: "/gameplay/ocean-1/targets/q3.png",
  }
};