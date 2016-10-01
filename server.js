'use strict';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.babel';
import colors from 'colors';

const PORT = 3000;

const serverConfig = {
  contentBase: './public',
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
};

new WebpackDevServer(webpack(webpackConfig), serverConfig)
  .listen(PORT, 'localhost', err => {
    err && console.log(err);
    console.log(`Listening at ${`http://localhost:${PORT}/`.green}`);
  });
