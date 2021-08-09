<template>
  <grid class="voices-feed-grid">
    <voice-card
      v-for="voice in getVoices"
      :key="voice.id"
      :id="voice.id"
      :name="voice.name"
      :icon="voice.icon"
      :tags="voice.tags"
    />
  </grid>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Grid from '@/components/generic/Grid.vue'
import VoiceCard from '@/components/voice-catalog/VoiceCard.vue'

export default {
  components: {
    VoiceCard,
    Grid
  },
  computed: {
    ...mapGetters('voices', [
      'getVoices'
    ])
  },
  methods: {
    ...mapActions('voices', [
      'fetchVoices'
    ])
  },
  created () {
    this.fetchVoices()
  }
}
</script>

<style>
  /* ad */
</style>
