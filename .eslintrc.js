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
    'react/no-danger': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'global-require': 'off',
    'spaced-comment': 'off',
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
  },

  settings: {
    'import/resolver': {
      webpack: {},
    },
  },
};
