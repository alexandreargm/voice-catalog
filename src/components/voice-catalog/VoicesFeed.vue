<template>
  <section class="voices-feed">
    <voices-feed-filters v-model="searchOptions" class="voices-feed__filters" />

    <grid class="voices-feed__grid">
      <voice-card
        v-for="voice in filteredVoices"
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
import { mapGetters, mapActions } from 'vuex'
import Grid from '@/components/generic/Grid.vue'
import VoiceCard from '@/components/voice-catalog/VoiceCard.vue'
import VoicesFeedFilters from './VoicesFeedFilters.vue'

export default {
  components: {
    VoiceCard,
    Grid,
    VoicesFeedFilters
  },
  data () {
    return {
      searchOptions: {}
    }
  },
  computed: {
    filteredVoices () {
      return this.getFilteredVoices(this.searchOptions)
    },
    ...mapGetters('voices', [
      'getVoices',
      'getFilteredVoices'
    ])
  },
  methods: {
    handleFeedSearch () {
      console.log('searching feed')
    },
    handleRandomVoice () {
      console.log('random')
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
  &__filters {
    padding: $padding;

    @include breakpoint('tablet') {
      padding: $padding-xl;
    }
  }
}
</style>
