<template>
  <drawer class="favorites-drawer" :is-open="favoritesDrawerIsOpen" @close-drawer="toggleFavoriteDrawer" >
    <template #title>
      Favorites
    </template>

    <template #header>
      <div class="favorites-drawer__searchbar">
        <searchbar v-model="test" />
      </div>
    </template>

    <div class="favorites-drawer__body">
      <favorites-feed-grid />
    </div>
  </drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Drawer from '@/components/Drawer.vue'
import Searchbar from '@/components/voice-catalog/Searchbar.vue'
import FavoritesFeedGrid from './FavoritesFeedGrid.vue'

export default {
  components: {
    Drawer,
    Searchbar,
    FavoritesFeedGrid
  },
  data () {
    return {
      test: null
    }
  },
  computed: {
    ...mapState({
      favoritesDrawerIsOpen: (state) => state.favorites.isDrawerOpen
    })
  },
  methods: {
    ...mapActions('favorites', [
      'toggleFavoriteDrawer'
    ])
  }
}
</script>

<style lang="scss">
.favorites-drawer {
  &__searchbar {
    background-color: $surface1;
    padding: $spacing;

    @include breakpoint('tablet') {
      padding: $spacing $spacing-lg;
    }
  }

  &__body {
    background-color: $surface1;
    flex-grow: 1;
  }
}
</style>
