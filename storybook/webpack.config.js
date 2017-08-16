const path = require('path');
const webpack = require('@kadira/storybook/node_modules/webpack');
const autoprefixer = require('autoprefixer');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

const loaders = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: path.join(__dirname, 'src'),
    exclude: /node_modules/,
  },

  {
    test: /\.scss$/,
    loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap', 'sass-resources'],
  },

  {
    test: /\.css$/,
    loaders: ['style', 'css', 'postcss'],
  },

  {
    test: /\.(svg|png|jpg|gif|woff|woff2|otf|ttf|eot|ico)$/,
    loader: 'file-loader',
    query: {
      name: 'file/[hash].[ext]',
    },
  },
];

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  }),
  new OpenBrowserWebpackPlugin({ url: 'http://localhost:3003' }),
];

module.exports = {
  entry: ['babel-polyfill', './src/client'],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    root: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['', '.js', '.jsx'],
  },

  module: { loaders },
  plugins,

  sassResources: [
    './src/styles/variables.scss',
    './src/styles/mixins.scss',
  ],

  postcss: [autoprefixer({ browsers: ['last 4 versions'] })],
};
