const path = require('path');

const stylesLoaders = [
  'style-loader',
  'css-loader',
  'postcss-loader',
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.join(__dirname, '../src/styles/colors.scss'),
        path.join(__dirname, '../src/styles/variables.scss'),
        path.join(__dirname, '../src/styles/mixins.scss'),
      ],
    },
  },
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loaders: stylesLoaders,
        include: path.resolve(__dirname, '../'),
      },
    ],
  },

  resolve: {
    modules: [path.join(__dirname, '../src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
};
