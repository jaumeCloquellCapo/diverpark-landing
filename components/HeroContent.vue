<template>
  <div class="pt-24">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row">
      <div
        class="flex flex-col w-full md:w-5/5 justify-center items-start text-center md:text-center items-center sm:items-left md:items-left lg:items-center xl:items-left"
      >
        <h1 class="my-4 text-5xl font-bold leading-tight">
          {{ $t('common.title') }}
        </h1>


        <vue-typed-js
          :strings="['Felicidad ', 'Diversión en estado puro']"
          :typeSpeed="100"
          :backSpeed="100"
        >
          <p class="leading-normal text-2xl mb-8">
            <span class="typing"></span>
          </p>
        </vue-typed-js>
        

        <NuxtLink :to="localePath('contact')">
          <button
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            {{ $t('common.contact') }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent',
}
</script>
