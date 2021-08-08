<template>
  <header class="main-header">

    <div class="main-header__item" />

    <brand />

    <Button variant="is-secondary" class="toggle-drawer" @click="toggleFavoriteDrawer">
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
    ...mapActions('favorites', ['toggleFavoriteDrawer'])
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
}

.toggle-drawer {
  border-radius: $rounded;
  font-weight: $weight-semibold;
  justify-self: end;
  padding: $spacing-sm;

  &__text {
    display: none;
    margin-left: $spacing-sm;

    @include breakpoint('tablet') {
      display: block;
    }
  }
}
</style>
