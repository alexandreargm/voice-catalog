<template>
  <section class="voices-feed">
    <voices-feed-filters v-model="findOptions" @random-button="handleRandomVoice" class="voices-feed__filters" />

    <grid empty-message="No voices to show." class="voices-feed__grid container">
      <voice-card
        v-for="voice in filteredVoices"
        :key="voice.id"
        :id="voice.id"
        :name="voice.name"
        :icon="voice.icon"
        :tags="voice.tags"
      />
    </grid>

    <voice-modal
      :is-open="isRandomVoiceModalOpen"
      @close-modal="closeRandomVoiceModal"
      @random-button="handleRandomVoice"
    >
      <voice-card
        v-if="randomVoice.id"
        :id="randomVoice.id"
        :name="randomVoice.name"
        :icon="randomVoice.icon"
        :variant="['no-shadow', 'is-big']"
      />
    </voice-modal>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import searchFilters from '@/mixins/search-filters'
import Grid from '@/components/generic/Grid.vue'
import VoiceCard from '@/components/voice-catalog/VoiceCard.vue'
import VoicesFeedFilters from '@/components/voice-catalog/VoicesFeedFilters.vue'
import VoiceModal from '@/components/voice-catalog/VoiceModal.vue'

export default {
  mixins: [searchFilters],
  components: {
    VoiceCard,
    Grid,
    VoicesFeedFilters,
    VoiceModal
  },
  data () {
    return {
      findOptions: {},
      randomVoice: {},
      isRandomVoiceModalOpen: false
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
      this.randomVoice = this.getRandomFilter(this.filteredVoices)
      this.openRandomVoiceModal()
    },
    openRandomVoiceModal () {
      this.isRandomVoiceModalOpen = true
    },
    closeRandomVoiceModal () {
      this.isRandomVoiceModalOpen = false
    },
    ...mapActions('voices', [
      'fetchVoices'
    ])
  },
  async created () {
    this.fetchVoices()
  }
}
</script>
