<template>
  <Button class="toggle-favorites-drawer" @click="toggleFavoriteDrawer" :class="[variant, 'is-secondary', 'is-compact']">
    <ViewGridAddIcon size="24" class="toggle-favorites-drawer__icon icon" />

    <span class="toggle-favorites-drawer__text">
      Favorites
    </span>
  </Button>
</template>

<script>
import { variant } from '@/mixins/component-utils'
import { ViewGridAddIcon } from '@vue-hero-icons/solid'
import Button from '@/components/elements/Button.vue'
import { mapActions } from 'vuex'
export default {
  mixins: [variant],
  components: {
    Button,
    ViewGridAddIcon
  },
  methods: {
    ...mapActions('favoritesDrawer', [
      'toggleFavoriteDrawer'
    ])
  }
}
</script>

<style lang="scss">
  .toggle-favorites-drawer.hide-text {
    .toggle-favorites-drawer__text {
      display: none;
    }
  }
</style>
