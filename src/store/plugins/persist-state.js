const FAVORITES_KEY = 'vc-favorites'

const islocalStorageAvailable = () => {
  const test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}

function restoreState (store) {
  if (!islocalStorageAvailable) return false

  const getStoredFavorites = getFavorites()

  if (getStoredFavorites.length === 0) return false

  store.commit('voices/SET_FAVORITE_VOICES', getStoredFavorites)
  return true
}

function setFavorites (favorites) {
  try {
    const newFavoritesJson = JSON.stringify(favorites)

    localStorage.setItem(FAVORITES_KEY, newFavoritesJson)
    return true
  } catch (error) {
    console.error('setFavorites', error)
    return false
  }
}

function getFavorites () {
  try {
    const getFavoriteIdsJson = localStorage.getItem(FAVORITES_KEY)
    if (!getFavoriteIdsJson) return false

    return JSON.parse(getFavoriteIdsJson)
  } catch (error) {
    console.error('getFavorites', error)
    return false
  }
}

function addFavorite (favoriteId) {
  const getStoredFavorites = getFavorites()
  if (!favoriteId || !Array.isArray(getStoredFavorites)) return false

  setFavorites([favoriteId, ...getStoredFavorites])
  return true
}

function removeFavorite (favorideId) {
  const getStoredFavorites = getFavorites()
  if (!favorideId || !Array.isArray(getStoredFavorites)) return false

  setFavorites(getStoredFavorites.filter(storedFavoriteId => storedFavoriteId !== favorideId))
  return true
}

export default store => {
  restoreState(store)

  store.subscribe(mutation => {
    if (mutation.type === 'voices/ADD_FAVORITE_VOICE') {
      addFavorite(mutation.payload)
    }

    if (mutation.type === 'voices/REMOVE_FAVORITE_VOICE') {
      removeFavorite(mutation.payload)
    }
  })
}
