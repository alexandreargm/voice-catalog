<template>
  <section class="grid" :class="variant">
    <div
      v-if="!$slots.default"
      class="grid__empty-message"
    >
      {{ emptyMessage }}
    </div>

    <div v-else class="grid__inner">
      <slot />
    </div>
  </section>
</template>

<script>
import { variant } from '@/mixins/component-utils'
export default {
  mixins: [variant],
  props: {
    emptyMessage: {
      type: String,
      default: 'No items to show.'
    }
  }
}
</script>

<style lang="scss">
  .grid {
    display: flex;
    justify-content: center;
    max-width: 100%;

    &__empty-message {
      color: $text2;
      font-size: $font-xl;
      line-height: 1.4;
      padding: 16px;
      text-align: center;
    }

    &__inner {
      display: grid;
      gap: $spacing;
      grid-gap: $spacing;
      grid-template-columns: repeat(2, 1fr);
      padding: $padding;

      @include breakpoint('tablet') {
        gap: $spacing-lg;
        grid-gap: $spacing-lg;
        grid-template-columns: repeat(4, 1fr);
        padding: $padding-lg;
      }

      @include breakpoint('desktop') {
        gap: $spacing-xl;
        grid-gap: $spacing-xl;
        grid-template-columns: repeat(6, 1fr);
      }
    }
  }

  .grid.is-compact {
    .grid__inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
