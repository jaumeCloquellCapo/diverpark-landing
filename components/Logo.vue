<template>
  <NuxtLink
    :class="classList"
    :to="localePath('index')"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
  >
    &nbsp;DIVERPARK
  </NuxtLink>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false,
    },
    isSticky: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = this.isSticky ? 'text-gray-800' : 'text-white'
      } else {
        classList = 'text-orange-600'
      }
      return classList
    },
  },
}
</script>
