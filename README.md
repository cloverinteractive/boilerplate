[ ![Codeship Status for cloverinteractive/boilerplate](https://app.codeship.com/projects/32a66b90-7cbd-0135-5c44-361f0802280c/status?branch=master)](https://app.codeship.com/projects/245775)
[![Coverage Status](https://coveralls.io/repos/github/cloverinteractive/boilerplate/badge.svg)](https://coveralls.io/github/cloverinteractive/boilerplate)

# Faster application bootstrapping

Tired of having to configure a pretty large boilerplate each time you're about to start a new React project? This project
may be right up your alley.

## Pre-requisites

There is only one pre-requisite to successfully run this boilerplate and that is a recent installation of **Node.js®** you can find an installer for your OS [here](https://nodejs.org/en/)
or use your OS's favorite package manager.

## Installation

To start using this you have a couple of options:

### Use curl to download

If you have `curl`, `gzip` and `tar` you can curl straight into `tar` like this:

```sh
curl -L "https://github.com/cloverinteractive/boilerplate/archive/stable.tar.gz" | tar -zxvf -
cd boilerplate-stable # Go into the boilerplate folder
npm install
```

### Download zip file from browser

If you prefer using a browser just click [here](https://github.com/cloverinteractive/boilerplate/archive/stable.zip) to get the latest stable zip file.
Once unziped just go into the project folder and run `npm install`


### Git clone this repository

You can always just clone this repository using git:

```sh
git clone --branch stable git@github.com:cloverinteractive/boilerplate.git
cd boilerplate
npm install
```

# Bundled libraries

* [Babel](https://babeljs.io/) - The compiler for writing next generation JavaScript
* [Eslint](https://eslint.org/) - Pluggable JavaScript linter
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [ReasonML](https://reasonml.github.io/) - Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems.
* [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain Javascript.
* [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
* [React Router](https://reacttraining.com/react-router/) - Declarative Routing for React.js
* [Webpack](https://webpack.js.org/concepts/) - Webpack is a module bundler for modern JavaScript applications.

## Server Rendering

The server code lives in `src/server`, express will automatically render your components
with every new request, the idea is that search engines can index pages with content instead of blank html templates.

# Running the app

The app reads your current `NODE_ENV` environment variable, when set to *production* it will run express with the statically built asset,
when set to anything else it will run the app through *webpack-dev-server* with hmre.

```sh
npm start # Run in development mode
npm run start:prod # Run in production mode
```

*NOTE*: Keep in mind that starting in production relies on your code being built first and your `NODE_ENV` to be set to
`production`. Read the [Building the app](#building-the-app) section for more info on this.

## Running in Docker

Another way to run the app in production is to use docker just try the following:

```sh
docker build -t boiler .
docker run --rm -it -p 8080:8080 boiler
```

After running this you should be able to visit the production build via `http://localhost:8080`.

## Building the app

We use *webpack* to build our bundles, just run `npm run build` this will build your bundle into the `build` (server code) and `public` (browser code)
directories with every asset in packaged.

### Do I need to build?

If you're only running this app in development environment then no, you only need to build for to run in production.

# Where is everything?

Every part of the app's boilerplate is organized in it's own folder, here's a quick rundown of how things are organized:

1. Webpack configuration is in the `config/webpack` folder.
1. All code live in the `src/` folder.
1. Server code specifically can ben found at `src/server`.
1. ReasonML tests live inside `__tests__` folder, tests are suffixed by *_test.re* and flat directory structure at the module level.
1. TypeScript and Javascript tests are at the same folder the file they're testing is, tests are suffixed by *.test*.

## Practices

These are recommendations, you should write code in any way that makes sense for you and your app.

### ReasonML

We've includen support for [ReasonML](https://reasonml.github.io/), we think it's a step in the right direction for writing type safe,
code that builds fast and is runtime error free, it also feels like the perfect language to write react components in.

Reason types will be checked automatically at compile time; if you need to share types with [TypeScript](https://www.typescriptlang.org/)
we've preconfigured [genType](https://github.com/cristianoc/genType), just tag the types you'd like to share with `[@genType]` and voilà
you just need to import from `YourFile.gen` in your [TypeScript](https://www.typescriptlang.org/) and you'll be good to go.

We recommend looking at the [genType](https://github.com/cristianoc/genType) documentation for more advance tagging tips.

### TypeScript

We've included [TypeScript](https://www.typescriptlang.org/) support, if you're not ready to get your feet wet with ReasonML we recommend using 
typescript you should feel right at home and can start adding type annotations at your own pace, we recommend reading
[this](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html#write-some-code) guide on how to write React components with TypeScript.

```sh
npm run check-types # Check all TypeScript files
```

You can still access `tsc` directly via `npx` like so:

```sh
npx tsc
```

### Run eslint

Even if we're sure we haven't introduced anything new, it can't hurt to lint check our files, you can lint your whole project by running:

```sh
npm run lint # Runs eslint against the whole codebase (except compiled code)
```

You can access `eslint` directly via `npx` like so:

```sh
npx eslint --ext .jsx src/components/Messages.jsx # Lint a single file
npx eslint --fix --ext .jsx src/components/Messages.jsx # Lint and try to fix a single file
```

### Write tests, run tests

If you're modifying or introducing a new feature, make sure to write/update a test for it, if you remove a file make sure to remove the test cases/examples for
the code you removed.

```sh
npm test # Runs the whole test suite
npm test -- src/components/Messages.test.jsx # Runs a single test file
npm run test:coverage # Runs full test suite and calculates code coverage
```

# Recommendations

There are no enforced rules on how to write your code, this is how we've written things and what works for us.
However you should do what makes sense to you and your app.

* Use [ReasonML](https://reasonml.github.io/) to write as much code as you feel comfortable with.
* Use `.jsx` and `.tsx` extension for React components written in ES6 or TypeScript.
* When writing [ReasonML](https://reasonml.github.io/) use valid module names for each test suffixed by `_test.re` and place them under `__tests__`
at your module level
* When writing tests for ES6 or TypeScript put tests right next to the file they're testing so they're caught by `eslint` too.
* Favor types over `PropTypes`.
