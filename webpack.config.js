'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var glob = require('glob');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3002',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      title: 'React App',
      template: 'template.ejs',
    }),

    new FaviconsWebpackPlugin({
      logo: './favicon.png',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      },
    }),

    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('development') },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      },

      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass', 'sass-resources'],
        include: path.join(__dirname, 'src'),
      },

      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loaders: ['file']
      },

      {
        test: /\.svg$/,
        loader: 'svg-sprite?' + JSON.stringify({ name: '[hash]', prefixize: true }),
        include: path.join(__dirname, 'src/components/ui/Glyph'),
      },

      {
        test: /\.svg$/,
        loader: 'file',
        include: path.join(__dirname, 'src/'),
        exclude: path.join(__dirname, 'src/components/ui/Icon'),
      },
    ],
  },

  sassResources: glob.sync('./src/styles/resources/**/*.scss'),
};
