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
yarn run start # Run development unless NODE_ENV globally set
NODE_ENV=production yarn run start
```

## Building the app

We use *webpack* to build our bundles, just run `yarn run build` this will build your bundle into the `build` directory with every asset in packaged.

### Do I need to build?

If you're only running this app in development environment then no, you don't need to, this is for deployment only.


# Where is everything?

Every part of the app's boilerplate is organized in it's own folder, here's a quick rundown of how things are organized:

1. Webpack configuration is in the *webpack* folder.
2. Tests live inside of *specs* as a good practice make test files end in *_spec.js* and create subfolders to match components subfolders.
3. Application files live in *app*.

## Practices

Make sure you do the following whenever you're coding:

### Run eslint

Even if we're sure we haven't introduced anything new, it can't hurt to lint check our files, you can run `eslint` on the whole project by running:

```
yarn run lint
```

If you want lint to try and automatically fix the files for you run:

```
yarn run lint:fix
```

You can run eslint only in your file by running:

```
yarn run eslint path/to/your/file.js
```

### Write tests, run tests

If you're modifying or introducing a new test make sure to write/update a test for it, if you remove a file make sure you also remove the test cases/examples for the code you removed. To run the whole test suite run:

```
yarn run spec
```

You can set our test suite to watch for changes by running:

```
yarn run spec:watch
```

You can run any specific spec by doing:

```
NODE_PATH=$NODE_PATH:$PWD/app ./node_modules/mocha/bin/mocha --require spec/helpers/browser.js path/to/your/spec.js
```

It's a lot more involved but that's because we're doing multiple things:

1. We're updating `NODE_PATH` to include our path's entry point so that we don't need absolute component paths in our files.
2. We required the `browser.js` helper to run our spec.

Yarn is pretty fast it may be easier to just run the whole suite.
