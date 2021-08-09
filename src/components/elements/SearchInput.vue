<template>
  <div class="search-input" v-bind:value="value" :class="variant">
    <SearchIcon class="search-input__icon" />

    <input
      class="search-input__input"
      type="text"
      :name="name"
      :id="name"
      @input="$emit('input', $event.target.value)"
      placeholder="Search a voice"
      aria-label="Search a voice"
    />
  </div>
</template>

<script>
import { SearchIcon } from '@vue-hero-icons/solid'
import { variant } from '@/mixins/component-utils'

export default {
  mixins: [variant],
  components: { SearchIcon },
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
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
    padding: $input-padding;
    padding-left: $icon-size;
    width: 100%;
  }
}

.search-input.no-rounded-right {
  .search-input__input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>
