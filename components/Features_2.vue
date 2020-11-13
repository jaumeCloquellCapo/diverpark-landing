<template>
  <div class="bg-white">
    <section class="container mx-auto py-24 px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 items-center mb-24"
      >
        <div>
          <h2
            class="text-center sm:text-left text-black text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4"
          >
            {{ $t('features.title') }}
          </h2>
          <p
            class="text-center sm:text-left text-base md:text-lg text-blue-900 mb-5"
          >
            {{ $t('features.left.subtitle') }}
          </p>
     
        </div>
        <div class="w-full pl-12">
          <img
            async
            src="https://firebasestorage.googleapis.com/v0/b/diverpark-836bc.appspot.com/o/background%2Fnube.png?alt=media&token=6f463bf8-f83c-44ab-8f92-50e26a16a24c"
            class="w-full"
            alt="Somos una empresa dedicada principalmente al alquiler de Castillos Hinchables en Mallorca. Aunque esta no es nuestra única actividad. También disponemos a parte de los castillos hinchables un equipo especializado en espectáculos de entretenimiento para los mas pequeños. "
          />
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 items-center flex-col-reverse"
      >
        <div class="order-none md:order-2">
          <h2
            class="text-center sm:text-left text-black text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4"
          >
            {{ $t('features.right.title') }}
          </h2>
          <p
            class="text-center sm:text-left text-base md:text-lg text-blue-900 mb-5"
          >
            {{ $t('features.right.subtitle') }}
          </p>
      
        </div>
        <div class="w-full pr-12">
          <img
            async
            src="https://firebasestorage.googleapis.com/v0/b/diverpark-836bc.appspot.com/o/background%2FdiverPark.jpg?alt=media&token=f77cf89f-37fe-49fd-8f1a-2a01db98d667"
            class="w-full"
            alt="diverpark alquiler fiesta espuma mallorca palma baleares"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FeatureLeft',
  props: {
    headline: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  },
}
</script>
