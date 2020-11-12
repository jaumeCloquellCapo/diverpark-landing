<template>
  <div>
    <subHeader />
    <div
      class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"
    >
      <section class="bg-white py-8">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" class="w-full z-1 top-0 px-6 py-1">
            <div
              class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
            >
              <a
                class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              >
                Castillos hinchables
              </a>

              <div class="flex items-center" id="store-nav-content">
                <button
                  class="pl-3 inline-block no-underline hover:text-black"
                  v-on:click="openFilters"
                >
                  <svg
                    class="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <div class="container mx-auto px-6 py-3">
            <transition name="fade" appear mode="out-in">
              <nav
                v-if="showFilters"
                class="sm:flex sm:justify-center sm:items-center mt-4"
              >
                <div class="flex flex-col sm:flex-row">
                  <button
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    v-on:click="filterBy('castillos-pequeños')"
                  >
                    {{ $t('common.castillosPequenos') }}
                  </button>
                  <button
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    v-on:click="filterBy('castillos-medianos')"
                  >
                    {{ $t('common.castillosMedianos') }}
                  </button>
                  <button
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    v-on:click="filterBy('castillos-grandes')"
                  >
                    {{ $t('common.castillosGrandes') }}
                  </button>
                  <button
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    v-on:click="filterBy('castillos-agua')"
                  >
                    {{ $t('common.castillosAgua') }}
                  </button>
                  <button
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    v-on:click="filterBy('animaciones')"
                  >
                    {{ $t('common.animaciones') }}
                  </button>
                  <button
                    class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                    v-on:click="filterBy('toro-mecanico')"
                  >
                    {{ $t('common.toromecanico') }}
                  </button>
                </div>
              </nav>
            </transition>
          </div>
     <gallery :categoryFilter="categoryFilter"/>
         
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/PhotoGallery'
import SubHeader from '@/components/SubHeader'
export default {
  name: 'SearchPage',
  components: {
        gallery: Gallery,
    subHeader: SubHeader,
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: 'Alquiler Castillos hinchables mallorca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mallorca Big Party es una empresa dedicada al alquiler de castillos hinchables en Mallorca y a la animación infantil en Mallorca entre otros servicios, ofreciendo calidad, compromiso y los mejores servicios para entretener a los niños y que estos se diviertan de forma saludable.'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Mallorca Diverpark es una empresa dedicada al alquiler de castillos hinchables en Mallorca y a la animación infantil en Mallorca entre otros servicios, ofreciendo calidad, compromiso y los mejores servicios para entretener a los niños y que estos se diviertan de forma saludable.'
        },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    }
  },
  data: () => {
    return {
      showFilters: true,
      categoryFilter: 'castillos-pequeños',
      imatges: []
    }
  },
  mounted() {
    this.loadQueryParams()
    //this.filterBy(this.categoryFilter)
  },
  methods: {
    setWithExpiry(key, value, ttl) {
      const now = new Date()
      const item = {
        value: value,
        expiry: now.getTime() + ttl
      }
      localStorage.setItem(key, JSON.stringify(item))
    },
    getWithExpiry(key) {
      const itemStr = localStorage.getItem(key)

      // if the item doesn't exist, return null
      if (!itemStr) {
        return null
      }
      const item = JSON.parse(itemStr)
      let now = new Date()
      // compare the expiry time of the item with the current time
      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
      }
      return item.value
    },
    openFilters(value) {
      this.showFilters = !this.showFilters
    },
    loadQueryParams() {
      this.categoryFilter = this.$route.query.category || this.categoryFilter
    },
    updateQueryParams(category) {
      let queryParams = {
        ...this.$route.query,
        category: category
      }
      this.$router.push({ query: queryParams })
    },

    filterBy(category) {
      this.categoryFilter = category
      this.updateQueryParams(category)
      this.load(category)
    },
    async load(category) {
      var result = this.getWithExpiry(category)
      if (result) {
        this.imatges = result
        return
      }

      var storageRef = this.$fire.storage.ref(category)
      var list = await storageRef.listAll()
      this.imatges = await Promise.all(
        list.items.map(async imageRef => {
          return {
            //data: imageRef,
            url: await imageRef.getDownloadURL()
          }
        })
      )
      this.setWithExpiry(category, this.imatges, 50000)
    }
  }
}
</script>
