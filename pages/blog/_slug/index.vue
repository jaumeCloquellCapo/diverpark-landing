<template>
  <!-- Top Bar Nav -->
  <div>
    <subHeader />
    <div class="bg-white text-gray-800">
      <!-- Text Header -->
      <header class="w-full container mx-auto">
        <div class="flex flex-col items-center py-12">
          <h1
            class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
            href="#"
          >
            {{ article.title }}
          </h1>
          <h2 class="text-lg text-gray-600">{{ article.description }}</h2>
        </div>
      </header>

      <!-- Topic Nav -->

      <div class="container mx-auto flex flex-wrap py-6">
        <!-- Post Section -->
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">
          <article class="flex flex-col shadow my-4">
            <!-- Article Image -->
            <a href="#" class="hover:opacity-75">
              <img
                src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
              />
            </a>
            <div class="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                class="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                <template v-for="tag in article.tags || []"
                  >#{{ tag }}
                </template></a
              >
              <!--a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{
                article.title
              }}</a-->
              <p href="#" class="text-sm pb-8">
                <a href="#" class="font-semibold hover:text-gray-800">{{
                  article.author.name
                }}</a
                >, {{ formatDate(article.updatedAt) }}
              </p>

              <nav class="pb-6">
                <ul>
                  <li
                    v-for="link of article.toc"
                    :key="link.id"
                    :class="{
                      'font-semibold': link.depth === 2,
                    }"
                  >
                    <nuxtLink
                      :to="`#${link.id}`"
                      class="hover:underline"
                      :class="{
                        'py-2': link.depth === 2,
                        'ml-2 pb-2': link.depth === 3,
                      }"
                      >{{ link.text }}</nuxtLink
                    >
                  </li>
                </ul>
              </nav>
              <nuxt-content :document="article" />
            </div>
          </article>
          <PrevNext :prev="prev" :next="next" class="mt-8" />
        </section>

        <!-- Sidebar Section -->
        <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">About Us</p>
            <p class="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mattis est eu odio sagittis tristique. Vestibulum ut finibus leo.
              In hac habitasse platea dictumst.
            </p>
            <a
              href="#"
              class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>

          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">Instagram</p>
            <div class="grid grid-cols-3 gap-3">
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
              />
            </div>
            <a
              href="#"
              class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
            >
              <i class="fab fa-instagram mr-2"></i> Follow @dgrzyb
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>

  <!--div>
    <subHeader />
    <article
      class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row bg-white"
    >
      <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
        <img
          :src="article.img"
          :alt="article.alt"
          class="absolute h-full w-full object-cover"
        />
        <div class="overlay"></div>
        <div class="absolute top-32 left-32 text-white">
          <NuxtLink to="/"><Logo /></NuxtLink>
          <div class="mt-16 -mb-3 flex uppercase text-sm">
            <p class="mr-3">
              {{ formatDate(article.updatedAt) }}
            </p>
            <span class="mr-3">•</span>
            <p>{{ article.author.name }}</p>
          </div>
          <h1 class="text-6xl font-bold">{{ article.title }}</h1>
        </div>
        <div class="flex absolute top-3rem right-3rem">
          <NuxtLink
            to="/"
            class="mr-8 self-center text-white font-bold hover:underline"
          >
            All articles
          </NuxtLink>
          <a
            href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content"
            class="mr-8 self-center text-white font-bold hover:underline"
          >
            Tutorial
          </a>
          <AppSearchInput />
        </div>
      </div>
      <div
        class="relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
      >
        <h1 class="font-bold text-4xl">{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <p class="pb-4">
          Post last updated: {{ formatDate(article.updatedAt) }}
        </p>
        <nav class="pb-6">
          <ul>
            <li
              v-for="link of article.toc"
              :key="link.id"
              :class="{
                'font-semibold': link.depth === 2,
              }"
            >
              <nuxtLink
                :to="`#${link.id}`"
                class="hover:underline"
                :class="{
                  'py-2': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3,
                }"
                >{{ link.text }}</nuxtLink
              >
            </li>
          </ul>
        </nav>
        <nuxt-content :document="article" />
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </article>
  </div-->
</template>
<script>
import SubHeader from '@/components/SubHeader'
export default {
  components: {
    subHeader: SubHeader,
  },
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context
    const article = await $content(
      `${app.i18n.locale}/blog`,
      params.slug
    ).fetch()
    const [prev, next] = await $content(`${app.i18n.locale}/blog`)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  /*background-image: url('~assets/svg/icon-hashtag.svg');*/
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>