<template>
<div class="form-group">

    <input class="form-control mr-sm-2" type="text" v-model="newPost.name" />
    <button class="btn btn-outline-success my-2 my-sm-0" @click="addPost">Agregar</button>

</div>
</template>

<script>
import {
  mapActions
} from 'vuex';

export default {

  data: function() {

    return {

      newPost: {
        name: ''
      }

    }

  },

  methods: {

    addPost : function(){
      this.$store.dispatch('addPost', this.newPost);
      this.$snotify.success(`¡El post fue agregado con éxito!`);
    }

  },

  mounted() {

  }
}
</script>
