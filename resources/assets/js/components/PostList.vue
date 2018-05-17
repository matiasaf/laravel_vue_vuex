<template>
<div>
  <h1>Listado de posts agregados</h1>

  <div v-if="posts.length != 0">
    <ul class="list-group">
      <li class="list-group-item" v-for="post in posts">{{post.name}}</li>
    </ul>
  </div>

  <div v-else>
    <span>No posee posteos actualmente.</span>
  </div>
</div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {

  computed: mapGetters({
    posts: 'allPosts'
  }),

  created() {
    this.$store.dispatch('getAllPosts')
  }

}
</script>
