module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.*test.(ts|tsx|js)'],
  transform: {
    '\\.ts$': [ 
      "esbuild-jest", 
      { 
        sourcemap: true
      } 
    ],
  },
  collectCoverage: true,
  // Note: seems to be a bug in Jest - despite this setting, code coverage
  // is only reported for files under test or referenced in the test suite
  collectCoverageFrom: ['(functions|core|services)/**/*.{ts,js}'],
  // Note: if you have more than 1 worker, then Jest spins up worker child processes,
  // but it *doesn't* pass command line arguments to those subprocesses. That breaks
  // sls-test-tools, which requires things to be passed on the command line.
  // see https://stackoverflow.com/questions/67456849/cant-get-full-process-argv-list-when-passing-custom-arguments-to-jest
  // maxWorkers: 1,
};
