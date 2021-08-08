<template>
  <section class="voices-feed">
    <voices-feed-filter />

    <voices-feed-grid />
  </section>
</template>

<script>
import VoicesFeedFilter from '@/components/voice-catalog/VoicesFeedFilter.vue'
import VoicesFeedGrid from '@/components/voice-catalog/VoicesFeedGrid.vue'
export default {
  components: { VoicesFeedFilter, VoicesFeedGrid }
}
</script>
