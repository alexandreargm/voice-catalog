const state = {
  ids: []
}

const getters = {
  getFavorites: state => state.ids
}

const actions = {
  addVoiceToFavorites ({ commit }, voice) {
    const { id } = voice
    commit('SET_FAVORITE', id)
  }
}

const mutations = {
  SET_FAVORITE (state, voiceId) {
    state.ids.push(voiceId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
