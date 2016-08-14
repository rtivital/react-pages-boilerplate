'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var colors = require('colors');

var PORT = 3000;

var serverConfig = {
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
