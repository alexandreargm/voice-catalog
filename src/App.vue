<template>
  <div id="app">
    <div class="layout">
      <header class="layout__header">

      </header>

      <!-- All voices -->
      <main class="layout__main">
        <feed>
          <voice-card
            class="shadow"
            id="1"
            name="Hola mundo"
          />
        </feed>
      </main>

      <!-- Favorited voices -->
      <drawer class="layout__drawer">
        <!-- Favorites filter -->
      </drawer>
    </div>
  </div>
</template>

<script>
import Feed from './components/Feed.vue'
import Drawer from './components/Drawer.vue'
import VoiceCard from './components/VoiceCard.vue'

export default {
  components: {
    Drawer,
    VoiceCard,
    Feed
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';
.layout {
  @include breakpoint("tablet") {
    background-color: $brand !important;
  }
}
</style>
