<template lang="html">

  <div class="col-sm-4">

      <div class="card estilos">
        <img class="card-img-top" :src="noticia.src_img" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title"><b>{{noticia.titulo}}</b></h5>
          <p class="card-text">
            {{noticia.descripcion_corta}}
          </p>
          <a href="#" class="btn btn-success">Leer más</a>
        </div>
      </div>

    </div>
</div>
</template>

<script>
export default {

  props:['noticia']

}
</script>

<style lang="css">
.estilos{
  margin: 5%;
  height: 600px;
}
</style>
