<template>
  <form @submit.prevent="$emit('submit', options)" class="voice-searchbar">
    <div class="voice-searchbar__categories">
      <select-input v-model="options.category" name="categories" :options="categories" />
    </div>

    <div class="voice-searchbar__text-input">
      <search-input
        class="voice-searchbar__input"
        v-model="options.search"
        type="text"
        name="search"
        id="search"
        placeholder="Search a voice"
        aria-label="Search a voice"
        variant="not-rounded-right"
      />
    </div>

    <Button variant="is-secondary" class="voice-searchbar__submit" type="submit">
      <SearchIcon class="voice-searchbar__submit-icon icon" />
    </Button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchInput from '@/components/elements/SearchInput.vue'
import SelectInput from '@/components/elements/SelectInput.vue'
import Button from '@/components/elements/Button.vue'
import { SearchIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    SearchInput,
    SelectInput,
    Button,
    SearchIcon
  },
  data () {
    return {
      options: {
        search: '',
        category: ''
      }
    }
  },
  model: {
    prop: 'options',
    event: 'submit'
  },
  computed: {
    categories () {
      const getCategories = this.getCategories()
      const defaultValue = { id: '', title: 'All categories' }

      return [defaultValue, ...getCategories]
    }
  },
  methods: {
    ...mapActions('categories', [
      'fetchCategories'
    ]),
    ...mapGetters('categories', [
      'getCategories'
    ])
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style lang="scss">
.voice-searchbar {
  display: grid;
  grid-template-columns: auto 1fr auto;

  &__submit {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding: $padding-sm $padding;
  }
}
</style>
