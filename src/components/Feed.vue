<template>
  <section class="feed">
    <slot />
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .feed {
    $padding: 16px;

    padding: $padding;
    display: flex;
    width: 100%;
    flex: 1 0 50%;
  }
</style>
