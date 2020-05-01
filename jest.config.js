module.exports = {
  bail: 1,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.js{,x}',
    'src/**/*.ts{,x}',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'src/server',
    'src/shims',
    'src/index.jsx',
    'src/route*',
    'src/components/ReactRouter.bs.js', // This is a reason binding
    '.*\.gen\.tsx?',
  ],
  moduleNameMapper: {
    '\\.(css|s[ac]ss)$': '<rootDir>/node_modules/jest-css-modules',
  },
  transform: {
    '^.+\\.[jt]sx?': 'babel-jest',
  },
  modulePaths: [
    './src',
  ],
  setupFiles: [
    './config/enzyme.js',
  ],
  testEnvironment: 'jsdom',
};
