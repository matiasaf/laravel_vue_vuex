<template>

    <div class="form-group">

      <label>Post :</label>
      <input type="text" class="form-control"  v-model="newPost.name"/>
      <br>
      <button @click="addPost" class="btn btn-primary">Agregar</button>
      <button @click="addPost" class="btn btn-primary">Agregar</button>

    </div>

</template>

<script>

import axios from 'axios';

export default {

  data: function() {

    return {

      newPost : { name : ''}

    }

  },

  methods: {

    addPost: function(e){
      axios.post('/api/post', {name : this.newPost.name}).then(res => console.log(res.data));
    }

  },
  mounted() {

    console.log('Add post mounted.')

  }
}
</script>
