<template>
  <button class="button" :class="variant" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
import { variant } from '@/mixins/component-utils'
export default {
  mixins: [variant]
}
</script>

<style lang="scss">

.button {
  align-items: center;
  background-color: transparent;
  border: 0;
  border-color: $surface1;
  border-radius: $rounded;
  cursor: pointer;
  display: inline-flex;
  font-weight: $weight-semibold;
  max-width: 100%;
  padding: $padding-sm $padding-lg;
  vertical-align: middle;
}

.button.is-secondary {
  background-color: $surface4;
  color: $text1;

  svg {
    color: $text2;
  }
}

.button.is-round {
  border: 0;
  border-radius: $rounded-full;
  color: $text2;
  cursor: pointer;
  line-height: 1;
  padding: $padding-sm;
}

.button.is-outline {
  border: 2px solid;
}

.button.is-compact {
  padding: $padding-sm $padding-md;
}

</style>
