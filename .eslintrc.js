module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true // Habilita soporte para BigInt
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020 // Soporte para ES2020
  },
  rules: {
    'no-unused-vars': 'error',
    'no-undef': 'error'
  }
};

