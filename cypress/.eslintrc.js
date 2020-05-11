module.exports = {
  'extends': [
      'airbnb',
      'eslint:recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
      'ecmaFeatures': {
          'jsx': true
      }
  },
  'plugins': [
      'jsx-a11y',
      'cypress'
  ],
  'rules': {
      'indent': [
          'error',
          4,
          {
              'SwitchCase': 1
          }
      ],
      'max-len': [
          'error',
          {
              'code': 140,
              'ignoreComments': true
          }
      ],
      'comma-dangle': [
          'off'
      ],
      'linebreak-style': [
          'off'
      ],
      'no-use-before-define': [
          'off'
      ],
      'no-param-reassign': [
          'warn',
          {
              'props': false
          }
      ],
      'no-return-assign': [
          'error',
          'except-parens'
      ],
      'function-paren-newline': [
          'error',
          'consistent'
      ],
      'object-curly-newline': [
          'error',
          {
              'consistent': true
          }
      ],
      'no-plusplus': [
          'error',
          {
              'allowForLoopAfterthoughts': true
          }
      ],
      'operator-linebreak': [
          'error',
          'after'
      ],
      'no-confusing-arrow': [
          'error',
          {
              'allowParens': true
          }
      ],
      'import/prefer-default-export': [
          'off'
      ],
      'import/no-extraneous-dependencies': [
          'error',
      ],
      'import/no-named-as-default-member': [
          'off'
      ]
  },
  'env': {
      'es6': true
  },
  'globals': {
      'cy': true,
      'Cypress': true,
      'describe': true,
      'before': true,
      'after': true,
      'it': true,
      'expect': true,
  }
}
