<template>
  <!-- Top Bar Nav -->
  <div>
    <subHeader />
    <div class="bg-white text-gray-800">
      <!-- Text Header -->
      <div class="w-full container mx-auto text-center py-12">
        <div class="flex flex-col items-center">
          <h1
            class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
          >
            {{ article.title }}
          </h1>
          <h2 class="text-lg text-gray-600">{{ article.description }}</h2>
        </div>
      </div>

      <!-- Topic Nav -->

      <div class="container mx-auto flex flex-wrap py-6">
        <!-- Post Section -->
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">
          <article class="flex flex-col shadow my-4">
            <!-- Article Image -->
            <a class="hover:opacity-75">
              <img :src="article.img" :alt="article.title" class="w-full" />
            </a>
            <div class="bg-white flex flex-col justify-start p-6">
              <a class="text-blue-700 text-sm font-bold uppercase pb-4">
                <template v-for="tag in article.tags || []"
                  >#{{ tag }}
                </template></a
              >
              <!--a   class="text-3xl font-bold hover:text-gray-700 pb-4">{{
                article.title
              }}</a-->
              <div class="text-sm pb-8">
                <!--a class="font-semibold hover:text-gray-800">{{
                  article.author.name
                }}</a
                --> {{ formatDate(article.updatedAt) }}
              </div>

              <!--nav class="pb-6">
                <ul>
                  <li
                    v-for="link of article.toc"
                    :key="link.id"
                    :class="{
                      'font-semibold': link.depth === 2,
                    }"
                  >
                    <nuxtLink
                      :to="`#${link.id}`"
                      class="hover:underline"
                      :class="{
                        'py-2': link.depth === 2,
                        'ml-2 pb-2': link.depth === 3,
                      }"
                      >{{ link.text }}</nuxtLink
                    >
                  </li>
                </ul>
              </nav-->
              <nuxt-content :document="article" />
            </div>
          </article>
          <!--PrevNext :prev="prev" :next="next" class="mt-8" /-->
        </section>

        <!-- Sidebar Section -->
        <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">    {{$t('common.about_us')}}</p>
            <p class="pb-2">
              {{ article.resumen }}
            </p>
            <button
              class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
                {{$t('common.get_to_know_us')}}
          
            </button>
          </div>

          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">Galería de imagenes</p>
            <div class="grid grid-cols-3 gap-3">
              <img
                v-for="(image, i) in images"
                :key="i"
                class="hover:opacity-75 imgCarrousel"
                :src="image.url"
              />
              
            </div>

            <NuxtLink
              :to="localePath('contact')"
              class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
            >
              {{ $t('common.booking_now') }} !
            </NuxtLink>
          </div>
        </aside>
      </div>


      <!--carrousel :images="images" /-->
    </div>
  </div>
</template>
<script>
import SubHeader from '@/components/SubHeader'

export default {
  components: {
    subHeader: SubHeader,
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: this.article.title,
      meta: [
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: this.article.tags,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.description,
        },

        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        // facebook
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://bobross.com',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // twitter
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://bobross.com',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context
    const article = await $content(
      `${app.i18n.locale}/blog`,
      params.slug
    ).fetch()
    const [prev, next] = await $content(`${app.i18n.locale}/blog`)
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
  width: 200px;
  height: 150px;
  object-fit: cover;
}
</style>