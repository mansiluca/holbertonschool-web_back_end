module.exports = {
    env: {
      browser: false,
      es6: true,
    },
    extends: [
      'airbnb-base',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [],
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides:[
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      },
      {
        files: ['*.test.js', '*.spec.js'],
        env: {
          jest: true,
        },
        plugins: ['jest'],
        extends: ['plugin:jest/all'],
      }
    ]
  };