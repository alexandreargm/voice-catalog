<template>
  <badge variant="is-rounded" class="favorite-icon" :class="variant">
    <StarIcon class="favorite-icon__svg" role="presentation" />
  </badge>
</template>

<script>
import { variant } from '@/mixins/component-utils'
import { StarIcon } from '@vue-hero-icons/outline'
import Badge from '../elements/Badge.vue'

export default {
  mixins: [variant],
  components: { StarIcon, Badge }
}
</script>

<style lang="scss">
.favorite-icon {
  background-color: $surface3;
  color: $text3;
}

.favorite-icon.is-favorite {
  color: $favorite-color !important;
}

</style>
