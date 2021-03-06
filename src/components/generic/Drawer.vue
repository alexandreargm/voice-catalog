<template>
  <aside v-show="isOpen" class="drawer" :aria-hidden="isOpen">
    <div class="drawer__overlay" @click="closeDrawer" />
    <transition name="content-slide">
      <div class="drawer__content" v-show="isOpen">
        <header class="drawer__header">
          <div class="drawer__header-top">
            <slot name="title">
              {{ title }}
            </slot>

            <Button
              :variant="['is-round', 'is-secondary']"
              class="drawer__close-button"
              @click="closeDrawer"
            >
              <XIcon role="presentation" />
            </Button>
          </div>

          <div v-if="$slots.header" class="drawer__header-content">
            <slot name="header" />
          </div>

        </header>

        <div class="drawer__body">
          <slot />
        </div>
      </div>
    </transition>
  </aside>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { XIcon } from '@vue-hero-icons/outline'
import Button from '@/components/elements/Button.vue'

export default {
  components: {
    XIcon,
    Button
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeDrawer () {
      this.$emit('close-drawer')
    }
  },
  watch: {
    isOpen: function () {
      this.isOpen ? disableBodyScroll(this) : enableBodyScroll(this)
    }
  }
}
</script>

<style lang="scss">
.drawer {
  background-color: rgba($surface-shadow, 0.4);
  bottom: 0;
  display: flex;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: $z-fixed;

  &__overlay {
    flex: 1;
  }

  &__content {
    background-color: $surface2;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    max-width: 600px;
    width: 80%;
  }

  &__header {
    background-color: $surface3;
  }

  &__header-top {
    align-items: center;
    display: flex;
    font-size: $font-xl;
    font-weight: $weight-semibold;
    justify-content: space-between;
    padding: $spacing-md $spacing;
    width: 100%;

    @include breakpoint('tablet') {
      padding: $spacing $spacing-lg;
    }
  }

  &__header-content {
    display: flex;
    flex-direction: column;
  }

  &__close-button {
    margin-left: $spacing;
  }

  &__body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
  }
}

.content-slide {
  &-enter {
    transform: translateX(100%);
  }

  &-enter-active {
    transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1);
  }
}

</style>
