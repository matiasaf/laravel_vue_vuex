<template lang="html">

  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="https://www.entrerios.gov.ar/portal/imagenes/image1.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://www.entrerios.gov.ar/portal/imagenes/image2.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://www.entrerios.gov.ar/portal/imagenes/image3.jpg" alt="Third slide">
      </div>
    </div>
  </div>

</template>

<script>
export default {

  mounted(){

    $('.carousel').carousel();

  }
}
</script>

<style lang="css">

#carouselExampleSlidesOnly {

  margin: 3%;

  -webkit-box-shadow: -1px 6px 18px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 6px 18px -7px rgba(0,0,0,0.75);
  box-shadow: -1px 6px 18px -7px rgba(0,0,0,0.75);

}

</style>
