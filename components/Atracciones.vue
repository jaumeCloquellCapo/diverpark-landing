<template>
  <div class="bg-white">
    <section class="flex flex-row flex-wrap mx-auto container">
      <div
        class="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
        v-for="(post, $index) in posts"
        :key="$index"
      >
        <postcard :post="post" />
      </div>
    </section>
  </div>
</template>
<script>
import PostCard from '@/components/PostCard'
export default {
  name: 'Atracciones',
  components: {
    postcard: PostCard,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>