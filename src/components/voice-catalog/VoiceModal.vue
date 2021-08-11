<template>
  <modal :is-open="isOpen" @close-modal="$emit('close-modal')" class="voice-modal">
    <div class="voice-modal__body">
      <slot />
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/generic/Modal.vue'
export default {
  components: { Modal },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.voice-modal {
  &__body {
    padding: $spacing $spacing-2xl;
  }
}
</style>
