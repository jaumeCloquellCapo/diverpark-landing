<template>
  <div>
    <hero />
    <features />
    <counter />
    <!--teasers /-->
    <atracciones :posts="posts" />
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
    atracciones: hydrateWhenVisible(() => import('@/components/Atracciones')),
    features: hydrateWhenVisible(() => import('@/components/Features')),
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
    async asyncData(context) {
    const { $content, app } = context
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}/atracciones`).fetch()

    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  },
}
</script>
