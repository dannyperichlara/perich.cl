<template>
  <div class="destacados mb-5">
    <b-jumbotron 
      header="Puntajes Destacados" 
      class="rounded-0 text-white jbt">
      <p class="lead">Desde 1982 a la fecha han sido muchos los puntajes regionales y nacionales obtenidos, tanto en la PAA y PCE, como en la PSU de matemática.</p>
      
    </b-jumbotron>

    <div class="container">
      <b-card-group>
        <b-card class="border-0">
          <p class="text-left">El primero fue Fernando Prieto B., proceso 1982. Y de allí son muchos más los destacados en estas pruebas de selección universitaria, tales como:</p>
          <ul>
            <li class="mb-0">Mauricio Cárcamo H.</li>
            <li class="mb-0">Mauricio Amaro L.</li>
            <li class="mb-0">Klaus Thormann F.</li>
            <li class="mb-0">Eduardo Quiroga L.</li>
            <li class="mb-0">Guido Cabrera L.</li>
            <li class="mb-0">Rudolf Mijac G.</li>
            <li class="mb-0">Sergio Soto</li>
            <li class="mb-0">Ricardo Narvarte V.</li>
            <li class="mb-0">Thomas Alfsen</li>
          </ul>

          <p>Muy reciente, Felipe Vergara Iduya, Puntaje Nacional en Matemática; Daniel Barrientos y Pablo Raposo, Puntajes regionales en Matemáticas, etc.</p>
          <p>Y un nuevo logro del preuniversitario: <strong>Alejandro Cárcamo Aravena obtuvo Puntaje Nacional PSU Matemática 2018.</strong></p>
          <div class="lead mt-5">Y lo más importante; más del 80% de los alumnos con puntajes sobre 600.</div>
        </b-card>
        <b-card class="border-0">
          <img 
            src="img/alejandro-carcamo.jpg" 
            width="100%" >
        </b-card>
      </b-card-group>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Destacados',
    data () {
      return {}
    },

    mounted () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin-bottom: 2rem;
  list-style: square;
}

/*li:before {
  content: '✔️ ';
  font-size: 0.8rem;
}*/

.jbt {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/img/cover.jpg");
    background-color: unset;
  }
</style>
