/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const webpackConfig = require('../webpack.config');
const SETTINGS = require('../settings');

const serverConfig = {
  contentBase: './public',
  publicPath: '/',
  stats: { colors: true },
  hot: true,
  historyApiFallback: true,
};

new WebpackDevServer(webpack(webpackConfig), serverConfig)
  .listen(SETTINGS.PORT, 'localhost', (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`
        Listening at ${chalk.bold.cyan(`http://localhost:${SETTINGS.PORT}/`)}.
        Browser will be opened automaticly when webpack finish building.
      `);
    }
  });
