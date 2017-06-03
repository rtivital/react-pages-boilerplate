const path = require('path');
const webpack = require('@kadira/storybook/node_modules/webpack');
const autoprefixer = require('autoprefixer');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
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


const pluginsBase = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  }),
];

const developmentPlugins = [
  ...pluginsBase,
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserWebpackPlugin({ url: 'http://localhost:3003' }),
];

const productionPlugins = [
  ...pluginsBase,
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    comments: false,
    compress: {
      sequences: true,
      booleans: true,
      loops: true,
      unused: false,
      warnings: false,
      drop_console: true,
      unsafe: true,
    },
  }),
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
  plugins: production ? productionPlugins : developmentPlugins,

  sassResources: [
    './src/styles/variables.scss',
    './src/styles/mixins.scss',
  ],
  postcss: [autoprefixer({ browsers: ['last 4 versions'] })],
};
