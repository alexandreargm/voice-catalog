const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        images: path.resolve(__dirname, 'src/assets/images')
      }
    }
  },
  css: {
    // ref: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/abstracts/_all.scss";'
      }
    }
  }
}
