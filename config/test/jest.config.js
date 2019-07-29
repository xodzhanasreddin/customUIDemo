module.exports = {
  rootDir: '../../',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json'
    }
  },
  setupFiles: [
    '<rootDir>/config/test/enzyme.config.ts',
    '<rootDir>/config/test/jest.setup.ts'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/test/mocks/styleMock.ts',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/src/test/mocks/fileMock.ts'
  }
};