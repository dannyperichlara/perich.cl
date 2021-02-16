<template>
  <div class="curriculo">
    <b-jumbotron 
      header="Inscritos" 
      class="rounded-0 text-white jbt">
      <div class="lead">Inscritos</div>
    </b-jumbotron>

    <div class="container mb-5">
      <b-card 
        v-for="(e,i) in alumnos" 
        :key="i" 
        class="mb-4">
        <div class="row">
          <div class="col">
            <div class="h4">{{ e.nombre }}: {{ e.algebra }}-{{ e.geometria }}</div>
            <div class="lead">{{ e.email }}</div>
            <div class="lead">{{ e.celular }}</div>
            <div>{{ e.rut }}</div>
            <div>{{ e.curso }}</div>
            <div>{{ e.colegio }}</div>
            <div>Fecha de inscripción: {{ e.fechaInscripcion? e.fechaInscripcion.split('T')[0] : 'No registrado' }}</div>
          </div>
          <div class="col">
            <div>{{ e.nombreapoderado }}</div>
            <div>{{ e.emailapoderado }}</div>
            <div>{{ e.emergencia }}</div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
  import { db } from '~/plugins/firebase'

  export default {
    name: 'Curriculo',
    data () {
      return {
        // alumnos: {}
      }
    },

    async asyncData() {

      let response = db.collection('alumnos2020').get()
      let alumnos = []

      await response.then(s => {

        s.forEach(e => {
          alumnos.push(e.data())
        })
      })

      alumnos.sort((e)=>{
        return -e.timestamp
      })

      return { alumnos }
    },

    mounted () {
      this.load()
    },

    methods: {
      load () {
        let $this = this

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin-bottom: 0.2rem;
  text-align: left;
}

img {
  max-width: 400px;
}

.jbt {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/img/cover.jpg");
    background-color: unset;
  }
</style>
