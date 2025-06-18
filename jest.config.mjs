/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'text-summary'],
  coveragePathIgnorePatterns: [
    '/bundle-metadata.ts$', // Uses rollup-replace for injected values, hard to test.
  ],
}
