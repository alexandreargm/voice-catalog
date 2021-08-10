const state = {
  isDrawerOpen: false
}

const getters = {
  isFavoriteDrawerOpen (state) {
    return state.isDrawerOpen
  }
}

const actions = {
  toggleFavoriteDrawer ({ commit, getters }) {
    const isOpen = getters.isFavoriteDrawerOpen
    const newState = !isOpen

    commit('SET_IS_DRAWER_OPEN', newState)
  }
}

const mutations = {
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
