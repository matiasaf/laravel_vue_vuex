<template>

  <ul class="list-group">
    <li class="list-group-item" v-for="post in posts">{{post.name}}</li>
  </ul>

</template>

<script>


import axios from 'axios';

export default {

  data: function(){

  return {
    posts: []
  }

},

methods: {

    getPosts: function() {
      axios.get('/api/posts').then(res => this.$set(this, 'posts', res.data));
    }

},
mounted() {

  this.getPosts();

}
}
</script>
