# voice-catalog

Voice catalog is built using Vue 2.

Check out the [live demo](https://alexandreargm.github.io/voice-catalog/).

**Tools used:**
* [Scss](https://sass-lang.com/) for general styling and for keeping consistency by using variables and mixins.
* [Vuex](https://vuex.vuejs.org/) for state, events, and local persistance.
* [Normalize.css](https://necolas.github.io/normalize.css/) to get a solid base for styling.
* [Body scroll lock](https://github.com/willmcpo/body-scroll-lock) to avoid having two scrolls at the same time.
* [Postcss-env-preset](https://preset-env.cssdb.org/) for improving support for new css features.

**Features:**
* Search by text and category.
* Alphabetical sorting (popular is A to Z, and less popular is Z to A).
* Saving cards to favorites.
* Favorite are stored persistant between sessions.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
