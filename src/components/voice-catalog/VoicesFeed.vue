<template>
  <section class="voices-feed">
    <voices-feed-filters v-model="findOptions" class="voices-feed__filters" />

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
import searchFilters from '@/mixins/search-filters'
import Grid from '@/components/generic/Grid.vue'
import VoiceCard from '@/components/voice-catalog/VoiceCard.vue'
import VoicesFeedFilters from './VoicesFeedFilters.vue'

export default {
  mixins: [searchFilters],
  components: {
    VoiceCard,
    Grid,
    VoicesFeedFilters
  },
  data () {
    return {
      findOptions: {}
    }
  },
  computed: {
    filteredVoices () {
      return this.getFilteredVoices(this.getVoices, this.findOptions)
    },
    ...mapGetters('voices', [
      'getVoices'
    ])
  },
  methods: {
    getFilteredVoices (voices, searchOptions) {
      const { text, category, order } = searchOptions
      const isSearching = Boolean(text || category || order)
      const orderFunctions = {
        popular: ({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB), // A to Z
        unpopular: ({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB) < 0 ? 1 : -1 // Z to A
      }

      let filteredVoices = voices

      if (!isSearching) return filteredVoices

      // Filter by category
      filteredVoices = this.getByTagFilter(filteredVoices, category)

      // Filter by name
      filteredVoices = this.getByNameFilter(filteredVoices, text)

      // Order result
      filteredVoices = this.getInOrderFilter(filteredVoices, order, orderFunctions)

      return filteredVoices
    },
    handleRandomVoice () {
      const randomVoice = this.getRandomFilter(this.filteredVoices)

      this.filteredVoices = randomVoice
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
