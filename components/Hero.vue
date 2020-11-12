<template>
  <div>
    <hero-content />
    <div class="relative -mt-18 lg:-mt-48">
      <img
        async
        src="~/assets/img/wave-button.svg?inline"
        alt="diverpark castillos hinchables palma de mallorca baleares"
      />
    </div>
  </div>
</template>

<script>
import HeroContent from '@/components/HeroContent'

export default {
  name: 'Hero',
  components: {
    'hero-content': HeroContent
  }
}
</script>
