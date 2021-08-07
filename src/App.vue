<template>
  <div id="app" class="app">
    <div class="layout">
      <main-header class="layout__header" />

      <div class="page-content layout__body">
        <main class="page-cotent__main">
          <voices-feed />
        </main>

        <favorites-drawer class="page-content__aside" />
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/voice-catalog/MainHeader.vue'
import VoicesFeed from '@/components/voice-catalog/VoicesFeed.vue'
import FavoritesDrawer from '@/components/voice-catalog/FavoritesDrawer.vue'

export default {
  components: {
    MainHeader,
    VoicesFeed,
    FavoritesDrawer
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main';

.layout {
  background-color: $surface1;
  position: relative;
}
</style>
