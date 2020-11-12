<template>
  <div>
    <div
      class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal"
    >
      <section class="bg-white py-8">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <div
            class="w-full md:w-1/3 xl:w-1/3 p-4 flex flex-col"
            v-for="(imatge, i) in imatges"
            :key="i"
          >
            <a>
              <img
                async
                class="imgGallery object-scale-down w-full hover:grow hover:shadow-lg"
                :src="imatge.url"
              />
              <div class="pt-3 flex items-center justify-between">
                <p class="">Product Name</p>
                <svg
                  class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                  />
                </svg>
              </div>
              <!--p class="pt-1 text-gray-900">£9.99</p-->
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data: () => {
    return {
      showFilters: true,
      //categoryFilter: 'castillos-pequeños',
      imatges: [],
    }
  },
  props: {
    categoryFilter: {
      type: String,
      required: true,
    },
  },
  watch: {
    categoryFilter: function (newVal, oldVal) {
      // watch it
      this.filterBy(newVal)
    },
  },
  mounted() {
    this.filterBy(this.categoryFilter)
  },
  methods: {
    setWithExpiry(key, value, ttl) {
      const now = new Date()
      const item = {
        value: value,
        expiry: now.getTime() + ttl,
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

    filterBy(category) {
      this.categoryFilter = category
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
        list.items.map(async (imageRef) => {
          return {
            //data: imageRef,
            url: await imageRef.getDownloadURL(),
          }
        })
      )
      this.setWithExpiry(category, this.imatges, 50000)
    },
  },
}
</script>
<style scoped>
.imgGallery {
  width: 550px;
  height: 300px;
  object-fit: cover;
}
</style>