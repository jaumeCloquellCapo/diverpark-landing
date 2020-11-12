<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-7xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        {{ $t('features.title') }}
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <feature-right
        :headline="$t('features.left.title')"
        :content="$t('features.left.subtitle')"
      >
        <img      async src="~/assets/background/toroBackground.jpg" class="w-auto" alt="diverpark alquiler toro mecánico mallorca palma baleares"  slot="svg" />
      </feature-right>
      <feature-left
        :headline="$t('features.right.title')"
        :content="$t('features.right.subtitle')"
      >
        <img      async src="~/assets/background/espumaBackground.jpg" class="w-auto" alt="diverpark alquiler fiesta espuma mallorca palma baleares"  slot="svg" />
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

export default {
  name: 'Features',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft
  }
}
</script>
