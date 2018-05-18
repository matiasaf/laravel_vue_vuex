<template>
<div>
  <h1>Listado de posts agregados</h1>

  <div v-if="posts.length != 0">
    <ul class="list-group" v-if="!onEditing">
      <li class="list-group-item" v-for="post in posts">{{post.name}}
        <button class="btn btn-outline-danger" @click="deletePost(post.id)">Eliminar</button>
        <button class="btn btn-outline-warning" @click="changeEdit(post)">Editar</button>
      </li>
    </ul>
    <ul class="list-group" v-else>

      <input class="form-control mr-sm-2" placeholder="post ..." type="text" v-model="postEdited.name" />
      <button class="btn btn-outline-danger" @click="updatePost(postEdited)">Actualizar</button>

    </ul>

    <span>total de posts : {{countPosts}}</span>

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

  data: function() {
    return {
      postEdited: {
        name: ''
      },
      onEditing: false
    }
  },

  computed: mapGetters({
    posts: 'allPosts',
    countPosts: 'countPosts'
  }),

  methods: {

    ...mapActions(['deletePost']),

    updatePost: function(post) {

      this.$set(this, 'onEditing', false);
      this.$store.dispatch('updatePost', post);

    },

    changeEdit: function(post) {
      this.postEdited = post;
      this.$set(this, 'onEditing', true);
    }
  },

  created() {
    this.$store.dispatch('getAllPosts')
  }

}
</script>
