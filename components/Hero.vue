<template>
  <div>
    <hero-content />
    <sub-header />
  </div>
</template>

<script>
import HeroContent from '@/components/HeroContent'
import SubHeader from '@/components/SubHeader'
export default {
  name: 'Hero',
  components: {
    'hero-content': HeroContent,
    'sub-header': SubHeader,
  },
}
</script>
