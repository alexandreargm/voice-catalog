<template>
  <div id="app">
    <div class="layout">
      <header class="layout__header">

      </header>

      <!-- All voices -->
      <main class="layout__main">
        <feed>
          <voice-card
            id="1"
            name="Hola mundo"
            icon="VoicesVoiceIcon01.png"
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
@import '@/assets/scss/main.scss';
.layout {
  background-color: $surface1;
}
</style>
