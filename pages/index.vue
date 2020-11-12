<template>
  <div>
    <hero />

    <features />
    <counter />
    <teasers />
    <call-to-action />
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import {
  hydrateOnInteraction,
  hydrateNever,
  hydrateWhenIdle,
  hydrateWhenVisible,
} from 'vue-lazy-hydration'
export default {
  name: 'LandingPage',
  components: {
    LazyHydrate,
    hero: () => import('@/components/Hero'),
    counter: hydrateWhenVisible(() => import('@/components/Counter')),
    features: hydrateWhenVisible(() => import('@/components/Features_2')),
    teasers: hydrateWhenVisible(() => import('@/components/Teasers')),
    'call-to-action': hydrateWhenVisible(() =>
      import('@/components/CallToAction')
    ),
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: 'Diverpark | Castillos hinchables | Mallorca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'DIVERPARK es una empresa especializada en el alquiler de Castillos hinchables en Mallorca y fiestas de espuma en Mallorca',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'DIVERPARK es una empresa especializada en el alquiler de Castillos hinchables en Mallorca y fiestas de espuma en Mallorca',
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
}
</script>
