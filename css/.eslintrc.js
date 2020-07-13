module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {},
  globals: {},
  rules: {
    'capitalized-comments': 'error',
    camelcase: 'error',
    'guard-for-in': 'off',
    // "@typescript-eslint/consistent-type-definitions": ["error", "interface"]
    // '@typescript-eslint/consistent-type-definitions': 'off'
    '@typescript-eslint/no-parameter-properties': 'off'
  }
};
