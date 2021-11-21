/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "/__tests__/.*\\.(test|spec)\\.(t|j)sx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@utils/(.*)": "<rootDir>/src/utils/$1",
  },
};
