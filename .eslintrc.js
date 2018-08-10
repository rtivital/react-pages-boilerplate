module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:jest/recommended'],
  plugins: ['jest'],
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },

  rules: {
    // disabled for condition && someFunc()
    'no-unused-expressions': 'off',

    // backend developers like _, no need to transform data all the time
    camelcase: 'off',

    // just the formatting issues, prettier does all the job
    'object-curly-newline': 'off',
    'spaced-comment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    // increase max line length to 100
    'max-len': [
      'error',
      100,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // pray that backend developer will send sanatized html
    'react/no-danger': 'off',

    // there is no need to pass default props all the time
    'react/require-default-props': 'off',

    // sort react component properties whatever you like
    'react/sort-comp': 'off',

    // sometimes there is no alternative
    'react/no-array-index-key': 'off',

    // redux actions do not work well with this
    'import/prefer-default-export': 'off',

    // this rule throws an error with imported prop-types
    // https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'react/no-typos': 'off',
  },

  settings: {
    'import/resolver': {
      webpack: {},
    },
  },
};
