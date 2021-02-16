<template>
  <div class="mb-5">
    <b-jumbotron class="jbt text-white">
      <div class="display-4">Puntajes Ensayos</div>
    </b-jumbotron>
    <div class="container text-center">
      <input 
        v-model="rutcompleto" 
        placeholder="Ingresa tu RUT" 
        @keyup.enter="verPuntajes" > <b-button @click="verPuntajes">Ver mis Puntajes</b-button>
    </div>

    <div class="text-center mt-4"><p 
      v-for="(e,i) in misPuntajes" 
      :key="i">Ensayo {{ i+1 }}: <span class="h4 text-info">{{ e }}</span></p></div>
    <div 
      v-if="wrong" 
      class="text-center mt-4 h4">El RUT es incorrecto</div>
		
    <p class="small container">Recuerda que la asistencia a ENSAYO es obligatoria y no se puede efectuar en otra fecha a la fijada ni en otro lugar que no sea el preuniversitario. La inasistencia debe ser justificada; si ésta es reiterativa se conversará situación con el apoderado.</p>
  </div>
</template>

<script>
	import {db} from '~/plugins/firebase.js'
	export default {
		data() {
			return {
				misPuntajes: [],
				rut: '',
				rutcompleto: '',
				wrong: null
			}
		},
		mounted() {
			db.collection('puntajes').onSnapshot(s=>{
				let puntajes = {}
				
				s.forEach(d=>{
					let e = d.data()

					for (let rut in e.puntajes) {
						if (!puntajes[rut]) {
							puntajes[rut] = []
						}

						// if (typeof e.puntajes[rut] == 'number') puntajes[rut].push(e.puntajes[rut])						
						puntajes[rut].push(e.puntajes[rut])
					}
				})

				this.puntajes = puntajes

				console.log(this.puntajes)
			})
		},

		methods: {
			limpiarRut(callback) {
				this.rut = this.rutcompleto.replace(/\./gi, '').split('-')[0]

				callback()
			},

			verPuntajes() {

				this.limpiarRut(()=>{
					this.misPuntajes = this.puntajes[this.rut]

					if (!this.misPuntajes) {
						this.misPuntajes = null
						this.wrong = true
					} else {
						this.wrong = false
					}
				})
			}
		}
	}
</script>

<style scoped>
.jbt {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/img/cover.jpg");
    background-color: unset;
  }
</style>