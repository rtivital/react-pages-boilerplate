module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/enzyme.setup.js'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: { '\\.(css|less)$': 'identity-obj-proxy' },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(css|less)$)': 'identity-obj-proxy',
  },
};
