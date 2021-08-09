const state = {
  all: []
}

const getters = {
  getVoices: state => state.all
}

const actions = {
  async fetchVoices ({ commit }) {
    const getVoicesJson = await fetch('voices.json')
    const getVoices = await getVoicesJson.json()

    commit('SET_VOICES', getVoices)

    return getVoices
  }
}

const mutations = {
  SET_VOICES (state, voices) {
    state.all = voices
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
