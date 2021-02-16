<template>
  <div class="curriculo">
    <b-jumbotron 
      header="Currículo" 
      class="rounded-0 text-white jbt">
      <div class="lead">Danny Perich Campana</div>
      <div class="lead">Profesor de Estado en Matemática</div>
      <div class="lead">Universidad de Chile</div>      
    </b-jumbotron>

    <div class="container mb-5">
      <div class="lead mb-3">PROYECTOS, ACTIVIDADES, LOGROS Y PUBLICACIONES EN ÁREA MATEMÁTICA</div>
      <ul>
        <li>Publicación Facsímil de P.A.A. Matemática, Impresos Horizonte, 1988.</li>
        <li>Coautor del libro de trigonometría, “Cómo aprender trigonometría y no morir en el intento” con alumnos de 3º Medio Electivo. Liceo Nobelius. Punta Arenas.</li>
        <li>Primer Lugar Regional en el Concurso Nacional “Guías de Aprendizaje para una escuela deseable”, con la guía “ Un mundo Q de fracciones para sumar, compartir e imaginar”. Ministerio de Educación y Colegio de Profesores de Chile.</li>
        <li>Propuesto Premio a la Excelencia Académica 1999 Y 2001. Ministerio de Educación de Chile.</li>
        <li><strong>Creador y webmaster del sitio Web “Sector Matemática”.</strong></li>
        <li>Premio en reconocimiento a la Capacidad de Innovación Educativa. Unidad Ejecutora Proyecto Enlaces. Universidad de Magallanes y Secretaría Ministerial de Educación XII Región.</li>
        <li>Autoría y Aplicación de texto de apoyo para la Prueba De Aptitud Académica. “1440 Ejercicios de PAA Matemática, con énfasis en la resolución de problemas verbales y geometría plana”. Liceo Nobelius y Pre-Universitario Alborada. Punta Arenas.</li>
        <li>Creación y Publicación en el Diario “La Prensa Austral” de Punta Arenas de facsímiles de preparación a la P.A.A. matemática.</li>
        <li>Creador y ejecutor de la competencia internacional matemática a través de Internet “El Gran Desafío”, con la participación de más de 250 alumnos-as de 22 países.</li>
        <li>Creador de Pre - Universitario Virtual  On Line GRATUITO de Matemática a través de Internet.</li>
        <li>Premio Internacional “Editorial OX” por diseño y contenido de pagina Web Sector Matemática San José. Costa Rica.</li>
        <li><strong>Premio Nacional “Euclides” a la Docencia Escolar en Matemáticas 2004, como Mejor Profesor de Matématica de Chile, otorgado por la Pontificia Universidad Católica de Chile.</strong></li>
        <li>Primer Lugar Nacional en el Concurso de Guías de Aprendizaje “Aprender con Educared” con la guía “Función cuadrática: La parábola”. Fundación Telefónica de Chile.</li>
        <li>Publicación en formato PDF y de descarga gratuita de los libros “Ejercicios Simce Segundo  Año Medio”, “Ejercicios Simce Cuarto Año Básico”, “Ejercicios Simce Octavo Año Básico”en web de Editorial Impacto</li>
        <li>Creación y publicación en formato flash de “Chistes Geométricos” en web Sector Matemática.</li>
        <li>Creación y puesta en escena de la obra de teatro “La Fiesta de los Primos”, junto a los alumnos de tercer año medio Colegio Alemán de Punta Arenas. Publicada en YouTube <a href="http://www.youtube.com/watch?v=RNv3Cgk0IUA">http://www.youtube.com/watch?v=RNv3Cgk0IUA</a></li>
        <li>Publicación libro “Las Aventuras Matemáticas de Daniel” Editorial Impacto, Impreso en Docuprint S.A., Buenos Aires Argentina.</li>
        <li>Publicación de 11 artículos sobre los juegos de azar en el Diario “Las Últimas Noticias”, Santiago.</li>
        <li>Publicación libro “1200 Ejercicios de Matemática Multiple Choice” Editorial Logikamente, Buenos Aires, Argentina.</li>
        <li>Publicación de más de 1.000 videos de matemática en web Sector Matemática <a 
          href="http://www.sectormatematica.cl/videos.htm" 
          target="_blank">http://www.sectormatematica.cl/videos.htm</a></li>
        <li>Publicación de 90 videos de matemática para preparación a la P.S.U., web Puntaje Nacional, <a href="http://www.puntajenacional.cl">www.puntajenacional.cl</a></li>
      </ul>
      <!-- <p class="text-center"><img src="/img/yoabril2011.jpg" class="mb-5 w-100" /></p> -->
    </div>


  </div>
</template>

<script>
  export default {
    name: 'Curriculo',
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
