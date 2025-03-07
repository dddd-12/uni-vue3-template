import unocss from '@unocss/eslint-config/flat'

export default [
  unocss,
  // other configs
  {
    rules: {
      'no-console': 'off',
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
      'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
      'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
      'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
      'vue/first-attribute-linebreak': 'off', // 对模板中的自定义组件强制执行属性命名样式
      'no-alert': 'off',
    },
    extends: [
      './.eslintrc-auto-import.json',
    ],
  }
]
