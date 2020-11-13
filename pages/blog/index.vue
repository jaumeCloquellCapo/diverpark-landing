
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
          <!--div class="bg-white rounded-lg overflow-hidden shadow relative">
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
                class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
              >
                {{ post.title }}
              </nuxt-link>
              <div
                class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm"
              >
                {{ post.resumen }}
              </div>
            </div>
          </div-->
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import SubHeader from '@/components/SubHeader'
import PostCard from '@/components/PostCard'
export default {
  name: 'Blog',
  components: {
    subHeader: SubHeader,
    postcard: PostCard,
  },
  async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}/blog`).fetch()

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