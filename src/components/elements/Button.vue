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
  border-radius: $rounded;
  color: $text1;
  cursor: pointer;
  display: inline-flex;
  font-weight: $weight-semibold;
  max-width: 100%;
  min-height: 40px;
  padding: 0 $padding-lg;
  vertical-align: middle;

  svg {
    color: $text2;
  }
}

.button.is-secondary {
  background-color: $surface4;
  border-color: $surface1;
}

.button.is-round {
  border: 0;
  border-radius: $rounded-full;
  cursor: pointer;
  line-height: 1;
  padding: $padding-sm;
}

.button.is-outline {
  border: 2px solid;
}

.button.is-compact {
  padding: 0 $padding-md;
}

</style>
