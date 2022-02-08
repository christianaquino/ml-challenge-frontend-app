module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
};
