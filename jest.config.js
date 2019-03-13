module.exports = {
  displayName: 'test',
  setupFilesAfterEnv: [
    /*
      Once this project has been moved to its own repo, change to:
      '<rootDir>/node_modules/jest-enzyme/lib/index.js'
    */
    '<rootDir>/node_modules/jest-enzyme/lib/index.js',
    './__tests__/support/setup-after-env.js'
  ],
  setupFiles: [
    './__tests__/support/shims.js',
    './__tests__/support/enzyme-setup.js',
    './__tests__/support/jest-setup.js'
  ],
  testURL: 'http://localhost',
  moduleNameMapper: {
    '^.+\\.(css|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/support/jest-file-mock.js'
  },
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/fixtures',
    '<rootDir>/__tests__/support'
  ]
}
