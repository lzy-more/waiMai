/*
 * @Author: your name
 * @Date: 2020-06-08 15:20:46
 * @LastEditTime: 2020-06-11 16:37:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\.eslintrc.js
 */ 
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // rules: {
  //   // allow async-await
  //   'generator-star-spacing': 'off',
  //   // allow debugger during development
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  // }
}
