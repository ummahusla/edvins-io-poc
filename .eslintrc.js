module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugins: ['react'],
  globals: {
    graphql: false
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  }
};
