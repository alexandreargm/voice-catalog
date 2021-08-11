<template>
  <Button class="random-button" :variant="['is-secondary', 'is-compact']" type="button" @click="$emit('click')" :class="variant">
    <RefreshIcon class="random-button__icon" />

    <span class="random-button__text">
      Random
    </span>
  </Button>
</template>

<script>
import { variant } from '@/mixins/component-utils'
import Button from '@/components/elements/Button.vue'
import { RefreshIcon } from '@vue-hero-icons/solid'
export default {
  mixins: [variant],
  components: {
    Button,
    RefreshIcon
  }
}
</script>

<style lang="scss">
.random-button {
  &__text {
    margin-left: $spacing-sm;
  }
}

.random-button.hide-xs {
  .random-button__text {
    display: none;

    @include breakpoint('mobile2') {
      display: block;
    }
  }
}
</style>
