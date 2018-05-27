<template>
<div class="col-sm-9">
  <div class="card">
    <div class="card-header">
      Buscar organismo
    </div>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label>Ingrese el nombre del organismo:</label>
          <input type="text" id="nombreOrganismo" class="form-control" v-model="nombreOrganismo">
        </div>
        <div class="form-group">
          <label>Nombre y apellido de la autoridad:</label>
          <input type="text" class="form-control" id="nombreAutoridad" v-model="nombreAutoridad">
        </div>
        <button @click="searchOrganismo" class="btn btn-primary">Buscar</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {

  data: function() {

    return {

      nombreOrganismo: '',
      nombreAutoridad: '',

    }

  },

  methods: {

    searchOrganismo: function(event) {

      if (event) event.preventDefault()

      this.$store.dispatch('getOrganismosByNombreAndAutoridad', {
        nombre: this.nombreOrganismo,
        director: this.nombreAutoridad
      });

    }

  },
}
</script>

<style>
.btn-primary {
    color: #fff;
    background-color: #0fb3f0;
    border-color: #0fb3f0;
}
</style>
