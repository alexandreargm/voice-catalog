<template>
  <Button class="random-button__" :variant="['is-secondary', 'is-compact']" type="button">
    <RefreshIcon class="random-button__icon" />

    <span class="random-button__text"> Random</span>
  </Button>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import { RefreshIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    Button,
    RefreshIcon
  }
}
</script>

<style lang="scss">
.random-button {
  &__text {
    display: none;
    margin-left: $spacing-sm;

    @include breakpoint('mobile2') {
      display: block;
    }
  }
}
</style>
