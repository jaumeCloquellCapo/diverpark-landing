<template>
  <div class="w-full border-t bg-white pb-12">
    <div class="relative w-full flex items-center md:pb-12">

      
      <div class="absolute inset-0 flex">
        <div class="flex items-center justify-start w-1/2">
          <button
            class="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
            v-on:click="decrement()"
          >
            &#8592;
          </button>
        </div>
        <div class="flex items-center justify-end w-1/2">
          <button
            class="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
            v-on:click="increment()"
          >
            &#8594;
          </button>
        </div>
      </div>
      <template
        v-for="(image, i) in images.slice(
          currentIndex,
          currentIndex + maxItems
        )"
      >
        <img
          :class="carrouselClass"
          class="hover:opacity-75"
          :src="image"
          :key="image"
        />
      </template>
      <!--button
        class="absolute right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
        v-on:click="increment()"
      >
        &#8594;
      </button-->
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/SubHeader'
export default {
  components: {
    subHeader: SubHeader,
  },
  data() {
    return {
      currentIndex: 0,
      maxItems: 3,
    }
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  computed: {
    carrouselClass() {
      return `w-1/${this.maxItems}`
    },
  },
  methods: {
    increment() {
      this.currentIndex =
        this.currentIndex === this.images.length - this.maxItems
          ? 0
          : this.currentIndex + 1
    },
    decrement() {
      this.currentIndex =
        this.currentIndex === this.images.length - 6 ? 0 : this.currentIndex - 1
    },
  },
}
</script>
