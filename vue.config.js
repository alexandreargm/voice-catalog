// const path = require('path')

module.exports = {
  // Fix routes start with '/' on prod. Ref.: https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  css: {
    // ref: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/abstracts/_all.scss";'
      }
    }
  }
}
