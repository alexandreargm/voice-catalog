<template>
  <span class="badge" :class="variant">
    <slot />
  </span>
</template>

<script>
import { variant } from '@/mixins/component-utils.js'

export default {
  mixins: [variant]
}
</script>

<style lang="scss">
.badge {
  height: 32px;
  padding: 4px;
  width: 32px;
}

.badge.is-rounded {
  border-radius: 9999px;
}
</style>
