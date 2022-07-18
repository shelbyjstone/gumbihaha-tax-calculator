module.exports = {
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/lib/**/*.[jt]s?(x)',
    '!**/tests/**',
    '!**/node_modules/**',
  ],
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.(j|t)s',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '\\.ts$': ['ts-jest'],
  },
};
