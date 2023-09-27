module.exports = {
    // Run all the tests
    bail: false,
    testEnvironment: "jsdom",
    globalTeardown: "jest-autograding-reporter/teardown.js",
  
    // The glob patterns Jest uses to detect test files
    // testMatch: [
    //   "**/__tests__/**/*.[jt]s?(x)",
    //   "**/?(*.)+(spec|test).[tj]s?(x)"
    // ],
  };