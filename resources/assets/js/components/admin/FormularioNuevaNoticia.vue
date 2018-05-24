<template>

    <form style="margin-left:5%;">
      <div class="form-group">
        <label>Título noticia:</label>
        <input type="text" id="titulo" class="form-control" v-model="newNoticia.titulo">
      </div>
      <div class="form-group">
        <label>Contenido corto</label>
        <input type="textarea" class="form-control" id="descripcion_corta" v-model="newNoticia.descripcion_corta">
      </div>

      <div>
        <label for="src_img">link a la imagen de la noticia :</label>
        <input type="text" class="form-control" id="src_img" v-model="newNoticia.src_img">
      </div>
      <br>
      <button @click="addNoticia" class="btn btn-primary">Agregar noticia</button>
    </form>

</template>

<script>
import {
  mapActions
} from 'vuex';

export default {
  data: function() {

    return {

      newNoticia: {
        titulo: '',
        descripcion_corta: '',
        src_img: ''
      }

    }

  },

  methods: {

    addNoticia: function(event) {

      if (event) event.preventDefault()

      this.$store.dispatch('addNoticia', this.newNoticia);
      this.$snotify.success(`¡La noticia fue agregada con éxito!`);
    }

  },

  mounted() {

  }

}
</script>

<style>
.formulario {
  margin-top: 20%;
}
</style>
