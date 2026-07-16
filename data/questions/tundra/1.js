export default {
  q1: {
    id: "t1-q1",
    title: "Frost Base",
    description: "Create a div with class 'permafrost' to serve as the structural base layer of the tundra.",
    starterCode: { html: `<!-- TODO: Create a div with class 'permafrost' -->`, css: `.permafrost { background: #e9ecef; height: 130px; width: 100%; }` },
    answer: { html: `<div class="permafrost"></div>` },
    targetImage: "/gameplay/tundra-1/targets/q1.png",
  },
  q2: {
    id: "t1-q2",
    title: "Blizzard Warning",
    description: "Wrap 'Extreme wind chill!' in a strong tag to emphasize the freezing alert.",
    starterCode: { html: `<p>Weather Alert: <!-- TODO: Wrap in strong tag -->Extreme wind chill!</p>`, css: `strong { color: #0077b6; font-weight: bold; }` },
    answer: { html: `<p>Weather Alert: <strong>Extreme wind chill!</strong></p>` },
    targetImage: "/gameplay/tundra-1/targets/q2.png",
  },
  q3: {
    id: "t1-q3",
    title: "Shelter Marker",
    description: "Create a link pointing to '/shelter' with the text 'Seek Warmth'.",
    starterCode: { html: `<!-- TODO: Anchor link to /shelter -->`, css: `a { color: #03045e; text-decoration: underline; }` },
    answer: { html: `<a href="/shelter">Seek Warmth</a>` },
    targetImage: "/gameplay/tundra-1/targets/q3.png",
  }
};