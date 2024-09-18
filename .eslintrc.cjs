module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'next-env.d.ts', 'tsconfig.json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react-refresh', 'react'],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': 'off',
    '@next/next/no-head-element': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react-refresh/only-export-components': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': [2, { allowReferrer: false }],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    'no-multiple-empty-lines': ['warn', { max: 1 }], // Change to warn
    'prefer-const': 'warn', // Change to warn instead of error
    '@typescript-eslint/no-unused-vars': 'warn', // Change to warn
    'react/react-in-jsx-scope': 'off' // Disable this rule
  },
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' }
    }
  ]
}
