/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');
const chalk = require('chalk');


const PORT = 3002;

const serverConfig = {
  contentBase: './public',
  publicPath: '/',
  stats: { colors: true },
  hot: true,
  historyApiFallback: true,
};

new WebpackDevServer(webpack(webpackConfig), serverConfig)
  .listen(PORT, 'localhost', err => {
    err && console.error(err);
    console.log(`
      Listening at ${chalk.bold.cyan(`http://localhost:${PORT}/`)}.
      Browser will be opened automaticly when webpack finish building.
    `);
  });
