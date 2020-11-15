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
    features: hydrateWhenVisible(() => import('@/components/Features')),
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
          content: this.$t('seo.index.title'),
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$t('seo.index.description'),
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
}
</script>
