<template>
  <div class="filter">
    <div class="filter__inputs">
      <slot name="inputs" />
    </div>

    <div class="filter__params_display">
      <slot name="params" />
    </div>

    <div class="filter__params_display">
      <slot name="display" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  /* ad */
</style>
