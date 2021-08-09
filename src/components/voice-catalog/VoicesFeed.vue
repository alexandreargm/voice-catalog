<template>
  <section class="voices-feed">
    <voice-searchbar v-model="searchOptions" @submit="handleFeedSearch" class="voices-feed__searchbar" />

    <grid class="voices-feed__grid">
      <voice-card
        v-for="voice in getVoices"
        :key="voice.id"
        :id="voice.id"
        :name="voice.name"
        :icon="voice.icon"
        :tags="voice.tags"
      />
    </grid>
  </section>
</template>

<script>
import VoiceSearchbar from './VoiceSearchbar.vue'
import Grid from '@/components/generic/Grid.vue'
import VoiceCard from '@/components/voice-catalog/VoiceCard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    VoiceCard,
    Grid,
    VoiceSearchbar
  },
  data () {
    return {
      searchOptions: {}
    }
  },
  computed: {
    ...mapGetters('voices', [
      'getVoices'
    ])
  },
  methods: {
    handleFeedSearch () {
      console.log('searching feed')
    },
    ...mapActions('voices', [
      'fetchVoices'
    ])
  },
  created () {
    this.fetchVoices()
  }
}
</script>

<style lang="scss">
.voices-feed {
  padding: $padding;
}
</style>
