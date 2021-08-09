<template>
  <Filters class="voices-feed-filters" @filters-submit="handleSubmit">
    <template #header>
      <div class="voices-feed-filters__top-bar">
        <searchbar v-model="searchValue" class="voices-feed-filter__searchbar" />
      </div>
    </template>

    <template #body>
      <div class="voices-feed-filters__filters">
        awdawd
      </div>
    </template>

    <template #footer>
      <div class="voices-feed-filters__display">
        awdawd
      </div>
    </template>
  </Filters>
</template>

<script>
import Filters from '@/components/generic/Filters'
import Searchbar from './Searchbar.vue'
export default {
  components: {
    Filters,
    Searchbar
  },
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    handleSubmit (event) {
      console.log(event)
    }
  }
}
</script>
