<template>
  <div class="footer lead p-5">
    <p>Preu Matemática Danny Perich C<br>Punta Arenas, Chile<br><a href="tel:+569961209403">+56 9 6120 9403</a></p>
    <p class="h2">
      <a href="http://www.facebook.com/dannyperich">
        <i class="fab socialbuttons fa-facebook"/>
      </a>
      <a href="http://twitter.com/dannyperich">
        <i class="fab socialbuttons fa-twitter"/>
      </a>
      <a href="http://www.youtube.com/user/dannyperich">
        <i class="fab socialbuttons fa-youtube"/>
      </a>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
    data () {
      return {}
    },

    mounted () {
      // window.scrollTo(0,0)
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer {
  background-color: #DDD;
  background-image: linear-gradient(180deg, rgba(255,255,255, 0.8) 0%, rgba(255,255,255, 0.6) 100%), url("/img/cover.jpg");
  background-position: center bottom;
  
  
}

.socialbuttons {
    font-size: 2rem;
    margin-right: 2rem;
  }  
</style>
