
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
          <div
            class="flex flex-col items-stretch min-h-full pbº mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl"
          >
            <div class="md:flex-shrink-0">
              <img
                :src="post.img"
                :alt="post.alt"
                class="object-fill w-full rounded-lg rounded-b-none md:h-56"
              />
            </div>
            <div
              class="flex items-center justify-between px-4 py-2 overflow-hidden"
            >
              <nuxt-link
                 :to="localePath(post.path)"
                class="text-xs font-medium text-blue-600 uppercase"
              >
                {{ post.title }}
              </nuxt-link>

              <div class="flex flex-row items-center">
                <div
                  class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  <span>1.5k</span>
                </div>

                <div
                  class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                  <span>25</span>
                </div>

                <div
                  class="text-xs font-medium text-gray-500 flex flex-row items-center"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    ></path>
                  </svg>
                  <span>7</span>
                </div>
              </div>
            </div>
            <hr class="border-gray-300" />
            <div
              class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto"
            >
              <nuxt-link
                :to="localePath(post.path)"
                class="text-2xl font-bold tracking-normal text-gray-800"
              >
                {{ post.title }}
              </nuxt-link>
            </div>
            <hr class="border-gray-300" />
            <p
              class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700"
            >
              {{ post.resumen }}
            </p>

            <nuxt-link
              :to="localePath(post.path)"
              class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
            >
              Ver mas
            </nuxt-link>
          </div>
        </div>
      </section>
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