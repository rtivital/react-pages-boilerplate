module.exports = {
  automock: false,
  browser: true,
  bail: false,
  verbose: false,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**', '!**/public/**'],
  coverageDirectory: '<rootDir>/coverage',
  globals: { __DEV__: !0 },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  moduleNameMapper: { '\\.(css|less|styl|scss|sass|sss)$': 'identity-obj-proxy' },
  transform: {
    '\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(js|jsx|json|css|less|styl|scss|sass|sss)$)': 'identity-obj-proxy',
  },
};
