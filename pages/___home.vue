<template>
  <div class="hello">
    <!-- <b-jumbotron class="mb-1 mt-1 text-center rounded-0 text-white" bg-variant="info">
			<h2>Matrículas:<br>A partir del 2 de diciembre</h2>
			<hr>
			<p class="lead">Descarga la nueva programación del 4 de noviembre al 30 de noviembre:</p>
			<p class="lead"><a href="/pdf/programacionfinal2019.pdf" ><img src="/img/pdf.png" width="60" /></a></p>
		</b-jumbotron> -->

    <b-jumbotron 
      class="s1 mb-0 border-0 rounded-0" 
      bg-variant="info" 
      text-variant="white" 
      border-variant="light">
      <template slot="header">
        Preu 2020 <span class="h2">Matemática</span>
      </template>
      <template slot="lead">
        <i>del profesor Danny Perich C.</i><br>40 años de experiencia preparando para las pruebas de selección universitaria PAA, PCE y PSU con gran éxito.
      </template>
      <!-- <p class="small text-white">
				MATRÍCULAS 2019: Lunes, miércoles y viernes de 18:00 a 19:00 horas<br>INICIO DE CLASES 2019: 18 de MARZO
			</p>
			<p class="lead">
				Inscríbete para cursar el preuniversitario 2019
			</p>
			<b-button to="presencial" variant="info" class="mb-2">Inscribirme presencialmente</b-button>
			<b-button to="online" variant="success" class="mb-2">Inscribirme y pagar online</b-button>
			<hr> -->
    </b-jumbotron>


    <Caracteristicas />


    <b-jumbotron class="s2 mt-0 mb-0 rounded-0">
      <div class="h2 text-info">¿Tienes dudas?</div>
      <div class="lead">
        <p>Si tienes dudas, revisa las <a 
          href="/faq" 
          class="font-weight-bold text-info">preguntas frecuentes</a> que ya respondimos para ti. Si aún te quedan dudas, llámanos al</p>
        <p class="lead font-weight-bold"><i class="fa fa-phone"/> <a 
          class="text-info" 
          href="tel:+56961209403">+56 9 61209403</a></p>
      </div>
      <hr class="my-4">
      <p>
        ¿Ya no tienes dudas? Entonces inscríbete para cursar el preuniversitario 2019. Puedes hacerlo de forma presencial o bien llenar un formulario y pagar en línea.
      </p>
      <b-button 
        to="presencial" 
        variant="info" 
        class="mb-2">Inscribirme presencialmente</b-button>
      <b-button 
        to="online" 
        variant="success" 
        class="mb-2">Inscribirme y pagar online</b-button>
    </b-jumbotron>

    <Mapa />

		

  </div>
</template>

<script>

	import Caracteristicas from '@/components/Caracteristicas'
	import Mapa from '@/components/Mapa'

	export default {
		name: 'HelloWorld',
		components: { Caracteristicas, Mapa },
		data () {
			return {

			}
		},

		mounted () {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.s1 {
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/img/cover.jpg");
	background-color: unset;
}

</style>
