export default function getReduxDevTools() {
  const devtoolsEnabled = process.env === 'development' && typeof global.devToolsExtension === 'function';
  const devTools = devtoolsEnabled ? global.devToolsExtension() : f => f;
  return devTools;
}
