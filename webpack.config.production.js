'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var glob = require('glob');

module.exports = {
  entry: ['./src/index', 'babel-polyfill'],

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
    new webpack.DefinePlugin({
      'process.env':{ 'NODE_ENV': JSON.stringify('production') },
    }),

    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    }),

    new HtmlWebpackPlugin({
      title: 'React App',
      template: 'template.ejs',
    }),

    new ExtractTextPlugin('style.css'),

    new FaviconsWebpackPlugin({
      logo: './favicon.png',
      background: '#628ce1',
    }),

    new webpack.optimize.DedupePlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass!sass-resources!postcss'),
        include: path.join(__dirname, 'src'),
      },

      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
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
  postcss: [ autoprefixer({ browsers: ['last 4 versions'] }) ] ,
};
