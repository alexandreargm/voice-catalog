<template>
  <form @submit.prevent="$emit('submit', options)" class="voices-feed-filters">
    <div class="voices-feed-filters__toolbar">
      <random-button class="voices-feed-filters__random" />

      <search-input
        name="text"
        v-model="options.text"
        class="voices-feed-filters__searchbar"
      />
    </div>

    <div class="voices-feed-filters__filters">
      <select-input
        name="order"
        v-model="options.sort"
        class="voices-feed-filters__order"
        :variant="['is-secondary', 'is-compact']"
        :options="orderOptions"
      >
        <template #icon>
          <SwitchVerticalIcon />
        </template>
      </select-input>

      <select-input
        name="category"
        v-model="options.category"
        class="voices-feed-filters__categories"
        :variant="['is-secondary', 'is-compact']"
        :options="categories"
      >
        <template #icon>
          <TagIcon />
        </template>
      </select-input>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchInput from '@/components/elements/SearchInput.vue'
import SelectInput from '@/components/elements/SelectInput.vue'
import RandomButton from '@/components/voice-catalog/RandomButton.vue'
import { TagIcon, SwitchVerticalIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    SearchInput,
    RandomButton,
    SelectInput,
    TagIcon,
    SwitchVerticalIcon
  },
  data () {
    return {
      options: {
        text: '',
        category: '',
        sort: ''
      },
      orderOptions: [
        { id: 'popular', title: 'Most popular' },
        { id: 'unpopular', title: 'Least popular' }
      ]
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
.voices-feed-filters {
  &__toolbar {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  &__random {
    margin-right: $spacing;
  }

  &__filters {
    display: flex;
    font-size: $font-md;
    margin-top: $spacing-lg;
    overflow-x: auto;
  }

  &__categories {
    margin-left: $padding-md;
  }
}
</style>
