<template>

  <div style="background-color:white">
    <div class="icono">

      <router-link :to="{ name: 'noticiasabm' }"><i class="fas fa-5x fa-plus-square">
      </i>
      <span class="font_noticia">Noticias</span>

    </router-link>

    </div>

  </div>

</template>

<script>

export default {

  components: {

  }

}
</script>

<style>

.icono{
  margin:10%;
}
.font_noticia{
  font-size: 3vw;
}
</style>
