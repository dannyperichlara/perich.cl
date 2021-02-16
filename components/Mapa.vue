<template>
  <div>
    <b-jumbotron 
      class="rounded-0 border-0 mb-0" 
      bg-variant="info" 
      text-variant="white" 
      border-variant="dark">
      <div class="display-4">¿Dónde estamos?</div>
      <div class="lead mb-5">El preuniversitario se realiza de forma online, pero para la inscripción presencial se debe entregar los formularios prellenados en Julio Roca 1012 c, tercer piso a mano izquierda.</div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.9696555779074!2d-70.90652368370057!3d-53.1645837638721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb2637a1ca8d831%3A0x5a8a4cb61ad52541!2sPdte.%20Julio%20A.Roca%201012%2C%20Punta%20Arenas%2C%20Magallanes%20y%20la%20Ant%C3%A1rtica%20Chilena!5e0!3m2!1ses!2scl!4v1606759593780!5m2!1ses!2scl" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </b-jumbotron>
  </div>
</template>

<script>
  export default {
    name: 'Mapa',
    data () {
      return {}
    },

    mounted () {
      //window.scrollTo(0,0)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
