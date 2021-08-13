<template>
  <div v-show="isOpen" class="modal__backdrop" @click.self="closeModal">

    <div role="dialog" aria-modal="true" class="modal">
      <div class="modal__header">
        <Button
        :variant="['is-round', 'is-secondary']"
        class="modal__close-button"
        @click="closeModal"
        >
          <XIcon role="presentation" />
        </Button>
      </div>

      <div class="modal__body">
        <slot />
      </div>

      <div class="modal__footer">
        <slot name="footer" />
      </div>
    </div>

  </div>
</template>

<script>
import Button from '../elements/Button.vue'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { XIcon } from '@vue-hero-icons/outline'
export default {
  components: {
    Button,
    XIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('close-modal')
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
.modal {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding: $padding;
  z-index: $z-modal;

  &__backdrop {
    align-items: center;
    background-color: rgba($surface-shadow, 0.7);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: $z-modal-backdrop;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    padding: $spacing 0;
    width: 100%;
  }

  &__body {
    overflow-y: auto;
  }

  &__footer {
    display: flex;
    justify-content: center;
  }

  &__close-button {
    margin-left: $spacing;
  }
}

.modal.is-outline {
  .modal__body {
    border: 1px solid $surface4;
    border-radius: $rounded-xl;
  }
}
</style>
