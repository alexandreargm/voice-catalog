const state = {
  ids: [],
  isDrawerOpen: false
}

const getters = {
  getFavorites (state) {
    return state.ids
  },
  isFavorite (state) {
    return id => state.ids.find(favoriteId => favoriteId === id) !== undefined
  },
  isDrawerOpen (state) {
    return state.isDrawerOpen
  }
}

const actions = {
  addVoiceToFavorites ({ commit, getters }, voice) {
    const { id } = voice
    const isAlreadyFavorite = getters.isFavorite(id)
    if (isAlreadyFavorite) return false

    commit('ADD_FAVORITE', id)
    return true
  },
  toggleDrawer ({ commit, getters }) {
    const isOpen = getters.isDrawerOpen
    const newState = !isOpen

    commit('SET_IS_DRAWER_OPEN', newState)
  }
}

const mutations = {
  ADD_FAVORITE (state, voiceId) {
    state.ids.push(voiceId)
  },
  SET_IS_DRAWER_OPEN (state, isOpen) {
    state.isDrawerOpen = isOpen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
