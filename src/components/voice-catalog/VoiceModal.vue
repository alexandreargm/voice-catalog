<template>
  <modal :is-open="isOpen" @close-modal="$emit('close-modal')" class="voice-modal">
    <div class="voice-modal__body">
      <slot />
    </div>

    <template #footer>
      <random-button @click="$emit('random-button')" class="voice-modal__random-button" />
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/generic/Modal.vue'
import RandomButton from '@/components/voice-catalog/RandomButton'
export default {
  components: {
    Modal,
    RandomButton
  },
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

  &__random-button {
    margin-top: $spacing;
  }
}
</style>
