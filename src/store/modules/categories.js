const categoiesJson = [{ id: 'misc', title: 'Miscellaneous' }, { id: 'devices', title: 'Devices' }, { id: 'human', title: 'Human' }, { id: 'robotic', title: 'Robotic' }, { id: 'sing', title: 'Sing' }, { id: 'environment', title: 'Environment' }, { id: 'character', title: 'Character' }, { id: 'horror', title: 'Horror' }]
const isStaticWebsite = process.env.NODE_ENV === 'production'

const state = {
  all: []
}

const getters = {
  getCategories: state => state.all
}

const actions = {
  // Only works when running in a webserver like with "npm run dev"
  async fetchCategories ({ commit }) {
    // Load categories json workaround when running static website
    if (isStaticWebsite) {
      commit('SET_VOICES', categoiesJson)

      return categoiesJson
    }

    const getCategoriesJson = await fetch('categories.json')
    const getCategories = await getCategoriesJson.json()

    commit('SET_CATEGORIES', getCategories)

    return getCategories
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
