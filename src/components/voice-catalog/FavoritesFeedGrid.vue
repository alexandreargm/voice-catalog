<template>
  <grid class="is-compact">
    <voice-card
      v-for="favorite in getFavorites"
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
import { mapGetters } from 'vuex'

export default {
  components: {
    Grid,
    VoiceCard
  },
  computed: {
    // favorites () {
    //   // return this.getFavorites()
    // },
    ...mapGetters('voices', [
      'getVoices',
      'getFavorites'
    ])
  }
}
</script>

<style>
  /* d */
</style>
