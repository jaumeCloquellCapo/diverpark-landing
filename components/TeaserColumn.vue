<template>
  <div
    :class="classList"
    class="w-full p-6 flex flex-col flex-grow flex-shrink"
  >
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="w-full">
    <slot name="svg"  />
    </div>
  
    <!--img class="w-full" src="~/assets/img/hero.png"  alt="Sunset in the mountains" /-->
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-gray-700 ">
        <slot name="headline" />
        </div>
      <p class="text-gray-700 text-base truncate_c">
        <slot name="content" />
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <slot name="hashtag" />
   
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'TeaserColumn',
  props: {
    rows: {
      type: Number,
      required: true,
      validator: value => {
        return value >= 1 && value <= 6
      }
    },
    action: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList() {
      return `md:w-1/${this.rows}`
    },
    renderAction() {
      return this.action !== ''
    }
  },
  methods: {
    onClick() {
      // NOTE: is fired, but not handled in this template
      this.$emit('clicked')
    }
  }
}
</script>
<style scoped>
.truncate_c {
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
