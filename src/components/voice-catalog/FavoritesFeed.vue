<template>
  <grid empty-message="No favorites to show." class="is-compact">
    <voice-card
      v-for="favorite in filteredFavorites"
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
import searchFilters from '@/mixins/search-filters'

export default {
  mixins: [searchFilters],
  components: {
    Grid,
    VoiceCard
  },
  props: {
    searchValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    filteredFavorites () {
      return this.getFilteredFavorites(this.getFavoriteVoices, this.searchValue)
    },
    ...mapGetters('voices', [
      'getFavoriteVoices'
    ])
  },
  methods: {
    getFilteredFavorites (favorites, searchValue) {
      const isSearching = searchValue !== ''

      if (!isSearching) return favorites

      return this.getByNameFilter(favorites, searchValue)
    }
  }
}
</script>
