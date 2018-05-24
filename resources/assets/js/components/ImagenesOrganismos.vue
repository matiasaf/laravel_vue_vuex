<template>
  <div class="col-sm-4">
    <img class="imagenes_organismos" :src="imagenOrganismo.src_img" alt="">
  </div>
</template>

<script>
export default {

  props:['imagenOrganismo']

}
</script>

<style>
.imagenes_organismos {

  margin: 9%;
  width: 80%;

  -webkit-box-shadow: -1px 6px 18px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 6px 18px -7px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 6px 18px -7px rgba(0, 0, 0, 0.75);

}
</style>
