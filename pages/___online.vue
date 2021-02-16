<template>
  <div class="pasos">
    <b-jumbotron 
      header="Matrícula Online" 
      class="rounded-0 text-white jbt">
      <p class="lead">En menos de 10 minutos estarás matriculado.</p>
    </b-jumbotron>


    <div class="container mb-5">
      <div 
        v-if="show" @submit=""
        >
        <b-card-group>
          <b-card class="border-0">
            <b-form-group 
              label="Rut del Alumno:" 
              label-for="exampleInput2">
              <b-form-input 
                id="exampleInput2" 
                v-model="data.alumno.rut" 
                type="text" 
                required 
                placeholder="Rut del Alumno"/>
            </b-form-group>
            <b-form-group 
              label="Nombre del Alumno:" 
              label-for="exampleInput2">
              <b-form-input 
                id="exampleInput2" 
                v-model="data.alumno.nombre" 
                type="text" 
                required 
                placeholder="Nombre del Alumno"/>
            </b-form-group>
            <b-form-group 
              label="Correo Electrónico:" 
              label-for="exampleInput1" 
              description="No compartiremos tu email con nadie.">
              <b-form-input 
                id="exampleInput1" 
                v-model="data.alumno.email" 
                type="email" 
                required 
                placeholder="Email del Alumno"/>
            </b-form-group>
            <b-form-group 
              label="Teléfono celular del alumno:" 
              label-for="exampleInput2">
              <b-form-input 
                id="exampleInput2" 
                v-model="data.alumno.celular" 
                type="text" 
                required 
                placeholder="Número de celular"/>
            </b-form-group>
            <hr>
            <b-form-group>
              <p class="small">Haz click en 'Seleccionar Horarios' y podrás elegir un grupo para Álgebra y otro para Geometría</p>
              <button 
                v-b-modal.modalHorarios 
                class="mt-2 btn btn-info">SELECCIONAR HORARIOS</button>
              <p class="mt-4">Álgebra: {{ data.alumno.algebra }}</p>
              <p>Geometría: {{ data.alumno.geometria }}</p>
              <!-- <b-form-select 
                id="exampleInput3" 
                :options="algebra" 
                v-model="data.alumno.algebra" 
                class="float-left w-50" 
                required/>
              <b-form-select 
                id="exampleInput3" 
                :options="geometria" 
                v-model="data.alumno.geometria" 
                class="float-right w-50" 
                required/> -->
            </b-form-group>
          </b-card>
          <b-card class="border-0">
            <b-form-group 
              label="Colegio:" 
              label-for="exampleInput1">
              <b-form-input 
                id="exampleInput1" 
                v-model="data.alumno.colegio" 
                type="text" 
                required 
                placeholder="Nombre del Colegio"/>
            </b-form-group>
            <b-form-group 
              label="Curso:" 
              label-for="exampleInput3">
              <b-form-select 
                id="exampleInput3" 
                :options="cursos" 
                v-model="data.alumno.curso" 
                required/>
            </b-form-group>
            <b-form-group 
              label="Nombre Apoderado:" 
              label-for="exampleInput3">
              <b-form-input 
                id="exampleInput1" 
                v-model="data.alumno.nombreapoderado" 
                type="text" 
                required 
                placeholder="Nombre apoderado"/>
            </b-form-group>
            <b-form-group 
              label="Email Apoderado:" 
              label-for="exampleInput3">
              <b-form-input 
                id="exampleInput1" 
                v-model="data.alumno.emailapoderado" 
                type="email" 
                required 
                placeholder="Email apoderado" 
                description="A este email se enviará la boleta de honorarios"/>
            </b-form-group>
            <b-form-group 
              label="En caso de emergencia llamar al número:" 
              label-for="exampleInput2">
              <b-form-input 
                id="exampleInput2" 
                v-model="data.alumno.emergencia" 
                type="text" 
                required 
                placeholder="Número de emergencia"/>
            </b-form-group>

          </b-card>
        </b-card-group>

        <h4>Precio: $600.000</h4>

        <p>Al hacer click en el botón de pago, acepta los <span 
          v-b-modal.modalterminos 
          class="text-info cursor">términos y condiciones</span>. Además, podrá optar entre el pago con tarjetas de débito y crédito, o transferencia bancaria con un descuento de $50.000</p>
        <b-button 
          type="submit" 
          variant="primary" 
          v-on:click="submit"
          class="mt-2">Inscribir y proceder al pago</b-button>
        <div><img 
          class="webpaylogo" 
          src="/img/webpay-logo.png" 
          width="50%" ></div>
      </div>


      <b-modal 
        id="paymentmethod" 
        title="Transfiere o paga en línea" 
        ok-only 
        ok-title="Cerrar">
        <h5>OPCIÓN 1: PAGO ONLINE</h5>
        <p class="lead">Paga con tarjetas haciendo click en el botón PAGAR ONLINE</p>
        <button 
          class="btn btn-success" 
          @click="payonline">PAGAR ONLINE</button>
        <hr>
        <h5 class="mt-4">OPCIÓN 2: TRANSFERENCIA</h5>
        <p class="lead">El pago con transferencia tiene un descuento de $50.000. Transfiere con los siguientes datos y envía el comprobante de pago a <a href="mailto:dannyperich@gmail.com">dannyperich@gmail.com</a>.</p>
        <table>
          <tbody>
            <tr><td width="50%"><strong>MONTO</strong></td><td><strike class="text-muted">$600.000</strike> <strong>$550.000</strong></td></tr>
            <tr><td width="50%">Nombre</td><td>Danny Perich Campana</td></tr>
            <tr><td width="50%">RUT</td><td>6.836.712-3</td></tr>
            <tr><td width="50%">Email</td><td>dannyperich@gmail.com</td></tr>
            <tr><td width="50%">Cuenta</td><td>2910139710</td></tr>
            <tr><td width="50%">Banco</td><td>Banco de Chile</td></tr>
            <tr><td width="50%">Tipo Cuenta</td><td>Cuenta Corriente</td></tr>
          </tbody>
        </table>
      </b-modal>

      <b-modal 
        id="modalterminos" 
        ok-only 
        ok-title="Acepto" 
        title="Términos y condiciones del contrato">
        <div class="container">
          <ul>
            <li>Lea con atención este contrato y el formulario de costos.</li>
            <!-- <li>Por este servicio educativo, usted deberá documentar CON CHEQUES la totalidad del arancel de $600.000, según facilidades propuestas en el formulario de costos. Al contado el arancel es de $550.000.</li> -->
            <li>El contratante, puede renunciar al curso de PSU Matemática como máximo hasta el 13 de abril de 2018. En caso de renuncia, se devolverá el arancel descontado el equivalente a las clases realizadas por el profesor hasta esa fecha y los costos de comisión asociados al pago en línea (5% del total). Después de esa fecha se confirma que el alumno(a) realizará el curso en su totalidad y, si por algún motivo deja de asistir, el arancel cancelado no será devuelto, por considerarse que a esa fecha la vacante ya no podrá ocuparse.</li>
            <li>Al inscribir  a su pupilo en este curso preuniversitario, usted declara haberse informado exhaustivamente del servicio que contrata y las condiciones estipuladas en este contrato y ficha de matrícula, respecto de la información solicitada, los plazos de los procesos  y los costos asociados.</li>
            <li>Toda información sobre rendimiento, asistencia y otros, puede ser obtenida desde la página web del preuniversitario www.perich.cl</li>
            <li>Al momento de pagar, se considerará que todas las condiciones de este contrato han sido aceptadas por el contratante. Una copia de este mismo contrato será enviada el email del apoderado.</li>
          </ul>
        </div>
      </b-modal>
    </div>

    <b-modal 
      id="modalHorarios" 
      title="Horarios" 
      ok-only 
      ok-title="Aceptar">
      <Horarios 
        :showtitle=false
        @select="select"
        :geometria="data.alumno.geometria"
        :algebra="data.alumno.algebra" />
    </b-modal>

  </div>
</template>

<script>

  import { db } from '~/plugins/firebase'
  //import axios from 'axios';
  import Horarios from '~/components/Horarios'


  export default {
    name: 'Pasos',
    components: { Horarios },

    async asyncData() {
      let response = db.collection('grupos').get()
      let algebra = []
      let geometria = []

      await response.then(s=>{
        s.forEach(e=>{
          if (e.id.indexOf('A') != -1 && !e.data().full) algebra.push(e.id)
          if (e.id.indexOf('G') != -1 && !e.data().full) geometria.push(e.id)
        })
      })

      return { algebra, geometria }
    },

    data () {
      return {
        show: true,
        data: {
          alumno: {
            rut: '',
            email: '',
            nombre: '',
            colegio: '',
            curso: '',
            celular: '',
            emergencia: '',
            algebra: '',
            geometria: '',
            emailapoderado: '',
            nombreapoderado: '',
            timestamp: (new Date).getTime(),
            fechaInscripcion: (new Date).toJSON()
          }
        },


        cursos: ['Tercero Medio', 'Cuarto Medio', 'Egresado', 'Otro']
      }
    },

    mounted () {
      console.log("GRUPOS")
      console.log(this.grupos)
    },

    methods: {
      select(e) {
        if (e.slice(0,1) == "A") {
          this.data.alumno.algebra = e
        } else {
          this.data.alumno.geometria = e
        }
      },

      submit (e) {
        this.inscribir(()=>{
          this.payonline()
        })
        //this.$root.$emit('bv::show::modal','paymentmethod')
      },

      inscribir (callback) {
        let a = this.data.alumno

        if (this.data.alumno.email == '' || this.data.alumno.nombre == '' || this.data.alumno.algebra == '' || this.data.alumno.geometria == '') {
          //alert('Faltan Datos')
        } else {
          db.collection('alumnos2020').doc(this.data.alumno.email).set(this.data.alumno)
          callback()
        }


        /*let body = JSON.stringify(`<h1>MATRÍCULA ONLINE</h1><ul><li>Nombre: ${a.nombre}</li><li>Rut: ${a.rut}</li><li>Email: ${a.email}</li><li>Colegio: ${a.colegio}</li><li>Curso: ${a.curso}</li><li>Celular: ${a.celular}</li><li>Apoderado: ${a.nombreapoderado} </li><li>Email Apoderado: ${a.emailapoderado} </li><li>Fono Emergencia: ${a.emergencia} </li><li>Grupos: ${a.algebra} - ${a.geometria}</li><li>Fecha de Inscripción: ${(new Date())}</li></ul>`)

        let params = {
          to: 'dannyperich@gmail.com',
          subject: 'Nuevo alumno matriculado',
          from: `${a.nombre} <${a.email}>`,
          body
        }

        let $this = this
        
        this.enviarmail(params, function () {
          params = {
            to: a.email,
            subject: 'Te doy la bienvenida al preuniversitario de Matemática',
            from: 'Profesor Danny Perich C. <dannyperich@gmail.com>',
            body: body + '<hr><p>Revisa tus datos de inscripción. En caso de error, llama al +56 9 6120 9403 para corregirlos. Si tienes dudas, ingresa al sitio <a href="http://www.perich.cl">www.perich.cl</a>.</p>'
          }

          $this.enviarmail(params, function () {

          })
        })*/

      },

      payonline () {
        window.location = "https://www.flow.cl/btn.php?token=0wkpmya"
      },

      enviarmail (params, callback) {
        /*console.log('Envía email')

        axios.get('http://45.58.62.235:3001/mail', {
          params
        })
        .then(function (response) {
          console.log(response);

          callback()
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {

        });*/
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin-bottom: 0rem;
  list-style: square ;
}
.jbt {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/img/cover.jpg");
  background-color: unset;
}

.cursor {
  cursor: pointer;
}

.webpaylogo {
  max-width: 200px;
}
</style>
