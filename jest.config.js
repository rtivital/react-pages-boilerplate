module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/enzyme.setup.js'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: { '\\.(css|less)$': 'identity-obj-proxy' },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    '^(?!.*\\.(css|less)$)': 'identity-obj-proxy',
  },
};
