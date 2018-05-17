<template>
<div class="form-group">
  <h1>Agregar nuevo post</h1>
  <label>Post :</label>
  <input type="text" class="form-control" v-model="newPost.name" />
  <br>
  <button @click="addPost(newPost)" class="btn btn-primary">Agregar</button>

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

  methods: mapActions(['addPost']),

  mounted() {

  }
}
</script>
