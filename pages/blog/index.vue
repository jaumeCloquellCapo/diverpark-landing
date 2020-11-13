
<template>
  <div>
    <subHeader />
    <div class="bg-white">
      <div class="container mx-auto flex flex-wrap py-6 bg-white text-gray-800">
        <!-- Posts Section -->
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">
          <article
            class="flex flex-col shadow my-4 rounded overflow-hidden shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            v-for="(post, $index) in posts"
            :key="$index"
          >
            <!-- Article Image -->
            <div class="w-full h-64">
              <img :src="post.img" :alt="post.title" />
            </div>

            <div class="bg-white flex flex-col justify-start p-6">
              <a class="text-blue-700 text-sm font-bold uppercase pb-4">
                <template v-for="tag in post.tags || []">#{{ tag }} </template>
              </a>
              <h3 class="text-3xl font-bold text-gray-900 pb-4">
                {{ post.title }}
              </h3>
              <p class="text-sm pb-3">
                <a class="font-semibold text-gray-800">
                  {{ post.author.name }}</a
                >,
                {{ formatDate(post.updatedAt) }}
              </p>
              <a class="pb-6"> {{ post.resumen }}</a>
              <nuxt-link
                :to="post.path"
                class="uppercase text-gray-800 hover:text-black"
              >
                <a>Continue Reading <i class="fas fa-arrow-right"></i></a>
              </nuxt-link>
            </div>
          </article>

          <!-- Pagination -->
          <div class="flex items-center py-8">
            <a
              class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
              >1</a
            >
            <a
              class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
              >2</a
            >
            <a
              class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
              >Next <i class="fas fa-arrow-right ml-2"></i
            ></a>
          </div>
        </section>

        <!-- Sidebar Section -->
        <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">{{ $t('aboutus.title') }}</p>
            <p class="pb-2"></p>
            <p class="pb-6">
              {{ $t('aboutus.description') }}
            </p>

            <NuxtLink
              :to="localePath('contact')"
              class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              {{ $t('common.booking') }}
            </NuxtLink>
          </div>

          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">Instagram</p>
            <div class="grid grid-cols-3 gap-3">
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
              />
            </div>
            <a
              class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
            >
              <i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
<script>
import SubHeader from '@/components/SubHeader'
export default {
  name: 'Blog',
  components: {
    subHeader: SubHeader,
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