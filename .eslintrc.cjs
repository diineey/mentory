module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [ 'vue' ],
  rules: {
    'no-console': 'warn',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'warn',
    'semi': [ 'error', 'always' ],
    'quotes': [ 'error', 'single' ],
    'indent': [ 'error', 2, { SwitchCase: 1 } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-curly-newline': [ 'error', {
      ObjectExpression: { multiline: true, minProperties: 3 },
      ObjectPattern: { multiline: true, minProperties: 3 },
      ImportDeclaration: { multiline: true, minProperties: 3 },
      ExportDeclaration: { multiline: true, minProperties: 3 },
    } ],
    'no-multiple-empty-lines': [ 'error', { max: 1 } ],
    'vue/require-default-prop': 'off',
    'vue/attributes-order': 'error',
    'vue/no-unused-components': 'warn',
    'vue/html-indent': [ 'error', 2 ],
    'vue/max-attributes-per-line': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-v-html': 'off',
  }
};
