<template>
  <div class="leading-normal tracking-normal text-white gradient">
    <the-header />
    <nuxt  keep-alive/>
    <the-footer />
    <a href="https://api.whatsapp.com/send?phone=+34625458704&text=Hola, quisiera mas información para alquilar un castillo hinchable" class="float" target="_blank">
      <img async src="~/assets/img/whatsapp.svg?inline" class="y-float" alt="diverpark castillos hinchables palma de mallorca baleares" />
    </a>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
    font-display: swap;
}


.gradient {
  /*background: linear-gradient(180deg, #c8e3f7 0%, #ffffff 90%);  */
/*background-color: #5dcefa;*/
  background: linear-gradient(90deg, #e21a1a 0%, #d4b13e 100%);

}

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}

.my-float{
	margin-top:16px;
}
</style>
