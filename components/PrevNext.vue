<template>
  <div class="w-full flex pt-6">
    <NuxtLink
      v-if="prev"
      :to="localePath(prev.path)"
      class="w-1/2 bg-white shadow hover:shadow-md text-right p-6"
    >
      <p class="text-lg text-blue-800 font-bold flex items-center">
        <i class="fas fa-arrow-left pr-1"></i> Previous
      </p>
      <p class="pt-2">{{ prev.title }}</p>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="localePath(next.path)"
      class="w-1/2 bg-white shadow hover:shadow-md text-right p-6"
    >
      <p class="text-lg text-blue-800 font-bold flex items-center justify-end">
        Next <i class="fas fa-arrow-right pl-1"></i>
      </p>
      <p class="pt-2">{{ next.title }}</p>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
