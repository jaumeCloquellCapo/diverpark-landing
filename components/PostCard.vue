<template>
  <div class="bg-white rounded-lg overflow-hidden shadow relative">
    <div class="md:flex-shrink-0">
      <nuxt-link :to="localePath(post.path)">
        <img
          width="300"
          height="200"
          :src="post.img"
          :alt="post.alt"
          class="object-fill w-full rounded-lg rounded-b-none md:h-56"
        />
      </nuxt-link>
    </div>
    <div class="p-4 h-auto md:h-40 lg:h-48">
      <nuxt-link
        :to="localePath(post.path)"
        class="block text-gray-800 hover:text-gray-800 font-semibold mb-2 text-lg md:text-base lg:text-lg"
      >
        {{ post.title }}
      </nuxt-link>
      <div
        class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm"
      >
        {{ post.resumen }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
}
</script>
