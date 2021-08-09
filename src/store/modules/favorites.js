const state = {
  ids: [],
  isDrawerOpen: false
}

const getters = {
  getFavoritesIds (state) {
    return state.ids
  },
  getFavoritesByFiltering (state) {
    return voices => {
      if (!voices) throw new Error('"getFavorites" Vuex getter requires a voices object param to filter')

      return voices.filter(voice => state.ids.includes(voice.id))
    }
  },
  isFavorite (state) {
    return id => state.ids.find(favoriteId => favoriteId === id) !== undefined
  },
  isFavoriteDrawerOpen (state) {
    return state.isDrawerOpen
  }
}

const actions = {
  addFavorite ({ commit, getters }, voiceId) {
    const isFavorite = getters.isFavorite(voiceId)
    if (isFavorite) return false

    commit('ADD_FAVORITE', voiceId)
    return true
  },
  removeFavorite ({ commit, getters }, voiceId) {
    if (getters.isFavorite(voiceId)) return false

    commit('REMOVE_FAVORITE', voiceId)
    return true
  },
  toggleFavorite ({ commit, getters }, voiceId) {
    if (getters.isFavorite(voiceId)) {
      commit('REMOVE_FAVORITE', voiceId)
      return false
    }

    commit('ADD_FAVORITE', voiceId)
    return true
  },
  toggleFavoriteDrawer ({ commit, getters }) {
    const isOpen = getters.isFavoriteDrawerOpen
    const newState = !isOpen

    commit('SET_IS_DRAWER_OPEN', newState)
  }
}

const mutations = {
  ADD_FAVORITE (state, voiceId) {
    state.ids.push(voiceId)
  },
  REMOVE_FAVORITE (state, voiceId) {
    const getVoiceIndex = state.ids.findIndex(id => id === voiceId)
    state.ids.splice(getVoiceIndex, 1)
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
