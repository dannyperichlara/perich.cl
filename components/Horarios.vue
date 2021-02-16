<template>
  <div class="horarios">
    <b-jumbotron 
      v-if="showtitle" 
      header="Horarios" 
      class="rounded-0 text-white jbt w-100"/>

    <div v-if="showtitle" class="container">Los horarios que no están tachados, aún tienen cupos disponibles</div>

    <div class="container">
      <table 
        border="1" 
        align="center" 
        cellpadding="1" 
        cellspacing="1" 
        style="width: 100%"
        >
        <tbody>
          <tr>
            <td 
              width="" 
              align="center"><strong>Hora</strong></td>
            <td 
              width="" 
              align="center"><strong>Lun</strong></td>
            <td 
              width="" 
              align="center"><strong>Mar</strong></td>
            <td 
              width="" 
              align="center"><strong>Mié</strong></td>
            <td 
              width="" 
              align="center"><strong>Jue</strong></td>
            <td 
              width="" 
              align="center"><strong>Vie</strong></td>
            <td 
              width="" 
              align="center"><strong>Sab</strong></td>
          </tr>
          <tr>
            <td align="center"><strong class="text-nowrap">10:30<br>11:50</strong></td>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center" :class="{selected: algebra == 'A6'}"><strong 
              :class="{ strike: grupos.A6.full }" 
              @click="select('A6')">A6</strong></td>
          </tr>
          <tr>
            <td align="center"><strong class="text-nowrap">12:00<br>13:20</strong></td>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center" :class="{selected: geometria == 'G6'}"><strong 
              :class="{ strike: grupos.G6.full }" 
              @click="select('G6')">G6</strong></td>
          </tr>
          <tr>
            <td 
              align="center" 
              colspan="7"/>
          </tr>
          <tr>
            <td align="center"><strong class="text-nowrap">15:00<br>16:20</strong></td>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center" :class="{selected: algebra == 'A5'}"><strong 
              :class="{ strike: grupos.A5.full }" 
              @click="select('A5')">A5</strong></td>
            <td align="center"/>
          </tr>
          <tr>
            <td align="center"><strong class="text-nowrap">16:30<br>17:50</strong></td>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center"/>
            <td align="center" :class="{selected: geometria == 'G5'}"><strong 
              :class="{ strike: grupos.G5.full }" 
              @click="select('G5')">G5</strong></td>
            <td align="center"/>
          </tr>
          <tr>
            <td align="center"><strong class="text-nowrap">18:30<br>19:50</strong></td>
            <td align="center" :class="{selected: algebra == 'A1'}"><strong 
              :class="{ strike: grupos.A1.full }" 
              @click="select('A1')">A1</strong></td>
            <td align="center" :class="{selected: geometria == 'G2'}"><strong 
              :class="{ strike: grupos.G2.full }" 
              @click="select('G2')">G2</strong></td>
            <td align="center" :class="{selected: algebra == 'A3'}"><strong 
              :class="{ strike: grupos.A3.full }" 
              @click="select('A3')">A3</strong></td>
            <td align="center" :class="{selected: geometria == 'G4'}"><strong 
              :class="{ strike: grupos.G4.full }" 
              @click="select('G4')">G4</strong></td>
            <td align="center"/>
            <td align="center"/>
          </tr>
          <tr>
            <td align="center"><strong class="text-nowrap">20:00<br>21:20</strong></td>
            <td align="center" />
            <td align="center" />
            <td align="center" :class="{selected: geometria == 'G3'}"><strong 
              :class="{ strike: grupos.G3.full }" 
              @click="select('G3')">G3</strong></td>
            <td align="center" :class="{selected: algebra == 'A4'}"><strong 
              :class="{ strike: grupos.A4.full }" 
              @click="select('A4')">A4</strong></td>
            <td align="center"/>
            <td align="center"/>
          </tr>
        </tbody>
      </table>      
      <p class="text-left small">Los ensayos durante el año se realizan en los mismos horarios de inicio de las clases y tienen una duración de 2 horas 25 minutos. El alumno elige el día que asistirá a rendirlo.</p>
    </div>

  </div>
</template>

<script>
  import { db } from '~/plugins/firebase'

  export default {
    name: 'Horarios',
    props: {
      showtitle: {
        type: Boolean,
        default: false
      },
      algebra: {
        type: String,
        default: ''
      },
      geometria: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        grupos: {
          A1: {},
          A2: {},
          A3: {},
          A4: {},
          A5: {},
          A6: {},
          G1: {},
          G2: {},
          G3: {},
          G4: {},
          G5: {},
          G6: {},
        }
      }
    },

    mounted () {
      let response = db.collection('grupos').get()
      let grupos = {}
      let $this = this

      response.then(s=>{
        s.forEach(e=>{
          grupos[e.id] = e.data()
        })
        
        $this.grupos = grupos
      })

    },

    methods: {
      select(e) {
        console.log('Select', e)
        this.$emit('select', e)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin-bottom: 2rem;
}

.jbt {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/img/cover.jpg");
    background-color: unset;
  }

  .strike {
    color: #CCC;
    text-decoration: line-through;
  }

  .selected {
    background-color: #9FC;
  }

  td {
    /*cursor: pointer;*/
  }
</style>
