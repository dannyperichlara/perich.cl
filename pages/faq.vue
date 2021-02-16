<template>
  <div class="faq">
    <h3>Preguntas frecuentes</h3>

    <div class="container mb-5">
      <div 
        v-for="(e, i) in faq" 
        :key="i">
        <p class=""><span class="question">{{ e.q }}</span><br>{{ e.a }}</p>
      </div>
      <hr>
      <p class="lead text-center">Si aún tienes dudas, llama al <a href="tel:+56961209403">+56 9 6120 9403</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data () {
    return {
      faq: [
        {
          q:'¿Cuándo finaliza el preuniversitario?',
          a:'El preuniversitario finaliza una semana antes de la priueba, pero éste se puede extender si alguna situación hace variar la fecha en que se rinde la prueba.'
        },
        {
          q:'¿En caso de faltar, se puede recuperar la clase perdida?',
          a:'Cada contenido se sube a la plataforma YouTube donde puede ser visto por el alumno.'
        },
        /*{
          q:'¿Cuántos cupos tiene cada grupo?',
          a:'Cada grupo tiene 23 cupos'
        },*/
        {
          q:'¿Se emite boleta por el pago del preunivesitario?',
          a:'Las boletas de honorarios se entregan, desde marzo, via electrónica al email que el apoderado haya puesto en el Formulario de Matrícula.'
        },
        {
          q:'Necesito un certificado indicando que mi hijo estudia preuniversitario. ¿Puedo obtener uno?',
          a:'El alumno que necesite un certificado que acredite su condición de alumno del preuniversitario, debe solicitarlo a dannyperich@gmail.com o en los fonos contenidos en esta página.'
        },
        {
          q:'¿Los alumnos de tercero medio están separados de los de cuarto medio?',
          a:'No hay separación de grupos por curso. En conjunto trabajan alumnos de 3º, 4º y egresados, ya que los contenidos se entregan partiendo "desde cero".'
        },
        {
          q:'¿En qué horarios se realizan los ensayos?',
          a:'Los ensayos se envían a cada alumno y tienen un plazo de 5 días para realizarlo. Éstos son de carácter obligatorio.'
        }
      ]
    }
  },

  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    margin-bottom: 1rem;
  }

  .jbt {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/img/cover.jpg");
    background-color: unset;
  }

  .question {
    font-weight: bold;
    margin-top: 2rem;
  }
</style>
