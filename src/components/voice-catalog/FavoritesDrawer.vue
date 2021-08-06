<template>
  <drawer class="favorites-drawer" :is-open="favoritesDrawerIsOpen" @close-drawer="toggleFavoriteDrawer" >
    <template #title>
      Favorites
    </template>

    <template #header>
      <div class="favorites-drawer__searchbar">
        <searchbar />
      </div>
    </template>

    <div class="favorites-drawer__grid">
      <grid class="is-compact">
        <voice-card
          v-for="favorite in favorites"
          :key="favorite.id"
          :id="favorite.id"
          :name="favorite.name"
          :icon="favorite.icon"
          :tags="favorite.tags"
        />
      </grid>
    </div>
  </drawer>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Drawer from '@/components/Drawer.vue'
import Searchbar from '@/components/voice-catalog/Searchbar.vue'
import VoiceCard from '@/components/voice-catalog/VoiceCard.vue'
import Grid from '@/components/Grid.vue'

export default {
  components: {
    Drawer,
    Searchbar,
    VoiceCard,
    Grid
  },
  computed: {
    favorites () {
      return this.voices.filter(voice => this.isFavorite(voice.id))
    },
    ...mapState({
      voices: (state) => state.voices.items,
      favoritesDrawerIsOpen: (state) => state.favorites.isDrawerOpen
    }),
    ...mapGetters('favorites', [
      'isFavorite'
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

  &__grid {
    background-color: $surface1;
  }
}
</style>
