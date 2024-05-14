const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  entry: './i18n/locales/zh-CN',
  entryLocale: 'zh-CN',
  output: './i18n/locales',
  outputLocales: ['zh-CN', 'zh-TW', 'en-US', 'ja-JP', 'ko-KR', 'ru-RU'],
});
