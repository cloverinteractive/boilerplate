[ ![Codeship Status for cloverinteractive/boilerplate](https://app.codeship.com/projects/32a66b90-7cbd-0135-5c44-361f0802280c/status?branch=master)](https://app.codeship.com/projects/245775)

# Pre-requisites

You'll need a couple of things installed before you can get this app boilerplate to run:

1. node
2. yarn

```sh
# on a Mac
brew install nodejs
brew install yarn
```

# Bundled libraries

* [Babel](https://babeljs.io/) - The compiler for writing next generation JavaScript
* [Eslint](https://eslint.org/) - Pluggable JavaScript linter
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Flow](https://flow.org/) - A Static Type Checker for JavaScript
* [Mocha](https://mochajs.org/) - The fun, simple, flexible JavaScript test framework
* [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
* [React Router](https://reacttraining.com/react-router/) - Declarative Routing for React.js
* [Redux](http://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
* [Semantic-UI](https://semantic-ui.com/) - Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.
* [Webpack](https://webpack.js.org/concepts/) - Webpack is a module bundler for modern JavaScript applications.

# Running the app

The app reads your current `NODE_ENV` when set to *production* it will run express with the statically built assets, when set to anything else it will run the app
through *webpack-dev-server* with hmre.

```sh
yarn start # Run in development environment unless NODE_ENV globally set
NODE_ENV=production yarn start # Run in production environment
```

## Building the app

We use *webpack* to build our bundles, just run `yarn build` this will build your bundle into the `build` directory with every asset in packaged.

### Do I need to build?

If you're only running this app in development environment then no, you don't need to, this is for deployment only.


# Where is everything?

Every part of the app's boilerplate is organized in it's own folder, here's a quick rundown of how things are organized:

1. Webpack configuration is in the *config* folder.
2. Tests live inside of *specs* organized by a `client` and `server` folders, spec files are suffiexed by  *-spec.js*.
3. Application files live in *client* for frontend and *server* for backend.

## Practices

Make sure you do the following whenever you're coding:

### Run eslint

Even if we're sure we haven't introduced anything new, it can't hurt to lint check our files, you can run `eslint` on the whole project by running:

```
yarn lint
```

If you want lint to try and automatically fix the files for you run:

```
yarn lint:fix
```

You can run eslint only in your file by running:

```
yarn eslint path/to/your/file.js
```

# Flow

We've included [flow](https://flow.org/) static typing, we recommend using it for your store and/or React components, check these two links out:

* [Learn how to type React class components and stateless functional components with Flow](https://flow.org/en/docs/react/components/)
* [Remove React PropTypes by using Flow Annotations (in CRA)](https://egghead.io/lessons/angular-1-x-remove-react-proptypes-by-using-flow-annotations-in-cra)


### Write tests, run tests

If you're modifying or introducing a new test make sure to write/update a test for it, if you remove a file make sure you also remove the test cases/examples for
the code you removed. To run the whole test suite run:

```
yarn spec
```

You can set our test suite to watch for changes by running:

```
yarn spec:watch
```

# Recommendations

This boilerplate is very opinonates, however there are no enforced rules on how to write your code, this is how we've written things and what works for us.
However you should do what makes sense to you and your app.

* Use `.jsx` extension for React components.
* Use [feature](#feature-structure) struture/approach to writing new components.
* When writing new tests make the folder structure match that of the feature you're testing.
* Use flow types over prop-types

# Feature structure

I recommend that rather than having a single folder for every component in your app and having a single folder for the store and another for the actions, instead you
write a folder per feature containing every layer that feature requires, the reason for this is scalability, think of your features as independent npm packages that
can be removed or added into your app.

If you look into this projects `client` folder you can see that there are two feature folders `main` and `pages` and general `components` folder where standalone
components live. I recommend reading these two articles by [Jack Hsu](https://jaysoo.ca) that go over this in a more eloquently.

* [Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)
* [The Anatomy Of A React & Redux Module (Applying The Three Rules)](https://jaysoo.ca/2016/02/28/applying-code-organization-rules-to-concrete-redux-code/)

Again, go with what makes sense for you and your app, we've gone with this approached because it has worked for us and has made maintaining our app, testing, and adding
new features a lot simpler. Another good approach to application structure is the [Ducks](https://github.com/erikras/ducks-modular-redux), I recommend taking a look into
it as well and make an educated decision about your application structure.
