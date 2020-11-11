<template>
  <div>
    <hero />
    <features />
    <teasers />
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    teasers: Teasers,
    'call-to-action': CallToAction
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: 'Castillos hinchablesmallorca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Diverpark es una empresa especializada en el Alquiler de Castillos hinchables en Mallorca y fiestas de espuma en Mallorca, además de otros muchos servicios como castillos hinchables acuáticos, servicios de animación infantil, espectáculos de magia y muchas más cosas para diversión de los niños'
        },
          {
          hid: 'og:description',
          name: 'og:description',
          content: 'Mallorca Diverpark es una empresa dedicada al alquiler de castillos hinchables en Mallorca y a la animación infantil en Mallorca entre otros servicios, ofreciendo calidad, compromiso y los mejores servicios para entretener a los niños y que estos se diviertan de forma saludable.'
        },
        ...i18nSeo.meta
      ],
      link: [
        ...i18nSeo.link
      ]
    }
  }
}
</script>
