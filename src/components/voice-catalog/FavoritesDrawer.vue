<template>
  <drawer class="favorites-drawer" :is-open="isFavoriteDrawerOpen" @close-drawer="toggleFavoriteDrawer" >
    <template #title>
      Favorites
    </template>

    <template #header>
      <div class="favorites-drawer__searchbar">
        <search-input
          v-model="searchValue"
          placeholder="Search in favorites"
        />
      </div>
    </template>

    <div class="favorites-drawer__body">
      <favorites-feed :search-value="searchValue" />
    </div>
  </drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Drawer from '@/components/generic/Drawer.vue'
import FavoritesFeed from '@/components/voice-catalog/FavoritesFeed.vue'
import SearchInput from '../elements/SearchInput.vue'

export default {
  components: {
    Drawer,
    SearchInput,
    FavoritesFeed
  },
  data () {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters('favoritesDrawer', [
      'isFavoriteDrawerOpen'
    ])
  },
  methods: {
    ...mapActions('favoritesDrawer', [
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
