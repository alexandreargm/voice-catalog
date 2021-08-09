<template>
  <drawer class="favorites-drawer" :is-open="isFavoriteDrawerOpen" @close-drawer="toggleFavoriteDrawer" >
    <template #title>
      Favorites
    </template>

    <template #header>
      <div class="favorites-drawer__searchbar">
        <!-- <voice-searchbar v-model="test" /> -->
      </div>
    </template>

    <div class="favorites-drawer__body">
      <favorites-feed-grid />
    </div>
  </drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Drawer from '@/components/generic/Drawer.vue'
import FavoritesFeedGrid from '@/components/voice-catalog/FavoritesFeedGrid.vue'
// import VoiceSearchbar from './VoiceSearchbar.vue'

export default {
  components: {
    Drawer,
    // VoiceSearchbar,
    FavoritesFeedGrid
  },
  data () {
    return {
      test: null
    }
  },
  computed: {
    ...mapGetters('favorites', [
      'isFavoriteDrawerOpen'
    ])
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
