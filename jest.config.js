module.exports = {
  bail: 1,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.js{,x}',
    'src/**/*.ts{,x}',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '.bs.js',
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
