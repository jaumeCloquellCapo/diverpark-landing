<template>
  <div class="bg-white pt-12">
    <section class="flex flex-row flex-wrap mx-auto container text-gray-800">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center">
          {{ $t('atracciones.title') }}
        </h2>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <h3 class="sm:text-2xl mx-auto leading-relaxed text-base">
          {{ $t('atracciones.subtitle') }}
        </h3>
      </div>
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
    },
  },
}
</script>