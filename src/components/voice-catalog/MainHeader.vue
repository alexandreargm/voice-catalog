<template>
  <header class="main-header">

    <div class="main-header__item" />

    <brand class="main-header__brand" />

    <Button :variant="['is-minimal']" class="toggle-drawer" @click="toggleFavoriteDrawer">
      <ViewGridAddIcon size="24" class="toggle-drawer__icon icon" />

      <span class="toggle-drawer__text">
        Favorites
      </span>
    </Button>
  </header>
</template>

<script>
import { ViewGridAddIcon } from '@vue-hero-icons/solid'
import Button from '@/components/elements/Button.vue'
import Brand from '@/components/voice-catalog/Brand.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    Brand,
    Button,
    ViewGridAddIcon
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
    padding: $spacing $spacing-lg;
  }

  &__brand {
    font-size: $font-xl;

    @include breakpoint('tablet') {
      font-size: $font-2xl;
    }
  }
}

.toggle-drawer {
  justify-self: end;

  &__text {
    margin-left: $spacing-sm;
  }
}
</style>
