<template>
  <article class="voice-card">
    <div class="voice-card__image-wrapper">
      <img :src="icon" alt="">

      <h1 class="voice_card__name">
        {{ name }}
      </h1>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    tags: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.voice-card{
  @include breakpoint("tablet") {
    background-color: red !important;
  }
}
</style>
