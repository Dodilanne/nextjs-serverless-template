// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/prop-types': 'off', // Using TypeScript types instead,
    'jsx-a11y/anchor-is-valid': 'off', // Href will mostly be on Link tag,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
