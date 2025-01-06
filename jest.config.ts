// Ref: https://jestjs.io/docs/configuration

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '/__tests__/.*\\.(test|spec)\\.(t|j)sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@lism-internal/components/(.*)': '<rootDir>/src/components/$1',
    '^@lism-internal/hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@lism-internal/utils/(.*)': '<rootDir>/src/utils/$1',
    '^@lism-internal/shared/(.*)': '<rootDir>/src/shared/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
