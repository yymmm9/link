module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'standard-with-typescript',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'next-env.d.ts', 'tsconfig.json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-refresh', 'react'],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': 'off',
    '@next/next/no-head-element': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react-refresh/only-export-components': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': [2, { allowReferrer: false }],
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "object-curly-newline": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "none",
        "requireLast": false
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false
      }
    }],
    "@typescript-eslint/semi": "off",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "@typescript-eslint/space-infix-ops": "error",
    "avoidEscape": 1,
    "allowTemplateLiterals": 1
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ]
}
