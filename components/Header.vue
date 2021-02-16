<template>
  <div class="header">
    <b-navbar 
      toggleable="md" 
      type="dark" 
      variant="info">
      <b-navbar-toggle target="nav_collapse"/>
      <b-navbar-brand 
        href="/" 
        class="">PREU Matemática</b-navbar-brand>
      <b-collapse 
        id="nav_collapse" 
        is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="/online">Inscríbete Online</b-nav-item> -->
          <!-- <b-nav-item href="/presencial">Inscríbete Presencialmente</b-nav-item> -->
          <!--<b-nav-item href="/horarios">Horarios</b-nav-item>-->
          <!--<b-nav-item href="/faq">Preguntas Frecuentes</b-nav-item>-->
          <b-nav-item href="/destacados">Resultados Anteriores</b-nav-item>
          <b-nav-item href="/curriculo">Quién soy</b-nav-item>
          <b-nav-item 
            href="/puntajes" 
            class="">🔑 Revisar Puntajes Ensayos</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="text-right">
            <a href="http://www.facebook.com/dannyperich">
              <i class="fab socialbuttons fa-facebook text-white"/>
            </a>
            <a href="http://twitter.com/dannyperich">
              <i class="fab socialbuttons fa-twitter text-white"/>
            </a>
            <a href="http://www.youtube.com/user/dannyperich">
              <i class="fab socialbuttons fa-youtube text-white"/>
            </a>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data () {
      return {}
    },

    mounted () {
      window.scrollTo(0,0)
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.socialbuttons {
  font-size: 2rem;
  margin-left: 2rem;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255,255,255,0.9);
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(255,255,255,1);
}
</style>
