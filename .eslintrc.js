module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [ 'eslint:recommended', 'google' ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'new-cap': [ 'error', {
      'newIsCap': true,
      'capIsNew': false,
    } ],
    'no-invalid-this': 0,
    'max-len': [ 'error', { 'code': 120 } ],
    'require-jsdoc': [ 'error', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': false,
        'ClassDeclaration': false,
      },
    } ],
    'no-unused-vars': 0,
  },
};
