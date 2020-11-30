<template>
  <!-- Top Bar Nav -->
  <div>
    <sub-header />
    <div class="bg-white text-gray-800">
      <!-- Text Header -->
      <div class="w-full container mx-auto text-center py-12">
        <div class="flex flex-col items-center">
          <h1
            class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
          >
            {{ article.title }}
          </h1>
          <h2 class="text-lg text-gray-600">{{ article.resumen }}</h2>
        </div>
      </div>

      <!-- Topic Nav -->

      <div class="container mx-auto flex flex-wrap py-6">
        <!-- Post Section -->
        <section class="w-full md:w-3/3 flex flex-col items-center px-3">
          <article class="flex flex-col shadow my-4">
            <!-- Article Image -->
            <a class="hover:opacity-75">
              <img v-lazy="article.img" :alt="article.title" class="w-full" />
            </a>
            <div class="bg-white flex flex-col justify-start p-6">
              <!--a class="text-blue-700 text-sm font-bold uppercase pb-4">
                <template v-for="tag in article.tags || []"
                  >#{{ tag }}
                </template></a
              -->

              <div class="text-sm pb-8">
                {{ formatDate(article.updatedAt) }}
              </div>
              <nuxt-content :document="article" />
            </div>
          </article>

          <NuxtLink
            :to="localePath('contact')"
            class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
          >
            {{ $t('common.booking_now') }} !
          </NuxtLink>
        </section>
      </div>

      <section class="bg-white py-8">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" class="w-full z-30 top-0 px-6 py-1">
            <div
              class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
            >
              <a
                class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              >
                Store
              </a>

              <div class="flex items-center" id="store-nav-content">
                <a class="pl-3 inline-block no-underline hover:text-black">
                  <svg
                    class="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </a>

                <a class="pl-3 inline-block no-underline hover:text-black">
                  <svg
                    class="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </nav>

          <div
            class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
            v-for="(image, i) in images"
            :key="i"
          >
            <div>
              <img
                :alt="getRandom(article.tags, 5)"
                class="hover:grow hover:shadow-lg imgCarrousel"
                v-lazy="image.url"
              />
              <div class="pt-3 flex items-center justify-between"></div>
              <!--p class="pt-1 text-gray-900">£9.99</p-->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import SubHeader from '@/components/SubHeader'
import getSiteMeta from '~/utils/getSiteMeta.js'
export default {
  components: {
    'sub-header': SubHeader,
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const metaData = {
      title: this.article.title,
      description: this.article.description,
      keywords: this.article.tags.toString(),
      url: 'https://diverpark.net' + this.$route.fullPath,
    }
    return {
      title: this.article.title,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [...getSiteMeta(metaData), ...i18nSeo.meta],
      link: [...i18nSeo.link],
    }
  },
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context
    const article = await $content(
      `${app.i18n.locale}/atracciones`,
      params.slug
    ).fetch()
    const [prev, next] = await $content(`${app.i18n.locale}/atracciones`)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
      images: [],
    }
  },
  async mounted() {
    this.images = await this.load(this.article.gallery)
  },
  methods: {
    getRandom(arr, n) {
      var result = new Array(n),
        len = arr.length,
        taken = new Array(len)
      if (n > len)
        throw new RangeError('getRandom: more elements taken than available')
      while (n--) {
        var x = Math.floor(Math.random() * len)
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken ? taken[len] : len
      }
      return result
    },
    async load(category) {
      var storageRef = this.$fire.storage.ref(category)
      var list = await storageRef.listAll()
      return await Promise.all(
        list.items.map(async (imageRef) => {
          return {
            //data: imageRef,
            url: await imageRef.getDownloadURL(),
          }
        })
      )
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
<style>
.nuxt-content p {
  background-color: white;
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  /*background-image: url('~assets/svg/icon-hashtag.svg');*/
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.imgCarrousel {
  width: 400px;
  height: 350px;
  object-fit: cover;
}
</style>