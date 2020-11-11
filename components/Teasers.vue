<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Title
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <teaser-column :rows="3" action="Action">
        <template v-slot:headline
          >Castillos hinchables acuáticos en Mallorca</template
        >
        <template v-slot:content
          >Mallorca DiverPark pone a su disposición los mejores servicios de
          alquiler de castillos hinchables acuáticos en Mallorca que se le
          puedan presentar en el sector, pues contamos con la mejor gama de
          castillos acuáticos con tobogán y todo tipo de elementos para que los
          más pequeños disfruten de la experiencia y se lo pasen en grande. Los
          castillos hinchables son fuente de diversión y salud, pues se trata de
          un juego físico que les anima a saltar y estar activos al mismo tiempo
          que sociabilizan y entablan lazos con los amigos y demás niños de su
          edad, todo lo contrario a la diversión digital que proporcionan los
          cada vez más populares videojuegos. Por otro lado los castillos
          hinchables ayudan a estimular la imaginación, especialmente en
          castillos hinchables temáticos como nuestro castillo acuático con
          forma de isla, o nuestros castillos hichables con forma de castillo
          medieval o castillo de princesas. Nuestros castillos acuáticos
          actuales son una isla tobogán y un deslizador que impulsa a los niños
          hasta la piscina haciendo que disfruten y se rían como
          nunca.</template
        >
        <template v-slot:hashtag>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#castillosHinchables</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Mallorca</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Agua</span
          >
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
        <template v-slot:headline
          >Alquiler Castillos Hinchables en Mallorca</template
        >
        <template v-slot:content
          >Mallorca DiverPark es la empresa referente de alquiler de castillos
          hinchables en Mallorca, además de otras actividades de ocio para los
          más pequeños de la casa. Nuestro catalogo de servicios engloba desde
          castillos hichables clásicos, a castillos hinchables acuáticos,
          cañones de espuma para fiestas, animación infantil, pinta caras y
          otras actividades. Nuestros servicios se extienden por toda la isla,
          incluyendo el desplazamiento a Palma y alrededores, y con unos
          pequeños gastos de desplazamiento para el resto de Mallorca. Nuestra
          empresa lleva años en el sector y además de tener todo el material
          homologado y de calidad, tiene un servicio basado en lo más importante
          de nuestra profesión, la satisfacción de los verdaderos protagonistas,
          los niños y niñas que disfrutan de nuestras actividades. Somos
          especialistas en cualquier tipo de celebración, pero los cumpleaños y
          las fiestas infantiles son nuestro verdadero fuerte, y los más
          pequeños siempre acaban super contentos y felices. En nuestra web y
          redes sociales, podréis disfrutar de fotografías y vídeos que ilustran
          todas nuestra actividades. Todos ellas siempre acompañadas del permiso
          de los padres y madres de los pequeños protagonistas.</template
        >
        <template v-slot:hashtag>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#castillosHincahbles</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Mallorca</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#botiboti</span
          >
        </template>
      </teaser-column>
      <teaser-column :rows="3" action="Action">
        <template v-slot:headline>Fiesta de espuma</template>
        <template v-slot:content
          >Si busca una empresa que le pueda organizar una Fiesta de espuma en
          Mallorca, en Mallorca DiverPark encontrará la mejor alternativa y los
          mejores precios, pues contamos con un increíble cañón de espuma de
          última generación y todo lo necesario para dar lugar a una fiesta
          inolvidable. Ningún evento o fiesta es tan divertido como una fiesta
          de espuma, pues tanto niños como adultos disfrutan bailando y saltando
          entre la espuma o lanzándola como si se tratase de bolas de nieve, una
          experiencia divertida y refrescante, perfecta para sobrellevar el
          calor de Mallorca, especialmente en los meses de primavera y verano.
          Nuestra empresa se encargará de todo, organizaremos la fiesta de
          espuma y desplazaremos todo lo necesario para que usted no tenga que
          preocuparse por nada, sólo de disfrutar de tal cantidad de espuma con
          total seguridad. Diversión asegurada y muchísima espuma para disfrutar
          y pasarlo en grande en cualquier tipo de evento, fiesta o celebración
          que tenga lugar en la zona metropolitana de Mallorca.</template
        >
        <template v-slot:hashtag>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#fiestaEspuma</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Mallorca</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Espuma</span
          >
        </template>
      </teaser-column>
    </div>
  </section>
</template>

<script>
import TeaserColumn from '@/components/TeaserColumn'

export default {
  name: 'Teasers',
  components: {
    'teaser-column': TeaserColumn
  }
}
</script>
