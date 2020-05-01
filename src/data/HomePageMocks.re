type library = {
  description: string,
  library: string,
  url: string,
};

let pagesTree = "src/pages/
|__ Error404.re
|__ Error505.re
|__ Home.re
";

let componentTree = "src/components/
|__ Dismissable.re
|__ MessageContext.re
|__ Messages.re
|__ Nav.re
|__ Notification.re
|__ ReactRouter.re";

let librariesList = [
  {
    description: "The compiler for writing next generation JavaScript",
    library: "Babel",
    url: "https://babeljs.io",
  },
  {
    description: "Pluggable JavaScript linter",
    library: "Eslint",
    url: "https://eslint.org",
  },
  {
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    library: "Express",
    url: "https://expressjs.com",
  },
  {
    description: "Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems.",
    library: "ReasonML",
    url: "https://reasonml.github.io/",
  },
  {
    description: "A typed superset of JavaScript that compiles to plain Javascript",
    library: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    description: "A JavaScript library for building user interfaces",
    library: "React",
    url: "https://facebook.github.io/react/",
  },
  {
    description: "Declarative Routing for React.js",
    library: "React Router",
    url: "https://reacttraining.com/react-router/",
  },
  {
    description: "Webpack is a module bundler for modern JavaScript applications.",
    library: "Webpack",
    url: "https://webpack.js.org/concepts/",
  },
];