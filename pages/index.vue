<template>
  <div>
    <hero />
    <features />
    <counter />
    <!--teasers /-->
    <attractions :posts="posts" />
    <call-to-action />
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta.js'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
export default {
  name: 'LandingPage',
  components: {
    hero: () => import('@/components/Hero'),
    counter: hydrateWhenVisible(() => import('@/components/Counter')),
    attractions: hydrateWhenVisible(() =>
      import('@/components/ListAttractions')
    ),
    features: hydrateWhenVisible(() => import('@/components/Features')),
    'call-to-action': hydrateWhenVisible(() =>
      import('@/components/CallToAction')
    ),
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const metaData = {
      title: this.$t('seo.index.title'),
      description: this.$t('seo.index.description'),
      keywords: this.$t('seo.index.keywords'),
    }

    return {
      title: this.$t('seo.index.title'),
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [...getSiteMeta(metaData), ...i18nSeo.meta],
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
  jsonld() {

    const productSchema = {
      '@type': 'ItemList',
      itemListElement: this.posts.map((post, index) => ({
        '@type': 'SiteNavigationElement',
        name: post.title,
        image: post.img,
        position: index,
        description: post.resumen,
        url: this.localePath(post.path),
      })),
    }

    const bussinesSchema = {
      '@type': 'LocalBusiness',
      name: 'Diverpark',
      url: 'https://diverpark.net/',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Palma',
        addressRegion: 'Islas Baleares',
        addressCountry: 'España',
      },
      sameAs: [
        'https://www.facebook.com/people/Diverpark-Diverpark/100007428406595',
      ],
      publicAccess: true,
      hasMap: 'https://goo.gl/maps/B9TAqk7AknGDfosj8',
      openingHours: 'Mo, Tu, We, Th, Fr, Sa, Su 01:00-23:59',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Telf',
        telephone: '670205469',
      },
      description:
        'Alquiler Castillos Hinchables y Colchonetas en Mallorca. Reserva de nuestro amplio Catálogo el Hinchables ideal en tus Fiestas Infantiles y Eventos. ¿Quiéres un evento inolvidable? Cumpleaños, Bautizos, Bodas, Fiestas Rosa, entonces somos tu mejor opción. Contáctanos.',
      telephone: '625458704',
      email: 'catidiver@gmail.com',
      priceRange: '€70 - €900',
      image: [
        'https://firebasestorage.googleapis.com/v0/b/diverpark-836bc.appspot.com/o/background%2FdiverPark.jpg?alt=media&token=f77cf89f-37fe-49fd-8f1a-2a01db98d667',
      ],
    }

    return {
      '@context': 'http://schema.org',
      '@graph': [bussinesSchema, productSchema],
    }
  },
}
</script>
