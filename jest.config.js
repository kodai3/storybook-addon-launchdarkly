// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupFiles.js'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
