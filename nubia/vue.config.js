module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/show': {
        target: 'https://m.nubia.com',
        changeOrigin: true
      }
    }

  },
  lintOnSave: true // 打开eslint 检查
}
