import languages from './static/lang/languages'
import fs from 'fs'
const path = require('path')

function getPaths(lang, type) {
  let initial = lang
  if (lang === 'es') {
    initial = ''
  }
  return fs
    .readdirSync(path.resolve(__dirname, 'content', `${lang}/${type}`))
    .filter(filename => path.extname(filename) === '.md')
    .map(filename => `${initial}/${type}/${path.parse(filename).name}`)
}

export default {
  components: true,
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Diverpark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Alquiler de castillos hinchables en Palma Mallorca'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  components: true,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/typed.js', '~/plugins/jsonld', '~/plugins/lazyLoad', { src: '~plugins/ga.js', mode: 'client' }],
  // some nuxt config...
  css: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/firebase',
    'nuxt-svg-loader',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/pwa'
  ],
  content: {
    liveEdit: false
  },
  generate: {
    routes: []
      .concat(getPaths('es', 'atracciones'))
      .concat(getPaths('en', 'atracciones'))
  },

  pwa: {
 
    // https://pwa.nuxtjs.org/modules/meta.html
    meta: {
      name: 'Diverpark Mallorca',
      description: 'Alquiler de castillos hinchables',
      lang: 'es',
      ogHost: 'https://diverpark.net'
    },

    // https://pwa.nuxtjs.org/modules/manifest.html
    manifest: {
      name: 'Diverpark Mallorca',
      short_name: 'Diverpark',
      start_url: '/',
      description: 'Alquiler de castillos hinchables',
      lang: 'es',
      background_color: '#fedc40'
    }
  },

  // https://pwa.nuxtjs.org/modules/workbox.html
  workbox: {
    runtimeCaching: [
      {
        urlPattern:
          'https://firebasestorage.googleapis.com/v0/b/diverpark-836bc.appspot.com/.*',
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'img-cache'
        },
        strategyPlugins: [
          {
            use: 'Expiration',
            config: {
              maxEntries: 10,
              maxAgeSeconds: 300
            }
          }
        ]
      }
    ]
  },
  i18n: {
    // Options
    //to make it seo friendly remove below line and add baseUrl option to production domain
    seo: false,
    baseUrl: 'https://diverpark.net',
    lazy: true,
    locales: languages,
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es'
    },
    detectBrowserLanguage: false,
    //detectBrowserLanguage: {
    //  useCookie: true,
    //  cookieKey: 'i18n_redirected',
    //  alwaysRedirect: true
    //},
    langDir: 'static/lang/'
  },
  sitemap: {
    hostname: 'https://diverpark.net',
    // shortcut notation (basic)
    i18n: true,
    // nuxt-i18n notation (advanced)
    i18n: {
      locales: ['en', 'es'],
      routesNameSeparator: '___'
    }
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyDub0idsdL-ZRbaboLkwW8CF5BqDEuQXsI',
      authDomain: 'diverpark-836bc.firebaseapp.com',
      databaseURL: 'https://diverpark-836bc.firebaseio.com',
      projectId: 'diverpark-836bc',
      storageBucket: 'diverpark-836bc.appspot.com',
      messagingSenderId: '1086733662855',
      appId: '1:1086733662855:web:12f7cb7b9a109008ee1622',
      measurementId: 'G-6RG7EFH5WH'
    },
    services: {
      auth: false,
      firestore: false,
      functions: false,
      storage: true,
      database: false,
      messaging: false,
      performance: false,
      analytics: true,
      remoteConfig: false
    }
  },
  /*
   ** Build configuration
   */
  build: {


    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      loaders: {
        file: {
          esModule: false
        }
      }
    }
  }
}
