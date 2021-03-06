<template>
  <div class="select-input__wrapper">
    <div v-if="$slots.icon" class="select-input__icon">
      <slot name="icon" />
    </div>

    <select
      class="select-input"
      :class="[variant, hasIconClass]"
      :name="name"
      @change="handleSelect"
      v-model="selectedValue"
      :id="name"
      :autocomplete="autocomplete"
    >
      <option
        class="select-input__option"
        v-for="option in options"
        :key="option.id"
        :value="option.id"
        :selected="selectedValue === option.id"
      >
        {{ option.title }}
      </option>
      <slot v-if="options.length === 0">
        <option value="">Missing options</option>
      </slot>
    </select>
  </div>
</template>

<script>
import { variant, autocompleteProp } from '@/mixins/component-utils'
export default {
  mixins: [variant, autocompleteProp],
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    },
    selected: {
      type: String,
      default: ''
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
    handleSelect () {
      this.$emit('change', this.selectedValue)
    },
    /*
     * v-model fix.
     * For some reason using v-model on a select that uses slots
     * for the options resets doesn't respect the default value.
     */
    setDefaultValue () {
      this.selectedValue = this.selected
    }
  },
  created () {
    this.setDefaultValue()
  },
  computed: {
    hasIconClass () {
      return this.$slots.icon ? 'has-icon' : ''
    }
  }
}
</script>

<style lang="scss">
.select-input {
  border: 0;
  border-radius: $input-radius;
  height: $input-height;
  padding: 0 $input-padding;

  &__wrapper {
    position: relative;
  }

  &__option {
    font-size: $font;
  }

  &__icon {
    color: $text2;
    display: flex;
    left: $spacing-md;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}

.select-input.is-secondary {
  background-color: $surface4;
  color: $text1;
}

.select-input.is-not-rounded-right {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.select-input.is-round {
  border-radius: $rounded-full;
}

.select-input.is-compact {
  height: $height;
}

.select-input.has-icon {
  padding-left: $input-height;
}
</style>
