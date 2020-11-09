module.exports = {
  'env': {
      'browser': true,
      'es6': true,
      'node': true,
  },
  'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:flowtype/recommended',
  ],
  'globals': {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
  },
  'parser': 'babel-eslint',
  'parserOptions': {
      'ecmaFeatures': {
          'jsx': true
      },
      'ecmaVersion': 2020,
      'sourceType': 'module'
  },
  'plugins': [
      'react',
      'react-native'
  ],
  'rules': {
      "no-console": "error",
      "no-trailing-spaces": 2,
      "no-empty": [
        'error',
        {
          "allowEmptyCatch": true
        }
      ],
      "react/display-name": 0,
      "react/prop-types": 0,
      'indent': [
          'error',
          2
      ],
      'linebreak-style': [
          'error',
          'unix'
      ],
      'quotes': [
          'error',
          'single'
      ],
      'semi': [
          'error',
          'always'
      ]
  }
};