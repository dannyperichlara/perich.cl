<template>
  <div class="pasos">
    <b-jumbotron 
      header="Inscripción Presencial" 
      class="rounded-0 text-white jbt">
      <p class="lead">Inscríbete presencialmente. Inicio de clases: 15 de Marzo.<br>Sigue los pasos a continuación para realizar este proceso.</p>
    </b-jumbotron>

    <div class="container mb-5">

      <h2>¿Qué necesito para inscribirme presencialmente?</h2>

      <ol>
        <li>Llenar el Fórmulario de Inscripción</li>
        <li>Llenar el o los cheques con los datos requeridos</li>
        <li>Coordinar una hora para entregar los documentos<br><span class="small">(baja para más detalles)</span></li>
      </ol>

      <h2>¿Es posible hacer este trámite sin cheques?</h2>
      <p>No. Pero puedes hacer la inscripción en línea y pagar con tarjeta de crédito. Para eso dirígete a <b-link href="/online">www.perich.cl/online</b-link>.</p>

      <h2>Paso 1. Llena el Formulario de Inscripción</h2>
      <p>Descarga el formulario de inscripción desde un computador. Imprímelo y llénalo con tus datos</p>
      <b-button target="_blank" size="small" variant="info" class="pl-4 pr-4" href="/pdf/ficha_matricula.pdf">
        <i class="fas fa-signature" style="font-size: 20px"/> Descargar Formulario de Inscripción
      </b-button>
      <!-- <p class="mt-2">No olvides elegir los grupos a los que  quieres pertenecer. Revisa los horarios que aún tienen cupos aquí:</p>
      <b-button target="_blank" size="small" variant="secondary" class="pl-4 pr-4" href="/horarios">
        <i class="fas fa-calendar" style="font-size: 20px"/> Ver horarios
      </b-button> -->

      <h2 class="mt-4">Paso 2. Llena los cheques</h2>
      <p>Llena los cheques antes de coordinar la cita con el profesor. Para eso, ten en cuenta las siguientes consideraciones:</p>

      <ol>
        <li>El o los cheques se emiten a nombre de <b>"Danny Perich"</b></li>
        <li>El o los <b>cheques deben ser cruzados</b> (y no al portador)</li>
        <li>El pago del arancel ($600.000) puedes hacerlo <b>hasta 10 cheques precio contado</b>.</li>
        <li>Las fechas de los cheques deben ser continuas, a partir de marzo (ej. marzo/abril/mayo/etcétera)</li>
        <li>Las fechas de cobro son los días <b>5, 10, 15, 20, 25 o 30 de cada mes</b>. Asegúrate de colocar las fechas correctas.</li>
      </ol>

      <h2>Paso 3. Entrega los documentos</h2>
      <p>Los formularios deben ser <b>llenados de antemano</b> y entregados en un sobre o carpeta.</p>
      <p><b>El horario para la entrega de los documentos es de lunes a viernes entre las 15:00 y las 18:30 horas. Se recomienda coordinar el horario de entrega llamando al teléfono <a href="tel:+56992948450">+56992948450</a></b></p>
      <!-- <p>Durante marzo, los horarios de matrícula son Lunes, Miércoles y Viernes entre las 18:30 y 19:30. Recuerda que debes llevar el formulario y los cheques ya llenados.</p> -->
      <!--<p>Llama al número <a href="tel:+5696120 9403">+56 9 6120 9403</a> y coordina una hora para llevar la documentación. Recuerda que debes llevar el formulario y los cheques ya llenados.</p>-->

      <!--<b-card class="container">
        <h4 class="text-left">Consideraciones importantes:</h4>
        <ol>
          <li>La fecha de pago la fija cada apoderado y es su decisión comenzar a pagar en diciembre de 2019, enero, febrero o marzo de 2020.</li>
          <li><span class="text-info">No se hacen reservas de matrícula.</span></li>
        </ol>
      </b-card>-->
      <hr>
      <!-- <p class="lead">Si llevas los formularios y cheques llenados de antemano, el trámite de matrícula durará apenas unos minutos.</p> -->

      <p class="">La dirección para la entrega de los documentos es <strong>Julio Roca 1012 C</strong> (tercer piso a mano izquierda).</p>
      <div class="text-center"><b-button 
        v-b-modal.modalMapa 
        variant="info">Ver mapa</b-button></div>
    </div>

    <Faq class="container" />


    <b-modal 
      id="modalHorarios" 
      title="Horarios" 
      ok-only 
      ok-title="Aceptar">
      <Horarios />
    </b-modal>

    <b-modal 
      id="modalMapa" 
      title="Mapa" 
      size="xl"
      ok-only>
      <Mapa />
    </b-modal>
  </div>
</template>

<script>
import Horarios from '~/components/Horarios'
import Mapa from '~/components/Mapa'
import Faq from '~/pages/faq'

export default {
  name: 'Pasos',

  components: { Horarios, Mapa, Faq },
  data () {
    return {}
  },

  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jbt {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/img/cover.jpg");
    background-color: unset;
  }

</style>
