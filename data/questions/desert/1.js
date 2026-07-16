export default {
  q1: {
    id: "d1-q1",
    title: "Dune Canvas",
    description: "Create a standard main container block to act as the primary dune layer. Assign it the class 'dune'.",
    starterCode: { html: `<!-- TODO: Create a div element with the class 'dune' -->`, css: `.dune { background: #e3d5ca; height: 100px; width: 100%; border-radius: 50% 50% 0 0; }` },
    hints: ["Use a standard <div> element and assign class=\"dune\" to it."],
    answer: { html: `<div class="dune"></div>` },
    targetImage: "/gameplay/desert-1/targets/q1.png",
  },
  q2: {
    id: "d1-q2",
    title: "Caravan Route Text",
    description: "Mark up an important warning for travelers. Wrap the text 'Beware the mirage' in a semantic emphasis tag.",
    starterCode: { html: `<p>A sign reads: <!-- TODO: Wrap in an em tag --> Beware the mirage.</p>`, css: `em { color: #d62828; font-style: italic; }` },
    hints: ["Use the semantic <em> tag around the target text."],
    answer: { html: `<p>A sign reads: <em>Beware the mirage</em>.</p>` },
    targetImage: "/gameplay/desert-1/targets/q2.png",
  },
  q3: {
    id: "d1-q3",
    title: "The Oasis Link",
    description: "Create an anchor element that points to the local path '/oasis'. The text must say 'Drink Water'.",
    starterCode: { html: `<!-- TODO: Create an anchor link pointing to '/oasis' -->`, css: `a { color: #0077b6; text-decoration: underline; }` },
    hints: ["Use an <a> tag and set the href attribute to \"/oasis\"."],
    answer: { html: `<a href="/oasis">Drink Water</a>` },
    targetImage: "/gameplay/desert-1/targets/q3.png",
  },
};