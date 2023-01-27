module.exports = {
  env: { browser: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
  ],
  settings: {
    nodeResolvedImports: false,
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'react/prop-types': 0,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/click-events-have-key-events': 1,
  },
}
