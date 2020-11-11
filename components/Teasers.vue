<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        BLOG
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <teaser-column :rows="3" action="Action">
        <img
          class="w-full"
          src="~/assets/background/castillo-agua.jpg"
          alt
          slot="svg"
        />
        <template v-slot:headline>{{
          $t('teaser.castillosAgua.title')
        }}</template>
        <template v-slot:content>{{
          $t('teaser.castillosAgua.description')
        }}</template>
        <template v-slot:hashtag>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#castillosHinchables</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Mallorca</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Agua</span
          >
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
          <img
          class="w-full"
          src="~/assets/background/avion.jpg"
          alt
          slot="svg"
        />
        <template v-slot:headline>{{ $t('teaser.castillos.title') }}</template>
        <template v-slot:content>{{
          $t('teaser.castillos.description')
        }}</template>
        <template v-slot:hashtag>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#castillosHincahbles</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Mallorca</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#botiboti</span
          >
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
              <img
          class="w-full"
          src="~/assets/background/espuma.jpg"
          alt
          slot="svg"
        />
        <template v-slot:headline>{{ $t('teaser.espuma.title') }}</template>
        <template v-slot:content>{{
          $t('teaser.espuma.description')
        }}</template>
        <template v-slot:hashtag>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#fiestaEspuma</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Mallorca</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Espuma</span
          >
        </template>
      </teaser-column>
    </div>
  </section>
</template>

<script>
import TeaserColumn from '@/components/TeaserColumn'

export default {
  name: 'Teasers',
  components: {
    'teaser-column': TeaserColumn
  }
}
</script>
