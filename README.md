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
* [Tslint](https://palantir.github.io/tslint/) - An extensible linter for the TypeScript Language
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain Javascript.
* [Mocha](https://mochajs.org/) - The fun, simple, flexible JavaScript test framework
* [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
* [React Router](https://reacttraining.com/react-router/) - Declarative Routing for React.js
* [Redux](http://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
* [Semantic-UI](https://semantic-ui.com/) - Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.
* [Webpack](https://webpack.js.org/concepts/) - Webpack is a module bundler for modern JavaScript applications.

## Server Rendering

The server code lives in `src/server` the reason for this is Server Rendering, express will automatically render your components
with every new request, the idea is that search engines can index pages with content instead of blank html templates.

## CSS modules

By default css-modules are turned on, meaning that your class names will change to somewhat semi-random strings, however
this may not be ideal if you're using some vendor css framework (like semantic-ui or bootstrap), to work around this,
you can create stysheet files suffixed with `global.css` and `css-modules` will be turned off for said file, this is meant
to help you deal with vendor overrides, check `src/css/global.css` to see it in action.

Because using `:global {}` and `@import` don't work together and there's no css-modules compatible version of every css framework, being able to have files ignored by css-modules make's it easy to import our css framework or global css and immediately override things in the same file.

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
1. Tests live inside of the `test/` folder, test filenames are suffixed with *-test.js* and folder structure will match that of the `src/` folder structure.

## Practices

Make sure you do the following whenever you're coding:

### Use TypeScript

We've included [TypeScript](https://www.typescriptlang.org/) support, we recommend using it for your store and/or React components, check
[this](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html#write-some-code) guide on how to write React components with TypeScript.

Note that this is completely optional, but we recommend you start writing statically typed code.

```sh
npm run check-types # Check all TypeScript files
```

You can still access `tsc` directly via `npx` like so:

```sh
npx tsc
```

### Run eslint and tslint

Even if we're sure we haven't introduced anything new, it can't hurt to lint check our files, you can lint your whole project by running:

```sh
npm run lint # Runs eslint and tslint against the whole codebase
npm run lint:eslint # Only runs eslint agains the whole project
npm run lint:tslint # Only runs tslint agains the whole project
```

You can access `eslint` and `tslint` directly via `npx` like so:

```sh
npx eslint --ext .jsx src/components/Dismissable.jsx # Lint a single file
npx eslint --fix --ext .jsx src/components/Dismissable.jsx # Lint and try to fix a single file
```

### Write tests, run tests

If you're modifying or introducing a new feature, make sure to write/update a test for it, if you remove a file make sure to remove the test cases/examples for
the code you removed.

```sh
npm test # Runs the whole test suite
npm test -- test/components/Dismissable-test.js # Runs a single test file
npm test -- --watch # Runs the test suite and watches the file system for changes
npm run test:coverage # Runs full test suite and calculates code coverage
```

# Recommendations

This boilerplate is very opinonated, however there are no enforced rules on how to write your code, this is how we've written things and what works for us.
However you should do what makes sense to you and your app.

* Use `.jsx` extension for React components.
* Use `.ts` and `.tsx` for typescript respectively.
* Use [domain](#domain-structure) struture/approach to writing new components.
* When writing new tests make the folder structure match that of the feature you're testing.
* Use flow types over prop-types

# Domain structure

I recommend that rather than having a single folder for every component in your app and having a single folder for the store and another for the actions, instead you
write a folder by domain/feature containing every layer that feature requires, the reason for this is scalability, think of your features as independent npm packages that
can be removed or added into your app.

If you look into this projects `src` folder you can see that there are two feature folders `main` and `pages` and a general `components` folder where standalone
components live. I recommend reading these two articles by [Jack Hsu](https://jaysoo.ca) that go over this in a more eloquently.

* [Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)
* [The Anatomy Of A React & Redux Module (Applying The Three Rules)](https://jaysoo.ca/2016/02/28/applying-code-organization-rules-to-concrete-redux-code/)

I also recommend reading the following article by redux co-author [Dan Abramov](https://medium.com/@dan_abramov).

* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

Again, go with what makes sense for you and your app, we've gone with this approached because it has worked for us and has made maintaining our app, testing, and adding
new features a lot simpler. Another good approach to application structure is the [Ducks](https://github.com/erikras/ducks-modular-redux), I recommend taking a look into
it as well and make an educated decision about your application structure.
