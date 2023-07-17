module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'warn',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'multiline-ternary': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: 'ActionTypes' }],
    '@typescript-eslint/ban-ts-comment': 'warn',
    // Add any additional rules or overrides here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
