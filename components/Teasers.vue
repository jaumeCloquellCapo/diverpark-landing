<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <p
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Blog
      </p>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <teaser-column :rows="3" action="Action">
        <img
          async
          class="w-full"
          src="https://firebasestorage.googleapis.com/v0/b/diverpark-836bc.appspot.com/o/background%2Fcastillo-agua.jpg?alt=media&token=355bea70-0bd7-4445-b772-f4e243f636d4"
          alt="diverpark alquiler castillos hinchables de agua para el verano en mallorca"
          slot="svg"
        />
        <template v-slot:headline>
          <NuxtLink :to="localePath('castillosagua')">
            {{ $t('teaser.castillosAgua.title') }}
          </NuxtLink>
        </template>
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
          async
          class="w-full"
          src="https://firebasestorage.googleapis.com/v0/b/diverpark-836bc.appspot.com/o/background%2Favion.jpg?alt=media&token=907ea601-307e-414b-a962-6815cd01323e"
          alt="diverpark alquiler castillos hinchables con tobogan para comuniones fiestas o bautizos"
          slot="svg"
        />

        <template v-slot:headline>
          <NuxtLink :to="localePath('castillosgrandes')">
            {{ $t('teaser.castillos.title') }}
          </NuxtLink>
        </template>
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
          async
          class="w-full"
          src="https://firebasestorage.googleapis.com/v0/b/diverpark-836bc.appspot.com/o/background%2Fespuma.jpg?alt=media&token=8c0858e5-c699-440f-adac-92a5c506626b"
          alt="diverpark alquiler castillos hinchables y fiesta espuma  para comuniones fiestas o bautizos"
          slot="svg"
        />
        <template v-slot:headline>
          <NuxtLink :to="localePath('espuma')">
            {{ $t('teaser.espuma.title') }}
          </NuxtLink>
        </template>

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
    'teaser-column': TeaserColumn,
  },
}
</script>
