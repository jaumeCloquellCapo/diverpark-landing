<template>
  <div>
    <img async src="~/assets/img/wave-top.svg?inline" class="w-auto" alt="diverpark castillos hinchables palma de mallorca baleares" />

    
    <section class="container mx-auto text-center py-6 mb-12">
      <p
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
      >
        {{ $t('callToAction.title') }}
        <br />
        DIVERPARK
      </p>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <h3 class="my-4 text-3xl leading-tight">
        {{ $t('callToAction.subtitle') }}
      </h3>
      <br />
      <!--button
      class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
    >
        {{ $t('common.booking') }} !
    </button-->
      <NuxtLink
        :to="localePath('contact')"
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
      >
        <button>{{ $t('common.contact') }} !</button>
      </NuxtLink>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CallToAction',
  components: {}
}
</script>
