<template>
  <div>
    <hero />
    <features />
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
  hydrateWhenVisible
} from 'vue-lazy-hydration'
export default {
  name: 'LandingPage',
  components: {
    LazyHydrate,
    hero: () => import('@/components/Hero'),
    features: hydrateWhenVisible(() => import('@/components/Features')),
    teasers: hydrateWhenVisible(() => import('@/components/Teasers')),
    'call-to-action': hydrateWhenVisible(() => import('@/components/CallToAction'))
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: 'Castillos hinchables mallorca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'DIVERPARK es una empresa especializada en el Alquiler de Castillos hinchables en Mallorca y fiestas de espuma en Mallorca, además de otros muchos servicios como castillos hinchables acuáticos, servicios de animación infantil, espectáculos de magia y muchas más cosas para diversión de los niños'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Mallorca DIVERPARK es una empresa dedicada al alquiler de castillos hinchables en Mallorca y a la animación infantil en Mallorca entre otros servicios, ofreciendo calidad, compromiso y los mejores servicios para entretener a los niños y que estos se diviertan de forma saludable.'
        },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    }
  }
}
</script>
