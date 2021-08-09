<template>
  <form @submit.prevent="$emit('submit', options)" class="voice-searchbar">
    <select-input
      class="voice-searchbar__categories"
      v-model="options.category"
      :variant="['is-secondary','is-not-rounded-right', 'no-border']"
      name="categories"
      :options="categories"
    />

    <search-input
      class="voice-searchbar__search-input"
      v-model="options.search"
      type="text"
      name="search"
      id="search"
      placeholder="Search a voice"
      aria-label="Search a voice"
      variant="is-not-rounded-left"
    />
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchInput from '@/components/elements/SearchInput.vue'
import SelectInput from '@/components/elements/SelectInput.vue'
export default {
  components: {
    SearchInput,
    SelectInput
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
    ...mapActions('categories', ['fetchCategories']),
    ...mapGetters('categories', ['getCategories'])
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style lang="scss">
.voice-searchbar {
  display: grid;
  grid-template-columns: auto 1fr;

  &__categories {
    font-weight: $weight-semibold;
  }
}
</style>
