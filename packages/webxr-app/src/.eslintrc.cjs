// packages/webxr-app/.eslintrc.cjs
module.exports = {
  root: true, // Indicate this is the root config for this package
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // Use the TypeScript parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // Link parser to tsconfig for type-aware linting rules (optional but recommended)
    project: './tsconfig.json',
  },
  // Add the TypeScript plugin and recommended rules
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended', // Base ESLint rules
    'plugin:@typescript-eslint/recommended', // Recommended TypeScript rules
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking', // Optional: More strict rules requiring type info
  ],
  rules: {
    // Customize rules here
    '@typescript-eslint/no-unused-vars': 'warn', // Warn about unused variables (TS version)
    'no-unused-vars': 'off', // Disable base rule as TS rule handles it
    'no-console': 'off', // Allow console.log
    '@typescript-eslint/no-explicit-any': 'warn', // Warn if 'any' type is used
    // Example: Allow THREE namespace usage
    // '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
  },
  ignorePatterns: ['dist', 'node_modules', '*.cjs', '*.js'], // Ignore JS config files too now
};