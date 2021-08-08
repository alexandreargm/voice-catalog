<template>
  <div class="searchbar" v-bind="value">
    <input
      class="searchbar__input"
      @input="$emit('input', $event.target.value)"
      type="text"
      name="search"
      id="search"
      placeholder="Search a voice"
      aria-label="Search a voice"
    />

    <Button
      variant="is-secondary"
      class="searchbar__submit"
      type="submit">
      <SearchIcon class="searchbar__submit-icon icon" />
    </Button>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import { SearchIcon } from '@vue-hero-icons/solid'
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  components: {
    Button,
    SearchIcon
  }
}
</script>

<style lang="scss">
.searchbar {
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  max-width: 100%;

  &__input {
    border: 0;
    border-radius: $rounded;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    flex: 1 1;
    height: 100%;
    padding: $spacing-xs $spacing;
    width: 100%;
  }

  &__submit {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding: $padding-sm $padding;
  }
}
</style>
