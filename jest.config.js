/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '/__tests__/.*\\.(test|spec)\\.(t|j)sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
  },
};
