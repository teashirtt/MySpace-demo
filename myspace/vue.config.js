const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'https://app165.acapp.acwing.com.cn/api/token/api',
              changeOrigin: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  },
  publicPath: '/static'
};