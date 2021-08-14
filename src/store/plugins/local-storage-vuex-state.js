class LocalStorageVuexState {
  #favoritesKey = 'vc-favorites'

  setFavorites (favorites) {
    try {
      const newFavoritesJson = JSON.stringify(favorites)

      localStorage.setItem(this.#favoritesKey, newFavoritesJson)
      return true
    } catch (error) {
      throw new Error(`${error.name}: ${error.message}`)
    }
  }

  getFavorites () {
    try {
      const getFavoriteIdsJson = localStorage.getItem(this.#favoritesKey)
      if (!getFavoriteIdsJson) return false

      return JSON.parse(getFavoriteIdsJson)
    } catch (error) {
      throw new Error(`${error.name}: ${error.message}`)
    }
  }

  addFavorite (favoriteId) {
    const getStoredFavorites = this.getFavorites()
    if (!favoriteId || !Array.isArray(getStoredFavorites)) return false

    this.setFavorites([favoriteId, ...getStoredFavorites])
    return true
  }

  removeFavorite (favorideId) {
    const getStoredFavorites = this.getFavorites()
    if (!favorideId || !Array.isArray(getStoredFavorites)) return false

    this.setFavorites(getStoredFavorites.filter(storedFavoriteId => storedFavoriteId !== favorideId))
    return true
  }

  #islocalStorageAvailable () {
    const test = 'test'
    try {
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch (e) {
      return false
    }
  }

  initFavoritesStorage () {
    this.setFavorites([])
  }

  restoreState (store) {
    if (!this.#islocalStorageAvailable) return false

    const getStoredFavorites = this.getFavorites()

    if (!Array.isArray(getStoredFavorites)) {
      this.initFavoritesStorage()
      return false
    }

    store.commit('voices/SET_FAVORITE_VOICES', getStoredFavorites)
    return true
  }
}

export default store => {
  const localStorageState = new LocalStorageVuexState()

  localStorageState.restoreState(store)

  store.subscribe(mutation => {
    if (mutation.type === 'voices/ADD_FAVORITE_VOICE') {
      localStorageState.addFavorite(mutation.payload)
    }

    if (mutation.type === 'voices/REMOVE_FAVORITE_VOICE') {
      localStorageState.removeFavorite(mutation.payload)
    }
  })
}
