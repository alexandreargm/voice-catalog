<template>
  <div class="search-input" v-bind:value="value" :class="variant">
    <SearchIcon class="search-input__icon" />

    <input
      class="search-input__input"
      type="text"
      :name="name"
      :id="name"
      @input="$emit('input', $event.target.value)"
      @keypress.enter="blurInput"
      :placeholder="placeholder"
      :aria-label="placeholder"
      :autocomplete="autocomplete"
    />
  </div>
</template>

<script>
import { SearchIcon } from '@vue-hero-icons/solid'
import { variant, autocompleteProp } from '@/mixins/component-utils'

export default {
  mixins: [variant, autocompleteProp],
  components: { SearchIcon },
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Search...'
    }
  },
  methods: {
    blurInput (event) {
      event.target.blur()
    }
  }
}
</script>

<style lang="scss">
.search-input {
  $icon-size: $input-height;
  display: flex;
  height: $input-height;

  &__icon {
    color: $text3;
    height: $icon-size;
    margin-right: -$icon-size;
    padding: $padding-sm;
    width: $icon-size;
    z-index: $z-input-icon;
  }

  &__input {
    border: 0;
    border-radius: $input-radius;
    flex: 1 1;
    height: 100%;
    padding-left: $icon-size;
    padding-right: $input-padding;
    width: 100%;
  }
}

.search-input.is-not-rounded {
  .search-input__input {
    border-radius: 0;
  }
}

.search-input.is-not-rounded-left {
  .search-input__input {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
}
</style>
