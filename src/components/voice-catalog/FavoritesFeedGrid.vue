<template>
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
</template>

<script>
import VoiceCard from '@/components/voice-catalog/VoiceCard.vue'
import Grid from '@/components/generic/Grid.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Grid,
    VoiceCard
  },
  computed: {
    favorites () {
      return this.voices.filter(voice => this.isFavorite(voice.id))
    },
    ...mapState({
      voices: (state) => state.voices.items
    }),
    ...mapGetters('favorites', [
      'isFavorite'
    ])
  }
}
</script>

<style>
  /* d */
</style>
