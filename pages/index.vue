<template>
  <div>
    <hero />
    <!--features /-->

    <feature-right
      :headline="$t('features.left.title')"
      :content="$t('features.left.subtitle')"
    >
      <img
        async
        src="~/assets/background/nube.png"
        class="w-auto"
        alt="diverpark alquiler toro mecánico mallorca palma baleares"
        slot="svg"
      />
    </feature-right>
    <carrousel class="bg-white pb-12"/>
    <counter />
    <feature-left
      :headline="$t('features.right.title')"
      :content="$t('features.right.subtitle')"
    >
      <img
        async
        src="~/assets/background/espumaBackground.jpg"
        class="w-auto"
        alt="diverpark alquiler fiesta espuma mallorca palma baleares"
        slot="svg"
      />
    </feature-left>
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
    carrousel: hydrateWhenVisible(() => import('@/components/Carrousel')),
    counter: hydrateWhenVisible(() => import('@/components/Counter')),
    'feature-left': hydrateWhenVisible(() =>
      import('@/components/FeatureLeft')
    ),
    'feature-right': hydrateWhenVisible(() =>
      import('@/components/FeatureRight')
    ),
    features: hydrateWhenVisible(() => import('@/components/Features')),
    teasers: hydrateWhenVisible(() => import('@/components/Teasers')),
    'call-to-action': hydrateWhenVisible(() =>
      import('@/components/CallToAction')
    ),
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
            'DIVERPARK es una empresa especializada en el Alquiler de Castillos hinchables en Mallorca y fiestas de espuma en Mallorca, además de otros muchos servicios como castillos hinchables acuáticos, servicios de animación infantil, espectáculos de magia y muchas más cosas para diversión de los niños',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Mallorca DIVERPARK es una empresa dedicada al alquiler de castillos hinchables en Mallorca y a la animación infantil en Mallorca entre otros servicios, ofreciendo calidad, compromiso y los mejores servicios para entretener a los niños y que estos se diviertan de forma saludable.',
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
}
</script>
