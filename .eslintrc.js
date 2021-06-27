module.exports = {
  plugins: ['simple-import-sort', 'sort-destructure-keys', 'tsdoc', 'react-hooks', 'testing-library'],
  rules: {
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': ['error', { groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']] }],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
        'no-invalid-this': 'warn',
      },
    },
    { files: ['*.ts', '*.tsx'], rules: { 'tsdoc/syntax': 'warn' } },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: { 'react/prop-types': 'off' },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },

  extends: ['standard-with-typescript', 'standard-react', 'prettier'],

  env: { jest: true, browser: true, node: true },
  ignorePatterns: ['/*.js', '/*.jsx', '/*.ts', '/*.tsx'],
};
