export default {
  q1: {
    id:"f1-q1",
    title:"Planting a Seed",
    description:"Write the basic structure of a seed using a division element. It needs the correct class name to look right in the game view.",
    starterCode: { html: `<!-- TODO: Create a div element with the class name 'seed' -->`, css: `.seed { width: 40px; height: 40px; background-color: #d2b48c; border-radius: 50%; }` },
    hints: [
         "Use a standard <div> element and assign class=\"seed\" to it."
    ],
    answer: { html: `<div class="seed"></div>` },
    targetImage: "/gameplay/forest-1/targets/q1.png",
  },
  q2: {
   id: "f1-q2",
    title: "The Elder's Signpost",
    description: "Every forest explorer needs a title pointing them in the right direction. Create a top-level heading saying 'Welcome to the Forest'.",
    starterCode: {
      html: `<!-- TODO: Create a main Heading element saying 'Welcome to the Forest' -->`,
      css: `h1 { color: #2d6a4f; text-align: center; font-family: sans-serif; }`
    },
    hints: [
      "Use the standard <h1> tag to represent a top-level main heading."
    ],
    answer: {
      html: `<h1>Welcome to the Forest</h1>`
    },
    targetImage: "/gameplay/forest-1/targets/q2.png",
  },
  q3: {
    id: "f1-q3",
    title: "Forest Navigation Link",
    description: "Create an anchor link that points to '#oasishaven' so travelers can find their way out. The link text must say 'Find Oasis'.",
    starterCode: {
      html: `<!-- TODO: Create a link pointing to the '#oasishaven' anchor target -->`,
      css: `a { color: #4cc9f0; text-decoration: none; font-weight: bold; }`
    },
    hints: [
      "Use an <a> tag with an 'href' attribute pointing to '#oasishaven'."
    ],
    answer: {
      html: `<a href="#oasishaven">Find Oasis</a>`
    }, 
    targetImage: "/gameplay/forest-1/targets/q3.png",
  },
};
