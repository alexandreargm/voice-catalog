// Convention used: https://docs.vuestorefront.io/v1/guide/vuex/vuex-conventions.html

import Vue from 'vue'
import Vuex from 'vuex'
import voices from '@/store/modules/voices'
import favoritesDrawer from '@/store/modules/favoritesDrawer'
import categories from '@/store/modules/categories'
import persistState from '@/store/plugins/persist-state'

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
    favoritesDrawer,
    categories
  },
  plugins: [persistState]
})
