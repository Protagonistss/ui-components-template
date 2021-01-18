/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  moduleFileExtensions: ["js", "vue"],
  moduleDirectories: ["src", "node_modules"],
  transform: {
    "^.*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    "^.*\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {},
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/__tests__/**/*.spec.js", "**/__tests__/**/*.test.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
