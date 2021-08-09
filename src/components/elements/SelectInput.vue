<template>
  <select class="select-input" :class="variant" :name="name" @change="handleSelect" :id="name">
    <option
      class="select-input__option"
      v-for="option in options"
      :key="option.id"
      :value="option.id"
      :selected="selectedValue === option.id"
    >
      {{ option.title }}
    </option>

    <slot v-if="!options">
      <option value="">Missing options</option>
    </slot>
  </select>
</template>

<script>
import { variant } from '@/mixins/component-utils'
export default {
  mixins: [variant],
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: null
    }
  },
  model: {
    prop: 'selectedValue',
    event: 'change'
  },
  data () {
    return {
      selectedValue: ''
    }
  },
  methods: {
    handleSelect (event) {
      this.selectedValue = event.target.value
      this.$emit('change', this.selectedValue)
    }
  }
}
</script>

<style lang="scss">
.select-input {
  border-radius: $input-radius;
  height: $input-height;
  padding: $input-padding;
}

.select-input.is-secondary {
  background-color: $surface4;
  color: $text1;
}

.select-input.is-not-rounded-right {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.select-input.no-border {
  border: 0;
}
</style>
