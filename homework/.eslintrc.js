module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/standard'
  ],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off', // 關閉單行 HTML 元素內容換行規則
    'vue/multiline-html-element-content-newline': 'off', // 關閉多行 HTML 元素內容換行規則
    'vue/max-attributes-per-line': 'off', // 關閉 Vue 文件中的每行最大屬性數規則
    'max-attributes-per-line': 'off' // 關閉 JavaScript 文件中的每行最大屬性數規則
  }
}
