module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
