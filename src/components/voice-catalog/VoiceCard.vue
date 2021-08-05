<template>
  <article class="voice-card shadow">
    <FavoriteIcon class="voice-card__favorite" :variant="isFavorite" />

    <img
      class="voice-card__icon"
      :src="imageSrc"
      height="110"
      width="110"
      alt=""
    >

    <h1 class="voice-card__name">
      {{ name }}
    </h1>
  </article>
</template>

<script>
import FavoriteIcon from './FavoriteIcon.vue'

export default {
  components: { FavoriteIcon },
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
      type: Array,
      default: null
    }
  },
  computed: {
    imageSrc () {
      return `images/${this.icon}`
    },
    isFavorite () {
      return this.$store.getters['favorites/isFavorite'](this.id) ? 'is-favorite' : ''
    }
  }
}
</script>

<style lang="scss">
.voice-card {
  background-color: $surface3;
  border-radius: $rounded-lg;
  cursor: pointer;
  padding: $padding;
  padding-bottom: $padding-lg;
  padding-top: $padding-sm;
  position: relative;
  text-align: center;
  user-select: none;

  &__name {
    font-size: $font-md;
    font-weight: $weight-semibold;
  }

  &__favorite {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
