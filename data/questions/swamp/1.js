export default {
  q1: {
    id: "sw1-q1",
    title: "Muddy Patch",
    description: "Create a div with class 'mud' to serve as the structural base layer of the swamp.",
    starterCode: { html: ``, css: `.mud { background: #3c2f2f; height: 110px; width: 100%; }` },
    answer: { html: `<div class="mud"></div>` },
    targetImage: "/gameplay/swamp-1/targets/q1.png",
  },
  q2: {
    id: "sw1-q2",
    title: "Crocodile Warning",
    description: "Wrap 'Danger! Crocodile spotted!' in a strong tag to emphasize the alert.",
    starterCode: { html: `<p>Mire Alert: Danger! Crocodile spotted!</p>`, css: `strong { color: #d90429; font-weight: bold; }` },
    answer: { html: `<p>Mire Alert: <strong>Danger! Crocodile spotted!</strong></p>` },
    targetImage: "/gameplay/swamp-1/targets/q2.png",
  },
  q3: {
    id: "sw1-q3",
    title: "Bioluminescent Trail",
    description: "Create a link pointing to '/escape-route' with the text 'Follow Fireflies'.",
    starterCode: { html: ``, css: `a { color: #70e000; text-decoration: none; }` },
    answer: { html: `<a href="/escape-route">Follow Fireflies</a>` },
    targetImage: "/gameplay/swamp-1/targets/q3.png",
  }
};