const config = require('../webpack.config');

module.exports = {
  module: { loaders: config.module.loaders },
  plugins: process.env.NODE_ENV === 'production' ? config.plugins : [],
  sassResources: config.sassResources,
  postcss: config.postcss,
};
