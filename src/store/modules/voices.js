const state = {
  all: [],
  favoriteIds: []
}

const getters = {
  getVoices: state => state.all,
  getFavorites: state => state.all.filter(voice => state.favoriteIds.includes(voice.id)),
  isFavoriteVoice: state => id => state.favoriteIds.find(favoriteId => favoriteId === id) !== undefined
}

const actions = {
  async fetchVoices ({ commit }) {
    const getVoicesJson = await fetch('voices.json')
    const getVoices = await getVoicesJson.json()

    commit('SET_VOICES', getVoices)

    return getVoices
  },
  addFavoriteVoice ({ commit, getters }, voiceId) {
    const isFavorite = getters.isFavoriteVoice(voiceId)
    if (isFavorite) return false

    commit('ADD_FAVORITE_VOICE', voiceId)
    return true
  },
  removeFavoriteVoice ({ commit, getters }, voiceId) {
    if (getters.isFavoriteVoice(voiceId)) return false

    commit('REMOVE_FAVORITE_VOICE', voiceId)
    return true
  },
  toggleFavoriteVoice ({ commit, getters }, voiceId) {
    if (getters.isFavoriteVoice(voiceId)) {
      commit('REMOVE_FAVORITE_VOICE', voiceId)
      return false
    }

    commit('ADD_FAVORITE_VOICE', voiceId)
    return true
  }
}

const mutations = {
  SET_VOICES (state, voices) {
    state.all = voices
  },
  ADD_FAVORITE_VOICE (state, voiceId) {
    state.favoriteIds.push(voiceId)
  },
  REMOVE_FAVORITE_VOICE (state, voiceId) {
    const getVoiceIndex = state.favoriteIds.findIndex(favoriteId => favoriteId === voiceId)
    state.favoriteIds.splice(getVoiceIndex, 1)
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
