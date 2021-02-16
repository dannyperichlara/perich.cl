<template>
  <div class="mb-5">
    <div v-if="logged">
      <b-jumbotron class="jbt text-white rounded-0">
        <div class="display-4">Panel de Control</div>
      </b-jumbotron>
      <div class="container">
        <p class="lead">Seleccionar archivo CSV de puntajes<br>
        <input type="file"></p>
        <b-button @click="upload()">Subir Puntajes</b-button>
        <hr>
        <div 
          v-for="(e,i) in puntajes" 
          :key="i" 
          class="w-100">
          Rut: {{ i }}-{{ dgv(i) }} | Puntajes: <span 
            v-for="(f,j) in e" 
            :key="j">{{ f == 'AUSENTE'? '----' : f }} </span>
        </div>
      </div>
    </div>
    <div 
      v-if="!logged" 
      class="container mt-5 mb-5">
      <p class="text-center">Password: <input 
        v-model="password" 
        type="password" 
        @keyup.enter="log"> <b-button @click="log">Entrar</b-button></p>
    </div>
  </div>
</template>

<script>
	import {db} from '~/plugins/firebase.js'
	import md5 from 'md5'

	export default {
		data() {
			return {
				puntajes: {},
				password: '',
				logged: false
			}
		},

		mounted() {
			this.reader = new FileReader()

			db.collection('puntajes').orderBy('timestamp').onSnapshot(s=>{
				let puntajes = {}
				
				s.forEach(d=>{
					let e = d.data()

					for (let rut in e.puntajes) {
						if (!puntajes[rut]) {
							puntajes[rut] = []
						}

						if (true || typeof e.puntajes[rut] === 'number') puntajes[rut].push(e.puntajes[rut])						
					}
				})

				this.puntajes = puntajes
			})


			var textFile = /text.*/;

			if (true) {
				this.reader.onload = function (event) {
					let data = event.target.result.split('\r')
					data = data.map((e)=>{
						if (e != '\n') {
							let nota = e.split(';')[1].replace(',','.')

							nota = parseFloat(nota)


							if (nota == 0) nota = 'AUSENTE'
							
							return {rut: e.split(';')[0].trim(), puntaje: nota}						
						}
					})

					console.log(data)

					let dataObject = {}

					data.forEach(e=>{
						if (e) dataObject[e.rut.split('-')[0]] = e.puntaje
					})

					db.collection('puntajes').add({
						timestamp: (new Date).getTime(),
						puntajes: dataObject
					})
				} 
			} else {
				preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
			}
		},

		methods: {
			upload() {
				let file = document.querySelector('input[type=file]').files[0];
				this.reader.readAsText(file);
			},

			dgv(T) {  
				var M=0,S=1;
				for(;T;T=Math.floor(T/10))
				S=(S+T%10*(9-M++%6))%11;
				return S?S-1:'k';
			},

			log() {
				if (md5(this.password) == 'f4e16b98d8239e430b47dec4a0ebfbac') this.logged = true
			}
		}
	}
</script>

<style>
.jbt {
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/img/cover.jpg");
	background-color: unset;
}
</style>