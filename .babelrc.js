module.exports = {
  presets: ['@babel/preset-react', ['@babel/preset-env', { modules: false }]],

  plugins: ['@babel/plugin-proposal-export-default-from'],
};
