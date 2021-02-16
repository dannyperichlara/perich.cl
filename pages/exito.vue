<template>
  <div class="exito container pt-5 mb-5">
    <h1 class="">¡Te doy la bienvenida!</h1>
    <p class="lead text-success font-weight-bold">Tu pago fue recibido con éxito, así que ya eres parte de los alumnos matriculados en el preuniversitario.</p>

    <h3 class="text-success">Recuerda que el inicio de clases es el día 16 de marzo.</h3>
    <h4>¡Nos vemos!</h4>
  </div>
</template>
<script>
  import Horarios from '~/components/Horarios'

  export default {
    name: 'Footer',
    components: {Horarios},
    data () {
      return {}
    },

    mounted () {

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.socialbuttons {
  font-size: 2rem;
  margin-right: 2rem;
}
</style>
