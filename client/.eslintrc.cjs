module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.html'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'prettier', 'unused-imports', 'perfectionist'],
  rules: {
    '@typescript-eslint/no-explicit-any': [2, { ignoreRestArgs: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'warn',
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'type',
          'parent',
          'sibling',
          'index',
          'object',
          'style',
        ],
        'newlines-between': 'never',
        order: 'asc',
        type: 'natural',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/display-name': 'error',
    'react/prop-types': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { args: 'all', argsIgnorePattern: '^_$', vars: 'all' },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
