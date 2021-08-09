<template>
  <section class="voices-feed">
    <voices-feed-filters />

    <voices-feed-grid />
  </section>
</template>

<script>
import VoicesFeedFilters from '@/components/voice-catalog/VoicesFeedFilters.vue'
import VoicesFeedGrid from '@/components/voice-catalog/VoicesFeedGrid.vue'
export default {
  components: { VoicesFeedFilters, VoicesFeedGrid }
}
</script>
