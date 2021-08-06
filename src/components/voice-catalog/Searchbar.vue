<template>
  <form action="" class="searchbar" @submit.prevent="handleSearch">
    <input class="searchbar__input" v-model="searchText" aria-label="Search a voice" type="text" name="" id="" placeholder="Search a voice">
    <Button variant="is-secondary" class="searchbar__submit">
      <SearchIcon class="searchbar__submit-icon icon" />
    </Button>
  </form>
</template>

<script>
import Button from '../elements/Button.vue'
import { SearchIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    Button,
    SearchIcon
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    handleSearch () {
      this.$emit('searchbar-submit', this.searchText)
      console.log(this.searchText)
    }
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
