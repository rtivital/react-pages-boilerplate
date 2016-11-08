const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const pagesBuild = process.env.BUILD === 'pages';

/*********************************** Loaders ***********************************/
const loaders = [
  { // react-hot is implemented as babel plugin now
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: path.join(__dirname, 'src'),
    exclude: /node_modules/,
  },

  { // used for all project files and some dependencies
    test: /\.scss$/,
    loader: production
      ? ExtractTextPlugin.extract(['css', 'postcss', 'sass', 'sass-resources'])
      : ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap', 'sass-resources'].join('!'),
    include: path.join(__dirname, 'src'),
  },

  { // used for dependencies that don't support sass
    test: /\.css$/,
    loaders: ['style', 'css', 'postcss'],
  },

  { // svg sprites generated only for icons
    test: /\.svg$/,
    loader: `svg-sprite?${JSON.stringify({ name: '[hash]', prefixize: true })}`,
    include: path.join(__dirname, 'src/ui/Icon'),
  },

  { // other svg images will processed as normal
    test: /\.svg$/,
    loader: 'file',
    include: path.join(__dirname, 'src'),
    exclude: path.join(__dirname, 'src/ui/Icon'),
  },
];

// Plugins used in all builds
const pluginsBase = [
  new HtmlWebpackPlugin({
    title: 'Colorizr',
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
      BUILD: JSON.stringify(process.env.BUILD || ''),
    },
  }),
];

const developmentPlugins = [
  ...pluginsBase,
  new webpack.HotModuleReplacementPlugin(),
];

const productionPlugins = [
  ...pluginsBase,
  new ExtractTextPlugin('style.css'),
  new LodashModuleReplacementPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
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

module.exports.loaders = loaders;
module.exports.plugins = {
  base: pluginsBase,
  development: developmentPlugins,
  production: productionPlugins,
};

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
    publicPath: pagesBuild ? '/react-challenge-colorizr' : '/',
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

  sassResources: './src/styles/resources/**/*.scss',
  postcss: [autoprefixer({ browsers: ['last 4 versions'] })],
};
