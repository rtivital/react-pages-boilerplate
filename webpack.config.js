const path = require('path');
const getRepositoryName = require('git-repo-name');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const development = process.env.NODE_ENV === 'development';
const pagesBuild = process.env.BUILD === 'pages';
const repositoryName = pagesBuild && getRepositoryName.sync();

const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      './src/styles/variables.scss',
      './src/styles/mixins.scss',
    ],
  },
};

const stylesLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader',
  sassResourcesLoader,
];

const loaders = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: path.join(__dirname, 'src'),
    exclude: /node_modules/,
  },

  {
    test: /\.(css|scss)$/,
    loader: development
      ? ['style-loader', ...stylesLoaders]
      : ExtractTextPlugin.extract({ fallback: 'style-loader', use: stylesLoaders }),
  },

  {
    test: /\.(svg|png|jpg|gif|woff|woff2|otf|ttf|eot)$/,
    loader: 'file-loader',
  },
];

// Plugins used in all builds
const pluginsBase = [
  new HtmlWebpackPlugin({
    template: 'template.ejs',
  }),

  new FaviconsWebpackPlugin({
    logo: './favicon.png',
    background: '#ffeeee',
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
      windows: false,
    },
  }),

  new webpack.DefinePlugin({
    'process.env': { // build is used for gh-pages
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
    },
  }),
];

const developmentPlugins = [
  ...pluginsBase,
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({ url: 'http://localhost:3002' }),
];

const productionPlugins = [
  ...pluginsBase,
  new ExtractTextPlugin('[name].css'),
  new LodashModuleReplacementPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
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
  devtool: production ? 'cheap-module-source-map' : 'eval',

  entry: production
    ? ['babel-polyfill', './src/index']
    : [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3002',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      './src/index',
    ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: pagesBuild ? `/${repositoryName}/` : '/',
  },

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json'],
  },

  module: { loaders },
  plugins: production ? productionPlugins : developmentPlugins,
};
