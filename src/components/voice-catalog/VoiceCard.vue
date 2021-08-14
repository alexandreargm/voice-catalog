<template>
  <article class="voice-card shadow" @click="handleClick" :class="[variant, isFavoriteClass]">
    <badge class="voice-card__favorite-badge" variant="is-rounded">
      <StarIcon role="presentation" />
    </badge>

    <img
      class="voice-card__icon"
      :src="imageSrc"
      height="110"
      width="110"
      alt="Sound card"
      role="presentation"
    />

    <h1 class="voice-card__name">
      {{ name }}
    </h1>
  </article>
</template>

<script>
import { variant } from '@/mixins/component-utils'
import { mapActions, mapGetters } from 'vuex'
import { StarIcon } from '@vue-hero-icons/outline'
import Badge from '../elements/Badge.vue'

export default {
  mixins: [variant],
  components: {
    Badge,
    StarIcon
  },
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
    ...mapActions('voices', ['toggleFavoriteVoice'])
  },
  computed: {
    imageSrc () {
      return `images/${this.icon}`
    },
    ...mapGetters('voices', ['isFavoriteVoice']),
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
  padding-top: $padding-sm;
  position: relative;
  text-align: center;
  user-select: none;

  @include breakpoint('tablet') {
    width: 160px;
  }

  &__name {
    $line-height: 1.3;
    $max-lines: 2;
    $font-size: $font-md;
    $name-height: $max-lines * $line-height * $font-size;

    font-size: $font-size;
    font-weight: $weight-semibold;
    height: $name-height;
    line-height: $line-height;
    margin: 0 auto;
    max-width: 120px;
    overflow-y: hidden;
  }

  &__favorite-badge {
    background-color: $surface3;
    color: $text3;
    position: absolute;
    right: 0;
    top: 0;
  }
}

.voice-card.is-favorite .voice-card {
  &__favorite-badge {
    color: $favorite-color !important;
  }
}

.voice-card:hover .voice-card {
  &__favorite-badge {
    color: #fff;
    opacity: 0.6 !important;
  }
}

.voice-card.is-big {
  width: 160px;

  .voice-card__name {
    $line-height: 1.4;
    $max-lines: 2;
    $font-size: $font-lg;
    $name-height: $max-lines * $line-height * $font-size;

    font-size: $font-size;
    height: $name-height;
    line-height: $line-height;
  }
}

.voice-card.no-shadow {
  box-shadow: none;
}
</style>
