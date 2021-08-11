<template>
  <header class="main-header">

    <div class="main-header__item" />

    <brand class="main-header__brand" />

    <toggle-favorites-drawer
      class="main-header__toggle-favorites"
    />
  </header>
</template>

<script>
import { mapActions } from 'vuex'
import Brand from '@/components/voice-catalog/Brand.vue'
import ToggleFavoritesDrawer from '@/components/voice-catalog/ToggleFavoritesDrawer'
export default {
  components: {
    Brand,
    ToggleFavoritesDrawer
  },
  methods: {
    ...mapActions('favoritesDrawer', ['toggleFavoriteDrawer'])
  }
}
</script>

<style lang="scss">
.main-header {
  align-items: center;
  background-color: $surface2;
  display: grid;
  grid-template-columns: 0 auto auto;
  padding: $padding-md $padding;

  @include breakpoint('tablet') {
    grid-template-columns: 1fr auto 1fr;
  }

  &__brand {
    font-size: $font-xl;

    @include breakpoint('tablet') {
      font-size: $font-2xl;
    }
  }
}

.toggle-favorites-drawer {
  justify-self: end;

  &__text {
    margin-left: $spacing-sm;
  }
}
</style>
