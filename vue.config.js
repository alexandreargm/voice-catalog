// const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  css: {
    // ref: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/abstracts/_all.scss";'
      }
    }
  }
}
