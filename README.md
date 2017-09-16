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

# Running the app

The app reads your current `NODE_ENV` when set to *production* it will run express with the static built assets, when set to anything else it will run the app through *webpack-dev-server* with hmre.

```sh
yarn start # Run development unless NODE_ENV globally set
NODE_ENV=production yarn start
```

## Building the app

We use *webpack* to build our bundles, just run `yarn build` this will build your bundle into the `build` directory with every asset in packaged.

### Do I need to build?

If you're only running this app in development environment then no, you don't need to, this is for deployment only.


# Where is everything?

Every part of the app's boilerplate is organized in it's own folder, here's a quick rundown of how things are organized:

1. Webpack configuration is in the *config* folder.
2. Tests live inside of *specs* as a good practice make test files end in *_spec.js* and create subfolders to match components subfolders.
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

If you're modifying or introducing a new test make sure to write/update a test for it, if you remove a file make sure you also remove the test cases/examples for the code you removed. To run the whole test suite run:

```
yarn spec
```

You can set our test suite to watch for changes by running:

```
yarn spec:watch
```
