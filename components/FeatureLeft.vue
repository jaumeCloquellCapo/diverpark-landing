<template>
  <section class="bg-white py-8">
    <div class="container max-w-7xl mx-auto m-8">
  <div class="flex flex-wrap flex-col-reverse sm:flex-row">
    <div class="w-full sm:w-1/2 p-6 mt-6">
      <slot name="svg" />
    </div>
    <div class="w-full sm:w-1/2 p-6 mt-6">
      <div class="align-middle">
        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">{{ headline }}</h3>
        <p class="text-gray-600 mb-8">
          {{ content }}
          <br />
          <br />
        </p>
      </div>
    </div>
  </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureLeft',
  props: {
    headline: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  }
}
</script>
