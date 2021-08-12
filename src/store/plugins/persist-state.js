const FAVORITES_KEY = 'vc-favorites'

const islocalStorageAvailable = () => {
  var test = 'test'
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
  const isOldStateEmpty = getStoredFavorites.length === 0

  if (isOldStateEmpty) return false

  store.commit('voices/SET_FAVORITE_VOICES', getStoredFavorites)
}

function setFavorites (favorites) {
  const newFavoritesJson = JSON.stringify(favorites)

  localStorage.setItem(FAVORITES_KEY, newFavoritesJson)
}

function getFavorites () {
  const getFavoriteIdsJson = localStorage.getItem(FAVORITES_KEY)
  if (!getFavoriteIdsJson) return []

  return JSON.parse(getFavoriteIdsJson)
}

function addFavorite (favoriteId) {
  const getStoredFavorites = getFavorites()

  setFavorites([favoriteId, ...getStoredFavorites])
}

function removeFavorite (favorideId) {
  const getStoredFavorites = getFavorites()

  setFavorites(getStoredFavorites.filter(storedFavoriteId => storedFavoriteId !== favorideId))
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
