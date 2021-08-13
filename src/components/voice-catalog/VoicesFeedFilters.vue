<template>
  <div
    @change="triggerChange"
    @input="triggerChange"
    class="voices-feed-filters"
  >
    <div class="voices-feed-filters__inner container">
      <div
        class="voices-feed-filters__toolbar container"
        :class="isToolbarFixed? 'is-fixed-top' : ''"
      >
        <random-button
          @click="$emit('random-button')"
          class="voices-feed-filters__random"
          variant="hide-xs"
        />
        <search-input
          name="text"
          placeholder="Search voices"
          v-model="options.text"
          class="voices-feed-filters__searchbar"
          autocomplete="off"
        />
        <transition name="drawer-toggle-transition">
          <toggle-favorites-drawer
            v-show="isToolbarFixed"
            class="voices-feed-filters__toggle-favorites"
            :variant="['hide-text']"
            :aria-hidden="isToolbarFixed"
          />
        </transition>
      </div>
      <div class="voices-feed-filters__filters">
        <select-input
          name="order"
          selected="popular"
          v-model="options.order"
          class="voices-feed-filters__order"
          :variant="['is-secondary', 'is-compact']"
          :options="orderOptions"
        >
          <template #icon>
            <SwitchVerticalIcon role="presentation" />
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
            <TagIcon role="presentation" />
          </template>
        </select-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SearchInput from '@/components/elements/SearchInput.vue'
import SelectInput from '@/components/elements/SelectInput.vue'
import RandomButton from '@/components/voice-catalog/RandomButton.vue'
import { TagIcon, SwitchVerticalIcon } from '@vue-hero-icons/solid'
import ToggleFavoritesDrawer from './ToggleFavoritesDrawer.vue'
export default {
  components: {
    SearchInput,
    RandomButton,
    SelectInput,
    TagIcon,
    SwitchVerticalIcon,
    ToggleFavoritesDrawer
  },
  data () {
    return {
      options: {
        text: '',
        category: '',
        order: 'popular'
      },
      orderOptions: [
        { id: 'popular', title: 'Most popular' },
        { id: 'unpopular', title: 'Least popular' }
      ],
      isToolbarFixed: false,
      lastScrollPosition: 0
    }
  },
  model: {
    prop: 'options',
    event: 'change'
  },
  computed: {
    categories () {
      const getCategories = this.getCategories()
      const defaultValue = { id: '', title: 'All categories' }

      return [defaultValue, ...getCategories]
    }
  },
  methods: {
    triggerChange () {
      this.$emit('change', this.options)
    },
    onScroll () {
      const mainHeaderOffset = 64 // Same as header main height
      const scrollTolentaceOffset = 40

      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }

      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than the tolerance offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < scrollTolentaceOffset) {
        return
      }

      // Fix toolbar on top when scrolled more than mainheader height or
      // when last position was higher
      this.isToolbarFixed = currentScrollPosition > mainHeaderOffset

      this.lastScrollPosition = currentScrollPosition
    },
    ...mapActions('categories', ['fetchCategories']),
    ...mapGetters('categories', ['getCategories'])
  },
  created () {
    this.fetchCategories()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss">
.voices-feed-filters {
  $toolbar-height: 80px;

  &__inner {
    background-color: $surface1;
  }

  &__toolbar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: $spacing-lg;
    padding-bottom: $spacing;
    position: absolute;
    width: 100%;
    z-index: $z-fixed;
  }

  &__toolbar.is-fixed-top {
    background-color: inherit;
    position: fixed;
    top: 0;
  }

  &__random {
    margin-right: $spacing;
  }

  &__filters {
    display: flex;
    font-size: $font-md;
    overflow-x: auto;
    padding: $spacing $spacing-lg;
    padding-top: $toolbar-height;
  }

  &__toggle-favorites {
    margin-left: $spacing;
  }

  &__categories {
    margin-left: $padding-md;
  }
}

.drawer-toggle-transition {
  &-enter-active {
    transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  &-enter {
    opacity: 0;
    transform: translateY(-100%);
  }

  &-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

}
</style>
