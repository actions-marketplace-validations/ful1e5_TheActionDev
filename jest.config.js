module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$",
  collectCoverageFrom: ["<rootDir>/**/*.ts"],
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  verbose: true
};
