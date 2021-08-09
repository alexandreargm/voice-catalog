<template>
  <form @submit.prevent="$emit('filters-submit')" class="filters">
    <div class="filters__header">
      <slot name="header" />
    </div>

    <div class="filters__body">
      <slot name="body" />
    </div>

    <div class="filters__footer">
      <slot name="footer" />
    </div>
  </form>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.filters {
  &__header {
    position: fixed;
    z-index: $z-fixed;
  }
}
</style>
