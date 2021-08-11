<template>
  <article class="voice-card shadow" @click="handleClick" :class="variant">
    <FavoriteIcon class="voice-card__favorite" :variant="isFavoriteClass" />

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
import { variant } from '@/mixins/component-utils'
import { mapActions, mapGetters } from 'vuex'
import FavoriteIcon from '@/components/voice-catalog/FavoriteIcon.vue'

export default {
  mixins: [variant],
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
  methods: {
    handleClick () {
      this.toggleFavoriteVoice(this.id)
    },
    ...mapActions('voices', [
      'toggleFavoriteVoice'
    ])
  },
  computed: {
    imageSrc () {
      return `images/${this.icon}`
    },
    ...mapGetters('voices', [
      'isFavoriteVoice'
    ]),
    isFavoriteClass () {
      return this.isFavoriteVoice(this.id) ? 'is-favorite' : ''
    }
  }
}
</script>

<style lang="scss">
.voice-card {
  background-color: $surface3;
  border-radius: $rounded-lg;
  cursor: pointer;
  max-width: 160px;
  padding: $padding;
  padding-bottom: $padding-lg;
  padding-top: $padding-sm;
  position: relative;
  text-align: center;
  user-select: none;

  @include breakpoint('tablet') {
    width: 160px;
  }

  &__name {
    font-size: $font-md;
    font-weight: $weight-semibold;
    line-height: 1.4;
    overflow-y: hidden;
  }

  &__favorite {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.voice-card.is-big-text {
  .voice-card__name {
    font-size: $font-lg;
  }
}

.voice-card.no-shadow {
  box-shadow: none;
}
</style>
