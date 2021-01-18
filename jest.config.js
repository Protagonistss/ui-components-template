/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  moduleDirectories: ["src", "node_modules"],
  transform: {
    "^.*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {},
  testMatch: [],
};
