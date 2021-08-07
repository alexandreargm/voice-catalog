<template>
  <section class="voices-feed">
    <voices-feed-filter />

    <voices-feed-grid />
  </section>
</template>

<script>
import VoicesFeedFilter from './VoicesFeedFilter.vue'
import VoicesFeedGrid from './VoicesFeedGrid.vue'
export default {
  components: { VoicesFeedFilter, VoicesFeedGrid }
}
</script>
