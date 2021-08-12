module.exports = {
  // Set route for gh-pages. Ref.: https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.NODE_ENV === 'production' ? '/voice-catalog/' : '/',
  css: {
    // ref: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/abstracts/_all.scss";'
      }
    }
  }
}
