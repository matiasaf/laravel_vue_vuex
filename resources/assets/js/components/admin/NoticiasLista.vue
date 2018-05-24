<template>
<div>
  <h1>Listado de noticias</h1>

  <div v-if="noticias.length != 0">
    <ul class="list-group" v-if="!onEditing">
      <li class="list-group-item" v-for="noticia in noticias">{{noticia.titulo}}
        <button class="btn btn-outline-danger" @click="deleteNoticia(noticia.id)">Eliminar</button>
        <button class="btn btn-outline-warning" @click="changeEdit(noticia)">Editar</button>
      </li>
    </ul>
    <ul class="list-group" v-else>

      <input class="form-control mr-sm-2" placeholder="post ..." type="text" v-model="noticiaEdited.titulo" />
      <button class="btn btn-outline-danger" @click="updateNoticia(noticiaEdited)">Actualizar</button>

    </ul>

  </div>

  <div v-else>
    <span>No posee noticias actualmente.</span>
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
      noticiaEdited: {
        name: ''
      },
      onEditing: false
    }
  },

  computed: mapGetters({
    noticias: 'allNoticias'
  }),

  methods: {

    ...mapActions(['deleteNoticia']),

    updateNoticia: function(post) {

      this.$set(this, 'onEditing', false);
      this.$store.dispatch('updateNoticia', post);

    },

    changeEdit: function(noticia) {
      this.noticiaEdited = noticia;
      this.$set(this, 'onEditing', true);
    }
  },

  created() {
    this.$store.dispatch('getAllNoticias')
  }

}
</script>
