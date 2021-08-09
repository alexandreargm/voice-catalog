const state = {
  all: []
}

const getters = {
  getCategories: state => state.all
}

const actions = {
  async fetchCategories ({ commit }) {
    const getCategoriesJson = await fetch('categories.json')
    const getCategories = await getCategoriesJson.json()

    commit('SET_CATEGORIES', getCategories)
  }
}

const mutations = {
  SET_CATEGORIES (state, categories) {
    state.all = categories
  }
}

// "namespaced" is required to avoid calling multiple
// actions/mutations at the same time.
// Ref: https://vuex.vuejs.org/guide/modules.html#namespacing
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
