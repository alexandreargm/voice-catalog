// Convention used: https://docs.vuestorefront.io/v1/guide/vuex/vuex-conventions.html

import Vue from 'vue'
import Vuex from 'vuex'
import voices from './modules/voices'
import favorites from './modules/favorites'
import categories from './modules/categories'

Vue.use(Vuex)

const isDevelopment = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: isDevelopment,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    voices,
    favorites,
    categories
  }
})
