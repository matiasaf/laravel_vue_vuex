<template>
<div class="col-sm-4">

  <div class="card animated flipInX sombra">
    <div class="card-body">
      <h5 class="card-title">{{organismo.nombre}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{organismo.organismo_padre}}</h6>
      <p class="card-text">Autoridad: {{organismo.director}}</p>
      <a :href="organismo.url" class="card-link">Ir al sitio</a>
    </div>
  </div>

</div>

</template>

<script>
export default {
  props: ['organismo']
}
</script>

<style>
.sombra{

  -webkit-box-shadow: -1px 6px 18px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 6px 18px -7px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 6px 18px -7px rgba(0, 0, 0, 0.75);

}
</style>
