const state = {
  ids: []
}

const getters = {
  getFavorites: state => {
    return state.ids
  },
  getFavoriteById: state => id => {
    return state.ids.find(favoriteId => favoriteId === id)
  }
}

const actions = {
  addVoiceToFavorites ({ commit, getters }, voice) {
    const { id } = voice
    const isAlreadyFavorite = getters.getFavoriteById(id)
    if (isAlreadyFavorite) return false

    commit('ADD_FAVORITE', id)
    return true
  }
}

const mutations = {
  ADD_FAVORITE (state, voiceId) {
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
