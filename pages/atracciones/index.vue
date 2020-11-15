
<template>
  <div>
    <subHeader />
    <div class="bg-white">
      <!-- component -->
      <!-- This is an example component -->
      <section class="flex flex-row flex-wrap mx-auto container">
        <!-- Card Component -->

        <div
          class="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
          v-for="(post, $index) in posts"
          :key="$index"
        >
          <postcard :post="post" />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import SubHeader from '@/components/SubHeader'
import PostCard from '@/components/PostCard'
export default {
  name: 'Atracciones',
  components: {
    subHeader: SubHeader,
    postcard: PostCard,
  },
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}/atracciones`).fetch()

    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>